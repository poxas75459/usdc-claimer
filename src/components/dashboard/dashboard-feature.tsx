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
    "2YkpjL3ze9AmVvcAabXayGVvrcwi1tqougbTdobrP4hikfRspfjjTNhpHwDnVGLF88iGZzhk3FTJHConyiS5oQ9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rstr5nutR319h9kUddCtUbtp6rwCQVWxamCdUx6agHLdUtjSdptXskNhWHN1WfbZW761jGQaUpZiwjLtno7WyaU",
  "key1": "32dEwa9mhwFLcoczgR2BB1MViLxJZDtUfdXoSLnWxRbK5gwE6RAAeyEdih6brVTFyT5HEAxssMoD3LrxgYVaVpn3",
  "key2": "2eDUM6oR3HJdJKvBM5Af8R5uCidcRB3xnhqjHhu4mSQLuKEQL9qcgqF3rS2ZWWSfQcvaZZPjwEfQwMVHea4QL7BA",
  "key3": "LcMJZovMq5AwyTj3B2dst8kVL4qpBsFyeVL3fhohBrgniCD6fZp6SNi2sYcXczusymwNKXM5sLgLcGYT2ss8YHM",
  "key4": "3tHWaUaarTQ4SzAK3H6a9BstrJNWobRKBe6ApX9xjKdP6eVEjKDVhcBJ1VFGyVwbVg3mexECmGGCwLabJ3N8uZJV",
  "key5": "2UCPwy6kaSXG3TPh117ffFYYe1ApwumUQebhmQsgXrCwcC9DvqPJZP2opJqjNxFwXy6qmKWfRddxeeXGHFs1jcKN",
  "key6": "2eX87jJWcdi7MgNRBqg43Me413BHcZtMven1phMsP18AUweTZaPLc1YchkbEK5kC1sCkAy1GhdF2AsMzt5iksprb",
  "key7": "cfysKDijjcTH3Q7L4nz8bsWQEBoZiN3UUMyyyUxoi1Q4T2wipJ9bVB4mfRYmGigm6SKmiAUt8c9P6vcHr3Ey7u4",
  "key8": "3idufbQCsSbNZ1568SXAbF149GFpLvEDwLgVCu9o9RZdnjRhJgJ9CQFAL2sePn2ZTDmSAdDmnn8jFeR2i9Jo2q8J",
  "key9": "vrU1LXrfrUHjT7CD5QUYTteqFAwSRj1Qk5mB2HNBg2HPX3SLdgRgHkhGEptw7bhuL5geUb4uHPCvdJvwPpa9tPG",
  "key10": "SZbcZt3wd3YJeE4TrmYYrf2u8AVNZ5ExpWoBAdPcDLPBY2q3CbyYKgttkTeZ2ukAW1TA7uTEsshxHtK1JmzLetW",
  "key11": "4gA5t2pP8PdsdArJidfKLHm3izGExTDXxDm9KY2Qh7kCHYspaUmF9LdwXLSRm3mMtHbv5jwfR8fYbh4uHe6tsbBX",
  "key12": "4KtGRcxaHvFVgUAFeSNpUhAbYu5BxxQKyZFcFwRGotAddvtuKXXV7FrjziwaRLHCrBQNPhZ2rmqAZ6ty93FxdWeg",
  "key13": "46sVtSUaG1hDTUzPvNowWZLwmC1YuuFMjKdJL28As7DcpmABV98C4wba5fo5s5sSj8uYASY4RbJRt9vUC2utrJnQ",
  "key14": "4i6BkPBtKPBwYQmv8GY9ZHkyeNaAm7A6jTH9NQG1sHYya99TspLqTixqA1FeVzQmyF6R8ikw5okT1rFjRv6yB9wk",
  "key15": "3cngASPzverf4t96sC6M8toNVdjztwkwnLmThB1cozmxLUSsR5rv7PwbK9vQBZtkqRxNfZoAh3ZRa15GT1UNigkD",
  "key16": "2XFHe3PMofPRuL3pKDvwi728n8En1LuGNSKLQsimxTTn6dxUbtCmK7SVJmtFzsKsT6FbAHHSxSMw5whHaTDFFa5Q",
  "key17": "57DaHJ58Da2fsNEspoZnVs8nLQmNfvTqyyXt5NG2S2233ihUjFUdzGBWUdFLq223LWCaDSmmhLy98eUttYYZAMDx",
  "key18": "2K95Czxbwisq9fwWmqaqY3xvUkJrERUEYYsgZ2UWVqhF9HRSAvAA7pBCHBux4C8FGencRsude5frTkdoBsrpoqVo",
  "key19": "4cNEyF9sZ2zD3MUvrwkQSkE7eTKvTZdhkKAVw1Bo5y1k12cNZQCouwdBgNH4eTwB4B2LvEguvsoiKELD6mEsZh5i",
  "key20": "4Scvm4474Qm3qzmxRRKUQvm4WuhsFgN3ifvp2MU4QDfd1TaR9KZFTk5wnXFimH491WyMTLQQGN7MUicWwNJtkVRX",
  "key21": "4Pq5FdsZUtBQPa21XjZ5i4Bq9ibWfoBw7Jyac7BhHXGu6Gphs3DmZZnxC9N8t1CaGw9CPpajd3BK6h4XsZwPA5Wb",
  "key22": "4S2zKxhcbs6bSMCLc56ve4KDP3TDAbMVzWipvAtw8V4ijMQe62g2aK6USzjs2dvMAwuhdKctwNwCTT24V6meehe9",
  "key23": "YbxEJnroyVcTLFxoobJ3mnYXwHGcdRsUghbEEYdUspzR1MBsRoz1YPci64WnkBqNRAxpWiRCrrZd2PETHc4vzeS",
  "key24": "bjY2w4X4cFJ2ZzSTDzjFKK2mqTr1d2MhrRM4J3C9MTKbkGLb9DdvT9qEyfVqdmHffjfavcq8gise9oGoGBRMqKA",
  "key25": "61gvTJukVhh2iUEroutxGeWskgePuJL2Pdjrhg9zjFjQ5uLyQjgoQZS7E1RHxAgRPCEi2dXTP97VbfJQXjiaeWgv",
  "key26": "455bQqCKbb2uuQjzcrjfkLG3givmu5YZaURNez6Y2954gYDv5vDhCX9XfqhXtcGc63LVafFKpuWqqmTfxUqEgxn6",
  "key27": "49fAskp8CFd7GrYP8F9GxckqAdTdtNfHrTDfWDatyuKpidzxqde3Sihv9r88jof6aGDQ6btwtDAs3d9DSCi4pvZY",
  "key28": "4ev3Zr9p7z7VnkhES8T9KfT5rwJbABhBgX4sE3JTBmpnqnWd68d38NpsmWJpWMpDkxdur8c3ygrAqS7hdDmifFb5",
  "key29": "3DJiXJWcpjBGUz7nMwstVdM6RNtFSkipyoLCy5xKUozNvUwRSQqYxsmuWodWjJK9TGhTxpzS6dAAoW8XCWon1uJq",
  "key30": "317JpqDn1QgRbvpQGvhYUDwxrVk3uJNp4tm3mBG3Z17rTmkvQRL9PujjyMzceA4HV1GNLjHqUTEiUVUmT2P8AjHS"
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
