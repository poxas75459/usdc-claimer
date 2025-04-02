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
    "3E8nXEYAt7Qf6CqX7s8Jw2dshCzZFwdZnndeBa2YAMC4jeocbuUaiKs9sHXTZMQUPdMdUUTxjsCao2szi6TmDuSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kymJi19ZHrBDWLqPzBPCk8kaXz2qHs6VPim3hNB4vGguqFpavrNvtKESJsEGBGgXk5zZcUhcrebE7zLHPE6sZTm",
  "key1": "51TetBYR2Be55mmTFK9tVBvms74hwvx7nFHLhrTQQqYT7ko4955WsxaZadeFbZcbeGLhFrU4N4A9kYhCN1oRCq7k",
  "key2": "5P4mxmKiSxv7UvbepX9ruPyj689cMqHnvynCSiXvZxtP3zrdDbyi4WYN184yZfLRakEAevyG1cvph4doiNFBFJoq",
  "key3": "KkmaZk8g6mm3wjSNqUKZX46ffn6oNc3pk2V8hgWCwFzUNh2cdbem2vek2Jo3RREqwUgvZqVqxric9cKEpmZGKTy",
  "key4": "3oEsiZi2rekiFo1Y7hAu8PtTYDCSEPFUo1iYkrFmQDLAMevAN2o4j3THUzBVoUoM8BaKKQ6poh5t2vx6rGi32hAy",
  "key5": "5ENLQzMeqHmWJMyX3bHUboREntJmwm8ujDyUrZJdiQzW7C8vPBhPskVFg57ZsRZpNKvAo1w3AuqdotFZQcbe1Vjt",
  "key6": "5LMmQ1mAm1bbkkp6A7z1zdyWXjpBjXUDY7GQH3S2dMUf5Hc8kbwMfMHxik6SWisBN8UuvRrbbKQevvFjDEokjmvu",
  "key7": "2RQoG6Si8AssYNpVs6EhpfBpuhd65yjkuty3eHbxoVT4xXaKshftZcDJuv1UGREHNAxaksteWWkij7yUfQcSCCVu",
  "key8": "5akcMF8vCfPNovnVYjTmiaUaj2PPaM6udRnNdfew4kAvWKJd7t6QG2SgNs798h9yf6rZtXdurM8yR84p6oh1eKKF",
  "key9": "22AD4AuZj3yx1epq9rdj1nxkc5aB19dxvuEAdvjejGD7QRctPkJ99dtsNuASnTon5dnAwbEGZhvHiiGqGphbd1Zy",
  "key10": "2jNuvyxEUZyZ7tVmuj2MQCBw7zNtVg2fZoPRs63wUY6RFywTAefLG9zbme414T26SxzopcZUSjW8WthKx25LFXSz",
  "key11": "VXojJmq2XUMMAQcy9eADbWZkb4c4eQbjYffu38frmEcJ29KzNPzBksEJK1utBtif9FbSKShLEhZXGuhzoNnKvCf",
  "key12": "2JNVFxgDnU8vRMUVUyTuVZiEJwkeyXdV7ruLrAVnkbjn7Ze2cZ3EbUP5JkkUXyLpXm7N77MgMUx5pxq6ZXhG2Qac",
  "key13": "2bUJLq9jEFFigvhLWSfE92dghiw5F17vZF2y6JfntQZZanDsHxV58JVynrd4LpiLZQ2MC5A6exAeiECvwRChsJoi",
  "key14": "26QZgw5PvCbK1xwi5GuzhZ1NhMm5zsD2bYuJzDq4ofh8Jw4R8Drra8BSXBscTsn7GJivXE4D43QWSDjqyR8pMN9n",
  "key15": "5s6BL8NBLjSuAXJSWxuHaKS1onPaTwgSUFXf4TUZMZAquTMyVLgsxoGv4bg8pWTNLFKk5eJmyrmhL5LdhLCVX8Gu",
  "key16": "2kFAJ3YMuSWYLWjMY1pwfsxvmKoaHwNvGisigSyX5MdXzY64eW98v5HCZgYifHGeTKPdwuuHm7SoUn7xiYwWnk9m",
  "key17": "4wSVoH5baZLwuuHJEmnD8vMSWoXXBirKkBQbtSjn9o2zGFRRwUrEVS9EM2p7v2yL99Z5kjde1A14VQzxzJR3NRMk",
  "key18": "4XjeSQywqqkZgmw8NbSzWkNjEQf4uRsvkX6npCHaaxF7FuXBMBSnemjU8VR7f6KbiuVkH8PDYywNiVGCwVdzfNoi",
  "key19": "4oaufyThjA88LsyNsxWDXLwsmHAw7VdedwkVre8UPZ8rb3srFxanLw1YZkGgXKY4TvGdu8Xwr9AZDvhjbgJo8MMF",
  "key20": "L6LfnJPumsxMXq3mj8rvMw6azyiCeuHvLEGBUuPq3n5j7Fx7jJv9SKHjZZmoHUBo2wXSqY1TZRrvrhRCZXa2tMa",
  "key21": "5EvGXenBUdYueaRP1i562eyxqijazULx8vJUSsT3DPZQEgTszXhTDDhnfAwjF3v21UTxB2NP8aD62d2hLygnVirT",
  "key22": "54XZweDmw3PYRy3yHg5be8ran9jKuz9ZnmijQnMmK5GMqDwzT1jwvrYutFhLQrEUFGneTNRMiatBpBsNNzXx9Z1t",
  "key23": "5fb7hQmh44imKjfqoFAojeNPfLdNSAzjqtnRjVD93XpKDvvKmMx2Scz7ZAMwDXMLgF7L29Ga2WL58f94UsJtZoVQ",
  "key24": "AzJCZnumT8wiQU9qVw65BBPkajQYiZz83mUi4iQxJYmrVynqzxF7hgoFY3rBMeRobZLB5aDbMFq8vKxju5RinXK"
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
