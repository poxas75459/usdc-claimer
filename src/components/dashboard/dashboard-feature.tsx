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
    "3Z7LzUk5Q3dt6h4gEUgL5w1B7jb1GE7VyLnt4oyx7Wceyzr1MZbfkcHRX7MZ4Cm39mVTGpyjpaMiVvFuT4NqTDim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65wu1Q3JRew3tioXhTxTacZfhRnVafcGwkU1wstpb17ctxcVmYse5J655JzxAw3MxQfSwb48zcpqCm4dXF5LSVq3",
  "key1": "2eyuKKod7DmtGXoFctQR7tGSAaSUE44p9RVk3JVStGmNaLAZFJzBjfiZbpywMxivYPFh9ULXGpRBZFxvBwwsHZZq",
  "key2": "YGjbagKRqZzd1y5hgJ1ArwigNBg5Yt4McX4PifuWwdUq31xSy9P9wYfdXbLrdrJSywirp2DiiW3fy8HhamhquAj",
  "key3": "3NwuGn1GezwnJWyLHZy732dKDfNFdMa9B729hwhd7ioPHRobTkS3FFRKdrBGhGt17evsBMpo1Km6HZKwTpjzptAn",
  "key4": "5aLvpWUhRNkY3ZegZw51DfVKKTb3BZRaAU7XEyoTR9QvbPZ6WwwCxJaQiz6yNB7kyjdSqshMs9LWtTG8H1BTof3f",
  "key5": "5BfWmDPjxsKXsw9VwzC353MMgh9aSNv25NnAVv6cHQeaL8mNbW4YVePjRsEaogzCMmVr7hJBTUmDUKzH12cEqrJH",
  "key6": "NLDF7WF52SYK2sAPMekRGepsMPtbgpPcnvwwFfXxFDnoWr8YuAzqv7YhH4h6DwqXQR1cUx2i7zkrKW7Qm4wnnDd",
  "key7": "H68qHZ1ZEmHuL3EuWZRrDL13RHPyWGaLzGk9PHGcnFQvTtgRn7xsiK8FGGuPTCvrLcyPjCHbEJ5X7VGmJaqp5uk",
  "key8": "3xwcHnP3Ljgc67RMBRFjKmHAjwxsg9nfmXqmWWog8h9jyLsCn3ByecBABDBAs95fNA2Cv9egCuxxpod5B5ADXTsj",
  "key9": "3s5uCPdVdWs96ba7KX3GLnZWRFDvNxvxYLzRdHSrvDA5UZJkzmGRqPMu4vmnK4wBZTRpqE4EwBH6N4DDYX6UCnk9",
  "key10": "5QqrCNRCDAoPwB45U76FPz3cJDGTJgBFbN7qXEV8QALkuiNKZ8pzpUp1ENDeHnGVXNNSjBYkZMui6uDcy2enY69J",
  "key11": "4vVch4LA2txAxpLq3yHYCc7SYjdGjWoXw6RnpLrFCqyUcH6JThYRSPUZHkgAyZMq8BCkuncgjbdJWexYRYgDC3CK",
  "key12": "4sdf7xTe6MH1pK1UTDPhS5pcUonMHmUr5TL2mt4qQAGkaik7M9tp2G7pWMJ2MGqfVTNkzvUssn45MmMf78hZEgee",
  "key13": "9wpFhfbJMkd3LFta2QnLxXPU1vWUAFDht3RHvN3DHk6CfFJ6jZrVph5tQVpu6XBs88RgYkWabAcxVfUFPN1tTNf",
  "key14": "Fd6mtD5t3HcsmxwmoeGvvgAP7kia34hSyGGz7YoUNbQEs5d5eyCTroVJWXNdcYQedEYtXinwj3vJJXShobkjxPz",
  "key15": "61z36adbL4e3pgrgFNT41F8urMvBj9xAdgqXNGJcmZEMgCxdWKQKnvNMdZUXUDmDvHDbF4VWpJsgCrY9i4P3p18f",
  "key16": "5WsWKfxCDSDXMfX3S8QWAvCXTNGqZNznAzJcA3YZd5ABvrQzGBNZpDuGAz8SfLmVcHitZVHjh2FQvcv8NhVuDNS9",
  "key17": "3zfnBSLDJrfVitYTqjwDpvW9k2Mcoj8tuBkZwnChWMhaxb6qLV4D7rktSbaUqd5ZBQaRDQX8fc62XLVsCBkTuj1r",
  "key18": "4uAfSYGiuY54uYuZeMBp5TxRxDcgjSwnMvVGCp2yyEvhphBwuve8sTt7eoA3Wu4NFTzWRycjBXTs5dLZFwsg1LU5",
  "key19": "5PYCS7pDz3roKhbDGgcordid2doXBFgwT3K9TJDrtXZJ1Bz7ycXQiosY7yPEVu21z3G924oNkpxAfvqYhAHsxeSW",
  "key20": "2CVnqKtWi3cccWMpQ6fDUFoaCYsdivNXAvyfZVjzVSXxvCajDrSyqWjxedmipS3AScjPGmo4LyThCADwtoJbJ1kt",
  "key21": "3c2qGUDkC4M5B63PpAAHSqM65yPrp1z4a7ZZdyaAL2cXfUfxXDYUazwBCsYCkynYaTuv7upWhHjTRQXZSZ3ZpAvH",
  "key22": "5rcSLGdKXxN93bMt6Nbje5MmgWSUrrpP4kSc1PkdcoQwHgQX7GeNRfGcJeHsYt8xswm2Rqa3Af14D7wi3fLokwDB",
  "key23": "3SSeFD77CaNtrWotzigdq7NPY83PwgdCnYFLDhs8tQCUoaL5FNMFgKULrpxUUrESPuwEJY8Zc91EGD3VCz52y5b6",
  "key24": "5tC1NDKmHdH8SbaTxSEy17VR61L3eD4jzSGVog7wCJku5ntbDe2yb6Z66MwE92rLDpo6QSHcuLDBzZbuMc4RME3v",
  "key25": "TytExhDzfL8i8PEyUhqMWiCV3UcskokUS1htx1ykfLX28VBruwcT4iLKA96UGYFsjoxLpgk1UD9Ch7go67krhr3",
  "key26": "5JA1waDnHC4GfAkiow7WThEgpnnVSfJfCsPyqTRM4PeSSBddtnqRnfiiLbUhhLaNnDFpNQZpnrhkReLzhVehSwSq",
  "key27": "KX4z9d9sjrcdhm4ymbSSSL729z9EPrL9955h2EonjfBu8HujtSbGBjH5pWWPCA8azP6SMEHM3PPpUAJho56sv7Y",
  "key28": "5B9Ztk5uws1WpJkk12U9HCgbjkKJbWJX46RC62worPKbikqVZYuw3GeAPEJcbXYTRDXEbaC3aJxxchhhv8PFPrvw",
  "key29": "1RJBRE1xSKVhMeeD7vRFJrrqkJe2yvrzfE7JCMpsZ9C85JB8aHrACJ9MKQAkttpTTb1mk9JNwPAWwVLujTbEKvD",
  "key30": "4sFvxXDjtY9mm9rar3BpqjJLon1M8XS4rmto3QL4XkpBCVxYb7ywGhKLsn2Sigo5LdX82JZEhfXTnvdKT1LcHrP7",
  "key31": "5qCf3BzfxDw4A3tYnHKoDu9TGDtEHuTT4EQ6cUGuBpQrFYKCycQvLq2f5JaPfHDatnSnEnwc7S7kDvciMAoUXbzN",
  "key32": "3yCED4XQHS2sNW53yR2imthwnxar2NwrzLseHUfHqZiFHpiSUK3yvFqzEHZz47YRNe28jesJGjqFUSpKV8rmhsZm",
  "key33": "uCpttxxQgQ3W7ZzpwzJieLA4M7hi7bZbETZx8zjzi611CiDMNGWb8bmTWsv7AvXTfSYL8RZ9brmdcZmbC2Gskdg",
  "key34": "4BwLhH1vrgfuWxHmqBi8smeXCAZc55R7uPtUMcxwLjWbNcCHQJ212ZYfDJ6fgFR8n9qPuGoiPhpkgW1AfN4sLpYW",
  "key35": "5LqeiXx91RgXug5ZGcswe3xkWinASRGxSzW5Jm4gDhDmxZHVGvojxCRHGejXy3DUoMMmFSbrGUvRiZreUdkM8Upm",
  "key36": "2GXjqQHTGDqTj8YHfkebzbLGScP5zE8AngXSAAM8GyqRw7g3bggaTbviHmsuDHtFmUxrofFYWuEnDaZfQmcoTCUy"
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
