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
    "4BBRbNT4oPoiU9aZF4opw83FX1RKRJqo7ZrKvU1LbxgU6XPeGNgdYxYe3Sapc6CYPwS65o8WQHeiymvQw3eWevTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWAP54MxD6Y6YposxvkDJok9c4KYjJQs4A51xvZ6qyQ3qk1i1SpgwsmMGnmz5YjyfJwx3jASpNBbnDT5CniAWJY",
  "key1": "35wLiVGhfyWk6ag4Z4vFM9vppha5TAL4rbv1uZvHiVhyG9TJDLSrpw7o8rNevqXGPh3ayFKyPCXYjoyjYatP5tqV",
  "key2": "2gj45w7o143hGGgEv1XvcsU3Ze4vg9gpvaHE2fd7ibVxB9LX5Kh3FoL9tRYBzWVJ1VrmDHgZU8ggkG4dUwQA5K79",
  "key3": "hvHQ6BwypR3VFm7soju9a1oKkxW1RKScEMiaawBV9iDSYrgvmt198pwScGP25LZxRuJnb23hMUbugZKre7UmPGz",
  "key4": "4pmzN64NfhkN1KZ8Ygeuz2HYRm2Vv1V8oS9QT8fLVp2iG3KoXWwZDitQghYPUvmSzx4vBr4fSjU7eMdisMVc5ix4",
  "key5": "2ck7QmwnqyjaBtcnTHvprfeqEv8XPE8s4qmoyRWkeQ5iTeJC8oeyghtMW6nVtghwUquSRqTDZxitDvcRhrjwU7EA",
  "key6": "3m4LH1Tzz7WJ4MtZvp9PnGd4oTnsjhK44buQEKKvedf52XQFZKkfLsaxgjJozUzYyqAFKgWN6vB8DxY2CmG4WUda",
  "key7": "3DM3nsjLT4LoPVskNMsDVGf44DCCk41KNVqAJDq5jfJMPnTMTH46THUwBoAnqLnCcRFujMiPnTfg8A9VnRADnwSZ",
  "key8": "hs6n1Vbwmp2tsqv1Yyk6K7nZV8m4uobRFVMy4nSDd8iFRXwfU5mdkbHEKY24C3hqHAK8eLuv53vMZ422fku8c4f",
  "key9": "3jkku3fUyawHZRkU7t8r4yarU2JK2rt449Q93Cyn2Wji6eLDNC9yWQNU3PRmuWEiww2zxZj9ox7QoJTFjZbwHcEe",
  "key10": "5YeoA6XGQgw6NQA6RBBtyy84qktRTXnqrzDcsthZ2xtJKykufWbkmsBCz52w2HRd7yRPuZdC7f6HHKkG43S9SD5n",
  "key11": "2ZEobJ5YSJ8FztGY1bGKZpurgQXEJkcZK554dWBx3R5THs522Bq5rrJ8hvncNYDUx1439oBjZyJp7QoDHrxhqKEN",
  "key12": "5YkpnaUQFyEa4SXj9C7wAimwTdM4z87tAmmb43GVzTg9UZEpeiRVkgCZBHbwtFM5NT4HLgLPWYMKqjQFAkwzg6J",
  "key13": "ejTZKD3Hx4WBky7yVSaqfgJouvrJwmkLu4eSYFNevaCmMKL2CgwmyW4xMUfPnF6m1BSd6dhsmhax21xNgbr2qsN",
  "key14": "2C9U41UfNdZhUeF8CNcWmEDZtYoFx2YzBeE9sCujbgZqMthWUkHtgJdjciuhA83qwwVnVy6gMuFeKfpqX7DZx97X",
  "key15": "3gL67R2PbTJ6N6s1tWLZQ5jEuW8c6czoeApy3cdHEBJtkLENAxQsmghyyk6aKe3CbdDVvkNy1Fn4Q9DvmJSyWDcb",
  "key16": "4rYMJ64gn49af3Gyrt9wR6nuxYwC56cBcXX3LkiCSE8YpE1DdSdL42kbjA1Jz3959KXiW4dra7me2hZ7R5hdoZfQ",
  "key17": "4wbp6BxKTsKuyZSMn8z4S1DKa68RTHj4e1eTYhsXwLdtE7x1MjG5vyboTavbzLooSfKe9BThUfBpY31Qs6ix5i1b",
  "key18": "6LwVXWGKu85PXY5T77KwDeFQ14vALALtcbcTWLzoQgHV9MvLdn7FfvJiQMjEVUVUiSta8L5tdFzzYLoH3EqQDVr",
  "key19": "5ZTH9CTQMhzFLd6ezzBoaand7dS64CAUkvDrZJk7Mst1wMPXoeGTUfTitBPH4UuRHJH2UGydM4Bdnzp83KXpWegm",
  "key20": "3586k6e8vdV3D2SHMGp2HNk8WDZQ154dWE5rBqQbvBtvE9Hx118n7ubxjW8rDe5an4d6wGTaMv8LzRKoL6wbznY8",
  "key21": "mqbx6jRJ9U2GCxEEQCohtMgETBN8GiFebCRzXtuqhBUACBnGfaQd5xpK46SKrFb9hD8ZX67KKe45YKjCJmtqEEB",
  "key22": "2jdQMvpMB4YQGQ2ofBCBfT53WCcPDEMC9KY23EFMtvgyhmxoV4uVP5S8JJZztUA6vhJk2xAxWwfDSX9FecBFkePd",
  "key23": "2w1Lv4TyLenCkUSjunLcQrzYwRHc3SRpyyfETd6gtCibGoKKaip6wPbP2vC7QAvK3nS4nEbocFJguu4kdMSKPEAT",
  "key24": "4bv6zBFRxEgeZomiaETzvHm91SwqaBCqmfhs24XXFvejG78sbMYrAYkeN9eB3MLB6ut3dVXjNVytgge6z5Ffq9bq",
  "key25": "4MZFW4FWfMwABvfG4nXQfxbZWmumqYno44Xfi2GCiA5CPCg6fkFVWkqgBAcvyC8f6nsMq528qWUBLHbTPcMkW3EM",
  "key26": "4VRLWEEbmGKBB39hQe4fo6UjZ6PrekQbhryLo6LWW5TnEAGM32VgQ1rjX66zU4wV4md455Y4D7PAEC5NQ2e28AzK",
  "key27": "47eEPcpZuesZdsZxnB73aCrySJVu2TfDbzQUHaatNAjXgtbQgdJ29wVjsVp6afUfMBMptkGzhzQJkf513hnuBvvA",
  "key28": "346WDNhBRnq7bdzL2mP4fEkyP4ncxADK4kog4BmtZXacebQgxtYoRexJQ8iV4yKMS7gNmQFGRqJpTFacSF9yYeVC",
  "key29": "8xaRpdRauP1yDLy37TiPadn4dHGA5S5v28dgHKeGhxMDNepGJSFNjV8PYVegcF49T7Y6UFCkJjkw38oW468ChqN",
  "key30": "5QnsT3dGewgSuQdVtrvChCWxTb87v7WH3sxcjKAzKNerzXYFGp1c1AS8q7kfrwyPswZtGrf6criJnQki8o7RaM7r",
  "key31": "3s5exG47cCaggXfz59Go5fFkdqpGgCPfAVkXfy7gG6tk6aTB8C6s1iY5omLTtCiH4ixQiy3pyuaQKvyQT934Diud",
  "key32": "2aZHDTryAgK8SLbHnJBndNWKSui7vEh1dSrcPcJn2ihcSX88NEQZKGb8qoxh3oHz5q8noYEzYS6zZAApHkxTbuGB",
  "key33": "2hDjUWoZd3vavtriy8JCfwwuZJVWYaevVgcAGaCtuUNuEFQcPaBEXeMRu6VEsH8EP4Gj5hZyET3jsrbHBkHHyNj5"
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
