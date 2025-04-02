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
    "KtEaRTqXfnFZhunWX3q3pVecNzZbHUfKoT6RvhaHuDNRttPJwt5kba7BVT3xYromYce6qYyaZp3eNfcATHb3st8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ni4c8UXDw6S1RmGE78r9YhSGYEyuD7wGdfGWFo8auQCayBWLn96sGCpvHpgmy1gWVGnDjws7rKcCXjcj7fqpYJP",
  "key1": "36AtuHDWQNPBXSycqP6k3DyQYCUt4d4z3iSwD3dfMBaUqe9kZ2kYyKZpUao3dikgsC1ddh3YMmcxshf13gHDGmSf",
  "key2": "3J9KhCecH5ChbNgZetyRcV2mUwcdtJzkzfD3zMdw81xxwhofxxpabQiv4Mzc9aweRD75i2tkXnwyGBbLwsUPD795",
  "key3": "2WNhoVkrVUm8zA3SZzek3PBTeJGcRWFjxh3rqJUvA345wTVYNjniDENRSUZju3KPVg9CxvgbcLvcKuDurxcUkKz6",
  "key4": "3QMR5WALsP7e8chUzwnz9i1kN21W8mFvfspKECWVzuNzadEkF9yNJwRUuksH1PvWC9URxd9mgkkyYpAbh6m6xvV",
  "key5": "33y1V5M9XJ8ULZri1prg6fjhxLsTS2NgxbuEqyaTmActmB7gtFqJZ2VcLS3NZReR2hcrFthKivfq66oobtw5SE3n",
  "key6": "3Zxy6LsTinGNhsMhWWmohQhtnLMvZY2cKXTXivtTwRngdbDxiP5Ytc2GRDqiTc5UbeDaopgHiowh5E5gtAjtjgvQ",
  "key7": "4ofWzXbH6UqzjBwm98BrEvYKJpS4PEEnasRqB3XUWtkLcwe91vTxjnUJx1qtEF9ic4oHWrWRip3ACwkFr1D8LgT2",
  "key8": "4aqeJF23NNEToSbSFTQWH2Sk6KQ6tCDC4XerjAUJkptSyBxJtMWRmWDpRaYSUegCjC2hJWq4JDBEr5zqe6jFGbBq",
  "key9": "5pcfkxpGp4m9urMRP2d1ScfXFxs725gPJFgNqNzMaamQ5Jf4D3Eo7jHM2pDf9SZxAtCJUmXRMqpWX2sUwp1EsaZU",
  "key10": "36xfzcHZoW6Ai3Pe3kqdYbZ3pSrbPRZomyw76YoQ5ggqkKGLRcUMe6BjDrzWkFf9FXgALfe6KVq6dc87SfYfpiXo",
  "key11": "4KSXco8JR7gZ1gjPsD1ef6Y3B2ujjRM3iYZJSzbqPVAh8ptS97HgDGotk2HFv9z2jLrW55WA54SDrQf27TUBjmoj",
  "key12": "58gmNBuKMpmL6Jn6UBRq33v6odPy1zEtXzWZLBpmrwqzbfTbMsn615rJiHsHSkLbjVYasMRxuPVHBdavE74KW497",
  "key13": "2hnF7BykR7ykRxNHwx5aZVE7hRv2basFREaVZjkWNEpmW6MMXbuCPu8XSJVNDdq1Wt7i2p9LnBkf3XW2TW1K5GWi",
  "key14": "5fFpi81WyEZKpn5ao5X7fo5EwK2kmhLoktTrQsQCUw2VYyeEzarFydFMRfxMjdH91Q3XERy9WibjmFMV7yqaEnNP",
  "key15": "51fhftwSAdQn1sxgrS9utpX1biSDgNWYRG2nLcpz9VMo2RTmAuGWjMbGg2iivnwwNh3XJ2fn2hVDpLzQgCYGrrnt",
  "key16": "XnAweZ7H9rS8fanc7db4uEh6zCqEd6kLE7bjuz6YLAcJ8gFBPe72R1wM55UJ793Azef5cjgD9ZHDmUSi6bDG1Mc",
  "key17": "3h7LQWv6CZmiM3aPg2oCnCFXV2Woc9pmS9wo1t5nm39Mmh5ekyy5ymwmCeghzNmkTeKcnjHYiMmKjvtZCAqbPKyp",
  "key18": "3xPGy1tgCq8XAZRKWKxnYro6VTCCctad9fURbDDo8BFw8be1nR5Re9WCCuDgzmrKzizF3v1W5VCSdZJ8KGfZP5Jg",
  "key19": "ALQVWcy4mx21KpNNaWNB2FzBTHBnNuLWphs6t2ubDSAUicxA6Zk1r6HaGccXfJ4JweeTHA7vb2A5bebXTWJ9aXU",
  "key20": "4vBrq7cip3JT5X2KNQ2nyYZWQxca1MikrAGadSY674rQfMedcPfQyKckwoNhDHGsB4baJgdG2Fti6AigUWoFLbZq",
  "key21": "4vSdKgjwD4MfmY7nDfXFBdRsDAS7gc3RV56pMtpa4PWA5jc1k2n2ZJvo2jrmLvGfXtTACeMfzs6z2r9RdbsX26Kp",
  "key22": "5XnLR7vHsV39gaUw3vpjr9Sk4zNc6d94yUhaNBYivV58SM4ram99JeQ4CoXTDBuoyN1Xk4WJVNWeY98q8CvkCVAg",
  "key23": "4hh3xEkSuV6axLCFYGZPatZ1Hggj4kRTr3CwGdLwkCWrqAbswQ5bngPFHfreeM7ENtp9CK3TgomtZ1ALRcas6nFM",
  "key24": "5h8xTZDecG5nkM13ov8Zn9pckL9WcDzqX8iKd33kWB8Yc5AvKRaddG7PU2Wuttd6tFSjeMrzpqXk7y2vnbA2NB63",
  "key25": "3en8RVexQmhumdUW8Cp2Ni9kB6BP1SSTA1Sk6cZwpzv1Pyy26wvqrsQQRYhibTWavcn54SMY5nvVFhpnkcLigux3",
  "key26": "k4GTNrrYEECYZZ7TgmuAB7qrG6v4hV95NCXnPQmBvDhpFMEceKrt9HaprsxxLU3PBAQJHwQgResb66LVErsksWZ",
  "key27": "4UMSnAJSE96X3SKvCTVS1UagVTwrF84zGmGZLhsuAiMZ7yhZvG51RrQvME2BppkCcSPZaoDvMAztdheMY3hxHK3Y"
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
