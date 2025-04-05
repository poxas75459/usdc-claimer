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
    "57rgcr3RxWFtyAhVAoV1Sn1bdSTT2c6DmnE5jbVAWZfpENgYxs7tYimgMws2A4QJLtDBiuKn83cn1FWufjwrb5Zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6dxmRmQ9AzJGLiT73VMccrkprxjkZ8ePVre4uecqiiwhZt8sYSEEzkFEd5xgLfHtx1BSYzoJwB7vsr8mZVv8rHX",
  "key1": "3pok4pcJyy2KobVogfNypBdY9Mf3fNvLb9DMRpWGLZLyY81UKhZHyrxcdkjqGa4th9aHd1zL5MmQP4btx9sdbfmH",
  "key2": "4sauuRhS2bbzFJUMjp94SV2Q5JkjLKdijHdEcAfXVzNSV8acCiBnF69LunYWFCc1Ei1xaDiooAvQxTbc77cS4LTe",
  "key3": "5NrW5WZKagGuaNHjoU2A7bXpuf2dbHfr8NJHT3GFDEqWL1ufFaSLQQD9qHD23rLeqgAJWXG7ooz2Z6ScqYqdoBFZ",
  "key4": "3MemvQJ7SZ9DGrqJPmJ6mwQw7HUXUWxR8XKmZF34RV4grkjmb35eGTZKKMhuNMSyPncfgNC6XHQPrvBV4SoTSuwq",
  "key5": "3mMFytz5qMTFPUDSBmQ3uhd8W7gQ431oAmvbYRpoGj8FP6zR8q85g1m6XjcQ8GJTLXpFhiFVGVMwroNYbVZrx2hB",
  "key6": "3gzPgn5hDNVE54XvZ9wSuVM3GL46hsZiaF9oxCS8GHgstihP4X7btSzFk3cWFHVeDUGwz6waZAEn9wuwa8fKoFte",
  "key7": "5sA1o1ojiUpd3gVYiPyp8vhTuJWGD89fsEEJENeQeZnRsTjvKNpHkr7oU1ZDLGiE1QaNhwNV8QpGxzz2A8vc4BxS",
  "key8": "4SuXKwBoCMpqAaTALhXAGhHxMFnzKGmUh3YMoQF88HF1UTPnhTv3j8Yrtp6rvteXKrMKaLMkgWuuQTYjxuDGZivZ",
  "key9": "21CadwsHmDVs3QfuAsDv86TwRQdQwWBfVUCXA6ziEjJwQrcmGWSbfAzEbS7C235hiWDcQWPysJfiHbQMBcVDqjDR",
  "key10": "kXdThKSywykx1gVcGHe3JZCCGhhe5x6xFBmxZALDB13jQ4FEsXgCp4taPFFz6hkTCgeDrXjgo7yoePThx7vJbUB",
  "key11": "2JCkGgkXeasQnpBJYKtVZHgbZsYngju3fCQspFr7fMit43i58EJGRHKyF7QmZFTprb5C3rK2wTmvusunm4WoiwVz",
  "key12": "4PofdzPyUozE827dsmaigYYiztBbEWhCGBZPsZgSFqCLJkFrSUnQ56Qg5Nz9AJrdpsZCWiBkPyKmiFRfvZ1EBAa1",
  "key13": "2TwtPUQT6wiY8c5SRZUMZT6DNcwjMHmXWCdE8izyxdYBufH9L2gqirBbqibjVugqkAs1EnfHcsrbt8Kfk5JXEBDf",
  "key14": "2hvyTMJDsxRChhxkJSdPBdbuUNe7oAfujtW5PzqQGmbJAi4ZsLnjQYc43MTtEPfmTUg1DCXjUmphjxbp236WNdHY",
  "key15": "25JPS6VfKCyf5gmoBtJFGpdJZG72NJw9EQ6XbHMbenQS1q29cPkVNNHthsCBfh95NtB9Cud4ng61fS4ViUvujdNW",
  "key16": "5ZS4TwSLr2pzLKwayzyDMtZH4TByGDdCENAVqpBGDAqPBjzvmbEvsvXeSxCTnJ2C8moqsxu814Mp8SanoFQyjCvR",
  "key17": "2fZzcEhf7Dxb12sCLdyDkE91QbmmvUwSU3Ko7XBzNjJGXYfRmQ3c2nJuTJQwyuy7NKAhozrnDVzFKTwKYT6VcweU",
  "key18": "xSX9TzY29swfMbqH5HCQjXNTE38YWdNH2m6qQ5ErArT1UH3asoUv6Bh2MVnSMbU3FehQZQaokavc2JHdHTnkmLA",
  "key19": "231afXHZAqJcg89Ze7QPrnsiKQt6ExkAZqZuhDfSrcHbFJh1YDv6qsicM4Cx2mdEXdsE85Z2xnTjgjfPv5HqBYZZ",
  "key20": "4nyHNtH9U4Exp9CTdnJ6QJWvZio2kYwbdCgYeossVipdVmy5ACexeVUvvu6qWrcsLGHsvT61TH5mtTbyPVLbVYm6",
  "key21": "654RcD7W5NzwSE3LV69wvUAbr4aBsC3hp7s6894xu5ayqgYKX52RFB4iicvtnANuo4YY5sFxx22tSvcfXHMRzmZv",
  "key22": "3oMLdQG46t81ozhGZTgLjxuUAzieAjJye9r1wi73W8ydETo117Dz6bKhUfaZhzpV7qJVeqi4eo4y2dfwhRdhxT9G",
  "key23": "3dedgHhjFPXQmdagD97JjMMZHiz4noAV7w5VuJ2iPpifJrYBHUGuKjkofAu77ZPec2s1uKDwv2CtQKDpfxNQRW92",
  "key24": "31BphgbreHk2r5ix9LUNApHcptsz8aBLrhVDjcYGmXDn9pPw8isjz4xwfVSfiZJDxnKK7cspXPNs6j4pBCYipQEJ",
  "key25": "AmG3jaMBJq92hVGgAW3J6E5chfeVxLQujzVMZXTSYdZL6KDR2bhnemm3CMHr84FwpjFGiqT5fToyUP2ycZ2zVdm",
  "key26": "4uKvWvkdKoNsfer9orETxf91p2YoAoJDheryjxY47XdPgCTv5wBmMPdNqjNft5tR3mVdDj9g6v1pmxpZepc3Fbux",
  "key27": "3gAtx4xMwRjDwTk76jX2NqpUNmn61JhcYzoS5zQc86AtK32r19pxbrwrBrSeScsE8VnZcMRDzcXTWpKoraVEwCsF",
  "key28": "3B3GtYeuEhFpDr9dgnjYixAspNUtcnwYvXSQ2A7eLNFswxdz9ACpWViDDjPn3amiCmUqvwLaUfZ6EtW6oAWkAKnU",
  "key29": "41oJZvANZFnk3uqSr4GWh1qV3fSr6Cq3QXZiGC21uoZVGXuyRhGmcN6sGh8Ehy4gamDrViRWiv5yaFupJPTB1YaL",
  "key30": "4esEuvZBa3daCNSvRF5D6u2rqBYM97nYQojRVnd5jYXAkXHHEDYXUYZWk6FgQH4zjK6KLHPNVydK6HntetC9ipgE",
  "key31": "3RsRpY12BeRpv5u8JJAFhrHt9LSiRuwkCEEoA2b6xq3Y57sVY9WwvDwzvD5R1az1sayd6gW8Mv2LCi8QqCArzG8a",
  "key32": "5h7sepMVo2oh7Cr4up8buewTYaYe7i3pWXgqTFTMh7uWgsYNPHju4uJUt1DpFpnBTfittDzHNDqu61b4DnreqX3P",
  "key33": "2L5R9CRYBy4TP2HyybX4tHgtSnxycHefMJMn59Vx5FEh9pKCdPVdn6qGAPuz7RiSvgUyJ45ym8babR7sj2LeZVDq",
  "key34": "KwvWy8az6vfiBSt8HJRapsbCm8vnRF7hvUtQpkqy9mNtXaZyoFtPtLBQHJ78gfpUVJQ9uDpoSAgS83aDtj2R2Z5",
  "key35": "5z3BZCRHfAYvXHFMHJLWtsrU2BYmCojjwEUjDJpfsNF9wZcQLXQQoNVopAbd1bkrBdAZbXKBV2d6kU14orxK5FGy",
  "key36": "3yJZD3BFaRm6LkDn4wd6GA5NWGeVrapwEEuant83afp3LcqiqguVAFvjtsQ2QoSJTGpw7osvwpaM2TT8qBXq6AUk",
  "key37": "5im1PmgjHNUFjEcjviXgF92b4GrcVg21f8hFHaLj8xge7isNaA1BLa9dDZ3c1Te26qVZ1z3yk2gKkduUpBeTmYGc",
  "key38": "4sE6JTXhwtCufxB2a4x5wxM3DBBLUKGbn3M77N1YzHCFY8Xbe3AT5UEYT3QWEqNKJ981a55Qeu9PCbASwJwUyWtv",
  "key39": "rhL2gtqAExHjTtk7sFqD46AZsSoQbNaDKgTKxLS8VDDcB5twQ4gnEBirFEArgy8i1zmnB7kqEwnFVUpR3Jfnym5",
  "key40": "W293MoBg5iHZwP1tZuemEpxZ59tvXqp1cYvPfmf5u1BK8mAz7a7LQHjRBtfN2fdAQd7N3j4DbRpp5ZJ8y6ENcLJ",
  "key41": "7vCGT4eVH5ToDGtcrUnaYgU2vtyPtc5EJAqYqfXvoYGToUFTwfSE2qVrUjphyzfVXjVKDfK513MVHFUHZWuwHcJ",
  "key42": "4SBkAr7hsHRkgk3JrSs9bASknoyg9yzsFsx77Dk5PJXgzdgGtgmrtzXVM2VwzCNQS4y78qdwisWWD5hJWH9nRLBV",
  "key43": "4PbgiW4PxgMD6k4gKpsvZCdfkqEAtV9ipBoFeoGyJvep1xZV3PX6LC8BsgvDdd6eyRbM5jnE6trzrfkLotkfDqpn",
  "key44": "2DnTbz8851yQBN3hgDrinZgQvuo4ksQCYHxoA3wnDrKWjFkiVokLKyHssVwyZRPaNFTY727utPW2sdQpYmKjVRbR",
  "key45": "5d7i4p5dSKyP3RK9Dv6KSBRaVkYoSFaYZ28RxvMXf9S6DKdPMdCLBnEDyNGHuXdTq36Axf5mSxH3YmX4PM98sAoh",
  "key46": "1Uk61UwRXxCh5Tac5TneaVKjTKStLLgdFba5rTJ3h3efCCvMcvDVzZU86Wcgk1ugbXt8tvZeTcVwNGmHBHXG6aq",
  "key47": "3hXgb2QbbuGdSvg9UZfvaVg53xBXny62QQG2dhkmbB6izLsDZXaDg4ZAZAyRZm6tPZiAaoEBWSfHshyRSX7s6eBk"
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
