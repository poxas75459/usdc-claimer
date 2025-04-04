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
    "4V9xWzrGUR7Fk9pCSrNqLaNmnvS9NE54J3vgEdpbhZCGft6tUzdvvVrWhcjwRhqRknYY9ahVEXGmAYQFBzvUy5zW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zNY4qVBSNZg4gYspdZ7kAMtTSgJnFpD4Szt2f5J3kJGDF8ggHpyW5CKEAFdVFsRMQPhMXJZFX4EtMzG1tbUSsep",
  "key1": "4bP2VNRbhXhkKo6FXSNNdCUrwmh8aFWpVKMSZqcqrgHEJP2fB4Fxe9V5MVDbLQDXpUYQcd6W6DLRzCSgqt8EhxLc",
  "key2": "eqmrr3NiyVRwyrRDjdhKq1HftyVNpsjBgsamyY8Rxh5tU4faZxurBUu1ZTrRiAA7a8q9i5R7JVwS2KAqngyDnF9",
  "key3": "3Z1LVodHreNnfcAeVvVeEnC962a4swsauaE7ZKVwZrv35hGAGdL1DCQsoa7PHi9YKjyvTPcDKTCvPbA2pKCK5T2e",
  "key4": "3BQNK6q6Qb2CuA8uVvtPWiAj99BZmjauQ7Rwth12U4acHAN296ch1MmCE15EJiPngbd11Yr3qfk1xdHGHn2ekPr2",
  "key5": "5hn69kyDSmKpGqyVJJwHreUMC67chwBrbjR1DdKYbM7qT6vk49252bpzGj7PkadegLjCUjH5KtmH8ZpGyitpNFVN",
  "key6": "VEf1cXB1hcqwvZEX2mWqMEyZBtQB1oc49Kadq4atH7nXYjBZG6YyMo99oUhnFdpxfJ2zPhihL6iUawgtuvp6fwX",
  "key7": "5tWW552oAjZvouGuvKbCaWNDiRYre6ieeRjvt51zoEiDLn7hGwcvRZtcQrw4QbTy7RSAkRs7CfEdbm8suP7Mkfue",
  "key8": "ztWSej32hCEZuJSBM248nuBgAFFxoA86erPCXaLJYcVEBYTBGrQfrcEbGLqVikhS1ri96M7132yqpaE9Ez5gh2X",
  "key9": "NjzZyunAWNNZEfBiJmdGAnmpwcrFNj81whazWHHjvKqrof62n3PGwrFNyAn1WoGzSQhJEe96ZLLZoN7QLT5iwVS",
  "key10": "4MT7QzcZuaQKeHFKUcqNEsUecpBQq8d8hPyhDLcqSYqDe6mKi2Rm1MfLzcjckyH2joYVWfBSaoQxWZaRWFn7R5VY",
  "key11": "3FoyxPuGkEAwfjt5qiy7vc6ms892Cwhq3wMNSmsQFvC7YFHKJzYFToigekZLDRPwaqmt4K2nHvy9ejKC4LhWNvPb",
  "key12": "471yphLTQ21rTXpEWbzibpm58wH817AXnGJHaPz1LRsaiC3jVRNZg6c4r1JQrBuR3HFQLX6wLuDF7jg4hcWYGCiX",
  "key13": "2Y1HtYLVh22fcDpsb319xAFQE4E62f9m8ekBrFQXsCyci5WxFtuzCcHHzBQTRETpcNLMxTHjm9oRo7ArBR4AXoQr",
  "key14": "2djbeReqzQFLNjW7pHhL3J5FxMpj9d7mKcHVSUChyrTR1GThzTaAEmkGxUpc1h8m1akZfmb3Z6Xnx383d9cFXEgZ",
  "key15": "44yypAapuTRAF7oWU9J4qEQmoMPBnuj1K9dTsUEw24ZwAxEXypxhBWJwnHLzXoVYawi9JRresWMAjms3CYRqKBw4",
  "key16": "3AaHhZKNMWsNjCLRgJ9XofCJ1D8eBrTrqhfuoma4dbDtQJnC2XAmGkugT6rNM4YnexvXjFbs5wN8X4xBSV63nqAz",
  "key17": "9DfZfGYSqA1DLxKY3d7RfRz8yJoLvjQit5XZqei66o4J8iu6KmF3sACSAsPZpy34wCBeeLmaopE8fZxbdJnSBbW",
  "key18": "4HqcQ25PRnYZE9bvntR9Ybmrsw8mq5KoumhmbR4YuWqZVFHKos8DfRkS7kkt4FkziAC2VVvWWGhAHGdjwtvrx9Rc",
  "key19": "KX9ixWK2fHdEonTaxTcwYr97uiS3bWvsCJzHFPBRBBeiNaX9cBdZoAcpQ8STwR5mSBRWLJ3SRYJf9SifxU7ZBZz",
  "key20": "2pLKvpA5tiF38P2s8A4JJd64j4kuXuTMatvLh5E6ZCQ51kEAedfq5Ahe3BX2qsUwpCfj9J8Le29Cwoxk99r8zTpV",
  "key21": "2VPRMu876rr9bxeWU3LcgrHbixbMfLrjjmB8iURUhhdsMTauRKD3aDGaF9f4ovs2QcP5zv9yHUge5JGc4EmY8n3y",
  "key22": "cULNVZQLDVUKUVMjiFDstx6ky1GaVh2fBj9swF2DhoyYDub96TXrqVNCDwCHUz8pLsox1seC9LajA2bWX3epj4T",
  "key23": "4cDJGBbtj1Gz71zLKajamsPqNJf5JLaosw4P3zrYbF3fKQfLpcfKXkJHc7M3ig1XUZRjPLkCD4S28HMs6uaBRNnF",
  "key24": "4bP4tKfT1hEJ6Xane5fappjv1zCzK8qjRHS2zmpAhBkShkAKdHyZUrFcMmLJKcRDJmr324CPNU9gtjbKG69bJxUE",
  "key25": "5CRQktCQLgCEK9VbTMXvbTwrhsg6qpBKbEFUE7Dr3Ki2oBwKHepub4mRWTeXinpmZZNiG1jrWcLNmmgRHUmVVgT7",
  "key26": "HvQYwMJrJPr47D9dmETZUM6aY5qo3swYUmQ6hfv9spThEb1NwKHqH1RptUiVpxquEsNAjjEXYLu4bJxGJ5fkQJQ",
  "key27": "3SCVV46kwrob4nQRmV3N6JJyPxUKsDYHjMkaRnn6mBMPU27Xj6qjWChhnK4GW95pC3GNXemWKH6P88jfoFVxUti7",
  "key28": "4vZdshF8LNKFiqfsPpiC3NEwUeRZxeF1d1ojw9PGSrDu6o7BEcHARqWcxkUrTkuWrYHa5TSVGA8HBnNuyfqsfCU2",
  "key29": "2EwkS1frHKA6c2g9u6wkrLEpyzWESqabHsSbrPsKMP4dJyJEaqjNsTXJzus18T2n8Hfq3k9vbhgq1fHKbR2tAXwh",
  "key30": "2REmVWZKoZnKLYHT1B7Zsgdwc4HrxQUy7shtEGmvr15NHFnwe7Nh7Y9GMzip8AAdFJ5TQAPKe2JF5snTJDPXQuoF",
  "key31": "5uVw5UtG6wtc9VbTpe6rGHhZoLubsrfJh9HpM3VEZWdMsAdr26mdkp5rCAJoXFdZzgzqYuP5KGADTrzoc8SR9aRd",
  "key32": "2d9Bxoq43FG2mnXtb1sPuktsU3obdBMebN4wmXTLEZJxPcKiRveWi8vafkiCm645RVqVpbLyu446aezJiAvbQF2p",
  "key33": "2zvARVhUvT6MJ1GqHUXFSWnvcPBdCvfh1SSWY8sHDUpGLb4BcZjciWqdL6X2R9oi4RKuZ5NQbdYCuJPygZ35aXao",
  "key34": "2zmAq86mitWw7yvoAFTd56CXe1BLFjg2Q6ZZt4e5X6Wk4TaNqzmDpb46gAU3fayj4uskSsSU6WuRikux626hBdVy",
  "key35": "SVrwuxAvx1Lu75JMVGqshNLnPWC8kk1adCu3vikW6PczArsCHJPiimDBVVJp9t66nFSAvXpS6TCVQ7Sm2DYYqK1",
  "key36": "2Hea9bBYhxjxABjZyT97nU4zzHYdcySx1rwpJBBnQ4wM1E2zdGmRff24TWjFu5peYQLDqESauKfYNwnd4Sxun852",
  "key37": "mAvA7SpEfC9KSD3TLkubnv8K43wtSweJT3UBcTFHJ56wSFrPMWYaSzLiLGGizp1ze9cj4C7FdQRygi3kJo15Pnb",
  "key38": "2F2kxk4h8CwWcaPM1NRfFdzdyJ9yrxr9PgbNST3ha56ehGW2fE6YKCTgVPZfkA2jh73abpPY27Gx8TM9rv5mFguP",
  "key39": "34daCPDdvebY3kMzt4dbpzWtQ3wuPEpFRevoGCaNi196Xr9m3e3fYtVkDqYGCWc8SvEup5gBwVd6Z3XMpR1eHGqH",
  "key40": "5CKPmHyKCttHi3qngisnjP362usDULbspZAi5eap2SarRCuecEQLYH4K3YcNMo82f5HPBeyvEADhj9d8tFcp6Ydu",
  "key41": "5XkSxijSY3FuJBBSWfakkaBcgXRzU6oUsVAkXywhD4UdsUodp7mhGX63Bbhmth5NSikNRCCGjmFxaoUrTyhiVkyh",
  "key42": "3MkJP88ifGUp3At81zQabXqV9Wg5YeDB7tSyvRQnmyfcqWrTsrRXtU5enpBrErBSGWK61Loc9j4XPmbvAcHz7cfL",
  "key43": "4gk8TVp2xDF331LNvVgmdmRZmPvkFtoAueK4W35wyRjRvkuZVNk54wLwMQgTF6kt1VdrRJF9JQkV48mzGLaXqX2d"
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
