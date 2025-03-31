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
    "473up1gkhsfdaK1oq8rguW2ckyvS47hHpRSWRA36HLJHDFvpKE6vBEYH3wnvyMyPd44h61S7G4Z8ErUapYpLmdgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJtJtYVJWnsDB5amHiewFJjFzQ6fiY6bJEKtEMa5deC68T64J2zN8suqnb9tvkxnDi4gzSKRxw3N8TrnkYuoMtQ",
  "key1": "4cdk1w5kG8N9AueoRJzamAEADYvnaUUv4tFyjByb7pyZa9S84cyvbPNZ8ej3h7McW59xwSnUeNRmrucBh3S9ByG4",
  "key2": "2M8pudqwgRs1F62pH7M9RskkV16Twsqjq5LjHaxk5EsZoAXyjnMzXNkzk3HwihKvyr2hgQgFSVXnMnWKuTxY8R2y",
  "key3": "4spewn4miFZfhPc3F1ApYk1pFB1byKYq5XjyJLnpg9Bv5PrqDf2eRdg13tGx9YbLA2GSPQ7Z66JNDFbTYkvHGveL",
  "key4": "cvM6wNYdQCoMvqjPGKdmtonayQXaGMVuyUrfxaWLjvYACC4hXGSdcs8Cs6vpR8RfRNJqdPZKE7hCazHebcDVafS",
  "key5": "28zUL6KXtLMmp24TrQajtDAS95fAdxFqqKeWLtfAPpchuN9zng2myXKeXFjhHHBUk9LpGQir3gZvfEPHPcWNk8ch",
  "key6": "rCtMqq1Kbj6L1rHR5BWvGk1AxXAJoj2QJ7ELuEBkLcGuVHvnL1Hu69X4jRDhuWnauN7KWVANP6FErRQfCM8vAmt",
  "key7": "3FzNpHcmP9iFY5A4xGuxStLDB4EwSCWQUSSVVgu2QuUz2PMWCJnQU1Pe8gU1ZSR188ScyS7dcsyzLbFMqErorYyE",
  "key8": "4yUBN8LAbzJX5KhRnyqWLDzTE8vdSPSmiqHudg3xpWDdc8niocr3gq6q4hZR8DES6LEPjaCaZmHqTXMaQ4UPEc5J",
  "key9": "4x2WP2toHoMRm74aPLFx6iRNfNSXBFHwnyum3wodjUda1dFU5mb4UXDbtXvRZjukevsqr54CiAZ9N5eUmmvaVd5u",
  "key10": "51M57oebJpsK6LYozdiysaWXRFetMt3FQM2qKTwT2rjzKuRXAEc3XUddRMtTongJGwKehfkUnXVG4Ws9W7P6tQJY",
  "key11": "4iAaytT1h71BziFNDDNSmyETkpNCZc44iiGWeGvpmCHeHpmeUkznkqsSFir9Mu14YbphLBSWmgLHm4kP59NSwmr1",
  "key12": "5FhsqpEurXuu1QtneBJUek4c1efjsnFAJUk7wMSJCDbvY8TBoJB1bQAsS1Y8GtCTBenpnuqBWLKU93BpDmNN2WTs",
  "key13": "5xJu38wUXbH8Cfda65PebfsvVhkHRYuD9wa8yKYg9oZw5tXG1xc4RmtXbQqiXnxrKoxF3betufL79gqZCLxqQsDh",
  "key14": "3vjrWs4suX3fVfZb9Xvm4CVFAjx1GwMr9KX5rMEZUi8ysYEfeuqFVDXjxB6rycvuVweMP1f38EioKNZ3FrMnA2ET",
  "key15": "5anXVJkWkdJyfagnUHQrbeWjVto6QBzQAvrFHiCY21bVTi7b7F3VWNt8jjbfTq7Mi7bSyvyqQ9Df1upHZEqDZVY5",
  "key16": "5tcdCvpvpcvNM6RUcRrfj6qSkjsfbRCdzj41zBknHHSS7TofA5mxQZ7DxbGXaQadETkv6iXf1rAp1hpFH4WPVQb",
  "key17": "2dbi2gA4ujtkJr8drqKZz2fWMLWr1Zr2Bvn3ZuHDWdmHUWp44moestvc1hCfYZ9t5gUvfTgFfqFzYcfymjqdHE5u",
  "key18": "4UdoTfVgu4Uo3besBnTMoSCiJpfGd79rVhUJmRB5ZYBxYEkr4gf4jxfkh5o7NrsXv6t7WDuSssUy8EbGrrtn4Szt",
  "key19": "61Fj7rzZjDD9xq2zWtcsWVkhGXLjMdNnnTpYowGir2xYhLFk9sNVHE3faadZPWXWR8DuK29uuemXESpbtrG5e1mi",
  "key20": "kwKFM3NTmmYmM8jFzJ3AQdrM4MevtM7jr5c8YuwxzYEN5CUxuuF8GbP5U4vPbDS3WshzdPXgyvufVXUQ4PWkuhF",
  "key21": "53hA6MR9aqiBqcp9UdiU5Ud1g6mke9zH4n49azJuSZhzM8xLo5sb8BGs7qzft539E4DeaErDRo6mfK1AEscVbWs9",
  "key22": "4za37H9CmRJpKHuHgAzP7X4tpPVVtgnCtMm2mdb1Q5BjS5M4GLx5c6cRyiLb6q3LBfTTwtwmhab91Sa6ztkBBKFX",
  "key23": "c5i2JLBDE8b6pT1eR2Vxb6va51GBnd19y2G8TfCAkob7TZHVPsvaQScxyS3y2tzJ5YA69bXgkns27PSsQqVW6X2",
  "key24": "3cr7axxvWo1P3iAeLSHzy1qoUF6QWTHjwZuMcSH1mJJ9dqQ4L6XtxtR6oabqPW9va5foQ6Syx9xenvMBGgqHadwR",
  "key25": "7Kay7A5HbwZLpqjEtMeQf7AQZZoPjHwBbAqduu7eKPDECea4UvREv6JbhgUJsNKZHjSwso5RvbmfGERMwU7WCsc",
  "key26": "3ypmWCyfVWnmRWtbRzgANduX1EJQbuXYgjpp1c8wtLSrFvzS9bS5TBSJQoUpwxdgU3G6cTm6XTGfyjTsGjGes3Yz",
  "key27": "3uHp7GU1jHmR3uDbCd7tj3sgF8ujtKhVbfe3wkve5sFjHHAres2PRVjiSUBd2nQMWKa8rn9dNZfAdSrxVyS5eVKm",
  "key28": "2FAy7WsqxGCuaekLaanbRo8FRyV24wx57ft2vMRWJHcfurb8nN5YbTLxR8asXSy7shrwM3HCHEk7kEpgUVQRTBVE",
  "key29": "4osYRCXtgWVy34BkGqP5CY6hbSZVdH6zoi9qhUBgFvqEbXdvUDYxUYUiQmcUmFqvYLGcP1QGYCqYcUkDPpfeJrfm",
  "key30": "43xwEMKoWqqYVDRfWDzLu6c6Cz9Bs3drZv1iv5BYmfSTqbgPnegsCvbqtCDRnd1JcyEQkp3vuqrjG9VoFVLdURoh",
  "key31": "258oF8UKywJvsJVggsMZnm9f7L4rAFBcEBsQWCkHYbd3p7HkmLru5PunUdstmhMkBvRNjJtdosXJZJr5vuYN2jbr",
  "key32": "5eTEH7J5LFYXZ5nuyCRnX98BGSAKYkmqV1bn5Q1PBsqaX8gRKZYLFRxCevQkAgQXE4WXdyo8GRxLgaihAD5fQNtF",
  "key33": "4Pd8g9qT4Y2UZ6snp5Vstthq6kzofCKNAcNgBDq923BXDMrH4Ndpw4W6m2enTPgfxRRmegWzQBYr2Yp8rGZ88aQq",
  "key34": "2GMwhpn7wmBasBUGMf7grMBVsDj33WfNLhexdxrDUkTqhYbe2XPjCZxSmheH4avFD3DR4M2qSSzQjnZ9EipBNHv9",
  "key35": "2VW9bsRfwDxxsJ4ifZHnhdujCpAUmdYzPnQeNbY8PfUayBHfRAKQ2ieBN7jpRhQyrhyALV1FWcRYVXn5xHphP1SD",
  "key36": "2isScezGLrE2meH75caxXoVojFeEwrnwojW6raU8zQ3NRKJEdhz9RnuyRyxWcwjfL6rDcoUWWKuDjsDQuhttKBRr",
  "key37": "3Ah6KD6XcpFfAtWMvZhnNxFgVnnWztzUs5JdvFHjfAmRoaX1GdPcwaUYsP2oTAugbimtf2qT5TPvWnmq9wunY4Bt",
  "key38": "H6xZEGW6gSww7qfcgXTyJCGnTHV4uZ9EUn3t7guGW28FDoyWiLqDkVaD5BtDbeyfEEjmAV8jrVVPBPpDapZsPTX",
  "key39": "5a2U31797DTLp4s7hVfNFdpSz68NbvQwcFbJNdBooqEKKMzVNF5RX1bU1nEe6vBpvEN4FmiBvqd66B7E16LQjksA",
  "key40": "qKGSMQQwPuPeEuVEQD36qdCpAz1eAjkR1Ec5Ni7FShrhijswSi97NsH9jpoL7SoaZEKxR22mzUH8MSfXNusSHqo",
  "key41": "5XLJUCVrPdKCci5kcdUqWLJn5a5xJwincC4iXcFT5xJVUyV9jDG5bf9ExzfDhZCuhTpyxGraMc7ozGHYpmEgR1XG"
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
