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
    "34Xe435VaqfBg8SCGjJRgvSKcWP7TjrDiFe12i8Fn1po6rrKHZSLcL1jio3HWSEpiVY3TdPmcKqynYKjw8FbpLtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BnTFsAs2D8txEdV2RhC7AjWVRedwVJC9eDHEiVgWaK7fGmBuRT3MBxForLyfwsThWBehmax55VjDLHfmZrwJmrS",
  "key1": "2W2Bg96ot2c7DJLPhUg5ecxCxv4Ru5pDSdQ2HEVfd1kNj7MQ5T96EEB8wPEWctidDnCiwRq3JNmRhm6922tyEKnX",
  "key2": "tL5jHfEeEx72iEEhdHJoxc3esk12VgWa3uwYegU15R9KAXoGufeHQY1qNhfUZwqLYeeGWjNj37ZepZWHwPVTg1e",
  "key3": "5tU28aWuz1vpBA5p3dWVFbToM3rqffEgiR9xkoGi8CaquR2VLmqBje6m7pUEHYmJmP46c7JW2vcc7DcNbaaVbGg",
  "key4": "2FKRpgouMDqwogGjCC25BX3wFfXxRSMRX6bubutvWuMQ3fWor1VJCnzyS9TgcYUJ5iyXKTqJWy9Xdv3LHmomvusr",
  "key5": "26NaC6TQnRUtqWjf5kyW2AxsxYcum6PbPSGzysMWeLZ2Gp4ZPK3A5Xkz1hGZTTcRSqJrwMVwDRxsaZMrmsMwWYLt",
  "key6": "4TBsaim6JztjbefY6qGGJzCnKFqAYmccwoCX2xQsxbrvYGLwTYvUKQ1UYG1QW6yALgDKkTAMqRaRmRk4HNJDuU5Q",
  "key7": "4deaG4He86XUw6eRVKyBxE9zCGaLkKrtGdHr3Mf9SSHmHxaYKe6omnoku1p8AB2cqpgLMU2hhTjWk42m65HXPPT1",
  "key8": "2DTmvowuDURzqruFcAUsZ3vLuw3vbYhyqVHNkMTTsMwgjE8kEgYrnydonpeNxVEifjbFsjvy5YxvYJ69gvH87E5t",
  "key9": "4Nex6xN2BXb3EtmPpxahtXC8JR7xzFx7LLTCMdvvoXZd2c7zX4xsapVYtFAwoP8SJNajsJUJbHCRTj5xC9jHgVXY",
  "key10": "KJoucG9mQxDf5J6CTCeJg8yD8chTjA7PQv3AvrUhGDNJye61h2VevBkDmPTt4bLw7UzjC5JUAgLB6Ct98KZNQDw",
  "key11": "4YpqM5d88zcYJWj4Xw3o9yMmR4qrr7J3k1Gyc8F5dKdFHCqrJP4UTz2CPpbGmHrPfmLTDVP1QLfYAfUj6NvAVcn7",
  "key12": "285PQenVpaFn5FMcjy99AZn9dGspXwkgp27JHiuGWiDvvAJfgRnwH5WLe7BGkrEtqiusQnQzuMeGywe2k9H7kNqG",
  "key13": "5CVJjQoyBCs23mpSHuJT3DgDCmRNnox2yz939p7ehkKrd55wsZJ49uJ7nh2ye4xQVgXsgTMy8JqJhQksyzPF9vrz",
  "key14": "53GTdSGU8qpR5hNpmwvwxMoV1tn4E1rHWWz9sR9Awc2kfBZvHWrbHwaL3suv3wEME42ECxc4Gjygz5P9Qpg92rjb",
  "key15": "2c9HWZK1UDK9buPNEwM1VNvnYtNVkpEDVP3tZMTpVTbDXdR2zZya2iXH25mnS5FxwaoZEnafs9Esv1YuPhjzDzMz",
  "key16": "4QHBKCEdg2LpbYUqip9MVRCEQ4jH9ecY4kNaqsaUzj3uQr8uhMwwWUiSai2f6Wm9AEBGCdaPquLfQkzARNmZgy1q",
  "key17": "2X1uPbNKjbZESP744XeiQd9PGQL63jAknVwp5rEtQMRRvczpaHBKZd1CQTMf7Penjnq9ESa7epYHpxi6UfZ5fvjz",
  "key18": "57x6uoym22Y2UZab1CQ9xqRkND6QmzLyNbYuP4JY3UdMtgLYpKpJk2nTPTGG9Awniv5B744wv2gAXYR6AhDwPLtk",
  "key19": "2Pz6J6XaA8xipt3qNubnRPq4YPFke8rTZ1sh8pJcKJEoM9xYx7nsWdEiAkEHKG4iQFMR7E9xuTMNEpZiJ6GAH4eb",
  "key20": "2LzWH53RgFpgBVdzrRhkyKjZe4kSRkEtyUXfLEuuEQeV94h6g3L35CqFJfuvyJRBioMhcLnGKNh2n944hQGZG5Sx",
  "key21": "5hUWFhet2fbUKrY7wZ4ECCpN3CR3vqjzU3u9tsR6PdniDKaSWQ7QDMSDBUAgba2xCnVNpm7HUiCVLUj2W8nebMqj",
  "key22": "45bEtXVRqbA3rngn6th9GyJSsSfRS4477eaLLisohaLE3Fm79R9u1FexKxguMBCQTiXUBcU2aX3CD5RdXFqFRdpe",
  "key23": "35iUqQxYzKh5o5Mv62XLj8CNiph1ZyUg36yUKSpYB1fykB8d4WtWfTPwQZ1MbJbqyEYFbGrHoR6ctGtgWbJ8E1VT",
  "key24": "5KUUwRBiCNxvESxDFW8L8CfJsfdtkuLPdjonCBANnWbPb2GtUAEhMZ3au4KbQqebp3J1ZW4y4zxjD9dWx9vnpqa3",
  "key25": "Gw4qkwsueVxqbP87SNcwEjqo9pr5jQPiGqnn2akA1whMT7HNsjEPxpBbF3hBRPEELfSSd1ey2wXTFN1KkyiV7Q6",
  "key26": "63RmmmEw2FWzSowEU45tQv4Tj3xfjAeS4TGUKDdx9uW7Ep5wv2TVcGYTJ15n1SLCvLcsan4NqEt8qo9vcvH2q7V2",
  "key27": "5zvPFHECUTt8pMxkQXYUBrQZbnRyoJcpUYto2HkbwJKhxzrtnibBxUqTAE46cp1dFFUibtSv3ZV9xJ9rujWZszew",
  "key28": "bnabdUviU5XZ4MbTVEWnQQxHRHeyVvvM4BsPUkGYsFpE2N6iPQvv82Rj6w6pnR3MmqhMshyjr8stF5YKi1HQjcP",
  "key29": "3DqFTAZAqae4k77phmYodkbH6wWsmyip1NQP1VGmnkRT3sBvQzRX1XYZyX2ZnCq2s9L1Jf96N3qyJcQrtALtYPa8",
  "key30": "VQBoRZqQqy9SmdgYT2dvMiHZRdzWNKa8MfenW8jE3AyoiJ34AKBFjHJu5k919hqarXCDP5eM6TJnjFvPupCTAB2",
  "key31": "M4azGLo1qSzix1MG6ZqJVWb8oAsqHnmhbPyQQKqDso1A4yQAXxsqsJGoL65oaoPNUdYJjhXMaPHbGbDykoKLN4n",
  "key32": "3nC9jQGNja9TM2xWMQwM2wqtVjAK69keNKheaijjUZK7RYhHZKWm2dWXTbVmUK3QJFEwqLpehm1S34Dy4kki3gUa",
  "key33": "3euredDyCq7SdZmTS3u3wbKKJTERkxU9LriM9jkkh81KvyGZJtspYFBK8AxtMSPSbP1QqyFioBmSMJPPwLLSPLxa",
  "key34": "5fjy6diMMTNnFEwrsMxAKuvjwQqWzSwMJye9pifSGiKGwTeMGo6zFi58QcVXVXNHEsSrWmJ4k1VpzMyAg1tdsAXp",
  "key35": "2tepjn4QT8nxRqgHNLYMCSotWP1yaWWdRmBsxVZQ31PkQGr9PU5rBZy6wNebrCoZKhS7EygusBV9adLZ9PpcXruG",
  "key36": "35TgG5SjtC1yqw39TYnk6cEQ4HByXptqatkUAEPsAABx7qYoEAn5Y2cZPVk7i8w45zeCVSdjnYgxYJHm4Yqanq2u",
  "key37": "2zEoK3dhkexvPTh7tvUgWkUhFPgcFxSNQomCB43YjYbhgfs9dTEn1d1t7RKoJjipX5vNYc7WXFUfiCyKxf2g8stT",
  "key38": "2ZaptNitrp45RURHyATkp3ZFv27k8jG3DVHh6AGi5VgwBGCCDLk6Wf2fWE2wwnkgDs494c8Unb4CbFxByWwjU8Yc",
  "key39": "5zL6domr9wYP8dcezHZQ8v5cf762aLRqQ5ScXvWCAH3a6ecbuH81Ma728C2aBrD4TTB7fdhaGGUXzgxoaugdhTRw",
  "key40": "4i5qm8TyzSet1mVgN2p8nQZL51JQTfgTsjvfQCKC7dvN32cXKK51aU4L2qwk9rRkEAqcH4tdoonWQm2QXUth6Cw",
  "key41": "3sg7D498FWPoYnDDu1Ck28bC7Lxbbj6ueoVWqTGixeNF6oxUEdZc9cEdhabRPa6RaSd4TrikJnnm6veXQKzz91oU",
  "key42": "2j8eZPkwECdsNnVybiUFT2xuWPifynaCZK8dQy1cMJFo5zLcqAT9G6J9W3t7GZURbUYyu4yo5DyhKnHCZanorfus",
  "key43": "3HY9e8kQoJypaUjkYEGS5hh7XHmpnKKA2J1kQ4u4X6N6onwCrAUrK2NbJwA6f698LtSS3doYb9RERxLLM2nRiETq"
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
