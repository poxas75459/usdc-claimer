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
    "3rjHdpEBxKaeNxphi9XmcXFaN7nqQckxAy9feByebPcPmeMG1DXYhDy7T3jrcUDezo9UysizuTxwVaRoe6ck61ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6GeAPDfzDvVPWcBBo6jbPVcDNjVTu8AW9gPhG6zCcyxvH2qBgMCv2w2rdEtrCzUjMRHsdMHDWY5aqSUb6Uhy76",
  "key1": "2rJrpUppfG7eUeav9FqZ9SjQkECnCEDGvWu1VT1nU2LPSK8enqicfi7KLwKQr4vcqg3UJkvteV8gDSNBS3aTQYU7",
  "key2": "5rGRXZaFQ73wkryDjNB25y75SBep58GZhRWdn6XaooFPjCu6UwZCw8NP2th3fGydiMLNWXdXuRPe1ND4Vo2vU2V9",
  "key3": "SrJ3akkW8DKzuzVE84NTNwvDJnkT6YBLgKu8JxdZNfRZoCR14VTHgoTdn4ghtUvsuvFa1Dd2HDsefiykzqkMMtS",
  "key4": "5QkVUhXYd3T51HstoTro7BYPqLRvCEZB9JT3HzqwM3CdEBmPjWPNi3h2kZfyVmtanSbHTw21fpgqPf1nRvR7r3AE",
  "key5": "3m3ZQUFezxUNHUxVLTQHmXFfM7AVrZKiFu3B4YZCtdPmi52rATfHq5zScytnA7Xgtt8GAfpco3oPSGjaLCubiYXu",
  "key6": "2F4wKSnJTzS12tEMC5v6z55pJCvkfkqNQjobum1BtZFSkyVaYWDyQnAC9cQ9pFu86ApFnSsn6qxsLXdnwB5Mv6TV",
  "key7": "3dY4JVkHRJafjfVpcEyoVcgXjQKzKW3kUCRGF2YpYEUu1AyC8ZSPTvnMvxBmTtkE7cXCykjFd9zBi6kxZDmu1ruH",
  "key8": "2ZAYHNjoDpHCv1zhZNCffAVGMkRrJWRHvo2PSt4YUj6PW8wbmXGBJ6139VWJL8Mmn4eEEh3R3d1bq5djMcqJXGbq",
  "key9": "5H6dfXnMUGm6mRpH8hT496nseyxqAfG8VvzC8UoTcGXsSAyQe8zin7T7bWm6s1mS5ofz4BfScrDLseMWDD1oh9VM",
  "key10": "HbDyHVmM6sbvGgg92zBTynifHYpEN6ixGXiCjwTzGRNeRYHpNEXgk18dG1p2JswSXbtcBoGMY8bWJRts52s4xbN",
  "key11": "5XTFBu7kTBS5p5FnUePisSd3QLcsABxj1ki13RR1HogrcBmUzaTBCR6wQkPXn4XQjSaxfdof96t8TiaW1TyHU2bM",
  "key12": "3FAFTnwi8HcTjRWm7U2tYHry4LrYjxTrjafRZ4tCvTsywZCmhVj7id8MPzDhJZMs7d9sFSioaL5NQysExh9YZqDP",
  "key13": "38zebJ4hVcNuMsj97DGJHvgDzdPXuZkhtDcCGgWuTTEFFMDSn5HTUPYTmnvYLRmwSWmm3oATZ1jmv7DKP5TMG9VV",
  "key14": "4myH7VCq3gpdjZQDyBhqY5Nnty2CAqLEp9YSiotkEvFyq69ah9x2UHrnzQ4ZUAdkJAgG2aBoYNyF8wAEsXHfn2yP",
  "key15": "2E7Giso41VPaRnfQ24vUU4vmNXpHq1BFuzSuaNkhR5pSNREbfWRUX2T5XCjTriMMPaLtfkEx3fmV4e2v3uumdMPA",
  "key16": "4XSrSZ9Hy8YBwoE8jxTqh8Kozzc36bzavcjWCJNhgZYpQTHTrYkz2gFCaCoirRoFVJovGsQVZqEfu3L1W3wAV1gx",
  "key17": "5yq6upjPD8PZ4xRrFdfghm8YuqKHyqJz4hxUmSWCVncEyEdSMAi95brUmGYDC3SLaAm3he8JPYy88yownNK4zFwj",
  "key18": "2zTimYJvYdffP934AHoe24NGHfe2fjQbRKrE8M7TLPrkvy8GPp7DYTKMj87DyiAFK3joRt1U3TvRo7PziAgVBDko",
  "key19": "MpmKJ8Lgm2U6WduuCemiM6WRg5oZuNm52SBGFXj2bbxUJkak5sgbaPk2PvCNQE2i17waFwGHtdPZ4rsNdmMerrA",
  "key20": "jDLuofpJMko4zZTaHy8i2pjC6YeiQVPBnjaBpcE4wCJUcZFT9R8oyCNiDgqYPzEdUp4R9jaANVHjytLKikWXSF5",
  "key21": "2Lp94s2AHDDvZfWcWeFFdihWBewL4ve6q8LM1P6456FYZsajAj5Bt8Dkr1ginoA9UdqNC2EgW2pfQ8RufP9kZ9J3",
  "key22": "5CuXLneZzY12RAJaqy34i3j13a8jwwyhkiUwtmxBBabMQLQoMfEH9TJs9wb5C9NcJgcnuzd8MhN1oJrGeAZHryVT",
  "key23": "55dxtGCDtHU8nP22mUQ8oHPSKxsssKBWrGYmZCR9G6RknWjGCCe7A7GCeBkhNBzCup6BkqheP5MtsTZeCNhXxE7t",
  "key24": "2fwELFWo6gLvLeR8DvE5KwZ1XvXRZW94xW67SCAFnLkm9v1o7AHh3n3PKB63BUKVk33p6y6aW4qTNYwbAxCJEzwk",
  "key25": "4iJMPZEZvqhauX1nVdaPey421VPEPpmD9E6i9GeNLp5U7FAhsKPpwM1pF1ZQLcDcgwEZLJLzeiRtu5aBDKM5Lc8d",
  "key26": "RVfhjtLkvDDVLizFv5vU86AcgWkT3bCxT5oHZDxqGeq5mWoBeDhGfU3RaJBJe6CprpWRXTXKZ78JLepabEUo3Z2",
  "key27": "TKciL1Mv1e8dj2SHxfQJkWLbm86g1ezrgL3bmhmEKyjqGj6VcpUdWEHYyeXpuKaxmKjYMQwfLwBgZj1GDd2XFPQ",
  "key28": "5b9faL5TPAsiVju4rARLaoahinJ2uxYsqyZXmnuPRZ534qMn8YR4NeRmQqWRLjKFcLJLR11fXKbULEy4cEmjPWVT"
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
