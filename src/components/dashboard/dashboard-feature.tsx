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
    "3n4JDmqwzhJT65yQ7tbQMZS1ymFmpBRLuVm8GiraSz7TcxcmuY44ABgmpwhSVyBjoVWVmfMToL1853NdFAEzK5ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "413S5Te1V4ktyzqaUNX1V7aAjLZPkK9WYNCHwBu6gQZHfy8KibAwTBufdMmZo8WBmdEMMEArsvHyHcNrr15nSzR4",
  "key1": "2LBuy6ndJA5djc2njLZmxSU76RZgunqZcM8W9ktuxoU5nXUJKyF5EPKmfZA2ot8pZn5YuZjVk5k12CrD3PWGEm3Q",
  "key2": "4wumVewQHz5CRix4SwTWKDmMhEWfXmFFqA1K47aLjLMkghAgsinyYN14Hx4eg2QWdgxEN1WRqBfPNfhJfVqTPUHx",
  "key3": "yxAR6AvNQW47e9hph3JeiFm3THAyssgJgTpd9ivC8ofoNadPBg3HydhjPo9MpaedrLx73yjKH4DSDZC5g1ejEVT",
  "key4": "4gvD3Z6QUzPGxvKWQ9FBEAzNn5cBP2ioMCa1npCZ24RvZjFRciVC6mcU2EtVFMTUXsFYhBLdesBb6q6BLzy33Uwb",
  "key5": "A5oss9KgAWWwrYML1dbM3TQLpKiZALvdNYY3JJykPyS6FXhftXYxHTacFT4T4qeqEp7ra2TcLUHoQBCwJ1s8jyF",
  "key6": "34a4CkKGWxWN9Ra191Mn9KhKUD4oCUxvnFqMMA7AfZnHLzUcYYchFLGhBCZDyVdFwy7LhAqpkq3Eszf5ny1UvS7M",
  "key7": "3BZWxtYkAprjhJ4QqRYhftBvVGdstNZvqsoesiz6uFmQ2MoZLt7WJbyiVwNjfdQpmCQjcQEjkSdsf24No6Z3Wevm",
  "key8": "2Xtau2iFYxB1gCt4jidWHmH5tRUGpesSNSFpV8n5BYrBHBBxyrmVv6dTCTQRGoPJRayeBn7JjMqaw2EcHFhWHKBF",
  "key9": "44v6VUY4t4rYkD3wVwEg7kjZ7gm97m7Ne2Ye5KnHoD1dKad4CBzw3TZJf7ENQ2viL65dHPwYLS611drrwQn4e7vk",
  "key10": "4v1mX3UACAJctfSUTqSrgbRhKGr5SDBgrTu2J3WJ3cpiXUEnjfkMQvTC86Lcxt5ZWYEchkMVZcS46TSJ86jdfjhG",
  "key11": "AYcUzzC9N9Q6z3goB8WRfkmEGa4DvZhToJxKobfVRuSRWZJSqDwcQtdbobjogL1ezAZSC33txZ9VowsSsFULt6T",
  "key12": "5nJkTxHfXaj6gtL2XvJCGmBDLY5EzmMkWGZEjW4VH3dgjfQjzw1hDU2ygxbkrAmq9QmDxehx1C3FeHqxbbCFzwpW",
  "key13": "4BcRRAfGXGF3tEbtAR1ArB2wNiEGAXnZWp3hyA8vbiestpCsTGesPLBcBJPF99ajxkNR5mbSmJyjzGjM11XFtgpA",
  "key14": "34ByYFLPgu7WKf4fjDWesSJE39bjq5pnr6L7dGs4H1iGq7RUvhCkiD8QfQsjxUzD4p9mXAALYWCEsAh43UNGtCeJ",
  "key15": "4CnwSPUWYyp5crnay9jfRP2gN7AdGLj2P2YwuF6YQMymP2SFuihJAjHKt7BsxP8Yx44Eag1N6kqdcbhFea6MBHac",
  "key16": "3Gtv3qKNVesM8z1pazpEVhJabfKyvREXN6ZjgAbDDFX4ipto6mZDZWDHq7SYtfvgfzsuF1GTbN6sABgp7Z62d5Cn",
  "key17": "4V7wMXivfcyDxCGECiwNy8VZ21LV199VzsuqgHpCRvq4T7BttZfHEU3pidQCpMxTAoZVMmqsa5SQvnUQQ6YeAwCZ",
  "key18": "5bGM48Fx7oWkSnFmErrSQeCJg8F8eZLTgRJbQyGS4RmgbNtixEVdjwzjNvjmzzaucFwiEtAH1tc2FA4fdttmedCx",
  "key19": "4MtGfySpe4YN73ZvjCrrd6o19PJCvnPsfxdmDcRkMDEtd755Z4Yj8E5KAiHGPQVY9vMvxvctqygNnudTbiftLpAM",
  "key20": "2KsqPysACeQusCuumks7sKqCK5WA6ZQaqceQF2VWfTHuoFGVuJonUQVFjTRZ6ZyM7c22KZyhHDYGvYapoVnh8EEx",
  "key21": "33EUfjpNuiNNoDYmNSPwNi9pHFNuKZd5dRjA1gcPWBCGd1vqGNwS1ns31Trvw4wMC1WoFukC445LCLxmiaiJQoBK",
  "key22": "4ugaP4mpbgiPEtrTFFsXruXhxYwxCXXM84NtJHxDvSgVybEBrWyVXbndNyhztMcBvecekoLPowAg5W4FAKrqi9Es",
  "key23": "4bz6DRy3C33N7vpHEdPxV7ueCqSwD5oEoSXgfqtDu1nk8P4h86VzWtQFdWoeKRCThRCPGKZuh1SiKPLVNzk8R9rF",
  "key24": "5pmQLSLzLXikG1TqZe88N1KWX6JC3SchUaNWf5PcBfS2LWjGqkUyvAtrZKeQm6VUAYBRQntjgt4nPAzkdFQdphJS",
  "key25": "2Jc4PvxWvFd57jQWt18G61jBpHappMhFKE1qQFW15AX9e7xX7oQndEM6YZ2JzwiZ3TEMPxFqAyXLDt144PE9fgoh",
  "key26": "5FJ6UCdYBrjkJ13QZKDDGkWUJ2pCqmPW9NY6VzLyzoRghGjE2VXUD3HBJ9vceBDX962Ax4EBoE1zzoxC2dmGUGMR",
  "key27": "3oZYnhiH655KPjjLWsCLCmHJGMFuP6rrSjKVmnMzrhdkZuuu61RCtVCrmC3saDRUPLMVLDzrcC74GPDgHYieBboE",
  "key28": "2pa1pWGQsJCcBSCpUNpkaNgZdGJMAC4QgsMBriZn8kcDueT8ogCqX2Fc5WySDamnej5dX1XM7VzTFPHRNS4LG22D",
  "key29": "3f1GsRi4jujPLZSc2KGQabrYFuSNMiuRy8r5fnPS9RgSyRvP7rvyduWm1z1nm61rGoYY3Dymkvkhj7R1o7NzcV8Z",
  "key30": "5w9kFB8AXiaQD9qJws5K86HeDRSzmAaUXCe38cj6yfEr3S1QjDxpMotZ3whjXR5vEUQtXHuB5JzGK1XH3PS6AsAX",
  "key31": "63eiNyM1HjZ63vczT4U7MNoGTM36xn4ZNYjdxh22fP4E34Ue7xzwMBuQ77CLsgUta8CdTbN2EozQkgvBE7bmmWpW",
  "key32": "HjcuxfKYpDb8qaea6pLU4AF1GKvrnc27PVPzXn8bjmHSaJW5rVau4iU6eQduVxRqvWDTXLRqymCD3VLGmr1nEKJ",
  "key33": "4Xi8EKq52LRb8NPfHFAr3GfeGbG21bn9QomhzbfXcDDiwBmnBk7Fga6F7KHG975YPJWhR4rCvfEr5KSA4kDyhPfG",
  "key34": "4gtGCLEq3xvmYz72hfMWEnYfxHhG6D1Hf93Q96P5nNS9ubydi5qHNMvfGV7NdY4yBDnytQjhdwyT6D3GWxa6BQJe",
  "key35": "5Fm181j7ods6wUzbTh5euZUizEdf8iftG2ppXjayBbTossjhzV5vt8QGQ1Q5SbKoputkwZEw9aBytJAehyKb9w4B",
  "key36": "2KYUHCSRvmCBG29SYVeoy5jYWLskmsuncFbSWWLMVn5fCt8sYP8dqLVJGJF8skgXPop8kbCDvS5znsdQemh11Cgr",
  "key37": "3ichFPhPTJLvSPDydbfrZmn6tukRfycio4ejcxiHeQbvWYKEzNJP4rPQ2S5uMt1FMAS6KpugL8KZPZ4o34FngvbW",
  "key38": "4zsTvkjx9cLuGgKEsviySruxHxSJafv74QBTNjNoVQpWzAV1SM62tJK4hT7vk4s6tfoKSTjH3ZJUs7dgK4gh698R",
  "key39": "5ERTiWf6vHzNefMDKEgdpnFYn1PtvE781cvfYKm9Bhgzaac8WCvv8ADUveCBWUEYiu3LeaJruZjwWkyvQmaHQ3V4",
  "key40": "8HNsdoK9cFxV2PNaLtpqfLczjkydkXVsCUzjbN5eK4oVCjuusBVCArTafQC8Bhq6PgmjMoMSeLtwtus8Jp4JSuG"
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
