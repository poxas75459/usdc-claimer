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
    "2Uq7rvC6w8qYNxCM9AyAy7S96568jaAj8L7haUYXop5PtLep7Lqxy4hsiFBLnMxgFUER1HRn9Xc37cVVa51HzUh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g6hgRuPNSTe8s5zhj9QVNzSawdA8qRccNzQaXz1fogoQazb7EmewubtPSUaZUz8r8StNQbPTPuodzuqmu3eP1A2",
  "key1": "59VbJ5AGDsGR51PXn71Vk69u2ws5QQpBkQZ8PJHBbTGaD3teh7aB9sFqdpLrmqXf316bdoW5KnYNYk7hnMM3pNFW",
  "key2": "4zrvMQ1Ko4Xx4Wa1EecpraeTzCkXJUPGs1M3PG29JK4NxZHCAP3Xst3E8CGLj969N11Pa4jRUv7pgkNnvRHYXRkf",
  "key3": "vVF2Ypd7hnPcDamURegRnxnjSSz7SkKftr6bkHaFEVsS1gBkLYFScH5qmCeGLEAhHpvQnG8DZSdiBuV444cxuaQ",
  "key4": "2YHdwyX2S4TC75VZL3YEcwFP34QjQHnJ99vvYm35BLeH1S2Y3b1T1s2V2Dt3JwpfDAW8uUYkEHnKRJd68sDGK36B",
  "key5": "oMqxbgN8227WpoitsQ9begswayFVBhqgUqwA7uEG8VNFFErJ9pMk5VPXhS5pqVHyAJGHycgtWVBwNHNcgNjsnEM",
  "key6": "2SHtqdTx1Zr7izUuPpDuh9UDakuqUzjiYAiZZjEtpzVsrYm4JQM9rWDJ2gc3W357oJHo5bpeb1Zk9PdTo9rvJCet",
  "key7": "B337oMQ4apA22tPQggEbzH7ZJEBoYRhfdvnwyGSFnsuNc9m76X7LbQDvyLra9uhyEbQED12Wc5Kv4GEijGa5iYg",
  "key8": "4C2GGSWtKcGp2rWtc5mdcXoqwCM5UhCtztjuAaNafmHeac824qDRWtqXPZ8C8erTBsg6fV4dvmwgpV16V9m6ujfs",
  "key9": "4zL3QFps2QAwGyvpzfAmWTgshx681aT74Q8eBoceR9B2Wpd1s8b1PanvCUJRDsUGYaXugpFGACYTagLNPJsPs2yC",
  "key10": "457oNjUruSkLhZTXUmET6VkrqUfS58tJ5PbNPQeCYPRdWP8rZM1u9jKEnyYdX7uzVWf3RXyGUYKRrMqwgeSeRHPS",
  "key11": "3WShQryuoobhGBnehwNQ4L1fXZDvkNeiAWrn4dadpyUBUSNRPLrefW47pec9d4QzoZcRvWB67i2vvrmAYiR2fb59",
  "key12": "5n2pNqXjoHVCnM4bQvnvJWZvMCdp3SBBkTSfcRA1HseNiKXrABVeRQepDQ36ztfD1SuPoq7wnHYCN18nCrPJGm9T",
  "key13": "3d2YDgEVmX2J6eVskw6UjxQK9CDXxrXAHyay6ZN37ghswLLovcbMnPBJDBftZdJCT8t4CSAwpDjLhHWhsT9xpy3e",
  "key14": "4fWaA7RB4SrSpsK189ZCmiNLjWdicHMx9qAR3AJwpT44L2ph7SAngmgtdyTmFSy43WfBAsc1Euko4jPgtwaFk5xP",
  "key15": "3HHcvnBM9EUSifa24EmRXvyz9Gv6CEctfybKMtvBF1HpmH2wDdBkUVYLGJUmj3hmww4kNiPKfvHuyMrrrEDEyztz",
  "key16": "3WfRsrpd6znda5nnBvjQms8BvUvQWvhDXU8uruxjctQA318m94bVcSn9PtuBZx5cuPgca1oxwoZB2hRVS62s7byb",
  "key17": "yErRQFa6wEsPxDiAnn5fN4PDjFD6rF33VkjejyDKyCxKZFRwBGsUtbofHq7VfBeaM8mLjYJpeLNsso2K5HZttz8",
  "key18": "2jmh1ojRnhwXV2eoWEyp8s9EedZYE9Hu3FfxrZbymDSvnn1kRnDp79obrMPt8KnLhfVs3N1X8RjtaUdP94WNtXMz",
  "key19": "5mbUuvK7Jyy8cbYS9qbjfTke4TyaqSdWEsEUzQR9n26gGCGKa7AZVPSnjc6Zkb3rTidneq3cU1YmvBiGLqpAE5F3",
  "key20": "4Hd48qEjTijGnJyzBzWviDutNAL46eNUGnkunQiWLnhhxHXuzqzBWqMNRtr8A1KVu31EsY3c4aSWBufhLeqDE5Gy",
  "key21": "3jc27Wq5uZXj6j6uZ22T7JhibDYbW9GdHWwUtyp2zdKFnqmvby3Vpv4bTizRXdimTcYFbiNtY4c6H9neLAJkk7sZ",
  "key22": "2qhYmJU16xoPwwi79CniWuFgvV3ZFVkYmngRRwQSWiemx9LieZ6PYvkpvopoJqGsWH96nyyUwWjsVm7T9t6pmReu",
  "key23": "2NCDpbJUxn1F4RMVf4bsRta1BzgJqNp1mnCBFN1mvcDEZAtcShayJvqay1Fgnk4za8DBR24r3HdBMMipiWqER3fu",
  "key24": "3QUdJAVvfc5dn1TrqP9E36udizVwnrXEuCxsJunGuLhSECgydfstgLw2fJZA8EjuK5AmhotfpLFQeCc8TvRaiqBu",
  "key25": "48Jtr8po4nhY1hZPwuanp6jsesqRrYynZjoqgdNY4d1RvoQn4aKcbVK2qiqsJVwByyhVGhsWrzSDh7VdSS9nkS3A",
  "key26": "41JHiczPzSqDsjnKunjthywMTeaHqDsHGJkBsfvzPcArk1Bu3y1Jpt2DDq2MHkW1gFUSG4JbAhUW1XcWBNKkDQL8",
  "key27": "4t8zEH5PYMrzWHMAxNtoGgBRUiDQLpMpCdve8cFShYrsS5kTwm99VF7X76JUfsHJa1frBP88Zqx22DoxSDBNRJCD",
  "key28": "3wf1z2mvB8Uasps5ukMAzT5Se2GjCStsroaZda7YXWJqi8q45y4MaG9YQ6V53LQdmKe3tYhy1mDWJCZiebVHG3FE",
  "key29": "2DK9Dq8XseQCo1oKVAFeavrXHS9qdXuR6H7Wiig5nqxs1PMNZBYNWQgp5aYxcHg5o89V6HPVzPFzo62FSBXTtYPV",
  "key30": "2VkVoiJEofuZ9seFLMaiqHy1WpX7XSMrSZKp159ygo5tTU3c7mB7znm2vj4JLSFicNgxtPecCXpJVHF3tkbAjZiC",
  "key31": "3AsgmonXC7jG8CsSGLZQ1h91KnRtt7qFKqQiX9k3SriYZKjomC8TBy4nfMeZAZ1cN4sA7f81VnBgs5Be95D9uCqK",
  "key32": "2Kk7fU1Mz2EGEftBxwCbbShZFcYysJtUFvMrcAHjALysPsHmxZeqGdjsyX32B9Wgris5mSXuqJc4cifFd9WMFFpk",
  "key33": "41ncVkM1pwXc6Kt7kmfFyMwZX1PmQhioJgDTAV7DXWv6rxonQvp6nzj3fwYTCWdazUfhrBZafMXYh5vX5KwPLiFJ",
  "key34": "5pgDwYVX3PgtjZ9S1sVE4z25Fnngw2sc9sXcvBJFSZFmjSF4ztoCPLoH43sbK6MVpasqGD7FHQ6T5fEY3sNETBiQ"
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
