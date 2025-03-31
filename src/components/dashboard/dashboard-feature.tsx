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
    "Gf7XCGeXdxyetsDemKMooS5i5XWmnuPAczRLBSXnybLCfYxQmU47xnv6JcaTDtYaKJqzr9KGgaobRUQJvzn3dPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5snkrwcRys8zgVuznzoo8ZA5G6uw3MNCzqAfYoc2E5yTDsRz4TL2Bg1vzXkxBBz1Ccc19Q65qQakXptsBm2SbYcD",
  "key1": "3fy836hC4NFA85Wve8RoPVB7T7sMmiYK9AhVMsCSwWX1AZsrVKA27tM4s5Ks93yXW58NhSaM9ZpuHymuoudhK1q6",
  "key2": "3pyUEPxvvjigDbYQR5pdjdk2AF4LzbxokyhNsiPiBFyRTsbUFnYUC8UCrEQfKDkiMXUut39iYHNQW9b2xvA7Uhuy",
  "key3": "4NSzYHFCQxwiJ7scifWcUxmE1jvpBXQ8QK7vCMoziaQmDzyfszPB453VRJmU7E4f8s7ageYtJAp3jC3dqSNrxNGz",
  "key4": "2nijPQrS8hgBySWZwkRMwHosXgnSdMTwFLKzdb1Ft5Fs67egDeSXf9iXccu41qK51BtTixdXi3tX1mAoeRVoYVRN",
  "key5": "62pRPmiNyvEsc4d9MbUsEZAZ22hSzGNyuHftsiETjsppXNEh3MfrtzPBcjbYvQRnhLCwrYmYQGsqFaxTbDMUSQvY",
  "key6": "39TxUN5xFGY1QbrbTUsD1Jxk7dntAEivb1RneDiRihsoDvaf9QC88tqv9fReN1xZKZ1R1HCVVDWeGEtq1KiZCNrr",
  "key7": "4Kp5mTwekuiuhW4ZaZofPBe19P3aZttotxUf3ka9bQJEX5R5FXQFcsmvtP8Lnc3YkaufugUgqxP6gE9GJX7HMu4z",
  "key8": "47QxiG4yfYbS5tFKbAWFcgTvfpJQJBD3E7Tide2aq17KwwV617WVYrtjfTmxjVENxd2eFN6yKPxUWKQydjr8Atge",
  "key9": "5irVF1cvYNgNVdARPVGwWRLQP3in6Q2C9g2uoMSCnpfAnUpHy5JvqRVgF5DGKRyivC8EwtBADg3vt2HGunzPHJvB",
  "key10": "5ygQoBEGc6aGA3HPp65sau64HdAxPjfiEq5cp5vWRcgVfRzxEWtNDBN4EHNjijK8hrh3JCLGYhY78B28apsg8BGF",
  "key11": "2Nq93mQXa3Y49wF1rSo1c6aFzTCmocW9YCz98NdKgAxvxJSJd8TmDKANg36hnhrjpSawH5iB6kahW1GFsvXEvEbL",
  "key12": "4E5WBHMq1rGdfTuF8wBTffnybqy3kzMZShrStayJG8CzGRAVHgoNkV7PyirEfiD2wGrFDTcZzkYz4C2SzBJZCRav",
  "key13": "4bodpgaGRXdR8R6RumXNBBq5sRKerGmHkRtQXiZy95Do3T9uxqEnmEGHL5Fy6ibKqhcy3epjpVKuhvP5Ei33ADLU",
  "key14": "2pYha4qh3RhQMcUZJWawmf6kxyH8WAY99EL2Z41sV9DPU6k3krneSMSe9SSMQjarpFJLxLbvy7Yzv4ZZYeERQZo1",
  "key15": "5Z5Gzhn6hwQRVj3uj1E2K1rEGQfPZXhSd8zhj8FbjW2VK36XjhUTD674h3DYrk9oXAvd2F6w6CLY4bZM8CF6zjr8",
  "key16": "5E9jLtLH7ozeRyQCkmXmKeJKPmBzn3pxCHrYJnd1D19rixaUdgUVdh38B6fv5CJz8ezNezL7jvZGb8e9K6moU88N",
  "key17": "47fLV4WJA6U9hFUHNenaGcRhTNAMMXuYWpTyAUUQa4NmwF5pqAVJeZ3prSiNJ8wKxNo1oRtVw4K9NVW79L4kUVC3",
  "key18": "3oKdpiYmggsp8r4WCe1SR5X6jFpZXmpBkW22r48Yb9f1HXeWvYQtXrdTHEQph9mAGMjzwUpivBhArDphXftvBK78",
  "key19": "4R6prJsqHKuMKTVXuWjexJwLLwJNmZgkpm9NCerCHFH4nwLQWjqEQY8JJ3qhJ7WM2mqAgcAGhWRMoCAAoq6UBoHD",
  "key20": "3EbYDUFf7DWjoUcih6Dh5XC8TF8SRJxWt4X9tHpGSjZP8Y9VWGVeTr4nFeskrRC2Pgm7TXTbAANtsf8gKrwX1hgV",
  "key21": "3tjuWrRSxxZ9WLDmUEnfRxVKsys5LToFk9KpeuCky2EpuxKGPXZpcETtwedYdv5o7FTySR8zK66HRr5tvbbnwpd4",
  "key22": "2xjeHk68Tp24LNdooBzUeuoj5nLVhBzJmtSmKQjGgSGgYf5FQvZ8Gh3KCkN9KDEYdPixPEZ3dpdUT8XYiFDKMub2",
  "key23": "4G8xEcKaSFgnUtpF2sfndUqZM9c9v4UngaaEjhuA9jgVnoiHR8nnnZZJJAnGaH5EAHLBqEE6FYXNwkXbu5jk2ic8",
  "key24": "4397pUrUNfUzHSbsna4VxWNX79vpPBG6T8DGn9fWU6Q54VaBtPe3KmQPaeryutMtWiCZBXZy8iXqyL8bP7FYrURH",
  "key25": "4gP5CDWHrGNoh3yj3bjHRcRxQbqvuoNGjZdVDvW47Xn9uZzotJmEASAYCFUuGnvS3Wd8EjQaFuphp7KsEDvVs9dF",
  "key26": "XPtdWYDvs5v6h1qQ3a7xXoBhr9BZd3krAP8YV9ASsa2KAUpqwH4bGfRGwdLkbt1ZLTKwDYm8EGzisogpR3JksGN",
  "key27": "4T63u1tGDigxBU1GQDybautLgpzsGp62qhi7tqHeKLbhPydN3nNWDNp1Tf6Cb258CMPxab8V9sGibTmBKm6Rpyio",
  "key28": "39EoBhGWHP3yKHiZSQLuGbuJ7A3dmujb215bZ9u9cic3hwnAeteHR2MaLV8zyqswzsPdSY4JQvZG53doREB2JPdN",
  "key29": "519TBE5uk9gp4SKSQku2hByqheapqVH57U8BM2FASQGUN79TZEwCZ9pZki3pZxCbHL2TJjTobD5jnUwyZxoZQDJf",
  "key30": "2kUMfpfmcu7S9PMvrf1eyHZWmeAayPq9A4gCBeKFFWMq7p12gVXm8h239CRibgLoJdAsbTao9C7YW872ef8nb9Lc",
  "key31": "3PewpFwqCSaADdFggPEDzZJVscjto6drHGYSBB4eFnQm92xcaYhb3cMFS1hRfbBaq82NRthz1GwWchUnLgeB9vB5",
  "key32": "64VoP7x3bBxHq1ANJBpddmGBvQVZCaZpHeZD29WTcjsThzpgCxsgaHRWwjyA7GhapiDFLKKBzqF7MeeFD9hxCFyZ",
  "key33": "tW64aBVckhWHq3cJiAFb4SfMj91mhjEh2G9NYHWcJeUNqcebJ6htYbaKpKSi2YngJNyWkPYWHYQVz5x4ogdo13t",
  "key34": "UfwyPumzeZDLzEHbYwswqwQBZMi5UQUFS3DxvDF3VZjTQqQMmh4LnPtL8FX5761DGwmvMpyHuQ4ftWNcdp1Cnzy"
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
