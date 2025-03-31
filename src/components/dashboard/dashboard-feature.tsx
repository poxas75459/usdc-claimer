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
    "2qNzdPLY7NQdsaf19rqXPXitgKLiRNHQTEVditYFLNdpJg5ZGa3iMfR5frgw9SGQ9kguGEut3Z287MC89dQwtpjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xuv2tzvhXrkospbnj2J6z4LtDrsX2HfXgL2K3ixmho5jAXKf5C57WahYszNyUXATDZXuACwWxvpD8x2xGgLxBbd",
  "key1": "4tpTL9bkn8EQwebRFLepFFnsoWQWPMdNuaEQTAaxGaLhEfM8RovDTADi5fkA1r5FuypAwhv1sdp7BDvuVgiJw1MG",
  "key2": "4amv9dUiHq6HZAktxYcZpXbqucK5aUsXzKHNPKt16g6uGcnfE2851SXtneby9yWHNjgezAz89WKpiiYz7KV2drEm",
  "key3": "5ZvcMx7dMBuq99WMcW8NUMQ2GwN9NbNgSw7tGGyLXsPVsV1466gfHpSmYX4qVV1hkZ7Et8WLhH463wd24BfgzEyX",
  "key4": "3grGtoVERDZsJdi4mxnukqYPQqtyWiUxgXfqZMXeGoE4n3fUwGimP6e8veB4FFhM1g6T8NCrRWJuhSLwX4y5TpSw",
  "key5": "ZArftyfmM33aCs1vykx9TW8r5REK3fvx25Vyw4KFmerHb65CWKH1ETCPQtJVJbTHErLy8KC1M5n1RVqEwNKe7sz",
  "key6": "5SckrXCBM1AkYtdhNvaShxFvoR7jVDQfts6A1B69sj2D4zJNnW92XJGDEyizULB7dNE1RKfakjYnFVaeJNBzUTXo",
  "key7": "5WqYBukz5pPHYE995azabZgaHJHXpfjgq2jdrBEPPuecLYFzGsUHNt5yT1ReoiyeQu6NAVQSMHbyivctBLESET9X",
  "key8": "2mkThTzucTu3BDwkT8wZoQBLQ3DEeYGXdnpCAu11n14WFjDZozucrzSTAG3g9cFpcX2jVWLgD6WUBWPZ5wzyWtdo",
  "key9": "3DZPZs3nPrDqBP6UoKYXAqnaDWTk79GP5VDrbm5zs4EUr5moXVxh7szbN82qfUULQ7PiECwP9DiEtsAaqmp41Tk7",
  "key10": "2BxW7kYBjsTYqriWZZt2kuk3crRQwRT8Dmak7P6RPUDpLFkyGR4KhP8LxzcVW7ZyvdKhCVyK4FpD3JHHZqyChhPU",
  "key11": "4V96XXieUQAidDVPQoT7Hvt98ZhdiSqtP6teFkwNBRBuMDfMjy1Akr9YEXM4E6FteZTA5kPe3t1Tf5WGcv2y688u",
  "key12": "3rCjrSw8iqoU1adjxpsexrj4HKq9aN9SB9EoahHjAggssyW6LTNQDfGeEoozuukvPh33KCf7YiQAxY7vrQuHoGR9",
  "key13": "5ZbGZdmVk2a2uhadbrrYqDPz2URsER2RNB2AHEpUmW6Ap1ZZEfYASTMsdUDeDX9Maiu2Dd8FbPLgj2Pawrps4VzQ",
  "key14": "tGHk9Hs7p6voM9reX7w2nkUYC6vbFkkyKLbuFPPA7WjDZVK3WH3khDmvfZge2tX529yJyXwM8218dmB7GMhhMxa",
  "key15": "23bwNS8uCdMwdjTCDEiS13vsP8VYbX4UJdjumScF5qmZ7Pvw8uJuifmMt3XXvxYgQbkwWhrhGmV3vdUxwDKAUv29",
  "key16": "NsQzjDPBTTbPrv4jSoies8e1AXnAQ8SFFayDDG1zYh28PygXDKHqHjPSsd8ThC3D7kKPtGX9HGJtGHW6TsDpLqC",
  "key17": "2ftqNXHdyuubvdyqaKGbLmy2Ctd2XJLnMS5B1SbkcucAq37wKQdjpPiqpiDso7kDRTwAnJCE5gCqP86jDCfsJjAw",
  "key18": "5FLQKdrjur3wbgL9h5XqGi8Ubcii5s6ASLUq1KowDKN8ubHhuBJ5aB7awn9zNPqsXEsK1DePjkbYYXU7J61uNWha",
  "key19": "2Kb94dRGNP7FGi15roVD4MT9o9jmjVS7XvsHZCYFkop8hWXWUpBYgcKeEM5SoCyS1cWSSZ4XymSWZG9CG4jypFwp",
  "key20": "3Vt8HYE9RxBya1ao6ab9rhLD9q6esP7cVj2vJTv6pxojStCoCV3GXhgsnfCNaF5o9Jvq3mr2xPW7WjYitrqTwCq1",
  "key21": "4RTbjEhALLLd62JebGZffebT8sCUiDrMqvRC3yz8ELQCBdotfeykD2mnVDYzHExw1Y1rb4Jpz87FhJpYQBC1ovvf",
  "key22": "2Q6mERpeFaUmpy2nCU3v17cENQHQWBafxZVXF7gRnKmmVPSgo7GGaBeJiRifyMZ1nUHUhqm9fj7pFZpuPUBXnuee",
  "key23": "58UJ76QgpezgtRzAvqg78MWJcjRdH2KpfwuH7z1Cx557wQfYnokFPeRQ3uffKkaMagAMD3CPXENgPa8cre7ATrgK",
  "key24": "46JSazGZ75XTv6RXAmWZv43ZZpzHW1g4rAw4jX8mCt7D9ASYcSeBEagMcwdP8YtQQTsSppeRGtoir2VZMwncKNJs",
  "key25": "3cPu4TMLVfVmsjNNyh95rGhtGZ3iXPtttqCmAoXntU6VLmZDM8eDM9TaZqbfwbTUDiPt3qTy22iGuuiyU8PDopeV",
  "key26": "4inrTnbNuPkfVpGD95dS5L6EXgAHNBaxeDSqBF9YRgrpCDF1hZBq7szKi1U18wsn4Z8iJDGMB45Eft87VbN9z5K4",
  "key27": "2VJPGp43CyUCEst9SJoJks45h6PG5zyod8Egit2EHv1N4UnG5o7Z1vQD3Lpyh9gLPuLzCoreDVn2hjDBpN6XuTt3",
  "key28": "5QqWFnWhJM2pRnecvhdTrKhWK4QkwsX1kcnMWhUXM1wyXsgTAMJyWB3h53PBzi47YHm2puwFdbzpPTJg1oyg9DGv",
  "key29": "haYXNZqxW9DnyGMRMsLgqZZJuC5yrTtosXHfjcP7BkaZ6MoGAdVJc7qCkgn7iuGAHiaZHEjh3pAu4egJFmXQNYo",
  "key30": "5yv2k6WaaMz8DgTnihmSVbBKiPSEa92zxn6QgjCXqH5d6RbiQowQdihoBBbwnLyutyeg9XbJW8iv4F3WWH2ER4s6",
  "key31": "5PDFptCUVFse9yqCuaPLmizsDGSyNHZmgEztP8g3ZBt7HEPDd83EASAiWxewV8FSu6riMZAc3humgrJf3AH2MxUH",
  "key32": "41jvTG8PZzaEtDxTXqHtwJzHBdGN3ezzpH15cpvF6VgW5TD7nkNztNWjjNC2evut58YwFGwMcZZEQjJ1JXTYGoaF",
  "key33": "2jBwaG1xS4NbLgLdjiU44ey3XdMuQwnMKTrFSk48NqLDBATj76GuZcjzaSsMPy8Hsq8DT2gDT6ojHyMWUPHGLkRj",
  "key34": "4Ph2DJBnx4XdC6KpqLz3YtQPKrbHmMG16JERuHi9b2GXv4PBH4GSPwUPNA6ce1HVgUJHDKG8HHeKXR9pBPKdYWgR",
  "key35": "xQAsVJR1yutLMiyf4HsGHywGFMMcAmXG8vGu79PRqnqaXpe5hUiJWP8cqBfneeiUkRuZHSBmTP3MHhVePDNKAGe",
  "key36": "2hyJpk1KMfvLfCi8HvG1V2hkvU8K7fdrCWRtceCX8gdPk49fY4Ua8E1Ly4xkLbvmv5p9SzhyfTnCkFj725Nn3BjA",
  "key37": "5v9FSPNc1dHsBW9jEBiyyazmJqDJ71M3qGTgcVTYoDAdPsN99Q8bEowENVAr69ocaGvmDRB4Jj6ApkCdpW2uECVu",
  "key38": "2WuWPqWiPZ9KLrazZoMLtj7ZgG2BeGLHWg4TEJvLagYDgEuyqFTwqmV3BVvKrjHJnthCdo8xkh4rGqCJtxmZyjnq",
  "key39": "2Q5wizf948DXs14mcCWb1QaU9h61RGoY8T6H6zfADp4aZRQ8kHozsNCt6TviHg1eP7wieEjj3L5hizkf7eW8eAzd",
  "key40": "65VMrh57JABrhYAMjThED4QvAbrBsE84xu1fN66FcMUs2mELygrvfu3dxTvo6w2ex3KTQKnhvPizXV9CMebHTjQv",
  "key41": "4PGxd1foVgRtp1gKLCafk4i71eaoTESn9pcu6qz6zVHWkrgBiZ2ESBQLNCG6LVzgC42MUE35BXegcBmLEPx4ijyx",
  "key42": "2TV8JJhfPWmzeimzMeF7jDngCpHNyusUFcC77TKkhRn2bPixfsQVBSUXBiz46L2pLKfKHXnuspnQF8PVLHnGoVy1",
  "key43": "67ebYYbqZ2XJSbW4ZJ3jCy1UQ9ZbVP23aCw7R9U2zRx9PRc7oDK8a13rZANNCNFwCWa9n8ZWwtTbNtaUJV1GdAVm",
  "key44": "5mTVSrN5nUgBB1VaBnmcvtqBYmKx8EEnxehNC9Xqjb2C3syQhUsWtriXBmNFp47nwvB3DJEqbrDfAFJJjj6XCuUX"
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
