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
    "45ubKRdShuX1H57X3HxQiWqyvJiU3U29WBrxt6PojRAnPFY6ngenehuLenXqzYdFpiWqUExWE5cUGSW18wddUX62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3huLn4PsarzEoeSx4uvkb456uSVWogurbbdwqhQyRXy4VHrW5LD2Qhw9JRxytapc6nniuSa27S9NxarBTQVGHh4C",
  "key1": "2SRJnKVki6wGbwmCk19v5Te8zBogJrFn4FibULGATz77wGuS8tumqqdkBm61c4VxRYpYFK9oLcAzV9bjWT3DzuQN",
  "key2": "2qhixNWQavtB2DDNunqeSkpTJC2rXUfeKug2t4CfB52fhUAraZcyvtxjVxDBaAX5ZMb7hEd5NQwU49efkz4EDx8d",
  "key3": "4MQ2xd3VFo3hnbdS1LfTixNi5BLprRtTVfkr2c8bsSzFKqYtbRVRTNDxdmwpehMRi1PfGzTDQaXetaa4FpuMSW4V",
  "key4": "2DwViAEbLeTcRpMNL6Ynpo54ZnuLQ7p9ZHu3u3mHpp2rWqLzCLrZB4YYm22tW7cghVGYM5h14WJDGRH8S2KtSYme",
  "key5": "5ZkGCNNx2jnfbNgrLrjS71dXndVEMQpUuBChx2x4hjUMYpQDVApaa2qVxZnzEbStRx3K3monQqNQE8LRMLHSESRb",
  "key6": "5FmHc5waUenwqgv1QThQiNYKUTMPXRKR2Akjer79wu54TNtAazNHhv3DDbGeJMzzNu2oDbAF5YYq48f1KKVdR1Jy",
  "key7": "2X2TwAh9vmAvzCbnFXT857FBmyyAFfTcKW7LtBW9TtVPdjwPozTvJKe4nJJz6uYqgFZC9HHSvLLXg4sBKQ1EBZco",
  "key8": "5R3MJo9jUJJRdKrYukpnQKCb4hcAYeq4Zorte2uzUvJU95K65E8FaVRaSn1UeVXXn45fNTSBomC5ndhFdhgyENJ9",
  "key9": "5YE39qV3KtJMtbHkiQUy1MeCXdqA81nPJikAqa9JCBAdfZdwDH9mSL8VoxHTGjE6kP5JKPjZcKkQshHYPxYY2sD6",
  "key10": "4k3XzGdZ2SZFNiq4WXzht5cPeK1fNpv1hmj7kk5zQo9MDTtGXvq6Gj1SgB9iNFUxpx7qetd1nk3QUuyDac4defCi",
  "key11": "4uVPSgqPF77jtQdEYhRfo1FhjjLkmsdKDyVMxrrDyRkmC5vjjHTw8mB7mKnBcpURXT41CgCFfTyXsEVRikQQb4MA",
  "key12": "48QTHJf7E6pbLTxGe5Fc7PZcJsRWV6gchXpzTL5sAEwofCUvfGdcshiZgNgGG6uFtscN259Zh5A6nayCx3XKJfPM",
  "key13": "3yDCdcJmFgVxY2WZMUPvmEotnw9pJ5Xv7AM9oHmYE8jTzgAXFN3M3kzs4SWy3wxKM1piuUrdwhD774DptGrjS8Jq",
  "key14": "4QroMGoGDcizbRnCKygMSusYqki3ZpELWT9TizGmjqNk9ot7LTrif4LqCr99dsoxRbu9dFUVBEHiV9HVmghSXQxp",
  "key15": "5bQQJZ4t4C7GYKKGQTMu3ncLuqhjNJz4UC352sVPVZcsp54nDqgQCcCZ5rSQsSbVngEFW3uspRqceneUvV1bRjmV",
  "key16": "4ZEzt8C6CXFrmhHwres84EBf8f6P7y4N1Bvk9E26xGB1f1Nk5anR8r2ZXC9t2X8SKkNWqsdGy2E24FkSK63H2cWm",
  "key17": "4eeTtUh55ryCy86DFpGrKMUnCbNDT8Ckcr5X24sQco4cNMXMtWbNtd11sBGZwXPkzd14xf3xCVUW2FHYkjC5nohx",
  "key18": "AcEJ19o5y8QudvrDNxq5dgTsvRzQHtc1QXLBvhPJUto8c8K13DyqnCLfpTWbvxjLk65QkySs3ytfRUvLA4HVLMy",
  "key19": "TqKFe9cKePsycqUdzs4PzFKjMBpKVCUhncJUfqiVibGDJCyLQ1jozu8wjF6mP36WWgx4EsN3yMMMoL6hvz57YnF",
  "key20": "2F6F3pxdbZFxYQTH9iqYAm4sBbKj3oMTNQzGkmFZ5hvVhkb4LmRJs7sjCsjN3bdwsvwLmmMkozqiTccPSieXE82p",
  "key21": "45LKyaFkLYoRZ1EHW6s7EJFdj946gg3oqExxVsdhmH9ZfA2L5D9q8HcRYvjA91V4qQHey2dTXqmQc3oaq2gfpwck",
  "key22": "5UFaeyEwThY7xBertz9PiFWFh4doq163rQWrQkfePsZQgWDCYEoqPhtA9SpivbrdsLRnirVACQW7TuRHCNUZozS4",
  "key23": "5ekhSFmLfAk8oDEW9ADrjHAfnw57ijT6eyvNjSbE2U1YcbcBMFpZD3bTKoRmXQFrtV2Wy4CQK1b2nRu6nqLZufr8",
  "key24": "3xZVmoPukzjT9aj18tCobXZPKxGzhkfkAmcoehAPsak1NvWqLzjtCjBRcRtLDy7WSnZkJFQV5TKLq497y6HRBPS1",
  "key25": "4cU3nUWUYEFFBXkjPyaYTwHNGX3vPieRe8Vh3iVP5VZa29jSLH6o2T4uzrfGAruSyy89M4qBXx7PPqK7icbK8JtR",
  "key26": "3N8yXUAYtYC8DCQccyygMaiwVJ2Pnz531ABS8ZGa7vMEqkZaQHUNhWpnVhPJC1aqHoSQuYNg8ngYAPFhu1PgBZuh",
  "key27": "4LVgjpPfBWyCTDaz7QagXSXazq1uA1KFPuQfpCoHjpzUXz6Mc8EmH588FkujxW58C2JbCPQ1RM4r7LeKVfgz7WkE",
  "key28": "k5aNb9ZWHgwZbnUUvmDSrao63NBXp1CejwzJ3CLpUAu3MX1wchSizaC2CPqaCiWshxRfSpekEnsCoEU1v5QQsBj"
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
