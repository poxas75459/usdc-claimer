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
    "2zLwJnpamNY9xTCkXzAAH1GVz2q1zJ9eT2eYYTtgZquZLmtQGJyEscWdtbSabdBrQgDtdsNZ4PkiCetbWtug9Agj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q5ahZMMbPpkES6LsygHtsTzrEsUCB8xPXduSN1XZfozaBCV2u8rbBLy1aW8WyYDJ3h1dKNQdRk88YYsWjPY2Cz",
  "key1": "4ntLNZFuqmcVZ8sexDx2AqUYHRR1yBJepE5DaX1L9tHkUXVmfwcZ9iD4BFVHNm2jS7UjximS1dfVWbuEcBYB6hgd",
  "key2": "57C7oCQUtGJufpytMUoBGCAkUeHWbSB5ydTwKeUWEPZJb9GUA8sv2dGwWVZrB7KTdJwWUnLnQzK1zBBdoxbbnaGz",
  "key3": "45zrsw7arj6qryZ8xWXPTz8Ri2sm5vi81Nd9T7pQM1XZibQFizkfAJWqtgUBkaG3kyzRV1Q1yhnDcjoTkNwNfPUx",
  "key4": "55zgt1W7higprL36jw7EcKocKoPBKmyHdSSrHJdp5P7tGC9Kw8tvdh1F7fHVrzNBWf4PkMuS2w5AS34PK9VALKu7",
  "key5": "2RmSj63KWDD5S9W7UqG9W5whEDT2gntmcKa2coBPePPsi64ZK7v1cnianKQe7rKKynk545nQAwJ3gjpNwP6p7e7s",
  "key6": "vqm4Dp8TRpzEpbSXJGmVmgbmeE7jpp7S3cHKX2fBZdPVYqbdrvnFyk4PN7wvF4pAHzq7B6aEGczA9qioYm6nZHS",
  "key7": "5XtYeUf4T8VRQwfvY9qhdaUvcinc4XKKA1LdZkC4sG7nQ9yq4ER4e6EPAJbFjyZMRWXpVC6o5QtZFHpBtUsxPfXC",
  "key8": "2s2dVBk8bKWFjNdYZkmXXFVLVoMBHGcCTj6KTQ2Rc2eagopMPZ9TSgFVRx7ohfCjwjxF8nxyDiUEydS4wJPhXMWq",
  "key9": "5XxjpCwdgafaixuE5tdnWL2VeWwyeLaXFp48zRrpDMNffzZB2SEjqLXcZiC44JUJ8dNnLqjx6fC44SfmJzzpzkAB",
  "key10": "t5E1s5Tv8EStarJ758VMRmSS8fjTgaTi6VekgCXBSxk5YhYDNM6vUA5hzPVCxJjSVcpRsabfVHG6uPGZ5UEbLCU",
  "key11": "55ejL5mVMyen49ztR8ByZQhRpMAEZmpNHsAQKjWmXMJMMDnbGMU8FFyjgnx4img5NNnM3Hodr5mt6r1t2XS7ZrdZ",
  "key12": "2VyDWmSfBSHDiYmSDifCnS3koiU9YJeyCwCBZ1Zm2hYNCPZziEdegWAimVVPKeGopt1tHPcebCzA8vdFc8WfZU7n",
  "key13": "2aTbP1cS7c7uS74MJNtcpptstJixWNGqwFxJq3hvvUjrdAVyvdx1ve8jtegTjk6Xzutoj7t2rTU25ztqB3KWuzj2",
  "key14": "5DhpeJtoRfJm21ztVUKEc21xmw1jPQgnRbEVFpKiyXm311kLdG367eLgoyWs4X3pxWKL8ZGcNemHevQ2Geo7fPn4",
  "key15": "5RFVC5o772v9SCF6V1edNmFaaM6m6CNjewVyUQFmttCzTLpYjrjugWyf6S8mAtbQZUVtk14KbdxGg2J8fmcBfYtJ",
  "key16": "4i9t5pdq5hSKUGdzLfPvFV7x3GzbniomSBoGcS4q9demBzFgdjPzWyz21YJqDHguNEDyJkytvsuyYpNiHY9VCuML",
  "key17": "4EW8Z1FtUeiUtQB7G7XTZkkZjdpvXWEytVNzqAMDk9secUZxFNc7qGWsB7SVnugkHgLe3LZ3uh5RkiX1tNQj4z77",
  "key18": "2F7qsMWiStdPysphWryKx9PEvkrjHx36rYGeVB7V2njQkkvUUttpdA7PuKyR73UdmDGWgfW48sjNAavkzzL7Ps1T",
  "key19": "434SWbfyDLjN8GCD3f5bcWK3QPJZMhwJHeEagghtxwbxg8wcXiQYg18efG3Nrbd6ETvpxrFnqp4w1vanXnJDbasq",
  "key20": "zA1bsphB7gAjqig2GWByQGpBSKWENGY8hrjuaA9mNHGrrUivSonAEaucNxYfh1bakKwtToMVqWXPm5PB7i1wort",
  "key21": "37GbtHtekGYXyM7Vm5atekoQsBdmZJbYjyydvQnyb63E8ByMbixv9vtpMiC1EF9cSR5LMrQNgvJKh6UxP2We4Cbr",
  "key22": "5LDRNRWvxayWdzVtww7mQXqNrEhZFwWvH8UA8u8wHJh1ZiqfHF2vYKJwM8CkBnW6PgLYJeEfPA47vU5y3Yt2Zwgs",
  "key23": "5GwmG7XzxAnCiU9NgJMs9SXm6zVG56p4PiWFddnaWApC7cbxn1tuyBeBVY1sUNJ52cvFV6tUCfPMAxtWo1JLbz3r",
  "key24": "3uSVVbUxJatj9dr8uefTXQnR9g9ME6cnST5ghf1Vq1vcfM1PyTEVpjL3Bt79a9ZewhRmadSaUDEGjyN1C21buefT",
  "key25": "5J58YkUuvEVPQVJVc8PZetdSHtSEc4Vu8bVagH7sSDHYLUWrDjZZdjAy4XoaVbNewHmaVKiNXahnChVPFu7gcusT",
  "key26": "5suDFsBrbGvXh5sUDUVtu4BHtrenWXFt7mbw4ZbT1GbMvjuS3DsfuirR3tfWDo2oGhhRPKU5GvgX18U4AFZtKK5k",
  "key27": "76BvYetYfc3ESV6bXR7oXjBYyN1RgKPnu5gMaEhVU7722AGCvkw28sHFsenNA6B9U1d2KAizFKsXJ1udCDktj5M",
  "key28": "mugPosTC4nJNUxsFHTVog6hWMt7pTTKMMuniBAmZ4NEjKdhyY5uFq6zSq6pYQ45fNBdDf8webzj5UMTavuCqdcE",
  "key29": "5xK18gmDjA1u2sqZyyJYyJFenPNTtyVBNzUsVxrv83WBr2bZMbfSq4tkkaPSwf7HGUcnRTNYmNpG9kT2dZTTjMYR",
  "key30": "2gmtXG6obNKV9TKFTdZTTSukaqFj4rD4JUsa1DNru5yoK4D5xb6qBWo3UgYboHZKW1J4sp5pdiPsyxZ66teX1eZH",
  "key31": "3CGTvEUnrzaSbJyQwScYfTAND9dAcjEZQ5GRWQAbqhiRJXqi8gwFSjjeQuqtMrzFvsfqhTgDCAsVmHnKZbCoUZk3",
  "key32": "4xftKFYVJYnMcaDQd22uSZ7rnocm45qG9FRL9ETEys1jE5jTio5J3ZmsxrRs9ziLXpno1CMEXPk4PpqEVMeDxnRQ",
  "key33": "2Pe2HvRwxc9fwFyym4tTa2e4dUrxkqpqMsM8Ag5rbNF88UAr48hTr8MFcndq87tqPi34QBcMVgZjvdym3vS9cmjF",
  "key34": "5cFfwYaLm8qjvAAHEj1nvMbF8WcGA2vwGrBX4gGtuePcJLx169mueEAnMGJMxUH7Rk7HJr1ydz27EmtQ8KWEXcA3",
  "key35": "4X7jx6Lv4qE1gy1KNboyqBN5dbUMTN2QhCmMM4BwTyUasE4nCvgepePTBP9MpE5PFGL3Q5KpUMYvpiCyzmPkPkSc",
  "key36": "3LjZLhsPEUZcsz3aZjbi3nouUN1FHLrR6scr7ux3bGiT3dFsenHKkn3gyR3uCdiUnkNynC2e79xaj3Ao2Wu1vcaA",
  "key37": "53z1jJVCJ1VfFb9ByjqPaxiS8HibND7748QmCMKhuK8eJwjtGooAcm6c9rwmkczPrGDD6GeAmNHnC5iPJDzZ9iKt",
  "key38": "36ZXcRbxURi9868ZJ597FatzDAFsQNaFoMobhrGZimAttqREUEpEBJRt7NPt2pznzAsFAGihFoxq2hKrCkxRYiBg",
  "key39": "3p8kd8Ez5JnSBKcGzvmB6W1R3RURtwoq3xEhGqkhAXJqpF92pLtowVHLXrNYNumKtx45cpZyjEHy2GDkp3HVEYoo",
  "key40": "3NTqr4KUicQ35Evi5Mj14GxxoZ6F4KoYrsY2ALupTXXNvpvdiR4tQqkn2JMxPBo1ejqqSeD7Z51MMv2Vh6JrWNqX",
  "key41": "2G9moaXz4mDG4pggnVP6VQckYB6qDoLT3ePmeRe67GhyFUbiHagaqm4kuTvmBRgxrNkTMqzPXwRSQsDYnMzpG6Wz",
  "key42": "ybcdnir86eJTsgCbpoiA6a1cXjkCtdJUs81XB3CvEaapeS6ZgeAegPiTHYbLCAQXJ3Ju84XvBaMYo9uKnmrMrJK",
  "key43": "3nm7XCMxu57HJY2C5kecwYfmR9ybxCHK6AQumyr7hYiuTdwZ5h6fsnh18gYUYZ2QmRU5Wd5hqxCKMyQ4myXDTvu2"
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
