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
    "5QRtYNNPdeJeDrfCbsNGQriGauxQ69kUE42QSXbbGeozLA8z4DEopDhrqjj7MVQGSedtwpCrrmYtPnNfaucuXnir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yrwRaSxHhVcRxMzMrAH3FxpMr6N4HW8iW1N1A9ody17CUackkD7oQXDo5va1NvR3VynwYCv1CYqeVNVMX6Kwub4",
  "key1": "64rXjWzSG7N6ffDF3u9kuHN4BTagmaa8PdG1fazFV5KYpWQDPG8bkL3YirC6dkE2H344hCbcEX4vQwMJaB7QDxbH",
  "key2": "2WvTQzkhfzCSW8uwjDHsQBnajeXvoPoz6W29bKtnhrGs89wAbCPozdpA91jqMEJLEKR5heRgCm6zqsbLyHXjQ8DC",
  "key3": "21mJDfEw2PJ9w7cNFyupEWeTd93zQ79eLPPodWLDJPkaiYy1CN84bTpucG4fhHj6GdrsX3ZNFywPoStwgDHSrGWj",
  "key4": "21G6pF5kMrZDryUoGsPoCPih9yhiURxQbapjeYmwNfTfSeDscbrFqfM8wCePmyh1wVmBkoFr2KokUgqAmprqv1dT",
  "key5": "5itDPZoKaosj6viwTBnGasDbNNswNq7SG2Biujqgjo43kww8SaHLSmBsWYrq5B7tJRBobtY41zBRdxCr1kqYB3qW",
  "key6": "5wXpbZsrv7DcYHVznAbpZjwGRC8XQCjXibNKoJ3z2w7p6XQmFrxU9S3kZuTZucbYsRXSZzLBVJTsHQ6K8cv123CV",
  "key7": "6zfJBQGo1rZcTJcWSGYVtFCSCNccHw7635HJvMRLd5avxsyVi4A4uY81NCBYZ3Ewcu7E54sfgnpVgYiBGGDdUuW",
  "key8": "2sRQHtXxD5vR2yeJ4cb6nM4acFYdQY86wJbuX5aaicQXN7KvQuv7F4mEjZ1tniHHgJcgFnkPCTxo9QraXKzGox5p",
  "key9": "NFrrg3FoPHcawFLT1eduCYMmB7XN79UXrWyRZ2jMxMKWFGB3x8snXYYzTp9yVvxdK282uSnnoZzNy5yp8LkPXRY",
  "key10": "3Pbk6pXj3C3a4rHD6Bb9mcZ1UeDCgRM9cCF4oNPT33L22nPoWzoxbh9yXLRwrs3m8gxCcedbAZ2bjgmRwphtrzRK",
  "key11": "2J8J17UwG49kzeegjcyfx6GuHucvMDLQReqaHYN4C7LaCzGUWHxyfMLezE5dAU1kV34SrM4MqDRokF4Kd17QDaiT",
  "key12": "mrmCapyMxnBoimmh185dSN219gHa2XEUDKTDv9RzQciic5NwhBzSLMgVtuuwQNsxSUEBACcwUPvvbmwegeSsAAu",
  "key13": "5FstALtxpLo5DpxhxPTw7XTE2xGQFSeGSSqufALjxGmRWpPsVSkHQAVkDuVN74a5LiNu8nRP1cp6HaYZQRGuSEuZ",
  "key14": "N6sdYpvNuieYfRgrVUix3tDM3jM88LniRNLpYRC9bzf7u35yeeLrgGdDtksb22tDrPj8D1SgKcyxYJotpjLhFpj",
  "key15": "56hGBJXFUAqUtx1kvUw6FwaFedPedHZS7SRvJDhGUhKSht8iuyKtkoMNeYyFGXYZruS7Zdb69gFsuEb2x8BgfTfu",
  "key16": "YEHatcxx6ELKdgR1UkVwdPDRALLYgMdZbaYtsc8ANRzR4dTyV33RBnzVaMLx4r8GBs9V9oV6RZ5bpmMKevt5y6G",
  "key17": "34Kk2uonDisEABAsPhqkj4DPEWr81JrY5j8sJXk3ZDupSBnpBGVRsWz9VFGLBThMXRjdxFjehMfzpbazFkp9UgYt",
  "key18": "4EVikjmvxvouyfzjFwaVsQAKspJMEZU39QxJi7hDCvRWz6oMUPLBJeNR5h8jfCojbofUmtfjHve7isJeRe28Uk7P",
  "key19": "56Fdkonn1jNcpnhPu1DTTk3FcwtREWXm1R8dLjmBEYTT3hbuvtjbxugk438gM3Exc35pDwgmMMqjqFmWEqe55gcV",
  "key20": "24JqELULsrEifTaStxCXGLnAKp4B1HY7P1QUMA4AB8d9b6YxwjXSsmgxiVfs3AyQdvLmtrZdrVESThja38cNKTNL",
  "key21": "24fUTbjpSd8H2Amr55EXW3PFmGm8y8LnYTp2TmpkHzGEkTSxXEd5eJZsn2WP95csDBowetvzhfffwadcvuCarMZL",
  "key22": "64yG4cTDpFSFFq2gZ9pZdpXxvdG6PRdbZ6FBFS4JoSsRPPc1AMCd4Zt2onk4Ax9ediNKu4K8EQjepBSxhm8vJMXy",
  "key23": "6E36219FQkqNqFK29rCRnG8DxPiGJoNW9hQyhtVojjxxzypSrxgYSDJEuYXds1PLCZ8zfQHZTgRomdD7wRhbqSj",
  "key24": "J2ErvwapNPdRMMij4vpzEFQfcJVkugKaZCnm8qgt5rBMjdgn42xSarpbHzq5WKsFsbdRYY7p9tVKjqt3SnLfUgk",
  "key25": "5177AgeK1LaZxbxd7xFqZVb9g3gub5dQpAzF6euKwJtbAyx44NzX8MEMmhvbfSAQkmYmyV2pFTzE93617se1jppT",
  "key26": "31SmQcsX2k5tEvSDrwK6iCyhzJtNUhHjnLuW85Xt5DFUXXSpdh5Te1sNBs7R4c4HhsR78hX159RE3bpuhr9ateZu",
  "key27": "56xkCHqBLrCK5qKNYPg6mAFMZUU9T1NKPfpFKLtPJ3tDCRWcJgL1e2KmiqQVxKByPCqhGZaFyCj54eqZTcZBA9UZ",
  "key28": "43c39HzXvPnThvnRwaDiMQgeMegyvyBnvRFc2RK5Y8YnoirkxEJy9FwToJiXioFRp6eyePwv8oSkC4j3SVUTKAis",
  "key29": "2Q5ALCB9VXz3d4eyxNK91ExrrzLoVNrFJcKD7HCZF1dDvwa7UsF1EFAcGzkiz2cgtHN36u7hftEZ7USjPxJ4YgHg",
  "key30": "uk5H1Gy3HpXNFgLyhXEsze7yTNssW5Aoepwn6413v4PgJwJDpcfxdNHNiX7Gh7u9DJT6yznncP3T2iiik7ENgvQ",
  "key31": "4DUFFRiwzFwsjWF2wZe9dohMCVZv7n3o73y677a9YW9gD2NAyMnSF5pYp614cU2boy9oyC31JqTEUhgSRt3Zvq8h",
  "key32": "3z5CjQFZfXyHzADdryA6eKCdJTYVN4vvrPZDhEFWXVMHLf672MJs7bHm4sz1tpC9Y3bZojXZa8ohfPiHiDQsu2Et",
  "key33": "4fViU8sp6SKJkoyqRGGo97ky9dWEG9unAM9TvF4k48Zv8LRvWRQLW1MPJxUqEQz9656BSc5jbYy1D6U962EunH1i",
  "key34": "vRJjy87deBVETiigxGLfaimaCehoo2JKmkHim8neC8NPyDmipcLikDv9VTUvzdyywBgifrQL8csyQCAeE223WDM",
  "key35": "3zjK27QcPo1hGC8NrLN1ytjG6DZUVpuvG46guYXeWqWgFc81hCBhyKxvyvzi53rxRdXwfFw7rS9k4rcpoz6YZoiM",
  "key36": "1QXpXzBd6PLgeZGqbfv2Z1dUqynAqJR4SvbA8P8ZivuwJhQmFh8exWnxwPPSAaPvWVk9s9NfeBbX5ewEm9fKVdz",
  "key37": "3mFywTBzTnWZ6eFBXwe6Q7yAnAKkyfyz5zh82f2fQeyhmrTa8cbsGRLb2u3GJrUTX98CRKUPVhvdfkoQ5nqK3Gc3",
  "key38": "JVrfM3VDjZKGcTE3bWjSNJNGiKoyxm7damVR5uk3XhyQLPEgmxiz4eCfMGX7Uq9Lo7GLvUgjgjbaf5SX6xrKBfY",
  "key39": "wtALdfBgURAm8b4VRP9fUXKR89S4UwtjnTbmpa52Cv5hZCezbHij8ShLPRywAqcmyzvcVo6ZCVdDaQYoxdKw34m",
  "key40": "3Jhys16ySzb31CZwEdnbam25JUSNzgnMDX7eWNYt1wtWeT4PKmprsdqquB2Z4fj2J2fqprN6XsbeTkDG89oqsKAa",
  "key41": "3wZEcDeSMr5RXwCvpbUtH7JNk7iSdngZpBtj8hCkMicT4gp5vfJjV4GRP5uCJo7nV8o86DEpFhhC3jRUL1uHbMdz",
  "key42": "oYvAkBA7f67fLtzbSsM7Ly7KXSt6C5idPVnRABFLbYQonzDtAuF2BeLM1uVq2cahbo2d6g2iTTF1RGYHFGcRLnD",
  "key43": "4xgZQJstthPjQXwQHJgVkLYZVYqfLGHqM5cEcnzcGS97fHZLL47brqh6siSw569YTJtS4ui6wkQvQNMxoLnypL3w"
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
