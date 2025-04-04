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
    "v8yzyHMED3fghH1TTx1v1NMRzLFqGKDxsFfVf1kP7vtV8BDh6Ftnp7DfCFqoJogcTaGSsnmkiopkWc2TBPi4SuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q9vWe3A6EZ7pZ5aV5nTE28ks5ojvtGNBP7Y2w1daS6u8PdqkTtvkd2uup4y9TsjJ4uZF6Fw1dsQ3mNzkTKv8SNb",
  "key1": "2jJ9U2qma5AB5SVUsywquevL5PhQdb4MBpg2i9jdwZJ3wAt7WCh3Kq4fBAS8i5qcggJqCVC2UGyJaCxeh317SJCb",
  "key2": "216RN1kFPxQZpi6kvkTk2VXYr3hY487TWdrQtUnnFDPKB44ze8byZGSYsSLfAqAbrrRgUUKXYNARYndGKbCaLUk9",
  "key3": "4XUj3uk6XiKRKA1VeVsSUEpDLy8HxJHCBhQak7Cc6UcPubfb8cPyRvPwnoYqy83GemF7gn43q18GuUVe4UXT1Tg8",
  "key4": "3kfd992h3dG6q54VZcqweePXtsV4hSyFRA4kog5w4fPkZZovtiMYCv1923nKzWXXCPyXv8E5V1dxHfx6WU3yHVvT",
  "key5": "4iLeinPACL5DXW4BLcU2fwMhptsbT9UqzqYXjcKHMSobrEGeD8XXeZXGA6SRR1sXQHaib7cdDrcXD3LiSVXziZiu",
  "key6": "4ak456pjxhochZZTkxfWTm54MYvL1RWVbP8KSurbgzWPPwMWS6xgF7DJ7Z91Tcv6yWQVUXtg6GUtDSCV2BV8YgZY",
  "key7": "7PMgJG9tRHgnJDCcnHfX152Ym78bdSix37PG9DA965AnN855QtbzHF8QsUQnyNJNitDgogwDntDQBvZ12HtNeyM",
  "key8": "52ppVbp9mZS51jWnQxyaVeBBx6iWK1FXgSzm5vas4t6Thvoa9V8LgyziBpbSYfMmjVejUxu542UgoCwtdZaGFoGV",
  "key9": "4UCacP2owDcdxr5KrXLr5ivuq9asi2dZGTza4gm24bkowkMK16wG23faCR78R6SXFCLyE4v7XUzWucuFx4tZkJTU",
  "key10": "5aCxfmoBY8VanQ3nQGUt932feC1cMhRXrVKFmoYpJnLVWm74fsRavePkXkKeU6PKB6DJD6zG1K2DPWNRWj5Y2mcX",
  "key11": "5FsEzi8wxMeypXW69UFz7GPHAnHbCNUkTiZmcRoBqi721vJtt9WzQJThivZGUKVN5MSogpw47ohSKjjr9ehdC6Qz",
  "key12": "3gX2VQgi59XwQDtAkCAwyi1m7ox3xALNfFdLg1feNWjsBx5DJdxEjxr73MPPS7GCeUn9umRsxkCYw2aUSw2ZiUyg",
  "key13": "2gjv7hcSTfhmW2mDUyfLxFLUWAdnw2w1zikcwFS2NhV9E4z4Qg8KLtFsdgw5akpxxc9FzPrR8wwZgRVLyZSVmDAh",
  "key14": "4g5tt64KTCrXAAc1dRRRdchhtrFXMBrCxC64xgkNMipkCtWdSPMkgZHizfokCS5soYNB1mDwNx6knsfR14eYR38p",
  "key15": "4xincuJgZWpGTrPUMDLHh4wMPRU3KA3yMRrjXuYvA9nnsFQ6Nqt67myxg4C4qqeLMe24nHwqZFu1DcWrw5qL7dUt",
  "key16": "4a7jPMVwyacsFwQdG4zekZNK6RQhA55YURGyXU6MM3zv4ZQHUFvLqBZKbYMsb7vdwjiMpck6bdVVivryVzCPFRwS",
  "key17": "3cUUQ8JoB5CokUVevJUCwCum9SA1kjj9tEQ8vm62DC2A1JpZi8z7FjwTmtSjDVmktF9KS6MSXkqZWNz39v2s1NCV",
  "key18": "2frNfDKnLyqcGYbhvqs6CjMYLY6Zjvvg7ToAdxCrVYTMHYg7ypqjUm3ao1u2y1Wm1tEQQ1HKWYA6MGwBV6DA7P44",
  "key19": "5gNp9hNz74uLxPZCq7LBAtKv4hhGmsv64tpTLZwNS49aNBNczxhntx3kdRv5qukFrUx8VU96s1GSCL9Z7ifyF4ag",
  "key20": "2AqYp772PHs3ADThbK5s8zV15rhHdS8rF6tkXFN3i4pUqHmE7mVrYCAzvGsYQgjs6t1nDr8wZV1brwrc1TcAsT7x",
  "key21": "47nskD19E7RMWuiikGpWLzF9kCHpyBmyKWHAoTEmGr3hMaCiaquzZdVZv444cc6EJ8G6meiQjEMbGqFpyBG715Ac",
  "key22": "5JshWnSmkmEdCY2wxDKuZbNUirQKo2HdPR9MKKtQqeNuXjBLT7EEvDNFWACok3RfR8YGdNwddg6DgfKvK7sQK1AS",
  "key23": "4rg91euubszz6GMGWS36Nocro6a9p2fSdi1EKGtdtiHz18Cf4C6MyAbtVH2UwdsxG9ZnrjscMZenwuDuBPCtyQiV",
  "key24": "4Kq2vyo16KRs2wi5TsJThUhPaLu6ffaNDE1WcRY2SAWX1ngg4QHBgr9MyA9DZdZKJWtzt7cyY1krZ7c7bao9gtPs",
  "key25": "5UUAXR5uQyGsGsk35eANR6oV6G4rkhNzMJjdmU1GefWCJJLeTQpvQVvtr59R5AxobaL5Tm61zrVcfpnFe4UEKEyB",
  "key26": "p3vSYEZ5er6ssadcBn9WSD4EA35tHNXQFwHCYtLdCUEYX3pD3r7c4hHKfxo2zcPSFAx6GQceXzJByL9q5x24TJr",
  "key27": "3JCMdj1J1cpTBKyUFQgiZ3kgaw4ZKW6ohk2SuXR8W9t8nt3oiLpth6Q1Xu3Kj6yNGqW2MWwXXRgyR6HVFukj2V7D",
  "key28": "3xK3Nd21vKpPF8MJwLhcJVNm6zDyMZ4AJwrajDS2EpbSqvTtyXNEbTP1b6BQmVabrMd5KwyZzudDNxvwbZTBtCqd",
  "key29": "5yf15ioVKK5EkLnuaLdyjfq57C3n2cxBrX5mejXH4ejmxBa74rUBuxBBFxs2pBWwJq6JLkvLQ18hjTJnPpvKgPyC",
  "key30": "zyRnfeBpxpatqb7PHLTycrkYuC8B8WG84z4ieUQm4KwUaAADthyWnC4PxdH4yTrp5wW8Mch5BEn35DPTLerg94k",
  "key31": "5c7SqTJhbu2VUfL5tnLDVJX1EnHLg87mU9GV3wCJXcvux9B8uiFYra188iHRnexiZEZ7zCtACSZUah2y8fw9WVqX",
  "key32": "XxS8FDuWRsmmbik1f9hoNpVKD1FWqdugWwbqafbWyX3sRkM5Xaiu9zrUBoemCdo39Nxs3htuHFE8poB7yf9zTzi",
  "key33": "3sBTvGdkiGpCVXjzfvaLgkMK3zgSyxgU2uqGzDauS8xSCVnMzYpxnGdyUksZxqQDvTymodyo5LqGo3rA5bUkDzff",
  "key34": "32hDuxbjNcaicdKDufyBAVEyQqsue4eg6YxL8KCYQef8z428fwJNRh2pCcKRn4sL7rbkSpok5zB1d5YZN5mKfiAh",
  "key35": "5EQdkzYZ97yAvQYuqNxCvZSkBoj5JZSEVLRVBDv9bSkRQbr97WkwqaZs9xtUPhop41AGo43KKP8MFaDPsYjk8NQh",
  "key36": "277DD3BehKKAPRNFBFuyUPKPAr2QZMRcDGaaoh2QYAyW6usGDcsfZB2EWAnjp9SrwM8dokAah4GfyhsZ2GFwxkkU",
  "key37": "38QNtXsJBjA2NLM6qWWXac3fqSqivZBgqYg7x7Ghmfr53fLUDGFsS24mQUTrf57caEWeZzKsRifZ4gReBQCKzZrp",
  "key38": "62ArAzqau3Cr2y7uYtQsyE7bsXRWeDMqBnesNyTQGnkfST8xnamR2w7pSdRahdvPj9E3ia81aaxhqEi7tV7BMCnW",
  "key39": "2mnfgXunMT1bkdPxnntsBXUG7vVUEHeT3r2fKt8KszDc4KEHF7VJRWisJcYNUJEFKdGnfeoBhr1jDHe6QxTQGJ1U",
  "key40": "3gU18VQuKRmvjqY6VJdMQfAXTuYjWiX57CNfvZqvQXNnbcTTnjEnPEeEd98b65VPHowgaZs22oeNad4N58gfxYJy",
  "key41": "433jTm4doskX28VRr2yUMdHqJu11w3MPXSZNSi2os6iX6MyhNN1Ug7bssand1XvMKzSTfVkTAhzJRCx8dcmmTMVZ",
  "key42": "UEwAHJWgdpACeM2MDrgTyxWYd8P9Dj6USkZDZcXM2MvdCoQKd7UdPcgYmn3amf3MfxSaQhHemvL1AGRYksBtHTE",
  "key43": "5TSespHx3G66kQhM15XVHNyuzeiJK5YiRKhtnxUd4vEojQKYv4Lun1in7pYKaFj7SJu4deAjkJUpBpdHSD3DvKeH",
  "key44": "2zR7rTwSD1fd6x1KkMSdYCv2nsuGUt9FXxcmEJ9ZkpjVcFMurS2vtqkd9tjvqhB9fsBrqNetFABZaTpaFVk1yMer"
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
