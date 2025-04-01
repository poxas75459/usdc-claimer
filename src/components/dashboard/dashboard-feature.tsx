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
    "5qeiLYtxdAbxRfgRk7gJZF5bCJ54deMnYN2SuEq5RfYhRXkjdHzU7e4U4J8wHk7aYuBpSZ6JjeR7ii1kc2cEqtau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SxHS6pYn1p7WEiMYKRz3x2zbbmw5gPHgrqoSWxkTa3iDdJGdY4jJBQY5j3k4dxqiGJuKSMjWsvKhFqXb8fpEtjT",
  "key1": "5KWHU8aX47cVg5uGaJ2RKnxSnEJVYHVy2eyVhQuUcPaYnu2W2NFvcNrsn6LVocmgJ69ACMq3GJ7V7Z7G6opEatAe",
  "key2": "pGekTSGxpNxhuAH8st9vhisRjYYaey5DJH87NoWbYbi8b6pyLv7MCkCTFfbMWBQn9Hq9GCN19P2JGMLMhpQnwGY",
  "key3": "2Xj7tAgYk4TbTmkke9jAieD1f6X4amkHnivtYB4snSV7pQujp2yEuzu8kktpHCgnsPnwiJhQR4LRi4r4ZAAYFZwz",
  "key4": "5ZRg3wy1eWCpHP4dbtgLSXwJNebcWrm4Tx58o8cT8nGs3UnaLAbvErUpGNmEAac1iD5JuuoG4ASK3ivzFm6veQ5h",
  "key5": "mRzprBdp5ihbJJe9osM43pJ7dnhFTH6Z3UGLyuWoMhED6RyfUFVY6BGXtuNGfUB6SFYHH2MGfmJiHbjonvnFk9C",
  "key6": "43B6Fuq9wP3TxD3W8FXnPz1QZhZrkfzjQ2dqxaWQ8s1d8RiaJjQzSx5w9k8yzY4XoFuRFrx4fZLsU39ZjcdBu1s6",
  "key7": "3S7qDmNvdporov1ZGyVkJXRWyphG4AUy7TwrDz1rmEuprjcjXEEViF9xQ7cr68GoMsyFYnn4uD3tA5c5J1bQchv",
  "key8": "5n2twVm1zvqJP2UohRTSNYSUR8eJwUUk3fQHak31H2TWXNoH7ZaeQHTD3KX8uiv9tSw22ZkNd3dp1hrr1k9FQpR2",
  "key9": "3Wej7XhScjjufJCUAean7MS8EktCYmEpLf5fY6fH2rt6WZ9DUURjQdy5xAJYcLEgWNTWwA8CXDoE8PhaeaLB1Mee",
  "key10": "5Re5x5Zt2GKbiXPS4gnsPpCV1CpEmg2fe9DVj9hTCXMY2Bf29z4hwGZc4LPn553U58773AShBrNtsdgihxhdRK27",
  "key11": "3qQ1KeRYGUoGKAua9Ls64kRDUycmegXMiVB6ijPHJMRaAf9RYKN6GVQwM9wNG7oXErcaXBjfHooDbfdYWcpvTML1",
  "key12": "woQFMVoSqZE1LPnvopTiv5AXEkwdxs5Xz1SCHfVMXkAiXd92t8fv1HK9YQ5bBu2UyZQ92FPMQTuof6p1bK6CT7F",
  "key13": "4h9oyioeBGwiMyg3MUQWJdGBEnsAheeHxyvdi1UFDM4QaBNgJYiFNM6MGL8RfFgaG6X8icMC27PQebCWrfg4KhSL",
  "key14": "2KtptQemNGo2qq6bJxFTh1oKPQ98jXKLDRXFYRwxU5hwufw8TFFUxQAM179ZQJfKNrJSL5MstPU9UJcgFh2c3iBY",
  "key15": "2xwY6x82z7UJJBLRZUVRymL9ixxuw1brNd5n9QteNkPX5VbhPo4fUBCzc1HWSzs6ZYpUjMZvYdo8STdr1jtUjPap",
  "key16": "5R54ZqYtfEWjg344UdFLES6XUT2C9XESjfzRKrooiD7iUZSZhobaj2qP8ZWfg7tEfWFJNLRhCDBj5TrAqQVcQPva",
  "key17": "3jirZy9fWW1ai1tLzeqBQVBKAugM5h8oXaaEWWM4kynRzdSFPKoxTgTKwmBABtFRP5teXFPqSVL7hUkpzYWvzQ4s",
  "key18": "5rUMfQBGW6UFDN47dU4yUqqpPeirixRYmPJ57ZFHQBMftsB4oQWijRodXBcy7Vz5JMzEHvz92geS7uwYMok9ZK9m",
  "key19": "up7dbzJtVZvFfbdioWW12iappS9cNPbGZ9M5DdoRi4Ri1XaVo5ehA5jHPHgb94wMrvgbRqi3cTwaYYKoxsVoPPG",
  "key20": "3GbjeFWt5RUinpkzRXT8y5XY7pawua1kF1GdGczFWT3teAtUwQyG2iMtabSpWVzTtirLZVbQgiCo2QLgcq83Gy17",
  "key21": "61sYWkF6sbnSuQtBPN66pTrZiTGndcLsM5rbiuEsJcAEVPsbzsGYhPihc9J7x5Zj4p36EuEzRYvMVye9KacfYddB",
  "key22": "4NoAASBvTDSLxiL92nVV3SCDoVtTYxHB7P1Tgo9L5n6g1TdCxZn7TEmkyqxMn2BGM61xCGw5rqL5zMYDGh5YABKu",
  "key23": "4V1u7m4J9DFmJ65AhVidsDn7hfGXDEHgxfv74D6ReooqhRFva7ARnSdiRqJArj7Qw47CeBA5W8H9QPQ77P3Mc94M",
  "key24": "2po8rL74Ax8YXe7QFekhfXhtkG4xvDCddj8jzpJU8xGKindteeRvG2n7XyALj5km3qcH3ghxnnYgx4gnrM5vNHZA",
  "key25": "AYqdUkWx5bWivNXEWBa5Tq2trQfwEcpgqHtVDftwv447ikwmXhPh19QNwwvXEJMqhibvjvxTYrCZhFBuLjoRPpP",
  "key26": "3EpojsQdrLCCJT5XQ1UC1nzEbaz6MsjNSX8gzJu1EHcVG3jURD33km98t1vr6kMHx5BMoYwETFNrQhg5hpYQxRiH",
  "key27": "6572yBuaZP5bgZSnCfeWiYGC72m8Qc4ZX72iTCpVVV6ynKodoodpzYfhZNB715uiUdrHRz5nTC1si3EUEYBE7zgr",
  "key28": "42HBJQFpem5R4WXjmsYEG1kh6G4ryeLCjotar5rzAgshSBuEvhtFafnfq9rWNEqbh5bmxdjpvAgcun6NhhiPnjyE",
  "key29": "4kRhhbkMvxZ1E9MhiBEqYU1vkZko58HHBfr7rozHAdQBxUz2yxcCxTpvmVUc322pTuuyD7s4emi3tau9SsnZdxau",
  "key30": "3i94Z18mRefwMiBx9v5jf9wB1EHDWfsuibdHnfE8YxRmzhAKpFcoYBANMCpXEytPUosq7a1ZaPhQ7c75VBb2SAS1",
  "key31": "5TD6rXivB715z8okzuaKF6fQC2vhE9UTy9Htv1X6G9tJaZRoVAh7P86z7af1L86SQgG8PVEL8mQS2UDyrX55S5Si",
  "key32": "necTYnFGL5yUyEYy3y3sCJfpcWVHZhticxeXpeceAfUwAyqwANXDJF6jg5B8FE8QfjopwrBakELLaueB2DLhPCz",
  "key33": "2G944LENarm4hW7VDwP55e7xzMiWmVwLFDnF2S6QRg39jKTpSjVh1oL1N6HG8tWXkvtUcJu2K3YJt1V4mdK38z1v",
  "key34": "5JmXDDRxfz5jySn536S6ExktJoTgkbrcWmQGJynKgjyjVcWvoAEarhenDFCSYqKxcNwK3ExvVeVDo4U9f1Rdbcoo",
  "key35": "2i6EpaPtD2UXSEiudkPSbwxivgaw18LXaaomSeXy5oxrUw9kJ4ML7Z4p1vRDSQRFmMsQquBSHzxiNDamazBp7BLs",
  "key36": "GCHEvqVuzJphnfJks1s19wwzG81yK6ngWQy6dCQZ2Adqd8iKAZHDn3SaFygHrcZsbS6AqoCrsH5YKWHme2hsktX",
  "key37": "4h6GkoBF2QtF4FBy59fKQrg8Lsv6FyWEhXV9DMdaPmN4D1xLEF3dnSVr2obhYjV6YgTgSgvhYraNQzoa3VzQqAvy",
  "key38": "4Vn4hTjMPHKYfh2fwmKYwDgXzJrBn9hgFD1PxDdD8Bc5iSXBM2NQWHTWKXFnnC8mbyeFdq7JdUuSxRwygnebEfDd",
  "key39": "3rar9k3tTdrTW3XV1TmbEgAt1JXggKBpJ38FYwvPzNjwkXGMVXn6CiLD9NgSdYmSyGkVrHaB5tSbD6xXK3SEmMvP",
  "key40": "2m7iYFwZriUnsfEiknPpBMZvDZ2YH7cxC2tefNT4HThKou1jCxQHG9jYGy7Ex4bFukUSri6agZotFBYrijQ7PrcS",
  "key41": "2RUdQMBbmp75jQa5XDmrvhvGYLC4WpFaYdCada1o5Mj8eZdstEdcRw1mGx27Mj4dDqDQSTDkLZvtzxjruMexRZqt"
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
