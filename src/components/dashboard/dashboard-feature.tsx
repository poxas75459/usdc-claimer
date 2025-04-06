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
    "pxgUZ7rtAHNwb769DP7gGsLzjtqfM1yfURBn94FEAEF152hwU8FpEh2wBNRGdneTH8PzMBqN9o7bRFeTu3PGwXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Up6ppXwdMxuwL5pms7epGLDFwV4CH4918tYnuP3CueN3JSNesze22wQNLAko2UND2tCd3JNeUSiTDYq2Uc4Ys5",
  "key1": "4Jk9eYbTUsbXCufFzLGLgG6MrkgQc8ESwcW9v8TMTPxLn6hNFeja2XFkktEicNeNzS99oQzCKMGHZQ4Psfd3dmRR",
  "key2": "bVuK18rRnZDcgS87Mt42wuB4ntfhRi9wJ5y2rcAycJ1PHW1D36HMRmTkYgpiyCAWX7QGiTGU7N38aVz7twKHF3h",
  "key3": "3bAsBxecj8u7cb4cUZXAbzq91djV2xSsmwUbAEQyfpVpsARwBPhyJoyNaKyLkWi1bQzRwsZssxZivEEiM1sbzBST",
  "key4": "Ek4x5KfxDghDHvxkZv3gVXN4uNoyrFSBHgqSdr5FE2G5mbWunUCAczHXQzp8gcBQWWnEi8wJmrKXGeD37c5LuWQ",
  "key5": "3y3yET1q4Mva9gR829hRQXwTZWvtFjeLeMtLry34FKboZVhv2GZnYH2bNiXnSxFXzsheWDM9jiixr6y6xGqAhpyH",
  "key6": "23Zg7LK8HkkHYwF7U2PbLTs3ZdFT8qfnrsXmgZBm2fxQqmB5SAd8n2FCFj8WzuPLP7C4eiStdYV9FAfm3Z93MnQ7",
  "key7": "3xt2PHMq8PvDkBhB2A3sSggGynpkSxq3ZxwzN5v1X9fxW8FNXgYuSXXkxp42KYX4EksEexvtwPpAxBnASNkUUdrj",
  "key8": "4gceqLv2RH1K7FaGNcEAWjWQnMGEVyastb6bkXsDzk6yiUopEdwU3A48UPnS1niAERfmY5V7cFED5no4TFSdKpK8",
  "key9": "vgeigfc8mySdYRsAL3kTYtJZ32wgwhHUgd7in44MapEJzHJjSksbVSrfmjzuiDo1Xf3BukDr9f2WhTKH5S7erFg",
  "key10": "5rzenVSp2MoFJytzeXjJaeGocbsaEvEPmj27jHqoCFuMMXkc3YsMYV5ucPkwV3jqv4hM3GgH5iWTGyBmQhvRQLNE",
  "key11": "2u3TSbtBZn8EiCiHRXuVoWAGVDTeGcjjKtieymesYg5P5wuUvUQd5L7um3NzAGkPW4VKUK8F61KsKpJWtermyRcs",
  "key12": "4KWHua4vqTJn2yizJ2Tz22YPq283tJx8JB8McSSyQFXKoGBYiXgz5g31cq8VdBH71nSFqRXcyZUZiF8AB1cdHCEZ",
  "key13": "2TWJr917iUnBNzGbDchRrg3gGxWmT3zKH7brYrjz4hh36SwstZTTxmr6U2J7YEs4SPx797TPahu27y2K6xjTa7Bw",
  "key14": "22wU4yjiU4RuhnFSs8NH7Yjk1dCnwvFs2CKUPFcLaba1JzHX6Fr369YrnwWrfQH16MovAp68iGEWjaZkXGSscAxQ",
  "key15": "4wHuGomKAtEoLZ4qJ8XVHLvaZ65Jzc5TrATRYmEMJxKHe43Q5sELpFLckUgGeRUtEydLarEknZ7i46YGFtLtRRrE",
  "key16": "66LfCBWjv3rqdNv7ukXLbKfcQo26s3peCZY7Yq9nUcSyGqefXjMxYLhirHnYFUwSnJyGq6V1wvsue9QfkJdmGmiv",
  "key17": "ukmrkNDT1AcNV778yq7zRo8s5Qg5JiDM3aMrqcXw82bZff34mKEDQXRiifF5KqyCbQL1NANAHiLCJzn236ExWw8",
  "key18": "65GnH7j1vT9zZqmMns1XD1JYk7iqU27Hm639GHmcRBSSDfvgVGkUyACtLh6rr3vFvc9L9tR3wTqQPwZDgQ3s8k51",
  "key19": "UVTw8BxTE1taAG1fYizDTi8KzgiFTXwc2jY7YgduG8EhEau4o4FkciojP3uWVh4ba3N3MUEs2bokcqgcvcM77sP",
  "key20": "DtucRV1yRmLxXLhB4HDu8zkfyunTeJmA6hgxRLisF9t6mErTG1Zmn9fLqrajx3GSDomgg9tQToLfBUcdQQSD5tW",
  "key21": "4mTH6Uw7X7jxafyXCLwgAbUzhTp9a5u4Ks2KJGitAqzm8tj7cqz3XZySw8WfyqP3tF4MqCpuQ34Todon7FuDTcNX",
  "key22": "VJMi1rDwkuQP9VR9MGKaVXk4BgkAE5kCLkwnGEbJ6iuhixfz2xjK4tJ8YaBKex7XsZgdoMwWBmGpjgBxmeamXEf",
  "key23": "2u9jejhfHhUZS9deFzePPHcQwEmy4mKXhia91EEHnnPJa7iHkdK8pmxWZx8di7LTmUMXHa3ADuwdvk5W67ZSqa27",
  "key24": "MhqM52TEtNFPv2ACSLUUTw4kPonzo2hbrmvGNUcHRcMaWS5Pxe1d3XtdSME4rFLDJqxvTQwNHhj9s2hFzkkeNFq",
  "key25": "5GLniSRQvXeheC4CE2wTUxitYLnfbsjcLyf1Cdwn2fxzjAFDzfcxPdkYJG4tKJnkYhKaBixjaqfcSVFKdFgC1ePF",
  "key26": "3UHNpzFVtqTZvVCeSTLfSkTeVZyyrwuYZgNXSHiyJWWeQLPBbhruncC3Cn472Nra6W5spa2DdUkJYCHsqCuSw2R1",
  "key27": "57CMjV9QsnJfshV2Rpr8TEVkCqwr1QT8moX4hEs7AGdszke7EPR4GtKcfcf7ci4VTULEpkn5Lb1M2GRBCqk41iA2",
  "key28": "26CMzmmxSwDTWsWXFAZ3ncFtoCiGgmHvU2CJVPw6kAxHjtZMKJbf9g76TKtFYyUwweSP1mSsx7xfPp3x826HiLxW",
  "key29": "5QUWGPUfhub9oBCroVB3mTLSNPkYPEyPB8dyJZwGX19NBB4GDDCzAoEhrFoCqCFkzYQsx41XQmG6oeoSjzxojm2v",
  "key30": "5vPX7UCjYXG62PPsx84spCkQ4ncLfmYt3rvQwYZHJYCtA5Ys1u43dyxUSg52m5E1Ugm1LwJspELBdFMrcp1JQdck",
  "key31": "3CtaBrSWLiCDYNMFQnuAdcnT8aCof7gvi1g1kkzmb6kgVKYLkXtnwyu8VSsC3H9Y4xPLG8DKWEULHKT2ceXWYes8",
  "key32": "3MRuq6Ue6eKZeeCDs58WghotAxLaoDAioLCfh6XgJCh2gSRiaCqk7mVxqZjHXSyS29ibrWHdMSspx5hsNRkAjysh"
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
