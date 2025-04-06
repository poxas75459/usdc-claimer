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
    "4wqKepWXMun3PjuLsSuqCWf8vJmBYQr3YPk8m6sivStoHVgaT6SKcCHXicPe2fXQW7pwNtXGz2fuQLgjQuf3Bymm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kBiWG2kKm8t6kGK3Q9YJzJbkqcMZTaXMWy89UErU54i4w9Uy5hwy6fXtoDT6Wc4bGQhiUC9XQUB5Bi8SmUwAig8",
  "key1": "iqqTrCXJKD5UjvQDNoPnD8aifusjzQhvUnA93L6tksUNYDEL7jmGNnSPqnvpHG6BAwnALgPMYXiE5QSB6m3dvSN",
  "key2": "Xzk1AAnFwGbdt4DEScyok2twpUC7NzMPvp6r4o3YqD91hB4GqVdQ8uWJmS4Hvs3GE9DStA6qKQeWEHS5mXYazPV",
  "key3": "2B9Qo3r4KKipU74pvnbSYmKidNCCMYGpvbuVXTEBKMbEKxXvPPzBnheVoXwqoQCndDgqPmd39wUwyczTVNa8ccGS",
  "key4": "3WrY77qhReB8RuV5EG2XffDq1B9Ejk2uV5KVBxiiNinxxmvuft3LtzsGZhfbMuGr6ujPDeB4zUSQppuA1TD1Dy9C",
  "key5": "46rA4fam4hEUq8qgGWdrMs81NmDQvWPm9ymg8ANP5NX3pMzzzabmDynmLW1a7UnjB68jRC3v9EL4ffUQww8aSrML",
  "key6": "3KABPd6a9rRjJrREZ5Ygrx9QX1vkDyuLrPFgYscdyBy3LNDmdEM5pTu57YD3sGFa9EfrCYrLnaCSKEYCDz9npFEK",
  "key7": "438qtYDrBSsyocSx2bVJufwTZKBbxU2VytKXgMEKzuoJ5pP2Rjzj3m16sXFnjYr36xuVQDv8k6ZRAGmbH2qFMrYs",
  "key8": "4uhDYsmthVu1NqGuUPwmZXhJxWB5Yx1vUEXyP5fxg7p9TmNHkbbii9rQh8As6tYqwExDUnYSbXtVFbyYgjYbYP3T",
  "key9": "4Un3RnukKuaegRQNoeSi8A4tTurchpkyDvcpwEMRLqsy1LAQbBHNULKpX4zVSmP9RApY55wuL3spw5oGXkk2fnUA",
  "key10": "4swer7DR34YUM65EJ2ckAtiNxC1URhGEy9uzw82Eo9hAoq4BVCTMg4xbddpve44eUNuvPBLwwqhwgsFX7jjwiYMg",
  "key11": "5PrZUnSaZDkQcqHxpfDc9zYBRHjcnVzYJL2wxxu1xz73EsfR6GG2rDNEQBuDT9QmUzDuHWrxKu7FCSMuvA5Teqnx",
  "key12": "caEuikQ6u2VyuuQgeYfFUbhKgTwGSFKAHd6TryCdQKoeak2sxiVhoZxnZFKUivgifYhj8cphMTgm1VFu9ay4ntU",
  "key13": "3rT9JKgkZFtsJ45NUkA6FDHxrCVR9m7UUTJJG4yAHyXrsr1HkqaZSCRRbx1KauV4eDnUeDu5M2pBqtzx213tJ6SS",
  "key14": "4UHdAoxo7xJ4PxURBatx5svruo7XHf9m4gxHRcwvWmoCGyFsvuqR4yLNZ1qsdzxpTV5ZJWLYhtKvbNXL1cyM3tNK",
  "key15": "49oxV9QLDLRqjyh3A6BMR3fi47hvyMVEQKDd59MziDCHLjpsz5i31p6ZtVeUEy2d5p3fPddC6fWXnvqx1XvcRbV5",
  "key16": "2WYF1YxQs97ZYkku37jEDq1aeXtCjLVpJKbb3BcD14LBm6oYMzZPJfjTKVFQWYibg1a8YmmwW57F83n3Sey3r85C",
  "key17": "4tciWQaotvqx5EtFbis4sxqFVxVSKJSTdRUsYNp3s7BZMDXFfbqfWBKfyjaQCFdqLa7Apj1mF7NYYzGN6XUr9hW5",
  "key18": "63dd9DCVntJDeS1azKZtEHgvTFBpNsLgB6ovdFwwEqc9WDvhiNq8n28iKGsBi26A9SnwjSomiGuvcecdg2iudPSb",
  "key19": "4AD7rWU7vsSqqkL8HWim1dz1RhDpVepj4wEBrJB9WpP2eBVb7zKNdfZKH9shk93UrePtF9vrZLEkpq2es9UCG7nm",
  "key20": "2WVt7oSHB8DE2oNQHXDEAGv9L3B5z2aW5ZJN8HenXrQ9x5W14Vn5dxLFQ5etQy1uFiMMxcvsp9gNzZ2nvfs3g5yg",
  "key21": "3D9pY5Pg1cH86fLFKCTKCjsf2wq2PQbtAb2eETyfaoL3g3QNvFGo2ayX3SEXzK539CH9ZgLW6vcWCY17qxyYV1Mz",
  "key22": "5rGDSKKbdAzJdm5ATmuAvAdWsSwMVkKnPQbySCrSWvkNQnW2qWonuK5TcVqjo5weNSkDnae5Wdq3R9eewh28mzPu",
  "key23": "2Umr8FoGde1WUdctj4DVGvJKiEtLnFpGNLecbcJ26z5Sk4fpgjJyJ1S3h4EQ7WnpTcbnQh8wvAvzkEZ5Vp53Bewg",
  "key24": "453JtWZSggXFyqPxvjxWwV1Brrvs2XfhxDjG6LYCuhEnakXXQcqQStX6PMzcqRLZ1azX4JoEEP14NvAhd19xVy4c",
  "key25": "5FMkcnzq3fwKAoiCn9hCF9BDFgQKVvYcfuSJhMjpq3WeuTF6C6hKubZdzY5pm41kkc1w7DBKTXQ43tvpRG5sHCX6",
  "key26": "59gZURKtiRLcDTfkWdMxkjb2WBguhUxFL64bVGEUp7d6CDkSnepLcHZ1pt6CQTtsHEieZxxXcwx87Ebdjyq3Vcqt",
  "key27": "MWF7wrdgzKY1szHEiHzHY8VX4d8s16Pf8rWixsTBaEZVoPnnDWAuZxrZKMSKqnKJ1VoK4jZ2ertYYMfaqouJd1W",
  "key28": "2w6vt8zVzMZeEMcf39Et4ZMZ3dvWSiiCF8FX5oX8E6hSjqTgzuaEVQtmDa6pXTCsuKfUGsfrhk7GWuQbRZ2g77op",
  "key29": "4YUSsszakR7FaJs7HgzacqSQ3PsABTmQeCq9VLQ2KGcrZg8cjGE9yXCZYvi1Kf7HzwvzVFR4xwDaxakp3NkDKBn6",
  "key30": "5USYkDyHNybAekCdYZp7VfebfbGzVtKT38Su3UfqS2ZiBntAxeMJDD9bjnnLZsfNjPpXTpdTuJZxcVrNJFwQ6cZp",
  "key31": "5rog6Xfouv4azmAz95kobXYUQC5bq8tL3CA4bLraPiGUQHA5dMWwRUx57XLcLqkut3LjBZN8g2QWTk4A7TZkLfSi",
  "key32": "2B5hH9S3Bk9RsLofvpBUaZnkSA2VzUpPQkpHnzSMoFPDcGtE4FjunNCapckujtScS2owi3mWBEj8feeNTx6GusQM",
  "key33": "5q8q7GZbShiruxf9sQXV5dE6fj2LiLatt4D5uZfQZbevRyx7PbXMcnU7nQJSm6iA2V1HjxzeDY3xhn97Qwt9CBWj",
  "key34": "5nkyfnf6Y4bvGKBcP33UpfHort6VvUnK1oDp3PfTVc3H9cFBwcAbhx9SojUWvEA4QCoaw8aDh728npdJvAdkCyWp",
  "key35": "2FTe88rqEDAaa47zr2GkGvswfLtLi745qYSoJZQFKxQCFA5QDbrmT2wrVSvBUigeM89EXG3aDbueJ3QLRRPYpMuE",
  "key36": "44rm1djutKe7pDDMpqZHHbUpTnB5YpxoCAnDwBcomUDCj9KT4aQZLNvcw4UxdGThez5shoxbyKwM81BjiMgBRqPR",
  "key37": "4sj3PM1gYsr1H9sQJwmn5BGce8k62aXHU5oZxwrVDnNSh5dPeRMz6EQywhzgj2dewUpmQwqkQz9eF44estN1ZSHP",
  "key38": "3h194f8i6UwmwvvbTbQSyF185K7NMSxDb7r1hHNc7eBuXBmuKYZ5QhqyfPuL565fz7KAzrsHKa3FpuVsXWg3VVPP"
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
