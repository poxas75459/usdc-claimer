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
    "mRhKzpFhodTUPQwLLUcXMRn6dTSSRBcnu3qhJSu2sFWGXxaLdj5YkrAogdbqiPShaTTB5TE7BiCbYnEGTxfPYta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ijcYrag9adruMtd6fKvTxkVKbPyg5RMsyhYhdekPFy97Gw6uqFxmLt3yVeJkiWUjY3WzBNPAqFm7B1PKgQAcV1p",
  "key1": "2cYSwxqSN9MXr2TYubtVt38izEZTaou9hXxXn1QHP2fR7TgLGU4APHcHpYKW3didztM2xUnEvdFZKPwCoGS9FTGM",
  "key2": "5PZqsxyttgQk6Skkscnx7XkNdbVdF9FXbDRg2C1taSgszXFUycZsJLmpXbpA9kXST97otA27ZFqqAtPJRjuU9Tor",
  "key3": "4TAFDXygLvH9PTompQ8xwM9rRRPy88UQwmhHpto4Q2dou98db292HcNkC9SMpaWCvYDVhVroZ8A4iHW9DqmocMDM",
  "key4": "3bwbGNg9H6TmEmVEfXA5Y81dCCgZG81k5zochYdQzhSGQwWxWuDothomA8bLf3Pusdqed7WdQK5zX2qpaZaqHJN2",
  "key5": "668JAkPoToBXVqEg3D4DRF8HiZfj6MMTd3SK1o4fPj7ikYkZfZcYCWDprDZ2EnvePpqNwdTrfyxsLXG9hW1swEis",
  "key6": "44HQqor3FWL1k7BHDqwn7z7wQthfhbQ575sPRkEJ6r1BHmHv8aMMP34WH8hLfdeFSHVQ7AE5qoqd313tDzFMfhZF",
  "key7": "63BpZu2BbXAn9kePvtqns5xQK9htvCcYJzXKRJ6EVZfgic1dMzgtyU49m85Gumf1cLNwYpT9fDZTR9ZE4z5uvsFd",
  "key8": "4HkQqijakTFvMFKsgkQR3DPjaxB4rWFZ61KTbucbmayKTLYg4gfjSpZh7w2SXysZcwKeWptZ2ra9k3oWeRBRaRca",
  "key9": "ALN5uo1JjTqhnkMQA5ZjZN4ES9ZcZ4hvDSVVXf4dwvWQe3CFrehKGisE84xuiSMqYf14FmvpJu3fGdQfmABEZ2V",
  "key10": "4js4zmd6CSGtRTJJuAWZYWEcHqsZcGV56q2xaZpy6zevQoPR8GkhS8m47NHSKFdKnHkhEEzTBV92zb5GoGWzRgAP",
  "key11": "3LvWWS4BinB1PoDiEeSq1vg9UmdqzwriUxUQBbsXEjYbfdX8BG2i7KM25sHrm3miVPY2YtAqsb6apJLWPHaHdgcN",
  "key12": "3RoMtVgbZuYMdwamnoimRJXyTg4xPGUwjdiJBvZNUsAu385CrwFU5PzH4HtgPn3Zt7ficZAW8GDEhwUxJdkJA1Av",
  "key13": "4HKT67QWVkAtAAJpsrWfxa8cirWeCDsrAzW4oX42Leyge3wEArCRgL9UrTJRY5UDK8kw2AWjABzZ81Fu4zPuxWEb",
  "key14": "3zxfyfGk2TGds9EmQ2koKd2j4n96qMY3N9bZyQst8hJxpnP4QB5GFNxmNqAJMu8Wsj2yM8tPAPGxmpVLwUMUgnaJ",
  "key15": "2vmyf6xKiyS1Ro1s8i2jnKdKrDfKBLJfcsiZjtnnKCFGE95Pmh3DkHzD95412mQuNL2BW15bQUiDZekZ1iVqmnz3",
  "key16": "3WZMNGhw4923Pehu8wsMZgbFxHiK2r3ueJbSeDLgeDpj6erXn87qCKZ265VhUyaM4kRUj7iFtVKWbGSY339DN3gY",
  "key17": "3HLVi5MkfZfYtZQHvuwaEzFLsMcoZANuUWsWqNC5zYXpwDBLZhSFW2fS1JV1LJNFUtHkypgoeFfjyn8geKPSs8Ej",
  "key18": "5APJxvV6bRdE1eVuNsYi7q1PrkXYPgmMzgg4dRY9eQRkkySKG2BhfRqNXUFKfuL8wJSx1uo2XtFfkwaeYvE8jbW1",
  "key19": "pxP2FAQuGYbTrsFyrzaJxaUUnDDrsF3axuZWp4MrTutKYjVUaHEEHaYCk3cqacB7TqRjdLYaRXRtYb1Kf98iPrk",
  "key20": "4eZHuKcWX99ZTy14r8SCNiat8T8WsRdMoYPsEtfmB66dVXFssdtrZxj1SqZKdvYrkLhUpAdCtdCJjyMWarMHRFZx",
  "key21": "3dvwvT5fLFeH3DdS7agVfU5CkTMqttkgDKmhWZb9HhRde4j177vfb611jwH7GUpuXuue9agvS1q96kP2vFVw1qCn",
  "key22": "acfYRDdiRTBwNXfj4RArayVEsRgGtyazNoedLnbPbhQ6uyDMNUP82ST9HH4dibRBYPomTeptVHpGEz61dpTRKdV",
  "key23": "21dhDXjvxfQpqPy62X3gRQixx9Ybjne3sdgXQvWcv5EN9KNfgTZwrHnFqD3FLPFyxP7yhdwWbxmmR11f8ySLvqQQ",
  "key24": "Wb7LzBhMGrfiDor7twqr8tnDWQYJTqqPVj2ALpw495jSUwZk31FGVQsd76jCtSJhVw2BFvG8i6MS8TXycNUZMFb",
  "key25": "UswKeHWxNk38me6r8QdJDmERjCN2Shwgf4p9jvke75qdVoo3hKjebsYGqQ1tgJPpU6Fet751b1FEnWn4mCx24if"
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
