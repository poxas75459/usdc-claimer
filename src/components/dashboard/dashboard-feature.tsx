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
    "AW6xtaKtg4sRpNaF5Xf788pT2coAmEcCUX1da88AwscfX5X6c8353RTAyFKxorrHvv2ZpN1LudDhy3iJA2w3Zoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47RUdYZYBDdK78zrhwQvovJJULZHLRotfxLXuBRdDqjjT2hspVUt75VtW4s4pUFGnRMThSPV8x6Vd5wWHWMHYJik",
  "key1": "2anwJPMXYNTR2xpvRe96uZNT3bMjKzGzQfNoj5Jvj5PMEGgGwcRq7AjQtAKMF7Vyhzxitpk8B7pKaaSahR7u2mAQ",
  "key2": "3URxM37qvwbGkEW5AYSTWxcJ8acRVBn45H1aQqQQxgxF1MwSoYKiT784qRJquZgwUEQdJkm3K5oG6o4yLEW4rQqu",
  "key3": "4NwcpwVVMfzGEweRqJ2mj2jD4jKEVxYJFuhnK4k3cZUu4oXpNcrkztPboaYWy6XK4vs4NsjW1q6LjDZg6nPK3S8E",
  "key4": "gnuHLhJLLwKqfRoxRifKmYAnwFPSNDLAauS1jqsP9PpHVkMmxCtTe35uepvTjoqMKDeeURipxL5rnZMggZzsjrR",
  "key5": "Psx66NKY3i1gtG59QM8ZRmSH7QCns4T2NQNK3yDfcGUz921oquqawF2apeH9VCiwgyyUQbgRcYXMqyMYzbLFDdJ",
  "key6": "4J6x5ehQuoshSTDDf7LWCBWFBPPEbLoYgTBRva1bUebTwuLaxo7RXHM3zsKDVYHQ3x1vEvPJTWj9eQYj1apS28sV",
  "key7": "3mVfdXzrXDKguLgnvDQY67bKMJSNci9SFhmkCHNoU2wz42C8QZtwzUWCgSuy5Y39SUgjRGbv8jgomnhYHbgKhQyi",
  "key8": "3ct7iYXZzBmbKgFPEVFzZjnCx6iapNgpLJoLAJKW24A59r4HmQ7uJrAMjK2RnMvNKFPBv3H4pTa22Y3hsUssiQci",
  "key9": "5hEcmvPNBFtqp6RioF2hsTDEPzq3wYUx4JZha9DiTEytqdTybpUU19jCoQ8NRWXVhzpghm7G4BqaVQVJu95MXuPS",
  "key10": "5j4LpmPa6DqFCBeYULkiwsPY2qcCxKPhViP4ZpUrCeWpSLqFYpCk7CVmYzrWuVekVkcpaiDns8s6g88t1bARRL98",
  "key11": "2WGWKyT1bHUViF31PaSJ188XEpYM4voMUo4JMQ2eWUykfChhSZiAP2bhJfe3i9HYo9sKTCtA755WtuSUPYXi9Hzg",
  "key12": "4FiYLV1wbG69Ta55WQt6oBnFAU7377urveSfU9JUzxLS7N4yTQ2cyi3gMGWxi64caV8Y6rfdxTM6is4yd7p1jxLS",
  "key13": "39XR1YhsCSp2tx3ic2Wz7U58YomyD35yxLPePXtQKHo1yPpo78kEJpvEEpi5beZGrZBvYuuxpn3nUzcax5Y23xQs",
  "key14": "5Fmtptemivn5EgEuhRw7Pbn5xdFx4ktmywef5ThJPL49RuSgwabyGabd2HHBdJvz7TNQV8ZgofSengY2Fa8srr9B",
  "key15": "ceem65BCDpNZnCn2h4aEWNxvpxSj2DjnYUB7o4oeDoV2n1QrjXmFGQixkMuWrQw7gEz18d5hXcHi2ymCZyGRAbf",
  "key16": "4MFAqqnB833UnyMcayKmEY9qpLFiFMVPb3a4nWKoM3ZAC7ze6a16hJwALqbB4QMqaVcXiNnaJ3yabpjQzHJk7KAt",
  "key17": "2Vm4zg3i1uLq1kEkpQByvoHFDxvPwBP5bGPf1up1X3Bz2vbvGecT6DbvvTzZaSbFF5xwyGtintUCZGdjc39UGjW8",
  "key18": "2XqmmvfckDC9iJUWL6i3vocLAifG9GHBqTyJs99tqVtPPG5wwSS2UhqEzGPfufguFaKfjkG5TVJRSggAoAWcstTH",
  "key19": "3BEsF99H86jUYtrLo9q9U1rkrh3XWUW9d3X4xgkvdgsR8iiuNPc9Cc3t6aqQNViKbUuQrrQLAVrRYV9M8TraJnnE",
  "key20": "4pp3zm26YMhpU5tNRxGQ8AESdi7kE54ygMtT7c8GVm8byJnpFhKQ38nvooTfT37g9ucq9J5KXuHK9DZkecxLSQp1",
  "key21": "in35rRLHaB29F1rYFUmHp452UN2iCJWs2vi2FFncYTPL2w6Q5vzr13CHXb3w2N28gYJ8x8FqNKXwwvbN7tyBM3K",
  "key22": "5pTn8ju1drRedhXmDf1LDhevxqG6FKCVyJFnomn1tVLDN9gCxaQH1XQvRKqcEfvfaheeaq64QqhFGTgJVp2WwnXR",
  "key23": "67bcSkJyib8hU3f7iyeNs2dc5KHNm3GssvZvNAx9x5TqhncPWdWigsd4RrGx4MYVZyXS9NJyNg2fTayuuxrJLY7x",
  "key24": "it5QBqcgVRNjQ1WNaxNY5EEHEf6SNQiuN32VwgNMRG9JWVyKYLBCw2YH31eR12ruiihb4QFtDsTJ91S9Yrv2nxD",
  "key25": "2HLmXg43jDaBoo5Pi7P2bakkpidHXeWMG5LCUK7FCUtx1SumoUSBEVg4LBZHdWyVRZUBhQbaA1bu1Nw9BxAwCDsu",
  "key26": "2xzipd3ssfJsyFX4DzTjVKWJyph5vQ351s5j6zQ9nKNCHU3L3uS5TTyZ77evpcCsvxEdQdCzUtP32wtz8zHs6oF5",
  "key27": "MrKsTWQxFzh2JTzkJns3S5ZubxnGX8wvg8eD2kegWNYrAAsNJHzwDMKvMo4x94skNrNZTquxuaYnnFtjJxSHh7z",
  "key28": "5EJGZ5oLfwBpgRwnm6A7PZWebS4QtM5Rj1iyJp37EQqZNRJjqjBAkfGXGDNbTSbwwdTcFgnHBCLeMUJXUFqPt2Ns",
  "key29": "5dho9sac23K2fQ7UiYttFw4m6aDSPGujm2ZH4u3RS8i5JriBqKfhtoqHd9HxNe6HU2cCvZYFvPtFa6VppNE2tkWp",
  "key30": "qnVj91zMqWCSBkiC5dDuWzAkfYUhvdBGCpxCAu3bqf2VbnG8VT3wg6Rw9yCNCwZSW9hoE8Z7eFLXQZxfbYbfoHG",
  "key31": "3PoM85Q7E5YRSqLuZqoqkxhKFp4ekzz2fv4q6AgewFsvUp2M2Xdh2KGj1BUBvmtXhdxpceXUXrKELDAKR2W6hdNp",
  "key32": "5Eip5xkyAQrrD4M5JwX15b66GSoVw3oyJc7yT2v9Yf8jzJTNAGptkSqjbzgd3PXPXGXACSckxrSEhQN1qaJV7xUH",
  "key33": "3M9v1d6TnpehHCTAo3K21oxJhF1C8ZcR6rHyhtCsavVSp9FqF3PxRUPeNhSNfqL1m1M5FfhUzzCysqPZJw1mtdoT",
  "key34": "rNU5v36i3uVv7tZP4HcRQRJmXF75Q6rPkXwTZDTnqvwAy8fr3NdU9iSHs2ZPZ9arWEj6hGiuLCheBxPhH9idoQV",
  "key35": "5uGv58Yk9fK35KTCiEKyorFwUBS3hziGWaVZyxGvCVZjGRpj26isJYVbPcxM1nW4x86ed9gAzTKK2PgohbWEb5mG",
  "key36": "2e5a3Q4DP83321GF4B4tJESvyNNBexZLkoimYjiVwaXK537EyDyKdtGZZj8xomr6TtJ4BuykgVKtwNfShrgp21Es",
  "key37": "2zFD5VmdbBCyiHwMgunThHqof8se79FGpJCHmwZ5bw1LftaiHupTvGGSv69UmGMgjYnxmwXYNk3YFYB2ZJCoJ17j",
  "key38": "3Le7nvgarw43tXEPBrjKjCrsFEhEYH48euVKgew69VwTXQdQBFAfeBa18sKDe3vnJzJnCcu8NPTF2zpWTvtvprCH",
  "key39": "G5tb9UA9uUmjbXK7vhGyRMjvW7AHSNEzrWcJxSmmie6s9E7eJs7WnLkfjripNeRXAiMJ4ugWggDNnqjXgtePizx",
  "key40": "2hFAuDbr4eUbgAEDPAx4wvcFeBiCZ81BTGq4RmuUXrzaGVXGKv9vpwKutG5LTbys4zE1S8UJEGrU5cPdTWia3eXJ",
  "key41": "5cs1SfKzaUd3faY5NySSEtT6msUByCMcNLGeUMtTuBP2ZCaiRku6VbBgMAd5ezqfrq5AUvhrTKyYZRUw4MzB21gS",
  "key42": "58VpiT1ZN26Q18y2m2rrPkXMkYWzT8D4rJeJ31dJZAUcX7ocjXWAzbqEq1V2N2QV7QMTi9hWB31N3aHkGLRxjaSt",
  "key43": "5Q4iw3WDjjvNYoRzPEuic92H8HjB9ViFvE41kN2FQr3psXYUgYTQPq27ezT6jgtGYuDsZQTUT5Ah5sH8vR3Lhd1T",
  "key44": "2ZTDKawyCEp1qGgf6EUC7StFjSJssUzRDZFS1MRykVZnBxae5SLhKfjo74nRaiT6cA5vQyPLqrpGRUwAYPD7pKip",
  "key45": "5viivFYVhaDQ9iUhdscEAnFcqtnhZszm2TKr5pUVBijB1F3wsMdzKVRuZQh4bgVRdBuXytZicbcaymFukC1AhmWR",
  "key46": "4GehHFATm1rE38zWMcG9bPfjXTQ4zFE92k5FN8etYRFSj6iSyo1YwohPjE1mMepS5wCtwzzHYwrA1gpo7HiS4KVP"
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
