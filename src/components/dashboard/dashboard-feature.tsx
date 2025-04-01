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
    "5v6UyXotqovB97GJpRbJAyr7MiGXwxwKy8GE1Sy1S3XoDn6NpYvDGUuYPenHyYCjmihWdmbkyF1jjE6qoN4AagDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PeZStmvfZkVVaaCZSJ6BaQszQ1Ew4tsnAYnC1iANqXuD7CnNvqxnEHyViHUdoW4z7dynv4Mcw34NeKgyYq4cai",
  "key1": "5CpsK2iwZREC9Akdarr3Vth2D9SSUabDvJ6iLuTwMd435oXLJcqjcAkcKyW5rDA4WSizaCGbbQ3v8Z48qPH4hm9N",
  "key2": "4JHQ9t7Baa2fBgXsaZF4VV8rBC5HP1ssui1D7vthSftKvfAHSueQg6K51wxmsNWZgc4Lp2QgTTtgpQXBXYJzcfBV",
  "key3": "5YaHTkVmX7ZQ7nNzu1ccke7B32pC49r69qrEXWjPGm8vPXa3CCrXXHLvR4trLmUFWywhFFLz4F6QEMZFcCLneHqJ",
  "key4": "2kJC3uNdrLDrNf3gQStAtC27mDLrYnvnNbWMkmMLwBXZWeSYTLmvRqody5VY4tFZaXNejmBi79g7oJUXKcoMuZzn",
  "key5": "31odsuPECe5BqNZTx1q2gT8GB44NN1RP7efDKqjhW3E4b6tJrWJxbATT8WvmnFgeNUFq4fQrcAr2m1Tvsj84SueP",
  "key6": "32DDZBzNFRq7Uhqbwm7eCMh5e1BdTB9DhnMqCvj3f2zxdDqEQkuJv1yEHkef3YtnjrCWdQcrGwp7CmwqeD94YL5k",
  "key7": "3vBRQYFiP3nBvX4qD8u9SwueV2LWf9SaL5e4p1aZwPXmADaj5zwzmxYrwu6UKMi5JHw6rXUya5yXvjkgDcEsyemh",
  "key8": "3U7YnFwUgcCPRhrKeLd1D9M6qG4z3x6zed6XY21Mx7CpHCajNCbXNreH7cS1XwNvSNtPnDjg9GVQuCAN5CAsx9S5",
  "key9": "3pufvsAKME2c6uc9npfYUVDDMGLbEku3TymPDJzh4JLGhUSHrqSaEe5fu2xehDTwGueyYEEErpiUtCPBjiwpSKvb",
  "key10": "2NCSRWdhdEAif7qJ8jb6NFENqjifbScHSJFTud4Z51GsiA5MSrFSmDvxJhUmzbZiHGGFM3WG2Dae9cZXUqverXB2",
  "key11": "2oF1Gv2dNgL8hkfqxnJAFK8dS8gCqEX3Eb7LsFSgBBpfu8dajUyf7JkQ8GqVdwsTKW9JD4QShKKV186h2U24tFXN",
  "key12": "313cjCzjY8U281xu4FrxYWo6UBdzWroRZARVE9JdHxcaZV4mYSb4VjQPusYDr3L9VX23xL2XmdBEzX9ckV5ompix",
  "key13": "3pzbVQkXZNm6tWFQgZwWxnLcn5HKqwMuyQ5hXixKw5wC8gM1P2NWVSw75AcnbguSsoybdxjpoEeATi9GugrrpTkm",
  "key14": "5s3izwKcYCP8ELKTLavRE365cq99LbbXS9FVXUGtUASQ53uFHbDqp13KLV2pcAzjbz4bxQ9Ymf6NfiMsunvgriJT",
  "key15": "3uVeLPHyMN5jM7myopbrpAbh7BH5gAunuwUc46CBYiUrNPcBA9jTQzSzz3DC5J1HBiQiDubRSh8SdDBne8Jiq9m2",
  "key16": "3mFZnovYaNiERDwGTuEbhJFiU8rM7HSsD1g5P5F19fHsD3pnVNENAE566jMnEHgbSja2sf3BJyyw4dcHRdvqDdt2",
  "key17": "5wd9JbXEVeDkRBF4M48xmPbJ91QwuNFwb17hoLLhiSJFVopRiubWPVsbkgwqeL6qfxb2goRZCdzVrgheYSpdz4DZ",
  "key18": "5mpogwRzugAk64ha6dMqgGVx3AUGqteEq3E3J1SmoV5FYfYAaTVULpRwVLgUTE7PdjJqf2m5ZXSfiarEMvowKL5s",
  "key19": "4f2GwyLQ7zKXAdiSwwSsvPzrWhVdR4NueZtXkMooqLa2ujEC71DPBJMaxGb9AN8SzYxvXxA9pkoYoLmQUAgneAGM",
  "key20": "4Ek8scux4H8HiQWiE4ckWpTGACovN5D4YPWtbGadv9ShHaG6K5Lit2cNXcXnAMZTQT714nVfi7StoeaLLatpG26U",
  "key21": "5DpaA8kwv8irSmkvbBTqKUAerJbxaWL12rrfA9bCuKjPFihukBAKFWa6brmuMbaphNP6FKiy8zZMhuENQSLxjDUa",
  "key22": "3bGGdRcrjFMyzKhs5LwZQUFFn5S8XCFfoAzabbMjVpcvXruFLq6vE3wYJCeqG2jmf54isy7DGowtYbvq9aBAJbz2",
  "key23": "5mapm8Uzxhgdpk1XoKwoRQq2Pb8poebG2gUvAvNzRk1vmz69FdfnhCRvR5kbUE5TAFFmiQ9YDd89xAHp4pBiGPFh",
  "key24": "Cxy7TJgwfMTk9Z57YyUaSjS1hg5MaYUZhKXpJEBWVePPzrstRq9pRqS12iapgcASRmdy6sBF9s6agB5QWhTA81z",
  "key25": "4tZg9v2PmvyngZ2neCe1T13CZpKE7amxa753FQz1tNgntLtvvsBY3xAnHD33wdbH9f9UBL63WHomARn4EGkQrF7E",
  "key26": "34A7z12K5MWvZC6ynQPs3chmMaMLF8JuQEiaxYjaqMbL9puhwfpcfJLP29JSyaUCJrQeFQByok8Z7nSPYdcBKjmR",
  "key27": "4xob7LVg7LRaLs2SbqE9HJWgzNEgfNW6BRkZcDWouExtgwXV8BwXFSbMBEUgmcTpvVHdbKvPAVtP4drPyfTQoAfU",
  "key28": "5pNFVz3akBq77QVFzAwoCL6DHw8r7wUramyUNYYsKzTM6ZN4XqA4kwJz8WkwhDExXuMgB7oFNC1napsUfhR1ckrh",
  "key29": "5o8ZDyHYjbxHGeaAjPQ6aYjeGVYvYh6oPTSCq7AA3WsZwgLvBkW9uU9kRhnmzZpEPRimckksTvmf833kD7i4hUEh",
  "key30": "2vVTjrAzz51YvsfyQpaajdm4HkqmHUobfB1kdybk9iNFAtqyJCaAJWXFVKdE8GVhv8Vz4j9bqf5c2gkmTXjUHZK8",
  "key31": "54eRHj86LewZhzUkgagQ76N71e3HnoEMFtYXM9rPiFyJZw74F1wQrG2TPtkt99S3wztVpiQeDkHT5FGRU6bAoj3X",
  "key32": "3x3E4PiFx3hjEzst6K4nn2my8HrQ6pEzVMfNtacpjXEANckEn34iNRz6Ti1MQrhAQxkhDsCW1Retbej3Eh14asGJ",
  "key33": "ZikicD3h3hCSHutTs2PupRL9uwhWMG5TTuUKyPbakm5MXDJzQhjMcJfiCuhaUwE7qEQbqz2svmGjBVRyzAP9HMw",
  "key34": "5srfm98uxrx24FcZQjjMkTfhPsertNGuXcJp9R7FqVihkKQ8dEEBkSU9uDrZX53pCugVNHqrmBAJLXHLZotmgtna",
  "key35": "5yqerXzruGh9LoSXA16uS7nw4SfUBgbieVGVreZbGDVDZSSdXSXXE4mS7JK9bbEsd7kFunJwYCPfV4H88i5XQhoe"
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
