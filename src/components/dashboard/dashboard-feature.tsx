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
    "2hgDmu5cwVWpEsgnKP6BAyv4JXgfHFw3AkbEgyhrtf3QFwFNt8L2pR53Uj4MGYChU8fz2RojP4tqnfX47ZAoMLYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T3WRgrMcaitqdRFiyAvRBeFtim2VsZsm8Tmhfr4LxtyLZikXvSdrcnHKHERa7DiFsJaW8N5egp9e6vFWBSY16vG",
  "key1": "5xQFuRRkCrz5iqpyDgYEHoxa5cx9N4Y1VeWdehp9QzHWEoBz43rP2upPD2XDrMqw7gXCvcukL1iaBcHJDTM1JyHc",
  "key2": "2ienNGCNtXjsWZbjDjTLVNAqsNZ4n5pvnezioS9GVSFZuoS3nRL1mSQ4UfzfMHoPPsnx6BAYLZx2iD3BtgDUym8X",
  "key3": "3x6t8bDQWJ7PSWL4erkr3bjRdGfXNCQzztEvcBVRQCFtt9hH253Frriay51XhWMrmuCjVwGKhLzHfqb4CazfrkmQ",
  "key4": "3v1cZd6kUHR3QYaJfbERkptMwy5JwsuCBviHYm2xSE3oYbRZyzCM5icMpiuF8fJzo9vjDGLEESTrVZP4gnXYTR31",
  "key5": "2k2NTxm2pCamt4dJMBfJ3LjYLkoJyACZ6LWZtsv74UXjWCoYJvmY9mynPjXgiW9NwZjdDmznD2BbYfBbp99BYMJa",
  "key6": "5hnzCduREpAoN2m1CnBZUCoKJNsZ6AhC7bgSnbmJghTNKDjbLP33GWeinNVjLDqie9xRiM9YSL7dKyGJam7HoKxo",
  "key7": "413fCu5LwT4ku2V9udUkQJEJWr4tsQMsPovYw34EAonrjcTep66xcg3LkXc8dQ8WqE1KHPNMW6a2wBK7JbMmr1VD",
  "key8": "65Mhb7aHXMR6vDesoV6M67UiEzEj1ef5eT3xRwxuHTXSF57xtu8S2cRvYeKdNLQYcESc3enPbEL62wsrYofaFKRq",
  "key9": "aUjVc3SVC9UJR9A3UKRWoETcq5REMvxxJBJiG1xUW44pQj53WdSvVT9wdSpjbKbWxQ8hYjYfi226mFDwyBx6Jjb",
  "key10": "5Vp47Jm7gT49p3fGbrgfxfAmmQQMUXUT4STsDKn427j8T99KcZoeNDJLMJmsJ1SnAdXSy3ftBRUY3vefSbTkBn8T",
  "key11": "3kPMQ1664eDvF3371doKt8UdN2dQncTaZZPny88DjE6sqiza1UffkjJvSgunHR6WS3FVboZfgCRFtQy9jLcTtwLX",
  "key12": "55RgedRoNCfEpSmrAciZZMh6h5mbpsEeFB8QXZ12PCGXVWWaYsyWtMjnN5VyBWXyPVKRGUcWdqRr6dqAqL64jN8A",
  "key13": "3fo4vwVTt4zGRhfQrgCr4LVqC24Rtq3Z8CCN5NUrVDbVmQqVLQLovipU3xqi6LwqzTV66fTCAX6Vua5saJ8EJ7kW",
  "key14": "4DRtfSXjBMgG5kCsmetn2KWW3rH1LoiGWRbVa8JLnxWvupCNaGYnvmjSagqKB86WMa1wfrY8mEyBwKJs5sVVae3a",
  "key15": "2yKDw8EUNLpu4dT3JZkBrRi7feYpbU7HVNjiehXNc3P5ncgHtMBCbq9HTMup8YfDGZh328fo2umpigTYVuJSDqRZ",
  "key16": "24WDcRtvrg4Ah7aco27iMb5LgdMFQ39HF228vwuVxeTeAWZFvBJG3k3GCmjbT8ER2QrMigquvJGaXt4TdztbKpzQ",
  "key17": "4gaWTFb7ZB55mGMBYKFQEF5iEqWT7YbYpYcThu6YcZEd4JubhjWrWg8c58kVpXyJ9dFof7ZRkoYB8xi9u2o4pnXz",
  "key18": "634UUCE4bAV52iBjRVdZ4twd3yQrx2Jv3tmVMptJ1mUpYbkEvBw6EJwbk7BLteKLtKDK6aJYGfvy3oNT9tzEJLo5",
  "key19": "2XTFGse2BBvTSgSdrQr86Wq33nU1EPU5TB2LiwYoWoXG16pcCf8cX9W3hh1CjC2bEai5KLK85SxbQpJP9Vs7UEu9",
  "key20": "5HaWP1uVKfKy4qNNUybedzBnFTEHcwSha29NAwTbqo1Xt1Y8FWQwJyWH5QGLP9rP2EFhgrx5RN3WbXHDNKA6Zqiz",
  "key21": "23SvdpefDya5fffmTkFP74AVQ23CUFtyqdEM53tbXdYtWzQ3BT993gskTSNs8xnYD2GGwfUeEsWmADXqw4tGwC21",
  "key22": "4GvXtyDvPuhm5sRy5Fmk9zF2tMqvpXyiywQFrwRunHujxzvrLLnaWAQGChQ14tngFnje5mao1HhgJeB3J8SE2dzP",
  "key23": "33p4p3xNtaXrG6JSXwAeb2my8UAbs7TrJnxoF4nEy1Vs26wyatPBosSdWuXkxrg4Y19ruxMU6aZWQJhQc7xvFNkV",
  "key24": "nVLDkZYsawyVsvVLz3uPSJccUm9XCAg4ibrFpC3ocZgTRFxa9J1gUC7nHLuzwXA1yX8jdQhnkhn4iz2JJuLCmYh",
  "key25": "4Kx1qCLYB6FE6YspQ4MQcrw6U6owcEeypBx5uFCkAsCcF58JYNdnVvMA4L8koncPMU1DgdHEv4PTnApwFQLYyAUg",
  "key26": "3G5GMUFpw7u8djLvMd44cM3CWSo6pfio3cHbXJ1FTg6taNjH23fja1FfyjWMRWWFRJrpx9Lv3YKHoNJkstLVXR89",
  "key27": "25JQJGCuGQ2HwuSQJFTirUDwAM9YSAnu84ANtiKxtQJkXKabTonDmZE8arbsRpLXhmzCYqnUU3LENAufNXDBkAPv",
  "key28": "4vgaY4WM5gd2zot2KXyvr2nwMfbqkubnfQtvgHjXtDQDV1KbdJUTnRNyiv6vPWQbx86ENvALpmB3SrbAgsTvRCXE",
  "key29": "432BStWBSMgw5C8vM72kSQv2PhefdQZn5x5LNoX8zqoQiQ7otdz5bpfcfmbNoHNNqwcj5LAyt8xeMAcpQZL1dHjq",
  "key30": "2rnGeTHEtP48CL7mU615BJM2R9ph2RbeFSntcWVkTmVyoiHDeqPKLqdd9CNwPMexzq7q5MHj8Ux5cnveohvciSJN",
  "key31": "SrxRF1acYWMM3PWpea6nxqoZiBmic323eoX3ctjCMTDkwT1wgdXHCdBAgnKADeaMt3pzXdqoMTdtpmMFLqXUAxo",
  "key32": "VrahxKrcjdFGf8DiDKL7uEWzQ4fJfRRrnV6PCjYnKmxEZxUYaichn9C8KkefbDXLS6fec3weyoVYJ2WiVU9kyLh",
  "key33": "3MMTRfCPav8spfs12NPgYVVAeekQWMj5fAm9SNjo1TUWKbZxSC6RLzpYn7ADSFcErmecbqxa27iJxpT9WEzjqtJV",
  "key34": "444uGGvuWPXt8UXUjFuznCDKs1X4GtabgdeCG57zVpbwMxPtiqFvqrs7A6UuGUuMHaDTxLmnSpemyGDozi4uUkDJ"
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
