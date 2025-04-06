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
    "3mE2XVzBEitr9VTZaXh2EqkzNRKukhQe68QsTHtU6zjQsDXGeqmNV6fgK2FHPTr66d7eaunwLfUMgSPvE4Vfw5n7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNKQJM2ucZeoUUFGo3ZX6av278Luz3wQ958MTb6YpmNxDVBc2p6GrerwLFkuu5PuHWat2Mf5PNcCuzRXtUBcYgQ",
  "key1": "31dzpAvVmXriQKDtVVSQehJUq5XNb2zTitt9nzeEYfYKUcxCTXt25xYkDJtvhrx11ehwF1DxEqWXJDg7uMynuCHZ",
  "key2": "4VuiyP1b1ZBmp6Npqk1U6vaDY8zVGWvW54Nm1b5mo8xiYXkN4qqCm4VUWnxEm3z2xHZFhqo4ukgr5WS13ydUfrsN",
  "key3": "5XZCsqVi9DNCEbTdNeAW8wPEtpJuVRunF3t5yj5BbWivvWo56xrzTq2Lsrx9hPtachNuFk1a9GfM7UmwBSrKfBuF",
  "key4": "3ZeSBkwQ1tPAe37Yae12an9fBDEVEz4F1j7WK46yhyKRKmDkB9zUmC5RCZ3E7sEnxpe3GHjMSBjnL2zochrkY1QT",
  "key5": "2C2xKbAsZWbG81vJjhh2FsJ681GbvQDkfjuKFFWK6KU7cH1a9ZSnoMkAboRNqFwg37aJ12upvu7rivUcJup78DqD",
  "key6": "39VnN4UDk45aq8adn6JgGt1vdYPtjVqLsDvEys6iem1i7sVtmUoS31VUwLw9cfM8ttijT9CU6iEaBWwRHPKRU4bt",
  "key7": "3XqQ6CyM1oLJgDMEnk6tZGGCMJKzuX61HWXKMkB73bJCRoSwwgvCkGQ8SG1ri6gDcbUDpfo9DS9YCbLuzCXfzv8v",
  "key8": "3CNXuBCkv65uS8a9aV2YehtzJ6nsABWxpW5Qrty2mGWsCDmsYwFby3uiYKF7PXHoVpkVJYPAePgXi89NV9xEE9v5",
  "key9": "2VqBAfxNextj2KQZ5jyhUbEhMQGzmpUtHaZXc3oyxZhrUvsnXJCx4yCziMtz81wD45d2VuAhZCznXiQd2Hn63yfj",
  "key10": "2GVLKHdpebdjx6qmq5JhTPZ4tV2bUj9oEcmiQxyJNkJwJdSzmHKCfTpPgb27BEqYPzBjRs83fdGcCZVUy2VYs3vw",
  "key11": "3VFXU8fSMG21qwkBVHYUnGCEQTiQ7RsKM714xdcHWjrm4oZV9BXn9ykSWrPSZDLgdRiUWjwTzSNFAws1iWqssBH4",
  "key12": "3wiztuCTuzZ1j4PzvFiVK8z5uPLyFFBUKWPzXSkZvtnrDWY8E686mvBpfECbBdogeks86Vp7SdvcykeiiysvaBoj",
  "key13": "5xQvu552hedDP9AeTuSK3DjjrmN3hwGNBZfJdPB6TiP28wXsgwUXkvpQwgSi2Dq1G1rwK1JRK64a1oAvU3es6Au1",
  "key14": "jC6iEZLJ9jZhfAZjwdP9adENVaQPKeL9PPp1vvpCMHdMpDJBK6SEemb5AwNgBVPQo1YgsLJamLowhgpNntzNBbm",
  "key15": "5AciJumcHGYzZQX9T18ycWs8Ac2S8GdvQYeVxu4EyA73AkLJjD9ZWpDqwuLX7tTxmrEnCMQWPDp3PNqu8kLqj2GY",
  "key16": "4g3tNLnjjciNdn2XsfvSrQFzWEqspDfjq5sbSLKMA9g1ZojdWxuiw1zKrHwHqZJFUEJyAx6QL9DHMQ9ZpiWAKqHV",
  "key17": "5hZNweCocCTm3HZSdvXbDjMNaut9twk6KWaeXZs5QC4BUJwrLjoEnrWczYktVZJ85Fw4k1GQizrE737ijg3itpdA",
  "key18": "3RAxKsgsSMSZwbzD4x2NnojgUzAq4Ch1rWARy4kRLUsnq8oNxtRuAnRB8y4zg9pbHXyuaKWfEuzjGnKBJGMRbCK6",
  "key19": "QMR4umHHZxgCYXXs5R86i3s3j7nYJMVzQWVVzvW51dPXr6F5d3G5moMhzHTmABkF94rwQpa5dSZAAxG4h9LBc3s",
  "key20": "LzanXq2xkq4DTrZgT8BfzDZazvQUUd7sJm11X8VbQr2erq1zsYW2nkK7pi5kKJimEPeKBeFEgQUVzhKrBDcE1z1",
  "key21": "4FbUrgcTL5iCud7tKeu4Yq5A1LwrYpepmAJLDUuWh2V3F27EPFVrMG592aDNoNKfsgaFAesj9bjxnpDtGY1STrvC",
  "key22": "62yPrvhUQpreK31SqEo49ST6fyxyM6oYALimoXYCxLYxWP18ey11qzYQ5guXKjWq4SQRKD3PH9ZN4mUZLHYeoxKR",
  "key23": "58HH3BFqefAtzZoS88ubvG7U5dcrjDtcwdfk63uSNXNc2KcwUtDCip2KRGU3rLARQHvnoBdbLnjK1G9wdJsVqHo2",
  "key24": "KBUwkb95SErWS7uwHGhWaDXKYEWRbfjrn59gnGRWTidV2257cEzvFj3mPguKxueXuSYVSJexRmFyhqHux1PGYwG",
  "key25": "3Bwx8sR9i74qRTpFxZzRkVtwS1gBtGJXUbbyFjW2BqQhLuWZgSGnpddTb4XoV3Lq7PRuG7WZ25ZPprs1uS5THBQk",
  "key26": "3qxFjB5LMyFZd4TE8kHrnpXvFkVanBRXNsPH69z7Ad5uMcWmj9dd9wL6be6qn3pUjrqfi874PkeqdVxxD8sBJ271",
  "key27": "3CQMgmgGSu77ZSftFLx8EAXivYYwFNbu8sET2Vu2TzstgBCVEKabhD9dyxSDYjNtSmSHKXcbK8ADkxEsKDRLyzZy",
  "key28": "2ExR4DfVux9Zzt5dqA36YsaB8UfrkBuipd6ddPbAQuAYYESstvd1NpKxmSzwHikuWXD3tNT6ntWkcTrwqkGE7beN",
  "key29": "4RKo2SGEDSfoZdbWH1X15nXoDmpJf528iPpx465VfQ1NzSxaf4DiHNGaEjk86MqJ3tEs9KZRTVao5mZrmXoH3CXW",
  "key30": "5xtxHLFSx1w7sDWb5wFqjEEMT9N1vZUywLgtEyNgPyAQLe567SnNqhG8F6UAE2cRnomTpvZgCvhTAiesqvpaFK89"
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
