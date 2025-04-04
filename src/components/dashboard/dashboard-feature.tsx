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
    "51bHeK4vUnfnbuWctqPb3JHcyE7fV5mftCcFz5k5nqwJqUjwv3cWbUtAibfXEhcq2nhoqQhH5675Tm3WnJuXyYKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QBm7xe98gW2EZK3yQdi1H2y6g6QiMMfXe9PT8sZCUGzEgnkTWDoYYLLhyA9eFAmi75yCr75bRiaZxT7AK5VnsDA",
  "key1": "3JqNWXSFfvvp3gPGt8upztKYM7asUBD3wDopbACocsjuQsirKkgrDfWKbmqnseEGeQVmLt2mVLaFV5S6PXNxg4Do",
  "key2": "5AC2ZuZMRhU1wLfrtQqWeawyb3hesy438gbZq2X7QhH7g5TQKiAjcDzfdC1F4szD9Wkdk86W1CG5HBGdV5G9T46C",
  "key3": "2cqYnLweGhoEDx6V4cCBiRkRMGWiiaE6eYKvSZU4CsCJ9TiRKjMsKpPHa6uZPz6x1NzSCdwsjxcP7gCnvQvQfVNs",
  "key4": "5RmdDRZQ9FY71HDTJByxrtxbZTuneSEg72wKW5TdWo9L79nydvLAMgJXGLBmRCsRu27Jsus2WTzuLmpKhURHPefV",
  "key5": "5WW4MSLkQenGmThZ3ehaQF9eN62TnFVKtKsoNXobr4AQS96boSBZSs3ReBNrtHYgfqzdUU1vr1erCQVUn7kQEwPo",
  "key6": "jBzXAHJ9y8FSqH9BWJQaXxMQZPPgFk8eUvtApXgqwg4fX83AXzze35enzs6QDmxa83hHeJzDitRYTPCTgxHuHWY",
  "key7": "3hnSqtuwW6eFqopgSimEqbdHg8zbBeW9aMFmpwcPhaaRqKv4hapAXYDhu1yVNw32PRjLJL7S49ntbtjia8HsE1m4",
  "key8": "5x9vuVfQqQjvJBZH6zx6hYPaNsr74EQVtp46PwEBURSZgevBnbbLVpyeyCK8asQPXNF9SXoSpx1nwu4ELsbtPkyQ",
  "key9": "5SeEGkZjQtpdJ9Sgy262pGNF93TbX77qHupxixWBvsg4bbYB3zSvetM7ySgMyh78pXoc5sKd4U4EL5dDz5j3gtXE",
  "key10": "4C47ZzQwCxENiaiaeZrQwZQuDKVFsUchiypBNQSAZ7tHGoMvFwMrHqX9oKot99TtbC6RcTgDCDQefUXXUBnERpXD",
  "key11": "4HzMwsNSYxM8htfAcN9w6wT5M9Enn6rv15s9z4iVJvSC4QeBCuMjvpnysYVcS7fqmZQNPL79NBfXmGccAZCtzouo",
  "key12": "34c3NvcmG8mPoz49ZYAV1iRBWEDPVwkBNRQoj1BiftfT5nfYTahManNMrUV1tWCPyH3zcSHKLkqkD52he5Ycdp35",
  "key13": "2BKogXsTLu6Dp3hW96x6FmnueCS63xxovN2iCS9zbuRwAbM6UqWHBP25mEtiUBiFcA5xtHVXBHrmo69yhi4ibY1m",
  "key14": "2BcMPpBsW2rHzSLSetc4L8UaDm8SV8CcztJGogZ7PMjLFih8pSs6umFz4xMcKAHj3eq6RWnpYPigP3aAtc8KrpMB",
  "key15": "5sSLSkhZWyWkptpipM3e9VWQvA56xugZVUQDzNedNZkTrgwvU2x8WaMoUVdWmewuUCT4HJRhfVL7iQXzf6rKJ4wr",
  "key16": "2YrNS9W9jJEtk9B3635h8qTT3b7adynBgeB3PJ2z8iTuxpxpD1XNmwpxcyRLvTdrMBbcQMnkjxYEW6WtobxvmzvQ",
  "key17": "DE6PjBeRmzjs2narnQQ1PPUZciRaE3XZhYzHVLNrMZPN6DXhVZezGz1x79B1NdpSKybp1L3VLTxKJ49JRz39Jwn",
  "key18": "3REZsSjNypywLuHJr9QnoDDi75sQzTCKHQoWjziCYL9UCPghtvLBRNweJm7EFc2aoXGgSSPGhnB4fR1TbuFCiDP9",
  "key19": "2VPyueN7pjSyH5wxPBmgKR7RzG13q7Thhk54nuTtp6QNJrgKB6s1JWN4FZxxKexAU7vFW8wtRxBUzGSgyTKurVpr",
  "key20": "4BnBZD5rWgY1HGBXFYqWK9CjRNjncSBoaJpTqcCyH5qkoQYUY2PBQXNQDRW1Dqm3kbQVH4TsWg9eJbDnvamMD9Xb",
  "key21": "3AnftVqnc9y2gWu7xZ3jPyhDZ3RHYvgCpcaxXWpibBTfMpVzb18Cdtiz2ewMfPp3zr8FUoDs6hp1gr2aEk6qrG7Y",
  "key22": "3QYHjLkhJQ3F4tC29TagdimN5ZvrjcQbxYSpaqdfQe8Sj8XncKKiwSgKm2xGXrHSUM8ow35o8tSK2ZnaS2zRkJm",
  "key23": "He7MBTgHfbSPq85QwdzJimzVgkGYHR6WyHKxDCy9cSLVau1LH7yz1bwQW4BENbhPN4AQ2TUQnVENJi2QhMiqiES",
  "key24": "UdWLuSJ39SYZuwRZ1piaB6zseDMG1cpSyrJ3uQPMyntpb7QsWhKd4xKnqLN3QqXoqdaqMHpnWL8ZJ9dFcpDqVAt",
  "key25": "5CwDnYpH6PGeZNdr9YSq79AmHM1cHf9qYL2Je9Kqen8UDjjvYBWnLnJ7bWaSNM9p7KcZApxagMfut13ze4pjT4Em",
  "key26": "4zZ9GDg61XNZxxcUSXVcBsnpYq4h8vihtt9aVpBiXcbeccDWsVUCu9RuxU6jQfUy5FrycZQFX4UBsLN9JeRHXuMC",
  "key27": "61GKpaDPahRhXZRM2wVPNwyhWQ8zXJn7eKBwf6HBcZsNeTZ7a4bx7TeDBncjtVpHzuVG8FhKZtbnt4M7xeB8rCpB",
  "key28": "2133KbJUPg4NhX53Vc3NdJa3arCxuDhfbqLHAsRrCqK33ArSaGLwWabFs1w8czJDcb9mTcbwHnVZMjMWJ7xCzxGn",
  "key29": "CuLuLx1PVQkWdCeeozjme2Brnqf476PEEWqTKKpV5Xnzxu1qadJbvcEEM4towobjjYGxcjxbUQ5GhGXc7m3HUNT",
  "key30": "5UV2acswd3PShRVUv8m9qcAGE6LKXpYg56zNGuNR3c5eZowv9sZPS1dw27zQySrv1x5277bkfQbdFQVurwCGthRT",
  "key31": "2nuG8WLZidsp3i1s1QNGv5KHoCmKKTS935nizngGV7jgFPF4b1xgfJnY1bYr6mL5MyxaS1vhdKJA4ww16yBeW2CU",
  "key32": "rZi2NB4DEHVKfuyH6MweNvKALEB5n1ySLJAN2pHR6L39PV9BQbAT3ApUmW8qbdDE1E41YpCR2ZFquHxpvmbF5u8",
  "key33": "yHhZ9jBV54bzEtwseTNXngFedjMEnL1dvoHfQZuKBYUF3Kr5RLL23zmCKpbc887y513eZCcTMcrixVd1wrk4qbk",
  "key34": "5WTDxqPpnn3ofL6UvfUAwLUgzVy8SdVEzZd5pB4swV5QqsRscz2jWhkR3JDv8m2GMK79EGDiBSd9oknaM6myYKiW",
  "key35": "4PT4YyGwAZ6inEfte4Xdr7xKGthCU6KetBmwuhydVJfquremdiEsKXZNv6ARCuhRuNAcnLtUsew27hymVj3MqbHN",
  "key36": "43ypVMJfPFXWXKNbFyjgJVEMo88zZg34q2DMGWPgVjoqcXTEQx6dPH33UZj4LdwFM67E2ha2nUtVDJCqkFiJoUfC",
  "key37": "44JhNkGwKVw8GdRevVHNt4Ybt5WhVnfDMQ83QCSoPf7CosvuHx3xA7BUrr4fPy6xNur6qboJXQePj4HBQxAJw4Bk",
  "key38": "3YBfjNmgYH4Lu3UHKmXLhFeGSVSzjXnGuFraXdAe81U3b2mr9XLZr4wruXHY4EcwshfU6N1autTpNzDwk8MejENs",
  "key39": "2sq9SobFeafAg7NCy5i9dP11ahQ3oDLiM2UhhgEKWcLXNLWFsD5D2RK9NRZ8PXqYJ2p6YMFhEuCk8nmJUzEboHtB",
  "key40": "3RmAnyop83amSN29TYiK4NAnpWWu6wjUjm7vb8GctTHSyVpKheWynFmrsE8kwJcjbRsmeSwuqkbw4mGXcvPy9ffc",
  "key41": "4dgTKWwt7rNgX2rUi1wETyVezL8A9oiF9exnR397S9NWisRpJLAHGBiZXjpG9aSSsJ15Rt8PJAcQLA8rra6KkroC",
  "key42": "49jSp9vLEzEPSQjCdS9hxUGqpmRj67cnebFysoEgUq1rzqztBBYD6zmqjmNy87rEfiXgxLrxoKcb8yXTtdiiMwRc",
  "key43": "36ihHeeb2E3VgzpSLY6eTiQy5uS4DfNgKqiAP4KwaXxvLHxXyK2fCn6hTMVES6wGskmMHnes3MaEyBwcBhraei1D",
  "key44": "34y9MGttKnTjDTKdBRDc6pqTcryQBbvuVp7Q91g5g78jENchqyPtCBbUCoSgRAAdCPDfViSTtVUWbQN14bQZC8ry",
  "key45": "5GDpmUPj13En2raEyoyyEwf7aSpk7BqLBjVfsA1kbDnzYMqhF3fLppbdjhduXUkj4FrjHfbQsnvaNWtPgx5QTk98",
  "key46": "4PTUEMgFKyqrd6GYgZehUivccLcF1WcJGjUtXDS8NCmUmsCu4b35HqW1CxKTVWrm71nvi67zFTDaiD4yYqtyTsTa"
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
