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
    "4rhYmwpV995bvowaYoipxkGNyYegxtTyt61xc8qgVmZkN5QGS6zxGVFXFFm3W4mL1USyAbwHxLPu1aUJkkbcq2x8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pg8gPAiWV1AwVMvBjvD58nbYYbuNNdzWm6htMbX51vw1ER3PWVozipP28qzh2tQdLbda37gfEBX5m3Q6c8mbj8H",
  "key1": "38i7ERtBfHSKUuqfyWq21CBXC4orpU3b8xXWSAsrK6Hzy1XpMzHzU8Lw2MA6Sbk3KDzXu6bTSZeex8fKgfLoowD2",
  "key2": "2ZG4Wd3ckgfBwHJHvy4LmqdnHsCjr5vUbuHeZtsTfpkikVn1snwqcitqgSJ1EV1Bs2hqaEiUUmc6DRyyqWHJ8qz4",
  "key3": "5Gd6pJ7GQW4gjw9fzeDiXhFHSa2nC3LU5Y37LfgbwBTCDzDGknM9KAjD6HDpuS5y1TbQqD2qGajk6xW9TbuJzAJ2",
  "key4": "2ebezBxrXynvfG9fM157Z46DHc3wZbV16uzD4WXiMSwW2oWCSEqbxu7L8J9nazZcGgM45UiMkKZfhuJ2Mg1j9xG9",
  "key5": "3236URbAZwfxA3K7i8gxuJGj1L9XMyAXX3vwmZM12F7zSqvThLN2RJv1FauAXFnsVkPvgT9W17m4yeixvssagcMF",
  "key6": "5fWjLZGua2bAhcEgnxbpeaLNimhu4xV2QGBw7jjkBQgsR1mkbyvz2KMoQ8Z78tgZHdn6McbaueYFJToaXBN6VGxR",
  "key7": "4XwYxqsCA1xTkMgESeNoQa634AEXWkEwH7BQNwJSpNXjheKQAYScddxqJhTF2D6ncaTPZRh4pAGLDDkm38GrvbWL",
  "key8": "5fEHS3P4dj1jZHpLD16Gyeb5Edw4qzG1J3aba6EbH182mn3BqSUS5fAgBhW2CF3XgYXyUbe4C1mQBcYvJgyxhKUP",
  "key9": "2W6u14v7P5sQmsG8DznrNxfgJ749jbcCaPBSDqbjU9wHFK2UKFhgY4j8L6Eyb6C1ZoRhMPVxAjffey4kiEarN32x",
  "key10": "47s8N3fPBrb6Qkm2WJiZgxuFNn4qo7MrqRLmixnTUFDRqCokUK14pm6ND2VWxzuETJh7X8Ey26vSdAS2DgHiortY",
  "key11": "538WopNvhqTH65rYPfnVe5aQuwpD2C1Ux1KhSdgCrRkf2n6CmUJeaLdy2dzMScmmMQQPffDfN15h2w7ZrMM4dMeh",
  "key12": "3zKTVDVPPfBa13Sq6ob5iy14qgRuLfkqCzZSZFUHVCB4wv6PnvEjYXoeRo9Y8e7u9U3dSTnxeyCA653rMvyhKNrz",
  "key13": "e999EiQ1NjQSSLgRxiMKKswSvprgHJHmJsQmiWXvMZXwCqxdYG9CxQ61fQKdc7LdWxRxiwcZRyHpxxVdAPQRexp",
  "key14": "3jiorR3jC6RpUj2B8SwUGz1ZXZypHvtcum57V3VMYQ9LtW3AWhHTnXhHhLPmMu4234zmeCK9ryMu7KZrr4r2prLV",
  "key15": "5VRaaJoxWcsmkWDSAsFMn9kAUr6x1k181nCKMvgsJmmPY6pdRcq9xobjkB9xbB5ymcZwKvvBkzXRh7b6ztsP2yQA",
  "key16": "2qXBuEGNvn2hunqo1exb3F2tAvVTns5yZQDPauSgHnMSZJPWoKipoF5ttBF8jisquEYxUZvC4c5V4ZDX8UrBAPBj",
  "key17": "3fLTdFceBKzyCmi3dZWAqZTQopb9YQuZo4VXdzF55KE3mY3TUEhZnQmDtwLFHr4gk4VGootxGwn4YDGvdRPtLVhd",
  "key18": "5E9xjmfpiNwRBuh5U3cuMjjoEXhRpNqeagW8Qtad7y1aZMqA9ZyiDifdWaSVMDYaAUXXKHGR1nsidA5Nh3Qsex8P",
  "key19": "4jD9Sg18yMiwzzsxKFiVCg6ULCLTk3ZKyAAZFLNeHWfWFpXfc9KRb5p3vQ6EdbqaAcjnpiLcH2TLVJbNKDAQ6uZU",
  "key20": "44ZbHATdh2ZLjY8ea9GBZkLnv4W7rFf4rga87tLPybwaa4xa6A4bpb56YBpcj3LBC8zLmA3mDBj5qJi9jSPjACpU",
  "key21": "5U1nyQXhWPx9QBi4Rwf4G1uYfAiQCzW5BSD6BhtEaVGDNuPTTxcT2fKqCTEaUohF5e58ATcpb56tJBGamRDhyjfh",
  "key22": "5spPqReUjzhe7hW9MJqpTqF7uSeHk4nrMa55rpyGx3xKbd6QWNkt49332FaUDhpAz1U7bQUh2gxEENPk8vBj7uSW",
  "key23": "3j8RK4vshfJz6v4ihPM6TD27EYPVJS2XzZ8Mi1gy7j68mp38ChftCdanAr6VSCVYdVnBjetVsXKJTmepnAEY5kXx",
  "key24": "3bpWecVyHW9jCR8D4uStVvJfQQUW89Vxj2QyfKhdU3T8kdgTVwHEwN8sefQeHLUfns1xk16kTcoyQSwQ79oS1QaP",
  "key25": "5RFS7SANU8Rk53UnkR3RZ68kR5SbbGkq8Y2T4gtQGC1nUJRh8LuiT7UZkveBpyyznrxqdPVY5wXpoR2WUQeSu8rh",
  "key26": "2E9ECusvTSmbxjmqZDbcFU8MGjQ6NVLchLGW1vM9L6YUDdYqDu5djMcxhT9Q27bZAdTovFaYMXyAkkx3AuHWMopF",
  "key27": "4XeYNhvpF5Z9zRHDyNLTcrMbXv4bt3zdhJ35KHDmAKBeEGytHd9pccX9rLV3UfM5nAtpGpGZmYjTPvvUaNxFgLsg",
  "key28": "5tNVVFYWkg8fMqdJBbYkwo9GABUdP9xmQ5v6au1HJoFTmqj7xCSVX4MaiQT2ymJ3KBH8JSqAyQ8ZgKqoDKJ6qUi8",
  "key29": "33PJUp6HGHqtM2gcymJCQAfWcHoTk8iBqPJCTWW23etZtUHJgnQ2dwHmWtQzkJaf6RMhWjdkdw1btTKZEykZ7AQU",
  "key30": "5NETpnGx3tN3jwvo9S9yqnhQm3tSpVxR9xdX1nor97PNc373tvTcKQdf2BqhezYw7zeue3AXcPkZtp4aGMkov2v7",
  "key31": "2Z6TitfjYQ5ePbnUk4EwUjyNkcpQymGAwStMZsjk113wfdbk2Bn3KNqjAYCPHUTLyobrASFNDHcfR87LS2RagLMh",
  "key32": "2kSdDeeqC5rVsAh26Fv8Pwn2HPBCEPMsFFWZj7L6qnd7pBSkJ2CmRRjsDxhZqDwZSk6wDDMLLR1XxfpCtKsjrD66",
  "key33": "455qNeFgwzuRKmNqYct6RVFp1DzwFGhx1pKps8hcpnCaviNpc9iqbevxxA9DxV52Xa3WQABxQJk9JDytNi4E6Fvf",
  "key34": "65bAZCsFawEoiF5JhyRA5G4iV9oG9YVWch6Uty262u7Npay4cJzhdDBnnz6XKm6C5qhyfcmi2AgFGQrQY1oe1hYx",
  "key35": "2QUvYM4geECY5F7HjmtmcRue8bHH4PPs8fdGKzsdfPQnKJtdBsXnfb1e9zNpM5nENd6CP52JAxvmKx3TEm38yNi8",
  "key36": "2YqzBvrBy8sVZqhbRpYsvhy2k8YSkki8kAe2NhimQ2eGkxyE61A9xMgRgV9ioY17oaaD4CNo9wvvnGzcF8Y6Wg9v",
  "key37": "5ANjMcFVjaq6annR5Kr8kop5rBb2q7c4ocdDUZkaszYRcBC2LRMhhC8RFLYwEF7v9b5YgTjCAwR3mpNKEg6fRxLP",
  "key38": "2zzQx33gqyioTGEKD8xJZfs5t7DnnrVp7hS51M5ipTFLABnGHi4c5zfGW4zAg2GM5fKTHThiKvRUKsu3vCZkfc8F",
  "key39": "4NoVvxD7F5EqhfznPCTdnEyEY8VRximd9nyXtU6A7Z6Rshxqq7MQ2QfHGrchdH4pbEMJZG8WPCDWz8maWuFFNckB"
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
