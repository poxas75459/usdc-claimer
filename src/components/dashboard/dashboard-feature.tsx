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
    "38r6RxHQrQwsy8eVT9uEHkaBjVwPKqfVpaz3ZY6ADZXjNfWhBKX28Du4dSaFeAN2oMwBK3SpU8nGdiddLwpJbcfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvoL9H9PZPSWPWGxCE7tXtcXJkW4xHkBgL81Gz2rxyGAN591A9Yi1niquC1koKvYwxwFkXYG9vP9FyrXw2fCwph",
  "key1": "5ymTU8PU7Bm6PbCvHgyhBmD88n1tnq53oKWuzSiFWeJCC8keAzTQeHuEt7D4PPmxaskqdeNZwmVzCq9jPVmfTHwp",
  "key2": "3uKVXPWeYUpVcvdiazrRbwCEuZecYiw6oZLMP3bgKuhuP4hHg1TccPVKT3JLyrdSX5M7gJmNFJoW93s9dL3HvAQk",
  "key3": "2BPxVi6pA2XXvmGV7YU3i7pZ2kgssqFchqyhh9dfA1hRMerJqcm9JSmo414BXsYDKz7MEzdHpKPM6RmPgixsoepp",
  "key4": "2Yhtb2LJqhTTsBmbRo3s3tn7SbREoHGgXKwsDfwTBQoxfxed2SEMLQgESRqUDuBdoFrBjKHRVTNVqcGPuXeVgsXc",
  "key5": "2Kx1o7UaXzYF8bQJQ8AuFEyS2nGVkkgdnirkAh8487wp1fGpQYS12188bQDijkEui14eZonEZmCj7wdr11b5Tn6j",
  "key6": "2mys26GbduxQ6hiWuer5o28Zt97h5G1hBRYozsXUwEDenbSPDw3pTuB1gCkNqaLyfFkunPSWzH6ikevEaA1cFwcx",
  "key7": "5YvroYDFig4C8govp5UnD92v6TbkD5GiDs9K5PPL6rPa5tk6tqiKV3mAPFw6Bz9sCBwpZTNtEnCcM8B5sQf23xJb",
  "key8": "5NtuSMTmAfH6iBvwCzCN2ddymf3kKi67q4fyRU9WBfLCJbwem7gsaPjUA9Efvo38EfzKaJQ7GpwSFZAtXxYMKmFX",
  "key9": "2TYAuf9k7Uj6pSUaEmTU94nEK2Qpw3JAefC5qeF1tPP3SoNn1bEicZYdQiVoybx9j1gFSkAtDSTZMADGwkzvuXgx",
  "key10": "2Lbz1ydu566VG8UotmPzTFF25Uq3NPKKDSidKhhKzoop33iocb6JvATzEc4pYZJWrsWciUwMiWMnHtiPXSVcKghd",
  "key11": "4PeaUsGXruLKHBBgzAcTJG8iJP7hNkSk6uW4D1o32aBV8GJJtzCN97X8qenKWPrAq7uX3m5DBADdrQDmEUeLnTeb",
  "key12": "2fgebi8eYhMRhHC2ML89E7Giw8RnwVFMsmxxE5kRLvPRk2m8YfYZnpCgiAn1dfRADyiboWp1xRdrEbh6WD8undkK",
  "key13": "3KwoPufafKFqLWc31j9Yo8kqrgFB9hGa6zuRcgxSNEyDJntmRprQKhkS2mNiT57jF9q4iMwn5VPu78fST14oF1UQ",
  "key14": "53yi29LGHrjf9Pc6ZPWDJbDvhBadwt9zs433CUKXbxjiEPJEhreTZc1BgTpNFD5YrVHzjSLKPeydsmt1skhp5K84",
  "key15": "BWyQaJWoNcGDBrWYupMBie7D1dkjHNCc6CGbsFkZNyzbLwoaX1TJqhPWKyprqwdF6u2mrZyLMq9tQTs3RKcf81T",
  "key16": "QxDhSNzkRVLF814DtfMLu6sqABdn71Ecnanb1rz7eUjV7pH2r4ufCcpFoKguvijbHcgDttkuSY9dy4NuEheEJAt",
  "key17": "5ccku1Hc2KLwq2yEXZcBWQaWktAVHvVjL25KMrVjmMV8CbQSvHLBfcDLMZzeR5YySvQRmsGQXmvLmEwefiN1opJX",
  "key18": "3g2ZBKoj66jGmH7nr96gYurq5TZkC3cCtRVboiUsHQMEaRioq7yP3WQeYFT8Kn4F8vZZkG9aEPnsphtzzg635uUZ",
  "key19": "37AsJcdqgGBZf6xQha1RPsDfMPWKwg1vQZdm5DBdJUxnR2aENqxhQBPLt44RSPDo3K6HPcgAVBJhPuFFNbStnCPd",
  "key20": "5AH5XFj826TNT5wjwGsHSRdBaq15Lr7m2SYZE1AxHprGHSRKGHwuhWChigwwqYtL1mkfkYw69hVUW2ksrPfhgLEb",
  "key21": "5UfTzZokHPtG3Q5wGRRgU6LqfRB2rvXvw573gBddkmr6uhb676HYVXg14Z1yiGbi7Djr8zoyZSvqokX4Ro7SXgXR",
  "key22": "3yqRwMezD3YcsQnf9KkqwNwkBNJNdWUxzRu2fjQLXhs5Msucirrq5Vhgn5wasdD3qmFcQsvHEAn5xFcyD8knpAWg",
  "key23": "YK1FjXuUwmdA8W8TrbiV5nWvBUWdtK7ZPC8FannAWiQyVmhemX9aEV1e17pqvRHJptxSahy6KroRPyhFtM7e6br",
  "key24": "2FpNC6ih1R271x4cnXWXe2dACPmkQH4FwJitgz5rxbMoNemkAjeKPzgrWj2NvQST3TftCaMAHhjvXRxdNLCru4UL",
  "key25": "4bZafaBdCTw1vxvYTLDJMhq236tjFMDbEziWfU8g4wnLtcMxPbVEh8atej29BSLU7F2r1sEhA9mqMbdJUTF8KZ3r",
  "key26": "2qeGigFeotSCDmssX2q7yq4cnvfJ1bYG4WS8xjzVbvhJ2xBYZvstR6mi1aG7eFm6jT9LALNj7hB98Ms2WC6Kti6r",
  "key27": "4arwtscxPPULyWTZZcHEfr78iCHHRJTPvzbv54jf6B44g4Vg5YuEdFzw5qtngZDh7pGxgwNWhfRoB38aUD7o7srw",
  "key28": "2wCd8jdkEMf9WE4RgU7BTMo8JVkEU5ijohoVrYJZce54mSrGSJgjsJDtjHJpmbB3MnG2cCxfTQrGvD7mU91f2iwH",
  "key29": "2GwAV2oTojPXtQuqHXdfErSKYzE3Q8L2iqZ5vgxXRaZRDguQbsvJjaxSBADsXGUZojHwJnEn1eKRXv64CWYUmUpX",
  "key30": "3GLSq7RN5z9YP5rnRuDheZDF8gBrDfQeKfWnuvRioDHxSLA9YqkHZNZPyTX7Z4HQiKyvnViiEeBoG5mjQ1KYWoNL",
  "key31": "3xjggP93E71aaBy5Ukw9Amh5x4f99mLZEbhePSJ3ZJ7NFPFwKv1xBws9xcFc7MorgJcKkYz5USEMZJ2h1Mi2xu5Q",
  "key32": "3WhvLhZu4uuWrmiecz9sKYg9BSsXsHPr6Fj9zfYbVL71ZbKdYLzPfh66g8kWPTvavjPyZRwjpqy6jXhDoCG56XHd",
  "key33": "2gniDhXwswswtWK16LEpWFVNB7VwB38ex1wr3UexRyGtYMXchukzCfCdwV3hDbML6CySavzmVP4DGSeX8nvEsCrJ",
  "key34": "2EVGpFJtpQHLanwo6M1oYAuFStueEocFigRZLQq7MKfiyPo4EzddY7ktf4EvZaPVNWrrTr5TmgSokLnPgSm5BUAY",
  "key35": "2MNZjQvfK9K81YNTDbS8CMEejD9nMNgNPvHMQw7BtSi3qBFcSJmQEzBETdtW2Wfrpu5UsVugR79URsw7NHChBmUC",
  "key36": "4bg4DygEqqvxZmcYBzUBwD3BckBKdjEfB9m3EBY1BE353XCRK91LiSAExN2gXmdaBjBbvsMfAA8Re7LUL2t5mx7B",
  "key37": "2QVLmX5CNU4mVUwEif5yn8fxUb6Qx57xuBVRFXx6hqBJVFF6R5q6Jz2wkMwqGS2yGufLsAGgovSka1dBhKYNLC4v",
  "key38": "61uqCtqMnPxcCn5st4inp8M4ziVWv55ZPX7KQemshPLeeytVadWXu7rGLriBR71eCfTLmvPC1rQSj8QvmTb5neg8",
  "key39": "5jzefiosxQ6s9rGYmpsfjWLJXy9kz9TNjH895c8q4aigkqZc2KUXj37a74DD48dJUQmbWXUNYz3yUhLmeHjJWMfR"
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
