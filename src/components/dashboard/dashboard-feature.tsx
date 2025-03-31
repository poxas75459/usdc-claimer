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
    "4KZYgtkBP2sVVQP1yRx4frV54pVoB6K8ZqDhd6Vy9oFSKA1NTeEdSSzSwKcvFnwWyuXV3y4y8GhvVUiXd2uP8xzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkMs2Q4MbcdzHTAeUdfoxY65PGRzKEepLcWeCjzBKKqk9Q2abUp5iJ7FoEMWpLgSwT6TPdbFvzEXWpatam6TfDg",
  "key1": "5kwrr8p6sUwNXWUi7EcxcCRxGjqiJz2ZtYYeAg18UG3DgQaa26VSsJHsos6MD7o73rZ7ECN5whA5AnW5RnQ4F4FX",
  "key2": "VBHD9mJdRyDG3hJijqEQ9tU5ABbkSwCSXbUdw498wgSczDAdqQBeDJpXmewLCbvPWw1xc5aa1dNW1RXvC14Pjb6",
  "key3": "5PfE3TwBzJnSCWbcuqYtRv3HursPhuqFyKz75k93CeWtbTcUnggnbg9uqTCuKG2JfW3RFjZ9NxEu3p5cTHKvmYkF",
  "key4": "52YoZkZQTnUi3EHCTfXZRpvqmTL1k45pCm6t7CQVruUwDGZ91PHL7Db54Fk6Fpyvj3WVoV3GF9uXXj6uL8RkWRXP",
  "key5": "49qVpc4ai6HGqh3Hr51pkfyFmsa21pcLpeKeH18EHv2bTxV21WN9rhJ5H873rBNnY17w2spWkyGUtPEG6TemVRPH",
  "key6": "E6K472XVo8SyTUsr4829qATcQKDmXrdPD237tuZGMqdkj4GRqUhWZu23ecpJQLzkYw2rRLHroy2zsBRWDT16LAo",
  "key7": "62kxSHNhSpkEwzF8z1AUqpBsNogTTUH1uNyzXgGA9SYdLpyA3vEGvUDqQCr4DAswVBoRH73RMX8jxaFYoZSjjJwh",
  "key8": "22zf54DprwSLqgryk1Dv7kQzZCzWw2ETg1JHzRcfCxdQmGaG7VBfm2MD7QLXXKB7tqV7BgCibUP3i5nYyjcE7Pgz",
  "key9": "4NiERX1DNTP688a3pojQyAvRULiKkN3VrMm56LXrW7JTyz49rr6pPghNLAxfpzJgWE9K2Ed2gHWqAf6uzJHw9Qyx",
  "key10": "3X4rFhwT7mwXYyQhMaYeEDkJ2fDgoy1jhf8L5nB6h2uQiUEh8KBRsxg1XVmcAnzCsmi9jekq6fEiaB6Wzc7SQmW",
  "key11": "S72oUsAQftFkaoisAngLSxuXz7aEsp5JXaYNcjiHUZTUNydSpDSn3NT7MftbmM8FVdfdp61G1kaqDkduCCKVGiJ",
  "key12": "5LHefdH8En5J7vJGRJkpu1zXDhXqh6jWmeQm5S6QTuhWrhuytT21mUkNKBUvXxkqhxkXoCrnHx1wWtYEqPuSFdPD",
  "key13": "HE4Uck12fu3tBMErBAPLzC3Txv5jrzasLcueyXLGF5ZcEQGxdPugyedCunV6pv8Q9CdQC6YD5G5J78jJdh4RywL",
  "key14": "2E8BBSvJwm8LJR9bGqRA6v3VPtbhhMfzbEV94H1UThqR7AX9t45Q5ZdTZgTNArvQdMZsVnH2TLm3ExumormQ1D8L",
  "key15": "2ipFECNhCcuZoFAc3vyYYA5kx9Mq2N8rShyTNzJRfHE3SookBhtGLcr7Tm1RmjHrxqnp426iiKPXswnFaQ8yWVBg",
  "key16": "2chMYSkdfV8iuLDW2THB3ZUrohg5eDegV9NtnbZfFtgfz9ducWoBjqwCNBKW3QUoTvZK48SNpCdFanowzHn4PLX1",
  "key17": "QVuaPnXgAaotHKivyv3gLVvXXVxJW2ivokUpmgzSDUhzUqmLqFUNr38oUBRHm2MgdZoJTHavCu9hVmNexreQqAf",
  "key18": "36NAq8beBy7bA9sy3vWGF7YKLnmghyneJ5qe74GeGHMUeRqjhAHtrWcHgxas4jes5Szpy4VhK9NkC7qFBa5JEdG2",
  "key19": "YGThjGjjRVBvDqrWYEEbk4WkNJZeFZ8Wxx3q3ixrM2vHRhJKMjDCXMzs268XiQYk9m51TRj8zwBqujkR4wCiRmq",
  "key20": "36dWSPKkpYaPbspwcqX1MDYY645hVbPP7GffPGFYtU9MiM7wBssYiocLPATwAadHMaKJupJn2Pbo9dgP5QNNG2rb",
  "key21": "5BdGxqxzukmCKxttao2SRrirL4mRpwdJoUWYa9UjspA5vEvBPaBRGg39aGxiwfNFT1tQmCsKWnnxyDRwgxsfY2F",
  "key22": "3AbT2andxGjAX7WrG99xoRgLkZeBNCb5qxDbUT6xLpUUsTmZWAKFujTNpJNvv3sDmekEfUyfCPbRz6nWcgpoGbRy",
  "key23": "522qdQsUPmkHhJvuNhR9Fseef5Grw8DTVHG6kxta3r8rtpXE5zvkheuTtYzG7YJDrEYvcm3YXbH2GfzfXbAireBG",
  "key24": "62PnardkZgNk9zwpC3AkdbhFJ3po3GPSkkhYY5eaSM5G8wqcQnPjDZYp1ZNRdNi2H1qg6ykgF5daTHca7QUvAvFP",
  "key25": "4wAGnjpBYCUtPAtM9R62rLSZkkkfZSpHaU21knAYxEpskEMC5jYwZHgcSEtYkddU6cZNAqZNbMdA5sKFev68JQta",
  "key26": "oGVcMdzPwWRa9AvSqB9voksvfqnR3kPrK7bXAkDkkanA7dZuxrKKW32Lmj7cMVHFdrp7UGo6ysybtR1zPWHq6s2",
  "key27": "45hEVNfsaLdDmZzMTtJMaVH1FtjuTnfRP82Rv7qDCmidrBttPtUm4XRCUPhHaWKW2H7hnFS3ufiyP9U2BDKKNrto",
  "key28": "319H9jMPsFRU3JBvej1L9q8Jt96YDWYirCDvSTkDeqT6kTTuarWkpWfeyhm3wpa4fdviEs24Mrz1357tbBpdoc8K",
  "key29": "5Xm42qUfUEY8n2CWTPWtsKJfD9ivm3GAJyQZmFt1syHzK2Nw8wuKZDrjGrpewrYX4FPHmaTgkwvoZXG8MVNiuAU2",
  "key30": "3d1Jizsfbggksd3nvyXjfMtbxLzwRzthRGGfWzggMChJBBv5hnTxjSEydZQN92FcWT9bZKXZmpSiZhkb4GHHigr9",
  "key31": "5eaZWTJ1572HaB9e7ftU35sMAjCptiVrW1vtC66EdchWdipDXnfeS7wCP7HxG6MtEPUUVWrhFHkqzNYSGszJotZ9"
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
