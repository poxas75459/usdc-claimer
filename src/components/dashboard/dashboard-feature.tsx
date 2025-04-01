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
    "5Ls1BKnbjGeK5bjyqqpxbtLYZobCf47B6QXAJGmd4UbRzT8D5TPTXaUeFGVpvu5rMdt16qMpCeYNGMVpqHymyqKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kv1wo5LogRcmxGiBresB4Fj4bxxShFRjKQiEDvNCTJfUJNxxQLj9dESv8xVVtTscnrxoXgcekg4JnASgBozn9Kv",
  "key1": "5c5SWuNR7bUBi4BGNF2FjUaB593thqbCka6nzgxDq4JtPNxu9EAeXydLmopnfXMVyM64zjsASkb5ndSv7kPuyfFk",
  "key2": "BYKBdw5Xtuw33vVih3w46MQ4ugA1PC1VLsCBL1Mjq2mh9vtZwyCTVJRiEc5xH8YPhLNUzxcNvUftHV8zdinF3DG",
  "key3": "2Ju88sS728CMZGoFFk31vGCciTB4Z4mdhYtgGxtpYRCAP7vJPZQqU87LdzErzRbWRNspS3KAbtxdrcDFJQkkbH1M",
  "key4": "4teA6c2EZFDzAqtnvfswWt26H9Gr9wNu1o5KGqHh2h8jVD5NB5quYJRbSH9UCAjtpQ6z4HSGfxmJtbKgMeuV9Dy3",
  "key5": "3TCt4YpHEyngec7iuMzhsSxUR3NwAijQ8cTAs9VWDuSJRCMNHYKf4SxKpG3g9eheViiLr7NnJSDMMjbTmsLQzPmN",
  "key6": "33JnpjHBTpkcip7pwvK6f7tuVj3VSsq6c8Yrd4CP3PTxUgdPY5c1rBT3UpPoRCmA3HutGdKUmdf5tSs8PtUv1F1Z",
  "key7": "4NSHXB5EbJwSuQg6TNEFK4hfhSxLZxVUiWUo9bw8CgRjdZJoj16ifLqUYRDXQ89NgSCgf5NKLzp3apWt227ARxhT",
  "key8": "5d5WwXqFa64awgLEb9UTdcAHEtznb2jb3YPBbnFRqiJnCsaAHcjBgAFsbFVmqfoXde8T2vkF9QRwNoAVL7y8XF5j",
  "key9": "3TFjYjGGow1d8ZyEvMAaAhftmJ7nefjoi8yzVSic4psmyWwHF5FTbeDSjaNzmfCvyS8cSc1REZGoHbPHXcLXra3v",
  "key10": "5YeyUntqxFNqYTugvaQux9Pi382ijiBVxN2gewRubvEpi3ytgckfgXSLJSD88fGfQ1zRtVEYuvheUHZgCkqi82yj",
  "key11": "deoyc6HU2mU6Dr4FCpeHnRx815BPyragU8csFjNLqhK4CEA7Pc4v39c9Pza1RSsRRBk6NsPy5T2RREizGTif51K",
  "key12": "3kcrWaK99wTz3teH27nf5XcE9jwjSYWQDwrpyXsKFATza66J1BzDZBqenveQ1KjovbA9ev2ka44u2uuVjVfPVQwS",
  "key13": "2gYcmNaiwBgpb2AEWK5fmUmsWQxPf1xhW9bXpvAh9Siq5gePJQUDBZFfYMXotySjEuoE1hgEXcBwNrMM1sLEEt7G",
  "key14": "2TYyhxiHJRzSrPXPupn9kJpz7aPDahSL6o7wXRjKrVFY9rHvjG6SQq4qbpeykJcKivg5goy8LcQCYvmsPWBAmDfn",
  "key15": "3AaAx4j8sQzViCsYNZUsBXLtbqN4TpTKyYYY7r9Br6uw8xtP1b9YBLz4dM3Zq1VWRBFbGuFNdPusk9C7k82M4R5A",
  "key16": "gyQiEuQPe83B1D99bEHsJJpyLSSGQ2E3CLWbD1vnvsy32qgkt7Q315gdM1ex9HkYYPdh3bhSyow4UDoNvNzKC7C",
  "key17": "2KDPyR1zKRtW2ZtHZHCptmJTpydQTCUmrJr311mfNRx6VpKTR2S1CbwteArbDZxPekyaTgdgMQ2y1jBPjxnRDWFK",
  "key18": "5nGhiyhXdcsgqd97hb3JFE1bh3gSSK1nJ5wMFt8gSTgGKJizKKzNnToa72STTvtFrUgVGyeAqiH2fdyc5tu8uWUX",
  "key19": "5Hk5sNjEdRearbtFd1NcSs6jGTHSJ8WwL1zUKhMoxcWwobUJTxWJQxaNojJd7DPHwJoDmAGvvFVVPUhyQeTdiZqS",
  "key20": "5EBh32cJ8bmkVnnBpFVd2c5DcDYbVrnhz4pmyWGhU1kkeNUvqGiuRjjWFJrBbWwnvfjuhJxLGkzdkopJd2gWJAxE",
  "key21": "EY4xNSh5zqQnRW27EupRdVVjyy9VBqkoQCJAD1vQdc9u1hzmfiLPfxVAy7hm8vYKtxc5b4oUEieyRzyt434Luar",
  "key22": "5Yop5Tza8H1UjRSXUKCkS5MwrkwcZXNTqPkydannikieS1gmSwappzUmDFY9Ct5T7gZbxt3BU1RkxgBJn71frTR1",
  "key23": "TvPjxi7MMBEn472gn89gFXsjzm4v9v7zxZrfr8gbe6vjYmVDBZcwq75PYsDW8uSzznQPrv1Uc8FiTyEB68iaPjU",
  "key24": "3q2BoPNhj6Mirfh8ySdZCRzdhRj571KVbR3mhXXDYWg4wkMtyWAERAK7X3xVSyJBUGSYabeMpdXdLqhbcWf474bq",
  "key25": "2SGGhk67HxToqLSx8qGFda8vL3zVMrwUznnZuq4JXcPb4D9yAHEnSJ9wmgfSMKUjAWSvKhhC1hCqx19tfKvcFhqB",
  "key26": "41PyndrCmmbdco5KYRWsqqKrdAbzygJPasr48S87p3qaEDbHa1Cr2pAp3aMvKaK15TQ2uAvRMtZa4nizqXtqbMwY",
  "key27": "2MXKRGZhDPVKX5Tadohs7UD6euCqJaHf9MvDyzQ5acB6NdHs8vtGTsxVuqahSQ55PB6DFf8iJgYzfohnYwrrFnSz",
  "key28": "2A5fjov8Bud3TdnAA2Dt9j2TSMd8U1uimnnLCGDJQddtRSHG1brGAYWTvMSokDCsqe9iFSB7FY2enqBPPo7ohmtX",
  "key29": "QT1a5sCC84MGXDvXW9AB2Ytqd5ea93vcDDPNZPWns24Km4achjZRAjcFL59syLzMjwsTtuX7PTDT9XXqkMwgRxM",
  "key30": "2cZTUahdCbqcR5pTT859Hxcuy98VbdutQrGLyyMnrM1BHjgMo8qEvkAvDgNHEj8vs3Fi4wccsvmsYckMeEs1kujK",
  "key31": "4uJLUhh1pNYcQprRomGcJB9kEmVDzHM5USu5Ye71e14ETiM5uhwaYCHmymAfLGJCAfmhta8ptRZa7j1Npe2eayNM",
  "key32": "4Kyjqcg3U3zbBCEz812PcsaY4aC3oV4Bb4gdpq3GA1GAygqpaa8sE3bebmdppgWngXaQ4r6pEUt9LTMzwk2ktder",
  "key33": "3y27X8jsDvAWjrvRq7aXujYjkuLWq9nHW8n6vGbiqi6oUYT8fTzJLbEDY6tMY28qASgkYKGrUniH5sgF4M1n3XXd",
  "key34": "5SHnrJNRwcXBP2SMvztSjrM2cDqQvD4kPv1YNVuVU6SxU1NpiapnXYiupzfzjT56AjGHGnmp6ozUzXhjTMrNMYkY",
  "key35": "Au5CTAnPK5SeBKvNWZoXv9yEfATRQXp75yCetxX3ZPp2kVZoK1KyyDRWGwq3NxXnhR9R68fDYNAo6QfhP4Ak4CK",
  "key36": "4neiwpBC8PigCy8VumuPruxJsNxdCWLqo7s8BHHxMwK6arCLVuEDuwijzkKNeY59E22pNj3NB4cet4tfovx7QtBV",
  "key37": "T6cF1KwGwQHdbXHnermEaVfvMKjP1UReBw8VgPLLsfo6F7auYT4uDks7GXTtVQFpYMcNuMx9JinU3LhmE3TA1Nf",
  "key38": "39Bapj5gg9vJLeDEQx51uU5MaSn46afA452jh4GCUDN4ADHRqBsP5cDamYXkq4eJLuvNCyG1mu7z4m5bDxLtBpcQ",
  "key39": "61mizQKMr2uamt7WCC9hMCAXJieMyqNfuWqUYcDqfVHWVKjMCcyP6Aqt7vHBdpL5udhGATNagdpmuSWMGYrwgxLc",
  "key40": "3PYt8P6k6KrGiFWZLQgjMmigevUTeTvcUtAu4Wwxm6svdnBU8JcfpQt1LAJabdXfx9nTK95eBWyET87g3rQYoupF",
  "key41": "3m4SvEFEYB1a2Et3SnveL7okZxtsEH7i3Zr8cEJn1YEWW69evS3mR3UtF5isu7ReyXC5qx1b5eto63LfVyjdqKPC",
  "key42": "72Vthag6aZ97bsuR9djViXPaP9RL1m82TwzoVynRFZwZmhqLj3JoRTq2Mb7hvuwEscmKmya9q8uYHy3Ytj3RhS4",
  "key43": "4wr7F1kMUfLjgXkfJXA6LsiXnnHnaiqscLAVNgXLT3rvGWwPugNy1Ja2cS2sQzQjiVmLa2DeUX1H53snRCgneeGG",
  "key44": "3m4NK7waU4EarSaxZHyoPQpWqRa9muwm4yt2TgQHFpwmsa1zDHNwFcj7iQrwDGiHR1RvVEcE7Zpx5zu3E3FbWq7y"
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
