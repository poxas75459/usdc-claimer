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
    "5PZFfBeGovifHwDCz28SvnAkMqzqqzr2EmSe9zJ9UoDo3o4CQCFBKwZLKj9346broSfFj839pJQuTVUM6F8yi4Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SWsFrL5ZLutAqoVG2oamEn4RH2UnNFDjkdxVba7LtgbM9r53LHQfb6UQ74TSJEqMVJwkHzk3UgqSMRJJUkwCdMS",
  "key1": "4oxCbLMP9mk2HaXg1Cq6DfTE19E2awEPc3xFQXKH2v2ci1h92XvG6w4zn9HyhrE2Wk4UXcfJxgorWp3gkghkt4Ga",
  "key2": "22iutvV6MK8uoVRuncMPowjTSPeNBUuABM2L4jMVq7YfNu2DVuz45YbayHS3ZLzYtAwsh1bQxXKy1Mxrp8y8zCLv",
  "key3": "2gndCfGkTSg1GRuwL9L3aHHvfW6D3sY6vMdyJdtX3G3fwwoZFFVMu4FcL7PpBKi3arab1xakZByPoG2CEZ6zpHzH",
  "key4": "pc1G5DmpCEe4kcyPoe317TAmWvv1XjyJS22QwR3dpYPSAtPv5obAooYcJKvzTxPaEW3SxZJCkJM1bHk71h78gzr",
  "key5": "2N2c2kBidGZqGF645S5CAx2jvoicpL6Esv3RQno5LsQQyRpBMiEVBPr3zUg8eXSuQsZGyZxsVhRUX2w9hsyLLwos",
  "key6": "2UTYw9UcSLq2dV36vnETwjtMxQmvjAvqgvdBYPDD9S6zNeKZgngQcnp2GXJ3PWRLFCt46vv3dUacD3AZNDF5qsVo",
  "key7": "4HbKAXmiumBgNVfiXFQXBgETP5T8AZXPRUvdHyVAzzCu669Fc1VGs9MFSaPZ63WUxxxZvfxSX8ft6pABeHv7J1Fw",
  "key8": "4y5gXWyQBHVSjPwHjwNCBXdFqo2zFicksF8Yb7m7WuExeX2dMzVr88CzrDeaogtsW5oAXweKu8xtLzPyXCz4GY5T",
  "key9": "3zaEpEoqxJQUh5ABj99SXT15yfMyLg2A5D3TVgcUUKm739D7kvxLwrKJNk4K27YYj82PnAygqmKdpos8jxVF35rP",
  "key10": "UWDeXJRerRdpgprTqsBxQ8tKn43mZW7p13s75MuhgiHknfTi65YArPnJ3z1Q9mmY4Bk66Uembqfy3HmaJmGkzwj",
  "key11": "EormGmkFsFVVaBxBqStvJcitDL1Y5cahg3VnwLUQEk4jZ12YfvTCLfZ7g9JLrws2aJpwCem4qnMmM97sESTEdgy",
  "key12": "2Dm75Ycgq4vzVQtd2C4DjeXUwGVDRVdBvNaqffiHhSYaybJ5wXp88CsQQX9ZV4JCKtu1cgSCTtNSkQz5rfR9vftk",
  "key13": "4gXywouRaLTqLHChjHPLuE47dMZf2T16b6A18W246N81hWwp9uyjnvCcMUDHTivzTmtJNaR5sBhNe7V1sSy8GLPv",
  "key14": "2gjZMh7mNi1B4gCFbqWjEzJ1e2CpLivyGamMAvjhDeWw4Jk1AkUY6wPt2MjeWtMYYuPehSjCHBRpe9zuVDBJw3JR",
  "key15": "2FAP4JF8XXQqgDX6fphpfbsuVfrLhivyFsUhCixiqejk4xAWc5L6W4L5E77Pf8GdW6Hva73taNwFhkRpgrAMrFoR",
  "key16": "zm9Px4gh9wSxKKBbjihDBvUNh9xEkVsr4zsdNz35qFugHeDdRcHmfg7N7QydiXe9WpsfwKQD4Sqh27e2RpKmJGG",
  "key17": "2Xt2LSwa6j9ZVQPvwBxR1DsoFRXFEKRYiy5m4iaZ1f5y9eeEmegJNu6H328f9oEMKyRMeXLh4uqDoW5CTixe6WBz",
  "key18": "2peM3QiTgQdSp857yCaF44LCWdpVFtkNYSHYqhPrdoFKZr8Z6t2DQgWGqWL2he21UxfjLc39xRe9DPZfT6C3eFsF",
  "key19": "2jqFRzGEEg3jhX3yQJkR3z9soc2MtX5r24vpdq5cQkTisURBq791xaDPQXVRoebEhV4CXtERmSLVo5n7g6x9VYAq",
  "key20": "vCNG9S9Du5BWazJLH1UjJLjbRto1PpJi7e3S1AoegsDbt2fuWGyCXUCngyt92937XR1ZPSXS2JpnnLx9ef7VE7L",
  "key21": "iZDqELaTLCR8xRxHKQbUopbXhUZ5fgyTQy3DY99rtW8zF4TE5mcHDGceABt2LEgB12bu88EfvXEm9HiMtjYBcw1",
  "key22": "3RProUSaqHuK3qGibAHNr2PbwGvWa4QRXCxuFhpzbTFZfU4tw3wHstAPiTDrq7v7d8QVc4FwYXZjJBYeW4sJc3gP",
  "key23": "5FucpFiDBu13eyfCFSwkCWh271popYZaHtjoFDDZkWyKVsSBAX4SePogE9UwSEUCuUf9QhjWgmEyQTiNdCfcs8C8",
  "key24": "53nrqYAs1dyGXFr1KbbyYMqRBUezEFCW7BezR4jUozHRm8zgcZaMbcEprqw7YbbeRHqdDbExHHrwGxhfUbGz66Vr",
  "key25": "QweGs6wcJyD6i1VWH51EW4hHKXT9aVuC9kigrVHHBDzbpBCVB6reMy8wGrXY2ZGXEprD9onBvEqEWhWaG63vvjU",
  "key26": "5prVhXUtF1sEhfwSbNh5U5QcDTrjyMC8cT5QE4rUnC9gkohXb7KL6gXGJYajxFdwjPtV85aj7yRyprsJsL3QWVaV",
  "key27": "p37u5VdoeHfvoM95WQUMLq7vbXUKGjozJhanHuVQQ49h9pyFexmwuxRpUiTPx1FiaMFvJCZHsj8znFHCUw5GhdJ",
  "key28": "2fv9hC2GkFJQbqfP9GKz3dpDJVMFGW5DgxiDqP1Use237Gq4SFwH1NDBnPdozBmnvrndLUPkDBRRW941sFQjsZ14",
  "key29": "3L15rXcKHVnfxGQNmYBzU5iFaZo9rYuWnwhQ6QYyGPy1ZzjZnpswT1XxqBj31npEdwP6JS2a7ZKKKkZT2niebDVe",
  "key30": "ioTqNWCvqjqn3RTwuK27siQFTqVXvuBDwWmpxezSh6Gnx4LgPjPS3NcACzikViDxdVCQeyu9PyhJj2GcrumuJup",
  "key31": "2uK56KvW8o51tDd3cQr6bmhJ2NFbzfHHiq16PTvBRo7T3LgKoZfrkHeEr6qUEdq3X2Y9Fs4g8ymfw3uFShjDa662",
  "key32": "4y7tHSsiXMsyccNJa4hxJTN1zzERWWE8ub1nuuWpwJVZJ1pGuBnwbUZnBdQLaRVG6nEiqhw3nM3xcHG9Y6N7jqSq",
  "key33": "5KiKF9Aag7ahERyFEW5J8g9CUiUUmMLH59VErgt25nBsAzAFMnWyeAR19Ec5B9EGZRFAP7ArU16MvVW5i1rKNbca",
  "key34": "2vBHyRmyyW9uAZowDjM8zWxJyGuYxd9ANfVSjWRd37icaeuAeXu3gCReY59JpQhdNMPzSvw83VNFAPUaEXN3r3ax",
  "key35": "57G1Y6dWbgcGdhCHrcjhTMp16vgVibHxG3sgzSiboRS7BsruWJ9Jkccus4G8hnWRMQhU58saaakZJv3VBP34Vtqj",
  "key36": "48iNyPtiPkHUFGm1EgEmtnq19JcK6emirEKCJMCgALhmhfsoudPgdszSJGJ4uiN79qPf4kR1v1MJr1NgK2dHWdbK",
  "key37": "4LocQuXiMK7tW7JumtF4kHqYzoJXwnWtiJDy8e45MS5r8NSVxVoTsYtnVxGaz7vaFn5CNq9MMKEhtoDMkVNDMbtx",
  "key38": "2c7oqVWszmE1srjT3gi49cuzgQQrNKn24vcbpBzxMrnXwBSBCkeJggqCmygq9C1tYeXX6ERDDCuxbmKwjdhXVp2v",
  "key39": "2rqYMf13rgas1c9NRGLyBBX6JJEjL97DSakr2UrpPary3QDvm1HeBkTJCQeq9jjz4ZiubnxPaoMYkEpzTdZ97YVm",
  "key40": "43HsfHR3XE4dvnCpGJUBihGdh4ibuXM1LLmZKN1qNdUbWxdpCHoLjHV2vGmn5baZdgnKxGgkhRZCeMrtq8Fmspsb"
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
