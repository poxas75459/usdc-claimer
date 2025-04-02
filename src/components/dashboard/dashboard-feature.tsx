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
    "2vv2ZypYnYPDdVB3HKrpag3d3LdDzLPzhENBdzved92D3QhJoywn52erzYThCzKMEgLekHb7YSj3kqLrWyrwB673"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hgyT4f46fa3PzgKGnVx96Z9nFT5tPsJgqiK4AXyf9mZctNsk4qA5e2MoP8avaxuBXey6qA4CMEr2WdZ1A7uiEe7",
  "key1": "41XCUndbSfHyLMFwJjwCQdWVQtNHeSu8s589RucHfRoppN33dbAce4HcjtrfTYRVvToqHegRMMToZMVA92RkQxRH",
  "key2": "3rxzWsJqWTSGYitWMnQ6qhkPX5pAKC5RwBUGJZZ6PniezJktFdFL4bYHtx8yhHwwZTA3isjJe58f1uEFf7XqMLNB",
  "key3": "5nsGh4GqNfV31fTuYQHbmCZk6MB1hCcVydEomCdtsVkkrymnctPfZQyLtVDcErxYAogyzFxk7qua6oAyek3SWmQ6",
  "key4": "577Q6eeibXTpmjaHshvfTA9fyComiJytVSUnsu1pvq16wQixBhJwXHgeaB4bxegow3iLs3Jw7C1c4oYA6VQW5SaN",
  "key5": "5Yp1eDvSbSzxjC8bjcpFXRJJcif9bsocieQjz9UvsKdPrbMudSEvwX2kv1uZjL65v3BXMdKmnaNYCYatVU6zcd3X",
  "key6": "BmrsAufSZaJUemYgeRtoZUa7cHmndYj4vdUry5pv9zRKDchYCXZ6nZjr1mo313whf81bWJmmYbVS1cnRSGeN1rR",
  "key7": "5NYSGMJGZcQyabaYfwHwcy6hQMdyVdGksU3CEBqVjhBJNVGQKmT5cWPWVFQMvvmNGzP5RofopYeiAS7Ts587gVCY",
  "key8": "5oVWvXakiHKGcd229xJzM6MvAeqimBHUDGKAafrrkph9q7FQrijCrPVD2pLBxbz11wbECWVwK1wd1tj52ByPGvXa",
  "key9": "4vutZb5Uf7XSxRYuh42F2RmgpFyoBHjiprY14z55gY3wzXgQtfj96sgJYcofPSm48ZQ1DvS9s4gSepA7EhqBpJVZ",
  "key10": "46Q44K74K8CDRqG14EJDqkpjiHGStx6WyhvXXVNvKa5fqEGLib7P7pnFJ6m7uAkHPbmARNjFCzggJ5aMroqrgywc",
  "key11": "3b1eDjRa2m8md8NuRUvtAKDNSRuZeLGQrxBKSiBVcBQwcvQCutUn58zpRG2UBQg2D7siGssceCVLzKoTuQFmTKC9",
  "key12": "4Br4zr8svit87PU991K36MfGFNNYNoXWkJ4pSnKvtEzpzNbyZnbpupAoD2PBmz6bJmFmxSjScY3hVgKDZBykQsVk",
  "key13": "4MVhGTvEskhBhMaZx8vQnwyuDA5g4NLFCdCC466DayHmvwrSc9Ux7yw8THFmQLFWMDngDaVTsg8M7PJESdNhdhha",
  "key14": "4Yn9nTxPSensyQ7tpHhPjZCArdScnC8gEGd4HF1YrXXJSytvj4k2nEmGRZUCLGkAx5U23uTRGF5CcrwWQvqdQdZ5",
  "key15": "5yWeXi6yYH2V6zWYo3Zq5JpemZs3HqsojHfEFuu2UjZCX4oDNZmXaL6Gmgn1r4yKcFnh1dYVUBLK3uvcBoPVAxDE",
  "key16": "3yJnsanXmb3heuqNTEsT1c8QNKgnEHvSAaywTxGaZBXSts5M7omk76C3MsrUGVeWqQa823xG5HmctcaTCgELLJe",
  "key17": "2nMU385UePshiW4P3ErpSvQXFJrBReXFnPmmBjjQT8uHLdvVxf892PKvnR3xnShDeWPZFC2W89GjUdQ7hdKbvQMz",
  "key18": "23TA6xWiquwSz7hdTDrndBF3WKDkLRzrNaxLDTT5BqbRqvCqPu3o65RcFxy1LujkBM53DxXinxhpT6PMCCa6jpMH",
  "key19": "2eE74H2K86TLbY8jKFEhk9pKRaWR2243mquY73R81hWvGLqUhgEqwS7R773simUcx3cvLQLQKQKCuSFjRU1Wc4nb",
  "key20": "27AKKQPGaSSnC4WfGqya2TB216WtgpeouHy3B8vpo8KbK6GV85x8Ye1kk1t9jWKDE8yd9RJ6JYAo8knjKM8xWp9q",
  "key21": "ikLDwaxH7guLDpNkWBsqZxgyWAaez4qsPGDuShsx66hrwfpJRpPXBTvwtgreAPZBMLjM3A7LCt3RjSSFAUntwu2",
  "key22": "T88wgZDb6UFa49xn1SQAeWkyn4KgVQKe3CJ4LHv83SDjHmQh1tuMVcRtm6xpaz3YSWw6dRZr4x6HPAgYtve5SAv",
  "key23": "3XBAU5xdmGESBtZVYhbLgEkJGgaMnaDCMv5BdfdJb4iEq4TJptLT2RYBP1RgzSantyzJkQMh2Ct3TztwRHA4Keii",
  "key24": "3M8r2L7UZJgmXypzLvBfWVfSszC2LrrFpkfC2ihAQ7AJtoc9BmS8WNPyLBg23a2TLWNnBGA6Hjf75Tvi8WscFJTy",
  "key25": "6u6ypWgwGjYfximwNEE3Cfb2vjLPpWNC8KZLBhJuEAstC3wKQhFcYSBDuyX1XpyiwPMFQ6JNjiP2Yp3p5byEi8h",
  "key26": "4rom8rHDKn8g7iQNMuTVtjMCoommgcrQvxrgAZmE16z5com7o1opJT3MNp3tigex1FEMMfuWJXKgrtA4Ec2cEEzR",
  "key27": "4M3DH7RFe7cNbUtDNxQMj8cbiBup9AmdyCsdBgntzZ2PjGRKtxd9U6j8UBHDCwdYzKErdwEqmpjoeMZUws13b3EY",
  "key28": "xew8tH1BcugLQF27oFiAKzvT1eDkweEMLND9XdAiooNPdpAmcHWAR3hSmVzJufyEaR3jmE5Rf32aWYEq2t8WJhF",
  "key29": "3UugU1QrjJTpfDB7qGwaZCKNqA39tsr1r8VCTdYVkqCx1a1yeKmiCPb61P8rbwCTUtLMBP4TmRwns396W1fJnacx",
  "key30": "4ztXqYJRnQM9t9RvktE72BQfnvkuK54eisKAbLgGdfpFQ59hrcnHemHzkFuBYoimLkchBoAVbfb5wwDuQDMZVfR2",
  "key31": "5fPxxCCdYrGCk1HwZ6qJ7HXNKNVkAWUgiBHd8tKvKGPMa9GdNcKpiq3NeFZwFckkAPdSgzDzqu4SkZckghcbqXku",
  "key32": "LFErSP5x5YakpXDqardZjTLZesbMu9sPj2dDN2LthMPNiCpQ8yzTah8ogrZMCitHjqd2AwHTqgJ6TZu5idEZNfr",
  "key33": "HNZgQLAWXE4MCavZtZPo3VpbWwDL9hRNpkLy3R8RB5y1hCXAyUEqUvn6iTbckqzESeLXHtRXYcbgea6ND2pcFRw",
  "key34": "44nRyMdg2S18Pp1kZtqhP8sCbpunzieZGyrUhX7FFSwXuxbaZuvtkJYaqJXx7zvyNxYTU7G6aW51etEocGoX2SzE",
  "key35": "368hb5B1YsLcMXNRrEYq5GycV7wVjMuy3rgBW6LJfzbbw5KuytGGW78SvQVVq2wEYv5SE1jdKopKEdP1a1TDmWaq",
  "key36": "3wuh1SfR82LnovaJB2X9ukhVqXvAYSYhAfJKbvUmYANMAuxMSAoTQwrcnU95rVwYpeTjSvPsT78MRFbBcEicuyyk",
  "key37": "UHahCVTYprUf4SMYPv9XV2kcdHUqn84yjdmst7KtoQiqt4sboJd9xL4PEz77rpHNsqW1P49ctsqyuwLAJUf96Hr",
  "key38": "5D7fAdnUptVA6149v7X92AzkpCe92qi9SAdWfLGXfKA2QznpR4nZJCicmGQinotyghXEm7yvy6PChq2TMqKD29HS",
  "key39": "44icr7ofC7Z5uEdDGHnqYhy5rKBRRXjeJm1BnhgUXLZaQ6oampeeYJEk4uuqsWpASNWya7TR36X5BaTC7hRKHjXB"
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
