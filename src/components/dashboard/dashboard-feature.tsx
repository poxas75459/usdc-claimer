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
    "5UwkcNTuXkt7p4Zvm9JkmWMYMAAXdvTbojoxVfortvcAMqmwy6nAQt4J3ksAZegmSu8RAvYU9z4icUapuduHKNMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65nGU5QEh5ev1j6cRXTqaS9tq2JdrgMbnQ2hniTYwMNcAWTtT67eeqoRwhqUPNs5nfHhp5odgsPjx9xCbzoJH5Zd",
  "key1": "3Tdm83gkfdMD3ju3LXCqAow7uyzGuHCLGuiEEJYNbBc9Ysc2Wju9Fzd9MhfGJwvyoEtc4ERLjcmXv9vFyFfwcxyv",
  "key2": "2PW7unomEwHitbjEFifSQDwZ6NDDNCP8FaqVWBSYwHzHjTDHxDxmmwRaELENg4FRUB6vsjs9YEp5yLDBghDVPZB7",
  "key3": "5LRVT5ZbB4pAuHPSLXBZQWXC4F6M1dv2QXHX5GN2Y4x18uAdQwBntEKAUtx6szScoDRXS5GCmfPiovdojtEc8VZS",
  "key4": "375msvKGc6gdkLBaZyP4LKg9KEs5i9GQV7nXvoeihEcnsgQr6fYBFRKV4hxPJDCUcHdL4Mdw4e1kh9kDahvjXuRn",
  "key5": "4VGvFkPeLC2ixXNYhjv9JHJBgkiQfUVggqUmdoHcjfHSVxJ76SXftedVv8ptbfvP7CZKHTnXFBAQfyQfevCuwbkg",
  "key6": "2GzXWDeVtULcmpvdeRv5RGEzKZR4rDEeEtQhvkQgvZE6ycMrgPCyfzEpi3ef8Yt1rA4e8vraQoXgWAijuxvg8onL",
  "key7": "47PNfzSzsr9VvCSiHFf1aX4bSPKTFzX6eBuiRV3rTwXLEDZU1xC87K4hD3uYgarpcZ6cD3TvzB9DDfFTNLyWuCSa",
  "key8": "2fgSXMFiVXbYWD7xFdL3rMzpwrBE7CTCAL8TQu3rjTmxcWoAAzwycJ8cqQUcduknUn9P8vybWLFcNwyDM6CrNJ29",
  "key9": "3T1954C9ypsoUPR54HJEYAyALiciYo4DgAPhRASe397sLWyAPyrCMfNAVdphp2uJ4tuNruj38GqhfdJ3mNgLzvr2",
  "key10": "3SFPd5rZbDqn6Q3cJfxWHUQPTVKoeDLMdWdpyxgVxKQgYNMH5jUQpgizDgesoZifM7YunTcnyP3VsFcih82kVJoB",
  "key11": "96yUUzJaqT3XN9tx37ggCzoyHPLUo63jnDt88VDJGtf2BMYzMatCE3y9rU7jpui2PH9TjJqZVeZ74mkYCf5gcBH",
  "key12": "4Q6A5yQHHyaNcDrMbeDXuSQGFuikjV239VMgZoheKEVSHgLrkoWWGJd4wtUoHigzXaBFka55bgaKHEENPi2mxSZR",
  "key13": "63u3dQsyKKTZdHQYoDGeKg7Q9cwgGbE2J7UByZXMDWG4vTmJX52MDg8YekRtAuQjBrn9i8JQLB34JLPwSakFwSxR",
  "key14": "2oDgCowfYfMhLrrrA4hhk8LoZprhMYZUforkC5crPcVGNkUxFbDLZz1KcxcbxWkp5zowMvf7icyxHdf53oLqkqc9",
  "key15": "5xfpswnSyhaoZMZtgxWfnhTdi9V65a6JeCWDk411vVBun79Q5iuFATJRWr1c8a1ZBQGf6C9qcBqUxVVjMS7eEduC",
  "key16": "yK89jo7Y972SFGmpwDJba2W4BiJ4e8xDCf7iUh76hnX8sAd2dk9GVr8dL1SWcSkEfer6dURaJTMGuSx1EFzWQiG",
  "key17": "3vvjbx4cxsuCiuarGEkq7hzzwS1uzqenP5MAeGqG3LkyESFbWxbuWxHGRpThf5w3pv7ohPVhbsav2M8XAgrdp7mN",
  "key18": "fNSqSs4cXvwdjFfi6isRQbpjgCigVzCwvQpueeBkntAuVr6REUWt6CjSpqef1dXL9r4NvvUqAqiWFeP3XtKSsrE",
  "key19": "4wf2Vyx5DC7JVD1pNem86RTCAfZVcQXWcE6Dw69yZSwEoPMXZMCroFnR6pah7n3ELHVfwj3tSX5D3JT4PmEjyFjE",
  "key20": "3RSGaigqrJEcmZzM8wjxVTM4fTVAK4BFm2pHFeXBkwJbXrXPJEZEKxy42W8mccDGt1d4da8N8pgfpRZfaStouSr5",
  "key21": "4FsVEssjRh6T2HksKcDp9qgX8xz9UnG1VFP56MhLJQxrXELSRZs4iEoEM8WDjuugVKEL94Q7RbJJvcHM7Hqhwz9X",
  "key22": "3mDRjdizGWeVoXGMSaWrMgNY2tVDL1vco4y4GPc7aos59SCvuEJMk2QRCnqr2XaE1HuKtKSYg3pD6k1wEhtegYNq",
  "key23": "3tZXAVrMsVaLQ17rRVabdtFCo6zit8P5poynxrkMepzUqn6SfSJuUqRkroMajVf4K1MwTwwhW6fMjg2yHD3N4y9s",
  "key24": "5db8eCaezfAwCVHHH9FheKLa6ccjoT1jshxyGDETcRLQxCMdP6yZ3vBgGfY9MFKnzVbiiLcQyLa1s8mrT7Wp953b",
  "key25": "31XT9Fc5zzKdkJ8vdathQ6KdzAZFDW7UKmKW5APBCN2eUicDb2PggVicwdhycXQU8o5xGmXrgdMrioCjdgCgxoB1",
  "key26": "51mJe9NUhMKzmpWdBG93SDRdRcqay5PQkjSmUdAyAT9uL4fnfm7R6f9ik8sPHx7Jpue2qFyCcfHy8rzSqcfpXqo9",
  "key27": "4LQm5hoG8Wen7EXE3pW6ZoyZUHdFeUQvq3YLvPKeTxNa8iTJB5LvziCf2zqWv9kampEECQvbpUEcrogm2W9Gw2rd",
  "key28": "367Xum1smyVypsdK4aHjbEtbtZvaz3fa65rJHsmgf1DeY8AmhmpGANSabmDrEDvrf2qDDm6gLubxQ5qmsvMrHV1H",
  "key29": "3KEQrwnKg16FKwMSfKVGuEu1reF6AbSiejC7yjtcovYHqSiehXWYK4n4b5UvN83yhhbN9TQUcKJpaKsLRVJNkZUu",
  "key30": "5A5GmP1uEuTbqBipDzvLUDrvkKi2av128wtAocVdXQuLCncTr2VLGAVZ17aNq2irZTFDiQ6dXP4J2BW6aAFM1AuL",
  "key31": "41Sok71PwZ6R8771UU7zg6sz7Y7sGu5sTfQ4iHdgfYRsjTv53MnzT1BHUjsYds6uvr9HxDzV6CA3Tzuk5wPMP87W",
  "key32": "37EmvUrKLxAbPTLP7qo77MhdbqU89eywDsZcYN2pevaKxWYWfjCg9coqtqPBkwV9ofxZh3uMfFD6ZtzV4kDhbsRb",
  "key33": "4wYXPtP41jq92K8nACmnz4TvFzhv9dqZuJprtrEDU1BWanrGPTP12NzPqEAJpNPYrPwpN4wCFoJEUdXYf1HRkfGe",
  "key34": "5tyoWeu3AM6wH3HJeLfM3XdtGBS6wEAVVoKVVuozvwJWkqibGPyJLknLXGz68QEi4QZwVobCdJFi11ivfyfwpu6Q",
  "key35": "46HqUwuiUpaSJfvGEfgwQn7RQXSV5JMKQG5yhf1ZSu3Sxd8wLbyv4R8H9gAEMtfozUc7VkFbcVuBLf4dPiJRHhDP",
  "key36": "658AxtLpoXLPLXgKkuHBfaWeR1WsVoWAguzgqyyGPchPe8RMis7qfDwXo9Mq44x1TUtsRzLBxeEhyJQeKkKwUmYY",
  "key37": "5HUwCY4u4KCQiD7yHZzN637upQq6GeyavDCwu9dxaqneTNCTpgfUiHST7R4S8prZKBJJ4uJv2p1wbk93FAg3oRQy",
  "key38": "3FgzbUWhRWTH7aUqY1E7LRZVtqx6Zp6eKTmujP6tEDfQEDdtrSXCsgciE4wPHvFtFFD2iPfgvcVq2DpQgXu3Y5kq",
  "key39": "46tAbjNozT7ggJre2EHmMxmidhfAUzrx3rC5ogGqMgDNLnJqyJrPqUajvFnnDg2EKMGdRLVNPcnzMS5tkGb5H6qS"
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
