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
    "2maucLKCNp7RVkUHMkMAiZBCKxgKZWr38c815Vn7cxc6jHToCFViKS6e3CcYbq3DH4DmMpV5qi6fdg7qSzupEbDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R2p55XVhAaBNhcRwSLJdwV9WRJcGbcr3XvpoE8tNX6DQ3D1cq52Km9Bdz2UXkW5X2AhJ1i9ugCohm9raAFgkPnu",
  "key1": "2nYr7NED8rZP99HEAbGgsiagZRSBSkUaUuLj7NaXue7GHjg6TTCnNEJuWgvSXpU5yugScy9MnjfrndHRcHtUkFKD",
  "key2": "5AraxjwWdMjz2gS8hjFfDerRjnqvASw1p1XH7fAPCxF3Ab9bJamjNBhfWbw6nBn3bGtFCTBJYjYBTRf9ZGBQtnfD",
  "key3": "5rco2kRm1XwDB7ssEUQrFCFK8aZb62n8GcbbzrV4oYc2bRzQ6QoJjHGT6HsvFHqkr4v1ZucCNeR5MeJB9E2o4ZMF",
  "key4": "3GbxXip6DDvuXaMsqUv2TGZszEM7agQgFjeCcYfx7NMJqj9fX4abTmHgxqLVL1neYb7bSsAVEsZLiGYUaZp78Bo6",
  "key5": "4oxgh4Vs9xyNmsxnb9fAG8hky4BNUAnP1QHLC3JTvJPjALT1UnQV8vsg3seKiHcf2z5s9TdDUMt6HMa7bk2UyaA4",
  "key6": "AfFiK8AoTGMkxZAyufdr9MnryJ8AyZv83oU5z7AcaPYMS2qbqSuwRxASXTRKWr8gvCgYXgb7b2SZBnB7yp7sF9m",
  "key7": "52o49fqfRuWHetX3VBe1dRa8E7vCcv3rgW1JwVmtJmxAMfkcDkmQ21EtKrjAt8T8Enj2vmWa7YchvzKbpQru3Ady",
  "key8": "3K2XZZuc2kb5EE3iCvykzNtBrkiypMPqb3TNsWj2ZwjLrkCrvcfmeTcrhFo2Pknncv1D5QA3T9zGDFzqSUgmCksh",
  "key9": "2KkwLnavgmDpBssHj6BLrXGRkYsDtDvN8nCpsxSmsinAiQZYo7HYfm11z4FCK7jof8LyvBRjksZ6AssU3BKvi3LE",
  "key10": "4iiKdrHy54WV4RfhELME6v5fh6TfbKsaLZa4b6qBpfBu2s3eF4XpMkwhScoemoqNeNCMj5pi4qNEwNu8z5grqE2T",
  "key11": "3ibWMgWSrMQVcAs6UgSUaFv8ejfJwBPa3ggpc9gziH9mVKvR1SwEude1CDmWnGvRQAxq7uJ9sBNW6ww3eWGJBZ6h",
  "key12": "5n2zXbcLF4rhKWiNWFaNJccGELjuSXBVvEAUddW6DLR7oe8UAXXXv6SCBC7N9q8TYgxaxfPTs8GvFqf5butwH4MN",
  "key13": "5UtNv5XBreMbRS2YLepSazfc63sgyTZRXX8zWBRjuS93JzUEJz4ab3NmcYyRGa2nYjQ6ZLqzC2wdShjTf3iC4wj6",
  "key14": "4GweZsqacUKYdoJDbARUhJPcvDC6t4Gghwnr3BcPmQHUWizChKN99ssuoGnCNLQKFLjxrdBpGViuf9sur1uR9bYJ",
  "key15": "QS77MdPa2r9jRpe2ryfgxDfSoTE6gDMWwKzzA7kwiCnEXCy8KA2kzqsknT49vqEbhDr61NfkN3bmVFAyEBhTGfE",
  "key16": "n64VSZDLckvu7dC2P6hotPGAcL1ikcozowWkE2dsEVXKNVBQ2vbotrC96ppLyxev3pA3qMt9yxmQmxYPUFv4yBn",
  "key17": "4oGqF9VWFUrBQo1Mv258zdxVJJuvz6Zq7fb1TVyKTUdq1qKSssh8tBgut4pSpVqenRHU4vaQDor3Bz8B3XZRTUTM",
  "key18": "3VYMG1khrb1trWTKAr2Dpu6TW3GHUdzVykZrm23oqRcaUZ6J6URfnsK6GtKugV9yZM3p48whRgWG8MXMeqs4nbm3",
  "key19": "2HjK4b7bkktCa4tZuWc1W3ugzQr9o6kFuWNHB1hwCEmoo8vtNaMTVg6UjfWZ1nmeXvnXL4NbBnPdQqKdgtVuBky3",
  "key20": "3UYqo7upNCb7mnJD1ss1XHDBqtrjXdPd48dnMDxrx4Xp6dsMSnx24j2RB41oef8YU6aujjX9qK56i8tpzZXhT1oM",
  "key21": "YhKB8GqWwickKWc5BvKErqnbtfPcVqKaWKQAk7UTPW2qMKjyT3aEwXrzrbpWcb8bvcK3JjeoTvp1tkRHGHGZ6Gd",
  "key22": "5SXeKMYPbfiTRGDnWoc9AYTT1aHse1m7cA5Yus1F7DW5MHy65eb2gqoJhY898RAh1QRT8cts5U4ryib4J7Ruti26",
  "key23": "4JhXoH9jCDGKMgStFE7zMgtDtQs1Y9pvPmCQoyR3WXj5ywwn9J4JAtjWbvUYnKwPSH8HW8AbRBQAsMzJi8vhQPiD",
  "key24": "236iz9E1g7oX7PaTzBcZhsD1YiV4AamT5JnjsdWHR393skAJQ4NGiBYjKJEzEbJZ1KvrnmcsSNytWPKYKAc536Lv",
  "key25": "5i5XKVyxA9TnqjxXtd9qa8Henh8oP6HinibPbe2RmW38DnTj6u9crfzWC2LtcJup93SFWzcnNPRKPaRSw2HJnE3P",
  "key26": "KC4Y72zMK4tdz4NCu81h5n8V7R6vszqDYKmACHFNsPFqZZETkpyvYZkZP9PAEnCbajSY3SuMpfd3LgGSGNHsVFc",
  "key27": "2fNqjorGsKcKSRzRk6egmveEvBT7J2e9VAigqUv2rQDGNDHNGjsPyJhSagXxqqMkkv6ZuXDKnHVBtED8fX2AxjwP",
  "key28": "3vy5mtPqMJWpg1fG3ibcTsncah18ns37s438vL32ZimxZEWNTHJ2KiDNsGkKAKfGu2tTca4qdk3vjKQUQA27oMzK",
  "key29": "2zvD1rKC1CDJjRzGtpDWPta3fw4vMCoQ6nLRJkvofmgnntsxCZ4FJcSpAL2juJ1nUcWRzWZrk7wjsasjDdPURctH",
  "key30": "671Y7ZYjMXWkL5BZTakmtrAEaHKAhduVoCRK5YtnbHQ33VZBqprA1UoGfDw2R1txJiaJFNj6acBKoWnqJ3gs4rJ6",
  "key31": "2H6TCiF3BJ2s5k4du9mVj6ieSVruW2BiyA1x9SnyrwxrfMqP5xnungKc4UUgNuPTGBkb9QVJsuAR6Ax2YmUMZhgS",
  "key32": "4phAuarEzhFsMHcMe3LjyWu5PDjbMssf8uJ3BBuUZTQ25ML1LwMpRWq8hLXu4vmAs7kKkHgUd2gBRUub4Hf2FSpS",
  "key33": "NJTCt4GPg6kBGRqfsMcm9aVYPr7RmUJzumf5U6jSyTSAQe9xgJdouRiQ7RnBnidNxQ1WNJBXe8pCsEQaXiWXYnR",
  "key34": "4KeD1DeiB57Y5uVRNJEBHLAiVae6TLyx3aDB2DjmAvQJQj5XCkjM2htWrSLohi7e3mzwNJg4GhTRaSSnAgP4WtVv"
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
