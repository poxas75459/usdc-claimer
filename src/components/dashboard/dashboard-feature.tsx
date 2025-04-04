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
    "2Ar7WTNmrRbtrJkiXVbJMMPMzLWtYYLfFY2eP2f9SmwJ78H7ZHTyV2z9ikRm7CLzSa55acfDhwauacHV41sAZf7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R8WXLFQ5uxkDVBgbJiU9BnEsVckLT478EUVg2j1LkdNBtxBGggVGPMcAmvEqGoEXwRb7YKNgJA9eaPbeoa3gsDx",
  "key1": "47GpWz72E5TdVEZ6E3Z2yCaisCWd93zwMdBCssTcDiKgcSfctVtBqfVHRkFDwpnEjeLdGFh2e7GtfeezgrKTnZfB",
  "key2": "khYT8rPaRNeH5nHR2wPZ21DvFSx69ud22dGGN6sHBinWbQvhNJBpaUNZWcVgH7t4pcb1V6jo3Jnt6uqmeM85mFU",
  "key3": "5v48HsYiEydPGntoQjL8KgvMwSYT78LjJ5KegnnVyVRuEDD1AGZ6kYZBteLUaqRzDn3VV3xEUMTrwLuZYzVY6Xz7",
  "key4": "fqt5z8u1m9vSFWgBY2KasmefUH2uxErfZr6ucns4uKYcCsVrLKb43drokU4i1cEU9Aasfd9ggufMZSiwDz9v9zH",
  "key5": "3WLvwjA6ww3o2kaTRR74go5MbNDhznUnUuoGxDiLdW19PyEbGZTNadJDU7cJ8kAQEtnMyfbH2t17SAGBWyRaUuPB",
  "key6": "2Pve5XqcQYHs5LiNCBtVjKX7y3H4kNaGUd5wSVBZJSVpsQnwFKR1JTZ7ykbQM4YD6v6Goyp4zgn3Fkt67fWnZYJP",
  "key7": "3GADPRdvmeK9pLJNNc1KNj7zgmAuVxPu7s3pWRh4r6YQ2mxhiGRAkyw9LTHWKX3k5v6UwmeaKNTbAsnktfZZcrVU",
  "key8": "363XLAk1v1MG1f4ZBVMVpCwqmrkPk4GHeHPT6baC4FGixyTGnMXqyqtDtpgfFPZtRiUhLdfUtCexLzaXaBYX9sy7",
  "key9": "54cFnmexrPBfD72YZMzcMWwkfUnxti996AKz61zf37t7WuDjDEXvikdX6vKoxuruPnbUsfK6yRPAnugWyDggySyT",
  "key10": "56bq7neddXAmj2RPa1Dy1Hda148ncCjyEt2441ggXTiu5rqCqkUFrXUkUd5nfvhYqx1Yr6NxdArGfQpzycg6eE7A",
  "key11": "3bsMvstM3ZS1pGV24Lvjcgz3KWNZSdrwrYpFCjY526KLFKzQ8G2wwRZCLFXthHXkNzZrMzi7JcT8FomL1BVPMXWY",
  "key12": "53Hqch6QMjrpFz5yFcfQUedwRwJxgiVA4vGGE8hZ5SUQ4WmDrcDjq7mPmPpuZpM1wsvcaqR5mQLH7DLPPMeM7LSj",
  "key13": "3t2hhghHsUWPRYP9KzMSjGYa43e33fg9c8hxDwxo3CFH1348inJvr6XmG8pH3my5SqGk31GwjHx8sKV2NPhmDjnt",
  "key14": "5mfh5DKoepzS1L72Z6pXN9qSibGd8RNVRT6t3eQ5KHNs5qioLuSFfiXBtJjnLEH6RMY6DNL3SmfZPBWGwBjCVEyP",
  "key15": "2Q15w28uE6jGpmi7UD6xkWrUn76BskPL2671vHC8fXQo15auKF8NCmEvCveY9VWXNYDuFv6tRn2gCUYDwrv786Zx",
  "key16": "65vV9pKMpCypB9yr8vaAtkmGPmWUFHZBUQtp5KNJEf9ieDExrhP7DhBmJjic2hcJ8wfyASfHggEo6YnwBSW8Hz9g",
  "key17": "3NdFCp3EUxV7g7hKzPSprfkwPr68hKrYsLDCkvjgBLcDajymwP38KG4BjZLExRx5ZcDUkwHFiRdaeoCU1E2BEsYH",
  "key18": "3opvskx573sG7fhTRAhtUNvEmswRByj5pxkZQ45oupPZFXGDKH34N3FN9S65XaKUXcKPQQ5DLpEAyJkxPNAHKxfN",
  "key19": "5hY21EZr2teB2cCkQ8tUw6uTxwPVgFMQD7VhiFGj12UoanFATvTmAyAZrFMmeHjTLGFxJkhuaAfkp1tP8Awc6GnC",
  "key20": "omLr6QLfPdz9eAKNynUdtUiQbCyQHnTSu3eYPhnpRQd5RhxWcyvxTQEpRoa613yKPdAHduuhqxX4jXZfZ62cjma",
  "key21": "38j8SzZzGqoHGkDQhVF8FXoVbF3S6Fs3x1FeBw6S9fksw8d9w16wpsu5H8Lk8rBevGJYQuXfR71qaXR3tXc76Dqe",
  "key22": "411ZeNZtV3V2bXbtXymdnJ4MP9N7Nkh5KZc3VcvdyuAAtfWLRke2ziUWUXz4gJ2MnP89AfwqHKitmfeKiCNLWA5t",
  "key23": "3RU3yCHpJEnezwRWnkbTf86zqAv3yBXcktegVwPHuMK8mRLQpgYVuMMKhEXTvsDr9tuupCvLFq6JGLeMN2g1g7aC",
  "key24": "KBRphpyuk1PDcguTpcyJpxEsGjbYqXoXh978xFePP7QcQW8k4afUHYjVjSPtkM26bgMQPsN3QedjvEq2JmFPUSm",
  "key25": "3bevxf6eisyk1Bjdmns4qsva4TCwjhHu63rxadaAV87UzvDGx2cwrV91Jp5T9jGafgkMTh1FerMi15qSh2GhNd7i",
  "key26": "9cE9Vx7HwhneR3KJYQmSXaWNU6TQirjRQVGiKpbUcfnPiRUUGC6rjALzhZrTCaHfh8FBeYbqqRYNdxt2uikKPcG",
  "key27": "duGy5j5322irxSoq6nXLvp58bnNTuCUsfCsP1yQMMa3ezGASPzgTMLV2Z9HFyF1v2maT7Tps1SX2uUwBtpiN6WE",
  "key28": "67Qo6kTvTWQk4rQ59XuiaWyMMCX8ewsv6EgbZrbGDyxZmFqBhUysevuLwAW2nTdZzAFkYAYL3gJz1hTi1QZJ2yc5",
  "key29": "4DVQomDC6iDquApQ4kc4tPHPTiDgKG3YjE5DJNtQpC7Uhmt4kYr356Hr9KcRxkzDcDUhk26ujGNCc3VRC2Sg31xD",
  "key30": "5y1bGh8XngsFJbQH4ug5SmLDKSuKLzioJRGLsfEyhvdVhudK3J3LW6pAQvGh822LqUQPW5FJ77n7V2Hu3F3cnufx",
  "key31": "3RAnvXoG1SzTPG1jwohDJzcm8v7dFrNJtAkH2kvCFx9FkTsYjE5dkiuJcRbX1foSsABaRkruk6s1heWSjzpepEfu",
  "key32": "jw76rELGrbbb3yUaxrxDdBkGiaM6Yr5N7u4nyjoAy7UBjZaacgpX5VNkah4dhhcnmMfmQtU9QUX3w5edpBnAmZi",
  "key33": "QfNVD8TQNoU7B83fqXZuUNnLvZpyFgGqk1qxjgDY2eH9cu4wjxFMMaNvzvNeDzNDUTv5ZptoB4rNLuUtpPC12mR",
  "key34": "4NinK4SrWGyp6C5kPMDncRQSyDafLyA1Xw436qgUvZ8PgPcDeJ7CpYQYyvYYUn6eLXWie9EBfuhJ3H4B6yXZ1wHX",
  "key35": "keqTRHZEgnRaBKGZ1fL4PDXeeSnFwkucw5o9a5ejVajU4LC4Twh7pFBGoUk7a86L7vXsUfZAtar5ZwmGaXubHR4",
  "key36": "3vufHcNkcMU52WKBA1gHdp3rthKPxhCHhaZu4PbE5WEu4cBQgVkVAVvK1oNFhNBnQeuPFg24hnyPqqpQhe3D3eD2",
  "key37": "4P2f8C6jomAFYR8cRupGWcR9RFmWgxH4DcdbaupJ3ubJ6PhFv41XtdfQpPfyWZytmdbMrknvVtG9JXw3iVNm7oph"
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
