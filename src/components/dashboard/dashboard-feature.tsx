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
    "2sYuqx3fp981xGKdpgcHEH6s7gUfULCarphSJdaDxR1GNMmTj3NR8sunpnspaHgCPF26LkH9XZjoDWyzgWr98s3F"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3q85ZLR9g8A5LWxvcWNmG66LAAfGNCFMs46KqQyXsj7YC6BNr7vJgQ69xy6PQkStq8AKEdtVny3P8y5c4pmNyka",
  "decoyKey1": "24uqpL6Jhf254jJ8pLFqnGfe8Rk48HnckdVfBcK3rrsF69cYpejpvri1ccCMs6xTnjrUcN1tJ3wsbqdYm6S8YG14",
  "decoyKey2": "5ZJomabKAmf64W9MQJagmzeyE6xtJV81McuFJz6cCdkV77vdxvYE2bUXsahHpVLw8xqavFgFKTBL5Ayannr7YNce",
  "decoyKey3": "2sidpqYZ9ufZrKxbcYqsm3K6G7CDpsXzX2GaT62vYrs9qe9Bm2RCQxThJQ6GAr34MXUa4k1xrUpk8Q2s9AUvV57T",
  "decoyKey4": "2NjTuvc2wLMyefC7tnMiR9BcKEi7STygid46PwmK16cveWmFwbCk8mZUyVF5vbPz2GdRT7dgwu6x2h9XoKGDEvdt",
  "decoyKey5": "uCxMwJGSy94swfyvQ4QCdqzJWTDbKvKPeyX7AjZQev2MNPmtxdJB2FuqtYJJF2w4wXTtbt95TuzcwQC4upUNAQZ",
  "decoyKey6": "RH2KLpg1jcX5nj8MFUCNE38NWNMU2q6NpoybZSvq4WWE3EoZ7wMzEcdp8R5tAb2tvjWvvJCXP2eTehhAuZmm2dn",
  "decoyKey7": "3ppJvJD8fdMXPfxgFdsTkLWJQyASBJ5pH4cfVB7UFmxvsvNErsqj8GhkCWzL3TZmmGtH6BjeUcdDB5BNzjQM5CDQ",
  "decoyKey8": "5uJvng5xyC2JE1QZ1diRqpuCx1dPDvbUf1zxAd1B1BStw1wMRcvbVFCeKorHXLYQJemdRewob7M2bc7y9gjEdFUf",
  "decoyKey9": "2JQXn856iWbKopAhSZKEWL3E9LrTymQWwFYz6MoGiZnEayNyUaqmxtcW5CwFWtmzLfUq1wafRQtuenYCw2Ynommg",
  "decoyKey10": "2YRwgsJd2eEWJfj1v5PKHSFeKmPrddc72zxDc2wEV7ee7bD4jhrCdUpEENFvJamGhzyRZeLVmHqSafkBfdLupcuq",
  "decoyKey11": "3u4ZNivruu6aKDSyLAJZvx4UVqv2aof2pmLKr6pzQfrgWBKHug84DxBzzEYWLyNsFCPs9foVptRm2JHFLTz5htdS",
  "decoyKey12": "3VFVxoxjG6mMyTi5orF7ouKwZ1tAs5FRUWo7D7fB1ZekNQNgPAGdtiHUc5YHk96ZutL1fKbnEcaZT58eQrQDDJkH",
  "decoyKey13": "46WG8c52ga1HRx5beuYoieQ5mbfkSkUWiSDQL26R6JT8nc3qNDcLDBnAwtCAuMHfUsAwGZ8X6LGUTTupVcb6egn3",
  "decoyKey14": "2qXhoAMKXAigyquV9qQeosLqyc4kr8MN3HVyq6EJxCtfG6jeGcyrmTndCnYMmCNeN1dYZUWF5duwVAZ2J4tBQSLZ",
  "decoyKey15": "4wmoovxja6LRQuJ9Cbu4oGev3KJNvgxBnHixXQ4FiggPsMnuGhq6YG5YiVbnVAgxsZKUzWZLCT9Btjo2dc8rsAMx",
  "decoyKey16": "67WJsDSi2LvzjicwcoYY3DqAipvaYyWEt3rQb3UK68dMcw6FBxoGTzUUdo4hEgV6tEdUW55K9gnoSW25iViBWgdb",
  "decoyKey17": "JuudCXEPT1CjGWYRfJxMxWhhafCJZ7rXEy41iXDN2jrNiN9htBgvizbUZcph7UM3585Yowe3krMSjKxhS3huyNE",
  "decoyKey18": "4pN7ujBum7mr7kpwvPFtVJZap1uF47UPbr6r4f34zq2Bo2wj22MeMpfHrWjiJxUSa3EMdba4FhXFgpxqoSM2kxXb",
  "decoyKey19": "43b1KCGifeEUqNgmqTyzFweih9XNu4Equof69aaSeyxQA1WNRuUvAm28ujLZ3WeZjSZFvh35Cwr4djPmb3MJpF58",
  "decoyKey20": "2nSYFfh3MrXmuhs7P4rVpbdMgwNDVneRpTVCLEa6AMM8mM13N5kQaMB8jaKZsGLgE2Srd6jCR6Cyu3rXXo4GZFix",
  "decoyKey21": "4Xb9zTSQdHzvDY1Sp8FeGEuhEhravh3fm3AB1PNFNWYjKWWeHEBmUw5ygJi459zFExWqJzg9m5UpQGRhy89KFVMi",
  "decoyKey22": "5zuzHnyCqvGaexpHpb53UhuUGtuMUsweQEqHYHPsgmyzsEbH8YZAMfJP1pvpnp6YcDVYwQ7S7VGP6TE9gzKfG1iB",
  "decoyKey23": "2nU3ZgiN7PXKPji2mm3GB18CthUBr2o78c5jNAPdJBFSusSBNjbsy6BeDtsjU3353ksQHZf7XC92oRUwGXuajyx6",
  "decoyKey24": "pKJTD3DUQvY2JRHi8VZcsX2qmcMEDrHw8oEHscdVmS81BNhtwavur1FEDmLTnVdSeXnBpcfmSpgKgJZugbXnjUa",
  "decoyKey25": "mcrMD7bsTDUjsAojzCGkbvEnuh19SBUyVfsoBqhUYHk89zu1UYxDtiKWU6GyFtgRDQUnyJS3yK5b3R28h2NJEL5",
  "decoyKey26": "td4on3FEDrDZttBdQTdqBMMWYmqb4EPAqffAip26Y1M1RTwyXrhYG1oe6vuJcEr2CzXUxQwUEpSmmfMmXcGjZqv",
  "decoyKey27": "3DMBtYzahSsnUNANx49rHKfaSeWCFERYxWjM8BhoEQrTAzGwNHmDXUe5AZfQxESc3i9EeztXiNq3bmXrsAJK6F8G",
  "decoyKey28": "3jgVPH1yC3ffaMx6ENJfZdoD7VCEqgkZK5Ts61f9ixRjB3rpNaKXxMc5GjA4QJYjNTJwjygiEz67cNd7qqyeHSes",
  "decoyKey29": "5V2gacKRs6Bw9ihNqUvbAqztccvpe6nWs7dJb8jpuvmHhpVR5FXcoR6VFWq3FX8FFLPYwSvTexWknsX5jkdbgqAg",
  "decoyKey30": "3howRKJFxBfhPQHKi944DCHRafA8eb8Du7912eHf9A27pcdMjZAq2CpXwoDYTKs5Z2efa9mgAgJDo8KnNjiVbfbb",
  "decoyKey31": "4RJ9gCWhJfvhHtWHPPESjA5CDkfoPqkwRbLhngjaBuYiVA5hBp27B2UXiGnMyRUBwC71AiWkGs3FhUwCCDW4qGCG",
  "decoyKey32": "4MrUTzDyXpHMKCifNYmZXRym9LDEbSXZa7T6eLiLRmR2ctC1vUD1DgjtF2VX3FtPBQvcoeSnDLv5JMz7vBpL7rQM",
  "decoyKey33": "3XEGkdwo1asAQC9SRwoh666k9V5PbJqzJvwjCjR3P7Qi1mR3JfLBPuhmiWq71SLNQ3Bk7WvJX1fWm1rbAK3bva5D",
  "decoyKey34": "2zpf4dfqdaTzhC8KpgvemY8yMG2dmbiv61MqsC1midaXxdwEu2A3rC2Y1pvVZPZMikXMDrWUZEMDQupLQx5ghPbH",
  "decoyKey35": "125YQFLwdUUx2pcEaFkMPRoNKhPhrMHBAs9FQFBqHW9B5jBBrkmpdMCLmBDyUMLVkckFYqX6uWLzFKPc34PTrtDL",
  "decoyKey36": "3QbYjWkUWRj7g2e1qiF9uVjabzMwhFKz4Y4uFLqjbJxDCb2grjzqJLfNpVQWsjugZn5neDpwAQCkqucH7bEqZGor",
  "decoyKey37": "4fSimPbYAjLXeKpomFtsTJRASL88feC83a8d4KwjUuCzTZDatVSe7CBVbTPBrnNdnzaBSFCi6TKYW2vJCGBjpCe3",
  "decoyKey38": "2pfNy484tuUChFtx6zLp4ormZFhd34Agw5p6MPPJhQPcdMSXrVpkNYWYj8sr2oewvcVPFX9WeqHVBzWXMdpDhGbA",
  "decoyKey39": "3wz2eqvnWZXPJ9HVqSLy4aNeJDhvztdVT2h9jiUT8iUH8KRheza5EcyAmmHRaK53ihEAErB5PHamULSDWocqPs7C"
};
// DECOY_KEYS_END
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