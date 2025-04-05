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
    "5JwWuk7gse39wzEbJWezHrxa1FBrrwjBgxdBCcFwkULmGarLCRekgzMx9Pj2e9fGfNTqbAEuBkyiWCW4kGoWqBBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vS7eD3dVTFLa8uvHyyAV1geHWZuHKeeY1UVRw1Pc7s62d1v1YD2aspFy4Y6WiEnkFHPZQFzV5FVbwfKx1amQyw",
  "key1": "nW1yEvVySdmBHka3KSLKTQr4ipnLrLSUGQ27Hv7qiGo5faHxc2tBDZEqChAmZKYhsScTRsqqsBkAbkuFRfoVU9t",
  "key2": "5XkpZ7Jr8z3WzchrQYv5mjnM1ZCXuTUY2z58ovAYXBMkuWKwmkfYAWEgByG73mGV6UdKmikKQUhGn5iFANaTXD2n",
  "key3": "5idaZUq3xGP4HDSo4oyxvERFSwkF3F6yWUjRgYNYaU98u8AReQ2YKuMpxbWGbaF3Bk1M43PNM2hiV92GrJ7Ze2u",
  "key4": "5mPthuprrJ4CpDKkhVdT2SSbbDDdVqubFLYSKrZu5GHUWNqGanDCrGS4TdJwmY5SN9biyot42dCi5Wsxe6HBSN9B",
  "key5": "3JhajsqsfBYwvoniCqAufcERAqg4du5mVViqE14ybj5ESEzSb5spPTQwYvco83hX4e4Gh2JtbqpBJst16EZ3rvhG",
  "key6": "4EGwcZZaX5HD4sMtD5KgDN3cgXixUgX5tqmQUMgEjp8P3wckiXy6uJtb3dzM1iq8KGcvjoarxqeKsye3rPKoAqzc",
  "key7": "KRGBebjQwpwZbdM9qjjH3v8eA1DTwjYQMXTyLaNL715i2ByDizA94ofUAYWX1pvU2JpXmntsfNJVhUTxHfCyav8",
  "key8": "NEoL7Wvv7tJY3CBFVeURUhzGoAMjDwk7zrakce7ZoJAp5WupuGZhenV8xdb6cuyFYgzXZ7yijmceSxMoQvpLAiX",
  "key9": "3eJo6jTVcuAAyyyuZ7Ys1CdS7pbKwefzZwxxCLgq3hs6eu5NpcVAuSyCrJzBLbYypXZkfY72teUQDo8W6H2GU3AS",
  "key10": "mM8VvJzFP7fdPwRNQSVNWCin3oqZyEnuHcFK8vnnNTzmADdfhdcMFJYNpWRyweXSXLXiBYN8J5pZEsJuUUKWJi8",
  "key11": "NustHy4bQzecprd354ePpQ9q1Z5HHpPW9wfR4sYPdZSXpRrNjdwP3WaBW8BcR36XzAm2TuHVqFPhjNjEFdjHkFn",
  "key12": "zWcQnNN9uhp5iZN4VC1BLgy4G7P9fiK5GvpzoVwkP9TkhhFTeut7524u285PRP9A7PqGsnWbzXLRWfuJq51raCa",
  "key13": "4HF5REmTizwqELS32HsRmSn5AHgxu1BRzXZk276zTUESoqQautCKmHt9xuKQG4xzg7N9J2rkeHp8oqiW8xsYmADk",
  "key14": "PaoRMNGYwiFhKrSeJxp4bybyWx7JiAQxtBUWSxKTxh8F3CKMAqzH5b9vMJW3MhFqn3cub4AHFqW5JCjAaQeVoJB",
  "key15": "3Eq2k3V2AnAgh6io2wrEMgDJSRCtgGaCfW5MoUNQcmcmmZ62QFnjjxGCToX9XqL7FmVv6HHZZcmnhHYXTKPuwvDs",
  "key16": "4h26BWMTdM92zRVuj9vQpkXjHpe9PiFWVzUjQajXVdxA1Tcc7CorC72QjzAqtfxmyYQszHBf3oDfxCzhVQfoFHow",
  "key17": "3WrbeWYjZoq4F5jErkLTr93E5mtn59iimFENmeYCi6xZdS3JbsYfhP3uzXXMGUgsrPiQPQ2FjWeJj8gGcFPR26Sa",
  "key18": "3ZMKxSRT4VkVcA9tcLYrWzyyio9h5o2d7EEqVoCDuN5AkY5vqtGQUhmw1CmB5Gp4x9f7hApriVZA62kjhMyURwD",
  "key19": "5jP9HLbfPiP8wQgQomdRFQE3HCvJCBHX3tMRQWwFpc38V6EgrHKy8siRBiHvd3BKHTFMw2ZqS775tsSLpQog9DGb",
  "key20": "4UmRACpJRmLYw9nTSztjRYZB7FNkS8unrfT9b8Yxm88MqjSShDahzC9qZ9A8CmavumoZHp9aM7PbDzJqJo4EZP92",
  "key21": "29vDfJqf1kt9Qb6e4MLBrgyLDmbhUxhXvCYUaxYhbyCJ9g5QQLjDTbPVy8PwoSMWiSNCdK7UkLWYeTHDof1JLitz",
  "key22": "33ZcxWUMq3iALHJdsbrLuxv5UM7jRXyZXHez5N8o34aY4xvWvNHa2ihjsR11V6ZUv1hRhqSFsiEKP3DEfEwLrXcv",
  "key23": "2UtJkxwwLfDBRwSQEXDiwjDxmbzR2kpzgGdPjwBhHGXdB3vDcpW8SL7Ku32fLkuJ1TniThFZtgCepU9wCtR44Xc6",
  "key24": "4cvTZY9uqCRYrpVmS9xGfrtuEiwWecy4F3CncKArehuQBtTkfSrikon5wxADHmXB47x61JumL8gubX9orpUa4Xp7",
  "key25": "EcyJGq3qs4HkSzNVc8UsfvuxS3ZV8iuJS8kGGP67Mq38QbTt7R58FE4QbxJ79DcYW7Z7rDqf5FYrF7JePg9JGka"
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
