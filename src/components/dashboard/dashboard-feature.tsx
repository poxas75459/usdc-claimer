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
    "4N83QEvsmveqvbbV98qYqRvw9cA2Nmj6BQ778FfdDr6ZeQ9gyNpZWZtS6h4sU2p8YMJAybBm5i4tgiPGUCwh4YrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5s9dJonHPmgLXLRFf4qTJQEymgn4N3CFcLC4Wm7RLgCvy9DKWZyXYFWJPT7bbeKNs9RGC29w7DrgKkVyDcedMg",
  "key1": "UCX4mRTtyr5fB7H3PFzCWfSVPViQr2BsZTS41LTqzGpERaYucVZbkGJaNh3gahM9E2SbdH2dvzwminC9BeWRE35",
  "key2": "3qoeM14wbb3SRarVpYhTy8zm9NeQ6Zs32ZQpVqmJ4dgppN3WpcX5Hqxx6Y7FU2Jt2C6MC8K2PnvNnETu1Wu8oRBZ",
  "key3": "djBaEi1m1z6pzHgn4eMQb33NDpVGvRh5ZhXK6Hj97AjaWzq3qEn5caCpi5jRgmMNrUZMX9fKQ26ewRyUFRNMLQ9",
  "key4": "5AJ9ZxpK37G4rqHxGC5kxtTqgpoKuSJ1Dw8LdJUHgyHZJnD56CVyqzb1HAqCkWanRPPLvZe2ax4ETsQer3o995Dw",
  "key5": "4pjgZ2GW66QS4C54b8FUgDHRWbzzRaDCTFUJMRd7oiSkpHn81nfL5cEe5NoLiK7MSy7cangZkEv3zTeTc1hhJFEA",
  "key6": "34wLhybwRN8AbrUbeph6xDj4yfLNpEhQrwKW8dd9H8Giy5ACwKqECybMNZh6iKqcnENepYXmPcLCdUEcbEzhaj8f",
  "key7": "22q2DrngnVKG9nvQbCN5NkYKnLtDDv64wKNwd4NmPYbLvAVKNsG5JGA64aNs6cpm9TLTnkthqXPNMy7dpF4pyH4L",
  "key8": "4JdkKLTUvWDZmm8V3gQR6bFx1haFVWLfbvJdP1dvfKUUrxcmLS9FCaXkiytRMgRYQtg7xrwntzxfcg28WueJ5mcn",
  "key9": "41LhWEn91GLs2W9LEoDXDSeiYJByFrsRx15VUyKQkKAqAJYjtpSYLppBWv5ExYRQ3kcCBDWXNCSh8NNFfWzdm97q",
  "key10": "5ec9ZfmVyCsxKGr6sEvHPDhDV5UX96Efura6zPNk18pMjk5UjJP5u2pzBUsLM9tTsNtPivihNAeezqtuk7WHd6Ti",
  "key11": "49x3BBHPQMTdrSVdk96jFd9VqqJECtfeWe9SxxPspTwKHxQBryqhtcUwJZzGnACexY6ECQYvCkhw2zdNChqkuPr7",
  "key12": "5q9g9suzLdjJUDnLWZxGGv6Uo6t3T8PAdL9RRi1kPdXERZKykMnjEajXvSrA7XxMsf3zNuH4pEv8vdr2EVgwsLoZ",
  "key13": "2NVcb1f3EVe62qoW1HD6heGtpLcpWVTvCYjZJBfckF1Ea4CNGvN9W2PHUPBMDVGnfVV6kJavW7RaH1Fi2WfHyd4v",
  "key14": "uQLp64tR7tU9euTBrmxc6UNan5G3HDXAnVyh465qG8bSiZPD3jMpEJpNGoNpfnGx5DfnWe8UoC47fMAkpgdHesF",
  "key15": "3nS3q5ZrUy7iqn9bBDKZcyp2W7iTGN8tGh8d5b7RWzRgHRHMgAxASPivu49vZQCzvBSBu6zAz7NGMvbo3893wuFs",
  "key16": "3dmMEW4AShiZicXWpcMeNPVRSLpK937XLB5x8Tf9cP3SPhqyVXYwra8gaYdFzycX34uSnvM1UwSf7E943nLyf2Zy",
  "key17": "2h73TAiw35HGwiCYsVxXx3Ep2ngukoetyr1KwrY9zCxbNBudH7x7EU4cHArUfYwVhRF37wiCvpAvZteRzxxyAPzV",
  "key18": "4UqYtk2nKFPKg6qNSi87nhiYophzeeXZJRSryKc5CabCo8gD1dbnktjZnEaJxmAtugU1SgcCDXv7zZLHmgqQr2Cn",
  "key19": "2erpYCT5FvxY48VijobVXBn1gFmse29TYtyBAQRxGFM5VBNTFvRYnRnnxHzb8CB9T3LTLyh87wnwQJ8aFsrRPC45",
  "key20": "2HixR8fzRVHuRrZrPQtJ5kMzZeCQg1xmg2NSGVqaQxgpyigCEu8iGaKWsiU7VbQByo44nPvBVeQYPS4ZKfiuiQXL",
  "key21": "2rP2VzHADKvBE9gaot7GH7CiYKspViJpBmpUWWJoLG6Gggyz5hPEiQJsFBFNSLeuenUEftUQ13TComnHE4oYEDz4",
  "key22": "232D6e4NU4KshXTzxrUr8fVmgvui9j19gp5M8EaC1rA1jKDmMkrgCXJUTKUgUQhy8mAjqR7jDje9rbg6kdo8WYoe",
  "key23": "4zgoZUS92qJ8DBo3aVuRvZL6NVhhvGdrj3CoRSvYJsXdeayJ3zwU3vr4kmQL9FvoGZntRn8px1AHe6AMNtuNmHDK",
  "key24": "2rimJpQvRE8fSAE5g8dWzi6b56QECYtMAKF345SvsBpetAij8ZtV523xPfHEAAubVE3eHHQ7FknhPgUjXRtFoZp4",
  "key25": "5op9527t6mcYJ9NimPPUaJqQwayXn5BwtqFz4nCRFxnjQ87KpqUnRzCtiZNsZKxKV8sx98zcvznDAuo1kGhfqFUv"
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
