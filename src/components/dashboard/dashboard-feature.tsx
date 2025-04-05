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
    "3y5mtJCgCPakP9WfyabFiH6oJWM3zszptS9mwd3Ufw8LgqTwU3wKMnmhWhveCxvT6Yae1JbLdgiVWkRs7naXcdnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tKQnuM7smJVEKCoFqKNjuYoskz8y3a3qdbu9czLVSSJMs1xG6Fo256AAyjScAXCiVeSBWCPGTCRdYfyXZdkihTX",
  "key1": "28qWAiyhqphWcp36KpnCmrxZC7fRERVx7BQhUiNEx73on7tEv2dnUWSf1ChBomco4wsoZzgb69z3BWhTCTteiqgr",
  "key2": "2QgzEmMxR6P1HEywaVNBcQ6acamMJPEMQALSTn4cA5no5jS6YzEeFjhTyq3VFZHA44ZGbPtKJzJZuCMiJEMDPXe4",
  "key3": "2ijtCvxvJWCCJ1EunaqLQnpc88FJ5BBdgm3ufBrv7xx3GthSmgWcymeDtuXcUybtk2hS6ftucoHFDgMF9AGYof3p",
  "key4": "5xSQfQ4CwWACHqfRfVyYDxQbDWhYppYV8TPKD3N3FScF4VvhzDKjZ2GFUHSv4S1jWCgLNBxJzEVP4pBzns4UfcQv",
  "key5": "247ADjnzht9Zse4cZ3YxmXRUs8QqAmf7AP2nei8wxSrXP5ZdjPwyN5ewTsL6fPAuJUumdk36bfZ13W4NvNrMM6ze",
  "key6": "twtG7XU4zJMXfiJm4cNEBKRYQUq3CoVxKnQPY9xQowPRNJKz7adCq7mPGgdmxKk7qpX7XPi39kiXhAL48UDrgMD",
  "key7": "4SANgnZBXSNyN575Akz8SHouDidehg4fxcfkya8mKQ4SsCciNEk494b6ed7xV91EV1PuBBPps9jdY44p9wzikq3P",
  "key8": "4dQaAYKjhtLau8y7jRoJFv8DF3htJUeMoLNT7QXhjdRh9mJTNnhYZKxZVfPJuS18trkxeLs2q3pdkrc4T7JSgoqi",
  "key9": "2jjqRime9RvekLm4p7H8ecmjtYUNQrLNBLeuQ1WrDriXs5dR2TLi4AuA3woiG5A4DidVgbBLeY4Rn1GHpVd1Q4zj",
  "key10": "31Cv7T7wSvZQNc4GZGombphAHwYjRWMahyEBRDvDvH3FDk2HLHsMgqAdVxMU5iwAbFtg3p21tWa4q3zbwkQvBKXH",
  "key11": "2NLGafKVtkUMCBsQ4Q1KpeRowPGYWD63uXepogd7LrNvK1cGXec246n6ttHop7RZBKRKvpKGYLLiTWNhSdXrjt9o",
  "key12": "3ZjHPRSWm6P2643xLL2WxaJGfbsnMF1yktva7eLsESQtNq75BWff2kM6GzSXc2zP1zsvHpubGF8ZW3xK2Puqd2zt",
  "key13": "5ENwaPHwem7pUGpYCh72NzYXjeeQZZYyekt1ud7AVNSkNKZgS8CZzrmDDadr44Us4nxmvqNqrKizf6rez6UXwhm",
  "key14": "5Uxhd9fHC7GTjaEMU66nafPCsfz2s1FYGZjLbgw8gHACT4rG9cy5sqafm3BrJbHu2qFd6tuYkxFUdsRkkETzMSvK",
  "key15": "3Rno8LDUhEftBuFYQCQ5cJgjtnBE9Lk418Ffp15wPgjZCFws2JXji9rwUH65CCnFE8H4hD66DqDQihLb6dqzSNFj",
  "key16": "33eED9Pz85ngsKUN6yBUigJcGN6ModEwKYT5ghXvTGK2jV8x638u3hx1RwGn1JbJ6xXwKJmVvJwXV6su76EcXJXk",
  "key17": "54vXBBVwvvjESkB6tCZFuNydnhqDHCMTvXHkMNWSFw2K4VWWi5LZpeXouBKNHtm66uii2Fae5jMYDMumf72kRYVH",
  "key18": "3gtfYom6xRrzFNGWnj2sGJkdB6zeTosaPF1bdpBpFp5edJ1tHzHmZac9FxDTAvyExDXHerZUeDPLCFuGaYxBDYVk",
  "key19": "mkF2QYSSmZEXJqG18RoGEc1szFdscbJ5oTbKNfWJtjXnthw9usPwLBjXxHgVPSM17DA6JcJfuD5k3X7TfqA2zyc",
  "key20": "4boCEz4w4YRuUo5uRgXCxQhHN6VGjrvvohLb1NsT5WsY5eE6hZnLJQxdqvGpgUSL22dPaWx5abiMx29NKeEAiBqy",
  "key21": "NKqxzUEr724KjFJWaNKf3yYWwgXJ1AxoZPGHssmw8eop8T1SNGeruWY1TeeoFNemasiSR9qFkym3VG56jnJyn4e",
  "key22": "5GSwKo8fRKQawEuD6Fcu6CtmmZnUiKJ6ytgQkLiNo8kYwxjTsuvmw2Y2Gks1Wq5jkkRriGFJXkgz9kKyASuUQPXV",
  "key23": "63GQCJRhrcwXxG5JgazzmADCBWH43WK6XTxhtVxQd7uscYniLgzsnfWJde3sqQS6kEi7nQjFcXbhn471tS8sc2vV",
  "key24": "CKLuMxEmJEmqrtwEJykQsGdgfrH2WHp7M4EaXSZSe5zHKbxQh5jL11HXhQZJV57eQcvoJTdefgcAB3Yo9fBCaZ7",
  "key25": "4YeNRieYSkaNLpar76C9qf1bs4obHPKLSRHVVL8u9uvkXKKbsAGEdJi56sTsb8kwjaFyew8X48pLxs1ad4RrkpB5",
  "key26": "w9gZmjzJzFZRBqCHs18t2JrLkdc2shthJoYehJWVXWuJrggKx8tJBpsVVdSfuSah6E9uDP1zWjLh9e94NWseymq",
  "key27": "3fSjWhfUmCSVfjZsXNEQi4H54BpxCw4CHgyrmYSt1hrgYcBjjKji6HseVh7qWD6ZvqyYhqYagtpU4RvBoiWS1Fmv",
  "key28": "44bTbiF9dhLT1uGKCsYnhK2V4dBM9L3wxwy4jpnUDMB1E95Q3hByseB4QjhJFhHgdXMdPsZPF8t9wiWjZJn4GxA9",
  "key29": "5oVNTNxjEyFbnc43HsEth2UBSauwYwzqAoesqKpNwEfnTteT4ktZMLZ2asu7RzQMzwXi5v4JSyMncgTLnHtcVoRv",
  "key30": "33AH6t5wAD4HXwzzP9QKwegdz2rdp9KdTTFzHqkdujKPwZs6nKfM3RGsrjYpgJofVxGvN25jTGMXZpmvATVJbLv7",
  "key31": "5bWXntmEprXW7foDyx2jMruC7PGHMSwp5hFaSYar2cDwHDqcfgSkhQcjVRNDSQnPUnoGNgf7ux5byA53GpR7g6LM",
  "key32": "2sZNo8yQLVHCfi8e1kJ12oELqXVEo5JV13CWZKcQnm4p3PBfyfMxrowcNohpvcQq7wLso7TfHGZ1voKdGbfwh8eg",
  "key33": "4BKLEJvzoegaM6EybyDoibyNizscfAW3aNEH36up5wZQSJFTKMhhTD6obNhY87UJfumBmiCvdfeFSefbcSWMEtxN",
  "key34": "36dAz1XsXj1NcVkwMj7MV4N4ct4CaHT6wrCiE5XxM6asqJ4jZc78EJXif28isQv2oashPnV7XYuqUA9r3uDnR9pe",
  "key35": "5EJAdSMpUK63DzKetPsqVr6s6DLj52YVLVfSN2A5MSeW4Qjzf9YU9GcYaiJxEWhU4EDTnKPtXMP4oaYGkrbM8DJK",
  "key36": "3TM6d22gTTJyUrXA3USgBwH3BCvronQ8YQfBNS8VTLvVbo6sty2jwjcgywSXPVUScYo4dm2LBinezaSTraVjC1jq",
  "key37": "2ChR9njxQaEbcBxDx75MGGxv8DUCrYsNaXRc7yrcjph6d7V4WhhBH9TAerRcs5CYgvFJkb9WnTAVYbEmd6EH9C2S",
  "key38": "2Wxo9q658BmGoBYb7DfYH9TtUkbbiEgbU4eZSZhVbDLcB84CdvtG2LDfH34vKqEv84PTx665zHPcDYXsyNSQeNiT",
  "key39": "3qXvXhAWKSUyfuNpJfwrjSGVaTg3g5wdxxQmghaoEtQiX8KNWnSp9eYh3EvqtwazVMMChYJLoGp5SLYA2KNAdNYk",
  "key40": "2HuGd91eS55pPSwa6dL7PBaZ3Ev431HNoy4z574dxdm168t2aPwFFMELHgJyJsLQAykJvRLa8DUM39vWYR5x8EeV",
  "key41": "yri6euNcbCjdyWTexi7u5JKPjLDeMBJU2P6fDmQJYf2AF8FekCEpJM9dG2ghLYNkc24tZVpbxFkuTvZ5FbuXVyF",
  "key42": "4SRt5PtvVFnQabKEaJxUvMEPw3LX931iJXkFCsv4xjGCumsqDEaRugkuPTfRJD74eQ1qsUrXSfat2qLmxEqpKFU5",
  "key43": "3zyuysfwmb7PdyX35EyqaHUZ7DFZgA4ihzXzgBD8wMunJZSCwPmPKPjuMpzD5Mthy5FTNM3ydPvBSadhNatRwgmW",
  "key44": "2UzeLWibhGkuRhyJti8p8ByF4mnS9Vwm2vVPAAeJZDb9b6xWiExjznDs45kuXm7rXQ646Af5ZHk8obpRs9TZgAhX",
  "key45": "2nc1LrunCpTLcq4czSNpcNupf2ESzhpLKveS8dHkidca5zitexcoDo9h4TiutYub84R6GpVhP3eHeGwedT2HDvkR",
  "key46": "ymtWAY5BmpQQcxPnCYGvwvPP5ygFoFGs6RtqZUbn4kXzqTUK8ezdfN2ZR2vNPCCeR3Ur41v6KFdkpSkECgER19k",
  "key47": "4vVAqbstVMwpUCuhtCbghdkX9Df6qNdzzHzPFusMRxe7VvEvLFWyDCzGo2px8CXrLxNPfK22jcpTDiKwaPQ1L7TU",
  "key48": "3nvN4SNNh7w4BeXsM4P8SA3MrmVmohSTLLFUqGfwbEDFxLeWFhw467AWcqVFBCVcyN5P6h93HnYCVuKyLHCzPv7p"
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
