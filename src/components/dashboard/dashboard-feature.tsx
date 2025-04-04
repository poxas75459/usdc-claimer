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
    "2YYRCSP451Y5GonauDQ6d3pDVyrsivaPGPpY2X9qvDJ8J9DkWaXUjdn86MpAgbZ35KFtqZxne9LaVydp2mkf4DNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HWTEfLrZFCbaT9g2fZNPcuYHoipJTRwECUTVALq54iepV5uvmF3mYcqwGHEeDsdcexHmoGNbpkP9THAny9wnbqY",
  "key1": "5HgmV6LDWXJySZqg6yeeARQJL23GGcNCQ9Wn7WpTizyf2L4wQQxfpJ4umoTshr53uLC8iGMmYA77xJaCUC1HaAPT",
  "key2": "3V6oXk7JDWas8GDk6Dyi3t1aMjQQaBmUdXdUYAyUwMHSNaY82tm1DSo873GwV1w2uxKR7mqcQNAuWNjLehKBymCa",
  "key3": "2jtgFSgSXTwcnShinugAMHEoQroDFWPVs6TcTMPM1z4FgpGSfs6QBs59LmfXYTRwU3QGcmV2uHW7dM57nRAbBNeB",
  "key4": "52BvubEiL79j2h66YzLMaV3dxw7wRqwraHJMFUNRwLDNdt9NVFDmz6jNhtvUWHkESsDBg4ZF4qDzhSodh5GtS2KF",
  "key5": "UQeymaDGi8wZp5vBDpiTwGZaansHzxRs2CicnkcXRQKk91Aurw42SpCrMUMpnExiRaAqrXRCiqVXbUv73aLUpxr",
  "key6": "5YUeXLtTU67LC6Rh948MewhxT7yepsy1Ceo2nuhBVz3F6WrcPAUXsrKDSJhxtA64wkLpkBSqdGAKPRXaeqhv4TV6",
  "key7": "tkmsxS7h4R8EmBBD5ZPe9kpx1JuUMVzCtD37DGQMuR9ppJnpXN53sqK6zYvnLTjCdPpkQiFTi5vfie2eFe6R5DK",
  "key8": "4beH86mhZdZXHrJYsYjtiJqDEkeziFMrmgrLaw4CGy21F85X38xc2KYnDXrT2Z2ffG2DV5fpr2iWHr8NYsdwzEUt",
  "key9": "L69Gqv2NhRYG669tbSknVmprTXC4WRMtW8DCTTcH3zbaPoCtiSNzF7J3RqCPGxPJyvcxnn82C3W2n2pvBkBoVPv",
  "key10": "2DYZ96QjKpbCSTyzTxasXMdURb5nU6ZxdocWo2P6Lpw5dovxdE5xcvAFPsS6tefgWYniunxN3rH978MJvnbmaujd",
  "key11": "4oqRj6RXJeji4A8guLAR4U86uiUJx1FRxFPvpnVwgSEj1e2KcN2Zn4FBBdefEo6dzwK85TJpk7u5fVUHkMsQakYZ",
  "key12": "2RjE5mwyUaFR2reTmLoPJBf7spK1YKx5LUzBNz4PS2EvK9NwDAyS3GFaXoHGGkzaJ8mux9DUizgX6YsoFFZyCXQv",
  "key13": "66KHwGZEoL72RqKJgn3eYjJboh8v24cLU7usCi47e5zSHLiEsGPfnEjz6CWwNyAqkACM2dkFW2qhyCgrwKyk7HYc",
  "key14": "4WwfuAzzwPHKDxNkqzRFt9pDepcWG4rKREuAqoxoQo7n2hM1op4SM29DwYMBZtu1Lek6H2Jq4bGGNyxrgLDybRea",
  "key15": "63b8h1Y5zUdSHswzrmxpPfmYgTgpWgmN44MXcecUnJ8c8dt1w2uCdYpHh4HS5Ergw1YUHrACFTcQ2r25h4QrcKTW",
  "key16": "5aZoFtLAFNUYRKRXaJFDh6nBoShhxSFTuY7DpUG45KGfhZKuNF2vp4VJjuFtQmo67iuNwbmcNnCgKK6jsy9bW21x",
  "key17": "56B9GgJ6pnmXRREKoCWK1GsxtE9pnHVt1uoHoLZsdthiLH5r4ar3WjZ6aV13y1r6UpzKfX1jFBc1tmTDMa3KTvhv",
  "key18": "3UtHKvRnUddH23SEdLh9ycJFxQ94wN2eUCyVD1CfAvb1xF27ccSLDP4respUPspV8ePAXYDG7c1vViKuZp7p6yPU",
  "key19": "aJhefrYDeedBTH7YRH7S4ybKzo5wxtEdpXk5WX59phXU8BhoEUzyiSTiPNGSia9MRbWkyWDDTRafVN3zeWa9Dra",
  "key20": "2Wrb44f3tb24FMUmA6vV3LxqkyREhLmsnHEAXPM9PGqi984whE987u1p2nKwSEFPKeVUUNekxP7UAi8KsCuXDYq1",
  "key21": "3NvuYy9XGsDkA4vdGKhYxiUMbLQC5UnPvoqB8aeXt3uC8UatosjWbxtnLgDjDtDx8AAtNeEMGRunjZkpw1uBkBKK",
  "key22": "fgPXeGAUrhJf1h8paXs4hFhcQcvrPxKqPcewQPnymsWjRtJWAwwSSmB1qX3MkRXf9qw4GjKXVcpXSTzjhvnCEx4",
  "key23": "oGYatiJgWHagMPC7awj8AMtunxraNdoPd6imrsRystGHysohLviQ1Jef7XjrdkUG5bri8zNfWz2jiJyLVEDa7N1",
  "key24": "5rsrDT5BWCuwJGVR8P4wb3eRzXXWgzzhnnvFab1akFgmn9AwtywBuPSHkk4AnvBF9XW4XnESVHmjHgxBoU1u72z3"
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
