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
    "Z8m4Pdd5S3qyDcZJABEbdYcUSNdDM5KSmv1vAbh39AAUY53FpN3oerCZwXXExLg7PWLPkdcbV5E1ghSoaWrVXwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XW3fktKbAb9dj1gBKEMqzB8h6B5wW5FXQgHEgvX8ewBBqGHuFaoF3F1miFLoZbGiDv8XY11cRnJY6giS2ooDL5i",
  "key1": "398NtZAbjj8i6ktPp4sDEBMGveCyWbJwLsqU2BotqtZwd81W4k5YDZPUGnREbRn3cV66iXJZc3wuHc7KAxFYVt2J",
  "key2": "5MziLmFXaou1t5Twqn6FwpeRqBC74yP3E6w4FVHLnxKNE489APuAs7B1owsFSZBBdbhn2uSkggtFiofJpuRALYZg",
  "key3": "3mqGXbb2v2NKyJa7yA7Fa7nLEYEh17k21fc8sG2Zxrbx6dB4uYkcXmbEXsq8ntwDq7nDU4TDGy4375fuRomvCbrW",
  "key4": "39bhbRkADn7kCcBAMVHeWqT69Aep9xjU7jvXJGyaffSg3LkVfNSfk1eLU2cyywAnQujjETKC36ThRCGkywi9EAjG",
  "key5": "5xodULsa1WPZQBQGzWUw797uEHxBnGEihbQvWMays25Hefo4dYKmHnhmK7kF3p81osb9MGo1SNxVPqiSahbreiQ5",
  "key6": "51YJNxMb2tJfS2U13kgy5jNAbdQx6oidgjGGi3XRJ6My6sqpmBMJuYDceioNSpvyQgb1j7N6Tb1gDE7Nk61ja2i2",
  "key7": "5HuSCMcDeZndbSMGUCHyStr2xXtYVoVyUXC83JvgGPPke3sjsrifTwjHBmmpZ41SHDusS9xa2byZMWPuW1NGNKXu",
  "key8": "F19e274Wdm9wV2RBuxj5R5Ltt9PmGS1RUSQjrXoDQ3tKDhCsMRS78VdYCs1SikbgrumzS5ZahxwTMyoii8zYC3t",
  "key9": "9f3aUmf4y9JPwzQL8RX53tDLCr9Qg74QPhTyyQnQUnfJjLvWVfU9a8n29QuWSgN6osSuo3x4GwgGidcygtmBAPv",
  "key10": "3TPQiVEdRkFqTRxjresA1fe7Qb4BJcYzPcY73Q2t8DPyJu6pPVzVuSNLTBaatAXMiwGAgo8nRqih1ubmXdpe5taG",
  "key11": "3MVQZvYyVyaomZsC4dsHWkjH2DZa3UXLxNSDJAhPCvxniJxMxSymeB7weXau2aFabuayZrKZwRVoX4zjRj4d2Lgp",
  "key12": "2DXhA27FmcKuU8yEvK9kB8vHqCEfLMsH4rLZdiY14wf2XSfegQ87Xz6MSw9fzLHFXsYtcs5ezMGD9pkM4mfeYDCW",
  "key13": "465nXK3zWwaBi9WJojUMB1oqhvKWRuFPNTFcTJAu9eNrCpmB7Xo63FuuX9pmNjkqZcnuSQwFT7aFL2bL7xJjD1R4",
  "key14": "5mkBM8622pTogCrgEeZMSSMKHZghZ4wJ7ERoMBgUSp6WGASu4N4f99nBQbHadBUsspFWijQCese11PQd2E5oLfFx",
  "key15": "42b1EzoucVXc6rySzWm5ZGxxhK4DJ42Edr2WcmyUkBHY798KVFiM1BiW4AxnzV1uDs14tcDHb47XvwXQn62APkx3",
  "key16": "5RLvEu8WcwPzSUyZ7EGyhYQJqeKnnNHBQr3292FJHXKGgoC5Z6r45MeXfczLxXwxUeP495NUQstDZp5N1h2MtWKF",
  "key17": "zujQQj8pR5v7kQarqeJFhRyn7gH3FPqvwernzbrCMJaqwQRw7y7Z9cCk5YLnWBwzphMxiKdaKm14L1gcoTconkZ",
  "key18": "4WGRNouwqLE1buBnrtXBFRKuNKrpaAfWJq8bHzj2No9JP4HWAsq2dKsumMVUrCEY9Kx1MZQ5zyxEevDinfG1WZFg",
  "key19": "2FpY11KgTt7sC4p14oedjWSo1q2HCDpDvkgTfkypH3iRQwsePP3G9gJeRso8YmTnd5TtJ8tgjfepAjCiDQPQmLp5",
  "key20": "3NPKGPhbtRYYdJWPvjhx1hAbsipJ3YybQyPoKhRc7WHN11Y1exuP344UYj3hWzbwFh9iztrRqUDiwnbbYUngFYPe",
  "key21": "s6Up8T7wPw3hcRTSLU6FLeapBAPjMtX3RZpRi33DY4BKsiC3taSCZS9Evg8KbtjWNdi4dKiZ4fCds5AMmpfhUk6",
  "key22": "2y6G8LMyRs9pSqygSDUsv88FKgfAeVb5xXyKPmiXFCEU4jeJPNWu6AVXhQqKG6g75izz5hnG1magDZPfj6ZTqJF",
  "key23": "gUGcEJYi4dPRDqyzhLGLdnogt6PJDoTAT68E3Y76Fb1wRjDszW7mt3YpYGZ7fLM6qaJ32MZRAAp9ga4bMqnH9jF",
  "key24": "3wsumjkMFKN3R3G6Nb1o7msi9Wqe9ocn4NaYEfsiC862yxDRi2MwQdvgdJMVUxnE4p9iz2cpAyP5cTUT2kGBdMs",
  "key25": "2CDYJrBQvf1NRQMp7672SFLbw3bUJGD1N8Y8jR6AKZ6j2PVrtMbc9dXF8hetjKyqwKebY9oMUjgDUzwSdvuKrD3k",
  "key26": "3n68UpRrSrQWTnamZuyAg752PKcsgYhzthqst3R8bwRgb8vZrdvZtAHXP8MTisRyF9pPEXevQNmuxinYQBsaiE8L",
  "key27": "5NTAGKhr8JbdMd4F2XvCvtjoLLbCUeXCcY98C7yWp66m5UCeSt9Y5NZK8Tpjdu7bpxwGhjMnsqZBSzwuPjCvCMD9",
  "key28": "RdpJNi4kf9vCUdiYCVraob7G18yEkatYN7zTpRkvzu9mqj8Muq6iDwJ55Wk3NCJ9nDV6fNtQe9pJB24rQyY4rvA",
  "key29": "3vs75eDRH1WkXkh7MZWsBFySr8trDCVcYpvYFB7nVNhSK3SSbX2AVPN9BDDbq5tsTfGoCffeKuvrBp9UsTA82byR",
  "key30": "3sfomjHfwVSjXXAcX15ubpo8dDTKcJAcaErTiEXEY1KFxo87XrHTpavZfu2Pc3gCvxTwg34bsNcSG6i3dpM3Gi9M",
  "key31": "5bXZcLpozHTBqVDmCRufJsRNUvfL9ygresVvqzwx8yCBKGx5TBqgjRA2dXKspTHgSttvmXeDYPCpDm9GXVznjxN9",
  "key32": "6tPZYCvVo9viBgRdqG37hREbr82oe2yDVbjTqkeKs5upw1NiymoZai2PHMGJcifGijiM6is8RpHD7yJywqKXfXG",
  "key33": "3zpH3wgnXXWRNkHkoyGzSfZZ16EXoWDftGXZRf79uEGb5JgbhxyNyi6sEqHtNkZK8qypSk44dJGEBiwG9WhW2VVD",
  "key34": "5D7GtVSzbxxYfpFBjxBgAkuos9B3HCMycZNW8LC7MfqTjbLxSgqLZCQTNhYxUC9vn7SwWyyPeTFDBM2GK9xjZVrS",
  "key35": "3DD2LHzucrZS4g2xfvgNJyx2rbL6Kw7ERpWq2FQwmkMhz7TVUWp9HmYx6ESyjYwLj6pnKMEKWhm94XF58Mr6QPBC",
  "key36": "NLmdV9GKpUC2rNePyfWWUsdaNJbsT3DgPjsimBUrMZiVMFnYA3aXsLVD6bxGvEVSiYQKb68E27xPCDUjnQufqrd",
  "key37": "2EuypXeY4HM9gSVDqkz2cCGwECNnNi3JRRwqPw7N4aYRUFmp8PLMPzQsFoCuPYSKPSKJRYM1reaihAKMRUrkUGSo",
  "key38": "5mpNmcyCZgzXC9e4KMkTugFmEqKrXdBjcaJTFiBBRdB3DuomDxYoz8cjHrjoRhK8AKYZTd7tJ8eCsoJyKn6cfYzu",
  "key39": "36g8oAjoSxztiw5dHyrAeGPHpKU5fQdPnJvM5KmE96MfbNQrzGLHfJiLTf1VHZRtgXWMVWHpKjq2b6443r5LDLAu",
  "key40": "3H2S1jwG8AMd5xYft1fEEDTVJzGFCf2cHntUpoHyGyo3CmYscminEMdwt1gj4k7GUZLegWk89FW6TW32gvmMwiuw",
  "key41": "tyRexnuNZJ9SK7XfxqiexKDATgjVDohpGNQ3fYvVBsLLr799k1F7auSfRXWiraEScwJ548PyXoEWzkvdas5ogsw",
  "key42": "3DS5g4ZguLZyczu7MBE3ehP6VjwenntTv4cBeV79N4nEVgCJ6gDUbo3txFb8Akrp933PL5FRdu8tqEEBQAKyK4CH",
  "key43": "vruXn2kPs9AjNnXWieXiedhPQ14EsNfTja9uDFcUSJHouA7aH47VM7CcEHFPXr8t3gF2gcrAWg87YyyaE6wbQQm",
  "key44": "2YuM2w6AbRVCnrrJTZjNPRbUeKZxzawhqYC7Jck3enY3PtvZf25imXPwHdtHGqmBnTvFVQexAazLKCam1ki6SG6d",
  "key45": "5UMrqRdLqqoSpnQX2MTSMYWyxVVPz2LJGivzJyPGNjaCH3PPg7kSqQJWvwW1pPe4Fv7BNWXock34hgggQUrsC3Tw",
  "key46": "3nVRoktsRjdvywHsRS6NA8ZGSPhwyooGZfSLTty52V8kK1mf4GEaE4jsytE9mAecZLqQdbVMxviJ7GjkzP1cE36s",
  "key47": "4C3qFRRmwD21R3YW5NEZJigipNK7DXYQMxSSrxpfz8EFnCz8Gs7rxKwCXa3cXRCUB2GqGJ4BuS94waTiLfhYf5WM",
  "key48": "5Xp7UZ3vKpybo7PMouq5KZq9fuuEgUKBSG7Kssduoy6AKUWFzdBjf1kdetnqtva95NkUdVkszowv3CPLxt5Z9XQp",
  "key49": "2UnhPA3qHSeZwYff4PEzAFwzj6YJ97bAUiUPQCvbbnGNido3eNP5oPgCmkAMM4uPHJi4HzUmwHZ2dqVDin3eZHy7"
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
