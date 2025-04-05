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
    "2HFCbVeTaos2DvhFmjJgmxMVnuUbtcn6W76hqp7RWf9mP7SGbSkkuovH3WVh1dcGhKbb8oSwuYP9mjugnNNyydEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LsHJAUwY6XvEuM6Eg89RwxGvAtA1ApKpBEoe1VNsaVRp9h3dsYTmWNJAbV6XPBEiabn3oMmQTRuqX7TG9Fj6h9z",
  "key1": "4iJj9trAwGh4HymgYwbVN9w3dkABK91KvPVNSZzbviJaw6bzrJHgmYm27oko6Qcp5p6Z64gofLKL8sQK12eKa8wi",
  "key2": "46rBZZYvS9xfWFw2fhTPdEzjbAZPZ8q72SsdCsaFrdMaHzgvVaTfRVvdZ9gngnoY2jQqqpGCEdEewjMvmr8TiqcS",
  "key3": "kMqp7pafwgjvPYEYrUXkCKxYX9oNe2TxijkRiEeNAYzsV3Av1pH6x1A9L2PQoayHPqe6fbUCvwbSHwBDmh24XaL",
  "key4": "sBfgYgbbDqtRC6n4NCz1SDQQEgFj1ByRVBptjYwHSwG3U9YQbPzU7b8zZ9L7wDMyb89LcggPvRJ71Zru7ZHwhLz",
  "key5": "5MRLfGfywGM8PWVaZsZTKqLiWrNHhgWA91FTnjWn8y6aSnE2s8erMXSib8Guv6jwT8AWGJuxKLnZ35rua1orpCuB",
  "key6": "5gdqyZFhai26Rx4aoZ1gkPDpQk7c4qRg6ES1eCTMnZJAzzo74ZJogGyopvY9y45SsmKZ9yB2TLs1EGDuWd2o25QB",
  "key7": "63P4Aqi78gvYDtFGM5B5oyBxASyDYkrJuPgCWcCJEf8KJoKi2zQnNJtT6eKYGw9rwSsYvqXGb7jZBDq96GeCv2pw",
  "key8": "2RZw1zrMFy8G28Y7g6vuhWsR62QcDsJr3AyszTzHvCtctKqNRRTiF7gmpPikQR3YLnLQ82TVhwe3AGLT2FVowdET",
  "key9": "54DkedsMTfJVrNjY426RHDHN5ezxUJyZQLH9cpzJvXEzgdiu5k9whxGftPq7dUTtm5Wo7LkPhMzdGjhJAbjrY2Tr",
  "key10": "4atwP85poagwwvkJ4mkLPQsseNJhNWwse6HxY16AcR3ptYG21yNSeB1ZwgJ4oZ1wcQNpiUwMvMF7Fs44ayvmBY1R",
  "key11": "5PKcb1wRaFXV1CsGjD5CaXWxjquG4quhnVHgBbxZgTMdum9hcMmenABqdBHpiysAjJDdpEHNhWRTSELPCscMR1Pt",
  "key12": "5Farys6SWfD1vNLjhUkWrrbuehKUSxMXRwyUFNdpHknGUy9a9jVHJNmm5TCZCJSMK57pgpKH8J8nzRVyNXFa1jkB",
  "key13": "244V73YXsTrYyyjjw82bfhXuHty7AWG12RBtFDsxvWvKMsQ5iuuaZKEWcUMEyEYe8BqgS64DBaqogdAdSvcQodFj",
  "key14": "3hoWTE7Udmeupq59Zn4bVZdrxBtorYWtGQL2DJdvRtZjwgKgVHg5VaZmxU2xUMYwrfLDYXc1UY5WZL7rMBA4BcL9",
  "key15": "rwoS1yrWXDf8txXj5E1LQP8XXjCSYs284KoGU18qhzLKh4EFBNsSujztEMuhbQkv9ANKoJJeMZrGhup56mAJA9j",
  "key16": "4hEWb65TUAcrNriU1SgvHNPGz52xYrE2UEjagufax7UVAL2siKM48Dey8yN6kfaD7V6hKMfAPKnD4m3H7iYH836W",
  "key17": "2YUpSbbj1YshzfwSyzfwc6B3L5AFgoE4iNnQjs2DyxiYzNFqTJoAebuxA9JmV6TGH4Af6AbrAbK2hPzyuCedxUam",
  "key18": "3V8rDgykztHyGkKDUvpTrLCx7ALeVS3tzjSYRzmcoxZP9DfCSaSeS7bUS7Lru86zZpgxceisHKn74g4oTJ4s8EWT",
  "key19": "5PLGHe9h9D18SDbSj6mXfrREFyGHeCaoFkgjr883FxiESgqSp2DgsfoJoyrBwtZ2NXvRR2a9EjtPkBXCfxbjjUxL",
  "key20": "5bF4YFQuDV2nQtZwEhQopzKfYBYeQTNRHEvnMLVh6xiCwUANGfPSXEn3fDbNkSPzjAdHtCfo1st8PDAnenxfVLjv",
  "key21": "F7WSv552GBFQR6gAtLaLkAs9aszEHV5snMD8DnBATX9wDAg8GYpXyczLCJBpkQekGxXKFPjGkPwcE4YDiz2EavC",
  "key22": "4cBV48yYq3KY6dHW81i2CzDCVTXgHSERh3fCSQynRJLt6JgM5xHEnCS9pk2u8i77NZLAw6x74R6dYL1heyUAWykV",
  "key23": "24rkAiyK4kGm77neD1E2cf9aR2zPHk7iR7Pw2yJMg6HqxPa2R1f2kmtiC9MCP8mnTMaEc34JdWbPneMbyHhJuoai",
  "key24": "UrFarCtntGeDtL1pjWLogEXrSEbbx1VPXMXA7ez6N5BJXSqriZXRnwjF73oUs8XhWEjYRe3W1xhFc35qKefDMFo",
  "key25": "2giZNuFg1XRS4nbPsaJoCzPKaBRUJiNZTRebs4auV8T2zWSj3YC16Wn1g3mbQZVyk8JARoVaky2LYz55F4sEaAKW",
  "key26": "4g7KWpucGFaJKnjpJiDwpM5NA9hXxK1gFdCRuHcZxC55fJn7nmrigNbmwXwhCbhwK8whtAERQAxU2y9Xfh3AB9su"
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
