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
    "2Umdqh61X9F1Nntji2XsTKUYsjD2FtW7RA3nbG5rNttpr4sHgaHEs9DC6TQzXVjQNaV1yRx1YcGJGf8JQrXEojx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hM7j8VoUSvrMrY1mNYCSrbqUZhVFiuX6x8zwSMq53n5GUrrb1zNvLiKHdTwxm6N2RZmqeNDVvDUynrQDtqHSQtr",
  "key1": "3D1jw7cchN3qub7HXbs4aGXUWFpu8dsZfnEXRn2r68JEj77bVtt8XyR4rgEAC31q1yBrzDYCnpkst5ruUfg44hYE",
  "key2": "4xdP2zvWcXabAcVBETDKgm7eZfsRjzdhbUcpv2YXyeTvAPpq22UrobFWGu28wfHbaFYkC1pfZzdT9KR4wohwPiVc",
  "key3": "4NCEP3o6YmtU88w7sBBNuQmVzmm6xPGduzU874MW2DaoWjfEw3zDi9xZf25YZou43vCRuVAfaU3AqrvKMa9SsyjD",
  "key4": "5Cghmk4Scb3NNxHxmWqPWf8Rkpv8J1f8DhVeRPiVveBVV8MVT6Xx7MG9H6uCjVtHfrKsEpkN5PnvLxuiPomfiQH9",
  "key5": "Mq7b9JwxDnLd63LG8RjQLJfgpghxWemsbA6vahqkg7v86qJBKgBhcU3nQbh7niVEJTXwzz1RqrYv42AK9wec2Nk",
  "key6": "3xVjbo2cQ6E48h75mSSy1ZZassYY8J7bTBEtWUYp1XGbN8nbrvRV5y7c7K8wi16XvT7BEeMJyM7xzeVRJnTAtQru",
  "key7": "64Hx5VTzcZqLc9Z4Tsw2F6krt29wSnbXgzj1vGvsosSYJ3jXbQsHhKBKiEshddvjKj778vy6TGNw15Vjr37qk1f4",
  "key8": "3mwZAbvboZKtBW9vJYUBy1LwwxX6G4U7QschkW2JeykU3oL9AiEWuTgwPSZQqUPJMYrastgYNkHcA1KTmJNgzNYr",
  "key9": "4EGNyyrBEm78ehJvV6FvaR9833PrgykqZHyti41YLKV35feDk2QgXvr4d26MA2dGAsDfaxTyyEhomgVSp4jcHrWt",
  "key10": "3XhPHL67eoP5EX8LFQnQKs3gc1v7YgTBzwUuabV7qBoFQAvVpGouhwrVR9mgVaNzQ2bnPSCqg8y9qJfu44TepCsi",
  "key11": "5REKxhjsNDgqBY6tkk2enNjMDjWojPiHujW7yquRzhxgGPM8HwCkcK9dkCNKqc2x8hLhZjYoHqEdsQwm7VzfmBzK",
  "key12": "4CBoJ4SALG7yyYAb7y5uW58BjMTVvtzbedqfq7NKnvRYj415icvs7p2BegdqX82h4HdNgXi31VEKXsonbMY67X5A",
  "key13": "4oqTwgTEHNwr5pTgqVcM1uU24YiNPeN5puaDCrXpezDBtUp8ghTmGf4Lm748p2xkVwrTasZfw8LFdVvkxrQBw43e",
  "key14": "3UDBWhiEJQj6gBuqFG3SPgyJM5kU6Nd1pNUj5Eg1mQedfjPRzHnoKG9Cgm2Rx65qLit1cVgWsi6EmDdr5LwdmakG",
  "key15": "8tWPVmZta368vVBeq4ZQPLNdbJyDYz1sDYUQtjdRrHz4PMzjaQZ6BHPXaEB3wWNt6nSP3Uonc4HbZfqhCyW9bmY",
  "key16": "5ufDztDbPeByPQjYgvpiLKtqvgvWV7pMsMx9frNKnQQDnwFQT67dv7TXUQKKnujxmnE6djcpfETVZdTDuYtT7VHM",
  "key17": "2wujpZ2h1sjjM8Jsr6KyAaeTewrfAXDKfux8jWwYtAnBpKsPRkxtd4Fd41MQgDYG1yY5Znt7rzZAqhPAdaLGkoyF",
  "key18": "3LiM8zfgQ5Hu4FxnFKYX49rE1U1WXBt41HXZQ5wUbbSRT4b4Squ2rSCz3C7ewqd24NbdKMDvpwKEzvZVANgqm2j9",
  "key19": "3qFvxy29pVAEdKhugV6wxFRri1fDqMRkaoAdntxTRDWMJnSKUYGQ2qZgX68ckGFtjfUh4XsTTb2gZn5AiXfnJ394",
  "key20": "4FByRKeWC15QMyYE2baUR8tLZ8Ji3nQUo1Jv8i2w7r1QzdweaMC5SqXSE6K62DujNEf8eULcStdP5xHkoNpTx5uT",
  "key21": "61EyUzJEUz6WyqdS2jsdUvzo4NNif9heb3nZkCTDg4ST4XEvsmvWq2bKupFnyU98tQ8KoRCr7WmLYE8R7BeJgGFR",
  "key22": "5RNwXwDfQT4xB4mZM6D9GCDtimgz5szhEcPP6xctsNZ1joiqcvffry28sfjKwBu8mvrCDrKpYrVEdTpGBPA66qTb",
  "key23": "2wsbpdUu98yJoSKi6g1TuRWHeqY9z46MECnPcHn1XJrv3x64HHBA5XtiCvNxZu7GKJJxxXJWHEMb5nd2mnvxcm3H",
  "key24": "2kdaXvvBDshqjrTNVXxEzBQ4GjNNJN3WjBgFPVpRWfhuFpM2wf1eH8kxiMBqxWiXMh9jts722YYWT23hiptaji3i",
  "key25": "4fYAbjQC59x53DAW19PjdNAm7DEKrmcU48ygPkpxsxEgVzfyZ1KmwH5epbrosmRqkZU7LHSG6oRxa5pMwh3fJhwm",
  "key26": "2p4BEiWKq15UVpKBajp6QUwfNTL7viHv7naHUPbM1isyoHi4Wpx9PfFPQ8JcMuiRCQGWxnEJdeYLxU8wvJMrpjtt",
  "key27": "3myKkCvvgHgkLvpFXUr1pfKoNxKzGpKbt9WhiZxojs1iQoqe2UABtcMRCZPaixhuLP2hLycX78ZSznP9Jnf29SAW",
  "key28": "K6rr7vgYwoPXM1RZ8nDdk8dTZJbvtyTJHEzjuBS7xivgj8c8kKfhGRNunVaU5PqVypbL9aXHDZiZjf3uxRSVEsK"
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
