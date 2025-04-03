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
    "HDes8RXhkT6sEXTaoZhru9mgzoWR9aQzeTipCfejEz44tUmTdryx2HusApDQbmDhMFwYyzAb4GDxggesYuyMyR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vuyGPHu848UFs7Rz7U5MHyN2vk6oNCmgbbita5JMzLagUCCA576uz4NBaEBvrbCh2XaKAKiamRtkQJQ4Y7jWZHM",
  "key1": "4EjB9a9mJaHVsVaHCCSdMDm2FkejCF4FwnBKgovpRjh1mnyhomjnUKFYGDbkrt6zVLaKRNKrKKyGgntFYYrreHeH",
  "key2": "5rBrEKKy2kEPXJCS1Nd9Tzbvf9v6R9ydqP4XbMojBhYui6WSFXEn6C6TPvsCq9NcXD9bTvKErkXecxeMxPwBGing",
  "key3": "ec7tfxS7iLTCmyQUpDb2GtoxSXa175kZN4KLcTEq5dZrs8Gr4seWHmKS8PktZJQs1kUFZKtJf4NpU98XqY5yU4r",
  "key4": "2vyMU9ptmee1MgHhNGe8MvnJiNPjSV3jrQPnpEsTgSciTTqUq9EqaQ6cSZGvNSHoAo2WLAFeR3fgL7QniEV7n2yQ",
  "key5": "4hfBktDLxznmMSXTS7SWB6y1cFxUJ1JNKqw8dtkMpAriq4PsXLjiPaaniC9Rqa8P44jDQ1EEuQDsBZgXaULQv29Z",
  "key6": "2HpWSnxgr2HYC7VjuHLc3AKLHjjAVi1ZLBpEV7jT9Mk1VCJCFSM7PaeuhXSDqv38QvXR6PWYQQypFa5pQEMEHJrc",
  "key7": "kEMpWRXdToRVnrY93oHP1GvxyhyERKbZHSgCAtGjcPakrPpRvsw6UhiuqtSckuH1NSihvtheF317sfDW4jh2wtc",
  "key8": "38j1BZmfFqXuKaBbnpjeAQpxZpSJCKgEDR3i52mriXgZX68AL1scLqyt2FBK7HUPp6LdqyYnXFCGx2pPpEeqA7Md",
  "key9": "43aoZrHbcNFM9KhDepmTj1aCH2RMsPrVW6XyviQyoPiehV7hRTDcnE322hdqDQd4dxRsMqqSWjVMgW6m8EtoQzgk",
  "key10": "WToswa4HQBaLoMTuzHxg7V4RmvdbdP7daDtjz59TgcnXcPERtKg8jwyaTSW5w1fcNByyBjrSncBoRC6exoc1jKF",
  "key11": "AVaEbhB2nvGG3FCuj69qmXrUR4T9CJ9vrP5NAbW7TNinnSfJnynjqmJt17eixmgqtz2QVDmJbEi2zSr6ERjdfhe",
  "key12": "45bQ6iWEhuBP6HvQ7JU6NLJGBJ1HsN2oTFXPfmf9fAX6Rh2kkgL8svbdYoe7nExjzY3QPhzMz4gbHprjTVV5GjYw",
  "key13": "5tbFiywA4zgof3x3YBEy67kiupLyqe4CBLhpy5KYPuLzxNGFux6NvdWbA4z62UNyKNgcvqbAjSsGowRMcddoBY8c",
  "key14": "5Qb7toia5fWuCDkAyAMmptXHVzf2XFr3HBFHBnGcaTU7iXKWbZ6crHdwYCkpVcc4dRNat4RkFZG2QvGsKbksnttr",
  "key15": "3QYLQiTDxRRqNPkrew5dYWdDrtqT5ndWGXkKwQS4GyokJN71ADSFVEgru3WpDGX499NaYt1E3qAX7U846Kemuh41",
  "key16": "mWQ6wdProxRprZ9t1K56XKAVrbqvHKW8r5xWxTVdxyYNhRasWwedoaAE2DbopArD5xA6r9CNCjmPo8RfHqEPsap",
  "key17": "5A5M2cdk3vdR5NAgJagd1Y9WnS6F177PGkjJunbizqg7k6rgJzKTp1UfTeNbRQSJpd5vsuboKPDBJuM79CnntBuF",
  "key18": "5WhWFiGPERDsabBqUCVP9U9UrJejiZhH2nWWVfxnERRLzHYGDQqByvqU23wvtecr5DnJK3eS1SJZtiKGd4L1nJWK",
  "key19": "46HZuGs5sjznVuoH7ffx7cWQuDWKHJWbNjT51G3TiETdKf7EL1dCNe2MX9GKbGmWSPYmCSEVQko8Quo5dYCkhhDN",
  "key20": "3Xt7WN4GZKz5LVmVJmb6NTEV8VKJygbAc4hzH9JBSp3M5CMorst4Ka2GgmGo6x2XxXHxctz2pVWFzTQsDHZR8D3W",
  "key21": "xqvjnkz5rQmYbYsUi4KdSU4gtxmVPRENjozNSPiLcd3MEvPwPaXj9eaTXWgkqesV9r7MFFY9X666J5ConzFXATJ",
  "key22": "5DxPEKCmqbXg7jf261dZnbGbc5LGWBZFVq2H6qoxrrrVUNPSrBB9LZtewiEBEaueXhYM7XD46qm8rcuARqzJy595",
  "key23": "2WTL7e6VmoEEqbfC7abGaTtBZahbtfxAJPxEHqbqJ5usM7Nrudsg7zjvEWeYTfAmKp6xriiugUriCt7HANDU6ojw",
  "key24": "5WF9HjnFgeyZYkHudVQwoha7TGEkdNjfPzPpDQWYnwjts8JF3jCfz4Xa2k2Szp2oTBfX9kUi5h1hQE6yGM2AsKFS",
  "key25": "5q6StJXn7rvfRdqtuGR7kAmwJh9HhRYUTvCCVTbRuURKnAfTh5A6AwPoisp4r3YZ2eKpFi76nj8wyjiUEcJHm5ca",
  "key26": "5rbwPqBayLrf8Zygm6EFHLv8gr47WxQoXMLCZxBqYK5MFyKdea16L5v6mqLz1MNHMaz1PApuM1ujhZWQ7EWS28jW",
  "key27": "5e1Vw3vZrF1FvLZekJG4et2SgkhQx3YqdmK5JFPp4S8bS4eKowp26oXmpL2K9Fukv4uUuEhwTfN1ebiqqu5i1mBi",
  "key28": "3a6pDXxgFfpvp6LrD5yyRtkbbzbXmf4Ue9jqqv2sWTEfzDw5GGf2mWjNfxGHkNqejQcmqhb6px6LjZNKH67UFoMJ",
  "key29": "3EFrsPxTVgyY9w8M73KaSTa5JYbBD8zrqsPWvSvVuzAMXCjsRztV1ibHVzxSAKTXZCbYu2kPT4H9Ss6WM78jKzYX",
  "key30": "3AyqNPmeyrBMpU1JxQP2nVDkhaNgA4bn9y9SvggHbACpiU9GFPMCcJwc4MdpCdnMhhJqeunX5rNAeqAPWKCY8Cye",
  "key31": "4TGNpo6GpHDARLRxvekwhqbcEt6rxkUHtiDfYtfhTWSb1EgEn2dc5unWA6R9fWaPSq511EM87zeQWtK5wvcJ2pWW",
  "key32": "5TrmB1d5JioWJvMt8iCsRJhTiqS5YdcpKMpMcMpfnAMKfTYTZisS8bmLbqJvtpwGxtwFFDGskaL6i3JiBKpV969B",
  "key33": "4GTzWTgrQGCEP63ks6YiW54m5Yn11m9arabAVM6nChfWrjpYc8Z3BcLLyekB1DNKnuPvE3MBe1ADGhCtD4SFwp33",
  "key34": "4CMUMNemGD8hhEMGQiMbm76oKQvHQRZHAG41A4HCwLCqtejfdjN2mkqA1NyhFdye4RH5vFAjoY1uySC5txVUoL1q",
  "key35": "5FGnuAJNyCQ2sRNxvczppTP1fULxUnM2vYoBpLnAeMKn44bDKhnjcZBu7RnvhntkxVkUcXwytSbp7Cub8aGgeBAJ",
  "key36": "2pYNnRaCwBLKMztUJAYnaprM1ueY1Y87U9gxJ34zvzJ212FTCMaD7bYg8wriJLGP4YGHZTLQcockuZuicRR5LUSN",
  "key37": "3rhr4FkxYGmTHZaKeowA21ftNNgt8X54dsarvNnA6s5Tiq8qMyrTreLfPEZqSYVE7n4zeX1vHHAum4CQ7cniqfu3",
  "key38": "47yuPfuhrKLNLbci3v5BFuuN3fnjvs6DBpPWd8NMzeto6ZtxGpKwQcwDQEo1wsFi7TYfMPJUREECq9hLw13exNkG",
  "key39": "3iDSgSZnhwJLSfMzZyiVFVmFCYqVXkAaJr9Jakhb7QgNTCVsbT7XB8hAVeKo8zuWwrBMK8RfCvWNn1fZQkR7oDn7",
  "key40": "VeQVVfugC7ghqGZ8ttqnrg1ZhaLGNkMUw3ALE3hJwNjJ1y9ihnXXN45FKAsCGztyYpPj2eRXAL63Nrts7tQ5oXB",
  "key41": "5XvhVApHGCH6B2qMFERwpiXtxHSbggHZfe8vApCjR7H6Tegdq5HpWut3gYP8hTqC3wzcyFHwzCE41XjtocMrYvM2"
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
