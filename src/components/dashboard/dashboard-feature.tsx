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
    "5AfvKHotJwhPQ7u4P64iquvvJ1WB3WUAGxP22c5GKCMNpgXGHLzpxfyc8bVZp3K5GGeb8LmurezoKvQRgcr4PsJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VrgHNzGew2BHouJY2oqosXDy3ZkbUxpVsAAf4rDYbYK7Sa39P21n2uf4e7rLm3SeAgGGiPRqxbGkoFzxmB4Rnbv",
  "key1": "3kUk7Qm2kbbjKhAVAhktbgT4uHwYkPxQrwj11oiPpRrG6bdWRCDEGfRZtk1epXvvEkQJcEsmPXNwtiK7suEA5yG1",
  "key2": "3L1myhyK3U4LCBNZpocCJUEFXAi5CPbdHTFjK4QSKuHMhD1kbzJ9WKk1DGx9Ft8xbL8wqPdkxZEFfZ1Ghg2TL78Z",
  "key3": "SmrKucX8yNLjVJSB4MbppnskwtXHbtPatkcGdbWtZ43DWPuaP65Hg673tdmxYct5wTivyx4ithDcbZABwpc6WJa",
  "key4": "2tzK5V38WzfKzAcCzmAAs4v5Cyh2H9K1Au9ec9XFVy1LFr48ncgcJaBdJDPfrqpJ8YyrCyHUKChmwpGnmoM6vtcN",
  "key5": "2Aaz9iTaTLAMJTmHihwNG7kQCKCDDbdXY8Wxkwe25aBU9jvntvXT4HeXm6ZHtK1VAKJbGS4mxMaKU2sq1P4PEJjm",
  "key6": "55XjU7cA2zgnUM5uBjDgTtNR8C2MaETS6s36qAEcbNZM9WEVuiNwTptMDVPxf4XziuwtqBcb5tnDmKyWfMJE2pRC",
  "key7": "2y5WPS15y8jPiM5cGhSYqDkSJiR6y8EXeGW8rpYvWpngmWXRx3AcuWE8yCno5iBg1M5KUUbiUAe8SD88DsTNXA6e",
  "key8": "3KAmywxVgH8iifsWdfkxwV6aFPPS9NpY6RiJ2EdiC5vwLWXiDU54gDSbjCFBJA2yD6o6nTLWP5mcwPPu9FWZhLwZ",
  "key9": "43TYyRiAPAaNuRbQ6qi1UkvpMRxD7ipcQ1Mhh3juz6tks8AMkoPgwY9QdiCmzAz4fdmx9sZkVKtxmzWbH4F1uQJN",
  "key10": "2Z4NWcHSAk9WLDYjbtHb5Hj2use1tx2L6WHsAQWGbKXjQUnxP61tzqXHMvaxj5BdxfH15gsqnrBjE2ZGMF6m7i45",
  "key11": "3nqjmAb4K3iJnxVYuaQXz7P3dW9sxyG91kwjU4QmNrojjNpPi4oHf5Z6cbjrLdFnweUj7RMSwFXpw8BsTXzL8Zy6",
  "key12": "M9bWLfo54A5XwVJbmbkkWrM6WUF8r6UtcjSfhtp2eZE3ymMywnxvDabSTQzuwkycKCNgQ54EsDX2bXnve8wB83W",
  "key13": "KGLMkjQmVgkJAKtdX7vPYvoah6PQpm1QzPECq3yUHAddBBofDGLVLHPeCj6a37QXXkU3yfYtSop5GyWS3B4EDdN",
  "key14": "q5nscFcQnTRb9Wsb38ULkcwioPUuxgu4dzskpLWrcAhVQmqd4DZUDK8oNDXTJh54BQa2oeMhBL4jFRb6D59sFps",
  "key15": "imSpLcb4Pfs4GbwpnoQG4TmtbbbMJunCLe4cB6QUQkcjT6nPJpdLd8unc9px8AXsvWwFw2R3k7UnDCXFhQVjQEg",
  "key16": "5ct2EFX1LPUPjPhBySuCJ83pQLrJefFtTgX4euxHRt9H3uyWEkiTrVJUMrWmNbSk3SG7eackroJxSFDSbvTPt3zh",
  "key17": "7tuoeNnxHBML2akrkip3YA6khrmfN7wkT5NAwwMMC94Vp2ZV4k3Dv3JgosZM8VN1TTff8EdAyEgadoxDcE6kLti",
  "key18": "4gamdx9ZJs7unK6dZToPYTg278gpmtMgRMw9P2Th5PpHuwG5KpvqjLrjcTgfc4fbExD58Fb2ps93JAn6FpWSTbL1",
  "key19": "4xb8j18m81k66F3TRQU7T5UM2BD6KTeQ1CPtpk8j8F1EfDLeJCNVJkxGqeWmP8ip1oCazPzjyhDY7dp9URR3xtsK",
  "key20": "3Wq8tN3fMVSWg5LWDkoWN5T35WaEuqxaqmpmBrxh3T5WTEqNafB7P5ZegvoKF9ZMQGgWFBKoJdEkxT2daMGB8Qkh",
  "key21": "NWUa5eMQty7ShietX69rpQhumixo3N7jXRomkFahtDEgoEb2jMUEnSW2HfBL8mYvwaquthmjwudm5X3dnXeonUZ",
  "key22": "5ytaqGxD4r2c7csv3Zx3qByyBoyUtBomWbqPPu9WPkGCd97QdDV9XpWkfCQdq7V8MMEgb9zUjk2rzou2qySbRwDd",
  "key23": "2EBtnNwxD1T1qrpXm3h1iDRhJcoa3qW4g3gsLAAkupVsyZp4yzUfC3qfe4nRAfMqZFGsFZDdMZUZGkcrX5W3DyEv",
  "key24": "51f2vqgovX9XVPEtgab6MsitpfSqzSR3fKXxVcg5etV35fycv4f9TntBoMTFQKGVn8era4bf8k7zDZ1QcuFQUBXm",
  "key25": "g5MC64YDrhrA2osjrPAQtyQAkHHUgS9KxRGgfuEigpEQ5yF2zDGJbT2AeZ2jnKtueU3Vk6Uh9horjuCYeeLXwno",
  "key26": "2MaSrLQ2mFcxQXtgdU3L7fYGBQV5ZKtHJSUFZ9xBwMa51SeJ8kqKzwMjceU9bewo6yAkGJigGan7ZPga9yXok3JW",
  "key27": "5M3K2yWpPyG7T8GS6TMv2ALr4nn3JwxjNb8ZoHXPcmPeWocL49FEghnaJYQX49MAEbwnPWPYR2MEhkVVCQM48Sjf",
  "key28": "4B3hZeNu4ZyYpEUEg5XkaBxKeUdBtjaucPAuYZn4XYW9PRe1eXMvzVkrFgLh3HBHEVmGLiBFKFkPtC9vZ8yK2eLu",
  "key29": "5Wc3aBH2e2AFrJQXFvPVQZQRve9xmP5momJ3WdUz8ZPCxyqN5UjmYGT7NHRbozCPitXRW9UTu8CcSAHvasAXzr2a",
  "key30": "5wEMTWZdJj1ehEqbqvJC7C1GsXUrsrGcd2svSS8hf9PPHhEx9mkNLJRWiu4LCSeo9w8eF2jGGxgKbwja2nkUiNDK",
  "key31": "3pmD4YFWgZkW8eedjEb3kxpJydiEnbWNqfFGaT6iJNjBV4Hcce6DrsNRchpjXNRjogE4GTzmSxZpynTZtgqo9jDB",
  "key32": "2HDeDqYxv1Ef5S3fiUrsSgGv9wwfouR9LbofvogjzMkTS345qjuSweWM9SEaRKYoeJE8KhEvjsv7w6UbtL8y7gRy",
  "key33": "3uC2F6Th8ofpP8UJPBx2EvqSMjCfu3bKiTxStGHPFncjixhSG3JZtSCQ6ecNkayVHZAfhkKtgimjdnUf98QKiWgY"
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
