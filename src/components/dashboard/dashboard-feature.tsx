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
    "4PXsRdjR68KS6bpAPFQAW6e8hBNoj1c5vfEqgfdbE6CCUoFRCXT9tMAeQF1DApWZQzm8ZKKQ8Yc8o3sJxcMgC4Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FrPjszio3eHGupoHDdhD6YRXX1cyXZ9mUojactGHSTJnxrUCfmYFh5gMGxaUNKdU3BvrcBdc83y5KVDZMMG3for",
  "key1": "gRmDL8SMXp7HGqnDZv7E2iyiEXwW7MdS72zcHpig5QCA3VYbFWtbmnKyoxNorRa2JPzTkpopVcixiDuSdpRdXwb",
  "key2": "3SvnxF3kdeNELDDQHy5kLCxh7r1YqkPXXNNL8qQQoev9JAroJT82JxhvxeX1h6d6JiJdvznjrZYHGGgu8HZ1iM1b",
  "key3": "5phxKpjfgEu5La4jWhfuqDmFw4JXGuiqKqyPkPuCzT7HdotRtjmu4NnguBBSp1GTWjsT5pf3q8TXP8ME86xw4w8H",
  "key4": "WNq5djNvVWp2T3CrfCeqKQUc6Bzvm3ewnuMD4yswZf9vxaCWVpzTFeGz2ZTCZuuDY1bUPvWkePs269LRB2kswiK",
  "key5": "fz3zX4hSXDT5oE1W7d98FfydNNWP9i9oyqqkE4V8f2ZjS8jbbyQMpey83FmwhFAbtx6CgwAbyfARfHfN2ZxmTzH",
  "key6": "bWGq33ocmZts8Ni6Rg8YRifkD9yn44wWGPQ3WBKK7LmeMV47ABpiJmdgaknUAcoYndtvsexCjNV2ZNFEdEgzKGy",
  "key7": "5XmaWQF7snVPxzhzqtvuudkNe9kjfQwZDrV8CWWvG33PdGbvQYf7ef4uyPAFV2hnNbYjUfa5SXHx7faF1rA843pJ",
  "key8": "3FkbQTgmwKd6Cx4we4XQV1XVNtZfGmGQUGDqpkaVsRiCyijFrtyAsMpUGqhornB4EcXAN29eYXFrMYXQdgBd1YGy",
  "key9": "3d9emEzPomkhq51EwwCnqRJpXUJ1rbfPtz5pPxRdQ3EbxHFiHYkox1C5DCurAoG7NA8b4uvjFb3vtqPV2SzCo4Zc",
  "key10": "4FfeTMm2Uv5ZpUkZiDMZyRS6FRbGvKGGzzkmWWGb7y99JDiTPv6jZPBpKqPzsvB56p1Jfzvubj47Y99F1jimUd5J",
  "key11": "52MH3N3nka9jXP3DnugjQd2XMTk8ntX19SWo3y1hAQ5LZhs4jTeYw4BGa3AhDku9VoHdUKXog8RCGtGNamY7x832",
  "key12": "4uCZCZcRQTRfMrVpnXdfTMrbhDpFUJaFRfFtF1Wezt6557mbBXQMqUSrz2Xtc15neh8Ekfs9p7GE5ckhgtknEZef",
  "key13": "2NLd3Zj2DDnweerh5FV8mjr8nfVQxV3EAw4dGzuWgQdzUpbB2QqiXcYhwDAFopXD5As5u9319EBM6azTX7SYG2mD",
  "key14": "3PcppniQiKbgJXVf8bdUwB2KFTnHTH9ABUKi1FFEusZKE23TXZpQPX2aUcHHybmwopvbjAVvRYmWzNjsm3vDfkKX",
  "key15": "4QKtUdBH38LFXeMh5dCnsAavbZjZMSoiSsX6iVYfMtiKdwq5EUnTgBQGtBbe8XKRs9rsTrmiDK7SbfXz9a1oqcuF",
  "key16": "2PX1TuUP7gq2F5YuizSggbQ1aBwBsR9us1tCB1psucExCctF4YsER8tozPYqs3rUEL8tuUaW6BLdgvdyCMkLyX4R",
  "key17": "4YZcUkTuc3RktseptHiv2BexmBoik3HBJWafXbB9syN473SGd941UFqFpmPH7zBoYuW3mdMEJRwUnLpWoiyJRF82",
  "key18": "3KGF8bNCf9QGwZq5B2bfXNX8q1wSca7CTGeXe6oVgjAfpHxdPQKPXgrZWvFeeD2C9CMQEL33D2Z1GhjzdtxxFWhD",
  "key19": "QBSCMgVvhWyAg8YK1XByPhHpkZ3PR2FTKttCJCPHKXDxo7qA4Bosja6YVqLNEZyBVNjstzE1FgmnQSqAxpaQYy8",
  "key20": "47asan3noXHUCR3VWRov7cCxhYQtw8jYQqtf9nc3YNUrvGjwUYerqtTytfhycycnbsBQU1KbQZc9hA9UC3xgezLF",
  "key21": "i9YLEwPuAqpcYAPCh9mjyHV4DYDFkh1cUgfoRCRWdEswVzxyUrMDqxqTpUj1ahzFyvmfdwHvMcXw8NDCmDvYMPM",
  "key22": "Dxs8BBUw4q6XPfkh6NRChRZxYRgZmbeEHwTWjdDPZQZTrmMghi6wWDRwBEw3NhMBK5Yfc3WKVKwtU8J85W4kmyM",
  "key23": "SiaYkoc4QGQPgwZkR87YYP4bhUPsfTRwMejvow9A4HHP35kPseEByykhaaiptD912tmARGu911ersMQG6LQgvjx",
  "key24": "45awo7XWehGbpesf4b6hDpLWn5GCwpMpZvE9ZdWfqVhUVPTG9TxHjFULVeCgM1iYh89S4kSptDuBhicVx5Zst7GJ",
  "key25": "3EoAqCy65e9H2ywosQaDovddiNxCHoSNsV9frfEqLKGcf7C6Cdy1JE4dH4DnYxiUS1Ee9f9EdVftus7fnbHHeYWb",
  "key26": "2ywEc6EtnKbUYwi4GYiTRKL2r4rXhqbyQPrab58xEnbTMwMG6zDG2uqmVW6TPh4SBVJoYMVSNjREZNXyLA8YpLhh",
  "key27": "5mjerk71RxJ75e164xu8W5gHXzG1fXjSZnv9yNnScPfsvrYH9poNYgaAfFsXftM3GSzXk5AifiVYvsw8oPxQUQiJ",
  "key28": "5qUexJ7fYL9x3SHtL9xG72um7i4c52wcJwEGGxkmMam3oNBXCqxNRBq8x5mvz9gWHqAXypbn4KjPPBNxVEwhCZwK",
  "key29": "2eFK2EJHAzQTjYhRryGQYqoyRDEtS2abekMKpyNveGM6t4A8yt3PvFK4n8LpjebihRNAetzKYDi52vMs8hQwktYo",
  "key30": "5PUJPr7RLeW1uHihUFsoLTKMyXuypMnXb6DFzjTFca3Xo3GDYx6bJsp8gqh3EoSTnDffDWSQ3JjpNg71xfHM1Kkf",
  "key31": "RyoE8YJHFFCDkbSJzDCcgwezFKap6Uhzu9Q66nhmqtHu1JM6hDwiSopnm9QVmMALbs9oDyFGTkdUPyM66pL62xZ",
  "key32": "5DUoRrdtPvoXyATuN917ryigdCKxq3qH3B2ie5U5fa3Eaqr4qTRJPN48MjSVY92PuYsuh1BATNHkbLhmjPEntMc5",
  "key33": "2CLL8hcXfyw4CPMWQRjpPVyG2r6wqiq1PtYup82A67GN46kgvjACdUpJbkZYL4MJQB8TytLZnZTFRQReixTi89vA",
  "key34": "5zscX3eVMF8njcNLdyxEFSemzE9A4Q9UWNQzgTKbuFVmGmD6yzFDXcGW51PL4XnRME36E2tre4fNnwAMnY6Qb8Jq",
  "key35": "3VoWcok6LYKKsTbLStc16jbnsCAGcU6S2QCVP7Zfxs6PYgDaXvUvC1e85KQ46mHEeewCurVWhii3aBMdNaCDTV92",
  "key36": "2wLmdPaT4DpFxjWq6CRaqR3SA1CufrD6igjcodCgvhXQ2ae5BFb93Nes2iimisSskseLpubXhQKgrc3Uu9KUF2SF",
  "key37": "4fvy454Bd1kxd17E9P7ABzUcGg5nfJCzF3HNyZugudmE9hmenai51kFE7G8YeBqxQ88cimGQDqnp79KF5w3y9hcX",
  "key38": "4rWB5kxhPmMv8Q9N4ufgDWpBwHAqpp4wqsNHabU9whVKQttoZokwXB5QykDHjUM3QNDkhHDjXyqPtebmFHuEa1U5",
  "key39": "3VBLjbYRAB41hGHaVbW4YuyqBLRzPH5iDdTptJNhoNzvRwtekDZViRURz47qd7bixFvCt9pbYjXmf7ghmizHMWo4",
  "key40": "2ZkQTp5ajBpYhvWTE7kqYPBygFezCAzBvzUAA215bn6Ef2dQBYDrG2eorpzhQU4LWba1uqDPmNMjMPyCJZcReZv"
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
