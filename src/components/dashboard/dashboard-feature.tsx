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
    "3PNrEsfLSpfH5avZ51F4dLxnMxr1DKV9Ys9eHehCS9LY9qUGmYfpsXDDwsPDwDCj2QfZEvdVfFcfthWE9qQVpbeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z4SrCAe3Ar5oer4txhr6wXp78ssohiyqFQ7Gt6CTcfgin1hUTEv5ZVSUfRf1N6E2UY3Re2HZkmSho62PbqLViyc",
  "key1": "4rp7GQkDn8WL3vBqTsAY3vAXxLe3wWFhKa6FBXVMc4ZHPVeQtsek6AdxWSCGpsz3CekrTUqPav5SgfgVwXzjYJr4",
  "key2": "2aB3mrrEsdm4Q12KC1uQb5zRqijEhSG9Nz8NS1cDsNXxdNrcQW5Mgzg262VU5BWfsgGiRDVwehbg6GF6cTtWoviE",
  "key3": "9jp9CLsGXDXu1GrXKW7uAmc6dR9rFNR7mqLbZYKj4R1bspiHAqjhy9UcmaPBjFfuLa2RiCLnLBSY2qG1xEoctg7",
  "key4": "iArt8LVd4kNmy5bFz1SW8SKpZin7M81gv8BWL3xQKt6hkPaWkbyuYZfwDt2FS2su81oW5Xbub5VqT7RXjoCLyNc",
  "key5": "43AyCbFAzT1pWh94hgp3V8WGn4xCitSnMzXRrmfC4mDNhnoKeX6BPdFo7kQP1rWYniUL1S2KtavMLcctvodRZyGL",
  "key6": "iiDuckMU1xYYgkYvjhrDxz1TZmoNRaPSR2jm3XGp3WowABG4bvwPDc4kNuA1xQJFbhqXhkuKCxQLXnxgRH9mZq7",
  "key7": "4WMewYToQW8i13yV5Tvc2r2mSfDaz7QcBhSkQLj37udZMquDxyyQtpN7MZ3gWL8HpmQepyy73KjCQ5mNDCjpTqZJ",
  "key8": "4XFD3h1BWzzGjUUQkKTmzmfGxYRStV3f21eWcY8N3zKf98UvnSPZRxpkYPvoxBC5oC2nXrKwUyB6Wgi6LB6EUQcK",
  "key9": "47ztt8GHyyAWQVdVKUfYuzRYN9PXXZ46RDxvQFx6kwSp7BwJ9wHs9yLYmMHbecTVdt5rCfEQgGKTDrLQSx5aBfTD",
  "key10": "4aZUqVBYeRZaSA7bmLfEcAaZaXtHFGrdFHiohq3gvpxXCzSzXrH79Vj8UTYXk5pp8ECnrd1BQ6FJrJVfySm7wN5p",
  "key11": "5GTzK2QeBzTLvQSXmCRWqPKRxodxAdN163eax3N8rWVBBLRASv6ZcjSn2jyD8RwK9yNkciuGkZofkz6oJnZi1GJW",
  "key12": "4ti7z4sJ4QWEKewrnRNBf7KuYWwQNwptoNjvCB4ajsaDLTcd2KpM3LYxhTTmMA5RkWUpmPckEbdGusXETX8YmU8X",
  "key13": "P3yj9xtDGDhxW9NwXP9YSVNPPdL4ULQ2fckve8XbXxxNV6PNQJwo72kyhR6QG1UuZe9Cec2RdkxDdnHt9BL93bz",
  "key14": "4f3A3RzTNS8VSVjfHZDXpXMBN72yjioAPbu6rDy8rroCT8vD6dibhN3LeF7JpaHcdpgGB6tvV3yUwVzgiMC5d12E",
  "key15": "28QxdXxQk99qfET5pYPwrCwcQzJN2s1potUy2urk2hskCqqNX9uBpvWKLGMmcnMPEnMBpAP7f4MMhhCoRFxjFuEn",
  "key16": "SWXcwovNugYoFxQKnobsNo5bGXz5JxhigBZgkMPNF5M8zb9pdCwshpPgyiWwiNxAXJ2GTvsmj4akZexpK5kuVXg",
  "key17": "5URuwv7ahuUaqYNcLcw4w4dm4GpDJoF9Gji4Ss5jpTSYvcVd9vtub21Evuo5ot6oBw4EJrEEveYMXDvsLCaXSTaN",
  "key18": "43s1LJBiVnxZcCaswAfWLruGXykkPY1KqRpNja9qTDYvgLt1G7v8xL1ha2ubozJE6hSohe5isMWWwEmxtVjxenm4",
  "key19": "MXAaj3N6njugKNtcaA1qiB768gQZExcwt5Pi5QGvDpGUrFnFEUzbEnAa7xr8oWzGq6owFd34rS6oEHhpCxxxrKL",
  "key20": "k7VYv7dJGFDCAtvQGz29iwKqkUCdrvJLQyo1g8ALEJGwF1wMFr6QE8AfkCaoTdeoXC5u5XNDqWvSsJzVWhx5nty",
  "key21": "nHdPqAQ87cTf7zrdgEcmdVpeXbJEdkScEwMZW5pqaNjxcpbbfA1DiBUs38TVGAcdyyxMqgfEihck4D3cVzLormX",
  "key22": "4frS7sShzn4paSueSifJxnw8MjsLL4q3zuTRLMeJfVwsQXoACLcNVXRUE9TutBY5PDRpkBnqaDJjyHRs5yeyeYu6",
  "key23": "5REq86qhTYBoanYRMZnvcZScbMgyvaY7adEkeT8r8xKbAr5op8xEr8YX5HLggCdTxgkNvpcSei6hLTE9s6ybkNx7",
  "key24": "42xpv4wiLNsofj2iYrEWR497SAqQZJfnRbZ15kNyD3JzVk8f1FQ3TQRCSLTBQDJGwhL4mwnTkwyw2Tw1mJGdREzP",
  "key25": "59U5HCqE977LaFgapovBBgirRhsjgFhnqzbeNTsW8z5uat9g3mibVQwa12Jshbf5tacd1jbJu8SYvkJePCUhpTwd",
  "key26": "5R7pDGb1L8StmrYaeGTUJTz5YQr5gr6RsuVgUbn8aRfhvnPNVidEwK1ZDMa1zLmcKcmzsqENkYKzvJ696VN6CJoH",
  "key27": "4No6cMpFFauNDqATy9TKG3ZZo89jQZHX7bbVo6WyQGRGqYpbB9jbJzu4AWu2WmpW3C8LRnW4FqHFNcaEDV87sbu4",
  "key28": "5ZA1LREXBCa7duuNtgcz8AtBExqdB1wjVhjKDtWFFPRTGj4XFeLnQPD4wReYAPNHdcaPLp1MJA89m2bT9CidiYGA",
  "key29": "2K4jaxLiX2hEFVJMCcRWcgFv4uYKP8BWrkSQff3SH9QpbXKFetyt3QSXdZhivRfay5GhMsdoPKw5XW9JgnFb1Lmt",
  "key30": "5YWEyCGNjxBiuEMqWyR1fC3R8ejCeWRjk8HJwhowcs6izqL7VAuFKKoJbyaUZbC1Xuvyy44PAtcVx9P62DE2pYhb",
  "key31": "WvuX31VQDh7eyoSpLp3BDMg6EXAfAFzGqVjfEsnyqVp9uhDY4Lt2BgJqdoMgw8A2tBJK9VmHKEXH9b8DfHzAYHE",
  "key32": "221mcdZP5wV7Ur6cuMvAozGy9t1fZhTwZWLf8JHLWw8Ab6DAmLhp2uJjeHkV3oUyvz3pw2ZgzkEFduNPG9kpSnMa",
  "key33": "57BSVc7HwLrE4urAmYQJHQ5jRYf4j4NqidYN1npq2pB7pKS6UK1Rq2SSnHv5SxLCSLoNgukg61W1DcaK158XRmd",
  "key34": "2gX89AjcgiLj1Lkkab5jMCjFMouSCfnWkJ6zHPpuyczCE7EzRk29soGU4U52HAxo3ZNgiFe6g9DKYJMwmc5FCbYx",
  "key35": "ujbPQuAYTv7DDsssMdVYcX8PUWunsPfRtdkWdpjmGJPZsx5DicKPujHJPkEoi94rsJ1quXxPxDEdwiHUYuZWKob",
  "key36": "5TDRY6uvYFVNPkFXeevqrCQddvenrkSp3MY82MBoxJe9GH5PKnCE751Tgeor1726G6HmtgT2ofNHjy3S6sWWDpZh",
  "key37": "61fJf7S6aXrbKpVVE5L8KWiSWm1AcGzr9nGSMUhYdL3MVFp4u1fr9hgXxekx6RDeT24SX5DBYEmmnzgQaYw6yuZp",
  "key38": "2ZmGJerTaAJNhRDL7BP7RfcpZFQNqhREQeF4oHnVVzaoWN9oagYuktzGRQQj7XRhd1QCUXAtzLjhPgwfxYWR3Xn1"
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
