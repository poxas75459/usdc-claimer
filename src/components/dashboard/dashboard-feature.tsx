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
    "4eG1Sut1cog7D2DvzvGxA9EzRZ9wmrkVJfkQ7ytcoRfXSpXjXwX4d9MQ1Fo7wwj68jvHMzM38Lf2K2x46SxYtE3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uiEKeeYw9RPsg1W8HanjdgPPZQf2FbPTAaQn91u3cCQxn3sL4yUQEXeMGNYQExAqPHSKwjzrovbhTpNHdmzRY8g",
  "key1": "4JSerudbH9qv6b4V3TEeDc9q1mJ3t7HJUr8Scfrzihkcv7auyE8XF5gf5HaKFKQKnTFe5AxCgfXPnVUt42zjDqmP",
  "key2": "63KQuN4Vcg64cjr6JrtnQ62dnm4omFq9JF9wYDCisEmY4uFf2vCgiyzZn446Qhk48mWmNm9SSRwdAPbSdRzcVj5D",
  "key3": "5ZGT778cZR744zCStrBhHy7b9SJznGmpgA89ZMZJWohzoxR1nAskjKpxFtsWaURwKjigzeTV6YJ8fdA9G8D2jLZX",
  "key4": "2RjhAqKm9vVkQtAHLTyFNYrERwqeWKFYhWUAU1dW5G3Urgso17ocmgSqZuuLYp6h5cqxrNwFEes5pzS5sSyTSFpG",
  "key5": "9XzmJkALUHRGFRVHLCn6Y4b2df1vYKz6Dfnxd2fcZKpPCKiP9uZNrA9fry5YuLByCiq5smdArmRSgohaWm6UnMY",
  "key6": "WJhoKwKMGb4zwRiojsPnnANfiZG3cAKmMCjNQWZSTsy8pf83owiau7jEhdxuzStexsjYQvcc8WXCMN8dzVTYzEC",
  "key7": "5wyF2mopPgGQjLSWEjhstL7zazKYf3pH6ohhwyRQiF2FZq2uE6Sik2jdTNMfQT7CZU2vtfKd8bT26cb8n6MrpA6a",
  "key8": "3mGqeJCUiApW4uWkH7uW9abRyGd36FErDrA34nGx7nGzSyT2WQecF3HztH5ggtzWqhWQiMFirUL7orj2wjxC8RBq",
  "key9": "62jZBFzi5LNzJ6LrR15SBDP5G5wVwyjdJdNNYti48Pi55Kk9ywaHKf7JZEsbipzkGi3ND74GEPZqt8ueYHyna38N",
  "key10": "4SEdqT5yd3yVRdfuEEu3fkbf2cGes1oEs2K5r6rnktjayJTRzP7LgPTmpCcDnpr9F2ZjMSQRLYSiA6coMdKqRTx1",
  "key11": "4DjxL8TBZJstQ6k8QdAwAsjNZAcVdJpvsg8ZPPfy23cPNDSBWf4QNYmKAuXgawHGf58fog93qQfEk6gSsV2dP5Mh",
  "key12": "YNNHV8ne2FMTUBwyqZvZm7ZM2GrSwFiXeAW7G9i6MnyjaFWnEZjWQnZKvSwMWBHzgWGGHnQDcGrR2Wt3MRdVyi7",
  "key13": "3npC7RTYDmjnEqgBckmXEeKTjAVq5eU8p3VyffSXi1pfPWdxaBmJvs1TeGcCJm9pQvMnzZcq1UQNxBL3k9aXe3do",
  "key14": "4CVyxiv8Q2dHy4M8F99XyzBNqUs1jMRGGyw5S24MunagoBU87qt32d2RBQktp9czSqxu6xjFUG6hHbpiq7fnTutt",
  "key15": "2Lw51PNty3XrdYWmbnptgDQY8wvAkFNdKERDxiWNUhTYKg4JCi7pwZwkfs7xjoZmBgtDtKtjTv9yadHut8T8kpWh",
  "key16": "5pBcHfBFysZR55NMqtUSKy2EhFuQR7ByBTpetZY7SPn28oyBkAGuEdBNibxYKKjJPUTqoDQs2LwdhjLENSq4HPAj",
  "key17": "4vGfH4L2MrUjZNckNhzCxVXdxt5wep4VQuZPCTTiJWa7gcDrbWac6hc7yGxqdQ4upvfpAZSgUnqLsoN4kQBfuP7Q",
  "key18": "3rZnw7TbmbJRDRmXAteTa8Loq8iZAwXxFjcjgBYH1Egquu2mdkqzF22b4n3YidAYGJAom1izR5M2eqrCVnJYAqjL",
  "key19": "2cLMNreufyfdgTHoK6JJTGFc1uL26vQpBCWjo7EHnHD4jytWzCNRTcozejvKDzGAo7memdUK3sqs2obTPrrggBYW",
  "key20": "4P4zLLtkB9sSJmmtkLAkmiMJoCW1H6JzKSQequvf3HQJDS3Ubg3ip9BFMA425wCR5TFy9rHPWeeLXNYrvTE5B9uR",
  "key21": "5Mk2QZBmWhirBw6s2SyEgnak7LyQUkFaygoTsF2MEeYR33vf7nH9rCnt7uBMhxaV1SsjdKvx2MarWqxVKwMf32q2",
  "key22": "2PTu5JQYc1dRnjruEBkUry6v3zrbj6v9XDUZvQvH6K4unZPdhZMptFtE2jqiUQGCUjbNmVgVZJR1RAk8yNTXhjv2",
  "key23": "LEFvH1LjKq8mBgUBXoKk63Fp9mJwZtMABBsNhGRbDzoV1UfPmvBDKoSVLqLy5RnimQk9WBTTrXDsLkiJehU5CYK",
  "key24": "22iV5MfZ3Cd2YVK1HPHtQwd7njXyzUwVDyDufQRQsQR7Fih8gXQ1Prf57B1VfafUWVDYcxjKM8Zef5ci9V4fQ2KE",
  "key25": "4gkni4vpmpPprfeGeF4SvcE5xUkZK9hHAw2GrpMNtGXpuDv2SeXyhoVNqtpjMinU4nPMFNejXK1784vBUF2hpnpg",
  "key26": "5W8zJQzYtJEvJ1nyfDZcGpf3UmLX4FjoexhWfdJYYaKmGF9JbW5arxhnyC2vdYMs9ReoNfvHLAzqUFmzo3rQrumF",
  "key27": "5ziMic6dKCnqfbqZw9bGdAZ7jFtZbqwHjAbiFuQnxQw9v9vgaj7Ua2RQLKVBJnGtkFXNPbigfamqWcT5q3MkYzEo",
  "key28": "kx849CrcifggnVGFhufUQg1mRDn4KDE4wyaLkbjDkAqXYRUix3sACpw9W171AUMeXX12KFMGowE5Q2VgvaiG1xX",
  "key29": "DMzZRJogCDMshZ7MhhAqg64rdmxr9JdSdHHy8tdZSS2nEzD22261msjf5GVnVPnyxFSbbwm8Bng4FtNHmyCjhHH",
  "key30": "57a689eYZ9UZtkM1ANhGtaj7JTE5i5HKW5p2FBr5oHx35QfN6WRHnFvNs9VTyGFLBCUzC7hSQnN5ZCLThgf2DyFY",
  "key31": "2ViHcgbAXWmV64WgkSrnnyyQeBHeQdJZ2fqbycFsAo6kwhc1BaV3S35cBAdwEijRqcWBNVmKiV5b4xda9SsozRjL",
  "key32": "4jEtzK9SuCUmGdYnTm76C99D5bYvo8Qy6rSFnFGqKMF5HSdAeruMBYTB6otxgqEemuBDwCRD4K6qVcE8rWGTYNP2",
  "key33": "27d4otcA624hRaBDMW62R5Pm5rso1ZGyyCcZYULrLB93KctPJpY4Wsjir3WNhihCcXq79pLfo5wuDmU8tWUCJTkW",
  "key34": "3Go7HvD4QZFiBoC7dJdZq6eR7PuNj2BGq2wkMBJUvxRgJj2wthp3QXRkwqFMYVmD2ZN69JSiA18RcqBbv3F5FA7k",
  "key35": "4fZNeVNHSf6UFeSu2Rz9PdQRjb7bxUpPhpBoboQKHvpEd5CWMoes5r1tgNMKeCWPz8vZ3w28Re5AxRqyVWL9qQej",
  "key36": "3C1uyCtov1kKRmjTBvSVCPHond5qvUYnZUY594FY5KjJ6jDegenfqoNzZQ7xYtaesxMr9Y2jJB2Mb5z6CemtygnS",
  "key37": "YHuJoPUn6eA4R94netTuqcywL21FeG18GfhUWzuaNwXnVdM7MECSNZPfc97KRjSxS392D48qrSQKnbwqfNoNcR8",
  "key38": "2pw3mMNefJPzQ4rRv863PzDE3wbZofAgQni7vBK1ME4WsiugGgsDoSgZpmRvo7TcSfRvW7ak5xcqHie9NRgJXLUT",
  "key39": "TZRZGyT72yagh1xU8ArFVNyLoUvKYgfM58zF5tThY2q7FRY6mZ5d7foUyPNYPmNL8M1iLQkuDWDgfLZBpupK3LU",
  "key40": "4xwUsEDQajwcgqnHL16W5kDtzyesbBY9zJR61t4QmeFM58FQks9GvuPcgrMLNTpcAqZoCz9jhSpRpynNosguCm3A",
  "key41": "5jMibEA8TmB7wf2NE6mN1a7YxBrVzk77AxNEahvV9K8A1ZvTCJTc1gtiDyFtpiL5dd3xorL4aVPZxgeEnmmAgPvS",
  "key42": "4L5XSmsQkxmXSikFP1iLY4eEHBnUD46an1dCHv99RY63qngzvzoNSZq4fAEvJPmwmWxYDeZ29sAkHPqio5U56HV4",
  "key43": "XCqdbqp4hw6jjBKCLGcFKsoKwRagfU4rCeyY4nLyD8gS4D5pAk7Eqods38XE6bsRNVmbgMkDa5scYENyHcmUmtD",
  "key44": "1LhdvqjjYv6oHQK7e14SdnQg8dXtGEKUTckNAE1gPPiJQp3d4kM4gps2yh2h7dbXa5Kiihc51XzfZiKQcb76ZmZ",
  "key45": "5ihyuzPX8YPTV3xKPwXmtvEs2g2MC9bkjTCys4JFFvoUccAvbB1M6C51qEiUeDRHDmzcj4Xhtppye26W7v2ynLST"
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
