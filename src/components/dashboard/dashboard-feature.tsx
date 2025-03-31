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
    "A2hkcTV78TAZKrZ7QxdmRR5PnEHu6tUe8qSbSGbBNxCpdgaZFmNmNeM9ozWLGHsf7FX2dQuT1gEU5Ro8ocB2USG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKCCikNf2gacD3CPhafmvPhJ5iFoCKrFfygKN7N8VddFtzSd2phg45tzavSM4fh1zNFht6tYf7S6V7Z64WbzEfe",
  "key1": "5AYPUCrD3gWCgL4uzt4pCs3LQMrw1whjrmTdJKmcuRaz9fHgPzoJBpFyhJdaRiJqXM9asTqQuNi8QZKpFtAwbNuj",
  "key2": "2fnnMsXkYoe7FGCMiFtL18PAWbGvi15xHx6ft3u5coGVCQWj6jivu9VFYHT5aq3Zcw4cd2ypCjW1DnuMNqKdnmN9",
  "key3": "5LPi5tim2qRmE1aQw1SbUr7mUgBt1S5Req5gDcPYfUNLxWt6unumSpypxjvq9oz8Myw6HJJoopwWkTQSAx8RrGaK",
  "key4": "2EHks7eJRwCJjYy1HMvJt3N12eARS8vnsgmEGUR5NoeNBqf3twMZx7ejWNTYZ3ewBD2jFfoeAD3rR3F7cAUYMdHW",
  "key5": "4ADajmgF6xok4QrVWtB5jJqwNKtea8GeXvgwKrJJ61QoS5dh8U15K3j7SLEeourQMy4CeFdwfLNNXF9qnaeYH6Ct",
  "key6": "tduY6ez2Npaw3dsvjb2iNdu3GaGmAVDk6N9t5Hurr6RQkzU2vyWyyeB7KWBs6y7Lin1QyHhV3FFSf1kDou5UFLY",
  "key7": "4kWN8zWaxhvjQHLN2wixY6VC6wHEmrxS1vXN57znSk5WLFmFEwxCsXmSw8JrW63fn9RmpwSFToWzao9MyZvMo3UC",
  "key8": "5MYCgM6mJ8ycEu6JPEn3YZV7EfG4fr5nqfrYyb4VTe7RXgEqgWrGvgAF7PjbmzcKiw5CfpM9SwLsSqz95NdieCsT",
  "key9": "2i2KSKUvDXxW8jUsWXTamWcsuBCsgKfWYojnRnUvadaWJr9Wd97JMnBhDWFw9t29hxRHcrDZ8jpcBAdUqyszHV9j",
  "key10": "ycJjXzgDdESFwa9Z9ZXWGSE7wv926uo1qoNMwXn43VX1rfFJp7JyRj8FUNwUHK91wv3aDFJwUVsAD3Pzr2omYKf",
  "key11": "3uApQY96eMpxoRhkwEpvMyyzBNwgytbtGRrnbhhsLQhtuKdeikgHY2ATDbdMfFjAzZJtALXtntwLBf7EsX1Ca8gW",
  "key12": "43Wpp1X7U28hV9ufM9rgJLNK2sBbwDKtMhuFBDH99iiNYWyLssVGYUJ4BayjBewxXx6fWLk9FWD4yLryPZbmH7Z3",
  "key13": "2ET9sHUPDRXfeLeL1Kyh5ob7MuppxB1s1PcQuuyy4k8a3WmD5vp3WoRGbM56C47kSE3VLx4Yt2p72sCNLtxannyn",
  "key14": "48mDRPu2TfLbiQFtuG74d3EPCrZ2UcbvfAjn3bmfk4LgoWTLfJZoQyV7KZBDSRCPS6Np9pgzaWZk9fzLSeJVbUKM",
  "key15": "pCcdcjLqxymFcPVbgPy8hXiEuWWhJB34tewsg2cH7UgnViTrTYWomDg1ABeaJA39rNkzTjq4zB7AfXFw5ny6zYV",
  "key16": "2cJmJns99CHfHSivrHSqHBmwsSDPEzwT9XqgCKbiuugpzxUGVD8hEu4ybMH8hsUVpjax7wspMzyWXRnPLXH3tcsD",
  "key17": "4UjTXmqhvQhWr6ZSPUavj1YTcp2NFP9SPp1itbt9Jk45Lisz84P7ARwGmCQzjofQ8Trhyh3nmmea5DW4TtAKRV5W",
  "key18": "4AU6duuV5R9NGyubUtaorrN4LRCgyJgpQ1ow4PhcCjcUaRRcDfN6axTNR1N3gPNN1F6yCWorkmMCGEL9HTmc9X7B",
  "key19": "629YiWWtvuqGf6SUmKDh1t8yfmarCk5kGCThD9uzaaAjytHbSyZkCQESunBC5DpBdRhW2aqdjC5dMS8vMG5DvZX4",
  "key20": "5UkfxoJGbCvAJi31LsG6DtGuprNXzihY28p6vHhZDQ5tYpXRFGFK7vtapVKxS5iQQSMXc96ByJzCeEYNsTK3kAm1",
  "key21": "2RDhyVgfS6n6UXJhscYr5aNcgBCmruzrJse8QDjKEtsMJWrVfpHEVNUiF1v2b6aCkWBzT3hjLT5zHTDd94vk4Lkh",
  "key22": "62pT62HZ6i6ovQUWobDFk8sLZqBcGvuj45KbfMGjqa2j6gyuLXP6Nhq6faoNxLCX3gQ3b5jeDJmhx6QHJJZtP6Gf",
  "key23": "5BbPtFsnfmPE69jqjuSeRGvVeBqCRQbb2PozanubXYjjrfbBVdnSVuCF8JgL1kJAQtVaxMGLrQLpYtAvr21ddJ2a",
  "key24": "5aUguGNBvnJLAkk8tVZaa42ge4yB33h7QhX4WAEifQgP9nWFyf4wJiefDs5Rpp592kRP3WicZH9ptpiXWuYpczwB",
  "key25": "3YzvxNMM2hhe8LekHHZoQYM1fButuAv3pqhWGFJX6dBc9ye5A7UMeHrtidYHCtpvzng4zkpJzZGwbbZhwTxqsx3k",
  "key26": "5VZMWeDDxatLURWLV2ro38gKtn65VNpwcyB9JwMpa2Kjwb7pFxZQT3UUe3DgfPzFXgHs5zr6mgKNTM6HQybxN68L",
  "key27": "4CvPi374KbnH7yfNFWAALkmv1e3tHxZt9Gg8uLJMnVYfDcrmx95def88ncJ8Dgw651PkC1kHwAiu6W62DfxbWTFM"
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
