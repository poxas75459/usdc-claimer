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
    "56Xz3KsXDXsSgKgy3vFDUVXuTForNXNDS7mCb4fxW5XdEjjfnLbapmDmBLnQWhxrp4pdDD2boTP52fgwpwx4NgcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q1PiUT3MQHSVc57AYGEUMYPZp7niwe7YmzKfdGfSJXkr1Br1E2JMu7GigMKuS5WLFDnQoiJ3VWUvELmBRmP3GQb",
  "key1": "tbEH7e16uFtyXo3S2NFoA3TU3iMABxG8DmtwVuShvsbCcwxWdsAeAcnQNwEgV4z33JqENfppKdzeDFagchiz6Vz",
  "key2": "4J2b5rd7txsYxkvnLdFPLxdAyHYRa9CiSkUrz8dV6JmroGUEt87vStxXBP9RUG5a66q4kPBuf4HV3fugp6Ww76Kq",
  "key3": "4kLZ4GtNtNBxVfWLDvcZV4hVfUiGKpJF16VVo1VZAEuegUSA7yqCTkyJjPhLwriSuBLMYjxB2er7RtGVh4cS1Nj3",
  "key4": "4EaMVVbTrg6QicLhLqKZWZEfaFBvyiWfQL2b73X3rFGphfDH4wqsYKThQY4op7EC63un6xu7gmgVy76TeqDWWE9i",
  "key5": "4nxisBcsfsiM5AktfVa4f5ptgrvMWqGzrC1e8YiB2awTZ7NGUUbWG874ihhmuweR216KdjTgRqu1ahq1z62CMFfD",
  "key6": "3XkdFPHnusxX4r8R6WQju9VVGSKkrni1nQUL3r8bw1QLhnHoZdRU8zCycZpK4jcdwaPX24fVSSxkmZmDc7au3FhN",
  "key7": "4oE538ZvxGv4c4FBptYG6V5GjRQFpgCMgcDk2eJipMTFD7d96BwwCSznreoZxZYA8YCTKR6TWETHF2AzeMMqzfHW",
  "key8": "32mUCqY9QYbbQ3B9JXBmucBLno7DTZxtf76bZiSvidov5JkuRtPP8pvkdgro75h5PpGATbSe5CeenSx7xijQ8kaD",
  "key9": "2HASWKKD6gaViokuajiUd6CPHxJKU4r9YVFJMWj5nK4Fb5XCMZhb8VZyeeg5HcZoz9oJBjpPcp4GUjtLFLDgzc4b",
  "key10": "3FXJ6HYRneRK14WGxckWUDi3embcxD7s9RckJNEAeiTRjNcErppkAqMHPioWVEaZTCRD5wZAGawFC2Gan99p6CH4",
  "key11": "22iwL45Cn6N2RnE9uEkwtbSANxJzWum7pu7j6YXD5Yw67PmDt4x2mwKA6SMuJczejrNxKrFxyZkWRENsnmsxucLP",
  "key12": "5uwaZWzu3ZGSBPjJ3mHEgRg3BN4XoubjfGz8A8DX7u4gx4HadUXcBW5XcL2fq7bKiXqwKRp31zh58LdwFk6njEAL",
  "key13": "3CC4y3S8CDyUdfoQk96EvkZ8DyerpwKgA2gPJgDdMFBa2MXbEtVENYjqp4boVM7gtYgehvNxiGc9zdc1FrDydQst",
  "key14": "24oC5HiacEU5M1ovZVBviycLLvJAMfJjqYMoo9cdtqYuDET6CiUtkK3SosxM1rBNyMZ2cL7QLkihbXgMYPboz9em",
  "key15": "2Ev6xueRmvjg2MqxDhPMTun2n78CevzmcnooHXu1t3QXkkqERAyL5JZiM2sWxmzEGUuLV2QtvLSConNQuvtkXHeU",
  "key16": "3VgesusiowMJ4VYsbfAKCTQWX6bxShQ2rn64ExFaut6YpjPGYXuvmJg6pAerXGrQD4cw4wSmkbKo6sZ8xCWAykeg",
  "key17": "39nc8arJRoWuDvawFSLuTEhG1h3LxZz219omovYeoT8B69u2UupHTuRWQ9dzGpcFtJs6BvBxnbif68tKyLYqcHok",
  "key18": "5sgr4e435HNxEJY6acvoqDz7H1GvQzkh3dyZWrQFv8nvrDTp7E8s1nCuCFN2BWoaCNMFkwVNEwHLtZTW6f7GATde",
  "key19": "2sQNCBVxRhJd75KERNbHTVCrRVDH2Jgkr6GeDpnTBuvDi8PEnov3Ejo6qFEfmZAkrYG692mCF9qYKD2dr76bc5Nd",
  "key20": "3444QvaUUHXTeM47B3A1EVwZMNmCAaobVApbuN8F6nibu12ZNns8CNVSDkr1TpYkxXEvxarmAdQrzKPjHKS8HGkW",
  "key21": "2XodwMPWrh4FMZQaxyeagEpAPNgmTkfPP7dKC4MjkRgAYubVxnpGgDPZA4n3Bd2QEN2UCnoKFJoHwuaGfgJpGkv4",
  "key22": "5VJBHrMkLG4VGB7JL9qPNpaa1NzMhHkU3Jn6f8t7YfycFVpTUdxJ9bF3G3KM1knNB17hkiwjZ272RABxstpKfrQX",
  "key23": "423ERQtbkEnPPLCb1fcfv2FaXedZbVAkrce3t3QBZjLfd8ryFGf8ZMuqx9jUwtXNZPkx7YWPFtygHSvaMLRpb6jq",
  "key24": "eVgmJ7m1bY55e65pJNmigfz9o1BCcQbqHwQxDNtqeHp9exX783MmRjmu8teKuSXjJ7GDvpLx7UUKZhgkSP2diHY",
  "key25": "5rJSt2395yVHJjMCpNkpFnAJKinxNDSRXGXc5PYeZyrwneS49eadfaC8BMJkYMgSHsAGPZ7eqh7Mx5Y1Yo28WTuL",
  "key26": "3DhfvmCdWxMSNi5RJm7YiGG7v9uHStdLCzsG1euZAckaujJjWSJFxqAqM3e7Wk6A4vrJwALgLniuCQyUvPY87txj",
  "key27": "4bqSrqV9ZZWJ7L8prwy9tt1QoWfdppKoQDoVK3TM31c2F9QBF2WdnmT3RxyfSzv4G4bQVK3eXMFmcSELSqnXxVGx"
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
