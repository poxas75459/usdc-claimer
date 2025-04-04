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
    "2x7iprT8cM4xPrfLUE6x7yFfUza4XpHTxxPWjF5T4WoJKJmFGzCUyMWeH2zFcSxJiNycK5CrZqhaykT9FHVYjNEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618vP5r7BYgNCPfs5rWVcTRGcnj5cdBZ5bdvGCExjPiwjaNYWobVyNaNws9hWfbN21ZZVNdwbAU7UFmb1edMxbY1",
  "key1": "mxYo3unbxrxpZ5MtfULDyTZMrmpdTmQdRTCp1kNJh9bGovg7oUcD4gBQaVfgDAD4qwCCYoXvu6rF7e9nCEYMNrx",
  "key2": "52vZ1zwBHhPY2mW9Ub2QJ2mB872yRVRtKcQ8etrnJiTHGJNVvKzpDnW9F8itBuWVXm5GtodUiF76JZrpz5Vcx9CJ",
  "key3": "543J4tJqBKFUeFJ5i1xSuSgU7bHGoYgscbXi9ypW9uY3AGv3E3qrMQfH7Pg8oLUhbnVLGRGNDdLoLqGY3BoJ2U63",
  "key4": "32HJ5V7UCUpJDYcKt3tY9QhZpon6Rm6pdpiyvq4nSry3MtGiguisGczSwfkRvN3Ct1g4qMWARnfZ2P2CVS4HBXie",
  "key5": "XoacQooreg8w2cgznXf5vNXUF6fdorS1eZhb9yRcgq3nZZ6v95VKDFnP85iT6Cd8RPQqsUAW7H29EgdRXSjusrR",
  "key6": "3oEg2xSQwFycDd9X5SSW3tGd6RtMqyTWnJoHFNXWPWeN1dKwkkpPcZom7LYUkCnjNfvBdG835sVxyTw5zFzZ1X3Y",
  "key7": "2KCZtwuJRJ6Dru7foGj73UMP4YH3HGbMKxLdPjvx5mNhtFzT5bBCLzwhWgPJ9cu94kC73j5yViwgTruVPEvgSNsT",
  "key8": "3bQtzp7H2aw8f5qCthgWtTK3qz2qT2CmdTJpbsuR4mspULib6jCvpBZPs1JKViFpn9HuPmK3kdiSshNKpKChYAmX",
  "key9": "2yxTVzaVANqJjRri1r9Zv2H68iEWZUpZifuGZXfLbvA3yRvfXS3r2YUZ9WHVegjeeaPLJKnhyJHtQXZVidbs2FGv",
  "key10": "5Vb9DgdsSwHYPbbFEbrCAwmCZR6Ngjz5VEgEQzcoykpLm8JSyKP3Gpy9yjWKRkXYMb2C6EPkyJo1c2yk83P4EqXe",
  "key11": "4vnFt7cVpfrFaERKRe8wWfcXVuXCB3eTdFbxX2CEAGeExd8FuoNxavtQ1A745Exjer6szLDtuoeXPNJhrwSGHBn4",
  "key12": "5jc9NpxebxreSnGs27BcD2zahdZ1crrkDy6A8mXfSEnj8LVFqxc8P7hN9f79qyuyerTacCxYrAZPrEMGqQX9wikv",
  "key13": "3p17MSjxCeygJd4zeB35veJowFH92s2tR3kdcdiNEP18c3aVVs3Tk3DvMePMJHqfHjM7g2zvofs5FJCT3FdwDfwF",
  "key14": "3g7uV5vcNZPmgW2R2qk3ta3rLXfdJExpnXmgbXERfmFdfQ1Ygk6ZNLEmcxUTH1Hd4iuB7stLBsXgfwVHAnUbXbaa",
  "key15": "4VokELZx4fi2CxCRi7aHnHjMxsjdXsLRLB98Xvg9Wqv7Q9jfjpia2RE3dfMchYQ2h4zuVviNSypqVU78KNMC5bVJ",
  "key16": "4euRYce3Jme57yBAPfqpVe5gC9N5LkHQCinLe56LQvG3Dejd15ZgNYZ9Ki4NdURaUPoiX5mA5yvKgkvEv4P8ipmf",
  "key17": "5jaeyWXxhqwG3daWWS3TVsDCuA6bUAzLuVViCHxakwwCcVZTce992Z7ZrN417ZnmwLycjBMCPYLwkyB2sPfHMNU3",
  "key18": "wCAEfoNAFkzyfu62ZhGHZRrTvBzbiaMTGjzQteKPSFGBMbHpzU9VB7gyLRsRtTy6Xz9aRyySNjjjqKB8yQip8Uh",
  "key19": "2gNSjWxEm3PyckvGv4qg3fVz6D9NB5s7mP3jvFtfkp1h3CR8iCxzwywRm1MqtVKqArebVGADZVcVVjASfzLukXKQ",
  "key20": "4EhA6yivNqacMJewSshJETSSvjx8AoXKHvJ6tjjksKo3JuNknJyEduqP5VJH88zwXqqcyCytAELQUpSE4JGCCdQ4",
  "key21": "2Fb7KB1uiPUvHpKsLvgWaFUDm2ZNrF56CXbRkLXMWbSxYgTxSga2TuBG1LEYNQ6a6CgmADiX7RCsxSk95vsqTMrR",
  "key22": "5AnrbMduKzgcMApzXA5br2PothEShgQu8poLfGLfquD7vocVzwk5G6G6neYuTMejiqWJQmkZra53gbRz28bue7Dm",
  "key23": "4TDnzj451mEqdG4L2kbcZMhqyPwUgRW6jRVZqC6gmqkFdpBUN3bJUo441F383eDZPJkoAsmZEEDKRx8zDKmKT9wR",
  "key24": "4tk3d2itg7HrftWySMASL4Sd14gvs21B65j85WTqPYCgvyrG1bhgEyQavhhJib9Pp781wp59t114rbZuRopSNH2o",
  "key25": "44Q7GV4f3rNU14pFLp7vUU2pqaYB219HuQi799fZZ18sQU4yi8mZoMsZpyJ5wYqPWtUVE378vUUvRY7YskbwuRZm",
  "key26": "41r4Mh7TKp4jou8cT9ajD5vLYiYRjGXVt4iuZLRGaPapnpNWuA8ENkdZ2TUdu6YXGjLgje1w3jjuHAtbWnPYkHnV",
  "key27": "5FXJuAKiLg2rZAFafnB3TbbS2piqw2BVKHyArazkreNYX1j45h4vFQJMWXEkHqHP5vFx6mJKpAdAydR4Pexm2y4A",
  "key28": "4EJQqHHg5ytybqGzX63ofEYP36VtmL81sAm2zCiCpMGsR6RGLBfUXNNb3rDJyiqK2vt6KBA4Rs5g8zF7oBp55Xi1",
  "key29": "638RwsaUyLMkCyNxaazhsBmx7Ec6wW7pNBat2RtUXvqboJ4yox8gafAE6ApbS4E3Lyi35W2qxa3afLhfVwVSsxSj",
  "key30": "547LkRk2RNm3SeB3kCd4p8TAD4bK1VcXM6QwKkJ2h62BWKgANQWSrqjxX5nsdUALyuspPuEF28aTauhWQcnHWjX2",
  "key31": "2pqai6VWB2XEtw46THKG3hpDdRk1QPfaWrDnNpmg54mPCKPxa4eJoAgE5McBWCYQDNP3Aym4Lbgzoa4KfKcrQn2m",
  "key32": "3gWbs1PkvPrdZZmDQKgYSPpp8WAb43JS5zHMmjQXMxcjD1dYRJWjsiuBkDYNm6SybbM1QwEhp3vzkCLBXJg6tAhx",
  "key33": "3w66jYWijUB8E6KNLgn9WfqTz4bwK6CD2pGuYFRo1qBLvqeiFd22x6jd48B9h6RnocgMHGACk7rAoAzAB69rshrF",
  "key34": "X7Bnu3P4ApwCkWhtbiBwGHGMmDKbzhBwLvSAmc1S4BCKmMSavbUajkGD1zcf7kLhnBqmWt1waRw8bV1eKgKdEBa",
  "key35": "2r2PAUTcZMsHasTU9c6gLgPJJtjgQNn1aUCA7DuPXzik2ZQsqpYP3AXY35Eac9zdykaDBQYjUu3Teim6uqVujjCH",
  "key36": "hnnRqU6ZbSHpDJ1DESFi9dcuqigXK7rRwwTHsXxw4vJePVxn8Eu2fXjw7vzKQocrnyLVzyUhdGke3u1xwkL2dzB",
  "key37": "2RTo8MvcEEyVLJb31GAe6t1ESbcThZiKkbiJkh5hsZ4G4PJgirpTVcdzQPb8CZ7tCfF2SRdFthcgJ8fXZgWUjqtJ",
  "key38": "EL6rD4oNeXjBCFjZapBaP2Xio4ax6yzJa1GWX6eaMHkEBUto7hg6LJsYhcwGnGmJ2anBoHymk1dzoiCmUKiPXAm",
  "key39": "oXPND9fLwYQGyNpPMyLUBiqcpGhSkYRnaL3BoFVqN5fPksLjEsjx6UrryZu1s7UCZXU9obaDuUHs5D2xFpVurMT",
  "key40": "3ecDqXJJZdmPqu3wxrRLZSG3y9vansk2Y2GLCsL1TbjbZad3JkxzdAGLStBMvy8DSYydf78d34Xr4cQqRbnhLQA9"
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
