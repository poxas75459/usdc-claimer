/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5aaEu5DQ6VWpxJJXJ2JZ1feWiu4kW5idVWLoSe2GBXF1bzPPNvAEgf4Mn68QN1SNsLFaKCaNkwcr9emUAXMB9qdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4moE9tEiYd8T94tGyyuTREawJDsGjKXUsAF6QVr65LYPRi4swrt3guvWoisdMHKPKjcSNGwnRimb1L6t2xgYzzGB",
  "key1": "UvXmgRz9xDoPgdGYiwBumhEZZFU2faFPa73QNtdEgX9Ymak8tYNGMiJRF1x6nMExiZEZEZwGhMzr9PUpczWqB7v",
  "key2": "5aKwWP3aukhgqiyzQgZYWuWqpaqxbhpEXfXLP7V34wo7pisSY5MNKAyYT4TJkCVu45UBZS8yUgCSzgjR9nRPSvxe",
  "key3": "5vVfxBBgctaUA3rB9dpKxzRHCp5LmTzfVStgnRdgJjruUBBJSuUe7fBA39hgQ6xTUmZ8BcYE8SWoAaZ9dTcK4Hx9",
  "key4": "4gVefu5er8bFinttcBbvqJYsR5iWkUaAzDKoppaa9zJsS9frnn8721v6mM3TDUugcaGcwyQSBNdpcnFGN7JDYv2P",
  "key5": "64Jktsnf9wDrtXVWukAjmTJzELAnX6YGeGBwanbuv1Az1JRRpTAKySww5rFUnLXERL1n3kDk5VbqqAGC495xofnQ",
  "key6": "5finKFDgbZwhhhY1LnSDhy5yxCYxjh3uaRGmidj63QKmo6Gxxd2o25v2ywuucYgVH5952V5YmoAnhcoCeUzQgvwG",
  "key7": "5CHVbMcfCxHUEDdnGTTJ6KXbBXTF462p78gD894znZZ4okk2usZwdEm9JSMq3nmemBxbysZETWY9xXccSwQZptYM",
  "key8": "4HPLaKACe9pvtQG11JnhouKrAzL5yybWEpYEUub9rmWU68LXyjdjBoM1p5WMgyBSbooDSt5VS8TrrVuxQdnWuh6N",
  "key9": "236QhhpyPi81PeECAJfuQRUaeVwQ5EH3kFhuhNFS6oKP7pBuPovyw1gQHVsxoPXAYpWstKHAty8YeFS8a1LuVFW3",
  "key10": "4LC5uzuHkS5EDhH6sGABZ4j6pma9mzMxW5C3kGuMVhguE2KuLangZXbzVyCF6mthzgQg7zyDDaftxQBZrzTeBDHE",
  "key11": "66vxi7B4urVCgmF4WVbjC2wUtQrpYJcBdzF7FVGRDnLi3CSne6D9UNYQCVSV3zBJ253F6YUnGyewSGEuR6pZbm4F",
  "key12": "2qAJZ5iGEAqAaos7jrT8pZtFZdiv5nFpbT8LA69wm4uvmLTkuZX2au15sGJroZq3q6g1q7ZJTJmQQgTFy7uT1zCe",
  "key13": "67rKK2nPFwFxK1jXDuvi9yhLkUVyjB3gij5JhEzGpDGTF6a4S6QmLL35fKxw36zdgTAsNsaHRiFWNZgXjtTEvKdy",
  "key14": "D2peR2gzDXzmJU4FYrhaHVZD1cRWXnvHjM8Xd9UsJTxFqwp9DTkXiWkEMnzLyXMCvN2igC3cYWCC5voxGBzvMQX",
  "key15": "h6ZxQJk6odx5v2bhpG2nPyAYjbGzP4TykdPoaqTwU34dKmEMXQUPypuzi8mh3PpwGQ4ZUavZqNZbxAnYJ3cANEw",
  "key16": "223TR9osAoePDidbKJGmkpY1At1TGzMMgcutoDaC5LTk7KXY5iYEZY2bDWgRAVFEeuowsFVBS8m8MLcE1Ln5xsyY",
  "key17": "5EbnewWYcgk8hAdrLW1F7Dz49W8N8k42zJAotmiBV9kmTCuom5f2L2wckBAUBJEvBXjX5on9GL358ijJkmy4eDvM",
  "key18": "3b7sd3N8iw1HVAfgBbyaS8pXNEkrvaqVYn3RNgNbPpbYAjcheARu8gchvpLtbMxkvhFJ7UbdH9Fn7LM5nxCYkLfz",
  "key19": "2urxasDxiHqYsujUFfRNdfE3UgjnFPSWBtfu7to7GXAMfcWFpNaJ2EsqH2XsfGVqXhPj5uJMejE9Ji5knxEJQd9m",
  "key20": "67qLzcDhsqqi4pZdmnKRCx7QzEWUCFt1FtfZV4Jgmmznix4aHFFSgVEnpiCdT2hzNoMD4q1LydyrJb6K4zZLyJTx",
  "key21": "56H6w3w8AeMWZKdqURBJYeY4WvxP21w8a7gcfwGJDFY8B3583iLTdFewZG5waSzcosA6Js23c84R21haqimRw9fG",
  "key22": "2sJjDdTGjQfoYF6zxksSaTeWTcT1rUeNLHj2L2p68SzsC3LGeQJvqH3McVsgUDknoyPiHzgKS4a2AZR2n1AMeQ6s",
  "key23": "53Tm1hph9LJi1f6FT437ATxy2v1NHZqBi6HetjXfrHqxELAn3KeriYZE1i5Zs182LMpUV4GjhCuQbUSdAPnFBRwm",
  "key24": "2d38BLCWN8VxY8fWsrpS7Jmj9UExmfBLkeEYS6SCyun2HA8pMd3hMVrYhhrMPfKcXj1NuNkEVEWNx7PbWpYkSPaS",
  "key25": "34iucvSPypqfN7rutnBSugxSjTsuJzRvCsXnUvgyHHuQPiaLDGE2ppYC2bk9fFP3Nna2UeC3Kj5DZ9dhRPgaRpST",
  "key26": "5oQ8TWbMNsYf6r2rPGc1WKCa42ZfWVe6QBGVogTX1LiZXUNb295gjGQsK5SdDzu5xujx3E648TDaCFB4zZwrs8U7",
  "key27": "28SBGoeagdNMqjHksq9AEm4X55QJrVdVHPyMYoRBwvdWM9FShWEQ1UaqszpLhdFDRHPsoJxkegESd6Argx9SNKgm",
  "key28": "JoxKxKkUuG8RAH3cZfRUGKSgVoBzxyufbYmHSAXVtXpJycMFSQvsRzQXksYDaHPXqLSHYkj5FE8Z8YH7PYQ8GaR",
  "key29": "HoBrfiuxb3kuDFu344ysHjTSshwQwXL3tTDpkZhFk9eGwehDYK9p5ffUDj1UL6QjA9Hq2pZM1TcHguXhuFz7LT7",
  "key30": "Jf5ZzyAauQvp6hSfWS14sFire7M1PzLLDfofmJbVzcT37zsxpfKDRHw8PWtYudkQ7Y3GjKn4bvKZteAppoGVCvy",
  "key31": "3o25wCm17UNV22F9Rd1gVPB6xPBVMpZdgNEkWFHe3KgxZvbeMjr38h6eVjKXWyauHUN9BTG2DiYT4iUgfYAAu85o",
  "key32": "538jLqWFFsNszdtEDdiuzL2uhqchmTtunxvSwdBMppBKCgMugDmr3mj7Utg3iz3JqNr2FotqubvNdNFUVd8jf3Nk",
  "key33": "3Qtrj3QNPEZyEguKsxPZbDBykBJeK7Q54QUtBkp4sbtK7ndbcqnqnrEd6iNhRqWhFW1DZK2hwkEybFFejTsJRfpi",
  "key34": "2qrozEzhCdi3PcX2kaZpn7teaaxr8crBuRWCFVM3kBwCy72vXW9yWrbRMK4RbvrSfihSAdoGp4PbRbaF9iSycJgt",
  "key35": "3V3Tjp6yVu8PjN85Xq34G2mq8icwmzJbooSMFccHmsYUgtVPYX2zv2Zn8YayxLL2nceiH2CWFkcxXTFjtjivDyfL",
  "key36": "3bDmwdqN36CAzZ2q3uhWWeAimYRTN6C2Q4xtiM82aHj5f1PdHprbUH2ZVfTYcUJysRnRnNKG191mQwxuXF9AfN5G"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
