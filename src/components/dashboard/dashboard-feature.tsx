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
    "39xYKrpCn2WijMZcjKLdWFEKoxDdP8SoCAnE5pvYrFdUMKSzCYKUkwkuUWXaFhAD6JfG6weGg7mzPLx8zdTgwZMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hjds6rsA71wKSvmLQGTZ6U2JZWgKKx8gzkx4eK5pSMqS4TtBZJbdkBbNNJ4gnx2DRY9QpNnz8B9rp8Nr4NZMZMm",
  "key1": "4zUePtSrJoDN8uyz2dWVKbdsg37R8LvQLa4EzrSWGdTKST17PtGd5bm4bVYQwSMgE8bHaufeE8EDozCd1Uu38yLV",
  "key2": "4TAupiPiyQxvUBhaUYCQEsEUXNUmDKCmF2J8pCt3UBMLrW1vR6RWmvgWeTtchWKKk9rePJhfRgWjEtmCJtBZGSj3",
  "key3": "u83Qfkihb6u7c1k9f9eM3RLEhGNYLWPzGv5Du5Zk5kadc6ZLbvyRvQBJD24RyTXxpRTcrbSoB9zSed3KnH2dejs",
  "key4": "S5VMykRFVKxfb43NjTjNenWeCVxD4pUgn2gmJNW8TZTveiEAEoa72prHEqZAkDpoSScQRr8n85jzHWk9g2KvHqu",
  "key5": "55ER8hWRko4RxMznAwBs8PVe8t6cHkGuE5QgMfq4MmFJLCyPPSbsPgCnWqUjYNw9BMRJxCCTXbxhsTjzDXXnA9v1",
  "key6": "2pP66KLgzosMVsK4ePXEgPrgYV6ykZWdAGs2eP33bbKvdrWkL7W4jxS1sDEEdKgVZHSsZw1q6Z5yuus1TU6omzvM",
  "key7": "P4qfc4ys5Dtmv7K4cKYkQb5gRnv175ttLYQFY1Xhh3D1jZwPmZBi74wdksRntmbUn7KCkwRQixbCyQeAS9eYKpN",
  "key8": "64L7vGCuz7SSoX9YVbDkTnMJhszzG82N2nMueDMPW8VXThBsSq4LNWDmndojLpWZUv5oQBcKbmU6XNnFTCkAMMf3",
  "key9": "5vL12skeRrqi9LQmTpSNzkr9rbeCiNHahzuDw9jp1ARFoopitctqyHKv135qshTk8TRqZ2FdAepVyrrxvFMFPF6V",
  "key10": "3h1DH9TxDVQP289iVbC1HCFKyZZF9JV2aBP4VBeBumA8owDFgMVkBvYZE2NkdT9CDJrTKnt3srTX3khJwRpVKHfH",
  "key11": "3QbEVykDW6NsGPx78NDR3ynQMBRJkSksJAnFKzpa6PyvkR3WNmEzsS7AnV7uzdn7LEUWfkUmjb3Sc4LV98xCN4Gq",
  "key12": "M2nAdW1TKqcyfdQeh4QPitsyg2PgB9CUpXGp7bvwwJLeTQdA37be1i81oFbc4AKPbLetyYtUFboind2EHmK5pxH",
  "key13": "52fHiv1Phbtux7irzhNd2DgrmPVuDYVjTsYxQL4vfaRG5fmSDHTgsAGjHhYCkEUTh7paXv4CVnKS42fs6UdpRd3L",
  "key14": "3t3UVfMZojrmt7nVmp4RJ5BxkL9U43zVjVo4dPSJyFwao55yeJbfkuo5VpZS7CrcfAEDuw22PhjW2KNPdjLm7Xxt",
  "key15": "53TWJNzu4L7h6iCQWZmG5vynWXKRzKd7sQPXTDcitzqXvTuhGXF9LGpczEw4ERxr3tnZQU7CsgYoeXyEbDSiww2i",
  "key16": "5bUASZfSa1nFawRDPQXegeEa4sdEzAxL2zcUTzMTzUX5Wf5eGLXgHLaLVLuJ9rLdYrKCTgcu7XEGRTW3TsDBJSBE",
  "key17": "YpZL7E8j7HhLz2woquUuQMAyhp9B6UgUApaSRKmdwoehFqCtN4T8GjxFasJS8zzyuLRVz4gZf2WhFCgxdm6pzjV",
  "key18": "5mB4Ymbt4PrkF9trmhFxU27aALteZo9c7xqMnrTMcB5TR4FMaxLe5Ho63wdLKJKi6zHbiTf6qQ7gzHSa6AJEVfQL",
  "key19": "5kRDT7hpMEiDcuHduyLFtMfDtawrt7joLKANNc9itYbuSVAa1fsSqqq4fjsQUasyJkmXHetCT8NfFP3ocHnHJG5m",
  "key20": "4a9mVsGD1Qyp2V4UnnVPQihP14NHkGTUJSzhwBxXKXsGwipjZATKdeJbstwcJA5PpcnE9MgnyAbAFKHybSSq6Vx3",
  "key21": "2F5UcoCxanufVkKD5GTz3V2f7BcYyVLH9j9VU39vLZVPfm4b6mLC78qR3hfNbFkUYswf3Mx5UM1iMRu4eZNgTUtz",
  "key22": "2E4GVtnyNQehDfM7foKnSnVrRDyACZg1tMLRt1FF2N8iNC4o4oRRMLSMJKeG74pYb1Y2v7m3nCwMN1tQRRBNnwQ5",
  "key23": "2RDHvR3tYKAnS8aq4WWRdv4gvvbd86EAo1rzNH34w2NupG7EEyHy2p2z1UWixPWoRMbaLZgF2DWgLmyxh5ywVhw2",
  "key24": "3g7kQNw71spAeL99LQYAvhVBTMGDKKytvzJqWszXyyte4ZbvpyPnwDbGEXUT2ys8vKdASi1pSZ86CD83fQpDFbE6",
  "key25": "NV8qTqibamyxqFEBXcRtpaWuSP4tbxwNXfrUaFA1nAbwzaNGbKAzmTkqTjgqoCy2rHo7djtEnKp8vv45buShgQC",
  "key26": "2CcPfADhgo2y1KBATSfayULufLwD1NUESZZ985bdxmVQfC6nh8UR5EB4PPXBFRtAt1RtXDAaoemQGaSHdkUgTknv",
  "key27": "2e43dx375ju7DiSbRdFz5nYGGo9BCNNgzjMu8trsutVM26V1Gf1STGpE5jAJouHXGStALuo1c437g8bCGkyFg6H7",
  "key28": "4sbH7uRYmZWKwUh5TW28we2CLoeV9tBf42weKihZWjBVPpnnAAhPRc6Dfw4mWjWi25wPx3mr6ReYkETMUqt7Ztv8",
  "key29": "2pceVyw1dd6VUFZZffHu1GVYRz2uDgVnwVDA49L15czZayQZZtncZ2C48EJSiSJKGjjodk1nvQmr385vZGPqzype",
  "key30": "4TBf8p7ACR5Dv99VQ1Ca4XHwjUQNFtSgEFfxVfrMLy13m1PCf5M3mpVX1guZKXM9AxHURy6aEpU6abxVPaXMjY7U",
  "key31": "5KxTjqEwC13swBWMZw5as6Ga7gyvdH4xwfPQ8uemGSVK522FXmMxpqXot3hjukYCucdPCuR9tPHndPTbLsxP5WwL",
  "key32": "39rc8Um3xCWL34xW23AwNo3iUQzM8DTGV5WKK1xRqWR8ivKAjsHyPfrG2uaF5UVVzLhtHZNiU6r3vK8brou7TiDH",
  "key33": "4cVoLEMpLpxFJhZfXYuxWALp8FTGxcQTcUwp8RdX9pLsuRDex7i1mN5nAZp4t1Jak2pKN4Yy5KdY5TQEUJ46Kz6d"
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
