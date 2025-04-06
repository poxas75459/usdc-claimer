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
    "Fc5GJfmnhujNR5tbrNQGwd8DcTN4mNK3bCog3G1d7zbwnHaLcsSAxYFSKZayfmYHar6BWCnm4m3TMi37zmdmeoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xANFH5yPw4rrTGvYZpiwEXxt4W95dJ1wpRE79tWN74UtwohmmwTmaanAL991KVAfvDqDJP4S9rMq1hHBVmsXi5K",
  "key1": "4DmGwA6RnoB9giRGBDgYeQUrgAxHtMNoE3osCTzJ5B3bkCbQVvTVhZpd92WWxYusqkDFfBKosQDroGqNMRZQKC21",
  "key2": "3QbXag1yUjF8jJqWajUXQ6bwTyMCRD96Ro8s8nug8R5jfgjzUdhYcpAriSwGQGG7JePXhPtTLCQ54w7UrY9eakch",
  "key3": "2595ZkUbu3qiJK854cCsJHMinsahbGaAxUNfLuZ1mgjq1cPakjDLCD4kspb9qkQ4pFSuXreyAKs7YoDo7zTw829m",
  "key4": "1R8CgX3BiHcNTKEN7oMUcXcipP2fJPk5dYspQsDjCW9aR1XnsuNXNQwTiJXk1xLMvYXaqA2PPi56VEVthXrt5zh",
  "key5": "4ZBfjgjNXWnvgbseK2uQApAyjhtjPAmqotDn6zwhzKP6LSq6zhBrFsfF3wih3r2ezyE4f2RJEHyQY8sj58EQXFbq",
  "key6": "2nPwtPiKJm15dTiYjDcevRNeEnEytreVyPPRxj9hqP2XUmbxbSwy5cd57T3tJjrsw2DRTLJwhiPmPL2jqK5i5rT7",
  "key7": "4bxCrYor95J7kMwft4amc4S7C8Hb8JKVEkECDuAoRdLPaaGm9U2c9mbghojuVw2JPppjbi4frkbVThNq6ug9NVs",
  "key8": "36qzQem934RZMcePFFnzxuTEjB712Mtba7omzedurr7r6kU53jBXFAfd7jWDykCZ5GB4D5asQQRPCE8ePAz3Ce1j",
  "key9": "3mD1fKFWRJDkE91QuzWSfN2UqafvPDfzYTnvHuYpoFvoyJGAGoetdZDAH97h6XFCbj8TUBNhXqDXZwqCBB4rJTSu",
  "key10": "3es1Lr2jxeBTZt6NDWMd1DYbbx4jacXPeZLHq8XZyKJzjvz4atgnbAaDPGGnWz8aaVGwsBU1mRj8wRFma1ZNmpXF",
  "key11": "5yCWfJH25bquZzmyB16H2rZJ37Y37PaNHhGnqcNULQS2pTVGKMezJVmgVBqra69rrf1kEq2suif6QzXaAKJAqCaS",
  "key12": "5nuDwDj86fAQsAJkZ3rHtcK3o1vDNqY1xjayyf8fuqb93MR9B6jaSSM6DYyEG7V3fSnziD3NAy8YsPui5ar3auzU",
  "key13": "24jXWJvdrLXNJhZDXfXyXkyAnV4q3xpDaZeHchPE1BvnbE1SACWCbVz8MCFCA3qWQQLyFRqyDcaNRpgcDDP3ptZ4",
  "key14": "2ATb1XUcU41bPvSFXCkaGTTcBbcNxLGdnDHKUTyoxxD49evjkGoUyKpBzEMfCNrAimJ8SoDu3gi8zdsy6DBhxedp",
  "key15": "y7Kz76CtYsKZTdgXPyKKWxY2qdKwjvDUuRfyWmvM54spRAwn1e53iFptiunLvC9VSYWtHep27xAvTDzxptnxhkB",
  "key16": "2j6coSbZ8Zik8nCSvLe9dhDpyciV8zuD4gqpFXXby48ZH7YXvL5Yqvi9pWRvSaNKTQk7tmvzUVHqM8gJvLrRprZu",
  "key17": "4NMSHa55w1eAGZAZdLNAjbGE8GY5b5Vw2gYTh9iyuoYyyADPxYgrfikXNNNKqY8BZhiojy3XGx2kJW4GkdwP2b96",
  "key18": "4zGjHMP8bVVVvvcx8FVzcRvnQ7u9qcPUCeRWtvjpfGkgooGrV3HHwyg3E3qPaGPfxdD6JZaqXtGzHHeoWMz4SPW2",
  "key19": "5F6e4xHv3V56gpGzqGQYurqfa8yuayMZVcFerWq4BPB4rze4urMRBCZjxdN5NeYN44Fpz8AtHZrjwBYhJ6ksgUts",
  "key20": "43x1uD3zSVUxegcnjjbV8Ux4dL9439xTjTFF8mcjhsSYGvTqNiAhF2aksmeYrGQZ3e8Eqq4EwwdZESPQqcshxvsv",
  "key21": "65TrjzMBCBa2YsLtMw29j9fu8KkqpMX7E21W6fmeg8w616PpWwnhqBKwJ8CbkdFFUX8FZh4FbUXGFLKGBnnt1QyX",
  "key22": "5XHbbBDpHc6kAPwr9etzJShMY9GAGfrhmyHtwmVXQrFfk8YAsBTVGV73aW5gz39s9o7DQ23EZs5UppGjCg5ZL4vD",
  "key23": "5YgwrjaJVca21jK4k7fMi348qki5TepSLiJ5iJbivmfC12xktDj4b2DUANvYLq6pbnwmvYtTWWe9DM9onemFUBkC",
  "key24": "5MQt9BuxzHqwbbSpvn18AjtaXCFCS7YqSCGZBGV2XvHVzYER9kAHKbxkrCgpjJsiiG7Nmw77zVP7unrQxdsT5Qjc",
  "key25": "erfXmAw5noJp9gAHQHAdkyAYVFJk2vZKC54bG3HEBTxnKcKfnNU1wmgFaovkDPUez32XG7dTJscn3cQwh6gtPS2",
  "key26": "4AiAUshdMNzzZcwfvHLECxqND1Za3fRYYgFnnJ4CyDwKiB3HABsFUosWgcChenjap7RY3NVW73oAPShycvQmMUGq",
  "key27": "623QmPG3QnzDYUWWCKVqMQ1rKDZa59GyDzLrga6CJTDHp9DHFYnCv7VnBTTTDpMEmJ7EUTbioyfhPB9EHWZzSh9D",
  "key28": "2jkH8f9XsswktcARqSqQn7VMPa5JVDfcTL9E2s9kiRzVxhut7SspQGhUwrx5d6YEhswpQWET6WGjWWyXigfjbYTy",
  "key29": "4wvhaThmF6zZXZzronLbpEV2ia64d2TrQw2wkHx7u3AYrNsYQ5TE868nyFG1XPW9kQk7USstNZ9Gg8GqVoa753py",
  "key30": "5GhQBXH8Tnfd3PGFBkqQaLHPimuEWLFdizKSZD1Ju7oSBDqFVvimRocBPjvPa2Z3RjaEyfSUDXVDuC29JfBumoak",
  "key31": "58TzrWAWHYvjbCXHUKNrWr4RaxuMThQnWpTwAGQfuZpbwBAqRzuRJqGxJGKYJr3aFbh3vfqf5SZfSrHwHJWcRmSs",
  "key32": "5rjsMLTt3bE1BjfuotLk95ivfb1nu23WZW9QGsBRec8a4dov42e4raFnYpsoN8aYE5L3ZK8Kmk28ECYtBfLDr5nc",
  "key33": "3BEA5BpLeF2xi92cFMC2JCqquTAsXZMWFJeMycHBpWEujAz5KT1KGE9Yiayek1WhKdTSNfSBQQcoLtcFvSGAnHUJ",
  "key34": "PWrmZoivSEvSLjK2P7vQPH1LerxUDDKNjwdLtLpdx7M7Jr5hwtGZdYjhz5zvDcQLFfLagPKW7vwkV9NgyJVEScv",
  "key35": "325JYZ39V8WpJoMCCzbuw89tz8dzgvbQQfNS1GzLQPJo3KVSJKLvw9c32rCMHYJjCCv7Cz2FA5yBvBCrtiVCrTky",
  "key36": "4XFmT9HkyiR8ssRYFtaNZHWCVo349HPnqwhiwwgGVB5QxN1rywin1v7YKqWFe4813bndwB3EBryYQsDoCDE6hZTQ",
  "key37": "4Qkj25FHd6Qk1EAKQuuPsiwNmGWZcNLB7GTVFuZ9ve9NFFdj8Y3EYmC2RiAt9p3w1LJfQ4PjoXrq3NrsjL6JdqDL",
  "key38": "EovxfaFqVi5qzFvECXdGtrvBemyuwFvCFjx8yhXy4YcN7RPxp57qj4uNSPvPPg3E5UNKDruDNAbpAT99HeH773i"
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
