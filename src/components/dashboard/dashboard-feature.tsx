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
    "3NPm3NFWT9DjLxMSdemMiy1iQdLdRXJz6A1ZTE1Vqjc8AQFsZXsGGBEBWhRRvAkhEJ9p3U6BMaiEjygKiazpjLUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uGfDEiHGJbXzuUjaqM91nRifLHCcBaS5vh9nHqby8wn4ux6R87cgFGTzHpud7ZRBZkMDceYykSBjY12n3vZBQva",
  "key1": "HW2GEgKFVg4uuFx3qvoxcz6fUhELvWQepz591je2qsUNJBeLAZb1g9ETHEKM1BnaeriFqaugMWDWMBegcreeDxD",
  "key2": "36T5KV7nXK3r3WnS5xioVa26SFwTDTGwEf7teVZqRv3x2Xi17vwsCRfqDrzKLKiUUAJSZqxoMpaJTiJy4AS81c3h",
  "key3": "3Y8L26eh3884AHc7V6HhLYhht1qN6vC57XECxVW9zu5oi8bWhiBBqa9W5pFjUbHperV7yjCPoMeCD96mXQWZ4dnd",
  "key4": "3pECTQdCSE1KpaZHQgNS7kqJo6TC7D3nbCjFRoUMkEdGPgM7gKpNBwwVcZNaqGmnd2hgrBV87RtrCG8sVzCRdXcQ",
  "key5": "SgjK2Era2JEgbc3GB1C7upet42bHBm6EULSqsK2o6UcU9KRGdjrTVcyncKcn39H541KGuXkHyAcWctQ9Nj3fbe6",
  "key6": "45S11CJG7Z1vnNp4ZyL7hst7SknCu8ndPfKfznGLVAft8Mt5fEAmQ1tfgjh29c3DygmezXYwtkn1jxhPaTvtjEGA",
  "key7": "2Auye26hd4AKfgZAUH8bVZyQLpoFivyurZCY6pBccRaT8awERVUQ5DWS7SeQirhr3DD3MsbUqKHwZ3uwu7PzMVke",
  "key8": "236Ce4kiCwSCGrkG61C6eJZLtDMstwPEbtJq9nWPQmvGFUJ8VKf8RvGSQPKTCbxzub7kpYXbpsdZCC16EBjS2qhZ",
  "key9": "dTR37pupMYPkVhtGoa2Hj9dej8X4deCkNyjd8jpqwrxsMP2TjBBmzTNZNCREpxPh1XNktjZqNPNqm5iNutKgHA6",
  "key10": "3aQZfEsptt1kYCU1x3VF51F8SfLNmnXWkktGGVDxc6m7bb8fFGUzKBwcGn6vQ1fj99qpL365LWx8ZynTnByb1FeZ",
  "key11": "2WnjTgtFiD7zGCNu1JC4Ph3k2ppfaoEeWtJtciJwovFhs3zkg72MZdPeDftknZahEEKJb3Uj1qc1sTMuPESaDrFK",
  "key12": "4FSksRgDFLmUyLFpop3fS2wKv8vZ7zyoUPz4HRjMM8Ya7MRhHdWTvzEML1HrKqAFXC7czC9f5zTFfhyDhpXVUafD",
  "key13": "48c9uC3xWKJ75WatHLpEyviJr86P4yfzPrM4YJRHyjmSMb6MAu9cb5sbGBP1MjXLLHL9CmYa2Weu3BGcosE5iG8u",
  "key14": "S8DH6DBZVa7u7ACHk4xL6K4KvpoVucHL2KRuo1R4D7q33ZEE4z2T8UgAqcpmi2cHKVphFzM5YfErNQ3HejEbZTo",
  "key15": "3tk5tY5i61qnmbGRqFwcgLQwD29zkec6fhQj5ggpZFdfTn73YkhpgZ747aPvRuYXTrjV8qBZ4BbLaBWA25H7JACV",
  "key16": "pBhZkWF7dxfYCE9tkXsvV8kwa31VZuyWuVWk1nHKg2FxUyVvotZK8beMTReuZfcMKF7EmPU27WtvzXanKPqKVB9",
  "key17": "RSEUirfN4M8rgJBjSwYmvYLfwiX4e6Sitzat7kBu6n41hgFdnR53mqv81P6qoaDSXrNVJhofDrHs8uLHV233s4x",
  "key18": "cZvsvkHNUBssSdNMAYuFG7mhZUqzVALCL8oSfUb8u2p3EGMicdMVVLXzfSj8hge5xvfjg4VmrNEzZfTxEBhaNYP",
  "key19": "2n3ouc7Y4rSJ9U2y95VouGzhh4hS4Leexk71kWH3bF7Lv1n3fwzEynPqeut3GtZjhMrWFtVAVWKS8umshJPmEr3t",
  "key20": "3k7huBHQH3tpoB4BMEMY96kZsF86z9PTVXsp5DPjui5atAETYevSX38RzRYQFAgGCVAXCuYepkgigtG4oeE8VgJG",
  "key21": "2C185BxVdc2zuE1CKw7JfyxYoKJkWjmjukoE3D9KWP7ckoESy6Kq1aQmc3Ku5TQcdCRwJPhWSYkZMvF3SYY1ezPs",
  "key22": "2jKjB38xpCwaEpRfWVnxuCrvCEMh7g7eESia33MLdgjxw79LUHZoDoTkZFqpwd3xZ2GhpguaB2dkVRksZyoAEaQj",
  "key23": "4zbMAoe1Hmg2ULEWxfnJ9S7KfxxoCS7EV5Wq282jnYQ8U7aLt97vzr3HjwmQZd29iae6G5Zbh3TrNaHkzjAsnsvG",
  "key24": "2sCvrsDUom3hVJ3b5CQFH7rN45HwoAMixqEexJotqXyiyG9fL2gTMRWA8sApTaw9vXdTu7TCr1QF1gr6VCeMjkVN",
  "key25": "2DCHQop68CPtck87FUzozFn5ky2vxk9zE7KZ97m2Bu7nKcjyWfLunRpZTyMK2uomtwFzBmeJRrQ38HmRxu4hUzVu",
  "key26": "4M9Yy6jsj1ctkQK2eyF7nhegNxKEAVz3RoCLcStfXJdTfufbhbSREABi6ZAZ8A6xM6gM2atYj8XdENUcbArKoNNy",
  "key27": "4jnY3EbvFU1gEhWkaijG7JdnGViNbxCrGsDpq1TBXFkTSnbdPaLfcrErxGnKUT5SUvdtMwjjRzQpttnbtMfWdfSa",
  "key28": "4GBouGpfRKUX6uhFT5F1jwrNzVCqo92AeceiyqReA6U46DwvZVVNgRrJuUdwjKrJBtnLGddWqcRbs1w7jY38WZbF",
  "key29": "2oqbA7mh9vjyiXUkp4oYReSz5eVj4jXSEqWz86gMskUYtecdNnuaqEJjWNcu5sytRBjAd1wuRNHhCdg9WFXYfGxQ",
  "key30": "33GSvbCpdCx6EZq2ygb9F8d9ehUALxqJHUHuq2fSVGbFi8tYJqfEWvCvvLEk7nc3cR1AcMSiL2WDfWehnz7PMEeH",
  "key31": "27qEGJvYYcjmPNAv4Mo9exevpHwaPV29fnrKyYpfdH7Whgmq6aFudg1cM1bdRv2mUvQdfrMkP8aBMCFfYvJsXMWw",
  "key32": "5eQMd2cujHShfU3LcCs1VA2EEBFk2QBr9tZQxBzAvN25o4PCM3uTYqaDjLComZkAaQGVBSh1JXSMkcJc5aQeZxQa",
  "key33": "5oz83dnWQmLzJsacJfsvxhJYEheCiFqFJs5MeCBktmpV4MkRs5au8s49swTipvrkHJpSMdiBL5a7TEuAFRu36B4b"
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
