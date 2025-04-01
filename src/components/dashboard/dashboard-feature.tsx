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
    "58UamK9Pp3dMSe9hQ2HsWf4LkDkLQpYd4ei43uTmwtmEW7CwUTMbzVB5Ho6NWZ8gHLeiUKPQYyupUWkxSXWQxqVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vx73ojHidUtW8kXcJ4R6ygapdrUGvoR4t4FaHMy2cEqhsBDaA3UVLdnodDn3GhUVYoz4vjyyKPKjHrqsDoAygR1",
  "key1": "4LBjAwT5cWjwfr5esqdq3t2aVqZRDTGH8gqkqaJRvZEqVhBACReCrCy4UPjDFy25Xe5KEVJpEQnnid4aR1everic",
  "key2": "4n6qFu3HpbkvC6i5DcMxcJVBXBugJiXmjhMzz8G87imtoyR5ua25xx5ofj1i96Ao6PwZy2r8C7zPoAkpiQs5WwdQ",
  "key3": "5s8iP1qvFWyadQiaY9TdbNrKfT1g1Z3t8ScNfjGrV5bA3ePyqJtsDwxdkvVNnt8GENig9vQ6zi1GeEaUb1TfCTVm",
  "key4": "23NDo4FCERrvwSBnB9mEHcxxGX9xkJAmR9PWUmXGK9v7DJPExfX7TSMLcUEF5Cri7imUf3ZRCPdXehfwDz8kzmp1",
  "key5": "4p62VjZUFWfRCK8d9QwfFnnpAysmvBkfja3QUSt2Hyhp7rP1yuSPwofgouujcQp3htYU692Bu25fT4DvLWs7VMJE",
  "key6": "5fCsrtGL9wKprqhWhwDk8qJmBcPnoD98aqkYjfngdrVofHDMESGJEZNTcULEJ6JN65bnwgULHV3aWG6zoLiC41KE",
  "key7": "24PKn7NScAWd1EVZmo8P1xmREqZepiM5EWVqPxrNMAuVALSsZfpGwNtUVvo18b4AFRdiR7Yvu3UtenHR2mWYgfoG",
  "key8": "2jpDNj8EYpFNPZgVaCHBBftf6UPYGQHiC243iiDPL9rj3CWsYZMqEfw2vamKMk5nmAzAsZ6FMutC3TtPCcosocZq",
  "key9": "RC5oiFy4HtJetpBq9viQGeBoU55iB5GMRQGQ9Hvih9Fc6VvmhNf8U4RoG7ZVwbXe2SVpT43fCJhqWwKGALiF46L",
  "key10": "5g1xoCqbEaA6srkWkRvbtivH7tie6Qrk7jmMa3WKGGjctcCJmfz6hjtTvcjj8x1SPXXUpt6oDX7WUpKAhZA5rg74",
  "key11": "4qKEzCBba7K1ZaCKWn5XEGBcupwA8CDyY3nGGUuChHkourmFVApC5Uhe3oNvCpfuBgaNQBDkQfMW2yJ7qreUn2AN",
  "key12": "MGM69DdTGc6N5bbYLGniJL5pWZW3X5MpcJUGAEyAUXypqnsgDQKtkWbmSYAbF8MmX8XKVMeXFRpNJKLVag21o5X",
  "key13": "PMaFVYeA6RJeCLV2c5oskDkJMEL91MCoNtDMDP1SypZRBTQrhB8QC9upoPUDgZegDrFmrE1HUHP8nnC3hG6Js2Z",
  "key14": "2Kyqwvsfks9W39ArCqLUNp61cyLpzAjxXNbM7zi7byFRkdwVxGVWgqgDcKhaiHVQLxt3Yr6jngm7SdAPQTJXfGZk",
  "key15": "kNM1pNdkHPn5Ub9kw96tDkPgs1WY1T9ME22hEPUs9ibgkbwzXciLUt1D5ZNNnFMPddumsGXmANZErwBPUV3UZNJ",
  "key16": "7CVc2eNvyvSNRvNF21vAKPhDURyCZPaZ7Qzm8hT9Mtx6RDB3q2EB57S9xPqF1kiWCvbMUCfwHkd5qwToMroAWCL",
  "key17": "NBRbhUwvEN4MmNeUn92VKqzhdm65xM1d5yAWiFyddZ26hUbtybMVNjyiCSgSuW5Vj1Co9zSR5bNn6eoEHtHehjv",
  "key18": "2gYgtf7ua6zjdsRJWw7y7MatLguc17idPX75tkciFMgxGTXybpMGnT7vH15Xn5dXKT5gMeqSLkVhQPfjm3exZJyB",
  "key19": "35CXR56rbsg2utCErzjca1A54kofs2Zv86fJhcu4PJybn8VXmi5rZ6GGPXwqVUCG97EotozfEbgUYmkheiiQvxzA",
  "key20": "31pB7hFM6ZixQgiizY2DeLBkr1j5DtTS1dMDosWBd9UVsXtep6tNJyHGbVLjfL9P8JvZM6bQde5egq1NputF3arD",
  "key21": "3UwpEbnVbUAEPWhnHiniZuVzfUF1cMjQbxmUVdeChDSKG5TfQfGKFHUGzSSTGQVuqAQopZvhnmXV19AvkB6bDSZq",
  "key22": "gURoEUa3JiP5gBNXLYhk5XVn3ux74XH87m5AB4bg64MJvZQXjgCsgaN48z63n5QUpijJYbGskcgkUkQK5qThL1j",
  "key23": "3f172wFE1rYmWKcN9rGBN164GdaQUXTzxeMmSWQWrFWyfqnbXN2DKx1oJhULkeUxpzDuHf9X2oNZF1VHZdLpbqix",
  "key24": "5xi1vtzoP2MfLU8uqaUSP8wG3LiFyeBzMzGYQPa5bpJZWXxTs5tYzW4Z8GQyJEFXC2bgxefX41TkbY2nqpB2CANb",
  "key25": "7DgYJyu8855z699AsScG9yxNKnGqQSGKTPru4rVrBzDzkiyRACL9fFd8zTfdDgL1WLhdbpE31wc495q3fJVgVTM",
  "key26": "4jsmzAgik3CXiPojdtd6j7bRjakd5WsJQ3VH8qgh8W9qiVwYnt6KcJ4Qb38Mcxyuyze3oAnrw7p7G15e2reUZhn",
  "key27": "5dB9c4wkxJASKTdNdpN38Rd4NgQ6NyEmaKc1v5d5N7SPmnXHReTfD12v9uVpTQUkUmDPx46dQyi7ud49qBznHtnE",
  "key28": "3EQUZWRZEnu2QAAftvSNwdGAsHFhcikjoRZBQYuJLv6Lsi6J9aYyqEUcK1on4SYW3eGoLdSr9uvNGuESSKxUBPNg",
  "key29": "23CnNqDsKg5eYyreyS9VAajcZ3q4ivBckKTPMRHw3nr7hW5tzNRFo39L5qhRs8UGV69wPbEB7bqnYwwdWtXYX7Tj",
  "key30": "2GhqZL4AVxQc9yY5gWNQ8xmwiv4qcMfpe13snLXqzK2VxZcQXbezUspM8YhSKvcME7TdNpPu7gngrgsx1qGWHfYo",
  "key31": "5PyaghMekJgH98GBR4c6u92cXyEtYXxS9L12CsoaSD7dmRYZEvNk5z6MQP2Nau91bpFcHbTTmnFW34uLqpAjyXVW",
  "key32": "47JAYepb537cySHwNThFd4PYZgw94CXfwXBqRCLEekcXUuoPq28MpQ6WWzkMVtGTghDMxE8w9ajuZgC6znahiwNY",
  "key33": "5rToH4VfMMrzNe193jcuR1qsJqEhwBYvPJsBiAxv2HbsSh74n4AVzwAAMLh2NhUnTtxMJK57JeTizKQG8KMd7C1T",
  "key34": "xhTvy9MrWxCXGXi7wzwqipQT1tDcHZMGfWpfhF49SM7D9za6TozdJS82ewZYqDSj5P3g6BBasEryCufAvsLXYoV",
  "key35": "37k6hGP6QQFdimgdT8L9J83Z1T12h3TbaXH1oZjPQMdFRZfSfKEq5kLcvzsvgQHvDxdaQpzEGf6ZnNt2TvxFvKSe",
  "key36": "57dRHe9Jsk7MjZbBjkzkQE6RHb3ymY3DXfhuKT43nKB4w8rwRRZuU3vZ5WrTamST55U5L8JJkwo5skyvU2Pv6xXZ",
  "key37": "2THNNJ2VzNYZRccZHnTs7NWF5RXpSUgCggMbY5FngPCKveVsGQrHBPckcBfyemVVMU9vF5DR37FQuT8PjwuPtUkt"
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
