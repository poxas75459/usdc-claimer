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
    "5Sgj6Qrrw7Wd6qfkbNb7uv7xofgy8DJyM1Vg58K1RPSZUCP3xv48f6eNwqjCg4f2ruNVbm8iWZ1qNq5aNCRpcY6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zd3d2SsXru7x2d2p5TYTXVABYWdZvhSi2uAWUaUVMjQhZbVSvDmB6QY6cg4LrBxr9DAe4LbkX2xMQZ2qPVGzuLa",
  "key1": "53vbhStNbjfyteuF6EMZkxTvA2jJuAbx33zMcSGqvQJJpDEt44gPHnq12np3HDzzJ7bP3kQve1SwfaJnSL9Fo78i",
  "key2": "2CDfFnDTa1TCtfahWGpk7rrEr7oqYnBWAkt61CZ7D413h2o1MMNGJKamkPTsfjrjFj7fmKxcn9KR4dAfLbVtnjL9",
  "key3": "3uF55VBpSheTEgXNYzeP5if18wFSkQoxn3c52VZPcdLUG7RtVTkvdSoye87hCuzaNoNsR6TsqGDGjVPj8ZkWkpAX",
  "key4": "4mLKDfyEFr36qpCYBo2xch91aE5TkttjayewAfzFNB3ZRXtT796PSsyaPasswD9R3ParhJ1cdb9dtNh92fyEWgJE",
  "key5": "37CYCsadGtvwuzqSJ1GckYZQgCwjC1CMg2iosFfUGnvAs6fTh7yvAWEzkfWspeMDkp743BF9baFodiVXMFRRjfVu",
  "key6": "5zohAABJdWhjod4kzixyU4xE6uPZuc47Yo6XDuVv9D2rbG5rZ9vFJAGqQ52qGJzU1nM1svLMB3SPk1kmvqE8wH8Q",
  "key7": "JWYPcFSuthibGjd4C9MjdWAtBkfvpZev545wfrLQ27wxydSSYJZm8eYYPe7Ucxa4YKrMhPbN9iUpWC4VCKumaBK",
  "key8": "51drRLWQZZory7r9UomyaARgKnaBDuVV38e8XqtK9vceJDkRqCeAJFvYDrS3KNvfgwbnRvRkJQVa4hYv5FiPZ3ic",
  "key9": "5jUgGmcMFLACe3zCvgsByMP5wwreQbRKytQcwtsyTHLrgP3UUb6dafC3EBpDngUDgE6bEVNqCSccjVW2szArWbsH",
  "key10": "4Wi1zHBcoXpcjWYTfTfhcy4kcGuxurgNK9BXpEYmMAwfsg8urrHfA52JgawKiRFqTi4pvVmdQdEsKq1CiiXYQTYy",
  "key11": "5MbYCtEXkdqnwnZ3GSEGQFdRX1kvin1fWvUQMnbzHo6QWei9fwKntZyK8hxYAEqFnbznXxZ1QzYhBV4H146n923d",
  "key12": "4inUPtFSXh2WwDNxqNJxBJZn3nHZuficFGW1ZGwNUVwivXVkohbm4Re1Cb6MizUuSximKn4NVywKP9hTuBdj7Lvh",
  "key13": "5F3zW11BcXhGN2VSJAcSRWWny5NnscycKQGaF9fiLzbs7YWLVMEjSyrsPig29njxy8CTEoQosQCg3isCN8WM3TR6",
  "key14": "2NNX2PnyiwBNNQyBMh8LjHTKZSyMYJep4wLikwdtmrZf8WvaQBHPHLLutB7L2Fu3gvfLeQhtDXGmbM9cUgViURVW",
  "key15": "2mBM5uYY6FzhRniFmTvw8jZp3Eawth1whX9b6jAKrLcSi1eyshft5uBnKAQeaFFKsfA9F21fA8WcLi4Ke1T9b2Yn",
  "key16": "49iTcRnNrqHeJHJm5DE34XpQ6NqHepN4hzDvtF8u8s8DeS45xLusRQF7VqKaNew6uh6mFTtgrf8u6gSh7vber3qC",
  "key17": "Gpfzt7VaxdWii5wLkFoAeqdChJNEeyyqurriSGFqNiSaktKfm1icHg9SezZq3YDQZsxSoGw1ZDyFRdrivysp46x",
  "key18": "3gMSBv55vRsJoVXUSsbFoftsRsCBC5NxXZFwMJuPYpKg4goWa2zjeDMdjJVygsJiFQXqTNjmb8g9haFHwxsPoDxv",
  "key19": "51fjBsHwPUJTnn8kDjo2FPXdiCFTEsaoiEWzGhGaCzY1NMzHG3es2BmBXtJEJug7TZmmq2ikw5nhXPpac5ji4JpA",
  "key20": "4joo4ztx5fDdNNypzd8HjQPLnVanGmxSPkVTYoPQYiAivVjJvYS9j3YZU1Vxd7WBuw7aRxhkNcou3vQd2qHdNdoV",
  "key21": "3wm4cmysag8iofTyB2WEipiPUp3h17AzV34QXLoF37n9ybxwBrMDLbxetfX58Hk2LpN591Y7gJZ7fS7jeMRFGR4Q",
  "key22": "3jFAufsvdjijWHUA2W6FHD9Nc7PbCNavjKqLXDvTNiL51T1SF6MfadkcyDr3fAmwKVW5LS18Y3TkBTN5aPPqZQ6V",
  "key23": "2SgzQViV1ydE4VE7KURYDUvYsxaDzDiorN8UjdV9rK5K7nCyJNYYRVDZ8wVEs7XaeDKz7oyhrHNaCEHxjzsvxkBy",
  "key24": "4pjvNHao2qgs59zE74nL72hbyGrMM612hJWwkhrGtBwY4xweUHWiRyTfo6GGi6ekbSroW7UYwrT4K2nAvb9ik1mM",
  "key25": "23bfdx4gbRggoxZNSrgUZeFhMUtHjHwmanZ18nPoC21UPBycKXAMFfX6C8oCaagR4PNWSQbf31RRZoUG6cncuV68",
  "key26": "4bq7BouEpdw1M7qGJwiQSrab9ARtvwY613KHV8pZFmAv8fhYQ9wYa9nR1S8KocSfqqZHgdZX7xZLVXUaERnPG6Y7",
  "key27": "3LsdyLCTyG1cYw4nu2TUAresPkvKrCPd7XCHQPhp1xTLHczxa18ejWH7AWCAKe8r4qSc1y8MrxiHRgWu7aQd8qt6",
  "key28": "DDEBnGkCvG41Nb5Rx8QH6ESYc9HPCqLfffuYGGtsGn6NgqjMT4HYxSFc3w1zYTedBm1FVoNjRi2Zb8P19rEKKvw",
  "key29": "LBZfNFPESxtvt8AhChpMaHwdMdQwy8CN8yzrXZQrQB7b9QkaDGhk8eABRJCyGydN1kt8csEMzKRd5iZkTjyGZqK",
  "key30": "53TeDX5xUBhatnhjXD2J3Y5RzFfMpEcaUQpY1fcMRkRin6GvnruAQR3miSAfV5hohJByNMPn3ugWtH4qXb2DDAx3"
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
