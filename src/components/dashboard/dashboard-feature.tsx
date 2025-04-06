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
    "4XctVYcub2p6g7kJhmjWGd3hzBukZJe25wV4V7EbF17pkp1AeLBmgjNBEwPbGxBaz9NMxfhAXCdRWqeyJ7aP55Qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Un1648bsVQTjKGCcvLs8D9kwRT27BkXJdkpRigkgcVcvKuy43NcM3xmrTUkGpWRVMobpvEh8hgt7ntr5x5KXKjS",
  "key1": "y6RXggSHs67MkMzEQYyJGq1pvJzVQSzv695GLMGMfptF6ZbmTSeJ3KeoruGuWqZBNJXK4XjoPpE8nCCJNSSSxSZ",
  "key2": "2Wnf8RcceVJXMPVJmTbjFmvL7YAHqLoybrSiBJBUhQeQCenfE9dv5di4MJ1jS2ib6Vs2yauTWsr63f34WN2hiPMw",
  "key3": "5TwBomoPbbQ2uQLVhxfXu9oB6fpSUAYniDP2eMSsTYLSPuq7af399L9uPaqMqF7UiqfyjvX49PeWM6YNyursmTez",
  "key4": "3B7nvZYTmU2ku6mCUz2d3sbbNNqBYjnbhPYLUSfoPPoEqyKXcJaCjgQLSbk9nWNFFZGs56d6c87K7j6zBU1NDJAf",
  "key5": "2tzStqWK2ovdxd7nunWQA1N7reGAHyrRMiWBa4YWFxcJfqKWUo7o6D6U7fJfr8Qwzbk6qRzu3eKXcrXBGiqkpBXS",
  "key6": "2VUxtjK5e4Ackj1BzHGFpZPaPpuuAk8dPksdMd5kXwJc9DMuaT1dahXxG8nnoaG2RGY1mYDdMdthFGLR1RHPDJFK",
  "key7": "23Jp3itf2zS4jjhNTQ9M5ChmcW91pwEKJ467uTRxmeiqw86e8Ty1cuSDEVKRJAo5JBZ7BVsnGjDsPJM1NK9mPZeJ",
  "key8": "zo7QMz5DYALhrio88qSSmWsihTV4mpeVKawwr2GnZc4KhdY3X5n7CFP3GdwWFLiV5KAihxQwXNdCvXP93KWyn8M",
  "key9": "Fow1MXkuY82vAd6qAmRFNibH8kDBs6VmpSoE3X8Paemsz4zUXQek8nqmVquoTfoLiqzWcjtj5QwTmgdCfYyDL2Z",
  "key10": "2eiWtmVtRTDzm7vda6yLc8DFXHaBxam6HWPr7L1jUj7tRFZQk916KFZNancZQk71u2mHK6iJszWCPVTWioH4kaDa",
  "key11": "5MqrTcttX3xRP294DgJAAXQQvn9EcmJ3UNTHijJTncCc7tv6A46YyBpGuwcUdNWAEyHR6Fg6uuUwKJiGDg6XWhWU",
  "key12": "3KsZAHXeXPACwDub8JjqL27xqvzug3w1itJjbMxSGHbPjP6FvSR4aeNvAZp9soz59kPGoR3TB6QKP6TNZHkVvwsF",
  "key13": "2EtciFpvFQd4LBjXLhfSqnft9VQ8EUSpRGYvfzFE1AmfWCqvc1Hpp6K4iDYAuijNVgz9eGNTm4nb23c1GSCTpcw5",
  "key14": "vZVZxpwsXnCBfhkxR4TfcsendrnHzmcb9deJukCHx6M3cvpeh8yFbaK5V8pT9SKxXzzZhvVicggTh2t219E6BhY",
  "key15": "3ijvr5cwkWXCLdFq7jTDZ7wQ6AtaeZzm4F5CuBycE2SYvkEYQBaYbEJsNXM6dsAd5fTMKLexfscU2hMR9nTav2y1",
  "key16": "CS1L125ECfNvuB68QTnBPYT2pZYvwVhmg4Q1X6gzGoaFgLjGk68k7beNH7NnaMqdWU3eG9ZBxeMk8qFNBPyj2df",
  "key17": "5UDm97MfzPpFjG7qszieunLhEbnxqB8VZG6SSUqF4KqfZYuNaJqWXhXRrb29JoMzw4BiLGAbBuhrTVgxPXP7ee8z",
  "key18": "E5XWZAnJTbvJAtM94BNjuZrkMDTKbKbC3K3tHLTvaZHRtZiv46fLFSh9SHcCRJEQDpNUAbGct1HnPbrfJ6yuV8G",
  "key19": "33FB1b5c8KAzZ6ERXRaUb8mcSfp51xvzjKgbdEdsUAEHYHAKx5ZyfP1AbyyMX3ERFUo9YSMdfra4TmnP4gZxCcqA",
  "key20": "5Dza95LpHdLDgqaAnji5xrfEkYwcLfYQNtCRsrRszX42uLx8xMEAbbyzmaFbV2fVPeY84S7SQxbRkXiiMfyDn2Rv",
  "key21": "JEXiDSLn1oeU9UdUkaxSZUGot6EVSGNgL3dXxcfB6WELovfaW7wUhPoADit6kzhmZ16qrEMqLcVLNaFu2ivsX7w",
  "key22": "4pKCgmC3a7uoPo2ugrYgYe917TjNp7qfzUbxvnpMnTMAmyi6gRPsC6RXUGYSs4NkK1SpGBBLMdiuwhwK1YzEMHfy",
  "key23": "3tA2S4Wqwj7QHKCpGWJZmeGEY3bRJ5w8DSdAdGZeDmkfxfJHvLMvNtV7EbYHbgHc7FU9dtBpNpJbyd7uWh5S3DcR",
  "key24": "25A139rtHFAAxEaRziqaVtGnpfVmY1X5hSS4euTzSLBoqcf9gnKhbHUoDxPXEG76WjQbsdAgHasdmUBqmFQCLz5r",
  "key25": "3MawsUdRYaZm3noGt4V5yC4xSpzR1TK8u2z7WNT87GcVCno12VCDLwxT12KVH5ybuYPZ9DTuxU9HSXBwL457swZL",
  "key26": "2QKQJU88iKibbYeBhLsnm7HPHDZVVRAFYVkbYD1F7MiYCdKTN1ZxHj7y2mm7aaT4ugcfWmHvKke1hJRkQk8wa4u5",
  "key27": "2FUckb3oL15T3FsKyLwT3qQL5rUADdgBjLJh2sJKxJAUBCPUKPrUiFRs47hXJLq3Me1L4tWs7xMed5iwxgGtL5QQ",
  "key28": "4xtPKSgmJY8fnM3SdtXgKEiBZPmz8xq6pujLr4V9bBKN2UA2eHYbnRuur6tikQF6MC4E1Exbypcdidbt4ctZs5fp",
  "key29": "GGzWNukY62Pk43hSEC3BLZZa41CFxNDcsZya3vNfrpjcMK7sEmdrmka9DPwAZQgGgjxMftVk4Z7whaEVw1Q1LDH",
  "key30": "5sXHvX4qBj7WRGhegJFjkLFnXgbPCeuErwzQhUR5z715FuEKnBynbbyiK2BsJzq25WMS8TmhjKvdaVVenLyLp3QN",
  "key31": "5qk9VgiZA2NdnC6ootexpXKrahAAzE1ewFtQnYD98DH6Z3WK7KuS1JjThV7CnvRGZUxU2XWzgbrNFZ4MfinSGPkt",
  "key32": "Pd31mXhQm51tAyb518P7pqKrNgVAZVYLviJBV3CiDAPjCKj4rvTS6rucLKY33LxkbfSypma1BQYXyAvs84srQbm",
  "key33": "3FbMoCAZhU4BfbxcA5fbRY9ytyW2eGXRS5De1H1zPwfb3mnDf7quJqFTE5xtKHMvRVokMW38jU9z9NK7v6WkixcL",
  "key34": "4VvL7kR7w7QcvLwBvKyGBdhX1MoESHDSkzZq9MhCAjwHjHbQoyXXLN41JR8AF75K3dZVhPCzKic3Lti9mRwE4vk5"
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
