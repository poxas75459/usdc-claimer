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
    "2qSnH48bM2azdTVoNwtWUupPPkK8aMFsMbLu3MnVuEXRBMLnWhf98xpRpDy7ycDkZLRb7sEtDX7oDEwLP8uDRLiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RS86zx4NiVVsxWuwCaaUBSy7pDD1jMDbPaz4AxuMRGJhHzmuKPXJWHFz7LadZMsFFie8n4ETrK8zqXehhaXmESi",
  "key1": "3a4DxYkbCptVxoQQdT5h9xVkJKpK9BkWqKJgyVFibdXiyoCx8CofYkjui5vJUtdcDWwvCsK4iZWettGHcvfScBwu",
  "key2": "2EbAb4c69UBmsKyuYHm5Lup38PFqGuhLcZXusEznJ7D3z7YfE2hUY3LC7NmnjYwu1niaj76o8XcYA17wFvoqCTaC",
  "key3": "24u3KPJ8YWHUBRknbXxBdZDXgdEwnBmA9jWXXHYSBqm8fmrePekDmAu5Ltdiagv4kYcRpBbeznoDu8o2R5vJf38X",
  "key4": "5A5yW2ZF2dF6b1QJ3EosVV8XV8Fe5cXEzGsyDxWzuACtYdUhkihqgnuANn9dpfNKmwSKEyn2ySYoPT1MmFNwPk1c",
  "key5": "4Ugvm72Y1nmfThDrHSyzMCGidVe4YKwmiEwPYfdTGUUxqZz4KVpTRQ3UJsoz27NFGpviYHSsTjYfB3RinRDttXA6",
  "key6": "TYv9zWSoe68tZYBgndTNM9EYhWzzYxV3d3zr6XAbrX7DcyDx2xbkPGZeMxuqv5D2hdtS3qRnjRzzQArGgAcCvKo",
  "key7": "3g2pxHFYwVotwv24SM8jcD52n2qu7ABbf652yHRGa2p55z3fNPTAMyb1TJ7PDuA8hm77NTQWrMtcDXbPkoKak3tE",
  "key8": "4rFKk6jsVr7EULRTaxiBTPHapq4u88mmDHfDSXDUqasDPSHSUjCjEU1R1Ba5Y1oQWSGueTmNNRWgkP6fDMxaubFV",
  "key9": "2GqwLXTTMG17VLc6uBLk3cZaBchEy3BwdjFQBCznnZNrKTXM9hGHDyf8nvSyGSDqtvhiTPgYbpvoriTkMWHPDAmd",
  "key10": "2aTaWWbjhXCGEWBZg9KdPt6XE1RCtXThg8RrKjuaSFW8qgpmAdBgoeGMqFXg6DGNG3YfhNQq4rSxB7K2Uz2odJz3",
  "key11": "2xPUaEnsic11dtHHCAdgGXAgFEdB7uCpbj2j49rVsmfuBCkocjZWSUby8imjkgRpKUACDQor7YBQyWsvbQssdcgV",
  "key12": "3n3QKpui77mYjrzGVxDReDaUv2W3uDevmahgkv65833RNLxUiDL5pHxNwSAQuYtKv1jSED8yhZwdNA4TECUMqfNQ",
  "key13": "5ueAyZUK3mahARZvvqMi8iBnc4Cf2BfPzsMGgKSdc2YMsr7GYrqfZaq28n7NYft5cN3FFGsojZbud6ggKAfr9SRc",
  "key14": "4L66WdoFbViXsY2dpaxKiHBAghwRVxap6K9J5Tm7SeXJcF9m4ekzfhCvniWdtVU8qroGSaRsRbNfnrVRdwjT717D",
  "key15": "5stZaNHQkSxgh7SMfEH3wT4w9Jr392NNoUVk2v1rHaLYxYv3vUmLZVLucjaismhJsdByXtb5TqN79i4maBpoCy5C",
  "key16": "5GU9PQLrMbnCMC4uF8xkRQ81jfLGigBiTzh18QJrHfQgtnxzrEQvo51ZZ3pmcA5aKyT8gqVe3HsY6VFZ9AhREnyE",
  "key17": "3XAaGHWevJ5cMtjiXyvp8VJfPJquyopEo3UDtucw3NJXgmK2NXb96PKkEMj8Di8iodnrwHGncnoSwM74wqQvGCXg",
  "key18": "5eukQFx7hQ9h8KwN5BBeUsLvAEmpw6gZSuKUqUAPdWnnfPu8mm6mGyeq79si5CkvPJW17woXtP4qQixx5kPTbfKX",
  "key19": "2kS2SFUP6pgMYXy63RzgmyzghCsrYPdY4EiX2n1jpVQ4VWohiY15K52eHcSHuRr6Dg7euUd9SaU8ZE1jdiWNaURF",
  "key20": "2tANNM9vMDrn1Ubh3tyZA35X3s62fGt39aS9ZCQKPRUKy2QLbSFAeNXyjUij8feRRykQjZKscG8Wh44Q5mJwuWSy",
  "key21": "3Cu4s9Dz4Tjz4XfXApj6yQUqDXoJjdwXKm1wjsEd1UrfEHeMVanGRZ6hxepTp1Z3Gw2Vhec4pUTFg33ygUaqyKi1",
  "key22": "4M7TppH1Xmf4m1Za2D9JKLcRvR988yBxsZuUvMXnZPQKuQKnJtskRTKVi2wg5WQhpYaXHrk7PgtBj5UQDexa2pCt",
  "key23": "2VhUhzDtZAEjpyJo2apfeensTpju36rED7RyuLaWPFkUFSUbT5SYWxUpMN6atP5GNqeUgXVcqRoDJ74MtDrSvyZs",
  "key24": "VKpoHoyhuU7hZamD5Zh3btMyWWWnau6jSzuwXLJAMAZxSPfAiCP11btmbkALvRwEq8jDTmqVVjrsfNFbcVssiJJ",
  "key25": "5DTUkFaCMHpcZTkeBKnNn5SWjZ4RkBF3V3qj5xPVmkam16KqJf5czoyvUrjjwqLbKidqwqVWzjwf55G6G8TzE51g",
  "key26": "5CZ9QXJDeyvrx6b1rLRi8xM93f619sVVFVoNWtv4ScCnNRWRhUNVPTmwUpfmVMyFH1tJBeePzgfbuyXmPJdeM94",
  "key27": "watjgBKNgHCKp6NzQUChe8hpxFXyKNocTy4YZNswXcyKsggRmnvVzZwr962LHofL7MHz6iG4W2offncBLdH5XZS",
  "key28": "4uCdEndeBWo7sbUjyx2e8KMMKBNTrEscH9mvgRdGU1dr4d7ce4tmRu4atcBgcTqHr9Mt5hEJa7RyTMKUm1fr5WgA",
  "key29": "64BnMby7M93MQddBgUzVEGbwV3xD9RKUGn3dtCpnrhQFB8TSS2HoYfUiHB9Vg9puXth1xuvqzg48cM22rKSBgomX",
  "key30": "9YCQXDQ1HHCpQKeuwDWAhZphxct5EN491UDMudNBvEU2z8RRcvHLet9xXDPCsB3XZJXVFidn2GvnaUArph7gEuT",
  "key31": "22mqJ7ziGxCgYXXRhPHpNjLTTpnVhUSyT6fg3r83eJaxdEHxbw5EWUw2UdrPSLrUWVZaLZuHeCC2P8zyEp34gmdG",
  "key32": "3gYiWMGwnL1Povx8TeWiFwcEorhpJgrAgxSVKJXVoLKdbMUmu1fYVL7prVkNTMG81evoquYhsBgH6k3rGJHYr49m",
  "key33": "3ZUJj9m744AUjm38i1wkLZUzWCB32jv41PSUrCond59PbLnV1xR6G6E6NnHx3ef6ghpRfk9HettZ5y6wmdcuNhTJ",
  "key34": "3Fx8sUzdAHhbpV1WEqqweqfiZpTtYMGLkuTUqMSNkGMfsdF3PDZrJMMeZwYBKiAsjCZ6iePNdkt3re73H1YuL9gT",
  "key35": "5q3iM5hvj4L8zwNHqAPUowm9JyYV7hemaPD9KFUgENEu1PuRpHQf22HANBrLL4zDNXS3nwj8vcySEDTGA8cLaZu8"
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
