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
    "2ssYC5BQkBvv7gx8RPhitSFVpcjTbVrPUjkrgtt8f1XSXaJgKRfv9VDrN1o5gkdhUMdYZKM6iqjLLj3Y7oRpDTs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3gtaxZEHz4BaBJrYBhDKFBDvnBG5p5N7knb6PxmkF892xNxnyYZCHWAwYxq4t2fjWyVWLZzWf3Gsf3RaQoQMTe",
  "key1": "35ezcbYLMqVeZ79JgaiM8ot6FM3AxKP1CZ5Mk5B5ctuEHTfbENETdnq9MnUNXov6wo728uMJ3ppa76WMyHCKFZhm",
  "key2": "Lpjxyk4BN23a5ia7iMNPfX1B96ZTeQw8C2bqvEZMZdXg9HeGZYcoQEhfygwDxyqvewWDXsMQnSzSCmuKgdXwZTH",
  "key3": "3FxMLN6SCvxoeE7m6GRi425XqTHzgKiYSksxji92YbxtEUAJT2ehRpXVSSnTgG4o3wqT5bqSBE18p8iY1LAJw5hx",
  "key4": "5SJpY1gb75iBbjMwh7pRGJbJ8cSnmrysD8vMS6ejDKwU6Mtwzizj5Ddy6qJD8Sd3RDjBFvKfEc7qwRSarS3aWmfv",
  "key5": "5RwUsmS3zYZrSW2SmAAhXi3KkMt3158GMKRTtehzaUbhBMNWfKMt1YWK2u9YtcVRr19M2GGjQGUEaYv5DfSfhYkB",
  "key6": "4LPd8cNuwsd9UdwsPA7R9Fjx6vQJGaUhSPUkzZ1hS8kZbdtny2Dah2f8TyRLR2m2NYfvEF8ZUQDM8hzESjLLTFt3",
  "key7": "2wqXTbhCuFtnZtQbvmhwjreC8N7QcN87w8pkvcHdL7TLmhjQ4ufCGoE6drVtjse9eNbP6BonWQnSa3CaniSYoaN6",
  "key8": "2Gn95NG9scuHZLMiwdh31Wgzu5gzFrSNGyRPxmYNrKa1pbDe6MqYpqXge2sLuA9HFU7RhBmT5JjMNAv9XbWK2oUC",
  "key9": "iUCcwcv9YQNdbrZV6GkLFcLQqrPgYiAQWSKQJoRiUMCMFe3ohR6p7uRsuUt5fKYVf2iBtDXvKkpQihVssj7xUBZ",
  "key10": "3tt4VdZpVunMFzLAtVWs1e89E6UFW1cboeD6jNQfU8cqFx3t42CPyrxJvyLsM8wonZv8K6rjADM1XUXXo636hskg",
  "key11": "5sEn7S1V1iAi9v6W3pDRHsSGwfvbbZWaDN9df21sC2Dx3ntATDk6jpfLawudW8ni3gkxF3sxRiLSApiU3NHVQuQp",
  "key12": "45KJSbCRycVECHBSkUy1A7JoBUNCndj9TLrT4Kt87aAbq2Rop2xgR8gR292kxaDr3UP3e9PsJjPFwJgUd2avmuGf",
  "key13": "2KFR3fdNWr1MzEh7hRtm3NbufrEcke53tdqJ8f8yqTUKgEo3NRsGmWG6fjQxshC5GDzgW49vnKJebUPaNuZHDfRh",
  "key14": "5KotrmTobhJ1soGH3JU395jTSBUCARgUxWmbgx5it7wB9CvtTSSagNhnfwULXvpRbMBpcz2jv6QQhPvY9nvAJbkj",
  "key15": "3xBwNfxGaabgdAzbWBSwFC7YUUeaYfaGVVg2YXcTuD3T4SYANc9qSRGvdATMK1RWwUcgLafa4aSHC9qHmd4okaFU",
  "key16": "KAVtrcWHW7KWQGTz1nhzkQ7TyucqVM6xn5HMFuGSzAvVsArxLDATzmqxKvx8JGqMc642xJaUNLkuddqZQtgcNBA",
  "key17": "2cHerdnrhFE6frzZMhikQJ7DsRq2KpLjAEQc1MET5PqsmZjfFg36NH42V4mySTWvVFxzBk6x6iYu8UfqDCgSkxCB",
  "key18": "291dBTwFt6x8g2CXLDis6gtWkNCFpmRC58Z4pe5pPM8uJJzFxwSJ6PPiqi3xvR5BJztzw41Skhp1FWMmNPPkFYdB",
  "key19": "2KRZeSNVvPGvpXCdV9R2PwvgGdpM3MibvieryHQE3mSJU8gSaktLVx229zgXpdgGmRSPX9hDukD2YAqKkuvieEAV",
  "key20": "5ANeohNiNrcScxhzYbdkT7JkTmCf5461RbJ84MgV3UbLwXVSzdJweLD6S4CrRnJyQi3AVHrb6MUHcfkUN4Xq6Z7F",
  "key21": "5Tc4KzXscVs4GyTxyDCjgsCV6gokZLsUrgffpkapweVjDor8aadjNMHaUUt9PgP4NTeUgMvGMe7uvcog5xHoD1gV",
  "key22": "4knAC5iqnWjZsZKWc7oCXs8mxqDrEXSV8GsNUqaKUNtMTsyHyvNgFfMwW5ZoHbGsiFiHNxQBxp25iBUkcWCvPTsp",
  "key23": "3oour92NNsVPdgQEJGcNXNwvchyT5mCLeeQfDZWwRWBMgWe7SSuQFWckHjKLk75qUWRPfFnrotidNoZ7GUNxTezD",
  "key24": "59yQpdgf12aSBPbZRbSi9sMTjBdsmCiywdtbRJgoGd2f2iP8MJgjCA1xQPqZrguEGTNqRX6wngU8bqfu9v2GkH77",
  "key25": "3rgHSVropPn46mpDsxqBfdBsUq9MEDGj6DxKDm1ERvHRSrPjg6QMb41iLpqX4yrejc5CwueD31oe7RgTJyL4TeNi",
  "key26": "34QU1oXRiGnDQ7aBUPEikyMrZTGbhk7T3uDqiWvfK8R12H3ryoJUAfbfMTe8n8fRvusCeGGZFu3zf17bBkoP7fAC",
  "key27": "2NoVTQNsZyKdHCN379ynwUGAszT4BKVh6fwqKe2GEt5H6fyHb5ghCxHy2Jii76YMMaNrvcbgePSysUG57FmipGvF",
  "key28": "61tas4r5i7WxU3GU13PW5aX287TaLYfphHM3tCNiwAMmX1oPBLCsycEnUwuY5LACHvdQRxVdj5ftT2e1xGwBgz5M",
  "key29": "4b5FQoiwH6uJP2SXj5BB37BAnwAm3geaPNthQi47TqgiV8C72m4vYeieCWYfT5QwXi7TfEEbyk2Fj7MaP837qaQH",
  "key30": "9X45fzAGVSdjeSPeVivkVS7LgemDaYtXVqiWDDDHTKTs9WUJmKUGUizEtgG1Pdq7JevCConhYddFXauXx9pbDcM",
  "key31": "4zhNXRb97maZA8rC1W23SvZx8XU1zRzM1QDDJiJFK3kXLWUKbYTiXd62WPoemBLfbX9PGnsFGRibdmufwdXr1ggC",
  "key32": "2oW7JZJrq6X2ymKehNfzmFaTLPqqCXyrw8ASq8QEAEGZB6tmZmpuQM87KsigWJudZvtca8yZJZUCZwDGAEF7d6eD",
  "key33": "vqDahdzZBGZE9tz3hShuKQPZfXTjN8kgmXKJx8VMtkes93xgcPVMmMMTC3CBMccSLwMcshnYTe7rCC9KNseMKtF",
  "key34": "4KS2d81pMy5VzPPmJoVjXvm1a1etbm7uGwgLcTj1dp5XrC96RBABVwVA1f6dmD6aEpY6VgMg8z51LJPetFHiiQHA",
  "key35": "DHWXPfxQ1sdpEzBRSMBNufkc3DJZqJmAV9X9Pg2gEfNQkgfX4cu9HrT64UmhZ4ebYxkPwdnCSh3qi5H28fvhrGc",
  "key36": "3fzDfXmZBQPWa4xpZk9T3d8LsXgNoPLgmKRNBuxvHyRzZAhE754pEANTPtXAi4ChTBpqeXMoT8rsiMeRe7eZbBfZ",
  "key37": "V51LdkVTqtbUVX4Mvc7dtxAcAyKNRzQrzMgh36K3ZteX6WAwQFSj5PJrb2RRWztaku8GBTgJ1pfHGNPaBYv7UDM",
  "key38": "2vP2D72udN5waCfermjgWZguFDiicE9v8u4nhaYFungJDHBYYYTnabETFc8B9th7N95ndtANKS111NtvCn62DXqT",
  "key39": "eSAJSUNQHTKP7uPFsxHdvpQcK5cybM2f7yzfQ9j4VW4u29d1oRtsVnogUHoWcLtxxDLiGArNrfo3muTF5gsZ81p",
  "key40": "4RKH48dKAjhk8TjUGHEygW4CK2h4Hs18MMbkqUcxgqYcwmjaQNqesJYsiTA7ZMRoKpBEhxuVX16G2HTG2mmn9vSy"
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
