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
    "2qZtQRycHCgvWRnLd9rXzUJWSoHVEHh9dTorKH2bgevjy4fvkLoxYYcyhQK2TtiVj8nyvndkNnyHpSJtjVU1sUMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6EJmc3cFZAxpkarKnDPvaye3cpENLjPDMNR71Pv222xfhaptzRRGKDuvpy1qEApddLYzRyBTrgU5c3Z25KmeUaj",
  "key1": "4xBLo4cVwbjZgbbied1H1bR7rEY5beZ3QxqXX8JUrg2wNH5e4ZkyDLhX5zNLgGpSEBdFiYT7ZsfSBT7mza1W9DUw",
  "key2": "VJ7SLKLK4tsn9CRoQxePCA9dSxiho6p2DGcmecRZnQh78kAYCSzb5XJdgXTi1b7pQQfdXJ63uPYa7RpWXjiukVF",
  "key3": "3jJ4BtgBSfwvP2Fjs8tSzEAMCUfc3DihZNpEswP6hoZEsu5kDaErYSQvqv1Y5g64Yttwtz8RX3kREKX51cE2JRMm",
  "key4": "4Mpv1cQAen2TxMQTiqfok5UXPzHoEDeuncdk3jENZjtGpjR7GYg7iMS7f87oNEDzxPp1KbE3Hwz1E8LsJwLdxxDE",
  "key5": "4xMsk2kxkaAof1LnCPduu2pe8LxWn7BEUn21i8ENwEDLkLiDwE8oF2pRV6VU6KdFMeJ3cWtD8rXSyUga45Ghw7NH",
  "key6": "3zpZzAUj4Aaj3fFdsWYXYxUpcUASZ2qJjT6Tc38975daQ3XFgX9HzU9oSexLyozzmMPgjwmmwsvfoZP9cG2xUTrq",
  "key7": "5NiUqzdcvaYd6MrAqsKKEJG7Zp3gxuSELFnQmfY3wmnjHPFKAmeK3Mc5ezUK1gxxHXQBa4xhHLUFMbTWxa8DjHv3",
  "key8": "3bAWTv3UP8mMfKaRTjbM3o3Hve5toY3odEMHdmKf62Tx1rUcLKVaUY7HqAANHMMisMFcpVbFyQCQg1r6RdgEX2ro",
  "key9": "2n4ihAcT9fPGBXvB5EhChCCpS5pxRriSJfUTvvjd6aYLxezM15CaDBHPx3jQdzxc88woDjo5FvinXELJ7VTug8ja",
  "key10": "41PknixoJXdy49UDM8XQh3sc7kyDctBTJp77ynS1VqJqUNYLPiq57y8zWcJGrwATxrtuhAVGB7i2DQBjgH9vMpZM",
  "key11": "4ykx4UbGk25yFh6HMfGGWj3KtZ1ZMPTPUwPYtDRVBo1thF21ZiFEWFCdmZitnbEX1w6BEDwm4JHcmXpV9GDDxDad",
  "key12": "3ytFgNVLcqVTyAp2ZAiumscEzA3ZfQv1P2PJ28N6cBEnFFtkhcbMX1tCbAvuponJTNN4vS6nuofQWUwUsbL9ThkB",
  "key13": "4NVwMcipRxCHTUJL6YXmx1qJsJm1xJgwrguqidYE9bAUpYmSq6xWB6CM4jjmQWy4jsvjizNzU5tddSdXw218j1nk",
  "key14": "25WTxc6pLQJK771TqB4XFwGQLcvrELovn8AyAmWmGrmCWzgLxvFPk54Lxip24255oZqG1e3PMwRZtKNmYLqp7eTy",
  "key15": "3CDPYXVjPDNkDT71gG3AF24vhHBSVqzkv2MfFLXuhU9oCZKYpVbeFm4Tn2N2LKumCj2YMWe49PfCFr8oRaiJciqj",
  "key16": "2aY3Z7s83UbSWfqMrJnup9gKGZf57gsBEVh3yWMjhv9TNe6AktXdmVjRfLZ4LkYZfYzZ2URXCKRRLSQGhxHcyEdK",
  "key17": "5t9DXQsWGwjtaRECRqggEqPBR7ndw4WHbvd1KyMKLAPU6bFAY1oMoVpW32F6rRKCvqa6cWJnGfeWxbHyZegy5uad",
  "key18": "4GFZso2EnjbRoUU7RLzGzivDEGioUaVG8qAbmBssuMgw2NbHpjXzuHngYoocJpNa1gjAda74SJ3YAXkthzHxYAEY",
  "key19": "5xzPjYP8ke1Nww9nRVKhjSc5b2aaNGq21TPZS9KdzK2GmwvatodxRYNtVv9D2FJb42pYxjjUmLwQyWM6ZxE6Ujmz",
  "key20": "3Sev6ezQyrUVxZEgJMkv4iHebXj7NVB2aW7vRPHXczpp66FxXAid8bq8GTQWLbpX2hQNohUueQpr4Zr5gxRxF8D2",
  "key21": "64KhpznSbGsaLtEozfmrXrqeA4tKHkpai5hzw9V1uTqfRbhMCCnA7UGxsZboV1UDSkW6rAfSHfW8B1VpvSxw25fd",
  "key22": "2tjYwULuvyrYhyxYAiYTMNpb6S51oq1K2k9ibycUHM33qJzCG3d8RumJaafgNgCSi5GKqZq13LPy9fyeFRHYWnC",
  "key23": "4RDpgfpCgeDGeZQGbcsS4mrCmMdGy92eD9YsZtvWkzk4tMz4BRd5xcP8eT7w6mEmEC9YqpnykHGcWBYHHPT2Esq8",
  "key24": "3JPxgS2zwkhTuePme97rsFovEznwsXiCqgoHEegQffe2tAJCcvZKu5PePdj6y9ChYWUMjBjh5XKiXeYnmwpLAqBi",
  "key25": "37RrMgbjRpDPBNi7PmBaxaiECV9Ecy8hayquzJjRscmTtAW3rmWW1hNyaZfQLZgxkM3Mwd3utiY29i8Dxj39No66",
  "key26": "4q9iUg8Jc964tUdBH8t9YuL3y1wnmcJFprSqbqJ2pGhbTiRYnRCTqGAj71Ux9ZKt6frtu7vWA6Y5RHbsatTRV7at",
  "key27": "5huquBWodJQm5wCMTxSUhHKqqEugddNQwJ6dhfFZnm8WA9Q9h5PubCHroxWRPY6j187E56noy5H5NhUhpUBAdtf1",
  "key28": "516PhkYphzQD9SXaTFUsj2i8NtsxYqC19HqaLkbRCKf7DeACEK1UKGGXbiFrdcwjTRXm5AVU7wmnC7kNqrA1vduS",
  "key29": "255jAk4ragdzMrKzVqUZkWcDBkQ259VzSB5JZCNghuyzM4tqZDjARzTTK4Yc6GSJTqrsLSD8BTbbwA9vcBwLMAfA",
  "key30": "64cH8DoHCJvxzWBX81wULMHNyLRFjcEVywLwrDBDcWdD3zzpX8rAv8LHjb94riiM2EEeFb85A3oLEB4iAXimCEmY",
  "key31": "2ThzSA611dfKHvfGi4QpeMfDWr7wtVvWrmZM7cRwAhTaEWwfjZZoGjgXhgGV91VUin257rc6uVBxqjVuHdBJ7eRx",
  "key32": "4X5ipHQeu5QLNFKL4rx5mgUtUdjsXaFSaKQtYCfPeiWjMR7atkbVaKVqkZqVAMpEYPUHEC6nCfWPbuKAWyiYLjNr",
  "key33": "2FE5MtMnTrwNf4UDyJ7YJjaYjurmzMWxmnW47xXWV8JAHyNMWrfzwacE9wAXPyxDtNvCgoLirZMiX7hCMaX847Ug",
  "key34": "38RPHvRCmfyUu4Hb9BTj6WC3dGxN3Za5gE92mSRA85kCwiZF4XtgabUXAaHHixfkrfogsqfBMhNDVW2dHhyA6gvL",
  "key35": "5TSRdjZsS7hYNQxeJiUrm76SmPcKEawBKDG2sY39WKV7Fk15awgbKEBAt1HCofvw4kXWLPK9eFtDTnrTyQJAtpbF"
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
