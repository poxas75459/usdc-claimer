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
    "5qxwgT3Nazj3cQS66GUqYoRHdQ9q4CxS25iBDjJF9RXoChE9SattFSzRyuRE9W5nirLUjQjWW1j5nhwB2qhvEwRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFoYmrx34KGvzXSNodLKppqa54RQoorXQJQyxYL41JooStj74NraP7Jc2erbEKBMmMPqJsz4i9oLYsXhbjXh3o4",
  "key1": "46GEKcmXhDYVfENMBk6ZDvBBjMbbEqMo75WWEDDLCasSaZC2Jsh9QMb3rs4h4UZP3q4pfaBK5pHc2ydEkpovirq8",
  "key2": "QWG2PKwe5pVf8eqx5evuBNsDH6Xe4JGiWNeeZvMsCgPgKpZVPh5r7Pyz8bipPrcCh4LzZRwHdk5Z1uP8BabDoFS",
  "key3": "Ty13eiqQJGVj5cCnFxfkrV9yJa6Swhe1u6KeiisNrGeBMWQNHEFEL5MzcxD3noUCBeConzLcJnehrG8fptz8kRS",
  "key4": "2pXMXU9KrAQtNFxjwCHMuMkHwR1YP7FqMfaakDWw6G1671zNquJorF9QH4x1iRFBEAVKJDQVoLjs4ef67UcJzJ3F",
  "key5": "59m8CGtv8u5HhDr7DWXDmY98gnLBmkT7mZsSkxQigAeFZ3Xy3BucpnD4UVJtdSY1eJtQkj3fXBJoZUpTodzPN6pU",
  "key6": "3KGwyaLtozULSvPxYCyfjCgMnQbEFYrJLho7j7Y7DZbit4mujTs4EEzoMuPXcpycY9qn9Lvj7pfm51hR9yTv24kJ",
  "key7": "548Rg84V2AX4Gwzf5y8brNfrCLXHDaZu1CC58Z63TY1iSme2qrMYpvB89MNZCmUjKzJAjJTAWmZLvv7E7nPoiHPr",
  "key8": "3qS3c16kcjsbzHyqzCrEChRsB2XBQr9c2HERigHkuQt9SEoxf2NqHB8iegUQLBj9tQT3wD3ZEaUMyyvhpHzu88Dy",
  "key9": "2kF93tBpggZHbXSeJxd9Vroi6KnbzVSBNJaTxABbPC5zBiMVNB2mPWSSvzhvr4TUSQhvsrs4KqYwm3iT3E7a3Zrr",
  "key10": "3Y1wRmu6Cew6nCNMZwG6RDGbZW2EDY3k1K61szucQ59FMg6pBtytjSqYEdDRXccct6ju5HwLhVBFHKPANJZ584M8",
  "key11": "4g3b9amya2gQUnrq48bYnXF4Wf13VkP3JYLmvG1bv4sfarDZF9HYBgWVuNHY5iTFjzMfMuKMCiDVQR8Par5yUssq",
  "key12": "289vZ6359h4TfszxDKR19GfBEKSxUtKmyLMvDntQC8nrDpWBzHcxk3dTgujAf5keW8SjSztayUHy39kASqVRhU3u",
  "key13": "4hJ5qnBfXcTxqQiyWb9GsZfA5fXMw1nTjfZVHuTgbnm1WoSVj3LbapGwM1K1iL1PvaKcRUKLjtQK6hNWVQJEPfT2",
  "key14": "5zaeyoAKUF3iTtJULKLguvgoriUHxtshm6p8axvqUkzzfo75PCDGaB3BeBBF2DFfkQm6YFydnsqCRP5saxEeQvni",
  "key15": "46Rq8koVbiiEVY7sXgBxwHZc9FPPCNkJV3YcExWeWM2CB9XPy3g7iD8tQf7X77vMkc7CouPKGXtXvqjDqu1cQ7dj",
  "key16": "4GZUxJem3DsCMC5D57Gtu65naDHNF841cGeXBFWqNNbUjLGqKkBqB73xbfipujEZuJZw1Q3Rf8ThoLcszWYYNMqW",
  "key17": "4EEbFQ6A16KoE4dX3aGQGBrSXm5XwQXNEEiaLfnkdQgdH87h2PpWqZcQq9aWWdXhViWbx4kocaW1XeonpSLC2D2M",
  "key18": "35xy6bZMsb1oiS1bibjX3f8tyYoXRuVY3DDqQXNLjwXSSAsUaMNAWNzYppYt3URx9fuS5zGHWm46xYUshzmdnU8k",
  "key19": "8KQ79VpSZ1UHqfUyXGk5SCRYAi8VH9gi57f8axuJ7xdTFwSZWU8VMEgqofMH6jafTALhjSraWZ2aDRp4wMxFVYq",
  "key20": "hhxmAR7ATu3vGNVePHTL69k17QZ1V9miX2Kn7xanVLJdRa6pyo17JBhqvgFZEPjR2GHJ2DvpGmA8BTfoJPexsvu",
  "key21": "3ngHxRLLwGJBpAP6sHtHoY5yCGd7eEkxLTDaZd6rZLc2C8yD1eaKhwAAhKVto1wrJxDtGUpdGaUVubsVPSCANhjG",
  "key22": "kQNChdX9DnGpwk7FAtGnoc2xeSjmv8J5k4GygPCvi3mRUkzdpzUSeJ3ipxzcDqLvCR8Cqgw7PEKGxrXyKMVRbPv",
  "key23": "3Y6xuxAirTNdY3h7QZLngepyCNv6WybiLW7PBPhWoY2gJ7mh3PSJdamKxCP5oyAQMYnuYqZMgz7tHgBYoYG9v88j",
  "key24": "3XNfjuWLiQ5PQEt3v4RKXKRgMzETCpWvvdD8ErSLzMmcvys3eT529VQzazQCCjRBk4WMWTzurjEYYufuvbBS9xxB",
  "key25": "4iCT1NDsEdc8136JMG7gzAdb3G6RXjy2Yxg6mVTPA2arAxzfUzEUgFhaqQxYxib1e9qnETpAbTC63wdnMtAjgPD9",
  "key26": "5RCzwAD3MbfE72Bh8Df9ZDSVmVrmxzyz5cxUzUTGPGyT3VWQoPRJKmtW8Zf7CNWQNV1EWzdVs7iKbq7eruThLVDQ",
  "key27": "4BPL3UXzWvCM5QJXK45cUUaD1jcEy1AUeVC4stcdxkQALxfrFP6Lumfd2vaYN2zfUwjms4cruc4CddPqi9zgsYsT",
  "key28": "rjxTENFN2tFndFVs6ttiYc6ogWEAMQ6uWVVZwRr49whQWgGyk9YjYatMEzehLAt8TMGba1oTTUCPLfdEpndTsFf",
  "key29": "FAn1ow9sDSKptADPTyG6HxCNUv2CnCTcx78wiT62RWvBjtnqbUevib5TjGmKPXQZFPV1xgaQPnTDLgtK3y63s3h",
  "key30": "3h5JJmTV38KHauRLDFP8jaRCdTjA2Cq2kR8m23p7FJ6qXBp55taZqKwkUwBMyuhFJHNqHKiqych6bU1eLoueHawT",
  "key31": "4WgqGVHy3qz6CrqSdyvUHdTatEoq2T5NpSFDauAroFjVW9asH17bhpb2xfLF6K1CgaLb5w6cdtaX1ZzoX2qoAuZ3",
  "key32": "UuLHSK9WU9ptLUFTJ7AHCrRx1poR8nSeXocYsaSSbk3jeWCQuMLfr8Rr3bRWAcRZTvpG2QACtbzF5VhmNBhd8Ry",
  "key33": "3rrcHtxnvWUB1WJHiWmF2fXVTvd2gNvdNaSRjoLCsB43VDUpCiSEqBFWRr9YTDjoqcmretKb3fXbMkGMN817CBXK",
  "key34": "3o1TyC2Ehs9swPZraXgzJQDCKqBR8sU5eHzsJetytZmAXD9PCppYdzUoMgGp5mUJfvHweNTN35aRnn5wK8h8QScn",
  "key35": "36ZQMz3oTYuUw6BqCk9945pQKpGNjKpPefpkbV31QRn5VaEpY2j9kLNGWwNQgoJLkxd9r9mcbhvsEHraXnECGuNC",
  "key36": "4pF761Femvzufyt7SDQGQ9jdc4urfr7muFFb5HuhLpxExYB1fZXL5qV5u7d56JoNZxxkbiBFPg6fU5eKyfsWeptA",
  "key37": "4zPJxTNjesCGqfKL1oZr8Txtvgtqtqcj3Msg9oCGgk1z9Ux7CssHvgZwxax2CmxbqXcX86gkNVPTGR8E7z8sAS7U",
  "key38": "2cYUDxjUheq8mLKmALY63z9HAwe2zZV3UdoiR2ESSLwHfb7EzyDdp8xFs9S48CjvFAUdN7wCByTDsTskie47XTVB",
  "key39": "2WK8RHVbbWTJtPUmSa11GK7CN5z23B4UpN7iLiTLByPeXAEFH3Ake1FWs83xuGMcjmVavpYc7Wa2MDF7ED2bX9tF",
  "key40": "xm4oJVpC61gvk9nSzNvN6M55Y23hWkbWM8MiZsxcQFgSdKfi8E87S2zWTsFKng2dHbacX2AKWXh5BzJxoNAy2aC",
  "key41": "3qGEy5mSKmHgwCx2bKG9BXEpU2aS4JfaEt4Sj6yPA8arAbhcrs7LxtG3mnmawJVutiLoC7uoJ9TBiMtSRfxwU4zr",
  "key42": "5Ux3yQc4NJ4wVfEccorHv6Lhb3obSivn78JnnirEjdQ6joqLudQtX8tUewZwPZ8YU1FevvqJxeqkB7PsYTJuLcju",
  "key43": "5dVraVGkY5yFrh5kALemTQxBjmTjve6V4LkM9ySxpqZ8xmqCyLkPhLyMa2PJokzsRMf5ue3ounvQaP843WAYw2kP",
  "key44": "pjoV22SB7sWzuJ2o3nX9h6LsaiSTp93psGvNKmBXeQTz7ckJFhBSLT6KPxSdxVf7qN5kq623HmK279t1U5maBy2",
  "key45": "zte5aTU99TfbyZPhf61GgWoBBnZxgEHF2PqonekDTPZBPRiMMETBzAhNtCjqLewz1LcYsVcoBCc4rBnUzw28vmj",
  "key46": "2vjeug9B7cRpn9uW5hWo6sgWGq7j4wn14igrGA8R8PpWetxyzZa7MBzsdubVeWPXNBgRUVsnj4q1NFp3yQcf3nP1"
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
