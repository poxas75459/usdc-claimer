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
    "4adb7gNADydkex2RNzVgGu3XEvGpdrRgQgxWWWWf2MNfpHN5A9H7capkv4j2A5QgZHsR3KFSj54EY6JC8xpJmAUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47eZrp81zkwGubdrVErZMGhLYw8vQhrE4X4g34CYiGKzFtD4Kswg36aQ2rkb8SGHtH4ok4NphcspxbFUvPb9MGFG",
  "key1": "5PELR9gcaQWrxjdnynVcQvBMeKcK2SP2M2hPLMSzuA2g7AmrxLp9xuHmzUXrbDSpTFoM6EkSgZTwMrHwAPCwSnor",
  "key2": "JZy8scM7THKBppSBNzgNWYWLstpabPgCZQwq1Cb6yHt6MwNL8BHjwykRhqVNmQ2erTSKtSJDmpocbRLH2hngzkE",
  "key3": "4StKmhSJKWvLAptDkfetNhPHf2oiaHMY2GAD8agfPk1nJoLxdbsgqEGn8HRUTqSaQ59sEMgC2J66DjYWr7284nXi",
  "key4": "32KWqUXhWHC45guq73NsXExAmTk7i8cRtJjnb7PUc2y39B7xeiuFtfuJnZFtALyRy5DdbBnLWxEKcVRJEUZvPT7",
  "key5": "5AAe1Zuex8QGGpthxE1uLuGAU6vCHMJfP5QLKFBW2pKxizQcd8Q6fmSu3FvvTZhk4jDTRw3D1FVDtLBvULcrpDuk",
  "key6": "2Q8n6bb7UGnNDrXD245jpJTsjGEmTFEoYGGxtueJfo65TWN5ox7NfTV8tUZxftT5rQrSGwVbzQNw41aQFbdaXok6",
  "key7": "3ueA1ZvBZaezmzyJMHk5paR6ptkAXsrLX1s8DpZpH8D8o93mFfdwmJbscRZoYcttADykLeLuCGnHBUnQfV7g41w1",
  "key8": "5j5xb4cGFu7mPsxE94D9LqTFcrtxpwdvs3Dxj8bkrqgUn3vie2PhEhKCYVfHdZZbWV2SYbmiFEDw3yeHmWJQ93jt",
  "key9": "4qh7A4RG6LndZKWCaG8uxai3r7j4yoxaetKf7ZxFtnrC8RMpLR9Bs8ub5hTFdjKX9otMbzv5SUgaR2kkTBF2psei",
  "key10": "5wsjJwwDMs5XG8tgYY8jiAKzGFcV4XJEYWXECjMuM64L54ZktHPDaHMf3B3fDLuwxuBcCgqvvGQEeP67SM6Z87We",
  "key11": "28n7bF4YELyMqDK957yrzgYcFKnxA91ry31wcVfGxE4j9gRpsAdQC975UZR4NfUdUCsJwN3kF5rH3ENgT1YAq5it",
  "key12": "5wE6rmqPCDV5RAtxk3qTXJt6e9QrsB48fL5PAessRbctPNxGRs5GLeThTcNiwg9bCLbZ6WEKajvxL22smojfy1Us",
  "key13": "5zof7whE3Vw6LfxTaHKzfthV5F87juv2AACaCdTY3TUA71r8cSYuizjLTYHyL7onZmaSn5r4RumJMrco4Co4dgGy",
  "key14": "215UredudqH2hGpY6FPFgMREPi3ghBfesp23nA4Vv4qN4eGhzG5A1WVznz3qhoUtjgXoGz12tD1KiG1rWq1QLnyh",
  "key15": "3Xbamrp3ZHxvaAFUtyrCYPh1tSLFanEtAT9qssNbbhVE33pmNL5xc9CDyAf8ECR6huDo2bhRsyeBM9SXjYYHpsfE",
  "key16": "56mAvGytTSq8RYWJNEZxKPrA34e5WqbitoK1KdfC5SnFSeCnmX4HAiJdZTVwq78ccjb5fdpJsGt6gC7khdPfcZSU",
  "key17": "2ecwdahZuEQGzDpzumAKq23jgETJjGnGe4SmkuSz4ZKSvpvbmsKWHzB1AmT3rEoVV4Z2Nq2vjW9SqKRvx1Ekykie",
  "key18": "84S2gsh44csBdS8GMwbehZPcA4F23ArewCrDoxqHka76crC8ZcBAmuahZ7C8qNoNSVk2oTGCWcutY511P4LPpBi",
  "key19": "6239imqmvnQjGkvooM1eiBXKvCbk22U9e8FYJqwsRAZ4QVzS8fSHN6C3yRBNs6aL3HQGFCNtkLuZvNgbnrFtaSKG",
  "key20": "38KZBXC4EYBEoBf3tAaabCoUCjvAGQQUusNbGm5toyzCuhWndCsaisnkgwPqvwdf3HsoRP2iTqz3EXFedbzfHtVA",
  "key21": "5M9HG6kYamiiksJmG1h83QQ5NQgHbAU1LozbiwnbjVy2NiGzq6BLh8hGppwwdBp8DWENr8moMz9uLa9UTYpGiy9X",
  "key22": "5XZeP7c22LCPTnJq9C4GM8mV9AohfHUvdCyM1RRdjRsU6Cby1NoXMRwbv9Vn4wa9iyb8tNwxPgXnjxkfTospXCFe",
  "key23": "4PuotjWNr51gaii3P3WTcMAK9Y2FLuFGoqrXE14pbTTGpDjZ6tCF2P7LrxsqpXzvp4Xw4ALAW9qt8HoRGcZ2PcRG",
  "key24": "YhPTFuXtETa1RoK4Sy1S6PLu7mQoL9qfhZD1GBqyg5rDGqYBZuQXJ9K1XDQt3wPFojMozt9m3yqXK1fckYBgN22",
  "key25": "5Lxnb1jv41j75BRC7w4EsHx4mfZP6TqR9kiBEDYRhSw4ZHkACMdzLmHRdSDb9rCKvQkHbfx1vVmbJsgDEognaoxy",
  "key26": "5fFFe8KhX2D5uP88pGwH3A8A1WnneBXNcz8xJjCdzv9w3yCn2nXu289gzaXPWskP5WusucZsR8p6wcRveKZGQgrL",
  "key27": "4VzAjxkZ8GTyxeJEzvQixUwrpcTs5TPbBryruHJQ76HuoehpfMLcDhoaWmfGNDUCSAwc7bSQgzh1eXicKHscJW6e",
  "key28": "43VgiJR9ZdxFRKD3NSb1UxCTymezxzWc15GcPDaSXNNzBmuyoL2HBwBpMXkKTbYggNeDxkaBCSbrsbdigP95GVgt",
  "key29": "2hRSf7qdEFsS9EuMeZeQoFLuM6EatMvKe4WubwKdDpdBkqstGMAJGe9ugjPyxLnzpDoEZkZCK6EKqfg213s6iYBN",
  "key30": "fBwFtNfCtje2eShnLtM4hh9NyRYvpZmLMAUoEuQp5vCdrPe4ge5PVPBpAUesK6mCRCs94F9Gs4nSAF2MDfaxSZS",
  "key31": "WWF9zhwapcyZRZV1Y6ZWBVJGXtq9eKrBUUEGyb5mBP1yEuDfKAWt4n4WjxYVs1msPC5jz2BvprCzFEPzu9vigC5",
  "key32": "5r4FCdF6xB4yiZv7qQkoPaxHdsCHgu64bJ2P6MaAVfGgLXhtsQAdYj8MeYcDdgkQGJsGdpvDtVefGkBA8kQivUAa"
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
