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
    "4Cy8jcxSyJLtFk3JsawpxEvhQzcXZ6fztdFa17UtZfN62CxXNHA35H1zVruknMB8oVrm3Wse5Bzgtfv2iQpNvL5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35EZzhHr7qdbHVqg6B9BhULnne21ZaP8Fdn1hTKQWxhfE2ZR9CLAEiv315fZYWiEdCk9NFnW3xjXNBPXjQE1eCNm",
  "key1": "3sNuiPnFJyi9W9p1MyHWxHKaaVw15mYqagUboMwiUXA2dFejHWUniaN4fgX3o4NeZxhFeYYY6MN3Pxp4v7p7KCyh",
  "key2": "2VdYjkUaytXZMCwVK9FCNbctkWJKXHPgPA36WDgHShdYpcNjjkDP5XUoQyAVAZ87iJM6izaKugdSkxMtwvaFTWQe",
  "key3": "2KpNJ9dbn4TzN7rNJCAtCCVAsoexqtRvT7BJCzPRASTBL7whmW83VApqSnqFJHW94J4ydXUrmCnnN9XZ3u7mtNgK",
  "key4": "nGqejH8RT7mD8Fn2qcNiNcYb2aJ9X9QALgV6Mz9pfCdKiLoGRS7uZxbMPBa6PWdwWS1MER7NszSVYL6S4yhkGC7",
  "key5": "2N46w8Ee6EnRtiTfV8RJ5QAy7f6TTzHGs5jdHM5RusGSdVNqKZHraexWLnLDPnixA1qLue6Mpss7G7H81hTScpMf",
  "key6": "2y1Eov6ovP2Y6w95DforPJjMbTTDAaBTy9tJuDbMjQtfy1P4CWwCVnnZGseECYi9rnn4h1NESg3WXUVbuYux5VZt",
  "key7": "pMDZmkxNaaz9NjGEEJsY7y9HAP3QRcWx4TVnpgnaDYSrKtrpZ3xsgsMCLyVqhWUtUPkWNuGCMWuqqENuNnpXjii",
  "key8": "3fQgoNvSaZrt2CwA33sitCjQrxdbb9NtGMuYMZU1QxmgjrsiM6KDPbHbcSob3pT8J4YMwkTBWmSZqMcSuY9G8vtY",
  "key9": "4vkbWVHqcsjnPsGHDXehENGcCYz5rLbPfuxfgKQAZGQkFqS6ewueUYwpTnc3mYSqPUjViKX7Tfm3hkMhP3msRpRy",
  "key10": "4fH6tVBwMvQ4VUii6JvJ6d6TcRT6pD55r6iZNE95jz4sbyyHjDSBHgWbTJ8JjdYSXeSDupMsvqCXWmZpimXgPBym",
  "key11": "4wHcY4pEGmCibFQaD33edsKBwBZEZFqofdFBCcNmMMant6UNjN1vh2jmZNjqJnk1gPbQ9xiJethJRQWe47KkA5E7",
  "key12": "zymvueEGsFLGVykYs98fMCGeYUdZaZUX11katAcXkmz5KfaLobKc4nmaqcuYiQmXeBAPAr7JB79uwPP6jtocYt6",
  "key13": "3wHE67oRGLkqZzw8tMWPpC7LmNRt28penPUzZ3G6VzWgmmTE35HLPRpSQmvh1aBUhj69Hzr4dKwaNQTEsQuQed4Q",
  "key14": "3ndnfUNM9cPKsqncHr5xDrTqKRLD4sUtAU7xp8GTS95Ai314WLKQAMsWbEuwnfdccZcjXzFAKuYvcVBbXKn9yVna",
  "key15": "2R1riNpPhxqLHJxWdgr8fyvDQxAWLGYKfVGBVDdJKwAhikaj9YoJ7d3AdFUoxweVxk5rGiAeRCKUBsL9s127RAKb",
  "key16": "4mghCg5bNoHUz92RMPzmYNhUEvJkZT6Ait4vuuiwQNmMTLz6U3nbkuEpCrU2gJjibMvhxyk58raL4dKXJkT7P2DT",
  "key17": "35F1xt9ScYNNYfnZagvAkzX9RaQnTBPFvn4neyPqLDSegYdD11dMjYFL8BPgRK7ye62UKXVdXcvbyG1etUfnfNt1",
  "key18": "5ThswKuavvCcucTrVEYZMcXm1YaeSbAdd5JaopJhCh5cZXM4nxEzq3GFXgkqmnJs9PNNMLBiLhbSCGS3iXJgSfbF",
  "key19": "D8Rb8TPy2gN1LuazbjSJhagHyB5u1Ph4UkijoJhaNu1ZX2TLLbuDxLGXYHZRnVZmVMYq7BSCtBrd3fxt7xp431m",
  "key20": "42KMvRbo1EEdGyF49vEozWBJ2NaKn88LGortzUGWu3xBVSaCh9LBfbNHpQT27PGPQ5zutuMxQdAtsE9WKrJ4RFpW",
  "key21": "4NzhdqFEyjNnvBeqBK8xQFB3sqmcMD54wby1FPkXm4JBb5A5RApVip1aHssstFHEvkUPSQM73WdRjh1DoWPYsuZ8",
  "key22": "3LfknTmDSkQ6ficiguGV5Hr186SkMmq5exUqwi8tawukr7SeeS244pB5cuRuqCRNScqkQwVRhhoXeARxQGGMt3M",
  "key23": "4prvmNaQYRnnYuJeXu6244SLGi6AbJ6626FMqw2rbquMpDpfXgxEk7AfQVs68BK2R52h6BZCcLAGJzUBZ7oBSQ6G",
  "key24": "2SkFS7g7JQQZunGUFBVo3WRWhf3pTH32xXBsueeARQA1PjZLGwFE4QR3xzrCNGdLDpJUXViXmsbsHx4Yv6LyPbdf",
  "key25": "4XnyxsfhvfEvcqzwNfs8oN9BDeJX2YyfHJsTZYWj2whKxqXBYfUpCR3z2enEnEmbkv8KNAmkjXP8hWg8dLqVg776",
  "key26": "458voG2x9Bp1kddbrU3jFTqDytJW9HJNWb72RXY2yJpCVRpCRKYuQ4cixZNqdJehVG7QfMzqcJZoBEG1LMWnuYog",
  "key27": "527jqF7psgkt5QAju8KXwtbqKqtNTSLayw62VsTiwWzbVHMg5P3ZoFzkpvhoWHsTSXT9eeu4FNdmwaqXA1PHLnBw",
  "key28": "4cpuyFriknmwtVf9iWa2TL7vjHfTJxk2xQZ8YVCQphcsGa14YecgdfzFwdvZDS1e5Bpeo3cgmhKHHTCah6G87ZxR",
  "key29": "4k1HD8ULZvt8esLsPxtvX6jASjWnK535mcgpDq3VasgwSqRdgQjnsoAn6Q174fUaJtHWciNqU7SFYoLExKXZZ7oS",
  "key30": "4t3EjjxG5r8Bz5Wyo1j2d4vw9svK86vT7FGsmHHA2Gr8R5jNK2o4G11uxyETbjrM2xRNTjwRWwnDwNvnMUDKNE5N",
  "key31": "31eD3sznUoofRPdoW24SHw4VHci3azMVMXC1efEusRer4ntJoWGZ28yP5vhYiZDtpbQq9ZjyYWrvJZzafYwshT3E",
  "key32": "5qu1ZZDKZroDKJFFRvdeitTe1VNCF86zZZiG5njUpgxCVMwbVfhs7azQRw29N7KgUKuAbdGEE5wX2bDqExup8XV7",
  "key33": "4zF796pBmr27ewvCpK5QdRbzzef4oD1af4T9NiRS14QRWQ2y1AWVFTG3wWbFgz9NqrbnC4BT3AKhVDfptbqBVM7q",
  "key34": "5tA71fbreg8A7AM2Boy2bwfAU8vJoJEHznUSK6BomfXd1vuipUMgXo2UrYLysE8BzSN3xn5WagJqjyjoHZWshqxJ",
  "key35": "333yHrNN6zNPds9J5WXfmRnypwXN1CF1Yakgiov6RWra6cCqFcV7Hv6HzQjEqdgh2dSzfsT8AXKHYRVpANqhStZq",
  "key36": "5qxHEnBQsZmyi5vzQCQTSwgX87kvUCekyJ4w4LpX1r26ncsfJ8UfZ5AoVTmZmnDGamb3bdiwxeEufS8cZ4RSS5su",
  "key37": "GUVYhaFy6n59DtKbGii1YKDh9jmzL1KfPKctqG4o8Zzdysdo5CHya12hof8Lr5u5UCNprtVcr4xgh3DWsvs5D4H",
  "key38": "f53dDzDDKT6gsg6abjWBZYEyFAREkGdoovK6DuEx6JMGw1C2MfhoaCVxdsp318bSbogdLRnqJe1t9egdTcZvBxB",
  "key39": "3vpvF4g7YBNoPBZmYqFo5BTkXYfd32hbKN684U8R3fFcbvUzw1PH3jtrrnnXsg5yhcXKRZmJ4ppZpomWioK1ktJt",
  "key40": "582a9g4dSiK7tVETY4biVhBMAXFdLetaK23pBDz63dSvDKfdRrroYD9KiqZCa1ACcK58yKxwqQnYusA4Rnf1nDtR",
  "key41": "4hzTmfhQdVxJ5Ws6fZqjPNGSMHFX2umAhhGTetiDCMhJ9XWTZaViUCmktMmTBQTqgrmCN1TjYZqLKWXtmJrUDnS4",
  "key42": "2j8DrTUvspgKr6HsEAkjCyXnfLfBUw5NbGCr4eJuFRiYNPF8mLCb3uptspfXagddqBnhTDa7gxazEeSBKos2bXCi",
  "key43": "4ZoFcDmBPxKw3ACwC3GZzngFzYJEGudGMKvJaJHhh3M2V8Lj2iugvEdCp7mX22CtW9LKUvfcqiHGe5PHXMcjfjuU",
  "key44": "3p4pJSPdgAcWURsait1SvHgmBCmgypELqSFpZ5DAbPN4eKBTFN8FaCxbcZTa5W75owh3xDwWW1eKCBDhv2kApYue"
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
