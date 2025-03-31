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
    "33G1nAG3x2pjv542uspfkrqPjiVCruhJw6wwwvrVQLkqbmsRYdLnuSBJ4Ez3C6A6VHnFxVRq3Gt4XvGKHoxYnUvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ecst4p1DJ9c6GKVGfsor2wPad5fUrZTHSGe4nDriNQAsZjKGZL8aoXPEQ1SfCimeKLTMZhcLRixBs71fNCxRSt",
  "key1": "36yrxFqGkPPShTqFg7M4Zv7kwHt72YXptrEy7zSRKEKhZ5CxpVMnRpx992K5ooLYmaGw5uFJasy98JsKSu2FPegF",
  "key2": "5VAFbYnGR2SxQ1gYovbA7WXnm9VxZK16n6pdG6zBy1ovHnw8fcs9GXpzyVwTHMTtgjTdympj5P46VJEGkhtTgABE",
  "key3": "2wFc4RuBRpnT1pfE7HUgenSc2J5knuC3xnpeJ1bKy2WxftChX3tWaz6m3hhVxNiCPXtMaEgtm2GPNMfoUM4qiNR4",
  "key4": "3YWQopm3gAUYysf8fYa5XGPfhxbenXvnLvvQVaaCHTgNhwTeW1apXC3TpqDLge9SvAQuPPJRJ4Aq8pjHVyqyt1Kv",
  "key5": "3jNaLWAkhRHkPHfELgEUWuzVw6S3d1j1TXw9NLJRWmzTpHfGwBKT4ccGRhx7V4j9GLMCFut6zojeYSe5NKJ5n4Nu",
  "key6": "2gjKUg2Y2Z991RcHA5BiMW4xUpt8WQ4tLkf8tmyJQdMoxxQTsaRL4jiM32JXTy3yeu4EbyBtrksQUw45y4xN4yXv",
  "key7": "2Wnrg2GkLaWwyKfaxVsUrZ3tgAfdF9n7YDChQnnsB96ksZkP8yDTVHDofD62UKk2HLWicNeZ4Cg4zmXMESsUHrSd",
  "key8": "4wdgGvMfs97pgFNaBXUVP5dM3XGxQhGUgVEeSAjp4TqF5qmfrsyEj8wDsJkXvP3NK7jFbi7ju5B2kkv1DSm9ntwU",
  "key9": "EZ8fbesGGEGb1vixoixE19AznCjGcGzCHtBML9Lyn7uoBRA1MHCFrTk9uPPJQpKyFfj46ZJK1hpHFLbPxjSpdzY",
  "key10": "5PeU7NgYKChyDDzcFPh3vLPrZy1ynbN2M9D5YmuiQUUwQYLvmSngwhcRVeZGpZn99zkzjoWA2rGqPkQZ9s9QUqiV",
  "key11": "3xXbVmxBfauKywoAnaoepeDxMha8tfw7ViFjSfz4bUdfjKFiD1ihHmEQxmRkvveepyy3etABAPBhxVvH5ihxAotH",
  "key12": "35uQAk8e8gsFbkPhY1dr2Ao9KjSM89K7LkjdFde1VB3erWFwHMJZLNXeDB7Lxge1cCC3rBr7SSChNM56EjeCLtrX",
  "key13": "3w74dygKZjbC3CKtHNu3jQ983Q8w2ZfwJyLCa4eXis3JngBBaA8SQNgrPS7o3Cg13TuweGptivzi33L9a12uftZy",
  "key14": "5jRFw4eXb81FzBTjjsMbngq1gQY4ZyWXYiuUrzLibHiB9nertdUP5XHe6ufaiSWoNc5FejZJoo5VRRhbgEFSk8eY",
  "key15": "59DXRkQ9koiGp7bFwAsvGsTusid1usLCRKF5gjrHH5CupAE3e73PsYnTDiWqXqs5pJfR1sQZfZ8ZifwTnz9Ti2CZ",
  "key16": "5XCvrfGzwPQQ3m4UEWC7qQU1CXGjQY3X9N2pstcbHLEHWvYimsJbqGnTC1aP6k62r89fUAW4ZTFJP2j57NEy6c4W",
  "key17": "2H9V6BcrDN8r2Z5YUpKcLY4NPK5cGwkPCMo6fwaJSqVa2Mx1aRszs7o96Pp36ayiCdTB2FrK5XRqAHcTDsjk6q2G",
  "key18": "3gn2fYLehJkg9KpgBKfknkm2FUNMoCrVh7gxPpS2CbLfTwKio8utbDq5Qjzr7K4EE2S21yHZmQSLteWK3i6sGKea",
  "key19": "4uD6cTSWmYJEZQMgdr6yYbAvJgKWSXKT47xKu53nvNmvJsG6ELPNuv8dCNseYWcMCUZa3HFZvFndiYouYjZ9qrYk",
  "key20": "46WFqJseVizM5xQQrWP18ZaUwKJQFggC3P43pWWSgkPSFzpvxmfJTVpHsgYwirL8YLt1Gj5Z1pXGYmfJBbDzAdCB",
  "key21": "KXq6yUB2UdPJJPATitXg3sz4AXYHhkappqrJ2tFvhvg3SV5XJbHcmLBXQGPjoGwfhbhKhmenE8ufTckLBywFSUk",
  "key22": "34Cyrwgaaqk2vYA98xsVuqvs95wPmpc4DLkybbtCd9YVS7NutKR6X6gEWxxsEi4xCLmbfjQeAuynmxNAo8LvAX3C",
  "key23": "44z6hD8Dyd49Xk3359VcFbbDFKWKu25xxDN4qaiy1YYtpDjFghAWsqG4GeMDHo6ppgEtaMbYiL6VCM4EmPjoFQwS",
  "key24": "64XNcuE3vrymbGN7eWCYCcAED6PEGpdN5Uv1YXmUVC5iugdD2mgAvKqmqHSSUqrNhCnP5cPJdf7LVGS7BpYyWaRw",
  "key25": "4EMnwNLkAKgWqAo9YfuEfYu8bkfMChp4HAuck3yyrkNk1YEMVprj8xfmyjWbiYPdmctCkVEC4R5GV5z7kLSpRnjP",
  "key26": "552itpUry285Cti5Rb7AZQ8dej9vMsXwyjSF1T8d8L3iXGEQCKMBMxwQg2BFvAoEgeenhtFdGGq3D7AafaBuURG8",
  "key27": "vtePj5YA942VCByg9scr6DkKJHRa63FECfbf9qhtLPzmyd6dmWx92vzMph6AMo4cpfCMuvRHw9v7rvnchFxBKFy",
  "key28": "2BqqTArP1LAcn6NQtPhybMKuaXEGvFLU2ma4jdqvnHGq75nvgEP49JJFX5LxsRJ6cYnwXXZxezbQfp4WdqXpZUsY",
  "key29": "62sM6suNTJrXx2zRKkZNv9qo83yHjKmog2iFezBfReApjueRi4zjYS4S9DPj5UHA7qjabQuWJwtaapKUeSSbA45m",
  "key30": "2icigPwuT3RRzxturAThUPimGpBdGqsrggnWo2HTxFqQmCmf1RVx8Dd2REVxStfUFxqGfinzdi3XJmvuWYoTvnUM",
  "key31": "5TcqShcFXddCQWGFgFM8aR95rwr2xfQ7cBghcHyF5sN9ZqM8mb4efimsbMUvRsGCwmgZDeZMwRVxbvge24MswWJB",
  "key32": "7ScdA6DMG9agL69zkbLyZHRpKe7ghYB3aSpNKL4JVjBodU8QycX6sSMri4xeggqhpDtxphe9A88qYJRiMGmYsaK",
  "key33": "5Z6VCCxBqNdcajwynhbuBnEoZ9Gy2D1NqCParSH5GkUE2ykAquKzjKHXQ4w9DodPs4kKSBfE4JTBskKqGCScerUD",
  "key34": "2kD1B4tYYgTSheuD1qrAEnDxrDi7x7LTnsYX1ufAyS1DuR6z58cYw8m4RGT9gww83fZKmiHeXQUpckqhKY3Btadg",
  "key35": "34krnTH2Dj68PAnCJWaMU2Hk4gjo6sbGDoq9QNdpWw6MHAeQjbMYMkaa6GcRqeGLscaYmz5zCVjFe6xki2zRCDkD",
  "key36": "5eUrHDBoR6sEvEr71xpBNX8J37eTSaoUqxQGVP4EtkRj5ix7LDyfZzojjNJm5nSUQJkY9sPWWdgB8EavmeQE64CT",
  "key37": "5FRBZbmfVoJRY5rE3zPNRXyY9UhhKyV4K5VKZEmK8CxE8FXJfYUb6PCMiscUqfyhUibdtFFyVAMMqxTECa9zuoei",
  "key38": "3RSyEYYwa7A83tBAs613jDqq5jxEtzankwPa9zqtwLoRFhMGRhxduLaua2f5LDQ9DnanHsmxjf91tueyy8VxDnXZ",
  "key39": "3sCmWx8aYzFpJRt5cJCw5QzDihqzVPKKwP8o5De1PSTWXCkW6vbnqXY4PEtRYijj7wLVtAYyURqhUDZTbhu7SQ32",
  "key40": "41nQTkG1VsV8Vp28TdPyRPw41WCmEU4pJBCutziQzBwzHsb6ffpU4MJJn32QHa2kdLxnxzSNiZKH1WfEntwyyidc",
  "key41": "2s4xrP3UXzfNRwQXVexKnkDaMqeLb1SrGQKakCbZSdM6nduwek7r9k1K1YkxCfVtjLYSH6baVALo4mskGoC7TFn9",
  "key42": "52cUH3fV4ynpaWDz5aAHBDe3PuqCT91SsoSrPzuSBJNqUuxs2aUdsvSkjk3izzqme55Dkot6Qid1bmfh1ZENVraU",
  "key43": "3qnFFBL3ff18HdXAVweBa6e7DLqtgACBVFZ4GTaLS7tq51wW64xtXigAcdvseYtwJjFxLVi4Hr3K5ZuLLnYrXCbs",
  "key44": "i6KoJrUijnmq7PjdheDsyhv34YHHTgpCFzv7SNVRTLDAtCgHe42i41eCAbJYFgLs3H1NVAGeupoJawsTYA246NK",
  "key45": "3zZRUDCGnBJWEGvC7EwRarmkGmk45Qg9ZUemR7Pu5MyuiopTTbuY1hQg8Kqk7HPK67UpgZW3KhJ46Q4tt8FCiBZG",
  "key46": "2bUeQTiQfoQg7YqCkL7CeXKvAaVvhkWmzt9dUEHvaC6LBtqjKKwuzjoejSTCX23cvZ5t2cJMvLqaq9t1CNdRyAFZ",
  "key47": "2Fpgk6YihXx9tDv3N8Nx4QBmQE2xLF8qPnFn6Z2ABzHc8C5Tsve31ATXLGH1au5TQrGAYHtnLJRHGF8W6yHUjh17",
  "key48": "1URmkswcRGLJYpMoaYonCNPHYwmAv5tMFeCfgbrStcW4QBTr8AD3eP8vamSUvss1bAuVLSKK5Qu3XeJSHqSA7ia",
  "key49": "3pLD9vBym2hAhfoCw4tUyrsezQW4afXTB5jahH7a3QG14aHXGHM6zaX96aJaueXRiNEDji9jAFB6wrYx9NHqmbPF"
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
