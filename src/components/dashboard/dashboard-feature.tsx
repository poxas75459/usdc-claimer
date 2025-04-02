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
    "2ZLXor5ZmATnY1j9cAJxXQV2r8ndoBvAM3Vt4PsBeyF8SR7kd1YZcFp7DD9P3XfUzmenKt7VBo3Df25KqmjBFktM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eCZ3XZZVYv9HhMTK2PGEMi1mHDzpnF2J2rPiQopVkiTuoQwsbJ5Hm3fpzRb7DRXrkUnVid874sDQCSrMCdMMfpb",
  "key1": "5TW7E4eZ99542Mqocybm6gFTdPGs64wGJaAtrX9t1p1AVf8V5vA63dUtqrkA4pUQS8xPXLucrB6pBAZ5rodZ9bZY",
  "key2": "5wix2B91ddXgvfaGAd5Z6M2p67jjtQcHKPsZBSKqhKBmR7d4rKqikudQ5KYqxQfRiwz1Pk2Xz3JVrTEsrpMu8eLh",
  "key3": "4FXo2YZaH3gHMSj83FA9iLvQg8DbsDQ8kwqjBVqB5k9DbmNBnpmTR6rqojjP929nwo7ovPMeX2ZxJwDk71c1iddG",
  "key4": "3oyrppEJMbHRxAV9xSb2pBsYuMaGq2jjYcSaW4uxniR9wxJhk9ysEdcZhwG4S9jYAM56txQmWdEpFveZtZCf4WeT",
  "key5": "642uLEQWomwSCZsVjyJN9SV1JxGWNTcf3ZvaaZYqsFzKFdEmEaSiWdPAGfAqfD2Hn51CKGLwhuzVcKbtPZ4pEJ9T",
  "key6": "3hRh9KHDm31zMxmm4KbdTydz8tRcZKeGMxS67CZDNCAxJ7uUxCkiZUaRFuQr5u6uAJbmgs6ugyouYyU7UUScHLNX",
  "key7": "58yTMAEtTfHYd5faguspDpXx9n3wPewfbXSr4qpyHYbhDCh4xsgvnVofb9F2JjPKzERsMbZFy1KEzE3SpZ3p1gXw",
  "key8": "RpH6p2DUcoWdR96WDaZFuftQBexyUfXLXPoxGVCGyJgA4Vc7vgMQYnyhGgckZhuoc6QGbkTnrecdrg6DzNv4HXC",
  "key9": "L9r1SX8R6riowZbCFpFcLYzuFvCbFfvFRM4jyyHvq2wQwQkZsLffPSG1L39u6ZAY2aFK9zW8Eys8GrL8BMa3CUf",
  "key10": "3M5beeYgzeA6rHvxfEnFcZAgj5JV8wZvak1b2LAWHN8TQMuB2TKteMgfKAaYptV5ahCMerZJm5e7umeKfE3L2Wfv",
  "key11": "6EZUHKj3b5XyerVBqioSnsVYSbFfpkrDo2HwRNAmAev9fbJHUgsDU2dhXP2Vk8NVE1WZyZ1ygPeJY9J1FRSErQG",
  "key12": "rmQP7vEGc64wvZsjUYS3NCeqmxZ86R7PSy7yxNJn7MApaA3ZWweBCSnEipEWd6V4Ln8uANSkMJSNhjnEwzQtE61",
  "key13": "4my7uGPhMGVU1k6Tu3nvksLNjmPpGsuvDZqiWT26vTwTHKpJFQ87znbX6LYVXyHag4DA43tQmSVovB6NQmXQvFYL",
  "key14": "33x5LjB5iCUxGbf5FvLxhme8d1TY8irgRijJweajG2ja4kq5j2MvzWssRWRtDfbVC2h1sZQfd2sBqvekxe7dZHWX",
  "key15": "AnK461bnYdWN2duAhyJRc4YzxYEDTK4r31gcs24jiyJ6uF6QjqA9Pjw4jEYq9w3Y4zHUCTbfugGqcBvwYTpFcvh",
  "key16": "3XT6JFoopcrkkujZrRWndHj4eDFojifytxWjFMtcUqRnD88Vxoea5vdTswdjADCxW5PbtRXtLEMVF6beajn7c1yq",
  "key17": "5r96SRiio87UiLt6NwaXJv8gcK2mkyS6tQEHszLVz3KUa6DkL3oH4adBoioYrfbWv2oFVwDcnroXp4zYt7hB9drc",
  "key18": "56w3sXYdtvad7i5M1ebgfab4qNNwj5oXjvUqtYFWeRtcvygzzjYVfYNbfbhULUWTPZCwxhdxJJEgLRUwsASxV5yd",
  "key19": "3rjenQmWdAc2wpEw4WrSvVZ4rGrLe5HFRsY6YxqGrmgdywzzGNq46abTHZgjQXh6ztuxYhXpvv8PrCWfnar2wMUF",
  "key20": "5ARQ7Vuxxrcs2G3WMxKnkWEmYdcQLfbR9JCrUjqHrHDpJw34644DVok2Dn4vvK9tiUtsQg8jYFZByEL41YwfG7jd",
  "key21": "3kWeFyj5CiVfyVnUguX3nG9v1xNEkxr8baYtEk4WcDuFUMbtp193i2BcFx1eqV1bftuqXKZ1n3X1EhzNs7Ezv66c",
  "key22": "5SU9eNXcAqVFn3StXX5Ps6FxKLLHmMjBGVMrRjdSmjf9QQWaVb1mHgqTwxSe4Cno8VeU6UgR1pr8WJQ9bzJZKbS6",
  "key23": "4qxBM8v3oFff9FRCSMra3tPc2ADtxLKHCt8cspcDvPGmZNyuKdPtUgyiH516QRrFTBEjZs9TeMGoTgqZp7wx355H",
  "key24": "21MggzYp642AS5SadrCoM8R8y8NCHKhzjunHjXpGSEuEEucG3qFzVtgsxoqxBnSoEm4nA6a3Uu93dQCzXVPtk9s5"
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
