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
    "2Hapz4tZaJXFJQdK7eme6rTrzcMF3upMc2B6kYqKC7N1ntV8m1Dgzo5ToJVhGSP58za9CGHRX9V4brBVRvkjQ9wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KgPJTGpSiAdv6fjD8k5yvxays8WEV3xgU4HENHFoVoQxGsFxDUTp6fxkCQkYDv9CfPkd2dcs4QShYwYdMTADdGM",
  "key1": "2EHo11ozNc3htrA8XQ25qF95uT1B4vhPaGBWNYd1g5k6KENV57C2ojTByKqnciWMQX42qJhYfRNT6wUK3JbRnVyE",
  "key2": "f9BUPtoKE8bu9Yv2KLRKZRSS42DVJAyTkuwM7UpbCcMq1k81orqTp4fPU2kHs6CYPojPMKarV4EpVrhTj68HF98",
  "key3": "HS8xhEARJCEQMR7J9TA7HNYv5StCW25S23sQDiWUWYHCHwiuFGDbJbC361bjXsABLSX72LVLqFB3VL56QE2Le8U",
  "key4": "2oYGuSrvZ2evTpQwPNEf4hMjm8zb54MDeJXNdhLKvZZeAnvigdJZScTHPQuH6vvYk5rpexfyfSwHestgYhxKyPGC",
  "key5": "3FprryAPVETQAaQcwG7argzorXzYnxiarqWmATHrVZY1Fz5A42xr1ScJeXUiSKhn1WYXsYqGYvMb3Ndkx7P1yFpo",
  "key6": "4CRACA7nP39dLkWq5NevHoN3PA8mvUTotQTt9wszjkiwEkyKEnyiieKNYpDvPaKEwq9nqErFyYVGWAKsVCs4RvTY",
  "key7": "2EpP1qqU64x7ytcd4WAmfgZBvKVKebdbAW6vtHkxDNqu4TKcb6zjTsFnQmoaqoqU9AVrW781Cr9uzu4EfAaM8KtJ",
  "key8": "4jCTegUtQtTzzpGGR7c95Mbe5xN3U3wFAr25wMhXikEJN57U2GhZWvDxnVf6vUp9PfapMTSF1Ub7Z5Rgis6HGnkh",
  "key9": "3oH5bFabMHmRtEbFUKAJysmnfvCEGUW83ef63GFT3YSB9tTBaMcdqgtFLcb6pwzK9Du2mTeaC3b37eeRSYbURDnf",
  "key10": "5YcLuSsp9fuabHtYhukXzcVod7TdsSjsaEX4wo55GNjG2Ep8jb4NzspDQPcem9RW52TD2VfH77vqJxPtefj4VvbW",
  "key11": "31gfWBKNdx6sE6EVeN7uX89g9k9MubsVc4Qq2e9csqoHE8wydck96M2HqesoJfzFMVsj8FnSd5a6fi42PRTpH52C",
  "key12": "2CFg6CZQKX6s4Hxt9DLvgFbmVY4nq4PdcrLNfPaknDyoLMqgEAEYywBiZBzghRniKnPJBRPNkegoz43uvty8XVZv",
  "key13": "4mBxp9ZbfwUpJ5Y4AurX8btKeyQfwG1jkiLQ3h15bz9Rx9Hb9k5jKMbu6QioEJi3D66iY6XutwVAK2FhJgsq2ocP",
  "key14": "5R9gzF8QVZmRMnHP933FbB7qxLCFQNgHTUwBN8nUGV9THQoVazF6Qpnx3K4467835QhNM5iUqbyAGfxKVYukzs6",
  "key15": "4qyRqkH9TUMHxn9tBmTmuHCBCUuQZdjK67vHdKQ34pi2dkD9Hv9UV2i4biPNhdPX14nHSRikAgKZukansQaKWeLD",
  "key16": "baZ4MPRs3ngXvF7pxfw79FvUmrT3rDJ2smye7X3o4g14RHgh28ikXeteVc88nfxCcrFYDkJGWJE4j6i1jXMSADh",
  "key17": "34Hkdeh6xhPoAUaynjyVj9xZ93sejUZLpnMsGi6sXw7CVDyY2nuX2WD47nGjnEmC1WJQQBJUqsi6fXDUfsfDQxWa",
  "key18": "2632HsYLpXPKYw7cW3iqYwTvgNDKLSpKjjASQ1a1GXsnPk5SC3L8hkCyba1NuwqvAZvy1DifKApAi5NUNtjGcPNJ",
  "key19": "4KFWanpe2tQRcaKCDKtESG7LDzzpxGzuA3EKHQjNx9851hJ18UegwjqtTGcFxsecbHajzbSx6eq3uBRSCKEmdCy9",
  "key20": "23SyYyJupzHoHC1pZyBUdSpmYsPiznDCrFKNR8MXkTsavpKKv95rpp8Nv3QjrYBkFFNiL1VnSUoMup78Zbc8gYHT",
  "key21": "21QKDeWXJindEHiKJq8fy7BbnC4ccVWhqp5nuMdksR97jj6zotQHK62BrRQKFXXdhFpbez1f3RXiQoz1t4BrCvR8",
  "key22": "4vhbizRxnWbEgdftJ6ZzojmqV1XjuAhfbCh6Vmk4ZTNiZrypeEanCfwVk5QG7iL5UbZKcFRAZpRpm8JHnHwzvwdn",
  "key23": "4gnj1nPEE33B6er6442vmmYoDCAU2qdSB6hQqGuwdH3NLJuGxrEAbFBQ3nMJC7CYJ6YWC34qYJzXi425Ej6Kc67s",
  "key24": "Nz1CgDuqH2mmXPqZKPyGf1JcbFBi1DxZDogA22EMAgRzmbnNUhJPNY9S47KikeaVBZc6g1P31btwqNQxQEZQ7bS",
  "key25": "4etWb6hNKPU7yuo7JPRpUYFNuy7unzjdA33rRM2DV1rDmDJSzoR7sLRtCpycfw6qbYfFGhr1iyFVgdiwHGJvqfbF",
  "key26": "2Ri6govKiKE8nqmVyFwL3PZwoDnrDSxe2dcjLfbYECLjMmzATuRYeUx8TEYuBMKgc4spkEnFz9qhojXtiN31Df76",
  "key27": "3er1KGdAVoWqmQj2gTLFYbePp31vn4xgqQLgqoBX7uaCT8SFcm62qDwongUrrG5bHxdX2uyJ2DVy5xNfkSy9raTx",
  "key28": "4mFi9LwrMoCKCRuXsKAQ7pXLR45sageJvkrhUNQ39qjXfQ45VEUhUygKaLRcE1gcpkmd9k7hahSdRuCK2YadF5oj",
  "key29": "5JpR6gwHm3ikSxH5oxbgpJNFQsbTyZCVGpePVNnz2HKiRhv1Tym4aH7HzX4WMdoSvTLRJZJ4PKEkEaEQwnd71XQC"
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
