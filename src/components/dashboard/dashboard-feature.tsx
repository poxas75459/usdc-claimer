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
    "Hj6LE3ow5XTV4VwYpSb5Jc89yFgZUgJVWGJs1HMmSywPzHwQPdjfHKLv8qJqCuNMSX2Ss8TfcTLnDvRjgXpCp4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AHPFxAJ4FFUUj2zqHXjKqkpDgK2RykbkSWq3Z671stdyPNdPNyUKGvdUmfqbNjheJQPR9b2j8swQA9SpT6q8zp8",
  "key1": "XwWPBQwiPhH2TsPRWbJVPuXQbUwQJ7kPvkF3N1MHbsE4MTPaUP8qa9PxrdsKTJrTwPWgt5fteYX9nGsbkixy2nx",
  "key2": "4TgEcz1Gjmt6gzxVr2Fh94Q7tTfZaN63uPdJVuKMz7uH5Dk6WPrp6T76Q2db1MuvsfqWrfjD7C19XySFVPPAmF2E",
  "key3": "5zFAtCYP6RRDZM4S6MATnDxsPbP8Q65rhiedGG47TL1Q3EY5i2NjyES52koNWVaX1L7PzRNpr2KhjDJaGoX4573b",
  "key4": "2GKsSyXnoeg4v1YaXsiaLJNrpozVTn1e6WogWV6J8NyZxty9dPpMNxetVHFQpwns7bCcoZq9LJfQ6RRGph3E5tNp",
  "key5": "535XqfVGeiuoUJWG7fJppG3gRkjrxBVpQZ5iQNtJJAPGwqh4Y7SQ2quoRYM4xsgZoQem9SRx6swKeQQzp7YdvP3Y",
  "key6": "4wf8PyRXfWEUVfT8ZC5LPmM2SSBKTK5dwm6EhB7q6zpz7WD7LN9dr4At43bJ4KTzsJXZBvZ4UqGGKSNEYDTynotg",
  "key7": "46s17SA7JPbT8zmM2MaNswKjbxti71W5Cb5UP8zpqZUFDhmAzJVKxAJa5xprXvppHfpfHx88yLgqyot6guJD3aT8",
  "key8": "2nNX8MC5nxL7YZumt3SbeyTKTLtR3uTPbbEJzFMZgyavHcFQ3ncdXDkCqy7t9W9UwyNecig8n3pWxawEkmibFEJL",
  "key9": "3MxCruU1coztPPQudprCLNZS3BtCnLwuasu7G7YZhV9ZUqqT1ykRDpew9BN8WxN68ZYvFfPenLX6i86UGu7EmnLL",
  "key10": "33iZG4exwhXzvy23u4sxcKRXMwNGa1ZQXFCB2GutzQHenJW5xKksneZ8tsXvQkRnH4zvMVcKuuRTqGpEzxpQZgyz",
  "key11": "3KDhNGLrCWUq5t8WrxqnbXhpcQZVZrosnkwhRbzbvvWPpBA6rPc5Gr6f6T1kZATZdgEZXdY13Vwq5KZXfTFS3pgN",
  "key12": "2oanH9fC7MnBdMQhqjAChBPPaa6pWNKiQK8xdg9DRsZKBmYgH5mssm6VdeJctohmYDHmE1U6K2cR1D4SuDvtzG29",
  "key13": "3jCuB3JS3TiBG6vZP9G41qbeQdbkBkhzgxS6Xng8ZR3dnJSt5JQGHrdT3jqaod7KavVkiBuDoEX8MzUay3BHbEB5",
  "key14": "QPKThwK5BTWFNfZJFYuioxVwVZDadMsj33Dt7EF4EZ9w6Q787uPBynE2bshdgZbbTUV6hiNrANJjtPGMAh6nh5u",
  "key15": "5w8BUzbydM6MinvPBJTUHig5qY5wExcChi9j7KH5R98KsD9BFXTGFrwYag8utv1wCLjvbodFyW9bja5VDSu9iw3M",
  "key16": "2aZXkXae53e2uNAoVDVmv5QnkWXiBnoVDtzLkk3CBL9s8mzV7tTg2VdT37CgUYuj4MNguREFrjbwJEnYpsCSbg6z",
  "key17": "nShuz16wJ3QA36wY7uA2YgUVEmJw1hdbH8eDufmthgzcwKDELepvSJnGL5BRipQcMo9bj9BLojvcMCPdAo4Y4pN",
  "key18": "2eZkCpGwcfZ8Nc1GHZSrGsMfA4BUdmfqLNsWB6VgaSDcowEAGRLpLbqUFCLfGJfzkSLZQNn7u3WAwc6z7Nf7PmnM",
  "key19": "3YsPdekuYhaF8ScTPVZUzmAMiewzQV9ZP2hLxXw4DgEct97Mpr3emRG8phkSkjuMY5h4CDPoEP2Ru6J3djbVqVXp",
  "key20": "3ht69a2J1tgNpTcPw4D2VhJJTEpYPmigEh7t1HwLhWEKVHjX2CHwpgmkopkBDqwBFLBcVFXyc4ZLG6xUuFwgLG46",
  "key21": "39ybvzM7G8zUDFocMsVAQUWP36rq23JGvWHmZNP45Cf5g2SVVV5g4cWCbpiy3E2xnWSxKYjFUkr3tPVRm3nUMUH1",
  "key22": "4Wo7d8rcGFiqWa8E6HdU1xTrhi4JaELpTdpx577KEc1xFy1EEmP7zQnd74Z2mQvjL1SyDpnLWykh3AbwAaMaM4HZ",
  "key23": "3gar6wRKCaFdD1TmVwoZ9NtUuTxc22niZ9bdPfeWPGrorU4dYcJAByEwsfS3NUbqkWg2VBn1sJ2divKaRsKjdd94",
  "key24": "3S9HZKh9a2gVRcahnD8nKs8x4fY5Y17wpDHELAg2GnNijPoTLWcxiWpdqzTRfedT3JZaKWQJdemKskfMK5nrxVaF",
  "key25": "4oraDMAvgu69sbeQdNBuukDfWnU4y1Gwi7bWe3fEAfEvBaSaJ8t3L4nMB7Knwn9jfKWtYLoNqAFxyVTrAXqpHyK7",
  "key26": "BL5jJaZrHhgHmvq4crf5iEaeyryMG9Yut6PvVqZ8nKWhALRvdmurZSxeR2kav2TyBR6d6FhVMeyKkA25JjCkBjs",
  "key27": "3tdNM7c5b2ePjRjbHtSJgj3dnryaXsyrpcada56LwM7MAmFx46DqVfmCu6Em1gA7zYK5rP49Maa3GxSc36tHyyuY",
  "key28": "4wrqJLMCvz5z55eYHyeeavGMAjZNufUKMKSGzKfwtE5A1JxAr5tZkBBKSNY64VcptLQeEE4SkZDzmiM5EFSce8wc",
  "key29": "25xpbvWfjcCb7Yqaiw9xCJtrCJguayeqSBoNohVWFV742tE6MgRu8AJS8yea9YiDMgWJDGLAh4dqmaoKNuxLwrKC",
  "key30": "59HdWRYzt848BxLuZ5nMnE1vkjxsq9e1j271LuSBomKJcCtuuw8cdHvtqXVE5eU76zjfMaUdTcv17SALDYJtAtuC",
  "key31": "2W75FiDDsCsuqrny39SDULmGnxsd7NmreCChYRAdd2X5ATw3ckQC2bLMzPs2pWxHJ3Xyv7n9fn8tZzYwcrqpB1wv",
  "key32": "67eg3gXSLuik53QJBHzWPV1KG3SfNuqqJQ6ygrXpPCXAhgicDVX98D5ZYmLMKxS4HdpKv9HcVrVfB2VuksPsacJi"
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
