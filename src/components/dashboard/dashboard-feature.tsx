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
    "3zUiGM17Zd1wT259GgyyHcX5pSj29JCxVEHDEevic14am2qXxq58XqniS6Xt2NwiBsHH32uByCuVuiHxphGZ83KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aA7p3Wd8cDaT2WCwMQCWgqyF3NrwDGt2kGFjo6xEVoeQA6wecsZrJcVYAr8JSJHCwaULcVrNb6mRyiFimFvjLsx",
  "key1": "3p93EXJxzVKh1waShtrdwKWRY16giTnpm9AFwH2Aizkq38Dmg1VBtwReRozBigAPoGvXzb6BJN8W6WX8aEQRzfJ",
  "key2": "3w9hLvLF9t2oU3w8Fcyov55sFrgiUQ7dG3ryHDTzcdsoAraRTrLgSVV58ZJzt3iTQJrW4hi9UrjKjfiYbHXGh2fG",
  "key3": "5wo9FC2LWXfS6EEP9thk76BqQQnSTDw6BrvWKKEFZQMm7WY4CgGuZTkKjNUVRgmF73dPNDtUQhrriLjNYxs9wMbf",
  "key4": "WVZTe2ao3dmQvv9sCMvFJufeTdb2SF752LtLNfy3pdkBEb347vjC3bTFhzSh2A1RVjpw4BeM5XLbZeEDHLNDiWc",
  "key5": "2L9RozggZkBubn5TU9tUkLruFV86JSGb1d3RSX33rGKZyfTNM5bNmxKuR3ZeXZWkVh66Er5HLbjZXG862rQNLt3S",
  "key6": "3nF4j8giDHw5iguqkcGZP8T5eWGBZ415Ay57W1D6yB1ex6vVNJvF43aLdGpMBUjFZDhQvuNP2YdsZ9Cca9fPc2c1",
  "key7": "5ZJ6o1Tiya6dFRxJZbS7FSwcmPjTQ2t3oN9jgkgrZJoLGzXpuJM2c8K9eFZFZgt3G8SqJVVuY3Zxg9z1oDn9hMak",
  "key8": "5Gft5fXDKfYUGLQ9v5hGd8nT1ry8TqP9q91D2ywyFQQwu4S5sesvzo3LGM75bqWEStinuWxrJUBUKMNyihfc5rEN",
  "key9": "4q2myRQysSHsigYUu7kLpz7Gr9xQFssCQwahaftZVuD3J4WGXCitGVdHN5kfYLBBojCQ91aqwF6z7iQVUQ2kpmTN",
  "key10": "2Rc1t2qK6GE6XD8hhtZtAs8BixtomCkd17nLVvXsH4f6Z9xvD2cmD8RmaTcr89m2289ZM3yZjHWDF7DzZeMRrSmf",
  "key11": "3Q6WzSceQmfe761fia9K3JYECTp9bcnPbmWotNYtsSLPvioVSuVex8i1mAMcyNhsqPbgVrQt7xsm8E2myNHRVg1E",
  "key12": "5Jrb3YiQczmNAJkanfQUyoy4VtKPcyxpmM1qnwDznbYAvbv7enJSG8rvEhEYm8j8mMxnbsbgnVAygJUtoBv8Wtqh",
  "key13": "3ZiG2sjVNgT4UFwTmYpWGbTQNFw9JgmoG995f3fnEh8wW8MHYMupmS94DQqtKoSeZqdPQksDiraYbNoy3D3tsyhT",
  "key14": "4VC9P7zYnvwMMTVdFMhbwHsDocD2onwzQBN6mTrMpGR3DycrVei6Hy1FpbxVtsTexgJGgHjoKmFn8Q32nyUysXqL",
  "key15": "3uxb8EkSJ9jaXjikDvVtePLAMEvDcg3CpygiB4ohWPBY99Ts3geqgYaCkGrcgAkNRdEkdEQcGYn57fhHdfk5ws7m",
  "key16": "67HQgmTozFzLUmDRsL3nBvYEkBYz3JnNn1ix71a5fHwjeAYY5vt3TXvwovwmf2ZCNfFA4TC85RjT3togue7hV45G",
  "key17": "27G7NMuFXZNxfGQM886wWkqRU8DdtQBinz8Vm2CGh9xL1qcEAMJf3N1ivPw2CY8qBC9LxAcL1DdwMgwMTcvuT7Fa",
  "key18": "61yGxaneGZ9tk8tvDciAWLR3Jcn5eHgFgLNGvLKTzWLntAMgWjWwUdZB9mgWxc9S5SYUua6NErxL9fyqwt1aC2Cn",
  "key19": "VCSbaq2aYUArSrLRPjtzJ6GpE9jdQb4GRfYFX5infqwEU5pEhVQ3nhj3Zf2gXawgSmHFenX4Sv3Ba245ZeJRWvB",
  "key20": "3Thiq7RRbbez9Rmf6WY22LDhBWsUxUa4MJPgLh5irEapwxYgLnQErQ7AQ7iwscXn63Do6wpuRVEVvnZ2TW7DqXm",
  "key21": "125KQVSELfUHHUcvBGc19LYpwjdoS2EGLbvDwhqoTurXFHQeLPhdE4p1HLLaaXZiUSNxJ8BeCrNNGZoohVgPCD2b",
  "key22": "3b7RTwrFS2dfNzAP2oz6iuSCFjb4qrSnjfMZ5qDRPhiKaT4zRLvhMh8vqGyEHbJtoEi2i39vfMYbNqfDYtJkfLHj",
  "key23": "4LsbVheNXNcyhmeCVHnixZ8CadNNqw6bGhkqJui1sCtfP9vHCFr6NSDYyPuPprUgKSuRexzXEWPGS5c8zCSaChx7",
  "key24": "5kEXW4dxiRTzwAKjAMRo2gnVjHQucwZ75HoboR3ArESrhtbaufHT1ZQp3YHUyvq9ci3KbYUdQ1hMgEb6x81zgJKV",
  "key25": "3k4uYmNcmfk69CdiBePLSNAcuNwHKdqTuUMJjjpC84i6UHvH6C45E6UfCapJPx15omnwWtv1VCiSoS5M5LYDp6Bv",
  "key26": "k3N9PeVV16DVHRGQRCuu1FVfkvDhfHUJvkJaKrKbbdvroB4EkGQQ27TzFfqPdT5MiE3CC8jZRYUbmWCJYQuSQnr",
  "key27": "vGNZyjM38UhhguezT5z9kvTtrVz79oyDmkjETpDWgTuoxjJAPuoMHgRRnMXpip8kzCj2bexw5Ht7b8e4eGs9gKv"
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
