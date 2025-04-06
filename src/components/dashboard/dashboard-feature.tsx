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
    "2p5VScLGVcVZ56WFAro4EdsmSYJe5DVrKZJQw3k5ZdM5mYJy3MgR8Xnn8rY5cgr8UKSQQRdU2HKMFP9F9FX5MHNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qrzeKB2Vqc3htZHyXjs5CF3LbxqJjKxPHMwVEvtK8EuUkZTT85Xk1o3bhJfRzysC1dTEQNPwiHH7t7DKGH6KLc6",
  "key1": "4rnmxJYADneXhDVnKCtRps9kdrngCQfjdcegAdmdRwZF8WotJY3oHEEwAiXik38e5A6cBAvhYMi81BbvTiX6BqhE",
  "key2": "4rYs2R8X54grs1HFhTQ2LzuC7Hr9v74dpqxEaKd5aoFoj7MhpmyVK8Rnvp4wP3A3x42h6EPZkgLCuznibXGHjtPo",
  "key3": "2Rk2ucXyH5kDcRyrmQmyW4nHj7v3J6yQpjmPXcc9LQ4BUDm4Z1p7e4h9ygD8zp9BbN8hdZVhD8BqxSJD4gYbzP5x",
  "key4": "4MdJFpr9grcrXwmraZc4qGJRz55Ao9oXbtPoHpyazJRxW6k6h1eqqkvWYKLDoPvukG6hVDfkgG4wNjbtcx9qrvdP",
  "key5": "31HvXiVxCi9LF5zFtCVJXXyusiVYYCJHHJaxBxZRw7nCsTtAzZUDGwz9T89HgCR2fTyATwJBgisYveCKkZpMPuMA",
  "key6": "9X9xVpp3HEd9eLTaVfx264rYAKPEd8NNM8Jc5Ku5xMgXxgYPsEqQULq9RZ5fdjbQwDbEQqGBmt6XZt8KZ2qqk1a",
  "key7": "358ebaQuDCwvtYZUrUwU8th9p6jh4NF3eyadRLtwonHMo6hbG8V7X6BV3qKSiSKy6eALgqvNJDRjeYWLzkHw4F5n",
  "key8": "3yzgQG6Z12KQZMRp66hASgTtCUM2x3qkPwg3AX9Bu92o21ZetKPkJgwRkhZTFgvE9avY6RqTzWaUgqFjLWvxjvFM",
  "key9": "zsqb1XXGD1wdd4oCJCQsXtGMjFJKzi43QWh3nGmaqaUjhS4dFfcDQStnGUp3W6wrKRDv8F22gZYRk17YZgCUYxX",
  "key10": "5Mp1ikbHUieFZLMEwnJi5Xef9DpADGx1no6jJLbJ6Ndu89UjjAcwmH1UkUZHVpX7GgStZBJKNiqpNEn1vpN86NZT",
  "key11": "2WchWW7gtwoAciVzWSC9Ha64oTuoMcmqDfb1KiV4FCdwqtYv9MjaPf2xs1BiyH6JZz4z3bFr7pqpbS284UaouSWy",
  "key12": "29wEvxwu9ATtVzGaHmQnvwnQrwiUpD4sZayC2YmmsfixXdbCZDqPGgLbYoG28TXmBC6wfypAKAtbWuwDwTAuAoAs",
  "key13": "57JUFjeUQYcb6iCGZCfKLhnFi3jU2HmxQChQi8zS4UUYaSNRuvvaL5nKxNXin4E4P4AyUa1h1CHTLyUHh4FdzxFV",
  "key14": "2MGSxc9XVoFwdkQjkPTj4Rpbh13bWk7V7tptKFf79GtqN4ay4ffgc5MQQX8UBxhBah21NjyExDYfrEZh8mKCuqBL",
  "key15": "3f91GhRv7m5SUxQCVN9T24g3xL5U7xUoMWjvrG7zqwqvFwaSYCaGpmkfjdFVSoJnwHpbDjuxhgfPJbUcEX4sQMQc",
  "key16": "3AzpLh3xsSaKkPmNpkWuMihjUUPF99Zqr8oQHTT3kAAUBPAMHMPNbHQVwwqvAs9wDN5EGiVcSzsxVuV2ixD7CWk4",
  "key17": "447eNepHp72fjyYiDmibGNTXvJEmjEuSqDLqY6nY2iY3xsPiMiJ5UFk3EwES8uaKgCg4xyGuWn7xpZgLNJD8VNwQ",
  "key18": "5rzzqDMAbmatWJ5NSRTuWApwfff237PrMVWQtmLytEDWH2pcr1BV4Dw1o19isSk8Sga1YfyNEKgnhGSfxhvGjaYc",
  "key19": "e7kq6chu52ntmXwEgYrpsWgpmkiBdd3gqXWg955fjYBtbve9ozBUMeMpnxCz98fkV2kaKhATyJ64MeJNvecXosk",
  "key20": "3QBM1oZehLTPHvsmZeiBFqxmsxLF18tJweS4eTSDhoHu45RcRH2b8tMZ9qb4wxzEycJZqBq79fArPDbqGMoNqzzX",
  "key21": "2Yp7ruYWjjEEWXadQQjgFRoSyaoCYiNbsYFCJ4UHdhJDhG7HykWK9sSd8pEkfS1Natc2Qfjdeu9KaJaa4vjz38Nv",
  "key22": "3LMhzLW9SK8F5FQEznbYZNxxDvRUz5RKZdA2SN5hbhAKVjL8n79CmFmfAgmEW6n7NCHvP4nZznvbKJLUAD641awW",
  "key23": "3PengRwLEzECsL2CubZXy6KGraxNcGFuowtQMJ4eJUakAaeEiGKgdXRrerGHgCL9suqfeTkkVtg8Y5PYfEYhQvHt",
  "key24": "2sJxfgDErZYpqkmtfRgHytzLKjmsDotNUfqJVxmVmNbRJXvvayhvRhSGqUYQgnuptgySG8YHdMnDadQHaENx2EJt",
  "key25": "5EwW62FtugVzDou247URNiBTEMavWzj87rPNneYbygUhcUCEbn9TgYvL1MjB9vC8BBBfn8xEbQNMfVJYaVgvTw2G",
  "key26": "2VkY85EQ9jvBM2jMnYthG2UvaYjVRZhJCHHeWC1uynzW16rGwpP4hvVM6nGLceMaqMEUprDScPMDorvaFZzTQmKz",
  "key27": "47nuUrUVn2zmTY1Spz1D1yFAh292EZtWBU2WTVx6mLksj6wcDobham3MadeWmRttgyb8DMGYK9aC9BX3ZB2roZyb",
  "key28": "4xFBNHRTrgyGGu2zohU5G49D6GyJ85sMhZUNGc7m7ipSrHypVWhty3z6S5nXst4mSASzZpayt5HLi2wUwDstkXDz",
  "key29": "GpEfQSZsAnH5WAVZFSTrXcdErzk5tdw3ypbRnZYdfd4S4ZFMcYfg74XCzKtGhQDXHeJqfUxNi3tEVoVf5mtAczv",
  "key30": "3c2X728MUUdP1YBB4VDZsDmFiWbDRvdNPLc8AqGU1YTAykat18jAphCLehd6DEMVtimqJnwHanAhgHMVQHPr96zY",
  "key31": "4AE1XQvzfjJbc1tY6SiJmposN6csKQMxWEJ5nJLjhh7D4sE7ZSvfk4rRJuuBxbafNwjgKxi4Gcoy1bnnqQ3UYhTY",
  "key32": "3MPUePsJzjbGJGXGwHPkPVLcjYnNzy8XsLiXZDu14TRqVrudFKqiCz1aC5WEvWzMn1EhCF9y7PTyKuTrFosoMiE5",
  "key33": "32dj6rFnTWDBrGM4GdYrXB7RFcsUd4k7bJxHtvbxa7vrfGWDynJ77EbNXZUtVQdf581SbLftoyEHVYXG9QKrj3kH",
  "key34": "2iVVoFx7aAkzicqcXpakAo5JBE1dLhjY46k9btcD8XVLVMmK5fbhdpcMs287vHRriTEAvBWCYuqzWGdsPoC1yvAM",
  "key35": "5FuGggC3TFgtW86rnG5yNzNAypBpd3VhYdhQHy2Ye57MwnAqsuN9PtjkZ7jF8iYqDE9k3LJQzxgJ1X6LoUCBbRkD",
  "key36": "5V81j2htznRDwD89s3SUV5z95qeY3HBdBMfANchiubttVhVjsWrA8bL7tfxSMbNyRMrd3zDftN1LKqf32JHKGuaE",
  "key37": "5o2mU7GTT3XtPh3fX2fiKpngTFCiGHA6jJGSwMznaMZ9SmPBDQdCTuUz863ZtvAVVu93uBkXVSjXnGbUWi2Rz1nG",
  "key38": "5bXFP6AewpiyRDAhBrVWzHezD8Fhb3H9vQPZkw7SCwbmcXGekfMsQ6bxjQAKGepv4WaYwU2QqogtAbtFQeT2YPp2",
  "key39": "bPnLj7EpyBu37GCarjSM7piZK37Z1BfNELrqSh7DtQoZkfHyDzoHKRc4o23iUJH6vPCiRbvZUKeHsc3PUq4kATT",
  "key40": "323KzV1d7p7g1Jcad4UhjHejXLx1S7uiu9D95xUztfVBZYspMoUhjX3TjjxtnonnobragPSVnisGCavotB5HDodS",
  "key41": "4ENAtpfeQxbh64furGcc5oMuE8H8Lqb4phYu6brb3ZSrZnRmDCmvaLV2ngoaBd1dF4P5M7KAcDxdsFSanZhC1KR",
  "key42": "mW5yXd4LwCA3JDzx5YioHwPV68vmmT5Y12gNdTvz5BkUg2HLtY4xty9dv1jHv254N9CJrieu4LsiDVagUrcHLbY",
  "key43": "4C179Fk2ARY1DEDfYBfQe2hSkv6ixKk37Ysmy6EBKTW68m7umE6uE7jfsfwy2CHvbJdas1Xj7Jiyad6BVjGsS1ZA",
  "key44": "zQVmEsgkcv9A9UJ4TWM2PDmk7nsC5cU9GsKQmnn3KjfchHvK7WV7rTum4b4cFyvEs4SnDCXac4utzcSwaewV4Ex",
  "key45": "2da1U6MYuaRqgRRqzw27dkf6ygpRdEAhTMZ3FXSZNHWP5rgjQNnqkgQHXfjoQi8ibe1wGQrnmoDvndBDuTfCzSE2",
  "key46": "Kms9Rp47VUQC5UEpeMQpoT4wN9GXoKLxv64Dt54pj6bhCfWZ8NgLiEXyhM8U6sFAnaDBze2B9pEmQhpWuMQJryz",
  "key47": "3opqmT7Yy7N5r3CAv5PkU5VSgRkzakLy7iC9sdYWf6z1AZeSNdXSt3XSx2cVmGfCF5UWsS79MJvbWegNQfSR2uSS",
  "key48": "3x85iNSn9YLJqn4aLdctvL9ma9UayACb6fxJtF8ARSv6wsGVNKJyLVigRHvGDdCi5sW2FtaFKL8Qpkc89G9X9Eki"
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
