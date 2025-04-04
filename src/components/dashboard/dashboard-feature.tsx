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
    "2zLUZDy2YiMseX6tX6P4EiheswGJq52Xc6SiEkKm7ovHSfqj8vRBJ2Adh7kQ26MSMm921fyHfLvp5HdBibxfBDRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWChwJAd5wrT13EnzYquJAuKcTGQBX8rWbrzLsGfZAAMuqq79Tz6EAdmv9LGeYnKgCGXLWCThMHEPeE6dXfQM2j",
  "key1": "4CCTkRJHSfHWhzDoKv4Tod9DTJwLLXrUesuEJ6XvttRyBsy52DNQVR4qE5QkW9pwHr4z2P6XUG7bJW923WnySSu2",
  "key2": "zGPnrZX4ttYdNZnw8w6bzGcvVQqubvzJm8KjxuhdBLnnybCnQisqq2GM3pUgqkwKnwMyNmQBSYkEVhjfv5pEfmn",
  "key3": "35NmxNEgnPBNxUi5v4XDBcSxjvngRdc6RBZMVgPjecUZQ1Mj9DS7cnDfZaW2YSSm6dWyYophba6Enom3vsNvLgE6",
  "key4": "4gUnq83fB6ZtThrQqZNLvYkpsskewwYXv4qQR17PZe77xDzQ6tzntRxPTiJ7bTW3NoKBjkvNcf8AhU156jMzy9K9",
  "key5": "3TMFZ1G5N9ggbch1EikWpBQi2r6mZ4L4je4JrxcKCpGBnTC5rLt1nitPL41bs4twJroyVRhk5AtZDTocYqYYz5i",
  "key6": "2TuecFo1JnMJL3V4bgqh5PpzAywBXeCC6qLGKmU9cf77LKDBaEiW2MqmTG85QKRE2zjYBjKPNgZViNDcwKtXfeGE",
  "key7": "4jx636r4Mwq4hCrHjZTWNZVsxuHr2CBzYQFB59wiCyLpCr7n8NYqPiuwQCToSZFCPRk6n4Y2TJGmvyESkNUt4m2h",
  "key8": "4vRMjapKDHtkT1NszF2eLyvxTwWqvNARci9hYc9XBWnCRiYu7KYuezZX4WyghvvPBFgFviYCZmWBCSv6FBWrDVbA",
  "key9": "6CwLHyc6GW1VrjRJBursh3SvoEPdAEN8vEnTzDx1G9jMAQvwf6Pp4oFtbNDbRjy8Yd6N6s5cYZa62RvdezpQUHw",
  "key10": "UHwmhNy7AB9DnfPnS4dPPVEeA5yMvYcbfJ52GeD2hSasYpu7bbdFQQ7vLKYzk5eoCf6YGbbC5Nruq87EJebFUq5",
  "key11": "5Di1gBk3ESgx9qxKPPEgejcGHQfN37LTg7rkj1Pyb7DKvF4sTR7o13Mrx8VVzeBBxfyZanz7WS5KgfLfZM5NBheZ",
  "key12": "p2GH5Mpw1AFxFjhN4ojLTkCnE9VsgcsakfrczgsYX7RgKktXe79yh9wGVFrw4pikE7T6zC3wpjaaB1Z1VLfUj2B",
  "key13": "3qUoDL1tQWwhAAch9exnkZYzi2a5P28uQa6FWWd2c3uTwsGXEZzRwFSBrwut54rY78P3Zk5S6q6pvR1834Afc5N1",
  "key14": "kiYW9tbDdFgziyX2Mb2ohN2Yy6uMD67QNiCDQqPpzdv8jKccRjnDVjAH4VPza6ZVbFztPDUqYkjwd8ZE3K2D1sB",
  "key15": "42yh3wLMkNiBtYRd3c2jsupn9bL5A5ehDfGnLtoTPPoRrRA2TjDU1gpRmvzujh89LxFaXqHrzQDFqqeWnkLe6Xib",
  "key16": "63qRvsmV3QTzWkEupGUdWEvNaXpSa1dZuYdcip9Ey4Rcb61T1q4q1kH7dmh5eneQStmMoZU7Swtm7C19ZkupA3Z6",
  "key17": "5fCpaV596rvayB62T44Vb9AnCeWaULsj1q32RaHogUgQg8LsjCzx6bcUWxXivvjSjzt66nmbwjBAfgcbosBoMeU9",
  "key18": "38Vm2cH9TbZJwFx66Y6BQmZS5EnaPRzi43ufSXL8qypK62hiYJwgFhWVKpwZHxDracNcuVRA9WVoTG5nDY6mLf2d",
  "key19": "4A2tdabZGLfFBFPkCXJrf8zuJAEkpkceSdReGcj6tJBnmxjajpLqqV2WHZiRburgfv8DKFDrFJQ5jQb8AHH2RkbC",
  "key20": "2WAh5eSpN8Rerz7436pjqccGWXdGypZ19yKRU5eqAAR81PKz8soanQS5CxEkT6MzDVUWEBsWGHo8Gfs2PQW6JZPH",
  "key21": "4HKFifBu3JkqFEuSZyAx9ctbGQHswSahwo1pKnGwj1oZvyeNggCno4uY9e182jB3nKofoyCD9Uhabvs9dfDDaStw",
  "key22": "39yRuKJEwjGYNaZPAk2HjXs4eihUJhhL2NNRhENgbomYDNyrEscyc67yeJPprnFNCx8PaXgiNFh6mvgtUvSrezuN",
  "key23": "4DzxPtsAdSjtpmZqPtU2mHaEFByLRhbLxE6Ex26EN8wRyk4iiCrbkMHZs6t57ukbupiVongVXpyZXytYAUyPAEQg",
  "key24": "6EfinR4j7RnQvAABGfdQUjkUXJsAnzquEznYy2shNtsMxCUAkrSJ4w3LmeDTpmaALH81WNZnRa7PEFuZnL38FFB",
  "key25": "2Am4NdHbXnmaqdfuZ7rgYkr4MbpAPM1CkKgHKjMMEwoiNTbp9LBJdWgK32At7sL66UXXWMugJjsTsPLWpRs7pyX4",
  "key26": "5WVkhk6xArjhpYcsrGAPxrFjhdM8Nds1W3L1keoMUmngCyHmsetnLgoUpAPJ18xkcrjMJvVbjNt9xwHDzJMby9KK",
  "key27": "3aDVF8hkRXUJDUMcYEjRqLnELu7GdQeaB6G81F8JQcPKi7z7vP35ocmeKmMFA75BTWGyw8MDWvXiEhRM5zba9fm8",
  "key28": "2jXJ19rwrvWVSvAHtVsiMS2pXZeJuqhV77SCrZjFCaDVdXgTw9YkeERZaqTNc86MhR9YWoYUEJTm31zm51HL3oQ7",
  "key29": "2uMbwEd8amcQfiby1cXXQk1f3qarENHD1ZwpmeGnm4wEjQ6ZgVEwPpeepFmQhvAnaCqY8299twCkCCPhVbypynFH",
  "key30": "3A7Wy8aVvQUV4A4XXZGgx5H9fFaroc8HuqZx6KkCzbR5vD4XGKvu2C2fnTE1LE3rvk2mHLKoAyTPz28B9V32zyFF",
  "key31": "3SDxpoyXV71mkQhREF3uFjUFV1Qr2LEpL5T3vH5x2jpzzxc8ZDtquGdqMXwYqTAxcK9tkQXR2KjbZB162MaovWk5",
  "key32": "4ZHVHXKZ1dCDLCzesKcRPjYuFYMRppDyT5HBfWxUyfioK2yBrwpuxhiZH1SRPXDdC2aL12EKpC9zKzsWPvcXe4zu",
  "key33": "3faR3HeyZD32afLp8UV4nfdXoxtN2DkTJt4UEriwsaJWzBhCcFeKhscpF2UaZrVJmnWRDRhsE5zMtfwEsmgC16uP",
  "key34": "AC4n1v54AKL6xBMUZ52S9uh1cUmSPhdQCm9WwywXr4YYYTTiTDRFpsqLBs3LgnDciMc3unBWjuLNxXWLx4cKHwA",
  "key35": "GmsHLv7qk7WpZg8NfP5tFAPjXwnNAcpKzRJigs1tvF68avc4chEsS8M67X1yiHqFiUzUpCnNvnjtqwxDWsXgwZb",
  "key36": "2EuquuxKoPuq3awu2bWFjyBoqXwCewRyYSk7uG2GgwybEkouXnnymitir3bWFKK6qX3sLVLU4wgraiz9w7N9kpQY",
  "key37": "5QY8cFSn7s3S52CH8xZdGsu3RWj8SCACSATzgHtoLFAHi15DMAvpC8ENqpqBXJupcfSYJ1YtCMDnHCHpmPh2pRKj",
  "key38": "4gBYE7V9RLP4f9XZ2x1f2Rt5UFSRZ9BS9Fq6tCqv5QFUdmrX37MtWuiUZaQTXgs9U3F1eufM5qQ3RxpqzFDNJ91C",
  "key39": "64VprJqkxaqFBDvoXn6ME1SVSQByFpjD1eP9BCSvRLS39pnpwEyDhxgU9Nj3JTpiZnRGxFZxtP9k6R2HE2k4Xumr",
  "key40": "3K8aRv15KVDawWK5Fn2wFVJibENf4dZYawkPCbqx3Hh6fcVA7HkKxLfQbVhUxRJgGqjfpCc73LBU7KUS2z264YkD",
  "key41": "5BVkQmEDnspdrWsjfm5GTC5FJwrXNNUtVmEKQisdzXfDSLPbEZUmdJMFEkBrbpBGcHWdy6eZwvLCEk1GQeJBYzb8",
  "key42": "QXDtnWJz6vfcKV1d5t3VSDRjCczeu7T21gdNbgxck7pTyQxnVfZF4woSBajVRuQdJzp6tbj4HvCAp6FoQ4NNG9r",
  "key43": "3H23EUpy7h8gMKiAMTaUDAJkERcsPzEkGktgmuNtgXWMWLhZjtHaz53pdpUqz45dfvfo7xfYJMNMwvdnbnUmxLQS",
  "key44": "2WDMwqDyg5gqUtHJxopgBC5QzY6tqfyV7ZkKsuKKYdxRHZd83YYsnZcw9JWsiTM18eGXZFojT4nuNegPJB5HXMEr",
  "key45": "67RRgVC668XLGEPHS5v8kwtWvPpqRwYpNUDVVoJEQYcg8QAyhuhkaMR4gryDpL27dP9Y5pj2yy2gWfcAaZxzHdEy"
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
