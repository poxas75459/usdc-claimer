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
    "4y5Y4Gy822U2x9WwymSaECSt9mFetJvyCBgEMS5kVGWrxSmeCvVsDem9HxTQFirPqju791R65WyMisSAYsm2VKDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HtD4ZCWHPFEgEDDd6jYGWStWpaqDyDr67pPvWCQ5PaAwgGxxeR1JGKazmMUo8qpmtCD4C8JEADok8X3EbFaRBhd",
  "key1": "4LJo6RcmrnHZvghcT4nA4zL9bpkdKeoQWxWMMjeWSkCG2mDbea3zXkbx4wRD6DHeKW2mUGT3ahXvbLo7R6nduHrb",
  "key2": "TnHi9vAgjcxmk1cicqasx9GBqcNLXmsx9tLJHd4g3ApvZiq4wWQdmcDxXcvJct5T1Prna9p4knzf2DF17NMqtFT",
  "key3": "3g3Y3SPBtuhRRCAR6emFSo1DqcdKQSxCFr7eDthwTjMx5J9DyF4YWPAbiuwEENSmYxd5tbkEgeFkPAAzrQAWf3bK",
  "key4": "2bfS5DC4RhevN8w4pxUwtZbVacaBAPo6f5BtvDMsqQi53BnAbSKFsUUU44LLxeCzXSpLBAmSPbFdXh8RN58k31MY",
  "key5": "39EekaDihZKPcwn4GeMFqKYXkocfhVuuyYzVVNB4GiX5cdYmqwhm7of1yUG2K7ioaemKgYYDa3iBQk4qveyxgzeT",
  "key6": "2M5HAYC1bfhwA4h2hxqW83VmWzfdxwFcH8R9QcEmwhzp5un8i6HJo3n34gj4qCuJaphCxzhf1zf1W1pSYcb8m44P",
  "key7": "3vkyahdojzS9XtoKF1XzW88t2YHzNm5Bas52a1T2TYTZoqyAan3epgCwVSgwtCrKZ5FBBPRwhDDYcznZvSgrYxVy",
  "key8": "2DLE5HCpSr1hZQM5SeT2SPeCvzuwAfDZt7VKf1Swb5yqbSLmTCR9DATyLAiQWg8QUPMkmhn6RTGpruMFhacJPmgd",
  "key9": "5AoC3i7pbCzqt4DtYVZzkrgFkTovqxCAyeGct974hLkcbb1rS6JarXE25Cw41HrjpPHWALm9qn3R5WY84PR6hWw9",
  "key10": "4iLhwumUDmYzUx5VPJrwKHHAJyvceVr39g9JCsV6VNXZ8jDsBgkG1ebt7tzd3EpDrPTe9jtohmWkP9L26EXAP3nm",
  "key11": "2D4sviqjD1axfxFRxSXaM1SNx6pwxy45nNZx9tVxAYUnpE5QUwstDaWC8avkCWgNroFZv1WphSF2gWFzcxpuL5jx",
  "key12": "4q58tKHwG5jUfGV4fzoeKgJ7BskoL3a3gRaoakw6N3y35iaozSS9reengjtiVKDUAHyAyHr3bn1it9fcoMyZLqww",
  "key13": "5ta4vijATkrNvkBb6A4cGeLzdAU4PDaYaWnMrKhR1XMEfrVbo6M2QpNAS2gGZwZSLic64ZcSD6P4odhNCuJo18Pg",
  "key14": "2AEMBnXUSQRFViQpHDyPvC8MEPNSkppZFtAaEvkmLPQ3CCCvmD1KCZUP7V51Q2HFU9wNpogh93yH97FP1jv2UAts",
  "key15": "58CpMAGrbZRPMPbuC8psVrW9ByLJcyfojZRySkNbt7PcFVAPo1r68tkJkcphnDxC835eGJkBeFwSNX23XDMxv9p6",
  "key16": "254EShSjqPVBxbwgd6cXvx5nVkx3VGGnR14pUtyFkkEVDqFeP83PTDE4gG6bkxzbPNFmfymJdcprcw5McvPFKYfn",
  "key17": "3HNfoEHcQugUWVCb47fjSSyYSFedRxfVPBSi1XwDivg8EVnEB6o7EXT6T9cE8NNTddcy6dudDMap7bD2q6jKeJXt",
  "key18": "5sUTpvyMm5iXJJJizzdUzZJ5BQHXzwwtyyACeEigyfkDnDkHpKZaBsRmxBwwHzMqtdoTrRdUJUspt6jQZLYzLj4a",
  "key19": "59E61vTktchcgEsU5zFzK1wStKVqSAibVhKZG7ZTuVnyYZXN6RTDXN7thA7GuzJ7zALvZUMAMpfA94RFASVZWVhn",
  "key20": "5HSHYHBhHaWHYxh7K5bfe2Ftsakpnw8crWyEe8JD4prWb8qpcQsPWjjuWzoBBwUaq2gg5nMZy8y8x1VSKHZhKQ6Y",
  "key21": "57827hVnfg7dWXoumDanu2jucbALFAhDpsZoCTBz2cSakRmE8iE9kNCgyuJtqgfaMpkVnrv49i2TJAvXHXo6N5oN",
  "key22": "ej4Lx95xsUUFtxm6c7Ztr3N4PQNSSHCZGCD1D6dJ5VdVYfappDD3dHfddDd64D84zefHu5BMWAMtUXnmJQuVFWH",
  "key23": "56kGCfKDFpLS7u3zTgKxnXex7gzMxNsB4mvT3Y4b6L9jR485ZJiwxTa27HP6wSkutfwFiciSZyPZHQW84yLNdL7k",
  "key24": "n9fwDbvHSab1pryEuvkQwHeRRhxAkGANQtHnaux4zPmPNGgQJwFWkzemCNzcSQ2Ze5CFme7niYkw2WvaPChXr2b",
  "key25": "5skCs4g9KYHmxwNREeZsVB7WNBd4j8tibGdCapc1BxzRVGCYynVQ6SxZh5wq5sBjaeomdFJEyYerRRKqYyisbJq6",
  "key26": "3YNR9Jy33UZ6efdef4BnbYnHncKUwy3coWkqyr74HPmv9VFvpyZp71uadHRktbCLA7dgsRo1D5PotFxsHPppZtnN",
  "key27": "4G7ehiJG4Gx1uGqj9oSGWouRe7qHeFe2SmGUitzKzzp2kPh14XZsTmBnVtamqsPvYyTQWvZjTGT2bmxspqXbgBVc",
  "key28": "fGDQTdb9jjfjEeK1ABmTucdw1xbxa7BhnpXrWHLiGnKth4JbWmDD2psy5ETDWMLJWFHVg1bzi5wpq3ornf7Kiua",
  "key29": "5Hez2YrARk7z4j1W7dnFuBqyV9qQFKNtcvxzAmL48Ex2ZvC9SsAB4sDV3gotUN9QM7xcttoqSqgDoG22ospZRbbK"
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
