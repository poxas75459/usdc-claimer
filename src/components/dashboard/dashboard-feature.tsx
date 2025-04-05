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
    "Nmh4zD6zGSgfR2NqYFEiNtfDgsrqPGnznxgUx5WAqrixAw5Y9A8av7mohvDPQ1TLrcFqZesVXxkj2PdLdvxNUUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xYRqVAh9Dkza6PSWg3VTtyM3XKTUSEAwG64b4NAJCVRnf3YPAnGvsmZKRas7G83RuCx3CxFHptbs6sDnQgmXmQw",
  "key1": "635q7SCmwPmPnPe7UKYpRJZ13bwtTKq66DaWb1DrQKbiYTNQFpASnXTn2hRrigFxuxnw3prNH4yNu8ekk9qrDVwt",
  "key2": "qKE97UpE8QXMKpDbZGS9eeRD4aZuNtCCk2rsgznA1SyN1oqsHfqQkLkGMcgtw4iH816xwjbjF5LziVyWmACV5i4",
  "key3": "4KdmhUr94ro25izB915cJV6kS6r7ozBoH1xwxa1rVbxkKgXwBeri7MnyRBucyENLPnvuyjnQJ5kxnuNjqdJJE3Qo",
  "key4": "3mh73ismEcPXsfacDCFm8k2yBhxmV67quj48xKGpPvs7SL7u8Dn1A1z8BbYSHfjAcC2o7x5HpEUVWs3fxpgEy6HP",
  "key5": "5DrkJ88bsK58De3fwLfMRgSCK2VTegAU1cd2UPCKq7NYimovKB94JDhgQtCbDPxpH2HmDAAHCqkqofmGv92gm4b5",
  "key6": "61HjHBQG3egq1pMEUxZiDJY5NggJzZZdVqRrnUSThr1ZmizWBY7ejvv1UrRPjEau9sAbeWWUnp3JQRTd3p72Wmwa",
  "key7": "3AxoqA9rBHYAnwwfPBr6Q3aYDRUbRPZ3ez4hrJofrmyuFuqrs5GbBEbNTqkxtpfcAAyQAXmLnVtyS3BUVZzn8Ppm",
  "key8": "5h9xuFvTt9hovEmnxyosBtmyp2Z879xKLac1MJJ5Ctzwf9VqF7KwqKcEkbmn3ghfFnHW8maGwYTkS9vrqKioGj9e",
  "key9": "4cA7QkjnysL6kqH1NExs62Jicn2tf2A5AT7jsnktoXetpKebp7bZKE3QrcoSpvCSteiP8aMGEEioENJjLqNN8k9S",
  "key10": "3uPHgEANEZc5vMWJ2yNJCWBaYP5Japd3B7LFrnaL6rzMW3RbMjyexuwsURiykRLPQLJ79HivUdcm3AZjJX4nLwyq",
  "key11": "5DAenGAUx26b3ubx7sogr65WJULNr6pqPThdYCSCFP2LCASfFZq8QawYqVXo3C3LfkEvSnBFEqropeVjmgj9HK9W",
  "key12": "4JbA1W58qNK3AMJHY4wgM5RmErzawAq33wDiowjehmuTBzqC8HznhU7K7mhnsYYWesX1pboEhw8ZWphJ928bZ4zK",
  "key13": "43S9pVkevF75iGvHuqucWsafxj5kkcTzn8eiAwMqYKi2RojngSYcnQWQ5JLUHybRK7rR9EMBtZHaC79HEDsa8RXn",
  "key14": "kENQ4oQVkFoQYZtktTTFDUSyuzPQwSNi96bR5G4ym9H1FF72fMFA6HYQutF48HXSSXjxGKXXoYMoXtMpj2tyNFY",
  "key15": "4QmkxFGRf4itvsP2rVQCLEBZis2EE7nXFtQ3RiseSda8dav5526hhJ635eVXDdVRfPkvaQacfZhkDZE1ARgSwdXE",
  "key16": "2SBWC4XVe4k5vPEdskBA7k4pqpoqcYv3phXhJe1KCZvQTQPmZSGJYnBJTbJvpu713ZF9fKsnzJmqRUY28gDZkY6L",
  "key17": "3MVUb2N52H5Fsk3KF62btRaRxfn4itZK3zdDtEBJgh9TngH5kHpJcK5KfprRdMscAqiX2WtpYwrJYuKMV1ZzjzX8",
  "key18": "5LAqLvJZuT7vjyYnNVsg3TNViNJmJZ5MDTgpNYtPjicPJjs5KyoXLJyQJgMQb5bf2ZBVr5s1kzvkHXHPWyGkNuHC",
  "key19": "1218jrQqK9Vrq5zqHCTTsi1yUM5R1eMubvoYXJH9utmaNdydUDgUXV5GGtKK1AxvZCo3WhCDFsu3T3qeSc9p77ko",
  "key20": "5ah4eBFRBEBpqCVe9eK7Bf2n5JMvjCi3jUa2uibMDsudin9HRjGb1cuj2D9J7JviDPbeTBXUBBG79ydVuqxMTGFN",
  "key21": "4XzdUDR2oG3MrEKcdk7zMwF8eJLtFw9x4puMmYR6Kgq8mNstwCAopqTvyx1ZVrvJUtepav6XZ2YX4jWqgUp6jAjr",
  "key22": "xvHu3SxkWQxdUzoHg2EtDfDE6g8dgz6hbsBhnRMxEwWkrT3F9gyG8dP17FR8Yqpbo2Uc4AuYSfAn7DEQWLWtAVe",
  "key23": "5bjryMVoqqS7VoXmWrs2YnaZ5fhwaPNKU4EBEm7Tq4hVHnreQqDPbdsA4vYfXnBVgr4mbC4L9WDgRfC3dp6dAnK6",
  "key24": "2gjPPV1Fwqmnyi7hTqHqE7cxc8bHDT7wANZXWCy4wk8gBALJj1KBA4sJCpV5FPHHtUbiQLDubKsDGg9ydJQcd76U",
  "key25": "2rYPN7UudxzL9UDEtZ7J5jMznctqg3QeG4ASjbVQ3u2kLVKbyLwg64gTiBKJD48aBf349x3J923WyK1RNiyTctqm",
  "key26": "2ARtQ8PmGm49Nky8CyP5CDzUc8EfCgpg7tkpyh7utd2iWNPMfpGhZLGJLJaHAHk42VxPEagUBX16XfwdVoU5UrdQ",
  "key27": "22937KVnGWpkPvf9TCGHtJv5pAgeKzAxQ56zcG2iethNGFLpGCoaHwvUTtyQkkW71LTnQTuj32XfqPG8mMBS8GFV",
  "key28": "4RBuL9aKa9yYwbMHTbpiwVAzkUuuWAhknGmkYt3U7EUAUN9VUVAEVSTsJU8WAASTa88FwRzAXQr2tvhQHPiSAcLX",
  "key29": "sNfgygacApLYihQNv9tW3Ny6FQcKbqxBCNpnK1SGvPS3yQWJQhyGAVe1GTeELwLnfuiU6kuP69PH8mvKqYByoQX"
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
