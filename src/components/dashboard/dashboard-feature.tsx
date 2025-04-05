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
    "5VBk9iUQyWZssAmtsE2h7PvBeQGFCDhScyYzj1euEzZtoKrR27hn8Zsnp3ho3A1aLa96AazY9SvrEdUU96mvzYgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "462A5xAbSbFJiJvHGEgbHAMjfFUFQJqHSXJMsgmf3G7LxnzMA8UESJEXd8CB7NZGNwMwRFC3KBr5hWdRrwqQ6vW",
  "key1": "5wwgektwKQ5hDhGiXtCHfCfF4Rg3k1hDWKdo2M3zpEaUCZ1Qq5phT3nQr6VD5LnxEy5xZYRW6PL18aBwRRPFx2vV",
  "key2": "4ndstq5j8jB9YA19r38fzRD4A7oBWJTYtcXW7CD5o1A7Jy9ePNFsxKUtEnXqcpNBwzyo7dLfuAcmzLpdu1NwQpgC",
  "key3": "eycf6ggAVGL36gaUYJ3NxuV9ecKb3okZokWiGxk6GfGCPx1VaKkHsEDb3TJsqefofRBjYF8RCFpUNNnjQuw5ZTX",
  "key4": "5yp9n8CA9uDT3KqZhF5Y89z7NhrZhymt3MB84Yp4BHP9tgci6wtrhwC7MW9Tt6hrLh9JDN7zw8Dpunz3Ej6X9Uz2",
  "key5": "4NmrdjVJa5GRrR2jBU6UiqxtmiDcs2BwUfdimr8XfEJvs3qbr5JCLgLot7hfTtvyXE5DG6qxZZWtPtCob7Ysdp2K",
  "key6": "5fc5n7UXjeDo76kS8Jq9BonPuuBYbKUiEe3xuuyXC4hiAWAMwKb4zHYvGHinkZ1ivaD3mcmgHvQyipqeERHg1nNL",
  "key7": "4cCQQTTUzjFLPzZqqnyZq62DVSRT5ECN5uyHFUmviPBUDnqXvvxkcMCShqrcfw4Zv3rVb6AiGXJWwu2fNMdw2ga2",
  "key8": "za2EBNa7EE15CxqZCNy6wD4e9q4x7PuS4t1HEubjQYPhmXuDBd2myB399BsaDdyJoUAkh5HthQZDo4hEdevXi83",
  "key9": "4782GoxiErn7pRdpkxdY8VXGUVqeAMc4VuQ16GQjQgqmQViZ6QCDwuZcfgN5oFQBMHFiQ9FaqXSifMLDQcpjLi6P",
  "key10": "3RUGt6vPQwpQ5j9huN16ijNXQdzwbMDbDL32RrB439YqaB9DHM5CfAnq4RPTJrXrf5TAuErJcRVstvk9kgTER2vG",
  "key11": "35d3iH8DWa1BKGgNVPe6QP8XpSXVebWojmSBRy6Ww1gUYmwPZcCY1dHrcgCK3RVtLwbNGr2VwywEbQ2xRzUAYAec",
  "key12": "3YnRSZgU1jJzPoUeR9tAvCDVCmYTpcLniFcw35RZRVRWq6LiHhZrbDS1xgZhHtoFNSeBxDpNoB1qybX5FFqXawVy",
  "key13": "fhF2KVAUdtRCEtHpH6qwnQMHecXXcbf2dQmfZM4FCrrckWEN8MNtC1pwkk6xRotfi9dVGVNuqjwXJsR8AUmN1u2",
  "key14": "3fC94k7kFTynS5adgYG4xgzKPyQjCh9R4w4nZhmvwvnmqRTs7tP8ETya6Ev3NQdH1RCbB792hKzrKE6ezgsyGZvq",
  "key15": "Fv8vDC8vXRCWKYhqEbTUwVXFEwrLh4BhaLNWd7bBYok1bh9isGhZkwCQUbTWzNpRZ3WRJaV84KHmijj3aycY8Bh",
  "key16": "5rpWfAQQiV4BoCjpJeQwgwKGpEjE7tsvY8fejvrXtKWoKR4fXaeUaqA4i2rFWEpn8CDgt4NhKiamPTh1P4m397dk",
  "key17": "Gxfzdof21zHAYvjwGQjNLMexrVJ3CJ9pLaJU7hPsQrVGqJzKAKmin3Qor7bBSfY3xnxdr8kuPECNToZXZJexojG",
  "key18": "4qcHr8mAFucvLR9GyhdC742hsY6uNkJWtWCFRL8gMjnT795GCYu5Wc2KXUTzZiatCkDD744Ws2LrxJaLMX98HtH4",
  "key19": "hbAKe5uDWCFLTQJ2GXmsHLkFrdxqTHmqubF6FXyFinrKWas1CkEvsTzmUzs1rYT5Qhn1KCQ1vMqTdmcuvJSoWso",
  "key20": "56CFw8kPa8xBJscwL7UdDrkSVzTgGApcGT1HCCfAXzADUdNsjmHV41HmuC7JBiUZkRD4hxSzyTS3Nh8fqbnvrUf6",
  "key21": "2UaP2CoSsXsZCxWT2vaWThcJqMcRBFqkFsZPVoVcZtY27ufaVgD1xPJ4rSYA4r2kNSoMRiKR9HDVEe4kxLdsdgmw",
  "key22": "3eBBeNid7xfoshZ8HGPzMGGWnq1C7DUnGN2Pz9LHxNZRwqUd8sybgRtS7fBLdGe1vULjws8FPZYEEyxyiiybuW6w",
  "key23": "4HHQKozQotkbEXqWX5vuLPU9bQ1wnpbpvhbsYoZ7NHSUHrKX6n2RFWtDYAdsPbg6qwRYCfBAx8PLKFwX32CfxPVK",
  "key24": "2ZdWumtXtnxCgvKeoors9XMcNHdWytuuKQCMcgjgumLNNpF5j2BURUph2yTyusTz6k4svxNkGjAQqftmz8CwnPxw",
  "key25": "3uEJGfJq44TYWrSG5mA2iknXY1nMX9CxqvY7wYYJa35XQnrdNr5uDvCcBm6c8UtvDnELQF5Akk41XGgfxzJBdA4W",
  "key26": "2dyBwPmizYHTFzVqsKtjhrYjisrhhcbqzrhvfxFTrUd4desTvvbuX1bJo7D6Lc2jWEeN8he1UiFo839nRq8wnYnF",
  "key27": "4BJBtbR9i6uZ3JKRjjbc4N6HmaTyKSsbDTY8MH8e8X9CDbzzvcbS28oEoEqYP2DsAhjSFWWgH7VXEjQv3SynHAoS"
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
