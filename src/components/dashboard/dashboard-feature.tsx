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
    "3FKfj8hgzqNZKRob9B35FYNooyrN7RXSiP5X343rwTwak9G19rWNRYN3ArnjZanD5d4uxhGLZ65yAC1ZmNcA5Gf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mmN1V5wgmGvxVHjEFxPqFFVq9yt9kU9bH3yq22KjzUFPdSvadd1hgCAHGaJWAutGu9KdLG4NdCtHFx1WHYWkq2m",
  "key1": "5rTuxhj5N1PEoyA6LJrdzTAWnpfTMcKrCnggawx8x7AphmBTqgqR3kLge4Rcbq4ySnV7FR3Cq4YmnucufFu7EBCG",
  "key2": "5PC64HBFJUUseZBT8Up3cGPsK2WCyqfYudSAXAuXaPEsCPXFLFZG8Uj3ZCUESEF42kBPGGt3J8eNnLxbwaY8TsMh",
  "key3": "3SUvrq7qMFf3hSvVZta6gzET44aQ1LJbxmR8tQyTRMfnahrqyQS1sP6dS6mXZgqPVLwnABEnTPKaLtHUhBDTMSTn",
  "key4": "5ceLFxEX6soVwnC5qHJgz8QLymGxcw1w5ne7WbEPZdzRh1cuLMTKVqy45Rj5Guj7n39buRJwpYkbJ4F65Tj96GdU",
  "key5": "4BeZN2FD7its9KQJWGDA3eXNn9B4p7u5QhYy393GQw3QvsuGY2EvD9wvLyR5T3qv72D98ZGz8kTWRaZHRbHir2PE",
  "key6": "5vVctPrETuwiHdpU8RS28wrQRtvKS9WbpBPrtBmFtqGVBiu7rbBsFcuecurFgn4EW5snMhtMx7DckdMW1KCVwcfQ",
  "key7": "5a5evyc8MdgqYL4NJ4YnZ4664YoCNhkTMZNMDLbCiC2a1obDfj3KC1WXeC6pGBMESK5dPHDvUjf6Z2wAn1U1dNwy",
  "key8": "2L4VkM5JqEPhUsYfg9QdEeMz8C4RjaTDEgTGDdSBYjXDn8WvpbFeopcD8KUBcSz3JU3AiPfLeF15VZmrUEvuN42t",
  "key9": "3w7v3pK8bmjLej7a1yBLoFGUvTELw669dr39JCsHPQXNVcsenoP8MTWgCV7QCfKtUQZPj3o5UgGh1WG8GHXvWTGv",
  "key10": "4QiHvfqwaz6LGp9cdxJwGkj2bBQxXRNjXt89enieFmAJfHijnEq9vdvcUsWWjboebBhAjiuBgxL4NsRrrHhMZ1R4",
  "key11": "Jxx3qsAWyzbsWomNmkA829LnSYCKnc6tkpz6JKyWycKE7Yxzg9mJRqXRfFhyfth15JvN9JEstSiVtiWqRFj7A2D",
  "key12": "4s7p3tr1SRW73fFxSGi84LpZZbBYzQSAkDSCRtySposNvNtVG252Vv8kqcSC3FpwMZtED64fQaACpSja85QoRZU9",
  "key13": "65W4jFsiuGDF8rp1G2Hib7V26Ebt1yQwXUJ79vkzpvijRvmd5ZWLTm4rRq131V4oHBzJgj3dS2aRdupa2616KGEH",
  "key14": "55gbsEEkxFPGYmgTpU3Due37ZLGwUhC5mL1WJ8Xgpq46SXjRRR7xk5ajm4aXscGXQqR7gjbPYswAuQB651JCRC65",
  "key15": "4XKVR7vAQirpGWY6qDf499dpayQC2SSZHzLBby6AVB2npCZhxwK811h1fAAg4ALFFhctsYfP9hUMag3cEwPtjm6H",
  "key16": "324nb6jw8V2CMtz6grQ6DSFEhhpgLhGtivHWTMLjS2vBQFzhMFcvyQeQhRzJGZNavNysVoenDGM1kVqZAo6Yd4LN",
  "key17": "3VS2QnagVSzh4H8HXLT3PvGrWhkfT6DF1uSbSnCKQq4Cv3X77TwYsq1VCSZTVJwcHKxQGZyU2qroz4ZksH5YZ2w",
  "key18": "3RLToBgbfKgSDNiTkuFKicxsZLM6dWCmobmW25ssXVztNmV4RwkaWdNh9ExpKaM5mdpauX3qhShBNbXYpKKMupy",
  "key19": "D5YxZ3RqvZy6oKcsy3eQhAvkg6Frs4JNom1KxU7Mva8d1Czxh7na9nReQrxRY9KzzKtc7YeA6t7uChKpLrnH1v4",
  "key20": "xi6avxCaHfqfxJUsXcq6Xcs1eFA6vV3N6cxByAweyBEHxtNHBpKvMW2xkYmQhRmCHST4g9cks5TGNKCeecFKhyi",
  "key21": "4WwvoQNqpJw6r3ohddUPAEvppmhyC3yhhtRriH5h6UMyfSyJHBvh9ijtWznQPycsikCnyJocgrxyJ78VWJXNttdn",
  "key22": "5SAyvWWFjA38YBfXADUwozUMu2Zg4wnEowyphMJfsD2rKNUG6Aii5BFrbmN5mWt135CAfaw3UMw4pPz2n3a32ytb",
  "key23": "5A2h1z5SZNTzHEw8jWuvAa4f7JceQrRPpqdB9NPsfKtWxjBMtj7gwM9wrCfsK5AkLY5Va6xtKx8ge3tjP3pF4Q62",
  "key24": "55yDFiZ6QGqiDf3BfxJMoY1qxFiHtJb837ZNwxUtTt7vEyi5cANqsRqNKziDz6Ww6xbzpQmbZ6s1WmEvFS7Na2Zg",
  "key25": "2qxoy8mef3hUgVxFtSf5uo4ahaHiToBLtbS4dcm3CMhoeBkTvoMKvAA1TwAUyYKQueCqZzxjwAJmsLmrVc8tcAbQ",
  "key26": "qoQPMY6c3yPnLheeHHwtBjuRsusCbzgJuxXFe1QmpFbusMGwW85K24uzDh8P7PvTJFEDVRiBSXHWRfjvCRxYRqt",
  "key27": "5bgaAasHeoxTnZXFF3xawVGmwBeQu4cwADKEq4wxH8NCg3gpemM7CXwkqJWSkYqG1K7G8ymEocQCtcdB4ULQT1Zq",
  "key28": "uNeJEJzJYMxoVKErRg8Pzq8tGQPR13ZtKuspjMEGBx3w6Sfzhawv4qQkRWZP1TEbPsQsMf78dQ7LPUkXVgqU5gg",
  "key29": "rww5fEnKmpy6U13wih1S4HCMwN4Q81oetrmPvr1VJb5P1JY8uprxbDojsZ3CRnUUwgxZwAMCLnUYBaxoyTAcUnB",
  "key30": "2NcgHUPxyPCuksTyCCj7xCdmWKXMwq1mE9RMM9kJfRF3iexwQms1ehPkJhAQwHWh6vTRGbuTCXqz4voppcjpxMYJ",
  "key31": "3jJVaToNKcD7HmdW4i7Uxp3MMEtW9GGqF53SNneW24wPnwCYBH1djoLSmudoQPrJy2aTUVmbmqSigULmHehHjUJj"
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
