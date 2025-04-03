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
    "3BrRAbGxgtUpNKQzZDoinwxFXpCB5FWtUdVpCBr8xw2aXdDgkNoJLzbo15T4MVXasR8sgP3gqJcikxgAWyZqRhbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "665YLdKdbR8zLhknqki3sFB3exTLjfXUvHys9k9wr9RZgHH9w3omNDC9TVgBgEPzr7fSdnrsoKgYVvqFUMHMmHPQ",
  "key1": "27ifZv5XwRG8Qb64M82RCmSn2PuobqCcUL3ymy26FNyfXj1NXrcSC3VC1LDxMVMTksPenVqJyWcRPCFPPPignW5p",
  "key2": "K9RoCdpLxngaLfW1VMfYXcrVT5iDJ8zmzrnSEj32YgZvPxmewEAeUew9DKYmSNdwtpja3iNE32YQ1Q642Ma3ZEH",
  "key3": "3oY2eHJivGrUYQv9eAmDeN3kApkevhuAheHNNMw7EnErK74TKuVdWBj7rwEwidjA34Ly8kqtvjEdS1T5uHfN9cFo",
  "key4": "4ThPiGL5j4Y1t1XtmxAmz7NiwUthposDmbVb4fiq3j59PjMArDKMtw2V6xTBjKXP972vhHB4EQSPN2ngh9s1466Y",
  "key5": "4RfWhKzBQCrEXLVFNtrtcbovPgbnbXXsmZhmyH1K7KjBeGuV5h7piJibFWSkd8UWsFMV7ECYnTkzNm3n4eUtr2rg",
  "key6": "43JNMFmj8fWnRTBd7sh5eSKY5b3Nosi7Y9u4hxGRe9uZjZSQ5Duo1mpVWNkeqb7aoU3jqPtMJnPUMJSp52dfqRtf",
  "key7": "ieDghMDQVBBjVPZXiVgXX3rU8keVvcE6LG7ozFkGtGfgPERX3u6iFyiLRhJDCgmP88oLqeq5jXSz86Pdv6uzcKR",
  "key8": "36jXirQEvqtyPMCaEMCV8XGNTZZ3uzb56ucGvfs5EKBc6zAcfEjW2SesjdHg2svqYSEDfT7eRPWmU6Jij5VpJjt7",
  "key9": "HBR74k8Z4iYp6yBeJ5ZwRdfTZvRrH6ygxJtKkD3GGMjhEmeLuxt39EPYZRbpW3qyy4Fa9QKGXUMCkobctAx3wDe",
  "key10": "23zqNq1K1pajhMiwBztz9ENjcxUAXkzBjn6A5aBTS23Rxqgw8mWQdp2qEcqXWmzW49fnYJ3fgBknHbtevtouqdaN",
  "key11": "371jsRxQrVbDwhfhpfeiqHSs2PUx3SBtp853ERTUR5Ri3LbFngTJoEocQgcdoK9oimPMCzTMVHyhJF3yKtZvkZSX",
  "key12": "bkCnLzofxLYp1TeTfwzZ3G8pDxMHnToGHN21SqZBCH4KDBWUgWrfEqyA2EN5ipbTCwKhhAV83wXgQSSSSubZUwd",
  "key13": "4tyaVXqnNWhK56znL2zfztunafnFeua8R7HeGe2A6ztwdPG8aK63riYmin7rWgigrVdSemnht8TywBuNtmgrHvxg",
  "key14": "39zPVNQmy9v7Uuh2zTvPRHMYXhtNqFMCEPDgsYsUxDuSz8ipDMVMgoyhExAWvf2ydwx5ty6Y2tTAhr59PqkaoA8Y",
  "key15": "3yDFZ25MTf9UTnfd2JhjfMeAovAKE9v4XkXCeRxyEgaYYGnespiyVLyyrrYfk17F43WZMhuyMLftniqEMWC67f9a",
  "key16": "3JcqsickCJ4XxjtSrnfasirgAtb2sqECCcZpodpYHXS2f2yZHJtJbxxmNzcxQaupuLnW6qqfQfrHfz7dQTfJedF1",
  "key17": "5yWJpjYDq4QhreXX8V2xmVB2CbixerHBtrtBsqZv2JPFy2cYfq8xSXHriMAPkdWjjSTnuyiMgVfZ3FDmF9D93zzh",
  "key18": "5ByAQuY95mToYtoRrWUcCrhN6hStcEAyj5kbuAnkudhZrBCFgQtNRRh5sSN1xR3Xv3NX22xoxaVPL4GwStc9CVRk",
  "key19": "4gw6WwL7pXFByqQQZFD73MCMk3NhJ2d21XQ8oyGSKuPq6oZ52UwVczn4yJy2FWRiHCgmkM4knybWvm3JSrHXXDxH",
  "key20": "5hojfADvuBwwHUjX5AgtuPFvNTxhLFYs1Rfu43S6XJCEzSzZ9y89mUQSbLFwj26aZ2EeZr6Ee6JWaToJ9FdTsCi2",
  "key21": "4ePNjfJcX1D7KTzxUmnL13yXTkwXP7XYyaPRM4k2dtKMEf8c7cEKPdHAHNEnnWiVNBXgL27rnKFeQ9ee2YD9eUYk",
  "key22": "2h9iPbwRnDRefCKKVRisCM7zbMpU4EVTkmEjhwptHtvxmCP31jV9AgBFUUFa3fwURsWXwQoYS4pGPevFyKiy37Hd",
  "key23": "2eDZuYvPFMdtQtTNqaCSdpUBXtDQwA4xhhoWa6rkW7SiQKmnw5J3TP2aNbbhymndjf3UT3Dk9ry9rgejoA79kWrB",
  "key24": "35MVPgp2B98hHmS6pfxEz4w4ESGoW7o3jJ4YMHauKMem8aA65uqzjBhhKqYhZnLwEpEYKB3zSAB6BD6RGAzZ56oY",
  "key25": "54ApS3rKQSCdsyUj64pFGSpiMMUBG4PnMbAZxkiR3CpAKrpmLzH6YF7bVBnVzNJaimXiaTzKRj6JJXnKpSLxHqMg",
  "key26": "3fUmFr7ahiNwjajTtGzSxqvaeGCaDnUwxMkzrnhobbohLvghCrBZknDBHRicE1zDkfhUrZwjzT3ZxDe69ajX5h2L",
  "key27": "MrvVcpny6HNTzg1YmTdLxNugQH1vrkWVGEJn1sUUviqceiEqgMGNb1r7xmFDVjPwcgkS3AtRYsWrvuWcbCdLueK",
  "key28": "3hsZgB4a33fmrCxdUDdh4mtqRScaHstZPihgSBWZQnyFQwjDj6xp5ebTmQkUbmuqL7dtXZDG4VuWikyJ3dQbzcFH",
  "key29": "2uHw9ecUBi9bSA97DDdd3kMrX8Y7ZA1B9AXFP7TzDKzWnRtdJrg2GSfvKzHQ1mpTKPqpNAMUNA6699ri8zpLE2W8",
  "key30": "4vYvTMLUde9X2pZbdN2Mnpvpt7EkDv5DoBfxirKkvkhDtqDxnDmqe6N4hZe1XYdTnhmoHs98J3Yktmvne2kvLdSf",
  "key31": "2Pp2n4iF9x2SxRcykCnq3msnpNJTYE5rgGgR7v3mMSmriq7NMp4qbKQAwFcEAdbsN8qnuGJxSMPHDmiPCsEReevc",
  "key32": "4SVuQtHKguwPqVKz1BuPD9gnDNWnFcaqsTGPaUCJaqhQaE4yGZpG3iMdvYB9SSUpqmVuL7ycXiW2dneRUiLcc6o3",
  "key33": "5J2tR4QU6CFhDfVuASDfv9yTkgF1n1LrRsuoz49bXE5iXRaFdWAsnqmGcSPZS3SmQ4eZjHdkD7puQN1HY7PdDYxw",
  "key34": "4dVMDTWAUmDpbn9fDr4hZUvbKRH76E1NSLRivpHq9aReyffbdcrojYg7yYGtxYtvFRKGbWcjkVFGgBvBKfdiay7d",
  "key35": "axrZvaCUfnnQiUg5P7L79pK7eVaMkAu8r36AftrE8BUPZafyS4HrqcAn4auo6HviYWoiPNqDok3PQzNp8bEeBFp",
  "key36": "qouuaCVQJ9rgUCH2c4JJctBU5t4YVRjoD3TdaDjqvH4mxYsyquv3ueyRFeD34UeYpt2DZ8xw9SXDVHAdPpfLjPu",
  "key37": "4JKfb5L5r4bk43u7eZDitZqezViEixKptSZyqeWafwUSNwSwiy2KpZuuJBZpXFCZH9hjzpTw2wE9xTfovbgogBkH",
  "key38": "JVEQR3uJvWHemFGPhgobEtSfBJs8sdqBHsE58EJ4tA3qyiJG2JHNWpw4QtfBCekCE3mmHboYicF1VJt35MN6XQe",
  "key39": "2n3JZdXfEKPrCdGUG6q2qZjuM84igJiGpWFiZz6F4Nfcxsf8rvMjFmNe7wqBGrzbtBshugW5SDHywvWzp5ugCDT6",
  "key40": "T9c3rRgTVn2NGAVuvr4PBYrQwwGpWtsR73vkNTqqXaWcMqtPQc7aqRugSDL3EbU4g7VrjiviMtSFksyfZ47g2QK",
  "key41": "Qzu19AVEMUnewJ6WcksD9pKWXUe33LBPDgWAuCZqb29ByVRyD51ZTdwqiHVw9A5mXXsuhBdR1GaNX6PkaxkFWUh",
  "key42": "67GrZUhDNRLGGvsqzHLjKjws5G4FQE8Y4r1YJYR1M7p7UPw5V17n9KyjqbbNau7eQoi5h9MnTufAcEmFxKQcsrSP",
  "key43": "5KLs6gS36oS8db1RMhpWMYTjxdu3x1xtEf3TFzpvar9R2aMHvqA3Ze3WCPiWDnLiMvjZLaxZM8SSGgqkomxTaj4M"
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
