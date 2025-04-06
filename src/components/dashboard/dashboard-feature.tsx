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
    "636KPzzRNPbPC5wm4BEEdRneEN7druAQhwT66z7djSdqfLMjdSLbbMNKTQu3qZJEfjkjTDSEMwribDA9NTpUbCiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q5sr9th17yq8wtWRYovHELXgtZ3fNfRhCSirzF8xAzu3a1uGndfmaTZ7PGSvzpY6npwBbUYEiBLoBXr3H8JSqZQ",
  "key1": "2ngDfUYm482oaLFH29jQY3hGXJgdxMtaLrEZYMi5YMzwZJSoY9QUJjkgYjnTygFqdwPB17jJXtu32RWUuCVQuvTh",
  "key2": "ejJLxSASKfMibLGiLvLAPYB8JSPCiLQfwbCXdTumuvrhZPTvMyzwn9ZMpFkY1Pu9Z4xZcaTsAETJS46ZQMkQMGF",
  "key3": "5Wi8QRHaaG5f8KPWT1aaSkDCB2WhMFmJzTaSbGofRCU6W7GA7tNLRcm7RAURQJuPBPQhvd7XEcNxsm1yUv1hYALY",
  "key4": "2F56GmDcYhqr7v7vG6z4k6AoTp2kY4BhUXK8Jtxcv7of92Bj65EDs9Euje6zqHQ7wPSewPJpMibD4V8ueD5jQUSM",
  "key5": "3i9Wp7jnLMN3XBu7e4qizdgkteEM4HFmtrsarpcUemmqejLczkBxuwoLiUa4yV8uwwmWWpEQ9ZpNJpWAHNuJPMfM",
  "key6": "4JtGt1YVYD1hFyJA2FDYK95gukqTardAHaa4G4smWAjE128prCHNBAotYxL2qFGWbVnyTmqU422hGs48FjtgvmPX",
  "key7": "2tUhVVxqHtLCW9CpXdLXRD9iwLWffDLRUHKyMpeLhpg51pf5RyG2orPpGegDHg2jPBxEnnc2tHYzAGyBSZ24xS71",
  "key8": "2JzvpL19rxwvSwivmb8zLm9vDaG5rMrkwEhy9txxqJtME4bZ6BjuyFYteSm6UDJLLbdPDALNFDfQ3PGgREggtG24",
  "key9": "jyUZBJaBRUP6D55cujYq2d13mSBSmznQXZqDJzm6oBZpxatH1LJyw1zfUNW6iUoDWq6LsLgJxZ8AsDNi1UpPM4J",
  "key10": "5orTLwqDrixCKjSFNB8CRaiHXzxN66dXRNTMhyAdX8a3VQAABcnVhib154g1FWAimGe9WLFCobw18ut1AaiCgAww",
  "key11": "XiAHT1z6LCVFug79QR7ETcwuoKqZyJhWFEvzv8EBvNiSsaLPuorXzxibn84r9iX8RQQMw3c281qGygxcmXraszn",
  "key12": "4TwmiuB57tkByFf5zeFkjFpdEPNNtyjtuVZnMMZDz4bMS9cB8Tt5zkj5QbYpdwuHfKPZHYa2ZsTGrfhFuiUF3be",
  "key13": "3JcCRPq9F9iBR1r5fCmXTnXm8D696BUkoMBoSQMiTWV3FMDPpgr1WQjsEeqeU765C8KccNcyPAZkbXCUdRodKVpo",
  "key14": "3GEebCmsjFJuWsTxxF4WuTzszzujjwhoHQXh6SitiGgD2LdBatgQGqrFFFJBYJfo3KJcsYmbQkA7AzhtWJAm66tf",
  "key15": "4rmskzXE5n654j76YQscpq3zFupXrJ2dwxFn3H6257nKC9QAo5vXwixfu2juJfUGJHJpRpxPp2PdJF2xnchge4KX",
  "key16": "31qX8R22jqxznedoMixnBknoEg9tFs3bNz3ek2CAwUo2RW7FSFjeUom8zQPoCJi8Xgx8tPvyBb4x2uzhnADj8kkN",
  "key17": "66QrhtBHihdHoWNJNAMeFMvwEWEHqujEBQp8RUibXASrc455Qatg9LjYrPAiRbGsFUsog94p4qycNCwXqoGVmNm",
  "key18": "37iGbLCLsJ7SpgjRTZSKYhhfdUjfvv4gK28vNquAePt3thF2yFVJcqtfLKMThkF4MwCSVPLNNVQ1kg56MqNPizMu",
  "key19": "56GfFdUsx887A17t94qeQKyDU71w2sqDDCtNxP6CwSPAhGq4Xy8o37xA9T6397EiRgaHC6k4254fYcRZgdXjDxAy",
  "key20": "5or4LuiQsN39MtB4gfUeRAjW9cPqpi6Uc6Wgb9QQf5ZieaRM42ZCQD69cWLMJL8BVUMG25TbpKbt3mmm55ViU31W",
  "key21": "4ReuuDSNmM4n45uEGzfg21LMMRtcH4DiiqFxYfeoo81GP1rvYhvc2oomFhmCtnodeL8zMgqNX88ei6MQUNSMVcrn",
  "key22": "3vaTJVvZqcFXFQ8PQ7j9jDRnLFjbaFf9JBcezP3S1v2yaAeF19yJ2bDeBKqHCKV1GALxME5jHXcjKApiaGcsZpo",
  "key23": "594e9yxy33g4dw556iFPMvLX2UWYR2ig4PKUPozRxeur4u6S6qd7tJ94TkBKdD8imPLW2hBWkYn8D4AorNiZkRgN",
  "key24": "4sbwTnptGXTkeNhViF2dMpmuvSpwTUjjXvVbHJgbj7Uort9rKL2ReRpAs9i723gcpGH7vcA3xLjGWiLATi8bR9rZ",
  "key25": "w5EwPny9ikPsjStYKm6zSgt9zLn3ZEJsJd3T1a55tbdqDUuzHv7wBezBzU8BywNByYr5mEzwpaY5weCSDjgHQaq",
  "key26": "5HkniRm7BQcjyZ5REoo8wauxfqRcKy1WaKyBX7PFTVCViqinZS9StjP6msHteAaD9tqBcoVGFWCdX6UN1zQ1ZuGU",
  "key27": "5VuQKunPxLtsZ4bDp2SM3CcErjo5mnRCvn8KWpn7JzYXpzqLuhJvke3yJmYoHvAM8mRZ3idSC9NquXgDU5UdGw6v"
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
