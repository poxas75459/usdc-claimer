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
    "NPmNgHDkMb7i29TzVsRsZgwAGstBfuHcBsdpFUiAaMTkQqDHhmPDvTjwKBnam2PTWVtNruuweVzjbN9ZLEk4oGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f4JVAmMLBPfkAnSfTVhCSMqhiX2ERh7sxhRLqYStc89tQbdfjk1iW3unDuGaetL3TQtzowwF4QYmfDGjSLYADnL",
  "key1": "5FcUFCmgdfj3XHUrYA7usS6bVnsmTeeNAGg9fG8kTKydxTahWaEQRTpRHpgqQECLyuKZ1ztGMNpLP2BHxwvKSi4E",
  "key2": "55xJxAfjYKfvFvxhMuQLUwcnSp82e1ZxZijg7gexDEfKGQKkx7vE1osf4bGmbyDaRPWw9zhX8yAUt6wAqX4ejQ3u",
  "key3": "3sKNAWDRS6F1qBtUj7rshV78wEuC6QLvwVL869jf5N4jUSGVT2KTTDMtTRtquNTrNXWQDsuPzPkBHuXm71bA7wkP",
  "key4": "2KNNkwoorGfKFSTUmqRmSp21bJcS6gBQhg4yYmLhrncGpCqwmBZcM2CVnYtQp6tqaS3GSETTSRwanEg9Bt9Q1vKC",
  "key5": "3GgE2kpat8k1LqUiC3D313cKpFPce6aJZnvEAMVGnKunCwentesQv8HFMzNbpgKUGao91ZjqFwNyVMs3CXoev4dY",
  "key6": "2ezFAidAZo4pYstj3gp7szdf9kYG9fQHJEx8win3ZWhphfR59cwxagFRU7JbyU5jN4qdo3RDPyi1PHoHbj3dJ3r",
  "key7": "2m8HcaYsnYf5Wst2Nxkg7XjJPyM2X1nEphFT4viTS7yYyXabjv1XrQ6skbVK2GSSG7zQBPhmhTnmQJWywLLDktxF",
  "key8": "5kCdhd4ypkJsMyRkDu2nQ4LW7Zm9D4xrZi5TGF2YDaPRDqFc3TbuvsiMdteQPAYnCqQjjjPDrCqzfiw7nt4HMSwU",
  "key9": "frjHyMhMTyq1ZL6H5YhFJCu3msMfqQ8B1XNE1FL9NSCWrDSBPGm5fRpFj4LhJA1F9uuj7VkY9BGWEnCT8vGe432",
  "key10": "3wdwAmPBAob6F1syFaCV8soEqbrkW5WEwwzmSREM6h8pD3Hb8rfJJGNPnWrgrCP6T4Q6ZdcrSSsxd4xLRMsBqvpn",
  "key11": "3rKD41fJiu6toR3iG4cgFjZuS6uHezLQrxSUmGqQbKrrKZWsBs6zUkEfNpfUfFQ1kuZSZoDgwYq93eXvvPj1vpQL",
  "key12": "P2Uvv4PLCig1h8w8xyUhQdRwLxogZf45wa7x7nXy5X8AcKwQBP84GN6gpLBQKEn5twMkx6KEqVSnQ5uLt4FHHXe",
  "key13": "3G9cv2CorGyk4cSoGmu6JoS8vUQ8QHeTwjVux88pnrxUFCGK5FszSqQERQjVstAByPa4Mq7jxzDiCcJq4QrT4QMA",
  "key14": "5hhsvo2Myo8HAhE848eH71xbidP3CN6jd12K6xNbmh9Bg5rsj4QWYdvQzyr8A1HECumEFRsviBgXgibGfvsg1jm",
  "key15": "4s5tuAJvkYco9nxNw6wtEXrvKe1YK5DUv7XMwweH8boPJmqCmNmbbFt5xEiDU6EetSXsDNVYUPQ7EDRUUVgceL9T",
  "key16": "3Gyt6xSgHooB8FWTCmDXy6o8YuF2Uzu2LHCZQ1kZb4uDN8pFKbjJkGfa2Ux1SfpCHWA2zGFAiZAJbsScW9an7VxR",
  "key17": "2uuFPL8t3p1LW9KGSaGKFwkh9kxw13cVUA9ykwcT85AXiBa6zv1ydNfk45NZGBRVVw1AkgqorWmWxMnyjt71ttGJ",
  "key18": "FwT4iix5fSLN3rWcrBQGV77TGLW475mshPVp9oLQKj625Vqu7T2U9K6WxeCeMZAR87i5ThmNjeFoZ8Z1aoyk6qE",
  "key19": "5ML3o3Th6T2TWRWzCBVUqNKkCvYWDD3RLB6scGBDf7C81iohq6LBGbPsHEQDjMyYrLmroB6ECTkEZVTodev3tg5X",
  "key20": "5eNnaPQbATZxTA2Tx8j7s6e4TstnGrhcctUwhB5NKzqAtQ6bMq6NEdCYUyoGQALzdrvkRvWjYUy2erAEiyQke4C6",
  "key21": "591tqbweQzyRJrifGi4knn3sHnsnHphJbWMtjsMjz1YH2huTt3jKy4mcVDEn4TzBQ8uvgX9z9LzvUF8ocyB7mAVp",
  "key22": "4vZmqmU27WCaoUWSki5ABJ7VFjgDC22oyppzLbTU5rSd1bCFeyDNXCm7zhAfo3tL6nSsRTLtd7nG9bFHPRvQCFG8",
  "key23": "3dkuRFKj95aEpYZF9Yg5nK6pmUoAWLjCTQuUpCWfp7abNaUcDrBLgCNCPbF5b7aA4zmzkQjM8Tiqji5WhPSegKxC",
  "key24": "4P5LGvi3XAkHAUWQB921eUzgNz39h3jvFcpAcU6nxxG8EfPp4jpr2fxvyeBGpgBvZE9PcFMTwvGvvLdjCuGGmWcT",
  "key25": "5dzViaWa5mXcgdPRTkE2SgEKySPQQr3QK9txjCYM1MUF7tXPjWY3DWoaPCfJ5hhoubVB163Pem6inZBBzxpxugh5",
  "key26": "4oZjyNGX8FudDuXbQYSMT9xUq1ZWL5PGuw79ozSgAPMbSbF9sAHrg8s1yxSKuzNgaAT7uzjsnVf2zJjw2SYy7bzS"
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
