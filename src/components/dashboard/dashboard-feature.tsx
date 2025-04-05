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
    "3qavmxpVsNaTgpbu1PghqYqHJs35MmNCvrcrGDp8kUXWje1sPymAdHoatVe2C26sjypi1eYSD2WM87YR5jTYtGEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tAayavdpTrHiRJ6VpB6yHMacc2GT1e7n8GbWkcLcHDaJhiECS9H1nK2XWtpSPqVh3SXUJQ5pKsZiBazNxYD3s2B",
  "key1": "5MxSWY6P4maHAMHw6dDUaPy7wfnj4p3EMkhnTMVyta34VacCwANDubMJy6e7spk6NrrbpjDgp2rAeeKFDHFFLeEw",
  "key2": "AbkZmBbJ8fW9CQfFpznzPGgna58kqXGpJUhBWepmCEjHPgAaS3GkxRgpntRt8qPsMn7GPGEWiqRYjqbvQCpS2Bg",
  "key3": "XYZfAdg2JpMfzKM8fBpqRV7pwXEy9rPDkDMCnEdjwCzkzkSgRSCtfoXyWp1c8VxEmnEdRSDWuDNHHcDwL5n4xE3",
  "key4": "5jzczatU5f4izAD27dwb7obvPcB1xCMA9qN9hGm4DSnuN5mJwbC1zAdSKPP45J1ymTvWTsR3LHSX5zS1GPWJE8YF",
  "key5": "Xr2sNs46otBC93QB4ZxJnsTJxePfeNGR8ks6wn8Er8KCES2oEsJRZFYQU6S3dsyHYkxHRqkMDVsQjXfu9UiaB8D",
  "key6": "2zXWATc727zjsmr2aybXZ8nc5hRpAVLzpoyyBUHAK9pPdLS8uv6L9tg1fAb6xXjuZMZVWge3o6faLDJsb7yGESfG",
  "key7": "4Et4PxRAU6Ccojeqe3rN4KoRGNhs6CizqQbCRdtKoWa1Am8dS8c2qTbd2CJmTC8wE5qVDGqgM6ZWHVBa4TwTfJqL",
  "key8": "4fDej6TxrMq77Hs4bUL9FYE6SUUbcUoK2AFxCfMDvJ8fN8xU7rFC46yeBDsBsPcC2ahfBTJ4ZSWZqv39D2YWHp7z",
  "key9": "5ccJPKJV9bKHcVix6TsRym5wgaYqF8HSKyvT1Gf2i3opt1Qm6jbcjGhKxDDUpwQKAwa4CCkFXtUWPdMvaH6EcyRa",
  "key10": "3dTKAtedrPsHTxGXqoJ5RhebmqDjiZPw5N4fmpS2NF6ffAFsSbFoLChnY76kVq8FJWkGFHdVf5fzUjUnjkgcKsRX",
  "key11": "UZ3FCYP9B8nspJ8uA2Z7VAJwqbNDv65n4AMEGAu4BVGRFLtfTSxjueXh9HK4wHgvmxU1B8a7qjz89jhCbE4csDr",
  "key12": "5tQBRBGjaNCnY61HR5JiGtkgCNCDwuCwYirAq9ErX4tGUjvmNHqBBnXYLydu6iBAYDZN9L77wd7Vvyp5CrWECwxs",
  "key13": "5uMJydoexri2F6KcoWgko2bjyQu9swzsvtdTUgu8tEzmMekioBzw9GeJkrxHX7sQ7dxpYd6hgfAY2JWCvzD1dSAt",
  "key14": "46MEDsdHKCpVkrpu5ZCXTZgnM6qxn1WsjXgakdqaW4uFbrS2ae5RZ22Hvf5cqj2NmJcygrcssjiErcD1Db9CjfF1",
  "key15": "2oSyaR69drrgz8SbfHYn2GHgMsCmvmZgnSoVGWhuUd2LyZ4AUHReDA56v2efEcLVz16TNQSjMVFnAMa5mCsYn8r5",
  "key16": "3NkmMHiyno8HcsfRCAtoxqeNSs8geF2GCnixtrQc4Eyv7mVGtf8ss73EGm62BMXFuiYNM4KbA2xQou1fdXMaM81u",
  "key17": "3fvXdsGomAPDaFjLUykM9rwzkjixf2yG3qJ3nVEGThWJHMNgdP2yKnfGaQp2dP99zguZZxxn32GESfyBneKgHNj",
  "key18": "5A8q5Y2KVLQzYtJaMfQXxMUTA39w8HMzdbiWGroCKXvR2Y1sSgqkNKuiecmgg7ip1dJPrHuTusfkptX5rm2AmWeK",
  "key19": "3AjhAdo1w9SsheHjsK33S61KG5s7NcYBJsDZBmyiKnkxfXfK8adetU9spoPKDiKyDs3jdKrfNFT7zh37tr7A7w82",
  "key20": "58fknvtnwts1U4sb7fqmSBCJwBwZGnbXswDZ1i9B8A6bkZx69mEZC75We2uibkz14KD9Wp8LSkHV3L2wDqTQbtYa",
  "key21": "2Mayg1im2qPH1qiXZjcRJH3nb4kByP1NXd3Qob1bchvJPVaVg86QBNNt9AkVVXiM6AY4JgmjptJty1N6vsMn8UFg",
  "key22": "5ZGeoLVgoj1LrcRRJeomPSX7CjKeKW8zAFBZWEZieQz3QDKLMeQQbP4N6D5GUCKdYsAu7Yo8SJMy7mNsuFycoqJ9",
  "key23": "2v4VV96QHBJuY1uSQvKrPJZS6yvSifA9FBv6FGRKgzvFoVJXfMXxGACSXfQ5xWfJgFPpzARMqqPqqu6mGpig2n2v",
  "key24": "4uCDH8ANtnHdo119RAVDibABKNbLNh5Cj1cWK3MNSU527m7PK9FzXEFMEn4boaXiJ8nFmcUqSVx3EPzbBdKfARc4"
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
