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
    "Ae9aN87Gfyg1T2sZ9bw5bW4uvYj14r3QGJMNAx68mMEBtQ5Gbc8s3DDQAj5QCUzYKCvx9Wt6C9eEaD7gBbVxD84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBa2QUK8mUbs9ZCHFe6DKDoTS6EJKLwpv7o5qtBUjb3ebe197abpkdzhr34hpQtPF81SofDDDQEeCaqt36yKqu4",
  "key1": "5oL7xoUw6Ja5oJja66YSyMPqXHZeUbihTqbJ5HfsNZtbwogeRFqE7fYhUanxT9zk5oZNXt63ZncGYDJmQbZ4xVXE",
  "key2": "4zA5v7x3odoCg1EDgZ4vAj3pm1Ee55pMf41KNS3CTkLcny7oRjUktsxfKLCda7BhQL1bBn2REaDPwBo3CieMQsJ2",
  "key3": "2GonFgcsWhJDP2FLpQWBPk44y79z2TuTzVLS6KXVoSKG4LXyafArqqXZmVoj1qVZXjwtBDVKMkpMNvFokQUHWr7b",
  "key4": "2kiTuGA6smpkUa6BDVXo5ctbJC2Yfkf3epVEjRjjd53nZxQ3wwp5QzxTAe3n4gDe3JarZw6HjJU3NG3ZP7hmyaFa",
  "key5": "4PDidLKKKWS6r1bCYzzjfD2gvugVMUzbzKVVncrDyopw6K8DncL8cizqTupM7KyZQuffL8TWsFKQGYAnm3QqVKxp",
  "key6": "2Wp54RXkFeNVindYGopcCu7WStM1pqiEL4m3h95ANHz4wfFb1etLJyyqAazqBDMpZeaj3yhoJyPKbg8Y7YUHxkRt",
  "key7": "33eEhdgmnhR9gDBdhK6jBv8AGxejAWnrDaRgZ7pzTYjyn1dh9KjqfEsQtZWJWAeVV6PaD6cPEYUMvYf2Y1MaumcF",
  "key8": "r5Uz7ujEzHdi5AazpV8ZDSi1w4CPCo6pFpd8cbawHAQc6H3QsWWv6LnxxA8xjwkfH7H5qjmn7TVuN7mrh6JrYbq",
  "key9": "21jJdbKNxhYoZYiA9CrXsf4ozJhXUdocCoSthbdYcXWuZowM4UBXz2R8sHXxP2YYaf7zmsmvVtwfQwUHzUNcDLtJ",
  "key10": "2KsaBAHJiNpJehSRjXtTo6MSGxBwf3AG34VSEaREwaiXY9EDs2b4L92jZFwkDYuZ22RcxPC8JLZZ6oTtXH2cAPhg",
  "key11": "4h1HdQSw2LBjK2Mq3CDeThVNQ5k8eV5TpKvk7pxHei46A5skhZSZ1ax3vQjCj9whWbrSotZRGdsauSuqvyR3umcE",
  "key12": "X5xP3pzLs1vLiXoC39pMmZB38Sagj5dBAkTe62j5K8bZZ3hemiQhMwr9NqM8bpLoUuxEbij73aBf3SeLw41n1yA",
  "key13": "4n3fuiqF985X71GjFWKBt2D4YMhsQBfNNnLXQGFCDkt1Fv32rpbMmG7L59buX6HNQsgtv9stfSzQJA2zT9vZ95bh",
  "key14": "2PdgkRTBaRpizU7eg4mygSQarngGBpxrbSMiYrt96S8YYnV8KiJXnzDD4ktJoBtQUa4Eg72vjWhguuxBLnYLmKt6",
  "key15": "R2HxEZA3npzPZNpnzeHnH4bZ3uFCqKkvJHkx5xrTTbrjWX1unML3H9TcRh3rt7uDu6GfJYZYYzkJmhqwAuruXZ7",
  "key16": "3eZ2cQEjAZC2CxqfYWmdiEWv8J4j7xJXk3BEyPyavwFrH5g1YR7bomffjWFo7f3HdFsRaqoE7SXQA8eha1TDW1pY",
  "key17": "2evNHVzVuYJkT4ZRESLPF55cMkVarPLbHGgQ3emQR6YL2jkMekAsnScxWVxA9YwCE4VQPndccFbHtDs9ZsY1jCJD",
  "key18": "JWYeoAyz1xYHUz2nW9iwTENq33J11tMBiTfEC8L4isCGHDZujQLnGLZAAMVStxK83tHRzRiYTYd1Qtf5dMwQuhz",
  "key19": "5PhLS1Ebs2qXUUTfjwWRVqxBh57F1WTgpsjKpJXHkZkvKyFZFjzzHHC6Lv17TkhvVkrm15tgA59FFqJCfdEJmscu",
  "key20": "3r6yZMNj8Vn9VPDLp59y4HS4ErVF3Up8xi8KREA8Jhd21o7sK9GD6VUQ4bcsMmLs6FebGYds14z8XJ5gvg4xK96A",
  "key21": "5Qs6YumbQpr3j3jgLVre2vQuE3WDi5YjN2RFDJ33VzMZHvwXUNb2ZSqKAjfdYw9TFg9wsi72PnDQFcuBfsQAasJv",
  "key22": "ifBt5pubJiwC7TuJNWLHdKFtPxHRJuBHoMHtUeC278aRK4kNy2gnjPPGWLWfYgWpywFd2f9NJxUcNrrV723Rxpc",
  "key23": "5Qsa9WwkcWPigwPpsAt8gwnXSHKLYbgjBbTDZFZihe7ysyjZpnFdcMQE4PSEhvBv6VYRtajzehpjv12ypL4YuqtE",
  "key24": "vaviFZeUx5pELL9Gg9tWvRXaXUvHyRLKZCzHZcvvgN2Fkdbrixdw9kGUeH7Q53NYEYmJmYhirMoeijRYdTmjjJM",
  "key25": "2NBypt4P2uYdpok6muRoi9rPGEBbG5mbDmP6At756XtsznN9gE6B92d7YeaikwYpGCWnbjwni3g5rkuTsa2bDYCe",
  "key26": "4kKfXeL5yUS5kMVuFvc5oCTHnfs3TG5xpDFYpxtmmZAnQyS2XcoUWNPrcUNBHBR5Mdt1uZkSgBGuR55iPA3V1hGx",
  "key27": "63cnZX3FNkfDz79XAVDjahnao5vTBTBKkRHp7jZ14Yf2T3evAAeuSxxhWSNMYqGRBohKQeYMrR67Xy3w7Zu3ffdB",
  "key28": "ZkvwBWdkbjvDqz4DGJvxMMax9c5cBahAVrZSAScgC47U8X9bJJjh1X55q3Bq65vjiy1YaTGg6Qv3FvwrMKSjRnG",
  "key29": "4rhKs3qRKSvTyVaYz4sRFuCfWhtvtxig7HF5ksr9wnQqU97nqtFcCmaNsReUZKi12t1CpgQo9AehLSZ9LJerQ3nd",
  "key30": "4eumjAvELggfWUWu8VFq6uH5oHyao2CREu1syoE5hzdygRk9WZcz2vmaAc7XZAsLbtN9RRWn9ANRPRXQxKML37ba",
  "key31": "3WtrSrCC2yBGfrt7DmWMiWVFrL612VCpTjxT4ZxZhdmmDu8bCiNkKFLGDfFzUx17wrLr25LhnMQfR94ofb8a5EnR",
  "key32": "5nqzUdzsdfc4DAKtuHZCLnhCsYdjR2XC11CiFHuaxC1gQtVYDTqzaXtyUHfJtPhaZrQD9UWqTwEjvGvaY2ucXA5a",
  "key33": "d9M9tjzvrq2vhdQG7bFKQirX8tUuXvYMUujdZDyd8efzEbgqtdVuRF9XwVHDaeHqRjT2jBxA5LrrSsVmijBk63x",
  "key34": "3KpTnMpGHc7wbLnBftJt6oHgESe6LQg4ydfwh3kwKzgr2WqDLSs1G2BoMGFrZEDMgxR7VMi7VHYFXgq49rdE2kew",
  "key35": "2AoqpT7uvGkQWC34BUoTNnbUcPjfU26miSVTEkybLPFKC3LUnyzrPXE3XyAfLDVQ869BUGjrEqjqF14ri1xUSdfD",
  "key36": "29yKaYb24yNf1AypBuQ7AJdyCq28JWHNK6cj8iiL8cu1y4GCEsNXWf3pz11mXRfhyBUzmtoLv7UCcCs82AEuMQUu",
  "key37": "3XB1Yecz65aKyzGqsHu5vuSaPFDoDoFLzRDMihSNUchf6Ctz9kP3gQcum7kviqaZEsgc22iAT4MrNqV9fcsSFjSx",
  "key38": "raBenpZY17YutzKPvG8sZQy2ohvXfDUkAUTnw85U73wgHhJn9aWS29FXNxm9WZjkWxMJaeZ1MfKa7rPMRobCHfL"
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
