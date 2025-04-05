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
    "48ebKpqZLndyPcfJFZwaErZizx4pHi8WHb6NXw6d5YtWsS6YQMhpAeinszHptxa1c7Lq8LWZkxKS5ByXmJ5yYfxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24UL3rp9Z78sx2dK3sFPCUHXMBzDaN3rji3fZnKdUg5GkMsgjyK2Y9xun8XP5DbDJmx2SRg4cWMgudBDUTV4MGLi",
  "key1": "5hGfRagEbSpQRBkzXz5oArfnnn4UqjWqoxJo8XgZ85FeNfDD2izCX6NhYmVhyS94S7Vb6tGBCwbejwhMAXCKMmd1",
  "key2": "4Db9bCUkZD9En8P3hTfz4apWqShTvmKiykJyjB9u3gEuripMww4ikpKocD9X3372EMWC1swv7G67dEXB2H83PG5R",
  "key3": "4FVjdV87DxACAxVzbhoYwYJzV11pV7sfxau5D3mrYDYiLioHBqABwbXvnCCP7MFP6cjz1CqVyT8MJKVn4MomQhC9",
  "key4": "2CeJDLYZok3TZgBGwuXU2wDypspo8bipzeauAuYGUCJQzNgB9aThpVLAUJRnH2LX9s5cBcMRWEyDWDvwhhN9QEpe",
  "key5": "46RVGmQdvDnakZKTMJ6pG6qe36JdgwPCF6Z7Btt9dD5Af4ZALQkw7M1a77iXm6EEPxqukXF85NxZdT3rZBKWBta",
  "key6": "3ALzMTPf9VC4eamFf1LZziquogyMF883e49Qg4Huvmgz86nZXbHvyyMfzyTuQtiD928YeWfrxRGHZwBWvv3f6HU4",
  "key7": "45K6o1tufmXzmWRrSpAvLEFCTwBMfcwkWXsYtkcogfMVMj9FSAwDVuiooMPmxyaPx2uWxq7oJdVcn6kj9YRrb4mj",
  "key8": "4bdWBu3SzLhALwxw1VxT3u8bG5J424oroAc8YLqfmUcu76j3kU2WrDNnex9vxTuVYKNGwDy1uf29fttKmYZqz9nm",
  "key9": "4MGGjiheQUfVX1khK9vMvF3LHgaXdUyvBjxw8UZsAcCU3ahd5je21hXmHwWa8zxdPrhtnWd3vP4REnLgfy5UYDbg",
  "key10": "5d1BL57StPrHqhgEMeovurnVHdhCoYPgD4VJCJXq9e9q2njWdj3mhQeWbF3j8Xy2CtEpPtD1PMcamTphYm47cKru",
  "key11": "4FP23rbfueUXogNY2PeaLGfWkt5EQxdvZZz25pSqQqd2HSvyC1uJhQ88owsRGa8Pe5PwDr9T77b37KPP2KCtSLRm",
  "key12": "2FshCUYNQgwViDj9KionrZexuHAiFwyhGe43f5HiJXkQdimyyhX4fyo7G98sHXVKKjtzgEcnXDKjP9wmMDEsZoF4",
  "key13": "3qxRnjYeVCC8iGmXzGBEE4YM9wCby4yet1tBXKmy9C2QVykUHPKjHPx9XWMhUPJRVq8KWJMjbo9MWBpXWfm2Z1pF",
  "key14": "36Dytdrj6TjHwZ8Wnt3j69RnC2mjyj6agq8rA6aNPtGEE33ndv98amzqsJ84gu8dag6otVkgiX6bFGuLymbhj9FD",
  "key15": "2tDCJeytwrj3JcxgtAH3xAqHFLd9dQqRqswLMT8Mz31QefHQCZhp4hGjVsideNCv9amo5AehqPhQXM3NaGdy9ppq",
  "key16": "38KSWCnfSSiBWL55eLH21aByBwdYUeNZR4zQc7umJdRRE8EXHd9PyvLGzjAtK6h5nenpYgzZHM1ZR1et2xyKNFvb",
  "key17": "5yHTMFyKhgkjAz2srtnpWGGfgXUEjc1vgcSFHgj7qZ9RYD8VzBQCN3eEZn3F6VCqSnBYSS4Qo37njaJxKvXuuT5J",
  "key18": "TfaxKfBPzyGz2UZbm9aBBAeYDF4wkNcsGDnFNBFZ51LGjcQhR64J98Hz5DzMkLxn91L8wD1JS7ZEsG48gWjVk6L",
  "key19": "5N8amZK9taU7jkjvJt1aBPzP98CUxgnLRDnb4MFTLgDByDxR4HHgzTF2cKDpi3pV5sz5K9jLFSWYsbDeWAsfp3jw",
  "key20": "4x6pJfUWxciSwXgiGJuALPnAPTdq3oBexV1E4TtUtbH1v3HUpPjGvSric8pn2jCrETy6ugwpikxEt3yric6EFQJ4",
  "key21": "5pjzQ6sxanAbgnyUX3eRsgGUGfZ41cvK4QwjVR1UkvjXcNRDWNe5bmNC8bdqU41Bt7rGYin7aB1uvwSuM9CqdZcG",
  "key22": "4jmBcTc5Ub33jxPLNx4qprbMQN1vaCYPpiFU71HoMAWH91WD3fzKHcDXLxneupyXHD7ZvpL2Lp8utL5quaRBGu3",
  "key23": "FoZurZDNAf5Ma3Sxh4uuuBHQjPf9asjynm7Pn6Cojd1aeTzMRSYqf6MYfxJ6XbqZztLShjwSNXtuzRNG6Z1qZHn",
  "key24": "5yE9FCk8t3ewWWWwWiDgL5EaTDP5dZFAyxdS1f3fVzttGA8UfxTK6CCM36PmrcgREJoU9QgGxh7XzaEaeXDT5ptU",
  "key25": "3PZ4uvRrRf4dnqLWwRRnLkMuAeceXw81ciYJ1qobJNrw77u5XhaB5emXbaxjUSxgjsNf2x38cHvjk22jrdsjstzc",
  "key26": "35eFydBZDn5Fx5G6qfwe4gaUvP8pEBABYmMywYVu4nQTCNmsQSoLoWBEWnuqbtSHKXkiJvkpRwyaCboZ19g3Dh2y",
  "key27": "3WqqpLCqcZKq6Uww6BENeoV1Lk8S5FozxYtvPapwMx2QcPqqixX4stFYNfWJ3kekMk1jp8VmySgQhNJ8nYpjb77y",
  "key28": "4MVCgYeCfqNZ4GbRbybvHYUU9n5U7Q2Phk2LjSLwxymRMbWurhpAnREonMYEN4npdAwTcE1mm3jeYfoWxm4n1d8o",
  "key29": "sNz5tuEC68SMZ4DRN1yxiXQyLPQLsDd1sEbEPgQq3zbSDLKPX6PkiApv17AKAwXaT3vt7RbKbChAc8jBaRuNEcM",
  "key30": "FCZVxfE95zyff77E56XVJuWVCEDiyjQqBqLUZ1oWSNwyn8AD2hXEYo6iVh9ewyd5rqrGF2KAGMiF3jNbUZgEusm",
  "key31": "3JddhQoRRCTr79zUFh9ASpEv6Mizz53NahJCGZFpWh4vf9s1EKVfzBxN2TPmEjVhXtcB6cbA1sSgfzr35hGQrh3Y",
  "key32": "yPSLhK2v5cpH6WETopwefYanmAzTmnQjSyV7HgDRdTipQCGqmSd1o6kVhtuYAqdBNRek5pma1zk1qGQgx7dK4yi",
  "key33": "64K6kyUADuTuxqXGQhAs2VMg1hBNSt9Fesoy6bYaHxDgEp1mDkgYHGc9WDi1PDVDjXrmbtxmJ1njpQgfF5ciHe89",
  "key34": "FnfhQywTjRjA8kxkXv3L6xn3WL1n4jgizo1CRepNGSajUD4KejgwBfcxXh61FEu4wnyWSVm4o7gMBrSSYZLie6e",
  "key35": "4iptDyzCRGYp5GehfDqnhy79q3EJniMwTVebi4LDnFemt2qcEoXNnw4KKUwpUCHHeizAWGCkQYgmeTtTSf8t6hzU"
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
