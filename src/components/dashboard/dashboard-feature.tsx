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
    "5vj6LuyEbncuuTPChsGfxBt7HcJQYrjeGfefhqM4DYQze9U46328qX8g1eiEzekoaFV3ZUk2AVdbXpuYFL8aTVUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "622Nxf3yJs86eVWPkabq4Tpc5YCBfARPPa73T7VMHPYCNit45pGDFGYbZYQ1W9jECm1okCCkepYhrDkUodoKEPdp",
  "key1": "EA16wFX2hjkZPmbimNiraXg8ss3up152SU87duuDwv1wdxfLZ77kvXGMLwPPF5xAQbKQQLMLdQZ3eaSRyStoAES",
  "key2": "2fdWzrQXMnZJiYKQjpmnB23R8Q5hh38grypV9vKLPNib9HnjKjtuy6nNcNi7379cGkbFf7dKpHr9kAs2famcgy6K",
  "key3": "5rMu5UxFsmN7HTXY3psDxDpWru4fKJnmhRLW26s7kCCngvzTh3zn7Z2V3eUrR5KzRHXCUXuW44iEpfeo3NLHiZTm",
  "key4": "5tnY7proHnaBRwbTA7S6BUjCMrMkfgHG5aZyNDoSy3JY8ajzx1uSAgXtP5ukuWnVn5oFjbpJ2jTwQhMbeSUgvZCQ",
  "key5": "3DGAnNabyjsFq2CXKyyJVE1bba9zSR9nHwYEskuqCqckV8zqYDt2Sggch4tiwWW3eGFT8P8a266PAqo4i9MCQUoX",
  "key6": "3dxjmiVCnY2rGiVo7Fygq9nyEWdr31E4gDwoDL7p5nDqoYcBDacdMc2dLbvEKWEGdRv1X2K5X6dxAuTWNfoiH9PL",
  "key7": "2A45zcooyBW189CFNwYA2gsUHpnxKf4w7KEvEWc2ncMzykq2TEP4MTmhSxfmtmJM5WH547b1oitaXcS8hERAuxAK",
  "key8": "3UNoM1EuHghe7nZaVgeViKEXxg3qqXE72wH3A1cYrx7nof3yV7LbyKgkGa6XiobUNAv1jRwB34rBJouKFxyyHqUD",
  "key9": "3j6THVgZfLuTMnBGoFucR3KFUcpfzm4n19zcG7Lpa4SUvxa99YxgqYaLTqKNUXLDj7UT1hJqux2q4zMC65SAtgs",
  "key10": "66cFZszuS1yq5FRmozKUxhNzadBC1q8THrY8PhDdbsLtHpz2P8ALLP6oaFPfPJfWueFjYuG5tQ9adVNjSK6CxhVo",
  "key11": "59pJGSXXB58cMhpKTE2PXWsvP41Q5JBa6xJ8vfModUU9qwuSzvkaPiGShYyc2tEe9Ljn8gxfokRtq31r9udgZksA",
  "key12": "4T2Q39xGnSPeUvwwBkcUSqW2gSncvrNusdcwUJRpGUzGkwMkm4UpKPgxHULghUysM9gcfPoWVkhhZg1PRj1CJz4C",
  "key13": "5XMeo5mY784PoHdRA1tkFDxniFPsk5MEfBCubaiv9CXKgY7fo2MpYXgKHKvzVg5LaM1cGGj3EpGgdVsUKCujeKt1",
  "key14": "2kn8nT68qC1g316R2qBjcabm7u1qxGncDDQu3PUbU5gyWEWB3yLhxFJZR7rikZpDnhBYeBUyfhnpsaqK35WknPAb",
  "key15": "4AJokR8TjcTwSFpjYoWZ1yGTjoCafKrUEi8w8YCTLZDTKRAt5eFV6LwupqYVtXMXkdmr67DvTyYZwXjR5W4z8ATo",
  "key16": "mVsCcwHtMZ3fvUT5tyhnT4RYCP8eC1M3FweKKCjFfudRCuaZwdX69tJrNVSJ99PZh3nha3UUXuPDAvLW5MLKjxd",
  "key17": "mii4B2xxrAAY6qUDLC4JGeD6YbnK57SoGj7jwHGM9q1r5W3DmACMbaWCNzTKoL5XqpHPeu5PGaQDehGM3LQMp4D",
  "key18": "52CiBVwHd9BQHYQjjzFxQ3H621z58zuoGbeGiVnGFFdfUuftXTjdMRV5Eumzh7H14QZHkJSFwtYedKcfwwBZ4ga5",
  "key19": "2b7DQphXXdy5LRrGHvk6or47ab6YeMaEECZNRarjFQVJZbFXuK39txz7DX7U9iau4z3nezLN5P5P4Tjm8SCKH7zo",
  "key20": "2h6BPc7J4Hi9YW4UX6cu2qHcygYC4UA8UdNSYwXj4P5Yn6keLU8MrcZivBE7Jned6rN3TW7eGxeSjjRrjhd4MPUb",
  "key21": "5gPKUFt8jqDwGLvdcF94hGmKxvNkYefUkQFUGVLRf1fBFLEv5VKfWRQS7f1aBwA1te4CzJw2mgLC7jJ4Ce2jwiNo",
  "key22": "4E93538boYqSTeKA74mRrXykRkA7RxmUWE8aPsrjVPqwSeCnU2YRzSVCCSmDyVjjsdJeb5Buj2AjTJS6pv12btWe",
  "key23": "5QjDug9UGGgHRmViwVHHYSu3BtCAjEYouF18m6WBiC3btm2ezVX3QF2CYxyvNZ1yTuqgYo39amReap8RPG6FpcUu",
  "key24": "2FL83CKryceQTBgspNbVAT4nH4s77EgJ2pS2wHZgzuiMALncFUB7oUbXsrcPdGDL2k7Muz4psQN2ZUw3L6K54Yqx",
  "key25": "5NK3sSvMK2pbNXi4NJiNBuBXCZoQUCTW1Gr7rmBUR4YoDAmsLALbkoppVKx9YAqZKjXpdRaRhaLh6gm6uSwH9Y5V",
  "key26": "U1bkskVemsCXxeg8WZHLFtJNNZvjYAS78EX8GPuTMbHePV4G5ggd7pXW3dK4JFUVXV9ZXB8LgqsyaMcEFbUpNs9",
  "key27": "rNPbeV1xmeX4XBaXkj9eE1EhzL7HnJ3NniwfaNHgkNLGKspMPK7fDFEc6fAoUkKo9yRZayUocp4SqmVYjkAzZww",
  "key28": "2o6c5ypMfAjDRQMgvopxdkRrt3oR9bVmLCPE5pZqeYV4fykrqKwxCSA4XKGyMURFj5CmCEQuHwdLvJMFrrQBySms",
  "key29": "3vNuD61adQLFnHsdCtXN4Jkzd9Nrtdop9u5n7URRqLA9mHkbGuiNuMJ8CNVqSLJUzC8fBg72YTkorjtXpSHgSADN",
  "key30": "2Cm9VWFUzRFtfNSDHRMmTQJU4CwPJa2L5KiBCLsmjc1d6TAx9GUydQnycZ69B2sfnGbLYnzq85nPdCyjJAPpcoXA",
  "key31": "4HEssWuxP8NA9dMCwAf7maM5nddUXa5f4moKBQbdnmtL7j6GcJPvjTseisrXbrRHHXNYWRCrJyE9HjuK2aXGYDDG",
  "key32": "5kAVxM7QdPTRxSNqvmx467EWvg6MPLdfSmRBDBVxu7ewZWwuinPd5khHTMLctHLCfRXjFoqJ8TXvh78KtugEiGAc",
  "key33": "2u3REd911nTMkaQuquSr9D1iU4fYZeB26zTSTsa5CUeVziYQvuSn99ixBiDZp7EJULnzjZFyetNAmmQUkHWJ8mVo",
  "key34": "5GwvZB8SpFeZv1XwfidA4qcgC5sDWd33S943yUHkbiEf2z72ospaisS6ZHcd6H8WxQeTbhsECezKbF7JMzEozpgr",
  "key35": "3yg49fG8cURyfkt1M9DMzoHd8ffnBA5EzCy2wz9VAAWgbihD3h8bGrHejvoEAvipwyjZKbVjvDCTsX7znMEophBa",
  "key36": "4gHwknMED7BJ9Hgf9Spu1ubTZjX4UehjDbSaVuFuTvnvm6Rsoq9HfDp2tx1C6bwaVsMGZUVgYxCLQgmp9VFwiKWt",
  "key37": "5MV7TYJRy3w6tTQw9ci17ZK5ghoqRGvKqcfkVWuGgLoShsgTNQPDHmV56bHc5CLxsejfCsUPAaH3A5YAeCYs5kSi",
  "key38": "2RVo74AkJsa9fgfSHSCSk9j5KkRpnxWp2hXjRrgtFPaw5DQj6YJQ5EWbQFhFxz4czTuiFDqiCMk7k8o4orpU6LB1",
  "key39": "3BzErd9PXRBHTn7Q7fbyjBY56ZigwtqnceyoteFB8FazJQqX3imAQwbHbn4Gc9TSbW599uRWjAi69zgVcdJB7X3H"
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
