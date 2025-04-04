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
    "4nQaaJ4WpnBEAyeGe9ARA87AeDs1xGPZGaX8P72hkRENj7vj6tz76V7CLyf2i39dA1jkvyHTfi5ydv9EMDahhRcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4735nj4q4RBk4XUZYekPK8t2Bmsfogyn9STuWCLyBe94T7eWL2ovVTNZyLhix6H7fRksitqfjNZBTAANp54e89DY",
  "key1": "3h8JZKXFxM5o7X9cZr6R7H6PYkMMYcbeQMPSxiGL4kfnkm54XJWNWKnXvT7P8jzfuAqP2JTqyU8bPQk2z4mjDz9w",
  "key2": "ESZzgHVTBncAJBevSbXPz2Dh2B6FjtpX5s8DubAZPE24ZRuEoMJKnwSeyp7o198EprTTHQtiJn7QbKvqrzYYkn2",
  "key3": "5oLNc34ybHgFPv7F1Ye85X7WsCtM3PccsSVUAEb89UEpkwFhkDSPshvbNWPCJap6AKNe7vNJaYAe6ys17FvbP7Dj",
  "key4": "GA3WaMqcmavCN4BbL95EqrkeXo33hS6TN53SGdEcEJ3KoGPyMx22zfBbSJAy7ii5PEFAMcjSuq43ak5DTdXAgBb",
  "key5": "2y7ZpK3HPfTfirF7w1pddb6295cHauXd5KfpHqEobcq63tRCjNPtgEpdCaDb1wk5h2CvgPUhjgkXq1n9E2za8sx8",
  "key6": "3ccS3jZ6Z5JYnqRov8fYGese7YZ5k8LbVwrukht1nSuRbrDrDgQ5EVhyq5YNvmgvyB6eeX97qfrfn4NqZEkToHgE",
  "key7": "2f7CSuMVgQ2ysTTogi3adwKvRRCWYGNPiu12LHK4JjYhhTRpaUp3c128P8Wvy2bSFz4edJNvCBqPdUfA28ijqVao",
  "key8": "2cYC1VQ7UkEPeY795yoa8saGxPKHL2EEufbDR4GXL3pVVBdFbvZ4h4yGJ8f5o6MJ65ZWJA7MEK17V1TThJhNPNS4",
  "key9": "46tpVsV8DvTytvuqdMsBJKGWdoLW8i63QMBNR2srRFTZsmkpjSM4hafbDwBWwx6FrCQeUiSviiLo98PGWXr3eUXk",
  "key10": "4m5DMyn1X41xRuGMJsage1vbX2jcQjXZohxP6DmqFMveVdSU9pbKiusvpEux11UiwXX2cj1AEQqHEeKwiiJmxwWp",
  "key11": "26T92SfU2YPUfPBtJgLkU9aas32ANWfV5wKNZPibD6rQR21yvqMfEpDfT6kAFkkgyitP9tA3m1h6rpSpsrz7yX9g",
  "key12": "5ce29oCg4a4M1zEXbNDTAEiwtzdwmEPoXeTup7ouyZk9D2Dt5PvNRFyokHcjArp4ssRgduyEHou3vG6VsZMk3xwy",
  "key13": "8qoyHn5BYvc2HQxxnyG2WdMp1QnZs7KTaFXDHdrMEPmR2adq2Qfydmhe1UT2nek5Cp2fmaNipEqR7e6CJ1yxQaf",
  "key14": "5k4m5HKPUQw5LGYQUFAXBwjmuqRuSaPhAL6jATVRvcDGhsHGfTxXE8a4jw8ysfSofNAB54h2YZKRsNhdJsCGnEKT",
  "key15": "5TN6mzk5rc6LnYcHzcC8SrCjdr4F8r39ZkuifgKCsYmvacLUXsRYfGtwzFwJaPA66ge9gsoeF4AVRZLgLssJ9bGa",
  "key16": "k8biozwXJV8NbchLZNCHNA2YDZm35qoGfD519q5a5TZCyifT8D81xsnj61FgLNMFMYQ6g68hzMEKpvwx24EFMgT",
  "key17": "4b5MqXN3WrXFMA1HEusRLuDwyG8a8DvrxKBnSWF3mUwgr8K8tqYz8THwxZQdHoogXPxn17ostGu9qXbn9uirj7oS",
  "key18": "57zDcLkMuKTu8VMfD5Mcxzqg9nedG9d8UJR9aGQMkX8rxucJ6zDZ3GfPT8TqqCLAtqa1jPXg6h4hPFhCmm8s5LdK",
  "key19": "5JZyyRbiaDuvoLFgCYhy7jzKNzZoiqxBAeWejghYu3fuphsKX2ip2UeEAjpQAFbsNxpPjMMCEXpQgoEx7fFd94AY",
  "key20": "jQmVLeCFPGN21mpajur8Tu6AFsjdki1RnUtR9zjjmUBFVxDwbHbcfutJdZ7dgzezkX7Yd8xWWv7uBEjnYSoVehR",
  "key21": "4SUBGnHnAo7qBNGfGqSQPBSNz1i2ptNRGq9mMbqwBji5u8BVbcaxqgXBv1teif5di2XLKj9q8JvNxshzT93E71Kc",
  "key22": "3cLGPz4GBjViQZ9sWggJpKFZfm2PGha1uTePktokc9QHspi95ZY5NbjqhawHvEGhGCs4d4CwzFEWfFwmKf6BS1sD",
  "key23": "2uY4pKccFxxPBtEVuNSp6DXVtqzShpwuXMVqc4o5iet57ye5UsUqy2w6BtrFX9zzyvyfchwFhsaSFtfkwPBHp3ja",
  "key24": "T4LgaMU4MPz5b7r4PFjdR6kfxjGkZnEsSgYjmY69hU47KToRn9G4RyGDZr7bfXnou6XHKPShnTADuTJjnBRM5RC",
  "key25": "2m8JdLmUSCbzBCiQ8DvfsFEknwue6cZYaHuc8P2qip5EHEKd3KDx1oszfwGHBTMRGP2h8Qs4asyA6iyfmBncagxp",
  "key26": "2tML45KFB5mhHALZpoKJfBZxysYZhhuEkAPCAZCifJ4kPQkdtUvG1BfCgPbyeBTcG8N8vMZQZazdijXggf4EgY1r",
  "key27": "5FspHtesPkRsiUPtSHVPSR78vN1TsvMAo1Pr1ojRQNsMj1ZdzRT1oe21aFDde3MRycroUu8BBRSiXpYUfgpyP8xC",
  "key28": "odqwXcpNXw6jZjw9JUFAsKat9g8A7JaFqsxCgcyUxVjX9eB8DyopiQiYLB1guEJJuLK5u7prXL8uEMkwMBeAtUp",
  "key29": "3HVBhizWtTtFyLjB7KuqBB9N9t1EvM563MKmWUqmi17qm7uzy56j3qNGHDinr1am5ouW3gK7SxWhyR6oBcVWLVXs",
  "key30": "5wKSG5GBPszr6SEgHuSSWrvoTB226VmXkrwMvq1rsQvvZggedVRXBgS4Koh8rE5UCz4sDBEtMGSY6xo1FnAtAj38",
  "key31": "3PzDYKJ1LZYJBb2wiwD78QSGWznQnMSjk3KEvjRrv3n6SETtKPyFrUvxaq7tJ7gQJW1gG6gsgTb3C1AgcHDdsbxh",
  "key32": "cKXHcGbPqqbG8A3JJTPzy6tKBgwoBejUk2Dv1GsKwZ7bckzJhiaMUES85kMKdxngQ99jWdCZZsh9nPznjuLHWbp"
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
