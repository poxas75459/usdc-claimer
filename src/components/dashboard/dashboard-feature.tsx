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
    "31GMQ4PcVC5g4fDd4yfj656skjV3qZfdjcFzkV9hLcdoHBasWNkvvSW3uEwGsjFF85VpcxkRSrkZqKRzssmqcadB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aufQdwN1CLfh1ZtgcrAwi8AfDPVDGVZX88H4pbHSrYH6DivnL6wbKbW6MjqDEz5bQN47MCCq73bHheHgKAFdM6P",
  "key1": "64m6A7YhXYQBDUqVDN7emsH5crVaDwiosLMUzComfu6n3oypPYSkxVFjaKJiyfVWj8xtNpVqn8HJeNKa9RrDPL25",
  "key2": "3Vi4F5DZytugopyRtdRHxaizKzYTa7xQVQUprorvtjcJUS2hteLGtLsE4ogWDun9Mur9KnbpNjVePFTk43iLKqNy",
  "key3": "67WEv8sN3VAHkJzDErymeCDpqBj9eBrFxjEeW2A5fkgkrfJBKjCtFAKELXi7duWfunhjpGSB8DboxtWwDpiawGKU",
  "key4": "B3J2jo3AQ7jGfQ1Lv6AnkkkGv2oEX7D6NdDvJeqwySsCvXTEBgB4P6HvXcvMuLh2fdmndqAn5gcXxprtL9UKseT",
  "key5": "3ynLHb9d5cTpPJgR7PxKEqMTVacjGQQpJhRgdgJB7nJgSfjmJMnE31fmKLrY3aFX2XLX6u6Kjcc3dxxvWPVcfPTh",
  "key6": "2MS78gppP87NgoA6DxfBvWn1mP74rX6jsQ2fMpYMjDtqrqwtRir41yM3hvotGWziwaF2EZrPu8bthG78P2ujjHGP",
  "key7": "62vvUABhn4bsoDi3atY6sgGNsbkc1AN22oDPbFfMM28PtTjLNjjuUTaEpb5Q9TuGtqPkAeHJN8GBdgkVFtVEp5vY",
  "key8": "gVsjRn4rZ1i1sgwDDn5D4aDo9xpQAmbhgjcyGjq8B9JEFH3BRgJH6mL7NxPETygHqQDjQ2hnFAKxZxRz2Sheoc9",
  "key9": "5Sp4g7Pd9DJkzPtsvuR1Mob61ALxy23swCdsZW1DfpUcEF1Cyivkz2MHUtmofwrUG1YrKukVTTchgCoVtBNtGFpb",
  "key10": "1bautDkvRSti5fVwUcPfNR7icehjiJWyjqJ3mkeCi4ExZu7NQ24ot8biE6sByLmGKYGJnSTUey5fUiY711Qim3z",
  "key11": "5tSbTG7EkUqyWqXyZ2Dfh8vtmRJYT678FRXocHN4XoH2qTxw18FAhS2YzZUeQkJUpZauF8X4fKTMJFaxNiVsAh1h",
  "key12": "64PsFPg16YRkeqCtAm791zVSeLekXJ4EyoM3FE9LnkGWfzAjLmeXaKr1VVM5Zr9XeUBygs4cVPiqwGDjXpYzXjsi",
  "key13": "4cGhuD3iSmLi482zNsBLa1oTMmuF1839KjXFyztQzYwiTC6juYhaQA4sxGfXBbQpfpzJbBCny458VoqFMGzJNNfn",
  "key14": "5trFhsjP5v7MFvD3UwbWoMvSec59Y3ay9Gq7JBhA5QRrvD47kVwBwjY51cGKNq5kCiPndWoS9BUj9yweEToEzKBu",
  "key15": "2fDxJmYmUTa1uSSoY9JWFgugs1qxzazoaySBzX7SFj3BSTQDjmo4eBPQtvb4X8mQGYbbDKxLrSrXHXD4mn2RtkgZ",
  "key16": "wpUjkHB4hme7VwxJexZwusgRf9syhGZv3kFT6irF6S4R3toUfuWE2wN7UWaf4endQKkWGeEWKPRdkSbx9VzvZx4",
  "key17": "4EE5d63pEr5vUjR9tWC1PpiEP4Wp1C6ethEVQPjq9Y1zXUzLMvih1MqRWq4CTx1SYaRxhpL4v7cS3fGtg3aEX8yX",
  "key18": "4NxkMci1nXjgaxCR6e4TsFQa7wD7WzcE3m8meDaJc71E3CmPBzDzrET7iGf52kwxVuUfLbBs3QW6G55ARV87T7d6",
  "key19": "2MntdhDtPpke9Vs6iGAH4jZ9yuWDp4uLx222EEBVXeCwEHwgRhvhvp1asEL7UX9YKuZ5PfNMjqKHcjV8WRtTzXrq",
  "key20": "2YrMfNidVkkKu9HoBJpqQeCXUpigw98hBTf34Z8tscyvYHqBwWHjamSGjdeyiEJSQLeuC1azxLCrWHVck8EyLBwM",
  "key21": "65HQVmF8Yotu6gjB5g7iW8ViZFTjA5ryTVVPH1VLVn6ktSfMTMPqh39A3QWZC3caUFj2C546tvz7nNTH388mkEsD",
  "key22": "2wrtV3JWc24HvZ2CeF8XSkB7jAMx1Y5T6qhpyQ6KRF7dSK3PTs7PJCAfszjpwLCRAtGvZdfP58BUto1GFnRF3ztN",
  "key23": "361Uy589awkccc5xomEW7ac8kkQnhahM1DcYY3TSrQ7uhVWD4t1jKfFGAUYVmw96QtHA2WLgrP2AspiFkXK8RXW",
  "key24": "3ZvFZ4B3K8EyukyZM13aB2R6SAFgctXauiEvr1LGHu6nRPZpUPpnHpkhatVP3WbxhFerj1dxCeVnMDE7xe4u7d1V",
  "key25": "2Y4wrMExRtA7xUYHf2ZsTVDaHwoP5eLR6eUizJqr3Fj5ue1UoUvUaMaxxz68cR1Un1JPy9p7KSJ3ekSYPFzZHawr",
  "key26": "496McFFPMGYNC6nAcp7jHUE3WqhJVVgZHHguYUYKZnHeZJgZPYRBZG1M5Rn4Tuj1mvLSeqZ5vFKp2q6zA1pxTEvE",
  "key27": "5nnmcn1rmQcKFpJqsF6S9jpryZ95hoCm3iBM7PNST69wscRMtPsYJL8UY9qMxpDEdJPW5gvxmAmJ8T6d2PzBtuZ1",
  "key28": "Rz8tsrbErL5TmpB7CfBvMytvsJgN5vM5PbBgRBBqw2atUY4EDYPWTp4TMypEYMigCiKydqRLkoyhm6MesP7QPkX",
  "key29": "33yp136QStBHe9QFxYP41Bg7d7MzCU7bffU6cF8ZVevkETqniQ5e24YxNzUib7ujzqcHwN4DQNzvdPx6EHr4diic",
  "key30": "4uvgTyeDdgP2A3wRNdgBeuVjrgPdaMT9VZfdphcNm8H1kGYu4BUWXdc8ugUKtDPtweEGye8HHxoWhm2AAzbiBw3R",
  "key31": "3MU4CVtcusJAoeRqhdUecxnowrUuALZwvh5YtutbT7BKT1BkK9ZLGq8iQ9rZeGT5QZkpuVRuzjFcwb4nSDZAc1L7",
  "key32": "3kFKFZzsZ1TcG3EDPqJ45QNXCJKVANjcGoSbdbibiD1aPrqb8tmXt2xAyxWU2n6WZfpjkHZkVhRTzDTeyNMngoQr",
  "key33": "VdaU1Dm6Spiw3q3T2TRLTJofxJhwqGa18P2mJZAwpSYqM5YVb63Z3Pec9fX9d5D5Pa5heDn6aGAynVu2HzQLUbH",
  "key34": "xpwPwoZopH8Hjwh25buYerfzYv54FaTcvrh8LMDAmgjWtTvptnUUU2wvwLyRgTFSiH8D3qMj4z1t964Fe8tJbg8"
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
