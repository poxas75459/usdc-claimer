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
    "35Nsi4oN1sMmAMTVnWFg95bMt9c2itfgLn28XFTquzvKL7Y4rJEmnLugKwou3EMKzPk2Y6kBJ98FUHL9yyNHYroZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2biTU8AwibcjMhjynsUyUebVjwZt5CUmbCXwvG5ayvARqULaEMDsBoNwmfJVHdbQLW6AF9KQWxRHDVV5dcKRkWVo",
  "key1": "471uxq4mfDM1KX3Pc6fFS2xLkyM4iJtr9JTd2J2f2967PKAJrhaMse1ZMLDSCMUwQRBod9HqnTXj1LAp1pfz4mcd",
  "key2": "44onum495qPGavj4QdyBedXpSUPGvceS58HYj3bZMy2xLhGQ54zp8u3AzMGKvUzWDT9F8EYwB2YDqaE2YkPUPCs9",
  "key3": "3kTtkKLdyasT2rgATqeNte9MNQ2uPtm1ExfhSQLQ9jtGDxxA78tQo7LCrRXaBG6LnoYZmTG5JCMUboPx6U7S7hZ1",
  "key4": "4NUfHFyK6vnYh8bGYwBDa2jhxw6n3qn7Krf1oruMKgLNdhw3C4i8kfjoXFNpDQCf13UUPdqtQWbdnRXgnqj3BHiy",
  "key5": "CdEu7nqHcu6HsH2eytFkp6kbsQKpfg8oGseKJJvKV8HGagN1QeeLDfEYXBjMhw6a4tinNQoUQ2Hdp4uk48xbsii",
  "key6": "5iiAGgaRHjnrPqZ4rZPbqdw6yG3dkJySPmHYk2oN7qUP3bxXfWU4b8EQEv2cpNiVQLVLD7YkQJLUKkx9FYcoJgS9",
  "key7": "hPDCLTGKrgWnCsCMm81Q1c89hDPC1e4DGQBRoRmHvpAR4kiSnu88gDYcLYVJYa3pNZuY5HX2RfSv6ZiQW39bMjh",
  "key8": "42HAZ63CCgneeHV9hJMeE69RTALrwydaHEHmwhCwdU3r4QeWWXsKmScQw9mfpyCsYCCRdxj168kxkcRZ1hHsKkCX",
  "key9": "BYt3eyqa2DkRZ2Kq5EZoiabKX2GuLBMCFY8C3dEQ5naPfZJdtKQjN1bgYpW7PUXtdQY8zwysYUwpVifrxUWCN7a",
  "key10": "2FF2k8HEsre9iceSqLjir3PLzR2HmG6NggMbNknmEy8KZPnFJpP1sg3t6k4wMpnd9nxyyqhnMZWKv4nxFf2RytJm",
  "key11": "237a72b9C3HF5Ygryj7UiRPDxvJskPLQZoMMRdBgPVNz5c3M5hHAYNA7qNU6MD6c2fHtaT6ajZY6TYeTNSr8qiiz",
  "key12": "4oc58tz8ELVL9DJmeSVBfFf8YnWoBwB4Y4MTV65jLbgvKDiixjTajDsuKdTSR6AaTRpQXSHs6QorAN4dgrDpryvX",
  "key13": "3tQCzPrfy6K9WE1VeB11wavDyTp1wyfrDsv4rnPNPrqc8AY3D4MnFppDKeyRV7XgaRfJhQWA4NToMTQ2HwYEPYD2",
  "key14": "3cfWQt8ppLJ2wDdZtmzoMozmwvUwWs8Dsz6evbpfTyEwhtw6u6h14fFMxZBxofTekc8yJhegMpgQuUujPeQgFbRV",
  "key15": "3Az2q8RQyYi9Sq9e9jQQnetYVbvsm7SSNJsDTDxg2W72UJ2DS6tvZ4j9U3nY7KbkgNMyHVKXEFYJPvt2VjJmZHCi",
  "key16": "3iYKZfiNBxU8EGs7rhHA2HtNHHNRkJ4ue7fDnEk5ApkQTdhFuDCETZRj2rtkWdW7ziYy1JRGJ1V2zcrJsQio8b7p",
  "key17": "36cMpbmVujZPr2npiP6K8CNr39JiMoqphqhNrMynQpf22KDxKhbyjkjbe2GRrDWZfLSR1JWGq9vqf1k3Gv2rWmuR",
  "key18": "4KrdqkZcjGmLSqGTc6TRNDW6nzCMZF73j67BmHLdtxzhvPgYCeZwNQECipogHYKvihfZ46e57K9eUmQCxKY9yLGm",
  "key19": "5cNaCa6Kmhaqu3AAacxKVdD1gqeeKDG34DBqPQguh3zWDAC3z8WYt8G3tgfDNu5dqQ9KzzE4MdKzmuWmboM3MTve",
  "key20": "byMSHHCM8o8jE5ZufdfBrovNFJteq6wqFj66vPkMxeD98FpimxNYVV7yX7BZoz7jEe7DvKHUigNKHkyqdcciy17",
  "key21": "2mt1emnFBRSp1iCKipE4zFGRAozMLE53hDMpHJtNCmPMVRcMiU7TauZqg8LjVz559mVR174tcLaCJo71aShZioeN",
  "key22": "2wdBSceLZT9GuYhEBJRPBPaPuxfAAJZT36oXTkRtfupDugSxr1HZbjT4MDx8gfgGLsAXpEq2wUmkFtAbq3qcFgnL",
  "key23": "2s3i4yDUXkQw7xSjCo3YNfpP6CapaaUfwRQ7vU2E1shCAsWcurUpaotff1kRz8KryArnYcgebv76iTzDbC6MsBAo",
  "key24": "3kVuSpMZN2MVTrdLz4ry31ma5Qr81s96bYHTPHmGr71VjKPfqPjPkHWTQDyjYvLstctTnEZ43AGnAoXsgH9Av212",
  "key25": "2kN1JuVgu9FAEuvZjGd7nAMpemLqtcyrPgHJVuy4KnmDSva5aB7Sp6z8pvtfzibgQ1MTacZ5YmiyufzWhBVzWpcb",
  "key26": "2yyQhkUuDEuFv4LtKbhhw38Mcn3t9J62y6HVxKzB3hjgUZx4jcqhV7e9vNawmhYUvXEPwREFBfMAfk1QKDzQCbHJ",
  "key27": "5uoBdjst3oqpXkAhBhyi6Uokuw3j5mD6dyn1Z3UcW26ghK8GkpPLy1hNLzM366ac7UbStwtuYGBu6dfrKjvkPcaV",
  "key28": "2om4n98ptqFadAiQoPZgSeN3oLD7swC2nbx8JKpqW2F8TNDDM1jocM8eghJifYYK4KvfiuDi2YiVCAhEbtbqyu3X"
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
