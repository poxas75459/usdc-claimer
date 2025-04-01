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
    "4GBn9XSQFMTh9FXtPYB6p2nv8RhbcJSAKE9BHVHwi7AgKTmEXCRGkXqtGMWaYR1cU6d7WFofnBpevPAhVnJj2Z8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rv2sGP9V6e14UivKxSH2JyojXihGcwxnZi8bwespdFgGSNcAZHsYHxrSHJXJSRMpe6aDH8qhZBowPECTYhF7vAg",
  "key1": "3a5UADthmDhwSBGTC9QTg8yn9oj69kaE8gRNVAWsVdcfP1RFCHqRp3x3MhRSoFRew7TFVaCUK7wVPHbnuWwQk2UN",
  "key2": "28kZWGf2e1bkt32T67EURaR9yJM6cqYEptR9PUJnf3LeyixgGE4x4vipj6oecZ5vr8NtNnuZtRTGHX2nQYkR48ZZ",
  "key3": "5EH7UfoHfCFmCcN3w5UXCMpwGrXvC8xCHfUpFoWNCcXKj21aWfFhVkuGaYehWazGZisGyKh1YzJyVMyHK21kzRd6",
  "key4": "5wsHJTYqyvn8Un6QJR1cwxyueqxsW9CJsXYmDisbC8aoy8mcMQJtgjfX2reeS7Visvi2AzHAMWEcjJ5WNhrnwoVU",
  "key5": "5SfjxonJ85qDbtPGJcFq87ncmWtzmZJAdo5v8zzEXNTQEMaUjv8J9xDP2tXewo3aV1HrBrxznf3gt4VKeJhNTPGV",
  "key6": "3Lnc34qsW3PUcsyFfttBYysczTCWAaZLGt45ASvxLF2WxTsCHMCxkb65UAdw8rQkyM5CP4YyfDZ51fV5gNevtQ6D",
  "key7": "3kDBc72dBaSd58g9quHF4C4D4uftg54aA6Tb62kcmYYLvDGv2PTauQfnZKGtLfMcJTXJET2WsXoX2jo8TN1auK5J",
  "key8": "3M3a1vD2dueL8S1xu2yRfvpcjBZ6KFvGeiuGAaUWKpNMeEeWUxYbkYrTX5GnweW25mk8dXHtfG3BhjX2VtL9BQHL",
  "key9": "biJdsQaXRgCJB9a9mKYCv1jkBxoANnfC3xm9dgzUxgW3vsH7Kn7ZJRYZHqtB6M1rVfrimaFkFRDJfrEAsT17qwz",
  "key10": "6S55r6kivyrctJQypbBKTvfqTZqrRSo97BCPxeyNPio8x4YJrqrh49KtNFAWXYZUzokQ2sHSE6ER5CeJVeimS6Y",
  "key11": "TPXhHrfQKFxWo5Xi5aSA3hiUxUXc667nerhRkJTSwMYMapRugRkVjxLcJYBKMqzM6UFUCg8b9ewhNGSVyjJYA21",
  "key12": "2RVM9JAc11A1fYnXYFYDUTaitSD9EpqR3GBjH5Td2ZiPpsVZvWso6F7rZXhogYDsnitdqX3cWYAZESA5zDus2YAQ",
  "key13": "52fWhgo2DcqBCAAT37HVbtTXARGY6qPW8XucwwEEFtb3nzG5oKPvXeykDgSHBfpEtDh3a4EG7GHjMvdwyD5LFwCT",
  "key14": "t38LFzrhzFm3QevLA1GsK9u9ugjSFmSxQrzw3PekKdZ7boHbAGAVDKPBEKaP6ntrt4VGYdFDrUzwJTSxmLPdarr",
  "key15": "5GtCVGvXRUurydfsmBPwmAv3QCNPGKYqZE1qpxXgGdTGErkgbrdxKikAqyn9GDzS1aFWtgLYkUP2zjiEYyTcpU2U",
  "key16": "4P6r3ntUaDYUEaFTBxYoRsJ9zJVfEu3YEMRJEsRokwyNcGx9nVjpHdWfrTpQriFQNEMnwEAzbq1XrZJrp3zrQvUe",
  "key17": "5V7WdhaKDKLyDSWk4uUUFwrv84c6zwwW3j31VZKs8rtmXk28QsMMaw4EZCohYfjKqffQCMLC7xKfPADxqee8Hihy",
  "key18": "52tw2UbCKVZBpwLHbpTKjTVcAHUXSvU7Yd4qFTW1wxsAMmNFJd7Uxn23ft2e1c8PTJohbgg31d9svt6WALPDGjHr",
  "key19": "2pSuZnUx5rpeygaKANb32QXvpQ8J57CTETsFwkMRHBo8yYkpz28QupYqUPeKGSSKiSvMkmy6oRGEuFAVpiRGL3m3",
  "key20": "5r3UZwB2Tz1k13kMFN9ZPSA31jw14eMU44XPhmgEJtdaFMcNovtthrD7tkV5xHKszRy9PnooMxZRaYaJDdmkWoQ6",
  "key21": "4iha9d9hnTpLDo8mxUBPNjWyVTsvdbiqb7FbWkkRyh8EEnBgxEp6yx9FgdJuQqmqhgtiD2k9EeMUXvxnACuSAAbA",
  "key22": "uyyvGrNkJeUU9EYjZozQt1XmpPKZkovsznvSZ1yyoSA2VTzDcr2igboJcWrDKBwHTZXcd2ocZPm4AVZXRDfdRUW",
  "key23": "3SpUrrZiZg7JSrEDJbZ4XPNTShpJJYRxA41XyDJYcPAatsmcfvKgNoPZWfoibCUSZDiq7ZWpkPdeGrfS6TweYehK",
  "key24": "KZqBGSfrsLjm35ZzcehKjAr5V8mbBGkBTJPooNNgGeoLMXJUC68AyJN73sJyv2j33GEsL2rFgxeLRWbykJJLBit",
  "key25": "WXkFz6iwavtq8DMJCDjyeSP9pbdMKB3SmUiBojmyENMCpS54qu5ZXSbgUaPSLFLc9eUAdEAQ5AghsqiqxoXJ7qj",
  "key26": "VojTKd3vJRUkXoCUx3uRwC7BosWfsQsMF4wFzxMUGrMkPKBtcii7S5wUTCVQddrjyhjQ317r47ZgnXPPGrkqvvq",
  "key27": "5BR1oRG1evhHf8uzzmKTKimUNaU5WH7xzP5NSaW26gAkoibzChFRkEc2gGaBNyQ55FcKjqtj1vvfiqNPFcycJhdc",
  "key28": "3DVpXWB5LMmawhuJSx9rz32HwzXvCP5CvjGx8JE6qk2dEmLrBcuSVyrRotk7XkyBsB8jsbiT2VMsRdWRxcZMCEx",
  "key29": "4kZcmPuKd9UX2oHKbrZ4AeET6AbVUj7hp5nytDNVmvhcZnaTdo4qwVRrCkmcTrr7GFSPbzP1keG6vCqTyHZ8oLrX",
  "key30": "5fELfsCVRTrwhhS5oD8SRr4HSJhTnGYpwBSyGruRTyPTnuai2FczBJ4kNZwYEKXA7pVCKKbykGCQMLFhWFmB1TZc"
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
