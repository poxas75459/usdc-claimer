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
    "55ytxtPURoaGv3BRaShdsiNGuP8YsLrUwL4BLuFzbw89yeTtAJeyLar2w2yCSJL1Gt6MUAspUH78E7Z1JShLFUuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cdSabfdGYiS6KdA7xd3Stm4NfrgCaNhNLC7xfEpLyaPKgjmft7mhn1QpY4n6Xi164rHy1ABZTDvHNENteVUgeiw",
  "key1": "631Awv3Mq8cy8sHEkamYQw4XNY7pFgH9hEDoJTb8PaF75jkPi74NLsMXZqrkgUePhaJJTsXLcjXxHmpRNXcCKJjZ",
  "key2": "4GJUtxhfFqJ95bVN5rFY9oCXwGdaaqx1QgVkrTA2PVmJsa23K93CxrdJpYTN6st8VWSE48eCFnQyPXAyHSsif93K",
  "key3": "4YPWRCDfKuEzQSVVxA1AQ51T7Dap4myVQewRh5W9uFjiufhuHMn789hKPTojSARsefw7WhCqBah8ki6wobC4GhuM",
  "key4": "2bcBLCVffbhQm5azC8dCQP6hJaCZAKsj5pAaV3jAJDLjsn8SRq2pFhRPqAWf92XdyvftiVax4Eiy3BLzp5qHGHTm",
  "key5": "5Dhbs26RvLeygmhdud1vZDFam3kw2Epe1DmpWnPEj9WutVRfgduKNKzwPaAVZp368QgSFcSPvSqDtX7qVwQKbVPf",
  "key6": "3mnSck1hCjNYsSkFu1GSk2Ws2zVVCxANaxHonGBefgHrmKn2MUJPbMBWCEgUcNgykZB84x4NSF8LdfGeQNqST8gf",
  "key7": "5bAfJ7fmxzJ44Ms9HHRPFBAJ3NSph3hpUm1ZxRaWEnq6wP6tsmZyHgAPupdPiEajhkU3cwn2iqBbPmR4J3kzvtP2",
  "key8": "4g4zFf4htd4ciKGsbVJPjFREC7oFDTbhAqqE8mgh7NQLysYjBpukEeqKoMgcovAoNWAZY31xte1YjnudUUJqL8ah",
  "key9": "3s5Zg19JAmrfpykWCGB4GHLRKKmKbXUnDCowxncEykACk9vXTnd8cj4VtYEYuWSpTcYQTas9BX61XGS63Aw8H86s",
  "key10": "42J8oKQ6h2VF4WmFqfMPHyWBCQ7rA6m4XQcBZfJggzNvx59J9pz1Pahp1XyFrQBsTzEuBJNR7nLpenpJHLUbFdc8",
  "key11": "rV1zEryMSfahsoxcfs7G3dTBf8mNSVNP3QcFXh6eLgyzBWPXUt1ri5iQtkh9n5fp445aEZ47ASKwtjMPXBkee6Q",
  "key12": "58R5RgMmxRRD7FPkLXVj9BpfWwi6fqEmrfyEDVW5Y1SFVzQtR4nndtYdiHRE4sLVStXAySheTXnixPpUMtvpFjHv",
  "key13": "1Mv7qT995mxVtureWfKbFpMzQKk9FAB1JEPw5uLCAja4kt7xH5Qah8s8Sm8CEAdtMTLQz6jBi7qWvuXxFuZ7WEX",
  "key14": "eDtFXdM6g6Ztvk7B5UxsGDWkoSQtSTAwkAxE3X3Wfq7QRhZT5TCrb9xVTyH8dXpy7iwBw7cF3gtEPRvz9USoevr",
  "key15": "UmFjx6cckrirEcbLFGBuBLca6gQFiojm6mTFjxqPPAE3VcBYR3g2WB3PNdR8sgQs6zzw4r3qoAW7EPZyoEFyrkD",
  "key16": "4uRf1kn1BeimX9RLFYEkTLZw7zJiYACGFPEphQscDaQr66KMwzYonUJ6ibY3x81Poo9hjt6Mccq31HGC4dNczNir",
  "key17": "2VitAaFtDZtfUHDVNegyM3zj9iK7jAnRDZSpHXarC2C48oaHvjnmS8ZDnx1NkWRCGbWqQPDjt7noub4VgLYN1fVX",
  "key18": "2zvhrqSxmEHwmFZkmCiAE8c9yXxQw4P3yFCEY3wJywFBWpueuxoHUfv6RcGdWruV1JbExAis5u6ua8wNgi79wCVx",
  "key19": "oe6Tmp6CNGuYMGGySwxPTbdyP5YDcvDnzQyFG8RmjQmj4WuQTC4Ty1kkUqZwHAbedcuPhbcwzvtbZzZhGi7gJQy",
  "key20": "5vLoSYJGyocZsxkb2bGsLhbfKKJrXYfhU71KDQSasWLq1cuwVvSYThE7uWDxF5tr6Vd8XuFwZS7r8Wp6vLHfN5ot",
  "key21": "43sGpr71GbriDEK8yNBtSPM6dM2NUrFTczGkDhgJbqQ1sYzkKRisQbNQgD9iYn3xGqUQgQa5GVJrmrYxySUkEJiY",
  "key22": "62jnoWuUsTxow8zXaPnExbqsazihzRkCpSUaFoDr76GJkNrf8PuDQJJhNPWzzwoW6TkYthucKvUnHRUbmjnf79L9",
  "key23": "3mm8aHH3XKdC2nsZmf4TVNGuhKzU71kHxSGPwU9xc2HLTMRftXBREzFaZLtRP8wnda1WSmLT5WUHV9QqWM9tATdW",
  "key24": "oUwNrFsmGCrSUHHh9uMqArDhEcTWErZGCSe1S2dLA2sFMqLisBFEE6KV4ageobzcMbiW2F4a8dDSkWwJGxzQdtG",
  "key25": "tr6JvfkLuEH1Wj6ZpLf7jNBhAPoX7aprCkRdN1kzGHm4i12HoKnZ2vFdohk2hTi1K2FYaVyZCeCok8vSqW4YbKK",
  "key26": "4cunEzYh9yaNHNoBDxW3KbBLhRCEsf2LWAMBreTYpjrG5evMi4dBnozBDG3t1jJ7bKMjYPP1xZj6ehutCrPcngCS",
  "key27": "2KnGQUp1dEQK4NspmGTvfRTh5njBQB1r74rX7TNmonptbp7EAWP6DMGqfUBA4FNxDcRUX1TPW4ecCc8HdWfHBb14",
  "key28": "2WgwNYPTM4q158RLeoHAegFeKU4dgmpRQrA6UgAF5xN6G58uVNuzGua5kqV97Wj6rfe8oNpfJBqawSbqAQBbFXau",
  "key29": "21j5QRdaCpneL9MDEqCTrttM23RNCNZv2nxnVc9cdC7JWYGchEVcZaZ3rw4MbE8C6yZfhykughgr5Mo5hKLXahRM",
  "key30": "ScYLZd4ffHX9Pt9cSzNqgc31aaC9UKSbQD9XCcPDSXVd1CNFJoU4oDCVkGEuc36c9TN8HSKDzS5TfbK7co4KjZ7",
  "key31": "2XdfxgcwzewccpGUfascDNmmQKKH7LucYgQmpkrSwN7f8F4kmhonRs5LDxBHvEziYbp1RZ7bsKDQuPpDU32srPx",
  "key32": "5F6hKnasi8ojEi2uhVwsNbnwWbKrQXFsSpAoZXdycVEWbzvQduohrQ71ezEu8tPHk3QGbxYMitc8nYwAm37UH8Th",
  "key33": "34k1CnHYRZANccYCGndtiyW9wDGx7N4uzWxMXMnjo5aYcoBkJU6uj44ZbFRfogwdiUerZBiV7a4dZf9JsWcNeNhT",
  "key34": "62JH5r79VW1JvCQryPbQwHS7oVsMRSfDtMmUyHnsKY3vwBePRPtKMzhBoUakjNDw3fYgJeVZ6RvGJEXMkjvpTYhA",
  "key35": "3umWSLpzGQcd5B7pXntd2bp9jtZF7L2Z9N32o6vwze4YbwWKhxTEN6W29kzWMEdDTBokQLWMSWy2tuuqsxCuK5rV",
  "key36": "3W9itsWonSnqeKNdXwv6rG3faAXDnw4xRny3H1VC6pxPgfWKaU3EwvsMnByyWZLxbdwN1At9o8QyNAuiUPfATXUm",
  "key37": "4D697j7wdiUDvg57scT27FEQxpXL6vsW1GkweHqkkH8PwLGPBGwaadMyyyrmRSmmerQHmwQxxh5EuuhP2PFGofho",
  "key38": "3Aq934G71gGaJmxfrGs9ENHWUZjQksd4CTSDoSAPNaXmRiy4KaBr6KGNBv9WtX6ENbUDD2eoPfzo97y6NXQxT3Yh",
  "key39": "3JGXYRF2d9YuxfMg2vmEbVDkKkvTYvWJRF8RcHq2vby3xWPEAnaFWq9s8icYEso17xVHmK5xQZeFkLZoz2hCjrKN",
  "key40": "2k9BV9WwjMPmRmNZRfwPJ3wK7qFU469juu3PwtiCJ78adkrHXvFZYyMkp1Ynk3xZW347mQUvY3PwPsRtqJzCZUGS",
  "key41": "2xbpuaXGFkyhadsKFjovbxtUbRspNXnocpVEGirgCRC5oHbt2iuCTuZF7zjMPmpKwA7z3KBhb9fNDsK7TKePobdX",
  "key42": "3ais5JP6gbce31wNtd9Cx7B3ePRWcETyQYt9TPFTtyyCu2bz9iwPXfR7uaZrTScn8UCvPUbsR8CRpZ7MTyrKBytu",
  "key43": "4d1E8hfLPKXuqSF9vHJJXAM4VxbZrwimrX3iZzHDfXEZbd48JqU63wcH5Yzz18DtPHNJBQKw28BVEtrasYXUCZGD"
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
