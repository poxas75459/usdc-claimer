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
    "pLBg8Ps3XXiRytAZqH8M8et8v8BmnHe4e6o7dToM9JUWP5LhRz694n5gTrCDKHtkNwC3dw5kxnpqDiz783JJeKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WKcTRMaSLz5xtucZwGCMMKsYCdGh7RfhXB7VUDrvbum5S1VwLtgeb6Kzmh31dUFc3cyoQrcPpQKMWxFkwKdJnHf",
  "key1": "28g7jwcmH3ET5QvKhxFKz1scrGvCLFHbfVbCEHEtNLbbTGZp6PwKBw9B9obf3DUSMn1uGVRcSaAwtPj3uwyxgvpk",
  "key2": "5J8JA2KYGC8P1zKEoDrVSupNpa1iFRUiCNmMmz4o2CYzLwou1xhQ6iYxe5AR9fVVd4ozXj99GMCyAzXWtJGEzxQG",
  "key3": "FjVDefRCANPqoWcUKL7YaJWxs5iigd2HpHqxGByQxUGvk81paqsZK2LCwCG6C4dLSGUmnGxjavMYvQrmCAan8zL",
  "key4": "3M3GFp8aqFzu8kFsV9D7rCERDy8RGAjFAZ1339tkC5JZcx4j3VPfqszK7NcysmxBxXTptVEjgC1Zw7p9yEsTrfBz",
  "key5": "5qVZPsWDEoYGaR7qNGzLvWeq3jR2b2tnANg5VTwxVN8D7cnLvrmBtkWMTTZCvkMNDcXjbXc8eTWFHHGN8WqTHgbY",
  "key6": "5UYjt9MuosoNvbAddpxL3JvvEwGDjubQqY1pKD4AfFmNG9S5Tdoo39Ut63xRJcXYHiaEQURARCCPtvx6hnzV47ec",
  "key7": "3SzgRQCxPn41TBNQQp2ZWrwSmUyESuHwR5TNU5PfmacJqP9tKdZze1CvKbGHSWV4PSH4MFNC4DBFQFHYUVRKJXr1",
  "key8": "472BGGxieNvnCCLB21GjUoD1ebJrYoegoZCxJDpQxrHAdWPRk5UrbNBKTyEAKbFTP1jWN7z2YHSnQNWkh5AozcCB",
  "key9": "5iti5DXPCgx5wRu8pHmeSAm6fmyczaDV3RiieMUtwXcLm3J4eyLubR78HnXJaudaSAFjvsYeCe46VTQva6YRx3Nb",
  "key10": "4eJGBzi6qFNpNR6VEMVGcMDE9B1GF2fEp6rCHTdfHokjepjGVJFpefzATvXXvBfjztXcZZHC7GpcwGTRjXGTpywA",
  "key11": "4Y36YtXF4W4YSFYZf4iBfxQFsRrLdx8kuZkhp1psZR8CwsJEiRRV24ZkHNpJWCdARpCVMCZK4E9N6qcVXzVuCu79",
  "key12": "3816Qhj4LqFJGHQn16QKLjSkvcts1M2BeYd9g4gyC7aX34xcWNpLPQeDDcxN9xmZg2MxoQAVM1BTKPfK7LsNwLdQ",
  "key13": "5jKyFPPPBfoHgr7zeTXmEqsvsQ7d4YqRLSfh7QzC5iHNu1LFG65y22F1MCwaGwKfti98Le8Qmh6JVhsWJKPcabQE",
  "key14": "5jS7CuL1zQzk9JQ8gZ2gS5wZu9unZLwrHaaZKhcV6eVLGroj9ZGJuiP5XaKvKACVjjdSuTSuvdipcBTCENCRdFsG",
  "key15": "2RF7RstNAAhrRTqm3jAjQ7s8kvnKTf2JQqDihU2CJutHDk48rDzAGgDgCc6kCrL5YxsugB1ikRyVmrB69DYmBH7p",
  "key16": "dzzaE13XbB2oTgry6yJGpy2Ma2tu6Euo4c6Z96iDMRamszrXzCpu1tgT74cwFnSPJifQc5Prmjx4gFFkRAN1rGM",
  "key17": "4zCu3Y4H3fbX3dyAf7ofQdfX5MSS23zSWwgSuWRgxbmaMWPwxfELv8Q8cdtmQ6r7kmbNKiUEabyFH3bxyf4Ywg9a",
  "key18": "5NWzw88eZe9Zb2JaHq63XRCbh7msdxTU9Pfr8Ndf41zhVZkQmC74tkoAVMFWy1n4BLjuhDg6WtQumSgbbBjJXaMK",
  "key19": "4QzneVziucjA8DgZqofVgCjDG8i9dbANZN2BUFDAFtYEwP5MZX4kieAydytvtTTbRCQDQZDk3whhPaeZ4GWGpdVp",
  "key20": "2ouc8soTTnrT3KzruGEA9GEJtkAWJiLqU4V2whDE7CMRZ7AutQWnm6Xa8zv9GSBNdfKMiBKsGDa36jzrPYmyvfi",
  "key21": "5BkYgZBnPfkBDXGHpMKxRtM1iTJstgXhftf89rFvwgPrDaDS31a7ccb8KF5RUnsGLRfJRQfpL1huCY3pK3v2nmkw",
  "key22": "4KiF667YXDjdw2NZcCS9j8cYfrk9sgPNoCqTkZB4cgRDyqW2eVsNJTNWdN4Qz1Dwb8Wo3Qfro8h3xALPYmPiKMe8",
  "key23": "HdukxUTJXpfd1f6VdiPBDC31DYiVibemebubmPdp7jMHYmBJK8CHQ3MheiTw89W9zjmzLv8mPsG7t55qN7hftYa",
  "key24": "2Nt1DHGcKgoXvTm5RQpf3TK8oAWjvpt45Smvo7ehE7Nm4DbYAGfxGttyAi7YH5BBSBc4JAYcu8ajwCKBQybmBSwm",
  "key25": "3GUMpGhWwwXR2vKp3f5CGb5XAtCX3C4rNbh6N3VLxokiLxWuXMbSJ5dCC13oL5KfQjDtDmNLoJ4usxwy9mdtvgsC",
  "key26": "3qqypvXmZBf4p8aQHi8sMehCRhZ3dmEsoKmUtSHNdjTktxfUkR2rSWqJYBjmAcCy9ps26srMKo33LDFZNFTvTjty",
  "key27": "3xKk7zTvDwu4gKgKtjC21xwvqkVETZrcTGPgVFCrCwRn4VMCnLXy33nVtg8wkuRGmBG9LizSMUgTeNQdCvcaKtGW",
  "key28": "5rsgvoj5xkxCBQySZUJ8ZUkHV79h9gacFtMXagUwW8oihrSBzvVU5smqXbVm6V65cJdtBB3V5X3NGgSiabtkGAZT",
  "key29": "4ezBX2EGaDzdXSGmG3zy6iGAth9EzUY74xF7dWesvPhP5qhx9UsGHyXRBuixi5ptEek25SnMPk4aLJUv4kthEBMs",
  "key30": "4ZrFCBVDmsyfrWUpbD2j53nCRj19Hay1AqaEx4uG85wStq3iAkFawwjawMzRVmypGjC25RuN4saKBZkiTZh5NxQH",
  "key31": "3EZzqNv3E3BEDMSsCfsD95ArQz9i1WisVUeKnLvVhm8R2XXu1P8HJ2d3CnsQDTJg487WJuSNzMPJemBNpNgFEHVf"
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
