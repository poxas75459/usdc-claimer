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
    "5nTH3bRmeGAp9r5xNbEjjpbUxqTU7uvDPLeREoAJYTWzemiy6ksgHQjsgBzmMUeZBHkwqADEewDrzkVcnMiL3RpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2czmDDqqgEi5fRgkUSjhSnXmCpTMyGRsSG2w3CTs9dgj3sbTsB2cKBdA3BRvgZFTjvEEiHUEr3BPSpPFYa8eDS6r",
  "key1": "5LUv2vnkN4BabHm4M1P8oQqicZPqS3P8z2MDDpPSdadUum7dXCgvKrz7sca2ws6DF6QbhR9JaxfN9DKJMyEMZSdb",
  "key2": "mVnMkNqzv8fLrW7dziQ6s3zsNyn3n9YRzjT2dxtdigtdQAHCyuFa7M7SehTL3GFdGrwG1MFeQSi9Xtb7m6FEGXH",
  "key3": "2Tgvw3azDNrP2uefeRv5VAPmndpkLPySnwZxGYN2HLkqFcQT7RwX5LboF4oC6gjNpMzQ1rUeQU1e6gbSfSb6Y9Ps",
  "key4": "5nftBcQ8MR9Pw3jnTRtr11JmNjFcN25HbxwJyKPCaT5EDKaJv5xx4oVYzkNrGGEW1pmTn7AD535GpEdr6Joe5KVz",
  "key5": "54PLeGk3NbZTymJ5Acg2863suk2DLfD72QGjUqmW1MetKPdHca81Es6UJEEEA6BtPk6nS1u9yKAd1KvUthNxUALZ",
  "key6": "nm2xQFWzPeygvJ4kb2tvLoFSJjbCY6RJEHt5SxCbNzV21yt5JckEP3K6SCyEPBKNzBQLC4jZ4uW8jd1UtcJhCv3",
  "key7": "65HAnDC7SQY2STYAzNgvsM6nS3uKYZNsXcxCy5pQF9WK8sMBMWWCc2aoQoYfWrMTVqsrvRH4uMucpsZv6mhZ6qZr",
  "key8": "fBSSrR1jtFNoi8fQM4aoiVzLeA1GSPKwMhk2FTbkofZLFyQUM4KAwrvCdAk2gJVwa6Xd5sU8jST9HYMqqeqrwtp",
  "key9": "5AnmLJ4Kb4zgVZcngkkb2HDVSrtVwGrgY4Rejd6iNiXwG9F2voFPUnRH1FmyxG3pT5WriFs3R6Xigrsiko3G1BsK",
  "key10": "XhKZWm7shULXnBg9xjxoRuD1FNgLUh9j8aC5ps4YZetfWpzQGmHkVqucFhviDRiFRgyZwTCdiMV6y7X11LunG8c",
  "key11": "2SgPgfBs5NyYduTzYXcWQQVyiSEQ3eXFMhJwh945gRkmZdY2ttbyXu5MEjv6TYQgkC5qwH6LnaXub5nqQUDUAkTS",
  "key12": "3Y7QjuE5oAp9KZXLEU3YHYev2vcpKUswx5SHdxUavjpJReMGzoAt4bb1cfS9Y3gNWa7jtDGoZuVwVrhiEhZ8evZv",
  "key13": "2KrAHFkXTtHcSANy7esttCfTy6hRR2ZsYv9y2vnQQcmCGx33aYYVpyUA2EufhoqptoA3pGctkraXbU4DVRN7QuFn",
  "key14": "3DHojF1E4MGJDjkTPHa2WmmUaojhMBU145MDS6CPEWX8RaPkELTq83VdHwE3Hdb8zKjJaWq8ydsGCC7Vgv2pMMgV",
  "key15": "2LPoJVrazgRxzQqt2dVAyg22TNhKVUMG2xnFT5KK8CKVqyyaYEzXEfWGPH8Zm5Quz85rFR3jdXCK3DKCZ7q6VbgD",
  "key16": "j8evQKHQeed551kP19XJNrtQsEh8Sfx77SUwEigZDcms9canwhSmDYVDspk5JbWNetSgXX5YPMrUfP4ZeDt88dx",
  "key17": "4jkBbNjSYfBQyu6aYXnxP6ovCiiyGinARUNK4zFWpyVT6tHKu8wXsCyWqhLw3onCgffdFQtp8E7tBRi3gvCMotud",
  "key18": "3g4b9aGkFMrMuL2qSJBzUoAToKrTzprgjH1A9HECbiV3QFKJ2LegY4LpmXjHFekikzwRUo2AtuRqaS9KVCbDM2Xz",
  "key19": "5DQCKMotKCDk6KHaRsYBCW5QYX3LryqgJBhQZsMxR7CLmRaUAfm2ceWtWcVuWGbRLMHnwV1Xod1cqcTEwQ5DvLjo",
  "key20": "3ZZ5M5Vahp1W16LihGuwoDwWJGkznCckXdMscWJnwTR5uDndK4yzM4RA35f5nDfnWwcjPKNNLwo1GheFFFMiMKyT",
  "key21": "2Fx1X14fqqyhF8AcGdhScsFbsqBQHC4T2B8kYKmmEH6VNF7VY6ddVDVuiGiGUw9ot8uZFFzbfGgtMq4fhVLRoE44",
  "key22": "3GtDVKytnX1pr1vAkavno45ndrkAdkE3j5uCctF91GnGbPkZxUFmdoBrfk67MEf63DBMgSHHLRYa1hvtPTLMXYEM",
  "key23": "KS9c66MVWnYYJdZZzYPjFVAT81NXbtbfzbz4gEbPPprbJYaaFxb9TEkvvG1F3ck7BeYjhYdKUc3mcbCnLDqYct6",
  "key24": "2EEMhZWX2oGHkUkDNqfHBhew3JbyvSHvXav3Vk2kRDUN35vavacZ2Hy2qvxJMiE8UKvaK4raN6t3QFgC4ateGw8A",
  "key25": "61JXk7zHz1DohMhmHfJdZqwAH1ZXhCV8QX9S4Gud5r2ZSXkbGJi3YmZGZ9cT8Z78WBapWGuDCYEzVJwe4uWnErdU",
  "key26": "39AoSH2E61xf5shimSSzbXuqZhoj3BxfJgFYKAqbg1sRBsaZHds8HFViQJicigPNKDdxGNYMZUwWM2R4DYzP4LuX",
  "key27": "2K2CpFZHz1Ut4HT1kuPES4scxyBdpVMg5SAP36e4v41FvCSQEL8t1B9nG79gTsm1Cjkob2WaMmXktCFoTHd1H6QJ",
  "key28": "3MRyLv3ZUKEwJqzJuLxCZgmucksNfDgQbbWT5SjUZNAAdYoYkDZoxvbrx5AK1dBrPK9zEQdroR1Ujfm6SJmE3FWT",
  "key29": "4h1B4FnjJbwnnBr9fGVJvazmCJugq9XXu1RX56A3tEdoSo9obS3naXh8VeLktsUTJipBzqCkV9ckLNimMziaG5JJ",
  "key30": "qDpzxoYvuoSJ1WnshsnsBZ3UMA25PbdunqhQyrZN8qiR2WD6GCjN9FfSuCVLJmE4awQqfGXjXMLYrJDMvYBpshh",
  "key31": "8Qjgm5qrX898xrPkvSfsNeToNPQhLSBMxkWnCmdYoSR7EZsYtoTMwKuKm1MjkszmXyzds1yMrVAgGvtNtTtW3c2",
  "key32": "5dZHqVQ8zqjt8LJQ6dYY4d7Bz89HPygfN7N9E5Avkk3xYbH7uVhW6h9WeEErmd7S4y8W7i35JQSvNggEUSDZVrn2",
  "key33": "mvNFd9MSs9QxsnPaXxnPZ9MxCTBD5yurQHgKb6xJGUUoEaxZyWM8Y63r6JZctbjMW6spXirWgfPrxqTBeASEGvg",
  "key34": "5MX79MP9MVEbXguvgwmQ9F4NoZ8Lob2KZjExtUKqSEnqTxQq6J8DRAdQ9Uj5nMEo9iPe7W93rt5YV1ojiL5HkaHX",
  "key35": "5rHEe4UrMf3J4T73j5jNZadj3VgXQ6ZRLmAgACuZsBwy2rVwP6C6cJ5En7wvKZUDDyDTqZPtwYvRkmav1Fq1ZHJi",
  "key36": "4eDhvRZd7aEuNS6GM3hNbd8bm64bsWWxZ3MiWNxDT5rxi7ygxtPJkDZL1RusoACZfebMDLHv1cC8fDkRYk9Fek5m",
  "key37": "Gxkv6LNwSQ6jFPP42y8FjoS3F3rC451zD2szyTf9ipBy1zsTXaqpokTA5usjkZhsybjTsJ8cZgebAdpFpsJoDcH",
  "key38": "5WvV46hKsBPCSwGKDN9CR4n4FUfHyidQCewaBt2Fw6AmJRezTn8rpnH1Df6mqgNPafbhtKENaQ9CuCR6BWaAoYcm",
  "key39": "54pXGvmk7gLa7jkpSZpANNuh5t1vwtq6mELjhLEHz5xQgrkrvD1Dno8hPR2MNk5P1ggGoZ1aprsCRpstPad5cvCG",
  "key40": "41woRZ8RQDDVwjJEaX69HJtJJDJxp7Rg9f5nJg8ugzB2VvUk1Svg6oteZ9TMhHQYbAvZHzJtYbWjgSNeQwEDFKGz",
  "key41": "66bwGyMSyshyrynWqmvodq4eeinC9iggfRM9dWFLgtnY4KjMKErr1cYEoj7o9471Q6G6DUb6Qw3MZ9tWJ4AT7Ymg",
  "key42": "GoApEJdK5iHqWhBrW3aB5hMVWoJqGPr1vfArAGrzn1NP6PeEN8LMeHqibtzejEMSyVVsExHBwbQWmnfC2mqdaSQ",
  "key43": "A7Q7bGesrUPfL8pFTLWAqAx2Zs5K5UnfwQef9Lrshf9CCxTbnRH6kZCJQuFF437PaeqyMS6jnj2TdLgRm6vnNnh",
  "key44": "jYWS54tQzWtngWriqvCVUgnXUspBMSAgZR9kwYs87y4TMAiapQxouqa8pY6o8Wsr1T97fKMMqdqT3Eod1qD52mQ",
  "key45": "2ehxEhjC5V4mtBPtcNs7fbsSgNhrBvv137SPmtTVVj7RdPQTXiJdKS3JWwMj1B2UUpchkbgMKxjBEZXajMcEDUxS",
  "key46": "hiC2iYdT3khTJTp3L3Gnq468Pvgr7W2smBkt84JAjt2m5h48pC5ni1KxjXegQYN4KPUdB93fQc3i4oZghHGGf8u",
  "key47": "jEqGQxrheGr2U47GuuAT1YBRJfoEnK7onVoQ2kxpMPtjKFBqvuTn227crPsHnjNBEbtCaL814gjM5SsuNuvetrs",
  "key48": "351dDQXBWASR7ELRWjhsPhovQX9DyyaLfNGfePXunctGacggiJ2B8ya8v6WvWRud8LFcd3JR9krUmfDuMgsxwjrD"
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
