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
    "2k29pUiMQcBo1usMzbRJxEz4KpEJ685yB5aXSz4erWSYQDdB9Lr49HwMGmTwMjW8aPAZdqgeWj9H2dDdexJMnVU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9Yjps9H2wQw5z1tGfEKR1Y4YJMHdNnRvn9peXqWnzo8MAiwZFsVKSj47EupxfhoAxTEZQMgSMDQiHy5fSXcZ2u",
  "key1": "5kbBdAHmZJuJc25SGQ2kfiUzWt3PubD6NqqGHPbgAME8K2LVahedHAuGHwnYgA2Cair3BD8432ow1sxdFFdJgMTZ",
  "key2": "3UowQkTRp2pCVfCkg1jAKo6ApRJCbnWojEHC6CDjFgni47Ngxo6bZzP3zG4ESGyv547M43FhVwiiZwfsCcP4HiLN",
  "key3": "23PD9Ts3DsRju38teLqktNNQEzghEgjhex6xxHZAy8KTRaKFMabMKJdvywoAxpnHuxUCXqtpXA855GwyzUp3tg4k",
  "key4": "4f5UDC2sk1ARxK3VSU9vFNwjTjG5WCRFymX8oagb4TLKLEbrRX55T6avfdocyF2Z4ffDNYevbopoZoD32eN8iu9v",
  "key5": "2FNSbRxMRQacCTq3LA2Vu79pzdnPAkCJ4qWwRGkxTNdfm2zYSwzLNXK8PrwWVtmtDeZWhvTFKw9jKR9Zmb8r8eUQ",
  "key6": "TBHBqscRU795ZzLpVbapKWPg9TBCTMsSUFePwe5nXNLRS9dJfPCj62DyE3VRVWHKBacwhQ3qDhD4WarxTJV8EJZ",
  "key7": "1GhzFvCJ2NdifhJqoALhJxFd3WyLYQGJ47CpLjuYB9c9WSWLkcw841dSz5Wwq1HRHx8wMNjFvgkzttYusmVt8DZ",
  "key8": "3iGYMXDrcRNSATTYniKxhP6kRGSUU3RCLXAGoPhaSLpx1nqiVVR5k1pXrux8mAeqDUZ947i2QWFVbnDgESGgp8Jj",
  "key9": "3a55B6tz6myrLfxzh978cxMGPJifsCKY6bof2QQDuRWan3k9Ctrha29xW2ABiDxxo7pduMkJv7eMqhambMVGGoGt",
  "key10": "2Bt6CncCnDd19eG4mdQ6tU6rCJfpYJjaZtqFZcc8MBB25jz3ZcFEr3RSseXsWX1HR7YnBCXUw5vERP2Z2HXJyfjX",
  "key11": "qzLXwV6nLZ9vwiYWiCfXb86qHSFQvDM3VVQifQZUfNwfBnVWzteZD4rQbNGDyqWZ2Py87CjcQuSyBqeQNHMeRGR",
  "key12": "4GEVcPMqtSLBtz8m9fuYKDKaHhu9fV9XMz31m1aDu589y6eWnFTCC1RLrEyCeF62dskWZQqpC8mSojSwWvszYdcz",
  "key13": "VLMbuDbFmbruVMhhsqiTPvKWUZkAL3upMirVLNanUQmvKYwKsxPANJjw4Pwd67tnj9SV9eJmZLk9xxu8FcMy17F",
  "key14": "52WrMiF3fx8AaqEeS4suocEtyiv7fjp5zneou97vfYGNb8eteDHV6ZBop6yApNeGBTWupymLYVkx4pD74EQSzKvq",
  "key15": "5AWAgXugcLqCKnHHFCks1aGE7LeNFSDdVyZ3RN7b2Qp7pv3KbAUjhRaqySLSebSLXJuJWkVrbsQ1CHP1zEQ9136i",
  "key16": "4d9xH1YwQK8zGWbZySSqbGkpiehi6zusmbFwQ8nqMdWraVGPNxaak1Qb5BodkLnBpevNnMAxKDUFGXt381VAVv6p",
  "key17": "4GmxR7P66pqRzt4ZJa8JqnoN4jBTq7cnRr2h5RuvDNzNY3hAwbCyyB7RXVRMATCFwQUSbAmSu3rCbLuu1osz444T",
  "key18": "41SSRqSpi6eeRB7uLjj1GEKQ9xKyUGtVhjJqATt8qrW71y8AamvAUKJgmBSrsrx1v3PoYK2AuwHm15XTuYXmL43F",
  "key19": "3t1pnxYUaKMdyfMo9DKQTginiKuzwYT83wA6vSjQeENtjykcPNrCvBD2U8m32kXuLbA2t4HH3Fc8qUd9qviRqEKt",
  "key20": "4bN1YC8b6Pny4X48icbWGuJQHShiMvbj3EBLbUtJptfEzzn4X9THxd54zXchKRsYsXMstSewosQXDo36DqNu5Bq3",
  "key21": "5kdPAWYwBmrR1uYFBgmbuURgFpAUuxmbNNAWsTKDDqqPY3xc6WXsTzpPtu8z2tcCoFzHdPz1ehBQkV7YevTbMVMS",
  "key22": "3qN4bpcWDB74QExGWXqMKc4r3Ms1joKUaH1fCzWhM5bPGPX6muFh36k3UKyVe4E3P1rVbV4WYf4xVNL7uYJzgqvK",
  "key23": "5E4dzcUksjsKbejnSXtCFRHSZvCpACt3ZAPPuovA3VgGWDtzga2mbaxcvBKHTwCt5MY6JsBQq6whEYpEvLw9ToS5",
  "key24": "5HdNTqbtjxcTPQUvWE41o7g41T6WAA73G7FjCmWoSS2uvHYhuLUxRKX43brNj2b81h5jjZ3b6WawFiv4skHKApNi",
  "key25": "4Wt6F4PsuXTCtG1vqzmnJg7LfUHE6fATK5GbX4WwSh6Bg2t5feqyukHrK8B9KrsAv2HzBG6NMLt1TvjBvYYdpwoj",
  "key26": "YSbDZK8iWwPKrAZKa9pHfvYEgr4Zb2BuiWCE5coby8GA5FJ7B4KLWRgMCY1Njs2DktmpRGceNUiCpLGvdVCwhCp",
  "key27": "38uv7Sac7QyeaX8qnuJJtYsAjUbR6U6fzHbdHhSc6C9LppsdSJWAiNgVHvBVwvsDCuxFk6xMeJ2ErQyQQbecmanB",
  "key28": "2y5NXhEg6ieVUgm9AnJKX2PorvBCuoa3K4ia7CQJkM6qVmFErYqZceMfe6iPkKkmecxNVwMdmRhtCBbXNF3mhGCW",
  "key29": "UpgPKqPcr3mnaMzfP5a5VdYCP1xM8SWi639z4cnx12ESmpe6huJCt4ahEiCEL93PvbQG5Hx5PvbqG1DWcEmWvvT",
  "key30": "4axix9r8UAg6EEt6uEeo2ThBqhTaeud4wQzhck38veJwMPzpjA3cXKvGGMv2MEScswG5fuzji24pyVgRXS2SmMX4",
  "key31": "5rT13VZFd7rYVA1bbBpbCdbfSuxdssk1tfmGjFgFCqTah5WN4Hq6eHBmsRb2TpsRESZXJGTXFtZnDfQEEzpdv6DN",
  "key32": "2cGmGZt2GSRfkaHbrpErkXqgNzfzyQjpkyTSauTEi6CyKJbh4TXUuWoC5h5iKBsgpd2E7FLpDV6j6691t2BNn3Z1",
  "key33": "5yaUrQ4xA212Fwc1qvRpRZcit9qDS5M9BXPQd5oT2kQksvCRezdSUqJyWnRMStKjcFu3mVYZNJhiBENUrrHbnM5f",
  "key34": "cBfer48Az2WYz5Pmtf1fzu8f1xgqNXwtb4aFG162yAor8iPho5T6e24qVUFTznvsduBJgEYPQe1rYXBAP3W9wzr",
  "key35": "4uPrkfrc7gPzrnbMRpKbcs6XvziYwtePDzWRb24gs9yW6fTTDK7dSFvreVkQvkgo8TbKAaKzeK26is1bASGAZndg",
  "key36": "uCkFPfUxV4ta1hf6Yk67ipumfSZZa67wqkhMpHp473b7yCDLeDYfzDyBKM5vXYjvLpyVBVdMJ3abMcqvB6uvMCC",
  "key37": "55MXaobKP9MTzLSkFk9nSHodU9bipyG87GxhJy4Hem4HTKoe9LSr15Yomncp9P93cwmgJdKmXCXwZV3rKxXhhqhu",
  "key38": "3JyzT4NwtGFSu6BDGN2k7x3d1YfAN6tzvRxEg9fFTE6f32ytSRUgdeVPk73B4DmRsdpyrPBASnTMLe2fkK3fW9zR",
  "key39": "3kkeN8jdxJ4f7vz8WM6mNKt32XPzdbKFzpiGYr2gHqd9WDtG62r7VywXsxiPEUprDzdqNMdWw9mpV5aehhVxpyJv",
  "key40": "35DXjCVSZMYan6FAr7dVWWnKsESKJ24nZrSE2FSSScsBXKzJw7vZtDb7HqMWuH9Xon1veWhg9ttFb2V7vVEK3qnF",
  "key41": "4uugn9hcwodErHsyhCty7Wxsaq9MEX8KxsjhG9FRQ6jV2j9DZRTgAgZykmPksR1m5BMjksq1B9CHGkVGnQL4Y6ND",
  "key42": "43Hm4cqkDQ5n9ytgxUdvExfbVW8kYDsbRjhb8sgDqJLrmkvEbN44zAAPGnWY3GuyRFJssTTQMvKUeZhoKQgQmVCn",
  "key43": "4Tu2rpZ41YsRdpWKp3fPXaz8yxw1KEUUSd6xtd4J78KMi2bKgDy5nnChFDNjRWP6TKsF7A4sADEKDsKphZUQeDvy",
  "key44": "4DV117GR7WivwkyjVtw9fxZ79tFyyB3ioVxommeGNPQPwyFy1PTvabGfj84zrqBcHQTLsnNhBLB2paMBPR4XfJ1c",
  "key45": "UuPTy7JEFm25Xx7wmujWyTPGhwLKGT7zFntiz7nnB7G23YWdZ3j9amNd5TaXa8EPPwozCndRtcs7bVmNXVZd83r",
  "key46": "3yLNbXw6t9XVZdvN3ShHg7awmYyTQ2g6nytcnMbQEhQZQnmHB1ZPyLGsYXpWM4vTZeh9zKhL1urCUeTaLryk2p4Q",
  "key47": "K2vTtgd9oebT7yUu7Na6DaGfrS81CYXSrv7YG42RnTLiAPsQSNtCQJ1V4fgMBQHzeVvRbAaNSkaFFFpReg2BnYq",
  "key48": "236iG1aPULRPQHr3BvH6iFrGU46sSaU5AQL9NdLb1cA5pMm3YTJi1M3o5eRuFf4oTyf94ra3C9RDHYxmnmFLt3ng",
  "key49": "4BQYAqA5qeBJmxZ1ZXkJZsZbKNjTRSgZEm3q1RBnY8jrmRsVLsqR2Zfa3ZvPbYYktBeUrVYY5P92RxbfVnvHrus1"
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
