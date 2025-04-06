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
    "2wueXtfToa1hQ2ptFRPYwE8LhyS3qPU2LKy6DQJQcXCTnsY8k8gzsF6oC1u7aginrVNr2bv58PfwcWX6LusmXGzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJMD2Lz56MG4V1bg3q3kahvCNmVEH2foccjZPXN5PNr8vybyyQeUn11Lx7b3dmcbdtjGiXyZFwJWVyUCUgsqxox",
  "key1": "4aexzGctRefZx32UQjsCzyMQFiofCr82jwT22yqshiVUBuiTFpAo7Tp6WNevFWaeAX9s8LmEjzgKAuD3kKKDncSd",
  "key2": "3y466m6tYzCfyDv3WwwQwKJiWccLPHnZZ2kiZsTZ9Goiv8fDJGF9tSdWZrVtLfCQ93Kt5zhVvCXe2mxHVe8jBUHR",
  "key3": "3q2TXyLDnLPUZkiBkDFiDMu4hpy4xuxwrPLiUw53RTrsydUt6tUxHHYvsL1rUCbHQdH8fR66Es4iHNVPrEYeDL7w",
  "key4": "32Mz9FXayYWwtjgdSkt7Ui3EeyWJhMeRaNX2NDD1kDq9ryqeWGWuSD7JUuHYHHNkQviELverqyK42zNN2djjotzZ",
  "key5": "NgLTP7eaP86RvH1FgamKKHFrvH3qoTnZVWP8LVLitt5bx2uoeBBg468cn7cmXk7kQfVGELFANsgVpryQTQXPrjR",
  "key6": "U5AdFyqe4JHbzKh2ggn12DaNV2iJBeSsmPQuYsdgwkFvctYepE7yN35iE7n8PsEaqneXukQnZCuE1c4zW9rWgyb",
  "key7": "ScZLmBZ2eCgond1GdErDfVapA3jDphoS54HwTMw6j9qNCFXWB35Mhr9Ft2L5bhEUJJ7wcqRcnA5ECEtk2cG7Zzf",
  "key8": "4TyWSthqWmfxNcap3oc7yRzvWYdz1tXGnPfnCkKYTmXF4dRQhNEVVmURB1RCkKg4dyDGRHocpPjqTBNADAvC4mpH",
  "key9": "2KfmXEiGxmoyKjKNTaucv1UvcVACyypg3jR9kPYrEgAny7YdQit5SZyS9K9ccgVd9rQjPp6nwUgzBweJ28mUZ7TM",
  "key10": "3TjsXQAy5bMj1i5MxygF3w58S2EhET7ty1wLBjAm8BY31chYtUfAkwTdW8sadQUxDxqmzsz34ieB3nTTiirWSQRJ",
  "key11": "5ba8zdZfPz6hECctLMShBT7T2sDJ2F5qDxG59VHzit7rsGEnGzcJWUjTQkX2skawVtsAtn3C82FoMN5BGhEjtUae",
  "key12": "4fLwXCfM9nS6ia5tusVw4YV5nvdxzY9A1eavK4EzCXbTMrgMWaNm6pKUe2pwVHbpGKQMAsQUU34XWDFXxxRg4oJy",
  "key13": "5FJfc5P1niDrB9R2j9td2VmUgZ2XX44xAtRiP1y3MbB6z6yQTr7ej5pAwZWE8MA95THjXUyFhJc4r1A6bhHNiJRQ",
  "key14": "BxPoj4usT6mtMngthmNNjaey3tY7gbMVViqhEpwQDvzTHvin3DGoMobCi1Yi9zHfKUPwNGwAkkGFZ7NFrx24mWX",
  "key15": "uQne6ZSeU12U6HkJqfYGhvVn595kodZ2X4WizxvjXFoupExaNU3q9LsXRZnMnkSinKtAakgaHS6Ruprspjy1fCP",
  "key16": "5TMF4vbsDu4chhmg7ZAuUFjucFon4TnARAeQfptJCvZXCSz7dCbk6Lau7JhqmevNo79tJ2jkE4P6Lmnu1jU3Zpvr",
  "key17": "yMLQT2PMwYsHD4Z8wGEfXoHYKDJEmWyxD8vS9T3hm2vnm3qqtRZ9Q3q9JAWbqajBu88maYmewbBLpeiThf8fgkt",
  "key18": "RF21X5VUvvnZqW2CDNnxFaougzv99f8DaNYsgG3XAZKUxxiRaanX3QfzoTNBUsTS18HJT6ppDmuB2mea5cR7XVg",
  "key19": "4h4bFURd3w8hRFuAJXKkEXf88VLrKxpabrvDQwgTMUHtR62aufy89MLVC5spVQtMN2DRzhb3yUuZqigjpcoRYaci",
  "key20": "2r5tWUDdsrht1w4AJLRuHrYD61N1NZB5rqSGzYJBBYHCcPSsUbHdfM8HddhXfznd8ydr76KDPXsyXrxpdx7uy94s",
  "key21": "3F7jVvRyAazDENJjZXUQQn2W1QSKVfpY4mYwSouvD6sXkM9K1JA3dydy8tyuHmMTkzt8cXzVhNWumqAe5Xfc5Zvp",
  "key22": "2xZDgaHyhiKSdDCtcv4yWDxRif1hoK3kbFNpnUJWCeTuLSHmGrX1QwHo82KKM8mMiFAfhspt2yjGnxAs5xzCS75Q",
  "key23": "5PmjNgpQH85BCTqFVK8iX9d3ov8xbvhiYNpvY3dzUjHiSPoA7sRnwaimvLRRQDK5Ksx5jA7oR3JgVVELcnWpQZci",
  "key24": "4KanVWnwEqn6oiq2EYbU2UGWBBtyXsCCDo3ZbbFSnVfF5o334ggpghxojpbgjPNzs8NEnNbo9DUPn8WeeJfRagqt",
  "key25": "5V5z3h62M5Jc7iaDKG4FMMrNB8BFWKbJnaa4wTJqef59cqp96gXepgDicHXLYqFg51mANHgxpRqWBUwVHSaBZ9kk",
  "key26": "V4BxV9yDgFvaneRqgKaqqaHA29MQMBoK9kCa2pu9KEbA7xoz8L8DQ48TSEr1xSQ7qpiH1E1ukp7uvUgKbJbavtU",
  "key27": "NiquSNPK3dHDY2MwP5mPrrbYEXx3mqbUPmiMcRT7uwdffXq6VJ1fNwavUdgfKL77hPk27CdGrvBCu7D5fKDL1Su",
  "key28": "41dvZribXawcgcBqJZcreYgDCJFTvi6cDhS3bwmt7GBsFMRHWXmgv48NhrWFhRAD8iDZjDEeXxnaWayYwUXqHTDh",
  "key29": "opQeHc97e2aj9K8BXMULNwgsajpd3r97USXRHNRuT7tFUhykWyYhW5WiN5aKV2HzbV8zc3cdDSvDAyoLbCpiU6n"
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
