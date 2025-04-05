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
    "2jKYq7XQMexZXenMuqAM3MfdGoX6PPcp5G5u14oRDsRb5B3STxQKzDi6yYNHvaoLxpUGXsX39JS1m4qYfz49Mek7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsEQ5wBNwLBUYwrr2SDg11Ha5fmM2MVuAqJKPREaWhBY7n3QsH3eaA5otii2UChiLPWzMEXMGtXnVeKrdmtcMPg",
  "key1": "3yPaE8aZkxCBhqbTRSuhE2wvdDyLUt5WTqREw9QHqrqykSqsrHAEbuQLAFdvRq95dCM3JEZcYCeMSzxkY5vXWaUq",
  "key2": "2BD4xbEnY4Kh5h1dGXSSGyo64wF8PEj7Yn5GNDYC8AeTyHnYpqvHnQJ6gCfWLZUCsSFkgMEK1mRKDLmhbx6E85pT",
  "key3": "3vUedju4tRc7CAEHwBj48C3C4VigxjJfuVugiZdhHovoaTj1uWYQGNeuvXYas4rn5L8tYh5Z93xg8yEm2J4A46BA",
  "key4": "K9ytx6319s4rsygBq12BmHNB53nUTFsnFwe1fBT64egZmidW3vLMLXBAj1WQvKuq3qUCobyWxMm4UeVWqxDe9FW",
  "key5": "2rLf12snpSmBLi9J9pXgtPMEXyhAca5Wac9PPxXKt7vC4gLZHaA1825CZrMtrXtwxYEZNnUNRzwjKto8NkyCEApK",
  "key6": "kgVNbw1fHqSG64qEMBAXd88eNpNccvkkuRJ7JSLTfWFnqBDJc3WEo1SpkS4aqnECbxtppU9qVvPjr78byfdnwU4",
  "key7": "2sFAPhLhQxzQTAwEh1pwXcm8bKbunjbRYnNG1G24Xynm4sbkXaJohgQ7V8TqAbuey7RTAs2KAs4iGPLkwVmJr7t4",
  "key8": "t8wKLpWT1J4qT54zB6eedaJnkyxbWgrLoTCLozF4PPg3Tzup1MnoWdr29J8hQohoLCvt2414fsHukz8VsoSf1U4",
  "key9": "23fxr5Mf4E2dXj4ghocS2Ne9zknnmq2i86H8uxbiTpTX3nc59PN87zciy7EeFsXHYvnDB22cBuU6yXb59rKXV6qA",
  "key10": "43zv6WPmcwf8GnjYhgZNPmhcckkgCeNhidBia1Xbizirgm4HLUYBP87SJTFEHMTK4mGZPDPHLXD86y6aL98o5Pck",
  "key11": "396WubiJ1xLN9Wim75R914Q1nb3ak2nyJCa2GZNVUeebr1G7vhend3tRZbdHpM7HSR22WxHNoAsob5ts5Kr92yRh",
  "key12": "4dAGeAca8ihS61cf9cZGrMdE55UQCfYX4GbjxTVrpPH47Zi39DRh5JrVQ8scGFtqn6rqtpzBsv1kK1dgHWy9MQHF",
  "key13": "KPXKPGyp634zDv47KHqZGprWgRUQiTmu2HKbT2ptQZE5ev2LF4qUy289NxFX8SxqXShoMKXumnJ6MXejDpKNWpe",
  "key14": "4XrLsTyPKKTVUjCLKMUumBn3Sbs7Z6kXaymeJqukoQnDBXB7rxJCJfcsjnNAbxAWMur2JubWTGDZtynQStiSwN6y",
  "key15": "2BxEVDjtcgbGgUXnz7MhDtYTD1BafAwnQTWWL5Rtu9ZZDxfBTjS47AKjmiQbm1XpkmVXAD92UoQwcsXzryk5F7G5",
  "key16": "4htHtkrxmQM6onHtRKug7y3vJfGFCA3MgNxeJwPbTVfKWto4ca5Yk3tmjbLrgdqAJQmzEvhCVr98CgeBoFZt5csL",
  "key17": "2Ke48aFRYST59BPe1EyyonHD2HBVYMCn8kYwBm4KULu8QR5rKathRjBJgxHMVQuCf2EXFQFQ7NLy7Qi8PAZXxDuE",
  "key18": "2HsP5BjX3BcbyXs8ZprdZd7ZbCFixzsBPYuaMK3wErzp8P4T6Wgkq5afir7swKEon7zbPVE4wcyjMsjQVbHWsQMc",
  "key19": "2SgEDPXktqtD9qXvqYsgW9vn98bHiR1AW44udq6ts54EBDJQT7o91av9ehHLMkKuYFLBJr3YNcDB8xAQeddJi3SD",
  "key20": "4VGGSrJTFCUZhDf1df7FhtGHv2Xj6rURPoeNYVKd7XN6ThWftUnBjMoA3sEm7f94PmP1KVHL7zW1Zrd2pAQ2Kdin",
  "key21": "aNkztfkQSPXp15kWhJKTfiyz2KazZAMPyobzH9Wt8ZAohiQTv8Bwi76dX19dFaehkBE2aRvYesMfhSihXuwN2Yr",
  "key22": "3qv6ED3C5YX6kZiWzwqpovoCAymo6szmM5gLNATJbWbXW5bi57oGuk8LWj5SE3scnYiiZKkjLH8iBESprdEXiJad",
  "key23": "4hZkhoWMZzfxs1seP1ufH3R7NmDvxdAJd1xiB5YUu8gVci37fYRGiFP6L43LM8YS15r8XtzJwabcv2FbBFC8CHqG",
  "key24": "59xinwTKXsBLtGecZSTt65hpgexMjpfaygTPd1L2PBEywWRYRFGY3dUKLDzPJfge4XBqgb5P2jJ41KAjBMnEfzzZ",
  "key25": "58zQ1RfpqQERA37SMSqxmNyCAiDW7d72u8cQm4Xu6H1QUChi92AY7hMK4AHX7Jz59qhWaFNpq4sdTxBUR1pyGBwd",
  "key26": "3xyLD4k4iCM2evewXeodxMiii12HSxrj9PToujE4fqy47wXztCKU7AunZsg51wenHky2UNjTvVeXa4hdGNyDQjCa",
  "key27": "USfMSFgggSguV74rJQ5Fe976zeZNma9FrDgHvqve5BjGAq4EahmhT55okLkVChikr5hc9ZC8kK2MxTmyumGqFnf",
  "key28": "AuWzHpo1CLUQfXMQwBFBmqrAh1zotro8QAkLvh86TTPhLGCs6BYyyfKDcdfBYr459P253Te8hEbMRvhjNdBJX5u"
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
