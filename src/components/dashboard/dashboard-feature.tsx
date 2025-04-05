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
    "46VG39U4VJ26nGHyfKowjxYutFSCn1y9uojkTzhoRTCHThZBZKSzkEzrYptmbJprw3zqyG5nN5r7skSr18NGSE2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C8tLjzVkc5j6zbcJL9g4GFtTUQCs36TRMZuSzh3P4Sc1pWwLdP9R5onzJ2LAUW2QZXvP9WiMu66wKDHccqTniaD",
  "key1": "5R8VxNXWhTSxHX59W16caM9uN11w4d42fV3VsRYH8EX1TsduewnJS1Y8igV1NMGrvpoeYYvpqGTQV3ACPeXPXYq6",
  "key2": "3LfvYdi4dGChWQR3Aa3aN8pay3aLvteysPuuXW6hQuihy3DyDXtbAnuGQvhxWYaidmg9TSXefy3ccMVxUCu5e1Gj",
  "key3": "amrTZPicd6LQuDsoxTzhxwGbPnHUjY8jnt6gUpp6nReZyzPrxDPm3N8aF5GQfEYsr5KtPao8qowQbdig97uvBpS",
  "key4": "3VPQoJW8GpPimN26tdciHQza7tEMYdy2AfxF6PJrbND8a3uDSn5qkPJx4ZpXdbJadkCN3Rvv4kwoitWFefF5mR2q",
  "key5": "5eGxmxAWeJDWJg6veRTTzHAsCSRmQVruP2ypQnLtmAyM9H8WDWDPyp9UCeYdy8Aw4p4cxxEjweKmKa2rfZUUN3DU",
  "key6": "4MxbNsC7BYkcVqwC6AGc2Q6PxsWBKnwFJ6ybm8EjNtp2MuBGv8kUD31ubrezwYi3K3NwMBeg3TP6KtFTorv5Gk1r",
  "key7": "4FFRhVZ37z4RGiCgs92Wsa8Wp7o8XFoT4Fgmf7SBfhgQa679gfHE28Fm4Uf3SiKWA3zZT21uuyVSMyEVGdJLrGui",
  "key8": "5NaA7kE2Y5xBRRPWToHva5oLKu6Xe78pzDGboFagJWpji5gQrLe5yYSW9X7isUqN7rJCMt8Xt89vThDrA56xGJbX",
  "key9": "2hsFvDBHyS1bezuuiugJw568UH9BJAADwmdunJaRVv7nRDgWxTYAvbPP1VQyiWFeowGAhEiAaJ94ihRZCiSkk8Xm",
  "key10": "4bSBBnoQ4DjaGPHkos9mP6uynXSHwC4xDqUtaYACjMrWZpiHSSq5ZfUjYDMCYVNjY4Tm7h2msCorNJdW5TkNNXV2",
  "key11": "56AgAiLn7ArMA8oPdxvBb36zQhAhndsZ2EhiZMrGXYCXcFyxPyRVg94j3B1jYfYQ321eR68uCGNyENwTStG1oMHd",
  "key12": "azEgNM1LFFVjUMcM5JX5wpkMfHU3XcXdfpoufpFQhF4Dof5UVVtc9ffxEFagjw7TD4ELPhPJAoyFrPQvh79HwCB",
  "key13": "5yAnUX8P1B2xEdehRKotm3PXGuDdKgboGEcte8VCKDx99WcPy5WZGbSUHEAmyRNn7DM6Jh9xvNXEktcvYSXmHuaX",
  "key14": "HW6KdoQoQ4FUSZwXvqYhULpAYmYm6YcUk2zgiP7LdiXAYGajFtkp2uvEjz46fqWXQFbhWRQSh5bYPbMfFmQzva1",
  "key15": "5uoZCWTM12cx7BWUxKw33kYfT4tmCzhLG9z2L7kvkAdoziw7kdFmXdjwWCMfcdgAtbxsqS57NHuYd8zbYdNCvXEZ",
  "key16": "NHnMU85DMmvsVB7oZHT8WTP296zX5kG7tuV9gs5xy7jS6YGeYkT3azEwWGkawhXpSy9BS6GdR7tYQaQ15kPE8Cv",
  "key17": "3FqhWFFr6wLxx63GoLcfB48UjnRjVwMxY7vBtcYYosaU1wdgtH1aVcoD5exHVXens3SkxcsrFkAPCer7EpzPtyog",
  "key18": "3NKRGWX3NU2M1h9UbejmSXt9hhjU5hhmeS6z9HSLhvEGDPMqUhqHyGXDDLBAgekFKbDp2fgPBo8SmE9Bk7E77J9h",
  "key19": "5dHjCFTSs6BY9bijjwDdREurdMnH4N9vgKn5VVSPyph4R8gzaVU1KzBoAJcm1eoUeWLSjDeMociTdBBzWg7buTYX",
  "key20": "DeaM6N2kaPCptAQCJAJ7qQnsrzto6efV8CrUe79zwo8mZafvwtSxbv1d3VHWFAA9AgerA4AfHEkdE6Q5GqVduHH",
  "key21": "4JyNRHn7THJZ53dygYando99phaVAZJHn4nzkS7kQi92JGcys7QP7dSg7eB7g6mocGxSqxkvULr33E6331THShQM",
  "key22": "4fGijo5bhRsiHpBSUCJQR1pFdNzp3P1PHorYBpgsRNFHszHX2P93aicPQvX2K1Sste9FzRCsj7dXweBFwo3u1yuQ",
  "key23": "63mSe3e4QY29eVuGeBG4He26Qby7yysh17BjJFX7FRe1SF5yJVrAKbr8ZrwnD7AdZF1VAAkJqAg6HZGXBoCUmffH",
  "key24": "4sHNuCFJkBbmdni3iQE3hsVSj1dPX3u7C7GM8gxNARwMc2HWBpAVqzKtELR8vgtP5qquDaEPBWFT9RiH4X6CME1a",
  "key25": "5jsGmvjd4i7uQinZ951CwdVJo49W4u5XZfykNoAS9KaRjLw7RxheBcXe28PikqU6fQYZrKrGnWeaetzH4BApouQH",
  "key26": "3ph8pqrqktwxXdzz15jp1SxCCRyLbM1F6TbKyfLZzeWBUqpjivLPMWFqUWCph1xZcn2nQnT944SffGc9EYwJrDZp",
  "key27": "88ZxiUXZDQnM4K81psiHjmNVhf8XGZzCK4dGRYm15944fmmyq1vACX5qERWFkjJzarGmQFZddsrdfkEtqqbQrQi",
  "key28": "4Ukk91eVXb4QJc6J14ahAoQ3kcTUU5b3EqaQuE5cDEHJprdsVZhtdhV3XrkRo2xA7vzbNjGhSSxb7iCLj3scBAsU",
  "key29": "ECEng2LLZQgDAbCH3fmy5CG5LjQQb2VVGZhrfMwn7JHXv4Q7cizpzLQwxsyTQVWvQutRRuKdKEUnAR1eEqCyEKF",
  "key30": "27FtWKRkjZhgHmo3TjNFTzgzKEJ9eaWX5esSLqmm8DRaEZiCvR6WQ4nKcoxyv72PxRddZX1xfbFScFjzFBQj7LvA",
  "key31": "2hHVgwioT3Ta5rqZcy5CTpMnq9PCxD7DTXFM7pRVmVFYPWPscuadimDP3EZqKcoVSZKULK54URz6AVzL9kSTdgng",
  "key32": "3bvKVg28Y2PdsMxMeDasr5ftbMau7yNAGvKWSiqCR8ruHVK4xFk6tfgbyEXsB4Kr8Y34sTTmPyTYd2fTDwZG7sco",
  "key33": "66v6xLG9rB5V3g8UBuq1YzUu6Uyw95Dgpea1pezCBQtJznenY93GGaDDV7SQgpAUPd7Co2Y49PKyiE6TKUxqDMD3",
  "key34": "jsqATMK67HhjHTa9xa6WL1ih9ZoLQAfDsS32WrBeuoyzTuyA4PNDDbyQhQhHLoQ59eswxiSegZhpQujaxyXv3Bt",
  "key35": "5wDkBmosW67LVM4SxSsiFGRp6MNjZh4JCuabN4THcFf657rGDnjq8z8hCesaxnvk2rF88RDBa4A7XkYDtRUSzA9A",
  "key36": "4jUKbCh4vMhKMafqtxxy4d63tu2omZGANJNLJoa65tZ54bYytUwGMWiqCpW4dSDEWKS6X36EwdcYRfb7Px4BWFsk",
  "key37": "5jmS9BJyaHe4uvX65Q5BgpLLTpeV8z8VJXz6kBxKhaaC2kM5n3GbYe4zgF2zfNTN7RN9Aase1t8DRcGXzn94b9yF",
  "key38": "3yqGsWPP9Wt9Yv3L4pBNmtm6MtUSpzh913U1YxHX53HxM4273AmY2sMYFpJM68ma8SZc4XHX6pmRbVK7pkAyP9mq",
  "key39": "5PcPCq6kgtg1VaojghDJoqQ57e5pPpfTvXanVo7BHmHZ2zpdQSNDjrEFVvaJCfGycpirKPnjGT7HsdAJY8Qt1BCE",
  "key40": "4krjff2RFxM5UNqSXMc7ks9L4mMcPNCxZPDcm5rMEftGJo9fPGr7cjs7wP1YpoaVszaxYVFdruf3WWBHwfCyDfBV",
  "key41": "2oZ2SGrZ8993NwYLzkbRw5UH6AtMkjevWGwLxNEqstMd8EXGp7HoQkdUGMVXXeWn4C99Qp1wpBTCq6deuRLwrThf",
  "key42": "5PN3wBaoWjoepAgxmWLCEb2WFGzccFKwk4bJi4DLxcNPwtZVNyQkNAuf4ppx6ymuEgNhVQZoNfw3BG59uzrRx1mp",
  "key43": "5hg2AjPDSEcsiKK1r4AY553XbmzFL1M3yVpyDJc5pb5CzWTNH1mJBdUfoThWxRtmfmxrAwj4Bu1PzVst53Md4GFJ",
  "key44": "5B2ZYZzJQfHb6YmtqwxFwCaaMmnrZyW3aVWB5sPMAUVHkdCs4YAQmqW5pcawtFjjdjCaeoc4DxTHmJJKSB7ZPwkM",
  "key45": "3cgAFV3rcBepdZnr1EPeV2rj3E6tz67aaSvA8YuS2apZb3A6LJu85SHrpSDpR7A62M5a33APi17o2PjmGGtF2HhA",
  "key46": "2a5gx2sS4BQBDQkj97TzCnju13Dk9omQxyd8gsp8ZyN7u8aenQhz3jeejcsJ4ZyxzwjNwrGncNae81Ws9Mbki52U"
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
