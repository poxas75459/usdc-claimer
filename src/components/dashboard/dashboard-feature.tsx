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
    "49isA592L47aJ9HiWShnbDoppCXAA4k5VCLi8Uf76XYR4chkrFfoNBsUq9bkBLTdSPi1dKQCWaByCWp1LeHHMBXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWhcA7tmWCAh1kAg7pCj8qvUiqbeJvutoZwSG8XFXkdmqDxH1w5rT2Rq9qToYenmBWcYdmbJFGU16W2Pk83uS3p",
  "key1": "Ko1GJ3brn4oXjNzJzrsGcUaDn6LSGHvf3rzWCQYXu4DiQ8Uh6iMsJreZVh2kYBsQcAEE1bpYxCuR5p1NoBQY5f2",
  "key2": "2hubLS7LVBmuWDhvscZ9U1uohU9CRxa8zSTzW7tSe2rgz3wWMSA1kdVT5rEuo2Pnvh9YQffYgvtXnJqpBnBUHvnZ",
  "key3": "42R6duH2n6Nq6XTjUCTB2rmrvJsphUkugGbmKjXBwgAezYWxEQnvVPe44b5xMUAYr7XLd6B3D1HntgA6dYJPXYac",
  "key4": "42aXX56UPXa8dw3YEJbFXKwvtCybQW9voyosPVcBQx5MG6eVJmj4eAWFTkCxCrHYpzgK4XiSo7QDRSjqmVEbLqjJ",
  "key5": "3u2SsK4QF7fAD3FQdboAeUNjFuMoS9b1qTvs5Vxdojh3Fifc8WYzkJuYPsneu2Y8EAJiGRCGMriKr564mc6ibY4F",
  "key6": "2JmRVxMaxFQrkVBJULRqaa7WzChpSpcp9GnyrthGBKrHTD5hgndxNw3SeyfYLmvYBETUU8kNuG9Cb2UXAGSYMvtH",
  "key7": "5vyyHMRRUMvUpwcjhWUZgBHb7LbPN144oE5brfGScCe1aUHnS6Bex5yTZoBGZeMFDvsUMUBVj6QbKAmTQq6LRPKU",
  "key8": "2rA9x1uJhic1wuRXEGeq8Z9mvaRVBpWBdvmi4Eu3KuCmCKbXbYsQNmz2mhrjJqPLeLCfq4EeRanrmeTaZLKB8wSm",
  "key9": "fsTEAmVXwUeZfCdEpr7udC9148jt2WQjkJ6wxjAisYPHRZGR9ApnwgR9FSEG2dnDtJL4Z85J7gJANu6vichYW8s",
  "key10": "4eZNHBR3pDqXbYhSdJGSpCd8kFqB4pVbGFqzvdpJdDzm4gLMdjXKcgDGaJ8U5Gta2ZEF3AMjuVQzyyucwHxdZYDF",
  "key11": "4KxEqmqcPFKxcAWbkVa2EwfUqDEtc9EkBAUtUDJDhL5ry89iwyjnSmdCoFeuZ1nSHQ7LLcmbiBQQENwKJXsg27xW",
  "key12": "3RG7G4fLFJtDRcGJirf5osZJpFuBfWkei8XkBg4xintY9tmai6cQkGhEBv5XGvHcNPX5fmMw5foiVVdQcHBZJPTB",
  "key13": "4c7GxCwLKrQV3Mfr2L71MXB7rLrpgU2Q3Mxq61x7QeVRnixoF7v3G4NfLRZWc2L23sXkGWVnjTKhFqjruZYLecMZ",
  "key14": "2cfxfQkXAgTQv7wCAKN6QonHSFLS596kqr67RJTL5FL93hD9zVJWcg9RCh2sKDD3sPfyiqLUqEmZ8npRAVmMLw7w",
  "key15": "3xToRoMyYMQbKEW3EXdHXLsdYoCxCgMEwVwmYDqSHvGcSu4RvcFewfwaeC1cvEqHix8QSGaE4jfFenBFoP9evcQb",
  "key16": "5QQHjH85d2EyEDszVj6mQPdY9PBmSfSR7tAJTTvVRL4JZEWKpKmgdMckMDx7kfN3MQdFFga5FSHEPWVU5QBot5X7",
  "key17": "3ZgQHp19HhyVpcpyhDVFgzz18JMLvqeEh6pbiVK5XjRJGBJoDabXHK2mmifhyM3rv5ochuiaXdoh6ZJiKxCDnBXb",
  "key18": "2C2WsBE81vwXGjftgfcsPBauDuMS87R4dzfBU9BGyZsB9Fcazo4wpV2UwWmV7RRsAcjJ3aTZriog6TcrYvyKbwNi",
  "key19": "5ddDoiH1cyjNCUCtiUWQEZJbps1ngwAmYQCaaBt1z59Vw2Eem8oBtYoWHwy7zaf8kP3sFrsajwY13zgnEwgSTvDh",
  "key20": "2JRWyQd3JadDDiG3RxyfbA16QmGNLnPMEPM23yYCxR3WbpQ9aZgdY917DN9jq8HyoYtdUWa2HaeUDTzXXqUcvcFz",
  "key21": "56dRHX3K3QDVkcVrUPFCc8udfSri4dq2mStWR8Hk5tBjBCoBdfQLHTdo2amW8BHKrtAtDEtgtsJyjgDUdQ37eK1Q",
  "key22": "4G26x7DgqFL9X4bdvpmLmubtaMgFcqdvMVE3YjaxpKvYk7RPDYPn1wCBrKMc6itR5B8YkndT1JoQY9etwexwqkiU",
  "key23": "4EJMqzHmE8GiSiwMs7cmN1Yv9vGCjC2KMvZHE486txp2feHpq98PKjcFGSqo4xyDuTw87pmrPa7XzLDhDKMXPq9g",
  "key24": "L3DST3S8wdfDEZ9y9EeoJfDBWD5kKNKCoLeB6gAKDxJEZcwUu8USkzKjdc13SJmqCjmTyxkjKJuSKnJx4ZFZjfZ",
  "key25": "4pgiw5fAo4SznxZAfWvXbNHS8rJmXL7LTYzejE1SaXx2kJWTrEfZP9Db91ACLbAMtewbn1GboLS9HRiaTgHbpeyC",
  "key26": "2fFfJTtq4CxB72ZqqY91cWQwwzeniSRfBc58twiqu6FS8Hj5ccoTBBgnrFeNbHWK6RgeUcZXu5M7j6ssAjVbEC8q",
  "key27": "5KwycxUFHpBFcQeg5TFuXQMy2csoUJJAEkhgtvmYtfpzhgV29oJFobku2T81tEk4RXYswLQeXY19hPfjJVV2ydrL",
  "key28": "3bAxvnuXkAwumPPkj1Kt2Ggev9uLz24Ain8BxNYRBKfKos7hx3ScZrvM1WEFYijm9PZReATjYwiPxE9T6mpgEYnn"
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
