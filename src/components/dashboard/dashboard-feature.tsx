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
    "58U6fSRyJUudQzX3Lxw3tpCcAq3bWNbjNyMzPJVJpoFsBWVJ6hRQMMYZ7zRRg4q71ijxd7Mxnoinnad7UoCjvTSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRELtrDY2oXAoDdWPPWNEpvJw6Uxw1UmRdcwTbGESuUYKqhg9bfPfUg43VoPPLaqPsy74sDfXSbAhit6fDXK9Ry",
  "key1": "5gTDFwpAtK5KNnUPzFzK8aoi2r9w8wThPcPfDEZfKHRCFH1rC1LX7j2ck7qfthxABZP3dSuEbaXhRHfx21nKd73",
  "key2": "2Po7A5U6Ueopd8VYz12GF64Y3E78DaNpwUyxW1X4gqNqv9p2Fv9P6c7KFzGPntmrqHM2PSn2rMgsUEuow3uEwhAD",
  "key3": "412UtqUULnLNbtqpURHz5Cb51Kamxo1RcV2h6ShiQAncx4Zh3j3Jdo6rjHSo1SArTS8BnRxYwCASjfgP2SsDDxYi",
  "key4": "43mv7nR24PosY6Fpx9oVuC72SbMVUFsyFKcLskkUuhVboGvUgbAVriNR2euFU8HwYVMc2uqDDGWQ5hAU4VQzYEkG",
  "key5": "5XshVEQVYukXxiiA449ruoYco6s552qasWB3otD1upJ5yc1vKbWkbqp4SagtW14r8Qg9FaGPVyiamsRVYyBNVyoh",
  "key6": "3JKnVA3GwZ3GwuWkW6iYs7fBfkkeL65TXdCGfS3nwkpoMPiYfFJuGPMoV7RxoMqEipjXxXCV773mTvXkgV3CM3mP",
  "key7": "2Dd5vWNVccPMjudLVJqRL8S6SbsYwpR6xy865pk9ynkP3DYjc4ooUr5sQQ9o1GGUfefo63UFoq7BQXGVmkKvocag",
  "key8": "5VeEmFdmAbDryo82FCGmyuaWHCk8Tgk5Gg3hsBtd4XxwGv59T6DsHhoYyHeDerbjRQUawhJnKoHREvpUj7F55h6A",
  "key9": "5p4pEEFaT1kYDAZUzPyLTtoYnZWd6d1TBJxPVYccdaCkcpkfhBMbwxdns7w9GMQj3v6yBrijvyA1AcWZpNRFwEkv",
  "key10": "4CeWMpK2cMpMZhhDUNQTp6Qo27KaFYHNE12FipPtXgZQFJRqyAqtdVkjnq166nFbk1fguaTZrLdr4gjvUHqB4dyK",
  "key11": "53eX66V3af8nhmCQRwUgNggrLDT4efNQGz1oGhgxkpPxHAC7nnByK9v7H15qc2145UgSj3KYBi4sjxFVE4SMs9Ao",
  "key12": "EFk7i8Ew1JzQxjNBDyY5Wtmrxv8gAud54RQav7TyahiGru5pgbyqs8emj17DKsEC9Kia3YqSddK8BLyorgp742b",
  "key13": "iLejfAZqULgEBRacJXStDBNoFgACSFmwbJCmGhtUSAnkoqTR9smpL4D9pyJaaDkYmrRrYxyFsfvRARGifstG1je",
  "key14": "2VeWMYJmCQ4MLsQbTYeaAmmiEA3RSg3XvZBHvymZPbdYo7wDg3vGWa1abgS7U5EPHKxjivWaG4bZgLCM42kyov2h",
  "key15": "5t6LodPBnAAYut3dHW9Qw1QiA9uCV8Skk4opD9jKKcg9bNShsyxvawvS31XJNT2ScgVoRSh2R6WkddsSXUH8wTP1",
  "key16": "4eFFbncWjnK4ak4DibgVgkFyuE8pJDKyy2XYqoGF7LHXei9LYaDSSVAK9hpr9cSTt2BGYy17qfxojXtYjDrxkeyP",
  "key17": "556nHP23f5s7TvggxcJ5GzdvDAekW3gNNnQE8HF336PZrntt41bffmyPiJhjnRWv3YpMnUWffWS9afxaevs9ayGC",
  "key18": "2SXc1oiYvsRB8bf3QWovTR2e8RPcgrJnB1E8YAqBtR4t8A4JdyYQhrUkeFhP8BSy8dM8WTaTUvPBTJfEzj39i8AM",
  "key19": "QaK4yEAmxvCu6SV2jHrZDoCdLav1msVHVRB2jBaLVY8uo2EyEu4ZunuL48Bb7Z8ZbP8czpkFbyKmt1Q3cJEiAtw",
  "key20": "2KDeaLXmRxxVQYrrMGDCtYHhATFsVSyVBsB25K3VWndC7hM14qzucqPNQM8NbcHDXwKjGQ22xXBBeAjAQUsBcLLs",
  "key21": "2nbL5btUJmBiKaM2QYjYzvdzEzvEkHmX1opBojkNp5J5kJR91UB8LbBw9Ua6E5g8WnG8TAvu6gWXzE9b95f1s2pY",
  "key22": "NPwcZGvRNDXM67yqSs11CQpiw7KyqXxDwffecNp4EiDRPL7VmWMZpUjfNs23NYA9Yrpu7jocJrGf4VAWQ2THXdQ",
  "key23": "2R1eYV7FaUokz6NaFG8FU3dgD6n8epC4gQUzErcx5K91SjgccJnMTtKenZ1Gifv8dcW14f7GDNhwsnf315HESLbR",
  "key24": "2wW2C9MqmTmsNXkZbm9RQmBPQEnoohTYzan8EqopXkk9S77vow5y8i53esCkgdkfh7RWbP5UkDeMzc6aT1dHPXvb",
  "key25": "Xv8CCTged6gqdYyewHnKmerJfxkZqMXo96rMNdcJVwgRRWzbLHDLn4v4nUtivrmD3REYfHvNWUHwLjjmnCiTqSz",
  "key26": "4sGSPEQ2CR4qLEsTD6JAxamAjYyw6UgSQdxDa8Y7RB1sj2Lrd7aYbmNwigoVeEbGXEXiRJUwxtJtCvUnKy7mYkxa",
  "key27": "3cqLm4xdvmYKB3hXg4C2LJwhjRGNjypUhiih7PytQ3CvHwVN6QSeJyS1HJeoSH8wxP9XKD6tUNbr6hpH29sHNcKV",
  "key28": "exefsfLCSxHojmw8PSwK4aQZYhshTrGj6BZuoBrPxq42xvCMHT4exwjuEMSrjBuchSgWdMXtuHe2kT6kVu4L3vE",
  "key29": "YkybcHaiLm3tyA3zrxaJTwGtqnNwDuemG4EDJ3ZYoAPNuxUmTJWnF4xWwzGyP6fL4f9FBsk9L2ZtmtbWzMUqvDJ",
  "key30": "3RjBpv3aC58k83MnYqxf2qCqSUVK2eapYtGHhi13NDP2r57oSQHnCHqzXLeC3oqQXsfn3GPfzcArwRAegaNq7z52",
  "key31": "FAXR17uERMWZH4GBXup5qrTmw6UP67aa37niYSQV1KiFHck9wYNyofC3uFbeqvmgDVDmPqupWcWAz4gdMJmMNRu"
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
