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
    "4PX5UHVipyx7NGUWAB6Rk8n9nYSC4FQk1Sx23dhFmr9kWVoP9jVApN5hbxKRgjh9QEtBiKqdUR2WnfiteBTXnKNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SUwHqDAWsgGtuuLYKMd4C4eJbwyi9v8hp7nqzGQAXnjzZ54gNP95GVhmdb8DHozvX1J5T3VwaaR6BTy8iPijsCM",
  "key1": "58cox2XkPubwNwLszgR7oWMN6kGJ2PPxoNapkUUHnpaxyRhDgzTiWRatiDWcqz7e5idtRvonDx3YzgQqQWsy4My6",
  "key2": "39JwCtpWVCuVZRKk1My46PDB4zgcmaKwFbadteYfDYKxC93mvcAxYHReuoDFPTH9w4EsEpdGkCLCaVfkzyXY51XH",
  "key3": "3x3en23Ts4tU1v4s81AVgP2Yhty1eZPFopoP8BzKN6mXv5mvSe4smmPHfsH7f2QkSNFcyijCzkEL26zQz9BiGu7x",
  "key4": "caz1crgkPmukmAU2Cf3KUxzvzCDvmmLTSggnuRVHsR5SSPGSgqQJtWGXRPPUe8M8r3huWM91rjPifdwDiAoVv16",
  "key5": "5GPVwgJRDndwRR1ctnmmtcNJXsG33UXtbM6NVUWgUFvHuCbzQX7BhNeFrynMKVdxLY98vBFKpUGyoJcWmtnZG8ft",
  "key6": "55a7JKdQhhpvfwaH25fTtyz1kZaDGqhd9nYM6LWhijwvqeC31uExXyWhrDZWQnDdqJGAjSu4dXBSGXTLk9J1GNER",
  "key7": "28nAFoRE6Thfpj2dR6RKqUZqZ8YQtLVaHyXu3K8KfFAHjwQyBzwL27AVspiKzUxExrML4vEhBXvZ3TRBRJYsByDd",
  "key8": "3aD9Kd1dQwgZfJ717wTkAMf3WPGyZydzzkfVCJjJodFjWZxBUB5sFgLwXyETwSADgQhzPShEdznNnq98EQS7Hnzu",
  "key9": "5dncmPeenPFPK4m55Rbq1bGaKYm7dV7WWkLNU5FvmAZMEHbPohxLr6BcrhrWBTM3MjTVsHT4uyRNr4acPABGt9wv",
  "key10": "3uX18e2sUZp3hh4TvBMj88YWB1cDjWgv3iGwyEm7Zsxro3yUjkTSBgmf4SbEGXG3KaEoZFEf3rHn5wsbTWg2vMKV",
  "key11": "iRor2AeHrEMQgguagDEDu7x38vQYVNdVmFkG1Qsnneeq3XR13PmjNKcqzNAwnm1qMdh4924LrgFNTVTMnKmPRKR",
  "key12": "3cfQVeosxk4rhyuVA3BsRubbricbBSboHAxKXXkgoeARAouqjuRVDUEQRt22uBmrnXaZ5QCGPg8QCjRV3PUzG3U5",
  "key13": "32f9WVipE57SXr1G6mR44Z2LTTTM2aoTqJ8AGT2xVpWvVQnKxJr3z5vzutv8AAhuzySBV9XduQGp1pjxYyFcV2BB",
  "key14": "5JytTkihCjVg3PfsCWRas2i94sGhZMPBq9AfMMD88sEXGSkNM9V7BQLdMP7ukCnx4LNGWZF3pN56X2LrqgHSN1Eg",
  "key15": "23Zqsc9yQsdCDvRjEUMkV5nJYg3S6ZtjLk4wt1Td3qHJvmS88o75VNHDYJ4ocWdhBTJ4qWAS2f2dS1iovfq6ZFvg",
  "key16": "27W4NwX6ktczf1TbsXWADHQLH1GASEF3jK14Ssc39FBFvKDjtKQYRgraxPX9Bf3tQknt8uxYSuWiYaGX4sMZAsen",
  "key17": "uPSWRmwandkw8jQoSp64BhkVyQxtQ8Y6merQre9HBVaiHaqJTvVCvnaHp5WHuhwjzxjopcaLFJf5tQ1SgzXNDB2",
  "key18": "XpzeKhBBUEyTB4YosVXefYFiBcDMmYDsYfzJ3i66SnknbAujGMDV2nBW86f52cwmwfKvYB5n9dcW4LpKXWEWYCc",
  "key19": "5LEQcG9Nnofi95vj2fNqcGKWvjvggFjvfgDhZ1TgSvhxtYACGMyeUorgmTrh6QfYAWpP2fpGpvbSMc5WSYmTrJzH",
  "key20": "3XGUdFxfiar5uCicKAjZznaYydX5Gh1sqcZEQG8NjroxnVfJLoDnM5oBCKLFrws35xKuAUrzFzGhVkSZyecEEpCF",
  "key21": "5umJCUiX18uVscuSDMHAFiRZC7PDXbeicExdHMJFCky7XGe2iVT6EGDDjbjuFduCoN3sWLouQ8KhrczQTFhT3kqC",
  "key22": "58fVnp9e3ShPvFyhkhhxRatxaYfuuRtz6orQTXd41wq7jVxobQ6cvMKaxZntxoL4QnvuaJpsnsXKqYDfgM6xqfH6",
  "key23": "4JN64gtdXSwVdiWwBAE15dnvmKJzLParwqxoq2zSH5gdkzsbXbhm3H4XsVxFkXc27CESQJNDVrfCnmhoEB8FzNU7",
  "key24": "2E3ZBt7o915Mia8SawCa68Vv9k487awT3fjN6Y5TixxshBCrqGDuaQhTokncMzuXnxDfUKmMGTG7mzpxzg7CcxAj",
  "key25": "zQqo6sWv6A1kbXTbaTGciRcgLrBbBoHdou2JgtAraxhGRKrskCNB2mH1pDUJ3TwGstDgapRgLjPSExXxp6oUbza",
  "key26": "4nqBotSKPLmnXh9xxFsdSoTXtHh6gMw9uSeMLR13svXScprfHnLiZKvFJ3p6e9R5fkrsMsWLErh7UMqG1xXUa6ND",
  "key27": "5hvML5svzxVpQnthxT3cypreEPXvvM4ie5hKcsX9Limwyfubghb51K8qa5FrcwzwWVY4VZMfZFUwfT5ASCoCLZe6",
  "key28": "56JEHDiXhoys6DKJ5MhY26EHUQiQJ8uZtDCkMx11DMXWfpFZbsdd4HyjNN9GHq81GVGXwYoXGqgWJykFcLqQtPqU",
  "key29": "2377gaejCugBNyfqVF559pqCTUhZ21py1L829g8XCYrkPM6F96EdeD3wMk48QzUSMahtpXTtt1fUQWzYw6YJTdxx",
  "key30": "2a2739WHnukR4qmTL3buKBUp9BiMAAiuQygjhjkp43sGWceKBbiTMXXsJQnetkGRfUjTubU7gdEnweyuWTPmRuy1",
  "key31": "2Qr4BeivK463q9fSig3SoavHZcGKzSM2e8hdGG92PxheyN8ZNJQ3q7MgkRbGjcXGwDsnsbGJEvfn1MGA7sH8pd8x",
  "key32": "5W7vFu2Unjeayfs4bufAFi5UsmMfvEPqJnH2svk63RaLUr3ng91jgNWdyRuQoMYZZc2JwAuzQDpEp8BQv1mSALph",
  "key33": "4tQ49xCh8V7eq6NdLuU1v2G8zbTSZSSN1ZyRETqZv6oxTDUAXbSHb9RfcJDGi7h2mXYG9n1QWATbNvJ4hJiHQg7j",
  "key34": "c1Jv7xRCv5tU8iZfuR1MQqVK6xcXaKCyUffQCxi3YQhXnFRW3ywM3w6btoAf9kQngvMnRpKMEMQXHCcJZebtscY",
  "key35": "dRungjcPuEANFjfnyesBNtH8qGkvNrYN3yAS728MpHFV5VC4M3n8WCTvWsnF1kw8j5uf6aBKHamcGF7LFYEsa3M",
  "key36": "2P5yBEkEukZfXkdMVFsu2GTnJsZGR7epZ3ZepjkW4qquJR7xSwXVZ91wbMPib7LMLafTU12PVj9w5yZjpMm1WZJY",
  "key37": "k3P8uRs4PFbrSb6tdY4KfWg41GTiAhAQeZhP3anX6DYj3FQBWaqbz79wHBZY9HRTc8vbt9uY7u2KqbQe4cVAYnh"
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
