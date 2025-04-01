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
    "2F4Zy23u1464tBEJS9pQ3cvn7zBjMh31Y1yXyWRsPJmh6TxwJAHyrjKfeGLzxNtFCN24MfWkXB5g7YqKiu9YXfin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xkWxhfHHecx8yg86WrT1r3dPwPaUbNJqzNrkryKQrahdKSLhKjXA47EUjEtHPoS8kK8azqmnJTDTf1cKUreu4bG",
  "key1": "2Sx8eY2fTcAM1seQKUZYjzd7yMLdM4SryAW6rsGrjBb71kmSQ7mNKwnLRY542fiD85vE4GMT5YdjCbwZTijVJJio",
  "key2": "4DfAoWkuwiMKJeh416hnmLY536CsVHZVkoRf6kbQYSbe2GJ3n9Mx7NJ3b3vR2g6872c7ZYYHRhdJutvypgXna3BX",
  "key3": "tF5jQsMFaj6Zmbaxg2sKVD3Hs1EMSvEhQHw67WwT57gVXVwov43iU6pe2X7ZNMsgeSwptbvnHn6Y5oKTSyH6LDL",
  "key4": "5tPVLjiVty2989QKbxHCt9HFta5Qm3y8dwLQKZ1hds7C88LFeRWEYQb4Bnxqj7vXwxYCGJBkhCrJfiEq8bzRsvT8",
  "key5": "3WVhcw8TxrTpHQazfxzWJS6tH96i1phYKUM6WCXQ7cmdD6GQRojWaVkrj8qWm2eDDkjeZRSk78gBhUfWJh2j9Kqf",
  "key6": "Y37mm2mkKBNygAnPooMLwnPTzqwxXZekV5rJMx9tWeJxko9LrhfQ1LMoeEgd4tm4mr3sXKY2jKUHgdcUPgc2vev",
  "key7": "2UCbYTTWnKRn8SPhJUgrEXcJc7kD9p3m2SiTaPCZvHAdEfH8gUtruoUrjGnRYB4jrTmD4HJnH6v53XWeGAQ38EoG",
  "key8": "2Qbgj3b8FDVwzxbSYE2mm57FpJXMpWjo85xEuPtpsHrs8A49UcVGfQiqRouQFbB37NWb9SP3hB1mGQhaJCnm86iy",
  "key9": "5K4ZscVk5qPNUH7L9dsya985dWr5MXKtCs5gqREwijpdG2YKUiuLfKbAzNSZdFvx5hRsg5pBFqsGE8RYthQXUB5h",
  "key10": "2eFzrCsKp67CFjYNb5XKg1brhBt3HAptut4fcJHkLZvbPShKgTphtdkN3oVqDakBjZLnAwUisHhzXYw23ZH8Viyh",
  "key11": "Cfy9Z3qGnR2JmJACgyGfCPKq85kPwcivbFjnewrb5dW8b36rkaygsAYpUvZG9HoGemcQFWeKcQRmDUq5GCcrfc7",
  "key12": "5R4DhnxQcTnmPF3xM317PmR3jS7Fq9KLrBBMAuvSRVPRDsDxzXBfXxQw79fGcYdSbFn9C5vBVbgcXiNsgXRcFoMB",
  "key13": "2c8bakZgqhBojwnqVoUv4VJnRkVZr42SKDprDwutqYJbrG8KCWjB4fwHUWqnHi69A6WQEUvYnYUcd5U2h8xo4JZP",
  "key14": "4iWcmPaLxvXnkF1T79bt2g8PfH67QMDBa85TWUADSRPDS8rxaJmcHXeVUYhrRQXRu5LBnCGpkuoYkduNzBZyVmWR",
  "key15": "3cThr444nHjcpWVJgRzojWQSMKXqBSuAD3jxKy7Pdv7m3bk1KpyJWbzBLrhsccQfbPh5RsZ2JJa23eBpxTv6iui1",
  "key16": "vzB6AfHs11NcX3bHkE5E6X7Awocfsy2kHzunCZNDMAoQuiMwksstfes8aqSqbRz5u3MHrZUK3zp1gVKXZLsJM3J",
  "key17": "2ZB2QySZ8LgYkdpUdQmZiptzfs4XjdfCPG8N5MwadZ5Y9vPAZU4EbmdhAD75R76duoHNggJgdvgwqswkoYqV7K6q",
  "key18": "5oQQ8pqnQZpmMeEgFGK1CG71MtkjvWzajmNhpe1SFG9FytD3NeBd7GzVRthKFSChjHt2f5jFAKa9M1MCJVJqhR7V",
  "key19": "3ujD9h68GD1wUWuq3L7EN4Evt7U7kLpM35TNeQyKrmb4GFEVJWkhNW1W7tmbayJheu9p4f7TKR135dCBzffHQbT4",
  "key20": "4vZgKLvVxEVycEG9Ds3Gzgf7rE1VkiXK3qwbqZaMmW8gWdvVL2icwi9kgRtoi8pPM5FaxjwsKMRGpdWvXjeP3oRF",
  "key21": "3W4R9rjpMeipBVg65LY9ZrG2Lqfk72V9vQdXQhCWCw9aBvxEcZvxNesYocuq81wf1Nd8ZppGtBG1FUMVSnaUWPzu",
  "key22": "5DJ5SDdkZX3PDc9tRF75Bxe5ZDLu87MchzKR6AJHs4tb7tFYb2qeqzahuJ9CKuoYFKKV4cgcAqhF4JkmgXsNduQe",
  "key23": "KJ6i8Gr4kUAqqzwEm56CwJsWMQDzWCvHVLUcRKNR1LHCNUuQHwZpvX8Lhew5TvFHridpf8Hb7ZrzHtVnVp1wCJD",
  "key24": "5knPq7HWR7noWzrRAvFjYiYBwxyJTi1Ut1Xt5mnR3rs2pWtghqP641ouLrnG4LdG5uNt6AwcHN6GJhHJ2ZQaVUQK",
  "key25": "25FrGNWS8HELHd5xhKj4yHJXMGkg7VVvM99KF44Ke7t4VA76XhZp2L8fsqgXHvxe8zsBujMsJKzBs9N7VzMXxDfJ",
  "key26": "5tjRKt5Suhba3KP5kJRmw7MRkZJNUp63uFEbj85J1Q25b9RpH24njTYxHF7fhUEpSP8mb84tgjH3DZaa78Pjmn9K",
  "key27": "5h5TtvjLrRs8fJsxwe3dDEeM4Hrh8joXoX2iiwoX4qRhGJtnRcLVabDjS4tMh2ez9NGrvXbV7V7tAbtDA68Fi24V",
  "key28": "GjZQaRv5D7NCmjh3NF8en6y3HzG1bjoMfHYBUc9pgQyjbQAZFXFK8ou5xVFC5jPDQ1xfkLuEKd28bWxVCRkmuHW",
  "key29": "ooxL2AUMpMXCaVTZr38eM5NqodnMkwNVoMJrS4ec3pGwkLGdLucuyUFDenYgUqnk3jZ5UPKAVC4mRea67fPopiC",
  "key30": "4B9jZC5xP4PkBNMALrikYWmPiGxie3AgPGVMbHEpqz3siU9WZDybPdEHwc4bm99jAf3sAULzRBHayUPJN63GDWJS",
  "key31": "4ycWHG83weHShX9zM1uhcVBkw9rsmEURnXXJ7aLChzNee21uSyhmDtgdGNNxnrNuzf5M9CXhuLzcLhsrzHxXBHDM",
  "key32": "5CC5U1SELMbkkLgqrtoJCcuereNn4tBY45XvuYqhixytAXLhA3DgYYRLQj4pgc2iXeRhEbYQTzrxEnvEvNbAsxob",
  "key33": "57BcyqhRaXqPbXt7Vmg3rZfvEDrtm1XBMGFMfMSTYcpdReiN7hwseCVWXUJuTtR3XEfTRvbepUA69B48fV4Xf25m",
  "key34": "2QrDmWUzr79ac7X8tAdbGYwUx6a6NoPQbQLpPjPuxzR5eAP3Qtk4cq7h1wKEApd7HzM3cQFLqzD7EKGEQAvu9r6a",
  "key35": "38DDy5LFrnX6Cq4uV3XTTANzcbrzYG5wavJQcue5MEFViGgrnP3dp6PrTKaSvyJQmrQ9pHHKrVfGQhYNsXCUiEt3",
  "key36": "3UHSJGBBArjQ78HKJ3MaeeJdEAeokHnnTNaU9VgsQAczFGuimSpEKKoEtmSeDuPfRstAxGH7p3fZYtpTp3dE79wn",
  "key37": "d1Uxot85CRkT9f3GSWxkFvsvP4Gphbxufr3MoXxmN8VtB5k6EguSyKb2JTaMhQsQRpLJUgVsBKAEbzLpWrC2Q2T",
  "key38": "2YJbuuhyaNRGDjFTRH8nZKq4xAJwV6s69RKynvYNsTX2n5V3LFtULEuKSQrFnTvUzVAGW751348oa4hf8Q6dtwib",
  "key39": "2kUpobPjJhAN7eaTP8K4yPKvmbNiqcDpL71EmLywMUnc6xgU6wRjZxGzrYV1FeqyfStWsWdMS8jo2V9cUmMev3zF",
  "key40": "4FLBZjs7HaB4gu1tnEuTyiv9zhj9bKSdoW5ACiCKuC1VLWuUB4eXGApsXCcF3C4RA6GyZSqfTA83ZE39vJLa5xXs"
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
