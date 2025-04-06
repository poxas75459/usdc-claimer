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
    "33R7Zm8pfWoZHN6C3TebejLskLSRcSenmWKMDPdY53iF7DyUdG7qAAgD3WRAAP2xcMKNQXRKXDcmU3isF8zn668a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vrLCyZjMJT4iS9d4UzD1wtyy9YVVCyan3d6Vm34DzwmbAW4dtjKPTXLuz1bESp1YDuH3DPK1gcdZjXLb2GVpZYf",
  "key1": "66kVgg3r3GtXfUEvQQxhHMo88DJ2oWddXw82RYoAvUFk51Mmb4kmuX3NJpshPJ4VR9xwmUEVXkh9aT4amhzpeM98",
  "key2": "2mZ2krC9G1acWWnmeGJZNxvha3qrQ5Y1zZDfC9AyVAyHXz14viGGWtQQ6dkfDFSuDJaiuCmKHJRh7VoivDY97TiB",
  "key3": "66sD2TpkC2gYK7feQhRJozTA6NTtJ7R8LauzsqejjuReBLdgbV5Us4M2vyzgbwgdDpV4EddWiv1LH2XpbeLAHYQm",
  "key4": "XL1EQ7KnrkqfYLBxGVKsd3HeNfZnv7oSV27BSqz7JCVtWkBm4RDWTE8HT2TTWJtC9Hfz8EydhwFLPfK2mxzKjAc",
  "key5": "5NrZZ3C42J1PfqUFzb74yQQuFY3fa6BT1tqz1Yp25smdFWkZTw4AghaZHmwDQqCCXgFkCnJPpEe67GZJ1ozPjKcH",
  "key6": "5XguPttwAhhkmhHKoJQYGzLb5EUEeCuek27b5yoE5HBss6dwQV7HLKwviHjy4ucZqHjzydjPFtVskpLxRiWuq3bv",
  "key7": "3YxEUoVaFArgEwNURjFwrkBQsCg5UN8bcUycDMiSWatN3864hGRv7UmpwtUb4hsZdpXtJ9THbj5LwbWVQz9gRjNj",
  "key8": "4HAXiP1qcjS6L6rs43qB8feiDmk2wTGk8FTFTxxhGUXfL94D4QE65mwo81hZ6YnNJ2HG4sk1g5oAjTZU2i2LhdbF",
  "key9": "4BnJeTBD259UZ1XsttYgtEPVBXzNX13xENcWq1x5MxfYBgwgFobimPhaaTiQRYPjtzXUiqjz7xLGXsr7LoxVNmjd",
  "key10": "tAKc6CjMv1WHPzef23zRc1F94FtZNUVVFZFfbtdah871LLTUeJAAjWifZAFkFfTqMr8PR5Qpir2EjXqAHi9wVmG",
  "key11": "2ScNpxCj4BSacchTWrrqDocAAa6eZx1FuxTieYTj9ibC1WMYqpmWNA6Ki93uhZo4kP6S3dUYoGhoipRiRAjzdcXU",
  "key12": "3kesM5g5Z6LE5kChyvwwP75w4rMu8oakTLmHcpnTtTc6BuRggq6998gCnVKnHRfUkxgEPy52UJGEnA8D3pne3AFY",
  "key13": "2NpohaMv19bCFt86YRGCshPMxKSESYMWQ4W6ERovhFAzbyos3ndJAnTbhqJzJdJXKkKzQ4L8i1ZcbTxkqbXwBKj8",
  "key14": "27KLKurpWG6F6cmYti4Pzh8wo6wCizHwAsH2dQfJRL6sgYewpNMbp3SWDTq47LUZuQ2qB8qCfVtzvyGyEH3BTx2Y",
  "key15": "2y2KRsnJwjpiAtsnVBaStcMKtf3p87DWhxLxrxh8SryDQEpMbFFwfD4SbqwdqjefbGEGL3ecQw5Fipp4RUUbHn3M",
  "key16": "4YqjQjgSz7a3tdR1L6v9e4dVA9QngHmAEsNDc17DWHanPo9GApe6B9ueXHGAenGzLtER6zs3ZXUJavEaFqUM2n6F",
  "key17": "gbWSpisra7DHw7G9jM61vWig76moVFhHTFEJgptBANR9P3vo8LCwtfKg4KoQHjb6JwrSNrGEoTVrZZkbMz63K6t",
  "key18": "4MV2L34PBvaeatoG6j8Rd1LbjAur6aHqabCNomREQCwrApGXz2DJAVPBSt47xHoMzAnfHCRUwATmoNJyf4NX4G73",
  "key19": "3m6G67zEdy36EFQSiisAnzHmySsrQ9Umq4jqBhkLZnnyz4SsvQkQRDuDi6LAB2BZ9LbcBRE6qQ2QbiL2cmXhkib5",
  "key20": "35SdYtSCvoCYtYPvLh8gCS5pYXUtT4iTPz8RzrrGEF9v4qRZsoogAn9UteLUPK1ZjzKfZXJdXQ33aSm5heBA167n",
  "key21": "5qeXf4hkAhMLTFxdWySD3RyPCed6begKDDHDkWEdWmWZQErXbbuwyspGF1u1AovxuAPxmQiqLts24qF5VqFUMJv1",
  "key22": "5eFtzScb6oxY48Rj5nKD5qQPKmQizbkbxqp2QdCcmdjFa4AYadWxjg49fF8oJ182uQeW3LLHDzKxZ6mNrxzDYCtg",
  "key23": "362Mp4Ed8WYzsoUcdX9wPyoA222gwHSMmUvKbyAcHDSsTXtMMQ7CHhVFybr7fwyfbc1d7vEavHv4TWsERwNHLYrm",
  "key24": "3d8LaCHWsgjAt6PguGXBs8o1NKLCkdyvZEb1iMdNGv8kC82TYhU4yGHMwQHMSvyfE1wexoYyHQsZ3jxAQXQvwyDG",
  "key25": "2T8JgzK4b3udAHEjMYqoeBKT3S4JUiJEmdAykAvnhmM99ZEoi6BRd3AbRNLJmWmAMeWBQSKz7tK5BAZ3Wzi5qNAd",
  "key26": "51KxhTmpzgERCgLtdFGocz8pGWRjBG78kwNT32pieSGmTHb76Ekuutz25cgDhXJvzL6gDdzjvchKkag3jEGzP1wt",
  "key27": "4xyXKkXsotMwUZjXYcTRDAUPsxJZq7x365CqYAxBYDz667Cshz8g2dEiFZCCP1cZDUuknpo4s1HjML5b2r6cLNkT",
  "key28": "2S3zxNPdR5oSaWXNnTu7auLmbRvXPekAKMHokU2G8Fa78PJgWS6d9Z1VeWrVXUMNWpeZ2ZyiqLn2TgovFRZNHi96",
  "key29": "3LPJ9GSiCqi3ksxXCvY5UnHJvuLnCsXzjB1evogBczYTxWHZ7NqgvZYBKc9bMc4orLz2Mhd2rxnQCBxojjSrB6sm"
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
