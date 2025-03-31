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
    "4TnjHkFqB4Ls5nnuaRqkcxSjGLFKVEi8EmauDiUaMMpdtTQKSGP3Vxa7uaHapNRjxqfxuPA5LeLZbT5Gcs6yLbwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vE8bppnsvcu5cQGbQV3vhRWh54pqReQDvCK2m2stX36J6rqHSkw1g58VYp6B4dnvFFm4KsSbAFJ9Db3vaffVtZA",
  "key1": "5rx4jcvbEmmbKk957Dq48igzupUmdBYZs4V5PAXUefGDPkPCDgo6DnBTJec4c9SYv1vrowYGKdi48dahXL3cKXY6",
  "key2": "4rFafsHyms2aybuwmpTURBaz8W6NHPmTFEksqoSh5WtMnHfMceA18Rq3rLryySHMo9R7uMtuvWiHvvkvZPQZixJv",
  "key3": "2ZGBvkUhbTgtsNra7L72xff5nW8xKUNSiEpf8Y3BQjLwYuBvfyaQPPE2Br5NWtKwMApeUajRdpxEJccZHnzmx31W",
  "key4": "Cu4Wy89csBsR4CYoHR7opQPqUWjyfx69nnCg5zRTNJXKfD2NytQfnCUgjX9Cb4iyEUFyasscQ3xFFLQFAynms61",
  "key5": "5n9BKtkpWKMFngaCQLT5rE7k9o2TjzEhvpcpt3V2kqvjtdtyULv2czkQko7uXdAmqvfW33LUJPqp6WTipqCyn1sZ",
  "key6": "54o2o9xvL3Fx8VJDkC3FhpZPm7Q186Zh5pjUnnamBxYjTtL6gxCbP5NHyRGAyXMUBVbMeqGo5Q5WCjittt8EtJyG",
  "key7": "2KRWZYafsCtmHQwoH5mzPigqQgLmS2JwjQV35PaXSvx5789uavmVDZWzeByLwdabTyXijrHm3TNchz29Khy1JHXW",
  "key8": "tsW6qXfQue2sa8fAaPgAjtrC3rBnXM5Ddegy1GQTSshJqQ7BCXW2xbtc3b2yA1BPqumpAbjNwAf9QNwbXdxVodS",
  "key9": "3EjaWcDf425U45tdq9SXj6LbUwPLa2w8PUMsuqS317hJ9YDmCU8NKr4b1a9H5VM7vmoFwLBoF9NTyCC3Qroiuzut",
  "key10": "67GZW19ePvLLupqmTqKdeeQEzYUG3JrEvB4QWxe8U2v31mtZtjiSXh3s8HSUpn4M2nq7teHNR22gdWh7Yu3ZoqcA",
  "key11": "4Rs5ovfrkDbGrijit1JXahdHB6ZCZsC28uku9USGjCWKKuCK4LhVaZnMy5T6jifd5SwdNagmG59VFoDxpyxx7WY8",
  "key12": "53KbU4XjiYrqa1SUvfkCv7wLoLdeAbqpuSJ3jnfA6sqvYN2h3rSs3BijceyHVGUuKVNTkagJro9xYFKp9CjV9x9Q",
  "key13": "nzbTb13bVcLvVFgV34RJfXmDQG5xcQSgTbD5Fro5LHbCEmWL7ZDfWiC8UWrfTTmrNFfLUKK3PJwkURxTW8z39zj",
  "key14": "GTRcYkPzmH38Rr8eQJv7YcWaAQASA5Hup9gwct1GeMafAcgVu9UVHKTm2D2piZPCVat79dakrGRkAvAgHBCh5YT",
  "key15": "ePfPu2BP2yDwCxrja7nJ35S7TZgAXZHJ2gKNngASqYUvaixN3LBvME5yHkSoPHyYidYxcUNj8pH7Bec9PP5VrDb",
  "key16": "4YqvEQGcmtkLbhDRJxx4xpn9drTJaSR7JdYADw6Pm7aSi6N9MMM1DceCeFvqotzkwjKJSZWfRSrL9bmtx36fJ7Z",
  "key17": "5kVdyvfRfPv5aozrzTWMqoFXmRG4ENJHCHrWUpBzJ1L7A39GUs2g738TYx99zo7PWKSShoR9caUiZy1oCCKDwhjq",
  "key18": "MCcECF5rPxsh7oKzqj425pgFC1dr8ypdy7wx2rzHfUgNDN1GHMQpB6s7RiuyJUAQcBcPUSTv1yqchAqJoMXgTYA",
  "key19": "2AY82Y9pJwmRmPTpEiuWdxbwpU9yX2EcLCyBUgcdT2aakQ8cQsYagfDhmkyGuuXQEYEc2S2JQ7XzKsE7KtxKYBmz",
  "key20": "63eeZBTUPBtiHLJYXtpQ8izsFiaL7xhPzygzp1CNAru7t5vXtTzsBc1dYnTggpQ9in4hLySw28rsBdGBubXneQ96",
  "key21": "5SPAScg4vfQTGn9EC4s3Mo6858yTZFQGEfqxq8BCRJfFKyaSWTKesPoQcYyvwXF1nPGpZy9SkSDeaECTUKt4iyHj",
  "key22": "3HHDyUpMmoLXPAQi4GF6yhWoLghvSm9w1AuTBjkChgVvQtzXMkjmnhSobdVfVp9tdrzWMLrrCfnGGkdSGrjgnWLr",
  "key23": "62aWSuA8NdViurwvuXpL8vDXzJCimPKkXCyL7JewQ8CWikVFzgrniayHWEvdzGee6KUg4U24XvFxcUJtJQBCdwny",
  "key24": "3w9J7mHuqZF1PtLQH3P6WkPeF1ThwwCrkh5ed7ck6ZnT8mBCUNugnaa64gPbGgEDYxyYdXsQMUPgvkmxx52hFHSY",
  "key25": "2KQ9cCDKH6BpTy19Sy2kXYkKsXS8Ze14FEYenj7YiTsiVe4HjNqHkm6PaumRTGhsNXExUTBqmKkJwVaxsMX7dgvm",
  "key26": "5Pes85q6tHJC3m5iezzyvmjVvLtiP5FBixeaJJgub784MuB5YT2Y6SJG9sDR23gZPX7pndgKPoT64dXqvG6akbkx",
  "key27": "2HC1VTiM9bTPt4S3EvZY412n98ugyo9JzTxA7vdyoBFAjDTKoHy4yxWEi4sVrdg4rvCUkET2gEMjBex8SnZUc9uB",
  "key28": "45zoHV5F21Ztm4ZK59dwKbvP6hi1865TjbsnWBFtShnBt8WRdvCLhTVLfRuAgAfSQK9HaJR84iZY7equtzxUqPuU",
  "key29": "3cwdoRMEiQLjfp6FTrnZAxr3Z4jdhfzPZ8DLwguG1FkF78rTfPtswZte4VnNdN2Xd6JNX6GANSXQBscXHBtE7K4p",
  "key30": "2pCDJoWfWZckPsR5QuFENo7gi9E8iDyCZv6bnXCDtJRG3NmtwTgVgNKanmefdYYZK4V8so7Rggd9WhAurBuE3Svg",
  "key31": "5uoFipi9hpJBAFdMUBKa7smWUqLgvrw7F6YzgewrQ1gMyWSu47MtsKsKmyv2FNSKF7CRCeu3PzcbXa16BCtMHJmA",
  "key32": "5Dh36Py1FbrWq3MSGA6itdjTK32b7UhtW5h4iLzEgFypM49dxj362v6vGFLuBkX5H7xvdY6RVi4BWye8m5JQ16dA",
  "key33": "3YxwPaVZCEHU6HX3kd7Upwe7DtgsaeXXgxTgiF3aspnvDScyqiPtGES532TEkvLX4AikQ54UAao5oRpieJXSL22o",
  "key34": "MgCiSmpUWFXXfjzTGPkAFGnxbuUA8sHQM89WidoVdc3qZUjH3q3qYwoJdwbzQnBWVGRpg8dgpYc4tE7y12m2Jqx",
  "key35": "5uyRHVQ4GyaFv1AshjeupKiaoBtvcBjZj8tysrPZPJxKyLfzZ22SUHyNDQEewJht64uEf9nEFaR3UpUky5TnKrgk",
  "key36": "2CLcnAzhGyxs6MJrYTxqKFLRkevopfy4Cii54xEUHKwfByPPbZpqA9ehjwxbbcfifTzcFQuNJRoeQS2Ue8WLEVzN",
  "key37": "5Gg2xqn7prXFGZLLj2W3QQ716LnviNVahTMkm9QRk7XMJGkDaMoqRtg6w3HthKy4XJdoKbrSjzupAtpHWAyozZaD",
  "key38": "5uVt32FaJUCDeE7n8aBW8A865cgyu193qgbeaT4rmQF8JiooqReKnJYczpJoZYMCSc3GRffuYRQTN8zVDrSHHT56",
  "key39": "4oT34n8hXHmwSnxNSP9zrjt5MfUj6KzcGncAqy9QCoC67eTKdMyf1nNEofkJGXXw3Gsh7MiPYYEZFssycz7pqonn",
  "key40": "7rxHbnGMHwVMWg4YBNEFmKRXZgMVynyndSPxxuo1tertVuhkZrTZYC9e5Y6rjKk5gYqh22A3UQPDNqxXsmfZrJ5",
  "key41": "4SpiqSUa8Aosk7kVbYg87uTw8QtT7Bj1YzszFS8JFyy6aboVTRZW5fetSHagGZQa8rM2mBQ4MQMTWaMvhsYCqGaf",
  "key42": "4pMka9tbq3HoCkuFs9GqFV6cYrYBsiLuiJggrp4kKqvkoMFPavLhv6LTRXyTVLLDKSAS9iofihDMei7fnTTbqkyW"
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
