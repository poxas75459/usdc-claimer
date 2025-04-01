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
    "4yLnS1whVEYnzfRq34UzRH1tUgwGnNJaZAnFcu7SR7cK2czy36d5hiWMNDtuQyXPU5Wpu5TGVnCm3XdkhyxH7NAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x2oERGMWZ8ixQMoTikfNmvaR4iGun6U2JnfmRr8NPLu2Fv5gvNGu3rWBJ3LoKEDyz2uxPSpEfJ9zSbZV8feBvf6",
  "key1": "3GaiX1ruY81CXtMaMdZkX8ne5EffCmnxV7Kzim3nSqy9y3dXgwfoVwzTKSowGuSRUBAzVgeSiPWHcMuVaCYk5t9W",
  "key2": "5GS1sFojRxg9SuRuf2bcf6mbEhSfSBPsuTzAkMyWKtAb2mhhtqKNyineYKMcHfDZZHJKLfx8MnpagQpSm155rSdK",
  "key3": "41PFegUhWw54T3P1AoBEcGHnf1hLzLffcsd9KJCaHjgMaUdBc37kCLiUCKH7NuhK4M9N635ZuZYgp3uUfcq8jndp",
  "key4": "4HCwmC5frv1AUzidRfZ56pAcmYxzM8ME1UgUaqpUXd16Ns7C61xQRq2tmRqGrH4JRVqGQbhwd31mcRkLt8ASUd7c",
  "key5": "5tZmMKcYToPpDmLBciRDJzGJ7yGMj5RMDPC3dKop9dH4nGqdWYVHQH8PYmG3FynECCXV8rZ6iHQ1czrzQSw9gN2f",
  "key6": "5yJvN1fFLdPNPLY4wMivzZ7PMrhfgNnSixnxW5z6EGY1TgDD1zrUo2Ap4mMkRmz2GWbTeayvgJvxZ1ZbdDrtQWLi",
  "key7": "C1M1d41rqh4rgYFciHdy5WjEziyCUKbqSoHj1ziU4e7pmnsVpHxJYiXxGLyuQJvx5VcB9XNeNxqZAj3vLGsnBNU",
  "key8": "2QAFE245ZmvK5MqG62HeoW2GLrYSvxWnQoe2pMRwV6koM8HAKH8mYrhVfUR5fFDsFLvkiafLiiYuZHjXAeiHeHgD",
  "key9": "52ePoyjbEtgzS2ArLwYVS1dmdPQvzc2iXEzZ9oHJzntsfmrmo1zUsq4rPK6UpyNbKyuwCLkC9PjqnPiFHB3xFuV",
  "key10": "4wNh4Lu4rzi8oXprdezUmy6bVHVAsY3HNiZFvaWFKTS1kHJLHn4nAVV88a7HmUF3md33mu91Sa7m6Tc1v2nWLRKe",
  "key11": "2oA7rKZpmBQZYcn13NTiUUcm2jUk8xPA88UiFdoLUWXHtNKx9KS7TrZPprqDyn7cguNoVDVZ36Tb9CTGdghrVvJE",
  "key12": "5JEHU2zazb2qXJy2ZEwA31NxTY42U6ZZEHJgqG8rW3eppBE1dogAcSWz5A478tcAxoAwzM2ZSwWvMmQFx4dKp5HQ",
  "key13": "46DPCD53xswdFHx6C4CLCJiAvcWL9EEHKJ18gKJhUyYt245xPBFMUKubshkDgzBKcqgWEiBxdSf2Jqm7gWXaA1pZ",
  "key14": "2rfVoizcsqT6SFcrq7FJNQKZFD4icfnieQfXdnAj9cqxiYezYF5My2JSogzxBa2PVkP4soveF9ZHsShqRYuSvHFH",
  "key15": "32DA3ZYcvpobQK2JQKqpTjFd2SRnP5HfcqBT48fbBcigYRwDCACmZSvKU7uecZhEENvhviXFqFmacAtMwNmWoNMB",
  "key16": "4iHkU3yjjiM7tJ1bXEPoZEzQcKS3TaQcwtDuYJ13PuEi3uSrPG9KM76oMvxcrGCWMgKhYFWtGcnQDAvuven8nBvA",
  "key17": "Tg7aKUG5G7HhfXcwQgbJsvd3vTs2UBv2T5vmMYYCbYpuexHJU2cF3CbS4ZNeyJXWtPD1z9gbTKv1uUxecKc53kw",
  "key18": "3sGVJU7ghJR3Dc1E9iYA3ozX76jjxf1GYTTGXm3gmse3kPp6VubjLR9z3qZRd5mYmVtAjJKvXqWEjsqSyR9vBpzF",
  "key19": "25rKiByyne1GYTv7Dfgs1beSPF9uB6kx4z4TgynjXboRMxcm7AeBb7X8kTaQ6pCWnxNiKCXtTFDX411jtNGXSkFm",
  "key20": "3nHXe2GwFzPQ3Gx7ULX4AXVESWhfzBooJ4Hc15QfMgZ454w9wjcyqaJmupr5U1cCdGXKCUC1EJnGfgTmpdF75iJJ",
  "key21": "3A6xsyhjTmtE4WaiKe3KGLwqVuZ6gWHKpbAdmAXKvSeMbFvsi5nMeuVp7AyzyDhP8UNYk9zto2RBehc6tSNuZU5i",
  "key22": "3t2EoNdNAcixtq8E2ymLDde8XmfSPbWZhdgwaMULp1MsG6EFCkK1wLtStanTe9ZuTFgick9BFrhEbne1khLiN3m6",
  "key23": "66M7Y9vUtftJb4qbFpGi6QZ7nJXV9tvow6ZPDaX7M7BUDyyBetNzRfr8VVSZjioxTCNJJJ3Q5sT1StDxwnEz87UM",
  "key24": "5ph4KbfHFPjViyJGuUbxCFaA7yVjyafy3mLerRbUqRwcHZpAL8sADRjgGskHNu1pKdJGi3gNmiFrFC4GQ8DhRbgq",
  "key25": "wTj5nF9vD5K2mQzYXrzRSB5oGyvUsCBhiyqu5vTktoFZFfp5u4CcN1EPMBHeQuxucxV3t6C4hKAHMYxjDM3LVec",
  "key26": "y5AhHrUYxY8Bt9CwQCuhHNAVPwfg2Cv9V6dtuHS2f8vi4DPAqqbDPeCvPwbLLeaqANyqpiQ11USLAQgAWPiKTdB",
  "key27": "5AkoShs6hMDUm1ij7BZjXSweHw8BBmsTj9t7eFuudMGdc6MKCW3ot7S5TLieViru9f5416QGnkdLaDY36U6NLSoC",
  "key28": "3pLhZE2tsLqegU55wAJU3pHcF7b82fcZacZGwXBosXM2zepQ6Xd4d2xAuu8LftbDeapvfJT6xrcqKiKnVhBJw2bS",
  "key29": "P2f1r4YK9TC5X7uBYbJp55JancXGUcmEti8G8A3opmsgZGG4u23pkM7PT8ojE16nhQmk7KF14hqCm4TqRqhbkWJ",
  "key30": "5TNcbv5YrcsmQah1ZtwPehGC2yddrQyu1Mtjtv5Cz6fSAunvyEb9xNABNZJNgydGup7YjDjveFnarggeRRrhGY78",
  "key31": "3GTG1CrMgn9zJSvjS5cdApQADrbb8dKgtmCtUCtNwbkFSU54a1FeWrq3bub5PesbsKuk3ZkkyBUK4uDJqmT8cGHW",
  "key32": "2tD86M4Wqt4wAveo5pD3yMD1Tv1BLcrfSBJx9FNeN1pmBRv48mCSkWPk9Y1KPJnyfYYWkstEabY8QchoMU34rj61",
  "key33": "4mskiommy13dU6U3f3VcDmT8fNqaVaQHCQ7ftGUqdpEGN8Xf9DwwS8iXXgX3eLesQ7PAHT3dKgFRHR7jNp4rfxnx",
  "key34": "343gzwnHpe6AxtwjrFNaeu2FUnp6XirAqfB1HdWEFscJk6aone48p4MDuZbwCSUea9b1AzztpsLqMcL2NWXTLeiH",
  "key35": "4TfYKALGa8XxTLeKXxfzhNLYjWDEwwf7grjRkqaCNPP7R7ZRnsX6ZsiQ1TAhDQEcLuZRpsp912aCcngCHfNnkiPh",
  "key36": "581pr8TYkYV2UCrCdKxb3Nr2L8jpLUmfgcEUTtpxsZZQscRiQRbmbJiBZtH6amwT5jhFggPPefmYPBcCEhwyDb4w",
  "key37": "3SFs8oMLQFpvoMyHyDD29j8EqFVxNzfFyNAKe9EpPbzLhbE8BWHGMzxpG9zEeAMeJQUyvtAHrZHFtaoLDMdKGDDo"
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
