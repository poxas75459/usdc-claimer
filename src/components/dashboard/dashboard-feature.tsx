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
    "5bWTHhkaEyswgnQGyeWtinDYWtdgHiWx8FYfavoQQx5uNYFopzQVyWUkZFrgTVJFN2uzHqMbxq2xDwUhcnYLCzgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nizt9MFfLjvSh8LAqe1jr9VUvVFJnpj5PysJCT5uYHdtxiUpCxPpKg8RCwJQ7EFizgz2ucbwNaWQv1wGro3gVYy",
  "key1": "pDFXWxH6NcJi41XAzSjU8vaD5n13hA4jv19WzEkXo6sNE98ZpHXBrbkWeTbx17rndgKPXiXbGZkJD1VxjeY2ztz",
  "key2": "3AHoEg5dwFLaGXJjTwXDfYP5uNerrJcboAJ3qbzq4CDu75EhP6qNnAjxcqSCWTjGQdKx6dBWyYHbnM3p4V8wPCoy",
  "key3": "5MeVLfMqiCPep8nu9Am3zLKxk3isiQwbabxQjwc8BPgJwNNghZ29djBSiLNaFW8NSQZskfHHhTS9EybGfwm9qvD6",
  "key4": "2cGedpKcD2zko1N8s23EZkMmVLryLJLajiAV8tRC8M1Nf7ZoZBZavKTRvSkfNBa9C8BZJ3YoDdimZoLYf3EFia4Z",
  "key5": "5FKG6Lk9L8dXyTvESEbUoqbd5x26A3kxKBWrb9ey1vZy6cTNdMpfHwftNJqT9NzA38vLFMQcdLVs6YvJcRqkXSuk",
  "key6": "33kdqaSd6aHer5cTbtwYxHVbMzUrAmPHVpvaEmZyPfU6ALe1oS2T1njHELy3kUThkeHryT9rxbxz2fnUXzZD8GGz",
  "key7": "3F4fyb9xs6cNyubRZX2XVU25keNwg8czCvghZxkRSSptwndRExjZCBwUy737D5xADdmA8uFKjgCPeWn4irCNbecR",
  "key8": "4vCmgybCFgiAhQpj9dxKNwGudkcGPK1GzJVpvSSAp7oZSKVHR4kYBPsHni63ScKGtUnGkT2MwWZgb8P8u3vL9P29",
  "key9": "49Z7Ty1fZM4rnjukgVAMBFbcdmDekHUBXdHsHujWdyxFNGeULkt633W48bizpgnS6NaHutkn7DYzx55zAM2Fyt5S",
  "key10": "3VHoCM5iVfHCxkmf97vL3aLTB6nPe2S9bHvkZLKoXv3bFPx9TnuQvGpDgtQ96wc9DffyJFed9sBtZjewD1gdYUtu",
  "key11": "4Uf878rb63kWPZk67j5dV6VZkcXJBa9L2YjWNHg3mRFQPyY4aBrmq1B4b3w8hnxhWZUjY8q6Hk75GGwvcthkVk7Y",
  "key12": "3b4eA8A3X8xkrY9ooxZFN7e2GBRCLyuZyfHeVmVKczjTKqjM7rqkodyw73Tg8ns1pq99zj755rxJgHYvWapo35Ko",
  "key13": "44xH6XK2RnLFFw3UXPJN6bp2qmUgvqaXNAX3aqRqGyGRxCPiP8JPksx4eYAdd8zAgEn4tmLs7ZTrksLPdcYSxZ4Z",
  "key14": "43WcmQytX3pRxeH6t3gYttE27gGu5UtV2KYs4xJDuhAUwWLi7Q84c6hvUnbXFadAWtLgGNzDVu4hpA5dyNoNRjbA",
  "key15": "4uVKgJtez8TSDTjkxNmApTAK5y18pdPYxCH62BpcC6bxxMZ6yPfbrC12v7NgJ681URHzF4xokR4VqMffaf45eFyH",
  "key16": "XMKkgfJd3XLUAF8ZaeCeA24Unp9V8qsTkChCCKnRMcGkfog3izdiSQov3oNejj4MAiQ2doTwADEj2oHkwq3PKfv",
  "key17": "2x3JLdr8Bgbo4V7QYFssemV9rfZstfQuDyqafY7xLZLk8i4aba1VoTQU29Pcw1rGMW6B3r3zcqcGLcdpnS4GLRq6",
  "key18": "2AyMh2TZZAoSEaP2NRcZfinggBzx4bNjjXaiUxhJQ2aYGXzBv29osbzqMB7ShTFRwEvV3QWn8zRByn5zoynx9Kd2",
  "key19": "2UEWKRooRAdVNWKtL2ywb1jdoVmjuJZBY4iDQFxFNV7Abx9vrKxtfi3sDJz3SN3SWVN6RRPMUfyZMgPfPyyhtE6M",
  "key20": "24o7Pw9wfYvzY1xSvoRzVnuYzS1nc83LypzWC3LFRaTEuzfPmrnhGFpFyijBcJG3aSGEgK9w9323JiptvQc2ycWY",
  "key21": "3bzafqaAUkS9t8zpjaWsmkJCfxLwXb7K6xUQraEwehYSasph1QJDr7jWh3txTBUrVK93xHSgTLs5RKR2XP6333jt",
  "key22": "5GSbriZLs7nkkxqqiU1hHiZecMR2ibDvd5pihLi82mTVWczkL6SAVmydNXuHp18ujZoigkacJ8bZHPRMFh4kPorg",
  "key23": "yMEdVC2g2VksPoNxScCDTfVMzRUHW6w9qQW5PtzoAkM4sHZmFUTvXoUmCtotMXRW8mXmkzCk7xHXvHaFKPPtd7X",
  "key24": "5FfWYJ6oajvwZDj5tKvjr3rgjjthfQD5k6xBBPxpqnAKyQ5k7b6KDqFR81dTr6uds7wJKY27G75NCZ8EPbKe77fX",
  "key25": "hzjxSPw7vqWUmTB5iao9q6qhfW1soEt1QATLVnmxZbS7g6nTYeRox6Rsga5QuWzXG9GYQcmAVUXGv4sUWmccuBw",
  "key26": "2YH7Adoe7p347S7TAfrdncb1o14jgReHBD5HSTbqDayUvMn4BeWXrpW6tcAG5FZCkeU5A1owJabDeRVk3cYRAf12",
  "key27": "bk7tFC7cKys6g8XJgkdcupmMi63ZNEWBT4irdED5kTrWG5oAsFfYofixFvayApsfXxxMrdzJpEkapc1c38Kfovh",
  "key28": "2k4Cp1wS4U914Gjeh5RxdXBKT2AuZ3tA9KBqyFyppH65DnRPA8ZAHnyo5ciFCbdWYJ5DuarXW5jUcUAbvh6kwDW2",
  "key29": "65eorhR915cJ1ePezDpc8ePfXVSaNyAtzXVsXLnbn3f9TTocMtzrq87ejAV4KaUsyV54NQdK9u7VKKEbQtwVry6p",
  "key30": "2JUgA9sr5BzX6wZUwjsjsnKVViKaPwnCuGbqYVVxJ7FjNwHsQCdT6ksdKU5HDgmWbAHyimc3xBk5g2sY4Ag8rcXs",
  "key31": "4494pR8MrVPHKmnX95TntYp2tvuQ5imCw6cHymQ5Hb3Re44UBCzQNYyTLmUsoe5GxqeyHgbQ31JV4n4efa2qUney",
  "key32": "2gZysN5wWbhGumxsBLEcTsbq92dB29dgW75QHeDRki5p1ANnKPk3djguLVBz1mre2hkfXygtGdWJAf4E9zKA9kH2",
  "key33": "2cRLajy3Ni2i5KWsvTQoS6iiVfbaxe8GKRneX5Uq98foE3wow5iYNgFH5DRsBmahUf2yhVtxVUPSKe9ab5gAGZfX",
  "key34": "47dyGJz7oGZyZECogu8sZS3rgUpGg3dVFd2twbLvHqiSggaTqe1GwMFLi4ae8LLiaT74ScXSShjxqHDwh2wTc4NW",
  "key35": "4CpP5DVKjGgVcBUwTypyWZsZfZPykahZhfeLzF5nQL2AKeoWuLjyUu8c2BCYvUKJnc2mjR6FiD6cBxZHvsNePp1w",
  "key36": "2quuT973Ew7ZoUVj57GmiARJM4DXbLcHJr9S4e2PJkojX391Q1FeLu1ScbyYjDsx2yKw1bz6ZsdGjGgiwj4exYrN",
  "key37": "2LXG3r6RUWwJCB7xE5ZpQjHj3wQUHVxd4jDqNqRsD4iY1Z1S8VPLQ7mii2Fhcr6PMCGFHdthc3ChPrFFgkVPtrri",
  "key38": "281vJYgFotv3AZW8ca8AgY6Z6EC3A2UWRWAKMZXic5pZcDUmqPERcfu7ajLWcjW72J6fpJYCF7WyoqLpWqvbkHN7",
  "key39": "4Y36SiuaGKCD2jM6wcqtGFndmYzXL8NE4n5D3YWqkKQLtDb4x3JytUjprYuEhuuPDQGbzLsSeqgpkNEnhpAyKKu3",
  "key40": "3TgnSfSNC8egWragdE8UGeH2ECpMacp1p2t6rjPjdGEqQVLB5wGj34CX458vPpeNrnfQVLUMER74Y8qsg4wKzcsp",
  "key41": "4nTkBZJ9t7f5dATdxX3eHpEF1G3Ssm9SrUdSpCxKwiGDZ28LXP6bzU1pB41ftzu2DiPm2ASR4ByHtd7waSNRas6d",
  "key42": "Xng28FZKwXzJXrr2joEvGHzQnFYxS2UnihD1VoA43pKHzqQXLLNAXtbdUrnrF8t9oTfhW2gYf78VR5RFFRqVTrf",
  "key43": "4CJow3hbJf1MsCM87m9FNTyj88xJ5nwHKyo21VG4mq8EVPKY22oPEE9SRzF15UegRjpkh6GzVBkFQEE6AqeBvr7V",
  "key44": "2EytVqeDtohy2YvsXbxhuRe1HennJfJ3SsQvaK4nXKWYjcrnHW24WPNmSqwcgKaDD3qc77cQZsmBya2Q545jhoBC",
  "key45": "25dHcTK4yJYNuZxvTHdoiEqfrYMWBEBKdULQjdSaSPa29pmhB9jwzg7MyKrvW1ajAnE1AvErLHTHJ6vv8YjHWg6x",
  "key46": "5Extb8J93qExbpeh6vzkbe6nF9z3xwt8sqxszYYtjpmVrUtiipeCCxApUfEcsz7rDEohCADBQFDU9jyn6Swt1cne",
  "key47": "5giF3QXUxG2RrE3G6MQee43kwUkiBUKUUD77jBfYwwQT6DAgG8ANcZzfDbhSg5WaEH8og9fggqGvQ6d7Cfqu2cBQ",
  "key48": "Gvx3MSFKJZVmw3eNExBWMMf3EChi6VeVDsxb8n9EEWo5QYnwBwYqq33nqWoLArWSQfwntdpV7K7Yq2mMN4Zra1W",
  "key49": "pyHiM7r98iM7q5z1Eg2SMQ9r1rfDyQUeQ8Tie3kaNhXJfYUvTALA9bccCrpeEEf2YofkuXv686QRnsjTqbTPT6Y"
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
