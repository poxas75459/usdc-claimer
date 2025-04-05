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
    "24EwAr2gVAMtoPMEqREC8w8yMU6VHhQWxSaeHYaFhiWLmezWEbnsdrNJztit1fsvmUmV5F6ZTgVBdJzZ51w8fZ3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xzVut7dBrD5rq599Cx35gb6T7icGMJehzNx11SuxSwSYzY78Jdmo1kTrWXxYziMTcvYkVq8Vte9ZwMcPV1uWt3E",
  "key1": "3H3XwW3aBnCVLjLTHD6tCB3LV24LP9YHVKwvPMeZPWtNj6EsMe1jQksRmPeUWz9s1jH4SFCkh6qvEz66DmaGN6Zx",
  "key2": "277RAPTkF6mfVDib6QeeXzF8LLq2adkHFsyABRMfC4dUkwgqUs1vesMdGF5Cd4ZzGiwzmdTwweDKN7SUmDQFE1iD",
  "key3": "2iie2CVbWMZGGrbF2TPj4c8yiK9XhZkGYUNnnPdrmtCYHVAWkWA5ga7ZfS6iW2zmzqNJg1Dcsg2XgnhmshbUWqSk",
  "key4": "2BTxZZPTnGDuwHdey5waD2m8TDXkXbLqS3KgJ3phB92b2dEjaFQVgiCoN4pJzMCtpxbpvS9d2kgNW9RhbtNNkpAC",
  "key5": "4cYue2MS3nfmg6jjNhqBiKkuK51LLFLVf8umXXuP4Z4YU367eYs7YsLJTApJb3vieMxXxtUPsQZuViuFPNGx6gar",
  "key6": "5z3eQNQ1z2QJFMhLWApwLJkDgWcDbMPKkd58u3PiDnjVFCDfKDbZ32fw5Yp9A5mUERXfg8SiKhFcx9j9XLyKiDgh",
  "key7": "5JH3VgEDv6CQ9cL7FTUYYH1UTLBt4M9hGAbb9qf2Z9QjWStf9k8A2hyKriRqfA3bnRgcreczQh1hzAiszQgL6byC",
  "key8": "28jeqSh4viUSDKuM9mzbC6d5Lw8M3eZbgSjCALBWVbG67vU9TEyAwr9ep7iZQR6CpWDRH2ZwnsKL5P7yVygzrqBK",
  "key9": "k6wAuSqHsU67yseqNpYnEWgxTRxcPaHv7pMvkQmsz595Ns6795oSv6wYsmQZzX6enYk5Z12LrupfMGg7xxgTz85",
  "key10": "39KRAgiWsftueZW7Gj2pFtQE3EzDe8ywSVzrndHeRRas8hcs3AX1fyHmJavF9kB6WyF9BpbQTbCFUUq7ohgF5ZSm",
  "key11": "3LidhKAEF4c2rqBYNAxYfyoMxEPfzKRzjrjxJwza5YrcDiAyYXRLKG7cBVcMyZDu65A9c8ctxcU7cZUJpQt3D88d",
  "key12": "2cPR3jtvgKbxc8agQZpnV97b1iaGc1CoX8LuTizRUEGn79x2hJiPoFr7pbhCU6H1qxBZXN9aFeUsp7FjQQf2CxTi",
  "key13": "3ZyhMSLWmWUfHkRTCdr8DTbM2tKpK7ncFhZ9BDTJyYs883EDsh5s5VitytfTNFBUbCrWZnkXx8qqzuRS4CF2pQwi",
  "key14": "57L1JVpLp1pC6kdoZEGMQKq5jZDRTyZL3WeYeVcd6PFUVRMAMRU4qSvhwoUtjV4xZMwiqduFdwMrsnYBYcrYJbra",
  "key15": "5XJoL1RXJmqaLpiahYgXLF4QChTtFhBJ19QohRZ5LUo7m3HyF496sEABzdqHmtSjYP8E4HayRy19KTvpMcNfVnVj",
  "key16": "3nYioeenL6gGgbUo9PtWsdsgmcn94PFVqCQ8ArgYFGjfgf1rsakTwrVZdWzsWwyXqUgPTrfa9FNj4LuwbCaSfpfw",
  "key17": "4DTqhM74fNaakRoALb3ENUqXQucwty2PErDpLKLRsabw9wzGzD8wRXQibZBGNTFEdXK1pkwEEgxyX4JVk1z4FL8C",
  "key18": "2CmherWFZd95HJbXhf6PN29D9FXsuuZ3uLkaMbcTLu38FuKscgcLRDNzgrbvHRHVcfC291AEzCZp1GAgajdXWaQJ",
  "key19": "4oYFuadyy92Nse8vQheAcp8G5H36qs3onXN6howQM8EwqTMxU9DtVYoeCCQxZPs6xaGHY1cQSgnrpoEi24tvEF1U",
  "key20": "5bXhDqLnSf7J494648e6GanmWh8G7JysAff8DZ1UAqhr5bxNFCa9KkmFBJsHX73QPXn4JLF6Nirba3Rpx4919Rd4",
  "key21": "433JrXRPFaEav2hS1WgfVmqC5JmFXwGYfNzWL73McsWno6jPWdEvC5jcB1R1Nbr69uEqiTEhwu4sPFsgZ8Macshy",
  "key22": "4kbHqdzAUXy3GHhYyADe5ZqaPZ4pGAYXFToqaKaRujxDf96iPXADf1e7kxyJ1MnMpsqGqqMprCSCCFxG83yxVoxE",
  "key23": "auAEAeym1nsLdJmVKn13uiJXG8nCEMoHPeGeugxGKDA9e7EfB8w3UubH1WttbjiJhnMC52sxk6YitUEJhbSYiXp",
  "key24": "o7SL2Zxbh67kNxDm6A9yADdjzCfwv1snVjJLd2ewGVXow8cJDyAb8VxB6LZotcGvT5E5W7SbDjxofVaMFpRT1pn",
  "key25": "NwYkbbVyGcwRgU5gnmMud13YSmRgo7ReQzbQhYaHQV5DTumQqPs1sxF21J91Rc4ukDyPC7kRVSssNYfKzWkUQe1",
  "key26": "2qzxFfJnvVPdouYKj1EonUf3Z2KLq7XtmLtAWLRgkYHrRupjN6g8VMsM3yQKp72DmuJNS8G1fFv4JCtsDhX512HN",
  "key27": "2ADkybTPez6Huy5XU5YoVkMPt6UJvdDZDkvonKVATR9WYzZYMzu8LqnDvZhKZ9J1peedTeNm6Z8Fisp5PdCfFj2y",
  "key28": "HSfgqT82WNfyydBpAZQQhrcLcyneH1LEyScDh92rCPKHrvuJWHej9p9mcuQDQWnLkkZmN4A8ECMGmkxdVB66XtK",
  "key29": "38Fdu2LkQuXjsjMbwwh65CvMfJ4wGYiJi7p1zTsz8xsDYaoKNFYx8RPC6uMgdMUmPNgBDeGpJ6G3y8DLc81jsM6r",
  "key30": "2YjMu4RtmpK3fwhxSjeRgVWzzrEV7A5759R1jx2KuW1MSuJxZFEnozDvkBNdx5di6ugqq4yzFd8DFEQqfWkQxaVE",
  "key31": "5qs8H5pTXUsYDs22Vokk5ZjgspNgcVUzt3QL4ZmwCkn6SddfALusevuhXx9YY5M7ZtBc6uxFHm9TqP7XK5f1ub7u",
  "key32": "51LfmbN9kAEurYquBkg9HzFm2ByAY9hcUFoZxeQ5tkk6bYeR1KLJgXdNkACEADecCHFjBWDVn3LXFTxJHAz4mLRP"
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
