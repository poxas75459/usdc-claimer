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
    "5Jtfn4gkPrub6E91TqJgqrzf62MZcCm3paqwDq7HYD4cdTAxyjn8FAvQm4nebQyiFiJi7TBGGrwguVGniLw9UYbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N2DFL81Rpqq2CWgVcP4v8fWzP9aLjq2LA61HtAifnKEL4wz7L68jeoptt2JBV9irUmDFUmm9yXuYuTaKuULC723",
  "key1": "2ZcZj75VNd68vMt2VzL3vf7edhdih3U4xyYuhW3LdGiufVrKy9W7Em31pmefZzgXJCQtY4RjQfrs3tNtm5VFeCXn",
  "key2": "424YWEdL83TmymoXSJt4phxdjgQu4V1BL6zE3bsQ7Jdyk49wjF2UjVoHM8Wtf1oDSrY67xHoeucDVvKCUSfCnxJD",
  "key3": "tPrUKK2vyWgyCcjCV8KA4oa9d7rdodev4ndgzybMVCfkL69Z6TAFDY4MkXw8N5oDKoS7iUsPQ1K2gygb7zZHoux",
  "key4": "49Jtc2toXzv3jmhoevgyS5axET2dYSSDd2wMnduNUVNVRGEfdbv9qsU7epH1jv2oMK5fXRvwP6ZWcspr8zruZPw7",
  "key5": "byz5ngWRx4gZCnKDGKnMxa9zVnFrEjAfycWSagapRadr3H7r5rNDqviiCgUtetrMCwFxyoA8La6rmReGoRXmxRm",
  "key6": "5nAFucR3YAKwhddNcQ9pPUnB3vca9sLx1fJdBEQVPd2pkkUv64upm7QvpwoXTiBHdN7CCxCuviAxGnsjffb2whii",
  "key7": "5FyDH5QthnYqBRrbuz1iKzYfLF1ZAcMXKtcXuu3buB3jcVPqgeJPnyfpiK71ZDmVVKy4Z2kJ4iA6uK6dHm6bAKpM",
  "key8": "2h87aXCytzB586LcggwFVZyCMfweVYUG46eexJfY1K6CzRAn9wfocSqBqZhyXhuucxS9NBniRjiGZsUsDJSpUfsv",
  "key9": "2wJX6FGMrmRsPzVJH53bMhVtnWNC8kxtFEfhViBz1VD8vFmkBtVpokusaYNnBghpwSQj2db3Xr7q2CBEFkpsxdwx",
  "key10": "4R6PAKugUedgUiVfAqDLaHqYadh2ZugJwrdU7o3XXuRnFPBaz31pMg5qoxYVGRydZzud8pznNa4QsFGbFsE6sx5X",
  "key11": "pjyEg15zgZoJ944JxqpfPZmvLHEL8YT7aqTg8NT4hxr9mKThzANcfW3aS69LKc5BNhKxjmFeURVmsZAFDv1DzxV",
  "key12": "4MhV6x3i2baF5KicQfq5VvjsnVhwyxpLAJb3bGyy1iJpCPijNuk9PnfoRxCgFGVj2AabjkyRtUn2CeZHfxhmBiN6",
  "key13": "5m9ZB4sDQaUnZTYoFUaqKQLZ5sP4Qgq92shhLoMzAGJgWf3GF7wexkYyB1LDHK1p8ydBpQQ3ZYBzmSva1PK9DmEW",
  "key14": "3BpewAQhz8o1YSWA67MAfB4ad6zre1QwMPRwFwpc7GFvNRkku2Smv6d9dYdavdUYeTEthZjXZ8S4g3XScWFMZjsp",
  "key15": "2aCaFMGjcNX93noL6hbK6VXG2FwoAXhjYMMvFXXrnNSTwV5sq6sUsYAXXLUj4dPwmvm12YCmDDzdCV95wENMXsXP",
  "key16": "4CvW6RaLRz5bkxCuVmjH2XQ5C6f9g58fKP21khULoZEYNFMYct4yWaeito49CrqDd2atxKaxcV2hWoTcaAwkPKYQ",
  "key17": "3sSWNbENoA2N6CRA5U1ZZwXNiTgzXgTS4zL8wTeS7vwTh5XrSmQvDSwNFgG9zZiKSCiq9Y7v8RKAk3yjauSHKyMa",
  "key18": "44tLwVpm6uzn2w2wsd56Ycefqt6YyQnT3P18MDsqHkMDGcgL9xCs8iphaqaadVgAvnYMzmonRKJPNjX4gE8u2dg2",
  "key19": "3nXns2AWvzXG1Hw33e6cyBwX3HUHiX2nubXZtnNvop9bgekPxcqraKUJQJUk24qpy6KHEr7zdf7FZ2VtoQCbCDsH",
  "key20": "2NZBJiWELSXggfQh42KRb57cpdnJtJuasKhVJjJBndJ7Wh192s5987hgg5qMTrYbhq1VizkFkZpHuVLhzarJAfFC",
  "key21": "4RNwMB2smsdjvSC8KyaLqZYinG7sUWoihLjbdF8fwqEDXMLUVYVwoy5uFtGDy1Gs9Yw7gwec7iQGNvig7r3SkrK8",
  "key22": "3r1p1JbnCYQJfp6nvFjDSZH1B7UpXcYTJNe6koCoqsaimnWhnjTBfdcRYT3LBQMyEq7vdXnzVkuF4Jhgi1xpVzoF",
  "key23": "2UEuAgDkBh1v2KyphebektG4X9rJjL8QamGT1F1Tgi49RKw7ZsP2rsBVBVuBvdtad1kktksUiExKwZzLdybXKHQH",
  "key24": "2jkfeeiV5b2fibJerfsamEXHfBFfdTtLuM4wer1K5cK6FerL48f75fsCvALegFsxviiZDrTzskHzq1kXHMqfaR43",
  "key25": "otRMUoFrodpnuz48MZg77pSeDHNET7BRUFYiUcs221NWW76s1aqzdM4cmFp41FWLyjs9mmhefcdw5wkZxRy6d53",
  "key26": "5ba9triTJTBebpcv4WcnouZ8LL1jbjMGYF5dgmnRdswXhgedprr8JLH3nDpuh3F1gd6pZDpYkVyotieiQ8hPKtVH",
  "key27": "2uL3usC6G7JDWPvnjVVNtHKFn1m9DjV1DTRJoRavES1tmqmEWb2haw37ARDzuZvfgQdg3F5y7zXvjJW9dyTQsUFt",
  "key28": "33HHD4qeQtMYjRFe4K51zXrg2ujzrnNtxKjKFZtijoRCeRG2464s1tf6TDySjbBDtQ2Y99Z17aYS6w68MpQiXJ3J",
  "key29": "3MyQMYCFTNPYjVgS7tqmdnKRDDYKC7r6VitopkktkwwSCsa7EDvrS2pwqukoGmBxK8VLq5xDaMxXiwSZUTo9v5kW",
  "key30": "3iPd62v4B7zAUBzkDk4w7jbqaBt4wFQcfEXZw5SiwHtjHEXhgi6SGSV9heVjLMDxAZ49KbxhcLW8erzaGkPsXVQ9",
  "key31": "4eYiGw1RBn5RoBXMpoMJAeiAfoeG5icinYSNBujzJtp8CFnVJdEFb5LB1PtEDBHDQXsp8WRKxuqL6YqSKcU3bpo9",
  "key32": "xAjKCdijafTDTe93W8MJ8CBpc1w4f4xmyk8Z5beUfPCG4jaBYgQzdqJttbjAZtSjE88ooZGK4FDEaAy2b6gPPrk",
  "key33": "3eLGEKfxmZuJi5novkoAoQNmuP1HcZ1DzMB3QYqyDsnhrMSq4ra4sAUfS8k5RzE6LUQbMPKB1kKvhEY59yerRzoE",
  "key34": "5QJTmii7FeZbE4uzaCN9185JjfoB4334XzzZyTDET4xHRWtWrjgYMNg4AqXwhY3JjvdB3iDHHADhRpeXpxCqCjzE",
  "key35": "27VAGowkkbg9XxJ4JQmKQ3pBhwMTMStjhxiRwqKQ49jh1prroQ2t5r66PkFE6ucgZeReJciFHBDX1Q4CZ4EdtxzN"
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
