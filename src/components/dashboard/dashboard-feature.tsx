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
    "3VSqpHo6XCSg7g5gHVqzWRwiTGBKL6Ejcksk12ZDZoBGQQxFRmFEeNc7qRdDuLcEZLeZN9xpaG3Dk6b8uFLZPE5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VVhVhwcWQPrfwheDmcZhJMgCXjx63msuDQALAjmPLFmy1iTAosCny2h9ptrYWgGXbxS9tvwTvgeB6x5n3bukJxJ",
  "key1": "dGtf1eNh6KJfTymVtCJ5pxcdAWzt7nZH1gUMDAPPpeRuGjxYnBuXbGvdwSTns2CjWdefsQS8zhiV8nVygRu3UFj",
  "key2": "3PbfYpgyZsYQ1ugWiGgmt61Uvda6kDRuLvWMinmeLQ6inEKgqkxaRXFd7yEyLHKGnEkpqeZKF8dWUj4FprDARQs8",
  "key3": "M7YyFnCuseCJBKB45fXmzGVtrvkVaoFMr7WwmEXu9PXKNSR3GTtKLmdYMGn7jejqVkSVbSpBfTg3cimHSi8AnsS",
  "key4": "5wnQpZb1KV5WLXoiWb5AnnqtfGdpgUrniQFFfLRVVzkEz9iNcd7n7QZqc3pgDUNsp8CFmhLMhz52oTinBpzSx1nV",
  "key5": "4SpXmY9PpcHgCqFaudKipGgkcurGeQvgpxj2qaoYTBr7CCFk2xxewHijRTP4jZ7kULKA4J44Rb3gZosC9JXveYjy",
  "key6": "5jD1vvTnVNbJXUgKaNfiAjiogcFGYnMPjEa2HVegKJxde3U8YTPbvezvGGZHUSwx9ptPyXCuqYc3YujPbtYKDN35",
  "key7": "3pADqG1UuFXHhwtAT1QTHRsJRBCZjw9zBS4GgEn6kYMbPjP8vStacMk3ZkatLFQyGE3PN7feJvGzXWJKW6csfrL1",
  "key8": "HiUNQ24gxP7FVfqq4hKg38zhHqsH232mharfMR2TNz6yj6LF6o8jDFyZesNjEXdwSUZMUXoHcWiWbg5VmGVhpm3",
  "key9": "2Zpstk72VwXgwMAYWSBi1PqVr5H7x973c9gMxRR3XVUjRGQge6DV1KrXz4tNxy8eMJ8JMivzRnzYP3HLjqg1cEm1",
  "key10": "2wxcLYrRZ2PktAMve6c2hmZ1kLEEAPgBmiLcsw9jnqxfXC93m9GaQJGG16orfgs9U1bHWSmdJZAdMfCxXtJZZuqQ",
  "key11": "3AR8d5Ku2Pwgj7CzPTjyPbFWgnK4NsW64cAQF33LuZ1EwWLbLdbk4jbGqM4VvigckQcHjkfweekGYuvVR6CHrFmP",
  "key12": "4TVoyCSQReodtbny5oHdbqUtkWeEeDKD9MYEeW13hs8YisYbbasPNmTvZsoGRNjkzb7vtyrUv6gfqfNQZswrDHQa",
  "key13": "2aGDKJb76E4oWe7e2DnpKuiiULzY1o3fpbcG16xWNiCpx69Xdfeapepr3Rc7vxazC9XXUH9x5wSwWXcSqshztkkG",
  "key14": "4TbBibQ4zdMfDXTxvS3qZv3DaWzLSK9XiN4BTypFqKss7Jagm5xZT78JkMRNChRMiaCmMca3PfA6tqJEMnf7WoRG",
  "key15": "4JJWQCHn9ZP1WZa8tzMcaydZBbhpM4kYVsAF149FgUa14iriA99GQFf33qHDF59gNPQKRzqkDjEVguANVLzkusG1",
  "key16": "4MUBvEfmWydHM7ZUSNWAj7ZYfxVUxhP2R9AG4qd83pniHzucwUbGX7tL5jpZNcCGVuEs4kAHeReFmnjgNVxiPce3",
  "key17": "4FqMbXk9mMXPbt7y3QQeLpUxGk7hcRSRWQgxBQANPx7K2Qx8GA69MBCFJ9YXCrAGxEMXhoDsnda7xwSVD1T3MUaX",
  "key18": "4SWjZ5qx8T2WfSQgwJd7upUHj5aQSwuvwNuFkxMSBAmjvvBjP5hmGfxhJRq1yWujmnCKbfjqbnyiW5fD3V5oNjs7",
  "key19": "4cNNgGkX1fvgfCDHC1CxZ9NHYMqyGGvdgaV8X4NSdQbn1widPnc6inm9twCyhFJBmnd9HAANicfLePUTsp75oCYZ",
  "key20": "32VGFXuBsX4rzVmd6KANV5NF3gyH3GzAq9uxMApQy31MSwmT9BoWmsZiASm8WC7EYbqTcya5DZSHJ9jcab1o4ZWM",
  "key21": "2Ux7GCGNrwEgBYjNv72vYKFapAxg8SQmJTBioLdAjb6CNqDTHceoLYqpjSXbwx6waBs4ZnKR4CbiuEYzn1PPfTJ7",
  "key22": "5Vsip7a7TubVYbqTd9M3oGEvQguNZ1JawXASQKqTLjn4SStgr17WhMoxvcgJo5gF4K7t6hZpCGEmcK6ygiyDmMqZ",
  "key23": "4qUoDcR1HUK28PmMnoJGUtaUJqAcuFb7Hc8zZUgQxNT1urj8vRBQPaW9QPbDerWi1dcGS4VA7CfwetbKUHtyYfSb",
  "key24": "49eaGR9hMxcGTj5LQE8Rtq2awui4MjXXUWk6NKA4D33zEFey6WMXcuRDPmFXYabtwLKjqcHpbsUXLRxR9Ro6tKUK",
  "key25": "5Y2rVPeAGuKiZj8GmBZL8NiUfVvZY6RQY7twQ811JwvPY55fHWAd2mLAP2d1AhGD5hGUYUiH2WkEqe5xsq99oQ4X",
  "key26": "27KcfXvZKPN8rneu1FvHaYxPGeq6maRA9ngEvqbgj3Y4GiGmuWMnwPnmKffTwCCee56qL5c4aryX67pira4Xn4mW",
  "key27": "UhmFGgDe7MQoyreBaEsw7nqJXb1v97kFtcwFp4wzQFvd89zf3ePULHiJa7cMnSRfC583c7sB6rdKb2ijgcuRpdN",
  "key28": "3M6BKdiZGAjSKUGebpWt6TAT9epU6ThxTeGoeiwDdkHDr56Brv6xc3cqrsj6eovyYYLuPeca59JqTE8nNfN6EEeZ"
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
