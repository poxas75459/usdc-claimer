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
    "32na1QVZMbFMg4CnRBMtqbimDNAKV5m9cvn3GUpXL98vq1hqxTbXm7Qx1H3z3ZFRXh8yDpV3DgaEig61QfPAwXQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1wdHvq2z88Pc5ru1yBmSRqvMwE1hjXxJUxkqdM71Ysi7GumjFAKGeYTSaqdyjAbLqkZYuXpniJ3ptQBbsAwPYR",
  "key1": "2BoGvB58k7CfgEiumTgEMTa9MmxkqwjhYS4GuJSt3VuGXEJ1ZkSrhYbVbZNNpLu69khdmNpWRwPtRdbqcBWsdBgk",
  "key2": "3b3apehhNmAGsXEDyT3pqGTxZv7tzb1G6XtkU38d71bWAfjcFVixfY9GF8j3PzxDCAnkK6xXavwAAYLjLkEZFfnn",
  "key3": "4Wx9BaXckvc5EmepeEStBxn36eEGMiApekUE2kxhigpF8idxasU1gcUUZeZb1RiKsfyjvYjyufNGAavN2XeCWDa3",
  "key4": "2mzPjs5MRhE87z3a3nDowdtsMp1VGytdFUtxFf3y5BK5DVsCqakyhi4s1YoYYuM1TukZHFF41t1tjTFkXCdkF7JE",
  "key5": "42KwDSWCnnMyEnUkankZsU3ouByPLYfpHSaaMnLc7ZXywgxsbYNPoR8RfvGUtmtuKHr4zcSXhKaBbFiehr2xDFnz",
  "key6": "5tENG8tFnGcuvZANx2wJWD8qdgm5zb9qiSFUyU14rjRwmwuvngq6v5yCPyC5FjJ67ABHQVBfhueJEbML4r8hcMCC",
  "key7": "4eqsBUdQHmcB4bzoecQpHq9hBvdbNJCnTd9nQSwMEMasVt4jLoTmuJJhWqcrRDfRxHKY1cCGTkfKFRNokhzPgUB6",
  "key8": "4gnzdr423PNTsQypij9VREDhcXoAhsTo21ETvi2cgfhXUjRXcBUeH5hbd79gtxVywpgzoRt4GwB5ijcL26cLmPzs",
  "key9": "44GFwuG441qnWHHiWDmqs1rcotYoFk2obZM4JWi7Uso6AUJiAQCPRq5tsnScXov71hFeVf1awaYaXcFvVSmgjtc4",
  "key10": "xUakfZqLLe7qikxQD5GEWaeSbTSJaXApTj4mkzZorPxhefq3q3UFWEnsJhBjMB1STkLApWMvgsBsma35f5H2hoM",
  "key11": "3RKZ1TjMEuZ87MunL512oEWSRfcFPvajLXxom55yM4WmKdHeQ45LSzoGfdBHJWPwPMexRiw5tnw8mZKK5WUGY5xb",
  "key12": "4NfCc9W7EJY8TnNfrrDjt9FTbEbuKfsHm443b3y1tjDMGGnHvDfGG1AvtoXSqAkkr3XG98EXvNCnrypViSrdnR8g",
  "key13": "5VTe7Ht54eoT3gBUew4aqAJGmwKvW8GeZPury6DBkXHMAW1kKQZVGTnLERUFzNrYwd8Z3HFi7yH8nYmwGHhdDTri",
  "key14": "3R9U7uKFTu4UVGHMTXW6ELbzYJ9KdxodX9gxuv7X9dCCcHSVLzftpQ3fKdXSLG6qatoT7acyXwS5mcTCwQLBpUxK",
  "key15": "5sHXdg63gLA45oKof6oQ4W2NYhmuSWwYqkfPkWGTyRqS7h8ijc3xHhZFrEV9sFXR9r7B8CwEi9AAZFZqXFjQ1nFM",
  "key16": "64uZ2rr8rKnfUdttkUcFxgYAndnDnudWc539rdxnvnoN3jxpzqJeubZ7havwtXSAswcbFMBTBGKswVirV5yY7Y1g",
  "key17": "3dRQ7SHPYWfkweizBRiTzP8ZJLRG2Zwr3ZV1fN8tJPR2zbmtq3i5aZo4QxJ4cWBSCwqvkCewcjHzYjpWv7Jsbofq",
  "key18": "52QktfvYRf3tzxW1VhM3UM4j2pF2pqcbHyxaSLPeERZtHy666Q3QxCHvhVxAwidsWLoceG5T8H5jrVKwf9XViMXY",
  "key19": "39uy13jtcTuCpWt928E68eHaQmu5M89Kpd9K2ku7fyqZmJ2BieXbr26aG7GYLHfFqkMALE42MszMsBPRJUNbgNrd",
  "key20": "4jaLiEJHGHZ7AmGKoighK6NUoQRB6wCAi1vDvq8B73Dx5Gu6ShhZLonDbwEKMvTZaFH5t8ifuLUguyVJVdbj1Sfw",
  "key21": "2dpR77uYwW32VwMmUQVyVPqaKvfmpRbapH5Vq98LJe6vMoVNp2q8u4vcXpm8itWpL13M5M2znSSzDU6RjFzjsAck",
  "key22": "3CicqCBF8KZLCuiM6CabE1fMEctya3ZEZKhxQ9DzbLePzh3FwmfEdLhNKeHzMy4bdU4WR25KJAS5CeUd9fX3bHjT",
  "key23": "5SCDLQ81Tnc8C4UZAkLTyDFVuSY73SevMmdp8XF16HGxjLfTcgkUBxFh5oU1oM3s2TjtEtC332Do85eqvy3CN6cs",
  "key24": "5yD8vVSBoK7H3mg1FhudMmCUwbvFbzpvMnJcccAKVDz2A6RPmMj7HYQrC7ccqBVfPPpKXwMiQqLCwJejADukzu61",
  "key25": "2J4NUCuis6ZfxYv8chHX8oNDx1ywBFx6YmgQDmNJYVmfVA4tQLwyZgEb466cvrSRi1QA23fW7xpQkF1we9a3Teau",
  "key26": "3BCpKqBxZNhd4oLfT8hPDrP2GXr4DqMcukCsRehMf5AQ41bnbAxPayoAUS92j1RQcPaF3ErLAsXo2fhZZXEKYmsD",
  "key27": "tDAjpdRZX5BNQAHNoWQicotiTZGafRJMdd1BGMGkiqtNMqRJC9xdkVbe6XP2LZCLk9ksd5DFYQs644UecYEKpUC",
  "key28": "2eMN1tVaHVrU2WpJoWHQnSn7mSThAdLZibmP3W8v5gW6PcuAHbZZg8q5HeLkhtMVLUMZyx2Sof8cSTWhjgBNt8e2",
  "key29": "2wEY5kYiKanTgyWXoK4rzqLokNc8XPAYFTNYrm6rqKE2zzmVqhLepqVtu3VB9kdUyKDMn3XmjwXqp37qsxaLJvKy",
  "key30": "3dBgkrMt6b4vsbVgHvG1DCMYUtwmMAhWiJ6veNLFVoaXZRpnqtUTW6yE9HkH5K8jNyVC1Q8UEKVPTbQPmSWXwp7Y",
  "key31": "4rii5dCzbsFpTicV7VHAGEYu7UABAoi3T6tugDmBMucfFSrH9V45YKYeUYfbTg7MRWgTXwKx4rXc8ZqbY5tc4Mo7",
  "key32": "4jGsTobejuFMoGS7j9igtYw5eqCCmQXpGU8RuWouD3ikCJKJjBQUHDzsENEV6QrkbU9iB2t1eiraQLj2N2fAUgW3",
  "key33": "K1YwJgAQT5BdFeh5JnANmXHcSzFyWyn7u7SktT6cEAE7zBVb9KWbDBSanRmmqoY3hWHciKXUt3B1hArNuTwZhqC",
  "key34": "2FcvfsSS5TXnWMqKSpxYtx3Xc3KQz4RuL7xHN9dLhwGRtaMGcuKawmEBw4E3UorkYnXdBhJ8jxCLGW5BcTZ79JPs",
  "key35": "3pfJXfEFVLR8gVpBtrsTwVSDZUFfMR2iAh5uf28pzuXgA8AN4Luge4r63NH1WnqvNoU5mhkgsVGu9MJpzbyL7GFh",
  "key36": "2CLugdUBaSSc66UfsnFXNkKKQFcaAqRqxiiZkHBHEd9TJiZi62heGXtCPY6hbucibwWKz5y24QLm2FqD33Zmh9qW",
  "key37": "3BrKFzH8tjj7BHUVw3G4BJwN7zHjTtHNkFSjtE1W3mDfmkFAFJ7BFMD5h4oiY7PkXYtZLLHiXhgDJQHGtkNV4ySz",
  "key38": "2ETXtZbodeoetYNLV3BvLnx7tMnqEmZjtPmc6SKBDNbZrGpSVdm8YSRg1UQjR4pM5DjLk243ys3iDvYGWaZ3hgAi",
  "key39": "4uLXPGDH9Z4gWY9Rg5eGRKmDRyotwjaqY6Mb7rNmAaSPBonuY7uRCdip7E6EehCjULHoHjuchQu7pySx1aHevNpD",
  "key40": "5N4rQr16xGKENT5Dv7Kb7o1WGTFqDtcvz5w5g2Kjvqw7aSy5GiH6ePtTnux3DZPZJYG5iJL3iHnCYCc4cm6PDQov",
  "key41": "4CoAv3aGLsatZLdxrMQ3S4KJf4txpHk3NH9b3xPPZ1sj35Kc2f5bFCNe3csQju3WUp5jbxEmK1zjAi4cEPMPHHcY",
  "key42": "3F9bjPswPiMBfVpyt6bey5pAdPh5p8DYKrXpfLBL4ZgnRpdFPbfrfNSa91uMNL5qXM3iLBb5jW58Tz596rZCMGNW",
  "key43": "5yAh2QbZi2MuDGdvZAmRBxP9V3tTGyU4GywUmxmDxkPqhiSvDnDoXgGyrUtYY1YBF4eVsZbmtUJ2ZVbjFs6cDQmd",
  "key44": "4f3N5ke7TX3NLfn7MgFVzzBGct8T3mMGHpLohU9hptZLLSw9kPZAMfEMBBM2qqRMNQJ8GPg6DtG8bp5MSSjSTqqT",
  "key45": "3MbJVX2n35NwwEZvFtAGcaNLS7E8cnatpEWzhbUU9E8fqEvLjUWiWzP8UsXp9dUYdXZkS2xkena4A13u4LiJKWNz",
  "key46": "4BLez7PQbdBfyigR6xBVqpCRo7oXLTsAWDndUdH5a3vGy4n6WJxve1cP1y74kgogw6BeQAwygyov3FVxfYXL9t9c",
  "key47": "5xWFdLREiue7XGS1hRuGzPBHWEdP2mnC6mBs11eYa1BgfrxrR9My1nNKmzL4TJDzeMcJFhY3bgYT8ZVNtbfdobCy",
  "key48": "5rtvS6oWH5qNJmEDMVnsJR1yfNfzUFgwxmLKM1b36S5jroU8YUL7PvWXvTGWcELe9hJQ8KCotmdAx4SHvSTh1ZPu"
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
