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
    "4UerfdiQBHdhwvpbARnWitQ7zdKmh1hFAZzc32vyPihyfMPXzCiJcnn7nHus6ggdcGeXpRAThsoq33ec97XumcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JTMhg3x9PQoj8V8qnxGefTA2u2Gz7R9q8L5weaj2rNMaYNdtGeTyorG2Qm34gkNMr8bXpLB9WrL9Q1kc4eux7bm",
  "key1": "2VTNp9Upg1JrkBwHvPP3Zw6tgUTVEdtvRyu1nKbJQVgnM2fsraVcCmyt7dcyy2oXVL34vwxjptvRw5gk5KLniHYD",
  "key2": "v4VeVmtQFDoTCCu2tyQE6z3Z8ge9FEPL587LngMCP9jGtcde5LdEU6uGbo3eK5Qfqq3n4HSgAot97dUBFKkoCKq",
  "key3": "E7Z2szHn8EHqWH1xi6kBLR7NtJeDNzD5AYj9nHM4k3MHEJdBssW23Y18zeRgJEHNjkFAqAXRdwP8e2n2R5Qq3a6",
  "key4": "4PWHKdnbiXYL5pSSvHSLhnYkYTVapgvC6XhVUq92hPivwM7HQrjpbQMrAn27CNZ6iRiEUj64W2JJNYQA32EAznw5",
  "key5": "39Dbs41QwEM8pqszUAitpPXEZBJBTeeMhAioAD5v4iro3tJS12PM2EsmgR4RT8wppHttov8eYHERjwNkciCBoxPo",
  "key6": "2CDxzRxvRaRHBk5poMpwq95SeCs4um5DeEWxhcCrNwjVBS3sw9P6XbTKQAPeDtzBeimTB5uCksMtnrzhmdMAT5rt",
  "key7": "4zoW2XD1j44kyEBAGhbvs6SpJ2T8hSwLj9Y2E3JnLPYzFhLzzqXahCw5wx6i16hKGBMeqxdvdSrpPoAojeH4QSnj",
  "key8": "3PriPMQia1kHJjzamg31N1QhU5Dg1svhnqgBk8Bn6R6U8QPc5xhp5Tc8bFhLTWjTES2qPvgiFbggvR8eVbzLQ59J",
  "key9": "rysLE5Je4LErJLfhhLHETLF8e5w7noTu47ehBkBYkc3cdZx5FW51C41UbxdtVdn3bhoBsvkoZqrmthB72KvEykb",
  "key10": "4EFRBcEkTrqvjkbqvH3QRLv6JfkBwY686Q6SWRnCGL92VBCN77TZ5kCCmmEhc4GavLHB8cJwWToPuyeEXcypvYh2",
  "key11": "3oZrjraqZaPnPNvJGuLWH6s37C65ab7mmAzCtFyjjg7KbChkm5eJwhTfr61FpWVGsLgGBS79rv9dDJcPRt9HjsWt",
  "key12": "65hTjwKrf3eLUKUrdGowPzgmjD54XpghPknFiKEq5yMpXSumZEeGF3VnVW9ENGoiNNVVKJ1hMTk2iAaUEEsHd88Z",
  "key13": "5jPqkXC97PJT4q5ScHTCTZ9GUdXPiDzQaqZ15ENBbHxyCmuGj2smUfCksVREqgMrZpZfrCrdrhvsSKF8Ef45MaW9",
  "key14": "4pxeb5WKBBBS1zujPXGyJHGq2X9Lb4dtrz7Jir5Bmc63rsM1Db9vuiy7v3wiFCKi39xux277TbBKyxgBWfLe4TB5",
  "key15": "D58Vm1wZD4kSSgo9Jpp8rfwwLwfJt38XowE4pj8RdCLskX173cm9weKqv7Zuv3MHMvAFzNHz4M1H4TnsaQei4Cf",
  "key16": "3RAt3ZEjCfrvPvWjk4sCL6gTJYFW1kTPPEPvqLWT5KBNDoZGm5TjvZJx3KvzjgNGqc6GghyeZQWqoZDESxBZkZNm",
  "key17": "38nxLH8fdrNZoBawZpkMB1SzLPmXesPi1kkk8paAPKiREeXU7nsjoUSTAkfRYic4H2dhucEhZP3JnZcBCoo4tXWL",
  "key18": "WxBSNfYUgfeTgEanoiZRFPZyMbcC5GG1RJvSkyerCc8pEjamoy8wufWS7m8GQV2QQVsJuJK7iqJ1vMyPyRg2ZF1",
  "key19": "4VEFdFumHXN9UTWwqQPqcLhfQ596aieF3YDyMqunUiwftnuNjf1KSNYjHMFVmRF8VrMuXFuzHLCwefotgS5PZvAr",
  "key20": "mp6fM3WpqDeEQoaLymuRFJQ7m3jwb8iV2fM4UmDZGH2K5nDCo4JHK2qutu6GsJZNk2zPDD4xXAp1kuSWFP2oPuA",
  "key21": "4Pxus442XBDgkbTH2efTWRZZmk8QUDPZ4fVrHY72nnCDxEzbnj1cdVouUXb5GkoFixvHCoD3SNrS7JJYhKo7CTtP",
  "key22": "2C4dZU41VQ5hbvbsUSM4GFo1oLgTCdCNdoAJDkCEqN1b7gNdX255sdTvPePNSnyHaHf3uyS4LBNpD73W5XkQ27cy",
  "key23": "4NPh1Zu12CjzzDGBVs2JuxLfE6v8oQRFMkVyJA7SXJZF9RsMxdVj3Uzxr5Qrit2St2LxAF942UsERCFveU353XDx",
  "key24": "3XeUbKfSCzB2qfb7Txks5weE7VQsMwwJAwf5mRVXdrN5FkWVAxmfJaEqwzw6dcripS1z4SDnsve7qm3nFJ4tYbFY",
  "key25": "465dQGMutShq1mFAPFhjvwsgqgq44BFK87iqtkD5L9ccL5mM4PJahdwoDuGFsPW1tjz7dsKN4QcKjCztd9ktL7hg",
  "key26": "4ajNzAhRcrMVGMEeeQGMfY8UDzHEJ9ncro4Rr38xcAp6K4Fj8uLxbuKnw6sxaP1ShBL9NpYg73YV12cdnymS1e2n",
  "key27": "2sjTV1nZiEopoXKWYQSg4fBu2UWq8mDhUCQNkLTF11yhQSydqf7qR5zEvUifgZXSo1NNMkF5fpmBUS3nZTkUXiyv",
  "key28": "3Eygvaan295NH3g3R1FXzb3cugFmw1mw7CFuViRhR3WaTxk5Lgeov5YVuHBoXtpMvsAjfeUX981y5sTKTGdFdXS1",
  "key29": "2AQHqLYz6gLNRmnWgHZGi9qarZkUxZ6kdKDyTJNxZznsjasHQrM4QyXC8L8zQdU4tNdNR7D4YvnxzeCjssnqMLNd",
  "key30": "276dWp2fBxqEc3WUMsVfFQ5AvLy3jCHV6iUcvem95uWmm1xL32qUL8qFiQifnWEertAgX61U28n4K21GW19TtmzG",
  "key31": "3fDkrdLiNzeRV7bHNcD9Qm6wXE5dgViwh9XoPRgofbA2yBpwrw3uBk11TQNCEaLHQRbEPK1gngyPUrPE3EDXWdXp",
  "key32": "5YxXFHNThip7F2imbadN34UPLLmK2DxSd3zgZJWfDyHythj5zfNnJuZb9xGuJRnLPVqcCE7sB8L63aVrWSaTigpP",
  "key33": "4iFsALwBo4YRym4guib8ghay4YWsgPoiT39stgsfgiGx6CN9KafXAEd5Zq4MiNTxL6g7ZWW459eGRNFvRZkqBGZh",
  "key34": "2L27rxTXhNHWg4Zg7PH9htoZkfdnZbi8d9V28be6NjTAPocU5m9QQfaHHnA2qnLmyFFt5nTYKKX5ZeW1kdRGpMvZ"
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
