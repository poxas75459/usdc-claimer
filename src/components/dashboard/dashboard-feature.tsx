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
    "wyLt5caiwPTNhTu8KieFXxpdSpmsyFZYgcQzz4Pjz2iyxUZLKTsracZALwWZrHqRERC6wrVLNEtScJaJGKRAcbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mfxCaboFNgHXusQHV4tFtpUaPUb3e3WQz7zTnVyE9aCiDsu9fc8ttrFQXmHqVmjyyRNabNUCFa3cyyiRtWG3oJi",
  "key1": "nPivq3SZaUPMWSaeLkKEiGdfsszJyM7hhh26RURAaaDwZKY2obJqY7hPL9xY9DbsvkQ7zSpSXBNf16Z5etUuZPP",
  "key2": "2G16aQrfuzC553Z1YszQj1HYA6ZxSqYyGNyB9dH7dYHQwoNFgxBbdUqkYVaCa4zwjkefV4qv2Peq59sRypTFVEdo",
  "key3": "TiY5muUX6Ybd8a4CuP83LvRzwYbK8cGdcjwimcdcTs3RRK1E8ZN58wV4G7y8CBeLYhuNyGMoiRyZTn5L5q83GoM",
  "key4": "5UYWLL42PuEQMrw3MKLP3Cvv5D8BxbreS89WqQ38EdYhTLWFVkZreyxUuR1eaU3MM9gqPDkysiKB3QtX68NondQw",
  "key5": "5sdWgKuDXQkE74sQunZyTTZBwEr21bynPvGtDo4Kq8rWVjjS6xK4BYZk2tyHMsbCibhDDZaz8MgAsKpEAS9He9CT",
  "key6": "3ccYRAKSwkUCVt1wgVMaBnfkMrVrkzt1Qx6BPDSKnpkdnpw9wMfUtgMztwH2Z6XeqnEjRF7BYdLdC9Q94EbTyeSE",
  "key7": "3aXNoMUzBxsC8jcQeDAYRoQFVfWXn4yeVLVDZS9VKqQmUJfcxbK6qan8up3etUzE3ySznHbVH2Z1ibvTs5MZdWsZ",
  "key8": "32NmMLCoVSgzGTfg6wrCES55nhK1sezUQtocgqW8S9iZA9Q4EuRrtfyvM6y8YQLrsh3XCL5LspnMfAwHvrHtJucg",
  "key9": "4WDu4o3nmuj7Z7ZEamuspYFJWemszPRSU8TyUVJQdrJMg1PMVrRp8eaXeGND4GM4udv2Vw217iF6iuNTi879XYvV",
  "key10": "4Pwuab1pD3FbtuJMjZqb3fWG6K1uioxxKkv4gowrETRPU877zNSbE7H7WhToTxYChReD3k9PLS3CZZTT3aex6svc",
  "key11": "4KcHNUBQ98vZCSa6Qg3pfTanquSH8uwkcbrn3RnhuUiYvABP2SrHnhdXYivwLobvR3CTGwdNNg83fSHifT1sQBD6",
  "key12": "5hcb1YHL49EANMFiRCyzKDij4XrpVTvUpGedRRQC2kKidffzWPT64n9APiuiS3o3s16kQbSKH4te72ipJpicim9U",
  "key13": "Tdws5p3xx3sVSKiEd2abqDeNruHsecvrJDgww8yitWnGERTYHKAueF3XHFYXrVqg4SzfctuNKunvnd3tJtynSp7",
  "key14": "22pcYAHeeEGsBcQ2MLsnFFSGzfJVBiZVYyPdAyDDTcf5Ca7gAE88SB5GCKmDGVK7yChiC3bPfL22q824GbJ5Lah3",
  "key15": "T2XEuCsrvggXWHRBhKZ2HY73VjSLys51DRGvDYszvGbsCL1FWotA5GgQzjJERCmLNSJZ4XCGS5MnTURz14s3ffS",
  "key16": "3eeyeDkW7KW6iQH8cn4JCKgcFqERCgEo8RFYnrktNbWLMpbEQhbaRzpqqW2VHNvWsn12CM2ZmNY5dJZUFVS55zhU",
  "key17": "5TVnFKw13PAoU9uXKhcSFXUeMukXzaT6irYrSbwPjjpQBnCvfQzH6SzTrjQNDX3vm6XNWk12wYmG5cEmvsWutvzm",
  "key18": "487KxSgZBWTAQp1XW3L18Bv6dwfd63JV77wU5WxVjGqLmiHuK7XFSt3Bb4pNixdTfELBrAVxT2itt8v9pAaP5UYS",
  "key19": "zzEP7cFs3bpYkJ5DZmJHH9sjXkS3eBLPV6HaKFbuyKQezSnodq1XSPVhbq6u97pTvYV7oXrLzsvvC5zUj2qtv1P",
  "key20": "3Es8ERXVHqvFgxYM4e3z7mfSSsZucYAwPduQhhFCj1x36mhnqhRGKXeCxSxKn5DKvRHYVUT7WyeK8AQoGAqJcqNq",
  "key21": "4UbEVJ3oXvUjBDCWXxUeU8kfBg2Aj4DJeLYWLsNihCdfYKWgwVZ8oStPwypJrJqM8vmqfZYXxij3JubzVg7h7tz2",
  "key22": "4DNtqjM2oudRvSNAg6MRfYsxvbXqsFex6VfthVkwWFK6fEfk4oiJfJp5ofFfg7rsiAFAwTQxwWxTE1C8k2kwutXP",
  "key23": "5PPzBsd8q5dSrS8bveLZepBSJBZRjp1iAMXKwciBwh2vGhAxNZ7TPs7BZpXgdsP9TmG8R2Es1oosSbKmvBiPTZ15",
  "key24": "4xnCpDu22umT7iybhN6Rg3bTrHjSR2diRUNBBgi4imPtZV4mEp8xUYMJQTinDv8fHkqKa6k1LdKdUVtCR64uAZex",
  "key25": "3VQnvAs97yTRNdtSax3KdtFbohXKpvBa3rgdSx6TLjd5zubf6ujQdevLxxo7cm5Gt7Wf5VhkbcVsdzVKSgkpmBMt",
  "key26": "3XEz4h8t24gAhpD1eZAqsqZbX4Xpxngk4AjZnnEfDuTmvSpZnFAcNChwv7DbhcJ3GrTarz9QJHRWuhVSGgfXi56F",
  "key27": "2wKGUvfHiLMJ3jxUDtogniVDDsCndSk9uUpTN55MFYjS3obxvPpM1VFVseWtJMHKDX8QEUt9HUqMjagJECe4gsTM",
  "key28": "5wvty4C27safS9W4QqXjsTWyWoJzCQKT66iJkjobAzrP2EpWaVTH3VLQvZgZXjqsYGYLV3zw5fthquRvwjzhcaAg",
  "key29": "2Zgq5vDRDUg86wRAQ2MXcWxiTbCiReWfdfmsYubkWzFuDyfp26mcvvS7VZdMwm3NjqUFeg6FdHzZN1T8o1YJPcZT",
  "key30": "HPPny3TvXuPfPXYSPGgWSXs6edZ4DeBqm18Tsy5KDyqP3toTD1hdhwQAMAYN6oAHXcNTCWVQhoiq2G8sTaxeXDB",
  "key31": "2gWoPJZFsUbTdVtnXY3f4kbheB6q74gyKCXFsNE7Perit1zEafavtzAUrh2k3zySXJKPxUNg8L1D53FvLHrQzrxo",
  "key32": "QRb1DWyFnbbesb2nyWteL4mKxTrSxMx6cgVZv4Cj49naY3BoET4wRdxPAmFnrod1y3HqauPkSKSVMMvkmVFNAs4",
  "key33": "32Yf9u3YUVg9s95roWVDFiWuiJnLetThn49jAp95FX7UFumZ8S6WM9RpCdADqLD1BEPLkwkyBwykw4kbZW4hynJD",
  "key34": "3f8CVZKdLDBySxkkuLKQX7HLrdwy9PK3LT9FQLM17HiupfDS6eRRaVhB2LeYuiwuBdha879TnRksfgtHnCGVK3sm",
  "key35": "2TLMNfwsgiy9oo1L7joJt7xDVJv9r526JBEZVKvTJ74pKAEjQuKbg6nkzrXsy5WsaoRKxxERFAH6WvQcsTuAbfAW",
  "key36": "4SA5sjTXCFr6Bvwt5rVouzgXBCPKLD16dTMKqBJt962oXhjtecA6H5Cv1hFk67CkZqojgdy862HzCLephaLTeWFK",
  "key37": "3JMjTA4zViu2XQKPZjpjSnotbmDMF6voGX2r9Pr5tp4SDtLuwCfRWCgvyRKL7hcrnuCyGNZcbLPoQAnFnBq55CqY",
  "key38": "3iUCw6YF9KshKVwFwmShMJktPEj8HZcF1UKGMeJ94DNSHGRBwkUpBAytvRvVrN4NSjVy6htRic4Yscp1CTdMzNHv",
  "key39": "47PwDds6gbfPcoMaonaUgTK6yd7RwpBBzyXPeq3kXAutJdP9pfDtUZrRDMAgPgC1Aa4kGEFYAtymat77w7KfTghY"
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
