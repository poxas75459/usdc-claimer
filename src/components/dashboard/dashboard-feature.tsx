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
    "2FBxbR9wBb87DZNtwSPaZ15eGqLHGoZj1K7XvHXvFqmcuXVGYPiPJqjRRGe3AvyNxqhFVsCVysr6qGxW6S6xQDC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LUM61P2Bm2aFUDgtdHZm6JToPjCC35xL123W1Wttj5nMcZRguscU95NJPHExx58XXpNEJDKdFDDdUGUWsYQdjZK",
  "key1": "38CU8KKrzLBzU3o9LNx6d55rNSJRL9NQUHAPQJmPxs81CZZbWrvKZNwsfVqeubTMxXthx6qknkv1EXHEaoRiQH1v",
  "key2": "tkkXz75nrE2bVNKoYauEpG19ELr9ftBYJVtJG6TPQXHDLpwZ3k6jKyeeqwRDBtVAGbJCvxb1pF8hwJpCit7XYdh",
  "key3": "5bbZCu53SrKdUF2zTAJEYWeFmyuAeAs9WiitvDuXiHJm5Vxp27J3seYnfQt7Ku2vRip3Kr9aMobQjsn1Hu8gbKXg",
  "key4": "4ZgfTEWmhp92tmLTvSfqk5VMQdqzswhwB1jymB9dtinxM3b8RPbsZRBcFcA4tsh2pfyWQof14mK9toFqzAJHGCJz",
  "key5": "ATEJ2u867EtcdaKC2beVCZYtJo8PdSfBp5djNFgJyz9kpo44T5cQriBGxnF56ARaWXu4JfkqgVVnqLsiXCbSPmf",
  "key6": "3hyCZNgm4GFmc6sY4U6MEAbkJoezYqf2aPqSmJqJZa9PP9c2TCb2s6NYxK2tvRXhgAKoobAwFiF7ZYKycF544uu2",
  "key7": "5Uw84XeBj2arLnz6cJMbbxwaeZQtzVnEYg9QFs9QvoVXrkHZ3VRS1V2jPHq3bkeUv3YU1oNuygTqT8tngFTj78iS",
  "key8": "3jXNQsTuRZSSfGSuK92hU2AKsrq7NVXSaq7NqX6wFX1i7xf2FB75vKWvtQU3sPwpEnUJ7HWn1gdHovwmowpkEqK4",
  "key9": "5oqRmNyeU9YmR2p4SpxAHH8xAnLtbwMxrpSwW6BsvZ5xbDMgaE725ZD2QS2o1TzgNpCFoV7VHkfdyTwkaYEcbxcY",
  "key10": "2mZzUC3cZjNYxZmZKLjrD9amMEUkfPXEK7SPcc6teHEZRdQBddodvDJs1P2fzhCPm8655wkg4L3wYZc4i1Z4QCZq",
  "key11": "5BmfVmn46tbeGXzfVYnKDj6dAT3KN4NSoZ2AmHzfmb3Pymh4vkznqgsLQUXowYS4xtqXu81cnipTiVXKoSUz8Cac",
  "key12": "41XBqbc81U3qY3wTvhUqwjC264Co25Bn8tZH8FuifZXPwLu7954Vfh4LqLhpXqsc3dBvhFHCHu1ms26rBJvAUfdz",
  "key13": "2U5LCRDWDr7w8LuKLDBMjQGF98yNEdXAGr5Fi2RGxrDowrFwegBWfNJ2NWcDPgdu1aZuVCs7y7evSrwBvzzd3Trg",
  "key14": "3VBRHv3NZany7pxuk72HVo9yrDjABN1K8UWyLAh3k53BGbXQnYaqw9Q8wiqYuFGR4424AEpktvzjEsxJEVjsfSJL",
  "key15": "YAW4wZGdcGbJYW83BPpXet8ZhUNPc3sLspQa1axWy36Ky7JHoPZd1NzuxboTzACFemaNw4wG6NknNvxapaH6CUF",
  "key16": "4YXSpwERTpusJAJ2oTLGFznqq7DWAz8ssDmkbhrvka21kVFVhuPGSBjRdfiYd6mq2e1dSRrFzzPonbsyLALksdbd",
  "key17": "2j4T5iiGjd5ZsvGjeqW6d7UsiX2FZHhdENXjg8zEQkWhLmHbDQsc81i2EMw8tn9WZ4E5Vt9C4AXKRsF9ecxc9ceR",
  "key18": "3YZCRwGyE7YAk1iBGMuX6nL7x2nW7K8jnCSPMwRb9t4ET8CndyTZhB4PhK5ppegTzrJhdcShN53aa16GyrLRa62T",
  "key19": "2feCw8KaAaSB97L3bw5M5Fj4DcLTAD3xNXBsGWZFMiGqGeWDytduXYd65TVVuAKQUQMWkf2j4DBg19VyWSNZggRW",
  "key20": "46tP6dfJkyHed5SxfS3TFAsAaJAgAJ6rtLXsVFNQ9MmZt1b5HkpxB71sZeZ9Aomj8xYFcdK5u57tE8xqoouCRXoJ",
  "key21": "2hkZfZwmV8FxuUFbSKy42zEfEzTZgQSy1hZQz29jBB8SXjWHY2DbDk6Qgcs6mBrocyCaWJyh5Fh8Cb9KwjKXLupr",
  "key22": "5N5zwsEPHARiywBDx9kEuib8aTcK5uXSHkvafa4qmbbk1cs71dWBR7kPQM4mH3DWQh2hYXfApZqBrdqF9jQZsyRq",
  "key23": "pbtwSLYCHD4oQ7ewFcZNB1Z486sxF544Tf2rYJBNLztaS5P3zCABktqJqFRCQEVGSezRUuVBFy6f3u8rcVgzEW8",
  "key24": "3ojbUZ2f5wFTUzdT2wAg6zjRUgn2FCciFEYCpQ9wEh2i53pBBspvdQ3VtZmxvsqvc6vJefwjKpjpenwEdxpbm7cV",
  "key25": "2PnXbq7ccA5xKGbka4HQeRRxqiuGJKBz8o6VrdntSUcBVns3xHZEoqQEJU1FCNM7PEw1zVYS4jMBU3NZy3eUrXAe",
  "key26": "2jM7TgHnrtjCvsnN8Qikwubn9xToui15um73HBqr9oCyany5H4hDbFFzXHtUc2x9eAPawsbW3onmvofrsP83Wq6C",
  "key27": "35xWKiHFya9sFzkkGLQkxt7G2pfaCuLQiyywYoAC21NFGGcYwMUKvahA8Qjir9YaACNvmkdbWvruj7Wt2WwWn6RY",
  "key28": "57SCN5n7k9QdEGH1kmEdNSxJ4GFjXFhn65foVSxJefNz2dmqESJ8py6ctuYc1gaT8KuihxLJC4tNNk8td4xy92Kc",
  "key29": "3uTvSxAbJpPn9zzkf8wHEa6XyVhTwjA42A7v6xuUEt9opCTCVzewCk7nQ2GDUtTnattu4bPmkNr8s2P1WuYrwptz",
  "key30": "2iodqW4fth7AjycPqBzBFC8nG29QJbUG8ZZuXpnD7oUmZP3cc8YZ6MchG1XrEciiuS7Nr2QKXBxtfT6UFSr3cAiL",
  "key31": "5n8mGiPpZuYro9phpbW5bSaSwSkfezTF5qDZWA8TRhh2bzhF9mSkdEkoPXsPN67MUjQFMHpoP1CmPpajGLyVV3LP",
  "key32": "b2yo9yCHze9HtGg7LGzskDSznkTnpEbqrj3SN8179cKNueZi3bSH2TatgDqtHjeU5jChzxNcCcwayPUdnQvhMat",
  "key33": "5QxvmZrHKcZMLiLm5VswV963GhY23iHsC2FMtRFtbgXjZj8oJtyo9xy2TkYpbUUaJxJr2ckgb8HL4QwBqGvYNT7Q",
  "key34": "sVNptLT6gGLJvPMvLYhFczrbX5NPQbetGHgNJaXtapoc5a7cSqbcGfqckKJwrsB9XqW7XmvDX39dEjyfy6cjhYk",
  "key35": "63yg527eTh6YSyYMDCps3KvKR3SHwKG4fJBhU5TLFBxWWymy9JWiXVAm1LcMHRYceWdfZVMCBAYrhwEerDpr2joD",
  "key36": "2bTq6GdeV4mtf8QVD6NG582dosN737YTwHmeGXKworqJeueYdTfpcLifdbK471D48xgtXukGJeZHCbosJEUsHh3V",
  "key37": "3ccT58KJhXQCpD8SfvW3BqaFWoHo3TELtYFui2TJhKCuesZvVRbKnx7mZ2aqfQt27EEaksGVUNVRxUDH69G4jpXR",
  "key38": "3dmni1i2Q49Vpv34wdNSwC1gyyPZne97JBmHbV7UoZQFBDaWANrnNao9tMCTdHq16K3Yn7hgG55HUi65hSFc6QEW"
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
