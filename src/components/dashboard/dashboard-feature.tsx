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
    "3BsM4JZchMtLro7M9BzkJPP5BbxJSxJJD6uUdFn28CEc1KeupEEpxBLPcjCct86LULUBrfgeqkhULkjWYAD445kH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64s6m7ZmaZ3e7PtBw89g63csJjENKTAW3beJQJErXsAVqvF7NHucDiqDP8ubaYLTrxPcn6GsoPcRQ9Q3zD8xWVgC",
  "key1": "3cwDCyc3P31i8z7hDYmscAkfusokmnc76qyhWPuxaSr2arBPappeUHtyPMzdgeghNZoaw5Z3CKATayGYZfzUHHqR",
  "key2": "4WXfKr7P14q9xdPa98FndTNkb3Dxvg6Sm7S3waxqKfeuP6ta1aHJj4wLvNRdRrx8XuDXDKcmW9Nzvk6SYKTPqgyB",
  "key3": "3yk28w8iBRTA12NU19nHsnWJvrrfdt3o7xQFQaeC58uprRxKCesgbC3ruYfbUdnDgaHQnGYL4knY4a4ir34HyRU4",
  "key4": "5NKTzwY4ffLnWjUHJmx8TboRV5acvtmKxAGPJ2JYzTrpnksbHPXdUCweScmKuofJ8Tsacr9g6MhYC5pJ8psjv1ht",
  "key5": "5Ty9UZoRzFugH3pmrUFJ1zVTKB6U4YaPDq1prDwKdPdHjFaUpQbrRxwpdffbAf2T9S4jcVohA3Ze3ZJY648X2u3U",
  "key6": "51eU1TiHwKc8RCdMSdHmeNsSi9s7virvuCGEGXxJwNirfPxnBx5x1QnxG4mHFCyj6hK5LsCL3TzEJipyf9YEK8YF",
  "key7": "3KmocTJkzDZb1bPwGzYDEtwBcfWM5jSwbYVnhLNakzLDMNMv7ZaiXD1sUnmuEnJWqkC1uq9uy2oQTXLo4Re2sNG1",
  "key8": "5k29FAL5DnFfuqy6Cs4bEKVrnBivkX9E2iaiKc26woXnMcrNoGiNqpXUjpf29osPg8KoNfWEuAn67LoNXHZ6ZoVB",
  "key9": "3m2JWAtfhsVnFbjyrbW7CgagQfbX2M5ZvsR71BtgGgccHBXz1dRoPbjvYgTghHqpBNrzyBkpELXjP8Jwc2umep77",
  "key10": "36BSM25dwA3Dcm5qhGa6j9Y4Amp53z2rW8F7MaKyS7BGkZaRsCNzh4mYgL2QHHd5MNwC124VURSKmvpRPb6yJCq8",
  "key11": "2BVBQ4vKtBxDP6okPu4PQgjVntK4rqbVwwYAz4t3SDfug6hJyjqcn1UKAkt6SWLyr6nE9ZHXR1sH4FmhK7EFegvM",
  "key12": "38MFEq1k9hGMZUaKDU8tXQQeZ44qJpqcRx6wu7AsNLjKZqLcytH2vRFVyp36ikcaVTbvCR3SLjf9E2LxYqEodE7R",
  "key13": "51zbFrdYCcywmy9UDmDhHobcvKztpeiPy6jia1Xc6HkkuZYBNvsZA2CErCj4Jm17AR4WNjZ1QfdfjTzYUShECrqQ",
  "key14": "4tkVKUHd5nL1yvCuukCjEu89xgVeN5aQL9uj3yr9EpG3BU3DejibQXT1S1M5p7u9WzG3HP48JU5PDTJ5cdu4uhwp",
  "key15": "4Qq596SwunctteFz96QHMi27gDwYpVJazsKtfXm1KEE9SrvcMdRgyNy9Gai25DRPmrNMSYNBWbSaMmeLgvdH4qMk",
  "key16": "xJPSKiVQFwCFEp6Do3HfudT6qKCwcjVvTHWA62J4DJajvL1pbhJ3W1wbmAtvyXJavvnUKKZzU3QWdpsPw2oyFN5",
  "key17": "HN3txfWwkBbbQfjhwT2RpMuBgVV5eqeCyP2Nm1Re7nv9p7aoai3kARFExRT2YjfD4VLA8zUfoBEVYRMMPiZkDna",
  "key18": "5yas4Q2rJU1Hkz2XXpYFmsJk8wyMCWRm23EAhbQYAJSr9F67neqEersweDHwH3mUxnGRAP8MBAkEayMjyTkL11tE",
  "key19": "3zVbfJACNg9AVBji2g1DAf9CH1HVtqpaakFD32sVLQsiKEv3g6EtrgiCraqrZiD67X7P3fdML46nR2CejggxkVbN",
  "key20": "P6kmpFnvJcbQQawoMw4F5UJgtrZcZqRicrZ1m3rdjszxuehcApXQij9HJLbgPJsa71asBTUSpQfBbyJFgK8m9Wx",
  "key21": "5gRXNLNSfGYVDNvUQdpaqCLLmaXo2v1RxNc13rsTZB8qY7euqFWJsLeyHe8PDWAV7NPSesxjuxLvkhZd5dK6fYmw",
  "key22": "FtHAYWs4dWvsUR9QWnMVvMjKx2tNRXoyeSS1ki6fdLnSPq3MsrvUAXw4Yw4ggaD3ZzsrC31PtddgwPkBmk7xU7U",
  "key23": "67fyuH6dkzFYTLCby8sT5SfAKT8ufaWJVgtdVJ1aumbQyxwWnWfMiF4xsGg5Hn6drk9Ja9EnzEuukvVmUyc7q6Gm",
  "key24": "55nhCtxTtStEmn7xw5iDxut2J7kNUG8Zcyhm1jMRzxgxFSMcmrTxusPc2WVpuqHAd1JyUNPEd5sqtiUn7Gm3iThr",
  "key25": "3yCG2pV9NYueLqvUBh4PNLRnbdzs5q2NYV2e7hCYtpXgXTx8y5EyU84asXxD1RGZg7NT6f62uJau68TyEGaRbS3S",
  "key26": "5mTysoS53dFZN8uSpwuNY4Nu222EENmdWkWmn9GHdGuH1MxKMbHLvdzYK6kobHSoSpYLdR5jQtowLQVy6rAuENyG",
  "key27": "34JUuqi5fdhSfa9D1SMf6PYtp511bEKe4PKtk6mGJMgbUx71kJc3GWxBd4FSJWjRMWsszynL1M6FnBXNnGzq8WVq",
  "key28": "5XJ4qAesKy7hNoGSjnEAqnGL8LQQGokbm3YnSNQzXr4jSXPWBESCKw9BH5a4bwCWsyoKLtva1DC971aGWocCCqHM",
  "key29": "3jGYx7pS5K6dJsF3zFR71AKQ5Aoojbr6F5fCTL8w1WUWnwoWYoiou1NGQpgaYqx4i8QWFmKR3hZMGk3zotYkejNV",
  "key30": "2qWr3S2Q5thL8PQJcoZMwaXNxtMkQyuTEwqo4ZNAAyVLf99z7mAFhFBCkpNEGhzdsg8BtxchPCSuSgsVSxmNzrem",
  "key31": "KEGMzuYgUvr5BFv89VmPDJDnmeLRuPFoWZ2hMMMNBkZNFcNxvYtSCVMBcRTJSejZypMVxf5szxCsYxcBmNEvKfB",
  "key32": "5H5wn84o6Z7Nem88oB9wbNx4tTFvwfijvKArVXKYAyaGVUQo6h86VvohBe67ixnjamCcfHZcS3HN5Pqo2WjvT2XZ"
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
