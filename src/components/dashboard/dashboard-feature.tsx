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
    "3nffUMAj7dfVFcRAamA8gzjsWkFeysPyTarWNazj5u5uwpxqSXunfvqfNGvMLdqWF2Gr8tCqUPEgbUPG5DzcyiQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sa2DTw4iGq3oQ2EAUuAGyrk1UuPFz3BLTEwfa2D4j4QV5UscmhxHktitNQbzwf9jDhAJVwGsJfZa9SpCXny5vb2",
  "key1": "29WqpLsF2BbFfGPjNgCNetYtNM3rTRMBbbh4K8LS73Vgu1CK4DKR58CV5yA9C4NpB8t3QWugAGsmw9RAciCZAkhi",
  "key2": "2j9dfTLpuNfKGXqzGzcyHWt3wJKoRvNZ1qaiRJ6jbExypU7QvGC2wxWqNJzfqXJSTnnMwZFsQd8M4z8EfKFkMThR",
  "key3": "5tnG4AR3dmswptyE6nTgpkXYt3C8AiGHprktwY5z4Mrzk4KCMGp7ZsXBJH3TwPNv4kHufs5HXcRL6hSBQQ8RMzi8",
  "key4": "2aukusqiSWp792vkGrYjzfqE1jepkK2Mt5KkxNReis5tah2EToG4hbe86vy3D5BbJy4qr2azPeKXZ8EatcyLK3Zq",
  "key5": "5MD3GawD5LP5t4r3xiKPnGbJxNnqLdtuGxbrnLB85zf7cVJdFPRBHcYTjgyteHY4QpFAH4UNYoNqdeSfVkuNhbCY",
  "key6": "3ZbWrL441koqcNjqkhV92qSjY8uqBsxaeP7ApvjRXNvq9MSztDjJF8xjbXYeKzUiq14cq3jySXHWnVAdtQi13qyB",
  "key7": "3WLgFkwdR8xTXXSq9xPKcnywWjHgYJB91Qdj1YFRuxcgpYzFsvRTuTTKLrSLSwaz59191P1twYG972BnJ7MMz4Mh",
  "key8": "4MXynfbE7J8w2mvk6u3nnFxftwfDob6QcfnFPS1XYkkkU6aK9V8GTWP9ZyraaArX7TuFWcppK3rqkPKjut1Roqq4",
  "key9": "kwiaL3WE3UvEZmA6NLjQCkj6TYJzt6nYQFARufyUAcqWxGis6NdHycvur2ZbFua8UV9AjQwnPpn4M5mLMMS8DSG",
  "key10": "2kDPYVJRcpgHukMopspF8EzkVVLZmbsYJwUGKpW5bqUfTxArA4iGzJGCDoffqWgQBAHgS39dUuCjz3HHYNf45eqg",
  "key11": "66yXtz3ac7ccB1cTXYqr5RXdVLxirG8LKtyBteSNhWNeQ1eBaf6utjQM2KQ4J8dbzPKzTQfidcRDSZbDHRG3a5k",
  "key12": "EeqdgRbG6ZVAH9TxRVB79XAijBVq6qhEv6UPuXhMq3smfiFu3mfQBMdsiRxfMRP2aB3bLvpVPS8amzFNuRPsjKy",
  "key13": "42nzeR6KirYFQvhHEVJEYdJWDWU54MSkwdtQT75pLDzBRYekvbpDqFNxFCkU4Fm9UBES2xWytFzXb8QZEkDUzLZS",
  "key14": "2rEVjQFGejG6KLihYuoLsjdP63f88NW85A9iANVXtDZEtgRfSXZixo66AxPwcHEAogv3FqXft6dLsgpSobCQcETw",
  "key15": "nHEBLfYE5esLPVDXvLU98ePeF7s2QpDDyRpe6gnXN9tFD8eNDrXmyydzgdAqw1jLu7fQFyaB8QgdQg9x1DCzGVZ",
  "key16": "5igDosKqiGo7P9nMfyGRKMZsCtktdQhV722gtmN1ppVKnK2SJqJNYPcfj9nez3phRBNZi4xubWXRACvtuxmJtREV",
  "key17": "Fs6faCSGQcGwzosSaprGhHGqAV2e4GeL7t28UxYXzicjfYGnu4R7QmrmFMke5FnsLanMbLx72Dr48VobdHxS4Dy",
  "key18": "sbZnLSSvpxpoKdXidfkdYR6BrQrdBYQZA3EQTMg75zayZuXqtVTXuDtCCdxmM3ZAPaHXkhofyJCBK71A6gp8NXE",
  "key19": "49Nqk7N3G5JwrevvtVnpyMcSdCLgBxndY4DsEDaD4wbrMBs1mkwz631UKgvjHABHWDTizJUH8Et8rekXvjKUxXQg",
  "key20": "4gWPpgKUrPC9fCFs1p5UTAzMqdyzs8DmxU9fUXpsHzJkvng3zN7Aw2nQ4po9GQZQ7gpr2NiuUKJ9TemMZHXNCsKu",
  "key21": "2rJuT6vNBHovKYnSNQePgzdkQTNCWJvNzQAurAqaexWYEN7ytfsrL2wXLHTB7QoYgNxUbAe6EC5MTteuq1RJaBNt",
  "key22": "5EFKpK6WJZi74XTb5tKZmTPLYjfmFJLMq6qAGmiikfAVxsFZTpMNtvmL2CKw6nA4wo398im69Naw83z1NKb2eSh2",
  "key23": "2d4PHvS5jZ1jemeGY7xhkynLZGhXQbPzjERphcqyF7KwNhUMMst33y4G1bVJeBpE3mj5JoV8jwjjnguoTQVztM9C",
  "key24": "2XWxpZWUcqoSwByWrgSW7JX75Wg2RQHxViLTVa9sa9fm2PqTMCv6FSW7VppJBVASrayHweXrws19dHhBLdQ9edwP",
  "key25": "5XFzATTM2MMYMdkaqUid6QCUrFBYPetVSkfzhqVeTTT4yp7dni8szuuNWojEzXxW3FkJ7BAcm8oCXE7g6U9W3jHB",
  "key26": "2sMjtJcrDmbkcxK9wRx8YqiKEHkND7ixLSHDoegMzWwpxWupdg8sTf89csmptiapJpnWZK3TPJzsob15AWFiqozT",
  "key27": "5M3SFgqUWmYz9VhtxQDoM5kUNz6Hg64comRSh7HZxS7YLc7mpLc48rvPUNgAM35brVTja8CuJtUutsQtZPvPRGNk",
  "key28": "5qhyeu8a2Nux3f8F5ZbtENkmrvzE92LXHkDehtihqPb2kFZ5utR9k4PLxKa3fTESPin9gErC6T3o4S7Hcw6QD59z",
  "key29": "4AGMCGviqfnh6Siujd8CisfybqsSZ8nH98b52eJ43iyq5rhEi6GXVnpRYrxc7aRoQPcE2jEcxow2KK7n4JcpDnSn",
  "key30": "5QVrjNqo5qD358HbhHHQn2NXYmvwQYAY17mMnBBHMP9VYwMk7zvcvWXWdsd3xSEwUJqz2dUdv5RpCZY1h6sP4Ev6",
  "key31": "Mi1VqThppSWfraEXuSng3akXf38rc2pBbxVEpEAwxsXFvaA4jW6yzNv8hpSq9xXBGZ71x6TRKGw9CbyUNZxR1h3",
  "key32": "3uYn2rQGM92SC51ZeMJnyfdE2pDcpT7PJ1QW3mHJnMxq3HnqZ99U3Gc4HojiZPD1zMDjod544G6PvTgMutTSVw1z",
  "key33": "5uUdL1bDLDgDmNqFmgPY69axV3wWDm9NrKAzNoZaQbdW24rV6EcZ7mmQxm2q5xVo9CDGENZjsnT4Qk8fmbFd1pCj",
  "key34": "4dw667Uc2YZoXiHoX4cuNLAGsk7JBomW1Ai2gxywvWMjjRgEJX2fRJEyPFxWabJfnrAppkKENDEMsJY2SQ8JFdUG",
  "key35": "3vtMfdv7syqrisQrjpDRLYpXULVuhDWUsf2F5YNtASV7bDJToaTBUCaUVSJz2c3wFor3LLBeoEULkFLfaPm6uuHP",
  "key36": "mDncCFWEfxePV6RFyw6HQSddRgxZVs336kwhiarZcMPHgzbPBSk78aJmmein2rKFXUCsNASLQTVErpRwexFTSEr",
  "key37": "2NJ1WMsQL3ZBkMfjZQrm38SKxj6m9woLVg5T1s3BmKHzXMwto2ghLxsHa2SdXneXvdeHWhwAPuy24SJ81xukcsct",
  "key38": "5RJkY7CgZidXkvAaBqXBJ9ARCGJrGuURfGJ7xTkLUncmeKztzwerHGB17Yph2xH5f8phNhYwfKEy5MZXCqztGwV7",
  "key39": "31NGsfhAZ9bwGunjD4cNYiKGwjK6QQZJv61BCvJFJ7kkcUx4GL9K2sqhqJ3hQAUvHHt2f6LgEMh3neBY9J4DGf9t",
  "key40": "4cPSPJs3pAvmrKqe2hF7rhC9gct5KUxWgSivGWo2ndXgbpkjXazvczpgCndaD56zGDTgqZHDKTMdwDRQgcLtVWE1",
  "key41": "3BH9E6xDEDthd1jbT9w9RG9Ct4S3kpfX4VPKTueobLbNrnPYUDHLtoGiGP8XL2nzCbunAvZTqYz5vCCdz5EEXRMw",
  "key42": "5BmLCKyFjXq5nB38m6HeabjnuLqtR2gYxgdwPLKW3GvhXvZ3WX9PfjHJVgoNXWJR4q9zrvcjAKbKZdgiomF4pNK9",
  "key43": "336UWrP427zqkCWvaCQ8QdUCdv8CV7zYEVfheNxkB581yeFLuQ9SUdyvp9a6fyti1yJ1SRwZj9xp5YdTggZq5WFE",
  "key44": "2BxZtdGrbpA12toBwDHFB7vGojrWAfhociBL1rX7xad7NXE59LUEVMMyevfmJmGau5pByrAoFdLerbimwruGry5L"
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
