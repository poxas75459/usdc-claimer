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
    "3N1p5mRXyDkjhe4HsbuQgQDb5My2gixDLayuF7PBV14v6ced6kMkPBktf1Khg7zHarzVLVSiVadB1Tu9kLqWL8Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V8prAhpH7R38aaaET6JL2eaSHFaP1GCv71nyFjRoE8Wt2qDWogfKWc2nPGbhjZs1bodPiqmJUvmSCANypMKf7XU",
  "key1": "3F5tvbwbbEJ7N8oeQ6ihTqnUE6Z4b4dchDGLobL5brBTZ7VsFn2sAMrDfFcPvkze66vP9AJPi4Wbw6VHQpMtnZS4",
  "key2": "GvNmHReoWpjomca1Lofv3mrUvee4jrVkA4ibdNGmcP3WToCxPL5YhjYUK4nivxoA5beNs5AaNZx26ZvHDQTX4CG",
  "key3": "2SynHjwKMZ6UwHFqyBJSYCGk3RenLPVPg46sMdR5cG1C9W5zwGAyvpqmPqi3dC95ZoBwFL5mzMHa14zqUR5qEmDd",
  "key4": "5Um1Fe5pDCVdDQKgPubK3dEqPjWPL8DtcjftzbNhQuPNCmeSsZSEh7fHsdf1D2H1QFGgVAE3mZocYnN7UzhiQ5Ur",
  "key5": "3mkEEnoreaZa9zZU6B8swNTQks3fi4tEN5iBhKjPXC3oK23uB9qrRJBT5cTkiKgtMRC9n9S7CW1VArSzfiEE8MQm",
  "key6": "3jELG6qEpTwsXuVtUx7s6c3mi4dHDDY5UfBc3oncj5BAmP4v64D3RC3iLYwPZ9VeK1QA8xwQcXQg9e78fLvijXH5",
  "key7": "2q4FMQ8x8BZCUZFfePoZiw63omThv824seQyAv1SuNTsChTFvyK959sHEfvV8ZQrv3TeB1JwZyP6Bgn3vxr3ye6m",
  "key8": "37qmK3E9z6id5qiAG8wzrA8hsogWMHTfShqomaaqs9nfErvzA1j9uCpzVdHdC9rjh3HrhWZWdELpyCwprXDQV1fW",
  "key9": "rihdtik6e3TPMzWTjsSXL3ep8FonhwUpotfo5HG8fp4DfnnzgKh6Vq7y86hUJiDWnw7B2fP8Z9Wumu22gjPZz3a",
  "key10": "2yCQY6savkAtkSeeyDSJqFqr3euWnsKyE5AmCne7vpgGJneaNPfgPhQCaJu56rYge3rRu5LxSxr3m5zYk5Twqg36",
  "key11": "5xS7739BHJop99uaPbqQeVELfW1vBSL77ynJDWZcphNCg9L8vsMyfETaTatRhgBbLVAS7SUwpqtctM2dKrW116ku",
  "key12": "i4H7UP78vhbvKyjFjZLK64oTbLv3eP8joJ35BPoXEpQWSCLDPxem7Rb724t2Q3QcPmearM2L3YTm4YkprKZFdmM",
  "key13": "4hDGCTqnEGaouHFwne5h37jQBB85DYjhfFZ44Gk6vhzSt5z2MSX34iSo8H7U88hymbhoXWtQ8jZEeerAkHR16fBf",
  "key14": "53NCiyWDDKvtc5m8VWiaraoFPjKcdt3wrVWf41tjwEBjwzUb5y8K2VsFGZf7SHC3kbVtLX4Hhhnp6NYfWe5ppShj",
  "key15": "4CmmEE9C9nPAcR3JEJZhPb2GQ11ohymLPQqm83akuKzA99LCyhdZiDorgJ94NxPL1SX2ActXP9FVpg652nor2u5f",
  "key16": "NMTmrPyEmeHpnmZRk4fx7fak2oSYELEP4t718a8cAoUoz42CYdA5EfMoJz38tvd1Ls7Fop7ZzHdv7tgg7ByVukL",
  "key17": "2xpfDKTvZJaDwY4a7w9Z8MWzz9QWbcE4vuMnCXfgSE5zbRgCGuZeWQVFrkgh6374X5JA2QxUPg7cXUvBtJ7xxyd4",
  "key18": "5SRGJjvvTpBi6h1uX8wDTo8y5KEeP91A92Wt4pG53uTifacnPyBdiEfof2ZroQUk53k8Y1yGu8Aqw1WSN814hMJM",
  "key19": "63RQZ8cb6p4Q6gzt73HTfBN18MYzJeZpsVdK3wY5D6iwDuKY4n3zeRuzhdhMuNDHAQaG1Qdpyc81niGYfoAZK5Kf",
  "key20": "2B3vW3dULRvfnGH9QdekkNxRSQnTEQL3cNCPtfMZvWAVquvadXbEy2p5nxNtHMamB7wLQoSfWYbVhtYtUbHYe4Jp",
  "key21": "4abCnJpnLh1MiexQfUwrjStjwq2buvSmfZRGT8ZfRWqppG23Xb6zBJUAb5GHEPH8pPHXjJYM58MZf6VsAArDYt3L",
  "key22": "22RTJCqKLJKPwjdF6qV54kyynnpX8tYhw3JheqoQHAnq1SL8kMv6jQGxEU4TmchrYyJnobchGxp4SXZ7qe51h6Rx",
  "key23": "Vfdz1UtBTYERBTUFzv5r4Zdgh2fg4kaxdMAGLxZ5xTaFqGXb2ZX33UrHYozG1DFQ2BoQvswzh1wAqK3Madix5P9",
  "key24": "2VfF19EQD9WRW6Ryx6x2hnud1zH1aRNEc1maHRbXQRbB9sHpwhm3Egbes9MXKfVYYxiBXR9iuvrBfjUsf82qtzXZ",
  "key25": "5aG3Ara4dGwkokiKpaa2U9zHuiKJLS2UY396eWiQX1BngjPtsNCSvJxSoHPB5rgah7VtJEpyXhJHbo44C99txVY7",
  "key26": "3DKEm1pecqzvvvCUnCSxWguWE29wkXdpyryHBngBizDxmy8y9vBSaBR16vrd9hALRDbVxdV2wm7d2JTbAgyBWwP6",
  "key27": "4aSuhzcyaN7QqXX8zZzEJgCZETKewEai9FP219BoASAWdvseSH7iUc67kL5gumjrQ8ggoNJf6RVUXAhDF24yJfE8"
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
