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
    "3fYKsfNYWodynRyPFiFomAnRjRciJhLYdgscHftL3GrqspYKnt2gfwbRNGkqpb9GaQDz3xrFLKzVM6dSXBWfEYLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnXZGM8EyQBmeezpEhaP9SyakeTPVNHQVm7jonjAvvQwZkoX7V5QKcbXNWWADhuPeaoTWya3RBLrcDWyDkQzFMZ",
  "key1": "56cJPt51wvMgojLQK6H82Es3NkpWHL38t5decv8jeK1kxYWsX5Qemuws9jHP1odT2ZJz8aUuqTtuGknEUN5eXakA",
  "key2": "126GwbWbJzf63A7Ji7mrUaoBUHCZ21kV2hFck1gyP2ZLpq6zktdeeoJ2uA8M2ETmrGQpgQcv6popEuc4xGoU3z6G",
  "key3": "5H51vLmws468p6N3Ahjez5nVG4wZCkXgKPhbLCwuMLuCPaojKUNoCCzGjzBm6PQmhcYNfKMYNhbFzKxzwVmVNkwC",
  "key4": "3ebEHQGaSSEotb31wJwa6cc5yBjvFZqjQxGPSrbq2wcttBLDhjkTkhWi64r1AyvaBrXWUFYzes3X3xgALJERMffV",
  "key5": "4f8gLsEmvhwUNjB4jhFJMsfTgWzx9dvAvghRzDKyxZAWJqAnh1ToFTNfCBiY55kfQVuY17sVAExHHgbkHjZh3zw8",
  "key6": "2i76VXbbs1PSJ5VrsfxE1N2VjYsKDXcYobRq31gstE5v79ngahm8fPwum8SQ8T6i3Bhm4jdaHWffDSidiiVKXzQp",
  "key7": "NvXJN3xTe92f8YDFNjLWFn3CLYAFxWFmQCRRT4tZrjaD7FGUePFnMpuorZFy7E4QZ6dDRq48PeZJLSzd6iwrfgo",
  "key8": "Ppgj92TRfp5P8StB1UiFMBE3WCNV3KzErMPGbaiYGi5MHAY1NMuJzxTRrsic4G3FfVHjm9b58QkqZrFwpktKZnN",
  "key9": "3J7WPYtofwkKQ8RKWdBZUtYMvTmC1nzT4C3uSFcMqgsHYrP5CkKZc81ERgCj2HQ26iEGbyUUg6TFjf2mEUbZB32n",
  "key10": "36MVkuYGewtVzNHE2RA1beRLwDdZCcuH6HvwKyLsqDzbTTYcAVGLMScqE1gjsxZPQDB3vG74k8HCQEDEPxw4YhLX",
  "key11": "vuMcJZTDtXzaU6AwabmzEqKuNcjFJeFPDPpH6cEPbArNaP7uyaNbB8j1iKf4UGjhCaeTyxNheT8uVw9qsdw2A8s",
  "key12": "283VGTSstkoJ7Rkp6prr3ttSHn4ktfxKYhuFwWY7Jt4Z9w5AS5Qb7o16cCqBQwL88Ejh2x43y2df3RAgn25pNe5e",
  "key13": "U8g4S7Nx5JNjKSKVG4VeFhSmTafUYdM2TgUccGN8t9FXHqgC85iJS6fjPiw5R2x5G1u7MnJedrup57DpxKpVVwd",
  "key14": "4ebshwTwiT4tGFisFXXBsb687egzLCZJh5pm31whbqxgm8TL4kzYWbTGA8L42LFGZ253D3JJ96zJ6Zm9JKdbtrTE",
  "key15": "uk4Qn7zxiddkpQoyQxBcTBtQdjoRhv79wtGKSuvumfVY7FvKAkLbVC4rQxYrsHXpx74F2BMRWwWsrLkiVvxcaW2",
  "key16": "57EwetaEpFQgSjhsDm4XVdT8oB6tU36YT1RvFiZHM7caFeNc8G2MPmXeycby4qxL3zoMgSHhPcJ3WQoYULPmQRLq",
  "key17": "4Hh1moAtqddL6CKYTBVbrogEHp5SnnekUm3WQAgn4EvFk4qvWmFcxyMJUQBnZu6RgAYTDS1BrqKJfbcuLbVuQxf5",
  "key18": "58fr69jg1GUnSugzgpYSTtRJmoDETnvzSXD1xWzdAy9KevTx8kuMtriwoD6zhcyRLiUCwYzwp6AezkEYszVm9kd5",
  "key19": "2Li4mxKkJd5mKEaPkkRKJuThoMEzixTukdgXu2gG3g96k3jKepZRUv27hHUXq7yyYj6Svdfv3eeacDUewQCakLFg",
  "key20": "4Ccn1S4MoZoQaeKxvFnqUjLsmT8MWzwpxeNSq2AmTX5onmqUwpYAiQxMtD2Ug5HL6pwpz2153vNuyP1N8a1Uoa8d",
  "key21": "4AqqhKyQUwi7o4Ujc9MNsuAhdZMM6aRU7TWgwW6h6DuGsHNJx1kNjDiPdyCHeZyxvunvJchPKjP3Q6Z1EoGBNYrZ",
  "key22": "5i5jNDjjLzi7YZz1iUXCB6rtvaZeoBR2ZzF5jUDK8n5w7Q455KTeSrXDcvg1cAvWfgRyUjqn9rGHTrGFxUV1Wx1Q",
  "key23": "286f5zthmu2wKJUc7fxEu3aYDrSCYhRFnCXSyVE69X8Kntrw6P4nvnu9UQSkMGm2EPbJFyWJbbhfwQPX9saThFnU",
  "key24": "2jypTL1rk4tjNWTUgyDXidUv4TcZdCtsqSkhTdNheR8k42NJ14ETHFDLMtgEEbbMoxCijXkrKNqTvH5CTjd8bZni",
  "key25": "5xGp75QJ5orRQomAapoyfmxqGcDML3a3BSAR7dWpqcfPhcE7k6nn9o8zybLjqex6nmDsZ9yhxXQryHK6FdbXG59N",
  "key26": "1cQ5ubX2EBCdqHoHwgxCdvq3rXVCEyYK2PHw3cM8d6sSMaNvybKpwucFswLr3DjTQmaaKd2upbYfjzdM3yMLEgh",
  "key27": "2cUD8TYZawZUQksm1JDgAxwJzJaYSqqFq7CvaabQNArDYH6VSfhvSr5mmkyVL6Aj34fCbmKBLQUK8pZQ2YXHh2TG",
  "key28": "5pqcQUvPXNc2KqUwExrxEP9YVUZAUZnVVJ7mHLBX7aBd45HYJyD5nC9NCLudZVYj65UppKMqs2MVTn9hbrHmCDGd",
  "key29": "2daxNsmNMG9yJ55t5zvwpmy8QJqd2B2NXe6uD1zCFpgjjqkujdrufuEg8Gw823LeQU4kMrTKBgUxncXkoz6HDnBW",
  "key30": "4m8KfSGvr6qwCKQiRPtmZYeRHALhAxnuvgBrSrXScpiTq6ZfAjBraTA497QZhMAQKwfHMnqCu9Xcb9oMyWbCaV3h",
  "key31": "2jCmi5hDGensgsFzdSvpgDdmmfbKtK916wkdD4AwGTbBD5FirQzY4W9Xwii3guagHoNrMQygQq9yf2ZTVNsGtSEe",
  "key32": "54a5cnFVDxbHHVuKQBkmsknL3xiNXH8KupbugB4s6FuSp5Cn6Yr2FDWKwQABsWakBLPaQ8bXs7cf1vnfyzcEtkY5",
  "key33": "5d34fXszQWH5Amf4P2rGU4SCPv4XSXm4UdPoh1WiyMctTWFtVpTSeV2iwRtbkSNdigBUvxrt8sx7whHjFLtboWBB",
  "key34": "4gxn92rLE5TbuyjtuCnwpmsFz4WvqtKozCzTv4oq4urMTA3EJMAan7jH7FCU4dQyrbQc5tYBpZANZnaHKH48eRCK",
  "key35": "2wMnYD4gVCx2sRxYwvs8hYLnt4kXejkB8Ci91ZtkNxcL4QS7zdzU84XqCcZtKf3K64jduWDzp8jYo9eVMjR9cUJN",
  "key36": "4zJLRQmryw2Q34CEjHSRRo4D5Y1g91e1AS4FckoQg2wHyieYyJ8nAxonLd8anBQEFmMTqdg8CcDS97Nzo7yvdEJ7",
  "key37": "4bkJaLPVXJ28ornifJ55ezV5fTQ24u543Xf4SNKFLoo3hUegs9r7UYhuZ8uJrMAygaBvmai4Uy1NUDodtZu1Hmor",
  "key38": "5terNFLwb6BvAYK9nH7UdwFupNTjaAJAmHUEVKX5NpD3cr2vYT2HDGP3ip37Zcdjc3sdfkgK1kNp66nU7N2T7gF",
  "key39": "26LeYdBgNGGyQVjEWzhegUzPsAwXSYMPDnExBaNGkT1SCcvWS8gdKz5JquEqCzSuEQgKNuyEV2nb1JwunJivYTya",
  "key40": "4F2WE2tjMyo4AQyhqv1q1njsvE77JN99kpMh3iQMV9CLZSejfiFZrhybKLVoWTfzzoZVbFjGSL8wD7rEujtvJhW7",
  "key41": "5x3ByzWL4yBJS1gym2fSXEraAHaBKeoqz1ZtxafjaCy6QqXD5P6u4gzbgJ8FocYrh2BarU8eoFnDDntecCcezWD2"
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
