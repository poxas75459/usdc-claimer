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
    "3fXSdzy6Vn81o5rj37vpnUtmWuB3DZevJ3VzfwYMRacL9AUrbvPH26Qb6XJJdmj4dhmpZb11vnPainuAV7jfBZWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qeVtHrS8zZaqVriA2zw3wT6XJ4JhbgDX5yiY83qJq8yuV2R53V4A4CzVVbfPxi34yjshZcPuEbTm3T23UQLD5cf",
  "key1": "2nHvqTFbwKm8YF5PidC54pE6K9VyakXH2uUosA88T8vFHyrCha6cUq28miV6JwHw6JugbtLPf4hPejTxVDxkYLYr",
  "key2": "5nw9KUDhv63TPP6czDJiSgfikpEppEFXz6HdyRJ7pQkXSfBgKhgpYBnQZ2XgUE4YNSSNaFwb4fmUVqmUqYKdgxqw",
  "key3": "62MSVD8rvLD2ky5v4uNLomCGJ4fgpnAFo69RamdmW46b9BbHEQeHPZvYEphC4miPcqsWP9MLyVJ9xrLDMaDkr1f6",
  "key4": "4g6v54EvwZ3rCodShAxDbidgymUo2LCLMRFLTYnySfgeMetTusdV5kQmTqUTqiGwAGFa3qGzexowsaZ5TJxrdQKT",
  "key5": "4UZAa6KE1UKPEQB3Cr8tfWxHsAoLYDrPFG26bCpbaEeGXoLp1PRvgwYmWR9VSUtsPWaLw4voB8MGYUp8S3SMru1B",
  "key6": "34N4WcSxceKjzGkVTSbq23awAJBLhYt73poHjDZfvg55qbFBH7NPQjCrkA5WXJuuy8E9zUgMwKosP88AHXu7TeCC",
  "key7": "UtfQiuSSuiMb64WJ76P3aKmwTYzD5yN8fPYcxqQpYidwybowhJMiEkTBqJLxeq4aLjHzgMih1tcgqvwwm6MauSD",
  "key8": "3M3s3Jn4WDBrYjNtb7BskrSEyDBqtrpntUF8qa7n9Suxeb6nSNQuPYgqmEfi4SvWsp3E4UfJjNxexohdPiGxipqW",
  "key9": "J7G6xJZQ5y2RBZcrRHR5gSgx143KPz6D8efrymJ8TbFUZTt1vpuLyFjCCt81eqcVf4QVwTfgM9zDmaWCav3nY3b",
  "key10": "4PHf669NT5986UYmVVurPCwE49fdUQxMBJKRsPgYjWJj277TW9SKEpqNiXmQez2h33FWtrK8vBpZdXVhBGDxBPoM",
  "key11": "2R85pKVwrjfmJoKV2y6CeLGMgZmJhgijzmVhmDCxuXUedrDYK6q483YYfTz8Z38dLPp1QVNTWR2xy51UMmbfNpwd",
  "key12": "Rj7ENojht5ZKhUW5vauHPzb1J7tmbCwibKkZcbGG2JxW8ECpJknheKGFtz2jJ5XMecJXw9qvSvPCt6kMTgtmXMt",
  "key13": "hxKoGGmdSscPLwPJmmjF18wKSnjK4MxsQJn9UYoK5UpexQpYKjXR3uuLuMR9SPXTns9Woc7fkACMy1RAzrqrcSz",
  "key14": "5DM4xHJCN9ywa7h6k8Y9ei2TW9njepa8muo2dUueio65XDF7rTqvfna6XyURxaDQFng13wi1Z2LYFRaxVytpE84S",
  "key15": "2H2qFcgGC8RGMCKEyTuYnX7iyeYvzsN2CZUbobtm1waGWq8J31L8xujAbFwJtgtT7mbzUEVtfDRjCigd9y6255LU",
  "key16": "48CA9ivshUc2Gtrf8Ey19ma1b142cJDNqA3gZaCxxsGvrddfKQ3vT6MsGwzQ8p6fEk9aZ2VUn4U35knZEJjQE1fV",
  "key17": "2wfQQvNhqTFATFf8e58sk4yyHpvmXPTvLUy6MYiG4kZUDmWQZP4n22Lppa97ZBBCzXpVyT9RDAeCQB5rEQdZ8vCB",
  "key18": "4QiVVTTJsdjvcHQ43ywrnzoLtZaDHWyHeRvVtXFYWwZb2ZpGtVnnUhu1Twbg5xzh8A5ZxMgzU1YbcGqefL9cyiyQ",
  "key19": "58x6wmiUEFutfvTavmTEh4dvAXQCUsq6SczfKuFPhGeCi95iHLcUowcqfmWoTWfVAxbzwbv2siZW7CsGvUhk9Lxs",
  "key20": "uCQPKSUfmecMyFpM3hNzSJvfFw3ArMBS5jfeJrhuBPr59LJbiQk7SS5rdPFDcoGPtx4aJoZzFTAjKoYrAK72sac",
  "key21": "3bhraMpgVQsjt7XJXE3RpWsRwuJYFXanirwFCNy3GQhQyfrbye6tThGS93xv26dRndCK957QsSrxc8JkBXxuTaaw",
  "key22": "5CPKtF5K7xUoipwVkaq2oPrgV549gdr4qsTxyaHArznYgnx4SPucoqkpvysmAfMtafqRAxSh4mM7V7WFP6JByuUu",
  "key23": "3zLYDWtXVoBwmXoH4SBhoLYtgossby4WN3e99SG81M2jiWdDjU82dC8Y1zQGhrFZzXHvoVDXZThrEC4cmWdypFVL",
  "key24": "3D8sjZJCmBFtaY87UY1CHBFsRskiKmxmDGKRd7xaLtQpU3NcjSwrPvXGaSkRuH1ZZeoGMSYQyTEmUoHDct7BqqUz",
  "key25": "3vRVbTkD1inswFyZ2wtwidS5hHxk4iu6KVX5bLQgarEJp7pxbRDtbsiVzyNmuqCUET88i8DHvSRYbQLdovTtosJN",
  "key26": "dv4BPria5snr8VEhX8JpfHLw7oUkn2Dv38VhMvJ9nVyJpRg5Nf6YcnsqVSJGhiKtVyraUTqQTQfAQXRj5gxtqMj",
  "key27": "5k7k4Yv5C7Lmhd4HHqGNw7X7EnGLk4UkQY6jEybQGh7XmuYeu8JVZ7cu3EdWCz3NF3eT4omDfWyP6KoQcGU54MF4",
  "key28": "28r6LdotNMnqGsTqta6nSmBotUsfBdasMWWUCWP2Pnps91T1YQikBcZyzoFwYFKWa3GwnFq4GK79Z6i441vBN19B",
  "key29": "3PJB3wVbHKSGMuowCuznBKhKJzWpPXdzrGyrdop3MsJdvfR77kbsb4qt16AShfqAGa3HBh1dqMw9TJZF8PY9E1Xh",
  "key30": "343Xt3VX35fRuaNneD3TiBp8nvnqsw5v9bjbjQ9tL8GF4spGBNWpcinTtSHUMf9Kvt1yoG9dH3b4DYYCfqoe5BEU",
  "key31": "4FUoAwMpCotxm1LaEhi8z5RtULsfvAavyE8az2yxgXMJxzJkncAXMqnqmgio7N3jjq82KsCXLdVtrDhEGWHNhcP5",
  "key32": "5csAPFNx7Exeau71JKSZraH5pVVqpuoGFZWDauV5JqqhDoYfekLZdXzaaqpc664npaUHk6BxZT2anLZ2wi9ehZuD",
  "key33": "3Vdfri9dEHVgkD74q6AhdaKe5hgdMZJHv9NhJ2NxrzSActe4j2H8gjCG1BHgCXB5PHKT9C7XycrPNybXkCh63Ps8"
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
