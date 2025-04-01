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
    "5ok8ZGDcjPTku9dkHXREY7pwh4BmHi65exmhvzy1jPGUSkeKo4AWiNstibquB2oKQXCqxYGp8qbyatHYbCJttpPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mJCW23ZTDBAFPCb5aFaxGHK49XtYb85Zfe54Uhh7oFS5DnQCqDUL8Bnr7gZNRUZca8V9sHHarJ9mpBV5oeiydjb",
  "key1": "4SVWaCCwxAfcFrQ56EK4m64efipdBPrwxoNx2RLpsH7x4dExqW75LiCMtvCQMhccvGRgBekcK62JdTLsETwq7aQY",
  "key2": "49JxX7MwGRFc1Qj9bUQrduvm8TKf8acerkEpthyMSUqiZtrf15seqKBsTFvVuN4drZ6HBt6DTamKwQLTDfJG7oz8",
  "key3": "5XbEbf1fzDg1qnuRp4Zw1uiASxmoSqxGuoMGEm4bRXXxDuDzNg8yRcPt1e1cyWQ2AZ32Uudednmo42Cho2GvqUAV",
  "key4": "3Q89JfY8sThJxtYLJPwMZkajh8sF32B9bLFDZ39kfDL9dchR9kkUKQz2gjDhYDfwAndcmGaK4UEDrcHTWhBX8HDH",
  "key5": "2vBZBsUZHFd9qjfegMXjyBycQKWoWeDvQhMSidetrQNG32XcSWwSNLwRZwEKNLcwDrVGSiCWjAXoxnnRfKyVw4Et",
  "key6": "5M3fYDh9jjzqzy5J2XcMhVfHKwCMwFADG84yFaae2uPTh5TLgU3YVdb73QbBHUPLpTLsMjPV9ApRcjGkrFgTMa75",
  "key7": "2orQSjo5Mb7dLjTMTiA6hvR5XK2U7QKeEqMtJEsfWMvzYnqorK3Nk4SXjqwYKtSKwk5k3Azsfy56nFzNSs2KRpNd",
  "key8": "3pdVpVFYb3TiQorpdMxNpZvufY8WgkiSfKaxa3uCvDW7XQ2EsmFvxNMMz6nqid9GELgrHoZZ2PT1q8WkMsosSs9S",
  "key9": "2GZxqTT8qxUV9jDW3bPA267PDGPK5PzgnwyvR858ZD1gg1FCy2QZTMcgLdjKfe2eUN5PRFUQwo6wnBN3RnnoQgUs",
  "key10": "4WhCi44QLRr27jZEwuQv9n5crxTKZEa6ixRHTfyVXvpkhph8hCjKrjrtaMGBfSKAqVRPFZ3reM754BPBnhBvM3ry",
  "key11": "5yoU9jno49ywoJEoT8bVSESbRRGeQPmNyLdycLyT4GDqY5jh46K2zMmdgYubTEbufnd3CH2mNkLHVaMDgKffCuKn",
  "key12": "5U3UdrBx8wpBL35xUvUbukdKNJXKRRtJowxeSiZW6js8F8RymQ5R8ZDyFgXZpKuUPJbiKuxvYWPzmXvUU8SKDk8V",
  "key13": "3hsiZ8rP53mqYg9L5HDSHPP7k43DwoLRpPvuQF4VS8sbHZbsZZUbfeBsv3s7LQ2ecbBNurmDqzqNW3XxxDLnz4Hc",
  "key14": "aaXAK2dx62o8zobrLxHgwjG4KPRz9gEds1Z3CkTZZ9VT5gA4f5unoGzvm3i683Md5Zf7e8YKnaVcEVer8HBCZFe",
  "key15": "4x79WP5S1ZZz3CZxzqV8yz7Pnmye2m9eGMMBMw2mNZio97nchwaYy8GgTcHhwcf54SXN2gPsfzSBNdSs3cPGsGrf",
  "key16": "xfPjh1Nu5AdnnCr2seKgEa2wJ92PLbp9Fch7cbpHpBamc6fw3ZEF3xnDyuX73ysizxtpu6FCSxmnsjH8feB7SBx",
  "key17": "2DPE1uZXaCVbMHPQ5MkvDj2qnYyUfYAwRwn1u8uRcaEChVojGCuF5hzjrs56Bx1AjBGALYWcWSeNqXVb3rnRtcWN",
  "key18": "66EqNcpKHZdQ1pqxgLyZDP7UXr3z7Qu3t4jYAJT1MS1VawbHF3V5qvrXbNqRhQL3VBki4NWRaEPpUCYp9FUEPYjK",
  "key19": "52DWuCCmLSs1o4Ga8gBrvMxrnj8QUHjewGWkx1P8PyScp3q7tgQAsHm5qAtfsmCPVtBMxVsUHUPA1bUYPu7cyzvQ",
  "key20": "5Q5eoHPncKdfpQPjxHXPcSyqdkWB2Bbkh4GLRvskq4K4drE1UqcuEq7mRxmatxG487oXSQMC1Pmz6R6eqQVxJckR",
  "key21": "3dFpbe5F9D21rXgmvHHJG3xBPgpz26oVoQty1x7Cc5qwYqq1ofnEYMNYi5TSe4ayi1DAhThqZfzt3AKAKJGCcqmw",
  "key22": "5se4F6FiPE7WFhAUSg38qvTnVZBQbhyFuw59JpTsG2si1xbjYuaAhqo73LaD7kCPFxuDAAFxHxgPuMupuD9ACNuE",
  "key23": "N3mX6nRGj9k51r5da4omP4uP4xpExCtEohx4mBpvKULMkQrCxgkv7wxmfGLmh6p6DTRB6QdCYDfN1jjPxaFSDsZ",
  "key24": "5LAiv3jj1DNSbvZ5kwHbBde4ZdSRAwNpBPQp3kSn9jeHvGDgnqLG5yuv2pLh5kZTLZe2T7dTSN1hFBKDzG9UB5Qs"
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
