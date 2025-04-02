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
    "4mwKqgmhE3YhwEmP2YmGJKBywqj9NUDswkcm64QTHcugrpVPnPRMEJxSDANjLY45x64sYoRmh3n73K7tzx2TDZGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRH9Q2yjdtU5SbuCrUmE7ezsyXjmpQBE9Fsas2YMEFGZeudEDvDiJLwGenxU5TFVbrbPVGCnsR7zMmoQD13bpQV",
  "key1": "5XBnRx9NGp4WDw31swG5fUE826RYHAifJps53B7Zd3jhu67nuZxQgoX8ShyW7QpSerG8oVMTen178muVHkNs7mXC",
  "key2": "29f1DBGZkwKjD8bffVRdPF72iev6Nsp8BGokF38KbyUXQf7fpUCR7CkcDgKdfsHJbE4oft6AYptbB8573P8E6UWZ",
  "key3": "5toQbQ7JggD87AwMocXp3TSR6coqL72j7Bih3EeiNxE9E4wvmVWrpnm8YJp9pzPEd3xzaCz9oQutFLEzGEtMgCDc",
  "key4": "3w1fUQEgbcRmRtU4zrSu9UReQVEqux5p6Jn6cFm5u6a5pqVXwcVYdVerjHNdWXJq7DUaTgxSjgJhMVbQjrqAFRsa",
  "key5": "27gS1oo21yhAikQjdaH2Ggo1L5sxN5o6aJ8R12E5FJorvvHuKeWjyqQKdjRSXrTRpDhmXrYjau2WxvTSGPX5Zfr5",
  "key6": "5iKpUnDi38KKksJxvQ4vXbNGoKxqHmwXp94REA7cEruGTDU61ZM9fF2fQAoasobiT9Qu6x8Zf7NwnsTAQvdLnFC9",
  "key7": "3vNSYMSoiip4Svb5tYQkqsM6Di2nHDbELWcp21iFBZ5KZDB5nitUJgTEoQSMGxhr7oytX15qVbNbkvQi1JVP3c8G",
  "key8": "2HVpAAv1Q3EhHjapEH9Tmm2GkvMW1j647HBqg5Ti4LzUKyRAD42hUPG3Ghsqq3V6sGVwpSgHFnjvccff5bWQHt8h",
  "key9": "2EjmEyFdG4S76P9tc7Vez3EYfWk8FncxkhquYN3U1FHsPN4iLY6kLS1dUQz3ML61HeVAEDnwjih5max65SHyfhqB",
  "key10": "4t5hAVTYuo5tSY7FS6PYpUw7Q4jCgKubhkLk6YHnMzP6njtEx34i2upvuXcLPkWVS6vGGawk2FR9bhxdxMzZ4tnf",
  "key11": "2QLFKRPH6PgmyiA9A14GP18yz9awEo9apksbTmRZPURkqTyzqAVLKB3S6oK6qDJ3ECSnFC31XbDj5hykLxcpT743",
  "key12": "CmbWjQsUSAN7LbfYciurdZVsSbm1nmi87JQoeYXE2grKZ2oW4y9NfYDnFCbxESQNdnY6iiVwhG4FNRtCzK93fX4",
  "key13": "cgbg8vPA7T4FactvXmdcLtsi7QD3LErcSLivaEMFdsXpNnSEUbu8uAGv3yNNhpJ7oe5mJjBFwEdC34B74Bj6GhX",
  "key14": "4DWMn4ucJCjPc2nyK7oLYHavw3GXXnDecoTeWzAUi4GfSPDQfSZWANSieHrFkJQt2Rhs2yLDW6rV9NuNXTYuPDTe",
  "key15": "5XY71xQNyDrRP4RRguwcwXKmvXZDe6Cg8V4g2BjaTKsA3ooEWwvjxogi42JR9Kf2G1afKVVm2uUSWHjYuR14vzCe",
  "key16": "21qQbxtUmn4W6yxHDk7ayyDNm62g66zDkR4yuLRfq1zub4WwMR4mqPHZDBBzuk7Sp5dKiUa3EkgTMb7gpXb29CbD",
  "key17": "3muEQ1Pgq6czGU5xu4ddopVCQq6RPZwynFYcKG4tPWPQZ8YcxAuhH5P9SZzqzvmaXUtvh1L6ntbBW8d2KKEWPdDv",
  "key18": "4f8VLE3ewLoACGu7wEYsfWSNGy7fvGviRojEpHm2HYgJNa4exeTyEWgmK8brMDmbxWahbsPNc4HPmhYiFnjHhR5e",
  "key19": "4cpRYPKFWGkjrAQ7EEGRyhC37KxJrqCjH5uexdKaAht8PspHLjFt6bKMNxgfuS6J3vWdx4MCPiZoR14YuUcUUpSN",
  "key20": "3nJC65vCFb8tRkm6aMf7NSJoSVBoxh2Rq9b89R1LeFwmAUSjVWTfMbuav9zT1gJMfffm3FfpE7T3m1vCdseNeKCk",
  "key21": "2jqAssjtFC42tLFGRfmGZxQS1PVuDexJv5FbnJx2YqyuAnsh9DBJ9gVqTJcECigquyu67fPexU5Dmx8AukEYHuoS",
  "key22": "Bojhm61f6QHKYxqGeHRw2wxgQ27uRBiW4tbBiKcyH5iUfCQizxFb9Z6SELiHBcMKWuw2WAT72Y2uEyYRPMSytHK",
  "key23": "5riSzJzXMPoYkDWKs7uV2Y39fpeW7d7WXSi5C3R7V1TTiScUJneamSmkMSEWJ47Qxs2oUpAoH9TaNYjBTpHWaK8N",
  "key24": "3QPY69f1Ze71uvNRN16cuVE6Zr4QxSnhyd3Ltzt9rhdNNGZndNSJBadGbouub94JXd5uMcocs6xGU6VRRTfzfJdS",
  "key25": "kwvj6yt2HtvAgez67GdgzcQFysTwcXNKUhFgYyeir5JREy6uz9hhqCWGtKQmLufH1QYyQmfQfq3y1tbxZs94Gnk",
  "key26": "5QgDSg5UXaHujZaG8UoF4tMGHVuhVQdq2DjittJcdNvBsnSfckPH91VMfEzzgUjikCNAEFm2SJbwSj2srJvC5SVt",
  "key27": "wbotnxtxonEPcrjVwkwwywXqkaS6Ztf3Vk2NgeZBqwiLHJauWgffpJ2LcbNUgN1XjYCeQ2AHdtpyzRMkSQUwaGE",
  "key28": "2Q9Fo5sBnEx6Yabsgr5mVp56oxkRvnR74D19fy9feVWkhyexTgWYtAdGxYo8RCm5vWrGzTdnxpG8UHA38W8JdLPA",
  "key29": "2ouET3opD4vEF1wiQJEYHMoAgYcLyspAvXm3Qy2tvhaCtbnqTaSLuX47Zg8R9jjnsiEewsWux5THVctiQurbCkGF",
  "key30": "64rrAZQ4eDmda9duJCKviba1GGDv2hRb7jWgz9PGZFXLaZvMTprEdbhJanZHrXufU7NND8TQh1X87zG7EKYX1wmg",
  "key31": "48qDGRnFtpmdUvUeCgm7dMN6snsySRXpheaW9sSJNi7RXsS7sjRsDfb1cLmEeRqQhWmqzVhr13JJRjhtECHMZzse",
  "key32": "ZzPEJ7QdKb7P4tmBSGMNzehQbe7ZJoj9Anq8HAFQm2szq7QhT4iYTgyQLK9d47D7HHyAYXT1jArjMRikjfVkNVa",
  "key33": "2kMFgaGZLch7xHcmAtzmVvbUABcnBtBHTXUH3p1kHyz8F17tEZMne28L93XPwvpGgTCxnvXJA2pA5xhs2cX7geVs",
  "key34": "3qBxpoF92JNFFqPieWyvgDQYCX3t3gyr57zTs8A6uvFyen2mf8Ni3iWAuykyzMUdMR1kyNGskbAm8WA3CAQaR7is",
  "key35": "3gtFtS8HM6KFPnN5X6RMqBZP3XSKVyvfCirJVgRDayXv78i6EXPvBVrpozKy3aSKUELdbjYoJyjuvZ36UQiDX6Zu"
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
