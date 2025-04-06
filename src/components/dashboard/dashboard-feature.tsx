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
    "5USr5C89hHncsD7MLXNvaxcgxyxFdqFaiY35S2AMT6tB5QrzvuirdW4XjKRqKXUDEYfe9CvC5vXowM39EcstgUaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vv7qtuuxU2s3bKi2TP97ZND1LL52yphMKjJTZ3ud7qhhTsVGtguUeSrk9jRoHE1N22JhafwWouP2KBiQC4t2UrQ",
  "key1": "5MjrfTQfMhtXqyZwfQjo2zQtezJtPyb3147Ldcf6rNG4EVYWVCsKH4UWfMcLUYSHbsz5ieehQ64mn6nPf7ueyyGh",
  "key2": "5hQaBHhAYZ28mJp9qtP6Nv1VxsTtTpvg9TkgX4g2QMU2RXAPybALcwCttkxPtFqDfqAtFNDTiEQWrFRWHi5tjNTb",
  "key3": "3XufUnMJ58MBbd6JR2jTsudoWG5WUMzKdRRgz9mpS3Kj1ZshgM2kJsUri8SvPTUtnNwawmvXWZxZ7En5UdjPMwNK",
  "key4": "3nK7J1zQxk91Qaji8MTBhxSLRBskeUSDYbSSAQeQwwTh5m8ouk72rGaBiX9yDNyfKgVADoJJeZitsdEhEHMUvCeu",
  "key5": "3V78dShNVCHDnYh9bAJLUyJVHGELbJQXruj5iBFCrwvLmTEM9SS4F5T6GKkmFKBsQCgMuEQVJurGHdrJKLFDeeRk",
  "key6": "3xAj8NFh58jxsZnaUCVVHeADGzhdCxEGhtBPDJ5S2xMMABVARnn9u2EEvib4dmFBLC9tAZmsJxHki3UXSMfwMJ6k",
  "key7": "53E4C7CSVN26uNrG2v322gXZwRZtbRbqyf9YDtYsTRMWYYw6cUw3r9qcH6dpEh9vmJxvG4G9tHuLHr527AiKrRLX",
  "key8": "7ZSHgVUMj4RGQFk5e3fyjtTUanVvN6fVQBMWad8HaNMy49dheUd5fAonkPYgmRs27f52iswjvNdt2oM18pcgTyD",
  "key9": "4qKA9nLiPoQ3k6NyZ5uuVG4Ly7mG29kAKqxndFsxzUSwLYUhZZexmtWaCPda94sS9Gj2aQ7Mkq2fV6V65np9yEg3",
  "key10": "379NF8znPo6YhvVPAA69TLuVMXeAJMBkLbQtqmCgpPBmvRzKi8pmiFiWqU9kwjqVBndoidVE8TVAEp3CLFAw8eo",
  "key11": "5CsbVZAfmZJtK11gPFmg5nkcqmVWhBWyoEhBvRkW4f3WUNmZhEgvwHCwq2ZwHmdU81gJgDrVK5So6div6VZu3dFP",
  "key12": "5TLSf7u4H16kfEqpwWdDMmrCA4RRrpZYMTLG8t6gjPq8ydTNrvhsoKNDiWjha5Fq2KG1fevHJQ3kGSA6PKckcrc1",
  "key13": "4MPNWzyu2UsEqa6ckMszjU4GW5UKAa69ARjf4cyMpdSvyFe3eZvf6YqQBo4MuR6xiUuT2UzqgZnauMp8c97kmxS",
  "key14": "4yY6zXH1qd2L6egnL3GgsiRcxbzCBJCRkwNA3FY4dbAfF8NnWj3ZAdz3kCvXPWbLWeEuDrisst6cVQAdGHvZpBT3",
  "key15": "5ZN4yN6qhsJ7xwRgHknciHVhMzw7UdwsUQJbCLLxiHoLoqkyFTFtRDqsBkR3jNix9MyZzYnKGEPZSzwj1d7Xks4b",
  "key16": "4XSMgp1hHhuC2uNkAJ5PPcimZtepBnTnPxLGvq5u2Znvvz9UK3d4LRSypEHk16xCi6PW4Fk6KnKrLFCLUHWbjGhE",
  "key17": "67MuvAXEFQECk5kD5HkjxNUrjjnfpUokWqWBrY4hzf1ozkFKwKTfAatK1K9rFWydqYjYN44fkSJ367JT6WKKsJoW",
  "key18": "eKTexFSukFRRCouNbYuM1WXPcAykGEUSRmyvy9ECEQFsKHFTLghuEw7xP1GU2AftJyffya2P4EKCPmzWMhnTWvu",
  "key19": "4mkbHWoZ3FLVJsVa2A3mA4vnz8RP31fQTZut9CtkHzRPixyNWgvnViHK8PSQiUt9JVV9L15ckhb11JqbGJLhQZs",
  "key20": "4mwSND62bYVQJH5FB4q1Wkau7NEabVsC4pPrBavjqwvgcC3g1LqebQFtxAZURqVzumQCPoquKDcTTGrwN9GFPvqm",
  "key21": "4uiFpi6EBPrZEM6X5JYHLCtMd3zr43GGD52jAMiRS6FJm6iBbQfViGWgJLAug2qsKESWoGm8Q3ELS5nZUzydAyLN",
  "key22": "4936SPo31Eif2bn3v8RDNrMkV36VCEPtZHgm6ngUCXvnyyhgYBY7P77SSYvJ3aLwn4riPDFs5ypsrmmi5yAHvs6a",
  "key23": "5boKteTitxHADHBoequ34FXLmXqMzqKxRDbN9joEEz7zJJb12gSX1gpX1GyXEnGfsa6v4sABgQ9hXhtrRz8y3DM1",
  "key24": "5SQhTDWe8i43iSeuAXQFktGfWg4f95CCRKaztH6nUtgU1nuuS16JiXSsLMAUoK2hpzGs89Kqjfzkqm6LWPXiWooK"
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
