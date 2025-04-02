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
    "57PEcLFzzJEGU51ri422uqor3Ayu2GBi7LUiGFvkqh7CjrmzeV7S8qXXsrGLMjnF45jU4BwgMt6YrcRmWgGJUzHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kx9tp6ACZxKNiMnxi12wECCWMJdgJLJudjZXTz1Zf3WzTWQR8H7DmN3fR8qZucawiyFktM2C9ZMc3JNSFvjPuk7",
  "key1": "2QDeatd7VHQsmAV6pi1b5bRnnqmooLJs8Sa6wECTDBRkMJJAiBkM75rcjFvWDmKVuvLLNRRRKd4CFnRupF2mrh3v",
  "key2": "3JUPr7SMM8VJkkQ8MRBp2Kt4FNMxDEyyphs9GiCEABJmXye6LkYKfVQFrXkFrGQYiM3cSPsnHsVL8qv3UGL1Hx9o",
  "key3": "oMsnnmBmNFParvLKn8g6nV7EJSzfzgck67i6gsVjpSfMNEPXjZYfTeuTdWRFGw3N6k8VRda5RRgTXo1HXse1k36",
  "key4": "4b8D3U8muN9AZbZHCpkJoFQiFVhYCJ3CMYznNwpFJqetihTWUVG5H8UACt9vvjmHgwk3BDg7Buiwt6FMQfmuT7Zm",
  "key5": "2QwZqZrETsKeeJjANuaofPLrLNY2eX4fMj1j5D24bVRYY7Qvyd4XWKQ6ySUv7umQnkxh1hzeGXvELvmuuKSz3iiM",
  "key6": "AK6KmzcLi16XVdd9EbzrhApw7MGkyyfNdG1nKzz3hVLDBJz55EQEt3dF5dw6WzcTDoTGv335fuZvWcM5NpKzAao",
  "key7": "4Hn2vgDFi1CTUx6AnKJbw631mkcfr78DykhChP4NtyBwFTvqWquGT87kHrop7A6vXX8VUvftepgwjiiUWhCYDFCc",
  "key8": "2gRGAD3M4w1e5Rf4zeNQ1EsTnnaHc6qon4E3X6DgJ4XYng3ShFYDnpxPixV6FJnnyZDRWuuJQ3MCYMQXdfKCvBNw",
  "key9": "57LyuA97qHH2QgFYZXAjRz7M65vfcNvmQVtUNEtHEY9bHgA8TLcY35DqxJ5fdjH54L2v5honTrLdL4GxbVUdC94b",
  "key10": "2cxsp3xAyVr7J5qdiexL2bHM8Ez4rALYAgYq9116BK2XejWtz1PsefNnzF6hwhNR3hkkSRZUqoH3tKm14rZXgoUM",
  "key11": "2HwtcamxAnfKXUTtiQ2N2y6U4wAAWa5JFwmmpFcYujkkeAAKaosD4uyfnGjfvUVFYuezPTQ4y6Y8eR8GWkef4s2d",
  "key12": "4Dog2NreP1FoGtA4qkbPrdjHWLpU65CzzTrGHpgVUDLfGvVB2XD9Tm3Uk8T4Pntx1WDHYJiKuxBuFcNDN4PaRBUa",
  "key13": "qwvraUgPKHFNvp3jSGZMgbNvqH6gLLV8dJw1gRUS58H8foGDd4RRuKtN4Gdhq4jL38ZvAnRCuTbmZapn1kJ5tTq",
  "key14": "2pvKJGj79Le7nr87vFQtF1DJoc2ZhAVS2Ay9Wxk7491P95JXYBVe8WmiuF5tF6Nq8zaDNaPFwzRgsW4SHgC3k2jM",
  "key15": "4gCQhwvP34rnodeKB9o9h3ZXNcyFej1Wvtab3KN4HneGAiGBEaN9B8kH3TJbv4ws3VHs4QxgRWXEiwwBdRZdJzxJ",
  "key16": "5zGA5NB5N6Djk294gKLDnfEJR1BBspThHLtQeXgkjJo7X8QNBnkWxDjRTQh7dqdD2yPPVQ8EfVBH3FBiptWJusqz",
  "key17": "44PNQFX68CmWMKmCMgNHLb6Kway1vcqB3uAh2frHDE5MpB4djsetudDX2JBkmMiq7SXXAr3b7f45iPV34vqjvLAE",
  "key18": "4pNkHxHVHqcRPhnnsnnc4CP8xgRcZKtaiKiweJKHYut2xBYgCEjsHdvzn6WEJuzkVdijazQBucULhJ73n55fjXr",
  "key19": "zkoEytucXApdhrXtp2kFLiK8LqnuUyg5kfKEswVMMM16aYtxZesCqWEj4XdxkR8MFzmUcEERGMQPqCcL34k79vw",
  "key20": "4cvLVWRrx3BJgo88d9GWecfZr2nTXF66PRauN6mKeLzX8fBQ3PEDaCoZ1hxa2WKaz9jwC3jgaV9DShWVUQBXrfKv",
  "key21": "4gCvA7APsD21TukQ1VCcXToE2iP3JEJ6DaCvAS1xumkzbkiCRzEB8a6rRWwdBpSAvHP3dvmNpQPu7v7Jzj61eKDm",
  "key22": "WmYCJx1voCLXfothcf8SiFhVJc9nVY9VNyvhVi21fYiTHR9fCRibEdBUnRY19M4JzdSES9DxM4n9BDNzzkDgsdf",
  "key23": "2bhWacKTLFADTbpGT6SYwmHPcVAZuoqht7DC5oxCK8xaDkoDZianYJcM4zy1de8nCLWrr1gPxKZHSa2ZpTG9oo7Q",
  "key24": "5ucSgomSPHfZoYjKHAxYunrPDymLD8mvqFw7mpzjCJxCa1WcS5jymAZBda5FTRsFgEQHAmy6TrW1kQidGsJ98ffV",
  "key25": "4R3Ry8fe81XW7zvbFekhVu936nrD1drEQj1UqyXkFoLLEXRHSJcHZCC45ZAd5ynMjKNqwyAw72ZEotAnKHncyocL",
  "key26": "ubKepem9SQRx3XBMGAm92tUn4sL8Px2CHsMcxonzCsTn5mwuqRbrgr6fMU9upmR8hiRciiwDTJfn6reKwmPea37",
  "key27": "3sQfq9rAdQyr8PjP6x5bzuS1caB94etBp53hB4UZCJZVz3nvo4ymzEhewBkCzui3zyxeBnP3umsnfbUQkY1pWs2R",
  "key28": "4hpnELbNRyNtreU8BNax8AZVmVZR72LeZ9q6fvo7S9rL6VdgfRVCF3p8tfZCXNMi7rmfSDoZwNPQhEmrreEn7fau",
  "key29": "3vnMSknqwxQGHB1S3UkRK5mnDiNJRqEQgdEjAgaqbf4C2BCEL2aEiHZ4AJTh3KEjs2Sm4xEDznuzQrebtALGxJwY",
  "key30": "3LMeGc2p2fPqrstZVWrFshTTkJQjk8gzYENfNheux3Cqonysg14Ee4vNEV1x7x5jaGDM8kE2epQUofHfCJdFJnRA",
  "key31": "41j4gZG4BAEqeJqvn8dVdsRBjQQbqUg6XXq2R6t5TJd7wiExkLBvGZKURef3JtLDevmXVd3Bb6Gdn4zMWstYwo9R",
  "key32": "R2C9EBRx2s67wQUx29PrvP4Xf1bBsnTJhy4pGcPe4ewhRM2zjy3fWqpNyLk1WsNeztV6BaBeXu4z1M2NgQycgSS",
  "key33": "5EtHjYbmnNhsTBhXUBgYg9xHXp7M1LC9TP21UZo5AZLgPFU2GWTC3J15LSkNURy5guoXkB9SrWnbeDdHnsCHmXUD"
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
