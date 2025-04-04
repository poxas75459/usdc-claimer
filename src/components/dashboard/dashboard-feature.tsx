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
    "4mGozojKKL5Gy1rxfSw1Ayu6g54H1o8VfvtNSrm14CSEAZ4HLiqd4kJS5ewGUownPYk8tVhwqkhDV5aSBqFT1VxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yx2w4U4CoL7zxBP5evSfaSFr65uVL1SdC5ZCjQ3E3TNYrG7k5xwVBg8JpHvxtSWqD8skYjAqqu2qCqWN2S6pUkM",
  "key1": "5iBvavGJCEVjdooEbaQMC5oi1ezwTGHRjdv3ehiPNMb8w1j5rFSsKiuyNRx9Ao2GEZuhcyXhCDfNST9E7avQ2QBH",
  "key2": "3ajE7hcteMtLW3P8Pi6mXWZJEJbpeip7PQkCe8jBfp8NDKb2J8DQh4uWkHRis4wGkS4BiuMUBytnyeh3oC8DsC7c",
  "key3": "3wr4ZPrDNbocpxAX4uXopheQnQQjB8HqDuD1y9hbwDFU5QGjh6q46ZWUbkVVvN3EEA2wjZqiez12ND3cZDfd3MAQ",
  "key4": "3g1gbxAfmmM874ubDQ8H2WJgQxA2iN6WWDVNCxyGqfhG3GF4smtzAs1Lh4mhCkRizdf3hGMAD851EPvhnzLHV7WG",
  "key5": "2CN4kRZ7Sm6DG9E8BeUuCkvmiXcCBSdpTHexMso9rukbGx5iXD9vhYrkvRT5y2BbrWzzovM737GZWytuSBJRVM22",
  "key6": "3EXyyChTVKYmzuMTmn2DFBfG91vd3rcAVopUQ8rY793sDeyk1p7GipZXoPrED1ZHEVN34qjjwxrabcwmyJau5qfa",
  "key7": "5TH7jKVKtWf3rbBK4pTEiAEddKuJwMp7kqKykYqzozPaZE6ykAharFsgPhDeupfkyWDg8Ra3gssdEU3VjSZtVWUt",
  "key8": "4hLNtuqpKMWVbxypXE9eV3W1eFQmohYfsbGmZ9zN2yEpVT3iqpPyAuo8Bo2fgTS38gxgRqUX7tBfKLKqFeBsFzUa",
  "key9": "4F9gE2SoToveB5edqGGkRetn51xfyp3JMuxp1vFB9gudDPUyisvzG2pcaKmup9RGh7ShHzR3z8YAFor6i6xyuQy2",
  "key10": "Znx1pBqCFouWqDzoGZrZnAkgwCGpg2aQHtBKv6BEwmYxbQHmpN99nTTKQG6eHpRobSXgr3FzX79ZJPk3jBSBMDR",
  "key11": "26fmPBJ65SMfJwjijuideBkFKAwevKDSveyhB7J9G6WLUdqmcgUvZjST3EoYFdPkG2hxhJB4PkwS832AazietJFR",
  "key12": "3HoYZQ3sfPZTyejuHzxTePhGVRD8yuxeTf5x8c1JBkAq7pLhL8PLqBjjyBbvs7nongKbzyQnZhQR3KxYjFVjtFfd",
  "key13": "1SpWaoRLWtxnoHqbw6rx1QBLaBFVCgxFiVx36Cqt6pXAyEj7cLeXc5mbbGKdo5ohrKouhEocvAHipG4NJWkzHjH",
  "key14": "ygiLB2a6qWyenSLTyqXYYh41iqkeUUVY7VxpYEJn19Xby9yDLZA23pxLpXfWkiJQ1nohcNfLP9b5B7UbbBqceSE",
  "key15": "DRNdK7hCb5rRgcdERPomYZajrLgS57NAJ9yeNsKk9dbcgEmcyjc9Egaq1MPkneHmUFJ1YUiaizeGAFq8mazYxsc",
  "key16": "m4XJJqcArWxLgCJNUa14x5nAxoHCB4wtpaHLfAdETYxPB27TracXVAw5Ao5uiZdePaHs6BGSFzrjT9tSBMBZvmi",
  "key17": "pJPWrjCAXwXNLLQrDV5fmrvxtkUMqd2RcUCuERkUP8sD5JfS7MFWnpnFBY9Bb737kiSDbncNAyb6wnyNQt4Pu1s",
  "key18": "3CCtfszUBkx8d2LiWspPpeQyoYbXPumhSWNtWqkc21hGdHAea6gxEKgEPhsrm4Xy5KhFAtkptgb22vVCvgCv5UzH",
  "key19": "nrFUNvnEV8Q93AF5YBtdUGFfcKVeHbb5RsF45noy18drsxjd6R3tyQu5ZnDC3Y4CEMvnhSdoKJcwZhAXkbijn8N",
  "key20": "26u3mJjtkdytXSrFUHUk36TeEwDnJcJKGT3kUMDAUNSuTEW7BmLDGuZ8VKuwHUGsog3dRRDgoG4WsdwDJfNWrjaV",
  "key21": "4cKiv4T3M1Xe2DfwMA9FHNJ2Y7h7i9JE2nzkaifY427pRNfeoUPCF8vjKXkQDEBe1pfWTgSmzids2xCF1h5ogadJ",
  "key22": "2xUzKxgfE5WbAN9cimsGRg7FDyBNt2wmNPEWpU6TMBi6urKQoNUvhkwnkyNSYqYeHoSywtmCYvWN5vEusShYkZFq",
  "key23": "298PZ8KoPJ5y2JTPrJkdVzwQCmchsJW2SEvtrWffZ6yDN6Vs5yBaPGkJQXroT63UM5rs8Dn843NGPUEBR1ztR3E8",
  "key24": "2ENnxuuEsMojuFeuTktRXMA4bESbEg2GaqB5Zaaj1B5z1EoQVjNTDnyyt69ThTr4GG1pgtRteqZQWkVThNezaPX6",
  "key25": "22T5Ksb3CQRhBfA1C985A6avZDjxVgcV7dysUnPKfDAnU4UrjQ2mxYDpVXoozaTJgwYJnYQeeqKc7qz1EhXZ1FrM",
  "key26": "4Pat4vvRijeoomwv4CYFu8U2UBVPe1LcKt5ysvjpYD57Xitm2Qz7GuuTQw1iFd77hHWeCWUqRXHyaCYDBNAABRvR",
  "key27": "5HLofCEPWtYNXGzDb4n2DNku5VMCxXURuq7CJeSsdRnRR9vf9Y9rLc5ctW78WUjpUwPNCznnjQZftVFKmeCsguFF"
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
