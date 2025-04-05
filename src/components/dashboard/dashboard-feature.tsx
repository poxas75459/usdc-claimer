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
    "51vERCKYuBr9rC9dcKzjSTrHtrzpadycBNXwKnB9mgWKwidHNLrdzeAe7qRBL28moUB5uRbVEULRMajDsKACaaZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aFYTZNqVPVCLKcKjr9B2zgzWsN9zbgG5rSEGMJYnDxf72nb8KVKHg4P9VoPBeqr4LjpeQSTdJ1E2GrHmMDVazzi",
  "key1": "4zu28nnaa9JGVv77SC2yXM1PFp9bvijBx9bspdHuABqxCy99XqkSTSepYccN47Qaz9xvbFixoVWGPQLngf4BQzBj",
  "key2": "4Hr3xk91dkv6pwWW2wqmtGquf81cgVPdAGDStAt5yJS2q8FmNPFKXwxbgD2FcBRWjWH2LRivmTJjcaDtqEoqbYBk",
  "key3": "vCYuaE76PNK97GF7Pwf2Qb1eSUzF5UVzzLyEapVDTvWmRjjnSTnFSrv2kaZkAMYd2CQsnY4XAQjccmHjFgRCrfL",
  "key4": "3xkCUjBuXhG3ujFuCSJ3Re8vDp5Po7w7JhAPuhDfLvr6AbDLrtvuzVmqAsiTZibspyuhMsgjDS3aMpHMyGFPs5dZ",
  "key5": "4y7KLWqEGAfDh7azkzobahjLJZRT9BtXHpt1qiTFi5GuqNmSP4eGKAVZqwHzQEYyrXEWVvviz2Ney7yMR2ZFZud8",
  "key6": "4Tgu3TwkMKv4VA3WrVS1dnE8VCsV3GLDX8aTLcsEJ6xXAfvVUhm6cCoqDsQ5dYVUwMWR37mXu5aiP8i7hMGj3XUT",
  "key7": "vfLZhdSeNwmg3EMhdmCn9aj5KqhuzQz7zWS5wLgE5ecNUxmD4KdRtJaUN4VviqHtY5kNEEh3rgPv2uJAW96yz1F",
  "key8": "3eDHqtaL6zK1iyGxeLp5Gen2kYwqsrNomxiW8moMP1qrtzeCQUF7RDh9WuS5kTKp1ASHigFNfruzmPNbm9mGdxMC",
  "key9": "K6iNXcsSYaiCRDdY3ycNbUJBC6dY7jRkXJopEpnQH8RQizjY3mafozAzHcQGHB4G4ZVhSUBr7JRdDvGHawffoCe",
  "key10": "KFkTYggR8Cz3shxPn87MCH13suZNF9ZyGcxPPUijFLfZ4VQWXFmZwf7w9MpVJkb2U5qpxz1SjTRJ1DuoKbtytP4",
  "key11": "MJzNar63vtjv5PYEyNcZ3JVkfACYjgLyi8sVsaRW7PGkY33SXmcJNNdPE5EHFD1ibZEkBeSDEuizMGed1Xi7VQM",
  "key12": "ojQbAWyaaYpqLP61GkGcnBbSMPzrcGWteprP3reBwyNZUfYhHaMV5w4CuJPmAs7qcd5tC6QDnu7CwdqAcosVTiZ",
  "key13": "35eCq6MiNDxLf7uwyNCASN9GB1cMDhdKoSUAgVYVn9eqcG8mrUyDKFkeaBFYZqiPSPfAML6enF4vNpZca6pEfhf8",
  "key14": "5nAz7GjuKhcYpvyVe6BsNhYwvfYadqFTkiwLViT49HiTHJqap5HQY8ibchrx58gpEF3gb2ofuF9qgmu7gBoN3RYV",
  "key15": "2HWyp8yMaVw5GaLyG6uksP344zQLAkfoHV57iqFwU4dnWe3WTyokTVagrEHA1Wu7qgP391zYuF78yyEt2CxWvWDv",
  "key16": "53TGSMhSase9gy1Xcdd4NWTjV1RaUKBZg3ty7YboAoxvEaXS2TTdsAtmftKgdejRFsEJLqmkeaW2oNJLDyK98PVp",
  "key17": "5PiHFjPKGhzczxR2zy36rMwggg8K48TcgjsLN4v4WCzWa4oU6noQXiKQfQ7VzcNjkRK4ifbV48TzwEgz54Q96xyr",
  "key18": "mdr5cvSahRR78FAWN46Q5gfGnQ96AtKbKLZyy4Bqq2pcUNbnFjHWFNmv7hCPwukJikRPNWYg8ta2gNsBb3aNCHR",
  "key19": "hmScs3c8qzfgEL2w6cByXmc4xiMNZEWsVP3WBAnyWeMgU7LBbjovkQSQBMmqczbXZVZz7qXBW2NytXnjFLoHmS9",
  "key20": "5qsVNxFB1jmDBWfWKsEygtEQNGrrYRQZKyKfmjNxmxXUMdJJgA1ANc2PLc1zarMGVvY8m93SgUFvM8aDYgVrBqmT",
  "key21": "4jkeNtTETuYJm9FuYhLdD6nDo6sjKqeacFCeeSJMkngoLqa6rB9eUxo723B4kL36Jj9vHASAKVn3EfWHC8QcDKxd",
  "key22": "Ks9Ewevg7WfCS5gDvUzjuax9AtppfgxUMLNqMNRXamMko5HtztdE7n3WFjWYmud44MByu73TuuwqtGFwBoLDXMo",
  "key23": "i1qxzPmdXi1h1Zip4aSKbYVoJUoW6E91gDbKZhZdnfPc26mTztqkPXhyf8fYsNtF3fuFQaFMt3xiJgust62gdXH",
  "key24": "P48tEBMUcRXd2HVGzrY19xuP7BYaRyDxNTBu3bHCG3xZhq28DABmx7hus6gzRH1gXGf1QzQSrdU77AS2KUmQcFh",
  "key25": "2tcTG8rVQMxDaQZLNXNLGf24driE8hZseiAZa5x1M5iq4TcaR83aWDXKyy1PqgacNWmef4eZMhqnSmi3C37MNWzu",
  "key26": "Waio8Vc5TMYY3pbMp2uD7FMoHiL7n9Grpbr1GggAEAdgZc5gj6DgSXaAxd9DbTcmSwkdWMEmAJrwuHdYN8ArNdF",
  "key27": "5VhE3ytu6AwdPn51cpApBgw1xP49713vJSAkd8aLmp2DNmZwShDv2QFjhSV2Di7H47KD88aYU3TzvuPS8vxtiKaQ",
  "key28": "3s4VHsuGjfXrnX4FeN9Ja7BCFzbbN1CFzV8PzjEzAuYbSnZBMgKpiBK2a5VSbQciAyozS1muAceqXL6vuRVHn8FK",
  "key29": "4EJBQF6Z7JzTd3FrUe1nYDgDvpaGxDbY9zyjYhd9zFYaSBgvpCyNGcApwhLejHJ4Ti73s9sTtC8AhxBXDM6ABVY2",
  "key30": "21Du6uoKEPwEumCvnyc7qCtLD2UCWUAcLBArK5B4d1vB6EEyiFK8pEaWZLnaHAYVwvcpFtWQpuTvyefyq5Xb8W1b",
  "key31": "23jNAjT8v43MHLenGPADznNF1hQA1dohRqesnQP9a7q5nkuvdAHnUG8urnL5Px7rcWv7DPqobVz9sHzb2wPZsivi",
  "key32": "3EcCPkPoVLcPbghncDXrs8N3GYJatmYkCEnCLAePMcBWkb3nrZRiaSjaNvuW6rmF3ES4TN1j6A1HTJXsjwNXt5Y",
  "key33": "2sWE9ecjWohDkjhMKzvZ58GdCUfu2BnbsRiXpWxefTwse2D8kQwo4tu1WQNTQKzE1gJMVfLkSneZa1uSqnqUKeF",
  "key34": "VELshPjAefDqyo2HiT3J2UWf5iWmir2WNBvZREY69oN3hsUyqJQnfJKES15rd9QsmkTxqRgof9nCkUNxWk1TfNk",
  "key35": "3W2NYLFFouHCMfoKAoJKtTWwK9hvp2jPmp3FiCCJSVk5f44eCnrV8HmeGjWcncWc26BxZ7xEBuQXBPUsUN9oFfDZ",
  "key36": "4HCitTGjLgbSReaTHzXzTRRsrKqXo6HSH4R4sYrduBpb8DzKvob13vWQKL34PsfyRA8Nr3j5NHdUBzJ79qb9nE53",
  "key37": "3giCHC3tXADgXCHbJwfSy5h3pyWw88zPGyXK6vZ39CJZvTQoss4mSp4NJPhZ8JCWHhwApcGgyYdPPBjFnHnv2xks"
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
