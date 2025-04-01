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
    "4N6irtgUszLYNtBU2WXmaSzfQugQBh9nHJZUGzY7kqZ2YWL4D5QStJE219pjF2nrUVQsTCiE7Ncbyj8rjC7z5sSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sjj4swQooq9ioSNbmuJh4UDxP9ky6cM8DeqSdNi4nqvQomh4aNwHv9Qc1ktf1WwKJgMVTfUidNya9YRnCCCXCEU",
  "key1": "2ZU2jCrGaRmtNvLpGWFEovrG5tNGX5oakCqPTxXBosVxaaMdVRwX6B7cMHr3YJUbeZL3zf3Q9wmBVGibCqX2bTNr",
  "key2": "79jY7UvwiVkkwf4jyFWqAokD4TpDXuPYNCdn7Bw6fD32uETBSC2ATFEnTqEi4LBSJRviUA2JCyn34BURsScyawt",
  "key3": "27SAQpsiyUXfd56dqmpqWXExr9DLN57YEETfiTk8hL5ZkiAH3vnDBWFhR66BVtZeVAYjH443BeER3xMxACYsq88c",
  "key4": "62X73qsGymxBKqAFSMhf2t2nxPz4wgDXWK9Hht8wEW4qYVKHWC1YQ6sgR2wmktUTE9HHk8JN6wdeqDzFqYuCPHVH",
  "key5": "4W7nKm2yDYZQcqz4fgjUsKH8epbaBjtrUy7QUnexnpztSXK9nLouZx33ARhByh3qGT4i85ZcbwmxXRbgvNmbrep4",
  "key6": "25mTYCnHhyBZYkpq9NGodHR6RoXKvc7u3sQBWcXYrCSm3SMWRgFMoiBNiYTAAXnfEgbgk6NU9HXMwTuzSFW5K5pV",
  "key7": "2LZZKn5euTKFECVrL7wCT3ipiFATntz6uchRhQPLAHpBeHo8advX1Ph5rreYLKzud7BCBfxSSiarVZcr8RCGdqyW",
  "key8": "38Vi6XfoYyYoKtnv4Gvo39rLkoekYNeJMcdTSjPWaUhSeNfGbBPDmizfABHWV9d9jNSoP5maeiqRUJNoVRMM8Wj9",
  "key9": "43rxoAAtR47g6WrSyvotRYR1zAQAizuYJbwxi4opTqL3vp53MfH6vSr7A9yR8NMjZWewjQKqcxSbeq485r7DcsjG",
  "key10": "2d8jRcSSVmRWgysfLvjqXkoV7hSU9PwmvbDbsMEv4ZnJKFge4nrBQpuzkfTBveWpNG3WqywExTPFSz7ifpRVzt2N",
  "key11": "2vPnvLibVuknokETfPKzMuDDWQQw977QtE9E5yn6BZdVZFb5jWCs7UQRvK55jM6U1xA7mFGeGDad6JrJAsEziNUK",
  "key12": "2A11oZcTit2AcS4Gf3dZAEG5ziRCgZ2FaUnzE8fMt37X173WGK8GBCeE2ZRuFqgLHi9oBfxEKPoQ8c4evAT8MnVY",
  "key13": "3osgNskeEJYipVW4B7WKZqr56Ug6g5nnVBL46npWnKxV8yTiZVdRom6jLri4ShdWgwUK1XAk7wNHzuiRv2U8RsNo",
  "key14": "2cce8NDiXfSwfekP1gypikpiHDVv8cZTDAJtyS3FgAGYtVF4FzNccqg4pyZTQeYa8vWcb45vHfmQ28xevBR8u6Bs",
  "key15": "2R1SxRAhzsTKqii7eF226gA8eS5ec2NTyDY7ZbRWdnexAwxk7q3Jb4BoewQbHJGEyiXZ1B6TmFw8foavVcUraP5w",
  "key16": "4S4QDBCMG3FFtpH37LEpjACb5zVPDpXMSeeabiVLRwPmNFZKShWxnXgUxffRGGakwTbg5oeG5X6jAndMqL5d131c",
  "key17": "2L5wXndXyhbQGhxparj4roivmo6CNpKah9nEzxbq7Xjiop7PZNjfTtKCuuxBptnyVHP4vvZrr3dxpCvy9zQFFxYL",
  "key18": "2DggrqRnxnjozmSQcS1xJ44bNonhnF7eEeKFqiUgNXmb76YB2eEtoszYNHaMiXhREdyRS6WMcSMj5eWoaGrto4Qq",
  "key19": "2K7sUQQL8J1pcuAAN2fcEK81rUmspDSt148n9eRcqFQcbWjPgAytj1PNNM1epzJ4EqrCu2WmaDdt7DUsL4ygapyn",
  "key20": "59fJGVEwtSR37SJC7twfW3Vh6FqETiLLTNHP2JHdEAe1GjfzqG8aWU92VE1eRsUPw5PpDbB24XjSobtLnNwTYnUG",
  "key21": "3MU38JQKHgVR3PtNBeV74LgSAHPqi1zu9Ab6K2XMQ1znwXG1aQc39u5y8u5y2ixiXDkD71Uqtvam9zhYPG7waUHR",
  "key22": "561YZoKfPyC65FLcdPAKYEx1PYPWc8LipH31DNWwo5JfZbMy2ggzFAySVbx7Cic4zNgKJQq2U2Vu7hoohPUSuUPG",
  "key23": "2VurAWuTJuYqqeRTDRTjtwe2mWQeT2My3ZNjK1m43eaSsax1d3J4TtJyQv8DGSQNxoLudS51LfZ6wq9bT1uccb4N",
  "key24": "3HwrDjXcVor4r5RQM4MEQHvtWZJKR8n1YsvALRdMafocxZeUqrejMLWy65cnF4r5swKDFMzWbBPYvR1dHjmzgWrP",
  "key25": "4kxKW8x49MwXrX2WKd79z7sqbbR7sZQdMjGkM45eSX2CwZzHptjxgiUPazq2kKmyTDvihdmApxxhts6WVLRpNZzG",
  "key26": "TwDGSFYCUt6aKfVKgKNcmzxR9aqdkHFtjBqQ1ytEWKSwxXPCJn8y3xAppKWng4xHSR5N8E47LqSc5TcuSiwgcMV",
  "key27": "3VYYYVqS5ukYzUh9EG54RQfiS1eqFN6oLEVxPUips8qaEETAEjRroMJhcTJjiJioevcPNrRhyUaujbQHkTUXBQsG"
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
