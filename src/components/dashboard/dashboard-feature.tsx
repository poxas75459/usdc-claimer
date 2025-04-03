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
    "46qYzTUVKZ2fkv2ANj5mSC1rwZUy77MczwocqVp7iQT7WEshJeSr93jaMThvhMMiP8CXmYhgopUiYwBqb493JzWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VHPsyZQ4WxvvMdovVwKnnLVi6oAxVSEyKtw9Z48mRQVu8UEMQoR2FvYBVc2fqBRckRNVQoi9HkXct6RbsVueGU3",
  "key1": "3yadvg3NAmvRWiLTMWMuGuQh6it8Nm7CdjwXKnYwBCTz3WrrJCG5bEMpbq7X3AVbJUs1yGte7rU9YRXF55L8Xxxx",
  "key2": "2Jdi3nUuHp1yvRv3LVGJYusabgz62y3ciUVTdSZsFT8F5bgkVnu6DEx1Z1JFoKBciAoVJNC8gfJp9F355AwpgSSM",
  "key3": "4T6x5Ay93r1Uip2SaVuKGAJF2XwhawCWwstp4g3efDYAZkvtCi34rKjNGKHEZbGt3xrDyJM4to5z8CfJiSpKzzo2",
  "key4": "5MzgucZ6TV52h7oVFbZiy8b8ezL4Nvhf1QRF1Gtkvf4FYSVbSaD6pUWx48LnqsMuagbkkkNCuafFzNGAKYgJwia5",
  "key5": "4N9Uyk6vdUvkpJhq56GPv7cdiKZ1EttjKVmycVWLhDpdHr5uWHCQfKZKEpxQHM4ivNnxc3jQXLJZ4KQ2LjAekrgt",
  "key6": "44zmTJMvKL5KseZquwTBG11BxNPRrAtk1g3oGT5ESwdkMjwWCYCgAC6eYP9WQrq6E68pLZuTDjNniwqgTYnStCkZ",
  "key7": "2um4uryUM2oibKVCyiU4q7M7TyKrprHvH49WfUqZ2tg1VGhoGd19RjXZbWtSC52XzPSc7wL5xdsPjvZ6NLR3HVzz",
  "key8": "6369G8Fj2CoR2KH7TLg6pzttUJwYFBLkUoZW1rSt2hrGtcQm367bq1aarBHRtijVu7NQskL1qi7appi8hCfAKLeF",
  "key9": "4ckxEvDe53mVAy6SX6G2mmxTHKaY6s1TrQJfZwpaYPw3AFuZkD8UVj3qEGnQou6wayZEPFWMzYDniRQJ7kEkAWPL",
  "key10": "5cLnEeEdr9b6G2M83JPJGVY2wB7a4rgLVBrKAMqFaotnTzSNXYGWfRxaxG6xHKxNgU4yrain1FebL63Gjehe4idf",
  "key11": "2NcYGtSaqdZvWdTPKCxngVFrv8TX9E833tLub4cciygQU1WuZFsn6dzBsR7HWAnQzStKXog6S9psLWaMRu817jfe",
  "key12": "2FR2vfU21TvJM9Ez1iyC9Ex6fVuDDBVRmprZNXbjQnHc9cSq39vq2RdJLttN4Jh9kasH5exsotYgEtzWW5Ci6gez",
  "key13": "2wvY6oEzo8ho4af4tnVZnQQhJ8LqzWYTVyiJQkoVZ6uknXfm26EjPtsawtaGZXt1TAh9cEEw4JpvkA2jcojq8kro",
  "key14": "3ftA3apd3xoZQAZ8ZMc31ABaNom4Hbtjx5owZoR8u2Z5Bij2VdMzwKYPhCgEggER9WgavfpMnbbpceA3gE66KGJo",
  "key15": "3oh81Bhe7twUcLGQuzrTYDwLLctqL1odxPgdtGRQQ17j7yKwYj8mY117UUDwKYPfhd5PQzc3kmafTrPb4FsTmY88",
  "key16": "3ab97xjGKqzLUC4RvhBEyQzGNi7tjZSbe68WZCJsfUbqWaeZWR7kZA3TPVrgPPSNZ4Z5oTJK24vVD2e5JdejfsvY",
  "key17": "47A84s76ka1Y7jDXCoYXfZdPR9VmZBSSJasPR2Nd94Ypi2QNeKvTpCjKcrPqXGkNB8Q6kXpH9idsM5k78xKvh5rV",
  "key18": "63eCLndXLB6ppWzDG7xwC5ztR5S3X5KyVX5u7yybMHzFuqtsFQuWSqGSTrf1FsK658tYkLLDDgMkzeSR7optLXJF",
  "key19": "5D8cueiFKZbzyQEKk35YukdYhk8Skss72jeeAf1B2mtm4Gt7uxu8rUN5Shdmv8zpsZxMapi43U7Zn4pKivQZmo34",
  "key20": "5e9V19XTXfBxtk3WtZtsfEegXTrnXcu5wRwN98KXteFvPTZsdVDAPYekYjZ4R7p3cgDfbQTfWAvFDqUpdh7372yx",
  "key21": "2ZooaNeTmCa4Syb8z1pCGdKnh6MNtsJDFQQzywqk3hthH8y5HZCYieVVtKo3Q1bELFucsT5p3gGdhU9M5e2eQQT4",
  "key22": "4RBgagMgUJ86ZGiJUuQSiPu7TvXDTcwxwioZePNhg11hGpKdQT8d6o6CBn8KwPo8jtLcCY21BcZ3d8JVdpMXkUGs",
  "key23": "XT7gtnmzmD19XHGGDMNsGbZtGrVBupXvqw6Jfm6r4aPsSAGa4uzr8QRFM24Z43AyR3rSRukRKAdyvcqc6cAYLfS",
  "key24": "31eHTtrpmZ678HeGv9KQyHLVaErcdz4vgGVXTrw6U3w8nFsb671ePbTwKdkv7xer6o46a3DBciWg2bumWJvgkAKi",
  "key25": "3Y9ZeFCLzwGmtzJaZiCFS3LnmRhYRbSjqNgzVSMdVwPhuQwa1CMDT8NMJ63qGv6dP36yqEoQx4xZ2VV3SbXqrxjy",
  "key26": "5xP3BjzcFsTcz7fVwcWWExcWFESQbm5YrqRRjzbyo4uqU1x5uXknUW3zSzLy91WjZpo4STG9tZhyjhkswXo7GMJ",
  "key27": "526vSWVVBiBEa7SAGewigS1hxwGExC7vV1ZiigtfGMaSpAdTz4PYtAtUqyfGViMPBteLS2df35d5UooDvEsp95Be",
  "key28": "MdcJUPQdusXZV2SwWfqyurtZ3v2sa2L6YrrdnwY7PAJbG8hHGRmoWa4Mq1egnjH3vxwGw8HtUCN53ENMQddyqNB",
  "key29": "55DKhFQ83ETbfqwwkwiMRzGMzpN4CbFuq7i3PPG6eaf88tx21LzdFW3ZXJz13dkir2FkUq7LR1w7y9ukYGrZEScf",
  "key30": "55RWPRkjVsoNLwusqtpBYTqNerHCjKk2bPhG472MfnbiH97Xiz3yce655ULppgigTihFNZh37yTrTG1U6LLFiWQA",
  "key31": "2qTuW3kDhAeGbJys89xwDK3Dxxvw878ws2L29ysRaXEbjog2tM4uRLVXnB9ajY73rtREx6CiadhPuMYJGBBF8v5J",
  "key32": "WZfzjVhyFu5CnmjBxLcPQ6goa5VSGdsDj1EjS7u7fdcJBouAYihxRHo2S9PSfSj3jt2NoRwxH1jPSKEP3RUnywZ",
  "key33": "299cLVzqwRggCk2DkkoDqrmdJmb5qgTUNDnDyDCaDmT6s9q9Pw9cPQSM8HYwuGurZNSTLqZDRT3vbDixyPMnzSuk",
  "key34": "hosB1LJEnWk1mWYb2N4qG4Q3vyDgE15FLrRn7WeFNXV8RKhj1EF1876cCv64THxeikyhUSskZmtbQkaiHEMaScR",
  "key35": "CmLGP2n9UjnB3uNV3jEj2eZXNzNQmL7DsQRFwJMAsMfWavswzni7UvsGDSkFyT37Doy5qYsYL5aLQYsC5Enx5xe",
  "key36": "eUudbzSJDkzVCKjaUdWbdVnibcCCnB9iYHzi6JMGCNELTJFzXPgXg7wmvqUhbPF4gmDsJK6JUbYFhYcBro6f2Yr",
  "key37": "3kBcN2z5SbEyx8qYesqouxi174fQHACrAnnmvhvV7NMesV16XeHeSbrs5jcTwtqb6nmxV4tAVuDsJXDr51wU2xvR",
  "key38": "aRSJrZYgWm3MVhdZDWiAdSmettz5amsCDty5CRqg3brujYL3XhC798cy887dMkm8QkbU5qqNfLJASqa6XA4z252",
  "key39": "3hLYgvw8rmNnxDLZ2BLNh3oLm9LHZEjHLNa7dytfNhJ4ExysPiP3kAkxEN1B3u6r6HbNryRV264VaQ5AAKUknaU4",
  "key40": "49kKvunh71xoCVMXW2orULNLLrykdr8TWChdxYndjV5SJfPq9G33LxLweSUWvF7QBtu1dmLPnEAZQR311N2zzmrh",
  "key41": "3Vkzfu5Baoomsb48SdFHsAbDGY1GriF8TUQALXJYxyUsdHnc17zbtwfEtUgcVvorRcBcCBHmazRpuaieUrcqn6Zb",
  "key42": "3ZyQjTF1bW48ihWJcYRb9jMDbf7akY811JM8MeWoVXqNoFYPd8rUXtHEtpxTE5wDxfnKA823nwbnnSVe4xCTUq2B",
  "key43": "4vKAeizHep22oeZx2UNEvtkMnhQyXqbYFwtKFwMm63SYzjMAj67g9a8mUjWmY5z5umZJzyHonDf646mhHCwJTT2F",
  "key44": "2LRhv4Ub63sBcwDH48dTQMssCf9JG4ZCB62ZC4qqUikZ836DkeSscZcD5JB2JGDj3TAKxLfYntk2a15ErNXgYBWy",
  "key45": "LErgopwuVGJ8bVoZiJCfP1ctNnenrumFkGwzxiEgvukKfK9GSGq4zXXoTA7NuM63geRnNXRbTbeMoMpCXojtWtZ"
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
