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
    "5Qm6KPeVvCjtR9mBUxNXPCQvHnGcd8azW5JqsptrjTHENgm6WJqEj2fSgcs2J7vS8kaRTmTUieXTfFoXJmKurKhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fPvKvA7C9VAGsPeFTNvYfXU4a1HXVsjDgZtRso5P5sPLrN2PYusAV6qMoDgJE7cgUaHMHzj474RU9xFaEkeGAk",
  "key1": "5YkF9YSdL3hWwW91uLnq3wXaS9gdqHjU1khPTwDdFBPcakFN9h6DDSFHbQx5fYBbP2SmArtae8fov9fbyyztcd7u",
  "key2": "39qupF8QFU6h1PoyoesrRxHeeQ7KJZAjcxALo4E7YQaZvf8pAgC7Vz3ixe9DGV8t4yv5CbSc5szEeZHTtnYQ4BMM",
  "key3": "3WLP8B6emXmP86pBVaFyRrpHbTqq8ZAC99FesTjtmzwv1j4TvSTwixhSYho6zFXdUcToYgLt71upuzXpCuQ5qQGT",
  "key4": "21fzhXE5M66tY6nJHHVhVA42GMPL6gRq56yvkwV5PGjuB7JN8QKnYsGTXXg57PaiNGE5KB5gKxvmR8ebdLTtv7Cq",
  "key5": "5Wjte2bjAN3f8ZmS58X7x86C6niT7QPKPmLCgpUpwtFSwRjwpvq5jhTnjNGaX8Ys75dPGa8waYGYtomEUuKXmcSL",
  "key6": "42Dza6LK3bBSUQFShWAmu8GqTPPHt2dg2szGx9L4wkik4xjGNgFQgFbmLckXQv7siW9oVDKRw2immeNvA8GWpM9r",
  "key7": "2Z2VSZkb9DPqMQ1DedPKEgjcbh1j23A2EQGjGRVFMFvUZjMab7heYWu121NEoN1MEgZXvvGK17RWtfmGXYu5Nhdv",
  "key8": "rC7m454Usey6DDsR4eL6BahA5dsDq12d332btAppybjPsJufGnvGtcsDqyKGMwVfjaYF6d21WJMKiFQRfSyu52r",
  "key9": "5q3dp3rrx3afYBmbpah2dgRvqdhy6gL7PMpHcfDhusCXP9b1VaNNcN2pQfnfHEWFDKfCyNZVXsfLJBFWrTEYDtvP",
  "key10": "5mXLCAchiiEEx3nPnSLLbpuTo9N29oTAqiFumCz4sPqUSiTBBDzbE5HQDBRw3VonE1sx5mQpoZ9sRXjHuJTX9vVX",
  "key11": "2gZhVpYgqtKZf8uQhXNK3M8a4f1BKnWLiyEZZxvwxGVN4Wm1HpqQeXX6qQHXTLkbEXsPxXy2m6mXtjUMM5myosz3",
  "key12": "3XYZa2HTFhjNH19yxqTR5KAD3ZPsvExvU8WCYZeu22d8kVki6WQNsp91eeBbWAm2PNWComwKwAo8r3RtPgfKzbyD",
  "key13": "4Faevv6tdXC5n8bUvpG1beTd48ZZEYaUyBXkYBuU5RJxhhPRw4TFfLBSCCHZW9ZgQQQXcDRMaTmtFk97HfTPbgQB",
  "key14": "2aohNiKMjAFrVg32RdaJYDtXxAVHFpWP1yKVy4Aw9rj2beVSx9UJpiZiEW9VRL4vmm66uGwzi7gcvCDL6Sxw4BwF",
  "key15": "3xeyMH37UMTDjQNh3VYWN6PB4tSZGLsXiFaWaqk7U2tG8vduxvVYX9Sgch5GZKEjWVr4gfiSQcpvDmUL5ApzuM1m",
  "key16": "2mGvQ1EVqE7XKjHaE5bQAh2UFt3BWM5Xh2Aqrsg6LvrtTEpwF5MPjd3na86jqYtw5TPJKXkQxGQSNsjZbn3X7hQQ",
  "key17": "3SWukPbtnY68nPgSKyWaKq62ms97FJQ8SkNYq2JtzfkKwDcHzB9caShmFPGi7LfShocyNGUDFA4cudu29ehoNxHA",
  "key18": "2HrLbL53VS7H9vBk5eNvT1DFs3Zyxk24g4uYAhcH3DmfC5fG6AskaEpiA6TUHbXDh2AANHA6KMAqntWm2V8qj3ZG",
  "key19": "5qnkZMPsC7KRXfmabN8sJuDNTm1jA2phroJ6vR3bpX1wS4k4iNZCxi6g1SoGssABhgpAnq3aVC9uGYA1H79GT2KS",
  "key20": "55J4xiDdKMuB7eTSDLgVNeuxKgimBRhPv4dHCDHApydUs5c5bN76WU1mq9tExMHMytKR1yTM679kobuTPg39SXn9",
  "key21": "pAL2z9ZM6PM6tiFN91D4N1aHkKjNs6tKiWhKbV1FzukFvAvBms2SW9MR5cR68LwwC1VyYNtBrCwJL5CpCRbjoEv",
  "key22": "3XiM5YWta9Uqko1toRjKc2GRxCFhKNjmNJoUizWBjbWT5mhJHXhuCtxvWB2KZfL1nXZYAU3QsqKLaXZMN6BnggGq",
  "key23": "2ZfDSPfdEY7q7NAqiddvShcnWoKVhDuuUTkLqsRzE2NHXV9ShrhNgAAt6f6zmVFpzjSjuTDsxkDB9PJu9zTUt5ka",
  "key24": "42dNw8yDywXSoLufr7nHZi2HGUxmYhDS9kbyC42srcaoB68MX2WMpCGrRn2SZ3tGjRoL7Wif8Q9avhc738ZLdsFe",
  "key25": "4UG4bGKU8CNFtCWbdKfvUnzYjy6XQmUFpgqyPzp9w9UgJVR84pkebV87DtTTm1YS2HLkebvG8WzJdt5TVy7ynwsF",
  "key26": "4RBKc9j2wCyJ7ArE7q8R3gBY8NPDSy6kNo22Lpwc9CDFZiViisftu1FAwkbcMXag1wxbVyYrVn6ZjdUiPMTWcG64",
  "key27": "RGdEpbvtev3WgGW897gX78o1xAEo9RTC2QgFdWyAsSFSEMvQPQDPuGYhonYVYqaUcJV12bz4nV2HfxyjcBQwcm4",
  "key28": "5UHBBARUtmN3v4dsXKBvZeLGMXopfx82ZUBVgnN48VZ2bjtrbiufRMg2kB72hwqxEnKvPyNWDdXqXCFfTB3u67L8",
  "key29": "2gbAWFV59Ah92PEcYT7pwpCG9zxb1CXEn9QiBiTjFhDjZWPrK9j1RTGdQUUfLsSefwPnsj2tE3HRE6QzWMPtxg97",
  "key30": "65WRAGoXA8nNKrG9AEDNfbwU6bUg95BYXEjKmGqYfYU1ScSjt2aLERDzCqom19xAEcbVSqpLNTbJGwLCq1aMo2vc",
  "key31": "561GzxpvN9v4wCt62due1H2aXyvXrVzLuiLccyzEqEjDnMtQfngntfsXMpjovs3XyJwvNqNrKCF2PknyT4LP9Qtz",
  "key32": "3V93h7pEkBnngkrWZMwSTcM5aHNFhvV4xLM9hEAu2gswuMDedE2oecnJLYgtqAnwQLRy8JyL57Vsp8oLQ2hzwAu1"
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
