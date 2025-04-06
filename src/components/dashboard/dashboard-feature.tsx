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
    "UerJqRLQHTDt965itAohpo3aRtEghEDf9Zx1gwg2JQoeWAW3vYGrBNcLxRpwnwZ6vkocVakYocpVj3GkeqnsDp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63HeH44xofeE4JN9driFcBBey7A5VLBYxb7xLSjWTxApxZmcUVpAa5W8eWhjzhmgHjDfuWzJMDNXRAHHAdQ7LFeM",
  "key1": "2Szwwe53hdrYSL4N4cRSBFNxHc6VTSCwqi7QQ6a1dyGN9c6u9dT8YDbxXnooLLvsgN2HtKAqAmEkcXFXfAHbjyST",
  "key2": "4qzCi4T8gAqyjJ612p84tGe1n7do6HiQ8vMsn8XvELYvWL3wX8yEyJ6SiMM4vx731911BsnUNwrTfcT2YNESeoMN",
  "key3": "21TCd6PrnpPHLv2NKQH8YuUzSmymo4aeFHEzoyzm6DyRWYn6cKBeje9Mg16epUWjWhRUmTChZcWrXZqANbSk3A7H",
  "key4": "3gaK2MPBY6DLa8iPHzcsZyCLE5HuM5TWAJg67B7MgjxBW37sDmjaUUW3rePPZpBJURT3Nf7yX4vGDAujrjJpGy2G",
  "key5": "65YJ3XrKb1anjK8JJnePyz2Fb2f4tDTnxAKDypDrnhcZtG6gX6BgZ3QLfpEi8f3LSJkkEjvSceiS35DbyUVE6gS3",
  "key6": "4qn88NDLff84J2XAdHj49f9XjoMirdnc4adYiAMf8oggJWVVrwK5ptkgVspzSb9oZRScyyvmYa43Ht6f6XWmYawU",
  "key7": "4eLCwM14pxRTyxoNwzqr1UintyVSNgZvbpFxtyjC2LVkaMjP3LH4kBvDu6GVpaY5bBaYPJgtrXbp4Q2hpQu8zdJn",
  "key8": "3MwGQDMtKwJnpf6zUffYUhuXbq9SvjXWLtXybe28YBsxkS7tbKBZQYkNz4sHBPTFuBciJQGrH14myN4nATeqdgQh",
  "key9": "qjXFmaLcWFz6gnyvbxDFomSgzsmuXQW2fHaDDWPd6qPjsrbjFirkoFCfjh3o2mHVqLYBUTXeQywpbQQDHPn4Vd8",
  "key10": "3fLh2eEd3JiGfSjUczkGwZBWbwpyxNYFwhPUoPFhb4n9F1ZFpKPm5LaAaTDmYahfcmaaGdmNcW5hdT7AfBqaSYF6",
  "key11": "a5vbTf4xjuGtN96eki3up1HLoyqss16wbmXTNQQPMFyFnPwmWUTfh3JkUXy4ec7MerkzsagTEcsrbBFRx72sAdN",
  "key12": "4Z8e4bhy5JUR2SXHt9oRsaARgL4y2SC3qxRFaCtiN78i8zL8c3rGb5v2C4cxcs31BCSd54WEKkQ1bgSpUiG5DgJi",
  "key13": "2VnyRUavxpVNabZfQYX26xnBYiVutDxKqMexDu9d58fpJ6AkPoBPsx3BrxYjrAAVaWbMkzEgE9ckpEi6KBNCRUdQ",
  "key14": "4sYNRTG8JSZS4DTK5qbDuAwZmXmRSed7AkzmVbEKHeYzx3CjB4papNB4Kkk5H5sWqVXmkbormugCD1ckFZF1nWxf",
  "key15": "hhqJErnKfmizdURoMmi1ebjodzBbEampG9986nMvTEjsmi7h5yx2H6SRF18LLydNBTrqopeUmVKUtf8mWHeZ8aQ",
  "key16": "3RTqp6ep3BcYTMomFxUjHexK4vDLAXi3zz5bR2brzyjsDG8HHsgQn12gEcBKyrtozR4F1jasSLm3e67q8HZ7Gwo4",
  "key17": "3sgmqoHLFWmFDyAuDKVy3DFaQoxuVPgMNKJTPXgvMzMeJDhApUXy5cPhsPyVo2UBFj14aBT7wwRSUuEeG3NWptNR",
  "key18": "5TW3xdmzo1H7Lgk7GbhYxxKxgHjW9YCPTjDh7gLRjV4AFamExtXvM9PoJqnWacYfT9v5XMDrKPJvTjepMbK2R5fe",
  "key19": "4PuX1cwKUNtjH3hmzgwYUpWu34ZoYvx4Sr9zVeMMZ2LeuyDbj51YBVh5R1AniF73JLBfotSCsENrzcdJ5xV91DAc",
  "key20": "3LugA8QJXJNNwWLHg1WCBX4yonRrEehpSqAjfKz11CLWCJyJwFn6oqkegmqb5RV3m4AzkZTrhkUyuQscjGFXZxEo",
  "key21": "3dme3MsWeBS3q6YtZPEd8ypuWMDEsC2yDt5cCjhs8pmjCVbFiJ1scga3JwY8DU5A1XqN8b7vyocDv8qVhQNDoVrp",
  "key22": "5mdwHmC5xiTuGw7ojXoVS3v6xpgCcpuVsEszDb8yNfNk8uH6hyXQ5s9raT5X3UJUmmiL3sfDt9oAV1Z33mE4SyqE",
  "key23": "4GbASGyG83SnUWjh2F6Gm4RYPhK1e1cn8sv7UcVV3rs5998fcSW1EHMJwn5nMiPLLWaTczvQCBjCMB54qCfYBLZ6",
  "key24": "64pEAw5k94YD4mUnLm74i9UmCcbgpC9Vvceb1jDpbE1rp5JQEbJam4PUBfuryhJ97d6QkvkJfgNsKQpuK4mk2Pi5",
  "key25": "4t6Jv4PTYjeAhBRiNHxyxDaKG3fVh7oP7qQ7Cgnqr67xcQ8qVBGDiuT7h82vpSFEAMXecjryNywVNytLeeDJ1Tr5",
  "key26": "2ZD1UfY9WWJFuJK9CafAGZShps7uQwCEomJvLcxeHMwcViuBLeDLkTZsnktRrN1hHgfQWMKHk7v2ULYj7pSzr24Y",
  "key27": "41yEVHvVmjvmuFmFxoGC58cMcWkfQJtHZrsRZp5s83g52nBdTQF1UBBZPCyMbGpfXpiCkerJAqmmJma2xqSoCUpe",
  "key28": "W5YLT52ssHe59Srrq3oFKqjn1BDqnprbNYmtu313aybdbrGb3CMkK3EZRJmXMfqbEYNWmQYv4BeHYYPrWUDZUWg",
  "key29": "3k7gw9DzNktCf17kb5Lq9ccRoEoLi6Lsc8GxFukqWNf6gkxjHtiUVKuP9yn7uoLChvkryM5fYLcQJHeVmGJKeVrN",
  "key30": "5GxQEdYT8nMy5Nat5xkcWwCw31wLCeSwzRpyTD4A1TGtpHUvHC1CYkGY2tTDZaVjxdyTyreuuMNuxAAfnNCZUpy4",
  "key31": "2WybpPT7mo5gJXqBFMkJKYDhKotQTRrDZ5JopryAoTBZN8sa1HAT1FDzymzVWu48cUwTq1mH8Nn4hkAUa6kEthrd",
  "key32": "2QV1DiYMzB3hi55cwxekFAL7qGQy51me3tYSaGHD1nGLXpVsCfjQWrR5bCHriEgF1Ws7bsT3JRcEF4JNAoT1R12T",
  "key33": "5mYTU5DQvSPFuPLH2deR7PbBdCndsnYcxx3GruBvoXSRSNSYTLUaKxCavt9qeXat8S4uHjQxnPd8s3VcPgNdxUBU",
  "key34": "3Aekdyq8NZiBds5vYTDLUoK7Qfr7KrvW14MUzdN7Pw7HLnQ1NMX9NtxkQGDQ2UFpvhz87cT4TBgTnaVf6AdGfmYQ",
  "key35": "Lz7fGCxqjNH43teBHAwtryyj1dr9qfLbVgDQoNXgcVg4hedAczdJfNZPWZDFqG4k2c1ZPsfoHf9L3h9Rp2mxsGh",
  "key36": "3tsagGfTcMVpZZDEsW4C6nsFHuJjER6Gw7EDUQS4xPP4KxPHiM77NRbyiwtRQMafiCKsFRjAFNPqyxLrUxsnRnDX",
  "key37": "2JQsmKUye3fY92iz9DKxkUwwG4PaiLVpTLeSJFLAVvmZcqHPYMYeE8caaFQqb2A3dqtuHuc7iT3tSBnmbsaf27i1"
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
