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
    "4Q4TqMTJzwLJAv12bStVYzZ74RCo4brxuypvcZUD1RYqE94CsAsJ2gQbGzAE72Vw6DKEu8Pb35Azk2Bh8CtMQxhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zc9aaifaU7u39ar1LDHYEZQvNaXRqV5QzPmWzpJg9tAyQGYJ6bY6d34JQRZLex5rzJjhCftEqbMbrJH8HAQTBNc",
  "key1": "2ZDrmbGfswSUAUDmjtTohzVkcapueKuzCjovqaJFSBVaxhQC4pycFgf1zAgPuLY6fEurcCEQhAPRqQc6u8q4GtuR",
  "key2": "UcHaRpKPY99qX4Xv5yeamMmXoEqqs9r6Jdw5cc3C8x4C8anBMfJVvawZ2oaoXWsASErV5Vx63p49V1kRBLTfmS9",
  "key3": "2ivGuS1vaidbn95spAH8AAE4fU9RWJv4u8cpW77Bd4KtAszwJBnJQsJvbrcVSwB1j3eEmdhos1YugvXzw3PGxHJt",
  "key4": "4nju6UzzWbVqzZgu9D586LsXEcVuG1YgMn6ishQgcdnnt7TtntMgv7be6udnRVKwrMViLD9rG5fUV9LMZ6TK9P9q",
  "key5": "4UjdEGE4b8nT827sYaYbnPu96PJfNNHXKcDaVUPAJm2h792p8vD58AoPzK1iPbCWXspdK5cEYDJMBVWtZahhmdmS",
  "key6": "5KUDtHDFTPeNUTRpQYh1q4kACwnQxN7MU3HaPSPmFGLVxTCadfnfBC4ugH8BUGA1SfeNp73G8gNZ8pdGu9Aiob7z",
  "key7": "4FjRE1mHWwvC9VFvhHZNHzfmmExrmhPR7ynBNSFc4jrttTA25eMBMMvH9kpQoAVzaP3FUeFFqzjvVKcKmgAzzYmb",
  "key8": "3cJVf5uNE1E96AiRPmWUMKfPeRfbecoBwxkXeWoZCFSVVk544UbDvh4MhmTfAp8WizsR39NhgsdQPCcUvqNDiwSa",
  "key9": "3ZJQQLvxKEZ2MBS9j4GBoqyDB2iDXFKeXdaMPva9783bwoPbG3vELgiEkwy5LLBXfo8Q3EWRn8B1u9iQijy5sWcg",
  "key10": "UZmyZakXNrsWQeX5RsQTBpF9HWMazkyhFnsfzvupLLNANnSF96RL2Z61ykPTUQkjXz3aZU2qAopfkgpaJBzSWMY",
  "key11": "64kE8zUBBzUxHdRgzFEZm6m3dQixVLu41LbH3vkLnJpmReQ4GWZSGQPDi1kWvPBK1UpEXzrkZX2erYUpBkSgae1h",
  "key12": "5Keb4DEthgPjH1QMBuT1GdKhks4LymCG67rQJA25EviYyu9qjf1dcTt5bTE3dC49rYj76PexMmzwj3UMozZLb7SL",
  "key13": "428zgQPeA4QF1CkkmjGvqkh6eniwLon6qCag8HiCz3CNcRyGncfhX74zKuRQ3a8EMvAkbvyw5XSccXobftWiUgb4",
  "key14": "5CHD4Pig2tBL9KiLhrsvo7Z6MG7ih7GRgGrCYyJYfpqMuUimkusjHrMetBKgarQn3b3RLEpi6gZTCwff1a7726pR",
  "key15": "495EsoFWqsr23sbTx7ix3sJvv43jgVytpjBRHEkbJ5xMPzVp8sKKMEiAnYd1wrF28UKnTTCwN158Q1gyfAEVoDm1",
  "key16": "4s36siWcyniMTpiwYMyKooKmLuC2xfruBXG3t9B4axdjb4SZRK1vaQx41p6PpcrQNJTBQ4MTEtr4tTpF5DEQqun3",
  "key17": "3nk3xH447D6C7bGQCftMC4zQ7nNwxpPbKRFF5HtXKeUgZ7ViTpjhM9wr2XwBVYGn9ELovEWst62VcbL6QEVAwZVB",
  "key18": "45aGioJ53LbSCKeRowEZi2rZ1pGmEzy2eEcWUG6PhsR9trQopegEeEu7hJ5dyLT68546iV9SRYpRgjVTnCSd5ch2",
  "key19": "4wF9KpceYyT3ZoZUtjTeyC1W7DKfn37nY7pkXTu1wyZNTZESVhLWDMiDZS9RAyuNJuHoQcdWE7fvzBRvTKzxwPS8",
  "key20": "2UvVsH287xvsicJqknjvgGfYATxHpr7ChH3VXeQtmLHBG7NRVLywkSP4t6qzT7CKqEx12CWQyowAxx4zyd9U2xVo",
  "key21": "q1ADY8nJBueKWRs5omA68BE6tAzKiSXMihpAaJFxkHS616Auw9aTEqCwC7oMkuCYJFH3rwQBUu7juqFys4mvba6",
  "key22": "4ZgAkW1FYwGqexWfHRt8P7g1aNrjWxLVRgBcwYqkP4CevHy8nmS1sYvF2LgFVx6QTNuCDsL4ws221qpbJvAZixQH",
  "key23": "4N84T1mmxCk4EtTuYZMAuU1LHDzxErBfbCUGN1nMY6T1u7Go61TxcpaMZgwVCnhnC7Jr8jCWqceWEYsJm8WwVUNy",
  "key24": "65HK8pCYVHKJiSqx5hSHjcdenjE6zYSrV1iteqHyDP5JBQmVatfEd6WBPpTMHsj7dNQ84DaWGNgDNoekVM4UrE3E",
  "key25": "4dEaw5qoTJ3qKpgexyYo5Nf7WLURBSc3BtjGoGFAJiSgPbUzCsMZmrkV88Wk6xwXhJMk5Ysa5zqPqRUT18kCyUCZ",
  "key26": "2oms3raE8aBKSSpj2WaEXDkgZKiiVRrFSaZJ37bkH4BWuTXgFnfFejYjjJ6ar2HM6i5MB474bt9piizjAeGGbKGb",
  "key27": "3Fu3Hdzv6sAPG7BRtc72KbKGcbiMxWztjBfkF3WYEssA5nvtrQZZ6bYZT8svwSzdAceC82nt21zL1ACYfGZGLaG8",
  "key28": "5XD4uMvaeMyZYhSZrKJ6gQxxxTjqTxWVzPvB8LvSZKn84W9tJQQQJWhqZR11E1twzRPc3Yfmv3SP5HDFcPq3e3Kp",
  "key29": "4cyBow5AjkRmF8qxZ4Wisdn1gG7z8jcZVLaP7YsiiaKek1kbViQG92e3g9L6LStt8gngHiGgtDy1gGb4Buj6fzQ2",
  "key30": "4a5KtLXFWMroprDzXi2ymQLa8m9Fsb9BB58WCpEWHjo43h2gnsM3zabNJQZUaA7w3khRhobexwHCVAvzvpTNb1wB",
  "key31": "4WcJJcMDXdasF7a4n8eiXjb1zTVBUuCL2Rh4rqUbRTQ4reoJ9PgxZrkVREE5vhnkQ8MUJf91h1fW9nEvFL9kyxhU",
  "key32": "3Dgaj3mbbNJuHsMUF4Lso7gWe7Gg97VUpj8tFyxkzsw8xmwPKWxTSvApuK3PWu7X6o5bFykJPdhpqT5mTnvNRsZX",
  "key33": "5xrGcxtc43U9he6cieUyCcpBqLufD17ASQ4KVzozD2yCLgxWqu97P7zKv1ncjCP9VknqVjW62mmftHHXhBya8D2H",
  "key34": "td6Vwab93S7K53M9WXd87QfJPvdJHMSmE2rD5AEciMrU15Uo639gPBvGnBPU4YY4f2meM85NQUyhi2DNLffAMAs"
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
