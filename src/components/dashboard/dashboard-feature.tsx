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
    "2VnobKPYnumLMBr1GfArMaEBhYFV4w3pAbpD3qWqD5bYhpTCvoFPDP48MhvMuWkS1yrEbARsMJQSGmbZ9XTqma7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9E5Cn7RX4RHtFwAgoWM1a1UYzphs3MB7QEyZv3VfbiHobTQ8FvgJq1AqBEPyYUzSkgAxAfa5WxfM1CWXohyDRW",
  "key1": "29dnXJc5ZuqEC53GhrYymerXZTMbnJjYirYse7fti5rJ4pbGLFnsGrx6SPD6Wc3u1a5Gcg94shsoHHWq1bYUWKWD",
  "key2": "27vDBpR6h1wpBSph1q13TfZGdiTB9tvBpGazoiVmnz7goZwZa1w6vk7PEPYeRJkraDEBAp9jN1EsQTSK9TZrpG8p",
  "key3": "4buV7gBcgWzkixTSmpupw4P5vRf2ebk2E2U5mBHYYNhrkRufAqY8o7h9VLCj7AERG3dTbfm8RrE7mmwdioXB6X31",
  "key4": "97xD3HoMn8QqC2DKzEzPQYANqcfyB4j1Q6f7eS1huedWJXLyDxw9ddpbD4FGY2Zz4JziycoEUCaJ2ZnmaTawjWA",
  "key5": "tRid9Uk1yYm62CPe7NeHZd65949Xa9yPY5HxeKK2eXunw2QEmMEp2PGPYscFiUH4tpCypabGCB5cqqsDBofZpk8",
  "key6": "25AUUK1yxUL77Kxq8j1tsBfEHPawe2V6ESYum4fdef1zoAHCESZ3VXG6z8eBF4j2ZjCTsdeCmEvJY7eTyGnvaG4y",
  "key7": "3wpNgkA2WVaweZcMTbp6dP5WpkAjCgEu5W8XKXL4NdrKTtbJrM1iTgAZRdJzkEUYGAzZTxHwrQdmFyqpLKM2CwYc",
  "key8": "4F87rimw7Q4YCjkjLbhN9LRazmPA9GqDpNtFDjtqLfrnKmQQYNh9vB2ZWufqUFm812VXzahQkkY51hnb8xNuow2W",
  "key9": "3c4EZp5pX64ejTVdb9Y54VyoCYjxAu7KJVCA8kooZtHdfSPVNbJ5rqRxTgpArhEHiKhZ23GkjVg4fcpH1WKJxfNE",
  "key10": "3WwLdprpR192YCvmixynVvnkuVbjiGCFPvVFgByc9ZDZyEvac2xa3bejf17aG9SCK8zrwwTPSup43y9z8wJzCZWE",
  "key11": "4KNjxiS5uDsPK7F8jg7gZb82ZeZLSqFXx9wCD7BZ13bu7LdPFhvJiaFrEFbb1Hg3raRPjmL3CqYrAS1r3267bnjy",
  "key12": "2uuQKNNTJdj5rW4xi2ZbQd2mGYVuyod7Jto6s6SbuEs8K2aivCciXVbzTRBnReM3YdRP7MpGTfDxfsZrtdV9pLmx",
  "key13": "UtoAdgsjt9tZGvokKqh3BkdYmtnKBr2mkLiVHcF7XpVjhEmpCRaeHMAfXdEqCUPbeuhuRhFRfHDzvF8GYjzrtsL",
  "key14": "3A9dW2q6vWwpWrQpHHHok6SNzmqVnffrVeQCJrPTsfAksDNVYdoN8JJYpSazVvrMXZdWT7KxLaWqwEgafCdN5xNx",
  "key15": "5i3gcxChqZMZzuM4gfs2Pqspo8NE56QCn2YEZAtY4J6NDgRND5xvogPQLwPXtrvhYijUGPm29TuGCkdh88jaPesi",
  "key16": "566J3GaArLoqQh6RGFkK3JK45wL3WUnnadDqYXT97E514i4GHTR2DdTspmSBhfqC9CDJuSfrfo1YWPddtx2BYD8",
  "key17": "Bbwu4uvQFaH1Ti64JST2KbufjqZc9bhuvvi4CJ6GVGnJpvvuHX3wNE5M5KntvVguAFSDUJTx83c7qKaP9V7B6dk",
  "key18": "4HuE9oG7GEmUM6W3o41H5PH1ULTfmAfcJuX2eQgz5uaVAWoGwbZJmt5uskLc3DfjoB8JdH87GzryovL4iv4cK3A",
  "key19": "LRpwFnPvmfaoCBZRBMPwDbhUi7ec3swCvrnTrK2aGgJH1rvBtSRYiV1PoeBMzcecvHprGyn8wex5Tk1j2hEygY1",
  "key20": "wAwBXRyir5D6KURKLpDmgrr8SzT51bL19cVQqqm8KzpQdsJZspUqDLQaRukAuAFxscHYmyXden2c1NgkZdhFSni",
  "key21": "3FTCLaSTnUdDNTpsNCEycKCwTTMnuiZ6cy128fHhre86hfHh8fV3gLZEbvDBvhVUaM2eSPadH1xtCzDRvsTbUBpk",
  "key22": "FLM86wrh2eFELb3mKp5p2Rxpwr7rdQBkJ4dHKC5xLyX1jQi74M1eaCWUK9QYBzj1nY22WNFjAFFApyBJd36VwE6",
  "key23": "26tsTKZpJcbgR1J1o1yhBvbTvqRkCghoL5Gu9RpUcoTxcZDYMY1GiAQZe6X7qBnBcbMc2qwQDRvpntHqTuhLUM9U",
  "key24": "5sMe9kbN8aRxTRNCDyjmuJt2fPzEoT37HkJnBKor2gnW3uozrugi2pM5THXrPRFyGdDyxVyq7bpeqFm2KxKnvTq1",
  "key25": "bbAHwNH4ud9scA4Yazes1cgLvuzKz3vJopxsGgph3UbggjXoVjppFQTTzxHK2csrND6LSKK6TqsumLCCDfrdwg7",
  "key26": "3qC5MDYK7YVsBAZdTugJFcKQtQ1RqmenmroCJ54WQAJinMwpfJPk1g6mXqs12mzcLy2AHp64sMm5rj8zNzKc3rPi",
  "key27": "2nFi2cqeRqCN5MYbpYbdsH7XUTZy4eXdpcoPJUvnab3ETW1AV65KA2KuVBp9bFAQeVEMzaNTfyhsoHgvcGiJxJSP",
  "key28": "9VKPxRk7C1eVzW9EPxZJexnvux7KuGfgbbY4Dt3qDhmQEcp7bjnYAZpgqVgqRAuMTox8YBa8E37JfpDDrvikRNB",
  "key29": "4ZgJ38SR5VKnZ83p9gqLcEdWXNjcdZEWpjv925q31xpzbHWsWvLpgFCn213HTU9SGHsM99FsnNXBwjAA5vqWC7KG",
  "key30": "uHdvxjBpH7w1ofZArMfza9nj7DbPjjPRbjUkYTpKbSqymD6baTZZcfa6uQK1RHwfg4VdRLCPELeEivo8JqGYbMK",
  "key31": "5seWK5jhrPmfap2z8K5xPpmUAYtCzhUwK5EPjAsTLB3uVqmZ13UUm13qsCmhqWFLKNUkTgVHjF3S68zeWnDM2DM",
  "key32": "2jQC8fotXghPrbmN4YpyUV91ZAwi7qH8rf1BYmGgzsgrx1SAryMVbXA4bPEaVWkBNE4mUxWZJyFH3Wbvx4YJd79W",
  "key33": "3FUEehP1vuFRBk7rhAvCi1CUiTLGanCyZx1crVFjJEfWYbvoNDZhMhfEhWmxgDMY7VhNWfaZUr9UAooefrtVytTB",
  "key34": "3S4ZUGEf2trWhV5emTrUxUc6ZBmoYBgRjmYpRi5zCTv5pTWY9HMY9A6TYj7eMWXf6e6RkeSzXakeCqmx28vBuKm5",
  "key35": "2MMWJtg2cQYczBQWKYk7G5Z8sCtifBLZxQyAnAZKUYX1YHMuDbQWQXkifK9rdUgskrys2FquMZw8jfGoZo5ca98d",
  "key36": "3H8BvHGqSsbMKB338EaJJwUfEUU1rJ5xaPjz7g8ThqSvKbTr9wR9EPxsurV6cKWKYs588RhpGnKmXpWyRwyHo14j",
  "key37": "3HxLXVNCR7jkttJPC3fRa4JH6NYAs8bWrGTN873jqmi3oFrZfKo6ZWJf11Y8kBueBZe67R6BfrqTXyTxv88XLMZP",
  "key38": "HhoBzqqpHhxwVCME8TjyRgvgNXzJqs8PYa2n1yQ17EdS59ThGUm1jEn3g8vaUE6kxBU16RntQ7oFiVzMd26nN84",
  "key39": "4rhweWjMr1tQTL44Kj8ccoTWtmMnbqj35ZWafT5FWAiznJM7niHehcWdSfxmMh9fXQUVGezmucqfZ3X2f8F39FoH"
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
