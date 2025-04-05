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
    "3pXCNN5iEXkJzKaf55kMVRCxZEcL7eGWvwGbdfUHz9TAqTdiNsomQvuh229zGpeA2eFjiWusjM4zJHdyzAyVUB8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kHfBMqCNGejmZC4hEmz2eotESWqhpxU88T6bppGKKhxuYK8YEbA1G8twChTxqXZWP1VUnsLT9b7r4Rawwhidf8J",
  "key1": "59iTZRXFKrpXesuY14VHzBJvcgxZQQ5UMfxAwbsswswTC1Gyp1eqsTLtk6xxcme4VM3Fsy5WBmHJWkJwJjA64TtT",
  "key2": "4iPWb2WWwSpy1s6KsiSBBXHYpkEE8cF3Dc6DePRTnaNHdQ8viEe25ZK33tov6kYZfbYE6wRmh3U38yHxYF69DBXT",
  "key3": "KZftUCMcKaKWnt7AVWYVMJDY6HBvrfuw2BoG5HH6VLQfgeKb6fi63tuiqyQU1FLjhNRwxHddGcrDYug361NWekL",
  "key4": "3TLjY8P15sqmrvmQ2WoZmXzg9xPsXcT34ep2XAJLbaSj69u7xsnVQrKsbZtaBfwbssKPMLy8r4e69xU1FL8LhSQ",
  "key5": "5nnd4hnHjuk6RGzAs2NbsHSyuTLnnuMXpyfhM8Rb6s2t9ZtGtfYYyrS9V9fVtc5ERtRZTdckmmUZwHki3jwrzCio",
  "key6": "3VvijtzurhWPdFRVnTA7yMRULRyUajj5HdNFdnuLABt62PQwC9kcD1QBCm51heFoBt3h5PVnpvtrqk1UjQYw8n6d",
  "key7": "2RQcFDyJHWrCRTDve4f7STNGYsujGw3NMc3zYU2yfT4bm8G5L9MFZwLQUziJPGAX4YvVochwNDNMMTtzjbQ84hZJ",
  "key8": "2vDsK6sxd3KWVsvnUbwdpcBzXdNeZwAosW34ExyFxNEJtfDmuDTMkeEYEZf7jNpwUBfHzEWKT9BT2QbyxisyShAC",
  "key9": "2dJjZGDsQnciV5rRnV1nUKbvw88GaK9o5dGf171WRu1HFQj9KHUMjhEinNFwWhVG1wcMWoAiEsgsjmbUoigopydM",
  "key10": "PvejXv24Bfc7wVWV8zyJXnA77t7gKqDNYNgSgnHzqAN4qaT5aMFBZJZzoULD4TSSyddua5Hk9BqHZ42ZEooVbTw",
  "key11": "NDKQVM9VmKGr7H7vFPZGSCP3ZvRwrSVbKGmr4Dnp828NZZ56q8YK4YEhE51GaJMAyyj3keo8hmrHWvQGGzHTDGC",
  "key12": "2Y15vbWiARpFrFLbeV9he1nZyfmp6DaJQkYn58NrYSGmJovMXb1TNrVXfPXJbUZWPvbPjrjyq9i87Vu4K43iMf9F",
  "key13": "3KXHNb9QUwr6xrSmbLV5bRXxPbhAtWhioxJi9GjYiuhHDp6A7dpHAmsm8xuCfm8iY1tFEQZGbAahLpN42cP4i35D",
  "key14": "2ZDPyAJVZPkDcxUSiB2naaZRnM5gqGPpPLPboxBtpeF5wGbiFawFM6bGZdP9Yv12Jm1gFSyiFKPms3Jio7jCpKDr",
  "key15": "47ThyaCcmPpRGz2BykUkS1fRYoFcvSsVrDYENizDJosuqfaKWNzEzXSCr9WfSauhDxp19ssvVsUgA3CqYQiX96hr",
  "key16": "mk65z278xyfDtwZHkaPunvGzCg1Dti9iT2vhuCZGCMb1wXGBhTpfAX5YDH2a7ktUeWhSV3gBZZbbK2Ei5TntdhT",
  "key17": "2rrtZpLtdYG9stNtxHLzZp3gmfcTQdVCoURLXD59sdbuXRSJN22VHopEEUnf8K4mrK6Cviaq3N9iVayNmjffCR2E",
  "key18": "2EsPWy3HmSd29qBc2JwC1gtHn6xqdSuTDXFoHAfCWJpY8aHaLkYub5zkghvtESvwqNfVPqKDzGPpzbiG5HqW57Hc",
  "key19": "2mE8AZTg8W3KPV4Feachv6HBwZxiKsRq9y2QzLbzXYAZbVmDvyP87D7DrM37WUMCv4Zoic1HPMLQTJbFQjFqvYDe",
  "key20": "2x2u6Z8fLCGV3XiBZh3A4j8LziZuFyMdcy2Weivn1kxAakrnb3UWcy4AFWicewneEaT1Z3hqr1GVENZM2prF76i9",
  "key21": "4DZDUxSZhD853LWEXDgmuor9bHvHDFEmEifwwcx4ud3ZSud7Gut7eUAPdnFJViZ8RvsmAsxhAAu5EwAephRbmyie",
  "key22": "5vWstyDWTddpxRiJsD8ZAx4yUZ8NCx2kYbpMLk37Z4YCU2aBPFsARsTcyaSXnF1gy8zg9JDLX6cFyga2fWcgScJ3",
  "key23": "4EFJE9NZ9TxZ9Qir7PYDkfJGE1qPJYAZKyNxtmbyeGJ868BzbAmDxu4sCXTWXqj78c4twJYgsx2RgVN9vHCVDvED",
  "key24": "26m2SacwLP6YU9sWJm165ZXnE69uHzftpzhxhYCFdjtuJ8dSrBgfd2UgaGzxnhgoonruwa2brXSPAdZkPiNDhbuH",
  "key25": "5SQn1oo9rmRLZYQtvNGhvBybMYw3pvPoVuCLqGTexCNXC395CVobazisuawvx8219hSVsrS8JFyMACBjsnAnwxS4",
  "key26": "2g7LbAw5cieStHVfT464hgBX7p5hLahziv9c8tb9xPZHCtHuEUa95jAr6jdVxzmMAejhwbfToKCeFEkRC62MNh7n",
  "key27": "35XwwHVCuR33akRefuvCccYenzE5vfHbHReox3yPfvznWqtkjAtMqhggQabc468E5Co3Y83jm7iUFJnrXF8mpWea",
  "key28": "3Zut5N25o5XKnf94y9fUZN1Ti8u3daRGumJLLHysBdH4AaQotBerafaf5kRjwqaebdc6tmYkQPJGqj8t8LMQXCWF",
  "key29": "4tiLfyjaTBn42eH7auQ7RveZ7Nmf1TTQStQDNm9o7S81ZjTpikyh8Y3rjhY3DZN8WQH34wWvZ1piPTjQvZoznjgk",
  "key30": "2dqV5M8TfNs6VvpVuNnyE1NMoiUz9NXoGKndTDP9Y49a4akkauPZAfzPLdvyzFXvBuGrpqzxkafJwsQqZJRPh2d8",
  "key31": "2m3cu8QiF3C82eRFQ7Nj43CuE9SwgEKzcY9YsQbQHzsto88U77CA9onQ4NPSYEquX4RLjHiRJ91wXLtiBWdCDJNG"
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
