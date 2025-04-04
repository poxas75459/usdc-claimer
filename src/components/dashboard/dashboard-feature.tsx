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
    "2fNtuWJitvZs4QSsP7hy3TRHh66z1sGSrApcBod12tCCPTb7Vh6V3s54eNpTUocdQPuAnnrGFYpVGioW1pGnzfSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "515NBtKD37MCq1yhD6peBphh529Hs2yMwTC2kzUvefwJatVXVHzM2UcLABix2kDskX7usYH3S3vbVGm4mQBC24Np",
  "key1": "ufbWjnQLeBtYRkmNdmFvFsWt87mMDCzSTrtJe7v7KZSgm3h5g6emtFqzwdkrxMKrSgdCtqo9dTFTQnoNsJS8xuK",
  "key2": "2CuR3YeZnBdNHFdC2Xxa9daHSutNyQ3vkkPW7Vj8XFyYCP3uv5XF6gEndeUqmt885USUABaB9rB8Wf2TYyeVDoGR",
  "key3": "h85rKBkgUuaEGSrqZLjG1RJGWT5ouRo4m9u1kN13AuovR2uWV2RbCPXVJ7mNqsfeNrk6pnybZasztfqQPVv8Uk2",
  "key4": "4samp3gcHJc1CDvQRcPfCtHiHZcZ8koDMRHitkfjbVXCipnGcUicMg1HeTPWUcHCmXuqTNPi65v7QRgdPhc3e2EK",
  "key5": "26H2cSsAne2LAMGq2BWsXaxfTfiBqHy8SPvPZKZYXFQhmE9ec1g9KGWKyK7AEw1RzuiU9pGkhEWT53DnpRi26kp6",
  "key6": "61rEWXNZBKiSgPfjPANyU6YejTphzXjY75zYFs3eob8W5LRQZVRPsxNyDKZibr13Bza1DZTMXaNRz7VXXBGtMRZo",
  "key7": "5PAUZKGRfnNwhEXdYqhMCNuWiVAKLDGhZ4aTSQea6RhoqzGQsUHDJ6XE8eS8dE95DRq2pUh1RvmjaR7N6K5CgMBZ",
  "key8": "5isugRdVbdA9B1JAjznpc477n5tRs2RQwG6uATrHyKLLae5XZGRnLj2BMqgS593hUHc51YXpBuuHsjFU1aSsbNmT",
  "key9": "5S4BNDsnFTZkby6Y7v9Bjktr3eQPrNYRkVNMHoXHuX1B2b7n1JCLmAqxvMGkwzmCNsWS1GExMfRSzMkEv6QH2ryn",
  "key10": "2iDuSrwDo4tggSzQXMS2FaPbitK3XGKw16XwAxgGRKzyL5SWxGYVf3JWcGjPM3uqESivygNVbcNrydh1LcZ8Qrih",
  "key11": "4GqWHDNDEmpkYP2kwFgaS94qkX4PPpQBK11QVEMLtzzzcV3RjqTYGBqj65uhuC6JxvKhUem1SJ7QLdf1B6AS8iuP",
  "key12": "3JJBv59Z2RJzDYfx3vCHgxsfCsoUsTPxKQRRRbXRiBWirKYXA7ujwkEN4zd67kJn3atJFMhCEPyvPijiFtJBpz32",
  "key13": "5NPWXRSHMQnSkH6qd1o6prQX9pwHBz6tbtHFBtkAkwxCfQjU6oaeg56fC46JzNMuSxe8df2Hi4V41zLAHbVvZKur",
  "key14": "4qAuCesT3t9MSW2WtrSb8j69dTNumoEs11syQDsuXrVwhTzpLK42A1dpRYVdv7hzoKBsTT3GrLBHpRKjS3wug9mz",
  "key15": "3PHY6WYM5sMru9Lfr7mKcamGKj96NMdMSzYp7ViEobpQvTBbvHeaSaqeEXboyf8yhu9xWSGPYZBomhkAjqToHSeA",
  "key16": "2wcN7EBcY7rRy2vV1a1dVzMuXyPdZ8y9uoRmKGqcspt91ZvBKoEc1qmDsPzJmvhhuTrHQq7Kmw4833nZkAa7NZAf",
  "key17": "4h79k4hMxgg27WrkZxpSs8yjyyWV6rQaPHWB3STPkTuwgwL2TgX5zhTZFFFoRV1XQ8WAJArwYYUGzYvTZdAaaJA9",
  "key18": "5STK7skZwdEKztBxf18n3KLoZ5uW3Ri6EdAAR3mjGZzsvdMRw4wEgAk5iWaybV4gKK2VRDV75j49oDuuDD7ZZpku",
  "key19": "2h7pLvp4M7HmoUqaT3oTvceVAyGwqHzrZRB1u86uAH2TPpFbSA1WkrfLTzKqXSCoZEgPcURriPW3oVAwDp41AkhF",
  "key20": "2g5972BjfsRzML8YehUsxwUpJSUh26gEnYi9AhjSF2cRJ44XXFQVYME96DcKmDCbr7yRggnQm7emPCgcjXAcbwQr",
  "key21": "2jYs5PqHRLJ9fNq3HUNgnKkbHJkAXFR2CvQdrpVz4KhqXFFkuECwgfX1oXog1UXxELzG3QstK7PE96mshreqWKH1",
  "key22": "5uW97UPnuJ4suQubuRvxJ9xV6EjW8MkpFFwDFHhEjXvdNPi1DJYMNU22dJqwwuKgqimia6ZUUBy5bYcVah89f7qw",
  "key23": "4Q3ueZDgErxdCEuzv1Etc2gj8yzvheP4W2XqDBeRzp61EssJ1qeaPH9BjdBrKubyVXV9q7V8mZo6TNU2ix8vbwTU",
  "key24": "2z97s6tyx486TcgoM7e1T4buRRjCNXAgeJCkUERoxk1C4cxScYGmEYmq7NzLQWacb2is4kRE9Tj2tRius4GZVbQB",
  "key25": "4BFZuBnb74jA8YPRo9DUv7SQj8tgVpqdvHdYEFDizby1VuR2pH5SxC76v7nPMi9LorC22hucp8X5Q8WcqZqBCzBv",
  "key26": "tsBiKCAmjKhCCtu3ScLUbdcHgAj9L5LDHZJWieP4V1S38SWtq1HWnz7acwSdCyqDnpwxERQFY5MRfyNZJ2LZTsX",
  "key27": "9ooZ8ow2rMxihRFfTsTTKwqo9dYWFSjjPYpRpWQaZhXbbfjhxkmmy2KK69bW8R6Cj8B9abF3YdTDhDLMtSjMNbn",
  "key28": "5jhVakUzAYvQx64Pejj8SSPcWxZ2Joqnrn5k8pqLGAnbo1B7rdua2c2gLNK9BfiDWfxd2wURDoDRwuPeJux1XjP4",
  "key29": "2Prv6V4fgvSrwXoMv1LSishcbcmgXUv18yGv8yvJbuvwhm6UCgqYvdGvvARZSHkRw2gZZn98PR2Qxkif42bpxhos",
  "key30": "83TCvrT5TYcTGz1x8rqU3eRGNRac4qtkc7XLHiRLYZcAH5uQhQF9eTYEDbYH7U8SGsARMhWALY7XiwpMgeKqT1z",
  "key31": "5G182isTozD2pWBeFswnVNpgw7VR1RzygPnACNZhBtUWowv5yUmgBnknhmvodo9pnS3emDXz1DM5WEfYKu4VpPoM",
  "key32": "4VWfZTxi67qAsorevsmZjPEJPVDxvAjiWRuGi4xsU9WWwUi7i3xot5oo8tvdL6P6tPnzPhRi9PgVPK5CQESGwTNn",
  "key33": "Gzu29nTt9dhLrKPw2eKReDtrSEqfye7KfN7SMK9eyEVmeyXqBcyFEm1bGfqt8ggs1S2sv8EaASE4yeJFjNBu3xx"
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
