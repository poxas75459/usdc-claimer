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
    "2BXUnZbGVqvKmcjehZrj98fQBce65RaDwLRgbaYv7gd1PadZHFCGiiE47TiJEjAz2Nv87CRcWkqZQdKyk8Dmq7ik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uqhqqa7CaxapefkoB4nMtGACnS1jmERLq1HUvGA6YarfP5kMAxcL8tHcaqf7XWUGDGZeW3SmwQYT4wVrxU9pryK",
  "key1": "AXCkVzNBr8bGQRxe8Qobfgoj5L8t3d5xHzHCjVM8MpctfXwqV9RSr5ScqJ7Z1xFRkj3DfiNrfzu3GkqMNek6hck",
  "key2": "2mNSMkFX3zpM5ZMEM9cT8XavVtCqGQRc68wk9brMdWQ1toVrmVtvYHj4YxjrYd7JkAT3Z5ZNr3AgV65rxuTkJq8x",
  "key3": "uAM8HTpQAa5sAq7JRhqZ9xGG66kJcXaFY2Z1V5qxgTw4rxK3xZbqjpp5WhdAaL7nj3ZxATqNGrsVw2sYbm4jKBb",
  "key4": "kuusJX3humSbw6v8iZC177tEyirXnhAYgfM7cvJDREPvjBLgBeMDLxVxp115dQNKMWyVAD8p63WR74rHuLLQ578",
  "key5": "2mWVQzdqUgh2XJGP6zHxB6mHVcQNAd9VkNy9vchaoN9n7RAuJcDprTTwaLFvGyb2WJ6Q8uxASHonuhzxFfmJ1fZw",
  "key6": "281h8ts7bLigvahX7uXhsEntuVxYRBRvjhk6xzqNHRfJsBSGZczdG1n4GoCkn3zySRT2AqouXLPpTdhSbrNU291P",
  "key7": "2pWxcy8688rirviVRCobjjk6RJwDjaY3KrUKDzDSvoonN9JF5CsoV2LcTkggj33DkxEPBs9nEnfTkSTDP3kieTxv",
  "key8": "DQWe1bHvuY6r1PbsEgjw8Dkx1qE2vq5n3s79VYJUscHsBn6vVseJNMbxMM2dHdPQa3gxz8DqoZcPq8sag6vjkW7",
  "key9": "4g7xdp3TdRwjQk6Ru3bHzx5EXrEMmujqXTZ64StixLL4AbfbYYs8yr26QsDDGf3ZBT4LJe64u3Kwi3vxdB91fgWu",
  "key10": "4VHdGu4p2MGMUcUZLQq8Kcuj9UP1X1n6ee5n3gRksyzUVTTrkNbGcSB5puo1tW9sG2WwkAFNCxw2B6E9ReFUzrEJ",
  "key11": "5bfhTBqzp9P3jxDzZpDRXguSFjhZxutTRiEwS1iqews3FRQyofbmsG4wqW8yghJvifcDTZbspCbVMrsyhYGgCH6i",
  "key12": "3ykVCQ7sEx4yCE3AG3NxygGam5o4ViLxy4SskJ6UCQ7cKUyyq8uyQpQ1v4ZWuVx2Qw4PQNwNhxQUh6WTyzE6B3zi",
  "key13": "35xb2P4eqTMC9W62hg3HGqKt5mcCwFzATJKKyCT9fwjKe6PMXGDFFZ5Lx83ksY31bcbp4GXvu21Q6QKArgX93fYp",
  "key14": "2SBa1Ed7FcVzj3SBfCyDtSd7ckXtSjcTjMX3CpE77rDJjMBz5j5UQnz99zAM2o9dTyXSihTn9aYgGy6iCHL4q4xX",
  "key15": "5EccZvPEFMu6B1RB1NKf167RnhYtK1bAs1pFhWt6SxJJWuLQDaAv1Q57mmEo5z8yixyhVy5aTvbHSTKYvZMcHK5T",
  "key16": "nwyw56nj1i2uZBmFyiQC5vHriCMAxcn2X8bL7DPuaatiyxFBqVHYwWvtkTREumQ1BL2rFYXr1UhiF4B5bSg4qMh",
  "key17": "W1VyETj9vbvQGEx1SXVhwY9yd9dTrbPgxgjGT1mvYu5UVXZmWbBQ35aEk9utaV3J2Svruh9LJyJT1zVr8TdQxoU",
  "key18": "368VqvKwsMKQhJaZZjTEfBqBUBRhAPUS3RWZQ4C8oDceqv3DE7CU3emTii8UzSYkGLrxph3oJHft2Bd2VvVfGKaP",
  "key19": "3FVmVsYbRVRJuHDqjskquZmeX6fHTeMGX3zPQxCGb9oPfoXUdgBM3j5ttYq7TvLK1TsM5baXQnSur2BmWdVjs2nf",
  "key20": "5DryDX2RXRmUmBbTJwGJ9trxVLFHPdueo8KTwku2FHMwBeJQ3dCewTY4hdMEzXs4vQB1PjK15fQ3VpPEDFARPG2s",
  "key21": "34cw1vajHH4QKo62NXautQosL8FbTbeaeAzeybwkj9cuN5vBfMwyR9mRCSRxmCyEBGafiiUhBr4dHhrvEDp5zfxw",
  "key22": "3HCXqhyGKeud8evHUtDAZXT8hg7tU54MkyFW2aByNhGdRLkQMsEdXfCry3wDipHf7dKJv4PDYD2tPHxJVKy9PL5v",
  "key23": "4oMWVNEfV1KrDRGzTwTxTCzqWbnjDsS1sd1QAnFSsZWbYKDBDt1HGLcA4Cg9eDG9MktVesSkw2iNUBt6VxnvCaCZ",
  "key24": "4u7ev2i4jEdhNS8xTHBFJRQxqhTe6y5PB64U1n2S61cXm8w4fvC6BLJwbzk6DF4FKzgdZEDJS6hVoMUR9dBEYVP7",
  "key25": "4BodmJNqjdC2NmzHNDwGEobH1DmN2bZvZ7peVxd9xw7RULMJUDZFFpZs1Bzp1Ffr1mD3kPMzc43p7c4rFuWGW6tv",
  "key26": "2hnYLqRn5Y9KfxuyoogdcMHsvMeQoT2gqQB1Z85VQGA9k8Eh24LqTCPDTHBXvrZsGjj5qS19Eag8qu4xvLnSkcX5",
  "key27": "CApmzFnrmXeFEx7yRXBEQ2EzbB9FSWATKAG2emMwD4gKzQWnuZ57ZktknHLkottrQzAiVKaWx6Tv2QcPeENuYFe",
  "key28": "Ac1pmLT4ou4cLtRZE97RL58ovZJtZguudgzUK6EgX1gHwTbGdPKiisyL6wcDgDzJzUiPBCEA5L1az2eH84Urj62",
  "key29": "29e69LqQaqCpZ4H4NBnGL8zPfgFvNaf4jNMmNp4LVKZij3pbpxgbCtijEgPJEZUZXuuXQYCdThSRE56ruuX2TVsv",
  "key30": "sD1bsxzYqu3BDaBRR5Yd9uULQLsCmC4SeTMfRPj5MfVzxKpCM8szSBgnEhWAh9sd5Gkd3KCbJrXtJ4FWvsjENpB",
  "key31": "o22ppZZNN2xyBmKBr6d8Ls5zcLFEHRzgDGKQSLK9ShunNey9XdZqZYnyFntmxV1zV2bDteHjFEwngjJjDN6qv4V",
  "key32": "vH1n8AbG4VQGwxZRMMkkyComtGxRt2djau8BXEboHuip8hnss5qSPMBBmU4fLw8yAcZwyEmgnTNqivb68DjuXwZ",
  "key33": "4aHwvAN1drUeoo3PnzdvwS26MGUYUG4nmmy4GZjfc3vpnzzxarokudijQdf4C9F8xKzBmQhAyry4U2mhTbinvcnb",
  "key34": "33cNvw1CDeyFEV6Xi6Gnc3dSCdf43n1TnH7ZoMTnCVb8h7NP6NgHhzPiPdrmt5BVmE9raUKehAFu8cJj8TLMjANn",
  "key35": "2XY5GKkxhyPM735ZuLuDbtnPsTbdHgk8hJww2xZ4W4XDH1DRbjrp1gJZDHJQdfyJGQnDYEu6v8gZK7yR55n6Ey58",
  "key36": "611ibWgucv68jZ4Y9TPHhL6twrMiPw7o9WrgfFy8w6ofvrKRrsYq6cdCZjj4HSWdbmPnYheejR165WwPe8f3HCW6",
  "key37": "5JY2m1842z34ZEC1XJmgSYEN8nvVUn7vZbhaeoyZiEcDSCm6WxkLUGwyETH8Y55FkMxMZ3eFkjAPNq7s7ngZusfA",
  "key38": "48xWqkobc6FC6wBBXiwH6JMBFyKYgVhGsiSLf2pRj5kon1XYoWmjSSkcX5vx67f6oJwxfk4ADvAeyznrpbVEyUmC",
  "key39": "5MFVhKhWoGPsgqyT6gMQzzviyxvY725zRdfzxJH4hWs93As7yuBCU3TEKN9R9gmxpxnkkQ35SYZQ3f7fQHsKETXT"
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
