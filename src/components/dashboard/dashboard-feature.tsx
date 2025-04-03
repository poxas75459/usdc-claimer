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
    "4x7HBofJR2PUhZC21uLz2AN4Z1mepbcuGmwWZSyAYBPhyW3NPKih76x9Xde8N6z5cD1CgGPq17WfQn1N3zaFmG6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484d6PegT39HiPmBUiVXtqc274EG77LEf5fxrBhUNnik8NrRaHD9v9G1HXewUnmNpSbUYQ77sVUHAESMZPH1Tbs7",
  "key1": "5Sbew5vUdsK8G62wRqZhT2YsZNNEuQf2BKgiepkqQM5cD5qQAFKXY4SnzgHcAH2zuavyiPzw9wcaNdoeY17GbNhr",
  "key2": "4Ekf1cHxhNyzDSME3g3xo8U9MthGgQXErXZMnsFe8Su15WJEiDbNX8awnsAugN1zGUMa7G8sqBc8xbCRp7qhr7GY",
  "key3": "2zqChCts4tLYNhCrVtPj8rtBnZgrqjdCmYwhU4ahiACfJ36neJT4gfzSqR9BMNxskE8F5PLHQEsT9itHyAw1eKd4",
  "key4": "2Ykn6u4Bd4rRCCybgtqbq5pu5v7KrDchdw7nNKhFMV8HCWtAM6iYuKrKSarY1dHrGmAz8dH1a3HJNCw1EAeGkEZU",
  "key5": "5f3pbUuZoY2yiPCS6tTta54CaB9hnwe7jm7bKfCGwcMrBxevuCwb3s1SNLYvn8JmfuGzMaS8XFoC5gcp1aAEiTmN",
  "key6": "54QZQgxcWUaJmw8xbSuDFbmsejJo9BQ6aXnwZrF4PiY4gb1buhKUSSezwiXfSQmoH8cTvjy1fDX9S6Yg29whNhWq",
  "key7": "4YzZMxyWNswyWrHh9c2kKtqx1xDtfGT2TwchMZmAbAAQ5c9wYuqSW9PzxZxA19oHmpFac92w2piF9hhdP3hC3afS",
  "key8": "2voihfW4xZTgc6Y6sKQg9WquuGiZ7dGwDbV9bB9vHUxYbFNQgKn5niwFNmJWRAGMNmoJLJBiUgAVvZehEATh7Gmw",
  "key9": "3KRhtqR748FxRZWno8fdSZF7GmXKzT1qNHWfquw4SmrohgrEjxXpNJVZRNP7VbJJp2QhXigytSMDn19mocWQvvAj",
  "key10": "2B5csJcLEVVVQdBTjD3SyGeKG1LC2RNdSysnJKS3bT2WDGhhQjjgnLRMmYu37z8Wodk8mY5GLDYF8TiKA8pUVTwp",
  "key11": "3ewLZWnoXbCZx63H2jppqLS3Qw8GMkvzNiaWXLN3JWQfsSZGeUgWUqYB8eVnSV32egk4dJ3Zpg2UThZBjpMv8Ph6",
  "key12": "4LRBnQGTVwt3iBp4zCPdMcFqNYRfzV7fQZkyeyCG6td5w9HLZmiuRG8WtvUCpSYdaSTvRWzU6eaBJCbe4H8PwTv2",
  "key13": "4g8e9DwricPzL3iLGmcyUv7Mr5G66K9hEZicRdXQJ4bTfbNBcJ8MbhxSy6mUThQwbYxMC7o6mZmkRfQCJCnL7ojZ",
  "key14": "2Y8BiianyAxoLgx5vnZduLfgJpD4snpF51bwPLK5Rs4ZMoxim1pMQvmgMMfSZqv7KcMKpnrndP8QKbcAjdmfPDqp",
  "key15": "QAYwPbmkSrAUVHaddDTiTxsT596QpkFubZMyDBC6P7AGBfHPLQ4f8H9UKYgPCDMyBCTC4Lh6Vod2Sf5AtQmPc7o",
  "key16": "5SMCmrUACSqE8v29uRyH9wriiA7AJH95hqURgrXbpzjb1HSWPPzCHKJVGSNvVZxeSP9Xtye2BJ1iziLV17f9JefZ",
  "key17": "5wG2e6wsuqXPmbjxQ8npgdzidqiUahUAiCw8kswuDtr1XFyGMU3nXjvoFiticcTF6DwaPnPaY2ek2sqS1Jh46K8p",
  "key18": "3YKjks27CMPoVA8VRgRBXD6pTrR5KviKVZYiGf2yL6fE2CPrNqSCGZq2BqPZEZ2ocz4gA2jR26fNEh95qaUFFFn8",
  "key19": "4BMAjkxKHBPMmTKyX8Uu1V93c8WDEhVTcLcscaEabvg2KDnaHEeknZxtb5jQ9hLqaoqCFo28EEwdGebzmRUFsLTm",
  "key20": "2wUuPQdQLdcn859puK9EHZY6RZZGwQBUBiNSX8PTV2TCFuo2mykYsVoRoWxHGQQoL8v9BZxbU4cwZ39hzgJk6pTr",
  "key21": "3JwRVT3HRUXAm8nhM58uSXeRS7LBEnhiW7eDQRXHrTF13Q7o3CozoLbTzEuaDEiHwuzQGSMRrptBmPdNb3AHGr6T",
  "key22": "5Syt9Nb8QKyUW5xDVrrxW1nLuMSbjdxAqjebu86ThwbvjWbchi7fzhVAGBDsH4C272s2fm9Xy88zThPGbNpAaksW",
  "key23": "nbxUebxzRV8SrGK9BEqeN453Hn67dbCQxLnCWRuUmGQr8ivqZjYCqduLfj11erjZmu95qtKsthRjQHQF5vxiMS5",
  "key24": "4maQk1wmffVoQdDYD1EL8534AmM7ykHVp9g6skKmCwx6UFUmt8oDTwzoQMWSqhTv9ELcEb1deQ6AcoeksNYU8wrC",
  "key25": "25L9qT9kAbSYmnNmWTLNBZQ7wvqUbuY3cojcSXCiVpkmY1cQSX2cKMsqRdKD2uKK4orgK4kYrufj118cnFhHKv11",
  "key26": "bNkXLwBPzshZrSeP3FxkQquUi8t3eZninqqSRi3UjXdvTZiY1LXcLAcJEfAxjVMjwhC72ZEVtHsUukZz636RAaR",
  "key27": "5MxA5SPYsM6eekc5nZdLqjJmvdgq392xtQZGPBHcXXVuJMNchHytwh2FwZ3opRFX82Hpvjfp8B4tXLeeeKCPHgwj",
  "key28": "2zG6NLXctJp7Up2BPgPveHoj3xwEifruH2dkoRHmjP67QbyiVpaHE4EiqcfBGMKap4tf4S7Yk1VunNDHhuhoVoHB",
  "key29": "5Tac64xr3ypV1dktbjsVNEAfCbTGCQEcKeiYfvGzEyEcYCvBDRrjz1nuLSoZmpR3SBwSkQ7P2iHTYG8xCZ6HszDR",
  "key30": "4ysGbnbrFUzkzavjLEq3R9PmSwWQvBc15C723vVW6Yr6xomSt5xZbR5EdWt5w6rpiQg1yikHpap4vRUWkXWP7tGF"
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
