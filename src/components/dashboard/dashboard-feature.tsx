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
    "2S9pQqHV5V66GWpvRcntiQoefdEBNUgdFEUdxap9Rz5r5LyxCFSxZLp1ZW3GkNa5hobd4YFcudovbThu3dKozG9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48h6Mb64kj5XMGMfxKNTB6BwGxF76LLXAUQBV1ebYmQK4kFwNJMgxPU4QrrPjHivf5sBydp9LVBRBgSRoLZMyjMX",
  "key1": "3mnmknYqqcCNY5EWF4s7za7xB66gsSasSHHWHs9uVsvDBEvvw6TpSSkDmMzr8JxpzTrADZoqKXfGLDo1mAVnkaL8",
  "key2": "51k8YLoFoQNCFgysfe3E2qy94Ndrof3HexZz79nkCRr8AgwRAfbEjMw8TE9KVN4VPbt5jjQdgbULJvkUsB32dvJk",
  "key3": "Qr9Ve9kp3ihHXxYU258kFPjV8C9v3byiMrPuA91vJYcGSmjktBF9B4xQo1YYGVxNMuW1aG4NP5wdGeuuTWC2zyM",
  "key4": "vH6BNgFFnE1MJF41cpnDLmfwPJfakAor3wLCKCWHh4ACHxEtEEtQZD6RaNxYbw3SauydgtRRNbFBdWuiQbCPLfH",
  "key5": "343Aj9jxqvws7dK7wRbyWF8RjFbZe7KEPSmk3PWibsRKBeMcdRQ6q5ZsM5dV9tEyQV3Jr3ygcJwCWciRq3btJuVg",
  "key6": "2gU7jrhg3Fgri1LXtF4nHk6dHwGPqy8Htjpv1VwogRNBmApHqPf6k3GQrJ3JXwaavrxFsFiWfC4EfDoQHdtPM8fU",
  "key7": "45QRSjssfUDavqEXT846v71fzNdXP4frZEMeSdPRqYdpLGm9CWDTLpHYCYEwjz67PihSnmeMbUhbSQR6EDgHFtc3",
  "key8": "3Vfd4jYrgDkXdDFMpv1FYBFNNt7kmFSYmtXTjui3Vb3BHYVpjq9RA1cbLwEeJX1qaminWtBeNstT6eLJqrQ2yjhk",
  "key9": "5uLY5dxjVzNQrCk8KF8eWBkBURmGym8kkuNaJ5uFYZ7R2z8K1Z5rMEomNMSPK2T5M8592cFq22ntm1R2ojoageG4",
  "key10": "qzSF3AW4qE4FJLCJ4ZHdA6htShX4dvFNyUxF8G3NxaFqgmRdymaFSANwFJmsBiksUti9TgCLBB8yUUkzmiY7iXr",
  "key11": "5LHCyF71w9EqscwsX9CMPqML3imGTe9f8aBMwWGPBqG7HJoxRNhtC2asuj89YSwutYYSEQb5xRahfeC4TFkJRkQ7",
  "key12": "qcFTg4Zo4DQS6oavPuaauzydrd42dB5kPFBtXxYGoBpww2XuBttoPdcHEuc7n9X6EUb6FDaXcHJcsHZ8ZDVkgqZ",
  "key13": "3K2oZPFnByGb8cEBb6BzZazXuYt1YewzRQzBwh8cGJiQXbXg1uAGTy7NUeY5r8KzWwqjTpCtAwGy6N9T8SSUd5SL",
  "key14": "4GxroWoSS2Cp92P9PoYr4wWZGKYDficS3HsMYqXn3au8tk25hA6xvLUwxTx4G4Hjid2afaPtQepEtpsLsHggbHYK",
  "key15": "5SWhkcJUPVxBp48FU12fuLe671q7Z4AdJ23miZPHkir1FQ8mZY2wpCy2FgMxN2pQ7AK6UD5QuXyqM6iA2G86rgNM",
  "key16": "3ujjoouT1C7xA4vkQ4hCqaq8QM6m3Kdsmu94hQAofgcQUKCDGnkSXVmhWzKjxdrgDv44WfBkKLTWzXExHE6BAfJB",
  "key17": "4ja1usk11sixybyoXn2rYqkXm2fG8Bmd8myhxZrZWkkKLQGisCRNoUjpzA216M5UbLN6VBu8g9MZuT3xCZXBGxxP",
  "key18": "4c5iTienz97JJLaocmK6fNhBr3KMq6YLfEcrY98du2T3kMp4JfmWMn5VqtMAvPqdhW3nrSZdemvZU17NYVGGSznE",
  "key19": "5MrQnkCqvXroCe22ne7c2aFsJe19zWSnWCtDmWVkkZXpxryoabKkH4PVVpgXjzZwpQssd4xxRFYw3PsVofBd5vF5",
  "key20": "5AP1T1xmaWBytCTiEXuvzNUDhBfAiaHN28ZszfU9W7awG9JtwNFv9SCSQmnRBso1as2pYridwtyeYYkPJGV6VurB",
  "key21": "5UQNHYYF6Q5HeDMs4qnDvs4rb9wACCGtDgWTMCTuy9WSf61h8gzyzWyUpMaZHRppKEf2yr5zGedXcZQFNk4kyUPq",
  "key22": "5t8boV4kwkh6f5y2xEnv5s5nTLMnSiZAt6HHCexRKYrDyrPjBQGD76smffE4tw5jBxeSKwQqg4QeTnEC6UrcqDUx",
  "key23": "2rNYL3J4w7XHdGJg2Q66QXEiM8rzmvPvkynVXLLSSpADbjPQqYppMGQUza4LR1DCrXwE6bVV6cDv1xaN9rihyT1U",
  "key24": "WKrAWZweq1bieWZTawFWrkmh7LJCQKvX1ZXAqq1Pxv2yvxSbbkJHmMLpF16BY2i9TADDcKtQpKRW9ydYq44n4s6",
  "key25": "5rR2DYrEYDarxGNY1R4AcH6jmPRcAgpVTjMaXtLdjGLfPHfYHJxsARQ9n1Jpyh7qdiAQDxsnToE654GWjRHEAMyP",
  "key26": "3itekrGPnGrZU8ggQ7eQWfGUdp1sMgoqJ5UCboRfvaYTexZaxDVDJRu12xoPeSmfSWMFQGkrygwGeZLTQWQmz5j7",
  "key27": "3M2PF9LUFKjbGSMtPddnfBQtnxT99Hjk9w5qnCQR268Fj48mKqah5pV6ppmvEh7cTcMViaRvTFRCffLvGX4ogpk2",
  "key28": "2w4uATvBeAR5U5Z9mL3s5VeYQHWeLzne9EnpeQuskPk25neY2wbpKRTk2ZPEDjDS4sdji47Tfu4HMKmzfD44Z2BL",
  "key29": "4RZY6T1xctQ75UpQA6QcUYFeYwYYRWNuMM2badSpC8w7gi9FFzXmdb8qYLFZUYn8v3Lkaskqvsnb5Za1tKhPyboX",
  "key30": "3Ust7EGoxF8rFQHCoZz3SiXp9s4RuLpHAwP1iWfj8ApuaDKG9SQ28rX7Wo6jAhadd9g1HTXfPCfPgb6MxmTTDAbE",
  "key31": "2VRKqc7TvKD28V6jHTDpPPwYNrFLegoW58pegiWRhruQgwJFvvfePnw4mZTAtjcMDxRrZtREhy9bFsVsNXzq4jnC",
  "key32": "2efVnqab5E9mQ3G5YtEtoH5ULrxHg8bBvAqjpvD6fhEC3QjncXP4AzyW8XSeKhWcFv8Ga76FzPFgk9vwNyvXydMA",
  "key33": "3ifhx82pgUo3gqwdGcVcdmBHGc4GpbvM2H2W5DiFUfUzHT3FKgdnKRnjacMKsGa6tAcbAh3gQviaiTiGwBgjgbhb",
  "key34": "3UbodbSp1jsLzzARQdrB9JXQnNHQfkVyi9JS8ADMG1uEeukWTwbCcujtZkLt4z7PxL8jMPQ1mYPaeFHnzbsHAXUF",
  "key35": "4jySi9u5iuXFBCVFajpdC1CxQRMgobGuUp9nWWN5eqEUdTEX1p3ud5VsHv6EU4pzg1cjaw2V72H9n19cJ1DcRnWB"
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
