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
    "5JPLqGwNm9K7nYmDTZKnBnude9yKBV2UzFooQQnQtgyxUnRdpYjk1WSQ32zNadqE1iPNXL6mQBBq2Fg1HyrLpAzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKr6crbMbBKcQ6azwdda53chsZB4oEktJkace5su3EfxwFaYdCpJ5tkCo4AZ5TSG4oAZw2iLkVg7sYftVY3P4jq",
  "key1": "njZmrLx8wfTi9AZbivHcRdfgWf1NwEPPmSHcSj7CPceto66mS4Rv6N7WpsW2moMpxJeqWxornT3MK7BCTvbNJiW",
  "key2": "53aGoeMNAoNdTFM9zzbXt79pUL4euad9exz1puugK2C6bFnnacWjMUcaG9MsxP53bkTPMwdRWMaTXMF3xoR9rP2R",
  "key3": "3ScJZV9x44D4FvKCnh9Md8LHojdbzQZJ5BRhzU5jSNSSj18FbscnjhQhDiomWDwXahhZzVg543nH4WypAyhvRLEN",
  "key4": "2SoYFf1yXicbU4Q9h1C6NoKYPGPQgj2xbPMeCQxgLvMNd4h1wPuJ59vkMCBcdx9ZJuEPYzM5rPpZ3QiSH8xLFSxz",
  "key5": "p1kwsBy24nUR2SdxBPhS99jFKSUisS2D7dDYaWerghJAPKgL3H5B84iRQiLqtWPhmDwAzFeBd74KdY4XFHj1TKJ",
  "key6": "5UmVr1S2ZKfNYtguEW2ttGqoEiNpgoenygxAUSMni5QumJ4q6L7NV21n17g73aJ7L7DNaAkfsTFXiAiV7T7Rene",
  "key7": "4Fx3jE9NkvfongGHCBtLxWpukJ5bMnYkCt26oaLefdX4CBQ2412P7a78avY4eE8B4PkvoGfXY2jx2iGtm5QCMFyX",
  "key8": "31CKtHUTXiUrtFyPcn8niYmr1hHQjq1pAYFp1kK6d9mxNgGF2cM1wKYNzuy2GmGMMby9jzJdRXh7bi8aCrcsWzna",
  "key9": "4DA5yHd5BC7ngQkgkS41MPtYiiaSB9dQqv8euvzFipfZ2gKcEy71k2Tr6hXYn3YCTE3U9YGZHqQz78g8gj3xdwsu",
  "key10": "31xzUM8pqGUSh1hvy4bi8vVsSVd6sKPfhHyjam7hPQbjBUabrFszPoEVDWj4GTacGAvSVRU2r3b3XKK2Lhbjb93m",
  "key11": "44UQTLkux3vxwn6q7zt9cZUHocedQivkxzSc5T3ATWFr521Vi4RvwzhVN1iJbd3AhokDk8F1aRWzVG5qd2Qb5vLi",
  "key12": "4sF7Ncg58F3Jswe2xChtwjbqcwmYJArqWTVT8WZx63wfucpKk5s87ZaCLtR1LFtiENdd9FYNRSipRcfoFQBcKv5a",
  "key13": "2833Ksui8kRhJqRc3Tzg1qPRn1f1nKaZ1MbhFr2aVA3nLYu1NpcvfGf4NEhbDW3syiUQJrmqQvFcMbjyS1mMHYCF",
  "key14": "5VdFo83yaVjPZL6fmJHrPcaiFnuZs6zWqxaLL5eqEqa4UZspSp55Xw5gbQwxtU4iyPzTu4gzy6ApxcpBXnmz9137",
  "key15": "35bnCE9i5oHEdBe4FRTVMoj64rbWEnc9meW8aezym2eDmegsBnEkWz8argmVhJxbdZrz9RuPfbLoMik2bjsXCh1V",
  "key16": "3MXCaVyckRdb6kRs5U1gNi1EiJWHJN7o85ksb7hfFxfkz9EYwQqdgnAuGFpXPqTasimZfAz8giJjbnUgcKD2x799",
  "key17": "5XPhkLJM3J4TzCYaQt5AGMbZ2BYXSc2E5BTYWkA7QGtXzZkJBaJRRPHPagFMDMTd1ss11XsbtPc3qDKRSYWhnzU2",
  "key18": "5WoqGxC8PpExRE3pXVamBDQXD9ktoL3PKd5Uxh77uSDofWTpZaVZyEHf1mEypkp8uDirfEGHZPECDd8eVpuUXyKj",
  "key19": "4SMypCUFKwNDA4Bg49CaGVAQes5qw91Aw2wSR18d64miKJZyso5hawY4aBCAxvx527cYvJM4V16otH7UpofiZurM",
  "key20": "3xWp1pb4F4u5Dv5wU9wKvq9t36NTiASLha4CABzivwYxgDgmZUWSedXSdXwM2ru13dHr6Sno5kS8Y9nxMJBDP4uR",
  "key21": "27o9EB3wGzer5U8QL9C1s186cfz45mPtgVsy4zeGYtGwNto494TS1ixmiH6kEMaT5sKUzwuYZqA3zVxn8gamSfnw",
  "key22": "4isBeGhxb7zx2XD16YBDAvCdjsDxsEznLYqxihMoGWjN8pTDMY3yiTY9A9Aw11x453cG7obiM6dWNA7gnar7tjvL",
  "key23": "BmPe1SURJktjcjZ7s8pJh1Cn5VZ7HLRvcwpSiFmtoqrrB8tB1r8AP79L6vmvPVHZQSZA1CeAQw7576xqu9qp63p",
  "key24": "4e9FsXNthZRBo83J4ANspvF6aSHLDA5Kq5NFW6Dds2qwA6VTcrw24m9cJpDwBzHrQsMi5LJT2Q4VPDNwW2LFYgd4",
  "key25": "4W4KqPDsDkHvRzc8SRbHdty3GYZMQSX5kKDAaxJj1rik7W7XopzSZ3JZJv5SAebu9FoiRb44sB1MeTGyvD9SEdic",
  "key26": "298dSPNLWdcgsZZ1ESGa236iZNSKcEAuYP9spvjxiwFKq13KujQNfU3gUXV1cUy41DdWCZwtZLwzNA4NhbHVSCnG",
  "key27": "4pJyS1ZwkA4Q19zu728wTff4bewTZTM3CkcDGXFsRGYqHDyQbvkX29yE2vs5uzCc5Yo1bwHHWQS4muNQmpoD5tEs",
  "key28": "GEak7MymQf1VPZCMi6FDYqiLh6CeEoYFqhD3fJce3NzQU3gatR5KBbVzMgC72dqhVz1aTBCtVAWEDePyE6Htd9W",
  "key29": "4dP88STtR6RWexUZ5siRUN9mX9Q5iHiKGiNWofHELUdTUwSpapjEBL1hi4bCvFiQ2sMdG34qgichEUpPYNVUvRDd",
  "key30": "5iFY9WmHS6CUYMb9ezJbFfL1kJw417B3Go8GakkEyZ2eVLco1r3UrC2BxtCmwYMvazPW3CUzuvJDuehPAiotStft",
  "key31": "4V74jv9DT2YQmfRtmgxXPa1zsUDjJ6yi33tEa29pZDTFVVUEYMxwDmRe6TJUnws8BR4E1NHLaW49L6tzwT28RPRf",
  "key32": "3CCzazDETAa8vipU4CyFmE3EtSZNeqT1yTxmDupPhLNxceesvcRw27oxhKbEJseK5FKxEPNqfy7FudCaw1LFSRy8",
  "key33": "64Pxczc5Sz9yQDGoLkMUFGj9UpFYko67oHyHitMWjRr5rA6eEKZ7ZhAegyESnb3Sx24CGssc5GMjWZfBw7PnJ75w",
  "key34": "3MMT8YEUpcTWxcnPCW56C5kavuW33PzJmXjmcHsvfGERoTx3mnxTEg9DPb7SdpMfu3rZDhtFDKrwvycan3c7kvPM",
  "key35": "VuTSeBwhwssA5X9rhhJNXxB3gbrG8cWHM2TFuf9G3dMTrsnsdCBSDp2EiAUsxg3pxLrKFCwzZzivNTkuNqf9Fo4",
  "key36": "5b6a7zHtKf1F6MYPXXBui6MXmEFKEY2enTRwfu7pNjTLkHWFmmmbNXGYMKkH71AHeo7TnwXHGMS7VVicnwpjidmp",
  "key37": "YH5wj5gbMp79yaVGTQzdLyZXwmPh7Y45erSpittCbc9hghjuK8GQJ7Kcw7YkGiY4VyYnhz6hysRZJUxUzghmdDa",
  "key38": "vT9YU3W4Abge6YH7CrrdujBYZMHffzuDEs2SGmVHoGCqZjs6YCVa4G1m3bZ8DDJiwCUCpKKeQxnTtywTNNnBj71",
  "key39": "2w5qAAXBTEuQnwbhWkGwqX171VHnY55h3eUtdCiebo1FPrxnbv6zfcThqqSgArxJSPir1JkpMxJcB6cDCc15C8ks",
  "key40": "5Rks8nQNu2fz4DUi99J3hBbMgs2thgaPAhdNir6GJRcyTzRk5YXTCyaHNHi5Eg8z45zbEQycvwZJb1FBmMd2rdpZ",
  "key41": "Cz3T1mf8hCE7S8iuX4pnJSZvbv3XC7JxL3C5eGimwx1nEZkuupwAAK5McNvmZJwR7v39e6LUfCQ1YygSnF3PJcK",
  "key42": "4HQW72dqFauMZXNhDSnCDuKuZRt7Ebd5tTnXmBYCoXoKW3DrN1an1G2qYHajcRxk4ort8Y5LV6APB78y5szaQx4Q",
  "key43": "VLxMdQoRZPaDccB9bjrv58ueepWHGNjTkSN3FzexEHupg7FPdJY7ioe3dx6SdA7E7Ewcnc9wD2SbHarbPtG8Bi6"
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
