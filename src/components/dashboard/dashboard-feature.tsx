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
    "555pteUJujGLtFJvo5qRiUQpHXA3t6VBXWrqhz6C6FxdQmriWQqDXhLBtZqTxVSf6BVAiXeBA2YKqt9rUXy9qYoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45RwzkhfrnUJdkJ87Nx3oQRNeUEPPwhjMKKGB5LK3kFJBc9kZ3ZTx8GLMp42BsZwLyBtwRF837BN68Zxf2imkYLY",
  "key1": "iUmjVw5y6YCuqgn8RKpagW7z8m1zoXnQEGtdGLoLsjvKTaKhcwbkXLRLEVF67a7ok6RTV3M8K69dtG9mwUNzVbj",
  "key2": "5Tg6FRCb6asQjp7tym3sFkWggFi8hk9LcAxMVyGYpd74UEScJ5FtEYUewTwiZx7Lrp2jTSC66h5TRPEThe9SqQjD",
  "key3": "23F9Xtdm4pQUSdPBVf4Wn81wTijKxfZaf1TfTxMxVH4fSgcC5JLGtqRtkdVV57THxjxdhcSRiXGH1BrRkfCeCNWF",
  "key4": "5dZcsC6Uj15ui5NADg6cdokP5SvZYTytw2wBFGGny9xrkCKe4RHnhBtYLHKVDpnx4bfchF3CNy9TPRbMQXXWgAH4",
  "key5": "2Wun5V4LXKBYea83aY8MwgXRXAYE5tAxcCA1y8HTB2WS8WeJmQhxPpjAAnvDY85wkU15PWbsqPGPLfi8AUX6CsJ7",
  "key6": "2Ut1YkQBm2VayV4N6xRrJZSmgGbF7fXuQxtLtca3XbabZPmbKdY981bFdX6bYsCmUeXYGigkeserCoDgdssqQp1a",
  "key7": "5Q6o5m63iUoBSu2XYt7E4UWAmMKRiiMySV2hhpgquqVtk3Q8TUrjuSrEM18RRwbtSaybJ91UHjF9JRkK6BWQxZ71",
  "key8": "3aUz9q8yBGpBkD6Y9dRZoRMWSJZjU1uUx5rRLTp8icnDyyeTSQzETvvnwNFLsN5TupeX5F2fieo8Dz9EpeCyfnzD",
  "key9": "3cUTvYEKN28rg9bFXX5gukG6WyuQoSRKTyZFy31zV2V4TWDWSaGWv593nxPr4JcWTHQszi2bi4udkjbEs2b8699j",
  "key10": "5qF5w4c8sCH5ExM92xDDfZ9Xy3TYaJSybasFSVi862dUp73gsZ38CM5WHdMwtGQKMDxidQ5SKmLzVCNiQFnU7q42",
  "key11": "rT7gvgmTaBNsm1UP6Z3hkfXgno2R4wDQh4MKaYZWynRBQAs57JjjkwUfF1ogK2hzAvUJoayDrVzEVrji95adthY",
  "key12": "2EcsgFW9qnDnZLXb4Xgpw7t6SmLL9C6D1nsu35n5zJU3Czfo9Q1JcrSfs1zBRRLMAShQ3Xd67AgvDMJXQgWEPZDk",
  "key13": "5QeypPAxTT4xXTvCpcKk56Vuje4DNhQUgXgPqqNG3YMix56ZCzEY4yaU2wijSPMtNijgbpKxk9gC9mnmLHvx1BJ",
  "key14": "5i25FXwSwLNznFcbwMgpdVxhNfgn6rSmkk2nshJpS47QTzXMkSvFEnV19BGpVngEkYB7R686fwsGZa1DV4X3zMdh",
  "key15": "5eSz9UMQfqUVj68SKMtCD18Yzkw8TmPZo6fqHkPJxCKxDszQrc3S453gYoGBHqLAwEQQubhQAhFviaoVJQVHnx48",
  "key16": "67Jh73G2iq4sGNwvPWVcMZgSY97YEwxfiAswZ8QKhh7Gn2XJsj4rdQCNCFJf8CTjciBoJH6hAVsbvBUeKC9FdE4S",
  "key17": "29d7rAepRLWPPTRpgo52NjvUUFgdFsaJtheGxnJ4aLg446TK4Kh9K9Uk6LLG8hSd4o9c8fAnyhbvucvQZ5Rbn1A3",
  "key18": "5UYzHQSjtpuvFxZyVDqqEN7WiCL67hVb1HqhcxEmrfPZXkCtYyfgAgyvKZbDJ6xsdEyzttR38heAN6XtWntLxL8x",
  "key19": "2Ps2ArX7fYfvuFr569Jfad8nn1mpWAZKyTTh5v6TPyf3g4Sd5sv1g8CxrxkotE3BPKSSuy9syb4ChrXh6pPRqkBt",
  "key20": "2Jrehxv5FQNyoAA2coznEufEjvGYtvWMPrDVMueobj1gRL5NxHEjpfEoCNsB4qrMVXd9qKShy9VKxDx34qph29HL",
  "key21": "29iuetaGVPPuZ4FC6aeSbPPW4vvUQwRf6b3335eGQjuMwUtxqYN88amVBxxGsAcWeBZWsZ4NVt3SCvtW7aMyxwBp",
  "key22": "2YfEh977ukTm4592mRbyGJ9dz9PtZXEyzgRZj496mirLvy5NPXrvRusMJafmfEs4yNmoCLQWP2aHRvF8GSc1XBqC",
  "key23": "5Ae6eErvNAH4JGivJiUi8Pf3taQGMNxCMCB879rVd3miE6Eb9ttYDX7YjnvW7ne7Jv7UvyucNjMiGHqZKu2PVZxP",
  "key24": "2xfz4JFfHryVCMDY3Y2rtduJscZjx5EVJd71zzCFMLkPE2S8NGrFsR55U23t8hiWuBdwksbPaLYfewrL7UHPsu1X",
  "key25": "2yY2PzxheMvKruy8PtHJSrru9N4hbY11zX1ULP4WCKYfqYrVcNJQajAx2aSXzSXCEu7WFRVRoqDotZ75WhcqiA1s",
  "key26": "2gxhQoq9gKH7RQo96L62F4xb4dMXoBk6MQ93Fw6Fr8LThn6SEG7r2ScqE9AAW26c8xZf26PHDCAzQD1MsMKMpFT3",
  "key27": "WhWjcmMZZ9XftNZh31uDuRjabgbnzopAUNR9p2ZL5X2jMgmrQuFk9hLLXCc7SntMGpsJQvakDb241DkT5wxnvFs",
  "key28": "4p8ANLCwknfdnNaQrbCjuq1uXjxv9XxLmwUupxC4Q9q9EehL3ofFjbkMvxJZWQGaSHRiaCRJayYqP336q6zzPjVp",
  "key29": "3xamA6jNFexx3ecxHP8LLNBBtyrFE5jg5JVLubwh7LXuqFoUjmuoYGKs9gDPWwTpnqV3Xy3nHciw4cAqHwQsCDUd",
  "key30": "5LzgDujNT8Xreuyy221Eczn2xrYzcDc2y6aj554V5yJhmRZBf6997aBXosJxWYnT6irMzUB7mj6QCnPj2n4RQbSs",
  "key31": "5DbSABwzdUxXTEQ1jtuGhhyhh9s5iZdrVx8wsAEyyMzmawCXa151zM7YK5jTUzwCvbeWuBkzpzjzMQzqVqbpenBS",
  "key32": "2csqDxR9S8CPQVEWENPioRKmY746dG9jXHetGnjaHMRMS2jnkRbSJRoSrULDJFyQftzYZaEwKEq7w4d9BguqGA6F",
  "key33": "2uLwYfAUoeiCCFuckWN8EQrKiknFDFkr7LXnsNrPWtqzpwq81ZZ8qTPMbpmx3NjHe7XpHCbZ9Gfnsz4X3AKNRUJH",
  "key34": "65eYoA4P2i2FvvUiu38cJU6CpP52BAxf1fMj5vFFuNEaJ3sNPy1JiX8oiisoxJCbzGSCzqxxkGDGAE7PDZPnK6h7",
  "key35": "5E8QdeQJZT4JrjRm7Lu28actMMbG6qvWThgSLCQx3x2yswpmhfdbRqRLszrpddzN5h4YGaxV6p7S91UYb2gvEZLS",
  "key36": "wFHhbUbsNetuapqW38YcXBsUMYJj8NXSK98GG2vkazMDHPcVCKMdJuCXXFaExK8aSgXfuKHZe9HkzMTPJW54xKs",
  "key37": "4e9fdxPJADhWad38uMSPbYUGjU5UKYf4GQZ1snoscCmQwBuFNgTquzqEJNGLrH9Vya6QVosv8Wqj3hNkpmazmAWC",
  "key38": "2DC9oZSTKE8eA2wCKFYCtXXvHuoUYMcLX2Avka1MU19bMKXYcBPskdSnF1dUqToVkR3UvgQmkwpoXDEHbAGAJtiP",
  "key39": "1177zc2cJySQzHtdWkNWDJhR9WrHAGFyScfRGGkE7k98BfZdGMA8xmdP7CYgWHmuQZwNfWXdu61jCvpJpoBiofi",
  "key40": "44HAQJaAqscoHqoVmKHCHQbvPgJRFp2PwA3ovXvdKnktKNEWsdWZVjR13m4Ci2nNwKpDdNL2sHHwAKpmyMx9Pmhn"
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
