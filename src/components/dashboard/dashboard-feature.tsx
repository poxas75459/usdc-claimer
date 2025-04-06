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
    "2tb6ZDKXbNmgHyP5vT3Uy8ZbBKJXzmkxwfhDsV5BabB46mg9epNXQRWMiwV7VjMSSqQs2cigCyQ58SnbyZdoN7K9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yWqynoq7DnKzgM4kWo1w7qUyHUpQLVboGakRfuBhJgiuMCPndttsRYyHGcAXK7yvZ1G4F9gE6R3wtbHRFmQK4yE",
  "key1": "5rRR2PBdnamuv6vvrjbu1fe1ufqbZk7T8VEYybfCmDGKMmPAVR9HPJxoUcrNd6tk6zvWaWhsGFYcpF6uPRVbCcUn",
  "key2": "t6PATEZsC2Svy3cXbxp5CqBtR9cZro988MTLMqERaxmBGaSezXUp4wfY1nQJW4ubrPsXFkTVhZyK7RSc6YSCYG4",
  "key3": "5H96NWqEYSbQYeySzLb7wXnfKigai8yz8PEdQf6uix1BopNYPp5uNEa4djE5SYxumTZDgaUipM8DBZt7T3qswoHo",
  "key4": "3DsSqEKV2ux5GTFeUfT8E99FME2aoKYdtx9gTqMbu6qyQdQofb6ji2tbAhPTEHcQRmAEBGweAF7XZscWj6sU2NWa",
  "key5": "g2dxnEDEk2pFytL3HVECHjwXL3GY3MEFgozRVoYtc8C71crZXbfcf1Etgt4DPNrynBfwjerbiwKG4pk4DVXKGoC",
  "key6": "2AGFEpwEquFuahrBosq9dqGKs2LoGaMDxhDpby1vnGbLL9rHSerXrFSG3u8fiRXaG82vtnTmkagr5ka7kdiHt2k5",
  "key7": "4gYBJHmQwMCpb8ens8KPHP7SfLdut56jDc1Lr7WtgQ1GPGrCbWLpAWn5AKqKKQZ72wZWEKnvjjvj1Z85mcCMi2VV",
  "key8": "2eF6Ravr4dQNJWd4aFWgZsNd4PbzNdudisJRoCpij3MuoPnK4QxbDMqvqZD3gZyUzRcUFq9jywSdZjebuoiUhD82",
  "key9": "4ouQpKgC6vYXRDkc1XBV3eACX4TY7FH7AgrkoVzQjqeAhk5TvMzK51an3adbXgBvAAhviyQeHYGw25WT55AnysMi",
  "key10": "5NokiYaDEwKCU5ECA84qJj6iFxK6RNGDZeqFbdyhtzq5FfzGeYH5VnhJShkVCBipzh1UBj8kj4MyT638jJCgx6Yi",
  "key11": "251P5UTB6AwymEU5iKqTJygiUTXYxjDdT8fwkNw7Mv1EvDBuHTYKV4VsQsFQDtLAweRcmKKPwbwqWKK9qK3QafxG",
  "key12": "4RBu19wj1oeo4s7ZXigEpbg3KqG1mskJWKKEwx96nRMGZsh1AbA44wGsPMoZsT4bTfq8MYTumtANiY65GTa99Yv9",
  "key13": "5cDZFCwJACETb18mJJ1gMysN73cDP3SE9redDzT32DxXdckDRhALrB1w1XnsaZMbVXSgVtuDBKhJb3GpeM3U3i8d",
  "key14": "4wCowQnqh1F89BXkYRHMbufTvqsnDFybpiBoX2owRKrAAfri91apRF5qB5RdtbTM1pn26ULBRXF6oEoG3nAwiuxL",
  "key15": "4M7J6Ze7uPwhxmx1wfR78H7Zwsab449JfWpzh39ehp89XeCBQ8wd59A26rwasV5myED3FZKJgiq4YP4MuDhXUSRC",
  "key16": "2X25qxSNfHoqpDrPDgrE47ZQPMyT1EmUB4D1tDtK2zFwsNturoQ6Lb4Hi6ekLwiZL52f7bgBAvwsrVdLGmi5tuNT",
  "key17": "3yAbqJheSXAymT4d7tQZHsp2AsSLHXaHJJnSWaiUuRwkqpVym3QcHJVMJrnnyhLWjW1oAeiQTDNHsXAHohdkoSeT",
  "key18": "4FxUdvk9UJ3SHqgNuUgSen4z8VusXodZMejjzpCxoz8a8d86oS6tTESkQR4pPS1VK4NjYdsgqHahLBP5coKjpTXq",
  "key19": "4P2HEeb2oqdEJkLet8WHy88dsEF8ZffLjPsjJJ8BfEQGdtfLcubCfHXPnJ9W49t6Xqzirx2cyPhsf8ZQ8KD9kfZd",
  "key20": "2SVPgeAFE3oBMmbeYWdDDCcvhb6YTDJdD72k7MwBdMZtCB8v4EisLG4PdyMcL8is6u2z1W5Si7jSCDjjf1aUVPEy",
  "key21": "5oLYbvrEZt5WZRtSJGnWDXFK3cNUcGSB2bvikXVKP9uNFVJhpNV5ynF1yq7jgjEUEn7CugttopCzB6gHKPb5ntiY",
  "key22": "5bP5LrbqUTLcjHTJzqZ3nqnQWYxUvzxuDuBsrjUvWtKdZiekh8qpFfpNVXrrAgiEryWCdjKEos2eT4mSBRKxFeN5",
  "key23": "3H1FhWD9YTBC5PRdxtCqXdoAGadHNSD7dwNmHGwVPoXwmveEwH4T5oRnaiP56LYNCQ4PxKtJjFqSXrGUWcyawfgW",
  "key24": "2jZGp85nu9hNKCuoUmBo6nDR62Y5J247Cn7VJcETWBwu68Z8oyKUaEjFVpdkCq4HkNmQsHGuWkNw64AXWcSJUpXM",
  "key25": "3RjVcM7d8uJ5gfckTRCWDGux3GYK6zbRRHVWNvR513rq2aTaia7VssU3BTF9ZL3azcXiFuiG3VWv313yXqghHh2J",
  "key26": "2Weq7Wapy1xdxVMWLCeBjSJmTVZrAv8UzKVgtCFAFNz6AzqYuLzuzegmehNAAjgNpLBPhFndvFa5dRoCyNvKKFUc",
  "key27": "e1pFyc3i2QRGx7eF52dqMg2B7RdaH6Dc7crRBrnY1BjaGCXtAvjFBK7AfLFz5frQ5FoRBq2GYUsVeVV2aJnvQWd",
  "key28": "58gk1yiinBWednAUo4ZQdykP5W6FwczYbQXxj8gMjJ61F318BwMHNrb8r76SNnuZKApd4yaVqpGxWnGHUH4icsvq",
  "key29": "4czCEC1Qbz53xMHTzEZncSqsmuCRTijyHrEjdC4tv2PPSgWmvoRpJiTdLpsjygwjJE1D13iA4abSU3oHpX8maZSL",
  "key30": "2zVA2ALYnMeB1LycmyyYqkUGLzAwSoCnWAbDJ7WCpJz117W6uexxmj7kLw9eifWu4C7vawFYFryC2ocx4errEV1A",
  "key31": "4WCVKk9sWT4pCpBHA4z11ar8WEkobiCBcsRhszjefHPLHeuHEvRE9mynSjRV6df7J9FjTsxNJ7yF73pFU1FGcP6v",
  "key32": "4iiM8Tbz2v8xyMPK4Y4athbzSk31gvrMNe58VV2LLVDnXsUJ3YEXWimoYW7HWHGPZA2WkS8ERarLHgnxsmAex5HX",
  "key33": "3svbsoNFzAKuh4k3HCFF3B2JsgVU9x9BB53QZ73VsZDEKhj5kiwzBGL9ePV7qQixGuXarcYWofXZVSPTPaTs52XZ",
  "key34": "5ACTkoUrHeg9gtBCKZGgxQPMoiLRX6bGp5Zr881F6NtbVrhiigUnPSKH68sVky11tnL1Dm5LBePEHeHnLRfRYJSV",
  "key35": "61WnHyCyYv4TRsT4GNMdSP73TNGfHj64bkdXMk9dckzkXn8CW9HHrFZkqstQ1KFbk1qJNWwX7hHegPJ9AtEhftgC",
  "key36": "5qybLnP5K2KHbmiqHBFtv2smphG5af3xZmPPPcYNEvQ1BmZrN4Zv5u5eAojwbSvFgz8mJLnFdKGFT6SCb3YhWwRM",
  "key37": "onBXRcuhxsdXoAw2HmWcDABjS8eYujBQmyF9BjoJ2i55Qi9iew2zX6DpZhhZBjkPcwy9jBrRBSZytLvPzRrgvso",
  "key38": "2jaTkEAT2dpA7v8JkrP9PWzvaTUXHy7aL3QkKGbMuJNAtrTjFR5ELUdURwioY7maRsBpd151ejjF4mxca3Q5awd6",
  "key39": "ND7Zf78qy2NNFKipoiVQoHvM2TwqHfvLPuVySKgk8RzoAvdz6pn1j2C6H8nsLgzDSVAHAWQ9ivavgCa3qAy4hAC"
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
