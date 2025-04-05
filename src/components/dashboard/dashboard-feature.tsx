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
    "66CH1cHYkYKjMuEHDYapQbRpg1r8aJaZkZhmob5H7EtW8R8BKzf59S5qcxrrrcx4qicTryJURs4aPUUeykJznjZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f5FaLy3Z8At7xAnX2sdQku3aWSYhuPdYubx5h8iPrJwuPwAsHsujsnztaUT2RyPygHrE8MXjbekzQsEnhdL5deY",
  "key1": "3349cZTAGQBfEDQBjwqFyz7U4YMrPaW6TNGGELoWviK2WtZKEABvZh2gG7vnRLR3pwpwySNQYJ4Lmqg58Hd3QnFH",
  "key2": "3rzJzg26iGD3ymcNXbqj7tbxR4wnhMaAXZv3cPz6bwESxjWUHb6qxeeF8WTB4M9XWKaJojMha5P2ZKC2KX5aUcoY",
  "key3": "3F7xnZXdo5FheWtFQVTNYAQwFzk4sjAM1PQqexiX4UrAw9Q1ELCe3Ttep97SrmkXhckbDFxzpKjX95ZxSJJJefpe",
  "key4": "5Lw3xf25iqM1nMomyVeRheuTTyankZRh3y8DdsnvaXGU55vxxDh3cSQzQTNEdwZ7rA6n6tFwGD6mRgKmxvB5nxGi",
  "key5": "599egZL41YATkcg8HGohd34UEi65aC81BMBT1gFgztX6sxoEbsUz1cXdGTBTcjrYWMYJCS48s66PjbYaRDXdWtRN",
  "key6": "rkXuWr4rXrBtqW4CFxt1sBULnrLFBkPkjLLcsRur1PNUsWdGw6X4fnKgtwHhuvJuvGaGdnwSB1VHnZtouFj9WWZ",
  "key7": "3fHh7yf8jjP2Tqc4nVHxchKmjEqNA5BpiDRcnFzgbVncBiDgAb53TbKHgk7xnwKYC4RACoSuaw5rXUJdJfbPxfP",
  "key8": "4kmd2dHRcn8aYmU7dswmNPBcoVRoJEVLXQzoBKcs2eUVVCN5X6wRysKa7TYsu5oaSGPzFqTF9QkCorkTiTpJbDVX",
  "key9": "DgskCyEMCiuskqSzh8f1VLrgRHjmwcU88YaXFK4BZJdzZkzpapRLuYKqKhNTCxcnvi1RBB6qbZ8SXxEgBC2dZr1",
  "key10": "5bwj3tE1jzbbR5DdpGTmJfckPEN7sNdkA8QSbkN8muV764rEh2dRTLGhyX3W4Sqc2DsAdHUauzsB5Y4J8SJiXEBb",
  "key11": "5ACsDkncWxGVLR9NgfBHitD57zq49eGu7LPaNXKiHzzjvTX5nzqVShR9H97owQXHy4ikXYkXm3WybDV7MqXnr85",
  "key12": "3qHM6zCGFxYEtMMPxLDS7782hDtxcACB6E1QixYAd6FnPaD2kVc7im5X8oqRDECGffEZ6czWZA1QammWgu4cxU2J",
  "key13": "5GjfEkya4VUwGxYm5hBUwj99tRzMepqCwRS1AnXjt7SaPE5ie4Ypx92tF1aroU9UGqvpm8Qo1hLijagXKxY2S9x5",
  "key14": "5YPR75wy2SUwzMurQuf1xuddHCyDAqcs5DCh6YfACBaP57qTXu9c3gPKeDDcsC4pWdDVXF8efKUHGuZGdbLXyn6",
  "key15": "3ucY7dXrBCgLGWbGEkibS3zCbdZcoMn54u8BN3vErHjsMjESMvRFttTfCo4oD1KzGVUu4W4rXJF5edKgZJXnhWJo",
  "key16": "4pf1h65jh2Xs6QxsjaMPVjYWQVqJYZD8jhjoAPc7RPyVnAVL9FPLTPqrpxWvDpPrtPicXjRjdFVLgtG38AZpLGea",
  "key17": "3RMiajuuT9AcbaW15NafzHe6GrR9MuscBUysfjenQNX55v4V23rnrmz2pDK6SuJwCBKjaHoEsN492kyHJfNiCxY5",
  "key18": "XcD7c1JqbFVbS6ExXmS9V4DKc1cj5YMaLws6ALdwQWjuNQVUqv6LsB29pZRkzTe6BHzQXwRgE2SrGxywcVeySua",
  "key19": "5FiC1gwrHgZTAs2bqoLY2YzqUVmp1ZAJagEe667eZga7KHu6NitgMV1XoVLqaNNTLtJMJrdu8H6Qq3owYKbJSCSy",
  "key20": "63iR4LHZBBLuGgWWULiJpcnGCwaWtjtwHC5MoWQXF3PskA8YniFnyvp2RuNJetyHaJRJV9uqg73yiQyiZER3WjVc",
  "key21": "4VLgPPRbCJP9ijmhgKoVSiYiNxgNiVP5jjAmAbsWSjtEPYfCCdSicagyhL1PBNZmxFYERW3CHq4JoCUAqyTCbX71",
  "key22": "PwnaPyQDDyjjUdG1mhWU3eXEHtbC9B9AHPWcjwgXq7gNwcYL5RHrDwBJCEHt8DBtBpN6TLrMj6VaRxxKzJCmjrD",
  "key23": "4NsugGqs5ewr1GXdcCd5zPx6QMLXT45uPe5fNk88RqgjrVi5imdyor8ANSMZMa2Xq5B1PVN7LitjQRiJEHf1sinU",
  "key24": "4AjpAXHUfoVpkELVTqcEEseCvhaAFW4Z7VezZfskwF2eDrULT8pZNk22BiND1B4nhZ77uMo385GNS4ztmCVJtyYX",
  "key25": "DrKbKinpPYwj1AATSVaobPa9egS5BADob5MNCMJgqoRaY3VFTu1FxmS2X11U8Yz1eFrpQMik7CuX5vsxcnaHWii",
  "key26": "25rLdcvoc66b9q32zwgacpRxjHUUaAQSExCWqnpfa2ispd6pHej85Z79Za6n3oRG7pokDpQuJ4hq2gnuQuEtTeig",
  "key27": "5oQkFUskAo1q4Eeeij7Nt3khyLYmSGaeiD4TJD6FqQTny71irHiznyK8phKoW2xDW3b4s9jS5wMz24aDRX13mXxY",
  "key28": "5Ko5iPLQscrUv9Hv85xATstZ5Wh8P2NCRtjo19hurUBYZsBP2GVGYUCMJeUf2rFN42C7thPx3mhzJErYh8rKtNeW",
  "key29": "2XE77dzM5RFSECPQamDGuExWQxFPLMYm6BBoJ2txE4Sqx4QVd6sWenUfQCaxN2ZYXyuc8DXjaHKEnLK7fZHGccW3",
  "key30": "5HwRA4CSAptJ2RAE5PKhAuFZmec73tCAR7YFh4yBWKKReokhm45oaCP5bzDZRJLe18mhmLRUwM9m7ufAuR2BDeYB",
  "key31": "UDzEjQMTb23wvUKnHA1SfB69xRGjCiivBRoDGhbwGD3jVRz8DkgEoo23axmSpJ6v8fBS5X3jaXxpk5URWdwUqcB",
  "key32": "3A5YBDRutRCJgjX1MxAtEDqwH63SpCUao3xFbqpGPQXWRbayzDELyUkPs4qn3JpD3e2fzt78bv2s4jHKnQDcG5Py",
  "key33": "4sPiQN47fuTDobVczYLHEXdutDawtyba1iFi4moWPYY59MzuuUkBzn2pFFobWhhtVvprHfW6ofmSPNRQ2Ua71x28",
  "key34": "3VPqVVeXGSNZg2FDRJLyeurg5gW8rjD4ou4vwYsVNLTpNzSYN9G1BAfrNCptYQYD3nUqa4eCFerfoJfmiRrXG3wh",
  "key35": "3MAFmUU68se9K5FcLZeGs6N9VBxsAVeA9brWFJBRnXpJuwPWUBteqeRELTn77LZZCyWKeSwSgSvQfLtoxE6rXwEW",
  "key36": "g7BQ7LKH13KQBXHdGBQtny5wKJacoLd5G8ffKhFhNrhPida8KdhewMikhDvRnSVPLDUiTbTMUtRFu1hkBV7CX9B",
  "key37": "5XaB2w4yRLUAgRNBz3RKurHSjnwfWfoaiLeNW6MyhDWALZQULwZaMXyeTLRgnkET2AwgPR4aGNCN9kgYCvt59N1E",
  "key38": "3tS8VaC1G9H5MRy6LkyZopYyGyUm8mCu6zt3FQN9ftJQGLRNwizEiRfBoLewMyq91vS29s2MN9iDWUT1gxBDj5Lr",
  "key39": "5eehrHix2CaeTiMe5oAdNpWQtgXNk4i2wNG57Zvd14fi6DVF69jeBrMmErdexnjV3e8it6UET4uveVsxzQNvysoa",
  "key40": "3qwyF7sYCcMikgfSndH8DpeF1UrDhwU5ojfjRJ5evtRfRJBJSWFMQL9uFRtBiVFYMgtUENpA4bwhEK2CADYNz1zb",
  "key41": "665roFkt4uV6ao7EegmAXJv38yxJ6SnrVUq6gbyqcAGgW37aVmHedzbtXB5AthysKvLCx96YyQ9UCQWUpfMcyoXY"
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
