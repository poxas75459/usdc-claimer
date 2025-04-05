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
    "3qYmiPyyTKg2x93maT6AEShfkMKnRTk8bpFmN31viudCZyU5C4bMqN26FotjquvU29d8xVNUY6xkSrSPwsGbdYiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AuU9yQY6GmHFB2s5No9Pm7r4eCuZjpN5JiGwX16oNqm5ZpYfpLoKKuUqe9Q5EVP6xbyS2MKvnRtJzXT92beEq8M",
  "key1": "5hHBStidhLXuGmeHUFB23aQZMrWWaCk5fM8w5ZRtz9cCjevsVUJ4yTtfEf988iaS6G9mBpNvZYxJc9xrryJgxYfq",
  "key2": "5R446cqzD973WAVbnueJ3trLWgmKFtLgZfdeD8aDKi1bZPXGkSsxpxcF4Kp9Kfacmpq13kWokL9HVNQSRDyQWatB",
  "key3": "5bbMDA343Z7bATgzZQnPwAFeaUfjmuYqtFR49d225pMJFDvhUSdBT8cqu6eh4qsdEBLsnrB3FPcjhgLnJajW5g2B",
  "key4": "5t1xAwTdmBn4syup3ofq5USVrUyznRcQfxNPxDSxsEz4bKgX3TDQcevxpZy6qfUkARhPhBkrdcUTm6E9RuC9b7QZ",
  "key5": "cvJCSYpBuHXWFFNE9y5sr7UdsvvVETUSzQZ5PMvwLBi4yRVUSHMSc7Vw1ytiLLgzJaxTLqu8UKsXxWofiBg5N9P",
  "key6": "3pNXMUdzJMQokGFkFyxHsosABpCB7aaUpyaW573gkMUyJVTYTTHx6x9KYm1fS8fk3BWa5oUWCTPNwP9ySNS8X5QN",
  "key7": "4JszvYzeyxhd2PBZhMeqBCwe4muv85txx7qvZfy87dqdBgQzguP5tiis96yJnG858EhmFctcF3jCjjvogktLwYA5",
  "key8": "iiH3UPX8R3JnZyQ5T4MJexS49ECrxAn8kd56zGKrrwztcDzwJKHJYkJJASj7YNpoFNHPJKUQwLVRyRr36S1SDs6",
  "key9": "3KFqNGY1YKimrCLSWmfy6A6AmwYGJckd7XeGXrdXe2kKw6eeztATLXBktPUnAvPZMyEmDuQeEBnx7sCeBEWE7Xzm",
  "key10": "4MMVFJo7WKDU1j4ZMJaoo8PoeuMTEAq7XEUjNK2GJh3vwDnhws3BMzWCyyVunMA8optxE6NhtZpGbCJDbuPxnR2u",
  "key11": "3MpgHcpAoGSqDJMy8vAkj81jVPrYRmdS2E52TCMFxYAz7vkwmXnALMKtwYUem9ANLP3BvcfZRWEBZGtonMn5oG7U",
  "key12": "3AN1CRtA8GhYeZPtKA3yTWNxGqL4JWm1VATeqb3TzpLYxgSEf5MuM3q49WvNvgXACo22QjqKhPG2p4zCFcf3Hpra",
  "key13": "41XJSYe1sNPRbg5wPXANY3Psdeb8UWuTZp9FbwZS398kv6iwYBuFhKdbXzytLeRh7L1qV29vef2NRgqVYCMjgtcS",
  "key14": "5dFMSBCkf7yQy66TczpJ1vBgHcs5SSkPkCLo6nHfPgzM7TLQHkUPxdFHhkTBbAgUnp2eFXE4PfVKoqMtxmPtTXDe",
  "key15": "3GSAKZ8HG2jPMVt8LB1dPkmWaCCaEo4akiovC3vQxqA2r1V6JJRZccEAMvZioTCNjMT1h1Vy8BX1HN3GHD24HoK2",
  "key16": "Yzck7EwHAAuPq9pN8CLJcuvbmPrTxYxewsoqgP3UroJm3FchCx9H8AhuUBvH19YyUaFVFCAPrVLvv54irt8mfjs",
  "key17": "2ksxLjJF1eok8KCg8j3SsJzYk8DAc494sfx3wded9jrd5TKBMoXKHQd7QjEPPkBPmRN4n1zJSa2KHoUvbcp879r",
  "key18": "4Lq3eDfDS6Dv3ZRCqp1aX3pRqgiK5VKWXg6WNNYoP89i5zxAetNHCoMf6DR3noobpaukckQ1MvFUnMEKLcvQv6fu",
  "key19": "LnfZbcwBUqiPT56kHS1vEmUGGxajsHeE1bNeYqTqJoHjrYWEapjp8kLeR6dbY82CYAoDtR15WFZmNieK8GEGmAp",
  "key20": "5U9YyDAc1LkVKPmiNTtcZJj4BVSMTGmSPj2ZvRXmKnMdHxd1EgDhFiKbhGgHwF4Hnk1bGQ35h3S5dh9PeEjFxVRd",
  "key21": "5ceEBYHzGJpwoYVEiFAnQFD8ymoMH6P6nwAmXJVMcLJps5yT2Qs76Xs8xHUsDGJs7TARZHUnUvEgR8JraBEPhinN",
  "key22": "u1okd15FczXZfrX5CxwUyeBhHQiabGXDcWt7fC1pKV1pbxerQUc8tw2LNHZMPUW4VmbQS4VExcWguWgVw2vFowA",
  "key23": "5whtKGvDTqk1nCUbcwSmCwVZzS94mXWpVy7Agqxh43scNQgFkLc5CUDT8TxgxyoeQpqQfpwQvQJzatcUNcRafWar",
  "key24": "2HY5GL75cr2mZZ4bkzY9F6gv4jwWVkeFGsPwNapDSoRU6i57tp8Ty1aEx8sPhBRQJHxHkJeqNdjZsXwXgZhoEsVJ",
  "key25": "31sF41rF4TgwZvESEEMt2zm9Tuts7ufmDpx4QTTHifFbH86Kegu6PoqLeBpEdfXb5fXkqraZtitiiMg3MqvFtieJ",
  "key26": "Dn1ZJaSA5Tev3pgBkDLnZi6xSN9iyx2GSRr6E6g4nnQa16TwBxX7DQHRhon7CLqJVx7Ybu3JE2yqnVbBskvVCSc",
  "key27": "ua5sUryhBVAjUgEj5j4XkqnQa54Ct3EmbGpDio3aadASu8Am2wJckioE64m8giCPpARoPTY467xPmbvVcySJJsZ"
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
