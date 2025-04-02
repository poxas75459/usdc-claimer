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
    "61Ujo55pmcmxqpTWjJBjvoK5weoNx3cAQt27UtDjHrsFKNjW8ZiJHJH6aoTPcs23SFCnJboGjDRdpncSroLDeWwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XuDEPUMcqEgVVCdXKzQawZvVFJTKMX4ER3vMYaBrUrwuehmazQr9FNBKSuzpzNx45GJu4ApisY7snxwMR1hJjDk",
  "key1": "5yL5uoHuXKwpCNfFwgG6E7ojZXu1ws7DX74ZwtNHCS6BHV7zEFjUZDyGJZKrnrkJc72DCrEDJpqEx9MzFrnDAPJQ",
  "key2": "5EXE3Sjs9YzMgh97gUkATCos5opC7LawhjaYpvmZxfoyL8aiXqMDMke9rT8Thsqj54fnZTCQnXMyCFN8ZsgLqJYk",
  "key3": "4UeGyUt4S926aNiq6kEoo4NP3KMkbDAjnoeszU3ZFdv8BVLw6PtfM37vjdjqNon92ZpyF62a863fNKcS1L995V91",
  "key4": "2WuWVJqtPLnuo5vvJMvgqcqduK4CJmbVUqyhcZKZXkK4bLxWc7wZui6zdQnpUq4xNAViCS2LVeLKYBDfWZzEZ68f",
  "key5": "3LALGQVhsn6Vjaz26juNKLqngnZRMpGUQMhK6CemWSsJ1KeQbjXzfbCyxkkQw1pEDD7Uf6F43GiGv1cUGN8deNcX",
  "key6": "2cdnagntXtN87wfPeqpU7DnVC4o4ne5vBXDXNp9N6CBU4yL8vGKgML8jPw7VCrLvnghSKMjb9eJqRTydX2vpGLWh",
  "key7": "2GEyU2Kw7fQaYpDBZpRkXsHrkbSN9RsQ8xB7JShbQ4msj2764XoaSG5U3zCiYfwL4MKGKbfcsXnqtaQGrsxQSGXx",
  "key8": "5LPn4gcJvGzCCBrRATq3XdJapBVeZnpZtj8N5uG9Ajh8L7SAgjPW66UyjXh6WpgUfxYDgkBvatQkoXpCaGZDdD2H",
  "key9": "41RE2MfoncdWVy89m5H6mxGau3rrM3gAh5SzNSw7t8SNRigWezwb4bdJ4X6rzArJdfPs239Jtst7W7NttfRMb5F",
  "key10": "3z934KHA9RuqaiqNypVKSLwWuG2xFbhhsWvvTXy5UMLQBGiGtcfuAqZEjnu7hxZYkzRcSBd6T93xKCsje6iYzPqf",
  "key11": "4HCoSPaHGAVsf41ZV43LESufSzHnu99sjUWQ7qWsryCRt2mmD6Z5cPTF5Fy1gnCWRvJMKpdMERSGeNKQQ8jMqZVv",
  "key12": "2WCsWVv6yD7orL5fWXTAwBkt57a1zmqXqDoUjWe95rLpdGaWUhpJeG2kNasgkevbP6KwjCYePm46L4ew1f2dVW2c",
  "key13": "5AZRYwhZkUqeM9t8gpHtUYJukA4C9RNq547Cxza8gfRmEZ2s6Yptxu9zMtoYAhrjQJcqRBFNCMWUkroT2dwyJQE4",
  "key14": "5GuFce49KJ3uMCQwV7KsrAMjqSs6ouWTfMYnQYgEvgksqS24nUyNtJH4EC1dUE52pfyXTthJzQKsVdFnTRzFxCrA",
  "key15": "2wYbEd7xF3R9saAF3KjL5yByhEPSqMuqVqyEqdEHUYXsbvBaWHJYH9Mh7edoji3XhuZuKmvYs1KiN6a82v1eWehv",
  "key16": "3jNSD7jKCCPjNxYTuvRQwrBhLwQvqbqer1HPiwXPyTPSPRTrsQLd5xKc2gewgevSq8Y5FafbJ2w4xEo1PrQc6UoQ",
  "key17": "4tqXcsj82nQ9vKytYfHd2fk1GC9bgSjG9aVSy78gZ3bZip92XFnRA5dBJbf3EYvuoP7zucoeTrhJiGpmM1ZfT9FF",
  "key18": "3P1rS2N9cvsxEcUAWfwoezFBS1yVFZ6bvdCcVRBc4L2ShcUzyLTyxMmPJDEdRLKR93pnuQw8FS6fr49SmbFjA1Xd",
  "key19": "3fo7GXFBrMK7wLjC5wtQSirmVbJLzDQyjfiE3JXnP2D6Zqw3s4EofZ5aapfuGFaew3CML7bPhVc27SmFbKkKGsds",
  "key20": "3AeTZLp5yViCCQXMJNpjX2BUUaso3U7YUEd19z2KhEkmbGX37hRLNdLmVtR4Yg4NE8tkAufte1wMGKuWyeXagg3p",
  "key21": "5FGM29v22xtrX7EZuyo2faYY8yM1bHa4vcfNUJFCLGsSFUvwvi23ApRjDxxd5zuUyxRX8HCLth36CYnqiLzqEbpe",
  "key22": "2v9qUBTuUhsqxXkVhi6YEe46eppk1xBDhJYQHau5b3WnsbfcFZzJdo5qfbQU47Bu7F2rRT4DX2MWoqu8gHXCaEZA",
  "key23": "24vfbKi9Wz4j3fGXeBV5qf4akGaqbnypTZTFeLdPgNzUkd3s1HMC2rJ9kaG5UR9fieJ5h2gtrVrQKdcSfHh5UQ6A",
  "key24": "onwVsKFr2pFhrDKMcWF4VhtfWKTPJQaxDqPAjHfYymuCjs9GV7JiAMPtgsg8ZyUUJZYjvm4s2A7FRV5Hd8EcFLt",
  "key25": "42r888vK25WwUarv8Kry8QEkiKjmehqNeXvKqbfrMtxvzLTkLkedKEytAwiooHRGz5vyfDB6oyctxE7QkXhUPAhn",
  "key26": "2KDaszEpo3BkZTRg1LbTCCv8FJ5KvYqNNx1MjdbRSzcD47aGCQJiyFJMZVM2AMfHg1DC8FbstTDJtRKWFvxc1vkS",
  "key27": "5CUoXzABZx71MS5ABmbH36nZ3HTzqDPVjioMpGtqoArxBSF1MKEgfQXracvVJskYvuFMPv4gW6m53jAwEpr5yLKW",
  "key28": "2Ajpw1R82dBqCYPbev9WB5NqWvYySSXCsQnEa1KgQ8QAekfvEJN5uhPQdwykDYsp6331HEsXpZAcJUJMtVBj8HhY",
  "key29": "5eu6xkqZkGa87kBK8JRhzLh6ttG5LVVw2ppz6zYcG74DzbFrS3sH512n6D8Za35gfVfdidcMgnw9eCubV5kkYLBa",
  "key30": "577srDMAUptXiCtqMcXoEtpM2MFb2p9vBMM7ZStgmVSfs2tpeL2wbAuuapZupNvoNDXY4inmugp2PaP7mtdZ5nLa",
  "key31": "CXw6Ryyh1VrCMCr5A3DzCc4g4KepC8TMRJ2N3FYcCuAH1hUe8k1eZjUuhEaASf1tvPYmjQ497MVqWntf3Hrwu58",
  "key32": "27D1D4QjD3tpaKhmG9LgDtiPZXoHEHG7hEFwvJzm296ktTtVpyxkj7nuGviyBNrzqGhMZDznipkfUoJK25F5FrWs",
  "key33": "5Gj32pSeFoEfyRTK4VGs8wEwV3XAMf77gd4NJnrTnJYiAk4s9X5N7N7RwEJ7FbhZ4rD9TLdcg2HxTaMh9UyjtG2C",
  "key34": "4ntwEfXF9hQ9aku86eA4u5rysRqqMGZEBCvMvU2ryom2xHFc3HTZXRXpuHewofDhTbMMLsXpqLSY4vRau23JgP4D",
  "key35": "3v9j8Vx775M8DeeNppYcHVyhoCPeXgnDM1hkjVVrf3z2pfN2eP595xyir24G4HvcwsbFDHh9brDeKHonPuvA7gGV",
  "key36": "uF7sAkLyhbM2nLWszSjEMKnmacsa7AJw4A4KdgkYNzbF7woyX3zknjrao5eHeUEKsJxz3fExjCV2URT7i3SyVEa"
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
