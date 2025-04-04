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
    "2RtUW22bigicUNScYAfg3L33764DPuQedfFqEsc1vWQS4abM13rdju66kfjmpjjKD29WxNYzMJtvENtiC17w6XAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6YFPcQJuZeio9xhn1aQcViyfmfTGa24WVVzy8fhALGX6A2qT5ejj2sbwbZkiBddCUJqp5kc1XeUmdQNHMgPwEh",
  "key1": "PPMW1fzpoRJnC6WfmSNucNeTHFghyrLyRFWwRPEaqJ1AF7LxNWHqqWzXu1eHhnwiq373sgfqbkC1QZBexo32F9B",
  "key2": "4okRYmFbdX3ykduwyoGX1HytdRMgYBrhGQYB1aHedAwUS8sNgxk5MoHBfxEAErP6TpfVauX6wrnsRfpcbfQwXEEB",
  "key3": "4aHsNi6XFNEedps4kXjML2VtQX1jy2L12V15VBBDFq12YpSdjAPx3t9tEK3FKTqkM2s5ShoiqXtmR9BkBJWo4pcY",
  "key4": "27fZ3aCnPwgxhwFvv573WVShqeLT9XmsSQzqiTpxC8n7GkZdiiTR33KmuKiRzHDKKCLYWLxGfeB3auKYDSdFjH1L",
  "key5": "4WVihamYPx8dQzhBRAJu5Y1AUpLZFSouy4aJABCD8jMdzCrh7oNXPDUKtzVzvagtC4GuxTJ9QiH79PwtQWreMrG",
  "key6": "2gAmXvAdkn7eYCVkqyWmXy95QEUxFrCgMo7zEXrAaxcR1RNodqKgSMN7Y43ipNppHJPcLntdR91jWSQgYHi7qN4G",
  "key7": "2h6wYGAZkRwKTb2oGtqsGrADL2y2LTPqM4y8WWLF71CF48k9LByYLdNfskPiFykY7qAe742KCrhULSVPFhffzHUi",
  "key8": "5UEbFqVPSTJ3ieQd2V7YGUMQADt7nnGqZthU6jSXXKzeRjZHeq844YmcrPhYMzeH7H913dvL9f1q5xjDQNaTFeZc",
  "key9": "2diehXuggRK3RtjKixK948h5HX266ho9zK9Y5HzseiSnww3yK9TGj96NvF7uvizBPBJo4qDWXzNTXE8vyVPwmBV2",
  "key10": "2CHXeE6yD5Avc9MNNV6dPcPyFsoUuaPHckRWz4APjMfEuy3Sq8zPqUr1ytSS8KAcGea1NujCkj4KevREVvWNNpwW",
  "key11": "6fEYuKnVZz2MpVESNGj88eiDpUw4PK6r8LdaG1DdrCqYXhy3zRMHHqJBbS8hSStVTppv9wVR6V4y81PUmjRUBo5",
  "key12": "2rrkkGhPBMskiJ28J6qW27mMeytJaNqMNfTAzngVxTzL5t9pfeHWAGDPrjybmsuktYSXxmeQ3iVm4ydSETk4WFiD",
  "key13": "4dJEeePhY3V6VzkxuVxEYGERR69WG6Rj7kzBTuZFy5svdSyNJReTvRsD59Zj6bEbdwyCAQgpxSDmvcR9HyHVsqDz",
  "key14": "JHk4hMYXKQap8FgwNF9PMLF3tjhQgyYJbgRTK8KCXAApC7TGuFdpjFZUMDHqLtEAN5pZU6kHt49FwmchHcABWU6",
  "key15": "4hYfBtFPeustTtKjxJ8gJZNxitGSNEQx9HNRorizUW9f98Xu3uf4KfoZh3q2RkTTmfpAEmzaaGNNpSfjE7y9DLWa",
  "key16": "36Fqgf1etUGfqmn3CcbXEs6WU98iUvnVEvaFYK3KqAjziaYLCKr55HrWEveuJWS7VkMohFPzyp7MAzqQ6Mv17Mfm",
  "key17": "3VvNeFAvWUyEFVmtKTpHYiC4iU8akPkWh6wyfgPisJ8UwNQwbgUSHQbpTLfXFhCKKoVCDWDniDxoEP5jpFxA28Hb",
  "key18": "gGrK6Q3fb9wv3MZkFi1hXjQzqaVsbXZvapjwYpTBaHsDxNDD1CK9UuYjF7Dhjedcdg8YwZPa5Emnw7P11mCTq9V",
  "key19": "2Lt2twLx948RaqWSN4wD3BizBVUye6Z8GHS63xZBvKeVXSujZZEisBZSkv2Ds9pRUiscWYPRCm3PNT2T73NKxos4",
  "key20": "3KSRyqaYgBhCfoEPsUjMjN25MA5YVqHTLBdrQT7Uamyydgx9TbhE2eYXKAcKr3TufzWpf7AZBFEK2ViwmSLJ8hPt",
  "key21": "Pomv4JbxA5LEQMfk6LDB4PjDkzyVRKJzHBXbNLz7vM1Ye66JdpA5JgN15MnBwNZjxZTdGKTBsnAYvtKqxu1FEsz",
  "key22": "4rJGZdB9G2ietmR9A9uiTKptu4rNzLn9vms4W9woFFJCGqEhCKnd6GTaWLQZWRjyDNVn6WdcrK3yxyUSovqH8HwP",
  "key23": "2DnJNbMJYG9rWdYfLMkA2Aa3pbJWvh3xpwx9bHsBzUb1nu4c31JDiMAuEQ2X92Rb2d76zTRRCnQt5HQbaSAEGFHP",
  "key24": "3cy6sDnsXaBpugDM2hLZqXMmzwQX37MZ19VdHWcaLT5MmkZmrAU8BMXUV2du1igyve4NWNBdPqCzt9fLGd2qxGQP",
  "key25": "5CLKjkLizzDYj68hz53tQ75nnS6FuJw3xbmxDEd3Wixqkmn9mXcAbPL27Y89yxEFBBdqVbP7ihzEpAeSu5ZgXmBH",
  "key26": "67VvVJqpfPpz2MPsWkYAfcNT4jKK87TX7qamTF6GocLwkZPSx1Bd1VnX2i9dZnuqvqr64dzXpZ3mgS57fpweGpgo",
  "key27": "2vF4diQ5UyabjryjU14AcNf7ffgwsbXip128LRD3hQY7BTKvXXwigHs2npTW1GvWWtY1zToiMgWSJ52kvw72N78U",
  "key28": "5btj8zaoQdSEiB5fcaRofvDHCQjFjLp5HuAF2n7hYgYUk7nLNvGsh9exRzC4eetUj1GrgBYywgX6d6WevW3vSBHj",
  "key29": "HmFQKTeHNdBR239CLURe3BqSXH91oraeWi87hH9mEJFy5fja9owbTU7fVWvXyqeNG56YUcuqqh6w14N5kvpU7WA",
  "key30": "5NcxR2TUP3VfE2Jt4DFEocrjWKk1sPqmxCHiVRNeBSywcidVRDrugUQtHrxCdxcTf1cfzb9szo4YsaXAR2PB4pWG",
  "key31": "2Yc4g4DMmTpHoukUcvHPs9U13hoHix3YnHke2SCosaRHpSgKZz2K2f7vjYKMa8wFkC1GSLjBrUgf6KWMDwsvKCCL",
  "key32": "ytpjxJ3cKJU2GChHQSLkrbwQnnpG2fh3GjbjZfp4sB2oLuz3WFnQeFhYt63XCV2bc72b18d3KFn5nKnwd3bDc6C",
  "key33": "3xPjXdXi3VYmzGsm9r959ce81P9vAnHX1rmN39podSQGbuZEX1H36bTNqzf1Sts1W8EFu3QZZaodTrxiJQZJSv1o",
  "key34": "35riLjP9zx1D5rzoKYnze69A1QcsAPwwxWHoCYXbgNiA5X5ydY7fEEabbofsZAA2zbB1hWTvFy2m95119ezrzJRi",
  "key35": "5jiDZbPMEEm4fG4xWk5zQuHrftZTp3qFKSs5q9VJWR5aYy2g1r7J9ZwZeJRUGhx29GByNjCYzDkZib7dYZCRdHty",
  "key36": "42sDbbP5AgMPXMXpHnvJY3Wz6EueqgTNz4sQXNcx6Bwsn4y8Z4f4Yc3FdtvAv4qeG2oBFYoQgU38X2231m3QWpLr",
  "key37": "2zMhkELHFHZWXuozjLqvcLRy243gwg4rEdaYmT8rXx5WNYoRZXYW83AuKbAf6g7ATg7T5hiqZFKF5wWpU6SbNypr"
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
