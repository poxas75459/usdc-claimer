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
    "2tyHBjtEyUKsQFcRN4aEhf2JYgFDQXAYgy44mU2YPo9a73XfTKaxkDhCVa8e5ZhbaHDHgTLuwC3Y27yXbUdVNrSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h2iwDSAYh7Ko887xQuL1y2kFSDGD7Ka4gZ8N3HATetR6CPyXLjNFVgoJudi15bT9gNFwHmRetiGE4gEFeTFxw7M",
  "key1": "5JUFEY3M6q5Tw3Y79Zwkmey51z6sg3CzjeCABzvwwCkLhW2sKoz8KXirDJf6cGiqD1YsHzcUFEoDNEFasyf8snn",
  "key2": "4JCxFeWNCnkPsD9vwcUnQkPi9ejUdZWPw51VkYDyg2TqF3mMhWag42wJxgHVMUcs49NkQQ7KX3WLQvx3fW2WneeR",
  "key3": "2yyEJkGiWi2NSu9vLeGam76zQpeY2QxVqYheGSrvy28c8e3EYrRPaKHn2HyYqdXnTJtSHDNACYMczaQphio89519",
  "key4": "2BAed59PrKXPXveAoYE9Fwb8oaAFoM6UUDk4iNiC4kVus7c5RkLSPEG2xAYexFHak3q9HyQUTeqS9uwPJFp7youe",
  "key5": "3NycUyNAmD5zQKrtbxws6ednEv3vFwbDB9Yuzoiy3c2UuDd4VHqrU19i5zdSUfY5snYcmv9tJNvR64EcuHqJffeL",
  "key6": "3K1mEhV32kyEoch6zMaycQUi4vxg5E5CT1MByJP9HRodjGT8DCmoRfh9q8nTUexu52WTCDtqJS4oUEsvf6cAzYBh",
  "key7": "55eCZfFGhUoTzqJ3AHy1X1vof14uHqQNJ4L6yWC6X5fTcq5ZiTJjSVEi8qwi25RcYgtmcieJrC1cPFR3aQEXdJQp",
  "key8": "3eRM8Gbvvus4sPnSz2DmY4v44VnfaAY5i7weVoTUa5U63q9PsCN3UoW5D5xFvpgSitsSPxZYzrcq1Aga74rL2TJc",
  "key9": "3oSgHTSD5Nbo1918sSaHAhmwg33FHzXcxSjPQLJzgdbUG86v4ibyyvkHfu16UdJC8mwQfwP4eEzvAguRnm2g77iC",
  "key10": "5xtpkYh8iUwiiHCby7XKfyAXYew4qSXaoVZoJYA3bzE5MxLEgy1aggtFefUDYx11QNVytBaGXXu4K5zDa8DHq38y",
  "key11": "383AY9JbtCTeNbp4uC31mL2dKZz3GJ6K8gL6FDJqJLoBceASSKNqaPM4qdg8BZFtACPxSYk8Eg5NWQyZRxg7CSM9",
  "key12": "quY2KC8sP9jyg5YvJ8Ayy3qKivFcwmgXoiLvRT989Z4Th975SYnwBByAJmw9MvsmDxJb6oJDitgN8UT8DnPpxMm",
  "key13": "5PC6iCY7ZRW8Jo4USLZmRCY1eyBW3CcExNYj4bAGh5ektekASFt5oHAa8EKMYyfBCqFbei1mRJPoBBorPs2ubGiZ",
  "key14": "oUQyYLX9LfUzzSiBe78trzs7y65r2enXUoUXmoor4NhMidU6ejJGiFRNF77LBggERz4bgpyMnYkqMR7JovRK6JL",
  "key15": "65PaLcBmVYTJ5zxfxXQFZgVrp6EzRzEr1nUQQaufCFgrmmWBqnceBCxZpoAfMEPgyKXk4WvS2gdh2LXuccSWUR6N",
  "key16": "5QL8Kmcrky9itKCahsKLau4LNuSJe9e65RKeVBJEwCpaMCxFf6shJaqyMD6e4amYQZQKLGBq9ArLVRKAyAcXsCrz",
  "key17": "2brHJ7e2xRTkLZ6hdnsSgpq6bjvFmCA8EuwF4vqrWH5xFgeP4Gx54FSgeGdELoVHwpfiajEQfQAqHi7tGvakVf4C",
  "key18": "3ZK7ang6Wh8ENZ7RhZ8vD9HntkipS47QasWUNN6sejuntpWhXieH8Vnc2mCb2e7HTNjWr7niksgTMCCTT9aAvQaM",
  "key19": "MBnfo2x9y6eUELyGL2x5y7hNnwrNQQUh4xBJ4qpeYhtWKfB8BfC9iBwMZKqBwEuSP6W9CL87gf3EktU11vYhGkf",
  "key20": "4PEjbVmW8m17xMByfLVKi6KgBa1nG5JKVQ5C1LkwZyGxkYvbp435VhJsN1XPjGNs3tReR4ebGSf6q4Ktko1Hhme4",
  "key21": "jG1CdJSgcX1CE51svMtwcd7b7AR5FvHzU1UVBWGCemwUnyTshTgcXkPova6CpjMhyjEERXoHdHqt1zHnRoSoMMW",
  "key22": "4GPUHWANjTTfSs7QKbVGz1aHaTuBW4h6G4ev6P9pMEZL6hb77asSPE8EVhBw55SEzAs3Ad6VWRHrE1CYUAxQfeRb",
  "key23": "4EgWvKSjKig44mcHmT2HxdXDrCcQ2uXebGVJghiRKrMLf9rzhmTWFJTgGVZBoA3T4XMDu8nCTfLBu3NAFy1ztehi",
  "key24": "2EJ9XQwKZk3NAwXMRxuoqs5NUqo2FkDVMy22WMYgooYx5JVTpraHTBrSQgtKijKKpgtHjs1MqdEPJ2SqqiRSwfiA"
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
