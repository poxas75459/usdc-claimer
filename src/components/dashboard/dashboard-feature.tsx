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
    "5KxA4JgFuTqgpb5L9PzJkm5w3QdaZSecjrfNcNaxCf7AhmXAynRdjHuCcw81xRYLj4juhQ5HCHr2bub16kbRAhkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kk6pHuPJoVBzMcJ5nY8V6VDZXm9QfxZdDWjKnngRyGgwpgZSBMJucWErCpg1zw4FXuZxHMQfjcPbUT3dtjoxPMp",
  "key1": "2RvCgtaaMxjCEqmqybCXFw3ZfSCchSfpftwbpZyXTzKe4yfooKoiL4yJbnVmA8scDv5724iKrvQxpZTcFA7tVq2o",
  "key2": "4biKYdLiFRDBVdQwrsd73rTZy5uQMwwVMW5orcnJTdcqsmjuJzh2cs9fHhbiaUo2ZQfCngWtMnRGnL7YF8LgBy6d",
  "key3": "5aBtWbztiwi8oTf1Vsoy45qSYDf2GHokt63rfMZbr2J3trYAFiMeXqiZ9gzYL8bsjc9EoDzUfP39QMJNEhuJfjjc",
  "key4": "2SGdmczqrHWkbnhvA7PDURF2QkZ8eyo6H1xWckLgz97LDkY5JmMh5cuJrRRx64tBNZJoe3oPvKhUq19Noey3eNLz",
  "key5": "2AtRdCAtCE1Uy8hBvE1oozZSCFMDJtL5WFciiTX5SwGfmkDtSUegujsyH8vDZKD7i5XqGs7XT76PaREovpS2PNMg",
  "key6": "2z55iNTXfQ4xnx5VvAQzbyCB88cmeAPP3V9wcMUdfqZspuM55rDtBBAEAGuke5s5nEXdMZWUmS1FAkfq3TyKPNyc",
  "key7": "5jd3rqaMJRmp5EhqRYd1EDSHxtfzCvyTTLmeS77psfrFmJRNtzU5ZfTmftvaZzcC7uVep1bT5mYjSsEY4H5pv9RT",
  "key8": "2jAzjF1A6pev1YKXBD6gpumYsjMiM5B6wrFBTBWPVUY5rhwRZNPJsVGSRZ97SqVCKVfMtVA2HcrfxcMMYAvUF6Z7",
  "key9": "4HWKXiWmHxqofGPvkAQ4agcyMWC3sDhQiCwi649oVirtJnc9w1YTJXrjHPGtUhZr2TXwyduax1xN41LzXE5WcXK5",
  "key10": "5koKXb6CZj4L5N97Qd973WhF2q9QQ5W8iwDuf93AeRX6mpqFRffvEUNHduz1uu35rKtxmRrqamaDQtzKfY1bF9JA",
  "key11": "4f3KyGBuUH6JFEmh4G7K1zd9cUEqbLuxWAzW3bwzgKDQ2Md8G6UjCggWx775ZkxYhoiCBj7roqTD987JVhapr5Th",
  "key12": "2eCFqMXbWiFLjpwTnBoPu97eD2S1jkWxijED34dY3v4e2iNcb2tGmZSr95bKhGDZSnsHaT8eDmEB86AkNLmrqJGU",
  "key13": "2Ykv9T1Bny3FqeuXXbisgpDQFbvZ1xx681GexeSp9CCv6jWNNc3Rjp5Bd8sQE1X7bm1fKL7kGA8KcEwvMn1Px5AM",
  "key14": "4rTdFegMDAgwrxeyngjnhbZ4Yv6tKX8gUy4VsTpntJX94oqbwruzs82M3VsuPvb9B4z6xJoeZ81whBiSs3kSRE3K",
  "key15": "4TyJn2fUZ6rpYDKusdG9WudXHeERLanE4sb6iJEuYdq93T9AoK2SnjXvP8HxR3ngUPPV2kMdqSwUnV8oJQm3TWX8",
  "key16": "guVcmGpUzmSrkMshzAPdX7faPySCAztiBEXBzRCKWT9JjWnhwoJ4TwrpVsj1WUYkHK3P7xGjm3ypEaNxH5JEvkP",
  "key17": "2AUC9GY4Av5ggi2N2sEYn4bE4MPmoMdJKUF5zG7X7ox3SZbBpxNc72hgUH88LhV9SmCvLWMJEAPSP5FfDBXCPvZF",
  "key18": "3BvhC9r7TGqgXJVUjvj8kecnFcX2MCSZ52JZyqyD6bWTAeQ1dSG3kLjR6EaHeMcyz5VvPfZkz6W9Qe4NRZSgAeCo",
  "key19": "hfg9Ex6BPXXRcGYSETDt43XpYGen9JkDigHegMMxoH48WkRjsNY734jnCfCMBJBWignbDvHiauVVi64nd1JD8Bw",
  "key20": "4hBkbCdMzvPzJK8WAW3JAfFxizvyYYnLW6xtJwZfdnbXaeqjAFcvWmuxFJCX6o3Lh5MDiz6fWLMAs1FSM8HcxLTg",
  "key21": "1Z6zzQJpAviUJPvJDpw6A2SXttg6Yq2eFTwnqtUtvtpQ4ktWtGEm6Rv1SYVrHvfekPSxh9qgv2Czam9DBHSway9",
  "key22": "5LQS647Q7hRKrYv7gyRYoK13YXopR5tGH1fd9hR9XExapPYbUUKcRzTijPqi2MvgxJzJoVCYByiFfMNQhzLUoGFm",
  "key23": "59Lxbn9c2uTG3HbzEWLtZK5Y1htTA7ZENWLzFj1kRSfd5BNS8fyZaXKMfME7qMB3DakQtRviKDgcyUPZbRBm2q6T",
  "key24": "79Y3wshWzFm2fbYHwKdiPJTgboF658pDLwts5nFdLKNF2yyL7e43XEuawNPgnLWj1ZqiEV1FJMwkk2nge7UE715",
  "key25": "5TX37o7ykd4p3kimS9PJGStYabgQpjGyL5sie2N4axAkEkTct95Ftr2iVahxMvmWB6ZcYngp3fgionTmtw8QupNX",
  "key26": "3UJWNUfthByNbhyTgGuTJixY1QUt72uvGQiM29jppwZHgUVXpyhdUgWpJMaZgbtJ7yRWBgM8s2KHG7qAjw91jDkV",
  "key27": "4RkBsz5QEQTxUoxK4mQfK6PBbn12AsVfJ17Qx8FwYJnNkybVuPLdJsDdDH5b1jwBYzsExrLNEQPgA7dVfBvJoBMg"
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
