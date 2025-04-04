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
    "sqXTsGDQ5B7ZmP7VuyUC8mtgM5J6TCbKqBHQS5AfmZt9Tj4o7gWVnGDioK7XbVP1qNwf2xh4cPsFxFHkP5kYzUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E6uggkG3JSFVMSUbSzdBoQwMtLekD41xmM3fCZxjAPKnEbAWKCbT6tvRJjf9ppgfenyXsEmwHmh2tFtKjPpzSZf",
  "key1": "45tZaqzTw6XtJVVA8ASn6jXfLSHSWKF78CEpVnzsyJDfcMH4sr8vU4oH2UHFK7avsn6WRb4sWzEju5r4y3WL93Rd",
  "key2": "5vtCs8h96t5mwqdAc494Kg5mMB8qU9SQANL3iK7d49hiv7Qu3Cvuq15w4pJ3dBRdx8GxXDuoCuSVjHt6bCjaXvKo",
  "key3": "5k8gbTJKdfY6YLb3QAjqbmpAoFAnuF71o6pCsE1C9n4yEb69BaFNqqhUCCew8rFJL8s2vrimi6TVd72krSEeUAmH",
  "key4": "3Ayb27NHQ98WQ4xQbN2ta4hUezEHx84kPTdQRBESvJ8VdFz55gShNoons78amBhZiTgQw7huueW2fgVCVfLPGrGJ",
  "key5": "5VGkL88gfBxHCUaVmnYbNGoKeGovuVHa3xnMqEhBjzy3r5waB4P9WEGe62E4wHY13U3ztFxQNWZffzdFF3EBhrG5",
  "key6": "3aTgweK49gE41sEhuK6LKbDmrriAUJjdbxVHc9MXSsDT3AvqxKfdDNDRse1nZMg3eBjfvxsgeZWHeu991VkwoZRs",
  "key7": "2qUTiyKtGYmYzSTJWxL6SkZ9ESY9Zio5R5NRf7ePYAJJx9fLDLySTfC7rdoznMAVphG4uQCdM8weisNoDWjmqboz",
  "key8": "4tewmtmYBSjvDCJMw8ZEuTmyV4j4KGDUs4HYC3NfQ5QMpPKXGKGUYYxWsBhB7hrq1wXZrUUiP2EQpgRD9LPsf61Q",
  "key9": "61jkktzWaeihRNXWcdyGLdj9JLY73MKQAhj6LGxFF4bK6S2BpPoTkXUSDXY1SDqueosQqocuw7n1Y5Lj5Ji2DSwT",
  "key10": "2s1yF9dy3a7LvmgbpurBuycR3e6HwuLLzbiZSrPRyAG2wv6LTu6GDm6L7LGsciGPtN9u2Tbtpfc9zNsSHiTSF9VF",
  "key11": "5r6LQRCR41oe88idVTmuWuaHS7NyauRKG8WMXL2cK4ZUqPKssjkmNXM8Be6c3qHD7noauRZX4rHj1vi6Uau5qpyt",
  "key12": "KSPCoQJBdiVk9Qj961yczB998dk3fafoutaaKiN95ccPxgqjY8BqQzLtRyD9J5MjanbZLiCEEGHawXkA3HAChgE",
  "key13": "5qGLcwYKSkJowpFjP6YU6tY2QNdgGmvSyJ16JGkZMvaznLyeTuF6zvCLUovBG3fjY4QtQkYjJUvuBF9FuCukinGx",
  "key14": "5nMy9xiDidw7469tCWBozW2gNJjJ7i34Ehjzz2an9KiPu7tMMXvZZc34yJBEgoMSnVQajgPa9NZDN8ZpeZ73pXD8",
  "key15": "122orcABD5djzeSX6V6XfNod4Ceeg6uzovobqj3LJgQ97vBmKFjg2i7UFWSCEGDxw89VStui2brtqXX3FWNndNLQ",
  "key16": "5yhE4c9nECnQ5NsyCNtpD71cwWsY6cE3qmnaW4of6xjMFC4ySD5DqxeN8NiALBQZR3MmBvZqf9YTXd4YcSa3pqDT",
  "key17": "zH34CZ8mwPiCcHkKqiaKTan8gEKbduaGnhccwgkHbc9ppPvyyvuYSydhxmoYq3qVdvnBhDqzuxn7nBTcngQDfKH",
  "key18": "5BKAv8cjXgNDyzBsxgvi895puMp1XhRF9UGgPCHwZ26Lk36BdYQAbiL8rY8YPcaxTxw7daRNCjMpzUx1af3kqCRB",
  "key19": "6mn1cgeWYwtL8gqM6xof9wLM52z11j3DdnYy24PjQ6qsc7ZSUf6hM8svBv2XjeQgxnrWVkH1oZVqSvmsDKGnBFC",
  "key20": "2BWjVer9xuk1pQFcQnQhQ6ygzUkeChQvTnuSBq4xrfTabRQ8Yo2TW4vFhw1TstjNcCtJorXQMEAJbnwFcmYqCW6i",
  "key21": "3JSjeVk4p1Kk515FwARmo41Bk1AzLhgTXmkJUuDjggSVGYEQ5k6bid93pcU2nsT3dVxuFZjwtTbjZBwKEe5fVYrg",
  "key22": "5k5wJtv1Lt6qcU91UqHGEjBp6Tr4EXN87Fd2CuGX1FEWpgn7TUoVBpCv7FuCTrGtTZxe2pzvwwmccNcr8Wj1qJBG",
  "key23": "3prNHUc9ByNjPKYUp1CjaZaDHciRmnuQD8XzinGeCMM2NvpGiHAe58gPUguCWQKPBrR62yvSou47tP19iZzfeqx7",
  "key24": "3zSqPTDwqyaSyfMVQdW1xDdDZMQrqSVfptLZBZwEtfY71p7LYFUn1s5gA4W2HQ2FiNUW4cTm5ecZGaPHYzB1rZPS",
  "key25": "2U5KTgC4vBgUnLWL3u2Ft3V1JMRomx7Hgc7zpnHUWV4kwNrBYDm2wPkZ7iHnjqe3z8zjWGgXJhqfNv8tpTK3ij9R",
  "key26": "54cjfgFoVCrw1RKkgdhSfVukoPyTBwgsUaPERU15zX6udTUJk9Pyrqzf6eRQQFykRc43mL5mteVeF9bjcJKi4hx6",
  "key27": "3xmYQ43GyJnJf45jyqGWCff7oCYXAU5epicrzt5MM1jCKe49Qx2deWVaE52BGAjPu3cGKNkLfjfhjVo4H3rptM8J",
  "key28": "HNURWWn6RG9hVEVvf6PshTSDkP9UgBpKju8g8H7WutJudB6TTe4S7WzqbUCaDDMzzLVNqwAB59Akjbz9XDdT3y2",
  "key29": "EejhSiLkowtoKjZjFAHJA5vX5NrT5Stg5n5Y29Rs2XwagnXeoLbBrwJC9FUAMw1EoSXuUBmmj9PcsHqZaAAJLT1",
  "key30": "3qyN4XvMPtdFioaLcPDe31tsw22sAvzBPmJ9CQpTctfq9nh1YSd6ABAwHyQj9oTodhPfd5A9zHasAKDmUdXjjLF4",
  "key31": "5DYJoQ7ivBKDZgVH2qmD7RDFAHoAin7RLwysEyoceNSHEdoeoQy8Pg99dg4x1ygVeFvvoACD53dgaRcSWnu7vZSw",
  "key32": "4f2gP3PpgLxawmCfSPnEy6rFU4soXFnzZUa8v5YJWxF2xJ5hrBzrtB21uT1swKEX1mJyit57ijP2aoJAA2LPKa4T",
  "key33": "2EJzbKpjh9w7d42AXpLHhXzoMNMZnfr2BqbU11cS29BUe5M6DG5PHn3FUy3sRVtQHtF7U8RnpGbB3zd7LmoMmvKa",
  "key34": "5MxfiSS5tC7vaz75LxXuXh1aViSSWjHYd6MT2841iLduPpBoxX2PPM3UHT74R8FAonxY2Vfwo2PH7dTSQtm17UPv",
  "key35": "3uFwaYDdL1e2rBKXbD7EUeiTWhhFicWUqiGgZkTA6sW4ahaoixxqb4Erodv6msWY3gUgd7aBia8EC3KC7xCxK8xD"
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
