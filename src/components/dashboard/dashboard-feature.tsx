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
    "3KNhYWLE39myCwKH5oT2y1RQZ91k3c1TsoqRGkxFrwps4NhstoMaaRoNbkWpx8f4eLSbeNSFAnDA3giezBQtcYXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RnuegwsZnUZEVE7XBHQSwSiT6Kha1ZemvqzTpt2Vs7Wnzi1NtGTrJvo5uV3pHy38bjtroztdxv6HkykkUgENvqf",
  "key1": "5raTPKHX6paVoXynkrarUKrVyLYCnCzs1fwbKDYPmgVGW8HoH3qsHcR7hjeFW2ARSNbShKRDMuYcS4kginXL5eg8",
  "key2": "49oM3RqxCtPzZzC9RQnE4T39wMXkoMgcUDPG7tiBqjE7WLSRDu8v2k1y2AcwzKkcbWTvcgZ9JgepEAmt6LuK1o2J",
  "key3": "225Zb1uVz2kwwityrJ7jwJJW7Uofevo5HXGxMcQUMCiQrUGuGJhFCagbXMs3S2mjTSev9qYAXvej2f2kX3NzbwpD",
  "key4": "3uv34hWrtuUd1JRfq7mK2NjHdBmXT58DyCbp7YYrdQaysHTomrKTKhHjDocaA69bFRj6eXKJUE3kNckeUEo8bNA5",
  "key5": "4SyqyidH2PFtdiuP14NucgsqFHdTYu7KvXxTmMuMynUYWaHvphWAp4M8h5Xyto76pTiY4YxC1BtgwiHKraJVL9xW",
  "key6": "3pfJ91y2s8qnan1SQkrkKWM7MLjDB1F7UN82oayuky9rRfsKgpe187RiuexxHAJbc5zze3aa2M6uZntTQe5B9xmi",
  "key7": "3nA9YSTRuJT8eS3mazWaiGxYg3SrNDq2UNKGWFKkJ2qfPNGiy1YBhdbfUX42btd3DUFZwzs1hakUFSuaQCWM1ARK",
  "key8": "5kn24REj6T2o7SZ91nmMQiRj4fDojfrTwiyZiPjRFciU76oZGUgUcWUZzntpvMCPmcRg9zUDQHDXBvxm35dLw62v",
  "key9": "4uegwVtJETJu1LR4p78jRvinsFw6cdMekWdsELXNY37JxLJ14tb1oXv6R9HoQgANRJWPbdujkokBei8EvWhkuH4B",
  "key10": "3yGrWfpqBSZSJLNkd4DkEmkxEKU4EMMyqZ19wEu3yuBPRxXGaaw5p7hWyHQm7tAmHtNz9RcvGw2vJR8H9tewQ2at",
  "key11": "25btcK6Mf67D4w9LzybaE3p2QWYqLijue3SfBWCVpKsfjGgswjk5kBSJzLfRu3e2kWpWdv17sdR973TjTq5jRF23",
  "key12": "2kBVwJN7w2tKydHpkFnGCPE4nWFmPcEkXkYRZVBenjK8AGLkPFwPZEbgnbjbXqB2cYxmqTPuLLoeePi6oz4EDmDL",
  "key13": "mAJkPQqBXmQNcKJDDhN39i9Mrca8RagaMbLB98xSJbB7tsqee9WALnYsZJ4hE6LKkzJRv1oNbD3ckEvzjQVW458",
  "key14": "4f4irdhRAnX2sxmU7EX9AEwxjjP5ZDsw4FqHLA27TuSqPongShy2SnpwQGpj9j1uFkhQ3mFQ79vZYwz63vkhFQ3m",
  "key15": "4FMaEgGHEuKXmie3r3HXae3YJHdGdEjNjHEmQQrETCi6Z5f7qcjidJFd7pSqGaCWijb9bfiWUaKmuQWo9Lwurr1Z",
  "key16": "XpzLX9wcsz1V4MwTMojfxgwPUhZQed7kaJu65pZ2znNHn7jzyCwzt36cZyxydQR82hzQ8wu2ZkZv4rxruFD1oC2",
  "key17": "56V2eyp116RvVESiD1S47p96DrcqpAUGwb5RHRHXkv4o8M2kAce4P7dgviiov3mMCmrQr6iNBVxMemGdvUKEh53Q",
  "key18": "36i58UwkEcvHJgkCDeJPK2aoLW6jYDo88M7sYKeYUHtor4UJuv7tpPtMwvg13XVdoYTPh8J5U48d2yX5s4SYKB8T",
  "key19": "epaW5bUXze2ts988oD26LVprsF4ebuKqWnd74zZB5AzXVuhNXUjnszNj3UZzFjJmreMfLN6H32kM8MbVarqBkXe",
  "key20": "2hhDLTeiS6DtqEDt3nUhqzxCXmjzkWfTsYuCWZrTZ8Y2cmnwcqnfxD14suVUzP1a6ZVbMc9X7JNXPBi5H6GeZvNY",
  "key21": "5ZvGroNRM5euyqZJ3R2eWtt4Jd34KPtaLis6vTQksUqMgbZzwcc7UUBqjkkF8MJ5SfRbjQURqRjATCXuiadHZyNZ",
  "key22": "4CC4T7PF4nzJSzSNi6czpGtcpMAmGziYUJU2t8YvU1gnJtuNz2oa3eN9vjQFXpZTojoFzgbMUA2R1ozUogGGFL5n",
  "key23": "24g9hLTbnHjfifkXro165xAxT8Rn3ZVuZrFog9LJk1KQGTJ3jusY9ABUq4tt6R1RPY5xNr6jAy5YSDAJtEUJiogx",
  "key24": "drCPDfGheb7FFiiQUc51DQYVFxrd6BkmRLQCA2WF2c9ZUWJgQActJ9iiWVnaXJ8REVDSuAAZjNjtSJuiYNcqBBJ",
  "key25": "2c2uqLrg3q4YbQNawT79SjXM3mmn6erGdArdJ89AVkctgKn2mgFWs7BZwbEey72auiVAg5w6h74sFPkJvuXUEVtr",
  "key26": "4YmvF7CCr3pnZdEPBnCG7KVcvvPZ5vReL2B5VhnYw6hfTwNpzHDBVeNvNpTqXsWmAegXVAhW2PPefdEEKmvgmxbi",
  "key27": "XwMqArHG1ss7mCjizCWnrPw9Kk9Xw6fATjX4Mq5Lgssy9izii63zPxTuVcGj3zZkD3yC1YPumrK8USvJ36CugJa",
  "key28": "5gD3JcN4opKdBTWB7insb3t1XFXuGzMfiohbvfBvREXujmxDnqoAMFbDtZ9SeHcAnySvrKdZJsbEtYqHf717oNpz",
  "key29": "3vhsP3c2fwzpyXfvV1inrKyCdAm5DKgWZfu5LPrXtobC3zgE7AmLLYEBoCC4Vu9Hd1L2Aa62J5FoGEcgoeZF2CRb",
  "key30": "5xkUTFybr7GvX79wGGQj9U7tEs4YL5QiwhLQnYguxDKwQX5QCty7akTyPmwvbrUBTZUcFecpErRT4WT2bNhsKBRG"
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
