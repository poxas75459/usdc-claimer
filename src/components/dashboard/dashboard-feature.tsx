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
    "5hQH3BrWrhvJ5wnLqpCSi9p6hjyscDqzAzAPvMgjskFzqJmB51Ww1ijXukYB4qhcEzDptxZ4Mq49tghRAEMWPeqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMpyA8A7TArDNXSE3Eig74NFNYfb1QeYfuJsH5B1wQEZFTVCKnmM7BYPMcUgVqGbw1K45qGNsxEwsxuoKE3ZRDF",
  "key1": "4vuBxMRZHxNbSCVJuLPs71s9V51iRmtYMR3jxmkw8htdoawR2SNnDHQNJqr9CKsM3jyug18c3bn2fzPJGvWMpLqg",
  "key2": "3h9xwJ5KecAqmexEfjwC3X6KRci3XhxYJdGpMSKiehx2GgYgp3dcNkXTuygusktPS9zeQesBAgVRryHR5EB5yqjd",
  "key3": "5dDW8RU4pCRtDYPuDKHuisL3XJB3bJgtozBJtsjqYKvmEGJYTnu9qfLKXu53DTGzkMw69VfErrVgeXrcWwsPZ738",
  "key4": "2UukygKJa8Fm1Wc8ZFXL87Rzjyti2gmJNSbp4W4JNXRp4mH2c5CoRS9c6AbpWNnSDtsFarjzBcJCZiRsPPhVpre1",
  "key5": "4ZRyrQ3XpGVeLyqsfLmtYTvGyatp3oFH6G4XFwysgqip6KwSD8qQyqiKsjJFzwuttu6yiPxZXiywtFjK2Uf5UwkP",
  "key6": "5ZUwZMpLpJuhDH2AqSg7uTacBspk5HPBqbXiW8h9M1XRGzribqp5yxtttbQjJKq3mUNJhxywXSEHWJFgPYQdcAif",
  "key7": "5n9umFdxVU7twJCheaWQmX7ZxEB2NFR4ehmC2Vkb8SudwVXivBHXyWaTeygVdJG64LUDuEat6KFxZP8aAYbU2XEj",
  "key8": "SwacLSUX2qEGFkzPUQXQEv2kud16R4DL7YTXinFSsQQPzTzpXDBB1cRucnF4BLHhWTgFdTmW6FA8mcFautC2n2V",
  "key9": "5CFncdwscgTHPLm1DdfVLYTk3UsxSNYcuMvjsnhXyC2CR4opMeG7DLyLrfPEejF5DDbuCd8ZET8jnbuqewdZvoMb",
  "key10": "2tiTzAibLJubUQnyhLqh1iNvBC5GZBjgX9R8UoMueNpfpSKBGMomxY5Kwj1mtKPEEXciPMc5H393gNASM71LukHY",
  "key11": "2PB28HpHE3w64fU7ge1Ewzc1ZTLWUMstiBjgaQr8g7Nwesms8dfpJHhMFGu6hH6syziAzrxgyvuevRNKFC25LczQ",
  "key12": "pYxqbYMadcp4WUtSXipTLvQWhCueoMpnMMsfw8VkSwLEf9N1DQeT4bHyWuC4MkchxDdf7eQSCY9siucrkQYdi2z",
  "key13": "47nkKqDDDYwFMZok4p2LnPKPfE8YhK1PcZAQjrYZedMKNzN3s8QkwLFwDFrPtsJa2wxgckejzyPUbHLaGhvGgmjj",
  "key14": "hNKjAifY2rdoCz9RD5Br6bm53aGdKR8xzeLMcemGMwtGkX5h63S7tGUyvKpWBT5BYHuLSAAPzsbM9hYumadtjMb",
  "key15": "3FGz72A3p59TV2zLJPkm3H1NadQYFwQZorid2wiVMKhW95pPopE4p7vxLKRzoA87WkZw99akJUUsJbWALGak55Vd",
  "key16": "4PB5t6p17LyPqorr5NCEbHBbCu1PEio5KWK2W4FzFUeWjiu65s8GxePkF5PprkwXmgi4YQodK6JpLCceY4D39Xss",
  "key17": "2rqCNa3bTaZdmZqxS7RzHa9b7RLJb658pLNMYF9FLhTds8cZSkHu1oECb9VPZENNjfAzHyDk5uYtbRfgc5AHhegM",
  "key18": "4mxL9qF2DXfMBWiFwhFPeFwM1ACVS4jhKr6Joy98sfFNwhD1d76kJfhF6XEd549jQuEfTZpPgYjj6tcpp9JeUieu",
  "key19": "38fVQfHmxyrsj7e7ZizJQv3NvMaVE94MmiCYoziZgpXQA1qfx3qrs4fXmgF8KVZEL7htcC9VZ17TjfTZZ5EVcr42",
  "key20": "5Q9CiR1Kp7zdJwP4x4CUL81ftqQNfbP3EvSEawNuEqUkBhbhUiAeSoiB7q3HYiSAKBS6KmLTri84be6CKEjDd3CK",
  "key21": "3F5k5JDkTrMq9AiRmWp1886vbeSX4sAWDDiQ7BpsNh88qfaYt5TQ5A7WRCa7RLSGnMVJaE7qZkPcVsiiyY6LDZDn",
  "key22": "4ZkBrJgypw5ZZ5ec3svFCvvWrgsLddMGt54MXFegg61urm7UHvCxe1UGHoQXQiYgJ6CdxVRK8w7gk1Ja42r6KJBy",
  "key23": "4whah4QXe6bhdd11RoEFTSh45zMtmutuPFnHBDRKYwY8KveqQ6itTzrcjxX2bjwPuZBBuYR49fKFD9pDsnR8sEr7",
  "key24": "3AeKz2WGgesijkixi5qws3wgQC7gVqLKDVSmTp8q5bY6PFHNtEy3cYcnSVczxdELdV7BBnSXPfPPz5m3qkTGk6d",
  "key25": "v1ptAjE9YznjNa53186uMCaDgcaZojoprBuX1tMJn8vvXUK4YjkRjEQdQLbZZ47WMGi8M4p7zVRrYs57UYncYGY",
  "key26": "2nus1cSRYvRb8zv4VLHj9X2kRx2oHm6QMfVekzC74Pv5PfHos8ZLxN8kUxuByQbMt1JrSGpU7bS56ARcVLfULduy",
  "key27": "4cjb2hRU5qbG5ENeHNRQTb1X8pb9h3y7PaS8wQHW3tVZqXbYRYjk9cPSUuBewGn1mzbsVbiN1uz9WBNJiqV6RwH8",
  "key28": "5v7nYJi63K5ZaKUCWrKNDTnWzmCGr4gnxyJ9BgcD2SpN2DDAdThrSmKPs8LQxNmtz8pZoqytggRkEgwocTUHNCfs",
  "key29": "hVaqeBWfxsGwzkpJ5gE53898GcnCxARy5zV7CWUUThZB9dTofM7iZdXJk1Dz2838fAYYv1G39C9x1vPssGWRrRe",
  "key30": "38fRVDKSGjpU3nTCFK859t9YKJ75HLhHDMvY9uscF1MD9cqChmsYf4pmrVQo9Qf3Aad6GQAHHAbHzzYyGhSsTTmh",
  "key31": "3i8SLmGqUPmMT1FQD8CuMhc7VqzCJXMjRHhxQrtRtKeFCzWJ6c1iXf32qVLDSUmyaeccmvrkjycyNAHnfCKX4Skh",
  "key32": "4GCcMe3YQkB5RqYLhq1ak5vCh5Mzt1b95RBiGr9FF7j9JZjohb6Acq3otGuX7698qCvPChmhHR4aKjtfgtVBoe7b",
  "key33": "43gSb3s8duVKPzpGxWPMpPtPQKqoS71AsvgD1STUZY4aMLu2nBAYRXi333UpSUY5ngHeCdpW6ZnrcmUkoQ29bz3M",
  "key34": "57iUEUhv68QAihijxaowhXLAE7vCab1hTBsGiJSgoukcPe5JyTfvKfbSTVXUUfBaHAeRu23vw537bWijcMi1h9Nu",
  "key35": "4pgkmrKuAHSCngbaUGGGhoRQrAKuSMZ1CWZwcqhdjREUZXDGj1p7XNU5LjxDP6d3GB9BEQEAis8744nbUZ3XK2iC",
  "key36": "4L27QxVTnDkqouSZWCF45amkg9sWE9vBhBa7TkzsxJwqyF9rBSdUAkZCPLX3CTV855f1gq7gE3xtJqxsUnphiNid",
  "key37": "5HFWssioDeY3C6WLbifFBiaq6zz5nvgQFfAeXM8RdZNV4vgRZi9mx92cSMrvoSNAN7ZQQCRjT9WNkCXdvkoET9yZ"
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
