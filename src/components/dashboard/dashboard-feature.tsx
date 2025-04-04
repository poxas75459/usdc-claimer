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
    "5Lfp6TmEP2kbC6C68iotHxK4sKSCqAcLxxm8gAqGDr4aUrmge9XJePVz79dUoDZMQcW8KNwVfmkzniEQk2wwCdM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zUTKqLq7635yLsFDxyPovpohA1b8MXRS2UjeMDr6VHXjc1ZahqT6fvsDF3TMt4P7HXe8iEEUYqnxLr8PApuP4GH",
  "key1": "tZQLdf353cbreaCUPAuyRCciFfZWzecKFKTL1jUknEFvTSEHkaprXL5mJJXKxc5vxyREVGv6EPZSTov4Gm5P67i",
  "key2": "4BbJDiKWGf4yYei81pNbyRPAcDqkFQ8xwsgzXkpte7p6HaA3poVG6UCChY1VAJaUKdpArEYJJHJwUGtAWAY6u5RN",
  "key3": "4P5okNrv5E6EuJn1ang6oX247MqZYgESke7S6irYAaHMTavJCACyEpkm8vrsNNA5ELkrhh5iFynFXzCLgzv8hMgU",
  "key4": "5hi4J26adjGSfoTj9nfiDULttR9QPr9p52WJ4JomqX2an1PQLnwWsJockLF6J1VUom6kcwAzDbddv1Y1sDKwK7a4",
  "key5": "3xuhwcTxhwG1RQ7amv5vZeXsmgvz1c3oNrFLF8jhVbnEo2ShdsGGTWcWtjkaRgaem8oeEydorRS5EpCPpxEi6oyg",
  "key6": "4hpnHZiXHXbhJbMe5gPWXqnbxy7BWn8rXhEZbRDjwcx5UT9CpZbTzqYzRCnmTevw1MZEefPW4Picf1TKe7sENdyh",
  "key7": "4T2fCRhPd2rUfn4VvStNLrLgQyRKzdxU9bSTz6Xqbjz36o4Z8t5XC9Y9b91UbirY8QhVvDAy9Ec2DbL9YsQ81DAM",
  "key8": "5SbY59Sj95NSrUUTvAZuefXyTNCX3Tg9tNbFhPdpsMpxYSnLh6Xx8hGgWgfaggjV5DAB1fu8cjBozw98JfPazTZx",
  "key9": "3KKQnnjnp65gyH9Sti1Zdy9CnnGQ2vfDsjKEjJcJE9aSa9PvazFUACU3VDnJtr1bh7PinGiwxRoCVZPmirvo1nok",
  "key10": "45X4ZwH662nBPErKKSzRNuze4oT1ZK7W8hMKJ6b6JbZDjJunjLTNpSpXAbrahSXfetMLt2bBxoHRbKYH9qtzhMdW",
  "key11": "38zbYyZ4ZtEQ9xvoAoDUws39dJsFmmyA3wuGrF45x9vMBwFrcxd3S9fVf75TmUf7JMgqC7bDVVHWcKQhj1rmm9QS",
  "key12": "2DPJLCqSTdHE2AcfERAJTmu2kBkmxdVa4xwWXVQMUnx4uwQmpNKYAMCFCQRfbcwMmHYHHmynKF1aK18eh6UjzGBK",
  "key13": "25s5uUKqqcXR9RpAnWkCM9Q3Pae44YxNqEXb71Yk6cLTHtKaSZ8g6vjd6678k5UtTBjT93JR1LyA1CG5vAgsnC47",
  "key14": "55naBHxp6jfytdkhfyQq1x9JnRtkDsZdYZ6yUiLPMbydW82wPKpb34NJ7F2PXjoH16Pwxo7pHAfEhakZBVsv8xQq",
  "key15": "321Mq5rcXW6DjrmtA3WXsyDxAirn485vGk7Ra2te8N6sJvy9GAGjAdTLJkiC4cANY7YxLvch7yG63zE8kMd1iQgy",
  "key16": "48es1d6jXHxd2TZWYxYbWNWJ2hGXxTaLwmaToCFXWA2zm8EE3kskurdq1fQr8N8o4EnW6dFoyuFsZQxieeARumvy",
  "key17": "8zBwJb8u2VwVbHyJThj7o5iMdjAEF8UDXkbvPf1Eu1qjfxxUM6GFQAX59urgrMAF9aesHSU1C2CMgjep2HLXLTZ",
  "key18": "5B1FuFu3GyssmNoKp7cGk48EzYaKYjCatBmWskDdwfzfi4JhLF7j8QpgTfeFZVTaUpdc6JTvRagxA3wvgidDg2G6",
  "key19": "5e42ws2tDetYX5JYVhaUh44yyZXH2QNwAt3pc8bsbbnS8eRq4P2eP8PpZwYQ9qadjiAGjPCsYXiQ35yZaa9d9UJ8",
  "key20": "2V2m5vHaZqZwLKEpBmkk9dtYPZsPdpD4Cx4ch7QfEQoqjFXh5Sq9GvMp8MoSqiEYJK8GQpEQZCunnsgbBquEfLPR",
  "key21": "pvofBmrLtCcVkaZPtAiY5ghwCr4NVrxZrA3fojyczzEkKrqDmphKWaDj8aWcY5ZAafkji91aT3KuLhRCk6dFLcT",
  "key22": "5vhQtP41zqSx33SYn4wRBSW9sSMXDCTjsNgMoKSrab5PM6WNqK8QipxojfedwueMT3T6TWyStPEELbcP8sXvarbG",
  "key23": "Rc8dzjAk1Kd1dUApTcSRtQKkJ1D4cwXKFyRfTJvWZnxGLYcRMT9SCp5FcdbgNem3jtMmqqUxHQfn14ENbP5h6nT",
  "key24": "2vepF1KzrSYx92c92GRon7brjUSjUSD2WNeegvkYaNoQkVsZcubeMLMUskCwwe8WZ4vscGVENY6RgADR4omY5hNG",
  "key25": "5ajQTqfvEywihq8kUZZdw4aZWQyUhhss1bpCFpDxpTKZ6jfZyvYYvkybZpVJ2AJZoRQA3ENNwMiiZq1PEEn5Jwr6",
  "key26": "36yVLKU8dwkPsMcB4ezASQ2TjxfzGUXJZr17V9G9dL4pMNEj45nZE9YfxuU7uaJvSb4PJJz8X6FmRKdxfEPxWR98",
  "key27": "5eZ6RnALJ7DUaVfhNe2cp2voo5oc2RhcbmixT1pgQBs4KkAPtpcEtTXREj79DMyfMxEb9CFStGniUU57xGPf7EDT",
  "key28": "zrJ34aPd1uZN8deB8s11B1zKvQ51orbESx5uKk1KMuZt6oKsJECYeEtKCzZMBwWL6P9xC1ABYNcNthfBCMYDGyb",
  "key29": "o1UduVmEW6Vdt9as6JsFJtaWKyQ6izF3YAP7jvF1fBdwdrt4Ng2dJE4tqgewABcVVVgVBfZYqUeQw3ZJU7xob1y",
  "key30": "ki1ZKVRLN9PmUTvRXnjDJaYMJCWT6J6K4yK3atFfY3r6mAA5HPuLaccvNQg79gKsGtp5EAh6TRxhHkt39Xct2NM",
  "key31": "6q4TPTVXFyzMcjhaFPN7rXVuKwyFLqJ29KdbKCSUZCFfUNmLr6G6k9epRh4bdcTqMGgRHJcSBmHUEv3rcS5AwiF"
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
