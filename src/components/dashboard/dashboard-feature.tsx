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
    "R6w8LfrvqPRZ9mAixbtPTq1G5LgPW3X8gKEhh5w2PkzERxW4XG5bXbbz2bbwyBPsRFUvx7Hvu4jVqkZjtdcmmdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yA45Zy8VhEPgG12k1kvkvwDcWJQ81SFtAEBqgViYeJnT9acsUEf4zTwFgMRZPnJhEQcwWntPnwanbnj9bNsKcHg",
  "key1": "3qVRFLShSL1bJanmitkd87dhh3DjUKEXEK9yyjbsXD7XDqKYFGqNS73XTaDhZrstqYqLVFRcJbUZYPh6ifTU3unB",
  "key2": "4hC237TdhKRudmhQEvcNisMydUxzbE39wjsY6cEH77AefYzQ3rtaLXoF8VdbeG7hPij1pHsy9kz3KSvTYKVmvH4N",
  "key3": "31W3tHJoz4Z5p22aG7LTp2PpUV9KPDFNhL6ZXEGqUEFf1edmjctCHWNg98sYSP5aTckNXNXnqwmqsVa3uyskkA8t",
  "key4": "5H4gfpybwHQxn93iP4bjzFBuTdUd2Kn5nzf3EwnniaQXkQpW5oBZbr8wTz9FrKomHYi1zYefzmSCV3WmvymDwPwY",
  "key5": "5wroFME3gzjL8aoW3sHisWkSaw9q34hi5JmcoUGfWUuVCMNgBjzSMXmZ1NY7jUH9PDCEpbPVoS7NxSoidkh6t4tw",
  "key6": "2XHe7fLKw1J1UGfLorbfzjFHHh87Fye7EkYmyo7ap6D7rJwavqQZErSYECtt5Cu7Pf5Ry2t4VhSh7redfjHzfxVF",
  "key7": "2CZTfkZYkmc9LxihMavvCX4aDDvK9wrCnUsZ8NRBsyfxEVqeGXejvBaEpK4ieJdUWPPsz2tDDP5cibNe2EoLa1NH",
  "key8": "4yfA9WVddqwjVHVmWmhwaZM6frxmZV7kzJ9ikBmN73Rgh3RGMp6Af3uE85SReu9n5o8dkZ6QJTW5xVNyehk3Acwi",
  "key9": "3jkCFhyeuoeZo17Jd7L4xt23pXYtEqPuoTV848dXH6gfQ2t7dXyFQhechF7HxRwBg6ha94sW6cKSoDDXNnijKcGS",
  "key10": "53hsCm6j5PoF4SzVFKpGUs8YMKhzms1QbT2jE7WZk9AQXeUht2YBcH3i2vhoPDvFAu8WQrpAjiS8LRkUd2e58A1s",
  "key11": "66Rdc9qwhgA5MbxenbMfq833Cs8Vh8LmqyJutLqS1vTaTvaS7844KV6ChWKJfKgUQg9nbdyzMAAE9VugoyfKEeM4",
  "key12": "2ujk89XWYWg6r95n2tq2msyphw6tzAbScjZfmTLaLDfLW69GerdkJwDxARbL9uL3NupyxhVWcdKYeNYwVFpYmeZd",
  "key13": "2ZcYsPcPssyWX7KSuDjRAtPySJXARdDeb4W22oUwMnLdBoigrt6qFpmbQCfF1FVwPFhXAWgJ7Tp8jUE31j3BMBWC",
  "key14": "5C1k52C69vPiZ7g3Tka6D9xdbNce8kvXsD7ekBA9EK43tGXE5hPfvC99FMd43DzpP7qw3txAFTUK9xZcdYsamRNc",
  "key15": "2ZTwVPY8EVyBCFUbBitPoSFCMVNcWd7PpxtV87kjC6U6Qy1xUXzLG7LcT8APD7m5Ba3wwzbZrN1QvbnprBbQ3kBu",
  "key16": "3LLMhEzZ9BP5GBwLQpnkTQcXgSbo6T9uGopN1mWmW2p2vWVkXsiJ5DfT1iYHaqk61ySosvXmQkEMXqDSJTVnkpu4",
  "key17": "48D7bdHP1rGtT34SpGraiyTCzhqyeXNQidH3VVqA1NSRkNcAuyMjjY5DpERybXaNqC6QrsLroKFuX9zrJBvaDNcb",
  "key18": "5jfoSHvRU23hDbRBPAGMiSS8DdD8DW9RrqAJvkPRxJJSYwUjs2mfS4zTMbZJdyCpmT6H8SUKogX5fNVJBikGgMKt",
  "key19": "AoW3HzSfmtxKYQBrqG1UHBQhF7LHcRxJXCFktCVoUfup7PxUqw6dj9Aooc3y3rndncbtwvfpXLmH9djf27aE1rN",
  "key20": "61fQBw7o9C9zrokcnhE78jLRXo7B1Vypt2f6HjfUWyHuBWWEymS1ZMF7CuG9xFBcuuMWLc5r26F3Z22sovQYTd1M",
  "key21": "2AA8hyK7j8YVMV2KwCgoufSHN3Kojtm1WcoStiQ69a1FBBPxHQveGFCLyXGW8rodvoiQ4iWQ2DtG3U2K5vwJy63L",
  "key22": "2x9JaWGVnnp9NBFkDShHhsXQJ9ExePPsgQjMSQmBB7k4WAzBFP4bK7ZWmUZ1Namq7F63HJkXMF4Xo235o4uai5WS",
  "key23": "tZ91xPL3RxgfjtEMXpK8C3JdiiErXyQQm8ESkcNJwgKoptRHS1QvCLfwHdFDFVP5ecAJPKQiLABSSwBaqjDPzSP",
  "key24": "2HqJLvCpFP4JKy1BeGQAX2NAun2yPmpdoEBejHgU1EbN8GaiXYBAoAN2U4HuuU94UpryU5qKBntEcag6tzgSkh1M",
  "key25": "4bS5LAaLY3N4xcyUKYGJ1KP7yAY2nYLrQoHHMfwLpr6crdDd17qVgtnt5UG2h6VkuvxtnLWVrcnUw8dsmmCQXN5G",
  "key26": "54NVhgqsLMc8YP1CNnSV2QfVnQSQaGbSHuBwQBgvEpXtHf1JHJdZo3FZUEWDPEDe3jgb5j75JwktoBz8jcbkCHue",
  "key27": "GyeEdDhkN2WWEYMUoU3L1ZydAEePkhVVFGXNxyVtVFYNSbHr4nYfCdxRDww9cMmMEmtCcshACUybtPNt58mNrvz",
  "key28": "2TgcvP6mX4Uhwvja6z7yguEC7yt9yKGsRj5pt7TJehDDc6osKg43ZSz2pipJrkuGaTJ4Fgw3yQVHJYgtzrBaWhRT",
  "key29": "5CVMZV4xThUPkRvRr8M1in3zCSFzWMDrYBgDfXmDZXoXLLaYZwEBxBtNFErxuLjrBAMRj18Pm3N9qCyuSfdrrves",
  "key30": "346fKoXyvuqgqxPL8Mx3paF7Gjd8GRD2f6s4RGABrVxgGgWFvcvWruYDcyNRyRnsXvhkbxkBKxfbHV8TAGHhJ2ew",
  "key31": "2GSHdGLrVJMmCpRu2xb8dctV67vH3jj8taZjCGMzJUCbKRrsvBgPrCRzikvJb7fJ3WtJP12tcHvKR9bgnYe6Ef6j",
  "key32": "ccbvAh3eFoQAwuUN9jpzQrXapR1JwGUxEGcn2Ke2D99L5ausxSFEUUYt8eYtojFTznrHbjfbEDHuL641cgk9RpD",
  "key33": "4odZvdGMKWDFuDkdAKH3BkLuuX42pJnFGJhkp8Y14XZQb94kWVtQb1ACqujrcmd2zsnHTyiESKA6m7LY5MmFkgxK"
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
