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
    "hucwNmPPRHfjMfAFkLw9rUjNzn2qgFHTmCqEbroNQnLP96A2pTMw1EPgQeF7kg3XYpUwpiZkTaH2ekDy46ABxbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e3Fk2Jk944zBS83JtYHKmmuiPnwQZLBT5pdK2adqruMkFUD4sorQPKjmEppqX1FNfES5WLUPXBTQVgXBiFQ4z3i",
  "key1": "uW1GGDoRzbx2CkpkLNg4eFcwwFBMdiQT18PiLfaLjQTZ8iV5nr3gFup6bqSKEJYQsrxrEkndZNNZdWtCzBAwzDv",
  "key2": "5iNwa4CHHrTNVtu3ddyToWvWMa8npP9BcBfS238buwPWqZHYrV2QCGj9TbGjDENsFUKtDs5sfEsDvwEpgoTWB2q1",
  "key3": "5ikaSvtaHWhoQQiuf39ysQ6H4y1hijHMSSZGyXgBh786UAdi5Tj3DVhAXPVE8EqB3s1idEEQJpJtyMEgy3kfsQJn",
  "key4": "61GuR3yYKkyed6kAsNjkwWobQV688wpDN1JXQQ51ChdLVqSHWkaCfEaxRaaQs8428ZFKts3zzFa3qEmHQC9SBfxh",
  "key5": "2UM8bd2VqA8sD42kS9t3sAJUcNQBDYr1tHFVM4fysPvFJ12qwVpEJPnEaFsbsramDxCNc6i8JNkJEHSdpUc2w2w3",
  "key6": "2uz7vGtvrK5SrtCj1wWo1bcgJgWAirmzTxzv3eZBTFAKw56kN1Ck4rtALrnRxQ9jHjtyX5iza9HrRVhQu1D1xoAG",
  "key7": "4TKRnokMacsCL4Z27BtjZgpPuDqr4je2R1BbJSHcWvgrbc6RhZv98vJQJB1tkAUdosBw7CJ6PXMVHCHeHU4APU38",
  "key8": "3qYBv5NSHLUt7ZXw6K2kiMQVkz5aX2Gn1FJgVzYPpdTxcV5RjFP2AspGs4CsQwfBTGjQJwNkhwztBPEPjPfoYbff",
  "key9": "44VwkmDdwepceMYSeQ6ZfecWUsc6imHcfgqDMWxTHo5gXZyVGFAHyvKUX2wAU33QN1AKMUMjYFADWW6NrbwQjSEJ",
  "key10": "335UXEv8hksHYSVuzGhy6WreUPauxVTpeMKSruk4ZARuzwMk6HGWzhp4KQrLcpTqecxsYPZXvCGzQdFizagNxT8U",
  "key11": "hj8ajAgSwcx3fQJuwoAmBgjgB75iugZzHRAMMRQNGJrNpsCH1W5Eh9TYoWBkzMUwxdq2sAeZFyKg7RFWQRWHezQ",
  "key12": "46qbcfAkFD1wsxkDfrymffqDQNTccYwMggqjuuZK6Q7r2rueMCJqmEFuA3HdfxqkcVeVs4qEUrNq1dUPUQGDyAbR",
  "key13": "2cHWQQqNH9sJ5VqS6Ns8FMpuuiF3bVKdhBSGCZ2fhFn4wz3zfzQAJbfgSV3TB7eAFv3qCo3Dkc3inWksdwnVxuXZ",
  "key14": "5wgCy7ppWAgCTV6Qz4xtwcxAGEFQMXdYAX1kkstttFRAyRYFBTTSZhLwHeC2AwhtmwrGnLvbisaKDVSXZK49VegR",
  "key15": "4k5ki8WMf2Mb9RutKVw3bXWNmZf4nt6pfhqmkErzkbw73UXfTMPMTPeuvFyLq2YKcWm1H7GzWnsMXJD29rPZ7Lag",
  "key16": "5uECBdsSu19zs3zGunj2EV7ucXMf4WNKXjZB8cpAVQBd94DWeob5sPBDpJo8dShH6TrQRLjJZRmnuMqkjaRzUVP8",
  "key17": "2LusAMf18BEAvMtrXN43GyAMGfeyG9C2dR7DbxmyaaibgWTsC4Dg7Dp57wZMQny2RRUQTvRA5bpvqjz7fshFMwVJ",
  "key18": "4edPAgMBsYiCS3ksxB3VNLKNHUDTvDZk3RyHj4XaPvvMRTaZ1hkDSLUV3zFiBY7XBjkRgnXCoozonJCxEqLVaTmL",
  "key19": "zp1dYLihpjf6xwbuxhy1xPRPyXWhRJ474KXy3XhFtGrEHCXaP1xxpBmqyUN19aAcNSw6YdGQ6g9d9jG4SAaKxVR",
  "key20": "QHnfzpvQzat3TiSKYVYd3mKLy2jdAtrTK7UtMXxhYA5iRuz9PgpxTsM2rgpuC8pECMnsTdrxKKAmDnaf3qM63y3",
  "key21": "1oyLydkc886sfV2DJUMcQo5gTc8FnNFzWANRZyz1XpEpvSiU2HUS6bYdRfAycGr8jhcn9U6bpTCEcxb69ZwduuA",
  "key22": "3BLy9KezP3iQyARUZh4umCqBgjLzHjz9D9TAiL67qBg3A55FNVqmfofD6tNAnjygmJf8nd74f18YvEhxRf5BX3RZ",
  "key23": "4GsUEmWEpQJ6CGeyDhettggcrvRXCjESZAseKgFnuUDvCg4gvDoKbVdAcpZ8KAKuPatDUaCxQhbGkJchrChYPy9U",
  "key24": "3bMCbRy3Zuvzy9NLXSbaf8YXE5ST6a8o6V5nqrJoePjnqcoQ4hBdv2hK1BPBqrc6dYWpsPcUcrfGYArWfiUA93LS"
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
