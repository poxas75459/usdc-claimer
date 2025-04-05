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
    "LEQfn5vb24TEugS8JZ5Y9idMWPBpL9uW8ohZqq6ug6G1KgXYb34do8mFANYvqjgWd65h6m3MnJijzQ4xZXd6tVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21U7oqoSvbhVBcGD1hXLjLJF2UbJZusm8UiXK1WpPbnPpxBzeK4RbKbmuXHqwT3xfUwfLMtcrgT7puJnovNQBxs6",
  "key1": "hQzr6YoWzEaZ2aBHWBigX7kADMLiwqRccsPb82m3SujJz2ZiCy25aWYKioejubEaM1G9q1oUuGkDwnMdovU7q9X",
  "key2": "2uPJWhJZ8J7WDcbeJMPtvHXRhmT9A9YKrXqpARb4EoqpxwB2Sy6zR7Kox54zd8XvicpvuKaxCG8o7MyHyY8Gmihf",
  "key3": "5ZdeAaV6URZhpvafwZmvqLfcc1d6y3CeGFBiEJXCJZuw3Ver6W2EezKQvX3xW1LzT7z5LDYZqZczd7VC8hKYvBZy",
  "key4": "3ny2c91PHvxJjwzrWn5j3PcjKWhQJmEz96T7AGSdMAFsCyBJBV8y9QGykhkpSroYuXm5DREYzHRj55Qaqjiw5Cec",
  "key5": "4mCF7JWN5vV5CrHnC9X5JwB3fCJehDVz5fkqF9Jfoj4Tz4HjEZAo683eaYEQeaCNB35QQATS3wbzcBXjbXGpRpDx",
  "key6": "3puraE8XR5VkdyVe1eZUsKFh29oyu6J6SiWVjiuXyd2srskq44SMPbBQ721hPxAnd4gjhwwVQ7MPV71YF53SHgvC",
  "key7": "4BZWNKicgKQTES3dcTz3gBhpRmpkGXphCFG34Ha6erunohN7e7AYg8DTjtjvM4Enz37pWJq2fGLUWisQTLCEvHsi",
  "key8": "23waTb3RgZXhV9Ai4f2CcbCeUbzxQxLxu7p88dcsLq4XhNhR7QMohjFAfDA4GMdcJhU7y3oG8Tvtvfc2QKJmqEhv",
  "key9": "5PCgs8iUUqYYZg7tRvyguqson1J3Q77dCdFxcFJW3VkN4rVxCkGWL8yEHYeUwrEvRBJbd7Vc9QGnKP8uUZfGo4sE",
  "key10": "2fejHSj6dMP8mKTgxi6em286GRYW4qsBxrKbvw3QKsBHdsCUJ46CzDGdZFFoLv9cjEtnyueFaLpiH8AV4YZ18Ey4",
  "key11": "bjhCadEhPC7B9QAFqj9scArK38g2KFdW9c83aHjgibLASZNmWLNCYtNNxTd86oMJSSbT5AaAghhDkM8DytbzQPC",
  "key12": "4E6bFbUakyuf3okPsnbxYpKr4CG8fzMLx41oHBkEhW6nthkz8fdqL1HfqxxA6u6nTMM1zNwTgM24V3Au6DPBLuPA",
  "key13": "24WFPuj3mxUr9bPCsg9Ct93qkqkfpYDRAr4SKFasqx4VKzHEuahNqD2Wvor8WoK8yHPAeomx7mdp77F8xBpnoMid",
  "key14": "2msXCQZvANTbzTS9w6W3gvPWPmKWa1CJ4cMKWM5sEnWkF89wkCEtgNnVQhhipeWQoMC3tUQ8qR2bJJxupAVyPPpx",
  "key15": "nqEvxnTRGm3ttZUNZEkJc699gLsrJPtgb8GRRjekqyDFBRnsYurYfMFw8bU1PJBk4zAtx29JVRx5cCM8S5h97DM",
  "key16": "uFkEwCWwj3KHbPGxu7bpLK2wVWoq6cjMjh2DRrp7Da4fHA2ajdyCP6HwGYCoafgq4pVEZjqkphjoKdWLUcmT8DY",
  "key17": "3Rj9Nn8VwAmPJgyPTcwLgprxAsCmi7THxqrdtcN4uMZrdeyZbMCcdRYTq72xkrkNfgJte9QSLL6JXg49QqvfVUV8",
  "key18": "4Sdfa5U514vSgHQ5aAAM7fKN9PQRA6ckaMQc5wtqDa3DvX9KsPZMee4NEc37eRUm5yi212nZA1f85bqoKuBxk8H9",
  "key19": "4XsfgeJCBbZr5ZVotJJrAGF4BB7DxjQSC9KHFQcoQU8oUQ1KQ1gUT3LP2AFkcS2HLy5RxAZYHv8j9okPSxa4A5Yv",
  "key20": "4Y5V5QyBR3gFuAV48aJEk5XmrejhoSjPDKtbqVNEnhk9Bh5XyFQawDR6yW8eQagmTBCaDmnoVTtEuxyvtmaVwE1Y",
  "key21": "2uRoyfAyLc1T2Sp3SGBVANKoVw3yuxnriiEgFHH4gKjAxihzoiiqJuTtYDFJR1Mjg9mDTpmWwNniDH7ejGs59Frx",
  "key22": "4BA6uvPFTfBoDtTTisqcK3C2ZhAbTJo2jFeox4RhN8TjmwG1AQG8ojRme4ZnjQiCNiQtNN694NmqJ77KG99uxyV9",
  "key23": "4Xvbik4UhLxSnztw7SaPjnqh1j9mQ7uz14YrpBRZB8P1r7JVHGjSB5YDxkr4kT61ZanKi7H845SYSkJZhVeamoyY",
  "key24": "4E5aJ3ZSD488njAy6WXqhXhTGhNsXw91MaypSsB2fX5ywejawQc2ssBUXQjLZkCzbL96QLRzxV1RZt1ETXVicufD",
  "key25": "4D3GFeUD9RaQf4DBYqJjioCXjrvJ4iV8N1VdTZBJyL7ABBNeDkuH9Sg4bQ3pMg5a9yK5ghpUKTxyGhM9FCTqdEut",
  "key26": "2X8xZtL5WBxHJvekuZP8J67YrN4U2c3uKgCij5wj7idiSL13NPXvaAp3jHRzDYeHkSkFA368BXpKKD6Ex1CF7Rtx",
  "key27": "KwrAr6iwJczqkjZUNP2XgtNjWRph3nZPRwdhLPpGtF2131SquM3ywCWccn9cBoJd9ygVMgtbt8fEV21DD8gUAqq",
  "key28": "29pP8PPUDtmMACk1omHGXhenjZTdAsKfXyy64VCmNDmhEXb8NxqsiyWFi1FH9jpuMDSD5QdZ4bJJzhYjNgxBS4Pi",
  "key29": "534bmLm4yvnbgcJfhry9GAG9U1DMfNGP41SPUUs65URaTkfuYPvmU1kPy7JhTFm5Wxtnt4PuYMwfmz7ueWkaqSJt",
  "key30": "5DTBhAZtyYkZX41HWmZqhAXpKYzmLcN2w5q9PsKVQGooDHPVnS7sU7oePCsDZ74eUkd8jUYmbHNTit4MPCqAMcHj",
  "key31": "e5CTDiBuwXpgXRw9fXkFEmkcj1tj8zsgx5MQZVDfGoqeud1rUUbD5T4shKjsNgMxup2qhftA9WCLxUe6VfNtP2F",
  "key32": "4Qmkv9uoY6onii1CtD87k5RF73kV1EY4mCzHB9p4JQHjTZUq85C52c62U5owpUNjVTLVELuMzKYrTwUjXXhJHuM2",
  "key33": "64eUvy2vEsSb8PfWYnVi1oyT1zip8c2dCcz31Rehc7QijYu8iQwTpW16BLi8GE67fh6JZxMMafgRSDfimSqh86yJ",
  "key34": "JZz5iKxiguaxTZaxcfmHQgxh5541B6gYaKTiYijA3MybeoRJ7MqgJdjJpBcu5ePhASuhLth2fkUJsUbQ7ekDQpA",
  "key35": "5FSKq6R8HjBwHbxxBJ8NSW5w7duQw3oKCp6xaW5oS7GnNTWmxchGsX5AMwiGJPyFTpwNZsK1p29jPGrEsTuX4wGT",
  "key36": "5iq2vaum3tftTE6xcU9XHc5XXQF82ffpitDnSCCjpNFy7ta4cPLXBeCHXNY1XLNj4LvkF4vxKoJsFdvCqmKmmJiF",
  "key37": "4eFuVxHvyeE7dPsBoZEjKj9L58ZGorfwHEcE1puyJBFMgNCH2aQT3YBGDr8p9sGJwoQKq2Q8DM53HJw4KBw8DkFo",
  "key38": "4ZXC5o6h27jFkiy99BdFXGtdr7jxf6PBp2t7wsdJsHdMjwFcKrA5CcQhAhXnVqUPPL7DVe5cxesuKNyfcajnufdG",
  "key39": "4p7rCWvaJJGjT7nKjM8M5UFXGWY1o3a2TT5NrQLNTavJBiGv6stnokSvJaNuuBZtQ1VpeQbXWmdMHd4NQws8yWHK",
  "key40": "2FxLa59wDkZdA8JdVBeqdhzZrM68L56zh6HaLCAeWQ3ogc79naBmVPJs5sDhBX7n3jLHDqyWPY6haYM3YA7AXybH",
  "key41": "4d6WpFqbMA8Lo17vyKeEAiPWRHeSC3tyayEQwUq2NWfbXSg1jNK7ESypjLJy59b77vzEXGztV7EQ9CKYwVRgaae4",
  "key42": "2hjqULxKAFhZtZdUmHWFRTCxveC9dk33JG3WNjsdKwkcEDPFQhdrAYstKAVtC9T3nBrd4qCefwxvGRHLYm5qh58h",
  "key43": "52fbdAASoqGbCjJzEUrnpSjeLRcWr1qyXdbcSyN9EWCbmdQaVN3DExeZ7BtT3f5Rq897ePXmrhtM8wj2BkQwXiwc",
  "key44": "9LDyup56nqbj9Si8feSCcbio92fLT3FgHiBCdmX7spmpmcrX3ovrevujXBNS2dcoxzC4DT5pjFZWjaqL2QVMhp1",
  "key45": "3oqKhUxnibfaSmM99Su1qk4jMWApWQWEwv99McbY8hqEbdSjDhtv7XJomFJtz6fJJZ9N9dkYdy8HQHLMLFhFmrBe",
  "key46": "2YgS5CPTbHd8cgq3V1BmVEXU9tWzYKmXphgcMgZ7wggo5m1Gnj7qN5UHu7Dwjt8PJK6hrenfskWunmLWi5dp8WN5",
  "key47": "65VjFUZH6Vtrpb2o9gzh72y2A5RqcknfwPcTfXvvWMYi6vSKBvevsn5ZQ8itbxc8Bo1yE2eLR8N6vnoUniQpkLha",
  "key48": "4nPcLChDTp1e9JxcrpwSUfjrHLV8G4MA5nEAK8Pz4fJLVjLn4jLHcKTKBjVrCMQztzqPubtRJbjdBUHjyYVsXEjD",
  "key49": "3TFaNt23x5dKGB86jC5kcjrXipr8SzCgeZ3uyCqsT5yEWtq51e4vVfxsx9ZsUKf5EiuHDWTe7PFkvbSSMr4X2AAr"
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
