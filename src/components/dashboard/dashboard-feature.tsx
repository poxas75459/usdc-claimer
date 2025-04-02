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
    "5w9LrkYXSEQh4chnnQjLhTGHfo6E1CABJakq2umhUadxFVTjX5wZxgkmJnbDvTitPRL9Q7iiYg7ht6kKe4LVTkrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqSZqCpQq4z3JWKqpMLD52bdFZBjaEDbFCubyxPRPQW8XVreB5jAmyzaabCF7yQrBfrLiWYnhH1fUkSr1kPd6PP",
  "key1": "3JBCD4wu8K65Yu5UdnyamdLNMJ6zFDZn6AXc9HAwGA3356AS3vMKSTWccu7Fft7grKE4bN77M3ub2tMTXtJfCa3u",
  "key2": "435PvR66cH5tjmsDiNSoihPS5wo4rvWRJ8aEYeQuNTL3QmqWgk3Rh9mABv2CNPcZusdvKP3ujvogxv35y9XkHHVg",
  "key3": "4T5ykNo1FEHJAC3tPHJyZPx7oE6nJ6vJvLkQXRYzBZQsoG5JhDVQ5hpfXxfmhTxB1d3sQjN7jAZvhy9RDfYBRPXZ",
  "key4": "7kiAGaSNcU4KETgXXC9UPo2pVuVwmqKAxgvXYHaV1dx7TrXwX8FwYi4CDMvBGw7w9bgxaTP6qr8Cvxo1rjpTbmh",
  "key5": "5GTEFT3SJkB2BeeCAvs18ZeLPkrnh6i35dGX6Lato99jfou1g1ZPZsWNSVc4Kuy9HPf74xUMPB7nf3wTrRXY4EHN",
  "key6": "3njji6ZNvXqcQDf3jeb4xw4NoNBAJTnHvJzmfbr3ymp8tpBwgnp3AdhiMcqPuJaMRWwESVsQfcDPowaeAiFVJVqJ",
  "key7": "4k4jKwAGCqmHnavqhuMQVfpvj46UJQM8YGHUtao42Weexo3BCwFXtUgvux4rY4dEnXT6mZWKwEDKyPydW88Akxdj",
  "key8": "X4QV2UE5VW1ceGK91Hmqfm6DpP492366zzBLXB9vgfdJCNAnZ1QqBr7xXRDZQ53aCgRu1y2C54cgfidgQzFSRDj",
  "key9": "56SMWa8ZChW8xV4nG5TqjgHWpmdLQ4aiHFeXe1d6Sam5GCstxoMK3RyvJ6cgM9UtsfrEKEQJgpg9huXWodfPwXrq",
  "key10": "5dgZFp9nxAqMNtY1YYRaVieadaMgu9wgWMazoUDJTsv2MZT2TdWQNC9R71xFjoTnWw6BsRVM41w7zGhG3rpZN3iP",
  "key11": "4WnA2FfQvHqnZVAchtAQHPunHNeEBjqYMvJhhw71XpTpQPQMQTMwnGcUxSd6YDhCxHHx4NAhq5pDduRKdvGYWSA4",
  "key12": "5iReg49QEoSZS29miqNGREtj4fLzZpBy2y2ZzwZ3RFN3PtSR9DFj6JZNhJ4AfNjAzFoByXmUeTfprQNigJ6J67Fd",
  "key13": "52zE9XmJa15mUwMRKPcMrMjvmBmay2xBFSM5Y9kzFTmKKeuWnKNsbnKGE4BA9W3fWomJ35uCBRBreiGXbcr1THHY",
  "key14": "44EYsPQZkYnGdtKA7V1P55rSGTeZa2RureGZeDG5ZVSpHiR91yynssjnYQTbLgSn6ujYLUBBkBz9iErBvpsymKtD",
  "key15": "2aoUM4eqVuGWTFaESrLNXnTTT1oshh5VUdifxPBRym8iCyoK9yuyDHiKuxaWLdT8w4qNVFMJxVTjVwJy84w1t9tD",
  "key16": "26p8MAyKcByofEhXoLobSdMoBJM49jQ8HALTdjZR9CYxFE8nzeXHHj8Q5PrKvQto5KhufR6mifd7jvaKoQRcAH2U",
  "key17": "4R4eJ6MuWJE7qAWAGzhEt8N18yya64rpvhfRdzC6ZwrNGDV5nVEC7Fn4wsKpGYJudMij78opeTyp9WfgCCsyo1tg",
  "key18": "3kkavx5mg3DKE9W3SVogLYypmuuiuybuMC4fwqu8XWmCtEwNz27KJrASHZbX3t5CeaeyS96bpHy9Q3spsyWLpgfp",
  "key19": "Fj26UbnhrFhm8Kzan3n49SuuxP45VFFRxa8BTsZHZgYABCWodfXwBBm8nkLTBqeXss54pS8kJCcL3KVTi3rhShZ",
  "key20": "292j8UaGuPFLudYzZKycjRqivjRWL9aRKMh6YQ7YtbiuagPxqgpaWhk1Ti8oTUdFN2vBokLiPtsjqQg9Fbs1FbFZ",
  "key21": "R1AvEhW6fdJadBcZQFnQihYR4RUCa1LzzrTLndJvfosaikj1U5uzcWiSmyHpNqnfdQZ9toYW1vMieDAXwv1Qwkc",
  "key22": "3Adoj4nThjjHEQjDYv7johQzH7XHAMB9sxopC5i9isT6xcMfVCBPCz1PXYurbBz7fAfEZgn5dKAxaqqLV2zyCZPU",
  "key23": "4hHNgYozV5rXrvRr4D2FxGscZVqvYNEwVxSRKCqF365pwcsW4P29uG4km6inzxkeDqCqBstNAFqPVgY5BTwHYQtz",
  "key24": "hfaMb4CQwz6eZ4eqjymxBmxFfPWajCoRPW8fmhExNmPz9fWmJbCWRCUaCdcJfuiyA5UoUSMSHnp56r3etBxp6Cc",
  "key25": "61pvn1TisQtFrX7TT4ycumfWAMpfynmt4LrqKZBCmcdx37Gu6bHc5zaSpyhqTB7wjvWjYdbvmafQX8AhZK2THwiW",
  "key26": "5AEi79APNYtr82etyxSFBgygWumRvowQKjCCY6AovZ4KWqbwUkySN9eTqpgc1sigKDei6db6YJY1aoY3otiJdLgR",
  "key27": "KfXLBrAjk671TUSirAjrGfJ6SFxmJTfsEZuJEgf1sVutbcH5VEEmCchvu5BdTJxXNZF7YsPdx9mMCdSMcMWGQQ9",
  "key28": "RryqPUh7VNc2qknH7HntCXhwLMsunKJivpnSJz8gsq8xCbnxCEMVpNpNHSFB7AMRHZtdDWndbi3qXgo2VMAVQyY",
  "key29": "5qk3KVrGxm5uG2z8jrAExyjzRLq7r9EdwUz93oLoEov7kscvz2NUgBedho3KoVpkTStMuoW9YNREC78Cpc2ybiwY",
  "key30": "45gjp4eugYCuFVPJLKz7ohMAA2XA69EKU8tC4Sekam6hCeMFE4PAPwejJ7Ptat9z3CM11M6b9xajvuxKi6ouckpU",
  "key31": "z2DvfUXKgCuqHMraySa49y64s6sSKrARwnSepSD9TyRAwW38WiL6AD8ayza3fP2KawfAsaQSCGxBsewVUwLVJqV",
  "key32": "5wBkLLwbzYEVx9SAZpKFTwZ4Ania611cSfMTNCSka59oAPN812snzBZpndZVRaQBC73ctsEh9fCePwtr829ke9go",
  "key33": "2TToSu5oQfDfEVsZZg7iW6Bf69UJZnp2ciUbmMvxKvDAgZpbZRmoG2ExnkAHCQ3jb388uwpmvpesziJAxttSYLmU",
  "key34": "35hBco5bLB4SbW5gMm8Da6eXYNaEMaVshhgAiirgS52FcKUx6wDYwb1avzbasXfzUE5due2WrsKYGAmBqvquLoNo",
  "key35": "5hQu4UJkDAJobgNAJcmK43R1HirbHZpYKiHxQbGeKvhB725kF16PPAifV9U8CUS3628XQCuD4HREhn3YuP16SZR2"
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
