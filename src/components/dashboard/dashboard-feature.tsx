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
    "2XKcMQDGXqhzFa29ZUXQjpHV5obELd8BektsppCytYbS36xU4j3DrgNFE48vguUptK9bPo2ZtQZ72U4zMuXfqyeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nY7EWKdKE4e9eNFSWP2chXbgFAp8nLFdpPo7ASgbjRP7Ugp3uL8JbHjydsMbGsSMm3cuQ7u96WFukNQ6W2M8HHE",
  "key1": "wE6bmaJKLex9fgKqWX9BCKyTaokn384Ks22gDcqFAosCkMfg8fZPjBxkFh6prpKwo7GowjmnLPoktLhAqyRCts8",
  "key2": "3KHWxWDv4eWWkLxzPTWaBPM46HgNn4TCjeR9KmYqcGgeMNdemupT3SwgNyBa1TpwaJ2mHWE68ewVqqf4sMsfvXpP",
  "key3": "4fzLmbWRonrP5Du18GkGQMQ5k3DoH4oKQ8Au9H5TycDkAKnCUze3C1Kie9fqhVJ2oR1bqkyGv2rLQTGFviSAokHT",
  "key4": "3rai8s8Bhwj3H18ktKcxbiR9zHZHJAHdAXr3mMakne9JvyUo62ZFUNKq4J6ew4iLUx9kmuzX7rbNbY2UF2J1JTXT",
  "key5": "5TDA7tLpcHRR7XBCwrYyse8fT2jSdtnJ6bYYFMhX9GG1reTSAJEMTVwZiyEM7CqYCtc832AqWV4hJGxHT3rxMVCu",
  "key6": "MEf1SqQnqv3LqDT1DU989YdZmX24Hg5vFDmZttqsrrGiZp6v1CyJW3NoitnkXQVqHsXAvUXuU7ZKT3jZ2uVxAW4",
  "key7": "o7X27vMWfWB8Pazc72zhRKYYT5RhctPv92QfG6egMiMQc7NpLUg7ThCeCThtLfg7Yye48odwSrwLEAYk1xTA9Hx",
  "key8": "5E41CnSdXovEjqV3pH1fBBmgMmRBRjPT1SiXei2WvcHcM5hgsd1Zpzfj9Hn2PyVsnVmUoKgnZUrnjWfhdWH6yyx3",
  "key9": "3Q9N6PcnZaByLA92guUnG99R9N1Us3XrqUf8y4qJK9fUVDTTZWS18YxzFkKxLojLFgMoz4nJqSKdk49QhqpqwJMg",
  "key10": "LyPFAPukx4Fv2naKGm1cSpxgV2B841UacXe2AuMQXLfCNEA6RmDBZrq7hpgTSfur73P2LFtWnKeZTgJxCKFeMR2",
  "key11": "5sFvCt74EbDKZfK1xDU11bFTcM6ByrybbfzSzmGZJRt7mfsDwyMZQ4eKnuR2nqxYdT5WqDAL8ipX1oXBSPWXaUdm",
  "key12": "4DryK5aoKG7gWKT2NE3CASymdhD7gkiYQSNdZXkjoqdfDk7D345cyUxUHWJ2LoFcgb8ZXSzQPuCAcHDYZy6Qiu2i",
  "key13": "5TBmZnNQXX7NBNVza97mcuT2gwiHE84aTo7WrgE5u3HVJfrvjGmV4pYNiMaPFGCmsTB2M2VzEmtPFTiUTFTuJhH6",
  "key14": "QWcEwkXdEYtPkyDnHSkws7fWx37Ezme6EY79awoEw7sE6LR1t4U2iGCWK7TUup3VvPcg4yc9ixmxRJc1pnFSMR3",
  "key15": "u1tftWBcPYxS1h9LwPzhQngGJFVr9AUani13XocLPbKbv5mQk9AtjMaSYBmu9vjGYaxWoQzUzyvy7meU5yrpxjF",
  "key16": "4zVknLgiVefh2qgPE4apyDbbYSX7Ls2LZFFixuFehm6xwGfDXAwnApdnJLc1QEs4VtMwh9ikj517spkmC8DHEhF2",
  "key17": "4rEp2YBmST8dfqw2ntCnZFRvGbFqKDsxt9FUG81g44vSsjnMiT6VQAQMDzhY3pxF3B3QxrVmu3mTGwz9iS4LLi3b",
  "key18": "2L6862fcd65q3r95EqjbPH8QQeg8NvPKGFhM6UgaBiDoaJbQbutASXxvcmreGFPfSAqkRo27u2ofmC7NdexLSCrF",
  "key19": "4PxTvYyyZEWDrjvUccYKv6jv1kUFcPabBGSyqNRioTQ3imokHEN1VWKbdG6uabXquF2YJLQFfa68XdJJZtmrDVvG",
  "key20": "3x3eYs53n5xT8mXb2Z2noLCF4a55HKuTV8K8enpx9AX3AfHsEwRjsEqGhbCb18rz8ianmjfS2hdkdzUct9QTk6pt",
  "key21": "4zHnvBJKrCpKm8GMBi4unxLFNZRHa9imQZkTAUENkKJMutwxWBdWsbDBZRuqADmYdKuvWx4Jmfi2ZXgUb5Em3eyA",
  "key22": "3fTsKdKHWxUdtaf3KHqwF4Ag8gV9XF6eMKHuX9ErqBcvqTHzXS4BwnvsneAkBZe1VqDuJaHgdm31MZq7zMtVB4sh",
  "key23": "4ZhCFTRgiWo46nQ3EqcUtmAtEzLbc3ntEdVz2G9zqKfgpqXtecYAhzRepNC29XeKdFwQXKWQjEYzUhCpSnonKdXt",
  "key24": "5ABVdD2QmPo3eGCKKc3F1iE9AdGnunpS2wVovH8EpLxvuRUiKsbtFtJjkHTXYaXbMgJburcQ1TPQdMo8wRZEKtHq",
  "key25": "3ArozuYLFuAgSDe23YbcAvyQCBr8TsUMYioeiPZ6YmewCJya2qU7id2kr7yySorj2TJ2X8wogbSzZ58DREJrfyFM",
  "key26": "41YKQTW7x7v4wjZRbGWRViCwf9toMmGDpxFoVwSrunCNbKuZ9VYHPT632TRpK7hxkbjost2zwWtDDpiYsCWnAtTE",
  "key27": "k949vTPkqJzJFSzf3c2QhFNWaT6D12cCnHKqpcJTSsnKQ846a96L6b3db1CSHqi9qZNCYeqMLReXWpssGFJFoCQ",
  "key28": "3WguCadXWtmMWc4hXVydhLizmV3US8XVk4RjGEJRXiWi1V9jThyrSpgZUFSbHC9vbrZkjvURS1A9uxuTg1p85s5G",
  "key29": "5NrQcQ7VHRLjj7unoUe3BX66igga4tbvmc9BnqyuVcTaqoGKGi8zPfRU5njR2q1ZrVVDKy6svufdaDhmvCvfCoCF",
  "key30": "G4JPQ7CBgW2QcFPB8yyBZC3mxe29e13dfiDC14VWcHdxLnfgYLAk1WPnEHJy5UaKfbAi8RDWdjrZxqxMJB8w9tB"
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
