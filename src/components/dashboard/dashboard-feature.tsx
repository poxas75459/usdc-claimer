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
    "2nUtn9rNFhtsLBo4rNT4RQHffGfxTEDqKxGFgaoL1BUCodHXnemD5HsanBhK4Qs2xvebiTbH5FLYi86Xb6mVrGFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NdB7mXRant5VTwobQA9ziqdUvr1cF5iSDE73gcaMYHrcG8DGgTiQANQ7Z27gLHHHKkAbgw2REKYkGjA4vQJ6Y18",
  "key1": "5uRH8UbmBNqkfTukNf6nQL3mEqYN6kJPQRtTJBC7jbjKUztVvXrwVm6xjY8vbiBCxaRjdhUJmAUepZWoonf4BmRn",
  "key2": "34Xd5wGYZQGZvAP5ddcW5RC4NmwZ7ofcZPrHt9Vxbi6CgEzYf45svbMgY5PDHBgHMmC1ZkeskvyF2LJhPHBzN6eH",
  "key3": "iuxN23Amxs6GQ9tMvH2XsDgrpA9jf8Jkwmj2nWHmWhPaJmiYHFDfsesPHGwtu8CTNkeCCNf5or1GcY2xssM4dud",
  "key4": "3rzJJfuuyQJwZUvGFXKbjnHU7GDPrTMH3ReNRuSyVNwR1JaWPHQuaDrmemDtNLtiKTahbvN7BbrZL6gLYEEhDw4D",
  "key5": "TzydJfQC6vPg2yuD82nXVKZYC2m3mAmFf19BGPcJVFUjEea3CcKy51e59zu7ncizEwwmDMtKRqdGjnKydpeUZXz",
  "key6": "3d97teSLVrdmddAM39g4TdFua5zK5rzqYfuJhKQQjPLPoGts6w1uWuGcdqMZNUSXSXdGG6Kyz7EWxm7do9Xv9RXs",
  "key7": "52GvCFh39odYFX8WdRJ817c7pasGrYd62miFukEjzzVjzvR5sReMZR6Vai9AHj3Ug7Ec1QujGEh8YnvWXQpncciM",
  "key8": "5TMdezFU3jSxAhobAWUmiBDaSxz7LwkujVvKxZwzowgDru8Fq6tvvjHJNQh4fjiATxVSfanfBqcvRyxWajiaGgw7",
  "key9": "2LyvXe3JdUBfzL33LJFvxrdhXhPGda5R4wkAnGiqSD1ydFL7YHWTHZV4sfLgsJQhiyFUrQe487xZ24pH6zFDTuzD",
  "key10": "3AaaZq5FezYEBcygGdijZiZCyTgWZmBJMZupWaBEgmQzmcehMZUyYTVyDcjhry599ZRwoh2iUAYJnZzUNWqLpHTf",
  "key11": "qmaXU9oHNdw5QXfqLM4AJb3eSxtKZmtVEB2ULuitkGbFrtZF6iUu7rfjN38af8C9k7E8MiaqHKskE17RhENr8qc",
  "key12": "5mb4hPYLB3gRCuZm5GVaRka6souA88apud7WuWynEbPsuyvdRQYNKxDyEDmG3gfkPrNgFV4pU8M7qYBCTKhKqz4r",
  "key13": "FSE4PjWwkXdrm8oDqgouTi9KFwY3faa7RxGEVR7Uo12tLQiqqHkGcWLTJK2ML7pkNrFNkXc6z1Cnnu68vbsFUnw",
  "key14": "5pkFrWswjwqPAreKt1pqzvtM7HLW2Tf6SuZT6HJknRSJuv8CT6obi8oMVLuXHEsF9KRMqzqw2Q2N6hUvrgdDS4cJ",
  "key15": "55BvwqDo2yDmo2HNDA1U7NmF1SZ4ciTgi3Aiv52EGf59tVysiji6jwMn3eU6yMbBkyk5UNtHGMhtVbzSQxFRNJja",
  "key16": "3h5K5wqwQckKEbf3w339V3gdVya59bCUhYPW3BRTNvWDF1UifWN1BR3ayGjtM3y9fmeyTZErBY9zVotnzNL8Bsaf",
  "key17": "5zbDaqebpgpAngrCSR7PBPStQBM5Jbkv4btkgrQN72qdFMTrh5YrFz59s6HNJpn2a16xdxHcZpKHLJSK1yn7PQxC",
  "key18": "52orzNcRkHPcTwxyDjyNJWTDqP5VjVRM9HGbHLsWgMmwkiFLmNdtCHMraHuZamyc6Ekj4jMd4cTuERzt6jLd5dT8",
  "key19": "4y5AsFoftpiq8KCshJ5uFU6MgwBpfxKLtSh8PAxJbJcZE53S85ievaYYWyYXqwzEBZxvZen5WY6BAjyJMizQZznF",
  "key20": "3YZL7UUcnsZrj4YMXzxU8ELUsCf2gd7ZQBHCqBwMrGU922hJu6rXjF6iyTZ73jUAsfU3F7V3tt4pzc4fcH9wM3VJ",
  "key21": "D3FbBTXPkJnNy57Er6dbmyEmeLSKkq8vVG8Yvbu6zSsPu2sziBjM1DPwux9jcrbBxiZQV2QNg2hF9gch2HrhsBb",
  "key22": "4KQzFGVMGPTPfpARccHk68ULyxgpVLfq8EfzvLB1TkKoEaBSXgsaT9peK2s7A7iBHzzPvPPT1WGxU8qjexdqDinW",
  "key23": "2bAK8w2qSf4nw57S4hAPNGHKEBA7cLfDFfpRtCRRFekNSvrtNMZVbv99cZwcq1ckAGANe9hyZ4q2LNgxygZKnwGV",
  "key24": "5xByVbhwasuPjo3WHKRvKn2v9SQKGdV6Xdn9psTtj6G7CMmcuvqD6LwWtNdKb9zLb6zgi85Cy3zPC5v382Xtxzkj",
  "key25": "6fDHfbRpjSnKraf6j8rMaYrNG1P5AcdfB8fw45MdfsQNeXjLARu7f4YScyTWH8LN4Bph8k6mREnKwYSzb6Z8T6Z",
  "key26": "4miWZdNhsM5GkMoaAxZgs6LyLzxteoPp8nQ5qkZRVRXwhYpAe7nJpi7kbA5jnmFsRthDdns3aKriDwq4Cmw4gC4R",
  "key27": "4k2Dh3dL1HRmcERYGAvWwQtxpo2sca4odCokAcuX38ArLEc2T67BCYKTDnyuWBXU9BttkGkg3z87muRMnXyKEu24",
  "key28": "2wwBjx1psB7KZLtkneukndbrFvhxxvYA6Hn6mXiXZfFcryUnqHAeq1c2DhosiQzEsZMacQWtCD9SKN8GT96Q88kP",
  "key29": "3a9oT2VtV3T9ehUwhVaGte1PsoTvMr7GsPUEbcJ9dHL4aYfUkfchBQfChgVdg22jZTcq5LKUhmcpDzqRNNoYnwFG",
  "key30": "CJ1v58rWZqfhXMQ13y7UFsvMvuKMMZozE3PcwNtKpdHdvWRN1iUbb6Fe9doZBcLgvCrdCBszjCus2xyNcu4svqM",
  "key31": "4QXLKNSz9zHcnLRA9Z1EmqQPirZ3h7XN5y27W1JMdteB5W21PWaEYuxL9qUuXeTZBbrWZHdPwFazoBk75gkkgn8N",
  "key32": "2oGczMFeQaeEvyW3tijrwXtKUgf16Gojk7cgcw8bEnTAsTemyuhVgy7otecuErhgsgnAzbQiFmBZvPe94B4oWe1F",
  "key33": "5sdf72SNbrpd7KCREwngkDsdaVMCmEePae4eqytngfdnbrZtJgiF4gpCrPRPnmYd9gUYNrVVqAJTptHjPBLjc2vK",
  "key34": "5nAfK8nfiDzd69RfnAoRvXqQBfpsHqyiAcdRomtC5CECuPeRnKCnpNaDQ7RSVr3iDJV6FPCyFR8mPQBQGPW5Po6y",
  "key35": "5ciLUWoAhDgBVgRmGqYcH2et8A2W3Mr7nvyANKhd8RznRcmcJWofLwGWjstKfczMPrv5cbtLBAZMfddZMN7ukUYy",
  "key36": "GryoryMh7AGraQT8fyZtxmdiD4iVSxR9DtJwK5xecBu1RRXoa9Mtp4H2VKQo63VSzQgAbmFUoSVEeNG1YLPpnK9",
  "key37": "CnzJgFyAG8xvAo7FPtEacArMC9diw4y14GZDQUZN21wMFPD2YF3gy8UUAtBBCp2eZWXnV6af64f3ZPBdf94ZnEt",
  "key38": "513ZL2uKy8J3RFUg8sV2dmxCHN6d5NhaJwEHSSiuQbCYs6i3CcakzLuTK611eFWUCBZsTUEmwKBRAq5iD5SP6WuD"
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
