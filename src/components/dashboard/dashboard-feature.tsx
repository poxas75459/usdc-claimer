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
    "56KQKq2vtPLHvYqrsuVQxRjpaNPkbNVstiGurYJVcwkVf6WLuB6Ecs3FLjjn3gL99vn7LLWXWLfohiUxfnd9jVpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZSVKEccQWEoCXcSsQag4VzHxnKBofY7EExcCcs7Hz1QxnBUseohrUNCJoRvKKjbivikXS7p78Ji9GKv9Qy6ARL6",
  "key1": "4azTpuaythAV3T1jGGQBqYn5asFZp4eMzxa6vCsCNwoDgAkQwXhhba4SGtnnVVjevtMY9TmvbTYYunT84t3A2gzc",
  "key2": "282X1DX3cukkQ2eBNCzfzAHKyTmGAUsnEZ3QTE1CcPYGDztwnPnF6P35C1a5JL4RznfyDnrUWxDTuT3UfCsDBagZ",
  "key3": "5W3XMzz7ypEPqpAKF8dXypo8gCJzTD47ovA2k1TooMH8TsTZoeuWZ7wqpCzK2TRUibZDEGNByj9n9QRp93Tu41Me",
  "key4": "2cB49gFR6sE8zyKSyFS6hDU1SAuRhEtcwHZyhbDkLwznMkgi4fzTE29Xuj2HBGgqpEWvwXqRUJqgmyfXDXBfpgRj",
  "key5": "5xZTnQkGToqMrHXCppuUnkKNU3fQ9d5m9KA4LEUUPyvSAZaHU9dH11Hdr4H2AJTZEXYnRuW9hYYwfTDmZGqNjQ1R",
  "key6": "4pptoz9Rsmc3Hq2EgvKnNnLcc7XNaWAuEmpg7xRCRdyMusdPpPVPAj5CJXWA9hX79U8DStuT7uWnEcAj1bn3iwQJ",
  "key7": "4rwMB3wTUHqY8gPJimFudnyPVC48rKqTozXwud6PFPiHa2hMxKo7cUk3cMkMczmGrEG8jFK9sZT3MRyyTrCH3FDx",
  "key8": "47LNhW4xDoHHYYrfLCMT83Yyr3sFRomSgDMszmWAUuef2LwHPRvh8AjJkRuHWHrCBpZG6dhJhsbHQwUsDi8DfFp2",
  "key9": "nSTg7P5LNTPNnfgP8A1ANKyr1prmHVNC4EDQwd1LNZMuv2NKez63HGVF64qowstjGut2nhtA6BQtCnphcEDnuXS",
  "key10": "2CbukBrMezuet6LUpgtcjsSgzjJUG1DrEaZjDQn2ipmFny4QAnNpwwBZy3LxAGnDBciTzeKtrSyqiPba48iR86VB",
  "key11": "3jjeG5GQjHqsaeGKgZY53CCTqMYqmhJPNpTHzdNAr3fGZQzXWhYtgvgMUS17yaqa9xRNiYk3S3o6cW2dgNyR11pH",
  "key12": "27xc8R8H1oCfTnBV4c5HUaDcTWz3dF6BT7wHWaey4VdnobDx4kLBaETNaY3QXNdmANewtBQAt9Ue8A9NYfaYddqC",
  "key13": "2cd1N8Kfj1KeJKBVo69H9mcWxrfoefRJpPtQiX38nvpYMKAzkWuh1MvYZz2n4gz8tiN4me4Eu3aq6s13C4k1Z7ju",
  "key14": "2kWNrdcAoWo1GMxusL566qhjgGmeNhjx4NxxQPsdEe1iuYyCZC71PG4rx2RwKS7yJ6N36zXR7dUmhfgUKwTUxGmK",
  "key15": "4xifQf4t7A2Rw6edUufWDSSGNdpnvTTwtf2auwRq9UV5kXLurTzyqQyuQP1KepWxZUiQStoAm6ZcoiTsHkTrwtRv",
  "key16": "4RuSsJBQNnp6v3iHgfYJKaGrB3v7f54jWEpbLCZoUPqJjuLpJ5EcoF9ZTz4gxgRNS9QHby6xVHgt14aXdb85Lq93",
  "key17": "4Je8ybk5X6fdXC1MbjEfdmfXWk4p5syMV8ooTUnSSxYorpHPbPkyGptBK6F5wTL9oHdosrpqVRRbtQ3fvb2AWNtV",
  "key18": "Djkonu5P3gZKsa3gi376LsZwixmbs7mARsnjdY88B3vw2nDTu7nnNYTrFs3FEGiSPMKJ5qMztPQiATYAxS9EXDe",
  "key19": "dbNQ2D56BHmncQdtYiHywCDXgsCmCdQNTpRsoNou61gNDZQV5MoMnaSnMzDy64EPgBegFXwq4Q9a5NZr9MRYhYA",
  "key20": "5tRtvzzRQ4YquKgS1yfGpB44dziDEGqQyXLxfxK6z37pQTLLfJucf5iBzbP3XVVTqauPAMkfBf3V8naY69hMxk4t",
  "key21": "sHHYUPyLtqr2mF4ivPrxUhz2tp8uSEMLvfg1oyoYz1Hipq1xj918DsKtUbVW3QyqPaRLWQYVmYcEFQZkajK968w",
  "key22": "3aJD3Rhdr8fNxK6f6YQ43NEcU2zohPZ3nDwdYoPv8kSv5qYa4qbjTDgZ1DaM4KNWiJeYBxqQdLimzGqt92rYJGsw",
  "key23": "WxBSGhZv1aLDotxQBWRj7dMVBb4HNCHXJVUjZY3eMPd82jFMXHsW9zrdcvCvrACJhHBdwzELHdZLsm8xAwPWXsj",
  "key24": "3eEtYEKV12FKAJeaKEn5DYfsSfGeMkN2xjkGmhvWx9xLmJDTpwUiBygtvmvdv8VdqKxfHs8kjhENGRAJhaqPbQ9R",
  "key25": "51JW5sh5WNkfWPGjTMJ1m7je8Lyo6MKioyrxSwXvkXcErKvMScmQq4zqfosCgymmQ25wyyjV23zb9Cy2JV3JvHY2",
  "key26": "hSZvv2qCKLNdEAKoXRpP6k8dN9z6N48f8SDxLKRJwNvJMLo83UhuS9wod1pVDLdbJKYUJabqizV6jpqR4dE69Nv",
  "key27": "A95grJwACJ8oeeGN9ypC2m7n8KNQt4ppcBJJ2nSdwqLQvatbZS7Dmm1wgbtw256ZgRYntQFvX8VSWWVn1a3zpLn",
  "key28": "2AwPeyiG5egSHRAxTVdhz9Fc1jgGptMpZ5eBbAfc8N86aUnkMNnKQ1bTuzf3SA7tkXZhhCf2uBfTfUBWZaH9b85X",
  "key29": "3xr1zD1wBjVXhCCe9y1a6UDF923TqPtnJhuSAy2qJQHxFz7c1wMWgRK6MyvSZ1d8RfCZJDPH4SqqYA1tZUwb3HHM",
  "key30": "3RMHNGMVJp5RShdXtgTzEiP8MizMypDRAuAvWqKQ2zZ1N5X8Ym3NPE71jSd25HX8dvDVmHigmAo4HuFCtfYHWq27",
  "key31": "2GyG99tPYz7uyCEvGES9T3NiNCk3pEQFoHoSGMotv3HoM2foDa1XG2t9yaRFZWAjwyUoxPtdmFigb2TJsxD8Aoae",
  "key32": "2RgPRYRqsFyMZdA19uaUYwuMQpEKDBHyWkvh8JZ3Jo41JFyQiGZP2bKAS5E7FeU5Vd1oa5JAfH1ewBSTdUmHVevz",
  "key33": "3quMHqGU1X8FD3oJZVRw7FELyQNL2p13RTFEnGjzpGpe5N5TRDGrCnSnUfQYHYfQvcx9hWYT8JvMGsvzNz3Q6nkc",
  "key34": "3jCUYgNJtRFJRGuUAX3kPbVhjr7yq7G9T6Byb7HAm4y9bJGbEL3skMpgv5m18ThwVwwBXbGsJmuHoTyZqxPuskfQ"
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
