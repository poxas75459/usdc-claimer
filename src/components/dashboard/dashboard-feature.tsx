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
    "3FjYBUS616TFiaDC5QAKy6Lc4DKzqaiRKV7UDzg7XpMeHVHfCcdYYcRgNzfCy2ZmLVmLqNC2jQQaRDir5N2p2SuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DAcSfrcBNSfHhVktbydw9ceZbm5whbtg8DS2AHfqWQdNFcCyyHuB2kTuGY6YEu2mLR42XUB13joGhcGzN4dSrKg",
  "key1": "47BLx7L4P8q8ookSsufKdmzNJnuPRM3SJfoSbfkpyoRZGJSjdQW7vDqtMpACFfS5U1JfDkA9GdU2hBbseDaMJyRY",
  "key2": "57YK7acqMqUk6PmW5HYbonXL1oeYYFA1sHjSqL2QYscdeQySut9Dri5ftVzafM78pf2T6YpXw1mBZt9LWZGWpaGg",
  "key3": "3nF2NuNngHHDZVvgHhC8UJEHrvp4p9nLz8hWVvEqrmoGkn7vVUiVkdktwM5JKJHkgkHEB6CeyUMUsQu2QsX4cPXN",
  "key4": "PwwMSPBi17eHwLqFdedVfeLu29Xh1DFkLf1LbzcS13kV83VD8bKhnPDg3pTSegre3C5hDBRviA9GibFeTB9EhoP",
  "key5": "3Evf9QHaJrqNeBnGhgGronRzFEyKkMFXCpap3h6y2hGj1qpSFA6Xm3C9hCUCKdvWcV7AKVKieeoYjaHpqWpqXHda",
  "key6": "59WMNv8LMeZ3brkwMpYk84HHrc1WXLN5f7UhB5XSUcWm4sPWLDkATQZyjGfWFczCGDM5UV8W1XbMosFSFCcEoijr",
  "key7": "2XwpmRFgSSzNhEEVxwNP5ZxCcbsqTC9jy9P2gFcrRu32fnUZLSSvxDxeNSkvTjTjKACSnqEbaVs8xAub922caNDZ",
  "key8": "5pfnWmCCy1vDrVU96SBV9DAyAxUDTiHDagWZnzHgoMPk9cxXWjWF2FahWCjEHk4STEdj9f46HjNJ7chKbCEQxppa",
  "key9": "3Y1ELwpyMjUg6MH5o8yr9xFbMWDGMfazBUW15qchJRJSx22KeGGqBEffizdvvGoqSXwbeghtnjtcrkBrtb5bX6YW",
  "key10": "4NaMiR9HV9wG4yRD7ZmnWv4ZVCY4YJK3viBvZh5C6N9RUkbewTrUL1S3dFuoA758GDxwhF1YPPhdmysh2NWsj9fW",
  "key11": "2ao59caoE1V74S6ph1S89jWAHxmrp7Y7tRkWhe7kR5pGQECuYqgpZveGm1UWM3Szi75oivkyBKhHgCDX8M5d6D6e",
  "key12": "5xa9Uy1eBavqaXGZ1NDhfcGPJkYPQubsjkcNfKBGTSh5Y1VPyQDypGVyQxWc42keVbX1U5f7J1rCsYTmjGNi9ica",
  "key13": "25722ZxhUC6koMtcJgYmbi5nTVVfmAnZz5TK4pQdwNkvwyKjTMumr8bb4yLRpLHdjkmmNAyFtU6Eeidiqht3ywDC",
  "key14": "5bv3CtRTeQzQJUc2zGcrmStNC6nB9rdurG99sUtiKyZ5iTr7pM4tkaoMhcLtux3vkLz1Ddu2CjpU5gs74ud18Spv",
  "key15": "5wYHzxR1jjxVMgVfAccyVwbP3cbr2Pe1LWtz8z3h2eSPGsgL33bN4u1kuuUBs6USSbNB9g2yxLya2sgomrRRYX4w",
  "key16": "56nTqs3xoAjf5RRZgMBVDtR52xjKnSBU5wufDZAK3rEMnGGCEKCMQmYff2KTaHzcTBLBCaTBbfeshaJEpEJ3JHpV",
  "key17": "Fz8UnjbvUEEpDghPrine9N9KspfcbfafiT96GULSv5zBdw9GMKCP8DCBB2UbpKGtaXmjCr8uqhEixdSZzEyfJVZ",
  "key18": "4E3gHcQ2Upwe73Yuqo5ZLvaT9pcgJJ2uwPJav5SwzRMW8xnnV1jGQnavVoTDynpTyWDqGpwZoZPxjA2TVStjd3vd",
  "key19": "4VavZLa6Sjtt9EQitxjWGAxXQ1SUELEkvUKvuRFPEPQxJdbQ1T3k7z7vmrc9b81N2sJ8CXv2qMcX1DKYNEREk8dT",
  "key20": "4b8J1qypkNnANh1psMwJPm7yiygw2aMu931hDcTQw64iQGNzSzcwZFWfB5iyRv1zaWYhLgVgMuWGVxNTWzGEj4qq",
  "key21": "4us1LoKfVeG4wHpumyQqeiioNJhzAUZiLqetvNt41vYknRMTi3FYFie8mR1Hq159ewWdWR3YHBoWRTUzXnHSSRyM",
  "key22": "4D1AfaQUZGk6FwFwmCbaWL9dsAywnb99B4jsQf2rPe5TdgyoygnLGFv8BRSUyphc6fy1EPqtNkcvmpBZKDzTj96B",
  "key23": "2eW8WjSFLXQ9HpyJSBWG2Wg1CQtkGLBtdcCY9f9X5a2Y1w9nsukB29ePP5czTmMPR1fYyH1M3ynf5hsJQq7EFxkH",
  "key24": "3DUAmWzoJGNFn2PqFgHZBy4PBUd5iHETes6hvhBxzn1yHRQttrPDEvL4ntak96wJgPyTATsf2dsW1Jxa7xLs78hZ",
  "key25": "2Moms3LAitSruXYQW3QhAropqD5cw67UZQ3Ksf4cro4ALFYh4UxGqZjy9bUG5f5k9rJ3bqxsQW6oGnHTpeLD3DUk",
  "key26": "5TNCaHcqpDVh2Hgxp7Ygqxxf2KA5isXto3vi2FRRJPiiG353HfqhAZ7B3NBgsSBReGFQXYgNpHoJoChB8yN9YDrG",
  "key27": "4HxeX18BSVoHUvSQ57PpQ9D1QKU3uKWtkEPxb3a52hSD5UKLDZFx5hPC38gYjqPEM7ptfawHEZ2GwndYR3grNxo1",
  "key28": "5oKKS9QubqUGfciZM7JFp9Muh2U7VUT3asmhNjYHwQwf4u9RQd1o87rsKD8ij5ezkFhsbPoEmd3KkHHnEvtvanv8",
  "key29": "63qjhmtKNTsgX5SbNphSrCyC8zywT5cX1LuTG8RFJjUormnBRYXDXtrm7xmo8qaQ79R4smrTQA5tJNoRp7aT8u7k",
  "key30": "3PoXfUz79vBuio5b5spkCTBiJt2KsTfK9qReX3amfH6PGuKDVPhg2S7cKSnuLP67LvKCTKcqdL9JjYiaTAdZmyxP",
  "key31": "5Z9rQvkhksDwGHPCYhSMqNNicu1yJGhBz5K5fm8pkySDnRipCC1uCErAM4REYz5HvtZjnQSKKUgd1tsGBFpMCLUT",
  "key32": "3vkuawa4DvUPxK1cYShNjBjXzJWP4RX5JdGqyk482J6z2c4e44cDusjtcDwb1edMtuSJ49AwFDbuLD4od3jFEs8B"
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
