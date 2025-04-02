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
    "dq2LorRMo6A2R8BKsCsPz7dVHB8UasvUDGCftVP4xB9pqHwY2bs4aP9qvZg3sZbLszAkYMkeaqBZo4GU16u7QhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EFX7G5nRXzs8eY2L4B72SsJ7pWYTWKyCaFvdEmmndrtWvYRXwWXGqdmi7SuXCVhArjbJnQka85eok9S7HNg3N3S",
  "key1": "JuCeact2uo4dW4RKCdz6HaFhAWeapYmtSTUmCvu9cbGSAUXQ9aEBZ15VG8XNAF37JLWWeoWuLadWEiLYmzyBsE5",
  "key2": "4ppEpRFq8NijUwERowqHvm77z54fLqJhNBCZdDMHA3N3HQJQAh9go11MkyY2SmBdrgaqDoXrB174HMHsmXB9zibM",
  "key3": "4uCGSD7YwMv79oENkm8sHwJjS3oi6yEyuRsDHwkdsCDExCSSz5LfTC5gM7P26n1yxe8F65hhPAQSjSdVJ98u2efm",
  "key4": "3KDtsn79eiMJG2TGYjaBfx1XyzAqrCuLDugqqREzqfkTuUT3bUtDzhnqJ1ZNfjUnA37DEz8oyx7jfo3q6Py1bgT9",
  "key5": "4qchTbNsGfkKA8s4cfzKtJKwfs2SRi1wWbdQai99D4QaqY2MEPwNsvZB2dEj5p91WvFpX3pV7SZf1sQ4ep4dWcGx",
  "key6": "52rfVxKEs2nZ7pW4yLcsE8jnRGzQPeBjY1Tv3X1uSfAkvz1JJ7JwQCJu7SByFEbZiGEKm2mqPEcwhZAzwkvFXARx",
  "key7": "5UaWzDFBir9NC2hqDKXEfYRUt7d3Bmn7btprCeGVh1wgR3Fcnp6xWfcshkbZvGYVGBUQH3d7ooUCbbZbUhvAottP",
  "key8": "5HTMaCR5ddUg8rJZS9TjEUQCGNDqLi47rmjkoVmLj3eiQfXrFku8h75enLjzzE5RZKyNwZTdMKALUci36tXPWFqo",
  "key9": "MGqeUioc7PvEy8nc65qSpd3Ka8gH1EwiEZY6GdH8T7NDZrKqcsJfK9HpcidZU4PHYwZ9avVctXCe26z2omWHMzp",
  "key10": "5nRvEBNvtc1vuQrUaG8VELCjDCDK1qE4YvCSEc7FEpQW5B59fqBAAXVUkiWzvY5oHZrmThDmB6o6jVEKgGRnDSRr",
  "key11": "2Sxdkibj2WEfK5hYbkTFi9GNKgghATchDZ4FBBfSrhtWW6MLxi396SFEToAdFLXg1eBS2Y9cP7QsVLN8zKaQjPFh",
  "key12": "5PL4XFvaDJx55DTLswZPJto1Yi1wp42JU1Zvm1iHRXEqidev1Qjdiha3bSXYPcZnxJTeeDQq19xxbGTE3QPMzrJn",
  "key13": "4znH7D6Ev72EeGP6DNxzu3zpwFjUKe8JqhUnokVUuagK7ydGzohgrse82XQ3CaBd8ursKBew4ez8sNsDvi3xfLLn",
  "key14": "3twpQQMjx5mWH4hxof2Q756JLsKfmedGGvCUYkeX8tVNF2Y4rUMxzGMiQnrMTGnqPyRAdyhtr5dykn6NZuLHyWFf",
  "key15": "3Bei43juGU6kFEk2yzGrBgfYJQtci958y9xYRJ7FDPn6gwqaAfuzTcVAgHSTzFfMkA5gbRYoijTNrtjwVXpdEfc5",
  "key16": "QKQZFtG6xaoZoqM4SmcHts4SHRqZ6NZVLeY6HhJvzwJ72Q1kE4FUHXwQ4i9nc7a7HTieeeM7MAYesWuuAJKLpKY",
  "key17": "iwrS9oFw97HFYDB77KrsmvSD3X1M2eYn89KwSyfV5GaVNYApADBLehbeHgy6z7btm8KqU3pNbsiWroD4dbppWU4",
  "key18": "52FDfchAH7sQ5cwfee975Q89bJWfFgSBM1eS6vQwpgja8wArQJPnf8RCzP4ymU58AXwySCeWfoyUFDGvhLXDEWvU",
  "key19": "3Pn6QhWLXkevaw9xaqeMkg111Cc87ECQXNN6LtZG5qb4e2WMLfYx3nmjuZ8yLwfB9QWhXcpAgaRcUwhAB3CzsqeT",
  "key20": "F3dNPRe1Sq76nq9NakJDCyfk5TR9ymhAVcPXVsddzoJX2Q3X5WiBPmDFWWtjbPw33noFou2DaCDN4cVnHkxZq6M",
  "key21": "3varKp6cJ3TNUMmmHbvMfmcpnbbFNp2wRNFxSnDNpBLgAJDnjxwMGx2Y4M2tRtXyuwnxDPUDDx8jhdZBakdBfHrv",
  "key22": "2TRy4Z8vcQpNLSMdZM1Tw9w4vs2gDnNeXGiCCLriMwGqjc81qREQMAiqgB7ZwPBg7XSsbVjP1kC1fAUtKDvxTcbZ",
  "key23": "WWLNoHDnZ59eboJr1pe691ojbMy9jr4mYSGRt7u5EDVtarMQLPMLDNXPJh774HRYSE6NX7Zbi2Kc2zSEVXJzBgE",
  "key24": "4G614bmbQfF7CWv6fufQMG3yEccY4mKjajEJzURBRtjYd6orzTT3H1yq9x73hr3d3wNrGsFtfN8Pb7E85eh9jDm8"
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
