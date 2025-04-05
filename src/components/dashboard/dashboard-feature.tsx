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
    "5wkhTN69KdM5MJC83su9q4ocPYuAmC3MZEhsFozS8eeJQFnpVoDyJrapDYhnbtbCwagRTM11AVUWRWpHcZaqCBd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhUgLwooGZ6uuxVEmDSg517hmG1bk6xrZwkyiBPHrYPzKdA9tGbHnJVzEcb4XZmSiza6FdrLL9cRV8AhyWZVfAk",
  "key1": "4BGkPGziKQkUP4x8nNjX11Gah6nAsCPg11gw3S7o1AazD8ZG65AsrJ3fGdsRHfVQipWtRQRSKyvLTU6CBsELeM2t",
  "key2": "LoqA14VX5Tu8XP65Ginjvh4iawhtmBcFg4KmMpvAgc2XQEQNqeE95Nz6ttDDkkSTkP2SnPcGVYNLzNWALnhfSKc",
  "key3": "kYnzZHav3mSdPqdLTuBLDmFqxyEhnipiqdTjD9XZDrKLwx1PMLSRtQkzb8nnuw5iFgP7izZMGBJndQNtZUL53Sd",
  "key4": "4taJKcM2b7rBh9dz7hZKDCG5teoKGXD7s5oo17S6XaAu1nNLtDyuRJx1PAdM7hD9yiWuSShM2m6gqF6UjRqBYNWu",
  "key5": "3oRcc5BQXCbFeG5CiVeer3ass2aZvTUSu4B2xs1E1V7ZYb54kiwzLi9LtPzhbCWp5KWKNx8AkrEx1cYAkLuiooZc",
  "key6": "7UY4DgUr96VsXXzFuaZL1dx879eWV5HgvykizFXZWFegKYJ47BCSKKCws3hUU4oiWYDd7xAU4gutuH3ioMKuVzH",
  "key7": "GaZzf5CAFNhfJUzj1eyznYsUasNfg4qsruTCdxbaNBE19ZrUN3vGLoMdHDvWd9ksmpzyfsnTxMgn9iELMnTb7au",
  "key8": "4zeK8kWtEMmTPzDRjqSiBKaFFYWVmJhSKUCPfg76VB1UyWLVwkL2UurshKWsLxr9cUDDQ8DL9iMXLkTSGnf6zq7f",
  "key9": "1x6MchJGcqVRibV5sf7vvHnAEBJpGsVJtKGiu3aa8pA4aJMexSpBhaRuYQy2z4Jf44dqw6ycdoidSaemowzHLaE",
  "key10": "3pyJdAAieWRVPd25V3rBWmAUsAwfF1Pn5aZw6AWzxgCNMD9eFaBtYK3BCVc4Q57ZZtNDmDJRUbPvkdCnGXnMgYq3",
  "key11": "2tJdSyyJkM2npChEnTuRDxZ1fg5Db1HDWhJZZGVhkGfbaFjtGNx1mi6iEhky57LGuu7qTYg46XgEZLsi8MLnz6Lt",
  "key12": "2ta5AKUyp1PpMX69pzzEpZwfgYgdH2npTe6swZDnvCJHFyk9rLPFH7H1YE1HLposeBEo6BciJA5Jca3cUvqxb6TN",
  "key13": "2D7ufcGyuFMeaqxrQsSe1hoZT4nDRM55NWKYCqx4GMRDLUL4va2rEXTHdciRerbjZKRzCmMckm7B5FQpCtKhBL35",
  "key14": "4RNBM1kMDY9K3pR356wzcpqnaLgmy7uKjQbp438Fy5TJYqEZnWWFsQfB9XbrrYokUVA1f5gEtPf2t5oUJ6aEscF4",
  "key15": "5GU8LdLVvGWh4rbfNkA5Qm5hiTWobbCPY93e6KBaFKUuF4pco8cn57B1wqxTog11N482gRnr5zFWnbFe7sp3gjSf",
  "key16": "5548Nt5Z2z1LQ54z8jNK8xTa7q2GLNrg2PTXShajYfb4goiAVYKsf5zWSkKxbJp9YhkMYjVU44MW1ZRfu3icq8B5",
  "key17": "2JQAbzKCaPjrD7uc7EvQWp7wzM2PMiyUzGcL5qJFGXN2BMABTo2iNquqXYoS4B6eqVS3eFYwDeETY7XqwE6wn5dZ",
  "key18": "4Ee1BV9p4ewH9mpfZEyPXDWcR79tjKU5Exm919MPQFpsfQD3YuBxirWtVzLEZPFk9LyUn3vVo4dJXHGkCaVH9bGG",
  "key19": "2bF7y4qtqMcfQ5Kb1SeZtxxM79VjNgQNSz2E8nBpTLiMKM2Jgc3pKLszTYza2SkT2QX6dkD17DSmQk6okVRZQy83",
  "key20": "5uAtgXk5XQ1ge3mxX63tPhr4i5DLrVarSrhwpSzio8PeikDQBJs4hAeQMeAkFu72faVSd9FhFXQhpiXBczbA7NEs",
  "key21": "4w742vN3PTkvJretatco3eKN72ekUXQz6QHoxtTxw4EauzS7yBdYaMwhYjh2FCpMFUzze8jUNAa5UYeUtqmijk8Q",
  "key22": "3QZEJTFSSwMqin4F9giKFrhVgQiRdiLHLyDE9mLRPoQ9XqgftUdvf1HvxjXNNAEuMnhLtwR1JTHRD3JY1PjRUn8n",
  "key23": "2UK9TANYPoon6Ve45hk3KWioqggW7pSm5xGHQ8orGSBsnGNDTS2uAyidMkr6VwdSEpD2uBxfzYAAb6ozPzvrcUEt",
  "key24": "apbhV9nXCbiTUJwRv86At2SBhgLpFJEoMmqc2obfTvu3KWm9Sn6PUab22e55y9poZCGYnqgnaYFEikXwTjXg3Uy",
  "key25": "3cSxYVDYzqYMBKu69euAxmLRGttGdD4cCLnCzg4BLHqSJufSq94CAF9bkTQkZ4qek2bm4S6zgNEWE5cWNdLa1m1Q",
  "key26": "2q6dnFfzPPwcApEM3BwVtwfeLjjLQFPuchjMVtnsXNaaPTEUU98XwNDdDrXR2jjy8vE32ypSNr1t2pUPGFn2gpTr",
  "key27": "3fn8vW1m95nwkbrcFcqAF6qDwq4A6AgnJQnkYeeJwmrKnzS8KWcKoe2WsRABMMtrmbHL2ne9aHqwZGgQb1TFYCVQ",
  "key28": "5SD1RfXxixc1nz52bYUYEZtvMUkN8Fh5qac2db6jWuU71SC6QUFQrvk4PYkKfXUbJVBv3huL8dhRtJjspMrhuH6y",
  "key29": "4AYcNar5FbmJD8xJbv6j8SaAvNtAv7TLE12vAfhcCGaTfGkYRfEkY3Lz1DYtnu6qkbfJWKgqEp7cEkkKKKskGN8U",
  "key30": "326CdXCQ4zZQtJC4vmbKzpcR536QMQqwW5N2BdHcEyT6Dhq372Y3Ba4N7qUWMnMkZ4kXqs6EnUeBwzHfrvvBzzWh",
  "key31": "zmvrsEqxjM2sRnngBgtis18hy1erqqtLV9iAuSS3hqfJ9EZmphduha2kGHBNHRNFhALc1gMghQLKknPztvs6QJZ",
  "key32": "5wy5Ticzvdt8FC2KSWrYTDTBvBDkQDFdJkn9mprckx4miZu31LE9dXc4rxdeJqCQQrFDbB1UeuUtRPwaq7WKdHEo",
  "key33": "3Zo5XFTKNYaEDdDTZUuDpY5wanmmadepfKirysL6SqVfH6jxCx7fCAPhkxrgTDeZrTaoGe7dr2gCBCVfe8MQnQ8C",
  "key34": "5Mz9XgrzBYP6m4bXi1F1vaTKFpcVTe29Ed3uQS1cccB2TpzixHLaXQbWGy31kFYnsAz4Uvt3ZEWAR3AqBLUMU6RL",
  "key35": "3RPMK3bu5QmERNitqGEAirAk1vHzCWYxee1vcP8FMSKaeJM4LeXSfAtRTjaeHmbZWDYTftFVsc9AG8m8BDxFZzq9",
  "key36": "49b6nuuzKXBt1qZZA34ShGN7HAKetHX3Roor7eaZGogAo2BVqkGHc2h9qiPWHqjpMydsGooB8dqqLyBTQeKZxipt",
  "key37": "3RuNc8NF3ZxXrCqr1BEg8Qc9Rbp8KrfC49VQwSqEJJwSS1CVz3M32rEBzUhSFEqLR1ToGCsoWWSY8oWbMyXuxoGd",
  "key38": "3uHuCPuavzS8uyBe49FgTMbqTKcDwVQVLMSeC8w7fnhpgP7h3tgjUYqJYLZUyoFVrww7t4AnUPsuJCPrwe4BRWUe"
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
