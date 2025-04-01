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
    "5JBNSctcSEmiBL4MPbu4fEKJ74DBbvB3F8YwEUocf92Nc8Q4RXE66yyhfb5y88Qdz5upuWaERzS4zJrhpUuCaeNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AGArygsrg3Rp1k9B5v6W17hXwm1p7tJHDazjHZypeYKzkSNYjrFQUcb8LiutMrgH3UKrfkqs4xcQ52QJsZc5jnr",
  "key1": "vX3MkepF2ved5xJyQjEMV9fsBF1i9gnQUYxo54atXBtwhLeDWYfn22WXyU4eeykdvK5tSQEHJyS2y1yuN54GNyy",
  "key2": "4ZLX3fYU4JaqfMEtHaa5rp1dsn8H7DxpXpYn3gLdnANcyrru7JeazsHK1dnTn7gfvY2RELuYHqmQgzYz4wdECXmx",
  "key3": "2Ah2x757LGPmawSmt6TG6XURix4tKkRor8DWPKh9Akq9dZcFW6zehE7UaPuUcv6G5Uyhkix5Dgnwf46DLY6DAssr",
  "key4": "3iNpeUofK3dbiPKCocLiZftahmwP1RYPndt62w9URUecDd8YRwfssJLUCAjPgRRP3xU4PesTrCGpKQry6kNBZdyi",
  "key5": "2KgGD5SKjwGsemXCpiwm6CYjEaKiZTFepKjG7maqAGREAXmC4AiLjgSjyVZqLt34cL43VoEGXk9pUAegTyyxK1LQ",
  "key6": "2KQnJEHQMe3ot5tnYjT4FhiUbFxfT3HyYZ4mSukEVk7oCjNjZDaSqBRTyghdsjywc1djBY85MidVWEJjFx8E5X24",
  "key7": "5JUfJYjC1dTMQf49QNpHncEcTpgw21RVDU735UuqpuSAoaVNEmWJxLSUZ7WJEXKcdxqdboEESUJeGQbnmAZTthi9",
  "key8": "weDEt2fGNrg2675QdokYddH6RWEuEGhBnnBLSEnmBkMQYpEykHQeUNULFVyG6ffh8HFBg9m7Hv7xc6Ague7AmVn",
  "key9": "SkTwvS5arcPaSGdsVch1hvZC9TAiPBJSwGawbG5LBgJLUjvV522Y9Zzwj2GhZWjrTKbrBxUqUo4b6VUqxDLELrf",
  "key10": "3HRzH3KeJVbbFdk2m5XLnuMkwf9bWXCXJvocTTFkGim1QYDgUeFSXd3qtK317kbwydN6RarEZjaEC3Uw4AWcwB6G",
  "key11": "3kqdv4w96pCmiVDygziJJiqf88eRZLajmh5uYDt4ii1NKNUSnzfyJZ5uKps6EZbMeZW42wrnbqNSQSsxTiBm42xE",
  "key12": "48KwSKy4nmwNL4A1tfunwHLjLHmB99kZfb1GVSTWpcw53G1NauA4FFNZprQX9qtiVUkT3VhDx7fT87QQ1iNpt4mU",
  "key13": "21jNbXu88FuFU6zDyLLpAQiuX4h2MH4d8kC2Nvebt1AjdF16qmd6VcLiRFhgSudEeGKjBMoMVHEffCxCFEpm9XKe",
  "key14": "3uhAyc8whMK7N3UTAozj4n1L6sXGnSjxL2eNSeucs1Mfttu2T8WraE1utYVEYUnPXAzALU3zuC4mXMKPCq8NH7XS",
  "key15": "3bXwZBZRneNvDRyeNGaS8hBEaqpmeNsUdbAA2EmsLTakVfu2NVB2Yhh2yTvmWvFe4i8V6a1hwtmo3GqUvsXbSyKE",
  "key16": "4i7qEMxBCKPnmB7TfxQmGPduwLWx4tGfuJgmTabkLnDYzGYBmoRGjxoeLTRsr8HdhVn68ikjhcC4NyNLzrJn1stU",
  "key17": "32nizz1N2Redjpm6NnSvAko2rzaJsLrmC2dfZJXyTiYaWiYdg1HktQf6cHSw9NfxtfbZazWpxf9rcvwCp82QsVTn",
  "key18": "3xEPcQJP3vk1S4UPpN3UNQ1ew7gM1WRW4CxRoLubJfYxwypqSqru4NqdFtqFS1yWBc3fUpfPW7S4odVdjfHMdF3i",
  "key19": "4yJnD11zF3usa5o6y2RptXejV9SxKnyzuceYMvCU2ku4YenacghraoiWTViqd312McuP5L3KM5up4JVTkv9NCc3P",
  "key20": "3KxPaAGTwYwdQhfSj9fASteLuNnSHgx7KsHux5hNB21iCxJ6D6DmX5H4djLC45VxGHLd8bgotAZ9toxwzZom6AnS",
  "key21": "5ZE2tdAQmAH6TnfcjyxzPA6TUkhKEWgkHcfmtPoSojH76dgfNFovoxsdppU4cfcu8TcoFPNZT8hT5bdFfbERHXz8",
  "key22": "5dppWXPhBt9xGWNGoTasNBhiuGgLo7oqySxgFaqPkax8DsPCyBsNNCVv2hP8CVhrPZHorqo6GwiJ8Lxmm6zL3UsV",
  "key23": "3671c7EPu9PXS7JNjseFjCW3M4k63oVR8Bq6XK8uSFcbYk63Zspgzje8itD1Bivk2Tn96SCwx7qpranUDL6j9ovg",
  "key24": "2WgrDHRC4MyzjFQvg8NBbMx92Nmj6wAHkd5BAxg29cnXgks8qZ2T9uxbiyt95BWJSDh3hbVT17zA7RGr7oXTV7x4",
  "key25": "3rUFMrjY4rMwxDVDjWznftBAL3pZKG8t7WMSMuw5AbuvNazM1GMiGPv8no36uWUjh6JXobqpf2s7pRJwAtVbFCkK",
  "key26": "NsPYLsHniunApybuBQyVFZNMeCrkVXfeVWbeB1ziPio9xugWo3aRZcHT3RojveTFgJWHRwQgaPNBf99vx6SP6iz",
  "key27": "5qMaEBkzEvBVoH3ZU6MQoPjGtLymDFqKzzq5r7eanrsF6aVVefyRiwD3KspRX9Xin9a2ofoYYnEaFUs4uu8wTkU2",
  "key28": "5qQPkB2Mr8aKvUua6gnYvYz1mJFfiRxSFTnuh4MmauSrUiymubXMbzQCgqwRTS7hRYTeu62hMrsEL9z9ee5Cr8X7",
  "key29": "3SDqvR4k3t9mX6QWShhDZ74DsPC2EwtcpLK6pMRm37vuZ5W3uqYi5N1PWKgd5YFbtmxmgEj5k3MAepk8dZvBH1bK",
  "key30": "2L7hMFyXBb86zo4dVpd4b1MyxgLjWLaY5AckoAwgKgQX6myq4tEBeMZAHEvVV2zskP8VNoDibPz37S2yuhagLGvT",
  "key31": "55p5bDWGHH4m9eikMr57oKpigsN1qkmqxFkgv2XhqkRkw7fG5brudefcpXbAzqZVo85K6Pj9n7bvs7JE4c9Hn9UT",
  "key32": "oe99FVRN3U4Qp7R6LZ4R2d3hwJePGMTo31WKUb3fDjEVKVdrJYnD8x2bv7QkWeUUBdrR3Ggy6ZhRt6BLFMQbGx8",
  "key33": "tUubRKUEJGn5V9ZKfu8bPgvMnMS2PfmRXzKEVgoc3qh5wyqn5eAnADej4XvfQqGtEcvYXp3LEitpv6gctnw6N5R",
  "key34": "62PdvuYuuKKTYZgq1NZkw6wYUsBjCv15oxYh5WeZBWoFL2CmCY3f4wWQaVRsUr4gdQtKFLdK2WEYGXU7JLsfX55q",
  "key35": "2ViC86hVxLoqD2aSszWAUvx6QgURJXh4NxmoQyUqXGokaNHsjUBYgfcA7ab9ViSjtSithhDMY1JRgXt1UN7eKsDn",
  "key36": "54brVHdTT5hXumnpZLbru9nBJaXtvwJpdaKQQDwoxrYTEzqgKUozqb5qqbsbeeQgyk1tCbkFuinPqMVvbUCMsNmy",
  "key37": "2UEGm1Ni43vnuSxzPexVvNvvNZgkySgzmdHVwvDHx98RYhH5Ep3f1pVh9YonV8HcWagLfkFjoZQScKne83Sm1TYZ",
  "key38": "5QEB26aBrx1maNsEq4hKJxBrqefUjZJs64NqWZ2AFifHDXYEss46XZuw98Gvkk5gKQwdq36kn2hD7BzLeCefAFWD",
  "key39": "YkMpWATLu6rLCV762quJ6fRVEa5PMMSKPY52prQQbQeFxGQZTQHUFy45fCZsb9zrHLJcStFFtAzSU4CMekwfQsv",
  "key40": "Hv9i13E7zqAggzHytT5hxqd94kwkUBf3o33PWoAGveZgg5NcAt23i6fyvPBSZzEBT6zhK1QmJ6NutZKwXAMG1Xj",
  "key41": "3jL7wehZhetucSXb2X56RdfifSvzMziyPrCFsoxemqfdvEKgeEkDFVRhrNbeTs4mVixCew69KZTT9uHpeL4oZfim",
  "key42": "3qwLBCbFuwQksSAocTeu6jfsTTAgwRiV6aDCXnxmRYmJTBQy2BheeH8LSFjygDfk6frBLdv6rsC1kBxU5NUEbxBq",
  "key43": "4UprmVzGm4nDwsDUGh8hew5NwDoEwwTCpTk3Qj7ofpH6mcBqZ3QtRaGTsJcvrvFiuEPz6pjAponG7vfdpDu3Vzq6",
  "key44": "3bQjiuX573S7caG3BRuXb9Dh6vbMgsDbGZxQ22xEesafUrxDHoHjdjAiFcB4UfRwrxk3EqFf8fb9ArRKH3sHFZDk",
  "key45": "25rxQ81kLD5myoVVLb2RvnR93YiBJ2M1ysHweZhSFVNBAGLnE2FYj6HXNMsU9KZxAFiR1fepvCspfgTBmzd2fSLz",
  "key46": "Ho7pfXZ14meckMkKmQLA27jTV8y6oFn1axDjhANTb5CAHAp9BG7rP1vWtKhdzSifNiLj14HyhD6AwqbM7ngZues",
  "key47": "2aEixBcLxdVJjDv5Toou1o1vB9cLCme3wMZmXp78Z2g2yY2DGfwCZ4anEVVRsD7RE5rfLBwZnkbFN8WBZJxnnMAa",
  "key48": "3xMEbXjUtGtwkzzEksbVwyN91urPFA4j7cHxb8SCGhYYu3qSELjobhtfmhfofXRYakq8ALBsmNTd9MfQ4EZsWit5"
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
