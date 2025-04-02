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
    "4SGoMn3v34MSTbYbVeGFsY4SCkKmsKCMZju7FFyFHkyKXkdtPengYtsw7ww9SeVRG5y9cJiPnMuBhLvZqBwKfkww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jp5j8uGAHpBGqSpT2mqbd3m5yADj2K6727DbjPvwyxpKCKPSzPkXbvTzF3kCkQpqTrzAZ4wkJhqWRW79FHFgzrR",
  "key1": "3T7qJfjTddHkqLScu1ub5S4Ltzpim5JjndLfYzUYmmhJhCVTEat8HdqpyCjrTY5fuwbFw2fmzmW13d2e6Z8vc1Ra",
  "key2": "2za5qzjxPV6dqZcpbwZDiwBisg6pwazbqUxgQBgxseyGfU1zfp7VLogwJmC7zT6z3UvDSLtaKj3WUaiffN3ewRft",
  "key3": "3gvNMCm6tnoe5RsaLGbs8qH7fKkH5LvdryMi7kSSh3tWdfWdYqJ6viCLVfMbJq6NVoWsVLadyh97qA5yofmjkFra",
  "key4": "511JVxqkz673tFTqoWjV2WEFiAGkJS9yqs162h4ayLZwJ26h6kG3titPPLRi2B8aTQcdEAWQ5b8vcGHFdTEcpM8m",
  "key5": "isxcMMV8stHq8GiesqTEwk4K3XJowqgDLcC43TMqAY7wkVzZHaQ3CRC8QVdvW2mcn68FGBySgSbs5byEvEKJ4f6",
  "key6": "co2oWNCv7vSFRsVrAVnbMkPqsmgJEERkXqg1sQ8t7EP4juETogDfP4QMGMsB53J26d18bd5PNoUnxaCnUPnUp5F",
  "key7": "34p9CN3mFPwzaFLLuPct79jcjGBWMXDj85dQ9CEXF5QTWYTszRh7AjUpc14Z3rpAVmGeS9LZDX8MLixDifWgt13j",
  "key8": "4EbRP6VcP4Z6CfAv4dy2Jd1gbJWAaM3YqYavLVZS1Smqpsp6tXiBNQh4LybSfyhjcbAHfwATM3sFwKoaUt5uskwY",
  "key9": "42iFY9ojjh6UA5SxmLX4rUdpGg1dAQxvhg5HmfEDV6myQXrGgaM4E93EpuZu5FSDHAL84erFEhFDir1BJ1wN3vYU",
  "key10": "5bknpGRVSgDuAG1yJzM7CJ1i1ko6ocqE85rNiBCxodhsXykoGRDS81kQRtPnjoAMLftR9BDX1x1NagJ48Gc6rNze",
  "key11": "5prEru1zFUJ9cFmrTu3UHEx5JG8zRTP1xw1mNwajRFHW4vDAs9J3ZBfH9Wcs2h4CNVAgv58icD5hWi2FmzGA9zX5",
  "key12": "QamQXiYu2LvqmjYkxmJo6QGMLhAiDsLq25VCg7yX1PDgw2aAVHUXkTg5nbNPjFG2wD2ppDqxuCHjhWeRWfeFUF4",
  "key13": "2HCYTGXREH6RxuSf9rhG2H2kZRySbuUNZ1MUvhptJeNuhGoGBMdsRBSBoTYNJEzKj6D4eMMuN1XZmi7MMquq649p",
  "key14": "3SjERfhnZYew3zxKJdK7K55zGoRfETweFNn5RKQH9UraiWKZH6fShXLmwvjBJYyfeHKudP72C5F6gh9buT5L6jBn",
  "key15": "5tmHYU1AbCaYcxBzYqvz65kopaME28cZCmH6MSctdZp6KA94LwcSCEKEZJyQRtVsFgyEAz7ZYNmQ5HcQNYhTZBui",
  "key16": "2uMhdHkd91N8a3vaE95QZvfGDJSMN7XrMQtxBqJ8zf4DFoNxouX981eDiMhMjLU12rcDvWJwiVMMf4uci9y3ZmvF",
  "key17": "ZpUueB1Kf32sic7RV7n8zoFBkgtdVSrCTBBF3jUoGvVZ823enBpaxZec8kqhJbQ82Vfrn1gBjdFiNzvVLjVV8wn",
  "key18": "3NWP93ASMwS7b4tEsKTg2VqKBWedeCSnuNnf8XLRWUbCQvEu7LLqyohHANKCgvtBzXh6oafLvCfwKucEzQJyWAra",
  "key19": "64yaKuVG591EuPbqkDn52j5eieMpkL4tq9fubJiZ4bpXULbsVTEqgR3qCV7gwrC2wNYLURxAo3YUb7DX3v7U6BNt",
  "key20": "481SuBNkn53zw9ZhsQkmMtecJFQEiTxFnq72qznvT4NvKmSBD4RyJLUtHtQad5HFEXMcbN8uTvxCycVDMXMRhqno",
  "key21": "5xyfepZ1H4KaZHkP7v7HCAQ1f4EdpJrSae8cjrY7VCcEnLsHQGGSkvHhSJJf9gwJ4tvsH6UEnxy5kGikhCRJb2AX",
  "key22": "2xTkt8oRmoqPmLJJ4Bc2QpRctrezF5fcQ4ocKRKvwWg9TjTyyPkqn6AEvXHEaX8MD1wxktVAXJVafayXct4gCPNT",
  "key23": "5grzysJ63eqZWTyS4HiS1fFRfnaprHRh2bgvwnrApHdQt3pE9KbNqHYbWJS21kb9rxRrqVsisRqckYtYv1Zxt4ZM",
  "key24": "3iRAcrMN4G4rFFFo2orEsmy4aPmfxaae9NxSAKbdSGXWmSbWM6C28a83Etkhi55hWwwtsZ8iQEW8kSoF6NGnXG6H",
  "key25": "2U4dgXqNN8dDyvEGTMeamaAGZn8hpGJEBhHf2H2ug5BsBPTBUB8F1bAAngqY52tGYxGaaZ22siT2q6WaB4iQ2N26",
  "key26": "5Ghts8sQCVXDaU4tBXHgZrd41CzAysWfY7zG5ChuXmjjk4BBR1ucamNwAyv2ZHnP47rYv8n4XKyea2m4KdSi8QTQ",
  "key27": "3Q5cQW33dzeCAPJpBren1RfBv75aXZWj5ikHzr4QdbFwNKGdHSMbwonBz39tUun2n2wy4cCZtEQe2ReaVvyQyHEh",
  "key28": "4jdRwRYiXYoK17Z6wHwv4i4R9UtnxGzhcTe15doEoLEyyY9N7K9xEAbV6d4QtcNMfdwmzr3rrK6ak1nQ6JPixuTQ",
  "key29": "5h4VU3zuVycMTvXREgQiCd1dAEkvpH1KhS7Rid6p1dCJbMW2vSkeWtPqTrg6GkPdCs5cbNY6FzFu98G3X1b8bxqg",
  "key30": "242tKgAF3JbBmWnfV3nmgTnV4QwKZztE1eYnq7VZdJdtwzCBbnYAGtZzSW5rmffMXYaBV35hBZKTnsg5Jh1n81di",
  "key31": "5o8gancVUyjGith3E3JNBtJrxBwU6TPEgba8xxtwdjHfFCFMaR7cfXd52uuuPY9Y3dJstwLMZQGi5doiM82W7bMo",
  "key32": "41R5zWLzjYAMC4uxskKb5Sb9NyBX26Uer6rU2RdFtFbpp73mtyczuFkMWmTzwMhZdrKynk6VpjpTkVZjhrEACVVX",
  "key33": "3yyPLoQMSVKyQfnppzvmGstWkG7SK11YSATPahpK6b47kYRVGpZbVrZ6jBuTzPPajvjccB4x6qCD95b1D8LNPe3t",
  "key34": "4DztewTnB9JkWjEsYTdVmreaZ4STdpn7JwLq8CR3YQnpTCxrFqBkx9brm5pxMaT1kNL9KyA3wrTahm6kx4RQccTK",
  "key35": "2TXuezP6m65XXNVH4rJKuxFmWp8jTw5EfCchP9fSyWCtD7BAESw2nApx9B3ozruSfZTGpzqoqTJZtbkQ1rDzMxn2"
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
