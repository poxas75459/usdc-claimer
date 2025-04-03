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
    "2mLNQ1piBFXTfgTy3W4toGXcmaC91Qi8pvxKpH3JW2n4c7aFQ6N8n6Dd3veCR5ykeuqrzHqiL9b6RkejGipGGccL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ioRS6MhxSm5UyqrFmK5W3LBD1WdxhuxtcXKGRrYRSiY4yzQYHt3hxsn4v77qyTDe8vMSeF4gL6CbjpnaiKC3wuu",
  "key1": "rBENZmGyJbF1PtHgpDAdHAxLuUXZ2WpCMCdNKfu17rehd36iqBGt648dbd5NqRujskqJTk9MiQdy9XhCqPASYN1",
  "key2": "ea798CUD4i6iJ3DX3JJXs4rXACbSM8oKcfwWsmLhUpXAx3LpobM7UJYms5Zpg89GaKXsQAQtur5Q2hWB4tLqnPa",
  "key3": "48qiEXckFyrR9LWfAzSNvk8rSPXZMpFXKcqg6UX6atCuPiLSr6376pcQZGkZZq6VhgVmwWqSj1wJH2xuGuppvYrA",
  "key4": "3PHLuQAth5ZKSjQACyA6N6tCoWH2cv4GixT4Zm2UMPRV1XX3soCEDQAyZ1cz3pkcPSrrR4bbb6x56F881WEbsy1v",
  "key5": "2AmkXMyYo7cLULPkM9GkgRcLyL13UH92JRcro2zafvbYuAuQwKaYKNUzQsvrvvxUPKrsu9gRb1quuV78U24GzNCX",
  "key6": "21A17EnPFFHz9P1n6dycrLn5x6sm62PkZS2B1T2gdWY44H8ngxHTuVrVcv7NqzUZuHHWs2dDNcQchc4BoLHVQVXu",
  "key7": "4MQFnDG79oHb5camokSRrtFGqoTB2EmbVJeu2feLG4iomgCxwnvPaQreiYtsxNt5oNyuMhMyrXsv1GkdDaLFxL9r",
  "key8": "4ddVpy7wPAZnvdj4mCREZ6oVLXYiANoSyKpt73h24CeHmDTsGA7UNqyXkVVGcEWAQZGBoYxbYedgpsGUcLdb223x",
  "key9": "4Rx8cx4FwQ41pZZUFNXJRYMCKH3UNf2GcJW4P34syyw5re2MCJSr76j7GnJegV6uVCEpDR18ewsqB4JgRGFLnUgv",
  "key10": "3RbaF15SiyHxF3ukKouYPXqwHtvDDbNzLaBTvT8ywdDbrfZUmgNxk5TDHT369da3LwmYxZeRrreDidEBVZ5N5i6x",
  "key11": "3dbkV29SVkE7hfE1pCruzjG7fqKipUHfiXwEK5WHKqiyNC7yGCmPHjhUEcWGeMfStSGtdGtT4sWK49dusP6cHUVu",
  "key12": "YDMbWQiAZ8dHQbve3nh6QDFJcUdHPfJY3dfCrPhnJU5KD2PYg8djanTgNqXvoDf7BZgjvcv6t8NGQ7NaCGuX1Xu",
  "key13": "36WekeoJYQrcsjnK7Rnh4nWgnrZSZQB13XLPXxaPNUzDx1iy3Kcu51Y26fgCyBin8gXBhJ23XAzoUfuoybMELvDC",
  "key14": "SQkaD6FRYvgDtK2vSEhn5H9UajwKBRiAasTSktXNF2KXcnrnXqd8XPEeoggUQPWSZFVjHakFZb3XbiuFVNd5SHK",
  "key15": "bHCbahAeg3ZoxRZaAJ9rmYzSFWFdrPLMfDWA7dyM6Sb5GNorLQmKh72HrDrJcSiy6VrxJbkjC4rKC2BREeWbPxu",
  "key16": "4tx5Ve6Q3sBvbg8aU4XAXiDAzVTFn5APFHBmTx8wMz7wwn3r7Mn14NN3xaijsnqqvK8B2exEt2x2QdnaUGuiggDt",
  "key17": "3xGBivZz2L23dxcL1RdckAqJwEnv3URW2Y5UcAkaoB9QSe3LoBPJ5WV9N5nADFuKosDjAEZzshPcetq45XuwtBVQ",
  "key18": "3Y8KCYTCuEXPQDPc6rHEajHQB6RELkiGfj2hKqjncf2ENrnUMUQwce1ut9Bezs2BbUm1VVNgLDZaRuH1yMaL7qcH",
  "key19": "bQqytxFzobdmmszuyfkBdnuihDSGp3HRstL4Q6LqdSUuYLNgnhcA1XtQMSy9fScyZEHB96rN8woDwuAGV11ZtFK",
  "key20": "4FSgsw4pZYiEUXBErR41od92HaErHsEJ7qwunuF9EiW8DUmqPxXpAncJLQMv4Ab8XiJCdqVnZtXAHuEKNPzvojgC",
  "key21": "32gbmLwbiGBSRJa4DnUePRQHs1azXCA7v9tk1iUuQ64CEfkmNww4seARV32FbRVPCLayw57XVKfruvGQe2DttRCq",
  "key22": "52WFafSjirzYfrkAFBzKrSJHqSHtsaYELcrYK5LzZDV1jfBGFCCahzMBvmMkekouNjzUpN6dSBL8aUChc6ZwptF5",
  "key23": "Zy6LTcGLwicRXf81NS1ycgW8ufVr9iwsHS5rSWTDEvSvG4ZGMSNjfKevPSyW92yEydGg4QHQ3QBYjscNCFWVyrG",
  "key24": "3gsy3bssRUQDxbkyUuozfM519YNhyyZsUHVfR74cuoCdEd5rVNMNMJo1EsN1p7J5c9zbFxBK4NhPxUcqYSgcoxiR",
  "key25": "45QHvDGJidHoTS5nLEsXjdJY5w937rno4BvaJ8E8pwEx4wK4jJTaSxHcPQXQ9d2zCxynmE9Hbp4bC7569tsRhYdH",
  "key26": "2KYmEkiYy6urPqBd3dj5Cy9DaqyFT2PQtX6C4TGRCJKWCR1xehd95YGLYwxwZrHCWxkQbhkPyVX52sP2HPvrfh8d",
  "key27": "jif4oUSV5KKHD1aHSzKPdTFfGuTBKqxMbpxyzjZesm3Sne7JCpYc6GxvSkE24tS3e9gV1ayw6ve8QjQ3DwgD8MU",
  "key28": "4fkfFp1hjvDtjXbyvWDje2t5gR13E2XBaHPUmyoHYb1dCT9UsJ8pNEVJd7i5ZsnaYDvitu8QEYWzwh8bfFqdSZf4",
  "key29": "57xHfknmBrCp5F9K3u2sGLY5pkjAGoPDnGuvcug62pozeHnHhxWRQWhfoduFbbQK5mUB74ggN2zgDqktzxXVc1PM",
  "key30": "2NkcF8F315vSMZHYCPx7pQoPErbxD55yiBJGY2m7JUrqUDUT67kFqum1V5nRb4hrEaJ2XFH7DMqtVW5ubgK33MT5",
  "key31": "2xSptqAyDP1pawb8pzLmcUcFDsRLYCCZ24LoiWr1LkixiYwEL9rVjnMbm4cynoTvwsiVETR4yPkmeE6TK2YakDjz",
  "key32": "2UvuYVRRVMFwK7TeFUrHgFdhx4ciETbUBTj9KUdrDCxNJmrbpwhEA1ysL8mZtupKueyzYsjNct96UvKwu96Yk1xH",
  "key33": "5k5hvwBnXH4cAcJuwAwNtrrVy4VSWiUDX4KkbMchVZdDKTzEXF9ZeryDTPyhCemLBJsvLHzqsTWrDeFhXJrvqg9p",
  "key34": "54Vw2Kh5ygtEnjyL8q4Bo4XrCC2PQJu7GZJcSfdVFVRQZch1Fm93g6EwE8HsWgJG7hKrr8BJ2yVxMT5qj8Gvat7a",
  "key35": "5av62BBoG64jpfwdMGxwSsKKnW8QXrHcyc338cyTcx5U2SPKZGwXNATRwrDSRktpM4W7sUfZdyZVXv8wVCouRhny",
  "key36": "47sKmun63Ma1govtjR6gQuaYm8xZLs83DiYTp1A5ngoNN8Sxtd88TeyjdVZCa6zsR3EsH2whfjFABwBcQWDm9i2w",
  "key37": "N3SkkkQfccCwHhL95rpUK8XzqkBfrCNZhbimudYiLjtheRaPADzhnHVMuXXconQvJCMDroLcHGdnRx2dok1e22j",
  "key38": "4Ex8GMyb58iYNHnZtqqHpwuTYBsAZyY9tU9mUPEyNoQ4Qk7xEVCiUiTZTXoMPSPE2csk9ht6JCtX6hQWZTouXFiC",
  "key39": "2iPQ9Gron4CDZMS6tL2kL2sSDMJQxSkXrDwPNFCKQeKoFqHitBg79P5qnfv4WPMRAzNURNTrpb41hYHf2rvvoW5i",
  "key40": "3KjhDB378Yj9YHUfWCASjipHnogvRzHRgKaA3fYZdtjMVRMzNVNQaL3JRqrVgayPoWmpmS5mQ3vh92fuUWnhbSh9",
  "key41": "2c2EJoKgaKvGeP4p4q7tjR7joRH5jpirwRCrsaHQLJrUJbMdURswoirYG85ebFvX7NKEHWGJuR4otUMv9uRm4A6S",
  "key42": "3FWfptjNZ9d9NEEL42hjwMhgmFagM5UJH9YnascBXXWySrLmwJXnivokdBvupjyW5fDBSnP5VDu6mRAsYdPnBkCQ",
  "key43": "3zm24qX3Rpo38bnUhGKgc6UFkhb6dYRC5HRa3CTX3v6jEBdR4qWhcBmZtzLVXSr9LHfFSpBY5sX4Pp3nL3tn6NuC"
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
