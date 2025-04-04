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
    "y9cGqoVsG9tqv6n9pDznmE61rtN7piF72FmKrA1oCctpBrZLiFVrL8ANUxdwfbCCFAF9WJGJN6vacFu7qy81P1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u18cXubpV5nG2b2FfwZGpfpFU2jUZnH7iMQeUSMjUg3kA66MUPm5KacA1K9Mv2X21N4iaExL4oQ6zXRdPUnozjo",
  "key1": "4rBNpvhaZG15Lve88544ibL1NgJYiS39BCaVjekCCG6KAtGNbvcqo8p8JUuQ79nH7Xg52iwevy8n5eeJMqFshaBB",
  "key2": "4CEhTemctvgygodTxtjYfp3Cqa8g9S2eRXLNJXwRnRdQVCrZoSXt6jjKsURspVFo4vUUozwXENyugwbFdkGrdGLD",
  "key3": "rmNFdoGdwVccWVgWGpFYCiipmFhzdu6rWsA1YBDK6XghAS8jszwqmYZoyUTNd96T7LK6GNvYvzyCCFyigiCamDa",
  "key4": "3vi6y8A8XcJT8UJjAYQioDysnthCNUXNe9LoocQGrfX6pyWiVSErrdorP8LLNythRMMNsLVvF7PES1x7u9KbVTGL",
  "key5": "bjLGe9bLnaFtevof1CzDj9fZLD9RGUzyqfeVjvPypvbe63ndLZQ51ksRrg4VpCjhHxPRWxx8LeQPx7Xm6Af6GXv",
  "key6": "5uZvmWJKC2eeYegqHiSq4cbqiggGAYv7TmP69xubSqW6eCRNpGp1QWj1pmMMA99PnJRayCshECHoTVyUDgEdxAX8",
  "key7": "Df3maAPfV2E3w4nJfckyqGTSEEqYyLzTyycnQHGx4q2WxaSYEp7aEzn2ZLsaP9wTuvsyZbxcHAtpcJKXbGqkez5",
  "key8": "3483d13TVNz4S4TQF8EdRMrQqBgRAsT6kckb4N8Hi9xkpw7QCf4cSk2jpSu91aoRQFV1BvesEavPgSnf9qcPyRpP",
  "key9": "vvjAenumgUmq1B6ToKqdrYHjdY5kv1jb5FSt8HVtZo9Ko6NnhWkLVr7sSx9iaypA2JS9PG2r6ZDRdvLGQ9332ik",
  "key10": "3367HNuK6XKr3NvfmxKvH4szozTdExhJaQ25KdvVVSUrYfy7nSuKTfRfDdTJ1e4ZRPxgQB8UZrNVW6HiXcd9KUkq",
  "key11": "2gkeYu3kT9MGRi2mMN7wp9J8S8oVvajNtDZB8rH3BghKKN4aBxEKr43cPpK7CTbRptLEPDJYzy9fV8YfKKJCr2ao",
  "key12": "2CbWWNn52XrnmqX63GS2rUFEKdMwcsyTyMvKN5bV7svttWfySGhr6pMkYRzar7NPy3Qu6agVc55i4JhR8kKfBa9S",
  "key13": "5yNeW8PcU5ErzLNu54T1MgavNWoE1ZmDNQmzGC1C8fTUY5kiMQDFQHhtVvnZBB2tH9zGuhtKpiS6yEKWvTcx87gL",
  "key14": "54eFeSdaGxHFeUKz1FgusSoFYzkcmH4Y3Yc6urjKpHeUyjc86bB5Y2iz7sDgkGpC6L6WzbTihW1RLAWBsPusbc2j",
  "key15": "62JDy5ikq1iohbtUkDwq4yMEDWqQLNzZd9X5QXR5k1exwg65VP1UF2HADprW9cavESdscFwenibEn1Z89r1AoddG",
  "key16": "4qpy4fk666AN3WcstPwEHathMUM5iPHaoDkW8vqDqegWPKJvZgFkDi4fujsN8TcF7maDXtKp8MTyUm8aHsifR5wj",
  "key17": "696q6UUCfyfTXdv4YgmrHrYuFVhCwP4LQDEuXUaoNqtvaipbT4PGqRxwLqbqxMRzcGLAxu9Pwg8H4trsLdTvuAe",
  "key18": "2zmGr3MK8jja8GCPQuabE5EqRnyYjPcayH4TmQZ9ndVtBs1uHenTZwDxZjNx1JyoDGQRt2eWJ9UX9cybPeQ3JhQ1",
  "key19": "54H7oFJ5vKsgfYV7aWPzg7kje4A7yWtBccyWj1kj89UPLzZfqtMVUeqfhAWejjSp2BpaCtmTt8ad5Y4SfNJhibxo",
  "key20": "5geZyLyvUHPjgMj7FYQvzNF6R1iS2fykXk7cE9YtC5GRi86nMfAJeoxCxjMNnUdzLMtP14YxeSCvgUJqnRLwfCrq",
  "key21": "3ZePcsvPhiMte2Uo6WKwtRB16ixnT2m2KYAf3oTwAuPPNsGetfSSM3S8kMpWcUxca6sYJBobwFrAUkrS7nJMBD5L",
  "key22": "3pJjduVU2VjRrX6927UuUcTaRvokGbtMYxSFx6cWScNsYTDXteqG65prXPPrvVyMK6yHRNG87jFPVPNtvTaoGgJo",
  "key23": "2cm7ZNksCFKtpMmarM435Eju3A4u6WGEHbS4W8BUzcbM2x1frdiZvHaC2YLtPCd1TWctYBhmFCaQFcvrmioZSG9g",
  "key24": "5VHB3YKiBSWwVqoe7iCWhwMhSEAp9idVARkahaVnhtwumtn8GX94DumWwrjcPYWnJiS9YdbtCSUaD8s763jPtPvh",
  "key25": "3Eitjxvqd7JHWJZiTfBstVwUFTZkq2WVeQQyvhkodrky46wBtxPNbBr7iuEfNcwa5hMAYjKUUFu4A9CDE4wkZymU",
  "key26": "4Ap5isM83nSSTqJuHLXNFAm9PGuH8NPvM2nGxth7caD3zF7GJz4eyaJJeqs58BsYiEULxUdLg37p3CyUwxpqysPw",
  "key27": "EcU34XX4tqV7fkLqJece2avjefQizwpLSqv2iBrx3ysnWVs6yj2GXGGj1Pi1oam1eZemuSxPPydrAjvfTthSUyp",
  "key28": "3g5qK8vffMaaeaF7WHzBB5V5EyAttLz8Gbo4zx7ZZVdn7yReNSUoGKmGfpTUuqGdmp4gS97etT4WP6E2xJhjWaGs",
  "key29": "3fmfJL5d4qQpXx8Z5AML9pYs649ofoMDoyVksZM4eTYbLheGjoqzGkHoDyT7uPecna5NowUzq3iRWc4Lxht6meLH",
  "key30": "4xe55KDtJ4mkVPXVZC4uLEPgEeXNk9RAdZdD3xbQvUVZQBL4qZ3rGRcR5gaZp1EyuXp4Nui4oyuQTdum8XZ7EXwW",
  "key31": "4HkpN46ru71wCovq5BMqESwuW7CKn4xDUt9uprUuuTuNJiAHW738Jj68XryKaSpgZL1RbAu2jBUPok8XPvTQYZ9w",
  "key32": "3CDWhkcg9obMH7Euei6dvuRppMQLCkSA6LFQEYTcxt2Kr5AwMLwjvMckMUmd6C9XtD44nCHBtf9ZX8HRX8RP5J6S"
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
