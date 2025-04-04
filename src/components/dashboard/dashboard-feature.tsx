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
    "uuqYiERsZme6srmRSWRc6V9DhrMUFZ79jNAUkG1SVCoE3WZocYUUXJtRKpL5JsmCqhQfbvqmmoyNaWdpGR3qHNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ei9VF8tZt9ZrxVxrQoJdBdqccLQAbM9fWvGFUtuL8ZNWM6dV3TTREAGzHBSR5mwcYjmxjRzxCME9iooPzVH2puH",
  "key1": "4g1TRjnW8JW7abw7Tj3W45RbDV2wpoypFXnpXDrfNK8dYH9CpV1bAeJPJXcFbuZ4v6gqzwiKXTUCR27E7FHGKkmY",
  "key2": "334vmPbNbBLACHzufTFDDhJJSHNk3Ma2SbWr8JCQVYoUNdVjdKnH9tNhobSsHxWSeJYqc4wE9yeeu33FvgQXL2qs",
  "key3": "3Dp1vn1x3RtV13Ptw2RiALaaV9UzQnjL6z9uuxkq9as6WCbR9nZ1CZKFMNH8t11WKBXhfDbW2dD1aPCgyBd5VLeq",
  "key4": "63tTeCP48Yu8EP9mfhezLkUti6TR6L8JCirq7Rz8jxiXZ9rmZW6sUhcxx8NzjcoaDjSXSzNd9YFDLQmq6oAz1KSf",
  "key5": "2AU3dcy7Ew1SLvv58wZwwsv23SUwZGsHZz2fEymGmfZAtqb6PEPqVp65Ad6XPWnhKAeuytwgLdoL3CVV53DtktU",
  "key6": "33rRYXsJ6dNKo9s87tG8zcBfEeWbsAD71ucfLH6LaQ6ia8waJgoNbUCQdS6eDjBMGT7kkPmT5najo2YJQudKr4cx",
  "key7": "27z3V6vah5EkLqX9b5yqL8uuamP6yAiWEzVEWv67CM9TcQLfQP7s1fx7w68Cj63eQf8NamYEhD9rymRfA6RBH5H4",
  "key8": "2psSG7sKP2WwFFiCrv5wTmKJxgWvVe7WkaNATdsmNpc6ynkFZBQXof1aM18cQfJeMUEVzWegiNoreGatS1Z19t69",
  "key9": "5KnPEut3NuZzNXBfBbTMkgzwWY5Sa6UNsUvDp7roVWckR5k44hr9JWucjHrrD6mmdKf6ixsYeRKLkcQUxRuQD1Yb",
  "key10": "5njj21UUHMa63LDFyAJrAeGCcNikvRX1Qb4SGKfVE5QeYGVxYLrqHYn2wgtRgpoZ1DCL6buQi3qd97TPE4tUXkfZ",
  "key11": "nSAa1uxzA6M5Zb85pcUkMnnptKRwsn83AFWGriw6VK2PXPidb9sBb9TozRdihbKeTPUs9zc3ZzPHR92LaUQasqh",
  "key12": "5TyD9zPP2aTFvq8KnJtzRweix4WDKVikHAyKWBrqtWbwfqV3uBj8YQYSR67VWDyMKKPu275JPBRUKQhkjuoR9CEK",
  "key13": "4pHSVBuUM82kbGr1bhXyDEoAuKfZ9AguhrL4PjKd57GUWWew8YAon6FpXsZewXe5jVx41HHcCsvDK7PJBw5Zyzsb",
  "key14": "36fyqsQU2qk9nYd7GmxyQKpEQF3CxzmSSNVKFDTdborN8dHUmvKfY9nVvHZgq9nxdRk213GyBJzReY61MKRZXzx6",
  "key15": "3fxmUG3YzPYpMeFSsDQVvUBVJVrYywRmSABDnDd7sndRZaSDDV71npxstCLzhSRSY4F4K7AbRfgaDbEH1w1XbqKW",
  "key16": "4Lp1SgCrbvw1AX4A3Mks7VyYmeVTJVNfZmNSAqUm1LhS3gi3K2zevqANA5LkUFpYPKEBB2Gg44iq98dUmkQFh7YR",
  "key17": "4awaT7iDKL87aeh99GWdCharQ9CPgiqCMqDa1wwuJddmJHLCgtTVhhHE1tLCcSmJzRpuzqchhieCeWNMj1d6myfB",
  "key18": "54ComDaf1RSadUS3m8wx64BxFG6pYMy7TeQDadJAZPpxmmwGDXNKTbi4khm2vGmPCtjen7JH6ec6SNBchpHbv9VF",
  "key19": "2tHaV8YDGcGC1UpeKPCEXCjpFLEavSqVvgZBKcZZnrC1zvbHoezp6nebpTbL78LCFFP6BcEwyXDp4TkJVBw7CFo7",
  "key20": "ZHvWkjQmM8nhUKLaTfzDHPFn7V6P7JBF9i1DNa5xDXafG6BeC8TecYPPA9t9PXEeAEj14AAkqScBgcF8adopno7",
  "key21": "A1FCs75ebeKmyq2C6wX8MCfDbA9Mhdbd3W6oqNWg25Sm6emZ94ELpi2vEtGLqeEsMTo3GAWjd1qQ9ggc2wKc4r2",
  "key22": "gpYc89YNRTuAtXyhEn1qwTFzipLoLGFdJMZBaQNZkfZoxNzu5XffoNJVmR6xAQJbNZpFXeJY6y9GUAhj9nGstAb",
  "key23": "oPzGjGtpWCkwkbGsunUEhrKaiccfUcuYGauVgmHtoJEWMTEQgMvuGeDKmPBgr1DAQeRtt5xErMc8HYJtRGq2P4H",
  "key24": "2hxc4hpeLNmL6XMnjKUuGMVi8UMFGQeeL16p2ADeFTStihtHH6XjdT7jRTzBDa5Qxe94mBSqbecHvYeoVEZ24um6",
  "key25": "46jQTBw3rgnNKgBug4RQZkgark8qLsPoYBcmZ5VeWXrVy2cJviewzgJzbbkp3bZymznprHm1jVghujpZx8bs12qf",
  "key26": "44DKGUPoB9LcbLv8DMMXdLkaV6Byn73p8A1Wgo895cG7wEo5k7kiMyNvH8utgyQtbjYCeJZH1PwHwzKJjeMJteo6",
  "key27": "3ABkhy8LAGtJ9s1FBwYEdo2XJRaMv5Zfty6egynKxGs7YPgXbpgheRMbCZzXPgcrchjhXUEEuQboezvVDKA5GfoG",
  "key28": "Jt8w9RNWXfciNb66t6tHh2vmifuh8QcC4BNKKJvLeTbHj1cZjwU88YZAHyAAq2cVAq62FyshdZHeUz6pM1KjeyR",
  "key29": "4usLWBCqtfvVPLb3nMKZcrRCpR9VcJcy6pxZUxXzQzDu2Ly1UbWwXJ5gaL6tj1UHsWeNBsaAG9ktQzLoAstZJzZ5",
  "key30": "4ox5JjadivqkiXHuF2T3rHHCWxp5zHiefmR326Jjvm9NhyxBYWwYBaWdm3QCVfTW767dpbaseYdyT3QDMuHmWior",
  "key31": "5V1PJRm345PnZZRQ5kLxNkYstHo3yc3feps46ucXrSpo7qg3JTCoARCbJEf3HqWtMZV66JUpa6p47avUJggx4xoZ",
  "key32": "3CdvEoV4zRL7udG87jF72HbNNG4bignDfRFcYoSq66DxbNTs7uqehCz3GoNbj46sHFjnh9PyNoKPD9BfPT1LqPuC",
  "key33": "V76JWNbLfXiLbxHGn7kE1hB2DaE18fBEa24kf1ESARypiXueZztjEWMHsaZo72pPnWW4NqZjuXdPb3cGt89Zk27"
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
