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
    "5EUddmXGU7KjxtoRBYcvHpELAJEkTdfvSKYNGiUP2nrygGSobVcoC45wbcicpqQMmRXZe32uN6m6gUrCm1G1Bn4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JyXY2VGLRYd7pTdnUAHNu8neZNoKcbt6vEwynUemWHskJ1wLWk6hMf3gPUwCk2SKGJdXnRRamF1j1tFqWXek7Vc",
  "key1": "49nhP7bvhPUev2X8vqQaWhr5L83HtwY3cA8YcbPfpM2KX6DQg7oQjtUBVafKY1j2Uuumecf3LKBHEz726JuMhWEJ",
  "key2": "5JjTYfR1ZGAhEBwcXXTmXFDj9v4WdC5LAt3SgFPP9qahwqAaKe1VZNP9VfE4iNkArw9YLYdMStUA5vvQA2PNh4iv",
  "key3": "4u6KrPd86JEXyKFy1FJbMFx3mNgbKL31N6WkWHrmB9e6TKTMErpFNh544HF9RQjGrCRnm5uyJ79fpbwkHLmERzig",
  "key4": "5ChangVgecUaE3mPs4MKyRvgo1mriGHvauquMnUVstcCXwZom9N2wKsKT6UQK2H5NTviR8kHNoqd4ryeS9du6vba",
  "key5": "4KNKSk3JWvNE37hWMMAUzFpHh6posRkBJRoNMLcin7R4dsz8jwM7H7Az66nJouZ2RRMqkjWDPq376AAvEC2Nko9B",
  "key6": "5CkJ6C7duPMKegGP9tJ5diqoMgf2tetHNAH6E2KJYqTXc9fHSrnZyur9AiY2xKiCCvKayL66CtgVPfhjjaK4pt9t",
  "key7": "3MTHrDA1wxjPPzRkA2r4SpwPssAu71zbrmenHRG8mrtKTr9vZ8hg4QaVgiPv9C1wrStV7tCyyc63B9krd5eApbuC",
  "key8": "2j6yfgadpCjL3Rj8BgCfubZ2eRGGwQPqmRJdWZWmfja3RJTBehyf7YxLnPrX8qmpACgUWE2G3C93AjC5r8ndxTb6",
  "key9": "3sgwEhgk8od7QWVT6vsfWm1ihufrgmX6UpxoqRcuUHRHvGSjscTzutLZCEZfMoUBCnHBGjaPyPpwSjogvfe1AKwZ",
  "key10": "34o4119nzr2Yywjfs8zsTf1MVMaPWYojfU2BCbSjACKVvqfWHfmJnpQh77XqraWZXJYKrj7Gj9f2roXfEBbLXp8D",
  "key11": "32XbaGix8jm9DVXMiMQAkzh6MpkgET6vtXGsvc6FWrdFcCYJptmbCLMB5ykEdgEQzAziFyf8H4CVxE68GYkQvrpq",
  "key12": "4421uThYYAinJr2oiV6MPecbtTZrMScgfDb8BB1H9fZa4V3ZaAiGU2352BG55DeVMrDeHrMCe83mbhuJeccM52ji",
  "key13": "w4zFswgnQBsupYj2dpBHmK3KsTN8TstuWkVragQW9rFcr97MpKjQTiFGTKUnPhjRaoU9vLDBMAfGFpNuPAsfkv5",
  "key14": "PuD5Y5i4h8tZf4RRF4d1gfR2Dz6SC16vDdzWFS1fnZRokk53xpr6XpCmixXDgG7qtwzvHHo1sooEToLzR8TSMB1",
  "key15": "vcxtXYQQo4UWyLGyjmhQGNMGy4nQPwMYgF4fhdXoHT8W2nwm1ovCzVTorMMe2ofTecBWkJ2WdXXfZmghEreNfEN",
  "key16": "3DRkHfajCVcoSBFy94wW6B3LSiEc9Npx3hsSFSyymKUDmHFP6r21xWoqkYv4XJEwGdXXtoegHfvCFGXCViqDczW7",
  "key17": "4L58BqZwMLapCDCbdnswQgiczZ75EyWp8SXphT1gyZ1fU7stzcEcQ3psRyWGLHbwwcbuiweg7qjvmBr4HyymPiJD",
  "key18": "4yoorpHtgWPpdaMST4CiYFrjWPHxgcKbYpfm7Rv68ZnSssL2aUeVhHzih4eBpUDMW6fTYrPCjxur26yubm8n4kKF",
  "key19": "3t4i62XbXhV78ZbyUud4iiYZjP4tEfBPoZ2GvwVviymsNBihhFPsbzKejQhB3WwbnhPJKR4dv2qgyNRpfh3UXjzT",
  "key20": "kbAS5Rf5J4Zpi1czTRugDX129Sws1qCCZSmsQMPqoyCJdonNobgKDasyPm7Ff2EVtRHYHX8FPiikGo5JB67gHcs",
  "key21": "3Yrrf7c6kwmAo3PuoW42FkXJBwqPRPQEAvDn9d3C2AU42kz2m12MfFMe3KSQWebMP8ZA3ULC2n7xXPZqshsLaGTr",
  "key22": "3GJ7CYjFFm4g7h1XSrArsRgJ1nCvPzTTQxGDMwZt8ts34Gu9KyubeAeTzExVcabppeXsrfUrfnNGg1tTd1AFTPEK",
  "key23": "5SWnyDtJ1a2avQ7v81XYFeJPEdJQXwd2eE6VqRh6PSM9tyakAgZSv51fFUoioP2voBJhTeDBg5ptXLo3HTmpR8tD",
  "key24": "5pfZf6Lh4MWADnmG4Leqy9KHrmzhsA18U1PFZLAx4PtHnhcPdyAYcuPPczs5xzEbK7N97wfaeijnAssbSKc3MfEY",
  "key25": "4dzad61wmeeGQtpx86e7BXTxKauU9LzLf9cDdkuaHyna5UWhVKG8fqt9qeRqvdq4mv5igLnPnNuuPTzzUcat5ocA",
  "key26": "TbSNxJKgTmR3wkaArPBVjJakhZH8wWJokLqjAyarzSSL5oovHJLwgyMR99LVRQRbfBFwxMjz9yRNYVHKKC6H4k2",
  "key27": "jppSUfVCt1Y9nSXaeWWH2XZuGBr6X6NtQBvGSQrY55fYQ33MtWuyrw3oqhuwbJdUnJwsdHkuAkidMu6uJuFWZrs",
  "key28": "RkgYJGqfKyRtFPgxiRiz9K4f81DcADGqmt9hprAtnWgpmBwxu6LJTYE7ro5cbnLQdeusr1pWSnf6ff5Y44pMqvq",
  "key29": "3YYSKKQHcEVaYrqZuMsvEmAZGmfqLRwkXZhN6dh4jrHExpBrvVLPssu8s7KnuLX9PCRPZ4PD4VEBmtH19tQk6ce3",
  "key30": "5A8DgdSrSpGzypyPpCcDKto638vUBSNvBNcWjyX3cS6r4Hobbistpvzy9THtxFoCE3FjWsQ5cWZ5U7Gj586FQZap",
  "key31": "n3MPFDsw11yc7LTStpkPvsL4MXLgxj7wcPEp5zrTofpYFXKU3a7wcfECj5R9vsfRDkBfENBXsQFFc4NhoWJ71dF",
  "key32": "i9Qnk67Vb7q8p8jHVSHTxNPDbm3TVFJ5G4gjoYbZmxKWjHtDHoPY42cEn7m5qRqPuxxWzPMBdNsnwr7RCdMJEES",
  "key33": "2vN31jT4DMvQ2kTQKmKVV14U3bEsxovzbo45NbYv369SVw8LRpShGUpf3Kb9fZdNXcMTq9AUyx8fEh47mU2F6RQx",
  "key34": "jWZJJX4keoyPmUWtKASLS9dgtbQwJfZQwhDzAWo7nNY1pLa16UDeHT1K1N3oNLsJ1M3PiUeGzt8uBSY65Wc2c1d",
  "key35": "62TpCQgfuXduwbSnwo2yghcv2G59aSE8uYQxHCuTKLhyL5LqFQA5ACMFx6MqYb8hrCMGyJcGqPcdYcv8PDHzVhhi"
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
