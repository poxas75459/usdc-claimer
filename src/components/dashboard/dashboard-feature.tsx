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
    "3ghYCqfELAJ9fSurwwX4vT5V18FnTqSh1fYvQGVVGdWrUKppyHnfjXz3eonqPe6agV2HY2kyGfSz2LjRnjzNifCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wBcrXFFQgVBb67azgd1PL8p8Cmm8uoBcY2pC4QptamEgRKv2WkhJhNYUn1vgZYctKmA2gsWSaoeZY3zc9zWih2r",
  "key1": "f29SQyeZxRKqBS8UPEJVdSNk9ispKhbxsGQCJhskKNn7oi6fwxPu3cLAQijb9BN2YtsVubmsiYq7iWzJTEXf5Mu",
  "key2": "5pVCJE7o6Dzd9mMXEsQ54k9K4SAdi5TEuLooH9thAK4JYAdn739VC9K7S6F6UKKtxXoErYkZMk1J7WjJshZSB1Ax",
  "key3": "pa72Br2GvjxJWqr5LEQGADqJMoAaUB6XXmbcLtqAdCHjhhCqhaA9DrEsuc5XTPa1zWnrsp9RqHPFvPZXJcaq92H",
  "key4": "X1K3QC2PhSoK4mTtmAdET3WUa1EWk913tR9e53fJmrcjsnkjZdruBxtgjUQGBpf2b8cabN3FDACGXNRCMNAwcqF",
  "key5": "24K4geeQAybhjpCvkWiQb1FCXFYDZf2YQb4N4MUzpK85B4amiBqoq78okR7EVU6nzKo2ztufnSFKfHpx883tJEf8",
  "key6": "4rUpSwEHh2yNvWoRmhy2o8hWVJoTEBrs7HjLWCMd81wqm7JEWmwJZ4VJhyTce1XVojQXTzhFq9Bntv3SLCm78vjY",
  "key7": "3Bd1HSQs7Jo7FfjGSG95PajZ5NUprayaAbSRd37sYTtzyGMie9sEfjTUKiQbXHmQDjyRUYjjzA8kPZHD56fhuvm7",
  "key8": "3z83sEabZ4qVsMw4unJQyn2oJmw5xfrLV9Xp9xyh78HuVK74pkyXaSixAYejy1RMxePpbqYkQKdrt73aLKm3p6bz",
  "key9": "4uZvdgRz3gpW7Ts5sLT2HB12ECB54QnK99Jqwg8YaGdskAxkXqyfvbvVPuZQywWzyWQf6Rahui1v8Z51gEZ7DSv5",
  "key10": "59N82NqoX9CMTa9XPhohV4TTYaZSnsDFuuBsDDy5ypM425DZLVM652UG9fuymiVcurthJi7STuMyuErx1bb3kqZn",
  "key11": "4oKtpgE8zNBkrc7kdadVfnBncuvjQH3DKhHGoMXodmX15ypW4dAT8UvBtGXA8K49hbjiPCGvSbvLArLZeSVm8TRc",
  "key12": "4xbwGhgTHFUwtqFgvTXffsF7tyDAqURnKiREH7XBzZbAAZVzqW5tipBQNYYgy7bKRSFWExcuLaocD5JZEoxGEh45",
  "key13": "2vwUYCDM5Yd4nMPsqzAanFsdN5VW4WguS1HQdznaLWuKnyChzqyrj9VZvJHHc2mpLBYJivKNmk97deLzijjANHAY",
  "key14": "26CtV9RD9UPyYD71xhiaoPa92XHsikB8EmW4qbGrYUsim3NXX7pTBVgMzEtaZsFB4ENkDwxXqFeNV8M7Q5MVN42L",
  "key15": "3dAPvXxVdkCezyvurwoz7hAznqU7Ve58bFNme469KSCprmeRxUahBai98rovE26FnH8SsC1Q2FpnegE3SrmG1JGy",
  "key16": "4V9DeLLCQGdvzihYdcipyQjhN1fG1jNH9YGRPFgz1Ja1f76SYgivWir6SNaEAbzPT7vhYby68X2bKUjT7XattGPa",
  "key17": "42DBTduB4wuHUwYEaqkAM3US27MDyYEPFqny15BMRMkPdx5f3sy9Eq5p5uL5xZMfw8bM7Vh7s8CVws2ngoq9QJHR",
  "key18": "5f4rSW3y7WazLN2vtADDBFnK1jBSYate8krKE8Vbh67HUc6b5GGA9XHELoDLw6ChDsCzQqKV2xTteZ9FcdEdAXdc",
  "key19": "3MVfy5ejLwWs6sFWa2g3iBMumJNhhPYpM4a74iC5z1kkPNBTTC5CbKjb3F6XQkB43bjBcWQomkr1rUR7onH9dBRq",
  "key20": "43xEtF6Wdx8h7AoWao6tTaDKpqzgmtT6HYhteHrQ7tnmRLfXksY7SKwPHCPVWCurY98AbASk5KBZqjLmtLcEipe6",
  "key21": "5ET5R9Zs4RWdMesVBY9GkEZahKzQRS4rXtFcJF4QYMqqoB2sKwaDSYzXrReGrYX8QvhwDFfg2hKeKasZcSQsQwwi",
  "key22": "5TurrLnKNuFB51bx94W2zZhTBPT2Xz95GyeXeJdQwuPZ1sch53cR2qghLmokDZB8WmeivRxRJp7jTfXdajYbXqUh",
  "key23": "27wBQmS38fKaV68oHuo15srz2C6scHh33zbPfQKVzG5RKEepby3f9ihMgNpDvMKHrHiJpGN22dHNb2gtNzDjfnv8",
  "key24": "4B4wGNumGga1WVuiDYWtPk4toh5GD2oi9ttRmscyL55yk8ERbBETtFBLArc3yUwqHWRzzySMHKrk4XELWXz5SHSD",
  "key25": "52qSYZdnbm5JwiuQZwxeQNMf7guCqCikqz8Z3dDXWu7EiwCqVrcVTPTQ9D2KFXYRNGEtMw5iPEJrJr2TPZLgwtDj",
  "key26": "2egAH6BamEANiG9PJ5RWr1MCaVcdxHcAzdQH4gDQnv5eXDYCTtqW4spRhwStA38LpHmv3jyScHX7x54EqYCH4n9B",
  "key27": "2h2W5RxJzpWacLFQ1eLkGmUm2WytgkTaHiLRpLJ7Nik6LVVZDT2YewNChT5GbeQEVP2BhGDMQF9J4yLzS6grQXea",
  "key28": "yxpLwdeRuaQcXExEc4KmY8R9g4dtMnw6ZQmDyKYwYKK342ZjTTinkxrcY1VUBe3YVctae1wcseroMansg7xqLrN",
  "key29": "3WTxQLzmhFKXiaCxDLkSPL7AwYxsdCArGhZJBUbxLYgsGzgXYN6S4gYX1Nhia871RhZFZtBZWuh6M7cJy7xKv5DP",
  "key30": "4N1c1mtDXcdcu558XY2KHnSPCLLyN6w3nDydUvTgA13o5MziQ1P1kYqmv6LKFtXxSAMGzvojrQK4NdDqg2u78Kzd",
  "key31": "2aiHbvfAKcqt5b48awqE5kjKaLtKg3DhAsVdJWZVFc35hwbExBA8S4Aqr6w1AvvUMDYq35pt8kJMxWBqbkDAMbkC",
  "key32": "5Gcgab7YxGF4aMvdQoNWWnx1Eyryt3qwuaoEmypWhQx5xQBv7rCdWDgfNFKXhwNRcZuJamvkEW6vG5bUJcw1bJLs"
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
