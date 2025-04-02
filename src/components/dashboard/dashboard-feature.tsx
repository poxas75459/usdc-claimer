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
    "61zuyfqdPwWovbWx3PGe37KQgE2XXkKb7mNQjrvYkwXCXY8B9KsfWB8KKEqVFfhpwThdptpY3z9wHnc1RzGDoxo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mLsPryS6PqbAJEWVtgmeN83qrV4jcZ7kug5Ar6v34LUcg5ABdXrLAaUgDvPTjSeRQdvoYhT6Ti1zkttLDq3zRpi",
  "key1": "47e6BQv99KaTXUjWgRwnCrnR1KQQwitk9CySao2P1CtCykWy3EN2Az7qfFVEGzuSFx1HGkmb6z2wPDQ2Jjv9ZHkB",
  "key2": "3b5hHERmCRcvM7nS4oVwMU4XJWJyjMyyRib9D1PkhUVZUL8Lie5pqryDrxLtFicz5eyJ7jGMDeTJifidAVY7Ars3",
  "key3": "4ueE4g3xTFax1hfswzPTfGCCbUcLGKdZqpcywWN35VoZQQJKVuEx8kTmngJJCE6PnWiXjJZyGU7ok9M3YXjiuVBq",
  "key4": "JCGDLQuqZF1nXqkGJQP781TSnR8uLwj5jwH2XRyyNgZz7Wsxn1rz17YwQdK9H43qT8W19CcXGR2AUKkFRqhxN97",
  "key5": "4v1LwtygL4FdiyjhReiJMyAZBq9nW5XBgbG67brNbdA7aZNYmsnT4KHnXw5EwsUGhT6DDo5AhF5t1gXk3VqiC2FV",
  "key6": "5moS2caBwBxQXYCC6YJFzxsKFM3PoAG13Hw28oSs7ftqRb5pmWA63y6qphH8voLzQGPLeiWaeCVJE6Gh8nyJQzh6",
  "key7": "5JaDgNfANqb5PqkcQdENfkHrZWh8jZH2oEri5hLtwYQvGXdvw1omEfZdEBw1sDAnHbjdmkg5rYUg3BAW1Xg1KxnU",
  "key8": "5EaKFEBXkEqKJ4Sgdzf5SwUXoFUsUH5wwhS6yisKiEZ2eD9JwNzcrF4dAkj5KBG5f9KAR91ai67KWpa1yC61WiFc",
  "key9": "58xJsfiurdGmykAkA27xfWTFpRbXLX4iAtGMoPubdPYjhVWzdTCPdsL7kD3MnZ498hNoz3ceJLtZmTTCwgtaH5CV",
  "key10": "wNdDozHL6eXZSxjrR1ibiF5ScwfnjYj89biYuaQWDCNmuD22fcLVC5pKconFydRtuzUMi2fLNd7BhcetKWtyj83",
  "key11": "tZZoQRTT9tsScjzWtQFtEXUGKwEQCcPFDj6eHenYWQDSDWTcMK2GDEV8xFdE4CAu6BKRbbHvv4F3Uqy2ekg9gue",
  "key12": "5Zdq84VomcJnYXRHeQgmStbnfo1QCQvoyXnjvaqgGxLGb72RZBYJUNEtY6d8gwNGdHYhmhVeXZBhivi2nYm8vb8w",
  "key13": "4UsuHmYKHctDhJ2P4h7bUHCfTvpA4xA9UR1KuS8kiFXZ8sX9XWdssMeGDMQhrHzYHdZU4gpoknzYpHswpPJGyXj6",
  "key14": "5YUwnhD1APXHmWJS4o3AovWCrfguDxk233zkqCW3MYPDqhMwTJ5spe4S8oi72AG6v6f6UTHJsgTTS9bPCDHYrwp4",
  "key15": "2CYoV3Cru6MMoXFgv2uhAAB9zEno1pZq5KZg1age4f2tWgmj1jvZYSYuLBGdA6LKNnmAzEkcHuhUbLGwmnHBM8kv",
  "key16": "PDoYQFTUUvgZGX8iBXCvjkPPyFpwYDpJANBRXm9ZbUqG9xps8LvQvcATWRsEBX4j9meKjVJD9Jau75wa4m4QHpR",
  "key17": "52wjw84c42vrv8HWT8MK64fmeeZrAiwCvLhj9bjqvttspjC95bFbvW2JJXfVhTZXhbfBY8kJayUHz5HQvbNfkJob",
  "key18": "3LS6P5nhf4qTr4qVuWZe6WT4azxwq5Zmd9FUhnKQ39MViGCkoxz9SUfBuPYTWBwzQrJEuaBpqHhYyQ8GabXu1BRa",
  "key19": "5zM7q8Xgr56yMv5AsaZXWYZZ8KNeiZFwNZUva98N4vmj7c1zg8yxuUXWWNv8munNxSPBtowdr5QM2bTR1GTvQdG5",
  "key20": "4kRLvkNk2SXszd5XoKrjyqZ5TD4ecDoKqmei9oziJ3giafU2KWMufGKZrdDXd4mFmdZMhiQ6HXjZQrKJkrg3xSFY",
  "key21": "dUARiun9UT7feUdqQkK8aGdkWjbiZeXqEmZ22TRLrAxUasi4m3nrZsYezQJmv5HmkWPcNcD5NPg1228yM7Fh5Qy",
  "key22": "wZGg3bJDTtUzMsScQecdLeYVTZSSGX3imgRetHsva15NcfUNANcQz541bj5rtEgfCTJHZRAjxLfMgCMCcaTXqR9",
  "key23": "26WMwjH5PXkWYv5fcCEWBhsgv2N5rFVuZPNAkVZHd7MqF9q9ewZzbkUMNUS8tEbLnF8fA8zmTvznwHrnTpmP77YW",
  "key24": "3BUrMnaY2HgpCmQfy5tE6agk7piZs8qmy4yExKXQFX6gWbEyfjeUZv3guyHnqz13RhtqNKX5iQG9bULEawBf3zzD",
  "key25": "5cxGKZGbmSNKMDniTGNDbicXQsucMnESujar83GxuAz9MCPXGb38fDSBU5XK1m9jQmAXL9jEDbsmeyZNf7UBvA1U",
  "key26": "5RLsdsWkz62D7TUD2iU68sAziSQ4BiYYVWHedv6kLkkmPT1pAQFJnTwBoCYjdkjrNjc9sLb4FNEaZZuS4Krsikfh",
  "key27": "26B8R1jvSvf8qnQFGdfbAZ2P4Ptdg3MVYSiAEzN3mzaAswHgxDQzRZwjBzGJZAWZSnxhhPy3VropGdG5WTfJpKXQ",
  "key28": "2LTtBvEemoT4iALEmbk2zoWS4GtDLU5iWxngmvkjHT2zh18CTEV4AqMXze27sT25nCxMoxGJmyKvKetbJhNpqEX8",
  "key29": "Kp5W3H7funZDP6XGLqY7eM4JXsCBJr7E6JDfX5GKFR4ywwkReZxp4Kuxsb7qTpwZbkQ4x8R6eBorFwJQhjFwxMU",
  "key30": "3xeiNbPENyELAfcHG8umiDrPzkihSZSvzuWJbzHx8iEFaD7Pjh8MbYTmDoetNeinYyELoMBzg5E87hWxp4kmRG6F",
  "key31": "2oFpFbn8RfDCRD6K5psAjmZSxBs6XaGAUWFZ3cR9G7hRfbC8cqE1nCuzabWwCosTfe8pSpiAWNhAF99wCghsrNZ4",
  "key32": "4eYPFFUiyEYkAzKiPhhwLfuT1Y1YTCWu9HMNPHcsVnUhoY49MyiXNb2sUpLPBM4swfcwjhvr9KWUkBYXYa2bcFQJ",
  "key33": "3UTCQ2hvG7B6udDXF2wMwSe3bvhPcNQMH1L5Kh4SHFTvcXqnjGAysUwXuNVpPaMAnymuahAqiz98a6TzpKBVZ439",
  "key34": "u8zm3pxyo7iTdwDvqNweThCuyGP4VcuZEYadZp5h6pURf36NLYTRNxG8p1k2UdqSc5CkoybfruQYh7bzYgTc5LW",
  "key35": "44kBRahzEdzs4EazGXoZL1KDksLeeW1EA8orqoHkotCL1GkQBzrxhhKpE4GsQ2pTnBdY52FBeABLMh1WG3HJ2gA1",
  "key36": "5eJJtRb776dhFDsMF3UaEWJw1nWDx6iYxKB53DiFRLL4aMHZ5X6LdtgTMdi8c6xttf7a3BvFQPkVzWcNBFXjv9tp",
  "key37": "4P7nZ9GmbGQzaY5Xfm91UZdNTDMrYtS19xbW586FjneNuaBZ2evac2QUFxm44aPhoFAr3vbiFszXMRNxepNs1zZv",
  "key38": "24HMj7xzRhrHBTQbvJYD7JacaoXnZ1UgDPfQZnZ8KjQkMEFm94sPCsT7ePMJyoi4PKDV3uaGU5mZEYUydXdRCnAf",
  "key39": "2KtQTVULnPwuMHmTxdFC1C6M4EDbXQk5NwLBLpXmcrYxpuwtBceyvnwYppu3PpvUpF8itFMR1CAKiBmM7J7ThXBd",
  "key40": "UvgxRsYJ251A5XE9eb7Se89NdGF27pupyqL1j9N7eiLAEebx4gBGby6pnVJg4ncuZnoFHX6wBf1ZJ6WJJJMhJbn",
  "key41": "3jtPUPaMUsceJhD4hGN5uGGrjcDYd1iHju1YcDqoQvLrGa5ES3BxCAcdQC5w7kVRmzoNDhuRAuYohmGXU2n8fG8",
  "key42": "tz247hMtaAXUD3GFWb6qKxFPXzSXi5UQGztuRdSiAXejWsxpUJxzKycsymbmJoMFskJazT9b1k3k6a9WJXs58ZB",
  "key43": "5uN8Cmx4yqXK9eVcstWLb1unmovT3iCXULG9qe8DaR1tymgaR6BwtzWQD4niuwUEw3PX2Uur1utTvDwVYchK4WUz",
  "key44": "4k9pUeiEhCc9RVHj8hcxqvtpGRvUts1LQ3nFCEM8kgymKZ3vmSba19z6SXfD85nj1ECbh2CXUqi7HzppH1C71H1B"
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
