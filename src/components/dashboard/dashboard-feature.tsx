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
    "5EPbuECGHSWM4m8TNFeNJMUbUDJSRs83HEeJNprikfgJsMMDexbx7Yzhj2rTiWyZBHWWR2EDRMFJAWbNn7g8MEqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZWM3ApPW6KRwMLK9stQHQXoYBLtD8CC2Bn7y2V7jz8jHAgb2VEVFhqGjvXmabgCPqdLAufNARE1Zh9vV2HstQyx",
  "key1": "2bQjz745zGrThKTPjShj3eJVwJWq9Qd9VA1aXyzHByJjAterhghb1s4h91dZVD5vGC4hVaYYJ4vhxEf9WD2PEsqq",
  "key2": "2beQ93T8KnyR9E5QAKbKyestqAcvzm2tgcZYGwq9rDDrRooxGLCvVPog46yspCcgnvyujNFhQZ5S7GJz58pYQtJ1",
  "key3": "3fbUf5hUkNea3idtZS6oPEZoKpDbFnyhp6QqDwBnE5hY6fEqEuR3nbTozqzEqJd3q4QSsaPMazFKodL2MGF4BW7",
  "key4": "DfDyVfXRukDAupjfczAjn41M3fh5zLJWFv4FuB1CV4Hao4DzM6k6WHSzUpoxTeKvz13JcGCE6HmgmxxiqTH11oy",
  "key5": "5oLRvzamhzW4GSdBGv7hjQLZ4nJqfczjrbUqWVek682dPSVXxbLrbEBGmQLK6zaCRdYnHMJKhqeMjugasnJS9atk",
  "key6": "3ztArsuJJbk3LDpe45DKcUHL1MgHiDoehYxBvXzd4WksWP6v5oTSn47EmEQyBXPKqJVsNXCanuCH5epJWjCkbBMp",
  "key7": "2PGrdhcmfZXJtmJQwu8Nuu6HB4vGqsAhwc2pc7i8ShsMzk3PdBjZU6EqrwcN6RA2vVc2Dxz17p6boJ9QqGsMu9cs",
  "key8": "2zi5n9b1yNeeQpbQRBduseu2W5GMsUuzA1tofrZaMqthKvxhiYwMsMor7Y7FZe5HBL6aCDfMGmLYh6Ywtvyux52T",
  "key9": "4QJL9AJAc95NnyotydMgd5nVkpQS5WCBr9cHmUeuyWuk7XFmHi9CkdSMbzhvZTZyQm7cf1YLLH71oM88hkL6WfBZ",
  "key10": "5mLH2cSq5XsR2XGnjCT68tUBs1Ef34iARnr2ZM7dKHrb4s3X2iGi6xs7NcAuX8gZoh9UQ8jiVFG91pTEbRSLriET",
  "key11": "4XfiNrWpPYyNrH2qX3hjZJjnwCTqqviJ7THKNRXDFoPjVzZ7JEukzNKvb7VFDcJMnqknDajsxqjKSKyVS84dk4RA",
  "key12": "5sAZJLDWm2i8utq6EpngN7Ws34C4PChspHhZYRyzKmjYBTVmF3FqKRsPjamBvemzUVDuhvj2LbuXJhMsZeAYHTzS",
  "key13": "583G1r8v5GGMtLq3Hu815HEunDPb6gheDAWpL8VkfAHmVWuWeB6WV5GfH51pJSuD7MLEbjw4p7GqfFeTqkaVkzRE",
  "key14": "5U413PSCPCnzXJbtPoBfiJf4xgT8LoyG71Nwq3heHEDkdewhVp3TnGqD3DBbZKwLW1NUoLBKKHbgSKhFsJAg2V5g",
  "key15": "3sFh7JpLndgCJ8iD9U2Bj9ax5nAzrzowRSA76c5ihMxPX3hjQX9cyg9LNRxkwCh5GZthGHUwmqbidJ9K7o29Mp4n",
  "key16": "2We7M7QP7TR2RieVkustp1gDvF5mqeJdeFHoYt4HvjvFbnEFBkRfmdZ9g6rwt2opFX4CrRRtpCGyMsKDnH62Vf4t",
  "key17": "29rWB4pSqDuaEtpsQ5w94bBCtAogYvCWyxcWFjQhPNgjn1MgEHw8ZK23GgQRD4eeYJD6EUmZ5JHj6t7b1V9Ncimw",
  "key18": "aUW26N39NcwCEZnmvyR8hUVs9ezNwR1cC99cceV8qeSof83e9XGnxpL53PvaQ6gE9LFjcbLDtor1tSdRC1VKiCF",
  "key19": "24DiD3T2NBFFh4oMgusDQaQH8CiHuGnMEQT6QnhF16T9yK9mp7wbiFShj17wn3nd8ZWJkbHtQkqLGsFWGj93icjw",
  "key20": "3uPU7TXEp7jUJ4Bt72tCkXrsHsYTQtQr25pvyn6cu1qVE3TA8dPYV7bVAEQV5q7UtCgvYHPhPSYc3QTZvhaNHKH5",
  "key21": "2ELiP9fBXaXZHTKTiN6biUiWEbkrSyhUpDg7WqAmxXYvARtaW7Q4H2pwRT7DxVW5ZKvxha3jvcR4aFDx2aFgNBzr",
  "key22": "3UNX4bR47hkwQ3W79iGCKh5HRzn8yJxTXt64GheaLS6DSwweawDKkicWuQ4ePZWKTcooitddieBd2eoeJQPqNmSU",
  "key23": "3mGuo98Sr9QSiWDByHFcHM4o4ndysxzTm4pfifTZ2WLQBQoz2ffTRHNnDF7eUjRus5Go8qBitZfS17y3jCjPtoGt",
  "key24": "tgwc8vmkd7xQqUrk6C2xntmzMJBxBizBPLPPhR5oTixutbyqNKDHwkgxmYrjSn4YVde7ySGanDY31ix379xbo1F"
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
