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
    "44QkZkDBLSD9S8DMLMk7QTiYqVd8ycwvqWQFzE2dbzmYSikQpFP9m5ULRHhsb4ccdYPAi8FMQoedhYv2ZS3tp5dV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Ann3hRLDhWYpcWKs6Y42bo23P6Gb8XsWty6Dpezs4M2cGNB3CimwXJoDVSivC9d98UZ4wjcL8bt4rNp4cVjHLX",
  "key1": "51QUW1GoUpLW3CiR3tQ13iTaGSW88g2QHfBJvMEBQH6MyHibg1J2BH1BvendM8h3ekELXpn8EphNuFWCLB6tw8HA",
  "key2": "2H66x7EhQkxaaKVwMkMGq2NpFZRfxMf3YPxAyzbdQn2eMRvUhGyVgpG9Jsug2ypiBUmDdMBWs9xPvDFPJef2ohZ2",
  "key3": "5VMMDUQSxPhk4PnsccLs3YZpmqv9fCJWrwHa5qeKtHfh282VDjfuVRbsXkMhVa9XgG9n9mVrWx3rLcTZaYfvZPot",
  "key4": "2Hwc4uMvK5K5NBX47HHu3wEpB4hW1zph7DxHmqUDbwbTM7sL28KXCNhej41DmuVPiq7fAxbiBVQpV6evKPJnxDrn",
  "key5": "51bE5nbbhhSTVkFUnie3Z7QgpwGUKN2SMCxrj8XDsfmv2VTGHdN22A9Nu5eVUocj43tdC6DrshKzwauFbSsQR3Ad",
  "key6": "5vZsF5N3odXXXMDqtH8QEWQfFFSGW71CxySHKo9qwXoeY2XHRYGpudS4LhCz9mVZj92tnbSYobmcf85GvCnyWd65",
  "key7": "j3h9brtQ8rpKZhJHXNZ7M3AkSAX1AKwF4G7pgiyPpTDq6XoHLkNSgmQJBbG6ZWuLfRCLdeKvPFwJuEvbiAcurfX",
  "key8": "3ov7kTi5hyad4p1aW2WeSDBQQyRddqKHeNczHcun7gR8HKmVVdKxBu1eYHDuAYsEiYV1tPaWTaNNzypiK3veuXUq",
  "key9": "5V4pnJFW5hXCp8fJs3PrtHfUs25aFetPqSJVp24jEfvdXMzozxaSERprntSaq25KZ3emfTM5bcdGhcxg1jBrD48W",
  "key10": "3CKsMiQKDpLLWN3ed4oCzrMUiRzje6krrRn7Sjm34STWdfj1dLfbTKCjf2MCFyp6vM2Js1Br55JVbwgmJLApTxSj",
  "key11": "4rMtBDarnMWzFbhFzKRteyWrRWiCmkQ3F67zNR8dqkvUTFfUtatHyqgJ9JuSYsDqupZscDBrcG82iM9ruX95NTEK",
  "key12": "3FeEBbkwBfUEib8H2XPbV4LVyybRhD9kLNjvQVn7WFYF4JUdMqQDfR5hS3RgNZbhKxDF1BMfAazpimJzK2kCv24c",
  "key13": "GP3Aw6dSrYxWcuZxxMj4xLnhgsqRBYVEnFHeviRdbZEWcw9PCVdEE7J6WKLpW9kw4Tm2GPQVcRd19QgoLCmvD4z",
  "key14": "2hT4dDFbg1Yx8dEfGuKBSFuvkYokZzAgYwob9bcadknheiT4b9BBzux8xQdvNxnydYCnbMdeGFT4GZAN6KpoRwqN",
  "key15": "3vSxTyWjvDpsdd6CPZjiae48T4JQHiyme4YpPRuehWWPZrCZ5CT2pv1oHvNrf5AVyyyZWgnghhv2i6PbhbtRLX7T",
  "key16": "47UJoAd4zK1dVPR2YQtfhy5pdSnWzkUXitMNyuGHG91akKd1nLNpdkcDTisEgUB5g9uEWPHSFZC6ZJid3PVPqkse",
  "key17": "4hV1zsFa7XRDpM4jVAjbFUJbPo1hQ1zBxmYmMYfW6cNEYAVvC2qJmU6SRDYk2K4QadyCUD7fo1b4rWPGM7Fhkits",
  "key18": "PJCXfDEZhFDov8vJxNRwwCM24PBYykM6cnKoZSc2iWjcTUiScyeSQFUc4b6d6PcpayEypb14DMJyQ65oqjfehDf",
  "key19": "37LLPdT94NnXBpAThFmTrMRVa8q16YQDiEyf8kufTeabsmc8UXnusDPSCqDuQ1Q7tgVRUZm2BWDhHac2KKU7ZNP",
  "key20": "5pqYbLx8AnTki16GvaY5qGcnsGiC2CYGXmn9rwr52wEKqugpA5xEBzhtPnaRQFVYodKTrMWYHTdEogr8GcN3vCby",
  "key21": "Qc199epf1h2vhUe3aCVXFLTHAPu1L5uqFgdhXShcG9mt7quiKySQoHBDrvFG6DYyayV2VVZjNDqEBdHB6XEe6XG",
  "key22": "5vsTkKotQXN5hAKnDFzaWMCCqCXRRX6YmqAXdHTq7rDCcT44KA6eGboCTnQiiMsB46aJpM56eM5GniRtSvP4HJ4u",
  "key23": "478mmM14wtry6bq94jTF2kgDySjiHYrrsEUdhd7d23o1kohiFywm68qAJGhhXGttLszU5EK6j6X8M8FxusK883aJ",
  "key24": "4NDC9anUT4zPpbZ8cwRSWgZxJ5pwrpLWnd5MUEEnrdepa7uBHajfr49YysDRV9PjXQpT7B8GZP8Zice4HhyghND1",
  "key25": "4jb2u9EBmNLDDjSzi9QWtDvkt49xUcTcKFwXD98h1ikiXtYWjKbRVdbxKhvqEpqmMirXEJKpn139jPoPpjRjHUGH"
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
