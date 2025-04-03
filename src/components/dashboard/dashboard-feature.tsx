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
    "5F5awK5bAnArs5M7sohy3qqqF2KRiZL8wkgJkgBryWP2sh1vQcfXt7torDKovUoMymNwVfogGCq21n6ME8sX7Y75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wkoeftKhHwFUMFWEu7wxPvDpcDh5nEe9YW8nW7iTKg7BoWLgu36DzyMRVDzNR7Fvi87FEP3bd2s6NH5R8mKK9HF",
  "key1": "2x5gJnfpgTWfm5YNwFeTds98ee2LgWVqCPp3P3f75v8vKSfunKXNbe52kMRecxMogDFVhtBZPZx1Ln8UbG1mCgFM",
  "key2": "4kTDKiUsGQhKSkXXtSb3EtNRuVNvaBHC2Adp1vS5kaHq5m7Ce6XeTQbpRZ1RZ1p9B9BNje44dQGFVs14b9Yw26Bg",
  "key3": "2uwnFAY7sHdBm3Y11qDZBfn1opX1HRfsBou2CyuqD55WXH2Lw6vsNg2727ZnqKQgKDcTSTMKdc8o8GctysRSsuUM",
  "key4": "2Yrm3KkoU1T5cBfjhQ8rxaWUUAaiERwppLihQhwDF8ouXqQj7BXQwnvBM4XGS2KxhysHXGpmguuAZd7726yByhie",
  "key5": "5fYiAyBtuZXJqJdmrR3AF1RTwH8ZpzxshSs1K6iFsMWargfeYRoByuy6QbGvgyv7aJPcP25ntnMTDvyRUbzJmSen",
  "key6": "X9Cqkfkc4z3PYE69S1yjYaeeKegHGuqZ497MTD4pnnMpZPtSFrxr1xKAzfnZ1QYV7XPJLWgbygDdM5gWsbQuRDe",
  "key7": "2S6p49ZRiSnLT6f1dDtvWppFpnaVxntBugrsxzc3dPDhDnUKXfjMTqHXyxiRMaMWtN4ZykNy4JvEFHJiqciETGc9",
  "key8": "2UKc6FV8iB2Ba8932bE8qiNeUEadtCpNrY6tP8qdYM5uqE7FZTtJyPpiYK8XHwaxKc9y8ADf3qeN4cUgo4LqSezc",
  "key9": "2rEdbmNid2o7G4frKnG1PGE7docnruynGGjDJEErKjJXkznpc8UW9nammcACUEkP7B7LQMULW2c7G3nViQEaksUz",
  "key10": "5PMgWsXZts4PuPcecXtPFP6e8A8snkd2ZzJKkqNNQc6SHonJtESyrqvsXtzpJTE1zfjqsbdqkfP4ZJXMdXhkTVYw",
  "key11": "3hVxQmiZr2TSVkXVRSXeZ1z4EYMPyMMfTtVmDd8xKv3V7oDBTfoZDdiqgYojoRAn71NK1nCxchzSouA8S9pMP9Vm",
  "key12": "25cGkMy3Ng2yTJ84TqkmivzjX1xhegtdpCXiDVRAvtpxDdgx5QyGTz7KgRzJN4dizdxQCBTWgzvTZRgf4TbMwuZU",
  "key13": "2XAE4TiJLBW88DLocxAT7qFyyDuCmKmUjDk5CboX5HnmPo4FzDL1Eh44WuVi5VBhkbtVMbULxP1gLmn7hBEyu4Nr",
  "key14": "5SWNs45PkJdzFQzstzSk7qNWtxkavBneBLNgqPMQ4epziW5TwY8rh8Vp4HhwEeR3nhNUagvW9APzMRqLou3Pngcn",
  "key15": "4XuPkDGxtGW14ufuAgRHmp4x12k542zLHJSUAjiHCbbJ5CEBr8nw9px3n7hw4cW4K5k8UAQmrUJ6PA9ouTwKm4CE",
  "key16": "22eHEpkvH9wku5AHf2SpQ8wHuJeZFgxwU1AXiZmMrxHRQPLempmJCBhcP3EaeJHVAPm57Vag1LyLvPMqTDFtKAST",
  "key17": "F5h2vsdjdfUUXNnYqJsG98qs4FXqXiW6XxYs3Rk9bDz8NiWhV3o6F9bwQY66eDpBXupEMHKTiTRA9UJd147Vm9j",
  "key18": "r57Pqc1C2aGGQ2rexUpzu7ek84r4aBpu3CxGjzQV6LPXEXBdpwYbZ7zpbrnAgCJF5KJxwS59Ctu3qfjtM18P8L9",
  "key19": "vvq7gS6ciDZBztUhKiXedSrZGdihNVSfgP1xNuQpoo5aNpXdWpLVvhwipacG489hesGzVzkU9fotD3pfhFeSJUw",
  "key20": "31TeCFzs3qKZeMJCgrAnGVAdzZbtLyASn2LhL9d37i8tr12FwcCRQEwWdD5JtAN7VLVgJzbuDuPsd3JCVT8HceA5",
  "key21": "4TgZM6HkW1GJw3syhzewu7G7aogh97XS89H6XTrBM5a7viuki6dym49HkY34UXSaUjrec4uPh3LnjNyHVTcvdWsx",
  "key22": "5sa1Eogm52RqZMCs8X3XzHiqQDwhzxnJpoaShtyz3dn1fMi5DDWoWxjEXhSHkXWLTuLVr9ojo6FkWJZho6EtEhhS",
  "key23": "3UYCa6wWz5BAch9q2XFvgRkUryrFMkmZ4arDDE8yJj7jCJjhQewmV1oyegg1oxwvhzhADHYVRaQUmTfDpCQiio3u",
  "key24": "3SkeqcXPcT8ts8zvHuvXj4mvSCKP6z6tKrYhfhL2qteQJ6rV2PFgzKywwWkfB2KJFdkKxfcuELYDem42hSjEqUn6",
  "key25": "3HGZ4fgnV7iEAWCuQyH7yC6CFNWMyrCcqm1qVR5vDjRBM58jYr6SmxXa6DNvFf6Qfk2tGZShG5psyfX54W9LngyP",
  "key26": "3nTUgLzzGxJcPrc3dwhxFKF1ADXnCxqSdqyA5g5cjkmNXuAjUKjKXXawVV3MEHJDMSfF4Byo9jDoBWyowD15bPWL",
  "key27": "2PnvBPbNT6uvNsqKUKdTSLN5pGA3aK2MWYxz5oqrfHzUesj5WLJNe8XqZ5hQoKng8u1awCiWWkoZkMYdocW8krkQ",
  "key28": "BvVXHGJVnRzMtL1f8VZUZ7Q9hR9CTGwds47P2mQmvRxiSR9AKJApWPzjsXemrmwc3LWSewFKMCfjX34HQNr3ic6",
  "key29": "64FPun1ZiLdegJwj8dpbEpvHfqah5bmbCQzuxCn9dWkU2JpJq7ifM6p5iSWXTUJhaQg75i1NuFPPSG7CZ495HkpQ",
  "key30": "2tto3RBR5JGK5MTXBbprnntksxgeS1LgHmxVXFiD1w5D47vFWmbx8zHcUfE7o26J1GgrpQSez2NWUH7YwaxJaY7D",
  "key31": "5iA9Na7J2Lu5ByJHs7772KRJHKxhyDmopD4mqg7R45Ez7HWXcrGQsZ3xerHV731KBVcHpyPETq1WFrCdZDDvK44X",
  "key32": "3iF1nyb4wLXarJwnHgiZt28vLtezgqKjsFfDZgPCoj55PGBYvgREgBNmSVyQrrohq26wfpwdDCxmHkmnQSW7LQWP"
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
