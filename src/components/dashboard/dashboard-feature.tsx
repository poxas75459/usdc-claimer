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
    "62kCLGXyVhSiKqtvgzneM2oAVS6MmJmBxwZ5bbBWtDqHVtaqHheGmEX3SkEHC98Zxi8yxt2unxwoXqnEvGtVQb4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPcRicHgYqxq4LjKwYYNyBCANPWffJdbxH3H9BxdMu3syA14Jzj5VXDbgEA5vaWhBV3JazLnMwL48Cty9UGqQNo",
  "key1": "4JnQbLN7bitSwjR8VckUfJF3ogksqnyqGqMKfNqgw4wJRpU1riNJd6N2gEu9wnYyvJaSvFMkJTxVUnsvfUVsTeLW",
  "key2": "2htf5wwiafdermWATQiM6h7rSDJquSNrLN9UVnqmkfsXfqBcK82G5wkQRocW5T5kQ4fZ5qoZqNk3TkHzEWGmhmKf",
  "key3": "rmXouD6MkPLhbrzdNYJpFJj65fzrsiSfMrni6zkwFKqqn8K68pbh1uvHyPvpWgJSShKgppoWRsbA68mZZPStXQf",
  "key4": "3MuR96ygEJN29AnpfiXaV7BPh8ESRB398M5buxzYGc1AbhWNM5mAwtzPgXmYoCVt2PJE7i1cJLkKF3n5rp66eMnz",
  "key5": "3MkSBCS6ExuS7oSRcjz5vi4n6h5r42QUMEM5xkPkr588mBbbo9buUgSiJv2QmYh4SJiAbKAycsC649C7UV7xtKpt",
  "key6": "44x2fTXyNnZGnvEJ4BZEiWrB82hzhNNP199Ufwbbmahi8vLckiJYhDMW1Wjjw153DM92UFZryrLcr7Dxnq7T1HfD",
  "key7": "4jU2bP3kKRLZLGqXzTtsWLQ6tYWqNELdh2PxdUTPJwajLPugkS9TcoGY3p5Xvpc2qHGdEzLFcvtuvNUpTQgErM1L",
  "key8": "2WHcvTRNvsshxpX1Yt1mXiAsSG2uDNvkUhBofmiRKCej92oSTN3FzAatJ6TaCdQcK2z6rSc7UzovhwMenT5Lep4s",
  "key9": "4P73WP4UXcmXQx6KsQu16gKnwVFzk6RgcJngU8276gnSJj7WdC693bjSfP2vheVd6jC4Ta9EspibhXqWQcv9wNsq",
  "key10": "5qZXpREPtx6yBQGFGeQdQPTtusBCxSTtKnFq3RZTSmxx6iPaqTbdpjDuTg27ZamHgFZEZ9NstXMmg2VcwzoSLtQg",
  "key11": "5QYP1yGEW5kKpZADs6kFcCPVJMkWdugkUp2ak77gNFjF3WqgiL2HP3YpJxzdHWGVZoVU4ydn3LKteSFRJ7pAauze",
  "key12": "2wNyK3brjvSHHyMHPrn6WuC8ivjWpwBmFhguMJn1gb58zhRx3Hh3fp4UyTksM8id3v6amLc4SmreF1m7jJFe2ABY",
  "key13": "ewm5WxWrXz8UHhUZHF3744M3YMHUpXzDUes8nMkW1xfhWvjeJa67xiA3CaE6vijKmi2jvtFnd61ojM7P6D1pjBa",
  "key14": "5ELTSjXJNXnegyYQFaAiDrA5bEGgEX4q7v1AvX4cJ4CtYpJZbHCK9a5xXKWK95TvXFvr1AMwRRv1aFvr21R7XkFG",
  "key15": "kqbjHxyusv8AXhz2BMyyFA6qqZVqKVYzxnu941saBMUBRYTATdkFK7EnAaT6boA5vKRPCePD8e2WUx6aay4kLDV",
  "key16": "6mpefpcWt1KLKMGrBigLFH1jZEU6au3eLKcGnZc5tBzvN4EtPSkMCpvsmozrU66AgkixKLJR7q9mipdn5LNwek9",
  "key17": "4MKgbHb7nijHfXP24KpBk2beKQ217TRyWtb2ETKqRnJS3E5SjVKRLPmLpRjmAT5zvEmuEidNUTrAnRgWh6jTQLUK",
  "key18": "2tBXeH5QbGp8kBH2zCfUg12ZoAtGxTVQbs3PXgmVa7EsYxNGZm1DKYxCV5Hzes1dkVC4yfnnAaZ7EB7RiNENrsLv",
  "key19": "2Raiug71VJSXRVm6wb2cHZ4dcpfxSPdxXVXdoUULhL8dGrcdfgwVK1ZTFgDErBCaFGvcv33axQzrynfM81CgSF96",
  "key20": "39tcoAqkJjwt7fS9C4N5YaNcUt69mu1WhwUYcGmhQBKa618zkHoCNsFmWibSVEZ6YAusenWEUEAxGfXzJ5tiTff3",
  "key21": "4X21DVp6v6NuQ1Sfm5w4WQX6rNVVpbDm9y9wkjzCVzGmHayVHXKXTSK1YcpokzvzaYYLFu278ZrgPQWEtwmsjWNu",
  "key22": "5gg1QtrELstcXZdWsvHVA8aeKSRqSphhKfxiDoS4Zt9rvnJw2A7EFfbNqiEtK2MViS9g1jjCrcdABPkn87gQvdhC",
  "key23": "35dhHcZuQj9mps9UtzQtUMipWxhYAj6TJJn99ifL9aL9qa5ej66rNYxoEDThjpjQTEjNaj1cFt7f1mzfXf6q6fyX",
  "key24": "2a7WbC4GhfpBhotRWoKQAgwjZxZzNtxBia18vAxHeE3MaJSBQjBm6DK481tYMgwBB7gP4yMJ9fWCHd3BMerGVNRp"
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
