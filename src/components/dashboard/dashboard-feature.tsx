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
    "5oxjJj5sCWgghG9kpJdWPZsfiQh1pBrdK5joSv9d4PFaQiR8JSbBGv1UvpkiAApEHxpJxUPBV2ZwU7147brvgA7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sgX9NDok1RsjFnNzFMLSNCPu4D7B6z2B6enVbAN9TwJuwjRBDhY6xtEdWqTgwjx54151KknY9zfESjq39XUP7eu",
  "key1": "4WhPobi5PUdkRpNJWTtiJnfvLFRu7TuoskWWJeqAUWyBBiSYyqWkj4NUZwtBQuhjJddc7BPL8fixhe3afV3atT52",
  "key2": "PAMuKGNCku6ndwn7XpBfoqNEnodxZT6KA7u8FhVK6feSRFGUmAYM9L5VHGQrGvxDt5qBqwtFTYUpfTguJczrtuE",
  "key3": "4bdjw4nzC4Enh4WTbtNkYXy4E4a96G3P7ugS2Un3kBdxnoSvfaPjuCLwoLb2ybzd7muia4aqXerdnpq6jujEaUQU",
  "key4": "aPeSt3nonFfu4hZJ3EHMdkm6FbXAwaAJiGCafTbWiN8EzcQoPcuS83vsekFsePxexh7ABK6KTA4ciNuHoCeuiEu",
  "key5": "2GpY4RmMi8DQrUaJ4McWBtnqDG3P63y322HM2td3rbvXNdfyv8cyRtjzfFcUnCwS2FXd6aQD52vTnFJAnciQLcG8",
  "key6": "39hrMcDgScg5ScZgJFKwAHGkSh5y87Suyn9dNe91FbDUhpXJD4v6yfgFRqrPiqBsmWeSZwRbs9EWYij7owYY86LD",
  "key7": "4U5e8WEmquTu4BeQYPQ13Yh9RB42BZibtXFMBcqkS24Kr99dQ1qu2jcLWLkcwADBKm9iXtuqmVrbKdi4pz2py2y6",
  "key8": "4MgUdgBkiDDDkJv9jLwDChwpzvwJT4PZuakBw5px6SWADFC24roTk6amQmzaHHdFFR7mYmVUPANc9RstsxtooGjs",
  "key9": "4g5KFfER29d9cL1KfzxMT4ocQ3Sj7jpdWViZZtqi3BoDEp73VL8JtAh77nBzsxA45BYjCWyemGoEipoS9tswuBFE",
  "key10": "3Wg59nFrqCmZX3pzQzGPtZifDMaUE48cxPQfFLUyAGeGkthrSNAih29Gif4Aj5WC96ChjnQwtCdNCZbXqKsGvFxQ",
  "key11": "qLCTNdfAdVc99QdWQ8ExUZAtBonXpvNsZJkJo2rTfbwi9Xte65MWQnDoqchqCTsETyKXwqW1woNzwGXgLb4nsC5",
  "key12": "3GQdrnbfdesXVn1Soz4j95caFuPpNnVDwiBRFN4HEskfSZSN5sUuMBpKXaiBrEJq4CdUMrM8Vp5ZUw9jrd27iRQ2",
  "key13": "3esikjjLr9o1fVcpatepv7VSxSMwYbHa1gA2TiFpyAq1ATRkprxPSHxNSsd1PR7xh34rkFf866EDfiYi9bK1N9YP",
  "key14": "xUPPPGyD4s9uJFLSYTAYwjjtqjVEoXcbWGeR4Do8MNVUYd1uFe8uqVstpusFFft9gykuragZBmHi1t5Mooi5GLC",
  "key15": "57fpihrgX6ogXGi1qEpAYpFxrBcDiwpqt9KWAzBHTBn1Ge1SzU2DCfpdgYXRPGqKLsAeL1wqSu5M2W1cvedD1pCw",
  "key16": "2JFBGYD1qEyGp9s1xUeKyTdBjfBcu4iaewPcRA3BkHeDcV3cArQUANwY7javr6aMnB6DCgZ7DU6kmzWnYWUjRMHq",
  "key17": "2QSBE3JziMfuJ4FUduBJ12nSURyU3FBBeRUVyMwDjZCX5Y1j9zpn9tKkWSwHyLFNFCivzvzckYhoc3LdSjComBd9",
  "key18": "39U7cXmU1gvsuXEAarf1bARF78xVkT3Cs8D3zYqx7G67oojNbYwsj7PLPEmuCYo3uA5n116TyAmt4r1SrKmiqaAV",
  "key19": "2v7DKbTgUW47JWsSMDCJX9imqr62Uu4HYMco4iqQkMSCxooaZc8JawCDcwHbTDRLFLGQTWaTit1f7BYWr1S9q9Sm",
  "key20": "3b9wKX2SGCX868wm3FxYS5KChHy2S1LQaWTyJpBiW4wu9GPoDWbm5roCFpA5NsASJ8AB4ZidRKDuUJA1xGa1djo8",
  "key21": "2SNaHNeRpApYtdGWNhSfXs43aLiPkRKSvtd7scJFtVbvYr1wszWKw3gUfEfXEhYDJ7MGNygN9a8du9hV4cUnW1ds",
  "key22": "4P5E37v8GTwq8S7sbpnxQgGbhS8eDwwgbNXs7sybDQPaTRGUWBvkpdzsZGRQV6tJu4An7PQAhmpX6p6QnJNKkxSU",
  "key23": "2AVzVeQjUsFsVGLXK36twtDxReqVpBnm2U47MLKU2gi1hYzKzK4k8kouiVUchKv1BgqRT3L45HvNqXG9uFwRWPJk",
  "key24": "3SkLTPQMaMQCP6ugqz4Uog83Tkh91H1jptRQ6imSXRNKicbhdkesp1kTCsTzYEwSqJUpLcdpAAuDkFrhAvaLpp2B",
  "key25": "23x6VFYv9BtgR7RZShmCgHjqZpcqtxsJw2hkBruzh27221dx9nCSt8Z2Si3xhjbT2jC9jVo9FHnzpk7jEoZX55XK"
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
