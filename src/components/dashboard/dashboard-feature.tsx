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
    "5wqMZUUamkcjuHcztewJCx34AgNDNrX5W3VdaStVbboGM7Lhiu3dGtoQJnGqtN1wcfPwqsDLwodMYTQSYnGB8VEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rn8hEVAXcbsoJZE7uJLq6uJg3ZW5UDKfHDAgEfLdNK57uovz99xSGRECchp3Kij8WjbtuVaMR1XRBt8nN22dYKL",
  "key1": "3QajDkHboDnuzMSZ7iLhzLZrmBZhgkh9N44CgeMQeCgkjyVcr9m9m6TyG2Vs96amaexou3Cna9YhGxAmey4NEZwf",
  "key2": "5ouWDPpkPesYuti1Ls6ZQc9WP1sxyZaLKkvufrUau8FBHMVp14NREdWevrfUEDmyVudvSYpHfHvELL9TheP9fhmc",
  "key3": "61wVK3rMznDArJTtkj9YSnUKx3o4hwx2sMfJB3FVwqDpuJRB6pTMzDC9W3hDHZrQUNUvfStLo9mjn7kJhVzSJcxf",
  "key4": "3qtraPYNqJwW8hJTYRorNvUoT3bRhs9VRJrwZxq6rnwY4tBQ8jeCYfz3TWk8hgP4HaN3BA3SvU2vLYdoYXYmGsgD",
  "key5": "45Khp877xhDDCpRHuFXNVYMBRfYjfEFW4KtDJMMZtoqzfjYxLZVAQ1pdWZJ19QitmrFenwSpCb7tkuXvXkxvVxbQ",
  "key6": "65yohRz29tXRbEsxvqSTJtzk5od3hHYtNKCw2gwXpH5nmEbGxv61hSTx5gLy5tWo5nzTjYiTRbyrvZ4JTwTeLcwE",
  "key7": "21XJAoq8RVeTRTRRWJqx2ZGZXco6jzZVk9WnB4fAaw44gk3BfHY8hRPf4RDNdZqcBQMf4CWB6oeJZhTWHVfbMrYD",
  "key8": "3b5q5cJ6ub75iQnmePNoJ2D4rHxodch6v7qWLBTzdMdUTDX5VXsrE4XTNgx8VGLyabaRB3BXBLWbLoVd4j3HZyE9",
  "key9": "2KT7nHmVrAPtBfzK85fs3L4oPCXiQQkvCy2yPCHBcVPyEV7APgxUjvZq4xHQkgi83VmsWdSuoyYKX5DBDyeixwnV",
  "key10": "3jADcievEzGjzvZXhK5VkyDZsKK85x7NWUWhwLubC23G3k3zErgjzb3qAwVoRWLchZa2Eq5G2dd6yNRVJTJizdh1",
  "key11": "63qRmWdvFVkvCqcPSPh9LriCdaPgiRTBX7Ek1FDpxGth6jW1Wpb7ykgMFncbN56qvAindy8pKFHsUMM586gNSYzn",
  "key12": "2Gysuk1E1NwmVdTPXZbEjPxoNvRcSBhkNQ5Y6jRBPTa6LgFx53Vjpt8fQJTLUqQu2FPZx7r6BYAFJLRFY8PHtmQY",
  "key13": "5NAKkydvAGQfeqTjb1nqCSz8ZuEFGN9Q9iqheGAAuTccBVmT61msEfz9QWsrdqYB8WvH9A6FDWc7vBGwSqY5HBH9",
  "key14": "3WSc1dXEj1QJhdGJhXQMnNoVmKNMWwuSGm2kVbxAdpMrgyh1GHQebbhzgUrW8pDPn3jybHobLPRsD68TbLKzwZpY",
  "key15": "4W5Ks6yGwaNuY5iNmtZ6yGyKVg1ciSZvMK6jtwrXiLyRjYLwNEXjTnMDj1pEHB6jf6knC4JzLX4sqnVk6n4d6LGx",
  "key16": "4s63LrfPvXxL9u4FZgWdWzySfptkaA1CSgdjahTCrn7SsbLKxXjCmNHn9MV6e2fPRzLcQwBBj6MuvTS9gtSuoEir",
  "key17": "5uyL2pFC1gvc9qneDkYBT9ZcoFdK345ELsw4cW8H4vBLGKdaJFp1EEs9g8ympwvPYFLbU59Xd5fjjJootHAqf3aF",
  "key18": "wJqYbWtf48up85Cxyvq5Lb2j9iPFo1nzM3xry1xB6EXyFM9jDGFTt5zAJKRYfNDvdVx8w26TBfEAmA3CTVn28NY",
  "key19": "4Xq2kgNhBwEmQEPFQF8DH6Wyc6x9jir2FiDA1FFz6BbuVHpR1AGXLbGJ3UJ46wDc6p2GYq4PNHRnvgiUdnBJh3zK",
  "key20": "4BvVydjNH6VCn9RXhKpKbWgXoeWLjyifqkneBgeX8bM7b7GMyrKY3qZ84DosPJXNdveXHDm4BC6vzMy4wifPeJPq",
  "key21": "4rdjGnrYiGh69dKNbj9ndeh39foXAogQfo87yvzvXX1PoiUs6m7E7qjWq9ConQe6MUCPafikpWPm4jxnLtNfTZGH",
  "key22": "5d2Tv7WZEx7Dsv754u1k53naFbuuhyWpzVL5XuzaxVHwLZ3g2rtQAqaLpBgqg9tQp4edRSdWK81wXW8dhsM3QUdR",
  "key23": "569T9po9iqtGvdenBTzUvbyg89b7JsyQyD9Cv4Qy3AxaLMqZDgoGdsH6qZV3mq8duTzPLYDc5Avc5VkMtsX9qPQy",
  "key24": "4DykMkzmBxxnJoAq588Zy1B7QQfgzFGW4f3pNK2S7NQ1jN1oRcJfzWvnMyQMvvad4cXuQmJ618aAgqvyEEKSRJAZ",
  "key25": "2XVc6prrEFwiUpZs5W8CVEGg9NDXztpGhXU5sk35iqfcRbLRNpFxkpNkaU5YtUj5V8BGEjY59Z9CZhNNLKw37f94",
  "key26": "4qCXVgVrKBRdfShQHKEibAogiAp86zZ5H6JMkXbrjFV34JxP9b8kzRUozhLc3mrVBtGxkFGKMPd4jMigdsnkVbrD",
  "key27": "5AWNqS2sMnxQQVN34SFMoZNiJE87rVn7uQqT57vEkkRkfCG2nkJ46eFSyncNBqz2WEJqQRqG5LAnJr5pus3wcjXf",
  "key28": "2EZfofQR9f1pwptSuyeiUWzhRFj6ZL8y2bqncsN5pT3vh2V5aa7FGzHw5oRYo4RWDHvmJxUJTi5FsM4JdQFwy3zq",
  "key29": "5Up78v6wc6c2Te6HSn35ANXTgoKX9sv69yWcHgEKxCufQScGY34tkjH2LqYmqCzVr6gZ89T4heCUobrHv6GVwqXg",
  "key30": "3SMdcWxqFKsiM3A9R5rK4Ewzo28xpZ8JYtvESFnDViwo2JhP9DvrDiGoJ9C8zF1XXaan8WBVuGVp2GoAVgYuknmE",
  "key31": "2qa3NE6hBAtbrWwuAK6pWUzorYH6sS6CWpTY32iM2JQHUcczfj9Bh73ULTGNxspPkQFa6EWEKAtN7pPGr1D7MxTD",
  "key32": "t7sJbHGwHMMvAJXxxtCSp3uumFtUrmWrd2CZ1x37tBUA9tqoTDH9XEZuFba4kBtmfXURQAZUpmVC9jJn1nKDF9z",
  "key33": "4rvybcxVBvQxfMCXRhJTLSTnSLocAXXTdQYyisv9A7dd7YGz1pU13XqpGPMkNWn62c7NaK8hJhZr3JDErSLTh3Ts",
  "key34": "vmhAd69DUS4puQi9AUHBWn6dRRc41EAxjUrB2s9EEtZFTBrPhLRn9yT6fgYgeLWoHvpn3wrojUiF4VksXyFU9Uz",
  "key35": "SamfwPdbGnEud8haaHmeeSEW4WobCRU3bAnZjGznUtqveRkLWaYFtjCu5nMTWAhUmDWUTNd8iMdzd2yuXNRhacP",
  "key36": "3BzXsqP4R2bJsQSaEDiHFbVis8Pnj7HH19xeQ6848uLV7KGUEkn6nnKS5LwAok7rpgKaQq5N21RCuTTGwh7LjugZ",
  "key37": "2BEcU2UJGL39pwoP3Se682agcYQjnC42SH51HGRXjpa28vW1Gaq5fXboYX6Qcy3NwEL4VR9iWu2pQE8HGba4A4xq",
  "key38": "2QVpB4V8L7m64wugckMB2hkWzuGVxtRnEbxMvtqKpDmpVnvcqoRzA8x58b6iCGGbNUw6tnuyAJunnPAtbbF928aP",
  "key39": "2a4c93dCvCkuKZfymCFA8DMLzTGf77JrNvX64PsjrRJyxv2w5uqbamf2a1V91XCHU3PchYjz7zrZDrKrtMn9Wmei",
  "key40": "3iv1cWZaa72B2yLhf5PDpW9QyzQu6YkRnNs8fpzu6r1bVZhbKfq3CgiybXU6fEPh3PjhSQncX6fSNqFo7kdSBTSj",
  "key41": "5KERhfCuz2QG4f3sDwFywc8oUXruDmf9kvLJbDfYF8b4SyVmWYF6Qxo6fn2KcEVoTndLTXh8D1cpjuHgyo4hvcjN",
  "key42": "41iLHBtUAsvfnMAwg59mLjYse2Yzz1Y2KSZbp6wUbbsdJNr5V16NqCX9bSjG2mMBfSCVoR3PCCqyU3GxwsFLkWbD",
  "key43": "5EQE9Nbm4AjBvoSHhBLNCmMxxRB4n7E4v4q6efrThVoLfDTZ5XCiCbMcthCEpSxZcVxBsuXBuxp5XbABEWHC3w5z",
  "key44": "4oa5FEH689zF9G7mVvAG66HGJR2vmx9LT9yCexCrro1NCkvUTdPHpLBvbuoxArbqbt6nRm4scA9Kknr4TyqEit62",
  "key45": "3HVzQDjQfQcHN6oU8M5jXktBnjJbBQkKjRwJdoD1H94ZegB4AEF48bQyKgnWN5guSpiS9iBdedQX6BpxFhrAAZVN"
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
