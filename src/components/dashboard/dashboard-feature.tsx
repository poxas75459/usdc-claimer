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
    "4aUSDZ2hrvpNNpdqBHm4TxeJrYcvsaV7pBcuGmdE2SFCNx631ronEbK96i3hjfBXLQpBK97S7jzP9UGn86EDtAwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38wNY9t9xfmkhPCwrLcxgLg7LbEpGfxz7Xw5WEJ2sgZLoFfQKTAJbVnbmKpiQhnKLWrTbrZcaMibGaXeS11qcDbD",
  "key1": "4sfphdkiT56viUVfo7rJkKmFa5wtmj3rQ7cks35PAWyhNpid2fREfNP5ghokbCTrGTcDbCpVg47aMVrZmVPT4hiD",
  "key2": "3tXh8FUcJ8cGJKzCd25SRyZ7g6oXYtp8HNkvpTPMQiaVeiQ7uy7QbpdY6iSwGLe6CvLLJk6113QCJZQD1yKn2zT3",
  "key3": "3PCPRFDbuUJfScf9YUeEJfHUZVKXuX5HtSLJNosAi85v5Te8VhkXtJuNA8FPNDbKjZBhCYdPHBaic5SqVUppZ9rw",
  "key4": "3jGUQHF1FEsi8UZWhornUYwD6pWEabkMeqGq8rVCp5rEerFeva56BvZxG1pnuzASRkfeZ3gkFkesFNKLHbksudnM",
  "key5": "5PmQvAgAu6u8uycLVwV8rB22W3kzbT2X9bT1mcawVm5twvQUBGecQNtFwQizsgHrFkCupCuQGF7JYaLgf82v8Sce",
  "key6": "uLSprbcg1W4JyqdvSL9md3WGi2YbPaWCDqrN25qrMkJRFZUWcWauYEPU2bdbN9yK2RjM9ML1i7BMmVJABxWwT6C",
  "key7": "36ecc27i6PMoyZK7R1wbgBtBHqgoYg1zSCB9i8FDGjm6mGUH9G3zuHbaNh8P4E9b6RWCfcbsT72FGPNnxSbdhzMv",
  "key8": "5zLH5XfYFLo4q9rSXHP8Dgxv5gk9eDz4EgMNCfzZPnEcVzycGDVszbKKTSTuCUz2WLHUdpvkQRTDPqKTNaiDZMmB",
  "key9": "PVtAQXs9CbyQe1rhNnMdiTY1yDbb5BVFe5QLEzFxBzbLC3xehbSMBkW2AGPwLEmdai6P281JxvH4gJoENKrKHrS",
  "key10": "54iuRXEcz8xH9FcPaq5sdvBDCXr3HR2ynQnZGcbUne2WzK9K2zR23xoor8V1XaVcKiBmQnkUhK3WedHPuemXXLZ",
  "key11": "2jk7t7KusGd3Nb77Rvi47ncf3ZQgQ4UHVSdSBuhjwq6vPjtcCmiiarH4mSmREA8MHDEuun6iRU9144dJ8sziPGAj",
  "key12": "sF2TpxUmq4e43VDL6Rj6jXQiujBPiFjDA3CLca8BBLByMmZeLVWu8WCaicFBVbZWmjj34i9hoaD93DXPmNDoR7W",
  "key13": "SVKtBQvTA4NmgvYZzDcsQP2tFJLkBdoeRSZnEgF9ufKeTRVYdQk2dhG3VARQWRNGLUWQ1wVtpwdc6CdAFTpeVm2",
  "key14": "3urtkpy1CLHXqaB1b2GUYxRpG5uF1XWAEq2ihtoptbaewZPJGUJB4C8Hy1WATNf5j2GpkSxeMAyuJxET1WHrE4ta",
  "key15": "5mCQ2Y4NpG99XhhyFN5uThAN1uM1VMtQP4pRXNfKRrz6pRsU3NoQNwQdVz4Tb5Z2HkFuqPnMSGtWi3tU3K2aRrCS",
  "key16": "4ns5fDhiqR31QvgXKHALJUNQeDdv7FygcWNKoknUSTs8hko3hnzo32Jz28116acaqYoZJtKTbfDrWtw6b8DyLTN3",
  "key17": "4iWBjY4bxNrbLLp5kGQ7wyCraoFHWn6UwwPi9bnq68wW4AMwcha7SrTq2xPiH5QNGsfRj2iBFNEPevSYkjMcxuJm",
  "key18": "4DmoH7yBQKKzoUfeGdVf6G2GKo4d8DGiZGLFsHLL4Uf4zsSwLxQh4E1PkVPRHYHiKEPq1FF2TraX9FxaGMiVmfSg",
  "key19": "3zJRh1eq4d7P4eDgKBERrofsBV8PirYPKAGwkpPNQr38ZNvZuZp1w6GgrLfQ95DfLUpx8C5SLzLMNu1mBZjtfwiu",
  "key20": "3aaYinQRPQ1Z5cWDv9K8YUtfmvTLZda9UKsBa1cbFCzuEBSv9g4Zam2LMeT7mWMRiozULKguxwu8v4FPfdckMinC",
  "key21": "4MNgFawXjkBiNGbXTTj8BxXz8jZAGMddXdjtaAxNSDc6rUTo7vGHhysJ2p7UmdYsymo6qkop1kAKNQpZebnC2tyc",
  "key22": "U6oYdGMgoKHryEXaHJ84suzjuxHKefkPNazWEj4KxfTLy6VSSvYcSFYbQESvaygtpBCkn9qbvJNtK7qgzqcdnuY",
  "key23": "4KJjgj7NBV9Y8Pu4kqs9ny9cV12FG61Y137xkpgXLYX42pPvM6o2UkHRLEygmcL5KJyJ44YVyf3QJz4T37APhhdF",
  "key24": "3A8m42muahkmjmjnrnJ5atpHViYVSuRbvpZ7J46h8M6ffTPhEKkLrRomY9R8UD2YaQZX2P226rbVpoPzvUvFN5BG",
  "key25": "5qauFyEiSDEd4vkXgZvWKEDGy1ga1CzKBniUy9tAeT2B9UzeHwwXfMt2crvHNfQNZC6F6erjkwrX3QjF1BG17gAW",
  "key26": "5rR7o6JRhAqHofTF4RbnMwUgCsaDNBN1etTWPrKNBkusVTVy271whzy4UkvDVSEtZ9AtRFhWKxGp9QVCWnzh2zQq",
  "key27": "5cmfPvAhhGnYgrmXxSaxSGnJRthLtwmrprYsb7cRuWR27bjZ9fzG1PrsCA3wkUBe7aRa5RpE9L41ERBYtPKtpTTw",
  "key28": "362YoYqoGjKNP44G3HGZ13JtkeYqHbSKXFXhrM3LZPZdjxcD8eTUhbb846AoouVKUFfwDvsqh5coSYAggqCCYKeF",
  "key29": "3kuXwiTSyXaVXSZMJaggHQwySmwMjR1FEqNJz5dWzcaP3kevCmU8oFmoK3A6e5LLZWQrTrW1vLBfhU7M3RLKpWsV",
  "key30": "3Bs6uNUMNBbhnFxcC18SbWyxzGdMP1KRzU4L58YxLLd9LGvjd4B9LpQ7A6w84VRFP6cusz3sKWBgfn4xZFRDmEas",
  "key31": "615BazRA54M5CWjEF27FypXadJsnVpjPzYVp3tPb3NmeN7EJASHYSngwZ5uM1HSArZddLZ6sQ9byPszvboGbRgd"
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
