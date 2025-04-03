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
    "PVLxmMzEiErQrgzrQeUHG1vPHgBqsFCLdPkzfbmbBD4TpxfwP1XVs9zdChMUUAo1zjBfBn7jPXrmvpmqBz6UHv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qAV9dtBqfKcqGQKHATUZ4tyPSU7e8QrMkffamrWRkgGxnzNMKwckyV1EhQFsJKSorGZuRPKfjKsne2rH9TRzoSU",
  "key1": "5cSo4FL5jKTcaMM2P12hZ5sH9N7RDHRQGhLQxe67pof7k8EQhmGPVDYAp5RqhqWjFSwkPSPZdf1patCKK5McMXe9",
  "key2": "4UjswT2cZ33uP3sLxM18VajwRyQajdyyECXxzvPWuLJN5gnAzLkChqyTW7faJ8rtkHxWvcMbxL1RxeYDJf72wCTV",
  "key3": "UFmEtcPn4CLeRpXJ9A38tFSFbwts1c6U9GLtotFvMAGM2aCTuj9QiEbdmMTSMB3CWwGev2kYNFej9rLqF9uM6h9",
  "key4": "2QebvNaRptJW9rKweRbtt8geuJDLH6iewx8YALNcZyguh3gGBA2NN9ZmGCzqDMzvehCJ9kFBLWo9RUK7QMN7KQ5w",
  "key5": "4ziQSxUv2cQSwsoTSnG6KXvQerJHg4fDp9qSnaWVHqsKp86FRfw4YjyuSeCRN7e8saTTkr1WNDAHqEm2fFC5VSTa",
  "key6": "3QAW1Xn8uMTvEZLHwpjUHg2jxy4uPehoXK3Z2NhpGbAYkFkJCcb5hzeVk8KSHmBFvzLxa3nR1EeqCWZvqSFUmUoa",
  "key7": "2tpfGrqWowtCwNWJQar35yZjVrQfVfoBt5s9oASPCvPfmordmFDq79w4svnqtVRTzpgbSj62AHRbLVSFaAEH1rFi",
  "key8": "4Sr1NuAFSR9BnAYpivLYmkzVuSrshp8zJKvchN9YuS1SCZthUGFjrVHYFVtJYHtfiV1B8V4EAfXc1xStg6UmaGtB",
  "key9": "4vK264dASSUYyqR5aVmTJiNk5iXwMv2P4RMKt7m9qsMrtx3z4TDHumxyDxufBQ5TCeQk1SuRSKWHycksiT2gggVK",
  "key10": "3pSFvDBfCWDnvvoKMMaT3XrsCdpEmURjeinj7SQfgoJTgYD17boRH6qvMCoefWPB9iaFJjHVK5w1dU3KNf5LxVKq",
  "key11": "vd8XdNXLdKxHre74AZATWQcgzCMBBEFARrJ2KDXPugmVzvLsFZbPhmEP2NhY4tS3bLNvfmQYa1eQxaRdQCGjywt",
  "key12": "4AX6WGNfFrLY2trZX53JKUMKWa4KEHaaHQdM3CkAqRiNoBWcnHomvbMwuup58Dj4vDf1gqALEYhcNXnrPHrRSVgM",
  "key13": "5yku1Jp6NetAAFaz2EebD6MHJ4QUDFPQkDypqrykvvikwtwDNQxWbzjSMrNwf2tV2Sk5aabJVcuzV5uBrTDpfT4m",
  "key14": "2JSYuCVsCuqnTWLhALn2NbsQSwmtcGhLHWWCN3iKRqUBaT4Pu9ZypPrLejBqjjNiG32dkWVNJMwGsVAxFxYftDWk",
  "key15": "RpnkdZ1eA546uBNb2fpyJoei8RUosuysvb4mPaFnmbYvtNju8YyFRrNCepnXTSPMM465UB8cDL6FMXSfDds8GNt",
  "key16": "4wMVQngDP7VuyGT322f5dMFsAnhTzJch7qi8cHCmsPKi4ExDvvicxm9JndLPGTqc45N2dUEmWABu2N5z4LVZJMJp",
  "key17": "3dobPeNJUY3xEyCRZR4StmnJMLJuWyDDG3RrKqJ8aaAkCBHq4HeycteEnrswL4B888gG7JtGEoKkNaakhcR5zvvk",
  "key18": "4Boqw4xjNZeoAfXkWVuzyyN6E853aRWA9RaEqFazgWBdjmfyb5NhnsKYsviDDhobdHpL14k1biqy1QyduDPjyWDn",
  "key19": "3Do555f9DFoe2mpdQomKXgGXU9Lc5dPKUJDTzRodxh9xCzWdEwD7ZHdpGUS2qkr5qoWtLHToNaxarQxygEdEvXN6",
  "key20": "Xr7PTNFC1GH523c1d1bGogXEh7256o9Qdrph3TGBSJJP6j9UutdFJvebfKMVnhaVUSk5rWs1Y3BatseRwKQoM4q",
  "key21": "5LHWZFPVf9CErTer6zcyKApT1bfs6jsSoH8rZPMxFc76xsy4BcuYnj9sNe8ikszHpqhFkbxEcDov8UnfGW8nG5Za",
  "key22": "4weXNhoJMzWjoh7kiDVJJkfXnRjY86BoiRVW61kotNF48K9UD2DdC68dL9SjoNDxrWngmQJ1pRfkhVYLEu9EwJGc",
  "key23": "4vahvNaKU58m4XHfGtJe2waNpgb7cx5S1MRUJ9k6RCEXD2MaTfYz37mcAU8HDou7nVC7tADsyvLz1N7CUgcstmMX",
  "key24": "XZKSs8toVYsPTATjnzdQjnUVZ6rPUKhSRGnjmD2hH9QY6o7twQj6e2XmwacvKXdePbZnfS3df1kDX8Fy8tBfPeB",
  "key25": "3uMUAjEtH5mKzrdvQqXcv2Pe8zfXg2Zj4C3DrKqDXWRR1GMH8eGovPMGn1Fh2745w3DnGLWWdfjsgBqkdw9Jwgp2",
  "key26": "5W6Cki1fvCoB7Cgj5uBiF1Xc8rGDfT5aoSf5sfMSnybk6nneYkfgfV2x8JcMVNxRh8dZxVgPbmHC2R7uUsUHPV8y",
  "key27": "5PRZz63vAYriHC8a3omXFXLeM6mzghbZQFPLNo1Y5sRd9CrWkhDF8JJUAVDvjYUJrLPvkaSpanBmZ6o3iV8j8Tqw",
  "key28": "qT1CiKKeApi1YZzjpsCQAtzPEbs5TWSzgb7nh9YH6ZXqr3t5SNsK95zo486NpamjJpksgrJdk8QcjdopDJwADSH",
  "key29": "3LVuLD1xUUJEK1VrXiEmEkHgdc41u7HJEEfLdYTEPv6sEWHeh8e1m9XHD9Gf1s4hkyV9puFvrfixHweVbPPG5a2w",
  "key30": "5vdRKf3qoxKAEqJGR1dKRYbTd93oYrwsoUW9x7jjPdvrYPVyENtF3kzS4tXjeGm2AExw72wpq7qxGqo6urYkHUDy",
  "key31": "3aG1J1NH8U9wNaHBEgeLHuUFLUoHDPEuCpwVecftHfTp71QmBQpdq8Q7wieUsDUDPD72bm8R5VHkUmHuPRoJPkAH",
  "key32": "3cEsyUdE36s3eXgeo7PnsTy4kwSCYjjh4Nx92dPkJLdaz6bTK5ZEZsWN8A6FVtV1UThWKA1hNjKdSBCX1HWQhKft",
  "key33": "47ooEcE9UMaqiFxsLh8uryhTL6fTxj8zH9QYpG7Gs6pdedrLq2vmS7Vbce1VBzgsmQVT48s8WvRob2wu11mpzZ6H",
  "key34": "64gV5i3B4LfBv43vPMQXfiip2HKHNao1Bivp6hWeACqxuK1vieA8TNJojTx7RrA97dtHiNmpM7GNgo9FNTw9m4iq",
  "key35": "4axJJ1atVBhyGbHvTuCqF2LYDyTLUJhUcPSZVvKkcucDQr42eT9aP6dPXmucoHytDb61KAKMq7Qst2NHnK8pV9Tw",
  "key36": "4jNpBQr9PsqYQXCvnLJBdu4x5Sr7HMKXd91Uhd7ozcS3D2EKKVcdfdsUsP9cMLq3nWy7kb6KmNbx3dEKx5egckcM",
  "key37": "4PhVAnYZ783PDTRNekQjvQUe9i6EnbrXdfvxT7G3YMRZeZ2PXFPdAvv2aTuApXNNMKfNCoKQsHW1qAgFWXC9Kbrc",
  "key38": "3zQaTx5fJb5JH1gDjLygvHx76QXebi5h18MuNCFuur7zMdcnzmSdzKPEBvzuCFh9inESyfcs3iAxjRg3qEqaZ2rb",
  "key39": "U6UoV8gtyLaS6WPxUy242bqKkKkFmD5f2qpdsr9uhY7hgsHhgVzEEgvp1MuyKs6zLwMriW1r6ZcRz1Y2kBUy7Mw",
  "key40": "64iNdrg6U5eV8fxLLo2SSm5jtWmJsubyGff62z6GnZP3uRrJxSQjJJMDGZ5faSzmdUwuWQQen97oWDMeUAo3CWUy",
  "key41": "fRcPUtsjiX6v6XNDSBtpK6sDNLVRtNkF77jx6NCAKR2WL7GNp9bGjNDswJTr8PiuGUtGtKdmGqUXAZSnDRdUUyy",
  "key42": "2omiPaTnTCS5WwtkminQTbq6yXkEVxjXyK1Ncok71Z9pCq8jngRUBGn6KtdaZyEA8Vh9NVpvrDamcJMoUfYdPDwn",
  "key43": "37tL4v4LSnSwZpPaBGet3VnfgjXnpCUjL4uCtemfpp6ZZewYnT3HArPUD9fs4MvFU8SLgFYxz6yk7D1qmqxSDzzy",
  "key44": "4SPRxVMRxjxyqWTYfDH9cJwh5fyx5q49XaiWTNrYb1A8anMEsAbcGqYn64D9ZWuof5Nsjr5VcMsXUFNHchXHPt9m",
  "key45": "hNhZo8e98cLbzYMVhRpCSdag4fDtsHgtn6dkbv6ctVUWVx3Lz115RHhCxUoTk7m7uj32DG8ASDdhypGc4UYmKfG",
  "key46": "3wiGq2DxDDa9VNtMkHrvj5sZJwtmmcNWRHRvKLw4NUCXczgEJwB45oXVyUqRPvXFqbTKThgai7s4h5YHnSd4eUN1"
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
