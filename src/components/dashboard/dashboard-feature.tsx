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
    "4N81YDqSNduBKVKaD7xseasgQyxkBWMAVyK1W2EEkMxsFr27a8dtMiRLGRXAtmH4HDi47t1Xi4v32ZuszmCoaixi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agcQgQaEMimcEYrNK2HzSehLacebPE5jtkntQk275kE1UxP9EoP1TgWiZK8p21X7yFHdyrKjnV5gTzovCUEdLit",
  "key1": "3x8UGuviJQ3mRquLMmYQc53KnCxTP9zCXtjCMLd1UF3pmcgKtvn5fnseMKgaLoTqstSbN5b7tNGpqHBpqFrekFtL",
  "key2": "q9Nae5M8tU4cXjeJEDnZH6tM5nkS9XiHNcyHyfoPkt89zggaFw6XoWNE3YaYuK1jitNf2q6bcKdW1TCPynDchx7",
  "key3": "V1tda68Y2am8TwgQ5Qa4qLpnrxUWuKPSE8ScMeF8KLciyCs9i6LpH3SbHwobHfbGWw2uRKM221HGya6iVWCRJae",
  "key4": "2DeaSqvPaBJe8ttDba4cb5AXmdoBqZvKhHtztqnpjhDRwcuMK5AH5Zwjj8fMxJBALBG2pCLFmaBNVfFPUiXSgMnE",
  "key5": "39aRpqBM1uvTiZGP4dk7HeTy4PVipDGfQ8gxHMeWCWTCie6c9PBUVSbxP2WpDHSabQwsP3eAo5d2Dk3Zcbpaeenx",
  "key6": "35HcW5xCXSk8ZU8VtQxtFwxvteomFDk2HyEC85n57QKu5BHdzGYxyC5A8QwM21pZsLKoXcHLxbQLCuMr52xT1sEL",
  "key7": "eiwioGuEym8CUp9KAi6bWgJpLsyBh57n8BN9Wgp8AYoE8DNJGuq4XXQMVzM1bJrD3jX3Qpqn4BnBvSJcpjJhVAR",
  "key8": "5JEA2W4BSm7sCdZXwxVNnvxTWM5v3YoJCtpZSZ6FVCQAmsTPqLmjARdXcJEZq2AxgX17ZLbJ5SuXYeAyWgFE2gDp",
  "key9": "2yaYoMyk3PWT7yAf1ne6o81YeNhCEnB8xFx87Hs57ga8juKvsm5TUAT6jnHwZpgas9TXCJxeSfAbKJWa4fbuvKfM",
  "key10": "37GRwkxPgYYcpUCu2wwaEMn1XzMfyG9kHcXVm5osGvjMdmB87StQB8ZKi2u59vt89XA3CfahR57FpnjrW7BjPMdR",
  "key11": "63jX17zNHMrAdsoZAu9QYv5U95966vQEVYuiJvbDENRYjz8iRh7bbL7bhquLX8j5A48Li1BUFasob58acSnwyymf",
  "key12": "3aFudCrTSZCKN5sTUb18HJiEHaPVUJ8hvrr8oPPvsHWwj1jh6ef4JhsdrGaCLpzFNJ6u1m2TyMp5KvbgGk3bip9N",
  "key13": "unkiCs26uff9GAx5Y7bC25MnpFG6QGTCEa6S75YX9n2UiDZt7buP8JGQVxcs9Aq9Z7Y8dna73kgHr9a1edmwXNe",
  "key14": "4wes3myTCTYjw7YqmsP4iGxWrGs1V9XnkuRVEUtHyQidJt4kpt7nHJMPJmjMkKKzGdTBfYjr9Cjcm7HbYVr6KWMR",
  "key15": "4tALKkvdTuq42ryzncLY9HurbbNpoDE4hguqu5aSqtj8VYiBnPDecPgNrLtZxHxh5uCVE4BnoCTm8Wz5U6cbNjUJ",
  "key16": "4e6b7ziuvBJprFeqxB2F7N2LuYiUfgHPi2y4x9LCCWZdpzE1gmEZn2uW64DRgSgdJTurXphTwPKkvZ3q9hPN8Mon",
  "key17": "5n3yFtURBq1W4JVDrQuwkHpyimBez9D9StEcA4p72Eny8WbYgao68RRUbDwVN4Nr96Ptb4bnnqFQb33SNj5TKrZ5",
  "key18": "3gSkbjjXKNSiV7yaEwA1YnJbpVLYeUxAzbB2XxWdhkUoyugUC14uPhyA87ws1wn2MJ6gGr7amCrYPaHywc9uEnB3",
  "key19": "3jqhNuhWJttRfFgJNz9hBsvvdg5PejSsTrk9P48B2KyM83Ni7o7Yjy1NCGJbj7p7MWK6WnUuArr8w7ghs9VKtwSa",
  "key20": "2Gaa5cLw8b47GYskJ6uQPwcdAGztevobidnQnypf84TVjdvdVnAEx77yr8vc3exHwRoL9MDmgZYL33eCTf5D9RE8",
  "key21": "4XTN31r4y8p4j2kPj5rGVVvurrkz7S67ijfxC5dvco4xQaoa3nmqEFYUjFCxMwRvPfuQ6iuFPxnbS5yB1R4YmMN2",
  "key22": "Dzmokt1XPLMTnFUcFgQ8jeJ4gJoC56EUJPy72gkDowHU3fDTJ8fKXXnD4kEmKQTXSYjTbzCxeTWdKQCA6ayfFYW",
  "key23": "28Y4zzM2BfQnUzEe4dar7j3ztzCDGseC8zmrTQJB7CJe7MXzLPB64cTwnwT2BxUcXNdoniLnqcKHXr7YjqwBv8jz",
  "key24": "3vCAMNjGdRRsWvWKLBKhNGaGQ4KJNhtAet7uGgF92sxYRBK1qEMTmizs2r5c93Trrfc6r2zW8r83t13UwCK3i8oN",
  "key25": "3am8qbrV7U3XdyMLoBVs1tyoHQ1rh7QYdgHTddWgoK8pgHCC66yPjVcoxcGCkyQFqJidHNkYei9qiXnK7p4st8Qh"
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
