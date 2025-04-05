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
    "3VExEWd97pEneHtjFp78oevHrQgnb5C9R7BUm9wG1QpWJ6WGj3Qz199QzHGytqFJT7M9pmgpp3FhckBtGnuFw26u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gQLEcEgRJN1naU9Y5XQrTnzTYbKUiaSs7q4uToMdEZnuyygKM8ynRmk5eoXNkuCot5Lft8hBk48LwYsmNLGRrfL",
  "key1": "2sun11fX2cJpAaifLJQJE3GTsuo7yMjCj5QMuHMTUoNmUgaBj31pBLyq2qWz79KyJediGNEQWZw4KPY9BKU3tkFK",
  "key2": "3RrdWVzsM1Tfdv562QjuhxHT9oyjQt6Pyjx3hoy3wHRz4fpQW7fgtzHAvdkzBhbzTEWqGkvwz7Zjc2dH7nPAYkth",
  "key3": "5toAt74cgqWe5FCfAEnEaxtVPi1qKdgp1WsMjTSoiLEHAHBKhoShfH6VUzssLGDAULrX4JLP28Y8158zA8tmB6ht",
  "key4": "3wPjA8k3oNVcCFYfnxuEUMSfCZUb7mvNeKVdhLZbThpd5WJPi4htxcQAm3PbvDXvUcUGBX5Cs6Z5zXG1Uepd4beV",
  "key5": "1muSsNQxsno841qMbXvKyAQGzab9m1whxRwxpRCj5LbdfuAsCbvjeMZRBWWvMfQrHSgRacYiCAufjusFQTFpkfJ",
  "key6": "dZNgkVdp46h3LFBhjSWCqoW63fjkAwt8BrF3UnUY1KaMdjiiUBWxtiCLP9yZDzjTwwn96dFpswsD5YSuEqnwqn4",
  "key7": "2vtsHH5B1Fa6RSnffk17dGK6FZZQyFiyxu3c1Wc935iGtBxP3kxekLFtFTVjqhGzrwsrNBPPj9Kv7qGgHmnTcwwg",
  "key8": "2n7nQsr7BuTgU8162p739PkBwECzEGwpav7c3TDar3RDMi8CuTJExUj3DpR6JYqZhYi8isDTJwXCBPeSogfWiMWM",
  "key9": "67bxq7ptWrkCGPXvq6sRfFwXzt2jqiKhaRaEY4RDKEwBjVjrFe7pBeT2BZAkwBJWoPddhhpbfBPhoaiiNAHiFwJy",
  "key10": "2wSzdZdMrComqBB8ryNd7X39mGrQjZuKkF1BUZgqAiEaGA83eS6v2R4PZn3cicsmtUgAjXaXgHBHstQuYxwd8cBA",
  "key11": "2PYcLAvCmYQHxQ2WjvbER7iFM1pFsY4oqCzozpsnhLwgf3GeYqDkXbdDv1m1ALJ3afW6SZ1uutCU6ewRVcBJJ6ye",
  "key12": "4MGWYLnZCsazRhY15MW89kxXkCcY2p3izF1AqtnyEjMGMo6SRtFPXDRa96Hhx7cxjA85FKJNdkT8QRh67YHWZmVV",
  "key13": "4hAiGL5sNzJcLZipeQ5vVhtcKwmMUPijxVr6ikQtq2EFPyu8hGmq38wJJX2iuPYYRrnagUefxFkAG52644KBFvV3",
  "key14": "38Mv7yLEK1J7REPFRixtPWaDDJzFE9LAGvLQtyhwhdTWNt23tTCSYeSoMNz8gJovS4NCrM3K1Rs2tYhbFtPX5FKP",
  "key15": "2oe41MXqsQnQ3NxxMzGY21UDRtezMp7PcTmgEPfZW7GGHjugbh4xY6yWG3xLPZriGswtTvh5QyL5Z2GvgaQUJrgS",
  "key16": "o6eBi4LHobznyuTaHkUYFXMCZc1Sz7VpM9HaYCTFySmpQUyo5nvFR5jQWC2U4xNXz5X1UKGHLaN4GXcuM9YnUJs",
  "key17": "3w8a3SA7zQd3SzxVoQ9XJnAGZJj7XdAVg5T7BFLntbtsgwhRkCLmXz6QNpkLzqhkF4324Tr1EGYhAFE9i3tTod9S",
  "key18": "naeH2Po3RHLDb73LWwfRCACh2PTqAAcE6THYg7T721XQv17hwTf2scQGXEQjTmts7JdQ8hrtbfdTjiBVCfiWTiE",
  "key19": "63rwMUQQtHsWCeUnFtqLM7eBBDBHRsqQUooyUAB7xDrqzs57QpbAm5UxL3JRwDQ1AdFfLLUzN7PRFiSUSk8eTVLT",
  "key20": "3aFXrRLxSunjwNdDrZuGoQHV9ZWKkmDWAZrCwpgMLy7PfoWWVN1xLi6uMSUhGGvLzeocz7QVNL2mbCvimL9jRRJG",
  "key21": "5i7f3xmAp93BhS7ScBqjw3BC66GdTpQFV587Uv4N4RVFgepuFe1JJHBehKTeW4RUDcw8vBG5CxiDq79HHb8qbQkg",
  "key22": "2GzKFcJut4gq4wDSP7T3J9oQVaJwGY7gXx8t9eC3eNCbQ4EStwTnWndy1eBJQ2A3ZYuDCXmskNCVUab2n14UmWpe",
  "key23": "4bGRXy9tvmAV6SnJYFh67ga6NiDFwbkniz55BpnJAVYequHiR84WyjN8V4CUkUK1NkLzjsqwkG1FkK5mssehJF12",
  "key24": "3XN5rN8TqJrNzPABXAS2GoDB5VAvQW9Co3SUDsPzZ4EgMUakpJHkDwVCcy94epzJgUNmDivpjzsDp2Zg9NVZ1MB9",
  "key25": "iK9rCWThL5keSvfSw7KFankggVZSzCxgA3fXU1aPbrtfvv9aPWdrqaVHBPigkTzcdwkroaep4voPn4TGjRuTuib",
  "key26": "Ec5RyNVmJcr8czYGjSqQ2BJoSvVvtNZJ497iC7hZXJu6jZwv5yUD1cFXK7BoUciFgn4uGUmhzNmffibKP7UbVNt",
  "key27": "4WBadiHZjj1kqBupZrFQzYtextLVuMZczYNvtEkD7DQTEsr59TTcWL49MTvUpEoG5wZt5GegtzZorHTCC36eDHzQ",
  "key28": "Tffys4cmH2vNfZJVqtWUvPenrz6QCsiFbHf3Ve2kBtehoDN7tkHaJjGrcnedZJXPNg7jztbEzGRNj2HXm186NLc",
  "key29": "3NoFpPyggb86GzwtL48NcNpBWTjvDHwmiZ3vAaSZyMwZYsYVMQQiuaQXWDrTg44cvwBmJLvwAGm5mZMjVin2YHC7",
  "key30": "2X32zhCVzwW5xKRggpG3ewaruvfbdj71Kb72aLy8syuTBRegrR2KGXtimfTLSw4EcJb7UjHSWJdGgj5twfqtCrBo",
  "key31": "5s9i47qZvNg9Wwmfke4W15hPkXeAVpyNUQAfSDSF9j55vnDRmhhujZT7xWkTqbtQqx7ngR6d8ueY6caBeLpP7PFg",
  "key32": "5PpLZ36vUTMdMfGLwLkH7XVBiBgjsXzT9YoB56Qmjuvy7sLdFLwkUhZ9kxmKSYqvBjPDZ9C9PBkCXcReBsv4chyg",
  "key33": "3LT9QYt3YWgnzfWamFDgZFUMjTHnSJ1HctsWn8Bx5Q3NSKTCzB9SXJgaKZ3r9mkQ3DqdNBdR5qSFU3JyF2can7u5",
  "key34": "4eg3e7jWkNgVWLJHS3KrHfZy74RdHExS7LWAKoWi2jwoLmz3WVMXDkRSw2aeqqKgZ4g1v5VH6DGn18a9vAtpBRvi",
  "key35": "idEheEV9Hh1CahqNh7gFLPUbYZd7io1dBWxouUN9aTaqopfWzWBKyabKgZd92xeVM8a1Tisd8tvQjtGfuceUFuC",
  "key36": "5QJitho4EZNSRz72NZps6GqKKbdYHyt2fArbmRzteD5N38sR9dshbWBh9UcDuD34c46LpcShDTKBaFLFpu7gZrUV",
  "key37": "2pHbuXJzquVUjZ9y6i78T2MkfAdWLbNVLZEXaSXT1tWWUnA7k3vinQKANbLnLXmjUReb2pPQq5bTcodYzncpds1u",
  "key38": "5n3JXPNoctKNAphbhkurPqpVkLcVj5wRV99oNjZVM6FFxGub3M7zE7TrP3opdCEWDuPzELGsyFXWCeS1AwYaCaPK",
  "key39": "4AYzRNNZPF9jvWgDAfzmQgnYr7wQDxWkE7tnW8bx2FRMzDcNjSd5yH7MpkJaqGwoKZ4m3YAk7TwpyB1mcGyRCpYd",
  "key40": "3jQnXtjXDsc7zR8qZ4DTkTyh3LRFtLRov1DYQEVrwDgg6oU5GUEFgVWpL2nrhVbVqUZgmUnEspARFMkGD8iT6WEZ",
  "key41": "nDq1Wm894gmMxNHRK1ZQx2pCNJqGJe1nwHxKCbzbnPb7EpKtnvE63qy8uFwSDMUbo2Yi6VDDxcArUvv4CvG8iSM",
  "key42": "2nhqSpdkwfg4BbwmNdnxEbiyT3uEbd5edfAyvHCoUrc1wMXWktVVZZjfjE584NQ6wgUaE2Qi4uyUz7XQeMptmErv",
  "key43": "4yCrkswTcA2Huyd59esCd9snjZqeg7uMaFevDWdmhKuM4q96crA7HfrqFdhbkUM8kVd1NUF4ocBDQpXAgsnXzoAm",
  "key44": "2mwLtDyE84GunJ6ovFd149xhT1CVNaa8caPFA6B4F3NLWkCHrtbx4GaQut5pkQ4MUMJFDDH3eEsWLkyXmp9YgRxg",
  "key45": "2fbQnWMGy4ancSWa5LZ19B5pA1LP3oVBQM36i5GU3jwYNUt8Cbsw6kBb5yMQKn1Lf8WzrinH3Uk6YPhZuW1D3kfu",
  "key46": "67Uj3wkmdqchgKJ6N7vxuo5rZ1ibwnhZV3hDWNvyhsHJdydJXvd9MEXRHvWGZfvSgP3fCrkEf6wqyy9L18r4r5Pa",
  "key47": "4Ko6EmurauERmEuZFEEBe6MSdKPTdG7DhJvYkX3i72QGFtgVExKuAPevFqHKc4zegUBtNP8hn8VfKE62bbiaBo8e",
  "key48": "434dT6LHQ6jeXmNL9sibpFVrd84r1J5WMUQM9v1RD6QKJEYyEYxBdNFHoxibarc4HiACYPsRyspygtVQofCZQBWS",
  "key49": "sUb7DsHrqLT6pZYkwZLcx6LwxmHUgAPVD1KHjHxPu3zgqjBxiVJEeksgqwvRSpWRW4Hnxm1LVtnixtYJ4KvQ7GG"
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
