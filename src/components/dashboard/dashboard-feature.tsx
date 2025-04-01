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
    "3uBFGckoHdVprn8x3XVQCKwqn6jGtVTNG6j7V3bPZLiF1DDqZquoFycoVmAKkfyNzXDU6u8cKfptNxJUnEYigM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVP6RJYuF56ZJ1nqwUxou1DFCiQcfD3pMpxSTmGNJNMok6PAbqZax9xkKMC79Z4fpJ5jx1ZWEhmtaJNkohMa4ZS",
  "key1": "4Ez5bKxXMPwgQygL8Ga34mu7o6KuV6A8AXLSGhQ8rfwCPBdb2SPCjnvv4eK8LGogHcm8A6UFCC22CKkfcoq4bEBH",
  "key2": "22uAN8tFqN1jCbH1Ddkg5ehpkF2AXaSMqNmnu6hY6iGM1xPuiuY2GnRKuaDosXbBgSajZXvdWEHou78DnrBDPYdg",
  "key3": "e4dg4U9y3wMiiJx8RNAERRqqu7U9yoyTpaQE4pqpr9tmmuAHMwFBPKUuCQUK7Xi5uerkySiEpbziAVtaZxgjTAw",
  "key4": "2XcjgZyq7HfSeafqnVfvktyVn2EsaWCMiUd5acryoceZfjsUVh52VzioCpUpJY7zoboYLdTDyjPCjsM65pEoRhAz",
  "key5": "25rJRF3uNkuFBRYmPD61VQobngyCKBKpxFGgWQC5mZEHK5wfBLkWaP9aumt3tHZi2MyJMD5DAZjFGtYg9sxc9a1B",
  "key6": "38vz1eoTwo2nVGpAcDNQDkjEPKbFW6mci62hmTAFQz1T5ZUB1xoi27cXmKry3PTNe2KDcSJwFPom1MbZd9zZhMpr",
  "key7": "53pugKcCKtrkH7B6dz3KN8aoEgDEtGrrXAWjjFSLA4dPYvtKMrLfGfYmfc6Sxse5EadGxbEPUvvuTXRkEzbqV2Ps",
  "key8": "4viiD1hRSfmX2QRQYmq93EXN8G66DZtLtoFtHJBvp6GjT5P9o998NEXgz3E4ehGEFHfbhgHEHkoejwyTjiAdjhDx",
  "key9": "5QmChq5p85ArgFN5CaU1tEW7tU9z3ZWRq5GNjJ82Fqzz2H8nNC5fuwMj6nfyz8bARnQLdXcg8uFQ2neFxgBXKD22",
  "key10": "5DJM4avKzmeGZd8Ud3do3bJnP2CdxmXPR6qncLsXcMXYrLDHtdxbcAVx6eMhPCuFcgTqSDfawyTY4bpaLCBQM6um",
  "key11": "2ZM3f7a1zxWYRS5SLFhjXQz1jewVHQTYzJiHqeRo31upWyZpabcPY76LdVYF1QcMhJXmRaCYcRVHEA3fVCuWuZRi",
  "key12": "hxc5MTqxtsYYvC8hQ8NkdEG6BDXZGht3VmsaUiMnsiWH3rP5q2LZePBdJAmhbzQP1NKsjNiUUzeJXGwM4yofjS2",
  "key13": "4CiNWKXL5Hdvs6vF8Hes5YwLBNpzUH3eXKuk63QYtM6pxM324rtkiDNNaQUWgjnzL6tmkEUWgRD6SvPH84TAAk22",
  "key14": "5rHf8dKYgdanJtuVDcjR1Jn3wUoH6HnGZbz29Vy69qFPz1bTGVdHrQjNoovkFLx1Fzn8shPeWhdz68XnyRAyGe57",
  "key15": "wAXNeYsC7YMujadggH4wNK992tBSdNStkzZ4JNzrLrma9xDbT6AaMVQtFnud3i4zXKeSnb3i6xK1eg3tSRpNGMz",
  "key16": "4cy1E438SZrV1To6LpSCGQQbKfmW6jp4Cna6R65a7nsAtHEj7QFNZGMyZYbrtNESbFtAqjn7dUhjcoJK1PLT2PZR",
  "key17": "uEA5dJgYRDaexUp1riG3VLV6FWYkLAxHxm7Hvw7KQg9gKh9MdFJmrMro4tTKEkeHjRj4Z12g3oG1v5hbkjQUhSy",
  "key18": "EsXie94B2UqzaTSX83NfMZYAbcrTKDirBRwZYywv6qrooERLSLKPMMZWuNXvARunA99GPAAzNogC7ngQuTesDCt",
  "key19": "2Bbr5bsmaNshTWMpSczRnbJ1Bsa3XtGGKY1pjswz3U3WRSCiBC9B99gF64h4YVcvoBDYoPmYTG3F7jY3jxc2qTK9",
  "key20": "tM4pRqXe57XqJin33nrHJTpUggUsxmEyssAATZyiEsE8jGhE3iuGXmKxkKFKjHZgz6vUNpwFuZauuboYpETYBZY",
  "key21": "2gNgw7vYynu4KWyuLfdpCtehjpmwrmrzWTDbwqzig88UiTY41Koja1SBepZbHj5aFvPvSfnvoEgo9924xdDEy7sk",
  "key22": "iT2h9wCyTsS1xKVfU142p2rQXD3FajoLShaAabTbwmfqcW3a1efDN781weH7LUVTPiQuPxKH2LgxEEPg6jp22Au",
  "key23": "3LeDGViHj1DojBoiyBr4coh3xRceAMRZS7Ne3xS97XarBuFR7son5q6uBraRYVYBAf2gWiFapheqaapuygyx1Pgd",
  "key24": "3W5DxhnKonts3z4HmZYdx4rDccNUqcA5CZzQzYRRYg8zCj6V7NiVMGpy97WXLPwGSb36QUfVMjPftNtbUf65NYvq",
  "key25": "3Uf2t47G5NCHqoSm79Q99vDsFqWJPtzmhBe3ySh5YRUJ2mMWyYB7Ky9SY6EVM5mxNq4EmxGdYvdvhaKHQZkotWBp",
  "key26": "3JinWgE7KtrjkQDiG4FD7t6PqhpV2bCtwPFNcriUZ9zLn8qhZwECvp1741opST6Df5aov45To5AKWfzQJeU4k9rs",
  "key27": "2qYUbquLusyJXdMafFzp2bsxhP5eHCkskWKcNwAssVzjREyUTvSkgPXc9LGWwGzzzsDX4AePzk4zwS8yHeFHHQZp",
  "key28": "4Nmd9BBipei24VfTsFhdSDzTM8Mon25LAEpwSe98gLf1YZPGzg9iQ6ynxoPpzeVi4tFEiqBsRah7DYe1Y3d1dQMv",
  "key29": "5GrLm4h29FaHUimb2wmbm9XgNXQYXZVcE171UqNiKk348P15rmgQTD1jQS7A3sdh8KDmf21NpRNNXg5stK8upACx"
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
