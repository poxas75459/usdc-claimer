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
    "3o2SpnoWardWfavNi4m9hYEE1UBsWLmgH27d7edGU9tLoYVpL33rMtzj7hGHjoziNRHxAJedUGzjiSR2Kx2tEh4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GzmXrkDnNyguBVFo4RympLUSUENiYHnn4Xhy8JRe4LtUwfeeKM71cMM21N7G6WdxQgX7RevAgm3MmLYEcsyr3KT",
  "key1": "5afD8J1rij3R9HbMM8ZnC8Z2kwZMfQBp4Pcun5qBAfkwr6LYa546RR4CF5SM9yc9SBgYtN4DoG4xPwjjuUc5vUTj",
  "key2": "3EhmX6dob2xriuRvPAYVUYJiPdasgY1YffhaTaCMUJVVwJd1b8gicVUihppsTSgw6LBWXPKVt3vVZPrS5p9Fp7Ms",
  "key3": "3u1xdsJ6cXXjMkKrreyzA95vYzRk97QXg5Leddsp5ci7BTsVnr2yM25hBEwx4ze5JgvpAsuwpaFsZSqGkfogxJc5",
  "key4": "227p1y7tS9bsu4mvAganhvY4VFmjDA1VCH5N7DmuQZBGrrpZjGbmqScPM7ECUU7oWoUXmSdpvLNEMXbWBo8Cqmzd",
  "key5": "2cHNmsRGGK91FW7M9WZ9bZFC1Nn8wqajqYSA6JVHRekV7yHzuhki97i9wrV2BmKry8ACemdgdB8GKqtXvfkoEDTd",
  "key6": "5XUwPZVug3HogsboguSEGod5DTuLBdrYA8tpHvAihzVgna1gDaWe2nELdwjarUmvJaZZtoPWRpDSBgcMrLfjYEpx",
  "key7": "dXqqVwAkkhjRQ69ENNEoFrozhDUtctfeWNoQ6kHZTaSyxHU562QhsMpoo6bXrwPGKuGLdpXJS5uYj8PUsrbvnLa",
  "key8": "2q7s4FM1kVzdsBzQ89g1zpj1QqBtQCa29siNhUAtgGdh2RhBaAu81Y2g4pxqzNoEXnJoF1NL3hioMKocdTBkSMyR",
  "key9": "sX8qP3yQfw911fAUQWCZV95m4w4vBEJUSXLcaEA3qUo4rwZBmwFu6g4JEvtQ2LYxKpy7HBXikhGL8M2Zhrv2EeU",
  "key10": "1ncnNNTaGxoR48nhEcd7WTx4bX8eA1PbMxKWXKwkW6u8RB1XUxkvd2ryaEtvZiioJgWp4bXH1NBf5bBuTMHqQdd",
  "key11": "3yi7h5DLUt6pATgYXbSBcgTF3mqRWVH8Z1aJ9ZCor372aZNo3soAxmwx8QjwikuzmYGmBLQw6GyvRRFEbNYMM1PQ",
  "key12": "27CA4XRUjCxJBoN56vNeLDwRzA9jnVXYxbeiF5PBWuPuJHYzr6e9kiWAEKGAq6rSutbd4Fi1MatebsarnqZ3YP7W",
  "key13": "5cMymDwpg5sYZJD45dFPsCzz5C4E2PTcJxPFAb5EH6GvKPYSETFS2UjkRJJ6MgD5TPeoWR6UYsDR4coxvPYXeDRt",
  "key14": "3iqoAZyHwdEmvNjSjVQznJb5ixHBrqfv52e2re2eRCC6FUQGmuJ2wLJ3X2xUc2nLYim2mmwExanj1ZDEV7iJjyfH",
  "key15": "4MT1DVCoYx6HpWUiextQe7uoD7PBZz5ZyLDUpMoRGtttDBXdfxFohgaxnVDhLYWJZmtdiNnF9ZXLJE5WsR7R46Bq",
  "key16": "A67yAfJo2ynwBtapsi9HERBNpyYkVnNsZhJ7P1gcuuqPWGcR2XXYaMA74k61LMNtg19D7Wm4cDqQgzQv8cMeFr2",
  "key17": "exjyNzgCJV61pbqdcZzJEn8NSmGSkbEcx8C3JxCr1cRG89ok4NG9L9BWDd41Dv6tsvbN6tFTSBP7y4etDoXqd5Q",
  "key18": "4YhXmA7JdCeExKW4SFRT6a9YA37VABqRnVRc6YfAnqUFowYpH7RsAZnMFGtwjvgjcwQai1G1puArtvy74yNWjUyK",
  "key19": "2mH5LX6AAKwounWp7xy9cZpKd8xcWri3fGCPobt7njKZpsNznEYZ1HGs4SzZ7upkfpACSxqHEJ3spchFdMbaAmjL",
  "key20": "5xqj2dGkRGvLi4oRyv7sRgWPKb5himkqxG65b1jojUC9vfugx4TjzvZgEP1vBkAbiCJa3XP7FoxiDCoStvnbUE2p",
  "key21": "3huvrvDeWkuknTspjKhgRUzwkg49N1CqcE9Ufa6MfoT6qAD9U4UstvuafPEkrCjPzD9nyiHr8cZnNBfUNjfVA9jy",
  "key22": "3pL4nLR7PABmusvuptMYVCGjDLn1sbYEDnCS2xtJ8huzvsthopLDf11su65vfAarp9DvpaToFY7cNTEi1tveF14p",
  "key23": "3ginedDwpg2zsSBB73hk14BqfCpxA4aQC2ae4saMU3h2GVVazhZxV6xwhgxWURBikjfKLtbfBsf6k22i6xHVwvuj",
  "key24": "5h5qXZkZ5PGAxpf5mgJdqBKWxiyi5Zd6ZmujiQFo5LLC7GPNBSCZV3GxazcnXnqBxawnBWKRDCXXVTKwNvtc8CnD",
  "key25": "3Ci6UEguMk2SUD9dvaBucYnH4GYmRGeqjyy8HfSQzz8ToM7SWperQnVqMYEC1ATo7vtH5KnvShpet15JpBURfH3U",
  "key26": "3dZ8vx1YB6nQKxKfuq4k1CPNbJGnxN7RhpHsDtF8hfukASARkoDbw3itzzciKfLZyZzNgY25Ne77VnTGWCCyCTna",
  "key27": "Lt5iCg3V3eDTFDz59dSiwiv6gnBcSjggDCDAVh2GNVea2qH6N6C4PKAJLwZLChQRoHrZqU3wEUL768dWKCRcNp3",
  "key28": "5efv4mKHAiRdLpMaf6TR7EmFWuqxoutentDnZWd9Cp3tDbeEFibtqRadKKgWJYRDBB9zggiYgR1yP9XcXyze6NE5",
  "key29": "dnCry1RcH8tCZU2j3aJFaqYwkrQuLv1mu9buCUokgW7ijKCYGSzn6ByLbFEnJCsLayxAf7hn5uzMDsio8697ptJ",
  "key30": "49Bqn48qewvV2gZ8GG31pBxS6Mbw8wg5hN8fBMyPdf3SmKNDtbETDsCjG9JGVoAW8vUfKuNmXurFqUhu13g19bkP",
  "key31": "3SUMKCDRLnqo3VmVV42kEx1qViBK6WwfjyBm2mamhienmo3J74tFEUrrNBxVE28rjwTpLaPARqLZ1ezxiMPuvfZq",
  "key32": "C8QZEApYFiVbSCEA87fDPGYprUGJBm96TgJwyuQt5h2swB2EiS7apdpmo3Ho5MVmmeTD8GpGcXW1TnPxEJdJWUh",
  "key33": "3FUYzpK9fjXXSJMaXngQabupiqMBTYNxSnCPBXfq3Xq9n6KyJ4zxhkjWBwAjgrcmvUyAntt87T3kbnFEMLTmWTcz",
  "key34": "4fbMSenFs2REQwRsPDWVDLU5GMA7LGdYva9p7kEDxzZuvYBSAQVuTYZWhKxY8NSg1Si6pcagrFr4dKh8oXSVBaen",
  "key35": "63uJ1zUTjVWj72Jjo3ebYixZ7Dms16gbguYVpQ4RyB1yB2tRrkngQXiY569R56QH53H3D3vJVodLDLq86EamEoSj",
  "key36": "5TGnvTo6myrbKE6WaPP55fae4FDmPLxj9uYyD4b9QWRKyxWEbCTGyo1FVnRTGcWweqWfdhtc2JKFifviFygS6QVs",
  "key37": "3vnd61aYnWPUHvezb1vU6p9RiFJ6evEMxRdG4b4TnMbV1pKCZ9tPoYzEnFJ4m9Le6Q792dJvfs9p4gGhrXLvpk16"
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
