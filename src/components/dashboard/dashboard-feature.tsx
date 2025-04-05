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
    "5BNqGZgPU7Yr5D4DJ3mE3P42kHeqPkatzUJ2DB7cNV6etaLx5hzDsssE3fPsupSsoKkPETJcJzww35ukV79fwy9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D8Uzaiv76jd7koTvAsjMx431GSnsUifb8hQu3JwhNnbSEcXxS8ovvdZSGiKhkqLoKTxM9SEkt4S9hcStrFN253W",
  "key1": "5e8CHGzYqZV6VESvtmbY8Y9fHJji78PPWBFSJRNBBCcETz1z4xFsoN3UGCNtcehBmZutjskgQS2CbVnrPKMmXxFU",
  "key2": "5xPox64sGrUPmm2iVTHWxMAEuFGm6NUSaSoKErdm2KVoycqLJEWetiXMfMv7cuXW1XoPQMyiUM8NWNzx3y1zA2ea",
  "key3": "vqUgH4BdFQAPQ4knLZRgdb7fnkNZJwNDX199JkWoNzXoZFTNLpUTNifLVZrk31eou1apfHSKavQySH7gQcpngK6",
  "key4": "23wtvwMMZN8koqQZCBFRewZupbsQniQ226XzA9k26oW2jan4qeGZ4zEqBmvAZSRfqv4GHzdWLQoVEfnmU4ehW3dr",
  "key5": "4obXP1ZxJWzhjPK5wPakeF3fSqWbxtpt95gNdzZPVQjwpKVkCJRShnApJfj1oaNLyESzRMXH8Xrbnrd6KFPeGupy",
  "key6": "3DFwdvipeso2vNx7FJAu3izqvMhfxVCxBu7VuczHyMDjg9r7C1gdm3TieE6L68M4bmSycGgAWyU2TH1s2LzMeFue",
  "key7": "256JZgm4HWYq1hoQbf9w4cbxre8tyRfb4SKsiW99tw7K9GV18RTCFb9z7CS5F8ngXa5v8VZdiRUJjen7n42T959P",
  "key8": "4Qof7j8cSqtQzNpjfdyJ72DRj6fZBbQb9GCp23ZnRkMP5VpkbML1iHiSGJQ5BndZc2NDawn26jCYdLCEf39yQnRr",
  "key9": "4NpDtdMjAd8J7EAKKW7vczVpiyfPnERhXSABHsfeJhoPvSq2L858xscMJuW2fLpXW9jfQ3jnBvBEmBpo7tYzksRU",
  "key10": "61wMR7WUpTyV986o4LQfJDBPqNWMULAJkcpQnFawnkZAXoyTuq7oXHYRngtN2SPVp6HAdtwGhz3yRvDkV97ySaAm",
  "key11": "3Utz8xw7z6DmbahLxva2UBxDbqee5y41edhNXarXhZjEx73bBK4AmgWKTJMidUd9sbgQZbvveH7xnKhLP5CyTsxb",
  "key12": "2DbEY3RsWsDnCuHQgiThkbqRxRcQBhzCjrp7RFv88NRcevDwnP4Bmg3TiKRWn124S9pskmDDxDgu4bK8DEFMDXsF",
  "key13": "3nuHGT6bEcaD4JUEHBeSX79LbCcw8wBnsj7cik5Z8bMYuMzxV9bXAH7PAp9YdBhroZ7ymR6kMBg6m6nB4VgfkwAW",
  "key14": "ewfpCNU6V6hGPp9TPAU8yjacszCx4JpK3bynrwL2esvmvb2dP7Ab2roiXvWhjeoQmu2jcNjhciTi2ppkYwZJrjH",
  "key15": "4DDxDH7pJhnJ7qaTGfQsJYEZ2c9rBsLVfXMPQSNGBCQysPvdiFSrJur6iBQb6o8MFuvrK9Wgy9cdZ36dtweAnoTf",
  "key16": "49yDLJsr3LnRX11Zqhd8XG1cqe8BYD3nWNmPGNyqkJH5Lq7yUdCNffNVtu64de18NJVe2pKUwBYeMvCHzqCiKs1C",
  "key17": "3YikTQcZq8ap49FR6d8Lm9K7ouJeHZKjgWreJXa1UpzmddsLf5Agf6yjRDp78QvwdxGhy6JSdhjjDBhPM61QgjgM",
  "key18": "51qkcXWpRzjkEYoGLiXzQ6nkvdnAHoQevCKotHdZYwLXFFjqvEwmrP1sLZhk9a7H89cm9GoRZ7aW5Q1ueDbYuHSw",
  "key19": "vWzuKYEgFBhEeEjTQnbXgEmmh9CGABvja26ZiuXpvSVKi969vbcYDmZUnYKPg51amFzQfRks1DaDxiuyLtdoib6",
  "key20": "ACMJ63APRyu63hXqkacoTWakE1MpG8HPTofBe5uuGSw5zbGcjxN6M3MEgYwqvXnRFAyALqLQAXZoV5Vq8zVPhxB",
  "key21": "4noUCkSVkppvH9CEgs2cWHBvZQts7GvzNRgDzJYnQSy5uhB1vsfQXekf5GevhNLDCBFKymNDKwvTWrxT3n2L9iuj",
  "key22": "4nCmRzGvmoz2UdirX6rrVpztgJhT1eizKxGFmi4AkXwh1bRzBUwHvWRdjGbbCqMz8UFPgny5pn3zR5NTi2oyfoKy",
  "key23": "R6X9cFHJZ3Mvk1RsS8bBnh2H8jZmc28BKiy8TxmcYi3xG232BWAmQEXwgFuiwmtbyn7YKm1Mg6T458v4Cejv9C9",
  "key24": "3kXFXXTP9hYwjUuJr8XiFLW9fEfHPzK1te7c3LW5JN7vasYqejadxqbeFEyUz11oF4YK8FiKrFYuFv6eKoj9RjWf",
  "key25": "Rt7wNpcsZWrxWSryVDvjMqpEjMvT8aPa1cxhJhEsupDJxeJ4tXfLXwe9Am4hBPib4NLjPfQCMPdNiBVW3WqwFWv",
  "key26": "5u1qDNovakL6ZXomCsNHiU3K15nnMoSMoJHjnd874dXhfNRHGgG1eMZ8M6K8AB4D6sdRJinqaAUuj6NVAS8GmXwv",
  "key27": "25BUsGQqLhkB241Cm8cHP4gSwZLvYuu8g8J42AGXw5ec7N5HhbaDdqf9eXtbDBDdGGZQGqx2vubZkX5Xh4AhReHP",
  "key28": "3X2UPG3wLx5DUEBRoEwj4hszwpeGtWNoAac7Kr6vxa3z4T89YnbCKAHDaqE1dCZTiBEELJcbVkRPpDhEPQmFaqoH",
  "key29": "3xm2RhCnmMt28vRRmM6K8UJyCtHmiW5Ek1J6NAet1LfkCcU8JpTqpDxUqWoqyTQpiyrP19Maf7SB4SZf13WxJoxL"
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
