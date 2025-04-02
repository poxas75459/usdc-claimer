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
    "4xEx2NYagdCfuH9LiNa9QuVBKxL7HCjnmahMcw6MDAuM8NHxCdsadVXaudx6v3sDSGFDXvRUDVZbQmaH87c9MZR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pMAReEm1exJKmD1RwBaowpNGMk44bBcVj2QbXacizRGa8Kzoyf3oHVCXH6dkD5NBaaMffLaW1RAV5gmJah7Fnqc",
  "key1": "NDQsiZab1TnnUStAeDYxhEDS6NZddCegpMiK1VWJ1copV39nJ72sepFrum4dfvb4FDdxpFw2BsJNXK3vudQ79Po",
  "key2": "3k47G2TzhsNRpVobV2JEtjUp5j9C48kZBReXXs4EkxddFzf3CT1yNYYYnq5KHYaCUznnCN2VgrqiKX6MxXiUcqG",
  "key3": "3JgA13d9DsjH4or5GMmE7CnxUFf1o1Ru21oRBRrrGzQGRK6PLFoKDR2N8BsfhCAiGCDBcUwMfjxfhYYMtoJAgJNX",
  "key4": "zS1CSefoPHuBb4o5ANrD4w2cskYY8KUxUnmjBH7cpeLPpHanoKYPcwGBDpowJaP1DKLnUwMwwnVeEdSZqubPzjK",
  "key5": "5hRLeie8EqgB2L9KoJuToJd7Zg2XS4MyT1YQvgtWLn4kcNVPRfMp578VtC8aXfCwM9KCGkGWehTZHLgXADcbyRLX",
  "key6": "rpznknguJ6AMfFsMToxiFKSqNv7iM6qUSyWipsMPwYVLAVyJBkHbWv7V4fUH9SNrMVSLZNsDMxek87C6WpqExt5",
  "key7": "36Li6MsS32bWfh8Nth7ZPW9btoUjgdoZN2hk3Y2U1Zne1nfB5oqdMnkoZpGu6XXqMX27kB2Bjybgg2eo7x9HvBsp",
  "key8": "5yTA7whJ7eQkgqCuoWvY8CtCvXZC5CHNoZ5jPKVMMjt6VDzv3fEHBVhuTBFDRUwZGHugVFSNSF89epxXdrt9kfwE",
  "key9": "9ouQFzQKZpoUgBknLHPFjQCsoJTnQ1UkTsiv3wZXUKUPjcdztdK6iNxbVvTWXNrXEfTWsV7RCVrdmBenmYPLXMj",
  "key10": "pYDhFnqwTC8Qgrg7FwkWabsC55YD95HZkpj7iacL7SqKR1jwojUDipgZgZM4RtRQec75Q5nvXqxw5LLXzAMZhoQ",
  "key11": "kJtpePBSgQGUGmBYAyYvgxhkrKvvtH7nEhvws2TyPWSyitz3fuXdSu2anUBMYVTAWXTGkkYCaSxfT2xczikCp1t",
  "key12": "333jbj9giPFdrdD46ypdzFrRAg5LdzCkVXoFueEFF72ywxLhMzUf6A747m5wnwwCEsRZPdceSCzatzJJgdTqn45c",
  "key13": "5mphvhrUSSyZjCJHDSYpT4tDCBJm8y9c1ZM2NwbzMw6KYSNH4RxEa1yAuuQkyTxXmxTdnD1Q6SMAMxoWVuuYxDS6",
  "key14": "5bhXqpiPFVpuFYZdiXsgceWHT1udDkvsHyXoqsPmnRkjDsvLRLkaMTiEzBvhv3RRBB7uTzdzqCPntP37GAEUAkvB",
  "key15": "4fcbNX4WGyWfhKTQ5YryKEynULFFh9ebNjjhEZrY4ZWsygGTKqe3SAK3PifsQa2cU3YTxV8wMRWcRVgrmaZhZ1rb",
  "key16": "4BpCUejAYht6Y6MotYEaSQ4BP8yMVE2bsEzeVQqLropnrejHNPATUJt1kYSaSZD9bUMxujEm35FWtqHAVAzTGneU",
  "key17": "2wyDKie1UHaeg4JPjHECjFUunGsbGwmmtHXudni7xC1Ydtm6jva1QJWFHHpW1pyyQYp5Wqgpmh1t36PFQKyM9ego",
  "key18": "5ojvfLgx1RD6udH2MLdFX6QnDvEibQ6A4EVkxoPSYLVrn2NmKs4pxCeBdSVkgCRvnJLbPb1BYmmquhxsxjJgU2X6",
  "key19": "2K3qJS2TE5m7fVv774x7XSammohoJDFY72ah68ms2yJyCRQtS5zcUqXSt3iwL6HzgJxLv7wCW1iqBLQW1FU7WoD7",
  "key20": "2mkjyNn3sMUfuYchYFiqwAwznWT4C3iuHQAyRMQFpmRZBhq1HrWbxHc6tNsNgTxUew5i6ToMTF73yac8Y2i4e69D",
  "key21": "5oiZ7TbDfKoSA58tXqfLTby36vfAMzEUL8rbnnMx9iTHn659d8AZUtKewryiD4Kexc3uT2b8i6fKx3nsyBr3GRbS",
  "key22": "588Z5itYsdLCocHXRWRaBVK7UbRxY1WrujZGPALfRi8StzWM1yYE7qjhr3djsMtEasXW3gZTwQwFSzr7aefNFQHo",
  "key23": "tyShMdNUm4SXmJk2zMCZg9pofdrs3ftRwFn21GFnfWbSnJ8RRTC99suC6wW3fCaszsP4n9ShJWcMvCk9gBEc4Ru",
  "key24": "5eycqvK77s6w434BUzn1qwZYhxTgoQuGop3VdiFFjWJUAuCtssFo4DyA4qdyXqkQypXZPur6i43t3mRA6K3Yn4s5",
  "key25": "5Y9yKXjAAAu16bn5VKPJL5i9k2cjMHM4nfsr323zcN4BS2BTKZE5iNndHL27SsRT8RrmHt3ptzvqFPWzLEVVjfhc",
  "key26": "4H2KAJUDSvEUJR5tCfKrr7C1pAR8nBogQwXoZXQMmyE68eoL4khmoAXQ5dyfoGu1YrkJ4zTXVqoWNpLyo7X2GAuV",
  "key27": "5USbDk6gxFPfH6PwMXgyMf3FGZKvYvHZtZJALt3pDjVHzXp46BWPd54m3XnTxD52tDawfanb9roBeBxNGS63SkJ7",
  "key28": "Dud7udHCNjJd41orzVqDNJjFP7FWif1aAQzVgiJfGWBVfutgkGnfQW5D19yFTBKMhGAw2hTJrZQvCG7jYprjqe4",
  "key29": "2RzhRAiAUmEZEg7EYto6ZtYWtoP1KP6gTkseD2CpUZTDHgRdagRxHGQJ9bw9xbgyXNtnvDzc5EMXZVqh9JaPc75F",
  "key30": "n31FSrGcf2CY1XZTSVcseYdK7CLNyueF9DpwaKJtgVeZB9nexSmAJ6DHhPRVyS6UFUxUAcFZhvMgNb8G7VBd85B",
  "key31": "575vbqZ7Kc2cqrt924kXqGe7vpmrtboJRLCYxjx3M6uqERzGKNkqSyS1LNiBSMD7woSHn3tFuVYKPmgvLVyTrvNb",
  "key32": "2vk73Wsc1Zdk94WjBZWMSzRhQjgEQn8Ma1EFzi5zFzmbWKhD7byS4KLayCH1VBR46QxNVMHEfE86EZEKRTUdefhz",
  "key33": "4vxtuknHyHvHgBzhyJBVnLo7J5vkpky4fiVriU249dBCgK16dcu7VJ1Jp3hnULsZMKUUh2s9BkXUejYPR6eLyY3N",
  "key34": "5hSB8nV4njCLE5Ej1xgkK5KqPo4pwj2d3h4EAvUh3v2dGvvpK6DNeKKbnD8DsRtZtXNkvJkBuj6CvPw9ntjrKX1",
  "key35": "2Fn2wKwYKH9RTMTSkb1SXXJH2JdPUKoEsVEeQhXQBQX36BFeXZPPW49vTUHykSeFUgippDGLrao3F3yPKomA6BbP",
  "key36": "67rp1fKKV2wrxEf4avVDxS2sSAMQopVKDo5thZbhVXWNEdgGXHraKoDRU5TiJzisU6Q6KYwhZ7nx4SdTNPYcGjjZ",
  "key37": "eXCuA9UcE7fMEj6DyuBJiLwidXDQWRVRfViPHaGtZ3pMaTJsoLH39tnRm8SpzZLZteTMsdkdYPog57LE11BfzEU",
  "key38": "59bWtyLDx4BcezdYin9b82C1RWhHEbPxXZ9HUGhuV46sEnqjXzNe2RpDduhhRQMTN7MZzaLmmedXXQf5sR1SLGgk",
  "key39": "5XVoxRc556oirygZfp3fyWRWxAQ4csA2dUw48y1nEvi38i2kTzp25DWmv3R2fcPm6noxamcXM1zK41ChTBn8oBS7",
  "key40": "2Jv8wo2e4oYrpdCFcFK9YRezBXceivcZzA6x8p2jmv2X1aThHXQ5QfaehC4MZ6fuTKhpZGaQ6L1G9n5digUNswyZ"
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
