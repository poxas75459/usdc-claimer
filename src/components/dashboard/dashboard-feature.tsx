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
    "4kNFJ3cfyk7KHbLC9tikx9yTXwTysWSXb3GYAfhTyHByykNb4VZ53sPfBHZktQftVjA5wENTuKqp9vJZWWTu8Qgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435wtqSTr3d5VFcdkzJdUgqHSkdDhJdrbUeQjuBP5qpVuLjUwYzUT1wshWdDmoPv7XsxTb1MaJqsBwVymc4j7pyq",
  "key1": "3FHKZZWMjDxVfDG6DsH9ofc2j6H6byBogeWxvgCKrjZkDNgwPRVDmNF7mnNVFJ4o4cTuFzPX5FDyaHsvSjynxb93",
  "key2": "4ntA8Y4CBMSezFiM4CB7NLoZqdALqDC263zSz4N1k7Tqya9aiaTDQqA4E7oewoaFU2v18TqVsnQ3bb8Qsm7zVXMC",
  "key3": "gyAs89fbpfJM9h8hW9xp3DsSfHvyhxzkzRK7UjUHZfUS342WXmNz5TKUttF6UwkHxaoxE9j8bBKMHuwaRFmjKKE",
  "key4": "5QgEk5TaJT2dU4SjP7sLCo6z6U8PZkM7Ad2wpnA3ZH2sCyuC5rGaeCwZ7pqDe5TH6hnXn1HBsoKhegJBLzGjager",
  "key5": "3517EAm3VtzesRF7Pw4KCUyj8C3Ap8133oDGFEvw1Tcz3AnRMAnnp3smmuRfN3VVJwZoueyk7yB8sMbVfvBBi2d6",
  "key6": "3qhmDto8F4RjbeCrbkcwbUeEeervjfLMkZvseHFxTQaHLHbmFqYaWdhhpcKsRZQ83VTsnQzNkzYvepmRsMgqLAZj",
  "key7": "2UQUBHnYB5A8KBR5seUftd3YVhhgwgU5NTpnz7waxzdviqLcA4DYJzN8J9pKT419Y1WkZmwauEGnp7TbxMZ8YTJi",
  "key8": "2EQp3NDGtaZQ2t3aydB3TXT6cQuJXet5hsNsgMK8jNLPNE6dxgpjvJpuwrKBjBLQnLHjiy69SF1b6yuz2owSkJd1",
  "key9": "2K4izVPchewrcft3uo2j9LvwFr56CHHuasB2Jctt74UzjFUFKPzcy5Njtw9EHfx6ZzA64nAgGD99qMLtrVQCijTa",
  "key10": "3iFhWaPkvd9SrKSqBhJjGucxBBu7mMTWsCpymCRgG1uPeZrZLTBvEcDB8jLWHMUCTwKVQBKPtCaXoQYd6vjA3rSK",
  "key11": "mGNKBfocie1VVZgqS2tqnQKbvQhyjN4DV1UNfJCJA2RHPgsGRLvk63fg8rQpP7BzyEyC6tXTHxNLZEjL1ZKE4ds",
  "key12": "4M4MdpCa78niSAJdoJrJ25j2kqatyPLYoiYRGwUUXgqcKw8fwdY7nsA8bt3jvQk12XaPCFzUfwmtYJRTSyntvwdb",
  "key13": "2LmRSaFgSktfEaq3TfygdMRtXFS3RB8y1TijpSEbaZhcrmaLKrqKHcsvtf3Ekk3eUMunFkLz6KoHk5za8STSvGUD",
  "key14": "3QoyHiFZV8RNNYfGEjykUvJKZuTuarvsF6QVjT9wJBjfpNpG2UgTDkdwD2FYmrfLqE2zxPUQqmBrZvTrq8Ru7Fi2",
  "key15": "cWYweKrzLz5hrwtexVPdnqKWWjxDNvTmd7vgrRaczmxmprU9JGSQ3NW7KNdH5XkFjMY7FzNXS7hUgDGFvqSCfxB",
  "key16": "eStTn1JSJAQ3hxkdnaVJaef14G5T2EB86q9Nh4DJVWQv1tp9eJBVyfPEZQekhByvsdmDvuSzP4qK3Maq2zGGUGu",
  "key17": "2HvnY564sjQywj4vzKCMQAda6dL52xLjGWSfwoBgbF3xfvPnsb9JgwCfnMnyYi2jrhJftvUjevABZ1TxQKf9jwLw",
  "key18": "3A6DruamcGPdyS1JA8Bt6n9HPGTZmxKyb4FQ6Pj4xck6UxkJDfEC4Jt95zkmgZvMg2RqAQWAByhXnKhBzpdq9TM3",
  "key19": "5oNre57KPq15okDbmzmodVko6uK2jioK93WakqPG9Y8LaQPW5hBdvBXLqzbHxJe2ttvhLhyR68ftJo1DpRC37ttk",
  "key20": "2gN3B3Jr3VYq2mdXAJv3oZ3rCGR5o9X8nUDa8MUJ66K1EYeQZGW511fWsYFuzS5pPQfstdPp7fB2VQtuYdDuYxxf",
  "key21": "4VoJYyLFbMgfU98YfJqeEAjC4jVmjJ6o1ankGwTsAQ1kdkFHnwNqBhP3ha2jhhpXzsRV9s7UQT4f1AR4yPFm7peJ",
  "key22": "1FuoxRhG3J8uN2GSXAsfqxcP2M7aMrw38Sf9Dzxa9PifMrzyFXyNoLir44tqUPhJW8oV6DTGgAdEmPprxqfzEQm",
  "key23": "44SB5bCR9e6e5bvCDR3Nkrgd7hf9BccezcHyaoraFNGgdKjDh18CVcTAT2Xdm7w6Q9dXjg4jeQZCXwDxw2ikJj2g",
  "key24": "33VpRNWJeuWRiBTbj96xgS4DbrHAzPMTJ5qeg9peqbtX9KVSe2cUqf7Cjrzygdxn1NWqZ9d1vGwW7bNfwBsRoyec",
  "key25": "2pL73msdzkj5h6FNGgpPSCKEhccVTHQFYQ8NR9n9svzZgWk4wANzHcQWodkaQpMtSVBDLNPuDoePf7qp2Fsjnu1i",
  "key26": "47xfqpqStQAveK6P617pkwziVpxp2CxU3JKXmi1UPYufnvcgTmgQXbvRzL4p713ocbq7g2TUzkWh5nNezVZWHZxS"
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
