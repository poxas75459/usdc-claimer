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
    "3jymTbyQWQLhzqSLa3DLsBKWpLzerxrsDHPAdsgyDGDVenj8uddrHfCrFRz8zsQxsThLda4VGugVL5mWigdc8z4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BeWyzgPQLWA79PZ1j1X1bdjgGxLy9gYa2QJhfz3Sj5GtPGRobohzjWes7sLH6ib65QMtfCDTz3U4rHECgzvwKjJ",
  "key1": "5CWvgKb2zLPv9KTXDEoryovVDn1C2JaNRfxsGUSqf8HANJZw3o9WSWV8nDb2smCLwy5KCZzrh16ZAm7WDwKsxtX",
  "key2": "3cDDBEUtpgM3pgsfzkdKRe5HSfXiNxLtySp3DhZQCJdreq8MJpDtdGZ2X8i8eTyuNrweX42TaeEqgu18igsCMmrf",
  "key3": "46oSVub7jaNCCiKLBugcrUUTkm8de5d93c4K9hmro99wmpaLnMJ19PjrgGVqFsJLEa5hA1qsCBsNrrYFy1DuK1x4",
  "key4": "24VLhJVtNvPpDBLEj6Wv2FN9ahKyeYx2Z6x7jma8hczkPhJoPyHCFoeR7hnXcKQnse51Y3awZc4gjKVDywCaQyf4",
  "key5": "4v5sgvXBERous2U5tES35z1gXaYurznTuUaQHcKhe3rbocc8VJF8EVzmR8Qhn15sX4UxKnFhxEyNtsRJkSmRb3PD",
  "key6": "2dwTFZGHsR2McMyPhkcSVVpk678Xfq978ZzhRLZw9apvvaKoMv4FgEwEdMRHuonctff56qXrVhRLfpa1BXNR8ayy",
  "key7": "eyQAxw2wrbHnHPABBMawZipDFFevBNTGR4pJdGcsnan2mtKC8BeaxMu24r1qrxXZe3T3sP7Udq8GHKCes2fcwCx",
  "key8": "4ycb6s539X6v6H4eAtNGFpCMVUmnDBE3uLZm1vhjDnPKoNqkoXPVkqkDbFYhwnWhmj5xD1oa3WVvSpLY24xSoE4e",
  "key9": "ZSZACUBKNqWbV4w2M8oJFG6ZvgsSaeuewAbrTHi1zHeXR6MTVewL76PbJmL2CWaY4KF21FJpEyGu5aT2ErSUH5c",
  "key10": "3ukDbjzUdA2vNsdTtBieXunWe2JURbJ4mPh6CaSc3dkF6kogi6HzEQZBUksiDSjtRPYJJXwq249J21yH5d5Z9y5V",
  "key11": "Frzh6VW46BBpeEwd3q6BuRc859ubtYhRXqLWCPMsM4KTqTGmrk7MQziTVzZjgHR1pedMERbcHkd7ANGd515yfbn",
  "key12": "2BLbMVozJHFwubGi1iA1iGoXg2KGr1p1LvAzt9QxaGpZiFgcJrJA56HHBofkzzmYGjBV7Suec1rUk3eAf5Sy9aCq",
  "key13": "2KM19k7QgBLiPvfhZDxGBrcgLJuUjx6HrgRiHcQEdA2H3fysUdrfX778dpS2ZWpsHgrwhTBPBDpqJeEUFwTohoa7",
  "key14": "5osNtcJgYkF2t8JLLYyjPhUDVSj5zyUV9rT5crL7yWoHnod9YVQhVtqH86FEpNr93H61sGSVGwHYYPvRr2as8t66",
  "key15": "5LPdCrm89UZvWVpbYLyS8morEhPmyimKuESbpyr1wQNT4F5zYwxU3LvCpzYoMKzCca2zFkMPzfdmmvCU7uNqd55U",
  "key16": "2hWAgLdieneuWbyTaxmDfq3W8KyDrxA5dSGpy4iCr8Zfz2iGxrMo4k8GJWvPpUP87eks4jzb8VvfGQ79jYkNzMEk",
  "key17": "2bf5yR6BSnic1rCEangJei2C3DiiwpXgLNzkcvZd8YFMy8Wbr7bE3tvt56Jw54uvyUXQxmFqNustAyi9JzmVnyuK",
  "key18": "5fFN62HnKCUFic9xkLwkyCCZ16YAC9BuvVEXvgQwBqPZQvbyQfWdhjqtPav9Dy7XcCyHcXVMPmCZnc2JobF6t9FE",
  "key19": "HSoQA9LBkpFLYemEUYStTdWLVB2UabAhChh3QP5vbXST5Zc3VSsAXsGoh8Vy9XBKhGBEGVh7PAA1kfavV2pmEbw",
  "key20": "4uauTWGCNKsY81acjBUu892sDMRdfvZ99spcMW3fQ4QdE8KZ3FDid34ksHdx5FaSVXvumRhwb3LuqHN5G31mfk8M",
  "key21": "UDvEnAXTF7386iNSMpAXB4EsNmYLPrjiWPP2Jxg2KP9TYKAWPh3A7WAzz9HkyGHEsBdXtooWtAWChZoja3MXqv4",
  "key22": "3MWoagQkDL3bF2nzaJ75mwYYH71fqLaahQJjXNZBP2eRBK3g4pgvMd7xxgJdKqHS6ozqrVADtiervPATNjdd4SM8",
  "key23": "4YCeQ6ePcZN2xmpadQELZwEoroeZNDXYMk1bACvd9haYegJ66F6aXD2EPAgc4enuenv2kQfoQYksudHhwngzHsgj",
  "key24": "2GDKJChgYjFvKV794o2cgYVYxWSqSMZ1Wh1LCtAFcWFNEsUQE1m26zvuNKKFuyqiNGWtgsqRtCVgmuMZJmH2nNQF",
  "key25": "58Lxag1ZwbGD7eszdQWQ3jWTqoin1JTCTievEWgX5aaVGR44D92xy2xX6PwGbyHhf3KsVmswK1oHMbY4DRxnYoVY",
  "key26": "ZgYPoowgfCVV4yXH8sybUhArDutYR77GQCE7bhykzwS2cATFoCjfvpqKwAJnNQVZpKpDxUaXCADhzNRdfjBv6Hk",
  "key27": "5XoLUgXPgRXmgYt1af42GJp3EkxBimt6nBWFFBTBq1eHLTQ6wqBmFdB5ckdUFLJnyhaJoRJhLcbQAX1a2FQEfKH5",
  "key28": "2pCvNVbdHcvs7wu9tvdu7Se4yPoRFyMUoXL4PrcASHBqAixDvD3Ntx5qEBMSHYcKNWFzPrCkKxuKfoimsw4vFN2t",
  "key29": "3kNNrr46CiCz2h6ApjPzsYzjq7Sn1DcmASZZD13gq1RUNdxKr8N6gNE5M5sVPrz7hu98VhQpd4Xm2nQheJHYT5RR",
  "key30": "H7rcYajYMigmEwp6uL7tyCJqN4gfYY1xRpqC7zL4Vhvihct34UsW7Ex1RZ3uGYDS2m3RBV6TrbE3c1CKgBdyjQh",
  "key31": "2U7WgBfhyAogi2dq8CaLKFxYjNgpwegxM2vGMhsbPaje57ixKtzFqMaygjbtpj8xydTjaU5rJ13zTG535SbwJxEe",
  "key32": "4MHCAqHe69iK1Kfji7PM24azAsqydxjx7J7vUEwyDyLbGFKh2N8g5qFf2cZxz98eDtijpmNsFVC9gLnmG6WuqeYf",
  "key33": "fHb6Xn3fNvXvhgFSjPimMiWd9vbQXge6dWrKZAt4Yh5tjqYijCXMad5eZsugnzRbXdE2fcA3K7VsaoV1FV4AELL",
  "key34": "FebdSDbRZX7vJKDjpHERb1oHBya2C8Fn2cEnMKaDVatXDvvjeAGbrjVj72sQZtVRnbFkPp2uTUt8TFsk17hdw5c",
  "key35": "SEfSxD1LNuzzmTUG55QNCHi2uLMjbQ4akAuWLxywLFWLaKdMh9f8eVrvhzDsVdfisH1LRUpqVXTdWqNi3PHTP4y",
  "key36": "uJU4HGRw66qXLEyqbbr1gbAmPHzwW1MmhfpVhcJaPBA1vPraZHmM1USzxZNXVwbHXMVpRnN3ZVubcvrX6Y3w8qw",
  "key37": "U7YdhL7NKRuw3otpcjSEYo143is4FGUqDkGuM1x6btopkNn9Mwgz8Sweanct2sZY3knZ6ad3sqWRWvMEfRMkjJt",
  "key38": "3fHEWHHRGNni4wfcrj63A1GWmayLyydvR4VKoZxMyWJJTheZQF7cgs3xU5JidLt9YvQNfWULq2Ji84kPXjcdiQiV",
  "key39": "2kc1A1qb9AMNx1CSzMUSP5eiHj7i8c1THgcunQv3pwsbHbLXWDd55vUA3wocdzaaxGRzf7wTfkRyzZbU7KKazEUo",
  "key40": "W5KWMGT5JL1S1cfKKE6VvgVUkbdhEtwkEvg3DvVjCrcRv6YEq34PW7d7FyvRG3vTHPakFWBycm84CX8o114bAY5",
  "key41": "5amMVe2N2wksjU5mV8oGEnTjxeDUmVkZ84BswzRiBdiH8BpXjxghj1QSGrs3yKBaDGpdWyv17AbgB6j6bvoTdXg",
  "key42": "2ZZEV1PaoZwowhJi83yJh2ArBMq5qrW2CEsduweJBqMYsa6FQdyTD74VSrf8ZAAPATJdG4Hz446mzLfvrbLCZWhA",
  "key43": "3P7jSR9ddPu9GPVXSg2gH8Pmykn5HcH2bLbYNiwdggQcHRmrsTVhzAnZKGfkT3fiuUSQtjut7DuEsnDxmSfzNP8v",
  "key44": "2K1vUkiyBBfsXuf6q9hzoXSiavCVAjvqCzt2zx9EC5bMnZ7VdHiBFMVCthRxSadykZR9hKB2DLMkc9ivfSDt6hpL",
  "key45": "4stzkdq87q9geUuBGyHWda1vLYAUY2N6KUCmHB6yDYoyupP5KyW4mpSJxnGRXJt2gFjekT6Fjoo5bUryA9GxDkP4",
  "key46": "4a12JkTtgoHf6wmExjz2RWUYoHyMQMdpVgZjxDJy7XzMV2kjvBqD95aVJQ3DF5u44QLvXJCe4jkJQFgxw7FyuHUG"
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
