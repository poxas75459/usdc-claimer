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
    "5aPqKj9SxsXw3YJVBebZVVVzvk6TY3t7YLBYEZ5dmzneJ8ZBqdVN75hTsLU9CDEtujHVGaYbeC5VnWYh63G5Hfph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mP65yG7z4rZK2KKWNvtFsWjRfSbXHdTHnTG2w3yM4U2UfszWeo9u8smkShAdQJDS6KGCTq3RvGtMVLwd4YhdB7k",
  "key1": "63xDgQvmyMayfGMoYm8WUizxnx9nk3bY16scNBVypzwzqTtXvE1BcfERjm8nv672zreSAxSR5GzBVSPSkq3N7kKu",
  "key2": "4NfszeNQ3MznWdSscJNtfez8jyRrFJHJCyEuR7X8KuDsDEaMapjUJ8Eg8L4SEfKZfkTets2oXyz4vb6GEe9j7mmA",
  "key3": "55FAsxEG5eXmjDFxCaa4E2sfs5ZHwaymvRLfFTaqRRyBaVhiJ9ykKdJjacprbi3PXAt61dgzFFEutMFRqbtK9A3L",
  "key4": "4HXAeNinCE8V1caHCe4vgHgc6BAHfoHYFphF4Cjw18FeEQWWbtKysGooz2BGfumHZf1qBefdrUWZCHnL5s4ipCeE",
  "key5": "4GRYJV3VJAYCLBmqPXw2P9bBkkYSRbXFGbviiujPKdphaQ8fTApEeg2J45fQandbU9KWBeyggifSQis49SRDe5i1",
  "key6": "5Y7Sawn4fszmyZbNnkkHCJm667sETeWYmZL7q5BxZimyadioXCeVSWeAbrhnHijhcjpgJKhb83sU6digin5vZuUw",
  "key7": "T5WrM5vB5WqnFGp48PHoqRn8vf2qjL6PqtwNakghVk1vKxYszKX1QfH7wjVAQfGDNx266VkrGis34SN6zPeYYd5",
  "key8": "29noKPh3bMjtW6zv46MKrw8J5wu7aJW8qLjeHJENcSJsFRUdswFJ4PjvnbTa4TgHR8tMkX8r6mJoRDeW3APyGJiK",
  "key9": "4P1LnnSeKpzQYvQfcF66kRqoMaDuBpVeC12wvSPQHbARLA6Q7WHwgQuTkUUzihWdCvkXGL3jZvhthnkXmwM5am7D",
  "key10": "2hYCDidZ6fTcVAazeEPsRzkzhbDXppBaFKwiGNPUu767NNnBwm8bc6qeGtQojyA3N9hJgczm4RkFFz8DEX6vH5jj",
  "key11": "4E6rSBbEjjzuyZhjewy3i4yZmGynpCsJP3ti8uiSwb2Bu3u7qxhMtmGN3YNp5PmYcG4iFdxpkM6zK3cGCzrRyfxM",
  "key12": "2b3jptSbJWUtbKXjPw8mRnG9okGbbts1C6fRK5HKhHxfh1reH3JxgoKwsUVBWtEyXVJjmUo3nNv3rKgzaMgvTFBz",
  "key13": "2x96hrmqdsXU5pFFpqXEiq9FmF7t74gixLUzh5R49fm5PvhhnPLZmstFiywPfhXEvu3Z4A8yqFgpbSgukf1TNbe7",
  "key14": "2ZdEyJgH9G6hRijwJDVk8y53JJk3TaD87Mx6yFRxPUc2cQVWRusa6MSLmqNptg9KDuPXWY9rtxfAV2GCm7MBExEh",
  "key15": "3bqtjY2tpaLkT5qBX9mxB8ScTPrGZT6DAhX9XtrV7VWQEzjQd5svg5Af77mpAerfbAdM9S87YaSEChmFEHfFqrxi",
  "key16": "34w8SFywLi84NnjPciTktN49t7gis52Ue7f1skwCPorAHRvUP5tMvSkmSLWoY5X2tAe6BFvhUuMWyGjGS82SUyTj",
  "key17": "3iyP84NWdYtjXRVEvB2iUt15FRxPUqhwPYSznR3UxZVBoQynx4PBtzvGDcd47r6YTpAH2necRZRE5P8Eefhu3aiA",
  "key18": "b5jsxe2Qa9F2PTJ5te9BJS5DCoY14ebHrrpiVBgVzaRH5vtGT4VikS8k31XEme1uBbQyaz636dmKhJcs7sEBzc1",
  "key19": "5BtJaQ1F4aAPZJnC4qUhNkK89qaMJW5shS2hX2XuzUhmwYzdokcfQ9Em8Mnca72W32uDsRZwfZE4gtVhHs4gw3eu",
  "key20": "DQTjg2HHuXxpfzMNzQmqszwJ1h5KavDzsbCXXTwPgkXW8FoH3cnvwhMgnLeAer7Xj5rCXEShVyEd94zjQdUwjCM",
  "key21": "3SfW8zwEnBSUr4SPn44BqhiyR3o4h74aNXGPQHMUrs9DTwbunmP143fU2gKDxgmGGWWj3pB9BZcTPavvypa5YwWR",
  "key22": "4NRUPr1ei8vCWPkEiAn7oSgUmDumvC8TarjAvrByrTduzS3fsqw7Q64ARgBPAAXbszoKRbLKqkRvp1PxAMqhXsh",
  "key23": "4zUjuegB8CXPLBFC9WdPD5HYvx4xkNEMsqBAj9bz5qyEFyCWZkjmYduk2Lfir3cPAi2A7X6jJnQz4gfLhFjdzq56",
  "key24": "2xX3thE1azS2LrT2WHBTF4gjsHyH4a3N3LbiFFdNiAV2is7iJW3zta4qxrt5d5PcSWSdkoMSHSLnRxVBoEoWLYzu",
  "key25": "24jCnChqfqSgXeVzMD3wLGmzGQ7Vp3pXPJApN4uYnwhsJi7PL2KU3wqazNK8qc1GKHu82pWrj69iqgb3hRHKcAGS",
  "key26": "61dV9AdvFs71dpbSTkKTrg2T4SNj8WvNy4R1UKNbfKPK3LM5fCBZVNgHhY8DVHbzrYEpeqzCmT8QFfAngMsxoe8G",
  "key27": "3qW1djmUXui8gJZGtUkTv2b5UdP4yh7pzunb62VTFobUDoRALtoYBGnk7wPt74dae3NbeGNdWHD1dV3xF8FVwZ8K",
  "key28": "3soA4KbkVQWVKAz38CRAdfATnddVyqGtubsF5qGPRxbunqtygNWkbPEZNyseJ5nu4ULVgSTtgmTjPZaLhkrMHqyG",
  "key29": "3RKGDoiAiBYPRU3SNBV8mKk82JBX53CvzJYSGS4hHdzRsVV2pwbj4UcQZWA6Fu2Spg2S2wKismqJJkN27R2Vrse4",
  "key30": "37W1eZbd4zyxThZg3ECV2zY5J6qg3DpNqnbubYQoU8XBwcknG4G73h5ZsBDNzchNmZJSkpzP6zowusLUYy5iHaKJ",
  "key31": "4YUBHuFtEzf784Xeo9wKfB2nLR7bQYyMSN7pRmXjYsSGRCza8TbLdvJDGZDhD4wU7y9kqLJYzPpEMXS5Q8B5Rndw",
  "key32": "35JdXxkGhnbPy3bioVaFEDqDjruTTP5WEuGopiZczCDvTiUFY479YpupE2Zfg81DL87XLrJZ94kYMQyHuqFj35sn",
  "key33": "3H5umBHNUAC6dBLYRHKvf64PB9iSGErFv22o4UguLVUYPxWzAtA1aAo3bAa2CCw5Era1jSdvd9bNYFSY3Qviuk3Z",
  "key34": "2ACWbQQucU6wYwt7AFtutBNnzj31NAAF48pcfEkJAevgR4r2nncsCDeN2xY9eGYiURP4nLVyVCkqEcRV55bi8FNp",
  "key35": "3PnoD8jfULzzob7QAHtHEvQ7UMuWVA9PEmEeP1dFs4xnTobGsfAuZ55PxVfaCTadNmjzbDsZSPQj25YpH1CeyHnG",
  "key36": "4q5Pz6oUK49Em5AxU8XfhMTGR7wcf8K6anpGFs9d7Aj3QyT9UiCvhJQhcrp1NCvpNLnWBR53e9cz9x1f39wVXt6f",
  "key37": "42JPVaPWhMf9di5D61Px6RnroM2vdK8gZN4QFHQgNSz2FXMb6LBVSdGGJJpYHGc8pW4X5ovEp4MR8E9orNQmnzmS",
  "key38": "3iLs8BEwhSRdiSNqnmo7JChchGXUV2YT1LsqViAG6FhVTpENSAZBv951ZEDWdPtdE2gWvEDuN8KcLzqjiJ1ADfdL",
  "key39": "eZQsHwukH8F7RkeFmtUvtvpW78opKw4QGd4ZHHY3eRacV3UZBf6NvskUFjnsCBf3gMLA6WhimLrijFLmF2Nt9o2",
  "key40": "2Crg6XBdGihWQx6CMjbQPWopWb5DNvSrMGep9kcPe2vBWzAX745o6zDtsotLpdPyXP2feTmbRTKj57hZtzGeCX8R",
  "key41": "2MBy9oCDA8EuHhVcqy8SGCH7mftjvWMiTjYFBFkNrKBYHT4UDUYacGwQfkiD7dqDrHxS1baPmpUQHnPJvFNCwnjX",
  "key42": "5gUMQeCHjTuukC2vSBp3mVtxeX4h3UNKY6QRGDvKWtdK3NyB8xdhiLvoRDYnD278qNx7sm1NJe8C7XqCrRRxtysa"
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
