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
    "5Xm4oDE9JQwvAWW3rD5BXicfWXrtTgES54Y8WkiH5XYfQQjCtthzjegYBtfTSRxm5hUQcY28XDXjgt9mdcou4Qyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NJbRcEjF1aaVdRkvmrwgRaBR5igKbkw7ULqRRCyFfoEQx7BdGfDxMaifLgGdhwGTxqG94EtBUBobQMdV7BtsC7i",
  "key1": "5bgwrRKeSG3PdQPqRSkYHU45XNTt1XkWptUU6u4R87z9zz9PmQEeG3qvYez92643dzMpL98yJpKeB1c34P8saZ6G",
  "key2": "3k4K9dDcE1z9MtxuobzEZF6Q8Ais7MFaqyBY28gCyfAgKeaHyz4zXtC9Yrsup13m32VX5Bbn6AKr9rzHsVAHd9p2",
  "key3": "2dxMz3xYtMG8xsuZuLo1qRavr6WStseB6LX67aWRu9uRsF2SUp2TZRnXPttjaRcmockysGzsRzu2v6jNMfV48P5s",
  "key4": "3K6W9zjgm6tgVu43a2tF413w4DwpcuVsbu6DQK6BV6jToe556UhRQWUVqZBeWwUdmLQ9hqiuiCmb513SFEv1zXvw",
  "key5": "65jWPoWTENoc2K9KvZRwR1FrYDyG8f16Kad5YCQZQ81BvFDySVv2WetC8gvRdMbNtQ3KjmwusEWLWsYBwuMDRwk5",
  "key6": "59JgdNbgSky1SbZf2MP7LGHrwcRe8HRarb48BSjCV7H8x9uycvaGdiiY5Z91EeTZcwYpR68jdw4qdVLgbexcqUHD",
  "key7": "dmQskjWLCdkoi4vN93wDc2s3H7FbT3MfQ1CWf4TEWdBRSJVvebe5r5CFaVbgEVvaaq1hmXNLzXX99MBumgZ3QGa",
  "key8": "3UbabVcmah5yjYZbAytu8AhvwW3ZndGEeFvPQDktS2MFJWceSK9bjyEXtcgUSHpfLtqYdPZ1FgnYaQ1gwf74LJ24",
  "key9": "iEPXM4i42ic4TiJZ1Bwr5pX5MbbBTzXQ8ByVWLbbnqAJYFKduiz4c5kBCLkPu8aaZaDv4BYcf5XEA5Es7kWn73B",
  "key10": "3YWtFz3XTASQ1ySSEuFhbRiruKgSUzoTd2zuN4VoV4JLAWMwU4wDhLosWj6QkunPhRtojjzUhRHsfnaJU9QQXqRh",
  "key11": "4GhAAaE7xr6BiqbHUuwYuwrPo4FfHrx27yoG5PvvPzYJSbXR6tZZvnLX68zjkJzZPpa5HJicygsWuyBPE1MHwjX8",
  "key12": "5j38NwLFgYfVLwG6QkhjzGZxpfFay22tHR9wB4utm5wfDYHYTTcpnhfc5PrCtXpofi6vBKWD8tMZCLYMVWYTXiCh",
  "key13": "545jgfcYChHbdA1nmWsBpSjHegyfKXtJSPn4D3bLV18e5NQmiAYrpJ31tA9YfpdPtQYhyTSLN2rWNhKeKodggLnn",
  "key14": "2xfB8bUzsWu4ou4mjzqh7UE7CioZi14nEFqZ8PqN3kvqye3q6xR6emcQTM9nv7bfTUvppVqAKcHPhsKi8Dedsobt",
  "key15": "5LbnGDeGgpQoBWWiKjNLLtTy5aWZXZ3DqXUGTAJRbKHb2k8P7AL22SwyfnWHkz6fxuvrFyqSawUrgAgzkZ2hM981",
  "key16": "3vfp6dfBS45vreLxXc4dDWjBMjJJpVMUso5sj7pXRoqXb2Ur9g1dEaYQRs8ux1iH61vWgJyPBr6XoEas5z318YVT",
  "key17": "5iGhXMJm9gFktCMe8hoJ8xtc55YEBSya1dBnEyvW4z8cBGyyHL2vvwrXueirVRVCDG1ttAkkmgUz2WnwBAD4vDfv",
  "key18": "5wXmLbhjanbjhFavYejDW92wQM2qvXHs1XwHqfYBfxu2iYDKhpXnpk17jP9z8rm5nzVW98yjJ4Fs1Q6pi4V5dvLu",
  "key19": "54BparFo2ihBdKWHWB2vNJWeU3JeG7M2xR4kQGRNnNcL9pGAzxBtcwFzGBdetDnEMsRFpMgrHCNiswK8wSF54poq",
  "key20": "4QNgi1r3gTTA2Poo3gMzWKbCRENyXwgUD9JAEJFtzoRheLP9Qxvjx31Pm1jpDwm9SsmagZ1nweH5fk38VYfzMFbA",
  "key21": "4e9eskeHq1fCtSd7wDcRPxu8tJp6uDutaDED847X3ktsfarC2HHkitjJh1PWpVzkAX5v5dbJoFdwmf9GnHMAxd6g",
  "key22": "39JUGn3TZrLnsdvXZAaCrU1KXeZMeQtzjeksY6ECE394Zu5RVBfAyEXMVQYke6sfZo1ZTHD1TxHhvaFtGKcPe3qF",
  "key23": "4NkBmmT5PCX2Mcc9qg7ovbTqSBXXCLitE1FqM6Av9j5UQFTGvnLMNbXsyBCNZjnrZBmitSncebJk7CM4SbTUrAR3",
  "key24": "4XiXfmLyxyv9CqwAbrU2fxuUGWGjygX1bZEzfAue6cNk5DbjiTesHmg6tUBvaDAtDhuo44wddZSg1RLnrTS4KDwo",
  "key25": "Aia3yFTcGsGB8KjL9xia2R1rGHwYvZ4UWBs8xeg19Dmt9TtVnQzNRXCiSGDX6berwCaTRqVp3N1PhqbRKDSGQvY",
  "key26": "3jY17sL21uTvi5ZxEnzC7cB8w8dhTUiptgTaM3yhL2ReFSM8bdNQpAqesBjjRkFUBEGrAy5diYznAYpzBrEi1maK",
  "key27": "5WC1LqD1jnhXr7FNYUYv3DwwjbZZYCdCqgGZYnYi4QBKqywTeU31gFGzRwvQsajrRLG3v1o8Z3yYA9F3FiKS8vas",
  "key28": "5wpbbJVTLtraRjTfyCv2KksLXMhSHGn8R5W1QrEFnWNxsY5NyYD4Y3E3a2A4drPxe18E4x61TGbLH1owuGzkwqLv",
  "key29": "27hTtavcDCDyHDfZdn4ckSw66BkPJRQd5zfaqH4NQ4L8r8hzqu4nZ1hYp4VUThTRyvufQ3ZUdDvKJVpjVjSuxiwU",
  "key30": "5Y3Z1c71QVGMuFDWC4s21g9FERZWzMxWdQoCon9tJgRixfs8XHzuoTGAQuSBsqVW4CfyTkcaETfLfoT1jYdKgq41",
  "key31": "pV32tWeJ6Bh85zeDKXE1czmeM1XFbgJikJSqngWc8yv9H2BT6CMPHKDVZqaULgU8ygFJpHg7QtokRzeEaKrTLem",
  "key32": "Z1JxctjP26iStFxk4WG4fqdn17CTMpDBUESiG4AVxwEhPMyoPXMUj6k94qS7nmogk26AjDgLDzPxXavyzw5JTQf",
  "key33": "2ZqdmqjDBK2prVg97Rb2tnuyGjr6SuKdpPFGAYFXF64ZGo6EnDC8a4Rw3Z2Y7hmqhN7mTq3KQxvnrirE6GMEFVAj",
  "key34": "5HJQHwcmEN6VkLTNFvo27bU3eTd81UfBGaZz6QHuJHZox6MT7XdxmffqcCXYCLiJyHVP2FgzS7JfMoh7TxbC7BHj",
  "key35": "ZfQrsHzY3EPv9gCjsTKJ9fYTLs5HzgMdGnH8Uqpu86JJbpdxcdWZEAjbu6CygFNhRwpsK9KxcLYoXEqmYEHdKiF",
  "key36": "J9h4zYSme7oBNJVzrdeCWXg4XCwWmrJMZFL28iqMg684n5MLHF5T2n3Zug7K8N4JutLgHQNx21cCWgqCJCUwo3v",
  "key37": "2grSqE7qWNCtMbZ73kauCjZJQGknTYNNVK56y9U3E7TuFXTu8ee4svgNbzguGdGoRA1JzLghrTPM1TbeSNEPdq8a"
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
