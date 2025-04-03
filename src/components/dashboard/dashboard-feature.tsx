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
    "2KMr5fQyVjmaUttUwon68AgdKJGScHWtJWebx7C4YLepi73DVdGP8fL8rjbq6UprbC5ZTRyBwqnBnvSPiJQQJTxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nnJrvfBCUpjEDt2xgJNg3v699nbs31Rzm9Z6kycbWft2FpZMWJjWDhskNWbMWPDkvtZvPtGzD7LEuQBUtmpDLDo",
  "key1": "3iejJArPTJA2t9K3rZYJAcp45UwrcCq1d9ccfxgbifpCyBkG1joZSLDnCrYF12F6WeovNWnfMEW177hcRDzteSZY",
  "key2": "5ZotRsatxX5QJHTEvr1P4oTJc3t2SWCYkjE6VbYxqSDRpNXHQp5rZFUokZhGKRwWEB5eAYqC2TCgwfeGEWLZU6cn",
  "key3": "2o1HciHG9fwkdNe3TVXjZ1fR3kkz5vKJzgAwvck9dvUnq9j1rM66xA1BfJepCE5F4hs9TNofEe7vo8opDNHDmKRU",
  "key4": "4fWvrMahr89MWTqxc5gtJ1G5jiP9UjTbeiy74kY6WwP8vCBLg7rvqevfConZAaxYCf8n8MHLsHEPbUTGgtbohDD7",
  "key5": "4vXyRpdxSJQwZ1L24AgJg3cUhALPXYfqhDEHKhQfVH2VsvYsr723xbKb5ioz3kY1jWQ4gcoQBf3UeJhRVLxTR3A8",
  "key6": "4WM8qMbK2FNM98uafsWAcJ1DL4MvAgunKMU8jw5P6mKpuBALxe4rny9yjD2xNjW3SgzXKVjZUuj35ubgqaFpXqBy",
  "key7": "32ntzcz9MAk2Cfvb8LsLmqydug28xJV1V9mcGs2empskRiM64abfhKKAcPw6zVPyNpqquYY2jqH8FM7wBTMFkNxo",
  "key8": "42TVki2KbUEv73VfCZu7keJkrC82tfs2gsdFiWZhKoEDSGFiA7rzWmZnJfM8LiEYbjrKNhKE1iKfLphbFRaQQsKQ",
  "key9": "2TcwDq4mB6UGKD8wC2B8abwnFq7edkrRM6WdReZixGnru1n7H6t7hdxyBHdhFmn6HbpErHccPBzzBBSR4biQu7JM",
  "key10": "4jd7AZvNgzuaeSkSEX9QjpGowHdn31JacT5Ri27UKdg4Z4RZKmfiPKTUDKVeYRMrDAto5cXts8Yh2jScAX1DVkWa",
  "key11": "4j8wx153RLK2WmCkEAQEiRe8QWCSCQ1rouXHA9jtx3fjQkCBWJ37MdpDjkgvjjD6kthnzVKXyFW3Kz6HeAMikwvG",
  "key12": "xyUsUHjz1Me4xYy9P3L5ZCELArm6oehXbN88AcsXAWPWmwcUXjBkM2451FHoaST1w2nbXdSZpQqLHX52ZVDgAvD",
  "key13": "35XLfKD1vhmixXq1AMiAAJQMuRb4UBmtA2dmykU9xFXDrUvuxpGEAUSzr7kRKiCSrXJrpn4bV53PyiaR6tb5UCp1",
  "key14": "4rNfyZknspQe8PW2e8EU2BTH5tRLQ7ucpaZFaKaRMgdJpQHv4YcDDxzX1uGkzRifWtbgJ4TVjDifJHj9gfHSKwx7",
  "key15": "3d7Kup1J4irBMt7pgtvaHZvdesqsnMyz8HuqGWrhRevCjbn2r4r5PjPM2zD7424YeapPwHM9wHKJn2923VFNNjeV",
  "key16": "2QvxL5sTV4oRMF57UqmCVn9FDQJtShT7JQdtrNYafJdeSginkGSnhc5qPnh6LPGaa1Vb8Lywgn7FYJqqUYmrNX6x",
  "key17": "4kdagnbsJnp2CCjauXYSbBG2mXRG7g49PiBA2Trk5L1pFMSRJHUwna9VYVQbr6dezEBg7Yh2yXZ9K6LJvoanq3i6",
  "key18": "3eX1EanrW2j2gSwc3sBJpmC2hHLMHSJVU4yvobsJ5fjSAGuntM5hHoVp8bm5jF2PrBvhKQ22j1U4dxDMXewTj7iz",
  "key19": "2VN9avDK3KC8nYcx76mRRe2oaf2wJCXtdDEgnHb2gxH9unhs7G68CwX8SxCW9Es2HLrShUrbzFBdMxyuKGQJfasV",
  "key20": "k2hFz8SjLGAw9smnytuD4dptS4GXL5ogKg2jTdn2A84anDikVmidW3xM9JXaaSkSRWc3RcEnajdRUBHgnant1zh",
  "key21": "4yDEmd85XMLyfRaWf5YVAWyQX5oAXZittFHF9JddVVrnGje9WLYB1QAMFKJ34KdV45i5Rn2PqnTnE3ZmD9LQUHe4",
  "key22": "4TmSzf9amSZHKXyoiiKbX3zhJsk2L5TmDEqbBxC4QZR2vZxiV4EY7GVRBYt3sNr2LnsiXgawohu5U4gNikThauvn",
  "key23": "3xaqHe5jK11CDTRfSRhsnHecad1hdKqvLxf44KZnMbzLjdrCHL1sn58cJ5i4hTPSvU6oGRxYJsgS9YuEW5WHSr8x",
  "key24": "3YEsNinbzE3zCZgN6cp7Sr5EikAtbr1pQxdEDygwmhyoDKi8XeoiGJ3wbJ7YwxbNUm8K56z3byq2iZu3dHeMW8JK",
  "key25": "4wH5iCXUvpmLFBRrRw7Z4MjEPiFbs1HdxLB9rsuPCEjbaxF3tAVDLNYyXLYrZEJdQT4TYAAV98YLtFAKVXnSfuw9",
  "key26": "2y43BuYBoA6vX8LEpmHWTHLWhbvkYzsJMAwGH2MXyRS7YeoqpSZA6153HvX4hvKQnaUmeyVy4zTAVBSq4aA2tMxy",
  "key27": "3XrjVA8fowMP8sctzL5od8iFN91tzMjjXrvc5mVn7cj8FufT2R9rNu6QLHMUGf1mcXstWpNkzxwq1vF73H2P3MDn",
  "key28": "3LzFmZ3ooFdmCgPeSyJKwnwfBe85ZMwa5VRKeRvM4pBJJrvQiPTkZK6doKse4Bxc1M85usR5VL2phex2SXTWjz3p",
  "key29": "3Bbmbtr2na2jAmh29QWsPPU5trtDC3nQG6cAXMAqY1Wk49C8AzUdCCBYXbEuSUZYfQWrBezm1j9KYX5FMVKuYcgx",
  "key30": "2ZNuJVMREbAaKPqnC3MRCNKGwMyo6wXDbUhV747G9WvmCfvf9sxYbvxCnBYWb3T8pGfRM9CYEmHfWEq7NNGJkQbd",
  "key31": "22ubo5EjkchGkeQARAzjAC3HB8i5SjWi6SUyLL6eD5cJ7VzinnzFUcVjwNsogTHLCxQqL3Q1v2aBrjMDUWX4tvjg",
  "key32": "3NLPrkSK2ZxxcV3uBNMtRwdz2zfnTM3VhKVBV6FHZT4asdcCVqahGgn9tEfSw1zwNvoSBdi7EqbZNGawwqgJ9utf"
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
