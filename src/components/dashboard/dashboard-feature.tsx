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
    "35z2A1qyWxYBa8nFDzM8uYejMbCyuYtdZopW2BRicrS7UfHebjnqrCT4KhkuzNEMST2tCsZ4Ua62W5SoZMURJkwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46p6Z9XwsAPbpieZ7jg7HdTXYPjHcBDxCMecHCSS8GRMFwEPDR1PxyDTDSLrmfZ6Lu6sMR4aS7f7dTkvXb1pCPrU",
  "key1": "2fEfVif3YwLHFTKux5WptE12Cb2CCZftezUCPMw8B3nFsxrLDovhnpUShBcqQc9b9G3wbewYvwbYFS28nNmMv4Jj",
  "key2": "3T8AzSrABVeNVS29ZcJmefXJPCm8oBfsPLhfGTqx992QQgjt8PquRkeEBcF2k7pbP3SYHRNLwZmtQGxUfTY4Fj4V",
  "key3": "47yAGbSXBS2Bqa75RMDVueqaYDToycnahjB6RQbMjvFrxGLFV69e3qCMK4nDD9pQ3kqimjsoiY2cG6HgpVrUJDF7",
  "key4": "5orcEESi25gFvNVTJYJ8c2s5pDxrDEGrumARJtfd4XfRPJRRbPTW91iN5NtWrAR2ijvGR2VVE4Ud8EV8YkVks5xi",
  "key5": "3fwAje7mSD8RNaJKXRKAQTNexYCsN7YoaeruLdpQQePq7nXvEopGp9EoXL4uQPPKWLF1cN6w93iNhXyBtuhLbS4f",
  "key6": "4coy3WagbjGVD7LWJaiK9s7uPUZN5VXrQJzQC7RF6VvabDpJ9qE3DSuXsffyiAKDumKckfdSuFtPGo13wZ5js1Y3",
  "key7": "2JQjdVZyQdNc9hVyz2MMuv69UmHMWnkUw82ZQdBGoiVU1ERRpdrBYqsjNDSAx527cn4DNTsHGJa1XynX5K2BQ5yw",
  "key8": "59Ep2bVkg8JT96ksdL2jKNRoLLWKEzox4Bg4cFLh1LzTAQVDrercUokLeXvrMsUTvvfUqZ2a3ejpJnNaLfPaV2Fd",
  "key9": "jYdw7FdHTETGkjdSnKDSNgb578W1UHocTH1iFzEDoCD3Pn1UuzuJ1Z63uywtJ4vm8PmxuXdSiCC27CqATYJd1AX",
  "key10": "3xwybzoxWAvjm8e7cbPJSxVUiuGTpNxV5aX46odFy1nuVUYsUowHDkcFo3T9yzmZsvsvCtJR7bHLCEGke8BBrqZ9",
  "key11": "63gcM98W76NhouNV4FZ6YacRu9Tt6NHe9Zs3K3Sd7JAGA3kv1kmGHRZpatwzUcRtyUv7wPd8Q5F9apQYx3DwDayL",
  "key12": "2nMevCSrdEv2QNpkYENtBFVuxEqyPTHfxMz15w3gp5igBNP2oLMqrwQZAkjBvdK97exzFtFszkrXajNJG575jtAa",
  "key13": "kaSQqwEKkdvCHf6QPqJ7rYBEkdor2FAyhv451YJPPftYSN9jbcALJZMvamdSFTQ9foXrCfSkZbsirtYD6giFG4H",
  "key14": "4ny4PJP98sTD2j9q7JwVFNVH8BkSNoxCvLEt98s5tL5jqxTsaPS1FX7nASy37VKwc4Fdk9i96AT2hDqix8ofVVXo",
  "key15": "2An2UxNwxReKs6MWAXcXhaYiaDskBbBUKYa3VX1jEpFt7tmKvZWGAaamAWGokfKKgxscCPFPtbHwhECdmjoTwvQL",
  "key16": "4pFwuqpvMmEDthPP1DpKWzXDbDFo6znXQ9iheoKrh6tufX7E2feW3sjoAj3cBAjtiFL3vCwo1qLNbaR1MXksNPYU",
  "key17": "4a4ekvFdEvpFj8vmvQJELsYDeday4eqv2PinkWwY5i2KPq1NwFFKifZrSLVpBW1DFJyujEgo3tmJ3RUVc6zZZeVN",
  "key18": "D4LwF1TQCpLe2fVJumzYpGxijAHk3wfbjUxkjpFU5RAFeGGuw3Z8ZqQfmCajYW5PSbQYBSMqr3W46UoQhUMLjNH",
  "key19": "4hzQktvDm3qVBSZTbBHHXzvcbtY752A6C3S8kdRvMRfA8A5iDErvDtDL8apk94Dw62Q3KLfXvJ6yM7jkrYRVRJUE",
  "key20": "JmxPpbvR8fPhwwTZfkB2c8bhCvvZAeKv7UM1THNnkBLddVskvX4JeP1FYqyvnk9d5QYGHBNs2oP8gi5RLSPfCaT",
  "key21": "37fvkAEzEyvoDZ4TC6UytSktvSsayooWpprt6edxM2Q4Yk6R5ZFLfcw6rDdGNrtv4XnKir3GRh78rek24nqydo7h",
  "key22": "3ZpkTqUMyaKsHbAPGBDGdVWfBV8kf9q2TNuYJouGJbG5TAuhKVT3bPvLrGpyPxHun3TcEYrjzBJzPHPxhejbrkYW",
  "key23": "2GpF8XrMnXyLr688c5oFebnDqBecvUrGU5XBLv8rKkGK9FDh9V5Pya4LAWzL8pfi9ebBDP2KP3MNvx6ApKcdc1Uo",
  "key24": "5Zm4MXRDP6Gp78BtMpYaSmvxmJV8ByLzDPhiyeQkTAH5GbFhuQ5UbpCHmM4TXpjyxGv4Mxo3CwY2EJWmK9JrvPzT",
  "key25": "5VtwgP3nZtPSzvYQ9D71mukU5yJRmAkxPv8nJ3dZN162dkoVPfzQt5nyexTyVYX7JuSfQmPPN616rdzGkguat1tq",
  "key26": "2pLwWGNAUDrJL2QSdkR1qhqrViEJXWrxfavRFSQvvVLHiWD5a4yVdHiVEcDKF3zj8xW2bMGwRUpKsMBBixPwdMWF",
  "key27": "2MpYSts1QGGuvBLhH3xhXzocdShyaHwYgCvhaWLwPY1e1RwGzUyncTh42zzc5E6ioUm166GrNf5rtxZ6x4kUTboE",
  "key28": "4ZBcxfF2zvyCehA4ekxYVFXdWZMSm6jpGsDygbf4jaJmHMv4AwPMeso1Wt9B6A6htgddt3UZL2rv9JiPWD3pBjjd",
  "key29": "3N5ucNCHrptW9oXuYVkCMkisxaXtbraCKe755vg8cMBGSYEz9KbRCDtpUYv2xuX1Pn73suPzWi2TDhsynw98GK5t",
  "key30": "4TdPRUs65oiKXrsAbi6DN1aFoJd3RtwKKMqYCcwCbCnRSULZKvrQkcVJCU5RTbCaNLPnhnHbyozhYME7ZzqbQpr4",
  "key31": "Hu1hnyt9LRFYFyah7iuMaAZYfj1dsC5NsMugBHCxtMRTMtSQ1imgRGgeFTCKcGCfFoW6NXd5DNp4R9bvuNyWKue",
  "key32": "4L2kPPmEtgEtf7Fe9B79tHemRKqoH5h2EGCbn5QxgYoGGsdkSWPzD6SfaKZfR4qgL4wKTE5Cthcv1b2tMR2XHQLy"
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
