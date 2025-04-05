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
    "31SrWXnDBCSND6dEKtfJFhRpz3TCyhAiiBnWXSHeBpDAH4yA9DD3cJDv8Tt12utWtT8Doe3bqS68V1pY2bX2XF2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nP2w8YgJXWNvS7BKvpFXkoytVFwu9rnGG8oPemQzqbU4LQCqa2B8GzZA8JLvnZiFwzGNdu4Mr8rR38Q8BrAkmGH",
  "key1": "2pmMz4YepfgYfi1V8JxK3v2jabZstzLVqgJsgJ5uoUfQm7UBEWVTUcucKSbKuPpAApATnC29TVH6YZ47ru5155nJ",
  "key2": "5QWFQWBBVBB2Me6CSLWWhE3u5RH49LqeiekDJTrHVGG6AQeUhndQQCtjpTvJFRsvRzayK2WgDvHHoRLQS9tJFzEM",
  "key3": "5f9DmGFcCDeGijooAaNNsmg962ofpkUhWFiigGSN1U7Ld9NGAoKXD1edpHQUF3Mu2qz87PHPXE8noFsTrgkU21Db",
  "key4": "53QmLYSsDmCukQejvsy9eLuRop166Uw1iasBhLGvcUT1ejki7bF31hyteKmj4jMKET96siXHTRybozh8S8J33cVU",
  "key5": "65UR6GXHKonvfTcHDfRJxALPfUPVqPbG33udLmy2hn1Bavz224XxuZXAKjRgMwGCS3Dc1CxBDqt2yk5EWEb323hQ",
  "key6": "41UNezCaeUu2TQChah9s1t8pYmfqeJTXDJQa3LDSoyUa9D68bh8GKeAGuUXtyNNz7MXtbzRrUsJ7FZH69mUkYRak",
  "key7": "5DMhJRDdXK8rjg511zTVFxsvidReG7g3L5sLuauKsHEsbNDfZwJR56EKCqu7RMdTrC1EeGMY7fZqgyDVECzkZ3L3",
  "key8": "21GEyj3V32RwRcpcLPTr2ezdRnznD1B1XrdyTg5JhbVudsMj8HCtLPLAMpJh2fCMjQsNFWeeiQg4YyPLA2aepUtM",
  "key9": "y5zwMHn78yzo2mTiJqSMpU2CnPakDnoeFGdj5MZQDpwEbeKxaSpKayNtEd55966fBNeaUAWmBJxvJhmBhEniyVv",
  "key10": "4jRsjWXwfCPfL1dFr9Zr5mo1FCPd9vYrZRPJyXvkTmg12CCFeW9c34Wvi1RGsDckxfggfscPDknPNkNKBzSZmvnW",
  "key11": "4kLKXSzaeZxCU2N3NhsnabbuTYvfw2AixNkt5sLRGJmG3y1Hz5EsPCQpTaWamr4eFwwksg8P5bKyXpCYAko3GjJP",
  "key12": "4YvqyhSx5CSi6DWFf23GQXfF4swuRdfSr77m3NEeUcndFN82Znso9F7FHqBwAmUiQC7tC2B8s2fuhYHsKeiSVWfy",
  "key13": "5ZC1N93RGvZ9guJkrnSH8AWEzzJ4KWudEGEbR5XwfoYUmHk3PhdSTEHCFP3D99rouUfh4PB823SGRVNR6kfxQLpC",
  "key14": "64ZvpaLkEHTJhWiqsn9bAFCXEX1p9s9m42woahyU8pp1duNofnGXLPMRYzicqAACJtgS2rarHW175t5neHJbEPKp",
  "key15": "28q6as4i7VZXFCoNW45w8gESW16UEP1jTz5WibcpALV2rysLhdkNfdkzdEAHgqEQ5ZCjBGBpu5mzhypwx46k1rz8",
  "key16": "32yzYM3v424JmEXsMYR1H1UwZ7XmWcsmoCGo5AFaLHq62jabhmxDTKZceBQXj4Uhht5uefN6kaCX86WvTZXcxh5m",
  "key17": "4wtkFPeKmcPfWZfBWaqfvGo77KUbhL7RvNB5g422WJii6p18s98tLnZR6dmK4Bu6BQDEsdrYaGki5qLbtMHin8r3",
  "key18": "BLXfBqoP12uPnrwog6HkeSWTYpfwm4ZemfxXPwsBP9AJhppycZbDnaH3onhe1ZnXXXDiufiR3VFZEPsffGz6SKF",
  "key19": "5YoP4cUMUPL23MzvdnuqSg1VKuKf9VTWiesAGNpwbigzu4ERpmSJG2MyDnGqhGSStLmUWWB314fqVc6hdQWoyyxf",
  "key20": "2q74M4U6iEK5NZqvZe1cccDDR4SLyNHnqNug1v1chjn3AS1QWZbFLTHnhAuXhr6AAk3eMzevfGnAtFsrzyfT8cSJ",
  "key21": "Q7k4iDfVBgYim5WLJ6qK4DPB2ZHtQNYFzbe2x31Fe3hsT7sDfL1kw1ErbDq9gBRpjSJLjJ1SVd4t4AptgpWnuyL",
  "key22": "5yJukt8chYab3SrMxzY3JjReNjHQrXecJ58TWh6BcZ2hRJPRRdiQYTZWEYA5UrCf7t89Yyy4EvuNgMPkPfKTCsfC",
  "key23": "3Z5dzyS38KhGCzKnuyeZbcJ7X32gbdzL61doBBss8Z3D8xg1brAxdBxLAG9Ke7fCF8x13giXWNLARFrm9NYL9EBJ",
  "key24": "4WtTnazar6dxu5RZvN9aHEWYB6m5MzPaTqsYmzBZMGv8mbpfs97k79FGzQE3Sh8xcHiNFLfJ61nizxSbsfC2Q4DU",
  "key25": "2ycNsN5PKjFYPT9yiNMtYMGxSeEgYmvuvjySrmoqG1REFJipGHqMoaXFYZNmnvtVFTycaSSH9PtMubmugzhsu1F2",
  "key26": "yddZzpASYtNsQDkG4oxqBsCuhipCqjWQp7WP7vKaVdh74Pw8MMuDjCVtVyZ9XSJr9ZEi5ryUFDGpD2UtW5mJmgg",
  "key27": "3oacMBUFutNZPHf1HsH66qWBuy1L4tr4dHBj6NuKwBuNUaq7wSozSmQu7GcH9XoD1jKSw4aT3oHUPbkgvD5Bw6ub",
  "key28": "51t5W9Htt6MBoDQhyQYfhRtfXrKrdSbT8jQB6FgJj7psfH3US2WZFwADX6vrxjKvZKEmHJcwV5AvMgEBSzBQy5wb",
  "key29": "4fW2upUk4uJXnGffLsf9FcSuLenG2F88GvfkDAUExkqvWC5875QddJnhdL3An29rxsbp5Le8nui5HguknhDktG9P",
  "key30": "2u8rqDm1ZZ75f2zv1FmytEywMFo9FXY75KPEumECN4GGCKSEpuuv3qKq353U1SAWCgTj5pLed7S4ZBRgtRFs6nXh",
  "key31": "3ahFEpPaeUa7rQ28er2RKRfagarmmTs5ka4gtn9jkb2oS4Kd7BEDNzqxYgBoPiDGTnn1uB34aLSs2xh2ECXSnQe7",
  "key32": "5Eq3MSTmRSEv5kNaax4iAFJ4sDEeVDZiQu2vpKp7fZmhWjnJUy5LzFttf49kUdYmwYW63WkgC1daotHnHKWUqF5b"
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
