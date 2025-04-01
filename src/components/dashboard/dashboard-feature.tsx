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
    "kUH8kpoPnw7GfD3WG4QDWmstKd2GJg67ofiukucYdhJjk1wwGZQYYQsFuB7JQxcNEWMnBL6NFjHZY5kJcKqXUGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ntttuCrA3X559VvR9Mty5LQf9xHoL2Fsk5rCYX79nuWUwWTnCAyGoS8QGCHUWmi7if8ybYbRDq7r7fbBvnSQ2e5",
  "key1": "3ma7Fgrv2UZFpkeZvPKRa6SC76irzyZntsB7E5avyRX1dvLSpCiybLKGKbz7xib9imNqvRx61Hh5SyTYkveEpsm9",
  "key2": "5jCbDTXZKgSDzS1ncfitcMfLyJ36CR8br5ZNL8Jvz1JWdfk6PwhERZwM66qWwc4Fbx94dH77kPBRYsAMeaCYx9D6",
  "key3": "3ZpgWBqJ6zts92zCqQfj4YVF5Ez1g1gjjtqTnKG8wXphoys22QSYVR8HVRTKH5JoR79HoZkQ2ijgjQSQ5dUvwd55",
  "key4": "5Z8aMKp4CLnKvbYeX6mkDSF43uDqyZZGHV2xpu5xoVmpsnuTquvZqSZmihGSmT3PppUUwwzWkiTTwgFn75UzncSu",
  "key5": "xohrJrKXnHM4tYB6rUMrbJqDHr2N1SLLxdPfFmKvMBwEmEq6VWAMFPAoAPziAG4J9XY4jpD4ZfABdoaJBVnjh1K",
  "key6": "5RLCdCqjsUfcEQvnMGrkdLRE3XJstCowRPvCq1UAHXEKRDHqeWBJVWGX8xKXWjZFnnSfJYW9XzWuAEiAocGYmqwo",
  "key7": "4mT1GeKY1WUoTWgxZE5YoYTHNpjbnNBUnGum9f4Mo6HHVhwuVNzdwPPDwb3ZuM8GCtGEzZqGgahhafUFP56NXAnL",
  "key8": "4Hgnhikz25gJGfheKJRTd7g1v18sm2xLCGzyH6GvJ7LdNt5PoYcLkTm1Lh6HExD6paiSJSUofnMmVpRHao1ZnKxz",
  "key9": "6755oxurYD4ccgNbpasYmPjs7Qwj1cdhtNfXQCgCcPMEYoY8M6ZBNiTA3bUPtKPAg7UUynLL5rZg2fDij5s9o7GK",
  "key10": "2hmRB8PMH5kkotWupD4gzFdTVUbksDMEm4bfFfuowb5FjqHz4ruT1WnUAYNeE1iPLgLSWREA58vtogtrY77U9kCp",
  "key11": "62Lk6sbMG7mDJfRX2LzjEW73vweJTs93UtaV1PqZRHW6VG5oZymQ6SCexuqCkQtCMEtYDUdhXHbYTRR3891RMRpX",
  "key12": "Wu78WjpYSkRGbcw421yyh2Pntof7d7fUSf96jrabhW87BrPEBKG6DzLnyRQdv4XKoPA9hvzNeZAgLxCGoePLZ5Y",
  "key13": "33nvCAqAdGdA4sKMhBf94zgQ2euJ4zuVz2miNvXYgkVKKTD8zW8DUqDioAvXrZ4jT1CsQzMTxTf1PyHeZ4S5ySp4",
  "key14": "V9fRxT1oHukGdcgMmMnActN4eFyw7au2zVT3FmZHwCjEpbjpgPZV9YBnMC8WV9nZ4QRwKfWiFMXm95RNpcZVW2P",
  "key15": "2Gw98eaiFmDGzLqxkFFwPsPrRWf9QumcEPW532444zPKEpozoiW5axm9D5R53wXbiU3XcQuc1PnhGbrQ3DtNB63e",
  "key16": "4GKqTiJ2VV6RrsCF8dZR3mbcZzSkY9Pim5J2hq2QgLtArzUcLpk1qyoRhRkavQM6o7QMzTffB387rdp1CS4t4FSe",
  "key17": "3s2UBVQr79MjD3KEkV5gkb1sqmYz97SaiEm9cDquuV5asBvdVPp9RpYCpdQrdKmr7jWPmJFBdySKFimKhERRX2nK",
  "key18": "63AUde6pRntxcorzcKtWGh1KRR7TrHc2Y1RmC5b5XdreZbhDvvqrpJrj6jKbDX1EQduWgmC4T5oxk2nmVSktye72",
  "key19": "4aDZVFxw8K23utxEQ4F4hJGERw2gxHz2Yh6Uyvo4DmgeRieJczGtyjrEMWQwZvmmwJCdKmPCakw8xGnqeactE4c6",
  "key20": "2WVdzAbJE5jhMiseghJyk6T1rBT8pzFsFipLzQs1Ggeh1WubZyjTUtZkA9ujw2QaLwTbRFSZAhAn6rDEa8gNdMvU",
  "key21": "5bbkjo183xb8Rtys3LLv5v7qXEugngw4L9NTN1e61BoifRhtmwMfEBwf5rybA38pJ6P6cMMG8JF8zaSNin4Wo8ve",
  "key22": "4YkeYKMJU2HztjQFidhckfkHQXgv3dtVv9zA3s7syodQiGB6amb93bq9DzpTuCSvgoMRQ7o2vUH4QTUhE8g3gAbE",
  "key23": "4H11NMfHvEyRpvfzDTbELx2CnUn6wf8PKJkmLt9N4bmY8Nv8TW8SzNqHzFXjBf37XJ6qWbg53aNJnoc3tQNWFKJz",
  "key24": "3XAHwsqByoSsn2gEByvYyMVk5exoVsLYhC9dG3Bdnrtiv85zUsZMRMJeWRK46vXwLwB5vTibHBf9AV6Y5EiWM8jY",
  "key25": "4HEKDEumr6VgSntjeD9ALnEcYdHPEfTHmWbbsQXfez72cTZt8P3ZGbWN2sgktGgvqBBFjWmpXJFmq4ASS79FyJUH",
  "key26": "38ypTCbseJ3nVgBtQtg9FYgv4uaLXdoFLSYywBgobJUmZobcRHmeJZknPU8KunheLJsgFwmCWuQtgJzyzxDmDqkY",
  "key27": "5E95UDbpCaGUX8ptMc9brVk8mEPmgRdKZr2wSvGvRNZURLyNv57XBBLyRJxgcVzvNzJHM2V7FFJHASYwi4WTFGGZ"
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
