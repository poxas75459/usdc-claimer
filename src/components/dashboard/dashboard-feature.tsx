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
    "2FASS8UbgNPZrw3eQ6bHzWhKYxppz4wUQr3iqvU3a9akzywzYRWCPX4Up1jU2QMzQykJE3oPzggAnDEi2W9RvZhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ArAVuqs8woAwQoNkR2pu4PTDjHKxQq3tJ39UBkkDgA6VkSggua98KrniVFKPQyEwNjaZP3DvxUDQCkQrV1W3de8",
  "key1": "3D4BGnXzCH9MJHdwXan6E6FFfNYb4JtwM2mJAak9fSnXhjwsyd5zo6F4AqLKuC8PfCYCU79M6KRRceZGrfLUpN7S",
  "key2": "pZaJDz4wjzufptz3BYnzwbCtGQ6jTPDo8JAv3NCLrBBFCKsURxxrX6rir9bnAt6stKZKgwRnZVtFHnk41hxLkKk",
  "key3": "4TNqGVxtkrWeQnuYpmmQsDtVHRCkh1xR7XsfeUG4bTL1qrmSiLGcV7qUDPRJXfp92eXrpvJ6TDaaVvYCMzq5Fd3",
  "key4": "2hdF4ZBbYEKdqLLrA3m5PC3N3XzoCpwX7J99ceFVEKka6c574h6sYysfMLYb4ERKh4bhZdHihToi8jQdfgMt1rFn",
  "key5": "3BjBuFSRu57sJMtm1UabYukFzcdfTkgQmLVHPQBE9TKwCboZEpLWyCaUDC7zDfUdMwspXAmZiaWj8g2EFkuJcecn",
  "key6": "3m6kNgWBUCakDPbB9YX3NvAJ5V5Tpt44aYCTeferFx31Y5QhmvjxGM7nSMzBo9JPYSrJwB2qZGCeaGF7kD1ALtdw",
  "key7": "5tMpBYEMM9SjznZfwHbsaJZLGid9QM9zzx8ZjZtYJcKFGDoCKooiZNgWY7orYTaLyhVUkfsJPYgy9iodzLA3SSY5",
  "key8": "3FAA4UpeAQksWaCZbuPS7MLHH7oN2KJZimajNeersvykCpMCdn6fBJN3oquPRSt9V85hiYzXRQw1VWyeyKewJUsw",
  "key9": "2S54uorbjDejwMAAYHojc2bumZ1y8nBKmcmH1tYfj9rwEScdVmDaXLwVFhcdvCmnmTGQHbzfeN7rJBgidDFkM7sj",
  "key10": "2CpoQZEYLaxSd3A3ZwakFAQwZyrY8MYwbvR2abpbFevQJZ8LQEyWWAodn7Cca67yd4JPwUSAyN1NVWX9ZPLCkzcP",
  "key11": "5dvdzr1BKE4ydBtgfMY2mat7E4rvzYYmdULuTzp7Aq4aixibncQJMv8vZYLBXhnPMKdPrNwirvyNeZLzuu3PYRoD",
  "key12": "Vx4nPSK4grUF3jGyz4FjbpTpfGUrqwTPrrUykmtWh35VEigzbcAcuR8vrGi94E92kjnUrqVyYspMZgjCHMFKA8S",
  "key13": "4t9PGE6wxAYY24RHVg1ywoFMUmPSaLW9GMS6akSwAAD5iufmVzXD7yYCPYAb14NY5nMbujxWKg9Xk4sG5qss1LzF",
  "key14": "2GPAbqXuAWSJuNdux522tFaerCwm221gRtPYJgF99i89N2v9WX2ji4oXfCVZC1tYXVEt7fqkkhQnsNooJDiRexir",
  "key15": "49QihxUiaxRt3AUWnXLAdqQKF4tELnkfHB8KqKmD3HC3Kzs7MXjq6NPJezmtL6F7zvucCScqLXMtCf6ACNChANtf",
  "key16": "22csVuVWDdt2mQ5pCRp56vJE65urS2aFZ92UGR1PiXuxdtMP47jV8zcbi6hn1biFxrKYTyAh968mr9YXfJfxKykS",
  "key17": "2cgrvyHfHz4cMmALk6GgJH3fMUu6cGEoAvzQs9cekvL8cn65RGo5fuG3svMs1PP3keTQ6SC4N1caEgrEJEKpsapo",
  "key18": "3cTTR8L2RD64Je7pJN8A7RvHEaBxdeCfa2Y6aj6oxXygkFAHpRo6TYALEJCbjFkuyDscwyahNCkLmSX9VGMxCGto",
  "key19": "3b3j75DHotRWBAoDiSa9VpXUnJQoP46FSC3PgxsxDqMs8AY1SwpbsjqHWKjzBgdBBZEYi3RemiyLjXAeKwcFgMCr",
  "key20": "4KRidkEANZ637DGCAfrpb6ykvKNVLxVpnb3DdJh79d4bb7g2kFjLdNA9caqkkzFywxtnjb4w7Ndrd9cvKmdbw7tc",
  "key21": "Lff2AcBLjaabADeVJHycN4bxrwaaHp7kELpRs7Q5j8MwHz5RGPdFrDkcbqjSX5v4AbGn4C4QsHVA1NuujnytZet",
  "key22": "xT8gTXQTJXFt9EyRJWctt2mzK3P4jMy8HKoeDXYP2Xu4ugFEa1u18CEukRenPk8GYLQoYg9aTy69psLRNJkPEp2",
  "key23": "3o1cmfvZrjpnk4oBTDmf9NnFTSogw2vorfYY3K4YY3i3ZmkbZgjnddqRLJoJCjVwvRarYcppM6PaadWLg6epXTo",
  "key24": "jrXiA13Z1FjGP7SRnr7DX5AtU753QHqN34bqouDtHNaPtDiHvVi7VdEDSSPpEm4BBoaG5E1BrEcJAr5QoWi3HSk",
  "key25": "22pNxj1u6HzoR7ajeA7DFY7HdH8LyYNeQuJPezdQB66PWzjQSYe7gaCD9ceMAqxNoN9Q7EMw5jHJHbVyKrNkPxMe",
  "key26": "E6GPoMpiKeuoEbboadWACbw7LDXpeSqxRMUcVEphNk4bzvNP7tFwp6DmUuHFo2tdmjiXrLxku5QfVzJtqtcN3KK",
  "key27": "4xB8iD7DZx8SJb4qj5Z1m3Kaa9z8LA2dMdynT9eaiB8yBpMZU8ZYJ8WbdSbL7uTsDpCFccg1sxK14vnEPqNp2X2m",
  "key28": "2LNumKJaMHLPqJToN6LcCMLaADAZ8YcXcsiY4arPaXf4AnKNK7JxaPmmpwo8qrmmEHjnLjqT26FFiVVz4NQswsZ2",
  "key29": "2v4G86SbZGTAzsCsu18QbcVBtybPHQHciEhHK4q7rn8mwtYhJYDghNLQravjJUim5JnJFosrtKXi7uPj1Ccqm2LA",
  "key30": "4X3mL5PLTu9YqXw1KBgYoquVU151NPibgTy5tvE45u5Cwa6eywFzGGeBS8BbbxhKYTQBf4fPCLvHWJLfv4mhCyPn",
  "key31": "3TaFxs1X8MWVBDN3gaHD9cwVVKqVMDNy2kTfTAKLETYDvS3pJL2YfrMe2s8Ewe1B2HLREWA3DsS5HsQoa2uLysL7",
  "key32": "4qUj4vQpsaZ4KkCnrAkSfVNPB1PRZYWNqqR3UXutSZFVC1Xph5YRMQ4PRBj8cDrRJF1kuvzNjTMhGUTc2d91WeXW"
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
