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
    "2nsyk9dLaCkeKCy6MRZct66XvHcvqQyYE7CXSjCU5HBpYXLFyog2ewDEq9gbCU1Fy8AYFRYqctoiagF754DkXmfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LouvGStw8EwrxZGGF3mjgUEn3rqx5euGXjR3Qvvs9remEru57wbHZz57YjP3bKaV7skaSsVvQxPYirEUpWLagyP",
  "key1": "37Ncj5mkjHNTdmeK9WMn9k8aDfZ1QUqLPfBt2Fawu7sY8TGcW3w9BVyBaSmurWU74y6mW7HTcdeE6mXM6Ugex3Lx",
  "key2": "3c3KeFdsedsmagZZmvf3YWzoG9tTmAQobXQs8njGuVPNaVCyjYUqUjoEogPxMsf1aD7HraGse9NtGPCvEz7xt2fT",
  "key3": "3GWbwi7jqyNBxXWNB9HKTfJqJqxetVAmYEPzMTHrguMLH1KDZA5ts255JYU5gQViJGfHTckCu7snUfv4ZGXjNMf",
  "key4": "3MT97KhycZgsB6dfseH8NeTzh1CY9EgDeECN3qfVWsA8czqsVXpa37b4pe3dMR6xuDSiUoGhoEVTigqgpbEAYH3C",
  "key5": "Q8KvwzC9JSNnubrAVoyWZJKHn4cj7zy9oxyr3gdhVJJoqpVGLHFvgnq3hWhY3f1VhWdSKMHBuoxM8vYKZ3yoCxg",
  "key6": "2oSQpSgYsZDBeLvB6zHvQpuqzhLPhFPm1ZdqraMwCWn4ESBkCFdwfutZWa6JEdsUgUXxAHMYQqWoRBCVZQiM4GND",
  "key7": "Ja4PwRuQgvJFNm2ooPATk7TQGL2GVM6svjK5Wuv6WQbJyKYqjqcouttGTiJPm7dpzMhuR7oKTd2hVGekNh4Ugu2",
  "key8": "5KzFHE1xz2RMVr3dQMG48R1gW1jugQW79B6X1cMgscRd61HGY88AKMUVKCEwSqCg8zcUceBY93qGDyPY6SNgZQ5R",
  "key9": "3ud8FDkjApJS6mLE7JCUbh1F8maacnju6AbMohXf1dqaf8KLVUXX8iP9UbPoSRCWPLiH64XtyBCnMSAPEa3QdapT",
  "key10": "3wWWHMcrxYSCBK6wQ3mnLGPsTswQbb8gRgnYoPh5MzapCFz6DhpgVYUg54B74utX6wphZ7BCBqAXtAD3iBWtBEFd",
  "key11": "4GtWXegntaFBQf2DU88WipxDRmGG4Bg3t1ExP7PbYEXM2cfhCjHHRTic2Cq8EcKzcvqZ1k2uZ3Whd3uJkqty2W2f",
  "key12": "4jyg1c4Sccf8WbfMjchjojuR8QefuHDhhyZU9Nq8r3Mcs2CAkZwbnjeNcn9Erjpdp6KP7Tc5i76xu6jUwfXZ57sn",
  "key13": "2apYbjmhUPmRPraGLdzkz1diqqLoP6j8vbBebeeqKs6csDVD7B94Bk2d7yvhUbSWVuvJmRZoRd8YuSDECbnLFmhq",
  "key14": "2ZmBPRRiek41ojEAM9cQbp6BSZFmjM4xdYw6nDZ5b4ApnrmfNgLdc45ydakvbgkJDB3Te83e9oHJKMdAJrC8J9ZN",
  "key15": "4PK9UrikqEKFa2kyTEj4gWxRFSGkt89XBbQfbZG8xb51y9a4vKKfUE2SMUCayiedR1rBdu2bbtXGJANqxfGHRGaS",
  "key16": "MzLn7vsa1nQEGgaqV39gU9vbyVL3uxksnPz5tFgH2iWQZZMVQuLvo9xL2K7UVMN5qEixDr3b2fg4EoKKnAJg4fQ",
  "key17": "4FXLYepSh4upyhRCyBLzQjFmip12S4sq3H58NaW9uuoaBu4ZR7meEVdrZNDXZajgakxFaUF3sBxv6BbzFau1xg6P",
  "key18": "2JuVxivLFxPRoY3ANCX3M1uikuafjSgWYmdDsX3FkxibErTGcWyNeTL8hCgCpPp8gEy2eMuteUzsDPJ9B1DAhkHb",
  "key19": "4b9M323kcKG6v8noz4EJPFs5ehb53Tn12JtiM4PSGPUVN2ZyVqrfpivPZJNcMa9RbZacriYfhzg3AdYvsGbpV1zb",
  "key20": "2VW5W8QW4PXcDnNVwaSPxBbNH75T9vmBZKV3i1abFb6Xpc7ZqayX9s56LNmojxoTCb93MLWHiTJNTbK9mgwA4iyM",
  "key21": "2y4qJpkx8j595Az5DfxMp3a332Vu3EzbSqq6qdSJfKXitaTNCZ9c7RbgaUSZTh5Su2BhtL5CB96EQMVZet9i8tvu",
  "key22": "75zW6VqNRestU51abeC9xPV7bw6oCXtAXd8XQYD3bj5saHgRFaU1MmQAjeBQbF431u5AgojNkrQ8pQH71yfVSNu",
  "key23": "4EcfAg7FT2a7Ad8N6UN6bMpUY9J5RLuPiJgQiASi6oPxyrR11kC5HueHUrWzdKaZj7bKXXn5whnACLu3rSdn7DUa",
  "key24": "4ixfYnqQoWH2yR36NBXToTvXRLS7eE5P29xMtBh9LLsvr2dyz1w7AcGBr9W8HPQLpYdAwR3xtRRBV3AWPDKzjYha",
  "key25": "3nKdHv6oYZYRC4UxorUzaDAXrbC9DLiPiWnRKSvn4gUP8SNNMbLvH7YjhehAqVogJ4PuTVaC8Y1GntU7XHUBPF3v",
  "key26": "3VUbHvbgd8TiR1ALfvJhLFkpBYcAzigHj3LXdq8yJmfqgqVKb72uvMUUJSEXX7DRTHaa6q3RXyH9u6mimYSyPKVU",
  "key27": "2e468XMUV22iTaxWM2eMW4kVHdcSdyScjKUzKUz7s8HhtG7zcEiwA2mfjsjiBbUbxDz1yRj43uhBXjuVD6ceC54n",
  "key28": "2keBZKqCmKvpvQk2qEEdWW7wXn8F6VEG8wZLFpCnfkDe6rfMTJKFjtacKGmg9q9pu1dvVrRYZjD7tdNoZ1Wx2JoP",
  "key29": "3WfvpsLUSYpB9NDyCJ3PxPGLahvMf9gdstW5K64doEN1UzpXVcVAoB2NpRVsShqvXanzVsY6NCVjes6qs79fx57n",
  "key30": "LDE1bCrJeBsc2wEEruPsCaozSHTJkqATX7qJf2Z8TcRwoyd8jYoxKhiSXfUE3aqABuNWmuj7XLeMvKLpE2kdckx",
  "key31": "64C8ueuy88new9n1RmtPuybRQLHSv12uMnF1qybDZjfGaJsR2F48FtgvTvkR1anknL3ssLY9WmzXmDu2UNH3r8hk",
  "key32": "3EHEcJAu7QgvEKz8aYRH59wTGPrLUsrU5WebcNPiHS3VG335SDUR2ti7GQ8RFDE1JB3QHYvM5Bs6tGW2PQPwQCts",
  "key33": "4T9S4CUpr7GBW6nwjTW863SnV1H6tcvRaA598qorq1NfyBN2g9KLzS4F3GMPwzbBZCAZFDi2LskmKzLfkT1bJ4uP",
  "key34": "2FkXDUDwcFW276Xr3K314s5iKGX7wsbJEG9uzzoAMDY3SiUAPDpvDqkZ7WUtwy4bwnh6f9r7gPjzk4GtXUtCfiuM",
  "key35": "3KrWcuy4H2QBzadVGQGroQ9vFq4Gkc54o2HYEbxYTi75KPKj9eBaAdonVPDFd6sbQ5jieWanwH3L9zGgq4KPiFT1",
  "key36": "5MD3WiRbmCGCs9tyHCADfpiSVi4Ru6C1BnWEfoZStLAv9UJygfdwqiYcAr6Ps8r2o478M4E5mGANSL4EWTFmBZ9L",
  "key37": "2isyqmCfDb66jpdQ8onMHu1SGiorCiFZ2HGhWdhQ5W6QeWvoY1CYyysWWVR4wFq6nctujK5vr7ALoQog4yMbYE3b",
  "key38": "js3LLGjjwqdmCmFAr7h3sTsVc5KDnXJSZ4nxZ4h1mvbCY4HGBVn7bXJAKvrGnaSJkUSxsc6oU8MGdyFcvzkEzi4",
  "key39": "3g6Hwan8kX7Cpq6uBf25J7c1eUSCumfYJchLjJGfafa4roMpGExL3nTh6daXuUkQxERSyCWbSNfDV1p5EqSy5xPE"
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
