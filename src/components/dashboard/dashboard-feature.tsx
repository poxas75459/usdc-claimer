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
    "3sqaywJnN57bNVTDck7AbsQJxMFhXsmPnVdMR1RNWtDVk6kn8Tu4FEqkrKqYoyrWVGsGHCDf63aBjmWKppuCANYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sQwMCjWDXbeA68T6gk8v4hn6zfFhG8yhkCTj1oZZMX9XtSoVftREDnYojimcY6GcC23Jgr2yjQPcBE43BEpaGKR",
  "key1": "4Tk5TQNLGNAGaFEVMiFvqJ1Q19KE1ojupZm3dAsVDiaL9E4s22craLfe4hqbrjhep7XTipfyGFA8WZCddLDgRs1H",
  "key2": "4gptZUm43QDcQXJjevvnfRk17ffhrTiKyjktizSUZh5eJh7RE5oVu9h9WYJWm9Nu17eoyr6fMXxN14endrJ439uB",
  "key3": "3Lect863rQJf5sYNgr89KbBK5up1ULarQoKFLzZvwrWzwbzdw9P8Q38gvEFqE4JM7DqvYtBsYv2BE8hee8UKY7P2",
  "key4": "4gyvvL8GhgMS5gvLjypeZQtqwrqbXrCJGfSNRdUZMZeWDcjR53u6JGC9xt12t5y8rJtzE2i2opx9kF3eM8niYiKr",
  "key5": "5EaReEyoCjx8RYmCEYzeiakjnVYz9B1U7j4vxScEHAgyAuGJCmtAzvr6pSET3jTit73RrBECG4EmpbExMg7WdTTm",
  "key6": "2cFGngWXDf8MK5pqDBccnuC6bpuFwMVTFUwhyrXTZY7wPyZE9gxpGFtnsq2o12tY1ShX9hYx5QXKx3c41z7ZYyuG",
  "key7": "2kHYideKqmDyA42WbEGT9Mf1XhQEBEEMQX41DcW6sRs3BEPaxSEBr8kCWBzaNne1yoBUgBBBhGznLQintyAhaHpw",
  "key8": "56tLYNjFY8RDtbvhmPgRpP4yAbM6Q3xJ6K7t9KevyKY1BHqzuZQ2eT1PmXFLgaWRDXSmxPyVWkoCU6jZ6cPMdg3y",
  "key9": "91PVaNEa1H5FE1FFssZ8bmJ96baEUwAF9jT6o8vDm45JfXcwDvw6A6WXbxmGdHxdaFxGbLZRnPn2Cv4jrWEb7Ei",
  "key10": "28rifPcX3oEfdJPxoT2v8RZ3Nzye18ejFfTNTZ2L6k7DrWyNbdMnMEU48B6zAdTBFg6kuGftShz8nNmd9fVutgx1",
  "key11": "5twTP6Rt62TnKVCuKw3R3EzZMWJ7HrB3KLbmDRGZsAbGzhnqmVLD2dmTmfZYgS8aaPNaVr55oxJmGgmH6prTmDT9",
  "key12": "4ZZxyQMWALRUfVxf22gN7FuTV1kueTmxxcqEZmaiX6vz9c8Vf7y6m7bj9UcxZiC3g3M5ywFgccFRGWBYJmcrzDBv",
  "key13": "7GaAvHrMX76Zx75Dk5ZX5deJgrFDgyYyNyXQSzviuVNeMyrL3urHZWyK4rfLyGUcJMKWKYpCdq57Z75nnyFJGGB",
  "key14": "4idaEPcfTCU6QE7212qtXYDwnfc4yuQuxLefqaddx1oenPao35Cq3AG78WzyowWstRgbP6GApsVJgPjp7KXhzaBR",
  "key15": "4VTN3ttFZH9wsMtVMGVsiTr65LFk8gb2JALu98JrZatpvNBrxMUmcEEr4KJSJkH3q5xM75ssG9Eq4YFrQEXGnJh",
  "key16": "ZW1TTagLv59ZSiyvoc9a1hdrh4xEtcMQw8FPSRnE3JtFWaTQK6KS5VbKagFh9Qsp51nYJD5wDMCy1SuxsK5rs22",
  "key17": "MgYaU7taQZKAJoaEUaJiFL5wu7TXjDTgnLw4wCNN8cGZrE2k3h6UiXP1wcmVHg8Qa86vExxtMX4bkod4S9B967t",
  "key18": "33ZZL99dkCDqU7kMPohvVJGYcCkzYP1m6eK1mTW1mtwa4ESeeuheGMswywRKykGHsw4wHrHwy8ZYh7uGGhJ81N8z",
  "key19": "3ASYDJ99KPNQw98uAMK3gF2sHSN54TvTt9uYXiZDp8GbdrPkqCZr9wrtzBo4PzU2oSwaa12vowp3RTTbK2AtwcyQ",
  "key20": "5HrLJruRkQH5zPe4YrmuiXCCWJcWeny6u9NtueqxTc1mcoUhG5obCiK2zKP9sPrMpvUGJmkVaqQeax4rZasPYLeo",
  "key21": "4bkB6B81NM4SiMz5F316nXMVdt4P2NhW5R7szA999pESBa83y4275ECJS4UrtH2TUrwQbv1vWdovhdURF7jzWWpp",
  "key22": "87hBi8wRVACrUakmUE2wbTJKBVQV8dxEMPJbx2yDFK2cqAmer1kp2DPDAbEApQn92jKxvLPpUsWSsaR9pTK3Dmp",
  "key23": "3y1FjMwRs86Jkigntyy92q7m8zfDpvpV7eeHHfx2hX6xZgr3G14EZC3LJeLNoiFAuti2VcDEqkdevrZqZpdVgxbg",
  "key24": "2Qxx91VQ5pZRks5FLzhwXiZSjfFDXt3oELXiEcjJ1M3QewGbJqFYmor7wY3x6jQ1PGKpYm2HCvZ8UmMMmi3ctZ95",
  "key25": "4tCRABjBGC3Dy2gxKbUt6Lb13mDqoGskU8oHd9y8uKTAZowSvZoJEsM3WL2AfnEoBGeDNswSYjfVHy1sQxHmBbt",
  "key26": "4ELrSc7XEAz8EAHYCNCX5X6YPyEqsME5g8u6c6FaGd2XyNYoR9d8NXyNuL7PHWW1hHKy9nRG1i8yeBYHLFP6RvTg"
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
