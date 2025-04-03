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
    "5HGnpk3k5gnACJTMUHfhWLxi7iodxecTrdoSbrJxT26RUHDTVRUfwA1nV8HGuDo1pfDmJWWBcSpAtWnn8uhEtKbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2pJPWYVkVZydsEjptXRMhtVG4Se4APiNSs3H57xrmzYMqX9cPX7fRjEAQxvP8E5uP6bS5Skhvy6JpEditnjQ98",
  "key1": "33sJe7tYPNb1XtNERAauULYLMtaeyjD6ff7Mrr6XqJsMNcU8dSWspYBqG1BtwmQLZbG7ZT8RqhjxcRx18ozkvn2v",
  "key2": "3jNKbXVzqsJc6gb8R9YaUxTawtzKWvyzGE78Bf98pwNHezNC9sjLpr2ojvQ7BoTntwkAvuEJpDNNX1KcxA1o31GD",
  "key3": "kbQmQuFhwGr8F3wQMVLmsyqisKmvFeJnJVg993c7kjBRQeqWPtbZ4o32Xib3KanVNND7GM2mEfpdxqqFaNYJ4bS",
  "key4": "4d128c3MK4L37p797XsVUrCeCfSmSWvJSBLeFU3PsbcW7R5shgfBB4yHusWPExYubFwwKpVfeKnZt52LkFiYm5T8",
  "key5": "23M1Sgs4fUN8R7fiQdEQGU2Z8oDy24UEzrfuaPo6MigJa5p4E2D8KjG95uWFX5Pa4cqezvJA9gurWf3mMLZzkhno",
  "key6": "62ecZeq4iQrfdGxKSaN6cfP22nw2N2hbmr2oVU8kwBy8driZZNddC6ekDm6EAK5HzFbRtXJhNjbHiwhBrpTz1f6u",
  "key7": "5Ww8x6Em8L7HAVmj2FN1kbAe3nvUryiVLPg8PXzyJot7nj4AUhdm9f7FtDPD1tcTff69nmG2X8kHzx8rKF4QLYbz",
  "key8": "4Aj7Vy54ZxfeURgJ6GRaHWy2NowESJKR3Laho6qxt4fPaAStz81d25kiNgSz7Mw1jGX68FraEnHRw9GbTeZkhx2e",
  "key9": "5u8369t1AHLUMFXGRaEi7i27oniEVeARTwTgMobxKoj6Pkv4bmn96ZpBwPZUFxvxqwktj837Fu4KHmutd8HoeAWA",
  "key10": "4GtQyP4YUzXiPkDyFyfExZqjfQMT6qcdKijbcQonguJ1ZLjL82uhqAncYmjb8Qe8Vi9tVLD4738UPAdJ5AQ7KwG6",
  "key11": "24sD4ZgjJVBScH8sx7L6NGzuGYXwA6vsu9mvWsb7c4g1PWTehcJzeWrsbuxpyMjMoqWPkXTksucSdSYmvJh8JjLR",
  "key12": "4JS2ZktAmvHqZWQf5RLG12ZctfCzfDkGAVPL8vxTQzEbQ8mFj3Kj5AxcRXgbuiTXKVJ58ECwY12o1q4HhLw7QQ2Z",
  "key13": "2ZkjQrUesPhk6XDRAkhrzak8wNDBJPmyhbL18Nk3sv3uQZ2GHKDCBH1WU7vP63M2BGkYE9Mb1xR6t8WouEqHcXSm",
  "key14": "3EyTXCjLbcjv4eXJha2PJPTYn2AiQm8c482kRwjWL8MiEKc4ada3fGZahE8DzYkppGV7NzFepwqZBG9Yzb7R2UuX",
  "key15": "VeAenvLPKQWSnX4wZRBZo1fTrkQwz3u5bUH1knKTREs8Vb2kBXJ2eaRuzA78DTkcatTaYGi2ts3ubFW9ytYvhJs",
  "key16": "43gBKEA1TTJs7p5mSEYhNzhUe3Tvsgjrx9XjWANNxadqAoDPnDQA77ti9g8Z5m81LWVadFcZEbYEa8aNeHaUoEpJ",
  "key17": "zuLV15oT81Pup4r79JjTmvwyqkunuNX4EmuEDdMY2qfaucv5g6PT71qDbyRxvvt2YWrhG54DinqvtUywptu1Dut",
  "key18": "3wo8QptphoRmLcxKwf4ttx47CPZxbYXWrNg4bpzfMiSEPtJMoS5mhLJ3g6jUkgyjB7mCD33ChGzeagiDSSb2PyHa",
  "key19": "32XBMwMbNTroPY2QzZEBgSgXSDsNYo7NVfGkPmfWEuaB1wD5x2cQpNkY3waZ5SgV8DrvbE2pgEUTEYCtiZpphni3",
  "key20": "4UAvdK91jriUYHob4zcog4CZYfpJPZd19yidPaZ14VtDeBwTb8CxJhZkgeh6hBNoUwp9SuXKuxsyfN7ryd2Sqnh4",
  "key21": "56pcpNYF4qE5qtjZftTBWKag6dW17r78MFqe7byRBDdtiLMFjMvbZw941d8B3jGPJ9aiL5pcP6SeS87SxVJqjRFt",
  "key22": "4sAkMpzP89VYUjR7dgPkTRVWzcu1UTvwrjrSgjUsDdXf8C6vMcPo1VYw5NGpap7P4VtfLXYDaJxMbfzkvMf2JEEs",
  "key23": "2QgY94eig43VA1Y9uuA1otfkuGvfDkJCQNoKCqhJp7WzvWJ59ZGRwwuJ7QPuaEV6ZQPokgttuJbHtSxaqvUJ81Xu",
  "key24": "3NdxaJ6tpdzhNBynPLrcbzyUcApc1aDSa42YXtoiQcyi8CSgq6NF1n9WpqjoHDRxdYNa2VwpF9sGAYX1VgsogCFW",
  "key25": "5GLDPdrdoJDovuAC6DEiuEbLrVpqpvUaCrr3ee3vCy88BXFEsUsWK7954RHptXdFoc74Bj3ErJJfVxKMDGtuZ5b8",
  "key26": "3vtkJ8KxzRWZVN4GaQsazHcxwfH5bWCHFco5WpU6KeVCVZWDFi8qx8AemS8LwUPpgbKPDMuuj4razPrFnRRTki96",
  "key27": "3Ux9wKFL7Vhs2strFxHnj6rY58RqbjHbJHAmmJsEwC7zqCbd2ZKKC9SamStQHQZmjjc69GPknaeyfhxtfbac5sca",
  "key28": "2DfR4vayYbEjAmAab5ZkxEcyqE9vmcdbR11f2GNkRL2doh2d6LnTikjMwfVaZvzbAq6y63dvf7TqG2ag2ewk4EzV",
  "key29": "5WEf39rJkRrLr5jQvh3EVYRCsQfiftgMoeTeUVy7MC9NBeU2jyoQcuwxUq1qqaD5NgMG9J7c4bpEPWNwt9BDJbY7",
  "key30": "A1vF6d1EnKtTKwRNA9HnzDDPS6VSq7Peqq1sTorQTFknSD5GkaTgA1UudpzS8hhVLHXUTfpHK3W5kBVaVK5mQW7",
  "key31": "BLemjAxgkpFpSobvgGdxRYgVqrXgVNXz9SUMnFzVGiRKpn5LdmaMWb3hEcfn8KXsNZTfqn8DesPPMu5fnFHJANM",
  "key32": "2RAK6T7KhmmGDtFLcLQYuHRYyQuWSARLf2UgaEVmTXWS49XXtWsHJtJB7ugpE68zLXPJe3kBLBQ5w7Bg2JkXX7Zo"
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
