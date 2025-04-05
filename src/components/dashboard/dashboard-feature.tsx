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
    "45EAtndg1k6WUAjgF9MV6dwbebsEuHwNMsSuCUfS12nxMp5Jz9Kerhtg56hE3LrFENTRybSqkkTp7Xu14iJRk8Qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtfzDLwssDHRHYio7TwQ1FDCJbFvSQb1HUyvmsZd8qzjo6fdZej7LW5VYkWrqjcNrP1xkzFbeBiG4N9VoFzBXU3",
  "key1": "5711uGVgujW8TAVGtt3uf79WQLVwZ24bNpwos61VUaqSNaJRkJgtpYMJ5A9KwViSZ96GR9TuPZBPCWqwQjfEXxGD",
  "key2": "5aELtJnzRZkYBjkVNhSkbCXBFQPFQjvmXDEuGw7kDjhjyjvDBy54mCNGMTpUUD2Z9nebKRx95KvnfqnM6GfyrumG",
  "key3": "54QELvrhvvkaypzDNsYjWn5DUDU4Vauw2UC3MEfKSBEfwLuCCa5kTyrJy8hgo8vKWSm1op4pnJCYZNDf3BgHhDFF",
  "key4": "2eE9Udn8PBhsMfH8fbAwYpanxWrAczX8McqFeDaJqKBoQebN9dcfuRfQVEHbLFA89Zqcy4d5fqWj6tRqQs51pHB4",
  "key5": "3ng8NJuGgkC1U4BhkpEE2yjSeTw9K2BbmmGqjapkoM5xqVwotkgoDMaY7FuXrYdxn6Jvx3kCR86ESjRkduR9QQNK",
  "key6": "3XvS2ck5KBd27a9a1uoheu1w2fq2aPiPBvHvBDBca9oerNoNEC2QZjYQNMSuihn8PwPBnvbHNDrRyKCqaSWxEn7u",
  "key7": "2wM4PnJe7Xf2fsq2nRa1LcxkT7kmCzMg77pX9zqmHS6eLCa4RSTeb71VprmVTGHNdJmjftdCg2Xqk3mVodSGofvF",
  "key8": "4vGqTv5xwDozrJQcq7QeX7bQCupZy45sKrFU3QUCfZZQmmTSUv46J4tYxqZjHrA6uR1G8fxabgFAKpLb1EGmAbd1",
  "key9": "3HkvyS3yTqRSUnQ571fALzhznFuEenK5oMaL6utPrnyrRNTkuUfcTxShPmM1UuEgzdALt5JaizctxjWPF7KGrbxr",
  "key10": "vyyuEyFuhXDpQmrmAcaoJ9NP94wDumvUcfjifAbGR7biMHgp45xHgMqfxWK72iMpibC6vY9ChEy3sktpvgVwmvg",
  "key11": "5cFWwzo4mi6xsmjzcTjM5o4FgRWVKDVnReSF3CRSwWddCJv6pwJVFqtx8JiCVqJD9M9ujDDWCkEHp6nfvzB7qSq8",
  "key12": "3YHR6P3wTL1QhS5Pn5swAeD63EmXqcJiaznerYHVaNaZno92JFWTQoqSP9TVisvm4ewTdSc2PvpyAvfZBqTMyV5w",
  "key13": "jydYnh2iLkyukMb6mSCUt8g33SGqgwMCmkwoR1pgjxZkaicAqjRQnmFArxRAcUjFFP66785fRxP5Smgs6tpmw7Y",
  "key14": "3y8FQT6PnSeuWeqhkESZsgWvCt9Cw6nNT1i5L6XQ5U9fGR1HwpEFftwaoXQuY9xiP8p3kLBGcrMW4ErMchbJ72xY",
  "key15": "3wsweD1ezCwqCSpfHgxqpGGc5g3ifti44H4BmJvpBtqs2MpDcpzKitMfcNGMncrepZi58yz7PJNcsNwhnvfp698a",
  "key16": "3PPnvLsNTxhNCoXGW7zuJDMia9CCsrMXGF7BsYETt8Daq7WF1fFKhZbr12Xj9gaW4dqoA37frZZs1Rix27qZfEf4",
  "key17": "ZBhTaMqFyQtZZcExQa9MMKA9EY1v7VyWtGT7d13AzFdHStm4i55z5Z71QjWbsVjQvSzzCUGofpTEr1kAwDTA7Zc",
  "key18": "5esvccAQ7KpEpj1z7NeqE2tdTbgijLj4hDwWzp8VhLCvhfaKPHu24srPNPmiRhFbvaVqHcoUThG1b3NvAnKUnAc5",
  "key19": "2z4LAkMoJKRpndPsvXhuWk6njCSqWD17eEqy7Mgddp28ZfgPgrR7GSyKDkoivCcgwjf1MoimV35bj1mT9VesNeZn",
  "key20": "4aJFhvMgFetFvsAED9nsR3yuRjXLfkUJqV6x7dYpTVyJGisCrR5DnbJQhJTQC5vm7eRk5tqtpyxD5JETukmgyJVH",
  "key21": "5LKRBXYUdaNo8FA8HwU62TN2YR8RXB3J31XCHrs64mgNztPLUcHJWVFPgQnMexRhyUbiESZ9PHpM6fdLWUdPPkV8",
  "key22": "3aviFsixTUAzNiiHzxjD1YidNSBMBXMQeDXarDFDndNdNaHUL2qUE2PLYY9kw1Kx1pfdQN5KDYExdtKTVMiJ8ehw",
  "key23": "4r2aZUP2KgUcxwEE5eZ352wfr76y3ouuXcxnAmumW1h4XJgyropu7QiHWM29skh7KSKaPtBjDDS1YJ2E3feUHU16",
  "key24": "4V3Tk6HSHayL6Njtg9DRrSBg9VvCs665i5ohexnn2QTQV7YQb6i9QzeJyBn7jwKuhYvRRb9oNgUASNwri5HNUGAw",
  "key25": "3VyQVqsj4cUjA4AaJfnMqFxzAHiyut1m1TyDKBFEpyExwqV9zscCWnWSdn19qrEW49gvDXCTzVhU2P5a129ofSK",
  "key26": "2LChLdKPcpXo6nm9H1TfB4EL7ddYKCct1hLdT5h7z7RmuAngMu2XgHBumBeJ599uhtrqso9ksG8A6DJPymnEZpBW",
  "key27": "5JE348R2YaSkk8ctAovPQnrM7VGYyrF6Qtqguu2QXfivw1wfXitRS8aR1h4uZ3xB9QxniFeRX6kDQXDVxxGBTHKC",
  "key28": "LuMDf8eGYzpo5XVebwuig99fBjgaynooZmNko4Q2aR74GA8zLjCzaGvVToAChS6Poh7YMB5VQZfemMnVTwEGds9",
  "key29": "61TKgvQ4zmpyyyXUff7nusoi4hQSKrHGHXRY6BCVBaDkJrCjFdPnfahZ5Vd9UjiF3Vqtt5FrMwMd4k7BmuVgZt8b",
  "key30": "t3D11UQKqmuYEY6gZuJ1deyDxyXDjjPeZYx1StnXpQWWmh1v9obpoaVLmbWpRebCZ3Pjm85WGYsM1PRjHrSBt7x",
  "key31": "4trhX8UN5R3PFVmX9dCWWzbF4fNg2ckHj8fU2K9aRSHHUVTATQzfXRhH3SSDTB5GZwP6JTewpw3YD3XP6mnoCMTw",
  "key32": "5oUPpSAN3biZUof49f25gZaK3S3KykLePQZENTBp53Ac3pvZg13LaqKijyttCKyVYKefwxMDFXWduaad6yHgb3Hq",
  "key33": "3Es29NTVpqoyMuUcU3Cq53Hwe999ZH5WGr5jgXJ39oRBygr71kDyAynzN1K36Z9VEaw4A1jezt3bM8xdjEjbFpqn"
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
