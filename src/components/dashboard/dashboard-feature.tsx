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
    "3eoFs8jzvkGohkah4zoy3UAvtuKLkdwwj7gJXWQhv7M4Kd12kqfqTYDDpGnGngLXAVtej2LkannZQrLb5jFV8oxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNhNGi78PCx4ncELme6pY9jRqhupz5m2R7R2iZuvFuvSJ4DP8efWr5Aj5S59sXtUGgqRnDosRXh2wYoqiCLedyQ",
  "key1": "62iUYH5fcUh3rbzVjoXuGCSgaU5VB1FW6j8cdCGju9krQ83U5sZQDydaF8BBamYWoTrBBTmVrf7Zs69yJstXSPkt",
  "key2": "2LRXtrYZ56Tc94CmwdcgRKKp62XVzSswkWVXA3f1BNGKCUSZY5CnbTxGZrCw7sddNsMcN4LC8MpVv2xAjNKztQQa",
  "key3": "2bJumcUCvi96d6CXiXHQCmqp8qsUAFefJTA8WEWfStV3y1dPbq9M88fjUc3fRm8s6xLmMiHZvVPbQt382vHt4jd3",
  "key4": "4b49Qg1KDPmhEiX5EUq1zsH4nwNfTkBAq2r4veZyc9KnotQ5ANPxvMbmLUTgpy54wHvGhQM93Wfi6JVUFapoj96L",
  "key5": "22wgQ1dHBp4dYxg3dEGZJWPhPJYmoJjidK6Hy5SCdSh9w3Qs53NVfr1kqLF5NSYrWrNXJU7Wf814qYeSYi4VDAd7",
  "key6": "3cQJ9pAMyPxPy3a8wdvpg2SpX7efeYVGhEnXs2dY4zETbsEU32RcxcrXZxTD94RhDvLuvgPSYtjpW2AK34G5KTyM",
  "key7": "5bvEJKFfv3j6KupfAHXFzE6X9DDJTtiWUeXLdi3xA1CZJXohpGRmpnwvXJ4RjxvLCaUiGTH5kCQkDW2rRvQ9JDZG",
  "key8": "27BMNaS4vNdezToh36Nv4qFK51stDXozrdvEMVPMxde73c89ALs9KMLBjUQNSJqGT2FSxBsyDLa9nWAVykLyq47B",
  "key9": "48Gt2CuquSbCgZiZ24yonmBhp6vXGEHKWN4xz9rPNtCo9GddXnTXDWhK6bG3U2kTMxtvtVXviEwpp4M5yp4vK2Qn",
  "key10": "5ADMZ7zgM78eHXszXijqvFbPLm2e6hJiHGhUeLyGmNFZsfFPuuzd2cLkv8ceBYxzjcajh5ocqFHrKxZR2VWk7o5A",
  "key11": "5wjocM6wUWRyjvbB6o2ePw4nCNCVLyHdPiE6pwSQoDiWdZdQXVKVhL2vbuFLbMFkZCBu3ZJgyMbZbii3iVoWWnpS",
  "key12": "5GpAHQrSZpmGNr4RmSy2BnXioQ3uf2T4xroCM3QW4GKVS6zKQM82ZQzj6o8iyfDM1AJ2HbPYapLkq9KCFtDk92wV",
  "key13": "2xDRBcGdWfftuPABkxfnK8j3P9jEAF1FG1oSSd1RLuFdeD8GMLRUGUeZP8ep5WYLD7u2vvsDotCivtnugoGMkSY3",
  "key14": "5oVW3MCp9kwCt6zZ6deaKwk1dccZC36YuDnn8iXUC4zo8SE65xVZUF78Mz6GHJhzhie188nrRXkmhN6krtKyVtCj",
  "key15": "6ZxjX5jAg14zGqEBeBco17L3oogsMogRWDw3D9ScBtenAyLwiyWpFcm8gqWAMyqmunwNEysHFrSryUjBRP6fAiU",
  "key16": "cViju1YgJHC8PN217sG86axLH5Qrys1JWvPuUaSxRuqxUds2Hfu8MNDU3krAVn7m6A5ZPmuQDU696Ttd82hJDxV",
  "key17": "4RiLcbwKm6ovyCwcoUwh7DrCrkGjJwtQydrSVTEwXYsfvtauWHnx2VdkdTZJdmF9TVjjheeL3kUu9ovuRaFor7cz",
  "key18": "RJDBzdU2ioWN3h8x6muW5j3U5wD3gjSwZpfbLCHW15WEzZBMyxEeHb8K2FfT5wwsLcFxhEXqy1cbeyrzcZmea8u",
  "key19": "5iHwNVTvedg88asjhHLrCQR2aDkoDHiqAXuQvZ9R6zxASpNmvupX5bWgcdHF1exPGdzcy9FwpGbKy9od4jDusBcG",
  "key20": "32tAUJRsGwh4cX88vRkHgbvFtEvuYmXQJ1b5k1TqQgyteaJLb8gbdGpWVYy7fDAU4dYFnkmo1V8vuFxooofkiKEE",
  "key21": "3ywXDbpb6e2pGTSBW7pXwwQE9T2738nvEQjLDTGTXmndB4F8Qjc8mL1YZsmUk9F1ksjbAT25Vpbfp9yFpn5p5e45",
  "key22": "2eNAr1LdUpTG7jaKRcWS4tTGMKYWC12nF3q4NyyvYeYAhQZmWi9msqRYcAMtYXakcE5oDMHhbSby9rVL2KS61mdV",
  "key23": "3W55Zq9gPrhHz7Xkujcmk46uS7MiZnpf38RLqJ6vn2z7ZSusWSPk2u8JC1FEtmewNL7Womxd4EQHukp3CBmzTj5A",
  "key24": "qCcgeMp3296gADyZ9Dz4iDF6dHR1moHtmfzupFqsjRriezNorkGAuKNC7225799YafvzomGmREyPA6bxkhRXmkv",
  "key25": "2ibKbVB4PPHyfmsGpuLkZvCn7RPfXmKkJdzHS1MFBGUnuffEaFMsNAUdVyUPAKgAvejkaexxpNN2XLWMX4ArMhGp",
  "key26": "jsoXxm6BqzsL146gzjmdNU27DTRZSYBBp2UfrkRJbtAAuJfaBc2MZUBE16WYnhqv2AGxJUoJSfg49dri9919X2T",
  "key27": "3s8ipCpWfeVv6BgvUFmRdP9dttyGoC1QYveBEwjR8xygxg6y59VVKJSPWMkuyWVg5kA84p3ovRwKpmpjmdPqfEPL",
  "key28": "63ACCvjPvCKk6NTXasVnCSC9M3a6TaozEuvvxdNAZCsG7kbGHymSgLyatb7n5AxDMdEdyXmKhYa1dk5LZkRHe2Nh",
  "key29": "4a2sgv8iHhVMH4kMRTguDpWKq4Cm1LeZRZB1nZLsoxHUCWLACNu7YRKtczqr7B2mA6S5C3fJMwD3dZg9RNftyJRQ",
  "key30": "4NY7TTJjCBzq64A3HPPiMfPdaPmW863UmB76gDQ1LpZzahWW5CDXZLG366ZDuzyFKnL4WgKC4pzdrfRLXgWWftMF",
  "key31": "2SMCzjdft1rTTVWs2jBd9xJCdUQ13PDATUfNH6rnbkXm5fxmoPY7uhHMo7deybxPWE3NRcv5nhKvwtqMxLxAsgJ1",
  "key32": "VwYQPxLZGUiakPFZESZxRDTUDyDt1yBTpCH8gP8Yd9ba4ZpsjBY9tMY6WPjzEhyCGvGgDqteiasEkHujEvfrMTa",
  "key33": "3xhR6msUVV8a3bj5nLvcFPcdwomU19G8gbnQKM3UzudoypLoLkeUPUs1sfSdsxwEb4CSTytSctXo3qPUjuN4Gaxy",
  "key34": "5zbvpTM8pBT7gjEVuN517VZWxLnPBYe1gnCPPz94LZ4YjtxUJuxFGKZwgbAPo2guTyATzWdNBcEGxq6keNbxm7bc",
  "key35": "4vJ6xZKshWPQFiNpE5969Z862C3Wbf9vYvvxWwWvQ4mNNQaDNNT5GP2M5Tgx73DnXoFVqUiFRudsX4woBABmw2u6",
  "key36": "66wLKjrhn2zAkHEq9LZyzxQnpyKMu1rjz2PEGybvmc5dcbzKz9Snd1Fp1RjzPgbvFNXXG6zor1TzdBqsnHwCqb8B",
  "key37": "5MrChdXxhUmXac9UTJhC9NhfG1agGrHdLuX26G1XjXa7UvFzvr4HLSEfHboF3sxKZCT2TZcK229nbDcHYPQMJrAT",
  "key38": "55Mj4Z62Gp2ta4mgb13wz71BrBZ81kufa8r5E78a3dgSyy3VVKV4a2Pc1RRC1VQDEkUFSBNbqW8nfxh9sDW3P2Jr",
  "key39": "2m2NmrSw1YwNHbCbxFiYLMB9Vwbtqt44xfNFYFDtCmz7wjtxz1TAeA4G39k8stx9QayhTAaFaNiLryVP1xbc1izu",
  "key40": "2jVDPCspndwGrism6uoatfdjVn4yK527ZH1142MJJLfJKWYDZr9yVdcMiBtTrMMpm2BnMjSZrVAYEHv4DbTnz85C",
  "key41": "2QAaU6sRHgQNtEpAr3uVoiGFcA4EQhMsSpD7a8HHhXrmbHiEFPaDvzHHUQ4Nutq6b7yi1uiAvChkjS3PoYbSgWzD"
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
