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
    "3VsVJgViQ5mLb3ct1rEgJc1vhZfY5tU7g8y96He2QH8CzZYUwtfj2iBTd45S5jv6b4pzZkdu5gjbhS3TemZ6h4GY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qqAhcTdLF6gwUBRsJSiVahcRfK7fFBtLe3mdjMAimbCTwDzhW9F4GkU3CcYDtV9RRVJSbjFPauRTzC4YkhHvAVR",
  "key1": "A3jNqBXVwCojyRH8bzs1H8bdridcYVzLmSpHiXkRFJ9PkdQqyQw5mVYz4AGikAfMb8XvZad5Ngp5Gi4pgHkrH8V",
  "key2": "62PT67wCqnxSCBqT9wrTBQhJnY6Ec2vR2zExE461qEPiPHYF7D2Fkitk2cpMvEm7kbBfoZsYUtCCxdaj5rZoCL8d",
  "key3": "3kGihZRbwawaUPboAPTGopHMXJDTtv43EtWF4Q42fqtiAp6eUwtgzn9XmF16snuJoxJVVUx7DV6XxvybzJxdbUBW",
  "key4": "2UdvhWjL354swtBU95PhX7eCf2mmZgGgimVkHTBM1zPy38cN2CVMFLHrRL7ovZAmgN2wvssjL26GnuhVNroDCHRf",
  "key5": "4V93WHf71qJXxHUrV9p7eRqDhgRFVH5EdJfshc6qPZEgUEwm6E2bj4zfG4M3hHAAfxVmyhaqHKohXrSx2kpMVqzG",
  "key6": "35DWnuNz2cs44brZ4doStbsBLu8t5sWo61TzWwpcriRto1YHpy1FdduxM9z2d25mBrSnNMiv34cRi3ZHhkwPki4i",
  "key7": "YvBX1KnsjvAJun8S2XDrjj3yDVwhuWMwRvdEZc9swGzz9madqUfLFaZaurmJfaPHtHt638rMcuksATCmcdPzbuS",
  "key8": "4cXUmRdNq6TxBYBwQjXVM1mbwPoKv2nEumdghhaTJBJEf3uKPLXNRUoGy8inYN39onkHqkxxE59T6iUHTzWqxKUV",
  "key9": "62Pz4769HB2vdyW5pdjncFjGRhjesFvwbiYuYKAdAH6sDLv434BodhXRa5AnC5jEJVRanWqjh7YfusSzrrGuWu9Q",
  "key10": "35fciJWUUw7eUCQysiLzQoTJT2XSLK9nViXoTtZv7gFCcZoCLhd8XEJ5QFBC7D7GXdKZscJVhwXiTZPky1kL9E5f",
  "key11": "wcP8zyBowjx8MxqkbeYRSQFG3jLU7vM66Hbwucw4V3zdozWhxnHWwgTMzfK1wb6DbTDZVPDDpnG918TBAFAgSbS",
  "key12": "2JYsUa3bYQ1yFkbaRvYuhzzvqHU1iasm4PunVdHJBrK2aCD6bfYokcFTFRRKjewVo4pKocNG8PuhfE7xJXaD3WXu",
  "key13": "2ypJbtGRf8Q2ombQdjQUy8neNrUruGjHP6GcaeLf7TLNassLXKhctBHQZ8q2BXyFziU8KdVBnMk4HawKa2NeeT1G",
  "key14": "5SGmzVC4zgDDM3BNw9nZ6oaz5yw3Mcq4zcmBvV9jiyxei19f63agoQFnJjNw8uS3jdd23Y1cqvXfd5JBSZBzrh9w",
  "key15": "4oGEsiBqBU4HsVDM8XLxq8G3NLvkVKw1zJykWtaebp8T6fSJYv48Hes63L4SbE16qPxTbqHsFCbeS8KZmfU9Mo1W",
  "key16": "4jgz2cdspsEmVMwcgMthtQpGfcGvg29MtT1hbrofCut45mYGhGBXf6Zb9NYu5L4pduiFkrRNkhCEvmpTZqNzGJwB",
  "key17": "2YhJRvq87HkXh8UzQPdH93hENV6u8GmSA4oqKSU2wUr4K7wyY6gucdvve1csUmZMSpmzA3iwA8T3BCQZW6tqZ55o",
  "key18": "K398pAXBUjaTFRe6piYxC9CBAYq25TUNh6WaXo5Y3AxmWgc8nzTpRM52khzEoDEXWEHvhVf55U1hJWRPn8wvMRM",
  "key19": "QK4yP8CGciQFcqzWjF94hk6HNLspW3RD5PZVN5ec164TERpiHn2EhHkAtRm7svMqpL5UXn8nin58NcNHx55YG3j",
  "key20": "4xnxoS8JwQZZbAnzjeYuwxwLfzh8ecPHSGEMLxUSLGqpxxsMueHyESdzwymuHj4x2JcpezKoptauS26iTmRDRUSF",
  "key21": "2RmsV2Rw7mxLz2e4Gf6hcwWtf9PSTN7p6dXGe3WHsStC4RZSkNm8JCRchQuSMmsuyx9bbzK4iYhUQ1gWGhPdXpHN",
  "key22": "4JPqDTasckzma7xTZGdAoGU9MA2pKGRrwxAFJqFPzpiW7JcrJwSnqsYJu93kp9bsRVQKMntWF76pnLpZ5FPh19c3",
  "key23": "TCBVnTPRgWjKFGRnhtBww96CqrzBJapcAz81rirFi9JqRhhXN8nuJvvP6ohedBM36nmqZN1cJaSthDiuToumvzt",
  "key24": "3izdAowQh5nVkV3YatupuS4gocjggtdDdoCDc7Hgz2SwzvjH6bLiBPkiuBRyydd9GXTJhgwPSYkihcz5nLwWo8sN",
  "key25": "4nQrGLXcVjESoVoC4isgCkTF7FbjCeBjzF7B9NoA7xQy86v1GYn9XZPfLoJH2daVZDn1DJnWevmShhGZuEMwqJnw",
  "key26": "wFqhwsF62aECLnCJ6EwoUGFYgJSAAMYwm1HA47pmPdp2eWEBZoySUNwdDi7Ee4F6G5WnzvtQJwWXC3sRM1TbF89",
  "key27": "223NQteW7k3j6iGKEFFQgZ3pmzXC3n2PmoyB83gKcCnLTqGxk6UYbBu5mV2auubN1nfdEcs4h37zsJxLLRtvUXxo",
  "key28": "379zHnHiJuh8vrnXQ63kpvLKWFPZZ9iqdGJVN8Q84H5hDYW7Ztfagz1wcMn5f5QuYCxUWqo3XPCgdLeCojPXKLrN",
  "key29": "dF6U2EnZ7NzimCagHRybN2ZZjhUoHUkejogRehgyyJwvJmfeVvbUX1zKsHEmgXRTseUu6zPcSu75N7QKexEEbiQ",
  "key30": "J6Q1Bx6euznodNh7MF1jWDysMLLPctargVNzhZkS3Lu6B79LbYE19C7pT6qLkgZFNMsSJgB374ouCyoQnNWMZzB",
  "key31": "2RMa95hkqwiX8EST127CVLBge44rZEvJBV9pErNeE3DQwk2cWqbj8RR2wpFNg9iSepNne8HmK3DwHfSeRBXhbo3U",
  "key32": "4z9RxNfCpCrZvWP91v4CbBuhRVzVxRZ3pLREYR6ikho8yD3U3eu3EFckvzTt9Rq6NEj539zXtTJvsh1T4eeRyjqa",
  "key33": "3F3gGjhBj7UKvMNaN4ngbwpoWdp5LHp1cbjzv2ogyCdAC6RAUnvjXk6V6VQKbtZRSoTYf17RpthrTsjmnaacCbiq",
  "key34": "5WpBzc3RhGsDXUVxvgaoP2mMtV6YVUBpPxYRuh7pLkLX7DB57fzLc6PLPXZTJqgJhA1zXYy7BTt4rvTFScCXTsbU",
  "key35": "47m2qF9Px5FNmfEUHXiyKtbw26rbHngGgqD8G5dt9yDatcSpGizNi1xgcH2TFGXmsrknFQEXxV3tyts81SVv313e",
  "key36": "3aCu82QnVT2RHo1gXS53nymSX2aYUah3otJWfqekydhLRyntDXCPgG3RWrYBbPXC248uGNvGXy6c2snKtCF72Nia",
  "key37": "2akoVowdNVSJr5HUK86839HKVNLdracuUxjLxDajuAUPTG9EwZuobUKtHP3mBdDKc5J7iTyHGGnJ6hMM9j7KcJ2D",
  "key38": "1EXLzCaCRDsZgqBPPUxLzRxBdjRUALGs8QbbmyCc8kkzer3AD9fibnRjWwiz9ypgWF14VBB6v8NCnbSpKxVittt",
  "key39": "zmrGqHuQ1aVKjV9touFKFSiXS9kSzteaNr2msz2ar854A98gov3mJ6GppRQop8MQhdZTZ28YMXGFEprr5oCCJMU",
  "key40": "2rbamwfmEU6U67A7P3WgL9Auu5BfGrXw5mXM4VV26ZLKiRkq5ox2yhuq5JAnEtWz3q5R6T6LXCT9weQXBCmXH7fv",
  "key41": "3u6poFrAwdUHL8pTT42a5ypYFkHV76KfUiAiqAYEMzSZvoZWNB4mTmAsQ3RGrY5M7YfaxGPozYepEzJttEzSdUns",
  "key42": "4heaerc9TaG6nvEqYJGRqdBymgKY6WycoVAX8WeKyRMez9q5wri8nV57Dkmdgg6e2yyhe8jH2jr3toBaVPJn4fpc",
  "key43": "4Lpvzvskuumg5ZViJR3oiokgDCSgjcn1xfBWUHeWeTvQ63ivB1zhhLRe2xzVxkG25NJDpBdu7sV8vGnY8wVjtani",
  "key44": "2zmq7m36gE5zGBQSJ4zv3B748taoxhtAHQ71kLoo6hQesk9MsFvYSh489r4Pt2mqMjYoNGCkGBZeTxUT8T3wWaGi",
  "key45": "2rxfmfKBRfFYFCGMUSVM1csLwXqatKGZ5RpSohpBdmPkW7VPfurYvLNRnsyjcG2CEBAEq2hqmbph3hPome2NJ3wD",
  "key46": "12111oiUX98Y2SbxB8b91rn44KTq1i19vTrqEu3PuLM1gabouAKfFJtX8X5tqYvwwiH8X3V2jQ6TKJ8aRM3UDCqg",
  "key47": "4yYgVSJpNEihXrAJaJLqneVcWyoLjQby9e8DY9uhAiqZCSzizLv1yYzyPoFhYbtbvse1ermY6crP5Whj1aUWCZ8V",
  "key48": "2wPhPDUgq3Vs6zWMDq3EQy2PHsDvSuemqPsnbiFhdgKtR9noGVpU7rizU5FbxySyRuT5PsFubpojkHHEUegVzXVm",
  "key49": "2h3GGhH1LMocgRdpyEA7WDTo4dj3GKcoiTjtKGKwM833SYWaQbxw3CvpQJdYDgkKXE4KtzZ6dhJ61zDJhurBPhaj"
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
