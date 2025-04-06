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
    "66PLSuT29tcUTEiLmstqLvdra4Eqii9iJ9Y5J5SPwCLb3iNiAbWYvaUvG2Drd1rydTrvgMnSZopXnR5StSu1dHqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GwKJZWJUmfjwcz2jtQ3TbPaAQV7HH5i6vAmLQ6f7dhukY8WS4Jdca2GW7bGud1bG7avRLMf8gMGbdGWAK5TqRGg",
  "key1": "5nL6XJJuADjpxn4wv6vTyGKmgtLXd3cS618kSiaqKkbNgcvGqp94x7rLtpUwVK1ipYd34GaNXabwuJc5Dzf7Wt7H",
  "key2": "4TMgfUkPdJ3cvQPy4YidXqQSKGBW3vcq9nyyDTumQQJyHj3WUaRNyZFAS59cr7fmTdFHcoCyn6GzYjLvjcxv5pzr",
  "key3": "3zHviex3nLoRHCvn9bXGq9xPQC6F24AtBTCsHt1fpd2dhqQ5H2xV3vwEH4uGeDVMaaGkEhbzsGXTf4gfnUxBi3na",
  "key4": "62bpB4yxzViuShW16CHPP9LXc8Bmmn5xzcbJjnnvBL8TMULMLubkQzCqUKTrvzW5XzUywTH6jgnDMFz9VATGjfKu",
  "key5": "4naXCJzSCm2TJLHnD1QkbbYLGQHzsTC9m7FoGvVG4D5Qb6wq6PgqZvxbGvze8tTAYV53hrayAV9yt3ELwuVo3Sxc",
  "key6": "4UMDe49Vxw8ErnTpmvVDTb78QCm83DbecBKFLQ3SDxBeWkXJbwucmTJMj9oPSgXECBd35jovQYqtBPYP3LU68inS",
  "key7": "2PFfFFa9FzPH71dJ6efwnSXNVMMhKMb9KP3Bzx8TjzgjUnsnrG5Ysn4USWyxTrWNhQCWMNcKuYDwnmEYrpZAPfDh",
  "key8": "2aWeC1HqbNwBabJ88B64yXEuES3VZxpjuB6V58bnDjCnukAG6uFw9igGxXW2CvVXX4BCCBSwbbsfNQrj8mtRtgJK",
  "key9": "5h8GqvnDbmnVY1hNaqGY63rsDuVpDX5CLXYEj5d8GH4cRvGuMM57TijjN9Kowj8JfPwjxV3FLY2tLtawjrHowaQA",
  "key10": "3XtBHashf11U5EAaR1CsGdpvTsvJuanNPyXMNNVrV7KqJF8QpKTJpShxgDifP3FLEijh5xKfNcJXeb3pLvNNKnuj",
  "key11": "XdkMthcxotw87Cus6SK82sQTEQCP12v1GxQ57rCBRE7i3L9N8F8BGE53jZCfvA9qbXcAUGCScPQHUg7fVek7vJQ",
  "key12": "4Ztv3juaomYQ4jSAS4a5HtZm9ZtdzDiMVyGxaP8NiCrTprBYfHvF9vJekoK11JGfSw5LPMNFcb4gEdXoMkLJqCzu",
  "key13": "3vyQPqmoafMRPFjy4YXFquBLEbDDtR8fbH6rbaktnsYL1KinUW75jerHAUQ5ztvbge38QkGz8wYy8Z33ba1iC78y",
  "key14": "666KitYVHGp5kGycomvFMvJg2xvyLCL2bRdgJVQ2Ln87L1JBayCqcxo5g35LXGyTH4PbZdjsNeRr3RvxWbQR9b5q",
  "key15": "5JTaTxh5sZU9M2sPDaPzKmtembzh9ayTRHBaofnFVoo2RRXv2P8ugEkkSkDocDxvgVW2qqwrNiPre9UHRzGhanAP",
  "key16": "3nwWVokBSqPS6JxDFgyLvsxZiUBitgMGQXRFeLbYi8iNS6LwVRArxEgPFCaYDCUztCWL2Cc59XzWuq4BdzWXjrdx",
  "key17": "4wCpoxY3g2oyBsCqKhhhi9qxZULVnYzVP9oHjt7pUW81cSCo5Twzd1brnL1Hrv22RSvvSuzMZrWNMo562WmXQLgU",
  "key18": "52bNvcGfekrjwCqxK6XLxBywNTyQ87WFDfxhw5dw6kTJbAGomHcdW129XUq9fTMFj7aWXuBzn48TmendP9PRZQMF",
  "key19": "2dF2Myo96b2QDMTkyRdyDzb2iQuRsXE91i2rx2pKkLhi62UWRYsT3ZjfQhN77AoZ8w4MNikYxSQk94TAED1UFKJX",
  "key20": "2CFXHRcVgVkfQiYjtcbNwrDKuGvwzwrWLpM61WCLqASP7LB7gcnpCqP72yxQtDx3mgZZw5eSNWQswVccCsVeNixv",
  "key21": "36WB5bpTdzPWddmeGy82jLj45ZH3Nrai4QSgwmfjn1qp7aWWxWQyGgTYSzSs8Uc98oWgNQeyDnkBhZ5rd3CA2jGp",
  "key22": "4pUPrgSeAiR5TiabdBtXtrCBVDCFTDtETX4483F4wZMoUWJBSe4ELeKC9W87EqJwYTZgy91m2AeB9sxrWHKAQCc7",
  "key23": "5rNUBVP1BtAfpfMFir2tPYWanb9oFedEeqpsW4Vdqopd3dgpbi7X66K3QkM1Qq3dGCLQmJvm3ufq9i4G1em8Y7t2",
  "key24": "wBAhTEry5FtvKWuXDS6UWcpkAcGGdaXHWtCG4mJkXTsqiWBkHafZhHf2ZX3ehVdYzx757CGFwdMhTCK1siiLixF",
  "key25": "4i1AqBn3m8cq4wM5Puf9wwLAS7E4SFNKMG3Tq8uLiFZ3F2neGCVauTYCZ5LCDhEqBhY2qjPwDk83ZrNb9pkmQi7G",
  "key26": "wREZiaePrYW98YLKEo5Y51S6UKEVLR9EZM3397choDzUekFKpAHKRbyK6RmpRgAVp6hntWnseM6yRu3DDUTT9q2",
  "key27": "3tEffiqApJ3k3pYNpXnvW9JAL5D4tBfCXBHBovUKYRPKsHumqg1fWtYtoivqxQPstWT8urNMuPgptt9B8wWJ3Myz",
  "key28": "4Q1tHhfvUQePWxCA3Ed9igZ3AnT9nmXgcZDkS9KBPTCWut8fn7ozcosBU5tpvHGuHYb5RcU28tJ3EWW9tnwKZVaH",
  "key29": "odLjfyw2ecDeAmyRwf3rZCQMKcuvBSDg7dXnhX7LW4BQn6wcCWap1gWANUKxgEW8rEa2w1Tm1j5NXYidJ2HBfjm",
  "key30": "2x4mcjCfupMftPEn6vD6hcy4yjfej9Axb38C6TKBT64dmJW4GiVW2pcYbnsXu7w2qD7aRQwZsxRMYE4axcBHhrnq"
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
