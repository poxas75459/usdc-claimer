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
    "2QP4KKWpR8f7atizbQn2kZuqBDBSTm4SMnjjKB5eqv6L1AhSCvU57y72Upxwc7W2GL7k2N28ndxiQdL9viKG2DJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJRYDFtcYRNjqEz1fqF1WpybDzYeGFV6RqCnPgdSY6qQ4FHZKKcyuKiFsv7zxfsNEVen9ZXwbGEJVgsA2oKYXvj",
  "key1": "57KbsYG2DMiEp2aNEQu2ofXADgo7HYtqq7Ucam7HjfH8MvFE5sLPd2Ndb1mNnwgk8SsZXH7AefZx3BJEEBaerV7n",
  "key2": "3Zkd2qqynp8EsjYy3PMjMJPRYCSF2FeaEyYzcozoUH3xLLNiUbdekvySRHHZ7P1a4TV52aLr4Uk2gzaSh72faMna",
  "key3": "2oWTXFQ48Xi6XiLFY1NmhmA5f66kc1A1VXc77pmNPc8PAvuhE6ftZEf3QRuJHB5bZqkRmoE97D6urhhmS9jv4orj",
  "key4": "4csZd5LPDBLHf3YcjfuX7SCQK7aPddYk4PwBLWRxoW2rDwq9xmL8eNppugbBykPTFPKUWHVW92uo6jV1ogvRAiTT",
  "key5": "3zsmqiKDx7Kt5Pkv3BLZQkfnp9g7RfNu2wpUHsWWq7DpKEDVuq9amPtU3doJ64yjjhAhvehXGyiRZcnXsHDzsX4T",
  "key6": "4LTfjsFhtYphepjHHJ9ofqoq1HJKCN3ESjh6s2mXz3aEY1YayBGyKyiodKz1VuK9WWkfd6g1atNitWZtUAYund7g",
  "key7": "31hdEDUSyzeNkxksr7RRe3naNZMGRiy14SCiJG3AfAP3FFR7FfsYTrBVxfgh31c3uFChpmQwDTwU6soq5P88ZAjq",
  "key8": "5mb28kTeE58QT22pSbPdB7dhJS4pEYKKutKyVYgDjcehcf473W5LdhL1JyZkKaMsyTPr8ngBWYDiELg1gCKHivjQ",
  "key9": "4Ko1qJHaWcxiWtaLYNhekMmPY4WT2jMYnpGtkuReytQP5rt3mfKEjMCjNe1Cp5JAxFb5GVCHR8muYntpegVLbVbR",
  "key10": "5VhPjCb4AACrBwyqoeSw5vLBLjwwov2KkoAiwyGfSLJ5qsXZd92FQWnSBFSy9LhZyGEKBykbsf9pHRHRiPBVnDQy",
  "key11": "3eVfCp2x3629KGpwRRLDQb3k3x3j48jjGghvnPfyS78kgEh6zsZpmoBfHBuz9QJrM58Y2qcSRKstzTzTHjRhvMwh",
  "key12": "3Z5pPzhwReFyE4mY9Ge1urHUQTab52bqhQU9XEtqCGHoRQPNB3RavWFq5zsy7ZWBaZHMDEjH52J3VhjpD1NMUNCK",
  "key13": "5NRaHaFJ45vk9BFo1kBFv7EpuhyidPuJosSKPWhbK5ebx5PLa4LduiRBPKMXzJuos9hJ7zmPf4bk2BLgMxvUYd5v",
  "key14": "2sb5mbLKagBmEu3PVscG12jxwykD5nhNx7AvWyw5w3LysazSBkqjwZwh2G2gawAJatd18yHN7m1Zhy1VCUVYuxe6",
  "key15": "4vZwTdgfQYh3kZLnL1CFBgDJCA9sKKLrt6p4KMSEyJKhGWvSVUyGMLKhBheZrkyYDRTXLRCpduXSm4JxDgmRTnkF",
  "key16": "5af7Bwyr17jM7pckgsvLLEGx1FFC7kSTQ5iXEbbEnqEXPPQXzhP4Gfpu8cYEzwymBqXn3uWPNmysmof4DmiqySwG",
  "key17": "Kuupi6YuQsqzvBjMnytpVZqb3NNkLnHLEgRzXRnBXmpMpXkPCCu67pu92vjdRA9PiabQQ3GBzaJfh7nrcsSwR9o",
  "key18": "5PCFFCXKetekrQqacZh3EGtUUPiJR7bE2TTKBJXxtG5CEXrXKNaSuFHwp77sAFpMsQCFjJmZo4MXn6DUKPYspevZ",
  "key19": "UDpV4ogDsMp48rng4nyRNQMaGTzQb6cJdNJ1a4GxWEj4mrRrLZgGoKFLaRzk1EKfDKgfQqSnChFM9dBRjcPPqWR",
  "key20": "66Mhr5tELQz4sUH16iMM2BYtC81jzknfeHmbdtj49DotsKX72bUBuS8oRHfzYqrMVQfSfBKydmzcQt9nkNZn27sq",
  "key21": "4Rh86eLEvupbJbnya4e4Yj6FKtwfmytJtEHQWM59UKaAfULwk62xUebNXa7KQ5HRaDFZzRMY1w6bMCfurU8ZjApb",
  "key22": "3bRVcVvh75ViYm84NDZLpbeJLTGMofTiwUHV77ipmPtgNYa1LMeEG6iXDs2YckaKmwmPMGDv8JetMWR1qQcro5T4",
  "key23": "4Yz63PfGTTkgEnpuBMnQw5yKhAQN1Cb6KENEWLBvDRKAx4stLj2SE6r4iaw8m36V3o7EXvgJGDbN25cz44UV8GMc",
  "key24": "3qFJeSvQpTj9Fygxs3FMrPTJQA5CAZjfZXMEgDFDw3R9o76rzmYZDCUp4sr2b8EdLbYXHW3BuaCK3BAShe3UGdJT",
  "key25": "5gwAyLpDcfxQw6s6aaoHykKVY3iJwhHJxVRT3PAFxqMM7eKYY2a53DGSpH86WiDFMR9jKwXi8m6zU2dnkKoqMtRS",
  "key26": "2YwSUkL6hznY77WdiymKwEby6wyn7WmMkEAdmbG7hhrTC3fyYCoVv8rBn4CPD1tp68ALSsBH4VrT5kf6vZFBJpVz",
  "key27": "2vMuZ4wC7riSBrwZ7JcwdL5489PEHN5Fz28Q2cdihZswNAfD631EPMx5J83McXNyDk43CC6rT4Ao8SBUFi7PuUxE",
  "key28": "4woqCkADsiT51XGqHU4EDXDDKRMcNBCZV5qMZueBt5McDvkfcmND71ua1njS2k3AAfu9NaMyJVpP8sKtreScQDSD",
  "key29": "5BhQcre5B9bZr2MQxyDMshUM8sazcwffj5dHTpurnsPWei5Cc4wqRpLnUi1mgmrCCtCyxj6x7hAx4QAeQvhDUzY1",
  "key30": "xLEVpxgPbXwvKQTe2xmj1Gqe9PuuPMC2qQF3gdjq9axx86uhZD6cRzB2UPrcuNByixcZ4QJoBn8bCJKaJB39Hfb",
  "key31": "2N3xmCcRY2VuiyJU6XGHyrnLwdAJJwyAzDsN1DasE6Hd8TZxkbZ6DJTRDJxVN5q9qNeC6MT3vi5b2YBFTWriD1Tu",
  "key32": "5Cz6ntHf2RPSiMPHRU83dvnpGDmXD9bbDXGurXx2qXy1Vv31WdVYLjPwZqXzFYmASddRXkfA1LYsm2E1ipAqU79N",
  "key33": "3VDuq7xBFxNeHZLtEMuoQjrsbNhcZCya2rVvS731J4f7PKaF4YyfvDGB6133s9GxDUmPnMZ4TtS2QcQ5sb9MhUbk",
  "key34": "jXEVtRmCLgEpFLo9pieLdHDqiwZhqPEYs28aLHPZq7o8xP91Apvtj7CafueeoEgogqLBeoRURsccwn4g5WTQWDw",
  "key35": "3qCwsaRDvU3ayz7a6HmJryntitLQYHU7kNAYGv4yVvxy4LNDtM8pcv81c3zfauPxByS1g1GyKmcXbkBboQV8YzXD",
  "key36": "KQ5Q41yLnVBui4e3cSE27rVyuL18Zy1pn2Vt3XLrFXFRpgaxVPaig43bTu4e2bNQFqDvRgTCLX3GGvz9AnZJ4WA",
  "key37": "536yN9BjDBs8o4WQ31p6rM8FMcMSmFssefG74nafnrkQZnYJLAASj2wyYKCz5d7AnFSvyXzZeNaqHub1Tjc7HBXq",
  "key38": "3nyCSFwvqA2rwMPBLkss35QW3j6cfeiGohM7iF7ZYxHi8teG6rzHLu8N9Dcuvqx4SLz7Q6MbjeJCBALrDkkEDBuU",
  "key39": "3hLt37XDse28Y9QmWC7dw2SzASw6d4i4AF9cpKFPAWn7ZpdpuMoq822CqPhr5cLx2XNJWuUC3TazVWGfZF98Wd5F",
  "key40": "2rn9EydXhNpqrzTPmnLH2pmwjBENJwmirXYn2mpoSUyUQi8wBCLEu7H2nFNRzD34DDQxSBkLwCzVhd5eqVf7E5Tx",
  "key41": "3NBDkbqsroARFUBpbtp58oqMyFiPVhyWd1jF5in3MfCPaacraqdTBAyNQc1TvXYRNxDAmPrxJznKHhmTm9uxeAjR",
  "key42": "4t8Xjm9rqsA3ESn5MLdYu2R29d7KtaYFc8bSst9UbZPVWBUkwWwwwfRZfwnsFPoebY8VoeptU6snLAff3x3adfny",
  "key43": "2v38gZCRQYLrXyfyqTXr35H5RogMRjBTzTb2XjgErqjGZvzX39sFFshTRnZ1jcsCvR8w8xehmaFeNKWAQCBZQdRJ",
  "key44": "3XokvzVHUttzVteKQLSNX2CmPtUoMRiw4jLTSNNwG6o3yTJQ9qLMK69Fxy68GNb85e3EHjZCZThSSHTiGnZaQAnL",
  "key45": "DgfCjrcijoPyY7CwcUMszcp22qUXKxEBBVEDtCC5wjE6bCN2C9CnNQs7EJbZeJyAEq6LVvi8V1T9eAew4Wsm2qa",
  "key46": "3NFtaniZ3B9FV2sqyttQq2rVzBFpXWd8FjoGW7cRNaXo3anYiKNoxEscbGp3TTYvfeWcnEKaKYzuj1cHRCGSTW3M",
  "key47": "3Vhnu2DpwwSUQKQyqqouz1erUXSpMyjTxGikUzw7PZQEmpMEUC6DqT9vviYib5rrPMWigrvTSGEMSNGkv3Hiz7Wo",
  "key48": "5zYXp8hsDgqCSRwsgth5H5uYb4ko5XN5orhKMprAftsPuZfnFnqNNxcJqffTSAva7LEhHVmQV8vHN5TDu3XH1W8p"
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
