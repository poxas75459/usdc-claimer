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
    "54YGoFUPYT6EYNng7iQqkDpPF9FN3WvZKqhnZvgLYZoGdsbj9Z7Lt2ZtUPm7fbxQTxAiNZ5ozDBx3v4vj7kdfbDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s2t1GL8myqm2zvQeApSyw2mi6UaHLwEb2xyDZ7xqvKo5aQojmvmpW4Te7VYK1v7C7jcws6Q7wqu95BAdWRDBtUQ",
  "key1": "4FfST44qJUn6j4WqqYUSyf6xKzKs2FCJ87dGFJtxyo1EDU2udNtKH8pntGwDa6JToXsQp7Mkdof25g9JzbYJWYvr",
  "key2": "1JMg2KQWhPdezooTWj8ZB2kVoYF9UJbMetZhKh7CXGqjhgJebgyovc1V5JtMBRhF2kvRSkWQEtAWea62axPvaXS",
  "key3": "5TDbtqoCybsYzaiQiizofC1Vvem2ShyVZXts4wWTaStG6hNzcP1zKKtoeeBd9rXukTzgW7aezcCUziuWYzcxwCvW",
  "key4": "3i3eZWGrxvXsnPfaZVfjYVfFnBsfio3gNvLtzZcFcwNKBUDQm8UMasxYCv5Sx4p4GG5HSVQMcJD3kawaf5yr5jvg",
  "key5": "3YRaova9THWS4zBxSuuwCC7xcL1aEYJNWUXVs52JZK2a5DNvotwWxC1q6B2gPtznCk8DFuxGsQJz1WY4LQJU1Dap",
  "key6": "GAxpNZLd9aH5vSNURwXhwXMfc7nkbkaz4N6kdbKmRZxSFrp852sK6oKVsS23sLxSW49DCR3Zv23eMEZcKyA7LBw",
  "key7": "g3MdZdxXMtuocYjhRTT394waN3XSn6TK9tYKcSmDrHF2neNXVUmksF5P6WUhankEqSd97EP1X5TwidQy5VnWXSP",
  "key8": "vLQgderVFLw5VxmVz7uj9Us9jHi7y5xoMzX2ymLPey7kMi1yYJ5YSSJHA3D77BntE1X6bp5bS2UHmB6rrU5f1Xo",
  "key9": "PTLEy2n8jgD344Am2wLBvxUanf9BjrUqQQQGufacMpRGq7WLR6hzwDmiRMkrxTRrzemZZ4mifLDbBv7rwEbZk7G",
  "key10": "PxPRKVoFLuYebgNfbdv1bbEPL5XJG6rAcKDcWTEGr64CK242pomtY6EkuzW3JNkbfcQzEtHu9AWjWgyXJYRtG4A",
  "key11": "3tuniVDGzPYo5r6Xids8PV3jMJG4HUSc6ux7p42VJPypZoVRv5hPVUuvktcRbLCtkFyeCCVdx3S79RHBa4AJZ5NB",
  "key12": "3ztjzErbGwR3dpuRZiaM9yUvmssvYTocK6K7GdTwuUYehrEZhoZn9gMNxWjeeXG4eaiJSK16NGbuRJH2SJQTHEtw",
  "key13": "5Rf7QdLdhwDp12tfRgHhmZ2j5swJPXwPpwcYXyZ4tzKXWCjf7usRfMuFdC36oh58X65LJdMvKnUL67gzoqTdfqdP",
  "key14": "3gVyDYTwwVK33aNVpaGQPtXyoERNq2kkDpJeNfGuoowkBpt33niQUAcEug9zTH7bfkAswXyFJveZ98oMtgHGxX9c",
  "key15": "3BBGcMYtKHPW1oaeBY4zzAP66Ac73kVickus5AGeqXFqRVPXoWkXZfHr1rG2wrcPMU11VsTHAoWAUjw2HHXgoUGK",
  "key16": "4tKSekTh3JEwuyFz4RT4o1ggdDy88QMNMtMjQ4vMfmBTU3nLixWjzBQBb8RJ7q9zzk3NYXSmfXULvYCKnicM8WWe",
  "key17": "XeACwW3xPuBkxGHpmq98RZWuDi18EU5k6uSKP9QZPrBUM7Xxnt2wd4iHQN5FbNMKBfTCVVsCN5NUETBeNG6ePRF",
  "key18": "5ZbaVfdeSDibYBEsdSqrXLHvJcywBMLetEdqsk3qfNyQEHM2aLdKDsAtXMSf7EbGptmLicKFkgHoQoknrXmZSrHy",
  "key19": "5ETr5BBzQLiZo4NimsU1CxWFg1ik7rKz9rxQvH1jYua7tzn5pzNCjZTNCuxUbB5Q8zmq5cMK5qzTSawEuNB8G3Ra",
  "key20": "PeorAQxHToZ6JdWaZGdSPk1wqeLtAWQRJwTQEF2kgvg529QCo7krwFRiTQA3A9HUbEiwiTEMBHJiRVNyWd6kMAy",
  "key21": "yya2gk5CukXgUpQWR7WrSdqM4YjDV62tBR59nDQyNN9R5VbhpigzRUARnpnCtHH5u4gT2QM5TF73Zgmqv91b2EH",
  "key22": "2Uy5ydmd1r6W2thYi9WuKAxgyDZG7DN6ZgSqSwLH5CGU57StmW46nNhdiyVM7LZJYDxaTA6uyNeFA3kHKu914ETY",
  "key23": "38d8MRNLcMco1sdV9wBmixvKBXiF8aG89qbcKJYEq7JPKskXVLFGa3EG1eHkk5CbAKeojY28uZ4C8WfHu4LwbNbu",
  "key24": "5XzoBh2pvV4ZxDxQJ8QoNud1kDu3ixXt9sNmAvW64VxTwYNXKm38wtxhuRkfaFCtRpkSTMxyUZxvw1tnjkzQwMcc",
  "key25": "4ex4joCZtzqM9PDYrAvRnrBtZ7zQApwsHfunSwHz1w2iAeUMAW13hGfFTDatf1bhsbn5vegMZS2R3vAZcpkzvbX9",
  "key26": "2hnmtJTNRLDkzmJayRT2fm4ujFd7w7HHfeqJpN5jwMF9KVmpDJA44DkLJcnstWtijYPMhoQK3ns9LUC7HNqyBjUs",
  "key27": "36pgMsQdX4jvRbFzUk7seTeFf9P7MKYoJgfQ3Czg6dnyeQjJi2LSbkH8XGeimYXwEidvKBuWmcsa7CtGuERJVLkJ"
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
