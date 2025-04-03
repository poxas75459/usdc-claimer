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
    "5QuKYv1JWZbMzt7vXrvDunvbjbJmFiDjyE4ShuL7yumDhBMREywkrAjSQLXB7psiZN88qMATePy28Ph5pcUwSo6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BmLSo8nbqmNnFMaNS5dmTD8N3w3QXYVvcRRj5qVVLSQ1i6grbaynJYwUCxsh6kahahx5AuDsshGGRFJfapyztFc",
  "key1": "4m4T46mgBTpQAcRudeBwVFhr67bM2oPQhprTU26eTLSo5R8ZJhyohi4WJkVMXfDEo33qbaMUJ6VWuDEhmPBYQmRp",
  "key2": "siLHqv7fQaAXNC5UNw9TWY73KXRjafQr353DvFNVxpWRwgEitRipjvah4bYHjgF9qvPYJBYHR41MWRe58zA3QRe",
  "key3": "5E8i8KZapaujVzNFynLgFyGYRcFoeJ8yAkgHCfxp3YinXMzVvrcnS2PZTtYTUSUihv44xjpopPyj5U1xZ3RUmkmY",
  "key4": "sWALzfD2WmajxaFuQ6L8PYwAQs6s9rHR4kK9TCAkH6wFjY6wuekmoRvN2ff46H2czH71evai3TSd9FWdBU7L22g",
  "key5": "4sYxLiw6Po5LjSHwGDrGr9XokaZHiJehme9YgBhnfLjjBurmCMz2sdQ3LwBvSU5c6fq38MseBW2v1aY6XHGbU4KS",
  "key6": "29f56pGKM9Vu8HEzQFxf2PCmmhPLdj1mViyg47UU9TeXrw9ggRj5e5U32e4STfcPkFRTf7Bj4RCe9X8H5R23M7GH",
  "key7": "5dVCbwrUgZz2HqukP9PLKa8aPSFdWJ6ktUF4kYRxovc2BG2SLqUjy1sztBRLNXrhzurcWHbecSCBqr8L4rB1fBgq",
  "key8": "4Pp8WyMGa5fnV91ndwYtjZJZA1MPeoJjAsQ8tmBZAZGBznUCNgBbyQYzxQhnAG2TqV7C95R9ELtYUXAhehhET3gN",
  "key9": "3uUaXYgVuYxz5ef9PWPaLRNvu8stbb2UX1o8z8dsS9AQy7XyYQPWNyYTnzgBqU6rLW5zayhTy4CTURKzgVPV7odf",
  "key10": "22z7oLYoT3gBQ9UjqtfizNv3fsSQ6FADtRxDxdw98c5D2EExPUJrUwPrBTr7hpFeAwqpRGfkdeg3GrAGSu6o3kXB",
  "key11": "3DfRuzxDi2TPnzPmfi8JPF4Afm3SjvoAeFiRPNCZismwqB2tj7KhSSmH8pKntFdmDyf8DFxun72tN77HtmK4S7e9",
  "key12": "4SqQviMH7RP67n2t7DTMhwajq9mUZymFmRtjmVVQV9bkhsSas92RXmiwACD8kqRYS3w1akmvzYL9GK7fU5dAQnsk",
  "key13": "4R5ikGAaXb3PAw73mKdpQhcc4F5WotCD2s4PUn369m1EDsv6afCFogU2JTqEXwYhYTRHsbQ5TCw8WASCAQDu99VP",
  "key14": "4EWaJLWddrr8beoYXwreKj47kpgWjXJHqJadkPaepDcwnxat5ZYofrDe8g3Wfa9f8RFjSwa81pyjhmecsYXKsiNx",
  "key15": "5cQ6bqPRLmsqTjSHDfoKCiqw5JFHbcxqGii5tmsHDb3XgEFxe5TbLamAcW2xjf9t3WPA8xkeTK5unVyxMZz72SBA",
  "key16": "47fQ87qr1NfJWAdZqmGEzg1UhBfRTc9Z3uKNs2pURAFX6DgCBFWzaA3qzGEFQcXHe3XjbMcGg12Jn76yyxADgrVk",
  "key17": "3npNsQtpoACjULjrMSP2S3RhxBmcJXuWVZ5t65LNxgVqcJyNh7VyhNuWeWf6iThLGebi1r9wyWvqBxPJi2ABaZGo",
  "key18": "65ZX7ULVhSrcZ1URHM1ZCrLuFRZP6voMkwmYiM6nswM6togC2qD89MTi3UEiQgdoWgdh2GbWKmDDAVfB7tQuuD56",
  "key19": "4FNBbjngtVL8auCj2FzWGDRru7kqaeyCdoQiAYUT12WFjZDhVg1Nqaf7RKZYXhJ8DEGaLR5eFuKgigwBNm5Y9jJy",
  "key20": "5Q31VC9TUXA61civ3aYmJfJdep6njCScJ3WwtsWKHGQEDndskpxESozQHwoPaTWf8BfbrCKRukzivm6Ma97si8bw",
  "key21": "5yHKgcXgS34cWVsGDwcPwSLZKM3RwH1g9HNLe8WTTJtRzQkF9aVvQW3USv8URiJC6JXawdq1QUvsvBJtEgQGrdpe",
  "key22": "27hEzNpQ3hpnfjxX6yjj91zEwdBw9uA8aKh6R4pKQMk61cUTPw6cGErkKZ28nkSdx1rPiVGAUQkSkBqsSUKAxbCg",
  "key23": "21RC7uaubWV8CNvU2ucQwZh81oz9XoFoUWGYojgzAU9JD8sgg8ANrSx6gK6LFiPnensrBPiFd85QVq5H52Ad1mHk",
  "key24": "38EpYoWrYoYTFeVysZnrEnYJtrWxzhSP4fdDVZvcwvAfKQvcU6oyUPpmRXzcmxHokPYrYqNFJ7EJyij3mVvZQ69t",
  "key25": "4rkcsS3uUweUP6piAjxFjD9ncKsrGwvyuEpoy1Xs2hCT3keenLSg8FX5MGMpqv6WMDgCSRqtPqHKP66FopSVuU2m",
  "key26": "61DVkXsrQkSzxUobueSBKzLGRxHwHic1Kwuax1ttn1KjqhMwm1TkUSEL2YLXMpAnDL5kvXtNXbJsBK6H7gQCZUrR",
  "key27": "2HZno9gdaz3NUkbDxep3uUdqtiuej6hjKhPBrAxb1KFbnaFDjWqh8BLuG1Ee9D2XNWPHzzh1Xz44fFL7WAodPbgh",
  "key28": "4sbyfWapJdV2gxpknoaDbdhKWoWWv8VvvKJCgUGt9P5n6KgmD4kzmjFoaxuXLyTHPEBnYbxneYm2k796rsxzQZHX",
  "key29": "4VkPh3Lg5CHiNUnA53ZrNNNUDjje5S2E19L894j9BX3tQmHofRHU7CegJZq9HgXJvjQVCQnaLxx9cjuYDZC4hAUq",
  "key30": "3cmiKSAYhkrk9q24KrFLPbfcKjiG2XCHZygELK7At9iX6LZ7zx9ENmkh9vGhx4zD9kbawdpXZiUdWtusCu8LbyG8",
  "key31": "4fg95zp6LnaKx6QJbxX1BpM2oR9yaL3WuLVa2ehhQ9njTQHMMoaTjv9LXdarU8KDg916LuQdoBwU17pZaSq2rM6k",
  "key32": "frNbbdawomT9gfTi23Rm4kqJCszDXeDTTmnWm7KsCqMyRWtVoeUUwN4F2rpdMTXULRWUUF8QyiCjK8oBJ9efCHE",
  "key33": "fQ8CLxwia6QvarERp7enaoiT4iFM2ttVtBvKKRVZnvjvKVmMNV6YeLb6W2oLoQdRxDK436neotTzisqUSqi3F6K",
  "key34": "2oKKPQvw1EW8r2hYokz1B8quEi9fpesGKMhss4NxYLjkt6v3h6T5ynAAV9KzcRtrHNTSFfLtRhT5CSCCihMtQDv2",
  "key35": "3F3aVTS3Dm6zd8F35bu9ogQbRX6QmSwrAQp5nfu4QcQGayTGccyWdFZTzQhaUbSfKooDH1t3W43TPKtPBETHAC1U",
  "key36": "ARDQvdSCKr4a6azYwY3zAdsddGSoHc2XF1XgbExv5LMHEqaqfzJ1heqsxQ8mWVVtzVvRtBjEAyurYGNNVFiNvns"
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
