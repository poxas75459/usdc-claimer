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
    "5fru5qzN5fkVKzMb9VLztVpuaKUPz27AjhFZzr9iEeBvDQAUye7TSRjaacUKYwqPTtoEZ6evzwMeiRy5WFPxNYmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M4meoMFs1JvwSUpMgJQZJKA8fZufGrKzXTrn2yKpYkwdACvXCYkvXscXmRDbhgW4udndTkPkXwUE2bDLqyWxred",
  "key1": "43vnawzrgUvToxegCaLivv1vXtebdPVJdFaXNq1vpyRvCHMZDJvRwQAZmLwWmXxQFt1A8HkJxFN7N1MVShxr8EQo",
  "key2": "5qkmct5vF7UDWkQhyYxqkesJpqXC7Civ9amztttUm6231GinjQyVUqWT4VKHwAC4kZaCrzFWpKtESXaXjSWZ6pFZ",
  "key3": "4YeFvN7qmd1FhLJ63PoNcULzbKMKWG8RTRhRasDuxYJph5DWtMo546Mdrjjgp8c5V4Uq6VNKPfNNEbv8DtDg5Uiw",
  "key4": "3j7K76uGdf2kL4PTU3DsU3QJQFpBiEgLMzhkdCUBtx29f2vGRkWKnvetizkiFNfBiY1KcD5wL5RkP2uLnGBTN8ee",
  "key5": "5644wdf4obtyMM6VBmQerLqLvicSrkB3WhFUbGY37rVVdEUN5mW5LV4fZZHJVwrkxcwhdStKCD5zVqtmdUoRWgQN",
  "key6": "2tuiT4zuMCmw9jC1f5hJn7P2T6d3S2QXVw4PzNNFRgzcM1Kvd8bunXdxZ7J7sFzMVNjNUC8Edkd46UAzaWbytgXM",
  "key7": "5DyguXYEETSPetQmmwXu3vhw8VyS6XMgjdMYVbBzFjJGpvnp1h1at7B4cDrTLnbEQU4C9hU28VHeKWTEbYwQ8tZG",
  "key8": "2UR7dCZk4Y1otQn8z5YHHmiKX2h1Y6xq6yx1wRLz84wymKExQ6HUpM4gGTd5WXbxJDjmpEN5DybL47qBMDR4J5QL",
  "key9": "5EFGVFT8iTasnaLre3GFFu6Ny6uWm51SogMPi93GEXeqeyq81FT7P9AcUThVH9GjCepz4Ro1Fq9XZicmVdLibpBX",
  "key10": "3z8S7W6QngmyYU5nk28hs8AwSxr9mK9wgeLjBftwziGtwhXqNcC6CAwVi4obawoRpkQSLSFgScPBZMhmJMQd1ZAe",
  "key11": "5nJAQQsJ6vfZye5RqCrfjPhByn5x6LrjD4KzZk884EDNYusXEHXXsqnzsxvokqVp1tSU1A2CCKeHvfNJxSeEwYk8",
  "key12": "2hdvWruaw9mS2trQnbMRxZA2Y65gdwtpirhA6vM5re25tD7HtNG3s5vXRpY9sxYi1kCzLK4hVwZzixoiZgPn79dE",
  "key13": "2Z18Q3McyBEEnqL5MyMMNjb793D8AQ2q143jckpR7F2BcaUqEXZBFcpkeEXiXc4ZtbUh4p8zG6pYrv3YuoN2R4w8",
  "key14": "RpxSBWWmdvUJTJEnPYGvntaB4qZ4W8rD6Vp9fSA1sW3YmnNRb4EbYF6yh4nTyh6HX4Rm96QaPmEkmA319p235My",
  "key15": "2NovQV27XoExjHVRHfF8jLpRLMTjgB4YVGpMnMNizf7eSpBmADNVYw3VsQwewuMDZWaWjcRYpt6NNgio76dcpKwp",
  "key16": "2dJtHiEJ8AVdvKN3Z9cuaZgnSoDcS2YkHRfe317kjNMgURiAVBTuiy6sGJ7acQx2HnTgTFgbkmogUcddza7UgFhM",
  "key17": "jcXGqRqx2gicDyiRXvfHgfMoJoVt6woYHi7Ex1JGpa4E9xPiaWAFjgD7GNA3QrWcbtHa6ohJeUijCj1WjHcxhoq",
  "key18": "5NMfMYbvLye1MMuGYgLe4B2EWaQ6of2fTYVbrtGPZn4CSYtXiGHgH9XmGyd3QLXBYj1QBeekSctyxNzosY4gpr3",
  "key19": "5nQRK61hKxYxEkDifLxuzrihfDjtKNRNRfxPaBc6dF3Z7MQhxCxkaqKk91ZxSskmxE5AjunHCpDgFH3u4kbcDf8h",
  "key20": "218zfewR231YojfXSFA7Zwwf6aQWGbfuyZQwTFDRzW1ciUJSwbyTnasATJhAbYp51mRmNSPYssdKws1LMqc6Vv7A",
  "key21": "5xZLJVKH7row37yVt4211XZZ2QM3gPJKoL5woX1uZjX1rJ6Mz3uJndDACwtsHNGMvjXaFzzsfnMJdKgPgsfaZ9J5",
  "key22": "haYVai7KwdnCRbm9YTig2XUeJd1WrDcnsAZSNptpcnjXBnvtRgARUgVP3rAdALyQ36DkQQFiwR2g6VwXMmQmSDo",
  "key23": "3DEChiz8tAy7qGapNKrea9EEbG462PyxfdvKo8qUDDitJQzViyoTGHJjY3dwU65FCyG2MFdczyKnDvW6Jdgf5Ftj",
  "key24": "SQFDSWWoPPKr1CfN7JcmJiyK1YSFvJn4MUtopRNemEoAdEiWswQnPAeqeFWALBuCXHT9H5wrWLPtwAmn87Cmie9",
  "key25": "5Y3tS6XNWVAj7VRZntzLu14dWp2AjDsH4rVWWaHDhdxMoyRnznKu4e1scCh2DbtqYvBAEUXCancd26YdbJpYJJfd",
  "key26": "3j8y4YaYy8exn3Pq7jttdtAQoQaBViRARAfhEDLhia2LYF6dubjBxKCjFAchCZUqDxCUjE1zKvPc6nSoygx5G4hs",
  "key27": "yzF58GNYFbWwyWXAPKEA4PdAui7uFYjqpGZ1cGYbG2f7LVNGSqVD3MifUZeGMsmw6LqbwwENqxczf3gSiJ5NrCt",
  "key28": "3c2eojHxPtsvU6Q9MSKk8DqhpUqukqPqPkJDoFBaTfAenYgvhjGvXXnaLspBoyivAStRqsLPocnGF1YUVik3dPTf",
  "key29": "5b8111tLMjhTkRuGj17zYb88YNuiTAV4g8KayXyhr4QCs6MGjXBDof3aU7FHK3ccgCYGf6zYsp1bne5cTmAuajKc",
  "key30": "M9q1QBTidHufi8kqdS8koqv7UkVZSeuQsuCeQB6X3xsWA6yvxwDiNAuwyFjhRnEHGtpqW56CH545c8iQLCp9yws",
  "key31": "3CYGThazL5NpWZf2RE7c1WkBpd3biFXN4xviUMc548pb7sQ8gbdgCfBLCDy1zm2DokUaLxPbsSsk1NQ7cWgnUxmy",
  "key32": "p9tykA9NzYvQiM8tiDSZ29PSM5WBz85jUygHv66hVQR7gM3J7WpiAy121nu2Z8Mx2qWDbwwpV9pMnM3ZyVCuN3i",
  "key33": "2fTjmbZkEuGkmHAJzVi5D371nLSAC5XnSdUe28JamZK3bmCp67BK8AWtUXim2fm4jinduDGRYhJYwbUrJHukhS6R",
  "key34": "52AsG11mjPAe2ND6AF9Pu4J2WTqPxmy37t293Bm3hU1eFhVKXEYkgHNJMMzmr7AtVWufU4yBFQStAhbctN8hhKU7",
  "key35": "3ZtuxWYmAcrr6YBs8bCufPL9dZw2fy2h9eebi6USk7zmPDeSbjDPWoj3mzvEmaPcDCymsLmNxzzMvGgMBrzE6ttS",
  "key36": "PsceyA3UYpLtkS3kTucymqzdc6tGTzvRFmXpUmoLEUZeXU27rVboEyKJ5qEwwZHEHLFUi6oS5MCbfveyHpNLUon",
  "key37": "4iSJnh6fwJD8WvTWxUmKDMPFvbVYU6xAd1i91e211ehspET22n4sqj5uw5An9WqFDVxyVynqgEdUmQn79WQbPTHF",
  "key38": "4Q3vbz5Lf7WYfscqS8J8yEYut3umY6mRvCbeK6aJSBDRArsQXdicwJdJoFDrrw57CRdmQaJffUmmcDGPQm7Tyto1",
  "key39": "5Wc7WCPnyLHaZKghEgGMvFfiobd9uZsJAcE7rU4haHoJNbrGPSEsxFGArMVwcyRR7mYmr3ivatgbxGMwUcmiMqzU"
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
