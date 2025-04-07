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
    "3WqdW9fFnXmXUhbqGmc7F5bhTF6yBMjRxLMBffrHyGPC7ERXS7RAiEFEFqCAG3N6mW14UyUJKE76gm6QbkdCSmco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Xws5U7z1TLrTbz7bu3uCMCXya2PbMFn7Scv5wYwYzSdwmqSfWFcfQ1sbb998t87DW2kAWxMNsvWvCmXcZ2tABE",
  "key1": "3hG5xyN9QhYyCnJB6a7v9oMAi8dW6VDk7Mq82qZjby88gQwst5gEPUsxPGLeUPvw61zdYdqK9aBVTyVeiy3aa1aa",
  "key2": "qHoqTfvk8NJoKgDV16e4d146w8GhgfaAApCmASSjBhvBwzDvCc7P4PjN5YFWZSjS3Jvumd8QMEFj5TifLTdwrWB",
  "key3": "49MMvtu1yTsnVRJ24g76khTEtJTtgxGrjU9f151TDSCzVQjAoeSzBrvr5Dmt9ydSasJ2hezoTBF4C9hu8X9c5o3T",
  "key4": "34WNpEQN99iPQ2WJ72C9iJcxmm4EarnnBzjzoiLGcCEjZS7q23W2uL57JTKAYmgimGK7U7a59ufGnpmyyQEinW5m",
  "key5": "4ZiXGxmrEWs3z1fibmxTdi6h6tzWdYKJNWdjyqnk1qJf5qCrTsjRvPT7GTGhmdTctzrAyTvLLUg23L26h2CBntDe",
  "key6": "5P694w3n88EaHsKGkE4usNfZZf7PDbpKmyvVXN5jctbcE6bXsasYh311wVdKwhTFYxZs37cpUtYGfD5BKmHbohTG",
  "key7": "41qs1Q8wBg92xE8iSM66JUNaeEx7Qat3kZqncULfEoV3K3AP9fs7xQp2D5WeqDff5WzgnmSs47E1mEDyygbksjDg",
  "key8": "2DgijvarJ7Z4233C873dh2tumFjGMrJcf1nDQhL3hUU1JPqoEDSqm1KkxV5CHsqeSUqqWQu8oS43bNWzrKdixYzH",
  "key9": "25X3adqKWBtRtvBwRwnXMvTTbGzQZZ8FAexuRX5A9RTG4eMxiZefgpX2qANXVyiPutSD9rFPyK4jPmPG93ptbXpW",
  "key10": "2CxL8qddYH8kXSLPucmSEz9WpQL3iM2vFJtJuQ5vF3kMux33H1avJmEEy3Lxkzr7EUfRf8NXAxRHTPcYXDnMPr7b",
  "key11": "4uzGUZBzwJkB9T8maHDszGwcpj79Xu6zNHjmBieo7caypZzPyPPZr7MawPsaVynmwSqY1sCmPUb1ym4fRDWibQF8",
  "key12": "5AkP328EJ9aPfn3bsRei6Fj8nrjYzPVQekxRns3AeW3X3J5GKgKG5x5KspajAZR5W3m48Mj6p2doJS7vUUipRZrg",
  "key13": "5GrqPRQxFZxVuip1SYAu1s31bjTYBDtWjJZqcpSEckqCZVMqhLf1uwY5izz5C9u8QLj7ogVZowKnYa8HjF2ByRjW",
  "key14": "3NRSZTr4GikMYVi2eCBefgAVujobdn5xHZQPJPPcXeCPRVN1Gg6cKkRASSeCv1RNmZhsu1khqzWFz1NRdLjzfsM8",
  "key15": "5k8YjRMfhbnV6Qd3q91JnDUR5u6GxKAj94JJQVCKFwGx9rQPDHoSBymbRL1HaJxfU3VHxUP2MoqzMSTy7oaxNWwT",
  "key16": "4nXvvmJM9Dw54eg4nMtEB2BhhAwYCi9vNhnpieJ2WxoNmMiZgk2di31rxd6B6aQgccK9bZYz9MpcTMq6g5xttRJL",
  "key17": "45bwaceE5W6fuaV2THmsapDGUpk1cN8ifeSzcnguHZGRPo1A1a6A478g2HCEwJBQRZyQEpVVPBKuWDu6cFez4J5q",
  "key18": "QY12sryr92ZKEeCVhDK54KxaF16K4n3HhJmr2oQejdyjEUdWsywpMVdhxyTGJQxNa6rEYxjK7fFWV4w76cjNbae",
  "key19": "2VwKEckQDCUdzPbon76tebuHYpg12Lb8dJDg21fNqW2PjwqAqVmAF1dtF84W75P5ZgAjkxKz7Qimhj2432PLbVvZ",
  "key20": "66FtTq5fxwDQpVF4DRQbHyuZwJfZo1C7WJRBCHEMNjmYSFus7eMBY7CqWxA29visUVNt8giK1naMiQZJrPvRJRSi",
  "key21": "m7KCzB25mwbVRV9Gq9GdhGDy1XhG23MMgWDWrNwPmvaZMPMvi4FFbBN39K7p8MQkU4iH9BJU5uLimPARoPG3jPe",
  "key22": "3hRfEUqL1cnSKYqdtnYBenAACsJbPgTDATg1hoXKJJBY2UfR9Z4Uiw2bH1kqZpJGZKGw1oUS5puPopQTcMAdWged",
  "key23": "5NStsoUv4x25MJGwoLmcuP165Khrt1bNM6tCcnZB1Dviq4WaamyMfc4qJW2L6SyBy6PV4GFkmvRh6qvsXVKGp9vn",
  "key24": "4VCfd3Q49yCTFDj41vhJLYARFMGSYoGXx181TPUSApEFZtSvyRuMUNVJft73Rn8V4q4VRkPpaXQ2mLJ5YdDPiaVo",
  "key25": "2k3QJCkeP8297MwMGx4TdRfmLP1kayUhfRN622MUcPbiWuV9eVpP2HpsxYTaiWKMVhfwqWjh9KHCVFrLm7dWWXsm",
  "key26": "59siC43qXfY3h5SWfd1aPMqALJXvd6UQrcX9dUchmbPe9z4bR3CbFDY7MTvUrWxYhXQudZ6ipZ9UmvNCcjRcFKgs",
  "key27": "46YQf2ir7hx3Z5gNwvyrn2n3L1NiVmZQMBZcJgFthxxJqBiezbGMtqKRciUPv3LADbJpNGYJmMC8rvdeNyvJrXjt",
  "key28": "24Z24fJmkskKVnZjKRHMoiVUkFv9CqymM5QvuX1hZAq4uyzaZJRAwRn7r1n6ag1NTNfMx5tF7kpFR3p7GxYf47WP",
  "key29": "3UXyMZ7gS1bnoYWVFzFfUnTSyjmM9256sA8oKDCEFY8FcodQ4iDM7q92Ef7VxGtBJc1jt3EUKyDdvjpKLkVGDUaF",
  "key30": "3LWESEVGgBDqFfGfBMcxXi8yq68kSBkknfkvtZUZpqtjunGSbSMV1xWiq3v7rSDJE7wq9xfyRsXh4hSAbEnt8C94",
  "key31": "4HGvw4HujHHaV2bmTVnCU3fX9bpGMHQc14j6HsP4QCaWRPqN1M5MqYKwLXoBy1KQsGjbPE8eC6PZdtuj6bCBN5EC",
  "key32": "3GYdcMeQLVQV35mndD2BKdQQ3VhvdUn3bAXXcvoVZnLvmAyySvYQRxkBVPvaHRjf8HdPQRw2HSoa2YxsPcrPAU2B",
  "key33": "TrDZX7uhhhtJoFTju59yokT1cdjt5wTWz3DR5fksFtUcRqsxUfjRLVLe7dMBNUs9XvhpcBE1DJupuLtc5mM61hT",
  "key34": "3e17L5un4CCREpAmZ9A1t86GNP2jTpcjqQo4gLRc52k3vEzruuPLnw9CcTgrCt222j4U7ymFMAsmbPfz9oBe2HxA",
  "key35": "42KRt4ryFgrRwTVL7cqqa29w3vGMdZquD3jEFv9vnzNkYmNZGCqrGYb1NtoiBNsMJhicL5Cya7D2QMQQBy9m6cVG",
  "key36": "4h1Bt3TUK1xpmTZZpEVZUPWSceGbRGueWTv7pa5PXDuttusd5pC5nayfWyj8WqK22JDJmWRcXjdaocJQt6iyjqfZ",
  "key37": "4jFjk9vH1DdcfT6aNb2QmNyrLaYvTma8131PmK2GXi7rP3unCGE7Ft3P9ZHEXpgqBMX9YBAoshLNgfcdkGoW1nNF",
  "key38": "3zCeGQMyBfkzU54omGcTxAafARRKHCTo71iB3QUiYjTtkT38phwn9PH8B8fkv8Lrn9cc1K1bG3uKMkH94AB27WtF",
  "key39": "21Nb7KQZJmuUc29UxHVQgJZeQKwc7vWDUjqHsF17bHMEq6LSUdjNc2S6DderqVwfAPqo1uKEGFnyD6pNsQqHxixT",
  "key40": "vrx1GHB4dNmeM7UvAySXTi2zAa9nGwyfpNthMj3tTTzpkotqpVniGbnWEEATS4qkeVMBQNvaSiVzGbzJtEdC2uL",
  "key41": "XcMhNXVFor25xgZUi2DzNX4Fw5qUq6L9R4tvJc4dT18q4asEmLGfEVUcB2CYwutPkQP1ke1xcwCX4b6CYgG3hCk",
  "key42": "3TKoN9bsNHvj5qwmwni32K4oC2nU93EErgHhgDbWawiCAxqVopu99AaVZMQC6iixvnVGCCiXUf2FfBbcQ7fTqW3B",
  "key43": "aLn4QGTu36PXBwavbY7UNeykbYpkMDJQUL5LmkT7XD72dwaMTAdbdb4kSp81ETJJLzHi7twDdmhiwE1CamK8VFF",
  "key44": "5mb7s8TBFtkHePv4JKX87PUyRQjHgYfkvw2gFAtimMWeFNeJ1xNtdDERWXsaWhA8JMGTkezbMXotaPugzGMEBcwx",
  "key45": "3MmQyRZY4NP9FfsmnYmSseyVD7Mf7e31c3BvVDAe3ysbKt81WnMmjqk9pn8Erc6nG6nJCovYuHn4jnrL7PMAUNS2"
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
