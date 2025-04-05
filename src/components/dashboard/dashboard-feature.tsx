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
    "4puca6xXhEywgC8CNcvZbmF38K1MAiJPSTwFHFkk1maCPZ5KVqpscpLaTLvFfsk5BUSUZUDEEe8xVhUnd1G9LqSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hdd7Rh3hzfnsBhKump545xrtEQDPF12Ummrc8wjKpTCDLMxSffKnVS6czEfMUYtJdcK2hYmPPEvACr5xpzcCrzv",
  "key1": "5YSs6ChFzn1VH2GrMhbC8RAmQ6cKSAvNqjuonhYuT2gMRPbtZ9qvYHghmdvkHNS6akr6gxKjRAgEq4UwiXDsfSf9",
  "key2": "3zBR5npMhbThdfd5NufBFfJtH6H12bQ9vFGyUh7PRYccTswLxGnrWqwtYN1nW8Fhgut4hxJszj9tPkqAqkcxS7E8",
  "key3": "1tteWbU44oL9DSDaFYwgU1svL8PZYBy9SLFUP7JdCgiYv83ETbDSBgdY3hqY3PX9ZQjTMEv3qSN2uMBw3EBR8E9",
  "key4": "5EP592aCuR9H9i54zsswhUrok9nQ2f3aWQ5kdfJAaakHf9nxQkFwiGhUvSFHgUgSnP9tWMHvZxhXpac7GTyjx8xi",
  "key5": "2SyfKt1KsMH1ECdeNjckcxb9SzE89HL8Jxqx3utTNuQDr5rxUotvnBmUkk2pBH7MgkrKstjLTnhMJQDhSwJAb4hf",
  "key6": "55Ro9Hrbp2gn9EwAuLRtywzt1TZdFviRSTo89iTJPZG8p8HuoTfPWcneRMpsJhyhvi7baqQrtAfmp7QhRPMKCdax",
  "key7": "5cMD7qnmuR9kxy7shS8Yjs8VkvngE4BMszvTgDhQ8GPHfzHAkQCqxi9Nk64Mo7SQ8rf8xnaYZ7zQwukyUEqABREX",
  "key8": "HQfkVbR2DhpdDgRRTKVL8ywCJvS9vcQa4JULV4g2TkZvb4qrgvShmUZkmJ5qyVUUWmqQrAu7KN3LXTU6vFDWHn2",
  "key9": "4XRhsHWPR6YbAjL4kzSW48NU1CZjcxy9yGrMVeTsBYtvKVQAnUGSYk89JzmvvDbSHn6ojkrr3bRtYJEDTsPTPGZ3",
  "key10": "3vvyK26ZfxKdoftKLjmPjef56N5CsyrVPTSPnrEPsNyUiuKuwsEocNespyKTkmMhCZpEzQfkU7CcjYjNSRWpiF9S",
  "key11": "x7yaiqr1pgZFeWPMyiCDdJjRtivqB5YHmgCKtHHJx2tCh5TrJraR69aBa8hvGLtaeeDGYQsDQEkjVDk9DD9HPb7",
  "key12": "4gp7LB7qw9nuGtwi6f31qUX16GBcAabTBga2Ku2yvmoRjKN7tDVbdQFMfTrSdxgdJ5kBh8uUeWX7S2qZoJrJXDK5",
  "key13": "4SXJ9QP9KERbCNRixB3P1vaQPhxMw8rWTkyVFATwvXkoCsLy4Z4kUZhedKHfBZdzRL4gEZrwPCttuFrAxHG4Q62H",
  "key14": "T1eQy9DVD5P9nFjWS4hC7wtJvRP2LCaqXgQFTgiNaxTtjpLHiDZZLbfeFr4aEwt2em74pqGYSwQjQJyxEfvGfFz",
  "key15": "XKqwz2mBb4bMXyA9yVm9cMb76gS8rBEZu7opBUqJ63CHbgoQb6jJLoHS1HKijRUEUESwUjWoZDApT6YhMWAGMq5",
  "key16": "3U1w2vzDRRWNQzgMX7Z8oaQ5k5CACcz2SXJHuo9zoMAzWL13W2tGo3qryR7e64h2K4fysLo8Ddn6D3Yw3Rn1cdyY",
  "key17": "5FnnEwTmdKwANw68WSumCrQ4rXzb9wCpjdQE8peUXV6roB6TzoeKTcHYPSMRSJwQcgJ9hmsugtMQydpQGwSzHsHy",
  "key18": "qikgrxfNfd6EceTQCyhUm3RkuiPiDyu3zCse7B5THQEG1bHJVnXLbdirrX94DRG59AxKLuFpE6mMpfxKx9cXt1W",
  "key19": "2MT1ASG5GSp4A6bc1spsrKt5ooSUCGXzkScTSWiWFi1h8yjh61i433udvfUGDHEE3DYnwhY7bb1iey2BZstenhi2",
  "key20": "44mBCh3zWBCqXyQWrVUSyXVi1wxjU5DfmnMq8RD7kNv41ZzEtfNScvFVsUACWgkmSv88yT961kaH2PQ8qFgoFwZu",
  "key21": "5kH8MGqEPfenMzm6TzPtHN1Zs4s2ykL78i2ErZj62FtHunhuppE1bF2LnNupz8We12HhZpqyQC9aAdk2BsgZxJMv",
  "key22": "5E8iquyMTXw1yhbpGViSwyDeoeoEuA33HfqiRjxuP4fxHSS2SaBHXzHJQfnpQ45JpbDCqmQT7ZdaoyS2hz1SBCA4",
  "key23": "poH34w7Ci5nLp3emMJXSKS8Qd82TM4QeDyhSzuaYTNWf8L7ipUgrHEDxyCQNqpSQvuN5dPVMnVkX7hBF9GEueT8",
  "key24": "43J2rbXcAf45u1w6S6dQGMa6qDoUvRVpMATwPJuSgAFEeqGJKZWvGNGf9pCYU6sZKCrkBezW1ukdp5VhZGRVTv6j",
  "key25": "XkyPfyJuDnzFR6RLKHwQVqt1eV1oJF5i1fuG7vuRMAH1MRACz5U76KKoV6ivTHq5uZgzdGbbxby58zPZLWfBoML",
  "key26": "64VprD1Nk7onoZG5V7eE2wpLyuq4xzi22rhESnoqnencdftAgssS36GKy2ujsKJPshwBN2S1gEerxRxFtvgF2sUa",
  "key27": "4XaB4bZ48MRY8K75u4Texj9dbJo7PGopW8YEmQmsFC9e23MqJ8iDscLW8Uu1J49wgKafP2qRQTUvycgzrmeKWmdD",
  "key28": "nRCTTS5tZetUccoW6x2cVeJKQtbDe31qXQyASN7XavStNRUCxT9YAT1Ng8LDxNfTb7R1ZTdLBeRqAyzuGk782HF",
  "key29": "3KpVvPqS4ETkF8CBHB4QJJfY1LcQBvRygfFGvDugXffCGmotBKonq56gW9wqL89Vf4HY2ENjPVmzBYFRxQHn4mX",
  "key30": "5WpEY58i1ywb5NRVH4Sa3RAWMmNuvK5Ztiy676KUmc1kRyoFCM2cHURg4MqB2xHbRvAXGAxETNgydtwLED2hJuU2",
  "key31": "422fmfbMVMuK7KZTokJfSGC1sgrDfoDVzeqvegiSQf6Gg9ka3EouRc8av1WP7HAoDKTHAAWFogXFFUs6AChRyTQy"
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
