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
    "2w15qfe3fKXTNyAB8DzhAMn3DPb8S5NnaWWeGtSme2mcG6fRRycJ12sSNkh6u2ZJVtF4HxZZcaLMvKz6UJpz9Eje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLv1h8UcNFdKktjMJpGEpsMdVyNNtKxfjYiNmtLv9TAMxUMEPbem9WpqcsLR87iKL9CuNRjJHgRgnP8gERFGPcV",
  "key1": "2iEgJh6FXLEb77LpRw8uHqgJshURVF9eUgqPQ9KEjXA7w47nrTVzM2EbtV7bhVwjKDNwFgoAFGdXMP5WWSUCNcMf",
  "key2": "35twodKYwtNqiHtngeiVf2fbhGKDSw61Y7EHbPNemW73fDnXd8nz2Ngj7JxqEgUJKR1PbjoeRd9eZfs7Twv8kwXS",
  "key3": "uNeAj1Xj1wH9AETYecwUbvGwkBhzZGdrGiYpyvdbE85CjmemfqzNHARjQc93ZeF282rZNwxGUEt7VneuHuvRwep",
  "key4": "iLcJHJ2eHKstUATGTNcmhJ9UdgFAPYZTYdaoYCStVDoU2hp3nvETQA54ypn8f28zufUg9MUU8qhZV7rLYjMxBrz",
  "key5": "2YTUr43FHjQZ93o8QdSaJJPLshXXaBTxu3JW5vBFaioBHLudFUwnmqnFtCKMHZXaarCwiis5ZYFDNCPaaUYo6g8d",
  "key6": "3xjVPKmvnsEYPWfnK7Tg3vVf1ApTw3JWmtFZDSLNiNf52NKJaynASTMk5NwGjfUqEZVrhY89juwaTMyZkRdnaA3r",
  "key7": "kUPhDJbNDZ4nk2t7va1Fj6vR3cTgnuBwGq6vNEMqkr6WtHRLNT5F54ig6ntMk8V95Doc2hQcQgFfs6qvrXctme5",
  "key8": "4KcJiKLP1nyuCd15SjA3CGYBwYj7Vp7N9HYJL8DYrPoXKE5K1fshZegjYfWRZ5vNwcJPHPL8aRRCPjsfJSAS66bh",
  "key9": "4LEcFGBqbfoCV3mmBJXbEF8hHGm9LHuKWuJw3Go4HkiBwfmwkHwZF7UVwSH4dhBxAsn3UmMT8EGkmdMb6KNEyDX5",
  "key10": "2iiRahN9nN4pKC99AuTyubL3gYKsVUzqzGoNYbGmKNmFooatsqSXiXtHBA9pGD4wduWZKFQwzQL5E3FyxQ5fNvdq",
  "key11": "5Cnugks2yFUqzu3EotEWrEeGrRXhwCqH2iBy4D8ssaQgG68kjUafeU6KE2Bu4TsRcEfzkVz5AuLKNifm7C2XoSiF",
  "key12": "HDsYnoHpbavAyuRycLUi2iJEqdNGaxxDrHWZSGFvmRd8PsrMoT3H4xE2cRcwMyjnequCAZxVM6jrmFGrxGhoro9",
  "key13": "rXG3VHvzY4u9zDYThXiPpKG3gHBEwLArQmmWHfMRt8KxVtaZ5Jf2q7MfaSncy8WZ38e96wpdA2t2AogV5qXhapE",
  "key14": "3aY2sWFjDt7yvdPJtMbfVPDeHrmyGk2RevXfYX58gVWb3LJV9WZRDUeK4MiqrTQXwgrJXyWiRwjeMFgKLGvkLZyy",
  "key15": "xjmwtsyGWqSgfyb45tKqyaHYvPUdVL51tWaXRMfnxYpPaoUq185g2BcwtRSGteqgS23Bp3DMVWGNqndJHNTpwxm",
  "key16": "2J1LGEmjDt3mC5gqEShR21boZRu6Rrc4MB3V1wYHQZYJHi9dVrDVThaPCNcoeQc4sfi6hqdMHmYBAPsdpFNwSLNf",
  "key17": "3SdSidiZjx55k4q8nqCMKD2Qnq1Bi146epfdtgDRVHPnSMouFENcE2BdhtpJ2Cih4cwQQpVQtLHnYjhCihh2Qndf",
  "key18": "4eGRqhTy7Qe6X6XfXMc7V9KmYgm8BptLHirvF32UQPGRrsEaYcuaGrVbTx9pCZVLHbAXwNcaNaAt7vFheX4sjQr1",
  "key19": "qVPgpPVCjTudHED9RxBVzpPVAgTkvHvFxo1EH6JkdX1MR1dSntxhnKk9cTS3JTTYjHCbNbEVqXcF3LRmqt5DWZf",
  "key20": "4MEZUrg3rosNayR6JJnMMMkQ5BYtsUvcizqaTSzUTvqujFzebkY5eDQ6HDXdhFfU9nXojsGnzNJ6V5AQxNQgwRy9",
  "key21": "3KBUqhwymbzAZmKnYd5SZEzarEU1zPnJGELXiUj4Hq8kfKnkgyBpakct8v4wBERBjHLX6mLECmQj7ARwLMW5bdne",
  "key22": "2hEnGvqGoirh4Pdj1xEhVx3WaMb4jt386EKzaWCoFJNVCUquAXbi9ne3vZ5VDNSFcUmDep4fJCDK3UpLvoSnKBG8",
  "key23": "5xa8W41we4bKGkbc4n28fUUKPGh9kfpP28MQB1eG3veJFkrgME8qF5AYarFJsAbk7Qzkv7zQGfYbWTeezpN63HQ4",
  "key24": "QVhZLitGNgAEdf8AToQTgWMDoXtHZPioB4nKJFq3YJS2dEgxKKgnsgEnYs3nTUQNaPR8dFkQySBtchPTpH5tMYa",
  "key25": "Ud5XfNxyH8DUYkF2NE7CQS7XXbGpimHJgMHFszFSzy1dMNWehWSZ89M1Utpn7pnh89ZxEhoeyDuEbsmbjsfD3gd",
  "key26": "2SzDodFnyg9rsXZAJGLXULW7kZ775WPyZrh4u1KVvkDaZVTS8QzHMQrYUPAoUxSEzSrMTgjVYQPyQSR8BtwEjzk4",
  "key27": "1bVt6nYMYEnHXimJ6UpmdfALQvNcW3Vwk1NxUUEjPasnKRZ1PCvAqtsXTKuWSnwUtjzMrvTzu3E2vxxFeDYDQ7E",
  "key28": "4feBRLaPRfxtWxdEfZuQUsQRfjuCkW1nXQHdsJ24Age3PXCSnusDewwWVsZDvVCophT2qNXsVCKASupLashhuLAe"
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
