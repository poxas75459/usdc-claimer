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
    "21vGLzgWp8qVQTptHgn7U9FkPkFLmAEXQ6Uq996KYFbQosFsqPQewN1rfw1316JC5ZpvcoogNkcXnAFGR6RRxAbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n77VunvgGnt6uYdBXkgBXKD1nHznCbtp6uUMocfyeRJ6C9JNPw9RFe6WUkb9Eqi5BXVNsWQFKKo3SmjfgMhQYVG",
  "key1": "WFX69Byqmc1hBtSbmBRHJ6UC6iNUrE7oSrGkLBcMmAn6EyqCCgMyJkWfmyDeY9qmZzHycraaQMtsTaPjSesBTCN",
  "key2": "wgA3hG4aUKjQQ5g3J3KMxsimNobZ47BqxuPZTtu9qdFhc728WAHgie5P3qtHybBRMina6qqtHNuzVc3T9fBBKLC",
  "key3": "5hsoR1pjGjvCiRvys46kJePUYX3ihZ8fag6MK7pozgtaVzMoykjwjQcHpbnpcGdAFyGq8635dMpqTYjSFrQwVhoJ",
  "key4": "5JpXyPZiAn8Vx4qTy8FZpwwiitixrkeD4g9yFKs7HeHmqZmMX76tXDzVLJjRqqDjwS7pCZnVarT9AdZPAQhGtVSX",
  "key5": "5uGLqhXesG8hzCd1AhwCevpVkJ2ByETgZBBww8fGxJ5RJRmxecHsLoJKbQqdc4U5dxvoHXccNDkf4cqQMEgsnzgR",
  "key6": "3LVxLUHJwF8fJMztQh8L5WPgPsMMWxBRPFuLQDXVkVbSNSLLUobXAjpbCD9Rr4DmCCdoKfFZVRiniQs8Gy2bn5PT",
  "key7": "4d9bkVBPUocYKmREFsZbs9JwjarihmnNYBNsM2Xg6Akpu2htGzchU2WugmuoctCA5TqZNYxL6Z58vbZPo3rsXiFj",
  "key8": "5WJ77tgHHgMMYJsoU2cEnk4wM11mVK4hpqYXimoAo5ENyp86ZLKxVfcjRHDPo1sa9CEqh8LxLTWRyE2auoyYwjdp",
  "key9": "57nqNatwqTD7SR9WRTnaUVdzvRyP8FFMJkdH8KJVmPf3kgg5roAZPwzf3QSztP2dTyij5cA4WdfjtBFmdQM4VnZE",
  "key10": "PrK7xdHFRmKJhFZJ5vHz9GQJuZspYj914RMJG13Due5E2a8zfHNXiEYPB7dEwfaQsDcTYaboru9wvnND1FZd3ht",
  "key11": "4fDBneiCV1UGKhYBKCprfN28eCfDnCfskWuVaNNtrjghhtubCNFKxWFu14SMNvGALnfJsJkazvuA4vhyPDMgzWau",
  "key12": "59RzcrE7NfVutH1UXvyk2PgYJqQmgYaCi8FscjPJtiZUwHatZwYG45gHzezDCw776YspGEWP4NmAYFABBS2VDAxA",
  "key13": "3BLUfRQ5Uw21zTEp86t9jUmaPxoSBFeikto1VjuyVBsxRsC4we9kaWL8iwdeMsMziUDmtzKfjjmW419YWDCJQqXk",
  "key14": "t8KLvic1QRPGuvQXhTEeuZK1fPK1UpKE1Bgqzh38sbNMPY76EKH85hU2sM6jJ9WTD75FaRM9SVLU4q73wisdDCN",
  "key15": "5kj8Z76JVsm7ujvvzWzpLRzgzF2sJexjjMHkEgFnnZ8iteDAkjDocv96ddmwSos1cibBid3Rs9dhmL1UejEvsnuB",
  "key16": "3iQNmhGpimakLtJjSbrd5fwQCLWVc9XoK842vw5qD9P1Bfkj85vveLEbDpQMVpNz1SYSfi4X7PY7NKLnVpGSdRzB",
  "key17": "5sZvHUAFUsx1VdQ1KpBbmUr5RcqV6m9MMEXWw88vVxcGxenBZfd2TBXkKpw2VTERyoxTdmAPwe8aVkHniAMXqafX",
  "key18": "2Jy1ikWhNLWXM8zoHVqxGn5j1yorr78eSjBon5nq1ZVJo2vwumuKDHFSuYgfgFQuFJPaeA7cAFmvUd9sXmNGBt1W",
  "key19": "2Eunbq1hkz3LfjCXZf7FHaboCj49zBXfkv4wc1vfu9tG3aAxNF1sg3HogAP6wcdrH3PXit26Mz6n8wrKR7D4ZKFS",
  "key20": "5rLcVfLPfCMoVJGLn2Tjfnj5EXJq9HAzogcXSivz8DhUxr99Hz78Ui8BDGKCZrxsL8ce2U4cZ3RzMWbYdkcM5wgw",
  "key21": "5VXrSY8dBuqnkHmSvWbQ2enfFLC2gy7SuDurqW3kUDVVbwpTu7xWfsZhwAbgGW6QaELaNkB9dNWLkFa8ebdq7Qp4",
  "key22": "WSn7FmLccgEFcAtXX62GEnuPxEXwFqQGVuL48pCxgzZeeLF9xbXwWLhm5kEdbWXak5Vf6ERH7z2aMpMuJ6pc4tz",
  "key23": "XXVj8aqHdqSpVY5Yo3KrS6pFpeZxb2g4ZnLrgeFFuui1opi9RE51LqZdvfth3DDf1WTsjHc8j9YLELeqNCBvyPF",
  "key24": "5edf7oneCV3BrA1Ndq7b8EYQ5Gh1jgW4nv6duAqkUcrtRCGVcgDowUhhP4B9NR3DeXVe1FkqzJzq7abXeGF2vVvF",
  "key25": "3gKVPbqx9F7i5XViJng4FEENVe1YFU7L59DfuKSkaVZoRF8XJo1CaVksFb1YLAMEXYLmV4C9K6raTN89DftDWXB9",
  "key26": "5wPgCkh1JpUKMEjkUvy6sqD7GcgjRZNnmhG76Y1G7hzSG4dP1eNSajZa9REYw8oLyu3hgoZv5SwY1dw5jhkBinba",
  "key27": "2sY9mfbJ8D8YcsUxoSvvS9RTcoBiriM5hfkARvo79LcxGtq2EW9kibPCuMaPR6jdvGkqQQ5wpybEBz6prtFtYnuL",
  "key28": "2ouSmBQxBKMyc2bz1poWkrpDcn19VZP6zSL6fK7KT6KLqFZWWFTcpU4nrCuVYPtsnCFCB3SaCq94mgznJe5XcUSE",
  "key29": "5gqCXNcW4NoepYKBTBiPz1sekantKA7Mu7SCHL88vKopBh9mkaWeK9EamKataZoPNrwYzaborcfPcrY83HHJ4YuU",
  "key30": "bgcrRQbiyUYui7W5Mpztz6enfZsL6cm9hkpEhsWiJkGLZ8R1dLXDTJWbytP7y3KFdo3XdC1iR4mP58e1DGgAUje",
  "key31": "353sS6aEHHX2DB6L5FR6a7cy63EL8DNQP9vriwgrS5gvLFrq1FozEfokn4CvNA1BVk6TdWS4frhYPwfo3hE2rqmk",
  "key32": "58LNjMDhP5NJWT3CGAcdNDQ4JJhpBFYpmsEn265WrehAMmBmDzKzZx74z4HgnNzd7XV54HDNfDPsDVm5gktcqA2k",
  "key33": "3y9xNWobkHUM45db1ycYq6b4Zrtw5VUwJ6cXAgV2FmhYPhrn6KVypHYPPzXfQL16jsiWggSdtcR1z6Erbni9GZoZ",
  "key34": "3o5amM7Doptj2jeiwM2CNh9V27GKFRNqqnaHttoc3mTTEvNtAxwA6HEL9MvisCwxk84ijdwMFu6LqDuQWvvbXE7Z",
  "key35": "2ThdUfiXx9uzR9GEBekSu4VnLDuY5RATeCCJxSg7GFfiQt6bKzp5uW1PVHS5dZ8tvb8UPtUnbi5asjUXrExb3ooX",
  "key36": "2kv9cjzEK1vCRNBr54uPUzznoqHjp8GdefzFof5rvH9J2Zvr4cbazaxpGHT1znnDoh7noCY4d9kc1etUVBfUhMHH",
  "key37": "2Vj6ftwu7jvNmGPoADgdz4hF4zTzXATJAWB1gtT8b8kJEmAQasGkqy2CeyrKkR97B3q6Ac5eUNsRAB1QKGKAw9RJ",
  "key38": "2y8N8XQ7smm4524JiyH4LLmEGyr7JvKaR854JwjY7ATd44N97nPiBXc76Zuc4X7ieGitett4LFi9c9KEdyLpHd72",
  "key39": "5wbEUmU2Bazb9xCLMJTBnmyi5fXF6qNE6BnsMb4PpBMoDBnNqY6SYgXttQumCGYoSZ3bn2t9XKGpf5Cw3ecGWGBA",
  "key40": "2TgXFv4szFfXmZL4iRAg5C3ucKuy53GpPNSzq2HfFfmtvNiAkkfznerCrvfS8y3xkdMeW19dgBHh12WhjAcJKnj4",
  "key41": "4EkFEepnPxuE1yg1oB5TPaJytqe9NJ1wrjCerDfnQBVe7s4fRKLwGwjNFkFpypkHYwDucybPrQsNRyFmNxVPjV65"
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
