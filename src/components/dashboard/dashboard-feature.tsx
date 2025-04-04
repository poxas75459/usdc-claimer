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
    "2qWKCFq4CGJPMzDgTXTbVdp8Gon7UJ8XN14m8EYHUmDmKtoQugidfWr6PFbVK7tX73JX2rVmmtSksY8GGUKmboDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AdREXexyQE5qeHsBTeuwJjjTBurLqT3VJ8ZrXMtJ8dg6N1Pgaq7JpuSqMpB8Rpj29vvtjDN2xkjrWVw8s66SN5f",
  "key1": "2cZXU1TEKr442wZHo3T9wP72cGwcRSmNx6TwEbEXm12o97KtB8Rfm56KN6oNaycLhW7nHs99iF6v4XCFu8wd52XY",
  "key2": "mhPLYtvb5vSQgD8maaDdy7QxHxxoG1jnFVEvG4AqTp5RmurwP8x8oauyCyNqH5cDV7x8FXXKQRCQ1rsKBErwHcx",
  "key3": "ywvJX9HewHxiYtJQKNwdYKSWqHwztiKwk957SY2bVZMBBMzZpZuVUh4NwCVEVw9Uqt12JJVHua3NugmV7KVNf4s",
  "key4": "3RfK5ctG1f5imtyHM5ym6QGaBwqt5LtptwcWAnqVbLYrnJCKxkGn7Q3gBe28NYJ2gMybNkX8tbo5fa77kgwuQYPT",
  "key5": "wrwUy9ZDWa1JYzoZgjfk1896PJnnmRGS8t65MURwicZsiotG3aezz1p1YuPbQMP9U7Dg5fyWg2gpReKbymFamVw",
  "key6": "2KEnkK8shAACrreUdDZjtyyQYQJskG7kfyfMj5EELUnbyGRHny3PNpMJzUWZRVoqYUrxMZfeVyaCeHobbPGecJsW",
  "key7": "4FSNvizFKM5Xzb1cr6Eph1ED4muTqUXgSKM2xADX7FJdr8LYcaUCa59g3biqH7Bv3mHa94joPpUXyFHtKh9tFy81",
  "key8": "4iC8Jw4fbPZLPjpjkAWrGjKcRGZJc7D1GEb9gqTb2rEzujhbgTNfkF7torycgrQwTGwb5DUH3Ujfwve5Qaq7MSjZ",
  "key9": "39tdivNG2MkwazeV4evaSEtBQ16mD5gCv3gFNPwKJTQDFWTnXthYJURHSUNDpp7c7sGLixtRWipYyyTZgQNYdGhw",
  "key10": "4VEhK7AkNg9B7g8bheDFKqpqpKnZzBc2cwcuZoNnPeSRPtCzKEqhRu67NRMe6GKZTDSaXHyQSWiLM1BZifJXMJhf",
  "key11": "3y2UYfX62rUy9F2vWr3dAGxFV96cQQWQfJKE9Etiux85hsvKumftRmjQAv43C6pRi9Hi83HGjjDgiYZRj86aSWX9",
  "key12": "7t2U2o94WTN7ZfPypQ4gBkjo1Me9Acrz9sXRiimxiF7PGLEKirpxC5FhCXyofXAH1W4dHAwKByCctNfC2MhEeVd",
  "key13": "5jGtTwGDVdY82qahNeMeCKV2iqYwjmwGkErBhErXFz6WrxmLHbf1jaQwKAnWXQiaKwnnZC6ddBSVUJeBps8nUnyL",
  "key14": "63qR6WUy624d8GGPJRJpw3xof7iyTonfmcHw5WDGeMssf3UkhMrTzEAYCD3rF5DAHoriowEesNoAmpmxqLS8WCXT",
  "key15": "3BdEo9fA3pyY9vnvUkeksR8LYhe3AXcgpK2NXNJaDRaHkcrUToqE9r1zr3iwiLwQchkRhcg73rVBFaFyPH29SbQa",
  "key16": "2MgvVUL1DXywKsfYJnYk5Cs67V6hMzcT569AQLg6P8uDu7on7hyHRzJwCFT4N5ZLw9kyz9oncuquUWfrMVKSVCf6",
  "key17": "5jzNtHwWCMKxTsr53HNqGT26XQfnBpkBj6AQfgicz468o3u7411wMcfAD8E39gc8B7FvwFKsXJjJCQ142WiYsz5R",
  "key18": "2yuoJYLs417mzsmFB6BPSRpevrLFeRD5ALYaTiRdYiF245iXtBYRCPM2nsWB561m8duigDg6EXR4mHineKrFoGT9",
  "key19": "28dJPkcowPJteEYM6cyeaJDmjtPyVrvUoVKhwUTt6YxxZZ3rXy1ngAfT7YhuhAUyyTVpDcsFVgAK6szNcMCLVqzw",
  "key20": "33qfksYcAsfWzDEk5y8VY1BibjQEP9ED57itGP7PKiFKoLp9aQ2DikgAaGKD2mAKYfMAZPVac6YxMimLhvo3KADn",
  "key21": "5i4VFNkV1cpxwsC3yWvd4kLj7HW9F95PfPZKkNuebTih1PXmxvHbYsscC1zEBy7oZ9GNtEDHMeYKSeWEKWxV7epM",
  "key22": "jXi31CDdrJFdo6Fetr2kDgxGnK4gXMFtzHLbH2Tdcct2PFg3DV7ANYuvgEickcjR3gYfWKdeLJhBFEX7wDjQBE8",
  "key23": "5xvpTDttCRXGvYmHyWPSWnNyfaRSaT76U3MRdWohVUMVQCrnqQCRQ6wUJcquhL28fAf97S5bxZA3ssTFKXjPWZu6",
  "key24": "3jKVwdEmnrGJcsonZX7R7pKvfgJADL3yYmdybRACPDcPg6DyeFaYhs8zFko4eABYhDYGaNggzaDUBu7pZroKVnnw",
  "key25": "2AqjEvxiTCSa3skuz7vZicCpgnwhDU5paoEKB6TGN4LTm5cfcuWsQgfm55F5vKa8L9LxVyxqzYxLAGtRSKUZGhsB",
  "key26": "4Gc8pduDP8Bc99RamnNNpLLhSqwZ88PZDPprwjhAxDxMryJBwMkyeNQxDeoSq2AseWJ1sjBACijKQfB4ozXRTztG",
  "key27": "3TNVyNrSLVYY8RQ7WyyFFXqApLwHGWWDtrShRUTNpBcxw5oVrkRB62TRRksyMpxy8RvGrUq4xBPXBPZnCNzY8Qn1",
  "key28": "3S3vmv3ynxmFGYJCMX27qXiHNfRjcYexfcHZs6LQiyrveE7UY6rHGZ3p5nU7uWtRBEPyiHLUT7HMVREPapT9kYUc",
  "key29": "2UcgzbzXMRYb5aqzQh4u2XFsZrmwArT2v152auPPwDR2N9knzi9wsSBhF4pEBeFkbXKq1sB4ZoDy6EYFH3qzSXfX",
  "key30": "qNLKqiw3qDyoSy7LQkET7vxQ9WGA7mtYmyHoQK1HSd6FdS6y7osiP9Kry4uXF2chAvZdgyXkVH2K6rLXoxjfhxy",
  "key31": "34i8UCxWzrYPA8GRfrRwzFdjednzdcK8peQgmVJTEYunVfNyiqxQU1dyVGkeGSSgsEsBdpCy7bVNTTnKVp3x5v8P",
  "key32": "45FsLq3cyuBpWABvcuJYTCGNEKf1W1E6GY9aXsHp7a4dvoFHAP6jDu2QuLyxjnYvhB64r2y51FgGTWeSuzeygSfk",
  "key33": "53trtYn5Ud4ZeAUQmpgvPPXKDz7aFteG5tJQ2HcBrxB2UTybwbX2rsukHc7EsBK1uWt5aKwvkvvFnj7VoeSpkGr3",
  "key34": "67ktgPz2y6hahTqtjDeiNeYSM3jHEoD9n9XUunvEDZpS3qUA2FGgUq4aPzw8sqRgjfDqBWPSpzkBW2JwiUoJDGw4",
  "key35": "ibFXJAEL2HwZrx4KVy3ZeSjiSvCo66xQveu9gY1YnQdQ52MouVcPUpzpGx9nvYCbbigtBxZetRBF3AxzVtFY5tZ",
  "key36": "4M7GbLJcrqY77h52ud8HbqZCZ9B1PeGBUWztJBmXAgMhrk3iZnqUvFKfM8cFMb1pRbxziVbqGdxDveTo37GsKy41",
  "key37": "5qKxeJf3zFcaVssssXhqy2i3zDRo3VqpHaVQw6dkR2crJn161DVhgCYtWdyQW1MH8kjjFX5qUKPwvMVAwhJDJNZu",
  "key38": "5yYNVayFqkSggKEfChYYSbtrV9snnSxTwT4g4DU8GjR3Qpjz7ufTymkK46EyzWeWUKCFcmLhs3gYA5zUNEk8nzEZ",
  "key39": "5zpvtpLd27pvoaVKADgfSYeCGC1RwGxrCi1LH6z6tKgRmCUVpomAf7wnNPcLTsKAJW14PhDe9UDxetdKxPc1YNEf",
  "key40": "jEkKuVvKkgMZPpHXSN1ABoCqFU1Am9PgKkwNQrFpnv8Jq1MFPLZVNU5PQ7RKSrcdNVKXWyZiCB4jbMk2hXxAKsb",
  "key41": "4hneD8xmqqA85B6FyHDhP5r2XzYDNnooezkWdDtPDzq2krEmbyamghYNEA1tcXzPAbx1hob2Ho8sp43pFNue5emY",
  "key42": "5Eh2UdS6P3ELvyjXmBrGCoGqfFSXekxYmvVMam2W3GNfrJKbttZJvie8HLMHeBvjVfbgHSdpyVb8TfZgbRCeh5kJ"
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
