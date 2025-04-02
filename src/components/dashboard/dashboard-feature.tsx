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
    "5b9MEi4DKKPJ1WLRiM4XZ6ThibTeumr5FVLRwus49K4GtgcRR4v2bRiWc63X9iySYNyZpwsBQSjuRRgYWCogC98L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6tCSJMTS9VR1XdupYYoB1KfKmj85oViVeu58b1FLYhVPwRswRbWgrG3VA5LMzicLE1WqAyuHnPhPsRoCjp1VLQ",
  "key1": "NfgpvsjeoP1BYe9qsXcGNc5fT66SDX6ExEMCoEX8MS41CHs8v1FXBpS58x1MwoTAsccTPBUhuYx4bYXcAfBNLR6",
  "key2": "24QEswsNkYm79Ht3rCcUGNq6yxbUb5osNir2CUwaqNrMf6fs7J8CzL9uH6Kn8bGg9Skjm2fGMV8Ve7S5URR17mgi",
  "key3": "2hgkDbiEJkgmTNTTtQZK2Z6hiUQZo1ShVEThEzrJsVRAGb6sorrXBMqg7uU98ckqnsUNLUGcFJk1rfuTajN4xtfL",
  "key4": "4a1DLTNN9truyTMcSbamE2ASf7SExs4xAAwqpDH3dWV4YdABLWCsJbVakHcbSfNbhBsr93NZLzaB8ocxSMQMTjHs",
  "key5": "U3r4cf7nNmfuygePFhcq1rtYCpDwJz9ywT3n5yg27bBMgZfir5ZofcmWBqWA1E2EgP4otz34DzJSjEEnkNbkQFT",
  "key6": "2LnYpNCziyCvyv8pBZyg67ySGSsXqYjDmNBV3fpJgy1qiFNsmYJYgZ9Lpx3qB2GAzUSMU19QBqT2WzgwMrj93E3K",
  "key7": "3CYve1RQhoak2XSjUivBz86HiZnBRx6cqwASo3y85PPgJvLLWcrPrquc7feuKSeV98vBDcdxteLk1nFN3Eqm1CUt",
  "key8": "2umX9fgX6RNREj8naiq76xi1MxLd1jJazBRJ9Si3mfgpzBzYqbo3zUpq2omFG5Qtykud1xYBJftWNuSYyUEzZJRp",
  "key9": "56uvTNVzfUy54VmzgnGj9D8nZ7vSN2oXU337BmRHjtsoA8WKQCKBTsgsm8q9jTgcQLRBNGxx8jHjT9kLrLMhvEAu",
  "key10": "33EDxXLXtttTET289GG4ZbRxmaS9VwtAdq3MEZgG9uwWtiiwPzdJRxnr7rbFqskAcDSPZNeDnhcsvZodNvHNbXsV",
  "key11": "2M7XKia1yrkidmEQidnjEERx2nxPvV1C6JWCrD4WTgaEdGb4orsSFrbpJCdVNqAXKZtC9BeE4MJE6hynMXHj92wi",
  "key12": "52ABeNq2pA63FwznDfJW5GED4CwAH5ThPo2vjviQLSt3nUq28wvfEdBgK66wF3mraTobxjtoBRqQxUjpkG91ddjP",
  "key13": "4HXGsBAPKqUtgdZcLpvTEUT4c278fVdzTcJffS68DcLFXavtERqKGqdU7i9wy7ZqQ3yBpSXFTUY8LeETVeSf4hoS",
  "key14": "3pynN41vJRZfXE4eQvb72PLzsSkApVgRETvzT5MESNkG6i7us6rBAZ3kWEDATw1Wmm3wDJjtmbV64ihrJ4iaJ2hh",
  "key15": "3wQU2QADrMhSdANG1rMqC6yGoWry1EiGjQ9DdHeBwe2711KvkE4uVocuQk1F9ad738yxynu2pRGrwz7SonmmwzjV",
  "key16": "3fMuLAiHHonnUMnZDyAQ2FbvUXPYQ4rp3ftoj25YyVjzm5Zw9oCMpdTkNaW15afPvzHG9TZXfPZKzjkaZjWm6xsP",
  "key17": "36AstbXy2eM2Yuxd48SStVpEwQsFqXiXjEv1QivjrJMmYvPARbcVm5oS5cYhvXJxjR9fA8kk1g7VHZDgYJoJkucH",
  "key18": "g2DXMXhWMQ4GwTGF8h9uZwHanDe1XsYqeL9dxPWZRcaaqKLXVMXtznGTeZ8tuFKWtQ6m1HhwQvU121YxVi2Boox",
  "key19": "oNRCB7c6Aihe9sSZzxjNU6GcsWUyGb91XpiFwqndr27Rra2auYK1VuHJ673aXmsQEyWJrBSEqBbBrWPrQNxfsEG",
  "key20": "2NzDpmZXX2QZCmtyND83dJVM884FMGCLg99GVZZGJUgKVSuJj3ZefUNfdKCpjCBw2RpH7YUbfWn82UsQCzjxvM8z",
  "key21": "33qUh4X9X9Zd29UcFWLovmEaBiKw1ydq6JhJ3HXckF9LbWf2R4fBaFUFGJRHxcExtt731TQW2p2MfCMahY544rwK",
  "key22": "5BSWyfF2K1PPwEeYgJRGWxNj2RPWjsqKUivMDNAnbEW2gMStYedsit2Av5xF8s2ZM8uf3xrZ4CyHDrh9HdytMkoT",
  "key23": "2UNTKB1KpwBvPmwsk5aoJk7mdRkNxdxzEdoePmKFJeXmkaBpdYNCNKmYXvwUZSi61z7VhQo1DsvNUqUoD1pWPpQ7",
  "key24": "XSWXbojV7uQ6yV2bHMLGZanazENrsgbubXv4pPVR1ChPveQvUxLHFeTYHG6K62q6YD2LwXcor3otupcG5fCseUH",
  "key25": "41z8VmULqZqMvAkdw3iBVJMb3hM1LKQsNmS5xvegK6HyahZwRpHq9TZaPNHGwG3oKcr6DcGhvoesihqZzq3cnvBF",
  "key26": "52LZxunU9DwDVid918BzNKujEpeaeSgdW66VthmA5FGsF31FBZSPSWvijF3ozJNpAnkh8t2idib7CKLKYNJSKREN",
  "key27": "2ihoadB6uJS8dnmBXKDLhDNh21wtaTvX9rCuEtkHN1ccsUTAKSse78fJwcyXmJrbAiN8XfrxARwE71YTa6k2cfuq",
  "key28": "677Aaiq8SyWe4fU8aZNSMH6ddTnA987z94T2h1iya2tLjMY4CNit1ru96fgmfqGFLQ19ADspiXHfVNmzrpGDHzmU",
  "key29": "wQjoCTQNvsz4ZMdDRQYMcswkDNqdZ97WxqXSgmM7q59sjWZw4wih5Znq3UdPcqhbM1dT632Z3Co862ukBcuzKWH",
  "key30": "2oBp7GY2LqDs3LuzhwKeEjAQ4i6jW5ybWAvJqAdoXAPqmghkLkfqRWSKgGxQKVPN3rZdAcJyFTXxpvYz6YS2hmcM",
  "key31": "4JKE6xut5g4VkofqT8fb4qHZorcGSkAcMmqc4JUQ4PRNZJcyaZnY3K6LYNGjoetHaJyMNy9h6vLnfK19NTecB2rj",
  "key32": "X7NGApgsZXCwMnqk8gN2TGVLVqLPhB4XDKoKnBT6VcWBMDGGXHVLB9zUMKuYCGACaB9o3rcsNpjNtpUHgc6MpHa",
  "key33": "2b6fYkQdBPrPWzMzxDb7YJemZsAy7h5rCLds55ByT7sQRZ46wa6BQcHyNs48rfKYcH4hRSn9XxDseRftk4TRYR4L",
  "key34": "xKxQA22xLao36PPi7U1ugoJBZufqCQKrt4ujUPydbza2xCQKCapk3hSTsEcCaawZwNr2RbypyRNgLU51dhDRhMy",
  "key35": "2qCwfrvioUzC5rRWX1zTraZcaARzg4sEQBPaSkv2AwFsK8HA6Jn4KMM6baqmS2eJzfeNtZ59mWeREAJSdibDjySE",
  "key36": "Jr8TmkJVoEgV42kxMoRkwfkaHRQSbccUGZ8YuA5XgbVwMJv8gb1NQdGUX71VyFoa5aF3DmPrCKvyJvikyqGwxDt",
  "key37": "5Sd3piEfzeWq4q8dLLkqWMJS41KCTKUpKMoD1g4vwZwhBChvdXNipP5jtuHCsFWqpPGQmrhZZH2ycZQj55p42jy2",
  "key38": "5xqVrns5dtzYyjgbKLQx39rqPKhRfpTSbS7zQG7VnN353FnvWXJFtVSr7U5iC88Hv4j2jyLk5iL95GVN3c56KRPk",
  "key39": "5zbWS2aZSDeddUEWvXENQMrQg6VsNzaDkdSuLVyXUa8fy4AxFDtJcijF3uiwBXYfyEhy7vYz6D2A86eBwXkVKKkS",
  "key40": "4JDobzjpGBX71e2fftQ5XcMRQYVrtN2ErRFu1Yt72UFWqh51oo8eQQXvYkbMyGVUYLj1UVNSiJkAhu5muFTTUxKd",
  "key41": "3Ggk1zXEF5M8VAKFsDBqBhMytJuztYLkDjaAY1SLyy6qewHQnjWNUPbT9QNpJEx3iLZo9HZarrEi8P21QA26yhH2",
  "key42": "39qVkagiSPpAAu6jVT2ZVZF1u7LoBHKEhp33KR7rLpiov42vXaXPkGJXgRuk3UEZkbes6fiYUsFaQSsb3sMyCjAW",
  "key43": "5Xyfxh2jwXDkcrMuUjeVBpkKjM9vGurvyG7D9U8GTJRQ3bZGmddtiZTxzGe7KoTAwAQNsVDmqnp9AxLYwTEB6J5P",
  "key44": "3z7XieWT1hWHd8GQU3cQQULdvqXH4jHRuoKnhAGjE53MZZnviG3DWFpe1W44UssoTXrLWwaw4DgVYhKrdzCx3Txc",
  "key45": "3o2eWEtpjpNxbDCepP4Ny2w2AvKjka6GFotfmcke6wqvCgMGzx41TA1Vc7HnLCKESGHSArSwmmx4ymQLmw14jRJe",
  "key46": "23m6ACqSkjL36fELt5RgdfMVp7ZGMVUpnzrQCSocVt36hqeiHKHpkroGs1RGK5inMWQShTnoC9uvtmSkMHErogyX",
  "key47": "22iGuge9NpdbQrLzhUr5hCQxGLQxhFZnzN1YXuSFYC6wbQkk1aajLKhbEL1DcaSvtmasMfusNaGmYGc5baPuizH6",
  "key48": "rEtRX11PLB5kRWr77NU1C9VFFfgt4KwEBsLPAeZoE5iQqqHDwdWRKifqyuKcC95eEKtY4NgHywrPrAKWD3hv9nM",
  "key49": "2fuKYFWQafGUpQovphjrUC9k4iwfZ4NcLsbSdaZbTV5P8THdpwH7iaEzcU8EdyhjheNsQweJyYyrQ8aLb84sX4hK"
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
