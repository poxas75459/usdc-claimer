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
    "7oSy281SkdDyTx4uc7bRzsgaPx1EpRmPK6y18SfSNGQDFUGLnqPgdzLtgLJVwXpYvXaHZVJBeLsEtA3rwHsom8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hL874cHVDddXPymqvVyubf6eriEFXihWDgQMj6CxWb2mP715ER3AuscmUnnthmSnT4E1Zotr3Y1F5YSWdvoq9jW",
  "key1": "2g7QF3FjzgR7B4mV2qPwGq6fLCnVRRFkXRw5NDkSXKKWJP7zmC2nmLfsuvQEf3Md6TuTzLCfDWUt7vS4Cqypy6CJ",
  "key2": "2SmkxfZriSuA4uNZqK9rJYD74W5NFixX4xtPbR5BBU3Wi2EzBjkThWFHcfJ5uSWtFhPDCqWkxDS6pqoFL3YoUC5T",
  "key3": "67g4bwQxebgMSajme7uPwuFRCoVJ3mBCfvHVqMnv9PwEvmFfhV2RQWyn6A6JpuSgAuSDrbHFy8fXLeDVFyKi9BAk",
  "key4": "4H5Dv5w1tXwQvb69TwCfVcsXyxhKF2w42PPdFxjisazeknVfu6J3LEFwCYvnVY4qqtiJN2QBqCiqAEYNAcc9uzt1",
  "key5": "388w7sPdoT4vpZ9W94g2WZDsB5kKeRSKFTU73XxtAWq74qQq4SPJEJohfTX1hHsk7YuPs3e53AJHh7kGmwNhvqnB",
  "key6": "z2DUZeQffSdoX89wGbogBHPeV23F9hThZobnxfC8SM5xF6rjSvAWtNTzAqUqRsHQg9jRVgs8sHwGuNyyiSQjp7W",
  "key7": "2mro1y78Y3os3213Sd5mM577fg48M2AgFncogt54HioM3matWPe4sJcQANShu7X9Gt97s6JyBz38m4kgV5kaL7tH",
  "key8": "2FZqhnAedbc2Z62iQpzTUhM3tsHyCAwrwr5ZUY99wBEBJrGSeEpeekFdXWxexbMbkZ7LvKBbsarZPiJMKQmzxHBV",
  "key9": "4Lpkbn8UGTgF9L9VagLjZv84SfVm5xdNNqzsM4QRjCDomTF2MkiKf673mT3BZg7MyryZ1iXU2EZbmMLMExauymw5",
  "key10": "551dhb1jxiGsXjWbY3oL5Uc62Vac4ZoGpsv88N4P5vsDwKcdSsaMVGEpiFC3BJiTsamGXmyH6HSCC2Et1qViarDh",
  "key11": "3ft5TjgvnCyUV7uvjAPaGtE1V3n3mizpf7kw8kFykQjJK2NdxnTH2igbwWX7mgjtoGhbyYvJ32asoDyvgr6m6edQ",
  "key12": "5SYkykiQ5yMDH5oEatfm5PDt5QSiwghcHNA4EMJFxK2sVcveA1f3hAoev3PL91Qs367pdx57ropb5EzcKhUbUDkS",
  "key13": "d6qW4tgGZVdiULDsp3ZV1jdJTMAEXaFMpdS48L1tVkTjwyPcFKo35bhkdJaTSCdcJBe3boyKNVDwfKRUYixo3ux",
  "key14": "5JeWg9ZtCTTMhxy5oNTUQnRU3RFZR43CrpVM4t7equHVr1yLAXfcHuuA8pPgUzYUoXyYgh2u3PTgCrUQ8hCvxLLT",
  "key15": "2p8NGSZKJ74sjyCd98vYQX68TrkEguEiHkQsJyNcL7wKNnFyNqFkWh31sorsZcygaDc9fTwirjf9z5hDYvg98uTr",
  "key16": "4Nt7358yboAQ54QJ7Rj2FTTBSVe33cPEPij4G5w4SGrreyfoCrLNm8cMJLoNg3Sy2T7x8K8tpdYpny7REonMNg6m",
  "key17": "NMqEqoMjV3gYFfBgzH8LXGstBTaVKbZ5fKta21wCoCrzTrSDVLmosftxRVuZow4F3W6o85jTSoAjVRYNbbZ38Y4",
  "key18": "23ZAtyrbFptefmbtNe7rtoGX4tztzSsE4UyYmKHiBSQy55gBuQrfmM5R5JDSGs8DuPPNjzmhTeSaBRY2xdrAtivS",
  "key19": "4JDTs3DVbzwteyoz7ZvBeWpxaCrUDb5KfsvBKsokfmLKq9wkcLLTz9GGY2ecJTDu9rCbQQVPdLZce8jkLeEBGwSF",
  "key20": "5Mrs4FRHQNGnv5SR9vNGLajN3hzr98MEWNcwr4Gqhnq58pLj32YtqHPmZSxX2zER3KBe86AG55t9fGC3pgdvxu4k",
  "key21": "2mAeh2Whp7NpmPAzA8Ut7Z6yR3aWoXJedjBQz8UKk7W1hHGFHoKMHZiaHREkYg5HbKQHGg3ows2hjZGPeQqQzHPu",
  "key22": "64WnV72kFXPWoVy62Sa4gJZwEhnDggBTPRKQsUXrQoARaYeFGngikA4EcdKZAiSLFMzQMMdtoAZG8s78uLqxrNpx",
  "key23": "24oTG2DzMnVu7Dqqsu5Z8VQwsUK4qNdANjx6YCqZpFPqdZ55LGzemSZQKJuYJ4x3ZP5S8c9gYxHXhieabx7BAHBg",
  "key24": "YFyxzvmSZs4K1CmBf3nTsStPSqxTtrKRbkfvLf97ioUedHfjTDThx9wdfptCjHoSn7aH8qEbTSvgBKe7c9ArkF9",
  "key25": "38bDHygGFdxtH48LuawZynQcAyxU4WWjCgTyVtcXSFFAo4UfWgRtegDSJeE3GKXsFd2xriUfCLoY7k66LgzPodpS",
  "key26": "4QMKeUhmshJSFAzAWZYuMKC14rhZ1JxUEEmMta6XUGGipn2e1ZgRJXsaRK72Gm5fuQDpLx1CxmtZg2KVqs13zkA9",
  "key27": "2ha7HGAhzqLa6XtfS4vCKcXq3veM8jYVEtC8dtDiUpokwjSL17b2QDpsmEWYHwCfrE59fAARCSNVusAkoda7hNoA",
  "key28": "5oMKf4VPgFvyq7Xt8p7cPXP4GRgKcXpV8VMiMJmyQchVnt9kmq1uAZgMpXseNmhA6jwW2jXTsTfwA6kL1zX67teX",
  "key29": "2ok8puh3ftWYjJQd7SprcYitutdEmd9gkYGseWfpM4yD6nxTcbeEnbQzyTesaTvBfUZ2nNWzmMkiCQTbeiujqMMb",
  "key30": "5iSkD48h2k3Pjm96myv9DnyAGy3vuY4ZpkqxR5XADH8sqhJeDK9tAigXGrqdxJ4Az7uPo7owSoApZ2ETLPmuoF9u",
  "key31": "4DnhgX9qU2EW6JtxUsQVVdEaYskUxcgVgMbh3g1QwHJTGUkh1xzyhtrMVMY1X2ebz7LZD3Y85WutVzAJVy4QpK7x"
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
