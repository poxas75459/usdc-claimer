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
    "2vTPcwgP5B8FPVA1vYbt1NhVdNDfg3LqDJ48hLTTndsJP7MZKEjqVeuG97i2SA6ts5k8ZyEfFsivcxDdzSxJesKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67F8oe4LMuM4KJApnGCsdohKEQh2AuXS8nibL8ji4pXhD3qimVDAz3ZXQhQETZBQbMgt25jDEP1SbCD9Yx7a1xfF",
  "key1": "5X56WjSDU5fxnjZjU36W9WprXysUMa3ucJAHU3sH1FiDN11oC78b78HBivVsUTdu1oKUbyeJB2PNokjZWqRA9Bpw",
  "key2": "pP5N8tNmEpauikZ4kFc3iPSoauXRmAEG9Gjiu3XrqCXHabLmewexGZW9zbMj6sn3qpBCNHtKB6h1YxLRdFg3Z6U",
  "key3": "kFjAB6CAcVXbXYrU1BJ8m5KXxtU8S2GJsdJJfabr25aYDR8BiRCB5XfAZni9Pds7oiKQtzvjqizfJmk28kPSdze",
  "key4": "5WUHEojzidCCcgAECNNyTPbo9fJ2o3bryq5eMatWVDiKUXRKDKXaT98ES6AMXfC9srSNccF6xzU1ppxNSDAn3KWK",
  "key5": "3ozzSakC6PrZXMqGScvmpSbZkPXH42nkNZW5BW5rwx2qzjanL46gAfXdB2UN6rJCMSQhs4YmEGo4gNENKBdWAJSo",
  "key6": "5xTTPk9Q665WrnDQeMpYSKqC3Zs8447YQk96KHsjWptTEpHjtfNi6tMJbpqbrnWhD4zCTEwqFnYX9n5LjjfAeEy3",
  "key7": "3nP3xPU6N42CY5sQAyGptsDD5huk9zg7DVBCzvoEWNqtmnnd5vrGUDcGJ1iVaUjaMBFjNd6TXiubqFMXin7ibqDY",
  "key8": "67f7UqCUudtx4cBYwZASNKEL3uGXUbXqdMFGYqLHiDKASeJi6TX7JtyBzZKM7HpCzdLcNvU41ETqYYaJB6QbeQGx",
  "key9": "5EtKbtzRCpBAk57NGQYQTYkFYFvV4BHbGxziLY48xTx3bESYZZGzvmopvxD3U9je7kPJkdCt3n8FGjTZynBe4woW",
  "key10": "5FazoMmbWNsGEjh2vU1Uef82ds8BJ6jCuTjqwgZzycqxtVb5HYrGQGtm7EiQkpK7zhhkouqUx1xj3NDz9NKSn5HU",
  "key11": "37MjaARE4bHkZVzNcd6ScLp8anogcZNiYtxW9NpPU94o4YDZh7MBuaoKmHmKNGC2CVsQ9SQ4Mdgv2s9chJLSDZMP",
  "key12": "3NevhDVgDVQwxzEptjFTdxkrn7yWy88X2XskAYPpSG4xxd49YvQKY9BzHUkzsHjKY6f641iQoQD9zsw3ckkEWPyL",
  "key13": "66ujz8a37UBvq5PRqRBJ1WppGn9gsged7dMjSxRcyCTHuUPkXw4GrkUpmtb77j3oAvxuBt5TdfZHTyn77VVxMdxM",
  "key14": "4eM3D63uU9csKPqUa3At7izVctzxJAzF1K77BpjYSbZjMKEfGQDf9eXiKqzQi7bMPRcFRFAVEWznGQfLZQp9U2dU",
  "key15": "vnof1WWxQ1pYe3Z7veDjxL2DcTddEGEhXJZA6r7NX34vKVEYnjkd3ZMRW9YVJWXXNvXzZWJdsU8ifWGPZ22kf3T",
  "key16": "4JaCyoKXsmmKQM5gyLVEHJqKzxShNLyKoqv1L1BLAkz4tAzRednSzrUf9RWa7UtqZf4SBVFs5F7NDDZqfK9ZkUjx",
  "key17": "4WutC3tCxuW3Nxfe6Qo5yJ7Grpx5Nqf28RyS5nkgkGBpGBvtWsuS4aVpbefUqSY9JrZgHtP5dNMMX9rRWGtdz2Sd",
  "key18": "3fP4tuKPqXyW5FQzGvtQs3iKvioxdX8r12Ssn7Edi2kfoEFwTRS4rGamtzZPiE7uWgbh8ovfxMBiHmVSb6Lja7Ch",
  "key19": "3aW5T5uGXR6bmBkKYYjbZusXbDcj7SnwN8gDbjhmEyk2ycNKu9wdGXX5zYAhEBP8jgKRj3Pp36LuySeohwWSemNi",
  "key20": "rB5qCKdPQiwiuJ7fQHmjwDffk9oYLAKeoE3AQXdoX1goRybG5bemvc6qiFUyNiFvF1GhAsUfyTPdwAEW3ns2LMv",
  "key21": "2Fixrp4kWDP59MvRUKVdCxUF5ujfTWkKjFVa7zu1LGbdH9wAZwtXDr5wbZV72eqPMJmUhC36K2zPBQrxK6YTdRsV",
  "key22": "3uRVPJ8Pm5QZM3iZ9FxMoN8a5q3ZKcQiNvJAcmvViikknsxBVucw8wQ1SayRUMskCFxzaSSVTkRT4TRvpe3MEZ8X",
  "key23": "3cJomNqBN9T5SwgM6wbViaMb9aQkeEsFDjWuV6X4eBCVikrxR2Vx6fomzx5kANKNnktfBgXmp8oxoqyXNAJxSor6",
  "key24": "QLvTGwoWhP2mHFdLjexzZvuzAP2frkgfEw82A3cgC4RhL6Fhgy2fTt3Ww7F6ebYxHabWbHbHS5B35syeBWREoh8",
  "key25": "3xCYZzp3tk3RcXsf8V5uEkdhBobKwFYBfz4KsqP1oNrn17PiJBYjzqLxMXk8GboeV2zcqVvKLv8JShs59GECwzLJ",
  "key26": "5UxhY9wuDs3WrGCPy4QFA7GPvx14XYHotgRoB3T35D8rzoSgqS7X5mmdrk8ftwzVwCASadRUYtjToJyY1W52Gw44",
  "key27": "3BHqF1qrXXuUY8jCKBSnp8k6rSyqGwbuipTjGiRc38fXSe6GynaNzJ4y5gn2HH6pDqp6jH1fM998x4TTGoRajFGb",
  "key28": "3SCdjJm8YMRNPKuYKdo2xosUqxgFtFyJvKJQ3adyhAH5LESmbHZwhNthph6BvrJc3JPWgjrPcPRPDEe8qCZL1sXT",
  "key29": "4CCdE7AqpjAHoSxvJwahaEp2ApWKdmwtynAT1gpe7TpaMTdkBqxkyy6GpAo2Qc5QiT8NCUwP9wqwamsC9Kh67th6",
  "key30": "3Pr2MiqZe4Ds7WT16aqhGFb9uBroKZsAvCnXh1sofXsEnpGZFTvPvDvKAyi4M4oiZkrZoZh28LcXpNmhpPzYHZa6",
  "key31": "2jkACY2gKak72bixBv6nq7qZcrnjxjExCSttxZNevgy4XfwgqyD2T6xdcomWX6MpTzRabCAfNZvchUhf1rL2zkbq",
  "key32": "nJvCBL9aG18aMkK3MB7rFc1SMDUzxtSA7pjkJuTZoJD6rhVnQ46yU3xocCjZ5vgV1uXAmuzhgxCxQAQ1jYiZvwn",
  "key33": "3zq4idm37UbDroLEmWTvQyC3gvcXhqHZG9WBfzwG5448hRq5v3sTQfwyeHfBsVPgrNJw82XRjRdvU8RDEqt3Lawv",
  "key34": "58iZoHiz6Xbw9R6Pqh6vg4NV6xbfmkvSs6SJUt3KqjTW6xcV5KFNVSsdUJKwyBRDiU3KggFu1D32UYCYNjWmZwvj",
  "key35": "2cbBFLSkwm2hdvGBUxAhYEmn8xr2xjshtS9J4SkSrM2g6AfSWRn6obA19KQyVLZ86cftL8rofk7yyjFWLfTtsy2Z",
  "key36": "du6NfUvev9z4V5osaKns2cgwzL9qG4cow3YCKQghmS9S7WiJh9HVMCvL1x6F9pyqVWG3NKpxt1dgh6S3ZQdwvSC",
  "key37": "5t8v6MjW8tads2HMZmZv7T8w1o6gWKpPchCsyL428P2cKondWnxc8RhWdGdJMDLc123C4ocAC57brnjimKRaXkVP",
  "key38": "4WLVLLgFxiq9dve3TwrRnCHAqumwtH2vK6yaBMPffFG9hJVc87KcTnVUBxZh1FBabi2ZconmWhzLJPVFP7a6R6em",
  "key39": "4ijB2DD9rNT6UpihoHEpEeudUesWjC6RB2XUf2gr8mkeYLKpzvTTog2meSnyvQfRpQc1KCFuX6vSkyDXALY2uV4",
  "key40": "3Esm7AegmzjBuaZFBhDFSKyi65reM1CduPijuKo3kxmmRECfLGKGqANTWFbuM3inZXX5n8vgxQqfQBYSkX5CCcLe",
  "key41": "qn62Gpt3ygHb9tZsw89HVnARqRJAyrKDVxSeJ8PfbkuoisaiC3CPFhdFQdoYSjkiGHrXud9yRhyuKrpbEGPzEWm",
  "key42": "3zcxmnBHPTi1Cfk6CeQqoqFWMkGStZKZH788xPBY57JbRsFSURQUcFNEiQDCGiFDZvPPontU5Jk282ZYdLV3nWRx",
  "key43": "21vVQUd2cRAXEb92ysryXCFNoQxCCNfYa1iUQtUwYEqdKxZKnqu9sLbKiWR2vswGMYgYBoAqs9wJAedoQugHyrkj",
  "key44": "5WQuMrHnEYwZRtYA7ittEM1NoRH33JpvBZjQHKuQS3q3rMMycYgR8NtfrLEpra5msRPkpLfKaAxVdCeqTSix9TJz",
  "key45": "4W7mjFk2cLHYXJKzns3972v3MYnzDQKDzQhpabU1SvoKBrnEFrWFcibnwjAAd9qWCeaCHH2BPs3M2QDi4quPZSus"
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
