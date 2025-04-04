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
    "brGWybrxGLbz81MJejsuLLPxWnyRn1oXuqhduMGS45LNn4oxddmHSynZa8eRaufCL4X9wTNtpfJ6c8Ju4MRmXx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GvPQiLzsdeJKYdHWfpvNVyBJguczriLAdUeQq4atoSkyKYwSHpKrbE2XV3zXmJMq8dxMJMs76trLxyko8j1juQD",
  "key1": "4NT7PfYxLvSqzHiTV7Czn355JZVRnCgZhnvmgAEeX4rVHtneS5nNP7tSyZMRmv9k888EqU7GepqRw6GGthyqcbFo",
  "key2": "3HKMZiEZzx372XCAgBtbZRQEmvVw12ZX8BY9QgbULKHjT2A5CxTma9J3gm7YFs61A5nTtxRg2GHSqoz8XzxsMZzK",
  "key3": "4jvmGUMUEnW7mxit8qg8eo4pf8juphhUqJn2FEYtAMugPmGjTJfzUfhHeaXMVYy3KjrmSLBGtXpM47NAN1nurVkp",
  "key4": "5pny2k9EsHDAjwosn5i1Cw68N6CsihEfZedC2HLJXCFuqsEpGpMCFowrx32pXMkeqjey3sBamzswx2ZX1augkwC5",
  "key5": "jYfauM11idrMzdJL4pCeyn8xcgo5aTXjdP7kbBoTzoGEerumjQE9xcqTA6MuCbe8ACzNeBWx31qnpHnrxumpoec",
  "key6": "2wUBJjmeYnE1a4N7PVreVDLqZ7UMnuhhdAdHtXMHf6c79NPM1viMacUqfnYEfyDLHYypUTdhoiwFJdtsr3F2Qt94",
  "key7": "phjk5EGFQsp1UCwqYva3Zf3BY39ogt3xgZBNBugRcn7XoU33s7iDEKVD4q6d5KtwRcdtZQazdPKbjiWgov9DADz",
  "key8": "5RKuvJqYerTLViTQ9BMUmJB5MNxA8yecsSpcC3yhxTdJeWFfGopaHf8FLZyXTS5o4x8GSDxDEoz7hxb969cdYHjq",
  "key9": "w7Fp2ASnpfd3tDa1XjEGZEUhJjCMiZWCenMgJhdTEkPhzvpEZTzo4WcYVq3BP3NV2HzUcJHNTjwGomvGMRxA1Uy",
  "key10": "kAESjrudQfLeV1mScYYFz2qNAn1SpB92ueCDGYF515avhno9bcCh4c71pm9CnrMz1u8S7J85f3TNg5LwU1PVmtj",
  "key11": "4cqGWxT5EVqBAMdNKucz1edpp4jFEx58wrd7aJ9rtecpEaX3dovWwDeqqQTGfqK5y1pGybwMypRPPdpMFZRgPpwG",
  "key12": "3WRpnM87wecqWiku4z8X8hrh5VVPDpXbsVYkYUxKMJ6e7hN99x9fXXBS6VD2ushcGiFvavB2MnxyjRHB5mjc1jJe",
  "key13": "3vAJcmoExrF3wrskCgkdd9WoYRMn98hX8zxkqhf5q96AyAQ62FFfwQrfyvxEbMLHxcJCnpHRnyPFzjL1w4vheLBG",
  "key14": "2NUYzdiFtAJWVipgbDQMEqVyzpDXYXgQ8fBCyRnxmSxUgzyDu1XryfQqTzoPLnp8SLz5dZ5AXRrsMJ8oZjxGdKV1",
  "key15": "23ek1W6rzLhWYK2bo9Ng1wKnf4Jfy7AY69U9VjVr2RSa5LezvD5pPJ5bAW6M8FBwZyqhDjZjRNWRZuNc3jWUxj4o",
  "key16": "3xJMgwLqXdYMASYAxRuQosvm4RKPLXJ8jBkHQh6UzFp12JSwxrZHqjJANypk5nYjiM5ABwp6jeDi5yVGpseozTiK",
  "key17": "2NBX2XcxYUxTh5CLfAHe1Ls7J6yRnDsatUZEzeyxBXesKN1K6kwbQJuLhw69bC8NZQ8KcRuqHY8vJbAdQuDamFeS",
  "key18": "FwkidRUXo7nC38JT82X5Ar4VmSGRZaXwGQQkj5zpUX5nUGhMLS7t9wormmxexUeToDgbuuPchjDGXXHoiBr7d68",
  "key19": "3p6VPm2aGn8m5jA5GEU9KHKkU6H4hZJdumwZVg5LYc5PCn8E6btB8hgucA3RzsS2DdSNaoJNCbB8hAK3X3yUQ2MD",
  "key20": "5wLQBBeo5bMLeD1mJod6U9tYuBzh956ybmw1HFXmPULgfsPvCxZuxTLv5qB9wTLqe9BG6HFSWrKnTU8uF2G8C7MN",
  "key21": "5yNXWZTwvRfSbzMTnafB37u6cx38cg7HFv3kNhkSWMpvJ7F36UCn178rmMuntBTWUUDiiLf1YTNbRWyjAdhvZ7ka",
  "key22": "L9B33tYn4RfrUEPPS7XmXU9mRqM6rmuPe1CgnPzxoNccXrYkkLHSUyc51ighjK9s27pb8NCkDQh2Unkx2ci4ykh",
  "key23": "ZXgfXjuwB9G5Gk8KmihUTmHRMM1fEJKDzdRtxug5HanJArtfC23M5z7XsH1pNUhkGBgLnngq4aKLJhWiVh1sRF7",
  "key24": "tnrHaBaxb3t8cwaHnZpDY6cHbcN3xahT8hBi1iiTLPCLuL3P5qTo67E7juKZtVJVg3a76iN6VNq6x3Mc56xj13u",
  "key25": "4j4yzKK6CbVnBKaZfKZ6tUX76Fi9bkiZadE3Aq6ZEmsaVCm2FeVdsiyRyX1cEdWki5gzfkzmBenqNCduXtmh521F",
  "key26": "4WRrHu4GLoRSSYawA65SUXXkBBnnb2un7vzzajMq6smzVVMfxWSrrbxPyFtvXtDjtyGgftK2GbuR441W6cnUnPzL"
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
