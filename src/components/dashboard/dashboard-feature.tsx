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
    "5rZuxJhPTc85MRuwpS5LPnUnQ3iLQyq7gudBL4MMFXCGTNiorm3aTVAvxJLPdrk6HFs2UxmAhTfM5HH1115rYPh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wkko67ju3u31fqZRzHUDtphhqpMjRhXa1EHqbmyjmEXAeRoYxfEqfWH9ZnHhJC98uQk2AAr3wfrV1Pd2f535sSi",
  "key1": "4ikcKdcUb2UqvXs8RC4Qom2nqNTV4ygtnBH1igvSwmEUYTatNRfhqf7JeeKKGqi8H1cZ3KFZ8coJJKJz1wJvHfec",
  "key2": "2HVNeEurAsuo1TWpDDY7BZjWntcZs5oZNsqzzi2antUeXEBmFa6PCMe2UEJoeHmbp2nktbYGuiXrimE9dC42W23Z",
  "key3": "48VuvUf2amBWZaQZbWRFUY2yxr6rjryuB2Cg8ATu3bC7wd4mZ9U3jn7H7k85VBWDnZmZ1itNea1P66Ft2gcBXQrV",
  "key4": "4MPvCDYCqMZbjqT9cbNpP4iuKLRErKXVqbJxiin5noshxVsuYZX8AcupwXPmozZ9LL7h345NkBCaGQycu9VqyvZz",
  "key5": "45tHPxqPHtKrnemEuinsuZznzVb7viBfoZLCv9oqPYuQuLtSsAKnn4vPevHeD8fBNz82kfxtYD18R9mKrk4T4iD2",
  "key6": "4aCxvLFQ2WzhHv5ivVSqnZCX7Lpg44j2Y7Mcr5hEmquYfZLdZuMy8xR5Jx3iaoupqPnUXpUcHUq27xPTFW2RZ3DZ",
  "key7": "4zoWm31MLodVHW66DLpQWYMdNuqMB2cCoKqBDqjRYc5GHBFZNS1uGb6m421V36Qp2c1Y16y4ZunJsmX7WgJG7rmD",
  "key8": "2JTzMa9ym6SnCKXXDwNbitFmrgbixEYmi77DAVFcu1GCrT9wpkeeQ3uMtiAs4FNZBfsKjawwe3rKGP3aGJPGDhAY",
  "key9": "5WzdewCDQFvQjxtkH22WFfiqyJXybNBbHdQ8Xinjg4ujz2yYsSmSmmAJtcZjX636wMf1FnPWDy2nVtt7jiULpcJL",
  "key10": "2WGUC72QhnaMeAv2Mi2VVGyASQYuwzYq5SXfVkZNEnj2A72NSXoT51G3JTKVu3cumxCYAYARqR5EewqGN25LGhEg",
  "key11": "3rRDyZQU1n6nDnsgX3fUQpPkRmXtQGT5uqToiUALGjv5rqGYAs4AEqDTaqd2kNhz2xGijYKVBh7GvwScskYNWieV",
  "key12": "2V7T2BGWqAU11eWfCG2J7VgnM5e6pYFJ7SrNddhp3etfYZJFh7kmCtSCu1KcLDuwNdCep7FE8NuQfmV1VLSSLpPY",
  "key13": "3d1z3vDeBBogXaZvDqiJEcruMoEEcSGnxe6HtKBCxyQ3k3hcTMzYdHEFFLshjWErDbWKB7J7woZjPhu2iFmc9f2m",
  "key14": "3ju14YawZqYg59dR1Lv45ZE9gjcTrCbYi4zB17yEYsAbqVYgCnS3bnKazM8e9bCw1YpK4rTquf8W9xFkkBWu5rft",
  "key15": "3e7pmGcaTFxEk6rbDQ6PpRVtVHeBe6uwzaAvVRWqszzex83uu86k7zFYnWmEe2k18PBRZ9QaftT8HLENa9ELcfoP",
  "key16": "5SvAjq163WSsUn7QWht8riJm41Tokrmffb1xMTTXaRaQUFKEQDFEmipBV2X9AJLKeF5xtX2rdfcS3Wnr9aPJ9tQX",
  "key17": "5b4bDbHFT5Gobj3ZQr495b5KJGdY9xZzCCUR5QNyuEadi36bQNXSKrUehDvZbgbFqXktnsSHpNatazzUX6qq1Aq",
  "key18": "2zFf19tWrZpkxcFQJGfWHJsyu4kdZSzv7QxyveQxao76DE6FV54nMRxVMsTP6e4ZAhan69ajjwGJB9KrX7wNebGd",
  "key19": "4csyiTbjiAbi4t2oEdR49kMZNCLAES3pmsHefPs7dq6FmaE3VDTYRPqM83vWqMedHUiGNRSDH51BDTydQgXWGPxs",
  "key20": "Df6KrkURgGLwZJzpCrogeBrFqxvHvew4LcJmR87j1ohRLuVM8vvwJb6o8xeAYSHhuaaH1ejzxbxyHu4zak6SvR8",
  "key21": "5PBek8roy3tS7dZjLr4fwUN3WmrHXpy92Jx5aFEGMFzwUgM152xaDQCi5MXnrLK3LRzJ9mdn42hKy83duozyt14Z",
  "key22": "29MeKaMovUhhfk43PUTYZ7pjRZhPQ3nRQ5znsPmzkWFQeSeL8DUxBaS8iLFXEzCNLX2LCQ3S2h2wcnVUc28t1SjW",
  "key23": "rJJkp2X6Fe4rGim6mzKrc51sPdAoEtBnLpdGftgZvmrUKxBEZT7sAUnme9cXBSJ4BE3Nvf4K4brAnB6VcM6BCVo",
  "key24": "3uK9ckAYjMD1bGtDpZ3nuL18nsDVfeTCob93SKZY61gdRxgdQoC5hwFizkrHipht1Dm32yfj69s14ufEkhyxPEk5",
  "key25": "2okGAjit4GwQKyYM738EaxhLRB4hZEivnYuSDJLorYSgKLYdmvtM4mU6NJfJAk81V5HEh9uF9F6VjGhBW51EHtLg",
  "key26": "2awCxbNxYBkbyNBdERQhJvDxRDBWGLsW9kyQ9pKwti56VoiWJJJ9yLD5GSkaUMAQ5iXtuLr2Atj4mXEorDnZaQt",
  "key27": "2bwGmFMsmVDP7Fb37nKTf7hy6fkq4f9E9z7Fsn1eF3LT4EM9eavzxXk78sP2gWLduc2uTyTRtsFewqo2ZdDf7rn2",
  "key28": "4Zj1eyVWeL9V78xD2mPZDN5H58Fgvyuti5oqLfq229RRRJiBSwE5wt8JhprezAgRu2Xxk62JjEVHP3oy2yk9eSck",
  "key29": "5pqZkzzjPPjUwnZ5qkoX3MbkqV82JtkHEX52VcaCRdrxyyp1HC15ZviZgbhuGuCgnCJvok16w9ZyubsZ2qZkg9so",
  "key30": "4bqg1CKNsHmAbdddm1HD3EgEck7crJi9HKtojFQ3bL5ki7CWmYoLT84buiifkFbqFpPtzWkoxEb7J9wYLHteyNWT",
  "key31": "HauMTiHRWYPxC5BvnSEYfqPavf8yaJ7TtQbiXHGnjYnrJzhJpTcDxs4RpZpvRDiEeAf4RAUePYmjDYtsoddWQpK",
  "key32": "2qyxB8DXPWNpYaCDsW6MeMJUgGgkNv3rz6H8djbuA9ZvNL7Zjmis2JJ9JBQnmcaRsMzboxKkGqNxRbxQ81NnUPDt",
  "key33": "4ZkH3NYDqExi5SWEXpegjp5AjBRQTPutb6QFDnPU8E4N3TFRSZASTi8CXRrr4bWsx476B8evW7j5KAV2AAzV3LhP",
  "key34": "2nb7DTm46hHMNKqvSCeV7uNnN6qhE8AzkqshiZEntFaiZ5Vbu83tziE8V9JfhvEPbW91dTaK78jDy3vVcsHvienF",
  "key35": "2btQnSnnDbLmRoNdVD5xJnzSmyLoXNH5138HCUrdfbLzCUNPMSAyBCFStKeQ37JxQEwqnQLR3YJZfTNDoxw2vUkt",
  "key36": "2ym8HMJzf1nSqfLGz6uJ88ymMk2QbyLXoPSfGhUxEs4bGmKHcdMGiyitoAHc99pLPn5SaBE1uukwJxaAarRW4Xbj",
  "key37": "2p5QsYMPLDH7bb78EoJMk6Xaoo8PFWamEHHJNDR6MKWdCt3MkeKUgLGaFnWkhGRagwhNgmiFBSJ5aRDFEHEqrAXT",
  "key38": "3tTS28MGZrks2GGsrL4m8nFVojMyptBnbUojhHuEJ8wvbEA7yAeFdCePRyLxCVSFAzx7ovr1r7K9J56MPhJA4jyc",
  "key39": "WFpHwtZKCLMKTn4N7sH59i4AbdgYs86r2Fp8NNLqvkShRWpQytJ7tsa5LLsdZgdWDbtU3UvmBfbaCFqR6PSscsb",
  "key40": "nwE3xWJDxS41WEpGgjY37KvoezZAdNi8eemHp5XKumh3wb5Vohv6pNmoz9DMcbGGXG3HRARzkJuFPkBsXxex15C",
  "key41": "5mUPdcxu3NmhyaDSYUJ7sSSbLGYUaERy7WExRktVuDQnqyKH2g5J7S7sJFb8UKyGAyPZReef59YporbcEEyjZmSA",
  "key42": "3zsrqmDsssV9UtohSSGZysCLbtNdP72LmCNo1z7nAa9FJichiV27sGzbakAv7KssPwmfg7icM3BzXNuCLp7vqZYt",
  "key43": "5iRGuEnGFW8G6mGJ7QSDyZLTofqvmncxByQUFxUBkcYS8A14vPojM84sMQVkZwKNq3bFWZUYZe2PmDSUz7y9wC29",
  "key44": "3NxNRnxdyTGFLFuMiCbaX9MRrAh1RXbTiJiyUZRv2RjjPQFRAhZa8T1beF6RFdtQ4zpZWBb62JJW2aEE1wGwwPq9",
  "key45": "5VjK3phjgKt28THfVuJxzcXGA8VxfY2ab8U4herRN9RBEZAZDi5x9JXoM5PZCezs5PgozqS8MVaKFNTp6g1oZzjB"
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
