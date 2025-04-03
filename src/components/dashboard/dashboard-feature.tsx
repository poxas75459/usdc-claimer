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
    "3nr7qPQqUaahPW6E2htPv8RPa5cyJTdp7ypLH2Qigc7Q1Ybn99RQSpVkHTykfVHy2mhRMV2faJ4uy8qrH8cjRqT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FA1xqGXRGwXTN87rw4nDuwW88dvUWZFRZLWQiRm8sykp13rY29Wo7Wnw78owcbfEKtiMgM8Modx1zG5ByHaD8JC",
  "key1": "SWsTWq5cNvsMTSXQC1ihjD24ZcwjW5PXqMU8JgDt2B2xrdTdwvhmTg5m2XWCAycyZ9b6BXzKDupxZy2wovm6oTw",
  "key2": "2yqt1PePhBkENwReLGeGdJ7TScWZYxWNEGRU1gcX3WTYAMN33oXfYqbraX8VXdPtnjF82qfRV5WYWnWDneEtT2Xn",
  "key3": "3JJjSxs79Zs5uEXvsXCGkjYcwQwHkcWgeqrB9vtXb1urfaLu9xD5bgRpxe45v3oo88metiEtVN8hynvXPcxuoJnq",
  "key4": "5EszHzimaJBzT6Pe2rddaALJgxKEoD61pUV75wCMefkgighRwPcPG2XqEgLktk9YArPdaEv4GMdKjtgjc2XNFKG2",
  "key5": "36ojiY2UUZoCP8FiGVwVzwfmk3R5n1s4C9YgFMZ9Vm9yZLcq66sSwXZwoUA9VRQ9m5ZdQw4ozC9fEFT4qRcS4Bnb",
  "key6": "45dsA3LZe4BtUHx61ZVKi3HGYqDgZUwaSd9X3UYkHrnnno9Nd9SfmcipkLq8pvfLJwVo7RhPJXy8ytppW2ianUAC",
  "key7": "cBjEsdxs5a1Dj9tDWvezS2YND12TGJXuVmTxsyAjDpqo2cLzufVjADivtjWsGzuKuod7dxAKQGVEWbNXmS8RDLg",
  "key8": "62SnxByPWJ3nL6tyjD1vzxWTSqSyWuop6u7yYSRCUUVatCeMhRSp22YfCRkbd8rA6WYSZbKJvTbkbdnTADzDqZ24",
  "key9": "2Sgk5rFytCpY3tRhs8rM8Z88cCMLkknLLhqaTk8FsdDoKHsCNBdTmrVqKiEAXHF2hWk7Ma7LJUyiuq18jteEFQS6",
  "key10": "2VswGZ4wtJwfL432KofFMmccE2iUrfbk3n4KhCdQ3oXYyWRwmyLtQnnDbTfZ5EdR2dL1LLVDxkThgMFv7HuJUKSF",
  "key11": "2pFaLeYTgrTbFfznuYnnVqdoQjvBJYqrB2WnaVGiF5juHNJzLKrkUo7Jmyi6wXLdJRHvSKULYaTKUTmLLEBS8P1T",
  "key12": "2Qe5MnGTtqWvt2HBNtF8tsBzfBix6mkSsDhYU8o3rSfzqQZVDbGNJYTrE3gPFHFBSt369jm4RTsjVu9bz4SH2cZ2",
  "key13": "3BQeXBW5oNDuLwfzWJnuac2a5Qh6WX7koXMNM3HuS8LdtaAuZ3eX3sxVUGuj5FUP2BY6YMKWYNJxR8kRHvx4vcjS",
  "key14": "5mRTArm9BtwoWqNHhBUa3TiF2cThp9T6geyLoAiEJ5MuHKVmTXjhdzg4aBpPHWkKGUECKx5YmCeUMyPBuyi7rzDe",
  "key15": "3D4h2enWR7uH9odVy8s6PEFsjQHriithvJSrjy9q3uWRZzV7zNsXT8ydK4eRRVc9azWomY4R4pBwrvhidyBnbUzt",
  "key16": "3HNNR5RKLsWbzY7hEDeenArYt4nhxkR6EqFMW89hSPnC31zGfKRMRnAEZ92zesvM1PT6ZTCK1j9dq5JYJsU49peC",
  "key17": "3WTWXFRo35tKx6qRcfcqrbnGHZUHcNkhNUQb3ipgv4eeS9QxRAifHdkf3KaJXRTdrF61NMLf2dAWV2nytddFsRXr",
  "key18": "4RBpSTzt837HorAXK9kYffP1hFhEE3vkjTBpuPGi9wq7yorE9Hx8DxZDnPWmfU42ZvZCfejS4x8tLtY6x9kvmdRz",
  "key19": "3jrKhVXE2F8gVqE3KQ1z7pdS5q2viJoWjzobn28Syj96A4vw1BU2cju6y5AW6GLwyp7hTDGF3dQCZeUCGXdjRERu",
  "key20": "2hWmUahTpuzQwSLRVNwK9nFGhwxNrF1NNNZ1tnuU2HjATXC7YtzSbgBTTCUS4uTPbv9ajbPcsbdg5ZM2NDCUFrWC",
  "key21": "3jmEHXXZKwTvdrgwhtkk6riZBhHC2L8B7daxDoHit2tJ4D23z9p8V6jtuRQ618W1a7WGrfmrvXccR7MbMuReJhqa",
  "key22": "2wC7ksBcJ8rWSLkToNhfCb7YTQQbRSJSmoiPwz7W8Xb15nCyWUznDjj5xX9aht7tCQqWYFzagiSGUVr2kUteGkcH",
  "key23": "7PXeS8xgGJVF5JNr7cAU66sD5T6GE9zhxyqn5diwkRrdwv3xAHzEBJcHd4sHqT4x7RjZV7KcPHNatGbfWCk76Rh",
  "key24": "5PcUkpMbdHrAWobPgqfSycHETgXauZuJw1ZqDKqk2dZDxJhk1r8BP9avEDdc5ATUbSgWFtDuRQuQMdGLVeza6JVq",
  "key25": "3i5DbSFWUh2mbGmYRHyXpfMhfSL7eq6U4RvNpuTvgF4GLmeGGCVFRMN3WbnpMvkSEgdttF37C7cAKNGp4zM1sNAp",
  "key26": "4BZwJ3Q27uxmkhpiH3kynDbrLU8zr12dQpgqep4MBApRCsrpjZW4uVxpv3G2FkqAigPWjc5ijMGwca4mNF1RhYAQ",
  "key27": "5L2BiFb3Dn3dTUZfPTVzZ99Y6UGqKK1bSdirirGJNw2wtFtdJ2zqYkkSAHuRYicsSuBWUEanBUYVNSZqASQSiuk8",
  "key28": "2wKptwPNz8aLY94GTdoZ83smBqKTtbjxGouLVRV9zM5u9S4FXeiHkV6mCffAwFsYcCXKjbArJkYFfTcd3cEEMyXL",
  "key29": "52iH534Q6umPueQrVEqQ1R1jWWZ4UQraS8byzyapVytxpBNggtU9QkVnZzADoCCWnFuLijW1ybdPxgujnpZbvfza",
  "key30": "5ALL9aW8A66Yn9JcJeBP3492BhSQh4bYHJdbt1T5iuq6Hb1oTE5mEHxNVhzmALog6nnD5ZvxBLQnpRgRV1kTwa4Q",
  "key31": "62TkTD9BoYueysiGcT3rs245w56rpCYa2SwJQd6znPvcw1SEX7agCf3TujgxQ8as24HM8sSN72yVqpdyuY9otdyV",
  "key32": "2AfmbrZdd8LxzDAio8KQWKyd3ZFSf3rHkm2MH3wny8rS7gB8gmU719vKtJtbrdzsivKPcxFasmLshHvu8tUTDACP",
  "key33": "3oyuA9nqqNxXH2RUWg3PRzzxqkdghJ2KiSwAG66NP9WxCpnuj4TmVj42tKxSB3w2rxeUFWojF5w6TvvPHSnxKoQq",
  "key34": "2WeqNEsxsUSk399mgjFUVs6WVhrttFBuaTmcT17Hf9LJ4kvXKTbReydiXSkH6JY32ccvnbBd5U9rB8wPjatvnbxE",
  "key35": "ve7A32MfeF5Gs89sRrhgxf1EoALSZj3oc6MVsU8MGWt1uue437CeE9F5eK3Hehad49Ay4nMJMnEHbLDnKidenZC",
  "key36": "39xrr4KPK6JDd6hdxgfBxLu1HX3QcJ8ns8Zc4oYfyr22ii9R45BYgeGYcc35wBYHp4dddZCcPZs19wazkf2JvvYG",
  "key37": "5fE4F9dssQVVNkEiVinUByRo868XLQhDhfptFb8TUmy4mkDvLh35TvuCGkSbrJR9A4nddJf7sP27UzejCHJKGntp",
  "key38": "5j3BtsP4NKZCphoYMVyRjra7ZNX5eJS8kiAohW21KU9DL9y8mZCLuUBiH5VoZpju39nLrQoRoYcnt4pNKSvfQERu",
  "key39": "2v19bUuakSYG31k4poiMdeW5WetQTTbPUACbqp6PMut7GrfSkaawD5wJYFLBAuhLv8RPJsXvhQV9Y1L1ruDSi5r3",
  "key40": "2noFdDCa28kNPEsT8EL7FCLLvEqUTT99sxuUyR8neN5SapQWYFmMK6Ad2HCgVEJWZEE1MoH3Viq6KkPRyCcDugew"
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
