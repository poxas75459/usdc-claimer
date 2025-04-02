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
    "2bTvNfHifd2JZAGh2kKpBJW7Nz8KqTMCsrz4BPijoRZSbY1gCMrs2yTpvvGY7uw4Rk9TjyA43AG3kdxYz6hA3NZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tACQ7nbJZTmnmip9ZDfvMpMYWQKoV7kQNa9P2zAu3WjDc8FmB1F7xhdzJLdFDhMVZSqD2V1S1DeLc6HvtD8U1mE",
  "key1": "4YD2PLSLVU5DFWtn4riVMLj4hMbtSbUyL49AyzhfTgbb5oBygfaa2EUoBGNM1bYx1PcrYJ9BEeFLApRwxgUTgfAi",
  "key2": "fmtM2vS98g9FLFM6dAyHm5koyVQi5hoo4bTF2QF2AKHYqDGjrhSajUvX47YD8FqAYGCYAizgKyC4jM3SdfG3tym",
  "key3": "3mo7HeXEeXg3ACkFCmHwjSfwC65bv82vH8NCusXt7szFYtbYW2k7XDDy6CfdkogRff5FvAcTjgWAMpPweyiZUKJu",
  "key4": "4C9yHLNS2Vi4Xnakqa3okxf8uHBtK8wp6VkMav8a62LS3xmF57StUFh1XWDUfafkQp29kzEzMFtffWG3QzB2LJ74",
  "key5": "5Rk43EhezybLT8imUoieVp6xbGWFQwRR7zwBvkdgVGKh1hYj9PK1ipyrd2QDPmxp9ML9bYqcQpUvzajuzdWFsUuQ",
  "key6": "63mZer8jgfsxvMmFLurQcknEVS1qa4ZuwkcA6L3PxDRuC2S3FqFZFQPaRXAugGvEDjsZxZsVxZzppuNBL8hEs3Re",
  "key7": "DMvfxH2yjFrUbDxvFVMJ8bPSugPqRA17Un72EoCRheeLtfxKTeXxZ1iDZqS6sHbcqXV91DkwRer5SZ1xfSEhr2c",
  "key8": "3ypAGjRn3xRNViRG1PohvdqAhK5VRn9dGygzkEcXuFQrZ1G3bXB9So7mH24fJu9LqdcoVZoM3pEXWWTXFe8HR1Z9",
  "key9": "JYoQAnJpg7p1a1qbxQ5REZGBWX5bREZFxiogyxjrFaXRLCDL5ernZyvyzvQvQWfwgWNqrseecZAyPJvC4xxWFag",
  "key10": "3rJAhxWvUEzSTUcYvaJ6HtUdqvwR2DtEiUEVxLFnYhs6zRXNuiCTfAgcr9RAthTC9sWXw42BkryUY52xuV2W8TJz",
  "key11": "85qzmSWfpczJLoLcRBaqdhSp6aa3PjGge6HTcRJwZ3JErcwWmvYn2QTThm2YbP1odhsYTt8WyCvxeGeXfHUy4or",
  "key12": "4UFMjMWobGRtup2RruX2q2ocWBndJ9G2Vdp85ZziUqdni4pREKqJ62QL7yAmR2wg1VN1kWT4spTe2bR8GLbQkZns",
  "key13": "2Hco4wsxz3J25QwPK5u9JgwYmgoxrawXNyfAwmCVZyzUJsL5bTKy9QeKJPchVmJjpSEgka198R9Uf4uv1W6s4muy",
  "key14": "5VY7SqXEdB1CPEXRf7CafUeYJCUMjToXAfWC1ckojvg8JvhDh4wrJEdqnAzoxkB49yFLUFBETZ1DwYMFwqCVw1hr",
  "key15": "3QZQX5e64EQMTj32DVCLyPehDUuRTEKmxMkcZ1YDTfoVeG6EnHa6F2zSwW6JZsbyJpMk2AZ3zMnbV5bWT5Rv44FQ",
  "key16": "4chcXUdqphwpidFpQdvooT5oA8H9ADi2Da8hhZWKUUSTbSQr9mEQfJqcMzCRMfRv6uyYHLcUq86TmEFgLNL7G7TL",
  "key17": "4cUYXifF7A3poP5hai6GBRezp8NRhcMWDZmWFCx65aarLTRDbMw18ydfzYdxR77BGqcCa9pRDuTKn9QgBrw9cStH",
  "key18": "5rgjqNLrX9Y547RuF6wbHimRGhKRKTVxRky88benW3CKGPNj3gkr1NisMjqt5RBiVnkGKyxXf4DJ1kdSGX9ogQaL",
  "key19": "5sLLS4awJwJST65dJN49BwgigJMET2nnxU4Jjk773VjUbPTRfdCkwwDkuwdEK9AmsqPJAGztJp11fZyzt4gMc8jd",
  "key20": "2rmgrjYyHFfNxPazJy1Mn9uNbofrs1o78V3qGCrUgHDbyogYnzhvLftt2gfMTBv4h3LDzx9YtqkiTauMnEUkdMyk",
  "key21": "25zYAhw2VWTqoseRfCqq7ScnZXTS3tV3Lsc4FPGwshpkLQSZxah7GbvNGePWBymApPEWj3xGgRJFrXUaGQA1inEC",
  "key22": "5tn7vsgYqGEi4gY47MRd4YzcE6mhsHgiXthujzQc9rdhbCMSB3Sz7M2GBXpyosCSePb5zJBSDC5zNyeYWEjk2qix",
  "key23": "2pzJ66zsTLPSkfAAvVWHzHdwnTWjX7n86kayxMXQT5hCwc5AvvzbJrPcyHiFtRqKJ6fSFEbVRccX7gBk3TYsdPKY",
  "key24": "49QTHs4F5LJuDzQTeW6qEbBL489SEhK7uYjZLf5LDRDNiLtNgDFHVrBAua4pd3ymZS7dCTdXsQ6DXiw95ufhbhUQ"
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
