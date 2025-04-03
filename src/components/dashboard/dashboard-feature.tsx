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
    "3LNzh7roWgoVcQyHbbMxJomfD916rkeuuPqtahwKx5uWScUnscGf9NVMibHL7U1WXXWN9J6TGxA9KkDL2VrLGCGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63TFR8PDwKmVdzcrv73k7nnpgrWsKY4RJQmBoopRBP9QNsAnRzZ8FeitQjcH9jX54Z759aoFbhxA7q88UzM4StiT",
  "key1": "3Ng4RosCmowfNdF5Ncczo4fhfmn3u19Smb6YpjzxcQ7imearemwkB9QEhAYFNa5cV3C3K4fSiGdhmU6BvriqZL7v",
  "key2": "4uDHC8hNU5eMiTfxDueZbUriehqHnKiLFCb8SgC8Dz43cDdmvMmear4nGkUx6FFaD7GGkgZ36DYjjohvic2neabZ",
  "key3": "5i1chGSSyiFj7Xy4m6mrdxVyucPSr6sehLsHLtFrLYYuEyqZGuCYybKrAHnLuK3ZXMHVxXVNR9uQvRManeHZGywX",
  "key4": "2HewCZWWeWYmkfxUtb5aBpNw2pjGfseK21o8ndkrHQBh7WcioingDauarEnVXdqTeTWvNeWCgs27ZfrmKj1ZHgtg",
  "key5": "357zDJPwAekQuNFkDLsN5wHzKCr8qp75CMqkfBa73cyjCHoeCJ7ktv81f8gX8w6t1fuzku72DsHuPmZ2akTVbe1b",
  "key6": "5Gbii1LcdHp86dcAJfTdaJwgkBerXUt5CYjCtqxzspPniBdXZ8udPsgxGC8iMZfjP2TaHb7bgewQ8ZHXAfUq35c",
  "key7": "3yMP8HU4AfdGbXm2jZBLLucWMwfVzogoQdJwk6dosT2yGRCfKDX9qDYMtGeBMuU3Qg79N3S17FJxFcG9HcyoBooV",
  "key8": "4Jm655V4KWR8r4TygYAs6iEfr2LHpc1iZ8DggiLDXmDmnCKTYjFuaZTHxsnDM7waEMyG56tUWGFpVAYUkGGG8vPw",
  "key9": "3jxQKSFwzTV3bqS3oqm4QWeVDDF77sK6uT2u4jk2xSU2hw9xHDS6dJ11F6ATeZVjm42XA37JhgVyicmssKyY9nnG",
  "key10": "2Dtp6xsoo1MEieT4DCcYRUyDaFhCGL5kpoWL5PdK7RpDE8PgfFmU7A3vWDZUa563YtZaEjzzPum9o5R7dKVCTXuB",
  "key11": "3oqsEXf8EmWGadvnwsCLUjaVDo6841yatJsyzg9JuBisaNWxLPitJ95P1hdFDMrjvFs5JYSgPGUZc6nGSRhhbGds",
  "key12": "3TYuRGEW8JgRYvPw6VXMxxx27qBsLMpiZBvovQDrLii311uxorTqr535ZTjUizubuH8ejtUDSy1zJeGERioXBEJ3",
  "key13": "SLpM7u91jnNViGe3yaitNmohcYQ4wPcCNYjyHQBCNn4RCJCgrBp45qW4xDjUU8yqaefbiH9wRr4g6txVwatg1fJ",
  "key14": "2xFEo7DJbD4HzhApqfX6NrQaoPkN58XgGD63nN9r4dyPNfXGFh4Ska8V2cMT7i7299CoUo2XpLWX93UtevomJA3V",
  "key15": "3t9Lv81sBtsfL8H9NajgvuL25n8BHF44GYg7HgvR2C6N4nZrjhbnXB5N4AQQ9G8CqRBgCvS2HpLgz1Co6BrrNBCx",
  "key16": "5zfAwDWrEmNvRdi2tDAmc47PgZihNvKoLBzEF5MU6KNT4QDZ7GRpB44vjATtMhVEuFjd3jmcALqgmbVpULL8fZ64",
  "key17": "4vJXBMjYZmG4X9Ae8ZKSdzWvWuabee3zwDh29f2qH5o88vWyyc9GdpNyNGUz1LzQc7cho8baTXfXQtAbRGa4eSFc",
  "key18": "3RuEEQn1E6wc4RkF2q93euKX2toeB1FEehYoZH5Rf7Q9yotMwBpHoEad9vfHTWGCmsLYkKNfD62YbkW8SVUGqMeS",
  "key19": "QRNjxUj7KqY7DwLnHWgYQRzzQdVKTjr8ETjpXqfw9k2VYRVjpibpYR74QFBnYbzpebFhGArheHNKtPXZabfJzrE",
  "key20": "4c3MD9oVySCPLFJd4ViGAnUeWwaoTRXhfDHhioRAfEsmoHZFnBzKCc6SuVTnMfcdKkDTH4pRxEoLhMoUgbxwR5XT",
  "key21": "5oxWEu9UpyjndTWRavkA7UXYG6mu99ozmEdkLCKndmaBkBZV3944SbaRtxbk4a7r65xpjEWxgsQwVadQUQEmAdhy",
  "key22": "518AcsgABYJN8rxT1SqwYmzBeLq5b7QXNoPFXDLebjKc3UfYgrJKTrhXxHutnZrKKuUjiW2fr8NovhhXT1vhb3DH",
  "key23": "nki64eG5BZdfy4NxXgBjpYYTeAT4HehW76FFKvv8wcz2s2YQouNJdhsMLx4FBetSiuybb2yLTrfjvfzjFAyHNtF",
  "key24": "5vB662tAsBJ8Nj665gDBJMnjyXNCfaoWofJFCT1deFj8xs712WaCwZT4dcpMLK6ANAezgMH7XDgPbSASXWGa47eT",
  "key25": "5uXpEzRg8yn31NqruyGHQJTV2Xeqt3m652HuxkNSugJQfn7rAcbjNQecTaVABnwHoZkN8uNC4VS5fX1TPTLNwZcP",
  "key26": "2B2QwdDPQ38ryMfWsPRswFG7mxZC8E2P4o3LrtyznmpxYsCnKFLYMjvwZyUCATFq85GuTMk84yALrjPH3NSnvuft",
  "key27": "59sGg8j29bEpdk4dKzsTffCF482VRaWzoi4ufPT2tHUEPuzwiT95qU3ZnuGKNP7Ye9PAuQhrUvJ1fS1qEbuV1ts4",
  "key28": "4xbWJaTV4CNjUy1Pcz8KcZsEwfKcRh5soBVtEoEQPkBaenRF3dATrBZFxwwbvapTCVFDLsQXetbKDJFq62fKDxkD",
  "key29": "9v9QUKrYTAzoabybWfLWEqb6j2gx5mN21v8VdWoyXDPqK3eyDfLe2esipRcuArW6jPj2HoHoxoRb69qYd8d2coZ",
  "key30": "2rskBRLiy8AwFjnmCo6WJsic3ycGvGFg8JBEhixnvQjCPjz3wWRihBrSmWYf24t28vYwL4gTPriwYLn8BWL4uZP7",
  "key31": "47bJToVa9byoufdsecskRTYtKKk4er6aC8unKvn4b8VHiqcMSWBWtmJAMpY3jfaVrcL5eQ8F9JXUs9dgZXJU4q8z",
  "key32": "4aUWJ5c1YSm9zctsyDPwTCsMp2QwMfS8RfKd46iWJ763rCWhNL66h8Px2i5oeiEPuS3cCc88vHZyzKHV9g7g3VSd",
  "key33": "4NGjR1H7XCRJjqeGX13Z6bVXf8NAwkvrf17XkyULga6C9kHTyZXjsEMmxD8v9gjcaznPRFmCQqSnce4G3XBEeuou",
  "key34": "32odybTmBAf78XLrxSJobPqPzk2qYGMvmT77aY6Bc85qJ3RAJvqKt6L6Eg7YZZ37rMyoXWxLkwY17RiT879PNf3N",
  "key35": "5dBTuQigW6f8nXRKDW5B3Xu64usej1ajyZmtHHyEKGm66pNzxad7CM1vbJaWwQsK3rg8AAR1gCPQBML1h4mvqB4f",
  "key36": "5JV5L9LmTVaXCnjgwAthy1KqwBZ7dvDGwQAK4tsusxsXGpfJsu8kb1fXagLZRNgrqdmCXi1jKbu3okoHH22mKJ1i",
  "key37": "2MUZeKg7NX1ZqEBfqGqZAFfaXct6MaokqPFyD4WkKBEzPzoV1XNuw1fjbSXzhsMCvSX6Zog8seDUqJm1WbndjYQ",
  "key38": "4Zp6eA17bMnaySH2mKCoFRjkFPAzb3hGWPazdb7mCK7FMQASxKgZZfnM4NcifHwSVKfT6uRfqcXbF1e4uLRNfALR",
  "key39": "42CLArnmZGrJqWofd38DpquXSPZfERdCyvvHkDQmjwr85kn6pmVxmGvsrsMFPwyXtmf69Uirv4wx15ZBxjw6W9ds",
  "key40": "4vjqSMz6sy4JMLMpE6S878oVHTos5hfvRKinodFcMd9oBjFqeksJynJFZ4aLCZqjrPp7iGLyDwN51sozVSLFhC4w",
  "key41": "2EHZJUaRCeuFLEBnVRSx6HSes6PYda4BGfhLFfNztt11M1ukpBqEUjC7uzvP1qDspVZcytBKeyG5gm3cH5NWjLTc",
  "key42": "4duF4WXkLiGnMHiGAa8ZqhWQa3P6xgP1mjaFS8MYBw2P6p2T2KscVHe14ZCdXUZ2jzuBAtscULeap3vDSVW9bcdp",
  "key43": "4cgq4ZL9vsA58wgb4uhxrwdvSd2nhoxgRBMa2X6SGv5xY9bphka9UNGsqcmTfjWb4zez4QjfYRVdFipL5PZyvxrG"
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
