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
    "55LheqvjPd6V2KKRYYWpJjf4Z9NNrEtiu5MFHoqatNHkSwk359zK4NWaotaE9kc5h6iUHJ5scFRMD2Nsd8ieD3Sm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cUUjAJMv5mJxWrB3W3YkrEpiN7B96TimNbh73krZ1uyuUYvvqeimrD3nVzUsuRrUMzPW4kNWFmT2AAJbX7MBNX5",
  "key1": "5DhBSog9FMusgPoMvaNw2gzdkRNQrYSrjutb2qi82yLGXB83gin4eP2ZX6DeSrK2EJZdc3Cd5xu7sWcFF3pHntLo",
  "key2": "2Zhzek2B2odD7hh51QW1qvvurWaa5fer9aLcE7A1Xz6UJN9mznNwJBiSsgTqTzLYs7bm9TCmgUYce6e81ksFcqcS",
  "key3": "Kj5TsQm389NzJuGT8Cm5WVCB9xv49Ly3PcNumUAc7epLYLgL3M3x4GxREgzaXbupG33WaJuVVq6QAgouU4vbqNM",
  "key4": "2kMvyMuUa9LHfeEdZQugJvWqtGjsJ9Dr5eJHcBCRnfExts72SEP3HXyYBieQEfgaQLG7fvtehw7BegVJvu1hyF89",
  "key5": "2krtxtpEozVmmNFKRXDkwFgPjYQjYGrSg9vULMMAjBFHJAJdVq7uoBN7qquD4TkzQLEmBPqG21rfFySg2PKtAzoB",
  "key6": "5YB2FtnvWFLKAosjPL3HRXWEVdvvM198d8UsKKeshosSbw9GUvp5FGr892AoqBLrfLrzSqgJJJ9ajtvcwG4imzKk",
  "key7": "3oRCu8CjrUSFieSZSG9ESGKvGNc58LHj6BAvMqjmksm9BwKHpyC99BhCgNS7z2NsxeSKyjERw7A2oVmkHou9DeD2",
  "key8": "4DdMRqXyLXN9yn8uitvLUXj5txuMMy6MyXJfzRroADE2UXD75jCXkHPeRonQ5U7sgQDcPm2GW3Esmx6ow5P7cptP",
  "key9": "2ZXjGtSc1geBZEHPFDjFkj6mdXkYythuxCMSL1v5RGwocEMevu2xGtq2E8bpLMacT72zBNhJh8B9FePyxkSJq1AE",
  "key10": "2QSXpwHHVf63x2de5jUX6LF4D4hwSqfyfgi1YZLuGZimNpMRZbBGaZyUp6XTEBdhSAJzWVCJMV3RHC7zhcTC9tMR",
  "key11": "3cMABhdRF1EDt9HYSRo21814DjAQ5BrJEMJoYfHBcrDWCPb8HgKp35LKgcCE9Gp8mzNo5aV2r7uZSRNyzJPToiYw",
  "key12": "2tFcWPuiS5fU21AkeRi9hgorqWxwFNzN7FQUNXLK99uque8HzBNwzeroFjNdPmd28RjgN1mBL7YHA2YyMYgZZopZ",
  "key13": "3YkUCPWE7ubcLFDnJPz2UJpnzC4331XoEcNL849XGaaJsgJ4EWnozHVovqrxDY1MEabaoo2xuF6gQ2d3ykbC79Sp",
  "key14": "4ffK2eRAXV2zqaw672jDg8A5Xq8bFrssAjZ1pZY5n1tJ2i3L1Wdepwj6YLHG7zPF35yx2EGsPhp9i8bwJv1Zgouz",
  "key15": "3hDNWzQHpjVKWmXXDR2t7EppD6mUA4NCc3de4VkrGyQHWLUQG1mu7n4kLbQxHUuFqRqgEiJJ4T1A4CP8WmyN5JgR",
  "key16": "4HX3cjxuDjJfYiYneosMGy8tLF5CkqrzTi5jx47cEZjEzvtSZimtNBUZSwKboTmzjGw4wPXef9CGp8oX3NDGGxuV",
  "key17": "VB8ZhSnZR3V5Lp4Thy3Dqs4Q3tGucAa1cCmjsPbpdYspf2uT8Yv89qMPQmsYaPLu3QL8wrxH7iLitgnHEBQRBmB",
  "key18": "TW4h6FeGeGnHNr9cf9tbMvRhLZWhdjjunarc2HsVSXoq236Avqema7JWMD88ZXpS18yw8Gwr4ovKR9CKs2PeVxW",
  "key19": "4mVZAwgNniGQ7SDJYbQacLEHd9ZLABUJ9yfPAc2V53gN6BprqqWhbpK77vvWagLYKogRZdRMYGga5MpxwJAZyokZ",
  "key20": "WiEGDyRTiytQNSpi34bExzy94RkMipaJYnRXJ8rs4iSPZMuumjvVBzM83J8vLV27e4Xn2KQUqMk6LfJ1vDb2dBi",
  "key21": "3RfhTz5Yg7cUByW3Z2RSLB1FeCjfZjW1oGW4QrZdQ64EKYkZMo7NPZWSsTSXUuMYm6mPws2rNH5PfFGuCGsd1NAB",
  "key22": "3uznuTZGzQGit9pkbCuuAd8MiRZJjVbrRPTHqQ8Qs1jWmmPxiCiwD4Gqt5MWgLvgQzyNBLogpXYKxuFQFRq1gktw",
  "key23": "5rhMDRRduKSamgevXNFCLFejDjR1tnBJR4qp6yEJK6RAF6KGUeEdDMH6X2HqpL5XvSHweu3Fsb7WkfSURqwS19H4",
  "key24": "4RC4w6Vyy56RdN3hMCVPZETS6TnDdyrF8HhWjAntoqkjYQQctxrfv4kaMCvTHfNh16mnraRpJC4ADLJwmsYTCMkD",
  "key25": "4Gt1kTQwQo44tTLtMpbKaA51QizjkCyJhEt1P8UiNg69hB8PRd2VJBcsnNwNNQDmaWskbCF32Nw264gRCRfpURZV",
  "key26": "5bgFYc72YZXxbd8MgkUQK5eLnwhiWCVacvumdC2QuYrQ6gyoTALSAXWzTQFgtXJ8F4xSQHh4J5brqhxSg1Bd4PUC"
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
