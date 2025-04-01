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
    "27oCudobXivX7GBHfQHtfxm4PAP1W6iWHdJfwyLTgg7nGMmHTLHwDBhCr95fQe9Q7dTwBJVvDFvcZ8gMzN9X8ih1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dauSbczH1AwUJ21act8UHcQRKVhoMENr5igdVehJDY2vooDH3J3khomREofaALo6wQJv3BDg9C3qN55UZaSEB5Y",
  "key1": "29VdAJgxC4NRQ3xnhMigAg5AgzoTrYf6UFUuCM3xK4M2w7iUfzrUDy832f1a24aPBjTzAjmXVki8yDtEDZ2f8vU9",
  "key2": "2EAmw7pHPQ9Vkat6v8Bw4cETfdWiT5o9by8JYiSyGyFLpipdTPCwu3zzUWZ5JyBe7XVV75cDbFhFj2KxAMRctgzd",
  "key3": "3q8WBmDiQi8ZksN6xbyswCCNyiqoesje4PcBja4h9hjpUECZ3A63vWLPsCmhSBGMKD7pRjco6sHzxDmJmLHBgyPu",
  "key4": "5WVZVzeHS9SNSrtn9zELkjw1Vh4NUYTRY4wcq7xLT3DAenR2ezAnN1JS3qLSu9uh4WGoybVeQjXowHDjJtAZJspY",
  "key5": "55dvVr7p9yBz2Jnqtdv2qtPKvm1wELVahYkCxrDSnfNYsTbqRkGroU4jLUGdFFMX384ymPEh5bquV2gv6Wba6bnF",
  "key6": "2AtT3sjkTUfiYgSBUUNhAaa3UCidHMvMQEqDDMSdyHX5WhrW6UdoYNL49JbzmrJZZ4DHapEJzpA5e7gq5YLvy2re",
  "key7": "tL5mgpzqVEj5c5LhtcneN42zaj5ZaYYbDXtM8n45CrLp6h3pGKFaKyshRWPLpjWgfCjjKiVmqV7opT97zDGotPu",
  "key8": "3wCSRt5Wf4CVACmqmpe6LjzTrT7SYUqgYsbT9graA7UhQ4r7TsobSV3YmiAz5n2eFUe1WufMGkjPJ5obLNfP4DYF",
  "key9": "Ux5BDYcMf28UK1MFvVpNiJ64HpYeNvnpfdPs2Jz21yXduEL9u6wWdakG2jNarMELPPkfXZpyp5N9aox64rCV26r",
  "key10": "3yoYb3FGqkwgXjQikdvuAiz1hzZfqxAVQaJZ352f6XAjRGFEpY4BHbMegpG2bCteEXpWkiNkiviFyVxzvmziFvX4",
  "key11": "59748SH8VVuVCn5ab8urykF66B4kAbim9yfg7mHCpQF7X7xYL3rV2Rt7eBb83TG3kRYgbKNWKwTTXRrRr9TzRjFs",
  "key12": "4bN9W9Vawz4TCfL3CGJNu6YcoRDDHd361j9CQ6MjFnhMG26vDyTicm4L8GFBE1HBJZFqSaAaCUCWYNgHdt3uLcVn",
  "key13": "r62iMYM93Ym2ZBdNXfuCGijMb6PHoj53qsSP2GDEjKW4LsfndnmEnSrSptyXnDakGyDn8D8s5EqLt59CghYMXw1",
  "key14": "5Gsufajs8kCLyNdFhKQfAfAzqvaYVXyTQYTPBWZ57nTJ5MDn7x1PskiEbYKoJ2Z2fGxQcephFx3xBnP8bHVj331K",
  "key15": "2kR9adnwLpbdaTWx3WS4GvjrfWFLkoXnjsvDDb68BgxDC4iwuTBNHH1UswySuhoZyEMvFpuEeWdPnGN7UvuVN4Vz",
  "key16": "5y24TSTU8Kkjwtr1McNJRCaGAcJDX7m9gTR3irqNhUxZzcSMpyGWgRXhFysmwgZZdvSuFy8fhNfjLcG4ZX9yop2m",
  "key17": "4smFBC13ZA63791HRnVkvbZ3YCueFcVy68hxiN9jaWLYEaJJZrNjF22U2RWpLYZP7sS3jx5v8sw4uxa7e3o6wesA",
  "key18": "4jifmEw1vNgvLAyo9eDhfoeBHTHhbSqQU5ZHsNGAAdoXn1yLv2t5Up8TAKLCJHqWkHvNDSZZbFyCKrx33XYsGTmg",
  "key19": "2ayWYzDbFXfcdQsVAED5fhxMZtrmFFpsUgxedpikbzcTPw7UoUKFUr7XM3nJffJvNLSK5JSgWFAcv1QufcRVjQ9C",
  "key20": "QobFCnML8bLrPhRPdRrkN5eCaH6MK9NJjzmA8uPYXW7JR5cESr9wNjq1jU6qmvwPdqE8h691rCqu9tNeq94Q9N3",
  "key21": "XMcRxS3CNAFVLm5sz7EoNei4VmeerkKzAggGeLnPzs3uLjhSnfH4jjke4BL38E6XYcYv64RJ782HiayK8fdi7pG",
  "key22": "2tGTW33xQJSzmd4xtRipa9Y4LG8n6MyBkhQn38TqSQQfibM9GNVxUudp5Wfej3yi9X3ocmxJHBbnq1Cfco2u3gHw",
  "key23": "2jN9Gm6UirbBAKvXqfsErJMXNDQ7XTCNFxkjMBLPYKWpXKRpmAs28tTtkrEHjGSv97GQAPoSqd6izgVzxbVEVHGj",
  "key24": "65bXWeKgaBkKhteiRyEev2cH9eFnCkFhyzBujAb4HFK59JG99NQAwdC6hgoF7ScyfdwM7f5oK37hsz53u9eoQDkw",
  "key25": "3tiBksk6QKzrEUqZcsxPv7GUURLhmwxPaMeYjsWT7k9wPbDK1XVabTVP3MkJwtMdVQnD5GYWqUJfTXgyzw1GbALY",
  "key26": "cx5LLdBqwySzCA6jaDLFDx6M4HUPhVuoP6xXBozCPV86PS1k2NzMyCUDN75uuaXaUScXf2vV5g4uE4JhdkvJcik",
  "key27": "3t4aXT91cXAeWmRCYnqw5z99ag9HsCoXHTDEwSNmhE8yqPLgWxAfwTeuf7LPLfPTSLEnSnLQwrv1DMiBqpjfayvt",
  "key28": "64ofBwxeuahRhVRdcHYj9PuwkUm4iT3yEoqnw41asge1xsYtRtQPhayAjWeqyU5jvPgsUExjKbixD5e3kiN2u8yv",
  "key29": "4agZw1kYZMrTqnifqbZ6LMvTvC8NLhtnsqjhZdJjUXuJWW4gPcUdzbug8VWzcyFVaHXt64uqYndLZTgxzBY4qv1L",
  "key30": "BMpGurrPtj2ZLpRgUUqvSThDT2yVwWQw6PaRViof6zhcs39wmL1TTMru3Lidn8LWdwuvGhjq5gQ9iDgCAh5Lay5",
  "key31": "UBqnY2XKhbUaZWKYSBG5XxiPpC4wFDxvtCEL8Sx2hKbNnUnd36Cu4xLQDFt7cNr7DscPmJ9aW5DUsrQVpzr3mu2",
  "key32": "3tB3pwfJKSsgNgU9Fcrt7pHPxcH1nd3orhiP1LeXQCUb8899rYAKbHjQqCTkgcqH6aVcL9wABn8FNfb8UTE2BDb",
  "key33": "4KhxugCz9rvKujcKi7A788TWN8ZhjWQWGs9VdoemPZk5mzxUivx965FnQCAMAqQ45pFP9Ewvf8sdtP4og6T98Yj9",
  "key34": "124QsBR1z4YY1xtwE7PR2AJbma6631QoUA1XwrtgdnULvmGHJ8cjEMy9u5pYsMhGxXMvsSeoa64yrANcuPX71Zjd",
  "key35": "5sUDbiNRMhSVmHpfsGgtnt8eY1aUduwEd6oJrazjzL25ihKG4Pnf7TrQcDeXz7kwkaQB6CQCGf1UJ1Dz7WYWNTra",
  "key36": "2wCERsiDhfnbeSpAMccRREXZnsy8Xhyr4J3xVCZakbR1Sm61QLU9pz61noAnSU6kdin2kfodpuyWctGyhPeGahiS",
  "key37": "562BATEYCttAJjgY6AD8VkWTYLBNowK6G3q93CMfuj9vujjEbwTJdVervApTxcLhTtT2kadsNoqs77NKJ5iNaFw7",
  "key38": "3EP8pHEUJhZbVGizEihQKXR9EPvBhPWjeyBU3T1P2MJfFBtgpRKqWYF45QFsXsgMvNiKnuJDwMF4YGmMW7zV649t",
  "key39": "31GxSzRVCWaMztqFjMUT7ZyYDrsnG7t8StbrgHjnSfHiZpUELMiH6N3w9QfptCQvoRfY6hMcKDxzymBP5oECtgxi",
  "key40": "bzU6Q23zq63zxvjKMi3jheFJeNiC8pBKZBLjZ2uBxGL8fhnAVTmWCj2fyu5jn1fjQPaw9hr6oRvGmrGNs8PwTxL",
  "key41": "64sjD3C5sjqL3kcBMmr1cc2MrdYK8SJwHBbcFFoogmzQf5Eq1DuDBxjK5YhgAFuKRDmoaYSnrGos6v99WCTMNw3N",
  "key42": "VMuB7XTunQUiShQcQBXkH4Dobs9rwMm3RRZPMZ9oH1J8KdwdCyWnkZP3M2KF6PfndtpZJKU8p5YSM1Bo3osd4qc"
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
