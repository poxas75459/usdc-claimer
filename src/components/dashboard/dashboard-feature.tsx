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
    "3xQxrrxStMNX3SPuPUCeZH97Zh9wJVHCXCGKNScDb7C62RfGVyHxBwKvEDMX3CP4qt2N3SicNCw2B21trd9FyutB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zd2dg2DKmrja2mxaVPv3DHM6kDe55zbPAryyTii9ud2uhJVWvAc7fJ2zZzz1GV2QsdV3MPzSFT4UEwijxGgqTze",
  "key1": "3HCDR1r69UTYuiHcAT6SnmUVuGYKsNNimdjLFizMiD8QsrPMT9AkbmPXQJQwF7THxCmtPrs9X5rhmWttAzoTzCsT",
  "key2": "3Ld6mSDd3hYVWoK82NwPNzkVBDHVAjGUXLHKC6gojCyTk95w9TjpgYRpCWcKsR8mxFrLsdDxysEHa6QHrEE3C4HN",
  "key3": "3kuA2KRyDpiDfE2ie7Xx2r2Vv75RHuba6thYKw4HTDPYoQxrJiCv65hCp836683MkV68U6qudDDMQhYxXBLd19a6",
  "key4": "4ifyB6HSve6qmejdv7zprRGjtJQ3L8kuKzGFwbzJZTc1HFB8LVNjzZAQMyzyghtxKQG5krajF6pAFdagbTNkEoH9",
  "key5": "47jdjXvbewUJq5xif2CsDxBESFc8wxmiQKF12yR1tC2moYeEDkKwy8DfEQBcSFfNi4oWFR3T3JuSTPRakzhPCtzk",
  "key6": "3EHawvq8dXEX3jh1Mg1Y5AkTxMfmih4r6F2gvCNwY3mNS8b7CHXQyCbdWmbKxoV4dgFHiTyiAumNzdEJMJbcgpmL",
  "key7": "DzjXzPug2WpzkSof73zuNQqEauWnqc9sV4qpkC1VQ3f1j54BT32DBeE8RtCQjaARJbvt9gGyA2V8BJKDVuFkDRM",
  "key8": "3gHHYDxqGVKcgLmo1fZTY28FRsjFK91ZTESanS8fNWR7M67xkesqbuNygJeZYqTWBPzy4xame5AvUjENBUkeLjpk",
  "key9": "42jzKDaqduzsEc44j42cWod3MNWWAzc4t43McfZ5t7rmdaVM5FfDm6g8h2n6mz9TZx6YBuraknRJgBP3CN4irLtM",
  "key10": "3e7rQBcNHSZgoawmQV1PD2WAurEwTM3LyYXDw45FZ4cxUMDtihe5zWXbLfJVpYKkyV8G2gGSQdrbWA1uSc46Ls8Y",
  "key11": "5bDQqea9JsDFQbodkuurtVayNXmEgN5ms29G3qDiCHPdqeJ8prR1QBLrhDK199YhgmjDkuqzhnmR6nAW8DEinNgF",
  "key12": "3MnUDY6uF4uLqmmhEgdaSKrD6rehhhJhadtiiHMLgQtqr8iBMGa5vK3VMthE1gKCQCtYJWwViEAVfDq7MpSZ3aDt",
  "key13": "2XuW1CRGDDV1miai7JNJMzryvu8cjZdsAJg5naV9JfoKYZQHLGCwq3VN34qRdXt4hWbUxSbVGcQagtw9Qi4Txrnf",
  "key14": "3EjCeeYVoSXCsaaBuRuoA6MRpcT1BcevP9iUxWoUiEvQgptHpRtgEdgFuNa1EKU8HkpdnK9aFw5tCnG8aW6RRmvc",
  "key15": "5T2maxM1wFwyNXjMc2rz9B1gHZxh1BUsrUPcSJs5TTppKE2mBgyor9YtJpnjCVNLo1KzHzvr3W3rjBaKraWUP2n4",
  "key16": "3MDw5fp1uYERM8PjyBdn7ByHcy2295zWUi9nMaD2pfoMJzMV6SkPi1F92t9aR7RUD8fjvaSkvFafaMCwpYAAjviJ",
  "key17": "5Sc7Edhx9DNCwbysBMPiHhRC5mv4UwCSVggd5YM7AAbUBUR4AxNZWtTLR4BFQsx4yAVTYqu5jgj16qzHXnrLqwgH",
  "key18": "3V3ULBEC7SpYt91cTcnFBbQkWvugPLzK3ifTvxsAwdfVfbLyJeareiHQia3iBxKWGwSyU26tW7jKKfp64FkSKkv9",
  "key19": "3o4aMykMgYSQSUAEED4UUq2WNusJ9JtvwRr4JGC57uh186HDACFTVFWwhArZNAUw4iWVdukcXtdNDFhZ4DLYF4vB",
  "key20": "5TuujkhFiWFMxbpGVNBe7PnMcPG1QTgknBKojJ123hmvb94AoAwkYnBhQ8UJPZ9vT7nuDYwjHydvymoTvnSYu4SY",
  "key21": "3wS8noHU1rrk26SpHPRrC1rvQdz6PiCAZuT2YUfoVTDE4jgWdzWS47LoXwZykrApGuXsbL3b34H174YBPWuZqT2",
  "key22": "DXGj7cd4CFzz2Xef9gNsTw4gEj9AKmjEzyCBjPdiFj33iLpbA9bHanA1Wf3YG8zfKCZMDhiBgE9bGySfDaAJSZW",
  "key23": "VQ8KcFXZgdjiRxjPgWnkcXfKEcT89RF8uxwnD7AYyduUjtX1xX3EtgrujsYUL3RzmrxjSLPTsDFo6e1g2ryxxVT",
  "key24": "GYAqCZxLkjuUrJGMHcpiVYNEUrgmREXGGr2ZwfpmKmRkuE9YQZv8ADKGT6c5qSPGv7sMfrqje4tyAa6hp3o27VW",
  "key25": "2BivC6f7V4x2hibSEoYhA1j1gLGff9z9YDKJFsTFgbgBoQiTcMDaLm6AXEtNwPj13PgQ2KMQaEyE4Qz7d3Nq8kEV",
  "key26": "3eW5BZvG9MGja3DX4yDTND93S9pykK2x3qCpMDbXgQb3qVgZwxbrssuvm8iia31oS9q7APV8zS2A9SYN6f2orvjL",
  "key27": "2pjknUQa4fEj3B1fHhgqGnWXu2AvRik3YtUN6Ujcb8mj9prBxQtMpbcEDjVj2DEyh3r8uQrfTKZa9DpEU6oC8Snt",
  "key28": "2wQ5xGuEu2K2XHPZizg4TBQrJt879ftSiXPBh1rj9LKCrtgwxY4xEjDPV1YZ8VMfGDVyqjm9yXexDqNyAUKyevUk",
  "key29": "2wvqx9uP7EHmj77V8dfB27SH7RLRmZGbxFfkNaCcFaNhKobpBCKEagBX6A9FmUot972QF5uVhq3pPQSQB9eUa4Jn",
  "key30": "4tEmGBN9jx2HsWZX9wMApSj7YCzDh664nNm9tSp96komsxDfYBmRG9T8CrXf5x4Nwgn3A5bj1JNmBGoVDULR8hKh",
  "key31": "P3PZRGne3Wki5yr8haY5DXpZCsAd6CWAXLYFWchrMdrxRjYy75xg4yJhGyJgS9ZJ141qPLsD9Z1fESpqxybexh7",
  "key32": "qvYbaBdrmHqv7fTbjkwoTD9hSXQPJC1Xgy6EtkvKw1hDkav3wkfqPCAoGhH6bNJuzGJv3Bz5Mj7xYs37D3vVDo2",
  "key33": "54EMjyDyFUPoxQYaR9RHd5hMNZMELs5mEYAcV3KAyeEfswQ91AjtU6CZputGiDijJygSCiNkuMag8syrRXCbksEd",
  "key34": "45z5555k5Bh1CqxyELyrCd3B8DpX5kKNndmkzh6h7GVdNTiXhmBvLonRTExyUzBFEkjZogBi4P7vom8iweqQgPtw",
  "key35": "fhWreaiqTD6ivYfYmGyMwU1V6U2WHnCvHi7a9532t4vgS33nBeqSJ5K4Ajm8uHLsB25xDBCzEfhVEafadGi5neC",
  "key36": "4mPEvpQHqg6iuojiSMpN5oQWToqUDSpuCkRWV9Jj1zSAASYg3uW1mYvtdGRo7FsE82QJ1JWr6mVYbECRDB2nWssg",
  "key37": "2EH2mo2wzaN1vWzP9VEPi9MJQV1YaLERaaZKDHLoSo1TfaK2VufU3Vc2hSvHYDRkY5oz79x3PRC6atyjuahPKGGc",
  "key38": "3hvrGwUTty9ky8xwicyHvNXRCGhkNehvjAEh45QHcfkC789EZeiHYycSeK8TdxLTp2P1C4L37QGmv63aDoKiChNe",
  "key39": "gAgn959C2WYn5Xgw4DMX55SVWgSJ9wkjCzAwcsCPAY9q7bLKPR4VXWP3jpD6vRZxhPKb8eqhd44j3itLDduhuNd",
  "key40": "iYdqF67MV4nW9VxyUiBR7YvVNemJjh2fxF8LQkYsBuyh27NrxknRqprWKpnbzfRcScKardzuX2BB5fo4hYLkPtx",
  "key41": "48atpof4fNcngQ4JrTbyRt8fZjeRXcRA4jBdCkkxrivKbENbbPuWBWEZJ6PHSBBx537gmwzHz3ktQaMif5n8covx",
  "key42": "4e9xfsnDrho5o1myvhC536UBDfdPMmX6AJVPf7rTkP1oaX6vBEaipebmnSjjgeeciYtkbnPQ3dfqKXtCyHm2AzKD",
  "key43": "4BYjxbLzf8DVMfq78B2Nj8jt2waHXFgocp1ZYKGq2zsj88e2U2aQqanrwaPatpn2JUi1Xw9zwxYUNPcXgC9Cz9sz",
  "key44": "34HaB9uPXHV4qxVr5BxSgEMMCtFuRfTCkAMd7bkKgmbZ9VCtvkEhT6jbeRkfKXT27S1qwCDY76FXf1tEYRrqLvCW"
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
