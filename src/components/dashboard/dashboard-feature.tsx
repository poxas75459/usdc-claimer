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
    "49hx3LNbSu7wELV4sSL3zSerjVwiQ1FQg23DuQ9L2YPnF5FCHkgmNtwgf8Tu97fWetgCHe596LDEjyhsnVdFeFzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DFH7PUCXy7J1z3HQQzirnimXbSv9QqtfJw3FzX1GLG5Gr22A1FRCCPSHLU3KjeL5SC7UJYUuWRLgiDn97VhWx4t",
  "key1": "4in2DejBMzakqLMNa8W9qbEyZ78Qkd666tmTM8uvbrE2uHRLDA1qwC3fsfx8j927NFQBVvEfg5ANApwNuzgAKv7o",
  "key2": "4AoUi8UAdmb6YYD3L3BMqEHiiPFLzePTuxGL6BL6w34LYutq6a9LXCRNufCweNybjNpJQxchtt5zur3TMeEiXW9r",
  "key3": "b85LNF7MD2H33xTtBC53wmT6vishwFr1t78fyjV4W3qTzMebcZh8LxRoWPVUVfmDKbycW3SbYwEQknFu4QFEyLK",
  "key4": "2ve4BCR9dvzTrb9iRqg3JQNNtSJMqZVHjouHeB93krr44aF5LXe6CjmPXzmBqXd9apQSY1BrFaeecqFCPpSd5xYd",
  "key5": "YvLpa27G3wtDwTmxcaP1MxALpsj6USMir7d6ZcFdrwKPmL3cdg2UQ2yhKHj3Lzo8ghSnDnuik6gq84zBCkydukc",
  "key6": "3NGt8zK1zt2CbSLzCWo4FncXUpnzPha6iXsbtpo1Q18jCg8ZfDDKoNSR8jKHDb1JcBXHdkqijqhs4M9RoCevZT88",
  "key7": "3oKqK78wnkceSvDNTpBbMNU1NZcm4EE2vAbNizUWqTKQs9m6bue3xgZwF8cwGxp7V7RMaPvLmXxc493yhU1n7mrX",
  "key8": "2RjBTytYuNwpoyXjx912gAH7ngdUTspcWv5DUqpZ2taZnxLsVHaMRd1mjiCAtsPyfQB35dy9HG9iYXRVo7CbJ9qm",
  "key9": "4FapFzD9FnCYZMccHgbhxP7wUTMRS2GVzWBegsiJ8cvPn3QY3nJgqEwtz5xsGbKXBGMsouFDTT1ia1Pbo8oK4AvF",
  "key10": "4sQapXJA169iZkThH9BEEi1qE5Njn3iv4eQUmHd2kxmEqQSgNpNbyFrWJhoxmKVfD9wVqkTnzqYcKb1xkKtKwxHZ",
  "key11": "5VSHDGPMKVJjmoxNy9p5wVkvXzPmn2tpSN9mqShegc6D8DdoE7tnoQf8VJvS97piLJyaPDYRJkWurrDJfgknYy91",
  "key12": "3vyAWwd9CYkhEmJVTjPBD9NGGLQbRZKHfHuocTB1HdvAp5GgqVpVvVeb2y2JBTYeEAde5DYhSq4xXegroFAhexLu",
  "key13": "2GU4WtnSwNdFfH4MF3eK6yYdsmfke2bnrMqPFdFWJ76XXJfxxQxXUgQEfmQE7teR6ARCwVf4BM9EzovhcnUhAPDy",
  "key14": "qds8dofKrJFYp1sUK7ur4ybntuQNHg76L3pg5wMVbspfHdpq2PDyDYUVxxCKnJLTWq58naqRJusiqVPN74KiHni",
  "key15": "5eQDuwyEZRjQj73cdTgusbSG1NAWzNsoSQTGsKhaVrVTpLuuYcLFw877QUhF6UV6PFtmyi6oat1mF8PEsKYtAeRa",
  "key16": "LmP258XtmBLKAw6Wbeyv7p1FSLqQu6aUaDiQmyZWw6ecav5NGhra8bYawBY6nFxFAHiYBfo92jv5jEwGG1JkkvJ",
  "key17": "4757ouLJamWRAVdWvuf2UMnCU9LSuUVNFLgjaaEkLhmJpf296LW77xhNG6iKD8xv8AyWBp7VuoZsZFTUZgWiwsoS",
  "key18": "3LowqEMZYWKV9PiQaBCnGbyhrzDy3pxTcK5iHTrNhN2F7oVq74ewNUXoZvxVaHj7JXjpvKqtPv2XoJi3zEEnzhC6",
  "key19": "EyCZRxsYz4dKkmwpZvGTPT6ugWdroQHiv71dvfQxUUZP2NBYqMJwwWQUfqDFJmGQca2zmBdSWxTHhkZmVRZSdWy",
  "key20": "2RsmNHJN59zNxb1QptvwTJJN5t7vvWZmy5gtqbjioepcBQ284QiGUuCMipJAkz8E3z3QoGPxooCQtKMbLDFtCho3",
  "key21": "5mRj8G4q1QUMiAAaaLXN6JuLHeFNqWgwgXWSAeTYN4AhxQKxXHuJtuzX1NNQnRGyuSUmYMv916ThjDcmtK5JkCv2",
  "key22": "2LMmjBJtf6s6u7Xdavi2gmhnrCmMyDk837zXtfLMx4ABvQWvg126iXh6R1bm63J7xWnx3SmtexZ9gs5Pyb1eH8TV",
  "key23": "3ga97JB7AMGrGoFD9db79d8SVk8cmNTFtfiiL3pTNt5PsA2Np2XHjDEFuMeqUvpG9MSCDpNereGviijsiWeV3emu",
  "key24": "aySNg4XjxvQaU94ofiHjAegstyrZJZjkr4K9a6Eo6zXZLSUjhpGsFnak7ctageB9fLhL6UeYG8vwMrANwcPk4v6",
  "key25": "2gMoP4t1ADwy254ZZBmcwriMkR4ptEAUSNcozcAMgDXaStbbVWCnoqXwH68qAKsVCjKeZHZ6Pr2Fh4oWy1g219tn",
  "key26": "2JGv3AKv3Q2UGNHgz7xmeNRD8NAvuar3jvzLu7bacvyPXL7G1V7mLrj1Yb1ganPhPf8K3C8mD3dfcfUiHEfJUvhE"
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
