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
    "5FooCiieS89ywaMNVtwMh3Qrtu5NCKzNJNU722Pzmvz3LRCiuNk15VDLxgGJV6aq74mXCeY5z72oiutprN8sApAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bs8Jq5cLCXs2z6j7LicBs8eUeqWKXGCNzn5XW5MLbKq1uFnpGT9xCMjdk3XWtDKqjuc7V8ibDre1V9GJq8d8kVn",
  "key1": "3m7xPm88ScV9NzePhEqpopnyhh5bnNUDpfF8jcwSkAg4cPcp76u3kRWcqK8pQjXVgNJysbFTRCETnxjXYVGV21MM",
  "key2": "2iXPTJqtQ4JwiCJNeK3y3X1QUGQAS1mGPy9rHv14tBe4jQwgN56oyLaFGPvfthfDvVqT5R9Y8nNyMvFWMGdgfhoV",
  "key3": "5r93j5Nx54JyT4DpKMT8EU6sGSemhxKnQbDWpV2KDqrAxpHZnRhzVzMPVL3tju4vBQxDm8xuu4sFhNyBPajSCuB3",
  "key4": "3BGVW46Px2dACKdcj7x4h7ogMvbEjveCwcE5yYs8TsKLyntwa1zpHLHLN3Xf5YgzpWF6rzZSMMaaC7oYLCUiSSUZ",
  "key5": "5LoQ7wjsyxHeeLnLk1C2GL6gxRCP3hWotQY3FNRyi6keYuD1NfqJPmN1Euy4u1ibz4vGuxgMFQydREgT2gjsRRCp",
  "key6": "4iguTLfFs7MpvPJfzyv9m52o1igaf3ZJBi6oU7Aemyz1ezTF352f6FknQZuH28qmdgnzGeKGpky4YnMtY6RKtCKe",
  "key7": "3hhon8tZFsLNC8SFYsj94iQzN6JQ9nDBvdCmwgTDL4ZapBcCen5vCYxh8NfsFAS7PStWXyLZjw2NCJ4xeMsnbz64",
  "key8": "2E2aoyzvnoNGBQTQnCvDvRWFMUKK5eVjyhz5rzhhtDRuVWQto9MgBFR8RnH6mRYaYkcopVpth1zJC4DLPSn8S5WN",
  "key9": "2a5xf7cGSEUy8RbPqH8GYr5QF4pQ8t6yezWhCxrqq6rsiaM6j9WNG2Laqc61f866gbtfiDpqF56WEojftM5iLQTZ",
  "key10": "3JxkfjGwQtJJYSghKQtNw1aabm2tQLhFcxhRs2EGqkk9ZWyaqfnWFzQXUMToTv34vUVVcYdP1XUZM52VuJ9Xhsp3",
  "key11": "3bsJRucgHD52RJ4wZmSK2pkGoBzhWaPuQiYiu3sX7ejCEPpGgbxZbAgLdGrUd6shQvxDA94skiqmnS99HzX1gqoi",
  "key12": "u9H8e84zMjfKsyZFUnops671SCbPAZjV7cePe294SzgFLJb3Am4K5zviqrFRoKiSHxREKCb83v6djHrzRybxWBz",
  "key13": "4zsguM4431nrVpp9W3AgDNXBdatCUSiJB3AVJPKst1SrM8ogoKKNXyCEMAToKBY8YsQhi51K5a7yHja42SJrzVwX",
  "key14": "4cchjT6Emzh9Xqva2g3Fz9taDvGPmjrGYukNf9abPBZ3Sk7GL7NieDXQ5cSoeEfM2qgGZq89C6JwQomQeNHyakFC",
  "key15": "52dn3r9KW9Btg5addHGhNpmHdzbPYK5uJHytyRAnRfXEacSLtWx1CHNvJuWb6YFgv5Az7CcTThE2FPaDWdFXmwQf",
  "key16": "25YbqzRrRmtUKsniVP2zLNfF7ERGB6e5jjjYzXoEwK8jpLyCwe9EGSTminr7en85Vf6fyFSrdZGHZKodYTxbbQ85",
  "key17": "5Sg7drK1U18Xm4Fmc4Rc2yYLbmu8MVdibeU1QGSJufDARnzGG4zgGbc5xspndLKEG7NeZAZhjRAXyfzfN7BBTQme",
  "key18": "2S8tV7iCBMK65qqMKdHZUYR44VjN4dB1oxhEjgk9Rjw1AZLMJuiPdo61eftwtAWC8DMn8CFYvBmdJQnBbVek3DFv",
  "key19": "5TUKcKNrjvMv5ybTsh2XTkFPZAhSyadnsax5KbdcswUBiBfNgsCDy2MtzYfGVFyr2kynBXHGXNrLaKemB44ZycFd",
  "key20": "4xqEB5HZJDB77ndhs5MJKAoDv9VBjiqvVYjCYP97UvPPXnTAfxxUTruxXhxEjPrz5WXgtJmUj9jFLwSqQUR5Hwn",
  "key21": "3CtHctwvGrLiLU7sXSJrG3wBpJfFzhYPAkfLPBYAWXys4QZdeDvDhNoJUYggyjBAkhCRTwukU9fwonuVMBrLWoAF",
  "key22": "tbEKViNxDVtf6V2PtpoAfLyQuahKwPkmtQy2VK6R5k2nUakCjxpKjMHuzsCky6Qt48n8G8LHQiC1TxEg4VHN9dM",
  "key23": "4zfG6F2m8A9MsVjrm1TuU3ZWH6YhSP7AdNrpboMJxKCKxizjtsV7ANdjdTQ3wmNFr7EBttVYEHBAADjbxgik6ZsU",
  "key24": "4kVDj9A6L4USqyvvQB5YuutsnGaxPEWgCPzwrB2taXWUiMBbtEFfhyg7wF66K7XPwA1XvJu8asAZDf73GNjA6XsA",
  "key25": "YMZRZVVBsvYJej4h5KA7QcCU7LZymrsrz9VsAVKB4BYhsdLBB5j2XFrjXinuuprhNUjP1Ss1eKdqAzNipgVcFqq",
  "key26": "2ppUYcbPaFK4K6FEh3kZYfJGpWzLWMHev3dL1hf82ikiXyXoeTQXEW8fSNBxNRdKiu9c8NkzdiDMLG9TKKfiwNFo",
  "key27": "62KfPrzGcEjHDEFgfREPjkXdzCMRK6bWwXRXEEmt8VvHF8utaP3T82vtqms4YWVVd28Vu7SgDpCzcXndLejGUUBf",
  "key28": "zyGaWgCsCBhD1SXXnz53JPkrqabKMeooYRApvuGiqk4QQudV3TLFiv2iKMFnEHDUKvoHAw23fRftit24BRyLYDs",
  "key29": "3yoA18bmqKKVa9UzqhVscqtAvh9hvZaXZW8DXVnVSRJccSArSPcUghqxDdnEmNGCHu7zatUmpEx2vEBnTsHpj5Ny",
  "key30": "55UX7UM7pfJv7d9EnnPTAQaDt7Z8geA1Ra2Rh4FCreDjvCrcEkCJnCMKK3UnFZp4ArNfPBdnqA22ZfivczKeYUVk",
  "key31": "4wQWDwJYHZFqiQP3uGzKvWcoBwSiMqK2NViT7ShunicvhG7hYKRCYPy5LpaHTRZYS2GroVdKaQYVdNyogcmi8YtJ",
  "key32": "45YUHi2euswcEPHNExZuhGoSYrj6eMkXqfM9LQy7R6odj7AN36XmQBDNAofSefbNzwu7iZRE7T6eVMaZ4CFRqYTB"
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
