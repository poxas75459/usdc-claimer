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
    "4jw5MkdpZx8zcTpcqnMrYncCaQ7M3ayGNUA2AZZF1d1UZt4c8gMqbLr4Xazx2eDwUPpzYRvCJJ1zpSrhVmjqirvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ho9KQM8CKwDwWk8Pi7PTmqoCWzagn4oX9dZMYxrxXnJfRu97TiM7CNRpKQgR6tzUjktHKfnEtoptCBxA7tWCm",
  "key1": "3Jzw2n8ubUEvyjuFJfduAmgUJyh4AKYoPKgfDJUufUzgWagMs8EKSDxMmP8nMZPHYjSNFBns39sBWsux5gZRN7J5",
  "key2": "zGZpipLxcvkjbprP93F2qA55RzodES3bS9ZiFmA3HrDVFokACcNspg78cuGiP7zR1pwAWTxxRf9FeFmWXiTsqR5",
  "key3": "o9GpcSGKmAapSyMioLT1K7NT36sfQmotVpMFchijR6hcT5v1LxNV13ZxKZ1TRVHhVdFDXd4uKUK1r7x6s2TqCW1",
  "key4": "3yv8dB9wTxwH9hMGfZwK8aB8oNCjRPNR2UGi6WoHfJAyPsqBffuiikrbkUg8ctVSjdsrj4F5MFwTDWJxN9Vcx2Kk",
  "key5": "4Fn8Sg28nm2U94tP2mQE741Zu7dDJoRvvchiYbhNXGShqYBfFzthVStAKLamKGaiD2pcPPznv5qtpdHoumaRR3P7",
  "key6": "5pBNk3QSBwTYCyj52DbYKrgQwxUmcATgDF92HRCQt5ndoXxJSjowX7dFqsPUrzfpzYHPdB3gXiGKchQ9G7dCV6hj",
  "key7": "2z8w3T1fWfqjjSgc81FPy5da2NYqbc1NtaHPD5d8UhEeUYVbLLqWznJPDMAPRaa3xuFqegCTRhdEnN4MtWrfwNon",
  "key8": "Z8DwE7esL8dLXBnTt1er34BYkZo414JddPdgRom6E1GuF5W1LYWqYxUkVLiohCjzDG8ucxp196HmwtTFRWvt39X",
  "key9": "5uuzous62tLHiY9LiznufwVieSnELAairtNE9hQ8oyMuujZiurm2aL17cPLRjTrUxWoo8ctZQRN64tF5i91WVoZT",
  "key10": "FRFEDbuo6SZKp1fUHo7iwKCDEL9ckeZgGNZJo8RwttJtXi2NdGD8WQhMMm1HNDELzHDyfzJJzXzqKDXPYGEwL7g",
  "key11": "4QcD52gG5tPVX6kKQvfhZbDthouWoXDAeUYsG9nrQjEjsgXkptURr3pEpYwqMJhnGWyF4xHmEHa9aAmbM8VZDfEw",
  "key12": "k9Ppn8RAd2SqAtE2pZX3L4yE7iwuzaHte1Vi9DjXVD2f8BkdoZJpJ48VnTAoLBAYo7WmRXydTGaqcTonBkh5Ubf",
  "key13": "63cc3JVEzYuMKK5jQ1PKeb3kVwuQRJn7Bxs1k6brfdaBou8keVFewfP8tQ7CBp1VDXrVPQYJNxyD98j8qaUPYrXZ",
  "key14": "394TGiFWRfgi5k24hGK8VmByWWmi1U17Ja27kyMzeJFhkcmjYpboqZcfsPFZQJbNMbD4egYhMtYaTRqCHUTDisfj",
  "key15": "43WCq5Q2FaAdWaTS2yHTVzACuF4D4TCqnAvCFRBWs4j4mbP9iCzGuDF7iHkEzsH1S4RDft7vkQDrDSR4kJjUXpkr",
  "key16": "baCDAS1Hw3MLjqhP2hgJr1DGUwoiv8JWFG3i3oXvmjdXLDqiKucK2NcH5XxgdxcsMJXaCQXThyerSuDuTWYhkiF",
  "key17": "WrnMQEkkkyYJq51swr3vcuYpvKcq8FcsWKYGskC6XRyfFEdVN8CsnxerEduiqmiR4Mn53B4BGzKc1UaCUHjyqB8",
  "key18": "4JSQx2zjGAKDFdY87Fkua3nTZN9ABYvNo5rsvmCuSTk7XtizriPnCpxHSD1ZsfrXLQQJMMTXMJ4t979KGnMfET6",
  "key19": "5VdgB85G1Z39554DGPcx7xBACfE18ZR5TYR7uWxKTyQqJBemmaKFpDt6p29TjHPosQg76K6t7XpfezXtHud2ETwH",
  "key20": "75bdFhLjC1nuBNigVW1Z1e97TNbGTkMKJFLsZVwyzb5JbW1CLEBmVctN4XYTSK287HbVV16EDMHUAuj1rzEVcc8",
  "key21": "3LHjWpfdVLj2EmHRXWW1iYHRShwxHSQAWpkHhCCkvxDyN4CYeoYdprPoNmusyAEE7N52SDMJhLbtbRzDyUVGHWQc",
  "key22": "xxedmTBEUB4dSHzeHsAcWg3T7NcSirE4wvFLUAAEJctgzSooLo5MTVcRQG81aWTnAkWd32Qzi5Gp4W3gsWE6r9Q",
  "key23": "3hH89uSPNpkCj4QpBbhmPjZN7fD9WxuWTHCYhuKTasE9wrn3nk2R3BJgZ8pVBd8jjxpZTYEVYecEhLfpnK7BwF5u",
  "key24": "54cKbfJfjj7i2W1GucQvvnpcnM8xeaEju4X7N1JzFYWFeYHxeP4si2u1m7GWDtDMMUmjoRjGBaFwCtHBh7TUAA71",
  "key25": "5tgeFP65GXwMzNAnanRTP1vH8z5cbjYHLd16sSxtWrrsupmJPvhPGvjnC7LFa39fsgU9uq1AGCVvzQZnf4aXxQaZ",
  "key26": "2Sw9egkzTKUtv6fFujAHnUMoAQs1FSsYfNUJ95Va6nfpkh39nNEqK9YGpeuMdjCcVCfJSGf5TwpfoRJ5CfwHjLL9",
  "key27": "3Kjx2S8Fhhm1paU7RCHuwsvArrYP7Jfseqgrwvm1p6oqCuuwBAB1yqaibaSrhDTMe7smEpTU7QfJQgtrgcLMvkVj",
  "key28": "5RUbZvDrK94qbKn9yFqe5rF1jjgcddkrZkSamCmjp5Jr6nfBMvophyKz5XVbhM95EDSLw2NB3CKtuoSZekaLp6Yz",
  "key29": "3oBK4pPaBiWxDfxAAxihaDFyT8APGTTv671sdfSM9tPG2dDMENksrwS5EsdWUvb4LTfDckVhG3LcwWBSCGFUYi5y",
  "key30": "6ifXADR2cxHe8cGEPFuvwy47CQWzULwCnf7oUESmoNJbMbNrPmA8M2S5X8he13MGDJRfXJbhfRLgZ7GpuZ15k4i",
  "key31": "5J4jCpd7o52N1XjgxEVdWqu1nZVofeE8J6CbDHeBN6N4PKVA46nE6DD95a3MNunFzAM6366hrEYcx8gFfjPpoZub",
  "key32": "2d5zm7KykaUr3FtJhBimyoqnbPUe5uYxv7EESN8LW4Jo1EWgrtFs762oNBtpvDP5fDUMsJshyfFpad7WsLo9G1fN",
  "key33": "dC6AoEjHVEwFVg6GdzX6xhKJEQhANS5kYStredr6yMhMFqLwJW11tr2EoGbBA6PwgkRfaTgg5tLPtKTAhLAkxRG",
  "key34": "622ux24YvJJDv5invYCArvXfDuDFPm8zcJLkheNxfHhaK1rM3hFK2Q4nfUvpHmUnxd7zjdZJQBoW2N8SirS38c6A",
  "key35": "2v4BQhWw1yAjpHEMDDrefLA6J7prk1UvmRYW3EUxwsg6aNqA8UyeEw2gkS1pWnx8fPuEBiehfZnA7r7bUnXDLYDH",
  "key36": "3SRYrS8WNPfttA7vGARxHFwgHsr5EtvxPoXvzjHZJETY2CYPzBCWukCj9jKbffX6y9T6Bg3nppJqxJiHqKYxVhFG",
  "key37": "44NjcFkA8CT7ARDknrZuxdcCoRuFyZmKzdSqoifXmCrM8Ya442ixsVKTVWotnMbB93e6cjf3Jphqr7ptggEVPZvi",
  "key38": "5Cpg1T1w84euyWxpQizBJQtfeJWD95hzP9ecEjmUNyCCvW4J4phSRh5zJ2nD1uppn2qchd6D2Dv71jN2JN9sj56P",
  "key39": "2ust4B9ARzX1QJ9cjvANRtHsRXLARtqVy9xDVF3c46Z41dqBmjq39tzcaWGkztMxFdENc3ZzRnfSdoU5tpaREmiP",
  "key40": "5D3gCdgYk3W2spWo3gc9zARffswKgufjEiP6wWwH2dFoKH4JaCjQvD39uNAU9i4WccGTtq7212QL7JSJr2mL5CgL",
  "key41": "23Bn1XNgmB5NxE6V7QJ7KZyVstqswNokqHsNq6XMKKgYpM8hLpgLPnMtJBoV672HphPLR1ZiJKf8ghDbaqUJkV8E",
  "key42": "31FfT5ccGyjftZU16EyjKLm2LgLzn4zabsNLoxUXUi59KWA9dRBwKmZ6LoSt1bX6Y5DsnZyVq6J4X7GdfKspu2h1",
  "key43": "4ucY6pL6GwXTA6K2RiwKAQ6wEgBGued5Vio7KuxzRZoQwGPHfBXCt289oo6cskQFAywivMwFT9zE9asKBPiTXDeU",
  "key44": "Qe576busc5DsptaQ5iT5rKg9rAbc3etbxrvJ5u7C5FPUfhBqyjuhvUTq8fjw3boaB5dGp6xYTUxcCZXjvVCfHg6",
  "key45": "2zoo5zdNGxVxyEo7wKgfMh6xiCXxg3mfo8qLZhokcb2CpuThsAdxHyV8ryBoVSoZSmdjsBtq9cdsYHUzgT7FTvNR",
  "key46": "mg8bL63jDPhtKxyHMDZ5MBwkaH9AFZLUZjSB9TTA3Kkhv7gyKEwQkvgjxJmJ9deH1BtyiS67Rk6gJnZsi3R9R92",
  "key47": "3vouXgrEn8NPukFWoNPC9sKZoEGV1TBwWVPZwa2yPVfNq5vDdw1KYSCo3ZeHV1uwkpX8uEstYMAQYASu4eSvizt6",
  "key48": "3xi9KMFrZP4ihCVyKXHD5iZepwAtfZwHy7SVENdeeq4N7VpnBoxQUoQJsttD2Bkqor7K5xsUGv98mdKpZV6dAMB8"
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
