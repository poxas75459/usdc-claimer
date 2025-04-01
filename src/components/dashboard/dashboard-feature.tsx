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
    "3uV9Th9dRDwD1MENxzu4ee7mheDRFXFfNeTitLGKSVXuYrmt8KJ6xsdRcHQK85uxYLWDa21YXe2vJpW8sTBiZBBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NUHK2K1XUffJygxw9zoQMoh7HH8xQbzL3CV9wgSPP6L5cDsYfNPCsXEg2KfhV4GjMFKQGVUc9RfCfD6GpMJe9Da",
  "key1": "4ugCdDapmUquE7vvWJyUhVbK7QAaXUVSyTYy46fWa1Sq4pjwH11p7PtxHM1yw1o1NTJtpjxb1HZLmThET32dRmNi",
  "key2": "5xhKKNynJMzcBD1aJ6MbvvgvRFTaAqW9UUS1D8mX8S6GykaWeK9oKH8R61HKSc7QrPjwuT2xX8bseZsYoe9132PR",
  "key3": "5gogBgXsU38FRG7eADuFPUcfzkzwMP7ucXzJSuxAZNuk7btJoj5eajNnRCQsFBWCKFZLFmfxhtSyhXGQxtjHw1a4",
  "key4": "qrSTqxX7scRFvALmznFzvzcB21PJU2o1MyJMeD5Q2T5JL4WukjCMTcBmr4vqMHGz794YJU6vb24oDi8WDeSSYxV",
  "key5": "5EkRHUPXnUkMJHp9MWuuZuV6huPVxmTKseeEWbh6wkmBqDTxWYh4DckPPYLARgkWCpMZHSrKmm7Gy8Qac9qXnSuU",
  "key6": "3fwSCiAwPKf9isuiGkEc3mhLZd968V6HXMHpBFFnmx8gHuRweknoRG1qWdzoMUs9LEMXhhiZFvhhzNoNXSg99FB5",
  "key7": "2taKs8fkNg3gNcmh322kUzkiwj5uRRMxB7BiVvfqsuNcpeKBiysjyDWCeN8ncXkftiuHtgEGbYD9AUGkysuMFtrG",
  "key8": "3orNBVdCSobyxKAcrZ6tZA7K48KMLoG7RXmRAgRbpREVswhMJN2Mh9DNfWXAuH2gTj7TwEaVZ31YguLQ9okT8dLe",
  "key9": "zNkHZFed1DBJs6Ck3VTvtUJHjaaxKUgeU4hitQqRRkLfbNvDWeM5sJZTasos9cL9Vdq5n14ft6vdbzpdf9tYJiR",
  "key10": "536HbjVo3yurJVXhoMZmDk8pZP91Q7FA1vUszm46V8Qeg4kK864Cq2svyrC9v9yJKDmS5zY5R1hCfA846U5yEhoW",
  "key11": "2ydpMXKEFyipJJtmKDqGWoVhiQDH9my8L3i72mLw2pJe9GBMnkLZV4d9kt4kcqi1NNLq7aHU5cfQxCj4ywNU6fXh",
  "key12": "2GDYgwVSp4Twf2Y9pv492Kva6RMKyMe38N78iuVKwhfqzhruRas8X6cqgeWVWdFVQDjd8r1pNxn9bMhVg1szm9RF",
  "key13": "4wksaj9rFoRZiVbCCbUiUUg7oPxv2b3EvNAFkdv1g79YPBwtbsbDRagowrirSQLoTnY3WQifacRtuqihuZ8Z49Qs",
  "key14": "2RCjNZLiDPgcueHiDoWvhmh3uxc5VJNXhhR1pk2iKtVbU2ui7ou61hbhvLDeDMm9B8sXmgxJA4xFf7pkcTFG5tYT",
  "key15": "4ysQXJZATZ2CiRGeeS6ZLkPxv3pB9fhstKTiiU2fVtB2xX5Zd2ThM32zWyvbAWb78UHkLGQ9Av9uYPun5sUMTHVX",
  "key16": "3nAAg6mjd91NmCbHeVaApAB9HbbYrecRCppb5vynTuwLPMvz2M4KBpPZ57Ec8cJBpgEBnpRevquqoo2Z3kXXFnh3",
  "key17": "2aKhoFbepb2ujDuWudjAfkkNsWh2u6tAPxdWJXhPUS1VLuKGMeSCtukisKFeuH7rvq245jo1zocpBEbThvWv471N",
  "key18": "YKHpJfj5egNrVMD8WXZVX8rQWjQA649KGE7a3JUY517PPj1eZKPg3uJGqY9BcUD8RTq6pqra8rPBBBFpgDYwKmw",
  "key19": "3Q57RjK9TZZEhuuRS5zdK3EPagqW93VH9FcYaTN8JVL75Qz74j6F2yx9nmogFyJdKowULRAd3L6Qd72QQ4V5NC6S",
  "key20": "5n9UQ5EwedStjWej8VMkJCUcA3kMZuysNy4rAyfSMrzp681RJiTEWL3LxvqVyhb1mMJ4hWdxWDvssZnTdHmeha3j",
  "key21": "4kuFnpHis4ZTcN5R81ShPNXRuUsR8NrEtSwaHgD1DQwjHZDUg7XZLAdzxLih2DHcK4vqQcyNhosvtDHQoB3SNXMr",
  "key22": "4puZ9B3UBTU5g4p847HzTCeZHNeK4fXPJg29YrTu3r3J743Q97Z7jxENEqRsm4tLJVQszEG9gv6PRxXueCbGyBvP",
  "key23": "4yKdLjYGdUDjw4eko1kguVw3kfCVUnMNGoeu7eHtfNP5pPANd5HveVkrFMm1otGK8R7yCAYotktkZ2XRjzMrU4ts",
  "key24": "4BuXqkKko8RbMvs7hxwZhJtmoBk6msupc4beEUozQ2maqQgQ4ep85mvQutdCwS1rLXCWA2sF1AYCv86oa2BCEPGf",
  "key25": "vzhm93rfcbjGitriXbNCWsWTha7JJwdj8wwayYnpdkB36WF59GAuhUDvov422NvMak5iNN95yVyfA8VWc9b1nYY",
  "key26": "2ZoF7TQMHDo1eyHaWp4hFHjaqGExmbfEydbMbPZftoZ25Y4BiSTycM5Y22NEGdQNGJATH5XxRv6P6vPZy4SQPHkT"
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
