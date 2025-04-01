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
    "1kpogjSDCxYBwQ4XRQ2YD6rrfR3n9d4v5HWr2BHWn77GGJZgHatzVDKRaktH4AR5WE8KCEeGQ1QbpvBpVBmixgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7W2QPPQunUrSdKCfmwhwxd1zHdgqTvjL3mSfGyit2ysJaKQYf4JaZenttasrVbakMpry66AfcufmE6g9JkWCsN",
  "key1": "4K33CYDc7wYzQYD8UEosKNCg2xsd6p1ufAY5Ut3nduf7v2VSAA7iwdSM482XuT7EeqTPpmKFvZEbWksdjGz2SHvE",
  "key2": "6611JBpSDMbAWbTw3TjWWwKKhbXws8pfP1HSf3CcydgUYwsPk1PcYaYUbSuLPw3uSxgV2LcwW2TMy5C4PtKt2LYV",
  "key3": "3NmJTDQxg7xtxdQe3Z44gBsx5hTaVQk6Es2puLLrwFv6DBz14B9LVSz5QgmYJmq62kCVS5FVwgWcyft2h1eFnL7F",
  "key4": "fhgQouf2jCEP9u667HJqWVPXfPNnSEXYg3HhLZf21uPHJQpWrVQqyLdR9FRTzfk5kCoSwJb2k6izimD2sdXZrp1",
  "key5": "2i5kdV6QkKtN55T6LuZN2hydJvUPkv6MKVwn9bn3xJuhjcs7bqRUmJJNHKdc2DUpd3jcZv7ReMbukAD7ngh2rnoy",
  "key6": "RwDy7vqS9kFfF8sbzuNob2HsFqD2xtJ9amXJG4Q14RDtFUwb71CbEXBs89E3MeiAoyRHgPJ8KjMzKNAsBNKnX3b",
  "key7": "XDRs6whmwviGZfm5XPJGYUMeWTDbBRZQnqFH7K593YbsaiK87pPKFWZgEGbHLvWpqD15yNWvgfbmdqeRXCB5hc6",
  "key8": "bqGAUMz7zfaRjWW4bAh54ooY9rkVPkZDwbJ2ZDWaw3XrPdoSLACXwnpXnuZYUP5SG3ixZtoLjKqAfzDyZFKvToP",
  "key9": "2Yj4ZB47s6M14XupvqrDL9WuDGQz5bAnQUD3miFZHt7sVv3aeRisWvKLGzAdDvNop3pUqoRimGi6Y7RU2yYKcbiw",
  "key10": "gyZBsJfD57mwwRAwCpcd7EfyBdJFyrZRSCuHzmDy5EJ16sjHQffw5YB1JpJuVm2yd9cwCEwndYwKx8yQtKtoM5d",
  "key11": "MzkJjTHx8Rvvj8cDuTmSpXi57C2sFQg6Nob6Y4mZPnfrxd6bFG3k5n31keCjv3MZr48yNT2hnW1F82KENQt9q4Y",
  "key12": "2rKd6jkqVohnp6dukxFtKw7NqUbj3S6dSPFxxvBNZNvnCypqsQkxtZa5cKDoJYejMYtw3n1oYdRrb6HrFEFeMoXu",
  "key13": "3mQvhgjWRufGdar6ctQKK4ZxKXyFw7ipiLsK8tbKP6WZXVgj8ToPXpGfNSJzGnS6jELMxGxF7D1QVZztMYrc1t1c",
  "key14": "2E8hh15oZVQSUVJ9k1GFgsZBMtEEgBwbZvgu9JbYdaY7SCg1dezkRh1JzbT48bsBTewpD25nCJiTvaTXLXNJueRT",
  "key15": "3gPCwJoHPbiWbeQWah8s6FwPDgR5E1t3ibNj8VC39QvAb9n8mkEjpsn8dW5NXox7n1pbmZSf4m6pmKZoAXvpEhUa",
  "key16": "25vKHmi75yXUnKGGkYcvo1XtyUogYPsDhZVZTLVPDrcRRQkkAGd4wTvWm5zRo6ciMuDghtc3bRqvSSYWdgzxiUkH",
  "key17": "nvgaS5JyCSw8yWDCNa1P6xEyAGcgATSSHBLWWEguz6uFx3qLqCbkq2WrjsNGqbK2kLL7rUWdf1ZQrBZHWZF61Xp",
  "key18": "ProQuYvmFoHrq6DEXFKEVNq4NgqhQJjHbxoddEdS529MpA47Vw1udF6tngGBj5bUUhiBmyKyR59t2mDfPBHcygJ",
  "key19": "3iUfmLQMo1umweodXkzHA34inZfJBt8qGDVDmTSqYaKKZd116bfUr7JXRbZ14Nvg3jW8xPLveczEEfrqUFKz5Vst",
  "key20": "5W4CXbCGmEmHFJTV671VDKUS3ykV8Ti6myF3LnUUbJPGsSravN2q8KvRCdvyBxa4gYMiwKbchDdg853NtQcU119s",
  "key21": "2Cts4H2ceCjeotsJZVxHKzACqDbi37NQe7bPCLwNgHo9HCkGzXP5SZS6SoEr9JbZsSW9o9JLh2njZzbb2e4iwvyZ",
  "key22": "2gaHj6wsJsQVHFKrXgjBDNHDpzB445uT7R6ivKpgSdv1P1r9DQTNy4by2y14Fq5nvnh1y3sYSTMBDHZqrdbvLGr7",
  "key23": "3AjWCENPYH6L2wTa9nPny9no3XEeTuUUDJGwRTc4qV5RAR1aL68x11vNhAvHRvB98Gz6vLa2Fzf77Yu1zoLfzCso",
  "key24": "67UN4MpXjP6bokDSe4DeyTubebiMmBQErBbh4E8oWg9feeCX51HyMV5QZ8z4iU8AVRFoF5aD8Qnnmjqi2sj15hyt",
  "key25": "28ZBB7anWbmSFi1cLhJQ9EyhiMTKZJr7hNe4ed3zD4L33ss18BwSJD9j3W37QigJW4DCiBgZjZ1SsRU1zi2yyyu5",
  "key26": "31tLtBqhYhJYq81EHBtJSGetxwT1WvTCmTbDU54ZCAsocwbXRHLB4qRCiTs3FFG5JwMbFKJh81XV8sZSGVEPxWwF",
  "key27": "4Cs1njPYhVJvoimrLovdTS5U8kUxsGVguzRfdiALLzdhAsZ8YLPSxtL56QqrraxNHt8RYgrN3MCTQxMPzbkyDXFL",
  "key28": "3y5o4zSepG5hm2NfoBBeZ2HXbW5kb2Ae6hGj9KGy5r92uufcnW7Rdj61PAjWzZFBeBaCeaZEFSLzVyS1GrnDCGEf",
  "key29": "4C3cQio8FYP4XbUMgaW5HvFrzks21NL9upnoGx3WbTtzCKmjMxQSkbtSv7UnQYFWNRoyv6eSVyaPwWnRzNeBtDoS",
  "key30": "5q7pPeFNpaRBpgKt6GHg3gtcoWHwWtVhn57ZYe4h6cLBfqVb1MjxvboJNcE7E93sokm52xCG3QpC5DkDjRVQq2D7",
  "key31": "42vwyhS8LHoNxaYh1FXxqndYtLCZFLme43KsgNhtGSruHv7nNihQd34KFRaR6Vau7GfqrhCPpH2u379iRpVc9R4J",
  "key32": "61jGUep7GLyM7t6Uf67XSU3K7moUaNiqHT6ovphkVRi6jCHz3fTcFbErc2Rdyv69gpvZeYXvptTr8oXoJu9i9X1n",
  "key33": "u2XrLCNMFSvgEyMpuaCNhXCXxgZx4Q8DwaVvkzgaa1Aw1GdKSysTHURFypBYQAXqbv8NCA2yWMNryVe88PwHkct",
  "key34": "2WRepk8sGhArbg3rKrk8JV2WJUs6W5u6y7j6eoMoVzioy1hvoA8YpjhqkPC8TzUCBYiduxVBhYKA9TQhmj86cnXK",
  "key35": "4WsB7SsDnc8zemJKbtE1NneEkr7QdzAmEX5ydPdCMM1ckXCXh5Z6fCzEJ3sSx7BdJomyQSsMpnNByWwB2gibwCny",
  "key36": "AXNcGbcNesP6HLNd4UDSCQjqCo7shwpzMTy3sCALM5dgZD2fPEnyqbNeerx9x5kYi6ANhcPipiMLKPatvXGJiPi",
  "key37": "44rTfHCXLaaGnanhpyAmiS1xqcV5d8Vp7ye4HXRCKZs6QLie4EwXPqhnhoYS1MwhZDrVcHit4TRyE7U5AdsJAREW",
  "key38": "3JJeQPehH8RDQq7dsu2UVFM24zK2QT5syxLvxxaUqgXiBVxhHoUHMzYXfRfG9dFmLi7WNpbdvqHAo13cpzGGc9ra"
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
