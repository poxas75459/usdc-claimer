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
    "5TMUgehHGPxZk27qbWNeAM1EkhHAqdQ2xAfVRznMA5LUyX6uLpsSrw581dH75ACo6rHgHfxw3xwvRZtkKbC71DXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Px9u4Xm6Sm4eCTw6fxKGKuWJxX11w3uswdBUdQBSUjTB6UMaRscGj8nV9zmbE39si6e78r6FRcV8J2zJogTFVFX",
  "key1": "3m55r8DqQcoQgnJYczMyEqrJwiCk2cG74UEAwnR4ynUpQkfAkzggndwQDsJwL5C4YdWNqCuoeTQB4rtSxReWB4YT",
  "key2": "5k2vWQYF2CUX8wj7QSjphsZA2RLXVDkmwaKhU2PyxHxHzZVbbuLyxT6pvYWSH3nvWLwrwaGfjuvchtaQSR7KQ3Ch",
  "key3": "3BhwvYv6CJGKUYYHeof1Hhwy6MAQXAvpgpqz4iRSPMNiTju5dNyDitV2Q8gcid4sbkAuDJAuU5srK93pZ8P3TNpb",
  "key4": "4XhKtM7gR1CFpg8DFVmki5vNrA5MmcrAMcDJsQ6myfeRGUDh6aWYV5UzexeB7jqu6sDxYpufdZXYRipUW6GjDutF",
  "key5": "2C4sYharA8BdxPoY8yczid3NdJuk1mJrFJfF31WzsBR8BtPTj4Hhwd24TFQCV3mjUsr237kNbnSv8sb3PDeNWRKM",
  "key6": "5sX7eSAN8sBnnKJj8rWFhtyiw9ERZiHn8TcjS9QenjjVwDdgDhY8jRAWn7xXfLQJ9hwDGjCeqXqQgDDDnF8zqGYj",
  "key7": "3S6Lb7Y7KGBNujigHJsLyTN3dGpTixxNd8A8SwEuEE1BTMP6QxxnneGRxJoSRQKmshYEaQX3j3Zdwtt49Ny8kga7",
  "key8": "4JLg1qK3YWmUtwXETeNzoqXcKED2DDh7v6MSy1rHUhyppjibT3sWeuMV6mXdJW2KiHxT3wnz6uhnuJ7YFP6FUq3p",
  "key9": "4wthmHoxprcku7BcusWJsNpwdY6kce8h4XUjkZx2cZWLVK7DoQX8N5xw3EmWqcYw6niSnGi6dGP7itWFLRAiU4PV",
  "key10": "488BMCE1AWZNb3s1tcJijRFb5uKjn4Ef912Rfhs83UXczCiahQC5Go4Uh4eyECiqDwtTPbQzB2qKDaupLsFw3uqZ",
  "key11": "2VcaDbPfVaWUDu1o1LTEKFKGBtTwVUdGxqZLnKWe8Sta4EjPnUKiSiSZCDrjWBw22bAkuL8bjHTPsfB84sNR4aRK",
  "key12": "5Zp4qhUQ4HNLkS7DVyFBXGqBiZU3XF98PSLweJRhhcZ8rpFLZv4hCipWAwhSjfC9T8xV8wj7tFhjGL8SuDyUPMHk",
  "key13": "2hamgzfjVwb2CE24D4CGf8pxZwCGESnassBYuQfGrAJvkxLC3y4jWm1jjvysFBp7N9Sw2Ykk211kJ7TAK9FGKNo3",
  "key14": "UyJ1tH9wASuen2hmxmKvTWhamQcVfUTBfu5H3ZxRsDUSj5emDnaiNexJFb29sz5CVZjoyh6Y54ZQfNNwVMWLBpg",
  "key15": "4BTU74KHmkaNFaxXFkjs4L1ipkjQ66dv2D7yR44ay7BqqKmhb6GX7Rg3MRsUyhLbgoA2cftdNRmqzdpcg7bWtzZm",
  "key16": "3PEhAfs8FqVT6decHXV3cpbDsPuGr9XqKvB5R8Y9F1deZnwojYd7JZFQLZpHbt5i6w4GBbydBMkSx6gJ3yPWKvh5",
  "key17": "xUjipeEF5XUjqbpjbvaVvBvbRV1hzpJZh4ETP5aWLXy9J7H1DS4ZDCkb1p24fudkNs5MhC52jaaViKBpwbEbDE6",
  "key18": "2zvXu8RFTD9y3GSuNTuqVHqDiSYD6rVojVb4uLEYvj34f1cYMUamiu8DZdHmhjjgG1cto5xGfZUEzQ7P3XYaqTfb",
  "key19": "zuWzJBRWsWvBq8KiGxAstdgWTL421gC61p2ZfZUnM7xX9jgNeL7n7PmhFuWKS7YdJsvFkbxGUoumTn4HMoaeUYT",
  "key20": "2XknkoeVUPmyrhv7hQiWuKLWpQ6XBz2UKGDQcWFA3CaSf8faKD38T5VUYCFCrekTc3oRkd4PBLtKwcT76AXXXaad",
  "key21": "4ayFRfVwN1P8Zd7U45SEDPyB6s2csHJe135aYtwwmn8gMBXctrgKrrUPEVGDNMtRDR3Cr9bfMFYX2Qs343cf9SZq",
  "key22": "4CABkKmpXCkcqb6ocDyNDGiMgX9UmEyqikXJ47HrTgcMyCUjr5AHhpUtyc26vn72isk48jJ7SnWK8LXFmTZKaL8p",
  "key23": "iaNjiuXJieHREjoZ6KN1XdWo9iWJLF2cwsypPivQMfTFEbsp4kjYCdaFy7ZrkHxGb4doJYdXVnztN95VcinG4ff",
  "key24": "22N73qvm4otDKQdRJXJ4fn7sUoT8XtSNRMShCAzdtDxiVcr3FnkQ2gZgFrgnXWfLuBTi2LuPpLqZhWj8CzTjFYkL",
  "key25": "4RJJDaRFGWS6fz1Xdmdb1mNPHniwwiJEXZUHCxfvwVajYuyV6LEpJwne3PwaMDv47VFYFb2qdEcRLQVHvWMy58SS",
  "key26": "3uCdAdGuRZxFwmRCLUNzGnZ3k37Xu9GZbRFMdrkddJ6G53ELjVAJcGb9wcVRgzhHEGtqyd1YYnVQqHaAmgQHqS1i",
  "key27": "41QiF8GBoRjcPsfLG3rjADb4D8gMtoqJm2zgK7g9T56saRgeFFdUUWozfEfwqj33PWAv3PZAgMdrgPMQz7b2V6Ps",
  "key28": "2eWnDSdTn5gtPdMMEZNN1u9ioEt7iUANqmP1QKjWwZ2vNiveFedZitUgQRCAuJzQKeVXjr5jnYuDF9j4XfMses5x",
  "key29": "23V13PxA1XWzL4kKV8Zmsprxw8wDUpzUCkaBAQANZ48Tq46ZGCimcmiqHzvkzpqCkSXCqWoPKmgr7wC3P13MCoVh",
  "key30": "3VYHd7GhBaUQv91y5xtVEujyK5cwWxGGiVxBM7GhrzA3ouCHK7m4KVr9y6VotFK6qfX8t4jDcaHatgrXycDmVnMP",
  "key31": "3Ah1uEnizT9iE8HYWTqNXJAjwCpqVQCUVVHK8anVDy6ryVQ38SENXiVGKJBC6qCRZMGKcNS5xrNHUkS3zhUMShtz"
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
