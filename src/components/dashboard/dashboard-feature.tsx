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
    "5Kvr2BYF5DupLsD2d9pD92ujSsXRzLTN6qsiXLUa58fiQGAWEwjBH5bFmt3Xzc4F7yT9HcUghqYtSiA97i4rg8HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64kxUE8p6NdzXuWRzztDsBAWr57eWG2K1HPrJYtRRhssP6RdLwN4ULATnSPTiATu8vqGLwEE4mi3wsgYft5qox6M",
  "key1": "285UhwzLH7SMmn7rzzLxNq3D84kaswD5vKRYUFqxpNw7mQHZFEA7S5pv9ruhR18L2k2wt79a1sUhPAS4Cq838PC2",
  "key2": "22RGDaPmvnCyo9pWEnmHysjkY2SqnrEBb1F3GsfxynqK5a31d1Q9i4C2JQZhdM6kUcPfWVaHFMzSHokvNr9aou9U",
  "key3": "2DCCeegV1xF7Pos8GUxukAD7CKWYkRLrKnxhdaku3jiYmpTM72SKuYUeGXH7c4Y5RpoYFuHCgfoY9EX2J5GNZunb",
  "key4": "3Bw6ug5QiRkmRtg6MhBSUXCz1RYqt1mmuAYS1CNGfgBKeQFmD2cMytnVpNX81kKqUBqTXUgnXrYLJpRuU44UR3ZW",
  "key5": "5NNpYJ34v3S67zbWuA2ANnhpeJVfXJGKq6k1MzU5yyrhEct5byzowrmiN6VzA93EACMYanyNLxptALGkEDRp5WfV",
  "key6": "3W3MY6rDrsy74esqb3p2cU4stxpHqJ2eaTfTpeRjunDswTcMqfydwFGRbkErb347dWQdvU1DffxaaJ6iW2QUqYfa",
  "key7": "4WV4UqG28iwVtaLhmruEz7j7kRRjAGZTBXvj6qtDDUnUbMnWbMk8kgHPad9BkE8U5ehWqR4A6RxmWegQrmrwzbGu",
  "key8": "45fYjd5C9oufxnKGehXgmiKf6dhUPiiSMoDjjNZrZZpGimxhRFf1kUgrdymrPK7P6qmt8UuY5oeBH8BxT4dLC7WS",
  "key9": "3VhkkQXeAmE14YddGy9AhnHiXHo7hKRTnuywBzrgQydDb7utCnPLqSZpELhpfpCq8HhsBJEW61yskEA8kNA5VXXQ",
  "key10": "5o7Zebj1YgpSq6uizEUgGAqFdKa5W62hHSM8LqKYAKsLWSxjixwGZKMatkgcvMpQ9KRQqWd2bAXTfGZUA8zEWAFS",
  "key11": "4aDbueSVzZD5PfWgjZahyZgNpxb78puBiJ2CZShajqbefFwFDJm9V48GfU8gsE4Lsokv9xpRAqWhDgG7pLU8p5fQ",
  "key12": "4XHfeuaFQBGgZeuMYeiGH9JkTayAzSHxJuHXLcqosPwanhkvzvaUJG69Z8n8uj7ijGfoQARY56DBB7ctN8YvrMYh",
  "key13": "5KCR4VqfvBhpw88Xsvk9SMateXa4V4XR41fGF7DoKZgbjy5r8nAimpv6D8miBcB7ZytfxntEeWBEymuADRC1GuRR",
  "key14": "3UkGRmopHBVbZ2izaASwaPX4Dn9aRyye13oixuegGVKy4qSKBHUYyEYKUrYffh74EkjQtw4k3cFJHj85fjC1iqx",
  "key15": "fnF24CLTzHF921s9A915iDZFkrQwKRpztdUsQV3GBCFDauQV653AV8d3RFpjNTf4nQcDgKGCh45vi5LsjwHvuL5",
  "key16": "44t2aHoa3ssmWQeNnowvz7i4aMnRjzeLBEtoCtJz8tWVGF227HQ6WCqQiD4634NyT316Cu3E3iuBWD1qD4CcLnVz",
  "key17": "4SCXoNxW5P7rGzty4wppc3MJffnwcUaYz1qtqJNXP56gRXkBtuPEY17dGKLwzw2sZ1vd7qoYa5j5xE2WU224tN8r",
  "key18": "3nG8abGbVzqBD9fFXU3UfBVty1s1Xq19ftT8DTXsMcRV6GwaipsEy3UMWQjyutChUcv2bwSG6Pe6LRxN4XDzUavz",
  "key19": "4WgtvtPaTkZ8ZZKfkarUaQLWq6LJdaxaW4gzQdUneT4E5tbxBQ5azLHLGDZpsAxxVscP2pmb89fq1Y75mQ6uZy4i",
  "key20": "3KBAjSAh28oGShqEJhPa7mUdPMbPYYYo9Wo5789LX9XXDk1994gSVemA2xKwbQu8PcQciWL5nVg9Nsur45ewqQJj",
  "key21": "NLSDEcM6APbgBz6fT9iSQMh9xEc3rWqPPiFNZWcpNAW5oFsoxede9PXaTV2ye2ttBxSQYYmsRuZDbc6dH9TviXE",
  "key22": "5wNkpcECMEiRtFszbgFtBusRbRnUmu1rVPWEio1AniwkyyZ787LQXed3ryFKq6wEEsFC8iqN9aBiLhHCdhPhMC2W",
  "key23": "3tgyrFk4t1peipGsgWim5cCnMUvP9h8LYkinP5Rpy83WNmUFx2DW1PfQEKy9W8YCuExRBrD2kMxKFmM5LHQGkmKs",
  "key24": "4zVs7qFrTzff5ugeBUkprrBsZoNnmxahT2e3RxY91r7jdCHAfAd7EKkDqwSUE2F25rdnXMXVvWwsYc4JhwvpczRn",
  "key25": "3uKc9yM6WDhTKruVnzXjXphfbx2tyvJ1hCgv8hHMmWLWBTPYey1bY6ZXjn1sJTTRi3YFw8bz1UALQRAuemCXMADh",
  "key26": "4EVzoU5nqYyiCpqu3cgEK8kFX4m9JrFjwk1cVHJRR2FMUZLxGuM22nyFDw7u4mdEzT9Y1tQxkX1hFEZ6hy7tgvWc",
  "key27": "3iPUKWL5V5MJYaot6d77Z19vyVdsdyfkZSXRk3qFzwTDJbxcdpQne5QNgBB4oLU5Viodt7rMHSGaDjA7RumeMgse",
  "key28": "5xa6rhiNa2cTqP1wZXZLR31FLxVjqADnGX6Gxq8vYnorCMyYww43qSMoKsSAFHcCFxDEgqwFiDqHTDvj2kd9D3BC",
  "key29": "xGJYpJ5RhjNSZiFooKRLfC8JghHBe9qNL8JPGNgvAFMrNa21WqWKVbkhJN1g7v2Kd7JbY8ag9kJiTP8vEvvuwkw",
  "key30": "3KXpw8ENbQAw9EQ5Vkh2qUJPUNVZTc2poRicAQUzYTFpghBUDaoZRgGRU82TvF4745uhuhGEeFtUEreQm5xMTeWn",
  "key31": "4iyvZJxwzTtzspvpYfUo2qtcV9ZggDNot13YcCKVMxRrvMq4GDYMVoNq4q523pABkZA1HGDBz9CBQbuFooq6C15n",
  "key32": "5LWN3QsVZJhNhffa4852oVEbrqggokhgcttWYT7wrEFpFJ8TnCnL3BTiVPpgKsMinUXmSSJ1sJ66tbuLA4HCby5M",
  "key33": "2D6TrTzTqDhRsCB85TPHJRsFGDMWQBSTWCr28VpnvVdoEuoM2d5PpnUhKntWN3uiBCFFjawcUKuLFK1coytzVffE",
  "key34": "4SwjXiFKBe37D4PnpSuWNGkmiWKAR2PGUJzne2LUfjj4mb62UK29QK7odbirSSXogHxzpskLb7cgM8i26NxZNLhH",
  "key35": "39souznp4VL5ov6HqggcbHwXq46C7Kqwmj8PEFxf8UdZiZMGMQCcTBvqJdbF7pg2qctmNfx3EedHdvAtTgJZXeVS",
  "key36": "2uyxDqeuPS5PR1pakZqha2hUwFvCwZTqFVaXKX98Fvvrwp6p29CRDVCJ5UgDYytFMwWa8dC6XJQVcGjT77yh8RJp",
  "key37": "3KFNmWPWEKWjAvarNBh656K6mm7YMpAnY6wzhgsxVAg6ZkHb6jTrsxGdFiHi4Fv8ygdxytRSRT4i9W2D3FBDngFH",
  "key38": "2iWDC3BSMrhPzSsrdEBgVsXybsjEQzJ1jjarYxE3CnBXUzPNHEkhiTxynTFXhKedZg6gXJfY1cULybTN2nyKyVPq",
  "key39": "2D5XMqZiy9dBeXSzdALdPxk1LCZYcRy1AvftbGucHEEf7fBFpvYVzHoDChUYmpdFiH4VjkoFCrHg1z7m2RYBzWG8",
  "key40": "cAj9cLGr2Zm3zF4PQN5qje1eo8cHh2U2rgq4WCWmXELRpCksCv1vMMXB4eBRQjRyJ5FXRjrPVhZ9D94tMXWCBfD",
  "key41": "5cVo8Ln8XQwJyBWg92u7jtNmz9DLB3HP1UtEGLzCk91i1cAYRGmxrj5uuSG5mGsoR59hWtGACBWZP2hpc1MsigEP",
  "key42": "617u2XQMjmYfmYwvQH1dbiirDReZsh6pnR86fz2sKtAgtLd532Ws1XngnFdGCivU8mgT9gXkGiYvx3gZEzZGwAtq",
  "key43": "41wK2yKGeCmtHMdBQPrGyzDHdMygyzr3udB4My8UNHTFwQDKLHN9ZYSxzPe6qrVMzPW4BAURoT42j9EhZW56zykf",
  "key44": "493epaT5bmiv5ruLvkLJ4GgLQrsJ6YqjYdpwN8Bc4HZXtUR8kLM2yu4hT6o7K8WjneEpsz1ksqsUXojfp6Ndutey",
  "key45": "5nrbeVx9JMpkJBJDSGYV2kMqwGqRBWnNKX2mo4Z6AUTYcv3ucPvWELAvMazqCyFeVxx7Gcb9D5y7eZB6vM4X7jDb"
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
