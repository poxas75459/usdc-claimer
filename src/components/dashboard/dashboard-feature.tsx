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
    "D3y2uZBRTt9oEcwFBNCxhpERonNULdTSfdi8AhJohUBARBZcejAVHtSxQm9fxvCkDv5yjthQibMSuVSMi3bQgRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdNXtsf63hBPfzFeKZR6TLRtWASQTw1QgiHqjYeZUPLEYMJm2D1fx7nRLF46NAGeybuY8bWg3eKzCLuouobfdgY",
  "key1": "39aWiGw2c5kd1gwLjrkRiXokCWBmDB6M4iYW5JLBsi3mJ5H1pc47VX8kGUXvVUWD3tQF2GF9YE5aaBiyNQvwTA84",
  "key2": "2xrPxXV66aTR5LCpT1rLaKJ4iK8BE7iGPgMHamF457W7UYmL9wjta12NJc8yBJ1sbB8ZNpBMSNL2xRCbsA7c5muJ",
  "key3": "4vpHp1iXcXBxLZdt9EPST8vDsGijpKVXiBj5HoJBuuMhphkWy98zpSufqjBZJ2U7ozsUgbjee3qLyGzLNXwv3Byp",
  "key4": "3L1CjkdLASvtLR3YVGbjrD8bQxWKiuvxq84K42XK3ohWeunNQrUsk5SttxatkrTjcj6b3kRuuQsaeis6h9n4QhvH",
  "key5": "HkbF2qCXB3zp6VCpq47StGTi5TaY2dJVEpuiBDJdCczwXUu57oQCCL4e9bykMCek6HjUF9zbYK43YA2sr54tgWP",
  "key6": "4bAgVraqFMjh2eD7jTjPvDzoS2TYHb4vToUPZCoHUAcGBScq9D4fei3VzKkedZ4AFWbTw28gztvERg3hwTYxNBiG",
  "key7": "4p2MhS17k7mzht37zW9pP9D8eo65nYCLW57B5QiFZn6V5HLTVs1Ak9BjymPbE9AHApZSvkoLw5X8yRLXiBbMdZZv",
  "key8": "61P88PaTfzvnQSfv72xhUdEsBMg6iTTTWnZPaRbvoY76EUrhZyE89GVnNk3vx1BAqi2L1oKTh2vH3bLA3ySthsyx",
  "key9": "3TKXyMExrPCWNtbSUrtNbBAHq5b8p7HXsTHDu2NaKgHNoob6LUSRdnUDTnr8NujgesryvKZaxBU3zegCv52fvBmY",
  "key10": "5ECVUnkgSpNdx4ZAZAixiUhkGesrd7jaRvBgaCACw7dEqPUJNFuNULDMbaaWkfCcVZzn8D759J2PTYTZpKx6LF1Q",
  "key11": "2U2FoTFWuBdCz3yUGnCTnBvTXErAg3dBEv13Y74WExvsAFd7Q8HzKgiEt2T5cFcMbeACavL3mrEPuznKfvJwTuVd",
  "key12": "5STozo3fP3pYaRbASMm1BfkPdb2FRvQjPqsYmRQbeRBuBnpz47URgugfXCvtcGnDcxejLhnuBynGKf1b9wonM1yH",
  "key13": "5TKg9U2UfiLgPj9118ofygKjazDAurYjot6NzY6gTdzcBXjJoSh7N6R9FvHwVpc9u9AeKcL1uAtASXpTRXLga94A",
  "key14": "5RQ81bipt4TciHU34jNsQva5YL6oVSiAWNEuSqxQvgEqBKyiQHNwakCMYTqPKA6RtS6JHKRj8Qm3c4gBDPe4dE6M",
  "key15": "3PrFT4SVSj8u8MMfCE73p3gyHdSaRXtuR6pbptaYSyePpmTf56z5JD37ic3aVFX7z1AT1ztz8FdTzbPZsMLBR5jo",
  "key16": "52EeHJ4NKu27m9UK8j3b57koq23JpD7XV187ntpwSuVmsTvQj1NtvrHmv9LmFyJRDCdK3qF9tdZFL1unGYQTyTLC",
  "key17": "2zJWcimSQf27jAD2kQp77HCvuv6ThBWRkmQMNVHvtBH2jsHNak4WcmBDGTJ8D1M3ip8ebrDupp9zY7QpETLnapx4",
  "key18": "3SyUXhNLMwusf5g2HdYanKW4nJsP2oTT4Gss7EqFShKeJZizmQzMQ1wehEDnYvyYYnkv7KHE4L8GMSofTbqycAYJ",
  "key19": "FBbKtVi78T53X5moy7JwRrw538C2HJPoF8rHxzdAwJbH7eD8kR4higj47KYz6K9vD5YUW5sFaizED7yGrXA9tXY",
  "key20": "4RBXyhjs6khMmy1Xkn1q8pLV4cmvWpfgZLfevN51czjZCeLDiVpmMgu4H8Rdj8XmjspGXCMUGNwC4p26EQ5WQpFt",
  "key21": "5tBxSdhhL5twa6LDJMWNY2aXUSX6pXVZzdYyTHntbcb5UkM11CrVCBiUhkNL9RSiXnvcyiGEe5i6JTE5mTjrn2kN",
  "key22": "3F5wSpbRdgZj4NK8Cxno8ye9o8LSsctKD8DsUjshawUnCrN7V1nHfNmQ5edTqKF5rpvJ2dVoWmeMnkp5dpqqUNHJ",
  "key23": "4Jw5aoQG6FkGhQa8hRnss3icHAo1eX6Pq1TcKtfPTZhNirAfUT4B3GKCQiohr3fCZi7XQaTK6Jw1S67we957W7Tj",
  "key24": "2nXLVfYyidXUvEVi8s1JrhfrTjzs1NyFtavDHKT1PAtSRbRSDCDskTsf68ro7pJb5wdQhUHyJZ1SWXFcutnM17TQ",
  "key25": "4fgeGsSBYkP2EKrE57648mmhaVguHVjui83hd8fcRtP3xHxvH6oTht1Z5fmQ7Qw2UZmSqmGdMQ3hP5ny78TmBwFK",
  "key26": "3kanyaYSMLYqiRvn9RU3XtZgHMMPRc4uXeKL8yzPaWgs1FDGoxKWtfMBjQiAJ8hiM68pABJLmR9H9Ptn1rh95N7t"
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
