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
    "2D4FnoH5G4kw9noqHVsczJVaKwsdEYSqUQT6ysuLAnfScZYxwGgLURNPnHQT3u8XU2sJgkoyCkRFzr64a8xoHeXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hNYbaGSXgS4UTs87WetXeKZExaXcwLyB5L5iKWmMiRu9rbGJ1qfKixM8KZVNabhybHjRi1Vnkz4JtDk37yEefrX",
  "key1": "54rMTTkMDYaKwgxjoppH6bk47VRq4WYn5FedHcQtDYV6MTFYHRoW51DaUBuoWyy37diqFNHdGgFu7hA6YyXQTiZT",
  "key2": "5eS9p9hDgm8D9S1V2hvWuNKx2pZjEiXvqFPjVwQHPz3weuR4kFjSFPeuD8ZsFybaZ6Caz395gGh2MdT2jXrxaRrc",
  "key3": "4G88GadKg8nptF449rqQJfVCarWE6xPHNDMJXdtaB7F2d7btFjEYx7zfNpD2sAXNXuYp29h2Qzpqtqu7k4crt2AH",
  "key4": "4S9gYxyPPKV8aQ8mjVM5a3HmosJE2rDqLrNjwJBonYfs4kqN794w4DDB4NUkCCQKvfu6721ThQrnoWFKNGhRQ1Zj",
  "key5": "gwPEVPAx7FTrF94szo4tKa7heyZUnET9mMJgTijrMibxQokuVrx1c6hjgzxxTRgz4X8yAVnL3P2AAf2Gn2NnEy4",
  "key6": "4yjaMs3HazkHCWihUArbZdRWbSXhMdFS5AVBwPmeLMu33quFqrmELzPQXJXcNtoJtgUHLwbuHu368EsiJewkW71v",
  "key7": "4P8ruE7bZwCGabPwDt3K4mrni3TLxKU51rRimHC5xbwTqSCXt8aqShTrxPpVR8zxAVyHGNjzcDW4BqFBN76vf9JE",
  "key8": "2mjwCDXtpZzi5DYGKDdREv5WCKDiU5CTSaU1rPwMHnbbzBjz3wedtMETgRRNj4UNtEvjbPBYd5xEHsiUsUhjRSs6",
  "key9": "vhDbK7wMzMyHWWGyWHo8A345x9wbf4NSynFU6weXJGF5sm74GUK3R6S51WzN9oyfZiduByj3i2xCMTHHqm9oxvC",
  "key10": "o2QwxyBJhjMxuRrmwGkJfm1mVNXbW7MDNtDyHwUYBSVNQReb3nrikFS7Jj5jwSwU51RrMYAtXwaFJQxHNjZvzVX",
  "key11": "2SYtBqH2DZeX9S4YAap683ve7yy9gER9LJ4UAhggbyzxtauqU5J7MiJPpRNrfD8g36U23KcJSkL2jKLbCp4hYNQ7",
  "key12": "4tYHRwJQdFw5xXNqWsaGV1U8BguJczMQhmnAKVrJ5tJi3XJJ8uUxYkXLEC1FY4R4XttWfosVHXxVgethcRMrxids",
  "key13": "3ozVvf7jarTNFaUPC7iAsDgL6Ar4wppRkebjsDpjEdEdh7MsSe4f429LuLBKFTanLckgXhtHSY32s2UbqC2metCX",
  "key14": "3Q1j5uwS6Zc2MZttFq4cbS53o6euN92QAK2cL3vPBbqmpgAhgmDytdguuX1Fi3Rgm1qkpqaCbAGJ7oTutZ6LP2t2",
  "key15": "4514eXU3PvVwLrvRdHddocX45S1FNUN7n4sQtSDM1psSZCvLg7MExZN1btxx1MuJzCNqQ1FmSoVd2XA3BmCaGi35",
  "key16": "3E82MjhNf3bbA8pjtLVkGo6tMKy74rnBGwqE16mL6UcpsaNMqoLyTE9mx1K4o94AAjhnnkYYYhXRERzQ24WS3xjx",
  "key17": "osrhhafP9pGVVLcxNvbLvSHJb2gbhxzxrBzmLFSEFSDhbHr5d1JrDL9fFjgkKnttvWDVoYvTTZMcVZ5YCuEeToT",
  "key18": "5fq6RZX4MjeXBANRAR777ct9NAXM97JRggbvbmNN8AtYMxzmAMVxDvwyTEwVFS4z9wwFfjqPp8tU7h1LAtddLE9V",
  "key19": "5GEA4tfb3MAVrcK54PoRwgmkVj5AUqz8hYhPViJR7gy9zfVuxoJazNaAtwv7Ft4Pe2N3CYFvbnKnpFNrKTqSGRLL",
  "key20": "4LDWT3sJqRMeAwyA5Jvy1yLLBwGnxp5rtGRcZLam9hNhnQRW9qY2KwyTbgaEFJE7AuRDFhcnCfsJJduUKxfkhhza",
  "key21": "3gsxfmHS64ADQMvEVJzuFif7GvLeX6tJhTJMVTdDUkAyDs9TqKEysWEP1PkCZQrp8bJMaiKWWwUr95Cvq1Qa1W2k",
  "key22": "2zrBZ8EtAFMHB92RHmXH4pTwMggKRGjfxDUrRcvKbgLCCYcUJ8KNK6ZbzwGd4T9fTRmXr3emeZw7W2joo5PRxDNW",
  "key23": "5HqZhTqyNUB7rFLEhXeHrQZEmYuviQ5xWcbP2Ph3DFdDJcnwE2ambW2KDX8dkfGZUBaV7f4FAFVBCJUF3bFQjF8M",
  "key24": "5sGzJM85Qfy92BFuWdM7cKay1kTmR6nwRCuZLQUKfiaCpqKLbvnbZuqnXi1PyNJGxGRmXbzTqTtQV5PPvZvMAV9Q",
  "key25": "2AtLXgGVV73TEMk8VLknroYHNydCTCjkNJAUpwaC2NMWfXE2LjRRRy4NUk5zAoGAhmGgdLoBdA9FzGFLbVC6QqJH"
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
