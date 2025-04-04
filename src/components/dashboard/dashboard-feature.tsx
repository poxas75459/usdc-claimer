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
    "415APT9HxD4tWdafcB8SkzKhsLBvxgWitxxWxFhk91vdJ5XzhkBbyCinya5V2ht9XEYAAhCuHSmn6tLqSmVuQK2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSfyYgPSWu6vkYVVz8V9KTasSLRJtpp1LaFjFcpaWKd7xmcCNsRyoxQmfPVq9r1QPq4mF7DsvcMVH4RPRRZrwXE",
  "key1": "2iuZPqFfYtwpZazqBpw61wqYDYU73xxM5BQCVDjfkbZsyHXwzQKj8m18G6n8HTf2uaaX5EurMdPSuzqctrDJybQ9",
  "key2": "3WtAjQbdfnDvHxXZ36CJF9FVBbqFdpwv4x5ofX2oe1gWVrzXCY8MdbmghMQLoktSKbK2cuH9PqBhyjfLni6E5dL4",
  "key3": "5NSqNNGGR3o36xR9c43G5QLtEL5QQb8Q7wfQjHXn2MbRgtGYTWrar2cvuq9AebZrKTUqfH5mEXL4EgcDo2Ln6vw7",
  "key4": "5ep9g4eSrxTf97JD9JP9hM7ExkRmNmmpPRqommEs1gmbFMEMeTtS1xLZSWB54uB1fG9HfugdTeXtvxtGMVRe8DXZ",
  "key5": "4HNsFsbhbWjYLBTYBWQQAh4776B3VrhJtWu9gLroYQpoxfjLSx5gy6TYvVjooHYHNEjn64Yas7EF91PGXtDJREXm",
  "key6": "638VcFrvfTKtn57kU6J8ZMWpfLFh5NLW5BgKKYzkC1TjfxXXYgXj8Hosw7eM7WRxTVww6GrC3Vfdwq9rcXATn26v",
  "key7": "2FkyUpe5TdUrjxydmHnavFep4e74eHhu937tn61TSpPnyWCC5kFjXfo3g24jYWmHLVifHJGmeadFZsawXAdNDNjs",
  "key8": "4BSDMscTs553e2tjJDgKxCjQNCYc5HWFGce7Je1SukSdpMsP8QonAek2ZdcrUxfrJv8v5xVQ2pD3fttD6RUAGrHw",
  "key9": "dKtov4y9ZYnVpKocy4KhhkxibokECNKKvrEDh5B5Ff2CKGA3R3fjX3kQuSUsxZKeKGtNjEthq22xaNhZkfMEL85",
  "key10": "LpWFhtA2eFQ2C8Hqyhbgn5NdUL58U6wbvHUybpgWDjQyzrUvhAdhCWQGHu26pjkPXvfJMKVzFCgyojthvrj7YnW",
  "key11": "2z8NNyB4VsgK1eYoD8rQc1RiY7aURFvZuFvDi4qGfJ7wg5WwJ9NcxLcnAxRGNdgP77thcU4B7YFQyvYSrrhyB131",
  "key12": "CbTY2GSeV6mUGFMPpHGACVo1hrgxVvx98UKG8DSKqKrzZbeEuFp1WAbqZ5ykFrj3hxCt1zYYtnDw15UMcDPzPL7",
  "key13": "4fh37zSDxDGtwn7XoUEAm4iimMRasTaXE6CXMAzLUMM6h2SPjj3VGVizRhx87hDqJT8xpd9tHxPXVvxCxUuiTzP9",
  "key14": "2HZ3bxTWt6q9fbvHfmfbV59WRaqEnGJpPtyJxZomk3pUwTuZT8JaEkbAt3cZPTLxafBmWJfNMiouYcnxLLDtZ14U",
  "key15": "61viZNyQMQAKXFQCZJeuKc2S1CXwZPGpKvqdeDHZmfh7ZnDHgKN4AGzZeoTWt1yLinTuCMkYYdsRRkRhdQSuREYR",
  "key16": "4EXiJUkPVKoFVGAFyi6YnzSbqaCjC4LiPJ6vs89ovGtFCVxEBUVhVKHFQrnS8atDTPzAvme1GZqFmCz1GdgqNbLV",
  "key17": "4eof7P7gNiXmhVYg6k4YiApRSf4659tLNjRysPbfLLjJTDrj5CNYUhFNHqYjDH8wgPzFKR8fYGKiCmcGhhNT2jte",
  "key18": "3fLqpQe1qfbQsXtsT2urHAfVMaMqiXaDAz7KLG3HUj1DMB6diQE5ouxi8vxbPv8FYdQk1d98kAVyCNiphut3YVQW",
  "key19": "5vdkzd4yRbZPJHnoywsFWBic7utkGg1iHF3aa4MXubhPRXKHT6kR4yyGSpa6R8ZUHTfV7Th38UdZpKfi8eyc6tgD",
  "key20": "DidTgUFMcCLzviE4CWWW4Y2Xovh9ssv6BNow7TgHUgXXejJycG5TBpgMeYpsEoqj93hN7bYaWRiuA7bihUmo9bR",
  "key21": "oQMSHhH47njypWKpetoae8YxPvocTXEf6bnQ3qgo5swkNoxViksW7uHV7qHX6TL97nsatThRCmcmPQqa44gQP92",
  "key22": "jWjNBGogjH11QdiPus1C72jBqpyU2DZWLeFWcUcfbyPrL6bFFfHT2CCXyxSY1mK2aWJYXmTiRD7GBhjMqXQyr2T",
  "key23": "mmA6USt2gdV5ukSYxcqnvsc7Tzt1QEMW2QT8PP69ExjNqaPoPYYAWjejw3X11gwUPZBE5DJDU4DbLTVfjKxbhwT",
  "key24": "3Kzvv7cUjAHPWcXvFxaWWJLtpMiSDEv8iQU3vCMpiToSoH5Pj6UUTzk39uP86FMMKeaekVcUD3JJQuazdLxFjC2a",
  "key25": "EvXSCMpF52BPRrpxg19m44URvofSnzseLUiQzJd5cPZRghuoP5D4VCHGrE2WNihAM8wp6a5HmrXZcQGsmYyE9kn",
  "key26": "5muM7rPb48LxmXukpNL4RkuYzGuGVA4xEmgbM6xgVkPSVUC625jVupa3jbbD954VFwwznnvJkHbG92Y9faximjLn",
  "key27": "2r7d4NVpeskAAfzTbCVCfzk1H2UVcZBSewmNWzitz7N7EwV8Yit9s86T52mkwD1Vus5pfnfa2XiQSBXbEsNjgWEV",
  "key28": "5SENfywTD3FrMVY2gc2qbkU5LE6qTmSCFfaWbm1JXibz7DtFCBrUqTvmE2UGKhQvQNcRVfX254umPm1uTzZqJJGU",
  "key29": "3hNtVT3xCvhB4LGjcCpBs42Zmh4qB68R7gC3Sa6Rqau5Wc3Km1kVtXiyZy6BcdscBa7fPuQr1tsNVBbe5YHAsaRF",
  "key30": "2dUVVoquvpubdKXnDrdBGohc4Xk6f29xiXErrkDVoKUneHDo68UMoJgnEYJnrc6vLj4LtSXMiXtNkF5PK9B4bHK8",
  "key31": "48BYgCwfrLY4kfrHeo7jNA4Fd5Cjbse3RpC7Y2RpubGf1863ubnubdms3Vm18Atu4hq7Zcqcdu179mfUUGXfR4fJ",
  "key32": "25GaaG8X3C1kdvLY43rgc7ckGywatRBbvueVhPKAxpyoBnEeAAdfHGeYMpsmBGuBTRm1wp8hYiC93SeE1Tput9Pn",
  "key33": "2Vbc7LeYHrD9Nc9inz3NxWVh9uXAcGarKgPfuWKCQGHbWEtvk1SGht36nCMeyDgYYGPn8Kz85NoYYSGpvXvFU1jS",
  "key34": "5rvUymUM3FJ8qoMcobN8gpLb685HC4pcpdvD3Eg2j4UcM6o3BZPm6NynPpue2QrQyV5z1Hn9CAwzfz4Ex2mmy39R",
  "key35": "3NhKyC3FZbVGD53SzG8idv1Bv9dYD46rtMw2rkK8vP2qug1xPLbAtwRHFBt7P4Y6JjNoqk42bcCnsUFgY2mP69Ch",
  "key36": "5yhHvcYRS1YxszqhjxsrSdokBB5LeiG3gS1BFoXU4di6jkiWMuE3A4m29Fc1ZpKRr2xW2xfodeoRa4ccanPYSU7g",
  "key37": "4FTW3BHJVbsT7rcHYyFqrc7ekJnAbCLr8Cdga8GfndUXcc5uGHwV12GG5wSXXP61UXhfpzLX8s68MATLtBegvBqs",
  "key38": "4iQTinhMgNmPAoFaomPNvviKJ3yQ3QJb29bJdaNYKicyyXnb5tQmsGXAB9tc4fQziWMdUjaQ34sV2Ga2HHrRAZya",
  "key39": "JyhPjuhn6WbyNTZ5bdgsEnL4BEZZppTRab54hgN5ML9Nbx8UDUDwJ1KhkX7xDbgy7kJdGe159duTdFT5Qaqy6Zu",
  "key40": "GfDhMSCPtMrcJeE9yKhH4aa2DbDZxZijvsFDJ2svKCVijveSR6tVATAKELEZKGxeSQSrC2qefHZ9jTeaoHEgpQv",
  "key41": "3VG2zEJnUR5gUuUTrp5Voi3H736t6S9jRft119kwDjPhzNj9zbn75wiqb4BdsbmytkDmBNM7kay5mV6k3aEa7GiS"
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
