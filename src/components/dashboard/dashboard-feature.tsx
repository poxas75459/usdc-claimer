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
    "4Jxfo6tAiAdHeQ2jydp7ZgUWyqAQ2JmMpeWyV17DT5PMmjrtz1wTZDvLPeZNYSW98S47uF1pcmPPQu89dZjWnCpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yodCmU1tBCPb6tdmdcy3Di5TT6kArXDEc9PsGTVcPxqvBC6dgddGjDENwyGugDKHJuxhGKHU8wMK9HdPRMEN7i",
  "key1": "3AAzQRDNF7p3sCEvnaMrV8TUYmrcc47JHxasyCKL3kDrCBekarQABwiUoA2aaoHGjibhwv86UnwE2M49hirGiuKW",
  "key2": "3kCX13pMpspA37DikRrXbNzMDd3xPgmFGDT9s3jzzaHJah34geEUHQ1sG6SDACupRZn8HxB8LMTiUiYacvCPUMGo",
  "key3": "HtkH2PfU2vtTJgQju5wsLqFWzhDmxmqiwTY9RKKNn3rqPtf9ukzm9ZdoCqNXzo1td846Z3LydKtXSFLwpTqgH5M",
  "key4": "jbBJ583XHMv5RT1PWMvUbLZErwK9CuDyrJV8MoHZcrqWXFBFpsw1YtNAdKrUYk65VnLBwpBCpUmp1wWjSFij9KF",
  "key5": "49QPch8AVxJP4QexzX6pbuxN2wPCirDAUp9L1kvWtBSJfhDbutqNwEY5HXdKMx4vrnN9St2gZQqMzsrST3o5DHB9",
  "key6": "2v4AEGcPD5TCgeUQhGNtwYVD7sU2y6F1PHN6QyDGxvtLXePMyx15yfRMdkxfoRVnZQsbxLDeaeWEWTisfMmCt22x",
  "key7": "3BdX97r6ha1ZT4EpCNd2k2C3rz4wvEuuQZMK8LuRsU4CqrBCwcXxaQ1zq9CJMDaJ1yJ9GNp3oi3AbGgweNiwHsg",
  "key8": "3Xd1H7RfM6ALuEjrPnJz3t2M18YxTJNFDyWa28ugqgdAjqw9GFDDy7r7TYKXwzx2cdcM6Mg1xuufzdocu1FcYSW1",
  "key9": "32ANzy3ULzBXNnW94mnFUrk98AyG2umPf5ebJgLPQPYfB5mzLXqKwh7wiMAG2221x1ii7ChUswzChWiSheiVmyFj",
  "key10": "5tmNBHd8vsgUkBH5a79ftNUyeuBi1K1S4Qx3v7skiUsVdGnvjzz4n7337HjBXJ5myvuES4P4hVFMNoKZoUJfaK9F",
  "key11": "2xJtJhK2rLYpEiaFt9JHFPDeJ6XfVZHdHoHuPpvWU4vHxHunmY23JekkkKhDRsWKfauHkLUEcfDbGT7RuF9dbLjW",
  "key12": "8aGymssi5rcngjNwK8BeiaicYRrUZ1kym8GC1tL8hrRPFgK8sksbLyk636puhyhCSo1BtNovgRSqBVHj1rF6DpL",
  "key13": "5uff2zgvrhmP6nLjQ3UWpbtpiHb2RA7SGdqKAPAN1K2wjnPHfQXYym46W7WnNqBWow9WFBTQqN7Rv6np4Wq363Xw",
  "key14": "5kv53PBa4zJNXdARSv8MpcF6EHS8UJQE69ov279M9sRAP6gxdf79sWpvcVjNGn6BvDcexG6LhtGdU5qPPgUY9g7c",
  "key15": "25gxgQTpkrHgkBYje6CAEMNz2cqymjnsUrtKKSoEe8r3ZFDvqqY6QBTPkbYYGXVhQQZ3NKkRkYAho5yXEfL2MJWF",
  "key16": "43HKhgpv6arKLPzdQa7SyK8CEPvroHpruv7Y2CRY4hs4Ce45pAifohpqCpcyBmuUUqfUCetnz4phDCthR2ppZ7FS",
  "key17": "65ShcG5TzGZySQhEPmhD4KWR5jk8gX9LF5JfX2aHqpwp2Ry6HJxLJh6muzqDNCF9KscGnEXntaqr8AFRfMKyvktn",
  "key18": "2rrkzaeYT4Eva1jSSiP3LVQroYcXT8XvKfbWRK5YPB3m6KDzmafou7KKd2LXVmWyBJgaPhSk5Bz79dsL5dpTCq15",
  "key19": "3aewYMcFgC61eRXeSTqGBjKWAbWMLATmEpCu1nMjEpeZsPqVn9n3wBxrw4Ge9LUHU4ek8rzFXXdNi9i5ia3L1eBb",
  "key20": "3f5pY2rUAMrj7EUnJduvkicr322eZQ9MfXUpdkh6ccw8T5j2fD5wcfyWgvDGxcxYLpYNwaDH2arHy6iUt29Rfnei",
  "key21": "24VJ27aRZcvzNQi3sskmjrvD26vwymdVsgbwet5HpocncoLWKwqoKQbRpWMVtqtYenH3Kdf1iDWCp6JZJdK24Uyo",
  "key22": "3PBTjhSPqn7LKzVv2kfUP1Gze6CW9jPmNQ8VKN2p9UJnkHmpJeEj5tYwcbr2g9FSfi48BiAcoEypzoZnBTdmZnd1",
  "key23": "5W4iRLwLezQpSPu12xiWPJFVZVjqW9qN3feXwsRekXVTHZPGAnTPCo7ZonBxzuMsRwmFYZHCtvKPxeRFLB65WBgv",
  "key24": "375sYRQNUniwBGSuaExwH5giHvf8s73RjgriSqR3hy9fqysNqvSoxwrvNJYzLA3xbftyXQvNVPDBSihfou1X9hAJ",
  "key25": "4Fk89W7tZoRvabzq1Y7eR2UukPRUXm6aBPHNVFrekUXpmNUUUQwtDiBFVBLgDW25YPoP3FKJ88uGPrMe4t32yLcy",
  "key26": "EDhEAAzEASkzQ61x9DCYRQ8Lq8YguEvLCAhjEPdaT24w9gMnjvPmbVBGDWCg4DK11SsMLoEJBnc5Qbr2MtJMysh",
  "key27": "23JzmzjvZN7cmjmG2xNBj6s2rW9VFeQYJPxsVVHzVoTKTTn6rnQsi6AsMbKkbeYVK5kzLx6yBWTPvNfWwjvXynWv",
  "key28": "4Xy69AL6zYD8C2EShoKQA7FR9uqh7AXnVKurgvcjtcq2fWMJh2ynGin7ihtMjVnkWMDHyKvK6WosTbbNWaCdsQL3",
  "key29": "3ioEW5Kbk2JGEwRJpaDaTpuiN18NL64o72rbWFJ4ioD1wN4E13CwqCokERH5GvMUDcTV7kVrLDezmEGEXgDUQ9iv"
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
