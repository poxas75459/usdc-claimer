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
    "2k42xTRFVTBgB1KtaTHaAe9prZwfLoE5tPTbj3ziUseLVR1V84M9n2mf21z3EJY3aerGgQj7hkXSHGwfwY34QCBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fauFkpzFNnVzGvn44zJzAbnEraKm1DRcKvCQKaocvQqVQyATFg39dtVfRdtNUHMDHNZEooErN4R9ge2VyeGniox",
  "key1": "5mm8qxvYH4NUedidc5bxNHkj33c7ib2SKGoUFWjqowUjkvoqnntVyZhgPRFkyftiV938EoDfYWW6RwHfo3DxYYVP",
  "key2": "49wuPqkk27EvJt2gUVb2RJuvxFekb1jSzfGNHASatHfuSB2gBQWZdZANMfjbMyrPmrJCgVsL41XLkTtnVvjtL3Q2",
  "key3": "3xzU8hteMHgn8AbGqNdRFaDLBaXg9J7SFTMAy7p6vEkSioSrdCpDfyKmGw9w6whQiSMEjPLQPFmPakBfyVBvFEbJ",
  "key4": "4TtHHuQvy7FQXKtA3zpZQ6YopknF8FSSTmx4ctEbku4dtH2bgrrzwbotHNr2DwH2Ci5XvKSqxKZyUuD4SYofvUSS",
  "key5": "2JF8G2t2YRTpEBMYSF24SykzHTHH4jVZ2o8krZDe44VLQpUqQreL6bhETWdDhEZQFoxwmtSfwCzz7d8eNaak7ftx",
  "key6": "3MaN7g4hMv153ufZwUVXTeBZanSPjiBcv1eHwPcgdSNUHRychrL8H3cdgFbKMa6uVNNV9CHqhh5KmmhiG126q4Kr",
  "key7": "26Qh6hHbN5bE2R16PkxaVLye2PwwKyETrEyek3ni2axAtc1jHmZXt1yM7LhWgYTZeqUToBhXXyBeUh23mf1UHenx",
  "key8": "5t8w83KnGi3RfTej98rNAeR2YmTF9nmd2jpXN3WAEAmmJSYStndfE7ok1pxtd1fwobSer5cWB9iin28iHnnN3dpv",
  "key9": "5Qms87g3Csp96qqe1e879vsDNqqp5pLmN9ZEbgJHBND9r3KdwymsUvZfP4WWffZLyKtzriEbhwPwogv8iff3vePh",
  "key10": "ZAPS8EmtXPG4mNrTDRRd9BHAv9btfD6rQQjQJ7UEn9dDiF7MbpEgziTPW9x1j1Gtw1ZPbttChNGuguok3M7xtty",
  "key11": "G3AFv9jAQ3EutkAgvP89WGBrjd3pBp9fNKtYDvA61C5PiS2ebSXQxDbQyWzgYcTYJLqctJCxX9rzx2aQDupXKXi",
  "key12": "5YvubD99Wme1EDDQkUAtXtG1TpRT9MS3LNTHHmDpEirEygqYm17RGZrq7xFFrFw8J1deiJGefM3pRRhQpHPdeFJW",
  "key13": "5jA2jtFgLwFaYmMdB7FnnwVMnHkCpc4mPoUKn9FJnNy2SpnUZ9uVfb7es5AK2MKLPesdVExzEytrqP1Hc2F79n6u",
  "key14": "4zcbtH92qd3FhsJ2XEcH945Mg4FR6cp73Jm7sg4RGYAiDebh2EnQb6gxdtdbcXMfkZ7Qh2eC7QV8MQ4xgx7DCsQz",
  "key15": "4VnReNUXs7ErmrvXnRbS4jU6TPdF2t6YXm5kU5ndgfT4WWXJqr32nkDZ1gs1XxaRi6LohN2QvJ4zHbApZUegAemn",
  "key16": "5CRRucGELTAe7z4YCPNE4FskKf5T65uDGHchbZ53y1cq4hqiAjgh61M5gT65KvG24b5doKWpHHBsc2WaWe5wk9Sy",
  "key17": "pQni1pziTBTLr5Y6VStdtkxkSYWHT1QfRsRg8fWeRqqTwBwQnLi34DGemvbLNQyPuJdaCy2Ys3aU8sDDVYg5csu",
  "key18": "4WrjXbABu14QVuvuNSCs9n9nDfpvuiMupFaEt7faAThibyKFabJg8qWzTNwLoou1h7vgJjYcPQhJZBxdgEubwDoe",
  "key19": "2pkUXGXcsDZuX2ETGzbhS1La1v8jtMuYrWmPDK4dTZTgFVLkeeaugqt2ge1hAzjdU3TUMKRcYY4HPWHy2tisWrGy",
  "key20": "42SGAbJ4PbukG8b55nBchU1uWyE2bRXccX7gYYUHik28nXEXdGUmYdcwZGpTzeSrJXcRnCUKcAKuv29qmJN9viee",
  "key21": "5xz99sTVSwFk9JDFeRdSVdR3jaccFjnqb7wWy7x5XzUReE5ZmzRRbQ9xQ75qr4Y5s8jHh5VXBJyhBdwyVzompuaC",
  "key22": "5hVpFM91tDxMEDobNVi1QJBS2EEwTt6GDEmng7zWQ2Bu4UXdejUvGa3ASzABiepZfKvYiYdVySwZXvpH5bHSwsQu",
  "key23": "4kFbAo6faSb8TBW3tDcf6BvBZx4kLrng6VKSznzGXCCYnr7LDqBHiAMgVanh9dpWyCAu9KkSVXhevzzirDhvG8Do",
  "key24": "4dCbqfbyPLPcMt4gBSNui1Tijrnp81jy5UzQAzViU4dJWTf2igA3XUP6qpFBhUoUqePnB6qfx5DbvyywqyFv365J",
  "key25": "2uyvAaLvYiCug6z6g61KswmEFBXYCqbSwiPcQJ3GTYAPLf6mwHuf6ZURNZTy55Z5NjMJ75BZ7rJ2VBnBm9QEMyyN",
  "key26": "5VuVUxse6MUCq62k5DrFwSarcQuT35qQUK3hucZtSrfw4DeqJoutE3o6QH8kKxp7m3vx6zB6hxBMWvyK6jqgfcAE",
  "key27": "265JuHij8uybyzBTofeDChbjewvcetfGZpMtjML2euFAnQWBfSfUTEEx38QeXFxDKCXCexxfFzmmedjmr6TfxLQP",
  "key28": "5dSAbdR913C1HV5jGYRPk3c7oiLTupA5UkGP6MWePV1UA6LD4XGZA8nYWkBmWE64LE9hBeLY9q2TUeFRwJWcpYF",
  "key29": "2E1gTxEJob9T3TDqentR3qe55MPZhaXDdU1VAVt3L2r82uDASkLciSWzSYE5yL1rqJkMvmU9wJSYNCAXwCHtLPRE"
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
