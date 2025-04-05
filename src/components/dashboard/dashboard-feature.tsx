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
    "rnpFN4myNqa56z9KEkZ27d97kShLByxvbRGbDGddkYK5J4Q1H6Dq6boMDLczSoStBiDY6AVmPxR4554qjzgBFn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVs9wyM35Nb2cRTRtXWBxvyDKUEoUonwGZnFJNYq4T9NdVWCRbMDkuXxvSyH7MU2tbn4pYizxBCgYKQQ7EidwKc",
  "key1": "5NtopdyWyjxcqmmtCYDCPatNCkiBGiT6gVgvAvRLGgdPj7HPBtzdwjgCCAfnKP7zeHQux7dAjUPSZiXAhtXWBEVe",
  "key2": "3zAW4Sx4E7QRHEDy4ztVVvnDYjLf55tQnt9VCoToNZw2nfeYqgWcYtPqzGhhuMUr5bf1VpmgmJe3Q46RuGoJzYQr",
  "key3": "vD1H5Zmn1FiWkpQV2AM4ZA2iEtf9kRV33yTsnPcqy3gLrG7hTSxwTJB5Xw7KMEXseFanEbbeFpwA79o3z8UjM7Q",
  "key4": "2ZeMZcQVSoNfc9cqELpF5a4Erq3gReVTYSgnx3Y2nNcvnjxynd1zTyJXSsHKnzkYtsfLcjuvTSwNS7NeypuY82b2",
  "key5": "4MwsuPi2uvjqjPjLq9y1TNG4ANQVYzLawtn3AaT4nixTDSqDpT2y4fDcMHZWt1zL1w1HzDM8PT5RrpSUUJ5JNe9f",
  "key6": "4isAF1hLZaFKfxL1jsXiPJCcT5ey7T8wchaMm63xyJP468SxvRJPDirJdAXTSydYig3cq1ZJurS43gcGRyGH6aZ5",
  "key7": "5r8YYz8se3jZmUMjfPCrWhqn5QUc3yXUfmUCsPtZ1QGwTVJan6vmuRqYs2gCodQy5PJbrLxuSJoWM8EWuw7nAQWe",
  "key8": "4FDRYaRL9THbdGkXjKqGLvjqAd1sAQhcD4ew4Q8yrEmtS6YhzRg3AiyE5djdaGsX6F6K4bg6vPvKm3xgrE8v9fZY",
  "key9": "2nuE9i7pqn7KG27Mxubda2sDM84Z5CtrqsfGyX2oLCKqqevYb7XKwaTiyz9M69vRiyp5NwrzWJCNudZ75PgbNKtS",
  "key10": "rmy4JAiAEvdznzLPx4Qfte52FRWFPayGXoWm8B4Q9zE3TowpLv46UqxKYdeCx5DToGz4myHo7WX1bJsX4gNcMWH",
  "key11": "3tpdq7XSTdTiHYWjU4XUmW5XP9Mfc5vS7mJrHRJFJieQCBDDGZ1AP5PG5ntU8Rhg9hodEVzUV3cfVyJQFo7pGnUQ",
  "key12": "52KXAh8PRhVYpYPvXWemai99LNVd9qVr476DxKSjQoTk1TFyYmMo89EbSJXfMpnZ7Tss4WeZ8QN3GuL8Bsvium8v",
  "key13": "3U9ir4gzEUrcGrVkt9c6CcJrwn1SoqXEKC5Dqmka43w52VF65HzDnSYTN2PzahDwLgzTiUcWvUGDvYvpLZHiis2P",
  "key14": "5sMCESsrVUvJyGteVRCUEpDLKxs3n3FMA7kNcX8D4CrbpjAt5wjD97TiqyzLxh6GbbokWsKkVUmcbSkV5taP5Bco",
  "key15": "2xD34nxuJsgDgCosA2WZVyKHuP3RDYNKNAVH7JrWHi5ifsEKhS1pdFAHMocZcCbZXoAf5oAg6Xu7JBJtVpfjf7Kc",
  "key16": "Nd2eL3zc4oKvbSAXLXao5aLgCT7nATERLSYAzT9yYVRW4EpTEJ7FDYnZ1jZHuZnXUtxfrjoDuiJG2CwXEJ1V5KY",
  "key17": "3JE9oPe3dbHQ2JLQFWNwS58c1t5GXj1hdGkGbj5WFPrhRHC5BfiEvLNtPK5JY2naFvwQNvNB313r972uTHRMG4R4",
  "key18": "jx7ShxX8FZzdy1ffkxUi94iDsfo88dS5cDasKhgfjP85y5UsrLVx829mKyDkGcmwwVcThFX2SiHo3fDkr8AsQsq",
  "key19": "BAqtasuMvnNSqfsXDmZrPbeBscVkv4HigwUZUHmv2wtvp11p186ADkD2LTGtWPCg6Cmo7RVdKViaA23dsqmfGdC",
  "key20": "22N4qo9SogyrFDx9XWZMGrupKtCo58CPZ36Mzp3CgWpecLyZVm7Q1nMLD6jjZFVEuogKvFzUYGtRYseExLx6LPSZ",
  "key21": "qXXYMScxFz6KMum5bVkRBS6vNyW7LaTmYmcHNkRXK2oE1Fkgf1ABn4dJxrNURPUMUzvcTbxxiBamUeNPMw8zmi5",
  "key22": "2Zq1x8EH4k345gVo7CnyT2gaVPS6X3TkzKqAmDLwqGHBpu9rUSMnZShfpuU9aZbqeagsapmSMz43ch5wXVDKvu3P",
  "key23": "3EKCcwEgpESUxdA3bRQ4cqZfnABJfacNGuzWum98Q2vaupPVgEfHxwq53nCzLmc5BTpfdeznkoCzE3K3vcqKWgDu",
  "key24": "5PQWNfQxRp3ksW1G23nrM7mLxRt9v7sSwwaWVbkFEhDw4aexRkL83gPoEJvyZEHLooh4sGEbhBekFV5sSnhC4SHm",
  "key25": "59jsY6Ax4s4po3oPVAJWNPYtQWCBToiytUewfHDj7zJwNoXpSTBkjRfTpSYHaBfGcKqQNKA745DnKBmxhZovCnYK",
  "key26": "3S84HhJcTfCJBAQknB9kLhz7i22QM2xhBqWJNPFL4sRUYs2wix3LvppgnkupJAsDfvBhybcTMfQCq9Dai1DRbXyh",
  "key27": "5u2hqGB2ABF4SccFkPWnJh1VfeFf8NtEodaHFBojeSpKHECJu3Shv5oUYfUrHkUbNeoGhwLQgbdZ5ibVh1Jz4g7A",
  "key28": "3BNsAu5jW6wFgdXm2e9qu2oqpe7ZnfUNa85PdeNhbPrNrYYhTaDaEoFWef2yXaXZDnAthyvDj6E87xQWr9EQHg3J",
  "key29": "5Lf7td49ecVNPXSx1dFzYR9Ycxk2J6X7btGRhmfFMixMXLvTk5EMqLNU3YkbK6XtrgwMjfBjFogjwtWhZqMZmkx1",
  "key30": "4iWPGJRR3THYj3uQoMG62FAeq1n1kmzoDTGu56o4F4CxLVgSpPaVjDSAVwgWRAMATnJj7UngkNEotHwLCXw8W7C6",
  "key31": "5Pz2r8rYwHXQLUTSu1rbghzVzvvbEmHEPpLtXt1yDbR3pSt22ZNA6RPumfycGgketDiPv38duUpAko23fpUZTQN2",
  "key32": "4Fkj7R1KamdV6ddxuhieawvZs5iviHJJzakDNs5BHuZgie45aiafx1pJoAw6vRHNPYD2GmvEvBBpwVtNricbeW9",
  "key33": "2JX2Cj6MafX8M4CTJzxsBLhBNRivckRwAEpW2ujSJKKfYyeRmcA3oCDL2MaLrunE3esPbqsuk9ndCCRFAbmFaRVr",
  "key34": "3LLf9TqXWARFvqcLUUdHo9FuqUopD9bPa356NZtgiuDEHnpAQ5jRXa9EM6hEWwfBh8g6ztBd7cXxnSEuQfaJ3U7G"
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
