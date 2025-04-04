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
    "vidZyMoK5THCohF3XTTJhu1JaQHpvE3G9ZoMTAu4XhcMfc6CfF4G3o2auyUYaF8sbQzaTGRLTtHkoouPGzKFMfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pwVxmz7GkbvXfBAjNoUM1tKAQSzRPMyPfr81XgJmdAoedgysgAuiXFVeWjX3cyBu8xNSm1sNVsLRSwvjd5b7BaT",
  "key1": "2Fts848dNyPxUfF4vMLjWnxLZd32yd9dbzshJPD9nHtn6UaebjZvSgt9zGRQTpMfGTPYaZhFEEKDgY33s3MtED3M",
  "key2": "5d1XbhWjMNs13pa8FQ8hgjR2h4juR9iiwJENHRnVp17rGcbbYGbwWM8nGN6r6XD5r6RH1ts8Yw5SWm76TwxF4BoU",
  "key3": "59e3B47moBkZbSaUKo1xyaJeVn1Fmi2EdfrLTDLuLupftnWkMT8x9FtXE7QfXYZdZcVhKodAZoTrSGZw5SvZMQGu",
  "key4": "2g4DTnSbgjx94g5TWy1QfvV1UaZz3TiEUt6ddPGb4MFUdH5y6JpFLCvNiP2wkg8G3hSEh1i8FF7GqcrpqhmNtWVv",
  "key5": "4LL3snFHYv6jN5FmRckh8ejLLYYLrnV2N4pRvSnKXNugANNtxwRNYHrhdwrg3rETmggzigsZ9xhPcCtPwbhapLG9",
  "key6": "2GmDiSwitbfQx8D8PN3Bf9u9vPpB65Q4fuX7sjZXHn5SoB9QSWTsJ4f47J315gwMx9j8zKfdLY72WhB2CsPm8z1E",
  "key7": "3hF1LLm8oXVr2PuJFvEsGWnwBYA37uLSU73Yg7s787GEpZ523gQsyn6GSWxDKCXFBYzs5YRNbyvVfpGAfU7cPFsM",
  "key8": "2AAC6sv3ZgMBsxkj53pzLKQpBH37NrmSwmJcr4MAz7TFK4WNgGzevwhaUGXteSVExMpwazGo2tCTw5ybMDzpLAHA",
  "key9": "8JnziVuK4WU3kvGRakWVwsf1RkSnp4LDbDdAAS6jGZi2ivoHuXsNQnHL23saMoaTZdPu8rw6jt67mGwyHBa7Wbx",
  "key10": "2ngXKqEXszDg8fwxVF8wJRxhwfBKLwPMLJZXP7WoGFe7hyXcNsSWH7Dsnp1F3zLZ2M253axVLueihZYh2fs8EM3w",
  "key11": "3vCLvfXEpghoWiXxky41Tq4o2vdb9Q8iAmux5aR3RKifAYDsL64igENsCahbQYdepvpcchTiNEkuFRxXbc49s2Th",
  "key12": "641NphkW4tiKi3SP77NZpsNU8PQaszMg3drfjm1TriJQfuGTKEqGjpKmpD7ayHZAuiykkrr8wa1xyXLJJC12CMHe",
  "key13": "2oa82us14HbTVaBJ2eF8EwqPAjYXJr6g3g5Lug9aDQTyKBjGikNT2caimb4RNMb3N41QwWLLkvWpaMj195Ja9sNG",
  "key14": "3ECNSj3RVWxv3z3UPU11EpLZVWwfNCc2g2HLjf17WydWwTQaQreGytXexP5trytR5muse7QkrmptT932JooXBEUV",
  "key15": "5NB7XJiRqqiAQKQ9LM54yqSLH9TeJahaPJyBDfw23RxQBEMs1zdoVfphcfW6dqfSqpEkwzxY7fSsow3nbPv527Au",
  "key16": "4BsaGqVd9d828FcjEsntejLWtxj24Mygta3Jkw3pn6chRrowbLzBMAiErhS5SRcZpTrxAj4kj2mbqumj8diDjaCy",
  "key17": "5mw3V9WHV3WcEFQ5h58qLiA4Mbar52rGnDY5U3WmkotgopB8SUkNneim5f6ME2eygGVDyBNxxVo2VHXoZsFsc6nZ",
  "key18": "5TEKz46pWZcWvJotzda8mJCwkXnqqjDdepQM8VbaHtHD6cwQ1czF5P99Epzw3DCRUVqoevHdAbuGaoz2c6KMymu5",
  "key19": "3rdVZdRatUXTir9AwU2zmujnosDuKf6rtyyUfgwarSJa5sLs9ezSokq6dRVSM7WJFoM85NgQA6aAL5yHfnWmMEuu",
  "key20": "3M6idSsrXhccTVih3na3kAK3vgnbdFCyuT42LgEDD4sJXE3FpKbNB2GHLdS3vRWSGMisRyhyx3jWNhTyzAFBmFcN",
  "key21": "4B5vhQV94JNFKs1Jj2khtd2vAmeevJZ5j7k978Du6q6Q7BGk4nSskYoq54wfjFNJBi1C84xH4gXodtycpaC5zZYK",
  "key22": "UAAH8Kab7hWsyoooXnJUMT4t5BdtXWRY5peM1RXbPDS3wroHjRJEtTxsCqVLEQxzGcL4aS6ynpk6kmNrNHzGT8C",
  "key23": "3caLNitSGw2L6W1adxNQEnJDbFUVQfcRHzQi8PR2Lbxvw4WZd75QezciMXCE4HvUXS4QhRV693AwEAdfZVJNG4qL",
  "key24": "wckLu5XAgHfchPMYc1air9YNzHpjeRdjqpTDvY7kgXRmxDRSbTd1sa6ptmgfU9s4TWdwcYrQ1edBExGCNhh9Mjr",
  "key25": "4LbiWcy4U9K2tf9cmUczM1yRgBqWA4JLTLGtQnGg8FkLR4CkRW65LUDkKgeaZ9DUxxW8q2JxTwQAPe6HttbJSJ49",
  "key26": "4QUtEVKh9FFSVLnqn5wiQunoAix8pmGahZ8Trjk1nkKWDEz5rSTBnPr92bYNN1jj1s1f5vR3cD7QLd2Xu1Hi7KCX",
  "key27": "4N6UnhtqSNXzQWgAt5zKV2rKzpq8PexyNfseroLBXGJP6ANrGkMERBAJ74bwJGmoytjsMe1K5t9YtCfzLTadgiqM",
  "key28": "2zYge7WrzbChqRaM9wTFbu1zk4kyZvrE2Zp3LAqfj8qFCg7gfcD5KtAN8hCBop2SzCyYQzmTbhHwrCnHyouYJfdH",
  "key29": "2SXxMXU2n8RbGhhxrFB7wR8GJmWGxMjCAqcqbyCRaHZHuKAzvv8ZyEprXQ95CS1SyneBwPyjxDG6w1i2h5oRvJbZ",
  "key30": "3aqT8UhTdLTvDrdmC9cWDebZgg1TVz47EAkKskn9xpKmoPn5rAEqoFFfTyvTCoVn5Kxw8MV5bsWgbbab7US2cHv7",
  "key31": "U3ETSiJoGx6GK14ckxQVq6X3JFGiqJmC1PSo1PgiEqL7kpZZxKPiMZi2yarPvQ7s7wqTdzWk1NWY7UoNTd7N7Qp",
  "key32": "3aG9qZEkmGZASDewjJTRX9wdVf35tsXpjmmRXEoc9PTGQx25kUGGnkHCZ22fHLbuvLgytZoYu39Jc61ZQKATzeBA",
  "key33": "41ipQFRvKqEPbNY4BNR6acEFY84rd9hK1yV1wrAptqviWtG1DJmyQpcGK1WaFpGijDUpsCZ8DYMW74ceAu7Dyiz2",
  "key34": "5aqSZomKxJaY6QW2zWtWQ79iRd3cYc6rz1mP3AjekECy8evYEg5bYkLFfgWQhQCDuVKp1vJCvP2qnx82S9hgTaXs",
  "key35": "52bkqHWMKDphM6EtmFJsaTbgJKwnRPmrV5oYn9C43GFyZSEcnVf9WmCCjFua7KqqyEo9JKGPuhQB2m9dRC6YrH5v",
  "key36": "31QCE43JjM26bEQDyT1dRuLb6a4pDShLPYZXp14ap8rMN62eMusTkvv7Mce4HxQGih2pNGLWemBT2f92prfWKQcH",
  "key37": "2ok6mUJd4mfYixjXYfcqxxTyG3XPmUvUbGfD22EWj4XSjiBozu6F52CRHwimjq2ZAnarh8VQsShXZRJGTSwpnkvx",
  "key38": "3sMfMpqxzjoNq6rQZ14W8y9gbSA1WtwD7BE3L5PHNg2Mj6mxiHdzeC7Dm7kHigbk6jKtbKc1kqcD9CLnKUiTAX2A",
  "key39": "4c4EMn61TCy6jhdzpmC1gb81wmw5CB6KMPtiRfsmrfmeomavSv1HDaZtEYfwmDRjrvzJLNoa44m19peY883LSQ6X"
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
