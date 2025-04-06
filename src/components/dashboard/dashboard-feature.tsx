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
    "5KJiGxqzELs7i73VxD9AnAWoxvi3KrKaqF1k3KT35PSzQ4D6qRTkGUu6ox46jz6GCfkK92ueMxfZBq3zqD53do3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oawYpfjUYuC1fFSTqocjtbDXAUTcj4wjGxX3UZt6fqXerz1TzdBVtMXW6ZFrRj4Ze6MscNB3rHD9jkDhDH6eHY2",
  "key1": "259SQnjapNbVQfeBUZvFXUmJJ1HQbrHZumdgx1KNH5PHbsxAdfSS2J49zmMWHWUQKvbkHa2hvTyiM6QQM7sUmMEy",
  "key2": "2PPoxMUgsowq81C9j4ghKmZqK7R9sXNKvgtcqJZpCN2F9djcuZVF53DvQPULcNNKHtuMAwH5e68CVfpVgsfNLiEW",
  "key3": "3kVLjbWHLcqKK2RnBRd5wUcghw6fhi9WhEqeXbYVf92SgpMFGLcCJ2tWU2LErxZLFqTyvWC2fX6hE8uRAEDTVMRP",
  "key4": "obgnWw3r8tJShMXTHsRsrJJy3nypDYToipuJD71wURa96ZtfHTWg4QTMZajFwBZHYesU671wf4r3RLMdG8U4FCs",
  "key5": "2TXc37pssELwWLnc2SJde4UMhdtv2Y9nP686mVjMPWrW22PDP4CjurfUkE8ScEmq8WgH7jRXTNdeoEuGpGKwfduZ",
  "key6": "4v2MDomC1ZR4rU13icN7UDZ9ZMXp2GfmdxYz45cHGhDqmbJ29XvmyK1e7ynKvqeirm3tbsYrKWBsbtzg4UpwchbQ",
  "key7": "XC6G5qpaAAGnCyaEmGwB7tmiWCtDNQy66AbJzFuPHtTE1L4hyFP1B9MMuNtpaK4KvVwBymL7rVqpBKvjxtJr91u",
  "key8": "2pMRX4ecR7bGtpkp2b8oUDMgJ82uoRTZEg6WwSMkFqinDemFFd2UaHGLYDGnvpQBumo8kwyQ5eLGQ1L9p2n7vDaL",
  "key9": "rxf5zHsiLo9dfCFm6t4PkWgae43YBoUtVLvteXDN4SHJyNPXFyK2YuNfQi9W7rmU1zTo7u8bdZPf2UgaoKaMwUg",
  "key10": "41KFxYrc5iTzWQtmzSCjL8AiRDUVqxoz6EJ3WNiJDSD3obmQuDTqkojB3usfCRTfEZCUE8mZXdrveAwdVdbCVeXm",
  "key11": "37ad7RBzn3wWfszZJvtnm9eyiw8UovYfJRCbJDKazn7tJ5o5q1ZdFwCWuM3xMNMKb4kWVyCwpJ6adJMjR8wNSYcc",
  "key12": "2BekPTMccSZ7eRnPoUtbwyypjED5UQymxcNDXqDg5jMenE5aHk4TRFhR8fhtAMBjCCCgEtx4LT4bEkhAGqTVSBpZ",
  "key13": "4n5QaveodnoR5iWKrFbnQ3itLcBcxefsNF9RX3GXwM2jybNtssLhoWyrtwhtYoFSqKzvoibdpK8MpEiXkSmkjJQB",
  "key14": "3g9HCaLKsgwWBRFP6A71mWwN9rMyvqC6aMB3AVCt5ADB9BcGhiXFhV9pAwHrpKA5cSVuBwNrmeDvqF7V5tPBQBo3",
  "key15": "5UuDgS6PBLU55hsUnsQp5cC6pSvipnieBNAgzhBu54a62C3M4jDbk9d74MhxgbBG4HDLQiHTRm5crnneTKLuoLWa",
  "key16": "191zCAzqiDHnrPCQcGXiX5SMeuVAwZ42Dzpv9bq2h1n3bV53J6zRDDNViYivcPmiR8JL1z6qmHdjqtXSt4cURKG",
  "key17": "5n5q91HAkMJTZ9J47MHBT7NDQEwbRnv5wq6KfKsLSM9cFxdTY5aENGecjPQmHS2p4i1WbBxesssquFLmFuqyzCnh",
  "key18": "2jTW3yXNVQ7QthpNFhbLDQa9i33MXuL89eJwmm4ibinND7xPgUa5JQ8G7y3FnD1NN2pUK1g3reu72xUM8JB5BzFD",
  "key19": "2DVkwefSmSccbHSPyx5LxYz5CX4wvYQjGjhobyaxmhYKywa4tVZLWNq7Gmiepyk9s8diQY9HBqRsNtmvUbCpa9dn",
  "key20": "3Ff8TFXL7157NVSYwF7NDdQ9VjSReQnsKxYrKNwDff8Y5dhkFkZrFAjufoPPj4L6sd9V7iBkmMG5DW5Rg4gB5yaj",
  "key21": "3NXJkBrESLEFNGdtKEUy1Xbv1gFV1d1GbzkbmsTvqnvQUdnMVfyFoQeNbnTonyGTqf13uBsdQpdkEFfoEqcnwscj",
  "key22": "CNrV3RscxsFwyW51Kjccx5wf8JGkSemXZarXcaPF3gGrsdLUwWGo1vaERMpTMhXkbnXwYPNZY47xxz5hWBfc2RE",
  "key23": "4x8JRtP5PpcMecvppX31BmxSqJDjrxGzVS2yhakLF5W2eCVXRTaQtJm3YhJhz3V82RUWWpEU844fgxQ5ZE3UmAVE",
  "key24": "2BSeycgRLxrGVfEZ6tZJGb3bzTM4p8rZRAoajWDzR38BjmJs7Z7c96y4eL5ke7thLZTcA65b8xpGTcrei6Rh6ZY5",
  "key25": "4NDzNjWVP7EzHtRtfQQDyiTLG83LrSSpBxpgCD9ZTcxfnng6edKCc8XnZPaGBKVUBFQ8Ei6TA6MrhuJoF6cG4ifL",
  "key26": "oPb8dypFzFZvpihmZCGWbj3ChDPDXpQFFrrwvBK7rRMTvexk4fm3r8Mxhz5DsMPVWgViTkrnxm1LeNANNYcqdqQ",
  "key27": "vWDSM2NUApXdc4WbykA6qjNRnFyEqDEGDvRvNcVYLVADn58gcYXd7g789z64U72BAyGmkJyqJsiLdu2tVtrHtdV",
  "key28": "5MuQfJGfdoK4b9xq7vEXJCrPLoiYP9mLfVRMESyyrAAqYQUrCN8fPm3pFCMHf5xEjhn7skoXiTt3Rn9vSRq64Rvy",
  "key29": "4c8zcJRxyUFAfXLmUuPAZSpnWr55YPYZ3kdSY6oGFMEQdqM9xCUtxANRxZVcgiooV2tro3uYBG9vTkpHu28rwxdf",
  "key30": "4A4j15xy1tsTjbvZkmY2qU46ofeUyyvXtcab8Mw17Ym78gTK1tZhiKXUgE4HXcQEyVa33vG169Eadjb6cRswvFCU",
  "key31": "3Pxsw6AwDfMYirbsnH9ufweYrwiAFbEPj2b5gFLf1P8U7zvmFViZe2pcCi9NfZy82pfbyKyNbSFwUpexk6fuUohY",
  "key32": "3D8ni5Txfkk9QzxqW6H72uCcvRTq73eVsqzJrMe5CADDkb3wTeSDusYr782PiHiaqsPKM7c9d6av9Jw7yMPvZU2J"
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
