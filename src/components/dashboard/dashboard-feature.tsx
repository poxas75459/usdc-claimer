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
    "xWKrdunKG5rn7KpDMgxngvPAhGz1FvqzAzFSCjuZctMGna44Qr3yjJTRDuKH65TyfJUKHRgedi8Ac2nzbhwVNfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oFnHtEwCcCmfA225ZaMcQeY3bBAEKLynvBmqMa8zTah3YacTvF6xg7mhhRbGQ1yShcwQ7eK4Ac3xhwWbFdTpP7y",
  "key1": "tfErsYu4fMXm82CPE8CfJjdprxRyL52g2TxBT4BRfCtbXiKsWwUGfr8dbMKb7jVebYM27Z2Zqv3ywtRrRHrQgdR",
  "key2": "5H55XhPVsSAV5mmkVY8mcfgfNJboJZQSETFcKrpfnuCWWtCfiDCwgcUymLYmuNF7TvRPkuRbfEkDqbyakKQDvJWc",
  "key3": "PGX9uKSvFiVMxA1YMjFk78RT9odu7vwzXSoZEUeDK6uf3hZHc7UmBBK1LrQgnhXnwuprep6CidnfroSLEZi4MWF",
  "key4": "3ebm616VS9zcj2641n5vyfbyNjtAD7WmmXwvsUypMmyhGWapdQFPFw4VEmM5PjiLm8b3eBkW5LpK6DoHPcZZjmMQ",
  "key5": "5rv144QB2fZctLLC6YYHE2YeggjyZDNopgRshgdPAgzWGybpQFjBoVdeDvSa2oir8AkS5mGFs8RcfZjNoxmRWc65",
  "key6": "61M1NW7N3BHzc27cPQGVBWtxpBsWj4fRMAsGQgHY2SESqkgTsHy15eGDrNcVQG6rQT9WzSjBWFxeQkTfWSoRfyRC",
  "key7": "2Rs9NLwfyJbUpziDQJFfYtFs8Xs744mSRprGwpUJj7Vig6XbxVjgeJv2QsYD4xwBnnr8vFiRhShP5H4srZgcCR1S",
  "key8": "V7yj5vTvGaU3jg35GrUVbkcnm3M1H3mUqyDEGkzGgLwNNtn1q9Uo5a1qWEhPTJ2AESmvzzT7e2fgSoPeYWvi2R2",
  "key9": "4Nhej9Lt6iBMS4RAR8WJ1LuEks66Uuegaf3qfBecboZ86d28Fgmwu76ySQ4RKEwtNRxphwrihyuTWC8Gbzx4we8",
  "key10": "2Zw46ZwZvvsGJP9J2T7HFaME5uQLmPSdBvQYdrWfmxaxdaFQDiy639xz1RCka4y9GtwgLFw3QPE3Zty6NzBcvLR6",
  "key11": "5rKMQjtTuioyhDdcruJgmuQeiV5VsbfD2zy3Lpdkcodur4H98y9igGGWighgZE2j1qAp89gAgzKN1QnC37M5fcRk",
  "key12": "3ZVX1BdVVH8k8w6vwXv1BfECFQmE8sBCh6XtqLukeirQxkpXAmkSTTauwkhHqnZJpRZnZYcjebT1E3Lgi2hG3WfF",
  "key13": "2xGxManxtdcjUp79diAAen9izGKDU5Fd9Kn8mYJM6EXAgqVqnWJWpyt7YgeahgSeJEyVyCeyGtvyuHBDaXL24tCy",
  "key14": "bjLBgm2cc8SGbwDh4iZS1cbMU8NTcmwAnXe3Kvy5ovh2dATQPR7Abniq58fSKVnr5962zQKVu4qXRxN9BLpwPwa",
  "key15": "2tLatixaegZPXFunQVHrawMqNS8RpzCwY3PCee5X6CwqHbTux9HCpx48guwi3Pv4xAYUNSNtfd5N1oSn7azEx8iJ",
  "key16": "2FS4iiNcjkAHPz2y6j7oJm4yXuShaVtrtnLptaqgtNfXBKreFaDrDQxuu3AmLmkechL4Vc7ocEHqfkKSH7UcnWG3",
  "key17": "4xtUxLJtZosGdYJceYagkDCkjVmyUtjA7eXNcMrfCjDHhAaBgnqHZC8n8n8DgEmQFXu7njE2vd96wD61szDL8zaj",
  "key18": "5TVc5RwQ5gg3cEWXMdwSoudhBPRp1S571g8guRaSdikXDo4cQjzuj7V5qez2UeSkz4C5Qn49YfPGZ8Em5mDyjmJ2",
  "key19": "5Ukv1ZhMcdM6kXBuEpgXiUpv4HDf1s428p4LTSbkbuVsJsPqXUYxGZep3ducfRsUrns6GKRJVJgsqHpg8RxLTgQ6",
  "key20": "4ycKGH1JWy61XoU5s4UJYV5As7hKavJSskMASw5YwrExSmhSESLLcw7vcgrubULysGNSjCwkdzcNYDrcVSbyVbjQ",
  "key21": "31SRC5JSdir6a9M62x4dAo9gH8c3J72krvuXAeF1JzZo32CgLxVTCwn2UmNC94vpWArYEakeWPEMMGxN4x7JhBxy",
  "key22": "2yS1xPwYbRxRXNnzir5weZEzMcEYTnjYPP9UNwZWSKhJMG7ty4skWnUD6tfjjFHU9KYmfrtG1RVoVUtj9tZN3UME",
  "key23": "55WRZmnS6S2ThZzZKRCEAEBM9yfJtPVnAd91PnTL4ZzAPaoDobcaEKj6oYW27wfT1pPQxhgW9VBtUuKH9sGCjHhR",
  "key24": "4ksyL6gYh5qVtbWFSrnQhjF6auwcpzjUDsZ3gX3r73JiufVwrtL7p7rRcrwDTB3XA6pJMBrGnVpQgpbFNnS2Rj4Y",
  "key25": "3sF4YFCafpNG6Gauxm6Q21FaYbkJiNM3iL8rr37wveRMEQZqQrby4Tz7R21NyEDrt7HvoboTj7iRMY8jSdGA4yNq",
  "key26": "2YpgtvnrskWaUoHk435tpbNoFcGQ6Lci5FzBMAs9YskTez2xr1p3K78ZpqWixhVSh2UXYeTgdV9wi8deGeosfjaZ",
  "key27": "4tKjWgfYGkXFtErh2YC7RTei9zBCN4SEbNXB4WL2HrJubkhDnLQSm5Jdgao3Ri3eLAJvoiqTDmwqq5JUrRbCWN1N",
  "key28": "4nquJnqHKZeQRFLuzBwUsAZV2J9GUdSKqoawQHTeiXNqSr8GjzppcDcWZesak8Tga563wFdqe4ZTWTsHNFz3MVdz",
  "key29": "5p5vydcLC3uR48hXD4KPfVTxKwCwaEhaACAhxQQj7C6rZzC7JzabSn2tS3p7uhWqAUxHT5gbp16DCXSddXqPE71Q",
  "key30": "3zX6d2SEpWK8mK62XDhnHdcZYTtRdzXoWkYJUFVDaFWx2PQyfM9wcfWCbQ3EPbuuxh7J9RicDtiJD7N7GSHnRB8m",
  "key31": "mfbJoP5zJjoBKMsWSRS9LGRBHDST8m9hWP7brYQJs6fYBA4TnakxDM2CHtBJAS5oCLmpsZAer1pMxWD1vDyJyyk",
  "key32": "d2woc7qfsLHWBmnSgvSCoHTrw3X78aXpnnajKJMZ9DWm3CUCaEZRbnN7K22jdMQkyVq2jw7EhH7mNeZHHRXT9Ni",
  "key33": "5MaQnQmvK2c4ab2ThxKG7LowcSV8XwCB7uwgGJve9RQWYknYS2UpsipNwBkXWK5A9t1SVcv8cT8QNyq81rqxx5aS",
  "key34": "64Bx9wzdTaVgbWxPwpjmdxVfdT9jsSfvCKaBS7sSkwHHETx3RnhKNBiCjbscZLQHhggpqsZkMto8t6qtnoTeZVke",
  "key35": "611XddfS1ameUZRYaMg5ddEM2132t3kFwpJuFs9tLSEoVNZ5thNa3wCAhy6dzgd5ASDGpFiovPGLUGh2vKnpLf19",
  "key36": "3XRoQFWsP29JT5oX14apXGzHQtgPakNneHSpDdLi7pqMrxw5YHpdFbU6GRixE8vSeop2yV3Qe4FphHmpydNZQviw",
  "key37": "2SjQ31VyXvG7Jv9nTu4cPJbDpk6RDkhRohzHz8zm7xquqppkJz614gCrL4Sn3oct6xeADfhmAbZFCr5us5GPJNv2",
  "key38": "5EHzkR1qtGi1usYUCMfgezXXZHXAE4ZLLGN2xn2uQGz8NTsKTDJGB91tVBoB5vUUkkfanqySToUs9Uda25AjmCKY",
  "key39": "4FnyqaKQLccFRQ3KrvFNDFtsdhPPL9jabMtpQFcZoao4tJDHbXjW7tKXrDJxiHnP9Q3Bz26zMWJPfizD6E7WVGSm",
  "key40": "XzdaLVTRhYP2bjECs8BorqW6XJN6c9FYaU1d8RwcYvCA8mMwyCnCJFN3MMkNoDp95x9VRABhujbiRDV8v4JZmTw",
  "key41": "5DpmaY4rcKQ2tkPXnjypQvAcUyGSsHttq1xNX8mAi6GPg4RMiD5PUAauY4w1ekGvH2dQHRhDNy4VD4dNumUk578h",
  "key42": "2byHEBbKEPh1Gqkg1Zap7N2bKywzxjienejgrewaSJvWM3J1JqQXnmtP6iGVuKD59FTA1mHjJCG39RoiPcaJiPHF",
  "key43": "4yUDy6qxVDaASoJooTF8fYTg7ahKc6o25hFA6Rt4oLMZ4DXUxkKV7sMqJ5BUYGH7XWhbakVRNvXjKscC6eBRgENr",
  "key44": "AYw762npExTbjfPmvNmaCfVUeix3dZ2uNZvayVvTmb8XMUXwBVnnyW2BPKsfezRxS8B2JUfH2mPy2PmRoSemCz7",
  "key45": "57y4p9grU98LCVhmBU9GECMwSnWw2vyHpRi58yX11yDfuQWu79SuFpWXE7386jhcKEao7kG2XQszo4iZSXr3wjqT",
  "key46": "3VKyhZFGsNPhQ1xLxuXnq8GvvVWpZQ8REpEuHkp2fivoGujZtcNBAGaAL8ykaykYS2vA5dvdp5uFx3BrMDa9snqw"
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
