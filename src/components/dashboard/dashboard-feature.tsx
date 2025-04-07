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
    "44TRbvYcuDommrMXpUBfrTC4q3LGkRGQsZfpZYsQvx3akZ9qzZAGnWmafED9qJcaBK2pbsT68yCWP1P387q2Hmrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ncGjwHqT49N3qtCqRHNL2aD1AWWoLogazB5jTQBabiGQtGViqcsCZk6zB2UpcVg6opqG4r18E7JbiLJpk9G7VJ1",
  "key1": "2HPmgDhaomuZPZqM77RZDSEH93ErZJGLKM8mWvUXvUCCFLfVpybbnHF6YU8sByYVUtfNPPrZFN5Ln1KEJSvMYspu",
  "key2": "5SL1mrCnxAiMhGMW3AED9Dkpdo8fuB9pZFEWpNkvqrqQPiHaLmfn4qsskcw18gVYg7ZA93CgBRARh4VBN4h3GaSU",
  "key3": "5nW9LFx4Vjew4nUzDWcsBQG91bP132yZZHgoWo6o7fM6mg3wcpcUx1xq2Rt3T3b9onKK1bBLppUWngSmAdmSANxt",
  "key4": "4QexAwv8Ro2Nek2X4rEWYf2EQTADWXUs8nUNaPqtT1Kz16TXUNpmLAjDGEpEvYz6EVf3qHs5aNnbzS5P1iNaMCiA",
  "key5": "3XXWdWAFxCqryUoNbppqhqHh9w8ZiBiU2aTcBADVAbkdSppCbxKfEB6TbMb4P6a2R8kjVLR2vxSS35R8JHf9oerY",
  "key6": "4vUksnvhxErdfSrCvnKctVepzLj2rY2skkeMnTY7wr5C4B4eCxGvqdqKnytQcVuVLWecUtLT6FbFUgcuHm6Vi6sR",
  "key7": "4hL7xbk51MPbHPpFcfAx1wvE2YzvED3UFVkDPf1cCarNDfoNQ7H6PHEa2fpveX7h614spZKPFwAqRhKbbRfQpC3v",
  "key8": "MYH3Wt8wuLgbhVifBqPq8BjFJyFBtp3epyoVQcHp5nRsTZB5mUBCE2RuQgqSVpuipfwiZxuF8yXsaLAhX9P5XjG",
  "key9": "jdCLHxDwtkoyKNUK6JpAtavPaVJoQhAVMNZhPDYraCeJSab8vm3mmd7VnskvpNn1rP8jmVAaX8kRGmom5NweJpb",
  "key10": "4an4JJmoTJhjcmqjiV385tEV8KEzYgek2EgUWvKjSo1j6mMfdEvEHgUBVGHxBgm8KGvHj6q38K8GvK5SNW9fo9Qy",
  "key11": "3z2DCEFB6bqEPpTTpE9EVL1BKtk6DCe5NqqZ1Vhd4B1wCfZb2JHuqeguZvLxTW1F6ZGvYVKS6H5QGuXKfNbBPpjF",
  "key12": "3UVbqYZYU2KoS5GyKaAMaTe1aa26YMYmDRJmVVKo2RdYjAz5GHL4vuQcvSQ6vwhrLa36EDwq3LCL2fTzvJkwJK7y",
  "key13": "44QQizoTLLGA8gjEcEvwNKFgddMQWFNvvy9S6HfdTGJQjGPbJ6PVX3Jk6QPVLy2tbLmc3HQCehk8fHeRc88H3GFB",
  "key14": "22phPF1QZ2LPhp83BfUGpSsZPDv2USys7guNf8vn1XRxNthjbgurnurWeBhNmPYtG4BmWkifvA6Pg6NQoCPzNtV5",
  "key15": "2DFxfXheYAS6D2A97ErWD2qnF4nerbediSyuU9aeZGgzusZSW45UaGVj3PySdqVcyHFw4mCnTbs4M94UCh4z9dot",
  "key16": "4wvTETyCbpwB6dLLUf2cUcKr7NrgN1GzV4NtGXiJitR9Z2yz7wLNFEiiAmkuquMjfqdq6so8nPondFx3bdARAq5L",
  "key17": "64aNEbyLAGQrZPtVrgEcqAZCEjQAhS8iADm2zSeZk6Yuyj4pGF7Gdad2iBUNKZMCX5iMiAM7jX9opeC5BJ86YhY6",
  "key18": "u3XDT6scxjcjFXNsNZ75mFHH4XkWx425xJ3vLDYpiNjz5iTPDarSBhaYqp3mncNqsyc17b8i5tEnBQ5h8G46vfY",
  "key19": "2krsSTDFquAqmQAGLXdtC2S35ZJF3Tucg4EpmkWbQmBSDMhWK6zfSBGrSyChTy81fPf2okA8p4zEbf8HKiCfT3TE",
  "key20": "2oLwyGFWoU6gEXJS6dFVziWoeypP327kGHY7c11ceJvnvqjFHYMvtpnQQVG3UaZqLT1KW6ZXtorW5Pcf17YL3d1s",
  "key21": "3dqCS6ibaNnuJQXMiZWtPPWD9z2Uf2omd8599rGNsDhMBJERuCZhfroBVG2DZ9wtNYvdK8TcZ3ChxTFU5crk7Wje",
  "key22": "55YfUQ4odfYhydt2nXcCAbjPAf2RV2BaDbmoWocwVRB84QcnHhcLZSw7TS6Wad2bqWSbkx32xnvQxiBw9ZNkxJZA",
  "key23": "2JoECjeKYzZg3Y8h1tWu1SNy57WrcwoUA7GfLYwUqRMD61AsSbUkZh9JEogyiEpEyzYXURzW6fPf584sHLbGbv5C",
  "key24": "5MTaU2ecpPbHevSTz75GWBdRRXKUBhiTz4qJKwoucU4Lzotc9ZfodkJwbLdgUfsit398v7dS2ikswEjjLzET13Lh",
  "key25": "5QnDWpVMJ913VBdZb5NExd1bxGmvzvtotUyh6hPXyZWYfXk5dvUq5T3kZg3sCPgzz9EztFYjJQgftYw9kuT85ouv",
  "key26": "47G8b4YrHJpAi3ByVHRSXQDjwLxqFNa1TaKHvVjfwnSu7Gvjm7u8KqGcN4RUj7o9DxtkihLBnTFbk8Ao4kwxUwbe",
  "key27": "3yLrDRLzR4UF3mEY7pg7S9xGkaN1W9cLKnhtWCDXxC5vXLLD26n9J6WddC7kFtvuC83iEzte6C8ituVsH8xNFdWG",
  "key28": "4A3PBjXWx8BNBfZhb3st1E8N7t91KNkYgbfZaQvpPXYxYVDYiNqLKCyWZDsthHnVq2gbbZSshowiS3ZiRd1Fenm5",
  "key29": "4A2Zv78m4YEmfkSxftniBufWuRxGXH98Wna5GjkPhzyPxwM5nLQTBUK7P3i4zDEfqNFVF7tdVS6bRxgwD4Gq1woL",
  "key30": "2eReTBPGLvHqdvbpjFaVz39bPvfxqqK6LzJRqmmf4godH4GFg3bim3GgXMnLpxHfJ6pwAazdUwcSZxo6q6nAhg7Q",
  "key31": "1w4dFdBvjmpdqSn8eo4Gnm3yrhcWWS5DtHvaWcQ4WCb4NQnLdRM7kTcgw9svCuNaw5aZegQ83Nqhg5773vemFGX",
  "key32": "5NTjYiA1PuTZcHeGABAarzbXEBzimVbnfjB82x6RFi7p857UfXNfr1r53yxEhq6E1Sw8qvErAzzLqHz8fKfk9NgW",
  "key33": "3ar3zpoUB17Ya7FbKw5cx2BGregS4VPprVEyMV2HenTEa6nLdFHyJL6TpkGAJWxyPY6cwmukDsKaEiUqps5Z4vAm",
  "key34": "5oWs1hsuDVs2aPo5woLVJb6rbktvBqwTvJS9T8E2kyvg56QyaZmxzB3UxRioWeUE6owMSYg4nPBuCfHMraRDvUsh",
  "key35": "3x6315jEyXYW7owdvPQUXBCTh86THWY7xFSm4R5jbxZifFf2YmFz7WjNh7N1UuDBm5W4inP47AYnWwyzAoSPuJWa",
  "key36": "4JGgkTewpRSmpHG9UqGizvcF6ea3PaRDFTbAC7Fak6FMXLrCm4bFi9N8fx1apora17Vp5Rxy8jWLuMh9mpvhwazq",
  "key37": "ftzsGjLUREMc8L4jUXbEX451gm94C5onsdXifWCpADXngN5dqALsmhCbHdcPh7owBhkpPE4v9LqPYaPvWg1E17c",
  "key38": "5LVDZg1aTsheUWhgjYwc3jD4gsTVtjLbFkoEqMXSyfPyniUgq7CB2zKc54guEygfMq7bDAc6YoxFt4adTjbURVCU"
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
