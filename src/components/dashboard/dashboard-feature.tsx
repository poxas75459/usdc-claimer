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
    "2KLK4C8mfRTaKQQuZKMg1Z6V9WoWhBFGQPck4KSyfG3EPwJg4PNfFdPVGrzymPtF52hCQCNaUYpuo47Ht5aY7zrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49hKtKQTjkU5k6un1fx9s2GkhPPPdv4xRiqYpvnMLf8Cr61zruCFuaw7S9v1k47iqtSkSrmgJYDxkiid1pDBVsX3",
  "key1": "5bvh3iJpWq5yZaa1PkjW3QGXPCjncNFUQXZ1So9cjNUAjpmAwxth3ALBqoXpYfxZ9XDbfi9ZDLfEMEDkB6UVr6TT",
  "key2": "3gW1Ev6mkvHpxw1rGTWKZpbWXgmqyMzjMiyCgCd8DdSzT97iYaW2no4Eego2Ukhwkb4tZ18LXYtXZhq9fCeTheE2",
  "key3": "5gE3RHwTgLqeHyzacA3feWPshttALML15hnGKP7dwQBvYT3rprtq3Q5vxNHjLFmFDRzQB6d1odKNEwezhB86babK",
  "key4": "4m4KVMXTrB4EDahj2sXJDKnbWHoRbyZwJhKHpn9Ye7bDHDVwDaRM2SaKjUdW8cuP4EorNUnkiqHbgS6EREhdnid",
  "key5": "5wGponf2UJbuBmQAgHxX6QZ6cLWdTUw83A6EWVPBDCHNxmoqctDPkrkqYT5ivXX9WaUcQsgbto7fZh78uULTkRbQ",
  "key6": "2gfFHF8rfCJpVfkyiqm7MYBgP8AfzooDo7ZhEu4fkp3o5RhvpQauLkrdL2XNsE1AdJ1Buc4P5MYiRdNcAWPMYFLH",
  "key7": "2ahXMspiAHBQLdAqVNxdJkAt4A7egr6t1XHfavf1kufxfKWJa6LFrnoSxgCXYveggEtmRbCXUEfJGqTTcSxof2EK",
  "key8": "2VW6hDZYw9gkvWUr37A51FJJZue7hLCenwpoDBgw7Jwx6yarb6RvLugDNHRqDNPkSMTDNtT52UkEVjgVzkPuJNSJ",
  "key9": "rzRJb7F4zoYndqFYAasNtCC18UhnntcpFQGP24NNwZW6bUNjMRTJLnbxCnqvf8kU6fUwFDzsuUspKW425xqkRzt",
  "key10": "2xzW5DWZHUZ77C2Xu6Ws8adJTTpQCqApY4GpmX9RoSimCvZM3wodu25J32tZ6TYLCLaxvSGnTPoJ96jEAb5waTUz",
  "key11": "36YnNJ595LGEwdmA5wGUsJ5jAUrCiDJvfSVog93omHXE7cwuaxTabMzqDwmC8NC2W5zuqU2fdxvstWYF4gvRAb9v",
  "key12": "4JxG9nLWtb1qf796radjpMk1GtkZ87wbaKd3p6AoHKowRDLmXbCtSHoZWmfYvm1MbPKKCFLYV4wyUkbKhtfYZGba",
  "key13": "tKBQbyrBPT3MrmbZNawxUEqj238GxJVRV9v447K2799m6r4QSa6JBgXX7avLmBiU5EoEy42scqFJqGfHV8WGJX9",
  "key14": "5PWUmNvQeNUozPoLwuMqMBnJFg9QwURUxjbW6cYRbEoXFhCA9xKjvHous3tyUFKZc4XNJSCoFJA5B2K5qsYRvYit",
  "key15": "5C8hDMjoqbn6RbA6SXxFPLqHmVs2Cd74e7udfE6eWirbtQw6A8dprW3F7AG81ZGE4AtvMyaD7M7mmSaRYDYXXQ5W",
  "key16": "3WzpLQk2DxVfUwV2s9eufVH3AEyzQNyJa2TMnMA8QLck5LnJc2vuZuXiA2nK18k836FKtTHSvGN484hfEY4UGsdE",
  "key17": "4vEUSAVKUUJyRYWX7qkEDfCioDeHJkhUR8wiG4EzrtwL4WRUR4yJSGZ2d1qFQ1GENYFSym34gjZx4pQDNsKYpeA1",
  "key18": "pNB6noHe2of6CyZ88nbFzWdN3znAzSSptTEf2XrvzHw1hXfRJmgDkJSFiMhrimautNwdfUiqKJtaiCa3g8hxZJs",
  "key19": "4iEGCrf7wfwWpahmWmuGErYXndPsXrAUKr5qxhoQWqtJqcWqhsSLCcCNH26afkiVqxsjK4sTw18Ns3FkPGMb51sY",
  "key20": "21fxSfJJ1JbyJDSacno4N2czzsdPK3iMxQUBDUbyYK5vD1gs2Z2THGGEa1rUbgGrW7bV5XUTfVCrNXWawU7kyJNt",
  "key21": "Au32K3EMP1QxDAPgTVDFucTvUPokskH3vG2wYsMxi3sV9kXRUTAxnAid1bWJ8hsSL98jS72EhbTarZhKgYLpWvC",
  "key22": "3Z5SRX6MCZMP22cXzmW6oEXY3T9iwEyaukahBjYbcGRSk6Anax2r6rA1d7zYB3jXfiZymBLut2yeYf7warwUYYtR",
  "key23": "4DFbieLmJF8kvwEErtVcJMiJopijYGVckvc9ZBebke3J3oqdxbyjMc2V96vmebzRS3hyFchjsoXNoNj4RBD89bM4",
  "key24": "1HQZhxyNP7bFihp8BqAcRSa66T6wwTQR9hEYCtaHTdbB43EJKanrUYUfRr72HXkxEjX2veanrSDbqVMdhDd8fRU",
  "key25": "xkTv4Z1RmZe1frnnXBwFrViD9AmVa8o2xpQikpX7Mz6Ury5shAkEwDJETS5XujQ3Pvm9MHBkJk26UHdz1ZKKDTy",
  "key26": "4voHnsjun4VJM1UrGXCxatgyAt5Eob69z2yBb5oEAxEQ7y31BXr2gx6UE45uonJM6prKWdmNYadyF88LHYvwcm8x",
  "key27": "5X7CJPVPQYLZ5teF5YwZvAnsZLYMXWpMryNyenbuowXGR7HKAb6ajVmsQX2ntiuryg37EbkGj54mYj8b7z7L61Wb",
  "key28": "5wE8Eowjakkk5VTNuE6acMez9f7awLiqoaiqXaP2zm8dUfoivaLeqjam2YapfxCrfADXMChVpn4vqEFEmtNS9yo7",
  "key29": "27WRm3uiAcfJmiPLaRCtnQYJk1PnEMSfe2CfkRucPZL5aCYLaySSGD5jtykSkYNHMMMtwYZvCNMh9o9zcGLZMSDi"
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
