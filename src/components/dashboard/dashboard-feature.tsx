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
    "2PMHxSDNSZxkLQ2gDwjAVzS4spHbM8VtQKUMyJLUX77Y12V4P5xAes9in2fyZx6LRMiGXjAmKp6KE8G1XWrzwjjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B9KwaNJjuEz1ZauK99XdEvY3b1y34PXXwwvkNeaQs9DtDJjL9Njkhz2PUt31PpXqcEXo2mhbsxibEkUDq1nEPPz",
  "key1": "4hR4CGJ4EmrNRTPxPsx8ugaHfh54h6CWkUfCyaeva1nTFQmuZncEf8V7xsg7PioDpDBmysA5oyGxddd9TRa6YfNc",
  "key2": "654pjqUoQx5HUWAjM4KrXx53URvAtuVDm4m6jQ1xdiNpc5PCe6DYnLJY2PHNvZbCpzrVC9PRhaeakFvcQhugUsmi",
  "key3": "35dohWLuMayGoJ6AciRwboK4p4Hg2ZicvKsFj6dXpdEMz1UoeRt2WowMcLxBA3ehR1B8EFWgCR6DipJKWCDq5oMY",
  "key4": "2Yu3P5avgvf3hAhScYNcafZCsn23CsoasLRyPthx7hrBgkbmKfGnuhHyWRbCxSa6eHLCpo2obCZ7gre8wrxz8yo5",
  "key5": "3TzymjGFMA1MEkdDzupLu8YixXuELCrpr5eDRjdaoKQFLkQCLp9rZHhBE6t8PXCWWRWBWMKQ3d1C86NL1f6vVyDE",
  "key6": "2MfqoDqSaJdtBfRMf6yRSbP6jgBa1TtBeJh5uNQqxWFpKDKWCMkCsG9cB3ZxzUZuf6YJbMHsGc2gtjAvS1f86jJS",
  "key7": "4j5nfta1JcBEpfx9q1RMPLCpAZCM2U9ZK234qdMezVTi1F4E5QWLdoaMs17NBQ6pcAuhS9XUs8n8H8sFmAi9yH74",
  "key8": "4PTy92Y9HBfX5fMMmCcoqv26hAzJnPr7aTkK5xeyJCnVuKahQkujxLEy1BUrKT8smZj19VWLBnmmLBJf2D7QFJZt",
  "key9": "4wij2NnrtAyNX3Za4Vmk9XhsqSzkmQiGCP4kAhahqKkDjR6ht6y9p6e3ae9qwtBWsWyo8fEXJ1c36uVJbxg9yf1c",
  "key10": "49jbRKK7WqFgyRKCB8xi9tcm6Fef6qYgarggXnDxmwBhuiKTHBAikvee1n4BcxeAgQMNhf7fbYXcqs89CE6d59T5",
  "key11": "5GXQvH6x3THCWUPzGA4kwCmzfozVK5Rfd8c3CAcK25EGtuCKsEe9MaSd3BsGiGMbeXKVVBnTJKYW3zTFgkfKjmd3",
  "key12": "2vWNMaJUeF6fnGSu53XWfYYju9NTPGrHKawG336vbY8sdKkb2a6MCkx6kDQvdRferSi5Lywa12rK7AtXDAeV8UGx",
  "key13": "4cPKnVPZJNpvdSDBmWJ2Q5ZSEwtENHWtYoivN27X1R1VzEmBFikjJt8brfdPqQ2abT7MmttSw7LSLgwDJrBECkpa",
  "key14": "5Lba4BPaWeYf8sefo3sWsvkShDm5MJvhFHDH4piryQ7QvKpYs8ApFPzLgaoFfN7ShMvgHoo5xNEd3j7CCJSK86gn",
  "key15": "57MZXA6VpQkV2DH9nkEN7wf7QnJUqHTgU7JCHjrGD63vBEHRwBzoSmUQjW5CeamUt5iiZiDeXbEqnikJ9Jm6XqU4",
  "key16": "2PK9D7yYNXXbhYfP9omaHVhaomwjhMWhmD7jGRFxJN5NS9x4bbUY8zX8mCL7KZX2gpJFhZHD8WWbXWFGWWdwqc56",
  "key17": "25ryvkEwG4K74zaYeHEKtuETyFwP66vXcoUFCkUSiFXTzbNnfEFANSCzUDmhrMd6joyZHe9DuTR47WBoQSYaGUna",
  "key18": "23LxUfDdQb6npgvB72pCyt6unRP8tj5aKcf66qp6w64mKinPHEBrtiZ3ndR2TJcm4MWq13iA3znRFWRxtEFg1tXn",
  "key19": "WaRbYUU9ryChk7KvQLnvrpspE5i8rRUMv7atGCuZemUSjHfxK9EmLXvHkayTFztCsn1FTyFQgeq9wHrxY3hNv3o",
  "key20": "4pXpXmigAxnbzFn3mbsukZc93CHRoZap5eFLUrRSCmZ7nvKSSs23rtMShbkft5mPrLoqkmi4xmkiJnexnaKaPoQa",
  "key21": "5KatmUTdxHAN2Ebu6wuyD1KrZRRxG3zeriBXFqM5EpacCKT4YTVrFFPiaGV3QhqevWC5W5zqijFMSJeujVyPToTv",
  "key22": "5DWCsxpceAxEGBHmrCjETE8QFSQJHfADXw2dQQty6v2cJuHqNbGUcm9Vq6gRdDPgAutwXV152bKkC7MFiF1EuRsP",
  "key23": "2J1od9mWrSTrdo7mquVgANNXCDnLXWeTSRKxbrHyKSqW3LpUBzKkKBiAJpDyBsYkscsZpFLvm3RPmwvtyrhJXGoc",
  "key24": "TEjwGGBX8T1T6Rqu5QZ6y91ZSfUJVYK3dWUMzePHTyLXJUA2hNE5zKB8VnAK2ZyJoo71YnUVMY1w6W3mUSWvCc4",
  "key25": "gDXYhBkrm3sPcFaYPvWd1MMhVGuTDhUm9Ldq8aXYYodEdnr1HCcwf3a61CQJXpCvVBhwTnKTvFbuNnE3V2u2wA8",
  "key26": "5fEt2rSbLgbDtaZKeNXzn8EAHdyEkxtnR444CMMe87CL4FQe958mXxFuwSr8kd5VmV7pk9L43DHxLxoB8pMuGtMY",
  "key27": "5EaXjkX8AEBrg4Scp7jcZM2PL5LaJuRmm1iErMawLUcVG6K8ZqCc3rFLYPipFkHxb3PoNHFQSoyedqxTbfgT87Gn",
  "key28": "38LVawmqfvorzRx34aTkx2sgrjTg8pK8FFrQ5J9yUDHKfCGLELbkiBKdwLue5j8btSwDcHjiT3eMhsSZuvgJb3Qj",
  "key29": "4FsoxbZahZS4tRFMYfJXjoZuPnn44KWyhGz7HjR4C6YmASZ7xE5Cn2HGR9BkLsm4hNcSHMVDa9pqmnCt2ASDcbKM",
  "key30": "3e6DUWs1eb7ZW8x7n3SGEM11hXSUz6Jn1kcgMgAmBzoJ5t4ZQnrP8pgaVneAaSptoQ3pdrymD4Eb2YfyBaaoqAqS",
  "key31": "2hugoLQ6xsx1xy3gr6J5ecFBuTFkFujzNkxdeKwUYYae9qwtJ9DviBwyYamfgrm7pnwTToDJzo6WrFjeiGvNqsD7",
  "key32": "2mV5aF7AbZZZYpB8XNMWRfizcbAVuTeQ3hj7C14jyjaQrWj3DLC58uirYCzUJaHBWfpnHqtX4swCWGuGuQeCvQkE",
  "key33": "3SRCJckdGU5JsPpEGwxD23QtujC3UYwPKBhyHrBAijwonEPbYoXQr71gkgNSCQ1VrTgNfZ8Ug3TgbWcUiZTujSKR",
  "key34": "28gMH6abgaA6TaDSJ5c4fmTY72RXRkmYXaE85M4DDp1rZzEkvRqh3bu9zke5AoKBMm6irDvYAEM9JXunqBhKF8Qv",
  "key35": "5435XaG6RyMY8abesfv8JHyMuuuDcYtrgtUY4ZgVZRvp7jwD7JDpiomMtESUCeDx5VTSkevADuFLm2fGMpCYGdzv",
  "key36": "vhPGhpXLWzCgz4rjbESQnnDkS7f9SytfhDco3cD4VWJQGQaUZzxJnKyas8kaZbc3TYTHmyiDFRLhP4m42X7wure",
  "key37": "4ckHMx9zj8BMnVimzasTc5zs7ynQtpgjgDasADsiWpC7MrEF5Ru9VThtRq6G28QiRFzEGXHsy3zwRm7L5kLZSFrK",
  "key38": "5XojCMqxsjvXSxqfkfxjPHiZCrJq9jx1djXfJHhzLEhaHdUG5mWZNVHuD85KqCrdh8j9krFyRhP5qEZmgLyT9tDr",
  "key39": "5rbgtYjxkjVZRbYhCeTigJ7z19JJEFbUYYLtwL3hoiXYdFE4AHyfkpDpm6Ys5RMyvkiShzGgfTCexSXHuzY2hNQu",
  "key40": "2ajXAcz2PHxdKxmnWwDYRb3mHX3UMpCCEJbwXQ9juAN2H5Y5cLPF9G1CA2jbGS4mP4uvMD39NU4xbFqrLTNxCXUH",
  "key41": "4wtCY1xAQaWSvwoNXSafeY9T6dMPSKV49BcBGAjiEeY828c4JVLXMrEwEupdCgWVmihoNmjVv7kM8aKzGnYBXjZr",
  "key42": "8oJS3nZL8SRFz6JWELeMUyQnZ68exbjH11r3cekWgfwNVVd4PAtVwbxXLxFqAqsy9vGJo36beekp6Tys4Rcn35s",
  "key43": "EjtdCiTasm41zPEHMxFdbuAfrrmZUnEpZS4czkM7ZBUZxAb4gXgWe94oKz5qhtZN1G9eNsHVRuhaGHi4ozAqpsa",
  "key44": "5e7v5S1VRmsCizN8nAAUxUAfMagbMzKqnj8tbgFejqxGcpCJ9nxiwL6YXi5fHy9qFECmHkNzBkyxKNvxq8WGdxQq"
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
