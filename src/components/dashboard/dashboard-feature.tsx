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
    "ryAhp5d2xArYroCzSY66oC8PXtdC8AGEpxPGPTDTRUN6BCnGVHkXppT66ffGbSfbJQWTxNSxNt64Tkv3bS1xD8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PeMG4FMnZQHVP7ehYXeGYBKMRd5KYxzsT6tnQm7da15YK2qkxkKwNd248VLWeV6mEErAqqCPkxXPJBNov7orc3n",
  "key1": "2epGgkqB35yvjSnF19ibwQe3e197kUddJhZKC8pfPeaxRvwW6ZGv3AFvBFrdptQTdWqd4DScGX4vLhkRYevPuAZZ",
  "key2": "7WTGwDAR1sya2ng8qyYAUJzYj1CYE7wFGfRg3RLiEjG8yS19amrRpUvgKnzzykQ8XnP3DpQWJEB1KWo9kC2DDmX",
  "key3": "487tJWL2BiGNfyouxXS46jCBFJ1sW6B7RkjBf43f6kemGzfmRckraNdnoMRoRDgULqG93Rchm1LLP1GW6zYV3dsp",
  "key4": "3rQYbFztHFYHHfsny8QmREAM69rLwJ9ZTGY2y1KBxbfhk9ksswv4hinj7wMoCno5XXA9mnsYGnGnHZnNPGJPAjSD",
  "key5": "37g8FCHJ9QfLoZSfBeH2iNGG3pf5KndHRKb8uzMp7Gow9dDX43r7GVwJ4Wnw2M5FLRSyw4oPZPbkpLwjvCgwoAXB",
  "key6": "45kqz4Vvi38uyDTm7KgeeaAEkUcT8LCf8LqdE8Dxz22g7SYtA3kvyjE7svUy3gUaFMT8om36HpyNhKt3FoJsgyCr",
  "key7": "53QQeoqmkWegNA1hjF8K7jaiWxyUtdC7PS75z1oZ55FDngWFj8qikwgCcjMPiAPjcG54Mt9vP732AXKTqyyg3Nbf",
  "key8": "5Qxx28Z7fPgHxXaqSBH55dohnnfYoqUCHDRzfVXM1sy8Bg2mP1y8Zw68GTmhNBu2JMg91CveTuqpXvx6AzLJXK4W",
  "key9": "55JtdnHEpD21PqAAY76MiXYrHgSwzJoq8bgaBhnKc3sRoYLYtFMqHLB3ynNS9v2JqmiksNSdfLFvayX3SjG1k8ra",
  "key10": "2gEishdfB2kYgsKAABdUy31mYzTCEkhduzjSBomRshQh798FdHkELFrkRTaUumxDoCnS4ChL5oFhrkc61PkPvw5j",
  "key11": "4yu6xU9eHZ4nyjwZEFVz1hAEi8wjBuqketa2NqVSxBnzDbBxPwjjrVQ8NptyBZf1HHRHGd4wyZPDycVfM41yM5fx",
  "key12": "145YgCz5G4VhDpKCepa8jzhqqnpWqg6NmToRCM63ntoTpQsnkh2KSRDYGbdEzaDmMsYML82o6xLpnN2Gnzg8K36",
  "key13": "wpMzFQzBsGLujNUg2rv6yK4u5ZeVA97RofiqZ6vYZY1iR9GesW3jCrK7dF14qJcwnwpZVtaCyQKX1QeqXsiDZ3F",
  "key14": "4eHmt4cuR1vMfBTKCZ36x3AfzBQQ61mW1MVV7oomXjHjjuta58iSDS3KZXVTPNwqNK7RCoQBf9q3sFY2Qez4jm42",
  "key15": "5wWA9GXkfaHkJtDvTiSbawRKjzQyjaaaDoyJBKhfVmbEVHpWWo3DN8uwmRmEWDp91jDpYKMVgPArr78GMGvCKJ5y",
  "key16": "ivbgaq6FNg9D98Ne9Tp7pheFGXqbfu6KKYmPvYm9DP3qdms1PtJnxtPn8Q6Sz5FSXkfwfQD35aJWKtCRMrRHex5",
  "key17": "3s7DDsh6Uhd5oqGuLrGnZKL9DQYUbi7vnieSJtLwutHfb4kG95AeQ5T8zL389NyAnR2eWLrxRQjpEPBdDU85p2Lm",
  "key18": "5XDedRk4HGVaUy2dVnwagp8jc7DWVqoPeTDrTvqv2CQtE6rpZgPRbNkyQpAbaUAav4e6k9BwVBXMoT9NTKBxcNaz",
  "key19": "3g1Ej3uB6UDXk12MrCTUzPAyd4nCcrWPTagiSBGm36GtiW75D71ck3DB9jTXJJYLiAwc1GVAziQx1Q4TtawvDXpG",
  "key20": "2b1xxY2ku7xGBM5M7xuBDidqqHFzzT1j8VTsHZHbnnCX39MU3K9jJHUe1kYmnQu8ewzt1Z46oLYcVmsdPvHCCjdv",
  "key21": "3rfcfnHZ79hG46NHq6VFhtuLxXVMH5cdNFqDjiUstjtnzc9ZLzeCVtSxSRp5UYUgv1dTsPay4HSwPNck4up6koaz",
  "key22": "2eoqV3dHAzE5SZmPbpYV6KN6aGbobzMvQdP82xToyBQKUBj1dBCHiLHUMTmb5cUg2uzje8M3T7KYMTQYfc8rcwNd",
  "key23": "35D6Y9wq8wm6prSJ8cEEJBG5FiGVjZDnVq2tfVzLXtfsXzY1zQx8M9GouWZwqrn6keSCeJNyABrFdRYiN8jB7r44",
  "key24": "5cRykpWHotKrujpEQ2bG8zyy4HaAAA5SB6Q1w7Fye9KmrqGGcQ1br3CNSoh9hnTqwUpEWzNAjWTw3dG9AxwG3t8z",
  "key25": "wFeQfEM9vW7pXanWT5mKzPmrZ4PjvvJWhtDvVbSRm167HuKo4Dj8CbUTeBajFrdfmXyWgxNVQ9yJHzjievqCtAB",
  "key26": "ss6e67b5Vx1hvtSrjEDU3C4ePCVyDKxyKzfh83wfBaRqYsTpRsZzrKUzfQKEMd9KCvpyBBTpuVUjdtfmWDC4etS",
  "key27": "BvgmkTYAKaMdng98dXeMCLEDadVjrFhmZNWppT5Y5Sabf3j5hW8F5JjNyMgcaDYFj8tpoCtur5gW5Ncn8UpN7kp",
  "key28": "4Z2WgmD5NzAEABnjzee3QHKJENP6vuFRCCBNoDLF6wkm8UQczn96ZMP7E2UL2M9y3BrJbrRuSvh3KZhFX4NFeZRm",
  "key29": "4btH1ympTN9QkJPP1v8CutBfJrSTNTebooDGce51jh5NNhTdu74b1kMbeC4PQSXdQwLMPykRkExcPSfV7ysDpTDQ",
  "key30": "2HmQnCP2QPWeWrjnD8pEFwteXpJA5kRmFBEorM23jkZB5jNjqQBJ7P72LVNd3eYud2cuQNow6d1Ri69R7E9c9ENj",
  "key31": "XR4v1G2BxzMBhWEkFfaq2JPm6fvHk3xEV1EhBFoVfHu5vB9AShZEYRAxkjmx2MAhwrNL89y7fYHPAkyUUG1aTBr",
  "key32": "2HHW4vXJQ777hP8Mm7eVrtRW99p6b7xREhc8anMk8nEN8QLvnuqrQiKzue4daTFWo3eSgJg2gntHoEUpvAA5nx96",
  "key33": "2pRhMyvrBFtZqPmAFi5cyhRehHZa7aBwdFPCuHxVrbDmoBQ4Xa6hgYjG2QfjaBudNstRvdVGyicd5AWMJdLfFhg3",
  "key34": "64GGAFWNB9oGtn6No1SY4vAfAFaTKjEzESA4Hvzn7A8TDXdjnx7TEZPsMD78zFbQUg5e51KfRdSGB32avt7RU48Z",
  "key35": "28pePTtys7y1yfuSsb3SM4NUcF94WftrxX8L6ts5R39zusoayVLCU8m69zazb1iJX8AjfH3dxsgtbpLbkvKks15c",
  "key36": "SgYEQuzniTnh3jB8siR7Zei7iJauJusGGnMtNJRwVffFpsTYnxaprPKSX8X3FrAdTaRVZh2UpwgjswhyuDSiUFD",
  "key37": "2bo4GkmaJAJTePTdm6SrWm6ZzMicM9XdaCKtMecJcxfEQ2L1ReYi9KH65NuQgZahysdg3QECWR8HcVhFRcb3TEz2",
  "key38": "2w8GDHPTK1ngiLhW33WUHtCNpoYSfMv1CWUJvUscCRiW7JXYhtBkeqCvZiSXXW1D4Zvo2d4WLbUAV7bHsYjoymkr",
  "key39": "8M3NaqVZGSjJVw2ootfucjrEw6L1oExqnuVN7qVh5jym1hv7gFXWptZDSV2GWDioeQNX6Wdzpc4aMhXLbVs4KSn",
  "key40": "5n1n4DEmFKCHtPcv3LsKHoWEquDqYeZQVrn8JqbD1GshAGpVRGqmEDCt4W468MTh8Ag2rPnyLkrgnWMQHUq1WRhq"
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
