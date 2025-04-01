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
    "5TZyFojAmVMtKCMQRTy99NjBjWgk4kZo2dAsQwEfa4BbTVM5U1B8HeFRZVzndbvGqaauQBTLVAWapeDBxvzpWpFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oouXX5TCr9yPBhakjaq84wb4rFjsQRgm7pnPF2HRGGFxyYUW69PFw3kj1nWeHQZHS5tcpjCrZdj8FgW5FTMur8r",
  "key1": "5fkZgBaayBJjsqFMpSdYFuELyGSDgH2tZf21caHQg5GCAdX5diMvUjL5nmnN7KmTtc1t2RoWSRtANHGpTPFLrB1g",
  "key2": "3xpHnbU7hiTLqRhvfToVkzRct4A6omYxuXt1n4KzSHRT7xr9GTq5HjHYk5aYbWU4wx5ZjNkDjp4CH5KVUXkUxDL5",
  "key3": "kqJ6o1NsiPAF2daZL971DrqDt12nQmfoBZ6iMhR2MXjrtSKGtVNE5fQxFwh4WK6WRAga4ZeNomNP4D5Ra6hyN2f",
  "key4": "2NXXjLk7UcQSEMcj7JHjKXdXKtY7mz8ktFXFwYcA8pQCvyT5wXs6QmWiGRKtmp9qfRrrDmJ5wAZNK88YDE6pwHwp",
  "key5": "2VYEFchSY94Gykkf53jnrb8HA9uTYKC9jKaGQZmYSovCWgVEWBSzmnop12rsGkR4s8fyTgcDXRQd3wbgq9qrb54a",
  "key6": "NepnVMDE35vUU2q2Ba5oTk3tLff438qRZqZqGP58hJh9nJhz3JapnLL1VwwdCeDC9a96pdAZm5JtjPpUHasvJeB",
  "key7": "4LHFAxHoVRsue4EB6wYd2cz4acSJ51SgdMUXoRkXgiRAb4rMNLCkAq3WUQM7YaH69JGSeckrsYqjJe2aWEAr8r4P",
  "key8": "KB6WLxLkbMXJDEzgVMToViAd4VtHwvvqBMZ4jt5ccor6frS4MxdEidk4A9YUeDibBiUPw5bAVdccE3VmGYPrfhJ",
  "key9": "5nEFoSh4Yf7JnmeMg9mSfWgdf54vn5md75WWXYMKLsGGSnd8JTayctjWBtteDokmRfoiBWLFTH1t8H1Hk2MFCYv9",
  "key10": "4B6x9qQUt7mh73Z62k1Mu1U3VTiBMKmZjRsHNHWoYqsf8jUfo1vNpogvaacLAkqAH1LWFgU2QHNa9d7SHs2sW49g",
  "key11": "2VA991p3yRzUiwkjLnf3zTPxVtZHyjHoD2qcejgFBUtqgvQZFbfHHwZQB7hRLuQTNwuwYisZ7ZE39xS1M1nL51fa",
  "key12": "3yUX8WGRdAPwrhyDqDhKipb4aJrKz55GmdxkWDgniihdftx9DH6xQWWh3hYrDeZkTf8W7M3XL6sUzbEewfvuuwpg",
  "key13": "2BLTA7SDJq52e8sKz7uXZQF6uYDh99jF4Z2Hf3fHtSGFsVNzJa3D8dLkZkw6hkc9MPpCJhA3uVYVveVTnvaLxBVm",
  "key14": "4rVxW6DCVbqmgJ4vEuN4aJSLBF3VN39kZDZ6h1o4FiSfmoUnBcmsYaP7rVmNyxwjdCn7212qmLqjqL3Uvg2E1WTR",
  "key15": "3fSpisZhH5q6NDpJwL5QrXVTW8u7n1pPPnYDEAcnacNsBW693qgvGaawtmab8RMBY3DGNTobi4V7i8WUbV7bjJuT",
  "key16": "4iFYvbZnx4Bo2PLMHG62idkzLKAJAC9ftCbfkmzyu5wu98i9ruZxzDAU9ZhQptm6n2e2kxQAQKPjbLrWgwYbjGeC",
  "key17": "2bUuGgTY4vgrrBWr3HpspcL2odn3NxfuwJ5eQGMdDydZDpsqSTrs8xdPBjEKhdRhMAkskxAijuWVnowqs9LFNr8k",
  "key18": "5gexiyWvp1n9kygpfrJ2o2cTapPo8SEyFK8buRxeqXsLihMXixPv5HPpqoEZiLPxTmMqLNNiG3Xo28kqx2p8kykJ",
  "key19": "4KCicJnKszvB2te9ov8GPTuB4hnzF3K1XXoLLyqyLQcG9pMAYVkGcT5i2unqx7YiL8maVaoG1KayFVStYFcVRxpU",
  "key20": "DpN51gscYCun2mCWkgEZvUtuB6GqH2Be6q6opLKuKv31K3rM1wdpLzGy1v9kZXA9AX6KR7w3MfpKe4nErjMHB89",
  "key21": "dMME6XQnkBZgzBBwxhrBacNB6icTaQ9u3L4R5zCCFDGbtKqAvs54bBWbKBGAWpdRpaWQeSpb1wJ6cMyr535nnR6",
  "key22": "4TYNqsLBYrfne3K1d8nr81tVjNR93JqUtJhsoUefsf816StjgaGvkRsCeaLvPNVacwPLiNcXiZxJ7xmLn8C53Stx",
  "key23": "mfw9mnz1cStXjtyAcwBuHmwpx3CJV54jx1TL38VBC4kGufxZpFJUVHZ1yPmfGxQcZcDy76kKnnTZenPXUz5uU2r",
  "key24": "B1RzBQ2WBAdnUae6RTqZUQVJFkXq88VnsPfFc6x4xESiLGPtkgiAVTrAcbyAkxYtnRgwNGEdzVufoHixzatiQ3U",
  "key25": "48mu1YHET9wywS97Kc7Uy1pYHQkhhR2GXHWxzk49v7TDGJyJM77brv1NPW8wGxxHtRksUizj4QS58gmQAZGvAqcL",
  "key26": "4BZeKVVn93TUrVbFsUxVpeBVP4Gzo1cuDFd4to9gSuLXdxWie1aroijB4rG3hjgJM9rina1gSRmM2bVXhKnSxpB9",
  "key27": "4XWzRTyfxvopHrnJBskrWcbQrZT6FHmpARFaNiGEM63QFced5mfywg7ecJBBThzwLJDGKUkTDDaPPqb1qgyJojpM",
  "key28": "4VN5sUHc4nM4GTvCMsjMkD18o1QDoPmuKAsZgY1wAVfKXZ45oqE9owym6kJAmhtZ6nkoxi8W5S4MVKucK3VrpmDv",
  "key29": "5ty2QL7A6MADREsqRdU9XNYTgQ6xMr4sWVDKMXcc8W6NzDLCsRbH9fMY7ZY72sfEs8knhAuS1MKSrjVkkVTTL1u8",
  "key30": "2z5bw6d7kKQvuJQVTMZPWLYomCBBYVo1rVHzP3DCdaPeMd7jsqg9vj52nLVLLs1RFtdyCJBzpQvjb8nDuauCL6HQ",
  "key31": "b8YXtcu7eo2bakaqSStMPL1mMmyVrk2v1N4hjeQEFeh5Vr5AWn5dPgSKmeeGHeRfRePLRjJpPnt5UpvpyJQenur",
  "key32": "4mfqQnZzgCtKhddHX1jMTZnh6aAZukcUojhXHiRRn2XCmUBrmHTTrTNKdvyNwxXJKnNBEVhJnsE6ejhzLx8z7XHJ",
  "key33": "tu6TGEGeNt8wYubV4rdK8nfuQKP7oU8KR65id4WqX2xgYEs5wqhrzgfUq76h6w8UwaZBKmxSJkf3nvypDF2h3W2",
  "key34": "3WTpsJGzpd3p2EA2P8rT25qTjn1GpnDSjq7mGUYbPU9M72untEuYJU7vcwFLnr6u5DHcbGNc7rS21XzWe3UmanMo",
  "key35": "4RpppWZubYSzzitz8tmGD5MAJevqiaV1NMeVCAsG3wCHtg7acbmtzDn9p9PANuV2pUmLDJLUFsgCb1r3uLP4Th4H",
  "key36": "3L5aMTvmQ3VjTAC8neov2xaeb5xLjav7sRK3UT6kdvwXZc9ReqqNytbyZfkoWMmoyzHWbKZzC4sEQWDKVhX3wEFZ"
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
