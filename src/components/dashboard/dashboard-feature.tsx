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
    "2ryambnvjHffqjp3dxkxL92cEmzmvJNcjYBWpR1dGE7vM1LMnWksx7GqifPpdrE9GyF46Kkd3VttK6a4ahQ27bQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZpkwarTMuLmKqG4Pi8ZDvRgBXUhK7fmDy98bTaDLjk3F7NQ8po5hhHvSogetMQHdEUkfnUAzfeKtDW1yDHqaBgQ",
  "key1": "2DuQnHKpNGSKZJGNjGkz3NDWNP52FcLiv65sGtWmVSb95LJsCQvG7MQS9yDn4rj3od94bMdvsPC75DNb2cVvkMvc",
  "key2": "3mD4EjDp7wvNQPRB1Zqd1sTwpK2SNbQQyHv8qXix2P568YRGXtdQpKxbB6VJRhfwnDcEZ7p1KavTYvxawEoZzfPZ",
  "key3": "36R7vxa2DT3TpyG5Us6ytPnztoFaatiUMCfmYCqi1qxrBqSRuP6VNPDmdidVf9Wcqme87T4Z2xAwBNKeLo5tCQK7",
  "key4": "GCWriLq3hEwSfXYUHrYu7ZwMh6fiHRYxQnk6MQqeox81Z5pzLM4UBwB2VGDwyjfqvrphPQeRCwDt2cCQ9ixwaNi",
  "key5": "3B66cRyAEFpyP2icGQaNCx6i1uN3wsFxV61s175WC44rAS4UeC5Q535xDN2csJBKxAk5VwBzVzxfuysFnQrcA4ZT",
  "key6": "2iFv1Gyhhw7tpVBb7YJAGitaW14GHG574hwjKomuq9STapZ1xUyV4LQFytJzznLeiaqmK7q8CUXwuJNDcnr1eo8r",
  "key7": "5cxTcuEMonG2rMQQLDFY7fXX1B5qj5wxBFX7LwRaG96r2FUGK51jXRZUH4uNYmnjoyqi4tWBE8r5ZHXYxmQopnVh",
  "key8": "3FqTtQ9E5Ryepvxc6et4eTdtRKTVWUU2zLVUwbwRQPLAfrZnc6UWZsgLKoQoMGaVGME9yznZQ9fcTJaXLWf76mcf",
  "key9": "54T3Ssey1QMz9E5GehuBZegu1N5DXEzajbujcZwLJukuVaCvtSpSUtEaBNVyXbDPPtc2m64YF7PTeGLkPxrjTer8",
  "key10": "UCVtM14BSt5NGY7QzBKoE57ssV5Ng8tSuk5cB6Z8H6HUzmwqmQ5GALBhrSQpEroDa2nqbsdaBaSqJ7cT9EFxhFE",
  "key11": "3QiiXMcnuhM4mtmsGS6FAA1Z4KShp7rRocw4EMegyeAq767BkgEPGEM5gxtJtpFfhXLZp6cAgR4tEUCiWA5LTwWF",
  "key12": "4vaMxL5zchEEmFAV1LLA8udUzM5KxbxBnxzdSuTjpzemVtJ3VYQsEw8kqssrwj7GNmCfz35jawvfMPj1DcCvp6Ja",
  "key13": "MeNPeoeghpP2L4KoGWzCCcnBVow79ma4XeTziH6FJdts2DaX4L8f9yTpHvtRh8PFiRBYo3v3tma2eopgHi65nhv",
  "key14": "b2hu5KWZ3RvwAGPHJi6RaxkfKok6TuCcS3yosyHPbS4vtvGruT3FAzA3H6HyF7Mozfe2TFs181gTHkYS3xBTwEo",
  "key15": "5jJCRwsBF5CVP2yz7AemYirSnyFVRmuJpkwagKv17TEzyDe2jryTP8xe5wkeXMbxaBvWfGJTFB8YEemfouw3fWXG",
  "key16": "fM2HzKcyYxFxZxMp6rdSA4Ge3PBaofH7FWa1XxpBnTJMwz33g3mHqrBVs4rRFhWS4GpdBbSWTgyMDHTnLrhP328",
  "key17": "5Yz12DzcUNEMiLPQYXww41xSVnFta67TfEHjD833P431pWLYTUZ3EUPhtJD4rENMrgzzYrbKB865KHQbvKdDCaUL",
  "key18": "34nwKBxiuNCrcBXXfqxe3RwzfBs2tsTUheD2C18kingaeeCyqcwTjK94TMLrmC3RnKza3GiWJhm3hRbvqgo3gaj7",
  "key19": "4pifkxXT72wnkdK13VhXBbp2qd21PKq8v2Z8BtvUKvhGdyVRsZzxhxM1ZQxboWtUbDMVuW4RqZLygdKkk4jQAC4p",
  "key20": "uivs8wcCv6o9LL2Kc3dpMVtNjThv93z1wNf9uEYYwWSf3XGk3kkNMgyg8a4ooB92Su5hdhuxcKktismerQS2oGR",
  "key21": "5zuEwWHpaJdV676mScfNSUbYzupvyQH2J5LHBwNzDZcaN3A9y8rK6T7mCqHCusp5aQBHhgucKA2bJYZGDafHQLbR",
  "key22": "5VjMC6G2pjxEhRju2CZrrQVQc4tkna13CBGGA4WKKMMZHGHuT8psQbHgGEJRiUeZZg6D8CVmUPLJqRhq4N26Boc3",
  "key23": "5BxtGUM3bV9Xi5roKASJvbtaicFJ3sSbY6oVXPSzbPkdyhdoWQBDa2FcGJBqAxbUnVgvLEZ7MFRaKQjGSekaBQTq",
  "key24": "62mwZFH2AP8fgXKzbX6hSM4Um1yT1NDtBMUP4596KE9iTE87EEdsWkrB1uRt3jDwsi3LzF2FXySVdsojhH4mHdBF",
  "key25": "4PqCe9yJouDqyjcck3cZkdN6VjaAeHTrq3kWiGQ1QTzRuYSzzvoCtCXxkAB85LoY4LxTGSgxkzgHPfqKmNJE8PFv",
  "key26": "iiYrueCTSVV7n49S2M6WJB6zmGvK4BXuMR1NwPo5Xu1S7MZxFyRs1YLX4t8UtMqH3r75A3NLimwxKVRchk31nQr",
  "key27": "5z2TCBmZSP7spk2R5MZUBGfvM4VJifq4o8m7dHd32GMAzRRtkpMULPoAtNwUWeMDs4QSifZQvG3u3sDP41cTMXcY",
  "key28": "28GNuHywS1UN7So3d13ojEe62xHTaxJdKr3QgSK6jd2SK71pY2Lk7cLozd5hsebKtTLazF9kXtWzZPCuzxVMLYoU",
  "key29": "2zo1D8raWkGPkBH1c4VkU7r9evtxw7aomDFPwunip6qJBmxqG7u3hh5RxR19RNNukXrcQYX6BNrCPoEmjyjtDPa3",
  "key30": "4D774CTBkmXpcpU445DBtjFcb2EQGkeKKNtmdSjyULthxxkhCWwHVhd91fmwkXkbrQmAArsn5R92RE31oEebAiwY",
  "key31": "2vU7wNLL67kr3NZByjBdXaYThZjnxLkHqp8qTpKxVuAotmS8FFx4MLKhFj2CHSc8JK2Y46sVB6BLEEMYMkAS91iz",
  "key32": "5eEP9Z2k6tfuQVnNgw8FxpJkYdsZmrnC9i5ASLX5TUD9eD39nHGnBPqsyAN86pbvvBzN3cKRQUKTedPdZnCCsyai"
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
