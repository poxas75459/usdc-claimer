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
    "4pszBeM1zjqzRucr6WbxxdjPTQ5sMNaXq2BpBTshVQRCgH8RMezJxquE6LsGcF1Q3dY4Qw6s1WTxB5dLx47riEY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EGwn3gXoPNtdiimSt5SNMkC1e22f2qGcvUNpCKwBP2f3QgyHrUCnfAVrV2Aie3VmQdf2hSgU4PvBEHVfz4J8c5Z",
  "key1": "4LN4CCLs2AV18NQGfcD3VshcELHvghEHRVpdrByirgk93kbFkVbNp5sWqiZ9dnfvYAVR46pPhL2hHRuZLFdqsTtf",
  "key2": "G9yn3NsPEe1id82FaPMJ5iLrrfzWdZw46wadXzjLaikahuAAc7Aa11u2FFs1CfVhnw1YUf53YmGrpACnha2sVJx",
  "key3": "51RsYfZuPQr57YSqMDiAPa6wWM4GxH2wW6rxXbzfH2j2mKzhaPoAYK6ioHZYaKSDfwc1afkbUHWGdAjiBFRcqEub",
  "key4": "2Ug6HPMjSDHPJNPUHNS1gNfRz6y3KkDtfzenomKCT1em4Q298Q95UFYVjWDnHD8E9FmLfPpScY6P3cuw4Q75utkk",
  "key5": "2jT91eGCTHRAjYe81JbwQxqrjVWvmKsD2jznwaUL2tDTt9NTmyC6VerEFcqQp94XXe1hr7xrYVkdStQeKpUXJGMK",
  "key6": "3XXqgTqz2Jjukr3cPVbmP54gJ6Kf33LX4mn45VGZudBUwVct9z7zJkcFuo4Car2RSBxJY8SLmRTekZbQeEKWxhtF",
  "key7": "3o6uTDjEtueeUfhXVMjByD1SBiHrQwGDnb37HqXnqwSBh3zbXkdKrD977XwLudffzvatbbEGiBURVKGFL5AdUd5P",
  "key8": "3vDk4Wz7rxUGyT3ZaqUdfMMUXk6zw6XA98xg5Lp6FzApfvcxQkqmVtnS23fBd8cowx1uSihtJQvLAgV54rbY5pYo",
  "key9": "3UgU4Aqk9yhdUP219icRtDeT1kWvh6YFsNqrVfYeuCnWQfsQor4K358a2QGpz3EiRnqnaPuwXoUFzDiqbu9M1h2M",
  "key10": "2ZCq7ADqhVJUEugurTqVNAygMhkPCHSgV9eSv5YYMK52rpUYLWeoZCYnj25jLAavXbxkkxEWzbJpGSiFQogT1W8d",
  "key11": "3RnxLRi7eT4Sxzk6vo8RLufH5WRywdE3Gh9xh2cRks53B3sEskeAzirZ6KiBgLgErxpkLWryg3P7X5pPKfVngvgU",
  "key12": "64eT3ffxdZ5jch3MoR57fuW9x9Jv9X87eSUj6TqsJx9ihQrHBRxr1w2hCNrXkLc9uawJGuJQsR94efknZWHa5Mir",
  "key13": "5cvrWqnKvykx35NYjzvXV6rTUCc2mhAk1p7XzWfaqjq1Z913UD7o8tNn6ZvjreCav6NohyfXJxFBtFCXZLVJuvUZ",
  "key14": "aWJwvHMTiKKGR3r6pYsEucXporTjaprhksurFZDWsfW74iFbHhFsN3y1G92Vwz1YhKnpWr4hMgQsRrhPha3jhid",
  "key15": "xRivmxBYyRvhc7AUTM6RTSnS2EQMyKWZmmeGpB97MkmKGHXnYUfQ8CYP5xT4eQdbZxPvFX26N5sZ35VbbEj5CBm",
  "key16": "4bbVbKm3L4F2ya5hXeoD2LpLLGhSV8rGsgVkcc2L2Kd28u8ggdjteWX2rmKckuDi5nT6MasFWpXNvEbTY2pHigwh",
  "key17": "3wd1teLwfFGu7W96GQUZq3cx1RnCMBgXFvgkN1Qj9NrUGSrMTrPUKSjQb7VYVayYQs1GLYGLQkGAJ2xcbAXZ2jR8",
  "key18": "fLGbygcpiSNWboGtx4ZKeaYj99zgXJkkhwMM4MvpmqUG7xjUP29VanAUFxm1wzB2UGPMccLarvyLV9uawxu3kcu",
  "key19": "3iucXXzQaFRyLaVYcESonH62nznkmUwrwtRxKhytXZe4TVDBAFHVb8db6DpwZFxHiZZeMJWQG3R1j2rysLV64Rdt",
  "key20": "5BWQ5Kui9HLmC2JjdTyPopfvA4SgXLAjjLfSV8YwMCjcAMQk2Y2VUACgF88Q5X6EfiNSndXmiFCcodA7M8gVByGn",
  "key21": "2X6LNG8FVEy2FXySf2s4CER5eqXu1XLLgaNuFgCwomteQtnVeqy3bYxgmQm7QJ4mpvUC63ox8asCygbw2YCXovud",
  "key22": "3XYi85uwdQGr9u3SjoA2GxQBCKKwS9zVcotbHhamifR2dVmLTs76sL9S4Cyhd7SnWx1HrvA3UDi2UcMFJrpTv1gk",
  "key23": "16YJmvAC3TdZ3LEgcnJBCiAoVVdgZPFB4YTarxKaD22zAkziK51yopJLxy1FA4DHzuzsSsfxTKJrhFGDkfTQfuB",
  "key24": "4xFRppqdpNMgwAU1iq2iPvWjgCku6Cs9FWAyM6JLQi4SZQhxLZaUdtuLUAsDQ3sfJXZwC5yhSkWc4LCRJyoyBxwW",
  "key25": "53YFHruBwzQTo5vunbEYJw5EVu1JfY2RQgMSSnLdNoMWNfFUo6fvVDgWwn3tSGLRUGUnXgKj4Cw3Fej4DDSPwPfj",
  "key26": "5GWBXGvYuYJsU6ebWdCPr1iPnpdfCbmYekUGN98QcMJRH743tF7oXgc6f45VRciRGS4rrugfzY8j7c2eMiD8BPmq",
  "key27": "R5gfEE7n37Pkg6ns4CoubyHGrzazT8YCa9uGJixx52DqViAaZSk3sPacREiTiwrM2i5bnV1vRCNWUpm1C92GNWd"
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
