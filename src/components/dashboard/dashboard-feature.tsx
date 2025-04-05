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
    "21bArewGoohfwFQF8iTFC4ogJ84jVCBR1nhjU4MgeeCUK2Cre55QNYrE8abTmVNvrNDTiMXWh5CaTQ7G5iMJuMKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mrzWZ7tNkoinHVGdPGKaTAy8GNQ449r6irwuCgzzWve6cfahJqLf2wdtLgeriKx2AWHV9BaMoNwB2aMCnhKqZuH",
  "key1": "4jBBYQVQquq5L94Rw2yVSLEDgASc7m3dye5sQPALU2VqkwiXswcsjdE1Bfyq3ShBEdEVMms7PMMFssXPjgPMamUk",
  "key2": "3w9Sou66WcQfJyp7RR4bgq1XGwsEUQZsuxfzLywWKpwJ8aMmKdF6uRFwJhC7z4CcztyDhxMjMaB8jgARYCiQN3hj",
  "key3": "2wUQvhCcaAyjbreXPXG3pchij9zF4nMPnMSi8xqx2vtNn2wYRx9As46Q9B34Feqabebffzhk5fwa1ru2g3Xpxbe3",
  "key4": "5uFe5atgWbG7YBngysoCmMURpzeF3ADWqiSQsriejEynaiGVdZW2X5VWcBqGdZfgsV6TrafeadfKANUprvVhrFRc",
  "key5": "uMeWa4jysw4KsKZaC8GvqYqax23USjcWAR1YQ7MmwN4DQ6RzG4hGqFfSfmyxpzBqL63roXFJcJ2kB6dBQcnS8pj",
  "key6": "jAZEpTTwBnjDmCtwmXefSbqXz1akyuntXv37sL8MGEspBWiWr1mAnGgGZbPwboVxM3gimyLmjuTwU9SVd7evWFa",
  "key7": "49zGFxu8oDQtJrHtQBTdwj9iyKe71C2EpGw4qb2h8yEfDavMgCZG9aGaqfuBJ7c1JqFBNgDyfsw4NJ4nh9cDpJ22",
  "key8": "RNVoHcJxNrT2ZqmL2p5Rk4YaRfkcEM8X3EJofVBQQvemvaRpBHZsb7roSeYhG9E5YeqdmmSr3oH6rua44j9tDE2",
  "key9": "3MdkmvfGGixr147WvTEvAXrNKSYeRoYXwd3WD6rgVXhcX36h5NuxztKgmLgWd8C82UpxiAvpaDnwSJ1Lc7uNsmSy",
  "key10": "4SVqTr4rNNBbmtqpanSeSurhxyoiQJHbWDy6X7ahqD7TTNk6oSPtLvATkeiG8ueAz26wVM3idpvtAzWeMB71zZxm",
  "key11": "2tZ6HErNxSfVJwC7nDqhGxp9x79BbTyHKupjNg5moLfWErts8QRRJ4sgvVBfhQw2ZnghwrajBmQBA396cc3JbDq3",
  "key12": "7Jvt1zKbJJoaAnrMddXD4CFcyNQWtYHcddoMWLZCze8vgcyH8aLjxLu36vgHttWVCXcPxN5MeoRB8ZonhCTtRir",
  "key13": "RiyaTyJjekKDBeF8GpuVanbzEAqtAQpdjK34MF7r6BvdknWihwkMQHJiB48aKuj6S2A62khv62ZTfHaLodpu38D",
  "key14": "QWzznjPuMNm8ApakhfenfQqBzzVkE5kkJuYiftfYbNXJQWMi4EJc3Fab1NJ2aTsjcxAu4GTyKpBYPbjRQYMWRwX",
  "key15": "2pBEehLXTW2VKpWHQZnefdyrB7yBJrZjYTk9msWx2H8a1EUcqPoSzP1mEsKdzckmQuzcvb8XBMV7QFL7p78Xsq3n",
  "key16": "2NgqGfGu3zZmwNp8svzkUYWsd4b78SoSPYqqKXMhiV2tq3NBxKoBKPMoXghWugqiG9BqHPrJrKrQywmsMgCoQdpu",
  "key17": "2vmw4wz3x8oVb7go2aiHeeWfKKcy3TfqbdpPVqsW4yfsMQetea14QpPuDDRAVBSegpMf92tYE7pmbuPnSg92wTUh",
  "key18": "EcuZkraCr8rCe6p1WXpTQXtYHAjcj26jGiTr48BuX9QmpYeBMLSfxt45bUQV97gSozPa3J3Gw5KzTF3JrAXstUn",
  "key19": "4XbmomDhPH6ib8pgsJWSBpe6D5vJTgCcJvJYe8dxWzKb3HEUNbrNQ2xqYUa7jcmQNUrMRn4G2pWA5MFTALsSYR4D",
  "key20": "3tugn7nqsQJqbMnCjK1Mo5JAQQMmEVbaaGwU637o4rho1YBd32s58EiHzETgw7KpCZb8qfCHECNmmKNp4nExBVEm",
  "key21": "5dSvtuBt8xkhM5Agi5edeEgsR8jozkxhvn5dQEM1N2EeydH8T7WMKEvaovuVnNQRtLMLGxb8nDwKsCe5z6nDaL4A",
  "key22": "3YroQPAm48vJvQAjFqbLMhpePcRAShHkT1gBd65VESWiD6tNm7zxDESA4upG9N6htQXL3woBCWW5sPs2ugGXZAC6",
  "key23": "2jrbyijmxG4kWKHGPDkrZwBVzbqftnQFWiLXdLGU3myXhr6PLyEweGs45zq5ZpqEL6R6oPcE28CBd99r1tm7YdPJ",
  "key24": "2UZ7z8KRBikTQbvxa9pVX89sq5yfohTRj5zqnANt1V94U4NRYT5wqLDtmHNifcGdxN9VPboyxhkZhrBxZntpmDs4",
  "key25": "4EgM5AdE5oGVR91SM2g4WWM87kCCwJBgkVLkeCM1KBKqXDb8tT8ZcdxJVZ5ZTfdRg2A4WxARBEdG8iz2afAtPcAi",
  "key26": "73tE13WAUu7fRcUgxiP7gZCze7ADFkbqVewC5fWbfLY5ot4zSKdUf9sgHLcVBGFgie9QtFQNW3awvLMuKsSZanC",
  "key27": "RGQm1ju4vdpEkxnBhDx7kS5gw7FUwtgfKCvKNAbbcE3eMUKY9Fn6UVrzB4F8WRbDcPqbYy2fW5uhbcyX1C7ryz8",
  "key28": "HxF6ca6i5UoBFy35h4Jzx6pLidCzJdt1CgncVju9MAVgJb9Ag5Zvs66DBj3qMHTujWA19BPmKXxSgwPsoEjJQVe",
  "key29": "MPFNkCUXX8XytC1esEAYu5ghUe8iTGGuPK8BWs39WTrZ9gZKCir3rLdaKhfpZuUqb42D516FgTGnH4EdVATyGWU",
  "key30": "rh8r9tLYq7L1r7NfbA3zbQ9MLV8bxitTE1LJ8Z8TgVMyKDq3YHub6ZyDoi1JpS4tRyKqvfbounvoedRQ2FP2JKe",
  "key31": "5iGzBRvsRXtwL2hTrSrJ8Uf88udWe6bV2SSvCLKn5EAokisev63UtyWtsXuCh574z5ScZFqZJrTrLxrdyW8cHo3r",
  "key32": "2HjuwyH26oZQgQtjUrnhjfF9djubwAkjZTFeKTVEpAjndaZ4fWtL5XBvfRcMkuEjpgXntDFFnSKECPxvLSKAiohh",
  "key33": "5X9FTmxkWrYMGsorVb2yMsNXHg2JUvcu2RAJaUunpyXGQj7PHeTkD2eNmyciM4kJLupvPjNh74x7eRP74pj12MJV",
  "key34": "23rL7giHuzhfKW976eoRa9YNsvABCD8AmeJKX7WnXQc8nZFebQND574VmHBFcbVt8ceXe33RH9NJVZA66jAcFU5J",
  "key35": "3AzK85qy7fUNh9yu9vvJ3K4u1F39ZnYuhUq89RdDYBQprRu9hdH7KKJXA12AZkMCuAyuZgRoRp3SWzSEF49p4JYQ",
  "key36": "2SvYTAkukVXeix1eEkZaypMsSQbztSNoiGdvMTujBgTQ614sTCyz7ZmSpd23PLpikwcjA7tioStvG9jebVgPsyWv",
  "key37": "4LE6CQhRRJ7M1bVdDoVCd2YHPm4cBc3FeMdUicRGvmFnC5ENdJPH6UZY8LBDPqJhuvJmEWJn6ezLuUCzvFnPmGxH"
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
