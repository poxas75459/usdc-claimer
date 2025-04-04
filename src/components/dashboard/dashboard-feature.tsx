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
    "ySwyn5DBhViLSWPC2hZfqhJkn4hsghsk1kGZGoBJmf7y4srb7qfHmzNbaV1Soq2wffZuLiXgpiBvbqJRt7V6cvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oj9HNUeZCaq6f9m7CRRvU5bkzh1RsWmZzaiKgPoAMQknw1mRpUKPZLx4ht5RKZqXtxYLVwLEpf1hjjKjzYsZn3r",
  "key1": "44vfw8u5Q797TSBGfUJj3nenycyCawqv5ukhg74wWwMjftmnfjodGM2p4sUACeLpsehq45TDL3TWtPv3HsZuwEyV",
  "key2": "2cep6kNi8wGARjZwQxEFhwzW3PW2uHxvx4H17hoYrjxt9zoCAmTzb9BYcZTM8VxSxJiBn7GFD3YsyMjwUr5adeyi",
  "key3": "4mPv6iX5uruvaq62tCkv7FkYDLcjcvUACcAQ3wZENkc2wiL7cw8nBPvFfkKTgNSAVzsgLAVuapvqX54QuSc9X11j",
  "key4": "22iBVM9zuMgQEKWvaXRXVmnYUMasmvq825vAe3sxg66j5yNAxiG5iR2EN95PNhXXDM8LwuYamWRPwfdezdhkdNvM",
  "key5": "515dftVM9LasFxr8H3H6vH6JzpURku4By88cGY4qsVunbDY9XgDfF84izGmXeq7b9KgfjpTUszoSKDCzNptDBRij",
  "key6": "53Zm2NWq3krWQHRwekNoUnxXHMeG5rexzrgoUGE9qb4FmYinzniKFjxeCUv2mTxzfUsFABaC2oMJGbVHcudJLrKf",
  "key7": "2ByhxHihfMwVViyTQwb5jmJE33m6EWM8gPNJzES3MSS9bvJ2u4Ei9cqbbzy6yYkyFFPRKZGsZX7GxPh7Sc8iXQug",
  "key8": "62wKVFoCNorQC71StXLymn4AjYR5e8yDyHSpi147mBGdfaCotZrMAYJh2qLhDSqXTJmVqaYaQ67gMmKi3a65Y7aj",
  "key9": "4WtKRt9gfkABxTw7KjjQVcMHiZH12cd8meGMQZCxnTrvnoBwJTU9MabJjRMub7oMZHHokJHm92RmX6sBgSoyudJ7",
  "key10": "4awBzu7KjbQFr2j2kT48JqmkBiWUxSQ5ebLuhQgd6DrecncJko9CntcoWA3EeFVQ86ag8hd3S7Z7VKXC74djcvZm",
  "key11": "2vYNXsyPZ5vjKEingUmVmiXK5uZvzK4SQPa5EvdMSGcpuSET9SzbPTgDGZP7rMDPiDJWsnJ9b7JcvsbsJs5WdkhW",
  "key12": "4ZS3BhPAJoTytr3uiMcARRnCENPT8g2itvzSHpLezKYmuUmALsYhgUU1HwsH8rx8MazAR8u24cJPBtG25tHx8cQf",
  "key13": "5RCWTvAuzxy1AkqmePsNhFFg9NNRqjmZczVLgMRco6xBExmH6t8yAeAkUHSzL3QFraecc7hBA6oifThTQ76N1NXQ",
  "key14": "51W2DLzksMXd3YEYisfoBrmeq8wka5ZiEYuUVse6bGAi9UaREXogNdLcBPfUa2mriT5kACQF1wTyeNsS4tw9GHoJ",
  "key15": "5spjqc1zt19ZCZHmqH6KZZrLwVGcDMrsmXDKqobJR79zUq6k2vkeNMN987YKC6hkobfPK4GhEPZFwG77mN4T7ifi",
  "key16": "2Gu9XpnRPfyjMjBHpVB5ZotSzxhfQipgksMe2qCPq4x8DZerhyTou7LoVyZAMXiy8pdoUfKJE63QQ1AY7qFAC2CP",
  "key17": "5j8GCArkZNapCQPyKEVuXdZ7pXABRQe4pVkPrweVuRPRMDt3uP4xsY1qvTomivNZko8CWderTQQDBUv1XcQQCP2",
  "key18": "iLuBcisYmcrpnj6hSgZLYGd7M7vGuhoAj78HpUAaimx1m2R6KEEUpTcq7qjPgMiqcCJeXwhzWc1Ae9UGoXciNHn",
  "key19": "Gx72JLxhwBd7s3iAPYhVXZiJmF7YwC91FaoHgxmFni9hEhBN3SpXoKu3vSWQXyLu8zxRUs2AekXekrpgw73kmJz",
  "key20": "2o9nyyTPybGvhTAzUc2bhyYuiQdjFyQN7kGRtGnornGoJzJj7opWTSV43CQz6f1gJA9mRXmjAurrdM1iDm5fbFii",
  "key21": "2wi6AXNWqgxHqxyVJ12qtS1nqtcXw24NZjk58RtboBirL9RLCD3xRgpfCSgw43U37B1JqmvEktt2h14GhRtyCHaP",
  "key22": "5g98eTkt41ZU8QgNc3yF6qpjFraszwS2ZewvNP5QpWPJ8DatsNbCDpbUk2KRbigUrhZEa1gSZVWS4xyYQoJ8p6gY",
  "key23": "5q7SnM9bakZ2pjwGntuqvb2e8UM3e2g243hKqk491no8ED3MmivsrvgDDXrhawnSRHFUfArPAijH2wTjoM6dxgQ2",
  "key24": "2UMks8FhhW4HAue1HftU49MypeCrymnG2BbznSKFWoeudt1yq98xvrEHEoEBygioDR7JHe6UUiSX9XFi3stjyjhC",
  "key25": "3UChSKANWdh4TAoKk8RzqPVRwPuc4hGmYPURTokQLTyc6RepoDdhNfmCWca8fKDewN9Q2MQeinVxHQ546nEAB9w7",
  "key26": "T1mVedbdmFqnU9vKcJnrqqx6ZyBB8LFugSePjjxfeSXJyeKhumwpbsZX6VFm1NmB2qFE3gjYUbzLm6AJnaCPcop",
  "key27": "4LepXXQQSAAmpQWzoTBPxNaQhuesfJTLhY69Ys241EZrgMJ8DnyEsVUEUCtm3dyVCYrLxK79UpYHCepy98tz1fgR",
  "key28": "67UTmJQpFng6Bc2DDrUqbdaoUM48kojG4ukp4jpsD78VR4SuFitpu43beBCaXUmTze37WFqexkbLqCFRpodXdZcB",
  "key29": "thqHeQmS5R4GG17qqTfhgUpnfcm8defnui1HughuU5wKU8vypQcPVpwFsjPCoXNDUnVZ1GBKCSWgUEgMnpUzAvq",
  "key30": "4qXT2pCGC42YAhKnqYGKMYa6qMD9JDNEgNbqYkVy5Ti3XLEHhvkyH9W6DWjuJwexqhYRPCf8r5A6EizW5akmoTim",
  "key31": "43kSgbXH3VknGUtzLuxqMevAY2XZcTPRZLTy8axC6ZDPDFZEyRaUXT9o9Y8iRniqBKpu7f545zTgFqMLzVPH8tmV",
  "key32": "3NnARTrZo8b7E6MH33LH7DR3NTTg97i5HskL6oZWGVftoMFjg8NBsoudzjDDrqWkfvHWa6BdCQosNYqXReyescFe",
  "key33": "3oxDSMyw2sFW8m6SDoAfGTUu71eR7GAqozZqAyyfBaEftxBwEcc6PMmH5xGFVU2PwsyikstP78Kgki7XZQKL9P5k",
  "key34": "4oRJ5CuCRoCRaJQxF2b9MF9hiML5Td9TXYJ9nPPW7WDimMF5GVWqp3kaueM9AQSGokKw8PJXm1qn3xHsmLT99QQ8"
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
