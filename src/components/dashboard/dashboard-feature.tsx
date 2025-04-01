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
    "3KyQ6t7xuLENPuWJ72a91pzgbpeKauP2ZtAR2M5deYiZXANm2uxGnkuRaekWdGa31B6b4nXL4gCmrdpL3ZFZCrSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5fTbJN6EGr1Ujo6e5576SiPJtkTwXVQuhqvevWcxYa69uHtDxMNdGWvvJ2Qc1Kcv3tSzZiMbN2EsjvT9FADcpR",
  "key1": "4DKCB8j2N1mYhLjqdBRrPExr2X4P2TerjL9zXLBrtdjoGtiSRxZj1Mtd6ZVWLbbqXRV4mbmsp83KbAfTBUUXfUFW",
  "key2": "1yw7GCFHwqK4eg4VidpJpuHw3kEYBqqUrwCLhjHQz2e2tPoic3LWc1mojg8E6iR6ftyEZWx8Lrm1H9N7xUiaC8u",
  "key3": "nzLKeTUuynkg2pc27ZtebfwQmPvTMXhtDbdd24Cv3PazL4ZrDSzsxFsprwjNHtSStWWWfvL1eeQimFnD3dWqTUj",
  "key4": "38yvkXx3PFcPqe69qGHnJyRq2P9vAHYMynKSfBVYop2phYmN4ijjqnvJGuL81ALP28bK52a1unQPgBE3uhbqGM2D",
  "key5": "5naLX5MxcVUVXe2VrWCfsGLCBR3tAXQAD4vx2ViJxjToB44rCQnYPKgXC4bauqJUmNtuUwMs1U5WY5ghpw8B2XeR",
  "key6": "5u63u4vDbKsGjNJTGixRWVUeccqiyeGzhyiVmpDFy8k1aTJSBPAf4WutAfYPsxtwc656Rr2w7s4mA11Rh7p3KzFw",
  "key7": "qhRVmURcVX8ZCi8LoPa9wvDSe1boxMK52kPKoYGocEWJRNiVkK8WndEKUeUhhbD7GEoTV9qr4CRhu1zxA3XTfJj",
  "key8": "5WmU2CGm6QTF5uyqyZJuCzVmnEFahmxoi4hEtzEPDffXCaS5JfSMk1ofhK8GchzEkh981oJpJXLERc5siNEWaQmJ",
  "key9": "5vTg4iwTSvLoA78LinAndbHL1hHafQQU7hbtqAo23rBVuSrthUwhzXECnStR347YbTB8A7o4tHn2nA1UTiuNsh7c",
  "key10": "2FGDYJczYMwqU3Q8PCvdH5AEZ5K6oieoUsptx4fgCehcTNrJKgDghpY6PxurBM8ZEfhMtrzTW7yXvbPag1xJHPXN",
  "key11": "4zzbHrUrUyZ8o1JWJg5aA29pv2zdpysiq8eAJ9Q89XfJVMjT3QEhq2eVT1zM317zPMhQcrkWiD6Hg9NjJyzpVhJa",
  "key12": "2fWm1ECKg8nK5STUfdfCQRssMzN6ynvXYuAya54MwED7vb5gLn1H6iFL7yeatbbTAy5ocpVbHuCMy1aMvcUqyfiw",
  "key13": "29eHngayVDhNu7o4EXn34m9SxEZr3rirV78wcVNwyBayN592S1N2qg2oHeouZTP8SbT8tHdTqv2B2GwzGsKZ1T1B",
  "key14": "53B68yEecg5Y2ZFABJrQJ6izX2mCcdCBCjkefPLauE5228a5Trdu6UhCiM7sh9NHnoUhEm44ptZMPCNqkuSnZwXM",
  "key15": "2GQprKMEdb7Lqy8E3JxkoNLb4uozQTaZggbuyaqkxxieFT54ERT5DQdLLgdtgv4wDjrJ4XkPyiMHpQktjx5Pq9S1",
  "key16": "4q14onUfM8jBWiX1ieVVCwQvRoaQqVaz3dbeVx1msEBnDGgLkpmokGL7gaqYXWK1aB89efD1p9zBXdYfYbCXQArT",
  "key17": "5h6boxe81TNkCfUPu49DWaZ77ZL4TR9XgxRvF7afd24sS9WmSgnorvpBPwmhfAvEGQ6X9bJwpoiCyV1ZNNrEvCAS",
  "key18": "5Hi4vjPEqXTuaDHMrXLNuGRHUFGQ23oXV3sSiWnTy8tnNiHqwqwPwogVDjpr4kwvTxpepaq7dLkBJTjxQS9SmDjp",
  "key19": "5iYGNojDTAViYhUPiraRDrQDJoH9CqzDrCH2HAdGFUCzrQKxiCHPBekTvG81sbCRvZyjaBtvMUbBPTB47obnRXJc",
  "key20": "5b8Hqe1DekzzUSW1PAcvwDSnuXyUyW6PjTNQ9yyYUa3HacPeKRvDcR9shuxykwo4RF9Ft4CgDwbezU61xqcFuiDS",
  "key21": "2SNTfKJ1S97MkxRWFsxgmohyizy6U4dmLf7Q7XovaExi8PqSuKoZ4gMZYdkTLCtweggAmhpNDMACC86SXTsY67oS",
  "key22": "5tA85jeSyMJa3FxbxMKaWqs5WXL53ySLoRFEHYzk5srp8Wovrbg7usEpTaWopBT2VWuXnygnH67Pdr4YcSnHb3uR",
  "key23": "3J4MC4Vyp1zF5WygoNmvkS5Avhu9btYMMF7CzgE87JkN882qqgTat89siqHAjFqx32wj5uRozex3Y8hq6nucGeQo",
  "key24": "54haQEgWmTEDfGpsZvCexhfvHw6hAu78yrxL87vyjRiNS1MXDaghXYRVmdxZfedD7YKkv6SkhYfJjc8wrkkHnun9",
  "key25": "4Hg75dQTZMQH1zyoMeq5gMzM99PWxnpSF5nfnGZQ3WrkPAy1XyerFTtfAkkKUgDfsnffvbenUMyzEsE4GByeNADP",
  "key26": "9DTjSAhQ7wLoDJSAWp4cSxnHFUcT7XZ9Yn9iETXAGPqXAKtLMNGcLTNXm9QgERhHkRMdmDetdRqoHLBbZkxMii2"
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
