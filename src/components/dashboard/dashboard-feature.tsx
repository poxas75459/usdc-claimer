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
    "42SnYxiuFLvrFdqpWZZy7doW5UbgB2L2ENL85X3Jss5Bw72SksY5jE8ey78Y5foLkbpZiMjHHamgTWyNGyNQiRdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uwh92yHrBBrXLrXKM31gPrWwuDARJGwkSZxUeMuPxhGSgFsbpTMb9Lusa3Hyxr3seEwx1dDeKB1t3t7wuv2SDzF",
  "key1": "3Kedpa43gZCsi5aUURmD4Kcq3hNkrNjZ8AwStpsgt2CWoSJ9DcDXnP94Choqpbo7eXso7cccLyxFxeLLXpTXmeDo",
  "key2": "5TVf8k6aFFDqZfaVsE1PTJDyKPXf7m8fnVptC2uqCGTVLWaJgRYHcUhreM7rCcn5P7xofy1nptqudVjFMJX4CXS1",
  "key3": "3n8jKeGhceNoN84ugWoDfKWt11RsnyTBooh5pYpPXyGgne2udCMjEyiX573jr1hv7Efb8i3q89rkzJSnGFiNCjLs",
  "key4": "2A64g53FVB1a3SjCeCGRbBUw3MFJU2vC3Mrmd3nECsbAbaEsJ3pDVtkASeg61H2VgxmCkH4HqdzKA4p8iosfnZTs",
  "key5": "3E7z7uafsxK2nDWwdt7Mn4ukCf4dFAXW3UyYYHu8QAub7gBwZmMDsC5MxVgM6LPco2pu6rBR9QHKVCXZkyvXgNrJ",
  "key6": "7ibCoGo3iMV4YZhnn5M6jLndJnkRtvF7WzBJWE7aqVyehuc3PNdKE9JXzbcyoJnmktuiX8FiYppwow2SxhZUyKW",
  "key7": "644KDykNpjxXhDQeuYHrsBZ45GS5CrjKszJr9dCDpGYwKmHMuAppTwiqJP7ArToQ3Jc83sgDWNfz28sJdgUZ4jR8",
  "key8": "YkxJVZxpG7kuCXypvYMQMpYYVRBGKckamtrmrcuX6o2C6hbZJktbg21Syvc59xSkMGkYdC5ueKMGvsWf5AYuLcB",
  "key9": "s8tVV3Z1Xc3hSeNRb8FYXvi9WKcr9jHGVVx8fuA6eeXKStcm7fd9ZbAaPKzF4B6iJHjUfvbsvWyjLDG9ERYQoLb",
  "key10": "4Vw2u9XaXdHv3MaRfgJuQdYwa8LBaY6GK6LJ6v7oNaMBgQ26TmeoHmG5J5orTe8YQZJoSPNyrZFEtVzvyHUHLeJo",
  "key11": "65Gpkmxu9KCDktf7KzR2G7qXjWtQGqVzwQPDoeQ57XAECB9q2L8nZXDiGPYeyrCb4ouYt8MNseGUCdKSVChmvsiX",
  "key12": "5jBkXMkBCjM3FtYXgFsz3spSf6rxx58cTJhyMzExD6EzGGEEyBcccUhfXfNdAgUt8myQ3gLrndupVaH33vFW6qey",
  "key13": "Q3k1EFg7Q5mcDXbHgKKRmFHrJxmbDEmG2hBFs23XNnsSpoL3bFsyaVbS59nuezxYWboWLdQsZEhiF1i4Vd8KfEr",
  "key14": "2iygwTYKmGf9peH9b9cxQeVkYdywa7DoQyqXQkQN2SBi2cmAxQTVdKziRyQEGpsW2Amv5S5neueJdUCBiAC34Jf5",
  "key15": "3YJadye5Q1J6mAG1zKi5Xmx527PNgBoTumC4UCLFt9mrGJMudbiY61E6WzPHUHwnmYNB6nnxc3symTsRwJchsiko",
  "key16": "28nLWWLXEgR8UrL93hsN132bpJXg4ZTe2RCT2ddqPHcAMAKMm58kmUyBounsZnzQi2psNHgmB61jH9Br9zjURPQ4",
  "key17": "5JuAbAv4qWfjwnzzCnV5j4m7UQuTXQKvHyEVpD1tLVRE9P9GGBoPCeTAfCzRZq4HqZ5svk5FHrZWro5odPZPnoit",
  "key18": "33voLdwpNnm93jKTmBgC2ifgFNKAix755kbqag7Wrt1jXUsVPhjRGS8h8GSQDhbNFwycpR6EtcpZTU9bQRK8jkyE",
  "key19": "5y93T8GiHpxNpMf5Pv5PDoU5NRSK1EqaQJoy8ZWNMjsMuw9jNAS3tJdoFyNJgHFchA25YrQQ4eR8dCNHoGquDGNa",
  "key20": "5YgVG3uUgzBZv1df6bvtBXvsDtr53qF2k4dnS8iCdoUb3TDEFLV6F38ZCuwAgZSojo6Pqm1XoheMTi1mo4c6kYos",
  "key21": "34k4Mv7E45LhH2vPLvzgsNfWx5NXFz1K1fCpZdhviSRF6vyfCNrGioz7i82aWVRpopxKUSnuyYNFD6L5yB2YBtxL",
  "key22": "4DFoCjD3jLMG8usDp5EAGZiyTfdvrMnMaJShho1jUtwq4TVKzuTEqAUkRS7tQywQB6QDSoYmp5HBzvLdBwGhxTfN",
  "key23": "Fh4Nkr36b58XcAPtmqA3NrhojuWEQm7oM1EUtNpFjZ21XUusE9HKKYMkT4PZgYjRSqLVEjS6XsV66dBxwmN9HLB",
  "key24": "4tzEE8wQzKA1VBUHqd2WRw7S1veuL6U2QC1G2t4zNdS4BZgdBgcDUmXCrJ8rxt84E5RSp8RnPcagHATZpgfyjuw6",
  "key25": "3273z4jFNJmn53JBoxvSJ1T4XXoBvr9b8s3wo2GxUmjAPUvdrPs48XkGLv4q8ARWUcRq4ptBpwftkZxJAyb1VumL",
  "key26": "2Mo2enwc4TQXLKd3TjMadiM3kconmDAKeFw5oSFU2iMzAqSP3QH5Bihk4Lrz63WoyqgV4GvLw3rS2AwQZXvaR7ZM",
  "key27": "NtiyZmhU4CGQXPdKiedYA5g2WuRzpgH8FkRY36ZFmVxKQEhS4EWLKwCjHVg8K5PUvKYQhk86CKBmYoDK11W7VKG",
  "key28": "3xorWBxtPtYfrMjXLHNLoGX6PMEmNrnDYNFdRxqy6ZDuTNLvWUo3WEfieW8jV2savsCYhJgJtmRK31X3CCA7tF6z",
  "key29": "4EemEsWCxFFtBT4F1EM4Kn8TBvcmxijg1C8oEvtWkBLMw49g4gUZZDhpJzefarG7xttoMbPhuyxupfkgCzVdF7Ls",
  "key30": "nieruEGLaogJ5kyBoFhzhpTFmNa8t9TtsBRCzGcaXect7o8LEqAkWfsX7tkfZBePTY8iG9mji3BgLHVoMJ8xF8a",
  "key31": "48tnBHi6msspUrXdJHzb6xU4ZEGwz1XGaBjtdERk12LgYHVgrUfuzexXHSXLN12SQmuzSVpbYyvqUXfoMqVSynA6",
  "key32": "sqNLDdMNDrgzy5BwThfb1bZDnqLbnCmWB6YaoaVBUXvXmsxRgzmKbjJt34FFxeoH2LHPLQXXbRbEXJbujbAazWJ",
  "key33": "siWSqZ3mZ4SSSibuH2oPdhgFDRCGhhQtTJpEX3cbYgPJ2dK6Wu2cXbU6ceYmtU1oFzHbSjQ2ekepXUYGT8WwVTz",
  "key34": "5VZ4uVNUPKhP9J7pxpmkE1Bs78epQ6jJBYbmkBHXaMZepWMotXAc5d6RENYgRsi7dPwhpMmUa1i3t5s6UNLmajcP",
  "key35": "2uHeyGHMdvmvZLhye8WSMgPgabJXMDN1f2UBeZ45NcN7fn7jVyt6KeUVWgEnE3RbEnJgBf78BADRQV57seB8oREy",
  "key36": "5XLpMdtPVyz3d1BajgTxURkqdeKQ3eBG7k5gKadstvf5VWqfWp4VqySk5PFr1VHh51Ze2RhmJfjNn5JaeYYckbCe",
  "key37": "gusC794kTEGMbYYTcmAKs8Ci7VuK7m6HHQuqGZrU43cnR3vVDdvei316JASe1d2iMUoKVaHGwn6q1MicSWr1g7C",
  "key38": "3sKtyeNZc4gbnW9NSiMk7fmXmMoNrDNvsdqmrfFjXHiYy6Z2rT31Ly35tSTQkowre7WkjdYzbESfueN8iZA4rLs5",
  "key39": "4X7285EyFETsRZMjhaabySUDtAijMuG7XWzYNfYvJYro8QaW52KQ1S9zCnmqoXSJU3qXJxCxrsmGbUuDX1Th5erM",
  "key40": "3bPmsCbWXKrfme7bTvmReqjXKhzHMvb8VepmCWbb2gFxN9GrzR6dLPj34XwRzQEcYrY9tTsGsu1VffG2mHvGbTxA",
  "key41": "iFZ1MUKwcFqHzurDK6SRJGbyY2jZKTdwYZ4MY6k4MzYzyd3V4xW3WiCKUPoETfHRxbfontmxnmniEHoAPQpguiT",
  "key42": "4MRgca2ws6Mu9wg5Kv9M2Xdzrpfr5f8PLGrhaFHUpBLDpbmU7PajeVAVj7RmfAAAFUbr9muRXgKsoJHCZhCyCvJC",
  "key43": "DjLN3dxYoxDM3GvjEWhcviRRTq6P4Fz33uL5S4NLtMCx5EnPBfa9Ri4H6LWq6vxssWRu2NZYj2zKYNFsiP6YSvr",
  "key44": "5Uf2w7N2LBTLJRSQ9b41mrUrWJenCFsXsu9pN6AVk31DgowVcVnMREAFjVQn1sVqvBcppsEh27S8JJdZLynQ6mGW",
  "key45": "2AM4s4iKrkqJV4eEjufuHq8NUP3zoGMQuU4oFEinBNNu8sNGmB4KTFExz6NgnWcKVCAEUYBm1wfgaDP7cykVdo5o",
  "key46": "3yPJukcrkmKn32d7SyQBJ35Kkm9N4djAn8y5G1LK76yDjcZDFuoVvP6TUXLtqQSqDveqNrQsAMPkFQUUdeZSgY9B",
  "key47": "5RuzKNSW9U48iyKGXZMbS9Vth4e3xuzG8Uep3oiseURvL6sHfuFY3qLdeMtYfaj6sinhhfB1jXGiyndrrnYR8wYe",
  "key48": "5TzPHyzA9y7WGcaE4Sj2abvphHCFujZFj159YARXiagFXTKGWoA95KV5XcZovuoMibcGSgaxfMkuZr2PA9a5YN1p",
  "key49": "5YYMmRP62Veqcda3LwN1TPN1aLQJnMp7tUhHfkNyme1QukhTZwqktEBPkCyh215e5z1HfhuP6YYrK7YNPVwoktvW"
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
