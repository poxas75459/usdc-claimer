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
    "592BYUUq1rjEgVuAE6pP63sXqRDoQGPRnn7iFVNSjUNVwm8t7w7kXE6cioaWCT6jiPnzjjuU1ogouUY58m2P8SKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z2MqQFTwASRtyEJCb6yzmShR4QTFqgPcnSqA59qMWoxw5LQyNv4cpHXTxXW6DfUHyNVW94sWnAZHTjzLnJ7dvSi",
  "key1": "3NaGMu3JGRHk16Y89qaFGDFnLdx6pWwM4c9K8jZfUFX2oDA1nXfkt46kU78reGy1MmB6wg3kWvPnHpisz3e3BEWc",
  "key2": "3NKFb4wi4dNkamtUkXpzGm1SMXmd7Sxe4Z2Sp5CNucJEedyFyEzgraEr3BhJuHtBetcELtKT4o77PBBftvW8BMSR",
  "key3": "4dyR9t32di2jTpNpaTAAi84nEEkmCHWR8VoD6wz1GK9spmne6FgK35vHTjq3cadHncxLGPqYsTkWyvZH98QK4fBQ",
  "key4": "3qUPEjk3SaMpXgNWw883RQx44ZVdYEtpMVMucMNKopQ9k8fd5SUnw9hrXpvrBjp1Wri6ztGHaxL4MuhsdZ3g9QoW",
  "key5": "BMDRNFKq6X4weaX1jf6C85e5sPwfT5k31vbFH5UofQsnvd45BaoGy3uuzJcdj9G9D8tZTtzjQnhvou4XXqMEg86",
  "key6": "5TPZ1StskEgXe7U5auhCCWXBg6g6NE1q6R8wMdgaZM5EgGT8N86UE4PfNJNHdJuudha7ubAi67KM8YZmG89dLRE4",
  "key7": "3XDRenPGzUt83gtE7HaNhEQjSXR9F7A7p2NyrB8qAzxtzcZmJ39g2XVSctta4LphD7Dw3Ap7oQzgfLEEpDCnWZva",
  "key8": "5EZHKL6ULFZttdQDsw8y6HDLEedC8zAWFfFPWFVaAjvvLPtDvivDRHQhgkRX4ko4U9yv81jRFeDGAPymYh1t3mQy",
  "key9": "4hkUVRYT4geWBVTuZHg12gnK3BDkzXVTBdcTf2vj2kwgiYA9h6f7kgkZfhfa4iUPperFfa431mpdunf1Xxw9zyj5",
  "key10": "4Zfy8wTtVh12UYxmaBmVo13m8QfWxAFWkGB7fHd3X9NGMDaUThKqf7LXZ2ehwM5gzs7vBaKwZW8JWs6c4AmBQYjH",
  "key11": "YonqMRf2n5CvthAfXctkJiWjbLLorxG8ZG7VN6MNCktS1GSatHDNQig6mV1hDyhyQubVqJ73YLbSKpeMncygjEi",
  "key12": "3NKh3c3pDAu4fzz4EAtwWwS1n6TxVKdiK5NPfMaGTaZzDUjAUYVhwahQj6wZSAsMqBLWL4dUaCvxavURajWgTGtz",
  "key13": "4W94VPHGzdJamHcF2nohk28d3FSFhsAP9MJddfVftuj7jgbG2Dg7iKp9A7SvHyB7gdv64PdPSsdhS4YrmG5AWrFc",
  "key14": "2wzjSaZNCd2xNPGouofxbjVPdswP48945pABHPJdcQr4WERSswty4HTpfTo3nd5GMfeSiYsfm6vssd8qQYV4WErr",
  "key15": "3PgKeGKWZXKxBaG2mi26nkgS1XoyfNqqr9gM6tJsdN4pvNwmNJciKE4u1AkzjJba1JYoedgcY1xKtjeWzUX2Nk2j",
  "key16": "33WJaQ8Bjr2Bcx1uc2bN6hZLNBpzDS35yVNUmQxtdFmrGxwG1TbASeYKp18bNpRFkRagT1QXmSeiF6GLisWrKfEW",
  "key17": "4GtL9S4BQzZhi4SULNKe2dsKtB21T3Q1QA8AX153crFH65Ks5mh11YyuZdnKiMxuBmTuuoijX6o6oKCgcu5vZgg8",
  "key18": "3gCurBArCMytn2QcVPPS2dj9xGorqTRH6NkUCqcn2zgtVNHTmZ61q3A8DjgtyshYLv8AYaa7v5Cnq3v4RhXnfbJK",
  "key19": "2UQZbzZnUUQQo1dGuoVN46Zv8Zo8TScqZK7VasKK5j5FeWmrXRkyPmHPivGXuhM2v2UiDheu1bLQNdNdocSfDuCu",
  "key20": "86hh4o854nXRJEkgiPt4VXSjJoEN559sB6Tvuo3Ftx1bmBXgc8kqnX2d7XCg5jPr8JmUUUyqKBAG7YNqYAr6uej",
  "key21": "3MxkvfEsTFTzFsy57taHWkNUiMuDmGoPNHTSctXuwE1pKvvD6zPGBqXojDMLYXLW96MvnabNzuop9YBizAQ4CXqC",
  "key22": "26ArEJwDk3ufxXN9VipmFqKq2RwVi79LWjTPDXdcwAnJhaADM8KpMnRsoPQcgE2w7C1J9ypqJ2EL5ZjYaRsihoHB",
  "key23": "29ZCjpR8gFrE9pbPe5Y5DB5NZbYGEJ3DdKydJnRgSd25Bkd6Nh6zR7GDNYVBhbGR7wkeFSrCcEuTCPsrhLWBc1mn",
  "key24": "4norfQkpqX1RvqR4dExTA3Dq7MDtuSzmRVFEK88wGhkB46xVFsBUfWFRyKe3FKja7w2rU8SUzo8chyLGTXFUJCUU",
  "key25": "4C45o5yFqVTWsozvZ2oQGUCjwBX4muBWz7kPZGSBadkwvk3HsrLwQ3Sz4HiP1FNaC46a4KA8zpyYedWabraoCfF",
  "key26": "42wTMku3FCrX3SnbY9d1yi9i4aorEC4cjnEzhTe1GD5afo2X9CsTXh2oyRNXiLe4REwvwUNtPJqr3iQbuJfGwqi5",
  "key27": "5KnHmmNpHyYpzS3ZismDEyZpTwxv8wo8VSE9UQNuwhtLhW1YWpXswmSeKKSdmCbWqukUZyW4Yvvyio9UmTgVZtFa",
  "key28": "3mfJhsDiK7WciKosHfDrCo8DgjCCDTzA45VTVjASphtVy5ossEDNGqd1uprqcLYp5kxcF1fYJ2xF2Yu4WyiRbvF7",
  "key29": "Nkd5yJAFAJcMSWs9EbaKU35esaUfTriGAVAaN4VL49nZ8PN2Uyfx1pVRbsR5mn9BmeT1cMRHJBMo17Zo3JuyFyB",
  "key30": "SNdpjw9cSarMnyPb41PJNwAFEyekjQ4Cpayzt8uGpfDWvXpP4hYyP8UbLZMgnPivwYWDGFzi3DSwC5Y3iVJt1eT",
  "key31": "62L4a9w23b6BNe88DH3dbqVnFYSoVg9MCapb1MNngVbb4fF1HeqTLhzgTq1qm3mkPKnBxHYL2D987rrs2C5etNY3",
  "key32": "2UaEdcppSd8GNnMKLrfEuEmL8adX6rk1xMR4cx1SUUpMMkZJfXZqoJSMhPyVY7KXcPZkVRCL3k8Q8wFVTfKo7h1z",
  "key33": "3aaeHy9Xo67jdTxogXW87okSqfEKVZYTao6JEnFZ5hZ2gjbAW9CbDib7g33yZ635wC48ES8uuhsdusfPbeoqTm5y",
  "key34": "5k15DqBYUPfhJVjzGLnD1cDzuivgPBvKdp2Quo7rC756KWfkAVQVd5ygHbaiQFWgECQP6nBsBHYtdr4xTcUoLYa",
  "key35": "5HeTohyZMHvBXAuQAuFHdGsCNUXiYqrP8YmsscfY7zt2iEnRQhj29HbqgBiRoTuRANtuWWRKUtf225vak3ZpNarq",
  "key36": "2cXLfwk7J2K9iF1TMzs3hbaKTHYbsc64hmVurHYWcWEs66kD5h7ZBwqRcFrnHDyS2RHBSAPcs4uzMPqy3gUc8PEg",
  "key37": "5VLvQ9S37m5HgxE3GPecV8gce9ak7ZqEHZXKHgGhwwCFHjGDjyWQ7W8PnFSSX2ANx4ogYNUfAD1ShWyiv67j356Z",
  "key38": "66D9dCBGmMjyCpDxYFM9yooYffKjd4WMtXsqZf3mv7AFFJvhfeRosPxUJuXSG83DvGxpnQeVfwqqLYsDZ8k9UtNV",
  "key39": "3voJvqjWGBYuUti5GoQwdgtUwbvVhN9zyEAh6iL6xphttHWNsWQvMcuEZMn3dN7aSFo7hFCNBPXESSmvjTzu2aDS",
  "key40": "25XFKxVycp2MwjSeZsksDUkKVwLohB4JTkFucvAnFQQAi2pjTytyUrvoZtYfqLUZ59pX8xf1cc6cnJaxtjx1h9vD",
  "key41": "63VofM1dvgteKMPeofRUm9wddS6PFnax4vUN3Tw7FgNsoQ8vSSAmtjtGfG5najZ7fgsmpCWgtbEKRtZaQnbqg3s",
  "key42": "5DwbBBtZnEQrkVHu7E6fRudEuF7Z6d8yUwa4Bj7k3grntsNvWuy5FDvAZ8Sq8TrEnRraNBt7ZbKDwQqFih3xfur3",
  "key43": "34ug82NKobD3eSgk5xjWWW4HhntMmjn8kdmzDmHcsi2kbW4DKiP35wQsHNXrqxcyR9BdD5CU6AG4EwnZGSNGw9Z3",
  "key44": "9ThWTmqYna88umdsBtiYEArTkfWPFkgmgzocapa6f6VnxoxW77RPnLRUAZYxbr9WUH1ShVksM8KZofepVPEC4NP",
  "key45": "31HPNdK7gG9eiL6MiQ1LX3VTPccxzMSeYZV7fGJbuCbXr5oZfarVJQHK2H8rwV1sXERPV7AWZ5E2scM8imXo6qrJ",
  "key46": "3ty56xq29HUnako6vF9PMSFjZRwtV9fHsjD7fhJBvKwSv71vGg2WuUWJS2HFcsPCAq9wYj1S361Udt45w3zrUKoE",
  "key47": "5Eqcc2JvzxSd5KYvK35PKSPVP7cRzE9oNmqrsV6umEgKFyFnkRbYXLEmkTHiUL9odPjjwVoZZEGLFbPVDUbGeYNN",
  "key48": "62SWmFbFdSbnp9FB3MCdmgkZ8XQ5BESo6Gf4DQncXdHJGGgqpaQkarsucDjyA4k79GsAFFiHivdqryyBc52xY4fV"
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
