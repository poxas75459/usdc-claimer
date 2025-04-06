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
    "5dJLd37x3JrGSz737aRjmozpCaBqXB8Vux96t623M1RfKVbWMayZjMSe4oQ3yyJdEkd3rGuRqD6bb1Ady2HkSW78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fzyHu5NHbocBWLaA9MEfBwZCEjWCoTPBaKQazge3yy8ZkEzQfphnrHWM6gDiqoNJ3dkWpnUcepNV9bpbd1HZdsD",
  "key1": "48YtPDofVsKYAn24yakEaiDKeFBzRhubmLN4JTD7rtYdvQS8iJi32yYxo2guWRMA2keLQ8RRnebcesiMBNBR7eLB",
  "key2": "3dppX4QpZgZyygqQnqXJpy6uGdALr45DVbCNcbZCDyz67bGygAE72dKBvVFb9PKu9EMDTN65NtRC7TDB9XwrNnFj",
  "key3": "4WRyKHJ1cnkBaB6zgKjYLcV44N8sKfAiBp37f3GF6GxT1YJDcJcQxot8WkoW3knyp858eS9YxxXuxEBLyj9ZrrfJ",
  "key4": "2DMWazbvKaJtvei8abBWXvth8gHLbDYVagTRypTDgo6doSw3P7BYSJ1kzqeFh13bnZRjvRmKnPGbdbhwsjgVgEZg",
  "key5": "Bv4dTYjyRf2eWeNyhVozJj8qJdm9R4BK1t7Fm8cUqrY4RnuNEAkeqgBDRoFRmBQagVg4KUsTM76J7njLfBeSJLx",
  "key6": "nwxho9hQKPR5d3Qvq9BEUVHsjtG68k2C7ubFHsWs7HP9nE9zVmuYtoH62ptUUixWiGAKm23vcfMZKGMsuYYFmkS",
  "key7": "Ui6RffeHC1Db1wvDhLkaez8wDANcMy8J6c7Cvor7QSCq81MPB36kxhVcqwuHpkndcnvHuv4xAm3tBM5fiTnMReB",
  "key8": "5vzXqwh4J4xkqGWpYdwygv2pUWKcsCaxXomjSQGvRByVCPL7DDRnQHT6t2KdQ5w1Qw2JXkq4nPKjAGvAxGNQJZrs",
  "key9": "5ANeWheiHL5BMsCdqbXbUYHMjjwVnhSVGJsyBNzQTmfnqU3nouMMLM87KEWJcUGSG1BXrYpfCiYnEobMWLDcJVHC",
  "key10": "3J4sArenSSkCzDUyurWtr18tjNzaxFbv1FNiBEw91Fpai2c2sKKdbdfYS3G9Ww8NYBiJ7weCrhC8MS3tjZ1zhqVw",
  "key11": "5WBhgAacXpcdMG4EDoCwhoDd8tLCP4RfqKZeGLNzkQMkJeoCcSK53pA3nnT1ok644sR3RagnvuZasueb6fiUJEkE",
  "key12": "3Jho3aokDbqE81LV6pJ2ixmMaFC6HUxeKnrutZiJgCT4UNEvwq6ekghwMA6U1hhS7eQirbxgK1KPMJYfYPFAG5bi",
  "key13": "5NTLHr8ybVDiY8aRcCofn3xjHpydvxqnNH43GWNtQgoSx2u8X9dA5pjFA57zJTvgZFz3nb8MvDXrCZ424hsdAJah",
  "key14": "3goF5ndcguYhgQ5cEkHqjNeYDWTYbSggd8eEdDVuNfFReWZdd1zpNMKxSjiM3SRCX6S1MyiANZuQ1hcqbtnYeA2Y",
  "key15": "7jJUddhsuzQjbG3mQjHv9jQ2q9rtEvLmei4uPgDtHhsXAMp9pPL7bLjYiF5s18HZtA9LTAURfLd6W37jGdBLvCY",
  "key16": "8P6ZxKdjBPyRMu9Zs6a4nJYheAcXMcwdnCeJNcW5pR6e47MT3vuUv9hVkyqsmhjyV2L4xrm7vu2oTGBxUssezkv",
  "key17": "4Tvf5o9SdCaURyv585ismFY96eVEM9FSW3F86jGsAS7RKE3c9skDAT5JP1zJghrjfBYqFrh9kxBFpjRZUzoW7xwP",
  "key18": "4dPNqZN5WVQ5b56574xzPu4xEiCzJC9hzMxh72piVotTS4DNyDatGuM2h45LGCsPBDgR5Xv8ABKfDgqwFQPKGntZ",
  "key19": "hxbbodmBtzjMWW19KfncX1V5unM51FJiRmmrCsS8hue8yrPE2myXzmQ77jcVvbcPBfjRcXLJn3KjCChaxQ7S3eG",
  "key20": "2xgo3SZs57LMKH7fuadeQqfSwpR4wStzJcc6KuVSjhnThAisY2gfme4egJQtVMexEJi4o3xWxnA46dTyi4v3xgb5",
  "key21": "2W3dzywsUbsjuGkabKUS8SQHtNU3G3ME6tJy3h1vPVPVFgNuLdtFHRiaxKRmREorHJ725qhXmPEkDXjoNDTrwvHg",
  "key22": "2EEj2UaCPiksVisEwXGyaF3L13jxZHVgWAimjNjhXsurfJtJ3uoVomFzgKuSVhRVp3vVvbhEBitFNWZydsdBkgkT",
  "key23": "38qmxxX89RTA3SXUSeSYMyDwGQpooNjXUxhy2jpSkxFieLWqNx1LzwP3gkHKkGUb9mDkAzyHP9bDdNSpjdVDRw9J",
  "key24": "2Di3Q5dsNwD4RbKuMsGUpwXf6zhAEMUaRHuKBhjYxhVgjiKzhMyFoVeuWxQV2xo775sPB5q1C2xLsJmTd7c9CfTK",
  "key25": "5k4Xq94xm7nNdLj657LE8VA2DTT4w8FGarnR8Z1KnZdZjqMSL8T6XpgSdMnRnYuix3o1hvyb1VkrcDuNR6k8c645",
  "key26": "3p1rT88V8FD2tZxXTvjeTGXjDMHDSf4PHuwXWEQeuTLsb2tjEU36iAYrmx1ixax35hdBa3wNgUuJxLa58T4Aj6Rs",
  "key27": "571Uckm2hozJ7ph3NA1rAcF2kraob82e9xWgi21c5eA5H1r64e1V31wPXwaxCh3jPprn9F68MgrKdXzev7tqSvcm",
  "key28": "5NmzsHfZJhD3PM1LYL2PQzb1GnkNEKqgAnstTgupVJsDYSKmq2YTToJCTu5ELy8pHM1zET5wY69jGWidwvEzmD3S",
  "key29": "5ANefiYrCPMz29Nxctn5P6mG69tsCNBAHJMCp1NTBvaoPzhkACpy75vaXHZN1twYFKcpyLd4CHUAkq4hu7w83DTa",
  "key30": "4ww33tQj3mEjLsywJJztGpvxaMSoHXzd2VgB2Pffqpdh6oRzNNKicAyPweTa74C7ERDPa2mPB54Mdnb7UZA22ceG",
  "key31": "3e1d3yFzAPFTvp6winxwSJt4zbMGEZnr6u1VTjfDXW6G3QCnXJh1QrGVDy9d8RcGogdGMEz8ebv5haViS1ZZ1tHP",
  "key32": "4TwvG8LpJKKdn1oMyKvi8L484d1QaNxYMHijJRLXiWfzwPSV6KYqB3nhkPjXFb4xm2mPAcqSVXpurSYvUDrSh469",
  "key33": "5949MFvzLg9EogykNPWzGmhL4LiiQiz44CdoRfSDhcS9DvYmQuMiZc86hp8raYncfMd8xS7eycWd17wG4MMEsPVv",
  "key34": "3WRqgdvU3YVzHrBni1urmWmt3XoaKR7nSVqgyveH1ueKXKxjyz3VFbdGQT5HpiA41Y2vixbwJreCXtjPUWhv4N35",
  "key35": "5WKibggd96CxAWNXyERRk9XcnM6VHKRM2NqLRp7BVyWRyrCexBVs2mkGadXdwZ3xL2mYCF1QFznthTKrEgspL151",
  "key36": "3Wo9q8d8gbURfQk9MPp3Go4YcVWaUPQhPibcqAa9EXYSziZdnoPm8E3sfgEEqQZ79yixVbdH94HEezG8xzEeZtwB",
  "key37": "4ddU6obcB2DTrHVhHFDqFaVDbzobHym6B1nK5BCKXuERAVJw3teHnTbqMVobdHXZSvz3aKcwxVVxuzxT2oT82Vtq",
  "key38": "46ii9UvPYZ9YyZYoJoRjptkQagEKUP3iUdxsGpxqzEKnxox8rpvD1QXvNWkPL51vC5RmcABn5yN3UdApH64zo13Q",
  "key39": "3SyTxRZCgDYr3mKzT9TggqbAqcLM6NkY9JfnRzJ3tXSSumh6gfiJYL66hPwZvZCXNwcwACX7vgLdWG5hsVm7TVxj",
  "key40": "5qivBKeiz2MHnKg56UsQ8ESqg4fFxE4fwhM2BBmkZfsfVHTKa7ZBHCcCdSvkzn9QTGA4DmBRa7ojiCFrMSu7TWZf",
  "key41": "3gjsvj9b5FPVHCeMR21Tvw4EQZpwQVBsUSZ8kw5DCZrmx4Y1BfEsMqTZDZuGmsDTSnbLhBcq16bTTMCaLfcLTDKa"
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
