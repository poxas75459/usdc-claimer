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
    "5QkczfSctnH7MSuaq6UiQ9a4xC2veqjN4LWhxS2UjSVvpxA9mdwdfVVY3L6jv1T7neK6i6XUzDTkUjaZLJ1udgej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VeNs2M9DBP6TAfArfnBMQ1YvRHufE4dzbVGWipXDS7uJrWf4mQcZyPoHRmKJA12ef7PN1J3hBajHDKfjGTp3GX",
  "key1": "Sb9G7UmdVfBwMsGewVurmw2QvvnXVc9X8T5dYN6HQyXJJ8RSqzLzvE5h9EWTUCtLg7Tpd5LU3SYyBMx4RmdMUDH",
  "key2": "HNnYSqmyZ88KzgLtxRYWDhjaL1SrFNmQYuwRyShYWZhqDiMK3sgZ97cLeLF6D8tsHoft47QRyKA4cw8dpahfi9A",
  "key3": "2SM2yKm4FnkA5VQxDDU6eN9RnDrC3Mn77iDch8ftsWWt2K6Ek2kCY5tasYch6K2v2BKPkPhXKZzjsUtUtfXev1Jm",
  "key4": "4gBroawV7YKG5UPs3EP6D6Kv3TAWWv84JyhZiCEs9pHysdJoxCNsmJ275afM1HLttfAZkDipKhhhBc7G63kTzWZc",
  "key5": "5TdxceauUc99MVTMLtYikVEGJ9AnmmWz3PqAYG2qFhKpKkdRmJRVZEXYTFcxZL3UUQGHG4L1jMa85ahrLrwnugk",
  "key6": "32vkQfxm5Ck48uumLVmd3BDyp4iDNQZuHAJApu5vznn8LWeeU5xQ1WhNbg1vgFZyfSWGxQXx3Dn6tXG7AhDMUic9",
  "key7": "2kXZ1yycLxeP44hhDoQgtUT6r3Ak9nSa3C61rv58iuLnmDKtX6yMvQj381AcThMLbdwwXfd9yhk283NfNwkrDmWU",
  "key8": "bqm31jc9q2WXxWXgw44SGxs32kd6gq6AcmFrFGCLXLjMd1Neo1iwbz14QxZ4cFgJLKUz8DZSPK7pW8fH6ZUhjZZ",
  "key9": "28aDxay9X2bDtiA11yjHfQhds9tRyT3XCTQcmky471KoAYEszR4v5b9JcAixBPXehQWpvCxqdKVkEN33BEivkffL",
  "key10": "2kPCSFoGEDgD6aCwc9WrSH3uro1QosT88Ha19QmZLgJU8doRh9WfyymJoEYumY8nYdNgb1on3aLvExVbTWRRPHXM",
  "key11": "3Mb69h2nG7ASqdQXHHkeMjTwmFxr4exmq1hzY2o6yhy5sfnTjB4kChyGSSd2cwsbSfiYwnYNjqN6RobUtA3dWGpV",
  "key12": "XucpMSa6T7nii1wRA5ifdyhggkjUydQfT8dSYbH8Tr5GQq9LZ1AKD9aU44DQknzunYD4ARVkKovcbxhn3gVyL6V",
  "key13": "21f1gD1UjAhRagiZY4be8KWNx9gDzeERjRb7NZcTev8vrTUMxV3gbBnkSRqnc12nwXtebxtnXWu79TdrNgybvb8X",
  "key14": "2STRvYw9xEKuMavadD1anUvvLFCGwi2W2uAFrXjqQLoVf1XJ5Ujg7XHWKEzCebXChfzGiAJK8vZBnKaehVxYz63g",
  "key15": "45ANPCV57JVe6QgGQGfMu2vanKJUsNojFchNhyWDXdSsjMuF5HvLDTnF8HfyYbUvj1hwciKcLWAQwbKmhnxB5gha",
  "key16": "7TKZn5WJGWjSSLixrrNwZCFnD5BEZCzEvmsCPYz8NR14haVGuRZ3W2R6ZyZM2h5W4T26RMX6bfT3pyePoh6oFWv",
  "key17": "4qpyUXcGej4G7Km1QD3KJucP8HXMedFP9EuKm4q7zSA8Z1f2RXiszgf8bhYVFRwtWgFojLpxyDL8fom4R2P4Pmj9",
  "key18": "4oPAQqJed8iK3WdafNpkohhf7JBrojv6RQqYNgPAQPcajNcks6v4bUz36dZyhHCTsFpAo7kgB8xKyJAuZWCmjDYY",
  "key19": "2BWH4CkkqKEpJYLWscePfGAPApaxE5i6BUjALxE8yaK6BDpCG838z3dcgx16LCsfJNY64dLv6a9zk1GYHb9xPnkT",
  "key20": "65Nb17oJV5nxFjFeC41U8HkckdxtaeZXfYpgHM4sXLesZUobrkxQJQT4F2ZRhxP9ktYyweEDwExXuiD3CmdNYHrE",
  "key21": "3Snhik3uioyzy6LEyN1t2BwynCQanxkWqu876zHX5f1jpGqm1pNxR1uR9yWCSvneL5NgbgJc1fSxVt63or12gQRX",
  "key22": "5bMBatPTVjnuNwXrKYmBvKzdCNNHkLEZVpVLrxNjuPtZVp5YpN5LaYCs3VdmtydZV8vgM5QiEhS4GvyDTzhz46Jq",
  "key23": "2EznbcNbQZ3Si7LyfKMamWvMJHVrktLXnZN9ji2SFCa85LxrgmNjDC39hQPCkTZoF9imiJBWMsXwYGTaL3Rk5Rjk",
  "key24": "49aT8ByEPkuiFhpN338K9VR5LnB59ToV3qqGTYXWMU6Xm5UdsTFK6pWgfE2rgV8Bwmv4QDByZLGviayG7rBqH4wd",
  "key25": "bc6k31g365MmzQSdawmZEopd9nvfd9VGsmH6GXTr5U6Wx5unamqpGanWex9maQcJdRSYEHVhAB8LEynSvkk4LYC",
  "key26": "5go9F8xKe73c3r8CA6ga7MvJjoNNowLk6rXePMUsrJppcorfcZ6HFx5L1G6H9g1bR4LYTrwUVapGAxKAZmXVMDEu",
  "key27": "u3YmC1eReohWRiBvjhS8xqgXvfNvQSaZbBaaHwgNDwez8L9D7ycy68q1EPRcxQjLQVUnzpF7x91CzsCifYntYzZ",
  "key28": "46iCEKsrTa63uT9cq7aVphqH8bZ2rsGZsShbTjiwoGgnpx919sGHCLmqFDEG2WtygFQEZwhCALi2Tioxz6XxJMnT",
  "key29": "5wr3SRtUEURrdtjpxHbCjK5D6Lg6S57nTXwsAskBhk8ywDRpcH4ZPXxunVXvvFAXkqEXYoNdQzLBVxg1G9AcC4uW",
  "key30": "6uoeQZUo7yj5DHQg4dfcmuhz1rREhkqGCp7XFtx2PzCcixkaGFVKcNbZpAtwqhQ71wKftoUGjKACv2nuGXZTaMJ",
  "key31": "3UVPmRToEW51TVDwTjpyYiTBZUfKmPGCkZy4YnGdzvLF5iQAELmwfiRK3Roo9Hsg2k6J1MtH1FnBau6FYwvUHWVe",
  "key32": "4egYxY1zuN72BhVLxT8mab1YC4FS8YSnawJnHDdgjwSA1sEwk1G7RsWL2N4j2D6tvUgRoZXTXfUTP8khrPLPyncm",
  "key33": "2FPq8e9mhTG98x5ppFAQ77mM6UUM9icE3a4N9ooQ54CQFuvwdpvZsk3tfWUYKnyJoYsx9Q6h3mqHLXoUpq1ayiXB",
  "key34": "4nKuNgnEnn9iyafr62bJsZQDJgrCpWJ5rfruhtmjYUHKRJrYxumVRZ3R66txvvjNrYpbAaAY73Q7TsSyWaJaEe8Q"
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
