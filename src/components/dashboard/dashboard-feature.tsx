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
    "2qvzVeiWs6ea3BnKehmkpRnPd87A2xmBmWg36kC9MzJfpVLw7PW3hGTM5rBBE7X4rC378B31tmJVuFdKT6av9QmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAwRL9jbjvaYkh4KbpHj8XznjN1eWQX2GRoWAxvJHRbAyo85oU9UJPEzWEka4vQKtx14BuKXr9NeEmfgD4XTPt9",
  "key1": "4M4jUKwQbkNzVcWsZcUUuDtvapiPhgCHuaeH7G1xBDFAFEHH3BiN8VhXC5CdSQB4YGYVAJzmHWtrz5C1u4XGmre1",
  "key2": "3rtFMNXHPrzNWjFipWo3TTNvRGrtAzBg9g2HJNLmZ9FZ2PHvjcbxNsMcgqScDSEWVQS6URCULpur11jp3RvZtrVV",
  "key3": "jc21dq3iqRLuCcou7MkHaKthSnZVHZCKoZvSn6e5YrcW1cdNMi4NkR5CFfcyaVw8pxH7pjDfKoaFGYfA5XofgDa",
  "key4": "3rBfFxao4xzoJ7VGTTZgfyj3rh51XPtGXSkRxpTvaBiKpWJXiPKJ71e1Z668V7ZkfraeUuKfuUizCXEBXmy83rSq",
  "key5": "2615UgP7mxpJxpunwwvVKXJpxoPeT3yGxoQWHNC8aPXJ33Jtzpev3WFBrbpsRQo8rvPKwZ5EX9e2GaUpF6zL4hU9",
  "key6": "5od45NoFttsSwAyWvRPBD8ec2F2dANedDJk3hc8iLxTfz1VAwMQynybDhS1BVXuf5jRmm728KdCEEhTeE8oDJGkN",
  "key7": "5SHUeYme9RvVraT4TqcoMt2q9PW3MWW1Zkd3VtpJ9Z4wycn3qUHdGchD84BsZhS6AyUVYXkBUazatomMunRKGgGd",
  "key8": "4DrrBaPazhexMHYyhjvMrgSfskzf6GJti8ZVjBX3QpPZT8BULgYf4g8YWS1wckJW24Ft43rgefczHja9TqxrVEYK",
  "key9": "2qh6W9foxDvmaBA6aftna8iSPAHV7BHTSuSstRTNgtYpCW18FAVRM8G9YoNsH4nEsiA5TmoX2PjFzr9ozyAxgKKg",
  "key10": "jQjevXhm7QEKFHQFRg5KsW6WKV5tw1KwYKoAAECJdMhs3Yqrn2moQpwPXsLjUKJDJp9CaiFb88SqS9ER95mZvv3",
  "key11": "4jQQkJRenrpoZVMANKUpQCgGL1a7w21KydtNzw9oJpjFj666Lmm1fsViLmECCDLUkneAzk1PbyXhujGjFEFaFrvk",
  "key12": "5aC2GW4AvEYKGoubKYeEJPFDdwCSgYJs7SUKHtUHntJQd56RAuBvWc8Cwg9VhgpuHnX7AymfwFYmNr8jimVcA4m4",
  "key13": "4ZucFUgi3Bp5McfqFW91eAjDXBuJswDkhrDiySG5hdbHAmecLDh6GUmr6DDGUzdtkazcWU3CC8V7EQNWXasEsD5D",
  "key14": "ezVd9otNyiWeXeRu3L54wFUjVxf6AjaKt9Y1QoxPomMNN4WSQyVPwxqj42v7ViLP3ypcS23Abm7zRPDFF8goQbv",
  "key15": "Fa5BxPw2AK436bwqDvSj7LaZDQ13krRmCxC8AEYVsrYwNqWAZSFWbMK15Vs85TYMAaM45ypr3HAmMr5gcR9hVoL",
  "key16": "58khsV46JgcD6VK43g2NzUGq6ULSzXkYtdMEqwRxu2ejEq5NPf6AZ7zmMqXLRFd1HPg6zk955qNQzvJQb39vf629",
  "key17": "49PtAiwEFcXCFZP46YV2gMLjQ8EjXkqx2JRxazbaUa4v22GFNKi2m98N3jPq6kFhKsck7NF3iKiZk6qBhaPmJhYg",
  "key18": "2DUX5ZDaJMHFscWUVwhX24NbkY1Dx1nYQydUuEiA3xFva6q7iEKgnq21HmvY8YcHsjDGEdKVava49ABbJZKs83wj",
  "key19": "51mLrcaZjo2yXPQeasWrqYsab51P5oz9EAhVgacSQjY7LPzci59RpPyN2PezLqVp7qmCrcuPw9izsCF1qoxJmyzL",
  "key20": "3KGYDHrLAJAr3MvNzXPGZW1CL5wPXeT4mciP27Bfym74TB3HZXBBEePYDmUUjjgxxEmEda9gAWWmUi3cfE3kXA3r",
  "key21": "27PNYaezW1TQJkWCUvpPw6QwKHSaqD8A8Vue7DvWg3uQGuaaYmyZiv5SL4XfTfLWMWGcfh8CM4ZNgtVouN3qjwC3",
  "key22": "4zQHdSTFpcrSKPoPFL9PmCuRcXgbXXbi5mj1jkqmdqAjhiRxwf6LDd38W6fptczKjTjAoMhjQE4GsoApG2yKC3gp",
  "key23": "3xUDDXDKn6ueDEExkPgypbBzFdCYZZkqaGgHo5FFq1x7TPtnGvws39ybrd6Xa7LY7m6BmaqCcgtTe4zDkqcwC9JY",
  "key24": "29d7SSZgn9sPYHh3soGnHj5quWabPiLGgpaA2Eqo7T6PpRLG4dBuNxsxaoN8ZbR3UF8pVJnCMsvcGr6Zt4X16Wbb",
  "key25": "24TZQ1qzy91KQpRjv77b4KJxVn6yPxTQ32fTQNbnjKhGo9PAWGytXayzUnEx8itCQ3LNYRnQNX7QLpfjf2uJYDF5",
  "key26": "4BUCwyaSQJGb1bhB7JNrmxooCAaNtgKTDFtDcokWwcrZxwG5mAvRTTbz3HGuHMPEk2jHWN5aCR1zgLS6EXP3qek4",
  "key27": "66N2PruAdMsrty4QgT5EQytFgcx5R3tm6g3i6GnRj1wbhqvp4zXQ4HY7NnMEyTvGArcdgh5YsaWRp1uB8EWav9LY",
  "key28": "2CrXfS87dE41HSXK3Ed8EZKgUFfpAk8iNyb5Pd9933D7xapxaJ7A3YFVj5r6RfqknBCrBaqPeyawDCFtwNmhFcPS",
  "key29": "67iiWJfubx5b3jmRhpMQEuAhebTLGd3AnoLnL3D3GxWdzJwTTgf1roBhErv6A8fZUrWYTfJsKqmhjeBQNV7Yh6UT",
  "key30": "3v8bv1ixFZMrnhHLNwekExWyBEhRSoa2M2TV7je2Zh51LUhRqWrjjHPyXeZGtbe6jPztGfpHdyZA216dYbXhSYWK",
  "key31": "2r1vcqJ14TPDM2yAS8otgt4HWvWoSrpaoDfeZmK3AnFoiQLtBrms3YeipdyNqSEa3JJfqsACeNYzPC3MBrhjvZcd",
  "key32": "XttpYcF6xWymkE1oj4VSckLoPWxAWfkXRU1LaaPZ8R31w3EcwrJViyAcD1aEV9TKwTBcQkfWo9s6JqTPf5VxxSL",
  "key33": "kZciUkiUtn7XZdJbrYNzdMmVmy1jUS4VABcDCaKEyyzZQ4cV2drgFwCTdVcwo1NRmeV8ctfU6NYgZJA9R7DYBjW",
  "key34": "3x2AvFEAHeFBXmtvorQ99dMPXzToEHiwXeA5VhSTcKXN3Ny9g9jh27H1PJb5pU6mcijoXXhb8Fb4BijHRhyNBS7A",
  "key35": "4JWQCDBDF9zbkSSWThQgfSMKc8PY8BtNFf4t64vsWLMPshK9N6d41TYwj3289tF6GCFqeMVMSZYFMsqdZGDmTY1Q",
  "key36": "7NKinACYUTfjNaLwmdhZxtmMmZGXXLkb9ncA9hzeoAFYFDMfvmDiUFdw7KQpBSS9qY5A7zoxLADEvjm1Rvctj3e",
  "key37": "4WDWf3napPwSX7MXruRorskiGKnjL9wrfxFn1uqHgyBn3Qgpj37ZopqMQRe2dRMEWh9MNNTBGrFbU71VvFBGj9h5",
  "key38": "4fwrNDA9sAq1rno68dTLyiuMDr4V3wdQUqHQ9qHHtfzZEKHy74tig6Rjj6vSfHEZcaKiP8cZXPyr1NGRmmTBr9dk",
  "key39": "3vZXSpDBaHPAGEPwV9obmMmsBwVQWm7Nh9Wjw5fhxzG5qH5LYBdPq2BMeegQF8KPxMBxZqfSk7BcwaaHLSEuCea3",
  "key40": "4gzCUszJ82ktZQk4wFGHyYLETTCtXAjrt9k6wF2r5vm1fV24yDXwnqp29e76g6nX1Z5RZaNLveZZ2x9CoxsWjs6U",
  "key41": "t2UG6GxqFgGaaq9AN6fEp8FFbZinLwHUshd6Zm2BCd74Yhp4YKkAeDDn2T2urS6GDroKJW8dDJqGcDkTWf6GVA9",
  "key42": "4EkXkLpRyXrrNsLgHhV1SFs9wKd8oAbpq5xcR61bmD8sg21SyedmrnnfcwcURTrC2eCLZP7DNDQTcoawrJBEjKii",
  "key43": "4gPxroJZ13Ss5CCCNVEp5U1nRmYdvSjE2PPDCfwUdyGo8vTmFnVv8519ZUVwA6qUP8MmNrwoJ9q5Daoswx732t8x",
  "key44": "4oxScsDcMqjRhQbFeK88FDDdp7Rw8qc5jLJYJhAQ4wYE8Aj34ZEoSryiAchmoHPoJDy6QFUGo6btb5Ve9fQ1mY9",
  "key45": "4uxYojzQJ12W9MeR8YbgutEdWYeMLvMGzpBo2vzZ86GsoRHNJbDJaTaDhCFtrvM5bfGqryfRCon8AVdTXen1bM9Z",
  "key46": "47P3FwaB2e8qNdh9RNC5xhPujVfk4NNBKswMo688vxF4JyDDR7Q2WU9BCcrgi2CGmRDjLWoxVZVf95Uh3r8HK4tC",
  "key47": "2e6rw12u5gbNbjCp12bGsZazTPNjzD31DLZw7gVx9m3uEX3QBJBm9RRdEfg2tBUncuyT2CptCPzn7kNymu1kJSuW"
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
