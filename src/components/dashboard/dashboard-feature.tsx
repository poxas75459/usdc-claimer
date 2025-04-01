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
    "3AwvPB6ohXQzoMETtLXY1CPiB2XKAgihsRuntuSHze7h5JCKh3rMbfU6tjqYeMDZ7HzS2xR7ncpzJ37GCeS2RJJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Qh6ZyBPpPeL3wQW1MSWp3akZgSnj89NhhikDspa88Zuu42GfgDV6WSvyozBt1BgQUBM4mNWhJYNQXFCZE1Sgcj",
  "key1": "2nRbHxf2o6Jwt2j1ivXfBmfGrKgG4G4ajjyVNVz1eiAUcH5cEgV37Djia16YZ6amyENgZuFBuArN7nnd2HbEZrm8",
  "key2": "4e4qHCKynguyQbKusWu9iRvmmDNnDPegi7k33mVbsNdZibbKPCHHEPKbNyL5xX3PtpvhCfFxtZdD6mUbHJXzjfae",
  "key3": "3Pf4J1bo2ed6b8vjXkaryWWKchm6XmYc8fBfWuphrxm8BYffVtrTxXJJaXJjfaeCwbtAM3MFidt8Zk58zwW7uhBE",
  "key4": "22WZVpFrcKBRwPPzspUQynXRMZZoQSfZoa9hqeWNhEEMgCvNbVwZtwnTgnco35eGYcoQW3gG2mdSJAvytyW5rmJ6",
  "key5": "5stevsWuWyVUWmr1cPP8qg2h5Xz7bjW52U87CxTmRcEeMxab5KFV1XW4Cvr244t5dCJqruvvuLpS1cPkGpELkmJ1",
  "key6": "2fUrgVdNcVLFfvW27NNTE9v7ngmfUxffHsd5PzdCvGXwtM9ksMvLqmREh3Y9iAodfXig3ok7SVn1RWKyStKN7puu",
  "key7": "5fzzGTJ45bQnYBvYbRj3tzZHDxhcgDHjxSiS9k9cXniHnhY4CydhVtNshSCXxBZzFNS84aBAjXe1vvVNyRyVXV6X",
  "key8": "655YrvErXBKnk9V48jEeXrUXbncaYtX7MXAxgzYd1A2tpwAjKmvXquzLD9UM5piKjgAFLsZ8bZnbmxbBgQxV9FWA",
  "key9": "3J8wgJ2xdxepsgx6NUychN21GZ3Lf6HbdxBLhMWbLEd2zw3MAeixpxin7ikRF8XhSLgBqNebkogxF2aCG6ePjHf9",
  "key10": "XtAyHa231Amk49pRpcaXhr7MEtE75TRByDu4qgchCjfsrFVaGPmT6oFZ2Z6AbgZuycjnp5aA3CqX3x2NesmnHq4",
  "key11": "2n8DK3M45yskHaCvdMHpzcNX9nBgtAevkCnP9VRfaZ2XBgJRoN574Ctqu6iZkzA84RXobdxLNuLwT7VK1WaU4F3r",
  "key12": "3YYrMMmhpjU54yuR7vp9fcu2nWc1aAwsbQBxnqcK79ZNAdqD6My1V2KddH2VPNmjuHmwKVLr7zBrPKX3uZxfqRcc",
  "key13": "54iWc7jpvDPijWtUbZj4NYP1kL6yYZ4KKVnWPL3FeJpnyjtHSovXCYnrwPN8uCtDPmDdiXEDiGExGdpFjxSW5KUg",
  "key14": "4aPJUkfuGSmkQYeeHQ1xk2NCEivZ4xuuwohe2yiBivALKDAw6Feu2VQcUUx9MvtbxnSmEZor8fGZFL8nvyqvTH1i",
  "key15": "5FFDEgE5hUrzEmAvJJ6F6K1VFD6CMHc3zU9av9f93672oC4Gs2AJokSEfbRaB1mwciMS7tsPxLLy5zNrmGALkydk",
  "key16": "8s3QphEjPY6h6ViAdp4SBYk4idTDKvaU7AingQ5QE37ytegvWvsAizc4mhqJUM9xVjRWqdD67hqcvN9jbSfs5it",
  "key17": "8ob9pBfXtaSqdWsaZJSW734uzyS25BvwCYxk9HW2gzgoVNSaXnTPDGTdMyCRfjKCxFGc4CK8vVSqoAh1qPinwYY",
  "key18": "2bq9XbfE4BAaYS9dpWCodAabCkE9xemzEUUSdpLYQqqAvUxnSCgxe32kA6iGiVTkdPsBJPUzgEziWqQtzZ6gNgMu",
  "key19": "5LiWpFbvWipU8ZZbDLBddXDYWdeUfxzDXSat9SE4hSdTcFC6EgR1RJxAEwPkj7TKZnMXrbMVGi2wy7CinKwoH7GE",
  "key20": "3yyzsCJg5AzYLnt9u6H4ciYuWFSTSpofUqDxV59qku79GeCiJtivBzfCtqdgyxF8fNnFnm5R7P5matsiaAetBLpv",
  "key21": "H4MgV8F1W1LTXsmjqMcN224Z2m2ycshLp7iESCGPdqDiFaPbNW6iv5nqxdJhi2xJXQxcCgJivuuP4YXZDQnHQK7",
  "key22": "5q2s4MZNNKqiY1UXoUEwQ2W3JTYQMbcgmdzeBfemQHaEx2HMvExuj8HwLSNKkB7ejJyF6Q13Jx2QMQm9fxU5TUpY",
  "key23": "2L5H7ECKKT6tAkZaMkqbEYYxVmMbqXXeCcKPibzuXnhp6zLpWRKsm23pEVTHKZGLtBDZSbQNwkkiwKux4ff3jmTg",
  "key24": "33cVUyaMbCtosQS7KevHZQpD5CJd8bn1oFAtjADsFHUfc1Bkpeib2kNcrwFUCyGBNNFYy9bs81YHEb2f6jkDpPJ",
  "key25": "4a2WZUECH5LiqgCihYSh2tqWa5p2EVVeoqiJiy3J2kduEUC4f24ujAUhfHWCV11TQCX4EuQedzUNDZ698rWLzgmm",
  "key26": "2nMLwVkNEQL2sVEkKjbg5VHSCBTAqJ3Drn9EijTN1t1V6H4inLzxJzy5VG3XcwjrUiNEYyZsNKUTxZerRN4zJ4Pk",
  "key27": "F1tSXYkUXxwCGdiFFb64qHycqx6uY3VyiQ9FyutEQbwncaKKeaDg1W25xP6oWTdkBWCiFsCpqoBto5hnwFT2k1b",
  "key28": "4v3xxc3iGSY8xEcQBCfqjU6xzEwAmhRpVLkeF5w6ncrG3PeiUoMWMYRq9eC5YA2HoJaGDXHik99mxA4pGMvVwPdV",
  "key29": "5dh3122EiJQfBttJDNhv8cJTA74XhuMUqWUMC5vzLNzUm1a4BsWjA3mWZiDGd7nwz5V8q9AVhdcdBu5QKrcb7q5W",
  "key30": "PfutKcYVXeKUh9UpPWzYSPnSpN3EVVMNm6iELwoQXYhtuhade5VmypEoGo4QAjTgNR2ZGzCMHRHjFtN6NnahtED",
  "key31": "4nEu7rDfnpfzfbZxu35cXszpnmpwJv3N8meeKxnf8FHgeKCx5R7M75wgFdP66FrSiPwDMdHpHCbqqyhYb46ySnXU",
  "key32": "wrUvczBr64ozijzUHBwKiJXmZdbfWFd2NCAPnZs6TZLBoZjEVW33hXQzs3ZkL52wUbhpbXWVKc1RaDr4dyFFkGJ",
  "key33": "2kaZj8jN9SP7yikzQwsDULqjgmDnmPm9F4i6iB5FKCmqA7t6UAKgiGeCiFXghUKzL1w7qLbZmwiWjjHu5yLXjkjg",
  "key34": "5cAY3owJM9KYraEZSH3szcshngfkz1uEFYPC4j3QDtEE8zqfCLKEaEihEBYry8fFJ4bHQoDJCQG193WxGVfNbkAN",
  "key35": "4bVvPJ4g59yDJ1zynuycrPkiN8GwPGSVeeUg9SVEYq8TvmaFPQqJWAbv5BZtjUU3dj988Vuvr5hMhu13EJ272nTt",
  "key36": "5sBAHM827XTFJCnCun4eA86kynw735FkWY3WZKbDizLChmU54ogcaFt2SFssM2iSz7uwYDC1ghWX9uC2HxibmoMz",
  "key37": "3Q488qJaUktCyUpMU4fAY1KtMLaqqqsyB6u77PSXMEeUZCy7Ax8Bax3unhz1MnyLmLbxZoa1kBYbURQpuZo3ZqU3",
  "key38": "4YiWuiXAoYXngGgiGwuNyN9EovxZxexGC6KdvCJWNWAav3AXbNQgjUVBT9w8MC8egB8vunv9vo6f1nct4Xb4QuhS",
  "key39": "2a3gPPxguJ8CiFS1x14RDjTYVuwsBx4k3SPcrQ2Q4TnSQLyV5PYRvUYADF6esrR5n59dEnpdz3gv7r4MbPnKMkfa",
  "key40": "63EMXnCesJXB3Hx8kVvCMSsrbtCcFoMLPPJLoUVo4uszvjQWvCje5d4VEz7gnTXtZnzWPBL1vZqPeRniVzEo5ihk",
  "key41": "39K8tCNnft55WkALRksRZqwWkyvCGKq3LYPAqFNG6GBRDFewrDwQ54koz96QrkjKSevHekHLfijcddjovHQG19Ko",
  "key42": "52YtVhuQQDVEakNZnkxaDyh35n7272GEHt651NpHd7brbMxSr6V14B66841HmZczpLSgkVTAMpuY44z1aYo1YY9n",
  "key43": "5HJ1HeK7U1M6Z4rgCmc2Pg1Bu8t18JZ837YkUPZmJ3ut6trH6ZW3MEFet58LdBy17oypuBmcdkxjGKo3tcadGKGn",
  "key44": "UoxwAkmc4ncjFNEbGz6cvPf9CzaW4hvnaGkxbnXMm7porVV42zHxVsNuCnrNtfQcrncsYAe3DLUqW7vDXYC2i86",
  "key45": "2xkaS5kv4TjhFsrtxgSYBRCUL9j6VAA8YAmJ7c9DmnRTMCeif4eteZBxDji5wGW8As8Xz3aVsjBzfZf1xZTVzZz6",
  "key46": "5cChfdK1jmmLJYvj8sCUdGugYu16V75SHzf3gMCysHr122znG1VuURG7PxByasUdTJMbS14m7its1pCq9TvJXvdE",
  "key47": "wM589Wsh5TT2E2EzyuUsC3ycxe9YfPjCXd818SzaSKigLx8fhANo2KQF79P39SzSRf2ke2zt5gsrf6hwoTgmuQx",
  "key48": "3irz6ktJojxcEChVqqm53fFcYdETPfsnF1aZhWt57xmxKcE5eYAohmg9LF1MrAbQhmRaNyT9E16BSCWqJtb6iXus",
  "key49": "yBk9cDj44CdvWxr3v3YeJbJPLNjr9k617314GoBye3Mphx2QZsjBTMNa6A7ujqrHRMydXYi1nUhooRo9efzv95r"
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
