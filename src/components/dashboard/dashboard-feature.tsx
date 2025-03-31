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
    "4t36gVsZSzsWvKLUxPeV6aMpo8c2umdTRZ8diqeQKzLHowBkmyntgMHpxLSvUmqcXWzGQ5in4GiLGieM6aExzPRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZieAbgrnKRrQBCMC3k7LKKL4dAcb16mNmHRMq5ccBfDr1qS9LGL7xd3rdiXojjJR8rXDWbtZZwbsFMtXifi23Q",
  "key1": "5AVJdaJmNC3uwTj8HmoBbecCSj3zPMwu3jLhrgCHUoGCbfxy9Fni5oUHvcJmw8321oi1WBNcr3WKxas7PA2gt9AM",
  "key2": "2TA3dXL3sbGMTSrD3kn8H5tQLM46wYCmtLyhfcrZfMtJP2GwA6qBEuqpZ9ck7nfDveuSsAfmnCYSboUT5CKjTS8o",
  "key3": "4ohHpfFEMh1bdR5e9UWEBtShcKrrMaMJYWov5yS67eGc3ux5ug3azDFkv2MgqaMRxw9aoc166RRJVBsLrZ3pP6Lz",
  "key4": "39vWZWhE2YLuCQ4nCq58wWwkdLK1MRbg1XQ39tSvuJ3PbLR7k9g23PDcQYSyTknjBUkiTbNPoCARCbhZodrXRw84",
  "key5": "3s2BWvbgxjXayRZ6YBWWJNhMmoksNL9FEjLMyS1PuP4hme8721ntbcfjjZzmDUDWcASuRbRoa5joZXrmeCkoJrVM",
  "key6": "DraxMHpGaQhirRrJ28PhwzoSR1YzNxPKAK1w7uvqSHfgWDAqtBvUJUhvoe2go3GEX4LBA3e2V9oxvZN4R6XwShU",
  "key7": "2RKQRGVS2C1s4UPv69ZaeHDFPnhRDo1zkEz927z2PVyij6yxnvW74iejWnFTcDqQKF9S3B45W1AwrhaY1Yn3UwHz",
  "key8": "3TnZ5x9iduZtendLJ4N7CZxoYJfvGKQS29T63Gj6SZtH4hupXmsPPeqJddcdeFpbXYpxtximr5dfJgWhZ1vrRgco",
  "key9": "2fV87p5poodESMY3U9stTVGdS95jNWzoKdYAoyz573NzyDMxE3Lmatddndb9mHaDANrRf9HxmBMQj1hsWBXDnJpr",
  "key10": "4YFQtzKb5HBRQxivSft5bKFCC5w4ezayXThXjxA7WMYuxMVaCjUCUEGfSTBRQmciaaroRsx7yxHWACC43GW7KUhP",
  "key11": "49ZcN5VRszuCWcnLPgqjHssM64qBhWbGPdJyBRnyzPmbJHqXWUr4grRHvdyREu2qtsRjrx9sJYstdadiSNAZMveh",
  "key12": "4oAujrJCq45cNhrMGQGaqx8atMR2cjY64DyFjN3VccACJupJU7reUTF8mnYnLhiuckU6eeHvT2agZMJTNue6apwF",
  "key13": "4jiDJo88r9H7fndHREQrc4sgicZitAuakXK5HwEVwr81hdRBShuFm7rkfhpSTqSYTJv8LjaRQNUDASXAikVctMvV",
  "key14": "5bn1eX1K3W1Szr1csASH4Bo2x3STLBcQWrn6mkL8wHEx3jMY9C6pQ35z3vymi4gknSqTqspkFVCjSaR3A6mtqwrb",
  "key15": "4s2fv8kmdh7iKUmE2kmZdWwSA7QhuwkBfVLbFEwGoWmBQDXUzZQ5wQzV1cC2oj4JzCfNCRiK6LMiAyLSj52ccgJ2",
  "key16": "3jfJk6iJ2wXng47LFkgBGWqzmzFKWzeS8BX9Qs9VvHk9taEpsWgWuRaDe87umpVabhh4ENiYHrZV19aJaJfUhWx5",
  "key17": "4EheZcEepHZ7AGEqNuzG71afHgJ8cuyRzbE5C54C7QBkoC1pHMkSyhsEPskdrev9w8jNPszrUdSynAjGwVDEMRtC",
  "key18": "5yxBM2u4Ck4586EZZ773KEixUZATvsRP7vejxfsPbkP7XUwZLydpn6Vp42j2i3bHBfPiqoDFMupeurEJZtNykoad",
  "key19": "5Qp7qFpZw1anECJrbtys2e3sEaN3H5ynskig5xjtUY9srVViJeZoF972vAV7uiG6rBUDPtvc1wTJinZ1GYA17feA",
  "key20": "2tCnoKF4SGt156eNtR1ryXaNZwjLqZvvmiCGnyBvhS8anRKUqnG5zG6h9LRZgfSUvgod63UyAXBffHy2eUgiVhY1",
  "key21": "3ib32ek4SB7VrZg2hu8dP5YsSWXJfsWmWML2e1vms6z1m5wbCMUDdBXooi69Bkto172DPYZb4vZTQNu3rfaV4ojo",
  "key22": "2NZS8Gh9eSkNzhyxPuyDxkNPhBp2nddShs66CFZsD2d3NEjGAVuh72HQq3uVLedAsfj1aW1iXGfQZy9XGNHi7Dqe",
  "key23": "48dhD4dCZ5mwBhXau32pjW2sta1rFTqtfzCBsZeMHW46DzdQkChwNHnsRetYQzZhXCYx6KgkJRbDHKnTWcyN4BSU",
  "key24": "5UhptdgKRoSjyxaU3dvYH2QNxkYVyeGByiYLxN7EyK4JNs4kpPuhLq55Yo1ePZTXwVGxSjKxLMNccnEosUdVt7M5",
  "key25": "2VTXWtVBDCuM9koqu4x2SMqYTreFJaexhriuFQrAVQy5vdJbk44d191erStMy9V35SrtCkp1S7RetYPtsMi21427",
  "key26": "39r4vpXKJL4bUiBpUUwsHwqHM6MpYSQwxYQV3F1S2tB6vgDZkK59nw4dejXcNUK2THELsFixvvi6XQz8Xucv3iGn",
  "key27": "4ZPa7U2ntgJHcu262TtYT3MaiUrs1Dsh43UUPJLQ4JbNvv1whQ64uM44n2kcjy7o71JkDKxM5vu7fWohQC1yXr2M",
  "key28": "54SBHENTtKS3AvcT8nZQonKMyA18G2zBSmdRj3pDSaN7v5kLmWA719iNQudp3bHEC7WiSjvEL7TpbVoWpDBpB3PZ",
  "key29": "4P1z6MVwLWgxeMWnhqqZuUndh2FW7oW7vs6Z9kSnFCNZr4JXrn4vBTvY2suYkvk2sJi5pdKsJDNE4QkDC2pSEmm6",
  "key30": "5aLBh9GDzP8LbKzkSUxnK5q5nU8LijNCnsX1mjKTVGzwB892Tzriza3GSrS2rzZASjzb9oH1vRy9W9QBoJXWm99k",
  "key31": "2P3WsZdq1CF5kG3tErFUWLDnvanGYS4BNjA1GgwmrAYqszE18obwpvRzw7LZZH4RAuFyATU9CdqeaF6JpJont4BE",
  "key32": "5R4McrHKkX7uM8mnf7q6b1FZzrsQnLN3bgQUrnGa9GHzFgjECZ6Tkqh6Vt3BcqtUjYztKRZSy7ykQ5Dtm9KN2acR"
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
