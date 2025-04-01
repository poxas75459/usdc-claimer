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
    "2kdKc4jr83DrFBwDF1XC9Qg8Cnn2GYPRy6oMFQtTKvpT8Qpkn4BzTiBmBh7aEwNFdrYyvLuSFhk6HJ7KYtmXbX2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Xm64tS5ySb5yhEcF4F3KkBJ2emvwiTjTVJ2CUjznXnwv4fYkauJLB8Pcnq5iB85Z1M8R7GUEzT2LieGATScXpW",
  "key1": "5c2PN7oPs91nphaT8cznfZazSFLw13HE9KYhbdssSvcwGVwhwgaRNLbx2wpa7jeiHNgywScWndSaiChWVMq8mNLn",
  "key2": "5nZub3rHMEBiWMvj3JhpLM8CoxnZ42CAnnfCixsp5YVniCApP5if6cXAqAzMiX6aRskrRCESGnmrU2APpafp9vEa",
  "key3": "4outtcoHBj9keDu6aj6eaa5j2QspAmzXrzN4hSWZfWtnVAoXxF6QKRo5rDbH9nF7MtGys5i9QV9oMDfgiqUYGjsd",
  "key4": "r44zftnZZoB9Zze8g4q8kh2DmSiG27PkkKYoo4R1HWq6uFaWcKuRorVmXgBXL19oVyNLmemHNpHdqSes9dQG7JZ",
  "key5": "2L7S58AzbzQ8BH5XdNrXWaeCkQJK47GCtHdoJZb2ERZ6SbH1rHbTyLN4G6mMKB7MEr3qagMwwxuPDQZEqP3qHjf6",
  "key6": "3K9k85ucBZnq6DaxGfX1rwNhnB5KZi54CMo2Z7kU1UYHavEFjvNRGr9EaKRp9R8csbxcgPykuAZPt4QBwNML3u3C",
  "key7": "iDvfGWtcfyn2Vt8Gk22aM5kVrUFJUfokj4eRnGhDNH5iCd8kuV2chjemCcifB3zHS352J3b5B1ns2BLqSLgyVm1",
  "key8": "dL325t54nFtDwMJWfQPULRdUxGNU2zotbW6WHrsCn9b6rAYQUxLf4J9Qu4FcpMQf3tAFHGcFJFo78ekpZT8E7u4",
  "key9": "3AuXVCfvpmNRunAwDyEWZxJ9gz8okCiWBoZLccr1yqigc489cQAthAkaazszpyLdbmWVvK7svvFKX1vDVUesEDF3",
  "key10": "2QhHHSa9Zwgg3AEBnUTEhAhuYpH5SEwJq3o1PH5uow4eG8NsLmgZFnTKv747B9BWk7JpM3kZseGt8EHk4T2nYGVC",
  "key11": "3qikSbRBJnpXr5V66oAiWtvJGexVbdaPfwAZYWjYyLSfwr4RnohBovWBYh6cHYatn2F85zhtGpzTA7QHdLVH6oxB",
  "key12": "4k8nxN99tHi1A2VeaXA7iDs1RgvTttdX1YAuzohDiG55fBJ2nqQSLLL88vw1hXAznDf5uoihq5RUPwHkLgEFaigy",
  "key13": "4iBLw4hU95fRXjLdmAkhFuRUcnQEz7TXyfjqBfPcR7oSgk8vWCAYRKWTCgj8t3LHvsneGHeKa2avcuiQF7hbtGzj",
  "key14": "4AJfnw1obEDTskMGrTK6Ftdu966phWDUMqy247ceSQY2GPQiz5RpcHe8jqVoDqDj7o3y9PCQrTEUFPD7EzKQny21",
  "key15": "3xH5edTvc1zpKm9jKPYCRSavLvchQ3F3taMNPgtze5pegqUo5JuE1qMmfLdjRbw1RAHwysSTeeiaDGeYVixgm3fZ",
  "key16": "2xPbTnF4Gk478SNhcdjPYCcnHtrtVWD8cpD1JNhySe2udyH7723kLoq1uj3odrPo1Zf96xwGgixjGakEKeBbr8x9",
  "key17": "5RVThwvp48kFXtjpBRA9RxLga7yr55XFpRMmzsAN2RXy8bAkNAqzxE7gJBuf97ZiJpnZ4rQ6SSyT9AznvDQjMCKt",
  "key18": "3N7FhCocE57xQKSWkD6FCCFTJfQ5suz5AABdvdmyCcj3FQnctvqMC7Vh1R3MeJSsq5J7UPZUA9LZZJTctXSSL4FT",
  "key19": "66z6JNgLuVw8zVzqdqcGCuFX9892BLn9i1toEmbaqHHuCCv2onRNnQGevNhtxuLRCUDgu2ZjxF9zB2YBGWdNofsL",
  "key20": "5oTRYTUVMKUVg4VoC5jqSFKXBHUax1ePh56E12CnjJWCPQiyRibBLA4dxtnhumFtGSqmNaa24AEZMFXTo51zUfRY",
  "key21": "4X8gVLmVLU5XnsvPu6EeBohF1Jju6jXvG6QjACZaSY2tnLo4DRMNDgspqNt6Y5x9a3UXL1KwbVx1FFhwWnSsYn6t",
  "key22": "4A3Dw2juN9eZrdzsWzEMzWP7gsyfHuEfrmhb1ubJ3TV3koyNU4Da24wTqz3BEK5LpwaYQiKq34QQav8jTeZkz9wa",
  "key23": "4cTcSGGbstW3egxorfnkLLXeizajfkUKwUFkEn1uuq1xiyeg3dGzXX7R5wqkbDwEWJgXNLdmVSxE6oibwDnhBXRA",
  "key24": "2M561EYW8YzUYcma8zQqud7wJNP1mYJuP9Eeoo2SvGF3hnJW7nuw3EQ4yXGAWoeETgbAm3JGbnPfCgqyieaX2zNV",
  "key25": "2rpD5fMe4ZmQoMa9sin5WMcZQXacGzquQmBcuXcJaEF7qRLEoQHjTyrr5Fx3TqWCrerjsxF1AuenvTdGv4aUeqZs",
  "key26": "L1hqY7MnjQp94p1n4u6WFbCBFSEKsq1Ai75i3F2ox35vLwQwRmxgxAspmxFKLjEwTRDN7ztZh7qv8oeQhgxnCqJ",
  "key27": "2Uv1oy8s6JVfEXXRrtZ73EwKfBCU72j6GUpZzgm5Ch7cwBujkz9FGChWkxThsGPhzhaTFrVULCFLxDimqvbgYwtc",
  "key28": "LTpUQKHir8vu2fvM32UpnMLQ9VnTT6oPzhqYLGYZnRFH2ufHG2CV7928fmxZgnAcMZyTjs1kPSCcDm5kc4poo6v",
  "key29": "2F481Hx1y3dAG1Js4CAShHVPyYZXRijccrP27MqDSGSeZaPeJEepuiQRNaCWhcGuZSdhJoQDDy1iyPzL7Vka6Mme",
  "key30": "5HXja54bZ2Um27qy1AJughinE5sczGAmKP2kFQupvDjUt69FDYRRuk7QQPLKNsotMdxYgaoruGWgxLGNap15NKy",
  "key31": "2FQD7KkjuvXXQCe1mmcfmEnp8BosLBJkgJW9Wp8L4d9Ms9NSE2eyakfpVqT9bvuCVstAX8ibTk2Bj8Ma6teh55tK",
  "key32": "61MivKZ3LvxpiJfoDnh4CWBVxFbLoSM1yGQiYA3an8BZSKgE9LTdNXiQhKMBD7QuGyE8hEkLA7UaF5TjjtGvdMGU",
  "key33": "49Vmt8JxeSLNfomL4vWbvpj1j1onYZaqjb5rLnp4QVEshstJj3A6yRrPgUHwuhgMPDEbfcG98vTeNt1jV2U6q1Lo",
  "key34": "2oegceZPSrJTXGDjixRuHjUvmuRNCzL9St86qyBAriLvovLaX3GsDNkP4QroxEXUwh7xz5XGjADn3Y51sFLoSKhP",
  "key35": "5CxmxtBj6xg4jrEb8XW4Ujs5Bn53SvA6ySNHtS6VroApaWHiS6acLfWeGDZfjk5zRdWbXEQjsMe7nauKCNzDVdw2",
  "key36": "5ZFCfd141ojjbwkazEfkGZXtEq1fN2VsFZKQ67yj42PRxUoZY8TqAANNJyBz2DUnnfoNv99SngmiDsDTJF9mv4TV",
  "key37": "4SF6pwZu9gckDfpukfnZWdcd3SXA8CneTPdhkRRbEPbxEZrWtqVX1AKp5PgPpinUm56qxaZLYMriE83KZa5DEVAd",
  "key38": "3JTUAjvs6uzgXp3UXC3jooXewTpfcUbmR8hZAwGRSe6BPqeVBw2s94qELBkPWJ88h3paC88ygPRD9itJGD7CzrMg",
  "key39": "4ZgXPDNmU2N3sv9E8rj8ZFcDf3xxzbh2jsTaD4bhEMc7727Q91y2AsEavSJinwEZrb4Zip5WbL9hbJywMW5QS6td",
  "key40": "3XiUcQSnp7WuMNkzVZERmz5zQqX233XseafjeyKKrUREDQpDbKbYBJw4AupfgtixSdxGQhZeBmUknE57VszdpAAg"
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
