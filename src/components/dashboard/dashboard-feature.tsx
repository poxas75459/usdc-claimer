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
    "4Voro5vSGvmVDncAKXGCSGAnBPkJgtoSK2fxjtVym5PEako2bN1pZWDrVRgKfqHyrnqd4rsrS57Y9jJkKb5zcJEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DaLjv1ND3RGegMDbQdZHsaqMdfirCfj8NGdiR5Z34fRqXfAmbS2VPTLpjMW64qFMdK8szgukb5XWAEBi7mnoFzM",
  "key1": "5tAxSwi7kzk27XtDMdfmA9UU7ejB19946HRQKWkuK8bW8bqU35HugDg1byjkVP8N1upxaEAT9G7nZj7DraDfMJrh",
  "key2": "k9FcMgr5XWkeLpbLc4cbvYyEnAG8uXS8fbarJJP3MzUkU18Tt4wvivkry3fZ254DD3LV6JMryucfceDNKhNuH2q",
  "key3": "5kxg2RooE35yFZDJUHJZSzZdcx7uKxguFWETHBiBujc3cz8LGbYgBxe3NVQwLi7FTQtKEHXRLDXTVovPjJ7TqfxT",
  "key4": "3fEa7BpcWTyWJyFKuci8CQmHYvNCXy4Qx7pmZVuiEMNNfw2tuxjcP3RX3PVeGb7HC8XAjtgLcaAVoBTMB1C7nDYQ",
  "key5": "2zKwtveiMgw1DrTixgBYhkcW5Pyt7xsfHjpPAUMjhdGC4cKumUcnNXfUsd4zZBLcTat6NWL8nTkgaz1bnJcskkUs",
  "key6": "5V6RRhfpCKBbPYa6AYnPDdgDmP4Q9c2Uzh7oimoQ2BBWB79HVyLfcc9jxm4pkoLmsmvYf4f8cfJer3qRvR8EjuHT",
  "key7": "65gsGo6bxyEDqdK2bzMzDBJEMiLF2YphrgLQjcyqTrgEJSwqih5Z1dVDfkLQSneFgjD6hKHVZtRksTt9YA16o5VD",
  "key8": "4FpTe72uU3tuGzWwcz1X9DaYfiuEtyyz9ynd4mCvm5zhAMoGpRnc4r395sThvDzrQztubTYfQ6KEyh8ufKBFB6nh",
  "key9": "5Z8Jp8JJKvMCUoQFouFSHpFKCPHvGZgDU1Dk1wFVPcaiWKQHXzCaD4qJKqDU1HLwP516Un72fFiqmxe7DXWYo4Jo",
  "key10": "2mAYzB1RrF2XJqjSRFvdo2L33RnqYQZL8Xq8HUps8QkqEqQ52MmG3gQUwebrJ3ChXoHtnz7w7WGKAvFhKhK1gQz5",
  "key11": "3pFP4w6vs1cBGZgznhH3XtLRCo5LGDRZj8xa2JnjMony9ef2mE9Bjw9HQDHWVxYVE2MCKMxyLrnmPjBhWeu7Qtcq",
  "key12": "2nX179Cc9ws7XNH2eBdpKSpk4mBQKCdawXG2qGPSyCMtXw6Jmu7nWHPfcUG5C9XNw6zGVqy8mgF5FuTB6KmkgqP6",
  "key13": "3CPfQKF9Vxew7tW9VqRD6LL2XM4Edo1Y19NXutHfFx9Nzypimaiuj9t9MjoM4WxanNhMdXbr11SAhEGPb7KHXzjA",
  "key14": "4StTtaSv3cqfVj3KzWpiJDn6dhujis6aXQXHscgKsTvs4tiTMU71ipu31TqMmyx3CZK8gKTXtixoVin2Na7e61vA",
  "key15": "4ydwMV25auqmEEFxshCkndZpwcy6unbnRjwg5aUsHTevt452nojEUduSr7q4cgQiScNUirwmtMFkjbiXFy8P6Niy",
  "key16": "vptsnwX71xzEnrjWD6rCRwVM6B8jFrr41C5WpdMKFJ5ENLpd8A97DbftiWEgPyN21Cr2vRuYEDqLNq6yPbSa67A",
  "key17": "2hfur2pSCzAoKQpuNyJhQ4LjqLfdxSFphQ3set8uigvui4GM8KKdndh8N5HMFwjzBxhztZNC2qc9EHmS4iJYNBhv",
  "key18": "5MBX8vnRijC1MCJ84JpQxg7ZJy7NctNV3fg4aaBUGhHhXsprZ1JeAcEWRwEu2Nr8qS3XeDozHGBH67qwtLw2zHoc",
  "key19": "2WMiKGUo1odVRwFfhpYATjDGcmQ9BfACVUgiGxhyN1qcGNLJGCcGphoKPhbUmZDT5qWaSGnJMFJj6m79H34nBgTb",
  "key20": "2fz14CBiiU6FvKbyQZToLm2xfeJibwQz7otviZkwRr18cXsYZ1gy9wB8Hpuadt1GNqms5JYMYkUpvdXnoZmh2BQk",
  "key21": "33jq1xe4zY4vSM7SXKoNoxcZhb7qAs2RsPyYqi4sMWVw5VqfJP3ydC7nJ6X5G2H3Qg7msU4xo2wSQ6hQ82oxeb69",
  "key22": "5AErbUAxgzEi76aSrfPY4kHYk3bB4ES9NeZudDmxq8aVDw1Pw5u6fty6PxXaNAw8iJwnGnd1PSpTm4rJCvvaKYCZ",
  "key23": "628A22sQVogk4aDYS1V1vvxGe3zj83UGkwjLmDRX1BaieCLzkJJ98JvzJUpWW14Yb15hG2cAy2sM1khuqqXPUiRB",
  "key24": "62mjWedXdGWyEsZRkcHjRPXMENCc8wDatpS5DMutm8ZK2aCHEGUozn8dvv1nxBYtDfjuv9ZXt4ytFKxxxvRwQtqx",
  "key25": "5EixCvs5Kt24u7YDCYCTpCASEoQ66aihjyZUxp2pMpCHtL3tw775p3K3nqvQV7kEoUScu8aVpF8XLStKEwVKBM3V",
  "key26": "Ded46ZYn8BFfUvCf6FPaKuufyJYgnR9QMyWvsvNV8gcYTod2YKszrPh7uKpw5qzwhaezEmAbmNBrnz9FNJi369Y",
  "key27": "5dJDywnXqkE3NkHpxibVHtcAa2vJcL2mguhAYXqLJGoAKhF4j97evx5Ye8J8ysYvJqR8PQjavZxRCNimVnAS5gQd"
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
