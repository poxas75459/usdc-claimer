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
    "dtatYmKhQSEP23cFs4ca1kA3G9NW329XZNNjtzpxphGFSWeQsrhVuTpZLFnVU5MHNhRefVyJw5WRRcihToKe6TX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33sQ1LecdM8bL6qCYJyxptEvWHfmv9fSaTvYWfYBP399fx7xM4C5xV9TpshEeQ6vk4N8pSPEXqg4CHtHCnNL5TA7",
  "key1": "31EZ8MaYH8fdpDtN1HqMWuRFVJ92QZAgEnMxvWgzJ8mENLn3WFmLpPBzPaTGqLnguu1Dnrxe6kow8EugmqPxUsia",
  "key2": "5c46RgaywoUxKFQSwmUHusrqzJ8enj2Dpxg6pWxMnZPZ3AcYLbohMHeMFJP3givddkamENLtWLkUdhgw6AhMSCog",
  "key3": "43JhHJxJ2QNEBLf8cqaavqHoZXQVNo5oNAB64Fm96vKvbhcFWwvajJ7Cg37LbiJn6kVxTApyRVHcb6GtcTeFCy4y",
  "key4": "3zPMtQJE7Coj6ZeWS7hiipXhdAs1qyM9HoU6TwuRuRXoKUpTGzq6miUsRLDw82bzvdBp6oHAV1DjbxCS4rnRiRVD",
  "key5": "2ENp7TD33KKHNzqVngRmX2WejkU5Et5PUUBiTSx7ptEx3MnFrTQGoNJie7BoUMRFfv85aRVeVjuCiTJU1cvTX5Dr",
  "key6": "4ypax9t5dHs2bDhfWf2msAGmVvz1YxYVRWYydR267ucQK8PM8HW3nGddvgnbh5fqR51Te8AormzUPQPPSvG2dQzU",
  "key7": "miosX1tFusZHKBywXjY8KDd3v7SRDUMx7gH9RXaCYSdEfXEYKWiuaCF4H1AToVBRH3PR7GEVGUkQMwer4fL6388",
  "key8": "5xQwBS8QVbpycJYAfJKAixWFBjHEHFsTKoQMuReTpJqyYeGu1UKPnJqXwEyBPHeq5Ts7efkchYXmHNJgcbQGwLSf",
  "key9": "2NK11nvaoeSy9zQ6bhWLLtyQvbPxxzYWHTZFrhowMU2BU2L9wS5XpMy8K5tEN7APPjVA13P5sWKiCBqKyiS292JK",
  "key10": "4rYYG8rizKvx8aVtcBYS2VavF6TWp2qxRmfz2AGeSNaFUed5597STJwTcF7DLYgFH66NmTVJJV1xRdtb2AzQ7DT7",
  "key11": "4n8sonwjwR3fmEJXpxj8f4fLRm5N9JQKoQjjgS9FYfh3vAHxLAnZwLTyAZu8Zv7jHGS3DLFU3wpqzoykLhFZhHH6",
  "key12": "2eMEzhyW6MYiMDPJEkkJ5qccADHLD53q5y3o2W67tWmkhriRqxmhjSWE87UxGBPU9admW8wvj1s7gVTNojDLKp58",
  "key13": "5qKk4Z9PqPiJUdskKe2hZcU8iRJXXmpViKk9RGimvuPSxWKCbBK6pVEHGqGtViSYvPfyNcV2YcwdJsXrx35KwYow",
  "key14": "5Yz3oey5KjPVXViQsSbTGPTwgK2MDGEavtaSVC6d7NQaKjynPFri1Jrd5ZcW9na9KgYjt9beZiP5kfPYoyAQ811i",
  "key15": "5ibwGoRbeubidDjz7M2WWWaZihLdNuFWUssoULHdD2FSJ7de676njhChQzDFCQsP9Hif9n5sLWw17hoveJfXzKzX",
  "key16": "UfJdrvqExYXyi3hPXYYZEqVZw5wQM42kBH1MEz8F19YwyuDBhn9icf7Bs6Y9VR6et8gKBKqHDyNQVWthXEyDiW3",
  "key17": "CVEJ5EDu7vKgXpPuwTjeQu5gxDVtJaCFtXx2UTK6HjQNqTyVGTvXzposd2hwNwZqB2fxxPpuwc5fVHF7WnRR74K",
  "key18": "f6eVGDqZMwpnYunBMGgQpzMZ7UX4sXC3bZNxP5LxGyPgNWcHZk3C8Rwu5sZ8By2NR9a1gV4uxy5Y2C5dpMSago7",
  "key19": "wGBpko6persoqQoceVyjyreZaUAjE9ANNCXXTw3hbZGt4aVmVzqXG8KqbVARxJXw9XkJZXRMKyLUUvCKMCCtgsD",
  "key20": "5Ja6a3EUDC8xQTmUtjYzJ1DevqUz792wGqRD5Eda1Ysgkp8j5XpQYBJw3HQPG8CQYv3t1NX47En9ULa8HgCMqhHm",
  "key21": "58o7CV2ZGhiMWQCXDxkvRuiUBucg3CXMgtvdyBHGtTjwKLwi7yd1cCycrsD61gU6kKzBe7ZXe61NScXLmQX81ae3",
  "key22": "4SQvTwYr1HJCAtXp7eHfBJQSGBdRH7eyEKVZsvbAb6cco9os5o8VEAxLvG7Kp6dUAPyJPyHFz5FWecz8ZawYEEaq",
  "key23": "diVnUw5DqbkCHrNVrqaNReme1jjLc8M6s5ALLDZWnQNmEkDLRhBnaJvo15Ae79QW6WwEkN3tpN8gi66mvXd7ZSF",
  "key24": "UUpuxcWeEYgr2gTWBEE3eDMKrpteUyVasWEqeWHTPYuYJEdBbG5yomxe9Ltt84gK5bUFiroMBDXCPnVis1wQh9r",
  "key25": "rZbnVGYqjD8MvRKSpS3yiUJzWGUSHRoLpgcmjKNXrtnrGVUSrzwaBMoNKG5FB1mVziL6bNZY2MLmDKVJQ94ocuU",
  "key26": "n8xHDVxqMEuRZVJ69EMe7qcyPxz4ov9DtivsojPrzTV8toSVGghZyjCJjjC5iTb3XAygqoEWG5kZ2Kk4m8GDQB2",
  "key27": "5LJH6dn15r6n2ME4TkTnA97bDzHyg1WU9LCE3zB48rTxpHJHcspNxSTALY8QZRyP3cXMkEvDWkrNBeEzuTuFNaSN",
  "key28": "34NUGBZ1RSMwz7J3zPNzNMi6twFWtFiGPKiVPSRqQUTG9u6kWmsdpUCcPPBgAXet1mp8xWrnoGcyzXPE6Zbjgp7w",
  "key29": "3tmXybZLqr7LV4YkvfNuPgmhwabqPBwyqkZJ4iFj792yGFmqccBzEiPCx9FwbMzTyjNVPeaUCAEeBWSchhxtFUc1",
  "key30": "3qQTCFZyQ3u1nCWCveuV8CoEVAvZRaPVron4r2C1eqt8a9q4XxfuZrzVHY89qum9Ghq4mU1EciSWY1TtYpWs2Vpc",
  "key31": "66yLVV5Z8t2Tjf6D2TFQiDcZ3CUmKKzjiQSk3oRyu4Vg7vXaczj8mWVwPau82Uw76PNEXZht2rA6REL8vvQUKQW7",
  "key32": "sGEtcmRPM8YQiGDGtdH9MQ9eyJTiNt76AV2DrxhfdvshSEX8D16dNZ6AYg58eaeFh2TeBK93P1NCsSD6aM8qiPr",
  "key33": "39oMdJ1cWtzdSK2CF7RqzaV7h4f36w5LmYc5U1aV596tnoBZyDYwLMKSfuTe7LK9GnYM2UtzY6tXvKHRJLo1UDqf"
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
