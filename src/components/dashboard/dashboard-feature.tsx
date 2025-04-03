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
    "2w2yAs76TkDDeANYBCf5KmT4W5ToxXbMXPqKKroZLjPKLxK3mh3anBmAZ72Fpo5VzS4iMuSxnQ63G2RhycyuwD7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mhCLPNCsiyhy3axvBTAGT17zrYndvhvfmsQG3K1acSP89FS2FEE493X57BpxJPMZUmEsDkocQcPscCVJLZaV3bo",
  "key1": "5o4GRRtoxwoJC58hHBWfVVPUTdV9ZJDU3LvYuAQziysgBMC8qmjeceqHLNUVQASCsGN3qnKAf2xSLvjPv8ogaBvo",
  "key2": "32Ei5WikGfeD5KF8MBgXdRzXXqd79nqB4gkwaeUhNGgJrtddnghrc8AQeuMsJGEVTnwcXqHcNAdr3Uy5wGvtbAss",
  "key3": "3jXESBA7GomhP8MGmUhLAQ8QrA1HvWjnnkJbq2myAfMgk95L6TxDadyjbfScMEfMxczRuRRrv4wJ4FNfiUdR2bZX",
  "key4": "w2urV5bC9xK54gQx4e2TnAzWRZEmFj16xR5fL8bWMKRFrAXz8D9nXD5oLzjqG2jdDjUxaPoYuZUcR5Gp3oDqyso",
  "key5": "4eTZCdkbM4yYEYpKTL8EVbrvZ1PKEYdM5ZikgonMUwe8xCixfarNvnQENss842aBVv8LavveMHLDfZ4Y73M6FwFP",
  "key6": "4w6NjoXRuWRKfP1XxG1h1YARrePr6bL6oNGpD8218ua1MzuQP3zeaDPVK8Y9xmHtB2sT6tDg9YrwJGMABRkqNK6A",
  "key7": "4rYZaHaBotepK9YXmrZKp8Fez7o6PvU6WKYoeYhK6bDAdmWiAmxhD4SCMiNAXMqSb2EBxhEJnMoQPA81Zqnk2nJR",
  "key8": "5MstArzsV5ac6A6x4nkqxnkW3iogdqHaWfVF92rN1Ew2bzLH4sDN3xnLHEzEoRUzT7AapzVqkcrRG6nw2Z9R4Crr",
  "key9": "5NKyPdmZdwDzsuDEJ5AF5E6juwKPdrTxcBhZFDqaqbQa6dviwL4szx3touj2Xtob24iRuUuWUDYgZaWrQ7om1hgR",
  "key10": "WFvskVTe2zb2c4qPu92mr7D1Z3MdoijBfuC4hfCUd2DuoGJmNGY5QW4W6iiP2c4sPmautiacHx4BZFDMto2CUyK",
  "key11": "5XZa8Y5SWaozvg2PuUrTVZFiYsQgdkh9uthb7MJkNScp6u3xAvmVr1XXSW9TtbTf9RA4EGcihCF91Hc1zMAnLBfY",
  "key12": "dAiqSozAkNM5VUfDrXfaZcGfzfskCu2sP5ZrEZYN5baWtLmfdFX19oAWxniGGMsQphVprduLdVSB2F4AKYZqzhz",
  "key13": "5HYEyE6oP2Vc8MLNv4kiTrQL3Af8Pvck8Zd6TqZRJwfjrnRNTatyAjtToYFMKovbuxgYLAAZjhutezdfrb1xmLrh",
  "key14": "3krNvdTUS6qZE5wpxncb2hDWUrYnW1bEjRfJX5KK3UbD3hykR2aLtMzE2egXquuCkuD4DAKJ3NYLK3FvBsWcQgyq",
  "key15": "4xLdqNAzAH5bFS2G8Z15CPP7BAyMapxXq4kDx5L5cS1rvn44Gc5Vfnge7v39HFDNT3NByhD5dSpTo7pjnSAzC11m",
  "key16": "2CoWZmtKXAVLhxaofmDLYxbxz352KjfkX2MpA89aFw2cQQPvHAcYmApjsYLUyVir63xDgmGa1cQmo834p82xKHoi",
  "key17": "5nZLuJB4vYFPLtoUxyxx6UeQcxrNaN458YVjkjxtqWFdVe479SPM1x3bRdBEcL9Hwqm63uL6oezb7NWpmhLTudvT",
  "key18": "5s5fYJrbcB2VAWSHxg7uorg7SUsbZ88Ha3jg7poFWs3FNXZ9vwBpN39PZbLYPv6xyXZdsz6Mup5mqeKdvXiNxfEy",
  "key19": "5wFGEvdtSxgE7JjeDhjEph6VujRZVCZfv6WpVnPzRcEZqd3YHzdKDf6BjvtbtQBodtb1iUN7LWeCYng4mQVBERZp",
  "key20": "5ZqypmJxKTN62F2xoGmvTMjocQACMjekAkvo39XJv2yAQX5nPQrZWzJ4Cnd1xt7pPu7VuocmjA49uvQYmSUTDs8o",
  "key21": "5zNvFzcGaJAWUZ2e9EdW6tCP8b6J1vT7SBuqdUWCJgUBvBneTMvuximpSE8ycZUjDDT3aVtMdcgfKi6fwisFP41y",
  "key22": "2RFoDHb5f8GgAbMYcQ8mUZNXraQCioouwnTXzRoHwVKFBatrCeyypHk5dsE7D4ta6UYZXJrswGL57cExAEnJ98Xb",
  "key23": "2Aue1cFVswHyKgdLsyjL8CWi1QfbkPRy5ZUxKYuP42zFccYAdfqDdbCHBEtE6pFFRtSPy75UJiYVMeSmrafTHUHG",
  "key24": "2KZMvoxhZgkdHNKPUrZrJpsEimYWhGyh7HoPVYqurJaiwXNYYkuJtRTVMwHn5V1UYRzCGhUf5USGyJb7p2qqiakm",
  "key25": "5H5wVBhRQ49oBaqPxbBWN8SM9w9rWLsY6fgEH448n411c9gJn2aEYQJ5gwtNRh5osNLNEdBA28tTHJFHtTLCo8hy",
  "key26": "3mvC3sJeNh1g4iTgatv1RgrtKQio9z1eXJ1ZJx9nxvYxBYoE62kJdbqg2kBHdSENhTWuTKU8DsgeBjyz5DJ7prVn",
  "key27": "CbGWHgExQy6EezisevBCgYXHfenJacqshJDQKoB2qk1yNae2BJV2h6dqHQriauUt3ww7Fc475HpSG53vsNvVQWe",
  "key28": "4zTRWBKT36WqxZ4aFAvRc4KXpaQbNqznndmLmEnfN91qgMSLv7qWVn62zwA1tKmyHdChqeRhjiovC8VdXvz9n7iy",
  "key29": "r95WRm8QfA5H5hYmnkYfgMVrqnfK8QiE99iU1GZmYCCfe7dm2jY1bkadMo4UXsJpMFFCiBNL4y7xXHY8fXF7hMd"
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
