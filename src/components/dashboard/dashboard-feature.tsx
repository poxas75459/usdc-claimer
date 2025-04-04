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
    "2hLPNosy65bYFJDXyCU6Abb3mxwFnFx41n47onpNhhwehsteWfqws7upxyLUZYQrSDXmp9h8Cuom9EpmgVGr1Gdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LVbEPf4UjSsycfo7vL1U4hPGjcQJ6xShKEFP8HRmxPH1quqYHpo3ng2gGL4q7kdR3SXfgUdFBLTDAs68kE1Fydz",
  "key1": "5Ke3P2SBo27ca6wi7wnUC8huKLUrtGeaFWwRPcVDRBZRJr1mdGnmvuueFnXQM24NmPLoTaFass63ao6Wovqqrb3g",
  "key2": "5wD6Hja3oym9iyfJq5x5cJMJ6SxNhyqyfyrWiLcAeb2FKXKQw6JKaS8jPVKVXj3fEjjmbBDFenJSUtZK7Z1CFsDx",
  "key3": "3j9FThvtnaNKfBL3iAShfpqntXMbf4ScyB8LMmRWYqqRNi3YHbstUw16Lmvzuq64g2a18fMZGoeWq8EjCxscVBfC",
  "key4": "kjzKBr7JsbBBxrBCmQBoNsaZXzV6sydMzLSBuM3DZewFt1CqjdBwaYMSqmBM2NQB9VMUX9XcHhXHDi6aFyt1QRg",
  "key5": "rmABn3sobGfTmAYTnxJLggTq7YUGqUnDPPbidBSKu6rWNXMSjTyq1ZQ6LF7srDc3QKhp24w4RJDRC49MxGyRtMo",
  "key6": "3PTRVHCaNiDX4CNu93XNJcDCwoYUK2YDniVo1pxptPVHQ6Pf7rAvySAFPmFgaqdQiJH28hbsePbq9EdzfPpbgbQJ",
  "key7": "3SmAVfJMAYv58xSCw27TdfD58n3T6LSqbYTZWAcAPNzL9ZwN6DwT3Ms3zbPpRPc7V7EHZLU5MYz6WPHesPMg8a6e",
  "key8": "5verw8mZBFbrBX6z4gUPKqbtSrdfT5i7U5ygRMQyjxPmdfc6pj4kck64wRYkfb1wJmypzWqpMwBhkmS85gZgpWJH",
  "key9": "5DesWmVp35kknmXQPjfy69tTEsJtppt87FgxesJTzi8ymW6avZNX5gyNXPxi2owLTYeniFjWYHVSmoWV5XNCmvCw",
  "key10": "22rxF1qG5E4AzMxbKKNbk23e8tiqcJGuK8ZFYnbVvhP5XHnbhCdbNwQ84J9aWWPCPMydhmtwfrfXSKUbjiquRgPR",
  "key11": "4rmqJZRgcpFbnAZsgKB6A38zy3YcZjqqL6uuw2QGnvg2jcs7fNABCtNDwMD8cXRV83dSv7LjoqguiHTZSYACLKT3",
  "key12": "43WA5YRrL2k2w1Uipbc5nVmNJZj5eBm3vtUpECS1dyJuv8espsrUjtKPYimup7eETx89xUXgKxu8tHdcrSSpaUBV",
  "key13": "2GzGaEspUF2xyNErGjDqvTqUTgoo2T54yqbvxCNsVHu6HLPWAiekt6VjdBo7XjjioRhgN1Z6bsMkbRRHUTvcB9aZ",
  "key14": "3mh4qcb6r3vkndqTFq4JJoDLVhyVferWcCg7Fzz5g5YLN2zDwukQJ2FCRf83sbE1uMjQ7FsL1asczugZPATA7jUU",
  "key15": "27x1Ph7PSk4wqSwtw39okgp1eUQfiXJiwaJ6iTgfW8LqGBPbkYs4qHAqjE4sjkLDN3ayTbzQWb48AH7MZcWKA93v",
  "key16": "2E5hCDBDKZRgDEQaaqE9iCMQJAst2Vr95u3zePMHZWdKkx1hiLKzVLdzVqE7mjZjttTsCuNEC2V2xLBkWuAunkJ5",
  "key17": "5dmnsPE8ogw3c6UfNj8ApmMmHnsjmYjermPvLsmaygAepw5dcb5aSb3r42N7zyJH8miUGVurYRZfvwLa21ofyHZ3",
  "key18": "2U1ox9xY6k89EXumXQmyi2eECzC2WREa3ZmFSTCwN4XLYYeg18d2gkVtHygPuaAgigZ62KNPWJWvdFHvyYMzG696",
  "key19": "4nhkQ2a7iEujFZzqMNTyoJyBB8vo1m3CLvNTLZ3135WM1jq8VFTvRmaPqijsq82i4sfx7Wc8Lcd3vRetqguSLAom",
  "key20": "3dw6ALtU1DAmj4btuZaLcQqtP45eMixMKJyeTgwL3TNRFuezdympjgeER5PLxr785wzrn18Vv5b2wZkN5QUPenez",
  "key21": "aWcCY5gKkZHTeTKCN3DcrntuFreHWNpN9GUqJ9s41HrJnHY5VHF4BWvvrgxxbkL1VKLJ1ZXt2XvtSF9yCAsUo1F",
  "key22": "5WffeT52BhTLnaFbDxKLss52AP9Pr6P3QD6HVteArRHetD4q1ncY2FnKGiYHpBTb28As2e1JS4TRwTAYdkWCQpy1",
  "key23": "2RDcGT56Y1eVPXzPY5wUGT6GxeUFABGeXi6wGns4Xr46a9hWUyDxSd2BqK5vxSbaCHaPfqKrH4B8uTQyYsTFiovJ",
  "key24": "3pV7bd7gLiSLnMcDTYGij2kMPxtxZxHugx6PdwXnX5wwF4ZPrp4NuHnxwgddXzF9iTMLnSeGioLrYmX2rK8N8sD2",
  "key25": "4RGLcnkjSLQFM91dYriFHuptP4PMXqZjQi2qnGuLXjN9TWxQTFTpfa8x2SYRP3KxDzHkZvCiJCS1FpwKUEucM5P1",
  "key26": "5Ap2enZe1H88wWmGYrh7JfF64bHoTQjip3VLTAMMVp563qrrdPQruQwSLVPPTQJZBCiWUaq3dgSkd1m6aXZLSZWo",
  "key27": "4Lagt2ETqSRzWsJUmmwhzoH5o8VmYhhKcu7AdKi6gZFFDWrN1NoUSMEwjDPFxUq8Up2sYMENUkippQWtW7FBPK74",
  "key28": "KqMNC2FVQzv2ZUwDGM7EwDR7TizDt2N2AxUipprYxVYqi1bmPJDGstNx3Y2FCLMGVpG5oJPQUjmKKqGty3Nu8Zk",
  "key29": "tFFo7k5agmMPSafreTdbLhqobB4A7RJm2hDxnfGmmaxcGNMJvnPhQcaJxTr6FWAcdWfAGCMUcMjrhxLj2mrLwrc",
  "key30": "55uTnyMLoopZzdZprMnEruSCHJ3Q9pejLHU9RAcY3w7canzDQJfoWKM2qD9aGE2GCCnRRDkGGrXmCwdVj16maEd6",
  "key31": "2zwhTPsfHBGrYdTMcCe2tziTsPtnADfMqkf7aSQEJtXQdEzEsbocJ9PgUFsRQRq9GV4KQGY1poLjAz929v2jQ64k",
  "key32": "2oB7AzFi6CRE6iVV3CXJaYXkTeQ45cwHNspfuJAKJpj5KFLvJxeeKcr1BsYhGypWkYZHJH3ddftTsgNLGKRqEUXe",
  "key33": "2gMPcUhCx2BS6tSgQimzjLTtCYVeXUN5C8q4fqfCMH5tZXZXewHjbJz8brcJKca52YhQNuDNPNiQEZ7qRzTDFz7A",
  "key34": "6iszKLucsGsrd7VP2AiHm2bmE6AcEznjM1tiWDrRf8gjcVaswFb69UkD6RGUBxPwBd5LtBdNVAQ6abV4uvxgYya",
  "key35": "66u3ZTN4A7uG9HoqtA3QHpZNf22fA1FodB1TDLWwveb8tZMdZrhk35n7yy7Bob6ieYQtL47hbUuSX2YLY1dJcAEf",
  "key36": "3RhA6ABvbRQRo9VSjBqmPBuoBJ7LTjC2c729tiBYw3W26TZZMmQzm8jG37e8tYei38J2AdFeNo7b8LofiQ5dtu9p",
  "key37": "CsTgV1u23EqgnuB1PVuJuk1AP8rT7KBPg2hzUFiZBMed9Ko3RQ16F1pJF3NjKzvo6EfrCYPKNyqDhAw4RraHGL4",
  "key38": "2dXzptC4GCssHMAu4mvbLj87Ct7AuQakcczQGzibeJiJ8PSVjWu6U5uUuQnLaAro7HAQfzxhcxzAuZbZq6PePZmm",
  "key39": "4VodbUFPv1HUpG1vKpwuSEWgvXtEZYi2uqDPSfN5sk1bKFxPrp56f4JUZdGp7JMEtCgXq7C9vYdPQ7RAQYoVFru8",
  "key40": "jWKrTiMws47nJeCQ7NApxZkjqcBC6qw8PypLvgWmcpjZX6W3Tg8LJhs8zZBhr1yqGznbtkJEyyayYeYFJJ7n949",
  "key41": "4dw7qXC5Jw8X2UZuydmpFT9163aGU8zA3rg3xxWPWmMsnx5ji7Rr4ZUZ5Wi7nny6yUs9agyNKjtTwVWiRynUxf2Q",
  "key42": "31DqYTsC2W1cjGme7JJ8uJkz3XjSL4fTGAnEZhRq9cDdw5D8VXn8cqSpcT4qxX8E56sVyZ7eohgW6Sbdcfh9sz2X",
  "key43": "4YebtmmjTRQ4pNbL8hiDehvwMFjyG3ZDpFdym15mZ8qPeAHhEovBWiLiZFLg7ipa6C38ya5EaUNjSthNV1edFEkd",
  "key44": "2EkQcAcDd4oFQzuxHWoREeD62LhWpsaAvypxa8AcRMj88AeAAqrbRZP9bgExBWtpK5TBfJzZn8KJCXxDhGAret5w",
  "key45": "qSUch5VXa4fsfVZkV9gXcmBS1Sd1ii16q5Cn8TpVLYUahVQPBwtCei8o1ZVQUnUg4uikC37X62TzJiGp1zqurQN",
  "key46": "29Km1USQ1WB28XvgsMsYxc7AE9NjYDKjzSNT5yzP1AVqukAboNBjqxUvJtbCSBEEL8QWdbMKniaQjLqactPjppT3",
  "key47": "5fYE9NZNmnxaDxWsUgkAYMUNZ3dzNGrKWmUyKpvoZZgbK4VgvGo72wcjEGcr6XH8jMUfTpxrMcduihhUKGZCKa2Y",
  "key48": "4j9yNQDEUBUqbBwhE3bpgSjMNFc2qXCnpbvPUSEjQnFndKnd2XYk494h2B7y7kvPdhej4D4apbZidz5jvb35vUBV",
  "key49": "i1scoYXX7DJ2yoFid61jywiyfPJK2vJ6zVp187PCtSkDgUUfqyzsK4zQDaaVsTBm1hohZb39wgHPkdSeiavkK3u"
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
