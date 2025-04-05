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
    "49PYWmG9HLbhgiF87JZXeWJf93Pybx2ecukW9Zx2GR3fSgPjzq6zGnNZNYR6quHa8cpXU5iTKRFQymC6hMvy6tpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JWcuCjDr8tNif93ovdEEMBL6rMyGESxMzGf6piMp3wnyocAyrPA9y5E2dryftcVQTdxzX7K12BsqNR4YbzYrG1W",
  "key1": "5DTHKuRd4aQcEQ5Yf9ek9yuhHT629cJ3nDXYegBAidXTBEAUvfoKsQqi29BssygF35xr9Yvy7n2b4a6zJPqgrQhn",
  "key2": "3YLkaiaWPoQvfidC8FRqLmDHEK7ij73a5bZqnr8YZ87TJ91jPJyijPRj6tosH19z85UTAHHRytsTCHgyaza8JRBk",
  "key3": "3kd5HGQfrvthVevhZ19nESpoHRjitmuDdhkY2KKg63q7cao6XwZWyS6jJ3yWHmMgK4F7nmi3sYcMMKV4Jk766ntL",
  "key4": "6433RWzQ17VxUnRAF4P31uUZsqWio8MJH4boZnEdPc4cPJAmYK2GnT4ocAtsb1GkysVSyjxeFEqCrdp2LFBja31q",
  "key5": "fDhnGxXD1MvRoadDFGbS5dyfpc3yKoDyM88eogbHpvHkWUXvPqmtfimbMW3R88xKHhCgHxgWdCFqkjXbNofL7jA",
  "key6": "JEfTcJrvTrwaTUiZhMBkxu6GDsQpKZC7q7tk281pt8qERQhtepqUNvgZbABaZcthxJjuBFpSQThT4kVQXJAEfYF",
  "key7": "2fZuytio6eRNJaxtr9XJyiJNm99UADaBi6urh7zAoRfhWar3P5FQbC54jDYAEAJ5YHKZqgiYNR38y4Q4cVMnvCF6",
  "key8": "2AEd4oMDfZyF4B5mc5XSmrUtV7L7jhC3czRvoxUZwP674q8P8juu8grAWErFPepckqeCMeCza7XJVb5vLSGNftYT",
  "key9": "uNBeTnVFEGQwDmZu5Nt4L1Q7pCVw44xuVoNAdra7nizGfMfWKUmtsdYp3nTZqS8Afu2EP1mjwF78LBPycdBThwi",
  "key10": "qzRhmFtDU9DAW5ugH3KUutbiKVAzVGWzUv4xcyyBfm53kUWNV6N4RTtbghfVV7dsgR4rMbfbatgGrE6ggA2mJTK",
  "key11": "4U897S6Uz2us1uU42nsVfJukLQQDfwnR9KeFd7fCFARoekk5L1gk8w1Wgd75ibrmAGyccm9k7RPuTMSWP27r25Pv",
  "key12": "dT3cz8bRVVzYhU6AjQwbcEQGTH5CPGyrAZXwgdyr7v7tqY8x2Msa6pVuMDcTStemediiHzbhuD75N5fMcmvqZng",
  "key13": "SEZQZbFsC2rpTNrxscUjrxfu1uG4MvNQSYVnndFcBRtjfBVTztygLiCijwBr2NJMiT3sut1MhzgarCKrKgUhYpw",
  "key14": "4SHEvSwyyCxRbJgYbay2S73i6zRHAfVY6uTHk3Pw9oRQgsK5ui75ACBFaP17gmPStU3knhwoCvHosrqdCA37kofs",
  "key15": "2woV4UCFcC8ExqbG74FrdcqixSACMrbDRpgF95q6fLGRXNkGFeEH59p4hu1MoQhzQZyLy4cFk6jV6AyVZQcZaQ26",
  "key16": "8pY4chQ6wraPauUTWSDMMJLbMw8RV1SRC9oHiJ6eHqd7TRRt85i7d44TLoPyovDbb3BFHvxqvKTvu9g4EffHDiv",
  "key17": "57RqEPCZdFzRuXbx6AFYv2TnEGLjRyaGfjwegbKA8B8ixwyvkTqJDDW8djPAof6e5GZX7b3Pg6cjyV9WruCdT9Te",
  "key18": "4TP1LtMfveQQveXRM1zAqAYrfX7w6kyZrKe5WXEeQqRx4F7AfuTbnX3kB6sZF7xPqNiZotVTjTJmZEhyV39NvNvP",
  "key19": "5w8u5dB4Ugf7GRPHw1odsFq7HHttDHuKHDyVxTeBxnGfDsRfc8pzfZ6CvCpGwKsh6Dw2Corf5y4b5gFYLuGM9r1x",
  "key20": "57fd6Nsh4k2ZWPQuEZjTxZXVKVcsHBpuVpCQsyU9EpnFQPng9bG6kBNdpnkkpPddTTMg1KyjR41xhYcjafpwPRJr",
  "key21": "LhCQiYC99ta1gv74K6gqrqoyVRC8EZjBNLK4gLGkqTJKyasRySKBBYeQ8kg3XA5QyeYHRwrLHT1zp32L4DPBxXH",
  "key22": "xvYcTJvCYNf4bhY5rB9om7NYudmYihM8wHB1A9Ls4YAGLDPowX6c61Zikb8EjA6NqPkFWjiVFswMQ15Qd9wSzCS",
  "key23": "YDmgJczT4HK7xD9W8QyRDYaHZVQ3SfbTG8L2Q8EKEvRg8A1sPq9ReqNRoq6ahc7Uft57NYBKBxt5M7ZJZugUoMn",
  "key24": "3rZVubDyHwrjZNX4xKfMD3dapzStSvL8b2MnsNaN81JBMfjC8j5YsLT5FiaYRk4f2kAhwwKLp3PkRtLmY4ePPB8x",
  "key25": "4hu9AGBEV3gRUbEkbkVqUsSBt8RqFdoHkT2TQKLLzRqGeEvXmfJtMSuFL5h29EUtkdNv3tTJppnLfeFq5ahjJat9",
  "key26": "2osmcp6avGRJnqgtdfjsmNFVHvZ2jpukhb3JAjXJKXJHmd2R2JAs5x3MXa4w7DAdnsq73cqvYhmhE64Z8PWx1mQJ",
  "key27": "5eZsAdjbr625h96xFQZbaQ8BQcicTuScG4jLdGJr7ZcnQX6pCKwBXyh9WYPfd9abG66gPmv8CSc9injChm1PAQQS",
  "key28": "4wFKxtJKcnTPGdumei7SCiLiAHY9aEXx7B2MnVA4nGyWV75ybm8ViEdigCrsYHDovubqq71Vhfd4oZ6F8fANah7d",
  "key29": "677FgjRAe4KHNaiMmrCBK1Qod1CvWoRxSR8gXcn5KuDcueKmcHjcJm9CVs13uAqzsTJ5TpQZPH8yp3wvaZhn4pj8"
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
