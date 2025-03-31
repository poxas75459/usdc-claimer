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
    "4WDGJ5XG3iZXLRfZWUzbdB1deLGPBkqKuvSzF9XLyCTiLgvyhsM5Ew78WHwNRWrswVN7nZUJt4hnRWC92Ep8qJMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gzSo8CeXXC7cuz9AFEQ5D9s9B4Sd7h8yiNyKNATgPoWxs89iGnjdysSA7kBeJW24nv733qthJpEFDAqsGiqkgCS",
  "key1": "2k92MPvSPHSP52Soa66UmCdCBnoxxgSHgKwUAQsUkiXVrjL9w1nqq7Vvcc9JjYrb9H8sj4R7jqwKfEeUZexUz1NN",
  "key2": "5NmHWoq3gdWk3AGqog3VrsF5f6J5CUW9MMFmdcwvJ6MEKxZJjiKJXbvNQWMPRZnbPmwpaUeNroPZysh5ZSSVc3Yx",
  "key3": "3Moy1b3Dy5dHCvSvpbjGA3xPQZXJGfTk5HAHuBrJyiSsLAkXsxvJQQUJj7WjpfeW2oMyrKq4QMeELU5bkpyJF7Ya",
  "key4": "4gej8UpbjDRsKwMbX8TWspJw2phMzoogZY395mbust3FUduSmTm3pKY47JGXhLseQesnKMdzydRCiNSWHdZFcWqi",
  "key5": "QEkCtdiuWd7gRYMzYV1FDB4kNKLq6cVgZQ3zXyZrZyUe93hjY1dDpExFEtcxYhCEyYZi1K9gGSBRQqbTxRiGgdk",
  "key6": "3hSy8WUjKZWo4yw7KAATMkxoQ9dT8KnJnbDSGthjz653Jozd1XoDYPrEB2odiYKrdbeXT8G3zCAspqT2H9RvHtdf",
  "key7": "XcFBJ81wXSHGHvZ6NG8qq3KTu3DGhKm9a941b9WwbcMh2sgGBnj2W1F1dJJj9sbLzZGZKiTFRLXNGyykQvmRhhW",
  "key8": "63pPUEDjwGuBBPqxQzNPnE41xTg2zRuuaeMHFgH5rRcF5p7baDsHgZ7bz5wnzSC35gwNGSjJpw1HFyDNtrfqiArT",
  "key9": "1sK4GgwkzgvJr9XocdbAMzpJqMMBTcRTyCUMR7ACukMpYV1PZW4mri2QnQUXdEjksxfFb14KgEvs5R6UAJSct8e",
  "key10": "5TyF1ub7xnYXkwjLN9ejiK2wuQEzN8uTiPA8GQhMbyjRP4GYMy46tF3oeRWHeNT8njg3cK1KpzTSs1XP18m1ZMJ",
  "key11": "2ZHr8hdyaaDvJeF4qMCQLwao2P1Xo2z3isR7NFtQYJL99rkw2LzbmiEMLtNE7fxm6G1V4YbEhuuwyhm1PJjJrj75",
  "key12": "2csvcYti6ezb7aKJpytN6Pr54ekrYnrbRFfzNDwykXKBJaiCSA3d68SWbiyTXVduVGM35oCxpUErgUjtrhLiK3AS",
  "key13": "3h6yRwRsbm1GepPVKD4n3tCt4QsJwycSqyztySnBeinm9nQgVvYpQricvRqEkufCeuQEQAwo3oGHwnBZcs9JQKtw",
  "key14": "2q4N24iExaHXLN2QYL9EEPD2QwJPcofQAiAAFX2peoE8sRowSNiEJPrnoKEbsqm5gMUjsS5XVKxABLVmvHPReiMZ",
  "key15": "4bGoqrZd8VGYtv28yYZic2bhCBnJsKhxZXMDSjmgno22FDNrDwxHveo6hu5vp3WSGZQmrjJs6fy4R2PYtbitbrsu",
  "key16": "4VyvT7RTznJEZEc7qJKptKX5QQfMwKCU2ZYdQtqizdW2dzZEHkv3U9LYK6raWGf9TbrGRp44hoEp57EyQFF9cSJ5",
  "key17": "2kCHNhzSa7xWttEirqn3QJiK8R7pdY1xXW2bv81AySics89GehYDRog4Pbv3CnAXU8chQpgTwjVYicLdNiw1z3Nt",
  "key18": "kKkQZdZxjQ4a46WtiiLG9maxgkBrk6rmmkGji5yp7G3kz1budoqsFu7tA5fXde3UxjUeFTvzHrcosWkA5thvJ3K",
  "key19": "2MkSdaJyBaRE6DqKMm6mQ91YnXvWhMP1maPg65MUnpmPgt8vNPytqsf45VJhrtVYAQSVWeYMyfQLytj3aoEzx2sL",
  "key20": "5aJiBjQGSFAajYto5LFMQaWG41U6GTJfdJsbST18QoNDxR16kzVTyD5um9sfahLGiTpkCoy1YqAgj3dPPJHVvZ52",
  "key21": "26DqggPXFM5nU67bpYXkqzeDy3Tn7cYmdem3a8uNpcK4h8wKXBJ2rgsmbEDGeghpbpcqKSp9uKRNtJxAUBb1STCJ",
  "key22": "29YkecRSMsmQCnx3prVc7zbk9yh2JKBJsxBgFuRQQzFujaH9HAqabMbs8fNXiJvuCkyuwvqicBe2RWwcNJdesMDU",
  "key23": "124pdqgnQajBqb2rhh1Z3mB3dmJXoKQfyN1ke44pqEZz2c38CWcSXptwbsYRsRfeQGrx7qgFepjftMxgZ4wUdXMk",
  "key24": "XNaidCD8i9xKF7Fb4kkDAUjRFUTNpaMjLwTyD9az61Q5aDoRHcT6cUKHjkv7NeiAAx3dVdp5pw7ALvK2EW3fL44",
  "key25": "5F5BzS22FqaVEs6S7dsB5UdPhErS6sxN45EmH1LyY14mxnH9taNcZikbgff5vkcACqR2hgcA7YSAUtisc6nPqxBx",
  "key26": "5hcC3jwE5mUn5Kb7eLUTRypswEi6VJe4N7bi3aXX83hfLBtdVrNtNHK1RaYR8rAe55nfgYJ2P5fNWk9comUZc6NR"
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
