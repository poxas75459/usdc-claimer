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
    "5qzpWEQXKxHgsEczHMBLYpfwLuAEKdumV8bhhKZZC1J2MvurYji3eaSvrxh7WxuNVkpypECpK7wZ2hKtwSuEPfxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fEYTwNryYFwTk3JdC293sb5DXPaMWe24e6RdprWN93M89zU2ck8uKgkDx7234aedc9SQe1yzPnLxkg17diPw562",
  "key1": "2dx7cxnM7iE9fV4BJJjZgphbYj7ZR96buo6vguwNwKsocJc7kwVXKFVfjzN38AmXJ4Zh9LRo8RmoptcVfUe5ZfWn",
  "key2": "5xPgqmwhAJFf6BoNG7PdTpWeAvEEDMjRiJkeATsFEJdPSp1MU8T3Xr4jWsQbDBMpRvpPWvRNhPwLR8dtE6YSJnA5",
  "key3": "4oMBkRtiYrhFzvfFsHhuHRxoGxfuWSuSHkB1Uyeb8ttWY3zu6QgzmdbrGf7iGevLx3stx2ZbZ1sNxeKcT4VM8DXk",
  "key4": "3LDNTqoAK2otX8x1jktRURve2zD6xAqisfVWKnDniR195toA9nHyxjtvy3hdnx6HrWA6K3UuVyGuWXndnS99oTNJ",
  "key5": "4XH4uL5yuochKGUNZKVJDVwef4zGTAtB9F3K6hxsHZUmwjAWabHWCLKmFk1d3sR6eX2aeo4s7Gtv8mqQ7rztTVFf",
  "key6": "5J5fm5ACmFkuJp9MUezNyfbq8nhwoos4Fts1R9Qa29WhAYMD2Uo5L4bZCowLDYQ8jZrhU655G96yUWQqHxXATk6u",
  "key7": "5Lv4FyE418LHpvaHbfrzVFxvV1JtqFCUh9knStSUrEgeDKyRRUfWRf26oVkjxvu8QQbe1qHzi4roA4ey2uB6pveu",
  "key8": "24Tidsa11pBvPcKL6sFfpsf8C3gLrAsWjZpn5ai5rGYxyPzkCBuEgk62CQieL9v9NRk1NpM798bzDiubzkq7Q9ym",
  "key9": "NV9JnsigtMzLWtJicjyZCej7CVD9vUHZnjQe9CruN39caoXHrypGiBptAvmu27sU9XZKrJt1u8LqhEgLB1ATUDe",
  "key10": "3n7VSdvMM8Heyq4pSH48hGw5sKKdDx923PwCP3xcDPWm9o1FGGTdhhEPLD2xQ68KB198Vb6DDL5m1vKGN26bzMQf",
  "key11": "2Zsyt2EiNqihVDohDYZCQwQeh7tess8UcTM4UcfiJKAjiWkXFrC7g3GfXNQKnNyWC1zCertHgziC8HECAHW6u4HG",
  "key12": "BmvWWA7inRZPhCoHf1mQtGifurLS86KbTKr5iTyqnPxFCcQJr25hTykXoKkXPn9jpvbQcKmrF5wkqus7YHNhgBr",
  "key13": "V9RPu4SGG44GFTDLQn5WazYqFDQ2SyU8GnM3YVm8sF3rdkKfuFDvRdtuqxC7c4o9xGZoViwwGYeFvGKGNWoEaPs",
  "key14": "53e3rcZeiNSsteoxiwEJJyzzGK49ni4VsD3fie6PUP4373SwhR3bCZGAJxB94MCiP6T8Mi6orrdc9M3rY2aHqks6",
  "key15": "3RE5cSwNobPygDRsCzK6MmgKceHp59DBp3yDzmtV7f7Hig8hpCpWcDTpHc4fpbr16CVfiCk9nL11eLx5znwb3Ns3",
  "key16": "5JLoounW4XQZzsmdtrty7Ex36VagrLTWzkLRA7f8xZMHJC4BQXRjo6ApSQWrcH2hmEi2hJ9jqhWcvKbR3QE6LwVt",
  "key17": "FCiSK7rbHc6GLLAUVt5Bcu5dpY7d1s1DHCNLfmWnoL1fh81aAKPWeddroQQKHhTNHxavziQHKXmJBjcT1WrLPzh",
  "key18": "xFLuZr5cAtPCZxxnQr8LcSiG3buxWoE9eE83cMdCvou26pufnVV6ZbZsWYui261QwtT84ExPRygskdhBsELckEW",
  "key19": "43rsLurXGgmtLnWiwnAWSLJcKaG9cmidEozphsxCf2tcgHtXSo1Uo5UQpVSpC2ZrH7QoHddrJoMayvSiy4Vzu9wV",
  "key20": "21p9V7qbBKz6fGsC5st63psZBn8fZAkC7q4b8CggZHQuyybYf94rW5CsiT7Ebz9DK1vVYNqBViM5vuZ4rEye8zM5",
  "key21": "3sRJ8Ncp15NEkFf5ipJLGdutWft6kMAVgNr7FNRVjfroNZNVXQB8HiedbL6LcMPjDGbaFsojZQ1kHJLXdvFBXu9R",
  "key22": "2oL8G2ewGd2xcQaTZBnjerHZ5YrUFp5UNq7FxFvLtcLxc2G8qa5EAYXxNo2XinKY5U8xHKykVXF5MK4r4UjgJrzi",
  "key23": "5zwhWJsWiU2CdDKyM28jzzWebyyk3bvUcTNjS2GF5JK1FdnKxo9KDZRhysCXyidQFWkg3hXq2ZYjKWtaLDE8D6a6",
  "key24": "3gXKJtkKLg4kJ8ArMqdjLmN1Z6chU5vnKHzMcyGoUJ5YCqYTNPMXVDVwf6kGi6uzx8GKphFKMpnJgz6XfsJDEjdP",
  "key25": "57LyxkMs19CohkjsKUm1Gq3XqNdE5oQRhnPcWA9icqYTA2Ww6F7U3St53Xo9sJ2DgFmnHoH6wgWed4ksc7EupgfR",
  "key26": "5PtBWgZCaBp1RSa6JWvW7tPFCHfKGnDbTrKZmGSU8ibQHY54fNPrdyBmb86idhAtkP3AyZKJo4qoZK33y6r1aHPw",
  "key27": "3dBXT81AyMJnurbTHmAETgimNNNM4iHX5FiivNQaDrH5tmxmRNVCRMwkiouKvMa3QetNgFPaxndmswz1HopRj6Un",
  "key28": "32xQNXZF1xScyQR7CRG3X6K3CpKdGVn9Q5px3jNtKFu8pMLv2FaPjhWn7E94okKRPbzbnhMJf1VVu36J38RREkS7",
  "key29": "5kXTD1fHJP73MP5agvZET46kpWMXqJsMbEH53qYQ386TCm2MLBw4cyhKj2v4mr4FX8LNfo2wk7LvGS8FRc8mP2Cy",
  "key30": "2PJnGepyJPtagiYSHoHUYabzBPtjpr3DEBAhF4FyvhS3xkCrjdeDGbxccXqrtV15kuZ347dvuzfKSgzuNDYVrx6R"
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
