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
    "3QfY2o6HKUxujt8dEvSqXWzCnNLn735zXc5LJHT4uu4PJhMUEiYDPkNydtCpHvPh3k5pMQ3GSEx7AgGc41yiSeaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GsoSEbky3bjoUEKwyi2UiKdP8JKsazRaWZGHXqjtHTSNVwvqqhtw1Ptrt3bk6TaEQperFJtTqyMNZN4DwkUH8qk",
  "key1": "3UwZAAsMW5bBHvUmhTz1qGfE9ZfaEAaBDYW2mmWcg1s7SWX5VwnifdLwrns2Zo1Zb7Zuqqr5FowcNDbdrYmHjJRF",
  "key2": "2Gyb5GqoNy5ByToK7ojNNLW6M7XWHx7XaqENm3VR7Cy81hDZvabahp5sdzrz8SyFXBQhE6miWCTKnJD5MSzEZ7wP",
  "key3": "46qot1rQw2MR1HvNoGTXPPz1Sqf9jDP2aocMMqbyNMjBxXwicakYbW56CawDGQiJPZt1Y92xWewecX1Q2VfAhcsx",
  "key4": "4QT3rChQiJ8iMT1ZRpyM2wfqNZZSkps7y22ACDRzq2AmFtbCn6pcwUoZjPifPc6tSkTBjWN6TPMSFURYqME56p4A",
  "key5": "cnw3VEjG1PEjMH9G9GcEnN1mPQ6pGeY1EUZL4ykDZgYid6cSnPHQtnnhhm1qC2o47dpTFA922WH6Nr4ZSFoPvXk",
  "key6": "3bX2Z8vPUJaKjWXxASeyESsLDjqM21uK2yQS6MXeLLwKMgAgeVnpgKEtyLh1mz5WVCV3YEKEbjhi4LnEhm8EzPMk",
  "key7": "2APzwHhRn9s4CXtweGVKwCiYuGybxChavWL7iBohVTFTf7NG3gaYtk5eFeTXqmwd6zmfEWk7hoW9AUjL8sqEf8BV",
  "key8": "38GcWMUgjLTe2ViYbW7kKYFCdf9BgR1KZRa2c1P7e3qqzsWXtuUqumqEon8mg1ftNwWPxvEEiZp5xnmbiReqF1r5",
  "key9": "5tS8NiH7fuRL8txoJwN6cjLAVbfSBJri1zw1ktFu5eEA79HDsVGzJdzQYYkgPrGYrSvfGvdnvTWVGLwfD3N9Qdph",
  "key10": "39PLXCo7j1NhLKPnkTUM8QXQqpWL1WodtPYQ6e2d4Vcq5RScP6m2Pno85FCb7eUshbTUfMa4AW5kWNVk2e7HjaQk",
  "key11": "5yBY1SHaPCcgVcQ1oephhsbzHVaz4aGYwy4p3WeMR5HSUs1yfaTptJhZzshycGBYgBsv9nTcWgooxCaRANQ2nh8Z",
  "key12": "4HK74WCAPBrAdVeusYfAy5DC95iebhyCEsFTefukbGTURAbK8NHkH15NPTsBwXb9caqd6Y2pzyc8pVjhRYCFae4w",
  "key13": "yXQkYRAy8jU7iEwiBh59FXqYaXR5x7DnoFi9VzLVMAweWaZbayhJkuYB2JiYsXxQVGVnjMLts3YrCHQHyXAZQzQ",
  "key14": "5NwuX7bT5MpGgpaucZuJbGmWkrtbPxXxWimdDhSdnZUfnmkm7aVjj74F9e6xEH2ym1WHKktVjYjB94ADUrspkdNd",
  "key15": "u8Vec34tMFRbUGSrAgVZE3ee8Nzjtq3sPSFtm6vd9JADrSFnchWCfmGw4fgrGY5PWakM4dDM5gYis4jPNyMGewK",
  "key16": "1hfg8GGvk5bBjcRiiR86MP1Pscfj2aGdzyZZ6he8e7j7K3HjcGu6EHxn5ZEGxM5T2SoRTjYzLL4YjkNhtb1LBB3",
  "key17": "2y6ASafgebKUvWHKzcuW56KuF3u22oLkRwPZyTzeXyqYgPVd6wZHfGwHomAXoENbZLaaaNWx7Stra5xD4f3Gan4L",
  "key18": "3YjNwLRpmRYpHVJ7DJyGmCHqr4TEmojtrPqsRCwZu8whS4kZUGvhWHT6hbn6ZWBRzmgXzWdA2fBykBvyvQPe8foV",
  "key19": "2odXqzAaiCH194w7CxoriTVpWD6TS5qo4iJoXCvpqEtFsu4dsAxKA8YfAy6aDrnwmrpF8gzBvFpAADkTXUNacfDg",
  "key20": "3F6SQiyhu7HZQ8XR9CvBw6WytjP7w7a7Kc56PvVigZZ1UH42AcYGq8vnBNYWpfaqtYpsggckMXf5hLRdo3msLHZz",
  "key21": "4FgEA1jnbidBDAV9XbswHhCzTB9K3jmrYv8oZR7LsFTL2JQEJNLkd8YqSf8kTKnjpMQSbTRC7EaDSjDhLCDq9gjN",
  "key22": "3QvorEnS4Hq1Mue1PXX2dXVcjtcaXiZhzw1H8fZm9H68FLzsHBt5T8PfjC3nMJmPNVdGcVEviKuC9nGhha6q3GCi",
  "key23": "5AFdeHJdQWj14GZ9g4BRUfBKzFis6bytYuw56d3cYdkaPTydd82aEJ9n4LFBwwZzREHqVTwcqEDUqp31dgc5WoZx",
  "key24": "41SojspVLDHHADNLkwbvhoLMwb6n3ZyPJfGGmCSLUcrxSdHpFFiUcDPsju8V2nqLLUEMU55WWBrNqCPo3wdWiqQU",
  "key25": "5iX5jucGW9SDAUmpPivmAAw1ATG79R6PkPpiGp9Tr84Cn1kTtXNdiGGM7C77iP67wjMYJzrVqpRLAViyo1xBzyWq",
  "key26": "2nBkSYHfxjXXPrmwbZnKYTKf3x2smCt8B2vUMNyuHjCgAwTVnJ9z3bXNqdnUwgEM92iqjeEvBWxvCBvAHuffaPzK",
  "key27": "v1WXD3kvPi8XmKagiaHkffBUiF2ZscWbKeLL5uNNMkqGmCmFMSLSFmPTEY4M83ExdpGAipP42raX7nQnxtqSCdf",
  "key28": "31aucVdS7iN1LGUcZAzV2uUefEiQqghQ6ZeGwsGxRF3bCx59DBNy6YacgNeX4fquvKWquk3JoXBeonzMqZpy3nAH",
  "key29": "PxWBdoTLYQzckpdtgtHE47PpUt3bm1GkzX3WiY6mXyVx7aDe1DeYD5jVwN56RPrHpUG5Hm1hcyL1PUTFDgYCEoB",
  "key30": "4n3oJYKWbdnBhyfoAkjgu8EzYTN6EdyAeUGWdi6u93CAFKhpXHu2VoqhSf1TxJZQnQ7xNRs64R1tuTgV6Zia2aVT",
  "key31": "5nafyTYWnxBoztgtqEr75ZnucQr1enranmDJ4WKC6Pvpp2nEdCjmiB8zzrknu57NQdjNumVL4WmqzdmoezDiUaYv",
  "key32": "5ESfR4hSwnDQVYBsp9Uz9UwChXPAee9XtzEw4ieYKFM2unKrkWFywUMhe7dybVrhRqWTkqw8X786nTqBJMrD7cfF",
  "key33": "5kPXHWJRN6hFYxJZR6z6Lh9ryJ8w9V4FXfVhCHeZ16gMnBF11Jn43ezEKBjiUKagWnsXJf55c6X64EGQyU7Go1qS",
  "key34": "5MGMbVMEhVDDjSb8E3QgRYAW2Unak9hdb1kTbXstuYSkkaNJu9txc4ELbZVgMBohG68igDaQbyDaEpUGoiEyfCE4",
  "key35": "62LedxPXj8CrrDsvfddYgyYTXFcvT2ksg3Tv9AytKCGttpS1Jz8xwsLwzuCNRjw4r2cRAgSoTqbUNq48BDS2wPQB",
  "key36": "Wr4YY17aDbdZxemLvxXRaD3gd4DUUNGyx7zpYthqqomtWYT6KReRDnkLt7L3WExfzfxbjoLKznmgRWnP1GPnT4v"
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
