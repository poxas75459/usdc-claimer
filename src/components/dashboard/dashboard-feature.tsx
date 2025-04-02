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
    "3DzBXR2DqBhY6MS3XtnrdkxfBoMY52YQf9JBQU7DCkHcT9Xxo416ygyAAx8h4wR4Yeso3xXEZkJnaRCwvbeCTDMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vYbqczPfHQTRR97WAbE2BaPGLZ5RtdCAE9BgoTYvAma12c8DNaHXpH3ye9KFawzzs7KCxCDDDyaWox9CpzB6Y3H",
  "key1": "2RotseGy5NkqWcxUt86Y6pDzRrs3PLm2VCfewQj3UDpXdntnQGHnqNCa6SNsv39qDpDCrvjMtdUo1nkqhfpcVEwc",
  "key2": "4yKmmbmfDyZE5t4479D5pnLFuU4fzdiTXTTYXft6395NVTeLQ3wuEsjj3Pps2GMCbdkEy5dR9z9tj7hxyrzAQ945",
  "key3": "2G5MkqwLZnKHFd6T77KNbYKWzsTAwffg5HGdSNNSiW3RYetp6vBZGqtyPWmYTKQg8PwdKC2u9yyhk8jbeF4CMUEp",
  "key4": "88biA7HxETUr33YMR7svwLbDb5GuVS9i2xWEW3cn5XKXSNdZgqQgzyuQ1e2RLNZF9oidzPXZqFHg5cTksYJWf7u",
  "key5": "2ToyvpqkB3bJi1nAhiqnpnS2KaZqevBkLV8D1NMYvziumvCvSKPnHuksZq39dsaWDR6xmcmjko8YsEQDhWxmUhW3",
  "key6": "2nR6BbuuUWZo3ttUuMqu5t89Dic2XNPzX14BK7JJqQrmQuZPAJxktM2H8eizPmpkprSYUgUGMLFECFwQHY9rrMs9",
  "key7": "29wFrire1L9PQYBX19dxDYVhurdaDmjCnfDjFR2FtoMjCXxBBJfu9joAza2R7FP1N3NGHGLe633i6oYrAdmWe9ar",
  "key8": "5QXYMKiNHcM6YvLgC9MgoxFz8miihNp6pKSfGCiXibcnQwAH9pfedMccnk15HG5qVe7X5YRpJPRJsaPVVkBfGMi7",
  "key9": "22J8gRyKxuxvTEgd5YoCto3D2T1DGFKz21JicsJF5jVis1qTrNCzFTXwy7vaLDzFVTho9xRaZqQg9ELofPApgaot",
  "key10": "28kti7uQ9dDTu4jSYbeNaF6QaJTxzqcBZSy9PmQfUH2facC3QXqUevq1RgCbVYTqZTK2jYsTYPYScbptUY4FdYEg",
  "key11": "4RoPkQzSXteXnhRCC7jE12dADzTXJqgdiRFMir1YeiF9wDYiE5jq7WuhKME9SadrBxGJzosLr1YJaks7QmQxdgJf",
  "key12": "3fvMSwmMKSYu81urxGGoaVc5XGz1VxvDj8ua3FsLn9t6oRPtQCAtWAmrWKhaCo2brCSRbN4mjegibCwCkovVCtiY",
  "key13": "3fLb4UMAd4ickyrBVEUM2mASULVBTkVoaAXyxctW4ZTBSWUx8kUJ54AapDB7QpoMqbxt5T4ReFtockmW2SGizs9V",
  "key14": "2W3qwjQciNfPxZJ6kCuP8VuiwVGUiKf4SGtectPHgJ3gU5RkC8WECABYkNdvBwNRPcby9SQ53nBF4GYB6FFkoLY8",
  "key15": "51pSnwCNWtupWCSBwP54XtgKp48pAByBQFBxbwC8HjzqZ7MfWKj8bAJArX1aqTDHW9dKuLjMU3JxN7UGrjRpZmzM",
  "key16": "67TW7VuPVXW4QhYaTvQJsuk8uTp1J3d7mLrtw39Dw9L3R2afb9HUxJensRe5RxwEUqgHqthye2Jh22S52iYTWrxP",
  "key17": "2qX9nECGPGdA5gw5NsQX3u6LBCugNCWgwrjdVsmabj4ZTA5qtFWNW3tZfCHBrqh23y2AQ8HqDH8Q4S1AqHUcq1We",
  "key18": "4gMksZHNX24MZrPRD32ADUwwE6TpnjgdckKZt5SQogpCBrzwepYqZ5aXyuhwhDgh1ECG42u3De34oDuCG5t5VzgG",
  "key19": "u96VRhHFEVzkhp6wDWx5HS2aEnwC8gTHeubtbqfrQ68jUf8iqXPnBUZmThczqYx2cJyQhwntnyMn8MPx4BaqX9V",
  "key20": "2jH5iq8f8sVchtm4rRpdoVaLTan7NSC1Gt8yaVQcqmsGZqC7db3Gt4qU6gRqoEPkYTBgDrVL2im2yMEYnkZGhUGm",
  "key21": "4MpKxSPJwLVFDRn7CkBr8YM5JPVR7Me3kVbPcUHs82J3EB31CnJ1mAGioLpZ1RpY5zxWQYLwz7SwacT2bCzWRUXu",
  "key22": "5wTqfku2Pai8NGMdyWjYe9oK75rAJzDENdR7BXHLA6PGfQiTFmrKed181D6NQdFCtW4nKzXRUXE3fBxZCdx8uDqG",
  "key23": "5YDxwNg4jkm8h9zGW9ebE8gc3rJAfis6WZKJ8D1bv6wyQLH5wyEjXTj3K6VS8epzuoEvMjaipeY46nX4oU6WPxzd",
  "key24": "2r5Xxyi1D1EFaXKX82NyiexMBc2rZjfaBYvxrj3zPciR1Romcr9wdeDj56raaSGHS49sBsqUAkP4HoVL6Bz13TQg",
  "key25": "3SagseWtJecSt44KQDtTXPEJTfaZqZiZURZp5bwf61ELKenSjzxjCBisrbK1TKfDCdDgKnkz2GJTiUXq5ZSB3PyY",
  "key26": "2NoTTN4NejmMYi3NhQWhq2BcDaLar8Mcvb5LKDbSDHFjtMH65Q5B5ArX3nwKsva17LB9e9VbHZdNP4R9PQFmDp6p",
  "key27": "44wVkvEqd7yaTevKzCAnSEM1AsaRNLASmhU6irHz2qC7KD2X33xzD1KaRWY77aCPZiUWbkpgoTDKN9QVWTQgh1uV",
  "key28": "NWRkWkfZcCYYbGennrDqowvKFrYPkJXo5PXo2AQwTjrHpz9zPa3qcFLkcLtwN6VWa35mtu1Q1kqSKGMeAh11Ey9",
  "key29": "5q4kTMATV6y57qjwxrpGqsSCVZZSP8HNthnYEXi1G3jtRhV8fWSHxUMV1g4k5wT23SKhmB9rTHjXoirqDZ4g94Te",
  "key30": "5dxELYnwgaZRvhzwHP9Us1MUVMRWy3Ppt7kKzEUcaDmD1P5MkhBBWXxBPDeTMHhBDXHeECtqxGz2mvLbmnmMDZtG",
  "key31": "5WuGCEWmeB3pNzZBKih4JNTdZ9WDyVX8DPLJvUqS8awCXdneXBR4t8gGJvN3oS5Vb33jKwouvLpViygCi5KmnQUr"
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
