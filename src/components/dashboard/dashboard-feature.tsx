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
    "JsrD8hNxaXkryd7WNt7XVxMLUGc73Y18mduN5FzEAarQAhAkcJBQugfPL4Qe7zbxEbKvzS6jNsFqmwPTTCizHw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Psc8xZi8WVfmpjg1hpwgekJkDTgJZMoKHLzBnfBuxquQjE6mSjPHzcpBoD4UN5gGfQhA9mj5iXYsQbn1wBT536X",
  "key1": "2kTo93VjzgDDkXkR3BRbBwbX9nZNEwY716eaZhZSprQxLtL1mLfyNNT3p5WsRzteLZEWAXo6Uq5PP1iHKzDfFrAA",
  "key2": "3qk9gVLLUMGVUDbELhpT1RJykFGQNRCGaDAiuw2NghofigaMi9SK8aoCRjwoRY96LBxhHS6KjmcYgRFnCuNiFaYu",
  "key3": "AM7341iLEc9PufLXiLyohXRuYriqpAd7HpdWRXR5PxxXhiubgCwMsjeewxeM1iFPcfntVEDCiivVTrjCXBptTk1",
  "key4": "2QZzv2K7MaEtLLKChMsYW6nEDFtCaTmUA6dEs36SKZkmMS4QAREWAPgpdpS3KUBB7W4gHXV1FvBerarXSswYfw9c",
  "key5": "RgPQQgcWfMdgffdPXzjMNpETZdtdTiv5mLfWUNnpXpStZweSBV2PaXpndRegSrR533SLokmDQo2pJcVpL2fKsqm",
  "key6": "4o8vwgMAP5kLcvqrf3eYNUyMzjxyzekjNAfrX13xbA1S16VwQoy4zWHk7JhCGFo6NsYwkteF448aTFNyUv1qiesC",
  "key7": "2M1fK3LpGsaBehPJv1d3EuBhQrRpex7pxGkoA2rMXD6RPaiMKHQ4AHHZwAumF3G3JsgUM3RriQNkmvxmitzKjnUs",
  "key8": "36g34CJshWmNZbwxq6YHG3CT3MR5Fvkej8VCbB4xQrVtvWfri2JrY8ZdEYS2BB5KjP5ceiy3xPGJhvXJR689Lykk",
  "key9": "35vJrpmjPBvZx2KNP4r4DgvKnzaarpubUynEV2C2dDnTUaZhLdBUZXAeicD98EwXT8ihFqH5Hkd16qwkUpKYzsfy",
  "key10": "5Rvqy7bzW5QZUFGYPps7EByUbnTTh9zrtVB2YnR7DA8Np8PF3WnsZFi9rRw6kuAys4kggt5zHG2WaAZWWby5kex9",
  "key11": "2gvDTdAwfnhNB86nCh1CGfpw6A5wZcJzFcfQ34hGMMx2Dky13QzAFFXHVLTGfDpW2oUxoC5V77Vp2sN3Tyy3bVVP",
  "key12": "2AfXEFaDwQp5BtfELKCyr2Wwgv8wqH5RwS3P8D2RnvAtV99JSGJARdMeH2bX3i6k2ypZxqduv5PD4eJdw48kMUnH",
  "key13": "5J4htcQ1vRTQ61uYEW9MNwQ5yN4MHNShPY4NdkYePAEQB8bZz3Lmh9kqC3qzeSrN3f8bLSHKZueijcUfoPmazoUg",
  "key14": "2kCrAAfxBb3HCdDRmCvmv7EWGwquwEbx31vteE1v3BSauPCesnQgFqHruFXW6JFYfX2zTmjyxXLApgEiRa4bFr9K",
  "key15": "4a2TkxxNoDAwcRb2vRCXkR5sHsaQrrEz3HU8pSvguDKfnWRE79KZKq3DZMuxsCwwcUcX7oE9PdoYyBBdsZDbemjb",
  "key16": "2KdxCFD3uxRzohWkW1xoxZaxTTaK48RbEDSreC2pncjvDej8oegv6W1R217ov3p3TUnSdjTa5poCTEhrgtx6uUAX",
  "key17": "2vmHQtN6KyuvUzRAkQb3nPnYRPr5DxwWbabsUPwL4VTYddk5rpYXHi6eJWb3ABzXzb1iU7Fvoat6KkGzAg7SiMZi",
  "key18": "47AKQFzjjc5Bpz3PZNAJMk4k9xN6De6uA2hYyKEjtLQxvmRvEkNwVAP9SmjhLZY6BL5vBwjJ8pG3PAuxhgbQff26",
  "key19": "3nA5cfe89dUmj3JuxBRSt6hSZZcbPWxWTKvJMGVjS9XbNta2t5jagD39fEvKFEEDw8svEaNpUFUrBfRUgnZYK3ge",
  "key20": "56SmBY6sU4LxFeRZCr1AUKPX6XwWHU5ymx9VaHYddVGQGR85Q8N5c7ahDXjP2mtFReuuLjzapKT6sdtdFc6V5aWX",
  "key21": "5zo8fi5QhK9nhDbcFRDq6Ap9ZadYmgydgRYA8S5BoWYLixKS5ebTVGPWpKpgvnCDL41wc1dYdSazuBdkV8kGmYUp",
  "key22": "5G59qAqmyb9bz5Fn1oVr8gtBHuvwiZfuVYvnqY42KRoykVAJPddNP6n5ZpKQZqWhN2hKRevRC6JhcmcDmG3gf3YE",
  "key23": "57FQhE6XHFEC4FxqtCT8hcMiqdgg2MvRkwhuQp6BJrpp9T5wXPWBNmyYdY1pLdpdfaGBk92vHTuAGsQBEoYKWEhm",
  "key24": "EeG4FvbNqhZf6ANkJkrZbqTkxYATXHxPm5PcpWMNVEZpPh6MpLzAZK2xTGUErNSX4vQnTd5qBNiLsFDG8QRgi4m",
  "key25": "2sKVijjxsj6hU3qMkjGgNQvGtcQZATvtxgSSWxFzB8oQ7Gbj4Q7y8SC11krZmQ7oN6s7JACtLpzLrQ81iN8da9kp",
  "key26": "3GaTBey5xpnTQ79nHsBC7G5kAtXhP7NzD5UbrzNQWVJnhJJ5Si2UZ2EWm9Doumr84Sb6bYxgmtfTpcdQcMY4aNFK",
  "key27": "5LAzMx9xdDkDBXgDNNTpdYP13DYCWEoXnwfhc6tEdqVAZevPbJQDqKEYQgNqWbk9294QTJLsA1r5SG6rCNEV7ox3",
  "key28": "5eFcUcdUnWLzPdby96YHco3XUVSp6E398jvLdchG12E7rhCXgyMJJq1vBHgV7HsBMYkx3LBbvfQFNFMyZNpWxM68",
  "key29": "4c9eagBzmqWp1GgcRBcx8J62ZsBQnoSjt8rJJvTkNMTDb1QdGGy3Euw6CxXFAjT28jwknFepPTtBX7r11i1inp8f",
  "key30": "2EiH9hPx1TV2iJMPwQC2oppXxjFHU8JPnu4qHmWuVZ1u9yX7RBDHd89a8BkEN1e3zLoEUgFheBv5TFT3FFx26rrb",
  "key31": "41x8jZ62wSUrkUAJYntsNtUxvfN7wh1qTaq2wNeKCeJmift7excvQf4UwD3VV4Tsh87NUMK3hGBDENmb74Trn5sY",
  "key32": "3S7z4p4zkcyM8W2D2KDZp8Mcp9nX2P2Umpz9mCRBWpVchwFQ9iaXp8FNUcyvRTSsLP28xHHhD9C2Cwy1nhd1UPam",
  "key33": "rA975PLa66phNZ7k2iMGPZPkwM8w1Y38odghc343s8Vv91Wv1Jav3wTx1cgoYhPQar7yi5YeMD4BHgbCS6fQqfS",
  "key34": "5MbhJpEviK18gqj98cESZ78B3jPxz5iJyYSEB1LwJrxK14GHHia5swe4U5LciHUWE2wAreG8BBaZQAdDaai1s9Rj",
  "key35": "36X7TmtFewecYyK36gML3M3mtLQcryK5pswdL2harqASZWFfTAWdPriy3tfVMoTBoKuXphwiGiTMapM8v4qcdRQ8",
  "key36": "5yU9n3GuAkGPFpzrDc3DsdF53EAjN9MAEp5eiw5PFGHXWaenGEAgiJvz8zQgnoJwcX3zRiagqm3GQKaAxeRgvqcU",
  "key37": "2Vf4bgwg28fUo17TufTB5XPZCjN4Ts1XTZ17h6u1vQ78QHfpJykaLjvNq9UJ6fzLhEFNYwiH83Pxemq8dPrxqE2E",
  "key38": "2XFJtLib2daaVaFjfovMFQ2oSR2Zd68HGR7qgwnPWC5FEH1PmwjvEphkKMu2EYRPWW7314C9ww8WCRzSCC7sRRMZ",
  "key39": "5VjJVbWhqBoUtxseRcmRLtngFzn37UtohoLgQPJZtouXFy5ZE4qLbnda27Hyvj7nGsfRtJQkLC8AN7JAtnrTwUb2",
  "key40": "5BUFLZwKxY6JASTLQP4eLUm2SGGtY8136sZyX4TJjMCnMBpGdLUSadkKNRWP7R93FUWj3jGz7kz6LCPd6oTSLMnq",
  "key41": "44SwxQr6VdiKEuUNeXN9CUARqTvz3AHpjmatRmPH9d6vjPhjP83FuTBiz6jZD4XedTajQ9ZmGzApRUZ74AKiqYjf",
  "key42": "yjGYVvqLic5yZirF8bAzJE9i9ogMcCmJw9CX8r1qsebiH1FvKSRxMoTXVKqrJ5WufJtamrBChn9BKbj2XP8yTzN",
  "key43": "5CUxAymUUD8uvwFHJ8WhRH6D3313X82HZbCHLXV7dS2tzVpVH3Eopy7FL3GigwMyKz5k64NhCHa4J8quRpEbMQqa",
  "key44": "5fPBKnyQuwzctGikfLwrrB7Dne4nR6j7XDJKjXMWj4jEYxVer8YAeYhmmTir4wQP4fLZAootY6vgG4Jdmk94vxRc",
  "key45": "2HHiethzBMrcufueZvmCa6kYNoGBTZkFWDPXJBis2DyciPpk1ru5myhcRAfoacpmLcjGsCr2tdf29xeKeU4nmibE",
  "key46": "2BqJMZq97FfxjhQ2YSWmJmvaLqbf5cAqHkHXoNebizaqx5Z1xSF7WskeHjRjt4fBzb4qcQZDVQkBfwWTEs6znxjU",
  "key47": "2AAuGRWXc72H8jttgGNXhYtUAAPQzaM9YjLLSDs1JNLotq3h4jXoX6He3cfhmVBe7FunyxJqn11uG3cp7QNsRwyt",
  "key48": "517myVC3LLBaNv6SR33dHbptc4UQ1yqs7KXanG3y4E1ENpKtvo9KgUwXKJ6p3KVSk72CsD6CnFHHkZAgvD6Ybijs"
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
