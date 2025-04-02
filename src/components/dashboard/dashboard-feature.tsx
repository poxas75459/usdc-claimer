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
    "3Yaq49LziYszTy1pERU4yjLD6amyT5JHHYnJMhVvPVUdAWfx7cHAtNL1LfRAQxidTbtFvo4fjc6HpLXYkvCKfGbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55shVkhD2zDn4rXegyD69S8xD4Fv6XpxCd3FG2e2CkLgcJ6qCosEDfGnHNLquBpi94sxC8pb9gYvUsZEV3UVC78H",
  "key1": "VXLuLZRuEGVfBZLH4jSKRED8tmAntmD2TwkJjvWNcWBwkLZdHh1nQGUUijx2hcTxihDHvpAXsgJn6VavTztSz49",
  "key2": "kosaY2GEvy35fcGUAYrSWDpTsPyccirhmwRoF3N9PM5YQwfkXwnRfb9ckpv5NPZvmXEUBhEUKgfW6D7NKTD5WrF",
  "key3": "5bDSsxncoy81jgitsityxK46zjjxgSRyyQGjbxj6PsrHxypLu1No9VFvSXnrH7un3JGVAmxyCybUr359yGrFqKao",
  "key4": "3GSuaNiUpwEoqjqER5iBQQZgry864ZLgVAhgoRkm7ma1WM279c4kxqTVkVGYDtRkuRWXMjwtzjV2qqdvSVNBPoV7",
  "key5": "5mxAAjXkL9d6MEfPgRcg9sC7R26eUdseQLLQD3aKGbmCL1jxDM6TatmT4XqAF3YFUvP1k4SARV7jmm98Goq72ttb",
  "key6": "3zUCEw7foyRSmfZJu3UV9P2kQrWugy3weG4hBaPF1BBVWnRBVXgtc6ojTW4MANFCZUnLxuArC68YYxEzDPRV4BgD",
  "key7": "NoVgnFvHHzcfvi2yVN1HfypYpLFfEaY7VcYTBjPgdzMRsGtoQvpPiozpx56LbTz2pqgaHmcoyuqqQ3pYW5uNfSQ",
  "key8": "5DSyC9TrqCVieYZ5k1XWDwfGavMJHRwujR4nGLhAEWqbB415eG9UWmm5Qmm8yTDVkqZeMWgCBCSnSGKxQH18ZFuj",
  "key9": "2JeBnSepHYfQjNSudVwzxtEBcY48ZrtbJKnnuF6n4WLS6c3mL9Txg8JpMqM1guWLxaybUsQ7ZdJhru6yz7xZFqxD",
  "key10": "Sg31MAFLBqsycisNNeWgX4BtWM2C92Uj1cousyjxUPWZGMozMozsu3TCmUCQqR6wqRDJudRVqNM9NG9UwSc9hac",
  "key11": "5jprDtawQeKfoERVZpepBfX1nigh2TpCK2HrexFvsuxS9tcwnePHczaxs8ZVoMaDWnSZCztpwbXHoGwCC3ZBDwxA",
  "key12": "5W2SH6wC6qejR5BHgEpkwquJy5AoVa3HLyREGnmGCF6Hc11LWz1Bxk6X2stpo6eA2NCLkHvtT6CZ7rjGFk9VeLZF",
  "key13": "3NQsGLnphzwuebF2fASZjf7ykwG7UQ7SkqZEvyzH8UyU2sjvLhA4PKC4SN2hmguvtBgM5oUwXLgbNLu94QMD2dkY",
  "key14": "3cBF2RhffTZYDZnK3x8y3BDhV2mdBq2CfHEYmWPCD23DWcZHW2UxfmUerEVcmE1YNkNnwcQrP79wumZpHye7tXPk",
  "key15": "5EKv2QFnvYcJuNssAiGVXS1QCsKFrn1A5yU7GUbAdcAncZH4VzkF3JgPbr5EC3sHaM7ZMVfKf3zKSRugSEFDWctQ",
  "key16": "g5JgvgQuEHqNrV1EujqWg1FWAF6LaTtrQPYGE9fj3m4mrshay3BiTM5ePp5s6ScJTTWYBJHp8w2Y8V6axN275pV",
  "key17": "3SaBeTz7BddxvARYmMkLw1dnjH4cuAs7ECfxyHkQbCU5E8isxTByEvZwxUVW131tgdCPbCTwWDSacziUWY2of2dR",
  "key18": "4tMUqghxihVEMGrzRTyNJ8DhGeGBv5veuW1YwvvKmj77Vevygk2UVWvEqTHV6Vu3b3AqjfCzMafhcGfybzQnez8N",
  "key19": "GUoZRbAosq4x2vgzYL4ovq2V51xdMNiqGdgqaAQSYx8N2L5ve724WWt2pZ8CwVEcTWv2GvvoGNhT2fY6mU4nwQi",
  "key20": "NXRJfyvPT7UGqJiA3pReC4ywYsfDK8x9Djt4KRCQSbGwWzgfbbiAHgjw6d7dsGHSipqKA6SpURW3Fnyjk2MDy2e",
  "key21": "4UAigmCsZHFB2MkPNooc5XZDK4hjKdwc7UPmiKESsKDkPxUfRc8B6UjX2CPya6MD8ZUh9YH5SZQL8QbUH36dSHeA",
  "key22": "ga4T7XPeCA1wpve8H3oRdTCxYD6A766Xi4VGPHr7AbRnkVj6WNxhVHgRKZii8q8nnXhficfjwHSgP84esycsGB8",
  "key23": "5Yq85noFRbWXyoSVMhdezNKPAbRQ9y84PPqFoiV4CVuXJvjuFTXpWR8mqxuN4xyVe6WC7mUcsRznkDagdTWdft2k",
  "key24": "4zH89KiYE76WMcRTNp9jnZxnE7rrqdW7gyZAZJvxJF8sHH6HNFKQvEVae7cn6xh1jHREWTy9PTUsp46V5XM6zmG1",
  "key25": "N7WhtuQjTFvg5FFpyEZFSQKbTw7xn3PVFE41vXZjNQ98FNYcEctcCynzYvipwa5LPTEEtXMbwMCxnBTAnuii2Ao",
  "key26": "vqjHmsNFW56mvtFo36kQUDhzGTiSV8nDmBec9rXvSacqqV5cRiSTS3UHGTN2SWBi4N2jDvBXMrWt3rgMiXxPbMY",
  "key27": "4BuFizLooDLEgXnhChq7c4ToZqLbJkxJKD36gJrtTt8huQHJvoDJSxDfctSEHP41HmsKUwtqpf6QnaA6SgJnJj88",
  "key28": "344g8Zpo7jPX8xoLoKZVZMXDVhE4LFBgX1S9R38PcAmpAhfVxXXa8J6Sp4PS1JJ1drcGFToe4EQfkY7k2qBH1AkZ",
  "key29": "4PxgTBYPv7jZRt8iVoLgq4tMfBGSfZxRLhCJehoMvpT5ZhfT9EPkPKe35jgQ8otXPWrbTAPiZp7xxdyCkwDD97jw",
  "key30": "2aVvTyAFhFsgXDiBQfQ4PLxFpH7bXSVQhPqNCLCMR1p5arDa3jw9dVHdesyWdPJj6jM9kMPGnS6duw6GKZGbS5xP",
  "key31": "5TTWGAopqADJEMzUC7vsG9ApxcUzkR7qdheoMphcS9pNPeBbA73cr12vxhMZD9QfrLrdrs4vQ8S1vtoSV1JaWMif",
  "key32": "386SPFmyGRmk4jRGfXBQfc6waDB3xLX956QtvA4aHKfhTxMBdLquYQQRWuagGdNfqtmjXT5d4NXRDRGUQjFNmKNW",
  "key33": "3oApFh55jXD3gY9t15v5RzMa3vTsFtn5yDgfNUfJq9rNWZVt69geJ1Cy9w6GmQDLDgikwxnoLPoZAG1KaQw1Rg5f",
  "key34": "5XFGrdUDvkNwuVVV9hyVCZT1qHJS83gboMYhqy1BaUS8G175A7yscK1gDd5ywhWUDGT2wpHnPbVxKagiPatW4na7",
  "key35": "5v4PAQVBDBiLCizeMVnUZqDJqjcFVZWKY32v7XZvBnE4NXZJ1aCnfLdqX62WpbYCjBpkKa4bcfP46zZHw1pzFbs6",
  "key36": "3bUVDBFsVWm8GzfRbShEG3hBS93NwZ1ydk5H2Mh5mpiAX3Q9kp5CMCxPoa4oqLZG12jhP9gxYo99d8Jr4NRkZy43",
  "key37": "4XC9m2s6m1t6uuFSK2uy3TRpxyXR5xEux5uUwhTdv4Pin31qWkUSwC19BtaUggVDp3tMNWtypHdQ1zGPb2iVT35g",
  "key38": "4YGGfqaYjSjQYU1SBdd96mfzn7CzmBQqYNge9AdTPSDbaLgDzFid4sb7pJgSV9yf5ymqHH3qh43yhbptd1uDtvzK",
  "key39": "48oCVsKSPf7156kYwUYiXwB1muCXuftFbMFETik63Rr9BUyNPGCfTxCqJLLQRpn9ZNthQotMNsFPUFCTucVF5br4"
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
