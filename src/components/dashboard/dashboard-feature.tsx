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
    "5sLGh7srz2T73PkqSjEzL472APTTGUmFMDb5HVcf9tazfe1ENqKexvvMcoWjM1fctWajgG9TVrcdzWytKNMJadAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F4S18k6APSkTACVeR1LsTYvfqp2ZhbjjEkrAZ5sWiHZKs2EVasoJTyRsJUhHnNQkKHvVgikQQpkWXpkGnkmP4i5",
  "key1": "3eT4haCyuy3bktoeyoNLTNgsGTHrVo6EWwrRHotEPN1T4xhRvH6GKenRKjqjbva26ZuqFVA4AJJ99k4oz9Ejr9p2",
  "key2": "35B1mNPYqneoZo3QgjoxzNHBeEdyRZnYkYwu6vaiyS9nwwhgiiCYBHhvbfTajSRxkXH5jG5KMNVXJzpQiLzfH5Fe",
  "key3": "kDsJ7uWccakeeJ1LwEqMstP9bvbeLpcxnnUUzN24yMDsrm59F5uhmmNcZRR62wXSTx9GUqf2ycVpiP2hrbyinSi",
  "key4": "nKjhnggPPg9o2MRikZ3ByhyfXqoUMmNoZ2pDq592brhuTosrgrY4Jvd8sJEzyVszonXHhiVMYbM7ifQmsKKysGw",
  "key5": "5ZfrC27TiBJhifrPQK4JTn5w4J6VAYEbWNKQBHphzfi1U3fkFGCwEjRjTshxPqbR2fUH56smDh1KVAyNUxvCHquD",
  "key6": "3ndCTgH7kEWsGQG614yQfSNb6qfrV3mYqidUHDAstsNV5csCK8euphRu165M3j6JvYnoQx6kKHS85a8w5ootQxfG",
  "key7": "iUyGVsugYaKbtTc4yGNwEWqAEe2Hy2JmG1A11W5gfu1248AR684vBQ5hg3moexPWm8cUgrZFMbQdjSTR3YKWdWL",
  "key8": "5hovY5ksJ5SiyeLPanwhKirEtD5ZcjgBv8YLojpXaHgCNiuxCrcNUA8cZuYL6Z4eCG612eixF8J76FahKZk8Vw9f",
  "key9": "64h9aL5CUbAXiLWRgJKV4rk5MmHS3MuK73jiroiaTahH6HfV8eo4kui4SLeTDPmh8dmNZEs4UdweVsZdCa9WojT5",
  "key10": "4FQGEGQih6dtgAFrDhj1b2yYFQtogZSEiXAw22wbLzQtzZ1fRTzkKnBVmrNk41ixUoovDX86MXWXTvXfu4PitYgq",
  "key11": "3SvDEBq1vhEXoDcaxYAV1B644Ki6usMf2HinqndTSXuUHuZ34c5a6FsJqCgnbq54sH6BbnwUbCd1MXpK6YSQ7Jd2",
  "key12": "5pj1N2LtYNUQAMe7C1sCWPg6igDkELdAemW1iniGc3L4MAVDQqgUoYoGg5FN4jNB2UcynWBjzeSYhfRJ3nc6Y54w",
  "key13": "6ZiodxDj7oV2TBumuPV9jcW5F6E7XJZoidjmWAA15Se1wQiD4a6egRV27Yid3b5Xk7kFpWcXN2VPft8dMtRZNGi",
  "key14": "1A3EbYieiJLdNhB2D96S4f512KY1czUQ3JimP7js76qTaJpzciSWpcVdUUNzQJABTCTioVNvbPnMpuJgvHgT36h",
  "key15": "2FZPtocpNxEeSwHDnqrYL46tUXzTT7caRFLuGU9L3marSh8D5eR512k7mpRjs932ZUSVHt36WHkstLyf111bDAnd",
  "key16": "41yd2yC4jJEvW9zaWQFaAyc6Fv67NaGcAhAc2CNwfeADxxYVvcjjkiSeutUx1odHTYQUoVK3re3fAgb6rivYfEsR",
  "key17": "4igjcRH5pEFefjiy2mFGMx6ZUSsS1jrjB8YgqfTyqRn7gxFWBGcqGzV3coqFpbmEAQTQ9eXhDrviQfybgdnrK6gU",
  "key18": "5gbXUjmqDGkiHNdFCAvcbxXT95y5VrEQKNbbqSy7oRGMEfXS3ukCbAjAXDcgpnG3GHT5LpVCjkomgWSyWCo7GBGq",
  "key19": "3bxLE5VUtEANStRWHAYHSuEb8VSd2Mk14TypXVz1hVtDsPj6G34wL4yDxCP2gw2LVwK27mVEQruGJwsq6pm1yEsB",
  "key20": "3kKxynYrZjB9hYoxG2qYYr77zP2hQMz9qfcPppcvSYK3cnXq9UcJkiJWLfvSHHYF6hVDqbjuZUPdwLjXZQrxpdZj",
  "key21": "2MzhLcjBVkZ1sGC6VzDkg5B9M3CdFvXms9SjSh6uckUa6A3PTy33Q6AUD5Xi23g9wcnhhj6MnmkGj5gckbdyT8Gn",
  "key22": "4huiyonu4jZpLXnQLY7EBtz3g6aSXafuXKHdZ2nRvLHcmHDvES8VYhvNEd69n9xMyKG1f8VuAtighPEBo1nDCys6",
  "key23": "3fKPRCRMBAvVxyF5FLELp6zqwrJd4FPfavLGRABwoahfzf53wmMYnj7YLAcSG9vJtd9rpQDw5wJ5z2f3mawhdSPg",
  "key24": "4U2NeKB1mARqjLHoy6HoFhsY5UYAcmWFZ74tRNhogXptMsB3JMV2YLNbdRTaRZ8mtuLUkzP3NGDQMPY6G25wESVP",
  "key25": "WAdxvmfbXmw4DnwtoZEASAk7h6SvK7RoVBpoQWJXSc7CWPwGsGbQXuLtDPCGTWWp2DJmRibyFDi3guo9jKourkz",
  "key26": "5nx1MM6RV9iEiQq3QJxunnvWgthXMYdt9nEiVTcALCiMYabnvE33zAxYY2TnLdsvyjE27CskCsrfwh726YSiUQCk",
  "key27": "3S1bdUxa7gZSE7AkZVLjRuHPYeHvEzDbcNYFHP19qYSwPSSKTdpZYMU8XFuvUAPu22dcYroFqhkmp8TPtq4QiRi1",
  "key28": "EZXiHViDDR7hxLqh91m5MjWzpXZX2p8AbsD2CuscYqkgGivcJLEpUxCALL58xGAagG8JmuwycYYcUmu6VYKWoyM",
  "key29": "4Qb2YGNno2CoBRZfzYkXKucfxvH44D8DqSgLTPw3g3TVL4LfTYvozVXeKCL2knaiSywsssgFwpxP1U4mjCpFGb4B",
  "key30": "UphaqAdF2X92HYizMuS18N2HgqJw1XdcszJHEmqWnLW1hVSTqF3VX7MRMVHE8kq4HPrRnDLPRfCqD3Z3Dohsubb",
  "key31": "4d4eMLwSpVZCNyhZMAT8pb9bBNXvJTxzChweiUBSGGRNmwJuhomyauhtfEX2166wQ6Q9S86iC7GRdgoDqgZ5XaUD",
  "key32": "muNtaUrDuiJjzGKiHxQj6KiG9H2WiAkrRmFevxSaJmcoFcKvCmS3YSLURvEwceWtqSX5xeYebQSCwMC3AJB9ySw",
  "key33": "4pUPHENM9irgS2BoovUAA1Eo4qUSELZPxZPdTKkRo9rTDoBqM5GyBUY65ZyhpYsFuDZaSJWUiX9YzVnHtMWeg16e",
  "key34": "5VcUuyi2aWYRaFv4WJsz8NbG2TQAo46d9fedzfCFKacbccH2fEUfG4rTdvoxDGtyK4KJwDwpVDxkb9yud48R6RmS",
  "key35": "5ApAU44DsMxEWL9QJng6z9tSaxywQLGFnWAf7o8xnPMq4iDftL95jShyRkUtv9oaHwz1z7Ka1RaRaNihHukTvzvt",
  "key36": "2hBjsQwrSA12DBdy7SHfiJjMLYv3py3aEemkrXvQtgT3wnqi1XeHSbpPpXZ1kN2RiCB78J13t4XBvSVNaLmDhXcp",
  "key37": "saYutq6gg1DhXrUqxbPEWLkhHsMUc74LQQFLtqEaBjPa61JFy1WnhezN6xgVWncRbjKietUJr9hma3LCM1CNho3",
  "key38": "3qxbK5CmiARtaGknH9dMFdoQfY5wjUXp2b6MQLqbEkEzQuiNSzjSyhL8945ieUhLaCMkQC2j4PL8eRuv9Xf6xKJu"
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
