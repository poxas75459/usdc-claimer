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
    "4FF4BJP1YJqAzpcbLE1A2U8zg9ZteMDEsLYXBik2Hwh2px8WEmCT6b8q7byWbVnghEp3cdg5pLLBpYhBvRx28ePY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQgF3PAMeXxBuFLr9AHk8H5czi3qHmJ4FP4SNnQP95d1XQFqfDpi3FEHxwGyujZWyEKXfuXzw1zDKQg7gSgTptU",
  "key1": "2avoGfDgjDfUfPEbEKPajHesVFCF1KwtJSW7vNKoAPxvHKi8Yi9U5qBhkWBTkG4AJ7vav39FeW9s3gZY4xpxbfGR",
  "key2": "tBWPGkZBTY28ehxqbhhJoRQs6kVVdRri6QTQfg2mTidXV9vLuxSZLuPpyCZPm55JuVkoFaVirYNopXs7AZVqew5",
  "key3": "276rMiQqMrQRvq1evLnPQFgBu6Bug2mNbUdFnWKMXVFFbSMk5GBYJXzNy4tNmjqkZeYWWebMDi8WYZ3eNQHrVGBu",
  "key4": "3zVQxdfjuGuEoEuFx67kh1ir6F5PaYVPcEDys3T1DJfFB2gmqktw8cBi8YR2HePvqgcbvhTMCU7SyDWGnoSBwEbP",
  "key5": "2WYQoqvZgjK55LEZPiJWQHQ4daqbwaLD3FoAQRUzL7kxzvWDvaJjodeGKkHZHXq3J8xR7VbNWE72MG9Jfuu98UV4",
  "key6": "2yYSFT3bS44Qvyz6W1DhP2Lv5YYRnQJSZQSfrFjHigxmUi8CwuQogiQnHGSHFk16XxuGcSJuzCBaNHsHyKv2Ff1A",
  "key7": "8t6M8Q8QL11XxWEjUZNoJ4nbKJoQfwvdBPvGdBkxMGzVyxit5mLg79R5ANGFk4BT9gwEYzLFZwQNq9m2vqA5PSV",
  "key8": "4QQ8czsBZ51Ys1Fqog1eVDzDecNrjzVRTqy8ktfEPK16M8v2V6xtAPV6DSnH9CjD9qusg6jvT44QMCZP3PUTVQv1",
  "key9": "4jYCoPEbjddEsmziWV28CdkfhdKSVtJmRXRrEDb6naiLBHawkGJ8tS24NGiJ85HDewP5BuukGvptkYZRVd1maLeU",
  "key10": "4K2Yvu2DBywYHNhAhRxfmHtAh8pMxYvAwufMPHPV1FDjQyZc6oZLM8DdJbimJqR7Rogy2nbRcdSzcYUpz6YSKW7q",
  "key11": "7it4nzuQe5RYX67PtUkeA2P4KBiUcqMvYp1p5NNQT4RvTF83fAa1Dp9fn1RPR7fjuoQ6E5E8at7oWnLPcGFnMd7",
  "key12": "41kGPgVinyfiNwfci9GV4iiDskTcSTs2ogcDg5tASsQqtxWSm7H47Ffax5ms3PWNRLvR4jiBW5HEQWRVGbyxtcSA",
  "key13": "33NUAqwHFwXsuNoC2oHceSTV3dbXCsawTFDxKGHakRqACp6dMCpgHjQUKWAkrLtMtHUwo3FoQeNQZDhyjSwyaD6Q",
  "key14": "4NsHZ1CAwjCvChMdrKhywQ3DSKqNpg4JUq321jqeUBihHatbgFXyZxDtitYpSRGbV1QRcztAxxTLukmbTsVnnrxZ",
  "key15": "5yqDym1iRhVXKshaDaiAt6adHbrMrzUrEcpoYSFPiTbv1JoPdtwoA5tftuYyAGS4r9Ru1n23i7yyem9LzJnWB3dH",
  "key16": "2FVwnkujgmAKx6qmHpitPcFMoPpe3FEzTd97mm2btSVGf2znd5YupdcgXxocMNSUGG8AarUi41CjDHGtiJvyen4",
  "key17": "FpWGooJvMv87WvYieoSmGdMoS3ebBtEwyzDj1Sobm7zjwVvCD3XogfhkX8mQFcCN7j6ZFTuXkkDS6EWTPge7zxc",
  "key18": "232P4265Y8tsftPSnA3CcuCow4hH1w1JQos3uzS2YY79KpLSRJWVSPAUmbzYYxAT31SZyhwvVDpXoHmFXkA5Ps7P",
  "key19": "4FCTYhDX2cYVoAWdqbnaD5Dsg4fD9UyQ42JCTwvdYKbaXQD6oEfPV3EMy8yfACm4hsgnmG1A7pDujY6KDJ3e5W6U",
  "key20": "5SK8FaM4A71BoUgMwDMnozYzmVbPaS5nQxKDxBk7JQ57ruGk1tFhtC37W2SWXi5GV5H6s9qoDRQu6yzP36DmaXhV",
  "key21": "4SSidVk6mrbZVDfof8KPyvjTPSYfsjLEy4VWiezGZy6knHRRoMGcR5QbfdRZpxBeTk1c4R6h8bTd6ksAWRXxmVCf",
  "key22": "4B87jtTXfnayEneCQFYGK9eHj1L9zz7xpQvv5niuUA5s57ygiMeUa5xGYeDkXVrdUbPwahRLjdCeSTHCAzGZfNdz",
  "key23": "5fW7DS6NiwvUSK832AUj27Y1rCfaMc6yh8jfqnqompA5xAtx6xVt7tZBAmi1mpqEWs4QiZXpqP2uP5w1HrNHSqin",
  "key24": "5PGS7ofCfbq8uLqmFf7E34wHitrbVi8R485CL6V2h6EzbKATcvWp2BR5weEBuMoxJeyXqyt2GLf1YibuCXw3o6Za",
  "key25": "4iFefB8oRjirsTdTSRuyMtfR4SyteZWt7J1bAYNVtSEze2NFG3LTawdw7ogLhMoa1C1TR84Y3Q1vxdAXeex9B6Gd",
  "key26": "5YjY8FPN8eQofY8rCBPXzxnynULHEDcQJMGaFb1VckFM9Dwuk9sNJJQpV8HDeG6NpyBUzN4BN1GXjecHZkR9LGM2",
  "key27": "5jmV4FhqgGCsEqCN6hFZryn7TRwrm3YW5KvTuEewiDUx5Cd33jH6pCtD4DRSHVWqGeiv6f3YfT75w9AHnRgVUD6t",
  "key28": "3nqv3hXXoghU2tbncmFbbaFWiCpJbWtyFHmx2qeF3xbhtj6XYGtkgPPixLLEXQ9RmnMBMtZbgwbP3p8W3VfT1wgK",
  "key29": "3mWgg9PHAe9EPpKWWNCnsPqqDoKEWJe7RkV8q8wwnv8u89xtvE6f6aazuLDyhRdYLcB4aFa3mSjUVKgiarzgCEwr",
  "key30": "ganGUHuqnpi6RNHUzx5umLFUBiadedYxoC9ddpKVGgNULyZXScjeer4HxrBBenwtJjdSLZNyGtXE827DHmw9YGF",
  "key31": "2YgeXecygaaFweJxoBGYa2SFzeCRSTHmTMFfUT183LsmMSQH4qvyCpJgmGJkNgGhAr1mu4cZVWqXehxfmQJ26s7z",
  "key32": "46vh4Piixmx2Gi8WtHvLG6Mv8AKegmfhCeodmPGGLhwBzftdpNxxMyicKCwj8vpTzbaa3CtHHpUYwHGg8sHdA2y"
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
