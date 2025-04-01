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
    "3CbvSqJDz2YJAWxrcpRBQwdLwFhQctddU6mAZJM9nCAeWg3uFBibgug9Gm7H89aALCwJYf36mpHsuSftcXwcRoKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K9QW5B8DQbPy2wq9ZdUTqmW7gMxmoXDswgemhp2aHkfSoYtt84T9QoVaPrTv6N7VfmGXLQ5ohANZxEzPg91d9oG",
  "key1": "5WHbnXHzbKfTXYxztMjPf7mwDdVLBDffTPEZVJPQwSKptwxZoJkQR4SFw2XeGxVM9Cp3qf3G6SLggEGjbom9XV7V",
  "key2": "VzCo9nK6vJ1te1eZ4AyfMc9pTF5Hf7Vz589BMbVejuMPmPx1QKQZn84N3bGUSWY9bVzrayzfZnKaH3GCpXWCMG7",
  "key3": "2HBss5qi6yvjpnDPq5H7oFNN7tVdSGVVkR5h2KVMCsfTY2XSBRb4mZzWjtkNuCWEof3W8kHpGui1FfLzYLaMZo2K",
  "key4": "269EVgAjTVPsTdv9QXhdhtF7ggrtEDQW8P4LFAG1L6DfaN8WCgDNHxA1rbuRxnDWnCh4sxzoQy6P6G7dBwJAWwAj",
  "key5": "j2CxWFW3ZFKpDsgKuxnY9LS9Srbma4sdhxDmUBWpsYb5gdzoJvw2aqbE2deueM2vLFsvW7b84xmVboe58L3J8dU",
  "key6": "eRTk7fCzwHYC1i9j58ZpWQS2by5we58cuK27BmLHfvfBFELt6LYTSKugc4MAPsuTxxK3XsKkjMwzNLgCyPTx7dX",
  "key7": "5RCK74PmfZRz8XirTjtQBNGd2VNgPky4tLsaSWZhT53GtfUoqVWiExFcbHLNm8AzvVdp7TbMK7bsbq18xKyEp23X",
  "key8": "4mGxDwCqZQUsyN6j4rfNmFH7vxBw5SXs91M3vmLnZYQaDchmDETXP9iYLTQBqn3qGsZzhtqWqLRemjPjqYGnD1zc",
  "key9": "uNn4dEPELXyrmfZDqm5tvEMkMQNzagTn1WyjUy3Gtq3BgNDAhbfp6bYM9AD7o8N8RNA1mvkChTXJSnw1UpqAfho",
  "key10": "dDMxCM8uwqEi2RYQCPMJXGs7pcF5yxkThaiqadzqQNcniaWFooUTeEv8kCyW83S8e2KS1zSPVDTVZge8EiFCHy5",
  "key11": "2aUdjHmspq3MK8hDug2d91rpMPGsrYFnHc6pzia1MwoAUNNxcHDVEasoeiVXEPagbA9mYdc8XfNyn8atMQJWj5dS",
  "key12": "5yqvjgs6EPBC2WXqH1i1jvJAVQQ6roTTWyAEkhS44UWQ5KZ1qAJQzkGVn9mieupnLY7yc5hmCsFnDhb7ADbKtLEw",
  "key13": "4hw12R4s4NVSXbCLE1vH3jKQJwrcPLyRyvwq9Jq91Acf4hHyJY214YNDbYBJa2WHKbo2Ei8wJVSvhtCwT6R2zbUZ",
  "key14": "2HvQUZtde3P5G2bu3x5nDojKoadpnCkgbbeZdpC2BSWBW6HbmKBAiUVNUgPcQ4kJj6ficLHosBj6WtPw3K2gkRjN",
  "key15": "5BbmfUhXSKvcKti38PWe2KaPJHQf17chGSWd2RHJg5ixRoykqwWXmHZ4nk4jEFzmV3XYHf8f2scc8jfZhkidB81y",
  "key16": "3zoLhkZGu6Yb63APGmXpV1EM3icFX4pXAkjfZL2AKNpLxcT8ejuJQFu9LwK1cgpcYXpMUtxduVhGoBppWPt3y8dW",
  "key17": "2CFiycWvQBPTvD5RoDvc6jqFsX2w599hfjdi53cd7JNnz1VnbfsJeGVkrp6bJvChHcpmkUD1TcXQ1AxVkCDJ6m7r",
  "key18": "S3s8QZWLoYZ2PghZGktdZvGErPVVqwCsxRvAfJgxe126vjRi36kuxDof7Rpi7AVMKQfDSzH8kF2rTvazgY92ok7",
  "key19": "2seVJ85BcySFC1BKReSSEFRQYJBKKSAiFWFTgAgWA6RjxNPuTHSxE6YrU1NHKWM8d7ue1NPgHXCJHEBHcaR2jNPJ",
  "key20": "34ZbFGa6mM8JxhXKJGipY5QoNRqoU15EHHLB5361Q2gfVpSnC8JoFEcL9NunjsjafcWQ38b48HQ2VrqGLSiQ9SeM",
  "key21": "2tAWFAAdpeU8s1CMQtvumUWXEjBEvQijVy5LdigFrMD9wr91KYV24g9MSVTy59Jk8tgSvytJrpKXNSakdXP29RTF",
  "key22": "2YfQXSDFbr1JmU6gVJ67PjPJubgiyYfU8QFAbhofw1AgYyucE95bLCTngA311YzCDso3qmWCGkf31qvjKqAwSGPe",
  "key23": "63cMBBXD8QmFn7LF8w8XRLo1afZfRFWYPFtb5NAzwVQwEVXTj63BBAHKjCsehfKZorLMnG4Vimusa5MumxwwiZrR",
  "key24": "42UpEjLapWhNmG789BvB3MhAiX8qQNhBh8VS75iVsQ9LPTiuPKCyzHHy7i6E3LqUTjkcoduwYCsTjsyBFD2Zfghb",
  "key25": "2tUWVFRRqwikABa1TPdTLhSXjA568YJz7WcNWb55o76BKT7bK2ezy3AYBbX4ToALjNArXCmrmeYymeN6EPDmjeJ6",
  "key26": "2NG4XQSMbRPkrZyp85wX4PUaBJSP8z1bKAvaskbNDfDXPj5F3cesABB7A9n1EGHWT2Qfx2Whfgc3ZrXqQVxgUQS6",
  "key27": "3CM5WHGP6hsDbeaivzFRAy6Cu3PU7ndB7L5yLQ3T7s5gMcCzLWg2Gtjv22az2tfdYCwXVCVzsfF6js2Hq4SrErQn",
  "key28": "3L8VcN8q6ShbGaMXtC5KeTHP2qpnLm5XRNetfXNNaLNCrLo6DsBDVxyEuAFHN4cdse7a8BzdJzDFLaCatbGVRst2",
  "key29": "2YmxjyGMDKp4sPH9qeN9WVtStqniZ7oMACYDHh1gW9bzHACDJz45Ft5pAPey8PNJzkfZfmNB19nLx84R36ownWgW",
  "key30": "3A2B2Jk9FReMBB1mT1jgRiiUkGP5qP4DF2HHuFfp7M8ovoFBgNhBDadk3dLiPXgMCQ9q59AMCKoVqfsaco8vpxKP",
  "key31": "3JZr1HzCnysxkSC27wbzX83jf3DsVSvg1xsz8LfUAVNxgUCYtsqpmkeDLFMUuiEMuANjW1jwCzHE3JsW9CF8fB9U",
  "key32": "qhgyyJUy3YZbCaMB3SXizczb9pbp8fS92kkQoLfz1YhSE16Z5t74UCfi1BaUq8M9MkduPMiRMKEHoFiciD16kCQ",
  "key33": "2C8va7BzfM1RiRrEbAZ2LS7BX8VCBUJJgeVxKPstuCrBtoP6PmyCEpoYHisWpX4pFuTw6RawGYq2ZwTdkiE5Lj6x",
  "key34": "54FQ2MabkeTTG6kP1nYbtNyyPidrdQxRvSvAeC8NHY2dx1UUziQeLuULm6h5Pk55G8a228xv1Ga5Xuk2mMBJbtvY",
  "key35": "459BkerJxRjnEhSSz2Gu9VnSDMpBDKkXjaNfjVnSDybV6aPL8BW7Nk5rF9RV7poBavwZxnGcWk2GYjxa7EWQHzWy",
  "key36": "4g8yj88XpHa2Ap3fnB9UjjMVMiPbWFyQ7BhTAxZ4HZLsznHNczZhG5jc9TdrG1KXmpYKiZgeEWRPZhvPD943GdmY",
  "key37": "MLAFgZnfxg4eNDiXZbWKb6emUhjZLEWz2y9MhSSmpFR6jKHdHsb736eBJcTWX4zwXRoccHk4dZTgTeJhKTS3ssP",
  "key38": "52e2FdfXCm3wt481SyVP5Ykxs5LYJZPRymeyh6QBadD49cas9rZp5dyqUWJ7ixqgnjm3iYoS1p2HB2KLni8eUKuf",
  "key39": "4J4a66v1QTMcEdFVtq21LboyPzL37MYBRefevJLDeVcDYuh2xobMsFp156B18TTBnbTyam9L42zLe39tuSDSV8fJ",
  "key40": "4yrsCjHzLwZrWkwG7crKFVuyT1f2cunqki6ieZX4czSDjpkCjU9xpEApGys1rneUnTu2rw83zDZwcvyRAAS33cyQ",
  "key41": "3K4zpnj2avDkDEfM8DUsErzB4rZ6CxSiJmsNXDvPPBADq2pThPc9N2eyX8E52KW959pdZJ5L6XCeeSYoYz8xka2N",
  "key42": "471Gj4fHU4sCVbjqAZFov6YNXtxQFdyRj2ktqzns649NYPWVbJWUQAuEwBTYUUMgq9cGDkgPprmyLPC6MCzTnXXR"
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
