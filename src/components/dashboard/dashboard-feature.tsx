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
    "aXSAPLTJ7ptRgbq5Z3javYsRKC48qk8kAo8yN6TE38cxibeHLqzZmrFxwZaD2TCxErXpZQS8jRQboTTxxvtkAiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NpQbxwRpgJeEBiTC6C3NQkhfJU2GvdeWBx97vJAb4oE48pX2s9nscmSCr7qTAyHRESsT51pQxW8Jc9jGRUSBR4A",
  "key1": "4GhmmAjY8PrrPNmeJ9LxcUuKdiNiGpDUZnJnqSw73cnRhvFF8QRcF1aCjHkfnF5V6hktAvHPzQ18a1eD4aeXTa5Y",
  "key2": "588tkaasX3YUV1xvLBVaEJemQH8yrUH5UfJVVhCEbFDb2cVrqaPtFTkKjtKkpJck66P5Rt2T4QcCPwMTrnZrdwbq",
  "key3": "2Cwr1xUWGXpqPUbjp6fQ7bbGn6E7HW8xTnvL2JZey2xYCu5hn8iQmtRKjyLMNJVGag77xgPmud8AN3xRT2Jo86hN",
  "key4": "4X8MZNqFLjvR3dEBVjTagubuzqUKXRwA6pPEobQjDqZHHq2vmjr38JJxaQXqrG3ebvC5wRYyivf8nL4rRRNH6EK1",
  "key5": "4B9bvD92Dyv736PF8hWJcJTN5zGafGnNsnipoMUk8EqWjHm1Ep3vhQtp7vHU41QLBkf96tKR81kDa64juHfpfVnp",
  "key6": "xbX1wey2pTRdG89Vb6Rr1WCsNCNNB6ta7sf13WQCRTb9cyvM5EGwTQLbomaTU6A2aR3Mdcix3iSD1VHwTdJNyRU",
  "key7": "7pzuCkidch5NEyo2vEUwhWoMDYX75p2rbzt5u9oVY8QVLm1kUFFivfMYxW1LmMBT4bKy3BAiQ4uTxY82r2o79Nk",
  "key8": "2wVaW4F9XmwgLbBkMsjFpJetcDDsEHgjbw7urLKe9UW3DFKoUgnazGYxrPHr82bBxmw5VxKj99yU1BhmFVqnoH6c",
  "key9": "Hay9DsPg3T82Sq9XpMeyyGXQPv2QYiSC3QNcn3SSCVEp2gTfbZA2BN4uXqwn9GrESe6NVPHJZszghXfuMaseEn9",
  "key10": "2dxiwNzknXAbzy36Vi2AgCuMyM6hz7TpjqUXsQnhzi3CTDRZJUL9yBGo5bdjFsqZ2hUCVkpmWo2i2Qf4rNqkaTis",
  "key11": "2cK55xZfsvLQrV8vaho3GRatVRFLk6Pg8cjsnABqByqSdMVbozqK6K5XQSr9cTfR4i5FHsNL1uzqnXUrFtAQL7zp",
  "key12": "29SMwsARSvWsVR8sL2LjUPENA2Fcd65ntc6aWpce2kjLbmrytSb4k9DNw2exLycwwYWEXe396emQ3a4UpHi2vpx6",
  "key13": "2g3y1VXTYr2EthwEnUB9Fvg6jP6WP1V22mWCPNcM5bLxFGMv1Ehssxv7B3yeggBQxDCT9fTymDUB2H2MUAGDuGEr",
  "key14": "4cqy8XMUNj8xe9DUKpAcqMU9C1eZx4PVc9uqLMe9CxPDgtAodyRBdz3JwYu8N8QUzuiA2HxR5jRk1JnJM5ErL6xi",
  "key15": "2Lj5SGa8AmxFzrRVddRJQy3DMHEMcpPgWPTix2zyjUsW1A36QczjuYyDeD18YJCmERjFZH69fAiJB78o1tNKfGGa",
  "key16": "45CmicosTkDLZvEYEwJyhgsLaaWmSAMCQ1XoXeuYqJLRNr3xxkxtV4xtwBhTK9C75bj14hpbCtVxfFYkg7t58Xjh",
  "key17": "2x4YMCHjALjKLggMkPF1nNSVH8MkCTP3VVqASS4KA8U9aLmEzQGwX6U9s7PqzEeZTNrY1k4G9EyVF7MFKArXLNAd",
  "key18": "2NDogtT6uGB2HW7CmbZK2upW9gSBxGoCB34st5SbGUuwTfGJDAns6oFAMFw72yk53PnUDL378CrDBdTAoVrFpUew",
  "key19": "kJajsdWefDpJmL2Rr84i8UGSjYeFUvB9ga5HVpwhK4iRKZUHjJLSWq5RQgiZXmf9xbDjRHkehNeRG9VnAVcw5Zc",
  "key20": "3XJVo5gynAC8knfhbT44TqsQhwJDJN648cazbicNZ3wMyGABKrPDALpDe74crKbb9BogWFydiPVKBtSZJPewDwLo",
  "key21": "3pzHsiYH4n7dMSxBnUVwHDXUmrynPndWM11hV3EKykBocYhkZHXqajS2AnG5YizxHt7HXJpzWvQGkmrYoKPqgzUY",
  "key22": "XaMR2Dn4xTEAkyUoJA6MP5gMkBfhJLsXhSum9DV6LqJQaeVsP4uai4kfTqKMXgRasgaLo8mnR8GT4yJU1BUVSGs",
  "key23": "5ixafdKkgK7UBg73tsm8SGmXFnHrwqpfXCtRhupCrZcoApwRSrRAFgtvUJFYhcKc71kNhKCSdkqGGM3eg223PaxX",
  "key24": "2mMNWQjY2ZKWNwvUy2yDNrTgb9ewrAPtUu3LFowvqgwRtEV3xTLc1GjFYeXGkwrvgEZN2E1NVpUXHxWt2xQ4Ey9m",
  "key25": "5bQWeGJu8TfkmY1YMGQ4XEXiDv1E896pW1GJrSuKLcFpdxWRLFVLpY8dbpqZxYncARkuNvn4C8BL77igyHBHfH2T",
  "key26": "5CgxktHB64qKPdyk8aFfhxMQ1x8akVaQ42p15XQhsMUdNHmdtQPNnWkRprStsz7wPBva4hJ7KV4x87BpaNZaKV19",
  "key27": "qcGidapaE5j54iFJzGaRGxbMxvmMzLPfg5VXFXDb2kwYuYsKY3sa9jk9KSLUUBNLvGscifAzMgt25X6WH3SZ8DV",
  "key28": "58ypitaDkDJmqSTeYjDBuhSBjEBUHxtLDGV738rtpuoGuUTsuzr69QEe1QgZDymNm6hLYiLfrLYJXwG7NsJfdmt",
  "key29": "3ru2JyzRoCF7GRWhkcqzE3GL247Dv5m9haf4MJuD8Yb4AeXjZZLTXaNakpiVm6aqpbq6FLht5H47wtGHWXLGLCex",
  "key30": "69wusRDzKbyhehpsBATT7Lyf8UJP6Lf1D3mVdQGECdr8PfjFYx5ad8z8G9HZs9nDsoqTDDrYbaqE3pDftx4ywBU",
  "key31": "3CLSnqNxUXuoU8cNLuasdFyD6BBB7GQf9p9iUsVXsSNut3B7DeQJtpMhjUFLf5WMBQfVqPHbyzHSXQg7iwpkRfR5",
  "key32": "aXMrsiHkTJvyvwFXBQbvSdgyW8WrutxePxEyQUFsTZWef3gouzdmqjg5dM6exVBTMhy5msgXQ4E76pn2v2Tmsvr"
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
