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
    "47oHZoi4kPTfWDdL4JVTmbwo8V53Eo4HoxQ19Xc3jkAcZYEGJ8Sj9cCXMuDsvGzUW7gUFsttkyP4Y3uDYDAY1cQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H1o7y7bsb99FriuMaHJa9BjMfYgei9DGABAuWPKXoBh9XUCuQR13UxtDrbWJnEV7DK6EnWugGUMkPij49UAYsKA",
  "key1": "2s4Wukd16uiznLQUTR42cgD2AipxFWfgRRkQPMAX3yjXRoGcSAp1qMGZ4SX7tWhop2vjZcKLUBzrrqgmMLQM3dXZ",
  "key2": "2SX9rG1TJvGfiAH7mSLqpZKkzZFjKAizEHQ7Pb8EJzG4WWrnZKg2tEtWGHrVirGaxzsVs7cDoMbgYtUKfjA92pBi",
  "key3": "3wrJw1mtXzo1AdeX2rjZYLC4AHEiEfJsphyaq1ZyKHiKPt2SgmJQsAYWKnmCW1dpsmqZ5m78gfHFWiKx8UfXrazX",
  "key4": "2jANbyqgw4p44q6CnBGAU2yAjipagbS8zRncK8bGoXyVr9Tn5zo4hjTGEJVEpTx6Wwn6vJpSczk88FAyumgKEqFW",
  "key5": "25sVRsu6Y134LnGQnWGmtuiPZoVJym6GQiMV8FeNRUQFWAmvLzYLnogUmjXMH8T2NP9LhrHibCrVZXXHjsgkpV8L",
  "key6": "4Ntu3NANvF2sC6hvFprzwrzjYSeM8yn2bcQijrEaDa2mMd57HrhT55nfDTsHwFzASPb5ZhTuZUS1bWSWi1EKmzjC",
  "key7": "4rgo8o9f4BnMUaEcuQMJwy2BdSbWzLByi4WEaYMjNdX5cxEDNGaBettjxafbN3zrKw7BKyAyw2GoMq4U8WstY1aB",
  "key8": "3om5S6JnXBbqg1FnZ3KnnCM4niHsUy9qsPNLNW6qVmDz1pDbmpDqQvXVT3x3zm3XuWcHfoC4vCvGbu6puWPFnXrV",
  "key9": "31WR7JzjFM6J3hJvrRq9THBKoxHbAHu6jJ36Eyw4mJhtjSoXmaGtzF54U7KxaueD45nmjXneKjMrjW9f33NtHax2",
  "key10": "43DUN3rpupUTe3y3AYQoiAgzu6KS1b6SFtCmPii1uqHiMe5Y3sveHQMYG5J8BR5ZHAEtbTqhos6xu9JzWVWCRKkR",
  "key11": "2LKdfS4rE3yZnt7fYEXs4DXUVtNJLFuiMYpMar2FZCWc5xgF8JY8ZkKDyQww3TY9DSfbqDCt1xvpu7aw7LqHirHY",
  "key12": "667nYaNtLBvs3h8gwBjYaVDefUNYPhHsjZaMKMKy9MrFnUY4NePTocLUp47ggziLyQfp7xg17D7qUwqiSj4HTFDB",
  "key13": "3uEdVpFyd1vEHkZQ2ZwCxka4c8Vh2izz74FvYzLj4gwrGCVx2JKuBPV3YnqRnusvKcyk3SSh7C8bAk7CHUfqKgEh",
  "key14": "4tBGR2QEnbNFQs8x6vP4bnQofb28E9m4FUBNEt2DAiQgkksAC8s2eQcAVnoPTvV5ZzVCnWN1twSTkRdkHadTjyko",
  "key15": "zCA2J6jxSyQH4fv6vQp9rQNGbx9cySfcbUJMaxBrpcBF3TVv2ZQokfoEesieWvPLbEYikViQcziKy9s4WfWb8wJ",
  "key16": "2xR2q9fNhE6D1XDEiRQx3xW3YaeQKR9aABu89FVaygWozipDYJhcT4QSx6SkmRkG23dYSPgja4SN7sgp3U6JpNXo",
  "key17": "rpKXWJGhfeLfwza7LDakm9HeBTxgku8JrKyAfHyPPdQUqiWqz9BcFqPns39U8ajyrS6nXhQgDdwbayMdsgNfMd3",
  "key18": "2Q3Bt4Y4FQecYjQHUu3GG181APezurFoo8kLRTs9kMU9cnV76MKLYetEzcqKDyYUHPtyjSmLKARsq3aJtyRoqEsv",
  "key19": "ahC3qVixTzAQY7PPJQshHotqqwCA6QwoqHfmxZw39exvSGZcwiV79ttwS21saYGkPLKhxVnejp5eQe1MWoVVZwH",
  "key20": "4RzrCCPDpfeZmsrWiUzzwkrvqqGXduCfCgSRh7QqWqhMxGzBgTHAhEY9d7DC49cMF88FTW3Vx3ZFfR1kwL1R2Sfu",
  "key21": "57mKT3MoBqsZXWziyGen432VJN7nAzigZ4ois8gQKmywCGpMnoHoFdEXCL2f3nmbebGqm2CscPLi2BxzQ5v6Rbi2",
  "key22": "5fEmiuAM7GT514qWwWSCMZEQ43wPVrngTPPKDhhQbKgqf5ASBFmsUpzAK2HMxfN6UGoWuguKMF57DCnPLs9RRZhD",
  "key23": "56bkPVw2sYJfKBUjnPm8KzQ7DPaLK3yRzx3TmQ1V6osmB7NBuPEsFA1DZ5gzhxWS3ojffK7ezJBfMizhZi3aUMAB",
  "key24": "4rVpJQyEzLmpW4zVkTk6zFFmFHyhHTka9LhZx4sTUtQHXK3f6qyzvyvoh6irrhj5qiwgbqJEDCYwhUAFPnH7TZWA",
  "key25": "4aj5mfDQ6QKHnPTFhBMdNcD8Z1LTUFPfcynevDZA3RECtzrtuVZyLqzk53qzr4wj9LL63oaVNCDtnHHzgpoFv2wD",
  "key26": "4DJrpjWte93ww67XeV4aJEa2Q2Xq3NT3yfK2p3NW6zC4rFCPot3cRjXNoBa9RXqVttHnkPgUk1eg3vgDBUpUXXjt",
  "key27": "32twTHxgfgGuEtdhMqpknpXtMucNc1ZWkmzJT2LQP4c1d1ZLL4rXYQAikSK7nH76uB1epoXf9j5ovAuUL9t6cqVD",
  "key28": "37PT8XrQgmARo3u3QeGthpECXxRZJNHr14tPUGXeeySAsRP3ks9QyareqjQCsmTG7vehFgucVkbY2a7HEtk7ypCz",
  "key29": "3YSHrmdjmbZvbtttajECo98niPhkfdSU6PEJnbsbfbHSsZzbLC5eiD6PmTKuz1VFzHZfPp648TpjKUku2vhS6zyg",
  "key30": "3bMYZQEaKonM2f1ecmEEphYPVRtGrqV8RYq5P1PLumDcFeZ5J5EJhDzWMUxnDP3K9vK3dZ847tjsxRVChmumjLXQ",
  "key31": "4d3kC3SVZUrpvJPooYoftheybFW8PqJHtJyuFZoYYHZEFcYSc4vAmj3vMHEMnybcsM2esKD6Eu6QgQRf8hWcTUq4"
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
