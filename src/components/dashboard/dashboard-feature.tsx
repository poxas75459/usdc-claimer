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
    "5CEnMRW1abfrnXP4CSeHhSVRKnpU16SbXJvuGZd8PPHyV9fqMFHX8yhsqwvzsojPSHQt7T9yDNRsaB2nBPmxLGmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P262fEuWxtyQiyt2gC67NxCRtcUBxo1KbWjSyS9XRLwN7yDNhjsU69XqHFALtiGT5ZawJK5jjQXAfYgCoAAtV51",
  "key1": "3M1HHm3iKXjyjVxjfLzkZg3SXVdW3zarAfkPtFYA6F2pSdpbkHtsgrgG3MDPqwWMhq6rc9joqDHWExT3Y5nhGJG",
  "key2": "z19JYH8P2vej4oZtYVX61AbAKLDFLXSMsudqgimLvkU8Nhqr8MedtsFUsMEh47v7Q9QicNEPvnZhTHWwBF8ZdhL",
  "key3": "24YHVDAdLFYjf1REvjBhw5kzSDp7S6TN6sTqEDQMKnWCFVHxzVBB5HzaivHKAHLdWMWzrLKmqKnuzHkUmJYeZ2VT",
  "key4": "4h64AVzK8Mfq5GkVdxKTW4qdZceMeo6HoXfH1CDV9QjhRbPypkcSYxa2yRPd1g8EnrtAPpbCbtMnwtTCYaSgwB9J",
  "key5": "22hiNy22oGtmcNyC2h6V6FoGDE4FouNfScexZD7zNoXT2Wc8M89w5MDx4FYbGehG6zyeUbVEbCFCRwfhR6DC4iXK",
  "key6": "55qbLyQzGV4UexSjqWYyXTryaJQfvzjf2DiPvLc6kWCouFuqWCBbtmVGyy4s6ZsRzuZBxB7BgRzpxHtbRcL1kk42",
  "key7": "3Mdf7vkgoSc9djeWA6CNa5tEEUwqoJaHk3xx1QB9DwFdNAhjSP7i9vyVqjNsMrYtR6My2sypg48z5AnR8tiL5qAC",
  "key8": "31bKskNdcMRex2knuT9hgSWv93ATHBXXH5Hygrg4mxUJLSsGhDTNubhHgsS7m2pggxnnfUer9jY8h4rvgyCFYmnS",
  "key9": "3NNFZook2ov5aF9gRydJyv2JCrC1QVi7ogTjkKPbizizgtY62xnMrrkKT1GJe7MDKepnNeyK8yikHwau4adm7UbW",
  "key10": "64q42Exy42Suv2bvyTSA7PHBdN5dxWyEc5DDBmTjuRLUAJXVprbAyeyyJFk1Y69v3qqg6dcXPPNLxBGfjAPLiFJL",
  "key11": "4q6D64UbSM5utdiemLMvWNcMXNVjd3HmWLRkRG9mQEc5dEnTvqYFqGVeKmZiRKEyFLSEJu7hGGvE2XY9mf2bENbt",
  "key12": "3UMgxXThxTG2JdjczjiPoVExF5QcrNY91hF3EuLt9jE4FcF4YD47nXuoGmpcLKfhAg4F8Q216ZA5ZBd99EH64VbJ",
  "key13": "38kxr5ppX79CNSmqjLixPCGqH7Y2Nj7MukRHYa6NSn1AvQ3rYGGdb8C4iM91ozVw8VJsKm27q7nLAKAsQgXMhhYH",
  "key14": "6jggpCmC8HnNSfwwEs8Bpy3eea56aVjZyuJWrtyP26RjChQdJ9TaS1YopPrKR5CjtD96NvDjSmfyf5TTqYDLx2H",
  "key15": "5fhH4B7DovA5qVGYf85WrkeFGviGKCoDzkRK88cq8Uzy5m682ABHFY5NtJSE16c1biG1F7avvVDviXUGhzMMfoF4",
  "key16": "3NZry7bStzBt4VoEYzPsMmRwnPxJDXpb7AdB9WgT2VY5Gkd5jb9kfDXdrnXiyUTZozUmjJR5tU9AARTopNUHiLCn",
  "key17": "AeFECLRx6gQneJJbqyEuryWGdYsWv4Rjq9umNKXb5hEuscRcYBq9zTdJEF7hdbSDPZTNTjzjLzeR44LTmGw5Eog",
  "key18": "43hNT1Kij9U6YmMwZuXAoZ1zp7Mf5Bg7Jyck7QVqeW5nHcB4RguDcEtmdQbPbPkVFBrxjhUJ1LXLjZqpqKAPHxNb",
  "key19": "T2KdogDyUkU4RjJ339XdYy9tUUHRUzKSsR6HjMWBr6tDRNrUDM4hzfj1ob9kV9CXTAy75ZBh1gTV1YmJrZ9Gp62",
  "key20": "5crDdBenzZ7WpetVusmcTfsyabsrcc2DLAA3dYHBu2RVADzP6PrXr9Ch2CV4aAxAwNfdLAd7W3sBf7pp4L3UdkPX",
  "key21": "2eth2GMrvnuyDoVPvgyjZwKocf5jUQ6Jws1r1Cuy8UCCum2CYH9JeqpLeGQuzaGZuvpzSmyhyw9ggJeDSqZkTMfw",
  "key22": "5ARGAi9am98ercNP7uTqDgd4GKt8Z9X7cBmf18t62ZF9hz61Ujq27j9TNKJAQb5znP9zyujEmSQMALFdTFhBVMvj",
  "key23": "4bvtbR5d7ERXuE6SRhkp9YoZDXXuDn1iC4dXpbanSucRyaQWKQRXq6VsYiz6ysnPdw2pmbnej5Wr9413hveqhh2R",
  "key24": "5sHUv7c9m8PFUexY3z9Scs56RJpQcKE9TMmyRdiDaTHu2xcDQLsEFJqcnxpUVCkjpNhnWh8M8qoks99kB21JQzNT"
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
