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
    "5RsxcN5E1gnQehy6LZKM2H4KBfPfPEoZXVnuGcZe4m3H6zrGP5uJsbajBPgb14GcsVHBQc5skpgAmUBP2dXoqVbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "283DKQWzyAcWe4kmrL2FtEe3pWgDw5PGp82gDBt8vcTj5NeNthTfVpqnh6SxiiJKLunMDqpx41oHsZoDUu9YP7Hf",
  "key1": "4JMPdr2AwdG4scG7LJ7MrdtugVWWDwfWquYqE2oeFoAqV8bE8MrmNsB6wTaAcWPMBkZD3NoCDWDJy8EvdvkD3Q13",
  "key2": "4KJH1cwupF2ohfdPFY5XShimayQuKG24NKkWPNG4hLWZfLCFThoiVyB4FDBRDdCofVQGmuAJtjWkXJuTTMBiQ6te",
  "key3": "4PedTxZHtbo7mfVvP5Eib5NVySyf9y9oXT1MQ6pq5TJdVWdqsvqiocrq1r7e5fAMRFXcCVdPGdnwsKvrA5pxByFT",
  "key4": "3CpvUNA3wvVxYL16hicJHwTxrbNaALcq1qyXjxAk9Xx2PEwGcQTMgEJYeGMhAFFuTvchCbtFHe1J9Gom5GGDTK9P",
  "key5": "TsgZACJnrrWxW4Danf4JjETFiYBs7WK6Ekk2rtUebUFZ3estmwH8rsBqvchnYSZewKpyWMvhBNcCTKfAusjT7He",
  "key6": "2KXoasLwQkzcdJwgsabN6wDYgBchohcMvmPTZ2CuvDTEGKYdZwidyuuNQfMzZzTKhB5Viv35AzwbJoUpc85vR1ut",
  "key7": "2Uu4TTvoVRkoymZsQKymkXdTBPYRtEEAxw5oT2P84cFS7fwNhhszmLSvba8YJumqVat73fRBUKSaJ9naoq8k7Wr4",
  "key8": "qMNEZNyVTVf3iRmQgXgUp9hjqdc68Ea9tYmfcxqKfmQq1pEYJyZ77svLpRUfPaK2ovojr3qsW2o69hNk3N4kWK4",
  "key9": "2nuR6SHJg5wp8oah6spk87GThoV1ToVddNJ73bhYWiQDkKctHBaYtKxusBueuka6q5jC3MFXz5XKvgmRvJ6fLMFb",
  "key10": "4sZB5wV13Q4QGVearwUMZwTzKiDFFwpybvWv7eh59yUT9YDijcrsbMFTDJR5P7oY6iW3vzHvCPWjPL2n9GUfRmit",
  "key11": "FYXe2tu7pQ3WLkG1g6A4GyBEcHhwg6fAfUbRqLStJts4UuNwhxoBBLu1nrWokA8q8VmoPG5yM62y5yLm91zNLuZ",
  "key12": "wMKr81go34ECb7pNev2LXwuZwpCm6dbY6eEn19XFYJF1XhcMvKbeNct8WGbwYrVLYqtKTBXWiBKaV9nwE3zZyhD",
  "key13": "4kfAFmC81HUzTUvBPsNV4gaozqc7uMEqGeMxabX9ApXjzhcLcJKRTga3524FfwWnbQp54DH3N9GgvoVWe4A4xS7E",
  "key14": "vekVMS8FfMsYnuBG3ypw1eoNXukXEATGKngv6Rnnrq33rEVacQfJ6qs59AmYsvU1GRUssc4RBkb3rfCfnqwxuvg",
  "key15": "diramnHfcFPkV76JLsi4NZs9ped5kou4HM6kuSf69KNBPsYiskRAQzjbcjQEwjQm83ExynmkcwJL8acNCh6pVJZ",
  "key16": "64brU3CKicG3DbTaqnuaaqTmFvbbeogxY67621pyMCdqp5JGqP4Zg3vjYJz73LyKigf7iXZUi7KRLqwkHE8DPexh",
  "key17": "4u8ebCT7CoiGvHWPZWSPnzyg1RtQSaqX2Hwx518kVU5zUMkCPZP9LQvWk9cHQR7Y3s7MWvAnpzGRHmHuB5dMd2sH",
  "key18": "3cQALenmLzh9FUzf4RRdEu7eNuprfDNaHb86Evq7hTtemdWMw61vFqvDxkn3n5BqR5RwNPzkwCSu7zHMALKa5GQi",
  "key19": "thFEBZmxEe4YSxXPRktANCDu13EAtpfUrhhGAPvFRr162AL6zgVMSCthNrts8oiaTdswfYeB6aWm7amc9E2usqo",
  "key20": "2V1GJvbgEakFUxy1tDyAM76ZGLnq8w9HAdxQk8oYJUQk7bkYkDh8w3C3G9bogqL4Hn9n6tDfM29BPQBEobiK8KFP",
  "key21": "2q5iu63ST42aXSDCXytuhtNhgb6pC8MfXhu4oDsSg17sFk7TntnVRZCpyCEVXJh5jdhBtnzk9KSKy49h1wZ2A2bu",
  "key22": "3WTsiKo7KZj54cfL53zDbHNENqr944D5w4w54jxDYSvo8jBViyihZiwxHibpG8L7KrRnFucP7mgDwmkTVq7meAVX",
  "key23": "31C2PRHo4V3nGziUHaJePUTdcZrsTLncVQ5sZAqPdvgGwpsbBHnvGYde62Zyb7qoNs3JdEqQuB8Z35bjv5aQRhqJ",
  "key24": "4z21YjR6B6maGRHzaJbi31xKwJnQdNcoc8DPphJEiNeiubHvCGsygjyUfWLeq8DYEwToAu8GxvFAXYTVJ9NhAPGg",
  "key25": "3hKX62rcrv1gQtrnSMaQryf3DnDvZKqqeex7u7XUWPppZTieQNjF7AnnD1fCUQGK52T8NRePoyhHCDvzZyp7eoPx",
  "key26": "Yv3kvCecAeCZCWyNhUFhm8GuHPV7cLcETCQy8CYo6tQQ2fshmTpBUY8XCp2J7p9EKPvDVdxMGGqapR8di4cGp7p",
  "key27": "Lue5mSkuKLunKjKBwrRbGb7kuJc5WRQoRtbjPZyVxzquzqSGVvpGpenGXGqo6rwDtf9adgiWJauvkyCMPcMj6zU",
  "key28": "64Evq599oPMUiDHMT6HUzaB886BCtzXkUhBPp5ua6GZWxByL6XdPSsNBFhv1FUmtKiCH9rYEhKiHMdMda83T2Af5",
  "key29": "3yKBCfTJjYgKD7szHocqXxTow7SKgMRUaCzSu4ohecH9uA93cTAXuhqtp1Y2naPsesmvChpA8VWgQAQGb11LVzS8",
  "key30": "4cWhtVaFYH974JB35XnShZDRe559X65cLBPm2AXSgP6spfGb3EuzmhZPzNDHTNX3bLjiVPtH1k7CNipKmmNuwpz5"
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
