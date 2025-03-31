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
    "3ru1PtkgrkCpKCbTUeChwBYyn5ejMeSKdSsZjZc7Fa9kmMY2V1kKouUtba59UkxAjwqwRZtTmiCX7Bxu5bvtDXY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zxe7VHDSf8BL8FCPmtTuy2kKXk65ASCMtSHsQv3VCpJadL22ciJkEc3A9BZGXVpQ8gySvqxFGt3vhyHgUi7stXx",
  "key1": "3pVDFCctbwv6nPvV5URqnvqeQE8nJCheC9qDovxQRvQ5PamWMVCzkJVMtZdnTnZichTK1SJy7i65U76Ms3v1KMKs",
  "key2": "2oLHoDzoN8jsGiYP9FvMF7zn266sSrVqyzMzA2EbAjT76acMAABnY72TzPgEBPBiJS9jxPSw6mP38NSfdVZSBRBW",
  "key3": "5Nt3vPMyvfJAHC3ehF4uFtnWU2c4fuCqCUbhQe6WJM8aTwrovyUsY7Y1vt77FwwqDDzKL3P5nupw8m4PuVMqHE97",
  "key4": "5DHy9WGTQnA76J94khwNC89CwrD2wVf6k2E5kqv23VamTCaQC31U2g5kw1vzUPzbmD7zpmMDbvwJSrLwEYs5m3dr",
  "key5": "5tvU75LwybeLm1ndzDo3heQUntC6d5MQ6d7NM3Xi1r6HqBbiiHs7kbuwhktkkxFjA83HT9V6972oN1Dvt9eqnTau",
  "key6": "HwJR9h5nKKo7FLLSKWnhMTxVfzbdbcLGsETADyeacw4HCayDbhrAYxTTav6tyG7LdWPy3qBKUr14Ti4KxhN2kkA",
  "key7": "2qhaf8R1PMQF1jrsTYcma5NLMZRsfKpgv41V2gWVZLxCecWPLgDRvQiWjwef8M1PPHf8XHJEUtHpNYejCRdSY8id",
  "key8": "5XR7gtDoRwLEtnECRJgUMQRfafmtmJS69J5rRPU6EsMkN1Swwu5xp35z6UFe5eXKFoy8wSoKYDs266LaRAYBoeiq",
  "key9": "97dPpNnuB5ZUkJrsaTZ8av1LwKD2Jjq6UnPsMwpVjY1AH7WKmFRDvySWFUCYcXzVizW1V9v6sLMzKkRXoFb73Fe",
  "key10": "264Eh2NfCzZr76ihk4KU8NKuLgr9fMu8u23ifbmtzrM98JGh4M4meLMzfPj8ZtrbtMkZn7Q7uMYJLfHxYdUZ94ux",
  "key11": "3LQu64EFTLCL624aQjqyzGxRhMeXQjvg1uHEhey48yaAosVgzZAbVUL4ZUZhYiiy1M68PPLsMKDwbPbLfuChkvu2",
  "key12": "34TrHMeDCcHdFKxeedRPDk9ocmUWwrF25wXiL24FEJz5dUkds7UdsYCgXWDs8Gx4PQAxRV74hSAsCpsdzjBU7P3C",
  "key13": "282BbNSmidGLpMXhUySfW48yTudWQyEeq3VMUnLPo6PqV5d7SEeyMznVmDSCfRw7tGHysx11BJBR4L2EJAxWL44P",
  "key14": "ouxtCrp4VBr9omE7zYBjKopLcP55o3LfpTAMnAYUCCuYoFhFqdts6MEyudPbXw7GPbAfHDYKNZWLL8Ebnh1Sd6V",
  "key15": "t3ajE8HbDUqxWgXERBs9FHrMfYCS5vLrrwULLHi68xA7aEtqHpe3j75hcCZcvEU9HuSQxJ2Vjp6SGM2x4WFg2T8",
  "key16": "5sQyk917iq9acQGG2WKR3k2ANvh4JPEonn5UvKDKZU7z74Lx1gx9v14GHg6n1sbsaLwy74DYFUVXp7P3GTcoFKfi",
  "key17": "295aGXnsR2eyjSY2QtfjvTPhgRg9opZGv733Nuoh79qvt1Ps6wQw3vRdQc5tPWwQrPE9gq4n81SEZFommodDcpEA",
  "key18": "2guFJKT86yhcan52cs9tDiPLDHUajjvowctsezrjXh1Q8xJtPZKpGsw648V7uT5P85eiN8nXdV2AxEM5Pgfr3LE4",
  "key19": "43e6zTga7bjUnszqZvwkDSh9zEYibqqxPWHaEQkZJRNZevjnp4MNHcSn9xSJotWBRUDseSEiLEkmU6bRGdjbLmr8",
  "key20": "3bNH43mt8Pkpfjqzy13vuuoQHozwcCZu1p46CekKLLcRsfvFWZKtAiDRN5bTBmyUVrHRw57hgJ9kTnoZAsUT619y",
  "key21": "34XBRSZi59qJnAUokUyjrXchqyRqCVNFHxRdvoRcrqxrZAU7mL7zQyEEDv6ujgFstD4ZsdfVyN2KAoT5Kp5o6rer",
  "key22": "3E5YGUe9yA4jWNf4HkQfzSPvkcZg3ppkG6JY24idXuFDgdEf8GEPXdioRejcWoNTiTPEJLAgofWL9PUAfcCcjU6E",
  "key23": "2J8kjsw6r29sWa587bjL7k5LpEwjGFREtjv9RA8Bpx8JaStkmMp6kr7Ko3VXvg8YseBjzWHwdM6PHhESdzHUjuv4",
  "key24": "3srSXEVBZ9i4KxudkW9hoA3X2UA342nTiq8tT8uNA72xmnzn1PyVyNMdWzbRo93UJNivSjGHpTCdALCofHnLrsZV",
  "key25": "4Yoi9LCNNpPzSwgLYmFjUzEnHibPDD53oehAPKqqYsaZF4v6yzbr9dRbfoGiyB1kkbrPMEPYNN3rf2NSZxBPX4vc",
  "key26": "21khgipyMyRVnkWtkxhHPyPd83P8K7NTecWayJAUondyBzgBG5xa2XN7aLZEjsaeP4YLbsuGru74ewj6Uefabham",
  "key27": "4T72jfj3b9T33PKE7nH4TKdfzUfdnHRLYbp8fpiSFMkLShBGncq2eHEJvuHzMRKzJT9opinXiXHPHuFx5VRbw22F",
  "key28": "d5ZnLvTfxJPq97w8BqUGGZHR5F6amxeoat1wSkvFfZvsAMFUSCkH9GcYxfGJUAKTuUKGFg75CBEDfHXy2wwDdAr",
  "key29": "2BpifsayzDL7EFDmg2sLLLgBW3hzfhrYHtLRyaVbHBnDxQGvT5oTELoW1YVGVgUJZHeRHfpwJrEf1rw7jamR1G8W",
  "key30": "4VHw9bQvy4kXzvyVBZSKejU1RyTLcLxMSQsXcW46Go4MsyjUzQYNf8w8tUKsXz4k5T5FNzzfQkn1EqPxASUP4WsY",
  "key31": "3ABU8aM5KChHL3xskRjADzD7iDpxsKbcuuuHD4Tc3FYyb6kP9PNvh5fkRW5ydxn9VnVKtmFQF623b7RanZqYdK5r",
  "key32": "5rWciNMBPtQW1XYb6Gsj2bBaw8FPBLTJ5ac5tPQKXiwMEPY8ytgxRPfVUThCZ7wFiECQKawi92veEHA9bYXhejYi",
  "key33": "5vhidWAPHw3FXNzbhCf9UsTArca3vtdyNTwmSMvk7iqSkAC6H4pj8tWoBryNV8gibd8LCSFMsbtTfH6eHHVxRhEp",
  "key34": "xTH5sb3wEN6euhX19V57mHceFsMYPnqWHse5FKcar7uK8vSnszQHNuRCZRv7HKY9AbzztzTRx6U7zhCUPRYuF8T",
  "key35": "4pjRDuSG5FcpzGyrDSsUybwsvG87AVGuYbcoRpPRXitAicxCJD433T1LsgKGxajhwd79RZPDAvqKZiLEkYDTajW6",
  "key36": "4y1VwBq8AXFUFDnE1iycRJs66DQmmo9WxjovbPF2DKmrMwXpwMsjAbGzepwudUgSUUxArosPi4rWcLKH8B64pnp1",
  "key37": "4mEpVfnmhLazip7TUGR2HaxUDki519q82oAuJFXSHkYdu17WyqZ5K3GpCFAcxhDd1VVrrKS1eoFg42APCH8fzFzh",
  "key38": "5xcbwoXMzaCn1pkFLksScREDTynHKafLUB6kFqu8UWpnzSmJwanjHJ7QJDJ8Xbs8T9JwwtrjBgvm3ENMJd33SVKq",
  "key39": "2pMAdscZJsUuqf8W5SMnR3sKu66UBCNUxsqr7ZGLQgKmGrQet6Gp74PPRx64BaCLzV37zxgTUubQ9vEenu97HNda",
  "key40": "5pB9HewSYr5wNsrYUBNyp3V1MZ2fkks82K1N217a1M92eB1tHXidpGdGAnUNwX6JLi9WiF7n2bPTKFzicYMeEWDC",
  "key41": "55rhnRxP3rUgUR2ChfCBF2nNEmTqddaWYjvef8hFCu6Wp2oMAv7UhGgzGcNTp3cieep5JNb8usSfnmRjZWBn3Jus",
  "key42": "27BptspeBuPKs9v9faqusMAKSn9RwrXqT58xmfmxckwBGgjE1reWfRP26KTUFJnmMtN8WMcGCx9jNUYoVdURPJuW",
  "key43": "5sjjAaCTESo88GEaTzFaP52i6g5ecknscJZbeGrC9Nmkj8n47fKFWwtrihtaE4GaLfGpFSvYgaykpeEByCa6PPLe"
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
