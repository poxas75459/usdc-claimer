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
    "3b6AxbA1Mi3LCtEuaogt6jHRfyMpDHofRW7eBEiZXYx8mvLJMNMH3UXnLB6MAa3jBAbt4G72P7VQJdyguQtRHnSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KD1RxqinKpxbqk1Qa3cEre2uL2DKmEGq9hTFZG3EVC2CW5ZwrYAeBxWpyA17U7mU1j3NvQe82AcfjvsBvM6UZ7u",
  "key1": "4UUUrBMJnKjP2aNSLsCkPK9nmRLdJbd55xjoxcNL77CZSVmcQka1ufWRZiVozNkE6PC9WTKB7vPStPeuN8M3VSTr",
  "key2": "2eFSrBHpBSkqfBNZUFfCrE2rikkE34WmepFZ1hPaWisU3PTWA7vCzUmxeFW9ua7WD5xA4aegYXZA4gLDQoHQGQys",
  "key3": "5tHKJePCAC9r3QA75pTGyEkV6jEksDTD7hmTGkRt73LnYacozBuAAiqaGXPVwQ6DNgqNg58xj2aFbaF56czyZ8A",
  "key4": "K55hNJExRjzRtgapgg5RC2sDwFztiUoi3WWApGWrK3ZCn5niGvAAX43YF9XmZbxD161Zwe6AwuaqJ7YzUyC9xxz",
  "key5": "yfRfH261sd9B2A7NKYkUpCDvZ5Ea7nga2u8HCdp9qUw7Xm7yUBfvwkkNRc3WS5xbh4j6bPzKKkcegjzQaWw1aFC",
  "key6": "62FDAokQQB9KP8Qif8SgeKW8bWU1TViK8b3taENThk9bBDdLBi9jKm9GonKwxqRLHUNvcEyh3xLAfDr4owwLqwbx",
  "key7": "2aCXgQombrTFQdBqD3dVxZ7u1wfxeSxNVdHcoG5q5ou4VDJYt4sgN1CbhJ7uXV9bSnmsqiM1AVZTrNo8T71icwDE",
  "key8": "fUqyYNLLb92kMEW37ABMo26E2KmpCpXrh32Hb69koSeL9agpSqhtZXobXGUNMQqBKHFAACqbX4HeSptjgBbTwV7",
  "key9": "55n1jcPhqVgixDApjL9xLpgMpmnrkd2YyUcmFQtUVYmJhFqEW6ST7rs7PtJKuFwAy3yKE1EJKMPkW2sdNbnu824f",
  "key10": "yZsK9odCAezARpWjjoMuJk2qZDZRvRpyeq5GrvK8AkDfgeYXpHbLHihpVKN3Xp6cKivJYP8rrJpCjzvJC9tT8j7",
  "key11": "bohPR6BxxU8daExpx22rXTZyyTxfZgsGVk2mZrAayN7sjbH4Tc3R5mAzNxyb7DUCCMBdPksUcuUskCLgxE1tRWG",
  "key12": "4SoW7Pc3e2HnjUn29Qt9BG23pTfdiTd3UkWDXRubRDpN3zDyT4QatDfJwhmPW3u9gNhipFVPr8j9h6pEBCF96qiF",
  "key13": "AVKajKFX6nUhN57583e4cPAc7Srum9bVpcgDrngcdNTiQj5ThYdenvpjp9fTs9VybMBtnQC1xWcL3fs7xDpyEnf",
  "key14": "4n8c3Z8nG5fbFpUiKsHVdqao2e8fx4cRamM4YZ3uuPHwRgEodUYNkfRxHDURCQgERMaMUvL5efS13gef7TrcmBnw",
  "key15": "4dHiXtVhYf1RDnLybXEUV45hT4d9jrT4PPEwJk79EHA8dgQcDYjVQcrxzr17hh8KmAuMpxNdXHBaPbtt8r3jFhHH",
  "key16": "5t7FVwP2VDS4qvqqgtW6gyaVRYLXMBS9TRdq6H1grSZB6Sk4pK4rhUJ3U2U6UvXTkrT6EfF9Brt1Q4i6th5LXxem",
  "key17": "5wJ3CwPgKA7Dr9QuFeYSdxubhJ3bfim3ehBVBMG6cjcU8Wbt6LkhCvaXGoKAfonPP6ayf58rdh5G44fWt3cDehF3",
  "key18": "Juu5wo7NGGjjAiaqVABMA7zArqyUQaPD1mzRyzXUFdGuv4qMQMm4qm8NfwMrcRvFsTyGDWvCXofjdSpgiRYGTu1",
  "key19": "5J851wJkQ4RYUDTNHTtDoEsXm5PU9XGkCdUDvks6RFZ6voD4JLVFUD9f4Jvv691s4aXxBNPKkCGoeVWtieMSYgmn",
  "key20": "4BGzeqALKr7YGpe8LhBET6A6U5aixv7ELppXMrqfmaXyDBKTy7GTrkfWeihX4MvD2bwYRLKoyeaeqnC9uwthLu32",
  "key21": "5MptdJmu3MPQ85ncX7m2W4tTVBFnxvHAbwiu4nnB9LC6bnb48Q9hqRR5ECrqv9TpmmATLNmw1xi8Kje6axFVR71m",
  "key22": "ZrVNvs66DtM4D5gzdzF7FvzfZmjkSXpwS5ReJX2K3TrY5vJ7DLg2FwRBU9bWrck9DJNgx9JbRD5HaS95qUnyHTR",
  "key23": "2gvDKntb1uAu7q6ff1TLWecNBb3xK13s68nC8mF5TQa6pZqKkyiVYFizYukFpa4gqNqsp9F1ZVXJY9zjnFebMQjx",
  "key24": "4JH16MMc1Z4cXjTwA8T14Eu964vDgjt8p4WrbHSsE97BekDbqiLup3aNnrVtoSuU3UPp8SUa1kp2fsym4xUjadz3",
  "key25": "5uSs1KnuoKdBurriGmagPuxXq82SqDFKaX7qVCAkW8D7PSkQEC8VNr4kRL61FjkcKHnRjyNc7wBiaods5m3F22MX",
  "key26": "35pwA5U5HUWnWrGm6tCDFNWuSgsvUDUXeTfiGZN7bjfeMBgE1Zi5Q6QWEgt2DTD914fNTN3dJdQnF4x8ELY2nN8t",
  "key27": "4BzQrecMWQRijRdGUxXJPFZvbQTgMQ5gD67S7ntVMxQCJ4Lva7ARDPoSwQeCNZWCjnsXrht2VLmhnyrPkGrJtW2r",
  "key28": "xGrf2jpdkCtRTB3HQKkkVZPupgCiqGVjsNSDJ5CamLTd8ZMyxqPEoyKT8LrTMp1NB2vWbPpwMRZKw9AnEzZMuuM",
  "key29": "361PEJGUeTtzH4SjV6dfxj3KSWf7Jb3JS7XJW7TVsj9XQH5V7i19gDoF28SnAQocoyUXEvwTJJ6Z9vrXbUNfb1Eq",
  "key30": "4n8FF2Cb8fpcyfjL9SnFNZZKuvgWizGupgvpptEEG284proVWrbd6XgQirdSKJtGUxmgZV3kUBR3SpWV5NboGnAK",
  "key31": "zEHuEtLuHkZ4jENevNvRoeqifrVfB1Mv2w48VbrQVATn6sKiYaRcBgEiieHbd4hu5niUwKZ6oPGzv2AnHVUYcVj",
  "key32": "4DXeqtLhPFoc2rzKP7R9S8BM95RoysexuHSdmAKTGEjhTpxaKR1QTAg3q4hpxKTTeb629JD1CjcHTKEkT7FvYEsi",
  "key33": "4yr8K3AMH3z7fqmS9dPrtKKqeBrniAUmqz7E7K6sENmutNhyoedBuNKpMx9zv4AHU43dbPmgzoYUWdhXKzEc91wV"
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
