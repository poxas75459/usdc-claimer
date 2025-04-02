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
    "5AJTVeRe3WBgmKGviJTe6JY6HvcF7cYWfkwyG9HDoPijkrfQy5jQLw86ev14M5KSeu1Ui5to6fkCjzuxMwYLGYVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55DLFw8XaymsrhJDBoSsnydeknvG4dvKrC79NqKvgVj1DoFd48d3gvWTA2X1eHFRC4naRMraf6QXa8GULP7X39o5",
  "key1": "5232UntzYJKGwXMF7kuLoi2NVcwUY29anB85vtUHxVW8uooggL1tTCJNfKEaccZex7BmtX1YLAMSQtmdKPv6tZr1",
  "key2": "291cqDKXBaQwQAm3wiUhJMLTaz7VF5ntfKaek8Y7BCDP94VWw2NfWf19NitfHTPoDWhCNr4sCdneH7GZAroV9y7o",
  "key3": "5CDZRPom4ax2d2Vx2sDkygEYmZSPxXuk5pGw2v5VTL6BCZpz7fZW6M5iswtVAMzSpJUppDErEeRbDPDZxcha3kL4",
  "key4": "4XKW6dS7mV5UBR32wtsAVFX5sb2dt7eejNTPX3NTTA7a3YZ58hHnRa78x73XpThyhDrzqHxyvcYn6DP1rcsSv8Kd",
  "key5": "49SLLSF7YZmKf5gsufC8c9auxJJDAoPVZAE1cziAxt2KrgvtfwdAmdUD6hRFwW2NAt2H1yurTWnK9pqayNmgKaev",
  "key6": "3ss4StiiJaS3LSWdnbFeUboVmgEwKQmbCBpFXBbi2P52bheaFZ28N1SmcTzWzpo36ZAPy9HpvZrGspoi6N3VB56o",
  "key7": "3UAZW63u5vYt9qHcqpZwdwJn1VYdV9xzFWjfkA739WThSMLfenAWXtA8hYo2KmudG6x6BfrsEPXCqPWKe3xduswp",
  "key8": "5wRUETzjyCVSiWSJ9q3GtyqD5YkEYg6iugCp75zd3LjGFpNciJJxvxV2xWEaTwCMRLvGUhFsYeUajMGs2EMMfXHQ",
  "key9": "2bjDNoguhKnsKNSqvyggCNLFa53abtouMMxyiw2kb6bGUq1TPEmyghRKHQVE5J1ftyWaA3DHdkRtuEEn6ZoQNFZs",
  "key10": "3fZvkH5x7KMzQAtt6wpMzbakSf6xeA39tJJ1krWZS2YqCLmt6HWcnmumsDBvoZbZTeupv6PRRNP8S3Y7NvgPuJ2C",
  "key11": "3oFriG9JF1WiNNLRJDuU1mqdiSoKooek2zxMmhNtJQFYWpAmhYE2ZEmyM7jjZLiLSDM3bU6HxmHxEBdHo4inH9yD",
  "key12": "o7qW1EPHwUoWzDXDtbPhahBnSnT8aNdw39Skdr768cF9pCF6CLmSERsCdwG8VeQsXcFaiWFuVqaUvxZwWPFaL5v",
  "key13": "BGED7wjMj4aMZVEWjc7EiyvjBgdQ1wuRUdK882gDmK9LbvozV33dDTKQz5UbrwBx6Yr6a3YpK27Rxo9UUbU4n5T",
  "key14": "2cVvRXTiV8QujWwENoSgBzyGz7Rup2JkriE8A3EHmYvBJN2T8pQGhxPibXLTCP268XXdjtUTpGhPMtQySNV9FXw6",
  "key15": "41Jywm49QzsFmfRmr7S84uLH5MmMT9fA8PWstLMWNE5SLQQdjinnyEXJVTNP6bjq7ja5d94Neuy9wjFtJMsphKp3",
  "key16": "4P9q1DL4x3XTSHCME5aMUq3k9HkzWKUH6f5WWoaaPfVuxospUSiq4ukat6HNcNuZSsQgkLq53eFfGd5f49vQPN1Z",
  "key17": "3jTDH7W2aE1LLmKtRpMRxrv5pF7gQjhrse5irzq98sUV6fdXSamosh8PwBFrFZ9vy22ZRog87dAp1XuF2f9yCfb1",
  "key18": "3KSYRGVPU95QYu351rSkQ4k2Rbfq5i7FqKqmG5ZPr279RG3Y1qKruzmHuFvZQQkQkP2PwWVxPRQHizmfC53ZPgdH",
  "key19": "63zhQynmFRpjbZhYdww1hsscXfLCJ9MoWXmEmKajqkXuSDo4G42r9L4M3qYRyH7YHfDiA9BpFM7WTULg2i2ioxNt",
  "key20": "2gfUUrt1ThwmARbMFsokoTgzNQHs7VMR9j2YWkZyPCTrjCniA4SbAvGXQpiZ7FC9iBrcFetceeVaJLmouNcWm38q",
  "key21": "5P87vFyC6sFeAf6VsCrQkrdESHeicV8jh42MbwFJqMTgkLKLE5BL5ur4jCaxKYFukBPEkGMoJu3jRF1FSJ5c2U1v",
  "key22": "32hBo7K7FNFowXRfGdDnUfsKMLCZ3A5jqEZJcE1ob96Tg6pCowrnSG1gU7A6sCbv562vDBThMSmTvhqxr2oBWVGQ",
  "key23": "59FtFd3KinMdBbF6nRTitpC8sLZdT842UQaxx3WRNiyiUkcEVxVB3nxgDiNYjD19gMuFxMPZuUKHG3NFU4q87cgU",
  "key24": "5YHdXqv2QPpYgcxrMUzy7vXQquHi9n71a9oVWAxSGtp3oQRPQGWutPqVLum8Ze7uLJuRYMvcXB4gEc6u376mUjPX",
  "key25": "3A3uQe1F5NdHUEhLAdGpsuLdS7MgnxRJ848A9tiry7YFqbt5wu9EfPZoEF6AcEYJdWfHig5EJXfbRnqkmx3AkTF7"
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
