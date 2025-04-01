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
    "47r1avxNg7sjhLzC8tN3jsXddEquEQyafnYc6DRdVWijh55Yq3Zmg8fXbNtLuFRQmSBjePNUBZxbhEz6tQrwzayS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHY87uzcnKgTBx8zMfg98TAEFaVZpEzzg1ktWG2wsG3d8ZM46tJbFNaLa1ZNmbJWXSxzUjNuF9cKy93FpRcYP8P",
  "key1": "CBDAM9n13rna79bZv84gMHJ5awdvdqQ4GotRbMnfwgv16ThUpULg1gzb7muXxGyfCVqAuKX3BuNvJrpSVKbUat1",
  "key2": "2K2Y4ZJzY8Gwy3oc89wbQjRar3McegtRY6B7rTANsYfPwzXabV8uZr7h3cMi4i1hYSLJYRpQ83RrYd2xSt3gPKZd",
  "key3": "2E2uvHfz4FB2byZuDtZX3LTsPVfwRfVFGMgXtvXdMr6qCkEwmZ7ioCuWChYgRkeyCD95zpXEowaK64tjjHVh161M",
  "key4": "5zqxzobVZnX2BQ7duPv2WJGnHv6GsUrVouoYmWvi4UZsiowERkGsoRi5TjPYiE6rM37rHqPUC6Fn8j49gxL7Cc4d",
  "key5": "2LN7UZis8gnSwaJTddw6oaAmziYm8wzyJst7ZUSnyMtNuFrZofGn8mDE3CQhXJb3qj98T1E8XNhyQaoz7wexbwPi",
  "key6": "5DXXm4noexPiTrtoMx3FPHPdnsqGeVp77vNy27mSusSuZR3yMcnK9bBJB5HgPaNKDhtLNF9isKmBoCp63B8gRQtg",
  "key7": "2PJth7z9TDLqds4WMxVKC31kikp8XgGhRhvbEYzfZM9ayRrjFsGGPnjqpDwtAxEdzbeSPfKYmqwdMyJBT9AMXHXp",
  "key8": "5wY85Vn5GjhmcarbA1YjoAJtYTTr24mJSReUQErThXccW2DzTpFY4D9H8nuQwnCssouN1B3KgtaRVt6iG1YQ57GV",
  "key9": "54mChS27Z3Aatdz2tA1r7M9xkY7wX5RQWgynetmAK2TexPFozhCx6BCkwgZJ4147uj97LiqggB4oNTKyRyMubHPk",
  "key10": "RPDkjTU86LMCoA1QJSdJPZgFUv65h5iHSqBzodXtaPrSdfZjSF7FAGqbUz2NhkwNY36n4VmDzLDRxohHSRtVX9s",
  "key11": "3Ufm6oU84Ms7T9nqcoUi6wfF1Ro4Vo9zvFVARkhWBLriFvodxSb18PYQvtzf4HMqMoaDULGa3RALUYGVqefPfRHy",
  "key12": "5rM6TgQ1bohvQe8TQ9boswUo3jcHGg1GcYrVU9xMUqp21z4tXXewWGC9BzyFeXz76mT4szjauthRRchhL9CGbtTX",
  "key13": "34x6C5TNVWjTVS6yGJnTzkQn1cCNeiRgBvGVPTc66rNiEmqEitntk8LrstgD8xpPgAfNZZG3GDD4ynQ2oLgzkGyh",
  "key14": "5tA8xGya2SwVnR8qFXMNmMGH7HaK7BaMCga5N3yLg9L7TFmuAKhgDcM8bufazx5m3cSuAP4VuS5Jv8DEEyaTGPMg",
  "key15": "2ZfsfqQp8T3XpFovX8XUFf9JvByGHeDYdGsu8RfQ6ifvZnC5bUh1Mrk2K4fUds2iemT2JExdkY3QMknteM39Xfco",
  "key16": "2NWvq5ChnapuaEskn2CeQNt7z2N4u5xquPZGDMfCbTecXN3Mzwi7uUFYwCVbq4Kh4WZKnrJWpVRi1D2t7npwzPbU",
  "key17": "4QfzP4oZA7t8p811PeCnC5mmdhDRUE4L1LK9PBxk1LJn92nDtPTBmumUGyz6ugnUSz63GU4AdWTQd4xEr4cRiA6A",
  "key18": "3kihGEsVkqFhKNn3aQ76e6bUa7V2qUNg3vBQTLQSo5T68sVw2CjQrUBfFHfjcvTfcrQgUuwXqMW8LRT6WdMg2mZV",
  "key19": "R4NVr3ATEKFuAcKyPXzY3V6YAHfD9hiBQLzAd5Fv3qNrQkfr6YNgh5Fh1esYCwg5EnC7YTzLbdwurzaJWhfDGK9",
  "key20": "4DNne6vHYssaHjqAk8YZjUCSMhb28WkwPaZEvgm5T3CdojtX14522E3jvwuz581bSbNGbfdkNgNMZDFGx1XQLEDj",
  "key21": "43eSiLiFAFUvtZnvfAEhfgmDkVoqbzLgbCjmCj2HXHVoVSEfkJ4FjpshfwrsA9YAHKfetr32WQZMETYgtaahXGXc",
  "key22": "2NFK3EFjWAgQSrZsVk7sdv7QL7SdEMJjBB6i9ppAhSNcnggXmEZZSae3nmZStwNguZGqbqGj4jzKiNQT8Mh2dZwj",
  "key23": "5Xsn2r9MNNKmVvbPijXPCGxryX294EaQuJFBicxPMYGGZN1CutJopgHWqWjKD5UYpAVveRUqyHSBLHNHPi9u6Yiz",
  "key24": "5BmUBcNw3DLJQW2DGCpD1mfcMTkXZpRb8RnvNJaVb9h5pGpwgUUQXdkBUZbEgqMkhhXxR4MUU4S6dfWeuSMqH9ci"
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
