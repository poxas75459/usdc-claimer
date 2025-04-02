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
    "2Dy3ZPa5fcTxcdaTzHytWTQMpPByDMw2jyRoLgHqzuigaXBQg8U42X2hdPZYHVEZ2unWiR7srXdHj3mK2ZUgH21N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49CTp8we9EiAk2izgdXGj3oGWJMDgRrZXXdRkgHnYXbLYCELAMjfLmf5vWpphsCPHF51chyyiYaCuyQUL1nFQDrL",
  "key1": "4szo4E5KqvXWiXZ3WHGkoCCv21LzKXFKjkzXf4rGP4wsSd73mFku3k5veNzsEAt389Akc4h5qQmMMs4zkDgzyz7B",
  "key2": "4LuAhgqVqpAazEkpifjtZW4wGviKf2GqXCkTuQc1C8kxmyLNZWn9KiYCRRcKwhMTPnogMFKnf1e4KtrdCfUCbuUY",
  "key3": "29tTkpugYj7KvE1g3U6tiqXgrQUq7BFt5HXyB5EjWvVGdkAgP5kEwYmKUWW6QRYyunRNaUtgsJTQiZzpWG9h1uLo",
  "key4": "3FFUToHJgTffg4dyoPTfo73Q6JsvRzhYGaGBsSw7hrYgKkfi3Yfnp3qoyJDr7haZsQutwDZBLm6XcGJsR7jHo21U",
  "key5": "2A9nos7fYJtvxowkjF5Xy1vzqyWsacGTHBp1nVdwxVt61LBA72qefhDarxJRtqt6vjf39btfVEUsfNdrmnsZnb8T",
  "key6": "4ScPxqaTy3LeKSDu7mU5DWSNWVTa1Yfxo5atzL3WHyRoUoeqfkvv72t3CetVyzBTH3zeZ2xu6NuvMLr4G35Qco63",
  "key7": "voCvkD7ZHqF7dw4ofmfJYV56SdR2TLiswFd4UqRvMamSJUFp3sMukwPvfzKyFsd7WFUpgAdkL6CXSggkyajPxHy",
  "key8": "3aRxtLAhGYfCFrq9Auv1CAmoc8911vuK215TBm8UYKXRCFcufEmejhtfLZZnaBXgjisjv5vaqLXswxpRfUPWxcq5",
  "key9": "268JF7rJsVjRvEyxt2HQ6AxRTKqb5Zn4n9DH4W7vtgVKeUAijPJk6BJ4YxurDGkir9aL1rHHnzerMo5ua5VnrsxB",
  "key10": "5Ez9BS61bJ6G8XKtMjqLF82GRE3u2WHCLNSF6aDSGxcD4FXtU3DtrPzrg1kKn6CdVRo3jSgknJSJXo9xstDtFYBV",
  "key11": "hyaBXrBpJob3dm1zgfoAA3t1wfEVh1yAAQnsgP7nQMPmAS1FxmsjXhfW6HurPmiDgUkwT7fEeP5paLuQwC4dzfF",
  "key12": "3jYdDUj3LDrVYAS7itvPF3JC1BSXhdmzuRGgPbv3kTFokKkcfuZxKnt458Vq6SJrRoFKLF8z8R4nxV9vbNHREqbm",
  "key13": "5fS7XMMdBytDiSCK4Ba7gMN8HQX2pLYEyVWp6uhaa1Awnt2W1rjSAhgWS1tWf6L4qb4L4dfc1goQsvWnxzqzvEpH",
  "key14": "frRzSLE1df5iKHV83uUTm7kNvtURMsLtX3u67qncee64XS5NqX6UH1X4ZKrRPN7yBNzRq2N16rnAPBcaVLfL9KT",
  "key15": "5Pq57nmCnD7GX72u1sRNXGVpzEKo8NbBaUjnrP3xnqBi8WH8GWWKorKbVuXhqJGDhat9Btr6byrTkdxxTbHZpP45",
  "key16": "4pC1XMXNSC9Z1wPhGmsJC2gxJ7rTCBMTCVNB2zkNw7ihdhkitRpyMhEETKj5f23rtvJ2zmaKJ8oaZT5KYHwYDrx",
  "key17": "4ePs5gKPaG88737rTJvnTF4ivhfYGatwJFVSni8CZrHd1VrNt6GBsFjBUcdMJoNNksKVxverHZgtUZQrhBpFszc8",
  "key18": "5zTPcPPbvDNHdT7Fuc1v6Q6zcCUiEeqVoADcbJ34jm5kFL1e9JXze2VVL9EdAuzeYpGrMxg5BaDCmVzJnngnKEFd",
  "key19": "31Cj7RCAe4sNpHTxJyjuDGTN9s9cRMRStB4sh52SMj2v8iBxxWbpwwke6WTqMPo6iPB3QhJYB7MGMMAKjXWLNpRt",
  "key20": "3eamzf67yedmRjLn7ndLuWM4eZd9AzZ94QeFP24yU9Sq2FP6Vhrhf6B6sP78cUZ91Bz7BpRcKMC7mrQQiTQmxfWZ",
  "key21": "4aT5XUoJ3E3R2YnXMucWubJhj39L2Pd8MLNZd3uqw7WHfnwaB22x9bQjmxdxpncagusPhFwwZnYoABiBwXrYeoX7",
  "key22": "3qHvGdqqKVXxYBxznoZMkw4eSc5xwqpU1YDxZNJDyWKwXEyYkRp3MdPBmUNSywhwDsi1iPw19ti3dkG9ZUmuqZVp",
  "key23": "3pUDNnNj9775L1a6kVJgtK6nQy7AGubQA9Sm4mg7hDjdKJCYKr6Y6ph2xmUtu3qMPVM3dDVKzJhbHpq9SUCjrru6",
  "key24": "4ymSoKq52g8rvBXCu9F7C3Ux8Ax5XukpPEKW19svZ9qaTpUnvqzmU4hLScqCPrRABT9dYTW8fMHQjci7g4bPptj",
  "key25": "zG8Zvtne7UrgHKMdyguubuNvw9QTNxoGDCNiotg6DgsAUGvbAJ1HE3ax7XNUD1Grgdj4epTaZkN8RbtEefZsUPr",
  "key26": "4ThyM8DTbBanKeCoEZeNZ5ZQJb15dAQbFWLgcThyK3LicMRFi56t5YK7KivN5Fj3T5L4tUVrnPSxzvwv1FFZMzXa",
  "key27": "2VUoQZwC9UmS8xTvJGtucWTXYFucjDKLfPCCCJbCcMuYJjQC2exDL7CSp7oKUhz1vVwf3zZomX8APVHBmRrrxo7K",
  "key28": "2yLAdqsYVqGMKJ1mE6CQYuTy4bZq5C8oB1RcMBEo7RS6c4t7otZzetQ1fifJd9ndbovHTNbA7va1PSUASoRaLjqD"
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
