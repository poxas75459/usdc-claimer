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
    "fkTe381Vdmjjsr6fQxLY7N89dKeGL9bwCto2qf66WRMXj2DszEiiJfWpMbznQSqg3dXXiH6eFDogc8VNS9tRxPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "617a1nXm7T9yyDqB6V74biTRXkY5FKG5MD8uBN7jGwsaAMbZ5a9eRqr6CUbo4fcUsYgV9fd4K1JAyo778izurtXK",
  "key1": "5zhn3gpxtgEr1ar5qa4sxSZzJb7zqJTDPVo8bMyFpDc7exdrHvteyTsAGaKKJZpGbjtaiMB626GJesSje9smgsjq",
  "key2": "4vbNQtTAXM8F3BxCpyNEqrtY97ReNLx81jHbGbYVzaSHconVqwSwiWvgaRLVJbwqroc99wYnS5wVfgWJyoSo67Ly",
  "key3": "4kdc8FV3BpU9cd6be3JGw9959gcr7hqAp496EykbM75bujkrhNLZrn6Lp7KF99Ach2HnEx3rQMUbeURUCT8Qrc6L",
  "key4": "4LvmfuUCeHsD3QZsw7NfCqHuMBDVg6bhpRsemei2Uae5yxrmiqjeuJqttH77vhqXkfwtGW1DyXvGc4bomscmLnrA",
  "key5": "2ChN64H8PPfJh7GV39MY8bXxJ3TtfRNRWCGJpSiSLzQKHPKmZfgotnD83tHD8W3RNXDQ6A8wmECBUDKWgVxfhX36",
  "key6": "4Fk73xkLdUBJBJpJj85vHA6ZnUUFVucxcQinGXrgkRCtjPnAuWExTzqmvAAkRuJwvzJ3A8KMZ7gYjGiP4wTsZveD",
  "key7": "4HuNTMpkgNLrqbGwNZrc2dBktJFcQ8Xy7yBTaRwN5mNHo53cp1KMPpPoZHB3RPC4pe2QgZcV3SWszDCNT4ysL2jH",
  "key8": "37iCAbsQJfvMWQgUBWb5QNc1YwaoYfYe9sYV6nzzNHV1ApxBW1YCdjKL3vfn4WScfHiVRMp4BkY5oh7R9WUbymG7",
  "key9": "JZwFobtxn7EKpWvogUDcCMKAj9cZbeQoqWgUUx4AjAhSzAFQ2GxQeswy5X3z2b46MKEykGkBi5QqJoLpLByLzvc",
  "key10": "2Ww8urP5C6Ua6UcUEKqwp6vPtahqiUzVX4W86rXNo93Np3xfVafN9hg7SPuzDPjUeiuTuK4zjafsoHZEaTrs6PfC",
  "key11": "4U3a9VSx461yF7X4H4UnWruADZWfzcutagZp9h1nSphUu7RtHhYcuYaiNDVTGMyLKBV5jTDaKMXkcabmyMgYedF4",
  "key12": "3Gv6FmrRV8U42ZXk6EMzBmsuimFgdDxcFrCmhCtaijthaR8DEZkAW6PhgUXV3omgHixrMW1NTekVJb2nYB1wQktQ",
  "key13": "2RwwqYTRMPMap88EsVaWxPeBfHKd34vZGXmrALQR8nqo2VTWezhdnA4ENFMdXTyabe82KrzZnJ45spmHYnAAFDFC",
  "key14": "4dJtwAXHyWr4xB2Mqs9CvqPWbhXGNdh1mTwyuCA3uwckaQrrGjpsaAeH9jQgkJ2QkXjUBL5rSRqPD5WMfgWRJuRc",
  "key15": "3oeMWJyY8RLQkwCGrmvemo7Sc6wEMKNCVJykQKDiSxAwH1Z2d98quVt1QwX8Yxy6dZncuvYJGCzb9e19jmuSFFgx",
  "key16": "2Yyj9viVKHUJ6Sa2ZXLf628KvyAqQKNy4ZeBhjneWWVEkCXBsMn8XVMqhRditjPLbvTznGBp3c8588tYh7bmSnM8",
  "key17": "3NseWZpmu8wauQ1E661fLpkHUWC6VhNhnMsoZF16tBuHvV62HYdBjSAcJL954qmxsoxDvWhWUXvfM55mnBDnUXN9",
  "key18": "3QqtXshvHXFep1XmdQswYfgAC5w2XRvsvDTbRffNac1rMNofCQJJLnNiEZrSRYfhyZxktUGfonHRw7KFQYDY9XbS",
  "key19": "vYWy3quhEtKAvU1eMYHhatV4FqCdRGFdDd16kTf4e2GAySEoKgoMpk6gSzRbLENKWnBe3HkS1iiepdp8cAUzmkj",
  "key20": "3rrds2egGhPpkrMHfj8T4MgrZNMRwMT4D4R8SsvwtizrHj9Yfq8xY4GSykqWwip3zHxQqcqwkaN39Kyg2qcjXgBE",
  "key21": "2w3fAxXGiLZ7juRwMpyi1fZBfxUxD2j7podUt1X5YJdqVTKwDXUL9mSubHEmfWfaahT4yf17fs1owxhwoUikbJbQ",
  "key22": "2xiBKx3rjK7fJZpcVtRLt59ugu6eVQsFcgn68iLGFnkpYEZ459eF11hRYE4yLxsWhvLkQmDBqsGphKsEqT9cxfWi",
  "key23": "3WFASE5mrAunWn1GNjmLAxui4TRM7wfXjuLqq9LkXoJzCYHhTcz6bLuJmFXgE9Kmu4JDwfowpaz6mGM4B2PDE3Hf",
  "key24": "5PoGJJMmwFrJZeYMaNTcGYGxAA2jYaDJxneuuD73Ve87ybe63sF4W71DViSxkc5ZpKzsCMg2PST4M14FfTDRmXeC",
  "key25": "5qJNBoJifz1reetYqArT4KjVXMJWhfSip3asiLwoLcBsiMFGPbFy3USo7U7CisoMKkErmUVH9LtH4JZ7A7jxLGq6",
  "key26": "2naARr3pQUqQwEE8MuztnLGXoUfgP5ibuw5mK5x4ot6PxExaabLJpQU1Kfikj5pSQ6xriUuTJbL8LqbyY23hcd5t",
  "key27": "CEUiQdrhXWrMvrkon9hACG8DYD1VVziP88RMm3Twu1yKtndjyZwmj7V1qRhSseaXCCqYFvby9qngeH5Z1vtwZN4",
  "key28": "43khk1oAb3cLvGdh4kaT3JHtxnCshwcU5J5y2BAs2PmDMwa6bVDjhEufCo8jabDwk4ZqMwib9E4riRYzJKbgphCa",
  "key29": "57Zx6cEkQpLnvzrReTmcexH7zsZpsZHUg6P3xFWRizBVn1qUU6qEAVkZoJVbHMKaHXyv2SpfpN96hsfk49xm8kzV",
  "key30": "3FdBdkrLF8E7As37r2JXAJYMzRsRNuLawmTrcmPmKLdCfjXsMVXNUXVB7GcNFuyZmp2t4H1vTpeCukrWS9DjpNei",
  "key31": "4a3CeSBLVYiHkb4iJ9NubGEyhBy9dspd4bLFrR6e7nfGpG762YGbGcpKTWMniUrMPwNcaD6KtpbEx5xLJCjC7d4L",
  "key32": "3n5quJ7WA6WvG5KtkJnJDG6Tja1iNNS8QFVP6dSvNtn1nuYikUSDeRUFDAitcJWdjnz5vigTm1y93GNMuuFuaNqX",
  "key33": "4gEY4BfWqVQHBayDt4UBLbEehkowtFevsutjeMV58y8hb1bD9vkkX4EB1NzWjvRyz9gafQhix4UQRUsJ5nfYBcfq",
  "key34": "4rhvP1XU72y2cqbAVcaHthMFQH48oifP4ed3q7sYFYyGNViUFwJsxF1wdVoLxa1LBMzosJZvHftE8yfxptJBXdKu"
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
