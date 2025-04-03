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
    "3jnH8Ntqn8YNBVbGgEeDimqwYnXrDf6VdicYZq4grhPPDppBBUXiywdzAUXHeDRsGfgBRm1PWtwappPhGJvRoCTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9GNNv7DPvtRYsfr2ck3aXkR6hj3aSi3JPstghXyzPZVpHj5MFp9pqnohD18oEhSCGrUwYGJNFFP19QFodb2z71e",
  "key1": "3Ce2kxLivmCovofsbCre7tHRK8LohTDnVCt5FCNJetiV6jPEBM59Vb6nhRwe65my8U3deL49pDK9ZAM85dMXDKC5",
  "key2": "MP39mPYuoWyPcKbet9H3stHxrx7TLcHxf8n8e3KFLKRtxcvrQUGQvBhZmqUkR9TMjWUEYgQitEBcqgeNtthDqDS",
  "key3": "3SCm6bx8mUphgXPz6f56WWLNG4p6THR7kWWqxXrjA4T8N9FyBUjoYn3D4rYXNBYw7Y9iRgLgJkhxeUn7JR8C6WER",
  "key4": "3jDmBsEkjcgzqjRLUT4L3x5mBby1yJZv1KtH3TfBqJd3usG2JRsSe7P7YyiWhGbmejkoh4iDv2ttV5Nj5jdJjiyX",
  "key5": "3Mw3TNi7gh71kjBo7pWwrtXtq28MDv3Y5uEvGFVFWkJc6vvEUQqtw2CuKARq2SwSaS6EbQZX8krYHXE84v8zaY6g",
  "key6": "5zN5BKRDY8hu8VexJPJTegmyHawMmxsYKkLTdfSdPZP8zx1q96y2aSpR1FQHGCP5Wx2MhsPVn28JvBhqXErb7x5Z",
  "key7": "4gSeD17CWgWjQuBTmfGunWXp1gRbqJ1xtzGPXyDFcxdDuSZdXCHeM6PXBHDDWBMzA9cxQGUspLjDpm9uMyfEZEEV",
  "key8": "67U9XVq8UoMWDKdU2Z6dt82n6D7Jjrt4gcWtio3LwZ5JY2SvKG9Vru5YQNnFwgiUVA493UrNyeUc2uzpGHurDYXW",
  "key9": "41ZAVGur2QbaihbDXebLV9jbw4mSTaJt6tHshTyqG9PFx4xLcYwqBAAmGwH9S83Pq5n6w288Ss6G1hJJ3g1SPhxW",
  "key10": "5PTMD5rFS8RUuLotDq9Xw3NVVKrk3YrqzNP37adzqWNggkvaiFhDY1HxgjMxefnemNXPHEfQudCX76WxpygofBF4",
  "key11": "5Vbd8mFSfZQeSGnHGK2XzHM8YAaeWvKQQJShfN1k6nkv4uki7gP8LDqkEaXahK8DXehrMwRhwb4mFmCF3gfnff3C",
  "key12": "5JmV8fZGrZbk7pr5bDvG1Fe9GwknTfvNak6skZ5NUbAiPjTzq7fTF5Wfu4J9vc1FVzgJvt3pF3vecGM7HzCSLZYa",
  "key13": "2jyib9iKASsXxHmKg4sKetj8zRCJeWv7ecSnguuuQkVmBfBw7FCxtaLNY3zLWap7z83gLkTCZiLchbe1vMT7VBpD",
  "key14": "4us6mpyMeiCh5TvKQRT9AKBh9myayAQwiCX6SBvtp293FAQYqubAFJTYG13FJdRBXWvF48iwYWWHGENnxqjStm41",
  "key15": "2LDXTGZqM1XhojcvXTgAtWCkPa5LtgU8E6J5VSzeJeNNh6vJ2YqsojUi8bnkZ5UNdcKWY6ALxQ8SqBPNB4L1BbWu",
  "key16": "3aBZCy3qJDZ9Ns4w9idRXW4MrTqjTjpXL2ywZ2qmjW2DeiNTTwy46KrPP2EKJL8j9XLBjprXoujQBWJ7Kp3Bvabr",
  "key17": "4CS7qvQBph4ah6JvG67baBDr2Qeu528i8CH5FrgxBRws7n72L2Eh9CvXPZ6JkEJNoaF1TRM93kFgMriPF8n69Mxu",
  "key18": "3UB7YKeJXuXmv8uc3EHGiEWKh6T9MvPKegjFhuUyWx7xUqQcCKsQC4Br4BWBfzQkBQSj5yW8gbD2xzA5DY12twNt",
  "key19": "4omoeAExV6CNjHxUhPPj8NajKKXkYXX4EHDpoL8sXjwhduA5nV72U9yRtARWQSUCtSuSs6JP8jRDuKM3CH4Hwdro",
  "key20": "4dKzWHfnyyQksyyRx1YKVw69GGaDh2gf5UCasimReGgr7y9QGfmGCisxSexM2H6D5BmDvFrtcJqsGnS5h7ke9Pho",
  "key21": "2q3XQe9C3fckMvRbBsL1nZ6grPgu9iA3E1ok9ikY8vNdecNbCN7WyFp9o5mdKWpv5gmFnMjvLTYY9kphFtuRLL8N",
  "key22": "4VYr7mFSt55CahsUqfAu9KdxWiSFAUfBEZEQwB7L3LfsBGiTZtchNqYxCu18jCNVAXjMiJUqiQucFQ8awDe9fFU7",
  "key23": "4bsrpgfuFMo51z65E3Zvx3qvqzgxo3aAsyMJ7Bb9WRXkXo6Vsbg5pPHZQP13qMnxo5wchS15ZMG75hFsEKFAjuXJ",
  "key24": "61UXsjSqU7WVUrCtPqRYcxuXR1PYsGr3gcuHjmCwjaGC1mKPBi9sHpqATCbzyn3zwoKGvXz63ovExXLmnRYCC2oP",
  "key25": "257fPqmwZSQzrAtztDJh9u1s1tsZ2pvy67gZv3sg9uhLy7VCD5DnVErsxw8nutKD2R9nFMbxXwsu8dsu6TTKfQNm",
  "key26": "3PUXPRgLThXqeG7rjo9xf7xoWMAgJKB9ovkBDb6qDxwKade337wTvLXZ4MWXP42Zfhq1rzoeH7Au33exCmGjmCpE",
  "key27": "2iKnTxmXUUy4zt9aDD8MLmYVbEpQbo8M4SM3CgeLBDLH9XAqxProtqwSq7FrmcPRbbBCX2bHmpkEqZDhuASLMSUr",
  "key28": "Jy6C39gB3sJzj7DeBK6fcL5ZynNZZvxMZks1MZVa3sJrZx4b7nJJCWTfPBosjL6iKDveYZxPZPoeev93BXSYjkg",
  "key29": "GEbQVFgnCo2MycS43468qMbCqoEvNUU8cL8m76t9WFnYdiz4iroET453aioASuKpmnJ8vV8XyViKrF9247j2mtx",
  "key30": "4Z4WVsv9ezfu5TRTgxdV7SS6H2fBf6TQdfpQJHn4ihrDrSHXFinF4cUuEJnk9o9DLyXS1BxmUtUgeypttwFcuFuF"
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
