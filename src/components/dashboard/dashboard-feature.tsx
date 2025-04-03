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
    "3eGAD2p8L1k3gbnsdgRsg94qymGjmAEZmudnEn1uEqQuLAZgmimtjgcPV3FDU2aM5GAmbRJ5HZiY2FbocynsK8zw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ve6U53AES3GRR8N4KL1cc7HGCwXv6CXoTyrFya3FntcyFcZ9r7To5Skgu4jqMwp7aohTHQmK2p4tpCTqTpSDj6S",
  "key1": "3GUiVKB1eKKdzTf5kTuJNZomFbNUHwdAvRy6Qyvhvhs8ywhQ9ND842v8hNgj2nfBLKNBsD54fBd78jSo3hqQvCV2",
  "key2": "3KBBMpjS5KkYKcPwLqVXFxSak7dzSHBmkGZduzsm29SoFHJA4jATkEq1wkfkRXAPooXTkyc18CBUG9YJWw8UGiH4",
  "key3": "4Yj8NM3MpF6eFyL8wAdKY3i8qdA3SQ62k1ghAVPoQ1dqxHxQmGffxqz8LN3RSskgMCbHtzLCeMh2VBiAMERmiJYG",
  "key4": "5McSw5wiYmgUaEdAUeYTvLV6q3dWZh8v9QCW877ftZkK2euKCPYbC6EhmXtY8w4UxjDoFQEtEkgpeTsR1EZXj7nu",
  "key5": "L8E47TXT5eHhvMXJWeaay39mcyGpZcm1ytYzbNFLraVBL4VTXnhqGcntvCcNQ1914JJYKfkisbzmUzWbdLPQdUc",
  "key6": "4WdXQXNSmj3dGGnRQXtmgS611x8WQBhzr3rKGb4y9aswydeCXGz92RRZhGBcShNxt5vtdy7abJRjMMgEpRCgymuM",
  "key7": "3cE4ftAhLLyFPo1vCAMbdUKx5DYGpCKPU4WHgPRqStGxSWpdh9MpoVN4BGXTYNRn2Wk1WiwS4PnBk5xaRxyHDhMt",
  "key8": "2uraFiX4YJJuAfhBidX34K4P4BzLUKa4dqu11Ayo7JA5bWjPNQWp3g1A7HAEwhtmjQtnNTYcjJHZCTKKMgsmmDtM",
  "key9": "2WeuRSJoFQujnSptV7NgkFPboBqScQ6DNuYgeXev5oex7Cyqw1FopL4WxddXdedfjwvjZJg41eFVJNFrknrbDVHF",
  "key10": "JbnT9ab9MC7aohwKXwSarpSnHkrtNzCEUtnM6csDh6p86iU7Re1rXVjRZLpD6sB17XUyNNu23S3quz8GvQ7LvLR",
  "key11": "46Q19jtPjuf5any6a3BzM8NQR1ZEqWACJYhnJ39sJYxF2tgxffJZAmdhvNsnDr3dGfw5Adtk4v84efXVFCVVbwh2",
  "key12": "34cNGPn8gdAAtw21FirPXGHBJC9g6XrU8ytGPXK1aW7Y912qwvAqSkpR3UNoq66SVc4rDqgDNyFcPxBgYxpB3wkc",
  "key13": "2UZnD8rhdb3W52bae6jvaERU5LimHrgoCpoRwRpfErhyYQLvZ7jtQtwDdf2ErRL5MM2bDbvjDdc7drykE74cxQHw",
  "key14": "3r4q5mUy2jEay3FcYsPyqpn92uLXbPJqwUBJFqaA4o6ScixJpJ9XkvuQpxCD3CstKYLsXjGPD38nKU4yfXjh3oxF",
  "key15": "4KtkmwnehJxRiq2ChmyLES2iiufMnudYxpycFw1BQ9gd39zneF7dyySvsYBsdmBBZHmKqZFYoG2n3vCE7zZb4fre",
  "key16": "4bxt4Qmxp11p9PgzE6qEh3nKQhZK3JrS5ud71ugPM9yTeHpZ2DG8CM9at7Cga5i2rocai6hp9fZLUFEEPwoojPwj",
  "key17": "2WNnFxpyg5rbet8911y9igJp1xJNgvX6sgmDRdWU5r95mvhRaBZ8WnzH1kuEu1hekZfcYrPiwsAcTKSZ6dkQuX85",
  "key18": "4KQQC1YrUsY5dvFauypsai9PRWyYMiNqm96VeVhLrkc9QK4S9JYoHs7jN5qrzqFfJECP4YaXCpLUUqqF7Bs7b6rc",
  "key19": "Si4CAHDeEJE7cwfKcxEkaLNmoXcMAFYZ35naFPyrdy8DgQQw4KJicNAwzXdLms178R9JGgRTwanrRKPBPF1iqzy",
  "key20": "5CiSnEFJrFxjqt1VUVepe3MfeUY9j7wiTSV5hWTdk7HLe2zhjwM6DD4JaUqA4SXdsWGW2qs3jnAUQPpYf1P2TPtZ",
  "key21": "4Q9t5bKgDZHgkAkg8xFDU2TxQpJjfgBMWSwTwsZyP5anyrDghCypqtSWBZUvWREtbmyn89NWhBdta5QgsF67LqUs",
  "key22": "2tS43B99eHJcf7CsEgKK6hZi2MRzBT2VLf3w8TPJfvQn8fMS7aornEVX39HSWSmrBC4GtVYjqBF1PJLefTKDZLUE",
  "key23": "29ibVQsAckFMHWXmwiuW5PdjaeiRJkkXCp1yVVqRTCdAsgo36MeRmC3qbFpTrDzWFn35jdTTgca2SafdgPj28maj",
  "key24": "4TM2s27cHqf56KQkDyRywCvy19zqVmjR6PNv3zDJse6jwqBwZSRJbGPfyJQdLF5Mnus2gXvBupWWSKBXpb4mmXeo",
  "key25": "4auVjw6TKGnETgUZj3hjzxuTYTzePJvrDET23SFbTe3dZWFKPcqb5pEKKuwpax9si4YT2c7zfwYaLe4CNQ7S1cto",
  "key26": "2LVkPVUWfZVYkY1h7AF4DPKsaW6g6d6hCv51uAXr5F2tYocVbBVCWeA3fbpNY5fDXDTDG1WFk2a4qgVNqhGTYbiz",
  "key27": "4z9nWvu6o4gcFw3tfhQayCvbHQUxoGQtwMtGHdJsQ3qXty51z7xCiYAfUVqqRsgh7m3KzrMJC2g8URcv4mk1txAk",
  "key28": "55F8ao9MRR5Ls9PMnUxiFd7o44LFG8Qsimj4RRwk1XAqtS9dUS5mJAPoSw7qUkG59xbRcH56md3E7TnDbQRb9abM",
  "key29": "5ygRhZomtTYzdoqV6mMh8kvDpwX9NBB9sV4pRtc51smpF7Mv51ex2W3YJTA9cQD5LW5U65K64Z2CKzbkkfmHxD5F",
  "key30": "4aQ7DafWpKn2UZ6cRVqLyNWeqrwxxTTpKBWbyfggfGFJqUk4HLqEj3Hg5vKExSNrKsxREAxZZQFJyqDCaobCLhHy",
  "key31": "3yHgEVwCj64sC6qeVLxv2pLtVtPyKJvGLKbjpHTctk8CS5eYiwiF4a9bofydvvbbRoPjD1F8Eb4RTCmjG91fVPHW",
  "key32": "2iDXfznogziv6wdBG5cjkQpDi91m7eVs4Fhanxda7wocoPc6Gmy7KeCJSJeFmirN9tMJgDAua87h8vTJt5bratWH",
  "key33": "5h8rj5jBT9ZdiwsvViazk7ugvLP19zwSBkYnsM18e7aKWexX4kpFWqReQLjTX8HKFi8UGqUpUo3beVM51RgyPBKx",
  "key34": "4H57WUFT85uML7854KbHrsuPq3ciUV4E3QtueSis62TvpG3E5ZRdTjtHJdTPXHSF8QG7Q1nfBaiSQ3WS6NkH2mxf",
  "key35": "dJxTP8RTiCsRcZrK9JoX7LkReHHBheQeBKNHotgXwXZmKTr6FYJ8FJBZ2UzxjURDPh7C2c3ocGyusjiNuk4RkwH",
  "key36": "5WuEoSmKp2HUG6j32GVfZbLHTutnSxDjVxFHG6v7CmwL2JfEc3efov6ybJ5aSaJrXxH6VvzDoxvGf7Jiowo9mDDy"
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
