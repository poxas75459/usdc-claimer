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
    "3Vw5SkYFLXnRaTEVwDTCVo5B1Qb6rhiNbLK6jYpqaW17JVqcLAYBqUn4Ab1MmPhfh1ToEAQYpaT2P8HXzSEogPBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vz9fTWmGmYyFxFBoYCNahUDRBLwVezpJjwXmo3zUm4PE9BZzwzNhzkFy6UhuDnUJFZHA1vVy1Gq9EMuzfL5Ei4h",
  "key1": "2bEzr1nuiG7Ccs6uSPCAaE7MUijkyPgvcM2UZPFnwWfyapp4nqEBoAd8DVhdrLh71z4K5UDbw7sq3JLpBtSCYZ7U",
  "key2": "3BpPCyycQKREkayqFtMEhm5nKoAgg53Ma7Aw2xVYXv6vSs1qJyMzkqEnHwTo58rDN2krTr3McCmGWjEnBNpHAuiP",
  "key3": "2J29tJnU5JmvAcYPauhst5vPVBkzLTJu7XXiMZBUoV4GW51UVTZ7x7ATxm3tvNxzrvqGVjf9ukHw9JE3Pf9HaDYe",
  "key4": "3gvRxu5zrNYxWubrSNtCNsFaqkEzx8EJZjVgTnkKKFxS79br3LaFwsLfDPzV3s8v1BtrZn1edD3gCiUciJoUNZWd",
  "key5": "3KNnTQJajN3aLjKjaMAr5nrPzZ7Fc5nPn49gdXVaBu4twQvh4Rk4M1EvyWvWm7PAiMeGzb5Qem6xd73TpxrjeA97",
  "key6": "3H9N1VxymFnqiwmfj1RFYkUAWSMhQ7sCWPm69nLDH7CbmzjFiQRmR1G2iDkcEW7uAtt6d3UQTZqQmdjvLtiNSfRA",
  "key7": "uEmKjsTaE13d4wZvCkRSnfoNmsNPVG6zsGegCpDyVa3ASdJgdBJjXBEBp7pfNAE75GDq2t89gYUW6Z1QNBVqRn6",
  "key8": "34dD6L28tjXiHyYFw2BYQ334G8H8fMXvxc8saADrW7GNnQBFYK259Azx2RgaWPetHpBdxHgjxrD9SQQP7D67HBeu",
  "key9": "4YgazsrQLks9DEP5LXPzjCqrKXVDX61MnduDdq4LrbwVmva2DAS6mj6ayunURYRUbbAXqb9R2CK6L3cwugyXgy9S",
  "key10": "5ki48CB5KyigQVuYKnXtAVTtqtLjuvS512XM4qcaw4dMEAFfmg3vLBZHf8spfAFtsxAg1Y3ENYNB7us1MLLUj4Wj",
  "key11": "5tp43psyWqfBdfXvfjUMM5rZReg8S3CZPVTXxN2wnJ7XNEtW6HzncrhNHLLMYu2cbs4KrVnfR9AZhSnc1Bz6cRQC",
  "key12": "5HYadQ6JTZutY7SYtP5EFhGKTes8MbKr3ZY7eeVXSpvD9fuYnoapRZc8nL1CTW4gn5S9vNgefQaDjjiqy4y7ZXmn",
  "key13": "5g2iwbMV76KS8Ln7x9ZoynZDGehsHrKwPUv5J1xuDfZYyajNKejqbk3dQxwYV28GycxtwP6DDupMTjt79sD9L6RA",
  "key14": "4c175QYMHd87dPc4gX3KPeDquPQJjjj4Yhfr3frsykWZWrZGJfKSRT66KfnddhAbJVDm8APheJ2F73xQf3g5yhXx",
  "key15": "3HQC1W8BUV3iA67aCfQBK73Umgx5GdAYWffQ2BP6JqQwkH8b2ykAmMmSahEU4ekzXjskFQNJ1k2bXkxafcxDJ8pM",
  "key16": "2ufxzwNjFxP3VEgyZcFc5sPP9o4ThoCbCfMMeN8p3j3m17TXPnSepGLSj52zwUJNq4zCrJEHZ5sEXK2eZBvDjh4H",
  "key17": "63sVNicEhXUg1GHvSieEFkqt9q6eAdDmjni7ewsGzf3dwBJ74uzZDFENWsTkRA83RDFXJ53oSq2wcdqinysPBcSC",
  "key18": "5NadREEhPtGDZnBXdKUMz5rBbD9qtZpnMHQKQPAFHTYDAP9UM61fX7p45WY9GAv3rjeRaHrB4jNz5p4AE1rEnEb8",
  "key19": "64umCfksAE9ahBUZMjXyfnGxxcvjZd2E23Rggnf1M3spqKsDv2kmgeegNo3NUDDZcBQZ9FzVBcUzZFFCK5Jbm4Uu",
  "key20": "2t5fjFjhckNjPTUX2sswhF5nPKjvFRnwHCTgMaYeonPAGATcrEW6jz6Lm4JUsuYUx6XyhVmHERHj9Ej7gFBL7Qtm",
  "key21": "4Nd549zzQSv64uinFYBcngw3FkEKu8Nay3WjFrNKHWbpojNDUdU4M4cdUKQTG62srZzvYLRhEJ1kY73Nvcsa1XTZ",
  "key22": "2USigDukJ6EPcefe6ic3FanT6oBDepDykJPg2K27QthqGwJ8TdNYXgd6zaFHtr1gJ6MEV8gZzqkZvQXsgziW3xer",
  "key23": "5Df7gEWhcBA75Rcp6giRtUGd3EwgUp2rCBnw2XXx9Cs7yVjmu7ZFk1AGWhDjQPZvWRyQh6EPpd3hu4zgqeAYWZ8z",
  "key24": "UWuGo7chwBtxWUMSiaQneZsVdq8KKf5V2SaXqjytij1mdw5Av3nueynQPzsJeULFzAFuDbN3PxwMV9NR611SySA",
  "key25": "5sx7bRTEM2ZYN79LP3qjChgQdR9GYUmxfJUiVygg2UNXGSHLm6eua9BTNmtmHbfFHGFePmtngaETTL6tNLFC9xPj",
  "key26": "3jxB6dKP5GxRxSSu9vD2rEFxb6GqsAWwteEougmvhqDeizS6D4iuo3tTC11EstEZxjKfswQPRVQX8xDrqQPxocEx",
  "key27": "4P5gbiD1QVc67DPddYmqirGsqVkyppykWe6ERPi7akbdkdXYkje4twpynwLtApRkjPYi3NgT8VTJLdXS1N9UUGWp",
  "key28": "3j3BZ1ipp6JBHNuXWdfYMNs3WQ7AiXocxmFmgrQc7B7cFguruwoyUuiihKmP6mZXHFS4KMyZugSmr2FGC6xxzXu2",
  "key29": "58yyrwqQNYn7xyegbFmAZFM2JSFbqa3xm4sr1ijXHWvsATaVtui476Pfs4bS3JkFEH6Ddu54f6serK1MxyavgT9e",
  "key30": "dmo3yDmUgHwK5fM6naouk5w36Bkgu2rMuMkQJHMgcFpYg7whyQnHSpaLNxLeJ4DAvdpsXbDWecCotGFzCuDPiMF",
  "key31": "Ta5ZWXhCMFmHYec7Kx92cUVRYjxXRW2ag4nuNCUxseQj9jTGp64iin4VYn63Tk86Y597H5iptzYAHVF3q7x3iL6",
  "key32": "3GA5FYKMy1GJGZ3cN8moFkAhk3sffLNWoNweBMuxH8wWRiBnprfzv2eDYzXhqzEVBXZiN9tR4998e9QqX2WSzPgS",
  "key33": "mi1tJ5pthuctiahUUQGtryRvSwj7vxga7ATHynhp9iX9M79NZG3pGBgmjR1ftN16S8N4t1CbvRE6GaKEmm6ZvR2",
  "key34": "5jD4XphvRopvQma5mo6NGKhGjqqyETZps43XvZuPBBYvju7EiMwJcEtxqNdzBk8pNpPC9BiJ4Grguzd1awwqEgxC",
  "key35": "3dBXeLdar5c29MALb5MHduSZN2ueLgRKkiBrj9ScMHrfy8LpcbALhm1L3GjUuommsSZqWinLLatZCWigjs7D1omn",
  "key36": "5fe55uS7bpYAMg7Edj1GCo4zXXNbEz9DBgf1RuNei2YGx7kTw9Bwe5bwQNjFCe4wmhXungtjv6883EyaWWmUE2g9",
  "key37": "2gHRmt79xpVZcvDXKtxDqF1KtnosU6ZNC11Jb4JYVUZm4mXeAiy1FNHVr9n7nj5FbDfr7sbYoj77u6Sxxkbrgnew",
  "key38": "A4Gq1zBox66FSMLM4ReZ8j99K5gi9sSM4AXQm9Vibed3tPiyV2yU1CMNrQM6JEYsAqyjpSktB5uQBpE6VFat4do",
  "key39": "4bsVW4cxa9KWdKaUrKYZ14otD7Fr5BRyD2WzfFqS7j9TzSf41S2GNxce5jW59VQ1DWGcai4pS4cWZ8jM8vRPkaw8",
  "key40": "5EToCEyUL9UNkKKJW9q56WtVng9CziVRFEwoznGsEerjaLYgVeKnmBPhu1Avqci8Cu4BZWWH8igxPkLw5J2pwiqt",
  "key41": "5o9fnXvxA6K9xPxjwFmaxsDpggnBW4JPbV89RSzceh5w4tfKPUYvvUEfaUoRwbeRrLQfzPjm9P1h41jDUPs8ck69"
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
