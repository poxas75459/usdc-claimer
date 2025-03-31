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
    "MQQur5D4ici7qt19DSUHSX8Q9Z51wZ7iWTN9bNcUagszmyRe9FSHrEaNo9boC4GRKtEd4GTiUJbw1oiEGzk5eNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NarwAWzN8zRYRM9nbzzzMS6L7bfPG9AB1vAHTZFXogBPvAKFqD21bhTCCPhNMjfZvzgedhU29b2YZvPALfCia8L",
  "key1": "5rUDJCAFDzKDFP9sC3W2fPDw5vHCt1LzzUrBysqL2Q3axvDYrtqBY5dZk2m1dSYsJnq4o3BNAAYuGfew12Pmav29",
  "key2": "33QUTBygid649uQXyRKG56JPcC8dkrnUJJCGFd7qtbXFjyM3B4GpTUhexfdjm3DdjY6TR8XVvWQuyji2wVq9dii",
  "key3": "3z9EhzcQyNaMkHTGgGU9ix5shmev4VZDvAjSidhTUJ9aSsMcagxHhGCrMrCFs9fpRaHHJkofAknthm4kCscs6V5m",
  "key4": "5dGrs5RrbPuwJR8LDeGbjdyWbJ8K3NWAoyhfEh34CuHFqKkPfzgwDpJjXMp26VsrHEZUL7HG9rps2KmonKLZ2HoT",
  "key5": "2TXu3CX1i75afqbZwZKRKCzjDNibmWgCZ7ZeRctg5iiYP2ayLFrPCqGZ3VLvKd7LXpoMEqcVyjavH1dgAHF7B4MF",
  "key6": "4YqApPpa1XkYoZgDPK2gvqyYBoZMQ8qoLRe3wgYBMQMXigctTrZc158Jgp7s8CPhHvfSBwRA4SdX9qHfrAvzBv9R",
  "key7": "4mvwgiqJxwkeDEAStPtfHw6YBqtaqaPmY9o2mZVehJfWSLhkQFTvnAxyEknFWPjVh2ffzYRnnDGnUZHUVXnnRfRU",
  "key8": "5xNuD1o6X69EtY2vJ824f97KJ91uPG2gHUiN7nZaV1khEb9yBfw7qft9FHkckHvkUukdKZDWbuu1zGXwKVfYLtNy",
  "key9": "FEHGZHfDErsT3BJG9AzGWUZnEpjr55sREpZTA5BofYF3AxQhfxV9WMEUTopnsyQnAFYT4ne263mBR5zejP5XSrr",
  "key10": "3NYESAnGUjrGA5nKm6sbn5pndiVLiJNxnc37jHUUCWgeKpAz9hxN2HuhvupWcMq1cjPWL3vju1XYueokFLWhDzEk",
  "key11": "pB5u5uCqw3MJNm9kybhVXxh61yhYUr2aEBhofa2yBPZL9Ym66Jgv4Ezn995kTLuoeSbkSQZqiDptBiMNFonLXVR",
  "key12": "4JXVxNoH3AQ1Mxe6vDTRmCSEz8kTg8hwyPes6bTrx5shgKd75CgrJQZquoLwWigM4ufSvaj5RxHs5oxzH3kbe1QS",
  "key13": "K63tzxQFk4SvWLTatKux8wfcU14eLr5cf4uXem6ifFu64HKaKHYt9FaDpcB1rTJ9CdCBZZWze8Wy9A9BxGU8Rz3",
  "key14": "4qRnD1MFaHdWwZb9Kz7pVMTf1XDWp9qLfrd5qvDNEWCzfNahzKJJYQitt9bb13SqKedyUevUZam4X5c4UmQPDhBy",
  "key15": "3CfyAbN9yWkiVURQA66F9Kvk3aM13Q2FTz5vaQLUrgcdmm3zfgNpEg3ojgoHRzNFpt32FC1uMjhHxDBrdJZGiKff",
  "key16": "3Fny9vxNzjSU8QmTWC7MtoBEpjys3ZMizH6cicgEJqZehWtbTNWA4vV9qjCKszhcKt9JRdFKEWXf1gHva3L2gjod",
  "key17": "2XQZaDQVhxtKvm2oqoMkxo7dofQLhCRjt29rP4takr3GpWsNma8mMwJdqtL9a6W4Gux86UJmzbkorbGCEatP1d1t",
  "key18": "3YmCsvtySEUMeJkdTZoBDLmg16bYniGZqcJEGrD82LKWEj55KdVFmwjTvyFhCp3N5ir5uja6FYkXDp45FfGJXRXd",
  "key19": "5C4qgxJEpQb5rHrxHuGKJUvvgcnZ4gv7AFjqDwAHKAi9xSgoWAs5NXeWbA35kRA2KDd1anHSzdSbszavPyFjAvXu",
  "key20": "2cVFT8eebjpuruqyzZnBAXANzicjXC3CjmzzD5WC6kLaDn3mCCUXqNzdisanxVwc7YnMEr91obpW7SmjDV2u3r75",
  "key21": "55AyUE8z8yutReJGjf3wCbKgcexSKWRE8Qa6NWk4f4MsnQArPGWkXnWCVP9u57YQDaKpEfZWSx1U793uaxjRN5sn",
  "key22": "3nTLUATkVUxrLhFuu8u4gThwc8V23j4CC6wa5pBwmuHdT1vz8CuJ1VY8iBECrgKJkpJXgsyDteVv4ezJx9AbeGDe",
  "key23": "FzxFJyQ3xAtKWNftsqfVwb2NpJ2T65V9QuW4pW8HdeELxfp1SHpAoP66r2kqvxH6wME9xs9KHuT15MGY5iYPzxd",
  "key24": "4HYBAm16fcf1UMrEyAaKQrkNxAz9a682iW7jK9vFgDGpbjFJtQk1L4EuZWBjPxhDeriganvjEGMD1oWekZYhbPEi",
  "key25": "3caND4DBND9YgYENnxB8bovKKq2TJxHvej7EXK89nieabmeyHVfzE7y1mDNfDabi6PFna5bLVpCZ9BwhHgz1QVzf",
  "key26": "5yh5kBeqyF1zFoMomz6aJP7J1MCUvVxmb8xdcsybGjfcUSN6uXtx6ax4pbyiHQeQ9at3MNPDhrKpzAiFZ1PCKvxK",
  "key27": "4i7GnJoTxJ13NAEYC4aJtb38qwffPvo6SruX8Dx66U86bQgyxVBJVkjLFyNxGQgscp7H8Wmz7zsVZKzYWvgAwPdm",
  "key28": "bkUkks4Jn9bDjwauU8y9x7EQqHikm5kiST8B8KH7zMvsNNhe6LkGCgmnRF88Fv6BYpMCMgLhoBpXKVe3ghKzGQe",
  "key29": "aWp1Ea6t4U3GasckMGNvV9mqtDvCCAAETJT44hHsifs5AaRBWCyyow3211a8bSCQZ9rr35CNyJmXHM6YUcFgbZW",
  "key30": "3azoiDp8tYeYb2xheA4keCwnTSknGuqvn7nfPF6BJsdoeqyJ6FJjxQxWEy8RaQ2gF8FdCoCQeswv3AjEEKezk6YR",
  "key31": "67ewX6Kn77uPy1qZ9PNPSdqm7AhCmscqr5rVswEBzMFEQEFrEUA3jrhtUC3uwXYudgGKefwwaN9N1HVsiKsh9nXx",
  "key32": "4tdDkCmYuSwFMzXpLrSeFRCUsVufg9FzJ1cERx1TKGK9N7H9D3SKG66dqbPbYtvvHeLw4RGkfCRxMwWxMyDp4KHG",
  "key33": "fZK9ZLMMqmZEJCuMRDPt9eTxuHXpBDKvipX6CAw2LDWDVCq7kzrc4ZokA85UwKVPnq4JJpwm4HGKmNQgnVnxCuj",
  "key34": "YNz2kj7L51qkqdvpimjR6LhCYXCHLoEz7baT8xkxso9pmUpsJPoo7EdyDTDppPKmiTEi6a26DipqgD1dKvEaznh",
  "key35": "5A5Qo4nVJYHKMkd3vJEYKeBrftNwZZwZAG4pdBwSEYkfREVhdtWnySzgFY2doo41xyP4onPHg2NAuhzQN9NfwbvN",
  "key36": "5K8tH5Bz1LqUYeFtCbdsdFSYY4H7aLyF13SySBVWsmnmtx55M5pHU2ya2uxKF9ssNGKy5atbCUobmHt29v8RUd9k",
  "key37": "5JQrR9JYt5igm9AAEQp1f7rPgqa76cgCSP1nBxiokg7nANKbp8iSMecqQQx1YH8HKwck8nihXgdWjjDyPWctBHqt",
  "key38": "3PJkUdcDPMkreNTdvuJHfb9E9YzsJw44qan79iXB8PLnq5g4XHaxQLUJd5aBVejW5HZR5g2XVcc4hiUVhS4RQBGQ",
  "key39": "5yJt7ve3r2LdLeEChYkVrkZXQW6pgpw8wUASbNEQ7phhJCefHpPnUrqKroySQVo5DVvEy1r8gftbJuW9K2axLcHt",
  "key40": "2ird7wxbBkd5SkdEvGKJgKgRiifFK4KDgCnS5919bqnZSz2zYv6J5vLijdQ7LkvSxNYkZJrqiUUsceHB2v7z6Nh5",
  "key41": "4VZSUSNw9GgqGoXEFotGa9ZGKJTQ3522rnGL51cm2EMuEtTTUWAKYeUYa7HRbEgqeG7PXMzyLr4XtkTRhWFgfEAp",
  "key42": "5tyLycv13eSHpJMLJMXfD14mDKQRgF7gWYMX8EvwE6x6rS1UrcXKkdaxHqucY5VRcFJkzjMR7ZoG81vVc9dLMXFN",
  "key43": "4CaVU97ezi7Us7E5bbJTHyLYxxijCVogVzzbovvLAXSeiWncao3FHkEG7irA4sjLfHLLXEtG656ssLvA2RHjmK9Z",
  "key44": "2J3xpCvVQnW1j6rWVR9rG4RYwX6Ccf9nFjtUD1sLYL4YG684zKTH1CCoS1T9ZdCa4zPKSiaa5oF7Dcpd5b5YkxSQ"
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
