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
    "984Th9UTQHwgBJKEiVitezF9wbUQmsRHUiythzCbrj5K4k4VumBwZ3xXyHnN73JV7UPXT8oQa1haVUrGZ6q6uZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xg8grB9N2VFp5HY4zvmo5F4LGedMuvNMUX3cYgKBnuu9MuBynsosEBN3vdo5rMki92QbjKyeg7xBEL7VBESrZZc",
  "key1": "336U6HYbJAfYzcRi3Au6vZBHmhXF2tvK1Htj1QeNi3DqqmFkXhN1c26QrRRvyWCVC6RjxfPWWzkAv19uNkNhB3UC",
  "key2": "3FYn6n5S1AkRAyxiWugH3AdtiEppxkQKGFCE55QgkZ78G4TVQA3x8pDWHAH4t1qZDuWsD9QaLCf2qSb8yXfvx3oD",
  "key3": "5GwM7rWDjTstyiywXUKWQRhWNwBr1CrMhqtpHsEQu1EGQEKn3T1RtCXtnMUBbjT2WjV2yDwUFfTw8wtamAB4xwCn",
  "key4": "4H7f5QdWSffvi6MmACQDHtPRi3NpkfwYFFwXNPhsdzUkWC5ft5BK9qdGjC1xUx4pr5Cip61fipGKKbrvr2kbuDEq",
  "key5": "2E1TZZcFrr5f3pUgTnvbgaokXP4vfXFMfZvSMHTxrYgy5ruGvZfQkNEc8MTMeLsvkTSZWS4vVap4MnLQDZW5qo1W",
  "key6": "2Hg3Ey8HdorrMiT49ijzHAs71N1J789kbLH688S7HNTMikcfVHeCMtftStZx6zGgWGftnKWH6gJZimEdGJNmvW8M",
  "key7": "2haUTL837qfe1R79gtuEP8LFa9bKRkSJefYmKVcaLaHYQrG7hYqiiGMTN3S2fjnruuq3eZ3xRTw1qED1t8vH8PEL",
  "key8": "2TtBx4c4TzTSW5ZnFuv9KBEradrGLar9TTa5aY9o1Fc5NKipjetZqbz5isd8Kv3vbXnraiM8DAbUmDcprXKHQSSd",
  "key9": "2KhFo6WF1Z3wWRWqfGPhTedv6rXENxAFkKCRUMKaTRYpTtG47VBuPo1QdmJhve4BEpXykuxnyvVwJc1NU1KdWW4t",
  "key10": "2iy5ewRQvQLXNQMM6H8tkXnQb5MtVkZWFV6WDVhgdbXjzKnAfgpbQfhVk2eoYS5zmndKxgk7yWsxDBReTCzV1Tjd",
  "key11": "5x7JAw2yk8K58DarXkucUyDfXsYnrUq8qgVsaz2stGcWaiiCdn49YiugTqvj3QPNkRejouSL6NUSo3zVybRoqp5G",
  "key12": "47ca1EgiVHmkgCZDpDzDWsR9dYfhXvPwobbC1gYxi3zXm9YLE7Eh7MmMc2Fqj4H2rduj7vrUwYS1KfJHnCfb9yMy",
  "key13": "3ThZfqiXfRQcbRwfTFQssgVj7uHtZ3M7sNKgCUyZEyDkQxGs8gsKoWYAkM1PvvYdyd8fXFNHiPbXNZmVa172pFf4",
  "key14": "4DV394FVSVn15MjZbCy7TmFUaGb2Y4ZRRrKKEuTYjRLkpaHh5hHikCw8vGWnPPwDLpE8kxGeJXVpr75yZ2UUiwF6",
  "key15": "3qJojm98WcoMGhHejwLDdWHosvTa19BBrFiizU6tFonpqjhuPTYdi7eUBCLNQLuGbp6DdwZZHNAj21zWJjLKE28U",
  "key16": "fZSbkR33JxFNvwUSX42o38crkJyN8jMJ7efhnqYpAWS6v8TD4fV2qD3seNBgji8JhpLMkW6SYVvqv3m6GmDfaUv",
  "key17": "5k5cfYqQp9Na1xZcBdWMhJ8jrseUcemUvKFozTujfabziVpNbexhWsg9rJGkuMgFUk91jrg1amnm5qduJ2k5Ae3N",
  "key18": "4xRtKrEqqMocWbTd4Vf56vgWEYhJ8WPYx4gAD3ghVJ7np6PJ4wQ6Na65ZVXTkQSa49ZYcRFCGvovzVrWgZgszRSD",
  "key19": "4oz8zUUjVcGhadgZG99p1X9F6BoyWMGjaBM6LWZYmBJwbHoXJNJAFqtuyCFgh221yM4G7SH7Fe7zcTJrpmq9xdM7",
  "key20": "3ajuoneUNyWPBGrB5F1hK9mEnuYFGWYSAER7oLud9Dku1iBNspyvroVaqUZUwQa64aHirWvNehvb31Lzx3x8pzbU",
  "key21": "3zDweM8sN7n9DfZLdxUGZZdmFd2qxqxUWLM2hnjB4BynpR2iUknA6XfH39UECRH7rwEZEUNi79BxohfKYuazFMzA",
  "key22": "2XF5R5dqeCx7nvfpZKZmeZ57ka9dz9JwpMaKnTnjzCccrBGxpu9mYExPWKA5HSjPK5XTAWwW3fr6GKy2fqLmy3mg",
  "key23": "XGwjJPWypXU97n7NGy4sibR255RiwNfQfMDoH5YcbkUKX33VmwudvhxDY2axJTLfN6DJDtpEdxvZWXhyTGaX5Wo",
  "key24": "3omvPYWrHvjaXRHGtqqQ7PLaTpFPSXDwsffiWijCyetCNLaENUc8U43FmUCaXomFFCtwKiiVwVEkJjJbK2ct1YyG",
  "key25": "6SrKGJyR7Hdrn3arqqoMFd1xdrfYLLLwKTzDU4rqBj8mphrZXBC4YuipQucSXP91VcFV7PnC7n58AYfBi896CMF",
  "key26": "5QfRHfJjscm8LNcZStrSxkpXzSPsCr5fLaN9cEEkoDSzuDGDuFJM1XMhZ6ykZYi4S2B3G5kFG78phVtBkFbDKFCL",
  "key27": "9uoJ7DfDda16FDySXwostkkStjjw2db9yBfHZGpy2uWqweo7xigGKYUGPAaNFz7t6Mam7dLz9a3MDy9DCHyzkhz",
  "key28": "HbuF5enBwfQniN5GHxmpADAufsQuTg2xqbs6tdPwJqbHTHQjwVZYiZeJMuVUqcLCz7BvCbWhDSY2MRQCQMCh2Fk",
  "key29": "5k1YAGWsCtxBhSQFkE6y74QroGvTFKczfLueEuFgzoNkdJ52KWNUrmbS4yxfDYp2yy9EWJAZDErHqip3giqUEwEH",
  "key30": "Mm5SmEhy1t6HrJpsSWj9rn6zX7MUJ18d28YYWGtx6btBwU9kfAmDsgJaWqsMSSY6QssCuKTxkC1VM6crqFob1Pv",
  "key31": "4W1M7mvMK314PGs7vYYbhGFQx4Mt54DjJv1ic1gKcaYLZmKqAm1GYoJvhkmGkKZxuwieLUq8QdGLV7M7by138Neq",
  "key32": "4qFBq6YaaFKrafEVpuaYf5mYRR6SmCznP2xmaRnTaSTdHg8HuqegZcpJtT7dc4fxueEUXYqUsrBzHphVcc9jPZXG",
  "key33": "4HApb3yNoHwQ59JeQdk8BqZpv6PPxSnPRPothprGZkauGNFPvLaGn8WzKMn1rHQxwdPcU6xiWCMzA1HPQ5oYoQWK",
  "key34": "2bRqWZMbLPfSQfKsdybKvcoobCaUgX5qtub9hst7FLmFxAnVyoJPAa2q361eQDy1LHXYj7CA55VafNiasNNfNFZn",
  "key35": "9DKiHyuTivQ9jSrr5ooymUckeGvGTqKnARdfzvf6bQnSt3n2boRsAehEPG6uasjuEQtnBhAifMQEF4gmGP2h5Sy",
  "key36": "4VbioLCCXnMyqU9z1v8XF51gjFVtYHut4KnArQCJTggUbNGvkUhLxwx5cU8gR1bUB1Dd2agthKByeCsGyduuVnqa",
  "key37": "4qCuxijAqxXtCGvkS295TQG8L4GJqnMyuqjSFVgPwaPUJ2mPmPRgmpXKfJKzk4coDYu6BiNosLRWPmzXkuauopC8",
  "key38": "4ZQgao3jBKKrk9iENSrUc14WDeF2iPXmiST9Apc7KqXLFp1N5PWRe6jrdMFMxUkU5y8ozWF99YQg68bohWwYYnze",
  "key39": "2enXt4Mfz9udLzHExPxnccTbPDKRyhgunukyhRELRUrUHLWo6srPEhj3kJ6QagW3RNVFFwdy18hj6o8mQsrwY1Ps",
  "key40": "2aKu68HBghMykuYodbAUSFkzXoVxTzFJrqdcTStqvU1xWuvVA6RYyPnAzcU6x6Qq8QAiNCwFdMzsgmT3NEmpXD6j",
  "key41": "3kYNbB5fXVrq8ha9oMPvNWCBjVwKj1V6LgxX7Qk6oFYNDxvDFWQMHzjkzuqUKTFBHqjQJQheKnQPtSXdaP4pLnG2",
  "key42": "4fit8pdpidLwyAMdC1EuDwUDP45Bj48KgS5XYwMBjLRD7F3oZmeCV7vQ2iD8mmC9QC5r5h3WTLAcw22Wfsye9BEw",
  "key43": "4zU8zbxv3pYoK1PRWP3tSUZyRDGuLaMdohrfTgfd2u22eFEdtZMqJ1m2NaPdCTaZbrkPpZRq5tNEpQng8R6sMVp9"
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
