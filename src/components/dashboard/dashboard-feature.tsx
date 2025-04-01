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
    "2Wd1MmszXwnSBKQ3o2E5QQdDpBBpseVW3QADqC1CQxdJfHGbB81z7piHUpAvLLJ4aSU4bFVwbzRAuMaQatTGJp9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FcfQp8HgWuWMq7j6cqpoYW8RX9eZKeFKWyhguMuMDdiWJupE1j6LsNLTeP2fobHLTPVyHoPTPYw9DJc63gZxtkq",
  "key1": "2iEq9rB6tB7z8zgNGkENEe6EUALiAupeUtbvCRyRBzQ5KVBBMiiddNRjq2Szjq5kLxnm66wWEA9UdqxkpZFSL1vk",
  "key2": "4FuH7NvNY9fJjnZ4BphLwzm6pDBf5rYCSpsJCMnxrkdL99jexpv7YGDaVPMQX6yNjFcia69JiseL8b9wD8B7NbLB",
  "key3": "2uRd8hPxjXbX5DqzH347h3tSn6UkbJZuoRymCjRkvxJ7J26W492jU4T16JDxXe5kpugtbgGhz7TgSP5FJgVY4Nr3",
  "key4": "5n6VWGzhD7SoY4siaRTduTQ54d8YaHdKJWp5UnKmsVP5nk9odm8CUKs72ujMX6fQX4deTJnwrEibNAoW2DZdJGN7",
  "key5": "2NsNajTpCKZ3nh1uNMLu8MYTMNfRF6fBDSjKLmRi7PpWVMLWZ9MWmNcFWbe3rtWyRkCREBwz62br2oHre6GPbkhA",
  "key6": "vUbgCSMBCYrgWBathmFr93N8BcyEHjDsebtrP9JVzoXVwok8xa8F3aEmh9SkjG97qA6Ubpga6g2UgPsqrK4SZqA",
  "key7": "2HHRcg6fPfkwHFUmQcvPiXEpcUyZEEbHQ2KZ5GG5NEXezTCB4yNnpNjoEPLeu3ypeT2suY4VBwxp4keH5GUrYRoe",
  "key8": "5cJzX78HddxhFawt1FvdUS16LnZDSa3PSetjLAMa18qdy1ihooeQnK4KWzHx9HJTtKY8B6HZEhJs49MvGdCc1eD7",
  "key9": "2yM8PmCGkyzU5u5JBRurXtuRGLXnU6qVpfDTTS1uNoNRtfG3HA9ntKqi2apU2RfVVKkjPm3jdxfbexm7zu7rvCCn",
  "key10": "3S2PBfFbGM696gDVnhoJWpyDWyfcrMbVYM6mGefDm4NytKh1gVWJ2Q5QycdZLJScUKfoPXZiufW6F7PbPYJGzGTH",
  "key11": "22m1ajr7bv1n2Wz849sLqAv9LiKtG9RbybcfggYQcAWuU6rQssNzndiV1sUoQgvwCNn6dQzEtUc8XxVSjjQMQceL",
  "key12": "373hoUamfqnpxTVK12M2jWA4WhTet7E5bRqrfGNfMav6hABtL8PoefU8bjBuYJJwsrHQ8ddFkQffRU34oxByuzxw",
  "key13": "388H2hZnSzvUDtMF1VxWotod5uehaqB1eL8xQRvkRTmHXkrhADbPeK2VUkspn3zNgK9oNnrDcNbg22RD4LdaBiPv",
  "key14": "5JdyCLwm3vfNCj9Fu4zFBa67DgF4uHhLaGAHJjEGzZntkRUVgdbxq9nJ1XbEaiwxf6hDwiDY9kitK7txBQo6uLuY",
  "key15": "5SAnUKMLGycwNcJk484Gif7rk59GkdPtDegDibqkgABC2UR4jzY7ac1qZ9oWZ9YuakJpyYpcgqiAPapHk8T8HwLN",
  "key16": "3hNfwmNbEYpKVk8TMnnvwXhTL6wiqyewHJRJcpndiUKa16AKS3EAT7rvbeKYdUdPnzScYup44NCMY9cao8MkjpT",
  "key17": "2JzdxUxXVURRASps1ioAr1b4yN8Tky2999FqYgTgVovE8NmEtQNw5tmoEYdLYGLpPuUY4bHnxDnni4vqiLabxgLd",
  "key18": "4ivZbGyNKVuCNGQb74h3q8nrRkxuAHmaNL8zxd4e7uokjSqk6twonoT62SL7aqMKhejTuZtHAbLH69nzKVugrXf7",
  "key19": "4eNvvjC8k4SsBQVMjCNvj9KYjoqcnC5mYtTyZ8HTVNckaSmx9kHH9JdrYpxiv3FznY9cgxV8Y2JvNkv6aQwPewyP",
  "key20": "3Wu7hMjFQvuM3NK9NNv3rruopksu3RXRvQPduYB3M94QXXD8zHcXGNNTY8yPzF8KXaf3rASUYdp1JT17NfmQzXk7",
  "key21": "3UoG9cgVH7VGXVbwhhe9SM6DZGeoDfMwZv8vzd9RMvNEzeAwuu6N6mNv6PAvTi8qUnY6igEU9h3mYKyhSEREXkko",
  "key22": "2hZCKJ7uGXy3gn9FAhdpRtyUPgy1C5jor4Enne469tYv89GCTQVFrjy13zQt5FXftCwWKk6KveT44gXDXRgy36YM",
  "key23": "4DTcoRkkcQumEePeDHuGDKFbhzrv8amWw5Ha5ScaGUwbZxxUjXukWyqehXLLg2MXsEspFgamW9FebkUbn7eRitXk",
  "key24": "34C6q2Gvs2VQGbBLyPBHxQyjAiYTK7cBh8bmFY6AJrAHwJCE5NpN5Yjrm2sU2dSBfyTBsFtJb5htHXsoNVeGriqP",
  "key25": "5VdsD1KHYjxGxwc9avc5kCS3FmH1EcJBxE8VkuuRaBCVCVE2Du4nSLiXUbfCt3NG4wFThvBCsyEcAX5vb79J2nM4",
  "key26": "3dQ8B5RG9v5wHVYdE6kzYZ7Wcgs5KvgK6CLqXhzYBvUm4fM4VcmD6Vmo3PAyv6MbC1xXrhwMAyGuSRiXiqkK6nia",
  "key27": "4gbruJc4K7H8mhQRwyjqot3hvvsHAEJZtZxr6qWc2Sio55kQZqoDQZgueFT7p5mWai5ughJNWT7MKEdY79UsZ8k7"
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
