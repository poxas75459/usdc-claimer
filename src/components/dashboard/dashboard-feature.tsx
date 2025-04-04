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
    "4W5H8f4rS6VGScUEWrvEnHU7jbe6b2yEx6x8zJYmd5XMnGXSfUVRhgMEtY7RspYE36CXLvtA8oXXEK6gimRSX39r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e8U4TMP8K6NPHN39s2D8WjV5e7gRNib6QnUw66XiAmW4WaYFqZWViKRebTHA3zJX1mUuehMXRHP6UbkBBXToz9U",
  "key1": "2Do1Uvr5KSy4M3qDwxCtA7nYsS7morhi168SJSrUEbx4RQiBkPm7WwFBEPgBMq1cem8a66y9cppR9vUXtD8wKkP3",
  "key2": "4VPgk6EN2daj3riAMKDyPKfe9oTsQSWYBeU9SFzpUXfueCb4J2fh6erph4jkkiLwa1ynDHmgEtFcNEAezcrPAGdg",
  "key3": "3F8Dzk81w2rSZqquKSYt8gqrhHt92LkaZhmxov3r4jUGgcocVDJ6BgXkK8wJpU9GLp3FVcKqJuV3dsjqYuoCZDo3",
  "key4": "TjrMfga5GRpyk3zYeeHRhQg7kEiVJncHj3QegwgPGPWf6cZD6UsSncCYin3WAfKCxf8t2ZHFR3j319JxrQLo9Dd",
  "key5": "5XGRfm6Lne2tDfS53Eui7aPsPZF2kS8QV4x9NqL63E2aeGq4Vtoyp5BxYkWAW2k1UaDSoVqU6JmwHa2DcWcr3qo",
  "key6": "vWJMu6khVrhgTg4VhmCpYfzoc9GMQN2dRAb1TnscRpwpTE5X3NAHU3Qxxvf85GppsyLVCTKq2i6bvuRi4Wi6LTG",
  "key7": "2nV8HFD6NuUs2eacyvEGdGQKHd8BrzGWRyS8pQUtPUDn7yWG5oyN9nC2bHReGm8YWUBAdBhtv3vQADzPRqaeUTQB",
  "key8": "3WuSEpsfoBPhEF2SThLGGfKWbVtBxXJycUCmc1f5cncRanojYrFV3vDVYMoBHbRPE6YpJwQRoGaoFevmE6VmQugx",
  "key9": "2b7LdXBKjAUaJrgVRqU5URJ53ynEMJVh81RKYxpVJW8YPovVpp7FTnqB4xvpZEe9x6M8v7M8qAPS9W3DShWpikGp",
  "key10": "qYAYudURkDUyoGMHAWtCKCLEs6obi6b5d7kiDrfnVdg7udBjFhgkSSs1FEckmVjwtSNqg6PPTCtjeAokMZMWuDX",
  "key11": "6G5gXarpJBjQ9kNzMTyAxrkBNwHtLB6fwjbg1LPUL5wEEXKtfuxUnugGueEvfqjzsmVhrS8kvC7WARBfobJeGYi",
  "key12": "44rc8hqqdXFKfRiqg9eh5kV28YqBhpwLXmNTntNWL6gL3ZWwNDYLw5qksCct3k7auE7WwSC94h6s8EWHSg7KvtVM",
  "key13": "3oCzY5vG5pEyekrMokNnNvv7atvZLBXbJ7MmWm3qx2T69h2xNDcDpSRsDgxDttZngZVZbDkHJVriYPk5XwLUMUec",
  "key14": "5NFPNmu5vfAXQAss5722Zfpsd4k4qHiv6SChwtYtDWpSMprdM8NZKFEFUfjri7JsPUrwyJwGzRzvys4YW8Dtv18d",
  "key15": "5BcY8dLfddsLGwAik2jAkH6Xft2rd116ggEPZ1zmmSPodDfHahGoyD7Cks5EBG7Eg55XuXKheAQTRnH1pnXerHQn",
  "key16": "2egc41oK7GisFxpuJNsuWDaHSEc58kT1jcmnBb2xCJhUdhLGbKT7weMkX3DaGBvTY6U4sSnjq5FWjQmA4yeHq4oX",
  "key17": "mJoSWWt7Sbp3TnqwL5ECMGmVzq1bPaT2FJrvv4FgviWGn1wStK5AzACbnh51a4KkLUspaf35eJ9c8VqzDxNMXeZ",
  "key18": "54DC1i9w8kgizHh3NNHVkQ1uLQknPY83ng8A5xUA7EeAQdEevejB9c8bJ5bD236LfYmqYDGroXH66Kiuu2UFiCeT",
  "key19": "2oxwWk1HFgEudVGCQ5RF68cXvmWMtaBFgxysiQ2motehCmTyDW5mJ9kyGaMEKKV8wgafmXP6kXxK3WXdYhzT6UNH",
  "key20": "ZsM3D8DtiD58Fbf4eEnNciDCvqbUy34JUsjBT1rymWL5ibqbwYkkjDdEUvjMfBd2LS3URTwBd3CyQKJc5X3Yibf",
  "key21": "2bGPMRqxc8L4QsiB6emPZWoFe9Uvdttg5p29GtkyUj6smx5qS3mYWq3KWfXxiF2ig9CVZud9khz2TjbA4PyS9Evj",
  "key22": "3HaCJtjcYWQYXh2t9H1eiVCUu3qsiyLysgt11HRjxiNYDmDfHtKqcff5qDvA37feSYEZjavsKbRYj7uAp76rr1ap",
  "key23": "2ZBspZ5VgaPTcYsmtf3ePr1CqDx9GK6E7W25iUp1SZAmBDMPX8EWDuri9D6UsiwyZ67aj8Y9aL21fdFbUW1TdeXC",
  "key24": "4XgGfBdeezQZmxE8cAXHe6zBwvHrU8fMay5R3BJxkcq7PaDcEko7LwT75NrBa1yoNFg4c8kW3hpfurtqQ2VT5pnt",
  "key25": "65aMRoUxLHTwr4qNsD3uJK5rmQjh4sSQgN9F7paJ6p43WKq8f7NwJ5AdwaycCCsff6xseaMPERLu8xZAwuH2U4qJ",
  "key26": "SSua9LVduobWzMuo11ATH7fHwJFc2Lg6cb7dzAWUbfdGd2Kb7BJMMZJmqNoRLZ9KTrL7rboMha5GKTrfL7FAXJ8",
  "key27": "3ZZ6zbWT6Zs4v9ut9SNJPn8Y9gKdqWx8uy25hJsEesioLfyiJWY62qiGEsCPPUXEMFxnpfbW97a1kCCnWN98HL6w",
  "key28": "3oa735h3qvRY4RNSLbqAiub8vRQY5ng7SBTayfxZWa7pdZBu15srQQdBSckw8Rg2tP28sEGd94CVfWqNMaFm3WuT",
  "key29": "4XMcGw5MKHZif7w4SHb61PoiwjGDHP2eDbFi7zDQLLnFYb7nFoje1AsUwuBrFuE7W83NdvjRDggZnZFRgXFMJped",
  "key30": "59YWZzRzyzJvHqH7xYkk5fAKXDJTFAeKQuLmrW71iJtfssKjyGdNT5DWW2385Gaw1CsNC6FdDGQUF8aKwVtLrvpR",
  "key31": "64HfgvdQeEU3CDnuTpZd3Gf1JZsSeXAa2jLvJ2R8jW52GuTY6sQ2u264JuXwxDeojJdjWcQuzexD4a8GgQ2zY1xz",
  "key32": "NU6QAH3efKsU2DycsvdKyThu5Yscoa3nnk6QFjTtt9VNFpf4kii9FNgkXwW3cVpggAqahxbwGYs5Bhx44qkMBAF",
  "key33": "2tZKefe7k8E3bRtMTkrEyGf5GGiUj7coRs3DFVzYPyi2PEJe5MNt6hJTZyhukRLzRGRe65JdfwRGYaBjdALC8nLh"
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
