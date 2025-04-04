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
    "mtho6gHEfLvnLgZLw6dKSBq4Fx8EatqnZj52LdNuGPNGzqjgc8YxRSiapT1ibv4P2oBwL2VH73vCkw6ZUYAbwTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ucATPZzp5kW9d611fUkrXLdg6BxXUrYNcmuMPfjiJirKD1V18fjHMpB7dxmdJZyrunJzXxxW9Jv9tAN2gYY1m9D",
  "key1": "21n1GwJtrDArjJFTm2fLZyBRKA7UGAhkFnCUnJw7ycH29AXWaUifde6aUfTAMrvuMyHZT7B7gwQjwxivK9Ayb1jH",
  "key2": "5LRXnSyW7Pzg4gGR6RuJx7UkDHjKbLqJVRRcEWiE3yUZAfE5P5QxWKcCgvEyb2W4dw85b8cKgzy1vz4Sv2hWyRSV",
  "key3": "5QK3Rh99vmj3Yxc5j1h3tGoVEq8VPxDyTHgoQ28cuUfg7oZ5yytNqdfXoA3TYx2ShDSk11xVYaA3ueXVnp7YYqez",
  "key4": "4brLgDMobhz18LRJLHQ2u4M4tDTMe4vFtAExAdBGQg2HtjfqyWStpgcMqR4RGKgx8Vyuhy9Bt7KXxNkb5szaByLL",
  "key5": "2V414Y5eYgtqWkDFDhjQuDiqZrTo1cGVLKiRRWAoqAxCF3Uk3wd1FqX2x3M21WY3SzK9G8EfXaABLdNPeZcnRv8g",
  "key6": "2Dwnj6h4pBJfqFMM9KZfH75Udnmi56ZynRRhKvrtePHeEayCmKXx6HThtgsaCLRgwSJGjRtZk5iEj7NNjE8E3pvt",
  "key7": "4DasETth9Kh8x1bWNVtMmma7n7JM41EX5EMzCLQCaT3XQ6xH6KnQVcN4hjk47JL1eS8kVqKkubhQWdRA264XEbnH",
  "key8": "4JwNoWSFYbNc9cvrpaSsR3MDBdBTcxqpL3HU3gAdY1FACwhJsUwvL4VMVx847WhZvijLrU4QAQHKo2UJQ2ZcZT1G",
  "key9": "44s1sdzsNvHngLuAgSogN3eUtMo9AJyNWRc45w2A1QZBogeXxP783BJ7Fu5333LAeDhRYHck3GuVpifQZsE9smeQ",
  "key10": "P59mVdxNd8bRb7TfPc3ecfRV7viEXiiDwfoLZVhyZNVa3EigSbGg14DPVe3GasdP5cBSLBwGxLZAmeVMBfrwEQ9",
  "key11": "5rEDwahs2NvJYpH7z23qR5PBkd5UbJS6mQj63a7c8gBRJiuKZaVweErRyr9QwJ7wvetJPNj9wiY6zvq32VXDDk6C",
  "key12": "3waGG42b5vcaJnN63YiTe8yNcFTYJYTdgMqW8qB1zjHGvGNhtmwDxbnH4BTRFag2qTM5mneETMMYkdvKnsnXzarS",
  "key13": "3zssDJLz7BA6kYZGXubCvWN1beVHmNtNb4qfMW4Ux4ixDRScVHgimUkaTdDM4oJoAAvLuhuWJPyjMgy58UmpYAov",
  "key14": "4z7hAaDU8tWpsXG9gNL84YRB5NWve5qmdAQgd1pdrnSbeKQK1jTgUujCA4UyGLi1HZiDAiJ1P69byH2AhXWAuf7D",
  "key15": "3tRh4BfQjwoKrELVQrF4UD1GAHbZfjs66yD2MwG6cQjGianQKTHGLPYRbD2HpvD9JSwyLm4eXgCfRhjjK9ksVptm",
  "key16": "2sj3fcRpwdG9PW2yfz1pR1FKVwx8HVqUJDkRixhWNCLndjTKvLy9SMKmJbKvjbKdFCWzq5bwSa47XbutyyMPVPGs",
  "key17": "5SmVg2Qxp2uaa1SCUX4GE5NcUKV1tm3UAM8GHHTQQL49YLdbPeFFEtFf5ZK1Q3FxfS36eBrTnuPLgqyvdcc3MB5o",
  "key18": "3Jx2SyN5CHYiSjHhnCxAG23E7byvrhxXnNBkvtEuhP8YMrYCQWz7nmNgLXJoN68D9DP5peJeyFicBih2CPV6A9N9",
  "key19": "36hHdP6MJkUAXpoZgWPmPknU4JxmNxPikN4GEnGA2HhUuYzEbvtRLjbGvEmnMCkqTsnw14ASs6MaNbKYpCqnQQik",
  "key20": "2aKm3WDFUoDAbii1dq66wvQZsLeyeNGWziDMjPHt2bH8mq2YdAybVknpCYTTUXnWoNPfnsvjziSaBeF15VqJBhNL",
  "key21": "5gYGVqU4S9vxtLnhJB7dxLg2WdqoG1KKQfzB8hGHmxK81DpPpZ1x6YCK7HcunLaGAsjw3LdGHiCZzQqybXHFnXQP",
  "key22": "2u3tbtpzC5nbKt1KdZz4CUhtuvYFcdULnFhS37ZgkP6udwmnAjjnCbS5us8ofeAjpJR2HdW9iswGaqf84dCUxmYP",
  "key23": "3ZjnKAXcmhxFFb6QshJfLDiqnMDTJSxbPrmZG4Q7YXVNv1eFU6wDH8xQwzHSJNGAgd9SwAfwV493p82FRfohCXra",
  "key24": "3WYEiEWw3q35XjdCQhP1KSpSXSpQjB9dtFgm1z5KwMsjWSYzSSc37uGN1gK1yUkFZVdaCZug9Zthcd5RauvqNXST",
  "key25": "2MV7riQzFrj5DSjfSMyYCB1BFuGwsiwVH1sHcHdKgF8HJ5o9v2pyWBcLZjQxThEuxN1BdBtinYKgpMHvn61KbXSp",
  "key26": "5YEDzLjbrfBbL8ECWn4Do7vvCKXAM4Upk5SMjABaDJJfKEiuGJTJkrHmBzymYLtQKCsSmpEKgoFxSUFo3HKv5b8t",
  "key27": "Fxao3K1jcGoixCZK8VnzKpcwHFPPjcHEBLQ7vLCnHSvJSLw9xXiEQLPzRNQamxEZEk4o6kpbEJEk1X3avRHwQvg",
  "key28": "2v2JHqiSF5AEw4XTsxf9Ua7iVKUGSDAMMqrFtq8zZWpqC2fnASTSr1cpidTbaiQmJMGTZmHwjZfBEARLuCZBL5DN",
  "key29": "2R9zhXEfqzzNovixay4qSivKXBqU91aHEcMpBLJRjsGkD8qvsaAXtZr1UfFRvwgFCth5uyAwAoJoj4huSVFxaqye",
  "key30": "33nENuvkKpSH3mWYyBgTiygCCKjeYeuzZyuhquyph1D6Z2Hjr7XsBa3KTTyNkAYBf2RCM5CSYsjFq5YmkuGusuDS",
  "key31": "62WPMmq7TXgPci5DueNpKeNyBKWkC9eNXQ7fVBKvNMcyFeS4Mv7keYTzhP54QyJodgJ9JJqTEDeHJ9npVSuG1vzg",
  "key32": "Zvme6gUMYpP6oLxyhrnYiq7GBEdH72xLjzoBw8owDtbeF62QkQa9TpB4fnxVFsxjWX8Dv2ZWZrVzyxR7DpJC7Nn",
  "key33": "5m6xqs86eGzhBuBaUX32Y1ULfZLd5faX3xQHyb6tYdYqkZezmZsQUm5223KQ9Weh7trbY9UxkY6MpLdCCrJxishe",
  "key34": "WpDJFjKVRZH7g5Ph7d3xgynPeLkBFfFkYNUpcNzYt7ESnmP5BRaKAWjKkHFqxUEMPQAfetqHyCEAJisqqTzVBVH",
  "key35": "3zSU1zu5eCu3ZbqhLoyJToLiaUUzrRmkpUEXNYwkyQT82XtLXuS2cpYp44upuyHxmm8DBsuMEw8ikGWjt6zH3r5Q",
  "key36": "gVabYSDxHevsAXCGonExKn4rZiRqW1cfth6cRoJpkUYDYdHt5uMjHyGTPFXnCKPJbzPSp6MVWAJ2ZMc5cZZpD5B",
  "key37": "4VYDmk82Sc5DRgVXL2vBGadb1qL3Ye6evGrA1UsTtqVqwEY2w5xr3Ts3Crg35PvaC3RqThCvzhMM8Vfx4ssvBcgX",
  "key38": "4b4WujfjcNNYUzL5i92ymBATJ5HheEbfbqLaswqGg5EVr42EsxPPFQi7P9UaMWAoP6FMBmFux86DX9AJbQWrpGT9",
  "key39": "43dzzZgtzBTjQ98KGQPrL7x8Az3d6hqfdT3De3cqQpdzxP7rCz8QB8iptukBLHoR5HgL5aFwR6imTaMi1L4nsVgX",
  "key40": "4s5GiRhrmTYrUWfGZTGJhxmBd67mqazCBPeT9k5rnSRZ7W5QhUp5qst4ohDKAsEs1Jz42Gdb1btnk9JZwNTH2Jpk",
  "key41": "5rBErySF5FCn11azvyZGPZv41wLAqMDgdaX33RpmmQDQNuExDKheugUH3n1LjHz7zmZwwFWiwJLtwr1V7FzF6zYP",
  "key42": "33R9w9gNxF2gMHPewFovWdsha31TeFkR3sWPRYLtyTWNdt6NfVsvyQhkkBDDZw5C7FcmdkU7GwkZZxeLv35EiJUn",
  "key43": "cxr1PTzF4urFXdvSV1iTfYKDCFWZK3nwbWFF1ebY2D4nLcRdR73EDewXvmSz2i5ugjqfHh6Gbeme1DUY3PuSecC",
  "key44": "3tcPDP4hAztnBRN2j2zdh1Nsz2ovPhSczMydk82jpufDUusgt9Wk65gCEq57ygEqQ7ry6S9ntH2Eo3hTCj2yQz6d",
  "key45": "3EfR9pNSvUSzdNGU3QgcK1XyJi7fMcX8YwKa3NUNCFFZwzXn3ERo612fxGi9GLXwveAj5Uvc1pCQvdhDsNknuTGS",
  "key46": "2RVMKySSUP1BuK56zWgwngF9QYZZnzEnomgz3U5DN8xE6rwDZTM9iZ4ay2LFUU7oyi7Rq5qLxNRfcdVDqg35UdtU",
  "key47": "FSfSZijBD53K24Ej4eD45bP8ScykxExFDYrZg9LphWqnZ3mNHaJVToHt8n6Q5DhViPpUXFDTJFoV4nC6YnGmmEH"
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
