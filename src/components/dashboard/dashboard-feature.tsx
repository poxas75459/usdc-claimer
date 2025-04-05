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
    "5NzDhwhSKjw9BnczZPeE9NxJHSva1Cpa3rJjVmvjys18V9eb985gKA2u9mrPQGvx3HMdD8gBJm5Zw1D2U4AMjoZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jy8vY8r29cQWtwNp4EwxhPQcgDpS4g1wujDZ35iBfahHLN1rPq5ZUvuwgfhfY7vNtmDcYmZXD2sKhXXhyr7amSU",
  "key1": "5Xr3qZZhY1wZbxqfz4KexKGwnapangpVpcaWwAmBG177h7AAXzBxw5HcXdtF8Uy4PtzjHh8rNZLZbnXvBuPH3J79",
  "key2": "67kHfkQ4p3xrQJU8DDdc78Wy2DkexcpDCGSzpCwv2s556WHCK4dEzo4BG3aRDdrUVFHKtcawT2KcJNSMkz7axq4d",
  "key3": "4LWhw2yoVF9BCTnMR2DvNCBec2sfZANfMaKgMfJYwVvU23EBQP5UZyUqdY83V1Pp68vrJE1iGgBxUUESqp8p1ZWr",
  "key4": "2PQPpW4Qpbb4UjpijLGW8qUeJ5SqDMB9sDpeGXmJTUVwTbhdkPBx4Mp2EbimkNXYKQQoF6vaNJDRvsvqtNkRAHp4",
  "key5": "2XoWWpon1xMeQ79HPTyp346Y9hZpg4mRK5kcvELvrZqidxw5oRni9JYixrjCf7jSa7fmQ5seomBcno8xbxaBUkyV",
  "key6": "4b2hbiuzpv7P9n3kvrKNvvUNafzGQ4CVvsNjut8e1crgtBFs1bE6s5GzXKEQpmAE2GsxTSBjfQRiJHNoqjujJYem",
  "key7": "4kcMy9dJr1ncrXJp8LdAfGMDm26tkABbigZojkMVzp1wAr7EvzT5NKZGpbPmxxvP9f4Awxvj2HRfnEVvHDnMbUDb",
  "key8": "5q6GS5RLM2sVUhG55X4Nsft9rJ2z9yRPR4EtCdhA8jZ1owcShnfCy4oCLkP7XUxaUTbuXF3MrVXvo8PiBQDvmf9h",
  "key9": "51rfhMcFUz9L5RrQnkQsQSeFoixXTnZiR4EkWYFkDn8nSx6ZVYDnoqtYZ84q7FLnbBqKQHdaSaAS7jLAa3iJDK3r",
  "key10": "5MCMCnh18Sd6VmUDoiyAhXfAYQb94BFkyhd3pv489UaYXihn19QAt8Mw94JhiKip8x7FpvBPTwZFArrDXKey9Hoh",
  "key11": "63S2Q64CWgXPFhcDuuvbPdPaMJuUxHvfuG3mdzWFKuiU3wGzRx8BeUtoRNXDTjxpVFPBHp6Q7wWxpFk7k9dfqRuT",
  "key12": "5YCGxnPHQkSxEmfc7X7Y8zHhVhWLoepYeDimbX4RhBEzVvqSFPL8GX1AfyrzHFACJ4a4k3VGh6MjVj85pTJ7MdBx",
  "key13": "4zyDm6TUKnvdas2rbrgsJkNpVPP2jjdEKWmEjrh5b7qJfZmKqPDVKiVoQjjMxiTDafF5Gy5XpnVGFF47faCUvnGb",
  "key14": "gcWuQ5kXom8su2RULf8G2afHKzce8NoooqeXz9uyheewRDtqXKuPDYrf3SCadQdNdvjiKWByGgLrjCZfqyjbQBP",
  "key15": "2KS5BKMkWVM1BYY68hG2QUWkvfoJjC8nKzmMj4Sopo4yFGbjSPbP9tznkRxBDvXUmmhdZswKWESnT4B2SdbwcZor",
  "key16": "2JC5Q5KVYbRYvFXNaiQJLvDF5P6eoiYT2kW71fASu1Bmqay76XtQKUwXv7GwguY3qrBqEYhgXjQ5xmfoc4YQXMtx",
  "key17": "2U8DGYBZafaD3iDRh7tNkQ8kza2rmKZJE5dTfCRP6jHDxU4tg9HUddPE9Hdwk7dXVM8jiVQsRTpAKc5Dy7MGX1gx",
  "key18": "JmzgdDCNsoBXWJa743puEnnXqwSufzLk7KyF24tEdTTMjZ11AqYY4aJYv98vC4Pf5zESciRurBLxnvZWCLYMorW",
  "key19": "5w96Yo7eF3ymohdnPwuV7pdv5rZ5eDHKe7ZriVrNjBf1wiyotqKkRFs6YJnrganFUw3ADUx2S655fd5j52g33Lkc",
  "key20": "2bw9WXpfY4KFS945tUiG7Zo7sc2iKjThgZMCS7siEC5b8a4DtD97ywfy2e2Po8z9g8oWLpaut296RPWWeM2BQqjd",
  "key21": "5Ts23AhQjb7A4ZsPQBHLPRuqxndAc1xMvPUu1B5wD6xEsB69rzjCPQJGBgXQuz13h6CZaiXuuGDRUjVTTeoqRZvZ",
  "key22": "xnEpzRC7zqTC3BjeY8eHgtm2sAK1WRdaE4H7P2kzc2AjRWMGucCPz47CuKjGEJphkvVdUv37i8jT9943M5qELPe",
  "key23": "3sr6DPaKUHa7zqmTiGtf2ZcbcPaxxacHxM2eFudSz65rq3SLUUHAoEhirsXgp6Wn2YPnxk5qsuFFNKns3Mo9EKXh",
  "key24": "5W3D4KVDk5QqeueTX5wUPZAuEuA2hFVvRYQHbhU4cJHoszDeK8k1DoMVfecTWdSxeZHETNLz7N2r7eN3qsKdrDtL",
  "key25": "47azQaWHmhGGkFe19QZ7LcJAQ1fx3xjoxKqwyF85orvtubt4LV6tJzJ9jqVMornRNKQTeLmUNJg7wx8My6ywAWWL",
  "key26": "2muXEQSDD8atWvHMNchNGnME3RRgF1ew21ezxEGtrVNjXkdDKgqojMxfkhivqCvB5fhtMC7pmd6PjpVJtUmkGctW",
  "key27": "2DeEdPBQzC45XjtDs4roFnZydD4zVbk6Bg7FJep1YJv7Qf4MwDTPTWM2AQALhrsjTygV6AQGm12VgMyXZnwTNEHF",
  "key28": "5njqygKLgd8aE3Ryut6N1TLdmQt2gaE3BRrG9PSPJFMq4DBu23xubkJ8vtZf5K6MnzKAJFhMfmRiZG5qCY4eugBC",
  "key29": "2eZmvwWTfHi9X3SLmAkyP7qzKS8SL8595ggDm1fL4rnBqo3Bn2NRjg9R6W33NU85YideKbTaA7nchqjeAGwvFSnp"
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
