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
    "2BwNMJU8mSsVzmAopW5YJh91cVZKSQSyvVVQQtbn3YQHy4vTynJbrRCTzsGiYh7Avt82D8n93fDZZETW1PJGARTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDMKUwwD8aZiBJ4vWDW4wZmXVCEmXu5cbFp5U5mYRJ4SDYDLfjZ9Drc1hxzGGpwH87nYgcSKxFvjpQe7sXm79RE",
  "key1": "5uaQRP4e1DFSmEU6JTzXx83Rjzugd4xS8UyZceuFwjb82uaemF228teDacnfsvNPbXPsoaoDQGhMAEvEXh4HWXiQ",
  "key2": "3SBaEqaeZ2FphHxv6diahBDmhteaAEFtWNNanPLL7pNKGmC8fzENRLdyNDKyHJxko8yjMyuRcVPMoksR5wmnvn4E",
  "key3": "pkaEnZ6HTFQ1GxT2LQkP8xSFYhLYTcXoMGsSDier8VLHGkMPQiu69HRdHpHyax9VDEKhdNgdzpKWKj9vqEHsuPs",
  "key4": "4cENgtthr8PdQubbiPdKzSTKR8W1AKaQ9AzJ6o3RGmRq8BRPX2YMvXmmHNV8hVrr4TVV9K8FVdwNXYhREN2qPf1F",
  "key5": "3vB1h4Aaf1tyFbGJsTBrk86KSr3AgNFvmHCA1QEKcUJ79t4c7t6E5K2hiGRSAbiYFevD9HTgweWEXhxEzqmSGN89",
  "key6": "5JTUZLdwzxCdg3oRLPdHwERWyhabRKSj2LR72zQzaaedDkS5tMiFBnnDXqz4ozwHseG2RxfVVRTQmSu7jsTxeE3L",
  "key7": "6oVbnicUUR3zuiXU39GJDxkRDRUYToqcFyDCKkGzTTote7R7UHac6nFbMm5P2HQ1gUE8d76i2tqVP5oVwH75EDs",
  "key8": "5SFKKm1VofzddjwUrEVGoA9Dy6sUZt4s7HMYG4w8MKWPKRiz9pkXQ5n18AyBBXX1gEUuK6ZbWRF5Y5EiQEgjNmBk",
  "key9": "7FYN9hnGR2ezogrypaVtc27H3KvHRPSfEmuoATv7TvBZC6RJ2did91v5QxkkG2uZx35MKcf8p5SoCcPPNyubxaL",
  "key10": "2o7yACGTNez2BqhSpzyCBw7zce9Qa9APRrA8HcwSqbzUsrM2sBQNDujMsUXig84e8qRV5T1aurVj4dy1yToyXB6G",
  "key11": "2wmwkYbfz2qyxX8L3tuknCyZ4JTcMX7boLRJAxwzqfhCDDG1s9sDzg5jRnUbY5RKPMqBj7d4wPQ1M1KwtYqGFzt6",
  "key12": "4pcpgskQeC1WNsYTMXQToQTFHCzMbu3ipghfhpnitDg4HBsneznYrJLmybAwBDza4EwvFxCFZMide3v7RkRB5ifM",
  "key13": "4YAdigra5AJEayjFVe2vWQCta8qnBuHGsjgzfJHHbX9qKURmV4KoZcZE2LvMXNnrKKgdhHU74UuucigM2RCb5jiU",
  "key14": "5zRU8jjXH7TQ6zg519S2RHE7Lg32bWBRjTS6c1eBv45U9gGGfG7h9hdLyLFtzXqqG7NXTj6ek49ouKuqSeFXiuho",
  "key15": "28td5M2rFc1VVvn2oXcMh3PBtiaBHM1YHYXMtELHNbEWGWhsmrvw5onrG5qLdtCvHGoZUsCdfZc9b93oRN7XA66W",
  "key16": "4R2f4GYnF8Sv3dsvJ4xTFJJGheMc1gFgCVuse2hL2V9Xz9ahi7GpQ8tEVqfxCZca5NQF69ddk6KYkK1moH7uDDoF",
  "key17": "3pf9uTqYFVmZXman5EA5D5wJGkatGpAVx6URi7BL1V1RLRSa41a562T4LDZPf4DbwfWdK9fEtZsy8CUZ3NZXnRy1",
  "key18": "4SWvctn4sg2sRUBZDbnYpwfYjrokEhvsCbCw67W1uQFKVkb3gAHeD3vbmSUNWy6GMc7QE76FyuEhHVkYNYtVkxCT",
  "key19": "4n7RdSntnk2WJ4XbpYiieo47ZytGUvonMSd6oo4hSiMhMXv7m5eH3HsMu9WyTDtyg2Q7W4w1DEC7iizBkEDo6eUw",
  "key20": "4FNnsSo6Cxe6Ldpug1WCT6xSN2UQHha6PiBrz7Uj8K2cR4oezbnT8HPaYzskC1WDNDdRZ6aGYE2Pcd3wi3D4hS67",
  "key21": "5EHntyt1kb1LpzV1jyxouvvkjaCiT1X6TCymnj5aWRfeptR64MyydGViMoGSqmBuT6HRR38P6wVsedbna5VRs5mx",
  "key22": "3XyHHCfYE9Y1BD4XUJZdE2kbfux6FpBUvGjjyWXGxR7DVNkP8Ryyj7J24UVp57qK926tbS7xWvgMVkQgmZ36c3ce",
  "key23": "4AgbjHRhguXK1dRQfJuhp6C22cU8ksrVkuwiwdCKZfNCw91KN5kni54XtZLAWLtm2mHBaVXFmyUNXd9iNaNwTSk",
  "key24": "2wiuCJBrCrVgSDrHy3QmVnkLg43UGAjshepZ1Ngu9bh68EDuEGBPPnp1aws8quTfGEQouYFsvByDQFbZwdj3FBcm",
  "key25": "5GeqPjX6YbXfUnN7Q3y6185orANyjzPpfoXRefRZzzMGZbmgN1Ag3BvdLUG1BR8g1cGuomx6kemhHPPD5Z5aEvoz"
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
