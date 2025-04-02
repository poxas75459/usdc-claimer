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
    "67KQssEApGRpASL9tEysrB5Zg6q7Si4JpJnmG4iKspPYEG2eDfGUkZVCNKpnRPbCb7T7ZM6T3Xmv5pWdWfzCp7oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657UJSWVk8akA8qQDXrpQWguNZ4ruwG932Z1LtwA9k576bFYD6G36NNVU2LQdrpobub6pAGtWLnJhqK1cdHeFcHL",
  "key1": "2JccLQbuYWH6JcQBB3ZXX7KvRFPLYve4NPMt7WL6rr6KFZNqA4bMxx8M7Tbm3KgBEsz1gTBxak1MSfKUVjJPQ8c8",
  "key2": "2MQ3RpdPGSiAeVWX3RaN5bTSLWHYrivRBmGSexMJ2suo7puKEKU9vPsghZYJAizBCAi4KihR44dkw2qcp5oRHyz9",
  "key3": "4RV5Ysw2hUg2H9tHD4WtzAbvFk3moYbXNJqQvNjb4Aq1YgkYsY61n414bCUn7xqPBYKKDUAUbCv68fJv6VnujvGs",
  "key4": "4pmnzEuewifTm7Mkcbx2iCQWHtNvDAQv9PGfVBruJ28bTs8A16TRFMTW8ZVHY2ivYWUxiCCb6rZvT7HYfqaEbtLB",
  "key5": "2kqPypfKdKNPLAcimuPy2pV8MZVWWhESFiY7Pf4BE8ChCxKK75iE7ek5g9y6etHBiqfVPoUgKQTUT9ErSWmAKWMW",
  "key6": "zmPZW2YzK6xevxrurpfgsbJxhwsE6Pj42KyeSaw3STYTfBD7oPqsKreDz4rtvp9N1PdBwsyJbTKP3qCxABzHZg2",
  "key7": "awvFobL6Ss2K6684kJ2MhKLLGVMgGCDtkmp8bvYtJXruzyBrCj5nD59qyaHqtotqA2GodTPs6tsydJ9cHPwG7U3",
  "key8": "5Y6iLhHznBdiJRp7jJ1ukVQ8HzvM8TeshFfk6FBqggpFKvbhVwDQzuiZm5wQy5fQgHtG3q6q2NnU6njzZhheaj14",
  "key9": "2K3zv7FN9Hnw6PLMT9Y8BbU2ojXVisGHa8omTBBgwZQ1QKbEyKgdn8M1J2Q7WPvrVUBYFEJPcjpk9151LwYqZX9x",
  "key10": "eQiVtxqddpN53RWC2ho2Dk8QPWdtCjuiBWaRQkHkq3itN29PTedFTefRJ6AkB5PdgaHNiRDJnpgZ6Z375jHZPJr",
  "key11": "hpX5ySw7yDJKwJqEPvFJLW1yzdxxENf4uED2NjYYQtwK2CEX9oC4yaWn3aG3XJAkAGe9KUoXL5zbQBVe1D7ySQz",
  "key12": "2FT6tYVKCZZZv82NjLxxfcfsc4ib4BqXqR7vx51wnXeCproKWjsoFzUz55XW9Ftjf4pxXLNxS89gH1YwQdb9ZGqm",
  "key13": "3xsrfRN4xtwng19wrqEzFpKuDtGRvLoemw7Rt5SifsbXJFjVCdRdVWRBGFZJVoVT7BuYDRMrRVadCTxnpWGu3BJR",
  "key14": "2sw6wrPeAWshXkogeivCnEXmtUaBy7iRSs1LFZRXrUSFCNwby2b8hzjg3KAx6o11mqKqBxSQthmK7fsrr2XAbU5x",
  "key15": "FoQrpbEy5bJEdermNDD1BgTtpQsWoXh9JXpB6iLbcQcJWYm2KS5B4YpgC6zB3Ef72qQbbA2EtRuDEaivyPdJ2wW",
  "key16": "3DjY1tKvZbniv4M26WbTaiNcSDHfBPaPEjtcr8cAhwPikt9AmTzcPDmcQnt6KG1131uaphP415B42V6XGvYVYDa9",
  "key17": "2786ew77uf9Ni3AihMgaCcnRNDTnFo7kw6W1LrofJZio36zCjx7BwBgj1yNYVnhj9ccGz5VW5eUu8yR6xtmPB7b2",
  "key18": "222YCM4VWfGKaeMHSYJxbNU3KouoCDLfAuR6sDsmWRe1oRygccpvTQWviWduRJbdJxtxg8YBHxGnPBGTbivSRwXp",
  "key19": "7wLzETQY9UngWhVcRup9kBp6oCwcao1dxf31XhFhkHjJf5fnaV9hjnuvH2ovYKCZMYsqEFSsqaEuJy3WEf3wXvy",
  "key20": "255ufBUvQyPfoGFLiBFokgnYsXh6kcfYyfhdKeGrf1uXcupWKgSQtLQqDAKE63if3pYenNRG62FRd76jVCmBmudj",
  "key21": "4SLYFxJxpikhCC86QjpVfgN999bC7bHL5RcVDkTUo9aKmMX8giASKtGudfWDVoFMBdjSEGWhtZEp7ovoNL3vsE6Z",
  "key22": "2UCr8snhFAykx7MvGUN6a32L3yKr98HKse49YqTAqKy7q6cbJe3nStRcLV7WdbdihWJMkZQtGipLep796Tq4dCZ3",
  "key23": "28sipX2PSK1CVQsWyz22ncSLNS1Vh4tzddfofDHTeNetUpVg27rGjyYtnJ2kqktF7JydWZhZasP6gY3BxbYvXDX1",
  "key24": "5mjExZcwcPA9pdQ91MBv96fPu7sjihqzF6kUB3xBpP3KEqRs6wCXDRFbfJwA43dEMYegU22T7y2CDoMdn2t1P6A3",
  "key25": "3FYxsihkGLi4zkReNRa7gQ6ehLTL8wXDCsCLbNT8mfxMwPfHh2MPZLa1TWc8QR17QVQV2uJ9gKHqVWB9P3FhPuqg",
  "key26": "2k6jF5rA6z5AfhXW43Y6ZvyXmcdHGcZk7pucmgSt71cSBMfUVVuYxzmbPFac4FNrtQqiUzd21XAW49dfr2dSGoix",
  "key27": "SYTQYy1Lr1ZDaZ2iPGQhV9hvHt9457yrG3yjeXZeSRrbD6cmt31QooZNrehSNXHSsHLbsJVnwaxavUZmZXwa2iw",
  "key28": "5MuT1gZcKhxBj4LmmPNDHoQE6BAQzG2KTDrZNMhFYi8o3gpQpFu4ukZxVM789Z6H64yK2DPhXHKefFuQ2f7b8q39",
  "key29": "m6L6npuoE8nWvP6WSAN3YCqCWSyKqyqon3bZuT6jr7veGbcVKwWvC6WwXzc1gfMwpFTXRWHMV3BJHhRkC31RU6K",
  "key30": "4WK1CG6XSmzsJbY87UPkPHGVLbfRmze1kLbb52jnxxCqCqLhh9cEQKQPAUPWjqcZHAHXzAqWQw3VvW7FAnYLE6T1",
  "key31": "36Ed5egVYsXq5rZTmEyGkrWr1wBVeQGsRGU1myoYskXt9RRt5F5wzT3p3gHr6WMY8KpyPvzNH6URduM4M1CXaBB2",
  "key32": "4C6yBAwfhLAw7TZiDH9ahViQ4Xg2qwz9vmVbWYDnm5D6CotvdzVZ449r3Qpaq7C3nkpEPwzP33uHLNeYnT6bTePf",
  "key33": "4FiNTNNV3fJ1A9YxEseKeD3H5sDNTyQR9DLdtWtjKNF2DTVE1BUYTYFZV9NDkhK2FFpEgQVSNVs5KM39HEwRLSQ2",
  "key34": "5nnbfTmR63Pc8Ss6ucBBfWVmD3HuKj5N8MFYjDPS7je9gFA2uFPjQu1DpiX8oW7S9F4ApW6LXzFx9mV867ePiip7",
  "key35": "exjjXgkCfxA1TGnNp4KTSZegSSR3WZxx5UUenTEuhVR4vqmprQLgQP1PnqiXvNvG1skuTMtPrTvWU23z8qvjo9w",
  "key36": "3mBfCVRbWRG4rgu6ApPRuiXgXGi8wdXGNevHjTPRTVSMZnmrvkgojvKWeLPd7aQJKPrtJ7z6Tvb59vijbHoLUdVn",
  "key37": "Tb5UwyjaLXuF3Jst64MzxexUyS1cTthbzhbhqGytBUEyDCNdeuUjVpXAiX3bxToyeiBbB5eEQATBr2nwcXKEex3",
  "key38": "3gjQVc4QRzetqJ6FRzq5RQnDtuEP44QW2oCiPzyNziyFkod4wBm7B9m9KRctbsUKYfbcKnm3qpSdJouUkZ7oPhqL",
  "key39": "5Ky4cUsFMMHaJaVXw1DXmZShA7XHZjm3nRp5KFnvYkPpob5VooqNUa8K75Z9KGK3GbowdHZ71fJiLZbtdguSgRR8",
  "key40": "53ysN9rppmUbDouCD6qZtyrq5Euj4y3kDofgoV8dKpw8k9qtfsVirfA77EkYSKpEEymrVH2mFKdb5AusY9jY76GR",
  "key41": "3dDnhrGK7B4vusFPjegrPqx3Rih9pCmMZ6gmkcuoAt5q8G2i3oh5guKSppZyJtAMqSa21TWWg82UV9c7YaQ9MdDv",
  "key42": "5biv8zHBgnTPsNywaLREjA1auv3Rq92ASQ87QmkSEV8zu2iaqCaMQq9KG8mdJZ7BvvqRAp5X6bcVCbzbHCjCoAQp",
  "key43": "5T3RsBFnc9rkg4AkMhXAWbCfHiMwF53QvAfVG8geoywYJXHKvoGm7fZon8VcxHM61y31iFmodeh7BSjiMAQt8YuT",
  "key44": "5AV86XU5tz1DwrjrkqJKf3Pc4A9WKZ6AULEKYpATq7ZkbfzyYfVomDtBbWzHZnFjzb2anFHjKwPcxPiKXHChiuT",
  "key45": "5FYwMKBpxc51rh8hfTLBJjej3LesYA7CZ69hh6kmusKGvzih9nZw3BK5xUAf4kFZY8rJ1qNvmaRyzb93bHqVsCzz"
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
