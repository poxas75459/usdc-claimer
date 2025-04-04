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
    "5WbMZueDv9WoyR4Tsfwp1JGjifnXKRV5A23sfu5AWmHH598rrwtTez3WomK847yCkAM7EY816S54nT63RivvGa1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54F8z6gqd3ykuSDT1YCVNZ7FQKsVxjgq3iqW34Lg8zDNnejYYmqghE5J2JKzRLyk7zRSWiNCXNbqAmdMCuL1vBAV",
  "key1": "3M2YYagud4MDZVFdg3AqEpH6z23i2uefH3o3edLVrtHAZS2MLRysNxxmMWkQ841ZsSuPqQcWhBMW5JkDAsUtnHED",
  "key2": "2dKBgA49EVoay1TYRfB1PhzRs3KiwhR87YLYVBAHSFDPU1AR9WTRmRxFuXdkfVd8VRqg5TJ3qtRkSwkMrwTd8Lr2",
  "key3": "4id8pSqwUewjy2BDFAsVYfAy8phE3keogmoRPnm9tuyNaJFS49sCEgzT6gSHYLUVvjFVj19RbxMzpfgFvcjKppKL",
  "key4": "64MXzmBuaTeAAXQW5JobCDDTqxtfs6KKwABYac8KB2FBMvBT2SGGE6XKu5Dr4u8btkMXkAtxJF7ksQYPy6MJkn9h",
  "key5": "3YVpEfqyMZRFM3s3w3u5hVB1EAuoyeTjjADzFxCcX6gMJQvhPfxUxjzAbUuEiYvL9dfQ5SkAj3tkLsSBofiW8XSe",
  "key6": "HNWQYq287uiJZ99UvyKrhENgzVwSu25nPvkXNCgXBcM3d6qEN9DbiBChvQDhvFF19Pyq6qDSsQPZuYepSi8hLzS",
  "key7": "2yxnMndZLzcvnEQcivkeeBFU7d94zJNhVjXjUSZhDv7jM6znYmAuwHTWn5kuKN8HGZ9uFhpBtmsjcoTv5pzEnvCR",
  "key8": "3XpLFbYE49Lvp9kRgvx9ZZ2x7hi46H84tCnWSFU4n32yV3zhHF8LbPq3RKWHqEQZsKkA1CwA8RChqeSQ3w2RsKe",
  "key9": "3Bwy31wdbfBK363KEpFiisuAnzEzQDcVuutUCygcYA75sMWRH7NRpY1CmJtprsaAKVthSnMEDBjxCotZ2Pd9X7cv",
  "key10": "4v3uJbVaqR9Z4apVc1ugKwETXyaYxiZbRWpeWjGCAQa1f5o5u2Z23JfbQVKBFseB5McwmehtXDGYtFJNtRM4haC2",
  "key11": "5LTtgYABG7viXPQrLX1aTK3jDS4dLF7n5PYmxnx7qNQUNa95yMTXziTo7iWMa8E2HsDuu3dvEFqBFTkwkXaDbtPc",
  "key12": "2v4V37DKkr8nd1uEkVLu1aEJC3CPmduBKYZSvBBHY29xjyuPJcccJZdjSqew6QbrVtzdtfNzPqxqv8pyPNGcSrdd",
  "key13": "5MR36RcsspV4SqMpRZx2BgBHHPBqea4pFs7BTTF1z6ZDw1PPZVpDq3fPjayntBSNX39Ns8unnswnQ97zKJ9npid4",
  "key14": "e1BJJ1xeAR6AwXyUocyto9izWpLsttRHFxk79ZqARpG48cZu7TR1cL3SA6fuvxN6mL7SnQSf9t4fHWjMuMg7q4M",
  "key15": "4qpEPPqYLN7ASWe1d3dydRDYhn38bFWzqdA7uQ7Yo7wv5YRdotcyie4kTZnKndk3P29toSJFTQnxFD4DoVFdEqdH",
  "key16": "5P4P9SwfbCzp1Mcu35UiX3BsF8PrX39rJScxkCoXE86RSVCwR5y1GnhtYXBEyTBZ42sZvTjhRZbHnn7NiJLdfrQ1",
  "key17": "37pCT17xW4MJgaD2ngyTdwcRn9wcdiGHTiGRTtUUWunKNBkHbbDYoytX7eLg6BRkuEiUtnmE7hKk3L7PpDhf1chx",
  "key18": "2XRS2xLAtQb3zyJSr1YMaTx6ZF9RT5n36VDcKG71KXDHu7yxRrZMwQhmHwwW4D4HSrhJTMrR8ffXRRVDS4XBay3T",
  "key19": "5o9zarjmzQ3nyN69hJ2dLtYa4Mmm78QxgSkuRyErUnq1ZZH8eT7REjjmW38WraY6UENQADYe2hXpperma3tb3Gsv",
  "key20": "Lw1LufhZZrMxSBzku8unsdo1r74QYaJCzwmwAKpHMGo9xK8YhJ9ZJVmT3WhUALpz1scdSPZx4R9un4Kzqvu4eWu",
  "key21": "u2xLUi5ywhTYZffPss6za2KbyjPAe1VVKixA9DaywZg9FDW6M2xRT5EkXDYFzZ6JCKYYvxjd1cvgTKijbHqgFoA",
  "key22": "W1hsPrM83YBkDLQhw4WU1V2M4KC2GF16c85HXhWbRJXEazKio24B3eDqejBSurbUD825isbR8Z4CocAHYQyyXdL",
  "key23": "3cJmyr4S5gqcxfTw2d5s3C1Qqob2zEdKRf8xJrxSREBHFRfEf8tCa9kAQrJbpYZgNMHS3dMGsJKEsuXkmQzveGuJ",
  "key24": "2GgxTcMQ2ppyN9tcp7m8qfLGN3CpcESgQVi7WJ8ZVud3C18TPqGUFcBdpHa2Hux8QoxqgQz599Wh6bygKkd3pU8V",
  "key25": "4aeXZFnthcywaJR73Kk7Xx7hLibXoKaSQViSbUdTkyGyaBX9kcxeRugHTpghSfH2tWJXZdxfCDJXCNmZy8yRSQXw",
  "key26": "4ApvGiG75gqDKmkrrYGowVSCAJGpgRMaY7ojci9dUwHuW4A5iRSML3TiuKYvyJiXFrsp8gjwVVvXM2Yuwt6DTeLQ",
  "key27": "3Kgn3gLTWv5SFfH6kwzHhAm6TcpUgdwgm2zwwo77qdo13nRzaX4ty9TKrCddHoqKALjdtmF9JTe3AUdrG1Gx2fsU",
  "key28": "58shs2PZ2ctdnhJbLnJNH4VEaSSTnKYa47MLY8op3rzXX8F3UoqzoEhYKvi1ei3wdzdw3TpDiGqG5YXNqXYRBMYz",
  "key29": "4C2iZoBrRtVWXq1CdzF7KX6DqU3qMzY7W2veBh79Pbt922kwdpv4iMZtNuSnjxEzG8WNUZ58r2M36CTP4rWozvDv",
  "key30": "5F9m79jEtRBWzTuDgyp78Tt886nVW7a6LEABtS55kJDQAfpng45wynpzixZmAjQnJRvE7KES5512V5HyLgwTLi2v",
  "key31": "Ga1Cqpey1pxLTm3rbVg7VH8h3SZEve3EyfRTmjkWzLwxaD3egs9CjsCXEtZ1rUXqUmafcRgtgXMNbNKgbc3z5oi",
  "key32": "qyBWVoCsLuio87MMBUF6Nd8GBKN5tcDFtM3UQEeoeSFnBR495QEB81mUvbhABPJrXLJLSmWZaMjrViU92GhdnN6",
  "key33": "2oAM8poyTGte3kym6ZZnttxZG6RC34m1YifvkukNCoYh59cWN7ZBUVtG36rVYUxCRQuVJSG18v4GuF83EiuvwVNT",
  "key34": "4prGZHFKMVPAThzRKqa6Rxpw7J9e5ycePdZgYkcBmXE2Pj4JEk39JFSTc5PSiKwKRFrNRRKJ5kLiQWuk3tz7Yce8",
  "key35": "3ahaP2q7snEhgehrNhHwvC9t2ibMxEvqhX9nLUDzHVS8DPP1vceh6iR5XpSrViFStVfKxodeu67G5WAM9GHB89cJ",
  "key36": "4gSHHVQmqUDpvzBjspgNmwav79VJ1pvYjQAzKJpY3tYNwqp29LNzBsvnSnqgvPJuna42ANcwz3ZczNbaWtdQV7pu",
  "key37": "39SavNZ8aeXf2QkuScAwLokPEjtYHnZJshPs2wc4AGYmcJZKgGSRzbx17QSfQSmxsVdG2DJAkSqPU3V9iEjuofzs",
  "key38": "3hTA6fqqnNGM89tTfkHSwun9P7NHMHjXMAbpgMpKpd8yLwT3dXaiyVJBfSKre35an2r9QGzmcajHLtsDPSWytfcG",
  "key39": "2cB8b9vC7UKLxLrgqybKDnEv8jmdoLjAF4vHm3JMtVpE2oDPMUCryE3QMDBzvpKovFqVQ82MB24Tbp9EvrawHRYH"
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
