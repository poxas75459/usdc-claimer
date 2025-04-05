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
    "4kq6nfzFyHfU92kmdHT6Yxki7kumWwV3wwzubyS9cq1KRaskruLxWRDPWL4gTU4Jjr3JmNi4mvsbRWexx4F7LxpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wq8QJSasVYf8raw4YDxT28FpoHxhk5QWvq13Gbsm5mEpmeoAdsW8DP3dWJBPeTZg7pC6vdGstz9hRDV7FNPNVq3",
  "key1": "9fPKZEDitcSmBR4GCofvjKxXMPuZLvYNbjLbUwhqPxGd7z9ojGASq1UbUQQmfzNHQA8qrq9gTSpn2Ca4Fb5JDyy",
  "key2": "2Wm5pHU7iE4xk56TqPyd5Hb36tuLzX5aD3cbMesR6gU7h83V9G8A9u8vVcEMFdGtpP2PvKDgzBMZkbf93oxmuwEi",
  "key3": "3nVmhb4ZVjJYtksXALNtz8GM37sDgYofAbCDKVwa59yTErCswtGsUUEDHvs1enEBdsok8VpAXufY9tfmrMJDGJnq",
  "key4": "3E8zt3gMvRMSHJqbaY9fiD57oG38ayPfHdX6REmZGoRZa3eZBYmSr3pZzYLKpcD827HXEtXabkCVNYxwSoysD145",
  "key5": "3J1P8ShUBHk2EHoxpXjNwcAFRJVPbFCY4yzF1ydHbnbHJx1MDnTAjpPohppkM1DfMWp7xHRhS21nXSVNjruDAvgM",
  "key6": "5DLWNEzavn8bscgXNSuNuymPscANHy83MT2PVxCUtBfnY2nV5ayRQgQdFzKcvujEd3s7AyQ6KXnsLR4wUTVNrW8H",
  "key7": "5u3M6cbViJ4c4wsrHz4GJRT53xnQBV2Ld58vdTHb6JTY2bojS8cC5NQDqMUzv57d91bPy7yvfU2JJf5McK1swv2D",
  "key8": "3wokeLbeq6vxVPsQxsRZG38gx3hCfKStUwf3EEj2KKyNhLdJvgDN5iEELmUrAU79jQQZogXD3P7GVVvPV1dWPpog",
  "key9": "28zPgJdjzdtSM8ePD49r5tt2NQuUFj7stn4rb27Vh6t67qQDWx3wyyNpZGhFV8AD3DR5wttXm1N4hmEBECQ96CUD",
  "key10": "4ktamHAmXSvqFdyHffHXcQ3FxDaaqUiy45MAkezogmpnvZZUeYyBBvy2tzAXB5YbR38JR8urh2tNNdS5vzDQToPe",
  "key11": "2Cfz7LgAPvtFx8FAs2HZUhDfcqjutq6dSyEWJHgtt269CaqsC7GyWHvkAmLY5nVAKFAHt1hAdCaa6MgX5gvqyfPu",
  "key12": "3J3qGdTbYFedc1RgPnBqeeyRf223ZBH6xajcarHceTqBjTaS8jGVqwAwaFmqcrJ1Gz831kxe16wk27Zpqidpm5dj",
  "key13": "5sKfERUEWStFoLxXSGsWczaiihWkEYSZtmGsMRvYkfA1PZusdBuyiKZkU4dLcyib24PNGcJofwJb2y8bUMHcheL8",
  "key14": "2c7JsUnZaVvihQhsXjQmrq83HqVVDFzJRTUkjuj6tjzGFUTj6QYPJaUKLUvxkTr1n8q9yJCT87ckZthfCQznfNoB",
  "key15": "3nzb4gvaeTxVwbyEzxHhAram81HguM1qsvzfCRLZqiiMyUdYghVkiBP9xRfpwG9uW13FHvGfUcbtfToeb4ftjQjt",
  "key16": "3nAgumqsqEMURYSt84ZySCzJMrcb8Qf6B8vcoGFTpowTY1UVqGUGCKVkidu9oTNX7fswRA8pJZvbzG1s7JN6VWKu",
  "key17": "5WSYnDYkmWtTyEsgHF9oL9zqkn3synBmuYrvffJVnGWHXeYWRdph9P37zHVHGEfMWvMedSAt9jQz1FBpXvEoGBGG",
  "key18": "2pjbbC494mpubecKbM87VD73F32vJrx9Sc2GeGZbyUW8z3vxbgNAGJ5BfXTcoT11KRqCbJBMQ41jNYrk1vtFDQpU",
  "key19": "2pcSos98Q2v4aijVMUcV11UGqmg4BGFEtMSwBrY3bDyofdtKnyfFbMeTqF46hzUJtTthNpz3jXmKmG5jSE4AjKWC",
  "key20": "4KyC5UAjGRDjoZgoaeueFHURRoYracBTRNnq18tYrwDZKNWutJf7vEMWsDLpzw9FCTYXQ4bBA8pmvWGEQnS5Udgm",
  "key21": "23qnWZdJQSkzo564xt29SjYCiJKP6aDMHuoWWGu71FdLVBMGCUTR9KdGqaTjyAa6dAvM6nDQq22CM5e2uF3AgJ4H",
  "key22": "2L79tM8NomyDpPpBqpGvmSvTZy5VuUdwufW8JGZ9UkPFkQgZq85DdZAdFNubVdg2CuFwobD1Fe5b4E9so2uAcvym",
  "key23": "iXekReEB9HAfeuRyxtAGp7ybvXh4NCKyPruoDSeRg5g5eryDrD1W4is4DqR99Ln4WSEWV1q2mpn53EqFLShrGdH",
  "key24": "3VtZQsRSuSm5Sz8B84swtodPks81EW1LPM3SDiH4BkDvxjoosiWtMsXw25iVEQ4r5NXL8qWgN1P56eYNg7nfgiZX",
  "key25": "5VDk1p5QAoTuFu2PeN1FVF1a1E6CMqrKPXv9EZMxmSEsCtoL8Y8jHh5zPvnRsu5cVQaqd5sJasEwFU2tbJwyxMra",
  "key26": "2Zop3opFP19TSbyRXmEjZh52opZLGY2neKAEEsr86QZP1gED6935WJBhsb7jeKFFmVCaWH8qHkUi4bcjwMYbJfzG",
  "key27": "uH67Kn2xSfcQodKKpVRphe3y538EfZW55yUhycoQM9w7wjqA2wbnt3JaaXbx3ZFrBfjM2ZzDJFYFUTb4CxZXpi3",
  "key28": "ZGU9kudpgYYS3m8aDtYmq8HB1anofDVag9iQqWcWyiA1hfo7KSTQZDfvtV1TatFearvPiwCeBFwMvbGLoEyRCGT",
  "key29": "HN5g2ph7mDFG3DzTVvQZ1HPM8wP1MfbnWjBt744KyueRHG11erhBCDmw6QwXSGfzTFxHLLCbb3np8CMLS7CskNE",
  "key30": "1bjtXQ2HYj7vsN2Scd845HqsWgZdatFWFeoNpUaHHLbMKgRvg3k3r4hREBUoTjHjrJwyQAHLqCiLRMLrCT9FksH",
  "key31": "2w9fYoGhdx99MTr7MzGb3Q4kNipX57qzZDWfQVdqJANfQ1a1gz5zmZgjozTBq5WCa4xJzB3kttUZTyPvmn7njBzp",
  "key32": "3U81Wrusm2g8Gy9WpZ9rZbAo5X5JM1J7qzTfMzfD7Jyy5kP9d2KyTUR3SzxzDvfoq4LvMNRwZUEJJwxbZMXvN3Ez",
  "key33": "5bw6D64zAe3zyuSW4H786bhshpCPFBMbXcyA5afB9SoqtuFAjLyFDK3fYAgGjDxtKqWB8YVi4gtSZnDmKLL5xXyq",
  "key34": "4vHfpPg5VbDixevPTpyqmLjY4fD5gipD7q9PdvqmfeufpTLY9atCiEbksHJcoT2yMz1zA2seVXkQzhRKk7DVmks9",
  "key35": "5ww7MUbzNnZX1iemjoUBdvoCryrgF3n9e2csKDs5KCjcFfR9YPwMWqdpB4mPfepTKho4j34tYUZPxh2zca4hBcdf"
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
