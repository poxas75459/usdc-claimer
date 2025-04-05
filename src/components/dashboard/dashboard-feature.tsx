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
    "2oN1hJRh16VyR3nhboCY2Mxg526B2ejjBjTbi8kTDEsMbpY9rReP8LsimKquhauSqeqi3T8pM85pwDiGPDaZ5zgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2V9B4B6b1aaTjdHFyV8k5ug5Q4eRSwAjZPUj2UKDAhmTSp25miNZedEyKs7bBX5ffaRNoQbrXrBxtXGdSeA8QP",
  "key1": "3n9vv329gx1K5T4a1xoCKg9F8fNN2vCzpaoYK1xJCnqziXP9R8P8bQGftkP4sgbYxP1azimx5Dtx5zQVPrBtcbAh",
  "key2": "48t5s93zZKUGEQtnrvWir5J7GPe6syzQr1oDPTYcZNna3rQk4kbw8CFLTq7jECdzHfMVrBNiHfobjNRJnNDH5V5c",
  "key3": "Xcat7Cdew5KuBmWFfKgEsy6PNjNpG4YDHUGA6jwmTusesdinNekUSdJnHacjLpXDYPdBdaU2YaoQttqYpoj1X1e",
  "key4": "5kB6fZkjadTEUQUTQ4ov3MqPUwdBNmKsnmR14p3DAUiSSxm3LPtopA8nHntYLvBvdavQD9vm6nVsjeVtYHXmRfwz",
  "key5": "3Q1awL3E91VKxh9HsZCYAevJ4x7Pi1cJVd5pgc4RCGVxTJUWztEJ8ijEm2hUBRwAvziFTQBZ5R1LwKaaLGZWWgiP",
  "key6": "3uSXTXHWSiiQY92Dd1jxEEmyXsB8SZQC8seCaZfNABF117iRPiQPyfgr7Km1kPWoxLu8YgzNgt1RcEdbU6ANLUUf",
  "key7": "eq1gDGwJtL6gUZeKG4RkcSpzoeL6rXZwFko9WSGVpTzaTGxVAMgewYp7Xp96Du9XN5ZDH9i4zviamPEqQJNJ1bC",
  "key8": "36deyMkpGqh4icXZWFHeDxjxbNyArakvV2guybEUgbK86XYcD93e24RZpoRGaBvdL3n1JDBP92b6HGYGhszBUPwf",
  "key9": "Aw5fpstH3AiH6TTvNgprkkdFArHDeAzWGUaWQbuq3KQCFsxTPSxtR6AjQDRUDT16cbis38nfpoAfJojUUHnTURG",
  "key10": "59URQXXdhdqqt8ip2SzWNmpHTT3HLoQDpYdbNhYeDpmsbCcCVBN2nZFhSUZ1jiabRedZ6YsSe8kGQ6M1SKCTMhSp",
  "key11": "4yHK9M33RUsJa8g1LsDiuyV46XbyqM4rQSMLSfZRNUUzeaBEAwZ8fMMrWBFah6smAHaeUnPTLFMNe9rDMoHcS6bK",
  "key12": "5q5Tvu1yjACdUsVBSUMG3DoM9R3jgEAkaf45bUQqDkbUtUXY5EGh9C36WLHJni13C1cXtQREMd6hAxq41sHiCxeQ",
  "key13": "4hQjsaHjMpS8Zkmgaka1cxisn3NW5BrYwumT7was3HQbPTVJ4HgZCkvEPNdbRAv6bkbMQBL3UY6t1dk5WNX3UDSn",
  "key14": "5yNdWPLDzD6yNpLpNs4D53gRadsKxp13oYpgGL1dTiVwYyPdx4TdvvWoa7rn8Xxw7bfKc37S9EVLG8bZ9CctZeRk",
  "key15": "2HcoPbEAp1FrmNuEyXoShZoyaAunRikofu2sX689ZrqFoN1zGzfHBpv4i7YT4qfm4Wf1ngvj3CGmbXqqeBd217Td",
  "key16": "4cTnthdWLs9tyq1Z286ZmiT3xZs6kNFRgNHTMCc6h9qd5oqZXjMg259ApqPmsujfMt1xhRCNQwWow8oDmnpHxeuW",
  "key17": "4a7jcREcUFhPWtTyjL4yMUAVwRe6rY1zKk7E97jhAN2HhwrkvyAkNxnMhCfpQiKaGeNdr9eVSDsMXQacPFGjMHh",
  "key18": "59igXvtQ5AMYfkpLyqrjPsk5E11NzyUWjU6jNo8wzpXCqWRHicHE8eh4VqFTjG6zFMGPQkRokWMjZha1b1UM9UYQ",
  "key19": "5G5iLaRC2SG1D3mGUP8pv7Rd2xWz7KG6ZrhhVfjRi8JApnuursU12AynGxrnLSQogG3C76rPhbHyemo9Hn84cAP1",
  "key20": "xSyqFXB5bifRT4GfErYi63FMi2EZ4H4zqqELQcFXudNg59XZguSQghL4uXivxrDPrJzrRQ1gvKaLMXtpEJH8Ky7",
  "key21": "WjLnptuvdFGB7XVnVsmfirX9DBYECWiX8QQSqwk9Q2qiSvuhVBdqLMLYF4hGyBS7zNjPfasoaWkZzhhTDazQoB1",
  "key22": "id3NL9xhMzvAWjkCJsV5SCejETSKhSHEdzkS1Mroz6RC9JkJDh2j9sEJ7rcPgB3qqXhdUM9Pep6w11GDMQMR4pz",
  "key23": "2z49qrYvAYgSy3XJ5tjmeFMA5Aqg5UtPP27EpKZNjnthhcK4uVE9esKFNyeCnAzkXZL7fCrG4EcLBwpowZwQWwAt",
  "key24": "3kqwh22i6gKtKqgpHn6dsFgEZmb5322Y6qnwdxbCXarje2qRfH6HxmJ2TTjpaQtXuWNq7xXHWeArRCvtCatkGMu5",
  "key25": "2TxKvaFx4HfMnwwVBNgb9xMigdSFMiEA9usSMXsbsMiBafWVt33zTrAKXeQcN5ogK8W5t6i9s7PDigLWyjtVEBdi",
  "key26": "3EBNFY8AD1rGgGKrAghwvyQFf8icPfRsFUtQ3zttrG2Mguoonsu4tcmS9QPKMWyPSjpRGVjHaUxHcaFKz5Dgf1mr",
  "key27": "2T8SHgpGEY2KzGvVmR8guNHFmTvm7ooitUsZCnHn4vKi9iVr5pmf8WLqbxhQ3s3FRndPzYVTfPQMxvR7uTpD2ByM",
  "key28": "sjuVt1qiuf2r68ktjAtchRDrG4zLHfviEVaZJS4rWFMef1jEN5LqVmN5XfudqXC9rfYP9bXd48vmQLNrfkdPQj4",
  "key29": "5qJXZRcizMPM8zFCpnANyqdysduYoxkBfVEiGhefAjPZEMaL7ht5jrj2bck299QyBTyw7v1JhsFh2KgmzdTu9hC2",
  "key30": "42vuJTsyWzfyGtJwkqn7n6EYHvaisPyF5GbCRJRbz2bwpcmbbbGwhDh3rSyoCDuou5eCgbwBDcLwdKx6xWdrGJ6r",
  "key31": "47gur2SLM2pPJWwMh9rRumJQTuFw27bXha6S1xedqQjyeAMmEmCv8mU9pUFRuVYpAZDc6Wx7GHCScxvPYUgxQ1GM",
  "key32": "2gKX71zsvDiRWdJpDRK4CdXKUYtSzaZ2WdWGPtqXS4Mrdf9ZA1gcqUNYDLpB67ti1SMuVFP4SH16Dpn6v1ZXt967",
  "key33": "5Qug28JfX9jV9MCQSx69DKDB1rLAfaUN5mA3M2ce4CDffEK57aBDAEb6xV5mFzh2gFz7kAPv73dpKAvKw54bh4H4",
  "key34": "4CFD9vdgL72JgbGFWbEbAxmWKkdyeGpHVrMRGwP4ah9GkEgD6TMWdDCxzmockVwZdpWK1BRTVtLpNqUXkqDBy8N",
  "key35": "4wPSNLb92evLRmvxF1WsrfzZB9KE4ZW3avdjKRui8GwieQrbvacko58xx6YbqYkWRfnnsTVkTTzAMGpFr3Z6XvB3",
  "key36": "GZotsQ7ijJcBGf518vzsKpZZxiwJs8m1g6BprJ5SqBTh86aPobrUj4biHEyFU75dhHPhdyU1XjRqdZHPwDJka6s",
  "key37": "4HHkkCN8WJxZVVnTqj9o3EGAgpmTt3fmBJGUZyxT1rNA29NWpX3vciY9gaToKNpNex5pTks7pGkRiX1qDk6UpxEy",
  "key38": "5R3KnpyjCjxZ7JGaNsGzKAXL5NsXiRoxtzt9LgwbaScFFGA2zawoT9Ch59TkWUVcoPSr46eq2KTBJAqSZ5jzSH43",
  "key39": "62a7UUuvWo82jf6d331XJw1qWUSSwBAywx5VvktVZ1YZd7fhNhA69bRvCx93Q5FLaBPduo9bX58tKCFydSjuhkDx",
  "key40": "4sQBpJdBNF4kUddhyvmCC4RcJ8JGTFZRth2aQxLsoTvVEKipzfm1dw6LbLn7K7FzrnHqdHMrAcmr3zr4QGu1ksX8",
  "key41": "3jJHSvr63SqfAd6dxgfEAZQvt1yyHP1rC26RkmxqEkP4kWcC2YrL9RR92BqZxmLPHNtvbnt7xZvSyUtpkCmY98Kc",
  "key42": "36EzksCXCVLd62F7jECSBi7V1jSaycP8Sk4wnufkhRzqPkd9Rzf6iQWNknsBUtyEYDp2v2jhtUESADDTeZjqHfPW",
  "key43": "3BKvQwqejg5zZBR6MVoP52FbvKqmiL4VVwGUYWGQew6aLxT9NrQSLgHYxnexBoDjRFoZhLt1MAffv1Jsjfj8wMEV",
  "key44": "4HpLJr7NiJWWTduTwWvQrR9cah7Xw1bfxAkF6acUxDro4Mgt2Dr3mTJy7mZGFFBYQ8g8a5Tv254bP2mf4x2SCJ7p",
  "key45": "4j2enx6AT7U8bDjyUft6yJg8ZJ7E89qG9sUE26DQUoMjY6Gf3eypigoYeWv3F2tHrBEcvquggg2yw6uDX4gFKh58",
  "key46": "7UDyWwRsz21S6sYE2LFq7WP3GKgucSek7dVHuoUDfgUrKNgLfhvVp2r4k63CHxKXKTDH9FuSyEC5sTqcRjgkCMV",
  "key47": "2news1MMDwtfm5sfqJfJRTAM2s4AUXiUJNE2VKtHYrGzMKjP1ANnTQ8ffc5dv76AHQEg6nGNXQPo5Gs4n5cvjV36",
  "key48": "WvjDTvssKJJ9wStg7wKrAw6vFzxuTVbGj8caoUFtFCSNFk2ptHDZXeW1mXpQBh1jHSG8VqaEH8mVk745M9Rhqds"
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
