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
    "2TGSnxFDGiJ42SkL1xEXYJZPiuacxcegHQE1adh9GKwnCwCXxf2PT1Ck6kPnqTa1fs8duA1Qj14YmQzWbqXV56Zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34w9Dd19LxFpVoRiErY3bRiq6u3PZpp5bviiRjuxrwAiV2gWChWUe71MEAg7Zjvgmkc8DxQt8JKEySSTd9swYYX3",
  "key1": "3NgcUF5h2grakWZWJoSomXVZRMSResCm6iEheFZLdRo7Cyi5nT6swmwyD6bM6ra7DzCakA4Q6iHHLy233eTQNn7Z",
  "key2": "3DVjMHUQtHYH5JeHFkzKhRhktW3hFPsDTBJaAHdeNYQztaFRbwGRvrxQahX4UEESLFPGQ7s9m1kaPGS4vrR7shtp",
  "key3": "2Gvba1Bomv86BBx9ncBFecPWBEAnNPahyfaix7fqHwb7TtDqQiGWhYJUMMww8FAZpTXwpQVoBEgVYowEN1R3hFhJ",
  "key4": "39Ky2jxGGDhRaZPH99vMLho4xqC9zsrDeg1b4hnUy37vMT9QYundnUhKPMDYhL2J8UHcP31nwkbw5gCXWHSjeBoM",
  "key5": "2oQpP1Zq2V4W1Mg2vjMhWKB7ybjfcC3pCz5ovSmTcoRn2ihXSXw89Atp7dZRz2h4BVe2YLQVSFMWuTPLyrg3wGMZ",
  "key6": "32u1SrXYYZv5zbssv5kny5qz3ymfCGffUeZqcdyQSyniVHvknKuzgda26nQJsAWBPVUJz2XPbgPKrzr6hHgRrK9U",
  "key7": "4MWDCWZg17Qm1nxkhtfDZvNYAc7ENHpQRmvQGNCRLYvMCfcr4RaT1YveUq6QzU2Sd9pqhRQDp5zp3L91AUguotPz",
  "key8": "5ja8EmL1WsJRWWzYPJmQmB3oZgzoWUef8wEnpsD4jkKAWDUvFVqp4mYBjVpyLturWd1avJ6xLGjZ4xmxTKGVEf2Q",
  "key9": "3kT13ojrZy76b6ZtAz4ZHzFjXCG2JJfnkpeQrfkC97FVexL9ahiJujQDmUh19DsxswMLPz62c9bwqaNMrcn6Bekv",
  "key10": "33PDbXpLK4BULWZ5TksF7pkLoiWjPgmB8STtkkzQPBhKWxTfY6fU1yJyD3BC6CEL8WpWGBRFJS3jSrp8ywHpCYTF",
  "key11": "2bRZFNciPxRrBTsPLaNN6pBX35vzjvDpbsZhzFVeH88LTP2d9FaxonSeCXpVVNMSrx1MqgFMNTb2sKLBegH4sdAE",
  "key12": "jpycHC8Y1VpNk6Wxrg79JxQXaGJwLF4qfLvhGJdN9SNiRp8UcHjX67GcRrmEHEKjMZ7Ugb56Z2j2mXeRitMB39d",
  "key13": "2iZ1zBAJujhefkKwnCDai9UcAbxou6FJRdyLLAMkpS7fKtMqhk3QTgVTVJ5MmanuMRPZEiftRszP5UZxhq4WkeG8",
  "key14": "KcyMyDBp11wBi9m8jA9yAkY5yx8YcKxnd88BpcMnVzU23erVhkn5giEmstG27HBRuZTuWEuw4nTsrU1bDdKFU5F",
  "key15": "3CFdrw5JHeEXGqKYAGbd1AyFPrjtLBsb924syEGgKv8izTSaJccHHYHSc5NbyC3L2MkL5MktmwSAjGssgBa4dc6B",
  "key16": "3FYxfbdtkM4bn4XD7yRcCNSph2Nmh5iWNhcvooryBpYxgPR9KLmnMEqMh6aXhMaoBpdh2mNpxhxLSJw2EHBesXyw",
  "key17": "3FJNi5ygBm4w5yYPhc7Sjcb2z4pA2EeXa4bPR6qiFre8BMyAYzgiBSxsUvz8CU17NYVG12jj75AfURC1Z2LqeYXb",
  "key18": "AiqAa7oRWZvBmP9fm6ivqFAZxmwa6HncUmDhDAqjhE4csQMpg2KZw1ZTi3jwdVJ598saNC7LC1bijvgeKa6qkCu",
  "key19": "5Yn2toX3jXXqqdLK9imEqUEgdNmewoXpVCTsHbK5ypjSzzRV5EXETqtAkrnrS9gQ4aWJD4GKVv8djyC1XHN5g1DL",
  "key20": "39EHsGD4vfMbRxvHhWTunLQNbAGJWx1tKuf5VNTeyASfMoVEKr9sQXMzcQTCFigDRg35krgum8ptsg8ccwKTw3nM",
  "key21": "4MPyrqKbz7fjUkToS7FVsHfCKAPBJ9QykiSc1qk6XJjhbiSsdMeDYr8hwrZg8JhQE4QWXo5mtXQ7RY3V9AUV9tW5",
  "key22": "2uk98FY5TWur9enAbpDy7mYrmT62bWkS9VpNZx9xhrt6KbG9tiFbSYg9eG8JLd8SfFSVbhHosPU8hNY494RB5xkZ",
  "key23": "XarJnNnirfAxgLYnYwf3ZZJJAiKUQt6MbiHSKYf4HHFpN2cVJTYHzudoXgEuN5zWBJJMSbQnr2MTf958im4A4Ra",
  "key24": "4E5TH3avy9uAxRbsPyZaKZFR7ugfq81fAWE1shfiee4CxTxnCRzxcqiYiSQ2jWHZWvwKovY78trqVrR6Rfv2PeCS",
  "key25": "399GHL6BaZKLUZLE91HKXVve122UGyeW5vtSjUFXFqEQoUDAqRrebtpikmkndiM9Q8cdAGaWcJYraQ4m8HPidkCV",
  "key26": "RdWMLR3gCZMBVfPbKeSBqGkFe3juZF8AwGNEp9n69oHGg1cDfTFz4az1AtW3DyNnwuyAChiyVx4y2KB8NtsANek",
  "key27": "4P4nwsKgboWtbUQuBnHCrATRg2x2FqJgDqj8iXwnzpRNDe8rxizD1wLeZaiC23T66Jaj6D96c2RBSEvv8rwv5hXn",
  "key28": "2nmNT3b8Pf2i58pPRWy92Cc5xznDmTdtoMeLExKkxVPGHaMLrDRDkjrTwEGHBNsKqBgTHUtUn2bmrpXfxw7vC5Ut",
  "key29": "g4wo6NwkzQ9qb4hSFdykXcvaYYngZMxqkfbe3JM4hzhNQjfFFJquaTGvHHh3ctNodm7WnEXT6tWYe6AZSPWYn4P",
  "key30": "67QSeVCup51QVaimiTU8hon1zuQD1H2tJPvdvCwwmCHC3dtz4xBvfqcXFaxcv5UYa9QH5SEYjm1QKzuKshj688bM",
  "key31": "4HouZ8SFw6BcN19z7pFf6SXds4VbxvZ1KkkCofV6nfyqnkzUcE1STrJGqHHJH3nJeiQ3eMqmPjiUXpSCPf2UjM1Q",
  "key32": "3Mx5gXP2dqDC4yogd3D2a7hPQBxiCGdFhRVg1qzEKawQe5t4En6HwtBejMLT8FA3CTRKGz2xwEwb4YbyBFtzAr5W",
  "key33": "hqwz3nJNJyhDpsQs92DCvEWLZRwVJmZhZ2cbhYrtS773BnszD5eu4wiXHxaWK3AY9dkyYnobAjbKqWavMz9VSqc",
  "key34": "48HS81DDBc7XvAkDNkywqvnL1aLuymCDLq48PeW2DVmCFGzDepNWGewaNQwvJ2CWy7i5FTH1TzdsCFRCqa3faMdn",
  "key35": "MFNE4QgpuiixTV6gN7dVeEkqKZcBGSqnsNHNqqQirXQY9mbcDc6qZVprZT6a99N99GghLrYbzKCm4NWAnf4ZczA",
  "key36": "5tuchEJaSuYYW1JJ48xjsCqHEGJx7J4Q7MYNxjqgC7JaQKrj1PJtY3ziciaBkcxsG7J6TmVVKAPGr669TdwmXaMo",
  "key37": "35MxrrsbQsyNzZD3NU6uN4mCgiHDYQbWWTe47D5yT5qJhFwc7t4NfdTrdmeMfgHuXTXzFQzUSMTUAGRzpYyFiNq2",
  "key38": "4bhh3PtknmKfPpuurHHh4v7nLWHiRApMK4ezZnWDW3r6MJSwM8jA7kj83qEJh4uedq9ZDtiRnSKzRNRqqSfLiNZd",
  "key39": "4v9jUT7QFPmLoQcmcjSJRdXE9Ax1xRZgJEVnXTuoQ2XQkkw6K5XFXwRHgTcWqhz8d9kMeZkhBx5R3bmLAPUqE3Ra",
  "key40": "2QvZrw81VCJz4a3XgZTZ2bjwm7rn2EHBx3YtfUENZgTtZDjYL2PLzMjB2TFRvBbcK2AxMnkHMrDJ1QPvobPn5NQf",
  "key41": "2Z7mrF4MuNxqRtTMtWB9D9wRkjUZaHrBdps6sSfmcshChgC7qCLtrwK3axmExJfGXZGPmr3vyqXx4CJ3QntyHnyC",
  "key42": "23CGLWYNKMRuzEqWq51b6VYF9aJDDCDnoxe4FFaW8Xk7RfjGYhHGTDHmYZpje19yfJPDjc53ifq8FWYTHbbXueQG",
  "key43": "QQAGS2GH7Ucmkg9ed8DnghyJfgWQUU7LaMwRPKBfpgcpzneY3oLLYrkwoNMnd25q7PqKLsoPFBYEpMGqPChgTMG",
  "key44": "pzPzGASBkMisr2cBkrBCD2kMs6HJijgtbYq4fXCcixJ6aTdDASY2HJv5hnL3Cwb5i7kYeRoptjyvWzNP5MbwuxG",
  "key45": "5YW31RV6wrKwGbvPh1o7Y18LtttvKC8nHtBJJTz9hC4f2dcm8iYtX99CwAuB181QJVjeDVHUeRNHGGtaPgPWgDST"
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
