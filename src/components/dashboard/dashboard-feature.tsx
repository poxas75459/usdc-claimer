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
    "59ofAboRmcN1zXeiq62kSfFcfax4YjWnj8x6zRniucqThD1Wk4KXPoDDRd3FHSMUZ99kKRj5zVzz3JzKJPYK1D3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46HD6mdN2WE5D5LeZ4mtGUNCXbuYq79jiL4zHT8Tnu23zF6P7B7pqTwrA7YkdKcyytYzKS38TyeKu6n9FzHJDX9z",
  "key1": "4FQfYK7DcJb3tMHyd9ENXvTBoz1sePbxvtqR6GjwYgh9iw9EyWP8Asi36ibZQ57eywo3p6A2w4xFVGcHKWGK5sts",
  "key2": "1S3RjDcF54agfgdaUAySTw1jhnMZqqmd4yGET6wXCHRAaU7UXZ8sJLVqQdVCGyiDPZFqMxfffHwaTorkkDzjVQ6",
  "key3": "56Mm3xVSHrtcTmF3tDihb7aREWV1hxGC2niKzYYqo67wq1jbcCPr3ZPRz4AipGjiyEpW6kmSkiCrCJ7jWhFqwdM6",
  "key4": "45W2qf8rhgGhmfBJSQXHUSiwSaNnTUeww62Sf7kZVzXJk953dcqHiekf2B6AtEuxD7f8TWzgeYrgMS4VJrS7XyhP",
  "key5": "4mb7zezMW1T1jRF9WB5zKmq2FD2yHL5nSAEdCQx8zQyR5BV1iaxVjzernJyampyx8ve2dhZ6bqQWXxXogPuGkFX8",
  "key6": "KjvkEi2H2hXvitDm8kcvg1CBVH4LbpoGVJSxd4pKLYpvbTxaQZ9kKpvdrVbrtdgick6xiA9ehh9Pt3KTiY4RN5b",
  "key7": "4DqP78zMFuixHVpRm1xxBCbcH6aavv9Av6qnV6QbjqCijTU2p7mkpnDcAa8JanjsF9u2CNhGZSeVuFmA8SpYAgkX",
  "key8": "2sEU3QfHQDJoumHDawB4Dmdsamw5oXuqq3EW1goFKaFypPGsT5SAKj2AM3tMM6oWytbU2ugec57o3aHi7g3iznxy",
  "key9": "2Dbykx6XiUHapcPhsLdskDh9Ei1pMJz3paqVi8QPkcG9FNtRJu6ei6LScuuertumhMJppHznEFEEuMKgC4tsUe9F",
  "key10": "3TJXeddBKki5vziTmxb45T8C47ZBRT8KHYBEfncHecKeYqDp5nXmBfdMyakQEX5F4gvdDaLK7Xboaijsuxcp7c2a",
  "key11": "4eWE9AA6KVizj1tywpcggyAHmJdAFsc3K3wVm6MttHADCHunQUQ3yUg5un7GJfmdVvuDKqLAcCYqva4zWNUoUmNc",
  "key12": "65doZjGJcuPKUoRqDHwNXN7NxtndNKjqkqNywsFG19zQLeZx63PZPYS9w7gdsr1HzyKyo8dpJ5UzD5F1wCWDaLeE",
  "key13": "2xbzwJBhCebwoi3s9a1bPcMqFcP2Vtn8ujsKgnokNREMZLz5yi3R5NV2shyes2B4rrCqLYThCW67zNJHebg3hMc1",
  "key14": "48T8TjC5SUo8Fntd2LdR21N8zhuQRzhED8T55QFCb52u1bgnKZXxFwu93UePrdAdixXB7Q1Rj5ehyjmcWTWwQQrn",
  "key15": "3WAL1gEGdhUihtiDrdFx8Km1PsVZkrV2maHCXMvyVkB26VyvQtZQEqet8V2ZzF61GPB6RNLKo6Dr3Jo7FABxS7jr",
  "key16": "5dXFKKUh69fz9ZYQkLWbbPCUBnusA5PgQ38X8oB6W4wbKNyE1NRY7VXNDQpZviDMtacWSdeMrVdu1wq6Srap98aM",
  "key17": "2MPqsdU5rxoZxJgTf4wyNVxV4RFWYsTu51bPPHGchSdBGHtkoTMf9Qe1XfnFpK3r2CK3HWa3gVrBVjenG4V49jJB",
  "key18": "4jo8aHgQSEHjfESG55t1vbXi61ZQZTsyoTKVxBMXeHguP5MJDScg1owmpWL5v2P32u3yrbgEZ6EKHbdjgb7bg2g3",
  "key19": "MpmwiTzQ2rfAttmRbYY1M6LaJnYUQzJyhNbQqatvessBTzq6svvpRbLDmLokPQABB6Ercbo8z9aqVQVEN5M3nKX",
  "key20": "5HWpSU8LmmNhR74phkpm4sw2t5SHAeLy38hrPgqddBTBjKzhrKHvFvbp6PpW3JRn55He53FXtxQaCLCGeRUw9Qou",
  "key21": "4Dox3X2hwWaPVtTF9xvtB7nJSchoCDUU8SXxE9S1nERAM3kFGARDE7yigC7cNtq967oVS6brRqWjMG5dNSqaQ4dR",
  "key22": "2LhVB3JWP9j8zAaY9TJXR3KWnXcMkwte5u3UazXdVrxdf6UA6CBfFFt6v8H2eQbWKvEYqFpZyPaRvywkzeUjn5QF",
  "key23": "4mekcCPKeBEpAwXBZohHEiprnmp5vMzaCiTgx7Mu2WoxRkFeLuEeij5Grp6qTyu2W5wQjjvFQkQjSxs5FeMfxPWJ",
  "key24": "3h5BK1Uk2wRdNAc3gkg5SJjqFqVDzBr1gX8ALNY7T7ejw5X6gmdHTeL52Td7gGW5q1VNSi4Rq3wGzrLgiN7SWwpz",
  "key25": "2yCrqFzHucGqzZcZ88bCWCHHGwW7n3S2Jz1gSJrT1FSUU8v3E12YdX72311oeStqTLxpoQki9AynwbdpgVSL26N7",
  "key26": "NUkLiVyjiYDGBKU8LG81jzueR31v3jp76s6vGuw33WDhRKJjkGSzCEfBVP9VaMV51UTRabJSjsM4F3SoPfKK4UM",
  "key27": "LUbxL3T17wvjz6ypGmuwUqY6rdMyiTugUoGGXE3o5iAp7VZT6dCei5wFDCjuZ6LNHyquynshrhNBiQnZcCD1Acs",
  "key28": "5TQconaW9tjcoj9TphJrLfKsVVC62XHARru1962NtGc2q7RPkXJJEFotwLixHBToK78s3nvTTwSdp9fKjqR4Swve",
  "key29": "7CFqWEmb7PwfjeReDXyyVUDr7vAm68jenfnN4x2jrmHq4ezSGWMGtCrt7rw4pSMr2sr9TVE2JqsVX58hidWBh1n",
  "key30": "4bydtreYDm9MtLK8Vj36SHKsZRJs3ssxHRa91xw1jDtXQpPJJTU84uy75G4muypTggARs7VhudZTbmrGpdBSN96Q",
  "key31": "4rJLfzvZEpYK2j4pAWbxFrgPvG9HM3W62prp41rk8Sj1F3oyHXzdFXwYHu2nG6vYVAAuubzqz5wsm9LKzwmdaB2K",
  "key32": "3kcvnwfqdNp7YUyVwYcm2s8vD7CDmMdx6CbboEgEzy11CVr63JtMS7Bki8BYZgqu1Z5xtSq4qn8MLLCf9qYJQ17w",
  "key33": "3cpotdrsSx5EvvGJx5LuC6BuE2NGsyGMuZYQ8prphdDnmiH3uEviLd9qbWYefcLDFDNEWV6iGJRME6a7teZXLAo4",
  "key34": "4PcLk3kwS1hfCSPq8rdfbPz51tdYBGVx1khXCNiKXPc4YEZi8HKuQHfbLuS5P6eGjoWFivip4vNBWvRdzdybQXp9"
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
