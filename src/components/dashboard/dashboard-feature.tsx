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
    "xMSv6ajuTvqu2KQZfBYYT6Z7GEG1kqKdAicsYmHsjcdqZZJnYNkjyEAqqCZ9mt9nWoLr8ywSHPfkesWdpeabVSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2asSuwVZeq8DjxfshAgp1zv6vvaEMycADhotpHsVfhutFq2o7zmQpcoEf5WjhCTjVb4gMTxfb6tksCCuWVGuqxed",
  "key1": "232ogjdwvz8KbqqMFUYYExgj3RPag4hjj4SL3TTY4K1Wu9fMoi7enf9iSJSpUDtr9fyMzN7ic8mMTiL8bmEnCPTE",
  "key2": "5z3U3DTcpKmmPaCAnA2yxjwWBLRU2DNseD4shZ8WZRABJjgqBqHx4yLWLSRVA5YSLvraTPdjZeANkoPXggch4oBU",
  "key3": "2kKqZnSawCZcjvo6FgJJHaBv7Pm5Xbb4Y54vX5fEqk21XMjxwztwnPkBdhWjLMGu57dsABU6R5LCY6LCbstSy897",
  "key4": "4pSsvMffFnks8SAFdqsordECXfBbzGAmydBqhuXrcjLo7snCvzuH1SciRSuHo8ZBy6mp3nLbdUmb6SvpKiA8kLin",
  "key5": "97Uu9fP53VmNTc7skFnxeL9rb5sTQTCTto7MixyaX9EBjXCVVP3QCN5eXzptxzNwaUhUEpMNXHbvL8jPNwpYqpq",
  "key6": "23RziAydhCmfovPXyo8KzmbH2yzc7jydcSiNouL5A1yQ58Zc4F48yudsCiiManNS34LaKXLUMQVJ1qQ1iwi6HU5R",
  "key7": "kaCwvEjrAHuEbu4Cf6oZd7ZB2nGa3t9JhL94fNLe5BmyJ6Z3gbae7MKRfvsEboETVoKYC2gXQJZVR7zxhVRBMc1",
  "key8": "55WjYTrcduxpvtwNYgN7Kh9652qja1Wxc1YLFdqjzRvtMEb6GFeDfgLaxtXVsCvb741FT5n3itjw9SGydVardQDD",
  "key9": "yYaNohsNAT8cVsX8djwM2xZCtrqoo1b6QPC2RFCq2kjnnxf9aThj7zpH56YxLfyBY5QiTuXwFB1nN4pLFJcQfZh",
  "key10": "4uU7ParKd3FzVTvJ11gz3nWwRGA2AVJxTqimjCZCgnBB4Y9VBxxgvBqUbNkNVd14kEY9tAoiEaio3ekMka79kpU3",
  "key11": "25iqakmfVBJzd96aPNjbGYDa9byQJiVG6r75FT5WjnGYct3LFy1gwtV86qhNPELwwQRiGcx1MA4tp14wVWmXsNWY",
  "key12": "66igCmDGA1apiDHKi8t63CUN2gDLkNT5yUJsTFRmDM9W5CjVgHwp3jdzuAtL7zafH5AcN8dpzYHVL4saBWAnrcau",
  "key13": "4kWtrCXgE2szr5ke1W272ajt7NkxVJxaZBtPVDjpxaEZdit7GBfuny7X7PQBcet2MdCCJbRSfLmL1x78R1BkoqaV",
  "key14": "43G6DBkMJoLgNyYehtmzMEpMUtk4fFRztdnTB6eCAmTe5cqMDLTaqqzcXwz4KiQwXPLsFwmHathf9iAGDhRWySn6",
  "key15": "5oF5E5WNeQ4mxopJZjWHyRmzto3e2DqKHY1inBcspbhPndA9HHpPFMoJUVC3iPxNjGrgqAxk7KZtpnEXubGbFPC5",
  "key16": "L5Pue22c4FEhZVTMCLiGfmux6e5rfeCmSXS4cFTiMoXLcNgCw2YzrfuVJfxTBGyzQ83jQidJMQRouos5D5FtWzd",
  "key17": "4LhtmVFYbyu8o2qF7SVhhPx4RPTmKuTGr3KWqS64Z2zYPrQkP111fB7MFSEtCGujkaVyEeyk9eA8ehNHedop8ECe",
  "key18": "569FDWvDKtqAZgPm1BCvPiHXecMndnXLvgv1pv6bMTcXgZM6Ufv7Tsh9JHUyE13a43Kiy7fLJRB3qTRPrbcuWE2j",
  "key19": "4kciL35wRdMznYBtR1CjaErsSmHpDpfPSXvHUFXc6yaFApb1ZXAyRxVqGnYxHnn6LBKtDRgRkBa4kRsKhuaPmQ8d",
  "key20": "37L6rAoNB49fKQW42n8iKMQwBkjvgGyarVMyXssqDXVoMdrifBFe1BSNtnWVMwm7CF9pJ5tLH4R8uwmj43Mcxx55",
  "key21": "5ycBoaKwr2bLf9xuLpWjRFHEiHKhREiJHyvx6AQsMY3iB42WYrW8ezNS77wBRrQqLvocJsp2RXhu2dvZXDMQxZ9N",
  "key22": "5zsoCLDiGL9YwVUVFYct4o2M4tzziogNAMgHFvsWFo1pBcmKLMQAqz2rUzJzXKjepwVDs1cNnQjTYDCHjWBAS7b2",
  "key23": "3x2JdYJyFZUCayi3U8fWDY35Hekcy3oqCBbTdy63uu5EuYzTxB8Mt17Mcnqdt1NCcxPtszzbgLPEn6nGw8dgLpdp",
  "key24": "4yRcU2eTkDQtoJBzVUNRBovZ33mpQEAT5j36uhFZVssZeU6RJjtUjy9G2ib6AbWU4j1MXCJPhAb1xJhqBDodwtit",
  "key25": "42GqENoGJFjFa1gG7hhjWxghtfDRJigdCXkJ7jpBmxaRoj7QYiwsdzwAE4ULfbFcvqgNHgLgyhhnSbEcoTVsDK3C",
  "key26": "52W1kmpQPGo47PtuTD5xSRprS9ieAb9bf85Xr2cu87fQEdzJMQBG52VJ3anZhQM8sV5npkSTJ9isdjMhJKQ84R4k"
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
