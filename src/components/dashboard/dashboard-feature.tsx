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
    "2epssXsDLrDrVxT8NoUjoBGBRFb4V75kFXLVgj7qZDBuJ3xGTRB3kq2qoKBTcvqSzfqM4TQouytk74drTRWQJTiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDp9DRWAoyp6eNuXa2c3X1Y4r9xpgyZ8QuCG2r3hJnpKUk53wSMidp1BHteFHkV3KoQDfSB2uwiLeGCRKuurGMM",
  "key1": "59WTeLmmSBvDyjhHNNVqAzpkWVwbXgk5aZMQsgrhRK314hBdpm6EpeBz6WnssMezvny9141AtwsBPHyLzQnsJbnv",
  "key2": "4htuG9Tbk9ZzXCuhYqtqT2gV4BpMEZUoUNjUa5aUArnmzyJ2GovxWCPZ7CyRWJkXZGGLgdT2HSffdaZ8Agjv9v5E",
  "key3": "C7GXR3iFg3ikds2ndFF5js9hMX88xHYKCtF4BKZnTKCHiz8GNjj5eFaUph7m7N3AiDgfCUCs2LpVW23ugzfFQRA",
  "key4": "2U6VGE25ocWuJe2y5cZqQDgeFHwoXQ9X3GA47zjNqHFcYWZWTVGhP1ApdMB4LxBzdKMzWtEa3Uc9yLq6zGzzpqYW",
  "key5": "14jTwvtyVqSjxbASzTUktgE6u6iComka1azzxLAGgRUSjBx9PunymotsRhPduoaKwNhmmtbSQSTENiMCdP8am3Q",
  "key6": "TJUDw5hS8LD8sZpQekkwbPbEMrVyvanqfrduRLSpZaDFJaMo7YouVPpkwAPJycibUCJup9j4LZYq4ryUwaBkaSB",
  "key7": "3m526kooPRpFHeJCBSKFE67sXw9W7vLD2bLwmyCNVHe13sZzvgSKSqQwiJZ7jeaQa5vegMamZnnoGXYDBNMphSc6",
  "key8": "GEfcTkNBMMawUzFMAGWWxa4nxVGW5BwDUhEEaSjrJfWLGqrUBzRCFuLn27dDFCmWUHokE4A9P64bzjCssekYPoe",
  "key9": "36CBxpnx28xMsgtshNsHsDgwZkwSMqiVKcZgjjHACrPWHvAChoQQYCwEvULouv4gTWG4znpDtiQ5wer9wujGcyYi",
  "key10": "56ieQzRVi6j6w6dpWWMeqyE6vr5Ct2hyi6WN7iMwKd8dR8hmi49fGwQMm3z1DsWoYtcUZzAfd5EetAe2umoNpmHc",
  "key11": "62Hnt4VNep78jmjEnTHjxq8FXv27xwn1XZjhDKuS2jvSEesreWDupxB5WcwtUzYh8X7yJb7BVQTfScXvqHbfuhfE",
  "key12": "2uR9SeTxmSWXYeHhEuXvbqukUAKRomCCje8xKF4kcq7EFYEyG7gAzpKj7jPBXCivYjkpZAprJoj7HUkfi5iUMrBF",
  "key13": "2tmaqHuwApfTazFDJLVdoBnJyUk4mkHibpvXfDwmBVQUo9PsjE8XpaVHCN2QR1ak8UKJ7vXm6mSdkzi2sFyCrzxe",
  "key14": "3Bp3cz3kdHAMmA2zrvqwKLVCzaoeb7aUBkCJvxWFwrD9Vdd2R6sU1iPSz8Svu3YtXZJ3J9riaUWXN5TQwLDdpNYo",
  "key15": "5JZgx2e3AdokQmkAHiqNRciCpYrdK8rA99myms1HyXtrK8vN8o64cvVishJwjZxryqFiWWymKVxL9PbkiYNFkqPd",
  "key16": "4m8RKE1epRbmeHQjpid5WKnkSaiBSQtikYnjqXEpbP8b677Cm7YiybTZzWaFXXKrpSn2RvqVtjiXUUt1fFftAaq9",
  "key17": "gdipUYcsr6MHhRz631KBzghEYPVmUj8jm1tgHBympPxX3XNDpuS8SGxTP7r9N8CQffHU62PNhxFjSMxTbLLQ4Du",
  "key18": "2pov8PX8AU28ef9BYoZbueTJqxenpRHS6ac1zRMzKkiE1dUhNUwTXgY2GWxRk6MvwsxWPzPXypu6e1DDku8jfK67",
  "key19": "47y3admStA7AFtGTS7FsUiY5K6cwaw2ZgradcvwYVHHQfzbeZfpCXjhuAsoBMV6Tcipopg46FdARyxYyjxEQ8Ngh",
  "key20": "3QxJFwGjCLNeJEAPLYVzsmdLrQY2RWk5FW33MBdzYsiRSTwwV1byCXmgVkgxbbJatPUKYYrBuyjZsu7eapSSPY5x",
  "key21": "2vDvWbwQTL6tEYvqLQWSZX6Tb1CA8GytfrnxCXYRLZ3bXhiznfRmCFGQ4QceKLZWm27vBC2qxMaR7x1SmXztKt2h",
  "key22": "2JXiXUMYXcA1GwxVUZMmWSFzUjRqxWce7VuUL3K6raj5Qbunpgxw239wfzAaJB17pfyJLWdeT6bNYU4VVa2dYkUB",
  "key23": "4o4yWLKdyp32Z3h5xMuHXs7pH1MuFAUNPpAX7UQwexH3RXHHDaWWcVwJKMfxqApxEKvmJroNoev6opWToY4Kko8z",
  "key24": "611THVxYRudYKWNyZcTa6XTpH3nKD4vvf4yCgmcQd3EjWC7gayaf9CAqFXJhrex2SHoztueWTVBLVuMPbzZ2AdMY",
  "key25": "kj2e6C6tjpyPbViNvn6EnAk66k1Rg9N2Pf4xJJgQbR13fGV9AJM6s8j4o6dYWxPw6bpkGsAizU4dNCShfGhL4Nv",
  "key26": "3ekZjAWYxJ8Jf8na7JNyBDgQauTKf7PbUrVKiYFpSG1oiNUBJ4ZsTSSvk3n5zhFrfNper2M7jzjgeMNfMcFE3Cj9",
  "key27": "2YssHzA39AGsiY3USDBy5sFbqNCyZcvbvWW4XsQ35KzX45M4MwhzkU1ieJkQ7zKneWKtzC6LScWw8dBjZkXp9T5u",
  "key28": "4nmV4mmoZG4BJzAhMbcCk1CBDTh4syodUAaeRNN1LGBcDay7YTcVYtBNXNWNBAbgG3GgQ7bP4Lj11sQCrWrt1F4L",
  "key29": "2edzcmmcujmmdjgwUSvTaPYNE7aADPAvi9K3nokugMfXXdbHt4jBN4Vb6PoaFhPk8BiJ61t3tLFuEGia5q4Tf28p"
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
