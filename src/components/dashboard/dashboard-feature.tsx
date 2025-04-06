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
    "2RFPAE2THKzZgzCTLVQJifyHUpfjvea4hiheYDZY4zsxfb4GoDxqjH8hi96FeoGzCL6PfLEe3bBrd1Vat3exFz2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NrV1xch4x6ARFWbPZNmobpFEqpcuGxU9R28Li2teT5puJFxc54uWS3j5j8AvFr1Haeo1quJKspDudQ14njmkUF8",
  "key1": "3XRutCiWdqaWRzZybT3cHDdhPFyoKhFpvYffKWW6oouxRQV3KBq8Q43QqV2k2kptx5AygXMErXFhp5k35DEfj6kb",
  "key2": "4ptNqWfeHLEASycTW3nsTPrYv1xNYqY4b59d5WdfWVodDS2wCSJjnj6RvTqKqBYxaokMKxYfBmbrzRfXNZYzrjT",
  "key3": "4MMWdF7bVX54DPJTc9S2dsz8jNDGMfyygDhmVHgBfiK7J8dmnkahhEKntQZiHyfPvNhpPX7WXgjXpMsJVmJw6W1H",
  "key4": "5mvx2FbB79zbs5qLoh3qYUmRcsCkvbTe4oWwu5cKNt5jhSaP1CmGdmmUjAKXEQAUcBY5DsisQgC1SCzs5QdBnbQW",
  "key5": "3636f6fPRd2nA6LBV3rWo8N7CZ2wBtUQUNwrqgoVvamwmdHPz2wpb1WPLaNokY7jnDPzKUYL8MFrxkjoTDSPPHTe",
  "key6": "5JcWd6y1iNJDitbXo9hk1QWHr6zfJ4kC8qHwaooQgPaKDiavKTiJb4Ng9m213YwfQ19MvRdJUmkfHaUs8SmhfvgJ",
  "key7": "4CA2dVv931QkyXoE7JWp4xktTZXQnG2TX5H4MstvrMrJE3FrSZtvhdaGc38jMPZeGWwyPMD6U9crqi6Up2iYK7rt",
  "key8": "9u4Jfs6BrLHPL6XQr51QHxcujVHBz3vUdAtLzcX5dUCTTCeZJVjFsuDdWCAtVoyfkU4WBdJjjWAEYNknYe9K8qk",
  "key9": "55kVsfWgTojUij3BhkDJFVZLU7gae5Rse9g7jPAADoyD4PfbNPYueQQraAF2uU8nyCPiQa6uk4KM4NVE6RtFz3FZ",
  "key10": "4erHGKpYYUkp8D8RfUbgAvF7mauJWGAWyjJZTxGmGUrprhxi6K2RHsr916pxgrXkJ8fsYsr4GC7VpnVyjUeBUYHN",
  "key11": "5pBkhEWvQDYDnMB4zEWFRYfNufjA122vM1nNXMsR7PTmaskrizA7yvNmVQuMzQBS3it3mCMWuSEei2y1KG4opseP",
  "key12": "24iaq6rjmmgsdMZ5ARGFzVkLbASu8cRKa3U93x9eNsH2GQUKpZUkJ1Yk821JP5CJMD6dbghRwvNKT4UcYfAYQA3A",
  "key13": "2qsig6PQf27HFEsPNWnXyNpndawzZLgNsDS9U4o4s91fadLYhgZSwbyoLcRVz11yB7zHrsebYu3CkcLYZFRYEqe1",
  "key14": "5QYSVQ29jULoC9kvMuTrhNq5SgLWJaAMg2MgPS6A2mZJcJnWRaoXtHEW7FazrfhAM1zJir85JPxNd8ooeUNv1sRy",
  "key15": "231eGqkkQbmRxutokxWXMqgVnSoEryH1Wb539grCDa1C1GiJS1oVXeiVuCWJRLr48xefX5ZFjyQgr8Zk4GRS7kSg",
  "key16": "2mjJQCWzmzNBz565P6UCahLmzwkd2D6mew7LyTevFQZn6VhggS5ogyvaU3zDoQ8oBjDR1pq4E4JsbYw8woMWFXrB",
  "key17": "31VX372rx4TSnASBEyQQAJph5rZRGofBqYW5wm93ZWFEPAmpDYxJUWJRXKMdCpvroyp9AMxZy6LgjUtUohd6RQqc",
  "key18": "3yWZ1brbVJ3QytxADLZa3ZX4UpNHFXFcYoxJ2EsQLJQCsQtTJkUyfgPc2TTgdx6BBy1AdS8KT3Ziuw5SFrKJsj1W",
  "key19": "597HdBjPUakXBCbMyVKfXeyCBxDzsHwBoY4hnenjpFd8o1DRGiG3pFDzEJaWDLXSCNH3wrKSg2rvsqHYhk5z1czj",
  "key20": "FSg96bSpqNrrE69F6ZD8EajxSuCfmwnQMi53ugqX9kzNyamtBYxhbnfpJmg1AM5SDKAvGWEa3ep1R2Um1Kg5mgW",
  "key21": "2BiAeTs6pjzdPvALVFK8MigTYkdQkZNhcxXS9kLj9y5dMw1EjsYQTK2asCoaDir9Sj2orsS5f2SMK5vgsBB6Fz5M",
  "key22": "5uqEDZbAsLegw1EGTU85nTKLMtTqwzVpnM5YZBgbV3sbHwtk2Wefk8CF7QDBhWLSEeXq9e4RhrdL8KDTQdn9aqB3",
  "key23": "4eqMymiF3dTr6FiTCKjZm1MUD97trFLkeP9og8g2Y6RzqP3AL912CP47ArvjWVdNfdVkejn32EtUgm2Ptaae62uH",
  "key24": "3gEm4KMAaa6JKmVpYSTYuyPFNDeNJurPGuhFS2rCJhgDCm95tVUqUxPExv8kj55DSKwxHhiG9A1vMmPNLKMpYu49"
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
