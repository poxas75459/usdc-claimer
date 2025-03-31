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
    "4sxUBBnnTgBTEXzerBzk7QGFnZ7QQYZ9pqQ8UxZJKdpEJyVS2jtCxCyziTmzm59ESsEcrGnQbcqebqGLNBwZ31mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzGw4sJjXaMJAi5U6y3yQwRu2K3LtAo1iwvxYyt6ytvnBGuhXSXx2NwbHZvv7G21JDVS3m2wZNhrwqSxZajKgo3",
  "key1": "zkU8hG73kkPDGJWMoUyxwiivE8wa18HNLzsxQo4jrpCcwjPgLm1y46XUef7iYvVd5M2tr3HEt3KXZccsUCNnPsd",
  "key2": "5oMnzCxfJUqNmxNQz7waxpTys4xgmbE316ogCnfY9oXv2fi3b8sAXkrhdRr7rvgZVj7kSqNr1nV3Tu3r4WboTsxr",
  "key3": "4vjkBzAB26YX1SRhsY6RZLSFA2WABwyJ9ydVKMxsw3UkbMrNhe6CZmeTmv3febvnMuurGxxrqCrfzJiAZ3nPTgdB",
  "key4": "3qr22nW8BdPiyNSTo5dfutQGDRsbevssYxmNLdzkaz4C2RiFKgp7QS48MKcquoLcmk4ujMn7niMYxKCJARyBW4fd",
  "key5": "qu89XAcJ42vGm2ZmydgGdVAeY2ZDT6FpPBoheGzjvRF1uJkZKmpfNgzokBDRiu63ECttWK1ZB91GeCjTgffVE9j",
  "key6": "5hn8HuBCCq7jKdcgvZujVN3y4j7CyGf9znBDikebLzXmDMxfndv6vFuPyEdo2Hc1BjsAa3euBhozgBksqRHu4Fvg",
  "key7": "5rEVTCRALmsho9U8y8FsTWD9a5hXAe8C6JVkibKyTBcEh5C4FCjyokFiTS87ZKe11Zf9Ne2DLSGSsaChNywKYCGP",
  "key8": "3Z6fpCouCxsQvXtvjq3iJCZWVr1ADjQLwvzNiBBRygbzTircJ5h7DEo3Evs9bqmtpYdhoztPib3AwWEqWDLoXWDq",
  "key9": "3rRMpwCcenKoRmgztdMKdJkhuTr2uSyKuEDdQbm4zb3Me9QKJRZpRkPb71XgZA5gRXBLgW3p1yNokvWBTbW2bVas",
  "key10": "3aZ8Lo2GG6EzPhzuKxyDPox24D3mzQQLJJ52CpuJ9sQw1cLPtciLni4yPBcbBK9pe8DV7tFcvj1kvsBwCq21RQCp",
  "key11": "2d7aVG5MXFG4KeDYnxPwcniT31SUcXACfUyoPcSNzh92UHKArs6jM8gLtx7FfcdCpep6TKE7xNib2UKiq3n4pXav",
  "key12": "5NWcsqSBX5BEhU5ULVdywUsMLFKPRoiWvr4WxDiaFuHSctKRBYteEE9R5FULZ9im3D64cut6qwhfDpehtsADfJw5",
  "key13": "FmjANVZZZmVYo3QYE6asNYSzTJUrWy9sfG4HCycw1FTtZrsYvB6z3DmvDn7h9a917LspG9spNvqpkaNTKSJmgQp",
  "key14": "3QPio9oXzqBa5cbL68Y8KvajacbHndB3VEKDkwNxvSN92eTfr9fUPjuMACpEbYwMBQuLHcfjS1ABgw24czRMq9Jj",
  "key15": "5wL3wh8C2KKZr1Wz83BH6EB7WgERvtAwxPsSSV6knXkSyySFxo5ghkyFEWmxayott7aXQwMopdR7zQk9TVK99Ynw",
  "key16": "5d29KXHNCaQxZt9fp6EMferH4Ww98drUAUgqNYNdM8A5EFWN8uaY8txX9M4J8umvUvAcWRmVJ23H2JRsZ2YgAfBt",
  "key17": "28vQc7VPxpDKdKaBy9oD1f5mGi97NAbRGqhJLYrxHHSy9h9WSuv7RVEu21JGX418yTDmTK9aPUYubioxc9CpSgb7",
  "key18": "mMALZwvd1XCxiTU3ybUgXeSqe8aSefRrDpQaa2AYxriVuABFDs5EL54xWrvbPjs3CSiE2v6vNvPR3w3DEnw4HWt",
  "key19": "2mR7m6tGXzDRjYGm84GPDXEdiY1WSsfBdEfkNtBsGTPyHcKzb6w7DGzbXmfk8gAwvhcyCU2ereXSAWeU4jAspHt",
  "key20": "4BCSxoZYB7EXhjotiTaL4cPDt5ZXbhZ8LFzxkMQufYMfunRuiDvjGU9tF4tW5TJnCbYQk7GBuTg8WHR3p1CYE8qc",
  "key21": "qH2GpmhNoryvJJPoAjhpz6TkCPWtQfmiH9iUZQDPCdALZTi7iugJouo3gfhYDEdbgqJp3q2rRb8YWK8cwDR7qRk",
  "key22": "21EWjBq4Eb6eoM6mwDuQ636MXeR13XS6fxa7SsgpeEMJgvucvmAdqLBHZpg17RoKJLSZkgKktbFgkppDUEd8vnXn",
  "key23": "5xKjrXg9P6FpoqPsMvV49XVFXUyFoTbfBpTpYJK9rGom6fw3vAsqiBkfSG73SaCzqg7hL9u2HKsQQe1SdnW4K6QN",
  "key24": "4f9nMWjp5gvnGDZ3DXGExtvMs1yY7bq6MWxWoF19e78QwZivuzq7scKjdG63bjgfFWpyATgcaCsHt1pxo3rPrDG",
  "key25": "4dZdEihoXmcumv25KLpyRAcNLYWmXuhALewU7ysvgc3xgJr3Azji7zYkuHrYe4wC8CcvYAyFnxjkShQXvxh9MQBa",
  "key26": "4DU744nBxVtaoKF18zQgHRvpw4x2aspS9uSaQ2TRKX8Pp5cWXkPP1zR57MjFTXM9ZanymMtUHgvnmSjQCSs2rETp",
  "key27": "3bNEQCaSexHTBJR7quYp92WrgEBtPVpuLsUvr5FUTBRTpTi4Ei2LVGtAWefhnJZFFPEf6fHn92tmtkhqwex5aJ9G",
  "key28": "3g3AMvGmg2XtRyymmynmv5NPMT54FQPz7agGSU7ok41KwQCCPFqUVFRxeZu4YKAFH5SifVa5PYF16YAMRzfN8Fvf",
  "key29": "2PN7GuiH2nx8UMyVHHcprAbCAqRY6p6dubdZP9JawURuospLHBUPFhknqKMy4JZWrrex4v1VcK1yD252o5MWWsyC",
  "key30": "58LgYEJKV6Pn4dVzdZuNCq7irWX6FZWFwheoUiuDgdDC2jw61zuoXjWvs5d6SkUPDGLEgPSx2xp6crbE9UMRbVo3",
  "key31": "3G3cynn3wAqJFXS2ArVDtnqrPmvWdxbLnko9n8dHZmmq6qakazyPZHJjuCRAn3E5fbSnmSbh4Tjtyigv4JQWTVL4",
  "key32": "eqNbvQHWAD17dR2kifmmNRAmCACuLm9cDUHeTU2jUxDJ3bZeu2bTyWY2PyP23DzgnrVuEg3AXGF6D4uatxSGF39",
  "key33": "WYXcWQR4p6bdTF1nTZE3v6rvfrBCwvsoiiwH5KSD4quegMRBoYcHXp4iiBPEatKjcebdfwTfPEtDpoGC5nvvCqA",
  "key34": "4RNWtsanHdvuMtHU8qCDadV6dqygRmBWoENyEDa1dsghRApDrfSDSyJ3Nrrmfuv8e7p9MYqGk1M82aL2KXFo5vYb",
  "key35": "3E8d5qHqc1dEvDpDnreA1bKTqk8uHYCYxQ7yuARsiWkse2TRaBuNqyQ1KwfRPHU5zikesifSNHGYDgA5DibpxRWq",
  "key36": "3mTBTM38nMWeSfkE3DPbZNR3adX4XLK7oPRZFinmE4DygWQzCqxb1GHDxdFLfBiPGJiyHz8q6NMmvZHXNBnwVXgJ",
  "key37": "34GJPHk56kkZaudoUj7ZpJREdQSJyrPbTpNEthF2sqWDmtovpSHrQccY434MF2RxeUWsSumkLcBkcoPQmg7W23Ks",
  "key38": "2U8NNQjEV3ocqMKSXC1QqDcSSoqvrUZAmJQw3wSCR3gPzLHAAKwyiLggc3aKUgwpAFYRZZU9c58wEHjnVBdfFbos",
  "key39": "3o7frCLNJr8Zx9P5gkbCYD5BGswS1j6mjK3jFojB53LCULmspRpkRKAtc1pxgQkT4Hmx2VDkem3EVsPE89TMcBDc"
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
