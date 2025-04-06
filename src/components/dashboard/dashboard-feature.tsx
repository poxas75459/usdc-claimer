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
    "3ztP9yJmtQu5v6RM1zaKXZyjk4r4f1Pnm5cB44LPvGqjSxjCZbwxyqGXxgtjFz6WXxTXyncAs1kVh3x6ySuWL2Bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSQbAERuDKnK7gLj6aQwvnZbxyEPwPPcskDZiVC84kUjf6hRckpRtaMN89NdDuKbCF2AUQHmQELNaCwHhrf8xz5",
  "key1": "gPGYpByCS6zBKYvcUSkFEYfWemZbKHvUaJ378s63jLommGcHqJceJrxAti7fk3Cmt8hvJYfamdFjtm8U8u6zkdg",
  "key2": "3Xbrhh35smgmu85M5A8dgypDLWTRC1oixX4o4LHMThcx8zXUigFwNxeV988yTcprbkyGcCMLsyF3QhaVFUWhJ5x4",
  "key3": "5LyMdJQRm1u3N438Q2iNa2kz6LccFtESHm91PDbt6APqMKcV22QwSmgkZuPYyDEL2WB9PA7U3TUk7GSTF5bC424j",
  "key4": "2qXUwo8nmpyGADNMU8ojU8tHgonk7Krut4Dwjq5wy5LkkQPJZzJTL8ANAT8ebSxUXXViVuGnspbVbWQVs7wXxQTk",
  "key5": "5FDBm6eHWwSKKuhLYj8JAd2pTHZ79c3zVyL19AeRjxhXjY68RfSubq6KfAKsWmgaoLSFUoHWw6ck96F2Q3xMpmhP",
  "key6": "5j7CymiXGFrUdZYucjRF1nrw4vmiu5c6gbY24kt6hAyPBR3qSwEsQBQNmg7PKsddxhYrLTT3mDvRf82jsPLxdbT4",
  "key7": "5rHqUf4k4e5jVTAeeVP3uHes6czvgYZAJ94XXNhuR2GPH45YGwHA4zmDsms1JEX4L4FSFAjrD8Li8j9h3uxFkiNn",
  "key8": "wCPGz73jQiKZ7Crh86mSbTqDBkMG7yNGaB23Pe5zGvQs2H7mmJXVxab9o2H4gC8CCHLCZzTf1bHk9zNrXzGY8gc",
  "key9": "386tixT9q5y4cBh1o4rn1MHSjTjjWUJ2LN9mUHwGMRPt3NPPM6aHo13bAd5RTrWX3sLMez6gSAwJKTYGBkJqAZb3",
  "key10": "UXhV8xEFchcTY7qLM4o8Vb7hBjE4AYRAtWFRoiFMjcNs3SwMyCCX9QbSFSDkjDLmfQpMRaw6XNnauwEaKxFFJRZ",
  "key11": "w8yxKJCojSj3ByJ3VztUuff4Buh2DDJvz5dXQojAGTSEvvNosy7axYZsWkpthoGbZfD81K2pHS3egax37W9uWgt",
  "key12": "48FsoFHWiT4Z46dae9C7rzYnj36UAk4mKe5PfmxDZHa3VPfsQoeLczKR7srJggbj7j6VkXr9i67B9uUeapbi286X",
  "key13": "5vAhrDvfEcSjAvFhzxwKjD4LeBx5VW5FLEYtpmEsCajvj1V2cekGnjxuPuggTrCZfryuBXkakYZJWyMK3kkc7m9x",
  "key14": "4Tc4vSaTVPAoNSCTcB5xUhkzTimeJwNoLtWSCCni6E6PcScvGXkq28ZsSanzdBCkGzqLhQmsE4pjaWLP5kWeHqkA",
  "key15": "2A4YvsZbFJizz65Pc2mdPjrCT4XhyVPhSSpTnDmCMpiZQ6zx13ciap2JDvJTereMVKmrjvjws9HgEfAJnyKZkqPY",
  "key16": "2NcVbMZjHRkPSVu5pQaajGh3EeCMuXwfAGeyACv1CLzAqMFk9oCeejCVtua1qSBDRBSCxrte6E1btMj4hAzrXKiB",
  "key17": "45y9yCTU3x3p2Y7s22ozoeKGpgxyHwmWacjEi6mry2b3yKFwDYXzKwaQTxV4Y8P2kFGYoLLnNe5Kz9ckAPu7Q3Qz",
  "key18": "YGyU7ahFQqWfyKq5wBqwzkUURzneYX2VpgvSgAXMynhdXUtiKHEjkt88BxZmcHuDph2ktvFCPX8bRK7WKyiPma9",
  "key19": "4C8cxnENbkTeqfrziZ5urzUQsgHzxYFDxA416c2sYpgHCHwfacoeXBMcPeFD34dLZeCdduw5eMpcHVLq6XrNK5Am",
  "key20": "2TncBYbuKvqSN5G2uHZw1DyDed3RPYefKYnJP1goNaZ9DBfoq9SbGfEHp7XxAgMeuD8Yagcs6zUYyFoTsttpqtUB",
  "key21": "5W5m8HBc6J9M2XTdPH1JdBTjmBPT761SHkAFYQXdomJVqogjzzYLBL8SJk6ZyXtEnmCKv5efSKfRtvQ8BUQXYDso",
  "key22": "2FRuuJuEt54LtJL5pJaTXnJzqwCvaX6jvr4Rgcq4mQD8jFSEKbqXPXqvbMnNBZPnZi5ZUVZ7DuJJM8becKZ8rnm7",
  "key23": "2LgDQkkcBGCJobRewNXuhhWs6XQQDwNghHHnQcnFwfwqdTzWkcaacRZwnkRnCbJbKePoww3dy8djo5weLYbaD1SB",
  "key24": "4DTPDT1V88spY1WEBKHknpnTjxv7qy9jFHKTo6DAwU7idCREzbgoSLtkAjBcjAXkMyf4nZZRQ47GztHAMya4Z5jz",
  "key25": "2JaSwjzdZ1zy5Y2fUATwEpKTSM14L1K5wqhZCbiz6ZkuMHgrhkDd4N9kcTzsyKJKr9H5ewPyzUz2ob9bZm4ERtXB",
  "key26": "rdrsUagsvHy76TtsttJn2Tw6RDUZLvmECLm92cT8CRxBxqXfAo5LUgCmz7cGkazViFT1n66teWyyedeLYnkvcqy",
  "key27": "W8L9AJy4rXxrSPPAbUwiSawQdsqXP7s1cuYWZUtK7DvJQ79WvFX6eoQxAAb4unAbDaZZcya2SZ1Yr8h4NKqZc1s",
  "key28": "4Pc5PmWiJT4zBkyBLay7pb4fRvGXLqtVMyww5i9ZyYaqrGp5Mgk6M8YzLi3bU2ZmpcBQ3fxzFEJGkL32sR3qZtSN",
  "key29": "2Jgas7tZgyJd2R6kanQ29nbxNnqphSXUgdU6wrVroreZ4xoe5GqjEyJSKKEEJEihMn3yhfDKGvi68rLXaxSa2E7Z",
  "key30": "49Heq2bnpq1e1ERS447ou5X6p28Q4K1DV9M24yRBEsn3axg7P8DqxQcUMbgxJ3hbtEH3VXUFm44matuxMHfcb1X4",
  "key31": "Xhj7GCNGq1Kw3Ezwkj32V9FENAi3CUzYHUaJGPi94omrE2DarWy3E8UzBUBxSUiLTSRs65hEwzXTAXcGXJ37Bqv",
  "key32": "62RHikL4pzvPVkNaujRPBp7kaHYznXw7eR9KKUsn3E5hZXXXnLXnraXFZxr4fbxkKnRDH41jqPiK6x3nvyBJGi4S",
  "key33": "2Bq94Nv5Bw4Pny91Sk6VYAgNWRxumHmFJCSp2SEMM8Xoie3dfTA7YXp1BbHWXrWzj5zgYnqxmMS7DWzXioGQjE9n",
  "key34": "3gL6BLd1M7TKuH3dozLFXLAUPfF2Ez8nt2UJcHxHGn4dAqQSCqcV95CKakJ7o2CsjFoikmeKyAxBBqoQojsWrYtU",
  "key35": "3dMgDFYxwwtYJBjkWGa1mTQcbhTnBaF6r5QNEHcWut1sG1yP2e51TBmmgqGpa9RG3SMuywBacrZ362FfsBVDyCSx",
  "key36": "44gRZA7TTuK7gZ7fS8K86dyYEkA4AhSn8et5ijssF3mnsExPc4SKEMidbiEXqhvTxd859kHcKFRSxqUxFvjB7coP",
  "key37": "62GN7PmhJkG37XhkqtrKtsG92dQ7i53fvB8ME16wSiMGrK7we7A3PwKqAiH6DfCbn6eqGQPxyADwcQ58j8Mayqa2",
  "key38": "2CmSmuP3e7mDBX9sTPBnqizYyW6AkWpHUEraxcooAbLNjXtZxyay3KwgtUxAQTCbVxYw7DhkL3N5899eTPFQZutK",
  "key39": "t43zJghrqfRF2QXbFEUE3nVeCHBbys2hJEYKQ9gLUwF2gBvGrQtxY4gFgmmVX5yksy4TaQ9FJEKpHkfaZbZYaF7"
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
