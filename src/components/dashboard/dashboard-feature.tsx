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
    "3zmtE6MxLurHbJbk7FvoMjRyiVCiRwNoregagFfhS9FyURxKPcpUcdN1iN6XNftpfPk3uFmfa4JAwKfEidhCB6fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yDbYuKJkJdNBH2yuqaNo71jKFWhZ6HUM2BZFLPGA1mEDrDmQi1vTyDGzdSstq1NAsfxyWvLJujy6AxfadfBAt24",
  "key1": "r3HTovq75sh4PFAwVZftuVpoH5m9Ay7xEYFX1N2NeQtsrruyJ8p5hp1jnwhAHEEtBLBNAZPZCj8btwJqW7PGACv",
  "key2": "5EN1pQWGpGZyDyo3Wp9BhbbDAFMYq1TMxMbUN2a5fJLp4zrfkBaeN8dfnUqzgu3iaU67LMMQ4Wu4P4EqWJXRn5PD",
  "key3": "4xSF5oQ37PXKQMqezS3cuPEBC3CcFJk94QoX1aTCjy5ATevonDeUsww6btt4VEmExVax2y6CHUfT6swSPgsrD3D",
  "key4": "464PKYyQqGDrU1hBt1YuWS75z3LaJSA8XBLceBpZzXbBDycyoDGNZYd4vhK1sDC7ugvoVsxw9iCST7DMGYxHQZD",
  "key5": "3RAMkvDqqRJMuWAZrqqnDgSjmNb3Qp5tYpiqLdrHz1qG5fcNxcpwBrfKyjXGL5QbqiqiQWNnABryKxTycYByh1xs",
  "key6": "4KF4gdYurCxNNYfz4ZpgtygdYBE89nXfaKBTXZwciMjvHLjtPZrCda1WvQwwNHJUQUAMa6uwMeiLPHmXcp2shUnW",
  "key7": "26Vv8J7zTBETeyEwDpJo58XAw2cQHQyunfvSWYEDKBAfCgudwPmaUMUegm4rpo94w76747isqzEbrM6xTsAHiN61",
  "key8": "2dpG87DWsbudQghYZQSthgrFPwvjyAYvZVAVerbLxtCsA7UVPszCBRQVQondqomTZiAQsCvVMtAUycYPdBy8euw",
  "key9": "23AgWEpu7AThb94CcNDukSQEARJSBcmbK8YcZEEhYUo9e6NyXPgcXzZTy81ozfiZwfx4BcKNhmrPkueZzkHKUhBJ",
  "key10": "3UH9RVQ5F7egUid2NqJm1MThLimaEvUXM4SiPHNq7RtfxbRgo72M8iAi5Qucu3nR9TNui1aPfRfkSRuNG27eMi2t",
  "key11": "54k6eyVzHnWwtJ4XGY36w8jDEieNHhRZgphza5wmWcmS3QgN1Gf5deMkssJ1o5tqcsLEe2y7ZucYhFxqYyFxCgj9",
  "key12": "5kqHMzP5umLVP34bjgq19rBh8kcynUWpepug8tWgHzwXeBc6hiX6uMkuvzHxjHEzABgvuYgVaCb4ypnECJ1pZuYs",
  "key13": "27QNY3WEnAjx2rcDnc2dZtS2ri9vYcrACTjZAxwncKMN4S4WaJmUkZWUvTo1wWiPwYMeddPW6LQjfxkXcfJkHHnN",
  "key14": "3TymMwjaLSua7jK9u4WuJ1N82eczUffgUwvHVJPt7ZRxaK6JmTBqTzfWmy6SzM485ruYYk78L97nEBNs2WXkn5eG",
  "key15": "2DumfaStDHohmvMUnV215SajC4KMyhZ6s2r5voxiaHNzSXwAPJ1DsFg8msCxVHoeXyn3Vh8Y8tYySCFEzjCYUruV",
  "key16": "42epZNm8B1Ti9mhmjuysTqhmhSbGAoaNaSfsYE7iXNWvhuybj7MVgB8z3gwo6pNSxYnYC4UACxSF3zmjTExUTRH2",
  "key17": "37PNih1R1jJ3MGdmUgNygWHQQed7j1BGPkfR9UQ5nJg1JEj4TSSRhhZTkNCnXayidpzqjRySroMc32GEGnPAZcVi",
  "key18": "4WeezGoGg1je9PQV9bWW6v9rSEfDbH3sQUo9xyUzGeAyiJKoKwSboAq7Fhe1ETBkPW1z1bVphqHBjQDZ798tBHK8",
  "key19": "5mxJrA1HBpcsveC1F2gkoEw7axmWTf8LA7rHu7kpWrRQbeYjoKUTUU7YzpX2AF4aJUnqEXU1pncUeRQ5W2myAkZC",
  "key20": "4aXTkqb1iUHf8WSzawN3hwL1FXmHUNAvypKtc3iE8WBBnTKGZrhHvoVWQNreKux9j7ufBcTVpGTqTnAdegVQ2MV9",
  "key21": "4UZ9W6QRzRbcPS44TqbwEVkW6ZPFKFDFcDH43ihbdHH8zDvYQKeNCujCUtjDaCxB2pzPb7uqX4rMPpyJW3QAcUMr",
  "key22": "4wZnXUHfYf3bM4Z4rUk1FfRCLx6ks9LnPNzkqNk4j9TUzeDgEpg5SxHuSqiA8xmZaF5CMqNLqAoA2GSyXyULLDSV",
  "key23": "3QdZmp641L1vFLviAh7aWVXqa8WJgrw6Z19UH8Mr4KGMTC2jZx3oJirTM9ooyn5cJ3e9erEtzszfjxt22f5fHpk6",
  "key24": "5JBHqoBnewvkhwndTuxJTXE7KhMqduT4HZzrYAd3LADsyzWahtnAiMRMcvsJNFuHv5xteh6umoYeu5cyUXQUeLt",
  "key25": "2NzHB6m1MrhfcGiQBy5JzpMEp51KbHmhVNVBCA2LA4Eg2Sixhjgm78qimAdT6sV1UpVYjVtoyK4sRcFv3m6Qd72a",
  "key26": "i7ryssA68kxQ7kQWqZ9Cste1u2AgAqmRsVpiYph2G3Um4KHUmzQhgGAHr2gVGUFU5TYPesozLyFb2DAiiWEuzND",
  "key27": "2TcE8nqYsSUpPv7pYkdczDB8AVQfPxWgoE8B86bDUxymonbvGFbqYVSEUqToDk1k6HpKVeEFkySqeVS5WGB5AxjN",
  "key28": "5NSTyaDoKfC5CmY872mFFMLb9WksFcLFuEuQavuDXsMgap5EAkcBted76SQoTP3yxdbtbbsDNdW5V1aTjfiHpz4J",
  "key29": "3jttNVhRAAKUgqnB8zpNT1PpSG3fHZ38cMBh7vRVdDfBpN5Ay6cDHU5r65gbg8oGExMU3h5Yfjx5RykLuUQkpXPy",
  "key30": "yHH5DQtnYwkyQxvPSeKGatDPht7Adp1Xcjx7b5V64EXDcFmNFNsLTonuqXYZDj8oPhQySWQn6usia9xDupQ9UPt",
  "key31": "2wx5W6gJ4GrX7VZGhQaLSAudskwx9B2dC5Q5vG12HdpTTULJffc4fG9t6xFHon2vNB33E3dDpzNodJYMWxiywEC4",
  "key32": "uPVvLNuMYursydj8j8ptikkEqdampFobZ8kC1UhgqGJT16R6DcAtzjHjhrj95b5R73nqb3wDawaX3t9Gjz5N7Vy",
  "key33": "5NAmmwAwSwrC9KguujfbsmxLT6k2YDrmVxFkRJBzDyKv3q2N7ENPT5TptvooP3DTGPtdcVYZd4K8EmjMuaiFsoBu",
  "key34": "4jYjxS5jwu2Zu1QHejZYKWkZcgdQpZANYDuU6Fs6poA3aTgo4aoEVCpmpTWjZhwrVFQyRicW8tu9vmoCCbrZ3qc7",
  "key35": "45XvjY5coTqeR51Y4UByCUdNWaUqqVTgrztf6XZhJA4K2zruJAo4p4U6DPrhwg8QwYX95RgL411aUX7z342ymEE",
  "key36": "2wacyGpWX4iVZ2X82pFfmzXtbN388ZLrqoz6XXWZmSyE46Wrr15uEaRcg2Wq6rWAH9Ut443a8HfdntQyLmANZiTn",
  "key37": "v7oN9DmoBVWceAVtCnaNdksxQmioNDaPTQCwbr9EvfbdpP5MPyY97aBZcmRfV6F6MTbtEnqSJPfax7CmiSV5Ht6",
  "key38": "Vg2kE6UPiiedm3x8u7LdDpmjrZTbSPiDXzNEmhrvpxnfSowHgvvEKq51aKzmTzRg58RVHQuXZHVb9dPeZJRN1nA",
  "key39": "22YAGDC8CXELcqQ4HiM23omeWKMzkkLP7sS31Y7wwGVakbgFG15NhpuXd1HxWzMWiiDNcEe4aRoSPp7HdNM34uiZ",
  "key40": "67if9fTsscbgebRkX5MLMPxowh1oH4FxpvhGX1QQz2g6u5U2sdXKEKf3yiQgZCxQvAvagLRUw99yFT1oSvUdQMDq",
  "key41": "62e2TUsMLpz9pPergUY4RmUqoF58bXGSqaMjGKKors4fvrDujwRsekbpTpwftwKkqER5Mxur4N8dJXcKDgQ7NwdX",
  "key42": "57AdRrqMWqgfSF6quPHvRJfeTxCHEMJiH3fxmzeDYf9MDmThVgCVrt1tJhXk5WeTZTfEsSgx4g4nXuGqCd21H6F8",
  "key43": "4st1Mtk24LJM1JjKzQq2YcKiRUyzqyjdD7zftznqg3Y9K1NrZ5LUhG88orqvarzQgV3KTyn7bQY5djK8uGEBRrEb",
  "key44": "phtisk8LndEhkmja6xEUB8XnvgD7NvAYTsDnh3TfFFuzcug7AVhjiSTTkThc44JJLJ78aWC8W9pVEPZUjvGsrgi",
  "key45": "3Q7xAtAsKadaGXeDhtH8P5X3YrSHXToiXbJQf1yVZhQAxZrUweXV87ive5nGN4EMjBzHkRgfpQMx2xiBPfrWvwxr"
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
