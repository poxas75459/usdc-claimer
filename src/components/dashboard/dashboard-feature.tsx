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
    "36NbjKXJ9nTrbKdD6e5AhFrFLfXAUeQHtiKuGqH8ps17zdK6dbMMmTpvMAgUdPiGKCXt9CVX1GqiqcF5fSVrh7j7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gCVaTXighprF42fRkSJ2PDU2PZfg9J9115L6fxbuGcB7GUcfshEnDWMfP2psEVn5hMrDagcvq6VBsjToYf9CCM5",
  "key1": "4YuFX1D9nCqdo5Zng84uNh4ZFJMiL1HVXMgF2sGq4MChmZ8hQMomHMB3cFSdqCtXhs5mj7NbxHQ6Ux6Qnbh1kbCq",
  "key2": "y3DHxqw3QWyT5pKVmX7JqJgB5F1acD1iHhMhYNQkQZKfLo7Cwy5n123ArbqCPjRfDYSUePvtFBcRBtNGarEEk5F",
  "key3": "sMk5JgiVaovkUiiD62RtnAoRQhmHbEhz1YpnGhx9rPj9eLUzEQRjBbC528y5GUJrYU2AKqYSB9k9NKD8GWFCr7e",
  "key4": "LDGp5TbqLN3SipRsMC5CobaZ6KKejPvMPC62qnP9HxgqmkcWLxXxge31T6P4crbVcpo28Ue7SaKm2sHDe5anLqv",
  "key5": "46rGQNn9rz7dujG7otMf82iLBbjHyxijouAEvMvFS2xLZupa2ZY9UdAW8x3BFFmz67kyGcVYQPLjBipUCmnY2uBF",
  "key6": "ecxT1WqVaoiZ2DTgddNp3LaikQu7UKBDwJ97FqzSgQ4nAVnj6gMAptkQL7sUPuBv4cjJ4wJNZo4MFW2ZquNC5tx",
  "key7": "4dsGuoX4Q1VCn4Zs1o67ifqxcL6dFW4eyRNNSqNLanTrc4fanrU5w7FqBAxobrorpis4x5s56ft9wxBrj14MhXsf",
  "key8": "8fqnfLzvC63HX6om3KNqSsfCzCP9A8uZUDonDHNQwPAvkD5hnAjJWyuMMXuJc9qjSaPu9Es4WYvVPmBpUEkj3Na",
  "key9": "2ctvPAa7h3dXGShVLv2apC2Cki21zEk5ft7gJTnwzWYxuHo4dqazKQBTERSRvDCtgatX83fzbbdcRyedLg1jdDXq",
  "key10": "joHDPmN1b6eGJGM3EQeWPYN6GpeW3drfBMS1Q2iSKkuo3ffMWDfCMYq8RbfG6447tbmWrXW8tPBoseFxJhziAcx",
  "key11": "3fijLNWga81RoGTuyjnpaXERxPgj1aEKgTiiLVBHmwnKGEZHdqGjXsMnYZ8xaQjDVx2WjKADSnch3cVNXrvKWBJC",
  "key12": "4v2qUzmKC8pUxk35RxfbEY9SiPCYVgwxgWaoV12NYnqzUcR5ur4Xr7iQG7mvQWNu3MWR3Pj7iZSELaonktsRFUWG",
  "key13": "4VH9Yd9vYykN17FcmRCnU1RmwLPK4mwR92gzbPfCA7bZ8DCKKGKjTsqrgjCd3gZzLbpVHHEKaZfVG7ehzBcbyvT4",
  "key14": "2yFjAPbW9mFniJfHHf9R9mjGD7LAs269zvKyR3dSsswTrgdep7MwrV4fPaHutHL6sQgu7jm24kWDZioBuEw21Yc1",
  "key15": "3kTzE3vsHMuPb25kFuDixoA3WwE5oJS8eQ8dewNDCW4p56A1zeXndpcgV49zzqjFcuMuc6fXs24aBWP2zhYrMd9Z",
  "key16": "4ctNfpKomzp69FfUjSKb17oGG6sJ91rpxmj4cbjNHv581Js3bWkUsTh3t2ivXHXDzjcWCneBJLCUqKHK4bZ2qkmB",
  "key17": "4S4h38koeZj1HdUzSTd9whHHSEjZVVeqXX4vnXULvVC7EATWkpAK4EeyPBQmzNhtTwpPD71ywMe7ryTMbk4LyqPY",
  "key18": "3daxAYiQYTyYJDCGjqTh8F2jhaNztnnMueAA8mCDNNiY1SfbfgHNuEeNmptag2gu4QnrFeYfthWUzgNZqqDBT2KE",
  "key19": "4rERZ6q38dzgv36RFTgYquJ7xrSXMJs14qY9XadvwaLWUot5KrfHBqHyPbd3ENFTuLvvohMKZ4cwZwhfJhB3yNj7",
  "key20": "3rsCVkZJdtkZhUyyVLJKGCKzP3PPKnkpSo9KBiVmRRs1w2AzZWUPosCc14WyaHZP3x9doD8yokE5bwovtBw88Vk5",
  "key21": "2pYQQ3TFYCDL8SjcZHaP35GCTFvh9VMPUWiAJGxs32Fc7sGimg67mQ2bm1BQS1nxTnAd31jV6PhLUvM7j4KZRYzo",
  "key22": "5FM4qJW1UeLzSZLqYWZLexFsudL4Bv7GHZNdLADiWuPqhXQyDph4Ph1taUAwqpcfgS6FHn9GVVC3FRdUeruwzvWg",
  "key23": "64kAPneNyjBR8qwWUJ7S5P22ujugpAS6S79cPEFVEYMhJ7HFsernqjfmX5wcPHYnv3Z5abcekrRijZCUEE2cSVPW",
  "key24": "5sXxmphdUuU6FCsKqwBvdmoViXCQakmGuDsx7gGfm2mviCKJAKTq3CTq7zkGbAc6LgyvDtYrJ7UwrN1VUFq6Wh43",
  "key25": "5MEfAnR1Adke8L4FsQuLnh291xY3ygNpMMzdrMjfGEMnggVJhkrSzNxLMyzPF34HaWQenn79f7jedXJrf56rX3Yw",
  "key26": "3YbmNj6rJQ6EXvH76FsPfJqcuRVxWHrqYYdvCSeKdbXQT1sQDjq6ehXfX8pny62iYLLjaL3sDJiH48nKSwJgwc62",
  "key27": "3j63KBZPvNXqrC1UqoHqQRvHXRwwDyoNJDQSqwgc22FQR7roxGaEqAeARNrEHeawop84r6NoYsTbhSC1qFNdiGL9",
  "key28": "5o1qeVQh7oJ4iAZ8QWoq8Qut6RBaMGBAUyhzpnCAxAdjvgr6GHXL1bvoteYaFZK6pYjLyZ1jTkUYymNWAn1NYQU3",
  "key29": "3w7SjNcpRcoTCS5xe9FtC8Sx58LDQL2C8Q7ZVTdaxfsXt55cydMUAwNUzKQ2xLbj4DWvbMpHjxPb2ruGaSpThrmK",
  "key30": "4pJnZLuvz2HqaurGejoywhV5sumZragwq7Fd59t3vtzRhYUbnC2Jgs2YaQ3vqZ9jeRujaafQtcBkjR3WzTsdiye4",
  "key31": "pqYgqLkABLLWd3wTusvgECDeEYTAzYyomdcraHSK1362UMNT4Ww9kr9ULokdaGuFJ18TKJ49hS7egni5i3ZJabP",
  "key32": "5G2MMykBiDib4G15Npg93WnSABs1b36dbhuJ8NSDfqxQ1jgNyubeBnVYUpYvTf41W3gQu2DvrgqsRUXHe3rmu12m",
  "key33": "4zr2wdjADKA5ZPcedqtyKnmu1bfz7MkE6SFypgHb9d4DhXGL8Cc45NT1etX8pnTP912WuNEBeBW4sK7yGCUFtrWW",
  "key34": "2rD1YgyqeDcKbPqs1sULekx2tvQ1ReFCeGPJzSUvfWqxTX6iTbNaXKDTbJjPJQSFsxkSkMMwQ1qeUbSzAQyUQkdj",
  "key35": "3psnv8hbfTf7AaSmu7nBrBZ7gcjTjb8vsRfNFM83kFKDR13MQ2whTSU5UWEm75F9X2cXtSkEkZ9j28y1yBGAgdNb",
  "key36": "34Nc2B83MYi2yKvDTnzFA3Ch2S2MdrFUZvSKsPA3q9YbMK9NpxpZd7XAFRThF6niMsDFU6oosMAqiDBK593Wo8oQ",
  "key37": "61duwQ2TFCxfwjsfKtYL4Lo83fD1PdcKrCsAhjV3sy4Q5NZxzju2uPc2S81XKAFergXsECgR4fVJ1h5uaAs4RdgP",
  "key38": "65yM5p68Rc5Q6QB9sbozp574skkgW5gzyYZyeuvTjYookXuBrBWnamCFf8KZJuMv3fdMHQPCisKacT7cZztkAbUg",
  "key39": "4ed5fRDpZjL2ixXF1wC63wwBgSB2S2scg8UhxoDkstDhxwRrjim3BVSpguxHRdLQfXAWWYuWUgyz3QQgnBrCrzxd",
  "key40": "3aZcHdxDFZVzPQH6zi4sb1mEbxgDmixkN7bA1LFDGGaNzeqG8N7YvWt1rdMFUBzXdqnUrJSGj4mhEvkGne2vL1Rp",
  "key41": "N87niVnDrs8HBNJGMQp3acN3k1f8cg7cTxC8pYAUvrzT35tN1YwYNDBZN6tcKXnymfKaTDySDN4petpj1w7gJEM",
  "key42": "K6pWU7dkPLn6Xkq68fSsCvGUKLeYTBxwfuE3jGZaZo5N66Ba78c3QpZt1aQhXfZVC3cTmUfcWcQZ1ypGdoAxjam",
  "key43": "CmjuYcGcSnoodfPSTR7JvPAPpeRYS7Jar5Ext3W8dWpDM5sg14QZyjHJwWLmNneriWxUNnzhKspbiqKdhsr11X8",
  "key44": "3qENxudM29AqmiSwpe5rus7ZwMpAFtEvo9CVHn2TRL2GmMihrgh62X4rbhJH7Xa8YM9wVPnTXFYttbBURgPnsSh9",
  "key45": "3oR7jWVyb3h32zhfe233XzY8Gs6RV4BfA8H9v1gLq7Bgsu5wtwfGRUCVYrFzzmeSGMHunGzUcDWx76asH56SBKkj",
  "key46": "5pnCtL7Sma6GmuDtdewhHQXAnt8eaNxHgQmGgxgudVgX2SFRK85YeBsNmUbByouYbvT7uxq7ebthuVePpuJnXCis",
  "key47": "5w2EjrU1DhPJZ258EoKaPN7fn5sB4V46G428XSsWY9tKSDnaHhkkWkE8veuqP6w82pefSpZWKY8y651WBqqEPo6b",
  "key48": "4W1gY7YWWNHSi92MzvkHoiiDjvrYtq6gSb4Mq3zLAx678QjBQVze3vNCdpwv2oHGNvPBi4fAs2Z2fnjubevaQ2Tg"
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
