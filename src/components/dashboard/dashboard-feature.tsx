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
    "5YWjieoSh9W4PStx5djsw69vjfAMim7tEyPJbmTBdUKvvM2svv2Dj8RX8KARJGuAiYMx6FhpKSFKp7xmq6tjvriV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mUV9kxmBgNNXHgrRXFaiDwJQXXSevW3KZpJCHsTVh3dPm1m4VUtRiTAqAvJM2o7ERsWG429j6p4Juh2q5eqNV5B",
  "key1": "jwZV6G3pFSCJYHEfwgonVHzYaE49TS7gRZ21n8jgUiu9xQAuyyQ39F13G1D1bAJrxrRNpLknZSpp6g2hZ7bgUvu",
  "key2": "38GCaz2PgBtjm49NtTiVKLTNLSQv55UNHD3mURaHPdTRpEUbbnMSjAb9d35WcdzZ13s9agPAfdHAFgXQfZHfVV5j",
  "key3": "3EthNGL6YofFD34ztDDGFxYF8vq11yi76P68atVH3F83U19ScwjR5D4w2q8Zd2btihfAbLa8oC13NTDnXEjXtBjK",
  "key4": "5JzfDQv8zw31mLcma4F7k9kkGNYmUvYinuBeHE1crbsJ3FYAtVX1rhg9A1CTAhU2F98dmkayViCDXC6io8ooried",
  "key5": "3AwJVcHFMJwacSJn526ZKx8PbTuWobP3xF3iA4G2mC6Z13P5kNArjFUcUunaccowE1AyW84n2MSKhHna7uCQAQNY",
  "key6": "4vHc6as6E4J7KpWg7iUvGou2frx1SFcKgs3oqcqnfJouG3PR4QnfoipjaCa3APj2DpKFknpR7YPo6N9AfXmqAVhL",
  "key7": "3Wrro4nNSQQRBj54TrbJq1m29pRxwKQxrzRYKEM3C4WeJyKhv2ddcPdA1S7TS6sH47YLX41uLAjY4ijazPBTntY9",
  "key8": "cKyiL2RP52yWM9oe1UeXAbhmoeUGicPMwMduwmTJpBZwe3MXNsxJ8dVnDxQRKMnhj5kCqQVCxzQdBmDYoH9V7ge",
  "key9": "4WAp9fyqjuTcGQV8oL4Ds28hYZtfTXKpaviAceEHL4v1XV7qpGQ6UXRg16UNwV6eD7H9KiJB2notSqzG9xp7Czu",
  "key10": "3d1yegqgLjHZAYdB4N8TuNP8xzUjKndx2TkXUH4TrhyNXxqchp5qXVWfez2j89GKCPwQ6D6LMrQbH138o7oXqoJE",
  "key11": "5PaLa5oATCieLNG3S5QFursvU6iNEdPgrMHXrT3zYxaf3FGiKnpnHNSPUM9pNppdmRpAkFFd2QzFoQ96xyyMnP2P",
  "key12": "2BUw8SvZwqPk1vmgKT98iT4eRqsN8zU1cfF1FrGS9Zd9WhV4EDtbPFAU7HzeR2ou6QMesLVoPRdMYcjTC4LUezXi",
  "key13": "4P6mVw7zpYwJbwXeYmHeNRvAVJoh43A3ByFJpq1nCsPe2y9kn9L7ChehEZsfMWtq6Xqf4SN7ECUnaGoXMQvSw2GE",
  "key14": "5kSCEWfb8vRAQ1EpncFKW9N6jwwcNUihWS62AvtBnT5YCUyaAzoUNZzbEbpUEcesC9h7USGRxFLp5Wcy8eAeYqGA",
  "key15": "4km15zqNXQZQHNvc8DESiyNNZLLBoXokx4qjUgdRse6CjqTZ6pzbf7xGTAhy9RjY51CYf4rDnxa6XGpzjSiRXnL8",
  "key16": "5aQFLddXr2jf6kcYvkbQVKXczuz6GsSVYUrxUd4ZKAXmtGWykamzeKtzDTCAJkMSCnE7UVQ7JKkRVVQscLRXJBxo",
  "key17": "JRKvNmCrsLxtKmKwqZE6H4jEAYkamcEhUUHVnXkgtX5NduNgm2vZHpoLXkvNQG4SqQnLbSTsN4m1zKzPfhZ4fWB",
  "key18": "4rqA76befx8JVCALeGCHpXT8K6YxLdzaJH8r1Up34ZEKhuK3LUYsaqGk81RyxZZ2gTP1vsBerrT2Ex59D3ws4zcw",
  "key19": "4fiRq84VwrPeboEuY7vyrNmhGuukhScRQX5rHzxJ9V8pqfLGCEUrnx8xNEYvERBwNDQc7MDqa6xJ7RrCwUaYyXEX",
  "key20": "3iUqAQNQC87VtzFrovfwTR7497btN3mKZmMsEizi9LYEfJ7XmfNDPnJUGLEFv7Wdqobrq5xewKwRW2FonebF31PX",
  "key21": "4xYQQ15WeGiLgX1di3uMZdG7ZyK1qdtn2Sc2MBW5BZyLzuLP6drPpxeifWNPhLzCxFwSqWbSU9rfiDsaUXzyBv5",
  "key22": "3QgwkhqnnSVLwiapfzMHwjmzDWBwbU12jdwtdrJ8mxH9REXofcHUT7tgVAGV33dpiT7Hr3gR3d8kHgDT9NKrzUJZ",
  "key23": "3riKf1g9Gd5rwjjryM7eFFRGqR6bqSQhhjAVy9zr1XrnP6maxBL8wYCJgg6s9drsEyB7632xzMwpB1R2FJGGtuK",
  "key24": "4ZPeZrNoQBG85M8sTbKJZiEUDcL5RBYFaz1a2CMtwujD3pESTShRRgaJyqFfLJSNHkNxCtn4ufbAK3MBrXV1gJYW",
  "key25": "4ceUSCWm2cV22GjGYzQzDba8duHbzL8UatTHp1VK6CkHG5VYpaDeSMnP5LRF6FbB4jkbhFoqvgJXUACQ2nijtcNK",
  "key26": "6NTnHHmiXqpqnhGnYRJDpSLAUeVR2UgASH46iy7HZd5mgrFDVTYQqDrwLgEVAVr6noeHZupaAzbfX6RKXDQMPqg",
  "key27": "uJmsWMYendMHCo7SDdpvvyConNGyXgmCuK79PkZ1rRAFjADTEq4TdNNgL4AdQ3dVV39iZnSiMkZ8j1XBhAhYbkA",
  "key28": "4ARScesj3n9YBDthUzLpkdJapCLqzee5XyGYe9k8qFKdRbn2McWMhyFgLzvseFmXherSKxeLQbxNHtdtKnoikh5W",
  "key29": "iyppBp8Bd1tfyvRB4aBB23dXmbN3zJDngUp1Bvad7Lm5pFzZiCxq8vrf7gZsQCwf1qd8xHNCbLjGAqSNFxCPxgR",
  "key30": "Lvdcw1Y5KLTSAavQxmvG3t2wBeNqwsiz2ECDgVHHLnQemMANByd5ZMWKMV5nZc8NRxvrRByjfbEVs3Bctw4FrSW",
  "key31": "3nwWdjYbNhVQXUoyTC1zaoUBMx7ifazvP7T6DgHhWDKsXN63KTHJkY7pghur2Fd9mUDdYofAB3S36FAeUm6Yjvno",
  "key32": "2Ctmuw65Nx34rCAkmAN6pwN6rpnoEL3fwwPdqMoD8gaQWWm4TNxSAZVP7iDiyAoo1FzMMCJdRCopqkJc46bMGwGN",
  "key33": "JVhUMkVitmy1BXDrDZXcatFuSRf36ksWL5XJ7mnEk91kfrkLzaMLpXWhrPcw5k8jqMAQyZHUuzvYZuVBMhSyCos",
  "key34": "4w18j6v5wWpX2HbBUi9C6diEYMxKJ6KqBoYzj35AXmJVZBae8VcP1H2G8M9KKFBNQdypwou3dPT3FFvU6cFPUTwU",
  "key35": "31PvxWXaht4gk3jHtyjqbjMSbYAPz4riCJpjNWYGeDCQUYaigXoBNNT4mu5n7cZNv5rhvd6eT9oHQiPd1EPFeHnP",
  "key36": "zkncq4SyFRM6fEwSNmZqrUbcPoXEUWb9Qeor6B9U4JqRtydGEsZsrZ4iPcgnedNEGCuMWDF26cepGnMqd7xuJwR",
  "key37": "CBYHM9pdxGyq8JPFJdw4BbT9Njn4ucrd9HAyxuHv1PPgbCGyjLSb175qkhGZnqTUhLmatikyYxnQ62WRvsrE2vT",
  "key38": "4zmtc9duBpDjv649koQRDQs8p9y7nUcJ2Lc4CkYfJK1xs3TWdKmHtAbwMQVmywv44bu9tk63vtky5a2aXSkyUrEF",
  "key39": "528sco7VBhvWJ7EtqAnesRFzCmFGraBK4bXvCojjMq7D7g851j2htA33WFEz9MeJ2dJnUrQdaVAqFcVbUrtQsxHv"
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
