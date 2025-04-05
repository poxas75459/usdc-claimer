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
    "PA2YJntM6yhtkkBNGmat7zEj9XG3qryPBwNMr7dy6A5rxPE8mezRnLg814fJxQqNrrKAuZ8qzvedVyyDSyc4KkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3j8jY1E2mgnd2pGiHBzX9rRMbfxoygakDgsohZY1pg9oobAS5VHxBkexr2tTz4DsnZmcDE7hncyYEqAjmRmaKj",
  "key1": "4cnxjGRnLKRF54mhFFZfuevPoh1iBBbGSKbXXSMUsBrcTVKaJM4uFM4zTHqc9P44edLGzZj7cvTFox7tKojaMJcc",
  "key2": "3CU7pwjy7tBkVTrgXNitY8g3n2n5BpNSr149QSYpJSET7JwfJVfu2FFeSxu5y6Gk3L7rgZVoyqNzmsoRGFJzwag",
  "key3": "3YuW6qAE3LRHHfgzF74aBJYoAKJXx73hhJNu8nQTzs6V7qwTaknKRNMAansvtBYbSeQ7e5sMSZJG4g9YYCck4xrz",
  "key4": "5NSfV8TdA5v6CWme327X8qEsxV5h3SJapYsX37AbrpFLfC8Lw2TqteXwPT1BFeNwZgKT9gmK2eVoasbzZF99t123",
  "key5": "nKv3GNDnUfDqoML1X72S3rtsu1kM5WfvuJu9Qph7KfdviwGsrdXR3viidEqsLMmvhta2WRParRaZyD2xPbxVSVb",
  "key6": "Dwtw86LUVEshUGwmncfU5gJoViC9k33eKDoRyoXVKYgx6WP7ssRW97xNRdLto6LV4vNByjPL1aw3DKm6xfTKrid",
  "key7": "24f6sgjrajjgkcvUCpD3ERnj1WMphGATrdujqyD8cCp2X6oWsffcRWyskfiKVX981uEs4fgtbSwfeHtUUmmJtxke",
  "key8": "3YR7Qmai4sQKekJjAFLuqfPRSfmaVfzgTMqhiJUPRmEaw1L4fLMmNr65viMRviwkzUz453XuEo6VLNCUiQ8ESVoT",
  "key9": "2aBxFkAqEresYh7ouCbiH5v2epXxxw3CaMaZWMZJMM3cEs6Lpb9XoZctL7bSNkSsog7DjKMP6fUsPkU1V74S1PET",
  "key10": "3WCyX9XYGHoB5JricowBJzuqZAvHBNrqNuQnbPbrM164AhjXE1yZ6M5EKNYhLdXmNnokTbimg217ngTMtVvnVxmi",
  "key11": "SdZw6evLmSrZjxF6PZG8qsu4Xio8nX5yRp3BYHjJy74CktmYgCznY97zu4e6knw6Bh42aPeMKF9QkcSeQNRGg4i",
  "key12": "3y9c9hpX9C14897PMVJYYvmuYgyFsvsYs7HgeMiagtReu3pkTXwJZXjtcaMtrxYjN6Lm9wRgcygTxYzPZVEG4d26",
  "key13": "29pQqeJj7Pp2596SZoJVgwNAA3xzetPPAnJxnSRHV3iUjcNsBt8rnEQZCZpfCjetShy6qwyrFBC158A3dVBWJNpZ",
  "key14": "5NqhmEJo9rMYygjALpxGXVk7uHXSw5PTd6QwTvHBhVv49tJoT5a131zgHq7iMxVjvg1y9yw87Rmg1uNP6goRRdnM",
  "key15": "5AweQVWHTHP3ZFzcNtXkMRNg5uRvYzaq6qGeVgbNm7Yi9fbN1CNTr2qt5LHT3kLw8J8KwboKuS3kDHWZ4k8cLbTd",
  "key16": "3a2Frb256YJ74z4Aq65inv96HpxrxrfcgZ64YfUVuz7nrAZNYj7UpnAtHB1qisWPR5jKY912LHQHBgLWk8wANoud",
  "key17": "4SzMKb4kJZUYE46wEL5CsfJmzvK6Po67NqZG5PoAFNARcDw4Cn59zKa1BZi1zZEFjBPASpFAJX6eRhbgocwTKHyS",
  "key18": "22x5a6ASVU6sUtcQWELc1zNxF7oKHQ6Z3HfBRDkZuiRjykHcEKa8TN32dfyt75Ey1DUiEgaoVmtYYnhCVfdDcjxq",
  "key19": "4ypHtb5G5U9qQiFEvR9GuPx5LiRU1vVtJZMrFE5a2hWtD5PXQXwzqWr5snRJT5x3P6EtgxR26vLMHRuivc8gLLiM",
  "key20": "2KUhtrXhFgN2CdpWG3wyrKf9ULCPwC6MEPewiy79wwD1daXQWEfyaB5CrRh6LsaaGeH3doWyZEFJC6t114MizBeJ",
  "key21": "4cUxvve2yVDjQEA86dkm7LbQdZhuZNUp3oz23ssmTBxFRb3uqPUTtXx6UMcoURvC2K7JgRYpEXE5RjKHJsBKqPCe",
  "key22": "xT8KYjJ7drvFdP5e6F48ERNEwydsK3V9wFTKY8kMihdV29Pe1znBSHNsFLcdSJfidGvXAqb8tAfV6o4H9oKrLPb",
  "key23": "3CjqLwqdbK1X9ipDW8N16rjwkfdvzAus8R1Ja6d6Mtfkx88ps6keq5ipvgcMK7EJBAbNGFcCSh1XqAEFM92CiXvZ",
  "key24": "4nM61FtLsc2Zx42LzYR9xoeBcQBuAtbcJm2YChmEA2TLsANDpjYYEUuBepJnENvMKe3FpKVZSirFJsNHysYz3JMD",
  "key25": "2UWYg6H7P8MoXbWfbGuPtQUNGdSkdZdbWx6MfbjT8JPegZQFADdHgpadfpLD9cvBybRmrKZ71uoPVctSuc6wYb5o",
  "key26": "4uY5xpNYwVuTr5usmh1orDsTJZZWc1wi4Mfon8UzycLUKQBuDpnj9sDPHYfWpCxf6KVuxbdZsAM7vZm7XAhmzR69",
  "key27": "59fYo7QFYJG6LkdJZd5kJzDNK4XadTtkbVKSDRirShvwsmQc5NPv5QymGEvX77B4tt9zqejVo7W522TVdGjGwRNe",
  "key28": "4VP81qj5KBUCq1Puan6Y6vS9zhN8toWChGtQ9kZaM4AfmukKq6Up9FiSC7ebgGdqvwceSXxq86juyEHNAirHYdwe",
  "key29": "2ZFbvDoBETjpADZ1RGtrPAsXTqfzPk1isYvSoLuWXbcHBri4vTrKpNYPmMq1aAkKCGyhfk32XYQf6A59dYZGrYSQ",
  "key30": "gcCH9Wf27sC5YyLeoaido5h9xbmX16K9vFUPAFiytHwuRa4ibnEp2BU5L5VBSGTzUS5nZaMpyhgppiHE9ioRRgA",
  "key31": "3AYJudYp64SiMzYyaD12T17RnSwcgDZpC48VUrunxPEb3aAZ4waFSazME1gX4ezMFFvxFgaKX1YgrWFNHudPA5Kw",
  "key32": "4kHTvZJwFrLPzcTG3DPyyzPF7BigSJY3xdVErEWUWXruY8jzJp1PNWcgpH9F3yWcDVFq3TgNT4PpUTH4D29abZ7F",
  "key33": "GofuQ7sBGChRHruWmzS7epPh7HMf45c4y95b9bkZgWXHgAPGwZCRp4SrqUrEPXqRQGn5fsybWSikkQ9AxzjLrus",
  "key34": "5RF8owijC36ma2Bvqirc8Z1GS7fxZgPPMoNsWHZ8kM6NNxCudDkgJXppdP8s4p63pUuLnaDS3Hmr4tgpCEqp8BvU",
  "key35": "RgQgcAy6YJJZV5knzeUQ1Bb369f2MHWSRcsdUpbbfFjUxyHxFsyRLvSBmT7FrCjwMvRwV5gVhaNDXUmT56mRUMg",
  "key36": "4BxUGpx8Kmqa4t4GqvDgFocCMyyNqLPwot7T3vjQ45gUSpNwpcvg5NPrxWu11XRXW5bwrp7h4ndiGE97Qakmec3D"
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
