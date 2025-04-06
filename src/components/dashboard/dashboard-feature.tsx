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
    "3L6Sjq4j2mYDbrZxoFkaUDHDvXuGnjeQyhRBqYUBC6NAoVYFdBqT4V2SW5aYZ2wTGPhsvhxDM89keANC2mwFWgLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DRZvJhUu9PzTCxPMafhKak61nsWzkkbpjLqYDLCb2e9V1P6cFHzYB9FkWDkoFiLu2sRwRvLwVaSLoxv2Cv5Ak5v",
  "key1": "3F7q41tEmcwFFPCgRGAJLxyyVEVwtkLkfoW7fzCQnvjqsRxjZrpuKfFDWueVfVDw8i6DX1hynwhUPi5cKAqEAW6i",
  "key2": "4cVK2oQ98v1ypexAsZJkeC7fh476tyBb3ojRcXi2Sz6MTGdti9A4DHezZ56uvoohjL7BS82oGy9xRDAVKb6pTTXr",
  "key3": "2rwuPBcuUrsj8UUrZxDC3QxJ3EaA5B2NpkStySVrZUdaayPSr6EUf9Rzmge9CAm2TbZS4Ed1zNsY5MfzFxcjqBzL",
  "key4": "5HgU8SGAY4yJWNs3WHDxQdTc3iK2PRSSUZsDk78ANp1LrZLatRPh7TcjrPD7DwymaZUm94yD5h3SpWAhuhbNJci8",
  "key5": "43BnWYnHFjJC343oeJJREUYj7S1cG9ChfkczotP2mQyS9wAfPr1f89hLJ17gvLneZwn81H2rCdcWsvChytXDM7pm",
  "key6": "5ESCHHX6D1ZLQtmWedWkNiRotwRimBZ5i6Pt3zJADTb6H1qHWHjsY6FLUAMwhBFk7BuPjDABuWRbmXHuWaKZb1CT",
  "key7": "3NxCBDny51rK468m2jj38GZBEonjVWEUiL4XW2KggYf1qkoqSXiPVNW3wstBXRMDE5c6myjrBT5HPhQ92Zk3D9ZE",
  "key8": "2JayPaJ53vTqfAfHatoJyEBvBFHdhx86fCfsrB14STJ44rVbLEpaX2szQ8xWzaTv99evsFtjApkGvYHLY2L9JhQH",
  "key9": "WM9WsNaWS9cvR7TJb6thx22o9Akn5BdSY4MUQZ5Sa9ayaBYFVeKvbwgpj6RQ1SmuUFRScFGYNJvH9dUum3dMZkx",
  "key10": "85f6W8cLMfCPXL7yE2qaozL6Gxdf6BjZQmVo32kXW76LFpNnqFBPpLkoemeN1sejcS1xSnyrahTTPk8KxNyALmf",
  "key11": "4K6N3fbUXR73NYaESayyJN97pBzDMKKTrbnLNAH6WQn6N5M7b6md72RNCtQivZUeGJ92k3N4JHP1MY8BA9K49yjE",
  "key12": "zKUcuqkWGZpiLjqrAQ3xUq4QvKzA3enYuBHrJHF5YxXT3aupcf9ZykR8P1DsFiVwmU99h3Rv82nkmSY8q5hXW77",
  "key13": "2tdtF5xcgRr1rLi9sMdX1qzNBuZqtr2TJiz2sLibxP8W6DcPNKb6Uz1PsHZ756cjfbKSLVfbVkdeRmGQ6NyV2eHJ",
  "key14": "AucWq6Ehk7c5vQeHMuV34xX2cP3KRkaYRZBziX6P4N4659QYZVgxe9QtYWj7mZPcvsL2bx5XbKZ8NWy9Rh9wiPg",
  "key15": "3qPWjKrq6j8SSYzmKZT5ACREUPSS7s5mU9HWzwMQkF8XmxhnUYWGY6AXj4VqYZ4oK4j8XrLa6NNa8tDyv6FqjZJF",
  "key16": "2zDkmfkavepndwZCuSEA1S5CLFuFjBhrRnjtAyYdzW4afQUEafMb4vEq73CP6jpSAcgujRv8AJEm2LASL4FTFaaB",
  "key17": "5ZLmwJC67u9ePjjRQzrqgRe9mgbsQn8CmNCgN63ZCduN1wTJ1ZXuXqHJo7sAFHsZ85RFruVX1ahMNw8399iGohQL",
  "key18": "5xn7ogH267Qr77V2vnL97j3SypN1P5epaSjyKYGnPrKLup82ffNuV2p7azG8fofHJqE7drPm391e8K86fLvFJPBL",
  "key19": "f4iALrgPEiFiFXd6weGTNphTPy9jpQkhvG4aShzJef87mhT1BBxCQGsiv3kqsM48cCqav2dpU4fYgp92BJGZ9KN",
  "key20": "fsqvML1XzknNbFSwTCnrEkZ9ebvuTxs4f4jfpYaJZ9gkS3Bc8pyAFu2j9GtwJvLudCbFFnjEzxZCYAUqNhaHiLq",
  "key21": "33SNDvXRdqbGzD1ucDpY3zqiyihjA1bPFbb29ub3fQknxCxcovjAw8zk8FmQfwGHFJ9VeG9rcLjuherdS1QKARYg",
  "key22": "2zTfQLkvArJtYWMspuHGUMjyDyXUfudBh5PTuJ2ZxCk4D9c729sjZrW1Kj589uWN1yGBeqbk5dDQuCV5iWHSJrw6",
  "key23": "25aoCwZ7LouKcejfiUSgMLyDwS59fVKRNkvNchcSHkVxMsLCkzv8xd48CtpfcpSJbHTxoSvUXghqvXSC9XiWrZ31",
  "key24": "nfXsV3re2Qd8mevHgMdCk6jUfDmtUYcyPWzCKwUWSUFDnQrXD4YvTanjVeE7GGoX6TBzrmuDoCAmHzm1zSw3kb2",
  "key25": "5WwfZmy2NG1URVHtTnddhbkJothhwy9Y6mjkYyUPnJSpfWkmwp1dUQAN4FnKsbDaUxKtXKWWJxidFarCUo232FPw",
  "key26": "5sYQtvjfEpCB5UhmLSMwUSCs8vhjWuAzo2GxVKp9AUWriJYqrEnjHkdGzih33vypAtMcV1b19LSqunAvusg9WqBZ",
  "key27": "2RPFwscHBxHMr8cWWhNQk37RXkdYP3fmqzDyGTok7XYVUSktbZSBKJ3xDNsEA43VSy7TnSaHqQoedJxnSR4rZ2qH"
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
