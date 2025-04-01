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
    "4Zb1ycTZuhHjvV4VwX3ame8VcyceR3gCVsii67PC4SrvYLSKDykdMy414fdt4AJZg7Szwi61qwDPaHokYgh92yxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5keSkSjLVkwxGGLFKbAyMg31nSS8X96BFoLpqLzMBMJSJH7mzqQdcn7RY9pmYcbQc8iFzqxJVEzdVpfmvNNsMSFQ",
  "key1": "5pcCwDBosZfDyA4sL7ez8QUC5Zy3yzuKrjtdUHQK3GDVdLsp1YGnX5SYBw1i8xaDLdHs4HRqG3EmdDpJUarqjVXc",
  "key2": "4phnZNv9WqHou6bSHka9BYRyjkQp7yLTXSSpGjqm6rQHVSxUQrEtCFRRrm7VbFpd4W94jxefqfzz5e7wNqXYH3VA",
  "key3": "5p8DugFVfNUjNHnRXss3xE25of5rkvGvux8GX614cPwSsCA15Xf3VgU9gLmVYwiaBkwXbB1yXBCkQqkF76A8Pv4u",
  "key4": "5nVF1HmnB7uf75ZYi5VGb5dBVRsN4DcaUvSNmk21G6u9UBJVGogJRCoX4gLxvkQpLX7B2tLtPw6kcQtSsAaNnr1T",
  "key5": "dpwu6SpWrgAML19FS86T3M7W92xNyTwEERfANLhkZ5RjuLZZipMDunESVyKNUvv2gQh4YQTiz6fBhUdCDKxQ7Yr",
  "key6": "5eVXmAwmzxPXXYL9YGAYHNm15auqxN9jwFSLhHWYNKX48HfBRmpvT5raXPYBYfjP3y8q5Wk7bavp8dNM4fvVjszP",
  "key7": "4n8JauFaAQc49s7bMToG761hdXWq74RjLssxZ5yhuuTJjj3s5aE8X5iJSjFZ8uAH13B6y9tg3Bi9YE8ESBYkRRa4",
  "key8": "d2vYcNa5g6hSsWPTF8qvwXctbWDTryenEc4yebBKSRPgYLKXeN8yCkSAMjYZwZm9XhR8BHT8Cs8DVYEGGb52you",
  "key9": "49fp9RgoujLBDFXiGBAvUEzH1KS6i87XfMgtNBLHbYNxuDEiMdNLj3eTQaYs1QcMWEheLWBDPTA8Z3s4bkGLxLwJ",
  "key10": "5DVCUdkD3kEz5cybcYsG8pTzzwoxMnS9iR92Ri3qsosNShRjQ54mXzsH8ayM1vECLBV7kNpdd6hA3cekNBmc5BtL",
  "key11": "2PuNRLDKqujenvK8y1k3zes9DGwVkB3wKRqBskGmJiHmm3K488SPUf9J8kiK7U6k3YNYwZVndFwD1A3CYCbKS1Vx",
  "key12": "4RtKpgbvPkWZpYtjaodrLtKNergWdR7rHo4KpvFKjNF3LZ3yBbirfU2kaL53neL9qt9thRaYwSavj5PEfSHGC2YP",
  "key13": "4aC29BQZkMrC1xKTEP8uUaKhnRFJhsJ1frxZJtrqf2SLiMQhZXhLespwhfedE3y6c1LHCeDjTbFoSvm5YoMw4dfC",
  "key14": "32qzdfM1zDAcF1EreJxbjRJKeaYZjHiriJ1wRjtWRXZMjHtdo1RPwRKPRW1L8wFrCd8bcBfvZHJvFrDBipKvZcGZ",
  "key15": "ueehQiZfv1LP7s6ZLtvbr71aprgjvncADuTn9qpcqPNej4SouHJAEQyCtA7Wfq7BdeXZuy29SigdjiZUmbYy7ET",
  "key16": "4CpLDRnJtLYsCDXaMBoBmHEaWCvZwayxjfi26FGLotduxmfz5BQPzPdtPsV8GZ9WFuUhUtiwtv5J9jynTFBYXvjL",
  "key17": "nAVL35Z6WUSw5bTa6695ApCqjxFMwjxgGdHEYx2KonioVxXDB9ZLb15WJCTE3Fnc2LM1sUkt79SQYj5N9cPKWF2",
  "key18": "5SZ6LSHdg4VcxsJUcVQXdNwK18V9dcmrXFqC1g6wY6nxhq2bN2VFsP3xbaynznUsekXVjnpgwALtaTzDP7N49BeK",
  "key19": "4yPvRi7XsH2tBttNkXgSu2kfSdoUrHuHEUAkdWmv2qbReGWXUutayEXaS7VUbj5fpK9BcyGgC5J9ogfBqwBeM7DS",
  "key20": "4M2eutmPo8GUizgnydscxNq3Tpvbw9ntwZXm3RuNxRk4tp5KAEP2vy19EYc4CoxeJHjxHGwt7BaJwP1ezeY3sjDv",
  "key21": "2qCj2a4wDwRVqxHJkkvSc9CMYy7SpExtYk4159fwDr2dZNQEtf8ymQed4xkdNiMFWTvnrPkvTizTYUAEQUabGdb9",
  "key22": "4pgpUhNGXqdjBqqNtCKeuApHosp1FWSw2bWtKTt7k6Rz8aWv7jhHJ1YCvZYjEpgRDQAkUDJ3Z5uN1Zogd6d9wjrc",
  "key23": "4yFGP5gUviqSLdPC4QbdXC8wdCAPTkX1zmgsRcEDdkWVAKALDonqxA3snYVVqsNk85FDw96Rx8cGMebwisDCA9xT",
  "key24": "3bcn6wkXS1PqwSLS9zVLH4Pt8kF5MN3myf3d5PWx3JSum8ZgX9UaZUpiq7XhJ5nmYCtKLWJprTrjVoboV8FTzP4p",
  "key25": "BAML1Exu6mCvV1CUPH6WFiwgHCct98cbfpbi9EfmwVe5Pj5eYiVq2W2bz55ATXN56cbtNigNSbiZ13Z46PfHknq",
  "key26": "35wUHcX4mQiLahxWYzwXmneKCCCr64BMrdHkkkNpwH9Lo3KWMWdcTPToRXTeFFaitPQpMExhL4S5EKbER9isTSRZ",
  "key27": "3PLgPJBvEV1hyDBEK6vwEmmhGXgcCrsrrL14EsiREBs2ECZZDYeJvbSCvT4bwU2s8gcxw1Koyg9YmBWUwMkQWBBD",
  "key28": "3ccctrQBbemDsLnXSMkLawx4xqw6PhtXqbFiLyKCZuuR7wkrPzCpKHE9kxnoLTtdyuAA1prn9hEtNVH6bvu4einV",
  "key29": "2XZqhtvNe9C7RMa3SvhMzAv2TsgmHewvHnNHuh6jrmo6Tisd6MY5FG6dsbra37Fem73J3wK2Jag88SAj1UAUcgsN",
  "key30": "2D4G2NdYNJNp8e1nx78upwezD8SNcn8FBT2Jj62oQn43E7fRHWeCuPSbQ1pJU7x1pg3mmNSgt4bo8V9ezrjmd5m7",
  "key31": "3Yd9WPN5oguGQQgTjA7vwpeXkyhiwToidp1JPcErSdTVFjuEhU8DDceZJkak5AgHjwts4Va6ejH888PawKRNVcF7"
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
