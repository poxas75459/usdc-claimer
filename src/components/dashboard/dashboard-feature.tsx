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
    "38Uxrkt9ygmGNXfEK3c2V3JmJMKaWZHqG2jTLTKrArs72aWKr7y6mAv36yjybQCBUMkwTFZvr9tCsm92B7yZcqxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QyPPPnXEXt7ivMiujEf7FQxsG5Hi83gmCVN8VczZAm2sFx9Q8HcRLddBodyDtXa3d9JCm3e9U7p49q3NL6gwobe",
  "key1": "2o6GR8cheGGdhg7gotGq16chXnY28e7f1mui3PrZxHJhuNYsSSyEnHdAXvv4JDyK59YkEC7S6RPb1iANx2wTSKJd",
  "key2": "4Lgtsgmv2xWZMvWcbFvMVqSxsVBqLEfztM8VWS8Xrjyhbc9V9xPMorC8NWC3w4DHMmyeLNFfsyeP7xk97t5zvryZ",
  "key3": "4oUD9UwjTa1myGPyP3C6Pvk54fp1oSuYn1AuGAdee6U9UjmkW9xujCSTkLDengQYAFqPFYScFwwLwKyentqZAZPp",
  "key4": "4XGQCKWT2rXUkYEMt9iPBGgHx1MY4emRybRRwGmgrLsiEBkXu8ocmJHxowr1Doutg7gDtV3oPc4PiGxe9xRMDBSa",
  "key5": "kqSE4PNMzFbxCp8vRcCEzaDGbTr5xyydmpgLXm4cz4f21VBDUs7VsX4iFbdxs2zqLBgWoAi71efX2tv4XMUJLvH",
  "key6": "5bYSkuksRgJ71bEd2FYcuCFit6beVEojnz1zs7mVyM8cGdBA6z5vJVswcgm8Mav6rXhzR4D8cXnH7htrkbt9qj1D",
  "key7": "2qEFhGiJczWDHfHvk5nErcMHC639uLjfDnGhcrtZeaKiCQ6HYJnFQZWHv6cMV3x6za3zdpZu7wFFNFetYsgvphYC",
  "key8": "3MP2DGu9aZXqnT2vvg6qSWgUHFycRWvDfVY1YwzMJyHqugZQ6RNmgtnNyso8LXZX7eU3j2ZJD6gb6wcDrb2DpV8r",
  "key9": "2ddjWn7grLX4St11azRsBnEWn87g2EQ776B3unQUZcMdDDoBmECr42N3dGgWRyBkqcYjb74g11hZBqjoMgzity7b",
  "key10": "55iHMhe6hadYJi6TZ331yeGnxBkbpzKNjCn1VJr7jUuy2pskV1b8hUMfTAJJxGA5UtxPYMTx3qS8QdHrQw2CzYhX",
  "key11": "2NqZuYbvEu9LEFh3Npq6tjVf8LtudEYj8YzNRABKEcxVyqzTWFML1RamVr85tupEyyRuJ8oYFZ9SqoAPS86XfU5F",
  "key12": "58P3DuuRNqXJLbsVeFeQj3vjtcdJ79hPFdPtjEDBetkzfnXXR9p2GKkgr99zEFYfsNZtk8v46ayU2uZdfjDZkQ6y",
  "key13": "4advVSWVaaK5jBgxpsJYU2vKayP1qgrEeDhx7dRrKZGmm7YaUxFEnYDJuB2TS1Y2BiecHTrjLG1gbWx3hDrUeKDj",
  "key14": "4U5fSDyV5tCtc2ZLvfcSLroYAeEV7hun2JGR3ovFAtVn8PTGyxLuBJoUpYJD4pZd165Bsrjn73fmt6biCpqvDC6Y",
  "key15": "34XkGAmqCoKav7ghSAGDbpaFUrSbTY84zrbDHV7XppvzQBMEw8szXmZw66UqXza67HM5Yv42PKPQhX4xSGBXCJ8g",
  "key16": "5edjSWZVxRi9ofpsYqC8EGC9GnDaYmerZwS83BfXuX2ED3YMGcyBZ2niy7sLj9z62bC2gGMXenFUrVsB9AnkourW",
  "key17": "5VJJrU3wApS4MK3kQAFxPLZmMnHfbVYH3zL9QbsDYzbJNBuRdNNpwB1jLifVpHuL9jJuRBASGpzu9kL8G3EJgivU",
  "key18": "47ArLjWtcLTgeK5V4a3GXEKN621uB9HiKC8DDGJut11cZiDh1LEQiAHdEqN1mEXGfaC5fP5dH4HVkaNV73XCpSAk",
  "key19": "2n1xqMvCb9LggM9QBwfMUEFZEHGJ4bFZjeWisBH1GiSuLU5Nk9ybvCb6YtjwC6JqfKz6P1edcNffNhuDpTThCCKi",
  "key20": "PnH5eG2PLxro7xe8PmB7BnzJ1FYrLfurBV4eBP8SJPMn1XPiUh2kCLRX3h6LVxzrpRCHkH3ZXXiBDuBTSoYjV4h",
  "key21": "2oZi3n55EjrL3xVCgXfUJztqvDVVwfRfAX5dGiX1Q4bfWEhTvYJdRdG3V6zFyCgiX6iGFQtsQn8hC7CG5p5nwHso",
  "key22": "3zEcuYpaHwrrRYBy36hNDN88RzBWibCETXwiX1HxmGcRKHbW9gGyyHWgNHCjNC9biYHtW5gQEeaQYmUzR8WbmjM2",
  "key23": "5VAkjPyqHdHJYfsmizJrnmaBQExyq3EDmQUfJyFbPMRiVKsU1cijZuYxvgPyHGFMnMvLx7Tjfzz3pKWDc6CztVH8",
  "key24": "LQGUTm9qewppc8xMJpJjR1Uw1Awud8qoyzs8Gm6i5ERrkr8srGnhkK1U9MWFBaHRGWw2FWavJijMf7c6w3mJ1Pf",
  "key25": "3giCsrpGqpWHSk1RhPaL5DheXf11itRM7x4BQ1sxRauk9Y7TL7myWw41nGDMWy5mo1q2G2awVGL11ZMrmdW3nRWy",
  "key26": "2ykxFksL5XZR4LwWEumbYdSATCrow1VBgzpyxWEUfrUcmpdF9bgQrn5CR5wP7ACzdMoQkNLku1rn5f5ER4Win1Da",
  "key27": "3rFb69TRXSdPQJuEQsUdJ5TQHvT8Z3Tv1mfaiWx2B3wcu3q5VRorPFCZeFYK5mg8MNAt6bZMXcVh23XFSqfnop6C",
  "key28": "3bnaB9WmWeQCv8hmg8wgxSStZgmbLDcNFvAyfMd7afuqgfqhtAjocNVmqvitvWb1Hw1drP2x4XXSWMEUXhbqBxb1",
  "key29": "38uqWZHdYMevLd9kXasDVFuKhp7ZFiVTkNws55EoA5rnRzgEzCRctn8MZPmNLHKzRhJCKvNcxAJuLAAgZ5Tk6WpG",
  "key30": "HwqLxdCV9AVWi17C1KANFECmjFoGtpLTLpK9E3uNWoXnAuWvMG7SqCDw4cg3WFPaTKz5gGUNHRBkAq7KWqjH5n2",
  "key31": "42iWLGBR62XfGQDgMRvznRWojCc6uJTK2vum62jR9Rb3E2WTfbd1Bp9cCX1w8frVEinYzojR4PkvRnwxvQQzjW6v",
  "key32": "4pRvmXftEEZnn5U3SmCQzk9egrdxrGSMxCeyX7n5eQ1vyaSWvK3tx7yab9oemhynvrXaWW9aa2KLYrpFbbGZA1gu",
  "key33": "36FanTnY7wH3sM2UdNx9HNnToyqqW5AbhZYHRbGUXxLQyAqfCuDMfvrsZAeSvdxKqJ52tpeyjThaTSE7HypNsaK6",
  "key34": "3cTdCP2xkDvx2peBKTA3BD85Q8ZjKjV6MJJEDgZH4mDuNpZkZn64eYAscFPwZFe8tYFRZ6yqL9sn8uLrfXF2EqfA",
  "key35": "5gxQpgkgEPyKednknMaG7KPEWZjjheGS5duXzJ37EDZpcDJtZmWeZxgkNYS6gm57zX7ENXLyfmiMmuTyfzxHrVTM",
  "key36": "63cvhiiKxj53cYQf91Cji2KDsUsHU5HptgSRPKSsJe3WwbNDdRwDPCYdMptqNAjZqdue4txqvQQcxViktLPfoafJ",
  "key37": "58MLKxjH3gmJzmKiFBESdagVDSz38SUAVxmsrkUvyE2Qfx64HzhHKGfF2TNtgkHpMz5szJmVgcXx9sabUGHmsKsT",
  "key38": "3xFPdY1qDgfumeqmft1PkLVFDFbvcQuczU3T3WgxRbGHwKMtx5vKiukw4F7LW5R2oNvdnZ4MjBnrGH3Ldn8KzkW2",
  "key39": "4Tqee1XYfaUBiMEgLqCmE8DGyKMSLA9RGNxEpJgrebZbL89d51EWmGQVGmgo6AnVvPzkZJjeyfjSxGuizwyqSULL"
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
