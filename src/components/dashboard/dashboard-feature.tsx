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
    "2LnVhzWNPUhmCpMig9JtFGMYWMMdU6a137xC2c1vmQLYFUR73HmZ86VDYdgEfT2Y1AfjpF9PHcPJ1qJnHw8yv7nB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9SrFZFgVjeAvYG3mQU8MxJXg1bZMsiYVy2wcmNDg9hMYjuZViigFvU9BRaFLbHgRCLD8bJbQXJ8563ku3swoFw",
  "key1": "4whDqZtAkWhJpYKT6AsmVezS37AU2fwpEyomHixDqHBq543xS7qqQYzexho2uAbbcxt4V8Jj12qR8YU3JQ22wbrb",
  "key2": "2jptJv2pauhdNPzKaBhrkTxizYjymXuHZHaR5g68ZgBXxFp32MtcWfxgMg513SScUCTtJdhQKDMHGkJyZTM53jpD",
  "key3": "56ydRA3Hv726SxJgoTH6VmK96i4VN9eiQdH5fNp9WzBrEVg2NjAHxfAo2HKksJ7nYMTNwToZWL6s3abbLzC2Vuun",
  "key4": "477k4pqibRrtfeWu1GsBwVe67yF9pKauBiovba1CctJpDPjiHPTScnKjASK4uABasMqqHscGh8CVLPPkGcrQSm1V",
  "key5": "3FHcbivLLVyb1tQcxzSZoBmLkj8ZxXAmfnoNCf3AuArarSMXQmyvVmQjcLJNdqDEZu4CdMWXZq83gWZnB7ZZUU2E",
  "key6": "2YwmR5DCznxL7REd8za37jyreapKsGMjPmgTvT1dXpwzqEwfTozLwpYLta3uk6PtT4hz9k5nK8PKjf8n7GuxazCL",
  "key7": "5Zhpv8XyifxC9jRFPetDdoDxFrzq73FHrmcwNCef8tVLAcvZYrJX6sCMJXvU5MFvp4rSjUQLQHx6fT5Fiv1XFqTN",
  "key8": "3yZD6UaDwNKJzfF8mxVvsymPr8TK7iT7KqLcUu6KVYaTWgYZQkSSA72z4q6nTgzNLXbK62DdpncFXm7nX2oW9Gf6",
  "key9": "61Ur7etekJkHhXkGCnELVRBBNBAVruNvRzj48mYadKY7KpfXAk9VnLiQZCjn25PoCVGsLFMd5RzPYDDxr3NWf8Rx",
  "key10": "WdaRztVvQrrPnH7bqLEzrgSmYB5o6NZmGwGhuGLw55qawnPvVH73AR5RTuzmv3gAJ1Ycp41Erhidaw9yBHLfMzy",
  "key11": "rfYJW4F71FtjAhkJFrQohP5PZhhSDCqfB3kDexH8o7cbd1HFJamhAKDqn4Cu3dmqkM61aUZmvjD9D9VCtUW4EYx",
  "key12": "4ypxd5DHHKzDRCF1sRgotMrGAveLZzRCBUhC52n469CEkhydfKFUB916dovhh4JARmWtwcDP6yLk8NdLDjz82Gd6",
  "key13": "4cPVYd31ULhS9jRnLge6PyzRAig2qgcR5YJd6X9VmJVGNPsVjKamQFr9isNPW9uYauSzmeVf85FERBFhKw1YKvMv",
  "key14": "nA9vd1nYP4UN9w4VTuNHTxnGv3o4CPrijURFrULyYwYNNZBpsEsTn8LdHErpDA4YzwSfEz8HJJ1jURhG6EBfYUF",
  "key15": "3hMiymp3V18vJ9d5UUBHBEwu5Jm1qVLEaT64iaUpAtzUo4aW9EDbbKocab8BcXDY52LX8YZEASXxLSzWTEqbG5sZ",
  "key16": "2Zmo3oWo38b62aD5HAKv7yDcNcFfdvsqg8PXmvqS2dFs7fhJwJc1rJesJKfuncqTgrvccxbfREdpZoEiZeQ5vLXV",
  "key17": "wFq167cq4xQ9YTnB3fkzMmJ9kwgL9SHKn2xvXAYo9F5gzxCkckEsCFynSTDrYJGkfQBT5REUzPM6dRm3sS67Lbx",
  "key18": "4CeuAt2WWfBpKhjZPJsr9YzzaWU1j7cqsD2VzkFHA3J3f1JWG8DKpWNnsWYd1p3ZKYZ7fV33PG3A1z3qRV8UVLhk",
  "key19": "3LBViLxjNfs5ce85fYZD7ELtUPKDUd3k8S161XzBvr43AH9r2VukXqqNaNRz2Con67ibJHZEZy1zCt1AXRViG6fT",
  "key20": "vDn69RnJ3DrxTYbsVkoCW1rGHTQpW4T7L5A3yWuiVBSN4wGJqqm52piEGb6c1YBcSroNvhz92vo2cc6P8ZmdxaP",
  "key21": "4yAUDkcnvsGbgHbSPYzhc79UeGJC7yDLE3nbnozvu5MpyvzDiAazxiVjW4nwzQRYk3YaEVNVUAt3GJbSKL5BoCjd",
  "key22": "52M37CHXpASvZCTYVHwMQFrgeAeXZCNxiuznjdtYQavXL79SpcgjfapiXyNBST3iGvnr4YFouu5iuPY8zGjt9jre",
  "key23": "5DXKoV64FD6FFczohh8XLG8qGsLDk2HVDiAPvEsDP1aeBQgqMC2XTRUSEppCyWCd12brRSmo45xrEnbwziauaLqW",
  "key24": "Xv5YYzgCUL8dXuJqkqX7Vysc6ZVxLEMnycr41ksopXrdxGLhVjPNyXWRfTQtsmq6roTHhgk6FGd7nrXb51zoVUu",
  "key25": "5LG7Cf3vzjVbmF3yKREyKNTSNQSoaZXjBhx1LQZRmnUKsSLcLEkXqzt5nLMzrKuBJRKdAjDsvQd8vFXKAxBAtdTP",
  "key26": "2KNqkfh3aDPnbuiobDa6jZ7gxbNzGu81GpQaAYUPx518SELmmhMiH87fSkMHWZjfSN7EDAhVYbQXhADNmzVWsWrG",
  "key27": "h7sYMMtadZG52xFLGTtvHeEP8h4NbEHPM6VpoCYUCSJ3Mrmho6WUYyNXNebGTcbotVywoqk6ts2xJJ3tk6EpzWd",
  "key28": "3QfwtutSWhuCkpxnd6tMK2xcB3cnG2QgnwRQVbBVkKuESKpWkTovgKLaR5n6RqrPhNjteRstT2ja1pnSQuSpBpyt",
  "key29": "5kKkEdB5atzRbjdL21mxFLHGUok499sudKgwZif5ZCmwf4GiU48NfSLfK1wuu2ktQ6LsHMsAARv1CBanY2yLimgE",
  "key30": "4tnsNkS3nYsffZZWsgRW8DAs7VBxY1EM8DfK6KDP7VxcbUTqc6ETAbKLqZpCXwibKbwtipLMfPoXbPfL3jRD4Gxv",
  "key31": "5wHtmYDRQRStU5zozrRBkhr7Js4pnWAetEm6cg5j2zqbwYzrw3VCu7rgyg8WjBCPSxwPmZBU57SrGShNuFHxseWm",
  "key32": "4xFkugUg5PivvHAWp8CDBAVcZb2p7jrDH5xJtCfoVywFGdxP2idcKG4np94GjEcbZeWdw7A85GqkpwkUYqxQineH",
  "key33": "4USrheRt5uHow29CFA1duAJqU7VAERiyTB5oFEAG23KmdYvG1Vb94N9adrwEEBJPRiuwM3Ly8M51E5jYVHF2Dagb",
  "key34": "5DBoKYccnFddispdP2rxVR9s9SDj5xvjb5epiTecVAa7YeR61ZfjG2vnxkabqSKNq31zfLS3hftYMQyMZ9UXBJwi",
  "key35": "5TvycbESiwwdra52WKZjJzy41ftYVgP75nUXZYhmZTNvAjfPC5ejsBgTvaH2uBBWviRr6vEMWzc6hThyPCRniHFg",
  "key36": "2BPSsvKqycxrzUrf43KHsjyadWkuvaRkBQoyP3DYWPzr6AWLRKX2SkQk41gHcN5DSq5tStTHB4bjHF2fu8D9fzBS",
  "key37": "3UvbrMGJ4dP3uP6784cf9BAd4wqNNqqq4TkWTrY34Wbmm55ohZtZgDZ86N2u9K9ePH8ZnmqKQogpQVBgBiQNVfpt",
  "key38": "4kVvAkR9Gro7Qs2vEMwN71mV1tswH1eRLSkL8v1UUYbh1VmAgjxcR2swLztR3EmAC78DcxN6wy6YznL4iZyxi2Ym",
  "key39": "33kGpb5wZHMQ9YJaQXKfjyiXnm34R1MYVauXfg2FVtjbGU5zZ6oYoF6wXpid8gwpxcs8yg92oU5ux7qssAS1q6Dm",
  "key40": "3NLMb4Mwi88fobyAFDW8WsXJJ2CxnSi59bqfaEMgyEjB4Ucc24Vt27UUxWmv9pj8sRTV16EzB8xRmXtQYdUFuhJv",
  "key41": "5Qo4S52agYmJvYY1xFkA49iPzjxhQEepcjpjEVBm4NYcTfCKqQ6uiWHWsNyPY3B5iraBymHXPBq8LbTpkRtV5KvM",
  "key42": "5K5jLPfFmbZeydV7PVemdyFwbV8wkhMCQqeKfm3Wmi64Acv86rbYKDhDSeseEDevJ7yiXvHdiUFyH7S5GJemfTVm",
  "key43": "5jUkqFjdHmh99eiDWsxYHFXdP6h2q6zVVUp38RaqWnNkYytkP3Gc4mGSf89bmkNEWs9e765DgRVMKMgFNqkNc2aH"
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
