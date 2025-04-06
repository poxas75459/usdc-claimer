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
    "2dmn24vGwPHodspqK9GSrVqsvQ57y1JzEH7bckoJkkS26iMdkvtnJtGGwPzjqkMe6YxJtiwPm9KxQwDpi4oyrY6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nxo136utkzwi6tGBHQrJjZ38U27iQ2MuweVoJx79bhc6JNKjTDzY4NnnxVpbknes927HwJaj653CfGLArQvGXhd",
  "key1": "9GP2gGQ5kb6t4UQe6mS5d5aEEQ5AJrTsG79jq9acyAasbtvMgrnpvBzAcBDhggN4rdRroLCAhbBbRbSNHrN5f7z",
  "key2": "47qE69fntGsWQy7RRzPrjHfXR9ct6ZxYwTVi6crwXR7tVQeAxpW1pqVjqJja9oM1aB8fJzQzNGBpXrJfLP23nt5X",
  "key3": "2nXpwmKarVCYEGT2sPMBo8BFT67mPnBGGkyVXPDK7Uzn8vWdSawdn6BpxSv6QuJqQjLWWYmCX3TE9LvskhgYaXPN",
  "key4": "4Uvmqz9vziJYEqcTq2sehiACqGG5ZhKMWCdicNrZiW5cb1i4aZCtDukpQRnbtDippZpyfbr6g4Dn2Xk9rStDTJNp",
  "key5": "4Mmjyt7Vrn28PEjzHXQtRWY7TNNx46a9Lc2Uu4DMi7X3vn1uarg8P2HkQYgA74zzhUbeNaK1qqEKqhJHFvDN9Dtc",
  "key6": "4MTKLgsmA2C2jbPtoxjLFbRxvZvwWSoM6xw2TcmmfH1fEp7HjfA66vffZJAJaemhGHsSYWCKUHRK8oD4n5pSCp7G",
  "key7": "27eMd5VDJeeGZRcFNEMDAWT3Xe4qN71Ui5ACPBZMmfJx5yaiaPKhTpNGizR8CTq4kjqcPTDbF9v1tMGbKQbjurus",
  "key8": "28uJEyAxzHTpK65FZQUS6ZgVwhr3erZotn6EoyU23LzRmgrWJ7Shsua6KjjBdGUWgR9pu29SYsMcxTBypWuwQqAF",
  "key9": "4vtzqrcyyfGYCJ7CXebpndcoL2NMiZFj3BjiyQSYymDNJqCgmyBrHBLdFarc8Z8BqXSv79UXDUMuSrXUDtms85h6",
  "key10": "58nXvvEPi7H34aHcvfQGeSYhg4b4sfok1V44fX91BXm6drdJcbhhckrAgaQWEpoUojmgXXp3JaW5YFNCn5sh3rqZ",
  "key11": "wMwGinP6GqrS3H7umjgGieC7cGi2BuBx3eCoK4w3BxQ5ae8CJojRhvBL9gf3LPv5n81kaz3AWYnCG2FsbgL6z1b",
  "key12": "394mc3KNdvS5xSdZNQ2M7cdMB4VDpEBuPj3fGLTGEbbWCMKHfz5EqL2N7aZgfTp1KVCTVeekaXYEKBStphfLpiWy",
  "key13": "62GKSCPoE2t6SouX3MrsQCG6AWtFuqs1eFUnSvRqbXpV4TjYgwvUNbXVee6duAaxNBW9Fp1onHBjnTT9MVrjz1Zw",
  "key14": "2KqujiRXb6gPVoQEHJYQkYkEZTLNpAjWBirvCivUfuCS5tg2geYSBBei6zCp96MwXNRXp6xMWNb5xTxmAtvDZSB7",
  "key15": "4BxjJbrgJVMTHfmGaDn1XzYz1KjNdJZvDofWBEds1EbBKr2BvMcehcwu1pKu5u9aeFpM9MiBUYZg2CRKiFLrR4X6",
  "key16": "3bWMr5KcaKiCrSipkXXbe3HiJxzhX3KwiomL3NiJ49vPFvRTY5yD97qXj68AMfY6JZtJZnhYoZqCSbwVhn8Vvd7",
  "key17": "5ivviuaDG8TiXKYyyh7uV6DPyQe4WFJzr36sRDnjGBbKtV2XbyQjuvdXfWs2mv8j37qSACRdEf2uU8x8VcGxdKCh",
  "key18": "3LTZC1nVAEtt7GeMjgy3Axqr4CDrKjL4bd8FvkRpexyEBwV66eF342q1TCWD2VQS2ueVtkset1dBSCane96gqrL9",
  "key19": "SAsMGkhvtjruMGjdcNjvzdcacYLYa5FRzKUyBwQXpi1owQ82vEmVJ8PuTDbbdnqXcArNMzYVErSA3wYZSj6ZJGL",
  "key20": "A5gNoqb4Y4yf1Mf7DW524LoBcn289rTpSZiPVMJhAn4wayXsoQKZnG58yaneAUikRgTVPhWPS9UxUhtBTR3MHyA",
  "key21": "2CSkWDHeS74RrRaMJthcyYJmpiJF9bAvGGn5oECKxMDPS2gzBnUBrJa9i2Dd5inrRgauCYazs7oKqJgFiaHMpykf",
  "key22": "47FgLbVtnZShNUSygRWCTYZ3FLCR6FBfYNYpXQnqJHg1E6sNyM7EYVUuoGCWsndNTxKnEr2Hh5mSPqREDUvWkpf5",
  "key23": "3b3ZpHLvpJhszeBWMmBuzMTRDUS8PyRX4sGF9mpczH1UFezzENnAsAyEc9UAsdZcmystmYi3UCdQDGwfzXgyaxJh",
  "key24": "4xYEyHAeHSWYV25tFCyyUbVYDEquEJhr8JmMsRbFDDx96mEjs4tBZQXQk6YmtgnjMFTmGMTduqHr8bsc73897gL8",
  "key25": "h3JBnoJmxDofK6du2KSCTAyjBwSYLQVg2upr2LnwgHGehLfVwKaGsKAFqe3nDq5bykN2TDRgtRuWBY7Cn5kXxkP",
  "key26": "2FzcMdp3gUYUHvK7zoLgYqtie1v38zA1oTNg4ojioAeuSSwFm1zcJuGdoPtaZezkFP2bx9UPUAYjWSXupHKjHngC",
  "key27": "2Neu11wGH7iDH8Na8CHx5gWWTKhBY8QfFyPexaSyHHPKEgmC86AQHqKKVWkX9ZJHksDu9kKTnEphUfHix1MMuemz",
  "key28": "4RzzVp1366aNrkrk3vdneSt6NC4Eu7GyHbVFpBv5RxF9MREY6L2gpGgAPVhLsc6PwTTBjUGb3VVDhYwNKdSAUMXm",
  "key29": "5Dpq7otXVeU1GZa4cpVLSXPoFtUNbFGa3BvwAbnRNHiRkgTCnKQjhsQx53Lz9wsw8CUuWPhzveWG8WSh1s52Ntf6",
  "key30": "4QDZmWKfDvHsLzRT9nrCBrE6d5Qz9PJiwVaSXfjThKSAh6ZTkkYSTG1Na4Xkw8TNq2kjDiQQpfYC314VafdxzJks",
  "key31": "2ZZi9SkAB2asP9hLtU4uUEJog7B485WESV6hGPRvuMaTVPjYZ9AQ5n72Zsj75MmjfyUDnKGLMNfu5soxpMrGxMR8",
  "key32": "5UFk7rEa7Dw8MjRF4nRatNb61qaH4ib8x9DmLHPprXEzzzfsNQAdnWWev9EV9HR8tupTFncmAPJ15hAsGDTS1eft",
  "key33": "3m8kwR3LFZy4biSkMpEbmSXX5nq178gLdGX4kvbQ7mhzXxbHphJfQ77P7ZGM4rjAQ4HhrWpRqbMwWPTDxnpExEoY",
  "key34": "s7yTCXj6dpvj5tnSwgE8aYyd4AT9wLfr1gVYBmh2ppPhPaQGXK2Qy4SrggERXnQL56vJCTCKzRf1Zvqoeen59yL",
  "key35": "5M1UHTRHjPr87hm7FFxKjcQKQVbt65zJUoZSC271wXmw3sjZcgi67cpSrFCmkNi2tfWQzCTdbWSRKGwHVfE547du",
  "key36": "2hyUB65iW1x86ZkxCAkm3KK5oDmm9edcPHz1KVFnXeUKAGT6CaK5EQ3B41sXWJ6HrU2z3gsy1469QfEWNsxBed9c",
  "key37": "3zGZ4eVRYVLorCSNUx6ZniPbPNW5p5CqP5hkaJpjzA4Np4x7Pz1vhCRt9iP5zKKBoS1fhfSSQDuDcgMdNMFnxyiZ",
  "key38": "A1HGSbwyoZwdpevSqXDobz3aCTaTwnB5K2hHXXPMnkVWriGw7EPURigqr5nsKDv4daYCUginCgk7443HxxUnbb4",
  "key39": "3PkE393MKDq4LKs9N4W92gtniVmvpnJQLHqL5dykqwvCHkisNzULdg816bpFaMPMCgtuXPZf5oLf4PVZF8kCjhzP",
  "key40": "5vmvEqoh77cPp5zgmkmxAr1LoSjMYfSP3Fpo8z6Yxnv6beCohfS8VcLatQKLrYjk2w5w76TLXeQthL14kzFLjszh",
  "key41": "49U5g6174ZxRFWWvdYyFoQaBEkfmAJySDNmmSAc5Pe4dBrySMW3eBqrAJUQB9DNKJ4cB3bpMVcjZaDmFAqroARum",
  "key42": "2ZZNYfgKxJnrxi8ybBCeEAMc1Ut4uzyZUNNF9hWqRGW3VxWaRgrynEaTL8Xn6bMSNud24BgQmPLmXw6Yx92PagSw"
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
