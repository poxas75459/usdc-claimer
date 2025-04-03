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
    "4vXBGXWtcwfWyrucfpZ7VMZxVjVZ9vLUSPDaNRx35t2bGb8XDuCzEvpPgrw66ELsqdwpTk5iEkwp2A3g8HBvHrvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFVwGdzdQjNQU7ziUDxmKv5YdAMVxcuxKLzMCGDCgFz853n8zwoLM2zN37Nv2TWukUXzVHekV5mM5PTPfTrqUV9",
  "key1": "4gfNNNtdZN4baVhE1w64kdgmsu22zH17oDz5HTHHdNDQzTCjagf7QGwKH5riWWpYUdv3YuoVenWUmH3bEcjCopHR",
  "key2": "3LiEc4Eh1xnemcWQJVE9SEXkDfwBQ7wWnAaVyfxFuR1SmYpujJo4QhxemruZ9RjSwRBSPeTgqJmVjmz1FN7Udqwu",
  "key3": "4dPCjq8eKn9waaJRsyYUtJHaYHoscKpPeM5T8Wd652H8DHND4tPUAP1nkkvR54E5U46HMsHja1Cb6GXhBN3oK6sZ",
  "key4": "4SoFNXTxSYJasTLPvQGEfb4iBRj21MGSZuMVHzuNPrBeVqBQ2hfKGEDSSxieA1ucWppz2p9Dmv2y4SsNnJwqyujX",
  "key5": "2g5hbxeYtQW3aj6c5wjihA32UrPszqLtVcgV5HQxQ8gTUfvfcWgHee5dCFtpmeoakNc25Fft4BBJqsDE9DW7B3D3",
  "key6": "oK4nmsofutd7ggrmaFWZGfnAMGAE9u2iJDuuNuMj3NhNphhh3QybwMx7u4QjG4SpNU2JEGkU6vdrFcxUGSV5vHt",
  "key7": "5Yn2KhTiCVr5XX3eJXkhq1AJBUqxAokrqtnzmJD54qk73maGa5f8fzuhMpNVHmjXeait4xUoJp5MpHGWLownKnt9",
  "key8": "3rvfH8pZ9wPRtdSzm2qdyjdB7p6Pff3fqeWM7HSfqUHK77WL9fo5d8qYxpZFLhGQY7rrc3Hq5s3v53CFi34jv9Ev",
  "key9": "2jcrrQACS6qLK97xhVPPzhv7FCmgq4WCDQHpUkg29pjR6jMo5hKdLwrmFkb69rLQW12u3ro2WbWJpkqpuDKyCeH7",
  "key10": "2ZeUXEhjgEznx9DZMFs5nFQmDNarUhN3WEokeYXWGHhJ5mYiji656XyazAuXwZL4tWkXAx5osDo9JynW2uKESqVW",
  "key11": "4FDsRggVrc3PqshNBmfaMXsq2aLNsMzzF3jcPt9HKXLF3ktZbas5cQyXe4kmDChjyhfKK3NrRVRZicP6s4Dipk86",
  "key12": "2dvmgXNAhHjRePUUeSWfikzMPrzYcpgbsjfCo9soUQ6AAsvBGeQqL7HKz1p2fRxf4pXG3HMkg2hWJsQHN6GdZpvt",
  "key13": "2sW3byoVihkHs7p9ET9ejENKzfnCW25sZjkGg6WEMvhihs8BXkvyoma72kJnuZoV8AFdtuAsgaNKhKoPtRyy3fYh",
  "key14": "4UpC1AMC3Ph7Mh6xcPsDrTcZoaVaAbCViPw9cUJkBAYV7pAvRBxSuMc6v83NKgBqR9gYrTsRuSTncSFeWkpJaasH",
  "key15": "22hSDUmNZziKfKVhSVKQc4u6htBynkjne1o7qnLPK8zykyMCBxAizcu5DnehfykBUgX9NaG7tRaAYfS27nMjMB6T",
  "key16": "o2r1H6xZbxLsBt4ifVEcUWzzfy6JfhnnJenM4Mop1rBh2StZ623vCtUgqfAzVD5eL64Wa5mauyn2nK1RpQQeNET",
  "key17": "5Ng4Fj2J72zx3AgLZkjv2ui1yNb32gkJjCA2p2Np2HMo4zi572YhftCc6h97UEBkeCCoVTACfpkaJ8RsjDZZGJnZ",
  "key18": "2y7hZczuX69eDLhcserTruiNpXdAN7MsF2Jv5nnXzczPJ7V3UmmJjE7ZqM5VjtvE786bsY8EAzv6jiNFYPVyaQvy",
  "key19": "qu6kVX7oV5Ptrk1juusT3j4w5HLYpkKfwMBqQV9n9MYd66VN2r6W7qZHEpnYYZ7u5oRNsAv97B9bBwEJ6Ka8P7R",
  "key20": "Pxnypy8UrPeqmT3UQGSCYBL2choGLUztNy9fKFBgQ2vx4u9vtrWgPpqVcvGzE4md1xrYWsN5e2korR6AAFQyG1G",
  "key21": "3q4mABRJAqPwinQhbVV9sFpsmZLaAn4z17dMdWhW6c9FkBQRksWzD2PSWtEDYU8FdTfz7j7n77toSsbeoSRwibq2",
  "key22": "3yjHSUUj9SuZUify3J45QnbAeiz9Mt2jH1v9mo2Ry8jbRZ2JKLyuK2mfiimMZ9xoXWRB6MmW9zKuPmV88EwQENjk",
  "key23": "4fhzDqAiEP1yWG6hgukiAuJdUxXAgxmSLeptdXmGmQeuHrQPp1AhpWCiA1b3doBoL2nehh1XjPzEdSuXgbRWUsRg",
  "key24": "3772uVzQubyKzWNpnaBDfr7dgX8pTy2gfkSNmTre9L2SKfqvnApFnmqCUzqKwHYFcMAzHcruwN5MB3PV2RoxFdqg",
  "key25": "5wwq4k4KiNgqAmAZQBXCNYhbcMMPh83u5BhkwyCwxERAxrDGuErpduG27ia9eZytr8vcsxMCNHePg5R7js6JBveM",
  "key26": "4reAcDk1UZT3npvDYn1ovr6JuZKDJt4bjajUPe4LaMJqjxxhj6Q5z273kJRnLDXwrgsPnscdubnm5CJakNKfr7s4",
  "key27": "3c2TfTSGH3bvAMptFjozifQ36PT4AX4bVXKwSbZVWAS9AfyoCz7WYqe1tk5tC6kd4JgrsQdcmACPmKB2RXax6oBL",
  "key28": "3dmdXHWecMPra4U6FX4U5z2BhwLEnYb1pokGNTb3DcZoY2x8rfH5j4DNqPf5xThT2bThfAjcoez97GsjVMHh3rSK",
  "key29": "34VEFB5d5ZEH6TWJPPwrjhUDfqXf2Wz1LVwBgd5LT23YdwJVLz5KVpZvaiv2ASkb2K3kLyCsitYfoWz9Y34oNb9y",
  "key30": "56PDeg5sEThhxWGd2L8qX8wyjGsTgrn5mKuY6T6hEC7JziA4T4zAm9bwSYphMQfqN4ArHG58twsp2CDFrRwKVjGf",
  "key31": "1x4HyLNsP1vtq59qopRWqcqdZoQFtWaea3uAh8Ayh5FRCWRSE9PsDLLXjoGGUrpcS3ruzrfif6vLAvQd7VAjwZB",
  "key32": "4amkykBER1Md4wiQnCAyXVkkdmBcbwjjiR5A4MC6t1rwrGzgAgGLmSSgRyd6BwYfE5w163dBxX616DzsZHuw47fj",
  "key33": "4dfLNJpJS3du9TEhVxhP56Y41eb3uqQrJyNtMGsbpfeSPbfYaEZWUrowk7EWR4UnSaz8pyGzTGJKGaBGGEnxkMvT",
  "key34": "2tyNhDM6pfVe9SPp1Xxmq9B13aQjYto3p8hKJwWJ8EyQqugL6L5knSKddkSW1W1MRUCV94mo11KtswBVC4EZcprF",
  "key35": "4SewdKBvznkH41WwkUHDJiBF1o5Ucx4zkAADinpiT2wf3ykkKxGZrS6VgJFSy6DeVvzSFFeXtTVT571ZbTMEyYJM",
  "key36": "49LxHnrgpc4ZhEimHffwtEBpwSV1uKaE3NhwgNb1pDQuFL5jkidhKszkgTtbgtWoRChnnEKgw4S8tTVWfMr7ZFem",
  "key37": "3HS7JbddgFDdu4zrqKEMXCXEKZ1BGh5wWosJSYYXVHejZsY6xqayYYAxawfKNBmyfffrGX78Fxyr3vY8EN5ARgUY"
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
