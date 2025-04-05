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
    "5sqjkvAoJq3Nb38szS36bdfVESqXDusScWfk34mHyC6AXURokroBTJtpRdno5Vr3hCpxZXsYZUZJbnbBJ8aJWSaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SkssuRjK2koCVeJBK4yc4PGoHkPyqkdEbX1jAb4hn3Knbo3iior4YRkMqP8ckkQsjoS84orEsD6Ykx8YvTTr2Ac",
  "key1": "5YLx3vjbynhT8irgwm8dMb574z1bQTtLTxc9MrAFwtqvoRxhhPxz5iRew8CN2Pr8JSxefpeLN9waAtFtyLhwJocR",
  "key2": "3KJYyYkYkeEVpvTSfvuKK62b7ThVxmcqr8MyqWvYgYzP4jN45262Y2Qy3CHtr56mVJHnpxYPvZX6BSQCcrws2PeW",
  "key3": "rz3tHdRZ7JCm5jKrzfQBBuLJGUTza7TvXTbcadVyqq8zQjJHPzMFws59bzf2AFLeXckhSE29AnZnyuDfDqPZMoA",
  "key4": "4JgjXekUdQW9SBTuiGCZRWy8VoXz5TmgdCPu7CogVyHeUXbHmrDZ7eovzde4bS8vqzDNAo3wC31oUrSbiidvEZ2R",
  "key5": "5PeyRu4rcfnVtNKoqEDPY5fYeWRS8ZAjtHVocChWsZDg8aNzzbyonxv9TCwt15JvucDfKoNTY7MZN8khvmE3oH8j",
  "key6": "27t5oVqP3HxEYafwUJswmkYc7RytgMVq4TmnVde5NTxzqgifdPKWxd6tSoxWdzSJxDx9Zep6kNnx5rGnPqVNzVx2",
  "key7": "48kg1erTJR9hpJNAphDAEA6GnUbmYCMDia2c7Np7VnJMgbbqEX7sjWrN1bZDmajX3Garv5BQmYLJGZYsnyZe7jxj",
  "key8": "5fGwoxMURj9dRqT8MCNeNbciMVShUv3d4psYGX7UBFE6tELgwqbsJEVVtVDk8kW3pfuLBgSUWQV5yEwdPcDYft5v",
  "key9": "22B7n2D3QpvMMXo34M2GR2J86fauAq5VNEgRWRtFXaVV4hCTTamkgo5GPXX9sWQKMttN7dYxi79SmmCVJ9f6X2T4",
  "key10": "5f5VvYfj7j5UKQXX9jEmDogCmZZxGuqbVaVRn2PtbewuNEZqELf49RsJL8ZLb7cz5SBng2DMQr9xmz5rXYrJkZUQ",
  "key11": "2weCfj5yV3n14ujZfrzpxcPwYhbY6sFcKWwc4R1TLdqgazrtbMjKraFidbaB1SuGhEyEUzuZUWM87Uik5yFtsuJj",
  "key12": "3RNx1y6rhbW7MrSFXNSvNFzUkEonVqXwdVHHDJN1mXaM2ThUUj2uFQBbW5ApNoBaNXA3xZqs4EFYxt2po7vt3Foa",
  "key13": "4bpBmiSSLz61UwnQGy8EynjQvrTUJrfgNL8NXYXVfV4ENLngFwZBhJ6n8JEqhezXpo9F1JpVaVNnLEfeJJYnGMBD",
  "key14": "4qXSYuLPzo5PQQWCKdiYFrLJzyyHRWDdgGbsxaZBJP6mCKFinhbF5XU4WJ6pQLxWG6aCVw4qyFpr6Kavd7KfDRs2",
  "key15": "2Ytixr3nQZ5UqZ2cWjQu29Grxu7HgrQUVZmPVQUF8r8DYewVH7axWQTwmpMwhMKEHBwJ9TCsUckiRRzxrMw5LnNo",
  "key16": "3b9YPPQc9kP7La9pCKCPaJvWsFd2WLo3q2SemZbQyemk4M6AMyXRhfbBnbsBSHoPrm9wuTS55Azi8tbaj4fWYMPf",
  "key17": "5GSVa9aZupc3JMKVHzRsQtmQHiNLegdSRo9bzLwwoHsGZPa4ht7sATiXpYMNB8ZaKaSJauXZkmRFLfqiSSZ3Zzfe",
  "key18": "CZLu9sh5RpUNVubxF4oNLqBj6H6pBJXMEpKYsw2Ahp12dYHMBwkA82dzaNnepdQ8nGcEGJCjsfaqihuKEHfHtVf",
  "key19": "2hSS6cH8fgYfP8BsNLeBFkLcnCuSvD5rBaDpy5i64YwV5BJXKrV1g2T62HUjdkJxbt18c45bxkVyUTtA8eJ7owMV",
  "key20": "4mg13u4C4rxbQwYbczZRGCP5USX8LLpTVZJiWq5rZX9LGx8o6cvYEspjGuzPUST99qkcN5FC1wqR7ZWgrGTuoFgh",
  "key21": "4SiyoJ9th9r2noCdMLXKYpebu9afSDgX7JC7CSgppxvdMVoZcKjjJEVQpU3cKFr5hmtViDjSaEZHMmzp7okp1es9",
  "key22": "2BLChGp661UjSv1dtFiTRs8WqBNJiyRrNyvFqNDVT5VzCenVMACH6dTKQnKCHftqdF3itoe88bBojmp8aU7haPMu",
  "key23": "2XJmvzfSs1rL4kNyoSRKrhyeVWEJLWiEjMo9eZ2EvJNTvZ84xmsE8kgDKZXekaKJhYq89ZkmAkzhyAPAEvmuxcgy",
  "key24": "otLFCsXwABsi1kJRKs9LLiZi6pi3SuV4Jt36av4bY81yR6ojrSDPiqD5EapGpfChEF59rcQ2x8yNuepWxrM58Gz",
  "key25": "5wKs2Q2ybmGbM48qQNgdRjEzL2G9goDL1tN2KhTmDqN7qaXVeUGAXoWqFSWEDKUfvbvyyMThCVApvLeiA4jQCtX",
  "key26": "5Kumcxh8bWqPHVVgjA7PtRqXMZ7unZQ9Z5WpRW7kmduA1xgUdrNxiqiHWkTJAMgG5HdwchkcquKn5m3nGWCkNgGv",
  "key27": "LrUGhSzRYUnzbTte6V3Fe9AgWLFvihLBq21jojdakqAyeGtEy5XifTKrNXrmMHssokRZW2GHFmyZ93nXAPE3adr",
  "key28": "2HbG6vfJVRqj7GQoFmhbDLvt63NfrnreENC1rZUR7DMvdoMGkvHa4PgGjfXg61tGTcCCvAoviesM7R2wAAP7c22V",
  "key29": "4DKmyeRQxByUaebzWe4sFm8uxbYc1PNQPkRV5DG88BGSEpZ4kQiT9shZqVCU5gcTMeUeo2p9DFus3XfgYKgSPcsc",
  "key30": "5dPayWycrB7VkBgH8fkF4xHXSYNNBGQGJaoUDxHj8sNfGPyfeCsBPqWYittecKrtVfubq5F1xMcGFhNbRZsM1ai4",
  "key31": "4AEm9cwiYqpi1WrqGB1yDdJrcPLSekJUymjZjUcS9sAEta43UVKkFkgokadmxb13YZ9VnLwFekKYYhpHZQYAhRoz",
  "key32": "5CHx6LyfuKbZ4j2DXDiaWg3gznheDr9Ki1L51ADJoFPGZxFvwVAfRkRPMYsioQbf3MMYmDeKnNtcLhQVeKJZrKtW"
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
