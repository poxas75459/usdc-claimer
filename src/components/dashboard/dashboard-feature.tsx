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
    "2VVBDBiYBoGNcAdsuYAu9DFZuYg8ZMRxCxRaH4XUVXUtm1QvtTvVBkPbsKthb6TYXDb2Qb9Ngr5NWgLXvHnmzdSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UJffGx5zrSNeNfBCaudTcZ9KQXiboNVa4a4L5QHaaGNB6YZmNpcDv4u8UtGHBD3U8oWjzbjDnT27She7m7sE7Sn",
  "key1": "k4ui1McF9fT6oHtE9Yx6po5NeYkLkKbdi9MTTtsK7y9rsLLnasWU2sCzbtYRiJQUuZrXxJD7rRGi3ZmL7KNA9gp",
  "key2": "5jEuK3aZQBHF11GxecWczsCGDzLWuaQxxRvMLyDWtArUJni6VFAcHjZYK5M8ucphU42mMp5UKhJf2Phpjpofa2Fu",
  "key3": "JvhVdx3vkKaxjY66rtpguDTk5GqPiK9vtH6p8tLdAuajwP4iNr4TtobWPsVdasrW2ePkj5zCRoSjBDcKA8Pg3wP",
  "key4": "5VN5pFFTQkB1d2Ns2peG134b1VcLuDpwBPe3j1cTGQyC45fBHRQpEK9ybVGXZNn1jAjmRgcjRenSbein4keJiCYh",
  "key5": "GbHWDrop23W1vdNDx7833ftvknU4fkMJTWn6hUnRfzCVyTUWU5tg1q7X8cUs1w3tCEweuKyvmNxm8LhyFrSCpcS",
  "key6": "2iQas3YMdQEQQRxpgrgwK8c7FXjVkKnMBb84w98avGtLt1rLWdrK68wM7TxTdTto17cdaLRk34z7Yg6VhrHdU57m",
  "key7": "3YxqUcsnJpwJv3NttEX6NEvzCeRNvDRNYQ8YRPadRRw3ML8Y4osDNkEHV4cS9sDGnYGKJfHirvkkreRi1PbGM78Q",
  "key8": "2vVMBCHyJD7n28tMJSWHWUmMX7k9A5Xm9e7mVLjXCHccDb6oiBsG45NLHGhwV393L8fQx6auXTysFzX1Xjm8TFGX",
  "key9": "3q3YUkiUaFAnUaYpfRoHW4ir75Way7J8gGe23AYErirdBkizaCbBkiFCeobWDGhDQxq6pUTvJXGdFbd9wxDRXJC2",
  "key10": "5GBUEp7N4taZUQMALaUxMWYGAfQ8xZCxYbJFWLax7hnNkbMte7h9gqrTETVT8eHcCbnFwSy127r3ivqRa9DG3Q5T",
  "key11": "519Nz3v2sDxd8Ed9iDaeLwS9wEdpZL5npHN5pCL5XWCWsX6mqV2XH3MEKfaCcMyt4AyogHjPmc7JStq5F2NxPHw9",
  "key12": "52uvFhgrKsZhA3MLik9DMiBkoAxo7QbWZjFAcAeQ9ocSSH1W9Y8tFuG3mWWjE2cD72ykgcgC5tM6wnYMyPPo8BiE",
  "key13": "2NYRptv8TbUadQp6b1oCc2DnARGVov5BXSCegSpxqnHJjNQLXKFaPaiswaHBmCK9tWo9nBTQBpSC2bY4jJTVVXP1",
  "key14": "4NtHmoWGjPhH4QHxyuuEqw5qK5JHAatYtgnUG4KcCus8eGWHYYQiuwsip4TjFrX5ezrDKbaRrjwpaFF4BaeZ6eA7",
  "key15": "3eec56i2BXeehkzLT3RFBJaLJKri5TmHYYvwJCbMnRPfXFQirYZEkoBjz6VsdHH5VA6eKzhTfzn3rT1u2pQhrRnJ",
  "key16": "5z2HTSkimqVKgcWeZubXh2tXXPjYd3bSSvDsxLqHK8ZTHxMxhAcsyqrVdKGcDULVkSRoRCUaZiqPie8d2YUar27Z",
  "key17": "3A16igfYtcynJpp895Bfm5NhWXk5wZ39YCWx3A5LL5TeZx2n9hEL22APQCcn9m21DcCNVvhy7KJYJQKeJQFByXqU",
  "key18": "5Temspv4eV3wZKHxURiXHYBLVabbrm12hATcPooVYR6BAuAYztG8Jz4sxoen5qAvfTAq9wNWJ4HFh3hfCP6mzLHA",
  "key19": "nQxDvXxtivEPnEaeHQGZVAyPNurGKuXa9ATdW1TTyvrtnPvh7idmkoEhGYzVfMwUVEBido184mKcipSLwj5GPZh",
  "key20": "2kmrTAZffv2vJenpjVVFfyDRgyPDQPTRsDg3XEUghwjJMXamfGJ8pM3m2xfuXi87GZfVR8GWom1p2jFnyn7fJ5AC",
  "key21": "5xUzdSeLU5zeBfGUFbG1siLBRkmnveuif9kHVYW3TMDAndGGyyVfwqF1idibNADHha48JfKy5WFeBaqKmLNAN1BE",
  "key22": "5wpQcEoTrzKFKtsRy5qTpgs68oLJyYq3kHmQ6G5R6wU21hChx9RAuiaF1fQV66yPqinG9mYRVU6NKH5jmDYYzzE4",
  "key23": "U9koNHF9R2dGLwuv3AkxixjhH2ZsW8PgXaCM7jmSUbTxJqd2XEEVVbaB7tbNmFup4V4zV9vSmQtSzJxn312Twy6",
  "key24": "SGVBjzRufVATH8ZYqZfRkueqYRLqjBUczEart3rPEMvgujpks4mitFLd2a7v1zFYto6j7uuVbwrCe69TfWjnaoc",
  "key25": "2aBuZRUHJB4ZHf6jfidS4542t9AEQnTmY1hJMS2N9oEJ8wyaa4rHPKq3D5Gc6DEJHdXDucE3XGGf97jBxbJiF7Xy"
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
