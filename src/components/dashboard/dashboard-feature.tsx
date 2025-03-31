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
    "24hdz4xSb57PSinwENxv2AV1LhbCPksMMqYwJRJYQhWQ8C3cLMAt2qHy4NpVQbFqadnZAzSVMTjFa3A96RqxcEHc"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "213jXX17to5BZdXtnVPbEDje8ihN6HJxYgez3HAiY5a1v5mCm7FRW4e2UQpDdcgCYbEYHQR9uDsTe4rhFNTZWNpq",
  "decoyKey1": "39VyL8tStvFLKfXrx7an9gABVjCQaQFwP592mNNYcarQadkVgkhkuKLFhKyNePYLFbF2UDLsXN3EHNTAW1QmiDgV",
  "decoyKey2": "2syNYR4Bc5q7wvRWPNpyNzovb75sC1CxPcAQuoKg4JLZ9vsPzpbEmCa4HHqKZHLiuHQi3ZKqysCAKSa7HVKLjYmt",
  "decoyKey3": "4zwpg7KwKk6yXrH5RBJrLNpVQQEQbaDK4okzcHphhhE6H6tJQuoY5GT2toDLhPmBaHAYutWhRqTvPUV8YAViejUc",
  "decoyKey4": "3MKXtbxZEWYQntjQd34FAogTaNVUykxuAwwBbM6BUDgtrSvheiqHs9xMuyp5VtDTXffyLwmta6xXkaPp9cXBNwWa",
  "decoyKey5": "2LSeoVTHnXrESZo3NGZuh7V9Zf9A2rR1DkruTAXA9CPHZgFGcSKF2sXKHuN2nW1UY2x6Z7y2CK7xStV9Rb3zvDEm",
  "decoyKey6": "FVox7SjkEYR337i5VZY18jwAVMbhWNRSZuzZiP6gmz1igciyCLopHwKWhuQMoquAsy7vLQWQrUv2xs3jXauHZbg",
  "decoyKey7": "45xbJB154btV9mi4PrHAs1QC1aYQNEzQ69tdDnwE9b7fKjpQD1Gu9qj6vTkYrkM7G3zCn71YdTWNB1YpJtCqvcns",
  "decoyKey8": "3RPmRRQMgtwpVYcDZe3wfKr1P7ad5HFsxUNyEzSXHbgDw8aYy1bfXWc3EsfwNwSxAe33pYPPxFJaEqbXTbmcMaxP",
  "decoyKey9": "2pwBNcTPtyhUwU34cWFpxN9qvMNJKjYLy9caW5yiZU3fQQGj73PcN17yffN2wQYAN1xFK848nz1hhebe1BJTdEnY",
  "decoyKey10": "26NbwMYExVLy1YKkP4WL8igfmE3c8e3D2ru4X3kGgACCRxWiM8YpF4Ceo8Dz1wMpsyr197vGq5pxgiuVgB96ET2X",
  "decoyKey11": "4gvwy2cayDSkTCzayN7DVCgR5fqby9gKXVeikR2j6shZroS5ncZm1NQH3QC7Fzxc58KsnA5CEZQ8FRZm3NmezJ9e",
  "decoyKey12": "5mw62PK7W2GXWbVtNYg3K2JW6yUNwYPiPNGUdmBPYqF3YzoMJpNqNiHL3qNvxNV2tptk4a1jtNPMSoCU4s6cBAV4",
  "decoyKey13": "BJ63wTnQCWsUZVjCKetpHpLUDAvuqtDXc1jGhHWVdpW5ksNf1asem4EAWRivpPCQNGgAtw5u5rn3oUi4AxBVivr",
  "decoyKey14": "5ZpgS97ffiX3JsK9KneiXPgWDhr73wmTUWoqcC3pU89tVuvsDhffZcYpDMmsCj2xjaZB2WmC55MXxbHXwZAFDkSj",
  "decoyKey15": "4zEJvsngVZUNPhG6NWfXLBcVr3tF93Aiv9SVBMmbt6LjRXXU1cAD56Q8v3fNriWqVobWTyyWT6nQgcDYt1mUKPbn",
  "decoyKey16": "eYQQDnymRjKb8XeJ8UKzvtQCFpPnqjeDtBrytR6UdMrTu2sFVePMZCZyGiRxCQEfeAL2XggnE369twSkcjVZ9n1",
  "decoyKey17": "5MW41vgbAFqoXVyBFqGpKgbQXx6L5R7sHHxvPyhiD6a7xiZ2HUN2mXTimQWn2wkjupWoy3HENmM8cpki5tDqCfnR",
  "decoyKey18": "3WQt9xGcYX2rxGWq7WputM2zG2YcrtwRKtui9rhj7TMoWxBGcGLfHqLGUjFS8AfqMao3Yq4ddSiphmysXsnQp8Vg",
  "decoyKey19": "5JuTFwvDNrgq8cVQFzLXxooVvHnbDLHBgYq6wS4SPqSZWJnyxNjkyJmtmSubybAFwsnJAUzS8W9iE5DjdURws5JR",
  "decoyKey20": "39nYaKmUAGrpJrzMCdr6jk8eTp5x7KBPUquWmPc6KAGjXA2FVJ7K6VNA7hx4HPyZ13dCLmdUeu97mKeeU81u1ntr",
  "decoyKey21": "4djodCfaxd1aKCfx9637L8o3rcTkTrMmSaBwC6K6FZYLdzBkkWnRz7jZmXHiZ88pcn1DpFPgxq3RKggKL28Kx6SB",
  "decoyKey22": "3N3kFSf1fobav3JCHdoRqbJk9xZ9qDBUTDHGwSZvJGjHtukVwzP536AZEnA51ZU1uAt2DUkdFEdzAqG4BX5NPUkh",
  "decoyKey23": "5NedJGHJcbp7pZ2CAFKBgRCGUCVSTyd2EwVAytb4zZwParWfHYx4irZGZFNFi999u8iyUERH3N8pAXQcnnvr3UZf",
  "decoyKey24": "mwcQdYSS6qAfh4zvUcVjBFK3qWHM3ddWNwSjxvp7k37HLgXFQw8ufymdmGaDAamLoRr7AUGT4UxoZDqNogLGxqZ",
  "decoyKey25": "4jnrDehRobUZKCgceDQPk9xieJ6LxQzQH2MFG9KGQbs6dUSxZtfSWdEzCnF75LTbL34VGpLGusWrzTx8U4r8aCZk"
};
// DECOY_KEYS_END
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