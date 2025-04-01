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
    "325ua9PAaVfiNGhofft37wLxa1VUXSZ5BTksqoFF9XWkq5QkJZih8CVhecgE11tgdPbVdE96rcw88766N7cjuPcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABeXCXxjT9MPHsLabeGNMyAoJJ5NNyzDApRxXiVMUWenNye1USKcsQzGjgi1H2azsPXVt4tLgFZgLnS54TgpnsB",
  "key1": "3uYQ9CaTjEDcZ51Mr3boncKngafMShi4epgNw65yavFLYyCjqs3P32i7ZC1yAL5B3JKWBf8nuYw2aiVamd3Bfjet",
  "key2": "gfm9o7dycYqJjRKVkjE2j4LgbfNnCuDD3Pz5LpzisGt3JJDyfCbLqyRwdRByuwNRKYVd4UfC2r4xSPiR5PdhaQX",
  "key3": "3vXtU8CBHomejSr1ZQ7LgHwMdspewxx8SUawAa3XLgxkUMmJWnLUN6kAAUK47obwiCjSbWehRid78r8igUJCU7DX",
  "key4": "4N3v7sqLS6gMUbWdWjmSuRAjs1VA45GS6FVKsDE93SzSkzJwM73Eim37q69TaJWzDh1eVDpq8mJqJKEGKVKJ5DVP",
  "key5": "24Nhf1YsNoNC1v3xpXUZFNXEdPpdQnN1BN21B8SMSrRJyn2PuWVPivTQd7vazsLmcsSJTCx8yDL25BJb3BfsJ21q",
  "key6": "5gXUcYqXppGnRiozMjt1wPC6urBcrf1sCvVw1uEvvUGw1wHL6JTZjuktsdVp4sTU1BqmBowKqFXYnPb1gEcmNGmo",
  "key7": "5yXAbjQSn4WwEbreY7kfAFQPZCT2bkzbWWXi9DdrybdUky1w4egpNb3PjUt3MGRqw2p9PE5KTXzSQ6Qyrpyd6Z4",
  "key8": "eGFbaBFtEphU34HzpUEh1jhef8i6gbxZhd7tvEbWUgeXRUShwjyT7fFCzamob3ro2yfXXFHnrpFzuhtCEZ3JEKJ",
  "key9": "2uQU7eNkcn7oaLz88fzU2oLq1AQNUpdC2YW5fXKqaknaQYMjFxpMyRHaxiUgsjFzAMTR5xgciqGcZUbG1RTRpJhh",
  "key10": "4JwM9drohanahJpYEKUK5cVLLyCPr6ZJDtjPNuHWAc56qbchiRJAA9kskcDeVCjLuBY96rP9kp48XmveQ7xywRWj",
  "key11": "t9d4rzvsocbs2Y7voHHsBLp8HmKVJ9FKsjXuJckG6hEBTu9iPYVbFhmmjSTbRkB56CKWxbALeKgL4TvskcVCr39",
  "key12": "3yRu3ZdnCMTqnovvrXD7JK7ysHkmAWrD9zYzp4T1vCo71HK9ffR6ouP3FTxiihip55WyPin5XEvsjd7hhZZXvvtL",
  "key13": "4PQWLsVYw5jWswQBJQY1VVEJLTW3Uak5D86sEX8Dk9cGpEjdBf8yMwDMrwrsPhf2qAK1EKVHzJK4VpjPsLGUP779",
  "key14": "4FR22zXfhkxHy9uNWdKHbe5vr94RFfgBqqCazmCJsoUMcPKrRYzxmDwaz3wsChUnVJm3N48oTehM2tHG4iQufgqg",
  "key15": "39ugkXigmvFcJ3SrnC87oJbHEkR8dbFqPLyuCsEqiZMB9QVDKrNzkdsTKJMqyMjMKsu2MPFBBBfwF2XHqpSeYDc5",
  "key16": "46ZBByQhyGBWkmcfctQX4goEJ4RsgEbLNdytM9VzkrxAjjd59nLBmxzkQpJEMSn44mxmgaw7nu5HDNDDS5iMAn5p",
  "key17": "4E58j9ooWtALjBXtE33y23PaUfpQjkfvZLeKwxWbGssfCVRNqDYg3f4muKkK2vux5UhoZ7hHGkWiKKMmWu6EpAxb",
  "key18": "42uw5dMqke8ys7YXAw6zW3vUoWJit1fRVqjCzCHgzKnbvPx9yvU5dvAgPWUB1ELhkibziX5P4KzxpNxmVjCh9aRL",
  "key19": "4hbQ2muMvJVbWeCYfxDn8JYEVa9JUXZLqS1iJcbLB4E55chphg6My359oEzeHpuL6maDtnWQiarKA4irmDe3SR9E",
  "key20": "4eNpF4NRdV4BRFWGGXrzdUbXRRZhkQiXAqsc6J39SmWdytjBX3tzpFCPL6QyWoATpXnwp1r7snj3MZLgWegwLjEX",
  "key21": "GgnYdiencngRWYMK1BvJKoaVUFwUx9XoMS5Vour1MLYNoq4Hbs89gemg6tkWbbhKCQSg1bwzYwZiZMF23tk8QZU",
  "key22": "3NU7sAGNjPZ9vZ74vFNicjLA6gFmZkzmomEShJfuzdoRg2vh7tFBayZfnZWXM527SfF1hHbU7TTEYvHLUFq9X5aD",
  "key23": "3nfmjWWKmXv8S7Cv2kLW72sa53eYmnfdvEPs49T7cMEXDw7CMNbZU9GCP6qq9n9a6N239KXjy1ceJjdYJ5pKeQBQ",
  "key24": "2yeV46i6zbVzSEExsD1XRjW1BYLxX1CrtpveVSs7neYae5DNQbVfVi8T28shusuURptGgHnQrnjWBTzZusQEinb4",
  "key25": "2m6TzA29Aha2rvvnuUGtZD5JDZThZEw53NPNTXmoFkPnJ69hvVzEbsBVHHKpWj63KEd7PHJCdJdGCYkURDHADDGy",
  "key26": "3J3nJkHAPG9VzHEuyF4xgLupAWdGiJqHkrC6ioyXvoLb3mjbf6NDnMS3HDyESei4NcyeZXJwxAeC6tz4BmVwSjme",
  "key27": "4mKcP14X8nPdqNi54yGauHcDjSN4cJnnBaBomPS1RuCZUHDnt1TDT2LuVbkvwM14AuvS8QjDsK1WVrcJzFcSKaNg",
  "key28": "4hCBSL5Lu61BfXRhLqY3rVihmW4RXTnzTDd56VUdwyEK7KfmHi9TkE8EPcUQ5eEQPVVK3HPSWMqjzGTPoUqtrbUa",
  "key29": "4bwqXZGt9xoswNRV3jRkmCcd4w5SzDC7mAsMzPSGwWsrXS1yAgdKS4e5hiKsHvhVP7wUJQAvsrmUGS8kupF6RDJ3",
  "key30": "Ei4q2nTxsUFYuf7vNyb5kHoPMLoXKzjPUYQNCA9XuczMBTZHTg8KtbETdVjkHJEYHj35u8RBvL1t2ZPqZ3pwL2v",
  "key31": "4LFxtjSYV4cC9WeEEnJF33MP8GzGy4WqxkPRoXhGqsTu6R9stTEzQcpJpMF8yoQxHKFCSkL12XA2o9EBFLpxFphL",
  "key32": "8QSmNf9ibk89QeFkrPoQVgXpvqnDYGBGmem3vh5w4RE3bEqzA6QUJJFTzmT57MTSZCLBjfUJsUAJGd978YTahiQ",
  "key33": "2bNzBpFL8wzmTU44wMgpBkM6b4DjhkXuJvCKGL5vnjMgfS2mDS7X2HjGBcrUGqBDQiVqfBvJQ9oLYBYaWjrvYcjp",
  "key34": "5VHK2tDtJVWVWatBgj2sftXwaxZjJ7wzUnVsKJMT4m9yoVXnUmcuXtqGqG5cRBYWJ2L99qJLfBpx2BjvxpsbdU48",
  "key35": "5HwQFtUSyVd1ahSJFLSXutrTtKXym23wY3ZP9E1485rjiY8idEBCVjb3cYj7M137UyKoP7ff5KYVBu4oPKezPSy5",
  "key36": "2FEAqE2EKMcFmDTZ61rkTLdRdx4GtQNeTzw43ce1VjpjdfdPe2CYrVzwRfNDvkcGmYUeABBAR22bbLiW2PyhspN6",
  "key37": "4gXmy8S1qJG2Z4QPTbjA4vKbrsWVzcaL1tMnUJruNMp6pXXihLFVv9RPaNREDqUrDbvKKjuJL4kEm7HHfnSco2EG",
  "key38": "57ERLd54Y8yc8Fm6oNAfzkbzpA8vQTB6yujoXdkHWUMfVEei8AvcHxyBRsGF6uzDD85vSg8rrGCzh1hsmn45mXtF",
  "key39": "5C1BJMptidH9odBHj3ayZNVn6x4MC75UGNs8CPAiTTrMXsU7Qh8gC2rsvU6nvKswXvM8FP3jV4QBqFx9WxRLQW8F"
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
