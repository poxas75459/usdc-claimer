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
    "2CBtQuwCHf8uPFNEQr3EJAZ5b2DXk4zwcdNwaoLvosiX2k3ix4gLB21nfHL6Z66kSrETeSCS2koh3UYpLjDNUSes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4akecJeq8YVmaQoRCk5MRKHZuaJFZMF3z7qcQUwNQGPPBvmEvY5msvSGXJLsSbNycwMTVttTRUk19dwsx4Rbm3GP",
  "key1": "5cNp1Rh5WZyArU78YDwE6qnFuWWWHM1tjMJxHZTabBSBLTLMASaG2iig6sB7h5ddVTnyrDUZZwbun2adAk67MuNB",
  "key2": "4YA2x9WzQLwUh74Ei4tD2jz4CF4BHcCBKMA6mmTCNWv6GW1W9jNkvTxcMzMo9scYAeLaS6erZSvU4SuocFrtjgyz",
  "key3": "5s3ZGvfACSTeBwPFCRbDrnFvJXzAmK5e8LLjAbWJXcsyhpX4kP2C5jJyUy8scFsVNqtLS7sfuEbKp15bA5gvjCmk",
  "key4": "1J52PiDJmtcVMsqexMko4FTdEaNb5CW2g8hsjgWo6sN3kXyzVY3rAsTy7mHujrZyTDviB4BAUU2GvM4RtJEBYTH",
  "key5": "2WoTYjuuBYFYZ16DEH27VxNAZ1uq3qfBBvuqdX5P7d66BUwJA7HBGaL1kTzza6VvJxbTcW2UCLwchw46riuJmrNr",
  "key6": "61cW1q3f43xnyPNkNypqf5Ywdyb5jDm9QnDgiVc7q9RkbvPeN5HvcwokDyLFDvTWH51TNqvjM5Acv9y4ygLCH3sh",
  "key7": "ukYLivVou5HMt6uRzJwL5jDqXnVVEjAs2UQDtBnVJ5mSri25nhcPpSJxW9MQq9jFnmTModZFdCZVEJzoA9EVeDi",
  "key8": "KDGAMZBEDtGYLXyg1p8FNy755mY9Tibdh6x4JPZGL4fj4eEddTSCrrKZ1AWd76DfBiEMbGh3p4ssRj6G4sxqwcu",
  "key9": "3QszjFinMbSfczCZQRBfpXqZTfidUWzrDPd99P2JQn4vPJRJDxrTF7JATni6qxGdTY3bZAzY3gT5UGYmWZsTifsU",
  "key10": "4xa66DBShEyTSu6owut55fnZKmXuFNbdrC4yAN3AzZKRkAScYsD4EA217gkFAbroTAR9wsMViKjkjWx9S5wngFR6",
  "key11": "N42SbHjqtVbkKi3J96MWG5LuVKHRza7caDUxujHD614Ku5u7txmy6c7P8KS6mrKi3tnkUAVf3d9DKGitai6wcvV",
  "key12": "mHYMtFHaSDKNSrAenFzJcKUPkyygjTUPveGavm6343KgqEtjih8xDeGcuVknKWkqjRGsSRWv7HqMBFbUE2ZshcN",
  "key13": "LdoKwiPbZnKpMYRXeLsJSBvQMW2UFCSxKmP8oMiwnktgwSeTaE5k1vqD2MmEi7i7vN4gttzeu43GfdEJ1DXy1rz",
  "key14": "21cRfWRN8VWgpkXE1jvveE2Wii6mPMexe6gyC5E7iRdHfSwKRRFZEuUvb3uPHpwDYM9Ud4zLpF5mSRaqHBSzHdeh",
  "key15": "2nBRioUt58cc2PGp615vmfZgv68fpWSSUSZZv37Cu8sBUbepPEL6KqAAkNuXFTirjymvQxjDodbPtQVgWB8ibwBu",
  "key16": "21usN9i3Yj9jSVi6FMBCuGNDqSYZP7d5ixB4XNhuadY5ir2FSaeT6anQXbjyUypUY7884GtkkgH7UpoMuJDp2MxE",
  "key17": "5X1Sx9ZnqsVwRvgaJBVLniwkjw6kvwXRZMJZG66Kfw4cRC18fWssiKM9TnEjNiNr7b9eWtD8Ar15SSQ6eEYB9evK",
  "key18": "5CQ4G2vFcozqBQYyqX9wXHqtiY1Gir6EpmBT9ABQVX1hcqHNPDq9FBTDJCppMqrrJ5MsmrMHXTfWGgGnkf1a4UiH",
  "key19": "67ASYeLJYS1oHy86qB3zYd2GZaWi7m249cNWLMJcrALRwYCPyKXbPLGbv8pXBRjJtaiYbFJLogEZLnpJFvDTrBqx",
  "key20": "hrBJtnTEpWhkcS3dmomvdXxUtLqx6rbHEkq4QNxcVVzdf8xMpJXH58kyKzxji7L4kLVwavrYePhFSuGmtmfX7TX",
  "key21": "2UU7ermR9Lqa1saK3f6sB1bLGiDA7j7NVDmkqyJZHeVT8yLcatcijasT4mTdDcetjvuAvneWqzhTn1GSrVseKZJ5",
  "key22": "3xcQQ9xuviaKDAwvbNQJWmBQYpwueDJfZYPtfxSSKphsJ9pnU6arfRth3WjCxrytXBvk9XMgK2PbnScYxwi92gKq",
  "key23": "4CgAhz8cRseHTYbQdqRANMkv4mE9pQbGFx9mExw2L9qE54DNsLV6hJzRjKiQNuAyTf8ASEp6kbxZHqpa6BHrutFd",
  "key24": "4Buh7twwVKSn89LpPvXFvgCsSyPTfx3FX17BDgC6hYbrHbS5cf6mmgiF2ZUojRXJBrUaAmnuYDP1oMBYzGureT2b",
  "key25": "5UkCcGfrqF7CX3TaeiZjAhiD8saUtMvqA3irFfsQtoicxbU9N5FpcV6u27V9cZdd3qf4JQUEsvK8kFoFZA88nhTT",
  "key26": "5iWtgMRGceSc9v1NQ8AejUFAvuc9x45QuGdpu4qL122JVzj3J48kBTmwRij4kj79YwpvWnd4vdsuSWpPAdBdaGx5",
  "key27": "3Z3Ys4W8XRfzagwXzHf5M7Nu6qMmV2Q5rxvMksBpiPEWgwhdromtLWz7LBKh6LC5hXCVaYXSv2PsMvmocrKTSCik",
  "key28": "4zghDNsY3y1hYv1CTjFAzGsEyX9oyahudC4wDLRyWS46dcpn3b2VxxAaA7tPkzqkekvbfmk4yvgR7wK1rb2B8Urc",
  "key29": "5fpPa5Ai2ktzo2FHZGgARMkQLkt5gt6Bng6UNryrXKaX2bywiJVsGisKcjCSWZwmdnJ2mQx5zMiKMUquqzmTeBak",
  "key30": "4dHuBkPc1YWgzuCUrou6A32bAa2ikUwWQMNcevDs5oZWRQUwumJGi6NbPoYFVY6WizvcC9u5pRM3giFXyrMUKRCW",
  "key31": "3F1f2jb9U2mVHfp9MxKvVotzBULR1TyoRp1x5ny7ki9m54sVitWX2h8y75PY9Ho6bdZ4FyCWCniKMo2joHvAmRyc",
  "key32": "2fxoiJPxu76cH5uCTxE4oQdgFoDqkkyJWbeHMef8rn56YC64iGA2jY3QmuZaYBw2mNHNFcoJq2fYpiKHXvSVJDix",
  "key33": "3BZWPhPgY1hMJsHptwvq7MUtoKh1pXk5JZ8tk9jKKzVnQTnGGFZ1j1tPgHmxu3PkELvM4nqY7i73PdAPmpwSVwmN",
  "key34": "5Bqox2dCbbUVxdcBW7hv4D3icCEHir1ioZCPWiQHQmhovCRdkp3D7tw5KP2saADa8CW3HrLyPfheeJt4LDxCQxyh",
  "key35": "4DFUgfMbtNJryG8TUgk2z8NCZ5pRS9TezeZFYeB1A3npePKP38fUvHQB7nfomyKLXkgxjfGduNCdCMGMd22yCieD",
  "key36": "3kqAc6MrFFjq8sHfjdaBGLD7Ug9czN8jvpuJzMCqs8JEKjjxAmAZULyqDbVHBA5PDnuzdC8cWR6ESQRS5TDLnMb1",
  "key37": "2LdNNFg1pgpNKUZavMmeba6aaKS3n5z8Wh4rjhyDYBs4LBQkR4iNuCDYCRnx3QQDkHx3mg4BEL5yj5D883qcGqqn",
  "key38": "2NwZs1Lm3zR6iA52nY6CqmWA6tG6KNQohqvrziHYhJqPqQSDZcsvqqW2oM6CnxAMeZMfEpCfgdjTb7NF9Gvtu7DW",
  "key39": "5KaZo6rVyP3UsCsbcYgkGVESWHvsX1GNmGxNtmhRrPGaEJy6rCZ8FTgFMG5itqKVX9fL2C3dCgdRh7nx1a8huRdc",
  "key40": "TujVuXbiGwB3wB7zCWjpzjC3Fh5y5VhnCh7CQAVSuYxrhZ9sShoyhHjWosHmvvr7dzCD36x5ME91T7Ch9WUxgbM",
  "key41": "62sAhi15MB2RKYgDRGAxeZgXYf2R2buHi11XtBcSfRQUvoou5DsiHVnh84EoeqtEWo66HaerEPvCLk2debbnmRHS",
  "key42": "2W8BzEVktYyW9ir8S99pt3vGMq9EeKCrLwF6d9JFBkLr7eUUDLa2iY8vTd69qoAKN9h8DX3XyHHYxGoj5g5rbGgH",
  "key43": "qzQ6r1S9aFjjus8VWLqwMvcMVR5jv22UDyZC1haHMXXsDMQd4rpASoqxyxJ9aYco522X1wfRiud7vDKQw43f6rZ",
  "key44": "4mjEehoxp4Bf1rxpcFWfH3eVirmm52f4rGxbqRWoNyihkXMTH5gvAcLi2pTzJ48rCcDvE67XRhv4117La81rzsFF",
  "key45": "2BGbCf7R7nCDVayEqPgUVGA6QpiWxR1PGgzFkwbPHzNwePC9T3wsCxtyaLGkZsjbo5LD63miJoxVdAu2LUrdUCW6",
  "key46": "3UcKYx5Jx3BrBwZNVrvsSFhaA9GjFc2enPChy92EFcrWMJ7FJmR1yVBjRQKU6gm4vp88GqWCyxFDA8N5snKLfTGP",
  "key47": "3NKkqfJ14BAcmv4tuinCHvMxvAsgE1UVhXNt67vGCvnpB4i3HxPHVLvw3D2kTng9msiUzvswS5MJvz8RLos21JUp"
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
