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
    "2KicTxwA4wyi88k1m2WC2eLHVnbofnwk6AewY2JfpG3Mvd6AZGTDxrkT7ATFWVR4KsC2mJSaqYpCWZQyZyb8oBKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcH1mdNAu8tiQMsZSuitHKoDGSC3gdy5Uo5AdHZsCgA3Fq1i8KHJshcM2Ao8d1AXsqrDXMxVX69jQZFxiqcjtfz",
  "key1": "mkCY4jRq9eB9im2aCPrT8zZQAZ5G5QnxdEFds6EHC4rH5BMAKDfntV3ofYTxZYXKYeCaDcXwdpWPQ9k4HBfbuhw",
  "key2": "5ZNGbpyatrfFz4zNXF5KBJmthn1fJ9L4criP3cTxChxPiudFMKzLK5vtdz9VreHu8cs7A87imSE82Lc6wmVPyw4T",
  "key3": "ZHbAPaVku4yUe3PskRS3yB69wjuWht6ieyRyc9TuTcyXKSDRz3oj3MbGSWRVRGjD13DBU1U6LHj8zE6StQ51eLb",
  "key4": "4KSzWZ223y5ea2HLoPYHPSvezXeQGDQAmQwHT4K228bH7Gpa4gEqQQEBgmymRGr2jGbvrKLFfDErrdpTSDE4Lo9M",
  "key5": "2mDMSpVPMgX8spDTettpxYPq67vKN8SDPN83AJ6zRkHJaut2reuLBfUQutpgLJgEZRQh6oRa4EQXiEj1AKaSdPY4",
  "key6": "5vxqkFFbebfvBA2DSm2XxZL7HCqGcopMkBB8aqJqZDpKSP9NVGi6HiHjRZASdCvKSTFQ5epjkHwHGJAS9td8LmLk",
  "key7": "3kuUTV5G2ct1MGT9c5eFtCpzeXSVQXjpz71XTUiWzCy1KThhHcfys6SWMbZH6AuxPqiv4Mz1MgAKfpymFyvBKb8t",
  "key8": "n2Saw7aJnk1GM2sLqshMNLeYg9pYe8UkVBPPq8pgH1AjB7sNWfCc993gJfFcWE6eUJUzWBn3msSXq7dpG6FPNfV",
  "key9": "3svpD8kvpxvgD2RSRTsB6ekL1onMykrSBSFc8WXa46epwa3xBgXRrDKqs7TW9cvdfZnnKtxcvoGdrsGHSRVsEgdu",
  "key10": "2dVD6NxPWorCQww3Y4v3fAq42kvRxTDyWLGQBCJz8EYjoYer5wt7nvtqa4G5hTw9M1K3XmfYPtgtnfPw73HksY3J",
  "key11": "45EQB7mvBjS7JUDBSXJi14PHE8Va9RTq649XKMazPQ8f99wRqnK6U6xVw4qmK26aYFwrhJZCZ2qfYWctDbhqTQEr",
  "key12": "49ZD5JjH4he657s9BTADqM12zgBdoRVFS5CS32EG7u6b3YqtLLgWoyDDb59EFSpQAy9VdEBJZRCS8tMB7qnDaqvv",
  "key13": "39fna45ckDALebUGWwPvSjJkaE5JQbRCYXiCUAz7LMjc6nBg8BnRhHee8gcLx4mA6bFd7wZD7J1SfkfPs1xxVqz8",
  "key14": "5dR5thgcb1tWyDw5uFGkpqA7UtibfK8Am3G7kb6yZbuTATbcXbP1Y2QsTmXYHGRpiNUxKjQWR4kebPs8Ben3inGs",
  "key15": "2oXi2dmVzufpv2qwaQs44s4bGWjrLtH8fLGFwvLLmpcNyLMLnacXynBo6nwfRpFpDhYNp9ss8JfmQgAhpND9V69t",
  "key16": "3nJU1mAZrUHpZTsi9nustjpV6RnMEQNRTwsoYBXwYM9Qx7S8AKviosYP4ZzQ5hHebmSN7yRosLmdMc2fP1cKxg5s",
  "key17": "4zUDPDHro16dTHBpsUNzRGzA1A45jiSMt9cAvHCqaHqWmp3qNBeqU2pAfuxpSqDjYV55Hf4qJfyTK7kU7UeCjGfu",
  "key18": "4owQq65dm1Kq3bkNweySBKTJPGpvdscy88BMswmwpJdjK6bBHaRameJCQPVEGzfoFS4Kw3jL6c1CJi4aUEfRMX2r",
  "key19": "2DENW8Lbpajh1hREJf7kxNCZ3zRocCmARqBvqTm6xVmKFpvDovxE2brx4cwJTAQvyvY5UhP71EBx5DBPRU4TfGmS",
  "key20": "3qc34UZwxUavbgyMdjNmp5FStQFsgm8vJUKfwbfJ9NQ2u5t46fGvd4oV547Jc5a4io6TxxKrUv8ck9iCavUvgHne",
  "key21": "3yS2q8EA3uiqSYKdPHpharTAo9kKqn43HTmTsMuvMztRFoUXa6dAGayrLxakSonYmqqtE2BPEndGwe87cN2WMsbK",
  "key22": "hDU9heui2A8CtpS3nA6sFEPrJWbWgmKrQ1oxVar5Lh4TyUyR91c9ug8xXfcKt4V4jz21Jy8dN2pb2hwvDXJPrds",
  "key23": "DrQz4fTrEDBBZjrk9s4CuEuQvbKojCikzaGiZ373pUpQoyaWKykxWiBPUZ3GsyZK7e1ako7GgfUyGosS2CadXRe",
  "key24": "35FLLx7ny1pRinLYdZi97YJ1VoV84cqbypwdhQKEkURhoZsE3HSRhXftgkz4qQWk1ZdxRvZsbta4LLG78tbXS4eA",
  "key25": "2fTQuAFDGisTYXzd4vuzAMrCRLCGheRdtApT7Ny19jcEMj34pXRbKpgKBvKHdsenPEBJQWgpUj97oauFVFv9zF9U",
  "key26": "5SzgjYV8fMHUJuoC5ej9bjTnyKjEQk5qhG44aKabRkBtiiYbP9nkkuNY4G3n8Gi8BR1hqZe9ndQsyhCNuRxMehhL",
  "key27": "5cCbhR28XoFzyRpLZNAdZ976wzPfULPNnFuBqUSrrNQMEah1iYFgLXd6ejj4ixcbm5HHpdaWFzNubJSkpBgAeW6M",
  "key28": "4bhZjnQZjREK2VpX5Gm7ToMd5BTtXaZb2BvjufZvzSWmvLRE2HayM7TWxwisiJ3Fs8GBKtE4yp64u6oaHdYSTXbz",
  "key29": "3SYQf6L6X2xDv6HDvEu6fsk1QdvZdqdnDoGhkLaM2qWrdK2V1hYGHMRJKjdBwCa1SvfYYDFkEGfTGcbLcZHBDAAa",
  "key30": "5UWq9xHyEBbUAR4qaHXmwUedVnqMV8N5HPvYc3qbWE5FNegVTmVHNd8vtHfRHerXgYraw7o3wczafPXvGWpSiDK8",
  "key31": "2yTP8dwXntjsJzPDajwGJMpKDg7P5G29qs1q4AUmZVFd7M9Vw7h28KKM54pGDJfmGSu9qKSUyPAbErVnTHHiVxrX",
  "key32": "2fbAkqjYwxGbomhwL9jiHKj7ZScmqAsuymrF58b1AqwboBqknm1upBiMxYwGbRHG6cU3dpzmispunbGE68cZUiR6"
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
