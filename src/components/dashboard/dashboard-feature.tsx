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
    "2gJZb9vB1gYhEknqmvDKYtGn4k1YKf7SNmRmZ4Z4rc9QdtYjQSZvbmASXSqcu82sbHrw5uxD738pH6MjrQerPEeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5shVTBB7Cos9Zi6Nii5pL4gagekfejZnpgQJGqJMyrHu4FXJjU6qdT4KpF2hdQPTFYYJXomYveuuj2fTi1xZXsDf",
  "key1": "5umMo4RFLRyDyyY1HHVdyvhaFuRGDsRKFrbH1ku9kUaoqGHii32vBnT4SvyDxNxDZwnhp5CVeXd19QfHtswdHqns",
  "key2": "5qGa3AmebGqHVyg4ykTQ3fRy9GfK2tdBincMZPdZaPWf7U5cqtd8wZLLKxna5ZxtLrYb7GFQH67WhLcZYw2bu6Tc",
  "key3": "3wintPgDbcAwuQ8meYnr374F4UFiEebPTFnkFGJ1qGHV9MmYayLJ315UmkRT4NSqT1L5fWFBp637ncjmqPagLgt8",
  "key4": "25zCrXatJQGR98JUbL2Ap6gR4UMhzxywJwR1FqqeczYHvET7dBsD3CFMNbsYpZshM54B8Xc1Yn9wAazHD3iRPaEb",
  "key5": "3QDtRCEdKNawtGsv8o1P1iJvbhs3Ve2DiG6J6jXpNVR5Y3kkFbcQH5vjSiV8gHZvow5rLppQge4GZ96zSnyAmXfm",
  "key6": "2CawP15RH39XBEPzXnFqiiAiA76eEcidhEy716GY2rAHh8zfy2xidHfK9NrbbxkxxYRiRXdbnxndnKcRkSbALUgq",
  "key7": "vJDYgbyEY2dCZTakKSrmeq1iTBnocSYkDt4pXVCD1My69EX69uh2NdKdLsTPLfkRhiJ9o7vUAKwJ2U5Ayc1JuW1",
  "key8": "22oQdWBVosKkhDXtxsT4yMtxB1usQXChTzZsq43dpp2ztAdZNL1HKGUFM3KD4gTxkHDpbe5ukLHnvxybdLvCZRJw",
  "key9": "2M7Z3Wa793BiqpMvoU8VSisQPGXDfPodEH1Ee1oVTCiTPqgKz8nXgBwBA2mWv2dQPXfUaQ14Wt6whu18rhCUfjCc",
  "key10": "2ipEjAx1jvjxY5cjrjHz3G2KqRiDyFC7hp64bdTs6ZhxztWVAU4fx4FBaBjr1WP1KiZFFvz4yJ2ryfvYjLUqcDjD",
  "key11": "4sVEqsnHbC9qfcJF5FyWS2HGkaW6VsSkZJ1hpqzbickFtDkENqK16e9r85KSi3mWevRFHVTCmmXD4KyZPXp5Q39p",
  "key12": "4B13SYW2Nr9f9YVMpEzfe4c4ZaGmSAqJZcAJJArYiHxpTgdtDtnvFv2X2JCszGVpyNd9cExmyrNwuRdy1MLwW1qa",
  "key13": "mHGb9RhVRdQTGGRtfNTu2wZGxn46pwpSmk4cuJGaep9wuPrUGWS2gHK9AvvauubYdKKmRbm5du1T1JKXCxYM25L",
  "key14": "XPxUv2hQcpktsXwyVqNwfvR1P5PWxN68e4MmMZ7Z2D6QQ38vwMXcEmswAPXpRsEym3E4XGXai5Khg1j8wFkV4tB",
  "key15": "3LcZVvVwg6SZuuF9yKNnUe4sw3ykAs1zekeRbT8kJWfWEK4ZXdcUT1gJXbJ4gzxmRozfnQC18bQByq4SEyYJhe7U",
  "key16": "66GrUvL5pDsEmtga2s3SL4LH3QQQJe3ET3s2H8gSNy9pCJN3MvBLPjJV2oDhkG3DuLFqQqh9EPDmLe6HoySWoerC",
  "key17": "5vSMj3guBGGCdwVj77W96dYQcJUF28T32jGeWTHBW5mAtT4sQctL6LWWxkk3ePQQLmR2ShFV5j88mXDok2fjBfnN",
  "key18": "4NDi7vYTC2Wc5ZoCefBLd7ShqwNAyKssT8wRh6JAV5gpfdjZUzza9p2KqCWG9sSwUDvuG4KYNEuxCSJMc6JKZwhb",
  "key19": "3RLubzrxPZV2K6gFsRJHtzL9UTvvF69LuRrR8AuWM23okhLmYX2FrU2oCBsGcUSjvPzucZmAemGokBg3Y9WdzAzB",
  "key20": "5aeK4FzahwGgtJQDoBF6L2CxLgN1QKaPEaKkuJQvKQxcZ7fuiwk9qBtr4tj66RceqpkMMfoy27id7B8om1DH6FT6",
  "key21": "3Ys3r4scPioHKfjJbB2LdVJVV5Ae8doKEp8gUAkmf8pPDcgYzmeYV9jRdXfXzX81gRoShJRWtuQv7stwY4sUjUQ",
  "key22": "5vj6iqfbzgf9qmFaZDEXpPac1ZGwud84NBADwCAsoBvM4GB6oAESd1iYogzkBEvoKuGFWL7eW8As4pCvCSxZY9Us",
  "key23": "xR6KbTAJAHZyi3hARZRcgGPKT6PCBdVdnZLsigu5eDF7igf1gzC4wb2xAYZYcPCJ6NgGB9xQinJgfMDx6kZUBe8",
  "key24": "3ZkjjWtf9qZHyT8xGaNHCZAGZZmRMxxgTHSxKPSizcG4gHL8wmXSTaSZNYgfNkSqhfJ85u7Wo6cdGh4r5GPmHmny",
  "key25": "3hJDQD7Q9T5ASiadKwzannSsXmWQTFXahPyEhWDGVpxFNeZB7a7ZDnmncNBD1Qx2ggfeCAc9mPq7qX3xQqkwaYAL",
  "key26": "33YGqB6p5bjbxegC35PS7JLZrD6K7Y2x8z849SXDeKJVx1ZHnBFSk2JGbeinjwn1LWmfvgdjaWENXQuquQ2WqLri",
  "key27": "4YpAeNXeEdZZhEPVksZdqMjkN9cGWJG5GDyk1JjDGWED6dKtMqeUZVWuMRthQgkCRTY1741nFUmS8bRKLqQ3QwNx",
  "key28": "63QAKUP6KSi4RzRYA1aekdPSg1xyae18xWyoPUtbVJP7NWDbVZ47kh5X18mRv6PJDjyRoTPihSVM2xiTiFDSr1Fz",
  "key29": "f638qq1V46DsA7Zt1G8A1SNkz47mozXrDusCKMXUHmtDQSBt569g7t2CNjsiBAbJpZavoEbJc5r13of72PcT5Lz",
  "key30": "2SkQuNZKPZN6kEMiR2LUoXu3jHtFbDgrDzfsPF64WwkDgodw4cRc4y1Eb7XaJ83xz61T4nTWXsCQCUW3qDw5sqE",
  "key31": "4aoA4znvhGqoq2jrYVNEVk7AfkWurSgvD655Hx4bfZ8gfoJGyLDUtwNqTGSzFgZpoT6C3RbUwQJKqemibXG3Ckoo",
  "key32": "3o1eDfBaC29Zu1jyfWesvX1BE4fzcFs17taZBaCt8j3tCzzUqRxMqLdoSX7eWi8VYvp9LQAvVwXzPB1RH7MnMW64",
  "key33": "283bSCMAKaGrFC28KpBMDUtHKZpPmpDeahoZiAWAvh8ppzx488oTaSqsnXeJpvz1ZueUHScBu8j3XjhovYSJhvbu",
  "key34": "4gGZ5EHRiCJkQSCHt2RA4jg5Spm4p3et1AntydiJQqzXHgWffQrxShqK3s5jnR3Nfimjcqeej7sxFHpyuZTXCzfM",
  "key35": "3jkea61fLFojvwuJ37G5YTDA5nnFXg1A8CRjyyBP9sQXCZhhX21wRDXjvxaxEZvSf85caZEEAskBPHLpm11FB6ua"
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
