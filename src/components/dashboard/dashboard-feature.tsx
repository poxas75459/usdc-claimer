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
    "g6vYuTGJsX2Ye3G38qvyaf7zjF8GnLm6FJMyn3BZoHBbn6zwSZLN2EPidmmeSt1mcaZCsYQ4Pv6pzmbdFRYTxu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zk2msubKsXy3Lr7xCMSyUR5DGKqP5yCqxVbfqAeA1AzTwjvDDebR4MbPhgng7YijpbeJu1hR4DhoFgXuTEQfQmm",
  "key1": "yfD3JvEf1Nwx7B8nktYZ2wiM3AsigTU4sUXSaMq614TcbjzkV4y5FTqAgi2iUbz2quK2qXkXd7AwY93rxvUqMdL",
  "key2": "5BYfvwonPD3WsAKHuLbuSjoz7qQPGku8QdfWXuMASn6G8xj8hzQ6nMhk8LbRZUW1r34H58eX7FsvcbCo43FLprNu",
  "key3": "2TuHuyCW2oaCNLazFJ3QFa6dTUEaY81sjqKF6Jv6ELiDCZBbGJ1jrdD6bfmBzM8t1F7KTMH9b42YbusgcJDLwLKp",
  "key4": "5SGRmrC2QQizSxaauxSKXySpGkXGK7HRode4PSRvm7iagtaoS11ToXQSdzADdwhhCWz6FZz8CgXJmrksmvHUCZfD",
  "key5": "3YPdKugc1xb9pf5GEh2XeiyH7MCLigcn81T8e2tTYWU1viaAmmzwGU2hf83NMWXwT1GF1iEmEvtsndoDdfTuu3dJ",
  "key6": "4679afJABwymBphcppsbZqBJ854oBTPYz1uAK6ToApGKgxEQY1oAcWZLMNgUJLPGPo4euV6rRnaGp9Bi5qNbKKiY",
  "key7": "3r7CG6FmzS9BEYjF4qKzF6scuCpRy3uJ1urJ6xqp1ysDrMKckCNgpDQdemeR3Pubj38F8fpp3wqZT63FCJPRZUyS",
  "key8": "2g6Stb2WbcLpnjnYhSLn4hLqiY2bGcXLkTTcFVGtSS7nBVes2oLcRioPYy99nwEfxMmunyjSLBvaJ7GY7vAeX1aC",
  "key9": "3GGjScra5FKDbJ361oJUKiVTfJouTkp3hMJDjpYGP7H9wg5bqXWfRM5dT2WXYt35LLnrfqWc9XoEY85oPPs65Td8",
  "key10": "3KFURo8zVCQEW427NtzJkNPuKV3zF2FRaaohKBya1qnFP7iJBbebbknFH8ivCBhV2MrrquqFkw5BNwKDffgdmG2e",
  "key11": "5LWunxHxbWVyFqLxQWwEM1cNv29amxJk51bJgth1YAn4XtpUsGBdFwu6cCAc8mZzE9y2AKW5Wkhk88MFywHU8NCQ",
  "key12": "21pYHyzTwhn8cK2HgJfM8TmXyh42PBJVa6LhVG25zqCnsi8vuSaEjhXEKLqGd8D1TAcWim1e5d4J4MU5tTWCBP9k",
  "key13": "wnhtY1XCZxFiZg9kDDaDgx7YbQaFnGHPbS3UideA6ZotYcWRg5A48RPBqjbk4UppCZ1uUokSzjGanEXaoux7ocs",
  "key14": "5xdogoRAn5Bk8JELQcw3aDSpH19nbRZ3eF2MEHzpsUJcgVGdHnzzT5EF4m2FxGSiGNDbc22vUYtkocZDrBLHUzFf",
  "key15": "54ahRFTjzo7DpgYWY2ABXrDthuvnK2YbBmYo2KxaDJePUA4mTeY4KZpnFcSESQdD9KdLVfofL4BWznxw3cFujujH",
  "key16": "5X2fQC2pGu2v2LjgjKgBabQTJckefV4wavo8i4cWCHZCLSsKq8ZKevccT5s9XTN58ctcZantSgjhtp6GxBHS2rYS",
  "key17": "JbPwcCwyYtWCbEkZJu6PxYw2e4JCaxMVFWeVunv1sW2cZHBvcQ61uNYQdtvnLUfrJfUAXXEs1sdexjwEFyqN7TV",
  "key18": "4yuErWDyMUymt3d75Rp5tsq8ovR3RcYQ2kPe4aJ8fFvJxqCFSSRzMdWmkz3xjRfx5qbpvFBmoa6op8SFt7NzGe21",
  "key19": "3qTE6SrmtZMNn8QRLf2NAHmaz9Q3LF6PxoHm7aPD7i7VvXwfzRzkPJHfg5fNJVEWiZdm1TUdDomNmF1wkDojot7F",
  "key20": "3biuMj3CfWEyMyEznMBueSCF6Jb1mq8MYFarDqcGAhPeoEoQtVcQSQXKY9ryF4gDxxeTL5NGCohYgngmGx12tyMa",
  "key21": "66AK2aGUrCzecm6PwEwc6e55UY8Wh8CVqtSXvS8Yo7Sbu2pNGvWBQWziaa43CdrcCBSFcbnNt2YaxJPP8czNd1oz",
  "key22": "nG5JVQRYaWDFVUh6qpuJsFAT1gMVSFiShgowCyWNj6rPkqz7y8UTZgyeVp2cAEtE4f8JpZBw82sZb2eHHBMbcPz",
  "key23": "5aWBgc8g3XLYFhJGsiktp2Mis7w1T14TDYbqv38QXSWcErRRiBTfxLBHxWhZqJTEQYVbnLZ4i7SggkAfXWPtCVin",
  "key24": "5Qzkk83pc6Z5N8pWYEhchZMsgHsPpi7EEHd4EPQ44zpaYnPerGd2a9S4KcGDpeA5pyoPUVjV51A5ADeTC13zhUr",
  "key25": "3Wfdgj16opyvwcykW6dqmhyxPNSUCME596vbTm3mUDcjHXrHAW2UKj4asaJ6RS5gFGrZr5ZDLaSwzaHTEYeiDvuQ",
  "key26": "2cjX5oDgZ74HXt6DNGTuneprvtsiUAyAYaqfagAqKgTq76JBbF32oP7Qaq8upTHKVigoB5CEVmyPnfyE6Lq6g9Ly",
  "key27": "UCa88XmJvwVbaUZjkXW6o2LYqrA5hLLMSSAth13DHj8w1RwehmcrrMw28A7H523f5zgaXGuKn8B7tBg53i3zuKz",
  "key28": "58mfdkxFCa8jhkL2s7abhXwAL6vNYoU8jpWBfzJLZjwN5iUX1cKJp6hSAJvQobhchdhpg97JY4D7w8DJUUoBKCtR",
  "key29": "4cWP7ta25Lom5V51c8YKTiGQGnK8uHP2cidZYhCJmbx5fNpgaBw92vQGdpTuDewLmaUP3eL2RFBLtLDxjLbcfakm",
  "key30": "3RqwuG2v63NdDTFCjR7tSBhWi3Dwp6EhH18eBGXms2vpjQz9jrLaVAwwNMjhGVnNn2aZ8ECHpH6cK3NpspXZHHAw",
  "key31": "4Rh6q8xAGZNUi7pm127HsH4r9c7qcxqYZtP2wosZ1vFpCapGWo3jnVdeXRN97XVietzmxRvQ6zGqUz1F57CjnCye",
  "key32": "5ipyscjpqxAR5ztbkTMDan9KUFCuug98oi2EwNJmWyKgYYPkz3BMc2s6qxvagrrEjMUVU1HAhuyChAyK4jKgC79T",
  "key33": "64MASeYLVQPAZN9jERudoJGU5vawHzhR7M8zqpqAffwDmLiYcPDkeC8LG4Kqvq6X6GzofAaa51Ag6N6jPtanQpxS",
  "key34": "BLQr1vjXKU7Dxc1yyJMoj8DAvro4j9ShSeGAuB9BfjkgWjSg2SvsvQujvrubbFgjqaA2i1X43PJLJmoVVNntwaf",
  "key35": "5fMasibv4e6UecevLdE1xpomwWSTRdSeSh7kN1Bfsi9YcdYozMND9izccgznYf26kVDjpmc3JzThD2VwCzapwtn4",
  "key36": "2UrdeNWqSgVBZpRFptfJ4bkTKSbALpcECMYXZT9ke21twRwrGHfGk4sbpPsYVGt2tC9aYnHWHET958AUMrEL1FVF",
  "key37": "PGMDWJgGxTEfPZ9XNv8WtMaXzscvrNu94G3w9DndBbprx9Ad1tGQE2hwtskxkLFPEDQH1B5xYJ1rYVNbtK77NkT",
  "key38": "gARMFV36B8kUSMV1tEHWw2F48GeG175QLunTbLLshctYUxo7QAa7sTVQQRLiVirxYz6Ciz3hfu1EGaLf7ExUFc1",
  "key39": "3jp33gjUD6gusZmNACTevTKoKAEtoT7YgRUooX4erHVmSTT4899Jg8PY9LndK5akf1Z88gaMRdgDZcNSGpDNfFHx",
  "key40": "313qEAPKhvCrzrtqaXAiCotQZGqL4BFkkiukKGx7Jw2y7BCr2GwiTNE9u8sQeH5yiHMoniwL3bRrQfnULTM9nN6r",
  "key41": "2xqjNjkKzLJioUKQvfXYZpnu2gK5eQiQggauLMkiybrrHB7vQjEbRFBNpHxqWePttSHYXnsf9q5BawWpYDykps5o",
  "key42": "1vdiHGUL8z1BwWYKX9Dj444Ug1fTo6oedYr17XGqixMEmzPqeCouFfPCmAb3F2M38iNqyits6EcGq6AVjKX4qiy",
  "key43": "3vm61guNQHaw1YHmDuTN1Jua8WaY8sx55Znv4Aa5LTsNoG1USkLVibBrNvaCZ2kMJ6MhGTtehbmf1SjVfR8xi7Qm",
  "key44": "3ZA9kGwR5s4tttDrCbKadLMDQWVUzh3KgD1rMnwxSwba5B4kyspN3ThDKV7CYLaoYCUx9a5BjTBkHNg2NWGW6Atc",
  "key45": "P6aVfoDVEWUwuDSNYomdMbLGghjGEXupC2vbyFnY3us2o6heBJyweEsELvaMRRtSa7E8XTFe9dm3RKSyLV4DoRq",
  "key46": "21KodvFQu6yq1zoVpsfE8xn8mmSndcWUuMKtbjtLajYTu6Fp416NDXQQKZekefN3xJrVeL7mMi4cEVDsNTUDRYmA"
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
