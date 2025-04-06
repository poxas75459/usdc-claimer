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
    "37qjeuwcNb6Aa54BZ2pPcaxmufPfZs5PiCAh6eiwZfDwqB8x5hdniKXmaRSuhxW5Dx8rfMKcaRcZsusP82obecea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oWZ8MrJr1FbRqszTujd9tLqgG7y7pibk26nx8zxronaJriYEV6fkH9DsKooT4sfG8uL5kFSaRhNqDtKTaBed9qQ",
  "key1": "4R2F4V9HYdKmT6aTPSZok2GxmFz5h2tWkXYXPS58PC2RaPe1xh8CnHCHa1ZcVb6Erce843VQ1Upu4EmM3iRXRHYp",
  "key2": "4uC9Rm6BjCubdyiGKSiQPFyGtXj7GSed42t7qBYwjv6ai9dPRJ9171zxzBuJ88mKpNGCa2czwvFP9rH5RHpUgMKz",
  "key3": "347EdTLcbcbWeKzU8eHck7JpLTxar4TUm6kMfhVeE1ZZWPbDRzuJ1p8Qj5ukYYrj7i2PjgjvKXVnmX5tFb3KnD43",
  "key4": "4fQTbX2vqeqFSdnDiSk35LjmfVMpSSVgEuDCzw68yZFzbHD3kkSHRwXTkxmQGBbVQLpNNPuUBNHUr8g5kjC7ADg6",
  "key5": "1dsFYKoERnFfqCauvGS1kumopGxs6UDSgMEnusXd6GyG8st5fe3CPedJzxyFLQGfM2ykwezjnsfdiCUk8gmuua2",
  "key6": "EJf39h7aZpNiBcQVky9VYzvEe2ZQ2HBhSot1zMk1wkqdanK67rqVtsFtjVPK4HmPoET9QevbKQbnpLMnXV7c6zG",
  "key7": "5HwpgFb4TRbY6TdpbA5C8CukrjtTsBRcwu66aqUeQkJvqR3YkoSdUuRtzjbykJEdw4HLrUSRz9gpfA4SeaFPxUwS",
  "key8": "2vq4eazWNWYzFXpuRM4PFc8oUNfXZ976gRv5MFb6nVk1CkZJKsCVmv5cmPT9D3BvUQgWrVzyTotvZ3vhwoZHbLAp",
  "key9": "R6tWM5BE5ooG5JaTcdvXzkTEECMHEzQQmN47BTRdKebwBziDHhZL3FoQVLswed3gqM986vdQaEuxF93DmwNNZBf",
  "key10": "oXH17jTRQSwPe15BpWE4fcZxaipVEVaCWD6kBw5ZdHFCC9WGFXBhyQAT5q7oySdx985Y2Zi3fXudy7guJP6dTUP",
  "key11": "2HXJYmXrXkav89QjpqE6gt3Yn9CCNQeLUajA5GB5gvJR1dVMuGZNXvpnn6MKoL9RFZk6PzwUCs3VAxDahJo5QvCe",
  "key12": "4YuB7YetEx1mQBTUy5XCa1ugZJ8rdbx6DUzaeciT2uo1BXSEUJXtjFunWbxyryYDjPvhXkJPv4cfzctg6MTUSS31",
  "key13": "4qQkoTMgiUMoWCj46NxVJnTPeRujz3FZteBbEHYckwJdFxq6vyz3aDC6ShP6hru1qgrA5hX18rV7WhYSdvgmdV5f",
  "key14": "3N2cQvFyFNHTPn56BLNBqTD2xtTf4isGbhNpEups8mR7ueFLSRHz6PLL5NjWetYnkrNsQzpjfYBqETt7u8tJVJ9j",
  "key15": "4u1CcLfLiczsCyvdfgESBFNNGXWH2VHbyvawko3gN7vwggHQCfvgejvz3vVRwpm7PU7Y7HDooa19zFgH6BwxURVt",
  "key16": "5QFjeeiBnMxjiqZFSjMeLwviLLtWDN5u3MAbMa1KGYz2hZevxzh3jcGEPyCNKxUmjvt3h78DoHvDuGTh48KQzVmB",
  "key17": "3smETUhuWmkFZXLAwCLDtdWoJAWRGaaLnKUWo1oKbeTo7xGRg7VGJkpLdFcDCQSt7G2meYDNbEMrzNubXESfn7yt",
  "key18": "56ph8f46jF1XNmro5FCqKc3WLqW6eci41MSk1oPGHhGpUgagNspGD7ECPMrhQwwLFbyzGxNgGCwboG3cWwSSGn2w",
  "key19": "4ZH7yiSh5SVhUSWP9oMotMZyyN9ax6yqbjbJ49KoS2k54pWzvSGxB1kDprUPtXEckEs9PAqY8keWjuqXtuSv9fuF",
  "key20": "4bSpqrHLyT4jojt8gT19hD2ucudvvaaS2VkU12VzUXB4NpBj3ySQDNu8asyi21pokY7QJky6eNPknMcB23QZrCvo",
  "key21": "cpZ6mELStxTkqVvbTpxePPQztNkG9sc2wEpQzp5RgMJU9oXRBFjV3kbeGFdB8ztUe8MQhXx23Ki7BS3erTQEx2w",
  "key22": "5cFMdig5RUhQxjCprmiFqovUaQUnwjfFBsHHXTE67PaPreAsETTR2X3qNSqgbcaTgm9orR5dgBTEv6vKDtg5ebPq",
  "key23": "3rY7wdLSUn9NF3hiFYoA5StGa4wasUy2ZX4GG4THLmLeW9snH8MnWghr96TRhR6sTDcH2KYbyiENDdgS9yYrJQV5",
  "key24": "4zFu3dVNpHz8WcX7Tsb2TVy1EixodPU98uTUmYYZ7mPTUoFbLghgLvH2sbsqoRkKkLsCZGARM5E9E9zEEBDZ3eGi",
  "key25": "4QpHP2VXGtwwhEGgGrRALwBcMN1sjdfcMzSrG5NGDwNXmaut8DdZg7QeUDfnF8hgwWqAyGCLFvAVj9MK6rAu7Tf",
  "key26": "3xfa6QbWEFPgXEewzCTaRRFu3tG5SzhMiy7wtrttX2vAMmdvFj5dFMWvcbKBJpxpb4RXqL4kvQiemu6h9iA22fWV",
  "key27": "RjUHQUPvosVQfdixj11bUNqwX8EynwdU8ScsJaqVXkfhJtQ236gZpSDGL94K7LxVn44o2G4y5euGSgi35y9kNSY",
  "key28": "4Wk2hTV1GX2XEyGU2eeTzYCMgRiMWLpU9u5a4NK6BreZcaxkjzG4QzC8bAhQrBw2P2s6Pvin2njdoHsMFZy7nPLo",
  "key29": "3JRi4VPrjCxjnQveaF1AjKRnw6kcJGtpzCBWn2mQDCcQotxdGx43RoKx9jiwJsbjdh1yriystpqxEnmQALtiMQaq",
  "key30": "mxMCL9moDaRD6DytcmtEYx9JszyE2oEbyNawF6CSKjz3MYj2kivVRMH51t9fw1wZbvcHPjWzwVCDJUcxvj69LSf"
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
