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
    "3qNBwiyrJsTxx8PVMkTF8SLTXvpTc3xoqfNKgiFWxJacma3kB4UedsKZ7NWKv9r6Uz1bYmBVH5Uhoa4x2Si2njRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2okvqTEsWEihZMGHwG1CnjSLUhPxnhXFZzNWBVicSRQhLrHD4LnHDzSo8YzowTFnkcojkdsKQMaFsqTBEBgVgG8Y",
  "key1": "478Fk5xyPEg6XGdiXA79ytk3mofWArbxGSGvEctid79NnjULEDL46BBV6YBXMKES7ndi68eCbLRkbxvG1wCh8ZyK",
  "key2": "4iVVHzTKdgSKz2QMzHCJWPiedZcQQZPSvxSevaL1MF6TQsaSBLxM1F2B7Hxw9LF64mYsGW6pDGFKVLAaxgEXyYsi",
  "key3": "3rtYTcRgFQFhbagAp1dBYeuBcs4wj2ehsSviXx1Uj5jQrkuRjj3FkRmzBHmEchgYrVntnQFwBct7ew64vxa3tLKW",
  "key4": "5RMs8dT59UBxd5SK55WsnQWnPeqJt4rg5xxfhKnoo98zJLQ1JmxemrsMxqRdsmBM24CKmYCKQqXTtJYbK5EJLDtZ",
  "key5": "62bvaHC5668eVGUAekQVCAaeyhFAATTrAbMmNbGATkzHtEt844ACu7cetAnEzGFPsauJX272bunabSjyBr5DZ7iu",
  "key6": "5hNy1iezHmbSB33ZNmYSe8BnGMaNg4Xe2t2QTBkb9bwh1rRmVnhe4KrQMGP52S2GDSWnx8Tp3rFK8r9hBdywq2gM",
  "key7": "2iWo1vFGEA1nH6cwBdL77WRqByjPSV6gRT2faS9ZsmXWu7oLfHGHn6ZVYiHx4v6spdG6mYs6B42KRpp6F4ex6M8F",
  "key8": "qZ6fgfx8ThYR9qXCsW5FdQw4No76KD3AvFtKJJhC1WVhiepf4GgoUms3nUURKkw4NomL6o5F3TPCiW948E5civM",
  "key9": "4EyX1nK8h9r2ag58MLh48WTVfnnqsUXcHpSEV1wy5Mmp1K394mVoFWgvCAFVmecdWbCkt4DzQbn8wBjXFeyQsTMr",
  "key10": "3TEFjodbLq1AifCdQomCbvvAFYamppL6YVq7oKanHE4tzm3a9ut8KFVksS3CSwUrJwisvTK5sWwP9zo3vdGEqUDY",
  "key11": "5Uzgn2SCgpFmgrwCMYMxTpoZ8owZremxy1ztmT9RHT2w9Wak7B4uJ572gDWidggW98yjsnMu7fVLiaBvX7AdpYm4",
  "key12": "4SHLzbafRVeYQf3XvkckK5Yvh8QSxmJoWBb4qcXZakCpjEhSo9YAC48ekZdMnLTWK3qo5Vgt2YTjQmAHJVWXzBLz",
  "key13": "uyXjWWfQ3WDGVvboiYM8iTwd8RLoe9wFvWE2N53d1PMrk36VpTig3EajWGXb96SisywGrnWEZpcVg7kQDKK8hRT",
  "key14": "qRg8y6gN5ivGqQx9D4zv4m7S27t4yjCNfxH4puFJo6xRjQ88ACxv93sYrx28QM99aDXj1SpLZRLRjdoMEoYv6aS",
  "key15": "Gb8TMTWARZqg4iDahWUbcwymAuDf2RdqvbZn2HHFdiyn9TPLSUMTwAgeCEo5MLKJc3FgQ25SWZNR6vXV4GHiDoj",
  "key16": "35RQsgCzwz8ii6TmX2QYuMwEZF2PBYDYYWZQqVpUhtzeWAXD1T8PoNc2QNUxH9oAKCmWkEXRrMgWq2f3BW8qyG9K",
  "key17": "4sTgLTLVhVnozUxJCoaRzWHkGzyh7cedidpomxYHbq2vhD9FSFQ9E2PcQMoBHX39AQGUofJnaFCTWddyThD3XCH9",
  "key18": "4rSHnF4tBjb7zeGyFugSbQz3qoftqQMLueCtBxGYuK9sHQdu7sPrQa5qXhdjQHfsd3MskUmKTryLyCefEJco1p5p",
  "key19": "3fgjqczqYGxWUX3b2HYXp4YmNvVoK2uS5AvqKGCHQFvV3bEat4pnnLQebHwRgZzXsGpwMkaBXvSNoMHiBepRn34M",
  "key20": "4jCAMd8Q3gAVd1qGXnXXH4QWNBmYfPnChuK5fXcmyrL7zeuEKgAUK3eFwbCPAvsDi55HQaoZunvo2PbvzurMXFYD",
  "key21": "2X6VdS931rnNFRQbBPGFrUs3wreY8JkddNp6Legj9ta479FmqNrN4Pba7KSrR6YZSBxd8eyUG8Uk5yGE9LH9rGKQ",
  "key22": "xzz8M7ysV87b6UDYLftb7E1R4r46CSrWbbu3ayKzC87xjviXtNWgGUsz81BjJF2GcrN17kGDv4ihz1HBNPRRrYK",
  "key23": "5duuTrhte2DJk9SbEsiVaSxt5xLQTcQeMH5PXQnpEUGCRGZ6eg78gs5sPbvBx7urT8fk2EdtYZt6DUG3gDzMAXV2",
  "key24": "3pXjuCchEiiJMXYMYrrmY5Yve6oT4RTbojMwXmJcgzAcWF2WiaQPRSR6aDBZSUrALi2nCNHNUN7MVFi7JH8o7kdS",
  "key25": "2uwpPCh4WyeAzfohekzwrZYpiqrZnvqBET5XhfQes5yDamrKBHqxCHsCmMpwoaireoPzCdtVLZXKerJXoFFHqN2y",
  "key26": "5SaNiFucHmf9FmzYVxNNnmTvzrrWPXiKfpXn5zPDrgtKbMrusTqG4Zy2wPrYeDfxFxSLT3YZu6saThxPQovJq5kf",
  "key27": "5XghDq1Jpj4bAoM7nieNGJznDP5FNJMY49bhYAhQ9aNa1Ppk3HkBUTpEwrZaK76c1S82ojLR9dfiesn3hb88EHxh",
  "key28": "5nxcmrZWfQ83xeMCFg4TxST1iDeX1zGW8HWkiEySVnhLn7Vw2pfTJcGsZHhPGMLLetdk5j6DLRjdgbyEdH5AjAMo",
  "key29": "YCYhG9ih15TJKpcPCL35ApZdZsMXEnGRHMNJPNQoXPipyVuK9zJhx8FCVA4G7qPEr9kr2GVMa6VJ45ZJgzhMhxw",
  "key30": "3jo6eDUsrCFuMiHDdXhEBR8znkNKdkaChdfpmMPqr8jcXB9fKNBNhXbpggFVqaNMjwLW1M5v5MMHf7F8LarwSoW",
  "key31": "5EqMMaacaJifbFgXdKAKeqf7EPamDyHFPLUzQWhbmTg4u3rX2XwDibq1apRuZiMLZnUmFvJKhdavDfdRHxqBsyn5",
  "key32": "4xKB8NxapMvFfd6XhZueKiiS2ENiL478hysG2JDgA9RrVRX8UsTfvvQ4e2JpRiVagnQwQPYU8fkg6odGpjqw73m7",
  "key33": "5iwjKLunVVyRHZMo9VbX1Dr9YYa5JcYbKs6U8sc2q3UVEcY3rntFtQ9WTmQQbtiu8fqtnPhx4TV8Pt9LE2TbS97d",
  "key34": "5jQM8GqbLMak2vCZumfQbJBAWHsvqtynoHmZn9PtFQEA4wNuqFPTMxJ2TWQEEFVn5PQLaU3vP6MH1VAGKcqe4V3t",
  "key35": "3ihq3JgL9dm8QqpSABMiz6GkDV1zMtTPwM2aVuLGiU7usy2DSCKdTEGQQBAbqYbcD55tvszq8BmgozR45bUNK9YS"
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
