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
    "21EMT1oqg3FqzzLAV6U5FQhtjtXgqmK1wAEqfzj4voUAYkGAg7mqgtPR9WxpZmoyAy4DoBB3RUw3DXfJFMUSBQQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iS1UD1D6dLKQAAN5yfrV8PcYKKopokEtzLMjziYVGy6zREc6gQqbKLgN9zh8zF9uyW3QmK2AD4AVKidUL1LCRG3",
  "key1": "ASnwEk9PTrqQsBGcoNVUDAmSrBzaVhSXuJX6RYyo6F93gCg5PSMfNb4mQn3LiMAbyd3HTFqhYGqhJCFQL2JnAdv",
  "key2": "5RBoQhs7oc4oF75VHiM96oEtKjYBAwTgs6ocC6S2rieZxqQLFh6gdGQD4mwztBpCUY5R1DYhbqJnGkjgCMmnWNCX",
  "key3": "soJfLX3Vy4NnK4uBWVUAHE87uqZtBzon7VwRKsxrPW4JvS48uhzAeWXWikwQGn5TH6b94not8CisTn4BpNddVoW",
  "key4": "4BFy3Zuh124Bc5RmAYbrCA8Dr7SCSMrwKTDNoQBMkqN9BjJzamz7ACHutFtKzrAmZ8MECrgBU25xW8gk6spqTAJc",
  "key5": "3632XAE35GvE2BZzCsyJj3ZweqWeg2yUMkUsQNKbr2L5bsp5J3ghgrXBHf6yiUBcydMuoxbFeLq2FibowRJTY4a7",
  "key6": "2oFqU8rXZa4nbtuYJWcjRkTJATPdz51rfNT7qpN1yG1Z3Lo9dGsC9KC7wHp8Kwq7HB97Qnm7B94CjNWiCSJrSTDo",
  "key7": "44L1wunb4d3DXiQDM8EbnTHK2bcsBgUtDTdt4gpgQhi2vTuB54RETZ5Zyh2f231iqjuXkrg2JwS6U3qJPZYG8k2C",
  "key8": "4hrWhEAtTTHRCjhy8j5c35QVJEkLNx7imJAt9xtjzQFokEcY89HaVps6S6jqduPUUr3nzzLNnsQmQDMJRCzVPSec",
  "key9": "XqgCYSufugdb6N7uniZDfSEbM4HGH2ZMuSYGcpcS6iDyrBNK2gxGyc9PZLAyaoAs79sFk4J7xvLsrS7uQQ89YXX",
  "key10": "2cyGcuQP2wwcSXytjoqgR8VLqsCC68WBTNwKUBBBDVPM9anKJL6Sej7Q7Sxvjix9ebGaFNnxGn2Xwb6axUKMGV62",
  "key11": "51RPYYoNkzNrZxdP3NnKawqjfTceqxqUrieioMjTeAe7xjsPdX2DTbEXRdujtBkkrfUeyRYtewGFcLkxgoB2k74s",
  "key12": "4BfHbcrTowJYcvdBesCWf6vNh1QW1hJJmDGJTDeMdhPQdcuru2EgRPVrBYVCcsUx334RGzrXMww6V3suLKKiFPgF",
  "key13": "5ydKHTHePRwiUq3kPZSYbg86Y8dpjRXBHAtRJixfHaN5G8mVPf7z9hyfbJTbUxHRSqBiRrKwNmE8caF1fUFVby7S",
  "key14": "4WBRnBmYAx66ZWm8TFLjDffHncSb4pxRyUD2W2Hk4zVdY7h1TT712cGAtqfDGZnomUfyNYPdrBErEU5G8aaZTn6q",
  "key15": "5TZnodv2yKawhZpGHDxkCJUasQ6uNTrAez1cjGSmbMZvjzKByHez7iiuKitvr6dv2MYEw3GmFhWppX48JqNVsuax",
  "key16": "3s4saFLjCqG6UrsTYZF5iTt2AFLUUSk5poNaSCLt6XyRBBzt8bygapDzgLhaVFELjLTvTnvJS2Xs776gM26JAdo",
  "key17": "31z7R6T27cFZThX8nPrbM9zcqMTNC7KZFToC6rMGbpJ8RkXHqgqKYw9pWt45NPFy7vEoG7tpvSVLk5TAu8seaEFF",
  "key18": "3LtW1Q5rpMSCvyNmWvuzin7pcFuNVTEx8R6pksrz1xpT9YEbBYTRdqpnNrfEQDViDPpnYYEP9ge5uFUysT7JAqGY",
  "key19": "4QsnKko62Q87UYWpfEiaLFY9kmTWRuFoUxMiBV7F2LQErH2ikFUXFwHb61hzzoxTuU4iT5F56j7kHk7WVrK3NbeD",
  "key20": "2iRSk5SgXgy8pGiqAhZjJL71oPSLxx6x2G8YrtiDQbGRZ4HyiKSc74wpY6nqTT7Q6AuVoMHqHX3oBapQj2EtvaPm",
  "key21": "3eJBeXqhHY7rAv925QyzmJSTgdEPtM8PzjuCCT76CLefaZgd6ePzMPa4HL3FzeGd1SAaKQRdQpYmEQow7pZnvFF5",
  "key22": "5QHxsV3xfXHGySU9KASgZfHrSqfAbkFhydvay3AsxNdeYZWioWHG6jq4msnN5Y5Vfhdy9kHpmJiTL1ghU9aoYBQb",
  "key23": "43acmZR6Gsr19tt23d7qQyBee3JJ8j1qCoLobWRadD3qMcLxTVxDimsWtEoJkNKmQq7FfDFzXBeowT1sb9ABV2DZ",
  "key24": "6693jvhrPtyFcySgdZgT3jx54dBLehfMH7S68bANn8GnvWdzSAQoDYzBa136YvwXXARkpjDYYorWBj3He3hy7yRs",
  "key25": "gzZGtpoBX2tCcW1DZimHDQUtbwSAZPwQaPmCLbcGdFyZsCddiHBU8UHhackgcx8RM3BLFWxcTwDuKGAqrrpDgqM",
  "key26": "2pTQjyTVqomH2zqibhG1kJc3CTzzD9NVyCcB5SKbqaKwZ7SoKZHso7DaxberyYZkgTeTF3prmTBhwLGvWygstYt7",
  "key27": "2vrH3yaK71EkbBS9HMBEQ8WkbKWrFZDQ8yfiv7dgSMtRt7UCrLXhQzEwgnvjW9voe7MfMZGAuoku9DTsSddUSw4A",
  "key28": "4kCBBRiSDsGWj7UBZNyRbU811fGSccXxmUYW2sWKHgvuRhUx1h3rXHEtyYuGoFoSNHzhYjkjEnU5X2NEQP1GyrW",
  "key29": "2i7TNgjg2DoZQb81BacBYUzCmR5o7x5D8THxvM71KNHgDznfASeWTHF4L2Usf6Qqc26zXS2hvyXScxzKm39mGWGb",
  "key30": "4diQRCgshH565JXptetqmqasD9rs3SvTAyNXaJ2FzFDbG93WmMxnENK95vkFL1fntLMqqhYX2yzaidFn1qsK43E2",
  "key31": "3mDk2AyGZibASdjrqa1nPzYt26hUYBJsSsLibcMbgb8uyWxubGDQLX74Fwsr1Se6N2ix6pucJfAzrkfxkKPSuUR4"
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
