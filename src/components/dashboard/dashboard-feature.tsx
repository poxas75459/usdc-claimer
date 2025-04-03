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
    "43cUZd4BXQsJFjDw4LA2XXjyS449Ya2XJLgBrpbyzsHV4fLWn2kGwHHmyYQ2ZsbJgV2QYk3vLB4zu459eWZ5VKmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHW6f1ZXg3y5MwZR2ptNQmMhMgbqTeWL1Kw2wAstrd2GNKRuCZeLQPdx66twbtcdJfhaupbkdx247v1E4tRCBFn",
  "key1": "5cxfNv3hm9YT8zqPUVLDnyrxg2Yo4mixwQsmfXTeqMEkJdgUn5JLLpAwzm5xV5K1J9GehRWUbDYyrikrjW4Q7xyQ",
  "key2": "5TV4saKJe5a413GSmf3JqA2G2rUeJuHuxkfm5qCTCKXs1V9i7WXB9Rx8fYHcHoyQNkyvJmpoG2fU9d6XfMvzhKZQ",
  "key3": "3Vc8eiSvdhmGQSKtUGwcemx37jfoRpg2yssJCtwv6QhroLFCYy5G8JRSiU95mbXN2Kvsd6DXjYayyXHUc7p3jPTH",
  "key4": "GMuSPHt8oHtLvSbjwiWy62TTT4eVFLH9ERbE51KGVfypuZ2igCaSTsg4vF6hmR7F9fSLGNwfTuqDrVWBXD6bLDD",
  "key5": "4SDF61VoqZxR23sP1sQ3VvrahN3FYFHbvY3nJWYeAwetqyPPCcCqeKty97ojeKPMy5QHJyhdXPRkYsTJZXdbABae",
  "key6": "5bW6ZnMWBuahGkehnxmHNSjxyLCwCKkndXcfW63Y5kYwMWriq8qbN4uvYLz2yRTsXghEzLD23e7kz53y8Mf3j14d",
  "key7": "2vYuCKoHG4YYF8q2VNm77Fkz4qgumEfPBJKEojP3TUVE3y8CMS7uKyVDP8erByR5C3qACXq9Y1NJfw4NFkWSRwjz",
  "key8": "58fj6LVdDict944syNx42GVR7SeELLPWYn7vEXzT3spKCx1nC3KEL4jvRKyaiQcJN15Q8ZwhN52eoVmvuzDjUE39",
  "key9": "3mYShSkP7u1vdajUB8h3xZYvjAnz8AGfxsg4QYmcB2gviNF29ZTYBEfc7jvT4yFXbBMyLcP4Rr6t4ngZVe2Kg5Qk",
  "key10": "gdRnVTv3b5HzkMU2vxirZ4kEeVgcnTFTx1tHSaiqiS4kYrZMpN8zM9j1KQGXrcNrn4p7MXLj2nhnR8GBhAzdyf3",
  "key11": "5RARnRoptNQna5823tgyqZXQBStXB2qhHtA3naerQhgt2wtTkpuYAoUYxTuGTHKGvh2TUuJu5gX3VPNuzVd7okvZ",
  "key12": "3ZgbMp4wuFy7oAtYK1D6aBv2TvaFT79eYVPa5q84joVE1GVckY4bMENsshmmrRCPu3cj8zeSdsycV8n4TtBkS5Gs",
  "key13": "5oXi9xpxocqbzd4P1dUGmNuyib5KrkbWfo8wGykk38KakXSLct4FyY8Qy7FtCDdZJGdA1bBMyxtxJuBokdhYesVG",
  "key14": "3RaUYmFepF4k9Y1xBWzgYcHTwrASVhHmztZM4qTqqmhGc3KHv23Pn8juTZtKD4KgeWUXa3qPbYfCK6RuvESoYWZ2",
  "key15": "24UxZDy2iKYCKhxG5RcVY5vxJMgUXJF3PU9vJjM1XTrgaGx77aKTW7tEd5sdZRs3BWbm2yFv2zdSQWvTFiTCVNMM",
  "key16": "5vAiUw7nXPVywApwm9kshFJEXK8fyAH34PvzXkkjwZGrkQjiGQBkza7Pog3ZATT3SdLQp2SqBUmmKP2eNDowskZB",
  "key17": "ztMtijJ1dKpKHJy7HoyaBrX2neAstZs9rEA5SWcs5gUvyw41Sz8CE1bbG3SHcM6pBenyTVUGRBcxJA7yMUczb8b",
  "key18": "4iYNgftL6JnxwruQh9Si2j3VFqXUK8HWGCTKnGWG9VKPRfkEV7ZKHj4NPFuZqQu6KTiEp9NxJ8udohDRS97Peuxm",
  "key19": "2RcPH2WvPwscetLRp1JbJaPPkG3ngFhF7X8FKiNLsKnjFFPowyfc48UAzBQ7xzKbygcsYX5beWYGSAuAfnXyv1rq",
  "key20": "4M5Dos9ijbnxh5USPNKcBeac1wkwjKnYoEEynx91CKMo8vggp2awRqBu9hiRP29zvs3DpdENfGujPRdkcy2wcdJN",
  "key21": "4J2DfHpnTJoUMcT7TidXoMcPwuoKr6yESoL183n3LeNuJsgdjsQtmTSnkvQ7heh74fQsefzoAR7116aJzs95Ctjb",
  "key22": "5Dr9QmKgxiL7HpHzaJeQ2gdZBk1yKfdaoSE97QyhmyLMrniAK2ZSdvqTt5tWrGo7e9huEp29eXVev2TmxwCCcLWr",
  "key23": "3Z7UmUzsusnbAx1YheceimRv5QTvEM8JgwDmgwDi6FKRS99qyKqDjt6RrjhptHaaYKVGV2d3GUUAR7NkfdX1wnai",
  "key24": "2f21tFyV1bF8WBjGkZvj4ScGA6GAkWtqJP617xi4oHLSHptJ9rqYdYVPd7wxA5kb7w5XDr5qhFVM5A56TabydkK2",
  "key25": "5acVsf29xMfspJFqLRYXNE4rKrcYSAaP2Se5NgGG3G8anCLzsEjFouXaNqQ9KzwYMa3XRpazwDojPqSops9CZrFi",
  "key26": "5ciAsC7RUGYXzim8hjvvr7aZ5ZK145UBF99m25rdmLMeancAxP9RSoQE9fGdMPyGAMHC1WFm1zSuWKjrDeR6Li5b",
  "key27": "ri57aco96m37Uqh1mxumqoTxZob9NoLmJE8oE8yGQFfTqNvnxZSK97Ge4qDA4x1FeYgSkX3USs8bFEFMSd3y6s6",
  "key28": "5eCsgior4m7eBmxN1svGuHi9qM3oCeYh7koCLJ9LcfzMPykXpKFPAS9yhXJgDnQTtBgGKmkLK8gP4Q3ZBHyaFJ9y",
  "key29": "dyQSj7yV59cCPWD47QxVf99Qw5AgeQQkCk3qdVB4vFzRsXq9Hg67hQXcCfMRXX1igSPc6vgXcKcKhyAT7qyrZ2J",
  "key30": "4KK8QZzJjzT7SLzct47LysQex5K85BfMvpMLnBttCc6NoSiYw347fjyxV48CSVncuyWQZbkw9hitbvtPYJKqifB2",
  "key31": "2YhX4bGvpSXvCPM1RWFSPbeoBcKSvDtdADzpgeMjk233XRxMht2KNuuq9Hnc1dE9jFBJABq4n7hjKYbBNKtwhEje",
  "key32": "42mMBL4JpjWr7CWN6uJKRFfnpcHXGGeee8bQ3AhUacYzQLqskTzGpMWrazKBYjy4skw1Z2DnUMKPEyGdYTMnUTUK",
  "key33": "Z8D4p5UDcBrTBX87L3xXWMAUvJBqWmkw3guwtG75GYFQvHteaLsrN5DgZnPFeaNyS1xvn925rGH3EMhQJTkXN5K",
  "key34": "2q3eHRHTRa9npdkexEoUDHmJTxLWLdQcY5xfUbPk8wN76WwTdXUHCyJrFxirg8cjw5CLwa6UdkpvbGpsoXV8atLB",
  "key35": "2BDAv2msRCVB5sZ2D4VxePFEEvCSgRw5xyQWR7VgRH968vR4M8cNSm9gfRBAEM5NdLfp3HVifBvYDp5D12qw6oSM",
  "key36": "M7soSqiu9i6E7ck4E9X1vUD8ebqJ6Tup6jdbWmeJeuMQU6cWCrjNE2CWV5KkKCavEzN8eBhd1daR8N5LfGMwwyk",
  "key37": "3aDLeinpaNjCK9RDxCUyw6T3XEj3VTsNP4Ls216f2mG1f8b3iaj8qhyJzqj2LewjumkWtSSye5P5cJCSr2kv2d5x",
  "key38": "5qET24spvHpoNYrjbWCyqB2b7ymbDs42aQGZjsm5YawzWQRzjA5rmoSpG2E4pdwVBMUqAUWXeXHNSMXhf6MeGCAc",
  "key39": "3iR9SYQ3ZNoCyLMGLizcGVfDQCtjBEjRXKGvmQdvJBdndihigeJsYE2EjwSNT6ScvpcqXPPv6CFT8jvhpqqRJ6aF",
  "key40": "3n2BzJWJkG7Yy1YByDNH7cuXYpdD3uchBk52ZsC2W768REkrGhfrj8rtsCNymEkqpXNEz4g429ReiW3CHBoRmcKv",
  "key41": "3S5B5t5BJBfe9tb5sVzkKFWYkz82Y9uA8GVZG6bh7ZCpjTY2pGXuCJ3GQm8jj3qw8cVhUgEjgTmEMD8ibdFwc8MD",
  "key42": "3UFrTcBHfRmZJzaea42ce6K7SCyApH4MN6xLho9N2UougVZXYto4y6KwNFkN8W9wVbUewkbZ9ZdjS9LKCs8fvcUZ",
  "key43": "2ciiTnuXMs8fF1RT2MM6zRjmjbMxhxh6iRwxc2yKyeaxTzZoeowEtkPq9N4EYr1CXu9m4GPSMqdWGerafFeh1iCu"
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
