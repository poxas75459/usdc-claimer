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
    "43dfyobht9FR9nEYvYkApj5yeZq89ohX7xdEqRuVLGLWaBxZvcgqZh6ztqzUgbntpGyGFf7Sz6CHmPSfkJxG986q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SU3jWn8DKWLENA9p9CydtWwbEqh2ZwVgw9VwdC9SB1LukxMRwxuCJaeWnb2hXyJoduhicuMYcfV4PVLZ8hyVfN",
  "key1": "5uG19udP8ueFogBvhcbiTAR3s7xALQqyTk1XfTYf83d6TAeyKyxKuyjH29TwJ1pmaFf59LUtT3DmBkUopqsUU8FW",
  "key2": "5wbtGqeyN8wTDdQ7QFdw378Ss7man1qGXzgyrd5vNEcvp9H1uDvC4rDUZfHhdYcqDVK3mAtSMJnD6RZgfBsZUDEp",
  "key3": "4sfRxjVsUAa37pLKc3ocbqFiQ45q9h2xcsg2zxGXZLZUd3RLZmthnHTHNM8gaqUm46H9vSQSP1FfyqBrZ2ozeRzG",
  "key4": "5W4yvyxx5BKpsbE6JCDjWcWHXkCGkvvVh8G3BJwrhZ62bWvxQMvESeFQjkrBPsKRvZ3cx7zdna6DHxFTaSZmiQWR",
  "key5": "xVEn4Fhyy382VPczgk4LmoCGaFtHibg85xjxpoPnUuYKMNvYyxLnzgdo3wtm7oHZ32kYwPEdsLbWr2bpMnMDWCE",
  "key6": "5oqFo82iS33JsKzx1bxH643hJv85fUQv5YH26CcDgTYhWw5zjzmqdVvphH2suNt623PrZqccmfN9NviNv8PBhPZh",
  "key7": "FQt9fEAKV8hvWefHqbiokwMAMbgouJypifQ14rhAJdGGcicFw7RuHfVuNbgPuHwn91kFGnzGUeJPzJ5GbicAGHs",
  "key8": "5Kx64C3nCadMqVKXZtvQfYEKMEZqqe6HyKHBbUErosTdWWzjrZzxAmX134D8p874KPSKKbJkTPswdSRs6q4cbRRa",
  "key9": "4VH34CAKGjrZ6zckA4DFKqzd2siBqRkQyYTPVUJAdsNYDPuM4HSUG8jaHYx6vJzhmBXtrjZwomw8EgiDEisajfmo",
  "key10": "xUoB8M4knwGVDjeQphDmjc7wYTecQoHSGw1qTxjjZBrzNC6euarheC2XECbrniHKPPWFNknShKbNU2fEF8WDz2f",
  "key11": "4Ln7yXiWgFej4uJwpxybJywcV9MS8ecVap45BqZr7Rb5KurK6v3WyUUfVmvt8ukjv46ECbWgoEGn5GdQSmE1CpR8",
  "key12": "2LskL6jqrodYZa4tTYN9LbzGjrBkgDsaHXJJwTk8yeRQFacBo47k8ZemcCi4FGHKfae5bxAnNXh6RjUqqveA99zg",
  "key13": "3uzdfXppxJNWuEXtB1ixp2NWnbA5322CfkEAAx1nJbDvUVadokNP2LM76sa4iyRHyAzk3WkqKRmaGqVbSZUr5jLQ",
  "key14": "4TamqUY1ZFLKLTY9fkyCvf8wf3yHWTwx5qTgCVFPrLXnjVN9b6cPf3heZgVFdCm46fzGj3SQA7C6kufyXNiE6hUj",
  "key15": "2QChomCLiqgc333ntpbaCv429mmFDi2uG7rWjmJHVfyZe1BXYtLW8BmpNQsgWpeMYy9HcJGVgJjojwU3AriT6ZJQ",
  "key16": "4VQYcrdccSgKPoEYSnfjmi2HQPC5enFoUGquG1EdydWmBjKQgtQsJmmJNCLNkjGj6GoKnRRtuKce54dpZKfW23pt",
  "key17": "2oEcR4wYpTe5CRdjds6MVEBXjzKfWkQH1r44QCKbdTHYFpuQ2gRhuL97ZcFR872mV7rUrjiD8XVAmMxTVZChdAAh",
  "key18": "5xV5m9TGZCzTyBhBj77eDavKK81CkaFoj5JuVKb7MsNjwVuobria6t6v8zUxDqC2oLAvTKSUitvcQKR7TfDukmeh",
  "key19": "eVdUjJw374tACT4S27vjNVTCaSktKVPLeyKQK3iVPsJLBRFY4kFt2Gyrdad2cNBMaEUuBjPGXiYMwG2KyTvCWYm",
  "key20": "42DNXRUynjJ2pXCZMXY1WirahnhjtHf1jhB7VMFGdsEBsUpWMYsCGuPyj5UcS4iwVrhnbNJZ9Cut9aAUxVj1wTaC",
  "key21": "2JCve8ReX2DXyuLMy4UWwNBarvejM9eJsR6qJAXFNCoBQEeutdtRLp6npuvTc5fV18tEDLhTaeS44Njmc1qU4j9Y",
  "key22": "4gwbUm8cre8FMPA22L7aN1YtjAgSwhN5VQz9JnbaX8evbhGBg3Bjy4eED8bQTMUPUZSAWJAPgk4K7GGz9tkJRSP8",
  "key23": "3UnFR8gSf6Ys697942PJCuyJrgtmWnXSuZ8uomYfSkZ5an3oZDN5ibXv7WeAD5ZdtfCDYK5E4N4robpxY5Zucrg2",
  "key24": "2gg83r2r2PKwtZULEDf3BRwqRZVXD1zhXzmtUx48cmi48NTswscfWQFof4kidg4vQPRxFskQYgAByr6z5UyAUH19",
  "key25": "3DyKrPS1dTSDkw1kcTtVaSEFKbhPq8jSymsjwL1v4pqcYCAfTer8LEugDrKRv843notrqVAPsmdqMeJQ1hj8caFv",
  "key26": "oT6D3GZCWN8jtGipqKLopfjCz3Ch6gJmpVNsxKNdnpqvRfQU5gRxdGZNd95NhttcLUbYvzFyG9ho2yP4HVAGMnq",
  "key27": "4QHPsBnSniqrZ2wJLwo7T2aGLoEQrBCu3H4sqkqizCwhHCSHEbD7JL8wLk3fFNBDXLzR8nN8iQNTBeVY65dv3NSG",
  "key28": "5isW8msv2F5uejqgGDDorF3R3RyJLbqJZLzHhRTNKVJ5PkTDhEouqmGs8TMNBcFmnL8BAYdEydCxNqLGmURssRA3",
  "key29": "2vZ5Z1uEXfaX6KbHfhg1NSs342TvuzurVZwU1oTiEaokXZ8o5GhPMXhjgyD9D4LLe3pd6Nc2mrBEK8GtmsYTmWii",
  "key30": "5HQUopqZH375YaX2Zk5sBj4RZyK7vxcUjSLwouBsrSdrkQAuFsvpPCqovDQ1SoeeUs4JRViEdhSxGsQhPneTS5v1"
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
