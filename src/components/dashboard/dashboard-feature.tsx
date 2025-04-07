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
    "2LDC4kd2GeYvyCxSMvMXKUtLFW9j2vP7mZkcD6odyReoSMDiAJPB9daADmkcVm8qqL3iMd3wwe54U5s6YMqs1d9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qPHp7UNArkVoqYK5hEJpxEpojFcDdKievxqLX5weTdt7TG28hvFJa36KhWP8JNKT7yUX74rqmUs7jZMcaAtV2xe",
  "key1": "4uyEjZPW1PNGctCU4PME7Agzqyfj6tcvQH4n7E4sXLiJzvCFXKWGR7Kzd9cb4yXZsgB7oE6zCxKat1aR2w6eqhbK",
  "key2": "yWHXbqRiKgQnaC53Nb6xmZAp5TLJHQCfiAAEbLdtwAfCxHwqBJBh97V3o4N252XRnhRv3YbKpwXGbeLiAYzcipb",
  "key3": "5BWp1RrfcWTxSkA4wtRRA3LCpskBheDzeVJzxpswMw7PYhmZkstuPxpfLdZ5kS2f9Szof8aPBFYKjZjMfGuSRjxx",
  "key4": "tEY7a117aKKRaY54qvyyWcP8c5YgVqW219aZk7GSA7dEBWikmq3JBEVpAH5XJVECBjPsSKEZPcPPR1KTeWw92Mi",
  "key5": "4mKVKVL6n8UbeXxsZigMyTNJtnVKtp1b2EW6PwCjCcrY8DhWYK2MSCL4tgBh2bpcTG8LJwzAcvDxWKAnthm26BAp",
  "key6": "VbGfZT8MqU2CzoKh4UTUXah1uPRwzF8FChPxePxmqSfKe7LBb8YVDVC3wrcUZropU3qur6cVd8hkWkz5kH3ZJWN",
  "key7": "zPjokafmZKXBdhYv5j1ndGEb1dcU5iUhX56HjUychHNEQYe9xUefCWHAb9ywP4TqTZtmmDXRE6Si1ZsBuv4Gp68",
  "key8": "3zj5CX94EpqeA2a61jaQ3BPmChV8tfwN45APB9x1YMmyBXk9M9xNX4F5k6muS1fwi9TvRcESJXjqQgyWEKcomxA8",
  "key9": "ctdd2LzwxRA9rUgnuRNCaNdSDUK6CeRE1w7Q3MJSpvkGWibeJMXfAM8Ue8GJafae88iYGbn9g2gxW1W18PVa3so",
  "key10": "hu27QThDfhFTQ34L1cKoLjpVKUGwLCFkrCkx68ZotfFv2LDWroMqrr87EGGNpuKqvvnjcG5uLphxbrRDvHgVqwi",
  "key11": "YDDVwkHFZ5TsuoUmWhQ5sqdMuAYQvbG51CrY7XpduVQB6QBLeoTKKDSNsWJSyfRdbgRX2C6V2VoCG6PXhMNq7hw",
  "key12": "3cYFSUvMETagay7Bhs36MtQ7Dm5chkeQsqdV7zq37VUaoiho17DiRSoZNpfPorhHZ82DZoZ7s48JujHyprsoiHP3",
  "key13": "2SLXrFohJYjD8YZAfQXLxze27fGNjGgLLaUtZxzA8DkDCwseU6bfyjgazZ6K3byHBQYidauFJ9pBsRUVc698cgrw",
  "key14": "3P6VeNf8rHVtiLDRuBjYmZXt3cbAzahQoVKB3Sxou1zKNDTYizLECG4Kc3GXUbB2wTGhxoDRzGMJhdx1AbrWcfmF",
  "key15": "3Bec3AYpwXNDAM366rShUVCmsyGoTnXYS6XFkvcqdzFJjg9cGEbi2psWaDzGXQepN343AmGeBXrwzNbVgmPtwg2W",
  "key16": "431Tvry14kdE117TfoFdfTnVRyDLCyuGVhVGvo9wBFhVsP98kQzzgWgx75WcFZp2v1xs4pZX59exHEbDXNZriRaN",
  "key17": "3NA7RwvQiCtFzwzkfG8aJGGv6qEGENpfFs7SKfw8WvuAqYuzqcqfDTVtaw9hfomyb8SUmKWcXwd4vTC1PuXeLbBC",
  "key18": "5wJjELZVg92kSbxughX1XUWFmTHSx3Z3BWrCuahXv8cdFHUnzrPBUujZ2SfJaKTr6Pfz6PWBoMF9qToM4BahwPqE",
  "key19": "3LU4hr2JiqtihHCWzkNHK2j4rH6fj3VDvcx1rt8RLXV8c144UM8Zk8zEEmuLUc12ygge78vMSR9iZaDBpd1Pmi5c",
  "key20": "4X6wLzjHohS1k1o8fxZdNnGi49g6xXqPpgmQYcREjy3pUf9dqWzPNsFerLcHVzKHpKTJFjvzpBUymkwNhNGJsqAt",
  "key21": "2s5CpYZ6rSzxUxgTCaQKpYqp4vaqNN1kfAn4MXPa8UJHFBsxF4HCxN6a1ZGkKyDCq12wSZVbc321iCyR6tiPyQai",
  "key22": "37PPUNqcYnGMLKvFxbLXfcUt7sXCPZr1zTPeoBqKka4iGUup9FVYtCsp8qmTDwdmZ3E3PVqRwu2qpwKaLH84hUyi",
  "key23": "55FgMnKpPKkcUHvQPC9NDXRu9xLX8DcUZzaXFFBWiCnAukJxCtUL1QimarYj2fWL1W5a6TN7iqM8xPJpFm92RhU1",
  "key24": "U9cfJXnrCvwiRW1zDucXNqZAqizNop58nUPm6tTDD9CDJ4oGDTKxQBE748GGcvyDVjA2x6vLFcPfA7oJYx1g4SA",
  "key25": "2tGtpk2SLtnSvwi8G91DBVcDizqcA7XohGzdnxUySqwUzw5mShzCpnuZJt6vnfTFAtJ3hw9yVf1MwMvuCJts2qfu",
  "key26": "4jK3iddUmLksLtBCkfNkfqxT2KMs4sp3iRRFNvmX7JonSjXKRFnvMZip2tLbs7u8QzjEkbBLFUaU31w2reyxRtfX",
  "key27": "2aJafC5fN3b4Qez97vM1eF3wuiu1xrskSPJtJeZMzNg2TaA3HyJPzRV2tXM8bZYeMVSj2rAA9oyrxhHG55g2weHK"
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
