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
    "2LqX8RtZMYWktP6V93g8jZCBStqdrr57diGYjK939DYfhD1U7Buu26vPiXhTXAAKrusvYDsHYG8Z3HDQz7MGwseQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xmdzmv2gyNan6gmn5EcZAfKUrAEQYsdx7QGztxTdBda1TQM5vkNAzp1M8135zrXsR9NwiwJ7DjGyn7LQCUgrAR3",
  "key1": "4VkQmAtPxhAM59WBcWuJazCB4kZtf1khHj73dkE1hyBaS7yZnDuAxEFinULYaZLBaEWjELLeV4Z2BQeHaCw7jdVZ",
  "key2": "2cD8ecxrqrxHgVREfakiDgsBj41u1qze5dzb31EDFrpnQAwD5aUYRUX3aFX2oQ2gSTribBGC67gVkyfZPSGdbgRk",
  "key3": "4EUpxmsAq7ffcu1YLWh2j9qyDMzZft3b5zSCEEZ9rFjtiMoXFR6U2DKq7vAwUsXspu2kpuYAguQfGBDZTKkF1ajF",
  "key4": "E1QZLxaM1ZExkcweVsvRcHZ9wimNHibPgzzn3RkHndkez6YePVyaBjJj4PPymcorM3U2DbHVcxLXLbiW8YhoDHt",
  "key5": "62UhQahp6cmW1s1fgoSBNa9Vim9HNbsg8eLma28Qmca5jgaegEciM2okJqVTmXYQj6nEUPp6G9LRfzN7AxSp3xE",
  "key6": "28QRQsuZhXc56fu5cQfaLeF3ChVtCyFQE89CkwhiqaMeNZtbheQwo76SpBCtVEuo2zX8tZ5pEEfT7Wi2adhwe3CD",
  "key7": "265qyC7XyZcFDfDLhrQgT1WdXmrwaQHEgsjYVPrg22YhmwCVYnJUa9ibZpoXaSQw4NwJVFFzFqiAvpBrdk4rfgHu",
  "key8": "4gz81uPv357P8oy8WydnSAqRPcitrUUFf9eBgZDjsPwFADPghWX1BCb21uJcyt35dwMPhow9R3R2LHeYzr15Rvux",
  "key9": "2sSLXzpoEUZprSYxFpoBJ2gdkqZV4rFmEs76Bs1Hqv8Wn3EByraoqt4cHLkETb9yuKhDQ1mBYDBurvJFcmg2jWVe",
  "key10": "aYKqzvQjiThphDdhSbqxixkX9QrMSPU6Wb5neURfoa6d5ztW98j212ZrmxBs7uG1kADJ7vBJBsVuE1mbXZhKiAX",
  "key11": "5TsSZgvHqvL6STg3GiorknLqytUFQvmteadDYRE4EEzq712wYNARkm2PZf9LxK2Fd4zwpGK8F96gnyQcsDzDSMNu",
  "key12": "51X6jvSi1hK4c9mtCEAX2a7snPyoazYH1Ek34PajqU5PeQfKLyJYPAJKbXtoLyypKG7b6PF6aKpGLMj43zxuQLec",
  "key13": "nJmZinFBU5tZBSyKK2n8jbQDZKRZneFLKDUJ6rnHB2yFAfbBy9a6eMm6jQfwrY3CvD29FBFqbmGDbbPwZnJoo8J",
  "key14": "4mQboW7zA7vfWY1Nf7ka3d6wdTZNAhRJT5LUFrwYvQcfVv3q9YETnmnfkbDWGQ6QpqAKaDAJnzdKTkGhho5agqqr",
  "key15": "28ETPvL5Y1vg5C3DkNTSs7MDHPt9teuimCtnSAu3edBsA2DNSDurLMzo9QhebwXkqSJ8dDMRFNNYBPa1LbVmkDff",
  "key16": "34ZowRQnShXANePGCQ3VXSM5Nhe2q6jUZGYuxAWsqqwiGzy5SxgDoQzrwDWkyALHVuznYZPZmXq8RSvYxc8C9N7X",
  "key17": "5NgaUSCLMESJTAbTmxsDpEbzTWZ3MkwvpxJzNTe7HLrw9oQq1pHkN9mGW37ossxDfUNPSu8X9Do7aicwyvh1Kzta",
  "key18": "3yKGBfeAGnrXjx8YAbmJ7kt2Cs9aNRuWKmkt9KzAAuXAXXTweTXdAorLAA6HzwFpQTjWWBAkFaajTXGtFfnpq7G8",
  "key19": "PQgKxWqNf6pNFTgu7eu7vZaCbs3f9He1FtjJm6gmvHqzBUb2f8kka5NpDf5aHCRuXY2BR332dsD7Y8Vp9qpRFi9",
  "key20": "5TAoogRNhW6N32w1wyxtvbuEjse4zXQXsku9pTU6rgxE95hrd74JHQKZGLinCt6W3yuXErpFrhKz7mXRtTNukpNP",
  "key21": "32EDpz4Cg1LXptCWd9AoHfncYtSkcXXEeXqSAoRpYkJpQUG7SV21rT3DckNiqGmbQRuuFebPwAcAfzE91gYkGijL",
  "key22": "3e8115G54wuYefWt41tiHTdJXF1FnBihaiYgtWd9KrKbMENK9F47FenJWD6SLigy4VnAfE7a57NbwUUZce6kscxt",
  "key23": "4yP75UFJgDgmqnzawwhj8yxdjRXwCrUsxUBo75sRaj9Nk1nEnveVhABqQG9xMKkFvhMwKugH3faywJTYigx3jZdn",
  "key24": "3BJ4JPbiMhCLDqBRBL4gU6JWZpUorDwkqeYpNqyJ7m5ffuiZ813mk8evupzpTyLa1QDvsoLaaVHSvYpWcKFmcD9H",
  "key25": "3MJMmDThME9LzgtnS1sRaX9FPc4WD2efVXRgRLGaqWty5isvcM4Day3N7NzBXXk528tX9wTPdYoqdSodcy6T49MH",
  "key26": "5UQoT2ieMXM2pdHuCpGzWxiQyqqiRmy1zmY1Q1Afb4ZhExZ34BMhEzVjoEqPp4EjaQQKmGuMw7YTjHzzGAbWczuC"
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
