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
    "2t6Xn8LsN4a4ZAKDmW3vCjne9THFmi6WBZRva4DVFxBKCktSpY3ttZAGWL8mMLNqYaxFGsxJ5rH7Wcfx9VhFQZDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T3ig5V5tSGnj941iJ4VYpAnPm43tKN5vmE6Nb1Gm2kvbHPPsimquDPzbt3qHGWxVUqezHsA4ogVtKe82juopEmt",
  "key1": "HXJi8jEQffEZ8nWFLCoNqHAo9pQSE7jW2DANtS6WwiB4J8fQeXEWNuraU4vwyC9ugkZqprQXHN5V8TrYHJNjjvc",
  "key2": "JriJafZpxXhUEACmFxzmsxWKpQPNPcnzXqPpPAsnNymtTVTWvk9kouHjbahLn5kJ4nz6VfDFfbYoSH4cr3tMcQx",
  "key3": "289YSJ3QeRBQJA2i3BDMZrrF3mvET81X96gheNm9ECn75rQTFsfeVAwPUp8kqrf8LD3GKAheXK7fifdCHc3ibKS3",
  "key4": "2wP2mrg9TWHzNmhV8Q4zKXdTe8BYsPYzFdYJ1aVfb3DiiGk3rRDcykSxSVcE2vQCAujgHm2dFV4wD4BhEHLHMbHU",
  "key5": "4eKNkkE5koz1UaLaAdcMYruUx1MgmgFekdRn16DV2hmyL7zZyA6jsKCJRifcHyNndw1GnF1SFfuf5nbmtGM5gYdU",
  "key6": "4U1LwXW1XeCq5vwwajLwJvZqVaRj7HzJgXtbq2kAfZQKB3hu9cXLNdRGu1MkijuLwVGEcQehmEkhaadfbP7EoRHP",
  "key7": "2tSoFVvinodiRnwgS54G4QpgxSGGdPc8bN8uao6Hma7uhcRHnCA1Bxn8Wr6UDcycrj6wP4Lwv4EnFvNrEF4trbgq",
  "key8": "3bdD8PrFZrDfwveR9iizMY3fYGEgSvyf5FNcnoZMnUuk4YS62fqAsXYcMz2ckKfUB23eqf35JBCsL6XBMtBAyJMp",
  "key9": "4g5ZsimnrvyvQDBpUGVwsTnFnnMo18LehkmRFTj7KFPmrAk5ZL7aEvr5z9vQD1hEgiyTWopMiGFiCxgEqNJCfmK3",
  "key10": "MuavzsKtuJthY7sfVwFyouTjcZAQVp8DtL424NUuhZA2nZ2mGMa8xcegZNTDw7AgptZADZSVWqTtHFWvHnQWaf5",
  "key11": "5Bz19mefq2mWPbYU229XNyK1VSGXxDbrsh7MX9GmUdSSchTFU37rpy9rnpdXnrw7yvsUGMdSHEH9rTaZYZmBoC36",
  "key12": "524xR19bdozHmf9b6hxGX8JdWDqseo25YDu1awJwXZS9xLhq3F5bQFtur25pfLqzFChbm1fL3MC6SyMiwM1cEJoR",
  "key13": "56Y1Kv4G9b1jmJ7RjWq7g5BXLDqEMRPbeYRuXFgQpo3CAngrnxPeQtEv6DTzTNvrLbJZEYXDrXr7ShKDyAUzwYRb",
  "key14": "4vmbtP44gLZZ4XRMV8YLDrPiBSJNiBLnHgiNXsWbXTby3CgTSu4DZQYyL7SizoFLep9PhtijnsKbW6nN1fpUNaHo",
  "key15": "5AQpso3fmQWQbEzbhKMDTAZzZiuawr6kHY3J4ci5TgmSttWLJ3iPk6SFi9HjThFZg78dzBt7ujwksiU3TdH1Mto8",
  "key16": "49M5NpGJ9Je4nva8y3RHN55bCmWtkQbTGV3GsnAkWDGEsPjUws15wjUYaBTjR9ruYKPv4ZtifmjhGuZVfC1FSHN8",
  "key17": "4uM8casRx9dTA9d69g1E3HyBVymvURJb5Sb93k4WuAwohzH7h8jvRJq88g6NYT6qky7F4JpgCxM4898dEhh19qyb",
  "key18": "2H4fKAmuvocCWwoX88xkixrYz5XJGvSDVnpqzDLsoxk1bgMcktkDgXF2MeKF5vLCVCP3dTayKuQkFT73nuxSmMTw",
  "key19": "q9yponDf7qsvjvn6G7DHK8bMwxFXbReuCp8z2q91jZxyXmindCnHGXMwu9XZgnGi57cTJM9n84MbZQchrEMMsvy",
  "key20": "57tL7FiQZaSnxg1avaorE3nfSgqJVwgTweEsatwritLAzxPK13K5ewktAgEWRrDpg3YKBgKkpUseGB9CWxzS4kAL",
  "key21": "S5TZJcXZ5wR5WAbaVSXn1ax3oaTqJ19sYSgsek9E332cyuJ2K17Wv4h5fW6AHxywMfhfRqDCMcvVepixgaAjWb8",
  "key22": "2cZEH8mG9Curii6oLXYdTCYUJcDQ9SmCw7fhjQjTudy5aqpqtSna2V9m9xyYzKLUmJ8yeoVRpUrF3zgPqf5eUuQm",
  "key23": "4Fu9eEg5ii24cocPuAF3fG2fw3HJRiWXb12wHeDVz8ZfwyV4sggYmVvqJs4sEc7qU5iKWPeK6uTPbUUTjHzn5d1x",
  "key24": "5aXJnuWxSxDPRp9LWDhPn7B6V1m5HCYSuHJZrZUXiQyu8iMRqheJvHfwCNmN2Z95AudkQ28LzMxdX4vx5u6J2TCA",
  "key25": "5emFm1ofmVuBRF9TQZe6N6Fjqg6kA7uNSxSEB2SyaVw696s14wh1VmEdbPFBwrm9wadURA8fK5VMJSKuqtDEtf9n",
  "key26": "2H4hPmL3vbEz8m62GwhsT7HGk4ZnNAMbzkBD7U14nMha4mswWNxoGxYnLuJ7kNvcnRnx4MgNpk34SsypPRY4R5Qo",
  "key27": "bFwP35hi4wPUqrWEX6Uz2717CADVLUMug17aEQNA5SqfSQLEN3UyJSGexh7cXZQp7CThQWt92nXwNiD2KiELZ5k",
  "key28": "5PhpCt4Ym8RbhJ81VrFHuDgtWrJWvnoJh2LXSMB12cuSQcw6RRZmCLX7fkrkjvi15FjXPkAdiJff1paiRSQ156UT",
  "key29": "hebmxwRh3KRrC5ZLtptYwK8Ypym7UoRM1LMds6QaMEZr5FH1MF6YYnaTwBY2qoc7xTS5svdGEcUFcJwkVt4AQtL",
  "key30": "2kEnUdxACWEjFwRVEWSrxNvuhucFiJ6TYffVdwqw8Zk8DZ5JEBeNNoWCFRpRWDBUgMoREUi2PjB1C52zZub3BDEA",
  "key31": "2LhrKuZDjknzgsxyTYRg7MofJtzp84Z35cZT1KuS54p7qLXbEsHLpEZ3vAUPHHDCxZGZz1S7XHo5Fx5e1iKvkB1a",
  "key32": "4X4A7nmjesdDUzhYt6zjSPubFXLuqY6RTiCDxRezHJ5Vt9V1XcEGD8qwZkiQbM185v8Ptc8JUrdgE3cjqv5nC3Ki",
  "key33": "2s6MGgAzuxVSEEonMFHEezfHf2nagdN6wQhVV2bimyQ1QV3ygWQCHr5Lhd5ewoCvZ6QdQYiBkkts4e5Wwib8fqer",
  "key34": "45YkbFGfFZWTHkRrAhQRhFgB54YfzNNdr2ktpev9hZ47oi8mDoBDvRkU6ynv2bPYBmhyehbqqQRhmcW5P4iPEDTG",
  "key35": "3sGhhX5MYEdUdfekXMX9i9SWVEEXuaQGnESgPZ8wit1MGJQBwBohpgmyVkipxi5gi5MdMEmpRKF9wqXNgpQ6gZbd",
  "key36": "rLyCB7EHq4wmy8rutCdd9wPdDEYN2qRxoiYYh6B6Wbvmbxg9NvhNhu81H1bcHGpR1H3unFKEKFS6Jdg5PWmyeCp",
  "key37": "4R38UtuPYfSKfTzxc5CPdThsSi4ct5dXzwjYUr1E4szv3grYG56FWBZAV5W3xDuunfxHLBcC8qWdQyQ7fVVy1eHS",
  "key38": "4xysGoSdq9CXsz3B5xrwwWGP5WURykamdiFr22vzDY3kAbc37t7JBwupqajRgPXFLDtm7zXLjaQKNuvQoTRuFVgb",
  "key39": "gzvr9coiqcHChN2c1bZhSumsUQhhHeX946Qnh1Dh6YAXVAoDAL7WTtgJ2pu4n3uDr1dEth6gWS2BjsBDqrdtNRV"
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
