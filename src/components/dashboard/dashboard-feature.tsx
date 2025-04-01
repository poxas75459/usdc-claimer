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
    "5EBXRiEACkiBKcCpBj1Nfx1h7Quvhs5x1DnwejHirZBbQy9JqezcdfLeJmmXAaXnfr9SxM9vniACT6q9NFUN1pjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NhhKFVAM7HCtvgx1E7iicLmkMPkuiaPJvFMFB2SnpWKz3ffCSAENBXG2PsvxQA3Lb3wKJgUuHAvPSGwU825z49",
  "key1": "3F21BsEohwJNaEVswk9uJ2Wp4B2SKTMkoqbjkvKkW8C5qpc9qqecp2Ry3C3uC66ZTxmJSkNDhsD4iazghBtuLM1o",
  "key2": "3P4P7wjDYz2TFvKjkLuVfAqsAxiyoFhgV9r4oMoysVz9fP5uG96XHfVnCHdWVMhjwtcYSGNPiGSJRxwo8WQPXjdW",
  "key3": "5tk2UtxamQ6WWDau1rnWKSvKxk3X8ZEU7hmtCNMcoTqxmPKmsCVVEzfoip2GQXZ7c7suJmXhy5SF5Xwu1Qi6piNn",
  "key4": "5n75u6GbJ5c4vQCxncCyau5XJAdFg4KS8usBdcaeRC3iACzBaah5zfieW5hxQZM6a3kmxpb9B2txa4itqTGt2HpV",
  "key5": "4ioWyozwAkyymu4wXzSUMW7c3u1gXB7QNpgyUrUM8URTxzVLVGQ5V4GiTRvu866QtPJrpeYPPcACLjWjf4WY7kyr",
  "key6": "5KVLsbBmGJvh59uqDbjnR8vofH6At5HdtDbYwNNQoVVtbgfRfSyGwRsTJje28x2K1EDxc3F1ubqRp5UqdRaZxXz5",
  "key7": "28tMuqLY2GDSWPaWL9kq5W7kdewFqks5uZYJftGjbu18XDhnjNpymZKWBDPHqSnSNkkecrWs8XKopRXwFdNDucdF",
  "key8": "4UgD28pjbjCqfXdJ3WkaT1gSF847gPUH8RuYmjSdAGpfaMjVBPumaqyzxYumgKb9FgZ9RMT8jrTTCBdceWCge4PE",
  "key9": "669YjouFBY2uXmsgz6BVe6xmNFBXfDbY1vPx4FtMxDai1JMr188tYhDxFwijCAU6duPooxiFVB3Jr59vy5sec8DH",
  "key10": "2XJWxqWKx8gn4FHzD29sJgwg3PFaqVTaQGNi6eWzGgA4QsBXJFSm1UAsTrMcDNmbupUoWrGjEzsLc8h3YBFGVvQ4",
  "key11": "4VymNVEL9rZ57gn7VYrsBZrMrv5LCMZX59XN8UpY147HRWW3ce8wrYxvevd1GzukvMDREydzedqDjNqcmeAeqfS4",
  "key12": "4DqJSyXXhSoVT7xMw7wV7eVtaTPSbwz7GV8qvpc8tXeJP5ZUwv621WtkkSMhxoLjes23vvpTv3AiDzATVi1J6YtT",
  "key13": "4hNnEmUSnCY2Do72BKA8Wenwv1RPSB7qimEyhTVEPSAcCSVshj1Ltboyh127kYyhn5JZA7M8BDe8g5DKydC8niBp",
  "key14": "4B5EENZ7NkNtiCSAjxDpNNPQT2d6LT8ACQ4oT32msFheBHNfB8THLCp8BnqNUaUnjDjmRb4ox9Sx15jSZY4YviRU",
  "key15": "5h7Y3ts8SaRWqmiaEnothKYQV5VMHhD5P9nTHTyYQ56F1onB8BqmD2mD2W4Zh1uTQjsHWcPEfvEJm9oTG9r1Tg8j",
  "key16": "2ep1HoPq8Dhai1rGFMMUwzLxBSC7H6cyz59HPahTHPrm2Px6jH5rv7CyhZSJCKPnqLfbxYLsYnzHqsj1rXUCE23D",
  "key17": "64YEefXJpGzpV3oEZVvMr8CdVU1VpyejGUCC2tU9HgvcAWdj9RhH7aT2VQ5dSfzxdX5Lqfmfeoy3Eb6dykZ4GSTh",
  "key18": "3Wa85igQLsASS6PmHgEe612bi8HmCbShD7ji6aveA93XHiwvipVSfpneWJY9MT2QwafnNogrdFNJ4DCYQGZhnbLs",
  "key19": "5LL4oHV5HYEREyQvbpHSr3cAghAgZTFuk2FhF1Pth7aN89kCBkYYy8vyuTHq99QKPE9XHjdnj74XZdREsoLUfynL",
  "key20": "2VKkgXoWeEuKLXbtjEnVp45c8rpnjznhgXSSzGwEa5waxVjEht87F22wcdQuvTtSmkKqSNcm9tuWhYa16yxTHcjr",
  "key21": "62WGCnh5Xhx1ZMU8Xa4W5Sra6dggeGrLBYSp55ZmeB3pjMKbsYrVn5Ld4fDd7kpPTCBDLfSXDz7AvStcqz8EVgoe",
  "key22": "62F5K1APJC2AkwPAGPXoA59MPQiSVB6hViuTkggchwhQjazkE6Y697w6yrTqCsYkrJUdrSN43NEJ8k8MhVcA1DX6",
  "key23": "4mK6ATPp353aJz3dFGzq1G7HDtWLWd6DGQXXMKH1Tge1xf1r2jcdL7gDyvEBJUpZpAGgTw9brXhZwSx3AGM14jNg",
  "key24": "5s37LaHfupgPb5ZmZgPAihTF8hH6wrxCYVW4MoeLbwCY3szFw3X2jMjCzRnUKvRUwg7rBFQP2WnPP4TfdMirSjZh",
  "key25": "3pGCJ7WiVxXghTWM3aBECsyDAGqwC2DEoNqqEqhYsPbbCGRc5qGHXxnaRpcWmkndYaB6FXRvXLk8wZBZBGn4eW3E",
  "key26": "5FweGxr6kZh1KpuQdpNw2B8UHQm9bcRmuJMXgHZv2nT1AuGhqkPTwwxT5jc564ZmndtfQ4VTNEUJUD5frDXM3Bcs",
  "key27": "3pNyxsFm2MDkfYS3xLQU1kgVct6zEQsMsjgpPMxq7uTVi4BfA4MfnpiiGaBeDLuBVtxFUh2Jhqqm3H9bwP8i81jz",
  "key28": "5g8A6ddez1Zt2iAmDfgVhBVk1ji7JzBgRFdmxgoHwwnJ6yLD1xieLrn3SqJFDd6Pnw52Dmg2RWcduLmfM5p3hgJs",
  "key29": "2EMXKS5u1W8j9yFBqEgif9SsfDupSXHLgqFTZ3xJstLaGtnRckPvWzza4yoZmWW4HkKrPe6xAFnUJ5MNAqZbKS8W"
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
