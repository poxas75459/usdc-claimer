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
    "2WiLs8iv6GjXD1GTgPKsRdpfUVHgY8dXsCQiKRrU5dFZBLwHSQ8Q4KhpjHsdrNRT2p1KJhRBVUDHuERY2SU5Q3PL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ECYhqTM6Fkz8EgHxSbBJ9PTjtSwmkqU6pB1QkNcGw36iyq1VJUBbbWaM4hwYXha2EHmNnDT9YN6EQ2kYBuh1Fw",
  "key1": "4jyXL5AbsdMA6kyLKr17vxhyXHaJQodZEWy6Mkwid1TLYC9SXwBcNBth36rD42GYBLc4QwPGj57EFy7F969sCh7T",
  "key2": "2v2HPGzUuMpgtRG3Lnp4VG5W5DmZURQDBusGdc445L1sSTbAeoJPLG9K9FWcaFThY8VX4XKcqWeboenV7ebNYduj",
  "key3": "resMVWio8Lq5J4wra2YzJGAtVJdhyk48uxyTUvyriLqS9GSiLFnvFmUzaMNwXGtSwihCAMEYsY85GRYgq5u3Dmm",
  "key4": "26ThkHnW9UeHfGojcYrkpDHtE812ommZvNhvjUQsDhBhSPjucZCzDn8jT9rXh2z1rDFjyaGiJHG4BXTWDJ5HPeTZ",
  "key5": "HnwHfJCH3DY7CZoZA7PHNusegUAuLonj4fPiyq9ZRjoKjomgjMYduWhLjB5Ema3FNAGnX85QSYFiPXmr9oJnefh",
  "key6": "42U9aWXLc85gfNZRsqC7tVugPthmVSeKi7zpVQqpoX7h4j6vt5qGzze4FdfjGtVN9mJws19WuPreKdTp9QLqcPqq",
  "key7": "28RM5C25buuhyxcJ3SBecZ87fhoTjvE5fvj2K65YREao92LahWtwnHFdhGpHbvtFnRvNEyPP7baLfYeQhy9y59HG",
  "key8": "5tD2ob2uNdGVenr21Eu1RPv85bKp7aiMf96CJ4moSEVMfD1gDA8kKicaRLqa5Ci8aR1sjeqRWFBPHZySVFRKNjVu",
  "key9": "oa5UMot7LHh9969KxUmiFnDHRVsnxsPUWine845GMZwRELjp9YzTj9muJw2TUNqE5aFZSdvaJys6QatjqpogAzJ",
  "key10": "e59L8dm9XyGzExXwfWYwbsPxq2U9LdNfThAYPfcc6YUyYR5z38zjz7dqLYruEsrkDqMDUEk4LKY9Ljqb284bJoJ",
  "key11": "21uH9CNHRa4TZKYNraJpwuMspFF5yjoabx3fNaSkH5tLC4FmZJAUYu6a699woyTSnhYfqh3hCPevbZCFBQG8FyBT",
  "key12": "2FGweGTMo1wzuZcYPSKpXkpC9K5vvoyrWRZehenUDAECcdzkJa6i7xq98fQe5X5wXWz4YNXCm6qdRDK7mBGr8oaq",
  "key13": "24PrFRhBY5CpAQbpVj34yvGDh9pZBwBLkRzp5fujZfd2pBeYsfo7niJnnEhVcWvf5ZVFyH7wcAS5w9M6VGG9wi6i",
  "key14": "4q29EhDttwGJtY1CvtUaAUttUPmZLSxDigA8m4VZXLzU8WTjrNJceem4JAMG2vNwbN2eSjkWSVPupaUkJTa2M3cY",
  "key15": "3uUWcQcJ5VRenNCQPYt4z4pPxKtNLgpiPdBm5nWnLqSnJXUq6NaC6LPET1jKznWfpJMMnf9EJdX6NCsipeGtpKeW",
  "key16": "4ikH38LkuXaZwq2WQQjszTjJNvooiTucvYGRmCzAwuxRMqn9u7krA7krPpGKS5ZgJTBkLcYPKWjcKW5xyePMqGS6",
  "key17": "3Kux8CMH2mz9KFTobqrX49cNLeZeAH1czs2Zh5sMQV8jH1Cy97nQnVkTtAU7ySnLitVGgQ356X4L6WXi4EwTFgEr",
  "key18": "4MmrHaT4haDo4j1hyp4TsoyGNhSDo9jcGf7o1o3FY7KqxcQKceUY3wkkwqZWUtcYJtnHoASydzxbHoTu9xXBjX3W",
  "key19": "2RByYtvJkFyg6TyQfYxBiEwvKqbghyHGwdA6u6Sx1UQ9C45BKXR8LEZoYmXzzeoqFoXSL7nEPVbYBU55KRS9pFBu",
  "key20": "i4cauvRpJtXzLpuM4WwKyqu28T6B3ruArkrcyumMjUHES4m67wy8vMDHMtC5fNLFiakkNkQqT6CrRPNJxrTGqwc",
  "key21": "5YvvVjtgPGv761FmiER7jYwTm1pX9Ce8YqzZomTTkaLZMBj8rhm4QKvXqUfxt8Qy1AyzLM7vJ7sHKC2pt4qejQFb",
  "key22": "KtP5JqpFKwqFjcdQ4aDyoKSUTtabwJpEqn2JogLWoLRvdZZtf57QBscoJgHSRovR7EYLnv4B6kjQGxMJR6VmVzz",
  "key23": "3y9TxBDEYvNjWcGioMWCrvKrV57gbYACAiJXy6eTt2m6XgkjTWHXf8iuFNm5fC2RKPVqyJ5g4mXFwXY8JK9m2wm2",
  "key24": "4PPRVKP578W8A3q6LFES8hynGupXZfH8ewHk4TxEHS8wh493FNnejzUWrRFMWZLh64PKtA4Zy4dpEfzBQ8MktWNC",
  "key25": "2xyLE3UKXPDnd55ojshvBU9jiPZ7AKD2aeg31Sbtk4UU4g5xqnFzyVPqoVnpY4u3iU6f95EPUkrAScUGaMu3AtX4",
  "key26": "2c1WQf7CVD4U2Rb8EZQuKzbbkFFKuP85aR6VULrCAzU8xf9KFJgsgGEf4vbH14yTtZJwVpxuCgFbvktiBpGwxoVT",
  "key27": "4PTHFTmuxrh56p36hdrUv2XQRq6rEbN79nW7HvosW98LQGDVikKwf6pbUDG2qNnyoat5buKLnuZHSdQ21BkrYYaW",
  "key28": "2ThaGBkGbE8QpDkRPBS9YUDqs3GRbx4u6AFFUS4RQiw3cpiM2u6PwoxmR69UCF9M9Bqndr4wKThccoaXovTss4Cx",
  "key29": "2hzb8oYHR8k2HnHQ8cqwRYmfeFDHTfuiWu5c9k3GVkTiz9BhDK2uiYyjKLMJta2LgisjmpgQ5MwiL1fHkkg1JHZA",
  "key30": "3US2Bgvitu391iEpQMon4QogfWEU6T7wk1k7JSbEduoXswbNtag13Z6QqskZnX5JFotpfv6gVKCGkqVPKkGyQdfK",
  "key31": "49Wa6j7SmBHpKzFBnrvirsiM49WnXRGjtgeKDrf4vpTLkARARSBrVvS2MtKcCKPzaoKxGdfomN2UnoqD6NvknwJJ",
  "key32": "3CSfe32nt9uL7XJkEFHssM72NJkLFsr23YayocPbgMbS5gRWG1uHQuwvDLfx1Zq1sERXGTQrxxmRTgQMCajeT91e",
  "key33": "3Lq1VHWWhRsp4xemQQcEuaNXR5swUgL33jsVdnu2d1NwS8LyY4y8tMtF9HdRXwxnTQjE1iGmAMi2MqVTiGMeutk",
  "key34": "3fhGZ3sg6WCbtYCG8sJxYgaBZsgwp3ruLLv9kv1wQE3NZWkdEFbaH7t5wsZBj2iKphjLp4NPs28jbP3uzw1JcZEB",
  "key35": "mXiHydNk6daVxTAy8QJ3LTNKh1L6abyj5abrSjWUUbXYVqgtioqb4fVh2cy6ishjEqUuM9LRsGnuvRNUXM5MFBN",
  "key36": "539qapTD8ZhLDyg4BTVBaaMLjzXTZm8Qrju9D27RrPuyVaci6y3fp33NhqGn6GhXwqX3H7f2A19VUE7G2zm3z6i",
  "key37": "46rBdyKvPgGjSBDjx5tQkBxVJ9npBKsu6uHBbhgZssHj4MYhdwo28R1WWmpSTqRZsjFjiTAZ28ELDp6GkgEKZukR",
  "key38": "2ZbRgQpzbEECyZ2ozzUEuk6spaEM96ZJi6xMELoVMLS8hgDedMt7mR5Cg5B5Myq5nWHCGcPJnCoiWyuktexy42yE",
  "key39": "4qK5GJybD9w56JrkLz2eqyEfbVAG8eGGGJE2tPgBs7V8zVGoXFzyVG6mMWg25ufCFSd6QtEcT4yEPbipvsvNkoVP",
  "key40": "5NrjPaNxcxTU6Z5rcLkvFtwbRWX5qp5bcwGqcKjU7cPMEQNQydYyvqak9XHDjwasCVsbUFBDSe7E8pR1hQ35RMA1",
  "key41": "3qfhhDqP6z3UgvGyht2NmasgWGg9AF5zprSL7EtapykK5jN563Y113yTLBLxrVAreDnJGtZKELqc98hrdYrgVdMf",
  "key42": "5UNLBMw5iewftbwdkvSbXuKbRVhiesjKZrNpa28sNUf4cwKa5t3Rp43f88X2CofdAFkDQtHCRNEG2KDmaUpRQf7n"
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
