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
    "3ZxLo5k8rGWeGhCtFHj7diwSUsmBEL2NSTQvFtvhac2JMyHR7sDmktBqPE5UJ2gy3GGKfE3c8EKyMfMRJAmCRP5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmAjZxmdJNGTb8m5vfmZfMJzsBKjgCLFWcuNXhho1eKju6989Qd71Mhd2mjNVbBKtYEnZ7Xdh1kpPnhLCUagjWq",
  "key1": "5i7EYghqBNpW5vB6rqLEPfycEw1vqqYisu95xDTWbZU65gNGgQmRyvuVdRFnzYVAMpR41N5KEhZnYVrT69ByVg6r",
  "key2": "9brtNL9NNU9wD9RGuqHH1BQia337r16q23iDDbSTDjdbVYXeeDSaG6YbaHZ9vGNNqNwTdT9xkUDZMn5BouZ9MGM",
  "key3": "3JimowKp3rKqWBGTzrHCt9ffJttvqRT7ypExg4BWyLNVA7CLKMU4UidBiP74EDAUdrMgEdb7PZ1oEcjw3F2pETmK",
  "key4": "1R9KbueaAbnvV9CV7jJwExH6JKpcCENQ3UUURn2xnzMkd2BYtiiHs6U5GUnBNeWYy5rCjUuz2bBLUT1KFkMBEDH",
  "key5": "4478hBNV5JALiGKgianWoxKxdLJii4rq7BnKCTJfV4eWApMW49wmPtpkmNH1J5KukQFJemJfKbf982mn6rdd2SpF",
  "key6": "5GLf8cvjxxJoCDch8Fi5kkbRgT7JZeV31VwBvZsMFrULtnNwLiK6maVSBie9UB93i1zP8qP7CQcEXaWpU8f7bK7Z",
  "key7": "63MNCDmnPDkbm6AA9c3ur5YfqvZ3dbesPBRpvWP9f3jJaDj1ueW9qDrN73DPTnGFrQdsFqnd8W3FKvjj1PZJboxj",
  "key8": "24M5TKjZDPnyASsA4cqEymhAvLn1fUj3QxAQXMkEvv5gyAsF4mtQDLsYEN8Ycytv3zP6JWyf19BauBReWdagVVhE",
  "key9": "EXfLrkgxD6QK8m5ecdLy6uieEEtNKkoxF9AjWeH73hp6FF7M2uNDcRbJ9BQoub5f3kZGS268E4e9khhGMsDn4s5",
  "key10": "UsudUU8Es29vVt7bHoZCq6bdup7iBsnpDHWfmMXzCNqbYsPu6EWYKUH2TZQ17QGLw47yfjKMGsDvhAZa14HtAu4",
  "key11": "5ZAEpKxxj279C6dvsRQcBpV6o3Zavj8o1GB7LQngJ5mc2RsaDQrCUVD7wJ3rGzvZjSfzfyrrjTBnyJWfzULiWRtT",
  "key12": "6GbS7Z3oyGTYBrBFdvgvKFfKCB6262UMhG7qLrRQR7v5RVunAZdwJg8HqQH4TTEYvoKb7Qi9V1W4a7XboaW8JB2",
  "key13": "3EAUbaMatV4QbBGrqeH2hUEYw64P9nVM3SiHT23F56FQiVjmAQresdbAbDXNGrCkuTL2TChHShj8Qsn6aJGkGrFp",
  "key14": "4trZNt2ycDXh9SqsVQBkzwDjSQj7vkbHtmdyVxbzby6mtX35qJBNbW2VrVZNzzHx1E3QPGs1tTUYumdPXod3JhTL",
  "key15": "r3efoHxUXefz9Wp5nStgsgYHn2TRaQeJBPfHLmnz4HVTDj9687r2epkrNQ96fc8yEnbz4rP4ZkYjASephJsThb4",
  "key16": "4Ln9ALx6aLFsRYJ3w32PV8C98DAPVp5XMzcKWBsmbQdMWDLBU1V67V1BhgkYoFwFtY3hwDMr12ocjqZ3JBdm3urT",
  "key17": "4fKNg7wpdMckvbFA3Gtp6J2CzT3Wnj6ntXf87bgZuTB3UmX5T3B95ALEXggCgtFsNtomPxNMo6XAEbT7sM85gkgB",
  "key18": "nY77wJfacVo5htB1fgcYuDRuW83eMKELx9ZgyKFkpYcqs6wL96uLfKPpQmJxSfAQv4K2zc5EWKT4t1Ae2LTiSEp",
  "key19": "vUiViLFB7D274m1xRpKtPdn1nzfc9PZrCuSYHrjNk1X5Pn61ALBTkdhv9uANmd5LmZ4Qsnk56tfRPnzKiQuEuxd",
  "key20": "3VmzT45nzx9jd5PbAxd8U96dZhqDTuP9Zn92ppip8he5XGQc7VP5ocVfkbTQ8Yen4E9soqyscS3HVPW8ErUiRZNM",
  "key21": "FVUnMyWABzzkmgkGDqRAZZCQWK577EzdJf4GPdx4Q4sWihzo44bxhMfeZbNqSdGy8BwtU4yebTAvccSoNW8DocR",
  "key22": "2vWERSQfqL6Fmvkn3kf48QpyB4F7MpcC3QXdghNZ8R2YjSbXw4mid5QkkvjvnX5nupom8kr7sgnczGyUjwy1BS8q",
  "key23": "j9HixnSptQbxkBrothv7oURxifXLzP8HGZEQdtpRdmhZMfqshjHnpb38UXJqD9F4qi5EyQULFRZhoJJBsuywuWd",
  "key24": "2DaNqYJDcx12GmM3fSNCut9JmbYMG5hE5FHkXR95t8sDDPUM5H2Qa7xA4m7eK8J1MdFozsaxBnvwQekfdNjM3rGK",
  "key25": "2iNR77Fyx8SXB3EbuG91uRQekVcMgv1h2yd9ohpLAMp9B3R6wVG4PGezTpSe4w1Xc723Jv9KLtLxLNV8ucbuBDfP",
  "key26": "67bigzx7h8qDZjL7zsCHnCaLyGeTAuDzCqMUhVUpsGe8jbWKXD1KfnfiKJNtNBeDnv5TxqYmANC5BDTE1AHP1au",
  "key27": "xGdaQHBM7hGvvkx1SBQN9EkJyM9j9yjga23Nx2954dJ7CRdi7RR4rFyXqUkLc6B4fr9tziEerAYaFd8mcTfVqtf",
  "key28": "3W51rU76n54vErs1tTkVj76ofV6pru4YV7vfiiobDPPUBNxMpHYxvhzMYXSCGgs2RH5baxKjdD87kkexmaSHaAyu",
  "key29": "WkBJm4sFmPennVXXCHbFSREBnkZeQkEmjNVhV12f9vFfiD2pgsNcYLUUc3nn1s2aeYRkeWasVjjjUdfzm2DQavT",
  "key30": "XfETknNeiMUZBuKaaXmicdtLEr6LXvWy5LbZtETYooF9HxQmi1jEbmMVhYzjPebXkQcxjdU7SgjDmQEswcnGFXM",
  "key31": "5E1QqhX4ao9mrF4oRMLCd8d1A76ijP61wNP7Mi1yqxWdVKhR7oKFrvE3xySJ7kpkQoaTdRDmdzSK4PEoFMyMuFy8",
  "key32": "5Xb5s257MWCfrdedUgdSm9a9jKRW7tEyhD1VRhD1HUEfkw9bkehYzPnCUU8b79xS1Pcb7D8P46rY8qbp1C2C7M96",
  "key33": "2a1dzmCJXUXxiVBuq5xEK9dzW2874M8eLmXS148vX2ksVocm3ACBc3rLycBoSTywek5Pk64Uix2wZeTJiMrivbBy",
  "key34": "2X5bYBARjyCykHTNZTwT9XgLqn84sfh2LMU98ZoGAfwHri68ymWp5kwj1p9WYvpnCE8p346dzhGQ6oNZRKS6PkeZ",
  "key35": "5TSaaaH8nkvva917tVv1buPfboH1rhhNkirFicBjUrBURVnnXZRjCcejnXWx1KoNJcGvDF31KMH6c9A3fPqjjkGu",
  "key36": "2i7XPPxCB3mZGP3RpWC6sbPcFTC8J7YRFvVY44dTQ6xVT2EjRedM1EJHhQmEHM36FMduAY6UADAbvUPWoZKAxAVG",
  "key37": "i5yrRgTvP5PZhV5zBDy9pxfZpXRkBmW9fZ6zfMe4nnp1g45CXxhwMvXfs3CMGJRUy1BJ81jiY9BGSL7ACeU1DhR"
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
