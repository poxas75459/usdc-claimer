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
    "4yw4aZEV1iDfwskbqqxHkjnH3cAPLbrgscwx2vTTLtZ6jiyx8276z1Aw8Ln6hjLK1bwJ5m9tKQbwsgHT6MHL66nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvjMxYv8MpMxy3kQbBef8XNfUVTX3PdQeJKKb4W8mBG2ofFypavAUeBHFBa2xJeSEzekBcasJdaoKxghp72PFeE",
  "key1": "2CUt1tWUxE5aac4qyfv2px6j9hBMQf75rrPru4kwHCC9X34KFh9N8P7bU2wSqspm6HVEKQ7sCxEH2JybWaJXrZRf",
  "key2": "26MeS7gz8dtN3b1zCnTF6e1qfZ81yunh5VReZGBnDEdHvVnwUSDvWtvWf5pbZWRqdvYx349XG4RgAcbFVniuNjcK",
  "key3": "gaG6hpBfVKVSNbRWHtHxW3xdHbFzRL1VTbxZsWXohM98VyUziD9aEFYLkxpBkY1aKfL8BwpDzWAij2q7bM1Ggwf",
  "key4": "orAtPYHrqS6H8AGAoG1fskQ7mLogBX5a8VXQoWuTZoM7uSK835bTDanypeU9QrntmF7fVrXDHL1CYHRbKdnT894",
  "key5": "3V5w3YhDPF5Qqhqx466rfR9orsevWtGGwyjnPz3kRimqz2rRi1yaNUhn5sfz8V4jxjz4HqPvptwqcXgmxihQ6zNV",
  "key6": "4kpgaVEDVvLAq4yPZk5Ki5FjqWzwNdwyHATzqYNnhhCzhX3Uv7p2aXWhgNS6TkVhaY8skCzuQMpEmyd6PuA35v5A",
  "key7": "64MrWabuw41Qrf3U75bo7dQJtE7z1NW8cRnG4PYZSkFPoXazugu52Z6fb2tQpuA7bsMtkj8EVekTZVP8YyVRJMZN",
  "key8": "2oiBa1bfsHxq1VeHpUFaTFfQjG469qouwV9fPnRATPG6xz7SnYhgksAhvmZMfAytaysnwBHesqbbmppW7H2L4S48",
  "key9": "5CBeJfthhy8dfmn5Zu3w5xxyZqGM1vPgMeyqoGJv5LfeSq6mwteZ5kV5Vu91bYfjHGfiKsFvPLFiZV4BNLu63PX7",
  "key10": "2pjFD2eLcjmgU38fFF44PRafhSxAYuC4S4oS1mB9TbgScZg9HL7gwtQRMubmLeH9Dr3a9WwTiHWmAyTLcAQsCZFL",
  "key11": "5GPvjJpzuyKUZg1jjZwrKp1vURktrePLdZte99Wfh4q7xfAV8gAkoAGd4xNj8Jq6DbovBSGECPSbwPvA4aBzG8xH",
  "key12": "3n2jeAEmvnkFRuu3WzQK9HtT86kQPCiAyTQydreiNXeABDqkdm1T3kvswbr5EiHn3PuDwzmN4yyRH2Ee6Vxg4pJF",
  "key13": "2t7Kt6Gt4o71pa9s6ayba4TjHpzewWVLDXwXB8Vesp1GFEkc1BLTszAZQkMnLTMQZhs4hjxemXyeRKU8fJ1GceN4",
  "key14": "5LuuVkvnTteRDuioyaNxXDHjhXtUXs2ExAfyswQQ5mRUdzX7vGTYsPeBhAxjCT7Qm5zL4rycLnhEanSzh2soXfbL",
  "key15": "66oKAaaQNfsnFCh71qV8PtVcdV8h7zo2DWQ49JH1dih9RUc7vuXJC2Yn7CCQoj15NBJQKihdTuwMgj3FWyJTRiyd",
  "key16": "4TdRqDSvFp1wkvAjAMAGWumjGpRvioZbeDeJEbWJnRwxYpJ4yxmXwSkgr98CbUgwtLw9YeF2CX946aqdbcend83H",
  "key17": "2EtjQikcQNCFfpUQNkNKi3nKYL9i8RKTkaD7n7DSFqAkkwD4ttmSmUyBrp8ZCmF3qKmzv6JQ13Vn1ATwq8umwCNM",
  "key18": "4tAEt6vbEtru8psHfDHAi3C2V6fkH5jqckUgFPZNyaxWNBndZktjgZ14Xj5XcSYDrFXyZsbo6fcHvSsDYwgYrw5t",
  "key19": "4ZbZG2ZjQiqoeMvKr7Q9kShPQPfAEQN7M61cxJ1thih1th9aTjGvNy8jLKpdCU1jVS6xyuBcTwZVLirc3GwgtJVR",
  "key20": "3nX17FE6sFb2s22iCvS33dGdRZbQyrYpncqZ8FCVNwNYwo1qA4u5jS1kauRp1xEZm5p7G9Nf8GQQ7smn2uyFxCVr",
  "key21": "3kLVZYW19ikrMFTjmBRxzm3aihFvhQKzgYnAvJxCzMmZw8NxP6fsG6oH1aaf38m1z2so3mMWrQYNwEBVpDiyMVSp",
  "key22": "Ho8j8ANuRdqdftWpjjNYkp2fNd9fK4f331JHbJ7SoHtbuxXRHsSLGYM72VFWPYSgTPTF7W2eyb7qqgLBrMZXJ6A",
  "key23": "5GR8E9xuZXkXsELb5no1YTh8yUpjWEuapXtpZGV7gG7THTjjoSHTEF9647UmiUVnVA4U4qWGz7MrhiaFSL4budQh",
  "key24": "2qw5i2ksunMkGEavJoPwGRWH52bGpX26FWQ5i4wFCm3k8BtsEBhAa4WVbAP5dYQB6V36y7eHfYHFwNMkFEqco3iU",
  "key25": "DzLxe9a316ddNTxx4Ms2Mf3MPSDuPQmsdiyAPhaWJwFdDHr7TZZ8GE6Hj7SGTZDjTWf1uWPVDdJuWzaFZMo8pTJ",
  "key26": "3bzuDh3WyBxM77d1Bmvk4Y6ZgxWbE1GmVzFn13bmDeMEHDr27DLVdXXkva1bAVKuTWhtpTRTsaYYvKGxHL6HswHk",
  "key27": "7dMPCMq7v1VWtW9b3R61TrMm7yKTyAYsSBZRAyQJ3kQx7qDNNg2dDUZEmb6B5qjgukgf9CBChMueHNe3rFDwmVB",
  "key28": "2rkDBLMMiiMYAuZo1EaTFggxBWrFLfgXdicVCoLfxaDZA2oL1JWYfFmtvoNMitHDkBPGk5idcz1qwidAXVwzoDrm",
  "key29": "h4mc1PzbUQcaEunPRTsuEaD7knF3Q9e76NNnzKTXj87L3uA9cdM7TEiVKK4pwViUqoAj5vvPGmWqmJzdiuGxzo1",
  "key30": "3J3LFkhPKKgimLn93ewumpskmxMkQNQMpoq9LsM8diLk7XNr243DFJXKTgr1jPvnbbFXz5nQqAJbEz59jHuwHwZW",
  "key31": "5NkdGfDkKDLYGSFNSxDTrj5ydMiCUuU7rk1rqAHhEAVS78wy4JdaVuNsoNfrTgzixfrpCQ9S1WJMSpTTv2Pi2wCb",
  "key32": "3Nab29C3HqRJiwWEZnX2HYSkMsJRvvn4vXfKDQzzTa5MtyBC99nJPY63A3uAfwQfb6hdB8sTwUpNTg6wDR9udT4C",
  "key33": "4YyZgv8FH9YuVZStNCZjGRCf3tZzw9rgHCkm5dsP822xeZnZLjkiHPNHPDAGyzFU753waYqHTowr8WpVF1rFHbXV",
  "key34": "5d8DRExMaWaZHf1F7Vhoq9Cyc5GsDdtmmkKEjvUSVd4YaPXbJZMUUTZQSe7GZ5QqwVUMbvxtpJEg3Z4z1EPYk2Ej",
  "key35": "3Hs7VLyGntW7dqWPwrZxRbqxH7rg8rJFUfz8FeLAD57Gsj66yGim8UXmSBF1qTwTDiuVFKWfyLiRkb9rA7JE44pG",
  "key36": "64dbBjKsYiXLJ8fAARJV3Sc5VUq6RmQKvZfgL2v4JuL1euRZwaRmW8AvsePHNruYG4RUYMtyKi9LiTQrfDupREoQ",
  "key37": "4nM2JTU4fbRaUsHtg9o9QGFRVirjMVbR3JuDVyxk96g1JpN88Z3Tcao6VgMAZ4UvCvNdixHtQnAZQeaxckUHGZvR",
  "key38": "5Ff3p9WLVENZwjodnCGM6Nbz3qozjJ71HaDtiJsM7snT1PPbzh8ntcc2jCpQaRqTtBwWKdJvLji5kHKpkZVA2Wvi",
  "key39": "7BoeVDiTW6zdptr1Z1fWVu1yQfxMgCZ9yrU9Xc8ibTDQHTd1gw7m6WhGh1QNKc9PajUedqNzhWkMiAsoWhKh74i",
  "key40": "4GKcf1XUen4vnWyddXwtVsdDvcurAvhDm8cfrb5MZmE8iyrorDrkHtS5GtnmaCxzVz2c1GfCKXjFiiu7Y3rSSTya",
  "key41": "2dZNLK4d8Md3jdFgqhYDFVYAvsJPiTK3ahzaQjZehwcWhCt2Xheb9CRD88bWQmWH6m6ieYa8Tdn7AhSvTYK2HfV7",
  "key42": "2VrjwFBFxsZrWcVoKRtDq7Mbg47SKqjLtDWcJPEDP25XbTGkBVGYhEaphyyMz84KNEhyJMXmqxYC5rj2cxCZbVoj",
  "key43": "4ppbpJuNg3MoHx5aDdH5YjELwkZn1wb27hmLmMV9YnxsFnQEi3RtA44yW1gsBHW9ukUXQuuCdYYKnnUy1a3io4L4",
  "key44": "3ZxKq9sWViFJtPHzw8w7LGAsCRT3ZCpMFHTajCrRagyJpdcviUvGxgjkCVebhJzNWsPCq1ckDoVDxqAEQHa5537z",
  "key45": "58MbjwMrmF7UJ8ZTex2CdxsYY8zstDT5focQmeVJKdjuuAXj3MDPu27bmv5P5NhcyFyLZyVFAMSfdTwiwxbDeVvu",
  "key46": "Q4KaHERGWXwmdoREqjPHFn3WGq3aNtssnxVermPwQGLDjjY2kxPKC6qEdEXL9BLYjrivfujYZuwbZe2XCNLEYw7",
  "key47": "BnxJ5JYwxpiV16i3nogZ1RrbLD3SDHKZuf1Xhwgu36TZT2QVoNscuEHYAWt2R8nQMHd7KBszpeVekkpn9FGqj5k",
  "key48": "4eX3gvcrYiEA1SYqnskfSvmAumMe4FwfUmPbdCjH2NyAa8fE5sPjY8U8RWrxPep3oYpqJnP8U96PgWevdWCuh8Pj",
  "key49": "26JmVANgjF1cGCtSY1891caaQQ5FjC4UBzwNyQH8nLdzFueW96MmSDE6PoAL9bHzEKmM5SydcNkhCorufskSh2tR"
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
