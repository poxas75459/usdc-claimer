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
    "5aDcqf9DpXE5eSBrdr1ZSd4HA7JkXBMX2q1MvywsujdtKykWjdf7gzeL431jgwrWbRcNZrMGZ2RScsBxFSgupTBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39yUgyPE1bFWiCRcQee3tWsktPdcTbhj9ewC42Bxz8noXm1WU9TTNeXUoHsBz4R9wk5NJUmKHnZZ8Luu7Jd8j2fH",
  "key1": "2trkXFSC5JxC9EF9FSihNkDscY6dupaD8vjJXzKpEXoGwYQtC6oEFRh9udYgURSJPyDNmQeAiqGdkd9VnLfAhL1B",
  "key2": "3KpLCoET9JtWB9VU4irPPuk7tHNmW6CYC4xQzfGNGyFCgn5ycaUDPAngiwUDgJrUdxm5PQ1sc9DsWBxn7cYVV8nC",
  "key3": "57RZZXKdFEiBiKPcJq7PtXNBXND7TuaB6WPD7ECH1tZwjTHUYRToVvjGNpsUxC2CnavV1QcxxCVSCojqs5nBbnzx",
  "key4": "3Fh3Pg7x9VFhrc7rZ8MRGvwwzGR1rVeinbsVWfP9YEW7SDvgbxGKrmN8hhanost7vXPntKz618UdCLffvkCXptms",
  "key5": "EDrAuJHZwxDSAspLJdxrU2HL4Jf3uA6wL2jPdvR4Fwp1QWJDzHjeuMdTP3iH8WpVaV3S1QJ8TPwb6BamWHEZpUo",
  "key6": "5NNAjZVDqxToVdju1XdfibRGrtUN3xQMkWgeTzQenKS4xSheAQ9MVVeKAdYL5XXXt62cWmkgCjMgjgZ2DzrSrYP8",
  "key7": "21q1nkFmcFDocENUdAH92GyuJhqsS7Amf1gcTjWdyYpGuww5gwr5i32816iRBjNeovWjcoUfdobRs56LtGzrThTS",
  "key8": "2f5ZgYkKnXH2vtSiVYrfRBANzDMT3xHmZ4ybEN2WEfpWYC7aFA1zrkL6y6AnA1Lqsxnsi1ZhnRLdxHvwRT9qRCmL",
  "key9": "5nYxpNFyKPFbtigVhB7zGSys9UH5sSqwWFUBoNEYXZvnvvTQ7g31ACJnprPwwcXYJEkYqNHHndJvDvzwhj1dD62x",
  "key10": "41ST3UkxSM9Jok8pxj1rVdY9FCPr21Ywyt1W6orsLe51LMDo7Ej9C7youGSaDDeYSwEvi26tjuW23xfwG9f5Lc1s",
  "key11": "3pUTzc1vrv2snEWpEreCedN4hLKFnf3WSbEs3W8caNrUjdFLksUB6m4aArBrXoH3pr7drJfaTRMHn8QKanG6ksHD",
  "key12": "35BmP9ZdLGM986cw28v4CxVDhR4L42mYX3HTn855BUUiiTxQXqcRMv5Zgcd5SW8Z9baxrqXRtrXRDuUnGBzqjX1t",
  "key13": "3A4nfX8tU75GuXirRFBGJTjemP9VGaCVscXMSrEWMPEMuqAyGXmVFpJr81gozrzcBbh3EjKrjVZCnrgCV3XGxWaU",
  "key14": "58C243dGHvsuwMwVw3dnE9MsTVA2eL3PziYR8wzrgLxvvoJWFjjxq3pm1FdLEpfvhHmLBWjcJ51WnbUXN7RycEKd",
  "key15": "2ur8FZhRcm8Vhg5ssZHSNWNdR2rVyUXvLbPFvP3T4H1mCxMwUTVNRigjtgf3vF8auGsVawx2q5GCQ3rsmm3tWmee",
  "key16": "4zAy7aD8Aimac3oxJCVPcYUhMK2dKvi3L3N8rSxRCTCCPD2vmCo4qjdiSfmE2HCqNStmdZMAQTd3Vbj1qe91pFrt",
  "key17": "4rV6kxTE7XKqWeZs5UUnMiURbpUvpiGfkZuXf1d7n5wi1HcBjEtAEGmPVruBwQLbTM6d8Xp3p8PgyXu8nCETfyhL",
  "key18": "41a76f76iRQAcHdXW7nga3fuULedEde9CqXNnqjeqywPQBYdpUZNsuDbBA3g9KHEcwTTGe2q4MuAZtMJCsNj75gg",
  "key19": "3fzBJQb1wQgBVXvy3DJ7QCVPWKwqsVGY5TQKjVKCguVRmgNHwhu7KBKGkCtVfkVNsbJKX3bSgp7v8T2tdLSmo6aT",
  "key20": "38BSwcx5ekF7WR1CHsNuZDRVTZXz9omyMvBMU863Gacwj66RKMkVMfCsBojzX6ZdhZBzcrFT6R6DE9Sn9NQ5hPUM",
  "key21": "rTx5F6f2oNTVhKL3ft3L82s6fAxZYLFUnHVNHKaJrNGejGBo67LJUPkD6kXdnXPeJTSpJQqkt3PUrxmr3vpW9jH",
  "key22": "5trjSNeqiRfBfLTqokUJL8AQV2DRkYJ5f3TMFWHWu6gpTHdcmv1ZHSfcM4zvQRhBGqAYYPLXV11Y6pkAZUiFJDZ8",
  "key23": "3tnWrG2mE2bU5nkh4Bkx11bcmoRhRGXn5KhVSWhYz8kVus7BrJtrArgmuV9KLGxSeyGmUgYBbsnw6td4bBxywS29",
  "key24": "5aiNFiU7rojhfsw71J8M6Y9HgbPV3P8SVPhzsGZt7x53Cr95kBsHrkBnZNPVCNX2aayp3TZXP5CJWdLmitgmZgoN"
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
