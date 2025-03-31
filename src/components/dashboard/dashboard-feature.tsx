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
    "4jy85WLG2aSphjgq5NWbPzz9Jx8wQy2RD1e6JdHFZAguHSg9oV5YmaVxUogTaxQRNSBeUsUkWcvABPdNipdkZzkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWQou78xSQ7a4WPvAGBRuHhAXEfkEwifAh34wJfhS3TNvLRCaa8cPdD2jxCBNw4oEbQFy75GLHxAADCeevRmtuW",
  "key1": "5P6juJ5jsgfFyZGy1WiW8MGWvcegiTujD71UHe9eM9tbAeCoQNS4WimYQ3xZBVDgJqtrvqRf5wEggQupNTxro5vV",
  "key2": "WsGBh62YiGeWyskwZQMSSpkqnfkqpqq3TzqQBNkiimrBsDb2Q3hPe4dn6NbjtLYrzZK1n9ptXfSK3a1DQyKXGR9",
  "key3": "5sswtFVUiKWfdk9oDyLZHNNNSxyaMgraNAe876fyMurmQqzxQyoZwZtRjRdmvFPmmjaHajXtGdXRYnnK7mShi43N",
  "key4": "5zb8m6TKGWEtoVbaD7rpDfog3qLqJWzzomnP5dNawQunmP8bSjdqnJG28W5ZH7nWb3jBvhG4Jwyu9FVmpfPefKsw",
  "key5": "HSGHq3TRrePjQJhKM2Sqrw8SuFfg3MFqvzcoJaEK1vTkw2HZ35Bbu7vWAFCJYq3U5gKWUFkUuacKKi4Gp3Y5XqY",
  "key6": "27rWj3mpsGGkjWVnEPj7MjdDhHuVsUHxR9A7DFWCjfvjoAFXjpyV5m7uLTRos7ot5WGujti2WEVSe3zEjXmZ1X32",
  "key7": "65T565rCFYNpCG2UX73YxooVaMMQq1f9oEotyWr8F87Neoy1tWJSo13HB9ZDDRZ89heQvQo3JDkpjXD7zcrc12C5",
  "key8": "66pVnRsVyor8JFP4hp7iEpzCsMZ5MMxW7m8xwhfnJMnBKc4UyTC4eKLTNEebfQmcugVKpgPLqkCiL3yVCWWzazri",
  "key9": "3UpPr9XbkmdJy3HstGfkFox2FfnC6whEtV22t9EZAusWnnLYF2GXuVHHJuDE4BLTwhL2rVVnXnzh3YPqQmLb1qpu",
  "key10": "3QGxc5zQv4een48HvvKzDY6xR81vVkfU6vcst2aW6qSaKZqcNwhoH5TeY2xhXJW8S6ZHDbxmP4z1sZLzeYWzCBwM",
  "key11": "3QD4PQKttgKm5T5hNxgtwMFjKW25LRJtAzUMSSGXpkyYR9zXzSpjhSWQE7cSsMYP5rhFTB8UbeqfcNcBnZcrpru4",
  "key12": "5M78MR5dn6vcAL4PVNnKjxCR27hYss8LH74GDDBCibpHaWvtxndvSJcfRC972tQGKi8iptAsfPdkgk7FqVZd4xGe",
  "key13": "3HUiraLeBos5dDnYoqnnte9a1fbhAYFfDGjFzkF1rXMfavsmeRCoh38vUkye3BttCLSodJ6mKep4v2ifGvDXLh8m",
  "key14": "57ynaK4ypWC4EKdsxU7atDEBgxCxxnkuDcVS3KwvdtYyVbydJM4r3E6KGVmwbGzsr611nrqpXFqWr3uhbGdXsVJY",
  "key15": "3C26y93oT4G3dyaRjuQ2p2bqHZji66MnRn2GKVBMkdWu6cAwGahH6Hr1eRXG2GxTYArxXKBCxNuj42egY542fykM",
  "key16": "sCQDFdu4dBHXSYTm1UzEpyuksFfwK5c51NgBN8jrByx1o4xJLQczuLzDebLnM9eFdoeFrPzG8KG4bxGccjEqVDQ",
  "key17": "BGbq3J7fw6b9zPZ2qCkATfAQKia4kxqxHq3h2BVXD5o5VtuTDmetztZjb9Xjwo7tKpoMZDSq7XEQuesz15ikefd",
  "key18": "xvoK9m8Ex8t3etKxghrDJ6C6R7mwMz9UAYqHgjzkjK5YFypwzNewmif73deGdHo4Da4gViSaBWC2WWBtexJE68w",
  "key19": "u5oKTzA2vESPhpGPhtydHMm2ai6TuaqxPjQJu2Gx3V1D8ZUeW99348o2RMPzuvMtN7qU7PxCtCDjLrN5VRer7Zz",
  "key20": "4jaVCA7cz6KTmyu2XTw4Pbry92xdLUkp5uFzJpBJT4HajyaiPj8inbrrc5RjPt7TefzJHLDK5Wjq91TD6D1d2GUM",
  "key21": "4cP3CFPpHhLza7GTzA2SNpSYNsXjvFWRHRBv6zRo45yEDXR3Rnn2YRPgtQU1XKvWdq693KHyqsnRwNAgNRUfRfpp",
  "key22": "53Z6wd41gqU3nSzuhgPgUizLtNgrM8iCbKK4wfCnCsnRroSAxwXsQLxxJhgXa6RQWpN3GsbhhS7TqNXv1nEGCW7G",
  "key23": "LbZMssh3KURjMvqgMCxocjbZBLbuz4vrTpyjtR2SrCD8aSTEd7ckjFmCbZmhTH5LBmDuXcSmbkRMyU6cJA15MTy",
  "key24": "54DjsoQJ4SUdfcBh6M7jSHcEmiaboheh9peFeZqTdLobDyqBqByxiXA9CxqeQCoGd9f7CKXyjcwQYG7wVHcrN481",
  "key25": "4A4r6ojwn3G5Sx3X26vBjzDirZW51NcLrBUsgTSFtmAvcKZZ8ZvvwPjB5LtAajtAtG2JE6b7mpxZbNjU48Rmhhpw",
  "key26": "5LPQHphNSDVjcj6NYCPgFkrjxhSsRbACQjMar8FZmvF9rFvsF7FdciKyFYJyQ6ewSXUjWez8a25UNDwXLHwjvXej",
  "key27": "b7wPf8hjfdZcstMjWDedrErE8imEQfvcYvbj2yrEQCR5gKvth2G82YZNYbYxWgjrATyWBv3Px41MvEBBXh42mH8",
  "key28": "dxqbCKE3T7ZDbuhgMvNEzG1tMG9ZqAYyjo9B4NaxmmpWED67FPace2m3ffNPABp5vVQ21Nrc5zWZUPsnDv2oHnX",
  "key29": "5TYmSJJ8HkgPBHtSuov1vj78m5cqpfkULaGD2z8aCfkFaXx8mha626mHt8zSm39oYpfZ2XYHfRPQv8bHgeAzkhGh",
  "key30": "5MhrQuowB6z7Z4Ekmsm11e3gimuhrF1KcqF6F5jBqjojT1AMALSXuVAPNVJfXJKYMob8g75gj2gkrQqMcwysH3RE",
  "key31": "8j3BW93k9RyzTukVbnpdnr7gvQjhyDkdzix2y7qMdQfqYijiHuQBvdKocDon9hAGDQqFmgHRsZe1yQm4jwgjxGf",
  "key32": "2iUNiPH9FTUKbMndmocjfG7QDw12nD6W3JHpreiBi2VoGZmGhpaDzaYbUfWkGzVixJeezyFmV1VP2UQA3nZur9EC",
  "key33": "vA1EaxVMZ54P982LEHb6chzFYkKECXedUxuDCM1DVAH4p3LiJcUoonsvmMnDEx8Qrvop7XSUo5AEJsgzTy1RWvY",
  "key34": "Wo4RrANVrAxrL4BKix5o23eUWpui62yQeLYm9zmtnLXZ1y4FrWTw43rhwCReK5beczhc79D6msd8fYGSPokciHs",
  "key35": "58Uttuf2JZ5eWfi5uCqBVA9TawrJkAfMbJM7rCfr9WwB2TPi83f9AkP1wvSW78fXY9amKkjPMDBgijwm5HzRJJ1q",
  "key36": "L2JwFGAZaQ9D3a4jiG3qw3eFT2NdPKR45MALQC9RjEsMiPsTkF4YsMPvgV5n3CJ436uqjHDmrVS9Zn1f9HBvSGi",
  "key37": "5zHPjjsFcNYKR7uRmnNzU3N1QKDCjYhQsigTLhcur27G1FhP7zAvxUNhtpdhn5DhhYeviKcdBVCw1fTNKijHjwnU",
  "key38": "4aGT3kBGGRYFU4SgA64NFUeCAD5hXbTxKCmZS1un2gZ6PAjVEs75RDNAXRXBaZDNiSL4i7Uffr1ZxbyZ2omaPYA9",
  "key39": "2gywSkt4iLezz2au9WQAB5bsMSRW8SkMeFsa8kg6cKGG9cQUr2tyQPWcMp3xk1RF4qETS6DgHxxUVveEHPZr6GVr",
  "key40": "565Z4ti1qPZggnbuhVfC76psh2i528kiBwnZtBTzw7eLtKLpkUPH9fYrq83znTgPqkDutsuFrpJL5jpwpNsa53j6",
  "key41": "4CEvov4ayuQ3uK8QaPGiQGCSykJwFxHohDJ3Pm1YAPjAcoF5Ez4n7LtMegLiHFworuVBEezBLpZofsF54UQewodE",
  "key42": "5VA5U1zpU5nKUxazha6vvSWWoC6pEgsPdkVsuPkpiJ6dPJHqKGRTEKABUQj14RWaYjHsvxHtnjxGGgydJieqPSkd",
  "key43": "5zkLxpMLTFRffwNVDbmoe7kxAcbqBNzGoMGAoptZprRFWe4gQQZynSiD5QneXSfS8SYaKF4zAAGkR3rhqry8hETY",
  "key44": "126vtoAppm6BxyLozQUEqSHnSPPS3gdsBL6J1YoMLBAN9xbjvAt4qu5yCv2eQrC1gwd5E6ztkUTuneDiDNQrTqTD",
  "key45": "3s3R4xFEp1qNXHjGK16Qbk72Qy1EcDnwHA3Y6ke1eqvQudwPn1TvgyWFcz6vfAK2ynhN3nPn69WZn7sAtTnsKXvX",
  "key46": "2PoRmrwc5m6M8rH848FH4x8YcF2pT4ccimwXvuDEMnNZAJNbmYekRci7hA8p793bw4kqukQmvPSxtRLf7ZYFis9k",
  "key47": "3hpJ5hLpTVyZnbPgATyThZXp3xd2kbfjB6QU3gNofBafLk1jGC29BsaDrXDP6ihp3E168n4fqkFKXecbTCirwkTS",
  "key48": "2dMzvyCVpRu21oLoya9nE68vNAt4M9JCJrVJy4fe6tj83YEMje9q4F3cJJfMnfK9qK4Y9KFC6y9oTN28uSJnzLYh",
  "key49": "3jP23TRA8EVNdkd8u9VBhMMSdEuVdgdckqpyFznf69Y4AJjSYdM2iTUgtfScdDcYAbrV9uyaRA9jcyhJEoijtKS4"
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
