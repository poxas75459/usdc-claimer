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
    "4dxmpv2WP6cow2B7HYGbL43xkzmPh94WD6vqMcZQEa9h68Cukku966jKgrDUKEGHCsac4M3sqHVQhNwpfG4cjUjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aWj8s3jDN6RLgjbzNdnge3tm9Fez7DSvJNb4XQNFD5Zge418G3zCfLnanA6BPeoBnLBMRbdwrugEUGJEvzQZFJG",
  "key1": "3pBGsnFpt75TmzKaGzxsdpwx5WiyW8SPB4JEurg94APskUeky1ixrfrWBkaEzCAsiM3xVS2JjVuwLa373acyC52T",
  "key2": "2cw7L15rEhFPSVbQVzwJ2TWrc5xSBXh4toAvvRdvVVX4rC5meEr2v5grg2y6SvEbR7xFa5g3MtZnLy36LZoyrGxj",
  "key3": "3J6cn3APySLjKWNqr7yZwU33qyQtnE9nbdysrGVeV4cA8BqotPPkdVfYZbq3nCzWrHA7WMWqGk9BNJGEFHDS4MK",
  "key4": "4m2PUpsS7uVzKggC1hmgQ5JJMGKFuEVxBdxkkTku9EXsChuMCPXUYhLc3tAXj1BCFggwztSrKaKMAgTyNR2BEVgr",
  "key5": "uSY3Pzuwzpv4mffw2Ks8rP3ATrEqQ4WnMXC6h2NsSNVivSzyGbh2sBBRRqDJTCWiYiCpNYUUbtpMjiUKVwRPXnR",
  "key6": "3s1cPuf2tWMZkoGUZQ6EdbPuVbJ2JoDz7uxfqTKBwEaVL3amiXEMaqyp2CavoWg7S9LWBFXQeMdad7dkZ5nstJKY",
  "key7": "25ABxdLymTpiPpJNfdSUsNyafk1cTmpcYeSWFKCvyzAcjh8knLp1SmBPw2uPUX1APyudvHDWtEpfnDnn1zk1cqtf",
  "key8": "2Tyu7UYyEBdW5vckVix3tZtFj9swrrw8ZqL5j6qJKfSGLLpg9r8M4qiLktxgsbKNr5tzunQDqS5K7QbFg3YZ8dDe",
  "key9": "5XcYzXv1zsHRmjte4pApLDrB9QX6ekPJpruJERS7RJYtgXJGEwcNj2P5LQ461Nv75qGT7bKsUFBWxuxBVCYWt1Vp",
  "key10": "2MN1dbu1irG2Kvi1FqPKD1JZqjuGaN1vQDJCK5XzGjJgGaf2gPUo9FjerCgNGhDFs2FC2dwZxTmZ8sbdFM1NcNd7",
  "key11": "27CLiZCHsCr4wdLJGbyyoAYoCZ3z9cATxHzZxwjhxuBKMj8GG2ntZrazgGP78FdeZ6BRtqjmoGhqMKY11RRyc5mw",
  "key12": "PpzFcG3Q5oMS1T5JpBDh7KeZcgvp7JU7EEpqsm8y4THRwFyjNDaMsMyTEHaEyVpHda2aFmXmdkfAt1D4Erm6cAN",
  "key13": "9vpMJMwdwvD5Y6cVqpndjNgmXs6PMvHk6bhMBnT5cygTLhBRgtQoTfbvhkYdZcJk3ZTRCdxZk2XpigNub1mfd8D",
  "key14": "5pfYDAizCPZPU9qkamzs9DQyKvA3UkVGcBLPPpG1JLsvSCG6nLWLeTbj4V8A5wa4rF68d9g2xQPpTgnVnKZAVAx4",
  "key15": "2NJYm32RW7CQWcgA9pzuWGr1ccHKRtbQ7RMys4TRBjocts7SRck6jh9oHwabyjEG4HA4YTWcF9UEDMEcepUkARwX",
  "key16": "2LXy63cuTxWotvjcP6XV2LWVQCax2xvw79tp3P8AmzfeYtAThVSrCB1FBQqMegDNgoSJxDk5vWSN9pzrju371it2",
  "key17": "3orKivqjZmXYroUTdNcrW9kdgYNQNjM1L67GCuJnBmMPRgkAkH1qntDZVSc1Hi9TyYByuJju4ScmCh6qHbqYQLQ9",
  "key18": "2pza8tEgtgdc4i8m5xoz2BSJjWVzTTXhhCva4XkeDtuvEzuBaBFHXpCV7q2teHA4Y79RcebKPxic4X18GXCcHzNS",
  "key19": "9FXi5KMmkZzvZZGXrchPvH9Q3C71HziFmbzQdxRQrSbQcABxqMqKTAMcKB295FYf5ogAmkQFrCcpfs7baWLRqmd",
  "key20": "5fQc7sCVaA1htbmKJWKXniDFn6UGrgYc1vHT7hDi61ip58VpueJQvzcaiAyEdyvbz5SL9Cs2wUnYai5GXiFy5f5p",
  "key21": "mLovqzuCYkEskvNWwA1tK1bWQDLP5wx4PPrTfrZFn3HiL1ZLP7RNbZeiscx1CenLReEXw7Eiy5oMXaxynGaev1u",
  "key22": "AfjTG9f37krbkdv2rMdiDALrH9K8R78uJwDHYi6HXLCkfXHag5FUwHQG55bUJzuKzoHLnPn6AX7V9Xfb9vkpmFx",
  "key23": "5r2sFrFJRT2mFZLyCo4gDVdx4Kct9NcVUC45DNAP3jCPSWkk4iLoWiJcyy1ihMRjvSYNDtMMm1rdLBqdCoh898XB",
  "key24": "2gPyroA7Q652EJnBxza4aZex1UaE6P62pSHypiZbmuJnPTfP2CFVxqabuaVLtiapQK4LARzjBwdecSYh7BsCciy",
  "key25": "2e5Ev3VSLrc4u7J6EYJBG7SKjgSpyr7hjREsEBjhxxwpnPAZSZvrzNoTLThRQ2RgP3e98yZ6b66NZmUehuBbtBhG",
  "key26": "62nG9U9tkQmsr1DpTj63YXhpTPaaQ7BRSoTGy3aMEMfQynKdJc13Sxm9mY91f1KKV5cqmJVta4H5U8km6zecNiiJ",
  "key27": "5XhAKrm1uZDd1mKjZqmeWShNTkLcAZWSH33TLWp2E3NEh1kUFWcHCj9sw6Dt1jvqzPy3n2M5CMxWBYb1NC3tJ6zW",
  "key28": "3jspPbpmK6hfB6rN5pXaCmQhW8asXZGeobL2R3rCAHuFF1rqAoTGUnPkKuA8mUnJs9oQ9wCvuKgx77geecuR15p8",
  "key29": "25J2nbRoYfE6ts4w6Ybc4mem7vm6nxqE5B5wo6zwBabsUBSreAPaZpCJhR4h3gNpDrZQpxXBdXKVPtytmEBCA7gq",
  "key30": "3X4dszqtdoG32GWTkbZ7vGUmeG7ovn1BSnnu7e5myp8FQmQSV9MtzzcYFWsP96xEzzF4FUPacuSi8ZVG3N2WVSVU",
  "key31": "251aMNGJ3Em3Ny5TMTkcWiEufuxGwLnE18G6MkcQXWYRKxTJzSZjSKn5pcYaVmxwafCViUfnu7GkwZXN4RWPTvxx",
  "key32": "zakmWwK4rXaFhPsMg79dsByynCFDN3oA8NE2BgvAHKb11xNTTeaNgLAUCzgfrS6VdzFETY8yd8ZtKeaX9Stu2U2",
  "key33": "3qH9PMGegDSc9SvKR33dTrw4FeJo6q9gsvsoSvfVV2jfPT6UmMTyq4Xh3gzYwLF1MafU9byzPR2BFhCPPEu5gCsi",
  "key34": "32AZVQC4TnzEbppMLHVabYcW34MrreH84PNxsMx2ufwVjdWTB9ARQsJJkFRGGgKzPegxdBu1b9J2bE3iQD2MTrpD",
  "key35": "4xAm8K7cFzSz1w3Y82ezMieXnSKmVT3e3YJrahPjRbwFbTzdzaMqBdLGCUPBT31qsMZQf8gSd5MTSty8BoXhmWx1",
  "key36": "J7BB18UNa3TyPthkM51Wiq4PDP2hqb8asx7wUtqbbB3XPCyAC5vnAUiYgPAzTsKdQx6ow331QswLhbB6v6YJDPh",
  "key37": "4xeRg5gs5uGDZZ6Gcn5yBwnFbkEPqiweKBGcQSxsmCwpahBdyuvo38ce6TqiDxDJZsxwJJjfrtEm8gvBAoqqvHeW",
  "key38": "3yinv18LPGKJ4SsZ8usUSC7qLRtvdjN2tcadkiduLoJCET21TUq2YPRdQfRmrmA85bSwXj1cAjinRe7i9iqWC9VG",
  "key39": "5RksshMxV2u3snUYqXWRfyTpHCnWCrq3LgfbSLWFHAbAo2bY3DHtZeCBR6JVBDBgUeBuQpRxs6Ld2MaFNZ4cPuFu",
  "key40": "4PUP14esHadNWb5RUJ8B9SgRFy83buY1aZLVXWUvJUhZHbUmf8cSzLRGxtqkduqVpZ6dUyLEeWKu1yksD4wn4XYc",
  "key41": "GojBe9fNhuPryPZt1EYEBx4gpQaPsFhhU9VAcwmBE52BhMup4JP8wABXUJZaXRXUMUwCcQ2DJ6YLV8YQAPVBFxn",
  "key42": "5LABYSg9sciKMTaDyPehynQgYnyEzS9TnoG6N8nfXRFxC8bzFVkn7SgDf5LeyXL9x5aDK6Chrpah7ywA5ayyaxRB"
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
