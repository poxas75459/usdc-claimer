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
    "FzfoAurgs4dN5rfhcaaSydQ3iqbCSyap3uSWnqogVvZEj2rJZdQUby25qWY3YTvDNERrgmPqFPDLsqJDA2DyVQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTWa5wWxd5MhWkw7hBFZWdMtgzHBbYGnJLfyipZzUMKQtYBzXKzzapZxggo7BsDdEYVoMKf4pUTM7eWMn9xQ8rH",
  "key1": "5PmT3gcaPtegJPim6wHL1h3ua7vD92xmQTsfmHQEJbNxmd4N5w2vzDbqRj9JsvWBewHpNwYByYmX8zF1moB3yhx1",
  "key2": "3bLN3wE7XBpLWhmsFQESq9Eh9Kc6x4NKEZrxRSFmxZwX8w3ZiSBFcUZybRt6SXH9BskEauLpJP23kSrAfrxuDfaz",
  "key3": "3SMyxby2mNjTX6U1eEBaBxtzxLU9QCgwyYnhd2MtjBKMxGkrp4nzq9rjuRt1sPTrELThemGVpm6VoWEC5pnJcsSM",
  "key4": "5Wb6CGYi59C9pnYC75PTsEzz43MUucQ1GZHUD9azHPpeagJWYwUvwk6hCt6aMSqJD7koDJd2DHwTj355vEQiBpmY",
  "key5": "4NAvvuXNCCQ7az7eYzUKja2ECDgKZvc6gnjqQ8GF7Vssr4YDZPNGELrbNC4WPGygb3FksF6HgoU83ywujiuAWhgZ",
  "key6": "2Jzsoe4691JC2uN1Q9EF1BrsgFeYy4mmvZDcNLews5uQzuZVF4aTReD9jwGy6NFb4LM6ik6KM1BFkprUukDvuxCP",
  "key7": "NcRTM6DxV9gTZ7PLiHut59VGes6todCs9aExBje1wD84BKB225uHybF4qsKTjcXfzfAWMR9eaKKXofWJ1DXvU6C",
  "key8": "2ALPwQ9Bcvwd1Jr8R31AUHPdCxNEbJfMGvor9k5aWcnvYF9nbsuDTAEspajPCoAt3g3WFt1R1Y2nBDNYKqyHMGiV",
  "key9": "3i7kVUf3Q5EH5WTDJem8WWytRCfaq9QfA8YqN8CNg8SxQozEjs4gWUWYR3DmHmpULvpndKQ22LqEMVb8Ly6n96S2",
  "key10": "5B7bvTkQcEAndnTNsqFE4pnE1Ng8WFWH8apQpnVhhGnVbZPYEdyp96o3Xs5dQoBZEpFsANSqNVgX79nMkT597WLH",
  "key11": "497YLXCuvJ5juCiUY7jwaRyZdt7uioZkj76cZjH4sRohy2RXdyF69rt5es4hEQCZkkKwjVvsVgPTQVAPkfrcGG5y",
  "key12": "4o6EiXmRjnTRz8uNUXuQmAyFvC6yJmNkN4van1tp2wWEmEPkygVQ8kWa2nhAtBmAm8vqJowsEZQqGudMwpihnvYJ",
  "key13": "5z1Dzyqd6FjvLFXFhx9E4hfJ7GEEEG26egqdaxnxzoj1zvDV7zq7pYiHzDLzWd6xd6rid9N6Ec58fpjRNPsSqwS7",
  "key14": "3zChJBdNXdjCydoBNzC5ZQ43nr8jdwQiY3vb7rEgoLbnamiDSk7utsE2uEPjQmTYTEbD1XnbAWTzHTSScf7FfrXe",
  "key15": "78AsDEfSAQZqr3UiFHLmWukH8z5FEM3HKpuFPzBenL5UjzCro3A7vV4k6MLWv1vNvcB1g4MxoeWcTtq1sEiAoor",
  "key16": "5wRQHYJsjrZsqXrpFyKpGX9vCf8kH3TSn7z2ZHTHqK6tuKQ1HcaA8eMSPbDYiKHF6sKipXup2rndxU8ASsXKf55y",
  "key17": "23YXVvzobo5bXhyPdQJeetuuG87ExN47P5kEyTDT2W3k8oXdphYdfzgUz9qPZ2RLtV1QW7LXoFB57FUfQbYRRHEd",
  "key18": "AsqVh5KkmXkyGzywtyGtHhBFb2EQmvAphS56GDWiviQbi76bQMSPPRiDDKg6JxJbYk9Rd18kaS33bf3m42wmg3e",
  "key19": "3aEqPUVAvMLkR9DXh8xaRneKJk92wMebQVCYz6Jcb9FU2UAC1ns2cm9LJnU1SAU2DxzrTMAzbRVrKLH7BdyH3APw",
  "key20": "4t5Bz1XTY2ixNbhLRwpebDyoJNvDJNgtZ25bcNAhb4eyRoFtEdVWMnu91sXthjnc92ChRBJRwBqjcg61PDX4ovML",
  "key21": "h19eBhzDH5wPh53JS28AU36PxKiW6mLwdd1Mg2riEVbBsPb2u4gw3ysvsxQxmovHkDjh7rKKZmwLm2F9vYuvrYA",
  "key22": "4gGmazC6nHJHr5uAbwETWdYEaxkouba3cfWV74dLursB6VerFtxX4BFm1svaJWpPGUoczkqHa2ZdcDLGxvHuotjP",
  "key23": "4TL6SoUeX6GiemxwEJhuFUYXhzoy2YdiW51twziVdF1Ti2iQt6cioEbeBEJpRzLYhcBFYCR2Dx2kpf6VJr1dTJtT",
  "key24": "411rXnnrtqMH5yymk3iMmbkCAkWHVXGdjXZZkUvzoZt7WDiu69TzdHAtVtFmAG1xAjgB5hv8BE16HiERXp2crTnH",
  "key25": "PgtJB1MgW3DjkJjZMrXQ3U4AFJDKr6E3fruqGmJwqB4qXboqL7x2fMp7U6sUrAvK66E1gtj86gUDhnJMULSgUzZ",
  "key26": "5Q1JiSo2uqGzmMwjhMBZPLkEWY41zNFwoN8iig8WUB4tG2kmUQKu1BeZQAU7v7DRGvZEPL2rhvpx7TyitTyB35fT",
  "key27": "4kMM9mYvMS9CFzQpswvQnSACMFtKaFKzubmXEuULGMr113UAPTyfGeEDjyRMEu7SNtJ4vTwG13L1mZTLbN6p8s2a",
  "key28": "r8fPS44VR6yHQjbsa4mZSwwRcWXfWq7nhLLgjxXHW3SQL21Mf5ikzCK8ZjpEUAQUTwsDxcA5ky9rz29AnxbLKWn",
  "key29": "5f5VSQCtHv98D2XpMrMgeyNVzvjrmtYZeQwGg9Eq8mNoa3hSrx1m3sZ9WucSYGf4eZDbtnwwZmADpbqcEtd8xAFu",
  "key30": "4oiHyeUVEMxiHTmvp7dxhEUrGFccjqADs4adkNAEfs9ggAAcoT7Mh7Tu68nysoVaBSUgbsXkbuCrZYA9RPMKq5Rk",
  "key31": "52uATctig9g3GoqaPM6im7VrSss2R2sNnGoZ6iYnBn9gB4snDFHUVxf5ECg7H2nLpBMv7H68PXxxQkNy3oBPgv4N",
  "key32": "QMB2Qj5ycEadApNSReMFpD2LRP2iX5jxhZW5BhHJcCqatGULZZAbdNY9WAm3ic2K7FkgQvuFVDG1ZWLKKQno3sN",
  "key33": "2M7H68y7WUNwKQYboVoJxfpWdgCuauqiyJJrL8GghQSt7wQ1rLSKGXUmGzy46Q2UMUZBxCixWn3mNAwEjN7Vdc4b",
  "key34": "3PeEt8p2QwCEhsg1Z1bZxUUewmvVwbXXm5juQVCynYLzxsANYS66AWkC36HWpuzoVpbxuRYovfCncJhuqXytEMfX",
  "key35": "5FS2zWcjnEiyd7uLJK8Hj5v7q5QQBJm6o2WA8EhgBiSr1zJjaaAQPSfmiF9nJgqvMt3SQzKVcC57g1RqWRdT3kNL",
  "key36": "4jrJLjqkgkFVRyPCReu31YGzs5Npe5PkWC5ZA88P1GGojUkCPEeshpqtSF5uBiDgh6UdhQBo8AMteRpcKD75j3A7",
  "key37": "5zFWS1M6agNPpWfTkeyVWB65vNRgw3LJTpoLG92uwzvo53TuHRUspzoC9nZdXyCMmdfkXF9oDFMadfDLaBTxjGdt",
  "key38": "2m2XVd1z2gcwJ8Z6vpeamzvix9b26gVRe6xoZ81KM1JHH8UhUsCB74ZNFgu1vkP1xXQnHtZVxZVPDDGnUQYfFkpg",
  "key39": "dNf2iQTZowgXdUSFqScpPV2osUyurLNP4ZeY6ZMnxMfeXDzxkHdVwi7BzvCnY8ogc5b55gWkHyPkkrvMvrgHatY",
  "key40": "4DPbhatgEucSeHojvnhuAM3wGgea57VjPaCSmiGqs1ZhQBP7QeZ99WJ83BhbU9ZpVYK3ZZS5v21oBxLYnjtiyBri",
  "key41": "416ubWyb3bHTYbqRraN3eMsyn8n4nwre2A4wPpUDXwE1tenwKzqYVAjHotvfUkLa2UipRjzXcjBn6jeXABzt9LoW"
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
