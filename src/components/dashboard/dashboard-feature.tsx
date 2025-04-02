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
    "96fFo9Co3RCJskekucQJMjDxB6DVDUuC23B6P975ouUVXKprtyysMhJg66s867UA9ASnC4BoJGd791Kv356t27K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byoD1bkumXSKSWpwsVu4hYkvDXHtgrMtxwDRoZWBfVcF5gf4uwmtfs3XKfMec4DveC96VytwhHV3iM9a8aHJ9Yy",
  "key1": "3sqd5n4anA4oSPNf4iEgE9wH2bbgXNtm2GLZ5BQEDLaiM4VcHhCzF6hEinkNmwWetsTkUnYFFq7Yv7tJxdCMxY5W",
  "key2": "37EfAg4X2sMYzCr6A2EWUWueQtd9hnggNLYcjtntpguu8jm72Q1XoVXL9833ZAAMn3z3WxpFu5sn3zcXFKf9PhUC",
  "key3": "4DCfZHnPnEXiwjVbNb4EUpgdRiz5uDmzqhZ4LPBKDsVw7bALX4WKeBdzqgY4dHHi5PkV4VomU5H4kr2GJWnFx27K",
  "key4": "JccAjZwLiH76KaNmcv32jn3m6NdeDo4s6z5bXwVC1NnZUmEWQrkztcmWNKdKciWU6VcHtjSxu9vo6GDxgZQPh3q",
  "key5": "3HbgbjvhRU8gyow6ARDmMheSQAd9JVptQUVVHivd7owAZMrEFJPVYF4SCCeNVgH9baqmv67iHf6g968F6WNqVLsP",
  "key6": "4ScqRqjBAJMX8egUuu3U2BebKBefPKPEnHPQskXyiTuaYo9sEPpDwHDaoqZ4g3JzLaWqR6ZNvNCXeHx9ez331Dtd",
  "key7": "3w9Tty5zPMMieBEYDCzHjTbiCxi3wrnnnQaJTJAxrosMV5uAsTkNi2MCKhXYGBgKPVJgQMaFepcvR5kPJ8UBfkhw",
  "key8": "2bVTyvcfvsNXQUdaSzY6NgA3rfiBkH8xi4WpWvb95GHbaVtrz6BMjWm5ZG4dVdiZtLQN7P87Bjqi3aWatEMNwbSi",
  "key9": "22bLTSea8JBPSY8bXzD4ZzyC1WRUEZ8Bo3fTVnZQMrFDw2mmtMWmj4wGgh5kaCvcFiHaXERbXRa9cQLfCuYMjMkH",
  "key10": "5QZ66E2EnhAws8NmZXAHwn4Hzhc7EuLv5r3QU4RRhFEafWTZdh65S5aFN2zab6Q6vXffiWDS9Gmji7dRPS9FbwKh",
  "key11": "66uj5KS374rEF1NgvsCaBgz3zycVqBsirxs7NTcrnHGnRJ3KDmKTeiviWhUDpAcDs6LnAUAXssHeAUerE1WNLAhw",
  "key12": "sja2XWJ92NTGHw6WSVCpSaNeqxynLJemDpjDm8CYkCe6k1q5Teqrtq7WYu2R3VyXqzpGsPqXum3veEUh5oF7Fzg",
  "key13": "4ZemaK7Gr9TWsw8tyAY8tRy7UXvByppMV4DraB64TX9uMT5xH4XCuFfapeZZsbrMQTgtQse19RxfmiQ3jMJsBdFs",
  "key14": "5BNoXTqsJLdMR2v2Cg7AktGS99rXYneenPgYqwyzGqD5Kfg6swnqkkEAW9rMkN4QPNPwQ9pntoBJhhCZcFKqb3eL",
  "key15": "HHvgMKkfjaE9K7PXrdZ45CgJJFCDEq8ZgCQJZbCCVeTDV4QDtfjNebJ4sXmFgQnua1bJpxkoMvi4tznXHWGvGoh",
  "key16": "3uUEhscpU9A532jYT7AMrtBznMdNyTgUWimCN6mUbFNwmn1X6Fwk93bEsFc38KzykHfzBVqpbC7JSQ6ketGj6fNo",
  "key17": "4tS976wNmByNfyYhu9ZKWh3SRrQFQbLkhAeDhogWQ766ToQKRsdrxmPYKEpWiqH8LdQu87Q88AwR1Zb1FR6ExYmM",
  "key18": "5dXoW8fgUM2dUrPMctUmS8RFbwMqgTYVzEbbrrYJyEgHwJsvUysPcCpDVwCUARuygyxBAGj9GtcuSU4JV1CtzNWx",
  "key19": "5bzs9hWvZHwLjdyaUstVAShVu29B6XxDnsTRKnvgM94iU1Lvtp21grbD6ZQwKGwrkdnYGUpgk392gQ3o5Rhmshnf",
  "key20": "34VZ2VwyC4h4wwumiLG6v426tBe21uXBu7yBcrxrY4UADS5WVyYCocdPmJLfvJAeRC3ukHCjSxRFunZPi8sDvUN5",
  "key21": "4VkNZLn6n7AZ2NfpFiDZVRwdfNTn1jupiSigdGMwKKMTG24ii2BLEZ7KNJW6vyGFXGkkiX59QErUe6p3hJ9NPUpu",
  "key22": "44cq1n6txHqCQZMrJy4PM1iccEY7aMNgUKBYEtvyDq5nLsrzmUxea1Fe4RF34mHJJZEUQerMMd1Fxeted9NnN3Lb",
  "key23": "4hkiGqsnkhLKQnm8QHqcZzy39UrL4ppTCvAig15sQmMQB4JDNwqdMG2VeBPpM1mKt2oyCJpGpgjpNMjtoN43xHMA",
  "key24": "DBkhH6ckHscdFH4UoHagQHHAwguCt8vtWhf7d5MgXwPMxy2sRBs8ktKAcYvWsuBhP1pCu5R4v9zkx9iAiDvLDzX",
  "key25": "5L5ofjXXB5pWGcJrTEWVXzwv6KAXQokKtHHZzbEWNF25Cs6mf3WYKtX6Yy3C5YvxB33h2d15GkuBP9Y2xCesCk6t",
  "key26": "2wE9W3Arjw4HviVpyJ34jiugN7WNzTMDfiGu4TqHWM7DcfYHwiJtbPXNeCeBJTBgLKuDBycijnB9QRFdMm5MeXwZ",
  "key27": "4Z5RhcEnyNXz7jtZNzje74PR8zL3vdXfq6XrrQ1iw4JaFBZS3bU6oUiNqbTJhfBJV3ZEiJjkbrHynwtjGLeAXFpu"
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
