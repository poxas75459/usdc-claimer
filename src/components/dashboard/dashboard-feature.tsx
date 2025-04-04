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
    "QxTq27hd2bEVw9fip1yULJVeGb5Cjn6gkjyFLgU2hzTpLUSP26WYcCWA3S1pgvsPzW7eMbsTo5fPkFW7jZtdLoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjvAQHJCEK5ziuWDPf5cwJFJE3xUJhoTqUBgP1RXQYz65bR2euQAYDw4MTmC3AsQrzz7EWRMscQvNRda8taWEbU",
  "key1": "48mtiroMxBrvWofmZEd98bn8huJQyPDEnK6dTqy2q4zNUfZxNaRThG3U86YuCFrDHuv56rQT9ECzBSDYWUgpXkz",
  "key2": "5UxK3SkGiDLUQGpi8S8JV9m7XP1CU3PZQHTaapk5oGPync21tUBgP3UBdsrv6WLFkuFgGeJH4umvk7Eo4LJPii7d",
  "key3": "3wf4vXaXo4uFYzNQ6KxTXMLxD9cXu8ghy8CW8ZzNHsdMYbPgM5STUjFqeCTnaXSCq779P8PNDSHgxhLHNg9f7qsH",
  "key4": "3f1ucyz6X6g424ieVGvkxtvdsLPXaF7TLP24TccCWVfYNaonNUQsNUetGVvzZBo3UKDfAXSrnc6sUzPTL6fGddWt",
  "key5": "5b2dzVZ8ykbRsLDBeEkpycGDQeE9NeTToggcQ4BVXCgArgMwAwWHa7btirW1dGDu7mm8vz3aQihEBEKM92a3wxC3",
  "key6": "3qMw7p6bcxmT7W3ALnTH4VwktyCZUYCiArQVWZ2bGkHySK57QhLhGGGud2LpRPx4ADnxBUVxkPHWFdyL8XD9CJVS",
  "key7": "3PJvn6WCMGUWNHrigwzu2Mx5wAVcMxyM6gQ8wR7gMtVp5jaxzu6rJiwsYPVERcoUBZHvDGUDUEtNFRLNz8sybisf",
  "key8": "3xJYTHbsYRnpSvpzA4nRo439bhqzGX9SmpE4oa4W4RBhe5Ms12S5CZtoJkdyPoxwN8kBpY9QzW5Nc2uSaZwFYA7N",
  "key9": "41RGqP67yqJTqTqHVZo1R44py2iR6r11zvzTof2tXr4WtbM133CTxJQhDUkyr27r2RZic4PyW7DZWjiTEfFgdfAV",
  "key10": "2c9cPUPXa1JWbNbtCrxaD8NceSMhvFxEbybn5tp5tL8xYQX1ntCEG4urpL9mXqnRnJcF3RZ8d9i3yssKJGxnhorj",
  "key11": "j1KxDaGVfR3G3r7AmpHcLAUj3d2wf3ZQejhpVMJqBEAofA1BCed36Gq8dBi1UqsChihk1Mqp64HzUkYpK6Mq9sD",
  "key12": "237QGhE5miNdFPXnhDbLsRmZe3Rjcb27o6cJiUm2944htLqZiEfRF9GxRoY93v6oKJk7rUmT52HQoXvWWtqFQdKM",
  "key13": "4u2KN652SXgZPJdRHrtX4itHHBkKPxowruJEgGwLrX8seDZW1TY4bEYzCXjNNd77XkrBQBEnS5c2GXxz7JNiZQgz",
  "key14": "2k4ZaC8TPuaXWAbe3vvuKNPFCXNovLgiCtVs8UGDTZXFbGajyEmz4XLKVvu7xaQKkPMFuN8utHasjBYPmNUdbhfq",
  "key15": "7QQxCBKTZ1yWKdTvhwVCTxrHTt1tu6FHskDLt82A263E5pcJSV6DF7yvu7hodLa8hTRsbSRLd8LdSpYYFJU6e6P",
  "key16": "3qgmK5xpT9MfbzXbhdLymdsNxsDwe5JYWR6sfHtnn4MvkGvvQubojBMLFaSFZUzZVGSDRLpYgvaZ6LHhm4teWtDz",
  "key17": "54r4HHF13x54eXuaVmoXauHmSfD9rfGuUTUihyvWfgwPbth3dn3Ww99QDMfjZw5LzrHJxjAcQThJEY4cmEDWGMzh",
  "key18": "48EDZqUrQmpTp9WGPJU2jmzy3rGhfsteDT5pnY9XmPeV8aB4yLWAuviotopJcXGKS3qoD2Vg8Z72KfVCVjdiKQMq",
  "key19": "2yWXUN5j5QJep7eYp7EwUfCSeCCu66aBtCHWEGwb1BeahijFTdBcBiEBQ43WHxo1gsDPJo1pZXADhoaqH8gDWWV6",
  "key20": "5Qi74AchMfTkRBKnCa8HAQzTGkAZ7rqtDomAa3Yj8rF5je21uqb42UWUSyHxEbkJ7B53HFzZPh93jkjeX27SwYBv",
  "key21": "5ZR2N8ZporopnMXkgYM1df25cPR7kER6vWTaLzQGixUhtUce3mdXj3eBfpBqCc7Vu32XWThsMHTqnqE9TK6aDnpw",
  "key22": "s3aPJ2LSVSBCHDVT9tVv1xaj3g8Umf81QCdwMPk2WFvikrfJLc978JQBsqjVwGaJuowZRJ3t8EQ96ziWYchAU86",
  "key23": "4cABc7ahVZ2VbwVUiqS3aHt9sZo2cd1LM6x843RhUGLmaXmEjFy6mnkQDBqTPTTzzKH9gVSPqG8QPcBFfYaRe86V",
  "key24": "5XMaojsRL7Ntp42DpYbw3uEYABH4JzNDQYDfAJkPwnkuLD5kfZqHj3BPQrcU2oH7cZcLUVswdCA489mY5raVefLX",
  "key25": "8TKt1G33uCNtWt6tPLUCY2eLxTpV8fewzx6v9zV2aE4Taix85YhXct8bmZ61r18kiyZteyTTwAG12wgi1B9BEtC",
  "key26": "4BMjgHHQWzmkeUBgw5pYx3JP8NEDNwsXUR4JGaw6gfJ2HfRiAm9hUsvQifBjk1QHmWfWMVcSN1RVCxLA87uM1KeX",
  "key27": "2yg8eTZQDfvCpKB19EfWnZR7Y2oimmpcAMgkiX7asMgbGL5ceawkeAwNXzqQoqoqkNa6vCuS7NG36HLcemKVcfCD",
  "key28": "2SA9VqR2fhj5d7D9Qcx3Gse2kRU2dk9cxJQCUiD3YP8D56FcaCDPpReszyWEvrtFoZGcULTRTUoDyLYYWNzdUUhE",
  "key29": "UEEXo7L5CNMdv7YQGYPZwQj7dCZBptvEKNQoUKnnmEu5GL9dQxAUv1EHa29BcjSpGdPn8KjbEx6j8yEgmKQkAik",
  "key30": "5ZK5A9LC1Xw5AEchezj9wXVxMSDyN76evYEzyaJ57rvBWsM7djLvYNta6rCcYnLUcX4z1U31wmb7xaZn5883UyAv",
  "key31": "3itUfniNzWUTpZDtUXj3WLhWPcZCZ8AsfoqXxjr5p7WgJUvCEgcffCsLAB48YBHJUeQh4spDrJX4CWtBrjmMThZG",
  "key32": "51rb8rXqBDmwbhta1BNJApwBGcM7vF8WjmhhqcFqokXYjEP4qsWZsU24ey9PGJ95VFFJtVFmp9D9Pq6WrKo4nfyg",
  "key33": "5KuyY72EU6d5qHMWPKurNFSH1oxfuk1oMk1HoRASBayvxAQXHRYMWCxXRfwo1hNGATUvmCzhj8DJ2hgWLcz2kFv5",
  "key34": "3gFjVik6JBrzk5tbFjicT5w2mmAVChNNFWx2EGarpnHhtYBbPHXWFAJzubH7bpmLWGDnq9jSteGXPdNmRzWw2eNg"
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
