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
    "6fTo74S1ccN1AtJvtqmUbAmLvcnWYhgCXvNhnTkdDF3nyP3ZPsvwpDY4fznRsjSE95xNvSPL1jPh6u1kaQgvjLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63yqNWikBURybVRM8637A65XhHTjxgXfJeH8u5HA4fPxFET3dy91gSKNthtJb25hLnvfWAhVrp3HCRiU9U7baVce",
  "key1": "54BuJ6Z7Wpc8sUuHBWeGhSjc7fbKTUCTv8NseSkTcw56kv36CAhJ1UDC5caoM2vYSFniMnBNWzcAGKc4h5yz7JDX",
  "key2": "3YTMfsyAKtLAekwQeK9pnAmVtm5s9GoJxE12jgJp9hrLahHepQk3B3e7sgJuE4vvt4gu6yRrFs1odDqCPwqUxVGs",
  "key3": "5qPX7q9PMdk9zyvTMkwEAzbs5jLbGVzsEXBirjDx3ZBFrYGi4zgH7b8NhSZvSKLEric94uyMgU3WH7dYbh66hdds",
  "key4": "516HjJRvGgExeKbmS1zpdrzC6sejNpfKXCpGaUTgMfUgmKHtRLvAbxKjJd3YhATQ1ymFSTr1NU5r6YVns6tyRegU",
  "key5": "3tSCgA4zqEH9RYrU2Pccg9Y95Dh7UDR5W9NuQWi6RfeDTaXMZ2Bcrq6hgtfB6RHJe4hFu4sgEsdR7L2WfZmzVZzp",
  "key6": "5RH9ZmTtwAa1eKHq3Mv191rL3Q7uJUi1dcUquexSKvtyXLjYUixFpSDbHm5V1XDYwwpmR8KiadfnKMWbsYpEFDto",
  "key7": "5GdKhuPscXMnxijhit5MT9HtPXR3tbnFRdZEsxj5ZZY1eLeBMQXdsa9TQg3aFkWTMM7LamaasQfeCw7YHX1S16Ui",
  "key8": "4Qje44wEubx6VJrYDWV9J7Lu4yXLCFZ66pNovLrRrMa72AoqDSxe1ap1eoRTnU2guBUx3SswRpLDfRXkQ3XRDmyg",
  "key9": "3bQGJNdt5NCKHJCcFJ5r3tAvCSGjZXfNMduFacjXiA6BnE4V8t9bDPW37N4tEgLF5RUYJ1Vop3YruhLPzc4azisr",
  "key10": "5ycKdEP2ryAoxBer6kzTju5KWjQU5kVWsSVVTP2mZmXj56nWAeoknFjAQXFNkS8xMpfyojWB6ePTxWdTGBufQ6nc",
  "key11": "4TtFMp7UwUjiRqigSUiF1LF5kq8Gs5R5RPSuGwfTQyG7TgnoqVU3RqHK6g6Den54JNjAAKR5Er49xkXE9LY9Tu6P",
  "key12": "54hYGsZwNQZ1iPYZ8tVBUHbVwoL6x8Mxk7R5ivL6qUNm75J5XJLqhjCHU4MsxhUqXwmUL4apRof2X6HEV95wzrZL",
  "key13": "5EiYZRpE6XYVwpZeSAMLjsDeyi2Freq7RB6BzTH1K262dMF8Md6Pa1zMwX15P5a8MHnFUWKdgmR2uTu9omyx9GqN",
  "key14": "2EiYXDwD7kYguuL3soQNvpa4Dhj7MuoRFeZe83qcX2mWZDv17MgToNnBwvwh6MdzHD96hQFhE8926UzVHbamZZHv",
  "key15": "3QhkAtqqNsC9BKMtsDdjn8iJbWGrL74oJaw4FWQDRUpEFvcAaPE1wwfv3V8m4GyppWCLomLbtr2yyAhXp7R7esdK",
  "key16": "4CyoDdXQqwHnQro43DqdYxGruW2o6ydpJDjirbYJN49f6n9f3tWe6A7Rfk8J8gqRYNNwpH8nQ6VQk8k6KuXVNyAH",
  "key17": "n6XmGSKtCtn6TG8GBBhh2gw4YbCRAZ4N6BvxnMt356pnmxRcRDjLV5pj1K8EYto9c6Jnc4gJi24ZhWCh1YRSr2h",
  "key18": "9noMXWk6hhuXmS8dHNYvecft9sFrk9tHDwo5wdmXhPVrNFQEfoHD31hPUpXEEsEUopgwuJEi5eHDKV2mkhnFFFa",
  "key19": "3CMUzSdftnZQEbzHzuMEBJRUDeYjLPEQE9wozHvxwvxLx5gbJ76dgfqCQaTthobRaDuS4FK2ik5hvjCxvnqiPXrM",
  "key20": "5emcjKAg8Z2S5R1LyHNLVDz4EjGviwEdFBYq4kbWHRV6CMfUJThhhGRmeTkv1RnnUeh8KJTcyE6nTkQ2kMGz28Vs",
  "key21": "29rp15UnwMXoprBHCTZz7K58Jb7toWSudkGNbey9Qf8Ew7HaUtHakMiTu6o96ZUCNgBF1RdAfQtY91XEkwXzw4LC",
  "key22": "2xh1e7Gx637XB5NsuYVcq1xH951RqJVUKLAigmLHXh17cDCAsZBvjmRUYngGFG8Cvz1Nwd6ei6KMuRfdHzrWV1T6",
  "key23": "3MsUx1MKFNkvA8KrevZb4XUbnfQ1kArGVe7GeZ58GMD1N7VE4N2Mxaj6iorkaqP31bJdEsgt4LcwNhW5ePDHhsAK",
  "key24": "6hrqu7VJWdzgT43P2xpmabePTiNXj7Ksxc787NxsvsiNTnZ3P3eiXNRLF6UvcRfEVdyaDPsQMhwMNCSr3JbcFZy",
  "key25": "3qAgqu2MfSdTfubHFmdwqAJPR7bCsiFcM88guS7ZFUou6CAKRadf7FFu7yht3yi6QFMD3VLxLBo14n6Sm35fZFX4",
  "key26": "XJ9iGvFwN8hmAWSX4288GrKMxxyGB8t5V3v3JW4eqoRGNATK5KRdhcoUQkF978YEpKB5Tduzn1wqzoHZH55P4ov",
  "key27": "4wVwR1dcXusgn5YVBrWKYfm4Ho1zpNeDFMLW1ECNhxZKzLG6LLWpghtQVsxFfku6p2G1r54WGbXvQQrEtDBnAd9A",
  "key28": "W3Dx17NiuuTuzcax2rrDaKfu64gsJnGfLMo6J2A95JSb97TGYbtvFnE791VhB1HqwctK9h8gQCmh2dU5W3LJD1m",
  "key29": "euRrYWT4Ew8qKVRKkG6ZGN1YanDXY6S1xEYS32a7SYhXkoUjBT19Br6t7qBXcuD6F6Nw38qLaG28VAcJ1vKwXLR",
  "key30": "2SrV4eqHyt9RTMiWcj2A5m9N7cJUbSVkTJX9Xyz3YBQ5vv8yTe28PePy9WZZ7Aw9EUMZWTdXee9JMnvy6v3msXjE",
  "key31": "5QQwFGaAptSDjWkZ2iHPE89L3B9ZWXe1Xwjvs1ZNFNp2YeQEHGXmMDSuJVUaWtsAu7K1ZthJopDCTqakwk4ikL1s"
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
