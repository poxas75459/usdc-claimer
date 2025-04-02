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
    "to6gfa8WNH8saTErEHWPDxuVj5dngMbmn9kY3sS1mKfXXEhFxULYcoXEAbbUadZLT3pDVgavNTstLaKJt4pby5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPhPTuiZ9xMvJKcwuUzuyj8cS2mykas1kdVxuFbcGUNXXfr6XYsPSGjjkDArLq9iRVyR951dMYn1RBak8UcaCsN",
  "key1": "4Lb1ac5J1ye88N9g5C2dACGPic9KUAhTdUdh5yTkYm6vnVZXPxxoBZvcuu7hVUTtNAboubHHEeP6LSNjUQKN8p7A",
  "key2": "2aSrQ3BzN9jphnrqcgoD3TTyTkh7XL3rYUTKsvmLfNEnshva2RSYM3DiYBBkv9u7tyXY2yXyAivu2NRbWaTScGyv",
  "key3": "57HmPRHD2ew5DSjfg8Q5njpTi9B182yH3X5YEDHTD8srN39EhDu1qGBMsm3wPnXXhC7qubxUkidkusjGYwcBpxNE",
  "key4": "2zqz6GVWvdDR8iVmP9vriaTuGoT8EWUYpsLuwLps6TAtiEAUkHAdtPbwWRoiy4eQxWz2nkUXJjpaQLNsaWiykeFX",
  "key5": "4bs6mb3zEoD8F97eBbamyaJG6pMKY2wGHiKspoYNWMRKXJHaGCVA1dsKAEP4SBp5eSfk74MV86W3FpqKn37HhpwJ",
  "key6": "3MCVieCJWzTMaqshuWgup1tBsZWK6vSQbkKdEDhmNuGbXyFyVV7CN8RdrqNVFGq6MCVLXugQsBbm1xuiKTZ9FjLM",
  "key7": "4aSFZntdms5b2anCoEH6iHBHYh4zaG7GpTtrEM5kEQDacEm2dAqASRHmRwuBkGagdfdt9tuHL9YECDQr3FJfKZmq",
  "key8": "5swD3u7hdeQPKt9ZzehKJPvpzik4NR5cFnfmPYAPnisKV2AZrvHe4ffHT9AHACcbr3jBXQadZ7hirbob8uKVyrFq",
  "key9": "5gp14vpG38DWgtNiFvh9r3dvkFo6pQD88jfNkeqC3XrJBW5pmPW2rHpaWdoHnkvrsbWyKEWepMinBVjGJCifJuFz",
  "key10": "4FVneJXM9ZAiDJAjZVG16xPDHP2iNbnbYcff2rCDW1muo6b556wc26VLu9TEPpafxXVfxy9xPJwwJTHw5txU9QAQ",
  "key11": "8ojCKWEZdDV8cDBgf6PHAY577QsE1nLUUeUSvMTpcRXdQ9HCecfAkYKsJCYD93nMJsV2PYp1XJtto4FtYKJNEs4",
  "key12": "3imeDBaNqz9XUaH7E1sc5k8Kj4Dq9Q8B2q9gyML1vgkhKRgmXM8LjXb3FBUdTVXb59KoRxL6XZMS9bRmPWuvfGwp",
  "key13": "4VHMstUsY5Z2KfTSUGMvGZSiRS1vH3YssAXHzFMusGNfFheAer6YE6ZpUSDmqcWc24T5HRKz8eU6ws2uPjEAJB7x",
  "key14": "5AVbCUgcoMoNkXVip8k8s3MvK8p3iueVou5rJSJyfAmEvXUd96kTs9HGUpELvEHUVA2Rqhp6H5wBWEcoBDfHHSK",
  "key15": "FGJB7uTYndv8dCaAh8TPKfMjswwRR8xZsokU85JznRohLvtE19CGuPSwjDEj1ynGSmcUtvHJdjXyeRaQyAtGgif",
  "key16": "34DvxiKEAqVHGCAXeWAfMnPszHd8ccWTDntxhGrf4xR9g5LkqDpjUA1GkorPvft4HNtuLtnvYLcP8kdS5msMupku",
  "key17": "NQPEhNpYjVPrfeJKmwwztZkcxGM8BeqQd7F5HwUkUezpgqgZZuvbdciWU8rYdVP2GogeZmwvFtzLx7pNHw7gK4v",
  "key18": "4GtoUHU1i8vWVZFCprCPSiSH9SFd9bWNK65wyYvtai7kp62TrQ3NyrdXrzv4dVozw8evcAiJk5ppbDArdBwtDfei",
  "key19": "4YYn7Cau4WxvccjXragkrn6Aiqgoa4P35BMsb8gp8CBxWv7ifZ9qkA556iev5EhhYZz2Uq4HMoHmMWdiaPcPigNn",
  "key20": "5gxinWSw4DQH38ZF9kCk3vWpV6RVWzp8YZqhhVrZgzPFpuRTrrhPV4LHHVvNHHy5tbofzCQh8Kr3j8gyNDrRRjwz",
  "key21": "5cMjJvHxvwjL4n5RLyomzijV14G1msadvoXaG7U4CGRumz6qrWVszYyEBhd8ngPpEXbH2Wot3UeWF7dwus4rJKCd",
  "key22": "2daKtXzAdNzUFniaMdTjKDatNZyXVxzTbJXphzCXekyvF48jyanDFE6KyRXQ3ykX4ud1dhW4VYbsE3YY1XhEXAPj",
  "key23": "6okFbAdf6aUn4VZKiJqp7fyTwvzmfcPnYqPZ5MC28pxNeg6XFxbpzJcLKZwTLLbFjqSuYHrZ1HZANwB4EpAVEyd",
  "key24": "4CdKP3jEc3CsdbuqJ4BhCTB27k42exo4KimerfVWByvR8kdgFPAGKdayonUcmQemc9gfn6E3wZAjSD4dSL9v1Srf",
  "key25": "3qVGPA65uyb8Mt2jX6hVfNCnscAkstR2pQWq3dvkBc4UiHsKN6uTJbgeE36sj95tqT5Pqm534gKvZbaCLw2vZVCZ",
  "key26": "5iEDYanwL1rVfpm7RS8axufhQcwvRP7LXnN9XVpKhK44LmqCwrxt1Bt8G6oeYfcKrLNVFPsHmGqRkPDxDHB1maCd",
  "key27": "2cbzbFSuWW33PtSEAxGxQhwpQRs9VWWMHikk6eeHWzW1CLQsdAtoFrY6fNFyEKwSt1M1dRppxAAeXQxPqCLvdzcP",
  "key28": "26ERdiGAq9Vcv7FLexR22VX3KTCchtBAvLXampvMf4tR1w9pJrNAaji1DDpi84UTdgB8mGmYy6uGRprZpBCo26u9",
  "key29": "giGdEwQTTTyZTr8i1o87LvEPX4RMtsehkpPsBzskgb3KiuyFyScvU65WE9KEtWb2TNxwRhCmCwMVMbKbSTx6seM",
  "key30": "3TmafTwKQRqJPB1uSpKp6iYvvfqUUkMChWcghDiWL8TmEmJ7EDXRpHWmR1nLJXDqAwrpNeD8Z5uvYrJtuzxySMNZ",
  "key31": "3zwubKtg2prqcx5NNjniAPZ6qw3KKqGZGMhfNG82ZRP11x4yH1QqzA5HNyUMah22GShr8bWMqhFCk2DEXRdLvLvp",
  "key32": "A9P4PBei17EjroUPPAt6e7Jy7jqUx3WZbpNjKyFkJNjVo8FqUL5secT8fMEssnFkafKpKun2fTmvQCjNAHAKUqZ",
  "key33": "5bcT4UZA6N65unzrdyyzyVzhgRp2WD9McAwRDZNoF2bN2DEpvwKqxo5hA9kMoekJrTAd3NBmHjmY3kF5as9bMys"
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
