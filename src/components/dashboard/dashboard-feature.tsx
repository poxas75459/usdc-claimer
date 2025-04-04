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
    "1YTA3mRc7hEpkAVEJEp9fpg1LcacAKVRu1GqcW3j8stQRH6RjFV4Bkx86opeTNBTa4PtFK31LZM7iwnGg2XzaoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37AVfenNggNyB32DXQbDrmiNvBPVMVRzWDmom7rNuNVU9dqaG3x7qBR4U8nURWUgeVkSA8QMX7RrkHicuGKvLxW1",
  "key1": "21CJmhDF1QSoWmofiLm4pAa6aNGundrZRP5q2CUfK3bu6wZ5PULxMTRRaSr2zbD1vyM2vUm6Md8o3SHDA3nKvuwi",
  "key2": "4jFCdC6CHH6s7CK5b35YzX2ztFn6xTtMopwSbtzTZbat744Dzb7frSrHq2MS8GeZFkHHzL1Fmk1uGaZDZE81JNK",
  "key3": "5bM6fYgDaQwe3j8c7dbxd1PvwRfacnhf6TMpwUn4WXQeS2nKY4RWrwZJGzGAq1HChp2sYf3L1xmnkvbJMjNLfxQY",
  "key4": "55UGvyRzLf4MkJ7xVKYPnpDwBThRtrSgdTZGuLUEZYhCx83MezL3p3GrVTDDTUdqLNsB8W4TWcGCGesLKUmotoGG",
  "key5": "5gmy26prj6tj8BjLz6uQjb2mHVzQN95DoQZdkqBqtZBJYFLKov6DwsB2XoNnQAJUpRSSZ5ud1yDfk9Ep9bEwksC8",
  "key6": "2r1cFkTZgZBjos65cVgQtZtF35k956pGXr5VhNoD5qYicEnoctDiTzMZfCEXux5aYQEPJjEBbVEfYCGUvZXWCFFp",
  "key7": "452YUR1JcQbCCFnR9wpVX4CzPKENz2i69tdXshwE4cx4J9MPyT28C4UBdB3MD9ThmGqiMAK6hayauJ5x48Z7wFHb",
  "key8": "36RasrWSRBMQTAcpSzEgzB4XAvjsfCDJzNA33AYK8qeTiv9Bru7KTp9yK6iVgo19ijLmW9TEqhHC1YQ9hHv2WYt5",
  "key9": "3dCAwFHsLswAhPJ1Luy6wwJcktwQFkqzJuRYt1xZUJekNEYbp1dtAR2E7yJbnDNNHfDpD9a1697FAv8CNfWvBFdD",
  "key10": "k94cZ4twtU9Auyg322E3WWDHwc2RRDRAvb7PDAfRBEHL3stmL5BcVpoN2KR2XdFvaXgXxeztvurDhhGQxtax3Kd",
  "key11": "3VbUgJTCqw7YrTsYiRighHLFh7c2yeyh8NHrpnqR8uJsGK7G9ZxXU2Z5tgwtpNtUZwodxEKAwfcS9syDhPM24Cc1",
  "key12": "3UNQ4q6dr72Dtdv6sc6kJnwutCYsbvH6aXSUgB7hUCVfxeoeNq2Lxw27fFsyvfR6ezbXJBWhFtT2reNMd2oWTWSk",
  "key13": "2RSWcnrZHUhY5yJTWauBGLUJsKxZqtExw6NzarwuFH36BmfsVESPCvavpfuSEjNnRBU2pdg3RAsopnph2yKp26sN",
  "key14": "4ur45H1B1pKgFxJmG5ZSmaG2ud1bPAfwf3tmfcy3SfBeJsmcHdTLrQujmCVgk9uGuGG31bGZspgMzQpctb5tXbHo",
  "key15": "4euQCWtdfYwQdfivLgietiVKPKYL5Lt4Z43AF1PoiWZgGWsNmMTKyuEKqJ7F9AnWZpZDgbAKP7jhBA5vFZCSuMAt",
  "key16": "5sNmPUpBqCojRgEMvKRdMHVoGqe8VjdQ3qEt9RPjn4wgsBfNgiEN6b9ycEkfLy4nuocXGMBxcKorx76ddmifcBWi",
  "key17": "4YT6g2oSx127Jc8dH3Gm1WYoiXGzo6fhq5aZswUL4ALUQvxKokZhrLTvdEKUhbnwKu4uV9ZiHQceyyu4sdJKAMMe",
  "key18": "276JTR6xDnxcpPM47FLgbqdk1vkefeYbNcLb4vpJaKmV16ykGVhnVLYaTpUh8yWo2FjqY66WaP7Q4VHP6XmQY1LZ",
  "key19": "4cN74aCyqWhjTvLdgVWPm8GvGGpV8cKGU5kBhwZz4WWdNR6QnycjQTTzYTRR3bBiyrFhFc2KKYit1NBDH5DtaEAb",
  "key20": "4h8PFnswmxdbC2Qw52fzSJqhsUKqtQAwR9p8qYge4qhJ8vWiH6w2SmcZDp5JAVN2X7nPMqGtyPEmK4GEfyCJGdTs",
  "key21": "59icZtxVs2y9rHDzDnsMLFyb4novSEsLuhds1URYqs6Sk6xnwThDWRwBLmoXEjetXV7RxRoSFq4jRw5hNHEiWCv3",
  "key22": "5tncB8hvnRgjk1N4JgpEvSd2xwqj6L9kSLkNNoRp7Jwf4GRevcSWAqHygLAhfjmU8nauJcxQ77HTC4wsJ1Fayy5A",
  "key23": "61VKfZuJM4g2FHZ2qPgC9bXE8HefLkFa4eCpEsb9oVshihptayR3pmTihgNTSQhCbidKJeXVnLoV2MMf3PfdMWkz",
  "key24": "Sj3HMoGwcBHsJPkFxiv5vucU6U3DXbvqBHH25QoTxF18wME5S5eAYJTqgoksX4uxLNaw1Mvo7puEZKqAWDfoms3",
  "key25": "Te13H5f1FEciioYPARuMVRLc4yzibrNb5HjYU8JCktFJLaeojsyzih5ndh2fiaifyr7ngVSXswkL53UJ57qqjVm",
  "key26": "VWocEeCWCUXvWpLXYc5dyjNjSAJPvxFUzXQfxmUCAdDf6oYKga3H1FVzcmGBgtoryv9wMfLA5XCeg5Eua21tBQJ",
  "key27": "3pTqQvXmghwBU2HKFipCVFMU3Mpy8epKZNCPDQbmdJdZQt92KPobrrEMBckgqkD71L6P6G31FrQo7DSgwSxy4EE1",
  "key28": "4VxqqvbqbUNbwWEdyrEQGAR5kzNgE5dEndSh2m2GjUBPvbEvhJQd1WMsL5Qi37Mhiq16GzPrzPeDhiiYSaUrgyGW",
  "key29": "2mz3gwhd3ygFnMcAfLCTkb7m64GVcZFLoFFPhr6LqJYHyxTMidHVZswrfrHmKB1BrDmA6YQXrT8j3WEA2Ps2Ma9s",
  "key30": "WEqo3ahpn4Vy2Nt6tpM86zJap2J4QE2UxxnQGEWh3Gk4bvUZncZ3vRQ3Uk1JZT7EbrvGibsCA1SrsfP3ioDfbMb",
  "key31": "34VVZonncYhgvE7sjxJoJg8fbKDzTNqg9hrGgxQh2VQQCSQayY32EegM4sfrPgeEWBqTb38LAn2g4Vvz9MV5Z4Rt",
  "key32": "rs3QL1fPUmbpCwM1rQuMfCCLKeboUeJBrWGD8RDK76iEc2ePpWqMYURsgXR7FaacMwkmXAgnosRC9wTK8ancai7",
  "key33": "4WqMQCbuRvj7dF9sPZWSqZeCVStJotLgmucLmto8CDwcB1P7i3K4M5eNKQRKyWJy549dJhNNDUpiASr9FemxKX7b",
  "key34": "56Dv4VQ2MWMdrsBuLnxFrE9kFeuU5Yj262DKHYB3PuavUioMcRkDQJz9Eb4N8pvfkZfBA83TbRanx4i51brDEjpV",
  "key35": "3tiX8oLDSpfVK1XZQp15tzuEr2DJzoaByP7xUjae6Ym44J8JirniXR6ZTqEPzVxz5H1w2aPkK7dATab4ZVQPSZ1",
  "key36": "3WPU1q4kh1j8AhjvcPaKGiHZcqrwPxzWzx2ga9HiaDviZCrQm8rwLwGngFXBqjPrKTV6S74Hgarggr6c5XoW8Djf",
  "key37": "2mkYt6nSgs5ghQR8tK9BoYcFEL2hh27URkHU5oBaVv5zgEMVmpvbmvnQpD466DohRHbGbciz8gmUrAjuSC9XVWr4",
  "key38": "5gZecVK6iqY5gLrdJ6ZhWPjLSgNeBJDCNZ8PD9jjXJrhgt59QgNjM3zTJYr8wB1Li1rywtW28bFMDHNZe4XhxRFM",
  "key39": "HiXxPFJFjfjRhCLJswGRhEHLPhGJzBLZzX7bPCLxRojXn4GhkF88pa9ohwUkAg32Jut34vfS9QvutawEuTNrbYb",
  "key40": "3dYhaN7YSeHLNWqaSPocnXYvyXRm6QWDsSByb4VugMdoFi2Ry4wWFvj9pUAdggtY4JZga46MJE4aHd81Cz7ADr3r",
  "key41": "5jx9WziDLCZ9JEVYbq3o7ZQoXaKQq7NFgngqDuXGnNefmscDiDoDUKWoR6ddrAjqmJUhrjHWctiLyGYDn9nPpCH2",
  "key42": "3gjuA8oGzT9MCLufMgkEvURrwKUVqMyfAU6WY2mZawr8EVM53fykiz7UVCvWP7d2u3aeFQztnqxsrSVSxit53fXs",
  "key43": "5g5brq6wsmF545VabxRfvSMqfJzY68W2LErcdij4GyQeKGwUFf42fvLAwpqcSkVVZUd78ajxN1siXGo6tC4nrzD8",
  "key44": "3haDXmYCuN562QP6Crv818jE7syX9eqz86vAd42wYSiKECDCixTLYAa5yLkm3pDQ79ExsRLzUwecLqW5uoeTsDiv"
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
