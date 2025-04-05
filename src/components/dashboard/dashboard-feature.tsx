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
    "5FhD6CfPzFTRifPvftUPxsCFP8aqxCaiGNdb3YUXhE8NpmiR681HAo3MPEY4nLWM93RrBwdfbWk3F5ZvevLt2M6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQxaCrZy9djnqp7dyABKq2TnXePVvumySRGWDxFVP5DnYqAjrzZh3XXJZPdeBtxRvThGG1cYKwPRXs3vh3rZzZ2",
  "key1": "5TTkryMXEBwjPpu7D2XuLuNwLiDtzADunu8JDq6DXrEwucXRpkBm1F5cNoiyws4NoF2aSzZd9p6uEeC3AgjqCBn4",
  "key2": "49JrRYUE2GbTQuGdTFhsXPXYXM3JoQsFR2oRh2dP93JnHvKeD5E1YYDULgW4evNUbYWa1ynQF77TWUTsMLZ3V2T5",
  "key3": "48w4hUSyZNg1RLMdCbfBTNA35Xnp3oPESRCe2SHCDTGbvwBZKmrtKGaZJXmHxPSVM7xZBAS2Y6ymEURC6YLnSVvT",
  "key4": "61EwGi6W7qy7dosRcYGtbZid9FxXZsmwaqpB45XhhrxsBFtYHQPv99vFc7Jeja6w9Cp59gLFGfyoiiMZYTSnaCL1",
  "key5": "2b5K2ZSntxoDMTV4HXyXH2mWwSqKLWN2NREifDQR9ZudgSDdqNthCpRdzHKUMraiysEAKviTzSWuGFViSDb9wFut",
  "key6": "5hBaHgUmNFy981bYCT1WAkFh8XQ8xpKLYndFDrZXZo649RA5riqyQW1yLbKeTLDyX5pC6Pn9aT6ZttRfbcQEYSfX",
  "key7": "bFaMfbykDLH9u4hVaZpZouYpDzEKNfvFDmJYLzMqWPDmaAhUs22RzDSPvAKWNkRKb8ne6p8JSm4PBpGoKRBgd5n",
  "key8": "5oQoS7w6MXKhKbmUqrwaWxCye5FZY6gdntCRbmyDUQZt96U7dN5ktwa4H6BxPbN8qMebGkpcDYfF7aQfD48f2EXP",
  "key9": "3yHQyT1JWUomduvnJQaNQN1hUHcRUMDp1L5uWhxyARaPRGYVTtWgUEwQeEdpuMhbvkawssJ7LmQHoJ3suMLP3cjB",
  "key10": "PCtPxWrnzDpRJJ5YXuBZZHq7pwHnztwYx5fhrKFtUCuY9sHCwCx1g8QuVP1cKT9vL8F6okHYFQH1VZXBC6shx1L",
  "key11": "3XV4ht9HXAanaHtAu47QCkNX3GSgZaAFGX7bFkDysVwA6zVRis5GHCHg2r3fPuey5MfZ6tHW2LckvYjpxUxLyJnh",
  "key12": "2KKzBNWD2e9YBX5exyn5GyRWKm5nErey9qiQF1Lggn6P95mwPBU5Xi8QCUjHghh9THLWmxZ7x3Cf3HgdPEz6MQmj",
  "key13": "5N1otoDkoUwNYzxbMaFVLxihSAFVdZy3zUYpCs7uP9FN6e9uoPyNTdAY1aqnm1ZEXR7C9vtMZrRvpRWAbqXiQLfy",
  "key14": "4QXHn1vX2dsYLW23qGx8ysA7ovfHV2dUviDKWqHTMbNyFTAGa2wUHY1L7p2FootsAAreWeDH2K78pCqQsLb9TCAT",
  "key15": "2eoecFjk59Wf9VawtL7MExM62B5KmouyAUBJuwJmxFf2Tzagtj17qD3f5xruSu9dDDjNgRkE9rVNGjmoRtzcEbug",
  "key16": "4Mc5ZDdmoZcaBdr9skrKuDytU1U8h6ysmRcwGCt9sDodDfSsy4eSf5hCgNdwyTXoQRTFw8VBGErN3LT6sMH9c7Ds",
  "key17": "fwxGRWP2JbC4xtJeVBprjm6iEHmcZDm9zZTbLNLPcancYcsW33jJzaWLnSckvC91XFQJevn9Q3smiWkoqnYZdgt",
  "key18": "2j2XoXNZ4n94c8zjbb5K5VbbcLUCT4rM3LY63h2G5Umty14CWx4NrRYSkDD5EjWx9rUihBv6Ff4MnJtjABZT8s61",
  "key19": "5bdT88u2z8pbwJhQv3R4fa7L3Hw4TEs56i1ovgTxjj2xNs6BrCDfqJbBCNykCGXb6ryfY9ewuZstC2DpDRzvHfDs",
  "key20": "2RiEWnPaKALWE5X4vcERRRsXiW7USgxwvWaRYZ3XeQDHzKUFTTqc2JqmRJr1d34pCkJyaiEDKSjiWRogq9GVTMUE",
  "key21": "54R2eoTF26tKoeveA1hwVHktjPs4jCP5sXRyDbkUQnghfumtvM59MgasW4sPRYGkUyBPSA1ZraZGPCUSN38tZo7Z",
  "key22": "3PLjSyu1FwEy7QQAMYxUaFLoFaTojFm3UnoidPHqJrrMp3erFrLp5hkeGoejdFHH54RJ9B7n5F4cGvEZ2ooHBdgE",
  "key23": "JLWxaCip27d8XsoMGufQ8sUzYRb5uasPSzgdUFuAvvCcwsg211PgHgA3UGxjADvSrdXyTqBLiR67fPPbS197C6g",
  "key24": "2dxUmfWfDa5EtJRUd8RbVVipDZYVHCoKwCPFGd36rD63WKEbak4nppqPjx89ZLeMw6T8jmhH1Q4Aqrg9hr7bkDp1",
  "key25": "52VamfBxudRDNY76DLc9qAC2VfwEVErz6v57SnX62z7F6XUhicsMC8L477SGRKPHY1hL3JpDTkzVZn356jPg4Ahu",
  "key26": "4FMyvURNEq52YgD1qmcwyitFMRLXKxezzx4CmbvsriQncyVdP6Bun18rBtTs2o79H9WaghHdKUFKCESfnxRonpfS",
  "key27": "4YDU7zrK9LFcPJemN1fi1A3xYRHRqVXQbYbe6qtxirDcHhYuB9TWpQn5x9Ff5KgHTkrYHppvc3pSC6EbdKDKNVzx",
  "key28": "3impnz5bxAQEAFe229EVyHzfopzEJfP7p7Mvgc6KurxEiJWUj42L8dPZQV4tHoGzNqfQ3eqFapxMggYGKRoecNRh",
  "key29": "4ULCzBwgz9Uymt3PBNKqqC26TYdt9AzoDJH4P3WnaZQtXknhuWSWHRRVtZwPXwuwGhdmF1XjNF4zihn9vwRnirDW",
  "key30": "Ms6nMJWC3reFpvBuQS3fFBgxAGK4qfQmSNfNUzjQeZviUtpRdpytN15xsGCwjtmxFFCh2qQUe7kGKwzh9MQuWDP",
  "key31": "3AP6LBFV66ZxwjaUtP31c3b4SoJSkWxeVfBapPzhMneVVypZWf6rnrEQsPUAD4ZL3Nb2QAHovw3eT1j5A6bQE1qn",
  "key32": "5M6zF2G1cVFcbH66up4uULsPnZV8a5c4WuEE279XJJu5WytiPTjH6D9vKT5Huj3gn8vEducgPyrB2tVMeQfEBM6Z",
  "key33": "5aV5CtGbYzXDjD2MyzA6USXtzCYXyStLKh4esGGBCJG1WhFL4YbHvRCrXdUZKvYaGmdeAAZfPXy2Urdj7ZUCWSug",
  "key34": "33kEgbN5GHCCh5bJKrvjoBe9AmyMJiGvtFB5XHw78LtERXg4H7jR6bos5u5A3qPNjyVT6GcAVACeEy6g4RMtoyLG",
  "key35": "2hw3pPEz76dDCWe9YnQ3tjo2y385AdU3xhJQa5nSV3tSAcv9K9SAhGKzV535kKWPDGYq6HmsntuWx6o3LtMsorxX",
  "key36": "3sibAPKT8bpVriWVguehSruo5z4Yqx7XxaKRLhFy2GH6tUpreW4PFgGqQWDANPPUrdCTgvZtsAPV24YYNArtYq2A",
  "key37": "2JavkvMXEq5kgNdQwaWLgwWLKLrixh53jUSLxcYKo1z5ALMXyyxf3fj6Seqeje979BRWVL6wv2GkyNbtnJMVGtN6",
  "key38": "3d64sfRzKcj8tcUgrKq4N6y1RvHYwSW35PtYmyT4WpZYLYFHB8F8THUuxf8Nz84CRtTS91AhFTK4HWJQikn5UCk5",
  "key39": "41DnoE1MZiToxmy3xpJksTTJVG2R5VtwfHhPeKqK9egKGLdx2VtonenhsbQE75E5cUthxXRFp8axuaEn18U3JvtM",
  "key40": "5bMhEz3F3TywmJFTv34dBmRK1CZYSV6VyB4tXyrFVKPJ8rLKPouKGABLqj7HRJZ2cTZr2SKaBXqW2MrJ99EM7qPT",
  "key41": "4R3Qm6iErBR18zPwL3DsL8S9twVku9HFqAtrj4K9SHztbunTCSQxMNHTZ7Av9A3P4dZaay6qZ13V1TSd1nkNSb4f",
  "key42": "5U4CHshLAa8b121VCaFUWWU12UZmik5xSiq93rdooGjj3rJtY61AbERfN2ng6Z6LRsH7gK7YLTCwtZCeMUp3XykD",
  "key43": "4MaRkta1i7dQvj4Jx6f6U9JUpZcu84FisfweaeEwGeeba8YCXFEpZK1MziCjsxvVWojezxnQ65bVj4WqbXgqyaLM",
  "key44": "4MBDZciyLuxvED5oaRN7sD4ff9p2E5AtuerMSvrErN7ZiSJ1vGmqRc1bCuu6vgMEZ2Xv2uTNzCQqh6zuNFZxkzBV"
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
