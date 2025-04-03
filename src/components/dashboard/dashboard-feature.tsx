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
    "5Kz4zt4cqtB62GDWzCTCdWtcegBx2uEkpz159Ls7FpSTnSP6nHDJYpHyqNPpddmVoBQMikJnAwMKWDfF8syLRERF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "556Cfm9vtZCY6pqNR3i7cMgnDyTrQNnecw9JLrBuMZfqyBXMAXDfj9ZryMd57wA6F3anpKTaVRecQjubDd3YH5uR",
  "key1": "43cRPc9p6qfkEmD5zaEVRDkwVkZ6Cxbkht7B7xZmAcSBkMtAJfLtfF54eBVJEQ8wDi7PLbL17zNFFvE9yiQrqBQ8",
  "key2": "37efVgT911xhVKH6fwFLGhb5DSbojw5q2WCVH6Afy1Co9s7qUwMR8VPd1QXbGJCa17GPR4hP8yNRwegJTMmqfyb6",
  "key3": "4cwKKmkH1k8ZuEMDYZxf6843QhqRaao252t3ATjpx9BAzwjrxqf3o7oXY5qR4f9ywQKg19EVuAofURuuKWZNhm7j",
  "key4": "3uV4rT2VuQihK6Mrr6VsiUBpbHp8duJ1VdZNoisFadSkquWMPsWUS6bUGnzWuBGaJ2WYmKXCBEapxzRrPSHrtBCt",
  "key5": "3TQ24FpDB4W4JzhfeiatcyuDdx3uGcbVjQhSoUJyb5nxsUyHS5YjpxfXX2vLUxaNeQVdaob6ykrfcTdkkpqM1sNJ",
  "key6": "2vgYyBJxpcB5qnkuq3GkgdvxcZ5eA4ekUkQae6e2xDqNQ7PsqMmfCh6VwJBoKSVBHdGUYTNYCSZJyXaMDbpN6crP",
  "key7": "3k2yUZeUY5u4whDpzRgyysy94hX8rHsBa6zk6YAJghXEpJC3MFrbntTJuFLRv7mhhnKzkNyoDYnNBQPauCRxy9tk",
  "key8": "4t1XaS3YgwVZvBARb3Z8xRRiUEXy8a9qJpnx8RsHEASkVEVGMAn6TywqnRSahmgMoJvqwfeaRxSsshwwRWJdNiv",
  "key9": "5217g7GBX5aCzj7y58cGyDcMPhDfsTSKJabCyuU5eyBVLcRpo87scPWQEAg42KoyXy2PRZiVqEtpaeregauC5fV5",
  "key10": "4hVA8xeoqDUKL2rgwPJo7GByqMkAqdzBETa5La1NgREDhqLhetywMBLPbp8WxWL6C7KbVc8BSpHLTsTt8y16x7iD",
  "key11": "63S5dXhECaZc9qUPgFUt9zjuC2nB12kAcbSTEww3BSQhQt4egLsBfZUuGkKT6JrdaQDUdUmVzGeotRiWYeGZWapJ",
  "key12": "4XiuiHWM4FGx9Jfq2ReYBGRcmFQ4isoycugcmoP6obk7cNFkA27zxPQM622scdv8F8uaCaiqH9sWj5G7bqRyJJZL",
  "key13": "3QY3xxcNHdKrTNo6BkN5YZxJDMasz3Q5GS1Y8txYPUUyGE5z2iByAQ1DC71TNRfZriH2NxCjdp5HR3ZGFJJXU2QD",
  "key14": "3zdJfSrbjiZXZUHPCWWCD7xSnGgZHUCUuT9WCFdjJCjBy52MRcagXXEyzZJxjR7BLFKsJDzf3ZhihHJgxFwqAZAN",
  "key15": "4V3BNZjD7G4Biw45LryKGzuCR7Svx3xZGghNNYkXzuYfrjMKuWMb21DjbZBbYu9poroH23ZxNBCFtGektfBs4Y2s",
  "key16": "KWTjujwuV1Q8aBvEa6zLC5Hr4PkrRsDmfpFa7Mmwh3DcKtcsRcK4bS2v73adVD7zCmPH7DJnLLgjVo8vUHjbYCc",
  "key17": "25wj886sXASsDe5rcoW8nHjuFEuDYkWAozFGGFTkwxZZqEA7q6sv2mYBrFuHVjMmApp6ANUAXurKkZ3B3MSvaEpn",
  "key18": "2Uc9gMjts7SUefBXoVMJJHVfsscU62dbe9DdDbv9XPjCezpwTf3C3XN6DcXT1HW1LSM1ZK8xEsudpo2vPf7gPAq4",
  "key19": "3NxTDqyGHmckLbrgXZmjGUUehB1DGqVHnW1rNh9V2XciFgdCRkuLnLPvWJcMwPNFi6rod9aDF1KwUBZn3vETEDVf",
  "key20": "5oW7MM5YDuZMWqRmhZ5g7eA1GTrbAwhsuutYVqQBitbQBi9iy5KAuWboVYBMWQA8qcfdyfkfizDKm1UHmS8Mzj96",
  "key21": "5nb6C3WBCSBmyP2XHUcQ81M9zxGayVckedX9c7DmVZK1yJSHVHDYBgcYCedYE31mNB9xfccBJJSuGmHxh4b9E2oS",
  "key22": "21hc3v4YLkUgEdZ7nLNtnpG4qAGmoyGHgyPzqpfFN52kkNQ8EJcWkKSBs2AWUpnYLkhACi6RyGGUtNLP2wVonoto",
  "key23": "c7vh31Xg2ovh2ECjTMzeA9Vftrqc6wgzg5Tahb9Ampw3yTVKEZKb41xBiP1sWjdKQAjgqct6XVmsjDJRiBRPxfF",
  "key24": "3rYfLsnPypBdLcrjVuGztapmHdY2jcrtu6sWrT2rsHDCPVwAZqtVb1UKMnnK6zDe3pR9G3tdczutm6sFZfyFGDQF",
  "key25": "5YZprU5sULRNrkC2vb5bA8pZ9UHGAsasgidxQ2yxA8dPYWiQzCKBwPmHy7LVnRR8jFhdGRjx7JwAkV6pJMFB64Qe",
  "key26": "5rcPNbhBdCivo2ns7zYm2rxpzzTZCnjL4TQKQLei4J9LrRbSPW1ouKJ9m3uKXsUwYGmeF6Xbe3psracurbvVHrvB"
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
