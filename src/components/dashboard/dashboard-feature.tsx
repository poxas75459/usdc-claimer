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
    "4wX3GGVuuyKF8J2Gbs9oALnhQKh342T81mUNSkR1528FXKwzqRjoqFFBREwSKMtSgBDd8fXkugea8zzr8uVTcWZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T1fcKGA4vw9Raw4ss45Laa1Znj4BmiWNPKWfL34Ed4shvdQyzhzWvc1QMg71bgQToqqhHrjwv348vjLVxeqies7",
  "key1": "zvXXHVm5xPzWgesQ2bFUtzeY2Pavg3CRZRhpgx53A8BGryccwB72i74n1oUXbf54jX2DtutT7DTkiVrZLsLzAbA",
  "key2": "V3UDrEACZmMjPRfhocPL9CAZ15mKLWt5FVm3VbQbzvzBpNF3MPtaJPKUekkdkvb4SuBX53tKHuei7iVXCzErXpP",
  "key3": "5HtiQFNhqK2tkoopuyA8VH9gMa5QV69axYgXKZHpTKp4eMKXxhhtZEgihaqUNfDNYoCF4PVpwfmE5p7jfFLW1UAY",
  "key4": "3A3JeF4zrGcWjh17u73bs7PwBQeFtTHCv235ZEtjycep5S9pvwWTLRoPwzxhW52EJx35iXMJL6zXBgW6Vb3jQJEZ",
  "key5": "4b742uYPTpoeziB9GMHbuzAGJ5L6eQND8rD2qLTnfRFUYMk9reXVUoL5SZLZY7PWPigjKBseVnjomTftYBxYNqdn",
  "key6": "DX69Nv17zJDtcm2GAMV11BazRWJN5aWViYPWZCtaaJqFh1qGVrABSqFhPqBREuEKXVSQHh3w8FEgWS78U9DKTQm",
  "key7": "2W6o6BddJws7m4egBFfnVztr1xyAmx8fTw18hFFgdaHCanzE7ojJHwp2Mw7ZQZqbeYdin8rrcanoMMZxbsbd4j3w",
  "key8": "5yu2Z6HaojK6m5F5NdEcscTETv3UeRZtDZeVdr4UtcySb49yegs9gNx2E9V6JPHk6dJxvBjqNc7yXSsXRWuwQMVy",
  "key9": "U6qWTde7aFneV5HPZqZCZpUcXrUcWfMvx6TyXDofpCNq6YmTQRd4VRgzU6U6z8M17rSB6eEGG2jvNmN68FwybWX",
  "key10": "4ptaEZeYqTKCM2Lmaz8GxAZPaDko3q8SdWpPjw4y5d32sbfQ12hcNmrXUiNX8TGk1QrdMetTS9SJ16DdD1u1aWLt",
  "key11": "3bDsAPkqioRBG1v6eqdsqxZyV8JpXWK7NgDePgzfHRbCfx2JacGBzRMWZfQpGniyP7d1toQF8mbtu7GbuJqNkoFo",
  "key12": "2ERqkgTHfUvfU6774n4PBNtConTHjDc1G9ekJ3YntaXcLkeS7r6kvXaZ43gyTBwNEvn5mCf898Lx3MJVTLzftgM9",
  "key13": "4392pM6fr3zL5o8XtRi4s8hVHmeBqE559MJvJqoEFLF9bryUYqctmhTU1VFLAmLh3MMHUwjUr8hTKk2G7fjaKaWG",
  "key14": "WnF5XmLMepQwipZwJn3jbrP889z6LuvmiMd1VG65J9i3fiDsuVSj1N6x6bM3dVryZtAoRsjHGt4YVpbk1ReVR1n",
  "key15": "B2YxjM1NtPRDBPUSB9SZXcCpTKbseUcCzKuPPcwnStJ954epjwhFwfBD3kWWDLYdFHLDqw437gd33zaFLJK79gk",
  "key16": "64LQ3odcmwqZPayt1Jignd8YZgnMx2QRUrDVoJWNgvcfnRbsGWv9x6FxcitgVHphr5USKJu5nzWdc1ewfTM8uVc1",
  "key17": "57bkWwH5oYmYtqxLhr5ta7uuRvJ5yMJZSE6ZPwPknWAoPfFz7ABp3g7CSgUjXWPb1AnFyEnFESrEHtd3bxxXL5ur",
  "key18": "31dbwJdyijNeNx4mcxD8poC3WS7NUzLsxppjsdkPcaMEysdENQ6ttBR69L1LZPGJB4pXeygHNHqvkocv6xPD4oAe",
  "key19": "4cuiePpXeS9RLeyMvfqCPMX7T7qVbJZefzKPogYbo7CH7LVYq3xkxVSPg7gDbmqZ46p32mF9HDWgrdJc6DPGLrZE",
  "key20": "4zT2hhRARCRoZw5MXUkYB7CQgsH4dE8EZ7CQrjiYuLkPvvUXNj7U6RferzsWrc8tgXLJxgJwi2TMghbnfgPNe5AY",
  "key21": "647eFCVbnXuh7QTMETn9v31EkwnN4pYMRSMtnGa6ukd3zpRFpBVJpzKBffDbfskDwNMqfiKTsVhvANm2oJ3TBrAQ",
  "key22": "32QCtf6cXwCeiXgFxNgWMaD1dg2Ym7PDbrVxhUsexsDQiGZRi5EKz81bbRknMCFdu44fpLTVrmGpTays4euKUgNM",
  "key23": "3vfwQTDxmmYqxr4WgQnUyhu9EDahpkFe2wsGvn8CYZA1SH8dTzBkPDSD2Gb5GzvZA5yZHtTAu55Rsghk31hQHjAU",
  "key24": "5yK9Hdc9KViRvAD3ozkpwnvDRuGuWHdbeXvvpo2tYEouervt9Ti3yfZW7kPdLVfUAyKLUfbWR9YeMaNo3DxMUEQB",
  "key25": "5gAyVRo9sTcL3J5eDsKQ1Qhf8cgn1BTnHvJsSuAkCpim4naA8DDCh9fr5L7iv79bq8TKjB5rhaAseUDsqZGYHb9e",
  "key26": "Aj5khJYJNEgH7qZbem5assx4WYzyAGsUWBt2kZcCi8Nm7cg2b82kxCgssQHHNJxYkeQ6toRLeuSfqCkcCPbmTJb"
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
