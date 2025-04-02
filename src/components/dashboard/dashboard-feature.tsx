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
    "3v3Wgy73MmBvTLweXbLgde6guygkfshZB4WaxhCdxjMZVE6Qz5nzBGxFcK3CHs9mhB2Qpqfemq7U3PhGiFrx3gHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iqHScCge4T3Ev2iNe7YuRFgQipAuJyZafFmJkj9q6cCT7GDTqQZgPJndZYuraTSUzp7bEaVy2xgewEj28MRryPf",
  "key1": "wCTViL5FUPPxh7pvKRq2fA3R4AVEgXzKyqkCNTw6ik4KJCxv5yPaS2Jjm441pgg5vxNVLSDJ5vKkFZFmUMrh26d",
  "key2": "4wEL5DF5uJzKJzo2DND2GDzP1JmdwPHJVpHm4KYLY8P88TxU7sW29okEU7bmuGtmEn6NgeTxA4nUUW2hM3pG9s25",
  "key3": "3DoYzYMwfmBfdsjbftZPmDuNbwxAsbKqRG3E9UJLd8zTYQ1rgiQkd34WN6gpDLw1xyoAwKGaFu31zQn6SW6Hqcin",
  "key4": "3uSp3jSotjjd4r58CW9Vx781eMLRM7WJu1Gsh7dsZwpJv9rYwT4o2RNbUSErBdCUAeobcSgMbqdBnH53oZh295pC",
  "key5": "5FQqbXzV889i6gmirf8BPjPKjuXDkNutN3zGsRinvaVT8qhT2NTwFzYnEyHxH63hRv4WkPvodZzNrsNqXhgoiNHF",
  "key6": "hes6fqHTYbzMXRoSstccmyh247WwhJGv7Sh2xyocobs1PZK741ttMmxWrDKPM2k15xcjurLsJ5UGoK3z6mYkBAr",
  "key7": "5uegfgJepFB5XuAfNFmmV8hn7q2BteqBfw7SKzSLez9T3hyhMi9SZfKVwGX7iBYKJQsX7DxrB2qd9ZhWyH2MVEfQ",
  "key8": "4sSSyeNAc77MhwQZwKrsfcExHbPTHJLtSU6APjv2kTjmxz9tKr7vvkX1KL8yudtybPzSer7iXVZE6SHiY1oPfx5x",
  "key9": "57r3MUG3UZZCw5ojKDmeohDVt16iHUiyxyEg2YePUagHVRsqXuZmSwCnvezAQdcHtq75hEG9USFUEwBPdbqtXXx6",
  "key10": "3z1hmmcLuXBCekWy65m8GW789McbsVsr8W1dTiuBhJX29vLr9LxDtmWYTDMqn3MYAmwNN4b4mD8SVLBTNJscEWur",
  "key11": "4hegqM5NNyZmbnej8eKKSxDP6c5a3hX7AL6TaWCR5TA6Tvd4uzgiuN7pnsQiFezhaNgUNNwvet6XaED3eBXo667Y",
  "key12": "hc5N734ZGcKQ9bzivTjmWuU5iWafUzQjGD1H81bRpV7YMtUVrz2EBu8Nm47oRRoA2E7rkc2Ysx7mfuWxdEpiPdw",
  "key13": "5BNXsfXLXfZ9ok1meZUN1yU4SCQeETbZe2uikmuQuwwPvgx5HyjeHvtKCTe87qUwMgMytKRrCXWpNzjzK98E1Xn5",
  "key14": "42NEeebDNXKq4K5cv9ucj9Mb56vh7vBmPY4seFDsbhnMrfRF5muhSjmDvwFPqLCfxgL7N5p4TQVbRYBpoVjY3CAZ",
  "key15": "3h3u5HK1K9ixtQo2vtDmbxSaDwHgGoxJc1chHwpFgAeuLb7hbLnSPoPrjrDvJZeqcWjTMEryNkfu7ZAZT23FAkNQ",
  "key16": "34vVKiWFtT1KWfxjcsJ7upZpG1oHBCBNhLW4QVFRCJ8h2H5n58fMu3mT2yfvYWgKuGTbtnfDY9Ra1X8qjrSsZyiE",
  "key17": "5DeGAbsNBFB7nvKLV7zob5tJ9g9vmVWZBKfhRTZCp1ARDe7epGxSPF1ZvWAq3jLhSQ2hTcRYGkjEL8MparczPKmx",
  "key18": "d3uqTScN82Q876Sh97BfCy2beuSWgi1NAXAfA7GDGa6UWpZRsfcm9QAB8G3t98y2GQC7c2MRQuSP2xmxSFUaMrF",
  "key19": "2jNVxoiucqKDZf7vwpHARzWeYoXAM9W8S3ks5c7TiDrBDayNz3xFAHd5DCrowPDFoyJb87Ef8R9EYWE9UeYYBhHY",
  "key20": "3k6UauanshLnd7fmieVuJxbdhUswNPdkoshNCSpriu6juStWAknRQ5y5ytQY6GsCDpD4kVQsXxQEjh7rWBD6z6fB",
  "key21": "38S8RezxyniZ7s8hfdVkSg7ARpdJs4FJQC5XMjXS5x2YSZ3Jiym7Y4kU46vaDJmNjmw3qxvsVsvZiC91Notrc4sd",
  "key22": "27yZr2nCKquuxq78Ko4c3wF3YtxSLffjbtuaoDAXkKz5HCDS2Bx4Z1Gub8mTaCkBeYMRowaAbPtAWhmABEMBzXZG",
  "key23": "5a1J25dFj3EXRYnRjHac1KR5mWrbtMdwye4vxa2kDtySJ8eHfFwMvTpCvcpUnteqLnBvtXZCbVqZEv2scCXQDfLR",
  "key24": "26BgPrNGwCK28chom8FsGJTvPr5tRo5vGN4JXbWEcUXTQUXtiZMJdnsRNrNwoT8PG4irKRZ7WMhzd1yzmQvo5jrr",
  "key25": "3Ru5dfb7xPkdV3DaHc7VWopHUzvqhqdroD4rDyCdQUmwVcLFEX7JXqGTgXjVziMNLhocQzU2dUkxXZuvFJpJaHSv",
  "key26": "5Ar3z194XYpJnGQbCHXMTSv4m3mdDJwTCvLm9MDVA9sosMr2rMBjFnSq8MrhWxAdCxA2zgEjU9EAxff2aEE1W6Z5",
  "key27": "4XZotWtPrVxXDJ9bRtNfwETunwozDmGj7keHgayvZS1QNnGSJZ45KYURUJT1Lx3A4EB5icsLsKUz8TG27LGMiUGs",
  "key28": "4VYXPVuVMi5erigxRrjotuEjgBMvvZPgDzedcz8HpVeVyCGXJ5GkdDHosa9Fv7RWJpYZ3Q9PnaVUqXGJeAE6V3qx",
  "key29": "2nU2feECGLGS29yDdCH4beHEg5PbEF4XgLcfAT42CRwd15vE1YxET8u63XvHumxZBApg2racHjk7rTHaRXYThJLu",
  "key30": "213uedeCfq6zHNYmDS4zog4KiX3QBs998N9fJCsjMrjukyeRQTAoK2ReVDBrXMeeseTWAE6p1S5TBBcPZWS5nPaB",
  "key31": "53xZYN6Hk3wCmwdsnUowpsspC3nN2XNQ9EEuR5LMeeVgsNnSgYQwcFdoxmTsYVeoVxmMHx43LdxhsMuzmsevEvus",
  "key32": "23zQe8F4gfqczGnJVVcdqD2R1FHLuXohC5H1r5bqHnbRqARonytofYN476TGT5hoUfuT7xHuMY7nJT939fehk5dS",
  "key33": "4r7SdL57sXsJqhTh4qvo2xibLXJTbzoJKBr5xG1FDgL92M2uSbhciDux7aUyXJiom2VxjVFnKaXHCqrWD1FERWYL"
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
