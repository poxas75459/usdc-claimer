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
    "5obmnkJ7ZkJVDNci2XKPCp8Ra7qXSeNNZwuP7jsyUPtwvwsGjjA4cV2QTyNLgv4v2W8pzwNMX2SitfpQkFv1CpFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f8cRW9VszfJMYBpNyhWcQNXiusdyYKjTEtMxqGZtcjcoPW8LfQk1jsLidNSqPJyjZiFYz51whik2Lq5ZiMpPBp9",
  "key1": "2z8Y6q5reV25rhjyfQMHkDirBs8Y9rhRUd1sMRAJLTw6tDX4yHGbbVr5k8n9P2eXvmFipsv2mr7KETC7mRycct1J",
  "key2": "464x8JZ4a8Twn8qCwJtZ2J39i58wmcKJxRpvQTtCNCSuwdebawMJrEXRmBNTtYAerduz13BiKgjeKWR1DQUCikLJ",
  "key3": "2nak8uYDCq8LcruhYoEmTzsi7oHXJoMsjzwQBENeKBp3r64uKZdQRFU9T76TsGAvT1AdHHC7pidTPMjBadisbA3i",
  "key4": "5wcRrZ2xnFRq2FnturP3FYmD9owLe3fcQpu5EiPivsqwB6nX6D4JGFTLsPCNv2AsZ2ZKaDJrsU1N4emCCmunG7nx",
  "key5": "4LSFCZnWbDcAMc6LRBsoxfN3r86immH5rrmxG18Z8gztbjDSoeoiwh7tD3PMP1GZRXSo5Dn5213zLiGpjXTLYzVb",
  "key6": "2DhpFmmwZvSr7Does26gbu1uuFWwNuymg6mB7w7gGJ7xFCcnEDUzzxowg52QSCXeBqt3ymNCYuWzJMKPDtwu3t5e",
  "key7": "4RZb7mvS8bBcjqA7MuTBHCEfkYQiXXSozufBULsLjeoc2sJ7dv83WzazJKxiuvLh43P4tsNEZoDX8ZSurhTq8Eg3",
  "key8": "vQTTZmXH2ahTzxrNpHbTn8vikHphvKx91aGjRc5snp4BHWMVVnqkbqKmuCvS9HdjSNpC8ATWGspQ4vHHgdrAQjW",
  "key9": "4qmimvG2sCM3STwMex13kARr4181b3Wcrc4dgVeigykhfcJ4cuTNXkZzTEfdwubCBgjxBrUy74rpc6HpcEx6gXQF",
  "key10": "4ov2GyrUwDNxdgQWebxiMyguHDsgSpHgXXibTTRzA5tApLpTw982YHE2vUq5tsSsKtE1GnGN5znYAsJY3j28tQQz",
  "key11": "4BLzzk9gXyQygGe74MAsdk7ZBg2nmhXjrcSfMAWczGeHuZL8HjzVqPN65tyRnDnzuh49dpQrzrdSJS3RgDdEQSe2",
  "key12": "h5LrFysaL6vPgvb4ZozH97YScpubrxome8Pxoh2MURWXbPr4Euh6FTuMiNAKcmDQYovGGXbA7uke34kjEcnNoEJ",
  "key13": "64z6KWZALhvqadvfCMrjLfKdXH6ftnhXaLz2ix7oMbH272m6RL1zQfLXqZLvELXmgEsiRdN77WNHxNoLZCG6s6TJ",
  "key14": "vcGMPVTeB4nYTq5kp8bj52YqKNtZUEmhpmSASFz5TipJ6ofuA4UkUy3VFVcWivMf3XFQAVCRRHre15u6VVLoftp",
  "key15": "4EUdv3XC4MiEcbwWTZeHxFGL2EFkTZuBLadZExCPNmP533bwx4e5VYFrKWLB6NsKGCis2hDhjWpz3GtmJGPVvzi7",
  "key16": "5LtJm7rirJT7SHV3A8VEZH11GWk8uTF4xHzZsF3LAkHvVwV8Bs4wnDQTQUhveqqHWuy7ogKHH1b5Dbyn4RGBf9Wg",
  "key17": "59xke8m3oPryv1Pw5YdcVUGWqdGccT7M6c6JKPzrhE92NdbhzNJE7G5UgLGNknhQMnqkRm2gc7x9VSchQ9SV3wAM",
  "key18": "n4YXw8LaWPgBQmn5iz4QEmVn9N6evdYakcrxw6sxWhJNFn2RMY6HTQqpLSwt2MKUJwfYLMvkTCiF7jU2kMvxe3j",
  "key19": "3gD5Q9rW5YRMHMPVhTRtRSWDuHDjipeBfKU5PYS6YUccjq1JnksUDp7K4EACPmfHv7nArVTxhDN9oyw4LeqmxYMv",
  "key20": "sEcknM6ZdopzP3j17B4AgwvuGh5RSbcUgbxGe3jom8Wn53i5buRNC4bzNa8MN1TYCKcbhynfTNro5EK5edqKvvD",
  "key21": "3ND7C19gVctbXDGFRaRSfF2Udwvn371oLEeAhyF4d4xCyFap66ATATEWupp1heGDujr9SHFhxRjhUpyk19wR9oUD",
  "key22": "4PRuvK91DvjgtGYQQjwuDo834ZPnox4nW1XzrivsJePMNtAj2oVMmeZS1Z3hkY6RW9gjfJJU3atqoAn256SUHHFG",
  "key23": "5KaT4a8RJRwMNQMSnPqzqKeWD3WvqWjej1Rn8RWpVjr9Ep4YX3HrKuewrRuozJPzSuy3gvjeMLDGzUAXTXaqAU26",
  "key24": "3aUdqnzGUBCamEZtsDPDSrwxKkayBWVm1psMJ5GopXLRGQt3h9n1QS827Jvx22539bjtJZcToUCLjwNdf1G4E4K9"
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
