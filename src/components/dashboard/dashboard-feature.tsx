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
    "2oC8osEK9mGDrVsZBJkA1VR5eUrVcrsh11QBUQ88D3HtkZgq4YZfWpeE1JwMEhvwQ7MoCxVBhx2Yv1qgYSW5i89u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4os11Jyryt9hRwGJwxRojUrN8Q7RvpjhMXnGQ3Fy6U2Z4YXUSzTQmztCevkuxw4DUi5QVV31wDHHqy4bDX4CyNZc",
  "key1": "2rCQZUsuch19xGYHKhY2QKgi1LuVEhE7vVvUUqVK5zicaPwdkarCMQ6JzeFsyHRAfXjLcsaNkKhMK9CucWygA8pz",
  "key2": "5PEKrrhZojaGcfXBUhNnxZ29yZc5823kSmYXtcRkT1XEe55CNveCHwFs1gfEs1vBsPaqw1QPnuXvyZp1FtafsoTq",
  "key3": "3tLRCF9zLy3DbcB7xUAp9WCMNLg9ezDmJASXhPbsCj5yh12ptx3W3U1WwDUzR57r9WsEPrYMULxcq7YvfCWTQ9Cp",
  "key4": "3KVTtfCtCWNBzqRF8Wa4CaqgrZpUycZWUsQTaT5o83nTFovDVDRPuUnnvWKcy95pCjc8rkMDLKbQLRWc6Y6XWegs",
  "key5": "3vxABFQNhaP5WAzpc8oYFzLMvPpukm5mNmwdexBn1atcC8bcywM5MFmf9eYvsFYMoUAbv87CcBqmGPuezF6PzDWb",
  "key6": "4oTGzFeufv1SdKwEzckMAH88acFfZFqG9qyh79a9WQRASD1TXF3vtbAjvWLVk4djAC2k1mwM3eM1ZNa9LpuKj6e4",
  "key7": "5iECyCKnyWuh32EWP7pE7vAVCwZDBVGjCJRiqsd14uUBTujRTddPmvrTByouvxH3ppeFFCVSAiAdWiFwsAavLuqS",
  "key8": "5tB9ehvYTSZdDNLdEYi3PKNea3FATmiAXFajRnnQfGCDPSeF2p5J45HRY4m1TgZUNMs8bWzTBt9XzUyfUvLttMfj",
  "key9": "5FaoFCUQTxqbh14XeQjgP3PPEH25LYosP5H8BtdtqYnDFp476zSfia27rAQTCPCCEcHYSVTeYa3icxs99xLxaPt5",
  "key10": "47w3fVHz58M6JHQedQM7XnJF6hDSb4t4tE4irj5nytQB3sYSX2ZkYmJJAHYkvTZEF7xT2Ea67vkc6wRrSAMCBkek",
  "key11": "3Ka65i9zy8qr9wjpV2WrmeQoAcnqNPZy4k6ALC9tBsDETYgF15YfmPCrvgLVzXqR7SgNyYun46dCxqKNqneDTjGP",
  "key12": "4pdS1JJXkzKmgbh7o9DTAF9NK5Zmak655tP4yQkcNu28WDWaF1iXCqphKZgn3tWcEPNoe4UVxEwm84wRgMyrUP5Z",
  "key13": "2uFJjb42iQWL2AieEW3SGtuvQ9HX6qBvpV53mFjfXXk2MNXgfEjkWxGdj4JSu3f7HkwzfCWGBe74ZGRaxDVg1Rmx",
  "key14": "mLwWkcQQSPJPCBaVhhcsLrzrDiWuMTZvwfD9WEvVShTaGfmcfJp46pGA65h5a36UChudKZ7chtRvd69AjXUWefh",
  "key15": "5usHvuRMFWs18b5kP1eMpgpGyphZd6Kr3jtv2gUq4GBEySxrmq1PJTJFCYZDKrmYEchcB9Dh9dZoBMpWvzVPSpzu",
  "key16": "4Ko3yJEvcUGk54QrA4oU4rFyzj8XWaU6C7c2PQXFJDxgoLThPQ2LRdKdNAGskfh7zxK6aDe9y8UV7Q2oTvDCsAGB",
  "key17": "TuGyrSvXKzDKTYGGgiFtj4gnAPj5ej2AjYaGPdLgcdf1soQ7jiUTvZTC23QCuXC2VbXhfxQrvFkhxAskjSZ4dPy",
  "key18": "4jr6QXECMCM6JC7MFsPd84BFWbycCHHh9HaYcimDbTTtXgLfvLts1KGFCypivCtMZjFyJmo3JDUKzhE2Wz48DEmN",
  "key19": "27nJdno5ZAMLCtEJR27u3dP1VDTMYj2x5Kd8rfjhTPfbSCeyrY6vXTxiGzGWNxwk3q574av1aPPuWSHz3AFwqWRW",
  "key20": "37JEUFNen68NZ8SY5iymkvaQ94AXzBDJKfwAMwBQdPECiVuMCfJZ6kWhjNC6Umjo9q9Go9ugXe8GVV7eTRvoABp6",
  "key21": "2CfSeDCQWvq9S54v6vtckRuvBr3QtdPrbvzxmnya5snU2MByBef8Fkg4tiixoV8r62RuVLnXrTwZZfNBhjjZjAgf",
  "key22": "5HacYmqCcjiMUumQrDhdHzgonrhjVarGx8amKBLrmg2ZBY4kAoMdWYL2vzCymsv22DHRXc3VZFV13evvECJd1R1k",
  "key23": "3Zr1u9J4h7Fhw9eDXaFLZou3GFaiTYdtrZuu1TjsLsZMHhLfhRSuQ9rSmmnhxZVgsTmBNRT3dmxiwV4eAx6PjBKg",
  "key24": "4Xe32rYAE4PcqtAndM4ytatFzBAUWKYRZv4Jv5RuuYFK9jqdfx5VvAtNnbo9vbpyvSwoELnr89yQsiknVBHAvHjd",
  "key25": "4DCEvbMsFJiAzbjyWW7y3uCqXUhds1huahcvXV3Tf4me9UanohxBqpVVK7S7hK4D9sca3bXFqFTHKJwTyW5iuzXD",
  "key26": "4xHyqipCEBXm2xWGAVnmWMCQhzk7WnZjSmDG4uy8kbFyiJ9dhSKRzFC4BuwUrRz563fjADUTHwaTg2DuwFcVo5gZ",
  "key27": "2hvxgwtRAbtZSh2CSeYtucPUTUofzFPR6oT4Va4zjWDcWwEw2fFzqdnH9gDGuK7MbvNGU3HBnTmDixvZ8Y3KUqhK",
  "key28": "5RgyCJkpZHNW9TXqewQdy9B8f9b2dxa5iw5mG2sWSvyzQyRaczCPCgEytDyW5hYGUee84xVaeC7NoCVMMgMkf3is",
  "key29": "2H9LBf6EPjL8dG7H8WmUvPKKjJJ77GsmnfRcpop9MmZeoD9uPS9USXr5CkETjpHpYDjn169JcPYcYBLNqecyQmwU",
  "key30": "4vKj2PXL8VBX6b4wW9K3MrasSZBuQADptNLSwJDzGhDiX3bBiAcemPxvFA3mK8CrftK7yr2xf1BUBf9eqEovjYGE",
  "key31": "Jfk24aeBoG1GKTP3YurJ3P1HkQk7NZcTwy1bXN1kZJEgnzAf61toFqZFbk97xhHaufdubMWyNSy1GK6aTbkh5Jo",
  "key32": "2apwEZX5ArQvWBUkSfUxe6ZhvdgBQRdGD7HXLQB5xRYMCyhHGF6Z611yBpbhTVQDXKfeHA46eKiyT7QsVn7JEaUu",
  "key33": "48Dmdg4gZWVktBw5xcNRCvyiKovW9Hes3rHcnE1Bq9MVdeWRALuKTBxv1KafHRvs3KGauDji4mcNMcNBPTnKU6qx",
  "key34": "5QoNszNrrbuHrUmwDAFeMzAzsQfiziyUepo2BqVvJZzJFyQgmKsvRhHSZjT8L26p6hdAPxTNrWGAMGSMWNEDhxZX",
  "key35": "2zeqLf4ovAtrh6j4X7HFV37PJsbxTCBYAFVEYPzvBe5QBGkSv6UV2b3f8W46eAZBe2kmbVLgTPLtc4ye8jo1pcpE",
  "key36": "4qbr6matXCwP8mvyUdsKnk7vVs4kubrmqZfP757iDFAgjjf8r19CctcLbzg7Rg9HDKWEvVu7v6KSR3xq9JsaQu3H",
  "key37": "h8kxTGFUQ2YmV9JRqVDnBSJFEzXVf9Vqr5X7Z5bt4EXjGHWQiefnb7exGC4PQjFDfRvxVy9c62pu4Mbfoz8z9s5",
  "key38": "4XHcT8hsm2gPxrS4CjcVtSJ7QmqxsJbtpKZczCcMmayk5bKpw2cJF5oRJofNejo16Vk4qbrw4nkgaErrbSpBWM1J",
  "key39": "5TX1naooH9Bzk1UiyRbnQKGKeut3xXVRygAHfeDVpJgcefgT14oFJKHxUMf6juiPTphdWJqgusewr32gzfS5s5uo",
  "key40": "sgcxERdXPdFhrKNnfwALiHEmBVMGZUe5QHos9T39GmJBWoZA7EdcKMQWBb4XihdYk2esKqL2fNeWVPXGZ1cynsh",
  "key41": "2Lxsgk6Ga6YT8CHU5KqgnfufkTryM82fYZJWUpHboT7JfMdaf937VVuZ3SbkEqTUMamxprRPqrZCanAUnq4YejLr",
  "key42": "5p4A9BdsfXeKAWGfWmnjWt2FyrjfAwTD9JoweoS4zVMyRWovsfs6uK2MR81PtKWQwBNUq6rBRzMKCASKY58Th5Lw",
  "key43": "5pYRLLxhdpvbJeidJcuh4Ev9iqGFPnM8MNR9f8usCoFhkx6sBtMEeYE4aWHK4M8oFV6YV1nriyxZUFVmcc8MMmDu",
  "key44": "sfUGmhRvXQHsPYsLP4YEwxEzy2hw9M2Ywhf19Fnr62VQWdjQ8x8xywxrv33QFdejEMAFQYie1JXe2RLR3VjXFBh",
  "key45": "2oqisrj1rNVYW1M8R7sREwAPBjEL6Pwm7mo3Yme1ZS1A5LiLfdBJAGWTidsRsPHPB2pDsBamaF6AdzifUuUdpYf5",
  "key46": "666XnztXxZn2qegpy8R1FbqweBRivf33xXEn1VjUJrvGnzmgKVAq3NqhdaJKWeLALZmQNZTwrN9rAzSZHGFWoLCH",
  "key47": "3HVyYV5Zbat5SaTmZ9YLmBDT7tkTZWnPrmei3b2VVkUVNq1nqCWy7S8UvpWqSB4eQmUcMh2831zM7Ns53K1FCjfJ"
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
