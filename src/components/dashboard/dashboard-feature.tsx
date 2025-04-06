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
    "5hxLuBemwDnWFJ6ExBPrA43s3jj8opDctTRrPnrNcVFuctpVSrjNu51idinDMWbUZnp7gb6UHHBXeeJJVWGt4m8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DvgJpdX2UdJLc36Pq8yJiDm2BPoZzdvdWvSqqEH5EExQ27agUQqt3pQzanX3smmjYcMwvx3E23Ks9zKrCDUP4f8",
  "key1": "4uognyy54eazXeyYsMMT9NcBjyCaXvoSSPZH3dBSKKwMKzkSndutE85Y1r9cUz8TsbGTYQiZVBriyvmngCaK2FD7",
  "key2": "679PVxnC8i49Wjb6ymUGiLFQaMx4ZY3CF6nXMjv1hUYgSU9A56iPMLGEYwbJtn8HcHPEfr9gsf6JutHxqS7nfjUq",
  "key3": "2AJw2fwpTo4sgywuercRSda5Fq3N4j5yUHE2oUbNuFcfPRDDifma3jY8cv9Kc6xeUrsymFpX4J429VszV4FQKUdf",
  "key4": "5tuaiVrCanQV6stdd2JnJqARdHVJrqGf2HSLN2PGh8Vaov8K1L8yWjWj6voLZKoQiNg3HNJXn3jgXJBgEDSVwXj7",
  "key5": "3EXF4o5yZ8bXHqqbWJagN1AMTunHMytNnpRh6SdPfntqv5Xk4naf74UfF1VK6tTNzRfsfqNZXLBG4V2TGr1FfaCy",
  "key6": "3fra2DuKCvyNZ5m9b33qEasmHpQVZBiwZYxaXzVVKLc1yq7CCxzbZhDKcJqQjUH7r8SwBfMMkAfuJELWTupuMHSE",
  "key7": "3sjBBZ7fzDp6pUds8RQ8G2jFkQ6xeFMeYnJjDs9Kr1bHGqhnFB14f7FzexUYNYHbADUBbSQ3uJU3k4Sj6B9izGSn",
  "key8": "5DTrGKoLxvz5ZfJeEoSY1uT18g3EYV6KaRFJDVFPsG8kcGi3Fx49wWTuw73svbyKqo3mxD8tQZnMVNYEUdDNGbmt",
  "key9": "49o4wKsrx5ACi8NYhczgbS1GzRafmERhXcYmsAyXBts9CwpR5ft2PjNTKVWqE2m8oHa8hXTVuWWosvgq7YiVrRNR",
  "key10": "4biJogWnhNCEtU9pdgjqU5RKAPzEXWezEPDWXHKT9RkJE8N6bF8eMtnKk5roiSPDhfPcSLv9MQPdKvC8tNvCksyd",
  "key11": "bu6JKVD9uFLHgpm5Vt3hnYvEmAxiMB7ocq7GnJweYnNV6n5xMGeMaZKbAGgU2RTtwzriW3ondSSRgs8daNTBoAn",
  "key12": "LbahY7kjPEfUZBr6ihtGyo2kfRKWPHUwdQ5KwXjVffmCCqyGyDYjJAhN4EEFhBt6XpfdU8KN2w9NFurPaLPSSyh",
  "key13": "3xZxF76cUeojQBbD4nqLF7WzPJsuGYMnpaBnUstCCyvJWvzSGQbCST2LBrMugsbcDM5WJeqjQgxvqwgKEo4k9BmA",
  "key14": "2cS1pGXKHnuJ1ZBZzYe4DP68DmpLBKnN286yYqGZfjp8mWn3Ctzjrewb1w1pE3h8peWnTEe7UTcVdh5S1F6pjgF6",
  "key15": "5JLJy1yV1a6S8wh5JRZNncXwuaV9gQkHdUyZNkLt5oBK3Qdf1uQhSWDBcQhGoMdcCyyz8NgYdfH16dHnRLNKZ71x",
  "key16": "4nZXTaiUHPAunRJ91jrQHBH8i9TmeRXLyvNiCAdC8zSvNXrynMLi8n5pZH6idADzL8mQyTUAsxg5WYsvAcL97LoM",
  "key17": "5EPh9uj3wVadHeu6sSgXgUbpS4k78c5pMRsp68vf1vJKHdhdyi73kAvLUPwkEr6cNf8VxidmLPVY3KQ9zWkRVjyu",
  "key18": "1aHmNYDPjWQ58KLWBwjP1b8ipBkEd3qJeH964Qe7gUFDf7ArvFTa8BFWD3JX15cXESpC4rJRqWQoywazUE6qbZJ",
  "key19": "uQ1WAphhMUQToF3NCXa2wjiMDQBjH8yzvhcoNXGfF23HksxAvGSpgjSYA9QXm8ZfULTzwBxLy9iC9L8h8C4rTVm",
  "key20": "3914rfQyfjRRbqSi9ZCRRMpYQ2kVAgiWfe77gC2FsybyAVDoCzUYrkwwUqvhHw3vMNzDnvFqkt3AqefPJB7QN7qY",
  "key21": "evn2bMudHdJmZJRPZBtHsmNwsQAtfEctabRDHdUFUbgYePapDZLrGZNgH4zycReZdHYiqrPCHFNAwWgc1uE63Fk",
  "key22": "2L9CLDo1uuTQotFwUgsKEmrjvyU2kpcBpDWs4CZY12GRZ1FdKFVuvhVM4L1VPSTbf9shv2QjT781R9Mbuubkn3GP",
  "key23": "yTs4M3VQ9G4cGUcSnGwHD3MqAyRsPwHHHWgFV9uwGf3gb7ye4CPA8sWxED9AGm9UC2S8riJLwEnJRQBZK421RnM",
  "key24": "5byvZ45iMYCFD4dqRKtPzya3MqB37kuw5R6oqhDPTwvTWvBDyUeYkzvMVYkptFxtTvBUJYUonGy269NHhKpjwfZW",
  "key25": "2p3xrf6wRnMF7DW4uoDvoZvfPRaM4tYk5Cz6xvz3ZMXYJT7ohUrhEgpRwbrtEkNwZsM5dDvrbFRP9Aso3fokzqVD",
  "key26": "2T1nFDdtAK15RxoDEenbuDoDAQ3i9vT7t1iPuy8xYrDoUS59zWXz4bVPAZnjeDHhp1Urk1m3LcL2QRQbmfqbkA5N"
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
