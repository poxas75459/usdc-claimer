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
    "4hKzvHu7dPExA5XroVPD9apDM4YjvqbBj6DbMqDYEPmxYLZiHBzc8QLaQbRvZQ3eCP4bUh19aNbEejv7h3jUUaDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RhkJYewqRt8zYxYLVbDTT2vgTMRppW5Ssj2axgC24KUJbpPs9tEGyFkZTzkibuPwBfX5UzG3mXQFu7RiDN9AxNM",
  "key1": "39gLqFHFkwSozogriPMqyBEdPVEM9hJfUCQA2z3L1CTJMjajfkhmnTbnSUotkYKGs5tLe8ToAg9NpTkt1CbFASiW",
  "key2": "53w4f57d9ErsKd1fjf89niArsdeBXbu7bBCgCoHZLvqFrWsXUhmowYyvBnW8MMNXMDZk2E9rTunyGb9PGYnoygkA",
  "key3": "4yReAEbqhVNfsEMQfbeKgLQcefJ9U8XubSV5XCE1H8xsHckz2bZ1fZUP5BH6JiBzF4B3ktXpYjRSHZUdGbAwx7qr",
  "key4": "M91gEDwxaESSqgzj1e9morpXD84DVmZA4R4cXrSEFdJpXhVwKMH6xfgCdstN6sof9d8krd5GSRjYnSCMyb8Ssai",
  "key5": "2v1cYUGSfSXYrhkWBTzSgEVV4dG67s7RWMM2xGZFBW7oUJFeY9qaTwTuASYAKp12GbW4EBsXzCwKEqFY6K5hp6np",
  "key6": "2vVhYBWs6ym5xKNPxX59fwsrQqihN5nMAyXspBcN6jubGdziLE9dJZzvWgKCL5GmEt5ebcJsWhTCVMnePNGfGv7A",
  "key7": "ywRXEtQzZSpCMqd2re6ymZXG5ouNGsobWk2hAMT8jfka5bmBJnxjeSsxpK2E17wDST1gWAtkott8dx3C27TCBb4",
  "key8": "4j2L5h6Nj9zDFLqys9zt4WF1Wxf19YUDxSmNTgdDzxUmKRYS6ykhwBcMpLVMohFW6gm4mjYGoYiH5idkWWCnjp3r",
  "key9": "4R6UGmvR7GqxpYC5nJiCvAAf1zMxUCAtWJK6yXCX1THdSAJ9EiYFyqhQ8VuMe6q12fK5AMeXk2UkRkokiE4pehSa",
  "key10": "xjsyQMzv7m7Yp71gHji3LuR7jeDGs7sXD4AyfY6MF5eXNeeD2YByJKd31GLnQrH1J1pCVomZGEx2JDcdAaeKZUk",
  "key11": "avsDiKmzKWMJ2p3mmpj2goPdyS6FyDJLG32RYkZQZgeaRAppMJJUpbgNrVp976iNn1CVJmgvsiRDuSTMzpJAR9R",
  "key12": "L5gA3tD1xT4MkidpG5DQ4r96oBP2gM9DKkQCjahVwBqxEveZq6Uw6kBTGU3Sm6oRHTDnL8HJb5nBRYC7Pj3h1e9",
  "key13": "3GqVRM56MpBFQoBENzoXBRAXSwgEZ5afcmYS24L3kWJUZ6M75o9hrXDogEokBoh3jG9d1M3xfkeLZYyv4WANfVJM",
  "key14": "3pzYrzLvmuncneLYFzeTNLfa1gX4UwNt2iMzsgrKwtg3UWuABgMirxnnfZrFRc7DvYzgmmRhbu6CPFtH6Rjr6Gtx",
  "key15": "2tCqZZ7ADb5jsPMrHQJirJDMAeb5h4GUEgspNebDqEpQPc7v5f1bB7jiGoZWWJ5h252q1hHXPrMckzrUKxoSVHEd",
  "key16": "2dwY3ShtW5zbYcShdaw5vT5xjexV7mj3eP5T6a2nznXcVTkzcmV6yLhduvyVbR9XQJiZjJeUM7D6JgPJaVDKQU21",
  "key17": "2Bp4RHGDSHEHWWTaHRmhg3NKgVLp9eWJtNVN4Pgpg2gCYRygHnGcTFLvPKanxzv5EbxRA1yjjywwBDrk5tQNzHmh",
  "key18": "5kySSHzrZ2u44GEkcPvXZ1AeDFZVSqUg1uaVb17gUe3Lofn7LZR1sWMbf4igZtUwWqZzVbhoXGQS1VcXbGEz8LnN",
  "key19": "9QJjMfMRzf6wE1QXh9pxqcab2nBY87QDQDzavvvcAdL1pyTBLAcE2Rx9ugtRXEkm2SEhhSN8uDNdir8p792pJUk",
  "key20": "4gMi8drrCrMcx8xNW8AXHLAqkTCggJy8HcRzWEoiD8pTnhJgoix7wNVS8G7VR1zMFAHFNoo6x6ZnDdfkQY7JVu36",
  "key21": "3u4fiRqndEHdKn7hCfnWSyaJyxywj8rhQEr2fvFnNn425dxqdZULt7mrM6m28AFLgvUWUsY5VT64xeRWv3wCUoYs",
  "key22": "3DiXFn8kG8TbyfzLCsYPYZdTCLdVFNQshGEgNSy3HSA4TtQTHoem23XZpvt8bgJJD4qwpjLCq9VZLLhbgmME1kLU",
  "key23": "GrhB38SQyZACCcwoDyjseSx6rK124JupjgNbx1DBnHq1zr1xZSfhoQpdiG66NmLJf2Ez4Jcujswa1kGjDBwLfhv",
  "key24": "2UL8TTHceKenWmFxBtfRRbs7xyuRhgTkwTQVE4xbKturC8N7PQNRx3V7AM8T7Sao37h3wjEPszuFYD2b392b8duy",
  "key25": "49SEn3zo4L8Umz491zTV15xWaG9NyEWvBXJRHLuKjHAn7JpgPDVn1SJcEvoJMHYrdNzytFQpNp2EKBqGipnVd7Ns",
  "key26": "46NgwK3miTnyvsoQVZTPE3KNYziYLGzFFzikmzBQr4cE8GyXD9uoSt77hBcSWBGy63MMcVpBQ5b1Zh6rpk6egqxn",
  "key27": "489F7Lgrqtwq6a712zqbPJL2VVg5KzSVwDDaZX8TmnkjucKk2u1CANKmpQ9xpXvP5W76N2md41gHi2GrvByYeYDc",
  "key28": "3XdmsRqboPZs3sPnUR98pCPkQFR7cDYNL3pFQz1gPxJsPkaPehvtZ1zFx2EYz7sBP38C9N4Ryy7GziHnBk5so9Ve",
  "key29": "3d9a9v61AoPoWJL69b452hnwUaoFyXKNVnsDrtardwik4bSbvRp2g1WrXfpswYZUzUfvoxFM7hMSEZDuEUkpsQ4H",
  "key30": "2PP1jCP94Y5sVybENVu96T6WdrEAqsJy9Ko9EwrKhSwcFNh5vf3QiPhSMzsk89KUeYLKFePSARndv6xjK5f4T7Dy"
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
