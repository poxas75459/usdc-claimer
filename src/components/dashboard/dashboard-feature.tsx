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
    "3LxN5csy7LtLf71oNk83LM5vz7A5mdBUmkWomE3RCE8o8EDhQs2D1oV4FkJjGwDM9YB9w3ekqeBC6dCqyqvj7mxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwTuCfQiEBXLW4EaFkxtau8MWygPHoJjvauUiuEkJ9TcrTBL9yMhgMq3zKXcoxRhh49CosrdV6TFMhhoikXek6Q",
  "key1": "4JfkZaCdngKd9D4ubeEaU6uGgytoxf41zgM8nSwo6NTx1W5nxiugWUWGfcrbpeaetkLQGjy417Hcg9wKLJ7vrFJC",
  "key2": "Y4FDcTfezuspv2gdaBokEYuiDsdrKJb3Xxd2BHYskhzZ29u6ufBDVGNf2bCrKdeEhmzaPWVAsm6YAHKRQmKRQ5w",
  "key3": "5BLuSdgGjTb3T2wbNyrPQh51u2fAmccAiNcFDnXBCozvWdj94c3QUCRMVxEwK42VfhbKmpapiRPLKuanuVk6FEiS",
  "key4": "21SxeHr7HkXahXXXsapa88LpRBEUrVnQwjRywGbGT6dZ2HQrRNpxSngWSStZzjQC77hwk4NL9gTKZSVXmj28dGqG",
  "key5": "5S7yef32rSzqnwbML3jTvhQ28SHMPMnZDRxcryXFf38hbqSuCUgnTsSYHnqCj7XdARzPR65gwkCBDTSmd3xXnGrX",
  "key6": "5FzjgQ71TZT5AM5gJeAaPwR9c5QoKyJMYm9SHVQtSwj7XLWCQTwXNFNGwrFki98vDxTq2GMarqunrAs4JFbpgSFC",
  "key7": "qUFvGgMWzpuhnwFaUWWmpYYVrJJD7KNrMqQFDpiktTPyJ9s9jJJYiFwNujVqp9n4enLxEGyFwVFrpreggyrbquT",
  "key8": "3A8AQy5cSvgKopa1m3RtF2nWpoFAh8S5Q8hbuVyeAHMHma7PaYTuRWVEfgUzQkG8VHFU7WXDPX9VEiY6unfgbbLz",
  "key9": "316Gf2GNnLcYbvAynwJZSqQXEgrfL5JYgusbMrf5XznjnK6m5nwZywgmmAvERMU19hH1c9LKkBFExHUBq3Qb3ghk",
  "key10": "4ttawktDvKgCGYWoeU7EnisrBV5v25ZxSttzoZ9WEQkK8hi698HYU8M2aTeLndq4oRDPAs77aZjvytCpu12HJGWJ",
  "key11": "415Trd914tyagHthX7NSra4Pw9C3aQU5x9QanFSYD6WoZvM1WX67tHQvGKoEYHXZTc1VooPm6dAM7qaKRyC6MnaY",
  "key12": "3FAAk349aHjKhaMJYKyK9AgbrXmHVLenXAo9W3mZQN9uYWBA46KbwsvXMJ2hayjRQZ3NK35t8XKhfu6GshkPJEyu",
  "key13": "5LpKtskRTZnhHHTeVKGqV6SAM8VA7FXoMCPCEopsf6aB5Z6pjfTYTjcUSZFpH1gPTgMM3XUbxTBeJdCHnsbE4si2",
  "key14": "A9TGLJdU7F4MWqEFwYWmUWVniav32Wczs76B5Kxh7myJR8goPePSxYLdomCVg4trd5XGpxGDYrm7UNqqq7zmyrC",
  "key15": "41p3K4b8WettiK9gooPyBSjxq3eLXpAEUFFs8SFMUuK7jvUusfJsFX3QW3rUGqUArfWEoN9SUziH1WhNDY7mqCA3",
  "key16": "TuBTQJF4VVBA78HX3aUE57iJorNz4Uphj7fH8rT7wXikFKFAe8VM5z1unTqWuK1vPCGgD8Dktj9stSBrY1zWxot",
  "key17": "4Dev99At4LHP4icPXQn3W4WriC8GcFidLeUC26Wi3ui5dUU95DeVYZRo1ujxh6mfiTnc9hqDWpxqJ7L4BALpZAVP",
  "key18": "4NwTpQZQruCPyLKJzQSHLyXYhDTWr2zB6dBuvTMf7Avnaj9dyYsjs8LTjSgmmpgoXA2hSVq3iq4ZWp9s3BWTECk",
  "key19": "3n9egCbX8HSK9utg5gUTsLfViaEb7TZbAdXtwvdSD8aFcxBxyqNN5X7iYoP8ZUSB51GnXhnYx6CK9uXSYiy88ZCq",
  "key20": "4jgJXgKS4gbPCUngsvRKxmam4QR29jgxm7pjhPjz7fv5JoNs4wMUUyEFJ2pHb7PTKiSdHq2M24mQBW4KNqWcDJ1A",
  "key21": "3gank8JEu5nonVC5wE5h3A39rKN5n8M8MGVefbd7132MvD7y9WQ9vBQGLWwhbcpV67AniXPjXLNq9FLLfEmEdYLx",
  "key22": "2cHdQoovxJ59MhF4wiZvjeKJXnT3ZoqLa93XV3TSTg3Y1U8JCxSgHC8HGbVePZ831nSdqd7Tjr8zMgBsP7TAAUXQ",
  "key23": "5n9XdjFfUsDzkc8yKrw5T7v35BYwa5L7buWmgRSpaUzUiAc5gAdWvgNJ9S1iQCdWV6TkLe6P2Kkbt9w5HfviFjq2",
  "key24": "3t6dPyHPqSQT46CS8hBp9uy44y9y5iz4gC7RJquFHKonvk376XZqwUYBEEtJ6Zk3yFJLQrJzwKcJHUZuUMmF9wub",
  "key25": "4U5rNhEoj5dqqw5xq4tpLhTLcgvKbrACTyPCs4kccFRdQzC1viXVDfhUYecjfa5oYR1bVXrxVtadLKDG2PmdYoxd",
  "key26": "372DWddG5gn9siqBaEutA1EqpR28avgEmMoHPgxjqv9fURECSsVSeimML13YBdxVDRcwy7vYmjbbNit99jmbKSNG",
  "key27": "zTDUmh3mCWyLkhN1RR2d8oudPEFXbz7AMcidoHoTeJQPwTXEQeCN3wiysDXBqjbUKzRfXc14Cpj3dCW7Y4z8nHP",
  "key28": "4wweZ2LYQdGC2moLGUu1prrKhacVQTJWogyuxtF9ZjL6MvvHQGjCGjbjdJUx8yWhNaUwK6jrEDCVwN5wShvwcjGN",
  "key29": "4sxcvx1skmVF5HqKJKveoUduGvpbF9rDpPzwdRSsBbJECEo97gRWJnGsCKJLQLGUaRTXLGB1bsAezDKbYJwWA58W",
  "key30": "2M8bAq65gFNFbmhJbhnXTRCqD3GkXYUtCwjVpmh6PjSxR8tXNVHVpRTF1C9k6xhSYv3ABWqjD8Q7awhAijPTqjXK",
  "key31": "23FBHUQoBDyawAPRGmrjMaBRWkyFrQdWyA19PZs6vkKqkPQJnkPWSDUYydK1dCyrLjYzSqUqYz4NzBXX7kemcRKu",
  "key32": "g4icHVb3cHEwrECHXUwhYHJnzA2sRXSUDw5TkP3JU9W8YP4uvcu4VBQ19GmWpwQo5JpvgW2sSveoJ7dgb3RdT2K",
  "key33": "4gF1qCz7JxCkWizjRdcswGFrRVUfRi4Ejdf5uf47zbaE26zrv3igxKqTn8W4ta6XKCes4XJ9pYVt4EUZwh8NARHb"
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
