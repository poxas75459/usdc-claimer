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
    "2TaDw2ExgTxMScmx4NE8udigkZAhg8bPQL9pr1V2Tny3hrmMj5sEoySXDMK3u9WfeVwdqg7MvW7Mp2QF4ps7wFVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGUfBKtUiAmFKx1SqL5VabJ1Wq7Dpb8Vob9T37sHJQ88Y6kmCGP6m4wigrnMu9cKde8V5PjxRVvpdyRSScXTKaM",
  "key1": "4p4MWYnFkXVJx4U7erRwZAusgDjP3ZPHs1jtE26PW6VNs7ShK5CvDAVLfWWRXzdyHDLsPLAhNKZfsgv2putFxnez",
  "key2": "4s1ok8mxnoei8XTGBVGRuD8iAHmjc4kTCoY3ytySX5Xr17rNShH8TggzAdq8DJjePaSLvA8suqKU8Ws9xchvcSdG",
  "key3": "4XXe5v7nQtggT46zGUUXR7sdQn98NV2DyFSv3rWUNqSwZGBehYn6zpAFLvBRakBf1ivzXmDLCUzYbo7By9hwm7k9",
  "key4": "3VGvKsRE8YQC13Anajm4HafnY1yKA7twSZxiTJKcbf3kcABYZV6DnJEUkNYnwhfq83Ngi1kPaTwAqxQddAk6J3Wg",
  "key5": "5VRpx4ZU3AZJujUDYFUVdjpeuLnUMUUic18jdm96AaMKEjcwjRGnLZfcM4RUnpfD1dBExiXqVNs5dVEaX1jooxyR",
  "key6": "3ranZVN2q8t8doBTcShEgX4QAggfqvDQauaes5mgkkX4kTXgJEhmUSxPzGRqLL94D4SXg1AsLtsmD5DtS8iyXZgF",
  "key7": "3hWBtXeGD6B2xCj2PCLXdPH89mAQ9BX35MCSZzDCdQj3DnRz5uKB4n3Gpet8NsTD88bQ2s1xP8GcZGLoyth13VU5",
  "key8": "41piTHwH5uhMpZV6oVckPEWh6eabmRWkrB2i98npkUsrfebKfNyZAC5uEdB3C2KeBWfVL1HPRMXxGfDgYyvQRVnH",
  "key9": "2JD9qoGFM5hpcDudaovE8DczyFUszdea2dgMqUa74nh7m4CTUcDAPGK9NymMb8QZ7LgcA3cxJ9XzqyoUBV4CCxad",
  "key10": "22yGhRzdXVV1AAEgmYNCTKZNXtYdpsMi9Sd2YkYHs14WSjMdqTHajuzZ8exSgYoJww3PTVDnLNB9bizH2eNA7G1b",
  "key11": "3Apt2X74Q3dnVNRWJiySgzKrRo6bC5uKoRHyeAKaKy5T6r4T8wDS5MLLx2xo1Bj9i5tZfQYLCPuPgduL62Hy34jB",
  "key12": "32EFno5pWAgXwP4arZ9ck6fmLMFEgaNzkXkzdRWbnHxdMoDYs5QtP8RP73huzL8c8cwSLQFMf14XY8rWcsExzvYs",
  "key13": "4v2yh8bf5ECYZDfQZkEPvejennNwBMrVx95eyg1vkMTmGrhWYCaWZBXTa4FZuztTiw2xX1vSvJYPZuhm9kCsHsfN",
  "key14": "62tV8twuAouTd5vNTSJsDY9v5fn6hUXymv9ecXN7KPsYXA9UUDg2yDiYopMq2qYPXhb115yLJJWPb7Xw4x1gceyj",
  "key15": "2GUEJUANY9vKxMoYFhgy3Nw59R4mLoEpqmcEZfo1u2z2uKJWVDfTKdXHbU1x8z4fDKZ9F8d39iPt6bW9qiZYZfmF",
  "key16": "4XerGSXwMJyET4cUq3aC7aLydCyGa7r1RutUEMzfD4Kdr7BPs7Zzv122EcyGrW5yNq2vCWxtG45Uz2SisqvgxMuq",
  "key17": "QG7pnGJqDLL3B1J1iemKs39xYaUvZRFLYa2Zerir8J1Z8wkwwM4UNcDkMdqbhurKavDbex2y2eKx6mwostNAA52",
  "key18": "2Gog9howsd5ZGeM96n9c5BLQn47VSD1wMvhViuDyU6tS4ZgjgUeV6QKwBnPBuEJGBYezwmjx4JkcC2tRSMk4BvVB",
  "key19": "5wFQUKopU1t9yFUHDncwn2G9TkHA7ZoJqksasMXKjsxpJZsLdFmYZa5bWa2GrYe225vJRphtkCApxGv8Yc6A24LG",
  "key20": "a2Rp8uTWcY2JHRCBEsor75U1nbD5WrU78k2XXxMoasKFtKpWXpJ1hq2RrdMBymWMSECJCWJAnTX5d9fWssDe2aV",
  "key21": "5CvyxWG1HGZY91nxYjGHZKDjzhVEg4KzdKF2z3A9EEmaZX9w7qkj4JMqaWeGwxvkP2vCqfE4QpUrEYSChUEXG2jN",
  "key22": "vrN7RYbMi2po3qddfKxCHXKb47EqsoRx49poPWeQLZcU2BnGoi5wR4cvaFXABRU2ea3jxc8xGCaTkxSdb3weeRG",
  "key23": "3Vc4q7VL4g5Rvy56iJj1pnADUbkBotLqGM21PUDYaWYJuzTBP4Ph3S8v1XC2abrN4yaVUQVQgRvQPxVAN5wywXsg",
  "key24": "2Nvnr4RcSKqQ9avc7KcVREoStBEEu3fwbc9iiaLHdQkju7faHgB6NvNLebe18mAXLP8HXuqTvyDsBrz5yTunqjS5",
  "key25": "4pBZeHNEJjQnBLYcEKTj44QknYNMk2VikZ4w6SdhpLfvmd1nxhPcqqcmt8jFuePBDa1UEDW2AN3SUjoTqTXfeTeu",
  "key26": "Ee23QZhNrN85xS94fe3VKuZ4cq66unGuwwGhnCJEvudD457tvusVkEL5eFVdAaUB7vvktKd2DLnTxZN1FP5F1zj",
  "key27": "3KX6nj9LJv3eEVrrVA2Jb66PydQTPfyEBhGz3fAzwMiHH7Z45JxQHH3SQqVocDnxbj1PENYURMmJfgEjmLKguhnJ",
  "key28": "5RB5PrgMGzBBsDyQUommKcgr9xd1UjWf6z3t3S9Z3ZHBVSG69HwmDVz5RDKHH8JKwMWSPq1UAYFj81vFEgEdKQQq"
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
