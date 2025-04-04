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
    "3duYW3gGfr89FSeguAS7gCcZKdfE3kUtwNDzZMSSKHgdmhoH3aifZ6KzMkVRYuNqzDLW19F5z4wRnQJNS7GHnX6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o1peWSGJEhGJwNVe8sRZfdKy5EMAb9VNMQ3sAtVAiiZHsFMC9yRefomayZNpE76FVbn9NUHeA33G8sHvDsV1JbF",
  "key1": "38BuBm5MhhNmXo7vWkjMRenH4sMUGcPg3ib98BkZFHKytNcusApoTPPiKWXEUg4YBvt7PJChWEH4DYSVLga358D8",
  "key2": "46autC3fMrdDFUyR2zERDnZs1hwsWe6pcrFmenaWVQqEDJWsZM2Lfv3QswGwfUEoaSNveBVZCvwvVuhUEBR75AAM",
  "key3": "42ua8eNHEiXxEfCChnnHt9dJidcfusQNRRZqxYBEWu53bRXW3QwYFf68GFGzyfBAXB5e7ikH5CGtLwR4eXwH78eQ",
  "key4": "4ggHsQjiRQ4QPnNkej5BbRdKbdUFpfEeAds7deQ7nw5Fyk4Lu6NNFLXhUz6Xj6PT7zouAFKwg4aCFsdSaLdSmSf2",
  "key5": "5L9D3Ka8oM3JgZTS9mGaGqA1PnM4pFa5gj9GetFfbHkWke1vcUBK9Ri2zq2zqcjcfAttNwAwik2y6RX3H5FEadYE",
  "key6": "2QpgmyRDAFKANtzkJkoqfiCjKL7PELQpJjb21bPjs9mMRg7Zww2K2T5x7oTYzoqXp53yqcvGLhQUP9hamT6EHcaB",
  "key7": "47qUimR9UY3EV9TUaFbp6SSrcvKCvxNmq6TuzKK53WnVVQi1eEfhfWwwjJzU6hHcMZpYvVBoJpzNJuQah4EETK1L",
  "key8": "4DUWN1pwZ6cJYgLRub2BxPL1RHLkyrXDapyw81MtebxGuoQ3oKkJrunMx4eXuZpcHeGnQMPLMHzarACJ7J7Sp1US",
  "key9": "2gRfmgHdQaM5ctcGLK8EAb6opjVBe9pXDSaSjPVCvWoQ4f4Kzq8YXCenX8h3JakmNDGAepVXyAoy6hYspdeBQbzh",
  "key10": "39h1vtUAWU2JMExxmGEX9KXxYFN7oQMJYpDsACNkNDrxEwyQF2dDUuwp86sugQQgNZRFqnYPC5ZNqghnQ516khsU",
  "key11": "oeaeh4gUJDfBZ2gRsPUt3FxueyqvG1ZZmZQngiAnwAjMypiKFMzX71UyudE9SAo1LVxcncdmBgi8UTDu7KamjVD",
  "key12": "4hfgRc9eqmK94QxRZBJSAPpggB91MNXQ4kqjsSDiujgQYdxCt44fcxYPLJkgiXGmbxzCAw4uST6PVGLy8BBDgu9i",
  "key13": "qzfHA6stfyBW5XySzYpor8DYnZaZPZewRqHwqBfdtS7ew3iGZqJ4SPEsQqGsvNcW1P2ZxGFtDXzExczERLjdrS9",
  "key14": "5aC2k8WAPHgF9T43jX9U1dTn3ccKmqJQ24pE84QbEFgDk8gVnKwZeezjgsKTFAA7mPUFwRLJ5pns2HqZcuU8V2fG",
  "key15": "3MvwCaAUPywv67Rje8t8X42cYiZGJsnEH3buERFYa8PR29MDm65rRz13mWgyMhgzT7HSKb1UuBMgqJmmB4f7ULga",
  "key16": "gZVqAjF1wAGZmJ87Apxd61h4xigwBAGn4MkoJnvvQEryo6E1P64G4Urf5se4BeK917LL7DTFcGW4YnKmFwPoxE5",
  "key17": "3Tjcrg7wxSpj1FhRZBWBwgFfxJ3BdfipFG31nsYX6smQcvrS1cx2DdgMFM6TY2CXik7DjYYi8z9xFpxaaZHuxTCo",
  "key18": "57mCtWFGaSH639mmGBRo9XNG462THF2LZvxbnPqa9ZRdpmbKMSAN4i52qfA1em64o8niTAJVFvCqWFeXW3wiZ67y",
  "key19": "5nFbtxKS3f41aQvLvH1ZwW4SpVNoaoMv87ESRcZGFJU8sJBL6qw91t2k8XB5muaVLoPhBadFZCeTpbi9ijmhpkVP",
  "key20": "3fiRB41e1s814CFK7b9WNLHj1e6DvEaaBwKjpokctvSihgXA9tNqoTd9mrKJ61ntUYurPN2mdsPfq5uFPNM127M2",
  "key21": "FQjuPj1ST9rb2drDyvK1Pa9EcHZwG6EPvv8pReRVxznP6xkH7rn3KNQV7Xc8aeTyhQ8x44h9L8TRCXKdFwHM4Ez",
  "key22": "55LHqK1wA2w2nShWszuwULAgFFymEHoUB5gQ8V4UwmuTCf8QabburtCCffMtQZt9gWTkWnDsM7uiPKXFP8qXGcSt",
  "key23": "5xHsSiTjf9Da36khbAYGfM5ky9uGDxH65MXjGbHAWcGBWe8CJ2WnJTkQFTwzQWZ4rAxK2XjLNhUUA6S4TwPmmPru",
  "key24": "5MaNyXTHJL35b2vEqG4nF1cvjgxa36mrvFYQNQFoVx8YGNLCKZJTagcheDH4zYg5eBkyDNzcV7QW21oe4e61N3V4",
  "key25": "2D7q3z1QCrEbYVYJdEvbv8JZi7BwFizrBafhP9vWr36CkMwexmyisYSiLJ3DpzqfBPUWqDgGDqAUSSgNHfm65GSR",
  "key26": "2dT64iyxbqgiMyfRwyhemZRYVdbsfNoQ7LyiarbRZdKxftfbNHMvJ5vJtRs5VgXiaBAR8VUQJU479LBXazz2rJ7y",
  "key27": "2pcZpPVt1pxoZj7jGrkhM9EnqiAfTmbHNuwL4huks4nbuAFyAAeDS4AAbYsDskL4HJc8kKwCrAYnYmMN2YQ4BseM",
  "key28": "2Ygz8zCkjwSNKydWD7Gqj5rFTdH53JHABjpEK1dKg1GA1yTq2xifHH4r6rkxVR1chyoh2LbeFtZhR4TxaHG7YEGH",
  "key29": "4qGrRf4S9X38uNEB1FMKSTL957WS45m1ZyhKxQfELq6Fe7MdrykwjGUwzqpTQvksB4V9uZpkfm1BnMFjh5C93726",
  "key30": "2oDhCKXx5j4orGm5KcbqoCYJmhdfsJcd15Ys2RyeuQeuNSniHSx7DaX39cRScZd5CrDmZoMWW1nF47dz6fHNutG7",
  "key31": "2P2cac1EbguhqA2272gKRPUGG68kcuqnWRgXaf6J6HWZT3ZkmqF3nxjAsHTWQRZugPF2vjih4DTUWhaoeVG2ndsU",
  "key32": "YDbbnadYAKzHUAH6dM7GtE78s2QqkTcnbKj7ATuJGWqNEnSC3jh4T1vvAcRXuQnYZ5dUDc6SPu6hkHw7mmBP5pH",
  "key33": "2jQnRL3zUfb8jCpyiyQjhck7DSwui8HwXCNo6qcFDU1VqPG3bSAs6NxnGQ933GcyY1xvUXTbDBfZFHWHGJYxxNNG",
  "key34": "5u2UVVAy6QKHH9TgzkZseSyHASbwCapmaMRpokpB4p3MxRXMqdxPiQ92W4k5vQB7DrzqaEjsNDFpUms4siGi4TYG",
  "key35": "zHcvpPMtuefssQWsQyTc2d2jPcrfTZqb7NLttnNWdKxHJJqvRshxoKLNeYvSGRpGNLh7gT5WBRCC6j6bWHzJrXg",
  "key36": "4U9G8i8UVrixhkCbogqfG2yyKPaLLSY4SLnQJeTfGFZisPvixbDZPeVVK5bF7gDAbtawXzRuBHnAtFnE1pkj94Sj",
  "key37": "ph1gWyeTHaLAHNxT8obAj9VnpotMXjTje7YnjwMRAKc3aG7wkBMXbrtXhc4kwEd4QinJb6a9YAXGsgxFg5qRWWK",
  "key38": "3mctqpHmNkigWFSe7piLXMSeA5gzSwyvWAvqM56pTxLaQyJVAAwWAxF6kfwWysWZDeVpjrkLFWXGBhs7N2JP1rqH"
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
