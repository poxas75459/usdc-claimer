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
    "68E5Zh6N4hPabtsEq4zr993SJeRKFQvsYt5Xb5RQDdPGDeUjCSmp6g9icWbihJw6RZJkMKpjgwneG4AR6pSrpVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FgvfiHq8v2zgqcMHW3xGiuEmQJKCuJgqR3rWCmGuACDNWRESCwqGrJ7mS2AWrUhBADdT8sqtSixjV1RzxA3amkU",
  "key1": "KB9tMfzNfWTuS68RwWLu4sWToNxQd5v5ucvpNq6BPuHSY8DHjHdoWViA89P6RSDhhvszEXgCqmBcWM3Atwr7xvf",
  "key2": "4uzfbLs6pwPfTV1Pg7hVt3qzcebbjXBFXvPuwZWVSqaZyquLMQfZhqAd9jjUrEhXuLm4nqx6Y5dGTEmXRxCSWH2i",
  "key3": "47zybXGBqKURb33qAewMhFcevwd8HBroDnyfU5WinbvTX2sDNRivCW3Gf2yHyRGgxZ32KbnTXJBgu1QsTVq9JUZK",
  "key4": "4CGjteDodiK8Qiwpe823f9VqcEqGik1ZWtV7N1Tw44KkEXiHsTqgZ9gjhC1PaM1edscFLsjiH5bHkje7TQgxzYQU",
  "key5": "2hMvFWnMUVqXePEsVoW6FEX1Pnc8AE54Voh8Zs87xRC1GwHeYcjhYwenwcjmHTmPRwT44Q2h2VP5GGZXYZRLRXcX",
  "key6": "2ptyAnuXYZuGSYZ2nDvmokBSBtwi9Feep9iNz5V4GKFQkqHN3gkPRf6FHHmQaZ4zaqmC9QLZgxFUK81t7gEyEYuC",
  "key7": "3JC8ugXLHCiaTowCCBhnp7Vk24JNmtVK131HXuTkwMRoEMwbX8GMdDiNBPqV9Eqj4yf8BuG8khJaU9TqqVRNRvJy",
  "key8": "52MYzq7c8XV458ND2feuyZz4mCiLxEAe4vnm5x5xZrZT13njAztkCEqHtSBdX2eTfZaVcJbQSnhvca8RKvFzNEBv",
  "key9": "4XotHAZmusoUW1Cno89FcUR1Fro5S2rkpT19DWiV8C7BCNUs5Q8qhb843t6Agh149FjkedMXa6ZLR2BD6GDCGLsU",
  "key10": "5C6rHfchK8a6iQhPvDx4QmKXUKVvNUkU1Miyw5f18eW8A3DLwt2oaP6m2Dk6CnqoxbRJfyE2PdACmpBWRnJcfx2c",
  "key11": "5YpVQK1MAKzBH5ha4STWb4CyatSjHqnRK8de4xRVc7ZvGUWm6xQofjZFPmKNF6rTsPfybWuxjcohuNMQY3tgTYPm",
  "key12": "3JpDUXyQSeaASHAYvdGnKa7PXn14bkUyUuefobTr1kSTrN39jwupyQdxv9bjoJ7WguHA3RXwaeupeLuaT6icYans",
  "key13": "4Eo5fexfWHJfaBFTS565TEPLYhEzekjX8XUoMDsSURNBxrhFp6EvvZCj7fmcZBc3FjQdjhAWe9YXS7Usy3b4WkSH",
  "key14": "66XBgxECh1LcJzpyNgXYeV2xWQEoP95uvJy4MzqSVahqSHgmN5YFj3BvBMB8eYhsfaJMZhcx758HhFe8RiFnC6sJ",
  "key15": "57mC6tbbWNJTEWoJabKZxqtmqvKSHfFQK2Cxbm4gp8wLQhnkjqMqtSS9LmLTMiHPaTbrSfC4yQDUKZY3C6L7obgS",
  "key16": "2ZM1NNvS7e197MwkJKirQuoUMFW1Kgpbg1VFN8npnZBkbpddj1xXiUXfVyV5WgCY9RDFYoJqwYgE5oWuwUrH7aSg",
  "key17": "2TvBWUSfMciiDtDj2NbLVXHHQQAL9oxw46DtCCzJXek8TeBPGZtRcf87w42kZELfhqWXG4FjrcjYgjofCbeHgdHg",
  "key18": "42PGXik7GJZoHqRwaBWKUL2B6XgLEdpUe1SPbVRP1RY2iU15yRS5EqYT81TaHm6noqMajA1Z8tZQa5WCHWyP4X4K",
  "key19": "34Tux6FH9zGaaPW2D52yCPV2ZncVY8kLr4vN249TAXmEC6jTKAwuu7coHpj8Dj1XiuYvRxzs4ht6afcWCZsZ6DXu",
  "key20": "4DzYfhSoZkVS8uKKwXjwdaWK3cREzcJbVsuQVKqDZe5fC5PuUPbYHSTwxDHFqjbxUTgYnWj3AVWEBM2FNxstm3kV",
  "key21": "2RLTofFQWLst7T7oJLCiaSsQFbkTXEyeChBobFuKMUqhuo1UdjsJTmmUKiF7Nnc1R4FJ4ndKibZY87pwLHFC6jsB",
  "key22": "3CqbSUSmzT69rFskkf3d7GCefTwoePEh7uZ5bqmtCXQveUNQsJ8TNMwWEYHm6HE5AwkNATQ3BZWdKAZb6UJA3kqx",
  "key23": "BXi3xim6VcKcgKLawfWTTqz9mCeQUjMWgAExkYNFnNiW24fjqipv6c7AEEx6fq4KZdN7E3nwv35JAmsALm1qQN6",
  "key24": "44wn5rVrZFWYn1n6GKnsSQASdYWxH24VDYCfF2x8MkuPQewkfTACTNTPGLCXYV9MHyYErahmxjASQpLPuAsfUi4z"
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
