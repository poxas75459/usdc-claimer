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
    "3sP4PL73YHNZC15j1taQjqL39DYdHGp29HWJwZXXFvhKG5k3tUg8kLZU8sy56qEmBFmhvdmMpZxpdyvz1EH2MEWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63EtsRdWgjmVCx8Ky9mkybkbaiNJo12XLjUAFA3vvpdWxVBM39BPJwntMt8z11mwfLno8GF1yQnuAaGutRjgj6kg",
  "key1": "4E9NP92Bozdt2LbcB7s4i3nQea68gWQkU2WaTjvEv2Erw8gupJMfa5AXkgiZkXr7ChDePz9M2f9jbs1HmHPZd8f4",
  "key2": "5QuMftznSpBRZqatHzo3xAX3QrUimR8gBatsAjBe5fQqU7yhUcykVGPTKnjoout9pka3cfnecbAcjt4TK5pzVQXc",
  "key3": "5ZoBnPmvTcEGXkgnr6t1YE5LfzEDDhoQry8rDjZqw1pCUp6sPwzwtKKPqpc4TPx8uDdiiPugJ26ReBErx4uny1nF",
  "key4": "5h2rfVFU4HDCWfZJwaVBy5c9EMETWK2R44AKDFUfF4J2Z3qRzvMMUe5mso6DWxaQL1SfLriuLd3PWCzPZYku8JFo",
  "key5": "2epd4xwEPLjCxv6BdcLJphGeRrq4czT4Kdfh3phJPGoYyiPi5bu2qpJ3HdtqYspHD2EbvZCb4EGnvQuypBvRdB5q",
  "key6": "5RQVFscWc2CuzTWKx6UkZcMTc3Wzkne9gsNtLPbEgRsMmkZfzUByuemV3s3poqFyEwZhjXFTJL6T1HemQYHcSrV8",
  "key7": "5nx1LXG2xG8R3Yb3hVjuYGosjaws9bHiMaRFpLSnWVoVjtpdVXoHLFnSirz77oRND1ZZsB522yo5UkbVg7gcBBry",
  "key8": "2MDzWPXbuo64xYVn2ZaYUsGc8RpAfqoSWRYuknvpdHh8V7tEYgzbL3z8Uht8ZYuhndVHoTgToWMenwDhgyYFutEZ",
  "key9": "8eVH1maPfxGPbK4A7fQnb1qubLMhHgcPHVRdN9ASbGKsg3D8bQAY4iZ6iMZfJRtgp7hFy3RmsPWjrjreGj1Z3DR",
  "key10": "YEat2LgXfdq7YjpejA8XajdYdHQ1Gk5j5XQ1WYurnzisZVgSApFiaH4Bc6KjaEnEhfNA9wk6kdUTbQcvMAf12Se",
  "key11": "QeJqAVWK5GmX2rd9dGkYzWYhqRhqPwe85Khyt2ti7e1KuV9EqEps9monRpruuczqNkCP8FCeswX96jNPGGwWSvG",
  "key12": "28P1VGrc2jH99Biot2vJr9HBXx1HR9B1j4576P88JgViL9LbUFx3XmTBrBhBJ2Gn6nqCH5kYeMKqLxYZwnMiJ8F5",
  "key13": "EEwCHV2wcks5tA9MhdeZYdAjr7WLsX8SJ5qihweGv4vhxev9ao7fBoywCM6DvyEzULgyeHh6prpTizgM1M9NvCN",
  "key14": "tUYD9Ej9kbVVNrxc1WtkBUpdtkDLSvE8PCEBiFy1yta38KBimYhJysSzs42tdi9LpeBwVe2p7K4KAyvvKs1M2tU",
  "key15": "4Bigdaxv49Vo3y8LFfFgs9naFRT7xjN72x4cyvxVqvgFNBpwybaPCfD13Dupmj6X6yhBq6k1bHBFQk2VPzrjtGDg",
  "key16": "STWMRdDVhw6yy5bbvbWSRGjST9dGT8j5ApBN6g6VcYYjYL9DKMQw3rMwNCUEDDerSkajs7sgw9afmmRq9NpXF88",
  "key17": "3GFGQsGLaz1goykNrYFBZb1n1dyf3KHb4NRjF3CohYroW9oFvyRNJs3eWsUQGix6YiLwXCp4LVje7z3q79skJE8V",
  "key18": "5thnDkMimkE9p7QLSGnd4zMhVjyhxnMwpMP7wKiDuC6t6Guyy4JrLKMJKHQuQySv4DWrbbs5Y9a7Y7EbtFQTuZRk",
  "key19": "2QK3coerTNzhvFp87bhLpCLY5cfEvAvfjvL4KXs7qEWpDmn7uEzVK69VCmMM1uaYFDre1AAj9HG1iKN8sWCYS6WF",
  "key20": "3s892EFuGxcgoMSZ2bNfitgJsZKPu7AvfViDVFynnmf1CBCJ9AL6UE1LyyuyqL7QpHVRmaH3TrYEa5WnuKu3T5Pp",
  "key21": "5ZiawG1GtupszRMmka6zFehDQnehEZiYg2D4xhHcNPvK7qqGUeeejeTWx1iLKdoJb3padasQM7vtvzdb4rFxxbf6",
  "key22": "2Ru9PKuuBP3tog48mpGF9W6NNyuyGyjSTcYHi9JXKVgh9u3KSY5tyGj5Asg392xxZyZdwHEp8HJNdAFg3zwqNdw6",
  "key23": "cDxR1zSs2hRNwnbityj4RydJZHrTYCQgcxwitLYAvXLURzBAn32oa7y24b7vJR4Jb4uq1XqHJXZASmAut8vm5rs",
  "key24": "5zAVDWCwRr6TmB183sAtEjWsoHHfpoXSgXHqoyYHkM7A4Seu6dnJvnvHpW6t8bTK2Vr2dQNQrhDESDRSepV18Ygt",
  "key25": "3WzzJwp6m9V5rfuAHXhWCok5zQnH2scFxLzv9KeB7smcx6wwctkz1TDdKj5ctgcsYYEZYoXvj6HgcyNLfXxv8Wzy",
  "key26": "K7Va4PBda2RbH9t1GcxHmzDmnzt9JR1j7ubD2bLMWHfDsQEHUhsnRiqPwP7ufsmL7nDRqPmhyuw6DpGc993C5DA",
  "key27": "4e77KC1nyE1MUJV5F2bypZo5X2fB8a3289VsWZoi98QtDYgUP5EtJf6NUTJ7cp3ivB9TgHHP241CYtSJF8KQSt9q",
  "key28": "53D5s1DPqgdcmrvCU2A5gsPtJT9KMounarip6xSJ3XVtfR16j1vpUmev1FWRF5zfothKsp2uPfzT96qXLVfApaUJ",
  "key29": "59QRKZ6nnAyTdgheMobWLsUTjjbcarQn9hJTur1ceDqcP3P5mRES8ordUF84oKAfHnRFVcoj1UwPYzZa5LoXaQJ1",
  "key30": "cXogEB1gKyNxKG7eRNCWhmnQeQ8r2dEJpY16HU9pHkEWCe2pWwA2yXjkeUerDRY24UptpM3Kj3kSxzJRHZ6tnHF",
  "key31": "EZq5TRq4a7CVeD1pGWhLgpuSsraAJkW5cgFtttoWsr2fu1VZ18onW3r1fqKwvUFazJJv3ZgMpgi68kQbvGo6BvN",
  "key32": "5AVgTbxSAwKzGQSQ2TGAiUPGrYRh2y9fPUXDVRMGzzdWDkfmggE2kXSfPEeDXpgt3xc55GFdtu2n2eppkSgeo2Cy"
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
