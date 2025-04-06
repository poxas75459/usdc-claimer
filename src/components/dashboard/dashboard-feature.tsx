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
    "XpJNC2PW7XqmtAcuguFzb8beWpoPdwzHf84U5Czj81aVYUszW14K9nBtvY6EwxPm1FGRa3faMr77xgAHXDA3aXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERzh2FGWWnQd3YNfapVTk3hsDV3NaAHPqCJcG8jH5Gusi4DNCtRg7wEWWcjPU5TT5xJp7j7QaCNotR86N4L28zS",
  "key1": "9xb6oYjMdFysPpjV3xyyz4QvXQZaT9DfP51j5XMASjdgJ9DH871kDGyCzmWrBEgMmKVKbVdMgaNRtuz8ZayqnSZ",
  "key2": "5t9UjSRHjpmigwSWookyb77Vt6WTKsXj9XSqQCcUqjuWPqq2ocLDk1bZvhJ361jm85zbs44QrL3Txxk2ivJB8cXK",
  "key3": "659tTtCu18gCCtYBweqEBAovPHgMaQpbopSWP7VKW4w5kJ8w1sNUhYx5VgdPp8KWSADCDMRHzG95M4vRmPapb2YU",
  "key4": "3mUf7cStY8hu3xEa7QtAiChvHPrH66YG3DtKUAcbNJHHPMpJWPm7akUkm1ptc4xP14S4t5Cpac8enp5YcYMdApVZ",
  "key5": "2Pmni1AkFgsNyyUV9k5G4DgUMPPEccycdw9ANGsJpza47EKNQiQ6B7vHLbPxUw15knZN1Zu2i1x9QqybF7JuRv3N",
  "key6": "283JHMHPQYvTDnQzALyVDM9n2CMAKUTMiq4dS8ka6MEZtmGxhysrmdpgwWVqEFVGxy6rgEUReRkzhzY1d4GSmZyZ",
  "key7": "5uLkYuVfLzemAjbeZ6jYXdzCtiGY285X6Ad9T1wbV3zurm7zC7ZVJTw6idKdVWYQ4qfEvHrRp3g49xkuzDN4RsBt",
  "key8": "4Z4yZNykBSQkBrxFbuf148xzXpgn9SG7BWNu5a3mbg1DmYsjVjA3Q4bPbhYfVAEZYHbg9gd6hfxidMNar9aEU6ze",
  "key9": "66G1eJdyM3Ehyc1kGAv6EB6wh2BJKc6ZgAz3dEH1yiT7MSXobGvKy7LG299QPchTZRi6iqVbWmAurECPNUKV4mPZ",
  "key10": "21FiexPtKtPJ3iurjK52QiZG5vDFmiUReYsFyiUhNaHJYRAZEXUitUmu1UJdp2ub5Hpf4JF9cZZPFgzLTEGUU15u",
  "key11": "2fAD3TmpvGZZgY2etjNwHSsHatiUEhnzbfKhyjAkqoKEEUxWdJvFz6iuN753GgHZhmnzaCD8seNKP51vDy1kH42Q",
  "key12": "3QSCfjTe4HggFvHsNwBaVggzKAD4DGDUHuL8y97gT5W1GvLR7ekgfJcx2bg68nCpTTCfRh8aNjBfM4WciLpxuW2K",
  "key13": "QQ75Rcm68uhKkyEJ8xyjJ761N5sDQrUUACP15Wbe6ddaZ9kpJSrQmgurikeMNSxU4buhg889NYo5ncy5e4jU26V",
  "key14": "4mf6UxDBp7hpgpbJx61bPPV1VHBuh3hy4hGk1NL17X4XNfSAAhhfZS4HqUroaMaYfPirf9sye7tUHXrDNun2ZHZb",
  "key15": "2Wpo8AstkS5HdVF7W7RcN67HGVCxiZs7i2NPXKp187jdtWaSV8n3CYRQ4o5ccZ1E7rXEiMp1UHL3ZtuAD7aP4KJz",
  "key16": "51D1uYZ3XAv5s5nnBU4wBiQY9HW4Z4yiw2tHwCF9he28CdiSyJHuEhqKTa4BTuQtpjbwydMYM552Ltgjgbm9wYE9",
  "key17": "3i5uqtTNzDJEX6tEyvoNwMfnygHe4MkVxMnAextVx6R8A1r4gQr4gVSyPUwXoi5gXJThKnb7AxymvQQBJ4HCG3vR",
  "key18": "63PKME3otTi3Z3FrcQmPtRm8o2agGG452zTzbG3Jqg7Y8kePyxUvwSjTyHpaqywsikCUmU2D5aUehEtvnXYGrD8P",
  "key19": "aAAtMG657tQz2EtsG3ocAaU2x2WcKfxCexcJRqHYoqn2aYXoJnCYjTpG4rPZfBdL1rPAhGq53hYdC8ywG8sRh4R",
  "key20": "5JQ3rZ87C56Z3AEMohG1ibuQKWFBNPBpJq865cMt35DkgikvdUrnvjj3VsaFJWQBa5eGTCaj1r7XaXm9a3RrLURy",
  "key21": "4TfnncAFqrbHw3zKer87heut1tBkL5Cro1WdCJBPVpWe6L9CJE4e3fucXZD9JyYCjpXbs6k54iK8dPNQXcWueSAT",
  "key22": "4a6dwRojLx5X3hEi3Hf7E9nDfimntYVBQULTbWSpDTdakBp3vcXt31dSaRZiHX2WwvgDSRX1KmRCG7Nt1Pbragkd",
  "key23": "5PSiSXqpWXUGWJ3F6fUUV4BamxZKGtPz2ctcKz7vRiU9kKcKmq4RSpbonN8CFD14Sjr1jroFfJsbXtGEDEQj6mGQ",
  "key24": "5z6MCDRFTsU5nsbNbxRRmDoszzBkXpWSV5bkGLwT3UwK3zvpFaLG6QWEHhbMQUACgvVVz7wxNDLBmSRhCjdgXMRb"
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
