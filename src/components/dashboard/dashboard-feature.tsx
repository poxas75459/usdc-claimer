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
    "4MJdAre9qUtBR9dPaFteio5WwsLbiRkLdMKURvsoF58Cxg13NcWAGFfNWRmoAJr6SRd2YRmkdZNSDkVYwugTjHHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pBzpNKDo9bDNr3XBGw4ikxfQhbautUtUh2FQuYQ9tMQLr5zx3XXKKZFvqxC6EBcKapYpNEWLniQWy8UVx3XTGct",
  "key1": "5EVKP8EdtikbXgtKPMxhjLzQnk1M64616ethdh5CYTZ74rerex3ZHAqLYR7eBiwXKJC5mjTiDv25C4gTQ4J8sxFE",
  "key2": "3dGMQRDTDVm2B8RNQAE7Nm9tRarGU4RbYr9haLuYp87L85mPe34HNqz53MQYyXyo1495eC9UAmoCf2G47CUauBFD",
  "key3": "4DG25PkrZ3SKkKxKHLoVwvTTxjVs62gw4XnfZXe3ux4Tu5uA7DGXVX8apppV5mpSsTXoYbu6kUcin4urMAYWK9P5",
  "key4": "2n6v64pyFnhwcM82AoxzsDqiYYSvXqUbYjLxw3vgfeY1HU8jsFBAs1qZKqYQNiHaE3kGwHYsKnEUSBZm61E3fLcv",
  "key5": "63RmCkPmXobhBWiDm6uM1Eu6fpT1jBbt4NWFFKQBt7DFi4GvTDyJnGeFKtTPctQajaXeeWKfPhNeVVYoN9jhzNgV",
  "key6": "5aSfVhMTrxdiRKnxzvyV412WPAMse8RxarkMZMqxd825GETFaxF8ZymbDLqois7EpQZeRPApRiKPicS28UibSz3R",
  "key7": "3ZeDRHo2qUu7XnyXTu59gsJGoEK5c4usgzgU19RnsiheNZfaWHFp3WKpdYc4eTKND4Hwn4amEcxBaCKuMfgAuzd6",
  "key8": "5o4CQcJavRwKV7Zs781YUYFoSXKD27wVBLPeeWEmSYovZuTB9bzVHp2TsMuCa2DqaZHsyhRSdrZKjWm2mVJSyhMG",
  "key9": "4PFpTLqTKkXzgSMKLyad74NdoV4Yxbm8cer75bTfuTHtKrNuxJFn5BAq21YiGFtoHZmurhkGTtNywp8j2ikAzC3P",
  "key10": "XJFfSE2L4Zf9pfvQ1uUmuFskFvv7JrgnuoqRbyEng1stNrSU9GLem7vw2a9Ls2181ciW19CRpPHx3jAbjDmBmnK",
  "key11": "2sUESCUDApB72Ce1B41PUBAifuh2jzABh72EQLXQeFMRp92sNHgDrhQGBKovrXvU9YV7MCWXgwcwV3HryS5FQqdL",
  "key12": "285w8fWjpPqNesaC5XogqiA9mSji1wXpRtrrFJZQfdxvjqbgBTPC8s3FXPpYXcGBTiXnSpDgP9C3wh15fyZdazqg",
  "key13": "42GY94Dgb2uZ4JLHsJLgL1gP1axTurJY5gCZbVTJbQ1R1Epz3SJSi2zMdixh2i3x6GGG56gtnEGBCYrPUQh9LNuN",
  "key14": "aKoEK53ZXhb44ZYJUGUpfHsPdacGnt2B4bwkJySEcoPWGMP6tPyLz33W6QPegKZdzUEV1zJ6nWNTnV9AgHHfsFu",
  "key15": "AW8rskXYfYPNPw7b4L7gSwptZnens6app6WCyy3Cu5LUBNY8twmuW8mS6VfwK2tmCmnQMDVHRX27c5NS29J19UG",
  "key16": "3wq324pqwUH6rpBmyGcxyDYftzbtMesCkVVmBa6QUMoWfiySVmuVEDstZzwZTA1F5FPD7rmzgxvtbi4Xhbnowr6K",
  "key17": "2mGWQ2G7wyiwDcZdx4NcWSXYszuKEMz6EV6pqAFQgheLYnNnSr6Q52sL1vxS2FgSxa8v9zpGyWWyp7JVjBJChpWU",
  "key18": "3ehXeWE4ZYBoZiumUu6EXTkN8a8YSoJsWqV9W3LFS3Uo5eiDEybJti9GffQX4DgJkb1KkUDsNZ9k41zpBgnXQzno",
  "key19": "2u11uHCiHKf9g8JCY6JeYe3NvDxua2k1Mr4XU5qkZVQ4HoYX84P9iiBfGHV87u7UHTbGcYj21LG4eejL3ysnPHbT",
  "key20": "sRVGSpStpFGK6DqkjQUpudeNSkbjM94KgaRvE8AtLg4YThBtbfKqV8SRsQb5S4cxWbRqgDkSHnqkfMMxCbc1GFK",
  "key21": "5fjLjRmMeqvLLNxxhauPxgdrHERAZFSuqV8vbX2AuyA1PETXsh3xjHuCwwf5YKidE7Rn2SRp5hzVpgi6QP7WU3yH",
  "key22": "oFSrpbZgXBQBedCKJVVJBMuMypmrPTVjDLYyp8v18vF8aoiNv75XaNynsdCKWHhij2CJvyLNLak73rZRxzTctfb",
  "key23": "wh3vAnTjQzomvAK26wfuqGxrkR47Xx2UMyfyDrabmcgSmwjSdzEMD3ir37UhjbbMy9Ngq4HxaFpvevyDyyi2Gc6",
  "key24": "4R54zdfnghvGWQTEvgCgYFd7fh9hHzzStNRS16ZZcMfFLBm4CNTmn71Qtz59Qq7ZU9XwV3WLAZUtRWpJAqDJKead"
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
