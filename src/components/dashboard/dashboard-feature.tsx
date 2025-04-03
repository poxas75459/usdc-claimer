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
    "zzDxL95qHo2DrU3YhuzQppjtdSRNw8AJKiEFer7FR2B8pszU9Q2yzpbLhJ5ivhFot2A3qbNMTE5LRCrqXcu9Csr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTm24Wwf4v8uCYb8FbWwaSnjm4YYAAS38uU8AALVHvoK8osR64cMiSUGhqzNg9XFN8NGXfhov158QzBm9jRy7BZ",
  "key1": "53wG9bt6am2cSoW9YsLjq7pgmdK6KiLBo3RQ6awFiKdszjZrL9uX3j62uJxtnFs7hccTf7necHLq4ER9wf6AZVXN",
  "key2": "31bv7XkYw2GK5Q8sELzekncmRY55ZKQxt2vYeNT74nGqb5uLiLKzUXfY6gA11opWmvC3btpwm5h84fdG1xgHthtd",
  "key3": "A8DYP3SfaR1AMhXs9mFEmAZPozCEkFRqjDEEiy2aHqVQhCxd3vpb2MkHQdptcJ2VmELoNPPojgtKF9SUG8gzwBm",
  "key4": "3q3F8UaJxVJhaxijw77C7AB84CkoJ3SHRg5VDjtgg1uyz3seLUbn3fNd3ZumnxUjWYYMuBPuKaRUGqTnXzdaV7rY",
  "key5": "jwAe6HjP8QLzmdBkTct1z2jW1TuXiifN5DBDJDFfjGQZ41cv5f3a7DmJmsuWVNbFCCozeKA88BvpBReTpNWzT87",
  "key6": "4jo9nfeUa3v9b8Q6HJihRTN4eXHZz6LdDJUeN9wEFnnvJeZHuYUmPHxVWCF4CK32886TrWnZSp3k8APkchyrWkiR",
  "key7": "21cxo2Sj9EiMTDxhDKNwCCqNvgFgWVN251MzGHxjNcVADJBQtotzjjJxLfdXTjZUnyr9FhHP4uedJPg8h12u9xJ8",
  "key8": "4rNRwd7tU5PivbxDUxbxZTGLDtPFVN2MEbiyHBHH6CADGtAJveKq4YpbBan8uL5x4CAGhv5KXPxotivtFYdJWxXm",
  "key9": "3hPCczLCR9TaDmqpGoNxkgSjvKByxSVwFqrhv8GQfvpfE9M8fm4nTTZU4ddLBqD6zwF4R5VtVdxxDXs1sEzn1sD5",
  "key10": "Y81KLevgq7Q7acQxzbM8Pd6Xy9MkgikVzSqeEqSEabyh9aqGjtAkEU1JPU6futQPyFznzTVJXhXpgeLDQJY6XiZ",
  "key11": "KNyxTbwbPNHtieeC1Ukmef5SUJ7B6o1ASqYa35P2KJ2iBdsVyyJiSmsiHQhSyApnaAjHEQjrGa4DtXoXAcFpjdD",
  "key12": "4Hvfy3htD17iYAFjgAhdwYAmGZLs2W2u8zQStCNWpJdint76NXH8L9gj64botmuLrZjHdUejwacqDxQGWA75AXrY",
  "key13": "5vfVSgQRmjSChLYJ5qKYo184saWBReMy7qvU2uMKXcgMXaj9bEKfx2i3ASoctduDPMYN8xBoRVhahFompaoN8a53",
  "key14": "2FEboQAj9ciKmbGY8Jvp7zvTiaUtAQV3DynVcDjjin618ywkdSXFzATC2oBYvUZ8jMhxVPBqypPsL9YUFDfqQkoM",
  "key15": "uRVThAW61e1qFHDqNmKocvM6QKLmvncb7EGuTQDn3PHp1MXTxTiPxa73EheNf3Dud6i5HYhr3MTsDZw4GRt9sBu",
  "key16": "5V5832orhFECgUCoVEJi4FmQejCLSNPcJFcaM5nH7oYN6iA2yrRNb3CDeqTkmf56ev1bFCAxYdxynTJh9SnD6uMj",
  "key17": "595iGCeHH77UU6F8r1zE585T8GS3ZovuKwxNRA5sRWNnzvNbFdXdwJgmNi6TFeRbfg5jkrYrcLCL5xHXuJVU1wkh",
  "key18": "5M9WQ9wEd7tsBJVnGP1qMjmnJ623FNSwfGX1NmCHsPFaew8zYdvtnTviVgMscFDYAbELYKZzWCBkgHS2DWFfGoXF",
  "key19": "2fzLgyTGitLVr7YGSc4bEUXZ9MLzwVD4ST4iQnJr61zyx7ZXhnhKPCXGbLRKcmASxVEY4qqGEZXediwVaZriLvTV",
  "key20": "5vxTBYCLHNTxFAHgzFoR3NrM6mkM3bJnRvcFzfcN4mYFn3nNZRUyk4s1nmkWojiGtZjjDmj6AJ7W26yuyWarkJCk",
  "key21": "4FKrszdwza6WYzSexvZvuEoFV8QFWv5JjAYsBSDxjvcCLvKcsiDREvvcsXciWfFM7AbmrGhZ256i4vDqXp3xHp1R",
  "key22": "5Q5hwj6h9rKLNBzdJn6PcNFgMExRFgeWhVQgGj5mRAVWYP9EvSqmbTRe3sRBQdYb6DDgjvdy1fpstwnycS63uJuM",
  "key23": "wLTMjbHMRGZ3f4ki1qJJnZacvgYPknpPcvKDXNpvfnQVZ6G4kQrF7t1BjqroWdH2v6rvhcA4WFj4gJrsNJEe3rx",
  "key24": "4VeFmY44wBcaETDw7JcYsqdDXWs3wEc9gstqAoYuPJEuNrA9WkRhLF4Adj93U94ZoEUY47BasBoxZBDbLcLxRebc",
  "key25": "tzrRtbKKbppa8MRCp8E9XpToc5ddFXgJHq9PLPeoH87zbvP4MJkJJ18qCAVLt4gW81xTuXiTBM7WNtH5CyLnshn",
  "key26": "MJ2UNSnw2LpY49FfBenhThBCQVnmLdW1XA17Y415QvWFnEkaReWWEn8Eb8gqFe97D2hftHnDNFcSEFLtxzEvGUw",
  "key27": "663FHmQfm8CLrWVg87tLNZj5fg88ewxK2sSbDN4eFbfdkTUkFS98Ss5ubP5wSCDx61SBPjcQUaw1ZdJWSoTYL64d",
  "key28": "5ZLuVmgPySEufhJbP6Czs56VreTMrKUpcEvmF3Zzb3ptufCrYTGfuHHjkZJyB8Zf5fsdnP45HsDVeCKue8s1MAsA",
  "key29": "2HQgHabKkSJRQmNcim1qtYryFwjHgDV6oijaNtwvyNMqkLtx9rPp3H8MXoQiCbrnVP6fJvzhDPeTq3eCUqCCAfaB",
  "key30": "4MWUd4R5mzshLR3PJkoBLsvNgUkd7z1ZC8pWcSiyNasT7GNqUXGaP1WoV9N79CyToW6LbJJkwS6qA6WGmsTrdkgY",
  "key31": "2apnZADM2rM2i4tSV44QcdBJjRy2Fhk4UmDL1XDc8LS4bL74BfosGGw1kHp3FzfmsCaeQ27qNgUciqUm2wtii9Q9",
  "key32": "5guZghGJyoG1WQYoZmfKeEvajRKcQwX49eo5Xmbh4DkgTwqxwp5Edyw6gE4DoLuCgimZD9Y7qEy4zE2sprRBGUxs",
  "key33": "5KK68PaGA43gHnaDA2qNHuyRAm6i22qfdXcdR3bXRf68bCj8k1yJmga8y3BD2XkjVnjNHqGzVAP63m51FdjUhsPA",
  "key34": "5CjyHY7KU3uUVqfVnTXLqZuwkQDupu1mV5UZ3LkJA8FvXWTBxYqSC2scjYBifiLZZWTBiYBWKCTPo1bh8Bwu9Qd6",
  "key35": "23Bb6SBzeM3WoWPTR4xMJ8xEyg74nPCtnvQkNsSYh2XSRmyDraCT4tUQjcmkpVLk12KzvgtPe2RHMuJ88QcAViCN",
  "key36": "3EP7PXkfdMUCr7ztHM3bx7gQnQE2sKDUQtWDUPchsiYRLMxeMM7ULRwQfzjdai8CX4cdaaazpWdZJm2VHqHd58VV",
  "key37": "5H1aG1gXsCkTW7uD3u2h76G9h8EqyfaT4BqHKYtbQTeQ6p2MzpaCbLvUhtrFUmRMf8LV21geUEhwCZghbx6aFrZr",
  "key38": "3nyVnYMZArr9FLoPp6A3Zzwxbk4mohjif4wzdAgyBJEBufm9rwEfWAttS6yALgvUoRvUQfoGiZzB4cVw2qxcYwB3",
  "key39": "2QxgkWsECn3PcS7eHJACy9r1qy88KTDLo7gXnJCNMx4JkN6x5AWivxG38QB9GLUcjWbfD5bEKPtQVzjJPXHBpdTx",
  "key40": "3evxXKZhW1pVEfMAQC5bdVNUyAc4Qor63Sc46xNamEEVibB8DYHTZbzWeE3bb6ALQSTr9UTr3qACdioh7jH6qEGR"
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
