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
    "5jdhGQ4NK7wdPXimXvx5ssWLX4uMceC5FTpNnhHYipc2oaq3hyE197xTw462SuQdg3AURi1mfguhs14hJEY8BG4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrVNvULqWsg9rvAjgg7NjBs9ncF46kEx9dCErdu7KF46BT8iwgnmZyT4tfbi98Db57DFzzk2NWB9duuTRGGf5Cz",
  "key1": "5c8fhj6PGkoh1d9Z7qWYPGFHidc9xn5fwt2GVmEDmYNTdiPogumSbzNTsHwSJ6i3Q3DRWsQ4fdimWKXbf3reZvAS",
  "key2": "4qqXmuMmEfnSwgq1MoYjP9SKsiZA2DCtvqcDhBDDYZ4aaZbZn1etVu2wFvwhTc95hk1e8CzvnVjATaQFgd7Ugdq4",
  "key3": "4jojUNAkmfXxANdCYYpnHjPvwLsrzPstn1cDrdt7g86YLvwnDg8LiTAEMpkbMezKCy2pmpgVX5DQSqrWm7fe9JnC",
  "key4": "x8HwAh1djqPrYZowAhZ93vpV3E2smAEvyHuP8UnCiJ1Lq6gXE8mKRYHgMfyBfHiPx2XW3VFp5FZvdx5y8GpprPE",
  "key5": "3zyEgV3mGS3pkG1Cqvu4voRgSGw7U3kVRpjBDUfiUbqxMhxJrK8eBuFJ2x1BX1SwHGNa7XmUNzMVChvezPYD1DSp",
  "key6": "4HK3mCqHS2MSFGSAJusUWfGbwCRnXsW1644V938eFnAXNYkC19uu3JR5NyoqsCAvPJeu6DPiVKwVmpEPRSR1Zr5F",
  "key7": "2ZxgKizAxQTirU9MMTSEyDChfGrymC8Yz1SWbpmGTgNKSBW6W41gvoZ8bgaXopiA1jpozn8BiddEAqJHD2Q3BFoS",
  "key8": "2WCzkfyzj1jF4i8yqm9ucVqoD5gpLAMAENNs5mJd8y5pnAyst9wHQ5fyH3C3yzz4LFYbJCwHkTQs1ArBxqnMVHpt",
  "key9": "PdFfkS1eHBm5z597cJyaktaf2adoHzbiws8EdNqPg4ATwjNQ42p6yuLCSQQRU6wBurVXLmD7cxAmFxZrW9w5mtg",
  "key10": "3a8mEWh3Di43t13erYYnmrPUatM9QFn9qD3CcUQ1N4MHdMqCLvtzj5q72dzQtunXfsGaCcWhGBuP37WE1Vi16bf8",
  "key11": "kun3ubTCWKMGaYqpqzhR4kZ3E6N1BF2FiEN9V39fU8bdWUH4XrCJARXuTT3Doeju61Bs33f9zvjQi5RueXR8fbL",
  "key12": "46sbBi6jEbdmUk8mViMRypCyAAEATYK1AQ8pEr4SBkURrDjPVNjPshT9zBLQFKv19NGKqTbXyCGvyf4BiWKNPj88",
  "key13": "5AZWQo7FzsdQ1grL2VrM38ynC2Ui7tuGD2eLvHiFiCLNaU9ECqxwxY6hd1eKZC4xctzdd48MUnsHJPKr2F4h94yR",
  "key14": "4JbMKLjroucYufVFKoB1BnbA2cq3WSrjhMchSoyKTBddr9TN7e9f2hRJi8ry42DwhaWcmzXujwiHk7uZP96ikJVx",
  "key15": "5BZKyRECHLewesJoLcsddz5gogpyjvoWPkeakn6ZrqCZievCxRohoABsZZbfp7MtGDq5H33fPYcjbaCtdU6kwuJ1",
  "key16": "5HY7EsMXN4FUJkHa4kk9VPYQaCcPa979E4FH8VbXMeojjcAdBpbpodESkNLkgidyVmpweFyp7EMdyNR7hjS9gybW",
  "key17": "4pJuXHREhUrdEoA2hPYFykHovG7pNnmabg6Y9D3pVh2dJUBvN3eZvC1MWiBndnBDsPZBcSVkrb2J5bCKvp4LebJa",
  "key18": "5MyJWMEvJ4YFNncwB7SuFYbqKzZP5tMYEtC9sPNz7rKon2M3dExW3stHytm9MzbvsSprXwpFVK6r9so3c7jD2M9R",
  "key19": "3FhxeYdokz9VTr5Nbk26Fs4VMN4xA9UZ3A4R8warLcxho7NjdS4WE4peDebYRQsP7dLjJrxBK6T6s6VKM2hnaUft",
  "key20": "3hnsEzPtJYZcKw3eNcno6HaFbpfzQiGhNGKZ7U8gkwWMkDRnbUU4kqgqAq4hEUY6KZsKRavZjWMjjWnRNnpkz6UQ",
  "key21": "4cQuE53HKva7PWCDSoSRjwFt84hxK24ErVsNYP4fJbQ1WxF7bXAWgQuYK5ho69tyWKf3QbF1EPQmZUhZB1Ey75qu",
  "key22": "2EbRmeLsfAHinmbDBZB7HoV8ot3eu1stETpRA4AWeQjRvUXE3QtCuprsc6qBv2BBVqKYg5DZrH7YAmevbJq5Raed",
  "key23": "29fkjHRgb9rszsTmQ9nsRNJSkEP3LpKheVi5t4n7RXJUBac48REz71DWyucX3Cm62wgqeFtnpjKkTWnK7j8oL7Qj",
  "key24": "3rEVv1HLyZjVsf4ktfebkPujxh2eyFchHiaJKr9g6vvSsAQnG6FHLuHBw9qL5QFm1HoTTjy8dagwSy2KRLTw8p2S",
  "key25": "5dX77ySezCwGdEE63Mg4xW7PKL6f6bgADRkQovrgSX9DHFrQq9GVqwZSRC2P4DNyBsRftZsZbTBmDCde1Zfa5vK9",
  "key26": "4bguyNwirEfXWUQSHmjtioaAJu1jKuSnh751YWbVx7SQ8XU8g2d8sF6ikPrPhNaz6n7nEhPEmmdriXyshJqgqiWm",
  "key27": "5ynzYUUAijwR7HMZ3oiNc8zbr4QnTsugxK6UPow89mrguv28tsudmziXtvk33BXT2hKTwkXeYtV7Ve48d5BfpMwx"
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
