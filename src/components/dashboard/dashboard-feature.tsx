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
    "peGwRwbT8ir2D9hoEAGftHSeFPkz1oXiY4fcmP89BjbUbBa7PS3SMUcdbEnjAN3k3GRost12nRuAA2SCN2WyyRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "432eZLSZENWTtExE4kHHwog3dSt5gdoiGk1U4sajGSeFchDvJdVsmmWNcFwvu5djYkaH1uyF1sf6H3BhjEfZgqVc",
  "key1": "39b36unc7s4SZ11XFfg22pJVSRhTwhf5TRYprE5uwbq5AGtzUrTSoKYEWDJGjKvhhiXjYXNrnhNhRQjeuo6B64eB",
  "key2": "uop9Eid3fiUsaCxCCMBgxVxH1aoWv1iCBiEtrv7B9uacKwp4eC6LZ7eBAz2rG8cFasHbDMKsR3ZT21MPoPbieny",
  "key3": "3jr84yar261aUgu9U1sSRJTmwPTy4zHgx9Cp6HEStqFY8fe5LmBCoB1i8nrVUTNHWm34MNEvhQXfHni65quXMofx",
  "key4": "2TThf85C4429ZcDM9AoUGGWskwX726rtnBAJzdj95vBmKdKDGFQkjuxPPN9wP8PPrEbeZepL6oyT9qW2dNERVxpe",
  "key5": "5Y7mfznhk5dDAdrrhRnZL65bxC4PGtGiYmkkCKg3GwJ7wifk1mpFpvsQe3nNSAj6iKUUs4JJdAqXdr9sin1P6vZW",
  "key6": "532kRgdjHPacYMjTGsk47x6Dz2ep6vnfrXfbtDoxqth8qX2A9hcV2ZNvikXKihcGDsp8TRFAMFkwUcjSgJ7J1nB4",
  "key7": "Zv5D1F2iSx8T9bVCLquWXYNsLVamMz4WU1j3PZYKxch33mdwAZaTTrXmZzB7BpCXaW87vsZkV2kBc5jMc9QzYfv",
  "key8": "29BnPVdZubZY6MZE95noBkebNgXsdyd6vQ19VWRSFoSyhXxaZJkVpQxDkqZ7bRstCf6g75sdABKeWFSj6cpiwonM",
  "key9": "2qqCjvXXJU3yuyETa8MWHi4DesJMoaWkmA1rs1RXvziVN4pqV3MgDDwgoZyqzrqFE4YUarTESXF1CvCqRwwTozC1",
  "key10": "5wMqvPmrQpLdS2SuYEEmwG4nrBMm1zEXbKwhZ5WJHwBuxZcb3t74T9zLLFsPccXSbCM5SF1TgxcUYgakLn7NRtHH",
  "key11": "42iPxckVpzkbXJBSre6BDNdPWtMMmm86MYh9a5fhWe9fTb7sKBcZzYcRaPfTZCgqhY4KM6VBbS3K42yxNotBtdhP",
  "key12": "1gsc2N46suMMMJCGKCMof2HazeECYDJagNdi2MZcNwSvFt4ByUtc5MGgJjspXP8TH5iyD1JvZxXicjsf22K6b5P",
  "key13": "3wepbkALdEEmx3Lb5ZcRgXKJw5u6uST1W3P4zgJBaHrG9FqVgsL4Em9FuR3HGRtF9dPhQk1rDMDTDZTi1veVsc8k",
  "key14": "3iBYxNZUuuP8dwKKaMqBK65JJRs5DybWgphv8AkapHzV2Y6ovSCWsGwRcHveUfv1KK321GQAVJhZgwAvFv6NDbms",
  "key15": "Y5tZyRVRkPcGyCN4XfuuiyQPpkh4w9HWR7DPfNYNYDUXV1D4NTQa3YNftzpXx86vMT6tFJtdRM5BCg49ZuTXg1r",
  "key16": "3jas9GmXKpZboZcj4RK2iRddxPgHRopUo5XdvrwvXp9WCFGqZe5mmT9fjLGxRBrFfEiABskVDxTkRtgH6Zxe5p3S",
  "key17": "3EbGt2VuMFMvNpcbZZF9xi4WE7G9u4cCkJg25TLVv6R6gQE2ewj6fvgVmBQsXsL8EMkCi2qoEmouELEaReDBhjk1",
  "key18": "65cBB1tzSJrMPWHf7JKx7wgLc4JbvKJkKNDBPR1hB6tNkrE11f69h2ovA6TQ6hzxEbSsiDNtioPTdCoFP2E4gzpv",
  "key19": "4uTp9szN5AkimksYgwzu9LeMAkBGU9Fv6RRKRGFJCYzjEaa1SsJjh69aruXksrpgSDqCHNp3HMN5evcZi7REzpAv",
  "key20": "2S5feeBDag72ebdE47NzMo8HbCi1T3pkTQVrHwFHdEg3X2pjYR6EojpGD1sb3e5um9bNpZUuJFKQUignDtZzQuH3",
  "key21": "3wCdtGLhytiKdSrJe9UjJxohY1TWPBoCrksCxUFzkmAz83tyhXMBm5kVh45GqHUzr3fbayhXiRLSwRf4b4G1St4D",
  "key22": "561WrKuKPiGFLHxtguj4dhbuh7mrVxMBRmpszJ3ubV3zDKXoFkEBXVexVnfWZGUbpb6wHsX1MFcWZwskNeWeMV5H",
  "key23": "35mL9QsvfqovgnDm7ipfwBpGfHQ5JWkAvbuhmocLbsVpGP1uoYkmX6mQfvdHZ7c9nN8qZ7jstmyRx5HFJDw3BQ2S",
  "key24": "5Liq5fgfMXgXyGWXpCCksMQZ4Cy74AwqqD8NiPxzKVbHXQw5o4WQPXjrgHRwcvy1DAYreT1SUyxQTeQgaL24hE6Z",
  "key25": "Xn7G873xqfPX3xFsyKC4LqhLSobqJ3Z8VTdp2kbAkRY2E2iRmNwjs1QQoQYHwE6ZVvfYHFdmBbv8JZAbbQVFUXL",
  "key26": "2ppkq6Fh44bidLP4BirsQpPhcFh4s5SA3ZcN4d1VuHWe7pzPdTh2zkyWf1obHLf8XZd3HXoo8MeqtmLsBf9ohp1n",
  "key27": "38enMW7qJgatpY9jrjZDDxPZ4xKtsfBX1SYjYSxSgoDYtSExkiau8FShmfA82FyrtPgJTGuwqpE4ZgHkQFotPNwp",
  "key28": "61tvtdmmw8rDVqKJJPz1C1furxXC8Rtsf89TdCjqyqmz75xyK56htz2Et1J8f2LL74SVKZJn72iwzLStAQLLYhhq",
  "key29": "5GgYsvJxpXQgzpZRV3BCGawTwyxVR3f8e9eLLU9xPW3yPz8kf34LgCAWxctUShfcFx1f7RTpsDmtAZDJQytJWk6j"
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
