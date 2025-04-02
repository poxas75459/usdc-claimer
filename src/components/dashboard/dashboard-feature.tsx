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
    "2YyiHJRoDJpC4v3tCjZEStK3bwqwzbwthEjXdMF2VwzSFXCRwH7dw3N8R4tKUkqzFbYoLxGk5ViP9PFdWRzEFh4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKj8z76FjjWLsZuVeBwxBVh3eVbdf1npokjczRotW6QoZ6y5hrnfC7QZrn3vK7jsM9QEiUkf4VgXcrWeA4dTXKr",
  "key1": "TzPPwB647Y7fZ5Nds7Us8dKgQxPB73UFUSiadyETTX3NqxLkwkGS2856fgRQHxuxjJaaLHMMPwGXejWWs7DKoRk",
  "key2": "5zWarMmTf647LSoJyJoCmZzQz8TtbtpmzzMHbb1RcFw4d14Ph4Wjh2ed8d9Kh2BEoQqigC4UnUgokCWjY36ZFqP",
  "key3": "2espUYBzc7yLjG3y5YUbu3anRXLmPzft2mG3X6vydAR9MegujuAKjndF6mFTvRUwMuPm37xKSkmvV8L9L7mMZj2s",
  "key4": "5kzqcRXUpR3UFiUa1GMe5aEUXGJEqG7Lay6qqMEyJPSBvmtRCXhvKPr5hwjXFpRnhKMEToz5ZUAz7BtGqoGdhe63",
  "key5": "Qocp7vvEw3B7TCf6uX34bViXFLXBMKgSmPYm29LvEmmqBLVFbW7yJBqwtbxFq5YSwHBTtg7aMsoXMcns6dows6c",
  "key6": "5XDDNGydR8c3G68G3QBkvAijT4n6gjQLMMVoofkK2xxhQdeND5sTfRVKFrehcQSFjV73sHd5Fg6CAZUfTrR95Ekz",
  "key7": "5GScyvEo8ShMSZAHSdGn6phyg9RJdEtbNS6ooHqsLdepZYDn7bazCouLvQXHphaLkFvXMbhXYUxD4fffsZZ21ebS",
  "key8": "3CR7tkVaB5FQsYfcBC8kr97Qt4TxVkVhqxrmDdxHsFohyZrbY7bUNQtTUeuTMhx1duRMTm2YqNX1bDWtT1JJMa1M",
  "key9": "TqV1UwR5hcZhePuyQLDuusCy37Y9d147Z5tXmhkcDb2c9rdmw7U4KJ4T4pLTMupDehxzXLAa8nbdDbGXUVMRwtP",
  "key10": "33VW6g7iZLxJVZNANHsc3h1tHXYowQVUcbXLKptqF4YiJEbZQ5MYPaZr5CUYFUyPwRdBCf7Kz2cHopebTUbXpd1e",
  "key11": "54oVjfufXb5ubsRN5hEX9QzE9nKRHgLC9o4nvSESUYitQDK9Xjr43TQgokcXf8NR1Um8LQf7tLrdsExGWuPMsNGi",
  "key12": "3vmxT9PyxccGELqP1YFv4cmvkRes6w4fNTkZWuuXoLecr5tmHu78CjMPAATyjkgWuvC2LjgzvojtAFvuAwmVkkto",
  "key13": "DR6zVbw88vKD2XS86CKRMZnMtk643f9YVDetKzQb83Shg2H9qfYTSNh9wcaBD3a3AM8Aiy6RLM1vLTgspCza21t",
  "key14": "5C93dLXJ5GvmhEKyr3ZxrLyiridJkJgfc6UgEqP8CwsVRzkWYnWFcbaDnxzid4C4bokDMPB2tnzgCNqeyA6XqHye",
  "key15": "3kE3mgT6eTqCpd15VjnJbGvPQNUUSZXGR2UuU3RbjaQ1M6stk26BwoCcbitCiVMFszi7BRe27qxvWm25N7AvA9tQ",
  "key16": "21bXSSxDxakqCFTrqKpe39LuWNcPHNfaNrccy6XtNHi4PtZHuuhN456DGpnbXAJRtn7TBY3eZz3qnGRp8GqPQbkz",
  "key17": "2isRGaSJynwCu1xTThfqHN82HMnNgXin8akgfmTUzowbTANXs33DxrLwsPfUgnLchc7Sf85H5yhYt4TUX7Q3PQV7",
  "key18": "3FiZCSwB36kbB3nfDkxqt8ZYWY73Yv87ULmsZpdPT2dDwYBshGaTseY2nucGLptc74Cd9X751vF55m5J8rRD7zXR",
  "key19": "4PWiuk9oXCnVPLxyakUhwngUVZtLXRDZi8yAeqXuMrmFLPF8yA7Ln7vuZXJRUtPnngxBA6BRmuwvFstuybnkMzCP",
  "key20": "3ocZqnWtrrhCpzPHYjk5XxSDeHdm9fFPq8d6KL16nf189oX1Vns3fA11KwiBfRyv6wWNcMZons2q6q9KJq6AjSSa",
  "key21": "5RVXmnYEB2F7cU8ADGZrtdE1Pa6acRiZNwAChbSV8mxVTdq3aHK1BbkeLR1A4WZFu7Wgg2Fw73uQKjPfsegnVnee",
  "key22": "3mWyrdvC57CPy3azkfyCSXxKUwyNx58LgC9sBNjuhQM6iwDhwLaSCNnGEeJrT11Ug13aw9KyonwEDcYChzCRVv3m",
  "key23": "3SVrkPkBHjYouUzAjJcTNnJogCSCEo9FarAEz6A91XaMGp1XsCGxCrxpfto6gMKPWzuRDDhBLEZvFoJLjZwqLqLj",
  "key24": "4J9eLZ4CU9TSyY1UGtZEUvDXoD3CpJgtCnPfXiT2YD289jWQyRcnUaaLydRLWRedGxq4PZFsgm1KPhYrFUVcxzyy",
  "key25": "38tMF5NPUvN2yXLhQpkKNa26m2zvFGVcRkSLzRevNMWE79m8sApuuRmtr48QsSV4yw7H8dpKEhsxYH8DyU4cqDCm",
  "key26": "3JUkprxr58TXW5jbpxJbbrqxeZWb8oABhRaa3Pzc9NkwWezthjfmYoeGGvyVcEpSsBhvMUTqfrnBBFiMa8AdPtVd",
  "key27": "344m9qbUUkPVX2bVW1WM42t8oaCoQM3DZLASuxNbejvPQNHGvMKKN6ZvzurBpxXGmQS8vmqcmR6wR3iDFZ4Y2VSR",
  "key28": "3i6rXNEdibGAxG71K1NfXTkrDs6CYoy3YebmMp6FQ5SGyX2qkHPvc6jJqv7cAExWSA2uhqBjzVHcXoft4ptY5SDY",
  "key29": "5hk75hGvBSj1q9V5hAgYsSNxdfGzazoy96mTWubwBrkfBVN8UeMaBuTv9UutGuZbaV9bkbRMnFuuefAQRcrESV1z",
  "key30": "4zBTQv359TptMUBrp9Uaca3EV2gTfbMMhMrAaNwj2GafA1MPn54n1PGvLWSz3VmpYH5STvcmKfwNzoCvExhcdNsE",
  "key31": "3rbxpVGNqBD7PU8ERGa9dEZQ1arbvggn19bPQ7mg5cg4EPssdASeqHnfcsiYbFqHPvh8U95wgUX62NAxciMbjWFb",
  "key32": "5E3bdVPT2ckL9LSUC22xqq1gSAYNhsmJEBPnT8e4FGh3XK3ph5wPbFvpaBmTtH1FnW5gsG846wiMwVEEFj5HEqRc",
  "key33": "597V4zy2vkaEdfCrmuAznAwftBHT4Kz17jAkNwPPqH4pYgQyi5cv41B8PXqvGRSENLXEtKn8ippVRYCZ6TxqaRLW"
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
