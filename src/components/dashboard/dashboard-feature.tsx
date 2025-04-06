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
    "46xp7DLCbPRPStCreDmwaXKCk8gHzwU3o2QcjU6eaCB3kwmpJKUPANdVy1CzwjFAvq84HUSx5AynVNhgXQEMU5Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D8PPJC9z3W8gZ2sFW6NpA7zMgQw4DXXwB2RAeVVs2gUBadWPHTXgELGpvnYZHKjdbjdbjyp6cWDCdR7NCDqo9Bt",
  "key1": "5p3g8BA9foG6drTaoVpskiHkQRJxWaixV243oBYtvAVShqW8ugpxZK4sro8pZVkw6czqFawEAxbiXeWLGzu8xeRE",
  "key2": "4rXqQPkJLQSL77mTYsGJUkquMBWHRFpQ5z1LYhAhSDzMSY7c3zbDdKSzMEAn3pnFMi2FZ6Mno57X72sMWAXQRK1e",
  "key3": "5rdvk2UtxuJbr2GiYer3ZSYgTZZ1jPPnxzSWxhoGVRFMH1SB2D6HPPk4xzwH6yrVRyzdh9TecPoUAC5vw4o7DDUd",
  "key4": "4Wg1Ki84zPNw6dVknTK7pgE2wdGNQPbf4RQ2RNsg5eoSBgo4XiZQCApsgJvKYm83EiK43juH1rMk8XjWDYcQpyKi",
  "key5": "2mzcGznWuGUg9wFT9phRtsuEwiUnrFrtWD8rskZ1uNCyM7Ws5RtfxPg8rMEnB7xkJ82R2UpvicGgZCXUD2XWhe6F",
  "key6": "43EmzuaAbmbSJctNucw1S2geZP56JRhrxb69MjjAjtrsp73x6qLJL7sUJz6HzqxquW1p8zAMS2CdL8BFpJmQcfUv",
  "key7": "3thQURQAXd3FgDuCAGqu77vZC7QWApFsuoNMRgoUTwdQYSegFqd9nDomSTFVMdGhc3vkjBYKBBxSG44fRifNkzgV",
  "key8": "65cFkFboTWFjNvPBn5vLvqFxgHmWRsRZ8mW8ZPGaNzNviqWCsE12FJZ6AeT21UEJa61YS2tuGWQq8ScqUEKFqfn9",
  "key9": "4GijZTeSWW7TXbsVt2Y6hRjzbS8YZVgSb3jCpPW3pxYhKgs9NMNod5rvsgMMZ88yV9kUPzKHwTFdPd6wiNqC2Z9b",
  "key10": "2mGjjaiXQBGAMJV7UeiDEGTWNLNTCK2orUvxNgVvMi2NvQsZqT1EH5hKLGZTUCFuvR6krFsLKtat65NMtsE4jayf",
  "key11": "26FnU21vzKZyQjUibLqwEfhWmSedHn3zJXuboYW8e5ARHt6yD3ZH5WAdEsegFPVCT9ymyNr9PMkqPh521hx9vRTy",
  "key12": "SBtHZp2aW9jmvkmNwpd79sMFuUXk12Ga76tAtLkPn6ZFkMhj7ySUK3RsKV2F1n5ufXupEPDxi5WJ3g16LQVukgp",
  "key13": "3QTLFbK4jrLfq2gbtMFD2SwUzTcxCpJ6WD9MnNH6KMzZtFEFXFAgYpCYf35dmWER7BnMqSt5GEc5P12vArmd47gg",
  "key14": "5xMJ4Lax3YF5z1awQ68jHiYgDvPqf47R8YkBG5Lju2qrMRKN84uGuvSgWGEZzg38quqjcjm1gf5dwBbbX9vUHdVm",
  "key15": "MjfEiFnRDUfpGUaVCLLiSMCMSCEvuPmmM2Wyo1F37JSThaoVDkArCm3hzwJb2DAGa2bR4FDuLKxX4zDp2kTJDaz",
  "key16": "h62jNznxQ2GCXcfB5nXgZhpASTwHhuhgtn8DkBZ2v5wif1GiEHgD3tkgKKQLApsegAwETwkNN31W4fJmb2dkZsG",
  "key17": "5jNKtJpL87oEMEKLgbEMWpC59go4CCQoJyCPcA8AGPifHXqk6vnB8yoFsAsQb73ZKNTyQNHVRNZXsAshNtzj44k6",
  "key18": "VokSzPz58HZGMMZtEFACBNkK2kvKRbkW3TsQYxf8XbivPP5nKvAemNS8Sx9uck18jXiEukupTvLrceYADWqJBge",
  "key19": "3hX77Fx4pMURbtKxBaqU2rDwHjvtvQxAz4EUXNGVdNDzU4tcQgx8N77iD7vWBbjqUFeey97rJZjEQnR882FmjTDu",
  "key20": "21dr4DnkQLFVQcA9cgStsKsvTeE52jnP8X2KKDsCHdjP6WqATuPR8LHN7YMP4RZof9Tb7E2gNpGa9KycpMf2ziVS",
  "key21": "2wAKqeisNNyJUrWXmruW4RpV7FC6dwmymYLB6ckpMXSBxwChjb8HLDfERf9oedxZkV3nRs4jhSdwLGqEiMSnEE3V",
  "key22": "4nNo7GSPUeinEhzG2tBeZokvwJbvJAXdeGTYsX8kBzoNiAmhqAZAaUWAd1GjPcXTL28M9QgVNDEYEWyvX2xf1KnQ",
  "key23": "2amjdALmyagM3TsTjgV8zv9v6np5RYv1d4zwtAdsnVkJraxUgWVgXVfsPssNQaBnDsfFShHdRrD7ryoX2491JrXr",
  "key24": "5Pm5qXjqd9WFWVZEcK2BK35yezy9AJr4AHxWZ8D2eVeFShyV4eMF79rDBYq4t6SZmCKuZV8JaX1HyfBLjTpAA7hq",
  "key25": "2Xx6d6h8ftZADQswCCWpiaHxhrdQQ7HTAbCL8jFWjxwdf4LjGw7ZuKvCiCdKTngbhc2k8hKLZAq8bKr3Yis2MERv",
  "key26": "5CD8yj6ErtxKp637c6oo2R8JDisLpRrqx9yYmWSWRKJ7fiywsm5q5wYpVSqLXHgBF7rECx9A1W72pLxAqDtTDzKK",
  "key27": "46hjT7UWAPuowBJSyDioS1W5wsuRE29XyR63rDpkgvVDWtKvDxYxAw7qqRKFEvwQu2KJzoAxiecVAvmGCop5Xn8M",
  "key28": "5dVNBATZV2oJZAeechjeX3n4XrdAc7G5dgU6M2GNhk9qVYnhsBiccqYGB7bFQvrAwex8QtUcqXZBVSCTwoEL7Yd1",
  "key29": "5VsY7AbyyNBsTZBBaZYCSyWya5Nm261MjSyZifGGHSL7ULiBgzDnszCr4hVLgP5hz79MVCicvWL2yZ2ze4THnrsN"
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
