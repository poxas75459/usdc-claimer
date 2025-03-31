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
    "4SCZMfDPk8bPrSh8YuYxMWPoqRZXjtdhoskrzJMLVqFrAvoGUTErMpaH9L3zTJLGUqzNAqQfVhsZ4g1sJb2oGdWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e5jPtE8FH7nYbyWZgnruqsPcJWGxiEW6f3vGjFi9CaTAJMT3j3VtAL2Zt91q3CagdFxJdTGh1W65nWvFmVY53rF",
  "key1": "4UYkgNUSyorArBMG7jXNioCcTLJGBdSi7Hc6cQebjAQzxSb1hVpxrnWtfQb2u3eLc4nC16Hiw31Ti7ab2unUPwLj",
  "key2": "3yadGKPfHH73XxJZeuX5t5msehVxXzhUHT5Ws5noMxbowasm1Dnrha2SEs8GKvX3UsrytBorwdvcXZB2KaobWnr9",
  "key3": "2DaVPLPhttupjGw5Rjoe4a5F8mLVy44efFmVckzEgu7hjKCYCQ1NDLpariEf1gv1x1JWewdkGg6gDbnducU7gJjg",
  "key4": "3uCxQtuyvMca5hU2bmVriWDsRg8dZru8JnkZnmAacddyvat9qBG655DNfY5p7GZF8uZDTRZB3gANKcPq7oCo46CX",
  "key5": "5Vn4vrfnAVQmLgQj3wyTyouYrDmUsMxenRycvD552nVsaTg8YDrNPHUgsjPoWDTrkoJREFzYzq83SscEf8WPLebQ",
  "key6": "5yXxRAVbw8Xjn8rvPsYm667uzNrnHYDKhx3CmwLMAmdYSMBq8pmpfyo4abA3NFwXztF4FaBARfG6qoBXa9kZH4sf",
  "key7": "38FwWiZww1jPqU6FFb1MCB84Yeopr75rCf4mg14ooM17xKh2NTLB4UhUiTCUqZmD15icqdQswZjay1qRJH9Lh8ee",
  "key8": "NhR68G1pGJWmJgSxR6EcntQBCEy8oLSKPeYNvSxWzM1tNQ2fReQNJWM1Pzhag5BWUhgs7QoQFrEVcn83R1PKHcq",
  "key9": "2iXvrbTsDaWTTxRegBedV3cc6EBDbNSUhQQXzGBaCbtBcSJxJ9229WuShekEW8CKYWmFaQdNaB8tjukYWqMS4Dke",
  "key10": "3X9WaciLYL833WR2NFjWiVDmReoioR1kE6WuDz1MUoSZhooxwQeTyJoiW4gBn3ecwS5Rm3dKQHwaBBib4nyks8RS",
  "key11": "5mZWT3uGVUQym45YxeAei9LVNTvdkBYSndDpqmLW3aZ33kprDmHvnDkPK2HSFCmoB4DLDyQ4EHyZp171MwZKwk6g",
  "key12": "5jb4NFr4ZuBLBJwjRgsR5SnbSMoyAupjpLcxsXTMDkQu7iCmNPDgxhEAQp9vvFuzeQJr3iTJmt5XrwvP1hMiGQuw",
  "key13": "249UCtnVHtoSjeEDwNnpu18qprJQJzX8kGtk6rgBjrYndY6Gvq3zzeTgwD1VffUFmDkSNY66gXp4sCJEzH48Mryc",
  "key14": "3F7GkGXbMFRzhpzDxwbR4Va2zS1qkLWutUT373z8WDwZqqPLYjRGUdire6B3AqU6Y6pzobByh5PEPzb6qGfkgVbE",
  "key15": "5XS7g7fgv7sdjHuAb7AZ6sjiX4XwYEzZcrrRcYW3Exi3RMdSFE8bZzanmqqH5xWiGF2gu8KErk4vfhy7UWrpvaAR",
  "key16": "4cQXAxVoBGUQRkpdpJWWomasfLy9w2SiPna7EhFyUMcSZSgVhXoSjMgPg69LnKa49Z1NJkwtN6xHSQzBC2mTCmEE",
  "key17": "2E7JPbb7eH5Kj1mthWwW7ataUMRWs7GPqMBsMvpFu9kuja3H7RvgHvsLx5vftwofK6XHn9CZ8udLxp9xwjNwq3B4",
  "key18": "w6TgxBsUfuySscWjBbiRrai5iqxLDYn6srJ5sgGLuNLxFbTo3oos1ygHBaQAnzZaGhR4aF454NwoEACaaFnzNDa",
  "key19": "62aGb7Rpm15Kan2PhC3Sc7LWJir5LTPvJ5in8rQLJv6mDrco66S5yoKewvALcckWAMLoBy76QUNj2m9kctbNXh5R",
  "key20": "3jdn6fhCk4dUbRMMff2LJF3o6RmmCiKbrHDwD5cZfaADjERcQYLHQhUVtoxmYvuhnLk77m9neQpcnpFe48xTB7BB",
  "key21": "4VD35zGFK4B5nyMdnMxy6phZPkUYQfqmY45a2sdTHekZmx2A825J6gijP3DQUew6jf8wmjHFhd3ib2mGCgQieNf9",
  "key22": "4tT8nndGBqtDZ4yVLJ8c9qtUpmp3tgNNfuUbYNUZ5dPCAuJAQ3MmhfKM7mbaqSXoq7bUu1J2XgMrkgCGyEEeNe1d",
  "key23": "3oBQGFqUAhkQeJ68D1nPnVrBScETQsmhsNsyySQ9KWFUAcMqgyCdwqnTvSJnoTmowd3EYVU4sAgF2miBWduhKnq2",
  "key24": "2V27BFqy58P92C2eXtPk2xyHAPpiUB45WM9xFytLMhbmh4JYi7EREAw66P814sbbxESC7mEye5vh5LGNkr6VXC9U",
  "key25": "3ZTcX1NE8zuRr8YWkb4hZz7o9tNMbg5PcgV8ibdW8RkSpy8HY9PDeQSjLXCFUzMfnvcjGrsBwcwU6ptQv4azGxBa",
  "key26": "3xbMi8zuBVWcXkn28pD6PxafaSH6sLULvWB8DBdT7cEHK5QbJJcSTTxMLdjcXp4fZUKvkt4BJZvsMe7CgvJXe3Ti",
  "key27": "3nFrZMbnGyrM9ZMrvyEXHvznjwbB3UGnqsFmcTCTuoYpt2E82cz5kHzbD1PKiVYsXYomiTchBPXyfvmcv7enLLYi",
  "key28": "2weZQrc63wNxF2aBLry1y2rnm6iwRVHvMMQYzCUp2Jp5F2ijyXQNTxC42L1dbQWNG2pf6DNJZ6WyGerSRjh4qUef",
  "key29": "5a4k7X7indeXMzgw5N4FmAgvES1G4ydUyek9cMKSF6Fo8tdbboLxGQFqoWYZBokVVZxDaPoDD5TKE1qit18F1MST",
  "key30": "2KQSSVTN2LmjepbyVptxu9Dt6Xm5yQigEfJGfau9cf98yBdtsxp8RfSJLYi2qBqyfhbi8iqR2mq3cHBSkHi6wcQr",
  "key31": "4vkx7c7NLAkt2GiowFSUTG5BtCamSigXbWgFPJz2ugdB8YyWc5muNT4qEjQ5UmiGcgZZh3adZVvsAeWJZLCdEYPz",
  "key32": "3jtf9tZtobxwm8nXhYRUE3aH8f9LNw3A4hxx38P2F1ntjG6fhYkAakBmx4SLvQPXyvAR4acQjV4RMP14ND7Jh4cz",
  "key33": "4V3e5EowYht7vZNnCBctP98St62nTGGjmHDCaLbGTePAJedarEqHF1NTVCGAj76homSX54HipycYX4QHqqYd8eNb"
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
