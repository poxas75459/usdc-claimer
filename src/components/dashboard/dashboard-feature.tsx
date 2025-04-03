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
    "2DuvGtxUCWAC8TDSTGdYpNfEUpsZwD2C79AU6bocQW9YQjuzgw2YxC2PAwt5bqDTTEvD9JBKp2mxoiYPEPSWJj2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cksMit4qRhwrrrUa73h11ed5w38TzsyTsz2dYTbwEJrY83WbNzuvUyFgDmWaAWBGxKDoTqTzvRgv6uNFYePxANe",
  "key1": "3LpcHzP9mpLdzN2VYbzm9SKVJnSWA4isJpYn6NEuTNsFR9kHM9KDH1QJRjswoVxVRZ9Tfwoq3RTET4KufNqXvQAF",
  "key2": "3mB8mmHBBUtPNeW3HZnsKz7nQMF9kvqL77z5fjRya6dTMqj84tYdGwifPw4cw5qMweYrTRNpuav4zx2Hc7CMkmiW",
  "key3": "2T5vXk4xq6YvsPFqAvoEBD99zPxL4aB4MV7QHJz4uEaHG4MQdcJygpj5ktQ6D4A1cnoRfZJ3sPczVwQTfdNtzr2",
  "key4": "3QFiQrzbYqYjJSKVmwe1XLWT4az18fjTfsYjKa9HP3tMW1DyyyhoTLrNa8nWKm2sw9XJ8NeLv16k4Shr44tBM23E",
  "key5": "3vMXZaahwTpzxkiCprCnVv4m4SSwsm7tA5h868ef3zyTEPjkeFVWbwpVz2qM4B682ypD857QRKVF5q5FANxaBpzi",
  "key6": "5jxTraerVMGHN3Dv6nH82AU1iYYjgQYrrB9zmhb6eRNBFt3bzTkYqUiZd8FErRXtPNHnaqxWR9dVzHhnB2vQveuV",
  "key7": "57UWvYGCCj33d1mQgVsc1VuucJMfxfqBY9sBjGVK9sxktZJJvFJBhmUq3EuHkZynFBrfcc87VddcJ679jydEK1cE",
  "key8": "343e8BrtKZnVkZovSdfMTf77LYmCnngfpPmk65jSju4BBQph8xqhTndbj4QPqXzsY1BZ7GDnPcVKh5xHEub3QWpx",
  "key9": "5tU83D6skZgmvHTKWwTr4saBY25ySrL3dyoWjPxaLiPbJjdc91qr4nwDTP23xrfGH5tng1n7ZWJm1cfadpHGwTvg",
  "key10": "3eYX7C4X33yes6md9Y3uiVCSjVL9iUkfKygooQYCFXLucvMA4L2FgnHTwbgYzeXsVzADzraNFmsm2GBvEGjZaECs",
  "key11": "4gvePJabmPXG51fwyh3yAgzwZUhr7PYHauhmMHPdDuuZAgmVCRMvg3BUuTZFh17XmmUuSxuxmaiXhvQToKGaQX5Y",
  "key12": "3BnZyeipusmwtSk176PghAb5RZBGpkRtDvzaCYVz2d8vcR16AFwSKoTSY8JoWmki98ajiqRCD6VyRKAhrvGcWhDA",
  "key13": "38TaD46wPqjtfboyUm4NAGhvqTva6NRBVaogfMqB6yZ1ewCEzsp2SabxwHs6FHZEDAr5pi8xDxUPhJLPVFjngv8d",
  "key14": "55Xd5az1CMeiPdHPw2W1ytXV3UyUoJ9XRqUHqFmodu8YdAb4w3MSXTuVCXxARi313z3AP8Yrkvo3hj614XGoS4nu",
  "key15": "4vmv4XzxQacbgQBjcu7cuCPEP5MXQbcpQdiJ6tK5VYB1NxgXisVCLqeQ3BjXkNL9Rnx6UcrmjpQAAqBpdGDsDh8M",
  "key16": "2LfqYE88Z8h9iGd6btJgnEEt6Lsw36E5m9B8E3sAF333kFCf6sdBgqiC4ZvmL1k8CN86bnyDscqSUF2zXDopfkFt",
  "key17": "8JM5vH4aDvPgxWtv57ULrd8a9heR9TiCxvJzEpjYM9jLkWCfz2BwUVzbWGUAZGZp5SaS2cmZJNbPcTPt2kEr9bL",
  "key18": "ZGNvGYenuk1bfdCsBMykdNPEAwbjJrRTJnfimR3ZZsK8DB7km5CRW82hK5PaKwkwYyih99LG9dbS6595WsKNo6q",
  "key19": "2uxQ91HkvVRTodgEtcHacDJGfm5YAGn33b54VmDiv36gNYWPar73CAtwYhZcTnZSF54HZNSiwGViuQDL9cpqq7yu",
  "key20": "5jaRn8x31EmfYf63skdjRkCwKGnNVtGBLhbADiLZ7a1stSz9LJDSkomY8ipv5MwKwbH4Ytn1KWHSwp1eQVPkeBDK",
  "key21": "45BoPQXct4rseuP2dSfPSGQBgNdXX1P6sKKM6jDiLhAwhAiJtQufjGYmC4tSXR8oWKwnYsdSjvDj4U5sjgqzTYyf",
  "key22": "4itn3R9aofb6kZvQj8a1n78veBjyyFPxzDPtr29JX7Po5WccLL1MNLvd6FBamVdug6vQkHAJeE2vUrJFRCbvjK5j",
  "key23": "3RJFm29i1kP8cGvHoCYfnDhCNgQNJQnxdTZibJpECzdib4oC13ZQsA1ZSUTUi2VGPW186qxHuWHGmRMP8hJfz6cd",
  "key24": "nnQtXxMt6jUH5WQVhYTetmdjHcEtrM6b1WieBJdyEhPk8F5GaE8VX2XrY6EJXa3i5iPDDCM1kUMfKesNQGMY318",
  "key25": "4X9qbV3ax1DSqzkRFbvjso4ypk2Hq9ip9sf5M6rYVbojaAFYyCdaQ1zkgCrzt27Gj9TQRirNqvHcM7LaTfSHxmnj",
  "key26": "2s5hgdBm1dFB6dMA55TYDMYwLwCrBfbVqRhMGRPZMZZtuDdsWT4SRrahr2SLQGcVoLw4kJEPZm1xtJxPhUCoYBgd",
  "key27": "3aqpjpBqeNo6egHt1JkHkfeW2LF8kgzqqFoj4fJaWwcxZ9gCYrV3FrkEe3HbfKA7mL2qDUhr6D2ZwHEV6pUGMRmr",
  "key28": "3dstiGR4AVkXdeB5QA3MRF9Ckcoeh6XJqYAJM1wHqkeZ31JUCcQtLyRqdMj1yFwmUqPywcxEeL778hgWbyHMgP15",
  "key29": "cMzbuef9itScLR7c8CusD35uqH3WZ3BGBAYw6mFkUxTX1SHpKBx3yoTfzKthLfWriGPXvH9CJ1nSfRveTn5T6iM",
  "key30": "2jttuQQK6KQREUQdedjW4b28UwuHLvsU9jBaSRuVobiAiCH7X8fea5bPrshoCKnbYGdVaryMMpezw4TRnhctBZFR",
  "key31": "4NWGDXCY3hHFqaHhadEKVuDD133t3VeBBr1vrFCZUCaS6Dc5KwFwatUYGxLChv8sCG35kYactysPyK2QWjk1e7Hg",
  "key32": "4kuJQf7duXm4vWxQBUaiP9bymg8e5iRquWuomj913bT5BEe7DUMDb3dfAnVCYWKbkCpLu8aPnmWLSh5RHwWbzjKx",
  "key33": "2CV63RxNGbNRYf4UFBb4Qr5FGgPEfn235ME2o87reJJbgmo6MyDXaZx4XAfEoFNmGr5f5WSByYUjuZrvbNvpvbC7",
  "key34": "51SbziCp5sTmttmzTT2k7WEnJgoq2V6rD9hodjvZ25ECBvZcFKrQsaiTSFFXDLrJNK3pxwydKSVvbEgHniiF5TNh",
  "key35": "p9xqeefrrWi8F3B7nqFCL5vqW1JEQGKDCa6FRiGNSewzB5EhTBQ5cJAQ2PQaunnU9bYzVUpkSVYfGoVAvf5MgaJ",
  "key36": "4ssserNLU8xaaF5iM6ivuFfbfardt2yqaJCWXF2jZL1Dn5SX4bsUEpUjAu9Jir34UQABRGigmqrQGZrLx1wUc9s",
  "key37": "62XdB54BUuU1t6LEqPsZGRMBCbvwWYMY2GLPkh7WeiqMA1bA5ysRH3VftUGzCdrZMjH1q65hVRZXrbvuH2J6Nb8a",
  "key38": "25goNFLPHBWKwjdTtpnNf5SWGWDJufwzJsA745kcJdcBwtWjWS9yNbQBtzuFz63c1v4ZFhHe7tcNQS3dj2x9FN5Q",
  "key39": "5SqYnv3By6qsXG5GXwDBt6fBS9Zzmbqz2Ft8wYgZe5BswQZDxCjPQXUp8zHDH7DCVzQLXMTdYnkxdZJEtaoUT9Xm",
  "key40": "2CyMnox6tDEjR2Vg4rzYdPKKHwguYrwjFQ8ruh87CHzR6CNnNvqahf1d3BGpvBDGd8wRuKwPqSeDPrSLUwe9ioWU",
  "key41": "zBFzgc7LCkMbtmzhF4j2ELvk5tChyA6zK5s26QCTPw4u2YRmx3eRTkPraUmHQ9se74Vo2xbB2Qh543vQcLKtkNc"
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
