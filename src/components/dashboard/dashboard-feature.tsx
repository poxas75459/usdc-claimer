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
    "3hb9PfLwNj9uY849mYVdNDDVgKnGjBwwsKfWVQ5XjmwJuRiu2Yir4ibSt1GffkckB2RKHWN4FErHzfuZL8ppidzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pDwxHoWVBaV5scfcQtAesZWf471qk1rB63UhYBC6ZDxC4CWNWnDtqkCTKAdJ8fJSajDSVfnTNmvXKKaLydzi1Fx",
  "key1": "5UPdPKuYsWXinp72Faieqp86iiHDueDyxt2tUq3awxw5kkLdKuAA3Yq3bU59Xb727dpKxgYK1zvSFUx9dNUSzdoo",
  "key2": "359p3vnQanKKswX8fJ2TBnLmEXQdZQV6ycvLLEb3GSL9rNgGXK72ZRwHryjqk7zZCVBG7PDFP1d95LnWttwTYNoF",
  "key3": "5oFx1Qtpjm96bPGLx2cgYkW7Qk1zTsmm6f2oH6TQ61EcKKRZgeKTML2mTMyPxr3DiMCwXj3GSqnSmLpQFdkPVNrL",
  "key4": "3MgLcpcbvgqJoh6Nwy1o2tgMarHsvmSGo5Ed2APPMYrsYtqaDfzgLBcckAzuT13KQ7g4P1LcxANuw4hC3TftZfS9",
  "key5": "56hQAwgHNcq2ASvSvSaEsMwTN4atBGF5s1McB5ZcJt3kknnPyFfXeLDrkvj1ytb2sNq27ncCrK86cG25QLu3hPtK",
  "key6": "4db36nod32y57q56KeK36p99A4Hy6amBDArb1yHHBt96Cn8Uomntb64DQPFDR395khLsA6KUGCd2uw8s9ku4iYZd",
  "key7": "3u2Y7QtLB6dNcmHwqnfgerkyPHKNAMrp7qmZ4Q2ua17joUxi43LuqXx48DHZYLCCBX2NrnHZ25USNaEBt3M4fza2",
  "key8": "tFpmWRNMjv2pAV5gDSDggGF3b9tmFvuCELZsuFEQDyd7ht7bsKChXCFQyjFFBMz5GZmPFB6zeFqD4WLbK2vrUjT",
  "key9": "2nTXTLPytbY9DucAV2askubPPKBqfwayeok6y6m8AG7WqaES9QnZVnFDCDc4zdArLQmjLh1RVBGU6ZinZ1VnW4J5",
  "key10": "5z9wajPpCQmehRpKYwimU7dnDJSj5ygeT1PQU7477A4AaFurbXyvSg7PfzzdTJv61Gr9zGYH1pc1Khgkf9yfGim4",
  "key11": "4F3QSwwV9XWb4qskqkSocxavyZ8ozLnrh3RcQTt4FGFL264BgvnCb2GsR1iaggb8cN2EUzf9k6HC7H4MEurumFZe",
  "key12": "4VoNS9az3XSPQ5gjpT9EeQ6wBiESPyRRvB7scGmHCyjiCPWMNoALzXhH873JzgncebhEhuQDorq6G5akanYn2bDK",
  "key13": "2rrhYG3YxycXR3PEiCaZbPmbzkxARA7WZ39BwBBu4PzeHfMP3THfSGAjBRBGmCsXQY5gQDwqon3BWraq8GnmLna4",
  "key14": "3muQhBeWAGB3Q5yAdbxFTno22tPVxLnrshcTS3mbwFrzPsGuUNpWrct3qzxHwnoRYzq3qPcJ1gceZNqkGfLFr6XS",
  "key15": "43WmEAxTkqo5h4SRUfF7TRqBnpe9BzSTveiBwtnLaQ7WAkwvqUKgpGQEoDN3F7Pmp5jLm42QdotRVT8Jiwm7MrED",
  "key16": "62YH4mtLNFVSLPyckFPVRNwRXE3RuCoKhENBZqYUUEi9JkmfNxWqfTdmTkd66zVvF1rMTAe97XbYifvDsGGZFHtc",
  "key17": "5kHGosXao37bwrQupAP4CzTd2mQvJikw8X5GQedSiYm9omyxNVspYc1KEurKkDzdHVS993hyxmgm3937eGJedagB",
  "key18": "EiS42xNveq1hSesCY6xJxXzjKbwk4GAXDsnT4wQPu2rjM4gQzHRgxNxpg1P4bekRERTgsP2fc9JHSsmVyuwnGHQ",
  "key19": "WhhuSTHu4Q4YZNnGkKwxKYU8zndZSMRxFX7RB7H7u6No1Re4DtDApraFckzchERdPfEgcAc9nibkvKgvTz6BKET",
  "key20": "2UKXNFygKyVuacrrKcXsK23eLnQrGdxXqTZjPSAocqbsQe2yjUomgtaipvpSLE1SXV8qUh57sdkmQAyY8DwyauFy",
  "key21": "vfZ8tyhJaPrq3WV9LCEGE1bGyV7DfAd8bhARSGpy11FeB6BWkh7ZtgT7ebftPCdq1Nz29oZHSSgUKyG3Dh5fFDR",
  "key22": "gEGfE5Hh4NMijTRG1TGZVVLMsa4N5RPgvqjdagTGXNHfVy3N7sp9y7scDJYLxN717yRWpoJr2FdnVa9NkSw41zJ",
  "key23": "5WHVJQFQ3A4bxFvyvMf1iNRQQxeEbU8wjXwUn9SpNU7wNc98KVyFKu9F6VBNMrTVmFcz38aHHfjjpZj3hnTbTYLC",
  "key24": "2hvB1nGLakWDZcPEhW8w4QVStTezyw5pc7UkkxUeYXsrdYKADEggdFctHg1CCwa5wsaWrfDdCohufMYJN73AHVy9",
  "key25": "5zjSwM51YRcvpvyE7bz4C7gPmBtQhCytwZsLTUmLhT6X7tyaYxTsjAgRV26QWuTBuZbVNKRCwKZdSrhijka7xnn7",
  "key26": "4mtLd3FjpiQSviryzzEKwnREG4DgHbtbw6Y6ZKnDP4gsGwnqVGE9dsQKc9iQR92HunyD6R135kcLs9Les8CkPj3P",
  "key27": "4kenAwUavVgo7EwXoyfkg84EJZ6bVPDAMHXFAGXriDgSPDjKkDUfuV7XQMFEXzdtRAjXYcg2A6U6v7HffEjLpcGr",
  "key28": "3RZgA2KutfVo3Po693AfQmRqQrSUmPkQ2NoQpp4rszTaUxpH6VmoAzUEVuCPAWX9aRqAmFBBdjnTGJoS5YPU41tb",
  "key29": "2MN2CeNgjXcxCKHpfS6PKSDWj31SNyikJ96peRKZXMauTutMbiV44qaRxgRno9psi8BuETEvVZPGbop6dfp7DwE5"
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
