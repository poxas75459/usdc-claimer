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
    "5GzL5HCTNkEJKJpHDd5fxKV68211Pkq11WjJWLVLLfu5VTkKwuoMaed9btj97ioEVNfUXvtPpENgBC8yHpqxKFwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R6DWPzMRirZ9hhdtEQx7Jh85p6NLQwS5a5zt65gYGYBkgPY6YPbVV3ChXCPTwiHsGRuH61dSGR2knyubYikRAnQ",
  "key1": "4DyiExsjy1KAMeWhxraAiRxyc6MKP9bpHVUhGW4Rj4NECUUy1Qu5n6PFZVueQu6HponegGqYffHswrhmDgzR7cwc",
  "key2": "5NA5mWy13cXPNpLZ4Hj64RW1QHxv7vVZ2fmZ2cFX31SMRQDG17j6P2WEyxuAgAsxdhTqYaMzcwCbkrfxWN58Jn5R",
  "key3": "eShAMoqiXf7zN5567q8sA4kuCqbFZLD2CZC6DGUV3oD9bjKo1j7q2jNvVc113bk9Wq779ieyRiMxBxaWn3fPfYf",
  "key4": "rsoY6QXs1PmvwBL5sBBwxLeTYTPYjePhUrueFdH6Xdsor7BvdPoyDQLmv6CyqFJtHGSTt2ASxNmaZLgmwAqD37Y",
  "key5": "5E7wke7qNvNDsmNs6kJEQJcpun7Cp2mspfEvc1viphxhxXxjaRgtAR61tHxiMGxNHybcWPVdb1P4jPq2srwkuiPf",
  "key6": "2FcXhvXmj6w8YqEKAQbF33nvCPv4JHaSvDkpbwJ9VdcxMnwb83RddehVWckrN4hEBSjV8Khj91UK7zFEp9Ab3UQx",
  "key7": "3bYrcHrk37Jmvfz2YraQL8GJ5Mav2hmSTVHH1mtFuazw2wFr31xpUrhe2V45ztQuPzkXEyWjw9eR3NjcWMWUSGXf",
  "key8": "6cHP2A9Q1XvQWqRWKdmF21mBN1QVrCuRzbUxhtRD5bm1qjhzar43TmCtWVNXoiE6LSf9QPoQWLqMLEJSH9S81Tk",
  "key9": "vAoQiuPZUJ17a6wzZxzaVeyAaL2Jf5Mm6g95z884LZnGx8mTjJLnRBJrBw9CckD9Pa6wMWzS7QzyBVMHie2232K",
  "key10": "4mczuAjng7nYGCSLhDt2pqtTzGqgfFZG2DMBwLPyEwbqagup39oMnhGNgj4qUkgHZU79omqUMmGjtpfhGUX9LodA",
  "key11": "UNM5Q8ez7UL7swYXmyqMU1LJgGzWYMARdB2sGXJWYupWjhqEZxhvad6QWANvD1EfuKmvxk5uhrnStc6Mvo4KAkM",
  "key12": "47gnX2zyAKivWpthp4yhBTwVeNJzRhcxBsjgJkbzCmB7i7tG4KS5Fqp5NigKdG6Hs76onBt6FRuUSKKhErTjmCPB",
  "key13": "4uV9qJGyJitHqmJHQzAcUbDcd2r5E9B9dQ1imJEweD4Joxfxz9sfUxuPXv8qr5mKSqGw4xJhGnxjJqXD5B8TSec7",
  "key14": "C1i1Dvkqq3jtoraXsLeGfA5ELAX46Cba2habeV69VWPvokNTYQbGpn2De6ifaDj8GTjo9Cbt3fVNYncRpVtvbHv",
  "key15": "BCWFm1KWZ98eszK3yvhH6jBYA8BVsRMThkigrBB3ByR3k1ePvucFBWauJo98NrsP8o2yRQoGGzftjiun7uVQPsV",
  "key16": "948npijMMAypkD6DyUUkqL6gZTtwg3i7qi5ezoESw9gEARwZiiBw3bJQ1LnbGRRhKwe2kozuE2hKT5cEbHYh8VL",
  "key17": "5u3ad86eXxq96fzPwAJSuFndVAbtwYAemD3PUgTW5y7gxh8c4qrQBsUBTd4uPB88vaEjjueuhok9asSg7QHAnHcQ",
  "key18": "QiemTNs4yLgaJvqnj6aLmmH3mtXLsdq5JcY4xuGewpUtzaVxyA1c2LA8HMqVnd4hNwNaDUWmpVvACodbeXJKB34",
  "key19": "35DaGbyHM4fN7CgvtsRoo6jM2fGGGdLsUYRWHymEuBVKAeKSK2RLjmNoeWUew1Q7BGiczPSihPd2siJYRZ7yhaPY",
  "key20": "3Ac2GNyrNCqVqA3XjhTcbPgaswmFtX1nXwZzJBmTG1B5Lr4xMp3k1WZVBrbnFLEZdoJ2Gs9vGGmwKFGXVk3WDBB4",
  "key21": "5tweS9jzoU6gtUgExJiNPWM4xdPFHUdtBJhT5KyxrMhAGLdmpxYrFiZhNnthqFRw4mFmzxQRRzNU4JXVPFGthytD",
  "key22": "4vE4rsZ1WoFAGE2wVXZDJcVUAaLXPab2tXJWT1fBgjubNxrkj9nDfTEiyF4haE4LhN4sqU74EbeY7gksMPg647JA",
  "key23": "613Smknb8ZVy1NrsDJwmMKFaMGsVGxFjD5qoe9qEN5kx6T2FMhkV5mDtPpiGHneMSaJz2K7EkstCDkeWLiad2EFt",
  "key24": "2Srjnufed4CakGZBXtKwd5YySe9gkJEUrXgj2kd7PDR5B45mqRi1R9ZX9qQ4j4DNAMBuYJZGH7CK5y7USHAN5Fpc",
  "key25": "5ta7rprrC1ThS9GpYmshmWd4XhgcCbMDbPMqTXmTbCgVLa33fuENbwzHynjuDwyq3ExWuu6V599kyCeYk6ZbfpJL",
  "key26": "qeaDMszH8xoy95UHcWUavZqfRuizF4BsPm7G1mjMmw6tpq9abVCm8nGWdKvnd5LptNFPpweNZTzt9Kydiw2v9vv",
  "key27": "33RvHLpAURXjqncAkN6DAnrY7gRNZHzmhZmkmw8gnxkDaN9azJ92PbUx9pDgzfyfoJWWCwoLEymCZqgGAnuWdW7P",
  "key28": "2s7mKgPVckR6LzrS7ZznnYjpp5ynfT7g3dHsMrBMMXSim8RpT9hiw4CiDCgRpDoWtkDVqcxsFhseN2zfQax7rbMn",
  "key29": "3Nu26j4mz1FaQH1YBYnomRG7GDU8sX3AxVctwBaqNfPy6TtzyiSrve8NnYbFTSQoKKNaXZFo1LXGc3DPJ8TXXdWY",
  "key30": "2ihv6dfHVtvo5ERNv7FFfHfcoZiZvmozCdSFeppCUZeqdk5jDHTSdgszugwTcS2g6P6pQeHbxCNtxoWHtcNDxnEZ",
  "key31": "43yuLGMVBwHDE3hJM1fgJvrJBZvuGbsaqipQX5ZCoyktvJ7AWL8ZD4f5a5wGQLdmHLQgRxXmeRk9Wtt8EwAoEsdG",
  "key32": "2A59qznAcJxdVG9LJ5kMDkUdguhTf2yNEMF9QfbYhmzer4j9Qd7hDh16Q7HcwedM53vBMmFksWMFFXQduP894QR3",
  "key33": "3z8jJf7iCk1YXbBHratD5GSaBJpTodyEELhgMPNdmgFRh7rdor4KKX4HHRXGdQfUiUbWPcLGEyouC6BGwfLqwNMM",
  "key34": "54NPDspMwnTvbD9Dk6jM39UFbd9tJQ7yiNXNVJNsu3fAgRQj5pYFQ5GaSamAAmJdn1nYhaQ7yyRWKQdsxTva8VBr",
  "key35": "5thx8vLEAxoWYgRBz92CvnncYbmPKrbdx4vgscYPzvpuwH5LDUgaSSQh9g6Q93jmchcgLwQ4v7Brt6xpvB7LnghD",
  "key36": "2f9Cf6qffeSiyFan95cFV8ihfE1tQcdLcDatrAtD1FMMQxvhWUMcEhnpu42FUgSiWYfc8JmK3PzjaHbg4VCGXLh4",
  "key37": "4obiUg7jSU8eBjVCRrWEEwPAAXAJn6u5QWFB72Nt31VD5G5R6nZgoYRFpuzfRNzh7mNSsswg7UM55mYC5b95n4bz",
  "key38": "3D3JsHhkUfEX9Fjt45d4cSQFZuFjxTorGG5Z2aBZVvtFWKCPWRF9bhaet6o8ATmerc78r4R3pm5QpcLpiTxsNo9M",
  "key39": "vAmS7oSBAvbP1Zi52tebgxCFxfvBDK9k5Rr3L2kA6Aj1JZXGULAUJbY5p9XMAPGhh1g32PgNo1MU2M4P5hjNk1f",
  "key40": "235sW48zWbjfcXSjA969zvLekvMwVLpLSsKwgWf5dtP1NKuNiQj5Y8qfdhpTd6oLuoFLhjR9hwU1xUYMm549dm4g"
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
