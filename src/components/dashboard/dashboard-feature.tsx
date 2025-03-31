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
    "5mCmM1cs8GihFbDtLBaFpT3KKtukpuiM3rfoemwBMbdgAymAwN4pJXkokvconuk7VdCchbHgyTJxcuNFz7JPNkuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mui3L8m3UwNKre5P3mfGiNpxUiWDtDSFfgxk3KbtAYhFpT3oFYjVJbRc1NkuunfBL4YSoCzpTzWbFUP1uJQo7cV",
  "key1": "4athG8MzKLaDPEyLvyQ35LZcjHFd9u5x27DYuLGGracE33LyjJgHwQSP6T8DQE99Q1TTgdpsvYUvopiucUDYj3CU",
  "key2": "52kwQ6ETeHMoSSEj388RQkZDKCf5qFDYE4GiWVHoyv7Rug5JupmAyhhrhw8h1UR71DodvJJ892uFZzdqaJ8JvHNF",
  "key3": "2UyUyqM9LEadnvin6RznnnWg8kFCnYG4ZiokU9G1wN6eH4JgJWrnHPCZhuPqDA7kE7Hu8mUeL7Rviyua32ST1aeU",
  "key4": "2uZ7rNqgrVVwj5mzMSy1qp9M4sSuZpdSUx2QFNj5dgNhAY7qmA87mpZwEugL2jEFBzMvkEgCs8P1WP8i1nf2tPoH",
  "key5": "3Sd3DiSpp8tQrSEgcK1CAoWd26JsYgiNufX22nuz9adjz1JT4xmnABnJRrGQhEmfD2KWB7ZCEaxiDpEBfC2P7UEj",
  "key6": "4iUftPSyCQ7xvf15JeqpJMH9EEGyVzeEH5CtejBj6UYfTmBas2jmUTidVAw2t7Ys8r5WhQQNxCWyZutt8d4PSMJe",
  "key7": "21nCQpUdY5iGiTMRRM4Rm2tNSEgGoxuAhZp1eoUSgGEdexKVohu63vryzeioNRLnAGfxR3eqSJjYCsa7jt5k36Q7",
  "key8": "2hgauGhgLeve6ngo6TyibDAWpg1d6LX8AFrntjv5bvLhvZo7gUFJG7UG2ZHDeZW5a35JMdYxn9VZaGXEy3gFKya2",
  "key9": "MkRC5RKAMCb22TkuYAtBJh89R3mwm3KZwHihfkacvykHnarBtYEqipGtyaSJncKP2Z7JLnFDaEKfhaTZQDgUzA9",
  "key10": "6PMAGEEDFMuDTfqHMxZYHeZUZmzMT8BNU6q6zw2HjRAWapF7JsJ4BDBS7S7nzRqohPZHKj7MLLHeUMHv6LJCJ8t",
  "key11": "48564M6P8C9sRwnUWMXFpCy8gMzronfjwHXuNJMpymTKmdEcRodWRtPkDLzZx4eRSAZvssVahvqq9sB17jua3yTF",
  "key12": "4pHhXqgDmKPZjKoFUa1B77cGF5DQ5LjivpEELSiou7vp4pzBazGPb6aYw6Ud6RJ1rWwEz8FqmoJeaR69Ssanvgy1",
  "key13": "4Jk7brgqYeuxKNKFCsRVJwHpiFpkxWxwgSpLeejqo9tsPGKzC94tK1C351bXch7dKDkjSUrsEfQaA8dCdpW1CrVH",
  "key14": "65C2EmFv3XViMPpzoKLPgDDaRNMiDwp5GVDwkFecWk9cst9L2ZYohTZwTFDXqzXM8AmqsUcz61NMtjPuyMPQNGh3",
  "key15": "26g6WK9CUzm8pRxPtqyNEEbBzSkdCr3AhGhz9PKY6iW6mCiZX8PA5UNsTC2GhWAhe7zwG4RGCMorsgAwHK855QSL",
  "key16": "386kUCjPFbFJXR5V9cQAXhVNnw4EQ9EfG7AqTeRCkVtAeFPn8RYfaMmCX4fXZvXY1QyCdWyWK925CdUom8gNHjeX",
  "key17": "iwzmWs54p27Bx7997nMzQyHQBxpUDxFTkRqiqFNAj1PEiVWhibMvJSh6jNsoij5uA78KVN9XvYJgDpVb1hw3DWE",
  "key18": "5qywaA5AjztouCNmeEwemNk8pyJzr5RW9XL1oi7ZuTANcf5hARRpXa21Enp4m3ZoDLt6B7LvdWcigiYAqUQwwiLn",
  "key19": "3JbzqWK8UH3J98WuCT2T8LRVAaKt7YjsxUKftZAnq8nEbTr49XJKUkc5i4tYDdv9sSA526A7AJREassAbP9Nhi7g",
  "key20": "4oB36KcrK4icLNgEStMSYafJ93KX88iRugUYmbkyhNVsPG2BRJbaFTrasexVackkTG57F47houWe4Wef5hJQRjJv",
  "key21": "34GSg5jcDtqUwvamn95HVmDPxz6NX9QXRat68MPMfWNJeRQr2WWZWTmDZbNiJ4ePNcARC4myrTwDKieakiGRpRby",
  "key22": "21KERAW8f9aNYgwxmWqCdPknUGdrTr4mmh3oeiBSXp7ZpeZCc9yjsnu6pD6JaoPnmzkMqrT4eiA1bmUWyxcW6qvK",
  "key23": "3WerZws5cYh1TrQTZ5ZZrRE4e5DPXnbHAyM2bRy28amV5yUXVZ3aoiHYNVUqFyTemurKThj2YSVFZdgtFrcH4zoh",
  "key24": "2uJspzwHLSiYUXL3X9fXwDYgYQqoHVBnNvbtb63aoWwVhBFZmDrTZZjH7ZZNGEYhy8evdt81acqERrZUewdi3ACR",
  "key25": "3CBhaqGAgjMJpLZnGxks5RKZ2FSWZDGNJ8yiUfcaHMyUw26geBinDTjNmh9tWikKvE7T3CThp8Zc2yf1vwbcv5Yb",
  "key26": "fYMyBESzE26yJLg4vVSVRAbg2C4UWFYng8XJwMfGzeJH38GVW1kYTb4LiTY7vUK3igMVWG3HSywy6LpXqoeE2Fb",
  "key27": "46KUxq8XkYbn3xhqDSLFrz1TTzVEBYTM84WvWyWDhtqoZQFeZpW7K3n1hN8ZFiiCmiUmaihERz6cBukx57CwncEa",
  "key28": "9Ff4pUmhx4VEU5eaoX3oYDJrtEheZBeD2qQj7Tvo7HKiKFj6o4P5JGBjCtF4CWbu6ndymvUgBhj7eMfK3viWpGj",
  "key29": "234zPfRkhwthS3dfHYwaKxvZ746J611uRaejfsJdeVkgvNUPjT8c27bLzYAVkEgt8tEJiKwzfEQMdqZw6GW3Xu6t",
  "key30": "pFfTFFbxmAp2aGuKT68fu9cUJjwjrL3GDNipwiB5ptcwpMP5kKKDPaguTuGorFv5vqN31uoK4WoPTTX2PwacbJc",
  "key31": "24jdbq3ReRm7JtxPCVGkN1pAELB4eJxF2PUXQqHskf7zbyjSzLBu6RYSKuub56GB8ktpdXng17C3VLLY82zCWcHg",
  "key32": "3Q6pEg4dd34caiMc3Y8ZkyHHRrn69jHDcXM4Ep8nyENJ3zzPPMPyiFCqFZBZS5i66pWeh5WJx9korDj6Hvzoyxn2",
  "key33": "58WkCsyM1vwdoqVSd9LWPoLhPZ9XPGxuyPJnqqwMT75aDFpe9UPsViK2zxo61MNgud1x1w1g8cMoiFUTyZYpBr82",
  "key34": "3dRt1HRopMH52gsMW7g6WjaZVMQoTuCj5pcSJzRJPmemo8HvtqjixtdG4MrCChbJKpyp1dqQKWJgUMWd2cNAUsPK",
  "key35": "2PZbevGFEpXXdnqmH2gCdmpne42Hxm7PndgqrgpWQ3u4c2yLqoteZDR2Ptd285kKfoEjxZb86q3cfG1qAiM7hdQT",
  "key36": "2FGLy3eZMwKQBytQrjuGPQf8XEteVYeGcEBoykqppMTbko7iyNs6ZpHpAoY5wg9JJ8Cb5yK5kKCmytWWEShbHU9b",
  "key37": "33eP8yu2Du9ojD6VtzyjkUwngirCemRpEUdW3b1VLX7x9wy3b7vwc3q1fccCRYvqnnTH8k2b7oLb7g6Ybicm4C2c",
  "key38": "E4oUiUhZNmaNqv2kd8LhSG5by7Q1vt5Bh7myrJQ5UwpfCskvmreTcPE72yJty7hHwuyTEN6Bz4vHpyn3g8gxdfQ",
  "key39": "3xb7MbUP7wjy7683V2VgZkncvUGmApQwPTGqfpHpH7b7shfHsfZ3M1Yh67FYnTCWWC14imD1ZBB5d3SURyq4ox4X",
  "key40": "3D3pRK8TiTQ9REB7zf9LFMiMDkRAWav7Jt7xgTBTpSEWQLoz1mANMUyawRTxPrbMZy817aWS7TEVAjZNonCZKLSk",
  "key41": "x7mxqPk1eoZQFYcW59rt4PXbvd1hiDovsNRtHhEp2JQ8CKpBDP1czjPSrg2ptjSRaFCwGTV2ip7vPCDFyWWP1Em",
  "key42": "33fAZVVDh1ss6nJaWNuNdB964sG5RGuXe15eFd9rK2gShgyhCTngxMutrdiZkJPx6tjoNk7Kv3jXrt6cYg2JCunu",
  "key43": "4A1AgbNWMysnQLhwZSP7joy9uTnBYF9EBnxAEnj3oSXRDDcSrpkKw8tatYDeEvoCfbNrMdLr4eP91hNHhg3av3bV",
  "key44": "4HEDSGbPJY9PuN4aZVeYKKERoe8fnrHewGjwpRfkathPqp42HAmHAhsjx39ZnGdfNuNrbY4nd426mtQ6kJiTaUnE",
  "key45": "5SZv6ue4BTk7ApCG6dxyAx2Xp9Z3r37cnD5D5YD3WxpW23ncnQ7vimViDVLjgfJ9tCcGQQgwmRThG7PMgWqzTrjM",
  "key46": "2ApXHjBkGotzmd7pnZsD6g4hrj7evV4tbjJiK95ftDqXqbCKkgniNgoF1TBbLjbexoJ3FuXjoTWo7M8n8wrYzZ7y"
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
