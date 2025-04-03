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
    "L5x2jGUFTe41fnHMtBzTc8FsMzZBkyhvWDBkkTDR3aQvPxAtnFPCceyfhtGAecNnmAz5ywP5hwN8jZDowaT9nhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGZGFHCZHLpVMUQFn1cqmgsnud5Z1KDd8WkoxCVrnSQCY2cUVYdRmiJ4skABptyGT3nzdmoeciH5uxCcN22UcVt",
  "key1": "2tRJznumVn39SWxeoXBquCBDaLjhz8QRfxPJ8m9Nuq2dRgxv1QgxxJwAWj2iuvvYvz76KrbvDKuETpPqmvzDcQPH",
  "key2": "32xfzskb5hYKGtz67p7fbpWzsKZ1xPEYL1hcqkySgvuQsNNLXQdiUK6QGX5ntzov9xKqDWNZxSJ7wFfZSYiBr4Q8",
  "key3": "63FkBhzZhqofLHufHjN4mHSAT1d5AggjecqfwqyCG19JjmMb15BRDbfYgW3r4sWKmW3pA2BCAUcQJx8HXC58msWy",
  "key4": "yrSWDK9b7Ug89wBpaY6MLXMxMjS9FNh4Dxe7BLDd7HjTjquqtDQhVjqpaBeBPhT4bUUsNf4AvVcro9iLvJSJjfM",
  "key5": "2dYeA8gUtKcrxsHX4qtKLPyraHRHd8rVTozWVsF9GVeWP9iuNdYbYBJp7C6HjLJxtTwetFxGwgG2gVXQrqpJVpuq",
  "key6": "4aXBtEnvkTR45p3kSakHVuWRsnnXPH6z6fbDv87v3i6V1txchGudvt2A1cs8XpuuUcR1xesUfqZzYU3MwqUobtyA",
  "key7": "3sPjr7e2uU3X1zP7hTYt72wpwkiQC3mifyLWD7i6ob5k4iXE4tTCNT4BfF3WGgcGYPB4eKB7pGFzdAvDKX5DCi2z",
  "key8": "3F2iFkFPnMA51fWHWxEZfV8VqkG1fYgwJYrdQgbFUpXsCjy83NRfo283ic7TRy7SWMpSo9jc3FUZj1dXx32W2vZr",
  "key9": "diyzBLnfvMQKHLFsJk6vrxpYy7DqQbQmbTVTfDidNGRREEQu1b46XXTn2uQ9Q3AjXwUtqvCo6erMucaH1hrP4Ze",
  "key10": "4tBhsYJLuvjB99YdGRQ3QxPGjsEKUPmw5FF3zpjeacHuikYLAWzApKJUBiykU4zmevCKmkLPSxVZstFMo3W112jB",
  "key11": "4ZPiZdmwymK1EjPuF5ge9L5kmnb2E4ngxK7tT6z4SvksFV94gkyLE2MsyW2AXMd3CBW6R3npL7Tgvxsv6oCF9nNe",
  "key12": "2P59xLvV2fjH2Gt4oJq3R9XSkrb4izeHKqxwMKCJkEmqcDrN6hWz8SehZ4vBY4wf5dDQLMU17rPCbgbE9UcmZ1aX",
  "key13": "2QnFypWV8piFMxPKUi2n2PpyMNBHMi9q9whdMQ4gaG6GqyArHP3oupfMhJzQdZ9uN7V4rhq7mKTHUjyPpt7qoomo",
  "key14": "ZhFDJSTH3rCG9dEZZiHCBiNV7PGnGvLGYXSPLJ1Y5Mirb1jfUvp5ux91ZiTzRzG35MQY9fGPLE6EXZn3X1MwjdN",
  "key15": "5i3nAvkcocwL3BJVQcK2JJdiTWnFhtxMtvwjiX1aCRhVbc4XdEr1934SMKaJkG1q7refcXzaSYzsYPgn58zazUCm",
  "key16": "5doUWuZMA4PD55ihq9hgEz3r57oP1gAgQX6yMRY1nz4aTTzi9GVqejAkrDiLYz4CZLRMSZ2FhYv8bSPdwXX3QNAx",
  "key17": "5z78Cek2GSE1Exjyyjo51zKAjudni1ima2J3WeJLnEzUbKkCawV1DBodcDshLMF938c45TcKT489YXeM73poc1TD",
  "key18": "2fk2jYuyhodgpaMquYMuEfANzgYSBgt5VuaRA41UJsQcoFmXVQ4uMxVqBSCprSce8uk4ySz3zXxzRYgWWE9aq8W4",
  "key19": "3FZRzMdFepDu5f85bkfcJLrwjrUDPdCiL5cUutuRokHmwxLqXEoVzJCEmsG2KwwyG3dt1MP7Mfba9jhWd3mZkm8K",
  "key20": "2FzT28mYW8s5n23tRmytwTErNVNM5PkNooeqG8e3ydy5KzPvbzJzDQp3taCH3USUJcsX2FkZtqY5e6rNJC3Ugquw",
  "key21": "SZxh75zrUWEyjKiNDg5V985z7hZtQh2oeQPjgoeoZq4CXHPK2i7ivkrCenAcsLXYXbLFNNAbnw7kGHGQrWfZ762",
  "key22": "5ogC4Kdu8LiZN5wfraFjXcB6Q9brSCuLZUZj1H6FgxpzjDk4RFPmZDvYwPJMfymP8wbYweBg22pLbVyCj3xpqtmo",
  "key23": "2MhpcwFNVJYTpBqXvKsMe4iUj8hu2sPk2wzzYrLkGqjtSXjYv7DNSdNYKJzmaFYnzj36hmu62MLzcjwY3rrKYx9x",
  "key24": "5RpWnv7Xo3ANZ8BN9HAgbn5uoWxbx8PN7D8QMXDwCp2D8TDeY4joB6ENE4enW5F99Tu9V7jtNopG1ncFmE5pJHUu",
  "key25": "2qUyuujem9Z1rHAfnBNVgxrz9TMv5pXSkri5YysJ53J1eRiRBdzDUQZgPTCDnPvL8JX7NvQq4cUESYNCCqv3ZYtq",
  "key26": "3h3wmncwG6aJCFq7jRk2PVyAcRfsAreGHcbbmi5QdWrxVv8qg1Q32GXBxR75mXpfVjY11tr5M8Et74Z2voaTZusn",
  "key27": "rTcAYAhU4GGC5fzQGCHUjV6VHz8TCVyveYcKUaW1iN75Q3F6D4a9nRUp1Mgw9pNCSSiiNKEACZ2UaZ41tYFaNo3",
  "key28": "5na1qrJz8ZvW54BKz1ri5x3ZfBxYy6icdCu5bRDghtEcLHqUv2LqMRKwMTqqnKfWD4oG8M9GiR1pFKBhSvY8X4u5",
  "key29": "cwGXjzCMhQk6tH4eZegBc7oeKHdT4a8FBh6GAnF8dpsEZ5ySXVNWGPHYs9TZrHsxz4wPwxpT9HSBFUSc3tCFxsZ",
  "key30": "5GivUz8vwPXtmT91psGFmcvRaMtQ5h4jyZRQxS8cTr2uhBgcWhZWHyD2AW2miVS1s29Q3sR9ahi67kSyo12uAf2m",
  "key31": "2Q6Lc8H6V3ws4DdR8pV5teoJKgDeRGj7QrMcGWWzEhuDHsaT1cNMfv3EWFH71KkshQzsCxcR46xghBsorFt8nuWo",
  "key32": "661so5z3aSJ3DXARJeAz7eNoKzhPK4SqjCLptNit5rzKWeNk5DJPtm4QuVxoEdj4XANBUVmTt95HS8MCrkUkqJXL",
  "key33": "2pBVfEjEXuVXZJi7RA16WsgDYyFq5Ya3isiCMUXrfoxEUVPDF87ZrAjKN7yJGugGDC3s7HhiMrCoZwgjRfXXj4Vp",
  "key34": "B65UspngFUsEi6RriA9JKvJfLbVtbNQyohe6QnJdYNcQzEf2BH238LPuB7nsxM34Xto3oh3ojanS7bRkBzAwD2w",
  "key35": "59wGMDiQYBpHSh4eX8FhHpoMkvYrMDnr8LwVifsBaPhzW5ojhxjXXkT8Qbsh8zM3sRiybAEgFcazg7MEhEcNz8KS",
  "key36": "2GsPK9Wek4rqQLUoCmEf41bFf4Lc4asooQDUUs9t9oc6CmLJw1wWEP5EMr8jthLDakQKH5t75rKA9gLANFaUaT3U",
  "key37": "2ZovVJUkYpGzcJkhFBqKEiaVn4hz8N3ey6cSmhW7mCwjyvqcw2CyBGCKvBJQzAsqP3ZxWy8T9m6yWNY8JmVJHieU",
  "key38": "khcPA8uqU6yfvaJEYzYp78NCurffY4nM8chmbiax4HThWSa7mXNEke3BsxBUNaFBr3NL4AajY7xAiUg6BaSH4zk",
  "key39": "3pfnZtLQjo2Hu9K9PNXZdZhx1VmRr5uofKucDstW8nhJoYcwkh4zntJTFZRAhHQLEQ8UvdTwKEioJHFzQG9pnrMr",
  "key40": "5gsS4tZVkX3ygRDgguC1FiGq8UsYoFemdqMpdpZuBzqHoonBz5QPLQQ9VHqbKZv1cYs4ZdoyUNid5D9fF7VkeCrQ",
  "key41": "2d1eSS7suXU2qHPZkrzYW1kNYtMiSyLE1KzyBAK1ny4SVz6ndcqmM5EMCnweLA4VgdFsQjZfSddUgpY8B4siad8M",
  "key42": "5B9W227Zsk37BqeNpUqRxYJ5R2PAT9zWarKcDoS619E3aVv99JJ3W58NX2oxNwhbWekaTsWyMLenx5yjCehZT2kS",
  "key43": "3u3axofMeg5QtNYvif5WNVxgXjEq3xd6AjNXna8gCz6CuUULWJXoAFzmsWuLEcwMKuhLnspeq3gEoPGqkdvLibiM",
  "key44": "je5zavKq6doTCK8thr19P355ZMtz4LdpDDSpeLZgoX83dsL8P5SsTGNvXxcJSbVcQfFBmbzHsHRTuKc7tRuXT6B",
  "key45": "iHQRgA94oNRR3FYQpKEUQHNuqm7nmcTRSwjYSQQKpLVwbhi9V14ZNmwfvqv4kjQY7974CMrFGHqCVFGruvJQQdV",
  "key46": "q3uUaLdJ66MtKxNXyxro8Fq5fbXeoMGDDGb38Ukp5FeEHSR7jvGnGfpLMXg3ebHizXw1jckhzaJbwrNzkmkwbqo",
  "key47": "2acZohPuRofFQBs1SJAhUv3REhRXP2KosUbChSXqGPKXcuyk6hKPfK7A7g3YABsHeu1KeD3PR9NHMD3UpYYtC3dh",
  "key48": "2Y6eQWaTyWrcqxtfg6wAaqTNkzRBzipqVUJ4195hjuYPC53pk9FPNChcsBBH8nF7E5NrxuqpZb3voeXrrVp2nZL6",
  "key49": "5E6CKCfr36cMsBP7nZouhHDqccQ8UcobRp1wDGh31346t3BDoNu5UN6ZzNqc6bMZLFQHSiRjM91jua1SKM8e7pMd"
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
