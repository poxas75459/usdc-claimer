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
    "2kTVJkvSZFHaZNQ5uA7wkML828gvAqrB8nboZASKiVhtFPh5jpMnyqurZDjfsn76aJgm84xsh2yPrKAxhszwKUeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RhwfZWAD1KzJ6nSCvgxAndwFwNv9Dv4RXw8iRv7mCVZrAdX8uazjKryTRzr5YNb9iY4czKUUpm3jbgmbssuF4ko",
  "key1": "26Sfb5He9FbxvtZerQC27NCo3YFcRSomDuELj25T3qusxLWrAzZBZWNcQBky1anW3eieYgCUYcnywHQBw85hWFUc",
  "key2": "3oXw5GELtgYeQ398EaiQ3LVoezrDJUASYQeijxe19GQpAduy5t998CjLSdQGaurJruXojQjoFvuKVi2YUHYaMq8a",
  "key3": "2Yf7mtKVueFT5JT2o5sxxoxHt8KHQgA8nrf22X49sNtCioydY3XFyYbzGYyazDxXrar9npz6ipWkU27hh7GTpbG5",
  "key4": "4mkbHv8tudobsNuYjLAdFCaUnkW4u1TJMSkFA5x8SoMVPHuqT4rc7S1Pn2pHA699rjgBs2fVBDNboYuKfFSpMHMw",
  "key5": "34pvv8XqRX9y8yyJmDqv7GxZGFsALrjx7mKAytV2Snp27JocSRvcZbqaA6uktV3jhf5D8mQJw8Kpdvoi2W9oX43f",
  "key6": "5Vr55ccERcyzm7FHTfYwrMtpDNmMqcamhhP9mkQvjVkDxUf6MVHhW6ZYFHwYiB4BtT9mKnoXe2Ny8eAuRVwfxAGc",
  "key7": "5e7WuBV7THxgo8xbAd6vYE98gV6jLabxwzXo4FJZqH1QVE3U336NPk5TWeZBHZPpgoEa93NJ5f8gbgyW7ZxZDukD",
  "key8": "5AUGsGdV3MuvjNrJ1nRNzjePCRYizCiqxZ2x8AgPaPWku6xvG8afi7GB4yihvs8qvJ5UzcJRieqt5ZMWywhaUd5p",
  "key9": "29UVkkVDcUzdkcaRzLkUPnR63a7VbVp6gdY7iJEQ9pLdu536C6dyUZkYQGd4oog1uqK7uSZAWfpTBQ4biLk11DxK",
  "key10": "hwoKJUAd8oXAdHQTHdoi8APWXQ95zRfw3MKpRLMBqFWKHKwJD31fL6KVs7hNiTgafPmJH2DhNd3mNTR41UX96BS",
  "key11": "48VuodTmnmPEveh1znaa17Zp2jfKeoEieCd7hheBdZYyCKavu3mVDCicUKxQ2oNq9Di5dFCUB2ZeVPpzKmD3bjwT",
  "key12": "4aBsSgwMWMTGJdAHGaFj4Ut2gmyfNMSR1Swdnub226vHitWSm5poaLcLEj1GNtL6jnepz6ksQHaBahTWbu3VzNp1",
  "key13": "3UUAK8QiF5JdDyTKjyhprh4xpbiAcf8zcXExkaE3vvQ9q1AbWAUu1qEyZTayRyCTdaz9gRyJLmAbZQidmrDGMVc",
  "key14": "2r8z5ZT89okp1GNFSve5JPcc5XGPqAwnExA2Vxd4oFJaKH9ZmHc28rwAN6Ad9ByDH7ACibAB7MiXSrmMx5QATMCN",
  "key15": "5pC2zB8zBAfxu7KXPeHvMcnscY2KKYJdVbtc2FuPG2JKGfSn7bsrDEqkJNfi78FVVpMAL3AmQH4ENs8zetrZ7uHk",
  "key16": "5WMSVS3Qh8Df9v1rcQLgky1tNy76kBqsy8qsUs6PnzD37twAeaGQMe3hBm8MjM16GwyJvVVXGAsKxqDF5ysPA1we",
  "key17": "j56kDxnmTbWRDXJD61CWNeDcgrpBDSfNmvMpSaF61T44uXXYbjesbsj2jXCMdDE9nY4X1eFHG4p4Yc4Gz2SKEno",
  "key18": "4mV7QkPmjE8dkLaFo4pphvTfBirWSxz2GEkjysCmHU3QedjQah4cCj25YeYKFYwrJowFqtsmfBphoN83sPdRQ1Uj",
  "key19": "25CHC7kAMMYRebo1U6a4LCTui7dbm1y7MNJpYvG52zpH1YGeAbFHzfQUqfpkk74pespnKWYgE43oBuUEZFy1P2PB",
  "key20": "3GHYeEvwkGPd9NgJicV1BuTTXrsoMnnqydKTQ5rBTxcnkFd66tZCvK9qf91BuT4NW7i63NHXVj9wAC9j6Hpdbfeq",
  "key21": "5y9mobgedAMTJSfp6GH8PhcFSz6Sg9akG8RVQRrMKzPGv7orG6NUYu1cVsryN6YwPuUmKLrcJr1DeN22kb6F1Ed3",
  "key22": "3jBqyPkfagfipYBYx1px9nb3NXvMKF2MirwCVd8LN8NN4yH7LozjNxfnExZZePPGqUA2iYvfmQPU29ocBFuMfjXQ",
  "key23": "5doyDwDSAKfwncsy8SPvt2RssEG9myLrcBemtXkSybQ1BQh2hsteoAU8M7FzrCQRwiYVFdcu3tMDANKPELdB6MNP",
  "key24": "4tQFk8haqGWg25GdYPaobtixxtZcktE1ZqQDh38QK9nF7VUibss9rxFSxiBdbFJLPze8GdSCv99zoVSsk8ppjfJ8",
  "key25": "4B9tg2Hay6aLPUztbhcfe2sZ2rScNFqo6MYimMuPeR8dhjMZLTkcykWGYv3umbEY8j2ccMsbvaw8n8mS9m3ppK9M",
  "key26": "3vnxtv9Cxx9WNRpc4vyi3egFcbejcUF2vqAULborbqQH9EpgxV9nFTHBZGVkH3rPznYhLWnUdxSdyC1bFRnVEwRD",
  "key27": "668grAz2T28PznCPCpzMTWB3Mu6F13eu8cQ52DZfjxfMXBazqizrTnTcZse8aeqWoFBuCd1LGj4rCLcxx6eRsJeH"
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
