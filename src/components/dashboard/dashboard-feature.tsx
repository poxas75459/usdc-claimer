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
    "3VBHqWsgePcjEruqkJkueo96hvs6nmqeXEbvoeuddmMP3xTAYgrMaifab53L35wzdaLvgrpRgECwHJvhm3riQhjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aJJ7crUQxS1PUjjGB3NoYm4TsizbbQAt6bB5NrLcz4nAZeYT6eVUErbsorYbKekNuP4V2xqN5woyKsWaz1myahb",
  "key1": "2uuEBdTgdxtYRpDCB9X6ViMixTx54nUAV2iSYJtL2RQthhSxhgY2q1ThnhSj3H7WPeb4wmJUt7ccd7GjgwhNMA9k",
  "key2": "6x1fKSHyw4P5E1Qh7EkyvqBzjWDxMBJiSmJV8Z1x4fUkswWcdq2J5E7hHXsrcw6tXCaaV4q5psLSLcqF3badsES",
  "key3": "2jaTLV2R4d2Y84MAHiNxpuub7mF4w5ZVYDd1EQ5GiP2Mx8Yc68mPVWvFv64xiAVp5CPgVkpscxBnfzGxuJe7w4JB",
  "key4": "BCYxESJntjBCszGfMAMLwmPtaF8YXwYwuwSeYPNYW88hejsJspbUagd6pKcomHqccBxdyL47Cdejd1Y6uoXaWqa",
  "key5": "5fRGcgd8BsPhuc3nZje31DL8469puW4t9KKE54ycFEypGLfgYyALxt1GAkbkWnd7Asi6XU1fZbmrNvuNM4a8zK7G",
  "key6": "4o1Gt4gAs2L3PNg4eEoshh8soWeRZaZCyZ1qLJtMLZJQH7ABZsMGTr2K9TkuRYnvukMzCXsSvuG9343zY3tH5inj",
  "key7": "5efM8W2rEbpYiQkUfoqSDFA5PwGJTLUj7QfRGoe6GPJF8qcNyqMRuFEYpGzUWyYTFBNNKtcx1JC3E12rYzgHTdT9",
  "key8": "4d747fRNc8WubsDZgQgu6C1hoaprJA1bVi6qchjTsvxAhXgE3CFTSZHD6zLsUztfM7qappUcTUDqu3BfNdcYdcPR",
  "key9": "653ckR11gpy7YiwCFn5uucaaKHe24cDyP68fxB9gftwcjYhS66uxcghhM9s6yJrW6UHNkHfGzfZ56ox1PpnmqoKq",
  "key10": "sP5ncx68J6rkBb32WV1T4eu3a2c6Hx9z6MmcK2oXQW6Hhpsy9GpKrzSVy63EJ7WDWfG3YikPSpLAwHBkeCQ786A",
  "key11": "tfSqSubqzxGwM4c3dotKQmtVfuBBZZq1DN2yR8ZoSaRG98FrrVLUxhAcqhq7vDrq6fBfGY3b5dntAqgQRwYcfp3",
  "key12": "3Yju3eDHpGxKafuZjfbfzaqKnmh6AiZ1WwhmaiUR5dZ8eoEwiswkAupD1oNeBAYSMNesqSdLnb3mTBszTxePtkPE",
  "key13": "5mjwNMazJhWRk14qKvGrxTtcctZTh58Qqx5iSoqV5Q82gCcXscUzR3mvfKSn6FsHP2sVBbuzTC7rumMsskZBMY5S",
  "key14": "sqTccFYN8u4op9sCRtJMsmBmae95zjKYQCLoczqy35XxiqZ6K3L4aGMD4nXiEq6R84TAZXEx35HVWDciAGVcch4",
  "key15": "RLLooXZ4zJ1D5R7KWsGZb9LjrwPQJQ8HHQHN9LLKt9SZdAnRezAUX7F1dsyc3r4WPBxrX3NmBtCBc3cPE2ePbpi",
  "key16": "5i18ur38tGZqBxWLNMKrUkwim1Qv8tqK5VzPjXhungisWSCt9ZfqDiDYD5oFsANYAckeJvjKjSZUYbTHQ4HXmNQr",
  "key17": "5xBLN8kugr8KZXgJkygU5Hp8hQ6TojYF5wEdAUsPRiSdnuvwXstJZ9wTiSPC9DHEvwkmJwwuvGbZYpQ9TcaXXbNp",
  "key18": "4jjRU28vVRrqY49iAkE6eFfrW8nmxLEtXSFaxgbuGrc1cdgrDNf3PqmQnXp7Xmjbzvd7kf2G4j9Ntc3tXPj7nPgF",
  "key19": "22CADodcGAQsb2k8eHU5xyDMoFXfLeisVrvFx18oKuVSeUxUT3srrtKH9593N39oggypKKDk7KuwMVk1QBE2W6ay",
  "key20": "2riTCGafXmxMZS9dxHfHCu61uyCGW9J7ACzMtAjEBDt6B9xStGwPxxMbB5TiReWxZgAL3ZTi7RJAfwUBwGm126Ek",
  "key21": "4Tz57TYzJjKXFkHDjzpGfMvNuuwjCGTypAWKNki8P6TAi2GHuoNjtDgVGFpARcScL8vS9Hj3E3iSeaE2aPccfYY",
  "key22": "5nsiuCwgGHSfXDVq6bqkD9g1M3SY75nRwg1vt9gp8zxrQ7miJPfdpaNuQ24TY75p1nDmSBZLeTBnfKaNv32jNDZe",
  "key23": "4pd4SxmBYBHeif9u7AucgoejaWCLDCPJKEVL7AAjrFYhA6GBAostBSARqwTweHWokTq874F9gHwfyfdUkJrJ1sRP",
  "key24": "3aLuT9dPND4zr2fFAE7ejjH7JXSNiEoYFpQAWYtNbpxgJk6WvbDThhHoctRJaZ96Lk3Xmsp9TKgSaYJ67Wk8Y3ZQ",
  "key25": "kpf5bnGSDA5DBjqjjwayUeYYh1E2UtUdwEMUy5xbEthcH76NpDWKhj29LvRWnD57SvhgNfehXKBciri8jtPim9G",
  "key26": "21hT4UsxQHUu9iDj4bqW3Pf3EVjgqQqpVo6Wv2pxGgtVHf4xGE8n8qWfHL4V7fdZ7YSpaY5wLtmgZhYqa8QgWKec",
  "key27": "37NcodYbTCJooNicYBp3F72ZJ2rMnJ4xSoePKCcjjwjx2TzsMHyjL8jRDDURTpgSaa4fMDYK3ZLnbmNHdsvBw3tp",
  "key28": "4dt1n8TCXVBMabQCNFouMp8yH1mpiYa1S84MvkT4RT8RtRzGQ96bMCXLSdMLeWW11q6CmkG5PsxraUCTJuzyb9AB",
  "key29": "24U5x94SPiuLg1SHZEqMRwwN7PREiPf3Xmndnkq3freLQ4ujHGwtx4vtipdmWSHwJuGHWKKg6iupDSJuLPa8eJmW",
  "key30": "61av51dnaHhnm4c4zu8BTnHiBA5RTf6AhcT5phLs7v6SGR5PgGAMsDpxeXtiNM36M3jRHkDruiWqq2qzVvAouyci"
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
