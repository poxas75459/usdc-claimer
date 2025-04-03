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
    "52aEPJqeRXkPEVGFwKfz23FovFH5ckYxtciRnPWcKABqpDEyhduShcumQFZTRCe2cWy5UkWMkHnLajeh7jk7HNmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54CPXvge3SAUmrUHZ3fb7J1AddDvuXhWZ7w9XfUSenajeGKC3MR5wMeKkYoku9WXfmnBHoXS8TKDAPm4DTcXLsBN",
  "key1": "p7A5i9E43TH5zHdzdRPM5kofAUxJdfMVzzKkEEHTdziAr35fafnrkVqvwB9Z5wR6Jxte41RhEQebrLhsYdRJqvB",
  "key2": "2MpWTzvHprzoVyA9DxKKdFrBBL3KEwy34HXQwtMc1Z93dgoo7rr2PEnPpNJkjxw5FSQmFWxV6nfEtaTg65PmkgKK",
  "key3": "4ajY76bYoGQgkSNvZZDpvW8SWyXuGsyqaNGxbhXSksR1Etre4AHiRJnt2S6vmKs6MMz7P61VyoVjeeKgCzcLRh2k",
  "key4": "4UfSpnyzt2ZbXX4Q8sh9at7arh4mknXZVoxCbrN965ZiTi5j22Tvw8fgpS27ZzwTBKNUQg7LawWGe2hwaSYWUsro",
  "key5": "3u2RogGhay8h37GnT4vBFpx7qABSkhqTzPCeWAS7SZAzYHVXYLTubJZ7LnFQze2r5dSA9yFxPzsJFefDN6nDa273",
  "key6": "57StbosSCsRoywzASCVfuP5QpYwhCDGw18ZpYqovzXwkH8YCVzfdBgGzuwLPzy4Aw26NHCSG6bjsmNpRctn3a5Yn",
  "key7": "3mdnPgEX1tduA6WUkvK4PKdDtVTwkEnD7WNhP9MC13peAW1J9DCRrgy8oSxe5iztmvWT2zamnndj7wActf2wLi5U",
  "key8": "3BoakcwzsXsLQtrtwUinsZdtPBRLqLffbz119JFKqE9s195Wmvq7eujPFptBi3raWEyxFRJoERJYWErkjubgLfTJ",
  "key9": "498jxR4zTtpjvY8gHrrqhNdf6L24EQAgGTsN4gr4QK3TCrLWtEnFomDZNJaduxrygnYWY7K7Td679gMgeHpbDgoL",
  "key10": "eEtUhrc63sMtbckkJPC7abXHdedM2EMjMQeDrggwsTaD9NnRdSfhYWUbD5wpLaAS4rbMH6oYyHaYw3fmp5u7XjP",
  "key11": "3JVLnsG22NWkWarySRDRWv6qAnpzdq4CVnhKByfRsReymFrXyseb4NhH1xT9hqVaNM3vpGehctGpo5yiyQPffLk3",
  "key12": "szRJULJbsh9n5i3iKZcCgDtnSyoFR7u3ygBhqHV2a4hgRE54XV3NBP6qbr7cgQ4fY249dCob3tWtBxGuCg9ceY9",
  "key13": "42GoSHQ8gPTjexTJQ6AUcxKxDQ6RF7fKjfdWhL2wsNdEzWz9dqpcKyGcif3mqZgXQvpzRU6F4s6AhaJNCdPCf28w",
  "key14": "vUHSGDvtDeXrBz7Yc9YrfZjBBAq8Ysmh7SnBHGYFgAKfRi7WJTe2GfR3A1TZ88VwhQMoMcpCHwbPFndyW2hh1LG",
  "key15": "2QdtiBvDv4JdUsa71zuPf66qJbNKDYZXZZcavsvh8G8hZmbS8aTnPvJQQaeSbso4sm2HHXjnrZTknnNf8GgumaTi",
  "key16": "J9XGWmkyxCVJY9FhtqWEnAFqXEByyjgJ4atC3aFvhwEEkUEgtnSH6yhPQaBnDtN63uT4jBGLJ3SZpadYMC1hKMk",
  "key17": "2VDHxsMJqMhH6yaoQ8QqXzyPuroPNDMVZoJyufGQHL2BaQegN3eYxXHXWWw46ETRyDDsB3THj2Y8onfAniqPaUVT",
  "key18": "5u8Pnf4AM53hrDUi61WDmaAsbc7tt7E89mp156HpXPQZpqmmfbda4ytJUk4aEJj2nMUiNMZnk4Y79RbwTTKRf5KB",
  "key19": "4GcKV9dRv3axMXjAzDm2YqEBZaEp7TD18FPh7VHreGGuBRn7gJKy2rjBdXnEnCMp6Xrvq3WJurjqBJTNBn2UQFKW",
  "key20": "3ZFwxT99JexL3otMr4PtLSEPEfb8ZZ1FBDWLmN2ifkR2hJakc24Ci9LAq8sbnzHowyQ1HSagkqhYtSmrufBQKk5b",
  "key21": "5r4n7s454SVsVXWfyqLCqR7uY48ovjvZWa57DBesXzApEcCQZDLZAFqoUnqTXKrhErFRxqRi8Dq35bz3A5ZbF2RZ",
  "key22": "5vJnMGMqbG6mYSv61Uaf3nbssWRxQzJL9rLJA77b95d4zL6YmALiqCNGZzReWmAkEUYZeU6mEchkCvjYwmyjM4Nm",
  "key23": "2K3rzCjVFwHp9wFzyRcxtqzXo3vzEHiTqcYEpzezgDsyrQtNLrW1iUph8UJM2Ee2MKxM3mKHPbBzG1JLUFM8yY8H",
  "key24": "3GzRvXdCCfoh8GyG9FKxtZpPF87Mt6gTpMNubhWQ2vq91bfMhrr1TECCnsmD67iad27KhihSY1L6ZBM4yZXk1dEu",
  "key25": "4uJEML6GDg4XJ9vF2Q14uYpd68KeY1JiJj6ZmhVCXZerwRPUZz12aE2zhiD2ScoJtzmByk2QFkigPCGKaXyWrBxm",
  "key26": "2MvaJ1yRLiBKxxynywuEFCLREnU2B97P6aiuY4Wy7n4yR3d4WQFYZrnYZumQ455twhrCgbgrXXk18EVLDoPj3ECF",
  "key27": "578N8DrYpR744a7cHVHK4tzrCXcCeZp4Pr5BFTC8hbGhqBF5gdKwZjECeu5Yixb3Bg1cEXcQaPMfiDoNSUgK8Vog",
  "key28": "3aSWwwsz2RQb64CNkSGd4pSvcbDFgAACkPKLU9uV3Npx9LuPhTbv1xurof4fiPZCihrWX6YmqyvR5koR4nekuVUu",
  "key29": "3r8ibqB2KvWiRg2S25DAq7Lbj9caF6Brar7nHTRCNihgTg1wqPmUwUeTE52scjFMX3hSc1qDBuPEfDWJNW5ALeks",
  "key30": "4Qe2nNKwYyqkhhcJhfrvq2a8NJzgttV8otHZQqa7Y1LatCZTgt22qi3PmnCEveK3XPekZEn3MnBX7AkmoQ6LMAQF",
  "key31": "3nsVtBr8KRibTEdVfNsmnUBUgFUALoYifuZHM1uurvqoG46e62ynwRTZ6CHREV1nLb5PZUg51dwpuhVh5a3fjYd6",
  "key32": "3wHtCSdiKASvZSTy8oRvzkSpsdUhDwHnGzif1JzUHHwZ3NZVjPJb39CtWwV896JVrfkz5GWDVhszuUF1PfnyF7hq",
  "key33": "47UZ6SKZLXVnamZExd8eU61Mi185HuaFjUc5nyaUPv12QwUjsueDDS1XJz351wiKY4NNxcdNYJJLj4zjrxCqVJxX",
  "key34": "3u4bJ28nhc62WkGy7pLcK9RvN9wPDWP2fTj5jT9JG9VGdU3zxC9mprHUKs4xBNCPqhyAEZsqwC6QUrhZJt8useAj",
  "key35": "27xnws2dorXu8q8XagbcF4qikETntX1pyQtUyVq99oVTM6Ek1qm4okFp3UhjXAYXUCbfRQ5Lb26W1KY4Xv4iBKad",
  "key36": "4ViLHfdUghp6npsSx5BydR78GDbeWte44Szvgx3Hc5QxJEaHNYKCkKkYU76mNKhorvH1DatrD43KnUM5iQScS2uz",
  "key37": "3b3KJNqGzQAn7uzWTDNkCLwoV2HbHEYCzrcN7ahVWsxNcCX1bZUdn3nT5mSCgvaCo8GaEhFtdrJJy8NH7a6nMHfP",
  "key38": "4hZwZw87FafQWpsQ5yG6rThuyeMqbh2LkYZKggAZ19cNoxExxgLFtZdRYM14gSkuQ7HuXY9HaAiScz5fzKkfrZqb",
  "key39": "3ynDvX1DtoD7Nmz15pnhwChN3J4APkkQMdZcPdfUjSQidfC9yL95J9ZrnfW5615gFaJJzREVV48apCWxtrAKW7EF",
  "key40": "2WeQGsXrQVrghzc2EXaYD1iMmorFe8X1XEuudZNgr8cuioVJVTB2EQXdeiW2QiuHtSYaEWDTPXzfdsqWhkdKPR9H",
  "key41": "2uvtHF24xhjWuFYYeqBTkmhpiVUA6SkQRiUc93hmftLWUZcfGjQCNii6jvMsZwpdQZcivhqaBYMfB7h5YX6VybfP",
  "key42": "4chchvTCwxtS3AnkAqvPXCSLabkbqrWuw82MCqYo5f7k6ubRscnFPGv3vDFqzHRnAXRCsviwPKkH3Ek4kUqLJZyn",
  "key43": "29YjgPqUqDnLuoj2F5GpJPDJuionRSd53vnvZ3c75F1n4AJeStUyVvb7sM6hnw8ABpURNWRnyxBKX6ne8Uxp7VG5",
  "key44": "5HNFs3FMEp7uo9JgpDs1cULYUQYKJSxBJxpMBmTGgQjE9cwC5igEEU3xXk3XzxHNdDrFLATVZc6GE3FRnRT1YE4T",
  "key45": "5S6p5TobmawrhnNYeccYRYgNNer1P7UKifEax1v4ZWNgWLHTJGTKHSpAg6AuXb1oWNVb4ZZQeHiHsRV52KTTh5nz",
  "key46": "5DdMK3H7QX4QUHpCYqs5EqhaRnGFNkVoBQ7K5gfKSkG7rDGfqDEvgAwy5AtCEMtiXfw1gbHSVHHiPhFhujfuVKXP",
  "key47": "49V7qKqFtziSot8oWcEtwC89t7UYiFCysxDWqoWkvg4h2YhDNajihYZjMSAF1Gsmo2TakiE2LTcVY6KUj23C5SPs",
  "key48": "2iTnMSQ7NFe9mmRUobinP8XYBppmAFKyjnFZTZAyKMVthH98fbR1tBgbRMdhRUPsQLDeG8uCYRpypGCbv2sJM7zQ",
  "key49": "4R3pLtc5cNqZEXpTUWyVHgfgWNGau6fHMp9iGUbzBLTuQSdCFENU6Aq529TVGsGWNT7eDGyNwZ6AEBygLznfgQyo"
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
