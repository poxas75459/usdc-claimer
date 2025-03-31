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
    "5XbFZsV9nNmCxxqLnW6kkYnR5ntvy2rPDcswpfdREG9iQkAy5Hh2DriJu28sT6hrbozej8JzmFYbnScRaQPM4Gsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DiDbYafkm95sccb5LsbCBPfN2pMvcBtRLeFSzzaQwj7MTgqNoUgrbJRN5RmBzNsjVG5n8zp84xEiyjLeNEfDc9H",
  "key1": "4VPSpvZPC8AuKLQ7RGffSqKpyb9z2h5ZA9q5eNTZmD3ct236Z5SLG3BraoiF5FBxDGsQpGouqMUfjecFGtkBZdgF",
  "key2": "3Kfq9Y61dY2qDcgAfimscD5fhV9JyfP9VfrNxS9SutZQGYgmCssCJco4ne43Ebzmqidf1ov2d3f5HFbtUJSjqN2h",
  "key3": "4XzJnPLK1QtQMkavzyuuToS5HAgfyHsZoGfpVjggpEUvpzC6GAmnFtviNbZfQa2m8Bp9aCp8ZVoS2TNduzXsVELj",
  "key4": "5JsCW9WVYBc8SCwHy55q6AbCoJ2zg71QkqGqoQPMW7u3cw1S5A3jK5wqZgAEk4WGQ3qWVFCmGR1xfgYHSAKGTU9k",
  "key5": "cDHfB36jYRy5GrL8RTXCGGtKx4wXuaGCStvurz23hYFRvYgTwe723cfVvdUxBmgn1zJErFJA4gbEsTFSeHi8B1q",
  "key6": "4CE9Ze9kKuZJUhpmYzDcYdvrStcKWabQ2e95vASk6ZTY8Yu8Fb6GfYHr1fkPbUAfeaTArCY2VjptdytcwGSNzD5U",
  "key7": "3itAe913ErjJ2NKy8AmDFNDDRm5VYQZ8XRTKgeVUqbH5yrM4uorB9uPAaPnKCoq2YrXMuAYpCMiVf9XoWNudrBq1",
  "key8": "5kqukmwtpPfESAE2UTtoKXfLfGg5KKKCxCDhu7knsYBLV1uxn2U4zSMkt8YfMxzimwDnn62oX2JhR9ciG2kQecEo",
  "key9": "3xTH6rTCFQcGFrWsni4yfbR6kiNTsQ6p1fsvo4ZQMdcR2zecqBK2a2nxvDfT5NNomvXsqxGGQ5PMcimDKHUpKPMZ",
  "key10": "8KphCCJzNyrYxT7NHUBY3tL535oCSh7o9CraHjju5ZPPqE2kY1GsBFcFKVSb33pZvwmc4fdMoa5EaNPcgyuNeyu",
  "key11": "2D19y9Q5FaAKV3tM37FxpT8AWA3hb1PGFagwqp9yyHt3mEtm89NvyvvqCVW3Wgpu7pcxdn2ki6hp6uSkkG7RVKWk",
  "key12": "2j4KNF1uxEZXfvJGTEqoJGg3ixeppvciRv7MBJ1ESMPhnQMKE9pME84fPJ6b5W8f3RvyDAhZhvxN5SH8M7uN8MbT",
  "key13": "3ffPd1uEs4uzkfkRN5MuD8nTQBJRV7arfErWvdWgrryErLK6zsmB4RcZtfmwNVmqoXpdrZQsTwhAAEvTU8kneLAU",
  "key14": "4SG1Mgdb6aaWonfWbuurR5MVBZdVkE6yaqBq82jpK3akN82sGtKViCeiXWwLHb2cfG55DL57AqK4Tg73Tmhw6Giy",
  "key15": "2W8FF4hcbJM7BLyffKdtvyCNJ5SFXJ4o74PBGhrVXrTDeDm4qZiMiFtKrCPif6nxsMEDnQiUjkwtdh5c9bDZXxtQ",
  "key16": "pWkvbXdYdgL7xprcj1Z3zmxe5DjL2g5saYeUm4jDvmFMcmJTV2iyotRqM71iQdDhwZQy5GjDVdZhnNX7LR8WB3X",
  "key17": "2AnffYsNZpACxCV3rbvsD3bMiT1C1MX4HCQsQJqwPfLwEJngzErJ5xh5QnELeQU1PPL2EJZRhR8nyBoQXzsVfv6L",
  "key18": "57bXviAHX6yxSbpatfqHcWtTeG4R7a1nj1uhpFNXgdU11gzB6BNNVDdwVVT4sptnamxJtRmKbi75FCfiEcLnTubS",
  "key19": "4W4qw5caQzmaGdRajvVR2fVWw5FMJaxPBv8RL6ayiWqmLtEvGGASM9J3oA29ssQU7zzchUq8TFnjBSFnryJZgW8L",
  "key20": "55tfqxKpmVTbfeecHQF8E5yNcRWBs8dPtHznYUekjvhSWuUH6brDef7LCnbe5wJspEk9ZCH15y36bprUrHL8HgN2",
  "key21": "2EtK5DPNuEw6AvEqzf4p3SrrAJFU2MabkbEhV4MgduP2CyUe7e9KLwgT68JKG3wixtgANDAiSZvZRvdEohk8FFQc",
  "key22": "3fjNuNEqZGzFt72BhSs19seJ5hCqF6RsAoWHSqPCThpmNJ1b74PLr2a8ycwGJcjFY5MXgMnB4JNWXyqb3werF1WV",
  "key23": "5dev2BLDiQYF9YzzvgxThh45yVKoGX5S8r9pVPahFEnCnf77kngvPZ29vN2DnDGs7TRQRFzcVPTWJQqV32FbVJSm",
  "key24": "2Tw5xjmt6KdSXCQ4W6T2DQeaZdxtwMfoYfqTHqdRuCi193e8SanA9Lm7xF4wf2WGCtWBTBWhd9Jr4JR5hk1yqVJB",
  "key25": "cnKD1HNYp6tU7tTr1SDMVngpDNXjv63v9Mo8Usrfpiwzio8ivKxXsrzXwAooSgCh2goxDQg3FRzeKQrS4B1GhWS",
  "key26": "4TjmPr7PeSwtoXsJG68iVREhB4yjUwcsA9ahGoqhFjo3RzLS5EqqG3hAyaLHRxSWcnYTrj3u28XVaHWkcuur7vRf",
  "key27": "5kb4TwCxAZ8JUqsyW8BB3aBfJaM1SBhe8k9Bzc4DorQErNaQX7QYMUy2EVrR2R9wcaaKN9Q4guM1WcP8sf5HU67c",
  "key28": "3ZsDtniW18g7LUhEUgqpBGKRQuj8Z2G9yoWESAVtcHmgcLfKi7BZWhJjp6c3NJmm3tuzSCNXAa3twC88JLp3wons",
  "key29": "2QnpqGsnDpk2N2GwuRukMxGdnWWLMuXVysT5L8NnRUBtx6sT3osw2jr6SWJSJeVXARGRUNVrqCkgnQM2gpKouk4E",
  "key30": "2HTj17jUUEaGMysfSvQ5fVaaC3ep5WJ3pgJxuq1iw7yd61a3TBkWoCXfmJmBdBDXUf3CBXqnA95ZeARfpXoAviXv",
  "key31": "RQZVTK3XvDviRL7Ee24TchfgVxkwQeDwL58G5WzUZKGD7UFKAfiWtZkxPKPBHhK1P2H97wrKvsVNoeH2WnsqxzF",
  "key32": "3QXYQ877yvTNKXsv8DCApcLmfsva1xaR12zGE2tWMaQAZ2X6SLhBukctmQsvvgx3tfCeHT4EMct6Zj7KR81B3hrB",
  "key33": "43radUKUz9bpiEiuj2SoF2KUk32QGTrDcCgpK6XbvBAeCHYAtnopRbnLSaLDvwL3V41iLx6wEYacjqZuFex3Ykkt",
  "key34": "548EvrpSB9PHHNML5YZKBQxuHYFKCTg3RZDvxJLUgU6cZxMf6JrvDevHiUhS47qLZMUan3vvGin2euNWt5MNNsE",
  "key35": "4AjbBubfjg1sHcWPw5quaGC3qYNYDadn8mxXyt5VkhohQKoS8iyiuqwEg1FL8zxtKsNjdtq2ehc2EcCbVKReN4Av",
  "key36": "5Jvb6bQH2bcbAUf4UUnKiqd1JNwtBxjeXiikiGdvz4TwBhS1nsnNRvt4TevbB7XEPT6hvFKNfwi5qnVknqhohmt1",
  "key37": "26FTsHLc2FUwrV1D7Mjxh8fhASUd9MhoUppqjufdpsh7Wh1kCDaYbyEBb5GsKwS16ayyYNmPMkFWWdoH1VtpdP8y",
  "key38": "36pLz9xMUDMpXjPur6Kjpq5MoF3UXT9jzYe62pUXe82UsLSAB2pxChFoyV7w1YANsdzoARhaRRbSDGJ4dN2K1F4R",
  "key39": "2SK4k6wwLsq9BLJK7gbjpRqKAfEToYJgzYnCQJYbRSTqa953wbsK29JEYrUYKj9UKDcKPMnT9EPJgkZqXCtg41kj",
  "key40": "4nDLUpEdrE1YR8kn3dS2d8hvv2SQYtY9GK6QWVH74MAPAjS2Tf4TkA1KMHKLtWfmJV78JVNet6cgqcXhsQQTiw7E"
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
