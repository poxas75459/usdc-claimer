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
    "2FmKLezQbcJEdF9FTMipaBr4mxL5dSzYt4k3ZoWfELxewYPd6nZBa98qZiYrcVeF1oyju1GrXu8H985Yqpgou2qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfxRcrQzSXRDL8jVv1JoMBPoSoVnKrCnSPT5Wch9BW7H9mooDAiEt9odL5mkzJ2vrCLjnfGYtxobKs8xxWNkQAa",
  "key1": "54CBAmzMeo5BPDC6w1soA6MiAsS6QucSCZfg3TG5ufYbKsDPDjgXWXCywkqZhi5jDKCYf3Jf6uDQSavVx9XdCzTA",
  "key2": "3iLuMaxWUHRtQwoZ3WTKNeCbXBTgpZb73VcavHjWFKVvrWr4oQ9paBoS9JdLwuKdcyX7wmSwvqh7jutwAKxRs4pw",
  "key3": "36ApKvGqhmweCECuBEVYLcgfaaoA71UYsa7eV8QeFHoS6LBHz4429fPTsUU6s4XKyfF2HUeZnubQAyeWauwJvYMm",
  "key4": "385q9vj9g8zGFHE5Y3aKaewKQFSzYgTcverpgQARzdu7mVSTJZGK1Jx8rJhyd84SCWgrP6nCvEMuYDWZAyaRuqXB",
  "key5": "3Wdv2ycQZspEvfBa6Kpu4sQsa93THtgPZSPQz4pRExDaBJWm1ZWDL1Kgsmw6abqZUev6DFqBh54kNnczPZ1m4khY",
  "key6": "5cbJdK9u2PPxX17tzeRrBegGmaRcyYSPAy2qm91rengop5QNuBxt66Pxcr77xdfzcFxLhtnoAQVjFHU92QnX4ZBJ",
  "key7": "3GiSGP6hDwDc5jhJRRayo1fPCJubFn9L77wABdb6UJmhwWPHZsvWbJ3bs5uDqZUdwJrHKm1g7YdkR2Yu3yoTw5tF",
  "key8": "5sVNoKxo45MQw9zZanGQ9rTBdjymRiV4YoTrfY91nZLJg7Yb2WTfgG7sYeXiwbwjzorip5ohxddpnbPVt9KH2ccX",
  "key9": "8btjgjXmKYPVLiLXwGB5bJRhyCKBkxocasECXAeLKyA55DJxw3DSYkR9eMDwLUPbgEEcnHdzrrkeD2WD3BxAg2K",
  "key10": "4kGy5Wt2xG8dgTe2bYxJVnhdmyPr3PJjWocKN9XzvmKAYdiWxbGynZXy8Pns8sqdJAFhdeUiT7DkfHmD5PtiPDVK",
  "key11": "4Zs9gWGnnNmvgEhsXfqASEzKo2Qjxbv7wFdSW7KpYJM9hQyqKS7csELnDuq2jDLArbx2aCYsmyqYRF6kigMG8Ro5",
  "key12": "3QoVkLQ4zjhw7qdghgqGmc1rmDTXSEeovGzfCKvfRYwtnqk47aUq5USC7jazwePLbJwJarhHF2UHLsrKYtHnJxKo",
  "key13": "2cvsDnFg3n13H9UaY2ytGuF49ihDBL8HczMvqL5prQsSoRJP11XbDE4cmbYmZd8NM2h3CfeLqb2P9624sS3McYj",
  "key14": "FGZH39S8gy2ZEavY1CeJneT6CLpehzd2GbeKmMosZbrcSULW4nwXwXKp5i3oCLbncyGrmUYD3wRSX91gCRhzjUa",
  "key15": "515XozzfkbdUAbo8DZJ7npaB13xL7ME62RcHP4vuAYQsmTzAg8ZXJUsGE1TsdMtBKZmnzS1jAne6Tp5w6P6qZpEG",
  "key16": "4nvZhe2axH818MMxNK6u4ZVLuWW4eXZ7DMgvFuDCD3rRGGZmnMAAFDVRPmcSGEL9XNfXdVeN8csN7ZJzhVKCMVqg",
  "key17": "5C8tCYA5GRCRoEoTiswBjKnTY6PRSsHrJGtmMj229RrUuGfRYFmbFe4sx8La5bvYMxzEGAokgko54u3uBGW1V7w5",
  "key18": "3oXt6mcfLQXHr84siDNCP8N5VPCGLyjRzTrt5nmRbFMzaDAEJqTdQeXhmvapcdRg6yfEx3QoQczy4b8mS1GccW8R",
  "key19": "2CsugfA9bDNiXLcijsfGKwu1Kv14Q4BPCMvrKD7KATuaUnx3hG9FNihk69rGMwd2fXjBBmYESGoWdciViNoMJVMC",
  "key20": "5QmNGqUso3cx8WWfzNRZfYaDAnjfxrNRF7hFHjVEuNrBtZqa4QSgw5o1jGHLTQhMJX2wyVi8f9z362F6sS3KtDgN",
  "key21": "2zFiNGzNZBt4uX8qjP5xGs5tnGTyKeBSnezGTsrViJVDkZNbwZGLiBwsPzTivveDQGjC1AnABJjCGtJshoJVdPbJ",
  "key22": "344ZvAvnqXnhxkn3jAqDiZueDBGCjqgrRpWPLoCAXMkdDN3LP8EGLNpwBBB2D8uYh2K28FWy8EvsLyrZWwECEPsB",
  "key23": "dVo6Yg1GDzRhgdQ4xYZwLcb2wD6P1ysuJzNU4iqKZMRfeVzv2T6GU3TXCgDvFXs4XKNA1erjUnY5AYDbw2kQM7m",
  "key24": "2Hvb4CZSaPX6EhmQCL533U5FDiZPHarVGnpcN6hv6uuK4iUVDsqh7WE9ptoP1eGV6Cz19HftHregMBDTPmBbiUME",
  "key25": "2wMcbLSGcExqdZ81KE6Hb4Bqxs79f9qLZXS5U2r1Y7bnHJceWzs1QSkhHA9fJVrZscd161wwiXxfAQ3TUmimN31i",
  "key26": "5q74cobyfvPH9K5h1NRjUWSmNupfSe16cMv4iEzf5gchp9h6c8xLWfxf8vtiy726Haf4HZjJfjanjeCHNaQ5QPAT",
  "key27": "2HxLFWnUDBes8Ycz8LHceZtqvqtcrfzi6wUfxrae4K1GFRoZzw9oJmt88TUnRPzXLpy2ERjd2RCHg5We5q7J5w6H",
  "key28": "5LXH2QQHN4BgMggNLRpd2z1HXsmtg15yRxJ6pBs5aD8tQwiP2BLmtRbhuv6QS7fdPi2CqbUVHzdyKwcAmEJvjUJ4",
  "key29": "5Xdo2ET1Zeg75vasZLwgv6bbnPEEwwC3Dz6S3iJNP38dEgsRJFtze1WHwcHRLZLrJbkrpJ9NZ6fjMKLT9q6RRBgB",
  "key30": "5gK6wkTcneTdVib86WG7TkFq2S3avpeE1AFbf9o4SQTQDbSgdqMQo1bVTNwo6djhmFQAP2fXreZkpEXd9cyBqSMm",
  "key31": "2NVRaMV4k5bdVMRwayGPmurDiZFZ88GnZCUvmgHYEyHDGmqhoM5ndikG98BuQrs9YzHBJNjEkzXSNE3HuhWgKNS2"
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
