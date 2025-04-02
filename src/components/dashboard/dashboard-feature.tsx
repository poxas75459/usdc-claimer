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
    "5HDrZWCVrS7j4VCN2WGoEWiogpowJrHaLtp2nnnSsfnpHBSfdryRo3HZtFUbr6NRnCHCYJj9WB1uKsywtBMi13Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1pq8PkKb6iXFMxc5TJSubBb2TWJf7HQfNBcWJCBREnuV4VaHMSz3rnszQqymDyG7E7bSyTSXA1Dr3pm5KtF6u9",
  "key1": "5gGyj7WC7XYFersFNeGGyvH7Mddr1AXnJeXYPpeaDZCKY9D12axy9h9FhjHLRp3eoX4ya27trjQW46SARTMJEAkL",
  "key2": "3CqqQVeG8h2WcCqQBevGxz2JLH16uPgUUVSFZffEcd5jdLUBfXAWKiScbTJU4LGANm4JHvAa46PoZD7zvMpG4MPE",
  "key3": "5eGkSydrDwBSpyo6Mj7BRjr51WRPcDRexjkTTAceyFuaLqyAtgLyVakrhJ1WTyQFGUxV3iGjM2y2Q45NxMVJwnNJ",
  "key4": "4YNM3FHZNf4HSBGr72oNKV9D7qgJyAgsKyCBhgxsJPZMaHvcXyJ9hwvJVzGwC9Cusa6n5if25RwBBiwpQoR91fb1",
  "key5": "5C8j51Lvd7kD3PAaxvA8TSnAakzL93kckdKLpjMrSHuUvcMyGNMtLsdcXe6MBLz3pny8ZfZPtcs5NS45SbycroiQ",
  "key6": "2LNqNyPUweaWumFg1SRkRj9amBcRo3J1MkXZTA7hw8NocpMessUBzjcmDK2Wibg4EaAzV2nyqbyAw7Abi5HAFabF",
  "key7": "5avXAYvrzpSZ7J94dinUU3BxCC2TD6ciQHiieDBjM8CA2TkoU83AKG4YDLjVvwCohKv49AFdWGx7nXrfmf5cSJmw",
  "key8": "5jmHCSPkvHq1UGMnPuFatQw8pXYnFtF3m69frvi4ZPgVGV8iFqnJ2j6QyLYJTQyoP7jEnoEgKcG3yg8xGuvvKWcS",
  "key9": "4if55A8SLaVyjCeJZctf7UdxVTwBDhghFhpUFxMawbRCYAnLKCvoWLRa9UpgkJKBUt2NLMku1kJbLihkY5YzimPv",
  "key10": "2rHy5YjfkQJocLCjvuMiZeVyWTDrRREqqKZCsjQ3eSXWJnSAGbjboxBwnXFrqaFJ4CzxJakgX6MLEMdCPEWcf3aV",
  "key11": "2EYq76vVW4abRK1sLBQzEpS216arSsPsAg2fLGSz32EmdbstX5douzXx3Tg24UtkeKSncvA37JTsegaAb89Q3fBy",
  "key12": "Fp5dr4cYryXvMxnYrEM36B1T4gVC3E8nFd1txsXpA1tofATbFeFC2Y9eqiGGoVH8FVM18Ssxdb8D9XtLn43X7q8",
  "key13": "gnM8RtBcHynvgMh6cN9xFycUCFTMrY8pCv25W9Z1WrmU11fmrCcVVqoctpUbENCE6CiRyj63Xw4ZioT6EnBbHTf",
  "key14": "5WKdN1Jtu4Qhy3BjRmPbjxa5r4r3AhDEmnN4Pmzh1UpUMH31GsZG2Ttoj5GeWwxqvumkXkRmws8U3xLczExC95ud",
  "key15": "4WQcHqzCjkLorJNLYV2jFe5iH5NZ53N57XNWAmVU82cahPmzcVkc6dbBKvXVgBHcD567iemddRmmFv7wsB2KHyYk",
  "key16": "52nK4gGFCzejbSsYQ2GuExjNfDVrita2uwksyB543UN31tguFgxj3DcAeFBsTyVTHt2DX98Xo7G2UEAYRzXvB9MF",
  "key17": "4LbdGfwqSnd48bSifjuzvkJg5r3MyB7rJX22YS9GKzj23BwLAum9TcLBUmdpNEeah2EH77vEv6MyJLuvWqWLX2WT",
  "key18": "6527qqzd4DVBQNCqxzsoaXdmsRr1zFenq51UpmNxFYnEE9391UEBL29XJBHTrA21DhmzheTJJiEWB38SAToUXc6A",
  "key19": "25hb7Y62T6PwYSE3P2dJnG3fw9LfGmwfdcYFY49SCho8CBv9VJR94kzHcVqW6ipYq7uvXSUSGq2hoojXwwrAgKee",
  "key20": "5LnmPhKb5JWU8n472SJJPVDHDU4rXqGMDDfHfmXqzkYnFwWXhEnyfWSEb3zH1mcRXwuR3R39H6xsnHQrXS8gWntN",
  "key21": "56zac2jFqtkYNJcYyNMcejTj7EXkNMcD1UM5RUmLh9oNKJvz8apKgEGC8hTvFUdd65yVf4LiZu29RijroDyvvwD7",
  "key22": "4W9Hmb3nFnCCFMFKEmbsNqSJziMDjtio1zi61QZTQMAP5kZjMJ2WQ4B7xtNqDVNQTNkJZHgnJkNhui2n7Wpfj2k7",
  "key23": "3zSXmrrCUVKhf6YJvWfgvnmfXyLkpczYhsFR2Am8G3fiNGb3Fws1J3VJZTizfo4LUSTyK2PKUonTyCy7YT4DtADw",
  "key24": "5z7fi8nSrUXKvcU9moDCq9wkuR2TS8cX1mxMzAfP9BnETCMtmCGJ1bKeCrDdkgKsAFUUVB5dLKKBkMk5iSJZXQjb",
  "key25": "WapdXustr241NXwEcmwxtJqEvaai2Ga89CApLwp1bzsnEVAMGozMRfqnQ6hsQVmMKvTxTDJwy4iNHc4XPYnCe8N",
  "key26": "47BR1afRP4rDgVocx9dHNMDAmen87UTc69WhnRpVxWRvCmYjTaLqekGBqZuUrnZjZLE4TMGPwSR1UBsYfVPQc6Bi",
  "key27": "4ByCxCf1PcqrtmavBQtedQx8ZT2rysiFZ6cmgYXjAtn6V6mmya4PjnuCN4Sx6MKVr1tVNwRL8KAXVNNWE1xbib7i",
  "key28": "5DmQJiPH5mCVMC5KRC8xJou32D2qxun2yp9LrkkLaT5SKiEcNAG3qiA1zQKqwdFGR34xpBYbVNcAKuSZ9BTCNXEL",
  "key29": "5fYe6ixyC3oSzg7tfJkkeqJqNY4RuQisXEhmbfx4qHgZyTV4PQqjmj19KkQD4uALgfZT56S4yzTnRC1Lu2C3nYmo",
  "key30": "yK5z7XJNFZBc1tRQQxmCTu5TPbrkiysAjySwmpkb9VHAoCts1meQ7Hu6Cih9iXekCNmToS85PtAqkU1WHyYqQRN",
  "key31": "2XaPyb8V8LBCmaPQhHzY4vEvzJzybU1rUWcC1VwRFWtx1juuFr3JrkFyZ5YgyoH4JwDddCasbw6C9MQX9AZbrtUN",
  "key32": "heN8H9uvy9qEMQjcWDCWZ82a32rkwJdTwwnykUNFG7GvsshzxqZT8g5R3BBviRAzdTLVyPbjf58CXF4f3R6wNPy",
  "key33": "3UaSAQSzSSnS1NFTrvpA7uzbknax46bUvmtX6qcNFuTQM2oq8Qa5LtpT6Mk4EefYT3aBDtmKRnM6AMgBr7VbTn9Y",
  "key34": "3VZujYMvMa1QgMjeEfAwKuGNCWnoRjRwEEnEZN2sJSRhvJgTX4zjzjsEpvmk9VYqrgQvg3ZPvzs7eRSmB1t37VhS",
  "key35": "3mieRDdNxTPxCK2cXdoiNpFkaUzRa1E68QnEkA1GY6EUxWvqjffrgQ2y8xcS8JbvQLChDVBJHNNb1K78iLy1FiZH",
  "key36": "dCNgJLf1wWPMsUK2akUPMc8fcPozgUz1ZjCzYpZVY4XSFuw1VB663TgkcC9SBJe271AKbDFe8GwasN5JWmzQzhv"
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
