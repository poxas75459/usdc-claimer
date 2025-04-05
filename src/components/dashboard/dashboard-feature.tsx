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
    "5AZqErhRdPXacyNgzpjeaoTFcqnNq21mVByDqay6FSRxsZ3UPxPYFxwpkHCv1Zk23b3dq8ZerkqvPYedorULyDZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTJyBGMz7n2kuAqH6ohCwgKkuUK8CzVtYyjT2Jb6MtkVpecRDsJYmQeT5DWhRudVrz7JYLUPWbtUAmQG8iaSjoQ",
  "key1": "ESyzWkzSKvDjvmpV8Pz44VktBdDQFJgwwDyhzutEuAf51jERrJYGaDZjvtHquoccWqsYLchBkq7FtqCrr4EsdXy",
  "key2": "5N9iKeCu3CTXtitscGSGENA3EZCg3quGa6T4bcjweWc7B5sEeszf6RFQDVAy55piCGgwGNAfc7siByQd8w3v6imY",
  "key3": "2tNJJQvXnaFv2vCKkZKWy2WXRUPK9whYd5B1BaRKC6dU5w96ULuXqmXcbJFDM5mHpWRmmJNxgX2LwWXiAqc7qj6Z",
  "key4": "3AkwbSKAywxbEHHZ3hTBKfsWEoTRet2FZZW8zA9VCY4ad9AwAHB5M7crTLTGwAJGuNG4DhKSiyyjFEAMgztA3EiN",
  "key5": "5fA8ZFmvqDN6VcRKj7FYgnTz4o4BF42jxG644brBWH6hXGpwoiWVTYjJJ3PYRiCn1KYTBzr2Q6nr7LcB1o6bLDCE",
  "key6": "3hHpxndHpKaUt3XzV3Hp8KgRv3HRze7Qj7ZLJqirVSjjZRxmPEyC5sMLp9SFbd7E4qZb1VeQag6LpL2kuKbFkX7w",
  "key7": "5CA9Sq5sAqhRWRCd9ghkU75eF3bugKLG26urDRFwwrEE618dz4a9jmrunZYRskLFGBGfJFE2V2vWgHc1ap3w6GhE",
  "key8": "5pGxzJNi6t2HWVXGjCuh9KA3TmRs1nePVec2QwUv6Z7BP9mvodX872D2xhgLn8CJSyRZ4k49L7HJ1evda6hdRZUD",
  "key9": "CiPAsXaq75rq2LM1a5nNoJrF1BznVMdUUFvczSz93yuQbH4vdZQL2JwiySarF3v3pnXPRgphkYpnQkUuyf37bXe",
  "key10": "38yrjLms5pzGCHJ91CQydMXhZA22AZWN3b7Kj8D3qWDBv16cs1Q8JKTns26CjQzr9K2yjDyvykavqYJjrtoYHr7P",
  "key11": "2HEGPvjeTCxZ5N9chrQQ7WDzkUTMPE14dCGeuTwxDcvRoPKpGm6EgBhX5nR8UMSt9pfPKT1twyHqLCjnU3KXeLaN",
  "key12": "4FiHQLeHpD2TzsEU1k6AEGnnpNrtLGMTzUEMM1YbxsqB83kdMwAZiiW1N2AuYpieneSbqWzx42unDj52nzoweCqj",
  "key13": "2q31QWVWBLpM4J5sYqfRbmS3VHSue2ytUrfLuPR3R34tBeibUHBcnj73u15ZNtGqcUVdseujumrEYzKKL6BMw8qJ",
  "key14": "2cj5QDZCB2mdhnzDJJ5KfDNS3DKKSANkj8oixgGEpwC7vHZCcQ1Fc7XC2yS57jdZz7sNH8MDXftLRey3g6BgpzDP",
  "key15": "4pVj3m8ziCRsDRwsvNA6Q5qzLef1KWC7Es8S3caZjbDuQGtM4gc8DRqSeRUfnHWgaURFWevAPVWzpd4jCrwsuDdU",
  "key16": "5tKQ7YXFGLAhK3NS3co419e7nnjig8E9A5vfTisJott4Zp58JcAPWcY7EoUQoq5TfUG4mQGuAgzTZod8tH4rPHpV",
  "key17": "3Tk3dZzTRPMhvucBaLWyJEq2ka5hydrQWUPTvrLAuHADHnmRMymx4RoRh4wMS7QDqLHTBG2pq2jLmeqw5Z2ozUUQ",
  "key18": "5iBJ1cBYYgpbvbVr9bQPaCZ4QTPSA77pBaxckNrzkyeZPo8o3NuZrYBdGgj2vaE5gCrAFT1tEdHu98XLmeJsraBe",
  "key19": "d9VfKHYo3jKejXZhYh3rcWdhLhLhVGQst1GJPFXTJJw6CsgDZJCNCcaUjzaUeSTtcP8hVJEqdG3uiEDVpfipspz",
  "key20": "5tYcBEz1QdDN9cTEiidfNELLEPC1ACxSjaMj1AxMfYJa6rqzjrNe7haaBdfkdLm7LMYDaS8Ac2KCysG4HjxarTDP",
  "key21": "2RsF4zFgooqSwTGFu6n6yEenQv7tZwX7sdCGpwD6eFWFJUjiPMh2Nmf5x46auvosmi1RJGyTxNzRQyacjVPeATaU",
  "key22": "5TiphaZzcpnZ7iwF6k9S5Zizxv7tMPTkpUuNwetQhyi4YqpSbpmaPoTFyB5aw6QCo5VZ9CzKHqiWxvP35vYzCWDH",
  "key23": "2WMju9YNZx663VePjYkALSDZkCQwytvEpgsikRDKGLrXEraS3NZEwjHmfkrNYqfVbzTScvZL6WxgQUdRDu5B7mia",
  "key24": "WArfZPj3PXnBGhetdjpcTg9brX9zu7MHMpY3ep9U3CcQdFxG57P1N6uFuYWj4KALom87KzpuoKMhbLBDYxBo8aj",
  "key25": "3f4VvGeZedjZu2cY6S1PQGWi6KpdWBscGQKFiqxD4ZZCD9mXaJMcg3aLa4bFgzCdewTus25kd8FDuDSvxLwCUsrH",
  "key26": "23QAa5CC6djGHfu8a9Rkwtn8LqoS73g57WwEr4EUVcCMyBPG4tEvVSg9gzyN3eQ6zHHzkL2nz7Aeq1T1vyPaJbnN",
  "key27": "gvypss8Zs4pa5m8iixSs2nLwHPSjbbz6Ty1FxigA7yBeWZq9rS7R9FGxJf4UFAWs97eC6qdM4Y92qyPGWczUpDa",
  "key28": "56qdjhkAQao7SdsJYRzzMG5bvsfxeje8aqm8wCR8eKjdYSB37anFtYpV8bUiStfeddwupRmWN5Uo1srjjw6rzuKk",
  "key29": "49rCnu3p3bX8xQfLcHtmGrCM1A1H9aRFHobqxt694Xyt766AKBG2zxcBJVz4tFLQ7toB3VkBaNvbasoKtwbbD4qD"
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
