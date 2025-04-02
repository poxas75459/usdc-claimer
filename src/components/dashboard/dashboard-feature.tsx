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
    "4dURwkfnsswkoCsXzTqfLWuezegSoB9ypuVPB1vg1BD1ddzQhBPMXHBFx7CzxDoiNz1oJ4m2nEabvsSGRTuL4Nbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcxQL7CYzEBGVm8W5BENHW5Rpb1UNoSp34de92EGputAVLuA2iE5G3Ed5xG7bfFbNhTQaZv2arCzBeeVLoS8JFL",
  "key1": "u5Fynxjuv66hRhWuiioTTcz7Eg5GamDCDpGoVYaBuQAgMwgaSLW9rmYBxrSoUfuJXETzvqWmv1cLhkSb3aDiDSZ",
  "key2": "2WqebP45sjAsFrcMyrHDLkuUmr8EXWswYG1tJXfKwTd1Np4TGmaGRHHtSySYjsK9ahasHytfmFkne3R3jLn6R2ZL",
  "key3": "2qNi5nKhTpAoRXjvDFY7EhCqn2r4agrBiPFyJnDSwM8QJz8BSMJduPrnTQF6PausPh8KtNXpCnk1iPp9UMTXqSWm",
  "key4": "2XctJJeUso4U1tDNQicUvqVdvGm35tP4it5hp636BRshpvL79ZtxMTpqaZAZVr239dmKeN7CLUBxeMwM1MUeMexT",
  "key5": "3bK4Tm7xmDxrgxJYEkbtvVfC2WaLCEfJupK6Pmnh5x1QinBWbHvGgVTUAoNBmJ6mQvWgPT3fq9KnaWksKvh2KfZ3",
  "key6": "LpMZtJdxLNq6bWPeHUsXyv5FHryx5Fs59hPhMvB9PXTrKzzKy93vT4S2sRcU5RYPoTSJ4WLAVrRSdkMdSFoCdbY",
  "key7": "33ETMi3LbrNCRo54yNJvX41BxReKUKnh4CWHK81JcJqc9FsTov3x8b13FSi2jagH7JSNF6dyBZwm8bTedXKA7X3j",
  "key8": "4xzV12agU3Q9rqSW5AGHxCHcbkL4vgbT7zXvcxVWEy5g5bYd7bbaTAPboacBC6zBpq5rrmLteiQGzyG4yMXZYwJq",
  "key9": "38vmWE26eNVhDpYP9L1ap2vwVm6ombUgnhpcqKUiXUdF5PsqQW53ea2rq9iKSMEzLv6Jthx75KBmCpEnKSvXW6Xr",
  "key10": "MuAfePBN8pNcuGzk5JERXNSMoSL4XJCpGzwJb6uLqDjSpGH9RVn6BL2iZnumXLghwkMoPaJs21BQtSTqHE65tVa",
  "key11": "2weSAcowBHngwipYDZDMfmJovmujFuCy3QyCcrnxnwzRM5YEQHLiMHpE29DzxGNdUxTR7eL9mCcqDuwF938vaEEU",
  "key12": "3uTMhVRzcZURvzG5GT9GVbxvNMNN2EeMR4xrNgLHui4bwdRuxnsbxVfMhirAx9HFQLChKpXm7GUgbdz8qP8vAqN3",
  "key13": "3dPDfnPoNiipGA8AtYWsZoDDPcBjrbXH2qB7o9NeskC9rkpCG3XmueqArZWx5hujmcpk3rVrfPty4fGvMqhwvaWs",
  "key14": "42at3dWNdTt967breiK7FAkc2WeVe7nfAzW1L3teoG9v1XsNvjtmpch7P6EG3DETNoQVbUA2ZxvAMAK3jV8247r8",
  "key15": "JgC76AbaKA71A2hXrWxxKxwnbPVyPoig6qUEwieZ8mVj8V43KL7yVFCjFJZXthSkBgjUtVZYN9jb2J7baD1UK47",
  "key16": "4MYChsN2bPXKT5XKVDFVwsK1cPrToVaiNXi4XAgfbuSZGcZvdKjV57F3aAvXTC4K4QWuMShb1BKY8G3F31nsTKGn",
  "key17": "4wLDZoXrPhpcqPN4G7gk4pHKV34fEyb8Yiv53efHmANNcYowMKbJ7iwstkQCJ2bxA4wkT65wBc7EMq7UK6sGeb5P",
  "key18": "4prcpTQw9iyHtn9j4rSY1DWg4NG9t2eNd95aR7mKkcYhL5osHRuj7fotKq6eBYpyEa1qBaXggV8MHpM5ZKj7BHeG",
  "key19": "3EXWBGX3NHWyfCC6pXMcNXuoKXxiQ8wYgVkdKBto7EP9msArXkbbGkiemcWDsKX8qtKDyCwPivyqHt5zSoLZGjgV",
  "key20": "3j2wYYaf2QpsJLLifudQ3TQsdCUzBm4GPdTYCkFbzK8cLD3yNvuvNBLjgsjDCc6L6ERuCmTzFqR8jH5DmEED1Gd9",
  "key21": "2MgYLeAEJkZL4NbHgbvsoGXFZgmHH2uMbQsuCzn4dibxMUiYqyHzn2tuXE7quVXcDxnuzXvck6BpQ4rtv658zqeo",
  "key22": "5uvFbkUEPnUE34M42J5qgL6e2omLXnaXDgPBtRJ5zY7MX7rzSgPdtTNAKRmJRhjC6pERcyEFLLHAACkxjq5UTxZz",
  "key23": "3XSkfhvTrbsNN55B9ipUUuzPS5TYrWW1BL5wsuasRXxar8WhUuvweM44NRooWejMWxAXteYL25NAE45SVjqmX4zo",
  "key24": "3dimBJGnxRivGVvvoPVnsepEQdPWTgUDtAeWi2Mt3kz1dB3hzR5tKMDrYevkDkMknh6vgV66LFCTUieLL9zXUeYi",
  "key25": "MVaASGw5LnWb9u2Xtsr5GLBhTRax1dt4RgwgVQRXJzgYYmcDWnfmurV9QrCTXrTW2VwPzC5Zxd5vwCzteTt7Zea",
  "key26": "3ddLp34Zcrk2bmk7fYiypDmTLAcWakDreVLTujK3fqH2Mraa7daJcgn136wGKHtc4PKZFC1QfySnTey5YVfXxbEj",
  "key27": "5HhbWr4imo5mfUcLkAMbRsQwfZM893CFHbHjiqubGZwWAjacacBCjSCsNwgdh9U8YcMuxB9fvg2CAQeum4WzsDXj",
  "key28": "wqJzCBFoef8A2qt9sihyjJ2YZcLUxWUJPTcorsRkTPruyGw4XvtDXv2HRDzBRSYfo18RaptqvgRRnGjGbzp3kbL",
  "key29": "2nT2zhjwyJc6GTtYTBQnnHz9ueBJdWBPBkttHfNThk4Ay2KAEfSzTPaMTU9Cj7ndzWTWmX5N4mPBmDJTRqhh9qto",
  "key30": "eGVKRWDfH26pTC9HRpbMEB37ybzT8A8UaW5V4w3dfhb1qVJYLj1ABbbgsabQvWNS4YAaEhdnfj4fbFbpYqMLWzh",
  "key31": "jBtMebTgPC18kKnEV3178nqoTda63YYjr29vBueejYg7St8BsmVghBhueZguEKC49rf2Q1bzwidPxZFAo5SqBUs",
  "key32": "3HisovuM3hSEb3Q78UNshmGP7WAYnXqMZXxPqYDDTjYhFxQPyvtwWfXKmEgFXxv9NqwY8j6aJSoCiabfZW186DT"
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
