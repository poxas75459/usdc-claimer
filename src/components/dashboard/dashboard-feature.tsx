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
    "4QaeFNCXNdhUwRThpsP56JsPgKnN9AAyL8zqnxuoPqQCb7pPsCwWfp9hw5z2mzpLSGmGD7Ga4D4q5FdGswJf8uph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFn4FoFTVhaeDgDMgq1EJ61vxsLAgbub3gFoxUM9Ai7E4ox3nD7ZhbZTZHE42SCWSDNtwekjE7W4zvZrP7kTbzx",
  "key1": "2H2Yecv4X186QHKszLPMNt4VC52BsqkNNFUwEHkSmpAYVZtXAJ8m1upHyU1r4wA9hPdQM5ACniKuxNkK5kLGb3Bp",
  "key2": "4QFzjsVAYxyVNctHdMEWwfxyJoCFHzhhfBCuAXqNbTYYTQWapq1wWoYpVZg7vkUpT9thwyZmUPwzCbr8REt6Mv9V",
  "key3": "4S1a9SmUFcX3bxX8BAN7YhrWyShh7kGh49wfDGkEznv2nxDW3PsND1DKiHPLCrVepgN2HMJyyu2j2YQDW3j8YWKi",
  "key4": "61NHF4tm8QU5bCnHPa4UTiDuoYAvacB718eV4eHP2BfNhcZstEQo6jhmYcpgycrrMzBH2Dswnoi9s2txPpUeaZav",
  "key5": "h5KQBjRhWQbeoEqbDUMTz7Gft4FGE93BhseqvN1J4sDLdmWoeAbjFiDv7Si3LbZjY39nf5buNZ8wvmnFXjfFmCr",
  "key6": "4mig9BTA34g7P3anP6sUgFj3aZrY9aqRWo9URzftY8uR3U4EGEcqcQR9HQjxTftFGfTrr13CM2ZPF35zbueNtJd8",
  "key7": "2MeXPGhaP8eRjmhb2WD4QcCrdRF67vLCiCTfsNXwhd1AWz5wsE5C3UjwURTKBRpukd3JcpcBD5PJe6Soinoo7D9A",
  "key8": "4UhjteEuBY6oqUsp9jY9UFvjXkeR49aREHi5soPyrYLnS3grurFhgz2nm5noMDJMQSXntKysb3WHPEUptnHZakCa",
  "key9": "56pi1bU5PNnqSsvs3GyfMDvUMHPvys4s5thsw6KDexxoAjesWUh3oT6VZFdN99W4Z5YcQRff7QCwA8Ead8Rw5jqp",
  "key10": "3j4NNHjHu4HJdWvLweesudR2VVt8dpppHnUjMZbiRgKxFRZP2aJFHBeKLHa3QJbpzSz1cESEALKnarPuJGHmQy5x",
  "key11": "5qHB2UYzadeJTFhWhx8MWhsRPEWknErixoxB3MnyiFnjqgggTShRmtJcLdeVQKpqwzSQjXKk282ZaR1qPDhyob8w",
  "key12": "4up3ChgBf9vJPMWM3nmZ6zHcAvRRXBE3z2CZ8oAxbUZsphg8QF2UsdfP3TRHDMP6aKp5qhHz4y5UfuiY6ayHXxmf",
  "key13": "2siosiHhxqU6hH73GRg1xWeFhAv42qNJHdMdvJ6Y3i39LoMb5PMyJeLgJritgjSiEUcZ64y31gdGNYjYFe2YKLzM",
  "key14": "65s92Byn1faMQnrtwsndd4bo8V6eaUcESBMEbmTiTqknfuK1UL5Ddn8WB6zcFw5DwAW1MB2cUSDtXzmHu82upT1u",
  "key15": "4bsYy4f6dwYgLFXzDnDRWvMspV8XBBZ4m56qAxe38pLWykGJMxXKVshTe8MriGY8aB7JFv3RmLAHtf1GTdKXAAKL",
  "key16": "3oDjqnMeEdmDnZrYRZ8cYVZd1wDKtSQ8QMrG6myssRw8DwhpKrDzLASC12LZoz2HU1KpPBStNLv1c8wK5HjZZyHX",
  "key17": "65LKxKmwuFGFo1EMHN1RamvCHtbDwfgfNNGQs4okPfEPZKfgye5DFVFHVjBbfgZPWrBkacAisXjVvR9fiaA5WT1i",
  "key18": "HSQYEHb8MaSCnUXHjQUefyox3PNssoMhynjP3kN6QDU18MhWDBmaFCX4ZyodT6tqChL976ojth6SCmGAGa5r6XR",
  "key19": "3gtikUiHv4SRdXPE5nYrS296QFmwfaErGmsh6m5KPR9HHzPgzn77TV5odaCmk4chgp6GGRma4HK2GbLXP9WcTowe",
  "key20": "5uciPQa4QrkL3vSFodk975UhStfXwvnbezcH5RkKGLuc9uRKpvMHFBakPuDTKQxUDc1Qfc929sEscsJ6wqkFwrZC",
  "key21": "5CG7UmDu1UAXPnsdGHPL5o5mPw7tas7DX1eXHdA3nGwymLowjJWqvCmTGtiU9xdFTyRDVs2XcjqwbxSFUafLiSw7",
  "key22": "5JxBrYAM27AwBvHQ7dFwNB5RjeoJW6rxQmoZ5BGfbdDR4K7xZKdVqK16fxWWhcKXsoJgMozJphsxuZeiVHk5HiY1",
  "key23": "5FuoVQMG4zL3MLEg2T7tUsLYDUCroyjdCcXbkG8UWxBUs5eo1WzQkugfgMpBJkR8QdXBCUvc2G2uKcPFWndCbAkB",
  "key24": "RDuXqjBqxTDV6UjnwoVqzhZ1hwqo2aHg4qSmMRmaDua57wtRA9komtm1yPUXfcrCGbsmgLxYUT81DauHUVZ6G9m",
  "key25": "QsGGRBZLVF4hg46BrXYZyCn1LnG3S6KVARVAjyWsnhwKWxoPXD1KwmGLxbzjYmfYFPdxAPkN3GydqVCbfFrSwSB",
  "key26": "4EnWiCuGiCGMhHm8W5nAf5b3M81Q54G9CzFTyGBbSTyM1xCYrF7E7LYXadWbvXV3qUECgD5D2M6vteBrYjaYyCuv",
  "key27": "4mAWQrwoto6Md7SBT2R4rzb3bKZEGskWp1pLckdEKbM6thamU5cfowHt6vXXKWEj64nBu8WUcencJug691AceqPk",
  "key28": "3o65im4MTZjZvvcBNP29NwTRjcokZo4ERkNjKE3WdSFHtwEAugRzpo8ZJxLsRvstuAndxiPMHjVxRc7UZNkeKYED",
  "key29": "5FzdHwco45KbV3Rp9nGScRQrxh8BbpjgMPbATjqc36jVTRuoVxsdy7C5rTTjG48Q7YDcCM7k7ewQyp3PkAiJRwuN",
  "key30": "Ay2ifGeFeZMJvbdq55Fm6E26VgjNWQJFCEfvYCooVsGxcZpCg2Vtzhjp9AgNgzPbxhS6xVV2CokDemjL5s3mB7C"
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
