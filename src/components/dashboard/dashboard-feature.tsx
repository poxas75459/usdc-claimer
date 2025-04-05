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
    "2Y8J6pP31fBthe8KrXo5fMgG8Fro128pywMxLEjSBFv5R4k95L8SqwnJvUuXHA9rxX715GDNV9cfALqtpcuj2NAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJCZ8J5squxBMS9bHbFdaRBTX4pipf33LYyuP9CyVa1dvW38zuCTfMnRBeykaqrH1p1cgUsHFBRVo2wnCFndEDo",
  "key1": "4MnPfvbjR4zSdUvGugYDuopFUjUemqnZJtokLoqPRuK6bYsH2PhjScHdu5UDWsKaCb47FtmwxnwbVRs8KSdB5Qaf",
  "key2": "3E82HrsaEDAjtp7brETaVkE83XB5SbPGc3eXxZhNqfP5XVQdtTqXLaQVyZCjMc3giiygs56QfckYh4TkFJmmEcvE",
  "key3": "5MZ8tURhgWKMCiMYBuq4g1V1z7WpDzAD18npdwUMSS6eqbfYRLRGKGAJHeFEQRMhyKg81duA3xBbzgGyfpuy1KGL",
  "key4": "5uS1P5FYppXcXPrYrEg5Sqpa2sqcXFy1jYHQsEXkc4KfFk7iUd7BS8y9pJTXm5R3cS1zHyosf4zFnJQC9dkTLm8w",
  "key5": "4LvHXuRMw7g3JibUpGeknQWhGcKroK7QChHxS2jCCmnALdH8J3xB3SRsNAdoXU8dvsY2jujhu98ZGaZLva9LZ1La",
  "key6": "3D6fudV5pi6Rsj5Tuuv9xVASheNLvbJTYL5qa4NnWwmh7Khud9PCB8QfhtiFjLzDDkB7Eus4hs7MuFgxFq3H1dEg",
  "key7": "2LaQytLoWkKG4hFedxjABp6m3vKb8zMRpHWSPuA7yaNK6YK9UvMhSWBiuYqV5TQ1v3diUm5uh8r7ega734BYDar",
  "key8": "MV4pocMnbXS91YmbQoM34YuTs9GtY7758XkAgaztqAaPdSBnNtrV635jEjMS8gNxeNfiiemdRKQkNn1XDZ1onJJ",
  "key9": "5gmMtGRQJewDMuL6THWkkLadmqQh7wNfewn9ByVxbyH59xuREMx3ZJoqx2pUXXHDHWMavCJermKHrTtboU7KKEg9",
  "key10": "ffKYjUjR3fMQPPPNdSmpF4fVJ22KndCheXMygczqswtBmQR8tMNBYqmUGpVLbvARLCtVCTnpi8oiybygaQTxRgU",
  "key11": "4P2RpgpksDbHJnyM5gjDE778QUVfcMw4Lp4M9pP6s6TB5pFuZmqyPWH98dWjUVHXuV55hoZGMv4HM1nAS5VwSB4T",
  "key12": "fUk6XeNTzyP53hyXFt17Z3tsfgV4U94twvcBjP56UCUMRPbvxqEbPRVJbagoWnk28biEMd6jj9BmLm2AeL3UpWJ",
  "key13": "3YXyWpdK1rtHaKch8MVfakdwDZn2Fr8VqvPsXwrTrz7X2xFWV4dS3L5PRf5s9dFKFhH4kuy5BstQmu1xoLHHzsLk",
  "key14": "2LCghaRwbeLQCTrHFVDRC6yEwLASRMcYbpuapXZ7Ye9agJ7CmnanYmtg6QRNL3MaCmzd729Ua7oYN4znan4GDEJf",
  "key15": "38FmpWcyzycc8FQdiVUTd4fcTiVMTwfgd9YNqs83grpW7JFfEgHTSYMmXToWJXGg7siDcZLz2Fa5m1jxvwi32xXm",
  "key16": "2eAUqoWXpfRxu8yu9HSXrh91MJgr9vB8yV9FSTcv8QGYSmi5iwNN2RGwDmoaUxexC864BbW3CSRw1T7QV5L7k4bh",
  "key17": "45UB3r9JaYeT8BWccXcwCV1ANTf4C4w452vb5RVSAnZSncqeJswcQnvqsjHMPKJ38DnsF9efb3uxjuDQqDWZZgQ",
  "key18": "3vn4Q7H2bXMAJ1krUcHmwHkYdNM2YZNyd5tyGvsZvc3rMut1dCGYc9Bx4TbHQaBPqYqWBLb4ieVLYxkSya1HLCUg",
  "key19": "3jnJ8xfikch3jCaAQiYQ81zVyJCXUN7xBPD7DsfriXQ2TpRj7aWA4EBMrZyT99Zg5r1uiE4XUzhj9ZWbRy858KmA",
  "key20": "3XMqyszFASkybLsKSDETFg5gUZ3Thif8trG7jZCNVgAV7JsFmvDZqRAPfAE1fM3cA42XTPyeJntS4ccNtkRw2BXd",
  "key21": "5i7Ki6rEK1ZHHVLeV5hkhT3ZczHAhdFXNHsQdjMKbjRq7MTMnkAX6qHsNTptzWeuVZSHbfhuFSutcz3jpHZgF3xC",
  "key22": "5HU3VmWgUfnDQhANb4i5AWrZLVhQUaHERuPwDpFHHW4wFgbLipaK5q2GeFkPeY5i3NCmgDU8dBGq6Tb7oTwcbyub",
  "key23": "4mDNb8n8WQG4bhwaBTsTq3gHqbpw1acYxGAztd9LAcM6hL4yEAoHvYgUUXNtHbUBeNu3rSAzQwsyxmQ7FYZeniHz",
  "key24": "epKSt3etngmufpTFVZeffxcwCncX5jvgh1oE9Gw7WQU4P5LQsWwt1Mx7TArcYWNPxMURExkYxyDgLhf2V5kuUjD",
  "key25": "2YAcb2WeVsUo64Xc84t3qqWCWsUGyZs3tKHnzeDLf1j9DJ87aEewHT33weddxkUyhS25skqAv683LjHsvnzm32P8"
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
