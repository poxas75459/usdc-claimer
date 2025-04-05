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
    "4vtF82p1oj7D9jPoiT3vHnt62g4nrrPmmcU7qdW7Y56Y3xEmF2rUFvTVnQbPRHW9CkEScSmJeVn1cRVU3VQtQnyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64g3zgeXH66gJzENii4ZnMzBXAmni5TwbG5mHyA2JzGQu7zB8Cg6AEqgo3dMaLML52ZL78P25noSwh6pyVbXFTJP",
  "key1": "2bjmstFweJFG8atiaqwFKLGKebyZiUzw5qSzZNAhjCDKuDJ3YREKgu4UePZ9f2tx4WfzuiRFkwtynYq6Uk85UAXS",
  "key2": "4mHGTZh67JcxsyQ5JzMDa9s8T5zSxi8ibjC1gJNMybEfA3kpDynza3RxzyoghNuejfWU2VR4wuwrheoW54VKiuAx",
  "key3": "4bLvAgxU4rawCLet6v3e3iNA8hv8ubjq81z4LdMhTLS2yujZUEnJrB6ztwPdYNHLMyvAz5RujPgyNJ2jv3cZN1au",
  "key4": "4AHXko2egTPep9PnNjw3QfhdNRYnwAFuaFvGy4C1b8g7jsf5ujhsiFRzQxRKTre93AWjzhGAnp7wzDMbph2zw9tZ",
  "key5": "4Jdws5wpFiP2bUQJqP9zGeE39hAhYZdC5r8H2pWb9wPJA5BaS69iShoC2be9xnkCNgNBCYmVy9oMTgkSSTAVpW7s",
  "key6": "49W2p61B9W2RShDTSsZmj5xhy8SUUUagQpqbZbwzA2pFrLyWYT5sPcT15HLY5KctuSmGwqUEzUVwhrLwaArgaiyH",
  "key7": "ZpjUc4GGq2qpkmW4k1U8HGme6zfraQUsLc4chsV2xKqjyPo5NLfAoTWSf4tq2juQCcro1dSiu9PsNK7JjVUdMsy",
  "key8": "5KRR6d9HUPdxr1iYugxPfKBx2PvK9QbkrZZ8E3BrbJcE8gxQKmaHSSsUFmgABTcizB6NfwUvkKxrCCUMc65T59L3",
  "key9": "AUM6T99fxKh64fbMi97Ed1UyAsRk9SXo7AUctuhkt1VtgasThh4BV2fL4vAiQDzUfEdqjBUg5BbPTYGaFH3ob6W",
  "key10": "2E5rmqPK7Tv454CzkB3Ydkk5KMaWv9KnKXSre8TUUeA67Pq8eiRdohCC7kqB3agTbVRasMhLzUyW2p1gJ2a8um4e",
  "key11": "2U4v4PnGXLxiuiQgGCPBHH3xDgB9SVQhwaU5toPquHqsfVykGkQ3irPNhYj1CLX1yFDW9ySBxgquRMiSgtAYKLXr",
  "key12": "de34H7sER3PLUCkcZzeduvJ8Afpmaz8WFjVNWYZAQEY2rQCoVo9RHRc2Ndxq2PE6cwpjJFbxrgaoz4hXoxkESA5",
  "key13": "33B2eD89r6pHSmfJeMD9SjGxfpdG2AzT4inuM97R5Vv6TqH5cEF4kxVNQ6K2Ajh3X2cFGzraAkWBgcPeUapUoB47",
  "key14": "2qjGVbUZbc29r8DhfzBTrswPDbJE4KSVXCY5zxAELdrGiYiG2MmBv7z7fL7Rbczrq6d9QBniW2p586Nvhq1BvA6S",
  "key15": "5Wt5zYR28a653aRQnM975wWCnY5x9SNxU7Uwyhu9Qz2L8aKDfvBn77aAatZbtEooLLgUKxJiDJvZhS44UMApeNZD",
  "key16": "5skfcEa6MY7re9PbnNBepwS36aNo5QLuCNmGzBUQmDLsde6UhT88pXEAjfYK2LVfAQqyiKQtXE8sA87pEJQRHyKB",
  "key17": "FvcQoGySLvGe59FSdqZYy5Dgcf11CBfDDGTbc6FT91todCmUyaEVrRrbEc8HxTe93JNY6BKrWU35EJk1sKx6k3j",
  "key18": "3bgJhiYEpaQyq7sy5WdteXDzHR3zyRAfoDBJ5nQ7cLjewP4d7DqjDysPcyZYURYvJ1JpP5sojdGG1FH1FSVAeezv",
  "key19": "3HYvgoypQCZBZoh34r76ntjHVhLjWnmWnmVDsW8WwckZ2ryjqo7fdCeTK5UgwGA4hnwjCkxcC4Ee5PRijwyc7wdE",
  "key20": "4Lhzu4YVCrzrdFDsFEPccRJtZLTphDdrX5EeuLts8fqixLCMftNmo5ebXt6rJ4aBRJ9Uvmej33zA2HaChcfkEHTz",
  "key21": "2DSVjwLrrdTBywtwSr4paSrqP4CYFSjKp8586n278BEMMizzbksgmX96z138TSzm6ymXNJ1pwXbF6bVuc2gYw9Ed",
  "key22": "2rVt8fN6uhhn5zyYiYXwY1EkxrdJ341Yn5U927GyCT17sqFNXgsnL6oDqBbUijfSpkN9CYUY3p2oTb1eNn5YbqHD",
  "key23": "3W9WP8XpzmpYTBFhQ6BDCrRgVLJ6MjYa71bEB4AfXnNyVCPedmNF6JifTN6tyBjVB5AXi6h4hJxYS1trkJPTLczG",
  "key24": "CzY4d1veZyHGwFm65YHTaEX1HGkFZyoirhQqDpCKoNRTVGtSess6QLJdkXBcGNUP815JcGvZNx22p21AFu2jQvH",
  "key25": "3Lr4kXQiib1uuYH1RecWvDefHPynu77Ptmtm6NqaCPe2zv64aSuSTwKbUDmckh4kJDTEYBDrn3ieQXNU5BiYVrcx",
  "key26": "2noJtbs2TibTzpgYYHa4PbnFkPknGM4ipSypQ2nq7AuYMDnzgSKPBG4nDBUYn2tj4mZyeNSSQRfkWNWKfyFi46r1",
  "key27": "bXGaqeaJizw2YvnZiGpAGi5VueQQtnJ2jpdTohLNM9tXedErv2XpyyS2Nk5vQ9FYahqfpmRYK8XJxpxbNj85G2s",
  "key28": "44TsJzYtw4QcY3RsJkLpVqgDv7nXYGnduYoM5yEjsxYqnMkn9G2F2uGCXpWSMuHtG4ABe8e3kKjDUpxeRphPJLRx",
  "key29": "2cNicSBP1cTFLs1amRwgfSoE1tMkrByhpw5DSPXRA9GtNpeofHzQPN4HKVE3QruqH81zH45P5EzyDTh2haPkMCHj",
  "key30": "2ndiGG1Hwp5khNJ2uHRQFk9tw8zdwoqT29dYesw6Ec7zVfExRneUCvzManE8BRY1rTnefn3cKtAQhqjbgXyDs4kX",
  "key31": "3ozcoMPKgdK39JPtYxK23s3kKZWB4D6HT3dCXDLwPPXC77T6GNktKWaWHTxSJ2Pp5uqTpr9YDfAQFqjFD5tLoRoZ",
  "key32": "2PofDGxkbrjYgUAMgrhasqiJsW3EgnBpGdFt8jHmBtXRVXJvRf8TXH54M4AXNiavqFfcxmpPJ11xCScZ8Z9M8BQd",
  "key33": "5CttBBX58HNtgZUK8khoRXu7htivhWb3pzTWDkortjysa2E8RYCdCeK5MpVUvkaACBX7G43yHCkDVpvifrYYCszb",
  "key34": "33qM6sCnmwjC34xy15zWk2DLt6ZqapDzsDVjK8ZtQ7sAu8tQequwqaTyxWy27xZ9iZUdyJh1c82z3TFK5m6mHHFJ",
  "key35": "4AuMv7AWCwifRSvUqsnypBS25GgdGQ8aNmoFrestPHX9bRgYLUtkQDVgw2q8EBcRmdphyQ26PQ1UYMDQ5Q14AKEB",
  "key36": "52wzc3E1oYyCC44pyBgFd6dmRnhrU6ngFJ3R4Ze1sE4dEUP44iHYX5pHirPEnVwATGZEriQgzX8R6xWqUK2j5KNv",
  "key37": "3VLRHv1mrR9RKDoTGy7hfn3f5uH32278gb7pdmUyZDuK4yBGKkoy9sM9K3Tq8KHbM6MJnjncsHtbaZUxpYzMTs12",
  "key38": "2m8DHqrZCp87QufZNas6KDgZiCFPH52qoaS51HMjU89voNXJ58o4RA61eDeBpY3ocMHYcthRmXYUfSuEZf6ZPVTk",
  "key39": "5Lzo3vm5k5jcJXg4JPaXgNxP2jjYpsjpPV2zoctYC2ZJA22y6s1JjFicEN4fPeLn4TcALuZshZLz4yny3xMdw5CP",
  "key40": "5aH1DXxsKWwKYXjMC9GEYk36Y6sZcESm3TbARY8ej8fWcMVjnYrfk4WLqjubm946WMbg6z1FUpejzZc8TsxN94Rj",
  "key41": "2ympmeqaQdYa6sUaD6YS4bHyor6jvVfJdD5PMe2MYgbZWLpTj2u4qTA4HZ4P7Tc5ciQiaMVsg1QgqJLRttX6wMf1",
  "key42": "tpjMxGDpitcu1pcNcLZX8reCxpW3wV3SwKYLrErqSTYjVrNekCXg1HpQYYwAWqjeLL9TixFAoi9hogRJQ9rZms1",
  "key43": "3oLZfstAcpiiUuYzS9UgvjMQ4mGRf2ruLRzuGzSMoqSaKhukmYNL8SQVc5E9uZJZmL7BbeV41toeAtEph9pGQkcv",
  "key44": "3T9S2KQMNVrtb5NaecVvxQ6rfA2VuJKMTDGtPCA8uhhJKaqJSTP1foTJGsn1WRPVpYpVGvq4pgA5YmMZjFe8bL5K",
  "key45": "4eHxLf3Hh4KTeThfaYzCVr8JMgVH6coBr1QG4g6WpZkPc6mguKQGPxxYuUuRKw92fChUkc3QH2vNwQdCGyEA1Pc8",
  "key46": "3GDeqD38xHWFzQB7WTVYNNvhP95CzSgtAbjRiQPcqksLVN4gRGHrmj49xUUP95yZAZXdXPYJHD86iKo6KHabUygS",
  "key47": "5BFksNEfJeZXJXxZRmBtPadxrX9JVLGa95CPV6A26zbvJAPosLEfvbrUmnGS1VfUjM8jf93EyieAVtahbEPHpWXw",
  "key48": "5jGZwM2DTbpP4WiCKY9kS8k8x62jmTUW6QVePoXaZHVnToeVDah5sxG2ARiGatEEGxAoiFh934DKanTNzoR3ceXL",
  "key49": "Nqroa586hR7nHvFi1jeybxT4oKf3GyEfSWg4duSp76zLqU2rTi9sZLJkzfvUCG8Zh8sxPaEScW4bGVH4ws1FWX3"
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
