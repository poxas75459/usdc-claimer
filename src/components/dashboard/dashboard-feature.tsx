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
    "PLCTScFQ38DKz6Wxaiyry9ECGUE14rWHXJUgknZPoMtV1okLBTmGcYvzhCrZkEyvHiF5bZNgSfp5qA4DXdqeXQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "esGaepEc7Z5QCFwNAudogGndxrCKQpPX89iwXUCFXC7vqMPjcV2WAg1ByhJRZLKvLZfCNSWFssbf42L73bx4z2a",
  "key1": "3KP52CdWD5zt47Ldi2DgjVszNwJC62W1y3nkjvsKPLxDHe4VC6LLENHXeWSSagHrA3tJqb1foCL7y2pgsZBeYj37",
  "key2": "58TypYcZcHzvgdFrmUGaLEKZwTeCFGRaLLXhRh2KG91aQoHGtKyCdRQ1wx2dWWTyTcMazNjX3haxPpUSP1W1UjM3",
  "key3": "5fAEomrs7DsfPmXF3x3UUhk1V5yFVfwjwGF8a3DAdcSaKxLU6EM3bt5XV6oa4LK787AKfdxNx7W36Z96s8PEHELU",
  "key4": "28dNkky8B1yLnrn8LPPy7n41rej2a2fENsWHApum5SHgJ41LaqmBey739WAjghB4VWHJsHbCytghMYZYsStVfaa8",
  "key5": "2iyfGy1HqXomoq313FQ8b23T8ud3Y6sm7qZyw2SKgobCFRi5ibtKSYYx3ZN6Nq6C5h2UNd28fo9Guj1oaKW1tGAf",
  "key6": "4isFWj4EvbJwcL5yEgGQhhhekM77ruYsKaLCrNHwT31REspDq8cagzasVFZUVnH9hPjxp23nXDF9UMWkbrTqgdBs",
  "key7": "5NCrJuBe1DCqfFDZk1a17tBkkAE2SiPEGmXmXc6iube21jDEwAtpN6M5AHgZTT4naBbRjfH2fXutUPpdZM5or1Ru",
  "key8": "F2fz3gUPXiJX5j5MTSHjHV62yWCiaFWsvSNmDF9espnTCvFwjktEbjrtGkK7XBrw9LEZQJN7viUBR7pZn5Ha5HE",
  "key9": "52LM4CVDB5xpWn5m7BcfTcj9TyLKRtgx58fCqay5N73SmcXjE6dbfhyFrVFFdJEGspd3p9xSjWGMNDTACBD8qeRx",
  "key10": "2CASXw21rA84fb32cSdzUjRCW58ShnMQ4Gdo5AW9r8zLS6oA6MrvRMPCp7aiK34SNdYM6mq8Bqi2es2oMtCgyvsB",
  "key11": "3HVZrSyWZDjZQZ5uDaM8vVfd1eA6BeGrSRLSiTifHQzK1U9WLc9q3oRWqGcpVxhW5WhQ5p8qYRU5SPjqb4rTmx9q",
  "key12": "3hrQrGypaQ3naQAjuk5gk5yHaAKEgGaBwPZESsvGNWAGGytQWbqZDgvFgMbPtZqiwpEZkGS7PvgLneXPvLzo1YSQ",
  "key13": "4pwFvxEhjtexk7jbqeGBVZDKkPBKKm9S8qNAmEJV4p3aoAqgecTe7xjy59unryP16XpPXRwaVR6J6YhmjKLbygQf",
  "key14": "2KH5e6Ja3f2c7Tk8Fq7ZiAiCnnxiCfyPZuwTNXe8ZKcySM4KJmQzyCrQm719w7vZXwd7UxEJJMKYE3W2howtuznw",
  "key15": "5N1VVjzfKWiCBrEN1a6VqJLuJXtxgsX9vRWetSgPP4TqNmVXWHg9BrCmABwS2a4yueQ4S7Ta5EfdmbEaTxfBdwcs",
  "key16": "3xB6gwUUMwRRH9u2ynp38k8QrYQUeSVW1B8nUutcDkPhgr5kVZyWi6ypc6qUKrTqyuviFR7fjUJD8dgzh2y6RBgh",
  "key17": "W3qrYTDDvQnsecXFakMYL5858TB9wDErLM1T48XdB1mEkyGLeuJzT4tXweqHL79RYYqsdrg86mJCNj5ioTsV4GR",
  "key18": "5mstF2du4CTDr9zb2rRumhszNfEDupEkJvdZwk9EZpoxtt4eML1CnKzLobVjeEMyCUM8EoocE6SR2cSH8AP17Vvk",
  "key19": "2uo2S7RQQHoB2JJKcNATG5NBGaz8Zw3JauyCKaFp37pnLyKgrGskiRrkSG7ViFsaKtF7jPYaFo17i1JYddrYYhcH",
  "key20": "2P2Uo3EcRjRbz2tLLynbPZL8AbPg8ow2vNT2gRhSrtuHRugsBH7nuLomKBxNjErje2Z2u1CeEt4E2Y3UHFyiKJQo",
  "key21": "5Gzn3C2g436bPwmVGbWVnEo774mta1q55m7r14qcDopd3eAyxrCDvixiar6vWHMDTssrUjLcUVkBbpXeZCCuRDuY",
  "key22": "2wAzggoqHvp95GMXFTjWzBSAjX26uJUSWjQRJbH9duzfhnE14oDEeSoLR9R3zFSoaHDD67MqV4UqzPLxt69gYp9r",
  "key23": "4NoWfYgngk41hh3D24CVYrKVAKms2LvXhr4EKtN9TLZujdmo3ujEGwtGTXCT3UUZcR264gEw46ZNhZkwwweC7VQv",
  "key24": "5PeJ9Pag1oNg9QX757CcMcMnRYPS5cuLfVgfSA6JvqYHMtvJGctppsdiG4y1WHTEdtv4ay6SjmbzYXqazVnwfwqN",
  "key25": "4zFtKR6MQW1PFqgmYjcCJKepVQryfbuxokgB9LsKBpZ46QMg2X5Lvkfmn1YH8eW945bp7UQPchoZyfvdjMEQZMcn",
  "key26": "1ckMaoNWm5ahQmQAG8dvizF3D7btTV55KVxntMZxP3MvFxfz7wQUZTVyidz1JrQggdkWegb6cvVjeju7shEkG8g",
  "key27": "2LYmdZ5YRvnuMAR5xHhT9pJRLKC7EkAcYNbr1wkqrFE1mCwaRcUQoawGwzQfRKoKy3bkB65SVDJWNWTz1GNPyrK8",
  "key28": "4r3VahafcBfzVADfycT7yLRYzTpXu51H6Bqm52TCUEXzr137BC9j9d8qj2TsStKBGphFmGFHppi4UcYLWtqnRbAu",
  "key29": "2hojQaeKUNQikFj6YrXt2HoKeXWkp4PEC6pq3qadpqLmKRqoZcy9GhQM7D4hqFbZYVzQqagF9k3RM8zVGyK6Y6K4",
  "key30": "5bRpuDuT59qXvKJ41V9a9ETbbJ9zQSGSCFAhYki7xo6DmEJfiA23Y3ED3A5FRuW5MsYgCThcT7dRyrVbNyEsNVHt",
  "key31": "4EBaRrS7pVo4UwzW61eJh11cVEoDMqBHQye4XcvqySqbVVCFeinu5XsvjGfba6XbtBYojWAKDXpScojbD8yjSJuc",
  "key32": "3tTY7nYoK8GVzJuK6aBHiG77BRBLDBCQVxexVrPuMkDBDDAMWeysFauKacGEzWGd4fd55QxcRQwikY4ZfioBLMZy",
  "key33": "2BMiFTv56gRwoqbc4WaMKkjidhd72BgVTMjh6DmRvMwA9wUHXsvx7cNg9Fh46mD1kqjY1ddWnW7PEbArp7KXPs7Q",
  "key34": "3a5wihc5EanhvATEnF87RnztEUiYyvfNPeD9ZhGQtr8vbBUbmaRH8yBowe9UCJycWdkTFhJvvkhX18dKEk6xkbEZ",
  "key35": "2xjrJrmNQsYmkKK5gRTEF6PGATPBChb1Rb8cwN161CnapY6AjJ2NsVpgHxbzAroDdsdLkePzDZHvcYuUSmz4hHGa",
  "key36": "2pcNzthEm7JjhxwrTQESUEanVGekieKKUgtdzPBaHMpZw9NEXLAR7H6xjJb4197kivY4G8rVvR1PFtDXDbfm7nZ4",
  "key37": "2HAM357BkjfeVVpnueqjgGWr2aXmmpoABGpV2DT7S8AqmxQEPqbNFBjRX3F2bdYbSsT32ji4EBpiUXHgUomQzinQ",
  "key38": "5hYN95AMDXgipDzjB6BWBPTdyYo4dNcfV4ubcPSJ99BnEDeCJpX2MZ5Mq1KJHSx4kD2WQfDijbSFMDr1XuRcREu5",
  "key39": "31JTaSjpM7sBQFfMQmfHFmjnLsByrqmsjEXqKQabAo6M7En5FCW1bEinQ1AKfL6jxbR2tYeAY7W8Cop4dpF5LDqG",
  "key40": "2AvqJ8c7LftRHMQPkLD2Sgr658qd1vCNcj1jXv1AWyxMCWyEj1WaGqVeDPedqRdtAsdTkL84SfLgaiHKwAuzegYY",
  "key41": "4dpAKQo2cZSctSd7L6k7ZrwVbAmYA1KrDkNhx75kaQuT7uvewshZQW4doUpYjph1V1PBgxKEdTV542dDs37i7BeK",
  "key42": "5PAJvbAFZnj8K5yTC4SJaxHiAFSwsGGiQ2vPVzY58PjQB4PBcHM9BaUB7nyS28s4K4Pn6mmBadL3N1pQVBGjhUR6",
  "key43": "5Yz6M3WvU6gxLtSrvx2cgr9u2jssuJC1TAQFRb53FpupMPZNpDHBbVdzff4HSH9awKac7GMru1eDjRvno3Bt3Znp",
  "key44": "mNyTdDZ8YSdaZywLRdP5Cd3u1uEbjad9LRovmfcWhQiQuAwaf9bT3ibibuWSv5osvp6QzzoSMb2wtLhiikF2ZSa",
  "key45": "2a7HYfRPcFZphHgybdfbdx3ub9WvofPQkFwjHrmsQNkFsd4ZcrJk8WK2yfCyCH32EF1SbQG5s2ktGVaCm35Aind",
  "key46": "36xZmmkzyAKpgw3LLMaDvpA8UE7kBHMjeBqNZrQvqiF3kk1ZRfV4F3p8hcMCjEQACFaGHh4DEQQBmstkbDKNAHsz",
  "key47": "2kjaiZPXQsFdt152fdSSvVptSYd1JYE8uaMTBWqbqL4Hb7Cx6k2bcExU9UA8iujCRWCXfqs7vqkGSNCtMKP8VHmx",
  "key48": "2pbejsSYr543RHwGtQ8L74Ma7dLz8CM9UcZzkKpDzgv4n9qSwBRyBKAJcvjxC5PXXYuvDArvWk7PjkDgnz22XAqq",
  "key49": "3xWJ4eAUZGyQHS9qpYa6qcpF98np2MTmFRkfYy29NAxqaKn7iM79NyHKQY8y7vvQZJs4qPrqKXC3b5jYQAWBAmoD"
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
