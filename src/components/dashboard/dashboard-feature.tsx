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
    "3D91Qxiv8kVb689Y8gvRV6CnnD8yCMVPbYDFifaTsf6nqbeZPtisQdy9hNJgkWmtvGa2xZn4PiXLX3XxjypBMih7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gJZCt5qaed7N6FLgz1DaqPep7fCAQpAojvkz4uNmf7inD4qFswDje59m1a37jrx9pTXYkLxMxckVPp7Jr6sM2Dz",
  "key1": "632Fgdmzeo5sPb789ye7ETuJaTzBPTV8LJYnztVfTLQq2FZptamRuBK7WhqhsDmxD1FsCa4TNb4agXFuXgqVC6G5",
  "key2": "5E68dHjFoyE4kSDLzFY6Y2TAxUp7fXD2abuMCtzMYZtQaQZCHAfws9DnrgTDXwaXpX9AAgLiCFjEduWNkVgdNNHg",
  "key3": "4DQ9wvrcVWDbZtytT9cEgEKhV8R5vSQBGikEn5fKXjyTNq79GKdj9EyXQdREijESGcjHteN4CGo6dyYhWsu8UJyh",
  "key4": "FQRDpSoJ6oJc68QHdm4BCLaRCXKNDkJ8FZpKaRrGVPt8ygakTS8MkfzHn2MLySJTXpmcbSL7GR2ZC6SgybSRSSS",
  "key5": "4UsDbmp2gvCpVnRbGZa7xrjYgyvJkzWqejkY7ezNzVm8PmQqe42JqZdPBqYwnU6Y5xrQTgxmEECX6nXB8Y1ioqyB",
  "key6": "2TNpfLiJ12MtLoAAWkGXeQxfZcoXLtHQ6TyapnTBnxHYUdUetub9sRRRmgPtV5nzuwRr6ajGefwCzZWRwEpgW4oq",
  "key7": "3WDThYxCciZQUDMy6DCZxeTKD1SwX6rppzqjhWcFoxjZag3yejzoykidbcJ6au8BeQa17WHkSrE5rorrVuFeHysj",
  "key8": "2TZQLbgeoXGQiUE5Y5qtJ1wfsFcvg2mzTENZXUT3NxZbDcWfGJVs6ZyeT58RSmgRxZdVW4vw9t5ZtDAWivfvYjHq",
  "key9": "4i59iVjB25G7ut5Nugv5EveNJivqsKjkVeeCUveHuYGGtgbGPKVYzuCPdXuhpraqCqQ72REuYRjd5NAGbZwYVqGN",
  "key10": "47eEKKnusXLn3A9Q2DvVuaaxXkkDjgq6Mm4ksDka3eAstjs9AtgBcMgYee6VV6QBtYro77GRDeNwkWAgC4cwXZSR",
  "key11": "2fruuGuP6hAWPT7ng4yi3vVzJE36V69khJj7GyLinY9rar2kMaLCUYj2x56apv1DKwx6SAxvYfpMq9sjaKhnUaAv",
  "key12": "4PHa43kscbHAY4EoSyXzpBY1Vy8CDxndNVKw5KhUBXoH8SVXA27PXXN145rxm8Z8pMpSKAJ4bhWChFk6y76KJkkj",
  "key13": "3W8npgKKmZ9KwNsiWjteYGBZCbntdr7rGmNt8Z7qixTpU9HFGpzBCSbnUkjPEnDT9JyLbvgP5AKW5ZEgnEfCEwXY",
  "key14": "5adUvAr42fasSgMvpqdVREH6neA9ECJaUSNP4e2Wq9DcQmXxDNU3jRN72Vkf7xiafLur1hmhQe5FWm5EdXhva2xC",
  "key15": "2QAqDCsdRsrFJRvBHm7SVZzSD6y4PUKnT3LcsbAVmJko4D8JtpgxKtiHxmt8qQvdYQAf3x6gb9zReiV8LPH1Vk5t",
  "key16": "2RVMSnT1Ss9iSzEiNQBKwmYQ4Pr5p2NGYUnqHnq66ZgdP32pLBR9xRiGV8vLgiH5yBC7sibYMbdkVmNqvvsnPhSM",
  "key17": "4M5GCgsrBybXwrZSinshmvBjnwPNWnGHdoXoKEmN5u4krTxuU69C9yH6mBEq1q34ngYZr7QQCPNnBDQabH4rX834",
  "key18": "3kf5zj6xNufdPfQqadyp1ULW1u1FHmnTyk4oWQwok88rybbkCECRrQEaxXu36tj2eZ448a2vv7xa7N2EaticszQX",
  "key19": "3dVy1NBCttZeUtyNw7eZCu5pteAr9ni1QXntpWhFTexvy6mnfoGW8sMQUExzYSHKK6XSzNNiezgmHzoR6WW53V7p",
  "key20": "2Ve8CY5usLxL8vZwvpr21Ge9PuF4dKYMCUVsi2QY7cAFLRdp9r3U2P277UwRqiWCoT44AyPigViqGqYpdH3W21T6",
  "key21": "4eMhQRvER5eUNC16fEP8Vbx33sN8CtoMnN7s8RD37L2fFH8UqjeBg4F8zuxr95aCSKG3guebgyKneZVco8WYa6ds",
  "key22": "4oUCf2Rwtpoa1tdeZ7eZwWvzXnDPkLF53ZQgrKvPoiLKneyoLDrm5mmQRXZ3pA7UCGcGCj2APsEyXK9sgWDUxqEZ",
  "key23": "4ZnS8hFqupQnosJyRSnCi7sPLtfaGPPPEnvfzisywiswEpDLU24hwA1fPp1UxWvyw2UQwX9UdSzN2FCoeZrQ4Vhe",
  "key24": "NHw8Bcp9EdEXy8SwMYBGToHhUJHgSVRnxLEynhLC2TeoRa2WTvS2wcJcGLz7QdX5Cbscop1SvCAUzrBbvAHRxHT",
  "key25": "3sbjd4gxBxBjYNyv6bV6ZqCFjabXBdGRJnEbgUNVDx6KwT1eZ4tEQwfzXbrVMZTR2uXivBjtZmCWLUDeDFvK1wEd",
  "key26": "5SwstyYFP88K3qwk4HQAWttE1FoERFk68XmP57VwBdkspVxpFhWrKDV4uDT6n5EUwGrL3831tJPopqPPfZVj5KG1",
  "key27": "4X9kQuWxGHjYpaRAxchYUercEmtBH6cbDa6asjvbP2jpunNu9yLDH4rF5fb3eE2rkdJknDqtdgCNT7SREwZef5va",
  "key28": "67KXiHdj7iKyWbhJFYCjZruhtHmgKhSoTLyGjTovPMG8ijvGUmNi6EpqYRWkoVQnZFR7eU4QLtTXcfwYsA1rTSqh",
  "key29": "2v8MWKFNodCnn2twhHLTEbyoCbAeoR8mAWDoBs9mbg8Yxc1dnyrc6FraqRkfHcjJxM3ejfSZXqtw7SZ3yBTNWvQ5",
  "key30": "5Gc7J9XhUeLEmCg9U3hecxxSYwmZApAG9ho64a89LroGnbghGiFp2cpNe392DqFfFWE9gXPe3zRqFE1YzdMpPujP",
  "key31": "25kjvZe8Rn6ww7Jgk5CiRURh73esWzkKmKzAehxa8KzLvq7NGtQwZMhogZWsct9LzkbjM5TiWUy56aFW1wiT2yMQ",
  "key32": "5VyENGJVfX9J3K83tzRWKpJXDXKFM78T4p2WMmCekw7iJifYyUQFmZXzqyUyUYnAhkQj6koQqpCKUuNHpKuHtNWY",
  "key33": "4rHbzXZh6F48zESD17rrXvNmX1XKVvJ3xTVM2wGjKUzXWaB8pbVYL62nw7Hxq1McxvX2ChY479VFjt1t5h8hT5hX",
  "key34": "54hvZZgXoc9s6Am3AxN9vxVM75fmNH8MrJzqHByLytPcctQ5nzaGwopFuj2YaCNpwx1sFK7LYZCp7c2u3cBfaaAR",
  "key35": "1FbnNR6UcnnBpUh7D18rnRZBKpTnK1Y4wXehxUS9JygbqdUqQwdgX7mdHfNReW711dMNo1dyZeWBmsMKbCvEoJN",
  "key36": "P2riG92vn1gtjsTTqepxnjnigswPiNCE1CicBz5dquZVrDLp7kCBndTvcSw2vH3vAizV5E8nrvbmixZRbfcUAuE",
  "key37": "kHrzisPuJSetiB3UKfxfngtss8njb8H2eb9bdLAXG2WfPy47GHFiwew2dGbyDAS42wAmfQMWjZEfFgsFVq9xpU2",
  "key38": "2BvAdM7G8JPJvL9orf5VET2BwLBBQBVF72QV7JyhH22PXVMg1PBZfjV4qkab9HuS8nesmAsxmDiHF6QN9Npj8YbE",
  "key39": "23M6e98pxh3QsFEXzWaLkaw4S9PbZuV6sYyicDDpn4cqDXEXnNCF6Hni76WMFWcrMrne8J3Fhyywa5bb7BTHjiBU",
  "key40": "3kzffs2tviJTDLiknWksrGXue7uFgrUn1sK45e7XsE6mNDPids9vA8TdUEwokRRTuJzvS9spWHebETcZSeK7e4UY",
  "key41": "4XB2uH6hZtYjxNmscZ7voKaCU5cCkDjM71MGMf8Z5FN3BkqQadLHbyjEAwCwVyHBh3xRAW59woZU3nwguW6bKJMU"
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
