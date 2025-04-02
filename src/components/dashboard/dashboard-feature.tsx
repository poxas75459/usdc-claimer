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
    "2LBYddRHA5tGauRM1qABpDkw5MjW3krdFVabhGsrwy3PWpsHP2n271xHne58XJwoYfCNsWkw4g81nGgQuPsKZvxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QEPCBvHEWLhZZ744RR9h6mQT3eNEoAFqJjKpHR5yS292wka2DehkYELok2FLZ2dLJg34zbwB7CVR9segxswxw2J",
  "key1": "4DFR9ggnoUEUojTkKW3KHQ7sb7gKAS5iQhWuCZrdZcVreCYBjHMLBwyFM45KBdR5o3i3VK6BsX3KPXFYD1mvnUfz",
  "key2": "5HutXeRbKYPJ7auV3zb9yFWtepmUboWgyxdCkFXbrE9h5xo1bhLuEg6ZT3BXoiajuSNk9Miif7RdfVmUGiQEbgs3",
  "key3": "Ni8S82wYU65oRc3jDxCiDFsNh1Ek1fdhgFLqbVUpBMEVbT62zJZPMeoywgxLt5RxB5CmaFcHkTVBGMo2Cn9c52M",
  "key4": "52Nq3SeDDa1bjnv2KVKATUmdhnKaRhfHSaiGpfvJuYNcVYVJ9VHhyA7RT1mhWMNP8vzF2DfvazgnmsLRkZk5sy1G",
  "key5": "52VEicAiWDLv5A5oqYrkSUq8AVwaF11Vpa1ambnqeCqEmQhkLFVYY4UC2ifxU5FgWChrrcCM34rtjNYHgK2sgrP4",
  "key6": "A2z9YDqcAc9ZCignab5BH2x1e4p1JsqHUZsewHX3rpWDW4C5KbYiZG4zpR3UK8c7vsfKotssjjX2faHedMDcv8N",
  "key7": "2A7Gki6eEwPJ96ih53RaBRn7LwqwrC6ebenzDm534EttMnLBowPhgzgcBpy5TYPRwnEukRbFfk5WuT6Mk3mMn9Eu",
  "key8": "2q5sihAzh3CeSETGK55jVqVuhCCF89Up45U2UxfYVNKdXofPZR2dUPZwDk4S1NtmPeJTdf6XJb5MuQ6D2eAY4PFp",
  "key9": "3k54fK5vJPUo2en3sKe3RGvQEMv8a4zDGrJPN3o7uDj7q2MWjS7cd48b1L2PT8iPQgGTwEJKV6KRNGFKFtYryeh1",
  "key10": "4eatxEZsrj2D6VXXsnf5KFihGVZWjUqa7pyzsRTSWwdZBkNsPgip2eWPy65QMkSUNas9aDf4YiUofGCNKeYuoWrT",
  "key11": "4cdW7wbvo37vhZ5kXoZH3RSu5LFcQ4Jj6h47v9RNnjZojhRTFBkb1U46MmzsiXGukBzLJAPEsHLPJw1Ho6EXq86C",
  "key12": "3gABhaNYPrjit4RnooV3fSUuYNB3SLH3YwvijtZLpfX3JzMKiRbK41N2BeoujKAmgy6MUt2oxscmm1YuatqNCDcm",
  "key13": "5SRxqVVFap38w3d2VNRW9F2TMb6gjZgHwJyg7aSXNKkfMSxfh7yFdZmAzjUvQhermeBr6MEpZqGPwg4vAobRwivb",
  "key14": "5Bdn4JtVP6RkhhXuppFfRvUo4kLDNux9nuzuw9PMu6Ybsq59bYYxXCc5ZL9jBnCJL3HECUgcLxgWRQng3TpYrPH5",
  "key15": "4Kr97rdSFTDEdbajJ2jYofL81oW1UfsW7DBZnwEK2UWgFEz1dQR1yVAEgxjR3RYiLkpjoe6vWHqkFWKJznyEzp6F",
  "key16": "5GJYdsWkNH77xtE4gQS1A9hzX8dqhhCJmhkXDfy9LJ4sNBUciKdLsBA3c4KHB7fgWSr3Y2FsFBx8Kh1DARzzsZh8",
  "key17": "TkrKggizMToA4wagA4QcNkA6M99EzvbK2dWJEvYmxbFYpLVeiYjp1hUThPjJh3XfS4Za4MSfD3mM5vSpmQaBHxt",
  "key18": "5mdKMvhuK34GooY7tqJrCL1qDY3cGYHFx6JA35wNDA85PsGqoNrLoJakdw2ATtUNejTEpUPvC55cA22FHTWCm9Vn",
  "key19": "3ZbYNkHKWrFX1AxYbNAZUqeACTVYTvXxPCPf5zJrVj3xE6heHh2CFHsqiUzTj6D9TT2MAuXDg4LowZxrAB81Q9eT",
  "key20": "365Qn8X33HdUdup6WMBT5PVk1mquTpUbuk3Erh4PtKm2ASEGjwRpPDwJGFdREngaXTpVgc1LiFdpdwpdrKPREwqG",
  "key21": "5QT83zLnV4apMtKEFmWrfPqVHRKvRYYZQajbSSu3E8fqem5ZzFrnBoxeW7Y79dLCn6oB6Pxj16RhD6W22v3PH9nj",
  "key22": "RjB6PRwPQBeVqMEbVqVL4vPhhVJfAoqzHWQghCQUBNgnZKWNab4y7cDWrwk78G4SisDnm7ZBDi5yPiqEnAtmN4C",
  "key23": "3oWk6SGxpLuMbmGYW3P38Vm5S7APis7a252hhqKmzBJGMzRVfrQUUP4Uix9ASVwRxqdtj9JCzaj6cKNQJqdmpWGp",
  "key24": "2BavUkTyCPkqWkxMAoxF11YYkaaJVq3dSwsrssTvidf9w1g2EoaYi1rpWbJQKXYHPr84BTx1GoJzCGHLMb6R8J6K"
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
