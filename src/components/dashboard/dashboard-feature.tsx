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
    "nb1p46WSdF9wGL22ZfjUNc99CXsEGGT1FCrwz4Kxn6J7bRMXZkYZhjYZQKsEbKWFj18ydYsRETRp2RbdR3aF45q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47sjmoUgdPt5bFLaocPtBv9v7wFktaV43oQqUJSCHFzUERGpcKLdWs2ptRwkL3BW2wPJu2dnqnYN4GUzMmhwLzrZ",
  "key1": "3wSYoeRNtNbgXj9nNmoLVfAqrgzRokXipDsq7bAqU4om7u263jEfHgKab4L6cYqjuj4YvpZLMHEaEaTphdQzo59a",
  "key2": "4kuDFJii33MN3JbSZUWZkF2mSJLSGfA1maVgN5An2a3TZ8tipMsAu8TPzUw4arXtDM8krYyMxWMKr3mHRg85kM9f",
  "key3": "hbjbxdTKow42VCrM9jGJgYXHoDoCpSBks2pgf7ftXtzEarbbC1nWefpJW2tJMCAc73HvGzUJwGhNt7oAGWTKEmt",
  "key4": "2Bu95v1Sja9Sq6HfUp7FaqjkD2ULeFXGmzJd1HEqwDgWwjWkFBsWTnNLCJC96PGykTCKXJtAYQAyngoqmsUaUCDD",
  "key5": "52YtG6G4rezmBwGEXsAFfjEjaWNG1swzD7FrZNLT8qFcy5dyUJ2vjWHVSpQgZhFMoRJZi6CPZkaAJFWA7WWmV8m4",
  "key6": "fEP3nMzy2fvpMNYZnJAsPyfYryo1S912NgRa5MDHCcxu2dVqwUd3noa8P3978KmqL2VFqtGgWqtmow5Xtd3Lekk",
  "key7": "3BZn1s2z6bYxiXFbiTPXPvVWxHoAtahHEa4znoerCHWrG28qaSo6UELnf55SRFhSpTiVMHc4A8YNWwPMBbivmKFD",
  "key8": "27bEv1p2oMDdRiETikqURuAkAfWFhecRA7nLAArmQJyZpQfpgUALjna2ivyNTtZEvX3M2VKZBC8xBcKcsPSJcUHP",
  "key9": "3RFonJ774JpM817kmdxzBZUET4xrewkm5DJnogMxmjoBvSY8UT3MSF5ZccconXGpQXqNYMshsXhyRQKsSFpPCha2",
  "key10": "65iR9DDa3V44QJ76xfK4ii4dAp1iMAzMqKHbsEiXNGbQRKjFQfBFGTBMKE5K2hP39gNYPQf2qWqf2UJb4S8AHfia",
  "key11": "32CkXdKhCYfbia9amPkezc6eZAckzPbbZTyBYwEzDgheUQyJq4wyw5x2r6J3QrX2i5FShXJe7UWLSuma6zGFQoKP",
  "key12": "3QaJqTZn4VgudnprCTYdgWRw1iZ3mzQSRTPa5NiR8suVQ3Lk3CdTpEFzoPMznvscuF6h6UcffbA5c6kL9Nt7mKYv",
  "key13": "2kx4umfxEug7YXfMk7jWWaeresNvov9neFzaiNzxTzyVSe1QswWGrvHeh383GcJoLsCfAZYuH2AsDUJ1fy461HLQ",
  "key14": "3kpKNkiBcocckHFrdomCSBFfVTq2J4ddkSsc1H9S5MnayNrE3AWPXKu3wwvkDQXgWKUi6kmNWfbBsEd89gYbJG8n",
  "key15": "3LaxVXWKNjdWACws6WGJ7tdf3FnqKP5u6ptbVaXkUMMBzprhoQbtKyraoKS2UkYMbZWAaiZuNCNMDjt8b2gNFDeP",
  "key16": "5FfUUaNx17FS9Ucg226LLmJL7153xmhLJvMZWH9RnXKa8q4q9NGaocX2V2242qwdtZKT9EaTNPytRoNjnpoQE5eA",
  "key17": "5JhmHwQZ7AJHbFKUHgaRF5LH7efNWfsV9cuZtm58FXFBgZA1JQdTWWpADMaT71YA7tzMHftBF3Tv88LCpWwFdSLQ",
  "key18": "3YKVz3rNC73JLBL6dxudTXk653BYF8YzXuhCKLtLcuohjx4sjhDaTqQiZoTWjmSMRYeBKrqxpN3S1L41xs5bwrxw",
  "key19": "4CvAVPL8pXWP13YmomgSwP9iEdiN587c9sTCmYF1eE5SsnwkJrHCUQjxJEVhcf2K1WM7ww9MbKfuZFEXGMuL3D2R",
  "key20": "41Z1jZ2xkksDC7m6KzgbQUwYK4xinrE5tNcmXXZSitE38rRL34SjPjrzyN49R7uFuxysPAntKRBCM2zUmB4WbesU",
  "key21": "4u5HqEXiE8P4gWoXrPRStuT6zbKmYwk6hYVR34KNPU7A1CJkUb6xnovB6RaVMx51mDNAjuQ2h3b6XyB8Le9ixQ7p",
  "key22": "4usWSeWwpQSkUJn1MihK5dRCmY7XBZpbcYxpuM1JR2iJRC5djSgouR7u6bckFSAs3kFFXUSAUF7pzgUEbW62Vv9m",
  "key23": "MLBxzXZ3DUe6Nkx2xn9XoPHkrwCLkD39ExCmrceUGruucuW5JyoRFTmPrvTCUTEMb6S8pNcq2F8gTtRQ8iC2XLA",
  "key24": "45f8XnYv9TftpcWm2GMf2a3r1nKY4k48Ccy54akUgcevtQJp9TpmgNZ1u5fvZXjb9DPayoEKwZyXWtvbictx3bfG"
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
