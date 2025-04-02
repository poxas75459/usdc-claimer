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
    "2zSc1nRrXsbsr1Xd6HR3wRoJPHhtRiBxb86D9YKv36uM59f4sm7EHmwpVrAdcNmpWsUp8z1NtXZtS4KcndfvAVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ijPdtkM7YFfg8EkrDUSbvWeaERAHwF4BK7fTW3iYauz7cZvTvqxHWEbrjBfR7XbT5Hp1epQT42oiteq6cM1AgQU",
  "key1": "5Es4XURZW2ocaCmztqvUhpxLyDDoYcFx4FS935NyjZTB88XSuZZ6or8q898vkKpoiFaV7qdwU2WKKjatBfd4cLwi",
  "key2": "RHPPhFKzZmS3Nes7BhYtFzqXKVixLLoFpJWMZP1XpBrY5rhoDsMUGKjH8QBnuHtnCYZe3z3iG3WqL2V3sqEB93f",
  "key3": "bzTF6hhpNNTu2ijjN1XKM5LdddWRLii8cn6KPZBxH13GnuvSo1UP8xZiodz8wJF4vydREHqLdiHdQJ3SWPkDy5x",
  "key4": "3zvDBtY9VoCHVTTbj8ccyQiRp2ziGjq3xYFX67tm8xZwsrbaNgZLWpaWJ5oxzcmvopB9rtyqkV99Juzpg369VxEm",
  "key5": "25C27qwduv68P7dJQqDJJNLFLrncXSNhJ6LZUAHHQtt5MGSBZHiU4u41Qf78XzKKEXVsVFmY9nFrZ8MHwuBNoTix",
  "key6": "3jvahH1Jgcp59A6mbBLz5v5TwapzQp5W3indAMXGBjmALvcrALn2qKBZzggsuPq4H2F8vBFu6sdKoj51yHZedJ81",
  "key7": "2ABBHx5RbvmKzXYXr1UjevB6auirqAZteagWNK5KwD6pek3VhE79gTuNZeCuSStZqXcEGQoJMc5UuMpgRRDQtaTQ",
  "key8": "2m2TMfxLAKTxDq1LXyURWXqLVWHhTrqbUNcUm1U4hg57nW5vi84DGjMcvZWbLVPdpmf1B4EdG6Q3JeqrmGb4pfGK",
  "key9": "2GNxXzawQpvgKw1MJzzTDSbyUDCEtiMPR7gWtkuaCFGYJcFBCv9nXbawjH8Fxw23GuCzyfhCDSoEHdX2PPm7oKsX",
  "key10": "2XTuYr4YDCKMWWaCN2MpH6qgJSSSCwK8GjfkF2fQ3d6R89UWDc6GwzfeSpkgpEchGbDhJky4MnrGrsLKTiwkVgaV",
  "key11": "4C9G5zuBYAL6aJqCjavqn6PgBUHF4n85VFSZGjubZeE5vmu6GWwGZy7a8bHBbTuoX6fWwNYgeR3KAZ8ny5B2M4Gr",
  "key12": "2qu7vboaN5MbuyEFNRcWJJxmE4PUweZEEc6psG7M8rty2TRbuaMs2ogRBFeMXmRZRsVx2etPgBfXu4D8tH983SaQ",
  "key13": "3EVsJMaeeHiJf5YTupmPoiBpadzbo4qtVxu8KTQTuZ7xiQ4cMmD59eyXEbWfR3PkUbdYb2Lg4N9ZMJK3RAgJX6k6",
  "key14": "48CsKmv5vFJohBA3DWhLuPq44WNCHg2uEgJFpWmDmWF22NgvtSRCA6dD8iPDD4WZyRAx4MUR7611P9mcQDZzoXt6",
  "key15": "3mxZagQkauLfBT13nq3KkSTCTGuwxnHjptseM7SJKaJEPZifzfpypG5Up81QoNRjLzwf5tNTnpVfTGQ5F8vfDzPS",
  "key16": "61yEcgemqKNDRrS7UC5P4vFb8nPAVF3UEuPBzgN21iHuZHvo16xoSXzZXT7xgbtj3cfGmUSAyBX1ak3KREkngxTK",
  "key17": "2EgjLtPXv7Fhxe2PDTZDGsogA4FAXyxGPTEKufst2dco7fnEis2GmDj2Rb7ACj46pYECCqTShq6hWxPJqzHob7T2",
  "key18": "5VxCSMn27L1CCmf41GbW1ZgZwTihhP4bc1MjhUKxBFHVVyPNjj8ycdT8cuyvEuRTEUvnoDsg8LyGVR4FpdCUThVn",
  "key19": "2Fsd2zZHbQF88oD1yQXcgmvFA6LH3gMPn8ZFSTAD6yXHMPs4SFWtmgJ4VPhFfPBDRhg5pu6QYvX3M24NBDNA5frA",
  "key20": "26AA1vcvpjNvegDo8svqdfndDdA23RZSacBfE6WboY9uKHHj4tqR9renrgTxvi5rTzdjMHwqAWYSYekKYqvADqcW",
  "key21": "2yh3uEEkWtRRM2qaFdXcenvGQP5WYjnz2fy1fhXp6Nvu4r143JtKsEodkDinwz9V3dhUBscHYp2425wgm9GcmcKx",
  "key22": "4jn2wyBASpyS5r9mvrAjuyKkfDd4rRtufb3CP31ErMLT7vDGAhUwwoQU2oFiznPnQTZqGa1Yczrtb8EAmhp6XmrR",
  "key23": "3ouFM8e54HJYMbM672Mn4Q61xApVVkMvjrbhKeAkVFywFU3935RQCAZRyxNwppuDvjpgkQdoZ7ePajsqJ966GkfZ",
  "key24": "fcoDsWpHWcYFjy65KTAiPV1oy99jvUuhZDyqwcAk5vogTCUybGUk8VRos7ALbrDSXYC9pzmUKMPEkk3TEEQUJJv",
  "key25": "iW3eGN1sW2wcZ8xf6v7CC8pyTYJtaAERFBeD6bfmR1CKrzFXt2KTmDmNrNweZHQgJBC9pXhnUPgd1mqziiHLgx8",
  "key26": "3SsCVgCgVgNS9nzQ8gb61ZkgbhKymw51q326Jqw1tbHagTYnmjXuY3C3RLsXTxuzcH4sCe9m6F8jwRNB67HJ4dbY",
  "key27": "3aTmQVxcQnJhimC2rHTgtKWkoX6SDQyKbzTvMzLzhukVfRfFRRf4UuNHkG8tSw296Nx8C4RQV62kFRvg1DNq3w2G",
  "key28": "CzYbTVvcYiVQMzcru4C4YWsUTXMhhQrimEiu8MJVvGSkvEPsfyh79X4AwynpR7AE34eDZw8t52CHeqdgvZVFZeQ",
  "key29": "6e5T9Hdop8B5GNiBYa6S9wyrCZ1zdoRstrcTTxs7JiikDVHPkaMpeVsvsT49zzByKcNBjeG8gj7tSRffgDAVC6U",
  "key30": "2g9HF7THNhyvWzAuy7LPPaLxUpZdEXykhahoUyqfMXRCguYRidS5w9LgbqYWYHLs4zN9g1FAKuroyeM8wbZJV6Kh",
  "key31": "2U3cLfHSsoGY4jdeZUYu9bzhaTob4WiyhEegziEL82Gz9LDKAfgHWbTeFWNdnEFAjaWnD3R8mF9VtzAbnCmBEMbV",
  "key32": "4mQzrsoQHqUS5r5zVv3y1CWFSKbqP2zKGMNCtpCrwpZjPmEyAQ5yRiQsH2MNC4Wbt1SfQWPZtauwmWM7vo6usw3e",
  "key33": "28trFaTg1HovjoVEqQunV4xDteqFS8JCAN2DuUrv88Tj3wRzMuC9nWYqWftGxZJ6aTDv3TqGVUQ31jrVd9oMg6iJ",
  "key34": "3BvpexkxfHYpU9v3ajP5uN4GXdBzj11zKLXbpeZ5qYX1BJ2JwxSeaeQSVgZZVwAJK2cxL8JCuBxpeesB8zeFP8Sy",
  "key35": "34LL2Cw4srEC41Q1YMzkNBf61Q2yoQLkAJkC2RrtudykKQM3S1W3bQqHnMx7AB7rR24CNJA2k8rFSpJdPMSCG43T"
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
