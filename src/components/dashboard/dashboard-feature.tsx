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
    "3TU2kSynMPdKtJBDTg7dgNtyD8YVPmdixRWemkgQiTAuXLfdxDZPkEV5o7Q8rWd9mRwccEEpjwFpY2Wz1Uur28KJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqCSCUzXBN2V9VDnna2rnqbk2UKqochkTajF9GsPvLcTqPKjSu6Nq5SNk9uzT8qNdjzXEqAiQ8V5vYfDtA3tmDE",
  "key1": "4wXjLhJjWLWduxsXTJQkfNWBzwFj3pnGo46PFfGo9bj5bRsdjTVcieYafFZW15Qd5DkH3EFuvNdzohnrtcUJ8VB4",
  "key2": "26hzFgmzBnc1BfUe5XLRbaeSwytCRoxr1xacYhzrJRAKZSkvQX7Ka7RSVov9uYqbXbD6dofPgzQgKDh41gTp5Ce3",
  "key3": "2W3oxMWYz93o692BTWSh4RSzShCzjCtCq5D2JSFi9tNkjHBAvuVLZS1wCnQ41gxKnk9oKBtyHCwTTidobxb4yiB1",
  "key4": "43M2RMwQxs99cr3Er2VToqhVWvjWb7RTrnhi7mgHtH7PLxvxVqyq8S2qo6deRM9QcbxS31J2Hp7RkRa1DJg15GpB",
  "key5": "2Hcnp38HG4JZSXWgEStorPHjLsD6R9cBDH1RQ7R2xNWVwUavVYTr9wbEgSLujy8hr8jQrTZupStobvH825QQ6qVQ",
  "key6": "3UogJ91RQg6J9bynSEPMUPPgMcpZedfu6Eg1NSCVbahkSof251WPVKxKmvHaGxzsRJeuZ4xryAf9DAj77RkKWz5H",
  "key7": "58ddgcbkBmuph4T85opnqQqJDeXRWRBSSSNAcEbzSPreC98YQHCzgEjFBKP4sHgvAJemaj9CCyQy2yvuqJa75Wet",
  "key8": "5zBX2e84ZBW36YVKa4dUPj2irfK5eReXGsGjGaQ96JTvirNBdSdPEGfFRsPsYbHXU78LJtkuKtsaFSsJhW5PYaAd",
  "key9": "eAg9uJbUxz5eZu8hBn4WJWhnNHPUS1UrFGsBwkpP6buu2RSGfYgutaQbvivwW9nRWvEtfGYRqyvQiG9tLvdpESQ",
  "key10": "xGgAQe7YtTiGbrnxnx4EnzK3NTsTrfjfkm7kh8g43B5TTrjXQgQFm11LnkbSfc6bFHnyaHXD97wAjGwmEujjYWK",
  "key11": "5YsssdqZNMC6MBxtGoifRobx5faoNMmkqtDfDdt2gVbe59jpbVkUjsgvkCdZMb1NK6Qf8ByALQEDdz3hdSiJegbG",
  "key12": "uNrJpTKZqDSVNSekPshu29Lb5DqwNVENrN3eiZBtV7ZYhNdZLYN4N2r4Bhwm8r4Qvzjkh1gxCNAiARq9ig3wfMg",
  "key13": "egqAq1ocGKoweJ28yL4phmz3DUDW7TknLWAkxMUak9C4BxykWhAY6U942ZXtxu3jyPaLXRdj3bQC9LRCVLzdWvG",
  "key14": "2Q8HCseRvnf5UdTGFHf8DRV1muKYb7Ev9sfhrbt63D49G9LYcmaGN4KZ8vJQvZis3wvJfVQg5dLD5fbiaizFQ9HA",
  "key15": "3nuFyGBTPXoRFxQ8xmBLDjb7zyPggHV2SaPUmn7NxWcsHttU8rJthWCspzs559utkanVukdWAtfm8UdPekPL4xcG",
  "key16": "5RyUC3TULHcPAUt3uw5c4Xt7EDhWKwXWHRAKjRowL4BaANPnGjFNTP72XayzK3jpnkCgUzXnbRTZNYFsdAHXLyax",
  "key17": "1DRaG1jUrLS7sZ4Rhq6heEB3GW18ahSuTNJgU3UYJNXz7cmmmAR6LQ7crvXCAn6n9NT8knMQta6Co2vLyH4FBdj",
  "key18": "4dp34dqF5qWqNXhLWPe9ViZLBZ7YNMxxEVjuxNhF313HfPXUcMe2iWBN5dTwNPcs3ANzXXtUA7WuQPqkbmsQ8o4w",
  "key19": "4F2k8ySBp6FzLf6GfJoUBZrMXUqiikMSWg1Fm6aWc4dmQgfeTvhSPVhqBSTaDbsZWxhUc9GfjUjPaUFx3mPZ4KDH",
  "key20": "7WefL9Bb9ubuieduFnFSfkb4nJWHPP9XMzjVLXHuthLGWUezmm2RvqujsEZx2yPzjbowcyAAL434jvX9xJZ4yAh",
  "key21": "2LjFn36XkysrS7nsvdUe5ghjpnwkxwZXLpBACqJtvapKwaAHWxdKcuqcAEZcp1aDWYvB7gdrV4HFMKZUXkpfdWbL",
  "key22": "4RcpyhDn7B8imd4nXTNb5TJ5eXoySLnqo1FqH9APfxv3botToWPZazfsEyrufFPDsJpZ5PEpJPxmMAjHPLPys7rQ",
  "key23": "63KYtiAj5pRhqoP55o1eEJorGhKEwgaJQLiUiWk6ni8CB6PNsp2wgTBoPXH9ZnDCmE9vVRYsgWL3aTWG7K7zLxTE",
  "key24": "2HpoJy4sab9s3FinA813W8LHxdrt4utjebqUHifebNB9sxHJa94WFp69neshoNiHuQcrCnX9GokLy99MJbLRVeei",
  "key25": "3pdLojDRVxyGNF979FRCBgPTBmu1YLgS4e821kusNGaZxse7iGwJo1iQkeaDri6gB3iJb9RmNuLhnVyzqmEFF6GQ",
  "key26": "5zgbBfNdCRK1ECu5QK9nnHWEn9J2JPB8CH6TVLugKNTxE9tefpyBT4q75ocYEpfaAodQ7vaTJvzwJBPsGgtnefBm",
  "key27": "zuFHvnE7NPYBBAGj9jLFKsAkU1oQMDyui4YCEjEFXS564zJdG14zBD35SLfSSwNjJ5vM2nB39eGTeLG6hfuUPdK",
  "key28": "5KF5zGpLhGSEkb3ZcfrDwuwxyqSCWbV6LptCUzBvZjrM429jhFJzCe6VofHqFw2us7DXo5VXQkTY8b1gAofDHTzt",
  "key29": "3wNSzMC6jjTXzoSxmVxXJ6DwMSN2YuTFtdEXHbsD1T4HM1wddQQjcbMe82rZG1uU9usEgWUQNS5i8q1BoYDvzVLC",
  "key30": "3AHPuNaBdCYqtw9GU51KdfEHfH6gQbegMQvRfFtx7ZhHtiZTcymVnmkacZDQzc3GAPLztP48tFPJgVNYAEUffYeN",
  "key31": "yZjyPbLTWJQ94et4BD8kxDSqh4YD1CLEb57gAx8v3KGXVameqQ74FvC8wwbvRLqFNdBAn2yiMCzyAJvx36Np6zf",
  "key32": "4sQTDZNc5zW5xZfwYvArwGkjgYmU1CCTL1Gw8YisQiv17FMJgNyjaU6MZZPzLro8PmwVFED6EuCWkVrv1tcyomu6",
  "key33": "5vdofgGP5AEwJDsVxtjb3zeCCm9wvhgERXM41xniMipJ1wcPF9VLiSH5PTXMrB7Th92qTw2uZ2EXF9Y1RruSDS5C",
  "key34": "aUG7m9rLGU3B2BZJDkYYgkzfLJrdLqbybeuhkWA3zx8HXShZHdjxuAoWQCoVYiopp33khn1HmJCPpF3FhLtohfZ",
  "key35": "dJkRQTvYkEgWpU9Tt1TXYobggKn2NnwFeN3nRxu1Xbo276prDnayS45mVWAoDNrTS7jrZ4A92AVTQdtoGtrecdc"
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
