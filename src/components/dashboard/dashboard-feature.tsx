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
    "55ecE3brTQvkk9KHn1kpCQJRMr46PhCZq2HHHzqwkYHtHhW2K8H99SDstJ3kvhwMxtNXcEZZTtDxLt9TGT6QPsR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQFmCw8WwtKR3PTw6ixuX1CRry2gT4kzsWSAJy9Q9UJSxrzYQy11DgCyxWAPjXF1LTbxp8D8H6NRnJR42XnBSvu",
  "key1": "5fq38EyxHJBpVfer8K4H2KeRV8csGiroaimbCpBTaDwHjpPLrwtHQfajMixaYBnceWhC8oJ6cwTCS734GTfyqCzs",
  "key2": "5RVozXtUyNyGkzRzLvtepNLUtsw9VSRoiWBNytrSKH3ycHwCE95ee4DanxgadfqteWpdhdTtaBuugtu2cVqu7G38",
  "key3": "3GxTcrVUwNDd2Kkt6Jnt72FeHQbWE8yyaSvwfnGHDUv5XqnvMNLugPRCbW6j6H2twrviZskHYbXRrSBRRJEx42Fc",
  "key4": "2ATx553LXv5KzMAPUtxkb9e5zDYFWMe1V5ow7tnPSUBbgQewUnLNEZqTB2ibF27RcQfSowKt4j6vTATcyHyoi7fT",
  "key5": "286GJ6rYwaeoZ86QVGJQ7k44jFW9YRkfMmTi2K2BQHDz3Cp6AztdEBynKadit2Ft1Y5S1jPhWWAHwGMBwwy3MEkC",
  "key6": "3Sqfck1ExDxYByYESFSRt6TVkpgcARcUUwkak9V6q5vTAcXF3t2qz4wa2pHi6dw47BZ8K5vAqv96EAwWk4tbCN6x",
  "key7": "4L45oUfPqs1TcUVKVuRnL6FAAZB9DG46EY5eT1VZeru6ctyXirjeqR43xpWyTJyoam3yAKKHEH1P9P1bUu25iPSG",
  "key8": "8cs8cyDJQB3RyU2XiR1ZoLGo1f66mTMWhZipS8SKmRxzeZSRbj1Mjqhm2zReZbumTVqVX7t6xxMV7cw4PwM3uQm",
  "key9": "5pfgskEdtauikNNigoZFrcjgGyzLrakvuLxDBYNMRTNKYdNVx2B4S4Z39Kaio8Y4zbwpgqViuri9FDQwN1dmCQQG",
  "key10": "5gkU2omfWP7FykxjR7EJBb9kFhZ3a8dNhRAHiGsTCY1BiZu45kw66CTqn4r49KHu8G4DRYztGMW5MPUY5gnn63jX",
  "key11": "665stwyR9rR2aVTxvyZhps9eTppngs2nAtEpQR8vqNrtYsSHmeySDtZ5byqXaKo7aHHzDS4a3L37oTwD4PA9ymMN",
  "key12": "iToe8NojeJpcrBRaPXEfXiib1ZW7spFVcPqCbqPURpQKQJzhbhXY8tDYkMXWod9HZR8e8DWmhS2cg9fCYMHZVgq",
  "key13": "5BaK6C6NJbh8dcm813m3HrtZbvHiEwnwSatbpPVRnM3cHSCUbHRJe73eZVS3AWxEJvghKr3Q4NkDwiEhNtVnTdtq",
  "key14": "2pYBYbHzt29zYtWAUGT3tGZdX5mL7ymmbsTmmxBundQmTWZeomoLLfZQ7iNzvEh9mivBAqPGKC52jkqV7oVQ1hfg",
  "key15": "4w6x4xbDCAWSan8dN2fWrhgGr66vhrLEdwM4V1fA8NUNc8kN99j7a4r5uLvWLmBMDhrD3ws2qm9P3TC9EofUqymA",
  "key16": "4t7h8y22fykH2HhgKfiDWvyvzv3Cb1U18SGGA3g1fJDqefkz9hUgPWTKMV4PCbmuAd1P7k85t31259YEDkfBy9XD",
  "key17": "4qwetekMDyhrEqnn6MDVfhqMsRJtPTjxoi6UQZUgbwowzLue8VMnbhruzLBvahncoQoVd2JAdKehJovK6f644AzN",
  "key18": "3pKEGXoCV2WVA8VtqFVtBtZbcVMt2swahsisfbdAc9rT8bLxq38fng9s3dWngNrVjuBBfuHzX8Bu77Q8nYqdb5Ju",
  "key19": "5yfQfbpFRuAouzJ6VaJeucmNXas2PgJ6uAnaTc4L2c6eRurZoHyDQcbgBeSp5TgMesKify8Ky1ULnjTBxmLT8Lzz",
  "key20": "5NpRRAickdJDKVTVgZck2qwy6Tj1KBNPFdb81p5KGgMhvQBhuAaaYtXs9Gdw1cVCE1Afwz8Z1DmH95v3f5pLeWwe",
  "key21": "23uvoTLZ9x9Fg6RmebvMACFXHNjz1apMwHHr5q3dQcwq59KKXUUDKLpzWutxSZHxUpA77NNfFYcTbZififyMUQQZ",
  "key22": "2tUdBBpMHK3k6QtdYfveaPhVc2cave9gNbq4ZRYM7dZPLU5gMyaDY9r2nJUXCTt14p9iRstxE1ApqtR1AE6qqD9T",
  "key23": "3SiS716fo6McLr9DwcckcqqWkDxAz2AMVWKMH1BkpZLE4LBMtWfPR5Mw7YXYfLgTfa9SwJgTfTpRC845oWVF5mBP",
  "key24": "2nGkDVtKG56sst8WsbztXFFUHrP8sxJoMjCfKj68iSXaXMyW427kUd9V9pj5p3g7429JohLfWD1rHJ18nSBNvQSK",
  "key25": "2Hfxi628GgUUCUdWFMYMYMfHXCvdM5PfAYy33KwtoyZ6YZox1YfDTgCUzdKKgsB4P3XsNHMJVwwfzheVHaZbwWL3",
  "key26": "5EyXWLcAsc4u5tBht9FF2fz8XqJPP36VCjttWSfT5SK1yVCcu7sNqHgnsF1vVdrNs7XmZkjXqMhbYSKYkJanBD5e",
  "key27": "21Fn9sLLAtddjZfzs5jkBA2BPpmJo9V4PEobWzx8aTY3Dqr1ksvGSvdHWdrK8EPGuCscDp8aCku3CPKFRDq8HRqe",
  "key28": "5z78QGEKbMugX3rz8E49xk9kYvsfA7FvcnevTuBWJmB26AmGyGwSSqufRuenYGQWdmsnfRHjNjnZGAJUe6bxYQKN",
  "key29": "4ScuuiRazBU735Ct5nSqdmKp8acGr5ZqZpX9ASS6ULH5AaU4TX2uCg5aWtVem4VVUD8kCDj6kEaPeqEvyCvoj8u3",
  "key30": "veAWkE5Tmqj2AVTEg3WwDoHUFzbnZW5Firz79fbCvnLihkXFCHcFfdaUENozXzWHFvqjpMEqjC6VHq6No3y6JEa",
  "key31": "2545DenqdWt3JaAo2v477Qt4azgaiHiyoPDLFLN33MafA8oNMeQjeW6FwoSnzS94LXL4HHyhk6XLCETkCPzQjyaw",
  "key32": "3wbJiZybdHg3sy5UGdFbnNdL3cZ4WJwXFMhRqoQxZaeVmR3CiMpSGybsAPZvUB9JuFMzN9UERKVHt7EiVSrkYD9R",
  "key33": "3HruqRyjfPXmzbvHCarSYNoiRvwbxkkeGrxNiNUoMLepcV3yx9cPk9w8JLLhpP4X8GMJHM1jHNf64Duzf3pDjE8G",
  "key34": "2hnwtDz4e798hwFTHbpBMVvTGCoestoqNTZBswS79VJtqzRRR3QCwhqraSEGZDJGLceqe1LjLLPE8eA4MCAdMFHW",
  "key35": "5zZctavJeRfgtRca8KUk6gBL6K7u8bNJ8GAbbTfYz66ZmKJELMor4iQfWWnQwvxdE7SaffDURfF9dLk5dW7EvZ3p",
  "key36": "4zebSeSjK4TMcfWBKF91XiuuEivUiENgVeuZj2GkFi7BjAnG8LW5tWCdisdKu6XpaqCBgcTBNrsKBa4LGMy5Dmeu",
  "key37": "cczt6fc3SYtuxPvAk7PeJpA8ASb5q6B4N16DaiVFqJ2Tar5qkSK5gSbYzvDNJaokraKeCAArEUNni5BsGSHRpvz",
  "key38": "2SJVgmREcPyrbhpjG8n3jznPXEPnCoTXmiwMdhvagHuwFF5Zd9hzKbbSTdgFZiNXsnk1qrcrqUTFDYdMbtxaFCn3",
  "key39": "5aGPA8y4n1WTUw72QtveoJBCk8F8fbxmFpAKjGvkmYDNpDWCxxiV8jj4duBuwAA5GwLR1mT7ZZhDGhyvrHKogbM5",
  "key40": "2m7Fd6guRuStv6tNtD8mtQUnBu6yg7x9nAGmLUCMTUEYY58xHF7mvXe2hdXHbgy2aEoGiHMEny9R9mwMVfkeApQq",
  "key41": "DBM993GkesZgUX7KCb1PCbgYP6aSBfgiQzakhevTSmcQf9SD6ZZM3Wwp4QrThZG7XJLSUcggToDLZEJCcsXdf2E",
  "key42": "61A7n89ww9sYk36XG7bvg49gvzJrHSn76ZsNBt39sMgF1dVU7PU5e9xTvoqh51PK63tMsDu5kKkfjorLfY8dc8gx",
  "key43": "61d9bzUkfAPfiScyR53b4D3aarkbewKtT3K6uT1gVpvPCjJtBYPz9HKnhs63JZLt3d64xQQVJns6585Jb7hRFue7",
  "key44": "4Bdvq45a5XQamrr7pxWoGSZaaFvVCHkZuqRxjXb7prhzNKJuG4ZUZMQxf6MaBFo8WauP9PFHxCK476h7wz4VREre",
  "key45": "3q8fdDZ91ZvNW7MxCQvMjrVyzxvw3dVrtP5jQVrsYAhDa446RSCwEmYAYkCzSKVtrWGgT2hEb886rjnGn5wkYE6E",
  "key46": "UJ5WXjLWLZBEqJaefVhTQ6Kv8cBCiFkZ9TXShgioaptuWPn7DzmpRAABuMD3GpjFYg9kJw5KyXGnYYbY4NRNM4C",
  "key47": "HY4jQ87CqTFjEuxh7d8cuGNRGMyysS654j2xgmykmtkUH8SWHeuDFSY2gEeGbysoM2YRgvgoUPtNAYLbkLU15Aw"
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
