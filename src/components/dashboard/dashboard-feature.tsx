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
    "5pkrCQxqrVynHXCc5S9Y9dJjHfECJjPAqjhWuBfdEPCEusuA7MmM8Bnor2NbtuREtE56Sjrhs22VCecpypXdmFJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36hmtzwkMNyVPaecLv2kQAXcFjm5f8dxDETLGtPKLpoK46C2fhwdnYd79LMvuZTvnZRB329Sodq3Zm3L3CaMEFKx",
  "key1": "4Px9EnfXtynr8NMYKJMNMzKnJYUwbj8mmno5Ny5X9GgEa2CRsBXPnQDM6e1pzaFiLjPkhaLLZE2eMbJRp7RVaJ7e",
  "key2": "2M89aCUfFupjAvDiPko99pqVnACwrbf3GR96TN5HcqtTptSjrmigfcMv7BZ8ViQUq5vZ3DrWJWnaVTTt4Lvcz6Y9",
  "key3": "2Pdw2fCzDA2ikCdDUy3Av5FPXpijLV918pR5oo3w2Y9aJSQ2pAECTZSKjtdV1sV9GpXqi8SwJTNAhPP2FdtTjEhy",
  "key4": "2NayYnKBP9LbgXxRhZCajKKPSy1c1CQovJNEKKDY7iZzYqJ2H9yQ9JYvYLSqEc2W9DAeTQeeSrzTFw7DW47odQK2",
  "key5": "CamBeQdmAxZrfToQfGHh5msCeexc7i6MihgBNeGi8ndGLKJ8L54hHAcgcNpx96HBTXZi6iMUjbuFxa2nNhXJ1HP",
  "key6": "Hy2EYt16NmQttDbguLZGE17UqA8RBHCXiij9DCzu12gLWpzA1xoxTcXytHP8zs1w95ZdCaF7MdQitn8pJckeq4M",
  "key7": "TY588qCCDYat8MkziQSWi4MePPKZK68ped4c5EvRC2ZybFqXwZ1aBz1it2Nas77tRJnWNnphCzVYhtLHrHJ7zxh",
  "key8": "46j9tUU7xrsRVP6MqeUW6wt3CMFdWU4pwBBfS1FYVZ7L3GSQGonugcBkSnGwinsnFPd6yKKGy5GSfV5MCHytwrFU",
  "key9": "KJyRnDzvtzVmjwimcKWdfr9DByUeQermyu7YLmwp6WyhGqa91Vre8Z5pR4BvsbYj4X215wzJArwncDGbpJyJiM2",
  "key10": "Wm8zw4MZEa45evBuw8SiGzgzp1spN9AVWGorAHEYU3KU5VZeRgurV9wY67h5L3UrfavqGsTEP4GZiU7nawq3UvF",
  "key11": "2SxN1V9rjUkJJjvrbpiPYbKmDTRmiwnfddFTcZQ2cfB2786rw1aeH8acFESjLTKtFGxZzeUgMCabT6tAZpsK68S1",
  "key12": "4NTaDTt4hoQgZGtiHVwxwREWL5GficE4peHkm3RHLzDrbL4MX3hudMUobFC7YULxUTEcekacAwAu6LZQovmsVMhP",
  "key13": "ohfj2JnjHBdVUMeKuJaSq2Y6ZmjhiQiNfHsS2vcztRRc3CN8yhxDCzmPACAbt3n4f5ZrzbkUfTow3WTDdPMm5Ma",
  "key14": "4ALWYKcnh3cUh9Kj4WSnqtjfb6zsDDgQJoBS3oTcoUignxtJq8hvKkffvAQDEshuePHTXGKZGB7x8rPkQdq86WH4",
  "key15": "55abupSeyqzWYo7u2993aT7oo2bEJ5wCELsHP47wzKgW4F9Bt2ukVPGNFaDEzZdfrJY7tcHuWfjBc7wzBBr6hjUj",
  "key16": "4ZgKRYa7imLXxGsQ3k9m6sfhCZtYFjyN1ZDKQPDsukUMDfX96BtQUAecSbSeX9LfAA4sr6toNKgYLtTCUrsjfwXc",
  "key17": "2WTMBG9hm2msoL5zbkqQyKfGQe2N1Yi9266z6naAU8gv9KbMXb1m22b18XfVpRhPR7zz3qZjFoMmpALZ4LFRXdem",
  "key18": "32TeJciA2BiaGwWNvpjijDjh3Lb7KqRQiqqPJfPRS4BL5uetkVpEgF9k77pKfqe7W2bkRtjwistS8JuWmGyAvpNg",
  "key19": "58EzZbQ9wF5MjkMzdBrxmMH4T3cwYH1wvhNnDXENeW3bZ3K9QE6sDZKgV5LaLA2YddH1k7n7cttXHaZMhTYQdjPX",
  "key20": "2wnmKxWDQVgeEXC5yDtH1aPN72i2df1Y2JprsaXFkQEy2MmVgGRiasHSunjYm19Y1z5jgFVDxta7gkAGqqNyndxz",
  "key21": "2yLYvULrkAVFjmyh6amCA2G4WCKsk6DWW2fP3LXA4RdLzqUffxAWMs5nuEW8cKNexg4NuFftVqrTGd79nEehB7XU",
  "key22": "3St6EvmcPY46h7D4oLfFeG1VyFh7Wtkp669wc8jHaCv3XFYjB43eYTz8RhcHKXnhVvXe5ofccmmpY91AbDBYLBH8",
  "key23": "5UtkKgDYmdqusqY7qtLv7bDG7k12AGMthbjxJTvczYf8sHi7K1fB8CiJPzCT48jHAG9ULrZiQanH9St9csRUWaUW",
  "key24": "4Y3RQoFrCD3iuX3HNkHarrxcVEPDPY3GGCBpeEP7F1cLoPc7v8aCKr6LKYAY9kgCyRLEosjA7SVyfgMjJ8omhmzc",
  "key25": "2ZsDW5PkvfGHzH2dcDSNQamxCUbfXcaM7mbzN9abPBHqMVbjZrre5kq8cwJj6DSsgxb9xdA3joS3QaV5vG4aZ6am",
  "key26": "MSZahZyd1Tn2seDRDhWEyvpBShnSRbMFQ89XorSWuGk6YrcdNEyqCd1SqaGjhAiZEndBvuFqCPHesKHPSZDczji",
  "key27": "4FuhyozhhH3krsNXk7a1wmsFmMnGrV7yPFn4hABezpMR712DAVRfHLfKe1FQ6gQBeg9eD4h9Ck35eiaX5QALqpRm",
  "key28": "2L8mcmx9pcVKSJopjvA2bN7KaRzNXPagi5svaWAxbo3EKCFg5RCB24ZMnymyxprBdx4MJDEPNUgketFZ2yuU9fTY",
  "key29": "2y96fDj36NpLuHaj8CK96bMS2D1oJXBtY1QnwNawHLpPWP4Yk2ysQ1yBM222sZDJ6FeCS8YkzC59AeVCsZRgT4ox",
  "key30": "WkoQsKG57CvFB4eHNA9aBQStus5Kf59Su3A83zm5WHbNpiCqk6gusA5YmgoHAFJHdJurDyokHydKVZovQCEwhaP",
  "key31": "3dux744rUA65a2WJmg6o7YLUfyCbKHJyvUD7762kG9cYqrFQtXFaCwF5R4151pZ3Wv8LjmZHnfKTnsfqBrp26Ewq",
  "key32": "45LVtiQ81UAfoQLBymEV7nsukKNyhBCeBCD1xdZiEuC97HC9PwCGmUUjQL2B3daMqy5SafYxrpwhEA6dC8umHgug",
  "key33": "hL3jcBcdQ9Cd86NefjQY1gs77QWa1oyKJQR9ThF8AUZymEvwUy82Jsp73wfzr4dsfQNdjZKpWYeSFD3xf3R2Gmp",
  "key34": "ysmKnfU7ie1hXr3zuQTEmTLaYCVFqZH7Fnyg8W7ApmcAgRwrRmKNNWduwRVAd8tqjQdU9KpEouX3GhmV4UDKYuT",
  "key35": "51Y7s4TN2Zmufo9UKVsJtJLNGnx4g5AJBo8dapeguUddjFAHQsbyGoABRjdf5vuwjTYmYXpQ4fAVA73gm3JgeFv8",
  "key36": "3gRAnzW7jHC2jKcdhCH2EhGytTbXDdVZq3R7BtEJt95EwY34gdGAH73YrxR4X22VbQLF2nPXA8Sn3feNAYFzC5mV",
  "key37": "3efkk3ZdHKUFwL4UPxiMPw6239rgC5vehAu3rTFUjLw3fQSD12Jnm8rBSDGdi4SBnGbH6WhddzzLsu9MBULSMHSA",
  "key38": "5VD2SzK7KukoX8hWLpKunVLZ2ayABZ5KjRskWPNejbc8KS7Z1YMuiapvCXFbiKboHe68WAhVK68GKocXfMfDKUQ3",
  "key39": "3igFTWp7hgSxqNJPUZ9Ro19E1yzRBD8najLd4qgrmeRuY9S3VpYSwUrHhMQyYaY3by99tGN13bmsKsoTKPEXjXSE",
  "key40": "3VdEEcDqGASkX8ntrAZhbS2LXHEeLxes6thEtagJPhgb9bboFef3MV65kEwLBKSasDC4xcZ9op28Ujb4Er5CdcTd",
  "key41": "51v7GsYh6FaatnM282UPFD6gTLjyzjn4Yz3n1MDdJMwE3URtTpvnzbU2Njjq8iMVMnncASNbyFyzvpaGdyG9YTLJ",
  "key42": "4jNdq8XJdrNjfQL4wPR6dX7Aw7xpFMFu32QbTBWQ9y6SR6chtCv5aVR7dAwWvtNFTyTf6hNL6FuWouhojqD1VeJb",
  "key43": "2VTBVFnDAAYtABccmdDfktdaLAPAtGxc5FvfLCmn8qGF9eCYkJYNdNZp75ng69DzPB2kQ6QrzE8hMqw2GmyLcux1"
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
