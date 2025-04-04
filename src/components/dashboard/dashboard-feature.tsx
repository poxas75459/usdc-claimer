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
    "3P72HdQAdmnULx8jZBbpwM8iazArKCmptc1a9qjqT3fTKwytmtBJ84K175EzvDmUW8tTYtjpAuotLHdMQYQFwHUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SpjFydQ3mPQjN5pwgsUx4PJCVxLxM4mGhqDu3pzRiNNCXavr8ZHo8LPwi3aUqHNwkqhLjKF2V8CQsPXFv6zF5rV",
  "key1": "cbyFfKVo3NYKAMyJbxRv16u4QYTB6Bc1JaZkzyf5V9cYGiAjWyR1f6yghL2cRtmPeDJMLxr3X7z4gVxyLSCzRi3",
  "key2": "3u8cGgTtS7u6g4hUbbvSwFh7MszMMktcTMjQDpAM35PdAUY48uRfk6TSU3Uk9N5Kc7DuHM1GPn2rhAcUXqaJqR9t",
  "key3": "5dN8xVie78tunawyc7dUprS2BwEuc14CRh8LzSWCtUphPoGtUpsDwaiYgqCFbmZJC4S8Gr5c47b1s76u9ri1GrbD",
  "key4": "2kFiB6ePZUaPXa6Fto3QmBV39jp5igqjnrrrxmy5PGU1g5XFiAdy4t3GBZRX5pXR9CpWg8dmHMhsWYe7RxW9J3Ew",
  "key5": "45hoMNpvLkdYAAGarxFso8jDMwdvscizgQeifKRC5BHJm95icndFvRzW1ygMi9g9R99kvndJ2uuN5aAAD5guUQ8y",
  "key6": "5DYuDnNxzMQLcAaZkaH9Dd85Map3CnC19Jf59XcjgAFac9cZCGp4z53a2q6xs1CVfBLunrPH1BX8x1BnsETemwGu",
  "key7": "39LoSpWTijtgYuG4gc5d23cKGeZw1GvayA62bNjjCPPzp3gKnTg7GYCVCwyE1SaSmcFsDVf7mHDszfytd7HfuTYD",
  "key8": "3syejS6sApp1JXk38GFUMBYfXbFTauDJjQEH629pcK1FwUCTxM7qCo7qKSo6fBgMRUFn9KPnVGS8fUrE4NowZKE5",
  "key9": "3MieFECP4HNZ51ASRX7yD5tYcF5tfSyfNyrKhegMJWvgK1RfRScDkqS2tjwGBzoGPkofhd9LGbVXwcMEMc2nwgXj",
  "key10": "4DvsFJoq2BRVg4ctomsyuAucKVCVgygB3rYuh2VZJ3wqXmPVg3aD6m4JGzkBM2rE4N7mSx6cKfts6EP3mfUpUjVE",
  "key11": "cwnSrvaDEwGbHq1NGhH5HG8eRfYAxfAszRq7o2QvgaoGd9k2NWySyTHBDt7K31fByFcLvs18DF3YMqjkbnEi1bi",
  "key12": "63RJcY6PiDQMewgA7Tu8G4HZikZe6CDPttxWzjqHTPNzW1PPuMVUiCpB6NYqvrRXHCGiQk5JxTrAa6oBxGCpJupL",
  "key13": "2bd5FMopSUosQP9uQuTKgaUK1wDxtTcWaCrGKBQFuPEDFTWXs5Sv6d9QdxtQ5xAa4YcRxpFYJqtEvXRsazUpmC3W",
  "key14": "2pi5qUiiWbS5DAmrdNu7Bvbwth6AcDNkntSoGFhTckFsWjZ1W2G4wvgfCWVfweKiR5dMJw5ABTuuMW2s7bPFKCQb",
  "key15": "Hak3Fd3V1Jf5L7U3ZzKVc1Q9Lg9JNHxW8bg92CR7kxnW1UH73uZzM3Tp6tg3a9nzjazChhBnFyPvZnMeuVJ3kiR",
  "key16": "2XfWC1RpdwMUnbq5P5pkHvv1NSUMf1vFJFqG1r4jUhgsM7adLUuwjaXUSfYKJESN9SYowfewhqwFiYXnoxvhowJ5",
  "key17": "3BgrKrAKY8tMAsSeisdqvsSr1pnTK4ZHHtwPk9c1QTvrbSnsqnAkasUu99ZVVHVDUquNGddsvQCE3e5dxtR7WVxV",
  "key18": "fnWekNEiEb5bZbBGSwm5kbrpDX2hWDpHCeS38KSqTnYanTmpUyYVY2Me13GH5xYaQFfJVRHk2vRYumS5fwLZT9X",
  "key19": "DZyxb1getZDMYmUr1m8cj3JCv4LAuxH5HUyAYZGZh6FjJgyd9SsHs4ZKH9MYyja3GPkZg5B1PpsVkLVVgfaGtY6",
  "key20": "2H4NjbJ6JEFPiG2zzQuqhEmG8ZkGyCrVw8VxXNUMs1tiDp82kxXuHrcLnSmRNtNhA3DarkpUJvZptCbk9g1Q7wR1",
  "key21": "54BgR5okyzKUWnwXuvEUmsotHHcNqkQG4Nt8BntA5A4KF4jHZAtbziNtusL6tjNzuWUduhs71PrThqS245ARKLDv",
  "key22": "2muVKNDivbAdXiCU7KUqpkNfRi9tCTkGz7nqT1apyLJbBQmFNND5sru6CjDq5b6Bt2v74Yrdh66CeCgPHe7njBS8",
  "key23": "P6swU7UrtYPtqSiZc6MhHxuSc6zBJxsWWPp1iKTQKzHYSPvgECPywX1oLWuUsDHELRKvdmNeVe6sVBX1kscQgLM",
  "key24": "21S39VHFm9Gcq2MVPr4DKYvrfcKGCw8KRYzngPh1NBGhY1YhfReoXCZ59NNLv7tX4hh7yRto2JhvrR7BHjrLQg8P",
  "key25": "5zGd1qWfSiErfvNM1d6ECthHKUGodwt1evG6dobCEi3bcysF4YnpmbSstqFTYNH9tUiG4pQzayB8EvjXog69h5QT",
  "key26": "3fQ8rFkYdL4E5DS8qGstTr5hgmW7gQUKbExQZiWACAqeQz5ZxBZYrW8h8psXd7tXfJmWiwzxpnFv3qYrqgGEbbgb",
  "key27": "WTd2gQwpmtSKq4vCphPeeasXN23QPRBFR2WddJyrHqLyGT7DK1xGapo9kAi7h44sMRbrCtRNomPuCS73sKtkKBx",
  "key28": "31Pg6xzyhLqwXSK33C4oUcC3z2pYk6TQvzG6jbyKWnZcQcmfofz2FK9Lf8nxFktrA4CkPv6CFwxAHYKiy1hQtbjR",
  "key29": "3DWXigJqHLtnWyPJCLv2DyBvimnxAukG6dRwRj3hgj1xGUGAPU2oR855y5AZj1SWbDgzmgnQ97w6BhWZ8yzGpXEc",
  "key30": "3XxWzAqWFjGfY3yfBprznZMYwjo6k3nySqw8g7Rfn92sZUP2M2MLX9vwB52eZy44MgAjdxncgsD68nE1A57YuejV",
  "key31": "2vacaCgBUnqi4632XCoVTfesYetfD955JstweHftRaAFhGroJd77ofqb4JrRjEZhEwJfYybw3b3p8nW1BH91nxVF",
  "key32": "tCUnmThPoqG5MM4cXuF5z7isLhQ3WXi9fpjvnT7t1FSuZmPDSzj6iq71e18u17nAVBCpNS4aYastYCxpYK34ZQ5"
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
