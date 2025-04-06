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
    "4TyB29emHv9hDJphGbmrkmjMaKF7g1f3bdgpxCMqj67USpyfzXW3YzgADRdPQuFJ2XjREnmvNMDa3TEqqmfJbjT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mTb1LfbypjWRxeHUxr4kWp8H6ZNDrp14ikqjJFnZY5VwwQF7KRuEL2FVqAcXG1D4KsN448f2ttAagVcXgmXsG2a",
  "key1": "2g76BrPi9J5gEbebH3BxtNhRdHGKxfNd5vwCr4jdx3R6zHdEUnaFUunEehjxUjzmwFDqQQLWtSjnwmn93sMoqn3h",
  "key2": "23CcpRyLKMKAfXB8Jwi2MvbiNA7mVJAfUKCZanpZvtHfBKS4u3QrAbY66PtuEjPeiy3hv75DVqw8X9f3FubVmpjM",
  "key3": "4XNpiRwC7b4Qz3VxsbPKckskjbD6ieyTayBPFt3FW7ixN9oemLBeLuuuCeJ62CgudtnkFJnmBDtVLhc2x9Rir21o",
  "key4": "2oEjQpP52rwWbM945FWZkTxbcUHM7NAcUPMnnKQK4D42ZFFQKKKZH8khJ5rUL7n7JmQL7nopHBtJPjfHw29WbiYx",
  "key5": "xcrD873CG3BBaVBpGj3LV24cPTVBH7mzTdDrFDYcRQX3dGk2AAEAU4t1M93pWWg7Mr1JSELBmZWEBACiXMgAcEB",
  "key6": "5knfq8ScNnXHnD7RmmJ8FH6yaZtcAtYVnLbahHE3TAAq1ZWDWdV1WEqkxDiSVPdgHv2BedtpvSj7VaR1gEhC68GR",
  "key7": "4q6F7jPkcsVRPbC79ZDsQaJMEZ1Bb6ufJeT5Q5cwso1EAoWLeLVAMLEFTf4NSxpUobPH2iY71kkYjkKTTSm4Lrv9",
  "key8": "3JfvmofkBfp2KpgoviFZhQkuMYCmQZWjzHH7MFfsHGkXzocFL11ub44EicsR12KyfpxhAKpudQwGnPPBZk9E6vnH",
  "key9": "5GVtMF4ZwpWaSQMbrjpHYVg3kmTJDs19Ve6Yc4NLeM3sawevCeUMRTiKmtJBBHTXtkhksJCkGGV7a3CuwUGDZwQP",
  "key10": "61r6CafANp8BovFbdsbs5VChJpBkPdSCvPoba32tHcqQ3Mc7kTUZ5KN3UmJm8kUSCMy1vPsAFz9yzqcTN7F5MqRD",
  "key11": "2hwKn7ZnCiRQ9an3aeJ5mW2m2VWSCthSLEHrApFKuTBL7MfE1VWzLWD6Zqkk219qM7cu5H3WSuCagbfBtgQzpD48",
  "key12": "4FPoXH36BdCpr43CBJ5epCV9MdbNGobkBB4gUyV3AmMfAACaS8oHadBphN1JsUtUNYJPQDSj81D5vbGT1CBTxTLM",
  "key13": "3hzWNJaLUXygMUjWSsQEmg7WpDpohbaNNDjdNUHPGM4biqHSJWLKRo44EppPJahoFmjtbdAnqSGbwAHWYmL3TW9d",
  "key14": "8L9zPczWKV5zqJFAyFKNUkBAK8YKRsVBEzjmvFM8szFBY8R7pRnTJQbtxD9qdjE5dPsc9z6yBFfZoGBJBQdH4kw",
  "key15": "2oy1QKiU6iudy5nRgky6gEnpNAcFCtUj3J5AE5aDV2uLCwnaZEK9fiTq1q5w1HWifRYB6bccAXhwPehmtuNbT1j6",
  "key16": "4MJYHZByCNjGszQfktnruMnJdtofwKhqyhMkEQeKECo6PBhqoSFUkiB1VauG8S6j7PR5iprTjhPpzvzbGYFgvaKx",
  "key17": "4PBY5ukssfCLa72DrSS1MCBF8wF4Xad6KN4C3dcSUkm9zdgJ4NDXsP4A7vQE3WacX8kftB75dS6Dsrf7ZLgPAHEt",
  "key18": "2JJokUvhfSsfiyou2bZ96BfvBbr3zw8HC5mkuyEt1okyH3s8vt8c8H3tZXzWHCD6tY8uHKfK7uRH5XnE7Fmr9XSd",
  "key19": "52aQSGzhCvtNLUMsqn3fk8i2U68cY44EhtwpFChpdXVho2eTbrPxhEtkoTGBHsXQnnKaanzhuuvZGWqchG2Gt4j6",
  "key20": "3nZ7xVDc1VDUgb8uB9VsRWVFXh14qwrz8s8FFNFKWLXqr4auoWGh9osWoHCj8itsYzU1zvFnbnG2QvXE3WvPUZSG",
  "key21": "3AwPr5fDe8Euyn3RivEtt88FqfSWjtZ3dif8yjtUWzo7uq9as19pwE5orWbyVGaQ1VqzChPeyj8qwkBLyFtMpZ6U",
  "key22": "563qyAzCGFFiqKGmVLoQ8kydBmvx8rkrnbjqG5mmddo8AoTHupgAQQiQoZQqVELZw8HFGVfdUNUEArSBbVNxFQMs",
  "key23": "2BDTbj9STQt3y4vd4rzkpwHGGJogNa1RX6fY5aE9rrJb9zWh5Q6tQrCxSXEi6h5oH2V4WCCsARfbZaB7GyfBFFKe",
  "key24": "3iu3TBQAz7BRRgMg9ctaggGmwZeWRorksPijEnryc2JQi4gUhWrGsp11EDUcHwrHz1niphxLLovEKUfzU8Vps2kE",
  "key25": "4KSjLaL8Hx8WNk3L1YRbGMCJS2aMMRfBYfJH1c14nvJuT691fhDJjatcDmHaQMKjFkpj1wPMGDXFg3xDaBJDKc6s",
  "key26": "3hSDmFcor6Yc8NshTvvBK18fyRovnzunCtcABpdy5Pjj1GDnMfEhJ46a2hPsgfUvPHy9uaDUWBTwPBu6UsYLdPxB",
  "key27": "64USszaEctgCRqubD3SoNdcNLYPxqKm22p8upAHyPenU5NCPXHx18EKyZGkoP5mxNv1Q4DnfNgCsZsa8EbS5gzSb",
  "key28": "4d3Cbz8o3iBM5NpXdB2ken5gqw8PisH8a3CDJhCJZ9ujcK7us2YibS7FMA1VuqSRjhwzrfEvjoBiCFdC4tFrrs8r",
  "key29": "2134Ptacti5nMtAm2UFtiUi6NfDBS1bHBZ7JddAJFaDv81euTEupc25JRDdv726h7jQEER7na1sgiVMS1yyfZHfs",
  "key30": "53VyUWG2JFtttSFWjU538nSAxFXdwbLxkZdhUzb88GGoVrQWA2bDYaRMK3DtYxFnBqyRj3Ffk3v58HH3xfbrbBSH"
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
