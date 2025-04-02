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
    "3S7L36pKRBdpAWAkzX1cFGSFHAchRvJJQXb3SbnKuo7RGBgnDaiXg4aLQQysf8fYLa5CF2VpzxPkbaG3PdpxiTdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FE2wUTCCDCdWhDTvy9KFbM9AshLpZriF8fwnNxQRejRrTFzx5ad4wuQbt7EruG5BaxdvaEtjRdKHfkezqNUV1KR",
  "key1": "5uSNPZBpmWYnisvFB6BUQKEUCHuV66Zkh5cW8Qu3xnVZopbXFCXRfHyg7tWoC3tNJoT7RHnS7jkA7JKXD5n2mbRc",
  "key2": "5eCJvz83AD8MCEKrie9ahHvoepjod14F3gLECz9RGZMuE2EYFH32Gj3z7n5p5com6BKLKAKg35GUxGAStyjdqFiM",
  "key3": "VdPhNgACncuLFy7a3kTRnDGDUi9v9N7Ni6AU8q1XUcZ9Xs3RfURaC5nd8CJKfsvVn4MimGaVBEbmLcBFrhpXFAF",
  "key4": "4jfsndaA1ZDELZcDbd81gD5agUZwFN9ahPPiBho5UKTiW7Nb4MCfpy9RfkBntT2uMa293u5sN7HWD7Z8mPtqr2EX",
  "key5": "4BAYYskRXaiThJthwqRM3PHTEmmrsVWzvyZ3YVz5QJPMWQNAJMyh32RB4a1AgzAJBxZwjvPzMBaKWwS3cXutgoT3",
  "key6": "ioXtJnKpZSoK7JTjhfsvqH4GmrqsHCPf43QE6j3Xvy97Ru6fMX6jq35t3caDepFYML9L1HgWN7JdWguBMpNVMi4",
  "key7": "2me9BKrgugLuLuQ4XrRyHLRGo9cKanKajCLqMtABqFQChrDzjLvERy82WZPjbTysA6MFjnE4T9L2WZH8TS5jzFCi",
  "key8": "5axVkMY9W13Q3uh8t4tyWqBChzhBzGV3o5BY6ydqwchu4fMN3RJ3EJ3hQWf26Rix333igJEVnnoDAmgaFuSPjQMN",
  "key9": "2AX37YmcgzoUYaU7z9YL5vwaJkEqf295fqDfkmMid6P6QSbgovxBwGqq5vmYqU5xuWPDXr5Cse4Lx7fmVZhzz4oE",
  "key10": "2ZnWSPUSpYsEwSKWgzFun72rZnCHWEwupe267RGuqrDxQkontNrUCqD4XcMwvEv5feirGNyjSWNyKUqQRfz1KkKN",
  "key11": "5iUDw91AtVMKiRt1yNka8uZdyUEUQrgCDYjm8HRQYz9YgJmLJ2tY3zGGTWjUZ989rG7AhqJMjTtTATjqL9h5SLZ7",
  "key12": "4UfozFPhdBU2wVHdzP63ESrZhQ8xADH8GMvyiqJH3dEfYDJt2DbMPnuueX3S56Sr5rgQ8AddaYH1XXSZVP3RXqmh",
  "key13": "39yPymQJeX4XNJStDPgw1ovHNrPSvYAbGACoqdjiZcUxsP4WvWHnndNmdJ8UFqw2Z4eWZrbJzuhevR2oWmRXBUWH",
  "key14": "54zfjyjhEuE9EoMoNP8eoLjR3tzxbY7pSniFUm6uyx1zU7cqbq1eDt7AWBX7qpT2psPg2C8S9yNb118DgsU6NjDr",
  "key15": "2FniZBwN178woZfS6UuLnG32VVxTKsa64a53yeaUYar5txWiN9PsYtujRtYFiJmSnyFUzW2eaUzg5hcb1Nb4kDqN",
  "key16": "23wmHn4KoHTfp8cdfYaZHA1AdvVT4d88NtTf48nZJJcAr5VbHff8rFtUmU6XGwyRaGES6yDhj9SCQg75fqtdDFe4",
  "key17": "4afW3Ljs9UGkcRQach9Qc2SvVKwa5GKuZjpTKEutJx95Mi2pTXCD4wxbGBGJSPkRXi7STk4aoCZeS9txa5jgsaHy",
  "key18": "37ssidgrhgLi9ZFdyQszNdBTDkcWaP4QzTVzoddWPHwundoM8M3XKDGXcBKLSsqGQW4H5Qv2fESp5cXo4ycz6UJp",
  "key19": "52VoYjvd4gD5b5pznR5EXZ826jWgyfg6YyRYZRNFA3zWpKPx8zDHmAiAnaLtH7MkniuJcxJ36ZsUdZwXWoTG3KXT",
  "key20": "23nz1wWN3zAAfDAjU7oza4GsPrpzSMuBgYnJZVynr7bvygBA1Zo72J3dxDxGKhEHrfP1Dt997uSSV5ZrKUWTHDvp",
  "key21": "641dZ35rXi6fTHww2jpjFxMNKPGooYVUv6xaY2pmZKNG65dQcNbQqzofLhh3qtUXw6LyuR8A2Mcyd9y8qWwtENR7",
  "key22": "6MS7ao7TPDrey81wDWoZigBJjcKPrBJikrE575ezyap3vTD9hVvYLKRhXomBkV2ytvuu3zVVC9mfApqPYjcHJR7",
  "key23": "3rYvcGM4VucNSm2oLu3nhFTiGB5ojtsBby6kXsGjwBcd3aVNtvvLk1LuCqQjKpbBSHHBJNmUzdeHAV8ksHbkizpu",
  "key24": "4D7xaqakZB2rjs4X5yXk7KuFWD2jWVL1fi2EsMFjPzWR1HYHfY5oAmNMCmyzGBmYW3nxKMhfPzwEx16oZHNgfv5z",
  "key25": "TjZotpMUSopdJLDhCsk6LkzSeBd4nvZPWdMwSC23AoBkXJkw2UtxzQ56xxVdi4knj1eAXit4GKzid6VUnK6N5uE",
  "key26": "2f41gjEJ2Zt3TpbVr2DrbV5rPumbJT64jYM5HFJ2T3yhbVxWquGMasrwt54UWsg2SJSdCEm7bwdpcA7cSGD822AS",
  "key27": "38JB6XstgFRtReoBtduBShwknJGqaWnWGhJgRkw9oaDq6Kg6qaAgTLH3ZsMreZmqdpgKmmNF4XBdGjhsAaKg63x2",
  "key28": "2iRTzL5H4XUL6ErrPgQsUbqSv3vJ9ZMJqpMuAZyeG7i741gbuXRzvZR4Wm2j6yEyWUwEndoJv3rpduVtxQ6WBiX1",
  "key29": "2xdnunQ36nBL523qJ1ssKu53LCqR67k1nHV9PoFeqc1if9JEdPzgjfYSB9QwSk6aRZxSK6K2Gc4oZSxbm9XQZxLo",
  "key30": "VSyP3hEFChU5HSdL4DV221tm2K4wN4JRfVmx9UXnYSkuzRHC7vY8LhecTVxbBXrWcjSD1vMgzUShAHvnt7nUP7P",
  "key31": "4srHrHpRUdGQmU4ByzNgwLP11NWxzXCVct6fzDJU2SJ9TTNefHFNDuRaH2YrEkBnz6fwZKF7gc4fRZNFpwrQJxsq"
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
