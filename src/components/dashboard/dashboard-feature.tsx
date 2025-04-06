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
    "328aMmK7T41bAbZLGQECyyaaCcNmMymcPhpicqjmnBsosRnAU47tGKXjUpx9GuhdoUw7XVBN1LcXC8f72UrYhsN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54KX2uyZgfvvE4x8HyLPJFgdX2Z3c4ZtZTqKkdf518XHn2peskhsQtds2hjrpg43E9TiAP56u1PziPkDyagdvA7A",
  "key1": "4w7NjiuqKUPu98U3SmvRXPmDtJwyTvkP4q38XkeBufHqNQNvWovhMKZuKXeqpEfVbFSaDSyehs4CM8owRdZYmiJD",
  "key2": "678u8ZfwnxS9kTf79Giwms4Y8NkKwd7CT4hZUdNvcMNeFixkVzXt7w1HYnJBqGYz9g61LKX1kxbNUb8wU3tkC6oV",
  "key3": "2VEQDx5WMfYYhgzyyUY47Le4jQEFJ3tX5WxH5WAfwuURsN28yCg6SkLnFAfiZz3GswJjKovDy3mDn7gtDm79EZXA",
  "key4": "Zbc9vvGPV4tKFiMyWnwPhFuR9wzW1PPGmPrjkxdiCnmK1LwNT4uABEF36nYs6gQdUpRD2SHWLeDGQZraLgcaPby",
  "key5": "4TTrBENwEF1Y4jy7LAzzgMU2ZkpYHXtoRheBMgWZq78h83U5V7Nequg3LTYSugW5LGNnNycKRvT591ZQQKwGU14t",
  "key6": "4DBADTz2YceN5QepZqNwpL9SCz1k9qmtSVe61i4E74LMkHod7tksFEXshdYfiLtkzd3GZqwSSTtj5NKXaErQwX4c",
  "key7": "2rn3wuQ54dEtbjyjTQqZcagSdpgveMaGpjJMoG2hwee2WEkNdB3aWttizh1sY1KQoCXDeS3RGrAB8rZDn6KNqRbs",
  "key8": "jP4LiKUizBSiv9rm9zHJQ7vQE2TVSHCSXmLFZHNRGXRGRguep4bLveqWudYr7mkBm2t5ywvY5Kc9a1xJeWFGdER",
  "key9": "4PSaAGfpqcXShpMngsVEtx8sjkDg5dursRaN6Y1K6daPgB6UGPqh7JSRtgjxitfFkXS2xGATcz6yDcsYZXPdtPmr",
  "key10": "25GFgbajEEakvDafgBbv9m518USBLb3E2gVSva5X1h7jYKZiWQ23JZrjzvSx9yL6CexF29TMQgZUsy5wktAUwo78",
  "key11": "44365s5EsuKdtdDuHAjea2w9xZtTi8kqBV2vxBGAY2Pv7fYAXyneZJXH36TGNXKzA71tEe8zpxNRdAtA5T1NZPtn",
  "key12": "4E5mYLZgGsL9ErEsV6rkm6SJCEF86Dc645vYHpeQPDCR9LvN8cEKeFhkBAF6uro818VubvSmfBqPrvka7kPVUrQU",
  "key13": "4rKhfefhUDC7YK1GDXxUmGeBbsfTRBtqy17eGyRzG1MmgSEYvT55pc6Z62PJpX8xsTBzR5B9pgxSS738Xv7woeKB",
  "key14": "2xAkDPrQHcjFs5eAGQvVHZDEBNDXosq2xKX2m9HdQxABXzJ52o69sJQuGDDUEtXzez7a1pxPpEUkjoLycMZpnWTc",
  "key15": "2pnZQJ4xEigQfG3N4C6uGA6fGQZXhR2Daoq9d43LDwHSVepUP4fbpVDqx2Luoi69V4N64aZia6H2ZcjHzFLCuB22",
  "key16": "4HJf6bVRf6BmGDP87efPuFFTyA46gjYT9Ji2iLXUBZsgnQzvW2mRFZivHknJBUjGUTVPbnUqzoR4uMdHh6UvKMDP",
  "key17": "4S32U6WnJyt7fmNsU6rjRWV5zyce6AFfcS2kNXXVZwu57r2YSAv3xogoAswH36k7ViHsxK1PkFsUAdqBFPdaJzgp",
  "key18": "qpF2dhAiPKdY7KNX7RLaKPbxbzNz46y3CMX4U6DEmBoU34uS77JTdCdYQ1tPjVU83HAnyQ7o1hCWwk2vgoSNFVr",
  "key19": "3JytNGB8Md6nS749wa6nrDLMEP4F2XETqSdC1nm5dVc1BZbD1D1Nv9cP5ThLL7ghreGRm1qcXZwRoRDkUjABA6zV",
  "key20": "H4cXEHsA3zs1nKQg4GYYRKqb4e1wfiwfRZk8bXy2RDjyA528wBu8oaf77QsXattUJ71YCBi7QsfirtTbqq7hHnC",
  "key21": "4Y7BbgfoEZRLPc63EQQEELRj5PH7SvXYPg6uxwx9YibNgWnC8MXtGveuP5c1JkxDLftSJwjeUJRr36eHGFfENYYE",
  "key22": "2C9YCosKLe3s4WwEVKdCCDXFzjvKXU88SHH84mcMkm6nWd42HpRQd23bg22MTcvc83QB3kasFduzKLHCDKxVpPYv",
  "key23": "5bGjQvRh5ujEiQF4DnjjJyLijdww8uwTE5DuAzkqoV2hRQkR9fWRwujcixNKrMeq9WgCVfeuDPnCX1rPdVPMZNMW",
  "key24": "rpLGjhQY1Cac1hdWCtKNjLrTDqnLuKj4Kg8nbwzGpZzJcEMMfRGK1YtcsFm9jZ7EYuht1Q3KCginPeSTpdPKAEt",
  "key25": "APLQ3u14drgz7YrYWmD6ZamfQH4QxGgFDRi1xe7ycxCx4zbNPn2zamHC8zZJdsg7CS2d55GaP4DY79nFC74jRPJ",
  "key26": "2CTwXdnTcnQ3z6Ldin2hCQHgEhd63zD9hHXdfBAWPPk3rffjmBqg2TvW1D725JVVuPkGiPCcUCeWQcezwrrw9kXn",
  "key27": "2v5XXEcyAAwKAoi5s28L4uhKnLTNR3XG2ze51FEV83vkDYPcnJXzQPah62WjhnAvMHJRUvA82sePEjtY6WUNd9W9"
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
