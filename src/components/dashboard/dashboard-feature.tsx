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
    "32UNJ6Dky5eTxq6KqrNqB3CZckerEnKjwUBgaiXaWi78kS28yuFs2GwHpL7SH6xwj2LFkWMpaiz8axDXH8h7DJDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLnPD5F8c9bCW4TAKycZuq1VHvhk9QPxgqRx1HyNeVnxoCYEF942iwRChFihpauL7EeQ2TuYAdyBen14jriWnKi",
  "key1": "TeqGhLtJzx8JS6Tx8niQoarv9qMxV4gNNUqt7MfQevcfamTBg8SYkFtStHFqxnWVB8wkcB4ifJE4RGQokN7ZbpZ",
  "key2": "uum4YSf68uULdwj9F6caZwgsq77A4BNo6vZqpx4toAkjod4VQ46etAPnqwLhVhBAomhfsdPA4Y48JzTtGV7XK8K",
  "key3": "QaHGvZakNY6DbZdwbksFpd83xJNnbdgdwGFpikDt9LnPxSoSdEL9r5VKVbzRFjuWZX1bPDQbLCcFxrLT5imGsAQ",
  "key4": "3oRdDAsuDuvbAcKu2hXGFxaKXXRV5vZqkULsDTuK1UPmnvBEpGKnRuDax9oRGCADQTUwePHLAn12vACD2ZWyf6NV",
  "key5": "2Xv9DNLUiAyzLLxxzSJYDtcfDvnnTqyPVBDBYGxhNCE74n36rfb2afG4qUKLaSXCEoRu5u42Wfc4FjzqKYmYoifJ",
  "key6": "48Vu6J158NLEZsipVdTmnjcrj8wYbDjmRfGgrkkPjBB6o1mLYRh2vVyrCKMRacVgmzoHu3cCCBPbGSQmpbEmbYyR",
  "key7": "5jsj4g3pNTaEwYtb18aaL1NYwZevSC7vfznzZesjTbPxHHvSXjpniq5txTndKT1F3qAKKcbn2tdh5sZxKYSYkUsP",
  "key8": "2t7DpYGfka4J7dLeV1RovEh77stuynZFoiFLTaNaLcxjAD8AVbeFyKx2KnnJFJvnRZfaMht5xgvBeNbHDWnduaUq",
  "key9": "2K1kVJnGxQiN2w2SEMtCtmR3FfPDCjV1bLuk8RkdGnviNCCpAjjGxEABN3fgDMY5ptnbzB7PyAVHi1nQFL2GVRP",
  "key10": "3RZtvkvW1xzqqc4GD2FJEQaNGTNMB84JXZsiozeKzdB9fkaDWhXpZdHkK7vTFFMpx64pWCDPaqZ5b2r5nGAdAQ4g",
  "key11": "4KiZTJ1vqjcKrWJneGxZPiZkLeEcKoRxPPzAJHpvAVAXRkgMZnDLQkS633bYZ93FHjkgSNH6tRdhsov57CuTGasG",
  "key12": "66Fi4rahwrMhCxfRrnzNA17jt1qHxQrBxeNFf72WAujt4cNNdb83Hr628rChWZqe3fvP2poUJraC7tr4PvxvF3pv",
  "key13": "2mU4nBTPQ6KM6csFJpDH9xMC9ZX2dZV8hshfEbbtsySsYbGYAoDp3SUqdpkwF2K4eWu6giCWkiYPgQcGuuHmwJUB",
  "key14": "5uam1QC6xG3KuaKEkwsttiVu9od5jAtLuU8HEzzfyyKqPB7hoMVAu7M6F74Wsb85tNmpK4BSpcGCU5N5ZMyuz1BB",
  "key15": "3fckGzacK8BJm9YBfjyjYbzbYg3LK6oAZMSF6ZLTTNnxGog9oGVPDCynp2XRNRk1u8B9TYG9kuxCR9gavt98xxZk",
  "key16": "2ARwbSo2h4VEKGs1hzGZFx15mLdu6eR2V8HRcDY3CptVsdajd8GKajHKNhhoyLNdBm4E3HtY1gHbVBgjEfxScsii",
  "key17": "61mfN4z1BbSXNQuTvUKeTzdpYzFp1GcmNmJCwym6R4XfmKLfie1L3FEVRXsqo7RkKB9SBN3Ei9mBfcngbGEtnL2d",
  "key18": "2okLHJq4NQrx9fYZoA9U9hHp4nJeefEXPyYvK3mef78MSuPnoSmc1VEzV7NBAcVAzngSJk7mp24i156KtC4UmmBU",
  "key19": "WaR5egzvSkuL6keEepUfr4fW5osDoVDZxzm1WtUJBLjsw8L8t3HpMoCvfmTL7CMHyYLovWSMXZDGafWqePe8wrZ",
  "key20": "4tSUJUuxfgWzeXMviXJk8DHkFQUrec3VVfNg9vSf8HJD3wLE2hRorAWpx4DnBiVyWtAjrjnoroN3fKpEGrySGG9c",
  "key21": "tZodSYUftm2YS3mGhU6KuJQKJso1JnCjN7LErFtTPGypzkwhMHk2WK8SB6mYkizuNGMghvHETQixaB9Gm5kpw9o",
  "key22": "5bDNM7UzuQaJtwPvRH1dN1NEW3xjdfzLd5QZRfVSThEb72THaYUCq5ttCU86E43zbn4wSXtUeFWLa673T3mwbeuE",
  "key23": "5HTLgcK8etZNQV3u6z987iUU6mUwumsEcEGrEFoA5uC9FHKhkATJPQBC3WkCyKXacThGNfJg3BxHwZcCVg9NLy66",
  "key24": "43tHwDSXBVyWk1NBB5bcQS7z6d2f38jr8YpdRLukbbzjTknyPxjfpkKsBXVo88njSg6woxcc3Begd7Qrkw5N4hii",
  "key25": "4WFyu44mJ66Z1X9MTUnso4yksE8sSvekD7aLqAE8vWJSX5cvXC7mikDhAeRYttyeokSmSKKyfcre1uSNtphpBaak",
  "key26": "43CmQJE7n5dcCngZoS27RXb6JUZfazKJZze7BTez1GnbfBYhCVXjRK64cWUqKa1Qye7ZsDAgvqcv2bCBTeoKwS9s",
  "key27": "hQpZcobvPASk1NvafwkR3Do6nrBvUyrSYRBsPttUZrfXMng4vnzkZ7NkSTvwzWmp65RmdrutBorA7EwjF2yoM7K",
  "key28": "3XxyGymJmfkzwV6rFgtN83kwDAkQgXadQtoVwjdqDqebJ2tnbzDjZni6WtSz4bvoZ5eSeFfsKxSHgvKyMC3pLt8w",
  "key29": "2thR9gQFzdWwaz1TDkXd8ZjD4L9EzLumtb4A65qxSCqWHqvAKgkP8sWAFqskseRSowtQDUAaJfAiAHnsshRzXHyo",
  "key30": "5CH4UT1D74NKSkxKFNVZdJ6v5yTD9yJiXny34JDv7sr9e2LS2X5RQAkYmvq85bbFN5V1sWFTfAM5ubmXjbUHdWpC",
  "key31": "2LkY3e1MhgTwF9sXjSZ3ivNZDGi2udj7LxnWjaW7K3P2ja7t4Jt5nwD2jdEtyJXPgmqpXKKM1cgjLK1dV2RaUzbt",
  "key32": "QwEX4FnK6KegUL9aFNPSHtMXb9RML6xUVjUZahPceXFf2NBTdt1TEXjCsiPk9v9iCwSnk4vWytJpjM3BXbYyd2Q",
  "key33": "2sXLxMgPh1Kxgzqnssy7wb2RUopTYg1xkepH9FoXpgv4PyBgSxm633tm6LMRe5jB1wqTJGqerHc7aoSeqCoUvsEA"
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
