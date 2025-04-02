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
    "27SLUGJYV2r1XmPQ9V6fo1FSqtdw81Aaq5rRKLKved76MSA7VVM3HBpoMXH9xiMZmamh15iWayK8SrrVaQcsz88s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HP4QcxsuA8vP7zawByqSJjfsHfU5tGVgztEzWd2ugdvqZJa3g5BZSJopnhCAZdhyWpCMfzYqC2KELFTRGHPbPtu",
  "key1": "4qFeZSZiQj7pwZPUGz4ApYjF4L43wtRy1NxdtSCirYPiUWnMWFReotzkimnFkB1gNpLF3RweCftwWoSCHXafYxUj",
  "key2": "2enJK3PbmiB38zHtwqXdj9LESwmcnV6NsQf2AGqnY1jF5FkLcqWXjGGo9fXjEkTRKg9xb7WgZHzjxDq4p7e6oarX",
  "key3": "4be8Dw2jo6RKD6Ujke2vddnhLfnRtYrkkwXS4XTt9s8ncmsyLJPdckHpNxt99qXPqhK8Kw7uF8RZsKKttPznZqk9",
  "key4": "2jAnHN4t4Bp6czSQB4JEmU21odi25YDTAMgpZcnCPEpQMzpyEL5cXDfhwQ4cXMwj3aEVnLmUQZtKX9eHk2an6uY8",
  "key5": "2eSwPkWPZWS5PFgzp8S16bhhuuSX6j2igo9CZQyELVoq8PngjczEXdbmJFNSFYp6hEcVcYoZ3H64suUN2YEKqnLY",
  "key6": "336uctfqtfiZcttrb8W8hCSiNczEiRHUiVZGPZmnVHRASMX6efV6NWDtWM6TgAWWYM8rHhbkfdjCvJxTVGMaAuDd",
  "key7": "31mFCNj4CZ4fAqRCq1NjmFXAtB4nLpZSZPvo5YAMpjhZKGLJWMqZjmUDD5NoFAJnBM3L7H4fDRdycFF9jWnCmwyP",
  "key8": "4caEDhuiJTopfYaYSw3vqU6hhFN3zSpmNMBPcdkvKMvGaya32acCeLCsTigTSq9xDC7axRLtu3ZhZeE1bAFfs9BG",
  "key9": "2Quhz8z1GJnnDz4m2gKVCV8z2UfjHqPHLmmKj3v7JwaF4DPoGTVswpK1iuPqTHfKYDxmwXTC2jUMDmxqUEFQx6rW",
  "key10": "3W4G9emJeuhijMA96cLXLmiLLAk4KEk2QgfQwufq5X1fKvxu22RM3ZUB22GT8fiZpcqbdCBoq8yqQ12eBh1x3u3C",
  "key11": "47yCXNA2AQFL42PRuAHAraVtXVxFb6xiypxSpDWjG6aS2DMo6ooeLycxZjT8sm1zS3uzsAPdHJajckSks8DtaUBK",
  "key12": "XbbC28yTKj6qLZGQKBDptSeQAZ9cqsTBgJBLeoUi5qYfuFdrGkBPUbUugPjTKLEChSsRYQZFwTU8QGr7uicqef6",
  "key13": "5WfJMKxpSV6tmMLJnhsjyD6dSX26mzVdR7Rrr6WVRzVW4PJeVmwVnoHkftubLxrk7D6DHJpC5y6qcqQd3nPKvBn4",
  "key14": "61oa2WbeFabXNsNVV15XwoRGhNBhiaAnFd9R4VG2SVZuVtbkiYimcaLgMvgz99hBxueSAbkZZWa41Suq4Qnpii18",
  "key15": "3Ce69GgQLfYQFT78DYmX3SgyfqxeiEagVAPr1YCFvBe6Y8BjCccNry1axhDDr9dt9XopyY5hrjKBp86WPWBfhiqx",
  "key16": "j8Z76kPZBFjnK78tBSbzAXTpM2p1EVFhuiaPzVhMpTgDMoyrq79THtLYcKkJ3VkpD5HUGFNVxiCDKAK8Y1mKsgy",
  "key17": "2V7uXauFoBXwgoTfgMSJzfWJvNiE3QYN3Mnj7qqYUzfQwxAMhHwcW5RJPbeZeUncf6RzZfgXAtMh2YgBuTTJktqe",
  "key18": "3J42Qzv7mjTYek2dt2DE4Fhuc9viu9cnHoL7brzJU9CyUK5VKLWZtf7c4951wvg9QoDjNJXEyM1qCEffxTiwiCm1",
  "key19": "5xr7eus7wtWtGqR17EE95dqe9TFPmN1qREktSKNwzor1CEKGZS5hs2wP3RLh2Fw63ZXw3r5vXSJsWpG7F3jjehMR",
  "key20": "3YW2RJq47bhBaipXRWvjq2jXub5QkWVH7iYyo4YGZ8LmtRMaKaj72AtSMtjQ18geFEh5WP9RmWt2cHZjV24Vk4q7",
  "key21": "5pU1DioV8zHW8pKYoS46NmR91fiULFYnAjuKprmqznbav4fdLKzvN84WcZmRFVNpX5r3ndDcJi99SX8X8mvz3BEe",
  "key22": "2s7NGh31DipzbZ9CDW1NrJjrG8X55AiJVnRpNYH4az7QFPUzLedB9wgKuhcyYiXzpt1aMLHce8GGZWiDZ1HuwWgY",
  "key23": "344ky3K9heMMJ3icty34aWww3BrZyMpzUbAQS4jJZnZaSk1WUkryGs7c828iwJU9TUepWsv4C5YvxS44EERGZfaH",
  "key24": "y5VXgWajrMyCQSZs33HbzHrmgyQJ3rdM61qNzhq6NAD7mpJsxRtUS5ug3BYzT26KezxRxdnSxxCJuyQTpV6cxxF",
  "key25": "3pZUg2Ey3RePWtBx9eSvEdGiHanAzUxsbybuV3aokRXaNX33iKB1k3xXbHqfzhHTUEnLkcY4ssNVFA8PSr3uzsVj",
  "key26": "2i2kixyRjv6ctEA5U1f6Kh3jm3DiAEAEm89yzsXMLES8KsfXj6Q5Vg8mN9HyAvfMR8DeeeHyzumeW7EMVugsL2n9",
  "key27": "8hDaws9ajjRbfpMBd5FQSkzUYoS4N6ZctZVtUr4AVkT2JRLDjU53m5YYoqAj92WddQGGsFhjuttrQ3gSnzVQRPt",
  "key28": "3M6e8jnM9fcCBPB75vbydFDb79n6fE3KiDDz2Bw3zCnkPkEbfuBh9R3s3JL1EP8cTGzaAdvQEMRzfVXva5sY9kHT",
  "key29": "2eKf5iioDNvexhW3U8N9MsLvwKrt3YEovCXQphUpJVoenH6mYSLctRtBjQbj8VH1DAUsqmixamkqHr9xqJf4JDkp",
  "key30": "5uyFKoGwrSfxKsEWpygGcUBA2iFUqvGsUX1kL32SMu5J75YaS5MiTwCSsByNEa6ZTbVzDjtY5sHEGMHRtQWgLYVx",
  "key31": "5cbvZmmryVxepxpe694s1Qd8sFx8RhcZo1LXNczxfdaevFDhRa6K7qD1tVDPguALXkKtFDPVqYjJ321Dc568GWWU",
  "key32": "oPLrNRFv5jYdTmYKMrpwjdqQJTLdgi8ezJyMVJxUhbz3ktn3E4GyTYx1ojfnfQ5wm7zpqVxgRCG8EoJWZMDFCu6",
  "key33": "38XQSDmvnQBtHu8atHtYNG84EF73uA9a1aGbBJSM28jWfxUzqFxGFKenLA81DC1peaq191gomTeB7qoxTcdr8R1Y",
  "key34": "jqc3YYk6mG85tZ7iPEqbTEeugqG7e81Wf9XEbNSTvW1u4VRPyobTqX36MfwZPatiXgzpoNbmNbNnaU9Cgied4j7",
  "key35": "2T6U1FCVgH2fxuxX1BfNXRuPJFZmUg7wCth7GMEFomPPAzkKEjeHqFeNdK9o5fzTsfEtmQLVpc1ywy3Ksg1sZExN",
  "key36": "4F2baturjpSsR9XY5qxk1RxVzQsWDgH8Gr1CtYWnZS1HeYtD4juzSEpAPUimEZ6bz36JnRfiqYakmavCKsp5wNDw",
  "key37": "2ASAEj7jnY5sAGt1frXRTtpQ1435566Y8irLNefh8NxBtACoHV2uoL7px1hN5TrpiZNhULBfjmuToxzPv7aHLEMP",
  "key38": "CvpX3PXzzYhgb6YgocXqY7Ab2M1kSTYaNjXquxBuQe8p8qHDTCXxsfujNebyWfaC3Z5s8TZ1rWeA83dG354CsGz",
  "key39": "e8BLL2bAbgXzxPqNZzMHvbiTWCVE876P17VyeDJaEviEfJPfgS7A4N55u8j2RfvkyidZWcdhftXPu6ZeKxGk9QH",
  "key40": "6saNsEeumitFKVv1a7J8P2TVUxMhYQB91mYJeW7ZrTV1v3in5xgM8xRd9gRFxQRfcoE1HMYdmWzXAA8MLJymm5j",
  "key41": "3keXDyUHodPozcGGsnEXNuaLXqnZh9D5Q4hGgYzjanhBVfwW53L1aqy5H4p4EQfqwmMhqytg4y2HpCWixXmdn3io",
  "key42": "pXznaJN3h49b1oxNHDsEh6kR1nodFpCJKEhPrpQmXHxaCBcPVyWqXfiLc1aM9zQiZ2C3sMqSGme98awtkQ3Wga8",
  "key43": "3AXsNWFH4WwgMwz52Kq8c83hMw53fB4YPeM7bZSoLSkwHn6LysaB5CNXm5skWTEFeo3uHmS9hZE7Yu9t91bUEmGa",
  "key44": "5E3vNtkZwS12xocq7RUpx89kPU5V5usseTRDG5uH7fKZcV32iFxvxurdYfLi3QxXP7kDwQ9Ec1UWUbWXRdz8eok2"
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
