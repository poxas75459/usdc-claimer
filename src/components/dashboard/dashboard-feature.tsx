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
    "37spQrWq4fTxxavHrPaQuGdxpGyVzf2YwqbYuvdwXHY3xE5vyMFzk2cK5Fnjic9iDttU72NpqQ3TAfxibbJwZW2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cguf6ZPr8bANitRSoUSk9J2cTd7grCcLFAPQ5Nbu3N5HCw4CUU1bjbjwddBB1UYrhv9ru2y4gXWWVp3RFFmGsSS",
  "key1": "599HywvYaLtEUu72xgnhQGSBVGbFyDsD4sk32cQgKv3v9harHmALM29GV2Tgm4ZKoweNkwTMGzXvq4qLS1Apuxbi",
  "key2": "2EF5BFnxBQQrsKLEALewwV3Z3cRVR3zQoiTZ6YW7MuKUWAgZoB4kadp8Jtz8DcwmnWa23yWM5amhkd5xAEb6K3xZ",
  "key3": "63wQeNKZqGokFBBYubt3daCrofRVgYJZmzYBus5xRpkrBxDXS5zznZouN9vEqhKG6EryoRd8gvmJYddhYEN1DvMZ",
  "key4": "2RN5zEecKcbRcw8hoR9FYcoJoKxqJi9KaRyEWVwoZ6eoa4BLDNzPcj3nQn79bo7p7yYknzrbwHY5PSiPrn6XUMWz",
  "key5": "42BJ9pe2Vf93JG3uQcLrgtNgbKWtGfXJ4soLF94kbxPKDv2vZkYBTmQnEKrRkP4NupMVpAD4RRTRSzx3Jzk9DSJx",
  "key6": "43KzZyxCtRrUkhAa9oJsB7jqFzFNhaEi9To5AHA1pjxoRMiacMBYmeSUy8vMiKg4ebGzUghgufgABMWY8EM16ojU",
  "key7": "24q2hq4BVS5XrWWc1eGh99SaoHwGb3CNjMsxFHBsbAGP3Kw1rtufhVGbzbN8if3cTNmaY95QsRjokWQMcriBVs6T",
  "key8": "2uj9FaHs42yZUvXhpwer2onFopUDJvE2t6jjXxCdHVc9tJ433aKDdZnnZug9YzbuGa34UjYGBNUYi4PuwBB7gXuh",
  "key9": "2Fkytg4t8Vc6K8Qgohbf9NHis4RJSjtiJB22fvb9YrvcY36uW7FCifZtbqUwzZMz2NHV4GuUz1Qe67L8DZMVeebL",
  "key10": "2MwqY4RTMWBJomx3nB4G2ToH6TPd8FVUEMM9xjv3LC6UW1h8cEMT8if3GUA6M7BKSJBiqqzt23MKPrdcDPmCZrpS",
  "key11": "4eNqVuWAmBwwZ44PyaFaii2pQWBZ2UU69A5BZSMwdu96UXS3nNN1w6ATE2VJYhbSvuJBwsL8LwVG6VTEHH3YnAL7",
  "key12": "667d9ZMEgMefxn8uSggvDfoMiv3zaauFj8QrMMwmWCW5BxKfkqQ5UrB419srYqCdE1opQKVPP93KuoHZkRSseVyh",
  "key13": "jbZjFdNsy1XwPctWgUaRCNwtKkUQmA1kKQfHykKra28KFpckJtoTWEcoonGuXjfPxbVVArUGYCAwgW4eqq9R4SF",
  "key14": "2yeaqGY3vXPAAnzU1Ugoogs2fUkRW9tVERSALbc9cWwt945X9JovM58QNUk9dAgG2qqTCRs3TmdJdDPWTGheomeD",
  "key15": "5K9oeuc7QEbvEjE3owAG6mV61Q2g7N2mG47VRzcADbUgYA1N7tcwtMAQz3kwsaoaX7w7VX8yena4Cw87QELpPQk",
  "key16": "d3hA5BY1fm8FDTUGqyQetB5qfKYuxWDQmkNJ46LSnhHNsyg6Ny3D2QqgMUwWGpaeHRYuxWp6J2ZzCXW7RuzHehz",
  "key17": "4GvVgphJ8qQ3Wy4AkyQwoAufojrZ8VWMwceaLaMTWjUXZUJmtqjFUnN1Z1sfTjYELYc72fW6ZxA12nehNWJrVnsk",
  "key18": "5BTorkgGjiAkTgxtt86mNpzWwJGrrLs6YGcxA4CbGjL1eJ1Eakb7JE2ZXtgePynQvPbSgozYzw7mG64SLQaHSV8W",
  "key19": "3Cbv2AXtu2fLqJHYXSTLVpAxbX85aqNXBHQfkPVmQDQnhtgZf7iNB6v69enSB7YoTy24PBjNPQ9xAvmPmc3dJKk5",
  "key20": "5nS5Drj6nA8AemQnrHh3SmvV4Q8b2o7tj9mfPvrgmN3VvFtEH177yKQq3mxUQLd8UuGQNjMBqfNWPA7ZKsqyStkD",
  "key21": "5vf4zWsaR3AVd7ShjtrZRqAM1EuCRVaNNFc3qidX6a6ZPgo3ErEeYvDDoe4EVAbid4bmhX8JXQACJhwbEkzJn6Ka",
  "key22": "5jsHv3gtP233E9Lmatda37yT7GUoSxCvpm3mbFgWEfMLsoXhQUsBLf7UEHzscDs7xoLqFSkerXTNryWE34fHV4LB",
  "key23": "4ASpP4wpPLwtPy9H8poMKfXUaiYVcsr3k5CSaUDdgwiZ2XQbqnJpWwujarbkTHk5JiLv5oqzNezz8AcbhAnUXccd",
  "key24": "3BqJBYHciqQotV3RNcw3iFNGBQDDCP1Xn6Gg7FYHTcpJToF7JCzDbTZ5ufaZiRnrWiCD696KZkMvKEZbcng9isPk",
  "key25": "54oTv1cKmsBT2SYjAVqNWDN46jgWgaHpPjyNBeGannsB8h6qKhR1FjXd98hJznP75oux9aVZBM4ef6WA5D5az4hs",
  "key26": "J87oy6YXXw4X4kQd3ts3Eozasp8xrvhXicSfESNmhfdGBMU1MXwNatf7ApStDpgztgjj3kPLqtE4cc7vfRCX2Vh",
  "key27": "3X8pvpbFgnjWgn5iuCuohbB2jsu4MykWr318fzkHPH8Ge7hgr4LTfQf2BNTGFVwUSr6d3MpypTjikNfEwj4DiAKY",
  "key28": "3Vvmo4EiVPLYpRRsRAJavb1jkXkESFhPcAWwaSf62o8wfrDCGADSvzLU6EKVTUYVBV1omDS6S8amxQ6b3rqj3aip",
  "key29": "58Gwbp8svAG62Ch1kGTg8DvWjoaL2EmHgcQkoLxnPZtrubwRsH1M8Ew332tXd6C4o6Rdmo2pziGDYCFtkGD19m5k",
  "key30": "5FLaue6ZbpktC7ZN6F8ijZc1E1qnfQYHXqiB8KHct7CaVvA3Zq11WNwY1sYjPkXwvLcgu9yQx7YgLSB3YgvpnUqM",
  "key31": "4Z6ymq8fumRXoUGHcUUdA94fSXNfASDWgSiKjMKBQbWQpeNkQDBsqWUsbGnv1ch9CGzfcGYQCD5CQ98Nf181UJjY",
  "key32": "3qR7E2iHoeN8zWtcmVnodWg5RAKazsisWSRAnh3toywEvRhvxJqNFQS6duRth3bU3HZAJeEeLpRP3nTrZxVYcf43",
  "key33": "EWvwHmUJ3TErZ6NVhmw6m2iHotfYPFzJjvooaLxXLYeJGVR16pszB5P6vbgSZEH2montEaim6Vu6RTYWAs3yYsQ"
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
