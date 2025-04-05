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
    "25Yeq1sACkzLQTQh9ycsSo1BwG3vDWi5tVcsNMCSkFUDagTxtuhimVhJ4cSHSyzmbaPTsH4KT7kFKuD7PQzY3yBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JC1pkpeAZYA1HkAJAHaczc4f6L5PAXt8rWZqbgZd1v9F21rSj2cfNMottBFWiKBVhoAHK2Tq1tG4Fgm5Q5dAYEN",
  "key1": "3DsiPPKhPLVDtsVBzH7sMaAKVmr3DpdwygWCgLt727xEqwtXvs5cG9NdeJSXNXFqdTE87FVBACxVkkgafNZA4cQS",
  "key2": "5YNg7Co35S8tFZ4EzaNcaBmT1dnWrqDsmoGSynkdFCr2n4rgYdGYDLKz4ZzZbNmjktGJzmm7UWHouP4KZHhQkwct",
  "key3": "45YafUFVu4qGrs34QRZwNuFHMEupifp1G92XHeyCekG2ZmgtuqNSMuY6SpjWWjQ9X7Mgfc4irFaKrBQs81wgQAdv",
  "key4": "3LKPS2UAvLwFzqKACcqLVfcnEvdfZmkTQF5DScF4cUuqsSxaLqqRmYzMLjh7WJiK522cD24uXMbkngaZqhsMHBnb",
  "key5": "5zUqPWkbPFdEJET1bBLpeE9BUJUY8mn18yeaCFvid7w9T6jbGpmgxjBk4WasFJAuR3rhgAc48Kcg47HcNtVw1Vri",
  "key6": "3bgV7E5zsqFobn9wqT57ZWYT5sZpkgT4nWzxzHDDyiwELgzfcTb6zxufjNxB3AN71jRurs3gDz7d2hko6RbqUwZQ",
  "key7": "3gc87ATs8yngHTEjprUKtg93g7gKs6yjFk5KD5mJdVfgCxWXsYMzfKmYD3qXFHsxpcfNx2Jc6P4tDnebHbrzAhJq",
  "key8": "2zacDv3x7JeSk47EUrDxb6yZYrS8V5qBZuEX16TErLFoKrusMXmwZboS6hpLejhKnHvH8gKuiQ3PxcNwQodBnySU",
  "key9": "48yVyHhZq3wMR8fciCR2QrCMYV9CgZAGM5ciPNd8HjDH71BAov8P2aGeqm4krwX7cNQpnPcGax3KGEfi7RE8ixk3",
  "key10": "3AQRHxxXDWue8JTHg1D9fWV8C25bASFiY1CW7Fi8C4GTDQB7xZmZ8xfEFH1SNSo6dHf9nq2cuUk5UPSM2sLjtD1L",
  "key11": "2AcC3QfioBdFmATkHvAdrvzpTXEV75xeM3L6MhfjDsC8g9LeeMMAKj6B86NANkZsNVFLqf5ffCbG713uSVkmqvWQ",
  "key12": "4tsNLTpfF6nd75GLRrwGR5VfVMkQXAqKnuueb5K5bhNjzntYxwxvshbXkmaNY8Eeyb7FPAuS7rvpScgG5Diu4TeF",
  "key13": "5ugWu688gK33weqzus3EStY7Pp88wfLDVPSvCQgM4zNwp6J3NoHKPcKViNhVYectMWu6dHV4SGHXhM3t5VRT2ps",
  "key14": "2iUM1qxuLRBJ2xudoJ3sKUMJqyiGa74nxiZZQTgmVvpfTeYwUnmiA3iRoCUxw4ZzfuD7n1dqjmdmi2bSpRUu978d",
  "key15": "5djC5tBmA4MjNkZomu3czsFYvaAjSoKE4Eg2uCPW3788Ev95gFta38ZYxhWowDaJfFSbvFdYrgYDTAnJXCLirF9a",
  "key16": "hWfCGwEQGXPpH3BnZSvKwmpsTnoHFHtz9zkexCYLzHGo1g96x1bGwZqWQYHGfBTuMCWmEdvuLkrX52rJa8jHkja",
  "key17": "2gpgcCJdwRaTm7Jb2AoGEMBzwyx8FUrFB1u9takVxjzV7eXAhxNMMe1SKPZDf1NmWtvPsUaQ2q2jXXGb1itLVHD6",
  "key18": "bSxDYu3ivYYwy6G6LWKYKwqz1fcwzfW4tzo5WAagQXCmx8fTmsFGwGkf6SmkWQRoTZF1ia1Wmq85rFMax3UdG7R",
  "key19": "3Z93gA9vE7ozbmzYmFnCopoCwzRPiCfXPUaAmqLRcpdYWniXw3STxhB6RBHhicMbULNP5UPaJmEKLpUj1gfxsnpk",
  "key20": "4Ya4T1rW3dSwh9CfRbSrAokJpYSUmEX4oPLLXNous8CyHjYUbFeCwP1zKimjFnPQxUAXXeU59hcmBWz7W95k4WzN",
  "key21": "BgMWnZw91wxEeAeoHLaAKK2g6ggv4pTedoSYAcau9v1UdE4LALe9iJ2ySYWxDXfjTZ415oLbzHqpbggkmkr5iMc",
  "key22": "2PucCpgrGXmXKEW5qkuN9QNerUqT8QP7P2hsyZv29XAXrnKLkCFLF7TnceFia1yQwR9VZNRPCrEVKzJFTsMpvjxD",
  "key23": "4yka9wEREUWwo3n6K3TCG1wtWpPZ2jVUZDRUjxiAVD8G5TFiaCELedTYeZyqTCg7oAqoZ3hLryC2Eejh7yu7deUy",
  "key24": "62HU6iyzw3HRQTpT5Cg4sCH2LRQyumYFDTfzf2yFaGiyuh69bqsHzJoTNf1qMixJnagcVZu2oi1g6KJmfiFTv5uB",
  "key25": "58i7zvc4XGtzsf7cGd7w5oR2TiSZmA8MN7oHL9bJkVpKfFPgMj8d5mFSYRtxyTSPphad8azASWpvUUngrgZebf3J",
  "key26": "4yhLfSFx6WezfnDYCsnrHN6Lqrmuicdg4Du3VdLuevGXyRLgSLtjjDd4PMKorAdYTHVHacJztdYy56nGwJU7NRJb",
  "key27": "4mXZ3Knagyn8MA2q9qr3dFeuLKPH2TfRfRta4xJ9oZJpkVMC1UP6TnJ51hX13QBAjGp1zVr7uzjerWrWgpUy2E7h",
  "key28": "LcrrmvYooGZzPQSvzsTTdGW3h3nWXqpT3gtxMEsYyh8J4JsbrJKQrMxxTw4xXdZxk1GopEmDvPe6hgAremS9Gqt",
  "key29": "5TaHQw3cwq5U2aYa1XpcomyjphpnxuhomWfmvcoK7wCNeHfX1j83uyL6TCSxCDzAx6dwfnYGDqmVB9XjQTPGW3aj",
  "key30": "53xop9gRyaNsdnoog3eNNuYxnUJeV33Fj7Bgvcx1uqHjh71nMWz9Q81znS1GcffY25uL1s7Pj5GZXaWxpbUYWrFu",
  "key31": "33BVDtGJ8sZgFheqeP7JfG5a1wTpfpGPRAsjtEu3A4WN67DpRNeuJGwk2XkLCrwN53fW9jYGdmjJ9jaCHqRriYYa",
  "key32": "57jVikyt2p7V5rLN4NHafKcvuGhpAMYxAUmgSS6b1D4G9wfx4VSBJnfX5PXF7Fs2Tm5gsESFSWMYaFb6UtXg1ucs",
  "key33": "5LKcQz7adXwDmeEXipnFaGSDdTRNg8CZApAisJtJmQTBjXXBXfDz9f4nE7RqKdAeCPrgPMAHH8w2Uv3fY5wxBG7d",
  "key34": "DjgD7N4N4hjSp5Gr2ZcfFw35Xu7NvaVMkbcYYMteNtgemQ2i8tZciN3Ywhpu3QZnv27CfoCndQ4at3M8kFxiL1E",
  "key35": "5GJZhpKBLrcK9JBdUjWkEQ8ou3YmNqk85HdQZdvDx6aaFrqoKA53qbmSsQ3DQVuanBrC4XKWccLQEyyiVoxoHYEK",
  "key36": "299LqM17YaEEPH2zb6hZJRW8MPCqJDgtFEZf2VQggVLBy3VMtxTojLfayBMNnQom3YL5b4ndWo2aEFY2wsTbXgf6",
  "key37": "4rRNNiibpiJEgx3AFrDWPhzH5BHmP9oZjQD2mM68bmKDSDM4Dg65tQt9D2H11ykTRu9SRTjvFhZUeCnav92XHXUd",
  "key38": "2vbCgJisFHVGdofmofUKqKv92uV8r8qZW7DW9B64wA8Q3eufbDPSmWS7xNVvwy3Csei2ymqEK4DyomfnMkhtiVBJ",
  "key39": "38HHvFHWQoaZhcRqyiSx1t5b5pJ2BDSnoSPahtwhrHhVdNe5TZHNft3R46yRJEqZibE3pMaFNEdEvUgMbgTj1NXL",
  "key40": "4WM2wtqKMqQUWVLhNH2aU6vWpE5R8o5g2RxMHEP9LAzidf73s1ZYM3SvcmXk9UsSV89ATZb8HvWaXMh3xsSMABiY",
  "key41": "2UJJS1j1qNvhcWrUuBouZQzS2yYabrmNjGVCbJPAroFz8SSJsc8NfYCwfHu4fVC3xbyz5NFjyp7PNakkCrCLgBht",
  "key42": "jviRyBuRP9wFpRX2uii4zrxWZb6Hx1ZPK5Xsk1Ymfd5nqveTznTddiRuDRWJiJqHWVdET4mzmFxjRVK2ugLFSm3",
  "key43": "4en7Uhkss8CNZYFUoZui1fbzBAMEECYZhN8AnezDTY88Ln4AHfk3G5GMiQLRcTWk931SG17xMFvgpPWbpNAuoE2r",
  "key44": "2u5H3cTJh1grNX1FDtv97uRGpsnY3NRsPPpm7KpDR5B5rMbpAjyAsaexc3HcYaX35G2dtwf37VYcuBhmxgHaPP6w",
  "key45": "55YhAWuaScLCA2QzwRuNm1uGsKpyQaaMt7yfDe2rLhCRXRCGzP4ma6cbzmDwFA9z8nKnQ7RusxW2DeqPLXewZMco",
  "key46": "G5HPBBiuxm7QApjSfw6oHD3x6wxXG69uUzmskK3o54rXNPfjoC8sKr9sr7rmKZikN549gkq86gRvboN15CrGwQ9",
  "key47": "3WSbYyxLWU11vUotRXgctwrrfFn8DKBnJHtNHZkCrQLfKFGF4D6e8r3KcfDiewFHtqtvWLmZm3ncyUZoq3NmVR1g"
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
