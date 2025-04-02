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
    "33osKrUEv3SgKR1enRosuvQzaKy3rUrKhv3Btojiu7GhLVNeSnGfZp25Pu4qVEx5CxDmce58Az7vej4Gq1WhBGmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uawcPvByZvHXdiFw4suDW9nvPCvWLQ9n7WcNVsd2HmLMmKQB7UfdpGRLtArDg2fywE41A67LWCrZ3i7xQEZkXSi",
  "key1": "3547ngxvJ2dHAGntsSd2UMKi96w5tj8aSLrQ52bMcrH39jUTpZvFm4YRiLWN7ZBMtwHUcRBc3jGc2NYTUqiTAga4",
  "key2": "4WEv7WLwxRV3YXiAHpmSeSj1nrT1Qo6hVRxA1aXbpZZKYehzKxeti6Ucob8CVmbqoStWVm2hFECkPJKrr8v5TWqz",
  "key3": "5CdGSaK3cLVJvBygppX3FggH7PHymarNZcewhaV79MVdgQYtKygywcLFg9kPbgnyUHtY9gBJw9UMz1DFZTk9Cz36",
  "key4": "2zndYr2s5D5GQxwuRLdQpApujX12WYQS7JKe6aTgvDMWCpT8zv1yL4gWPsCtaNSfJYH2iPYGBQjFJPaXM6fH4gpz",
  "key5": "4MC7tQDdYP8sYDsze1Tm1GXKbBvvCmTmjxsjEfBSwmYrMTSXguK7qhnXabbiGJQ3HJophTVF8dd5h7VMheLLThZh",
  "key6": "4bFetua8a5dn61D9itnHHptgHfhbNx2V7ByxKg4EWvW8PaHjgszL8MA2PAnrtK8VCpBPan6a1dqx7cQkaMXZ2aDR",
  "key7": "5KEFfBkYRcZRDyV4oJntt4pRGKRTAW82rh5DpL9stgu686YfXvzgaNZwdqSJXQbPZCUYiYijcJbaj6YRni7nnpB5",
  "key8": "QA3ZAvySVrfy5hWE8PFX9jV2jW7BkJwjY7cVvJiYauiizeWP3UzpSvQgxLktA18MA7RhmZ9LGjdvv6frYx3PmjM",
  "key9": "2SPVAF4Xq1Kr34ucy9ifLc6tk8wzYNgi1J8qka4fKQiEn1nP7jpMFzxMz6MYJtM35NEd8Q3kxErADz4qg47dhdWY",
  "key10": "4H5BTApmdMasUcjjNMtJEV21FoffoEq4trkwsaQ185jZ8z8coQaKagdQqi6QxBa67LBeTkK7eAfcsCUKFRwgrvJM",
  "key11": "2zv5BYHEkBME8Cyf8RjeGPDzq8SFBBVes3t9nsZQQxgydnJuYHrvojUmPvJ9ektKCmvv8sP5mCd39NzVC8BsyszE",
  "key12": "4D4qxWtfAZogSYco1vD6BV7wn9paeQ3tyaQeVqUyfeCnALDJivNzfKn6YQWFiSHiYzz2dcNGS63gWbwAuauj2qEZ",
  "key13": "4tGK3UBsdEoDRjvTAUBwQyCRjLTB8JCzj6dDpaRzmvn4evpZGGKv7mqpmqJ1XZEcHcvBbqiJExEsCR2mVcXNWHbc",
  "key14": "NY9sibfNKuQ5EQehZS2Ad6gxQwadPPHTHPCch7CaSC4s8k2T9ceduhJT5STNyDH8yxiRdtgtqZtiSRxA2r5cZ7T",
  "key15": "4NDhiHMUGMZvHm1mtWdzqwSQWoJe1aiTSHPuxdtsT2bnUL98SqQ2wVnayFy2e9xEryF2ZPj7PPR1QLmTg1QWpjjE",
  "key16": "fPprfb8DEzjcEGobghas4iGg4dgPjnui4TUoAcC2qt4yLZe9Ad7zsTF7mGD6zy7AazqhxtqnDuwMF9JYZg4u9DE",
  "key17": "2MHjntMGDWbU8nK4N4UQduEATJxNWdbbwkG2wAN1kVBXGYfhvy9PR3dW1GtFnJcnp2rxk8X3wQSvB7ksMCZhWDKw",
  "key18": "595xWK4bm8jGfNRjcyYCYwn8dgpjhPDjPLfTjxy1ZqBkZ9W1c8PCSm32HRu84VGbWC2b4yupaL12smHSbu5rh9K5",
  "key19": "4aARPbHXynFF52WXRGhun8CVJuPdmbBY5J96WCXDR6v5PwGuz81vwWdEi9MEMEurmsPycsZGoidmmsSeLGxHZdGZ",
  "key20": "NtGu4PzMrgBHB5AoCheuezY1toLzuHApiVSzZKzu3Dx7vrAfuYX9GyMcNitVUoboZsPu7UxxtSiMkA4jtx3vV63",
  "key21": "5u8dN1FtYgMWKeoXogmLJ1useKTkzYqWKiArEf6fZ5Hs1fxRNUGAZUF8KzVzDSKCJQXres2beDaRBfyCnQJymWRc",
  "key22": "UAhv6w4S3FJFPE3JPXH1tKoKfK1SJQfYyqburUTEvRRgCK1qTVbCr3tksTXDHLxYUhE8u8fPcUnMK11BrZRcawj",
  "key23": "5CseNtDgsXGYuqvVapKWNhZh8PAU7A98JZJCK127bhTjSqzNG8nwYu21nMZYgyGokUaPsTJF73KB1m6sHm44RKhp",
  "key24": "kC8J93QENLRbjVj8SQze7pz2s2mYbXPXdpDjpmXRjT4f94rf6LytDXR65Hs1NTBmdcges4NLVFCF9kZ2it2UDAD",
  "key25": "52HSkut3uBQJg9cgqPsgcnYgidhAhw1XH4WmP4ft1ArqPbFTPZXLXqFYikvHz1c51YLZtTW9qE2YgMrxTD6to7fH",
  "key26": "2sZrxh7kMU2jVH5rSQxvPJ4oCpufWtbzy1PTHiKC7oTnPqy763Nx5vrrdAaPT8oLgDdQctmGAaG8yjhHV1DmzWeE",
  "key27": "532QmJmxnC7rDS1k8pCZaf7j2savetb1xQwk7pUZZ7X9KDfWuWT2jo6myTNyBjZvP1RVbFuTDS1zWYgDyR72jTbS",
  "key28": "4Vq7THWehGHxqgRZtoLxomVmbwmUfaYwTh8BGKpQ7k7rGpibhgaavG7Wv8buCWucD9M668BELcHBwfjtndfZtAKi",
  "key29": "47TPqXBUfHpxkn1JWc7XJs2Av8zDwNoDfz7EMgFuYKazrjg8V9rP1RfwF5b2DX8ib1ytgZgp9CcG8V36ZqcfoDYD",
  "key30": "3GMW2dJTT4GKbRr7rSmnKG4KRy6A1s2QYDJ2mHoaPQ6N5tgjPLZZbYPZcZ98A4vc1UtzDJHYCfk3oEpRbJw4MkY7",
  "key31": "3avP93gfSKz8i9ZQCZp2MrXHLuAnu5yXyuCthC4j56ZpvMM7xx5wwV6WJ9V9Qxy5Jdy6FHbnCGUfS43gNgTPtabW",
  "key32": "2CRuN7YnJQ6K8bjMA7w5g373T53ZeB77d5LFfa5RaTCJNnEFUpsPZNBy9GC8LtqRpQA3LKdYXboPkHpHqYKkUcgh"
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
