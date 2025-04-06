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
    "2LXRsUKiJJ7KrwpvPjWLS99rop5F4m2837E8rixcnscFzjmTDMEfEKWKfmZZ9Z3KpXpYdbNJWHxvAawiZuoLqjxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46iXSVDVkamsB4zHRNtpWYq98ZNgxfvoxdAUP3jPVicF2rhCNN5UeZSvfpjjH4A2MDeJd1nQVNiRXTPhEuT1LVcC",
  "key1": "5TLrozoRAoRbkka4dvqXXUMZtyTN7BhcgppxCWLU6W4sf87dH95cdTpyc6EYArbYAH1tgnCRJFPXe6bH1P4XjeMV",
  "key2": "5vTVCwtic3f1u9j2WzXgPscKxzqZkPQp27WhdtiTJw6rLew9pXLtqF2dw6kbSSXcXyThBLaqDFRqratd6FtnbX98",
  "key3": "6MPvgspuhEqcyKeEroxMygvkkNTUyHECGJxJpbGML24Pb3ZoFpVgW3KVgBr17XtkKRn9TFMFQvCvNqZyBkYmzFr",
  "key4": "66SYzsCfHLi5P1DBzPqBrLZntmj9wMtRPgPoGFziugpv6SLVDAMHifCVhzLa9dsraUE6BiSUeDrT5DS4XGNoB2Xb",
  "key5": "z6CjvSxNutFFJeJSPtN85ePZ1JUmAa7ZmbhCp3epTMfaprPRvVYhkunwcye9KTjBwophkyBaN9yXGV3LaNugGdv",
  "key6": "28Z2scX8SWLaHgEVtkZyp9fz5Nf2fmn63xNXfVBceJA3faVmAShjqD15CqR2Ed7gF1eCbSqedZXK8dksJJ7vW8Mn",
  "key7": "3BARrNXxquBBMmNxbX5EKMZc54LtMkKfhMfUido6wVe4QhXrLzEVnEj5nimXPG13g9gguPHpUMMrFoSWkP2A7QPP",
  "key8": "4MkSFFEZt7DyK8eMKfjA3DphjytCHWjZ4NT3MkbLVGcjiCKbcpzMT4YfmfWtkSHVvo2rzJdSyjoHdEeb7H8ZFdMh",
  "key9": "4LvNKaqqnNCyTcGJdpKArMb8njv6Cs7vBoM7tQpg7QDj7ni5nTFJu5k8Hu9WAihs6MafT3Czr4TD1msDuj1CvpAe",
  "key10": "2WV8Ai8icWCmkMWRGVQZ1MSAPjHeggdCyeuKK2qDeJ3L3Z6Vdp7PbtfcTjxJNeaTkrgTdhEgphDJffhxmar6zPiP",
  "key11": "bEb5t9D2qJWwbwP1QTectspduKgaopBgNH3vVBs1YcKLmzykLv9TmqC4YDEt1cE59qW62tcDKgyAZQWJ5Kyx827",
  "key12": "5v7X7826We8eMHjq57xjufuFMuTk14JQRUkKdeSvLFvEfobdaFqTFr38yNcGadHJB8dwi2MutzeTCdgd3ofR1Zga",
  "key13": "5smu6JqAsj465mkL7kkoLMKskmfvgHAw9HSA3gTm6NaAAtppi1vqGq7hKvxFE8bshr3Czu2gjAhTQNYQfuUJRG2d",
  "key14": "2RChFRkeuLWSxjTiRpXJNEPp5AhqTK5ituGDRt4HeDxSNCQVsd55nfMy9YsMDakGVNTippH8q2SE2Y2uiN3Y2Kqn",
  "key15": "2tShXezjwaveMcYbYLsCJJXLPW47Mr4Pu6xisji9xwyeq9fo9EEjYWPv7cjvdfviWDEr6NVpKoqrA1TzeBTQzknA",
  "key16": "23N8KTz2HVSC8eTMZiES2TFRM64jMLL32xZsBUeRjYQSAL5cGXqKZ2XYBiYaVfAYF89EBnbn8mcc84aaeqcPw6jW",
  "key17": "j3Nx52pnTLQ18LWDSkvwR84qqMT5m2ivFiQ71Pj2MCuQNQeetviQUtpjjTr9kAbDwKxzzT5VtrWCLr6x2wKQ8uP",
  "key18": "WxCQP8ndXVLD551BsGioKQ4vpgxooJwmduMUDNRQHb57H7U9upPXqsjegubxs2eZrbah4gm4Bk64LNFn1AHe8t8",
  "key19": "3UMwwWAipTkUV9czZR9aurECbEy7LUgdhW2pT9jQ1mjio1BxRT42zbuST9TLjVu3ax2FERSRtt8cfqBLcWmQNsJE",
  "key20": "Srvg5wD2W7EBhiSPSVht8uGuFcF7hscwjXC4htqWWJT2PWxD7LBKYxw17SpEGeNDxYAC6Ue9wig3sfCAaUuDaze",
  "key21": "35oha8giW3V9BTXZhU7Qy8HRgFRPVkjuwMJdtNyVPEcmBQbbCC8eNgb2qT2eyidwnKXK9aqnr8amdFKzCH61SRWX",
  "key22": "2RwQpz9tsqZa8CJCnG3RfesYaBBEbQRjAJ2W9cD6xBosFi3J3YQFdsjiAn623Ace73FMmr5kNyvDEoc59bT31JxM",
  "key23": "34bCrGdpovnaEMxqPDRF6mXLsN3ywjayfpB5iuK9GovKVbjUFkibBcPUwA1NgFX4gyx9fo1ojAx4nYFM3YKvpcwX",
  "key24": "UMmyJnCFG8DkS2e1zM5MHNRK2a1EgeEj6JbCjk7iKZ812NhQ5XNyWN934rDjyt3faNdCEQY3tK6PL2TJWuZw3Ez",
  "key25": "HJr8zXANuTkf2bcMhZTAxZ2xa9TJuak2TEwaegs6XepStjMf6ag8WT4vJ53rvY4vS7oczFJDMYVoJpZtmnLBAWM",
  "key26": "3LdRv8otGFMWHG9zNHUr1TsS7tSAJRWgmPD8ov2vpSZEi3KVFYK2yQxkfZnBu1cR2eEYrYeCtxmRwV6RUz1ZmUzP",
  "key27": "53zqvyP4nXJUEv6Y7YWCsQqXQxtXsRTetUxGsigbyAPCn2btmzPiNzgiuEqkvpqBozUwQeuP8zeNKNz3NgPx2rpr",
  "key28": "4irxiPkWHJGspq4igVetGDSeSYd8UVfygYG6gdSMSUW17nKPfmf5Spgpr4WEiZsioek6eZvs9QTMZqquc1ZN3Vtc",
  "key29": "42gVaHgSDKCKQDbV4CTsdteo8gA36kVz3kyLCRkuZiF2kg9TStQCKqKmuLKAvR6AsXgNpaoJEpGbVSPL3T3f3ipe",
  "key30": "2bmNbAuezTCJRv5ZHrdwBzUSSL1cXaMv179Ta6yRpyHxZ37YHRBJVosYuuJYUwJfS4bQedzvNQzQvWQQR6yb55D8",
  "key31": "2snY4ay8gUY4DRdbNaCnBh1S4hodDBu2cUQpTF961bQitFPa6VtJUZPsMnCfJVNn9bj6HayNqrTwSWcJ7NCvus2v",
  "key32": "54MRN7drExGadHhVAZ1ECN6kDfjHzqYVjeg5yqMcTVRjTRzWYsoNWB6LxMt89W3e4zBU8K71xrrFnKyucCPVtDZM",
  "key33": "5mk79YeTTnbbY2pYggFK5voMkWFS6jTiQamo5BogFMzKxWdcGDmLQQp6VwjUj8kE4fPZ7eHowznra9N6XCjq6tYR",
  "key34": "3AAoSmKZmDTSsd4w8KA1Ure8uWuB2bA6yGfUcxf7oQPFsTdDdSoWK85eQ6gAbRepA7iDph1ArS4dmutHwK7yXtpX",
  "key35": "2222xyoR6eUibqwwJRau2cB4PzvWbyPWcYeGuMq8bUYDDEVWWfbeJSckuv6XEAU61A9D12yTgCt1Xoh5Hwgoqmx3"
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
