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
    "3iBoJQ58181tt4qWqnetjdoP8YivvAh7vwGayarwcBbgzu2igGJV6isqvt6ejcYnJ1adixy9PNdpRmmCCYdPDFba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N5V9cnuU8dK2eLihjK7bNX11zWyXM8kFGPYVGKqWWwR96WoRJVxxkmisisnTw3Yd78JYyQnfSvABbzRewrKfTrZ",
  "key1": "4szAH9C8Ztg2rs4sEp94m6EgBFeVETQMjJSB4t1SeFyUfRU2JJzzvvmT6zEfPxfYj6kaEDDroiDRqqzpoHgyvj2y",
  "key2": "4tncXEgN24AXy6BUffbfh1BHUnDo59XwvcqyPexBBXNKaffL9Wjz3HgNZfeGV4nXTuB6biscNpgEnUgTaNm6m1R5",
  "key3": "9yehryBbqwVoZTzRXDcJBsJK1KWggx7Rsscip1RNifBmX1QqxqSbjcFFVYQxdZXUBGN3TYS2HGKxxwUitfoVzXh",
  "key4": "4oXEnsyoC4iw2sqmXzp39Yhf9T8y4nXC8dCNZVFbTA5Gd712nvDs84mRdnrtm3xVthLQiLYKU69kDgpFvHnBwpbX",
  "key5": "36YeTaX7qhtYUzZRzihz8MdJAbvsToWoohfQBZGcHvgxBDVcdemZgFNGRPk7Uxni2PzFVpWqAdXLCtTqui5FmuPh",
  "key6": "2SkaMiNBfLcrqfqS3T9xr1DC9ugGKC5fb98onJKWeEnX1HyQorya1ehPe7T7gdVU8HRhf7XmMD55qS4Bg5zRJgkJ",
  "key7": "dLX1nxZX3Z7BGVWRL1KHSkwcBBKfUxfJGSHMXBTCupYWA7u64r6yMZGykq2E6cSMcCpHNCzuLw8z1Mvsh1GZRLY",
  "key8": "3nfExXvac2GsmtmECLHqEapyCxAyU6aoT4zapbYjwyGaGvTGw7C8vJDCiYXxT1kAbZx2reb4X3YkD7EjHRdioHi9",
  "key9": "2n9FYNqvUhHg2hbqnibKesTEL6uTn5L9bQEKxKSWYwph27Nf5iYJpk2WkDiDYsnetkjJQQi1MtkdoEonbK8oU83L",
  "key10": "5XsSLTQJHLJx7CmAvNteaEeazd21XHApeuTru4sqc3BYCyfKqiJoffH1EkWx1bzbG6k5MYR7a7kyja6rtkBDSMYn",
  "key11": "67Fuyn3ew3dA62oxNvw7TA5kSSx49oCAFzapzvqo8hJV7MhkCk5TtMWzAwcyiB78SskQdh5vp6WeFpy4x93LneEV",
  "key12": "3bY9jy5TJm699MDocaNDBsXe9ayyvaMbzwASGb1a3k9TaPL1nH5FgCmnYjWeu72JK4tcTkBv7vW6PfCfarRbP5in",
  "key13": "28KBgqym3KBoayYfD46xgRpBgZfw3VPFrmQtra3wWpj8jKShiMHBSEHvK8gPBFc1mzbkJ545qo3MZjNFrJccNJjS",
  "key14": "2ExB9JfitFBbLKMVC51JmVqZB7TsXn521bVAEaH4vmYiUM1SFg3cXGMUctFDnwh5TyRXrfzTBW6RvyUt8TrPvWeT",
  "key15": "5udDXs9Nz9Gc3rgvJW9fmWiCUwSoSSVEQAu3gyRFz6NxLfxizzP8HESBRNbVdGiDQFdLqHm1pyXgVgK4GbH33C51",
  "key16": "5kzYdR7Kpps4ZQFJBtrBkoKzLzWdqygkq3NijMrH3wBgSTi9adQEcLYFakbgFvfyRgFEDhzadQpTZdV2RCSg5tPY",
  "key17": "3p3TPhrTQdJXExDUh3CfBYrfvDvgYy8EXyG1TkvvjWs3myKJrTB4P7nJmVHyGuZA1WLzu5rwAupWbQ5aTHgiCmGD",
  "key18": "2GpFHczZkV53Kke4KoJ3Wc2qmmKzXRi2nxCNpEEq9UUhT8zgupkwTzHCvjCY6aiP29xNnB4macY76xHZ5dQSMr4o",
  "key19": "4yEeNUicjUwpd6ViErowoq3pMxgjbqZM5Rb5ggRj6SXvN3Ar6UaGWkSXvZEL9kLbuNe8jC9BYQWRF2xkL1AgmaxN",
  "key20": "2ySrtpoLjDuQBkS1bMpF38mjZJ4tgFdmgj2xiUyW6qKW2TV7urVjMAox6bkbJpjbKzLg8iKCdqYa6Mo9gDGn4tW5",
  "key21": "2U9eFZojaQxptrr6L5qpFds94Dwu3ACvEXYRNVip1ZsqfwE7WvnrNecQUsPcGh9a6HLc3MJwMriNR9BLJMg2t4yc",
  "key22": "22WPUSBNKuGvVprmHE4duNnzZXdcuAznfeiXZ5DFzJ7Rpkuhb1ngdt22o3tth9FfaNCyxL4uig4zvmvzt8EKgxNZ",
  "key23": "54zJmt7Ke57q7gTkH1FJvnvFSpuqmEqkVywcoruUm92zFa5efcc5jvpQutKvnyKrvXDtprupA4GHez7Mj54HmwEx",
  "key24": "33BbKMS1FJDCUpaPFxxZ68zv3amSwohbphWtfWL8axv7J1TFE3tF2gJbzftc8H7wnVpE6eLkv311tG4DSAoZKbcF"
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
