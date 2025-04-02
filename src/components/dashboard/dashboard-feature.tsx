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
    "25CUa64qvZNRCc1ZsAFDP13XuwzQo5D8uMAbcL6ciBhKXumtijtPJdaBxGneQnoiNcomoYki9pTtxBAZsNUG4565"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4iQHmSSdLuMxiXhCJp9f7MiCf5g6feP4Gu8we3VvvjotHAGjBzC1HKQMZnbhwrArgEeheoPS6opobi7wuHkZKF",
  "key1": "4YvcHpNXE4KXERLZW3fWZJxdaPvq2esb88shP1CbWUgGgupS68WWC3oHFLST2fTSXBuhwxBHPaMj1NsSuyoJQfyV",
  "key2": "3kanxgjmifATm7hnVPqxk9fB2bkgVKQ2CzLrm9m8AKSSAmeZ6wA5ivSxgBMmTPbzmu5ECF9fiTopEzzRCn67TGEE",
  "key3": "5ZLDYsZPnwXWdFaysUyfz2mAqzEz7vwMVnTEt49hBQsYt6noT8nX9pCs6FH9EJ1oCAQ13urG3p3fQMyBwJFxLygL",
  "key4": "FRS6ocEMMFQvvLeuhvtRZhwogZBm1rjGXTryPQ5NcLkYH2FroeXwyxG4YbuzXukK6RiJknYurrbFwyeu5cGpe9v",
  "key5": "666ruC1PyCW8WpxnNWn3HiU36aufbNhgUfmFyL9k3FszRntqPEAbmbSt1STDoshZ1mr5JZKK6nbRVWD6PSojNDxb",
  "key6": "2PwTmBTv4EeDwUi2kPBC61MMXrrAbNdEva13dbN8F4tWyineBJVzWwpePaRii78ZmACMUNmjupUyuYL3F5TMsCsu",
  "key7": "PfQkLsW5pMBpH2NoVVRM2xmia9zzYWu2Byk7NVqTuc7W4qvpZvPxxm4R6BpJxiWVyY5vHMFCbrZA72c5xXDWHp1",
  "key8": "3CEWVg5kZAFUjYjRf5wdhqoR3zcysqSBocARejzUZPcJKrg9TjjbQMLgRGcV6WQbvDoaV3wrPhRcD89HTCDQtL4v",
  "key9": "59vD4p9ifCm4uS84yWPVU9qQpM5EGTYThikRTzqnXSZnEcqDoqMjvSpMdzYrmXL6amAhhiJvvvAQZzjk5EN1sxvD",
  "key10": "66yMUDgFcAnQtpiUZo7yVSPudyhxqGqkGZfEC9zbprEzBAqGRKUea9bYANz2WMz6ssMN6CcnkZntEcnshsUBdxXf",
  "key11": "48knfZwSdwdekZpjdRaHHJZmgHc8B5x1i224ouagfkAmBgcp4MczPtXeWJeDW62kz51G11vXSRtFdi4ukF26LCpy",
  "key12": "2taY7fNgNJCtPP1NPkTLWQyNmFLdAePdM4MAg1ooKN1u6hC72RE78qn2Q5q4dhrzFzMtgy6TZGezVu2JRYhhvaYA",
  "key13": "33tyW8NJcMsxqvGt91XA42Q1azLGs14Q72nZv936Mxf1i5JtvnKLnBBvvejcsiuKTY4PZCEMYsARwbRoxpT73gAc",
  "key14": "43cvppegjoZFxTojTP9EELv5z3zQSwh7ncr2Ja78mvA9GyYL2kaobpWw9yNYn34gT4rnx3z5mEdf914aqzG121Ao",
  "key15": "5i86ee6hpGrujNyQ8BsDdpnD5gMU43hchoDrgGiVfwbpGKeXCRJHbop7afcP9WEXXVzzQrMzvAijq8zF99qrG5fs",
  "key16": "5J2KpT6mWnJQBAa3m5pmBW7MUqbrhwD7ie6uwVFBqZQCWyihugYJsCxxpnjxT5hQgWuxRpgAgjy65UW1c6eWX9gB",
  "key17": "5yyw6gbCnoDCh4pCzB48qiXZ7WgZBS63cGaNZgbJFZiRkdxheW5tXYYt3sf8CZgZNS3ptA5dYrbe4YLYSzZJ81Lj",
  "key18": "2Eykzw64stVvqFu2op47AMVqLzKzKwttWoQJ3H1B4vpzmKaaSsvG6vALVDaxD9Gq5Uyrkrnu5ewddVEkAWEgBzQ",
  "key19": "5oBBtis37NuLkftDKN37AXJGwDZyWSWDTKyD1kKUCV1xPpr9ugq6fJhFVGVTnQsrqBjV6YJBzwDjxWv86LiDRmuW",
  "key20": "23PjQKwvg5jGduMhrveSXZzQXN2uXADLMeQCfWbAxBFHx3FhXwPyJfMSWkCuq9iWDNjRygZBiyJTZFQy46HAaLJB",
  "key21": "4F4Lc5Bj5sVXCxyDUxtEDh6Pta1ixQEfWgipazSUVWrpjNXyqCDH9ZtUoRNk7nvhaC53yUuzh1EPR7H5KBXumoFb",
  "key22": "4g168aLVENxgd1M3K8WYsXeFthFing6itoT6xUm841uxcWcfrPC1sntuzLGjkmTACJnyg89GQHPEX8fc9bBNE4CZ",
  "key23": "2AvLzFzXRjAwmFzCuiVPsX5pPevp98CP7zLGXNbZd6trD2UEGndK9d7sgt87TbeTabRraZGZVVFJ4wuP7UgcTwqZ",
  "key24": "3snWMFgZMKjbBwPo6kk3GeDRyjWqUFicgwVogE7UeiRjsipqLTWeG7wynpRzqt9s6suRQJxSqk1Rvk5HnDEkaGyD",
  "key25": "2qJonEg2soQPe2nWCU7e5JxXgkPZUuDVnfYqQwxgrAC2481ibMHEKNbxP8bFGLNPPWmTbQLhvdMHqhcsJbgg7Q6d",
  "key26": "3bVJEiwtM56gy85Rz1q4UuVDwyLiDdXgjo6AfvhkrLsvMFNFf7RY2qPDD3a5ioL7zAXawmpLs1JrfixuDqpFU14W"
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
