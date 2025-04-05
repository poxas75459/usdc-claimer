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
    "zT4YBxA5GvTerbKqz9pFqavu4Q74qv39mVGPSC1nRjsjXefABG4eatbU28pN96q6K8ik7pcre2PiiVunKPHhk37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UYf3JLY1BVyofuqqT24nDF18n7JfmtzKYXgMGoqTS9QcVacyMSMB9GR4XtHfjKfZ8MghrYPYDs5LuMRk8j8kMkV",
  "key1": "2ApsXsWRFztRuDBP77ZkjZMoWo8dBBrVQm3ScMPoHhEzbWQ9ThAkDJSnVp96EPSEnMJ41uqzGznKo7RswU3z97Zp",
  "key2": "3UpS9cpQqm8UuBrBmTBKTzu2vCzUGEtRqxGqng3k9KqWh9xxC6ovqzYVNoZc6kPXpXZSsmP4dRPiRWLEHBGphYaU",
  "key3": "2iiPopGsxiAYkv2mqkM94p78eR3dsiUTugEFWUvmDvepbqh1rdFJS64eoEqGNbZN1Jy1qA9pmYRBtAtFgRHq2R1U",
  "key4": "wNGZ3WALcRqUTz32wWgdznhbZt8tEh8h6xTojcmPVp84yQ8wDhSLhX1PJkFHErPTZLDiGMnMjdWETrpXMzsnhFS",
  "key5": "4qDhAukX4JsUMcLkaNz31JVb16f8Uszii2bHaDAwmbMyQfcPoaZQb5z6xUNLWFchCdHYzaLSrD13WrttHdj2pqJh",
  "key6": "58vyduFurXgsMnZh6PxNBy5eyScDcoXvGEKHPk1ncA5N1Wg77qmN1T4kWgi7CyxSfq1JcBXdRRubu3szCD1JG1F5",
  "key7": "4SnPUjzBEzNYUd6byHmPUxktGy8ZK2wyBksFt5tZ9Cyb6BNnGPm2mCeGJCiX33ti5RrpKCBwNyXna9HrCLm8Cr2D",
  "key8": "3obZpLbcZxMwL6Cw7e8Ma8AbtJV2VDddoqs2mh4pZpTfNzzbNxirhvSGGREsG3cCZ7yVNcWNzPsu9fSfK4ud3nis",
  "key9": "GjnJ899KPiVzHSvc2FW5A3qBxY4vZxt3Aj7GzxxZMHgscYmJiHQkCwmLG4u4nG8Fp3m7HjHzALBZ7bkZ1vDx85u",
  "key10": "3NF6hWrxfxzWkL7w9ZE59Zzx8pDhfEe7LdK8ickj9AfXaMg6JmR55MF7NCJsEcGNhUZaDUuBeCY4KMR6hSZKq3n8",
  "key11": "4vQbfGusvWRwhe6KQ81yMHBbbYenX8UcnwoCbi2WFYjpQbbj5EvzmavLBUbQPGeDei64QCXu9BdLFUysoB4N2ywB",
  "key12": "3xPrGhtZpEgo6zoLH2XFZMGiLrFxuh4JzzE3mqT4nLY6cEncRVb1Fgid8yMJdQEThYQwExub43WTJUVdgsZgTvch",
  "key13": "2RMfpVYCez76FQHkwKaxb8jNKw3YbcVSdDDaRrsSypCKzFccQgb4H3o6Z6AKTho56HQgueSisfzufvp59JF1ctcP",
  "key14": "52dAtarkZ6e1YCmt3Tjvbo4zdaCKcbRXa4xRka8yNh2uKhytRsxPLg5RL4VjEJ7GSzuMHTEn1YVLRMauMyeiZg6v",
  "key15": "2KaCRF7KBYdwnWD8gwcVahzyQT5W45FnN8V7HRhMpXaP6u3JSFux2eerKQ4iZU93NzzTPuBdWTyjLREgHKqbuvtB",
  "key16": "3prTScGXwaXQV1RH1RLzTRYAgdkKe2vDNxmm9xsWjqapxJin2ns3u4mCMcqYMH4EmBFgdmhRmsnDxoWYi6YyAgDv",
  "key17": "4KDQR4Xb4K8Nitd4owRRr93Ffhv3FJV4SxXZ66o8UDkMvCW25PPE6PzTFdc5BJrfhc5YRWKhthc1thNLJoj4sp92",
  "key18": "4KDWEv6LY7XdA6Qtsfuqjh9HnNAQ11pn36Jr84URVCpHYtbUnNq9wFaYTVAWwV97QsPbc9x1DfQtwB4mEfyRhXkw",
  "key19": "5zRogsmCv1acwA5jB3KUB2zt8t3CaignPFwobh9sVxGo775uQVrAzDzjWoJgdWAsnJinkVymntrsk2e4AczUDAFy",
  "key20": "4xR92uuFmAEPX9VYUq61EZZRBEm8fkJKeNapbr8eEx1b1Hi17wETYEcJCTf9bmVMNa3cLMeZkStnRUjfwYCxismR",
  "key21": "5YJd3rT9HkvLerRJMyifeUJrPzAXog5gT1BjkMoNtcQZywPJzA56gpNRPBsXv6WannEDLKnA1gCZNXfEMYJ9Vem2",
  "key22": "32Tt7hgwD48PTmUVwNBSYgQ6M8qg9uTxjfwPXsW26cFoSdT3xa8PWAeQGHkwt868kbyzEgQxHPSVNhryCoVRCBe1",
  "key23": "5bMzd6KF6jDQnGttkb1SNrFTUdAXhNZQUUmcaTb76EpcnbSV5wkWohoHcTUMk6mRB5a86p652XEBr66WTUCD9st5",
  "key24": "28E5h23xK7Y3AydJEKdhFYUvUzHiYRkyYsdBjPMj8rZSgThTPUNdY3jyKqRgV5WGWqTmhPV43v2BDcfiZEwzCPwh",
  "key25": "56tMz9fPqM4te1zXXt4UBBbUzsTDL8ZRmxBbQyCudaFrRqbqeYW9M8V7iYGCLaGGC3pugLFpUREN8QfpmE2ipnYv",
  "key26": "4dgBoEv2xXoy9UDg7oCWRQtPFoLKWh3N3FY945rVotVjw1D5nf9hrvRYvSwApkqBwEwpr4Yes6znuikuKu9UcSUk",
  "key27": "kbCSuRZaNWdCVkY2fu9Tp9ixYFJPoZhYdC8GF1YATo8on45kXEJ6S9WuL8aMSz9CgzCLnCnUbF8ELJFsAVRGYJ1",
  "key28": "438fg3A81QFhmYcSTpf5CzceqMz8E2i3Ko5Awnv8DG81Mrw9fBHcaVvEYfGP3orWhWs6vYPuA9akoEuZH3weJWYE",
  "key29": "3txpNZUJe21o1yoM2XZfhSqzo6d1cB4o2JrbG1LC3purGJJUWtZk2VHP3451iKbrFvWPkp27VjgposeXfmiT6VqA",
  "key30": "38Rz4K8YnTzwGowXW7Wd2q8s8qDeSXBJYEjGZzBjivXL3P27mTwdtcRZns2KQ4Gf7dzDhccqHAsDqy5RHwM1Vbym",
  "key31": "MjiPgx4uhp6wz5cBA96omkFJhd1U3UQPnyhRZnGLGtiM4C76LXDHJPuR6wQypE92SKMoapi5raTEMX38qEq6j3u",
  "key32": "2SEwCmwmeBj56dQtJ8K8KZtU4s43DpYTvoR7yoncFgjVWGbXAFv7dSFyoSJzjH4wwe1NbtCiC35fwAHAn2HH7A6N",
  "key33": "4iWQ5NtA1nzd5gvXy9nL8ffzd6BhiKn6vhG5YWtHn7C9WtSqtLjzc6aLeGEV1Nsr7gEY3gMk1WXW9JZCTrAGAMjv",
  "key34": "5PhqExuMb26LvinKiKX4PBKTQt6rutdLzh59LVUuctg4nTmDz7rtr3AMcPasyVaFB6ecUExHLSXGc2arTk2wa3U6",
  "key35": "4yhCiF6KnEjbWBR1fwodZaywdjsEk6N564jah9n7Tht91yW5UPGcai4Enjz4XMcJdMm5NYnsPaLhGJMjj8fXP3Cz",
  "key36": "5qe2CWb93qLEueM8d8ZbGyiFAZt9WQFEb3NtnrBV5wDxQGKSbmrHooPNBFDAfRtBVnMqTYXBmHjK2KwdMfzGPGfp",
  "key37": "2pAz8sxfpDKHF3sijVhkKWgDTrFLyBxpK2BgDPZfMNCtV6KxCGQxCVxS1tsnYon9D6p8AagPFBLhdrbyZYAmVswk",
  "key38": "hn95LizeJ9LCLAWRNne1bSwmaJJFgBXNRkS3YFm9RDE87nreEBVvGA19dbnwMHEdV7GDkPTNH2UyodXexxrBtYV",
  "key39": "KJRRteNsDhSFTkj1S3JxM7fvecYDnaPoZMoSvYoZwM4kQtjAPFpEGtBNunY5HF9kfuuwmn65U5PraaJQdAJeHxA",
  "key40": "4AU1jn3bcnraczMU2GhmUs4kJM7VoVroxof2vzzi2y88pQzpyyEFnTSyJ5e9uWQotoZXMNMmuaK4P8CRHyPoLcm2",
  "key41": "4z8DdRhwL5NGvUP8gXGy4odwxDsUWxa3jCt5KRJ1ki54mT6b1v269Ua3zBhoQf5mUuZPuGmThdcWYc6vTu5QBKLs",
  "key42": "33gHbkwe5z1TdfCSFzh3Ve4qt1DnLX2qXV27HmewvWTFcJF3N4G3tRvfc8NNf5oMRc6Vt2RJfHCruErUVFE9nGYG",
  "key43": "4wgVnU8hCnSnZDm6Ce45aiYZt2oVB2G6An7idP3sgb6LmcBZBtWekB1ioG1P53fyFxnLrPF2AvsupcU9SwXcudvv"
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
