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
    "52GqAxE6Zema2JeJCLht1365WTrcafUc4sx7QJTxgM3bgcRPSyZP6h7r5hYgTVYyWE1yRo3LMHDuPoNs6x5qZEnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nf3BvQ262hVWT2it4LzedpDdKALgJ9TWZEV3W9TS1Z7dckh6CZW7kSTS1JB1rptAZSip2xTQ92RHtHesNYs43NU",
  "key1": "58PQ1N3qJqXru48tjJWkSvsKxf8MQ2nXEWKaD2EMLwTFu8PNkCGdThFfojAVteWusKMYctWt6tqwcrCQ7vPsumow",
  "key2": "5uxx4zoFWTUq6gK7y3VGdKD57dv9rMMkWMgLwNbkcn4vhyLvq2LeoQ8nZQpm8YTqBtut8embtqSWpH57AG7neC8g",
  "key3": "kpimYFZBuJ7xgpzQ7tM1ReQ544HRwXmbd1FXZRrdGDaq1GCpoZkg7JPrgF8BYwLnEYBzMhD4XywZgEskC2mJgmV",
  "key4": "3Hf3Vw6Wr7MTaxu5PrWY9cd4NXMSmYLocvHojf9whx6fKxKbPHfNVwhWzrgadv6UuJSU85iDLEngjAx7C8CMu748",
  "key5": "3eYTFmAqew1cG5QGZtfUp4SwBSR4mV6Mwd9ff2X7TYTQWbjLZ1AFbdXSxs73GkMBy81JC1H5tPv2QagZdfm874nd",
  "key6": "63Ud9M7xLYufFYCffxLmFyUWdGcdt9LbGrqTkARGYNXVGh3YhsGyb9y3yoWHV81VogUtdgJXXWeF4zibAdEXcDvE",
  "key7": "PcoMjRMJcT7465nhazwZhX999MSBjP5YVxLzjAG2PhKpnmXgriNiVifiC7XBfQcEvHvfucbhCb1JrT9AQB4pJjS",
  "key8": "5RRaGSAo6YwDmtbSCAzfQPqSgrhBqbpkGA6jzwqe6zvDyHJQBJ7t1Ht5F5exnsqKZ67WzrXjYWg5xaMeXEpwjTAh",
  "key9": "5LLggkj7RJLN5JRCTNDh3q311JqUi5w8dnodnkJysBUbMX48iJwAqmfzu8ZVyN8hb5mSQLitZmpvW8eVSyKq8a7q",
  "key10": "5w9fSAJrNwYzEGmwJSJ1aRL6XX3MGyqJvezTdW9aKrhSeVZ31B4nYPWRRJdM1VnQ3sDE7LUWoFhRqKpfnv7jGTa3",
  "key11": "5qCRek8AdQZqVTh6f3mEaxUFvagCKgsvWDS4ZCZqXoFZhCYytp4UyJ5ySYtafvvmidJyUyybTButFGKGS5MkDoYt",
  "key12": "4SGjnecCpJhUD1aCQEHRyjnqDqWSzkzfAoiavBg9UTFz1dswV5agQuiW7mKeWqHvTP6gWPyyzQZB9WDaeSLL8vjF",
  "key13": "X9ncbxS7RzjP1bGFAquWh9wqx4Ws5r1sDhJMgaimAayVhP9zAQZuhwbw8BWrB1LyvAwc2NaZApbTdvzeHhHnZLq",
  "key14": "2TWy7t5Wbi6ekg67zfnaecmyd1Tz2PpGCs8iuPZBUUcQrJ3HY7ss1onAXbU4WVVFJbEpteQj49LrNdbT1PvpBCZR",
  "key15": "59TbhNBrYzdNWuiGsgdTHakcA35Y8Ky1N82JiEeXPiduiLTiFP9BBhoAtbE5fp7EmqYsgCnizgZbi5ZcwAJFXQXA",
  "key16": "5hZp9DHMQTbBtHCsPpjrDHWSn8FyEfVTfRCMs1Y46WH6gzXoGQ7XbKB5B761eMcDwzxECswihoyRApN5jCYps96x",
  "key17": "5RS1MBWivafyvtjbHrDLWYRP4BX1sSuxbJwwmWs9eTAmNDsyXAiXRN1QUkvPgC3kE6HDRiPw6tufQX7Jx2aCWg4g",
  "key18": "4AbvQRUVnqhSPT3ZbLzwh8EtG4rYNuVZV1N9DRWLvwTCCCDxTpy4G8AfpnoqBY6SjF2oZL5Z9Z5Ne8mH9UanbWAU",
  "key19": "2vsEQBpiywtrn1BBZXY36hhTKUuUJiPd7ixDRe4gcgnnHyWvHxvyMnEKnvgEN71p9YYXSN446qZNYKAxAAM32GDv",
  "key20": "2BDWJJEu8jM5eTwCCvGEkQtWTahxpLpH6WZCfVDzMcmvPGSnUZAoSajvCie2UXxBWHRKUP17daHk6Nwi8tB5GF3k",
  "key21": "4YmjUAXuDqYTzcASYYrtQnJ85zUJiB9VuJGbTE3H893XM4xPV3LDAUq1MRmKNhqL1XRPWfYRTeTJnab734KnMXW3",
  "key22": "4QmmCdSV8m2SR3SGvt9xsvWSsEHnd4BFhkbXMEiWmmUMzj1ZHLvvNLkggPGy2HL24HA2WmfZ9DbMRxZaWf5f7Nkq",
  "key23": "3u92CDdKUzK24GTeVbjAVT2NqoVLoEt6tRvkuecSYVeoybQ33KHewtiz3DPmpMoEAiV7DVJgiiVctQuTKYSMNriT",
  "key24": "3ocWGggwGVLmby1vu8oSCaZGUr7Shhj1H7LdRRbxxkA6RhxRCF5ko8JaZwQT4NY8bKdKpTfrnxYP6C9VKPywL8ob",
  "key25": "5a88f2hkpeXdfaHFHXi12QQCoPp9ZKGTx1KExDyYRxL2CmRFrfBSGzmqB8FFDnTDSt39m7wxxzVVoFd3H1To5Nv2",
  "key26": "vyekhpEqPDgQFCGrrDvD6AmAwfRYPr9hxepTpM8txmSHiecpdjHjp2prHxXtigTVYiuXaN6DmYVd3JEM2RuNqTf",
  "key27": "4qSbSsHcCd8TbLvYFqeKakSt5LCNXEGugRXqXP71pBYWUb8mNvh25dSXmZeKnGhn8dAkjbztEg3GSUGRvvx4gQpa",
  "key28": "2rDNJ4Q8kCnbh8E5ZNDpZZcTj1GLT8L15s6tuRB6VRHrN5jYQ9uYK4HniQDYRU7KG1PgM6TieVP7534WPo6tDNY2",
  "key29": "3BPA8Z4xY5qwDdhMGBwanV7yoQdzRYtBBf38roN8UEzhJfrug1kwfzXzjJhSDhtwe4rjRCmTrcoenJ2uzvkCqTq1",
  "key30": "kNWutJ34SoRE4rqS9uYMVRSyN1nzqxcVMkLRfBSKSttc68kVywGV6yH5KY2LsTeTDEPVpWujGFc5qTrLVQi1GYG",
  "key31": "52skAqBWGkVw5Tdv6iBmiJqw125AMnB8UziszzUQkm3H3i6FE12QPLQzJrZxP1r6oCEBCX8TwJ9VtftCDWLqVLLP",
  "key32": "5C3RMdh7JoprcTHgyWV1qVm3jH5GpMc51pxX1CtWWEy8xqbHRMD5sH97q9JopEVRggGKijreNhU4kt2pDN7Qt5Ri"
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
