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
    "2ZoVh5tV4RVqvmEGtxLVUF7dk6LRNY2c992ydQNGShLhMbrj45yi9xPvAKfFN1RFE1s1khTkkkyj3uxD955Dc3x8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KFVVQZ3ePFeu5Pzktxm6FMmPQMbUZWom8MFq7U8eYQyp7uUCt6qjUQTwaefyNxrxNzUuaJYh8L35gMghfG1aBJU",
  "key1": "rUsTgKNcymfLXtwFZqyGkJUegrqw1UMwQyoLz45DHNU1omPmxaQgJrWcSg2Xfp1ebbF7fFDbGmWf28KB9aR3Ebd",
  "key2": "36qnacAMPwnhcPvq9YjPp7MXY2Wi4gDVYNitCmpHKpLuhvdDLwMBHYdRNgr4e4kpvEUW9cPad8xX3Qh8DpGUjhF7",
  "key3": "2e8BWN3XxJTXRQ6d3uYLBLJ7Nqso2RC5jgziGLug4onjCrvza2hocV7fBKBMtmXcojuQxMWPjoBL6xArQZw6bvi",
  "key4": "3pDSmscj58yZTqnPcNZ5dpYfU5QLsAR3fhs8AzKDsxikZaNnx56HNvcziv11Ybuvaq7TLih8xWtDY5EdZMy2yUGA",
  "key5": "5udxyiYQ55Sh1ad79wk4ncnutxL54pBhKkiLWXe2dk3waLhr1ZCoxEue8ywNi89pQuFwqC1SErHCXHkc1GK7jTKA",
  "key6": "4ofHs4qCLKBVyypsDk7EdycPmHrVssTR7YQSdxvCrfcxGNVskQKdd3kvC2rWJgBtrVMGNFQoT1bnkUftDbsCKZuP",
  "key7": "4p7VvgzeEM92qC4Zkpba3x55oBRM6eAkgXN3SPVTPtdvEgxR6WRytepnkiw8P32kgDGGRkgQLd4B94cBKVtPaUe1",
  "key8": "5Kro7WenXKaGTHJtGcderBAUpLarGj1hRodkbf2SCgPUDTd84b21gHzW2QdUzksQ9885wdd9LPYHtyvXfJ4dyuRJ",
  "key9": "2AsdRs7c1JGXHDgt95SzxKPrTZELSnD8ndPAz7uThYGnR4dMobs2H8hwPeea8AGL1QRPvSXGjwQSgJVyq9zLEvxe",
  "key10": "21HAeMHiHaxwZPbjhG6H3Rap4tGsp5y2qYfCRevN7CbA6ERzdmXYASZJqgrwPShYZfdurgdwcbRu56hfxQGyL1CV",
  "key11": "2ojK4FGcBQJSi9NfgozFDuhwsZE45P2BgGi3GG96vqSeR5o6xiTewitPd9oUaaGMF1krUyNbugY6XY4XGKuPbVA9",
  "key12": "2dQEbKsk42fakvekb44mxNfnNfPSQ3S18u8wGoxqR2wzRSbuFfRHHjGoXF2yrS5jFpJqA6C1xSCMsxbWK9oubCfF",
  "key13": "3E8J4zYqMycdkXT9Xr49KRsULVc6Hyykx6WWbK6Xgz59ivMf7f7N3qV1t4xqHoMVLJUrjstXmB7s4jhTcwVoQ9AP",
  "key14": "3Rxi3RcDVHCY6nY2yPAV9QiFS8YmWFiromXA9G3p2rEb6XCH8z6dRG1L1FHxmtEhpELTFtx4r8yaZEbo3koh4rov",
  "key15": "66XsfmTYnvwBKCxYQirhCbaP2t2GmeZKDL7nZhnGsKAatJWzRY9Z4qTvALbYaQy9kjtDLXYEGjADPYDdrr4fokvX",
  "key16": "FH4zQv2x9NwBZFBQLJzgWu1uEHeKQxG8829NvFtLPc1orvnn8grMUsPLeVZJCdqC9tQbXL3etTAP19KSGdJeEQo",
  "key17": "4JxH9exRH1x1hAyvTeNTALbFupv1cwhBd7WdJ86F8KP3zdNhMXhKYGQFHiL8K8sgF54zrnz53GzRdVxGAuiuJgen",
  "key18": "2e7TVdZX2VYqu5ZXGjYtsAYeL2kP2VEBB3opHR7HCdc9TvGCE1pSkX5AVEczLmLjpnCsTUKyJ9TLjtQTmxtW7qDW",
  "key19": "5bpGpwj9dG6YqvCuCcYemHTLbLYTBXSwq6kyYBMvYaC6KSfMxVod7NS2GoGMwKQgvX59Qvu9j2UjHup8RFG6mfFF",
  "key20": "2XRqxmWT4bcpkSkxEszF1ZsWHuKq5HPicdLbNqMjXbzfwb8R86sCBkxkxdLT2WisPQFNn219wRHn81pDgniXAsiR",
  "key21": "2wphLqeQJ11rvHRGKmb8MWjyFgeN9ZPEVnMqbAPvY6xuMYwbRnacJsCMnYjYiA4syQqFm55nimki8T3yB7PWyWd1",
  "key22": "5byNt7wVws7y9p7VL5x9idPtQojhKYUvApQyrprMZ3pDc59v8RVVKxkk3NHL3KYSXWoZhj93d8aSVZ1WQGtvqibi",
  "key23": "2H7QAywEzDHsENppim2ssn1Eeo4qaZr4hLGJiNZkRoQufrz872SZJsKSBJESouLJBqTjkmm14DjeaCrW7SdQN1AT",
  "key24": "5nNTfHkYCucLPp4kevUh2RJZvo9pfwWcGMUBQMdJoFxk2CdUnstsqJDbufX5AwyGwAZ5jZMMvo9jRpP8KCtSwcud",
  "key25": "2wFVyosMPyaJwMEnnmrN55qerme6T97UiVBwhezHwfCFCMejhZunBYHSSE5gw7Rejc1hGP3ZGST1BFhzdF8svP16",
  "key26": "FirfeZFLuq7NvP7JUPiGUA2GEJn8TjG97tryzFA8YkfP1zriTy9cmdzARZfNHbxJN6Z3yjTDFk6rLUQd2qUiETr",
  "key27": "3UckdGgFfWwR3PdGbri1MrhgmNrKaMa99h9c2USWK83QpdaN5bDC3wg25eKKtamTr2bBv2NwfPQMCYqryhi8AYie",
  "key28": "cNHwiDUudFyQoRobpNBGEVMt6ExuErvS3eFLmidT6bQegHZt4o8hfWs9JJ7xyyDsJQGeGeeCHbieSze4KRMeWkf",
  "key29": "36Qaq72TsG7uNByGtqwEXcHG6ZkSFeEjnZuNCpUtApsm1P4BVigZ4RyX3YAcmwAk2Nqgc6jeCVbMRfmTboDXv1RE",
  "key30": "25PUfRD3XmJ8LehgyKkdefw9eRnwHMAKSxJ59aEL8kqeMCmM1zseXtEoyJusL9xZtFzQws7uUzATBjJuQmcLp99C"
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
