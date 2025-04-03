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
    "4cXqbPqtxbEmFDp67nG3cad89xkUwiCvGQ2HWLv9MwBhU511K7qHtsGPK77Tn2UzxJtVoudqysF78CvH9aAW6AMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zvnEuwjHYDJqcuMm2KiNLRs5EwCmHfBGFzuxv2mR8DoY9Up9dVVuv9YjJUNHud3VCq9sJ9XQWTabm9e5W6hQpSf",
  "key1": "3ycpetB3oQs6xs3nsn3Zjg6jgA19qRpCxRK9qrPFvrLNoF8LbxCuVyyV9deqstYCo3su2HircEXH8xZY3zbQv6SR",
  "key2": "5QXc5RNNHK8wDnvEVVPFT476FPxMVhSCc6JqGzKYanQM6t3c4dNwEhAzkxkgTMR598bpR2pzPtbXfiKqJqMCboJD",
  "key3": "5L2DpmBXN1RGdWFCKrhtYBxV9Zvde7tQyXdDbcKmc2a9dA2wTxbGzHmCRSARZMx7EAiHCj4QEKnT1Rj9ZEz546CT",
  "key4": "62PPJHva6gKtzySk12DRB9VSckw4n18Zz1UwxGak4uWEarvyDfk5h18LF1LUwU2Cx16FdVFKZXx629Qav9hgC6C8",
  "key5": "ucaesTcKBdXJKJzXCBJr2VaXAAxTFAcXBosKxbYR95ZZtspfmnaDQR8y5uWdvQ1g4L1gihS63jMXRJZEhsesmq9",
  "key6": "5xTK2H7Qio7HJ7gVqUCtu6BZJvrxTi581XkP897VLykPMmX5JagMajhMkDymuyTGhzDaetX171qCQ3tDiLpoKuXL",
  "key7": "2DFSYGFTbScon87F32b3GRFmdpjwRdBiuhNCSnFHYZnA33QjyhFAQfdU9wfoLfvceFBAAtk6HtMJfgkdRdjn65aq",
  "key8": "2kHTb1E7wqqhdTx4PNwfTaXfrWxC3u4k1KMgkaN5AodS87WJnG2i7fCdy1L9hHurBLWUVKDz3JZG2w3mwXmmgJdS",
  "key9": "4aMuseeHYbp4kxuaXNHYtQ8FehUkfUdNrsqRuJ3npjNcu33qNccYkFurQzMo2Q3XxcaLzdMwzw1XrgXP8AegQPLP",
  "key10": "3RQ27R6nx1J1UcJDpsnFsqGMTsMjASvRtRphosVYR7fA24oyYSEK7pdfwLt7wB7W2GkgEmefpME8wuRuN9yqrQ3M",
  "key11": "4cJXowGxBQSqVyFuxKeo3WV9vAp9jCP8N7FuQ6Eci54U5CEcuPpDKZGLkYEYsLMeEicpD5YYyrtgARVxFktU3eBw",
  "key12": "4uxhZdvb3iXy4ofUXjBJMAHXmMZ5sfFisWyV6JaBbbeo2nWXDRTKo5FfCbT797HKMoZXysm8u5N4dqJQ6nVisMBT",
  "key13": "ZVBaXJRafiwT7gm2iquvjVCqr2mjEUarViTEH24RTYjj7D59qnNu6FUkoszVx2kt9jmhe9JfRzXfjTadNfvimmV",
  "key14": "15fDMtsKnehqFhUMUoMXAfGMXGZy3vWVRx1T3n3jYYg7znxXe2EoJjpKx6UismSEW5mJxWVEFxb4qg5zTXrrmNw",
  "key15": "hLZkq56Lic1oeEbFrT8CDM2TdNjQzEQmQo6c2vZ5ZLS643m8u9tMUBCp98YdhUZxqWS2MAU4fAdCzdzJcdjuGCH",
  "key16": "2EVxnWkLfHNsf43hWCL9dtU1x5jVmsQoUzcx2BeSwkGQeLzzGh6wMMWen9zcx32WZ1GUEGhBP2i1WCWT2aW4j3vp",
  "key17": "4A59VW8MN4Qy8MiP6Foq3DQfbZCnMwjZ7jGaxdf9QmUzwtY4tyzhR7oQRdqFxZm29x32SCok8G8eoKbuh1M5VcnF",
  "key18": "JhWuCd1wXACwtUmBgxTG9nH9AkPcHg8zAZhM1Gd9kzvvqTXUA1DgNapiKNZtjyFU9PEvNU7FZBNetuHWbEunNc5",
  "key19": "izyEo4eo5fKuzqoiyW2FH9e8kQKABGUMiPyEMo1Gj4d9QnFNtJ4A35uQgsxTvHSSM7sPkX28hg9WYQpPi77h3gs",
  "key20": "63Lu83mQWGtATY1DiE1ngvwZKZefrqcxaHL2VvjSGvYbG3sAAmJdfxw8HpGLB5xqPVTEbiZtqwHfcodd2twduNN2",
  "key21": "3SCxanRSuStT6YdERzCubaNgSCQrNVkwieFtbSpQ6qwCHDwAST42zfQXwTSjqpi3vzmj4dcm1BK8w5h5ojXimAF8",
  "key22": "4TogYCdtutEjbAgHMCYZGihY7bDXM7pXaWvNyVSy84Lxnqqy62MEHqi6AimciwiUaeqPojUDqAHTq7v7cbyok3o7",
  "key23": "3Xu9zrSNdLzrfDXBH24mGi85DC35zeY9Qg1HRXqyyRzhdh2J6Q2X4o25zF1NzBySfXVmm5jeWvfS7QefR9c5eBWQ",
  "key24": "5hRBCxMWXC4uF5o5d66kA5WpYyyJ3GdTNTo9zam7DoiEf8h86Rkb7dEip21f3wRhAhw5Wvb7GuKjzLWh4jewwzYm",
  "key25": "85DeuXMv5bwRHV1zcf5qCEkMiBKpRgKGVNoTysNCbL34Dzy8NDQBoZFYz78zbg9Gpf31t4SeQVJoMHA1eG8MwWX",
  "key26": "5vdixCpkmj76BA1QmJj2XaPv7hxp3WXj22K6jHWVYKn8SJW9UQEeVFf1goF4AsdUU52FnBJDyBTao1F3qfbqZwN7",
  "key27": "32cbFAhqzNmQkqfSBgeuZ7ZJ53jKQsisWZMSGQwAP2w9w6yRfP5SevXnXMn6ubu8mQp7hmKWiVxsTdqpbHGkii16",
  "key28": "3BHRXJbY64adjeQC3aWeAM1YfzVZkreWahWV5sUFz8ywT9zF7C7tJLV42VCVETGR6pRPuy6GJo3ZLuptt2imMugZ",
  "key29": "3JCFfSSfbK1asS7wJbW6xvoTDBQrK5hzQXJda2h483psK8cPHjhSimbdun2VSPYz5byiVT2MuVi1V6Dk6DbPA1nt",
  "key30": "DwyB6uAmMV48fUfcdXM2BLh41ckXQfn8QYRuZurhB4qt3b9vn9uGp3RhYQvFcwYxVqT2eCgY5TabZgDzdy5u6jw",
  "key31": "5PGu4CQp4jDMgzLVPSUMu1nCZxjXqqsvc2N8gZWqrFKC3itsoVfCn87Nm4fDcbHSSxXixCxvBApS6ZCqFWsUpN8b",
  "key32": "4zsi4TaoQSjyaqdYiXkrRpEvVRYyVyDYYkESiZdWRF3VKp2KV2RbZNMSGAHjGxwxdtGrdV85x2HuHbocgWDV6gBm"
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
