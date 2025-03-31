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
    "5UnKtvSQajLvfGLkRJP7AnbKamFBViUVZzz7xdSH6KVToJTbHNas3eqQBkb1ikSWwdJecNGC3CJG6jSzcYcVTsrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8hiB5eFAmDgyggcSzvLUdEqc44Z4FsCJNyQunjwaC7ARCTQYySJJfQo328mzNeAsHtUU4m5rNnxsn8e5qP8smY",
  "key1": "3PX72DzbNw3soaQXPV3mcKFpAjVRDe4FBAxC2oP6ppGoi3wBaNWHEHQh8kLRMfZbM3tXLNwawZMHx8cPAyGiusZL",
  "key2": "4Gnzgwb5fXNXG5Cxnc82KJkZyfPJbk3Y4B4CLNP17Yv2xzGzGhtyCWS44SRRYvyWxqN8fLmNWrF1YeHDM9LnbUBv",
  "key3": "4SaC4czgxPzcDL9HkLpauACcCCxENXHaUrnSbCCKwYKgh2WtdhLstnHaUV9iHVkbYb2HvJDP6jabPMCChFdjLREF",
  "key4": "3E75Yc7fEnPPcuwU5QZQDsTjA1ZAAb5xsghpFhfAXRMiKhMciYD3dkdAGoEucfGZkkemv44gKTidDW4n9mHPas4z",
  "key5": "5AfrbujpXo6trzAH7J75HHzkUFAXt9PfdkeL5hTUGWpwVVZpRmWse4tcNzQpdPubLn9C1pf69sCQ2hjcbH39aceC",
  "key6": "3xtnDyWftNsCw8zRoNf7jdT6PzXMBipxiPZWXU1WiRgXnxVyK5S8SYapjknskm4NXPcCB5Sspn31UfDHW5BYFcrV",
  "key7": "3ivBhywz38x85L285G7gCD6GrCYBYkjWuMGfiZeRLZDqWhEdwYVy6UanJjXrYyjcQgdWqg7DM4roiTcBJN2XMpz4",
  "key8": "2Ezjw9gqrLXonbhSckDG8dQiG7t227yV93e3oyYJ3u381SRNK94uAY6GbwXJPi7NeYAoLQUXMNFffFTzLFH8vLyN",
  "key9": "TgrJtHZv4xe2geYkkbzCBCiAmZjSnZpvmy4ESGtse147YS6oSHV9zB5zjSzc1FQF6i8Fk1K44Rjmrj1noCXief7",
  "key10": "3YJMAdFDKiqPkiwWZrPDC7hKP5ERe8aHbKm2cM7Pz5vSVhKodUUftNmDbbaGAmz66wKtkn1mwmPEhZVhwAXQacWf",
  "key11": "3hqg4pZioBciPUtFaCHR5Dreh5ecT3fyws4bQo84En3ieW12rzo9dBrJAvnxRB2qqUVeNPP2txoiTEPPdPgiFyjJ",
  "key12": "vAASkytmSVvHVnj4wKtpHWdpHAB2SnCB66jhB9fbAJeF63Wi23o45121iCLWX9udyCVWvH8hFK6SdwJWLeY4QY4",
  "key13": "4YJTrhe8u8ZCs3aRQLDTYv4TUuy1Ce8vCzyutGxuU6zL8gqYgQrsmLs7PsXHkdGXDxiTrLEyejHqLU8mKG4Tq68a",
  "key14": "dZXZ19YwRiEHVkrgGiQUuJgw388fC7StrDqPab1dE3Vuz6mQxAm5y27X2zbVnsZ9227EpFgCUc7ftGaQKKMkW9z",
  "key15": "2Khbtn6GvTV3knHSBnSrKtg4gDYY2vrcA382aUuam5428Rs8Smmr7sLrGg7QqW85ANL1ANPGU5y389bEYqZCNCpH",
  "key16": "2HkTw4A8hiZBEi361kU5z3aeLySHeThG6ZinqtB5ePVmVUAYz9Ln8NyYqY5iYZcE4w1r1EvLVsn1h31AVwjJmFyo",
  "key17": "3pHPg4A3uuhS6a3xw13hGR7ckPLz9gTmgUzd2FwMdEycSeombJsJDnk1AFhqEaBfiH5ujEGiKUCaXR513A9TMsBo",
  "key18": "LpEwSC9pVixUNYAXovLUAr7sHE9G2Cx1EhoeFnN4CzM6NfrqffPKGeTHCjPH1qj14o6q3xs58k9X68iBPrrkP5Z",
  "key19": "54xZ7q2ZSe6243t1XtDbo9n7oNnNxoTP7k2UG9NQeiEEbaumQFdvXEfw1fRKgMU3c2BubcnTywSwogGz2BwfxgBZ",
  "key20": "4WEYPJkPwNqfViJEy2DteT5MnEcmPEgRTKCBaRufh352Fs5CigNGKZeWqWdKAe383ckVUikE2SmpoQLfkJVFtBDe",
  "key21": "33wh1RtUgeG2K5qXhhjvnCUoy2754R24epo6aWqoCeT5HWqBeHjyyWSj1KNGEZQxmuFwfkWskBtNYrU9g1cvh2oA",
  "key22": "43n2hGAXFsZwYW4sPWXUmQwyQcUnFScY2RPb2xHgGTSAG1aP76vBG77ECFs9kSsNeKRNvhkVEMp6uAuVp1gn7jDF",
  "key23": "28AeQ31QntcmXVrMExVetfVJ4MikuCk2dCFkRWTusxqxMYymVFSUFgWNiNxRifaSsf6oSyACoZZHd5s86Kpykk7t",
  "key24": "y8mAa9HWAUiZLACsKCNatoy5orUEn2dD2YcNaVb3Gs9iTpsEueriXN3qM68Wg3NGJYcPmmeg6WHZjkMy3Emt6cC",
  "key25": "3pFfwzLECCJ829hRQ7jUtRE745k3qaaMwX2VzXXQhJ1bPpUYazSbSH2y9TfTkxxtEBjo9o6YWbSSwf99tr2Q9ove",
  "key26": "2uFqK878MN6b5J968gkQRUruh9mLVzxaC4Fi5UdJrBfMRDjhz49rH9GFCwGdeVTNwBrbxpvPKML2mBkxexn4f9VJ",
  "key27": "4QhaNZLMtMUYxzdoc8QbV6U24gtYtuo6dNJXabWsNV8F5NkGdp7k2TS64s3nMgEJyk5zA8Ptb4Ys83vjTo1osWgY",
  "key28": "5VZtsQkWAet45PLifDRFwN6b6NAXB4u4g1iZpi7nHNzmFB7dPxbkeox4hCavzXxtmiGQGGsKQDrD7BsxNG8jXxxb",
  "key29": "4HfThLWWnhxsKZtQhKGcScaTjETs84Bs2mNmZMCHDLReECDNAvDARYWj4XqcYHhZAFb1r4nhNd1RZ9yrByvJHfCs",
  "key30": "5DTosJAQkJbvyZwp7NPkRSmt4VhAbhQvKrhvcMPCaRy5VRuqhxW2pD8S5dYB7SCdgyuufbX4muiVjs3fp8ivx5mx",
  "key31": "2SphjGeU4k5uNduCRr5HEzwViHrm7MKPESfckwtfGG1eHHmb6GZp9XLLkySHza8wA4KofJMAdvYkur2gqWArcTXe",
  "key32": "vtA7aexrgdPfA4MmFXBbSr7eDQMj8sqaPRue3tfHZyj5F2wm2Py16qrJWoFCcs3Cx8uTTU78frdRqfHZ8EU4i6M",
  "key33": "4nGtpi55f11vxV5Sogna8GGdbEbCKqN6E6F59CSKpcKdQnV96rgMo3twPAUVgtTnBeh33EJ3347F8A4EKkx362xP",
  "key34": "5tMJDPcPWkVZNTwtfYwkfrVvDf8rBVkr6Zq6z1TqdVMgoBJ2gPtDQ93XdxrFHQsgWSUGvm2pREp3D2wpkZDbQ4bA",
  "key35": "47rhgnh27zz4Vxmwra1ZYDL8NvYJefJW3NFQ4aQSeDKxB4z8KQvv67GjVv5WCwiiz6SuLr1iEqAjwvrdwDn8TYWM",
  "key36": "4GbuNZSwD1Y4TUoFTuszfqgDoAXoYHbD98xn9QZfS9zjh5fxmMXsqsVk6ELxwHhp2sLZ43gLuXb3TpVxDjgeQzvC",
  "key37": "5sjAoV578RTsmSgFQDPmwc32nFnEBR3Bq7fthwpjwUJJHrvFiX2a7DbPq4SVN43kMnevcCfEpjnjPs4cTpeVrkvj",
  "key38": "3tbXUMPVkJWJVSbpz2DV9455dCJynnvnPk8QQp8ekYB4HPLvXNNRY6zBdFze2ytZnW2HBMJRgTZnd87ZdySp6HCV",
  "key39": "rLK5YMJdDm3CLuab43Cm93dUpNqV4dJ9F2NPQ2c86NprCyRqPYaCBmSqBiHyiXWMrUX47zLmbed7Ge9os1oYQje",
  "key40": "63QeoMDkVoAUACbQTUYUpX7pFizpHQ35KKVWEcPTQXUKbw97MtWGAoE6ua5fqcnMmfc4ZXADatm8gv8yEkN9wXEH",
  "key41": "5hiCZUCwbeSQm1Kv9RY8YkkvTUEJNFWvr4toR6peViUMkoKgMBT9tx8LeVv9cabPC9297ckGfUXuN7k4vaWQSnin",
  "key42": "3ihvjHrmnLEQHLpq99HqoTDZcSwtQmqeqfMk1CPbRTBvbBxN9q63k9ajUeWyKzSCu4r9ncaEWVEVDQFYqhPTXft1",
  "key43": "39Ut8NdvRVyNN89A5tu7THv6X1Bez5MnV9CyoaK48otQWj44ZJFNC94iij6AHTFsQo4kKvPLF12LGfK91MXxTS3Q",
  "key44": "5FPRYEMJzgjkhput8hEibNoh89ftvRYDwuHD5Ue8TkN4VypZdPNUcvctgnm6kwnEXiTQiQDaPW8bhVXh8BJKxXAx",
  "key45": "5ktFPbreVsJP4qaj71yu1vFGN3ew3z1vt2L7KirHZEQ1a3Aw5hUrGn7b1gfffYhJadZREwv6gw4wUA7sj9ugNYr",
  "key46": "3iPBRJn6abkNckXZhsZkqX3sdWWAKyW4btmz9Cy1srrmJ9fZtGX5bpGYogRDaTkmhgTSM1xBT5511Z7rvFgW9vaF"
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
