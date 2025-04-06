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
    "2tGow61CpoUNmncnySx6sEwyPGq4KATyPDExxd2xePR8xhLWEoMrtu2h7XtEjBNkqrwvZyKdJBRNYGxtQ7orcqrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hs3MD5dz8j5K9dURDiqUFeUMKVBdeJzYYa6tAisgcdVjZJeogvDMwuE4T5My1Nc21BLh9UruunKWRzB22N1JaYR",
  "key1": "bYwicjnunfNjGx6mAdbg1Yeb3Djtk4h9JwfaNmi2xBJ7wnxV3SLAtAdxi5vrcShLdQtUxGyZw9ayXkdTaSCgNP8",
  "key2": "2NLVDJaytRCeFm2UhFqgQksHdxmGDhQuWqa6U1ykD9rYfAVVCaN2DQ8x9pW4D6dyJkjjAbKobdAGkhjbezLssmCG",
  "key3": "4DMsu1JZt3SJY7ShS2MbXSve8GQDqbtHU6qy1fLPTvdef5iVVLy98aQEmRqBK5wUuMapBLnqu61KTMY8qY8nRVqU",
  "key4": "4UXaXZyKoiJShrgJQcJ8k12VePNKgZMT9KK5ZP1Jc8RY7Zmy8AsGv2ziC5LtCGZdoyDVtyBqzpVXD4Ef1VD6Jma3",
  "key5": "NnXaTb4U2po7pRfogkUM5qG7satuD7MPR8PZ7Y4qc7tZbebW5onNb811Y3xm5JZ1rUbmquJrMEmTtciyF2e2vts",
  "key6": "4Jiqf8VxnLa4ygvnJZDLHTtnkfb1YG4946p9yzvksRvtqeGmkFoX2cggmhQLeoGWhuN8mTkqpMAoLekMkRmPXrfL",
  "key7": "3e2CReYshqTnHSoFSHBa52jEEQ96HVbDLYsSnAkM1VWUgf1tdV6ha61qiudT3uLeMwBixB9DGzWK3fZmpBfmwZLR",
  "key8": "3gpBVWeujxWP2LgTue5e1WtMto35fZ7AN8uQ6KqMbkE4JherE8cYkMvRt6X7X1YLUVCd6YsNYgiDeMYjug82mkSU",
  "key9": "3Uf8GFtC7VFogaFB1ueceFuqgfDrEGacxrqNsAsTuKiTkGLwUWhj97348CafejMyGdHN8tyv9SVAJtfRgrobhfTs",
  "key10": "5QA3LaUEBRnyeN3u744aPWR5LtW5wiXMnLzp71T5AYV4YL8r1Aa7mW5tRUMAh6RLGjJpAnt3yVAoMLXHJB1ouu8M",
  "key11": "5zveVVPoxAJvev55vqE4aGgVA62XW8a351vvHpro5QsqzHTrDqes2CYKZ9jA5inudfYGqETuA9fDKZHi86LYHpFu",
  "key12": "3qXfCDgG5VkkMAVoVgUtU7Q6HGm3Md6NqLKx86FLvkczxhw9UAxdhKSWtym4D6UBWyEaDGw5rkgohbspkpWVqMse",
  "key13": "5QdLHYgoTWdNtzQeWYqXMShu81oFMXtNtbiLiNRSxkNfSgbrVxVAhqHPV66Dz8am1LuWcGo7fLA3kk47jLd1CLUv",
  "key14": "E4Vo47XQhpXCPzPiMxLGGEjaXk5nhebsDr31NReR6faySzjMPs6KLnJs4S2wP3DaSGyta4QvbgfUSX4DCYv9Ahe",
  "key15": "4uwdhZpUuzA2LKX1hgoBngKdTqKWuxmgbTUxgAVd1ZDqKhrKArJRGchsvCtEsqStYb4AUgk2xcJPWLb38u2ovkJ",
  "key16": "WzNJkFS2gSTpnMDL7qVhjSLSm14Z2ZSHTtN5xr9TZiAXNoR7eb66MRpfQ8Cnar3F3BfU49WiioATrbVQwZp5HLY",
  "key17": "iPS3m7Gg8WUMdVB76Et9SmQpBNtDPSXuK8vSFopMx9zJY2LUwkF85QzRQSS2p7RhqP1gd8ka6UasvqbS6ZKjLuJ",
  "key18": "3Rkfb68a7hyv6PJ6npcYzgmDZPDcWVwxNb2AYQkFTKF3BbgCaYQA9GzjsxVwkm7msfp5vbrpS7sfw9TfNUZgqAV3",
  "key19": "2Z9XHMnU85be56LK4DoaSuDvtjTHkyWfXGcDzNrhwvjK572Ytarp39pRieSDTCqsUzqHuvKAUPJR4BssFYDVTCEZ",
  "key20": "uPQnmPmggWWwEvnaC5JVqvc8igkYiHht4JsxjR24fFEQCZVMSTnVn2uZxsAgievYKsbcfbso5MaS3Qbkd7u91AH",
  "key21": "4B5NCQKn6dvV91Cx1n7thst9zJ4JJzBWWsPrG3H8z74LcFAFoqu7s61N4S12naLFVgQi3Zi52paQNDLr9XghjmMD",
  "key22": "5G3xwLHXdzeynNeUnpLuhQEj6UXYEszcwizBfJEYKFaVABrjVuT6wzCvx2okw4XZjPs9FMznHFVGTLWgb6LBufF5",
  "key23": "2QTZU2KWMQdh4h4Mx6jt6j6kQA6tP2yK2m542QqgmpYbMNAdzAVSCepVn96iA9TY1PqpcCGrkYrpcGnchvN3yt96",
  "key24": "2QiQfJk6ECzLvgrdwLBH5WYW7TfxrXMRCjYajkcsBEX1RLo2uRNaF8jA44tWWPLgQ7thdHp1bSkVKRPCvGDfbjX7",
  "key25": "2HKdfwH4PgMLwphNjtPLzGjM1YoCou6ibDS3fb9RMoDJzt2snAvupYMDNCvWSoSySziBsyLzLcbJnamnRFgBE33z",
  "key26": "5rjF4CktwGcDuTt9A3HCSZjPxoRXK8J5s5SSNw5XB6r82xyrFBC93UJYMocWz8sDyNWuyFoKKNHqY5gLMja7Wajq",
  "key27": "dTwGHBVoeHg3kXboqPPJ9AgCCL6cLQ984KV2sETCtNo9gXjK6wdh77ZKSAGJ42qg7RkVRCmeTkTYPz1Rtd3nwsR",
  "key28": "4HPuLYSuDT1DDC5eWQTVMEhy6JWjfWJeE3HggQFHSjvNRzDDQKy3QstdNAm7cZcLSgt7who6cw56q8phLkRoyW4L",
  "key29": "2NsXQNC8kkDHmdBf7tkTCCSTRdCYxMNif8ngneTD6AYnrqLg8KAsHeTHWGJzTxNQvKbvN75WeZEZ6CrQk36oLvKS",
  "key30": "3LSfcsNuXovgRSbQsFB8sCPziEuPJCF4GzSPb887n9uSoD4iZzmfgnYScq6qd8s1iaX2Xm2ZCPMudYopNaMM2BS4",
  "key31": "1W9HeRMgt2f5EwJrTWBvPZUxNumWozXcAW2AeEK3U5K61QF8eEKWBPpnfSLz6jS15krfApj88j48V6m6VkhwAma",
  "key32": "3DkQMN9qfh7DaBxrNNpEU2WMWD3r7HEHdQ2pKp1EfmEtcVCM9RChyYz9iAosktHCrzttQB2TnWTkn9sAuJgw7jUR",
  "key33": "2QUHHgcPkQADK3nNXArmSa1LsYtkvAvjSTGo5jcW4TP29iV7f2WJgJXhaTdeitSGyhhmuVKGD3ADs5ot3EbXiU7b",
  "key34": "2PkPVHVgC9GRgqfnd1FUFanec1JFRQgHMBsiK47FQ8jPVgqBmdvusySNXpYrLJm9q3z6aeWxMHuL3eei57964rz7",
  "key35": "5SbY4j49awVgmTjPXzPYcLDVnSZBt2x87QYs3QFEwLuyR6q4rmurckujbBQX865K9fQjX4qcNFkuFPBHiojbxPSL",
  "key36": "hpj7NoNCgBG5FWMUdESgTbE1CknvVQ1HTRk43xgMWQk5vGRZExk925MqqigQbhGZ35eCd5xSYwjCE9bVwHXEj5k"
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
