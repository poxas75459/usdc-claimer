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
    "sgzpMECCByr9dkbiyyUscsA71WCFn9F8HGkobYbr7mrwjL5e81qzBdK11McSoDFsoaPWK1ZKfFgMnrnEYoNxoDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ukEh8sPuzkov7V7xyrko21qkpk9LhzWvU4acQfxQrN25aLsGWRTc2GvmTMZq6LeWKqZdurtZynionPfgK4pxq3C",
  "key1": "5YJMPMGavJg7QAu4AitAEcpGSDziDzz23ESBj31V2sZnoFB67vXucXsRSLtxXSFpuSYzkoXU3sgSdMz1XM7u1F3C",
  "key2": "aU3DggWgfdEHwtp1Uf7ZfnLaeWPRNuhaiiDG115bkN2h526orhy2m5r7ReLVYZbMGW6xNbxAshETUB5grMHRPdq",
  "key3": "rgJHc1PqminME3bVDibWHvttbEpjimn5J2URhwLTymenbyhCfy7XvZQWBBVL4ZeYECHgSPusjGg17u5TUZNV4R7",
  "key4": "Pj4MPtqdMkEkBtMZkbwxrZPsePfnJVV8nG4NgAUAM5xi9sJE2YKjKAGBgQ3z5j4XCUzqeQwAV8jGz2tZxC7ewM1",
  "key5": "3EfzJfpRNdBWoqjAn59FabXZZYW1yVXKQjt2bo4UXMRGg9MS2VSPx1gqLduvkDXqA8zTQYsezF7YD5Mh2xA8Stjq",
  "key6": "4hPvSFPQKDgvS2mjyom2rsxq94vPWoGWzEhLzUxeniuS4zDB5oMEaZ5zs3gp7U3yhSbPRt2KpS1JHgE4vvLaVi97",
  "key7": "5eTN3FGWGnMpJf8ngLz4gbaD68eBi8sVkyAiGBvZCcbuvZkvb2sMvDEnfkyvxdYFQtEXQiXgwGvFrJU6GcjK68yd",
  "key8": "2x3kBdmoiXGG3bm1yKX8tnMmxFEuZVQ2DUofikxQQoMUhrfGxUhTZcXXwpziWdkP3uLif9S8i5JgjuJe8rFMuub",
  "key9": "4h8NjXKxGEQEEv48dVePBnPs4JQhKs1i5y7pT9ocjLUz34fphWvFznpcr3EwKqN5gpjMKNafNV35rc9DUNxMSQPY",
  "key10": "jQyrXqQbN1MHXycpFyL3dLGHS3NgPcbAAXpgQGhoq8ytHWwUbd1nqe1RKcv8Dpz1P2YkfKt2HETmTr7QTcLgLYQ",
  "key11": "3ufapoNVrPgW9Dv2qawfBsShWGp6Y8wQiN9Pusi9MnNa8E7y8Q6bGaZEaUtr9YmLAvLTF6PA1p5e5B4QnREhDfEU",
  "key12": "5hMoK6shM1WpPCJG6p6ub63y3RvcqFdKdcw82epP98tu5sWftof6wKWZLcZ2vMuqM4wjyMxgYfBXWHS8gFoHY5mW",
  "key13": "58HnGQoAAgcKzrPL7AwEXfZfHyEGLmZhwhMRYwprND1i4w7DdkCxKmJnTZsQVtGoRgq5cZ3eHFskxKFs186ikDER",
  "key14": "4QM15gfZHDwTSEvopeKub74Bks5XJJvN26HDssqRAof9gGB1bxh9xcUNas1Wcck4mYvRWJtSkYarrTZVctZbj6Hd",
  "key15": "2YqqSMTBEYnDzsF2XX3GChecA2mdnANCw8rWVvFrtErG2Pr39Htu5RuK442ipgrojbWhTLSjEW61cr3y9SYyPfrZ",
  "key16": "5Mo6pHKcRvrpPVArA6pHWgP4N5yqF1JrzSHMaqbeKUyR2S77Cwy7miyfXk4jXjmY39TtrdR5WqHFjBv9QXBWPdDU",
  "key17": "5L6YmFxjRaJiFwm3vGhXftZCjt2VcbJSBKAZ8cP5356Vv3hVLtUFcmgtTFaXV9S4q3Jd7tYQRuruQYDawGEo565w",
  "key18": "4YBxrXdxtyGHFTjJGDFasWr8e1phPb6EWKwkL7n1W4Zso3VLKKrWbRYmiRqgNmwdayUEeKdQrWUKGGvDpDLf6EqT",
  "key19": "587s77RMq6m92DCMgpXY8EFrnJyPqdTedeQte5fhA4aGEebiVLWZmqDAzpQkJzYhhGzrWvUP3VzpBZAXWFX2Ny7X",
  "key20": "2tWtbC8M9YhhVN9ZK8z2u4MuYuppdh7Gbx6MqkoTKdUzXR41rQfDbNGwXNwWjWi265wAdGJTyJk9dYYiaha2PCaz",
  "key21": "2d3pKU68SHiRUUCqRwPhv538wvuTGykMUeL7zuxXcmDosN3xvMcgzy78WGqzZCYYTXY2Y8EZdiLFWHsUYQ1ueAT2",
  "key22": "4dpytmW4UkwUgZhBw7mi2nauxKm2QXQhQqo1qijjkjby325yd1eC8vPRqK1uT985iTFvrTjBhmpyU2gv5HaUgLJb",
  "key23": "hsPDNZ5ErHhH42zNXkC98G4XQfyXXA7kprzXyohZTaFFCEr7pfTcKGFqrtBLp8Z5UAFk5LBfy8VkZiHsdeLqtUZ",
  "key24": "kf2c9BeYTdfoJFFuRpT8htZc7bJTL1Lr8oUT3qU5BhQBCYqkBhzfrFmLdGzdJyCS6gDknczSiT7pR1ve2ugZejM",
  "key25": "212i6zC6TPKCxWzuq9L4mbDPUV9q5NCwhVVV8818hqQ9qCouaNkpxSf9st3P7AkYeC6t6PPsFKDuw5mMzZz8QvE8",
  "key26": "3fV7mXr4yX71LqiEBZicvFSD7UjMv1xudg6aMkC2jyxTVQCaZi9dukVGkg6mQVmAsGKJqoXFaz2ZAayLBmPFPaMk",
  "key27": "4N92Pawr2Y6gBr261diQpbQjVCmUzomXYF9wWwHP9sTgoXpXNcaDuKbu5roeDbF4AeuhAjL1jB6pXuW9PsFEoCVc",
  "key28": "h1rGc1rwV43CMLaingaRc4Y1C5EFiqpMgdbPQU2NidGpWTtCDdEQSPNfgWQPJnycV7CY9iSFFaZweX1rutU496C",
  "key29": "3RgWQtsutkvSeA6jc9SbQYxdDEXK4XmxEWBwGqtNFjZHqfGVo5mugXV6pf9ogS1Q82VyEr4GSsKK5hVCYDtiWQNQ",
  "key30": "5scFETWs24Pdk7KDDVSPwq6idfdotddhmRVfLKrF4N5TnZ78qsp5CqZgmGZrBecFh5rJgQKmRcWoc1Zx9d5CD2BU",
  "key31": "MATCEbrRP5rbZ6WiCLj1vyDACX1tpXFMKPro5JTMVXf3Yy2dKMxVSkDKmK3m5cCAvsGeEpWrArDYdrq97fEnJQL",
  "key32": "26UWzKJqkv48p3qRQaCD5Mt8iJyVGh7ci1VUYWWh49b1dGWj9qDsqLwV5ApMkDrz5hjDmDHWeE6XNth2jUYenqgp",
  "key33": "36ETYnHeYE8KQr1EmwWk1aBkAoXnNuHYbJHgwUiH2v9qeaZZYFfVtGzkLVXmuUeSZMAf6iaNXxsJRRwj9zCtB4sz",
  "key34": "4AbvgYkZMSubZoFWjqJ5L1z5kLoY9EtubGaYJ431Ze6NfZJrkTMpVSUycLV8bdyYUswZo5mc9fzStMYK6MU5gyZV",
  "key35": "4mx6XsBQQncoh94R2zimWrswNs1pExfTLRvZY9ULnvxcSxwUTwfqnCrYXq75SuVZBedFtq1c1kRE5GYDsrtJocHA",
  "key36": "4zBsMerfWPxGt5TPCnySyKoygCU4773KiQj6MYFEVeu1TcqLszyApcLXoM45NMdkapd34xkZzn76WAWHvj76Pyyr",
  "key37": "27K3h3kEtsZsaSzvoqS6kscrY8qQ54jhmEYkwQgyxNLJfqjLHXxwEidAhEbookLKpo1EPBCVGPNBZUBMwzEa1zwm",
  "key38": "PTM4grXr9Js4VpMwuVuqbqvFtzXbSm7WRJEVEDy3k52tbhxmpH2k4rqr1c29yCXVKWi31U8mfT1yexbGqMzFtuE",
  "key39": "4W7jom8Dw8fo5qtHoaWwx9ybGvSbv3R7PBxdzxF6LpXrodrCg6Z1twPyNuRpLp5RWCgcS2FX8PwGzafJWJ4vCeVL",
  "key40": "3fdeWNEJ3JjiLRky7EBVT38KnTbG3FLMzu2iWbiKudq1GQh22fVxpuuNoBdzgHW9Yud1iSPB6BPtEGuugWer5XXW",
  "key41": "2qRQzL2NFz5mbbNc1dk1i94sBjWWRM87kr7pr8gYPGjQBSzzm9vCnqTvEwgGNhsxoAmXqaBdu5fd8a7SbShxtnTZ",
  "key42": "29jJ1ywMJmArCYKoXUbCj5NZYurGCTuDPGGGp7HgwRQ6GkvfxQSk9hzDBbgzo7Z7tFtKuTNX49DCecyFiuiTiqM9"
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
