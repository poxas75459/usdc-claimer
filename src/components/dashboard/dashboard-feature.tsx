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
    "5YiTcmiSmatTCNjDQXdTvpf4ZXvSsUnNEhW1st7nXvfTEVY8qvTvc8TncPiQdnxd42tTjDnifEjGufgfCas6PyHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qxwJoEJ9LyiPdkHuum1joqRwS5XzAqjeoVwSr3cJkyZE2JWdJSWqaMbAMHd6a6p2QUJ1hV3o12gWvGRVC3tY3hc",
  "key1": "26UdRxUJ1XimMdLUkNaVzS3tdtWYiVFiXgBpnYyrigmojqfNB3W2vJiPaqb1dcD8Vnyt459SMUjD2hYL9GABPxQG",
  "key2": "5UkFQWH1yzWzDxZy4VMJdaqXkDPNWBmmovbV6yHJ174AiJAxEpoCVVaWwFrgEaAbz17P9kX8HMQysdtSpYbm9vJB",
  "key3": "2jAvcyE4WBgKMBGf24ffoRg3sUERktBthGxWseYMqTKKV1yLm337E87XKeS31WZwisLGMhKVEh4sJtbviePvzRqX",
  "key4": "3Xovhv3raSacWu2DVeUvBJRJVxhmgrsFvd4cRhjxWzBCxBPx3RhMNxrNZB46tGsc2wmi7HzG4eZcEtjxDR2Q2sNm",
  "key5": "3bQCbKbBjFYVEXtnZe8EZBUF3qkSQ5FT1LkMCvN9YE6yXB7ngAyu2A5Laoi4XpzNUzw6pEqCAWHtDWzJdpnNffQg",
  "key6": "2GpqoHpcFuyE7SHvxodCF2QdzzqmNsz4G1zowQgkZ5XwHYK1iR15V6v8uXv14yZ2GkuaXo6jGBoE3Swo44yYHzfe",
  "key7": "21eQnE2Yv73FjricTzKPkMowBnFpKV1MAyCQZyAqPtcb6mTYds2jrbKyxZhHTZengRcgMrhkq4xUpDQnotdvFR97",
  "key8": "2eG6cmazxPzsWUPoCr8u9b7LCeLfySLRBgVxBd925n7GQV9cj3QEVzk3TKmXCaktFF35PFLbb7CKvqL3KgLtzcVt",
  "key9": "4XbpLWCdeXRrTW64MH2cDvKNwNz4hBx56wFqS9pgvy6QYX65zwUyPZ5DjVkafUx4AJwTaybQBnTgpCt41JoFtE9o",
  "key10": "3UcDwHnUkRCyZVfep5vkJQc9qccV7o7rrnceCuKaYUSw5DxqsJ4wvzHaZGR756BWxgsBSwdhdcXzhXmZkWiLiB3d",
  "key11": "fBz23zQEN2RUUFBgjmC3U2LVSq2RPxo3VKi4Y12Mf12X11Wg4f2PmfmqZUougzsf7gs29CMk8eV7vD1ouTVu6Zu",
  "key12": "3p1mCxhHwTHJwesXitkwuW7amqZuG2zPrcKFiC9DVXPByRmkik3ucR8HeiyRvMMrj9NKKqZXFEt53Lr9kD6T4qRW",
  "key13": "uHqG1G1vs2LMQuz1HWTSgRFpKNs8GHsFCnPWJ6mwajC2LUELMrZono41afvXkeJKAHKcND4SaeqYfSLNVKqR21P",
  "key14": "2Cg5jiyWN3rj4BovH7GDgkbibHH3CiPJanN54rSyxWfhR5TLGg93wDR6KcaHnwrXwpaCKYudoUtEKWRxoiMSVpah",
  "key15": "4qYPgz2aVUPwivg8PSrL3W5XVcGTdApQdaH2VKTX6VHy8XC7xbNqqZoo4kR2guMnBNgLP6Fa6TE46Usx3mUz8EDU",
  "key16": "uoDqUP1WrzMfWBZ5yQk9k9gAYEaa5tHxDuXbRt7BWvmRtpUUuDWAoWRs4WX37GS7HjMxHBduRJfq2FVqCzNZKGF",
  "key17": "5x3cikim2vQrQpWJWLuATfgimzDrLpoSmqBt71DUeX2bjg5n2UGPtCovfL4cGiTKjTQNsqRgNNW5N2PRyLVFapB9",
  "key18": "5HrduPKKvjG8xouFs3pEEiK7kZdAfAZ2hSxcfHeAKybxgFTq89T8beiPkeANZa1sVaAEK7XkiVrwcRw1KK9vu39",
  "key19": "5Ryy4AyZHLk3RnHUFdB2tTzCPj2BVu1LKLo8ZSXPPDA18PY5Ns3b2NQVDs8NwjjVcNzXu4PRYHFe2SrDxGQZdDPq",
  "key20": "VKVdwnq1smBUJgZgsuxwd7cXfcV5CMsZYmmfXz5V2XVdETL7b9UMLcktJFW9eazm58fRPbNXUh8ew1FXWPxsGXH",
  "key21": "5qP1zUuRweCrM3hUfcWuxz5SsGrLFFAMoWFZCrDLcYy4eiQhuthBnf2XjeAateozWcV8iZceWjzhekv6mX4G4qTQ",
  "key22": "4G2qs6f5BbcXB3sVbT4X2uqTB29zi6y3AFQdA9YbWrcsyD2p7JFWZ6NWVLyT8gp4FiEsy2uMiMN8uYPsNPnRBG12",
  "key23": "2w6dAuSLXbu5zmFJmxPPJUUVN3n5R9FP5Nz6SYqNy8SrNfPAuMtJbQ8T24r2ViwDUJURDzkn8Ejbg8NG26oA1FGV",
  "key24": "5x4qCN55JUmVjwBPB2FqVZeU4p9abW7WGGkoSjyqD1rmYekH9ju5Nra6REZQRk9yNPCSs1AyUecKxwYAiQmNAiAN",
  "key25": "2u7DUM5w9CDp6Ns9RAwkweKM8YhhFterAHnkzqpfiiqUwN61wmkWNCUkcRb2sUB169XZqUTsDjzXEjpgHg5S3z8Z",
  "key26": "2gDA1LLom69L6KiAPenWyyhrfwvn2x6d8U9uHGuqGvRcDLgzMhmH9gZKGMb8TPw4ZrSasDRoApuDUGLfsS6Rs8m1",
  "key27": "37oV9gY1rNxFcxqTZeTRSPHtYsZ5oLxWfBF6yoCUJNwXuh69hNmtaTnsJppg8ggm6oHXFhrUSbsNrk62Bmda4zqq"
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
