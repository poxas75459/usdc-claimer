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
    "ZgwJTncNNEhZzLZ92PjZRfr4Lf8r4qC3CS2r4mUeoCpqBcdqvry9T7Pp5ijUF9LpCvHxo2tfctvA1LNp7F2awBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63oBz38j9SQ4tnp3bn2XTrkuKUoKoBD3SAAQqcY8dVEbsrsKQoTwGK5BzDB3cGT49hMkPE385qW7obZNWxP3JiCL",
  "key1": "27mpF2z6EVVJk4JmPquD2MERo442xRsKJVL5UX6a8EJa9dXVpXhoQBUqcworUNbNNHT9Juq5KPFq1fgGNtYH78H8",
  "key2": "3yLAJSAfiEzmZWNs92AhbD6DTFVeZuydZkg6kPYq2UZGPHdTCStownpF4bcLKLJyd8ENaMqRqNYDHXm4RAoRhWEy",
  "key3": "4JnJd5A4sbHg7Sj46WCmncyMXBxK6gFYjUKeduero1JudkwLwEpct6ALWpJCkVPqnBMBv9pQnY1WHJCZwegxavaE",
  "key4": "Y6pEswNi3BmzwQvHxAVCHDCBpVjzFxMTXeRFqCQPam6miAZEMTi5ow7hfUunxzBoQYPrcqBbHge7XKJdgJk5b5Q",
  "key5": "3UBVuHFRE7Fn6NdC3z3YVERyARKF6apAwtjCUGUGaFSfnAjX5dwabfEkNBgEAvu6TVG379rfhEQPgzjW7nyqk6zs",
  "key6": "5bMpcKBk6qFQhS5jYsjVHyamzSBvC1ydHcSdYLXH2qT7Ev5ykX8epEQHaQ1d3hKWG9W7pLbDyqWukD4ZuUsLw2A4",
  "key7": "4X6NZDMxBG8Q9RKdK4pyLs2LC1kbaY8rHtVsYWdsHsXAvWtGShUCNRS44fRUBUYez9Zzva3q3MGznAVQ9c7Trb6Y",
  "key8": "2rwN35rrQF962tY9aRSCQ83QPpNTh4tDDZvTEVfPpv3Xz4aU4xbVhTpX5xVszQ1hvrdYaEgATbcXKVPekeYc8FWe",
  "key9": "2NyvdbjGztJvQR6LvwLfASDsdvRDvc3BjLRtZc9wTiq1wht27ha8UEBAeVYMPmGQGANSNJZPZ8ZeFF8aMjEeg3To",
  "key10": "5kkqqrgYf9AKLV9XMgD3UqvnWSmtnRkUReXncB9Atvi5HxEHGUTFjucTUmRnxrzNd24HWX4YoubNSvv4bYg6L35u",
  "key11": "1TNq5FJrn5vzgdPwAUkCGMNZrFkiYawaZrNr9QSqid3JzHSpzm6WLKAqQE2zFDpfMu6ggHSBj37TWeKdBANRPKH",
  "key12": "YHFdp8cDq4R27Hkxv4LyWtv5h8GgNqwkwVyhtuWTqhAmc66uuFHkYRJyepbCrs6nFmFhQz9Bi8LQLYY93Fztnqx",
  "key13": "vDRCSLm9sH6nNp15kg2Z9oMYMyKd3Bjn7PjVZ4UTgjPzNeMbAj1vwknJFeWFabJEDNXCAwANXGxSxYHHq3ZVnbT",
  "key14": "3hhFoEih82QZLZcSf7BPd1Xuxo2SayJhw4MRN93ZccFHMrnjT7y3TzaEAYUZzLoXYthMCgFEc17wC7hXe5jQHfAD",
  "key15": "3SLBN1VMHXzRjwgAEqN2CY1qfUpnde7CJfoTcfVkw84xuUntQUCwqdMh2ohsSAsWgJbqcpUpTQGsbmUwn3RdtqAj",
  "key16": "zGo4cb7iRyYZmp4HkpgSebY5Rmx4pRHQEuaEaQJhhdJQAwxaXan3qYa1vLAPzjNN2quPux4jvdAQSnATanjWpqb",
  "key17": "53PXxi2uucUR86zweZofJUkahE2eQPSLmpQwQqRFCeBHpRK37UmnojszTpAM2YUcUJw49BcnNuREZDLBmxbBSVth",
  "key18": "5MDcKBvYTxuS9KVfJQYWGSjEdwbMTNBNDrL17xkMcWG7mTqGgVpANv9AubGnS1fdVNcKyH95sfGZa2e9FLWrzUwG",
  "key19": "4k2ewnDdmZnVedPiZprT8sPkrmosjufXnZWZyTQxunZ4NFDpb8x2pLCnStwcd8NfZ5bdH8KdEWDyAybTEzNMU24e",
  "key20": "4vmPEpPrCNRcForMihLT7vAbtCgTXBemujn9bpZCXFmW5bYtgey8kCswjHzuALQBomczoWFUtUqQhFFPmKuEbsEf",
  "key21": "mB1gnbrvXTwSaCh7u8XfmCPNKTjLh2gMPaX5NYS7GYw7VGFaKFx5XPLqVdAhSUXNZis3Pck5pjy2HvakfDg5HSQ",
  "key22": "wxyoxAV4JAnq2VqU5RdJ6M5ZnEfHMp5iyP2wmjWUwogkEfaZSeW2fH6HLYXHMzVFC6mFm9UReK8665AG3EPAyTY",
  "key23": "4A9GJ5FFiLioa7sSwxbY8ExYg6QNwFM7RbqAooBoyz2oxSUzgE5ZeqMaE6jyKNqkYoNS4MWRfTTDv4C8RyENUDGz",
  "key24": "3RUC2EFYoLtFJMEGi3WhqzfhnhxkqoRbcgCT5ukFEfAKuwvYgVWj2WJhGsLbMdLdmH4DtuPKYPThnKgRW6mcXT2y",
  "key25": "5HEgDC3JURi9KkmxdhE28YWU5sqhkNk2cnE8kbJEBBYUx7532S8Ww1Ld5ZNZL6ahHePw4mgPjRBgdD9KVVu1Nz1S",
  "key26": "4oTYKhmZDDacaNcrYE2hdzrnowAAEBPMpL1inwJiYeDHQMdBnQQuf6DWYuzbTU3stQonpEkA3rUa5QDsEVhrYrB2",
  "key27": "3eBypk6AVpgu4jWMbPwMdydzWjPK4AcJZaEZ9WiZdeXtNFdkqXWcNUhgZ8RhhB8cCqTZ8UWh69msjNpPQ1fM5KaF",
  "key28": "5Jg5ukdFW5o2n7emZ3TtvGBjaokz23i2ZQYunjRemC9g1ciiiALRs9Xn2i5dEKGevcP7kesVrKoU7LGaZ7CnDdHU",
  "key29": "2sPr6GWk7WkHaBkWpMhdcRNVv5Ue4UC7dFKDxDofXN87VTSRNsERCRUFQisgbiwxRXwcjZ9PmvrmEEr6Bv1fraQn",
  "key30": "5RyWZ2fZFrMHtAjGMugTHAzLQ9ZsbBCBPZpvS2ovtTgAeBeyjnT3YWdspPJYdGmujfKGu9bu8QNAvZXHF6unKHyE",
  "key31": "375ficThYm78WyKVeWPNf6oCTFruTDA8EUvfenCsZa7f7FYJyompTVCPVvR12btjZ4FQ1rE2v9Cz2H2xA9vrya5X",
  "key32": "2SRY7pWCwX3GUTiNTMRZp7PBS1EbdRNwRLLbwTTJbJS1QHq4J4NBPPRvotY4MBTQxsmfEgRvdynTVN9tJ9FUBsPd",
  "key33": "K5hDjJBbRTGnJEnNvKywWC7ZW1pNmPz6aGELFmJNvQjkopyGR4zQV1U4aPB3JZjbUxyQkBmBZVDQnPrSUxkbYn2",
  "key34": "4sBu9RT5qc5pDipvKe9Y9r33eEUozyixVWzrTkfBLrqTZ4hZZtjaFAJAYsBTVEc9W2r7726cgPbJ8bmHFasEeHBT",
  "key35": "fiqJ1Wtaj6pnMKBDzY7FjVA8QT4R79CZhg1Hccqx3maS5geaofJgoJP5UsWQRyoshAEVZYMgabujzCDfjMmQm4v",
  "key36": "5ovuNtdL9RoZkaB97m1EsJ7RuHM4QsbxjefMDw6EEys8fZXEtFMNQBXsHbhUQXNcZPimq6CfZonmEV73ENLXJY1k",
  "key37": "nZtLKuhB2HtQteCvtnrtiH5XWNzRsfs2uzDxpuHF6MyeV8JbgZ3DvJJcr9XQKHoi5wTEyMbHK2krr6XSn2gxauD",
  "key38": "4FzY17gbcFG17uMXhJv7JyUVs1aDYkoJdgkgvv7PCGHdTU1TNfA2bLLVoxq8KEnCbKcZACAubUuCo878JfcWKMdg",
  "key39": "3fB9bip84P3hG8roicFSiwh7t2Dr6nQc4VdTVfsNoiiUjdDu85v7gUPg6SpnnzcaycRHDQmGe4fi8B1HQ7GwWNYS",
  "key40": "4myVS7fxEZjhABo7xd4TAqo8pTUoeXBUGwNawJCPapGZjvTagDDQLWGu1tdXsi18CCcJxGeZv1hJdGEMkHdHa6uX",
  "key41": "hEmShQHXPcfviN9d2TZdhuHFQkdgARdvW5zRE5FEwgd3bBaScFgBGTZJ5Xp6E7zJiMPjcjN8RgypwGFqYam6MDw",
  "key42": "5zHrczDF4wbUSojgNu3sZ8HvzN9ZRnqrpHWaDSLpxpPB4f2FEmrgbrAtyHNm7fxCryizEWAdPj5urWo3q12W8t8V",
  "key43": "D9R3SoeVaeUyMW82pZazZVHJAAUuwWYZUhe2ejHuyy2KE2jemjibtYYwTi6JzHTX4N9cMxkTEGvJGArYRsnaqAs",
  "key44": "4KJtH2PfNGcpq6gMV47hJFh9g3zUfenycaSuLh58hECXbmTGy6C9roSCzd4xxLpx2AHN25YDfyuErbinrwmqAVDK",
  "key45": "23WZj1fhEMfc2iGcwXGhs9BXspmQvEXED1eXPwDTWevcsvz1jxDdCmxYuF36T4GCw82PNqzS8cqWPsvUzmBPMKg4",
  "key46": "3nwoRQjoHYeSEBSoJGQEPGHVWUW2FgSKBkTaS487yUzdaVPHdpuSpqEw1ERgrmzkSDPJXz45V8JESZasNy5Uu5p3",
  "key47": "42v9aJBNXev5Zb2wf7jKyBWciYsPRC2yW2qoSNa1icX1QHknhLuzYgpac4og1UiT7JLsQkq31g7gXK3ekm1DpSEH"
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
