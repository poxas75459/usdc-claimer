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
    "4AjUrjBoJT7YRPG2TdiRyREa5XyEAv6FVyLN64KZFqVWNWF9Pf5THXcaRBmdNBtFnxttaMSPkspbZwdMWsiSnAYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F6E1RNKLoNWn3DP6DXedFZp839Zugc8P5Zza7MbxUQ589CKMsKDAXsQzMATRS3Ds4iNR9rkQ24yoribK5iDZ3cW",
  "key1": "5UfaBL1D8s1wRj1bxgpftTTj2DN83XnoSkhbCso9DwujdxFZKsP2EdDqoMBwwqrb3wJK8jbTvE2CuoQ91xqRa5fr",
  "key2": "553MGK3XuYjfbcnHdhtdvEXqsKNSZ5p23NLPZ1TRKcnansjdxpHXkYorrffeHWefyVMqPC8yUsRfQJ9QB3aq3aMR",
  "key3": "5fHM95wYJprPdD8ZaxWVmQTBNh1vdgVfiRjoXvDt58FWFReZ9UFmvtUu3XoLqrW28gKovXRvQqBRavRC9JvPHakj",
  "key4": "kqTnzzbLsFSU2181DbPL2vqyPZCBp2gpjBd9YY9hHEXpNWBkLyBG7METq7qgaHiA1V9odyjBKP1bQSLffVnNEeZ",
  "key5": "2UWX8cNMuu8fPPQM9KLUWgJqZcUM5RN6H2KS4E5ZCzj7ZiPGGwypfPaBjQgXmrx7kEsHCdYGB814ug7qvJV3UvUs",
  "key6": "8nWXKv9h6KXVUq2evkxbAqymjciRMpXYNooLBa4o5Hfc4bwKAXfwMCAmPdw7ptXXpwLKkD7aWmq6SfB3vQ8yRBn",
  "key7": "5V4hoPtecAWcVFj7URDWep5gZvRyCixpExGSoQAaoQir4YfXcwwyCFqWfUoQkp9TJegBQy1wURdmNayYc69fKpkx",
  "key8": "4VaxEzZNes2QJb8LD6ZA94o1Gh7jCTigtEnFZXQvtVNFGpqDyqL92aZqgYvJVPehaEnmnitvLzccf29ki5s21HDC",
  "key9": "4y7FZhkf6dnQpynPkxeYdBzAFkMCWi5buqFrDandQbt1pLDwRY5nQRu28hfsSjjNNDHTz3ziw58SppBad3SGkD9e",
  "key10": "5NUyBWbnx3EM5tgYboSbTq26QCaNgBNQj1khn287fqP1SdRG9xG2rwLgdwXtcA1KWsgYzCW7gVT7yQrkU8RjnAYa",
  "key11": "39CU54Fe3q78cwboTSGuuACdMbXvtZm44GVW3oHkaMNspsx3HrR3S3yYqJ5d9ken9bSgjNzXQ6KN8rZSDnLN3Cgc",
  "key12": "63P2HFDLJwSUxMKRV16ZUAyUExCHPjs2rodsotSycA7LvsYzmk3YvUjFYDikViYUcdkjEkVWb8WeduP9qd1J2uyf",
  "key13": "4raGoERiHmFwY39ipUjjpNr3t6EsAogMZSCCS3WuJukYG44oqjCJFEb62XcbFk7YPqoUCwRjfeYJVXyRV7TiKCF3",
  "key14": "7PRhANHw9kg54DvUKWhyAqJFp3VhvFusgxyTCfiuCv6aAGkjmDEkLfUBZydHyHkz1eCtku7CLmNc7t7PfvQSsdU",
  "key15": "5j7fzchk73FS926LP3Dg5AhvtJByeXLEkPrZjenJ4sA7H5Ee2koQWxMHMdJiUyanehwFRpAmDvfwccmaq3jNbiZf",
  "key16": "yV8UDUYu8Sei7H1uj4FtLBiyzo2DNjmbGs6NWA4iDcLi7kjU9rnWxXizVMWrEtbXyKpJvE62MBZ1XBMPRDfR9gV",
  "key17": "2coH8MYgrMWgtDS1NDKseVJY9Nwjd4nYcyAbLn2rxioJXPbyAyqLHepByqawhgxNQ6ubaSpaNYMYZHBWA7iv2oM8",
  "key18": "4zqtVMrjoDhqMkRtQ4rXeTFXTpUjoBGYcZaafnYnU1BLCbuUGfNEsLiVZMYKPJFigBEK3thLEQcN6wbBQyxbap6e",
  "key19": "3NXpQEh6cEwdtKwa3U1XMgd1zBsxFkHoxewHmhPyHriYccJV2AbXQzL1xRskznDP8aJBvVMp8xny7MLi1cHj4rwb",
  "key20": "2anXQS9A98b5bWNuoXXAb9NrbsFJFTYTv6GFqFNiiSTHANcK52pygCPYsk4mxDxybqAyvhpztEj8ughcitKC2fQy",
  "key21": "2mDsqepf6Ueo8Ny5xVJTZBzUtHfMUyqRk4B9DHUMS1ZjwzV6HTYuieax2hqYChZDaH7dxDZ2uJ3kkXks2EAY1FMA",
  "key22": "4sSPPLry7RwzA1eUKpN3U81CJom1DLrpLWaEwD2LNYsdu8s1ivuyo8y4ZVnqTuwVvx4reWAiEs1sNK2VXy1Pzz9P",
  "key23": "G8p4KeFiqD9rk1w4sgHC7HAgL4MLFnozrfyMwfZjTVnrQyqqgAHRr8mSR6dWtafXyLsLA7AkWujBJw7wup7ULeh",
  "key24": "2BEpgVAnXkezqT2x1c3kyWVDDDSoS2FzrMbkwM74X8xnw7M9a61mjzjKcY1zNTKQKf1FYnipfMSwjvuoURK1cdJs",
  "key25": "5MTxvAbP68Ci1FnrbrwBs8WxQDMofhER4neJNpWY5US8QgZATvyZRfu5mZ6oXUHz9ob9TnRVPqhPrTrNkpgGRU54",
  "key26": "YM5MzzFatVBdabzCui23qzXL2ujkT3dNc6SR11cLQ2cjuma8crAbNeurE4APpuQAMTAAgjXKjnYn3qQEBJHgpEc",
  "key27": "3VchsmjeEVVPuJAF45ep4oyDyufCPstMP4QxQvZs8DpYyHhJA9eb2RVV8oymaNaTVv3iqJiL3w9wsGtSHZoMg1qp",
  "key28": "5ziCSKskTNr8MXBaHtDFQs6PqTEDj7qe2NMGtAyFwqfGAHFM4qF1VTzCBjdLFKqNbFtB88cFonEa7eFdsojaHh6P",
  "key29": "2JymcC1H1481HKHiDjzdJRa2AN5H5D23hLLV6wgQKSEMfoUEXsf4zAfafth2i5AqVaDcbVD53NmKTGsGQv4Sjhe",
  "key30": "2m2DSorgNUxZU9tULRuqQo9T7Ed9x4Bwx9pqMoLHszARUbS8ZZ5suq9dkJ7kRJXVVd6zsLKBwjpwhWoiBfUzJMoo",
  "key31": "3Lum7bdA4sXJuougP4MYhbFqLwrWguTy2qxVBEJ8rueHRugjbzAPqSfPs4HBPXxZKGmb2ohNHyf4c6jkMnySv9Jf",
  "key32": "4QktDBE3NMqGuwSPBU8evBncnq3Muk3bMsqs8GU8URRZAMQqhpwvSwRkxKH9AB1TpHad54DC5fAdHyy8ywsQdtKn",
  "key33": "4eqSdSjANNtxX7pxwQzb46q3hFBWUCSNdiTGzUkD8yV6xDKtcmGYFkjGYCx8jxw7Ba78vQx1xupczBBjaL5PSpJM",
  "key34": "568xDnsEDs86WFwL1GvyYevE7nzegnwztqkdQwqh6AQw1LYJU8hL2Vjf3tQ21jMarLXSAkGdt5JRi6pf23EpSBN8",
  "key35": "5T1b4kuUpTCmNabETjd3x2HBE8p5Ub3NhiNb3axupeFrLQ4Tyvkt5GLhGbjV8uN5h4GK7Ac1rVmqEDvoRvoLLudF",
  "key36": "4pRrN37BCav1ezXTGj3YuhFpq4XDGoTgLyTZv6KbjjzREpMKjACTtcyPTBcnNB4GHyMqHrTKsAf5n4aG7bT2YDat",
  "key37": "3aB1JqGWP8d7kyCqSLXW2UWSuNwNf3UqpjnM4frWa9yexQvmSKSTxzJjV5QKKRg5jacXVpPnnVzvv4ui5ZVfZN6W"
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
