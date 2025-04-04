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
    "29XCmTCeWpJupFcHspZx2eq38BXNwgKZeSiZ2aXJHKsmeQNgZPp2DpBXp26x8V4kN6G7x9AWdVVHuJc6vnwcfYXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34RhZXpRPCCtvF6Sw53U4X6TJxtzVxiMBu8phX5mKzq3uLygcfJNEsSQrKXdEEArsojJRGdJgYP6D4Rci8a5Yb3t",
  "key1": "SL5dBaKRyRVENDddyd7bYUqC1tpVVCEeHkwfH7tThyKpyJTcxiqCH7zaCAkuRpWFysk8JWFsy2WnjRFR8KfDveH",
  "key2": "5JsKukGYpcNoLVWF3YRVQyTmJ1tnXH9Xfda8Z39kEZPvvSSiZwYJTf6s33Qm6EDf9VKYgQeC8Xgr54XTY3bLJmEZ",
  "key3": "3CrswYnVnfqFm3VvAop9zz3JKoaGvPBryT637N22r5VU6w4pn9QbdwCZFfeLVABmnXxXj3kCjyJ6Qv4kzkJy1Kzh",
  "key4": "5E4tK5j5dhFxrMYt1LQ71MU4aS2rCpdPV1qfsgQ4r6ucA84pdaC8zz37FBjH1SdPrfkb56gfTC6tsYju6TNk8UHz",
  "key5": "2snxhvh31DfFLrFLYMxdX86dNnZNkGuS5i31DgvYEhnCTW9yWtd8n8xAApxENkWf933h3ZjpFDtcGySZcmZqYqSn",
  "key6": "5dxC1VfGHdzKArL1qxyo46A9NPJvmFjq6buaqmNnjMPwo6avRunvMvrdDRDhJUQsSSbgkoYYRY8aCWE9DSVvyb61",
  "key7": "4RjZvnPNieTk1sg9Py9JBw9vXsbnuo3wsshi4foSpp7S5uNb4C1e31CXc2AqPospsdbtSrtJe76tXGw1oRQkEyBZ",
  "key8": "2NkifA2ZCfCabsu3ZsZxunHmf6YJjGr5wdRyayzewn8aMzPGdj1trFSXRUDrpVkjbBfaexUW3kfB9pRth1S6Mjok",
  "key9": "4UBoB8KN2okAm3u1kFPDKTHwmQgfNfkcxq9AgpMNzXzTQq7dqDTFP8bbt6KTnNvyvSLTJ8KFirKhSxUK4FLKjU4R",
  "key10": "5LYgQDM1Lm69EiDo1PNS7aurt9x1NxV99r1g457SNCuDjDcMu4VVUKVeoDWaimm7xTFYgGQDUSZxKZCBpNR51UC8",
  "key11": "3fqR6Asf3oF3xH3fXyvEuDA3tCqtUfuRW9kEnUxJVGbx8XBGNoXHjkDJjTZFEjgMddyVKUaJJw9tqwuKARJUQCZx",
  "key12": "5HUJWD9WoEiGYawNYNahYeziZ5YB7PQLxHSoCEp5iRfYKk9fWX2XTeSU6yTsMxU8NMAJoNxbZWF2wKvLdGg7rV79",
  "key13": "2DanM5M4DeGgse4Suw4KFuCdffsRkNXFNXkFsL3v1JCoP25zFfdcwXkR2fb1jasRnVnxe13Kt9bRgeQwtQtV85UN",
  "key14": "5xW6B1Lvp4sH1GCWpnFQaddNoTLrHZZSafSgcfpisnYdVFNhwbhbgyDdCtZQzivX3eCJDNE7qM7sQN1H1wEwXKhM",
  "key15": "2dRYseJqqXytfCsVsBqXbV7sLWu7VpL47TSennWhXNwQfjSsk9wjR96MmcFBR7a8vRpZhWy4xEEvLJ7qUzrryvwA",
  "key16": "2R2TMxDSDhM5F3U8fmj3Asx44pGN9hdfF2nPZeLjKfZjDnELge3QZjdFj54zqYyhC3AURZXB94fQDz57ECgYwCEL",
  "key17": "WcoJQhv9rLtR54C6LkdCP3oP2xzbhr3vusL3oPK6WbV38EBGXM7P8DEMtXXxpvyycB4rBGQ3ihhpBQmv9fE6oCw",
  "key18": "WUrYMnZXcDQ26uaLjWGNVHrUGjkoR8mhcbddu9ZiKdL77XTPKxBDg4GpY7EiAE4vS4J6HVPzb9Seiz6bQFySGLB",
  "key19": "23MW3JzPg6Xroi7pZALMcfV6Wy4aamhC5mhRyS7fuNNYPEeLNcWDNjk5BVAdp6yYepqQioFoCcDAHCBhtM5KZ32c",
  "key20": "5PaNKDY4GvzufdZtxXZT3gJxAE7qfNSpV2dKxkcb4xmcjvByhLNmetwS7iDxo4yauhzQi5ADsj8Rpy5AufGB6JE4",
  "key21": "33gPx3WCqri6zAvuvJsaS4P6D6TG5A3Aw1pxcRRWytUVGgMHMdCKFGHqxMLnN7fGMLZwUjffFSzQiFVDDSbDuD6R",
  "key22": "3nukUQZEmBcCMeMhecvhVGUZmLp4ECbEUNRJZQXSNuw8kVXYUKumsUzqau9G5vj6pLvmBtFdhfk2j1uMd25Fz26y",
  "key23": "2wZwCRmSJzpPXWTZRhMaxPFBofm7QVJBW8AJQengvQMCXWUnsJhZTYgMWjwPeEiYYFcGdoFRd2G6JYVqduz8cLSe",
  "key24": "aQfR7PTubJhA1pUPVBSKrtpv9QtUWc2wfQoV9xjr6NTtUQWVVoJ3xEJZwrgvjDezuC8Gg2cWGFYXbnnExAG9F1y",
  "key25": "44wQAW2zhwMYJwE92ixHZop6tQD7UUMWi2KxjC5YZGPYYnXTfG1s3cuWt8gXYns6pgeGsCKf2gGwqF4t3DBp6Pdq",
  "key26": "CdgUF3FEdJyShxp8C6rfJ6XwFHruHRqCsgKnvrm3q9H4qm7WgAYGEiQAxWjVi9HJRHqcNK2vSw6a3qs8MSfLKPW",
  "key27": "3G77dbmeTf6cqxKd5seBEp3MPVdUHQPneUvbZopAxTsFCG5Eh6iwef9L76ANAsyprgHL7vraDCJD2WGQki5h5zN6",
  "key28": "2NMqV7Eirp7xd4zEH8RTwdWxQKDb1FmgmNQXd47ATkUq6MygH49G79E5HdDN45UQQvyWhf7A3mXndvBXKa3aQXE7",
  "key29": "36bVc7CBJetYwgXzaGb2PxjsN3evvjmvpnzySdFAS9ySVsLi2Wcu5JWALsprak9XGE2SfiApY7YJxTT25aVLjz2N",
  "key30": "47yjeibD8u4UcMkCYnvJE4RkCQugeqicWNhkCPybWhA3mdqgS7aj79HqyqmvEK2rXmxNoFktq7bxZuXRxNbLkacy",
  "key31": "5wXJaSntikSuhNnDe4Pfr5HRDJrfXmtVLWHxActwqmGApQm5wasQpc7DF2Lqrwhrhyn4839wwDXArhqgpx3BGziV",
  "key32": "3oZmGp75kjtcBTqQ28pvYWCHocTrtqoUkpX1beba81M7NayHfEM8m9p7TiPH3qHxeH4PvdeMc3xWu5FM687zu9gF",
  "key33": "3dXK6SGv7QaCgPxxYQ1kiwePzKPf9MGrL44x8EdVhfR4KknsKErWj5XazXtKBR4dkn13nEgQKsVaDNwVzvr5yQsz",
  "key34": "4ArwkWoGWivPcYmHT6dgJKd4vi4fx9aqV8Zg4SWrqmnxFXVGKRRFwjUYwshAStnGqmVtqn3H4SXXUgFurQWvhXYd",
  "key35": "3KTBv5bLndCJAjeermcQu4nu4b9vbvJjy38eaYTZeG4uNBLQeCrHFZWJkri67VaGFCssaxtGuSFjxnTv1S2cDJgq",
  "key36": "48LXVX3kJ7A97WCb6APEDFavJCMzjBSUpJogXCbGDg4pmLJ3nvXY7jsS4zviqNinHE4LHfJfEdJjmkXcQz91j5mx",
  "key37": "3BxyZsNyt8g4ZDBF8Y8btms2uzrKnjdnFj51gSyr5RnEoLr11LcE3RSeBU4x9JJZ429zSXafpE6619mT9JEN9gtn"
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
