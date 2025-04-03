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
    "5M8i1GsuJVPqMc8cu9FKqf789dqNDgRNgivLARfD73fbBic73iyXvChfCYYyYnD1xpCbzib26QjauhfwmRP9u3Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQGvdRB5JdvVHvQJRHjj5Fa7Gwn19WsA4kzwGQ8WNpKRZQdMwsdQ9L8yvjurf4k9LYwCAeGA71cEYwTWPx4VRD3",
  "key1": "vbgXSZbVbhhX5Uimdy3CHVcHhhMw61Kxc4HBiW6vM37gFBr5JPHbEQEZwbc4mg1pfmZdCJUXTTcqSsyTxp4zbGU",
  "key2": "pGNJnbkKw8VJ7h3bn6RkzFwRjkZAsJpmoPDwbdqQCfYM5cCXb2b1ntRCgZsedKQebCbpLCASmaLCmTYqvPkLZ5w",
  "key3": "5EFwnwxD6ikhUsTWbgon4WxTJ3SdEw1kxVvBbePxF4uA5Ch8sh5yyKAZG6t5TPW2ktCGKCSQ3B4u4NvNxaLtbuUv",
  "key4": "3SfsKUS7mK5ZB5ertGiapHMs1E1uvPjZbfyNYgu5LFjVCro8NoADoTK2F1hUjvJuZhsta4CBzzQMdetfJc5xeCDs",
  "key5": "3HUjspjxfwWQMhWRmihV3sHJdw1BfK8kYLeXD1Zagd5AD3J6irJpumMrJFjj9CHhi4Myqj8qfcp7Juuerjuc7Qjf",
  "key6": "5bacQ1odjnsyVcRNXBmFhpaYS2zEMpmDGGrvwBTsrXSRk3mmfyy7kpnxKGDHsCmuCtjsAW2KXi4RbACdZdyYUJ6B",
  "key7": "5uc3Eiy9LKKfUhHVwrAxbAb4tG6Ev5Jm3b71TYLmsvnHc221wVXRxoUEBzWM71tHH5PrUQbPL7HtWT2Afiu2GE2x",
  "key8": "2G4UB6yTvQzxB4CKz8kPfjUfWPVSTEZMmucUWnVngTh5EzpCfHk1X86RXAXKuphJJpzGLy7ayCg64F3z6R4X91AX",
  "key9": "2bjLgDrtyVWYC7Jn1SXJDQMHG3WeAMYXb1n5qU8wnAPhnTzShZjUcD3iAZbygZg9nTGdrMZU8QUh3FfjhcsYr9eQ",
  "key10": "5jqQ98rLrHvDnv6rrw2ncNUwLnLuwHeDNMenJHVTxQaa4AF4PLKEZxd3ios9sMC74zRJ37mm2LtihCg6dwN7ub5q",
  "key11": "3zzirhXmSYKDLamyzA1zk3PpxuxsswJqFNo1FTojf1KViNKppBzRUfCDX2d1pVK9QpJgPMCag2aECUEJAPx9x5zp",
  "key12": "5fxAZurDWZYbPgWzPcyZmZNtNhbgaBTdEGPsaRXfDxqrNktoM4yEPnXVjZDyypR2wJTbXn5cFbFiwJqeeStmxwLc",
  "key13": "5STWtx1aZKq9s9SKaQSercR7bPDkbTW24H3PojZFa2d3M3hmRsgGXn9autoD1ZUPrq33xLJtkP2fxaDuj1LuYQUz",
  "key14": "2kGotZtuhgjKA6afjNmiHj44VzmW92ba9ZtMirURm9UoN1sFWKLXwPMiTPuqwJ6oa2L1np7Jd92FjEvHcombHKG1",
  "key15": "4RzXLC29XnFdPRk3M1QFzLe9KKJTg9jWLEgbM4oaJ64apGut5EYCbL4GBkQE1ZaXWpkeXE9iW5RX1Hq75BWGUs1k",
  "key16": "5ABGsYxvEkhfGLCs5qvEhE2SCUiXmW35fpfcXAWfPDmJ88W3BYXtxhxWSj8QMh7upsr7WgcjyDZnU4rjFUYBxvxZ",
  "key17": "2RTHWFV9BZmrG26gFhBThYDonsFXQUCyPFNzXoQwapBXtrPrARJf37fNm1pgUwZGNqjXmDGRHd2efo9HH9c39mRH",
  "key18": "trrnognraVwUCYdy6iT5YAPTwdWPxwPf9nh59Zi4F4WJVYGHtEm1Tkxjdsd3XVQqULPqNuM2kqvrkc5eZut2DwM",
  "key19": "3tngWNqBhWsRxuxBfaDPsttmCGjMuiL3v1AtLdL4jSD4468fvodRpcbpbxvoYUCeSzdWdXVMTQRdV9vfqqpBPQt7",
  "key20": "39kEUnCGUTb7SrtpoyyVrquzs7BqGrQBQ9tLRmXt5bhFE2m3yq314PFkVYsqC1GfX6ijtvU7NtTkSoDTbBVWUVBs",
  "key21": "4evfVEUjf7yc6fUXmVQeoms79uCuL4jjhNCX18qTE2U5d7LrBNK3NHs1zR7V5VpwfxVQqNYkQ1qCTdVMaHEszoo1",
  "key22": "3tu9D8PSVBKN6bppk4c5EnRwPpfNgMTt3G77yY1DiNXysedCNvHBKYhcxPbbjgiw2jyCDoQEUnXgMZf78JeGjh3Z",
  "key23": "5bJQENRSEiXHcNGLEG2rUdx3kZ38As2q4w4jsrwV2k7e33o83i1XvHoxA7Z71wsaDGXFM7FjUywEFKKYp4hta3ne",
  "key24": "3TzQDpnwUAhpjgDma8Rj9jdCvjEQ21bSXKZ9bDXWs1PNz8XxWRULbJY97MpdNuPJDLb9i2CJbg8DiVM8uvZ6C4am",
  "key25": "36vxqPSCQkNW8dzLtYmEaF9U4TKjmqAheNGQXDtdaNNJdyXBcyZkx3x7QyTjS8aWJjofACnDdBhv2h5peR28aeUZ",
  "key26": "4PFsosVjoUc1ZeRRFjQwsyRvrjXngVgoeNv8kxzuEg7vrMntfojK5buaEVe7qtiK4mGRN3XcEHHBnFRTFMyHkQ6D",
  "key27": "36f2MCvUzPY9H3m2hsbiVqJraK6BKxGbN5sFYktoeWr5gijYemuUX3CtJvfjXeBnRpQmWUc9PGd7MwgJkkH3UL6B",
  "key28": "2TgeiTjxCKExzEH7EJUh237cr7hZYqqFuCAmFuhd81sYdT8dfLhHpgKNn5Z9tufNmNYNsL1jr4oqfusQvFAwQvUF",
  "key29": "57gvqAeyNWocsPpd7VZWvghJhoQxKsQKzh1pN43dvXv4HEoP8F1sDxJkpz22rvhsQZQRTVeiio79LWf2LZYn8XsC",
  "key30": "5HsKfhYKzwDnWUkFtdfVdrqeNnSYWVUqrJSVjNB8ySRev9mTHPjk3A1gQjqN7fX3fXEQsJxF32QmcpkxAJCFaU36",
  "key31": "2bF1W6We58gMxfDWwdb5S9M1mzKpKJLvWYNhsqZVJYpD3KiBtu6Diq3tLWnmN4QEi6o1MkkTW9CPeCkQAn7LYGSc",
  "key32": "3bPtmaqrjxFCvJPi5VZozGUyBj1SXiAY4SbYqmmMe4qAFxZCgr9DjmWEL2Na2fmqHrv99VZ3rzm7vAeQarT3RPr3",
  "key33": "88ppEZYdAmfS47q4ywYqEPifrGF5z3Ry1mYvPNJ2y73kc8YWjqwApTQ9S2pqFpjTQVoofSgAF41TFWzebZpa6sY",
  "key34": "4GdmsTEKCQKMB6zTVBUYc3ZaJqpGHTMSJpb5JctBsrrAY6rBBE82yrr84qbZGiPkmBEuSbv4LWsVSxxY3WuLkyuC",
  "key35": "5XYxV5f7WRYotHKvax7zwE3j1SEhw951KvF71En8LgzdTXDPAAjT19APpKe4sSDuzLstLZkHou1pGnXsPZVjPNDP",
  "key36": "4risRdwwg27PYLtqwmAYt6ToJXUe6VL6RFfGnnQaBw8hqwt28FEfvUkqF2mXkMpK1C3jwbZn9Gp7RxKn8uxB7gMi",
  "key37": "25BGuSMeuGmadcdzGM36YJprRkMh5J3TFAsDnegJTUVA1dQYtVjPQNwA6YikfJckdyozQSS8puTLiN8EQHzhuNGF",
  "key38": "4juEr6Co1rTzwY4rN5kRuRfn9TFoYyhmno6gDF6dUWkPPM3L9HcK77EzmHdDaqAdC9VhpSuCzU1E9PvgMf7ZaeGa",
  "key39": "N3e1EVDVQ1WY6zgtNKC1KyWPVsP9wz53rP88YAT9EbeyymRuc2VVXYxmkLTze4LUNSAR4DSDpG7VtN2WHQmym4z",
  "key40": "TXNUeXkdS8FuDgpjEaDdyU7zAQwuPn8HEAqG7AdvphuqGLw5n8biqkjJ2LH24N2CteSwngR31RUUTKGyadXmAUt",
  "key41": "53QFx7A1V8noXHuzpugACAh5gKVcV7LZWvRf5t1169BcMeE7pLrEiaehjWhXZXcRbVVB9JzeqQnSc8ta7LFhsFFF",
  "key42": "36xitVDpQXBM6dW7ocvriyTVpuzKbB8PotuzcXjbAgzHa7HTvBdCQSyNdBR2aFLfJLbhXdmkBDvYQffpWXr754uK",
  "key43": "5aBGBK2MyMqoW18D4tUT2GkU28PUueApHB86J8Ki1xG5JeKsbRwjdU46KmFa8vwVC7oaHwMFKa39AWTQ59BmhQWy",
  "key44": "27HAY4y4J1FhonLxDjNespAMjpUkmAk1ckVS5f32t7vP2WNS9Fdkr8ttsaDM1gBmJmdYvAr3zQPhKVgJ94vb7DL7",
  "key45": "4MRdUNgUSo1UyoJCFpMhtpdoc4AJbMHfQfH2JgAjbTLCqx9aqvfCdK8cMKDF8U9JYr6aEExPUeGLEPiRbgU4poWK",
  "key46": "2RG3xxSHipEMD42sp985aKeFZrDwSBqT4SehATUXP8N56d1Hk4Kkh2KLbEWbw4fLvC1moQbvr5pTVfGuazZUBMk",
  "key47": "5RpiSc5wg74EevrY6NpsP7eP3591XTc839cSQSCvzU66pWV18NaQFu1DPB4ifvGdTomYvGmrx2S8W8CRqzYcZEbe",
  "key48": "8nZ6kMW9dhokC96PXHkmwv2TnvLWzQWuRh6YkLkMwNAtk2Ax7Y9o5vXXLawUnWrC9XhzhnaaxZhSq5PZUT75xWw"
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
