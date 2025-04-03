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
    "3LKU8j1Qw9pBWmuwMhbATVkVaFPs19yaAAoS5SJeAv7myEj7bEMX7i3JqXJMrwods19yUfABBTHaPBXx3b7TKGWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cY1jmoYLBzBc2n1XZT1E9T6vonXF5cRiHRK7qtEPjk1csbysqKmGEKBDgfeDqVTJskRmGNNge9GhpnK6mjaKPVb",
  "key1": "27rawppfwo1ar2ZYh1c5YFR3ieUYSChcjjM5i4CXBJsbsuF2Mdwi4nyuRWbeAXErtRyBmLBjx6At1sR21TRy5emC",
  "key2": "2y2VP1R9xtcc5KT8zXZ5xgjitJWCb4n4wtMkVdWNYCzDy5bbtggcXhzwXvvmRqTFLvf9RHHnLNgBKMbDsEWz6XJf",
  "key3": "4CYvLd6s3hAto2ybUFh7EdDGcUZvwss8Lk7Jjy5RnYxLYx8VGp7euAkEEpVeQuhCx3obhJSYwPeWzsNQxL44puT9",
  "key4": "3tnyxdnSBSBm6W1jF6ydipc8mUtRP3sK2kUtCXsGFLyXCda2ziKWxyFHnzhYKtxYgCy7zA6uBymrpgsaSehXp44G",
  "key5": "3yhtJCfkLyQYuYQtFuzVVoJHN5mjnvvTnp1m4R7T4mCjLwJXbNCC1azS64XdTvZBShxwXrwSifjBCTqCE7TRPqXp",
  "key6": "3A59rMDEUqBmJj9R3ixdBRjyNL8VpSCcqdh6juGBhtZ57vLS6fEMF9Br83uLTSCbTzrjJshEK9qMXaCKCz1eKAcy",
  "key7": "55LspcANAD2MrSabfA8m4YxEK5cGKCiUH94mbZbqbHbDCysb9eWBtoeL5gwH22Z4M5PpRWVffhvmKiCBmuJSUcnN",
  "key8": "5DKe36ohYAgbfs3KTrkwT1EKZFEnh7a8iEKMs4CkJAG5WQiL33vBwTSN8FJj2qEzrBHbGsbB93SzEJwTNQQGCuF1",
  "key9": "4GWiZpVEVH7Sh7EThMbbSYbzv1gJKAovC4EASF9YRQZGbcHfXuFRi2x7a8eQQaxEbiwtiRTfqdynVvuruJNPm6h9",
  "key10": "P8ywjgXGGA97pcJbPkpiAVHm9GdnzD55be6eNJ2rvS3cWN7v9RJRe5cBANtXZC2josrPUUySroVPug24ehRkAbk",
  "key11": "2ZjFGWiRhRi9qU7HUJsjCCSTEkTGyCPuEKw4RkiKK1Egjjt9XTFUf1rD6pnDgsyDT3yun9DBa9wfLqx4DGjTchgQ",
  "key12": "5kZMBmnR4bKTvUhxfHSiWeZXF1jCvcmg3sBEfBkZ4sg35ZvSJkBbshs7eFxC3fJB9pEpEtD2YD3DKsQCAuoEu3e9",
  "key13": "s66jEcdMDxqnrBefR1DjQYg1odhTRPXekh8KLT3EcymYBDTijgx3TcNxt8S7x9wwiF5N2na8zEAq6TgUW3vNLas",
  "key14": "4HyeMm97nG1Re6GnfXtZieUtH46ocLVSky9Rcb6YrVhfWJfWfv8qK6FqJyzjVrEkbJyFYMu8q3fmu5tVTUJFfbNj",
  "key15": "2zZWqwXUd2u8SXd7tDBGwjB3y5w3Nsu3nQu84Ke2Ez1p648LRoHB9pZkUvSq7bQw5AyP7368payWeX98k9fwNXCT",
  "key16": "u6eh2dJ43PBN2ph7arZP7yM7NDLoXPsAV2bhSMNNmqwCtUBX1tWSXcuP5JuuVSPvbXpyVethqBWSN9ZUgjCQqCb",
  "key17": "3kshyM8w3Q9YJrpjiieVvWBa52gDgiuMsjAGeYfVzivQshWEUjMNZ1UJbGMS8CZn7xQx8AWc19Cu3mpLTvSa43vH",
  "key18": "2xZZ17BTELfSY8iGvcw5SRhCauP8sRuouyoHmZx9F8bLrDYREfdHeXqs6nEjHk7e2u2oKqRF6Nir38zhmuUW8YsU",
  "key19": "32b11wVwMyWczwKabsyQwWHXLUrEE5Q9f1uQCThHGsa5Kp9vAKXwksh1rUCaohjJFS9E2yspBjvXEcvDCfpRJbvQ",
  "key20": "2Tj6qFZ75mg9uoaCxEerhVbVVtV1u7rRGgy8PQTk8yAL9skenKz764GZig9r2PraRqN1o3p7irsELNRaoewonV6h",
  "key21": "v1aH1ALFAbLyNcwSyYaZsvNgwercuETGeRpv8G7MwSzpUodGe9MKG7DwTLiymWDH3TFyjbqAyrz1fhM1CbwmLkc",
  "key22": "5iptUzDmZEUnBNj5vuhzbTVKCvxBQzSHKk7CF19rQLFc3sgeisXziybtueV3B8TAs9jjD3bwhh7rg7YuEqrMdyGf",
  "key23": "58dzL7zbQ8fYcuYT8cEEcPfoNQVkPmT1szdka7vH3uXyvZyEqXrcedYxAGmXZK7V6vazFSNoGUL6mP8yJE2F64fX",
  "key24": "2Uxf5oi4e637VQH5g4FhrbE32hJNrLHLzwwojhUvjbUuZKiTq3eiMiv4bZai357wtyyDDkkdAGbFngP45wE1Nv5y",
  "key25": "5XHmQEkehifUWH8jDSgr8yQyJnuWQv9o6SJUrYEiN2A4GE1SMB8Dbo5bgf9BJLzx2kmehWWNGqisUeJFEtg9Pnuo",
  "key26": "26SbPDQwKuxntXLP2BGhge4Fw7y8qBdBJ5BqGg52ZKoP5gMHiVbTHcTTvL1sWLm8hHrcDsrzWJpWN9SfRMSjubMq",
  "key27": "5rtJ9FyaJgQFfKF2wk8sDCZY6w5kskFxd2yJ6FdfT3Stmf9CxdykiHkuoNw2qeJCKLgMXRRvWcLxrJCzzg9fA8BQ",
  "key28": "3eagxp7DHBAMwDkmkCAdTEwok34PAbCS2tLUamkkCrdewcmzYvYBMGeygRfYnEwmsik8uonkMgDeUUFxJoWfZggB",
  "key29": "2UuakdDjiuhUajTeNqwvDjAZjJwXxxuRV5qtrWtQSdrZyxLYTDAFb2xKgY8yJULDuUraTcvvBEJ7CH7ECLojcw4u",
  "key30": "2jauYTsVd9Y6P9tLxfdqnDHrFYYpzoJLT7ZiXeDTERaSmkiTyx3ppYk92Ymj8MJFRi1xtYGPTakxTP6fhVrbPVx7",
  "key31": "2vJkxJCt7YHo7D2Gz1ybcju63eYfHbCfAEsKLS5HuwfdB7TFwQsXJ3qyRkCDg1mQpFckUqbRYeJJmYCrbTtMTrjY",
  "key32": "5Wks9zMYcTRteeDUPzgdVAck1kYrA8vi7YZYT6tHF3cCYPfXnuN2cGM2CTFKKhWn5MQbju833ppqKYaFj2dzHdo8",
  "key33": "3xKG2pkyXG5aSr6tQk1BEPFx9911NGk3r6pyf7h53hvsyaDuhdQdypkZnoZkF9Q5w6bBXZPJ5xKjcqnBwL9t5Y7w",
  "key34": "2Nc3oMxHbBhfMHEYunqgcNeJ7qTZgFm268WiTz1aybkwYuWQSfvFh3srz76txoGyy6kj62BwGFoXKnjCjQMP8VSB",
  "key35": "5B8H5c5emSPKPq5ZaCdBexxz2oHfFA8rsDRqdNH1dysvNMok7PkSXwCgPkS3i9MATJD6wqBfF4abFKFuzKx66TpD",
  "key36": "2ocygyQrbtJXUwdoNjArF5oagDeTaZKJyNDhRH9BCUp4dEpByQJFC4y9QyurMkAzFDXHmsjzJ3TssA2VzoRzd27f",
  "key37": "kCF1X8tSLwgrygQNkTPaKcsrR7NPbnL5CCN5VLNM8EeE6tBpZ58vztDV1A7mGXTnhY2HV1DBbLEvDDpNZMUrfM5",
  "key38": "4i4DJG7udWf3oCKenvm6gGB6C7qexbyckfwXRtJPJhtDApqGz9qwH4mLnFPxzMvpMpjQE9AuRf3Saz58k5cBPU64",
  "key39": "3HWGBbDm8ci4xTme3wVcxXq79xGH44XzSQebUDBmZWWgHvVtnkxbtQfHCvsy7uoBzTXnWfJF6vChxpBWNkbLdMip",
  "key40": "517FibyS48u7ki2j9SLVB3zaXYUCtxEZxujVMPYcqTS8PmGtmZNGVHarT3nfQDrPZicRJSjY5mSjDo4E5r5et1Sw",
  "key41": "2P3kssV7694AL5HyWbcQEZGASXjXbPKHFpAF8XqJruwv9FkdL3z53VQeq6Gs3UVVrhtfgbnY3cq4Tmj9zvff9p5n",
  "key42": "47MfB236ULwutXHg1CNv1hgVAgx4mwkvdwwe37qJnbjpQTUiRcXUnunoqzd9uEySiJ8whfn4CmNNS3fpUjLLAERQ"
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
