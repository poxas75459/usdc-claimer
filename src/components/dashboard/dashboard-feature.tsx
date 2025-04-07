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
    "2rUjVNdLavUtxaWvKr31i92RXGBkqDgBPHRCb1s5xzWcKUNKaJ1tgXmtKK3i9ojqDLtfex585GFMeiHKvRy2awhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NX2uL6T82163azySUn4ZsHbxSNZHuttADHHprrq63sn4iKCF3eSgKiAqMTeW8KzEKz2GTDTpMvJ55h2rXx83CqJ",
  "key1": "4xcKEFi3RJKv6mkFcfKxiBgW8ULiDsMcPz9U5BwqgwehQQR1GSLF3fmpV34Y978QwvsgCM4ZwqsSLSXdy7RYdGrn",
  "key2": "4c7LDx8N1N8MR1SMLLSNbBC8eJUzR2b8QVAG2tnDFEs7LhQr4qakhQyVRZz4feWeT4g35grXQQFvp2XtcVuoCcCr",
  "key3": "4jEgwsoY9btgPrzsTRpErU5EigWPNLU4ixdQng1wq29KRZ1Ur1dW2cLyfMbQbU5nsq9Se5jZpH8XrLUxsh3Qg5rM",
  "key4": "525Y8u5GTi7mGabJKztVeyej4E43AZpHXaWrkmh45Vc7Bfju998uEbfQ8nJGn5rSo5EbC6BEL2oyTMEWny7gB8dG",
  "key5": "DCz8FeJqNCffT9eEFyaWGszcUcDYsoXsubygn1NQvf88fvwbK3iZ2vjE28gzKsQz8WabF1A1Bdtup9P7ktd9SLm",
  "key6": "2NG3MzaQTspuNV5JXBMga8Kz91VLX7456SG4gUu2AN8H13WeVFaF4DmCZHFPK4VHwy5YkWsLDSVDTyMqfHWSfXWg",
  "key7": "5qWpFWNEZQMoputYH4yRchqN1NEW5DCY3Jj4P1ymVfX6QHCgk6LF6VoRFS3XbveMCb3NEjCYsa152pJ8wxXHqNt7",
  "key8": "2fd5xLw5S7JLSRdbHLfUunYg8PxYymPe9S55jtngra97XzQdUvAnS7BCYTQwXHANSoqwZxUFkjEwET77Dy8yDPEh",
  "key9": "ikidRezs9s14ECAdmDZssec6DvkZox9p6rGU8eBae4xNJNpR6wmidViDosHZDNq2zjeo7jzXaxG7SywyiADSwjf",
  "key10": "29b2qp8JwU7NWqcqAaoCYDmqJcNWatW4MqTCz2Y3wJ9Xp1SisHnmbLAkqSjeEHKwUDtgjvu4LqjwGysCJvA7BEBf",
  "key11": "2yofETLZopscvLnXwD8XCKDWHkLXJGksDRh5fXhaKbFUTbwpgDCbmWcYhLCRXEVjMkj4QijUVoBBw8DkzQPTc6oS",
  "key12": "Jvb3oTRkmqyhprrMjEMNv9srAv5sLemANSCPm2g5TURxpjQPZoPaJeYrsHWY7mpffX1LfMSnkpvjTf62dARyxpK",
  "key13": "36Kp1392hzwZGXrSLgDHWpYuy6z5ZCuk9HmR3SgmFjeiUYm7HPxPzTEW4gcs11QX9EiiMP8RCHqNXnsxamEware4",
  "key14": "2J8ZdF3duPTeDfVndBhgzVpn6UMqyiBoQ3i6fHFiKDqqy3pQHLdLuPPnt3Np27GHDY6epoWhVhyvvKtrnaLMdXkd",
  "key15": "5Bunws1U6JGLuUjM7ow9PpdbV11aed3V4MwLeGpBLUevxD4F2vdBCMRmsF5Bg3e3GbkMgLBnCobZpCWuHaqGuLgh",
  "key16": "4sdLx3ZiKn5F6FAy9iaTEHeruuVQZ5ABJNoaTDxQVE8qCkWgJqFxY8t6rCTY2RoNnZB2PvWTFQ7v5bm6PhERj1gz",
  "key17": "5CVZ3MxtvKEbfqiBzhVFSY9pc2pjjThspL9wSrfWSJKRdiomkT2cBS7Zjc3DP6amNMVg13htMyjNv93i12CoPAYC",
  "key18": "2SNaSfMxeHrjxNttmoVwfhfXmQJX7HyqEe6q3KoR8npTa6y9F3sE6Qi5uoDDepfCywWZW63pdMTqdVxTZaGbUW5q",
  "key19": "5C9SxEKMd3GZn9XQ6iigpibhkhvaCir6ZMfvk2XpssUsB6GL3EJv7yLU2SCMUCQeHvHfmoKDjydSA5SCoFBJR9VP",
  "key20": "3YJpoP9LxQtqBDVRcuLxZ7DXGFtfhLGkqT8fhRy4hi5qiRA64VC9XJYQJvBfpu7prtQBRVfHvM32cB8UWWRdtGFv",
  "key21": "jZJ532uP3aZ5dHyCvhYx2nZxMwuCxzGjbKdTUmYB8iZwA7BKcZ23MtSYgufN2Thigu1jdyEEreJknTiYkDrEJj1",
  "key22": "3mixAYRDNwogUzwUz7z3MhGmX2TSFeA3GKTBFEa5MsPJPrahJF1wRx9nbVeai5SWWUzQqyLBYGaQcgXYozPG6eu6",
  "key23": "2CR4TwJUA36YigN9xmG4kzUJFUBgLsiBw9NyCsdkcEGWHbZZtJTSdQka6UsZWht4ESiShuqNW4SVMqPtE6Krh1YU",
  "key24": "5c4HQu2hn7QDR1KD7QfvPXtoexnuV5CCios3Jk8tcgEPLw3YD14buA8dLTYue7hN31uKf3ayBXPsFDnZoy8jyBF2",
  "key25": "5rECe7qNGuoskV3iDc24uxeoZb7JFjcCs5UMS3Zh6MmStVu3rm7bFKHfnNqBoQbNpVnFJYVJFCKKCMpdv3LZp9t9",
  "key26": "33imdRSGq1mh2oLCxBqNzDeMUUk83PZGgnxHkpwWYsguJ3jVb2EVNWP4mvPn3AaoYigWCwnarwwfYwuxKR6HUhQB",
  "key27": "3jmh9vjHFj7CqbLLH3NfVrYmWSQDK18EzJbSJsGVoTP5XVsfrw8ctJ1FZQTtNHHd6RRWRtG5A8JDHHm1N41KeKkF",
  "key28": "2etTrVyNuRX8AYJ6Vn2qZQ4r7hp6mJCPMy1NqKF2xLcERvCMosAQepVViSZZCdkAkTZ6WwLGyiBYGxhcGG1G5SFV",
  "key29": "5ZjuuVxwvZC8dS1s4QpYz6dL645PVe6Z4uQs3gSTu5CRsye6Lgk1V2eySfXupZYypQkUUbC5YvQUKjejBc4WduEJ",
  "key30": "s3uJLbh37i63ArfkUzyMrKkemCEySEC1fvRiouPYDAVSDRzcqnEFdYkGzDZNrRrERDiujB1QEg83adm1Rz2secV",
  "key31": "5RDZDC8gpquWdUWkiQoTgDWdi4Xf9Fq6ATDgiuegkJBL4ETHh34knJcRjLYyF88nF7KmKcXwwz8p1dNPs9MU5Cym",
  "key32": "2RFcCA7BMcchDas3yMjaw6kXvCuN2YRSxqLQKpvuDrLGmg6i3kjFKBo6BZ9db5GnRv5oakdWqR3niasvyx8d4XTQ",
  "key33": "22njCSaL9pfgmMnUD2qeaYFfUcPtAHQ6b2bu2SSCVtJqLVbhvFWArkcMuumyrbEYgFRYmDjSjVfDbHpHeqS1c8YP",
  "key34": "2EctPBWEEtrruPER46Ax18droxP3BAmB6T2MgdwVKNmT8PGsWwJ2iyDwiiLyN7cXxPTACtrUiorziaatyBA2mwfZ",
  "key35": "3p3TZWEe1myCNzvSAkPquHPZoqaTvECiWwjB8ybAMssWshUPgh44dkuowiN15VjbP6ycBbxmTA5jasC5BwPau9vp",
  "key36": "2tqNpjfa1tVanXSS5zRBLcw5UxyEYQHNcmHGkH7oNsfBRrXHT1mjo7GU9tY6wPx4heJEtswz24SK3LEVDDxvhFfR"
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
