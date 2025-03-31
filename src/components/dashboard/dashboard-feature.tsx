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
    "3RiQtveVoKeMEZ7FJdUVVcxaFNoVMp7dT1m7mcw7iQmckFSiupwB47QD6hYxxATkDdZE5Tkz78NThfmYHp5zdBCp"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "63Y9a16uE9mSSztBB5QicZkkt4ncGAbCdmyfDfD9NB9z4aRUa6MSgof9GJB9774Aft1qBHP4sczTjbmqSoNYJvus",
  "decoyKey1": "2rstYiUaNuDR9R1bTzQdr7vFXm9i2R1ByQq6eky8qHs5BQyr5obAT2ZAzBUtGNNRy6KPX7Nns79RZAbfsAAWMHeo",
  "decoyKey2": "451jWxZvxW8sDo9K6MQrhyib5taYD4xEn6TW2kbdCRT5KpzfjybSZy6gAD1Hx3BuD2iFyPkfHj47H2mzSEdh56eV",
  "decoyKey3": "36VawfJ3XvzmQQrXk7vaxvLyUCUcE38cxjpuU8S2Zxn2Debg7wVGzxMNQy9c9FmVE8kqpkkMNsQxt9fquDR2ew6w",
  "decoyKey4": "5NSiN2GHFyPffst9LBVbyxktCLZ6WbfvNFdts9hRAKaRFgQzSSsLgE8Hi8UM9fw5f24YEAhZtkNtxVUdNMwTVqyJ",
  "decoyKey5": "5ozyQ61GUHy6LLiUX3NfsT4wRRWDS7FXAmy9v9krQuw1JPLbSmPdqcAPS8GpVJaExcnYRRNWRBNRfrLoQxQNM7Qe",
  "decoyKey6": "2UVZwVDZRWcHc8U2U1jQhBfQyYLzdTd2bs8NVt6miTD4eGcWtJ8GPPDuvTpuCX7M7dGe25pKNiSsVoyey9eHQiQC",
  "decoyKey7": "39EsWZoQEGfE2g2GLT7WJaiKVQMeh8F6UjxWzUYaHSjj5NEGqye7FdE7qNrv655Ga3uHE5zqyAfpo8xGFGYG75qR",
  "decoyKey8": "5wnPaWLfgGdPahpZhH6gpaLT7oPGqQMHz2FBamtU6igtprGKGzYHdpMMyqSi5XcsYiDqL8A76KvR6EYyT7TSHhdm",
  "decoyKey9": "ykT7tSzA2gFPWNB4qDEdquWJskhmBTwAHZ4gdKyXRWD246GgD5u1w9zaMKQijxEHJp29tyZkWuWtyFxdszkvvG8",
  "decoyKey10": "48mTn9duJ9EJ1uCHXNx9zA2b4iJXGTYB7Au1qQYBf4xYTPHTQoHdLwobRfGUThpVN882d3Wa6KVLno63xuV47tke",
  "decoyKey11": "4CmF89xrYnun3vuwiXLYobki4N7Qb6q5mAAaQkXSD84UicaytW3KPCvuneZqhuFfBPB5v1JKKJMChTX5M7wpoKNY",
  "decoyKey12": "36PBvAudFnBdP8iGE5MUQYYrCKUt3AYxBMLxcRGWvrJFVPjR6zHDFd8K6TTbQ2C2pnk1bQaSypq65ekYotswA1wR",
  "decoyKey13": "d3ZUSXkfswU8rjyLNiAye4L1Pt175qzGm83TYrj7KGxVu147bq29pqdnYGkLXDNYNtR65aKh28CRPmCghCbXqEf",
  "decoyKey14": "3HxSsRGwkLNk8JP6X2ZHV1uV9zfDWbAyyDphazfqdU5yk64MtBvpP3RYCWc4ut1RuAwwSepLTLhcQjkuFmNTziuo",
  "decoyKey15": "3R9xYSDvdJi44SgrRLAfTKPdGiiF9xpQB3z74D6iCe84AULGow3QToUY9rG2aof55vHH9MEJmU1sLReKGeU21YuA",
  "decoyKey16": "2AJTLrYVm2DEBgDgQjEWz68w1ZSv6V9eJxeaGZyo51VDQy8UoR62j2M2tgS5PyrBTyydbJiDyADfgqZWRDDdNwxX",
  "decoyKey17": "2H7NPFUU1xjh7xiArNUCiW9XmjJGqrNVqdbK1sZpHCdjQBbjyzYWoK1QBG6t4xSSw3jhwDGUf1y6JGaGP3UKmru",
  "decoyKey18": "3Pivr4DKTRvLGFodqQCqan3wtsA9iArcimjQyraYcCRytFW8GoyLe7ENYzW6FBsAMurA4tP3vAP3iwbpXioiJ8iB",
  "decoyKey19": "4NMUDye8HtzMXErfsoBynfSkBtui2snza8gqfs8j2QdBCmsUVSkHYbP6udmCFa1hqD9ZLK7ZKn29rw6WZzZr6g2k",
  "decoyKey20": "4x1v2wygWhg6zCDZVwd5Czygi5yLGvVgvz8b9RUcC6ypgY69jLYuwC32Y26xPLSHoVuZjLYF8ZfWXLRiLPhKSCqS",
  "decoyKey21": "2yDUnJtyTmGy6FUJHtRTGcvoudBMfmvVovfTenbRtx5JqFosR6vZ51hLXxSQkvU63brZBikUUbT8sCnzBAXEjpPY",
  "decoyKey22": "4YfFKtShwH1Peb3uQszPS1WEsADoZ3K9JZLSRCSwQGsr9JMc6M9kwNy3Up893mwX22g8Zb5FHG6ysh9L2fuaBaXs",
  "decoyKey23": "2ErTeJRqkrxsFULqpTD2NXnVXRuS7DJdXtS6b1JpXn6Licis9wdNFV22pJaxMug6DMCtDzFSYzUoR6nVkTMS9RcK",
  "decoyKey24": "5rRPkiiUCszhiFrKyHCVsnfKh3AjVG2TDoPyXeF8CVAc18k7ybJvVbbM3yvwWMQiTRV9CJJkzVb4JoqQsg3oqvwJ",
  "decoyKey25": "2gsPHKyrvwk5zNM8RTwQkXAmnwFU3UzRUQyDsNZGYJTPupzt5cog1vtyd4PfnzYKBT2SVXU6nNSXCSVQfdkRcaNV",
  "decoyKey26": "22ARLogpUvFGWAqBjHqmkkCFkTRaiGcZ6brCWuj7Q9VsJfyGrfDaxEpHLRQWY6qto8oLf7tVE1WxBYY38bXsTife",
  "decoyKey27": "5tNxYiwgknCYBCMSsv83QX8R2vsfBEyek7zmvQMZ1bstX3UWUUQrELpEPLCyg9Y86VZ2ViQQFMDX1ukjbugdpD5M",
  "decoyKey28": "4myc5HiJGMVr7gmanCsu8yUYG7Nu3H7kqS1Ae2XwuKGAkBUWfESmrP4MUVh3UQCf6LYXWfaup7Sdu534wC5EsC13",
  "decoyKey29": "5VNHV3vQiVNzLsjVXKSDQ3gcHSSeDQPKxjiaiJi7bhdNYdnzVQvtdAWvDBDPn8PxanuFLGcQTr8N3hWG75vx4t8w",
  "decoyKey30": "3eR11iojsJyh4MuNPHy3TwVH5SzqvG5pTAApbwmkFPH3cEw6Pf6ZFC3joB1g2gmhJvznEZTrUNxpsW8RNLTPu1EZ",
  "decoyKey31": "122dCZL17iY97kxBqBZgY6Ez9eDVLC3ABRhTFvmJyDzbPrG5y1ca1qkPQS5iqA3En1T8h8UwpKYDNKt4ba567vrV"
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