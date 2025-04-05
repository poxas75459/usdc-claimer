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
    "3DqtcL8bQqt1zuQRFFPkzH1p8nEXNkR8ExUj1L3tp8t6q6FNrQj4Xc7B44kWuuRr7wkQQ1yiH1STmYnSbeLMNwRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bEdYdmbzBGKAnPKcyM9uSn4iBkEefNSHuNGoGnhJvGuy5Rxq6QcLjwdnBtgxdP5d1o5fDkZ5EnEw55FW3TQDvtt",
  "key1": "243mhZpHEfLY3X5PWaD7xFAmUSCBPDBY6fF1bkrbgfDDyqrVWWeau2DqyYkanpe7Q7Jp4GPdCcu8fk7zvhak9zjK",
  "key2": "5ZbrM4ou69pp8kVAuBPbCU5jxpNJPQrzmo24R81wgv8mWi3nosB6wxkWppNqvppPzccaZv9oKn2BQy4r1mkfdcXx",
  "key3": "2V8KPgdK2byFuVD2NTmGCuDqBTX8PvjGtKf74Kt3ZeAey9i97tM52nns8Tz27eL5mD9RnDokQsqa8QuveoAALPH1",
  "key4": "5jgVuTR5nfg9ZHzY3LMQuL4VruVg9M1d41GT2PNPMLFPYtd8PVrJmpSjWFzvPWD3yzBUgZx1HecFEuS9MBUi4iai",
  "key5": "1a88a3djyymGMx4DAgtpdwBTagX389jHvXSYTQsRdcmZMzuB8RKUJDzXLE8hEZT21868mFUHiteCDX4QuxPERo1",
  "key6": "3vAm4wBukZQhzpJi6V7hL9wFRC5pKjWrGYehRPACRTN1wPLxmFsQyY9ZY2dcomc9H4wqdHE3SahAsAfXeQxMVomR",
  "key7": "5egHPn7BWcaEWw5C7WsGhDFceBCBvj9m7VGonojWAnURCwqQm4kZUzfsv9UoKxUjRvEfZ5uCcKiTejzEfshXB2LU",
  "key8": "5bjWkDWVk9tTrpq9mp3DrdgShz8Fg6Nyj3rjG5mtu1QM8fsBBpF73vMgf7EXrdeqTpqaCMfikinycAErK7BznXVL",
  "key9": "65pz7pU7ceZXnnnRVdWq1Wb1BRHtUSajchTa16K4YJUE7Jby8JpH6Bs9NQCEQ2tDc313uhUomw6nb1ZD8RiNEEjy",
  "key10": "2Xgi2f29CXBarANHZHmGbQoQggyypqF6z4hKefv5rgqqXKSLz6xt11VuqkPoB1AREgikz86nxX16P2fLa72mBYnn",
  "key11": "39H4m2UvpgEirGnucmoNtQJbE7FQBV9N6r5yGZkYRgyvq2CWd6c8mDUWDq2kJN3u71ndZGnaXveP7nKi3KWLkbYF",
  "key12": "3H3LE91N2GxnHa91Fu6kvVRt7wC7P2p7Y7hTkJS73agzLToEPHRgX8dUfL6NU2pCbmrC8nL6ZC7VouHG5pVUGHtS",
  "key13": "228iPziKdTn44TMUPUQpCeLhtXBSwFn4KvL2UTvaGy8snyWejXSSZtSUYy9LFo4jzrFdxLnCxoERcbmthYsn6P6i",
  "key14": "532KbBk1FfZq8fjX4v7XToiNrGhHJQuYcbR98CDgwB9SwwRqzThhYUhXXWAVeh5bXixu1CDnQqXq4dKgtLj2PWa",
  "key15": "5waTZBVD5GJvQp4xnCJZcT8brpekf1L81HxQ3F9Yqyp5VTQcyqnvrDv39hVZQNKtehhRwiujWsJjkU412NcCetCi",
  "key16": "4YAJXrHeVZzLoWeiPm7kZmiK3nb6HoaJ2tm3dHhCQh9knTFKnfc9tXh4YUnDRmhRcYFzhkCCv12EymYHMaTKSxc8",
  "key17": "iRvhd5xQcbUuE6uVvYkHKwGyWLJayKcNnCR4Vb8xzTSi3eb4BoUfuyEYAmjrmgVwwM8NX1uWLV21i9g6ysE8VT2",
  "key18": "66GR9P8zkmdQWpjDYmeDLjpWLX3HeukHeUiqKNtWQC7cQqmJXM4YvDinUfxXvVic2M3EtYcPe74owsiC8Lq6UU6H",
  "key19": "2j4XGfYwWCcQf5eCbFByknnZvytovmrANs5uGEzSH6t8GisrkCYYreG1jGLfe9ciMAaFUVTC9gbkRQSEaPFD33k3",
  "key20": "3JbTDdB4bWBuX5is34ff4PzKirKKKUseMSGXvrScbDznF4Ld1vT4oDqyD2ar1zNQ1Gg8AHtocsdCyYSLCuL355wH",
  "key21": "wHarQQCeNQbprDJn5r8KVcdPp7d6sKLb2JCQN7WKkbDatQsRSVaqhvUdsVC3wUBE8FTVmbAsidrNmypCFRvNUbu",
  "key22": "25CBSuVoaBoigN1bihp4RvoXzHjWk4CHsBXvLxSgXhxQayUzu2N2V9Dp1LkTUETEMzp7G8rSScmAgKQJpYi5tz24",
  "key23": "2q68cGtoW2PNjvDF74e4jL9ggzRwp4Q3HvfT1Ssdvc2zeLp7s7V3jxPrvM4abvsy24DKpZzBeBxNY6yZy5i6bCoS",
  "key24": "t7PiHmieT2Hy2wv7dsCWHrvDZMqff6agW6PmPxcgfMF4ieLUPTCCoysgR4uKogd4TRuxiasMnsJ5sHyFiDtFPyP",
  "key25": "3z5zSe93eE5jfExkhqFVAY9qmgRJ6UQMYpdnxb6wJLYHsdPfbKpCi6tPiab3Piae1Ne7f2YfMSAdRYponG6C455Y",
  "key26": "32YcExJCHKhS4Qo5hr543pYF6mD4TjSfVqb27WrzGVeUuqZzx3sxi44ED8XXLP1h7Rdy4cdoRrAypDH9RpUDWETx",
  "key27": "4ufY4CJTHzn1zNDtD5i3KX6h4t6izayfDySaRS8y9SPXLubTYccwQSzCb7bpcnzogE6PEibkAa9ZGhsiMA6XR1Po",
  "key28": "2XjXna5sNGR27W6Rx81yCiJ1Jd9CEzHCuerhtaWijxFes1w1NTHWczZFABesqqR15fMNp8PWWThTYggv9z7Cui5r"
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
