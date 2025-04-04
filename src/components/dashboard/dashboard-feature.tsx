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
    "dtQTZgy2MmXXb7hFscZiSiLzA6Vd616fixzdeXcHEccbf5QdKFw4McphH9SnmarCtrVPM3Ptdkx8jGN1Bh8yBeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28znJkgvbf98t6XGbktRoYydX6FhafFhWqRSHA8n5KhFSpxqkHBzzPxneqnK36ReiWiMpmoKsJdmUzVz7x7mW1yu",
  "key1": "4Wxx25oaokF6tcLZU3bHfpsiKmu6TW7B8cFHdGs7ghjRtkkDKiYur8P94YqqABSFJJ12X29qJupC3BbE4Z8TXFEJ",
  "key2": "4iYQSz1ZPvKySk31W4kaZAYW4Uq5NR46FrM74EyMuoTjeiAzRQSUhzCFBRVNrN54VvsBJAF4zR2gzwq9DJK4b1vU",
  "key3": "UaSM4q12Rjc31LL4No4w9zUzfS6ni8zuugK7vkUDo772LKcXYpTsAE8yNCLSiScnUN8ecof8KSr32RhKrYwuKS8",
  "key4": "3DRhKd2hWNvGiygKMgm8cogLCF7XuVyDmEVfEyWX27SYiSzSCw5CzLuuS9R7m2s39oRaTzQLvfgJEb8nkaiyUFph",
  "key5": "41sJEaJRxVtHQXsGbtL13TgD5TUXtYRPvmo9qtAhpQ7iUaHc1cvkqwaV6VmVD8VT6DeANNSfvzSSfvCmjQqRbFKJ",
  "key6": "2VaJDGEsbS1Zw9EbwSEFTv692aaXHkHvVYtfxb8dHAdkZgpi2X9TXGrYDt4et53cLN8kHwZJyLF8U1D4vsn2YCJH",
  "key7": "2QzVYqg8pRsGnzkF82GW9TZYB6bTMPUYDzdQTZYsVahXmzgR1Zg3Hw7USafuewZJdmPq3aA35Gpqa4o4DPcySQFm",
  "key8": "4zjBP9nB7gML292tXKvRMGvmV7fa38qSAPcuWq6KYjTxEm28yTaToKfUbb6eeN4ySv5rqgAq16eNvVZLU5HazTPL",
  "key9": "H2HsHfPbuvWZch3hAaW6xoGdLPcd9gKyksi8k41j2s1ZMUscyKJdq2VQ9TwvEvJffkY43YkqPDSdA91f9vfdrqj",
  "key10": "3J3KDgWNcpisWyiRmPU3t462D2vFnUCa83Waen5hMrnZ9g1YpHdgyshAjna383z5bvx4HhJAahNBy3adUphu9ZEG",
  "key11": "2tVqWMtvYVgX6XfGWK5pUJTAKzLowTMtc4ysq5Q8C1CDmY5Puu1BWmFq8kndKKujiyTrMgGhgKfDEtmbsowxBQBW",
  "key12": "3a2RZCbPpTLB4qGqMtVTdhcnoxTYm8at26kWsPWKg4w6NCNtJTVrrmdxtMT28NkHTjZDxdaHtD9MwGEtqmzHiNLR",
  "key13": "3uSiYqjih4Ndjc7TFwbGtUX5gqhNo7XBdvTwvCNo5qJLHupdBvc89dDAKtCLNm12bQQN5URGNMjw7e4NYWY1AaMY",
  "key14": "5a8SwUssDnBmtRBLMWcN3ehFgrmcNWXrn7hfs1he4CKhp6mV2thU1CVYCecpBKe63NtCpo6FdGZZ1dTp4ZGwGLYe",
  "key15": "2pbiommb3KtXgEJwmkj8eQWQMtSgZBVZmQQuEBFTdvJDyKW1XD6tkuFu75CcqZvrjgkDz9DyCSmcoBgWZEmQkbK2",
  "key16": "x4ooPZJ1qko92eSD1mvYp6HKRZ4jRXGj6BuEGZXArY8UBy3GbPnupbxWvZkdgrV4hUQydEQtyjDqsxLUqfx8mro",
  "key17": "5PMTe8PJcPht2eYDPadUwX1n5z9Qak2ycaJWCwqW42AHBnjJwZToRQbYk9ygHhGqxtgbELJ5n4trQdheETRbTsjT",
  "key18": "3ZQRuJDh99u6dFF15qtezr3vsxF5J4FiXMBuKEzPrt4yWvssVXJDhh99vLnzE4rQBmFcdxhPVpxLrJmUbfGve29A",
  "key19": "4kGT5r7hiSRcMACFDgZHSUcLA3sZEAjrtTaqezRAep6mcP3aWhTMNgxjhm5rXuiGZ24waexk8sadP3qrdDT9EJYT",
  "key20": "jya88ChZndC8kqGpZ6Giey6a2GLxmWgiBsyNiDcfu1ffDyNBDopkucwS8uSfGo7Tgu4tjSDxBE3ymS9RR68jM9g",
  "key21": "QjBp2i3UzGdjPtMwn2EUMxHGjxM6jrzeoXs9iRzKRGPd5eZZA2tW5YE24euXN91JfDLzwKDYwY9r1AFhmDVdZMV",
  "key22": "4EVQDBYHF5smMxmaCSmX6CWaduv5VSgWHcefb6iG7SFmasJHT8eUefDtrf6wtUh8AThPPtqECgBYeTjxmoFAQFLu",
  "key23": "tRxXMN6e6Ga89S8xJzYjAztpHWd3PXKquJtJnPggBSjzz7L1WsK2VUJaP452KJsbbEwwTEDToTreKJoZuRAPEJT",
  "key24": "2oRPaCQz2nGYY8apSwGKc1KAATcrue92WcQYh1nU1m5Sge2TSChtw74tgvq8TWGqN5CphquvvWeqAskJ4H1qQcty",
  "key25": "34NmkGZN4KakeC4jy1rpC5s1tBn3Q7SFiMRVgDYNyn75KxGTh1YQgirQ9rL6DgEEWsr2bW7TjRc9DAaok8ovVv5",
  "key26": "3JXxN67W7JDC8uLqKwqrh8gtUJxZ7Yz3xcmpGJMvkWnVXEDewwHJRzwx995UhoqDwqHYs55eKnbbQ44vxBMprnTm",
  "key27": "3ufFd3wvNLSNEi2YaxJ2A8vkweK8S5gVjvjYoahd3Ssxr9QxCThpHHWQZpGxLdoGFnqhgak8cPnnXKTcypaxJ1uD",
  "key28": "5eis3hnmkhVNYtcRTF43KJJ3oDWPDihx7RJzcyKpjxDFzsznzthbGJNjrTwFNv3Udah2i2BSJrMgR7fhQJEojdRA",
  "key29": "3WDdph7siU2svjZeoDFKdhrvLNm53T3gwERa4x3qYu4Lrmru47KhXSyQmhywYEXf8Geebokj8BKLoxJmK8MRtxXR",
  "key30": "5tgnp2WmEfSjE385mt8MMFLNpuG1wayamWKGNpiSxixiJgSbzY1hc4KcTRGHz4hQNyMM3HL6pA9kehoGryeqfn3x",
  "key31": "55s1p7YXs62zFo5e9dra2Aud8hr8nREryEt5cRivwAZpkHTJsGNPor9FnW1SSooNrTcfPRwUtbsZSjACvP7rLSTt"
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
