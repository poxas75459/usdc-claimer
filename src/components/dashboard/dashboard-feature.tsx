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
    "2jaQHXyLoEzFDY3nPfrUqQHqF5PrCeKMmdvhttHGt2P8mxVgbiM499vP3yBC8W37fumU8oaGmzvw9bbqoK69ex7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jdy7zYkVjSRdPUBoTYBjCUBAtKY26Ko5MJhgnQrRc55kGp55SiLCxnYWquzB7oAiACGNzRSLuJWKchiJPeXuFg5",
  "key1": "5bLXrW418oMP1YL77YH7pFRWv922TTiZyd4VCq3DdKDFG6DPSEe32ZTetocifCX1wq1GjDTrPd8ZogoeWTt5Eghm",
  "key2": "2nWX9gXBBu9KbBGUaRfyyTNFA4q71s9sQ4kYhxaGfNE8rKYRZFpCUVYqfkp6ty8NhTZPzYDc8ogS56gECdMfvZqp",
  "key3": "5umK8m5gPyYrL7fv2ccHNQteCYbnKYpAXcmXJMRV7K3v4fGnVXtsncGhv2z834V91J4XsodSfcCgj3n1didysgKW",
  "key4": "4convovMK5Q965nvW1dVom5AbEQksWcgrRPSv55AkeBXj5e86PvabwKnFnt4diVqFyLZjo4f8GCucFJoYwvdw6jy",
  "key5": "3tsu89LLPZGRMNZEmQuXTL6p8wM8Qn1D5nJy2uMofv1KipZTajsJfdiH1Uwzjs7RazLnxs2Cg7B5vQ4Czej9JDZJ",
  "key6": "26Vq7QrC8P439LsWayJ1CqgEQbcEdk8VAWgxK9vgJgPeK5YxEt3s9VEn9VAvgX46U3bhPeCWNx21qg1mbukz5PMA",
  "key7": "2byaqY1YPvtsVNKB4L2tn2L3kVHfoBiyKx4DZA39qSecFm7aLQLXsPFe7U6AWFDa393gj7vTVsGA36CfQt31orYf",
  "key8": "3pHW5pJdzo7vpBpFi9XiVmD6bKVYiE1yLjpdgjpKJKzVzKL8tEKJvJ9hMRh7Nhqztx42CPvUVYBfh6kL3UCRMa8H",
  "key9": "4uieG4N6Zco4bvwDELAaMEDLixt2YnSjfvQGwXreNFv23MCEdNHUmn9Cgn3WRtnSp8Ers5Rt1RSpmzU9PHyCFHvZ",
  "key10": "5UyzH9yNCb6UXT5SZbTh22G4L23KZwcHbzscRNPU4M5VCs4TMQwTnKy3Wabdp5HvdJjgzuZud9B9pEbnVXnkTfua",
  "key11": "wDxcxZ2FwyQSU5uo2j1a46bQhJ8YQjTLmmG5LdxQDHvMppDMcgB6cMenECxFxxZ5kYx6LP94vGuTUqcZjPu2qQF",
  "key12": "3Ma5TpAVV6UUiPray3mss1zmuHhsDKeARbwJfeg6fzUHZSLtJFuXYHzQveJygMgXbZJ3L14M7cWRJxSha2Nr2gNo",
  "key13": "5LNkup81B1nahiUYUUWgdZ1jq3ivtSQacobvCjSokC2XwDAFqiymE2mRSBB8jsiCquEgVsxsEwQUZ4HavgrgukKR",
  "key14": "rXp2q6UJJpMyRuygdpzRFmzYnsFgG3QRb2YukhYy6TaKvoN2uzzjcsRgAWBzCju5XgpoTetBakKf3PduESGzDRP",
  "key15": "5SiNhtADiwtYHT4VBWvd6GvC8EAGJyMAwvjvN3ZAD81KavSEhyLAykVy2QCMJH5nAh4YkpFw7cKS31sbaLZf7nqm",
  "key16": "exbWMTRSrhUFfC7bT2ZUcQ9rRr3W4xhsKbcmjS9YquP4Dng8qB5Y4Pv4KwuAoFi3wcm3ZsP8PnTVf7P5gKtcV5H",
  "key17": "4x1VDRToFTpTvGKrxoaPeaJX37gtP1VDiEi2JbnnpAr3Q59QchodqXXd1h711fvHD8sD6K1DDkg2Cioaazd2qmU7",
  "key18": "QAmjEeKavSWieD3Y8D5RMA8z5yToN3VveKv3zAg83TQg9KKQjk8LajcvzuPhohKcusogbG2iiK5pk3D3ofPFQU7",
  "key19": "4HhpU6X3QFrHpnfff3cZC3p1NWF1dEBdo6Bv2B2dyz2nHWWvESrEVTL51NLRf67crrazcxGXq3kDhGe71qNnFRKo",
  "key20": "2gGPwtYi7Go5cciSjZHTgrjcUhwY1rVaDzvF9EY9hgpcw2Pp8qPLywquseecoAodR8CkZwXXHDh4SGopLcQ5V8BV",
  "key21": "3GXDHpaT5GJoenab72vmZ1882Xj44xYquK4u699wcMMDr23u4jWzASAunEmVnhxFSLQxPwA3hc9yzJNEqmWs6rGG",
  "key22": "3hahv5yj9tKgqCcDW8Rtv7QfSxWCa7M68Yvfdv1JyuQJyXM2hMA1553rEbj4FXhZWPADgH2eAttjMgis4kmBDahZ",
  "key23": "4xsNPX8JCT7ij545JUv1DH2kY76pjQBbWXtRpZ8NVXsHDZaakQK45GLsFNqk5sFGDbFhuHUcw7JmgxJUSgzagvKP",
  "key24": "VqsWEK7VNfQoohPas83VN9oX6oWDqF4WsmfLp9e4i3qMnGTpy9vX9nuG8bKQGH1UZQcBdNkHBjj8KPxcfCVh5k2"
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
