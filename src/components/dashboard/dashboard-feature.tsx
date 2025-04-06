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
    "21sX4ovKa5p46mqmFoM5oAavqYNdJ9nEgvPqVk1rqyaQP9vTEfHeuomAA6wJHdCUEfva4W2J8Rut5AsPMHoBapSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MzbKFkxEz35f977UyKojqubZijeHWqdT8Uryry3Z8LAwjdDsKLPVRyqm21QKSe3kAyXimQusJsy8DyZndnLTEP1",
  "key1": "3GAD1yJtkKHGCKd5d8F47f6jkDLqGL2aNTkLtKnK4fCavRnRNeoUA6rWw6UDgWeeq3RfmFczEoUZQkPSkmNyacbr",
  "key2": "57SzfiotZSgKMx2mn5RTqJ4Fk265UxpnVewPNfGGVkAhQemH8aHYHMKiQu1aULnFAubVwdHa3PaA8GgYN8fysijM",
  "key3": "3NWPjYijKR7Jn9dhVLdHVb52FHcvan6Lz1MWpLXkrUH3wfgzv252hqH3CDVpRMcrDQTr3Zyxz8mkWwhJ39u1gmQD",
  "key4": "5gk1kD9nA8zk3JZfqNELJDGGHpFLKp7StTgFSJzMvj67o3SrZz8jAW2TjBLwrmZ8wrp1Fr96mnEK1z6mqve6bzCp",
  "key5": "2boh3P6r3mg7UxesVtLDSMG1C3uiWFy8HtNCa9nRAU3aRMAoBWwaQGSzwZ57rBDfjwXznPqeRJzhC2g8wbEn67WY",
  "key6": "3g1xzZ5o8Pb6nkuQLdRgVmzJR1VZQpC2Y3y19PqmxMWiWiZoG8ArQQtzW1RRU86qH6uPQdBxnBN4RVTLR3rtQ92J",
  "key7": "2f9ZGFWSCySXghngUPJBwwH3c5SdqvvPRXRWNAKZkmVGbvtaQRZtgvGABeTFEGYqxgkJuZdyCDu41kWs2iFFSfUn",
  "key8": "3AapWVYm6T2BzuyZ5ABTewsN8NYKzVLgumyBoHhZ2HdhcxiSyroY3mQDAxWAVVGfA26gUbA6QAtZ8j74KAHNqWXs",
  "key9": "3We2w4SzoLZf3RptJNsvfuMXSxavWz2aBdH6eu351xZY3Ke5RwEu8bDwv6znZxkhY93vKDJcQMFqDHr9kprpi15V",
  "key10": "4fnQRkDjbqRwHyij89dAPncsSr3zE1X4DhwLAH2bKk4gTfjDFBwACPMFrBMGPHrKW6uUq8UXiGKtXBy5CXVn5zp5",
  "key11": "4tvCyf4qsyb2ry4qZLRycdkrHwarSkDSfkQTcs9y5taUErXKsePdviEKNzN6yM9rMhmwKqRWHjAzPdLK5hnoFvzE",
  "key12": "4n5Ru6iVddbSWuQ6CQW2vEyJgTHadvmVf5TYRDhgwX93ZbTYxhAzoQvWBGd2tNTw5yCt8TsZBzok94gnkFr4e62n",
  "key13": "3qnFaQnbEs3fMRosSFdqnSs242i2Fe9GwVmAWhWXaxvt3L27QTZuSUZXK53RAEXU8iH6UeZkE14Kq9MA9SRNSExD",
  "key14": "3EgbcxrXCxnLao3X7J8USBtDtdBDG9Hv6ah5PT4xE4WAtHPNvW1gnhs5CYV72sa5rLntJa7CrudRzbi9jHyXiMjx",
  "key15": "28TNpNM66jPb3u66CvvjH5e5VyKJRBNKe5p1B7urNbeDtG6kSiBu1pE3PrkHf7RsfB37tsvoMW28WtwV7Vdd2jY8",
  "key16": "4MjWPvmnDmbC4zG6ZH1aCwX7iXkND89vNFtDrX62ieWw9hXqLj85k8hi1EuUTqQbv8QPcHb82trEB5w3cFpG6QPd",
  "key17": "2vSa34B9a1Wa8HXimuYfuqsp2m16LfnzUrAs6DXYMtP9o1tzyzNKCzkMZQc6A9ptn3J6tNkkwUfcgJ8xqwt32f1n",
  "key18": "3kLXfENdYv8Q2HnQjneoEunjWax5dRki2ryttaQ2N4Ubzne5TSvfXmFD4rwMvqRf89poiZGpAdapQgi513tgMTGX",
  "key19": "9yYa6vpcZhw1AAcjri9MjYow1D8VRFR8zDkwMd9Ko5XkRsUy7erdkWELAZnBj8ZJ62Xg4WWETzKUmzQHWTHyK7y",
  "key20": "4PGk2q9qwkBx72V7eUpspodqX3A4chgPwHZhHX1GRigkXHx13b2x9igxSktBVKhGM3U4bZSKBtsqAxpuTzYRdRb6",
  "key21": "3B81WmnWocAtPXNVDUmRs1UHdBan9feiiPwjcxy6rHEm6piUvZivACND9sfaSpbFSoaFSqBHRztQtDqRjrrH9yFu",
  "key22": "4UXkAxi6pX1kajAMfnfgcXvr6fD6WE9SZ4Ntzot4KvRcBxc7iiWcw2Da6q3mog63aFtzvPdD9JaoPajHUSJbPN3v",
  "key23": "5LCv8jhRy1iixn4HEC5xpREYxG1qUU23g67stkC98RiU1NMSX6LVSxgpUemR41DN9FzwbgP9ngxXALovQaE1FW8c",
  "key24": "3t8fZhkrR2i8TmjcYvGu5KthRjx2rDFbUAyyHzPiV24j9oAr2qJw1uN4rGzWCXpKk1jhTzHiyRpjp3NL5tGE8JP7",
  "key25": "3715pPZCKxNieFCcwujo9am7pBhnDYZyD2sEdgfzSi98wrVLKSwyshHkBDyoNwVsB5VVVVbh1gFG9tW4BJoYJgNx",
  "key26": "2NEGasA69gwnTnR8LseZGP12BMdJgTzgRRpf2Vo8Y76Emp9hWLpgmXAdpCWnGDvuqeUQGAZBaDcBKPNDerJvKoXU",
  "key27": "2tPbAjgMMbRxCd1gqSjNpghV11fhLwkjzWzCxH7ZTH3DQsV3yuUtruH4SsaJCoSAeRwb8vFTgRhFNTjdMLYRHBv8",
  "key28": "3u44FpRhwX5FeEThy1S4swZ6RMN1Dx2PnEoaGgKq3T56Ssm6TaRx1cjdBsjtVv9uGD7s4s5Svi7ti8EtSHMebh7G",
  "key29": "2tJCr39ttNSNng6v46Vji6n1etEX6bVHY6rbWgAvtmkt8d8BMWQQkiRAbq8mggfiKxwWRoZMuxWPYZjQjsbtLXZU",
  "key30": "42xewV2eQr58jANS14oQdTHWtE2L9MSWvrJuTRYRbNCNySv93j3rJjbHSvHUuJjPbJaSK6J2ftKf7rDms4japMrt"
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
