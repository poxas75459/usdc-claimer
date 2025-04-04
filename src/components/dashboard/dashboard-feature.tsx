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
    "3zzCoJSoC3oTNGwpA527n8o8Q15LwzSsn7DPTmNFzEgrvACTBXTcQ1eB8N5Y7TXPpFyZpu4XCZBa7X1chguYFQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvqoagkRkyfMwmF3YT2iYFdZfmCZDULQ9sGBJKgqA7XoyCF6zTMc79tMEerrmvK7gt2dVDsgba3kt6wG5XyYkuN",
  "key1": "2udoSL4mLVFWYdn5uEYP3H8kkBbkRYNpkgErjFiDu4HGk1rHAdUf8kaJyKXCBrHeM1hZYPk5Zfr7htUMGZ3ysrxa",
  "key2": "4sPFqAXsURMb6sHwQTm5XCgLERy8CBiTq1wQKh94ud6mPiD1RidehkTjLqKTgsmQ16RRn2jigAzUPLcP4Voxv22U",
  "key3": "3jTNKDKeP8LnqKGYfZ1veHdirQruyKEtEJug5aQKTBEziT4fYiovfRqWvirmV8xYg5SZsCVo93nn4MtyYcTYvug9",
  "key4": "3UsvL6gs97Q63pyoCaasSpFnba78jyF7cJ7W4kr2nsYw4mQY95UMZ7iBnF9a8pJyvLRzA6TDzNaAgtAzSiiWwGZV",
  "key5": "3EgSUVcfD1pN6cJZgzVrdrjKw5p87BjD2R3hohAVvjpETqhm3uuM4AppPzsUpG1FNGKxvFtTfhhLZhStJYd2mqou",
  "key6": "QDxEWM2Bo6kwYFJ2sRexSXKoSXizF9x4C94299x7cSWhUkFdPMRTcUArSxsageFgM6M2X7ENrbfYhZUrXyY7f8T",
  "key7": "27fqAkAP3k6AJwsKjzMYggkRgqaqcNmeLYWsHdPx1CkVdFx6fzHbsSHGWbBCX9Z3mDosSpYpFo3XRzvN9N6mYt6s",
  "key8": "4cLuCgtfRbwarZwghhVnSF8fFoJU6Rg9Ej1wsW35hMjqYWFqB7uwQ6vUKMcpiczukWkLsJqoKLHxHP2Dh2Yq3mrH",
  "key9": "BCWM8R8GGrg339KCzShQkeR7JyEuBLX7yk5PqUeLScaVwPQyFaRiFo5RPRrkkY9einVMmY2z8rRxjLt5XV2w39v",
  "key10": "ePh2GwnTxZGMaFXb7mCvDQAHJB38gYscew4ek4AqRY8LjMSguxixKnmwAuzXLw7u8arwtQD6V12N5rw6sgnEFin",
  "key11": "D5xJ1UpQHTGEd5nDL87uNFSWwZ9fSX5YqHrZamKFCqFnV7VY4oKcfFP1uQvqhMt8L52ynvcnz6b4We2PixDgFFV",
  "key12": "4YBqSjNpHCqhWx78FaNTSk83NY4prxawbaLq2RfLmUrAfFLbajsRjQVA6cfpKxsXrVx87jbNZdbwqNqRcKu4ax24",
  "key13": "2UThztY1W55NZgd425WUqgHJHKLJr1KgLQdU31nEm4AcXJMdVenFEwmUcq2oRqcvYKcFnt53oMk5hZEgi7ToFPK8",
  "key14": "667b84fawRx1ZRoZr7ifZ5u2Q4ekvxPFHXrf9uP349ipRMyXZHM5qFAWmVwNuWndhuVtkL2CtojKGKTFh4EVxMBP",
  "key15": "4AUZ4sBL2nBzVfJJi2CR6aQTcYB1D3HdJNQ9RBgXZcT7g2DWpGUP5FEQPbrvEmejfBYvuDxd7f2M8ED6JDqM23oU",
  "key16": "2cQtBFjJZwNjv8ZA4fEBw1PVeFyBg6eg6tMD6BLVu4DkkexSwa5Pqi7a6FMdwvP5NR9E5j3387dRXicGF6ZCnHyd",
  "key17": "2GXtQLt7F4fiWMukK9UgPM4vYe7NUmERrnX4ryFeapQrToaegGxBGYoPNztu2AjE2oNTnXxWFfHY5ZSNbYmdSBNF",
  "key18": "36WRm4SJiCKWkU7kFNsxgvMKVUjZ482vQh5861uW7g82C9Ry8oyjLGmYUadW3oT67Xwa7HPrgehE9TGQgBp3ud4G",
  "key19": "4gpagu43WgctgCTihYn9Ckwa1QQduF4c3AXRQa4mKDUJk4fxGTAGkT7dNDGeuLGUK5DRRkta6VmFPopFgrmKX9Lq",
  "key20": "51kQoBVqXpg3jvQdas3h5rVMGSeauUndGA8P54s3tms4emS9JKpjMqkjpjjQ8X3QsKatYwGPtucpAkTBbxBVFYAB",
  "key21": "4W7EWjkF6WBcPyAjQrWDCxHv6Qh2wc89AKnbsoT7yAMBSTR2HRYSToncmweorpsbuKS8BtmH7sJ7uVg6ZCJ8kL6B",
  "key22": "zcLMnfXjduswDx9dCEkT1k7wYnnd7Z9RdBSMEcKkSERju4qqpT443m7Sr8FQhwpTgQXd7ioxyBCdSQmJqUc5VnT",
  "key23": "645A6ZnWTm2AS2f7ociy6B96AijMcUgUJmSqtC8SptggDez21HC68kqKrdBhwrLxyDVQQ9oxYSv8qLyffLZQt67x",
  "key24": "5gi6EKXyHjFdLvb1SDpWxqDg4f9NeQ8N4zSZ2umjBSi5RSjr8SR6YPZgJvWgdFWycRTQzxc5Qpm1qqfqcQdupzrD",
  "key25": "DAUdTjRbHKoZ825sK14YZakFtNS6JeasRgHYYAFmq6L7NEnUo9MBSCj3LvvzJw73HGzTrLH5NLyM9rQX494QCXZ",
  "key26": "5Q19L5sVyqCcwu46yU2jmAePz7tP7XUtstEt1y9PgywyQBmsDAig9CfJYTskVpZPCz2hm28QQDremndvwc7T9os5",
  "key27": "4iVTxGXJwHah3GUsn8SXUk1RuDDRpGHFo6gkoDXZBdQkqNJvm5EvQ5vMp2SHZfP64evPrp1NRDCm8hkBCSXPAvkC",
  "key28": "63KuaRxjhx4zuw4bsdnCERyWUwDs8gYHE4Xm4KKdH1HCgG1CYxRcaiwfNFzpBip98mQzs78ftxq3EBQeoPHB1R8d",
  "key29": "4wMNSxWFMvBdZwCB45bZgauFVwF7JhzhnkVnEqDFucPZZXvqnAnfVBhRHBWQaiqHKsyudNRcQ76muEGw6AE39aDH",
  "key30": "3gyNtM8gZ4q7FrJ3TfP5SoLw3bNHALrxyMxMYM7MAvoSYioGZxHawK9ETKfoqLGBxQgHMKcpyr2UU7hXxHBFkDHP",
  "key31": "51YkvxdSTTgsuxwh4wbjR7jEHSzvXzdeg93Qa8WDmoqpcYL3NJz2kQQrUry4fNuw9VKjdXBm2HeCetcjGAybgq21",
  "key32": "2wL9ALSV29EUYcV7W586q7cKuHW7jYtXKVMBPPKS77XyoHZT3gW8WMT2iyWVyS9D6p9PFErZiH1EQKuS3bS2TsEG",
  "key33": "3gk55pkDWQpsEzzYAz9EWn2k9GWfWMABC926vxiTnEE5G4k3XU2hJ3C5tmgAK4Z8dMqYagSdFeVXrLc68HG9t1WX",
  "key34": "2DqygkBLRrWEUVVXe8q4zxUzqg3eEVEeXD6CCY5KtEpjkwiDLrwUGn2ru91LT5SFgCP41MkhZ289e89ZZCZpfoo1",
  "key35": "3Dv3guqyHr9rnheWwTyy7E5V28nfBLffvwXgcJUu8K6cX2Umvrf66P58zH5MYgGzws4ENydw7HLmGxteguVhrF39"
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
