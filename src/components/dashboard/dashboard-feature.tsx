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
    "2cYn1XVdrotKkptmYjwnSKS84hXkTwED9rzgdpt4bBvuiU9vRHsLZYfeudzjTpT4tHo5Ykv1UXZotcrNN3ioMWyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GC4UcAFid9pLB5Y6NNMv7JKruT9N8EQVZPLKBJ7GKYEG9Dunfjwpct82gcwzxbjJvLvyKreJ7XjmDSrcbEW2x2b",
  "key1": "4upRbY5FmHdocDMbsgMojvTGcnuEX8xN5t9odsPjFQUSGdcnWF2ESLXpiAEL8Ps4kS8NbztLUyeEoHpcYmAAP6sP",
  "key2": "2VkHsGgWLrzyAXTRfMSDrX9kRiLbz2T2h84MG9yVZGxX28tFfLQZ9uAwWpxp3JzpbXztHccNsRbfQge1r6v9Ucmc",
  "key3": "4Gpwc7UHGDWfNvKm3kxkkQhCY2o1JTmqTSGboT1So4KND6HnpLGR3N6iLCx33T6AoYDyX8hu9ckqdLGspdb9BpsG",
  "key4": "4gxk74PoSkXD8RxE2YRzVWf5F6TFycTtG1PM6JR1EJzRM7g5BhzR8787hbPKGX9WpaH2ErdsxKPj2r9hCroHCC8b",
  "key5": "5uzFM2L16hZFReNAuLxamGAwfdXwU4WwqqNdrXtLYiruKVthYziMqoo7P1s7DA3Xu1WWgb6qhEbjhyYhYwNdoamY",
  "key6": "4kx1dtKpYrvL5q7SRNLz1Z8uw19XpK7Ynr79sWBb5osEgWEYgCPKED1L2Ycg2ZWSF7mguh6j5m9R6xASbdaHs5Rm",
  "key7": "QvcBj7ScdxoZisaMzRGRyRXxEUjAkXgC8zXNBjeSwL9x9nbjfqpGCivGbEP4p564SioUTmSzfErmAGvXTBDGAFY",
  "key8": "2GmMjrd2xMnwS9cvhdZnXAmEEC3yn2Qd3AiGkNpNrYjojsJBaihcyV4U6wjA9EQZdrRySRehS6qa2KBnav2B1AT6",
  "key9": "2FKMdE7b857FD9EgDqgPtNX4Dgr693uctuNC47YLavJG3A7B2xojvTmu6Tx4PQT8VJwxYFJCKx3BTiAWmKjdcTYp",
  "key10": "2SqnvPaziybVc6y7bTPcLqyk4y8FZH7u5Prq1s8m5UyFDj27C9LExj5bVx19rfCbKEy9ZJ64rRTtbcH2Axf82X4S",
  "key11": "4bJusR71Grj7onHmM9HDz1aQeXsqvi6QM4qQ4cDQ424iGdE8BZissFJfSbXjRxnLUQSbEfLDDP6K5QcNJHaT2fG",
  "key12": "4PC6o33TJtvp7dGyERpfSjLeuUrf7VWBtFhQ7RMVqLXp1RnKdtyuLsNPima5Wpw5TKeoLzLuwSnWcDq9YeevsY6K",
  "key13": "G2EP35R6w3h3UpucNRKaKxwq4qU5MhuoDJg8Wrw9SZnx51MUQAGG4y8ijqzr1oBE4YiMK4UQffG8kNiiN6nurc1",
  "key14": "5YdCNJuQPqe6F1sMNTJrTP8L1DLeGTXfEYikoiciYEZ1efvnaffu3M7FRSDMz1vi5QwtJZbSXZafyuxsSnDYzirR",
  "key15": "4TtNuUPUBUG3JN1Ydj2F7itHeS1yxR2Rhb2vEqtzh2Zo2EQ4hWfEqGjrtCWnuniaz2BTAWPFGbfXsxBAa2idheLm",
  "key16": "3fxyafUAbDBpsNddeWBGgqjkmwMGJryTt7RLU3cVoHQbrC8R52nJzz8RXNHLHNjfPS3sjgTE7RurmvQhwzu6wD52",
  "key17": "412L9vR1twYRRvwpFYevdfWMgQ7hHcVzdTnCFvwvJNWEDhhnt6cM4TwAixTBFjhJMRSGG8eKug85f9VkFvDUKz9S",
  "key18": "4Re5kwiJ2TcQgG8h7DNqvsHxkMjhaFYiKNf6CWPmrfayQ5w6Y67ULrYTRtmH3RTjd8WHGkz9Lnk2Gem1iuFu6ZEG",
  "key19": "64oDtojhATbZ1GdnZ92KQDH8DtXN6STztXQ1aZHbrCDLWEcuzGSVk9QCo3P1nvQiNTTzANHuKFTY2ezAdHQKB485",
  "key20": "2G7GxMp4c4fW1QWMpmc45RkkfKhbi2mmhzA1by497fmNeWSU4YcwntUxgvDWAwkcHeZWq6mU8TTqQkTRTvngicGY",
  "key21": "2UfYuJezQKZA3MbgNSSMTjzVbCfATbK2MzuomzeJAsf1RuPNpdxZT1etvQRWzaJN4TXPqVYRYKAXAJ4n7axHD1UB",
  "key22": "4uyQnG8uCabj4iSRsWNEyCQrd1daTyznVjjjkNoeLLffrArET9RXAMecYxydwiG4ikcnSrM6atEZMDE26ggNrFni",
  "key23": "45CzDx7SBHYbbabexW7rcmnF2rvKCRCKmqF9wWg7FchU9m1pnHnegLteFCBD2z8HB6GW8fdhMZCaSw99ZK91vfnh",
  "key24": "MKr2jGurx4qgUJoSRquLM5Jg9B1YRc5arbeW3JNwHBFWwzXUKgudsNeXrMdCcLzgvCSBLfvH271sJoJgbuZV5U5",
  "key25": "79CnY9QryHrPBgBekNo2tmxv6rnbqUJREyeXnb216UAGuL4B1XRfTgCSGE32xyfyLgicqS4nxU9wfX2x5xTG8pY",
  "key26": "5b2S17rg73VGKkeVerp8kgHWQ6DRFfFc99oEv772AcjAzCJqqi1o7dEvDmBGX1Q95ZeHB7rMqwrd2iGuTmRoqBGu",
  "key27": "2nuGee1WY21DL3rvQy5DmxegKWfS8MNB1T7ZLjCHGLNv4sQUucmhmEfXX3jUZA9Nfq5GETGr3T3V1osv2o4gUZ7A",
  "key28": "43N1ywNJyfHmo7TUrw7idtM6xbHj5NwvvvpktaDMAJvwEA7j31KyKcqamcutDu3WYVkyvMZyeMrbY8ZUbpj7JFvY",
  "key29": "3RC2d3K6ToAE1GEdJkGzBrKPqeHvxZs3cGhodoAPdt4zt5QVvumYtJtTJz9ZvfYuzdiba9Q43BjRpek3HL7FC8vw",
  "key30": "4SKw4rWgd4rMagJ4pyV9MM1pedqubAKPMs8LzUKVhUqdKn1hkyrFxqXr9bKRYq2ipy8bTBUfHrtDBshw4BunNpDs",
  "key31": "3ekz89SeWsQM8JNQPgqVzFRaCcNiPcxaAsRYiipCDL1eiWHaWj3J6eEFyGemGxhN58LnULT8AHVX2CGqxRmkV5zT",
  "key32": "3GgqrJgqG6TjqG7P9QBEn3ti3z2kuhSTZbwNZLigixtKBqvrzbLCczccDN2JCDohG3LEp76eWaoh1U2sbaBFpLLT",
  "key33": "25ivEbuVyVGwKSbrG5WoqGcV1dq3qM2k88vMRJ7U3WPgwYJQvoAHnGLwUpMwk1zJkfLtdBi4f64WdNgiCYPW3KCV",
  "key34": "445CPP5n9kEefHF6DaLBrpCEATEA4rcZhehFfkBKwdxace44wXTFfup5aokS2WBawwrFupcxeT1FJhQi6F4PxTND",
  "key35": "56wzGnPH4aTKKUZRinsLUQa9sGR3aF3nnaAzCfhLHP84nfT2YTqtPd9rzR4ePP7h2GoH5vipHNeNPo3dFnFQ4mRp",
  "key36": "7HvEp8rMpZty9wCKvjeGKxcAd6aNFnJCkPw7EJKX5qJ3escvtpKywF76N8k6yEAbLPi331bgJ2pBGxzm23ko26y",
  "key37": "3JcKf6rbvWqyhNcRLEUAJeEQyjQQ5sP4xNnuC7hrRFndiMfr4rmyv6Vak5gBg55x85KvCB43MwN9sGxxNvNBV9e9"
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
