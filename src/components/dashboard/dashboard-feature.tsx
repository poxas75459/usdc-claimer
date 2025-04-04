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
    "ppbxfmuvnPJbDKBbNuan4362pjhQqSeVgAPKYhr5h8aCP4W5cJCD78HNh3zgNH4CgvrUBDbfPDHh2Nj7xyZvrCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bat1rX6Z9zqNDoA5UTVbq2DLBXXrtJnug3UPJ7bmMDTVdDT5j4fSpyo9JgCYFbtKPyXEFyYqrVNxWRLx6nNgVAW",
  "key1": "5VW8cAfksrd1VpGtYfbyejvwnVAnW37wwskrYNj7tTfrmGgXmCYRHiyiPbWGvsTn99HYgFF5m2TTRuTTDHgZGPkW",
  "key2": "4tLqbuNnJyDKZsDig8GGmqfsa4sGk6h4pSpQpCefTUfWBShYFKu5qKGSjGW4n9RLa9zw6o6R1n5Snirmc5M5NuoU",
  "key3": "5aAsb1Chm2EZftQKb2twrNPxNpcMDYpt2d3XFS56LgoV3QCN3a1fd8U6h4AUhGgzu5ogxEVH1gzhVNRTkHEFhRdt",
  "key4": "4PJYKiDdo5DovorZzCCTmvzHnFG6FTdBWrxScjMP3MnVZ5bFHFRPNLbcgxMj4nBF3DajEES2EfY7hZJkRRMDCibE",
  "key5": "5m71A3Sy7ixBmaNquSJUpfkqogWzJEnSMhC4jM1P9sZgQYihRGzNrSSPQb87KufRCqEmZB4jR5BmMU3Ls3hKkKFY",
  "key6": "53fwhobVXr7DhxPjVNMhhPotWoMqeUvauEskTbUUcoFLUUBGpmitE8B5LiBbaCcEoJVszNFZ73FtWp6ogkS2hyAw",
  "key7": "4JFGKVfTDEoimdfYC7FHwdcMQ6haQYTvX6VfF8VTSVbaSD35nG5uMZnGGY7x7pzLumPccvLGwjTZbjaaYtkqJCeS",
  "key8": "3VGU89wo5Q3keDBDuu7sQBqNbr5hKFdcFw3hi7TtyfRm7VcoQAPWAB3MemjRNcwNQVmEJpoJ2VosYcJ3gk3rRJUL",
  "key9": "47LZVKUerfpssBr9CCbTzLMFqXZ5Qt2uf3LStqDvRuzbiDtqKVUHmi7kCM2qRzsmerzRTcgUgEHE5K4cdTFr8qpC",
  "key10": "2W7xcFgvnTAHtkWAAMJhshgvYb8dcQaB2GgTRuPs826scfqe34PZkotebtWr4akVz3UbuGqGobLCnJpTqjoCsccg",
  "key11": "4PUzuSCXDviEcZaqNhdKjF9H7s5XMBwt2FBNJiuYUbRBNLeGZQ7cwpNopYijDtRKJVZkXf53oQBeN68VrskK1y7L",
  "key12": "4SVaVTEfU63qi7kWGC9ozxq9pQrL8DNPgbvqhF6MVATwHNYLrnMGx8TL1m2CeSXq75rgAYrivx7hdJrdRZesN1qj",
  "key13": "5FmMwTr6zN1pC4qVGSnndka9Vzhq3WR9Yc8rGyUN7yoMK5k1tgxpxz1w9MbA9byTY811DSWsR7dJQM4goWVtmY3b",
  "key14": "WM7EqCbwnrYCYjMY87FJdRJMyX432SNPByV1DRmjoC58zimEMtkjB8hPzcRK9G5nZoJqETjHGoXGKAeBoBKXekK",
  "key15": "5Y8Y2AcmnG4BhaDYSZHFV6yZVhVoPaHuCa6TMrRfEmCM2L2nMPgqdgYJSPWgDcjHZQJ2R7N1P824uRx2uqdk7z6o",
  "key16": "qyTn6JQBEGqn1498TWUwFgocw1WMWeA76J3PAgtmqsgWY1jZxjWNxxQqtDvmzmgHd1d8kQupxSvViSey6UaJziy",
  "key17": "4cqXWWV7AVo6cDPdqv7Xh6xxn5ZjXA3iyzLh7zSfcoV8voZLGnQnJ6zUXZZfTCGS2RALzvU9G8Fsix3Ds2wbd9jb",
  "key18": "39fahrSSogQfejpJ618Jy9Ke5ZxnBxffWAcrSz37tt9pg4UYQZJUNLxKfeH6P54rd26ubirS4gY7iTQoVwJdPbcA",
  "key19": "34pU77mcRPiC5nmgCKrBXqRLDhwXYcvX8oS466qB7bp9Uf9o8YGbzwr9ztys1z9D6ZnGmpLnH5B896DLqHhau1NP",
  "key20": "3ZxrtZwGD5uefmWNdu7jtzp4Vhc9Tfm1Nkw66JNN8V5tz9oqcgdA8uDeVPbNvrBb31g537aR7aDrPA8kriXBNm5u",
  "key21": "2BiX9yKaADjsJEYwQ2Djj4HCjwEh2jm5mf7nxRENe1J9AQBthBztUXnARqL1mWdqHoZ4XBZSLLdCuX9nfzDTra6b",
  "key22": "4Uw5SJkGD8mPEcjsYqUrWz1Xus7XwAchbZYX58WvcMhjFgeK3iN5qnWhEyoSwEXNAc89EsfpazPL9mHQNkmM63nW",
  "key23": "49xAZ7pxfyKxqB6eQVEw3yRa4tnaHL3H8MUzbhoEngzXK2A9saA8ZjmguFW9EuXW2UpH8VHSd7QzLjNCCrcTNeib",
  "key24": "2GGMdQsnnsT2Qw4mx8syRaNupuxMqBiUJ64U95FZyZZF3DiG92LSKZJDynRZE2dUQm3Yd4fpDRHgXYDvZVDJKMQw",
  "key25": "62hWMhDpKD5heC1gFBbvZNfs8c54hdTou8Gx6QAztrYxSyg3JjogtnWxp7fwMSaguLgg25B9s4aVer8BnHXAbxS6",
  "key26": "2adnczQpcmsZwnQxQY2CygPsxRHYn7fpTojtUQnBhVtT589iA8LHwFmp6tjPaWuiEs1gAEzNp4hKAP8hfnqFAuYD",
  "key27": "3wPjirhzLHW424hHFabBdegTRNHW6sbh95SFDZCEiMumTb6WBQU4TYAsCig9gQHd8GKeWT9XRub9deZuRFLRHi4Y",
  "key28": "3fyMNjTUK83hYynFA7j1uX88rMZPrGJJ9EYV5GmdEhrZEigKAnZTo9BB7pPR1YbassTQCnHkvyxcW9r8Ky3BgVeK",
  "key29": "3spgTfwuKERULH9pYggaY5S8usPRcdFa9XcrkCiA7A25w9jtUhDvTB5xyFC5g7BFzMu5dCccWoa9J8q97jaz5cyN",
  "key30": "4E3oE8xKsz31SVJHGphL72hu6rYrZ5vMLkJAZyNns4yyFiEXrwe1b9umAdh1m4TMC2V7GZcuvRgLTvCY86UBWYuS",
  "key31": "21XLaf6wtbm4ZeEcJjhb6df4bY17Fu35U7sF1gE92q7xXi6PiFvs1aAfGS44piSCRGz1hAtKPwhmHKUVsEU1D5Zh",
  "key32": "4UdnDhJnp1yRSDTVkz5yGqZNmsJV9PgKYY2hWj52Efo1E4UanyfTTvnceGGDWjn92x3JyP6LWoB48Zj1GAaPgvk1",
  "key33": "38oTUX9EH5nmSnk5EJU7zy6mn9TnMMfNRi9TwbtmRG8b1KmTEZSYLXW8CuZr3ywPr3pEX3dMT77JLfNaUcYb8zVN",
  "key34": "7NKM2fhKgRP9hcHL3DC8e57yKUPe72mazmQBmXuhu6ab98vS6BK8qWVFKYEnSYxzJ1uGJDy8k81FUQ6V67z1ibR",
  "key35": "3XZQ7KcXnw8mDQDfSEAizDtJaQwuoym9SmuZj1SfnyphqnePvmrYNYCGkkW67JSzgKy36HJCoQuMBdrNfery68Nr",
  "key36": "3YpgYNsUwAN4sPHL4np9rHnAprjq7LjiohmSFzSuhDg5kLF29RKWfLrCPjt7ae67swrjfrEbPWve6zmCDeKEVVG4",
  "key37": "rgqhNVgefw7ovbz7M19UNgY249vPNXmq5JrVgmPExHm2yqPd2JfVFbiANjNT7Gdgm2B8zh3JGgUuGGanZhZUhne",
  "key38": "337i8KREzjGAx82bnhAwMrF8GNGenJkUKpV8sdavx2oqkDxxCUHXkjNq3GkgYFA8gB1GLvzoa3m5nwSeht92R752",
  "key39": "dszYihiWDs9mmtGsbirMdfdZYX7VcRrSTcHnAJqNgpUq2eSUMKJbLdNP2aW1Thy3LLbKKsrKmB1F6hGEDopxN7d",
  "key40": "23iQzGR5SNZUVVD7nrJW7FcSepjrfnJB94np82LgujPDKt8C7KXGa9u1oQSXghLnRkgpJnRiR79HD3uVAfCZd2Tg",
  "key41": "51BNxP1fmpSEn1KEri8DszSiETUzebGjgR7TSduCx9xFdHW3KJNhMdyHNa3eSwgvgNLRVTcFLKQ1x3i7pCLXT8tA",
  "key42": "2EQA9YyP1iBPs96CDKUTwhsURj3ZAvLWwyX934MEpRk7sifKUtaLmsAKGPxYUQzd6KrJXLZWwFgQGXqtuLo6TiwK",
  "key43": "3B3TBV3DkgKWyXxkZBaQE6A6DT2XZxsaPjFqYZEibEpjeW93eUvFUNR6dtq9L6jKDTGL5Vqqsa1vCZLnUfFSHARP",
  "key44": "3qJ8eiDnVpv569uXAexpUSMr8N3RTZvya2zCPZS6eeofco14wutsV6D2TQwJ5mRd1JsWEwgWVSFzPG3j2zrWhcpN"
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
