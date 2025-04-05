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
    "2xKoY8Bn5bNUtpnmd2d7Eqy5BbMk1JmLcogc6QD7qBvpX23ZZKPbwiHWivsh5SPrWvcQoJiaV5q7zoacQS6v7WFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WguDkg5YLPcF8M69LRmRToyXtV5Twdn3d8nht2coZoMfZVTKsCRZShSKinFrZ6bjb79xM61RAck7SQVzCMWyybc",
  "key1": "2ZnaFUg1mnGcD1NiwK4WoARM6qYviAvH4MNBYWw1tUT9Gnmm36hG2f7pQPAa6voexSZKrdPHrtZJD2H1vrYy2fst",
  "key2": "66rYaeiupW1TbusLHxkwFka6vdCXVzqBeXCAwSMme65sX4eSH4sQdBgamZMUx3uouHchqFD8HJPG6GzbtNSZkcue",
  "key3": "48VRpYRhqNVa1sdY4fmaL96BHdnsz8dc3qUBak1j7zQfTQq8CYfiNUveT76n8gVgAnuh89VMZcw1iPg2TEAVqzW8",
  "key4": "5Kx6R139yKvyZQkjpSpujVz2RjUgeRjyqcLVxtSfWUjhX3sHdywzuN2xB8NBwKNbySoQcMCTTNT1SfHVuroLqmTn",
  "key5": "4mWkMfdG9s5qUFH89gNtFUemdCZbVfnZCc6Vhawjwsri2mnBPnyXh9An5XjVkeL4yLDAcVrShfwbHz4CSUTpcGfP",
  "key6": "aoJqGkw3ukUb6yix1xCTrrCdxDkf4rGLMEj4r7ARt2AKYXUobC7uXpkg7XaxiMr6b1wnTs9c6n6uh1i1a59N6dx",
  "key7": "2uPSeMN9yG8vWaAd1JNVqAzx7cS8HsmqZiJ6Lism9cH4sSJycm6XYhQiCcJKhmR389SaKDPPwbsnYNigutHDpc8N",
  "key8": "23fwxCPikoNxUp5DccdiZT6vXuswvBPmyydiz4GQRUcrT2Wem44z7bbEK6ZnUkAC5anw2XUmLKVK8uQfmwe4rVC4",
  "key9": "59u4tnWnuuBZHMC1ipq2HBsBb6rCM6DRF3DUo6HLG16fcyhdMXWJbJAEqW9KTxT5RBmBg8qUm4oUxYhqAzA5DTDS",
  "key10": "5ef1fE35sG2yVRPev72M3b2Uw5m3YKqX425Y3eVCmKJDjseF96kpE7SJ4Z55smtt8icFDKWPtRGX2MrhjRSjPkXr",
  "key11": "53XYk74qe8Q6yyTwjGk18eoZVVv3zuam2fnVYhEWfZJvwKxkekXEWHgMRqrpPCMRJXRZavgji2hxFqf8sBgrpdQ2",
  "key12": "2z1GP8VtLxHh7U1BxnexSVQkLww4Lb5ZU8uh77wQ7SdN3v4KrckfyC7KQ2kq4djNKrsMishqu2b797WG54gk8vVa",
  "key13": "5NGMibGtRFMPpXrgr9gcJHZh9VZ8kQ84ALyPQkNqHBqKrKqDH7keE86rVyh1SLr5wFmWGA9rjwpbueJx19o4V2Uy",
  "key14": "2Z5gobas8vaBk5b7vhDBWLkUUCPGSLu4JtvMLrEm2AaVNPogU6WNjEYxrayBpP4s1iteQko166c1QYujnGCkSih",
  "key15": "A6pMs7fPEpF9YKrzab4eQ73DfGgcFy3mkkyrdUnJ9jeA7MQDRjJro5hywXWuQXLQpXMZkatfCmxG5y8ubuDps5D",
  "key16": "Eki5Sn9tFwj3dqawzLJnBZK5JasN7dSVaEB7Sh2omGSfFXmyo5idPYsmtk8ZbsakNhmwVziVTBxPfTcG58cz7vq",
  "key17": "2SBPguCFiWP19T5o7Atw1fK3SMZCSNbtrzgP7fvJ6h5YSMSbDXMGo36E58R1K1TaJvvvPnEQpE3YZxU8i3cF9Syw",
  "key18": "4EbbbSNqDkfTcsQeiAuBNLNsk1UGphFmvJURbMK6cNRVVKwFgcThrTwQn1ZH1FULrPXsMDATpEi3yHKCkK7nBySm",
  "key19": "5eKcnzLXbeoHzfS2dkTABeciY8PiFEW89Ne4xVQFtfpNF8CmJ4WF28bNe2PLAAqaJSPhTvyFvnBtZbYzgAFVijs2",
  "key20": "K2G19Rkx3rHSZBKwSjysUpevyndDdzXaLzrAjyujWfPK6EkFUwBr1KvLjqZygmjb6TKAkLftBM93imaPTgkuDWM",
  "key21": "2M7K7dpB1PJuGr2pbcuQ2Zzj9VBDgjm5Q8pycFXiHuUxc5XUWHyFaLcFhaNKTVWXZMz8xfZF8Y8j4YcKxxrpYVwt",
  "key22": "C2gzEv45sse9y4TZjd5H4QVtxGpNdyJy8weXD7D7GaWACMwWrfSfwAoUSrFbhuZFRCCExXZmxVFpjgnNGUkgKRC",
  "key23": "5znmHv2hsffQhzFBcqA5aQUZFPiDw8AN1gAXuCRkw31vKh9H6AVEG2bL5MMSjBp5NHCg7osZYnrUTVLTXUuyRDaB",
  "key24": "65jCFP6PK4a5BwVmfVzHaqRBnD3d4rmRQAkDSw8abhUguWnunMB88tdZWEhuPG6zaD36iENGBk83RXRreQmnT6Kq",
  "key25": "5EkVstW4Xsa5pnuKEEr3HbyX1RgDqP6fiFB2cz8HLnEibPm7rN8htnKNmwc6XSJExPwySo4sUPLevQE2fwnDWC6z",
  "key26": "4afrgm4PTu4cXqhfQgKnv1K6qdHL75NNUStZCCqLtNgakqeGZMwTdg1guzWCE32UnYsSmHquvfz2s4cJnhpHGNRU"
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
