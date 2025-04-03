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
    "2ciaz731m24mWEtQLnxqv565jvdRwzcDeWULMRL6BGa3HxZ4GG6LDGUPRdWMtg6xi9XaHrn9QedN5uLasgwpd1no"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46qkSkASSouV9mqNveKVqWNPupk394mbx2q4WPEYFf5WX25UnzvH8YBWukRRvSQgfwKBSPYfpYvDqdyuwkY9J1kc",
  "key1": "svtFR3Eyc93WNhPgmeR84CkBUq67CH3H1tpU6wDeX22DtNsBVL93bNpS8QjVSsB1waPKyMGCAeL2bvWRjfBD5Ap",
  "key2": "53ngB4YMxJfor1EpkHH3MADVf8ZNjWgQthxqNWPhS1RJLT8o4Hrhk2AeLf3Z9VSqL8KkBBYgVAKU3j4oWthfW3Ym",
  "key3": "Lc8LRZPCE8WYkHFHCrjCpTvBDCdueBYWruhAfDMCcXtQNiVDvhfHo5tFK5zqm7DrwJxX29ZszXQVyEdtAJHwoCF",
  "key4": "2GDtiBte8p8zHEr99znWpu98U8DCG7MQHdU6BnwAP494TjfKTgzPWRgd4cxz8cZYMPP5g6y8nbai6miSnkBhB2TH",
  "key5": "5VRFna9ykJHmNUfytoUqjtqJbwZ98CFZFmDCJmhA4q4WqHAmpqZw5M4gojuAbfKgzuSCiyhBYRZWWhZRBcExTJWD",
  "key6": "4d3kwNxfWs9xuQn1ZAvao2fHMfDbtgVZqgWbeNpMB59asvSgnJyNeHsJyCkVZNhy2Hbc5LmQ9NLUUjWiULi795Dd",
  "key7": "5mtD2cHySzXeZVPdJLKtGitn6ELytAz8fpLvTZzS2BBQpjrAjAETz6AhF7kXPm2P6uVwACBpBAP8mqnGCvoGFGue",
  "key8": "2TKTUxBdWCmMcB98MXqPp4mKBV6KcEWnZRELQf5fqr7Fa6ixbbRy3NtiPjAYSPwmd2dzqKSzUKXhCnWyJYB1sAbD",
  "key9": "4QfmGAtWZUEAYD1FJsrfiwUrsZSFMSsGLud6gM2qrZFoxiPDAec28GhnMqeYDthidr5JkScTq87y69CjnQC8LFZv",
  "key10": "4WzzChn5mKrpgLpjHXZHLUxvewLL3d6JK7ctPUMrpkGfhozCkvkQCURCrLVcMf8e4vPnT43ZNXDEBoQW5Bf8REmT",
  "key11": "5ruoVztXXc1eyKmvPcRL5UokdQgStkkHvRjnCx2e2bSrq8gRwZ5NA7SuVYjyq3wWU7wHwurV69Q1w3CDNAh7uAMq",
  "key12": "3aoFnEs1McVkGcJHMbM1AvmAxTmwD48FD516hqUCgwMUPc2uvW3gpXoLtPuHkLDkbvM5thoKLsQ9Qakgf5YcGa7P",
  "key13": "4SCddLCeMYDJvCkCK5Rw4ZMLuq4QEhQtuTActMzRDS1cnS8Xbt9BVoj33Br1dJ3qtHizG1PRiNsJnCwKFTquLx1g",
  "key14": "WTg6jqUyRXvUGjKRNowkKvGSniEXWHWxajtmsefRw6MfgCzE2NFHBvrJfud4csvo7Rbp3fZojS3L7tmT3a8b51a",
  "key15": "2spcKJGhmhnQPFk2Rjbw2mY7r3Qx5ynABtRAFh4bhToGCqPA6sqALuH72G8Ciub288HUcgcsahfZoiaNwxmToQe8",
  "key16": "53yUETsvWzvrP1QUutCC7qAqSAEbchHZhjUuBn3MsbQwMuxmgM9sVGk2TG7ppKgvpDarfimL6KkTYNMr3ehewpWz",
  "key17": "4aZdjQ1HrdzWKgPZQNmVgjRnakA3pur215HeRqbrnD6fLD1i9MhXJip1ofRSp9nNsq9VvsAmagQCyN823w1rsQ6S",
  "key18": "3wpFG2zocibPtQdhNRR9MZ33LGQmHie3QwctGj2bPJ74eeGwiZSK2G8UMyR5fZKFPN1SqnTVwzCQCig8zmnVkwAi",
  "key19": "46f8nbqwj7NvdHvmBjLQtdS1zccRafFBDfnuAzPVhEa28Pu544jZmi1gBUzHVsxbyFfGo3Fjj9S6ius3VyVXZzFp",
  "key20": "2Qw1gM2j4N99f6cyyWnsr52Rs8dPqgqtg3xyDn9JLctWa2c9TcVovpL5BLNi3BEvxdczq1JDnAch2ApX3EMcY8WE",
  "key21": "2wUS76yfJnZu16F2KG4VujSrCc3FQYhmXtXwa5LzzzPhWxaZCZLKLDsnYJtjN53R69qcFNSG7TEQ7jHciHtZ5waG",
  "key22": "2HkfxgbJuRPHGU1B7XiaAzbtnmyXt5RBJzqnj46NUp812VXUPokjkpqBeqLk7k3jV3jxUf2qAhERpALxQ5iAXdRa",
  "key23": "2gvK3PQaDRruY1MmPwuGu1a46ZdjZ48rjcarKWxfchmdyn8E5jYdD3o1rroUR8rXySLsgJ7EMJtCp4scthnX6mSi",
  "key24": "RH6qJQf9jsoXK35RvvnvsFyna2mjwogfq1e3xJc1TdC4L96uRMqeHmTc37QZMdg1Rjhk8T3zEboaRtPxoFqw687",
  "key25": "4mc1wrYgcLG8kYj6PXMMigQS6aRPdaHaNFoCHkw1fQNXBSJL4hb1Zx6qywWS95G1AkSddbi2nxGEttbCo9z55GQT",
  "key26": "2A77KALb3RinWpNdNRCypPb3EgNcToQkXmA2gVojz6nvpMa95Xyqp5PeP98Xb5e6Y69VD9CB4HCAGjkETpUNN6wd",
  "key27": "25Dtw3aZm3CZTxxXSPQEwVFNJcR5fvXMPng7BSdXQ7tfB17TuwD2hndAhe2a1KahWpDcaDmF7FLf4Maan7LuC9FS",
  "key28": "2yG4TPxsc9pGhqiD1b8w78Zd8c6ijXZPBTzbzp4BeNUTax6GXEaeazxTycHcpk6DpJEbu5HRAaeSQYJ3mZ5gZCAr",
  "key29": "2AVMaZ81ecUdsoDNgQ2V17KW3BQK3M61xDpKMbpcndDrbVeUzwjVJ4irTnhvriSr5e6M15KBGu1DnDo1wJVGFSn3",
  "key30": "BCXBGq76eySytrARaeTjfLayttH2GetB5UvGbv6DJkRWMn5AvmL6tfnYJ5H8odnkERArYFW1M4XoJxg3XsJeimZ",
  "key31": "3D9Di8UEURWj8GHWUEvHeMypgRsywW16esGYhmPuYwKz6wTBMNP2wtEEumJ8rxVi1VFMTm3yE7up41oy1GsLdVsA",
  "key32": "2P5C8cbEcjTg1H9yZaDdL3Z9f8fyLiX1cojvjeZPwFkpWYf7q7k4oNmKiR31mzXVC6QDg5w12p5pxsSp4jfNVYsA",
  "key33": "5SHh6kxQv8Z3igAJktQ5C2KvDP9AcTvKGLcj4RCC7YnrjzGPTQEnByYJnjvsGwP3Ha51HZdUfe9AB41w5s3h1tGg",
  "key34": "413Xy8bwwHwdBZAUJwWPr1zHzPrUqwHnU7EjP4a9JHDe2k7wL65HoqYchRNBZop5JDEpwx1yspYHK3F1FrqB2Mqd",
  "key35": "5F17SXofrtx5318z38xq66CbuRND4SHhYAseJURvYSKCiP8CkWGkNJ4Y2BepEHHJFSHwHosGK7qfVaX6UgYuraj4",
  "key36": "4kfPpHvdi7SabMbUpivMsdkyxmexTZisLcsgCBnecmAGdmdyr7N14hBEdGBBuUbXUSjH6jrQw789fmGipaxdjk19",
  "key37": "2V3qnKNSe92GBv4DNrJpDnP8eSuXKVEvMftuKdmWhRgr858LLte6LRZv7rMibYgf6E9pyVHkk7gFMbfZJFGR58R7",
  "key38": "4HXcUSYxD7Nw3bRECDa3MDuK261ybPW1iwVswffRCbzanywnx2YN5n6miZXHJE8go5wsB4BrajV8BZamXZQgHg9P",
  "key39": "2er8ygE6nFtUWdagRTnpUQed2YyX28yr3ScXmukud4s2iomnzQJBcyRoD5PgzdL2DcLy26TXJdukZriu8Pk9PEE3",
  "key40": "5JjWNabyhZvwgS21c735KuNVSKGmfWfF5m3Ppfweb9bmVt6yqiNZnY12aqBweii3XZZfjWD48d5owJskNa38Ai2W",
  "key41": "4QRmtv6SbCozcGVSCTyyG6L6EEH8kqu1uuy67aAjkeB7caS5u11UXzxkS8t9G1xtLRUbds1AQmM1EmF3bCdXX475",
  "key42": "5YgkVRbDQT2wHTVi63pJgC2GN6J4SEiWahXK3CTQuogdd5Hdg98bbB6qXgNnKE5uVe1TKBE4qRbqtXounnWZECCP",
  "key43": "2Tc6gXszYoKzweBUr3o5df358q3FU1MoAKHNjpQVCHBAtMsmBxvnsBCR1weix6p2TFm46wvLny8xDoiFuX4wSfX2",
  "key44": "2WdBfiX3dYei51KoJCfq8xkibAXqNhraqkjtsRfWg6enoeTUEDD7mZPFQ4nLnEDfkfeMEcVEhEEKTAeWuRKxXBq4",
  "key45": "32sdp5TYgWJuzLRMtT3Y1yu9YBNVhsLtjmvzBD2ygwuW3GVFebEsUWYMojGG1sfBArMokS5ogzqSTd8MWeuwt6FR",
  "key46": "5CCUSXbkBbRXw1vxsaYm4S7936EqLG9h4bQVz6jbHVu6mU77adpBcLACE43xiKVKdA9DtKtPFMikGrqeYFHWatuA",
  "key47": "5Ptbjkr8jFbwhKrPP4yb8CLY1L2B58NCxENjywiPbYytV3ZTDS6kXhR5xyND1LYHAiy6e34hSttSsA42vuM7X5Aq",
  "key48": "5tF8nmCsPwRYo15xVCKVpHR78tXxRbBsgJWKFPHL27V6rvMhkaP9WZp7nFUH5U2ffHBnZzt6MRzqavSTV2GSx8Tc",
  "key49": "5gYkBipv2GkrpN3SWEuSgsRGXUio34cxQZk5wGxLYBJLjRxbpHCrpTFBiHyvoq2AmqRYDnW1uACkRz1Yhp7CjY4Z"
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
