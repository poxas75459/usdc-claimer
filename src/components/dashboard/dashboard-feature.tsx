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
    "5Fx4JKz1RqZXJLWtX3DZm2oRs648pbkafWSfgkhYc6fxwiQf5UbraMxnFbWHe8K8jTMbVELzM8Vn6rLVWTJpsfWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhTk3AVWTumtoRVgopg8uCNNSsZKusTkZ6bRqAC5LGmFzVkKKkQg5PxRNc3dUEaa9EuR5QHsRUp2paopARiBwxm",
  "key1": "B8HH1DCcyBwCdgwNf4KKKHGXzhVJNL49iEYrJtN5mb8oLXZuHxWtc2p4Nvc6EH19HaPXhXvKEfkfdGvAZ7iJ5Ty",
  "key2": "hYMjFRTKnkEYf4FtDL8ja6UohHUpKyfeeZ1rXCgDtU5bexP6cs6cJtUCESZy7YscdBKddrJxrmSGTNMvhsUZKcU",
  "key3": "34LR46AHdrLhX3ZbF74uq7NPpRcRwYz7iwjZG4m2u75sE6QhyfJcETZn79a78AGRZY4vJU13CFS2ZvLZUtdtU3Ra",
  "key4": "342k58eQBCCEzmfsGsc2QhSgmuohC6X55rRmDkQPM736FtrqLn94jYuCJPMpE6sMEktVtehm9JSebnK48LjqpHkS",
  "key5": "2Rhqq1EP8LNPwmjMA6iyW1YNxdX5xstLn1yTFCRd7hvdcrhAZwgiaugHU3YBbhSYqQ3pRZj1B6qzEDYfME3xyrkG",
  "key6": "2A5oUuosCLaN1o7zvatXgF7RnW6i3Jdu2EQWrG7GsUvGekKChZmscKcko41yNCWrGxhzxhWm8G3W88mWnftubXfu",
  "key7": "2oUTocSdJ49B3mWG7xW5AXiUmnisWqE2uGubZgz2PfXsK8C9xc9YHajjW12NaGtCKsT4YLat3tRDXUVcNrueANAJ",
  "key8": "5jZ8Z1XiFzzPXRkz5m9tzR699Vo4Hor2itv3kfHTPhVUy9riwiDrPERZNjWvZBZD5dvEy4HSkyvXZhnW6HUwWHnJ",
  "key9": "DLp5u4eKn8ZRFyxnURHaSS6nTdU9as7SpiruYbdR3aUVnd3aTYNqBzkCUSNmgT9fauEaK1tCkckZTEQSZKchS2f",
  "key10": "2s3g89rn9ziboUfsWwYsFPKD3VWfTc4wP8TTQRx2jmQtiJd84xwyLbKYpXYBhgVPymwN9jgsoesbfgiXZKMc2feg",
  "key11": "3k6wGfwXwid83a1VAcaEhdKsj6szy26AyzVqfkH9ayHFo81FQwsiZNkZyfVzDKAdSrJmgcwKbLiTgtEV5NivSPyB",
  "key12": "3vvpR3iKoxzh9S8STRiQu8s1MtAbfhwKmwhAB6n16GLLznLa6EbR3kCzTMEgxekGhSqJNH5ikeoZ5qFUGGwoi64Y",
  "key13": "3m6y2dEwhbJyVBBvj3hjTGi87QYbk3buLR5qvRky4t3q9FPDNScdRawGDtJCTDtcb5TwXjFD2w1J2eoapbXB9QGj",
  "key14": "5kWG7ga1NgheZ3cHa4PATMVh8wM1XpVEGP8mhjJSozGZpuEmFpQmdoygUT4n54s1kpGyibq2iLpG4y3m2mRbCs8d",
  "key15": "2PV8KMAPtDMNpfxSj6xgarfhZqQPBuEUNouemAchNerWAgznwpruUdDbhXKEYKD2tMqbhbib2eYbM62WUv5FJ2bu",
  "key16": "26HGTo5VTCUascxUk7UKUzbGMPVN7DtcKp5HxsoX2QKd5KmeS7i1TTuS6CEm78JdRGDC7RuJCywwDp4Vs2EV18Ud",
  "key17": "4ber1VxLpQyeYeherv6UinYck3KE46EcZN58QatWuniPkbZMJkqyZuii1BU49DuQZw6RWuuyAnZUMrab9uUiX2NY",
  "key18": "3uAw1iySRKc1xi5QLnSteq1LDnpCsGUuXUhRbKpVFauxAdsbyNFpR2tibr29p9JwXawuhCuwTPbiihGKVyAm61qt",
  "key19": "5HpedS4gwWhNKZoBgH1F9QaddJ4zU3nZARkm5N1GrAJLEtuY3hh6Zv6B7cZUh8DSonwAUBhszXgfet1gXmvCjh6r",
  "key20": "JG5ZFayx6EnM64VvM48bqeMHb8GRArYkEFQxvYZMQHjbaQZ7YDJ9FoQ42mf9WLdhaCdyTppvNXJG5tF3nUhHAwd",
  "key21": "2UJ31zQn5D43RUAuGBxcuGuyNS4dsKj8A3moU23Npao7Ng8S3RP2yVEB9fmWtuyQcoFJY4uZDDqiuZjcAT1v6D7p",
  "key22": "5AUV7EC5Nr9rBVV33AFdHeWq4UPpTQQ1N75d37rgNdqrakkyzdtAEAA3Vhk82VwLMMkLpTuYFn3NjtKKH74QDB9i",
  "key23": "7EW2Qm9vRaZvvU4UL84nKvkybtADjBSeB59FNk93B8wahsacYNf5haS36URnrY6sY1Dsj4R9JFxccdANKzedzqw",
  "key24": "4QAc2bi5szLaH2PunSGmw42P9pigMDCxsA9HvLfYazF5q7516wtnqVYNJXdJCkeB7iupTrwcwLeVUtKhJVkr3aM8",
  "key25": "553YWT6UJ8VxPiu6afDF17fcQRVofFUCCgKbjS7UFd7nq5JGE2EhtHthNGyxMaz4vNGD9sLUKWfVYCxnaJEmPnai",
  "key26": "zNuksRhFRtXMXhL3ouumiMouNiFXRwHRSYLyYvHt2ANcgULvPugA7Krf4RknjPLS3eHwXpwFkjUg2bSVMPVBXL4",
  "key27": "59zzd5H6vk7Zykx7TayMM3V1JtfX1qLonn7jU4acQuS14qATPqzVMcd2iMuUhtbdZodPh6m1f5eRSnUR4eDSrHkR",
  "key28": "89mjTU9dGFurN3A7vBQBk7DwhFg9jhYpvMsMNBshxyv3hQ2edaSkVDsKHd1C9EjUQ6xHRb6aYTCcS8TSgFDse26",
  "key29": "3MMyLSB7Y2Tr3vNC2gsAzdQc9JKAT5uNUKh8TgCoZ1kZmbvPawK1dcds6pKWXHLXsh5yetQFJDVYxi2p2aiyExu3",
  "key30": "2PCdttc1Qwd8pwrXG6VQWTq8ByY7SYin3kNi79m6yD22My4wsuYw8M3GYYqSPpm2HHPNHZY7M7z1yhyne5kY18Yg"
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
