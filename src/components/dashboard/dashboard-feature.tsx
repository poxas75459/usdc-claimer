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
    "V7av7cSMJWDfsqH4qhL1CsEpdxkBKU6ix55jxBe98RBdnQFWFHahyFWZmAnwJNEckHpECyLogQbxeNybgpPhmqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2miGbk1LAtmfrQysJLFmgDiPHpZEY1nrXEYAEV7vp4jv1NQAtH1FVekNdgZrTXz62ZNhQHNhpe5b3iKW4VLTkyiS",
  "key1": "3V1ZhZLMpcmf5TtueUGnda981sarG1h6p1WTnt86xiBrckpmxmgiFkTVAALtKYwXMAULuUdhHcQjiiD2FjyerRgd",
  "key2": "5mhGNk3K9J9TSaxH6rNYP1D36EmBf1q8gdaCQXoRNWuUkTFnejKFTMdS31jHyfUDdHDcSQWtBDNzc5TzhHg1EZH1",
  "key3": "VvSGDc9L8ggrgTUr2peNvBAUZCxzRvQiZJcZABTxMgU5cqz74RYrz1C5GGKvsZjc1nUp2n9peh3r8eQdkDLxXJd",
  "key4": "5Qh2FtMG3DyjH9yRBj5DbahES83j8MXU8jYZQehESsMwaZ2PwCbUUZMCrxrWmPGX8RCAxzZiMPAaBYGtAFeCvDa8",
  "key5": "Xai7MxS3VWqSgHQcCTGt38nATEd54wMVJDvanqA4RvreKCLvYL1o1uGeF76F5cxrDqdbxDUytXVjfuugevimp2K",
  "key6": "3tCKqeq1GNxEeD6SDfadrsbMZrM7jtgDvB5bVa9ZcxDJAELXPWpAkVZvrSmWYFC5AUS5vAQT4AhmzByB67GpdFo5",
  "key7": "21AGoRw43D5EPLCKy5heih8xiGuYgzP7yM7Zr3ykBLVwdx5AyGm2rsN4B8GtLeQUioFAioC73zQNAK3kSesG2c3C",
  "key8": "4e4PQU4qRuHtfRHMAtDUi59b4j4Rwx83Wr1chzzsXwbs7rVGP94TKCvHT84w5Lkzi3QLw7BuVAL8sg2MpbVoB8Xb",
  "key9": "32LCjFjq5QFkXte2qgg5YMKAczEWJ7EX3T8YgcpRwCugK2D6YuDomB1BVjKsqvzsoK6Mvof5YMc7DvyKh9LQPNq9",
  "key10": "4Ss4RB1hAWUKNpGXwmTnVu3tdqKeLzE9knA8ntQ32pvEBvQhtqXzB2mt6UMUKwCscRbiXq6zWUBDbocTFwfQWoYq",
  "key11": "5s8GES5ywenPc7kCtG3rpV2R3GLXRKNPGCunEk4NppFJd87DQUMpdTivzFUf2fPzjcK6hXQs1NijuC6EJDA9XnEn",
  "key12": "6ubokX56ozEFogeM4qkr49sKsNDT2Dd9uVK9zA5hGhn2Thz3iPeJ9gCxMphVjhDMAaMcuy4j7cgSc2gKM3y6xpn",
  "key13": "2gCXpJ98Dpypjz38UNEwvsYRx4n7wXruFJgvhc4xdj3oDuHmhvBV11ajCRC2bnSxvgoj2ezKVdxbquRCSsjzFKPa",
  "key14": "4r2b1D1TZ7519tBiu9zviSdYkYw5hTrGZULBZGKfRyxKrBXunD3fCkYgf6hAT8D7cSni4qbgDoS9hAgpnDQnLZjM",
  "key15": "3CTeDDiAFNeBJAinRN8LeDq81tBe99Par4dCFktANfuY7rLrc65UZXiaTTR4nzwetkowxEYyjxhx2pTHvxUz4C9W",
  "key16": "4nCjzmcX5XWwxZvnxXA7S92AzJzxydY27FLwKedSPmkCSyonSnSeT9XzNZiqLuxeoSk4He1SYkFwmCTAxY8Muz1y",
  "key17": "5AmsHLaunSmjyaNGy4UAAnJ1JVaMCAJu2Z21zJM8mU3o3EAwWS5Td9wpowF85zJSCeEtwT13dz818BUY94s4XyDg",
  "key18": "Nt2bCfCM6CgnTsNmNjAiW3wmmeT7qU8ovz2Yc3YADM3hJ7Lxwj41dyzAwYGZitQsmG2kN79iSy4oE9Zd9bvV7cv",
  "key19": "42rtMSaEdaApyWUqKEP49u24e7ZLKtCqGLTthu3HcgngGkmoHw5izYjjgarwChTkigq4YsKAt8EEhsgMDqKu3G4W",
  "key20": "43By3aRVuUWAYvxbpXFFWveVczMmnT8rnVhzh8KNLbBRMWsfe24jCtBhVRYM89uNK83Vr38gUaSXDcD3X6PZyMgj",
  "key21": "yUJcpngQdgWoZuusM8xC1R9AQz2tWvunnuvLDahb7n7SEJC1ViFzhNb7Puchtw8bk9W1YR4QbRaXo54mRA7TVeD",
  "key22": "uJycLiizFFkws3x836BFG8eU5ZoRpd6ndYqHnSt1EBQyfPmJwbpB8oEHNfM4CJtUqyHCpGBcehZTizjLPWaQsbQ",
  "key23": "fE8dX6bNgSLnjixXL6YN9K4DpmJuiFAmojrzDZDkeuhPQ4Pm2N1SWeS3QjkRq1JhkCamyYK3x4SW8Q3tDWJyBZC",
  "key24": "vK3BQRxiR2gneHt6Xntf96xSJJw8rW2kcmGb7K4ywhTL9747FGz4HRtAbxLq3aCiF8g8rkX8GQT9ZdLbN3XmJbR",
  "key25": "5DAYqP8Nn2trf7m8JGgdEnrQQicYvRnL337KqaphstzhbM9HpLT6BtL86vHs5ng6CwoJ24T6wqW8h3ejdkiGfCWK",
  "key26": "oa2Hf2sUr6gXQtAs5CDULHha32QcWj7ifRsxdz31RXZf2SBEDdbMnnFRiKLJxf9wKTsh5JmZfhFRvUN3iKpi1X3"
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
