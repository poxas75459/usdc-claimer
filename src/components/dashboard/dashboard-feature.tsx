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
    "26VrtZo5AJw2axhzoc38vCbF9yqLxgDD5tvDc4GG38DsAu12JvtVZKYUfrY5tx6K73zAqqaUYBC51g21Ae3z9Ja7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2unRo6WKFwjHN2ht7sWrGuTtXPi5Edgyo7CiVEcgQJMTHXhzL5tMfMmxutggpnnXCdVKSj5WGneJexV7sTm6pwZh",
  "key1": "2ZpFYzWvbeobeAFjrAwiXL2NX4Y9iZaU8UBpXb4xBMd6LwhT26BRBQHmZUazMNP9xoFMvpQNoVBLDn6rNMQntyX9",
  "key2": "2DXBjMkDVdKiv8KmyoQe2mtTGkp56pqFsyWYzEwPvKtsryzKZSbG75iRj9uPtFCFMgS1S1jHNnjXYKzop3un9Mkh",
  "key3": "3QthEu9CskXRdtjsNJtZ6gALtVHmTcVUWTLFPFJVnnFVVinB427jumAtz9pzHsakfrY3CeiVBbGmxfcahMQyppvy",
  "key4": "3AkjYsTp29qtLDKNAf5D7976JJKca43YoqHSZtDtEDLjjEKhApKw9z8Fn5Z3ZigwkT3QVP5uekVUJXLh1VMQFi9d",
  "key5": "45Ahr8iU1ztctB3g9hKMGCYELZAttUwxPK6fy8dyFFpSMFd9NZtyGK1MkQsfDZi4dUFwpE87PcdZdRhEWh8jJBEZ",
  "key6": "5PVL3wchaeKXmRn3e1WPmRRrivMbGbPczoJ1LPrhHgDJnopPLabcwSiVhs9WFfYLykzP8avEZiWg3Y2wseia1ssm",
  "key7": "v3yJS76Xu78duxZMiLjTxQNsazQkjVq7duMWA3mKCDMTPqCRFFJrHzCSwxMXQ9BogKjQtdTx7E3jEmpcd5r1eXF",
  "key8": "21TnpcqezEwh3vEY81Z7cUpoZarW34L5V2ZkL7kE1hQMuFnG9cYxp5FWmvhZ7UyTTtJKEwF5fuhKdNTD1bSTugpW",
  "key9": "4qR7t8APp7ZvxEDdokSYsV79EtnVHvGDRvV5nzJCBm5zNS8ZVkyowJaDcLp56mbAvHGi8uSvZJYFZ9Butmf8MFNp",
  "key10": "3wm42iFXjXwjRn2JyNZT2kEPV9vacgD7uR351vV64yq6NGsczpKDnZ68EKcJn5ZAnQrnJ67AoJx4UxLqZrq2qkmn",
  "key11": "1dAxJGq2FfNUSHUrw7LkfHkcHf82ZAWzZVwn9sPUbFe9RbcckSqvGmtPDk3jkEPvGM74G5DhfDXvk6fDwQwB311",
  "key12": "5eRAuyxKqrpEcggYEcaW794rP9wqUmG3ihTRF7rYb5hrYYezPGe58rgPY3iHNa9DY1vjvtekhUnjaJuKpHpgK6Bh",
  "key13": "3bLNx9btmyoPK2mcdjLeyr7amjwzkQTTEhWbcPRFkyEyT19XZBByRL2mEydMAwTP2a3PKLKABDLeZgNc2JUx3Akm",
  "key14": "5acp3de8iWguwBYFYJHzcMLmA6epkXVq2ewokZoMDKvqTDZ2RnKzphkiQYpkBkBG5u6RFXCzzYxfzNBYfCSWVGz1",
  "key15": "56Usk9W7DLVzgDfQo8Jm6NxMpJTRTuKTR7S7gfvtfN3KcrmgHNf6RHWu4XJS56yAmV5XuFNhetz6f5dTbL9HLizR",
  "key16": "2xgsgkW1MmoKfSBhAiiuzxuhPBCCBm9p7cpwnyJ8rY9Lv1tDcZ5GM6vnNySLkYQB4PK2CLESHVDMkiSN3ehtHqnG",
  "key17": "3JdmBhsNZgryjWnz8L5Bifr3FimnKJqnMPtmugeGa1gCnvMRDNUJGEpapQhdVnCyKQuPJr142YJvKSaNQxscoQS4",
  "key18": "2aerAhPor6JdTg48XGBewcKPpEFw5dM9pWBcKhsgTpiZNyd4qTbj1FEM5e2jg8KBoNutyDqGsK1dqWaqJ6cwPoeK",
  "key19": "2tqsZviusscgUnRsAGyDnLF13i1HRs4NYUcsupMd3NBNS2erBjtTC9GLtP6ZGcHxjjPEVA2GS9QkSPVJN9Ns5e6B",
  "key20": "2hXFkRYHj6LbgzFKb5Dphayh43ZmrEKP3b2ZBhh4c6QhKxAB3rXgfijqGYY6ndpcCkwGF1b3ChsPNdzqZog3oNeg",
  "key21": "2AVF6f4N3xY3C2Pp2WEXWNtqnutMJSqmATbWgR1dMxAVUz6hY6iZXNxcnLF2TPRM58UBSkFKaEedtS6AT6uu7hW6",
  "key22": "3fLA5CJgDMf94eWzuWpREJFx4RTDsBHFR3DuVqD92QSMoMjyXj6WPGqpshFwixaXHAKcSb2qgFwCiS8NborBZAnF",
  "key23": "QztZEG3JRA2CSCa32po3FkbstBxXpzCbY5RWRvuNj72th5aSg6tZr5ED7BgtUUcDxmwPxq2B6iSf1v2ZfFFfA7e",
  "key24": "4b4wqFvf4vzcP82nQKVgBj7H7wTAx9wNdJeVsQkazvGGCFn5MiRvLJd3apCUxSzebf36HeV2fgzCp5JvckFDe2Tm",
  "key25": "4VynqYynGEfLt3ZgnF6NjLqejz6M8QTUtPNeWFsLvB7PNPDAif5hKqfRdAuPWWeN3o2Zpgi2FZajqNMiAV546k2L",
  "key26": "2GoXxr15kmcucAoQsANxK77kV7wPMtnBFg5P5Ms2RoiYuehygDCX68vqG9tJp4NCCXdR7Fgp66Sh1foLGaUv6pWW",
  "key27": "5j9MzkLo9WEULQtf2o9D3zEci2gmfi9nDvivHAjwQFPY46RxJKbV5wNToaDktbkT2q2s2E6dddBXeLrGWLeiSLuS",
  "key28": "62d4PPYpwRj7YfruWkegJDK7wU2w721QRKJPy1spa95C1Nx2k7vPcpzLJHRhCUfHteN9uygt1Tw9JoMZb1GPQg8J",
  "key29": "4V7k36nJbgm1MeRadgzodNWzxT4oxVkrtDTpwuHv8T9syNcH3wyn6umnaXDTyQb3mUFkhSF5q76KNySgfHz1CbmH",
  "key30": "5ozzbcg6H51vKEyvqxw5PwvPuqKrtUbzXuX644HsHfS7wUxMYpLXnyxLjZsAA8YtAvJ4M1ehPNVurnfJaNAP4Zez",
  "key31": "2KsfabL1wLJmNFqhA1qQVAkHhJpGK3VK6QLsSkRDpqrFFctKEgt2NnKJgEzHzQ19Tn142XX4kUXQG9pYvJEapVVK",
  "key32": "49WZ58HksnRkUZa1hGsY2WGqrtB1ZPEaPixuVDbGtTeHLswJeXhZ73mHKb6RJRruEducCJqJMWUCKZ9z9Aa6nwX7",
  "key33": "23Dv9TzCMwrvdFTPvHTnaQynHxgMgqPyDWfYBsfvZECDKEYustMqb8p2ntXfV3L718HWYXLT9j3ny2iGWBsjK16Q",
  "key34": "5aYmg8fJ9tq3sdtDugbLacCPFRk6iZPDYw85e5nZ9SpniGSv8v8654LUx9rBpEAQ3QSWPFD9pD4kbgrT15T4nsKn",
  "key35": "3ubtApodRVDqgCQ6xhMqpkgBvRLVsjX2nF3zU3ZrBgZFiNWY6RxbezWwryA2KGX4cWnZJk6p6WP9LXV7DD2JNMGL",
  "key36": "3fReDUFBkuP2FkLVr4dqxfcNTaE4tTrfpXh3zh4iWpwtpVyBipReZsbGSXrCEACZtKnwvHqwAPRqu3giqaYmf6Ls"
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
