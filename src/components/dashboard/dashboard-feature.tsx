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
    "3Y2gPRe2LJp3qoxBxk4qnZ4jp6DbBy4UKwPjjydXq4X88eiktQQekGu6uqGJ2eA6DZrjea3FnceiXH3aK3ZNEgh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vafkR5ygP6aZ2fdJXZg5nhPvFdM2gyz1wAdoWB3ViRxb5ZGsfZRotpu7Z5xhocj9C3Qsd4ZCcAHnsYoEDvwxVsw",
  "key1": "i8soV2fePgaVtm141hWsjVqSdpW7Vjkikd851PQ9CutTQM7QfBzV5txpnT42aGY8XngSnem4KrLZQvSHMrHUNeA",
  "key2": "m29sjJ1qTmY5jR8LUT622fYDRVMrHRSxtww39gHZapfY29pX4vjg5umEzWAvDbzZCu7jo2ZNpzNXoxPZv6Yrz5c",
  "key3": "Um841PLjst5a4qBw4ELwH7oK28EEkDu3BnuX4MEKhurM9oTn9Dq8AXWvTYz7qjonUndp3mtNrqAciQiuBRFBwUQ",
  "key4": "5pC4i5voahXbM8v4Vg9hYkAa4xmAGDFh7ou5WGWfL8Pnx8u3Wddkj9dG1ft2uNFWFsfNkooh92hdZb9Z2Uxub8SW",
  "key5": "5ztJWpbgwoJWpqGfvoqRXHavS2f9fFcegSqkx6sGZY1JwR6AKbh4EXKtemtMgamK119PpuyYcEQAQecp8p7fLeL3",
  "key6": "3B8dvEdbyYDu34F7RWuXqFoqammJbdrGyFX8GnLjUGuZbtexC2kEgYdqrCQqBqT8DXDvbtTLqJnhPF7rv7gSyqe8",
  "key7": "BrqmyQR2RrHwztwZe7RSqBAUxLLnzvZ6EJPwRveMkEL5nmHYUJ5sfd5eEAig4eFBN8riPHjWcoGSQFrwbgSzjya",
  "key8": "46zvvPGUvXMph9MdXcL2iYEPwydGVeVjd7TtGgoLqPJATSiwHxtnQkW6DKFnJdLjJ6rcT2cHp9wAcbx5fWwhMj1B",
  "key9": "3RrUdrsyk7Fq2XuF3HE7HE2kmS4cE5s59WG1JiAqDLGRioRXF8WKQ7aDxcmT9exXXjX1ofYYDNGtmaxDiANiDrHQ",
  "key10": "2sj45btPeBaWnBzEVjcYDSD3QsjkdQ75MnMEZBLV8n7cX3t8ag8sJbyeGcvuLW4VTJAUq6WwgzitF58mqtpovYak",
  "key11": "2dkAVB4c9LmtPieg1yfxiqGjL5FUQCfx3gB7qWDwqEFceUwKzKLTX1ZiVmMaYmL3RfM2VR6cBiy6VwvcwQt1KZKF",
  "key12": "itZXGPPVd9TpS5qtV3a12GNij8a1JFczmS9UF1V3frP4bRm9b2PUAGaRuv7ovoGQ9JUmsB37TbJRFC3TS6oyKYt",
  "key13": "4VtgZkw7vBtWWwhEqQWBua7Ezn6L4RtEhpiFExkNuWaoGcV32H3B9xjAHVWJBYHRATJb9VrSpY7uxsB9dnbG4ume",
  "key14": "3LxExq8LSUxqrs6CkUKfUx2ek6qcUvmCEbxJAf1fDdNfFumbhHUJYMye7oX7yPVBAc7CkdkFymgHoYq9sNvyhrY",
  "key15": "5nRFFokFdkKgHKazF7DY6gwuJ1YV3ApvpmQRTqJX33zkHGMxDexhKjgrdZpBKae774vPBvPNkXpsz8XDTamGRDDq",
  "key16": "4KVFG68rTpcDsAbytuDCCL5vc6XPSXgRGPpN8skwHF7vEzbVGetY36oDDQ2vvMZxPEJAMfF49FiJ4N64kc2jQaay",
  "key17": "5mfHccUtWJ17Vq8VdabXuMdS2d9YBoor9JA6btrmkSomb1NpCk2ZiUi16xzzGGw4fuVEt6PMcdMCGMcbmQYbuNY1",
  "key18": "2P2ogsqFxLn7WwQRghWWRewdWwKSrrhm8ZSnuxwNhoFfwa7jehggiZM9SVWvsZpMjzR6ssqBvTnBikrHB7KgpgZ3",
  "key19": "4V6yk6hNseQp24K5vTgpXc1RmfjoVDWsRua7CbZp7WP4d7hRaXdZiqPNrTr5y9jGyKpVeGfQwYPcQpxJTYTCAeUi",
  "key20": "5Ak2Qd3FL4FBHyAxp399XwKTn7heWYuvJXVVyWxaabEvLcbGthBJZi7iBvxJquv4iGnGcSiZ97EUes7k2JWGFMeX",
  "key21": "3nXVmoVZMti3CzRXL7XKxes6fnCRhgfGyvoFVzPqfyRLmUf4NSECnbNExYKNqS1ic9TQa2MeUfxCWJRm57w4Df8Y",
  "key22": "5h9ZWVfjXdkoxrsDKzETz5JdqwhuD2MJDaWNjVF1hMpSkt5STbKKfoUXPtC3CiK4rEDx74jqMXixKcJcnMmarJgG",
  "key23": "427Jr2ZHSRfYwCFLd6LFdvSG8HGREPt5QJXu4c2XCoFtUvZcgU8sBYdWzmmkw7j9VPrgUW8NEVjT28Ybz6PGzGwA",
  "key24": "4Ji6xGNdCyxpawTeHhLMazy7pUFoZfJV7VJt5hezGC7uEp6NovURpESGv3ynjfpeTREtjv7SAgQGn5bQ9A3BxL18",
  "key25": "4bS522HSzZT6SnqSswsPGKmWZtn29A6kYfNR3r1MC6QVVPyrBsDpVbqjaXmesmjWKKgKUw7Agz1CLAfsFvsMqUt7",
  "key26": "4hUg7E4inKueFvUYCPPL57ZSwHbGqBgVtbp3B2Hyweengsc5wwbZEqzgeEz61keoYo9EUmzRPYqn6rF7K7bcWZds",
  "key27": "yUgEv1LKf1L5fhPLU2U4V9WmRJxRZqWbw4PGhtiDQpb4KM8aLZhba5JLBAtswnqtXJKYoNwnUSPtaRScSwAFYc3",
  "key28": "2toXbfjVkn2UHqLbTBxn936zgXFuoPQ5i6CjN35B6xGU3XJf8iTHv2CBzWypEdWVQhnqX1QRTSiiiMW396ANbJe7",
  "key29": "gqhJxzXrwMUw2rey5sPNh2SdL5ubhUwWk7hFt3JsbYo1pawhrcgfXQemDScoFMaKND3jHVWEPFEYh1r9hMzSB3a",
  "key30": "4uaz3pNc555nsVqGTpmN3Edkeb65T5nNpDB9GwjfvQAwCGLX7Vwf2LXL1F2X2rFFH9f4qoD9y7zsqyZVT5KrHNqN",
  "key31": "z9k6Q63J2wft5vXNFo8DW3N1gTk7JiHpKecbXcV6Ff3mmfS7eJiyGxqEZigXm8iYJm32JbV5g72MmpWDGmaa35Y",
  "key32": "4YYQydZeyuvjouwahDHJDGXQ6YSvCetQZzTbdkS1MeK97B6Uh2GfEJenTWhriKCf36nzUyW3VXinyLVmSgFFqTsV",
  "key33": "4xYrXHn4wdmkPfNKrB6uBeykZJZzYWUKojHWvSddDqxW8CZLvzJczGUKBcYQjcujS2s9GcoGbsAU9RkfgzPk8zTe",
  "key34": "5g9dm9zs9hptrXA8TXf92L5My5kgFYpWnr1BtiFdhhreeJpsA7KZ7h4Cy8ohMCyMSbyso9vwYucrgG5TFS99DMo2",
  "key35": "46V6fGzen4YEuiw2TRFH2QoHME4G9ZXgF3azE1KSvTxsLjzPhEoNvPhxjvWH191buZFRwfmdQtFEnv8vM9jm7imJ",
  "key36": "m8wuUNbf5NzayiZRuEViqsvb9vtDB3KSFsdcaJF15DpcDwkYhm8UhsAcj8Ds6ZtDq74piyFZBigvZcKxADpQeG8",
  "key37": "RSnDRmNNzA3W63cipoLGbgiTNWXSkpG7S2k3EMLkGXvjL6UP2tJWZdpQcoX4AMZ45RXH6uP5rB1vehBwq9cJxfS",
  "key38": "2UWfD2ooccxFMHG2C5gzAtEu2KEDqsVnDxxLS1zDaz9qVr4Wy4QUoKT8DiLy65sC5CRxpUXH4iZ33HgVKF9uvRge"
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
