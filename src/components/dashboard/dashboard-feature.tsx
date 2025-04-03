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
    "3zKAj6hMq6iWqvXnnU2FCxhjLUeX35VvJA2GfbfPeiVBYkd6zHcJxFaNoV3V2PF49uFRHCznAXwSxqRFAvatU7eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XrUCAxbdUNvw3sLW2cWEBoamPZbutp8XjEuAKEkhUb4K6PxDfvWMhrDEqx8d4r5SzzoRP3ybnGYAF8LZ8iUC3xA",
  "key1": "3aNphJBvA4okaDjUdDur4stQQGNjMrUYScxpeMM5AkbU2T1ctcT6LjCWBhVnRXwaG3jYJE7tLKv6fpieVayckx6q",
  "key2": "5b71AFj1ZDPu9emsSnMyCzr58WiXyQ8kcASPq1A8o4RiqBdi2UhgihoZpgCHrQMFTEb3dPcXozDMKXkBeNEtkuTa",
  "key3": "2AhD4jmtaZvNSYayiNXHAoEMXwS2ox7vWDLxTVJVWaZe78ruxpV9cZG226BpvJrRBjLVi1A4Kf4naZsNL2AbSbR",
  "key4": "3QjbETi4axmDgMWsrNWp81z7eerNJ4US1CxRPi6z13G1q5RhDUaXSGtgEKGQqfqEaEgP22sZvSnonm4jbLUFg6gn",
  "key5": "3bQF2FVsyXt5DZdbJBMcM4dhfh4T4sDsT95PS8ANAwu71MhHxamvLbifg6DiDXEFuNhiJmxsKahA3VTLb9raczWV",
  "key6": "433MMgG3JbyxTU1JU7TAnhe34JUNPvapWf9yRQUzc2g8KDT5ri82SWb3nc1eRoVbRzCPKVn1HtifWyRqiwUPvFwv",
  "key7": "Bh2BTTHaax9kqhXJEg1SfZ3b3ttCzTaXNioLP78kXUKcFDcm8cSDnVL8A2Rn5Am4VxG9RcNCybmtxxp5yC7EPgT",
  "key8": "2fNtCKym15pKgSaDnemMppooGz7KfvRSm11CqPLWBQPdWDK4PLGGzL9xUYmu3FGJjZ82bLwYJoaLN4ku35zHEjg",
  "key9": "42kiaqNo3EdtLeA2PWSpQupr4Wo5W693DrxZdz981qV8H74V3mZV48tCKq64xeTCd6HDdHMkrujyXtxv2UEtpW9Y",
  "key10": "5yCcBiVYfj5jZk8xMLVRZxsTZSGXZn1Y9EwiqYHfM6VcoVoM1G6FvoFxMu5ePvpTENKmXEhZjshVgomwDzM2LbS2",
  "key11": "3aEJn217RoR95pERdf3mUULe1eoKvsGdhbstKM2Nn7SuWdGDKe77xmsRS87RBECWMpkc23hsuPx2AcBN6h2PfExe",
  "key12": "5LV1TMc1qmnuSTfDSrKD29GJcLkQ8e86ytXRhVeuoV64T9ejq7oYLvr8dkmBcHgCTcyDqCqR8tP7KsjK7r3gk7BE",
  "key13": "pnpHQgMot3dLQAtZXedEwVCqbYUZCi9XCrpcBAdCcfdGzG2g7RV8p8jwXy55SSGCbKifA5CbLsDPwugGsLhqcr3",
  "key14": "r4KSmLRs9G2KfiNKwicpb5iwXK6QcXBDeFvYFX2PUXAXKpoFwjRaAbVJeHLL8kuxf7YZX9xqXLcyTg4kyP281LE",
  "key15": "2JmPrLzuLa5hEY5VPbvcwg8zhjCs4VGZVEcY46R6VEDLgYCk6HswmaMDHxPT1cbQtLaxzW4jZtYeMv69ho7PwoD4",
  "key16": "5A86RrGLG4dPKbfSTX9H4SWHpK6qNWRZNdNKGhrCZmBFz6sgpnsypgB47cz9fCxPPE7LP2VTBaCZYbwMrh9s82N2",
  "key17": "5PQL3DGTdRoqH2RDfQ21MfrkyPZMi2RiFBaSkeYzsVtJF1qxJrQ9PtCzAufUwpypMyL7khH2znBtue2YNpMxeTok",
  "key18": "4nJRLQou4mchWVAUptwV8TnNN52sLGJG7LpgXuNdffsHZqvwpvw9MCLiHtCnHutpkEJsPy19965a24yT9QB9CEFR",
  "key19": "3wowbPjUVtjeDKJuKf7RiPaZV6aNJ6H1f1Lv6cm18PWza4zaSUoDwNqCjyqgLjstpEX1vNtXjvMZvDRy5AVHRvmm",
  "key20": "3r6sodbME9X8Fg4X7ksWryaDgo2jXQK9i9SvEaZUW7jiPgafewjmiaEDxbMgzfihMn8X2o28DVjk2uTH1DEnpd55",
  "key21": "2TSVdPRkbCJGj5kfqATAwmdRZQ8ML9TjY8oPsG5DCJLeHQuiHArMYt8kQXkDoMSCLUXSHh51gxg5i1sJFQUqfZXc",
  "key22": "28BSMTJeQWkDWTX9fcy2pnrnDZdjX14Y2RYpkLGVGPWXyto28NeQ6cCHq6pj1CKRFyHSnaNpqFiAHvjmj4XtAJbs",
  "key23": "xsHGzXnLdvi8St1dCQGH6Kcq27Pcn13RY1Xv5LfoF9NJ3vXur1RHgZaUXoruo4ej3uogKxyssmaQC3vGqxNk3o9",
  "key24": "544QCkhz2o9pFBGkPnmiz8m7kYhjJtjMqvXPW6HLZKUTc1LEKRWaUqjoYmfXocH5oBW4n6tWU3TdpyaPm2e9yTuW",
  "key25": "2HRvCVNX1Mqbi6fGhaWtXd3woHAFe5AX1ux4BK8B5ETGtwJYUKSKTBni4o9vAsqhj9tYL6sJz8P6SQvgxJb38Dbw",
  "key26": "4zoF3gKfiKnP1aPeB4RrXADuon6hGnY3guGgvpkK6hTzgGEe1qHjZJ7etMtHdX3e2i548ENTcg6yrY8NsM1zJ7jT",
  "key27": "5Bi3JgEP2gh6hUJjgHgnkwLAPAhKW21vALqY1yuAJqC6UMi2Ea4hNrVU5bvFwVZ2xKwmHVnKYLzfJBGe2mDtseq3",
  "key28": "4iCsTRoMHgGzCfzLkpnFa4k2idmq9R1KXVFxi6srSyw46nnbp29NL1FC8wahNGkxjYNMnZdFHzRD8U9fJhFu3z3",
  "key29": "5TB6gVwiP55wPpSjq56uuhU8vvaSS3nuBsL8jnr1pWfRx5D1ie1QpoqmXudNAAES9m6pGoFq6BRKjJNFotDfvQk1",
  "key30": "2WCsTZcT2aFgmYjYbhTP6VuZX3DfA5tFGKmiREnGesNRpYbFPaTPyH3ZRzKXMacuRcTS8RBT4h8LZPB774RZxkqg",
  "key31": "us7xmMkds4SjWWcS4qfopv36ES17Zhg61enBZy6fVLRJ2q1vqGdEsADJAiKeEg2TRi2wdJ6iFbKFYHya4ndEsxm",
  "key32": "65xncextGXeYmGdhF66K8bvA9UDkn9JZZnLfJrAfawcNSJ6zF97RAkqeWsmJi1ncknPoppQyfvTP5qR13FD8WNZn",
  "key33": "2ZXmAogJ9AsNVAoYG2sH937d3W9NB869fDdHuqXTiQ6mH8o7CTKgR6QmuuEZp4R5wdBcnF78gFawtkyfRbrFVVtw",
  "key34": "5oRHJhuQcjjkwhzpDhauEYcx3F5osuaA1dnqYUNjLMWgahFE96Z1AejQ3N2KFqGq5xZqne6h4YLaL1ewFkqd8umD",
  "key35": "3B3ZZgdZnJJpfH6yVmeGJmWPtGQMv7uxLBCXAJLEFEQZdYjZjfK9SXFg9ATZwvG5eXziXL86CvR6udD8fmt3uJBQ",
  "key36": "4CPa3NwY6egB8XQxw66X42GFpdGXAbuYKTzhjPRLjgyx3SXA5rKXcpuuFckSoqBqUEVJqnn6w6PCEpFAsxg5sTH",
  "key37": "3TYzJQ459dYGhPFGR5EugAThKJYCLdhHGhKs9ZHJwspZMbbVL2sS3NXXHfejyWZqvvrXbxiuWnYpkT3t4HLeu4Hp",
  "key38": "2DR4tjh4o2mszXo7QJLck8qnhsH1KzL2pNZcKksuMNAyfHgueTXegYZZp9u3hwQwmZV2a2GDzNNRPDsZpzgqX6y",
  "key39": "3Vhxpff6Nqdc8KUuaTFXTQTxJZjiLTLMfAybLekZnTVN7Cc2YX2skAaD9kM5DyUb6RSiYM7P7nnMN7ozDRv1YgaL",
  "key40": "22a9zfvgToKMAsk7YsDb8SupJLZpFD6DZz3PUBxe1LC3gt4eWgThTekUBQNKGqA1vmuMVaxbAkC9xdHM6h41YaTs",
  "key41": "3hsbgWFbF2F7MMQVt4yp9Z5bZGMJeMjRyVYo3N71YAKwSz6JY8MkN97G6CBwH4DpQQ5ushwJLhDsNVueKXfAPNsq",
  "key42": "uJLEoqosc96ngzjkxPMeYTqiKqhq19MW5wj6ioY9CM5EueApdX8xhRVxPYscMnRu9eysfwEziHdv2k5ED5idhDy",
  "key43": "g26njCJZbNxqjhDzy2T9ey5u7EhLb3VyQGQ2kt4NZ3SvztUFXsEKyJMXVrPXUYvEK9RyGZmPZjCJwJ9Sb5U7q9y",
  "key44": "4WcoTPXzdwuUeYh5yDpFDtpE9yPRabrbMdyVHf6B8EYXDykyNE1CZcwnEURL3UP7Q5iGCqGMUyAiSgTomNFNvCLS",
  "key45": "5BTCVevtqL8qwbZGP1mYLZrScTahgds7iuLgDoNHSNZJh7hxNEy2j6uqsXn3TNj8DC2wFhiX2W3qkuQcJHwSzXTS",
  "key46": "1FWqVUhpwQ4aEJoC4q7Y34GAsc7ESExGwHqTDdp22BGD35j1DkpsSAC3Y6k3q9NZtgf1mrmn7DKCzXiUutaLwK2",
  "key47": "5KCoCn24LGVNWacqsWaqCs4XUjTEvPLUSBGCPGjarZ1ZFTe3XXmMD5aimuBDfjSQ8zj8WPjNZfSyQoWfpEWAG5R",
  "key48": "4T7gjTogeJg4fPrv1QoSgDMGF6PpdgAWuarxirA3ixBmLq8UfDYC86ePuhqJCFaFqBL9rG2KSdikgwdrmvYLXFsw"
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
