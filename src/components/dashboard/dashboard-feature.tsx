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
    "3XMwRbLKPGrCjpffXbx7iDG3ZNTEPobXXQrmjhhQ9XBiAUT4yHjazBb5g5niKCBEtPwtFJb3ah3Eqm7thGuf2szw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DPNt6SWnYQFCGywpDmbnB3DaH75QrgTXgFF2H2E9kCALaKPq5MzgQUAc3ADhJvJWdBrWgNyHRPgj1QfmaxJqoq9",
  "key1": "DJ7Zr128eATKmWckBAQTDS6ddLzzSLBFfoZTuHMqfNBmGQgC4fKKKYzMdzjPyFtZEtcz4nqFF1j6PGMikuPM8De",
  "key2": "3xTB3rTW52aSGuMRy3Ro1RWcgcNNKVmPF9qRZSHGWm6BXUifqAYgbUinPVF7P25aHSePgc32RVjm7k5Pi66KP9ue",
  "key3": "p7KRAJDnbuZPr34RzBGQxjMAuwTxabp7WEpbCAgLKjPZZqafKtfGfJgwp7fUQEt3UWRvtp8ekRuvjZehVzXgR4d",
  "key4": "5ngUzXpc1BVTcAUTkzMNUMuoaErBFiHubptnZsTW3WxirsToL8M99nfe4PAwE8hhXztea2wGrLvT34aaPFi5ne2g",
  "key5": "321dKatAZhkac2aJ6CHMZwpyPkAN9Bsd7jQvzdic6QZQDq7gbbda3fUbA5KZ4zY4edZAUiTG3zb9wbXVEW5Y4yCh",
  "key6": "3hxd8a2dPGpGwmWQomo1zdvFN2hXP64bbgBHD2nawuZPGg6XLHXiyRiZLnH65mC6VSNET9SUafZM8sMA8nzLtRtH",
  "key7": "4cQ7bTnxAwegawfq2nw7oe23hGYiN9jiLR42AkaJ4mVUSYoEFweqbF66B9vD7TUKRRvgy6iDxpsgkXqPB5SxFxPy",
  "key8": "XiuwX66TLTyNqoqi6wW4UwrhFpC1q6rXriWYvengEMkCyicr9Zr9DCWDgxKc26Cq5SzsgVKxkt4n2HP41fSCXcz",
  "key9": "s1mC71gBfrTycJpXQRNwGe72BR68aMrkdoN7axxBqFcPJXZsdmvQ3qWqiriWfbpTBYxnbesBgi4egobRKXaCYs9",
  "key10": "4Fym7LXRhhrY2b3X2fxoDnYora1xcXhHWseddCunNKRvfZtZf43gE3LoKciJ3d8fxLLmNP7C38cUCG2PUKFGeZ75",
  "key11": "2Xke2UCsAhocDwqgoYDhHdWRGX7PcPP88u44VnLo6bFGhpfVBjBhYESrYYpbZgZjvpxRNr2MzY7LLbdALabfbjcL",
  "key12": "41ceSqpz3CyERg53rQRHzY18rQzkiNfyY21wpt6sBe84Nu4RzuPahbjVAP6R6Jhem7yoNMikXGPzLhwRYePqHSiZ",
  "key13": "2vxm6eZ4pkr1o48NLoXyEcscaq7pKfdc3QUYtVXBYfjpNBE59mkbtPoHeqKzdXVrFxQaiveRPMatBvKP15odmxo5",
  "key14": "3Gg1DrhgEzyXsC9xRbgj98gmbkdWqiT6GkXyRRzzg2JABqwRnJLNSFCgwnECdH2ec8gijEfTk8QeRJ9RNFDjGvX9",
  "key15": "UJjpQpYeW1kXNxUPFSQsWWjF558aPzx5VQr3zCZFdFr5ZYsPnJcAVEhRFipCburBrrorYi78u7UhJU7i1EEQvsr",
  "key16": "3w4Ei58W1pKd6zoFbwnCtJpJyUe2ra6kKMy55uHw7T2XJaV2WEDeoTPnuq5x5GHvfXZXU7jiD5pgUHUq2HRqGKsw",
  "key17": "4jtcgqPbteuTDGYhkE6rK1Fsjh63up2EFMrMf9orBA19apmwfmTVpWQrPPkpUEDhG2jdd7FrF1e491kSzUTZ37za",
  "key18": "QdCkAcNsX41ivriED2n85McjxNgbDuaxLMiodtbdhJAGgQgRosedeV4sKXo7vepmRRCmwf8J82b6GtWCz5aBU9S",
  "key19": "GhugrzXfjuCq6rC3MX23sVAABs5ZGYwP2SMGUfcNMegbbjLybDbf3qAsYENvkWSXXhiv6eRzNzWtDuDem7pozsp",
  "key20": "3iWUju5za3gajuHufiXcxcixuppEcwuat2eEG5BsxJSv5rDbactaC3mP59j9mATs1PyZWq4RhusT76oBRJxuvLTy",
  "key21": "2w54N7ZpPtfBe9Gkn39WFCy5g9ieLNZ6evSCAsrfPpDGD6EwcvQpKn2R7gGceuhJBSphRPybVF88ppxeJZdEP6Qe",
  "key22": "59s23rAgWzYABNMotXfG1dNuK5QeWEv8sRyf4LHE5qQNQhb5Y8auQfboVvsqtRdPq3Zt5wrM3QsY7RoJj1Wgs6h5",
  "key23": "VpNmd1pTHuepy22aAVSSJjbeGVhYHfAxHK3eQpYwcrYag7wG1LTZTLDcPsNr2T8An7jWkNppoLM2q7rTZxMsnmj",
  "key24": "2boCSmbz76s1HXvhEJhS3ZFXmjX2Sz5NnkJAqyN6KohMkueFuJ5c5BYsgrRp6cQrAeofpMpKHrgBo1ZhVxBG9snJ",
  "key25": "62aL94D8eW1zpggSt2JSC6oKgHsFN2gmArt39FMGnEx6Ju8DWPSEvRKwZskEpg4uiCB6SLqTfT8feJYkxV9zYMeb",
  "key26": "3c8mp6BTD71nj5iFXhs3AydhXxhUfKU8d5ZqogcU8shWiHkinrYYc7F8Udhn7kwQwEFvCXEAGZrKQ3WJyrZxGKyF",
  "key27": "68Acn3TcxCA5mnntdz1LBVCqVZn28gjnaGL3Spyy8oNxCNKwwdcnTrEMn8nPQhivGKtNqjb4MVZvoXcfU5nkqhR",
  "key28": "5YFcHswpEqBiYPpog4iLYKLVGPSNcdEV8ZcAHV9FmbU9ET6airsVU9ACeFevbZf2aCexYpHTTHFbpFoa5yv3e4Fs"
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
