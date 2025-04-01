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
    "2bYco89QCpKS5P5CQDD4PRtcabARVWA8nwmnvTAeK4ShKBPzLC5RNZrmZGaaPNaDQnQQgTdZLmwcsgkmaHsPvp81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E1jfFmt7ek9XnZwbQiN4K25HpN7iy2xFPGjPBnSjRmZJRGwWHwFwv2hdJDqLWN29CtkXt97QuqMj49rARZikhf6",
  "key1": "2tSoensARGKr7WAkx8MezSx1tdEmgRADGLfZAi5myQjuJUXRjuiLK2T2XFsgxDA5rG6927rfmRxMcSpSBEtv7o6S",
  "key2": "62nkfw2ANVi5T7MVWoV9PWSRu9hTpPaUoZW7KPR5SdG1QmELbqY6y7ydHbW6mNgeoWwesBQgGJ5EG3xAmVSJSXLY",
  "key3": "5rq3uyPn2WtVmcXXqrXvvgMRXCatVTXmGW9PimE5dHaaVczavsVGmNGfx6caPTtEQsjLKV77A3zNmemU1SZAvU1E",
  "key4": "5EB5Ve6KQ1KGoA9UJH6qfCctP72TPCaQwmm13MCQ1BGm1uwwjEkNmirNJMKgGLzNAPFq66uiqkWhACgEuYRhcqSn",
  "key5": "62SQ5EHy1ZTbwFvwyraRnHNhDJhw227ELKDb5jtpVTuUGZRAemCmUE8PqmzoQj6FbK4iW8exi1EshwCy3BPpFPBm",
  "key6": "2JzxhwLiN4dAkwTBca5Ssrc49P9BPXRgtfBd4vMnRpt9UGhD884kw4DHmLP5ASVwPYcR3gWFvvTKbP2Qui9B14a3",
  "key7": "5md4DY2ueUSHDQ33SV8yA6tAZVi1aRagxtasBTMoyqj2xAG6zB9joPaj3z5sa8g62AAAR84u2EaPCPdxLpmPEzfs",
  "key8": "3Te5VHbwkRYaXcKDu8Bq5wucf5BDL2eNAtMGVySTxtb5zw4RNYixcFM8f5wTkUNWKaAWNnLAqABU4khsH4hUXYSt",
  "key9": "3Xia7vp1qEQaUfSzixEVNveLRaKNTeV4TwFweaVkBAzgNEk1i8ZYBgJTtfMK26khCE2eRkHCvAVqcLNjTRPg1zw9",
  "key10": "3AzyGfoP5r2BPAWfEsnzgo3AY9BFi1HXm6mGpBTQWB6FBfGBscZgW2ELnm4iAj8jy5NPne2d8QYULeyPcHoaEKdH",
  "key11": "5Tx1vpPEonwjpUS4Z83oQ77SmMz3zP3RMxQXRBC66DHFcqm9RJfWrBnUrWwFvx6JfcQ4JzuRcZWJqMzq5cCosKah",
  "key12": "5Xs8qUbEXerZkdmDbgrCUX53hp3o221msyCWUJNncYs8t2NShHtvs7tEFVRMnKkq32xHp5jNGB2Jrs6296H5araC",
  "key13": "2irpPfpwKz8zE6djG9rQJ2CnDHXowx7MutMhRw7SBeYvDeHEaGNVEEwYDxJjZAzrsxyofPvXPvvQQ9xYzcoc3S4D",
  "key14": "zmFJ2K21nMGLhA5GdvgMFzRh8V9uUVjZTBZcVzxpc4r4XmwDUXGUsUuWWTMrCCxijMWyux4vyBgH6e7DpwJSp8n",
  "key15": "52nkNdeLZ2YofvUyMivXzUdgMCG3rLoj8PfXdqPdhgdakNXCe6foQe9i8BXC2SS33KJmt91WcPFLUgG3orEvGYRp",
  "key16": "62jUMM2hXnEwpmGgFUL1N7m4twXiTVZZEX1ynLV6hqcKSWYFncX8dW7sRc2gcsNVo4SJjhGAaW1g3Qu1To9wUJE4",
  "key17": "4NNrW7F5qgQwfJhKHXxW5JjM5Hx4hohcKUoYaidwVWM1TnZBqzT1qPBQ1dVDQXxAMMfEET3ANQbbHsb5xJYyGas5",
  "key18": "4J54Lv1y9TKw37EX96NTnYuekuSWG65JnKZeX9Pxj71hzQ6PP4zDdYjHMNrtG3ny8kgr2fDmJn7kDzMyUjsWKa86",
  "key19": "42hytBQE6ad1K7VWJrZ6vm3P19VDQkkE7Z2nyMtqsCoTfhtMcBeWjaZipwuxpuXaZ79m27e4wrtb9FGkbeBgMBje",
  "key20": "3RYkp3EQf58LyN45hHFwmDMoxijSWwyD13PtwvcZ6VzLnShhH6dGwZta5DqNsEkMvwY3jsUF1Wz9rmWr8jcCJoay",
  "key21": "3GbWWWqmPxjUsiRGDzU2ce9QKBLU2HoAGb9rLxLNRAkFHCeYZiorhXj99z5CnymDkqpKCko5s4vuFbtiUpHNEBXJ",
  "key22": "3tdKsTctyZqXHT3zu5M3bBQ5NhWYECJCa6ZUAKDgkfFhyHBrCwhVrJhG7MCpENDsGp9seLAo4DCzR277ZzipuYFz",
  "key23": "5et8S1t965Xysk544KsVFXzCUwgqTSBEqYPjLJ8ZGt9VC7Px3AXHs1ruRrGLKnedh7oHw1G6QLDpmdbp33QzjP4g",
  "key24": "5JUg13faYLxW71uGgH3NmM2pqCs8JusgP9wNzD28DrQNpuxjUgLH5k1YvEL3HxS4aE9hdoUrG4vvnD4wjfpK7V2d",
  "key25": "2AbECv9LDQ3opSKZ6bEBAriJcWErEwGwCsn9KVH3J9PdENdL7NJhGVipn8uLEUJVZdgXinJ9vMYq37uRMs7oXpfj",
  "key26": "4L86NhiamxiLttdGFdCBXUqR59yegivCt9uYPKNGvNdDHABirwVnH7B8vjE2qMb4Jjsd4kjz5c3et2cDjy1T3bBT",
  "key27": "4woCcYv2pAprdKXkYA3bhSNCzmemGMbubwEzUfwe7n1ATteSrXnmpRF6NnY7iaKTta3To42SJG3mjn5SAZXWZ72Y",
  "key28": "2zzEi2XxEdTr76xq4kED2VY7SqSiuyxQFTFkCNHraBgW5u4G2Qzpzqebt6GcSUxbvjkQKkLXBNH9jeC27vugoAh1",
  "key29": "3gzs9wnjJXbQGKJ8dy5rJ8vqYhwf1CKDCFVLmNxhnNKpG6DcqqBLC41xH5rJ1D4pNz71iw73vn78tYcKm5qk4VMn",
  "key30": "2e1SM9z9nnB3r84XVP67tLcEKeM6EEpPA2a4sobFHZFNU7YLRDXRWxQK4xkfzcC8H43KBNLZwKJ52g8b3Smicj6S",
  "key31": "3qKqhdafbnGJWk95tWhjqZseQtZnpPsHk9sTNH6ZXnJAQxNeXimMpA6rKAgP7KKJ9puKm98abmG4UUwRhhH68Xg1",
  "key32": "Mpy2DiGBHFibPYnbeRiMADd1uuQ5c3gJdhdBBEebr9xL9G3g4hE2zunUh5xwYw6xXhyU6KzXk5iwebykgjPL6M2",
  "key33": "3BXQW7153S2UKVEe7dmgccFZJUqxxvstP9cSANmJ9ms1Ds1GLQ9poxtTBw37U4Lfdzq47EhovzwnMtf2ZgyRZdSH",
  "key34": "5EvN8djh8EXgm1RVazJCQfLW6fc8n7sohhiNYiTp31J1ExRiD78prDZUhCSjh4V7RyoJnXgieLAPLpqpQ8YrUXDb",
  "key35": "47dmKH5prT2yCx7PcWBxhb8osYHiageghyfzGp2ADTkCA1fz6NThNGpYRQZZtYq6epQ72ECTvvsPYNwyTYnv3Ds4",
  "key36": "4mZjVHENihfUkYpoiBzzXtDdG56RAhz1yUFr6eGzzLEERTeF6xLCkzMHu168EEERGzG8Ya2RWDAeydg5HFu296Gz",
  "key37": "3r1hCA7AJHB5sUZZ8fzkoFUVngpbvC1yxkL9hT57WTq9iHgUhkrMaCrsaPvN5M2jyojEm3wGLhUPLbAfmLZfPymm",
  "key38": "4N3kQtLUviRpSn3MAXmbYGvd9CTBjjnEzDw46622CNtSCnAtwNomvLgUEehPsC5XaKLVmvt45DEDiB3c4aAL5axr",
  "key39": "3HxcSALn712dfaTr4Guk52U8SywHZCz6QG13N2ZEhiigRcqqHrR88hDpMBT5pcZM4n9vSHYSWHYpa3Pb1dsGsFNm"
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
