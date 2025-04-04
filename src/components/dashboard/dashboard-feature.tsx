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
    "2zDd7FrR3fgeFwuSauD385KsxoLzW7UVnRXANZzm2YvUbxCztcdEBw1E5jqWzwbRn32WhQ3SkmvhhfEfSb6prTkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iRESs1g18tDf6kjPW36tZedEQGfRFNsjer1AJNoR5XphwzHrRkzsYqepvQTRuvyuqUSotXg1LvDNHDFi3MaKLuJ",
  "key1": "62jXajzVV1s37ra3jFvqHvm4ahXxwPsJGF4ACc1Uo7vWVJv69NSC5EYxR9TYCMqXa5finAnNuuL34By3Cox2thtT",
  "key2": "2DJzHnwXcfJTYmThD6VhkoG99h2S5GQVzjAL91Da7Xm6CfQoGsfQ8GgWzZgj7891hKtjjQK5FCL5f337fVGXw1Bq",
  "key3": "3fjrVKFQ3fiN9c2SGSGL7aYGqeLQsxTJnbQiMzxruztSz6ngdpHDfGMiuvJ9ZQg8HSarSL6zo77rqfrWHy9Z1rx7",
  "key4": "4nZtvXFesRz7Edrqibu2Hjzwk8gpVpmn5neuJVNHxM7PT1RTEjrbij9evre4UDMKDS5yUsijX8JJTD4ao3TBAdoY",
  "key5": "5Zy58SV2PD4TZSiAuehyVfseVJ61wyxmzxAcpWSxvFoiScLZo1jyoCbSoiyS5svwpYdYJnNngZcWXqL3skN4jMmu",
  "key6": "2RwQyE9HnrrcahmRCWPDfmkhvevoaZB2HKXLmFZbqmUYnKxyNzxnJk9uaJHje9ZShRcDNyLPNDCXAUk2GWchRRWG",
  "key7": "3xzRUpwBrqcfny7MN6N85KCUBGsnoWFJ5SqTmEkKW5jNkiJDsNipDRtghMSEzsXgY29QQRhTMKYrGrvr4XB4uThV",
  "key8": "4Jh9HsrdwYnCrH4UgsnDMSPirvYbkqr1omrZ1PwBhrm9zBCovZF6Ycvg8caSUcmNdwUBLK7NzDBRSgyLCNXX64rk",
  "key9": "54U3fr5hjeGL4kmxDjtQcyyRvYwo3exqBi1rndgswjDetWznm3vv3PSByDAv2dDKQJjchcuZof38FKJCjMv4TQXB",
  "key10": "3TsywbCA6eyQJauyoDchDGxznyZjgHAFq1pHgkjp7JnntDMYgNWjUwVNTR8yWAMBC3x4DYBDVnKaDxRMd37Bpv14",
  "key11": "hxgHz64wGr7gKvUcqXUGYhZv7QusZ9cFpQbBJPUmQYPDgTTYeiQxZ9B7koXb51PMUusN2rfimhGELwAZREVuiS7",
  "key12": "4oh6M5JCopoHjF1fwSEnEV6qqewGj6Fn1DjezViBa9iQr2y2nkjjuQqcYfDTYbS6r9vwRKKADd4Lj4mPQRBa9ZjX",
  "key13": "4vJZVGavnMKBudYRHKxjiURMpWwF47wXpqEgW1TB3gW79uVPz7F6g5EPm4zswX8b2JqP2zDFz6fR4UxnQogThyxD",
  "key14": "3MB5NbdxphYF4BpQGdPXULWAD5jpZ5a5YPogJEaA192Mdn72H67FBQbULVbEydxA9A7689J2XP5zXsF5q3YFsmLZ",
  "key15": "4qLYkdyfTmWD4VsjJww7JFvHYYwkkHWesAaPpKyvJXFfnEcektHKnCTYpNKGD3VrnBLZ3bNTnANEhvJf1vpQraJG",
  "key16": "3iCK6E1Uj1QyfAxFb4PRnrCKMoQoYSorgAVhKFKk167DqcMf2aPBBokY1GJPujvzUz1GiNdveWqxQRoVNru4Xi99",
  "key17": "5zwyswLApjSDM8xuxta1r9wNQyuQ7U5xi5CPQa7rYyM8fB4UWfeNYdX8e4LR2Rey5kNifyYZwDbR3fbe15JgfnHe",
  "key18": "617SGYce8tLTPyz4iPuUjiCdAJnExgU2YPzYWLhmbg6EUj1i5Lo4jJ3yN1zxpW4FEc712QwJWtPEKfFzcnHZjmmA",
  "key19": "wjnWQiHbL86qjuhpF9BKXq5c3VJekyasUozHzvUKumUBrSEkhe5wNxaXFcyBzfKsBaHDXHmeNcXMNGLcV5B7M5f",
  "key20": "3bbRWaZphJHmBrpsV7WVRUFiaoxDvzSdxKoJeH7rgtsZGTSfEBrYs1p96Rdm3Uy8R8YaiSaYfzBSm752rHfRiu5u",
  "key21": "5X34t858wUbj3AKQcdgYw2tWDnCUjhzPBL5yGLc8TYxNTKMWTVWZ14tdZDk3f8dGNSXuvdPPXo82Wxp7FE3Y1m2X",
  "key22": "3yGYewUquX8d74mXMuumuxHecHKLSRpXtje3eq4fchDiF5oFmaMGfQwCdVFn4YwYqhv1cwmLeSbbEws6zTyWyhQ4",
  "key23": "2ssuSgp6399fxRMB3UBMgnv9Bd3yzuh36eEcWQzhgT7Jzog7bnVdn5yxNzKB8uepAqse9iShzR8FdESATEH6u8yY",
  "key24": "2CRv7PP2AZtPk7MPVZTNk3zYPqx3P7xAW4qgjsJH2JiqQ4jsCTffRHVrCKW8E6dQoHXJgfUvjT7KVFpAgysZ78GA",
  "key25": "25stNkF5d9rRtxx9ot659aJngzdstGuvDHi1o5G2DFPKmxoj3HAHFHzzNL12bqSrJ1BnKqmofXd31Hp43cE21B22",
  "key26": "2xgV69H3MLgK6HFjJAaC4L65ycG4JgX8JtHZHFuGQLABhLYvhRNF19wDXtCwWSB87AygL9Hf1dkD4EkzvXywvfaU",
  "key27": "fd8PhnRmUUnGMakFj1Qya2gZoVLUHFcshBXV36HLHnnrmL1rVCzEjm4tQSgV7qWeAxYHCD17rRNuqjgCgqbsVs8",
  "key28": "36NgTHNGnKadv9wk8iZjHvphEGwNE2Tvikv7WjVsDT626Vtg5q4vut1bisgGJzeykRUwMZJubUVfnt7HRuZyFP9Q",
  "key29": "5nQ6euf559Njq32Mai41MSBdJBPuZKNkeLRwjXautNSwxh5KcAaCr4bGYdsAuSjwmHuFEDn3gj7x8bRjdCKK4BcZ",
  "key30": "5kigaYUEyQb3YafyuYDnkXxJ9Pnr53vj9tnVAszqVe7Vzv8PDx9qu38hZmgvkDiY6rASmN5doJqWJcj6Q2CxvJi4",
  "key31": "3ysc7M32SJ6kJdBvwxSWSyTYnkfNRXxCg461tg3C8RUgwV586ymYKfdZhEYC6LKfjKudV3NGkHfSSTrhjDYrQYHD",
  "key32": "UoCqVv4y29r8exEr7r4B3sdppDdZWLhpE8oPBL4bUFiReHDDbRU16qFbhPRgQYh8egHMBCGUnNava21xQbQC1eH",
  "key33": "Wh3NoEbKoajxT69jJXSujvJNAk5QZYf1sob7nthtDzd6wtuacssEVyBxC2ARGwf7kbFqSBepBq6KMzLfq7qWcGZ",
  "key34": "243PBecHEnQophzUHhThPe82qKSn7LSpxzviM7bouaRYYmhp6cS32Q3ogD7etM3pMW1Wxrs2EauxfSNNjwrZHYSW",
  "key35": "5r49CsYpL4SJBNTncBRV6ezSFGFCxMcez6sjm9irMczCDCgPnWHU8L2trmLpz8kwe3ToKZSgzy9rk4BMQ9vqU53C"
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
