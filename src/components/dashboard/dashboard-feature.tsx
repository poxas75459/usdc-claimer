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
    "5UfK6s7A3Pa5VYS2EpYUikZggP3Cq7zMsdNeVfzmz85KnsseXupCVjQ9v26Aiber5jRq19fFrngSJU8ueq7vvR9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43YP1ihiR2VU34CJxevKSMHQFvVdRSvqPnzx2YCnnsNbJTqY9xCvjzQbhgTYhhzsqT3JVP6g5A9Dme1BbTW8r5SL",
  "key1": "26b9SNBChHZNEP3WBkzJ6qA9VAhzMG2qAL4FKD3jZUTTKJjURR42cvC8sFoCnsSnfbrJBDUMuF8iiKBFMsonHDV4",
  "key2": "2HaRvxcq1EnzinVyYX5JptSM2NueRqqNyiGE9SDzSrCE3dqNB68pSPHWC5RZCXm7H5VtrL43pb4PMt9BvTs42G2U",
  "key3": "4JdckSsvnRBicCoxfJkLu3iiabgirTF2yhCLNdvaVPSuNUf5M6qm42ZA72rRSHLdGUcwmU6rkWBmmixs5VPtXd7z",
  "key4": "2iXfMrWo9HNqaS9x3JamL54CwDFH5rTpsAwmXfiAX63BZ3dWPCeCXQYEH7JDkg7emBNwJVB34s9P93aUxQ2Rz43i",
  "key5": "4E8LEPootmgyE9N32j7kTqHGB1UmzSqkHwhXwvBvoDjzvrJATBeRF8pW4ByGaVT99dhJziAVcbLpV4ZJDgYh89b1",
  "key6": "2ZjdKBqFxLvDaJGDxU8rtFYJEDprGhHsscoRns1vEqFS8pL7jypbaG5Xtvc3fZoUaUgofYTNeSavukHJ4LwzXtkX",
  "key7": "335c2ksBUQu8zfBtfovMQ4NnU3XEWEBcgToLedDBX7EoZn2d8WPtSzvnwtAsgXGQjGCr7Zahc2TYz6KEC6ACQYAT",
  "key8": "C5jkJNJbS8A3orM2Ju69dkN7WHhm39tSCrDMpzWZFUJuQu6GtijY1SorG3NbaW1cHsqHSHVnnSZ2EurNxB35mXu",
  "key9": "4wsuCnXAV5vjsuLneGwNUb76k7Dzd7BwbJqcVDTQFSdWatSUNncoan6APbT3EM19ovRkKe7VoztGNu9dQrdosKbE",
  "key10": "wBdZYKWH41mjHWpf2UpWM2Aanh2pDxVjKzXxexidg6HSoX6y19mYdtp3ef3gGq4Ew4BTRtDVkHCqKSdXisuupLQ",
  "key11": "2dBa8Xuq2EuWFSeRRk13vyNHrZ4sesfvCsKwCenZw4HkcG7FfKncxzr1ULzSsu3QpDSRDnTPXXDu7w8rFjP1VBGi",
  "key12": "SPN8yAN7btL2QBK4YxcZiNmRkegneHWBUq47XpTyqgGTBN3Po1icAEijuQCiGAUSqQB1TkPe8utN9S5aSNiXdN9",
  "key13": "5oK6muQ1piPzbo2wAbRGaVf4JTBvG3hvR7F5QZ4eYBH88jnjNjjV7TnvFfekhUV3GEAfdRCvziRAQCNtwDNjdzB8",
  "key14": "cnuepSGLS6FPafKyeMLg9goaET6uWUQiThTrdUhnNoWeuAhzifbexDumaMPYGtACnq9ZQHB8x2vSmnWWKTwbiSN",
  "key15": "5zBKnBT7yf53B5Bryk9NL8qyohHsVtW2PoutJ38uaiAwL8U9QKJZEfVHbpdBy675Ve6xB6xBWSwA39qX2g8wPCfJ",
  "key16": "3GaXToLAdfozJCS4wXrwnsoRreizwWqvMztEqYEEhqto4L68o2G84QFCd2cqHoFrZ2k25TDbR4qLPX4ATDRMA5gY",
  "key17": "4SoY9tu4rwpkzVx7kCX8kr7A47qDG7gzuG5Cj8SpUVbQuMBQDKkt1ziRgUTrWCGjPf76GDNoEnGuJbv5umLjQ8Mj",
  "key18": "dpScSAve9BhangMh35zMkJue4c8KZRkwMStxMbQthkUKaEa59FwDt5e5ujZnKAWGdG1wE38pi8SS1BKNR5XVwhN",
  "key19": "4USwr1vFryMxiSeKJJhzopufUmFtaUcD7wVFsToZbSp1C1K6ri9mgkqTNoxMgdufmeaqiTEJnjPgPcuQPvVByqS5",
  "key20": "54FdnB3BoNmekE6YoBG1UBgsJcKtdWj6Td1EWGXBXh5QtaPwC2vaRwmAYvYAcsmV2J3A5YcEBoBZZq6JPWXNwNRb",
  "key21": "2mB9dwbNfLfqJXCfnFN4SrGn7ebjgX6yQ8qp4meXn6qrUphEjdEtYX3gsbPU52hqvPo8ED9ToWLyoRkk3h3gEvnM",
  "key22": "3smR9aa2g5bxj6g8dSxW7CSZUtaGjUg5tomMsta1CLLv5ZsPWe18nkPnHDx9g2ppHYrQPC3uqYBmMQb1qfdKwGuR",
  "key23": "3DEzL9xbHLkAXytab4zGQNxcHPpJVDxSVmBLFzwNmHjzyYxKZkxDtQovR4AdeieZ9bWDp2D2WkJHJi5HJgmYTiT5",
  "key24": "2V8MDEwc6PNpRJuC8ZRc5EvrsXo6oV2EHpPbGAxu8hdXbnaEYZonT267vScq4qWCPv2wmPj3aTbetX9Ybv35EdTA",
  "key25": "DcxdBMvChuYmfXshdNg7UiRjHPT2e7C2zcaLk3m1zfas1sGkEh3zhWggnRG7A74D5TYta52fEGocfGbAgr6Wg2c",
  "key26": "2xVJdnjZKNPjwmLGBz81uER56bcvsHKxUtGeP22wdK2Y58iHFFxnYMQSrJAPzP1wspiqJofp2ScuS8A8rsewMzWm",
  "key27": "5TDMFXo5M5imYHoUDgFUnfxMydd3JiXHC9PT3T7zdVcetCdkK8vYXCnPqYnppAPUHuFCrcKZKq2yJkieHUxNWA16",
  "key28": "3W1woZpmXGGE1AQwZWCD6MbKvncDHBJWjY1uLjayprKdCS5vQD68TTwUTpdHkYsUQawQ7776rFkEeicJfRZw7YJx",
  "key29": "4vLBWiia9cZtHBmuoeWdU8zU5Y4CjdkhNegzwTe12vHpQPk4aP2fbgXfJu46Dhd34UjmWSacaWHTG17FR7jTciUP",
  "key30": "4gEiAXtWbvNYtvWm8Eoag5AnE8vcXCnYjnr6M7XB4CneXFh2KTFwwV3C8kUhdDo1hVwHB42cRnEiMuMd9S6WD9bh"
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
