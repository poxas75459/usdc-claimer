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
    "4cUqqzHLf2Y7oXpwjSYazXdpPUCuKK5aaf2rSv7td6PQZzLB5M6aMiqaRbPtsyPpx4FY42urf3ckG9H4168rqasN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zb72ao36QYkeSMMfLkHGwhasZLazmTmNkEzSBXRMn1k41mCgY2toD5Xmatn4eGbHPdGyB9ZZwYygEXL2JMPv2fw",
  "key1": "5YbEMd7bMjhbkJZ629zZNzSYB7HdvSUkQ6Jicfmx3Cu49QvHFB1KpibAb3ZZNMzxLPYiHBJK4nZXuJPNiBx3QAz2",
  "key2": "59Xzs14io7MchCUGFHSB6CG1L4RALfwavY4g5m71Pr8Eukwa3gQhAQDKgT6Gt6SBjbfEKf8nP4J4SBh55UeqH5ir",
  "key3": "y8xhU1KRuUAQCrTenetJFmyz4QGLvHF4DJq9kMxrw8LgGRCc2Q4HRAX32wQLtUZKBW1fSv8pwMMnteZJ6NGhbbP",
  "key4": "XkcWPimi1j43mVwP3BdAUNWXLwwohSS4vkCRLBUHGs3kQdskDt7Kc4EMumT3tMWej3sPh3PbLf8iAkLC94eYs8n",
  "key5": "3KoN3otJF2qt8U1Jo91MWspiHRaSEgEhWgfdo6QMs6GqPRsbh6Qgevq4AExGvcoEVrH6JAU2ou6pCkfCdBVD7Sx",
  "key6": "fWAyKWnzdpe6DTP1tJcXu5sf7PqbcgqNwXVaqZdcCRDSjGucb5zLpA6ronY4T8Efw6oi4LdFche721vnM358XGA",
  "key7": "MAR7FtXYLH4LLHzaZuTWXYoLiuZFbvsfHWEQCCKnK2mPMCvsnFBLAy83ur8gmB5BYiaLytUiMsQxHtYKpXqb7c4",
  "key8": "2ywvqomDCGCy6SvEnXu9rJNejRYnFjQyUXp17bif6HGAyh6P82mKASDjJzUrwArCCr53177d9pX5LYWi1pvtn3DK",
  "key9": "5yHSmmXBA6HZPPX5fyFVwibxbau26dv8hshTaKX2xrK5Rwy2qr5z8Rj82WvHhMUkvtnN47ke1sPj5gksfg6Hezd4",
  "key10": "3sFkvs7Qp4huoAtWiUg1fFpz6mGn9QqFR38gV3eiiR3AYYBRWDfkHFJ2gjkhaFLev1yf9z4oG1dw18rawWmNf8n1",
  "key11": "2oPZi4BXGdUPnemL42aJKGcdZNopHTTa2SEM14MubgHb4zRuZh3rc1QeyjswfYtJFMBiujSNSnGzVTAtQST4rL5K",
  "key12": "r3dfXHP1Xc6gNtkewuX2digHkL3KzSdMwQJinJvESZQB5hjWMZasE4ZQyzXvuEKAQXxZVnEvYiq78ZeVLwbWxJg",
  "key13": "3iiAQjGdDAP7Bui7Z8zZehTN94oive69746Go9Rd8oHxCDq9wkAawFL3HtCepDJ4CRDqmuz2uDEwDvnnDwr557ib",
  "key14": "45TaXNVXT4sLhHe7edq2JzNc4fjEXxQRSib3gGncFe35AagByCwAkkDJM89BTzJYoMgDbHWSP9vqNU1vkbUAvWbM",
  "key15": "4adJKwAjWyWK5GAYoy8UrRkuHhtV1S7UWv22qTFHJu5u3aCsEhkZpGyKRH788cNrqiYBsKcWB54wPDJSeUwt9czn",
  "key16": "BQEU8W9TUeYaUTGE3p7HzP6ML8T3iS4M7NErtxqmH2RVjdAf82xba3rMRUMUPUmmW4MvSoMcoHmtVdFiE2ictNS",
  "key17": "2nPQ5F9xAuLtLGyhyksnVtjGE7v3rHhfwAfa5gW3XnS8fwXZr9EBc94Zy675GBHbfAbqAQW8kCX4RhDoPK5ZgriN",
  "key18": "5eFV3RX6a1k81MM1rJXYqEoEYidVKfG5u8yAZFFeNqtxtavddyHAYbVyYuYZfzh35m38duscUx8h3pt639XaHEX7",
  "key19": "4ZNga5cGaHo3KBBbtDNk4GmigtduWh48fw3oV2dAUSu2EDF4uRaUHqWoFQdxSDuKjzz2hoy37oMvfn5wMHdmUCDh",
  "key20": "2Z9AdW7MKUdo3KkwSfmvxABoRAkh8Lm142iBLA4oyAnQ22FxxKsqp7c5Gm6AjTgPUai4TNoHVB15UdSvCsmszNXD",
  "key21": "58imtFry9i6NFy9pAzFy3w2a5yj1pFR9CqhNLWMp5jFrz8211hbEbps4FB47yUzhA9JQV1WK6NVA1e8y4N4AWjY5",
  "key22": "4KEzEdwsu1kQPCb65icV3zhhNsSmh7Mxd48UmxMPDTrJrDe2bP6LHHpTsCxLRZ9fUdCXkH3DH9xgjWSrQs6MKdKi",
  "key23": "4xxefYx1oUZKAjU1niBNHKErqUh1rvpCnSoZDLNcSkonYrmA1yuA9LwM6UdHFuAbHWjuRM733NkhzTS8ATdvJ3RK",
  "key24": "44VjtWpGyjqTbjefpd2ZuxKxyX2v8NdbZVWrH5VUiJu3cDbHkAjr4irBdj8VZucGN1qAixjVKrvBCJXhhhgn5Z4c",
  "key25": "5CX9eFkFyMHM16RJ9JcVsWtW2cwdpY2Yf9Jz8GvS2PdYtL3zqW9XzZrZLAPddFf5qj6W4osQbCDanfayMeR56hka",
  "key26": "5UKwovHnFshkXuauF4phrGAEGctT2aDs7CGy69AraRzZM1MGDArHcPTTcm2WhdYqAUnLZvJGndbAq6XYupW15AqP",
  "key27": "5oqxNzCbnAUziHWNn49t6jvW3JnypndeyX3rSidyFb1fDfuPfEHJn8XBnuhoom6G2pkWuQxAK9a3CmRLsS4U8qmV",
  "key28": "4Ro3ec9Dk2NAFe9qpVqyE21j2UiJyrw14FKbrBY8ryxLsQF1iqDYMnXvPaAr9ARui2ZxQ6hPYqFrzGv7HFqJSpLK",
  "key29": "5D23gqXAWrYJyXUPV6FouNHAt5cbxecfUX4fitXezARant3MgKr1LhtUa15Qy2GbnNGvHQraKUmCwipNPaJjWzA",
  "key30": "2J4UmEnMrxjw4cfRyo5i9ompdwcE6Pqwzo5CfWX26yi89uX4C6enBWNnZ5cYt2CB4TCLMNNguJKjKR8Sf6nWsQKi",
  "key31": "3S29u3xBq4M6dqYoQbykxEuSkBPnowsdvQc3aH4JxvG73mLjx8QbmSj3q63gLdToBY7dNhwD1upxFzLDTi8khKLz",
  "key32": "4wNaNwwJwH7VMVCSqRxJ3CuZisa5JpW4kJhU1QLZP8vqEcdW8GvUtmXoMwc4bkv4GH87q8q8mLgHvVycmik96E7D",
  "key33": "y3PXA9n8gxyh1oYYwuG2ypRHS8KHyGB7dHY4ELLKtwz6p9p19dTECgemCSD3Xg2kHKSK4cGCcdYWaQWM5EZwfCf",
  "key34": "5Gn44ssa2J37bh2QKRa9SFCXdaA15E5s5zPXoTa6DxRoV6nwKSWPQyqWDotCA9jX1KqPdMrdC79zkRqnNRjK9G7k",
  "key35": "2tvpDSwnD9ad2QMoEVgnrXgRhhM2Q7HGNWHSbkTPD9BLxuRPHQfohzPLW7aW6muMFoJrEYMxKXz6yEHp86SJU9zd",
  "key36": "4oU5YAUh7pa3EgvoxP57Z68QMdV88G8wQXmMJogZRwQSquK9TBxNcEWi1um8RzyLeimoo1LrNfSFAjp24VoTKzUh",
  "key37": "3NT1jDnRy9XLBLHaLEZEuGQzhGrJDv6qmoSeyBCyZSd83EdjkkPRMqosZk76tDbMrcCgog4hGgtGpeoCQUGN9Gop"
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
