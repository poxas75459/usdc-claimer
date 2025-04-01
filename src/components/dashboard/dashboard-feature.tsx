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
    "42QqbwWTh83iEtZujK18JxGTbWErcLecgb5hfBVbz4Hwun5zTaTAJvzKjJo4QtFB6sZcva9T7QJ7BAXMmRKrGFuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54vuiG6rHycMeMyLEDktrB8ScA854PUZruptE2tdZ4qT58i1iAcNyMcDyiBkf19j2DYoK2Ap734wttQwJKW1i26J",
  "key1": "yrTqcS2ZoSismwcFfg6fW9iNJcgYLDtn6Pwgz9qQTBtqDoLA12ftqYZ8M3M33cKKkyu8QpAuh38bGR8LFhZWAXQ",
  "key2": "5V8Wq8Y6QzENu7unv8BzfuuHSC9u9uzPKaZ1XGgQU4VYsCoE6YkAmF8wY6b1yKy1SjxE9TfehsXLWDgTLj9fPbtr",
  "key3": "2hBYTiz9JiJR5CjAkfm5TCeDYGVGyzaoPn2mxLUc4JnijKXyNofP7yxY4AjM6ZHWurG6e2gg2XfMktGhD8DuwwSD",
  "key4": "4a7ma8UH5AYsdJYGFC93qG6KXPcFSgMKvcGknxPaSBV3HBNc9PsBY3HkgqbuG3zpssPF8kPYg7Nb8W72MDe9oT39",
  "key5": "jj66VFSSybzMWYTkq9A3CCcxoiJTdh5mykSUjkqnSfvpio2U1opzNCF5bE53bcQteXrjxRWiQ6PUAkuLWeDvBu6",
  "key6": "3eFw2a9JsXFpAgWSNn5SJxfRMkj44Ef13XfG18PPVXQH2YqY7XFq4b1A739zYzxtjTwNHVSZ3rcPASyuiHnJDVCi",
  "key7": "4qq9ipJN5Be76zLUbtLRCCfANsSwC2EJPF2WUU31kMqWcU5uJeRXykRyNHoqc7kVpPDJ6yLM4hC4U9ZdDxjr8kMv",
  "key8": "ji4C1pk9TmjMhUi5VUWorb7dArX6QG2NRsFHDtJbYyx51oZQvVnjPZXLsTA3Nnu9vxf7TT1fGaEDK7b6Wy99WJt",
  "key9": "66dDhTWxAcYiJHxjWF1vtjf8uWU3JZKqLhxZYm4ge5orgkxXA45vzCXxULD1LivekUYsF3njJ6YjbgEy3xVRVeDT",
  "key10": "22uCLm4pdvBNtWS5wNzYUnJDwAFXyEdUgjmqtVcgqNKU27mU8UuQswynN3wMrcDkgmqx33ndrYejTWis4XkNiek2",
  "key11": "5CjKetRNk7TxnoY5JawabuoLvb58PHb6JgMJo81Erhk69cExtMbhL28YKHz9x9CFQqe6Jkiw1Px4G9cG9a7sijYW",
  "key12": "oYyHKSZW9T4xqn16jV4BsFQxpQ3oFa7igmF6cNQsuayKGmTzdXEtsJuQ7pgf4sPVWWXavKDzqvtpeHGvTDNUWss",
  "key13": "ApU7FpyMEjRpZVdtiFLbeJmzuzPntaa5vQtmQvSsV9Y4WrDhnVfUCNumLY2QQBAWiXf6HNbAvvbFUWE3w8HhRwU",
  "key14": "5mMqxMQKDdeDpk9xkupZdiBWxC7tLZeAKMZz1BPRDjRp4jHFhVpH1o8FDNy9FihFteWqzH7ZfFpuSCgCvGjsLtKX",
  "key15": "2UWjX7eBabSUc8Spo55Aino915Z9xkjkJsTv2Y2P1miLdUWN3GJTzFK1rxh4yQZZtNDhdaSrhapYLp7iyidKGoF7",
  "key16": "4aeG9GnWS7iQi19FdQaeyWcbtpYno7DWr4Qgj7b7YhysERR5VwfrVYMAw71hrTNeWECxZK3Xkn5k74bnkgi8KEeD",
  "key17": "2zzYwusqLTpMTVUNbqdvzYpNfvo27YDTJ3zswbQYyXA9rrsx6rcn1DGBSRwsLgNR4EH7r98hcDwnnaU7tefjLznP",
  "key18": "tNGXcEFUEiEvWHLxm96Ufwx3owFUFcXigsMz6DEPrfA4UyUgHb6vahnC6HKsw1Q8KcLdgYRGYuATHQVxCGK2XqG",
  "key19": "2nEbnVVTrHpKNbkTES1nQXMfP5wkBCf4B1h1kfuoFjekGf655rCqzVWyGf9r89fuD68pKnXjocbthzAaMkiQr5mX",
  "key20": "3kzyUvHHuzBQUBfxSLL5W7ziBnVMo5jcSTjXPmEuZM83o658EsQfgaJgUjmA551jKLj1JtYGzqrSuTccnyd8fHYq",
  "key21": "36Srcjt1m6BxmNy3sgsR1yrKhVzCjnxZ1tfm1tXE3XR69d7p3oFRfeYw2F4euPHGtZFaWjG5dk2RyezRWFHs5Zds",
  "key22": "57KNvc6HbctiafgjYLZLcAUDDEKcaBrCsx5tDeDY26XPux9DT5YHK8fQFeV54TKCA4sNzxQWZB6H8wzgDYe5j33p",
  "key23": "27mQbLV5FaU3EjSp9Yve7gqesQmAatZvptSr9G3cxzZf25BAVqpA2eVQDVCF66BHcon3FZ5crx9y2LawSv4N2n1K",
  "key24": "ZefRuENXpzJXxDo25jrWn7fEsp7gvCfV7GRGf3giV7eDabN2s1du41ftbo1b7vj75Wh5ZPvtgRNNkCBd7dNH8Vr",
  "key25": "5gaaGJwfnKFSyunW3nz8kBiDDvpRbmpETsFUrqTGxnxw8FzmVQvswJCxRinPUiBGDCLBWLkXz8794UsLJ9oq9noV",
  "key26": "5pKmL63sL17Vzgaz5ogZsqyCQuhMhYRP6fshHi4eHTU6vCvboxB4T7bWTPYpMyhksZhoUtPJUbZgN6g4LNcsLoJ7",
  "key27": "5bgByQxLoRK1JVaMVez3kmYdikqmHQpDhoqtGYtavxyeukGJxbS9oFcDATTKREDa9sD78FUHooexcxh8xZD8p6zp",
  "key28": "hvAXLuyaK6g2wTAUyfEWQrNK6vCSrFfiJ75yHYvvY9Ka3bGe7a3YdYinqA3T51J7xABhHLY8EoSmaKUN1EqCQpX",
  "key29": "47skkun42a5Vi2UhN3uVWYAJ5L2C2RhcMk4qxihjoMYyyH2epwRGWZ8qsQoXaPdF3xL8MxT7vK11Ka8fJrhYbuLd",
  "key30": "5fA4RckddHHmQ6T27D57MgUy9wCBLN2aGTBFG8dxowrSFxQf3Xjr6TGBPtGN6fMubdvELHzuvexpDP3RZHUkhxkH",
  "key31": "4LDSKF7fMNMSK9yK96z5tuVsQA4vp7FTeyskVoiAPrbC5MWyDKz93pqhADARFjL4o6jVzpf9Y63UtmHehLc5KaB4",
  "key32": "2X7Y9AGFm7715g8fPKx2qxD1r2PYfMrWrWxd5RcvVCQLjuUMqDdoYwuBY1YvujRJHCkDXKhz1Xutv9arcYAyRiq2",
  "key33": "2wGLJThv5deX4LPEut2bgbPTnTW5U3QRxfw8nhUK11YSsPNECyzE7o7isvtWitzS5KcxrkWhThJqnHRmV7gfa8tw",
  "key34": "4z1kkjFuWW7fkfXzzWYx5AZuu8ejfMtgJz91oxP6rCeceaYAfWuzoXstYEtPazXD2BxgXQZqix7kavEDFiDNUZwA",
  "key35": "TGxkMnNSy9EC8RSnDGdCcNz4s6x1rts7W1Ddqj7ErbPvPCDtqUXkfbSVUk8uiPdK3TiLdg9fv7azQc4nZ3dZqPT",
  "key36": "48QHNXuCpCJyaxurt8STnRHQ9ZkjSw6z42oqmnCtugXLxRcE7xz5LJPgiPeQS2sQsRTESemRHCeoj6xDj4agAanZ",
  "key37": "4xJjHVPmiVqJVF5kk589taRN5tKxLFKLtMeU93vKVNYWX2oLCCz4c1tcjES3ztRmbsRg6qHripuha1JRJkqwHD8k",
  "key38": "vgTzJ8THWCP73WSerEu3tdrWAML5ygNg6JvmheNEeT1PCZUmkXkhV4s2dStvAHLjkx16a3oPn6He9KYE2vEnE3G"
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
