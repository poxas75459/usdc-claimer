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
    "38kG8xAhCUqteoCQpJrgwce491CRB5yJ3rKdu93WbGtUuqawB2Mvgdt1RzSzLWHNFUxossZJhQ57SDzXjVht1xgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sH6QzFEaC4HZCQwcv1EmRPnGTixjh8vwEM3YcZwhB5dRT6B6PNq3rdAYQvqnUy2zRUaGd4EcxeLdSTpdDPZ27jH",
  "key1": "5ep2KKTceDCzHp2cKwSpsDRUfsRXGpHkdiAUNy5aVkh9uDVSvCHAEMYzWpWeqX7uxfqX46NHdqdUDzMESFbr1dD1",
  "key2": "3x9i9ciy8BCTG5FfMJrxrfwhU5UJMwzDHn2FMXfCi4yY9yHZbZxHQCi4qypYaEXiLQTnVok2xVqqAdv2gZ8Fj3vL",
  "key3": "3ub1TPCgt9oMyFYBsUD2D71wsEpLQeGAXT9aeXwV7Jvs4QD55aCn1z7zqcqvN29RpG5jVX7HWPtjRY9ggg9YMHQW",
  "key4": "bcDBorvgGFaMDVZYQgoXtHXVo8Jz9GVed26KxNTrMM78V3aocR5QcMBy6rS44q2zg5ZeMCudKJN1N2HLzXDRRg7",
  "key5": "37y5Ap1yeF9zTaDmUaJC31UM9SZ5NUTZaR1MuJuSGMknsZV58JW98Au4PCRu1JSpfdPfR6VjYVHQmkqMR1o2MZVQ",
  "key6": "4AZ73aaCQBNqSowSPPbD8tdAhk1TbEXJaP27EMPM7nBwyvEVD93uwHozC4fbjn5Q27oJzZP42w1qeXUoQmpepegz",
  "key7": "4HFFCATeWfBmjdMsbbMtZ2GaSJJRRmvfUA9GYJhScTHZy4SyyYAJr8mYv5JgdWmGNs46J7wUa1z8wbTcLepuR1Aq",
  "key8": "5yoCEAfxnU6L8FCMotUhuEbTCh1hV3qYZrjJVkmyNjdK9fge6oYzK4nSB9i9KKvaTLW2MZsxXbrYvssYiTxnSYEE",
  "key9": "5EK4L6oqYV1KEsVtUsPQy3GS6MBRE4gDn6gxBrFLVqjSRCJUD29FH2VZXU1FD82BKsD3inbKMxfzSVvZ1Kg7DPx7",
  "key10": "4Z1n5vyMRo4aHAAL3sMauuRQeWp9PWTXq2b5rusWLNzTeHn96WZZ5p2qqQEk95UbMnJQsv6n2nx9VseH8TQCjh2Q",
  "key11": "2wUC53rY9oLtp6uK1o9k6LJqyBHxnTnxBEffKqz2U6g9KNJbqbzgstoLKhDyJRmx4ysnphucPuU5pt3BeRemzUn2",
  "key12": "4RBEh4LLnaCYX42cqugJwif7fSXeBMzoQ9PpJXaAErwfnEwUxTNU7NkCu9ZuaTmh9siZ8LtVUMzLCHrxqcjoNDPY",
  "key13": "2WYqCBfGrs6jjMEDuj1uZyS5FG3JNwi6KZPbXWeH25UvrADspBbfB1MAYmGh2aS8TwEes6cAyhAWKS6NPWJw1pj3",
  "key14": "3uExcsJZxwuqvTxhoaivJHY8HS4BhTTpsGpTQdbdADE8S7NZGXL4dt2Q5A3i3SRZFT2ieJouNPx2om8UyzN3qwMg",
  "key15": "2WXBtoawg22k5kdMEvpP1CmE4NaASCfSdzRsjenaXgVPCi8utuc3ioAjrHPsrnuPHQMXnjuE6DEX4r4PrVdEUMBV",
  "key16": "5ynYKTPphFNyTgxA7snMyd9yFH7uibhheeMuU9JcWzegMUtCgcLKWwn3rsevPzg8vcQzLjRtMsE4q3EWctmCyHdP",
  "key17": "7YVU7c3vPtpW4gSt6DVHf6DvmFHG51ikFbNHjZH61xpZucqkKNgVxT8Yzv3YjazdoQPDXQiGYjDMAGX8Tf163mU",
  "key18": "2iG1nU5wTEa2AgpPjRDPPaZAcEP8VEtR6z8Gu5yTgy8hAoW46TYF13UWA5oFPGq3Ro6MApcSC2X1aaxUU9aoyQRH",
  "key19": "4NgPNQDoQxutJHVHxLGdXhytQ4ykHq9uprCZCpepnvm294XfxU9htZvMTS2MPDnpqAktsbVXxfrU79hUxEgKEvkP",
  "key20": "3mRVmHpbeDLjCqgSQPSpzKsSCetCDoVBV1M98TYiRkGBPF9rpVBcm7gth95QQ5GzrUMHDSBttZYPaax39TY23Rfa",
  "key21": "n2UJDyj4Bq3W4qvfziGQy7PD8WmW5XdazubuewLemBRNg6mhGWpoFGVyC8fGGppEJYVwCYwUce2FevN5XpPtNii",
  "key22": "32tkJ4KZ2WTYwHLsS97d2DiSVzRYip9EDrDQzEGdhQjWdSxMYpPETwUnfReiXU5BXNAfkHSMSebUVLFCyXVfWhCv",
  "key23": "Ab6LjcGjaXpKPXGxbanAHR2A8ohcfCL2fCJm8mvmy1CYke3VKamYB89HUbGsynW2uKAYmyjPDvpWE2Kx8zeacLj",
  "key24": "5CsiEqXHkR5rkntdCmWbSqiQGdA6YqihP3tMaqmfeXdW5TMyPcLewpm9wqsu4bD3Y4EnLLNts66Uoe1UFhWM4Tx6",
  "key25": "5TmXm8fqZowdQDctkPAjy2QzzsvNVeRKJSgM6q9xTy98hagHSjhg8VHXuRPCKNDoPCWzUSWLAFDNuDR8eT7iTsSw",
  "key26": "4mfUZDUDLKUr1eLds1cvw7Fjnwx9ynTnF8rxFGLFAGPgAjmYkCbVXPDjpRUVWGaTqAwB6SsdDKxmMugtnGhuLK41",
  "key27": "5EKXZFpqPHAqqpBy6LGx3XiHDQVe42KbsFVEB5EQq42VGcungbT6kYuGNxaH5rF6JSfUMaKtm74we73XUBH3mAiq",
  "key28": "2zPEAigbF1nfQkjtrpstXooRvXFHhwUNGorMiQcLckYwtMGt9A9wFhZL6mcTXejMmWDBU7xrnrifcPvK8rkBt4tR",
  "key29": "4hZk1JGgsL3vRVyZ6Le522yDDfBzEuZ9iDFztrqgR79MRZ5TgxRsHMKYHsbLNCDLgSkPK7fGAAeCfnAijeej7wiQ"
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
