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
    "3xpW5WqkyJSHU2hdDndpRXr1zVv7DpHUko1nK1qiPyBjVvNhvFxPbi6q51Vo7LDYNXzQi8qiZZmHVWb3i3jDay2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39t5DF2ZQzbPgiAtiF26G2WcvjS3cPMGpieCvxit682D6vhChiCkEcjLwaXZ8qqDPy2VBg3mfqcc5Bh9T9Pv3bzc",
  "key1": "5vvw6VbTXPoXU5XDLYQwxdvDty4UDruBfK2RKWpf9robFqpuqw1twFgGsavBPwrQGs6Yh3Jjc4rfQCoHPSX9HADa",
  "key2": "4c7XanXwXU8SNpoQ98xQQJmGs2RjSBpWyWuzEZExTSLvfb7aMDiSXfUQn3wNsvejRGbzdkbrw6N5eh6sn5x4azG",
  "key3": "43QYdnJkKW2ho7jVjct7YS3hphBcVA8uxYE6ZFG7EqEfKJ9u69Pwc6SSHgcF8uXqQ3AcfedA9gs2UNFGChZbNFkP",
  "key4": "578my3wUt4z6AYzLSU8JFFBFoN1wBr9heDXC5WZjocnVzLhEH8zyDsY9T2R67tTxsaBsTLv4sR7qVdXVK8LD22Rt",
  "key5": "46VBo18Z3aNY3WYTV4a7yLRxiTaZjDJVSjbMfen3qgamEDq6o2JWn6wHZ8ucxBSB4B7GcpWzxDRMNjpBbaP3byKE",
  "key6": "2eaTV2QXKiKFxULpHZy2vPnqhc1GNaAjFyUaUUCEuae9hqJJrnhHDmQ8vZRewhvbKthQWf34Vo2QYTM5Tws2jeNf",
  "key7": "roYZxAWoGd2CzqzmHAYt84zNBAnhsR5VSnXea7xRHZT8ocj4eU7FiByvi6Xb7WnBf9BdFMGMA3Ycs1vnjzuy6TY",
  "key8": "4HWzvM9DFz3XayWGnghvyrroXthKJ46veXTk6wigofCNYm6tPQKXLVCeGKwYwAw9DhF92WcTVrVrVdyd8LyCwWbP",
  "key9": "RbyuLKVBdizGov1RFveG1sMZ7y1GB1AhogvBR2R2aeB92ANDbYCmVeXM4AD7BJTvgTKh2YWZ8A2E8J7T3gRBfEY",
  "key10": "HRHm1VDFmjFZPwGNvQY93eeCLUSN8D39RibUSwFDX5bRdU28WrtVmGrvWzk1ZiJpYwgV1iTG5K3efd5Z1fgYot2",
  "key11": "2BCPoP314m9AcC1NrsWcP9P3onBWCV78vboNdy77XEZRs3eUaEKyXoQUyyujbC7CdKoCeaeEaeHcsLtbgLepU5NJ",
  "key12": "516ZJiXcWfqbaJS14TDTpzSTZRvG2DdhTmfgikvqhA4ZpWR99qiEMe7CCB6jgoa3Fr8tiaQgYj7qBdnrvu1TMVfw",
  "key13": "5DAJSAuprb79JvYeTEhkcuCHkpoGAKURHvcBiXck8f1efqpadAYzg2zx5Ss8nGCaCTqohgspXNBLy3mLSEAXWkvn",
  "key14": "5WByo6NeFVjwG3HGxd4FFsQ5QC56Q2G9bXx8DENyCcvmfzrqqvqYzGshfPk2NT6YCFfGLZv9L1cTnTzD7h8VGnuJ",
  "key15": "4fRAXSjS1ffpsS5Js2U6tEW5wtUGAC2Jc9F35RAZL6uqHb7euQH4UgbVnMLhJqoUJtuJJcPTMHFoec6MEuJ5ikaS",
  "key16": "3VDSKhzcyG1kRQQufHnu7G5EtPKXymmjqmiE2NveSJiJtTKXkTeLdT4PsAhEQx1NeYGtWQkzKe3r3RzXsE3cCGfX",
  "key17": "WRtGYdcWMG1Vv9ReqbU3gABVx8Rg8VgJJEZqwKhhop3nM5miac4h8emADeZBG7JYbWr51a9vd4yr84rZz6Ne4BV",
  "key18": "3hjisd315xXCKaEwwdzgBefppKXD7FtjoTgvHfFtm1iQvbnWeSB57TLofoWzSTogUJ4eZUrxTUXiYZpQcAEzS47P",
  "key19": "MNKbnP78TwL5HzGDT8LsmQKyt542m5W1d8oxKwPFJ633ixbjwgtRxP78323kCv6cyCjxKdXVnR1Y5uMNY3axC6J",
  "key20": "5dCe7qzgkkbsBVjQKmTXo6Gr357sJGHQk8bNLsftGZyJS8vFUrmDEKTLtHDbqUs1sEPMGrVJthL83n8f7zE41zPX",
  "key21": "4qZUkimNeurhCMnSwKf5L29p95rhtTCbpFtwzcTEXorVasqfVfZDD2GggbjNXGEDxVc6F5gf53Tgu4xd9v2wkWqE",
  "key22": "2AnTBeMtzChWG6rPsBumVkQA4iZmSw9vX4DouEYBWkvqjcwMgSsKJ9YdM6J5NNhxUM7KTmzcC8KPEFmR5rQTwygX",
  "key23": "22xAW22vn3afDgiGFRXJcNTH5GnHcJXVkaZDdJDVcjP4bVZsCPX1C34nvAWNbP1UXBrcV5A91rurysYKNYAMsnAu",
  "key24": "5uVC1umTFMRdvy3xQj1aUngQ3ZjCpMNiv4NirMYfaHDv8Sw7qRbH6638Rourdzq4xnq9MRb7UKWaTwRbAe4UmWB2",
  "key25": "5UsFgFMMAPy9rpVVoMsBi7FW1eLnFDUpfKGtBmywwLwwx7fGXm6DBMCCzbyZTmE6Ect7F15vrwxnz3NEQj64PTXB",
  "key26": "5jgYtP8LS71oDUEcKdaYbw4iMKe6k8Nw6WsMLPxAre3Tfp7f7T2MYAgpkQdwMA2JcR3SxYwgYG1dvWETKM1kU8AT",
  "key27": "48QjkyAtXULgRUEVsviPTSvjZQVaDRA29tuPmy78g94J5f22C2jis7qKhTrMbvp1ZpRmYD34d64XNxMocyGU2VnP",
  "key28": "64Vu4kvqSY8uKiNfgURRqeyubsepxdzWTrTea9T7TPedQW59wchB7MW4BC14WhFfAhiMeQp4mkCKjGVW6WSpgMm",
  "key29": "2YKpBBUvkMBET2fRubDtzFhJsfATRJ2zAWrfm9vkxxuhrup3fjyKX71CSzytk81zfTU8FpNeS5P4MoDyw5J5k58x",
  "key30": "2u4S1sj9KjmAk6axmsJFhogpAGVnyZNsteAEQzztQ9t5CDXH2kpJrZAbHBuj6YsUMYopupY2XrWfUL4ScTvJUXsZ",
  "key31": "4BfXjwMTL7d1vLFD2YmRYSvkm86xENqEumSd85dnDMTfr9fhRcETSb4GrJhgRgcD3tKoFRXZ7K38iPZ5Q1ygJgiM",
  "key32": "3iRfxHA3MvrSGjExEorzhifJ3P1MtbwcmQW3hmHk3KJHGj1KwRofhDD1MZNiikzvwCziJtipWnpsVmKffAnoebqM",
  "key33": "4snrCZrMRTL1oTAhKjW7RnqBuDhxsfqab39K2XjuvkSnHys9LTAaLPChsrtX5uX6oFRY7yMMC4fgrBfCTctSDuYK",
  "key34": "2r9nJudd8e9iuvsTXoBzVYxujs55xxX3RFXmHrkkM9pVyohKnEkKfpjTNPSzoSuyKfYsN1Kg6X4rmmS7mbBn4PZt",
  "key35": "uXDWhNmund36VcP8G4vQERXv3YWdrYe6DFh3wbKUdkTh7odndpdxHLCYXqv8AnsdUfT5NbzGAcopQuXrVspJZpv",
  "key36": "2tUYRDAJeBrfvnaJX11XAFwozA4ZxQpKBU3AZHrM6KWKJzAnq7DjhuuXiVVva1TXEYXYGm5SxPaYfsqor4CsUkpn",
  "key37": "ij6dvwcNtbUcCeFZXkY9wMnpmXCfmeTpmGomBCr7mLiucbaDuwxBF9KSzojhXv3QRQiWq37PSjuYZsyujQahWGp"
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
