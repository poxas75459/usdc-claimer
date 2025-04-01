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
    "3M5wwgWdnYCFrg3JjCing63vRoQ6Wx2a37wtVY23djjB4iE3xw5EvUpEX3VJ6JJdBtA61NCVtMRmYfwBDkmEnMBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JHYPr8UcPJu6Q3EML1wM4LxfK1R8RbZYwm2cH8sBtZTWNGv2r4NfJAcVKhoceXL3hTqhqsfaKg6RaoJLaB1zHij",
  "key1": "3YqxYTFbmGcR182vS4Qo1QH8svyuKtwLsTzn34DKotkqmWsFisX1jKzbgYLt1EegY45XRdVW4zLBRhfxHnhiKNqh",
  "key2": "2JqAzeUn86XJt6n6NC7AwQ1oCZbywjE3Ko8CxU5emvXqSXgQBqceH4H5aTMbZd4q4MaFy9Yq8KxPVuRE713uroJE",
  "key3": "2zoFCUkt999WTMhCwT9AusLjUuTbkMRDvyJqWsZoHHzDVtoEBQTiXEc469P2NhhGb55qvT5mR1W7tbWzStfL1bvZ",
  "key4": "5aCvij3FzRhSjPrBxNZWa7r29wqDQqNNAefWa6rvhYuQFt2J4UyHh826yY7mVP7ZuvVpfNUfNWzxQzhgNPhscP3d",
  "key5": "2eoAnaEuYQ3Krzym15uomqPKVFrqXMtBDuPPRgur6qqb1LTAjheENyfjVNHNTLnHvkJQnW6Njmfm3m1pP12MRW7y",
  "key6": "4nFjdqVb75sdqgcoMfWW1F2HCndJYLFRKEzmfjHRKQ834vu1uoi8JoFq3nYZngKjBLhFzZq6X6zzWWKEnBN8WpkD",
  "key7": "5NXywMi4m5QJgUnsGxpNM2XU4eVBTNKDEct7wz7X6SEZiGeAkFrcS5dNLMzYfeQfCUjfka9B9w8QNnPjGUL5Fo6N",
  "key8": "qURb88K3Qg3gKdiWaSd8xacM5doCTCWB4kEQuUymcekJi6j54SWhQXevG3uKLiuPdKf9ji6EhhiaTqTTZwcBpxT",
  "key9": "pn52Zqk3ZthV3sMokx9kv88CqWbX13tXQxbc7sZvsKbj8zTSnqvGdcW5acMKy89wtY6Fqd8jshSn6QNt8HPh1tv",
  "key10": "3xDG4sMH4gF3NawMhHg2Tn3eGaQaumqosw5ifCiBaCKDtwVGztjvPPTvA2fx1BaFKNhJky6PDhqBSxNxTjAVes2V",
  "key11": "5CVs7C174EzDv7G2SXFWx9axndXoigouoNtJyXBwNTRL27yAxLqJDWj8zhRhcwEXdtHRapmL1bxMpg4G4KFUjbpL",
  "key12": "2haaZ8gZfcshoGtzYkT56gkY3n7vAqQE2a76jvzrkH9tZ85QfGhpmPx4VKzDsWg2bu8NKVkRbrdSv7CFfoECibZb",
  "key13": "3SEtEAzsnCoZCDumfYnMu9XEYh14q56NZbvsMB8rCe5coQeiFipd6vmMMJcmQh3a5KQbunwm1oym1vreHsw2r88x",
  "key14": "4kaj3pwgKQXZ8R5PgUNmkQQrq74z6aaB1kXMeRVV21H4Zgg9h5g3EP1gwxUSfrDdjMyTQU2uH7yfMQ5nc5eng7DE",
  "key15": "46fwpuuJqTH6X9bAm2JPjxJDdjGAv9jaEjWCRLexpbrQ6fdGitJF3WmeTXqoz3kMB6rfAzn9bKLA57ZcxYyBFeGq",
  "key16": "59Qj7pEGb9AgUh5EX1My8uiWHPcsN1jDTi5KYoGmWtTjVbEA5zGRXgtAr67fzWbA35NEdC8b6GCyQLXf7Suy3VPX",
  "key17": "5zs8sswPTaf4q3bZHedN5NVxGLqVrgRxSZbAcsUDDeeRefz9E3eJ5HtdGnYWMDQbT8AdkkWNntvrqfKJ8w2p92Qd",
  "key18": "2gi5cLX7i9D9Qfosw9vmFLbRqbG4228qMe9CnqsbTeuV6dgD1q8yAkHPXhHAAu5PgU2WYsdd1S3ueXLodQQT6d9b",
  "key19": "mDP6rwEdppr4MxZn4G94WStvp21d3hn3dqmPz5SWQrKTWdihUGCrFPTkf4aByDeVPnuDZkYq8v6gKvcXaqHsXGg",
  "key20": "3S8NxdPjPD742wkjVKAZJN5vLetQC2KgEqghx3sVM8my88a3X5wwDvkeTt3W3cFcm8x9Fnpuf174oYJg5P6cjwCQ",
  "key21": "58zy7QktFZMU1HLxX11RXWyN7XqXCLdVSH5NnLqvERbduNiZC8QtT2A1M4jeCs6vndRhd7FaiznBNWwq2ad15mSX",
  "key22": "3eGsj3AtResjq5bsr8Krvky3gPurSS2giTzWZTgGihoiraYFiELmnHt5AJWc6xXy6QmVNExkqfzLbcQHQTeWdebJ",
  "key23": "2nXi3jpSFbWJPDNtpGZnSEujzRNLY6UAMAgUY5toCZwT2s13wZdoHk4budmh2ygcZwpDnpa5uwBfNyve4pjDDXCU",
  "key24": "5PPdFYWdyjuDvvmShMWuBZBJLrWrD2b5pC7pZ1rqLVcKQuu4ZZ4UBE1W2NVUW15vce9EGKG2DxBt6sxgVoMYfogF",
  "key25": "2TckxjRE28ZiWwjFKWrSiDsiJdBjuuA6RR3g3mPFWpM55MmRrUvQgZGqnZ2KVDiEsFu3iBpfu66qFjC6yy5H3vva",
  "key26": "2SEhGwQjWSgxHH9bRsk3gv4LYg58GsN1aVkicc3Pa8zdEFTrJLVydCP7mAE4Km8MhzumnPSG4Ebj5UVQTe9eoppB",
  "key27": "iww2DnaydQcQ7TdE4pBmKVn9kuUvpsDDuj6vNpjycxwEEmN41xYmZetDH8hkDUaPse6niJ3DotiVj4T6cTXGjtx",
  "key28": "3zhejkcHzbmgNeSe5HMiNAaeWveycXH3PF38DAKcnrsCzj15fmuhGqXoDUWEkiaQFu2AZCP5nriRVUunbzupds2A",
  "key29": "26zRJfAJuUd26Mg9LNycefEZWQcj2xvmrvDq7JkL1KZ87kNUFNHyab6NxfEzKLwKYYTMfGaEoVZw1KFh2mCpUmQ5",
  "key30": "2Ad7MCoG8AXfDQCE2EJ7Mw973rK2SBiq6rtEmJsWKhPNYrjXgd5H9dhePPTJrAJxqdWNYPojhdPfcg1mMu9y9aAd",
  "key31": "XTXUdnddkYjqcsiRUUNqXMbqGKyNkKEsVA4FLihzPy8Xubzbr4YfgS1zSs4yJKsGNoMzzhtHUG11XXTFNJBaBxG",
  "key32": "2hrcnU9PmdUGfoZNhgVe8h25r8fG4AQGQfuByzDpLhLhuBhZi9uH4K3MJJ6GVBecK234kCeAS8GDdRab4NjCYiH3",
  "key33": "Tp8du3DebSiawfTuXYTptqmzizrVdh1VotbNtKMsDM5QAq8hDnGruEMGmvEUrtJ7Jwx6VSEmn8dPH1L2EvMKufi",
  "key34": "4KQQY6nsr1JCEwU5XsbSYDE2VJvU6kk8eRkTBZRiWVZcpydopMwLFvAauFUgnuMpZaoPLqk2adY5xcZPhFhtVUSW",
  "key35": "41EwxMKNTzM38TSwUmNinvDK1jL5QVtDHrYfzFHJq8BH87xDncy9B6YUJbE9oAyJqApuULGh1gB8CEF5qMMgjut9",
  "key36": "3c8BBLi3QAjYdmxgjxYtjdoRmBTnW13ESWdauGvgXYjszv2wj1T8bX76y3nfL6W51C9bJNKmpc9MWtNF5TEiH1Q5",
  "key37": "4hfKAG8jRShuRFpqwKdK3dtjxgstqogE2goPKfUHKuj4Ax6L1dnitxsT9f6peqZyopDWz4UYvx7ckga1dCksjiNr",
  "key38": "oSGLLuoUDhgT4DQA2X7GZH4iw1sX1VgxEaAYi12PsfhByzP1msxYZNqFXk53ZrFnZjwW9A6sueHJAVxK3oRoynF"
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
