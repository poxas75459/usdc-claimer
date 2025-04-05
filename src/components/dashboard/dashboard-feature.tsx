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
    "64GxSrhNhEkAW9sDab3sxuYAbQQzvAmg71XwE7EMj1QDHRMSTKkTf2WB3cqyCweh7UiE4ESUeXo1T8iXDWyYSBEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cRNwQD8KfLqWihCwEp6NLGFuaNTCuY4X53XCT6u4qeVHcuaDYt88gSxWBdtePYUZWJ3qJsFdiP6g9z7JxrLbx8W",
  "key1": "2Czc8nDoGPyzLaubU3d65h3xs9rSW6HGfKy8rZKQQkEB78CzdN8qnSzTwJfHoT31E97g6V3SH7xTs9ZPhMdSBZx2",
  "key2": "5N56xY9z4z9ZyEXdHEo9eLAbHBhfnJAWNpSp5mhm6UVPRumWAEjTKUVgYWaVusRiYXxJpSjRJPTdNhzNrJ42cj7v",
  "key3": "2Vmd4vkxZgmtQYQQ1Af17mFomcaT7sukCKswBZfngCJqkPMd8Eyg5NuFEDaqqVJQHX9PNGS9CwfLFJK8SbGHQVWW",
  "key4": "PtJn1BEts4AqdiLQyAdiTQdvcUPc43Q4oXpuwHKEXh54CTy18qA3Zn9BaPCW4Jp7WEpWfTX8MY1VwSTeDhmdwdp",
  "key5": "3bh2zogGLJPpynBBvnLAnKY38xaKhduVpph7L2uPo3rybkJbxz4T9w16J8ahjfhEBqfct8jkcCX3NzB6eekMfwfF",
  "key6": "5KjMviXjTBvFDdgrepQTv37Xob18SzRxEzup86ueHMsmCaWocYN7byQGApWXJWuZzJENfNYkuxPVZYYMp8V2rYs3",
  "key7": "5ufwNz228xkNCxtugnTiPf3GTzi96fkf52uShFEVCSZMYXyM6FiBtovAJ4ct1doSBWUaAXTXnn1dveTtuVMmhGXJ",
  "key8": "5LS9EgtjBaGQLaFDLKwSFqsgG6g2QvxT8AsyrtfuiSMGmQ2M2sSsE1Ge1gEZ6QpZ3ArhAU5pVJfeZBNqkKW5XudY",
  "key9": "4mxS2f1nByLrkekWskQFtKniWsQt1iqdoymMBfQQHY3sAbSqQuZ7fGjJCnazK9qU9CCYxCNXsxdS8euqT364r8Tw",
  "key10": "58Zewuj5CAGZS9XPKqFqvEX1MGJN4NCcHxtAjTbL1ruEPHPapJqg6RjJ7Sh6x39TKPxejDm2hcQ2PD7UTuDf4ThJ",
  "key11": "2yKgPiTRKNACsEbzCUwmnEbYnBVtDxhZbZEgS3ZQwssCvSbgLZQdCvqKBTkGWHENNh4CuKMVMM8Y187CDJLH3a5j",
  "key12": "3NpShw6NZxX4bgzcgRZrEmQXTxwN5m4QGxPSFT74r3P1shRBigXB4quuszwgfSNKRAjR6qLx5MYeKH4MH3rssYGa",
  "key13": "2sdahuE7ivrTK7x4cJ7LfZDdmQrWAcxr13CZFDqPFF3gjhM5VhmdkWHxzruQxSmCDNnWjbXukhrWtaNozbYEuUcH",
  "key14": "6131s56VukoB6AUQuhZENGQTdo6u3ZURG2WUoUNrWMjUyyorFTJqm5TDNTKuRnpWNQuZEN4tMq3CkvjUeXwVqPnB",
  "key15": "5A1T82Xhu1vFVbnfktwAK4o2LgDV1rm4Pu6Ej1dn3PVsXoM3y1PZ5smChoPoM96riZ9oK9sLhrbaet28hJAH3qj9",
  "key16": "5aB32x7eZifn1ipKK2wocJmHqCLCkkLni4fAucBThzueK5sFHUtcWYDsTqZRC2P7uEWXrdQ8Rag6PzfWpgLHakF",
  "key17": "37ZnvzHCGQDYm7vARei1Y6Ucr7axjpD5Csytif7tX6ezmWUnS16sfbxRd6jJGveG4tmiH63UdwN6GNsYJgEmQ5hC",
  "key18": "3sQ9wjmCCqsoCP1J3TzX5PCfmGdamUfneJYbawzBA2maFKyuz8SSw6G2vSwWeWYe85NU91EbhTXxJVE9evj6854m",
  "key19": "2g9myFBcgZh6rvnuFHnXcBWeULwUz6vtKg883dijYviXkBjsmtYfuUypV3mYqwsGKtfw65dVNhWXAS7t2kcjkYMC",
  "key20": "25ekzM5Ec8JxiJxRo9JcaNA9wfdtpXCkTWHGbvbLmRzyweHjFSLcNjVbCCMQBa3Fy8UeLKTbtLrsYkXXKE3sDorw",
  "key21": "5tzmbctzuf2s5VCDuEKnx3H8evrScKV52R7xGyfqEKTaSNBzigSESLaupxSkaMEikqn9BFZ4ky2GSpzmJkfLC457",
  "key22": "4jqp9nxeZfzKiqU8UWEtbd2ZKVqMXK7KAepAdGLikohzh5c5Rp9JcE7JDQRuso5iFkyBXdgnsmnr7H2QAkFrgp3",
  "key23": "5kCEdSdQRFEBGSvxWxwFTYqeYkvn14QznyrMzFhyznEA8hWxj3befwBJvGk4MkAZHaTkxZBCMxEGWAaJrEXinb5z",
  "key24": "4Ppyp4yBkhnYymMHWgn62UhCvSeSxvd5cEkVrPGur2KsRXVud7jPiMA9CYFDgqpWYr9CFLGw8js9qtkUEq5U3V7q",
  "key25": "56BWCMrwkuRaNR3oWZQJT86mBtBh1JySWy6nmeP6Y1GCgqxynvomYoEMg6wco1NoMUePGSu1rzgwxRJvSL2TfFVW",
  "key26": "XNPQPdy8LjtJjyQpkrsfFcrkdb8XJwKikFRU1oCBcHNE5Chimaq8MqLUi3APHhszHveRUzNvVZVwWeerG5hbYMR",
  "key27": "2Wt5zzn3r9JJSMoGEFB53xjWWrVjfhuVALYq4dgs5V1pannooGFoUxG45TzaEvYRbZnxUg3nBJHJ3fWuhg4111TU",
  "key28": "2YRzwmQjb3q2rAA4FBippM4z3yG6j2CgtDLueoxe9jze2RLYoBJBNxBe9MqqpQqbJbSPwyr7St8922kbcMha7o7c",
  "key29": "4xtmx4pH3u87hR8R8cNBUq4dakgCfknGjRX9wrx1ZWv6y1ey6RwFasL9Jm1VHbwpJjicHGg5F3NV5iofmUTGhcAV",
  "key30": "2xYdJQ8ddtABauADte3Fsjn3Fg1mqdpTUbeDj2EhgWWvRDgi9raHeUjEXYFVGHZx4E5aSmiQD3hh5fBTBFLoQxvg",
  "key31": "3C772XzQ51g3VLdhSrpNz6MRPCtUNM6XzsJ4nXD6HjRH5enuxuoougF6Her52Snv6JJh4yYE4CtEQo8PophJX7Mp",
  "key32": "4txzkUc5t7yHDtHZT7EBEJ41Pt15MJJBccMqBcYNfKATRw8XppRrHcBQ9fXET5pTSrUVgAjxBNPFBnyBW1oJWuxr",
  "key33": "cnh8tYFqvugBSe5mnn54Pv9yay8NwpGuGJoMW6RACWoVsHBfC2eERD7DN7oEYD4AdrZN1vZAhVUTwnmW9PwZytK",
  "key34": "5tAYAqNBLDvaBakR1kuSngD4AhwARxtq8GHZYAYVLCjdmaA1BnjywCm93kcLHfVPFuePun9Vxq9DVo4GaM3dvG5H",
  "key35": "56W2HxHP5Sr8FpiKSvurQZsnhCrmYsQhv5DfdLJayDL1vz1ULBz9fn27Fb1AWoUkWfr6aSHAX8gf895H3QJpkpP7",
  "key36": "2kGeqPKvqgJRyfqu4oLhza2wQQZH7A7sAPF4tsVDyKu3RsHjFJpE88jN78syEjGN1bGxT7nzN2u9DKyjy6gXb4GQ",
  "key37": "5vVojtHabKF2ypVpwDkwziU588CfoBT7nCMCMDGS1E4rmX6jW3QXiJpqtjtdG92ZxePbu4Yo6EnroTmriJ9TcXoa",
  "key38": "yinKWQnpCu2pk9ggN2bjFnooLwq7HSxtvguAiCDPfeRazRYPEYGVaiasLa3Xaiifi13s2RczFtUiKmtNz2PnRyw",
  "key39": "52c8tiY8tSNavySJwxCdNK4xVuo788GKZcEXkK1dSofm9macTQyF2ErCuHza19Moa2NagH1UsuvQiFu7mUBWSxXp",
  "key40": "36LJFeN2afAHkzvLnWfvQJPKuVmtjoTW6dop1DkAYRSTCrgjQdsjGvDgFyjxcH64ivLG4hmnuebonEGfoGBxkPLy"
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
