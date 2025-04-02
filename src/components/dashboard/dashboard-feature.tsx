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
    "3VCh8WE6jTkvNNbGx4tdYJRrWN4eRrxZ3RepHjqjFbLbgxNWv5gx7xySQKWYtAeVBYnhvzYahWuuVkPsYDNwupMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqFGKdGpvuWQFx2ReyrE1Uwdhv3wai7Pi9yri9JnDx7Cn1tDtArfH755ByeXkpnRK6hdspyckt6RUGuMDaS4z3k",
  "key1": "2AjTBVTdNmwrpxExEWhcHqy4u2iQShpBXeXdmLnnX1fzq4mjrCGyMEJTfcXYM5omg88g5qqervJqvwmyhG5wLWwp",
  "key2": "4PsxXoD6mXYwWMQYaQYMdnfJebyCa3roG1sHULAQsUNdQaKK7SSaPfcfsrgucaf8acdZTdCQEZN68aDUvV98mPZ1",
  "key3": "41vcm63nt1wEFdmt4GXDQRr4WgvWJtjootzdVSag7JJSJyWdFyTSK7sLbMBVW6K6dCwSwMekHgzhSqZHfSk8k2DK",
  "key4": "5R8UzXSvsExuWPP7Nbe6xBUS2Rg3QSce7sPPvmo8G9GdWyTd5fsb4HU7vnA3DUCHgvzeknbF88BcQGR9voQ4Ek2f",
  "key5": "2gfzSMiWUziWmNoSyyBgduSQnq5P5xaVRbDRkDVhyM3SHTV9MNQQzzdnAwfn6mqseyX5oqG2xJf8oA6Bdj4prKyo",
  "key6": "3qskvsa33qS7X7Win5WroSMXaTZ34btRdkydLDTpd3fnk6XaXxKzrKgcpWQUKQuoVhjwdhWEhrcJezZxwfFoMsUE",
  "key7": "3skPqodYxqepg2jHhHLFRTCCqWZgs98UfKHY56EJwqSXotaEcK5kgqf2fAgsvpDsSHhiSYndkNKsA6aodGodBDX6",
  "key8": "5n39mxCNTHCoDffeuHtudR8wxQKpNhF9nbkbZAPxqYSVq16uiemM7BN9ZyCNzjHB4oPP2cjmv1Yt4qHF6NBCCT6u",
  "key9": "2X6UZ9oniM9knMKxRyim3o8iBRJd3bjPLBox5A9ntkRkLJg9trXTLfu2wSLpGnMTB871QZXmu4SvB3Pw2if5rq4P",
  "key10": "2hW6jNVxSmK9MPuk4xnrVnnvBjip8xUayDPVb728C8qy3UuBLQuc4wyMHNMSGzoDyaRCBvRy5YRq4597hLuaqnJ5",
  "key11": "3XJ88rgPXtkfU6kY7YYQafQymwhdGqXFwevtqpFcbJDWF1VdLiqNfvofs1WWGjo94x5W7gkaRB8uPsFu8gxKePWx",
  "key12": "34A8ho8FitjYg1yENRLzDGmpfuEKW7sbJbGt5eLJgYbS1o7wagvnqHrko4Yr5K5Ts49xbwBHHzfzaGoc7VSgJvLR",
  "key13": "2YRjXNjq5g73imPYFHQuGfVJepWGzrphLaSuXWnX8FpyH7oUfr2MHxnFaGyzr49xrTQz7h68QPnLJyH9MMgiPays",
  "key14": "3M1j9QTsmmApVrLUEE9RFjkV8oedgCTuRdbXmqBM2or2VxAaa5mGSoXtbz9aEKsQz7PupdTVRXrBp7DcmBzywY94",
  "key15": "3EQDsAH3ReNVNF4ckpdvDjL1Vh7FLMp7FHHjofgpCZ7qWT98QdWzcNGGJosUamNWe9LZp3ukW2p7cvDFDvo9aWAp",
  "key16": "4Bmbh9ZVhAKKFNtd2SD37UmkkVxWVLthFwRbStstLdqL4tUtFrLmov9zfBVRHbGRraEFwKe9NsxB5Cb5DQ3SMNKK",
  "key17": "5tH56w8CMdG8cEnGQatBZsZV2kNVMoBrrFr25ECdS6WiJkhdhSmGwk7yERb5ddujxVbcufs36183ekZ3Qmaoq8G2",
  "key18": "46VQgY1RPyeNwF8nKQS6npJEKV1AwRLCs1RVtcx9FM8ZDN486SoidNK6nj6AD8PijMABsW5RArFAuda94m7B3KuV",
  "key19": "ynv7Fo2WWyvrdbmvWzs7CmEKrL5QPtmtgoAdHt2nNXdhiSRzi9naztfuJhMHoh2HMYqPnNcHRNEZGqLknPwgEob",
  "key20": "49SUtRERsWrB4pCeEMG4JurrvQzpybpSLKnQBMzHdbWNER1qTWwwe71vUEN1FybcjU8NJX6CDU6F8dAsdYeVNPt",
  "key21": "5tAAzktkwFu4KRgUXgX41Dyk9pKQz8SyQo3GQFefdc2fHkrvejGhWKY8hfmTEvLJ4s8xPn7aCpZy2rik29YsLri6",
  "key22": "5TZMGTXKugrXTEhBdZGkqJryhzAbY7orNmvp7fqNQrA6HnBtGecMUxHA6HWy1truWHR2i3bJ4nwtsnMfpLCdWykA",
  "key23": "5pTGBVxDfgVTqriXB1cP59ag4w9EKMbJ4r5wNVE4LBHwJFPzhDNW5avhLkUUEmNt1E86ECYhsJn2TgyQLdA8bgjD",
  "key24": "3BEzmgmEAop4a3W3uidT5JZsT4MupdsWSdBjSZtaZyxddVGd7ktVS99K3Lcu7k9xx7Asf2cEEtdVAbrVYJYrasS2",
  "key25": "3i3eBhhxY8ViSe9cSWBbW167syTftvTYQphPACUAoU5AWHifmAKqNHQGmipSwo1xigHn4vaWN9Y7ZovW2axfqE5x",
  "key26": "49BgGjxhEzFX9Kb1zDbCAnC2m3VQmnjCDK9GKsomxCqdm384ZhUdmLGERrzzp7ji4iwzTDSdoxMuBZs6J2pz9gji",
  "key27": "YZjRcvQK4jwL9KcF5k1Nhaund2jKBV2VVE5FQS6tF5MBqjW6G6jHTA7Rus1XezeE3tmSEGfADrxEJPL4RN4NkiQ"
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
