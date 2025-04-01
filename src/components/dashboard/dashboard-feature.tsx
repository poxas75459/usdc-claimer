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
    "1yeyi9eFDESCUanao5WjQmdUyGKGpzfJnKakfpydrcdnYnvMioSWQS3kZLrgXDXJzTfB1q6FTMV4equ4Cqu4j5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GkhK2rXBy3dUW6yqxiTfWq5F3T5HQk1ZzD3cAaWmKpaheESDYJV9ihzpGfKd9E68DFnRbrJLHnJqKbBvhmRJ92k",
  "key1": "QrDoKVKpqEMHo2QHj6W3WYLYA7WzEoGHuxxycPwUTfFfmeMuDJMkkDDNxkCmrDRbxR6E4G1VQce4cXKZfu7fmMq",
  "key2": "Xhb4hPrGMowYtdeJc9ZFZZK6PiEMdS19J8X9BC2hkD2vKzKf55EgoJdu5eUoJ3ak4nAXZxv9xkck5SzfVpSUFHn",
  "key3": "Y7aGN9jUs6Q2Ua4eXbNnCDQKi7T8aXyAxJvjFiwJbu1MUkTQAM7qyAYq5GsaTXjXHUv68CYizYiAD5Kb4eVDfrv",
  "key4": "5usdSj2X8wixE54MosLRrB6me96eCuKyXKVte74p4vkf4e2HvMf6muhmNv3D2fVcCgUaqDWc4YmD8gGu4Jj3k5pB",
  "key5": "4QMCTHcWGBWenYVGNfzRh4UXunnRU1QmGSoGDhFVacekr7H4YgtLxNxeeW2xAjPBZZu1xdMLtEMv9uM7fnXrcaUm",
  "key6": "3C2bzcWQjLRLmLfunAvcTNeXo4NZc6TMKQQnrcpHW7YJK8fhKuk7V3pWAjFyfp5wco8fyqiWWC14CftNQ4wsSLMU",
  "key7": "2vfpKHVk4oVAboLeRbNSCT8hbvBoG3SGDspPN8Ed7ppgjRDW3jiEuttQ6grdiBFT3VXeBuJeWBx5pth94ruksgR6",
  "key8": "3onaB96FgBdYfwL7ajTHJSBZKeizb1yw88DwfjNHDhH2E6iVMHNSjeFtd7U9on7gW6veVPFFsbdouXXiyjX7jYQy",
  "key9": "o361zH85QCtPYcRvMYgYzyWRFGWNqn6pAgwqwZVHUYNKPoMsBVk2DZR2F9GUsUJXomrFdhHgy8XeWH6PCDzeSNi",
  "key10": "JZYVQGKyrj79UiDzP83thd8xwoMFd9XQZF8U7EHYHGQkuqvsLNutpCvc2MVb8GGjHfMbwVwHkA9RwGZZ86pNh8q",
  "key11": "2fGsv6N7TwSVNXPoWJ14haj5NRBoqJyyVRUAcs1gs1UugJr9ifXiomMzixrSR9jHcmebZL5xub8jhhkYx3oGBeEG",
  "key12": "2soEy6rxj5JyC8u4QdMMDug1ffEr7ndJWxpNTPagzR2CwfWwbHPquE7UDdupJYyTJmKGvoryLZPzrR1EiSsTeFkQ",
  "key13": "EmvVHuxbgTHV6neEgHbUTk4h3ETXfMWC5PA2nt65VcPYNFpMEE6xpgN48fjbXuKfaVcXVKdMFezMJjt22EGSoXR",
  "key14": "2vH7DyAHzR8T7rhs1VMdbVyp3rHHukJA3gPk13aNrmpupDfYqkMU9B2tzw7QRJtCmCP6KG92Xzy6PttFQ7XhL7Hz",
  "key15": "4womiq5QaKXiLPCt8qnFcosiNHetaiPRUmYrNbwGDrpKGtDhY52SMcWZL5xgNRtXiHvsi9dHx8swaXY4HPFevUhj",
  "key16": "5B2XFSd6Wu31HXqpRhMTDDTW1u3m9sdHWp24YFUDCcyQ4SkrDnHEAWqm6gxQK6hG476aNfVSLaYoF2GyWdNcBw2J",
  "key17": "co932cM9K7Xo1CTSxH12oLcG43ZcbJwQExcgcCFfEgSUYizcaxE96nNzh8nkVKJFtjU6uTJAWDQc72Jv7bEsJR9",
  "key18": "159PocF7VzrUsY7LkTsb6MFS61LSdtAQQYfgZ9CD6XqWa8WobrsewaXNNPrrdZxxm1o3W8c9zzE4Q6mT4srhr5f",
  "key19": "5vPrwQyub5bjicgCBTBmNUg7LYi2Myt9dYaybBnAFcPMSdQAY2md4Mx9QwUp1KnzBFxFYohhh5VfryNjBRcCw5zH",
  "key20": "38Dnfcp2iAjfBC6sZXS59M7WJT5PEo9RGqrmTjmcw61zqZeRY4rNJG9HfqbhLFHEKH9HwDJRrz61jnaHBeVePTFt",
  "key21": "4houzmnb2wSnp39cAvtPAYNoML32Mf4BGZUEg5JULEQWvTKhTSf2WC6ThUZv41TZX9ZfeLgBVm5kd4Qvcha2omVD",
  "key22": "5zVDDzX6fHSiHom2HDkYgLaRam4JGpA4L3oWLoc2KW3S8JKA33qKe18FFyUgvU4S8tEsELDy14DXMZpWbpMm2dPP",
  "key23": "3yvBSNGwgiEDwajouuM7Qa4uob1vqu6HAtHfL9roqTDac9ARLy77cTQ7pFvMGrFV1XRRSe9r9Fs33drxjQ7ADM1N",
  "key24": "5PxZbr8Mm8h4NQeFqUns9BqvVdSjHQxWjDwiyCYobg68xUqxkcxskTZd61RsjE69FM7z31kmFEMeUPdbfXUytjoA",
  "key25": "4UQ3AymdPiS2L5M1CYTQNNimA7r86fnodY3cRjNjT5vTYxvFKjCwud3q8rerEYXUxskFD1jFyRMVc5spgMULL8bc",
  "key26": "2FdZRjEVygiYdvwv52rVvyKT8VbYKs6dk88VShf9MBJ9dJnw34pdqHpbbBBS5FQxborCpm3GTTZPcNMRCMPjWFNb",
  "key27": "2tVS3DcZ25g6jr5nHwmVhr6dYGsfhiEoeaqPAKh5a1z95BxYqke9MWmE1Hnzme23zir5FdnPiuvtTmsMNQPssMtx",
  "key28": "UCiNhP7ExkLSSPZR2vMZs9LTa8nMAdVKgYejdhVcEPcLuSQYKihL38sy2jJ689BPBo7Zaia4aRnp4wYQb7c9X3u",
  "key29": "3Y8Uc9tGfKbxf1ZxE7XkfL5hdCjh8D2ZiBhyGBJoD5o3LYvA4XUSg8HgzKHqQxjjPXhRDM9vs7KSP6yubRh1vTcz",
  "key30": "45hCeyDqkaxQKYddxdAWiosLLTwEpWAvBYjB49qqHgPn8dceRrj7zM3pZQfof3bLwCmCwJr8sHDBc4bzfaCqtCqz",
  "key31": "59QNyppoCZKwPQTj3pcqtny8H7SyiVFfrgo725eo8uJJZKqGw3AvqjRNpx78y2RhRqi6mucex8cposqxXENgTRer",
  "key32": "3iWJu3xpgNkXqU78datBmJAS1Nb44T6LauF5zF6CLnu2buCGN7AXytDbqxcsAxRatqCUsZ9TpSqMcEPomFQ1tDU5",
  "key33": "3xo2j4FekMHjDKTR2apN7yLnv8MkPztcq53tSfxaLyU1TpVsC2v5GgbYv41QBRftLsjjqum4MTZXMCAriCckFpMz",
  "key34": "2o1kH9CNXmTHHMJt1iEUzPuqnepguCeTpfJcGBbjckmAkThkAqT47dNFojTSDqMURWqAQeybxiUUcUV18P53oNn4",
  "key35": "5SP3SpqEiDyUarEEciRy43UaDB8PKS8TyNymQCfVCQrpYGorcmKeU7r971YjApSsAEXa5ELmdNRwYkcqQhBWUYzZ",
  "key36": "2yGLmA2YxaqB96AxS7tBYuzryeioMJD65byrKJLG9rr2TxLYMwq8oLiRLAkxHU5AUrWNK1rbB1jhswDsJ1xSNh4f",
  "key37": "4gA9Rsn4q3xcZX7yBebKNaTuAkzfSnFtyL3bSJQrcL8qkTNYJEyQs3Zs7aMJ6br4iKeLcEPs36pBCWtQDvznDbVn",
  "key38": "46z3Box1vRmtsSysb44xro9GkaYFcF3gADcat7fmGu8mQ1VajQPz7GGhULhoBa8RKtXTay6qcLo3kLQFoiGdh3Wz",
  "key39": "2isTYzK5tJQTkcBcYwNUm3hipGfHbZer7hpf3tvdbpEuXybamt1nEvuSrbUHgCNTVvid8pkKzqCJwKCG1UpfZY1k",
  "key40": "vZqU7MsBTtnnZQMJ9cxRQdtjYMhUx3qPJvRQgffLsvXqtvsLsevQSKhVGjyPYmFHq19JXRdh4vV7GjciASQi9GW",
  "key41": "Urc9WmsUqogA2RSygKhcZB4GyFwFQi896wGekPBR2ZTLe3To9ewrD3V2L1zPNitChjepq2WvgTenTJU2mdnHVEY",
  "key42": "4D5ut63dg6P7oXvUsHbZiaKRtE8HyNFdQJJwKfEzYtAzvFkK4gDfzMhyqCZAUKer49B1tPNN3JB3GgVWnAikopnh",
  "key43": "5gywf8diBkoqRyKmKv8ipKP76nLquY59QJzYh5K4e5P5JVTcrRheMxCycsVDWf3cWn7ra5cViS6DTHsAiWLM23iP",
  "key44": "4JtJJSNrqc9MCeF8p9RYU7HsaP6uCzrCPvwDLUqtJztzFR5LWgofzVQW1StMX8QwYyAapt6kPmkuhf18dqGjX1mT",
  "key45": "4CMKwLXir3SB44uPky5SECe9tQoxcntKoVkpEEoEHHasYuYNXHPhPQaBjxgV8YghMKGxBjHNnThn9Bs3M8bZEePo",
  "key46": "4aijGkuoJ4WC3tuRfH2TbpozTnSkJAWXCtmnd3s6VPEFmsiEaih539eNYmZujk9YjasnoUQ6Gysz19uDA4Rnjd4g",
  "key47": "5CmbbRfHUxT9Uqrwv35Gx4MhvmQxjHbzx4X9KKgyQf5ym8uiZRPzeV14jCLZ4kHANfxRC9FXxxKViagK2Hk3tWLq"
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
