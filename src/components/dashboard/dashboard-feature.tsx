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
    "5r6izK11TV2UNXTi1BnRNzuwPL2v4odNQ3ejY6WSP2KGA3pCemRygza5nFgXC9Gc5eEPPWTfKV6LNnMfXXHBH4TD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Kn3CF7EgwVfzSwP2pqLTQ9w6oEwZ7iLqaZBYxNo8323FuUqLFodE1QzzDqnmA38YhZufP1EjLi6RPnpbAU3e1S",
  "key1": "XiJe8rJZbF7KTHvHm5C2yFFdnkH9JCh4auHEvU7ZHEtRExoYfisRwAwPSoNQFjU7ZzwMrg8zcipNDr2Y4pB2xMV",
  "key2": "2g1FUEKLGgZtqZp2NybT8MhhCPRFLfTVx7Fnj4VHNAbjdDWxrZRJNKZGFaiN4NK3j7bBXXCnTAEqervLB4MZa763",
  "key3": "4BWnBRCKUYr3C5es8Qa6JccdP2B7WuaMRGKb4APcCRuzNngqQ7kcpQF5JzWigZCx4T9ZdriLukKf7EUEzEydDTEU",
  "key4": "4kki65qzM2nBmootZwPmkbvEeBNbVMKLu8fXbtuAeZTmJdh7NwuiVGXTGERUrSZw7r5i8DkCU5CnZwwWi2nw5uAn",
  "key5": "2bRsLApkJAcjxWPLmaWPnqiT9UcgwcweXtqxLpAf5gKntDbRFHSjwkFPhYBrvqG8hmPQJanyJXqFS8CnSjyNKYwF",
  "key6": "vi6b5g7pL1MmU8V5N8sAxzYNDMXjPNVdGC1ypTj7nxmM7NkVdAFRXmiFiZuqj5eGz87eNXqdyDAF69Kea7ZmU6g",
  "key7": "2SJeVoBWqACSWhoNNePgMbGpKgVHn6N4NXKRyTvqmBGWtPribPjrddaRDAyNbk6ee9oYWyQvgbR4baRYQoAJKi8V",
  "key8": "5XQqPKdetPWuDNdfPdLkepoSiB5tioPWDZZ1DZbkCtvxKJvF2TQnqdBBbaWgdDcAtUbbUZaAHRNmiZ1mEryq6WCP",
  "key9": "2u9eHJvfLmwvPrYaRj5CAYALw7psPGR4pbA2c86JaDyUEqQUvUm4yB3nNALTRDBt9i7sXER2oGX2f82B1biqEz1U",
  "key10": "5Fbq5dBUJW4CnCA6Zk9aYBtVLh7CYqx84shYVb6bZCmjtLJgEABjzvcCsyGGJccgsL3uxMXfi2nB6ZoqaALJQrKP",
  "key11": "3nk5tAWopwW8yQR88RpXsu661ARk4tNZDEmGTMBtzCYsugZZoeitxxiStJARHuDF1iVN6oFwb2Yj6LCP84vN2BsS",
  "key12": "4xbp6yQMEYbJZAYssqh7r25DmwpePRD6BwDYfYziooX4RAYYJfrz2NQzkv85Bx2T4Z4SGvHkmt4HCs7QeVm8zN7m",
  "key13": "61LtiMbjt39Ubt4DzcBjxNaVcCy7VXNWYbprS2HLdJnQS3R1AyHMKW4dcrtttBX91U5EcZb91NqAoawPUgMScHwy",
  "key14": "34a9a9W7sMj3LQqGjdhu2E1iXTVdHJNx5o2gXH9C5AmtfAtxpAQMiQUfHprUhME54PrNyTFzyNC2MZjhNSbZDTTX",
  "key15": "59KmfFP1kAh9y1na6oEuJRYN9nTWen3BehmVkhD2ZrtPhVRoPy1XEG1G8wjrjhhio6SydDfekqT5K2hqsLPyQMeL",
  "key16": "5BSkvTbkiM54soG9b7bMYqHLJsi3BxgaseDmFNXnjY4vEToZ6VU1FQLSKthDpdM95PfWvRXGPS3thKogSuebMGBe",
  "key17": "3a1YArCLjqcK1RKEPkpH1tnt7hUn8KdWDrAd3SDgt4wVT97fzacKiWof7cstAeVVDiBN3XKHXiGyCEGpwJpovRnz",
  "key18": "4GBQruqPGgj18uZpjzFzh4qTewzz7yuzwTFGZ3EHyL247grSdUnjBNiCxDjkbaVQzmurtyvY1unqDS1Vn4ejD7BB",
  "key19": "2648Yqphi5RXKZTcew4dyHksPPp2DxRe9oqLvJh468QrP1Hituj9BgjP8vDLzKgvFumV3G6aCEB1WvxqqJH95Min",
  "key20": "3VLqj18u7oFHkaJ2MBrcbXTeuye63hK2H4bWq44tMjB9rPUk2jSNuDaTJxHWgKF5ptUqd1ScUMaYpJV433nRJsMY",
  "key21": "JAizjyY4mq43Bve4iyCe5Gf9Wb7HLpbLrjtfGupuuhCRkPLTtf9AQVGAjfajfu9FT4EkbzUY9AEW4J9JkXYMmRX",
  "key22": "3Rkjuvu2pt2rfVYdtAbWebmBUJYus1UZQVcvkke8pFqi16rsqj46z4RFmxFcTyTXTg6FWYMMkvhVVkhtvjVEqF6U",
  "key23": "4eUYxxgHXbzjPu4V5LCoPNb8Bda9NfBci5Fn5Ga46i7DvrbDoiWivCDrqeGdD4cB2K1Q7XrtJKvQQv4dtuPagBLn",
  "key24": "okTSejFJfYEnTAqYGJwAF8sgcoiXGvEVSHQ3asxryyT4Fai5crXC8h5WEinMo9AxF9gzDhC4Vr9ekiUUX4q8AnN"
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
