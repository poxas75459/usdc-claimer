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
    "5krZLEXfGtshrht4QhSMvpm17BauedNnanfuLSnvhTTQAQc6EFPySiJL8C8gu4eiuzmHYwy27i7Bob7DTBVsQHED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Wj9mEik72uVvjLBhxRpFgK8jw4A8eU8t1j9p4RHE1k28mZeQJtsTSWasMm6sHwWUZDo879x1ZG4dHBbjmP65ph",
  "key1": "pD2eY1AV96CnMJeUbTri8dtNLuHwaQgeS8ZrTu8FDRdCnbVBBQ9rgMycHv4wMgeQxTboaonPtdZmqpVqh91ETkz",
  "key2": "2TUUM9LrDU69VwGH4QyDLY1nuYp1A1VNcpKj6Esip6YyjXwuKH8a5BwQLNT5nuCGi9D4itxfvbQgMJnRvoVpp3FZ",
  "key3": "33o26kSTz7RCkGtmBGG8ZtSG3jYc4yLSKqfmEY8aKG3cyQxT6yfmZXkq29Qu4YD2CRsJ7wsPzr9MxhoB5xNbiaZD",
  "key4": "2Q6DqJaesf2j5ATiY16F5T91s5uH9zQmhHWruW7RFYJPN4VfhXfvp2aE1aoFx5v5ZaPu2RrwUtifNE76bDHGuDPa",
  "key5": "3xrL6oS2gZWssFEbb617WecEWJTEBXaN3xA71cQoD14vB48MACe4v4kegj1CdRUmCsAn9bZeYwhnGiQYYHReS3Vw",
  "key6": "3YTMmAWWW2C4XyhAcSnDp66hriLetpixznBq68BQjf3UTJU5KwzBBwCdwTJ6CuS117C1kcRSRXD7FRmj231Am6BP",
  "key7": "5XQ5fnzUmzHse1ZEj9XZ4PLgaK3DsQrfbczCooR7tcEzppbAA5F5EgHQpyhUNhuzJYcwp1bvt1HMM1kaXVVNMfV1",
  "key8": "5rT7FmK7hYYx87XoRb3TsdcxnP7HPQZb6qTUgsk5sxSXV5q3kSSA992tsmBXGRZ83Qt9rnZ1PSMf9mmt74DtGuk1",
  "key9": "5QG5eNFnSpGMGcTXsNwm1etF6D6eFJsg9akrEnkwusLJa1QbyGyUEJ22TgtFMQdy85dCpoGodFtZh2VPKRVV1H4m",
  "key10": "2rmFxToftrKHRqty7Wb566PiLt8Gotd9K1jxqAdHzLQZWbYwEtggXRFX74W7VmtMzdt7Ym3RYVyHNrRUwkRoKyev",
  "key11": "yCefMfEW3Rcqr5EAXWy8X3Vzeg7tyqC5ScAoHk7Z9iaUXGZ7qS2MpCeeGpqj8qYkwTmvJAfnSaguYXc7TTURNff",
  "key12": "3tniew9AVG5zxMU4cLEdntsFBrf4jPv7g9EbriAc9UXnELS5pp3xFomb4cWhiFeTBC2T9L2icyqhswPJeVdcuzDS",
  "key13": "3ihfR5M332PC9ABB7xT9Ub5otiG6crRMSxvhapHBWtJW5YFF59LZcHZFT9gXMMSFjU1kjqoqBcZJeackwMtHuawT",
  "key14": "2xWjuPG8N1xCMrVdYPQYDeVb1gwQ1pDZUfp6gUw686cHJr9sDh5rsoExct7SoLZJggYAnMzT8GhEDHn2x4JqKsmg",
  "key15": "4pGxUe6atoF5nrady8yG9nGJde5TwezRqWRJN3coyCXvYR5idAZmigdGur7RXpYDnXTsDdBwRPxtHpu8xaHweL6d",
  "key16": "5moU1htqZKWWuXpcFXKJ34hnV5bXUKCJKhXY7ErPqZubSbcyvQ17sSkCtT9bVzbZDGTEPijdx9G4Czh6Ae3Gu4bK",
  "key17": "5JAQoV5mGjAVbkRJY9KG46io2LCf39ZiBtaPgi9e7McEbf9i2U93zBV71JkKbPAJvvT7R8WJ4wqFZhUzXJ6BNqdD",
  "key18": "Enjne4SEe5rusrDuU9wLwM9Qvq23F5WEQp2Z3r3NrcdAb43zjMoqX5o2CV72aG2sduK78zfDsiGVsJsN8EaTnSH",
  "key19": "4sbEpwYprEH4t8im6mQNHdh2mmneUXjSRvVF2eojqNsN4iAUWf6wUzUaP6FGPirJscYKGo1dyzvLqxGYVf7eyWK",
  "key20": "2yn8kgUWzAgfZX9iDmh4C1Q6or1uTQMvAjcVK2YunBpXTTFgkhC1s7fAJQi3ACQ5bRwub785ryLMK1K3YDpQx5Ue",
  "key21": "HVrNvZcge8gUzwTF56uJcGdP1R5hLbt4gPPbnB8zhWym24nFuc6knxLNHjCoDAMPwFcUjRQCZTRnGJ1ZHsKrVdU",
  "key22": "4KzAafoxPygriirhwHVJEYAZbfkgZMAv4XXtyhbBPdKnqn4cDDrSxhJxyNe234A3a6L5uL6bNHFKtrrVLMti9emu",
  "key23": "2BvUizjTzSydfo78vKBYafVBqCTAMhw9hymV3dJFjCobxi5UaKfR1WG2bjpXGYaMtS2uUratpEjU5KyxBH6XLKhL",
  "key24": "Rzcg1qkac4u3Nd6E3GzeqmcSnEqkJPq8KqWGpXZoPQThKy7Agcmd6MVaQfmqx7iiHqiUrtxZbmLwHrRZJJndX37",
  "key25": "5Hr1YaVuS35GXCtnYupDgNrpsJaivBzFqRPFuDcWfxndfPdc7rvZmPUCU6BPqLrBW2dqqA5WBqffVno8gFdx2ZEC",
  "key26": "fmbqLrhjSw4RQ1UXE565N7ge7aArvp6373uYhQ3MuLmbF6oNCDekzRghr55jctTFu3q4AMiPLhm1XgXt3UUw9nx"
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
