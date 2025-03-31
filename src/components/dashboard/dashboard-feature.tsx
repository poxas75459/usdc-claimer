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
    "5vXNvpqNQuSic8Ngp2JnDus4tuoGjcTrcCzL3F5GmcjjaFQJWW6mY3KAwAZSoxFFWxMgFsz6igCkqwmcPBFTYunq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQo4Bvw1DuciRots5rU12JFTFeXLv3hfpgUKRy1heNwutcMDGKo1wbTrMUiEtUV67FDwns5ae4TkpwwSBDcHnhh",
  "key1": "4npYHTcuoxJHT5G4ufMyE1HbYoiDRMtv8Ec1n9MGt4RbPKqwN8Qa4zgJFt2Frep9XucfXCWNpEsALwVRNBL5gHGr",
  "key2": "3UzWZtY1Pp2yMbu2y1WE9cgopAGjaFEN411XkBGp7WDL9JdXUDWYPT6CqqJHU7S4EujQzRFchie1bV7xeXntNDzq",
  "key3": "24j4LqpkZ4LXDahSVpoqQ3KYLXag8Uuo3Rc6j3Xi935JRSaAfxjk27pE8AoXWEMSUFnTbPoLF7zv7kRgwzuAw1GD",
  "key4": "3hLA5mckRSxk5JU2jPd2qFr2LE2YEBwPzp43dksnTzVy2ZcPZxUrCDHeAHkQyVwe7mhfUuqeCfZytRnKCqn9g7xL",
  "key5": "rS1LCr8u2QBLTAfsgGHFqf8XcQZc1S7CY59vJ6vfRE3EQgMvrSPEM3feY35NRhRYhqZj5w7MtFjvUZ61ZNayrV9",
  "key6": "4n1RXC5yeC1P7YQ2uhnieZkVKrdwHs5gUB9WGxyiNF57MfKY45DmDJAtxbfpBQkpQmAeemA8HvN4NXg2MqdssKjd",
  "key7": "46PBfRjrVxiXeQxH2frzcjmBNLXQPLmQebSHTP1VrLhh9MGSPRwpocKGozAdoy6KEmir2mR7jrxKLW8C2YM9pBMq",
  "key8": "3NNcBDPyFKvJAB394xzYuAw5yWB8uLxfptsetRyeorSYakhZLMrjLXGCXthbF9gSvYdvDZc6tRQ5nUpJkqtL1E7A",
  "key9": "52pHsHr6bTi14WfNH5a5mcMEvkBibANdLyNVgmzGmVyq5HZgNAEPwkf694s4gYhQku5ZpyPCBUL74Y64dYyDFpk8",
  "key10": "PRTf9GFFwwaeWwc7bzHqYT7J9aRutQR8vmrJJkbwXn8mqYcuGpwND9p221icGwcyrJHSvPesJWkN8CYYBasifwV",
  "key11": "3jGceKwLXLHD66K8aPGeaYSrS4UVKjX1QBn5Mwr1mZpYyBKV5PiPKqnycSPCHYNai8HKphmyehNevtdTA17vDNHn",
  "key12": "21wdVzW3697dZmjgVSs8NLLvLwsJpuPt8fpNnjt8V1PMYdFf2HKHHX9haFfBWo57bDCFTg3pYVnoGpCAVdoZYicJ",
  "key13": "3Mmyh89TRhSNQMwRcDP9pUzaubs8GachCmWQyq22w739oUKnMcWUyDNkpWYUzDUi4HQ6qacJU3Yd4wSD44bT9Ep5",
  "key14": "jKS6gYrAVVfBDAe8UZKDhTeHW4oqB3kG3b2BzGRyXKtEzkP6UsRK6XK4YJxK9h45PybQXHtcGXommP3sFKyfXZ9",
  "key15": "4BKGAGC3uXVtmeYCWL9a5RPodcnkzM47AKaTxob31iPRoLEhG6FcFNUsdFPh3EphGL4Zn67mKo7wB18E5WMgihfM",
  "key16": "2pWHPsr9k7BQBJL7KSBkA93Dc9181zhx3RTSXGtSrxX3RTvscuEbTfauzW4gswm4WueQvPGPXbGFce9XWCaQZpbo",
  "key17": "3kC1qFFzQfrmTiBnS6JnwA6sDH2EfnCoazHS5tLsDM51Wcsu4CStoaXxLJhhRx49W6YWHXcUGckMN7wRSa71ZYBu",
  "key18": "4hJEqcqJtpbriJWigXqg6dxxAgg1xt2en91p9gbQhKfu1BjaMfLwjxAvWYhoaiCKg3R2VSdLTV8fuLXY9wUvNQYi",
  "key19": "5gLoJVvD3DVuzxD5Sm6wLa1A2EEpGbNVxkTeYjWYXQ4bLjxoXsaifmi5GQNysixFn3jfp5E6D1mzVV45khpKdeT2",
  "key20": "3fcWJd2dvWign1HizFeF7B4hKugRVHcrB3jqpwpPcQGtztxepySjff6FeWcXpzar4n44bifwpmq5PswJydV2YcMf",
  "key21": "cmfFHwh44EkXScqzGYoJbec9AigyghchyM5QL45GaA3kxozuZJXvDnjAHVryTd8HscvJeGVU6ZiTEduw861kzbm",
  "key22": "3c6pttETs66NXHkSdLmZzeuNBow2Ba9RVp9tJUQ5nWooGqp4pSkFVvZVwNfUQuJmwDEWr8CD5oykS2BB5jm5UPjV",
  "key23": "3RAoNw26SNqJ2MAPtuJRMmkdkx7mozqn9XRTmcGJCbBtJjvx5Knt9TZR2jUvmqF1WdpXMfVGsFZUMSC4MybY8Got",
  "key24": "5APYn6ZoW3vSXqhSkbGXnMyptt43Y6As4HA1kYJwGf6baN75XwuZa5nkptcVYWbXUnvNwLxaRh5jtWtjfTW7huDP",
  "key25": "2nCptXjKJgfNZ5i2DzcSV2WxQRHvVD7ii5MHfiX4tjVS8U4PWUf5Uh5jhNjgCZ43ybinZGMiyLhh8ZdrcKYBMyNT",
  "key26": "3mbR7w6bWwLYyCrEb37hc2qgmF8yUGtiWK7LzPAc3TX66AtNefkXMRi63jhSQ2VFYPWQGzfF1Ej8gXCH3pW6Jbqi",
  "key27": "28Tq3HVDdiRGudrSn8dCXLWkGexeWNuDfkEevhPw79jYrAU5CUC1QcgY6X1wMGDEnz5diz6DkdoCkMdEECyDKYus",
  "key28": "442F5KKjDupiuAAd6123dDukevRE9T8VGMok2Vz7rrHkaHy9nWYtNVCjFATkW2UAGhPDR7zfeMtjYGeapCmL5VuC",
  "key29": "2sQJhq1hotz2tKKKRYF3qX37MSwQqZob8GdJcfA6q7B5anGo2dr2LjsAxcUTPQPi29bF68KbT5fgdSduZC8KBKJV",
  "key30": "423HvkmUWizRNaUR6xcKomnELvPqFpX82mJL5XFsVddYvFhbz29izZZuv7qN53YFaCEotr4CucyEKRnRsdHuaJbx",
  "key31": "2MDsQygZcjLow9CdCksyyoRpPJxcDiUuNrKxmxF7hjamVevzWu6KCA5wEP85cyfCNxyWmZLY36rwm4bfDXXVXiLw",
  "key32": "4N6mqF64Uqy1XpK7ioAbwGNTJyKTtZGgJJzgKhaF67FdnyABZgm5TR9f24Vcdriw5bPMgjXyo1Z9aJbyVRgy9VPx",
  "key33": "66mBWj26GxVPezH6bHo21Kmd7xGA8Dq7idQVUYEj1emGSQmbW4gxovW7dPys3gARYChMkBPK4zXTi56eRa7UT6eE",
  "key34": "3sg4M7ue9DVtCjHXTEVMwHQWZHyn9BCWbb3zmYR3EqPy3fr7RbqtekZ5AEr2meRHzx7WFfNaivR4zYxE4Cb69f9y",
  "key35": "5AXsmgbmePYwhse5mzCtQ7TtYJcRWiK9TEBN3UDENyivyfPNEAqLWwQm4uRjnobTJWYLgDEDWawAzLr5WyD7dwCn",
  "key36": "3zvHD8q8Pzxn3YGcKmnELh5fLjykobJB1cGgKg1vNXNgUtXzKgCy62ChhCD67uXFZPw8prjD1WSY3RaTgUUkXRPs",
  "key37": "qGmhLA548njG8YfkdPJR7Lj7exVzS5v8PBR9TnBKUKPk6udTAcp6ZMTKR3Kzdy7qoosKFaNuVzWWnPhzZykchzs",
  "key38": "35wc1fXon35XeDvKvnyNrfNSZfVWgS2m5MzmSL9U9NG4sKrMkw4oTcHpN8Cq2ErGqjuELkTzst5HkAFaFB3uFxBx",
  "key39": "4TgGRSW9vJA643F39Z2fVPFSEYWXKoW3BDWWeQViS9nz1XDApPzjs4wSsQC83vGpDfimdiWSH8WR7mgY7ZrEPxeU",
  "key40": "jtXie2KAawhvW4dW22MpQ2NfkZM8XtcSoG5yz5eAuzJmdtuxCcoJ619Smn7ZPDWHmsDt7nZ8DXW7C8QFCMdPj7u",
  "key41": "UDcw5roPxLjY7echQbuai9Vh1tTnQwqAB5GjDT4txo2z2pX8mfdzYeU7rToRtGfR4agqduvfixLB14VwzyRZMxx",
  "key42": "5YVFTs6WJzVQ2moVRxuYToohyx7zV4uxSRvCBu9K28Qp8tBn2P5YH73enKbTUiZxCk8waoG7VsL72Y7x9KjeLP8c"
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
