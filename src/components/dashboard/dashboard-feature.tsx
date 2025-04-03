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
    "2713nKvLnm6vrYU1yrg7paWeQeJqryMGeXeZPDbJLgTe36mzkEFBWjxCMXmJ5zGKYXuf624Z3WL5ch2XpoygHfZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNzdDqTBww2f13DieZmsjFga5QYNacMkJY1GAkseix2JyHR8841h3uiFmNy7YQs4oUTJmEgYfBhmA79cn3P51z",
  "key1": "22G3vPERYpVBDXm7ZbtUHJjANPFKVFHSS71ST6aKBfarV7RmMcJrgaBUh5VGHWf6L46Bg8ikUAQeZaJ1sPb6nm9c",
  "key2": "3TrBg7iRzvA5wAVeQM7jdp7i4zvjmig3E5CyUbtPuzMgLhvtwzyZDHiKipkhFfoQvtBQLq65hu1eDNpCQs88T1g9",
  "key3": "4tbUP2YixdajLPVArNFGwpPSRweq9fUE893Jgp1MCrZRkKuVn9EWNKdVpiYQdSo6GXCKg1ZsStbBRM3jq3xLRhRz",
  "key4": "47gjhDhZrnKmmTmqZeg5HsyZo3bGZvrwMf1ve56jpDUWjKhLoMuYNgnvtDmkatjfMFkYSXSafr7AvYav8kqyxjkq",
  "key5": "2XDPHu7cQx4Bxq1wmmqvwC11RJfHuU5yx7pic2KufZLG3oD3VASpqvVvPFzaeXuhDEM7Fv4kme5iGWmrtcV3tuYm",
  "key6": "2fDay451EBctL8WdRvSa9is8QMDDky2rF3mFNEonPukvZdTsaXyk7Fgxtn6HE7YtA16fSxM91iNfB1HVqQmDzqJS",
  "key7": "Vhm2bqo19Kksm9yF9iQACKehtQqGP7LCsEo4n9aqA8b3w8gjkhMtWcQ2tn37ZSMnvb4YybDhvuhZ8R5BPe4Qguy",
  "key8": "5C3jg4PYaY2oHfCxbadvYnTPLX9QJkrC9KJEdU2UGBckJTvsiibhy7G1QymijXCE1dqFtjuq9SVW1JNDx9sLnNy4",
  "key9": "EJ4TPHdkQpA2Vsdh3dzSJCDzm2Qg9izqTycZzF6WayZdH6dGoTWhBdbKAqS2LDCCkTm6KdUJvQHKKyyQzmhsbCa",
  "key10": "bXcBYDKgvVVeeN5GwYvqJt6N5bRZ24jymiEwxswWYotGD6jDxUX6h6JnyYPmc1xntitjLf2UPtGHsbjoEKGCst7",
  "key11": "48MNQE3AsxRRXaRfjp4zsnohPiYx6Kj6aQuigLgNNcSXQ4Q4MMnuZcWndbBnaKKzxHFfjUPkeDuzi9guk1D3EeVR",
  "key12": "26tGawdvqJke64w3ZoDguVfFbMSv6SYQZfPd7Wq4gT7jzD4BP3po5ghx9tn7RYjPECrgPZdZAdMdpDyndw6fhcz3",
  "key13": "2si1TbKPkUUNyAsQJmddRcfzHvpzShtydy351BWzejERjVPt77VV8YdKuo4nUYeK6ym32opn4UGrs3mDb8zrGmBQ",
  "key14": "5WdZZ7VtSet7reBDAvZKPSmEmXKEXbEuWiiogEGSF2kWo3LFXSt93qYtBPoSyafQ1iYF9nLS3qsXtoCMLx3zeaA7",
  "key15": "2yCtaiLb95hNGyi8wVQdidVdcd55s2YcFcwh8oc9JoHxQZdiaUwW1uLU9yYXBxSvXJHfBUMuZsJRe1j35chvT75R",
  "key16": "5zn4YLCGZmFxRCHZJPzLA4XPYcU4F1jUS5JEVe1z43jr9HTvxAUr9Qtw8HWJSUotWgQpqcABatA3DeUGhqYQ7XXD",
  "key17": "3k7X1xqXgjiBAqZRwQsj59F4E947xzjCxYaUAE3mraYQocnBzdbEVRE7XmKmLrbqoy4VZkt2sDHpxJqvmdtmDNtF",
  "key18": "2dG6pFpXeKwvgREo7g8ePcT1V7AHgzzyPDGbVA1TRkCZtLqhWwyxYQHkdzSyRJuC2hPbXgN94AF5wVpewPiPUwRX",
  "key19": "26SN3ncYiUgzM2ucxSg5miP5LQU2omZjW2T2szag2d4dtonJ9RA6S2t9sur96kCZa4HhjSXtvpjueJ3hyHrnBJAh",
  "key20": "5UcfJbwxQ8CHa9tSso8qRLCC9sujMgrMz7Jn3Hn4tBngf38342GaMM6spdu7oefb12LNPUH6kMDxgER4nJR7AwEX",
  "key21": "3W49j3Wo9NrQ7Zz9PMW1ZPq1KZeyex3yx3ndHzjeRy5Gj3ai1q1dz2U5iAgMHpFLdDZd3wrujPDXvPQaCGG3FcFz",
  "key22": "2Z5umezHzp8VrtqUtMKFauPz5egntfu2AuDN9qKqC1GQpTqmHWYFLsppU1nowF76iqV5dgSgGrfbCWW8DWtAN5jA",
  "key23": "62XWBt3aeoNPdJhM58LSmQsj6MuPQxyHYYKqBrNN7ctaBvVnXdGzKmkwULG66zkLiUvp7y3rxtjfxtwJApjGcPjj",
  "key24": "MFAhSfrNyCYYujps3sz3vcuFb1YbnccYVUejRKnofHTrCNDWpYxCWYTrrgKEpHbhMQ4NdDVHppPXn8HNPUczxTB",
  "key25": "5YUB8ZMLbdQvejdN3t79u9G9uwUNjqD8wfazTm1kvHfthF4LdmUuHavspJnB9bQt8BETLPfgMPY1komuZh7FWS5Y",
  "key26": "64XKZz3oTPrGwCLBdtT5WJBXhxbzGezNGUbqf3W4vWBs2e9BxgLBXccEJpCLdySB9ZJ1tYNZN71uhrHz1T8ZCECz",
  "key27": "5nvtcVfgXPWbNjVEDiNVgVJxdAPK1vqxaTkxZARAL3gMdEeapXUvUADV66kZVh46wmxzEk9C9Qxa1iXZCisaryf7",
  "key28": "4JHNKMaWamdCPMVKqjPC2vwDYafaWso4KsrCdhWMhvFjMd1MCWciHwLvmmXU83ANMDRUYrBusiiBtLoUcjLEhwHA",
  "key29": "hc3JHCvrQfzwYMxxgjCA36rX7wziRMzZwxtBEWRGDUYrwhn7nDK7hjLbKpYP6gxgZb1tW62t1hGY6qwBMx23rA5",
  "key30": "4Y4qjk8fDs97SENLVAM4bzpkx1tPcLMkfXSWYMBMgoY45BzTXh8CTpBMaBoQRygFpGtNHZWpTaYWv3bX8NUcXkeg",
  "key31": "4QRMoasRfzH2dzpnJaNAzheK1stM4mzY6pNv36Lm7wRgTyeamrTt6Ec4m1NRkSNnxHRECoXqFUhMuqya55RKjNDx",
  "key32": "24bye7NyDVQCJ2QdtEET5CYtd8KQpwes4yU8a5x6ChjWUiKSWrXfTugoW48hWWYv9v1WPaR7aLevSzXzUxKfXPSU",
  "key33": "1jQDr761Qz2xcfnDeTXHYaQyoQR8E2ZQPdnebfeTgxbgtnZMEwfPUdqRvq9Apfwho5zQbCRWno5EXzQMMNVkuKD",
  "key34": "2zSSK9umgxDX81y4yg4TrqpF6fpVy1S74epjVYxt3YFN6dR7R4tHYArSgkhTVFHPU7Q2Vde45BTYgfWAx4p6iQx6",
  "key35": "3JPMLxDPcMApcq5dsJpPrja64aKAn89mUhQCvm1VhSMXeSe5QcCHFhu2mJDBc5nGqo53Paft4SSMjL1v7uzVCSky",
  "key36": "5nDZ1jb9wDUza34gtTKjf25R63oQFTx32BVuGPATYDzenQiQtbgDqjBj4QvhtP2Uskd3AK3wvPdNMkn5yZMXscZv",
  "key37": "2gfuXKex4c1X2moydVzzjLWTnXG4oAhPSzJs2qRwMzDe3Ed1FEjxNebfCLXDaEQNgGHQqaMjmq6kSs88dGgFDcez",
  "key38": "4mTUybTqkpVEmPtQNuta5oFTs6CWDPeVqovJaanpJCZbumJGBkEuWit3dR7fpyz4Tr6nnvYeXm3e5FCLbKNc2xRx",
  "key39": "5rh6SH8PYnoHJCKJDFvtZW9q4PpSYVaWav6hUiGyqu38LkXSMcMPLo1u6eYNbYCKAMpJKVjeRRfUii9myqphqAfs",
  "key40": "HGxvJmG2zJi9XUr22FvE4bkimyis2rmRrYVVhYiRrM2pBBu8UAYpyC9khToBv1Bj7d2cKfyvHbySsQ7CCow4x15",
  "key41": "4kqqX6xUW3N3acWq4dsTDgKZZhBcRFEoijj2PV4cynZg2WJPTfsteHDbASZTKe3VzbEr4DLwGKZWEFDqHj46sfcs"
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
