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
    "XWJny2Zz8KVvA5ZakZLeBMEd9j4zqqb42dNMBU8toe7CXSsCfmfTgXLKwbyHt4Nnchm9ZpC3NwYKZqGragg2kiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66wkKLbhu9TG2MDpe1D42WhkT2AtatkYorqgxbnpQZf93BUQP4aoe1QS9RqfXBpbsDvct3kGcUwycte9FWmkeeGC",
  "key1": "5aYo9qxWR7vsbphicXhkjVF4KCGfBPd5xEHPVR7b7QoLf4CGKw5kpbib4JD37MoFS2fjNDi2UoFNbnq9uJ6xYxhP",
  "key2": "4w1v8TiGTk9wpKeaYxSiAYhG22ouKScdGsf1HpBLHUNPaJWgCWirnxH9trun2PtZ9f1Y8FMggcJWHjjgTzetKGJ8",
  "key3": "47T3Jku9F7FU1wwoQ2dYso61jemAwhbrsBGqZ5rZ4gC7cPSmkQaUZi7PCd9y7HRmxbhbFF1yVdTq16FCxWwKwbWj",
  "key4": "5zV3myi2JCZ9tdpMFfRwQnkwzSg4FTiN77QzHbWpECypgct28SbHPwqYSL1mPLTJgu52NpmYPzaKvd5Qa1ninES3",
  "key5": "2QGneCqzyvw6xJmeYLSwzppKnTQECgbwSXxowvstcWFc66W6pdnknQj9gTKiu9WabEGFqtFSeLLnHdDd1pPYkNVw",
  "key6": "2jLmeMXQuXTAWFcgPMZz37qM2hP5cyJMHiFHC9q9yazipFXhV8EHLWaWSPNDDPHai6C97syJKG8CRMCZAAFW8K9W",
  "key7": "4QZcnq1Tfz3CsJrfZSFUzR73ooaRYwkzHdQ9vRFo8SnYysuaSQfEEr1ux68B45KQCuXHnW4htRZiojsi5dhcWVP",
  "key8": "C2jXKJ1C7jJ3bxC2nqN3PDnSNnvBD8gMUpFuR1oPZCAWQTzghjbuUKprZa5m9RFWw1Eo9d5iKpd34r5eNE4PUux",
  "key9": "5N5ng27zY5MMQT1psUdVxotwgnMafLeExNH7TQ1YfSnVepZR9VbKvDvzFLwndcvT56UATPmBgQgG4NAeLyzQ2tBv",
  "key10": "56FsroKKY25Nor5AcE7VvkDeTEAjcsXR2UM2H1Dn4x4eiVYXJacyqeezoM3xQh8PCEnqaaWkhHAvvyiZtBLYwF7V",
  "key11": "58vUnhYfcNPfvo6YAYXk6aQ7z9zMdTKMcoyybzbqZwjJUzwnkyK5sg9cW1YuUyWiTpVpE6iLKrNi96v3CTPmYp9j",
  "key12": "25NgUSpqyTwXVBujXXSNS21M8aE1tGtkSZG5byc2fk5wGNzG1EayYoRSYLDDXdnbzUXkQThn2FYxAVZxsMdXgdJY",
  "key13": "4PqnLyvMDizmLDgCoyjRA4m4L3xMrt8wQsCJAxEr3nVSAed4GTxFHigpkq5cVz9CRWFVVRYKpqWpbBjDoxtJkcJ6",
  "key14": "4DyTD9L8THPpm3vdXzZmUHrZ5DoL2GzBf4HsiATj4bpxisLtat931188VVXyaDuxzvV4zqK3EcuW6MiXUwFCvppu",
  "key15": "CdTW7EocQpjZJJ5WybmtmyVam2VMyjuEQj9B9j1LVoTYStP9RQRoWFzrv3sfRiDHYZjFabLzeUdtttdnfopdjb2",
  "key16": "2jnj8wnTN8NzeUhRMFU7FaV8yymgddqxW5ExsG2MfZ1VmnwVGeVrfN7ovGGhw8sUCL5AvKKnFACqUUdcYejYdgY",
  "key17": "4HjRJE6Q2wmkfFGLdfp2uZfZUNSTuXWxPcMw56uqCi3tmeJQfCSPVnEEfgFzZCS8Ck1ydfLdpX6v1MhrJrNK8wwJ",
  "key18": "sfaXkceMkfs2i6913GqWMwJfvi4urAoqYsJGaDDsP5hebjvp6K4Xvrsh7dZ15bwmmJPh9mKgjQ4seRz8T7snxxP",
  "key19": "sDczVHHWZ2zvvX1QT9PUM33h3u9UV74WWBmeehL1UCPRyqg3CxQ4MM6vd2AFoNBBLE6xwAmZ64mb5sN6oiZtBWT",
  "key20": "2kBdaoAh9tzL9ctHPjiiLEMNrmY2MEQiNepyHq5PsXanTbVc5mozSDpjKhcVqRuiFCKiDgqR2UcGH9PWhp81xQri",
  "key21": "4NKeKGVm2rYokkW1WoC9XLTRveuXY2ofHtPqmyBYhbQdoAa51rM2AeQsM9orUnZdxsj6e9auxBErGAKP4MsRb4Fs",
  "key22": "62crhe2jtZENrGNS6yS1NA3C9Ba6jxqWVRsKmPMtA8mGSwsUtM6Hgm9z9rmWvPfPLXs7ih6tDGv1TqYE3suReyww",
  "key23": "3pX72vSfvRMo8kVuVgZvAnrnkqffe5VNqBWM7sLbRoSdn2yEAoeek92a369VL2cniFcLEHfqhVCLEXruwZ8NUjk5",
  "key24": "2GgAL1hfkJWFxYkoK6cSG2tXKXY9hLu5KqtS94MZL7AeG1ndvpYHpd4cQDcSuTsE5Vos2T6CnPBCnD8yUtFy52Yg",
  "key25": "2cR8xRQB5ZEmDUe2nR39cxyXJFNuWFEwETnwPkL3ba5HxjC25tbZUGptbCRw11yUU1QBLJHUhPXKSroRQeQEtAhb"
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
