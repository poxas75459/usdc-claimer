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
    "33nznJUkkVDfibQrZV3PmZt82Do2ZrHiJZY8gxyuVpEAXU3FBvxBspjdciaqMxJqbdXpWgFtmjCQhUW2S75peGb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cg1yaQsy7qAdU1fhftTSway4jHJMnbQ9ex6fm89DZCg6199TvKSCSJQZMAY7vDnXoc8ZP2aXULxm1PvCyNydGSD",
  "key1": "3xekF6N98NhrEbtmnbcZjRzUEL7V9fnU8iD9UJcQFyvZqUNxgMyTBGs1UJSMFP6AnF6uWAiG4TfrvV3PK6iFiUxw",
  "key2": "4UoGR1JbqKSxJKiz2XBxVpvTLoDbjPEYqVCTYSkm7dmJUB3ouZY26LDRpocwutNgRSeE1nhNsCoipL4TNM2GgnxA",
  "key3": "nDZ9voHRoCaZvZHZNsZgVGzGN4WY29sCgGhoZB5S4Q3tvebQBukXpKSvaJ1XPp5k8qajaRneY9uGpBdRfjnPRcT",
  "key4": "2f5A7UJG1YCoqtvBJHGtqS9kMz4SAVQRetLkE5Zn7UZKtJMbsCzdJ484XxjKTiUi2rk6GnTgFzmYHpE9ubJPkaFW",
  "key5": "242wp2bRgrDahCfkpeHbFbBu3eMpGwC4UXfxQcvAc4yMGjZi85QoTcs866TqwahaSTaQ5B2kPge95gPLXpftFyz9",
  "key6": "xrEJsTdcK9GpGQdFnEFVSreDxLWfRuZe9BKwkNr8Uud3863CJCDEprSy5rW9E9Y5Gjccq1QnZjT9atvCdTvUYAs",
  "key7": "3wV5uosy2iASQJnpu8CsgZKjjnkg9ksjsCkU3iS8EhNsPKGSbhtshq3c4Syp4YD2XPh8v2iTPKwcNPCjZZ8t7uJ4",
  "key8": "5i1KbuuW63Zz2MRHdJKf23haaSbm4h8FBa1rHxLdMAgtoxjJT5Tknu5XGZed4c8KDAYT3KDLofvx8oXeuMjf2zED",
  "key9": "3ouR8rG6q4iEgcKd6cCCAAzuEp3EB816sEDN1JbchxzXeHnR7HtdgRfp4pDnyEfshdGhMLv8qiZGejbqGCrBtkk7",
  "key10": "2TE7d44XWx2kE6gJfCH4J2GaYgEadF3LDMcUpECbyRpHHfoqc87sR6c9MFZ3fKbnbhWyL5rBp2Ad1VbcRPc7uFUo",
  "key11": "3pAW9h5dkz1WP5h8TdeG8GbvK3cMNx6KSXCcuRdVwgPfHdhYjDbR28bRoj6EvUXoURAX71mjJcCWBsdL3Q1czP3g",
  "key12": "4ekeEwtVPU99jGNSLjoev2ghR8qCziBiYajaCRX9ySb723Ez9hLf8ntmGRKLyMQmW5uCtwobL29J9YUmhcaeDPR3",
  "key13": "5XjyZ4yECmxc95RwMFzMr2LyfW3BPFrnghgxM5FBnUZz7Ut1WtQ1z8KYePVTinaWaM3E9bWj6iu4DCi64kEfUzcP",
  "key14": "PGPFezt7ST8KQmBWaabY8netReAXUuGxvP7ZKgKoutPTjy8pQ1A94S5sHnKxZCAY6qCz6kWFUXVMydmKid8jRqH",
  "key15": "3qyxFxk4izAknZSemKzAybVMBMdR6SjjKpxicNUJUNKxjKgQytJXw1bwL34djNpde9zQsvZiubevRRqrdCuP6jCK",
  "key16": "59dZXzLw27PngppfDS1wqPRqZL2WjRF4TLS1csgARXr3YSfioxtRRFY61qsMiB6x9VxBpVAxZboctWgDxjVoW4Nf",
  "key17": "5g24miNMEwWScTy4atkxCDWQexccG23iRNtg9Hjau2h15Z2UJqBpy2ebqPeJoBs6dYmjsHjLMGTT9JTWt2yGctDQ",
  "key18": "57bjsJxM727JtYMyeiQQxB9atxRzkzfiUp9Nc1zyBNTpUpepYYWAL7v93Fb1X3shf2HqP3h1kBrLxkwwpkc66tos",
  "key19": "52j6esLyaYoYm4vLTUhsykcp2ZNeKWdvdVER9FfvJPcHx6UpVChmx2XkeBSomSfqVZiFsBKKSKVqUD6xzKM3eheH",
  "key20": "49jaZWsiFJqUwNzK5cq43RzEzsnfXj5RN3GF1BguNdBVjUFhmDz2cCQV2r2RBhbQMFJ89m6RH9Wh1Z2Jo6JEm747",
  "key21": "3giC5SLXiMbtDig6sFV6doc54depFj6moV6HWSvgu4sboqaGuGdbE2QpZvskTpy1keX6EEX6reVJh4ezKXmSS7u4",
  "key22": "GQdEVJzeQJD4WMdPvDKVtF1ks7TjEfeVRDdpyPBLmbXX4ED15EpRcndnEm72NzcvgzJgJiux2JpNj2GRedw6jX8",
  "key23": "uZJHt5r8pfPzJWX5HMM4jFFXZC9wehZcvedM5oQauUdKdh6UMHUn2MZEvtj6oPJmBxefctaQXVU22onr5T56CZJ",
  "key24": "58WsBrEzmBH6CJQemLXzWx4LA3jijDJmYmKzyYzqCHWu6RT71gywVYbRDZZsir3fT83Jbr2BmB1gB4W4yn2Tn88x",
  "key25": "3U3cKk74buxkqr5Ufqtjxzy35T3GQDQcDGgLE2suMWMsj4FPC2Tr73fUngA8G4UpPx1hpQKtBQgZd3B4SRiVMBxX",
  "key26": "23LksjGt97bpA4NyKRaNZioXAePXdu7FN1hDDjSDuvofymghmAi5D4xamaukMbkwQCha7m4hNofryNJpKYpfne1P",
  "key27": "3voJMWSeGWk2bwobGASe779Q9MjNiudpBYKBP3RZtLNAz7V9e4UA2GFf5qDLJoatm3HE5dJUN4bUaG5LjLwvtLzu",
  "key28": "41uo8tWapewHUx4i9DrUj1kChdb7qdfQXf1DjxCwivocYDH6cNun1vGavz8Jf2vzWVfoDjxfS4NXFGbdARhrHe88",
  "key29": "4ZZV1r9ZCfheJhTrwZjzL1oUNLdGmQLxjT1aBbK3nLbpdCGq8VearK1vDVb1tWXPLQeijzsuDkkPCBav3owG2hm4"
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
