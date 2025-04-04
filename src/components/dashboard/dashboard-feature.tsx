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
    "5vGwkjNWU6HEiSjMVTZzbX8RQC5YXDVGABZ6NzijMUNtDnCiwPaRsSMT3D3iKELnLGntQNjaPpULBt3L4kKcEsh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EAWoFWs2xHu7QhYKAGMmoXMtT9NPdP6fitMmY9FxdQftyK8hV1TDvF89yeip3S5m7g1iL6GXdyguhGGE7p4Hg4w",
  "key1": "2ZFHRBMo9mMmeoW8vB8Caztqxc7VBtbkm5PpSCqpFRcVFBSresnCZF4eufErusVkwYwFGpC5LY2Yt1CuicgNYzMp",
  "key2": "3mUB4LFJz4EK7xetwHVPuW6iUtpJpyS7svTrzChnY8t2wJeKUmQ1xVT5xYFCpUhNeQTiqQMAk9nBrqUYgJKnc1fH",
  "key3": "23MomkzEq49t7osHFxMjLTJHsvCiP2wtghibDaHMU6EEd5cLKvzp4bNK5afFnDQVxHiZp2TaC7ixo9LEUomhXWfH",
  "key4": "317fWochJ7qiXDFT1aaeTi2CPEiQcsiePCwa6FyatsArDz29ysy6Nq6nSobN8M3AC6baKCMsWySA4byyoJRubCnH",
  "key5": "3XH1NfsWGtY4nwXt3s5vUD7waTQHVtEkdK7uUQA9kYDfJu9tVrH5ESJmEG82gxmvj2JBMeTRsfwijj86gKbF7enp",
  "key6": "62JcbtRimLyCmnmEQ2PgMSx8pG5YYXZw3GzxcoCX543hWaUAMPhh7AiSxpGo2WFyJTM2Ep4X1A14s3Q2mdcrNiGe",
  "key7": "4UEKWHAdNjbEJeGspgohRkYg6hgNCd6VL3u3ugsRSu17JhMVh9Rs87KtP1ueZ9tgzZCVLAhSWWoa5dzYsdjrnGPE",
  "key8": "2UALfVurWVX7HWnGcqH58mgbKKsfqAYk81UXrJzUf8Jt5UTM1cByYVhwZYL4PzsgfeWxCaXcLHQ59urk8DfgaJ4s",
  "key9": "viJYhdzXhEBsFEFeLN6Po64MDNg6QbegMXfNWZ14VkGgZFzKQzxH6W7g5sM75qLn2uzLW8fEtATCHU4rmUmJq7J",
  "key10": "27r98F5FS9m1Y97CGV8jhUtsc2GG3tXiCYQVAvwubNdGgjwDkLvZcxfMxE1dRWdHSPKuhWwb3ZqXioD4WJ74PKVS",
  "key11": "5S7deBZGpknrC9LBPQ5UjhyeuMZxURtz3dUkWtz5oy8HvX6z41xkAWBGFM4tPCoiXQvGhAFWpiLgZ25ycWdnX55t",
  "key12": "uLknTYQ2953AsjBjVqLBYanbp8CUt8PjjtM5C4ezdR7dJjCaDnvbPn8Ko74vBBrbaaEt3Pz3hQfPyomQ92zLGeV",
  "key13": "4591wk1MJjWnDqk6SgCV54jFpkXkJegTew8nRjKAaM5QVCbfdQM5QJjDym8pRySk951DunuBBM8rmVwSjVsqZqnB",
  "key14": "2foMNRpq4CyuqEmffJPwqDCC9drqYeYHz4tAzfufvmxFRsrFgzM7qgBjV6Kz6fKmy4iQhTrq458DwsDv1UtPjEMZ",
  "key15": "2bP98NbEdYgVvRg84qGARRp8ABcVGN4uzjv7dn99GQXkfYeWEafzYPRoctowmktVNkMfrdK7i5v3mFrPqmpu9JDz",
  "key16": "5AeuAgx67XBDb2i4DPWWbzc1ysCAYmVijGvhQiRp5gRdCfpcfiKT7qF3wsGGBkCfc6cykhedCXbh1MX12nQBfUEU",
  "key17": "5NdcLXQybSo3WDMVQ2AbHAUQHjwXHwqPo21vRM8SQSAshisBCkvkHYRPdrPdX3rHhJqsfEWP3PmHDQf5CH18M6Xd",
  "key18": "2SZe1EFCgxP3pZTht3WTcE5XuPza317mn3VMqyCB9SzPkRsDmAANYDzGewjFazMwizaPxcuoqq1QKbPk37QYA2sU",
  "key19": "4d45je5Gf62ib6ue95iuZPhmo22vqJcKJeVtFK2eNtFmFKUhYW7AU7hWZQ9ffqZ3MskTY7fcFeBrWSiqhJq4ejZF",
  "key20": "44gdCsG9MJSQDhsk7ZDYwaapikV2rCmiygMdWLewQk3NHwXdBVDaj83AwzMMTC4U8Q7H3q7UxPonePXDVZHvbuah",
  "key21": "4JGi9YwJvRCxmxJFVvX1xWfVTcg736iahY9aXbLZ614YKi8bubEpyzLsGudjY8Wd42QTQDxmFwvrPc1CDJY81K2t",
  "key22": "96UZyZvaxjaqnpaJt8TueYuHHo1AF34QCBfnmb7KTQi7GjTXBdCFBRRBQR37dybQENFC3RM7mZZafUv1dgSQFQQ",
  "key23": "2voD5BpjW3wNn8P9XpjB5LxswFr4uCFLhAgquaNasHN1nJ7jCoVMrkUdvFeT5w5Q1dFHBWTeTHxokLRU5dVzC6Ve",
  "key24": "4b6X84RfUvuouAhw3TnJSetq4AdgRrktntiiuQLLiX2ekqKPx5NuycvmQEpwrjEUzd3z7HQDeM3TkFe65o9vkzWh",
  "key25": "2NqoAA4PLjXB5C2JjKv3hbpZiuxpoBwPZWyKGh35mJPbiSfeJMWBExUuo2w1YDa5fno2EFPLCMRgD3QwaW9L2iRL",
  "key26": "3mKdXqGWQUDTdm8kozE13YavQNLFTjsuNF7jfx73SzmA6jz7Zt6G7pENXUWnMzwZhVmiPGPJfzbPZgUj7eoHJP16",
  "key27": "3cGnxkYGzPFtF4gHecGi2FCYBhYYHrvv1wJWf1pETTgQDuynE4sBBt4GmtZZBnnrM3UGHFfGZ2qk4dkVHu4LMYhp",
  "key28": "VpLS5oJzfFc6XMssc3o6Usd42GgPQaLPobqk1imoFJdHTAFfKN2iVdJnN3KzhbgHjwWtAYegk2Liz3xGEs7ZGQu",
  "key29": "5GBT1zMvM4wSyn11b5MZTS9P2WSMQ8rCBLDsqrmKF3zN7KzF2sb8L6KhpgCkkBjoJjVc4Qg41djTSgvm4cNypCJh",
  "key30": "3HFMQtqGjvRBDSuBqjtadM48S8Q8PtHp66odWGAfj6A5MUaFTACmpHXUqHNim6vxeYxkJDDv3GGoudVaw1zuvQSz",
  "key31": "5Qo6DYungeg8RGYEgBqW9CfXNY1pK8Cb7U733TC1nsTjE5cTqExcVC5Jd3wHM8vyWa4HSk8wye8BKNLR4hntTV84",
  "key32": "3kA1UgZ68e4s4QFWJGLeYkR4ajCShTiAtr34cTPSyKpFgYiJfyh3GmTdrm3SbPTWuGAoPZa2G81GC8V8rgAuBEpT"
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
