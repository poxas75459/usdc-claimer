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
    "5QsZTH2MFbaCeXauXYMVUZyhwy1GPi6B5jqx1J5HmjCoC3uRQfee9aZmfsHNMfayvqjuxwuqs7EfEnfNWqsUgiEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NhniC2dypm6UqCRhVExFBzA9ZiEXmcUJjygv2wYsBGS1r7txi8hKV8jvLdoXr1XNw7FD4k4cdmR3jrG7Wz3HWjq",
  "key1": "2jEL6GVyrgj4J78fga7PYWDcSFiMdrd4AeDxgzDWV5TetMUa1RR4EmgevRjTXyREFcQfavcXdTbzn8EL3AsCrWcm",
  "key2": "3AETye4WTJMsqVe8SZj3Se3dr8ncJGGvBdDsMDuvJnKdiBx8ZkxMjS1ahJdxbi95R8jWv5KcwQQLcm73PC3vXxcw",
  "key3": "3Cg4LfPcRPUgaM4vwigoSdABDCfWq3Hd6GgKZiKcyzXUj1cdD9ARDnVwX8XjwvTHeMPVVP4QdLbVP9dK3Kfn9trx",
  "key4": "3vAgwP5mSmwMjkxsEFNTwB2Zkn1m4jDD7SxDppnVGpov6sk97WnVoWXmEDRBvoz6WcZnPGeRxuQsNYZtY6oxHEk9",
  "key5": "321GDusajpnZBiFRyr7Uhb7hQnRcbtRxZNkbnMbihKavHRJuApBWiCpgTJcdey9ahekt5YJpAZ5nF8XNMGuBAYRa",
  "key6": "4VYxpCzGqYzoAWr7RYonJ86P6YikPRXhETMjLuhQMbR57qBnuMWQDQe81Rq9t4zSZpYsUj2wvk9HeLjyWagiqQhd",
  "key7": "2dqJ5nfte4ZVyrC3MeLf7WJkUnqUdWLYWnxFyYidV4dt9ikBAwbPiHTVsGbzSzMid5YiKonWhbM9CcrEzUzFGw7y",
  "key8": "5biyMs9GkpLuB5YtiWdVoGQk4aCGZdS8JeJeGe7wiTDqvsonhzUJCfPqK3Ad94GrGVCNEnwBSRQQdu5zUU6WAJ1E",
  "key9": "31v923kaPc5Zf3eq5EmvzRBZPL3pg91a2XKnHLQfxeTwWg58UuFhNSG2t455nXPUUSNX2GkiXB4brscKJPXepu4r",
  "key10": "2q74ncMxLcPAneBmyWxwfDvka2w1PxWQtGgwVsacGPXbroN8XrAAeyZP2QCfPDR2Vaa9e36bmS1jb5wTr78armMR",
  "key11": "55BxJr1QnYrTNJseYJnsr5KjZoPC7Ni2L5YBi5cBbRgreAFTGEF6XUd8JnTQoeQzGjBNctEPCcRDgegCe2hzH94a",
  "key12": "66ja4NuLwx6SeAHZNzey3NWk5w7NjWCttsZPxPUJXje7Dd3FFXmV91yRagjxfBTyBDmrkfJe1e2mJjx8tvQmLq7R",
  "key13": "2wWSen1JxiUzRTXMJdzJXLeHRhb1a7Yuubbrf4hL3iee1xzSUHwwapyR4TEWJ2LQWTfpTod4942BKjQ7aB7wmcRH",
  "key14": "2JSrmWW6NEuPPkesM7jejxVrQFnsgRsr1a77R4VmxYU7rZpjBX7MFgFcdw9VBawi1j7gwgfLVw5ztisuso1fEapa",
  "key15": "2mJioWKrgnbgZ2TFNs2WdLop3S8v5iGGB6ZfjXSpeUReCnCrXMSGETjQGzCFLf9d33TSu7v5eGst8JsFabrxJV1J",
  "key16": "3yo964Ey1AAGosjzUUJ5D5smwWipY3m7mcNK5kpAYR3umwPgSfGPX9mNC7vtsbvWpW1UCojHVmcaj8UQCMzQ1pz",
  "key17": "5EeTg2TL5PBpqc4nBptrPQA2DjsKq6iHHKAxnxUH2ZbL2DRNA6zUZvXoNfER9qcUs4T3HdFwWKBeP254gpEo4Bqd",
  "key18": "4zk4SpuxCaLuDQrmuH9MSei6gDfLWWbdq8HFfPGPU1rL29z1UQZSt7u8aEhJW9aQBcXpaAF7FP4HR83611UboqmR",
  "key19": "4oivzbPevggRPBrG5xN2jKiE1gz9Aaq2okhE861gbR4cthKUsov54CTq7CQJ4x3qtU9DXDHi2pAXf9uAKZA2YR7A",
  "key20": "2FXTR5zHTv9Qv8iHiwPHhexGcKinRvL9hQ8hH5LxV21YqiJP1mg1pv77yjQ1LQ9VWT42jCtbBi6pn7a3Tx9DA9e1",
  "key21": "4o9EwHgPRmdRcYRmFJfL1uUo4pBH5QxRRjfbz2ou8rUyLPh7pGrbw7rHMbWZfk57BWVygnJRdmMAMmABW6nQz8UT",
  "key22": "ZMR8dMtmXV1Z3hbzmjb1a8pKFVzGZMsPg83tyJvrc3qKrC3M4Rm7bweHhcphsxKs6Q6MW1pJdT96vRQ1hQfmwHW",
  "key23": "hJSTZ3EJR8sax29DcYxEMezqC52oqXs4dcQ41oA6ZZPBd5AWsQkgbUKRVtLMs8PfyxSfVfrR57RiUMCJGHwhQat",
  "key24": "1xXpNRqwDf2Mdh6whU9hzKbvC6ofpnEzY56gJkCeSLbtTiSHMQAgsLNq5vEvcjpAmFCLk621rynvCFhczUAqDsg",
  "key25": "4QnMVYc8ZMvb6VMfTy963Wcyn3HtCbxfeqA45Joc4t8k4xrw9qufYeQQfFTXuHkid1AdAYqSi3jcw9PiQjMLfrQz",
  "key26": "4dcNuxXZZT9zAXUHnJhpHa2gH6iFsZTyEMQGjQdow9UrNNY82T4muwwCf6dUab4mX3SSgj6KtyH6VYUrz34JuqVW",
  "key27": "5d2zzhBxpScSpdRyRWz98yPohJHZw2dZX2J3k2jjBTurJgnTuU9UM1SyAKQE2M9USPeQ9V6NPP7YEEPGDTRoqA19",
  "key28": "65vUExv1QcPUeVvPL7CYh5EzzwXhM9LQFMuSC3U1Par2HHRuXTVFhLXh6MyJuK7yJUHkPW5Cx9FKENFD6Zi7DjXM",
  "key29": "4hoEMKNB7txSmbcdLrTV55uJy44fPoKRvhYnw2FVGXAq9vj1LLcbbNWsJpPHs5ugmRQVL6H7ni9Mm1qzyCoQLahS",
  "key30": "2R7fjcjQoNpc1qjyraC3hWsmttxoTfYxiHVTWERTSQYrSGtLqDGpDDJEC7KGuA22CDCD5MRHjFZDFQ6fhfsKLfiz",
  "key31": "5FMFgbDuVvuSiwfKPr36eWa46g6N3MVy9HTY2aQrdCEMimcznzSKuqynbGikBHkd5qzvFV3AVEfdUwtPhzb3PZL5",
  "key32": "4mJa29qfNNW6n6K3VWxHw5hZiLFYgwm8nkWKLSpov381evmVAp3zXzHAu4PcMnCjZJJYWEPB1nPu5yK9aXSCvsfh",
  "key33": "4PJb2JEp21c8CrKB8qwMexKU4zbgow5NQ49JLPMAym44aUt4mvHSoKzy2isxYBdn84j9Y3CfcjTQrjKAzR8FexVt",
  "key34": "36nY2XVoiMCFJNsGi2nKeBSEJ4GRQTDebFQvMdt9QDaizWiniEgMRqofHCoM86M76XjvcHBpUA3zeZrqDxV7CqYu",
  "key35": "jhWzmCNq5zh4VCS3qx8iJx9a5S2jxkq5LU1SwmbLPnb6YZdQcApNa4N7dBfcxmMnyraXMiuXfqSmvQopwnFQ8dM",
  "key36": "5BM9WxG2S296S65iv8i4kw2hiLgdPCYvmNAv1nNojX7p6V68DaNR29TWxoM8ycVHqDpoPxXX2F7r2UWn51MvUBiZ",
  "key37": "2X8ERkc1m475swLUeH3b7LXwzXAtcqFtnXFiSg9edNdUFfmSLxbELnQD8pXvQXrW7bTm4c39g7bf2UNLrhZ7mCNu",
  "key38": "3EDmQ8SHassTKPcjZoouvTWpWxp7EPdeNudYGY67p54ScPN73h4NH5N1GQsLGW8wtv6oGsEypVv6rr8znZsg6XY7",
  "key39": "FcT9zCHdt5SoT851RMEJmwBKrQLUfjXi8ZVnRHAgx6RfC3DbSRmm2koyhLvxFy6wixRNnMdV4zCJeXteTfCsZBy",
  "key40": "ZBH2mtCTgAhfpJjKMo6YfcwW1erWXmWaBjtYpSoB1KeSct9UePhAsoSp24MopPWX2KDfXxp1KVEHXgS87hjR8Tr",
  "key41": "3TGSf1KEnQevz8jz3ZS4qQRqKvrajBPmBeEvrKjSqnugoxXGW4hX25BLbHhXuLkDBceT1Sz2swMozxD6g7imRjSg",
  "key42": "4NJTzu3PrZFjevDpMMsru8Dj84xv9VhbnZNsrZiBJrcXbhv7a1fdgaqnvcoT75nU6LqmCzfAwp3pE6ZNzVa4E2Nr",
  "key43": "5n64GpEoDZDptGpzzmmTpRtF8rUsFL5Sv6ueqabfnMiNWzxxmCZaU3aryvGamixziYzaX1sXwtVmKniZ9z95JbAP",
  "key44": "2GRg9xwj7SQU381HLqQtnPXj5xEYCjXVoKDXeLRUBJocbYQspu6iACVASkyZD7Y8gff7EgwFpiG74mEGFydX5w1G",
  "key45": "8Udekim9id6qWscnXKF2T9WLz45aK8UhqPeW8t7d6jDLCXnY2BJE81mmAdas4VA3F6xiuRw4y8hbRJLfedCknPR",
  "key46": "4hVD3jKkd4Kc9MsAPTcDSXu2jnxihRBjo61zDrwwPWyced3Xxk2msZQL1c2eMZnuPnHLa3Qna9rCReXsErc7mJd4"
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
