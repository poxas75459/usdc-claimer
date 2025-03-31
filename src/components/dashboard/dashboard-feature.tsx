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
    "hp2i3Vd76FJQuBt1etKTqkmR2dHQku1yqHtCKUzknEr35o16kxbditnzjp9XUxUyrrvwya44S1KkHMDBMRXPTGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UKChQGUZaJEoq2oq4Ug7mJ7hGk8nTut6f4UcMUcGYtMxfAhR5daJc5mqWdbqcTd9LRKYUP1siUTugYhzcRZbtdE",
  "key1": "458samMCY4zkpyo8K9px3yHX46wQhX86jEnavWJhzgRtEM9S8cDieTk6sGWSEFNH2XWq3bs7LoV3VV58H7xGcJKH",
  "key2": "4MxhcUaGQKJU3VDP7TE3NTx26FSrgzU3mThDdrFYcYa1kowuUmEBiWn8L6KVZkYuEJxvLPeCNCcr3R8Bu2ARGKss",
  "key3": "4UG2GMxHQr9BomhgyGBCE5iioQmbEW8WfenXpLXSoeBBxnusXvKX4ZTDAWGGV9Pdjytz1wt4HLGZCjndyNNvjsXt",
  "key4": "RnEemLq6jP4y8zBNVPfJPXpEdsRaC56jAyRDNQh6JC6dRViTbvAWBf7m15beQCcB9ubggJq8y66eF4rUkBTybVW",
  "key5": "SWtFiLsxXRuu6rebTNv1SibBYrCkSB5ydRW822jgrd2AK9jeDSgaczygEUWiMEDjAKr7bPKwrfJn6NNSv27AhPX",
  "key6": "4WXx9Pjy2wFses17s3YjdjuSCnbnvLqvtrtqeyTL4XAS5xKY759EhF1dNdYajH98YJDzeUi3sFPcDbabHjGkf8JL",
  "key7": "3nxfo2AjgvfFFtMVc6eoxZFDrtuQHZWYsdvRTDbLTe6Jg8w3kvGgrkM7PzhRgxnKsaeKA9oQZGPkpsF96186YaEc",
  "key8": "5Z9XBYuTZ2WozdTMX5m5MiTSRXqQiK4rv8EBaPH2ezksVFGyhPbyH12WKzpuyUDGuTunqZPzHbFcSMCeuVsb48zu",
  "key9": "5gYanHzfC8L9Zop2zyg9mCMjAEMzEfbeCAZXfjKKt7SkjVXBbNWpaZMo9xAaLfr8iZP4oasUpvou9MtfBRfeTa1c",
  "key10": "TJLi3MrRcDjzRbtDSjSiwgvx3p6MbkvRte7eFP163y1LyeMQhCmcPejMCeVqeNtmR3btZZFxxAytpwbUEhLwqRb",
  "key11": "5jooFdmxDXFkGBirJbxSJbMubK4xN8M17Mj7e1gvcU4of2N4byer2b5yRztPw3hknwbqYw6ZZeFA8BAKqnHPHHps",
  "key12": "5MEptA8yH5Ezd6dnuCszsz8h8RWzda7hfCYDaTC5spgyUkbCzBhaVMnMGT5Y9BdNmfU1ZxWSQFhzaFL8MxSa8EEL",
  "key13": "3WPUzsxL2JFPh9i2eUzLtLJSeLbeLpS7ZR6yNgvQo2qFFvmjHMzfiPRF61zVxFp6rXwQdBG7XwZ6KCFyhfT9ggN3",
  "key14": "25TK9CcyuQu6QP9GtNPnX34XQoXoU8q8p8d2xdR19qyR9grH3z2zk7iS5qbd3R9sNNaQbpNc7TwX5mjwNp97W5ex",
  "key15": "23QNnz8Z8zro1LCU19rpot5BBhsPqaD2oRfr1gxoBWkXVUotbUPSMQpZq2LZKvEqdkBo3WimcQt888cBvMZzwfsz",
  "key16": "4DB15g5kGYipoA6X4BcVe4yVtFQUm5RxgyLSuWfecfbrysCpKtLKAUjiJz6g63UBQBX9MuMdA7ReiewZyGyPjLqw",
  "key17": "3mpN2oKRNND4uTBDrhEeCtccneF4hxfxS1LHF2KfryQXBLsGqakyARJnVs2E19UvYvLp2H4ozTTqqrWhj9CJ3Dbg",
  "key18": "3V44UXuWSN2NbiMbCnGi6XgYUCc5uD8imqHzeePnhDZHMfshcTaSxkefe5iRabAicNLYgSfB4YfZtge1vHP1hLpw",
  "key19": "27H2gGfNU4yd2ZpurqSxkRZSUUBtF3x46FMdmAPm5hBFgf5Z9LeiarRye7WbSZySHueBAZSZEtj9NeJRNoWDP9sV",
  "key20": "357DnhG46G2b1sk1uwaNjdRBmfevKhjpKJKqxwW1pSTGJzqLbZ5Q6a6nWyBLMHDmfGibSPF44B2424bMWja2nk5p",
  "key21": "4NRbBaNkuEeDYZBR5SqQ6UB5yvwaZmpr6Ss2iuv2PuneqyB6U3nTuzenmb15qMGbcDAPPHSsR4Zh53jqj21LNTKY",
  "key22": "5K8nVSS4txdS5wXHNpWrutDjGV7DGDtoC2FXv7SmhB2THJzjctBeTdh4WW3K2VPStZqLmgu6SDRJPQGiPtQLAGyz",
  "key23": "65rvF798Q69r93PRBYNEKdcMf1iZmUByDednwAbKMraw4FfFizRTFParEtef9jDW4ufPK9XhMRzDAhv3oJrK6Hvz",
  "key24": "khgJAkacF5pBqMp61LpVeeDaR8MtX84Us8sGAq977YNLEGDhDumf2mWutaRGG1AngiFG2s89Juosty9ZUegBdwg"
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
