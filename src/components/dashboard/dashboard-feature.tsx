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
    "5xEG7Bb2F3MKpvtXjdm4UcUA15jopkkQcsyV7WK1MjLqsdWhKmSJG3dUV8qtbRHFwxtdFkDRHA6GJQbzg9MCPrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZB7mMhBhaBjLXzC1UP4YHKYp1tW9NKRE6HY8yCvZJhJE5Kv5ePk9xXiQYp6eTt4EMyguP3kaSr6MNcg85sDkrn5",
  "key1": "4PdGj1NVbVdYF1dxCXKjXSZCkrRTy7Z6yGpdsDbegCqY5upxVtrcSoh2okQGey4qNSR9ayf3FZAFHyJtHpyV3gT5",
  "key2": "5Fb7qMWhihRV6TdDf4YGtX8WG6rzjjKmh6ex2Ju3hFBEEEVSwM3pFUwsA8h2UkVH5XzEH8ep1m7AVBwsot5nEBEy",
  "key3": "4Ma2Gpe7NmuwBvsujjDHS7aia4SkmvTrG1uYtVqoVfBijjVidkuDYjhTcQoHPf7NDQaAHiCCm5n7Uemx55GM2aJe",
  "key4": "cbu3MRTfDwYv1s9mGF6X8vtWa5HFpL6HE4huQ1tsxE5e3YijCCSHeCiypVVLK17YXZGK7U8dFx3ZNKS7KBsruSg",
  "key5": "5inY97bPvk7S7xajzvnDMJKoZU4Etc6NwDg6Ek8uUbH8z7jiGDEcRtssSZZHsgMPxHdCdshbh8wcsfWxjVUS3fS4",
  "key6": "54Lw3fqdk5Zcdxk1kFZ6GPufQGThYR3dedoUAGj8SCPYzRWEKThAxReDk358bhZj5piWoKB1UrXXo7PHV6MaHm2h",
  "key7": "2WNvMs3abv1druiuE8R8NjzVhMXZAUVBZZ9RnhGaVQPeEWtnoEyFdDbUPPhzNP4cZfhcUJXu7G5AhRLqotB4fobP",
  "key8": "5STx31te9235zgEkKzo3RGNToGtS2PvJY1y3PS6RUXjimEjuBSJAAbrD9MDj6tr3QR9ARmJvF7ExczKGfDLe152o",
  "key9": "671NMD3Bdsnqef7k5VPGpb4vmL1qoDnoSLwE3jR3gLXToVZLAS1X1bKw66kGdyBm4y7smpc1uRWcmCDP55bUJsx8",
  "key10": "3KzAKnWU3TPQG1rJPcLLeYKQQxjW1sGTgzVwbEBEpm53jk1SGvQXTn7CceydRuM7TRuEtkEZ7PbpjgJ9p1FavZp5",
  "key11": "L2gx78zp9BQQgAvgFcrxUcqHbwAXenBTHVWK8KdynZQ1bJgnp3P1qe7uA18jHAypw3uL8ZhzvaqrdPmzd1smTmm",
  "key12": "fvsboSmm1NMTniyccrwSBSyXuqDJDj9QCnMsc84WfJu1p87ozq2hfEtJe787wbfFKHwJBakExDkncnJyhJaZ5gL",
  "key13": "4Fe4hBKFDXd1votciWmERiknAWk6dGXkYgfGyN81p8BGLM9ZbYbWH1ydkmzUEZEJBaX7rk25s6WRJCYwz8Gm2Zmw",
  "key14": "2wuRtViKkAaNzg1CDZ9SN8oy2Lo98cFQUPKfoBabswyurGDseqpHWub8EBUkLNbJJ7qJodCfjkZm1DeXLWiL46bu",
  "key15": "iV8VJZmyPARozdf49MFPwx8L3F2RGpmBRx15VtnUHJn8UqnNmhGXvyjREEx8aqoTdQ7DMKbUbNbrJcV88G8XYwi",
  "key16": "5k6Y1vUyTnARL4k9V1sS3z7biq5zbhpGj12RyMtP6w3dwM4SHrrL1E7epG1GFhiwP5W5we51nK4GfHdp32DP7qcN",
  "key17": "4aaWZEZMVJCebbcUeKzY5ZC4NH6RhtLGGKXywJD964CaUYvS4aZyzHDkWx8ztK1Vq1qPS3Mqxgr1RRhMwYQmJY3N",
  "key18": "3TCz7k3P8QkF1g4Vh2AfDyZU3mNt6V9SnfwuHtV5y6wZXZf6evmbjF2bSyRwaGp5Wp5J6mkRTHBuoixSGMki4d2T",
  "key19": "2ocDj38NARgJixY4WeLDe4jZMnNtE1LtSBs2kDM4h5dUiDETqS7kvhGVJE4TgNDEj5Qg5dW1iugPfHqMUQ3dBdPw",
  "key20": "5SfcK5FxqBWpgtTgsbzX3njZKhy7qLP8bTAtaHALTdWEYAkzDqv11svEgiE1hF9GTScmHWQvtXs1GPHgqu3w8KMy",
  "key21": "45LnPNt2Kige4KLwM4DGyLWh8M4kctkgpuTtP1Skb5yZzLqTjHuDJm9Fm7dEzfC8L8hPhUJeBHY2WNe8BsLrSvKo",
  "key22": "2m7LZpLfUXMabw2u2cNnggjrXE2MhfzpdwszDBGPwiiP9HRXzVTaiiBHdJs6jMwkbGHHpLpPHD1SK6XpK76Rcdqi",
  "key23": "4ggJK1dm4ExBysbrJ2UKmZH5s3CAqzLroC5FYFYQRy2z8kWrAi4cMFYQHKTUrCsggnohdstFD5cdnmhVCJEs7Frh",
  "key24": "NNZdKs57UEVi8gwMDLVezHAFJvPCtp8v4xWXy4LdowiyzGQwRURx3b6XJ373CJ7TCr56pFNRRdSeyp3MGWtyAA8",
  "key25": "wmBsaFpoakhKBZCxcqvQ7y1vXmA9GtdRRPzt3GNDMKTFAnHqVeuRCihcjLTWUa8mmBV6Xi6UttxtRAip1xRTFhZ",
  "key26": "5o7FFEkSaAHeZHHqmLJxYT6AQ49XcjDHAWbt7wYLTkBdoDnfTHsTSgHHQ8K5ZNmEyL1gVkPwCRvFP9pP13JuJqfo",
  "key27": "3C1RV4TBtAYvfNcduMPjb8w4GK5zYrENrhtoLdXgFgv2VDcwdohJhi9C5KFNi1BMc4NyhK5gFoc4nwAz7k8Dy5Fu"
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
