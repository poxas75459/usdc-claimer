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
    "3GrcektP4c5efrLjxFYuiBmg8CffNDnGrr4Eomushj47JaJe56qMjo3KKnvm8WYzt9tYAmyxqfHVuYC7emdt4q7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KbQXzwf9G5m8aMiYX9rDMVKVA97qBm2H1szk1bHr6PScUyiYMwzYfswp8iLAZF7kP3bKJRnnP8HLFTJz34rfb7d",
  "key1": "2uVuD3m9DMnhESsAF4nofaxdCY6YM1kTdbAKTHpyLiacbqRS2zgHewW83LXPgCDFbYHDo25bvwfkgQdMtidZpPHq",
  "key2": "bjRFkwQxy2j8A3rhD5PNCN1zNLGe7gYMPRVzUBMEsofU2HSuoQ88Vu8sJTVRtCvFZRwBgBhu8zg19GLz4nF9cXv",
  "key3": "26uxvZ6tTg34xyep8CWH9jm7N7efD3fs8gTxLHhp3N3avWqpzPT2zWhQyC9ixY3JBZCkAnvVkUoehPNGP3NfdaSF",
  "key4": "4V1ZwPpCJVKVqwcqGyt6aJqK69DVaoiHRQs9gEquRPHw7t7o46MaucGyaKsLT87NBSjWMSrQro1FexAv8vd2Vipq",
  "key5": "2v4sn3FEmjhpXv9bv2kwq3rwJCQ4PnWR7wTBGkKUqVEqCb3B8x6gkLsKP9bMW6EM86aJmQC1VQTxvdGSmEvR5PoZ",
  "key6": "2FZvdZrrR6Us1EeBq8aQ3vRUkSv99P33XLsKHVBqz4gi4Wc5daVAXftwAjxUW8KEMSY3ZpkmfEKjsnGXQNBRpYZp",
  "key7": "jiECqm2ptF6kP5CRFUHsnu6yqwrzNWoFxbsW7CVNWHzLsm7PmhJCT7uk9seG4t7F65srCUaYvk8J3HqcHxkD83d",
  "key8": "5qwq5nLfXtoYKcB1oYUJ9i9e2KeDWpe8mbMeT8n1dzXbwvwqrJ1JTurBZGChFPH4wjLvvDigKzu8HvtkqFXTjqdL",
  "key9": "4SEzBsB4PW5KChHaZPuM9jdeVXx3sVaKRKpCTTV93oyfgAE32oJypkYfteQSsgXSEaqpn2e3bDbEWA2WtPpfP5sA",
  "key10": "3HpQCq347R2Bb38etjmiqUDSwTRd9NmMcAXsHZGuC6wbZKWZq8KTAwgBsTvLyDUJjyV1hdbQ7hDzzievB9mKw3Zj",
  "key11": "33zi8NA134Hu7a4unQ7bw3yTs1c2L5X28HVReWCRRB3ju3VNZPpTvhVQ2kxJAZ2j5HvDkQEsqZRsPEnoMLbCL7SL",
  "key12": "rRf1xLCYHjey9X9r4hDBxWfoPzmd2gNotXAFhVNDD6wz23FJpCBjwscn4GcViKUrvjAFSJeMBjVmd1GR9nNkPyG",
  "key13": "4Ma8u3ykZAnsfsQ8FHNyomdzTS3WnoJPLKmUn1uunGEUjbX1mrXP62AoqaEsqLkFhNRJoYN7gT2xmuCB3xq4cmEN",
  "key14": "4CqzQHFaeAsV63UNnscRxPHyXvP3ZzNbu6fixJZoHxVEe72T9capuPHw3WB1Yuen2oyE18PF2N26FFQGX8rdwtaX",
  "key15": "2dxoL9XBCytz3St7UhmGo1c8wMmAYfUHokK2mJ5ViSBnt8CpAJNcs4amRddYCxxscLuRCzafe4hbCAMcCr57Powb",
  "key16": "J6n1bXqfLALwmS1QkRUUAxpUHkQycRFQTGziARfENRZywMVKdnBKkSdgjde6iq6WLNKKfLTvGeJZi9nibvvWXii",
  "key17": "5JQJ5p7NkZgqxLiPFjL8o3o1gdVFk41FZPe7CUQE9EHYyZiRrpqsANV9nhj4PsoEb2ytTyBCVBGq35Xt7JQMvKDZ",
  "key18": "4vouF2RTzSzTyB9LcBJUmTMoKXrH17r13yWWbyy4BrpwTgs3meqZepU119aoRtQgz4QfwPucqbfMYSt9eDUMjCdy",
  "key19": "or4Zm2vhpRVmsx3jzhmFrTKmhar4zHhd8d8PnuS8xmJJ8fXezoySUSVP5yqvyBFC6kP13pH433331pi26EqjV1W",
  "key20": "VXjcrVApyaNovUHnyvVGNJFzqmWWZSorC5KADk1569XAn4SyJ8aCBuEfZ5EMtVPzFteqmykyTtSKZX2VprGBAHu",
  "key21": "2dcHqUHyZV7SnceCcJwAhkXqjWzEi4gPcRMtTCxzSisC8BJk9f798kdsHGvVEoTTNF5aii48uJ3RLgmE4rmfhtNH",
  "key22": "3Vo97ncRK3YPbCGVum94vP2X67L14gPJ2omhQ7qc7KfUyvq2rvEvUMmCg9a2JZ2YbvcZDxidt9uqDnxGZqQHa9pV",
  "key23": "5G7H8jC5Pg1u4UXtiaycscG3egF8m12LR95gSLXS5pR9p2wqkUok3WWWuntsHArYFrwNfftsr16kkdALxD1GCAeg",
  "key24": "39rJU1FBjUTnooCHYwmN3VvcYbnxErmsLihAnsmSRhVUiz2fTysrL7GyXvJyRbZiHAKPdX28XP9xspYDT89knNcP",
  "key25": "3XQAYLXmnKcWVHTG4YpjTzASUsQtucQ6N2VjHg3DQ7726icFq7JUty4WvG2pouxdVYe47t3yNWKJsUgwwfSjhVAP",
  "key26": "49afU7LmwvUYhaBevoQJsxSaH1Fo7KhHMwt3bqoqHjWhrnWNmrrBATCK9fmGXyx4J1uxSvU2ck2TkXHpqL6fasTm",
  "key27": "7bmScgKR9fsDkTXfNuqt7TxTz1NyuKVfNZ48DQxsgHTL6RmcbD5db26sHzPXmo8iksZM328feyEERw6pUQrLrni",
  "key28": "4Krm79USrkUn2c9A9wgVtnrEqTMeznERGchocbmbNessRjhZxQaYbRUteawSyDMPPLfKWa36YaJQPwRVVVMYkyx9",
  "key29": "5yZcGyKLA91LuDbGtCoCWW4gTRcgBRp7soJi67pNgkCzyPNNW3TtPNxFKZ4E3qYbxkqU95M12rjPRakuaMvkbRJ5",
  "key30": "3sG1wGPvk86ghRGzB7xUd1gbZSqUtBZJ5s6pDNoQCvEvTm177QgJHzDWUm76PMCx9ctNbmbPPBGHEvhhveq6eCFT",
  "key31": "4wAsUWSc5WVrk5D9fDxBNE461FviFLktzBgXMY8wTvAtJmav63g41Hys48FwegNxjG9jVnUv77DQeU9H91gt3Wba",
  "key32": "sLseP6BgqLt2Xw7nTYL76ka7SvkD8AMDFjVVUHtSo2b2VD8qaeZVANRNSqhGbQDqfXuCdHkYGCrTPyd2M3yCLeT"
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
