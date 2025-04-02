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
    "CEwWeRE4dFxja8Mo11YdghKbtjoJZieiDnCYJqYp5pp4u3N3QUoJNcU9V84nqBUCAiDfjSDcgZuXL8VmwibyU3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63SGLHpXYj9d1PHcSJHPPhEA4c8Q5pqvr3udFxSAeFXBx1GEBw8CPD6z889YfqUH2E9VScJn5iXsn3AEvV2Tn526",
  "key1": "5iASQUndJ1EUc5d6HuTgBdv32W9eQ8YSPPwRU99p9AoeUeF6vWFrGBDBHGqecQmuRFCQmWPG4vgssQj48ryCa5ni",
  "key2": "urgSTZjjhA9mMyqpX7LCekt9QyECswHUh1W9nUqt8QvHrUuTV9wGRw8pVQQDZM5ubWKLGJ3FRXH5PrWTxnd7SGi",
  "key3": "4adn52dLNCpXKJgN393dxiVEFpJZMxdvKqgoXwMumfYt1DU7FuJe4BDqg78VurPXaqzDtPFq6H2hkd3YvwdCcR3X",
  "key4": "66qmpsQPaX1xMgyZ2P3rAovxkQs3EPMzhNspNe5CgwUTVCHTWHa8KnqmMzoFoHSUTnXEoCs1RZYbrnp99Fbz5ksY",
  "key5": "2HwqLjnYjWb7PmP1u9Q3bF7iWyrwmFauuzbGKFaM9cTji6WJbwNatJtEkK8uGQr1xqm6ABg5zUyjTPhAUeBZTboc",
  "key6": "5fmxz77GAJwvHWpSfcCSgwJWN2uaGGwjb2vcaas9wtZHf76jRpTB9BxGqgZ33PrBmrkhtgePW2hWCi6SGWDrxnfi",
  "key7": "28HaGKrmVomCqMyqZUo38WwL12g7udpHSsjJ4kd64UBQHdQky88XvUiUrkTzmybk4EQ3svuSXD6CcsLaabttrfkV",
  "key8": "NhNajb8DLMuxYDyLbfTi4ctt8gZ3Ry5rCrqoaaAABFNopsd81LorCKyzQuFBc77ZPpJvdoP3ZH3xZYkaZrsgCTn",
  "key9": "pQ1u5hEexstVnvTvMb4spGYKpGrkk7XHo3LVwmptQo7brspTKQ9VTWrYbihaGv6exM4X3kSdrh17KdtNLzWVmfW",
  "key10": "3eNdX2Bm1NA3TVr3U96VuMH4umc86Gm5AY5HAfWXboGkDSgC2k2DqaRMcCWUabHYFm6cUQnyjaPwjDzZMrzTBGVj",
  "key11": "4qRXSzDyUVFaB11r3VPLx5ysM77YRNdbESvbaQstQSBFRKdWJRhBnDzPzNhSSGsuVQ7PC5onE2QKBUJ2TUbeJ3R7",
  "key12": "TQhPs91S5K2LSBybBXCTALNjMcAXj9iC7iiVcUPi5MsoeEZBonWfTZtCGGGk4BrNJpPCjZR4FtNYpDcaSrZGbeh",
  "key13": "2QuiZQvVTsTdNxqqoz3mTcJ5x8GpuwrGdmXkwVckPjMqMPXnpJjCumkuXvrVfLTCi8zAWRG9r1Er7jLjZi2M575D",
  "key14": "39gXnvQnsepNpDmkHpjM7GwyWmXsYHNvCx1AGQLK3WVfN1PFC6h4uHFWvBSVnnfAtwKohcy3ZqCfgvw8mWt2otgC",
  "key15": "3UXEMufVpsBpVm3bDL2Ff4WGFHmJVpNuyJVNEH1JZsouc1tt6j7eHgr5VyjN26FfLpN6FGnaVuxLs63BWghDSgTy",
  "key16": "4npoUvZkVeu3dDEMg2y3jfFafag3CUVn8q7zXysMrX6ULezi6oyWhPTA9CwnrTAszKNvEMpKWN3ru4n5qUxGbE4B",
  "key17": "57Rd1wiTDrSqGRkPK9oTz7gDQummPGyuJPcFNgipyLojQa7xHnTiduvic7Af6RVnrzV6M9M75f2qYgcrP2zHBnWb",
  "key18": "2q8C85TutyJCURH66UKmd3axcJFrigTJHMjuip5En3MFhXgHFeLKcvkuDzTDQ4ebdtE8AYd9fgoiXdW8ZKByoh3x",
  "key19": "5FxNCmG4VS8pSZJxTSZLsCUP4zmpR5tPexLZWkTkM8ZeERQRtUuXxasdRAL12v2eRfc88i5EgpVh4RcwLRHEJyMe",
  "key20": "2twyQTeACvMMtYMhDT1o4Bkkhq5axjnEPmgA6QujC2a5uXkiBJzGWNVsvqze2h44hcezKZCyi6s6rm62ykyDzCnU",
  "key21": "2RytsGY5i3XTdeU6gfJEUGfrc74dyn8akBH1wwLAu74XFz8XXuJsxP7f1FNxciKmP3Qb3QMKFNPbFRb93zAFgnqd",
  "key22": "4Ki7K3hk4Q5tjpKHthHpv9kjo74hmhhXAMd36fiyoYFCKMy6UYuMu2hP1xZXYA9YxjD8bN66StvJ4fM8yu5jfZ2R",
  "key23": "2ZZdcBq8HfKv1ZaA83Y91Wj2K2fb67vFQvjRGjbhbNUC6DemCqbF8uQ8hFS4bvSQ4RPbwoN2LERy1FwE6hpkoKcV",
  "key24": "5LdTZpT18zFSr6ELCj4kGMFZwgLFhs5EWet5kP8VhpBF1YhMEdYDpUXiWWtPzNxWKL4rMR3QzF4aKxQfEe5sLar4",
  "key25": "dynpej9VebiLmLmt7RTeDqrGbWFx6SzQFYPB8hoqQtwCLpzXQwTiALoXSNuUdfutqbttc9HPVXVUVm7Th67nXFP",
  "key26": "2Dxw6zkFvoeQWcaH7gEgy2phPjnuqh1RNkfYffn4vMZ1kD1BDqvHabWeFViNC2jhpTSQVzfboqjqEu92hSEBo3s8",
  "key27": "3FEi9x63ahXD1ZSc3dWDyne9nC6dhi9bCaUoRwNoSkuWQDhU2EpVyCThP77cQqQkNPKR1BaHmfxbyvjwaS5UrqC",
  "key28": "3u6iCwXKFuQ8NntC47N4unf3eDMJVtzMZWWY7gh13uCXz7QU12Qgb71ejoJvGJktWy2bAPPTbPV263WYQsTto3oL",
  "key29": "9p3CWsyAToJRyVj3HbQ6KkxyZePouyPmtcddduTVQTPv5DLZt2exiE4MJVjoopMFuiDcJtjxnbt5v3EDyL7GSrY",
  "key30": "5dcNegk7BhWz1LcUYn3FMbJk4Fqm4du6nSofF74hBrL9XkDLsxtdBtck4mcLWpcoygjXXvym7xTXyYcijFUrHuT1",
  "key31": "2Kz2QPSxxzQDhWQVaLFFvd8nEqgDPj9osXxNNaLWMD2A2UTcMHr6r4rToLC2jPEmiZnJZuLXJW3bXv3yXwTbe9p8",
  "key32": "5WVcc12WeZLqbz1mzHhvPt1M7odn1f8XzHY9iFi76sRu5MavzxSg9RGoHTwMbnkTjjoK7bVnCm2pFRnVdBgKZUC1",
  "key33": "3ZBMR3nqhPYBpwg2qhuZtsuDvoJGDRWznrwKcMKksrT5M1EXzZCjcCsFP4V9pKWcxxsDZib6xry5uAR7GjskETRe",
  "key34": "scwFBgzYUjQfxd24LpmVv5Ltc2njxvGRLiJq7rwuwsq9mGJm9FZvrqfqKaWN78P725fxCLsmn3mbExBaVXKnrSr",
  "key35": "3BQbAxptoD4kkvkFhaQDU29NXjfkrv9BpgLwJE6kM8xGKRrz4eFEX367HzMgJefYo8bW7USHBx1XgnNWu3TNvRqU",
  "key36": "3GeZKSHLVf6DMEenbPoVMzFZDGwAKHJ3xPKuGhv9PXq8QZ3XGDhWMikJbvpHhMpjf19M9VCd5eghRZyCtUJm3nHP",
  "key37": "3q2H1VejCvGEWV1Cs4doqTd4HQBKwGcM5m1vL6B6MLwJY1zgg83AGf6GfoHSHdxdqzByNi2KETW4F92Z88P2rqkJ",
  "key38": "2jscWVYBbBA9mX5qkiHE71tbUbgbnaV1NHCQedKbDYkySzswkMMqGjtEriFwDK9BbrmCSw6BLZZ8QF5XYioGht4r",
  "key39": "JP8sG5dXUxgfR6kwWCuRKGwyV7tndWi8C9W6DAjdPRGgSmGtqCWj4VczzLHcTfrySadUd6g5jTA5GR8FhjXwu4s",
  "key40": "2BY9MR79iLeXQ2YqkJmvg16HrvCRDH7qcPti6SoY8tM3vFuE5hWQUXrx3kYxYHN8tXP4LApnNUa3r8tRoj74CNxs",
  "key41": "5SKwzGYKVyH7Z6enjFNP4tzD2HUeJPwaS1ifDkRyZAP3Z7GUBoxUnJ5sBXm6sTcVbEKejGuU3YuS7JhjV8VYxDPb"
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
