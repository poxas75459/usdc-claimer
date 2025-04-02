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
    "4AGjKyG6SnYfqNxSwPNxAgR79CwZXQWTaDoKE4jK6hL3fGSXnZrdjQ9qGzTVVBbzu67Qk3NFXxjqgpjpVWBPubEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gTALZDcA4QrNRHHB9U45HUQbfeVtmaFDFheVAvi77qXWnA1D5P8wigvTrP21xjmUDf9AERtEqQ8i3B3tgA2DcG5",
  "key1": "4HVSUrupM46gXky5tcGm5qXS2GzcLMThZaPjXQcuRk3sPFVovBxTuNHLjjiMpXUEDp3Vn23Hv95AyvekGThx8L48",
  "key2": "3LTxmQjEFvArvNQW5qS6Dbk4eQKvgvP4DZvTNKQgBpjq9Gr5Qq9fqM5mTZDXWrFa6ZdPMCHeig7VeY5fDDt9SGMp",
  "key3": "4KZcVLAXwajrgP2JHxCvpsh9XtAmYpcuPZgj5Q2CW6Amd7nAJQ2gHugDdXTt7STxMjUGkSWjeBTQhpBKk1FuvFLk",
  "key4": "4gErkNSB8knB9JZEDbdWMXKyFyrH9J8cdFuco3J9QRZhwhw79WvGVWftu5RhcJmoJ2vwz1JAr4GgcSXpCB9P5UGt",
  "key5": "4mBFs5QpxFxbJjhn6tBYsSixdpCStzfABAK29RoLABtPrymvaforMXjtt8WX9gfavxJm4jrKRpXzhFWWVRHtw7Ep",
  "key6": "43fqrq98ueqsm7yUanyghZuYgkectkE7u3nNLShjJuigKyhC3PMiTTauRxusqAh4TNkc2LamYNUwye3yPA8yza96",
  "key7": "2kZPkv9GtYdLUbYcUytJZrWMWJcv8HF5hX2D7FgqKwDYvjWMV5D1ZyG44ofFxBaVp3QFmYUVvmagSHpH4UkXMCPu",
  "key8": "2x3mQhNh5f6cqrvx5QPp5oH6H1AhH3vZFSqWff7UkCTZp1TL4wDTiwCkDmxBtRoxFt8UhRERz8tQV3asT4fimsd3",
  "key9": "5iC2jSz2b9Ly3pybEMuWV3cg1Kd5h6Wwk5p7RdeLx9id7nVYtnVNnLumEHKx1DhHHqXDE63qzFssFy8pM9ksfgZp",
  "key10": "x1uyh3rdCVDdfM7PQ7LQimU2EFPNQ6LBF5VpAHoNWt31GNfEPG7rHdhdqzUaRg2rYxNdtjn3ZkDCTG8jYyXqk3Q",
  "key11": "22SgmfGxLHAqvLFkChR8J2vH7ZAATrhqoaDhj8GWUamp7rbdDgUfozxerPfC247m8BrN7zKAt1jSBrSG6tyChv7q",
  "key12": "s9CJMoxrnpt3hNt98aDh3vQyNR28tfzPfxmMhTUP2W6d9uRuYTgE5CGu2vDcaksEFXUDifBM7SnDCG736QnT3aw",
  "key13": "2bVVsnmaUVsmeifnSoQGXMwkGWGyjGCELDK16rXnGxxpnuyuY68PpXqnH88GibdPzH5gtzYSdzN41Y4y9YzcYgtk",
  "key14": "56ejgtD27mUVFpTsYJZ6GRKjfy1Aq9eK4wrjHDuzvYpYTTqZb3TfxhSxYFRmRXxWH9aQ3rgFELMQZ7qK5diNLbtX",
  "key15": "5PjxRSx46KVEz5vpXtb7gcFyDPDoN1Nib7xZdbsrUvtC7SMjtibcmeijb5aEjPCcmmB3cpW5BT7rwPUBBJoNryyL",
  "key16": "3CYVSNba7WCUnDbb37Yo1iYW2Y3Ltm4Ed35u5WjiL96SSXRpoF7mwQhpXXqj35UjU9CfEFsL9chkEso8PNXLfmyY",
  "key17": "3DPfAnBFUMvoR3YhsxQ2wwXfahU4T9nksFwFbkXACJBAw6pZ885D2NbCTTehUsUyacps3vgoAdUAniegjhAcP47o",
  "key18": "4QUwQsno7pe3TAZU1rHfsZw5jHJZA2WqCYJhpTf98kDvqgBKwJbgwtmZYWaCVig4eVKThVL7wsX7T18RmSPSrz9Z",
  "key19": "5o16g9A3tzVQ21Kn9NqbRgiZTNPv4PgrVN1R4x7FXN2LZMzbtM4WTG161vuVV2nQcDyinZ8gsSWRA2yRp3Kh1Zox",
  "key20": "42KSVxvnqidsBmJM933SWppHbyUP61qEBGYL9KVQjk65fRo4VNCL8HyudHuxP8ceJAFqb3Mb6MJa2JG26Sg9W1ka",
  "key21": "3k882bwAHXzYH5GBHM86MhquTFvUyxer7gTV9uKd677tnTLXhqFbJmfpH69j66FWVjUqKpw9Lxm3z9w2CRZ1C1pF",
  "key22": "5vb6Z8sXMZghsy2TMYeYPGgKdhaxpqyXRpBMJeNMWyqQ2gzxER2hD4aLuzMPHXCgzcYWVWuTtgkRZpzBpAyRBiHc",
  "key23": "3Ux5cqLzM34NPPES9HhsTyUzEeU2uA4utRVLynj7sGde4XaTf6GQ9Vjt1E27EVGA4c69R4rk5vd7mUwVAUKGWGpJ",
  "key24": "2RYtwh3FzSShZ5mtkHhjpAsoUjuEmxEx44QiTDf1BeVoG3Up3EkVNFJmUxpor95Y1voYy3EQBfdzf1AQAW1qDJyF",
  "key25": "56eorfe46DKHCkGMk7ZcvsTX2bef6HXt8cMaM2qU8W1eDRcbqQCQZVwkQo8BuPSTNPPjQ69Ay9vf3Cv8ocJexdf5",
  "key26": "3DRyCxsVjVcP5WU1KgQ1R5ND9omjY3SKddjRfzgnK54MeCQxnj8axvsRUgKPGS3b2QHhNZXndiyqqsm7HV8NNFcW",
  "key27": "4UDhtSQH1CFJThf5BsqbHnrQ1nqmqUVupYwA56n3gSHrxB4L9qyQpYgKdWyReUJY4dGT6Ph1PSmm3nJoS1UUqs3J",
  "key28": "dxwd9jdW8EiwCTgBBHyroSpdPM3tGgHi13CtNN7dgZbovHHQJFSNmiMpgQBQu4tAQdQiKAbbDMcEZquoo4kgNS9",
  "key29": "5pRj5H3Qu5Vz9ANuTLeUyjP4X9oZkKx8dAF7toEyPNGRb4nAjdzJrrK6Q8SCqWiCeoYoSrss1vGxchGQuDjWw3iw",
  "key30": "3nXrqHzBT1JD4rjLMBU9hrdyqEYnfxivgFqwBcGPocY6beMLMM7sPBrCd66WVkwUpMh32VT5NnMvYe7HwRG1MRPv",
  "key31": "3F6ZreMd4fBzNmh5aciqZzTpiwm5FaJfTr3tAwZoKynkkrPmeeVUiA9E33USQxikwmFrjuNjaaqwEsDQxVZphoHR",
  "key32": "51JrWSKt6wgWvUSDT295VjeoGb28sS3h6hxcsZVFvT1aspgAjmNZuBaSmaqsingSbWxuxLLiDjRWMWP5fKNFAgsw",
  "key33": "9bfXAF2u9fqJbijyFggzTUgqzgie8WDFCD9AWrmtNUExYWzVxvH2S2criYKZVbrpBDeaoaF4fWcrPZ91FToyohT",
  "key34": "3Vg4okqo7YLqmd48NnC4qMVL4wDgP9pnoK2cGGqTqUYvq4zL47binhvbXnt3C2ygYJJ1mmVwfbxjiqQ6QfKkbodp",
  "key35": "5UEiZUoXKMeemUuBCMWvmBGEVSpyZ7L57FjG6BAcL3BGTjkeKLQvLHStcDApz7HztFkjg3PfuSFjQ5pKdsj2hV9w",
  "key36": "5AUoMA6BioDMBjqQCNpN6ur2wfvGef9GqQdKveCsTn42N3ERTWsGrXuYqSAnHGZi2Re6awcRKGTuEoMhVtZ9VkBF",
  "key37": "4vAF6VNFoDY3cTXiVi68iv6RPzzKuRxCT6sidhsph2qWxwrznz75EueaFR9DE1SFNbLFfBJunzTZo2gRCLtmE9vC",
  "key38": "3Mkj4zUWx9dwHmkDzQEVpsEBXn6KP1QYaw2A2oTWUAxwKArTc5SuwkEPsKHDoougsKtukp536Zuk6XiPhx9A5hdn",
  "key39": "3PqcZmSbKXXwD85AeGirB2DQzNTa2ukkRiX8cgaSsohQrKj2t6AKKxmTZAz6956Td6CumxmxHMoY6Afd3ouaNELu",
  "key40": "3JpCsZE78We2VJSbo5m33zd7hnScv8dFiEUZPVYs54tfbkJutPgmfnxKyfooghtLhcswzVx1gTGPDyZ1NhXWSRMj",
  "key41": "2Cd5HCmhwvGF3PgA4xd6RM5kYWikymsDp3Ls697SoFKqhVmJcGT3JbeBi93uc9wX6UU82AqBZkiPQZ8VGwsuZ87b",
  "key42": "41kXGAWPxxRBuQ8zRRbx39oTsAUxH29CFdZX9D6CnhuPymWtKixCWF35nzC8uZVWehSqarrpMewHVH9VY9KErN1e",
  "key43": "5tU6Px8Q1scy9mq6opcvtjPJku2EAdMsH1METTxX5HbbBYpMEZCn9uuBcgaoCepC2h6zhZoKBDw49xAZawrWVxnU",
  "key44": "vA7dWmWXiC1ua3gbWRimC7DBoN4bPfdBScCGyWKBpPaFCStEE3Uge7hGkwNHjsqNecLW1Kmk8JZtUgkgLJH8fk3",
  "key45": "4fNxLh2T8dyv8Ckqgdb4Us5oXuLzveSLgenwQqVGaEcBENKSUyuhnQHXaW8eKHfWVYruyd716zgb2SJ7T3orLMvk"
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
