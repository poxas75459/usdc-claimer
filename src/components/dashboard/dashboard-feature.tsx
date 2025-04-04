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
    "2EUZ7v6HjTkPk8vDFMRrGvsvMimQn6jJwrFKhPpVxfphMRxXUkybapBE4qxb27pGb6NMYqSewHmSm3KA462e4mow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38VFod7Qc4Bp54uaDLDsTh9trF4qRD5n4FXX2f1CsbMcbFaC241Lq5SmjjzWhjhxLwjnumq75PfKbKMSWLwUkUMY",
  "key1": "3zd7wX4G87dtfPNoVUG5K7HqWNBeDTHXvDeZHQX8GHpWCD8SyFv57TC45xrRBctdibqarS46kc3yD3S9XqjYHDh7",
  "key2": "57rBdTuoehxUWSN6guLADVEJYfgpYEabmEBWhSFVUDX2Atv7veF6sLEfHYE2VL5WP3ubwyp1iFtWwL2YmBV7fBuN",
  "key3": "3G3DiWmWjGqfjx5Gt78WjCttXZvygsogVtt4J2oTa3mVUtaAnZhiawQE269JBEEn5iGAqjcRpKQ3stkDnvcm9vhH",
  "key4": "5zYcB7ebaqXqbkzMQWvdXFhHPojLRse3QgBbDaRd4zJVeQLAwiDF6i3w6C3gQXwrt8XctMJyBfNBwimM4hooyEM7",
  "key5": "36f42iLW8xim8Qk7dZ569sDSR9JViaMFJYcWa4WVBR9nLz8MwxvNon9YLa3enH8weoVoTRyXohLzBrNnEo8ZWcsB",
  "key6": "4eySRYFNJMjXbDSXFp5JXdz43MLALtZ2G8DRiKcXkFGQqjwDfpTV7a53syrA74DS98XMGjpfokcTov9C5GiMxjMa",
  "key7": "4bteK1AzBCd8j9Gv7Yw9UQRbtUsRCpAgR8aNwqHDtJmqtQt4WhmRzRxKswQmu8VWfXvQfTnKYBqStDPmgJMXfeCH",
  "key8": "44cuMHyb9sQS59xbjd84Q6J4avpS8AdgrUhAQgErTqRuADX7wCg5HZu8DSjbWH2rYjww79iyNZ21q5huPND5WWnT",
  "key9": "2eEm3GsQjSWuY24kF61N8e6KHLFxkzoPw77nBRPLudLU9CGVnYMyYZTan62HBfi5rD3MrDKm4bBJ5GqwWaZK6Qu9",
  "key10": "2wMBu5U7ratcMkhRrzZcCLBS6Qefs8mHausk3ocCWnNWjaQgSNgXifcRGsvx2yBHSXHN9wvck2NL75vpdbCEbY3v",
  "key11": "4zkZswS1HvxUS8Miym8bxxhuPJscZPk9y3gvAhEp6oZzPFG8YT98zuTXeV3VkXauRrSB93sWaBDvXhrqRvQoLtYg",
  "key12": "3WQvaKsvpidCcnGxtvFcKqEJdvLUPYDbRuLjpL91HCCGDXqeeNLeAzEX7T2WY2aHLEJtmSPWYuUnRbrQn9FjT6Hr",
  "key13": "4CLQDG1bN92b5WPxCjnjvRTUQryBSYJo2UuRYpXK6EVkXNUBAcvQnPyiMLuCLK3AwCJwqCGL1V4t3cNmyCwFYneP",
  "key14": "5zSM4at11fnAVxxPsanjuTpUuHz7Sgdno15mYBh64Y4si1Uk7KssBkUNX27QFyumxtNdGdNHueJuqoxeFfA1KpCe",
  "key15": "qVdF6AbXtpmsiSoe3b31Gf9e4QeQdv38HFT7ByqMguViKDr8rhoFyv8yLV9247vZbLRwqtE3tAF1Xftpd8NcQfv",
  "key16": "311UNT2jTRev237CLxnDz71hFMWsoHg7VAbdkPwbcuQaBag2TifdrmVbbQYd4TbJ6fcVbg4Lb9d5kkooJtgUcdre",
  "key17": "2RV1mifKNvnDEfjW4LNaNkYZ4U9veubkXS8RTPxd387enbfNrEByBGCMBN5XKapmKzrz1vSNs8kUabiRrnn7vkuQ",
  "key18": "LKfarLoC1okkxqmZCVmEgcorV26rzVeyCrYTnTKG6BtnH8xRHuGG8uqtY4qryrC5cxWgSonmn9pBYm97RkrbYxU",
  "key19": "BFjsxC8j2ozezuGzfdkYN1krf16NwRhidTv8PDLyxcQ6u5WwzQ3KJAirgnsFMeEYNARaurRK9EKD9CJ3ppMNNJ7",
  "key20": "3X5GAy5kJPNKHdGS8bjZobEagGizn39uEyPkrcNL4xgLM5k49jDh7K3b5TjLWH8gEfGZRRT4Sgh4fG7QU28VRtHF",
  "key21": "384MeugvgmykqhjP78r73uixgp2CqmKBza1hD5m8ZJtGyUn6Nb3ipMT7La8UcVBeovsRFe4p3ucpQTq7SA5YjXzE",
  "key22": "2j6Kb3wuKEgSBMg3NjC2rE5G3iWH1K5PHgCMN7DGfs8F2Jtmwn1DUzMGA75XHTK3Y88mc9CuxY9pSvis2hSXh5VA",
  "key23": "4NJoCqP1tiQL8WWgYXQpPQBfsuLwyjE99EKpXjVkfDy8sHcJhtrMoz3pP45Na2jgzWP7HUwHSgh1cLBL5QdHg439",
  "key24": "5SBzuQMahYcWmQLN2ANkgvmu7hZX6HJwxwdt8ZpQqFp3WEo6XSVwLxYNyQ5wWHvNcxHqCHWHGt3p9V1x9ya1B4Ng",
  "key25": "2wTghWc6ezukK5nDZA8STTC4SKHe7wLojsouk5sunhKdi5Mg6nVAddX9GGtc5jZS6nCKxGhxX28VMAKpssxDsKE",
  "key26": "MJP59CvJ9Y4VjkyV1tAyjJehBMrSonxEjYoeDjpjk2bL8R9WuMsfKwqsvFP7WJyPHjtfCvKSk3d2Dp7qyrnspBJ",
  "key27": "nZFAFdB7bMPw1nACXVvd3vSaERQPd3GqLvQcCXTxjzBHEE4peC2Wo8kJHKrpGZRF3aRsy3MwJ9YVFVofATSK4v8",
  "key28": "5DpEdR6HxzsfLsNUvDMp5iPsrR6fMMwHhaJKZhqCRkiHtYyR4wY1nwpcwYwhaNeoTEnRnLj1BpBF4xLLhYcyBgwV",
  "key29": "63jR49g1kpnA4ovnAmwfepSbTcTfwrNR9uxWi64ChkADB7rW2MJuX6Fp28WZZKhJ7Je44niwGXPa6qwkLX3sVzar",
  "key30": "2q7rRRgqdUw7HBnBz6uvEkwSQ4SWUDvfAkq7mgPkF8Wif6964aSQe6aSSpU2h8ZMzEKJnp3so8Vays25CcB3Sw11",
  "key31": "44JhiCtGMvxk7vBFgp2EVc2MKfzY5kCmtqU8zbrx1ttHPKFVyPJopHvj8Yh4NrhDYzwLemzfSHgJKrwNoQgfjveL",
  "key32": "UtGENFPB84MyKsCy546hNzujX6TC7efM4kAX53tzy14jHrULDJsbrB2gspSCqvHddeWeYKXYprjr5G661iJwYJx",
  "key33": "5cqd8tawGxJHLoJBPB7RrgFDbZkua7x7GgPqVCaNH6D2PH5sQDPAQrcfTx5gVs4gC18SJe3vcnHhFo6ozCqoHBq1",
  "key34": "eG5g5iTrB99BP1YWYNbAwjYg2priPvJBhPZsc1nZShBAZi9Gp1HBcBGNjJX3G6Z35vNRxRu934WWqX6GRZCopPq",
  "key35": "Z37JB3J5ayETy1zpH8MqqPhxH2RPwMriVbuj3a1NtKvDhRnUJZvjWQKznpNsTtKgQoyYqNoCcHwhaBYpmf6i7aP",
  "key36": "2LobESVHHcc9bV2rv2RYkWPUR3TE6zbLCUUz8ecGez4hyTJrnjhREoAisTgjTPFRsqkKzb9fwU4wgAnRC2X15syc",
  "key37": "5zVu94m18qFAixYKWzjZuYihyXvaEq9w4B59rA6k6r38YtfyhnZ6V9Dwb7TRX5errSFaM9QmtHHKZu2V2URyD41d",
  "key38": "4BaEfDyMTmxhCsaCmke3rD6PrXGbLyKyTa9eQahVMhN9AsyWeeLhVGP1srNEkFFMv2F2P1wmeYRtP4Ko2WV4MCw3",
  "key39": "5UM4HBY8beih2qRJrtKBzw2PzUak4SzG9f7EbPbqwmfGEva1K97iAie1KFUPCcg6HNvX2nUPLZeRccDtZ2GCY9Rj"
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
