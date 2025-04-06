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
    "5Y8taQ9DBhjSTgC4tfv59iLDJq2AAnSe6ruXG7HeFjCvfBbUBK4q8V1vPA5Y7x2ddbXc3bFc7bbiSx7uX7ZtoB9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xoikRdbfyLBzQSKF1n2Mosym8WYeSfBygKovzhhrTXmzDeEvXdPwTHdHsCpKjWawYUauWbsiSE5yZyBH749ABNb",
  "key1": "3Qq49Y6X52XTEE5jfGLWLpg8opsVh5QAWpx3XRu3483iP2mso4enMC2yDd4YyPsWoSSkSsvLL5Wfe88W69EDryVo",
  "key2": "4GdUrgYPRYHZ1KFPTSumJzBaryWuxQ7tQFhZkFNWXgXiZcsMKn3jFrvmWcLTK5HTDZtmybprYQDEBZxdyboXbZAU",
  "key3": "4MTFYT4K6kbrZFv3YP2tYHsdpqBi76twerxQUgrreJ8GXV5ArwU1ygvnVvPJJvqKYggeimANAhA3ooS8aiqXmubS",
  "key4": "46ftNWLhAkCTDNZ2auo7TE1oz9rbsET5GgHTWycAtWV8xAmk7CFy6tsMWwz7QMhPRodJnbNkD4P8KyR91V7i2Gox",
  "key5": "2htdwZeaLpwHB3s6tjaNS25LUHdjxRiH8nBRD59pZmgvUw4U5F7LZ9aph3WL2bCUEuBKP6ob18aNdf37sW1Cn98V",
  "key6": "xgYZRow2MJYvSeitwWAJWxZw2qAcCHE1nPntMbUxVUGCAjsHZXbnQdgMyxweEYsNceGADN4JHX1R6YFT7kZQmR9",
  "key7": "5MG4zPXUEXohA7hvXWjccsfTJhzc5rqXbKnGq7nHYrP77WfppP6tjLGEj5PYFkaRpmz4Z527iJ263mMZCW67irTA",
  "key8": "33fTUjSDaunX62fU3J7rUDt9K3vtSfU1abTD7TxCGx8NmQdySB6vDDULTqeL54CBh1iG9jBWwfJPc2L8eur17hdF",
  "key9": "62psQHRtPChBreikqwCuHpbRQHbsSSxSkmhY8gGyWunznMi28bEd7Hwvm4N35bgfDjgm2jtnJ9hPPWFGXVti4BWd",
  "key10": "5m3QuRjemM17p9HypHGyhYc4x28k6oKJUaX5gGSJBQhX4TFq3M2oospo4aaz8pzXdyWLAgccb2kJRdhtLRZ26avS",
  "key11": "3pQP9UWpmuH4VAri2GmjFhjeKYbQFTVm527a2SE4i5ovQDFmYA37irjpziDUCzVwDbbnQfuRGf6vxrcngtWD8iRa",
  "key12": "rbQj3yJFhCmeR6peXhRsauempsrAMfHS81BzyyS45aCZ3yxVH9N5sF9NzJHAVerCfNuW6Xndgzs8LaxCi1Uuis7",
  "key13": "5oqySf6Rn8aGL61MvFBZbJpTMDv9pFFChVkGLpWMBnR15y9M9cmHMVS86CJMX1bXqrSS26Q6UNRWKtsbeMSNMxJH",
  "key14": "3vMdHzD77DiH4XTbsvT7KGTyLykc2HEY1mWc2FJjLq1mc4evN2Y39r3SLH4XDrVkw3M61sSRbsfwZWN65UNALVs3",
  "key15": "2PYCJZ2tfipASuHfCm6QwZkNbkKtTq8hP5WniCHM8wEVgx57Lz8njLjAkG2cErQSJMdrGQebQZQc9CCDf4pUCrWC",
  "key16": "65tZRighWvQWaD76J7zKjuAoXw5PQ5d7m2pwUpW1L73dviLMnWubL5p9QMqDsKhbD1A5mTKNn277Qe5CAek87uTJ",
  "key17": "5G7Q9FE93FFxv1Q4gCc8obuYQ5rbqWpnUkvuABXdQZ1YqbvinNLBGkT162BCf1urWsUM1tyQbXv6Es4MSMW1GRTb",
  "key18": "18GPZA7LCwr9Ap1XMYmQjdz6VxD9hmpCVrMmbGU9CQLpJWiNPBZkUsbdSwqSw4aUjhgPeYESXaK9CUGeNGmug25",
  "key19": "57zgf7ut4xogFVWJDxp2bg2dEzrXTCwmT6AWGcMbAfjMGyfzsMqL1CTrxNieNhyPd5CTFZfpbabzrk9PrYpLGdbh",
  "key20": "6s1SZEFDfocNMrHyf7GYrfY7sCj2x1e3kAeUP666Vf3PzD3kAimPLzgo9Sye3YDZgz6hGbwg72RnxzwdtdB35Wg",
  "key21": "678YCMKV32GgBcnyPHyqzwGAjpNG1Xh9dqaQycNdWPW8WxYNoHh2AeTNrDWm95wpYAyfvnYAkjnHKhSnQmhWqJ47",
  "key22": "5KvENdwQmmqvSjreJVrT9mPu7WLWUXyqjzPzxNCoRde2Gf5Awc5UStJkiVVJRa54Yv4eNU7EQ8AtLcPKPtdVfv2t",
  "key23": "4SVKacaexbFSTh4tNycgAakANb6CsXZrNnvWj3gaFTxwrPoqgjKPV2Nbpv1Nt8U8ZX7SP1upRLEmNajT996usGyE",
  "key24": "56J864VmPBvmvx5AJv1b33NsYv8cCRhh9cJHfcSbFmz9ZWgMc7867G6TgYzhcAb1sAaXc9qAEvV8zGYnyFHMTtJc",
  "key25": "41vbidFYjM9QnSbzPNEez3THMtd6ufy275B1bA7cY5hHkKUQDM528yiynDUoVvRuvoP2vyNAyPHQySVG9rv6twg1"
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
