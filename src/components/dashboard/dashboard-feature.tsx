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
    "uVU4TWt6Uq4hMgaiSZxaFRCm9YPWsQZAeatTrKaf7YmeV9c1ai5b4v5a7zYUdwn1ad54Rua7KKN4JbMqMYQJXsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYXWy9bWsj27Ur2VoLV8DVbvTs2fkzJAWDPNvRiQR5M8QaRCGUefYn8hLfsqgyzWq9K9krjFoC4zBzoNjuYMnT6",
  "key1": "5DRtTjJKDTmz2AE1xArENoMUxtTV8dCqzKyZVcejWUdMQoJszbz6uAonDUmbJshuWUVSi3YfgV7gNuVbPw65Frbs",
  "key2": "5BA8sTFdnvDBmXjPjfjzuSDjnvFjgoDfUASfTcc5j85KE12YsaERDNQMNMFLrXJHanuCTHk1ATaQB1ots15CFEsJ",
  "key3": "2VRZPCVFkyaUycPaPuBoY8mFhZAPiZZUitoQxJX5JJVpqs7uy1FVU6W3hWK8wJfnaCxRnf3egLQeNRosPChCKDAB",
  "key4": "65jd7kNP6fhFUNXGjowhYo7eWYyoESvQdbQMKQSggi6yxw6WBQrL6656fTiUZ9MPaacNGyxPX6pGR9LTQ3zZVvne",
  "key5": "2RETXuRp9ixaFLMH7nMaCJfsjav4yUResp9LyE2RQZgspZwNEYRRXuPoxavSY7DyCEA3j49uJXhcdoDWiLyhsdZy",
  "key6": "4n8fBCxoari1zsi36kaJvLginnMTAvkHP9AfC3qLudTFVmbmMPQ4H5G34Ld4GyhCFbdL2Rput6J1biYhJQE5QzhL",
  "key7": "JtcNsnSyJrdTfCHMAA5L5m7te6sF6iaX9V1iUoCQqEjy4fYHUJt7mEJPBprT31zFaoZk5HchpKsCH6PmCxzW4wo",
  "key8": "4KgZeYzgfpZ1riivYFctgDjHCwewLYBoHWCPiNuYqCFtEd5b4zQf6Q4KWCR8aR9g2otn1zfQzVCN1YTVCJgf28c1",
  "key9": "64UyiFHntPsCkezzFbFobEmJjsFYgCEmpgohA5HwnMN6QNs3Vk7sZ9DRgFnYmbfDgDvqu4Y3ULJVaUFTJuxefH3L",
  "key10": "3xppCzCS6dmGm3NJYQiCQBpQtsPMhrJYgPYhRgaZKdSPT5ATV1HQ3iF7anFVR5rvi7G588g98mDwavyDVK6Veop",
  "key11": "3R1isJyjvguctdM8RmKCnqH7yJQDVUbEhPxYCp1To9rScL7qpQ9ffYy7dt9U75vVGaXnbpBkurxfv5JNZcB6Tg54",
  "key12": "3qzTCpXNMJT9hjAB6XkfkL7FPzGMnxDAPEJeZWX2M6srtPBpeB51nPi13C8cyBwwVHazLajseZyUzkRC7N5eZ43N",
  "key13": "4gtRbnqNYJ7m6wkeHyDb9T6Xs8t1GmmnkxY2HyaAcaRxTetfovV69gGDkd9NSrP8qj8BaAv5NWD85FfM18UjEJcB",
  "key14": "5j3AbfueDrL6mAb6agL5oQe2N3q46iXzHkLgzZh6akXvG4QyT8YWhGAcd3UVP5CazNmn8ocVEAMkXQmPiiDSYU7G",
  "key15": "4ttzkxXANJbvm1LXD8emFAY3iysSEBTrSyFHNuUtWpjgQHqiVfvLGduRcoPYWVdDnzRUPBLNFqjkYkXLQP13Zn7w",
  "key16": "5vXvz1ZJDPV24VuDNAYdSQ8Z3YE4RnFSeAzhmPKVJ2NbPNmrEV87HTyRrBykpNvmoKwC8Cahwnqcyb3muJDnwD4j",
  "key17": "4oCC6AvmrM1bTbF51v9omvpvp8jikWLhETU6EGLwfHYRYGS9CCCHAfwc5fr9QM9Rt88hdp4LL5uwShXUkJguA82K",
  "key18": "2yqa6JhpBRzDYwN3qpsEgkGfV51RZ4Grk2oTdGgZkqLv79hhMrM41www6qtXzcZQEWg7YmLzKFhjws2pAHYxgXzC",
  "key19": "5efJjGYaBrXNGxBDRd2zvKQn79cYaJp7FSm1xW9bChzoV3Vr1z5XKzXK8yhWPL921ijEMyL9YKNFZFL5T4EGJsxo",
  "key20": "tdtNsBcc1JAD6pFDvctCjw4rk6iykymTzX1wY37YDoE5D6pgNqrjV8dkcwhyUVWUQqW9UdMHHwZhZXt1E1fCaFL",
  "key21": "5PUfte29vyKKgCWJSQLNvNKNkNWbcVdbTXq7dc3Y4tmVjxqvMXqwyfLaobZJEuo8yVfbbYAe2JfqtroN97nKgS5c",
  "key22": "2Aqtjndb9PdZ1pufNyXhkTxiV4daDWUu8oHmx5NmNwLcnZ9ZiMAFkjaRFZP4jcMQxR17mf7dMDLyWQe1G1wfcyA5",
  "key23": "4HkXAf1B3hSayPiWxXfVY9q87CC2mTzzkJeuXmoJCz5SNYPfUtu3AMKzwVA4dc3desSisSnnErdTRyhkQeNS2xiC",
  "key24": "4kAtzHqqK1kxaVMSMXVJC56dD4FN2BsRpJJ67dyd4eYoqFAbrKCBCixXU46LiEs8vWW7MeooXyJDzU4yhAv5Y6Kb",
  "key25": "3ayU3QsrT2jPzNAKKhV2cPh2s4K9aYpyujkyAvEhTcx7A9GMv9bidEaXNSXR79Ef33cewHXNFPxNQtorFJ1yXWDG",
  "key26": "3drqTK34vKx3uhQWXU7NuZRXxQgtKhpr5pfDoMVUZvk7tG6sbXtZtoVZZwXuEsAZqWLNDqidTDkjPUxbywCLrJNb",
  "key27": "2Ejw1qh6ocdRbHFYL1aHZQXNWBpAi5oM6Uobs1PUBFBNWTbvuk5bVDhTkyhmYZxFBhzhmmoh4X4aWmS6r7tSVqC6",
  "key28": "2p7geB8apB5CUqEA8k1eem9Wfdryy5mP1xNZtJzHtqxs8eDmuV7BkEP97jQB4zLnAk3JCjeDEeu8uqfvggEMSrE9",
  "key29": "WnTxutf5oNA1wVmXkdmniLRByY7oxZMQtr9ZswSDRCpyTibr3fZASmytFFX6PcDQfhemMMGrCTFp6R7JXahkuZS"
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
