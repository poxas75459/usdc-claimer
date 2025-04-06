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
    "4PCzdKfPTj2b1SyU6geVpvZnkQZu7mfxWezT3tc4681aMXTF7txL1hKJKubc8WemDRv9JEJLButvEUVFTks9RCpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXeK88fWpQr3nNr3255gcZRFxcAqi9AEyUen4oszVrUBTquBAVxnvMky3Nen9aL5RPtC5iHzgMnWNGpCGvCc7uD",
  "key1": "496L3xB26MDRy7RNChhSe51xvDeyL3LwvxNy2uZj3q9JeFpGaPwd39Y1APq5DPGUvx3Wd8KEt6QnUa97XAauja7c",
  "key2": "pzDmiuP45XGVUMjEeTKzHp3EXTA84qtNRDJuQyWWSpVmNNN7urVCL6P6UXBy2YJw4Qk5674KfWk1hfYzbg2d1gi",
  "key3": "ZiWKbpNuyo1rJD9fYtcgGJvDEep5W7BejiGp5x7hVjgRUMkHj6tCzqKfhR8zNxnYTpWXHEwuUVi7S9hA2KPDytZ",
  "key4": "4RMNcTYPJkJDk3oJPLRvqXAfX6QSDmwXxb13UD6fNTDNFUhgEqLwwJAfd6uEzZdBNwq2mYQHQwWCfUoyvhCYt3eE",
  "key5": "4VLuxg5myL8nsH5cJKQCBcVjbZmeikoMGsAx2XvV62WZwYyYtGqqNTLwSoyRqoG5q93FYkcJLMqvRvetFSbnYNPP",
  "key6": "633bXZPM7Tw7xW7uzZmHhDnRfCxNse6HyGRmQbwUzZdETqBRU4aKg2K8tWdTBU1DLGDcgoYnposN5vZV958P6P8i",
  "key7": "2Y28xQ8qfhjnPBT5B74X9JDKohp4Lt2x96ks6iQ7epALZr1RsLET6bASGuxk7Ypy1CfCT2t8RJMtLa3f3cB9uYEw",
  "key8": "4QsyciErLEbfmoNShfMoyodj7dhud7n423UBQV3t1vZ8scABVjJnCzRyGehjQuhQ1XpifXCywKA9ZDE1fMDZ3akK",
  "key9": "12A2MxPqGFLSfTEV4C8RGc8H9tiwNcMiE5vGCTezU1K67NsY9mHjYcWTDhoVCHMbXjxzZXevCN5LBrkDuaGGCM6C",
  "key10": "3ECgVqE8Aj9sd8QMVEMS2SnDDZrcjFcvEuTPnCFMDAhWj7mSeYmeXwLqE3vNPJYbU45z5uA7rjSzuFQcaYzqYTgk",
  "key11": "4KoueP16DRtmqY71vgJBHcLoX4CaZGN35Wfa7EkCVeXH3BfMK1jUeSN1o2TRRUMGA8DdkKx4XqBrAv4Fsxqdjmob",
  "key12": "2b53QjWmgXAjDYvsd6b7ce1xcGiWteaD7coC8QM2EF33DqAKw5nPKYgaoMXZovYdUyhqphZhcVZE5UR1JVFUqmJA",
  "key13": "2kZ2x6kRuRRrwYUrj93VQMXcYbjBbvjvM8DPr7MRFFPJnUbDtJiFGM7xzBhjSrKB6kuu89rXTdsG9yScZ47hv3so",
  "key14": "52WbDPdnhkHnrpvKftAi69UPMTKgmoKTjSVyU9g4EcRHEJ9JcQLrWiNdcWHEQtz1sVfT3tKyUpMBNLHi2z1YuEfr",
  "key15": "2JykmHyeNhvkSu9KwjCx2iwXMmpwjeLQeThteZS2vavNq23W6cMJiYozihZGPNaPtSFBwy1mM2DukJbx9iRKjDPy",
  "key16": "4pDJDrjqiH1CJYJF7x2fwzRqtvweKMBu7wvp6XzzTDPPh6PLqtSNgRjmJuEzNtrmGyXvpHBfVb7PaQek3dq6woqL",
  "key17": "2YJZkzQ4ELPcXFHdzR4PWfH9AMcgKLYGdWro9Egs7VfSCVRSoiGb2GQxdSe9kX58nX2dvPKjDW8LqSsbtUn9nizy",
  "key18": "3HoLpknkKhDarJ6VC2JSeHPKCXCzN1nhgsDkHMXz4qR298NTDC5NsyXx67TAayXAN3YxHJMWXj2oPML4JpHZsbVn",
  "key19": "5mYK2YwHRPHjL2dDsVcpnPq7CNGotE8o2fFf58ow3Zw83VQ2BudpjQneBW7aZoKPYHCfHh9TvAFQYYPeSmRagzjh",
  "key20": "23mL5kQ3evtehHYoUEzokbGvzZNprL1YNGjRfzoo8U2HuSy4JVG2gCoxBr6z8aFgeeHtR4zmioRp7w9VtgoZwo6x",
  "key21": "38R5yB5irTNjXPkF6WzEeTEHqNgV4rp6P3VC9WMJoRBFxVNBK42nDaYFQyuS1sSGkT7XMz1V6GM4DLwm5zCj6DdM",
  "key22": "MgB12WAwRSCxmv597HAjm4B3vKm4jh57s4qUM54cH5mZKz1RZTfnW4eirbFWuXyFVvCegCFzq2pyqkqoyqZNuCU",
  "key23": "36XtihjFwfKLS4oLtTuBXK4dMJi94Fbn8794fLjzwQzGPVoL7Ehj4cWurXH3saByiAHZb1eKg4kkzHW6mWtrNT9r",
  "key24": "4MP6Z11oB82iLV4KSVV42HMJ8HK8kThryoUS3BcjNdpejGAL9xrLg4Fsm8yVrzpA6vza4MbBFkAztMjwZznv2PgK",
  "key25": "4TKgDJFgN7KFf4SdcWWh6zArALNv2RbMBtcbCkmVBJG3Wj5SWi9mpFqSXTxErt3KT1tRVbVfsd8b4LVxTgZru1Br",
  "key26": "YL836JU4cV1sofaG4VQkSFxUKCKntdcK4P7ZGTdH6aq9qqb2mfjcRNkjRVfQJ54pu2kv5d5gAPVVCKWhPhpzuPs",
  "key27": "4B3W2sAMVyFmQr2xroZixj13bQMS82ZFPzHU8oUxkznDSDBJn6HD3D99TVQCMUaR7c9WYQd5aq9WSm7AvXSo1oUo",
  "key28": "5x1zGXS1mMhXNLqBgiySDrSBXe3xdFhzMK8BATBx94WGSLVEwT2L4m9QL2E8S7sGPPxBgiWmJ6JMbejHue1Z7xkD",
  "key29": "31dPAEAVCaVPmxdgxoQtKDrwoMCAisnXUiiPtXxvYaQoZStv373FApVB18SW7LmwugfSzf7Gpu5DAi7fU1hHFSKR",
  "key30": "45xmRApCLZT91nsnWkBbrN5gaHFLgM43fbhWRARYCWxSpYwXewX6Ejj2CRHAxGuQ3vrUpPvnNssNsnC6GAa2AjiW",
  "key31": "51MnNPiPPW1GnqpmNzVtMtwCKDyfsUeB1P33sfVsbXKreppevHqieGudNxEYUao6CzKhApmh9c1wqsYa4G7BfzWy",
  "key32": "4P8Yx1MEdTCvhR7jLVBzzDiJ9AHSTrHpUDR3zy2pDf9cFrReggRdr7CThKf2wGm6Z735Pp1dfCUnuXDcKPcUFiYp",
  "key33": "4ijYiB4gi9snw4rSDoJSBpqHoFepj7qjXxGuQmCz11wtazhjVTgZZxYcExtBx4GGx53VKXVJ7FL6SneM93ngQgUk",
  "key34": "4uP7fPfEUbm9ZuMPPmUrhN237b68FRh8hSDpxkgzVKpSLbZR4WqHKufJBkw8x8YihBEx8dYFDzabh3GMf8rBZX6",
  "key35": "2HvWeeqEFtmPBKnWPT9SpDeeqzgKphXFwngZe6gurAsy9ezTBJ3P82tm3XjmoZSrghzFk4ShEbPTdtYFwyV2QwgP",
  "key36": "3r76PRcEGz88yErXEtKQzGfpokZoyVAvMAKwKajGJgBUWVaBWouyMEjWU6MbdRexVdZFkgAkb1ox615WeZFg7dBE",
  "key37": "3WSeYZsxnRcTKS7mMTZetPLXqgUz6qPj7UW988eZpLGVZq2JN5sDCwSjRwRzyduHGKKwvaZoSsVPGGyy3f31FcgC",
  "key38": "2Fe4dx89kr5EwhQE65PgpPZE2G7h8Z9Bk2NLKqNWiUaXR13zpkDjPaZbE1wBdevi8SDQ4yNjEPhQuvkgCDJGsr74",
  "key39": "5eNkBoZ8am1xa5MnY8GqvHj3PvQcNQA7aJcoZUWYz47DEyVa2iGnSe2PcBtg1VNx9YGqKkykeAJJmtQPNjxmaBTd"
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
