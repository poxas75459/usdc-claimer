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
    "5iDDLiDxYqQXdVH9LjHRQ2acruGjuPRppSf9x9GjrzLrg65zHH7EUN3xL4qaXeRh6Wka8yPESkFph2czRnYi7LU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LuWS53cEvFkYdEkp2bfQHXZr8CrV2HLuLN5EURTqQvx2Raf1Rvh4GbpZLv8xGNo3XQ4TRSMJG2vSEQVG2bYzW4P",
  "key1": "57pwpby8DmNhxfwj82JadNbu7dSUnhLJymKejGaM2ERwWnj65vZSc7c994mZjNgcK4e1if13E8SzLQroiuiL7hPx",
  "key2": "p5Qb7aai8ELsAAJUGxcUjofVz6fzmkxJGksyKQBjwcQan8rwshGuhTGu3R8ZjaYiW4BCJDoWjntGgvh8DGKqTMU",
  "key3": "3uFnNEB5nv3yU61j3ipA4sGTVJurBNVaEtc4vvW5e6eDMWNCPeA4D4QUHLtimXSVcyHqBdXDy2nZEousn1TzUwvj",
  "key4": "5d6riUCTVorQUu2yeSem4wLNyE7o1FsVguM2ZrGS3L93KjADrVZcG4VXUEwTirB7GMHW27nFtdoZd6K21Ak8a9VG",
  "key5": "2L9aCnDyiN3VPrZKJe9bRbRMk1yxhem6Rp217gz3JYM3EewQguu36wYW35jvDBkshkbZseqwGT27UTcgfJqbKksM",
  "key6": "4XBbnjHgK5mmyx2pQoLDR45nwuQ5noGUbmPUeN1vGs2WDXF4N3v9jjozuqR6YT5rezpNgwTVprnztTVa5ui54AeD",
  "key7": "cEq7MDxABSyBi3UEM5m9BTa5BnvaqaLLyTswgwSiuYhPyJsfo9vBdvWKBuaLCN3qXWUot5RDMgPoNmpFLkvN6TY",
  "key8": "5tQdfS5AAmk4APPEUYqbCuDgUXffa2i3LLaZC1FxWj3yHkx845k1oA4gwFyMMqQUc7Pn3KqF6uJmoxx9K1Z4H5AR",
  "key9": "knYoyZYGCGkLxWACHdJF14pVCsVkso9i3GBinkXZuHACV8yQeNKaugk3HmGjgtuMFSJEiD7ASfL7WZCABKDp5rv",
  "key10": "3UbvuJUssrNRYYNknQ9a5fHw41fUDAFAyb38osyste3sxRyvjHfQEvAx9c2W1CErzRTWCRnRuaYcFbByNWG1noaD",
  "key11": "creEKzFmnBs4yim5kBghfRx84ZbEDZyTnooQQjzRMUJnZqTwHHL7uKTUqSgi4VEEdAUVosrwGzoPB19EDzFXbjg",
  "key12": "4xBKPrcQwL8ZYQJetovTKqpeofguWYXDjapMbStDR5SKCiFtec6gDv4KzbPwubCrn64xiwzF89kamz2x4LiCzpJN",
  "key13": "35VfL3tfE5kzr9LtGv6wzrdTUVMBvuGzHmb5Ku8JVdQKz3hmkpSqNnK46QKLDYsbVeEvCDJJ8WghgX8JRmKXuG5f",
  "key14": "4P8ZKZYwBoDwec6JgsNifLPqorq4yghYoNL1nnSR8bXuSM54JTk7xEgpiVx25DVwVxdbZqx44JFMCds65tKZ4EKz",
  "key15": "5dkkRjYvAFGjS2wHFss4HJ7ShkMn1rmGhqM2X394ZcvQphz8FPDvrhd4KV6Fyzjnpo4dqCQPfrB1TWrUPykG6GmH",
  "key16": "4ihW13sQiJkw3UoedKDoN2j4dVrAjKeLZpr53hcTUDzQgqEgt2r99byc9MPf8x5sZncYGqhZsbbHD2TVJZWmxPc7",
  "key17": "4erm1A8xSyXpE95SGjTknMBkKo17G8TctMtxQeXY94QGimPCLNVbPdQmDKYnbew49pSdGm2wLpUEWBM2b5ZEkRaM",
  "key18": "5wHL7aAQYR2pGqjiMTHqv17y2MM4iJYLPVRwoM8EqaUUC6s7cqb5DCKve52WvGx5jrTryw4ve616LbQnvQMJePH3",
  "key19": "5NRh2DQgKtvHBCKbfHFU4EAM3okypx8Kh7FnPeXrpgjRA8pUzj9ernSJ3SD8zyd87KkJdpM4ntTabAqRPfjeubaW",
  "key20": "38z1WkDcUWh3Mg8Jo9qsUwrEnUu2heLEwDRd55nQmXEpoDXasBsNiqZLk8AM6Xvmuo5fhBFqQ2fZrcd1gtuQ2kYB",
  "key21": "4oURPtQWPg5dF53veJrod7SavrnUJUhuB7GjL1pkSU2nQtDrd9EALgfhBHqUHR1NpQdDHiuNPJ1mar8WXbTCFnUp",
  "key22": "5PNKTxeemFitaCPyHXA1W3qj2fYxN3n8RSiQvofagRewcgq8QGSdnCdtKXa5nfb3RXGjmrywjrZjSk5CE1iLLEC2",
  "key23": "5Ve4GYCTJZ1Bp4vw5KyrB7u1fSDRujTnFjynb1KhdsNZuFNKWpqMLDp5YiAWrNKi2JYFQrLw9TJddtPGpFjHogWC",
  "key24": "2fXHAgHzqVyat8NLa1b2gS4k7szNTh2pYFdLemQcu4RoQFiy75ggNnny5g6shkDpWZADwVnaj33Eo4BxrmaUVwzY",
  "key25": "3HpYWtLMXBjMEWuHcBpqPD4BV8PHMvmcAnXP65k2eEqVEs3qdPANDwE4YAKhVLtFAtiL6rEU6VDX1Qcrefyz19Bt",
  "key26": "5EmAYW461hY688xF3FEzqufnFcdYHbTP7aR3HeGXuqXQc4X7ZMo2LYtfx4SwFyx6HSjuZgBD5aYLrLMRJs5bDczZ",
  "key27": "31kZE9pgumsaSB68fU23pB3g1jd2kJR9SRW9z2XLDseT8X59D3MkLJY4DbGHYhp2E7M2aWphgmxrq6pKSY9nkiTa",
  "key28": "nwxQnJdUWY2pki5tJLZWhBSd5SJicVbap1Bd5JTKNVkB6jJd3jU9CAY8tfKAvzTtaJu6pBG53TTQqTrGsj85Ssb",
  "key29": "62YpdsndeQDkQbrp6YVWzysptw14kaesVfqdwZD7fFy7VDvLBvfkw9M3iBWrw9nfJicZ6NrFhYBvZrpiAC1aAC81",
  "key30": "2f5StifZtmUhNevZBH6GqXy5ermnQ5mJ6oja5BL7u5v7V8AdrVQTuK4rExMEubHfzmBPSDAkcEvT7Kg8qBLc4tQZ",
  "key31": "2okm7aMfTpZFYTFGiebB5UDfb7EhgsVpEypfd2GPmHTaoqyPMvK7H1nU4MKmCtamSFmyNY5b5V2CAPJ4QF4XE2Ys",
  "key32": "qfhU5xqqfLWMu3p6ssB2AQAu8VARvi9oTfTPNwRymgdAxkQjQ8QnYXo3c6a68BrCHTUYktD8VZxKVd3okyyrdEQ",
  "key33": "5D6v8g611N2Nf8pcFf1nnUAuUp9mBcAjYJwP6DsGh53QzZUF3QRBcD39MRAqGDpg88nXKpbNtpQg2nn8rEcSsiQp",
  "key34": "4MMrEdn884BxmHXihXuJcyFmx4gFPkoN39YnZtHbDxvBJmBQchwFA9cpbotprwyPth63V7wgvTVWoWLjCMVTEatW",
  "key35": "5kkfXhpViG2ei4mBt4dg4P8TC2CuvuKyrSXW49frKKnwqkp3LcPaD8Wrhr9XaJnRwfT62cqReX5oudh262jeab68",
  "key36": "3KqHLTDjFeLn4BwvpsPXhTP8prc5PX9aPTTsqoEHLeN9jkLZHZADBmRB9QLpAiZACiKfP3oficoVvHHVY5snn3FD",
  "key37": "3AjpCKcB4eDa5NcunSFUYxrgrPbcBJMSdn33cs9Us37Cmi1oa1ZWNbs3C9AsHqbEz4sjkPdTpaHLHVuBjexJwZKN",
  "key38": "2o1m5JMbsREvbkwB2jHBUHNZQTwUgeXsKDTyrZzHkA6THwZp5WqX6NbrKbBMDSu9zvD8jYWfB6yPvoM5WNRb5ECu",
  "key39": "5Kxa6ikWjoa9tMVeAePoMY52LaCahSvy4kZhYYBBuSiWq2zevA56kq4bSRkHZGzsEAkM6ejhaqi54PFU323wLGu6",
  "key40": "3MB3FW4rQPaNhkVZvnjAzhyK4GFZcexGhywuQFaDVCureiMFyhPGaavfoX8CZjFSFgqRz9pr4XrhjGTYepNPKX6T",
  "key41": "25sGVy9992GxyK3p6LmbX36mZSuGGq2378L1dSWTzNPWWNaD7VgfMu5BiBX9uV6n15VS5upciF7riqxDvWFmDiBu",
  "key42": "4vyK7reMWJM7ueiNiN2s13rkXzieqJnV3ecHN6jErLXEizLbT9gYdAfGjfAYp4jUcV6Ts5nhZu1cEHM5CJs75JWQ",
  "key43": "4s9xN6NAdcive554fTDP4wqnZzGMev2ngdTZP44QxMREXkRZorw328A1zWMw9Epj9po9RbUU72e9463pnMbrredj",
  "key44": "4YY85gK8KVKMqzgmkQqCzBhXhVz3W5zu317AkazTWYv6swdXNGa5tGPByenB7SqDQ5AFxuEXcHQFDbaM6xizKKH3",
  "key45": "4tjBgRn3zxsqh2VnuJJzYU5j1LkaebNp4nPhsMUYo2Ji1yekPiYB56SuErsMhWWub92soKM2HX6adjowt6k7noyt",
  "key46": "5J5MnPXDMCX6VwPaqrX8AAnfjGWCsBfGQuPhUnkorMw4Frq2fvFLKXwGYi4dL7yeQp4YPofFiirhRhEKXe7zHGPv",
  "key47": "u9e5m4W4yykPLAVqiwuHUjbx2vWzDS9F5uV5RXXrXi9NnFwCTgZJz37SErj1hz871mXCDEtfw47rHqgFW71TVVB"
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
