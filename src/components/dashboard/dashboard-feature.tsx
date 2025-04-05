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
    "3ek1wpypf6gBfJ1p1vjapSAAxccVGHrL8Gc6s8N5C9QkMG7YbkSiSxry4kWTx3KDSeMenxGPdNb4x2NaL69CrmDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzHPU8U6QCU4rgRdBMCWTkfVWyKaUbfvopdTMv67FBm33di1sZFzBxRmy4VDbhVo1BDSYAYtDnNor87j9kHxCqX",
  "key1": "5uBovWao5f7628jxxYbK1u7hzc9uWuBK5XGf4K9BfhPrxRXsm7iy6DzCzEhyM6xNSU9RM75u28gV8kXVKpaniN5o",
  "key2": "2NLYoT9eCJudF1ps54NkWNbZ83nrLpjWLYvkC7yxfvLRNmZkKCHCqfAsnv6n135yKBNbtxU8u6Sh4mFGxhc1Abh2",
  "key3": "3ZSKizTyq1FVgmRKuurpiDGys612CfqaMwAGhdUzbynY5FWqCKC55pyMKfxNSmBuBuDKeiWptNjkT9YFKE6PMAZC",
  "key4": "4ojYmKGnzFqc9Phfvr9YioEkCNmwRKSVNavnojg6tejFczYAraU4n3kEPkfJX5ozuMXcR8t6jocrRdEswLYuwvXo",
  "key5": "2H3sFVdCJCPhx1Ad4NXRsdnR2fhhh6egZsN5Tbea8cAUv65dCGW3BePXdrDQsGos88AfajYs5kaKzXaJn6gUcZaW",
  "key6": "28p6p5ysST5ssZcLM5ysZcrLD1VrJTQJZjmcEjEBUp3m9hcxWdTdUojZdi7Vzo7JBBUvb96BjLXxNdnFf87yJu15",
  "key7": "4da63wqGxCGoVxHMaKuDL8Rb3EsYaxs4LtoQxksQ3bbQbJcnMXL8aTfwsnAW1dJLgoN6RzDQGuSo8bRxtLguCAU6",
  "key8": "njgiyJzaFBWMAynwbF1fPwbFYo59FMgRA6eYy2secQKdNF7DBQbHqTLjrHxugMPTt3ENSAoamTNb9zphywZsRDg",
  "key9": "4VUtdUt2VRpX1Y7DDbP9gv2EcWMQrVZ73MSUHXY6frCFJU3PwavmCd9mpDm6GoXhaNb5bsppqeHhiyDNVWqM57YY",
  "key10": "2kSdCJqim29M2oB5jQXRA6mbARdXTa1TGAbLEevYpYdFmeFzjfzMozkCZZBjbVjR2BVSYsREU9giuScBJxWdg5aC",
  "key11": "4Rsa9h8Qa9Q7NE3KXC75w9VN5Dc3tXW8ntv5jL6yJ7BkiKZua9vsNipkwGwWnrqBi4oNGXawCAeB2KBUXqs72m8f",
  "key12": "2KRsSdQN8n6DCXQFiPAusNYJwGDPLBXUNZSyMet5U4FMCWAc96onrRtRDw37wCBzStGaHuxKNeAPKyBCznr5BTmj",
  "key13": "2gCWgyTwVGEHFFraw69EqgBpamTXK352KU7mnjANEcALA2smoT3M17ZN9BZPFiRm4uhq7ySCze19iB51zyKoU1MP",
  "key14": "TxsXUX89R5GvusN2ieD95qAcRpzrfwnCPya1CRQu6NYLh9tfujJRbbsgWGUK9dNjCBsQyEiUhqca9EynzNQSjQh",
  "key15": "jgaawdn9nAbPMGxyF1TkxiZrsgyqPcL4Ac4ioVx7ivzK9eVpMtsQLm6vw79R8feMUkQ5dDPwT5gfr5momSnLo1Z",
  "key16": "5vMQAdKKnpFjwaKFh6u88LCeD9yndtheN8aNv15xtDK8VZYGEeBqisEFLYVLxdWbPCaGdmqJdt4Ej8jEMTgaQxwW",
  "key17": "2ecoPrFzV5LEyQb1MyRhumqLDA1yWLmoriin8eXnnn4qDA8Yd7peeFCsUMrpqBULVh3z1a9CRgBWerAjr3mLnh6",
  "key18": "5kXKRqJZ6SNmhZtJThHUxev1apQQYpTNYg8K31gLEvf1Wjx9RmNt9SHVpnuxoPC6cV4GttCw3wgALgoLdLBWTgFd",
  "key19": "2j473bp1dhyXm5tA3Umgq2SxKonQVu8Jo8ipErh7dPT3gCLGUxQuXNeDJ6p5B6NjBU16vJq1zFVw17Lc8go9y62t",
  "key20": "Z8TWgLZY9XDybZaaWDNFCLHgWhnqMxDU5tbhf3JdzrgZxGapAYRgRWB3LRnv8pTwsEF9tfkJe8uUjpbmHuzLgN4",
  "key21": "safuwZz3pA38erpn687ccR4cnCrY58zrqtS5boXkjrBWLavagvbwdacj4QPcb9SZsCYgQYhGWxNW1u5eHzyvBGn",
  "key22": "4mfhShL56fsv4A2TGQw4msfmjJmbzdqQhVKGvFYoKyCtYEgnght9tgk2pFsPVJqe9JC55dsyVk6tRLEwqi8twULr",
  "key23": "3af1EY59SDNLDdEgPpqsgUiqTwYsnu5267zCD5n6gvCMtqJMnc87U9gQjbCY9wie7rSFi1DNDtwZDtjWtZnTGHjs",
  "key24": "4C7BGT64LBA6bmC1UagTgiC4sV6rWH4WpPRdF3iR7Tm8GQFcgd3Q4eWWhnNRPrKg6H61Jd3moXTbNG7vMBCRVq1y",
  "key25": "5tdh282U41wGv8p4FgMgn293pFu8sYYg7vBTJNczv7Yqh2A6bLj6Ztb2PdH12Qwyz2UPELZLxcC8kTb7uXKtLZ9p",
  "key26": "4Aca3tk1ZbjU9iagQhGe6JyNZ4xnRBv56upsTzi7qzxWC3gC9pnBQofnRrZfBqSmMg2pDGJ8CApavN6mjddeqayf",
  "key27": "2JkLRK9E7J3iHczrrqPTgYmvo3FKo2vzK3oeZ3KsVVA3Nu3vPeo7CLt6TFHVg5AKsSuS49bqJDpqjUTEDGbZtBG8",
  "key28": "4tadgHsnoDvbmyPvyJGdX7kRKjXaebbxuqkYzdxkk54SDdwHtoHUwtDGtVQvAscgowJiqKegsUz9wYrXq9ZzsbYD",
  "key29": "5aM2Rmb2WsxidohJyLjH4A4rAvTuXhbppXWcFEJN4AuC9bBsPgBZgAmQn982x4sBAFHzvkBW44xVnQQJz4X3f62o",
  "key30": "vPXVUE3rZNJXrEKwawyvgPRFSL1sEcMmvJPujFpkjnpfSFEXuCG4vGvxcrnVs8HcFHeGBFxcFApaa2v5hBPEE91",
  "key31": "587HcH7bLhvNpQQbeviUZrWWE7kTKTMi2Hah49XeSaXaftcQCwwt4pw15AgB57iUoZPn1P2BRtXziXEP3rwzfqWu",
  "key32": "3udu4sEPHrJqUaRExwYaSmXRim6xgzq3LMZu5357wPkQBeDi5JjN5dwNSty6Cb2V4wq5AUgwXjbLX7WmgKCLkE1m",
  "key33": "4feUBrsg2ybyeLYruhoQr67ywi9jvqKAPLVM8nmrXudMjRpiEw8SL5mCMngsRa5j3g5SCU8EECo7KzZNDxhwiAKL",
  "key34": "4CxMZ4riafc1FwQYPQVZrmKH7U2KdrjEuLc9YumnHqtvUv8f6kH1GPbLxfrGTVShaazsxdgn7VrT51XDa4M5mc8V",
  "key35": "JZxLVT1G4sRFSZyMj8pKdrBN3ujYgQRFisZsjit8V1fk9U384CASZ7jJuFz6KS6Ke3PdeCpLTz66sC1LoWo1FbD",
  "key36": "9AkbDqrCCgG3J1EqRRTsgs4myr3uL6P3JpP3CE6amh3TA8aUZd2kC87uu9EwxyQUHRZzM3p22BtUp5z7cBs5nRM"
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
