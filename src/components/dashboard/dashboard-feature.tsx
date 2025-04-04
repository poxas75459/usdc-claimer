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
    "kMgwBuijeKC27DLy1Jbwjq94Fq6Pfpcb2BQz5nF1CdTSgwvKoGHSGJuHwMt3shgsTNhXZGYPQPkB1PcjWgioA5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fsYeX1tgcxeMNE8oAq4srAmpBFrWadznBcpSAjdyrB1m7fMG9PJUaKj9rBAgrjZ2zVcQCWBDS89ek1sYCdpx5RB",
  "key1": "3z6Hdctc2TwDokQaheMPdpisQ39gqwxjW3XRnK8U6opSvzun75hmsYVTNV1wow82sCnLkrRgwxE1XyVCrmRybAVJ",
  "key2": "4qKDByuZiU7q4uzbfbr14rVs76Kjd8cosvUpAv1pmf6djDg7rbt5iUYURCaB2Z98G2V9NPtu2E4t8LNPUkstDMBw",
  "key3": "4wPfh52pcWLRY3JK88oaQYCtMbQ84pZnLiX6EKiD2Y13K76gBNfWhf2LEpEvyxYQnFCWRQnRDd2iCxBAUidNCQF",
  "key4": "32AZDvJb17a2GChUhmUbNVeikRy23hwBRm3wLgJBq1WqzGG3pyHyDPKiHpcMCnxMVfmYRcGBgxYAgifBRJXzf7xh",
  "key5": "4pqf4nLjXqcGRgV9R3XWjABSyAswBmGue7dWLNfFYV9KVbNmyUa8xbPwAXn4vjuDABbhPVtwBqSX7hueoEjwnR1o",
  "key6": "wZLthPHQ7XvpKxQ1DFaPSTnUUesSR6gMGE55RLmZY93yAnGWQUFUabHmpFstam1iMnVB92itCKeynesWJ5j6Gew",
  "key7": "sTexfKvyhs9FNZBZj4zyYGbTvjWiAbyMQYcSwj4Q2rUvC7QKJyM4AuyxooLx6nAUFg1AeLTonnxVH1emSa7WXGf",
  "key8": "2hLqTTrVeZVgAYZdB43BK3Lirk7QPny84kNX2uZJy3bRQjCA9uGTPr4dPgZCx8KQMDPASYVZfwqMkS1GjBfJF6G",
  "key9": "3KVnEqidq9zNq6Ld8tDbVDo7TEhsh4mg4iU5xoGHsedS368QMzEQKFN1wWn5prZvsBSt8CRx8dqG79xPfMctuF1F",
  "key10": "hva3yK3atgwdHC7mg5TCLyUdbDT9RH8DT5mXqTtF72Zr1LmmyJXaoe3NmdahDhcERH3exgZauvSp95564yPZ7az",
  "key11": "4XGq5n82EzsY1HMa9TMqtL1j6Z7uA6imxYqBikxxSoeMtkqt8d8ZNUfVAe6bjQGeHhQPpF61foEKBKijQYo4fsXh",
  "key12": "sMxp4KziqSqHfJkxKNQQdGUDXKJ96XYGKTLMUbuehaSiJhZhrFB63U1pQCx6miafuqWAxn5xX9AevFF7TAb1LQS",
  "key13": "4oVN1LGQVwiRKnvFpPKzE2aP3NFuWEzvUxZ3zH278BzAKkCnhfCpZJ3UGzTEZWYEmSKxZFqtZtGGD8wQ32bgx4Fk",
  "key14": "5gvKtEb9DY7JqRGdq8yR4k3KTEPxCyyG78x51yNY1XTyMaKcYwLEf1kDxAoMaa2A5oBwrLMrjzRUY9coMUfdMe2D",
  "key15": "4m3Tigv9beFiBuczq4gEvP9ywiqRCoA11F4rmptBYMU8o9kBd1GAnGQLpPz23obCM3LSXxYhKXVV9p6hq7oUGXKv",
  "key16": "3v1wMrZWqVYVWivBqbGFHggfzcs1nnaXLerM2Y4fMbRMF75cjYzxocvPcxJDojurmckf7aCJeK4qySCM8fXuCQtA",
  "key17": "5oxBrwShhhTd1vUUNK1RKQBx8bz1CyKZ8dabJsL7KwfsoAA8hGgZGLTXtExB5LLVXwhKuQ5QQwFEFx8yf3uG11ud",
  "key18": "3yvZLWuFXMjMpaaAWk7ab7Rw7wpAb59ExgZz1H5xfZcUahKdnez3TdDQGLeMgvBFmtw4dpu2AcsZdjpDMAUrTfgE",
  "key19": "3L5iwRHBY1x8nRXeYThirLbx9BzGx4tLNqhoMseXoZ9i96oWsKt8rfFie9GKUgXEnxvoBR1RXk64JA3urMnN3iQT",
  "key20": "2Q3hdxcViKVir9rHrQ3SRpNP6rtPcM79FnGywEtgiQopnsgJNsBi3d8g6vv3uFksR2ssEzazeC4qcgsCfopBKHCo",
  "key21": "4JFFqfUVcHR84dncE5xevfEc4P4f9bqqhZ7ZEv7JSkcJuNF3ctVDhdHVJXfe2gWMSjrR4av6UAHpDKw1UhEZgvee",
  "key22": "NvLuNX3WaCh8tkd18seYYmAjBkE5hpDnutg5k3ufwMU4UTeDVYfmeTugEUs4jmLdGjf9zXsytUFjDkCUR1VRNVQ",
  "key23": "4388iSqCzZnmpY7y3LGkpgjfidvdXrCACo5b38m8aXCGDMog2Bd7MJ8t67VXncBR7gAESAHXvWVFkQtXc4EXM16w",
  "key24": "4s2BPTcJSbwAyyVxepMbUzx2oCje259qKkFF56KB7guqS9iStdx4nyGJe3x1nyESJzGRRuyTP8Et3tiZ6NLPU5mq",
  "key25": "LAKtUXwCsbFiz54Wr7aNfGG3qjEjw9fLeacbvZpuPoZduoNuZQtvnnRoPYHYjj9BkL1bDLfeo5ZTUCsqRhtCWa6",
  "key26": "5xWmHv4DMRv9A1mTiUepisNNgHQcRY5xAquGizGQrm8tKVYPE5mvJWMj1z9vzMyzv6aPZWHAKRXSB6bG2WphKCXJ",
  "key27": "4JvhhwDkZe5fkpxLVxcmEtXKszjnexU1WEuvbH6JjFHnFH3UGnEW1xafS5kN6WzevZCHMa5wYgKCRLe5va6KasSC",
  "key28": "gunRB8FdhoRRG27wYXcM9bLg8bBMWsvs1Js7ZmddL4K4QG9LAMYcA4TFE9mc1uh9XkAH4psuTHb15RkRR42bz8r",
  "key29": "3ciWjNcZAZYP3NB465vTezbLqW5QGj9fR22drAuXRc9EqgXbeAz7wkn2BuFjkUqDFpa1J9d7BneKMvEBP5Goc7og",
  "key30": "2MeUr1N7KJdjBCZoUgFiyV2qnJqpXCTvnGaMKbV3dESJyHQXR7Mp9uXexgGKzFs6azfceZZhVJxSNT1H2LE7bbPT",
  "key31": "aZSFhhzfBzLd5eiYaAWG5WTDAJ8nW5aa9FyEKUERp9Fb7eaBEi2wo25UrkH6KNHsGZVhowHSYRwyT38yEi2Qudd",
  "key32": "2cqvNvcpfRFEFsqyjC169QjsQRekPYeGgaxgWrLzitmgBAsbEJRBmVUMGH4v2kmzr2CZFbosXs8BsvvSd79vYWSb",
  "key33": "3A927BTp4FMcaX5pdoCBXurtmPFVgc3HdwRwqxq7SPxT3g9wYmKosYMgR4KWazz2nMe1tdHbKUm5hVsQ6A7iBP92"
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
