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
    "kWQpnruuAdfiuzzV5xeWULisdEjb2E5K36BxvtPY2p7B1RSpiwyCAB8TycvLVjYhX3knri5XKHKuuMNUoopSRMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ufr93ri21RqBeXeCKA3ViATUmkb5grEK4VsPF7YdAmLprLvQBH4y1KKZG5uzBD2Pc8iJtAkayisxiWzf91AZS4B",
  "key1": "NBYDpEsHTqaU4JgCzu8rZcC5TX8Ki3n6sJiKi4KMRmEPpU8AwjYz5RmXnJVG9aSJzD5r2bfhBVeQPGnAxpu4WuN",
  "key2": "3J6tufbaL5K545YULCeBZbJoEDZ685VoxYHZgbq7QPkAM9rTETXRyAqT3w48fCVc6FEPqXDg72WhahjLMCccg3jc",
  "key3": "4woPzTWLXwWhCJdCho11brRFKxPvWqC37vLA46jsPkznFDpCfccQTvmnkU7RfJJDLcgBEnEwXVWtEDCBPNZdm2Tf",
  "key4": "5wqPf7eueAJrzHZJqZpNipcBdVoVeWDj96t2kTL3fbMA9twKdonWPVaq4KvB4gsPha7XhNEbPNwvHKqzjXPbfsG2",
  "key5": "4gcm18Rfb35wQEyzkFbizr5xZ5wfxq8NFxE3k1NZnDmux3JEEkKPRqnuzpMYFuXGz26pa7ut7CbkZpES5dW8qajK",
  "key6": "3jGETsNagw1MEhcRevq9m8ApPcPpB3SEPfzGq7qpunt1FxuRF5v7oJDRdyBgA9ATwj3XjzTcAgJ1esfk1EKJukLy",
  "key7": "bYM22zxRyiUtK5HHzKSmT3q3GZjiaLqsigYUYj1AYg5cuUsv9xBwjUDr9ws8sNphAmGQ1C95DnsWRpSnpw4Tzzy",
  "key8": "4BDisFCnWJMPbTTBf3Jado21YRmqTZEDAr6VhPMWrzMxm4yyW28gMAre3nYQjxX8jPKUxLssWy3aHTZ4dD6p9yKH",
  "key9": "4RBJFmFZn5nyf2cX1XsH3XC7HWYHyqfeaHsN8akJxn8MkVYhfjiSqjQDUK1hcXwGJ8ScpUZoPf5Rbrj4aAw7Sswy",
  "key10": "15psVMiUUnwv7E616GixNZqPdCfS5tpnhdSJpyDdmNkQaLfg5rmpYMvXRh1FgfYbcQH3BXd9F5biY2cLpD8B8YD",
  "key11": "3WYhFsi3Dgt2ecX6BEiDvisPTCPHuFfsHjxQ1zr53wFp4nYRBaVNEzq7bYt5aqzQEqaKT35LqWfpEAJag5YicSfg",
  "key12": "2Z5MFKiiLnc4r1es8H8hk9AeQWSqDmDNdeg1bgTiQF9ZZrNJEtsNTND6zEahFFdpMXDT4xYpEgcPrJjweaTY8r3B",
  "key13": "5k1hsLDSN4Mi1o1dJSGWZiDvJHRL3qPvGC9nSJxq2hLB3hNMRXF14JFFBxepMkHzj7hF2DHrc7trvEDc7ZjC13hH",
  "key14": "3sXPXiuK3ifNq4nXYK9dhEjAFcm8MQVLv22RYcaRebfttiUSCHLdHdW8RQudcVuuxh7o92rpeaMo4p9wWt5f1v4S",
  "key15": "3rB9Gjy1NypjJzFjP7rMZ1kz8UeLzsbDCwKv51shoSr5KGQ2DBeV68sWG2hz3NE1tfvjH9g2X5RbrWjUS2YH71Yu",
  "key16": "4pHUdpRRury3RwWB3mXbAX4t96dfRUmU4UuyC59McsZAwYmHr1BgmZEooyvUePWd8bxUPAmCjM6FLBR1HK2j6UAS",
  "key17": "2Yb2oChXMrmEyprtjyHPRnay5mGoWFQniSPqTbzjHUtum4xzRZsBoXXpp6TsXMLzu8GDYru7QLVoAT932xpmUaUo",
  "key18": "2mWZ4vDBFrsgyJowEh7X4Suq6qD6PC5pY4EuZREPmpMNtMkfQdeYrWMHPZmah5Cw7HGa9eQkvvuZeqe3BnQyGEy4",
  "key19": "63iH9Vs96VVG4fqhbL2Nn8HNSTYu7rWUnHL7h7KsggztWtfexPuHAPKJ5u7FKuqWwuitq7qDLxttxMkkjH5vboVQ",
  "key20": "5J491zFx1e69HcDiMHsFRgQ4WPfQgdqH6bhPShrCytURcajUPhbKnDajWPqgbLNQVpypw6mJfTM8oujq1XVpomDu",
  "key21": "jk9fr2shkJgQkV5g42UzkqPdNX3MYXf4G7HTfkQZy52BpPWVFiCgk4bnstGoNRVbKZ2C3k9p4EqBQ1X9NUdGnSC",
  "key22": "4uFPXAe3VuK7sY3kism5gjFEz4cy3h9CWT4sLrCoRCCET6urdtGukwGvLFr5s3mmYjk8PuiEQUojQwkUbRUgpTPm",
  "key23": "2qgdXkttUv7ssHypeTqeG4UubhzTcuDhnyfKY4E4rvS9BHGbKZPMBFUC7VhJwstaLSuCq2SLj9nha6DaE7Cvb6Pz",
  "key24": "31TDaYXxmV4yAGYGJK2tKce3Hj9FPVkzAD5ReNrG1tK25FnhyXQ5wPpKW2fAE5vzxkKBZ9dvtDieKVWiRtMuuT6W",
  "key25": "Zhz7rBmefuyV22pJdb36wrsBwsSZiQaMFB9HwFsGaXoY8CyGh1PiaiRhfMaSJANgTQaHFbgdEDbWikFTq88Z98y",
  "key26": "mNBL8p5K9JoJehWTrjkDJonf1yLg81LwXUV889rFd7h8WoHCQgExovWRZMcDfmWD8MDyebwQ9c1UQkcpPFDyPBD",
  "key27": "5Wcg2sNkp48CZJaCwNFjwAE82a43PzrkJ8Zscmq63PuZBtgpkW9We7cRu5Uoe1M57xcihRuwuzCr7Dt49hHfFsJ7",
  "key28": "4sSDVtTVK842fC91ijuehEstdWMhJif6uu8ASLC6jrJQ5d79jaZYeKZiBQJ9kKTxKnH4qqGmhyYT9FXiWMHvNGuD",
  "key29": "4XsHYThBUiRUBRcxcK59srQeccngqKXiKZTNAzfJABimMfyxfbSMvJ33MT5vc9bQT2gVYVnyvuKxCCThHb7mG1Nr",
  "key30": "4kDJwX44xCncJg6dZy4G821EWncu1cfxpV8eYZ27egjptbYbKcZUXwyc8uPhxBbCeB1nBp9gaoPPFP1TPc1oYM4P",
  "key31": "4jg1Mr22fnWhJWUDgxLPgzqEtYyHUf2cYzYhV7mgZzYq5va8a2FEGS5Mc4ktN4mANi9hd8usggq8kD264Me1vsq6",
  "key32": "2FMLmFVHK6r25ATmAbCzXuEWg9YuFoA6TVizE5itophPRyHPpaLD2RAefQVfZEB6o68S5ig24CS3j2NPxuMNRpVa",
  "key33": "2vsGUP4TX8YLvVbZQcs3XYhUWqZNFdvJTvqgF8C46KQwiQBr5RDj4e5ZZK3zteihWr6HA5wyHnXssSRTBTGpGgh5",
  "key34": "5U5UxkHdvnsUqnLFAr1s8VphJVXQj5yk3YbUpmDyxPUZGtAUR2Af2rs9gfMWeq3SLLoqNxFEEAuY8CqDawrBvdu3",
  "key35": "63S62vtG84GKwjhCdTyW1MgwXE6gChaPFRkK72zFJJxzNeePcTqPVkCKz6wD7WbEignuzTnCVqz3PkWGmXPsj48J",
  "key36": "2qxmncrvNdoNTS9tbkF6TbPgcEBdJZMfCZSCheFXQStF3HSgCXvuJynMZmv4nhNPNEKcnLD5XKz8MwwXPFisPo3z",
  "key37": "3oSDDPvkouTZH6PgfQZFchB2oQKjQHXynjtDcDXpV9tkqEY4Tkn8LuT2s8FMAy65yecPNtDUt1bfYZ2hU46Wj45a",
  "key38": "24DDpx1za8s6oaSysdL5FFqo244AdoTv5AkMPuKzS5Kh4X95Je4ivsG6BY8Re25D5s9ibUsYDDD7GD3TyxT5b96o",
  "key39": "3Npzqk71eBsd1pbYDmMp7CWsnKbyVu7DsL9rX2zUmXtuCndWk46dycEwcuch5EjvJBjJnx62MMiAmyj6nonw2eeR",
  "key40": "4rASY2FGEPGw3TQLMvBRH5XM7oLBBqz7HNH4Us99BBaf727bGwVCMVZM2YbpbLipP8bB9eKuSwRmAw5CPERf5PzC",
  "key41": "3taEKWxkBVuRgokv987nzscqZ6XfkQpPXYoSdJEJtRoNPKn9mWy1GqSFAsazacscPR7ZR9V2Fju7ztfMqEGVMRLp",
  "key42": "5WhWiHH2Wduhgf9PncJZXh627ymshN3BNhfRwWA23YpVhy2Hz8uwB8kGzHSbPEY6xfbV1dnMSLjjXYuaXmr75cSA"
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
