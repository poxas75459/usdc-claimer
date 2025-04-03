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
    "Rcp2fypc2QecovkAhz9G21jRzXeEJsmJhAr3BhVX1pbDzErNom9aoEK37uQufqJQc35Y7sXe8HPzdUH5YgETPJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYifDgKXpPFyapMkfFneQimdmWsVoPfpEpeZTZhehU5fAxtXtxG4hJivLSMTXtQS8UHZeBXp6aHSxbcrxDWWcRA",
  "key1": "4rh5eVZqwp5xkR25Gr9CoCkYQ78Ve6JhciMQckY72FeUFteSYKF8uJMMTnWnCA2nwGnrk3xCyVcehaSo9neg6sMc",
  "key2": "237qnq59HBUBNnKLAAoJCPnxNzGJEvSmLjMhF8v6pEpfqvsMpbFVe6iXtzbZNytWdPNZxE8nKAk5V3zby37AgGP6",
  "key3": "3jHt1QRkeuKPCnnNewuUuJbP43epz68FKiKnf1dW3zRDmPwddfW7sftv3uYJwrk5z2RSHHrJvpdsHpkMP4kRmHdp",
  "key4": "5JoaYYKUnyFhUVPkzkmoCYAGFZqcwzPkCqqSvgHKB2Ca5SsJxhXptGMxmsUroBE2z1b2Zh6oTu7nJKjdtFYztBGx",
  "key5": "4XrUgg2rhxk8hRH2js3oaj5ADyayGjhxPWJCfh88ZPcJzTtKDi2s2GLKfTyWueRnChAPmbTMp6ydg3CS9uizx2Rd",
  "key6": "3k7WbyYU2FMP4yegimYEjkH7xiRYYo58Rggb3EJCNKae7kv75myZJF6Vih5SXJppyCfVZRFMZ3yagpPXYe1jcpaA",
  "key7": "4uG85C4s7RCK5tVCbSvsnJiNAtdveAmxJfTEUnqqmzsE2frceoa2Swx8gqZWonTsgUQ1NvM9MkRDksPzH5Z1ypvX",
  "key8": "3eBEJjJHPu3RbChK1S7SjPVbJ293jJMVwGjQoBc9zW6S1pYiph6nnDtnp5r6hzgk8dFgCeRbp5nt31sYeSuXYXrX",
  "key9": "455jGb6gyQTTnPb5rWVJ9a2wxu6ntK59Xo8RFbDkUAS1i8GS8V5TtuUmEpQZqmvpUrzyhquLrB5k7ifypdqPnFYt",
  "key10": "5ctkNnAskAHQ8A94rJ6kWpFkgXRohGjDRaMvHv2w75NM2RKQ3UsqEvNZXt1xypJ2r11Kp6A6UTYM9EJA8RE53G56",
  "key11": "2S9xo4CZwhX3KWU69gg9FZfMn2w5aEcxETSGcDGxcapC1KVATXs8nbM8Q4JhbpqkGcx93kHyDvXTTiqhXWSjqXW1",
  "key12": "GTMFuhLk4dgqzbApuS2vZjgiq5mWSAJPzUsL3htvu7cgH6aCHrqj55nBZ5meqq9g5jb4fD6erPKoC6LRtaKYGWW",
  "key13": "3y3SSqmvcXM6febmJwVEN7N7VhPRjqJnehTaeG1qzjvqn2wQDi57t3eCNieK9bSpu7B8xA1V2fVDDTUXyzePU3gc",
  "key14": "2w6VyF9ewMftkpbSwHdTnZ8sxdKtymEKJhCsfUFUYCqCyjrdpJxR6jGojunZWBYdTWZ9eyRc6rBGTpWkoojRUKj4",
  "key15": "3it1RijtucYVnJZFuvfeUmqFPCJG4gqXJrKaDMLdgwgfDQu2bXKNmzN7KWVy8HWySuCNc69oK4Kr99x3n37cqAVV",
  "key16": "3evt3KH5cpCJzCoLwQhbLD5HcLdmfxdFPH3r4W5tqgsCd7yuVXhwsqZNEVUCCntiJEb2ABin2ErBjXSkCrQZtLyC",
  "key17": "4D7Htz3LZMfYxvLK6t1u4jwNCVtu8aDkYYApyjLwkNibu1VJMBvQ1pU664Vi3XCbj6BjyHZpx5whUyM7hLhRFGdz",
  "key18": "3sCFv4SjTLbUaQ5cdSLbDrb66WQbmSfc9KXMVnkpFr9ZJwfqYG5de1CjgU5ZHo8NQqeRQgop9V37EmcuxTYLG3zw",
  "key19": "YwVvw1rRNGrSK5aFcTsi7YzzfGPtAuXEkNyjS1bRZZHsWospDE5Fb88APyvoA3XVDnAL7hjfvUQZwNccZWijLd2",
  "key20": "3GyNdkccsX1Fofxd3PGmoq2BMZzq51KmRQ5qC3rsa9QTbKivUmnqmSSRwwwP2vd2wA36HrunZx7Xu1vnyvGM2cz4",
  "key21": "5inBjVUNKD4yi9NNcWmYn9gUUevao4vH5Dy6tYfd7CsFxujtxPJhfmtmGvV2YQR9YLtJeXkj1eKFVwaTtquWKJRL",
  "key22": "25eB2s7nYqE1xxbZjY2AGvKiErrRHHdcqBqUB4ygGRfPvdU2f6CJQfG1dGirZHK8AbwjuPPdN8zRLWnwjiGDJjco",
  "key23": "5UQdCemCXLWXa54nFAipzqHBpjCXzs622NKMoj6RTEbzhk9L47AjtqdbVRhNHeE9ArbddMiLJgeiYEYFqAhFhvsS",
  "key24": "2prbUnoaKWKWd9hG5N9YzyT6jDmX13rAeQV3u5W337fwJvMc2wwxG9dVudcyCop3XyRY3Jxg5MaSS6kGyChrknXU",
  "key25": "Nvj2cWosC5a3r3MuEmUBEwwxbewwL9GP8Duvf6tiG1Sd9JugaJpj6pjQANNcjAx9XSXLAfhCFkeLWX21GK7iR4U",
  "key26": "RENcyoKKLadko7m1gdpw2bEoQB8244Aoup4VuaSbXXdhtZQXJe1RTYtZVNCwZ228sFdwaoStjhvt2mesrGQmLMQ",
  "key27": "2Q7M6jCgkvhKRwbHahCTFy2YLnNzSMxdhfjtMkSu1xUVHSnd2AmSdySKLSXRCn9hErFwLNrds2pe1ubqViGUWH1n",
  "key28": "3q2dVMMh8KKE7zxjYogrACwFgnngqxRbLutr7J4qSRGzhZXGbq8xwyhPsGV3s1Uam4Sk19kVWzHTrWfgW4VTCR1a",
  "key29": "436f2hyeYVVyJwMQDSN8AaLyefW26GzGWkUiRHvSL8pjsbNRr5pNwhWyhe6K1hqtnXVqSvfESoUrH94WA3NGTnta",
  "key30": "5NKTreWyNm9nXr9ECzLwV3gvAXXjKzows7Jqfwr7NfddzMbohrMHqPrBEeJDzmxDF7DfKskx2zX5Az3jW7VorFoi"
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
