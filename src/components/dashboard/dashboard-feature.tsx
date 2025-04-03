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
    "2npGhK2KTVMi4dgJ66b9ibm1R2mCxYco3r4cxpBR4vM684c8cDgiJqu1P1wDtyzJeHq9dn96h39Wy7fTPPbs48Ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CpMr4TdSf7KBgk9T5Vu5KnJ8FAehkCyLv7srmTwcK3pUfwBoRJvt5hr9UrwzkWQai1FqCWQbkS5qMcQz81sAz2x",
  "key1": "4RC8ECAz4NfYoeWTW2ZZ14kAwJjjAtypYgkLGzM4kWX4ahAzAZSdywZUYoPdQUic4FVZhzswtQCUikVyCqkRN7dK",
  "key2": "5XhfYUhX4VhNdid8F9iWChSv26fSVFD6YUPubPcUXkBUMhrD2CkgfHL59DWXbbkZySiqbfZqxQqUbxbT2L6TmtVF",
  "key3": "4CQvWjZrjQRe6gkRLrEXJZvQv9719xMEPYDUydxBFR4kUgiaUPqfbSgffcCzVWmtpaoxenYp8nXC3TnHQWfycY6",
  "key4": "3zY8sMCrmtE1Ue2nzYz3SqpPdRBLHRPAvd9Nc3pHTbJdbDhNmd713YaqYGQ9GLNQ7mHBD6Bf2Lp7iDQDjdiMqst6",
  "key5": "5wvV6jsBFvsKW1mYp8NerMNJwPKcHkmeWJsEJQ2CWTZcvf2A7YpFnECVUY8RvJLsmpwC3SJ3nLzp8wTwWBY1z8hD",
  "key6": "tBnnxcLUmLY9u22BrjG6F94NnuZar1W6rQSd7oaBjbMhfuDSsjXrGi2tt1EhUiomQHXpynPfwCvREJYiYDxW3YX",
  "key7": "3QQuCF2P52oJYM9KPxwGMxv6ev9atpPMzHe6rNmxronJeMSDj5Zk9eF84sHLi9DHbozJB14M7e9VBLyWF4fpxW6i",
  "key8": "34yGcc9AieC45mhU5UzNukzXqd3DXHEXUt7sZGiAGiqHcpvPHGsLbWWKYRviDxxCJxyR2MCEqLtpEdyBCLDWckyQ",
  "key9": "2CbVTebrorkPwWUNaeNuxsgWcz8bDBBmnqyaMqJdkVWQu9UrJd1KM4jHh45tPdcybMigB7wT6dpiA42PU9eQ2sqL",
  "key10": "4ysQehU58tMJbu7fwTY1DL7tpgivFKkQyyQ7rpvEJ5NMbm9RDsHDqo8s1UYypQmsi7pwQSMubEdHALCWpmLZ5KUX",
  "key11": "4z33JxgHDBUWsm1RbCNa43jyKLrDdm8BSofRJ4utU9JKLLpEuZSrqpVgqEe3cVPCeYqD3KeRLgDgrU2k9HLNUCaM",
  "key12": "4AUdmy9nh17bCSnXCGPJXKnt2vBCdpvBDVTiZQxkotSksBFGCvwdQvSSeyGQxrXGXtXQQndRQPc1VqToR2hrjkEQ",
  "key13": "59zvUfFHWaBh4QPKrSq7JcszvEAqNgxL6JxXhYMtc2nrvFWxsRoL42J7wX5NwHrfzJwBTzySXnw7nxSkQHp2tce2",
  "key14": "2okTRjoP6WXa5gc3zDkSDWiZzGsUmDBKDHr2NBZnFhCTR1euUCrGfwZUsxg9up4RZWrG6Cik665okWtHHA8NV9C9",
  "key15": "vmb2BFn7CjPW6vuRdRb9HjVu47PMnsgF64AzgTr27bXQmiuAPrtNYJTiTLZz3hU5P8norZ8iuAZxfEfKSgVNsEq",
  "key16": "28Hi66vE6JT89msScbjN8jJNJDt6eAkcAhNPHYWADwzc4UEp79tkwpvdeWBN2xjpqC2Ko5rTaSJhH3ZxHa6xAXuc",
  "key17": "gkaqyNsd2r1FoeU9a2h6URXtjnz85paNaB9u7A2vLA1qj2cn2CiTj9qSgYYVwYa8A6F46ng6bBENodN8x4mHQ8K",
  "key18": "4ixynmWiQyjhUGWKoMcDpwJFP841oNeBwtREpcFqAtqsHAtwWWV3e3nSZymXAZkPKsSiB6SJdQvrNjtW5u3Hj8SH",
  "key19": "269gB3rhvT8NhCN94mMaVwBkoZT8tEwgxS7bNNdK5sY19P3tv9aKQfBZcCQWwmNBUCNuDGMDiFNr8Kejo1dPcWN6",
  "key20": "3y4ZLBQSt1SrJ5oX2n766hSoSLWpGgTDqd8sgR8yibCikXLsmPtq9SY3ehofEKursWGPdwqwutEidWKhByGRTPCh",
  "key21": "2jTxSds6JWMpjA6QEsj7NjTZjzF6BTbezav42ToVZnAhLmxtR7Qd3vP4YV3ofifkQYQ72osfwdL6iwephw2THjZa",
  "key22": "5AbYAwp828tC6fkGdaEpJUWN8AQSojqXsAFiYkXZZJUNeEUjYJXMWpVpxKBVi5vnam3hfpUACcifEuvjcDbjNecY",
  "key23": "5fakKaotMCx1XXVkTwbdwA7uVPQG9KFme8eSjMg31e23Pm3o3DE69VEuNjZLWPSoL9a72YH2HLtbdz9iF2XaHfoQ",
  "key24": "29dcQ9fZo1259xThH9QC8WspA3hCgoCdW6utJ1NwQ4Ayg6SW59YDhtfMkT5B4dwVxesMjGYEGVpEupFzEeziEmJu",
  "key25": "28YZ4nwZAy2PUWMpo7QSbe92ZcehqAFdn43yNaxWmGX2jxwYqAjr5mA9kG2QuvfR5cA87z1acV7xPLZQJQFd1aRV",
  "key26": "4xjjzELUSmAu9jPe8zHfqwRAuJAiNPkMejPwT9GNic4vM24TCWiiqJwv9CeLaD6RWheaswxuy3qBUnd4HyPudowq",
  "key27": "qePdaDhRQGaUtdLPwEUg5QgUWUnqUMphqxRa4rYWGS6we5HYYH39DVQYxcs4Dk5xBuauNkiavGCYN5K47FevLvU",
  "key28": "2MGeYoCHT5yo1ivxcoDK9f8GttZAKZ9VQAGhgDCowBgnjWrXy4ShnWedcau8vS4hWBMn9U6boEP9S9ympc4m5ygB",
  "key29": "5qKu2yDJxMTNUHNeM4rAVR8EFWyPbStGXXe8ko5BpK3vAPoWtYKCGNQkaEgDKWzxnpyvMw6ozcRbFHHpNV4dRrEA",
  "key30": "bVqZoSCfNEnW4PYGbrjch476wM58KJBSkEoN4qYWiiC1hPMAgc8PzMeVZrXngQvSHCZmSrRnBCSJBkqo2NUhNCq",
  "key31": "5VNPTUiRL6CvLPkAu6D837QTWqbewbJhZuHfet5HLGHR87bYudtR26RqjVt3evaiKb6Nbr7ecUAhew9cLvczyC7e",
  "key32": "2H9CF5E7vEjTY3hFVbc5D6DveWymY9km7wGgrWe8ghTbGUr1cHR78EYnR1QvFiYJ2oHRZSMrouMPuzP1wyznAzfz",
  "key33": "4QwpnEybkWBz7GrKt72wWTYe3GWsgJANzbBrQGU5p1gLEGbEbrvK3kDfJ32X871LPjJY1ygDvAiWBFejH8PmjEB9",
  "key34": "4F4nzpUFVfEjPbZBsSH97vr9fdLCeiGo7enuzhYkrLRxBm71nu3wQnDDEANuXNVb1TabQdaofh4hAWU1sTg8M76G",
  "key35": "2C1o42niKWM8XdkJoGnVHxvTsMnFC26mMqojtCpL2NCgxXUZEjeNqc3qeAGhitXEyyajUP7f7o7xc35D3GkCRz4T",
  "key36": "5DSdBmQAMqtmQcGPhWnZhwsQr5jZ3x9iek2dcZYiznsrxcMPKNFZkoTZmjLjo4NxNGoqnvk3FA2nAeEvwum3cCpc",
  "key37": "5vSAH2dZehxwbQkKXu4tT2zyEjTLwR9ooQgoJBXmAmHvYnHUuojmnnJNjx4JPwYnAbFZp9RFivRXTGkH6ALkhdz9",
  "key38": "qezT1cXoT98QCAonyMEAcmq6NY9P8KZEY3J6c72uD3a6CT9KQmf9fe86nFZrJcg6SQTjH9GmUFgTmmZaoKyFWTw",
  "key39": "2yHwqiUhdAmoeCcVuqpFNRtBwHhkDfoKrMYd636Av8eXGVUjojxRk8zaT1PDzuK72pz1KvPkg3FWRNgGzPF7uZPp",
  "key40": "5KU1bYgQDDTRMbHecWwxKcamBePKhjK3p5mH89AgSChTMeertZ3ZeJzB5bHrqaHvPHxVfBHFaLTVwvtShkHLyJ8Z",
  "key41": "4HpxJMDGwFfBG7Fdu9dVoopUmC2aJJBqkYiuoCLtyJTZy7or2dtMcLzhMoBBGHRmWm1NMLfX51rikLUezVoxoLs7",
  "key42": "6QtkrUR3yWd8bdwuYh1QmbA5PdhApKZg8h8NXTgp12N5Q4ZiBHBbQL1MDpXtwkWbCT5xxZmegpQ6rzvHqhk6ofN",
  "key43": "4XagQapusWZqAj6sF9WMiQCg9raJi968cFazhdfGjvajjz1CdmVQ8RaSX8n9u8sZ8hFc6BGY2KTHMQHZG7eRMhh7"
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
