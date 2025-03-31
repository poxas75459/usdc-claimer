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
    "35CnGxYn2U5oaqpuZ7siFXa5tsNXJ5M9d4VUCL2PrxxSB9D1xMLZGeEhZQ7n6z66VPDfoD4g4tz5mVbBsETNvGvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46FpgKAZ7SR7VL1DiN3w2J6pVvPgcJpDSDnCkq7F2LZwmNGye7uYVkPJTg1PCJz31MGXvN622F8KTWqm1s5kc9TA",
  "key1": "pP2qE14zN84p4f5TGfzK7y8B1uc67XNcDWFLEXSCVviRPEoeUHJBoHxTHSQqpHhKQwvQa1pncFRG5hA7Es7DiwS",
  "key2": "66AhdYre4eoLhVnLpuG3NAe1wRfh3AAAkzTjzQKs5HBqy1cnmems5LdQgxdyztYYiGbP5bXBCxaGoeTGPCeffMii",
  "key3": "37a4R1WDqxdEhKTGP84GJuvVr5qFRHWUZZ5zsHUECkmktfxCQ48ZETyJ7SnRA3KmRhk3cgxfCFWJMtNvNQ5GxPdE",
  "key4": "4jhaTpUbyzQgbxrif56iRcJLzGGEgC6nzha6MFMSyNVNQWxuxjKTt3fqUa8BXTtjD94FodGTrTDLkwG6kEtCmDpw",
  "key5": "2kLFsJYEy2Cg2aTvy3NPZs3GG8WTjKvq1L3tva9uQ8tnxxkDbdSZhfQNW6A292VMyqxqRjTNwrjXqAJLz67kFLsD",
  "key6": "3Nt6vmchww8bQ9WkP7xKDE9vUbiWsQD3cRhWcvpHEJxqxtZsjxN9ovezSC6rzpRYB3fJ62YydqVHi1Hbuq7k9Hyd",
  "key7": "c8UV7TfdvhrudEZRrH3QLe4NeeAi1r82fupQLBcGzGWqo41dU7m2nZ1Tyw6CPeKqYHJE7jpCwsV7acEc5QEqNxe",
  "key8": "4UBQNWNCG9jaPakbfBPduGsin3zkszbYHKQXNbmNpJ7AoGUBrFzGkkietFVQGHiiJe9YS2jcLBjRHPbn2MkuZvLH",
  "key9": "BezqVcSpdLuq7KAwfbmviKX38c1kRyFaNuG5f8Rkxraj2xrBUcbVdP4KfgopQnwdcpWjrqYmqmXGeh6VAnmnEhH",
  "key10": "2zwLQZJrL9uRCagKuCh7KRoMmL8Eb3hAEPVgQRNDiusXXiyweExpDEUEievkn3vQjWGTSyHu7Z2cRhNUZKLCZ3aZ",
  "key11": "2otEz5CHX4xJjE8WFsFyHMRKofvRaYpi9UMCXrebRgvjSVT3Kfk1p6NLyuAxdNjVgfMdCSCosdHtstMWcuPfTw7f",
  "key12": "2bvo5X42cUDXcbLfGPJRQyNK5CCjf3Sa4JERGbh4M357jdHs5xLLDGDjHyV4w1CZURLsfUh8egSBr5cB7xdECaVu",
  "key13": "2cgGQ1dHqQFof4Uv9Lh39BaNnMh2cuq8NyW2fwJSSjLQCjq5zjyxUPWP5xeY1BEyaDeuAoeoJ3HyErqPEbvZtkj7",
  "key14": "37dEL6PkxWkpQ4TwQjDARpU4gNkFrcwvqhuckBG3Z1ki23Pi1AarbEaJun286pRHYrob2LmTm2P9WGxhwQaMxCHp",
  "key15": "2BHXyGoozAjetvdeNhAf5BmQrzFB25Je3XTJeVfE8iwWDBFE3pXMvHwzKmoymnbRvEbU6ssVSspiBTaCFZ6VenWX",
  "key16": "4yGonjDH2urDxVz5LzFxQPYBmP7n5aQMgeKYW5BZYXPHZrTx8eG8tXYdLYsePybQAnCvM2aJekdH3jS63rAW5JD7",
  "key17": "4e2DCxBBp6jwF6Jo7TVVbnRZRxMCb4KJR5YF2R2KW3uV9YJMALbajsJePq9j4UDCArNuhVfL71nnqMb1koDcipHE",
  "key18": "51mV7eXoB4Wu4mE62Paif2sMb3N9q1w8EHSjnG6ykvykMmFaA23RVpn8NV95ogLM9xWsKmXCuov7Km7bj8JGEV7U",
  "key19": "5Gmec31U5RyBLUYiAHp6jCkq492SVutURLt3Jb28Dwb7xrfZhgFoDqDtisXJpSjeHwHQnEMsH8tMZHprM3ukySPF",
  "key20": "n1HBs17ggo6h5QXN56csMu6tjZiWUPwsy9ohW3v89nyiLwqzZeRpNAiEHwtrHznFApFQfgcRRg4ek1EWHwYor3n",
  "key21": "5wyULbz6FPV3eDwoyqPsiAw9r2wqdo78tRji5UJzk8RA3AsMQDCrkgu6jbGppWrnornbPM79VJbooY7LYpNV4nBs",
  "key22": "4YARiEnugiyuaTHv4pqh2cEM1jKaxLrLhgZqa6f5hSRo8irNo332VF1MN3HT4gt8JW7bwuTyjEfMdBwjh61HvFtk",
  "key23": "3U6sLqx9XXme7cBoNtH2SDewXLt2bxhpEWnHbtBXAS5XuSUKtTXGpTVd5MUTvpTJ4Um54oGEfVFETSB1xXZqbhfm",
  "key24": "48LLFU63Ncf44fDKV9S4HqwdXa33aJ97fqF2GdMhUJFQjN4ToVaijUJ16dyb32V52TFNeFAVA7wNnNhv1w9aTr9r",
  "key25": "2KfKpfH1WAzVc1oKAZevvzrvJbzKbjvzMktB2viKkKA44VJT8dhmcxxh9EegaarzSaiQ5U3x8JJvJ2TjuiAjzLhz",
  "key26": "4vMj3e29nctX7pXGSekz7UW7kt4fVDxEEAc3C27hfoLJSzpVnFnzFsQ9nVD7BTqcsTBT2Btxnjq3fKExjfr2x96y",
  "key27": "JyAH38wJcNzKETe171iwsVQUSVPvnYQ8B1zFPV7JDSbZfXXEhtbUiAs9Gk2pyyVjmmurj47tA6CmiWAfDT3rWqH",
  "key28": "537LWMaKFFUraR4GmTzVVETxLHyUuxbB81hh7PL784FyjMyMGmNZyqzBNqCjYuYAkpovaj7vQeJPJ3z7PeWWwBDu",
  "key29": "zqPmj7rKKwncFZDENNRgtfJQw6oF3dAAi7DjPXLRPxEF352dcs1rrQKr6qx9kdpRDijobjkTrxpCvzK7L8asF36",
  "key30": "58xeetJib7p2MTzxijwRpUypYzDysF2sAJMVjYN4v3wZrMkoHmLgs1y4o3Xj71mSjxDgruW9iMDi59qrDqLdDkSV",
  "key31": "ccUywHW1v6gtVRRdVH5DBzCSUSLyRUrhTz7VpJZypKYRyJKmJ1p5YiaVWtus9VGQ99WMgLj3L7ihQ2DNCU9JQLP",
  "key32": "5PYgEL9zpiDhfenEaL1cVjszLCSBQjb61Kzdo2PxnUCrFa4yo5TdJozvnsRtNn7NCobFjt2SjyJQ8JKWT18FPDk6",
  "key33": "3Sj7yaiD5rX76K8Uqwcvv6qHEN4822GCxGdBNx6rs2eVZCGAoCGbTbdztMxtDMxQhJMeoTSioCtzhG2yycv268V4",
  "key34": "2draUE1FPU4LLqURkjn9WpPFG6NZ5yVNUBjQrhzMtiJJQ68MBssXPZeBmVxG5uwi5BhWqqDYZ1xqNmokX3s8sdha",
  "key35": "5muQ93EBFHKoBgmfVN4oxxrXjq4fLXT8bgCWg1C9Uaduvcfdv6Q6KqXL3QSpzZa1Dz4E1RczvTPdM3bC6q8bgQaA",
  "key36": "65B2X4cbvxRoXzgBRmu9thpTyVcksLKKkYJwFNBKArrhwavehkyRLn1PwPtELD1F4p7Sx1MhurD4psSmr9evCaec",
  "key37": "4azLeNfkhViSNim6xw1zcuLzEbG5CjBpyfC1zGZkPY88Pmd22ZXTQ2DS6dLxKhWjTP3rmjwhFnS3f2954sQ7KekR"
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
