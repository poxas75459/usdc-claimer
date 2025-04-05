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
    "5qJscs7rX756AR2oYDnz3RERMhLPHyFio2sqQiPv2zZhZMLEziYvmNLFKW6wWBfY3Vo8B3uPn1SwWKgsn88SSXQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mBk55S9G9prNqw5QNKgHBK4j5BjeRVsLewxnvbBaJB8d7L7sadwCEGhrBEYmCPek3Huo5huu8Kjrpnpx7wqQbC6",
  "key1": "42t2pnNKY9Uh7LyYWSMS5RtLepoKaEu6T4zBpDenBDS2rf4yDYqPAEeeUxas2qoKHjrPiL5YWUrd54xwj5pLhSte",
  "key2": "Ju9LEYgKtVaFSbdW64qfccxJfPmDYtu7riWre1sXLjvs8Rwb9mfhfCqrEQGVoWsJbzRLQ5Fbp2YX2Diceutxy61",
  "key3": "54AGf4NzpmGUtTgoHPVyVtBrgpwbco2DAD6hu8CVnVyg36wzokJE9YXzxqKQkrRTeKTyX4pRawpGWi8GuYKm6P7q",
  "key4": "GnyPcmJyQVZ1ZSGVcD1pqWQAAmpqeyyZER8rM8warbzWxraEBwJMwmAZ4E4GfHNY7ZDUXRJBRAVwb7BZrdDQfnB",
  "key5": "5VdAcJhKb1SopLFouLMy8j5ir1d2jfwsh68KRstHzjRt4eMoM5EPrHoT2vv6EvqLHYKjdUyquyvGME5BgRe3DxwB",
  "key6": "58GqaLjtaNzdYdJfmWSVynotb4LJV7Dn36GV7hx3oQSYHDUYa7z1pysHfV9nKu2qXwTzwYBw9ytj44GM89f5oPit",
  "key7": "46Pj3pPH7gTV45cr3hUG7j8fxFzLmr6s1CvA1FTtGiVs2xZfCk1ic1LbbqXJT8v1cBpSmQyFSXDnfZrHNbDeLXvy",
  "key8": "3RJ7JbPxasqKz3rXVHPozhgw6MrYBxHLHfM3aEbiQ7vtwdiiRts3kApXX2iHHS2AFNxW5jKgqVvg2G5QYmEMkq4C",
  "key9": "3odPBTaDpjTSYC7xrLSPYLRByWCkgAi9YRDSfcnGPKEToQuBR2zLStWcJWSkQDh5KR3KD8y3k6pPocuZr2z67rG1",
  "key10": "S7sSZK4WVyajZf5fftt7QPYfMQka1sfM4Xe3q41q7z2eyv9ZF6uWnNMpvfiwk9s2zRMxMMBiSTBxJM5bB8JHBX1",
  "key11": "65FhU8EFZ3PXNsGXYK8Ecen3CvR5DJerHiZpstrV1ZXDc4eGzXVbfCQT8G9wmU9oD6psQRJ9SMt6quMSFCmNNsaS",
  "key12": "5q8p8wsoGtePrKYAb529c9Fo8iCZn8MdRZuKGDVa4G5LzEiWYA2REkjmWUAvuAis3XMvYkDLTytQVAoDUsN9hkwp",
  "key13": "587ZsU7VRjiqGWMu5zq4fqqCpe1Pqu8mX82zy5DGB2eZagt16nS8Pbvu6MLkZjuwe87MDP6xsTQdnJFyuTQdzHhU",
  "key14": "uAWJQciheDWN1XrnaGnfVV1K7AcmWGWe8xdbYPFMdTec8G4GsxeaBjWGSGrXeDmRxdDmx4jBngDrxTFxu3cDYQg",
  "key15": "2u2Ugi5yyoLNkUZGC1R8fTibSiMvbtNcqNitdnvNkveYeDaX1usGLYDgZLbhF98fQiR2bf3inEe8U8F7HuFhEGyx",
  "key16": "S5iQRhnAXKL9DqHTxk6Cxzvp7egydvSHk5entpKtJwehwNSyhPz6SwAMQh21CBnJnaPavuDCfc1TdMx34ZSbSMv",
  "key17": "5cwa4XEhataoKmfxF6nFEJGBz6Fv9uVW6ifSVWs19dSeFCHyxKyGS4wt4CDsrLQasvyu7kabfdVxVmSCGfoCyT4g",
  "key18": "33AMXEShmyjeF8FdGVmHXQohxqkVjxMLhPgcVDyHSR1S46YiFiF9BiMX4vtN55rXm22Doq3qtsXMa21Kz5xWXVYd",
  "key19": "2A64qdKKNf3uGUmvQcNF7wtLG5jn64wUcK1EN3a2kohV9Lz5jBHMf5E8AeuruX3FwixRMN3ud4zwAMguTtgEUcr9",
  "key20": "4t1P9iXksbqRNL7FpntDP4LrSD7rKcfYxyFZfoHuCU8KqkAjpM4yGEaakzs8BEVHkFKUbZo9NtuTpB4g13y3sxsS",
  "key21": "4djXRsedxJ12hifu44GBTBMnr82vqNVKedQfCvUtNgYih21jthwcRo1B93UEW1zJ4niAC6AwYMfQuu6RscmqJbWh",
  "key22": "5psW7nBG7nP8u4e9ze4XBWkkaNQrQqzo2n6kcB3Xj4S5CqoLJcphh8c93Gb5TqE5XbqskhUQBCi7FffFwCPWmbSq",
  "key23": "5RNitUMnNno93HztwiKX5ba5JCB5bb8nM4U23e8HVFhQRYfQKwfXh2P2QbXFhk1s2A7CLyjfTmBMwSGiZpK1wtwV",
  "key24": "39r5qv6CyEHWh4GtMpYP3s8azoQWMj8yWiBaNhYtt3FUc769oJWdkawysDfGt3Wz3XctNvMu9kMH4GkeWvjYDfkv",
  "key25": "5dqp1Verp4vzCLrXqcKtaRTdAh2K7vYBVCLEQNfBjY32d89H3LTw936oHQEfbmjvVvUCPP3gLytDf7AjC4RN7aqN",
  "key26": "3163iddywuWmbJanrRhS1mKmTcCJuThYSNc69wNDqJyQMJWHf1HjenqEUhFTN38u7hrugXnMymDB63N96Yn8K24J",
  "key27": "4W1fpVomSn2K9raLvmscFcBeEskoiSHMDmMFEUhjyTk5EH2JE3YKu1JTgfrnHHw2QE8wJnfyStykL1jJD4SJwRM7",
  "key28": "ZCBq4VKVj7JsKShssqgPHCoSJKwySS1JUGdPr3E39EPKV7uPaksc1KtJbcmE8hYQUgcZZqidHMY2SrYQw2A51Ha",
  "key29": "5ZgzjUrZWndBicQo5r3ZX2dw4fFtCb3P3J4pW5DpUqRbY7kBBfMvpnWhf46nsX77wj7fdHz24UtQHSae9DfYW1Fz",
  "key30": "EgAGbkYavvD1JtbNHLMvKTTUh86yQnVy11At6PcacEq46GfixgYH5syyRUuhugM4MLoT5rFnKyVaDJ3ZKG2eQV5",
  "key31": "4HUYwWdpHdeLdWPNAs12NbnERvNaZe9dqTuuKXD3tdM391bc439EvWgGnoUBwjxocWn1R43vCcovdNFrs4RCfW5K",
  "key32": "2GQrvxVoev4NBEhRGoBteDSojxnxhtE9cpRYXS8FvNbLski7WqpbhNnG6ycacusWW9EU8wvD3wJ8c5fky1BLXGzf",
  "key33": "twSALUxa38w2ztW9Bb571kMLkjQuYq5wSU1osPnJKgs3rBS7RXu4JbbXhdbJuw4atSvWKTLUn3ftKE2VnHDCzRG",
  "key34": "3dm8pmr6fUfYAXeFrCmMBJNTQtsHX2YqP4eLBpaecSJvFaqyMeZHXMEUbievU3ocr6fFg5hvCV77F6NMbkqb9uiC"
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
