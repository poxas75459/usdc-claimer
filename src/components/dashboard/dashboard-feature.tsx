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
    "2pyz9QtG5ELnDK1kgZjwVgzL8xeATwgq3RKNt4FK6sS1VrqDXFXX14Hg483WozXacqoL97asqk5mPKQ6pd5v37jT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jkfLHgvLbmdzwZB2fWBLPMTU2J6MGTrAx49w3LNLDeynpVneeyp8Ss4xbFBC7LH9TCskVAMgzr1rKvh97nDwfes",
  "key1": "36fRn5xgJHVAtdUAp7GxAVqZzdEcUXitfEwNpdrqo8ss1fXYQ8SxX2Kr8yV1qZ72ZSCUCSpXaVqAEVa3qsAR7mwA",
  "key2": "k4n3jUBuMpUeKPbCeQ46xsQb32eqzn1NgufY4LPMzFGNy4JVMYPG5FcP3HoXf7iUGe8fZ4HTf5JJuLwf4etPgWv",
  "key3": "3Cmdxjpc7TGcX6wT126sxi2VJqmZPo1DdEA1trL24R4dUyGhcLh39K7qYN1bV1h33SijreMSaTgiR4puHn5Aw1my",
  "key4": "4oTcNr5gVyWTNpeCtFcyBQfsa5SMnjz24VfpZbFFSVSWoiym5bJch9d8GGaHJt2NEAyhbnazMyFbDQDeet86zmAy",
  "key5": "VAiSCVvjFT1HEUJfAa1tQsmDu4bf9wH4sJpmqz61Zj5AEM674PKPtQHMYETADcPujF3uK1z9VRRjymjGRCtMz8U",
  "key6": "4UfLHevLDKHMbeFowfTw7GnXz2uHtgCAsZe5dprrLgZupc4iaN9VV6ynkQFnv9GmQTcSGR4Y5oWJ1kbrchPCuhTs",
  "key7": "2331gU84BC4RgR52VTAfdATdiDa7eh3vBrNGBHExT6mFc4kUPwYcxejcEzgewC5cnsFU86CPSTAfqXgA6qtMqjp1",
  "key8": "cgWJNVZ5JymUqrMN9NZfEdYWHV4J6VqUDQzDUY4U5fsqCdEs4nUWHdD5XuC8pkuM1hkRTcvy7jYMMtNEHYFCrtZ",
  "key9": "7eK2PEsJeokt9XnYYowthzxpWnJMqfPzj8TNcHxj3AbanUZDFpaYvhd2RGaf2y9kpfYjQQeYFFYXhnNRDJMH1Me",
  "key10": "4rrSm8dZaEQhmwztvVm1UPAM2uBMfvSGSzA5ukttkuJ25nzyogaD5L4H6pcZwD9SEiHRAFZNxuSxirEqkwva6LZK",
  "key11": "2dka4mMo9KmMRXJqgKCoXm8Pj5QhCepBG9KkChfSBMTTNrHFjJwXxDRbcqojTm8usbvCcbmUUuvjqp3Z9X9pM2YZ",
  "key12": "21gEjPb8uSdm8sh51MeUGyNtYjfXdu7iTMAnQocgcaDiPUZTFNersuwtNtjAiETERNFwNpdNiYRnw3fdreGHAKi6",
  "key13": "3hFMpKHxkGu989k8TQvEmmioXwyhmBKdQuFHnt87JLWNDv5Aqhf9JgmWs5YRzEGm7VXfGCPJ8Rd3NGywWgM7xFsP",
  "key14": "5a9o5weyT4QMbDX9hm3TjXZBfXcqdtc2DSSfJPyaEwDcUQKiTQwumrsvSKRVxkB79Y8V2mbPz3ncFCW4UGoxhtdU",
  "key15": "65GM4qzB87jWjJwZsa9M9b7JgBiVAoDWLHcqLsnwsisoyYH3APzyZR4L4Qdm7pboFUZ1vAZRWRESsw4uLhpw5UeQ",
  "key16": "SNyBNv9Y6KYeLfztQkpGEy1NWjzGwvZn51uDt2JznbULiiLeFkVWFsGxQXwfxjgjn9HTxWMs7VWBFDYDiXNhQ8b",
  "key17": "5dTA16msRWD3sv2cxCL4vxHBKvjB5mVN5CJrNMJohpPzoJkEVexRaizgud2hNjDzAimEY2wCtPwPKfiXdaEZi2VW",
  "key18": "4Tf3e87PNsD4fBPZUAL8PATaNv92PMtayDyoPoZwgVCZSvamwgLEmDNwG8kuJv3PkQmgH6fXxJnWpaRxLP3WFoxj",
  "key19": "2y3TwvUifNwv3kDc5xsfcVe1dumgcwc79Thvvvce49HucH6PRMfvqQq3JFcPEeg4UGpYCdPT4tFik2SmCyWuH6r3",
  "key20": "4oBt1oPw937kMWo1me4R5nLCRnEso1iQgKZGNhRD3JiRXsbDCWxWKs2J12CorSE12YmEchjgQThqtpKkVtZsda1L",
  "key21": "4QsTktA6UgveKHWSBa4n8sPrHPMSqct25C1hh1rfLaLjhR51omx8oVzduFnES4oXtR8tdf8MsRrpFiCzMXrqxJo2",
  "key22": "3bJVva4yZWrCVGY6WvgS9ojeaTRy484SHfXMLNtCzCz53v3bMFhFPVNot54BsisPbjDDg6VHCzdaCHgQwwqP5zpG",
  "key23": "3B3TrcwrDcaXBXpbJ3Hzez6PdvQ2AWvg4rQqdaVaoRs8AcLCuQDDYoXcpzPHGujStDGmTnWpN286dWxFCwsboa7u",
  "key24": "3V1572UL7nRAM7Uds6AiDeiadP9u5H1M4a4eP5nvw6sA6tUbK3iVX2tYCAtpD2sXtJkZcYrTxccXstrJ6JrRESBw",
  "key25": "2fFm4owQow5WZ3XAopbtaeJEWUjG4UA9zKxMS3CDWHTqXJ8xLgostqqBC6kEz7iWouKHyBH1D3iEJAQEbRo32gKK",
  "key26": "55o7Kh2o8WAFECm3LHpdXXirFjEGqFecUBaA1bZgdTETnz2BY1dskKkQmztXH8ZUA81zQ5N2fcFhR2vfKUcMqtFp",
  "key27": "4FdrJQJxk59uWpoTMsMMtsuzBBsL9PAzSALSWyM4Qf2NHzvLK5FRZXEsrJTtkUVvKpmyQF9Sj9UVRWLimEMdxuez",
  "key28": "3cnM29MfoedCg2UpFTQV37nzrMVvN43hhWo4ZbFSE5LwmuctX5nLPD96yMk9Q691tLPwvRYYeXv5nnavfLq9EMpX",
  "key29": "5XKHaiG3Gf8ax8vMpfs9LXyS1GchsVxPjmwcahPYq56hZr4JN9QPjoByudorkNaWXLZYDNK7FWPSUSpFXMUTVHCP",
  "key30": "3tgSKw7QqGuizcaeUcbFqFmwuV1P8BmB172xZWbwtf5ubugmSNg4BN4yeYAAFYqMG4bJofUc8HXuGsBhZxZCtbcq",
  "key31": "325CZJtxiBZuruUjXUndF1z6b8HHJKkj57CtGnUh8FkfYV1kLc1WxgErbZnZpNk4VXKGLH8W11gC5Xh69E2hYfaa",
  "key32": "5v4NVs8NTXjd4NhY9nc6q1KToFJnoZzmxZFP4fBFxrGY8PJzKuKRaEkGmNYZ8dEAvwYtqL7NFUrCKrTQKcDunQ67",
  "key33": "3t8mf85JkMe5bHQRmXdeGCdDeXSE7sDZrYDkDtgX49Xn9ZkafqMgx9ddLExYYfMi5G2MjGPkL8LZA4byzjL7CZzJ",
  "key34": "4kJEgGL1eVJRFWwE8rUnUBAfVB2oP7iQvsksknaQxeaDMaq7qBT42Lqd93rPzFay4jp22Xim21VfprSZwWGNkeGt",
  "key35": "613hJ8BpcFczx95QGX6U3GohoQJ9gHXz6RvxM8VJHU5qWDRj6Mg7xRKJEXdqrtzgePTizEjss5WeMRGaRT1yz3Fu",
  "key36": "2DrcqiBDtWjC6Am5W3WuEgzbALRNfFqJ79RCj7MxU1wdgQ21x4QeEv3HLKYTDuKXmaUk86t9XkpANJ3NZkTNAqjH",
  "key37": "4mJPLZCGtYqGH7sMk2qhjN3ut4278U3ckF6K8x9AqwMEaqVi3vVeKVkbHb7YM5c1ShwVVGtDH7jMoUZt1esLxqNh",
  "key38": "4C4n1WavmF3FP7ZKFdRthuL6HHavee86ExrcAe3F1H851gUz9bUh64YyLnZivYDTq1m3uua7rV5BzN9xXcJDAcHq",
  "key39": "56aqV5BGhZNLMMhoLftfaHx9Ab1RHJgEeQthu38BRCNBD7wteUh8KRGuaXEsJ3cS5XSzngZqs9Jj9BcsAkpLrgmX",
  "key40": "hPGYoxfjii3LqQCzz411cQFgL1WKNmbxsiARihZTq9nqosQ4py3UUoUSuR1PngdBPhFL9BjzWF2prvzRBDo4PmT",
  "key41": "2xpU5j4Um1FSU1EE5xSZYUTYqAQAAUkDMgqED7Pv7hYaePQMuiXv5HjAVUo5BHTkhofCRX2rxHmmovWdXV3dXRsu",
  "key42": "4ApJU26vp5HvRVuYdqpvqTf9pG68azynmeCsKBTiUn2EDSbod9nTDHfJoL9RQrT3fDBu7ksBuSbT5ZMtK7V9CQt1",
  "key43": "QAiVfChJcyqB9kCtHv12fgEcdvj1hWi6uXGepLgkn8ehMA1ZDcq8hbpz5bnSFfoRyPXHHnraRNnENtaMb3DE9MT"
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
