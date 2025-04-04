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
    "uqQZp5DK1F2Sawjv7Qsw79wVAGYDSZvapQvqvbzvmx8EQenQibc1GUTC3WFhgo2qU6WPbN69DpzfgZMPdS6xe3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MkXk91Guoenv3nBtd2u7Ka3HsfiDuQ5DkTHaP922Sf9zuxEYeyLtvqi3agzpcVmEqBMVWD7mZXyAWU6jdRkwyj2",
  "key1": "5kSuG1SfcwwXnWRLECbmG8QNv1TACVhdEvhwvX8PktydgHkinrMa5bZHzqLDbL3YWoYm23KfuFCiatGZ5anXcUr4",
  "key2": "5sMiGBH3ToZwrac5MetdCi4db3d1fvuwFVsuCkXWx2AUYZPMsN2Y1XYSsKqBna8RtsEC2Sc6xnTRRC1vBsJCbfh",
  "key3": "4iCoZKFCiGproLeVPB4KxeznHG3HXkCHqs3S6E98dYXjYdQ46djZ4sJ37F9SarnUzGMiWXVKifP1bVVPL9TmKVRV",
  "key4": "65QWg7cuuB2JMTYPbyKSJKVtBYEr9vSkG7PZ9oKoaJ5oAZvAfG8sV1vM1N3mpiwkcdBJ9wibcKAG4RrFHvS2tCu7",
  "key5": "vRiND82wwESr2mZFsU2DNrjSEcA7j5yc3ZM6H2v2k3JQ68yyYHAF1iVDM4iX9KrZaBbFEaXEF4UCmTjVwuuEodj",
  "key6": "4gxMP9Eeik93L2RVrBnNKThbLrzb6jhgreTzgQDUosQXwffunpicitaFyZxBgvSgyCfgxRgqx5XXJuWizZx62P1g",
  "key7": "2x4QuXLNhqzBChoMNNMgWa87eCb2VJc1TNfNWbXne1Tmb3NPBvDEC6me4f45ffbBUWAv99FXDfGvWyadfg8A3ufX",
  "key8": "RiXFkHfZ1TJa5ceM28fNBERFzTJSNMNRXBJCGsifM8Pw5ZbwsMw9gXPMTbkhK2UwYUEy8ghdapXVLgjBDQj3yyg",
  "key9": "54fqrvaTG1fHtgXPSHevbqwN9dhEqLbfsm8Pk83j8whnNu9qN6iJD3THUBxwxM6cCr6z39x2A9rxS9HNg7N59nBp",
  "key10": "3Cofbo1zqDCzBHWFLtF3K3JJ7WNn8ennjivaaGtyY6a6s2NSgZdtacMxGQbiHwTrJ8jyyDQyYbKqoiDifBVeEiTE",
  "key11": "38Y7hWRfs7KckEG8mXTciRH1SEzc6MGrv1nrbVTPKBQhXgqZMv6n8gcR2WXRKqxLWVr8PrMeQ9nxAWU2xU7QVc7V",
  "key12": "VvXQA7iMMpkHNLmY38vVDtS2XpgLiLoXs3sNAj2FjwXFBAmP2cBgEzm9GqZnCau3LaukqoAsLJGwrLTiC6aTVui",
  "key13": "2Y5wuX6dqJ8rHQj85ZR7Bd4K3gn5DkJjbN9PdwNc6MfssfZnvcNn2s4fdDfAg5VAix3VRh3gp6gMwvG3JW3RzQyv",
  "key14": "4pTvakDcdyR6HzZuzJtSPnzhkbPGhBj9eeMGBzcYXm3oiywWPpXzTaWKqabhaJKGu2wci64mWHpWotMqfzrmCtB6",
  "key15": "27vbJuB7zmCp9XVQohaTZpuaEZMJKEV6tHinYdexiTxSwEnAqMuYFNySkR4NUpHX1VBdExaitG58Joa6nnkLwvxe",
  "key16": "5hXPWBLkoe22eE2fVb4vXnMEYcGBxznRBBhiq5hGTRyxAWyeGSDGy8Unr4XBKnnq2igJQ3vRfXhgfDpiLb3vtmQj",
  "key17": "44MBrob3eDkawxfGygWfjnXfyKeetQ7uqi8xHo7jgdMMXs2hAseWY7hk33FSstUWR4g7cTbReT8psWyjhr6TVAaX",
  "key18": "23McMZFney46Jzb9RDnZBBy88T4qJtdJxctZVFjyqpRJfPLfXTgYUP5YtGnhnZ7YvvWywQv1GAjWXNKYFy2LtBUD",
  "key19": "4duZbA4gPJH73UfKcStT9gtUc2gWZ3djfu4MAZ9UXZPu422YYu9FdrpsqPzSzhnWr2jz4AnaKeeiCyz4hmDtiZvJ",
  "key20": "1vvtFzLkPzH2fQTryb3Yipd3X68JfWcbtERXUAbkPgYpmcPLDNyRYHnjtGYuGquCc5gkPPs7xLWTTg2ttJy7ggq",
  "key21": "47YXBdGsQbT1Yx1UKjRQ4efvKumEr2Gri56RMt75Ei2ujTqATcNDxVf7ZH9oHxdzTPXSqQEqP22iXrqFGgYcKpmJ",
  "key22": "2mfGjE62NNsQ6XDUF557TYbzoiHwsBS5RmyVFFZ8DtJwW2dmfRT4rvjW8ado3FpNkpUMJnzrWWztBXMaYWEjcaRS",
  "key23": "K84vhmy2MvEKTJJSexX13SwCUM4caHDAhN1wJS1kxoXBbxdP6uwvG9HgPwNufSp7reznPp1HZwjETr8MN2Es5C2",
  "key24": "HMrr39xeSwoHWQkVoEBmMujNdvw11VkQxwKunvSYCeSY1KNq4bhMd6LBHowRvnEBATMstahxd88FBcHEPkpDHF1",
  "key25": "61W7cJ79nXfHtfM5PLyHizxDWEiYiHTeLMXswoYv8zkHkKBZ8s56xeuVdL6cKCeosCngeAAqP7yVpeAgst7qfEZE",
  "key26": "2BWWNBiE7dtJzGAagdPnPVVULsfX91ZEf5dTJpXngXNFaPH3DdyWwsgSL2bgcZTnXc1PLMpiyYa56PwCq35iPGJ1",
  "key27": "4dmH8Cwu5xd8zhJLM2aBSWtGkmGm62ZXicUSiiTHRpY27YhA9F8ds64wcBrMkFpSNH9mXPNU4Bs7mZAW6jhVcGUU",
  "key28": "5v9jKdmY5dqztzrEsADyNYySmAdQgrPt6cWR8o1hLAfnmGHimvTMQQjraBimxnxB8iFQPmoerbfjR1BgMEmbKTE2",
  "key29": "4RiJ1wZcEfLAQ7CvzuG2usjNWyhc5fqBAWBeR4LSm64H2seubmwqH65qQfqhJMXJFnQ72ahP16xrUeHkcUGogMqG",
  "key30": "2ndjBq7SzcbPZV7e9bFvHLa3cv8ktFjRQcub28EPgTBNKDfZnEAaZcv4DUhPe9TPxHKFKtTgdpmc5SK4yL2XMVFT",
  "key31": "27YCpweiUTut7r4CUThSdRQHmTAfo2SB28fDENU8UvWSmtcupK2AkYrFoj75vD7Ue7Ux4pHtdFA6WtJyyGUe8iC7",
  "key32": "4s1q3YgQ5RDY57DSTeCfivczn4bTzPRD7NHkMjkNbfq4yaXXjHUSC8KqDABnbfXqkh2cUsh1bnXQNZmvvf4PhfSe",
  "key33": "2qiPwLmchJW5mKQYWV3MAQco65YUjBDB5CyBRN8uXNQBibN2dwKNKaWXrh8hS7Yi4E7N9hAYBA6xtZjYcgNcRdFS",
  "key34": "qRERaCmPQMmBUyu4Btz1nET9uhX91SM5M2RJmcJW1ujugMFUhR4zNQheXb7Qj2dPynVjEWeWiKY16nb11evyMFX",
  "key35": "2SNeGCFWgftM55vkRSz8tiU38zbzw6qtGL9mJ4mGLswKVWQCvjH1ngotnjiace8d77kKFfdiKSbm9pKT8bvWs9Ub",
  "key36": "61ZrHf2Sp6fm3LMq7FgHz1rm7F5Mw3LnaBbbpFuPVnc8rSzbDmyqekrVfjVnynxXjhineuMYvNoP7pcvkXdiHxfA"
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
