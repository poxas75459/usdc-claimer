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
    "2hqMkpbmBKSnRmwtzXc5GTSKMNTSjryZZ17aPdRp4tJKAfyaCTf91tA4zdZ8MWVDVASw44SXLGoRgdwtugTLeg5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33JYs88TCT7n9YJALmP5usDADwSkYUxh6MJ9A5gLmzDcKJy9QhLaL1f4mK7guxDst5JnCwR6y2kUfcpKvbngLnEB",
  "key1": "4UaRffHuT4q8tPNb5CZrZm5cCQYvYkYsKU2iBKiDYpdGymp76jNvmBhFW78NxHF8KvLTtz8zigtP725Mr8JhPeZG",
  "key2": "5LQCwmv31wr6DHeJ1ojPQruX1em8CiTKpFQsBAjmdrwktkndNed5i1vQFko73Gz5kboz1K6oHoJPYEUD8J99vzhk",
  "key3": "4s15kvdYPeGcskKrPm2AERRbT3m1W8K8a7TPYL4YxQJs1UQvJiDNEQk5TZeSzRyq9PrvA4FHpNZFVj3fqKjKB3Dw",
  "key4": "2ZE1gJ6eoFRp4AeYbfqSCey5cCQKYZxihRmk9gQKdSFspiL1kMTjNUwLMh1877wtyyse8rUvEXwEQpVjUqFrM1xG",
  "key5": "4mGAB5JJSok1yS4vTV2YtxsnJqg2RjnFQbS8USpsTDqSYzddFXX7CrwWGn8xSQpikDmtSFA6qSfs9k34covJmcsC",
  "key6": "3DYA9GH41aYNA4AWcPDdAV6ryjfMinz8DLNKfpnGmGBNkChVpg6dVc3KuX2oCexbneTFQuVyjFYQK8bq3VdwKJJT",
  "key7": "4mvhG1nFVR6hok2NKtL5xpxEcSncrraXwh9btGU8S1sDNUWdH9CDjPiWZP5Ahj1bdmD1G9vGz46o27a1bgxspsjc",
  "key8": "vUjCSeKnQjfmjS4xGW7TB4Y4vkKSwR7e3G21yTncgVi6FkbE2z89hQFpttiNfKYPi2usp4G4uj1LKz2YNepo6o8",
  "key9": "26TceEa9AbCCFMFfSp9YJesi3YEg2dF5Ky2AArT6bsnbfgWgTRBF3uw8HMP6GUzmXtFpxBXFhYQn8ivcNKzgkF1T",
  "key10": "5wga7AJx2EvzzMDDFN477KZ4Nv4TEoGSofvjL2RMFsLabQhyA6YkEZTocnfxTFBGxKJErwwK9uZ4TmkCCtzv8hhc",
  "key11": "3F91Fd3RjWAVhPAqeM5ZPVbr8vrjaPCqGPKH6d6rhknVTsgg3YQ3KxoFPtiW16o7474jRpC7PF2BiRsDi8ryevo4",
  "key12": "5ta9nQfi5P758BRUrTPakMRWDjVpsUNhi1SXvT69KopWyjvKLCDSyYP2yLMXR27SXMPtzd3GrgdHf6kbw88cSXVc",
  "key13": "32BNGmvoNbvyJoaTuqfEX2tHHScoCvfRAofbphrbsbukT3MDdQkB6RCCpFioEwaXdXEBfGH9rHoN42bm9Eg1Juvx",
  "key14": "5ozvrypdGkE7DcgTCe4twusUSJXstMXgCZ1pwXb3WDQoh2mXJuQUTRzwthY5VWuPCdHDc2dJzhaq85r714UGCjnu",
  "key15": "2H1xomWZnrXiQZ6TS49pCRcptAUGa5fWQP65XmGfYrwrbD7D5L4bd1CEpqwGxaWNS9yYJzXU6BqUweEkx5ThAxiD",
  "key16": "WTLiFfquj6i4RjgG21NdbuMowzXW8vuupLtrc59JMjrDoaUvmtJK7MrCQq6kTbaztAZxM2qZciy8DbBsJhtBCb2",
  "key17": "2zyX3XGwBM3a7m5SVJU5aEZbiqhYAVQwUFteS9YxzDtWK8WHNJANaEvNXUgbyouS4LGB1Qd7YDnTgRbX5KfhcR6U",
  "key18": "3LwJ1k6gNT5ERxbsHYUyUhYQDfaFwqpdJAgoZTe12hU4EwyLAVHyzaUM1pQVVfobtFqi38E7nyBUSqifLHRQiwMR",
  "key19": "3CkfuKecAgc1xErDstKHFp7b2u1TmMcYUoNwFWtqbe3h4eazqWfVSnmTqb28jxzMycSfgPW3WWUoyknJcEhx7oBp",
  "key20": "3RLaWZECFex1u6wkZzGk6oh3Mu6PgWbZ9AHrUCNYS9PLm6AVfTDx8pfB1hYTqNFGeEAuhWkbD2oc9mri1uABz1tP",
  "key21": "2KtaY7MnLYccwpNFfHzPdbrSf5cfm4p6njy2uXupfqEDzDHbG85P2N53eQzVNkurXqztDkwVSeJoynxZbx5m232z",
  "key22": "4cnzLo4NfeNX2D5NCispsBtLuYUSYmrWFcLyq5ae18NS9maEwb6L97Z621GiLkBV4iekSnGXbDaLKx2nt3Bfmwu6",
  "key23": "4UCSvyeT4ytzSJLNUH8aWThJA1sxMBPAdmCXUyksw5SrJtA25heUvhVU7g4TK6sXigD8eUB8PoUqz42b5T4mD9Xa",
  "key24": "49F8nPLMBecpJ8aUSdbfXS7UbbXwJcEw2dagThDF5BHp49dgvkjEqEtLSs4pmaBEtBoxaYTToPG49aFUVyBdMrQt",
  "key25": "2RusJ2RK3BTtAqUQVbWr82doAFw5Dq3XJ3VYtuEQyj7mPN7KX6zBwBnqpzXr5KZkHxn99rcFcvkXPr86LAVDTgkj",
  "key26": "4qjxTES6jpnhvmFjRu571PYYnRHqvTUEjiyazGkARGthmiXxKu611i8deviWob7VmwDdenRcAtNJkQa6zvRRDiG1",
  "key27": "3BhpyVVEiBfubYmzgvf5c26JozChZUKbzsQbE37TFdq55zE1Q7jFk4UP3YGCpKRGwC4Y3iuzFLA16iFaUmNrZSWq",
  "key28": "4iGeevEvcWRheaAGSV2Q9CXfszyL7VXwVQNZzJAjsJ2Fuz9DAMAqS1YYQGbZYREhU3gu2bZefMowSzotbyoCLyxf",
  "key29": "4bPAdSR9k7FccbeBmPfoBPPA4uec2TaAoHbUWtK6iNEqHpwGtdPRtbdPdJozSpb2BwmEzbx6NN784VfBRSXYMoPP",
  "key30": "5cdRjiY8HNAfBJYEe8w3jS5V1F4pPPRprUumeiKppHoK1FvuB3DEQqaepKF1hbLiZFG1gb2cTE3G1zj8UgpigW7y",
  "key31": "2FXakfCTtf4YTDXuPkHyqFoqATk2b23agrEL3M9rdKfWj5dQbS12hS4S6oVgvsxDQbcb5tytMWUpzNdGtpco8v2U"
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
