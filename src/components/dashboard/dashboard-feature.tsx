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
    "2C1nnVoJzQjq7BEWGxKELzR7XQgkrq7m5xqztnqKSeqmgsU2FZ9PrDt57t5aiJL66kkBfLcJZM67Y8gSJPgwvd1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9GcjB1J3g2XbJK4DVB7su4DPyYvYhgfuB2DXK7FLJw6vyp6iUWwd1CncfRhXkqiLsP693xhec9qRasHHzCZ1PR",
  "key1": "wrT8ECkzyn2Gv5QFrFka7qCgRGdqpm5qDaYxT7eSy9LFNm2hcNMpmQ67by1uVAz9XYfpsBA9aPJNoYS22pqvSd8",
  "key2": "3Vr4ff9sFY1prd4mqq12vNwtcaE1AHkH53rzzek3NEV7QwFMFspZusDzZwHQXN8TEDtHmfaeJ9HNgqFeDEHuZJNk",
  "key3": "5TM3Yf4PdZUGQA5mLTCnR7qxfdS3CrBnc9uJhmC44vgmP1Y1DxDbMfazkZsPBJvbStj3gFFVEYZZf9Hez4LXLJHB",
  "key4": "56p7MVV8xh3SRUWNdjTez9v7wy4LgsFWGpywWQJmoUC6BAr4PGFQ5ngkQ3b3uFomMs3xdVs9srYeh98bxEymNWyU",
  "key5": "2AApHiKYPN6R5JfFLiSne1y7NgioBv5krd8SoFATAhz884Faz5FhKXUb9L8cWpB6DoNCDT93DTV6VJMLHZaLSKWA",
  "key6": "yjReJ2qLykpZxYPUvbQm4f4KnicpALRPh6AEbWKEiJugSzqTBYaQDDMTH6jLdk34VPvjnPVVB3PQWFZtQTSasjh",
  "key7": "Wk1A3RMyzkGHmRc6KGpYRMEc2jpxXzZaCweyDVJxcWzWDQ1Za7CqDp2SnUYnKfTotJjT89rEMPV4MPdTPAUR2pr",
  "key8": "4MeWwrzjn15LCKfPefDLBj2c7kFV7hMYzn4A683LXd5vEQnABrmQHnVQEjodXFVtqaB9bPunNFmLJJjazLZUJQ18",
  "key9": "LUW5NxpifnANMPqVD5ox351YmhmJPTMebRKUxeGstufHWL3FyQdeKT1HeiKB5c2j6HGjbWQm88dVm4UtRyWPmx9",
  "key10": "5U4tPycrWCeW8kSsg16toMj2bBL2z6Xg1UCpCsZTfSpBXpmQM4ALi6VQRL1inGBd4oqZUKgDTRgj5NynfQjLim3y",
  "key11": "23QCb5YDptR2gqiYmqQ3s77zeAEJdA8Rr88zEvnrs2jYRkptU3HNBSJr1yq2G48FH7DGX2V4641AD1MkqCiisuc8",
  "key12": "3EkAQXpkvAXMMegZntM5pzn7EW4MghebMbcNyFa5okDVaHCvfn7sRDuQPRR87N6SeGiZtedpSQfiV9z4RQYCadXF",
  "key13": "51sDSDGx7UDLMJaAUyDsBttthknKQi5wrvu5y5d2QtGXpkRxAv2A5NqEQr4mkcCMf6tcozFmY1tAsUfRMhenpNSG",
  "key14": "hKHJqG4nDJZbmSjKiZnxzhwwPPBUGzHLPrzhGEs4oCByiikGGyTbWjBzRKPtEZ9YWcWkp3zsHKgVdSti4pyASp2",
  "key15": "5zu5VFdZH94DegsV2SUC9SampNhCqj1i7NVPYihahhmMxMaY5SHjMM8TvskqPtaYw6tM9jdi6rocBYa1DRLswJm2",
  "key16": "397V6Nc24Z9uttzteysA3b55L6tbJiHzPnYCWPYxUVUFb1US4t2DrmDa8UkyWop7xvQymqLyywHfMdrR2c4SMhi",
  "key17": "eqRkwpQAu5VAJ6pr4LAD8Cxna8w778qXB9iqTTPg29RqonYs52FsfC1JYt81Di5983xx4faWLSENfuza4dExgEU",
  "key18": "WFqP319rgefHHXpSD8mUPcJTrb1WvdEfGchuxZdqetADVmz7MBTTmv6mk56ZTW3GzyYKQ7QnCfPmdxqNadYNh2q",
  "key19": "2qhQC1wb9dBDXomjFMftG9Vy5tYYXSJ9Q2YvTUTiLRiM4TgPK3RHSAHdu4yLm9maywsCKGkuw9m3gpMheqezZDFQ",
  "key20": "wrmyfGmhPXT9nXu5hshzhEtpUdMWYrSVP8gC7tdV3LjQ8hXaLaCurxKapwgefTGrHoxi2d7JuYqvkf5LtbBpYTk",
  "key21": "3m8wDSVkGpAspBRJAhSTWbDgcvufrpXxxfa45rVCejB9LYaVqip1TXnYyMyMWzrXyQiMmFGDJD8DisGnoCVdJAfD",
  "key22": "4f6R6bWYkZbvn9XZKRSdXkup7xtmPcRRvrGG8BzbEW5eerW4djdfSeFwML3Zf3Djo8kTgCuztZ9kD9WwQXSyd3Dj",
  "key23": "2HQKYpj83eXqhbzpqnpEo8o88pMgcLYrpDZaCqUoyMhxLWsjH79qhXk6XYJUweCmK8GtPbCHB17QYwwuhQ2ib6uD",
  "key24": "2QZ8oTSq7GCAh1PPVZXc7oJ5jiTR4LNaZ22yC8fDFdLkd7oA6RX9K6HXhuBae7XVfK8d46NSWvqjpihyhC35iwAY",
  "key25": "FJXR1R4M8y3fyo5hvd7oS5cnRbZpv1wVqzP2V4Xf5U29wD62YY6Vj15oNKySRmWsD6RLmuCWbM29huwHmxQF1oL",
  "key26": "2FXXvHRoWg79HQUP7HSCYjVwrCUHEHsEL9occNWyiC6ySRuKi5Cr1kKRYhztjiKy7FVSAMsG55RAFVUtPC5Fq3hM",
  "key27": "4859uisAfquBUf6LPUZUEVHXVax5uSMWj1eGwE4Fzb7HVBsfaoQyYYGNJQnfV9PupSZc4oZJzpwFPQJCYVgbNFjK",
  "key28": "2ayzkHmTUCXZQFXRdFhx2wmys5Htmfd5ScSqYJctB585T3SjnrgRftsnaDe44RPkpqXaJMXxaqjgyK1yyLm6mEuR",
  "key29": "FPaQtNcwMKY57YNdhitEA7vWuH3NBRtvHbAwxMWEPcKpHgcYRMACufiUDhUW3zDvvQT48HubEHhNVF7VyGEczEW",
  "key30": "r7RCjeMutM2Tzf6uGj3uKNbWX5rKtUrxH45V5mtUrn7BwhUgXxvnxQcfTJBfGb1prdtYHnDR4TSktAxbJt9jx3F",
  "key31": "2G1RfgAUaJnftjiX24YuxgmxvPa8moR1eAeNaZkxw1d7H1mC5mVEx5ZnmXph6CbxwnEaU9AjAZqiGnNWeuRjnMPx",
  "key32": "2rMjR9uKJWvMMerEnzHYGh2YXbxeUuhohkQS5vuUrsgyUfpo41Cp7Z62nsRN1QyTrxRMo4MhVMzeieFeymrjsRmL",
  "key33": "32iic73K8AJBxnJVLdEYBVhWBqcpoPPdtuXRzo6LYAiXwDgyWUqH3KM6nWE7faCLfGto4quYrw7qGbTNJXRHhaAe",
  "key34": "4hhxzugjL9yBxZnUXsUHqix3AfvBQnDm1cqwRhqV37tLRtCWm9pg1Wacx6uAuFjesXkLWePa6DmtVj2K8j7gjMCH",
  "key35": "5oe3BrpvmBvZH5CaQ3dfBoGb5bc8dLGB2C7Hc5eVcoBt2fJ5q97CHjKA8QDxA18oF6uRD1x13xGYrhHPyJrhMwio",
  "key36": "2PxEZoPN2QLZDRZjY31rFM4XpXT5BzGGXGsGvrFPGtyrwnHMExk5ZfBRK7GvieXbNEvVVSbwh56M3tp1Qii5mJd1",
  "key37": "2wGQ8wp8MVZ61FBtQhbbYVZpsRurpK88Y8WzcbUDznLktQmvo9VXcyok2A2TNTpDZtWVduf8NrRCgM9PV58CueEx",
  "key38": "61g682UPRXsAMRERqci3eX7Ai9aL9SmXi8KUxA8jA1QeUSwc11JngsHvoz3ZMikSGZUfzzFHXW91WbkXzVyF5MU7",
  "key39": "2MdozBZzBo5AfvEEofEqxwFXZzJ3jNLurm8fUw5p62Y7DKWpKRvuEN3ESykar5hXAwitAKAjF8r7oGpL3TnczGF7",
  "key40": "65j5BmuRsvrefADXZy81pCjjLkQPiMYVowkr1rJ68rss2p1Up6mz8rXfF9UELBBuVf9Lf4NdjLYpFAezagwUcpUu",
  "key41": "31wH1FrxgePbDXhQdpv7quaL5EL8yYXHjVqxoq4G4xc4YGkKAbEvzKUXQ35kWtp7PRM2gDXpGrpQ52xq8TRF6gtZ",
  "key42": "4D9XtvVUnpUpWr1q8SFzPwm8e61EGTGRC8a88YWkVQu4nCrxkRfP8x9tuPiA58zuoddbQC4XXBQ4iiDbMvdqY1Fb",
  "key43": "35TNaw2BjauDMDEESMQwK9RCTUQzen7Cn6CzhxTBrQjL1xGjh18cJaJ3AxRS25K32wGo4wuEJDnHCB1jbncgd72S",
  "key44": "3h8CHy7fR4KGtkt1UxZiDZ1Q1Rhq3wZHhkm5u1259DeN3EbACipGvgNmDN2VA6FhbXrVNBaVnmeHeoL9oBt7H7ag",
  "key45": "QqtdUSrQPqP8vowbGD413rAKXMeXNnqmJrSrqbs5cFn31aiF8wUgceiGzxBJaDn3WWkEFMpDo994JfUZuYSBMa2",
  "key46": "3gaXfiQHuwfeyjrQ21JFtoE8p8G56wHQdV6U4ALenvnmHJG97TjiFguUWt2kresL1Fjjz7gfjPEW896qJwEqLPaF",
  "key47": "2hgHXLH8fnU2REbuYquPiSQMWymfZy1HXtgPksmwk9euK9TEYjWM4y5XSkLFWfd3N1rrU5ujZGbGhP7wSnd73gvw",
  "key48": "54thGnw4tnRYsL3yVePCBWqKeBuiXMvXTeR4cCXo9qwTeJUyNYapbDbRTgnPmPBkYvJqZJG2JSZuVvB57QTq1y92",
  "key49": "LQQkupTt315L2A3Vv12g26KxRgtXddXdLHP79tWHHX6EUKeFM52fB7XNxMdqf37GUJf2mXamjKGc1j13u7kLk3j"
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
