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
    "SbyQeAwp5PpNb8HYHaSLfW8avj4JPnCQfRxB829Hhvf36hqu9JP4DqFqZcMboJen3SP6WJpKsk5hHMNGpVHsck7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53eiFMD7Gj3KzFUKJmv6HRDzUJseUqTdPpo3CZqQCSHbyXv9SNvjXeFxGXiA7Yci1eq71WQof2zF34FJF6Z6Prr8",
  "key1": "HSsu9dAAPUcnBEwTkw5eoY458xLfk64y97RSKbBnQbJGFyQVb9a3TC5FXccGgLaxMDMjSrNdjqsPVkoUnLPdcF7",
  "key2": "4JH3CyGTr2Z1tCLYgmpHrRuXQVqpBgUxZV6vxC94xrWq1Ept3aqyTH1vJJdW7DPpDKteBA9zt83PbKQ97t9GfrbE",
  "key3": "3Nbjj5zSKWkfp6BwdVhiN16FdBj8JwrLRzt2a9LzWLPk2pL3dSoWqJajHWLfQBuJrytVHcz4woL1R2cBiqk5kLEc",
  "key4": "4BPzYbi2CNdh9zyCp4n24JC2sKRmyFFH4gGTYA8TQvRGkg8FRxfWokmtcRHfdc7ZCTzzfppuAobfj2GfV7B88Em1",
  "key5": "55Uis2V4CwYZv219apTpEZhHEYe1qc12WXgXDucfJBQHWdFANMdtYPa9vD48RJV9mktKPwXdGwekhBFQh6YfzS1P",
  "key6": "5J7jJNhSfbrkvW9PDe18ygmui7WxsqEQsASfpRcsZAURqdKZRWLugbiszwMKcRdPRCx2qsJjNSEE2zFQM1o2yAef",
  "key7": "36vVkcgbQhktx71iUBv1jQiyqdCqVak1qwQznCYUSQmRBNzfGHJaYhardfXrts5qpiSdXMasfMdYAmGERS3Err9w",
  "key8": "2DWPboeF8T1UdWuYb8nxoazuJJV9HcxYnKuuAYM99HN1MBZxXD86rAprMsfCov8buS3MzrjqdNQicbQKarQLVTvX",
  "key9": "57qGfT1nEGrqxVomyZfgNK8BsoCzxTm5Z2uDkihrsHTjHjRwJ8zhqV8bWqhgZbzcSKxmRup5XrBeD63tkrPkxsks",
  "key10": "3jLKCMvG6CxnhwbonB3hCZSeiYij1i9mFEbQo19TAK2fdbh54HPxfeUPHnTchu8YvCUTE946u37DA8VpXH2ENxg3",
  "key11": "63r5jMfpXCrnCbVimZjk2ML7mzZacJ5qqguxNoq6eyTfSSSxVbjdXXoQAJ3wLyZXvDkRa6L2nYYECncXdMyAbbNy",
  "key12": "2LxBTvkMkvbLsJGQjAhtRL1zNAmjT4iNso85AGai7cEEzay4TsLj5vD4936UbdjiQgP5DJ45ZgRbBR3wEDAKRfJV",
  "key13": "4sqRGJTUkv38njdaCbpVHLsKoPPej8hd6VNmbMESusSBUva4phexMcNriwjM5VeugaC9ng8CKXE6Yedn255JoDon",
  "key14": "5oJADRR8bZnx5vmPFuVYbK5kahZ7hrXu1aBoB7oY6PzNaYQnqm7iEdtUumCJC8zpCd66TfVbumr6bsWsS8MBXJkp",
  "key15": "gRWy519UqooAySa8xqQd3gAoQskiocQtfpFRFpsN4HpetKLf7oxQAehHNvyca89JpH6LNf9crAhMb6d623jKur3",
  "key16": "2iUWeXEDz7rDFLynswRkU2U57Am2TZENCYEPDcHYcymYERe5YwF3vazp7T8vbDzHmZ12Sn1aWtzmMtjQbu6Xn6Fu",
  "key17": "4YqfJAFzdx5x7nKTU974H5Uc9ZM9QRyHavXC1Gn3SYgQZBb3bYWW1rM4JgYkkddvtE4nNHXoDSq9ESGsS85cLYo3",
  "key18": "5QZY6bA4eHJcacc1LFDZnuWSnXfxmuKKK9bMDvTtPgrCC2Z161tKUgJLrNg5ZGbeWbG5FA9xmASr5WSnYL1fAsmT",
  "key19": "37axrn3CtKguQUWm3XgtC3DcnUeLrvENtnAXuje1VQs7eyWmQSx8KdqZ5D9KGYPA3MHt5d6rTQdQeoq1imP2nahw",
  "key20": "3idzMcEoXCk2zuPAC1UU5yqdVkoKEQ7L65cZa1cR3sYRKn3mWyC6a9waGbsUVf8DovC1JU9h97NLsEbK7PLUN8EA",
  "key21": "5W4HTBS9R1Mbv6Yy3ivSci2hfTRtKKB2gSqMaipCuggFVYmdUkdgGzu5hy78nXQHFQhSuK7EquMkN2g5hr7evvXN",
  "key22": "2MD28E3Ba5Et6RjJ42ZvQNcmpin5TvxLM8jQerYyTscupR4jUv2RxThZUTLnLECdRRLabajAuVmohYsc82MkfFAZ",
  "key23": "cJtPQDErerAiqK8h9ZyFvtMjSLai3zgF6ickEPJsDRDxogeouu1nVzktAyvJtFESXiLiXyMUA8UXmpHVfFHCexd",
  "key24": "E9N7LPq2XNcUp7k6MbpUhkXDpnctoQoDHfUyUZx1gNZofJQWr5J5E9Nuymhs71ktsUyuXbTfZekAxFT5QbeVXg8",
  "key25": "3c2s3S9EbmXa3eKkG9Toq2hbDipVyFKiuhHGd8cWHojPq3MRHW3r3eMRF6u4HdrgzGB8HVaibDAHzrdNGuh453Aj",
  "key26": "9g2iUZEPiY5SY7LYkt7dCbLFbFddWcMEX4FPvT7Qo2oRf5qCuY1U9tkKYJBkZCHUj3KAvtpsABYzAsDsobwF9CK",
  "key27": "3Wm59C4SjCVUph5PveJnNaCG57HJgS2fXYif4sdrdNLQAZfuh2LDK9rTwQBciNtWBX51bbzFjH14EvXYS9DQn3Jx",
  "key28": "4gvFxRzpWLzaMKF32fG6y2xsdvSGBdXrFKUKciAx29RhoNUxLQV8MFYtBJycbJQFw5WHj4x3b9ADtZTK8pKMCa1B",
  "key29": "3SJbNQuQq22Xkzidoi3yeFFwFfqjQazussJAHbaQKkCix8pTYiagusHFaSSRbY1QrDVLo1FoMqB4ymjDFxTMotHy",
  "key30": "4u8NCs3ae3YWGYpVhMVuwhqL8a9xwfeNbzhF6PyLbxBHcRGsZ4wAzS5K9GhQCaTAPYU3TbmKeSPr3y2cxEPNKix5",
  "key31": "3ve2QdP7rMdz5AUHpsNUvpcX8mZ5mUHY72eSBmiTyDEkXAnFk57AbH1T49HHWjNKg83ZYjKNxbehFUJUyuykRw4p",
  "key32": "3oHMEnB9XKhfpB8MjcpcAH3q5amANfM9DzExTAXgQ7e6vPM1ty53jnmxQLR1bLdQPDzDwF8Y38jiLhNrSNym93B2",
  "key33": "44Ga5cG81EsLHrzSNKUhWSrdYGY3qJKL8MXkTRDrreMB4xtacmmcwFJzJL4MHhWTnkp6ktiSD7hHii2vgbQsyaYj",
  "key34": "5NjmmeigSSxLSqg7hP5mSCdBcuu3QCW9VQ1TkmiANEbv6N1eNwtQVe8uPNK2r2tuL2qwmXCSJP4cBcms8KbsP8v4",
  "key35": "4Y8uVZefxH3nYF6TEs32Hs86cntN1H5Bi9q6U7JoMocj4C9xKbaM546F25XsVPq6yc1KKpHY71HXAH1QmXX47TXZ",
  "key36": "3CxhZfAJHbCEd4jn2oKiqui9CwKGVDpDJJj4rg29SsYQ78RdjbVfGRWts1ZLKK6cugrFL1kExQuZhWx8ZsPRewy3",
  "key37": "49X2ViDoPzbNpZE6t1ynaqPZZrDP3yJfrXikgY1eWLBUBiurTeWknniTLtcs4zzdrwgL1HUyATn8wZRMVbJaDRhD",
  "key38": "5LhmVvkCki34ciRqF7KJKHSwGx5yEEbLiPEZVDrVWRN7tTGyz8A8NJcdFaouTnQP8kaf2A9dSZenEqaQR1aQ7kSd",
  "key39": "sUwPQaojR1hKdRmvKKW9AjD8KBgxmNuJCreYp79d5Umo7vjL8DR4FX4saZVV2mnQrazTC2WoLUiYVNo4CWWMWzR",
  "key40": "2CkbuBLEow93ZEtDNT7ahNQnXLvfrt49JmG1HS9T1CJ1buVKuGRoZwSeZWfmnyDAsYQPCF33Z7LQubU5uRqh5HU4"
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
