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
    "3jjMdwAFiriX9kdVv8t4TYtjcL8738h7nm2PKV7RLW64FTJ2nY2cFCTmyYcvfHXEoHftpKEfY84zcPQQ2UADNcUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kPd4CkVhZqWTi27wXCS4WCmur3REgFdH9B1AcHHgUnABtGLvZRUhyLnikesbjgRWBFWpU8tZAwfDXuDcruGFTVA",
  "key1": "2HPUhWog95J78qoRY5pRbVB2qnYiCFX9BuCJk4TcGePixV5godxupdyGWDcURCVM4Wo8R4mrJ2Knvz1XUs8rJ1V4",
  "key2": "57fZ8AkUJrJPnkRJhJXTRmM1yNWSuQ9c2yzfDWfN6s9M53nhk2iwnHHqsVjpxir2tXz9ccSE6L2AyLgPWat9w5Kv",
  "key3": "5xLPoAVywx7VrcPsfzjt7ch4Wvqfmjixn59kk3DRMeMP94MKiLDyJoAAhejDFqSqP8EvZU5iTqHMe6buVb1KK8Bk",
  "key4": "5j1R8qCAuLQbmhXYSZLAcny8VAS39bwF5eB2fQ7Uoanfhqcp8vuzV4ehdo9MD39pb7mS49jQNWejqG8pZGFBPovg",
  "key5": "5FEQs5XNZ73f3m9pK4kwecEDQT5FKhjPSWMrgJYqy6a4KR8ebCNifYdspDiQC8U9XZvJy3wW1GftZbvNeKvUn4hk",
  "key6": "3H131txXqsehTpbRSD7XHHQtENuH6Bih8KLtVkXBDkQ4mWdt1HKEx9f9yubaR1VsnokWDXaAiUJMDPf3Z9TRWeLV",
  "key7": "4vv3LM3qbGR53ZD56WAyun3gqPhBERNUPv9j1hmGfbaVYwMwSicR9LdaavS4Mj2VDL2o1u4DNf4yiy656ifjPy2g",
  "key8": "2QiHsKtwS6S4rmd8BH8koe8L2diRxJGoYnEiErwejzyqvdx2XWyxoJHASHGHaxoEdiS7wcrm9ooFsUwNhpbu3R2p",
  "key9": "2NcUtAfNFBy7NnHaPZRS3rVrUzwR38QHvb5MZXnLaVp4UxC5WFpfBLUwJgm62RdpAjHv8GVm8zragqn9mFXJ9xtV",
  "key10": "5m89k8NXabvzeZm83MkNDYEm8HKxBsdA7BEz8pePs8vnFDDqDhZ6rXgkBYTcXjxFiVF95aGR4jgzpkxNxE7ogU6f",
  "key11": "4BRgx4LcJuGp4nKsLU3FAEoLUqLAee6LTvznNk7wXT2WMsN4iEDJZBDRPiAmbctYQyyPTqeZSnKR9cp6EHcVaws5",
  "key12": "gnqrkW6aR7VK9zWQ5gxv21y2eFNJYMoDjMmHTZ6uWjCJFp2UuVYSVuXTBW9hGKMJeufHTPvgV66XuBdB29ajcWi",
  "key13": "3PeJjeWro5rwbPhkeaupJ8sZnEWSvGawsFvGsTptQLRub57pozTv7AJRAxAx5c25YRZCshyDPQqopV5dvj9y3ZVM",
  "key14": "3LciQWLaexgGkNoHa5hCGWGcGS7eC7KAy31eXqTLEAHvyD1cpRWVPYnUXaJ4LMBAyDtgvDyjoYqrySXMSStJ5Knm",
  "key15": "4QTJ94Byki7Z5cmEXg7YWHsdBEiNqwhAFCVXHLKUCzSirqH7JCqV3CB52PNzd3VfHdSuWwmJ69jyb8MpFKWyYA5E",
  "key16": "4VrQWJaU1LzxTWD9jTSraVUQVpYiVd4B7dqRViKopViBZSF6NEvRWac21piqq9VuCdmB7UCuMRARAiiV8skKWzVf",
  "key17": "65nsfjTMAaa78rXjrgE92e3HMxZ3X7Vxa3Cg1VCaKMW3PnpPGSd4c7uDw8ZAgBjz2prsmaeeLcjq3UibjLBEdsao",
  "key18": "3BdXaqQHH4EgLkgUVF1GiCwKZdd1pasguSa1sAdmFy1LmYwiALayzCzzj5njZxd68ipNVxuADgydcefFWDkmJeBG",
  "key19": "4Bn4P1cotGSWLaY7bZvSnbdymUvx1pDx2AmRraU83Yq4Q6codGZfdme5Fpe3SvHaHgjeLQ8BVD9pCkNdsGTQeFin",
  "key20": "4DRPA6so53z7fHbj4MbyTryeCNbqLrGsN8eZ1uQQypNjd27L8EUrcS2fP8RikRTXgKJiAWjJWFG2R3qvA8va8NUo",
  "key21": "4xqDLi69e2nw2KVpBZYftVwTTxvQj9ipher3QVtc4swNjCVGJbn9AyvGS8QX1ETPsb8bi9gxvkFY9LofDJU7GBRG",
  "key22": "5d3yFCSeVU3swFyyYDQ7y1cNkiSVQeopgjTd842FtRHKe7YunWC7iTWaiG1itvVyo3H71uGV7TbhjPXN4cv2fH8K",
  "key23": "4ijh2UHfj1Sd5AfV6mksa5cYpuFdLVwT18yf7R3ovgZ1KkivnkJZiGySatBpAKPK2iorcnGSx5NPcdXghS782KU2",
  "key24": "5y5V2vio5q2SNSQQ9ncSxPRd9ztZgFATFoz8mzqhBtvr1Uo7TA1MzJokheJEa7mU7W9PEsi5kYqXKh87RmrvnJt4",
  "key25": "2LoKThtjdReqoYfTqMUecrVMnexCW31SbArrUMW1oRp2Ux57svdfami9dGnUsUHzqRhrExCTyFK2qzZ5sKNJzvfW",
  "key26": "4tQBVDnmMnGRX3aUmBhN4NMu7xbJVZqfCYfuuE3oGLKKsUxrB58iNgxBq6KWAe71creJsgNMSmbqrPKYcn34A44K",
  "key27": "4LKVUnXgLCkXZh6GaDjFacmSSPFw5kZuWpcJDvNfLaBfvt794rNgWjUgcfEp5CadwYxBAqu5gXUUvZ8ep5gPR3oJ",
  "key28": "59RZxxqLZsyyWYmHKrUaQVV3G62LXG813Zbnk5SXQFyQJT3Dv94QbWGxjtVGNw56ys97KBZMRczty3i9AUHYTMWn",
  "key29": "47csCJKdU4BGk5JKVopYEDdhG7rDWk3wAc1BfbwkYRfLNanms4ekr7DRyU6ftYiRuoi6CuxNHbKN2UWCxFhpbiex",
  "key30": "zo8P6iJup1KkJm8MZBTvGHPbLX1rxuDXfsjuR22txV3mgqFMkV2CV85vH71bWvwxdogsrSnaWo9HsbWSgv878p4",
  "key31": "2TeWicP2n5Ty7KWtHyfSivm4cMmAWA2fF4uW8HqLQqX3opAxLYXCWKugEYooJmFRqxtewChouaDAxiDKe5nGbnWh",
  "key32": "S7W1X5UubrKKgxcpGD7pkbPxQM2GRN9WV7EwTQvgsC6RYb99kiYNP1MCLv6AmT1jPVCQZcjeDNy5JXfdr4sVtdm",
  "key33": "4u6vdSHmpPbKNX3iiBdMEjrWRimkFDmHkkGwCvu5FSNxpiQfUtSaGR89inDN7Bo9AbAHLCHKxRSWT6AcUSMyXx7d",
  "key34": "m7r87y3oxaU1x5v94T1pLQGSB4d9dm7dtqrBr3CL9YxzvB5qUbzXBkRdtd9ukJZafHnRGHJ2ZbmGZeTLoBU2scg",
  "key35": "5ngp5hr45S4RphiYaLMXzNXj8RgtFepoJBJ1aRDyqcVARk3v7y67ymZmDFX6SRZjJPXCVcfxqBZZQmAj2ryz9BwV",
  "key36": "35HXMs1TXnK1oUGMQJhdjWaUsagEb7oGY3puujwP8MEz4V4HTkQT5jUyqB8jYV8xgiCdcvCaumKJwxzUPD6AW3vV",
  "key37": "2rddwgjJgfEhe58s2GsyVcXJwxFF8jshqNvuFzpXF1rWka95kCb5C9frgb4MSPQpJWvXB4tfVdJ4GjpdNfPSYGoT",
  "key38": "5kU4ntvCzS8yXwJzXP5GZyDQob6XkbKYK9qVjsaKHRmm1g289XBKjj5CmLmzCPctUnMg6JNpH92TkWKoLcw4FbkX",
  "key39": "49e5Qbh7i86MUA2RhAqvErFdCTaHgnTSDqaM8q51PjWNyssujaziBG16pouyKZv9PCLBXRrhsQzXkiwVPL5hDywh"
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
