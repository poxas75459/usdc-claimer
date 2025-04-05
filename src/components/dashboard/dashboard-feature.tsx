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
    "62AG2FJGmsmh9M98U9ASBXTRpysjRMmUDL4QQ5LsrHzSfsXfHXQBb7m4j4mNXSNCF2E2S4YmMkisHzh9DoHNhXWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fiskiuif8k6niMzYzBHtiqvAAKDwHjXBBZ1Eazr4ZdVkJDkHDh6MofqcN4p7AtozhbUaBjJB7cZg4RWybrLcWec",
  "key1": "2JRzLvhkkPLYimbjfwhoWJxZXwagm41o6M9UnmbCNxEVNJPtqJyQq2Q1ZoWSd6SFLrjD4UAnRRAUKRfsHZ9WagRU",
  "key2": "2Rzrqhqd4A6msBPUmY3kU4ovB1P2xndgpp4tJNwh63XHbchHAXyjSmN6QrXuha3KRRwec3854vt9pDwMbVnaLjgw",
  "key3": "2Prs3uzB7vK8vFRsnY7fahjNukCUAdxxwsDzEdXVrFGfhv84gKitBofqVXZbMASntQVxnj9ZEiTgZxPFiQ92Yizr",
  "key4": "ntSYksDdjCXKg7zHtBbWracSp66KBK1hJwHejQfaFXhKdsJai6NLP2s6vWNyhAzpTCroDz2npZ12awpzG1yZ9d8",
  "key5": "51uEXzMezb5kBqRwQzP1evJYRgBZZdT9sEWQ4F2xCkCowM8YiXcxdpLoeEG4RWRtZgPxjRCrEK6G6aSHSe1et2k",
  "key6": "4WSiEiuGUPsjPpQaXnpBZ8bdLQ8ukyvMXgtMC9Vt3DeA8Dc1QX68DKrnamTZjWbQiYorW7zMov8GbMnZMSVRkqiV",
  "key7": "4oHYgVvbEpBshPKJFwmqgYJhGqahfhAEfkfLstVdcdLUQ8zHday23VQHRpyTDMTRys4RM5oFKuGuFKzaq3KknuEU",
  "key8": "4vjMtc2m7t6h5L5gZVmgeW1A9WAReFqQyqCFHSR1HrFKwxt3TbTzFDxzcG5gTCWyYJjScCtRhiGP9Vmh7DWb5BmM",
  "key9": "W7zoyzKsba5Ca9mgGRAA7tBCb7KT2nqLB7JAMSVrfhbZnyNcJRegvMsDwg82SfUznH3nbheWDDhf4NXA7ar6JNi",
  "key10": "4eiyoodBSbBkATp3FVCvi9fPupakjUfKzoeqMaBTkQEyBoGVxTisq4WBP9pydRZgRDj1zYfRDy7iU6T9RhRYeJ5w",
  "key11": "121M3PViUVqFdF2uHBhgAExwrVhXQiU14ezhPq6AEw5q45PSysTHVdqAaqDfyFjbimc2owQvqt422GtiazfYnTUN",
  "key12": "4Fr9kr7j6uZzMCNsoUWwDi9Szc81XCzzjEi7Wb1QeZxwd6g7QtpGmtQMUS1Ad3GnNMnsynWwp6NFRbf6sYuk2Zjq",
  "key13": "52xXmjksxGPwZ1tQRkc68zxJVEk44heoD9Ln1cKXs5FfBTSwt33tMV42wbt4BkHwmdBzg8HLqASKfoztta4bKshY",
  "key14": "24EYsAzZ7rW7xsCZqNpqYEmMAtsDzCiAxt4TJmGkX5ytk3C9WX4yWTjYwgWad4KcMc69X9hBR41etWJs9iRG7ugk",
  "key15": "5CZtAgU4cuTXW7dVjLpd6KZU2ZZPzSHxw4MVeraYztCFhWYKYodRpdExY2c9EtXZqFyM1R46rimVvnf8yRAYSaBu",
  "key16": "rqV5S3b6PVHSzwactY5CmD5XMMDVD6YdcL4DcAEQBysySw4TYcAfeDyuqnCA7wKMPhoryPXTYZnjWVRaREdsA85",
  "key17": "4nhbdqU7MuZHWyxxj3yxRjiK3eR35w6t2A8dKW8y2yPZepQKjjX1ijn1uhm1UEid2rGx96SLp97saFTskAmzdkUt",
  "key18": "2qrP5N2X42pfjC46z8eBiMnpzSM8QwfinZ9RXVcCCUMPL5Ucp2fEXdswZHQffSHuMktephBrNXYmJ7xtUN6LhK9n",
  "key19": "hAEKL4Rnfje5q3ZfPADjeKptYx2CVEYaNP5Dsa6oAEm1VCET5vQCyG6Sx8LvdiVYWXkYDY9KzVk64nadQNfNhQk",
  "key20": "3awPgFJzjc5QPdkTt357FdPVqatTP1ETkarLexhbtifBXKXNwmLuyJBDUXujbMqGy6amHZRH6V1ADn1EeHZ7g5eA",
  "key21": "CxkMoF8o49ZM8188vrXFd1YMxPL4jh2mZdF5t66vaaW9ESa2sxG1tzP1ymZJ7StwNdx8UFmDxwBD1Btm3tHU418",
  "key22": "4nNDc3ZC2wWnVLa31Pint87XwqWZg8b1EoMG42P2HfAEfDyHSpk2SkqsAJ76DP6sXiFiPptxbzmKdmk2UqH2hWDQ",
  "key23": "2PZn9rPqWuA3CnZQrq9Fpuhxp9LA6VbBanDfcsZEQtqB2RqJT4qzp2w9RpbZK5NEfxXG56Jn4ZYVWG8iHP5qTKUo",
  "key24": "ffAS2iP1kKzhPx5kuwmeLzF9rXDHpK7Xgz4S7S9BbyYCocqbhb3CjiF82R6vGRcpKZ82S5ApkSMUJQMP8vch2NY",
  "key25": "3dUcXimo8ggVTGAmBDrfS8rCK7TnYXhLGG1P9fAvo5T5QRcBha7pAHugi6V8fztzFskU8rGt2ydaWHsaQjDPomsZ",
  "key26": "5NwVbCBqZfqE5jgQs9UWdoKDE3bQMQxULbBnuJr6HevjPHrVwCxPEphbr7xjLJePwTgqe3eWmi7fxk7mobSZ33hC",
  "key27": "4hXJWTWxrN5rm95mcKbeo25wyh193oVbzPjuftxeb7Kzar7Htk3nNKzUZ3SyR8WUFpcq51K2RbHPuDWoTZQAWEAQ",
  "key28": "4CMjTMLYvuPMcdBt5imPn2jZ5q4uPSq2UvPuXA4ZtQizg5HJSnLMdAh6fbU11xCv9hCfEm3MePRpmYRzKD6KVjAU",
  "key29": "4ePrf2Fg4frYyBXkQFT92ZMBtd5XVJeBZy2qGdfWcrFwesU4hRSbVtLrpwJKghnUc3W3faPWpf7cuLc2VWJbk7JG",
  "key30": "4yn9iNjCuboMd3WZA4MJQtrowc8ZpiJ7GfN2VqKTFrypqYVHkBU9YbMFgrmfg19ZNQm1QB1D9PapuRhT5scfPnq2",
  "key31": "2haMV46fF3M7hMQ75aQwTRGwz6kvLAZPbgZp1iDJvPXyY3kRQv35DzrjqCPGWrVfzLR1CMm1dYqqknG7zYHytcKz",
  "key32": "4oPz56irbNaXDSoWqkDwAdh2wfr9onoZPqe4f6g6A9Jvggj16BpeUbywewNc3xAbZXrLtjeEnqqX4x2Mqd9ivKq1",
  "key33": "3sEhWKDp7HZUiEWkiE5T5yQtAfymuebA7uGkYmTPMCvF6chJtGYqdXwDRetVs9M92pdsocaycQBxPtscXoQYCw13",
  "key34": "5AFFqjPYZwxpWhVmuysqt3j9h17YjYS6i8pAo2NodMUNLGgL3gxoSjkNMqHzZ1WNjhc46sG4N7ZnR2GbfJKchoTg",
  "key35": "5tvoU3Cm6mzx8QRGrkwn6sED967U8zVJdj1Nx8JuFJaHk39MmHu9ng25RwEZ8zt6ygqxEGTpMAhYVfx8DUDGBC53",
  "key36": "eikLa3ekEi7Evdr82wqJhW4izvTxqWfN9jsBcabXMRLz5C9RKveFdrPJ5P4JeUbbGpnkuCNc5KYXoRuxscBiUxa",
  "key37": "487KkVnYLPoNDN9dNEcAEQaW3nx9o4184Cp4npMC4VvA6dQT56zZfrxY1un95LXoQdTMD6vf954WXVVgjcwSP1dk",
  "key38": "NVvAjJENnuckfJduhRmRK9eYZokwURsXjdxQmcE8HAjQ3hujRB4dNRqmcbUgwSVH1NJyrX4VtQs6MGakaGvqwRy",
  "key39": "4Lyr83xLnXP1mu7EXEdwFm9wNdtYw9tnCbvxwqP2tCBnP7KdRe6qGyqj78CwKQZQnN8MeAiVHSGr8N1pg6ore9u6",
  "key40": "2EmrbjKqr2wcr8FG25QpQnXYuWVaYtcPnoLbo671fuNMye62JebG3SFK7mmJdZAp3vDEvyGX2gcJxoVF8npaAYpE",
  "key41": "2DnUCvG7cTv16c2ctjEJe2HuJx37nmDPkgfpC7q3tDPf9unkTCAkZQTeNBbyfxTAkxAqaj4SXhAeg4ZadMXNNzYK",
  "key42": "2RahD5LFg8bxa8osFC7JE1jX9QZBkepx5z4yeau87tSZVqaNtwJr1hPy6izkBx6VScpgwqk5JeGv3c8dJntntTNs",
  "key43": "63ZYnWPRpqdiWhRuo2xjcK7qsmjfXHEYaZ9U1iYKU6T6dPi2REDiko2UahrRhQaTj1gYS6kdgT3RsDJtuyQo8WG",
  "key44": "5gu5k2sefD6rsKuT7S82esGVvnck8KsW3nF37h4ZCFp4NU2M7dSYTfFXuwzrLgif8oA3gpwsVgMwmiYSNfj3Yc2C",
  "key45": "2Y3FwpmD64w61LVCJZTczNrpbAjdMEofz8i1fCo3uNaSysgZppmmzgeJVWq8DiDBg5P921AoXbm1xWkMzNAPMMdu",
  "key46": "3jyFX2aDFsfR7RHsCGeuQKxhjnKSHVr3MMnxkXUU8aLiFNgFtj2vhu78N6E6S3fRHnba71Ro5zMc4MSWr6h53qvn"
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
