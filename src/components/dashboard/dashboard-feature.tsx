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
    "3B3Dxoy5kkQssBBENR7RA5yFUhkNG4JaMG5E7LHKDWkEyRY5MeeQrgmHyo1tx92ZuD6iMkxqJNGSpk7LZZ9JjeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DkHmAyNXZvBaT2rzaJ92KzN1jqiwyH8oLm4NGCePsCR7Lyys3ecXjS5jMtHHAprueX2NDdGVyc34TpMji2Eb7Eh",
  "key1": "3UCfeKRkVD8AKLaVz7XwtqGsmCtsSY92AtK3Rdy9ZcMEkNdPxpbJepZpTLKcWL25dAPDq9YgusL6sWh93z49Emyw",
  "key2": "3RZ9YQiDLFX46GwTBAVsaCiXoJE5sbgSADjd2hRiTAuDzrMeUyLSANuN5cAVevS2ueUA5z8N54TkUzSCdLcVEnSz",
  "key3": "3vX1dNX3gU8tkD6JW3V2YBj9QHfhsDu1WgVksgr2h53ikPqjxNmpFhQt8zHGYgQegXDkkp3VH53ed25djVsMofzY",
  "key4": "26m5KrSUaCMBZC9FQ3cg7U3Sc1uyEn5GgHBnQGyMmBqwo5qasEsyL5urhJ7zUC7ngd2PfoatVzuq85S5kGUkCSVq",
  "key5": "aU7Zt3B1HH3EySR8gXuDeX3ikhSVXAP9cr71pDNRLYGYBWQXv7sHw5wgS8QQiKGgazfzfKebWxn868MBGef4n9g",
  "key6": "2eHAzeWdFHY2iPkXLuEvUahtA3aaCRCoLqJhyeTNoNCyEcbij2uEwn6wwvy2N4CFuvNJoWNnvmxqBLmk8Bid37ar",
  "key7": "2ziu2cnGSWqvMrL27Ne3SgSvJ71q6TTFWmNgu1ucfaR6sHpu6EBd7xvjwEmcVGxXzrANQmdHjDdQRjjnydViGBv2",
  "key8": "3DH14QDGmZicJdM1VK2eLMf9yUyk9i8sLNxkq23XcvTwqmZBq8GXsZNgJ9gCdPC3BY3hAt44a9FUu98sfKdBeqHg",
  "key9": "3Z4rj61kunbi9R2tVL3rj7NLU6YAeCNRVkEgbeazrM6TzjNjb9SqPrxM8V7XumNQzFv85rJkrepZYT8BTwAEfKcF",
  "key10": "5wZ3fDHcL5si2Dus8CdJfXWmhSC3JUqTd7uBaZ7E9bQZviKFCbqZ3XBRcqjdeRNZZo4d9NEQ5L66EmkETD3XgBTA",
  "key11": "Uuy6ejBe6jvt9NSFfCTJd2hPudFBG7Cye3v1xvzSaqnCkTLSkZdkTcYF2TvE6GfucGuz5Hz2JsVuLyc6P4NZ1H6",
  "key12": "Ebx2FDxNjx6TNwdtVDmN7JJ98G1oXntKSTPyZyiAr3jzew4neGe5Te2CoRoma4PhBFNeKgd4LeXncAfUk5a5S2M",
  "key13": "3p9y5jfsRVijiEyHizSmWkrz8PBtBXjw6WTF3pUNUqD9cdi9sX2jdHCh9aHXYiepepTwGfUhPfbUDLfDNzeGLFUD",
  "key14": "4uLFqfUtABsvTsMVSWehZ5F6gKEGE35Ly32r72Tz4pTUTXWETbLpQqpHxxwGQris9TcHSdUKbwvusav2N2iYFevF",
  "key15": "3oWRTqwZP7MMXo15uaPyTtdqy5xXKddp6NFGi3W6tNGjbV1TqcWFymiujedHFXbVVFXAQLKZERR1GWnpZHiThaYN",
  "key16": "2czAHYi8MPyW6KQkHpzUQnBudBkJA6X8JT2Nwmddsqyix3UaM8o8HG7HhZSCfF7HxJGayXX8WeFkpbTTDieGuyTt",
  "key17": "3PQFeatXUnkVq26F5jZc7oqsWvpQWx8dVHmudANks6ngkWsn3VGQYTDJk7h9Jd81KfMinR1WNfdfxM5NahS247hK",
  "key18": "4mNtu9cDQZctqv3FytscXwJudRawuwj9AjyyyVbhoNLhjd1PLdjxLAcKGNRX8dJRXuTfP9CswjjqgNdJ8HVa9i3d",
  "key19": "5YFAkZvP6X5yf7tEyMMjk1hZF8b97ChGZfwdiKNfsy6dP1w3t6uGJCBUEo9PZu23uZ66J752v5kW4tXev5ogYwmc",
  "key20": "gajxGuELxNLKhuoTriTJaPm8SFd6jM4zBZsJKp6z2yDw6HeMsjajyChHQPuquqtD2kgnsrhL6k3TmLhhaJZVreh",
  "key21": "3kK7uBGsHLhmpVSfLGdL3mj6obAdn39xdv53Kkb7cBX7VBP8HXZCDR58eDqt5ZjBTz9ad7tfm4n5jiqVWUYX3ZH6",
  "key22": "3fZYKjtjK8a5NgGJvCNkRGezEG4YhoeQM2Y25dPtUPhe8ziRPtD5dZ32VWyjLXd3DQC3ypsVPiKYUVHBsNyUprVL",
  "key23": "4HSK2P1okb3V4hGzWwnbpG5aq3bRrwVVhdQcseLGFJTW4LVfYsbkQSoz5JK5yNpiHSQ1qDBu5ZeLg8BjKPVkfWiE",
  "key24": "2c9R4g3LRUtwqzfxNyGA7m6GyGXPUhhH6taEG9sX4eeWh8ZFo4YvqFGQWGxZdGPspt5r6HUY6jzDrCMuu2u2xDYD",
  "key25": "FgG9ttdHBjxHtKBkx6o2NhtWgjbrLLkmKE4orsgqiYEKvt9e4t2ZhnkEkHqW3qmomyUdFD9u6CyGe5skHHYrNis",
  "key26": "2fd9FaFziHkmMfw2yeNVYuoTBEJuyFn2XLXSoZpXZTYYWpHLKX9ohoVWtZg94t2RGeGZVUhGf9g6gDs1AzPGDRWX",
  "key27": "56Hc2Zip9sXQXpV28ronaYVDRWZmmchmzZfhStnnKd8k3Se9f1sHtUG9UaREk3c967kTiNQ9VwRm33GUwzJn6d1D",
  "key28": "5eTxeCyqZWfmkM6AXKroTrnwGmqTKjiJsj2z2xC35ekbYPMUmTeLqEQemYDEefDSLQHAxhS93PDfroekTAqJwLvm",
  "key29": "3aa6qMaEqSQ261x6Ug4nNUbV3QhFG1Mp23nBD33XRbs5dzEsy6sJ4sKHiuMoKjLKmRRkF2rM3ZmHxPJAzQ1Dq57v",
  "key30": "42Td3MFAoSNtRo7W2FrE3quoUaGT7LCVtjkaNuwH3JXFjYXFWqb5Edgz36M9EJm796nzrinM6zSGJzYbfCUibGQu",
  "key31": "3zDdjkQgsi2xXhNvEt8Rviqi1u3jAXQ51cboBAgRr6fTGB5W3tMjbKMUbhdQah6tWhprAWq7C1GvYuMKmR2fRetP",
  "key32": "4RjpCdHsgYmvWxEhD3i3ZWJr5jqZiWjHRszgqd5C1msdmj7rKFmR4yJzMJTveomULpqwawp2QggYAmWr6fnMUggR",
  "key33": "65PciCS3DdneLaZBbBdXENRSqc6MFUkhGchhyr7Nth1ETRLUyafsk5WN65q629ZZizWDhbcP12hiF29x31YEuuYo",
  "key34": "gbnVAoLphqnaXALa1HcFRY2TUkSTQG21fvcQ9mUEhwsoRCuaArgUy8CX8RcHJ7mF9kqiNhk5QwDX1nRYc1k6grK",
  "key35": "3DbCEnh5wLmXd1jtmriDr48Rf9ViETnAsaUK3DQKVTNYmsfqQm4cjCR6v2o9TJ2SbS3JxgsXk6jSwuiqS4wA3223",
  "key36": "3YCxMGC9wAQJzRWipjsmGFoijHfUvVNyjJxR9tSaHWAUPzuvk51jRtghzLgNMnKZu4ZVYdYiAEqnmTKu4cUUX2nh",
  "key37": "3PCb7gWRm7jHXAF74Q3yAuiDtm4BQimhSMBLn9kGrKnW7Ufd5dgWgC2ehRDXfE3xS5jG6VsaUXdm4nLD4afaRuCw",
  "key38": "5VAaStSfPsc6PWqgNMHcp86ieesMNiaQE2zMMJKJiPSRKDvB5Ffpk45hgxTjqHveUoCr8UtQyedgr48nYKdpunGr",
  "key39": "a2Ecymasa6ehH9WaRTUhCTLbcf4gQd42zwY888jTrAfohvRMfW3YdPM28aPCkUAsTVUQFfbZLoWkdYnjJQDDixk",
  "key40": "4WyFPohigqX2CyKP44ivTfjxAyTTbE7WCaLdnnfEMffSDMgSMZeoPfGTXeHDiM2Hbj5wzYm7kVjEXa3Lniuv9v1w",
  "key41": "5HttA7WeMJCjzEk7sAT8dsMAYVdNKAiPFL2zY3syJawCy82JsbEyeo8FAgsziJ5Zv8rhQdph8XZGdC4MEbZ9DvWZ"
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
