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
    "575QYDhHReKDRx6egjBC7NneQabXLbTnobNTAzD3kEvfJ5zz5vtTd48VLvEW32E4kVaZXvVsUtZeKBwhKSgrruTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5px81mBRagkGWXZitjBXgsEWGQ4cUQhChN7PDZjZsy2bFVLHPQaHY1GDfx1Je3uXufX1NKxVodgGvURZQLot79i3",
  "key1": "4C8y4TmKuAmoGvhK9WPvhv1N247dGQvpxMkQeJ8wFSRevfUZXMYyygKqwxrpRkRTD2T3g6m5379433G8eo8Aq1K3",
  "key2": "3F2PTNMstf5YGWSWG8v2o1iSWnA69FfUytqstn7MrpDdexZkT4yN7ivJhDLCRiPtAc3aW3Z4j73F4w4tATJhJQ6k",
  "key3": "673nq5ibpgCVbXX1ccPWGZkpu1QwvLsdho4wAbp3Hdb9XDUR7vB8ZRgLPt4vKwdMjvumNFrLf2XWmxmaAz9W7iUN",
  "key4": "28mkiNwhdcZ47AXDmX1Z6SuRmAp2qi5hJYdbMRSYb2ZNMEFgPY7w2ChFsCUaokTxBVPb8MGjU6hybwFtrBnp2NUT",
  "key5": "2UbU8uXZADwruFjMiW4nrkHnnJA2CgUsPD3mMhBBAKEkcvfvuTKQ3LVPzUjbD1pUrh7SEeeVFKSE8U2XWYuZsdbD",
  "key6": "4nYAnrFfV56cAdcvy5i8ZGpVfUsCJEuyaFVUF5vygQBH21QzkA1jy17vmKkxSvyZS2xz2RaY9WySMg6UKEkwLYQV",
  "key7": "2Kg7n3nfLkjBStQ3eECqrWmpepqpC6AkL9qyteec1Dbp64ovwBjjeaxahiip2d2V4XHZ4SqyJcSaniNtueBf9mnY",
  "key8": "3SzKcv1qKLgj7Ahet9MgWEpx8ZpsheZznkkom1an65mC33kK5RMiJ8DMiYJGZgQUzMfQuHUY1ySZpYj7kG1BB7Hk",
  "key9": "5Nerk8UK4eiVknkZBUfqoyiWqvtR6huYe5bngaB8t4zUJRyGwUkfJfapxFeRZYzRBxUaJWJiey7owFsSyYoPkCKz",
  "key10": "4AFes5W1agbt5CxfDwAY21ciEKnFHSQm1zp7t5jzrPqn4uauYyBYCmmCnCW5ZFFD5B1CKJAkKykGG3ghdGLC19xu",
  "key11": "64ywWjesTjZrV9NoXCMuzFY6vdZa52ykyy9RC7aMKPeEtgciUtQCFxg4pBwsRAeyUfJ2LzDNcJTnSrqjGkMomv18",
  "key12": "5YLtC4yQhZXbCfiRMERCrLbnCQN2xKUscou8bgGVtkN7qU6zRNrcXfPMFx2UaLhRxpyX2Fz22eMPhuPXY2RQ5XLT",
  "key13": "nZcpD46ri7poxrBr6GQuPmSYfVqU3SJSVBN4tkFvoaBbckq4jmUJj2F8Td6qecR51GhVWKSqb6nYx4arz9BvM8E",
  "key14": "2sLy1fdvcRAZgmEfTM9hsAAHzCNw1YZBsAgjL6zxzhAYdZ6967ZDx2C3L6XowhZoqj2u2MVW9MRGGKDtNb5G6MjK",
  "key15": "AFLErWiW1RrvYAPrzPtSAwwi9Xsrcf7FSrPR2FusKpsSAf3NVVdLUDKFwB9S7KdZMD9Kit7PqfxB6HRHt3pga9g",
  "key16": "3kDfxJUWjw74kb7JojhEisavCjeBV2UBtLSBoXTq49n7Gkvqs2cbvxK5zinsmodsw2tPuvTtFCE2ZwNDBshSvEKc",
  "key17": "5cvZEMSG1XrCPHTqkmUms25QbdjLuNjoKsvENRjP7AunNmaZ9zCvXLZ16Y4rQiNJmCmvGvixAsGbZ47hAVyr5yLG",
  "key18": "5pX51GSUaogDFtM2WbM1NSiT9c8cqdeJKvcWTLNyKjYaoCbBca2CNWZCtKfTVRCdfWz9H7hfV6AMKKPn71Awg1Aw",
  "key19": "4wGCP72Mb8tZtPKMpZAFZuiFmyhAqbPQrD2uYE1sALD3rS6Jtg7YUx5kXzC3XpJvqHydKtQR3yP7XYNnbAzzqAv7",
  "key20": "2eofgeb9jGEM1V6g7i4EuVnCNDfekGAgSJQD5UYSK59J1RERVXsbCookJnwqR5h3ev2RQbsJjCoJ1irCYiLdNYJH",
  "key21": "SXeGBdyevRaQWe1wrvV8YYxdNgxfsmp17Rd1UzmrTHRhf8BDwN2zrEuKuLPSXQ96Pjw31Bwzc3mP5LWeNTDZAJ8",
  "key22": "QjwwZEGg2CM1G4kN1KEZjmeGRbk8oHhdvLZxQcSru8TubpMY4PP9w3tRTih8KmefNX5ZMf2ogV3LWCoSVAVGddS",
  "key23": "4Y4XcaBkTBj3XRBgAxkZpgyMeuSwDAYZEc4xPJMrQLhwP4qzLxDUghZarJPkUtdmRKCfYswHPCe9FFW3tRPH3Hc4",
  "key24": "2MRKsPsHuvua1kopZafEwJBha7xs38a1nWS8moVKPj2U8tMR5ridXZ7H9NrF9vbZopzb5wzP6LyJvo3LFk1cALhJ",
  "key25": "2fmRcgweuiupr5qsEYybV32ZqbpmWthmWE5N1b81vsUYYbpmZTAzm4uqPAz28cBf5abhYNbe3oqSX11nhJdc943y",
  "key26": "4dREmXV8tF7Rh6WedT5oPuHtwHVHkxXUotwWCacKn9HTFaLN7r3YWen8omtDcXnvEdykTcVLK3FZADVZZt5UtAb",
  "key27": "3GEVTxGzQEEM9Q3RSdRGprEFDB8DPHXQpoZrdjyKRrjsdHHwEzowBuJ5asSgdAQiiQwfvfo9vFyPcxynj4tiDsSr",
  "key28": "4SUW2aZZMSzoxnozdGcB1hzmtokybcjL1a8QPfrMtzcAEfmRRhVhZ8NctioAPH6eHUu47Dzfdop3ccNiWEjS1Sf3"
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
