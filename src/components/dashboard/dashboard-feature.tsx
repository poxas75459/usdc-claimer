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
    "39Vk37qoozmNw8dwa2bd8HMtfcSHAeToaL7BMLEc4rTbVEgmKSmcaBMQFCMPnnS1Qyi9V58KkgJvXMFBer2he7FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TR2RbD34p7qfmHygTx9zMgSKxdA93wfgDq2v97NqSgCfdsduiCuzr4HjhbQX26TmEroeGrMZ1nDiisJwms2UZSU",
  "key1": "3DaykrQhcy8YGPAUecEWWFXXyaN5db3p1dFUMxzVq1wfeWj4gSGWPBXpgFrDnxV5THthft7Teaq2EKhuEpt3xQxN",
  "key2": "DzHDrPAZDbMrssBR5iY8sFmeTTCFqVWXasHTZRncAZQmwdDWMSdZijcP3ZDgXs3CwgU9RG8uHFkHk2zZ1swbtTu",
  "key3": "2GVdTB48CDTUP7RjQj2hXw7hhE2huovD4Xaw5zLpywC2A7vzVgc5549iLphw85VK4WiL1PmBTgk3r8iSrkYMZ2xa",
  "key4": "qNfdjFoJ4GpgmiaTyGKPCGb8aT5N7jXWb17usyxmk6LUXZJqDw2KErkkButdohXR8E3nURZVJCfcaECeYdKu8BM",
  "key5": "4RWXhNcLxAY7xK7WdskXrbz484Qr1VCBW8uiE2jTCs4jX84JF8q8rE7ixyhtzygD2Mqow75xicZfVXU698PhPhug",
  "key6": "4hHj6t3Ur3TxE9VNwT9QBx2Jckwd8YeEcx8BEVcpnMFgWyuLJT9p176UWVBqny54raaaRVAXPdcLQaCeXHMHUv56",
  "key7": "2c4AaVAA6dBaw7tqHZE9SdKLKH4qiUwLTpG5G2bvUMQ3DoxL8XpXUoGq3aczvPcCNGEqN4jWNHWMFjXV49fe7rpa",
  "key8": "2oBVikf3igXVkhDmvr4VHuKpTHniessC5p6v7Dm6HuFP77o1droXFG1QGE59KM3RMjVDzLJ65at3cZarfEtHdz2d",
  "key9": "zVsfgjWRqwVqwSYDXQuqm19vZEeh57c5V929rEVJciELh7uvYg3fwGkxHkNEAW4p9ci612CeohBPF7ewLvv6sqB",
  "key10": "4XyHFHqeLMEiPox3ZZ1fJWk9BCzAQgabM8PnimFz8BJWUN2BL8cGWLNw3hcJxTsun73ZP7WQ4ccdgfUocF6Ls88S",
  "key11": "5RsmiAbb5WZPagAs2Y7dtVycKzAYUQnWTZkqF62NDbptLhJoCgwvS4wXahNse3SQpDL4UUPCZr41fSgVQ1XnqMv7",
  "key12": "3VyYyMdSxNWtVAD4bGe7GC6RBrjrKkh71cSF7ZRN3sWMu1EEmfB5MTXSWg2TQuo7zQBS7e59RafrjWoHyfjTudtX",
  "key13": "4uQ6XTCNmJLZZUEVJ6zfygt64X1yfU24hJma2Nj3dyXZudk4jVTbwy72kzJKk2n7bvmqzDxRt4qenYDBgnVpnhHT",
  "key14": "3fJ1EkfZK9MRe8YRud5JupNnwtKTQRgvLfBkQkDLnJBCngh6WaRCNpjqqQxeHts4qnVTZKFA3WgLdvah8D5FPS6F",
  "key15": "5p3gT792bFcejnW95Gh3Anqns7hNLfZq2RXwN9GrmqkovSStxFJUyz3129f6oyeqnpuauXzErRmKKX4cKNJk9khz",
  "key16": "2wACeVWpei1tpckhDKDyvxTDCkA2umkcY4Lz1kZPTS3e3CdpspujTEfFksEGPeQNSH3aN5N7mC985JFkVb9qt8BB",
  "key17": "25tcQkPte644Hx1X6rFRc8biqSYSn79kcCvbme3BpmRdcxnqCsm7exZXDbrtDs1XeFqfitsTbvBJr3sWqAeHC2q5",
  "key18": "2KHMXL5HYrRHnxXwCiGUCBRYTmqsUyVjzQ3we2YiqVSGosRF8iJiHvQTA2tyKA31LMTa41SUcvzXdWCj5Lv73CR1",
  "key19": "5TbM6d6fCFATRpk6votPSm97v47VivL4qsU3VA9jLQxyshs3UStQdRykKBb56BcHqspnWf4m4b2Bhd4REwL1rzZ7",
  "key20": "47aHh1GnMy4zDd8iiVMkf9ZhFtQKsWAs3utK3vF7TKqaavaWMNUWkFSPJoxtLbNS3J27G7Ub9P6m2rmJiCvtcS9F",
  "key21": "55f5nhdfw7Tss2hrQPnjU7JHNSKbYfqxqCkddud9zy98QurXRNEJSrmgHHiE7NyhMGDpmeYHVsoqo9c3ktiDnVjp",
  "key22": "ADshKCebxCC54ECZzbKL6teA5og1i8y5WBxsHHrjvUsCa88ytULojGT1Zt3t5X4a9JJSJoN2fci2U1sJyoriaqB",
  "key23": "2bs76npB28cbdGpDBMNosG5cxKT94NQ4HE7Wd4a4CqwQ1qD9XyMYVfgnBPN1yHbpfSRefxUYMybJuAMJEckktzgN",
  "key24": "5jd5qtYVrwJcWM9oJWBgRSRaamLEmBvS6YRHbnAXeBEHYxNDoDq1ZygCC4sDJPioshCqTq4TCo8Jhh23EubTrZVy",
  "key25": "3t1AXnQb6atNcy2oRnyqkRQpSDam9Bi58PMNRyphDVPAgM7Un8Pxxubi6YNYykaqk3YMQZoHrtK6GV5H7doUygFG",
  "key26": "jAKRiaJxJXEkEzbhJzjaAjc8wv73csepqsTvx8Eh7RkFLmdjo8iMULnEcutmeeVDm3YH2z491rxDxMHcPHKexcg"
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
