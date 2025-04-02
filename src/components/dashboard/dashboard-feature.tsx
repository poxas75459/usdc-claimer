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
    "3bxeQ6XxDL6LAoC6qxSaENLiQoUTkL8fSKn9n3XtyAdDiHyB2Jf9Wzut9YQ3gBCMS3yAkjZ2JUWCCafW6Z6QUHBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xu14RBg8Pqy2oHdCREoyx7uKLzfJPqCUb3FW49GsCuwMcV38QJvUoog6jX8xoE3EECbRrh8g3J3iDnrEXugQGZj",
  "key1": "34vpLnBA8zp2FMNzq3VEQHxDkFCMmvbn2VsKcvgaoV3V9JVSWsbe1PpbogHTP4tTN78yVSK83DdgqQnofLjMdxHR",
  "key2": "2NZH2GZKDJNVAcB6E16GQigZFWmFJtZ7nr3HDGXWSUtdKmFcKkBRuxpVGjRDZHNKvkTSeTbe2yMhWymYWscDFoJo",
  "key3": "2ayTZnkR1PufJNFZeAgcfqCT1Ur8Eb8Lkjr432pcKsx4fEy1UZX7UmG54t4obVtMNqXXU7rY1PiAWoqsewnL8ruR",
  "key4": "3QNdoJJHGojdjN4p5LAn73djzWNYV37LiAgF1aXt2HjeDERAneL9KnScrmdhbkdYXnXFuYCNLoYbxwcaUzLE5sut",
  "key5": "PYTa1YyFaowcqnQ6H2qGWWUGNm6qRgdxRy14B2giGyJZho9tzpE362rhhAm8k8Qgn3hojphGNx7JwPV33msRu82",
  "key6": "TbQ59DbdunvZteutZi4E7nU1eaVegUdBWHRkmQWVb9ZzGQbxkfw3Y3ACFkghwcWi5894j1VMdEDadk5QPMNo1EC",
  "key7": "38NAbiDXCvRYZYru641TYSqz8pTMtuxh7qKj1AedZKNPZxLwxgvR3waBqVVQBXNJNDjAP2R3H657yqLMrFJQ6dDD",
  "key8": "KJoP98WdtgfTexK2tEKPrJeK5FtTYbpkmmXevRUCktLafadVVha1b3vBeTQBFWymnQy3XyRYSfoEJpQQfmDBswT",
  "key9": "5Fc2hA4e19twdMBadEtCQrEYZUV13jrKNJzCxbovw5556St57BdceK16imUvc8NtawzGX84mugTM2cp5ceGivDrz",
  "key10": "5xeagmiruArGTwxJvg5WT2EMzXxpZcKBC5iEc5PqZWEDsbQ1pwB6dSLtecbkGMVL6EBPrSkhno5csMB2R8k3t9Xf",
  "key11": "bGC7aBxQernUsKwMkgM4aH9HVgnU4j2FD6HytHHcrhnfHWZsoaNjP5fhpoDpvtgFnbqibG9a51qWGZQt3kbwR4p",
  "key12": "2QRt8NzgxF97GXMNbJTaUF5y1RP4kg8zcWXp5NPim1KhY1SXiHhKZDcye54HWn6cyEaC2jT4peZAPdeazcKMGMZG",
  "key13": "2UdgkVUqAhKMXcViyNFtrWQU1iJ5uA7HH6bR8MVwtTVgPamzXWo5dyj1XaDrdVkyFJ1NiQYooUC2fdxtT9oLVFS7",
  "key14": "5RoBL83NeJdx3Tz1YZJR8Ap8f1KucUwfWwToABTQft1or48cWVF3qrCJtKq23rnjCXJm3D3Yc33sTkbJvE2zUEue",
  "key15": "3eQRTbrdbM7UYbzFCuk3Zgs99uqK2biTf8Vv9bvc9pzDbDpHwPrdTbtukHyK27fU2ws7Z5NWAd1MaxoS4EMK1MRo",
  "key16": "3ZawupmuoxjEMEDtGPdp2Pk9g7BnSXJ4tjwhZDRq945RqbFh4iYCUZBYvxw5sGrfSnm9jZwteDHus77hSRWUF8Mw",
  "key17": "2SCFrKdwmrDpKWJu8JtLnpNuQAjx9hHRN9nz8wFHnHLv85yxkLCpW98PpUDduNQsahVjjd9Do97qdGojB9nQSfRE",
  "key18": "26mMTQdYs6Dd7FWJs8zoc1VGLfT1deWSdjpvvJussr2eKwJUpDrBxPZsiDX5J7mepkjjBQFrbUXvbiHFWpuBdbwT",
  "key19": "442hBwuAXRwthFZ8PS8rSmcrBxT7RSC8uYQB4Lzy8vZ7KnMnbCvMWLbdGBiErxSprFbZPfDpdGA2iXP6LG1ghjr3",
  "key20": "477H7xremgnfRthM2p3ERNwaXXBEuFV36uksj22fA22G8SHEg811Te9pSpeeAbrfkHoHq7SZMxAT6bRH3QXJxRmx",
  "key21": "qaDYoD7fzeAbXhZHtreYJirFGZvBDDQhaDV7Bnwan6qs8bjobrBh6yaYDtcTuz4xhaAag95pzwXmUU4GfcK7TBD",
  "key22": "PD9sjhGXuWp2GoqzvFA7NbM7PpNk3d2sLG9Vp3CfVXg4GNjp2cKBD4Avp6FtLzgbJaUg5L2XhwgW9x1zBUJJCVd",
  "key23": "3JdNvtX7ADgppNtV18o9BXYKFGFPBrE1BvYb4FENFbykztXmXjRtpizQYug9EzmgpygpwCGd63pHXDzVrfvDMsvp",
  "key24": "4cPRte4A7MPxvsoG1jQ6X5Bv33Qn5cfSeV5ZzFwrAZSUPCNv2cXe3GGktGRxa9Z4PGWCCosjZvU2oCRrycEXk1zu",
  "key25": "33nwWVNGUYnVmY5Su8QzQbaupD6uGwGbHBjt5xTor1kAmYXzkv52sNWr5PYQ7QhDsxfhYHkhzzEtnmVMbvHDoTpm",
  "key26": "5f25ytw3H2P4DAbdCUrCQ2YrWWy8Cnj93AjKTqw9SiWzpk5hTqrC6hdvnCt35pN9M3nwgDYu95V5QzjBhgxznnCE",
  "key27": "cBUMqks6HeWTJcwNL1xRSStrwynjuR2vrFPJma5qAUCkoHBjvE2NSaim2EainMkdoa3gPnPDosRgWMKjYTRjCZC",
  "key28": "3QpfvdDjCVqhdPu6dpFnoRzERxJxquNc1TwHAWfGiPj4mEt5Kt2qMjDzhK1rEb3sQLLvmLhFUTTad3pnt1cRxGbV",
  "key29": "j2HD1MAh5UhjQeudbebMhhDVsEKbRHA5Cc1poDv6LmjTs78cur7rRdbEmcH59wTBRh2agTntNzENfjRJ91RUMDT",
  "key30": "3g3j9AcFTbso4SQximEJmyuXEmpp5A5oDwh6nucQSPQNEmPMHtbFo4hvykthtZbTefzG1Y1mnD3wR2WdcVr18Uvd"
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
