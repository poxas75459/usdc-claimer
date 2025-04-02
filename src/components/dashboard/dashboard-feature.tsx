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
    "3wRkzCNX6MjYCxpZ32KZu8joA99AgtBwmZ9vWkFckM4Cg8BHZjoZBK51ATVmSgTFxFZhX32VAAaTBKgFtmaPAHxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwHjPiCUb57nTtEe7g5hM6ZTKE4MKX2PVvTnhE9u7nYQY1qpgokbFQPHEhP3L56SThfFc653nVdRpXyukKqoUCC",
  "key1": "4NdV5pbPegau47jYfybGNLMLAF4r5aRipXHcX1TsunHnEaYvkDgBPUzjXMk23gHzGCdzuP7UtmoqYEo33ULWZXxG",
  "key2": "58HhKwjvXJEZNKjvDvpKGCnL89X8GYoJ3gQn1FrsujB2pdgRqiMteueEpWKmSHdi164gui1ggKW9NemZfXUfnpxG",
  "key3": "hJ6wgag6ybU4s6tMdwMcbMKbFfaQwU1RtuUFRQGzsGk19dYoD4dKqJYFsRZS4KyjmLFpBuHfdtb7oRD9zrcgysY",
  "key4": "2yibVHP7Axxg7nZ8ostdu9NfbJayimBVofYF3LyH3GJQovMQqt5MvDuf9NLFj7WA3e3kd5XwCD7AGgTYHmMoxrvG",
  "key5": "t6pmGeymEcfNvpSMZTRmoJQVfKH25G9yY75zJZ7jaWvVowVg9BBhRPJLJmtvmeZN8oxD7KmwPHBZfgiB8MjS6Zs",
  "key6": "2xUZ2KuJp1qy6WAJoCFG45Yn1GbYQgbgamjHg8xowqAPqLjKyHxkmithfPEt31eUJ8dUKLQPvrSuA1faFBzePwwh",
  "key7": "3Q1HoG1oGiMxn8oXiYficKELnY9YX7Yc7WL1kQY8c9XBTKCqRgMovYNhVLPMeFdsNE9VxJGaJbfzMNipbFLYm23j",
  "key8": "5XD6f1oRkEXfij8FCHtMTAbiG6FCSkNGkhFqjYVeeC98oMHfY8ZxNnRMRNwX3GCur2JvKZ7Pptw2KwGX4FTmVkTM",
  "key9": "4AszG4DwLhcjMm9w32vkj1cWb5YjsjevKxwYvpagRvgMJVrGGUwXm6Po3ZdSjSwVfAia7J2rjyqPuxEmQsxhmqvZ",
  "key10": "MSsPfd8xQpBXrC54eKin5cvhAPJ8jjgvpkJRRD93m6EgnHZvmFfNJzHZasNLBsnPR1iRr3sFJSWQp5VdgqHXuQD",
  "key11": "2oDFikw523RyAgTpv4zCKvKXKWHvPJHmjUbji3Uc2hv4xXikAG6DJaM2MGnG1RUuftkHAcFP1QJBW4xA2bwb7zy2",
  "key12": "5E9WyRs26sncNVzNwCzehEWnUbTut76njhk9QvZyPyHRiLnSU9uEgknHV6SSYZXA21DWkdgHakhRu75rrV8KM3gy",
  "key13": "55RMnc6qyJpxxoM9h3QuE1hMrCYUnh3EjVhES2XcXgn8kbkYs3kqVjc5r9CStFE64fiCUP86F4D9EVkRUQuafmrv",
  "key14": "5ngFsckRv2aVF3fSVpRgNCTLs4c4GtBDhmYmpVh3yNawVaQ47UdHGh97qTav8rYRgCqUAKPED8QwhC71mCbwsZ4j",
  "key15": "3rzDj44UsCzpYnsEtQtqYLtqW3JTCawWvkxyodgFJn8KGRCHFCAGYQQe6wg72BsZYHuXVghwUqi26DYLw9YGVxvc",
  "key16": "5CogkyDeQTmZjLevGnnaxNea2bfFd5NnDobVFntiow8wmoiSjdSGP259McDcg3cEzf7Y8C4mPqDmUXhy1f74BdoM",
  "key17": "3CH23NH9bhdxBGK2V5eRpVXByjSBCaoNXZuXWKdsT8eDXoV2T4M9HEHPAZHkwjHL1PaxGqdtsRSTf7V79fwQbcZY",
  "key18": "2JRTQARZPQvNh3s8xQfyNCzMSyrULLJESLYtC7vFEkLH5YTzmfcFFgcnEdCCUehq6rD3NAGsNPddTnqUaXh19SmE",
  "key19": "2moGXWje7bqWvgSXyiyskNa1Uw8K7FqmVdSZPis4QGvb9gDWoRa6xMVxi4BtJDAEAoPNafbxApnN3o8ijeqyFAL3",
  "key20": "4MWfRFaNShSeQD5Xy1TtSXekx5K7mU3czRy4MdNt2ZLv1qVfcUYnMDBugAaK3TnQbsyugyUCHmmmLU7wtwnfQnEg",
  "key21": "xAdtDjWw5vQS5K6WHeXWASV5MUULaphTdLXNBWzTsvZUbJm7dtTUUiaswwxzZFPUM31BXSxdtvmpf5VHANAn7oP",
  "key22": "zHArR9pERg9xGgMYyTPA41oRLNK9zMb5ZJY1GBMVeYpLAxL95GMQAeiVq3Nqp6o777dBoMypG4uyALRVczTUBE7",
  "key23": "35VKYEFc6GHPdAi4kRL188jB8NfaiF7Rz2mEdwx3PcBUfGGrFR5fjqewTQzHQNRYUy9rfjo6ancMwLB8NRoqZjBm",
  "key24": "4mEvVrt5QSCDKGbFLA72zwHFpHJYTdtNwhNMWmZj1GvtVofNwjTFuinP6U3SrXwo8P1LUKymPGuJP8X7ttxzMhJR",
  "key25": "3fd7vZkQJiDTVMF1bit7WeRTXcTDK1mm48URQy7FFex683LGKwCghxUnH68ZuzuaGJmY3GPiyt5JMAGkV1m98g8A",
  "key26": "3AM3CiEWi3HDodVMomfJu2pHsJvpWhd9fxpk4i8KwfQ9KcVAKCekBcu3CGsBDxaRqfrHTffAtyRNLt2yGNLYvd8S",
  "key27": "3fyN5fJ7wto7bZbum7whkYTM5oEiB33VspYQHpWrjVXA8LQfmT261RAPXfgXaBwYa9UaHkoYPsqvK5bX8xmfRmTS",
  "key28": "3Ce1GxNaFaxWSm6XPa3bKJtYVMZt6w8Y3BJLu8LEkJpD7apMXBdf949J3TStJymjUxtZz6RKJv22m9mtPfrTHABS",
  "key29": "4554WQr6XDsMAnZpDy997n7PhUmjWTaQxCKMCpjQWXWWWJ3AxcuEWzZuj8dqWBpkFT5nDNGKgpNMw8PQRTDWJ7ga",
  "key30": "3A5CniL6sU4UDNbqwxwcVdzHann1xdbpHixcMZHYiVKJnCZYytSe6dphRpYL3w6S6PH6JuXQWbUgLPtnPqhEwFwQ",
  "key31": "2JWAGabsTo7eCupbhK88hnAFjc2fWctz661Jy2wUKZAkryEehq5SxEujDFLmH8wujV1qS3gWhjB9TFoEN4MM6FiP",
  "key32": "FKPDh9WrgVX8igttWvzoyE6iBePWCpFAjEcuhJBLXHUkwPQ4jVYGxqVqU618E39vqPm5waD7UDgnGw6rRSnbBao",
  "key33": "3ZMyjzFJdvV8QdLjQuXhsQ6SRBNGYiH4yaUAENerpaQBb3juHzy6gcz1E4vRsvC5rgF8i9HamKPwWYKVhKWPLgqQ",
  "key34": "63jDfjVna84Z7fWyvc7XhptSs8dYRWegTDvSGzFJiyJcFcULbUPJ1q9cF1KpZyVxysoEGddvSktiPrcdKct4H2Fj",
  "key35": "5wSrGUGAqh29gaAScyepuPuT2edvK2TQHDFXpoB7HswiN5C6rc5QELYv4jUFCBEw3oJ4EorKjBZgvcmX5trRYti5",
  "key36": "3xfPTmrvnumKusVVDrVdFoB8jopEe4RhGUiB7p8EtMEom2UwxDjFW47xBZXTBQ7ZSz4gyMfrey5DKUqgwkUc2iah",
  "key37": "4G6ASMedHKruvW58deb2aZBA7U8Ku6w2CEhfwnJYLnHonFNt7xjWKJWNYhNq4Kci2ny12MAuMyGgnows7QJci4jK",
  "key38": "bupFboGuTLW5SyFpnvYYinwFRVt5cEjnxxA5zn5G1AGbDJEbcRW8XJMHEBCCgCZVWybDV5Eh3NEjkAnTi2AeZjC"
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
