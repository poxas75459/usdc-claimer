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
    "3F7zy71wZi8Vq6EfeSgv3rDEFzPG2aZgQargYTZ8xffEyjNWgsHTB7Ei6Qii9hapHmWacwMxhjTuNBkSns3E6bwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KfHNYG6n3t6YNy5eMyEy3zaxxu4FSa1hgMdBAAW5GbBMx5Gq9hLne8s1X6MbjSnUnx8eqTVq9j7TvQFJCgTrZUU",
  "key1": "1pUBpmzURq2aYFrY17sopo7q7VN53BscpJ4aTJLfdTd2YDD3dtpUuPoonH8Bv2WtR9F3LpfvZfnYN1qR73F1GPD",
  "key2": "3n9cDFiyKKZgsjHC3yvTmUfeLcq98po3URVDo34s2xVYh1F95uvcDN6PWFut5uMZU2P1emsyb7rN6F9ms2srnxRo",
  "key3": "2jEseLERJjcBwJPDConzkaGK7A9vftFACcagZ7UMteByjCFuuxeGVeGc9GrFVgdrG5jGKZE5ScGR82ZW9zdAZpeR",
  "key4": "42qGxFBgdNVshj9pKvvWWMtagcQ1XVp78dKyst93t2xeA2CNXjAqctKkuNUW6bZdoYXp1T1Myykm1W8FyA1Mj6sq",
  "key5": "61mybs1f3xQeC3Z3MijBsibX2aFyjRWzyzZVHTQvYHr1eLgFYyyu18i6VccMY9LwarXwQZGDHiZe6qEGBDdWvkaN",
  "key6": "2fwoCQytqKoHd64m7jGKXdiRwE246BqvwYdTtibGiiGn3D2nHvtVtMHgJzoXqyym5PNjUJWNYZxYrTgfq2ZzGvQX",
  "key7": "5ubTg39efKdGySs1zSi34AV8bquEWwUz9f1StPtZKTisFKhpLm88oXAENbrHXsLXbXh3LNQ9t9zYrQmoECYiWN19",
  "key8": "FinEpYAC1D5PX51UTB4aZJixkXGPVgzGQZr6E1S2qgTnJfePtdHYwikZqZuH2128PeNkBWSS27x5DepZkFkNWVX",
  "key9": "2QX99Qru2HDKCUhyFB4KZAMuPNsD7FvBCKsECqKfGGyUmoUtVCj3CE5PSCbaCtieMrs7H9HQcVjh6H459rf3qhRN",
  "key10": "3sCYojLmsouw9Bg7YWYxM6ogJDgeQbU7y9rg7YHhFu51iskVDCAky8Wq22wehN3G4ejpByGKF6xrDhptG4oAM6m3",
  "key11": "4ZZNpgqJhsgTACD5sKkhHqQsCPQQrAEpEkhrkUXBd36NymnZbsuexe1e8Pq6FhBiQbr8Qi4NMqMAgvXN16KZkbmb",
  "key12": "3k8NFPni5uxZNu2funxvHmenB3nqWHXKxRo1C1m1XnNstuQPmxoX64uHve8hJEXpAsGjvmLiSy4KonLEe8KRp44L",
  "key13": "3ATbGAo4u3QkuywREDde2FLJzc216pjg5ZhJY36ba8pskeWz2d5EeV7nSHRkNpBZgJrjcgDxPSVtnQDVVZvDwjS3",
  "key14": "m5yub6pJjiyPXGJU1sgVydU97337r4DSatWWgAfu1tFvoUew8AhAmHjjchYo9dfmzAts3BgC2eVu32zqeQ5AcxK",
  "key15": "3DS2d23fDEdMBu24Cd1swfDn8ke922ewrixxkDYJyuedHGB1oGvT3FsbWjgUzYgsPUZyzfGf75pN4Rrg2XNFBE3x",
  "key16": "jABkjpshk6y5ZEWpXrL3oBxYDjossU4u9ty4HSDQdEMSvMuj9GbPrFhs6rqVEdRc38tykbAn33KSSvykAotCb8x",
  "key17": "5YciCszarPssDja8wYiGgeCx7Z2Q4iuCaJSXDyTZ1Eu67dkTA61rwKE2LMcaMpJEK3wBpaE4d7feNSUiyYEAHkWJ",
  "key18": "2TMB7GByEqeH93dz39H2Ntq2iHj2Tt6Ji4yX7AZ21jEapV4y26aHvLpKJ5L6LCSBRsCzTai8wbPqs9XCFSCB7bof",
  "key19": "2FH6xyAaupZ42hqGrT615WizanCEoTPJT7QFHaCmKheEB5XNkQBniqniEmtNf8WWpTvqnZxNVkst1BFMQg6mVoX2",
  "key20": "3JBZZYQWSoQjg5AX9kNosJro6UWv48ayrSGoSGMGQkaqvk4rVdatjYypw6urCNsmtcUuoBLhw7R7tzV9hsHR3z6L",
  "key21": "5mdGu4w4uD3CNoPe19TjAHoKEQpekvVh3BWFrXacwpDoRrKpqS2S3pYNapDRq3WPGqPWj7QHEw54PcvfdTKoyp8G",
  "key22": "26wrbbTghhVXaYaikNZ2ytx8hRE7vapRt1jRG7iEkQjdoHwxjiQKH1ycrS3yahktMWgQV94J3zpjtVAapVjCe4Jn",
  "key23": "4L9T3ggxwhhGDWF12gCiwdwGnqAG2H1Zbaof9ENnrpBjZDUtFbxUMzvigQovMV9P2ysCgHXqSC42EuYrxCmpThkU",
  "key24": "qXog8GCdj8XwEvHUeKTyAQMyunx6LdLae4KKB67hjPGqwY1SrHDfosqav6ATTnzq31AXVr8hY6xCeENkYDs5eFH",
  "key25": "5GeXrvFH9jNqwHbvsJDbV9chLKKmfCqQTCPKpUT3eMYtU8wJS5s5oWEeVmyi71YXqD8Q4k1n32dgY7V8giUsFAct",
  "key26": "3qSKczXCShmYozpWFhMfQSVBbxmya6pZQvTD85mgTZatnMeLC5KWC32u4sihQX5LKprjfLvyBpUy2Qwo9QkrEUK6",
  "key27": "2ZKmRpjEZrmRPLmtwmCDpWUh26bYmW923955QansMMo24iMAmQCwFK4rZfpLmGDEehPYaE1sHe7tRfpCKSzazz3Q",
  "key28": "4F6PvWNfZA8eqTeLRro8cp3dsNszfyoKMeTXxxR5U27YKVTWMrH26dyojJMjeqXLWf8ZzLifDWaB3zXUPVHyH1Ro",
  "key29": "2i3XRSfJJvTCf3T8p1TaDMvmsgtVtLZmBEXBiX9UMsMp8qRsVc69U2Y2kJZwchDL8EWotH24L4EwVFn9AEgXhHKi",
  "key30": "CAUiCxCk1Jydu8V1h4gRMTXVPZb5kD7PpkhX9Lgx3bAKTz9Z8MCuLv6TUJAxBcTaVEZcQioT6YVQZgoDnRvVeNo",
  "key31": "xPZtPjviuHf6xsVRR28juCAotc1NLN4dmi7rKouAUUDwBXDrnxhHfMta8rwdxmb521aWFhFXzBUmRPUKovznA5D",
  "key32": "XFT5FsoE8uFNMVkqBP1wXUK61wKy7HbXFroj68Y2eYvKv3BwbPVKi4BWBZEMrwRsm6a8bJWHW5VECERaUNNT2VX",
  "key33": "twywQ7mHXGVJPuwcAJMh26ikEgnypnWwDuU4tSvgVwbU1u7AVFxHYSsGQzKuLp32MsJ8aJVcG9QpYz9165DYEf6",
  "key34": "4RLY9Qqj8y8kyWwaCAEHCsUYVNE9Foi1t7eYzzCcCJtC7L6rooTFm4d34gDgk3L8m3RB7s4qNhE89dsAJSq9dVke",
  "key35": "4RpCLaWrXZsdBibWamtH18qyyQ9WpehuYybu738chX4opsrMZzBmiu16ZumgMHbguqg9SpJPMfvSTxAZkrXsyPWE",
  "key36": "42ddkYaLyj2Ekvv4RYf4WURMMHACipsecLdsMu5wQyLCnykpvJVzLJMhHrMYyos7De1jFwf7wjvv3MLrz83zoDH4",
  "key37": "g4B8QtBjNeVqoPcTWyWBx5EqvgpRmr21C1kFLKzcM1WNyGtw9L729jMhpCfnBaG3XKvJCMtbSoSj2j6Za6i1K16",
  "key38": "4UbQtta7edVqsnzuNb4ZoDsejkPjraWiDXQB6zeXQYc4oXr4DzfPitC8PRq6U6iGE6EU8V1sfcFk7bS7kacRueTV",
  "key39": "5bjW9fSxu6sqh6YsxvW1dqK58NAfd3VfaRNdxcs4ejjHqHzLRkCSGHFA3BHUoaVhrxjLVpLBadqNUxynEntYbQ3j",
  "key40": "5ao8e7zxTZwsrdpEZfPRyYqSbUozANRoSb3bQgmZSaRBjmnGYpWb5yjBo7ccscRf5efceJ1zsc8vg1dRUfPjzRTr",
  "key41": "54v6GzzYGNiJiXChYKuFta64og52D8oBB44J9nMRa5CxPJqpqD237fjSann29R8xrnnfPaaUV6uoMgqFjGq4SDWP",
  "key42": "4KeYh3qXgaTbFJAmk7jnrRr8ANgm1MYJmHYQrWuRB5YtM4cRcBab8ynoBim6ZxyhfKFPdXTbkgpcEtDMAfT86uJN",
  "key43": "4vfu6eATYAf5ZcgHgK71qWGs437hunxFDbbWXeaifK7Z7mvwdiv7StAd7Zw11xH5wB573ZkyvSvfrkNYomtyLizp",
  "key44": "4Uhqm34CeQaf8xidK79KRCxk9btuHyiTYv5i3Pak89rCXhps7Gtztex8NMyf1pXEBNZtwct2EMPL4Q1LrvV6zkTx"
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
