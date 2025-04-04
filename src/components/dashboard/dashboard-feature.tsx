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
    "5MeyHoqGbMyqHXPbQXXS2dqXktRgoZjA7jhFd81rgr7Nd6RP9cN3rirSxNgLAJrXLaPc8AtPxPhfbdq5gJUdsYVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZXCkzpmTDTUuPXx8taQogxup6WzcoUqQMz1fj2hcHkHjQVHKQcrbdtpBFtvdGApyBN1Bnwh5j2g1WbXd6tGrcq",
  "key1": "5CBJLgzeH8DTsrbVZtafjKmS6niNY1XtSH9aGhzCY86n2aqsumRrhF6uYczDxZftBwCwAtpAAZHURUmzFcB6t4Hf",
  "key2": "36vdLDFQBSd5SWw954AxQMdvsDMCRspoxWofpXST4ad5fEYAtN3NJYgj7Wr3KPrTWC6GJcGajMxegkLbhSJDMm1J",
  "key3": "3TJZzmZNPbdwMBZ9Z3y2hjWFddXPifvBi6wehJurTUo7qX2HaAw2S8envi93scTEGQHazgt8XpvQmzGWCyQLkZeA",
  "key4": "9T1GCUtcFja2Ru1m5E6WSpwZb9doSRwzoyFELfkBtZtwrfEYuDRfmpRkajgHtrpAhUiXYKNjSbYEJkgQyLegxxM",
  "key5": "47XVHbcKFuBSpRdtzz7sAP2gixcudchHfeCkiG7oArEVYsVkuM4vc3mbVgSpcuGHih6MH1uLtMF77Hic8zYc2VYT",
  "key6": "2ZGWu8PqNt3mLYC2jsEFMS5jq6kMqnnshNhX88haeWY8pHteaECtqcb7S5ZFfmX6pCWNipHsbLST3n25HRzWeoQC",
  "key7": "3WdnjtP8dcKgncY9ugrBHchxCLAeKLevZDz5tyxEhe4MFKZTZKLU4TG9DVAT2Wb6Wxz4sfzbkv5LkpdsuPKSFLUA",
  "key8": "4RR5ejn2FMHRLYXCmQBoVkWK12FJo1JHk4THC1kpuF6hrggQwk7nhGkwMpLXfjpqHHcFp4ELKST7V4Mw9RV9goiE",
  "key9": "3rP4Dg5a8YRKYBSWsvLghJEcbTfrY7StS4PRv86MVE1w7XYfmHqXkg2yZSubKVZ1URLRS33H94tP8g7fcosMJpMf",
  "key10": "63UCZiNerorM1Cj4DJ3NR4UZKrCV3otUM2YvvyoaYQsmtuRG3LeftGosgu5JLpMkhWe19viuzqtnCXzpa4NrNrdK",
  "key11": "2YFyxofveQteMw2PT4XyUpC1XBDDQ7hiVijTEWvBfBV1dtgcjEpRN2NLgmMpKbJhodgEdJad1oxsotT6mPD4GNNx",
  "key12": "4r8hzkwXa5TSW4XHt3uQN7KpcoKP2wrW9E4QtSUhJxSkkB8DScHTpuMNQM4EzzGeoDaqjvRDWuFt2HfbcyBET4k8",
  "key13": "5N4ehcVznFX7hGdCX4roNUUZRct5a5CYULZYLHrQtoQ11erLcrf2D21skmp3R3sQtuXfieU3ZNwWvzxsxQgiRMiJ",
  "key14": "J3cUTe6vUDeYSaUqMjzavRwbLJt1cMzKRJLerfXGyJSR1yinvQVnyLpREAzWjL82m7jB3G7uMrewEV68rXqGee6",
  "key15": "26ahYWeTJ2fcxEtsW5jUPjdUNqUp9rXB8PFhzfBwrSjP9QYXmKzNDfq5eofbeY7jv6YsVCpN1YzEvErhs5mJ4edU",
  "key16": "6144yVPnXmayGXDcXSoo3sxzaNwXzi3fTi47CBcUNr3n15tpg6W7YwpN2xGQ4azrhnZfAN4CuWXmb11DXy1PwwZx",
  "key17": "4GpgzWjLu5owkn7hg8sVpMh8WFJBvfW9HxdgGBEQKT3ift9qQZe3ZrtVb3d5sKDLFaQM9rWjfsCfex1vVhEtdZJb",
  "key18": "4aiXds8u53CXa9vXEFbTWBwo9jeFKFHue7N89WdFrJRxhZdd68As3epz5QKYJdv6TL6TX6qvhtkyp4DydNtkZSVg",
  "key19": "SA7H3VrJqcWTzgd9PhnLHgbsqLuooM5WAi5V96NtKTp4wCc1Lt8d4Hh7f85XgtX93qsKbsPCTU6pnNAW8dFP3RQ",
  "key20": "5muDD2MohHSRMw4zpLojfCmWbFkLVu1zEioWchVmJKEry1aso3ZzYGi5Aea2nSAjEG9BJuP2AoobSxqfcKQmERMp",
  "key21": "2JTS1Sjoivg8mTQ8SvdM2zf26bASnTYaSreVTc6AmUFyjYTPsRPaNxZBdv2bKNSZEd8KtR1Du2wcdQqo4eufBgh5",
  "key22": "2Zb2hCopHSdCkmb3aiiQPWNaKvd1YnpUJybfwMwGAvWf8v1DLAsWUYPvNENbztMuBRG8pPQRv4YfN3AUpihS3ejZ",
  "key23": "256UngusQpSgqY1vjJMEL63wtLSQhXFvPDiDxj8F8ieZVFu7jvJpVZyTJKy8gtjSZWXHTRGsai1oifewgUyq3CeK",
  "key24": "2Syt4aFgPJikzYoHyK9w39hBistqijLZAerrhuRGC5dnsTjJJ75KXS86xbGg119khKHFqaynZxBPYjFa3X9pcZVz",
  "key25": "4b2vUWp8Mh5eVAoxsWW6R6xpxr7rh6o6yXPnm2Hz7jVoWt8vn6xMvuMshKDmBCDdVTLPbBe4vnYaDEuYAtLhykUN",
  "key26": "58JECs9ko29mN28RkYNtpFHphJU5KEm9Tpu8sML9tZ1zSpkCYmKPn2hn3MeDLNe8XRaApnVvB3nv6EbtvFpt348L",
  "key27": "5VHcm3PqS7Tib8tNGDyGLvxNMD528WdcweEzC1oF3C1izNNiiZNzysN4fNaGkSHJtR4jycGsLQvXZfMRufffdbE8",
  "key28": "3L8RpZYcGH87rd8EYRCoRTmM57uVBYDbJwDfwxSpdpcAdVpum6sVsKGsDbdM43p6hGjDCBPi7R1JkTL5j1Es3rNQ",
  "key29": "2Uj5jHA6WaDQgs7dDAoRRQykiWhw4Bzm4V5BPQa6Q17j8do7GLUeXEnmGozBJxRsChT6mB7YwD6oCEkTHcDgvHgE"
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
