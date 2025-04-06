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
    "28byoXbRVJbVvrvt9CDZSvir3UZ2NUtnfPbPvqVZdDUxrc2SBPt4XDDDmCfZpbd5eCe3ViszC4ukojaW2wujRDe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qn8apLVuMjWwqBbG6B8j8ddvVUuasYcZVymGuB6oPM8GVjCrGnMq8RH6xh38RwSmYp8tzTuDMvRahN4i5HgWiyr",
  "key1": "5bERxbRhJbZjRrTeu77KgPGhDeTeyfZHykBUNqqv88joQaQD8Lx1saQv2k3a2UCFhgYfs7oZwM58HyHSc8imyYeX",
  "key2": "4d4MKXThZdEKyNTB1jSxLT84ak5mMQUE8cKZGyDQCZUfKpP7krbnyeZEqBKprjcGVmQfYgBC6S2YWbnvKaqVBDs3",
  "key3": "2QtXgxKSCoW4HZQEomU9JUXpMyEZ6R2JA1wfSWanRkVBAGRix4eiD82owb3dHnmEQC8mpZkKNdRCDryanDd1ZiG5",
  "key4": "3FJMDgv3hGVKn9onbuJPZBM97xhdYN9U4gqKAt1Edqs5vQyUpqvsqbcrUn3XNJ2auNa4Hcs9aeW9PVkKE9RECdRt",
  "key5": "3qwykcQzqf4E8uiiMPRdcWt8qvxkwGN6AperJ85vbDYYDGJ9aALejHoe7bt5j2HXocvTg2K9iQCLcjGxPGZLN94s",
  "key6": "hdCGST6LATLQ77UNR4JEVdmg6HnKPcbucxpYpwP6f2FsYVoT4N2xwYYhSqR4qQ7soQNyhuuuQjubdfURSELJivR",
  "key7": "3ZKBWt4mxtfrAYkbBh9VWB8fEGGqnZsYeL1TeSvg1uf7FW6Sh8xShUYCEHb5doPMvunNbb6JPP3KA7izRL7N6Hhs",
  "key8": "3oY4r2RuvYCTcREGhmLdUEYAyFwVtVUZ4zrijfy7MMyFcycaNcSCrZq1wKAyggiPX8DoTeVVv9Jiij5zwAacHY3x",
  "key9": "3EqH4kHBLWDJ3C6xERfhUhktgqewVxfSsvGnHJZp5kLbGA1Xy51rPZF1jLo6hnPih2rwsgKW3o4hcjrt6oJRcuND",
  "key10": "2kbcZaubhHJf1DRc7ZvkHGXebnwagVvKS5Zcvkg1bGmadT4sAdsmBpQv4pGACfGzL4PrmyeFVTJ5EUQVRP68gsRM",
  "key11": "4eteCeLw4E9K4vkcamqpm83C9a5vqLoWUiscnppkz6X2hQvsrnHnp9oVzyZqD8dJmEdSysHUDqjPp49UMD5XGGuL",
  "key12": "59VUXNMurcGokh351kYc6B4zbsxpxVbRba8UdiLX9hin8TfRNwAEPQXxBRdQVFWW5LnWEtqTBPeXeC4jHt6Kbgeu",
  "key13": "3C2o1vdxtKPxpE3MfZNkKyxECJscUW9nsEU4b49adYwtPTAT9wHbudw8CAowrEK4DZ7zHvkbFY5nWTKbbeNJFGHE",
  "key14": "2yuYugce6g6NodCi6CJJ4rNYxVpCwTcuyP6y41j3ZRhFx4f5txYjZM2SFe6nxdpAdy27FgBSoLkQowLVjvBeJNKu",
  "key15": "4q9Nv5JL4DcfcWLnDjYyhK92oPKVgjgxBbQ7ALxkXFgvfStBcG5NWQCmrbw4RiqL48WoTuGHPHVpFRqBTrTH1qLJ",
  "key16": "1t3WN1XgKHWryNFmDyUBAcSSzbucen1ho7MwVkmn4Fx1RsVkXxMB1mbwCXfHpjY7UYmB94d8r2uQKiJCwZHvw4z",
  "key17": "FAwfVLpR6k9zCAC9tKMWjY8z3Cb5uNENCyP39Zc3HHfZropwxRMTRbvYKdiHrf6ouTUzcoPbA8KAhjFW5QUDjxP",
  "key18": "37mgZHJKuWxdxXRq4MrNFtstGhfGZ5GxvwL1Ji5HLX1YiGtpk1BuS8FavxbJApd4qogrqSVtFPnvdk4ivF19Va5V",
  "key19": "3cv7Lh5NTG2Ugi9Up3rNeY8iJHMsaui4Q9ThbJf7aAWeLs95QQ8Jp5BL1VH8gbkX7K16yNCwUSHAJ9sduWSnNV6F",
  "key20": "5WEUp1F8D5ixgB47TaWo9Y9FCbpmFi24U3s57p2BEByPNHrg7PSjkLCcMxBYaTwvTyMJAguAJqufs2sgb6ArPXVF",
  "key21": "2mcGjVBkJe7Qr9zWcCpRE6HKzTgjeU5EmGa8HPDEhBxCacucZ7K3AqHd5GtpaEBwTSWvKos6pyiF9R8Rt1Exxn3T",
  "key22": "QxiQ6zMpS8f4DtXSfmrVJi7fs3gA4AUMwE1uGyrozFUt9zSiWhevgP6DeC55yvSjbLcLANVbrFH7r7Stkt6cSVg",
  "key23": "2VsHpryuPa1Ph4eKeRMen6wEJ3gRMx5xWHdEeDSy3k3pMcG8qJwmukWxAx7iAHib8hqCNG4LaS9Yt3H6NkyT7y8z",
  "key24": "313BpRtJvqEmB2GoWxeKGZqozknwfStsHMSQQVWj4SaUCTBTZtLk2sVRno6UAXoPTmrpSJEKHAxErr5VmC9uGRQ5",
  "key25": "5PCGWVNu8bSwGPBcmANYwpeHySD2CyyFDX6mLAtedtAsV6tkCuabrpfRq6kghdG7AtY1ySixE2XvALDe6HL2XT2v",
  "key26": "5GdJwwcShu5MT7n1F48upDJVMAH2Lc4Tn4UQr8fKJgt8Kcm3vM2qK2qCxp4tTPhUiqZT9eve6ycmN682rJ1J5dNE",
  "key27": "2eNn3Aqy5sG25SszmgRTQutyBhbG2rAMDhk1sXjUFtVPxYLx59vY6L5UfzdTgMeJyUQEwPeGbvXL8pWLkdefAiW9",
  "key28": "5iJQ84GnsZLSxLNjWF5Wet9kheQrKHDGp533SGo76wXbnLmL1q4AtE6tTHSk3yWYihR9RBjz6aSDEso2SbLiRoHB",
  "key29": "4s6KJnLKyopDx1xoemVqHde1PCvUUUoo5qgMAC67yPhfHCA5AVoJ4gFPBrNTNbMoDNSwgmssRL5FXn9QUQLPyARC",
  "key30": "opHERuGajMSrFoSroRzyLjbCkNi2adJEE1bEkdNuyQaER8beszmryfpgGXrv88nafUqqvqhvq9rEBvR5BUZVgcg",
  "key31": "2eHaWjWqTNq2vUKUXhEVsx7QyGhxB7XRxNKRQVW1bw5LpHAt1PNu3ETHv4vUNanj38XmR2PazfTqPeWFWHFjVBcd",
  "key32": "56dVfEaapu6r6Lrh9G8cdZc9T53zGvTcMwK2jCo7i1qMKyzdvoJVf8wv2v5fS9jprfSm8TnjojFMqyVRWJnnC1QS",
  "key33": "62F96Q7E85yRkC4dgKGpBoQsADoQzjyCRzGAXBKYdmhwMtV3D6wRDSaQHa3RYVeCDrYJ3S2hPssMjcChtnZxjBCh",
  "key34": "4SpY4pCBJ92upo8NH8zj13SJzLDG9xAFXSSqQoEKLjfL2q55djeWtH1CRWtUC6763BmevK2h2HNcxMxTpskqfCaB"
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
