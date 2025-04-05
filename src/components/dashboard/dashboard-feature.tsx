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
    "5Fs1nuStEU7r5tUURHa3pyL4oreRn4dDtf24Hirz8VPm9dxE6AU6cLPhrtTih5dGotJt5pW8V9yat5s6UqUg9guB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M2xpWFN1rN9bKDox2oQNf7ktwfRRhQ3kPkBDxR4Kp7UZHdC42htJdmNvWZ9qDwbQ1pmximu3DvpYDEoz9ocwLhq",
  "key1": "3ho1CdBJxYwgrMFq5jLQLqyKnqJTeeCPFgoUXT2h1dZHUqfeYbSqNRd26HnDyzPsstNxh7T2vbYtUj6JkJ3ZmrsL",
  "key2": "3wMmGhv5r6s3EGYvaRNbE9M95zG5oKvkvnrp1xhqpMXxAHfsV9wp2MkMGcr8NV9rU3E3j73UY3a2UuVbsQvyckXz",
  "key3": "2mNuKePyWrrL3VXzCFJqyY8N99quLBDiLzCcQXA4kARNcfqkRCawbgoUUBWtwrJnEWnpn2Z8NvTeGbKRcgRzs3bH",
  "key4": "2MJch43ibsBBBwdZr768US3qdq9GF1GKuhAJdtNjzmyzn7Gb25nGzknK4Ta3ETM8VBWKjoi6JvnDjF599SNC5k46",
  "key5": "3fr2RDucWNyrPrssGqGp358UupHTk1hu6LtZBNUxAWn1QR4UF9YHsGL4R4AW5B6njrV6pY6i5J8Eh4ktCqza268G",
  "key6": "5PABfvt7LZqtMhvZozfVJeUJ9xaf27sFwUC4Uh7teKe3cMiNZQuRwGMeypMZCRRSgBykbq74A84gr36FufNxBSoe",
  "key7": "4XafLVRwTJYk5sesmUBNhs6yDtrwy3yxD9p664q8k9x1owoLmeTuNCfhHToe1QX7i8QGcMPxKMDE1gWhx7Ly7tYQ",
  "key8": "3tKosvKFQVgctgAyRnaLnxDZRLQAFA351nrPw5VMfMgRExwRvT9e6p3y7wA3KVohnqhBpKvN8WofUhyuTVwyrKJu",
  "key9": "2gM6khP7bfYU2Wcdc9jMRpBfW7ncpih59CqbUE3zhc3QhoSKMqktxQXDeReJMxrHAVfVojG7qRR2UD6xnuYLP7ge",
  "key10": "5RwM7J4je6Nu9YChWFvhKdN67tRYYKfrw252Tqqxk921Z4KY3e32VF3BoGReKGj4y55PSHvvYtZ8BZfcpKvgsUC1",
  "key11": "3PWWpkXdgfncNY6zPGrfWYKBnK8AX74HijJ8yusZUncJBFk3GpDYL8XkV7o9qX4xKYf762CoeqszqjtnBZ7gvVN1",
  "key12": "42Zs1uEv2c65ofDBBLPuTE14r6Lz9XMiYqM2KLawHSM2TBA6yqZrdKTDbuQWPQcVjPtQfyDRp5Hk5Ad9kntvreS8",
  "key13": "2SkrqSDeF2qq62365NwEUcJqXiP3p5BznZUsneU7svhDf6DSFWUTao1gLvUrdP9aaHZnkSMJUxcugu2ssBgGzg9M",
  "key14": "ri7K4Vn29guGDhxQHt7QgtkM5n44UjPLSrXEwp2b28RKgWZjxBZouv16LJ79egFmAPVePdM8Zh6HbjHE1iNjUC5",
  "key15": "4TsAHegL7FrkqavLv7EdArAcyQNXPuLu1bWRL9iWWTGd3Vb5Rx6nhUfWHsp71sjvsGUMjyWHtyA4HgV8QTQh47JD",
  "key16": "2oWgU4PTcCm4ZJqTBAEG8sYNhMuGAihAFFf9wEm6iyzSRtMGjBwQ9W1VNG1tsMf6oj7D1BRvSwnrvGcAMZBXJwPd",
  "key17": "2sn9wTTvak2GNadPD3JaMinaN997crSh4keYaHLPbToqERBHrC1nMLMyBMbhVr7sNio7apai6e5tfumJ82dCSXBy",
  "key18": "5Nf1s8cnLu1Y3huzXv4f8XsMb9uumfD6ic3CnY2xbkLUyH2cysJeWojDkU1Vdcq8fx6vNjYWkbs4AD2pxum6ttPS",
  "key19": "4vTh6R4U8TgLXcgRiu1qpF5xY7LinzSoyU8YMgwshux19ta427Liz6cCrBodxYpb7MQEkQTLKaxGEX8dsnUcWNih",
  "key20": "36Maxz8E5QVkk2Sx6A5eMEMVdbrbkYYvLSzLNBbRdDN9m9JEdJR5QrrnbgoeHNGTKZHy1EVWhoxK5TdXLKhNRRjo",
  "key21": "3ksDYZF8oq8dzsxvhn2hoL1ohRuxebAdGKzpB5rh5wvB59Quqvou2UPpbXiwRdsSxgG6tf55tpsAr5VEELto5nhR",
  "key22": "4pk2LprArz1vB85tnfLL1bJXFh1SAKRhTs9dffkDtpA26mQzwM2xZDEBt3E7ARJz3wpYZSezqvDyAoEFLqo6SNYp",
  "key23": "3AwaCbzg9iNpQfNyzbd22Axmdy7yKCenhxtYTgwBpqkGg3qQENndqXcyE8fErQxk6z3gJhMvKgUPpDth1YWNybE8",
  "key24": "UXiYBng78qmHGXr5ghEjxttS1vKhaqGDyG99wa44vbwBEsibULLmWgo59axMwXEccsCUzrSDP66vnNxScem29HQ",
  "key25": "3v7Pxx658u7SNLuMPih4zYxyPeZzQzBjyi5cngvAN1C4Fp1u8CQ7nniuSXJUzGhkSiRRF98oq76BxhukfSTmSGqs",
  "key26": "5CzURv9WXx87BUsuh7YvX9VN2rDJ3bdeoAwqPayCVdmD9jZHf6adN1cAF4VCafT5VFpkjhVQMcFmQRzFKPu9fTxn",
  "key27": "39kLPref3vD23TXUAu65ke36Kaz5JHAjuLMh6eGMrQnt7uPJyZRuESzmJnTH5uCAYFpqz3ZTbxAZjA2QinCMp4zY",
  "key28": "4LQQamA4jXzhFvKMzbNFyDrQdBu1mym4ATGbLuq87Q3yxWcsTreHN2NzkUq7Xs4Bz1bxFD39e7ob4Tri3zRH7HZV",
  "key29": "51yj3NDGzfA4e6kEhBoWyXsGkzwVYfDL7aAG8uEKdVzTWLNwbv26c8C1amVeHT9253skgEeiuVUkC1DpTgpVPZe",
  "key30": "4Zen3eP4FRqhj97oFWrQcoNciLeEGXTcWAxdsJXQcfHJRBrnoxLd3PLxcoowUw2rvcuyHxjuXDUmJhxdhT3sdPe5",
  "key31": "2qxnefePvg4RcwLTRTRfprTFA7B5ZF1Bu7KNbo8JBeijYrYfgEXCugqtv6DLUc9nKmnzXXi9cYMMNgN8cqevZD3w",
  "key32": "44DiR3GHDNpBZn1gY3Q176AZbifTniJWNsAwt1rR7vifNJ7oGU3vdKtnNQKWGiSmJfcGMGQCJvRoE9UsykTnqto5",
  "key33": "3bpfBhr7Do2ANLt7P4ygbXAWhCG6yMBrQ8ZyrZZ5B5B8RFhDtduiH2ywB3Gtn2ZE58LK522x18sKNZyN4nQSX39n",
  "key34": "5RpNJ9Dt26Mbqa2tcPXTSsSt18NtTEWFRbdKgCpJRukA26dxx4oa171L5hKBb6b5SDedND67XGnpisrEzBVGGoih",
  "key35": "3mcX5hreyKBF55sqPMGAkyn5fRYw9348UgzgDzBFXk4ETa1bxPucZGeeSdcmLtJ1KgmqgfZHsgoVyDehsgeWYfLc",
  "key36": "5R7gAw9dEbAax788ucEq4i4PgdszGowGRTFyRNz7amDpHJJAZCP6YX5wu2nv7RphXks2ExHTbCzk59ta1byHCJ21",
  "key37": "5SsCYsprSmAoa6W1Rfge5MVYyNiEgo849z5CP2yKuGUkPHLJpLoE96JnbkaP4F3X3YpVuuaTkqMCrScT9Qk5WUE1",
  "key38": "2z59xgrc4wRWg6Fwk18ofDWKqfYvaJoAZej1kgyCK5gjGPT53ujJTVigrDSsZ2tfD6zhGMb7oiunkg51ZyBob4RH",
  "key39": "2pMW8rSM3CzRW5r5WCdjMvQavjdBBrV25boRByW5gz8KMSuA2c5Yz8hyEArRAcfsnXAksTzMVvM6PnZPzQqvfvSp",
  "key40": "58rKUTHrC6ev8pcg7YSju4A9bjHpRzroavb8RTaBcJPd7nZgV7mKsoHqGT3GEeLnBzE6Y499QMSUhWmrzveeUKpY",
  "key41": "4xHURwMjtsTyCECHRJcMH4xKih4ruiudX56ptLRq7bZS7jchA86ui724Ep8WrsE8zMCGr1v2yuu6LG1Xpi72AYYE",
  "key42": "2Hmj2C5KNBSujpkRKH86JnEH829GUSGnATxoVeA7vQD5oZKiyjgoLt4j5uTbDoU9dcGwHuf6PHxDwDNLZ7Yh9ovA"
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
