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
    "5GgXhoiDdtdgBMa83S22eDQAfQe5ZUCApkywhoWdD65bys924hNuuKJjPrL42LrUaLpW45Um7dkoPiNyaaE9FpqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nLrAUNcFMeDXLm5c2KR3YGKkqV3ZN3aojjkR5c72dKxQe35YiBCSLQB3HVrQMSJFuyjRmXMyU9k1siXkSYgvdvj",
  "key1": "36wtyRjJ8zLw9bf6oob69ji5GiafJVsDWPazpTjRDUMhdXsFbnQxi1APn4UpEEnEaw1BgNZmnCUBDtLrjmctPHCC",
  "key2": "Yy7hBSm8p1cn3qPnZ6UDqYAuatokRQ9TAHYFaPet8RxWihgkWuNkDkwWEZDJ9ttrw1o6vmFtb8GHmU1NBU2vSKz",
  "key3": "26jhMdibxCqXXDLcvFTxKZFfgvdy8XZxPV5J6nRkRX8zEcrpxigJyrEVasvBw88y94zXx6pqMyEGd5qMG2QpHraQ",
  "key4": "hYuoFJKV8B4Q6pP7fzHD1NaeHzaVbNyGqDFj6DWMiwsbJX5TAPjtL8pvhMLNMJGfv5QfPCbLEr7nqRfKU4XHWW5",
  "key5": "52ygAk83PBptgzgYsyYij6fNvyqUoXH7yrX7KUneSc5Hf6vt2M21qPdxV8A6EWg2MjKUzfBiDarJ8Fz9fVcRVFoS",
  "key6": "4kvwie6DEHWyre7XdBqD3S6v3bc8dG7WpJtSN4CKjaeJEjaGvoikf1tgaEQpfd7RoXs2EuH9FxkxVHrFWDCMyQ1W",
  "key7": "u5PLrxChXdXJcNfDHVaYCbbaSW2hsT8Xxfy6MyVut1WHmCKvwsGoDVDbyD1N1bmCkDK5dNefazBrAM7g3Z1YJf2",
  "key8": "28Yfx4wv65f9atXKg4o3BJCwuifRwjqejuLw3N893Eit6CuSaCSENYj2sm96bHpcn513BsB6YzULnZ8o4y9kzn2X",
  "key9": "5QtJj5i3mxDgLrYMSCBVU1hrnUvJx1jkbZ84gTcn7fhkp3ffWHkBP83MD5tcDPwsXA3X9agHAqrNQWGaobraPggM",
  "key10": "27nvWddZohGZR12cvfV9Wh7r2xjqzvJH6FPVVgAYzos3iKN58ijicSnibDhgFSD4yFWCbmCZFqv2cEvxsxnqWUer",
  "key11": "3NswSHHZU5QrpDQa92QEartn9jqn4DbyauvsT47WhomjsZy3w2e7wc4VfbfV2g17sxS1REL9ZeurHSfTEaNQA6cM",
  "key12": "5nrCuSqX5ct2c5stsh5tffSD4VvREZa8FjPvcVuKTm4qYmE1xaQ2d33ZgZ17kbZua4YHm1ET19fo99WLqDMnKYH5",
  "key13": "487iktB3WuDvTdUam4qQGjUyKynLvev6CikuXJCgegz7vEiDhAAekkE2eBKibwWW9JLYKiMx5dP2daz48sHcNaQs",
  "key14": "2vx7eZd2v9cFB3DGsGbX5g7L6uAw1ZD5sUjhAW5pXDn6L8JLqAhcnKUg1aMHq5q9BLeqWTL3jAKSnAGfeLVV2x4s",
  "key15": "2sTjaJ5bZk9CvdT6DyihM7bTfPnE25UEDnU2aMxnKvFftC6uogPkKAzae1YJkh2WvtZwWPou9AbWDq3Gzi8o9aQg",
  "key16": "4b39q9ScdmCgWSt9VoEQk2x7yvuTZnf4Eb22PB79rbW3D3Uebb2HNTiygm6sUp6hzWbiiVz3FdoJ316i2xsRmWcv",
  "key17": "kNHu7weGdfXFHKC3N7dX8chmTJtaetsvRuonczLPBrVNzZaDLfkxV2mrvVqSufpeRBM8cgJEA8uE5A4KJF5w8WE",
  "key18": "2LG2UTGBPkevUWpooq8EL6iFNxVCGZypXPavbLfMuAeWxZetqM9T4YB7HZP5BTtZnwPb1DdjCzQcRphqbaqHF4Tt",
  "key19": "2VtFVsC8mBdsbq6fGuVttaP3W2LD1BBwfssUhEWfRHfsoQvKjT3UPoKjj9obzyqdxAfYuekkSxcNxkZnCzYd77N5",
  "key20": "5SZrENFfBQwWpVfGzVCxTDiW7jkiabwcxigttLw4f7KyWL6B1PXP12sCG58o7L6sRzZEUXF2mCRsenGUXwe4uBah",
  "key21": "5RoBy4rp9kXGm5yr9dzBGgec1H42wDh6Vhb7YCGuekQwQdxSSuiVHzzsZBjQynPMeXSPtiRe5fzScw5h4dSMAuz1",
  "key22": "5rLJ3jL9ufDaPxfp7mUsXd7uKv3L1d9d2jzPYU4mKBfBf1rm3gvvfxQDkmefuzPMX7Vm9BHwHLK1XRQPhybmvga",
  "key23": "3wUinBLdonwcFCpthdPcr12EsyVC4Vz24n9tvEy9gSqcNLGn7rtBvSCvY7vg7gm6dMMc427VLsLYPJYd7V4TaX9M",
  "key24": "37hcLK1PVmnc2F98hCHH6v8Nt4wtxU3mD8BKrsBwUZQshWMasqMXUA6JSC3AZBr5Dqr9Kc1iWWVJ12zsSpS5p3Bg",
  "key25": "nwzykY2Kn2ZRpcYLDo16EoUiz9ok8E8Rj9Eq8gFs5ismhrTmgiVf3XKHbF4pbzBzP5FHaEoEJWvtWBmt2quNP9k",
  "key26": "4E4s84ZJ6gm88KZ8xvAWZX5wjZJn88LkYZbwg8uwEWMctKYsLfn8a7PdwWZfSXTQaZ9T68G89rDp21ef6s1oduw7",
  "key27": "3eDEKCatcpvL5YfSdwGMf61RD3qE3Liah1AThNjbNHBjnS9he3doawTEJEKLfSUVxHDaV9gfW8TYMSAaLBgm2QjG",
  "key28": "4AuDM48RVZP73Sntsb4YKDJiJN8YdSPQ5kw2PUUY9TQcszohMoTofPasALPKw8NB3nqM1moGPvBj6FV1kXC82vr1",
  "key29": "4aUexM1nPx5Hzivsq6tmXiayhr41pFUaWVuwprMfDYqRwb5ZUHvStQAq4Qi4QEAtB6b4P1f4xGEravCwG1BqjqCK",
  "key30": "5YZHKZfJGXZmGQzWs7wwuxmGXfzc2PweL3eU8dkBwCjahNFexAHiFdD8VB5wh4RGxmVuvARLpKY7SyERuNHExABc",
  "key31": "47QnNK2tsQPmLiAaYtZPt5htGUw9dGWx7C1qCCus7rrqMRyomrRwk86iDnLocCctpZ4g6jQmkoSiUZT1G9bdopPb",
  "key32": "YGqvanbPjkCuXzASNTQt1fH71RnYcqVAR9exr55NaFota3YpjVhZcJWeEWRBCBERxmHkHkftQSAAJDuy246cj7t",
  "key33": "3ZuZdkhNTes96q2u9YHmmKsXxzJMVvu53oi9WPSASBZAY6d2ZLRSh4Tr9yoBBebuRdbZC17mv1Gti9yCgPBHQqrz",
  "key34": "3CTMEtW47fHnnbGUyRASB1tmfi98fpTKYW3wS3KHRDTdpvRCzKGS7f9CpCEzb93Ta4AVdxYVMXNQSZJBtrP74o6u",
  "key35": "2tN7iRZ5nJqDCRMCs3HwPS8SZWUoUrc4v2gniCZz9Z9xQbMEpn6ZrWpnwYVtnmnVxkPJt1U8KFLAcp4XcAt78zzu",
  "key36": "3xA8vLVNg5G5sHVE6NYw7bGwshqzVadWp1CXvF2EMirCnQwVNimbiRJV5mSGweKPcr2ccwyaVYyHpvgt2tkNSQDb",
  "key37": "3ZxiRvw77UGHvK4eB4S4kB9dwkHfKwKphmzLsG6m25ABz2fefjNBnjCEyNirCr7a1K5j5cYkQQYP4xqhECgnnZm",
  "key38": "3VepP5X7CLsBCvNQvXeHBeHqeu2HtX1zLQMBXE3u7iNjau6JLTUfSGutsVzkZaKN9MYSTcwakKpbJ5CvLuXtkGxP",
  "key39": "3kcSKpzekGb8fdih1X54qdTKAwEkpsUaPp5h1AcBJSdaxYVYMsPKBPYMfDaocW4n9MiXs3FfM5PixBmGg43ZMnu2"
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
