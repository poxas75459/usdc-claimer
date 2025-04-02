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
    "4Qm36E7rqdcsu13T18EWy4tMo3bbfSRFkbw4Jg4RWELvNJyUhZFgVeueNtPMurPMfQanwsVDTz4aLjaz2KXy6tjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F73mwMtfKjojFmK3aoonakAxFXata4buYfHNB8xadYcw3yxXCjvTn7X6YVPrj2HmM3AoHxx1ACVmXpf5bNhx7sz",
  "key1": "4eSSLmA587P3rNrU1qzBB5ky5AeR5zjvEzm9hGvNmqDfut2Gpb4Ti6cA5oowipykK7aTnV8vaMSaRGhdwS2bL9EY",
  "key2": "2c7WY3V1Si6YCec3voZtgxZPfcoepsDqL8biaDUdSt9wZerYwcASc27wEdZUiJMuDxpEg2NzDeoh5WSncPwC1G2p",
  "key3": "2bk7KFsfcQ6ehArU5c52vgDFThe3XqiyrkE3hcRMLrZzvuEps6m7Ac9xjijGQNDJPu2qArCjrGn5VpN5PeF5suoQ",
  "key4": "24QwahzLoq5iy2rSNHL6U16WuF6JXnLf8pvtaYnbmrCKaeCnbkQrE1d7vvsjjaXPaT5wYb5d68tWRCP36CD117NP",
  "key5": "4bXFB2wR13vXcQdm7iHBby78TLhvm9b66ZjsdTroTKqR8FktrbW25NthEp1n1E2BHQG2F4JosQvJpL43WVmmHK6s",
  "key6": "3iegkuRzehLVdcWhoFh9RZ5Fp1Fpg536BjEGauJ12LxX7F1825n8kfiPzkAQUQqg4noHTEX4FRZeT3yQdTj8Md4J",
  "key7": "3Vc9LENFWErjyjr99L7iQBELK3WSu7EtYo54AuxM5Q4T4LC9e8MTSkEHzkLcCxUbtFxA1KZ4L5riRAgyPQYiWQKF",
  "key8": "vJyo2mKrQnKta1FSu6eCEtYKDHyndDNomjXdDW54qFfBhANJaf6Z2eUwfTvwjbZeUjLPiTna4UTJHbocHUdZfGj",
  "key9": "4HpFfA4SZE6d1yNkZ885Zaq5VaCbhvLRsFZvUy1tgh8KewDhkiRQshnX3crLkmU76eSuGiVbpdEDsgmqSdBSfs67",
  "key10": "4sSeJJRguhX1ffdjpRyHTshCacpA1rM7hcK6aE6RTBf4uF5BiLtJj9sPw1hH5sqSv8VWWig7jC9RQGaQqbcM6kYB",
  "key11": "o8xDEhbhouKuR1HdqtvJyqDnbLpxsHkC8cVKn9DnRBD26iedWXWyUaNbmumqPVYzegH9JGEK7CTeowV6V8kDM2K",
  "key12": "6633hx8j5DDoqNKY1gRbnbvQ6xNeYLcDtokk7eF1GoScMxr9rzzYT2P4CZChSC3M9cy3vs6ooT1okiCXu665eCJ5",
  "key13": "iyvrWodKrWdx4EbnetKKpZ46Yu8v4vQiccHi4kYwmhwFwzJ8Vm3SNCTb5snJZ2jrTaujBPRxiuWNdAgCYv8UEWn",
  "key14": "4mfgzWk6WpJbot2ToBstfJsrmuBhQWLY8nP96rWe6shisDuprkhd4KPbZ81XaC1itbqcHssZKutBLidUgX5oswAZ",
  "key15": "5S9rgYocshJSUqogapDwEbxC54ExztD8MSHmFeoaxbbsjtyKkurTudysRSS2W3AQDcWvncodbjiHVGFvudwxbZtW",
  "key16": "66uEQ4GWjgRvgep1U1bgatWgZp2RczEt1bevctcDvrvFYYMc7TqU74EESSBpkr7RrnnbqQD1wadjxBPwDYfCKicf",
  "key17": "2XQK1V7nByJQKYtZpmkKA27GhmYx35WsWMBJnA3nfmfxJadCmu8HwMb6iF6FRMs84Zoz2BhGtVZQZstzJHj69VK3",
  "key18": "rBXN4obQi4ZUQ9SwZBwXC3u41TNavGJpNUnL8oo1pn7jkR7GFT8xb8SRfXaLPcXAAq58msgRk5sXwP9DXGctjh1",
  "key19": "tPaiQnx11G2KpknYTdPFVxTvCpepBhPacgWfSev1HBhD8KNkiME4K9ufyVX1PtCcD8ZAhVWBjZjuzRojesekW1o",
  "key20": "3Da2uqM9FUZ5ccyqh57eB7JNzW3mdLMT3gnsMmy4mdC7EfbwkecxUknogZMzXxqMGLfaGxdfAmyM4qH4BKiMVQa2",
  "key21": "66FYAaXxfkeZhqNBmZaWKAi9gnaUESbLtaC2V1PHMLUwh7Jqj51aa13JqWNELHsgx1AX9guTVz6ckxtgtrEUyxWa",
  "key22": "2t6F9PhRiN2iL1YeoveZekUWBgnJomSnMKGMaQFo8hXNDkZueMvxt2AVMmRuFdutj1ACxTNYhBJjPnxDoEhjGCrc",
  "key23": "FvEhNSf3MZyf7qVE4dDyhyb2dveYWstuerZPL2uKE3Xtr51wKXHgv8x3L3kCSsfGLuW3ApB2Qm3esCHMMGc5GCF",
  "key24": "5Ax8U5coWq5XUcNoFfoySvHRYaoNMEz2H5Fn2oQDepj8Wj7kT4vK23TaFbc1PCV4CxBQtGukgAQi5mu23sY8NiYY",
  "key25": "2HsWsJvsQfb39EtS4oRTyqrNNPSsSQs6CCqHDVtkeuUx9r8pfPMiYzVcs9zoAgDhZpphuT3haYYGkagS3fHGPi7e",
  "key26": "3kdiUjPy1Yk2gpxmfUD4gfhEgRCQMa9APPgjiM9EYiZGB7DByaD42zbgiQ8PVoDyGmL35PWPHCFP4ZfLTTqu67rB",
  "key27": "TzdfuWEkiaHsREXYaFKaxCHycAQ7TuEhhf1TA1jidNBkXjtinRyQuG9y3jvRqrYSGJXMXid9QmM9VAys9xwHEu8",
  "key28": "62CDuetm5w9a6c5ohG8ayLgBNAZE8XcMQ7kzMSawm3hFh9mvnV9yZakpWdsJDigvKsKLXSXPs53TuaBvtarvTm7B",
  "key29": "4J3pKuvSrthTygRtDUQXu2HHTAHNsu2JptnGxnzdCQdue4D3jKpLnY9D3h5vuXJr3K5Vcev49DCGeqFV7H6NR4TK",
  "key30": "FzaGaXycMv7KbM1rQpJPjcVtCujrbrH1mBRpFS6L6UovogcbGC6fkWxZN1FrjiWxYnDSzcDnoZ76eZw1QQUeAgn",
  "key31": "weeMG3SjVJzHcdLuqbKurRVgJUBWaFDxvPtsf1QimNGkivfyXmxzinwSSLKT4BoV1ZveE3DXv7q3GoZHs7YQzks",
  "key32": "2wWgP8q2pbmvTDSdgbsxnbJeKakWpqA6sByfm2MLZnnZpLMG2F1CRh9BbcrhhK8T2CTKhjq63bap1Kij9Wc6YhGd",
  "key33": "uGqu49Zduq1cEZ95kogd1Tk6bt8hG4xejisn6KBNctwSu24z34sz98Jkc14qJatfAzDyxzkJ78UHjB8taLzKL2j",
  "key34": "4hDqUXUnENsfugSn1FWFJ4GePQiRxPuJFgp6qk82NFekXBMhHLrszxqxjARork4cySswEfkbUbicipd2bTPurZtD",
  "key35": "3meWtQNpc7Ynk4U1G368wWLfY6mhGYpdLhHb4QkbDGCiPhfJag4XaKNCpve9W4qPe1YE9mSb76jiTwGFd1TYPG5X"
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
