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
    "2x1xYR1sk8wBCUXrVHPVk4YHRfKxgUrpxpfqxF7R1PLHTy3SgkPbcvZNaFgWd9JjxfcnvV5t1RqcpHJcCGEEy6Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gdipLy6BdvynqoTFy6N3YfsMpA83b1E6B9LEzHCXQFUR8Vd9FGPXqov3aJATcCuQi4AkbmhM1TFE2uitRCRuQLN",
  "key1": "2ZYkvQCWioo2sC9ZJexfeahFjQvFfyCQzYCTqTexnmUXEDH4vE5LcxmpSivGP13DdAYFEF7G3zVDKMRPHgaym7yA",
  "key2": "3oTtBt9AqsLXZsNKvkay1MXhWs3LWypSoV6NqQiQvXwSuR7fgWsqRM3Dsk1VK2V5aneDDGMfecnP7gAF6Auz1ToJ",
  "key3": "4uEakovK1sRuhffLkfndAeZu33cvhzrzxXkRyDDHWqZ7D2NhxVXR8jgr1vsdxjG8u6CibrnvkHxXxJN88koLfFL6",
  "key4": "3KK8swMner78md9nUUdMTTibgJfwACW8jpanehG2qNJcWHgMUVj3nNPsnT3gWVubA7E42GzoFn5xAWSEEvCTDw5R",
  "key5": "4sYaUqyNUvxavT6EMrNc5g8DSSK8t37qyE9kHiH2QRSu4ALqrKJs58Fo5VHu6AXqTpUbGPtiANntvS3HxgUTBG5i",
  "key6": "5nbfCQpdMD9muzd7w4nxdfhzqPpDJjdUJ713oGk8JoEtXBDdowYEjc26mHUPoyimvzmEQdabhF7FsiqZSac3AeXH",
  "key7": "54YP44SzKE6Ct6jY2rxkiZ5Byv7ECXcGAkVkTXYoatdcFfYEo8vJRPbBRqZNJA4H2J7X98D3u7oW6exkRfARLcV5",
  "key8": "2TrrvDZyX2ABCK4JhPhNnsnMcZgzsRRpQ59i6PzGvxJupGLvXt4buexpcMyD6ccsXJFdvCKQVmroWbeNUFvkRPH2",
  "key9": "2mWmJCsZngE3GJVFEvdXEKV5ZdUxhvLmnYVN23UmJgQfQ3ESsUEHNZo1GrKD59gBJnCSzz8rpjnWSXhA65cLaJ37",
  "key10": "29GKszXjvS9B291pndFHFdwDSe1njdv835q8DwuRb9vo459VBUGL5czhViVG92eCvFtr8AASoEhzu5EoRvRsySgB",
  "key11": "61XkroZYvHPnNunor6JyfME3eBn45Nfugt7HgLat3v3hhGFYusCyL9PGBf5BZQCvNfdQwy3RVfnoEugXNB82RwH1",
  "key12": "5FR8krxmLYRLM2mjF6AVrhBxm6xEwDjkkZUbcchBHJiJaqUAXkcoq6dJbW9u8US384CYxReQDWWoRZHS1NypPAM9",
  "key13": "25q9zTcAXrh6f9yU879cA3kAZjvzA6m6Ude7KNQovUFAHW9fAq32ZtLXnhTQKbJFPs282FLZ2KVQfeaLQ7mnJiPu",
  "key14": "4XepnwyzQkrA5dX3bZsT5oJgU69SYHN6HJ4rZnGHPhZWtwbz9CXCNbhnrjsWv8TMtV4u4bbyzuuBmVVwmdhfuvdV",
  "key15": "2BDAY45urX3ow4JLvVjYTZ6HhqEcpTcpijSqEJeDnbe4d3z6FKi61EE6YCr4cBuNs9iBUM22u4KgeVhfiRnDURJg",
  "key16": "wTbBhFpLBAPZkEcbBFUAZBnSratgs2Cd7z6waZhaugzfAbUpXKZPNkW8ykTggrVUKu8SCRhcKmKSx6UnazcoBik",
  "key17": "YUKBZn82Rxw3y4uBWcSpSy4NAUEqBuRou6uVYbr6p61ZaiXyLABQ5o3Uoc8KAAJhBBhCZS3dLGtw6MBY88gkb4Z",
  "key18": "5qxpmyCEvUccxBMvryggyXj4bCCsyexCtpKBoXNWiCjDcBnScji4cke22DTtJ4MPTfpFn3gqADuAJkAi3GJ3ZdTs",
  "key19": "CpvzBYaYNRKtkfaPuuG6jeLSQ7bLANL2eKNyjXfq9uDoSKMVou2FBqty1peXiyaePiiXpvdpemCVY1C7SBrDURK",
  "key20": "xGsdBJiFYS1ViMNGsxoZwrS6Z4bcYgJFdxRYXwpqpTdht7K81WG4tPuB6XfdDaL1YAEabUHykfgvwf99FD5Jh27",
  "key21": "QBMWF3xxC2V3sN1Nb5PxoSdhe2i3iNHt5Hw8Ey3jP51eMRVK3Jv98ofaQ4cpf7YRbTktckT1JGENeWTKHAeKjqc",
  "key22": "5mRjepdqx6VguskoPhcm5VFi5SrqBadkpryjEVRVb7nHwcBS2dR3QX2nRYR7eyXtzSPRZkgFSPpRtCqDDSFHyVwk",
  "key23": "3hG2kynvBpFvvbH2HTDSbA2rG9spYjPhoXruftbozXbRdnfxcSfVMk8zwbEFAqnheJZ7FTF8Z4nkvhvjxx3rHYXR",
  "key24": "3TdEmYy4DQDcW1CAcckcQcM4V2fAXM68pgzuZg756TXv4FxhKf8JLFSe2Haqbw2tx7SMJqm8uzN8YtoXoWsgX1us",
  "key25": "3XAE9gxVE7xoG4aSnnenFQkaH1MbqmKhjuR5p86KhxtByJX4Wh2JcmzehmVeWKUYd1AiJn5AgP53QnVMiLZ4kEvU",
  "key26": "5JigQ8aFKptpE4zUfrgd8VobYDwrvyTUpuPG15iEghrai9U5gCakeBen3KcA7kSBtyKQqRJBbGYHUSPqWkEqk4xu",
  "key27": "34NHN9e19T1rw7jYjeqNbsAWKDfJcBp8sArYEWztMPu5AKMsTpLo9cJQCsC49TFnjgwWPi8csctHBv4GYAfXNkwF",
  "key28": "3PB3hEgWGVVe5Aux1ZKhmaGYJcXhyXph1UeJEvsYcvBsEYMLbqrGW8ydf9Xhqswg3r39SnM1L277xPUWUmYqqoY6",
  "key29": "hcwWn8GR4SgpFxnbn9BjpXAzPtM6Jwjwa3mJR3D9L5rtiHGF9CoUyNNFU1RyTymrY1JXAqyASNZsWi7NiQdbBNA",
  "key30": "34CcACYvNnxiZDYBsn8TeVzMHe8d2rrJfo8SeW8zpLSen3yxShWhaLSBYgPieQQiTYVdDWjo8HZhK6CzshN5TKWC",
  "key31": "58uuiTTCQPcgwDLqztQeQuoQ5S9xvseEevAjjgQ9CDqNmgGq9YQ2MzPLEMT8DJVAeLFReU7xJm4hdwyiHC1tcrHK",
  "key32": "mFGoY6fyvnaTid4EYshGjfotnsG9kXjDHHLUE6DuodZoWBi1hU45EGp4V1W9LLh7Doeg8vD42wGpoNQvsHx6NbR",
  "key33": "wjMKCcp6jYMvTanvFnKFBJA7xwb99SqyGTvWNq4F4G1quMhXDehmAXsoVHgTVWGxR8Dzy3REUk7ip3DZkaEEXHq",
  "key34": "3zRHdk2z6PAcBgz2b9YSywR5NSoCbRQ2e2mc1seaHuTb3C5XrDaDE72ktBrpgZ3Yo2Ko6DqhBPC174bgWLiji9GM",
  "key35": "eQQ5pn7pbgLDNtWTMEda64j8QtJuRa3pKU35V2FpwZbhFDnBVC74q5HCTrtaKjgenFyjhmEp852PkTSTeeMcnDu",
  "key36": "3ZDmz15mJkMeqKXLXdpZqsZQJ2Li2FAk8yUfoqzjxnURjeygDUGXfeQTbHpFg4q6zwCz55e2Cw75qQst8Ygmmf3h",
  "key37": "3tzw6fMBKaCpojTiBo5fZkyWbAfqkMojoFWdYn4WigDiT8sS2npxXon7M8TQQ9MzebYFyHVwZxRgkPcb8Mk242Gh",
  "key38": "5mHKg82W1jHcRJiyhMzZQ8iBGB2AqgiGekkxh9LVph5GjncwtXsSm9MWn1tJBBp9yXaYVwJ5ybtVRGjRXSoyvfUK",
  "key39": "4tj3doXrEmKyTxVN2Nm288Ppa8F9uvGtrSCZwaX5x6fCHNDzP9TUUTXFsnSRdcgAt1Le5oA9zuK3W2bvzVTRSaEy"
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
