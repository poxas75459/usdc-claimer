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
    "5FL3PWbvfzComR6iLNHWHQXohYxJa6GTYGZ8nnHkp96NxRc4SZkYPWDK6HYU6PRiccvEWMgsGLUt9XmoYt21xoKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SuFffszFy9Ajm4BvkuBsvgpuDdePAWQELtQwXvqbqAukfVRfFw6Ph372ryy8c6gvYoPexxBzVGnujzC4YgTXARG",
  "key1": "4wuGXW8S2rHbzVK2qa3rv2nVgcjsEqLgCfgonCfsuWh22Bj9YnXJ9vE3rgG2jR2UMteZgR9NDRK1QYBJhW94WKBV",
  "key2": "u3U7US6VxBo2uC9Qyprr6aXhf34Cw6KmEYqpMoDLXAPXD4qq1a2XwW39YqKvg9JrVE2b4GKq2pg9QqXVmu95kko",
  "key3": "22PWPfPzvGrkYUssn67ftrxUwyicrce5Jeikurn7A1tYhdmXV8t53QfjQKwaZFvKauV58jiTtGzk9NU6aVRt1guV",
  "key4": "ueFVeZBLQKvumMZCUPFhSZMGQEtDiCbNTtXfMn3sZDBkpWWNvCyKM3dxvAgeFJ8jrXWL7KTk3fmRWEYdafFRUri",
  "key5": "42dcqYdMEbKbskzrqpzrpC77NB5YH27nphSF95QbikiLZZm34v7mLVySeYoKAr4kJ8CAjuCF5RGbmvDva3TLRdGB",
  "key6": "4tyDuU7SNa1uAHiaQdXzUmqqSGkN8MCxfaXK2DYJ8C5rASKhgYsL9piedmNXGs9ehQBygfv2mBUDBUYWPgUgEi5F",
  "key7": "4Luc6i3PHg1KSY3YGrkjqeG3qhXx6YsHU7g4M9Y5498rmXDGqdEFsCf92QWbU5QvB7JW4c2Em6pnPb48Rb4P6Ygo",
  "key8": "2HqE7zCobjXMSYD72J2pjjiGdUehBtTwk8hdqhySVZKgjLPsU9SxXK6k7U9QP2SmPDRVYvsHr3aJspjAqDpLCwHS",
  "key9": "5SKRkKD3soFSuhXZDUashkdoMSgfoHoEfPv8KnyAFHrWqtxg2YgofwFP5CxmRCSnnRj4CVPaZi1VdRcikAW3LF44",
  "key10": "5FG6zPVt3Sqx9Z9RWuekW2wg5XW5HRfNoHytyWRci9ZFYHufquVNdSFypA9EgvzJKuQKMeh3EdkVugz35raKrQUp",
  "key11": "4uQqs2rsDn3BYKAxJgiir2rxntwAgYs28fTkufastQYReU6trR848XTti4xhkbfZKopUFiH3RSbAyuQivJJhpfW9",
  "key12": "MSHdNN4wTEc11JTB2R9WBvcXG4z5DdokRXCVDHmU1EdXJbtFU7LZwQpTDRVfCoJqAUxmtnw4ugWrNLDtNYZujDy",
  "key13": "5sX7djAtTnCD8aExHCYV6RBoNrSbXUQCzBJsWTSKih1yvtxCByttvcKgh21SnTUqoJxKUy1nkRWNRZ8Aub29xzCT",
  "key14": "2P8NBsrMRxAPMkMNtVAyoaAxSehavrdjnWGg4mgYiYkkHCh184gjYT6SAfCYdJecicZgNtrhWz7BQPbEqBW6CmWB",
  "key15": "WNXM5Yd884uLVN1aG1sXWCMCpBGYixfo4qmhWer7TrwpNWawLtvJnakHXApEy7PqMVrCijX72RZprAipdDJSzh8",
  "key16": "4GnWowFn7fFtH7JunQd8cFPjiwYUMAvvtL5NLbNaF3bWcGdG3rBRoEKGgznbbVREmjVhfww6pJ3F24CTLo996mJU",
  "key17": "5gsH6EquiM2QdVe9AUzvY6i91eXEngScVSBtBHqxrpV3f9ELEX7ztrA7gUa1GWEa5gWQ7JMViURfjDHUp7TKBLkd",
  "key18": "5f9BL7kRMzBGFCPvQFWvHXpXzxpoQqXDxfotKQkFGnaVHAfpPXrqdYtbYNAdrgmFiEPGNsnEDNV5jUA4488AgxUb",
  "key19": "3gYifmMzYCB8Dbyeamx8CS1fEL9kcZNsQaBkjH87M75NjGTWMMBeWNa2VCZ5J8WrstgYbCdxzxEKssVEtRJjFiQ2",
  "key20": "2QhuPm9vZsnQ6FwxfmyY5UGZUSDiv7hgLSXfu4hNgMQVpjhD5w68JPf1mqGLma7oMJDaxnxb9Pp96QYuVgiZqRuw",
  "key21": "49G5QVdFkRSYT2zL8AFTwyPuYCZvzkAFi39uakNZHMffcEXwuyVBrCZfRkaLz4BpD4B7jh4MUD4KSGpKHyTcqo24",
  "key22": "4QYffctdRzknkqbijzZecZbY7G48xzu68sBxbBtd5Me4M2Q1yoXVE8TEUHDpnMsdQKupy1LjLTD3YcvJNvAiZnfX",
  "key23": "349bxHfdLNvkyenFLrfe6DcLcuqCDXSaHHiescAbxvSFhzpCs1Jx1qUosztQ9jexZgSNM8DZAN5XKmQLnasfgy8c",
  "key24": "4YPGBHncS6BFbFmHMVXHA78EhTSWassYE45eirMi4GZvAxYdVohcsSFeYzDBgmZpX9c62ZgJEa8BE3tCtdV4DafF",
  "key25": "4b4LsD2pZ1Y78riBTp3oikAhUtkx6TJw3yk3T3RAYvdpDeLBYotUpGDS2gCxbroP9U9ABthxSYRXt9dq3tVTvi14",
  "key26": "3m1J6zAFxt1KDU5PTjHSukm56rj3bY7JNd5Q1vsxNeYmKxzubBx5qaNYs9X8HvEdRbb8qSASvtvWGonVvt63bspD",
  "key27": "55BbmPL6SPihpaq1K9Fc42VwYiK6jYeYREZVr5gDfkJBa5ecZFpK3ejRaHzJfUWA9Qz65CzxKftGUZxYYWZTFQZu",
  "key28": "67ovcKpzxS6CYqdbvTUbi7rojoiK1j176ATT7VeXguN5CGY9E7tC2zrwaFKndCPvn5TisJz5fuKCnNw1tTWsbnNZ",
  "key29": "JSAv7Gpmk7z3ug2EwUaNDgn7an9UsG5AcKJGN7Qo9eZxo2pRdUu361b1CzBeHirVXwXgCjr2CfDaJM17cXF5uLj",
  "key30": "5qrCDJMixNgZKCmHKmZWgxGoi9Mte1NAcvwbZc3KtvrHKFN1F9gsmgjL6Swcbc7fbGK5WCkDGSidqVW6bHAL58d2"
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
