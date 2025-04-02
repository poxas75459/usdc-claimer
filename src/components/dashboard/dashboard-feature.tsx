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
    "38L3RCSVNTahRtm86AvDHXnhfRmRn69fhiRysKbebnT76bdB5YU2HRzBxwXu4eCmg1sN89CUcqDJF4uuhnGSBFBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u3YijnRzgwLzdwkXWCBE9muCMD6oWjU6GjBmx6iBAZrv6dUSYCdyMGGaQTWqioaKEnoG65bPxRFWbWCTrLxFVgL",
  "key1": "93gu2TS9ReYNsozQBjQz1fSfTRPPP3bEwEbBtuUhida2LgByu6nFsJfCG5qn6fY4b5kTQf29iW9rfPTzYCYMwMD",
  "key2": "4uWLTZXKccue6UfEfea7mat1asYXmAqnXC6dgbTLvju8uErmSSXzD52jmcjKV2NBLS5jAXAfkDx9PULbbAxT35Pu",
  "key3": "DLi4ZNPpnZJAcuEkDChVHQaPijbVbJP8cdgYz5gtGo1oPEZxhEEuVmS1ySeh888fkjvXE7orXWiRZ1kuYEcXyDd",
  "key4": "4fb6Po4jT4XgdLRSP3Z2H4QC52Uy95mFQcMe4cpUKXWK3jXShxq7UZxPKVjKELg6f9NRYaL4hhaLgYofeXCDmGxu",
  "key5": "P155DPS3LCE2gQj99sfSVQyw4cKnLJudPZimUW9R3teKqxbvbzSFLYMqoddK3vX9cmyeZLpxr7RE4vJi4dWYNeF",
  "key6": "51EpRB2oSky5Xv95bzE5fKnDtHTQWW34oEMLyk4BrCkYZyWjDMbH9szkggHjEh2YjCv5jYm8NE3GVCARcEFJyMm8",
  "key7": "45A2GhuE8SF51Bzgei8YhSNT69SRVpZefptxCafEbeFPKCvjz6vgFLQjHZfeX5rXuqkofLvMYtDA9J7y9z8UtVtM",
  "key8": "5hwAeJYCF9oiwEmpizy3HLvVhsRPmjQgL986Erv5UDP2ugDmUzTr42y4JhWGTWRPAeRsmzFasshcwrrf3jJduwFu",
  "key9": "3kdmTfXsmHLpLBmh5STqy6Mdf1VX4TQHLiydsfkewC3ncXawTrgNn5A49xDvVMdMoJ2xNMDnKpAfKcasPwZxNwRS",
  "key10": "5sudnSvMENS8v243ycLwxppik4nPrTR92nfg5LZvGbFqE6dkJs42pC1rDb5ig1WYXUTiQ4CKDBCFmcJm3v5BCoAK",
  "key11": "3qf1iJUXSVCBURCLQEGUiZejGv9ELQbxKTVqLasqhNF97Q2u1zKDFDPu4XopmiCk1eX21s3UXTT4jMWxLCidBjNb",
  "key12": "u4yqqiW2QcMEiGi7cdGmtGQ9Qj6n6dD3c5xpxtHnMiyBQPTJVmWkH2zYSAE8RDcnFw5eP8Sf5rB3B6ou8vTGYRX",
  "key13": "372LiBsJiKGaABLNn7LP88crLdWQ8ufGcUgd6aQMhVMowjaNESJ9TtCBxnjx9YkNVZ9H1DTs13gjpq5YtmUh1sBS",
  "key14": "4Zx8Vk2mi6LmcpfTSXFMLKwkRr2yULAvG7c31421DkvXEMqbuwQvT3HzXraff9NywbEAWe6G2PenTeyvwK7jGCYU",
  "key15": "qHb1MaeEuMT8HYkRLiqmrdkkHKHW3jXVAGN91TaSaNoCeCGYDkQTepGsUoAXYzMS5yJgUN2fZ3w3fg3bycMBrjk",
  "key16": "2ygN5hLLxKns72PNujernm4GVnTWpGkCmZKgN2pU2jWFyvqRcm9bSb5Ygga23oGbPg7k9dMEARSbov79iMzCeBxo",
  "key17": "2iCR5Fr6LcMe5AD9UUMKSLsh4jR59HcDMm5Jij95vJGGHuu7DXBdU7TWLRs3fFijYAq9GW7eXL8jC3jEzwguH7wu",
  "key18": "BJ6P3rgGihXHyXW4y6uSeVEa4LxeMTAHsxnUnsVBKHMDRzty17zs6rsGhL3pDrngrB7H1TQwky3shVEN1NhYQTH",
  "key19": "K8r5uaRuB7zwfBZVbqF59htoDsiAzcWeWkSxQxVjrb2DDf1PdfwzwGPyAPJkMoVZsrM6DGpdk3yXa2V5q4pZpBB",
  "key20": "8aQTqojo54DgmxNMtKy6XZ5mapP9MaUTd3WHGijQHxwHvS3jRAcRZUeLm8ZLVGh6mRetPsSgPcGTbmN55FdDKZJ",
  "key21": "5cyKedFEq4zkWjr2RBeYM8XS4832YqMjExHScsnYmUyRUvuEGfTrtoZsMB6FdwqaNETV46vuaHrDYs9WpSwiD6bj",
  "key22": "GjkVF1s6c6FAjBQmLP9ozYtZukBLtGhtGXVAThep2cVbNme9d9QeqxFap4pWcmVg4CDXLhZbjK3XqHVieM1s11o",
  "key23": "2Dc44Y44wmUpZdYazZEE4qYs4rDCeTtr4YSv3RqPc49JVsWqAs7pFPDdbATWr4gnno2gAZvpjRBVuFwYy2BRiBUr",
  "key24": "43QD7CGR7kG1qn8z2WjDHXeesRVfZNALysJHpYyubQMrFHHow8RxKXafVMYu2m2zt6eEe2U15i4LF7QavLnm9tpH",
  "key25": "5LFx1nXuDpy4ZdyN88NypwAUXPJqfo3kF1CB3biyDrrKaP1y8u6biUedAcq26a5vLCJm6E9PgkJDTvxgZt2b68nm",
  "key26": "2zHUdiYYHQXx3t68RtZfPa7uoVrh4ov48tBfWWBNm9ZH7YTYhFCwDfqXfws4xbGuE4rfcUWeFDYNGEtTqU2n1ukD",
  "key27": "5shLLH9uiNim2bKyHmWJkLv2PT7MLo1tegkUNyetSsLnpSy3GUkQBEvh28XHoS7nBE4LewHjcT4pxUwdnpd8UbF9",
  "key28": "q6ZbTFd41bTyobK8ubTDre952T4qJvEQJ8F2W2bWLnFmhyWQxAfEX6ALubkrkmCLNiD8ZNkBjqvthJoaQ2L76Fe",
  "key29": "5aY2eH4adBQd8qNZSWCmtGzv1H2RvH82fnQkmqDQAusSwBpSvRUewVbYFgr8Cu5PPKPTqcPZgMNw7gp853QgEkQF",
  "key30": "4VqqY6g1Huat3T8Qi9zvi8JKxgphFyobbiAR3DveiJChekzPX8YNwTvgz1SUNFEdW3DNgdPfmU4cEJe7TGqhc25n",
  "key31": "22AhDNhtrUWiU9q5TxdbDUPx4SWjBRQXreL2eymrDYZJjSLK3xuCCh9GKJgGuv3skrWGKsw2WNjakbyS8R4Nf6wV",
  "key32": "4jJqoJoCocayZdC2vgf8JYJKLunR2uiWEChmFZURECyFiBaKrVJvbSZor61ovr3bv1HodqgAr8nY4UJ6vGCVEUX6",
  "key33": "5knkzfURKuXGzd9qwPqtwq7B4JReRGRoKZhLG5sYDpByBZbtR1Yd8JuMyf2Qs5qLMoDkhLy9gPzmFZgnuEFWnA6c",
  "key34": "5QgaSdva1SksHuBPJcnEtbLfjmCbYQxnZeaa6F9NWU2adW28w4rUq2B4KJZeLsWdBhTsKPC84r2kdYrD3X6FoBGj",
  "key35": "dE16jnXh6SdhiHTR3iFq6xaAEBMUu9BqsiJquonkSpW6g3wxVfttAvMeuAe52tqPW7LXkh4cRjhS4gAm3P5esGD",
  "key36": "2f1uPViRqQfthniJDXJKN77rSNZj2tbrYA1pmqBZKbDr8HA4bARjTDbTtmXZqYmF6HrUd4ecudp9gJLH7TmHejtD",
  "key37": "45bjX22hTY46nWuD6Vp34ncALBoep1Kjaj5vrfoaEue5PXWYBj4Y5BhjNye1wxgjzqdArRTeffHZm3xVr4TjFfDk",
  "key38": "3vtYNNeuxc29nhDKBRzZ78fHBm4gDgKGQNX83cPjeSY9LSrk4jZ1rK11Vnufjm1YHwEJrCbRGGvf4j7vGz8riBNx",
  "key39": "5LbB5vhq8kdJfrHDeXAZs9NkQz94XZEW8Q7xEiErQKSm6QtUGZkLrgWWBsVN8BJL8EF8yMW9uhVEUY69sbHcQxFa",
  "key40": "4oWX8ka2aR2zA4QrtEvuJz7XHq25wuAAfhWptYkH2PaSXCxCAPuU9bKXrintrE9sfmZ3t5A9zw9VHZz9j9mp8AdZ",
  "key41": "5f8T5DX8qJDeuHA6Xh8sv6x1ASSKghiuu6eJLvDTprzxAza4dt23FP394hspaf3RwbonPhk6fVqi1Eouo4NFQgPJ",
  "key42": "2afDJgjXL5aZFgNgyTNQD2nv2YDiePoBvPnuNE7ZFTWQVHFdHUYFNDYcwoDdThLpyovoYZswevNfMea4KDVsBUn5",
  "key43": "wS7SxX51ZrScbtBAhfmQScbuAAiDZtzC4xcRbSKR4cgAtcvavryHvYTVFKeSZAjwojhXxkpFHqaVu7LWxvPT2i2"
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
