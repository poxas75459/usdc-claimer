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
    "2UqPBQ5eKoXKziL4Bvx7A9z7QrDguqFmFf4dv4Fs7Q5FyU2ojDHUcgFWTTxPQxTbK2hsLeoHgXHnD343Cv3MYtsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sYyxPd5oXytce1t93JXDtPm9XnmwTXkuCUpQbBUcobuoqtMojyrtnANHS6i3gwK2RPKFT6E6jNVPLCjAcK4Di22",
  "key1": "3qhqd6SW4ghrdJsfQoo9ZGVsqmf1JHBaVosjrwYs3K9XFzG33yRHuPE3zMp1uQNFE2BWavW3auic8ywXtvZnepRw",
  "key2": "2pftHGLMuAx8rkFNp8nAiBJMJb8CsdZaxufueWiY1fQpnHbgAx8hNX1xh6sD8Z7m9c6XEErbf2ShG2DBH7ANkLjC",
  "key3": "4ypjJ4F5ComRpiBiBMEn81cBKtMyzJrm7kh4Kw2CerdaLHGe6ywf6aeJfF8Wn69a94jJe2HNuQwTWSEjDzGRGeTL",
  "key4": "5HNwmuvUfuco15k8Xb2Bpnydo86P1EP8AHHGxQZDc38ikGySykVkcce4gsZ3AyaEbesYHRpj4uPsSsikQHdpyVsq",
  "key5": "58uo5KXUVzXCeuwHeQV1M2RTjt5bauZbvqr26HYpgKE8SeJLPWR2a3dberD1g3REwX4gm6ZtNN64m8gvfknwurgH",
  "key6": "2u4CiVY1d2KEHvPdYApb3NDWBpEynxcCCDuCgntyh2kQWhHXaQ3xk5AWeM1ARTaG66sDVumqYq4sPBox4fGLMXME",
  "key7": "4Hp27UsZt7HUxR8d9A1u5HekBTAjYHeVrRe7b9Pu2bQeNPjeZncWDJgFEpCBGx7ffaGQNQTH7VUPjK3ZkEi2NJXh",
  "key8": "2pZgmHDRL3HTTnY6Zix3pVzcf2XXETMngQf3BWh4BNs5zW6QDS4UN3fQ1cw5NG2qnLiJQVAPZVvWUBz3xKKgM7uK",
  "key9": "2JRmRhSYxcExdjtkXFqN7tsWrBk61FcvwFUmemNoTKoTfZtdDDcR4Wt2JUPCJf6PoFuM5k8VSFmVkxB1bZK5Bd3d",
  "key10": "TYAUxC7yQ34HVoA7LqmNb83wikK7QbyP3ZpughuJPdH3FvM7GFUBZZQ5eyTQ5HhD5ciaqXKuq6RBZNJMUEwXCGx",
  "key11": "5gYEkxbHHFo58skcpJbqiMsxV8sD6FM7YGUJJUZwz9JsKPJgpw5fLfArLyxpWvBUuUHKpihEXKxRQ3BeDZdHvRFY",
  "key12": "2bNcGcRWDb6KMewN8ryQDvCFVRCWZnHRenBN4xjjssv57SiyjFbCUFjr3Trxg6RqCWwxbo3XUjHL7DCAfQoWxDcw",
  "key13": "rdHWcimL8V2d1YDAko9YyyiWvyHWjb5LaGVJvtYhvwPhFcYBebY1uG5yoUMS7BcJkeDitYGzvK9BjcQ3LEdCQw3",
  "key14": "3hW5gtjDprhFEUq2ALaMnBVBKhcmKJQGLheE77Qf7qQL35gKAeXEfKkcU9Em3E5B7VhYmmx5Do6SVHHjc2DFvDmw",
  "key15": "FMnXEwfdQAu6oXnFzX8quKkpKDn5GwqqbsSvZZEW2baupsp1SbwgrxkY8WXMu1PhUaa6cejmim7GNkbPeiJikD9",
  "key16": "3KkjzEpa8v6emNNvtveWySjS2PjGGADGDMsZUbesncwoncpivsyoPACnxDkdaGH9mJXhvXRTrSKfdRYNMHKEtTP2",
  "key17": "qwAZ4nZ8m3EueKwapmCjHgsYWwK3ehVFHXfrmhhP2veMezHdJ7WGYzqeC7TCyBCXJfWEuJiYuL3vJT1RE1YmX1T",
  "key18": "2jJNgbwr3X9FPMnwY5TU2YWnzySxpiUgsiZb8b5SJTgMXKqFQrKjfYPDChb996QwmHGP99HS2Lfnf5Mt4k1Jc2rN",
  "key19": "2UiGvX4pJVuvSQBibiJPhqPCEjXQHRnRQaqun5JUWNSTgm7pxEwia52vi41UmXFHoqmCAP3KgCo72Pks6M4mdTVz",
  "key20": "2SLwpy2UdRoZ4W75zMb4Pyg45PeUNoxmBPC8v5PBnJVeHeGypCR2Kp2QdEEWQWgfJFxaWeAgGQ2wnU2hAeXiMKKj",
  "key21": "2NaLLpAUhPQ6nk88U97orzxJy63tLZjbx5q1D1H9zLNV1rZoxXyjok52GsVuPJws621gtbPPg3fUq2UdHM4iFPtm",
  "key22": "3fStk1tPUTnK6a78qkDt95dAG2Pd4ypaPs8rbTTTk4p7mhJrPzxJtoYJz7Sj7gv2JvspX9pEGujSwDxP5mMHVXgQ",
  "key23": "4PTtDiW42sBJyAreEnhKzLnwCmY72gxeYvSNPBg6AYKitZZGc2pNpHxZYqyya4d5XHMFMCJFJFvJM4wnN1kJGxbU",
  "key24": "5E6i8hc9z7mL5ertBsXQjqMqMrZk32CKDvk1Z6VbL75KbMRfMmjkLFgtgFSRoeFasJXfZdnpgsqD4Py8P8SQxLhm",
  "key25": "4MajkjY8sZLwfKe9QJBKBPknut16Fpf98L6HFzHqJZtyJ2QKuLzqJdjKcBGZjTN1mQGPULMakhcWq6hEi9sWyy3u",
  "key26": "3Sn6y7BX5EFmFmQDHCLCHzz4TgnTnqyZ2ucd8ZHUmjzgzmCR2W7iUwobRS8mPrW1BMri3wkZ6HrurnFfSWftsL4b"
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
