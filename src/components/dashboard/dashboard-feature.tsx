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
    "2THXM6qegkuhzPxBoye1CDD1rEs14p3wzeDLcEhmaLiNdZx1khZEJ3HgVM2yaFyDbBvUBWH6TueRaH5EhaTMcoAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ThbzGidmRMsPf2NckeQJEk7fUTsXPHPERBrLRGYQ3LQkseX1oU7qYN8ZPRWzUM9frMmWtBLZFMLVdG3WZ9py3Ap",
  "key1": "32RpCs6TtfgUJ6VHXy55DYDZhLDtdBfm5NxAk4mr52PWfoZE4qkkAYjo4QYAGpQFb4JWvFshvHCd7igQ1YzBL5BT",
  "key2": "5CpyTqmhP7aGYCvsFMEXn2ucv8pKEhsbC8B8qAqLaEd6YHpCWwtYewLmGsCEd6Q7xrhuuZhK7WNrmDASPLmCCByF",
  "key3": "5Ej2JENT1sCGFRvsSGQob86mTBR5seS1tqqa8sbjZhstt1WjPxHcfBVAcDingMpHANbEpmEn8YwEW3cDZ7M5DQz3",
  "key4": "aVgdSaZrwzFAjaqBdRf7W3Ztdw1UDBRCJGp3k5kq5CyhcjCRC7upox3THGYpAwTrshU8wtYLbLRwBJne1ZJHUfk",
  "key5": "4zgNZUoatH7NAc6takbnDfeWR3WyX4vSM8TDuBfagWxnYWDBe2S8rx18QahA2cVeNyFTVzJd19iS3DuoMB1z9muj",
  "key6": "DcgaCUXkhhdNXwe58msoWcYFb7MZA1J1JYh9pETHAugZha7YnTbp7w7PRf4jK2f1s1ddvKGH3DPFcuk7wSb5BAz",
  "key7": "4kvjW6ZfDsSEjcAf6K5d4f9RU5RpbkWSUjp1DScANfmwFTG5LgBgNEuzAAMApoYbe84CTV3rEYQsthHhMFh5fAEH",
  "key8": "5fLjgsSEfGiGSyrmmuMxdwPY4vVQ79Z5u5zbCC4ySASXDpLeDxB5sAtTa5aNPeTpCPAKT1DGzuftXN11urF9HfSA",
  "key9": "2pdYgnSQnn7zZnacQ9Jkbwoncg8eKj9hy955T7U299Rwc3s4ej7SHx95gk1CJhDvp4hzEvhg8ZkaCQRRaLwaymSv",
  "key10": "XZbpHKEm2TLTBcNmtaDZVFEKkNt2LimTyx3S9xmF7eYxFYqBmCArDYoFSN5oxfksYP2K1WjYFLndZ4ywZ2mVb92",
  "key11": "5tjcyEsvJX29fBU695hQQnz4SwVvxTZSsn2chMQopGgikZeGCceJFfVcVoXUWEabmVsF2nFRZAbgzPXV9LqrYgjK",
  "key12": "2YwnwEZ3FcbpiA3iycaHGbTkrDD2KAS2m7X5zoVLM3WLgTqSWsii7aGMDEEJZAnW5FDC7RMuSWUNpBVGdDrvrSoo",
  "key13": "5erRd3RsbdjW9HU8fs9wfQGY2W6SybfUrMT6k3ngZm12iemGMcs3LmBejAaSws1dcxZyQvUzsvcrfU1zzn5BrCoK",
  "key14": "4xA8eo5ZRDRZMvLQ1WMV62HVZ1kZ6QsADui8LqifQ7mCSV5GGVCsmvJN2bC7M87BGHNQnsMZ5ZCJ54DTTE5WC3ek",
  "key15": "5GuLUMnmohTxKxPYcmqMQncfZv2LMRudHLzsm35t4DupzXa4asnfmSK7p2QppTELGH53x9EsB6zAvDdQTTbsh3fq",
  "key16": "7C9rvWKuJ2sMNX2BCmoXHYXbjAhK1Y23CH2YCuWMP3zydg2CK92yPiU23SqbFgFFHQdUdnbmeqZPytteEmyEUyS",
  "key17": "5nF9Bn8E9h5LnQWioNgDHgLyDKyeDxX5XnytawYPQASizeVjm4GvxQpSzRpRY9NiGkPaLRChhGyQ1D9gqXYfJEAn",
  "key18": "3wXY79S659oXWwwgEouthVqabQT6URu17XHvvmCqM17waKq4evLhZv1AoJK99McKdLPYYNtxMGRKEb8DqijGdA7Z",
  "key19": "6hV7e8UNd3S2gD9GEWMjoFgXcjJ6WycVCb4e6omXRQ7VKtxJWFN76WtCQKQGwraSLbhHQukHuvg3KMWJvaFAHBv",
  "key20": "nMHkrRAH2Xs5Lx8rXxtVTSx3Uus9mYYvBPnUTujBDx5LkNxdjvod14AoLnyVPJ9zPcioXyFmvj2HQvGQX4T8vt2",
  "key21": "3JeCEBcAokgLeCnvzeMiyrmqW3sH7AySfvVSWtevuyKpSCxcG5rctuGoGLvajhmqPW8Ei4RR4zXrVMBQKSVxZY2T",
  "key22": "51eAwS9cjsjwp7PQJwxz6yGavHBWSo8dQprzpCvt92Z1kqYQ2En9vUgDJUsAE4vVzRwEFwpXhUBv5WqYwWQucx9G",
  "key23": "3Nv6yqZMC3vsVLZcRPM8cMdnHUFXhBpSRY5drkjfiEa6jaSdYF5upDPvaHNaYqbzrjvciBEaRSgvbt6Lt5kpohgQ",
  "key24": "FfoRGBTGjGAF1YQ3vUEsLsvebodvGckgHDFTuupatq4H9sUTJHLoajic17fZE9wzM6rnWRxSzM2j8b3DtW3eZPN",
  "key25": "2buoC14uTxzSpFkFyH5KkxYCKqnL6VbCTNcFXVXQqExVAVBSJdMRQxtcJgraX41x1rWF11DasTd1Rcvrc67AzSgL",
  "key26": "2xvokmDKGgXDXJPTvNqA7kXiFwPsoVrFreW2chBwUovfHkDN2RPs8vBfRw1HiSiRHJsWkTad7iXtvBbyMEyQdT2N",
  "key27": "4fUergSx2pVYumbkMkEVKbcUnVD5NdxPCmdY21ynsKGEEYsaKBTsqF7ye8PdzkYwsv2tD4a4cGMk82Vq6pm1YGzb",
  "key28": "mpGw5NEWTe499GW6FamJws7vSso2NtVZG3aPvFGWeuJgibuupj74vgyRLhc7nQNmTsZ7HucgBSthAxmWghjTcWZ",
  "key29": "bxzrM1GNSkExs6TSfmhbtnJ1pfc5nEfwUW1YtzuUD6mWpuJ3JyVajVjKpRBTSQK28J8ffuv9G937JtRcNz6Kkce",
  "key30": "44BYRfBECD3WG3NkPtqHJcEr1Zts8rCedSCr8FfGFqRyFTAiXEnsiCiFVWyjY1tvFdtNmDnqq4UTvGvhkHK164Jk",
  "key31": "MQjCKb8T5RCgppxVyX3DE4fK3J7G9CkxXMRGXDgXxW2NC7TmrgBhdvbLfK3RswbUqT68J1FQwcKy8DN71qjB4TU",
  "key32": "rDkqFShERcYqtnQ8Ga4kexRMCckJfnHqxYisrTP7MR3jLevNXwYikmvMVnLaV7anXfNyDCTGrggGq882jXgPA5h",
  "key33": "4k41UFYWwybbB4HmFxwgH397X1LTLxsGmu9fhJaHkuqqsAdxwXH7Y1qM7ADgF1t3wGqUG93mAqXrXWhkPbZUpFk6",
  "key34": "2NsRKovMgpDTDQd8EdGchyuPxFab5t5Rr5a4oKc7JwxYaqCZqzXaACMP8BY5Du4UiFvjurYXiiQMW3MsSp1Bcs56",
  "key35": "3R1bnrzftedXh3fTFeSPCiLUnE2TDKyzNgEo86QcEsdv1yUbqcqPenFnQDwEiqpPcmo2HoUL9QdY7VK6XmY75Dz4",
  "key36": "gciPK6Fusjq9sg9X5VUoTezbKE5bg18WtpSA1tnHVbJJ9XSrg8Bg47cnu4uK4jpE4Mj12nvQrKfKh4Hbf8tB3ih",
  "key37": "27vZtRXUSHAdc9gkvUSMbUDZqdewzMHHk6Pecq7Ve3SXax1MCTXDvBhKp8Bqm44kMcmyPzHYDaLZk86jAyHi3uVL"
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
