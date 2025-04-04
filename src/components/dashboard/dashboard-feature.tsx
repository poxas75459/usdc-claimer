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
    "5AaJ2YsrqBhihxf3e6cahGpnMxbYDtdbkv6VwSB8NJ2M3PiNrZaWRM8hbsUEn1F8S19LhgseWBEihbo5nKsN4sha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3roz7cDANdTUo9eyrLELiZ7QFB3pKvLTYNzBN1Gu2NogxBLZ5MHMBbhsqrFsRU26dXDVHZHFeko9WM45TxntLn3b",
  "key1": "4XzpxbPgKdcwLRUyBcKGLczFxpL6fQEfGhQzyFPzXdHFnWtQY6vgiSxJcrVBZYpe3NaWEUaZzUHUfNZPjqbKVaAf",
  "key2": "5ecfwWPvCJ9BNvcP2vPWRPvSJoWAYh6eWLDvzVN2LC82hBoy9aZ9oJj4awn7eRxv4N57BH7GDNVskaTHTNeLrQK1",
  "key3": "5bPj1xHpeXvC7ogz1ABBvpQ3j3FY4G2CC1p78ez3heKUCUi45FEMLkcNs89rL2N2DiFwEVzxBj9Qkid1unMi13FX",
  "key4": "5pnZaeLHXah7u7uPknZdobL7qTUxEVpc9knwrUM6v5YNs2oFhPCwugQcaQBronthwvQatpNQUVKXFi8RyFG5x4jE",
  "key5": "2gssAaZSL3x6eJfAX3CesQChBTDyWrD5vzQkp7q5TJfncgTyU4Sek9D5D8zH5SFVz77K2w9TmvAiUWBpL3zsYLSq",
  "key6": "vdnWC27cJkL8rabbTyDvckZ36DBmq3eWVhUTF5MhAwyrBkE2hjpXF9LMVJEzn3MC85oitGn1gtzsetDkfFntsmh",
  "key7": "5FWk7f8ACaXxzWDvaKKEy9gkbWYWXmzVpM7UQ7sLu7f44hjpPzVSsUisUVxD3eJaVx1mmrAF6XEkwxBzSKv3aG3",
  "key8": "2tEESFrthrKriS2i8pn7RHsxPatxdsu64yACYytGJCfzgXFBXD6nQeRMjaJJW3VUY7M3PxSuLDrinUejS1KSeDFv",
  "key9": "3kJav1JdU9KkuFhGzA6TVsHrwUKWEjVURUKT1CghEDUZuzMt1KBj4eiTLCBSng2YXGD2L1Kcq6K6pMkBr1eagTJJ",
  "key10": "MEc21cBHovPCeYhcwTabJMMXDaUh4R9JaENhPJwrvapk4jEoqx1Sg8tfFdJzbVKt3YguccsZXvWvzco5q66xw86",
  "key11": "4Nhv5sryRPc7As4hzt7RjM3AWEfe3ypHf5TsEAdguDXAkhe5DNuNEAk7cd7uSHUsrNFEXDz5NDUcrmUNUokFWy1n",
  "key12": "4hiENzPnySKkDg9rt61maQ3ewXYNzxcV2PSpVaemSthp5JdiwBArkbVmSBsgot8mEsS7pv4F34qokD1JpBhpwbSe",
  "key13": "4tqbwEfLWzF291di575jtEztsiyzxFB9gA4Gu8oRfPMMPkXYXEBRR9zbKKiqww8oTKrEAQBJqPC5HoMufrvHSVbB",
  "key14": "2hwbP1mAP9gaEed7sTSWEPDgAxC3tN7Y8B87qyFs4HfK66zHbmHBALip9avKgwhTF3ToEangnkJ5iAK67VuNBy96",
  "key15": "5W6A6CjJVt5dkBxJm5TTpYTky1i81acEwrsjQPVjLiHqGRq1QAUxXVqRmniXvvfQFJrHFL1uxfN9qaFGpz2sJNR5",
  "key16": "57V19t8bxHi8e2YqdSW4C9CEVYg4ZYstM2GCi16UmPoiaogXRhws1Z94sYwJjGxRKVaPN6CMxnVDFA6RaZm9ntmH",
  "key17": "54EEDc9FeG4QCPvnj79hwE8kwNkdq7CSKPaoNc79eZGFUX41L3gu1BZw7Ujj221cPQioFBikjv6PSpVCCkdu1bX6",
  "key18": "2fQA2CrnPvQPpzADYecZ14UZDxYEWNoZexhFJbRLXw7kHTTvyU6LVVdXtAL9yMDNFuwUz9reT5shKWy6L2hjpuAQ",
  "key19": "2t5QpMLqTNM9icSa4QTVuzocwYeXjqS3EXYzg2WNBmf1PF7Z4WWFdeca27sp65AeEApzo52PKPgAh7gQtLBD7dy",
  "key20": "5o4qQ7Xt4NQqfydX25imwvUT15BQuhpbhYShjnrVtGj82W7AX1gYfX2BCEwZydsygDGVoyD3cvWepZVQ5TZ9KW4B",
  "key21": "Ju4U41EaNwVXyYCj2gjXJShoVf6QyTEPEshM7kDBzoT9Nzii2GsqXmVJR8LoyNfyD2wPF2cfGWBZECimVSeRQNJ",
  "key22": "5eLhRrg3DsNCMmBesBBa5mbWUUQcwTchUqq9LfQoX1WtMDntn1MH1YF7LEtZDhJYbUAu8oHXHpMyYZN3ArBK4KSr",
  "key23": "2ia6hpJEGhuNwwsQdrUBTwEfvpq8J4zqH1urDx2FtRDWNjq8MprYUcZtZaJJGfjWVEdXQKaGCiRhLE1vEG4WxpEH",
  "key24": "3WXxugjGaLEzPmWSAQn1N3otZYgGw9nq3vEspPuL16cwrqNkdsG8tQWe4fYUFuhdVSUN7XHCei4wR55cY1wJjnjo",
  "key25": "4ZkaTApP5xBTQw8DawvhWsvPdtNSSsENhVnVz5rP8f6E83TgjPbqNnoUEnnT1rNs3juzADZ6kkMeSv1YFy9qLud2",
  "key26": "SmTwGRRKV77krUoMV8Fo6TM97e1TsEFDQhtbS8m8j3QWb2BMLAf6KaSaLDirY2oE9EyBQ8EBXUPfqvVXFTvPcX2",
  "key27": "5apAsbAqDtnjj48J9sM9NGCKZPpP3tLG3tc9CxGVHJEQVkqXSgz2So3X5uMwTeQNzSM6j78tQ1YTdCCEqYvSkRZm",
  "key28": "5caDiQhaMp8zhHPXBudX3YoxabtJkFS6dB5nJKr5CAvZdfypBwhFLV5dQsbqBpgsdDPr7Mv9MJCPXmYUwRsi9GCP",
  "key29": "NTPTKYCCvRYkfPRCz2JtHmQRzE3wPPr4nZyBMux7R13noRnQ8AXSwRnA9e3UCaKe5xSZq2CHfiXmnXNVVvs9QcN",
  "key30": "3Kus1wxWZXxiquXHKtEt9VpiVgUbguqc3Sa862vGtCoPFe399cz2KACforEtjQNBg7K2DiTuFG5huFPouyuaUBtp",
  "key31": "5MYrAi6x1D7d67C4wTgj9AVJgiTrLCsY5neD1dBSE21sJycxGornPNHSjei1hPYmb7nyXYgg5EhPGCCeJ6ogkbg7",
  "key32": "5CJbstfHC7xj2xLBrL9Hh3EMoTd9oKpyTCCUMANMpz8p39mjRdcQpxWPpxsdwPt2iapPsmnXAsEQT47PTKLEvjkr",
  "key33": "66BEQbwT7q7Hg2Znyai744L8zKqqNvb3ZUscPaidKnitQ4a1vypSAQ29nRozNyaLzWfo8D9xpYn8iMQeJErWpSZJ",
  "key34": "Asct1dH1m5HLkcgLsTSKfXte6mv4AXArHmVbGG46xFEBKiqp6w4ZH9LqfxSDm3KupnxCwnRdqzMgyLnpo8CLCYX",
  "key35": "MiTiwzDkTiqk2kma7cZtTiNissyefA87uNSsDnZMXut1JPxBR33vshnuPsmMpyswWYXQncPNbvs5nWcasMntSkV",
  "key36": "2B7jsXtr3cAYBLocgYaRCzb6DXKZLJLsQPrrzEft5n3gwaeHQQqNzqmbR96XP8Eys86x9qc5Gb3jA2EEdrdaGQFr",
  "key37": "42wpBuFUf1xopXfAtR2nA4i5KWv3P48ADmCWrpinWfin3DHuk8YkWmvxEZb1ZLwbS9a6ud3gFoAF6peQNZQ758fu",
  "key38": "tZcL9asn35e4dmaH3FVYq42da7YugcG8zSswvV38r8Pz6zcVfQeNTss1sUaFrmFjKkQ5z5FJ3bcCRr6bnwivY4X",
  "key39": "sN2nzhoEN8nZPjGeq6tWC5FhtjYwnhkFdgTmPn2BxRTs78Ks9idXDp51TmjSQRdsVcfJbCdHGQjayzpCFiHGpEm",
  "key40": "Yms3EhacvDzR84xs4K3LYFkUbVNEZpdU8MM4Df8QXtB5qNYfNSTyqAtUDARgb47BSE6PMuFiLD8KQ1AVXW3tfx7",
  "key41": "4aZ2abtoHDU4uSDTwV7tZBfBPLu4UtpvabVYDSuAF9X466wxFYgZpJ54hSwKcEQLUAzZS4LWh6wDkcxotatcPUX9",
  "key42": "5xN6AXevvFMG8dAKKiTtes2GwCBQqnwYW31Mt9C4avy7x2Ja8AEZrn47VA6acqMMpTqojwhzwPRzGLtuTcWbtmQ1",
  "key43": "e9Ur71ei55S8ohYoKdSnQSHWEjm2KSAuNPCrqatptU9GXFVqc9ihED6FThPAdj3npUGoUNQadXgebEXfQfC9dxp"
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
