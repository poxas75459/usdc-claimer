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
    "5tSxw5gUT2QuCBgmsrqwDRVA9nAH6B4WmjGwBkKT8qkFqrNC1e3wvM7bhkt6dhjTsBNwvFZVGXRPzqnCVdWdA2rR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42jxWeJJcWfgkerL4aqbeQBvzPhSbyDLwCaDZMJRJjrmRNdpRGGUhtBNyVs7NGzUrTBpuTrNgHfR8js7to6iPQPf",
  "key1": "x5NKBzNZQr2HxneCr8ieKyfn1aBo2CFuDCWnmBnGLD2HNdAo1NSch7uU8RfwaZMYs77TeFqLnjoK8AQpbZLGrXS",
  "key2": "jpL59bm3JK44i3fSSjm7LRoriEGTLNpZKr56JC6V836CPJotRxfNuXT6KPn9wxkPGa8GQcKLx9LXE8wLSTK4caj",
  "key3": "2X1fJn177tmLCCAzmJavEjirikfNhAZbufQhkTMY7ipyjQuFTBewEbme7uu7kBZ3AdQKF2dc4ppzBexZcCVuUL7S",
  "key4": "5AiVcKrWGYUwmi1fjGzcBsvag2kujFhZhCU4wqf24Q3BajUvvSTrGm4qp6ecPo8WDDfmkNQVeC4zGV5LRq8gNCec",
  "key5": "59FAnuTHuhEE1KasxuLBf5dvVpJX1yAeUbqb4eqyxuLQygm7FHyj2Xo8rrYQUrvxpiWCSLBU5zbqdhmQ5sN6TiKF",
  "key6": "2Dms1n65kiy6kQqTLGdjMuTTfNXdNtJ1Bwh1o5ESR9qMSKjPSysS3Sy6Fpf5XYwy67qaMduGX5CEe6QPcu6ayPE4",
  "key7": "5tjhN2Cxc8e5341iybTfEo9tUQKNAyoapqtypf1t2nmiDTaoXaVGQN6hWP7Zdz63TKzDV6BAVP5bpmXiWFzZRzDw",
  "key8": "HTQUyB7WLzafsashxMmxFUpU6vmA6JAjsrxGiygP5WSQ69BGEN3SqA994Xd78a48d3Tz3GufDNp7QxBnX845Baf",
  "key9": "353qVDpJ1xMMMHX26YUNP3c2bvjw3XmVj84tMJ8T1soYqmX2ad8Bjih2r2DUgrjnQDVfr3XMbiDygs4hwsv8BurT",
  "key10": "59dURQArkSgLG6gskkucREoPy2M29wXzjMtM6oSjms75q9t44HW83bGG6RHeDGeEJDareknkPZdKQC1CB9yVed2p",
  "key11": "484rieq2VQL9DNoTBM4zmvAkLP2RzrMfmwUZsUXimfMgxV81ZAprLiawB8ZvpLiBm5jzH6EKyyfYCq14ZkrqXDo9",
  "key12": "5YszjE6wQQVLQWU3KQdH1FP6vXG4uTTNK1zF1zHTX2Eh9EwaLnsxAsK5vcJgXF7a2W3EzGSneqM26hCV1zs6daRe",
  "key13": "4gQLP5fX7rqoYR114g88JvadLy1SrAxSNyBvM183HBoZPndT2R9ZGFE7qAam1NdkAN557bHtoKaY8FA13QiwCJdW",
  "key14": "4nSrqbiY4xVLNiV4NWMbm6MbaN1XrGnyvFEPFJegYe94sonFE9tJfQNGs5trHbkGegSVFMH4hAwydxsx5rXo75k3",
  "key15": "2tySMYQNygf4JGQTqpiCkMbkmnW4rVojxSDcMigZFukgeh34bw2KMwfcheUKjvXTW2o4vxqSReFdsNMEgRqmGm7E",
  "key16": "4tqER7qzxG1KhFF7BhDMX7fCVsZ7pAQVnqwB1qLSCsuH11DMQrruz7WjvXgX4TV9j8jwXHMbENGb7WVyAvVs5PQZ",
  "key17": "4GqmmxAqrmDmUYFhsKABt6HUYQfKLv6zumF32uuA2h2zjR9JWD7DDF1hMBuE6wL2MXbx7Xc1tGCbtHGvuiwHS9x2",
  "key18": "5HXVx66xRihGDrdELULSYt3GXVQ77YdedUfPrr22szsq4XhAWzawjkgwaq4zwc7h7pFJTAR4BUZMZfzskxYnigMY",
  "key19": "42FxBJdVvsQbjTR628bB52BEBkYgFY9La6GxkJoSxipAW7ZaPq4JJo9GXfBfa9uDCZS8L86GEtxQi9sN6p5G3Zvj",
  "key20": "kpp4ohvSM9SnJraPvwqCMFrkcy4zaHKYocyca9U2nrxorWdSL4huDGsSMFLTNxFAUFbxbPnfPrfwsoNVuXRktUc",
  "key21": "2oKaAT6L9m4yqRUg4VgvbxaduQGJ2RBWLC75prpufWvbFx1wq6iPy26GR9dELTQDLsXcEP7zwSbK4FVfFENJNtY1",
  "key22": "WpgSbinx4qVXGNspgdk8KAPKhseMutxQYcMp78h8HuRazaYussUnqcwDGS7H9U4Es71shVsMKHS7eCBVZ6dumiQ",
  "key23": "5WgqBDzjvTaPUSoPq3i7owzReRfiEr6SMj8cVWt7qg1tTex6PgvCECpst1xUBev7Tg5tuuDYom4cNsmjtPPB5gTt",
  "key24": "3vK19KXHRNhFqoFzW1hKN7xqvdKHLh2Hc7tHgAmuz6AVD9EynKMTmuYeNZCSaAiQLJEefpDaQiMr4ypHdFbM4fHF",
  "key25": "48GNQo1fD6UH71jGCe25n1KbYTmgqANBmZryqhReoSshp72dQ32Lk62vjGYS91QfW4YqDkiafPhbvYWnwDTMGb23",
  "key26": "5D6pp5YMyL2iwVThgJXoX1FEzrsnczz1aoD2HxvthPxBDoU7Ynrd2haFMvd2yaKum2wfKXG9pnvXheiNuNTsBiwt",
  "key27": "3P7U1w9ukpGSAzxSRC3V93rUYYnG3Q2ene6GTuvbHAiLdQJE6rrS4M9LFFE24BoSMvJskpUZTA4EL8DZrYToB1J7",
  "key28": "2cDLjrj2m5jQzfUm9kVEFVKPA7WPbEiR9Zrf1ksLP6zrdetj4damAiiBEsscSg57edufxY9RVu3PhfLWLwuZ7qsV",
  "key29": "4Sh6gAM5MCvfnhBHEgvwXX1UymB6vZkSht7kepxaLRWLVrBV1r7ambuquzqBxNpyu7uHRnhZEqUi7dK6gNgZdkD",
  "key30": "2PQXYAMQ8F3u1rvSPWtva5CNM364HKKtTYN9sjsXr7b5r6s7AK1E6AKDP7teSbx14XX6crXGho6pXrL1gvy3ziT7",
  "key31": "QDae5pEmrWuQLnjQzc59qys7KRiAQBRoo4gPPh5MbaPaSM7iC8Gw9YjdQHY8TJydyh7QPgVjPaubC8e5ennNcKW",
  "key32": "3nW9TqR1fEpQBUZgRkhVwRYVtE6pZANJrJ44LLYote1NHyVksMFihiJMsjvTLfpZqy56sMrmaehBJYeinftE3TnS",
  "key33": "YRQFUKBgMRuMQmQPFCyoVCEeD4mT1ZJSKc2m18BfwMy8LP98m41qFDmB2HryeSQY8SvrKTdrKtwiMN3YKN8XzR4",
  "key34": "RAUjCM9BvQVdW4kS6Q8dKMAH5jmtXBV5WCo56w9XdvDyZWvmkAdgoNKkU4VCQkQD2Tbke1QuPSoUjKZuTp3UAXG",
  "key35": "atoSEmQvFbZ6o1grHyUQzhLSdNBg2h16c1Y4ckiqq6mEXL6L7C5o3sZZbwKJ4Jty3VxPNYVPA2gB9XGzGrj4Nzy",
  "key36": "2miAGgf6gMWovSon1BSFMv9LfuUVCVjJCxKhJ6DCFwrBeN3V8S1XahnyHPxVGMdtZKrPaCjAvqavwLUyQNb3eFth",
  "key37": "3DCzcFrJtnoVyR6f5eRWnaETMMygrNTntZ7XavFpjby1ngFfnpCoHZ8QEsJTaBPPnSRmxmyJJ7fNwQeVS2EMag6a",
  "key38": "pNcwVdkdHmrMuDNrPgEdWTQKqqv7rczGRHYTjuj7roHHdQiYzi5K67YoogKuhMJiTGscDhVQW5sVwbrhv2pXB3W",
  "key39": "3mggC7uxcNT7rYihmWC13J7DyyECvCdH9sHop74hShZUE6qDv8sj7sAajJSVh6jbYbGzSJNqK4QLGNyudnJhGQqy",
  "key40": "29oTqtv7BabT2EpxaCDvqwBAPjCWaoWimibmFW5FoyA87iyxJvoKRxSWxEzsXmVUvihHCuNnhEqzH1qspH8Qx8Rt",
  "key41": "5YkS4uMiAKDNmq4e3AXhiXdiYsJKrWz1mtbSrBpJhB5nsdkGD5iMYvPiTHB1UKU1EhbJzfQY36jGtEogf9PibmiF",
  "key42": "5SRYWW9gCpspmhhRdNA58WxwAMGSNSWU3TvCD1xSR4W9hGme2wHUmWoGjU9VknN5zcHcyhY3eEiuaX5zwQBMqp5A",
  "key43": "3LjU4bHag63SoLPUksQV6FxgHQTJwTwUVtF98aDrpeUmrjtQ8LA5iiTuS43GWj85sxScnrk9xRsCGj71GkVk1aTb",
  "key44": "cvcsPkEJxEhJfgPGs5Nk3Qjb8NHFEXQ2B5SUs1ZmSr8Q9up99xidkBAr6JvPTbAtfiraphfViziNvzypKaGNUFX",
  "key45": "4oNYWHeg7MktCpCzcv9sNZ6MkXW8UmN2MDumH2dF13WeRmiwzVihiWtfKVF8niFLnZD1DAsRufqRmJAaifarqbbk",
  "key46": "5EahyfbVFSCZjKsdnUDQb32pq8KTYgtNkaAnWUVwtdq5NoW3xZfNe4hcnxhdMpPvh9HpGGoPfVte3uQqDpFy9FRU",
  "key47": "3sNx1riocpdi5hQLVq4tdjpxXMqqS6ps8atN9EimSE3GvVhKXFnWUopVBCCL1XH1qh7imQ6BRTBgyP4gu5kPnwxv",
  "key48": "3fVkinDLdsnAGkMtW5ZzgUhX4ux3Kf98HvMBDt77gHZeV2UG8zLZPJ9beR8qy6ifaAq6QEyiyV3cCWU6PLrDHXSw"
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
