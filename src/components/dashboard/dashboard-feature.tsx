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
    "5R6MzbNuk2n9VXW72N8cSLt1vofcHMeuraV7sbFgwSwMurXh8bTCPRypic3Pzjbr41C6yWGKcNgREtd5LHFEV7YP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H9ycQCrx6gu1rEu6B3Azhw7DdmT9J1ZpeeQNU5M16ednkBBeKPiD2qgzbNBt2RRQxESJvvdS5ugXScPoAQX7v3p",
  "key1": "4P591t5SVW1CiyXPCDKFJH8mxjFUuy8FqSHfzbPYdyiNbHktZybTbCTtiAwvybNJFrFqSCWUU5iNtqsK18bxgpMD",
  "key2": "2qLCC3j2bhNDbuKL6gYkxp18NtikSaPDDiC3cFaVpMJ5wHMVvpeB5QG8V8Bv7FxxdL4Pj4iQfq3cuiwf9wd1JeMs",
  "key3": "2b1XNquHdnp1ZmkwzXLieT5fivkihXkqeCnyBYFFHDa56SBka3mevGBAAQCGRFMMzchqiT9n6KpeQaCVCJsq73gP",
  "key4": "m37C8ZsHA7piKNPwzLtkncSqUCofXoax2qzkVHgLNjXLEMkv84kq9pmNQBdmBiiM8iVRdpNtaE5KisHd6RFmwni",
  "key5": "5pjheAoERHhzFooWYu5PYKaeqhhgwn5iz6CWexC25JhDQvqMohaK6g4fmvE7wrRr3dtqoR5V6p4SAvmHCdAgB4Q7",
  "key6": "4kuLpMnUtz5rHgHbYNsC3HsJW4VcY6daaRUNkVGwMbcN9BhE29coGjXzQKGAu2Q8vDD8sKJzW2QFLbmqboUa52As",
  "key7": "43GEHzwvPRkAqdjor7vY86GiXDvNuQBYzetiUMAiuhxsXb8oMkcqwLD8cq4kL3PPiPuyMAKXejcgCe27Y4WJUyhR",
  "key8": "44GRWhiWRVRtEje9fmbgFj9Fg9Er468eB5XGvfCyDs33yE4bJu1uuMwysfCipaswQm2dn6MeqGTpTodg6Zqqs4L2",
  "key9": "3bLf7NnYJvpkqwVV3qD9A6eePbgM7ZkCK6rzHj76rVByWAPZHdn7CHYCZeCbuEwvE5hfnz2nwSVys7S52Kbe1DuU",
  "key10": "56HsLA2NJtveAXKzuF4RcqBu8Usqt1QYP7fYqVx9StaPBqsW69ewVecsFT3bw3MWS1qS1T3ZfZVqHHq1HMbvQ6FS",
  "key11": "5tSQy7wQ76jnCytNwCLrdFUPdUFovMeF9HBYTCjLPP8qanmkcx1PFkUXWUZ8SL3sS97B7iUyB8xuRtzykzA7T1qi",
  "key12": "4LEoqNEAabrHSHcaBU45R6AFxsnBzNVUmbu1nuoKfgdTVRip3Nppn18EnvhQPqfZHA5RKi24saMqTs1QeGrbR7qo",
  "key13": "5XNduLBMrKNEk8Zes5bZmCqYz4FbduNet5DqKdtoA84kJ4CsyLQ657VmwZAMUT4UunmJUPAPEBrotTZbkWiBk9qB",
  "key14": "YVVycXvs3by8pkWmHUaceHjD5bpyagzSsUzJMvV9ZoUbeLGMMoKySfu3fj3xKENt5XLDfwpj71NEy8xwwwQoqvC",
  "key15": "aoZ5zNHbwz85FSBReXpM5kLpX8agvu8XEUeYSa13uug1dSoommzK9WovkUmmduBxErGrdUsP8ppgMxVdzk6gVhy",
  "key16": "3aPAESB2NDpPGWeRsADm43MiPPXPQA7dfipqGw6YaCCUpkTvKS2TeM1CxHgocKkswtNsVzoVeE4bVcD7Gr5CdeH3",
  "key17": "5iZA5HT4u43TPE14fYSgBtdR6ghJFHLXyjicrmccdKa1QHxhizCV9NdmE4pXuivZpiJdSB8mSG6zxEgnr8rKP73Z",
  "key18": "YyAMdjCUCAwr65X8AHrKXDAfgBBQrPW7cZwRvZxSeRApad5c8s6zUsZRYPvr829otkmfzWh5VFCctBsATMfyDaN",
  "key19": "3shbXYuGU6UUHWbB1YcXDsY77CwHAqSa8uVUm5dLyr78DaXLXq5NMTBtkCVYAhmMZm2KgvP2DsJHAaxNEdy73yLP",
  "key20": "4dWMcyhAVce2UmKJrsgVqq7y9QcJ7L7v7Qh8j12hy5ez5cpXwxohXh2kKFspH4zjXZv7i4v7AVVyScH5jvcqUpa7",
  "key21": "4PoNnyZS4G6FTh64AWi6VyAxmhVycQUviyrZH4z831KnCy2JPN156DkHfN9SgP7SQ7JD5FKHZzex4MVUUcYEKHf",
  "key22": "by4r9xodJSw8jGM74LMqMuNwCSJ6Af3SArowaof48nCga3NaugTqKbh7Je3jpRKGMVv8UYRphsKWKx9Bgvr4792",
  "key23": "tQ9bmXayjKMJPHR89mVpFv737Ht3h4AddKWMuSDZMKi2eh5SyPko3YravEy2ZNBkRReCTQ7SDbDyNKkwnArhXxm",
  "key24": "5VoWyBqr7Y2PAhJYd8taPFTecQNdrpcRj4dPqZjoGiEEPAitvvbe5WvVBhpHFqzJPaA1iYVKn6TicndtMztZV8Ns",
  "key25": "3FinP8nrsD1mPVaZRzsY168okY5NNgVe2Ka5bs6jivbHpL8HoZGUSSo1fe26iU7moPjfjBbv2GYvNyd6Yd125kq2",
  "key26": "ELULHoCjJhtk2CYH3SAjx4U3w5ToiPN5WdKj6Rwbu4ScECJXfhF9k7gPH7QbgXkHaHYz5fJuxw1d9EB8WGkZVJS",
  "key27": "5AwNz2scZeUR2Ad3nz1pab4XVosCG81wrX1tb1BbvRbcAUnjL74vQ88xGyJ2wXiiak5w29xzEmJHE9MTsnVxqHNN",
  "key28": "2us9TKzDz18q2jwp6Td4jbLBm57U9zB5eeLQt2KeLPYDyhwkBcWzPmvm3xeLBv8r5sSFGguoexDkxytDqpAvtvYR",
  "key29": "5cwYmZG84aiSa6SRzc91AKTvgeST5AF3Pd2koKZc6oFrhtD5fSMAuiHCWTpgMJmBb5SyZsNDQWsAD8ac5yB78rzk",
  "key30": "32bNLD6S221eWL6kcGer8HkSsRYVLeg8uKdRDW6q5Qwjy7LNNJ93aGX3rJ6jzJUUFnH4w6mjQPQ1Pom5e1r6poqb",
  "key31": "jzhAuNswKBsFj1TKQ8hjhavG1ypreohJTUhLrPZCGJ5risoZ4wjxPx2bMiXLWdjo7ocyU5yH79aWs4PAzUjXd8E",
  "key32": "46JeUir2DSPvSa9GYUzS7UAF46k1JtLcHFPLBNDCiwDp7aVpCXZtNgVtsewCV1ketLEfuLBFpHYZVdvEna1aLN6u",
  "key33": "2or5WALVhphwyW3h8p7CxRx6mBSHEWpqkaJZgAqoUSW9ANVbU5qfNtr5NBYDH1nJPM4QczNzfXqpNQsMnyDR9eXC",
  "key34": "3ujWWGooKnvsGZ7YUdPQyJPARSD2rWk7TFHP875sgCUiH5E22qMAQu2fmc6HDjmSAPEYZrMRWjYTsBmBeGDEiEkL",
  "key35": "3KWZuPPokcLGt6mxegJoBwga2XYEGhPCCj2jp8Xv6M3Exmvm4nSfAqfdE2zWua9s7iTtdbFVUT9Z98oDBsfss1it",
  "key36": "3W3BPCaxVm8PmtGDpmib5p3XB3DLdqvK6ka8KUGhMUQHCq9TrdbpipSSNpqASAqz359R4rSiCosufEXShE9mrSk8",
  "key37": "2JJ1K3Vd47kksTquKh3f1UazoGdXT3DsCo9gJb17TYzLBaTkDhuMZYB9KrrGpKSZaHJdXngmWGc4ipYAcWkJxBVn"
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
