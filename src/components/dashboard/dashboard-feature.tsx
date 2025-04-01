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
    "2xMbDeLu1ZE35J2FgQRveCEfowgA1rJSaTEUN1MiA4cDsXswtRmjF47QMzoWDstStW62nXFhic5Zp5sXFx45ysXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27zNCRY9UGXciYryaMv7WYpkZ8bRHQRA5bx7hPPGz4CTp2c3wBKJGLfknDkYxRnXvRW8in1Mp45NuYKAsHDJ8ZGa",
  "key1": "4Y8KaZZ4fN2BrQknDhn3DQ7zrvXi1kvvfmb9Dtm3xDCJFArHi76BGKm3pqFSEpdfo1roDWW9DE6hFjnxGGNBxHTB",
  "key2": "5BBtu5xKnL5jsWs3devFdKT38QSKy7uSgBHCStBbExJybFsAcWjJVLzuU7szjhsYZjUX2UNDHbs9RVTUgptGJsoN",
  "key3": "3VB71bUoJX8Dmisi3SxcRZ6o7aMEZ66bB8KPBFsfoQ44QV4GBXe1imiKgunUvVdoUu8ZsuftAKPmToFvQJKaefpE",
  "key4": "2cr3aQUgbAr8LtmGBMvnFGifqfag2ecQ582TWGoiQ5fj1nphBeSkZ3SyMqrRJDpbtW8Gz2q1BQyofLtb7RJ3Ebsv",
  "key5": "4XtiXFsBnomLi5VRxVUeAYeaxeS2o7beQ2YQRhrmDkUCBZW56kQP5rrV5cWP8noqt6GNVZGyU4sCTWFj3BfLVNzv",
  "key6": "KxSijBXiNbTE6wApEhitQDG7LTWDYWiayobzqwo2GKY1Eb3hcyxE952MRHr22JgCJYPPTJJj1eNiv2wtQ6tHoJY",
  "key7": "5Z8SBZxAuJaWV3Neu9L8rQTs5W88Lduv4SyfqwXhaoS9W7NgTuCvMFuFXHwFhhSSPnMsnfknPmzdewtKuk9suC1c",
  "key8": "aZUytVLJgA4BxHUM6qb5MN6YSCQmhx46NFSaPp5poHk7ti3FBDLxZTbXoBs5yMePkqGJyREb8gcEQcq6Kg3WtSG",
  "key9": "2AnBuAd2YB1Aiu2Q19MoFJYs4Zysy4wYyBnyvQ4n12F7CxSttVxueajkDs22TP8DTxd7oGNKuQg5o3tubamxvZ1C",
  "key10": "4WKK2CmkbXLWtX9fAjaGwyTn44hZyXdAfpov3NoUxrgsjaP5h4FA1haaLhuWkz7NSypqsGVY74jMyo1KodbkaCTF",
  "key11": "25tpb55FAiBoeZnJUFsd8GixR7MwnhuNo8cckVXzZnxDdCHkPd1RQKJSe3GfkkPmdnJMVkJCusKwabTJX3c8ovJR",
  "key12": "3qTDjCLj5R86vGcUfUmVWmbpbwXWhowTFKzueLCSr9wDwanvTueDjK8jnjnQk7rHyUQVQugEacFS8FfZLU2iCAEH",
  "key13": "3mBHWamjGqrRSmHLL7XshAzVkDcrYa7kJEPgF9dXR9a1vfAywpdnd89HJCvDwSVL5YANvqWdDzu1YsXMkXDGjF2K",
  "key14": "ujrHkuiaLz9oj4BuCRGHTrmsoPRcgEm56wBmU7VYEhcdLuGHSKQWKTDLfufmcamKtWBjkxChfFZfWD4dMvWwBUo",
  "key15": "Sku4W1PGBLXupUzPz18TgWxXqMwUiKh1wZ7mHdbdNMujHoU6zJPDvVYWgs1wbztc5At6ApHRv4gfo3JSgf19owL",
  "key16": "3if5DomJX5RAMeRsNKMgdZk8rbbGQSeEp8MTzkazNweGdfWoFSBB4k1oUUDfhEEmWju8YkTiC67MnsMRCciF7Mwr",
  "key17": "UCy1FMDxPHxjYqJxtjbKqxcqL62PADdyyhRHzkwAnoueF3YasWU9V2F2AhoCnt1Cfg7HxXsdNdeKBwmdkfzsQb5",
  "key18": "2BpEuoEps4NUj9xQiUAt2qFQ5MZTrziGTPBakEHiiqah2SJgMxNeNUKzKAHk1SARvQWmLVWqH1yaA1Xyj5mgt9B8",
  "key19": "461zdb6Mpuk63PPCj9ETkL821bgzjoGJV8P4uNRQox1sa2knvbuCErDDAEY3Siv6xCVf6TnEZwk2Er2mNtQrToiE",
  "key20": "277dB8zViSUygXcAASH8A5ot9DjFAyMwErX1QWtvsWHugtfHAkGEovQtRLy7JCB4Who3GMYz3SKCjxyo2fwKZASy",
  "key21": "9sUaVfBSr2BMSwvyMVHKDrnzyicyp2SmgaPkwr6oyF2nDJ3bwZ4phMdW7dNEoFkfucMFbqzWJ7YZqa1BeybPpUd",
  "key22": "soDcCP7GQ6nvPcsAEqJHBm3D5Q5U37Wdr9CaEGhxSCRYckPTPxyXB7sG1dPqTaTmcT9gwa9d1SMPaeapYyPHw6a",
  "key23": "4o1Jo5TtTbP6baGmVQt1Sfs3Z8kUdAg2JfJXbnnvzXobfP4jX4Nnt4ZzSBLYcrUmduzC6AUucd29MLAin8ic28EB",
  "key24": "2sRbRemzPtJ7eQT61ieLjJU2QJCu6wSjKGqBNCMHsdtuzX5RQyv8Q2MdMW66WRn5g9BFidtxbbESoC1MerSUScTT",
  "key25": "5zSCt4e1B4yR3kMoBnEdB8dpiPJvffQ4SdFAYCAKrjhtxxBippuTEDZUWxEBoipag3dVsR42NrbeyDJatGSEKTn6",
  "key26": "5SXcmqm7Tbgqmxgi6Kwd4jc7d93HdbNkyEGwa349xQa3EAnhMDRShc4hHRvxaxHmENZVQkE1noVYYfC9x9iBbJyG",
  "key27": "2mRBJrQwZrMSkp2SMyH1T2obDxoKiWwkuZmUt93B4qRUTToMGMDyn19wKQQdBUXqdUrD3To3dhb5r3i4QcemS5Cn",
  "key28": "uX1x6TQ9aNPxWRhNfxm6mTV8Yi5tEi9rWt7z3Rsqo1jdB7ARkMDgNiJo8WzCBmo5nZJ4CZT4bPSxEZ1vo7Bk83J",
  "key29": "4qmaNYQzPnJAsSWDDbeATbBV9Hc6ncqa7eEc6ZW3X2r6e5mV1iKcsDFNhjn8RipwtTnEZzGKYFVAhLtybvjGFYRF",
  "key30": "55b2LyLYapQa6k2KVirRpVQQ1idacTTYUeBakN3Fvz4TuLNs7STLsgBCtAVuq7cQMh4Am9WQPKDbTf5MTK2jXAv",
  "key31": "2v8CADtPhzCUhTMja3jpit2M6BhkejgNKNPftUftcVPHB39pWuETYfN3TBcCkNa6zpnfCXksCfNJkbvQgwtxg8K7",
  "key32": "atuWjEQumnAK3GSYWaMtit5o7S6RuPnpkzEG4QfeQYbuFwRc1fQWjgviFJbQiRrXBg2NpfRQvi1QMabiThhMRWt",
  "key33": "PjwYLNSU9oEVvi9VBtMPz7rvvbiDme3xdyMMg7r5vQPqfWYXiMcT2ShPW9drWG3ceq713dadHgMaxpKGg3twpHY",
  "key34": "4fBCL268R8PpvXGmLHv3qbZpyeuj1ZxVqz7mtY4aBC5b8HeGeVB4fK8bDJPZqWhJVRZz4eUNTAgrwuQjb4AqwzLG",
  "key35": "3bANqUvKoq6dXn1YXE7xLr1DLfRBBkus8McHeHE5vMJ3QK2nTodfbjbpgXjrGHFDvpJXiW2ViwXN33p7DXFmpzfx",
  "key36": "66pBUequD6Nt5uVPB7kR7hyAARSmZkZTGrgiwHF6JZNw21zWujBhVoJeoxNRQYHCyY8UzSqvT5K77uEGoiEvRy9"
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
