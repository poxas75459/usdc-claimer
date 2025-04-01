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
    "TssTiAhVindkCZRCNtfhGqe4ufjxobMoaedMTwE51G1ehkFQXPi7Ag9MQQ9q11csvM1bL9Rd1mAycQxTUVzB8HV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LW8H4ei5mfUPJKB9zvLcnuPLhb2R3dYuwzwcGjixS3YWW4SjfxjFfvmMXwmQLvNf2XrnUrrbHNGdm4cX5v1Fdaq",
  "key1": "4AK3CdhFybFgngNjow7vGCrZgZqpwLNVFYuWxtdMJpMVpg2yvwCRGRjwDCK5xKMcxwNihC1uweoe1E7ar9VC26fk",
  "key2": "pmE1LiSGbDsHLjEboMAmvevuSiHXLQ5XdeejSsmNsd9LMzrg78RRXo3oz3s9tUJVBJX9fRP8Q9Mgq7xMY9UwqRF",
  "key3": "5PnKnePkqKL8boB1iqvtA6taX72ibtJ9p6ay9DiNFDdHCmLYmXYfFqp5qANw4VQE3duzYokLif9QQtp7R2uowiQx",
  "key4": "5eLoiidA4FG1y9ueJLHxtX5Fn7jhP6teUXeNb2texZZuiZ2sueDDccWWFYKXuFqPCAmqkpHmNrdP3oN7fjm57Ryg",
  "key5": "5iUcH4a2PM9Sfog5DSZiQopmWRdjopf9ms1nupFQDoZX56crYo6978ADpV9Qt8Wp92WP7Cvk6skrPxwysCqueDMv",
  "key6": "4Bf3HHom5NXjLdHpH313q7GDxgw9hCjEXG7GaC2e7gZHR1R4XXxyNrja4fi2vf57dq9kbwPG3jgpRsZkGFwmf5Kr",
  "key7": "33JbKpEf6m2LTvR1efb81fEd2grGRkUJf9i2Qxk7owriDyHTVMtHxw7c3xXBjyP3mbzwYEEewHBMDZuESB3YSXGz",
  "key8": "3Ne6UsTUhP1LsKiFbRvaQPQe5r2Qo66Kj7wAHZYiVtCmMMDdmuW2odhhWpYr9pb1aUhSdTQX94Qcf7b2PJuiW5Kq",
  "key9": "5XZixrnajfRV1f6GdqWM4ZKeeRiTxLnoEPmECzG7uoDSvWoUHmPuHwDgeRryfRoAPTw3Xhec12Jps8duteYMcX5P",
  "key10": "2hHttbBEsookPYpLFvau2rTjs5TVjL8Dy4nnsmNgzGuz7wEyWWy5pMKdyYJp7ogfXPY6mt4JGC5c94JtjrVHSLrS",
  "key11": "4mu5kw2Sze9oGn89oaiGaQ3ygixCGpBFBXcNuB9BtGdan6Cgq14oB1yFmTxZzDWMSAYnn1NBx9HQRpKxG1JyXFBq",
  "key12": "2v9bQ9yr7Urgxy2s3DkhH6DodHkm624J56TT2UiM4K76uAeSLQ61cDD9jUi1f8jFMxhuafw1prKxUDP2YzRZxcMB",
  "key13": "UxDHinVKSyF5eeBR7ra8ZH5kv57RT6L3MNcqLmJ6gzeTKX6KXUoDx3WW9YNxxrcBZUEctsffQVaMHtKPKuQ6TZN",
  "key14": "5RzsSj7Fg2EdAHN4UjtDbFFhCY6R15obLb1MsAWRTiVzdKoffhgsdyYpFTUC7yxELbyqvBcy8kswk7EE99LY99uo",
  "key15": "5Vs2AyEFi3bWoJssmq9BnVeR16ZYv1cJqdwsozFW6Rumk4wbDEodswKhBRdox1PMcDwhhG2bHvsSDhp1Xw2FDmgB",
  "key16": "59WUxnNxDc2UF42rnhacEn7CUDaXD4BBgN3FZMokyhowp6YNHQoDCDAJTsth6ecursbuzzuHm2DgLrBM3ozskQQT",
  "key17": "26pvG4z49biheV3JL7q1PQNFCFmJbn6Vp1PE2DccYMsh2yyiqev26MHo8Lb8wXeCe3jeSVqAUaniEhtjjJxsrQ41",
  "key18": "tuBtgVrcKEBQJaEnTvZH8cTi3o7x4vNu19ZrMyiLeCf4rYiq2dF3WAqP3vq42crWfh4zTy2RXa7gi3pxF6QyYcM",
  "key19": "4QN3P9ALZoBuU9Fb7Nf7MnMwFhs8FWLSu7WQD5x9doK6hj3M7APzkJvXra846dH5fTK5MFnG6MHP7kF5ZpUVCTcX",
  "key20": "5RRfktnMT4PFx3FrZhUzRDyqxAwLKzKdrjqjtoUM7uDBvqX4kpyFUmJEiyVjVJ8Q3kDQogKBmZY9uA6pTBXpakMn",
  "key21": "7ZvBeX46zY3YaPLstgdXC53xSwvAj3A3epsYki9kphpjPNhiEnHiPLoBym6mN8iLw2ky6Q7Kzec9E6EuuEdz2A3",
  "key22": "4fH9nhGi37fwPhrG9BmfT4mC6Xdvi1fgD3oLKc8qeFRdY7XosuEgmnkcy3TxVBu9hkgeBVd3BZ1J4gsjL42y4y1G",
  "key23": "2i69ibRKFtu2fxokk8yts3gHc7kCCtzQj4XKQau6br1ak7jpmz91ynuaE4RqRHtSv97MxY7RE7QFgy779mQMsXET",
  "key24": "2LHuCz7WZc7R6VcYBhTYJpsFuNDiSMWmTJpoLppPZ1xaXRsa4NDakVR3bXzVDrCS62gXxBLNtm5U81ja22RcWo6y",
  "key25": "3WhzhhQKF7UjXeGAq7EhfdfPtPXqHE8c8zvqYD8PEmkjmA9PPu8SwTMofZCJkJMWEeT2yaMQRyVsvahBueeNvm56",
  "key26": "ogoUPTo7sCKEUnoXjRtiLEDS3dDSxARDyRcMQ5br6Q5GJ8kgh5oQApRT15zxNaCiPzE4EV2tHBdDcHZiwsdUuX6",
  "key27": "49oif6gcAcyfFneM55LayTow8PV6KPmMxbwF4wyHfsoLtiyXdeE8oRVJvMpMZoD1RvBJcsC1i5QqRA1pniQCvjSS",
  "key28": "3yVq5ZZFvdTBwuUzvTWucCzEuz5uB8drNtv7fJzp4rstxr1RYqRQamUobQ93EAfw1p2Mq4CVKeWG78mwuTqGi1ip",
  "key29": "QfGKnXqVjr8qkZuuxjH2SWwDHjoLvb2sQSuLkmtdAMQUPo6HJDYriYVvuowxwBTEzeyjfEGdtAbBpNy8WttGSM9",
  "key30": "3YkKpniAHvGn99y32GCjGezihqcZKXeVdK3QoSvKeFuWGyNb2htd2EvSAJkiLAm7KyuyPaWHdwC5LiJph1utwXWd",
  "key31": "4Ecx2LfmR2xAFu3tJRvb5SEcL4571XXvrTxwrA8MwzagS8guxxuygtbSvoi3XkWh6QoU3HhecCSYFERUrXWfecSy",
  "key32": "59KdZ9SAT6GnxC1jpcWkxTjH53YJt5q2iR4EJV1p63XEegCRFciAPi2vFEUQLneLc9GA9SwqdAqbkrQMZpnLbrwr",
  "key33": "3bqgqERcbVNJ8SFbPxuR4Dx1THF6SUzx81JCWJ1nFtiKZ6UqSkjDPrKKCB7MC6gU4qBbJTh8vkLepDDNeojNp9Bt",
  "key34": "2vrmrNyojL8bwF7HxyN766V3HDVaQK7i55ADhD4bZg3rUHt4JnRfRNZv5HTVMjo3bwdac2qnRhCCKWjUfxoVxjwj",
  "key35": "4uqWKEjtXVMiAKrnw5zstZ7aG3tkQFRjfoXEwzLQU6uVppmFFibtt7Hfz6KBCXDivkwgQnhAmzpnf9adMgeehSKe",
  "key36": "3fCPp7zq2Wh6JN1rDesyLdGoKEoMoHnDHh7bmMJwBj16vKw6zyAuyL9PPatKZCbQUCMBTu3gNHTAShegsEK7oVzV",
  "key37": "2nZp3vPsSGvvTZHLFiSiPreo2h7Qu43ctmDUjRjYjgdN9Pj3e7q8L7b2EcrEdYANbN7s3bKzfRMchFt2kDZfM4kZ",
  "key38": "3smAC23eyLsK9L39VC6RbXdC2Rzer2jz7cMcnw21CM3d8KgRm7fAF489rMFyYMTZAosKQTxvLqvcCm98s4PHXdpa",
  "key39": "kGXrCvSeDLhAbVG7ZyCUrkwnsgT68pYC6ETJrm9X6kfxCJJ1b3GoNpTED5XP42abYKUrpugXMKLsqjoUsfNuF6n",
  "key40": "EA3KSg8dRKY4c95k9Cosjbt4KvUcc8n388mFZd6HSqzzTFLai6vuUQj21JJFMSv1U6wQyxjZSgRf1xiHXu5rgX7",
  "key41": "5t426Ym7EHfDn5GwVwEjM3tNHJVWkyY22XeQP86mVmNJsUuYrZfMX4JN6gnb3JCeDQKyKpqwoypqEpsHbQ1rx5fy",
  "key42": "3j19iBjtXT4cU6chtucmdYgAi5egwmeaNBP7TD3P6yVG783QTaJGHs5WZZGPGkitj4GkYXXricQ6WZTULn4cYFky",
  "key43": "2YSC1TbF1YpiCLTPbFHrnb1brz5k8ucebYVYwBZ22THaj93ty5hVcdurfQeNRKyopzD2qJdB8FPrL61J8xWpPCyr",
  "key44": "2GsAtnTa6KaqhPGquboX44UyhiYtuKmYtoWAszGNqffPoytVLwH5oCjDbngswYft1QdXDDqsTGLKjBxxBViZ9jpz",
  "key45": "2h7YXzKe8BKSZeB6G6saKsT25QM5DQrjuifAEYfqqn5Vv8SnecfQoJUQ7x9cWfGJmFVjZnywYeJCE5JT7B71XpgU",
  "key46": "3NaQbkaarCGXDSuzYi4b8gr9FzP7rzUyN6NS7KTRa4ZeR6rxZcnLxUbnL7NTM8srSAUj69qev1nVtbtF8MkBN3RB",
  "key47": "3r5mSSqMNzTJB5923oqRvZp6jX7ssbUt6BKNRA2DuFeqD838XLpm4474Rzq7n6kWMKjhdLoCBeogYLKzQZ61n9Sk",
  "key48": "4QjeJqWZhx5JfBGz2jYYhwnjHZM2kHaoFNy4YvfoeiYpdZS1VApy5uzqiHt2Ze8sG5pJm7H65bJKvN1hc4iaJZZf",
  "key49": "HwoJfFhSgZVmuZzpqbzdR8qhXiwszZpU7fUdLCc2yAaxFHG2SpJUjYcJL6F4GgsMFipcUsAij74kZzEun8n5Uzo"
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
