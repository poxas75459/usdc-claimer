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
    "4qmyyuep1zQMX3mCsPSxubwZCQ7hx3nwt4rf9Vhj57b7y5SRzkLLKRZr6YbhBX7XvgDACzcPaZp7k7WA542uVeJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sQeuiHQNxTfErmD6LHWjJqUfSNXw2WRnCBznXUn3hR8GTPaRbBMt98SaqM9NqyNDWfqsx6foUAGDXPmXtuqumoy",
  "key1": "4j31VAfjV1mm8JhCogYkggtdZ3ffXDnHUyAibFJfJ1oRetjKjQXzdMwRw2JMeeFfsLdnqLXrzHJck3KztfigEew2",
  "key2": "5s7mpVDH4cMdxEdGhLkmjF5Gua6eWQk44zct6KdttJnSEmVQhGSDQB1Raa5B1pgWu72mNBnc1cE9K7NgRHdz7Jjs",
  "key3": "2VqidXfpvs6WM1UsvduJ2UaiLjPVgam8ez5LS8byVmP5gUnogLXsRHa8VxVuWSzsgiYPSjsVvePE2wVbqZKyz9A7",
  "key4": "4XUDu2sYqqbXamMbxc7xM489eoKL5abjJAxnfSyv3RHv6KavzwUMUYX6uypK2iL7npumfWde4AbSnUh4dwiJpzfe",
  "key5": "4BzF2TdYdxWu7wskBKGv63qn3oWfYxr14oLcSpndSJ71iEshkRs4cwDxksa8rXXdRLxgAQd7QxaWw5QXieo47pEv",
  "key6": "4EL45q3DW77ZFDZWPW9Eqmjst5ANobKq6rDnNX9EDD4GGNpKTfBU2aoUm2WF5yjgabp9WiyDpjqGZGTnYuMPXD4f",
  "key7": "43fEWcgVh5hkCu8yjmcVvXY4ZdZJm6hX4tmy9HbGgucwo4rT2wXL9n85HZQ5hd5Xam6AZzZjSb1j3XNJwF1VpE71",
  "key8": "4VsjW81eiTgRY4bk9ZZ8EvSv1cG6Z4uLLNk5b2SEYC8zLfzX11g9nGsRzBc5ipKx2kdtS6cbdNi2MCa7iLZSHqn9",
  "key9": "3MhwK4zbRdxTENiXVqzBHTsWjSR7LeSD1VPhQYYEdT3cSy8oV6PrwSbs9TL8VTMz8uWJGPMN8i9YtcxozHhQp89B",
  "key10": "5XxxEKZbZgb9zKZTBwRxzRVEJT8QrKnUFCmNcWmkuFaJEd3LsPERQKi9zSEdukTZUCeoTU5misuQUszfM6s2Zy3x",
  "key11": "4YiBPgjerBKHcpBJLkunnjwfJmZFaaWVLxp5g2jhWZYHy7erdskNNnTpPWczhC6vX8SqGxVSm3SnfsjkqtnB8xeY",
  "key12": "2neqHzauSjb3dsLrW7st4vtLSGpmKRQikV9rm31UrGCC8Tg8YE2QzbKjy8SdwDrV56Rt9QmwuuN8RyGrScnS3ezu",
  "key13": "rwLiyePPXPfmTeq9kSBAbHzngNd3Zs3yV7eqDUjS14ZreCj3A1x1WjnZLfKfQvUhecFNfDJ3uKPKnekdbMvdn2P",
  "key14": "7UTMf24Zjfu4JvKcN2Ro63JSmBTvf5XKQDnZoUfCTQoppaqZSx6sQENqGqmUhXyACed1TBuiUEP6kbufPymsr8j",
  "key15": "2PbqSddNWGdw7LvaSauwCeaQRHz8MQcazYK7mUWzJChGxdvhP9phjb79puQkkBUkkbaKcUMhurNng6LePaCAV14m",
  "key16": "3AknpmwDNAkXvDycoVSBP3oZLE7yWf12u4iKzxLnN9dHr7gpBm7fFTm788CGSmZ82hLmpWEhLKuQx1uq5wiPbjt4",
  "key17": "53LFFQThCUFnMB8nMphyQrJMahGUUKEMsk7cYm6fJKMgQsWbyBFULrg5dofvtrJnz3C3JdAMx2MjFZdnsewiMmja",
  "key18": "UkFc4VTUZDy6oxcAoHkxMDteTaw8Jt5YRCSZEfzPdx8qQ31GmPjD74fDZizM2AJaJB6mQYHkyVYcrDZwmWNDjvZ",
  "key19": "2JMwdHnPyTFXXoBh26J5fJDmfLN3GymzY2Uf2pztwZDcdPsAmtfJaXTXWNiBQJ1LMsZQ8pC6TVTPYEb958Liupb4",
  "key20": "39aWR91LAeZJetCC8YGLoBi4bEtw4X3V4V9DJMh4BVeb8FeHSLwiBoCiGJCfDVWqZp1PTsP9ADPtRonUta2J1ZGS",
  "key21": "5NK5Mp8htPN7eRxjGqHKZ6sQLMN28uPADNvGQRanyz3FeSdi7ofd9L29uESPoaNxas8ByRkUsfD2tULXGog8YNbD",
  "key22": "4CSthvumjgzudaZpt7G4wXPuvoSf5ee5RpuYk7WjpryV9cmhwQ3ENNWVKWqYksamxtt9aPmTUZ7Xt6QxxDzqYgoU",
  "key23": "2uNmW9BG2kaueYwiFoCvEji9BsyCTcRKmKrv8SG3ve2ZSEZ18aHaETUKhMGEjnSBC7XKntMbskLurQBcHcCvXRou",
  "key24": "2XxNkggN931kP6DJY6mTfzGBskegkM2QftcwSKsMiCwF7JwgN6kUYfCf7gjLf5WB7VN2gbUtxXkJWeG9yJUQpgnT",
  "key25": "2BXdA99QpxPQDgQomZnaJExcwrmeBQ3k8bKTtHbgpyETDdeQkMaME6R27FbP28yqwNvqGqQtGw3nxKMtb4NH2JHY",
  "key26": "2id1FrMUrpJPW1TT3vjU8uhKVEm6E8ke65EwwV2PZkfEL9DBMMJHZ5oXaYJcrsdpuQm5m2UYfLekoLfeiW7eSmET",
  "key27": "WWyH9a9Bc1W1rnex7WB1UXRiyow8hKiWEp7V1PnhLqPsu52UXzCsvc2fN6FW61zFCA1rZdra1FW81AfBtfRQQCN",
  "key28": "vkeeGJh8sUejcRvbk72APaSRpaoYdFaRoLkU6afrBARsNazJoyomopDDqjMRk1JpB8GT7y5NN4HLXM8Q7RaMWRH",
  "key29": "4yYCq6qLA8VE1H6ef79qhNRK7VcXpYwXX16Nv6bDQTgYUkrR5ACFKtK76MjYTBQDK1t2xb9Bt4oVsEQRZzVoR6qg",
  "key30": "41hcc66ux1YjXcAyTekdd2RWDmt1NhhLbh8ZthEBvbFpaQPkDKjcjhpU9hu4pDDNmwNHUNgXCz9UnYnySXidtGRy",
  "key31": "546832mTGN4kEyEMMu6H6GP2KjxHniiAQx7zzPWyoayVuukRTizxZ1U5JqyhLDraPEZLkqeqoFGzdn5eKaMPz5M2",
  "key32": "4vSdQSpmkNKEpj9U5aCYYTZf3296RDzYRRPDU6atxJfrH3vBWavbPNvNUWhhAcu7Ur7XZi7STnSPGe7c4Qct29cw",
  "key33": "5mUMJt6KcKiHSTbiBjHLZvVq6ZoBoshZr6bDisRjpixLExTucyUmiEwWX4XPX9PSWtFtUgjzxyzznztkZqd3BuKX",
  "key34": "koAyqu77YhkWBPWtdo1Rkp3TuTwjd5nLbrHtshjoxcU81jgDgz5PBNGkjabPN4BVZxNpzH7jZYKMbhdeZvauSzX",
  "key35": "PV7qb3JTUFF7Q66ryeEnN5yhF1XgL39uwxoYM4QXnqVgbmu2d4Hqx35rYVYmWH1xdXwXTBAT4ShPg9bMcApbHJA",
  "key36": "3LtdAZXVwsYfE43PiPZpkzkHvn7oxmXuHdzmsjaYPzp8oeAmX3ELXTMH7d1iFU5j2Fu5cDhrAxP9SPZGcCKXVr6G",
  "key37": "UWYavCdUg8nYkjE8sv9rbAUstU2CsvD6MxxU5y5epNaed9sB1W1YX1EwUe1t2hawuqwXGqyQSKeqhdxepNkL1VR"
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
