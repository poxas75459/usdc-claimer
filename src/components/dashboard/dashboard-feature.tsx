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
    "4c9thWkTCKwCRmnXpcTL4XPGmxWxtsRSP2xAi34ux8ctTArgdjU813ajPTkjjbcmGBZfPhmdjXiDwTNGfjZH3umJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YkfGKnU8jKKwCXsy6kBZMYGGNSiUexg4xyYRQaz5vjuuAuww5WA6feGYVF929qwwt3UDrQZ255seNSDsqUWtYvC",
  "key1": "5dSMVTSAuLH8PVn2NA2RaNpGvW6CHaz2KzBXHNtuhPMaNsPBzxSrmMmFB5MaLwZkWRbfmVyzZdWBwAVLgpEG6zM",
  "key2": "sghfY9pKTHqQeEm9P7ZsSZ6wTXFq8f9jgCWqfvjBp1CAF88v67UnvtN4WFt8Zb5auJppVh8AgeyKFBh2wTvvKQE",
  "key3": "5nAqyBDinteiMeRcnUqbcUf7VcsfMEURg5wtkinbL7mygztAP8ZqrHEnzPBCcZYpNXBBa7NWCuU8hCWYFqLeJ8i1",
  "key4": "3oeuskR5fNdnpAdrhVsErvC5zZKPA8yLmi4v3KT6HUpgkxVAHc3istjoT4NEZUEjLTPCHDezo5HP1HA7FBTUmWWa",
  "key5": "3yw7Bk7LMKu7kssX3arHcX6cbi9z89v5o8zgkXReLHoeJ3rkSX4xU1g2tdpmHTbH8t9BfcXxNZTHd6gC2TVNbz6K",
  "key6": "Jdgx9rkTULHgUMs8mpSsbtqRrtopFN39dXs4xdiJx2JHk2Z3vDCtnwGaaW4xvNbXiiVwju1vcRggjz2mpKKzCiX",
  "key7": "3xzdrfGgKqCzZFTEyz5SkhZsZ49QZR8NtU93UnqmyDEGbC7JwqMBennHjobgDd2RoKTtXvPj3HE8uzfTanWyjMWW",
  "key8": "3SLwtUE5eDxYp7wLMBfR4Vf1ok2tMBaRwE4E31kX6bcdvUpg9PM6jxDLsHefY4MEsh8msuCyPtaKMVzhzHuPkMfA",
  "key9": "3TG3DJzF4gQUnAum7FNw7VDAkGwkTxf2DFk9AQ7TfWozv4EfnxdhHA5SDCh4oqePTjvxFYauqYbQcsnM6C2pTfwR",
  "key10": "2R2dDQidTPjWWf9mfiFckCQ2Qgrf1o3AGS5f1bFEZT4jm8VE1BsYScdECAEKkETFeJ5YVAFozVU4LfyBM5kAEyTb",
  "key11": "2o2iMkrKQgsubNRWxZYrVNn7iF6MjRyAHawxn1LNQDetLKcyFVcLKYZrZFhCjeZjxnKAQbw8ZtCQuDUQxLrUN6oS",
  "key12": "G7UyuH3sWWw3hJEZ1yassVQkf4S7x6vCEG4TnNs1pDckv56cpSLZW32ffLDwAiodESwCK5s933Z7JNMotZaoU4y",
  "key13": "4Kgdv6oSQiVau92bvjAjtDmprmf6pRxbV6x91kgCk9oWzD1TgmD8a4GyATjWLczZLWq3Y2iy7FcuZdQnTbTMdajA",
  "key14": "65bBGBsPMKnWifSYwrDCiQNTSi26Bw7MJrBy1N1Giwgas8yoA6fvA7F2gTPZY9nmbgCk8kdMyXBko2gNKWAxAcdS",
  "key15": "AWybUVgcimixwWr2xhEWaoPkHaDaUPXHj97rGcXhSS5NvS4hkXzixDCvf2HhrxeCknoCEbU1D1syNcBZWcDZ4KZ",
  "key16": "E2f8Cze3a8zzk4bSVwFo19zU8Dxfe6evUmPpTCoh2EePM1su3JjW3TX1jHKFsoWq5oX4BjZ4H8tmhiAcHwznHQf",
  "key17": "4icYQaxxiqmRiZNVbDgDRjHNnYULcZ1Mymz2Dh46k6FY3iEirNo3xVoUwQy14XMsVNYeeJH3CDX3wR5GTrXBSDnz",
  "key18": "26vCGyMxfF3N3FMF8CXpoH2SqyhkPFTM93TRhzYaWZ8PM4r2Q5zV9ze9BJ4R2QX4HFoyv3Rrcc74NqQRozoEREUh",
  "key19": "26chrntKYpeYSn9hAHreJDECV66HUHisSQpyDnHqG5j7UNxBPmjnvBcJ2iaAkcNBTw191eizLx4Y71wLwDXazx4m",
  "key20": "3LcJ1gYNjJEY9NzkxJRufYayu6XEHZjDWoUH46mRnWgXfXH2vrG5F1Ra9fxqAniWrALCtX4QeTE4KTtqCbpTGpj",
  "key21": "5LvW47f4JKrZwTB7G7enwn3Cru9ZibdSkwePEpbs4nAAM7oP6veaG8X4GqPoyeouZfoQdTL3nsyJBeoN8pBLoQVc",
  "key22": "64ZRoLgdrYtL7ksQzX3n4fGhmsxN1PiTpBNAu14TDdNAZK8u8hWciHPdgz5Rn4tmTPcbJLL47gfPmbHes9TWDgMz",
  "key23": "3gMZhq2q7WqLeq5yqHPe3X28PYVqZq7roe67qSLKM9pmJh4DD7tpgX6uPj3gCHUAh2gxYpJEngiAfsa8oVVSAimR",
  "key24": "3ihP62YiWLVRHymWdS59XKj1q46V2g44pHf6p4RkhHGD8aSufGMGc31JezTBNyHccygKyMKvmCjRonwxGk8t6Ex7",
  "key25": "65UgwTXTBP7vjqMRSXPHUWufHukZum61oL9QepK1Joe6XdfQc2nsKRPGaLZRHLB8jBiB9oBj5vq5xomCfjysoWMd",
  "key26": "4P3GL6FnQ1U7cVn71UnSGccUGvEx27iKvbLcS4qk5PibHdXdrCwiUzscxmGGmBFTKtg4PYggannqPrpGK15z75QP",
  "key27": "3ytRk9pcnzwGAo6H8VArvy8LQEBz5TQQhPZtNbuYpYyqRf7JUjQpsoa9ThCbHbDf5dse5dfVDgBxmscM8srptYNh"
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
