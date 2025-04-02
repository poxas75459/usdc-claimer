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
    "xGVkQd7bkNANVexWbLXm5pRSAnQkwswMqoQk5DzaqGsLUnJZaBb5VxEr3SQMHDwBfnPgacGj1GKq97c86C4mQEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMN99e9avtv1XsU4CK2Dj9jc2Y7HLqXR5StPGbwfmv3YvXResVfA27TYTrAFMwQ8Vc9zU9dt9gsVAXLUxwUzsbn",
  "key1": "2pPBYaHVgZtr2hRzhLm6tSHEnLfeDSCHYfDnnzLZP39gmA5n5KtDFtBqCNbwG3MLAypwNhHzJ2YuEgtsDFgCbPHR",
  "key2": "NqGyb3N7hq7f3THvRLiKtzU6SuLggesEsKfXwYwnTKHXyHizbgNbV2qJFXZyceJtTwQfAUBfF3t5i4CwvtbYts9",
  "key3": "3n8ew24LLuaNyU5PA6G5FQZwD84PfmjcYbScCSLGrwHwJs5vBG872XWv91WL7BQNYjg8hRyLPvJPcKaeyswkA8Zd",
  "key4": "2TEBNpwrFwGeBo9YnxrcWFzz1G1eiTtjYGAMtkSjTvsSZhfv7HYyZUbSYmNhwu5Nz2WxhPtJ8JzqiPbAt9hFcLzq",
  "key5": "5tVqyPwLCzoTEymRrTyRwPpZFp4YQbRiqNyU6PgAB81aQfUUHDpP1WBUtZqesL9sJmVnzh7pZJkExTEkZtDLrHvA",
  "key6": "haQjQ5ePmrpraTejowfW7CPGoQ6GQTuvSL6HebHNTQrmHrhteEXf2FjTW1ixhT6xiykzEPDxT9hm4RLb9dNkRup",
  "key7": "3jqY2CVMLd4VxTzaZnzbhgjx6QJGdcvBpYHRX4iA2SHtzAVdH6w3ZEQKjSwjLNoqKdcLo19nnwccPyeSTJh8c5Ha",
  "key8": "43DLUUPdgrW9Xnmhebs1DssDCTgSUNjaqvQ4Kz2HQ9VYPk41UYZonFzPzbbcmaX8UnrkZWXE8biTQbQexgRPP26S",
  "key9": "3qTXVQVKA5jCz6rmJkQb5EBSQekgKwdPHLD1z92YiV4LbgXFcwZuSMbhmUar8UrjcfExpedYFYFY6VZ7Z149Xx74",
  "key10": "524FgeSPpXf9UzDsAXi61MZDN5SjwHFXaZ55jJee1wp64mog89CHM96zBs85mVoikQ31GqSVeVPr3MRkXBzV2uHo",
  "key11": "3BiBrksGEh18JVYbms6kNQNgcs5nB6werFHKi2T7FixtehiVUqVnxcsDU9sVEu7Nb7G4sWNV14XuPeGR2kgjmsGR",
  "key12": "uYcgaGRWJckHkRGrrzYoCwujUcdkWKqXKv6d2FhkYKfPGfqnsEDFwhFDwFMU9aDfPNDWh2ZDMWFZfNEnPUF3qmL",
  "key13": "2xY3rMNviJJfxnTJhDQuqZfxUWcPdRLfTfDXo5Rt8FKrkcnu1xqiRCarFYmeF4MoxFNwXAGM7T3xQfPB1RZqs3oc",
  "key14": "4SaRCpB9FhLhsteQAVDVsj94Ku86aDb69Kn2db1J9Bi9SjUJM7PMGvZTXU7ATZLVeTffoxtzSwaHPNKKResuBC4P",
  "key15": "3Lt38NKZm95x2B9wnH1D2owGXaV27ANuZBtkM72jKP7Xeb6QgEHEjAnGwzf115o98hg2KcTvW6Ajaj6SK5wrzSZp",
  "key16": "3WkCKzLNUguE48PApX2YM9WFgx9z4TVHDQ33honTHkZ7mvim9m5kQX4coDd3eLstwfqrAqQqoqRHhwBApWyN3eBr",
  "key17": "59cTqMRK4Vws1BqdquzbBvN6w6S4s6jbd8Yanw59d5QuoYmbZiJBogfBtNsC2SfK8naQ25nMM4jEJZW8b5DFr2BM",
  "key18": "NZLFcJGbjjtZDg2hFSCduGNMZ7NH2Fb8qVzb5PgYbZBKSLTSGHKzFhxggfM7rSadUmHCyBr11Nbf99sU1DWkye3",
  "key19": "4QiQYThRNrnwbZaSxDvMrUJmpHjjMMEpT7u5zHCuRnNimbo1k9KZ6pVjqVzNyTQBaK4JHghCA3qMMRSdgHnNrfBe",
  "key20": "2dxuK2Mmq2sb4esmT54Um4QFs1anK9jMcnknqeXeRBzoBmHJ4iFeMdMVRnpNBiYbeLY3KX72ws7KiGskc9HZttjm",
  "key21": "5pGZEdGv3vGEmFzBLrXRAPczmqNst5UjTCjPdiqEtaLRFm9LZyP9hmjAieaKmbvLLWMtP2FhrkQr95HcDzEvmBgK",
  "key22": "hrSiCjLvvnXHnkGkoXtkMxujjDhj8EenyWRdamqp3cGQ8MZ2EtyuvQBEk12XRXeFnHfbd99nh1DekN6kaegSVbr",
  "key23": "4YEuHBkJokhVYuab8AatGiFZHfATtJc4H1Cftn6puYsn543rbrRrVGdidY2LFzpZgKLg5KW9qCNwR9Uqa1ErXwro",
  "key24": "5YVdcHhquDvvtpjz4KPewyy1srNETvz8qBKMraonJGPhY562DZgh7ZV9aPt3ahjTsXaeSUK9VdQcLStCsWE5dGk3",
  "key25": "2C6zkeRQfvZcSNswQ11YErYeAdejnNqh5f2offizECgZ8Yy38WSmLVVgfTNqNRe9EJvDGA3s4M4BoBTBADBud3bG",
  "key26": "4zd1DBEtarPJBk7C9K6v1Pm9qqgtQmPowKY3wm1ck3RJWUxfQtuJRYDjc4asfY9RRuBBzQduKDT4Zoxmvzu9vyNr",
  "key27": "2x3qu9zSQGitUF7VYKCDTPfHFnkaWCTE95MTvYXyzYQhH2TghBTLcHq5aZi9du8y689gyztEf86z5NaUa8dkzLux"
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
