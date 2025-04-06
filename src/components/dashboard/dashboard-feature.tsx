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
    "5PeeH5beLkkJgyV6sU4AXBr2ER7ZWuMQb9pKzCrpRn8PXoP2Yirf8X29nrbm3rW6HmuqPApzpbepZ42ahpV28oFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yf2yaNZd5SewyUZMWLciZFC7CytoTpAdo9nBXvt8v7zMfd21PjHWkMZsMY2z8CSUhhnh6inP5y4Q9RuvX7aYnWc",
  "key1": "4S4wXSsPvkHuxRjYyNWz28sJEWy3UyAhCWejPG47i5BMHgb7bpR6PHbQBiaHndqSCKkzzSAu25QSDb9rNUoCk4zG",
  "key2": "5wxNyQJo4ty8FLPtJdmxonE8FMSkVYL8ypriG96BV7tyzRerQsdtA3RSZnSRwCEmai5pumYMPwwy4XKpo6jmVZGB",
  "key3": "5q87KWWLZxWqBX4d77wCLa5hiFxymwftPomjni57iZJpv55TKJaC5syfWbH5zfVyELv7Zo92KyAGs2sbvLwao5rj",
  "key4": "3QFWpoFviEXoSDPxRt5bA4NJ4tmsCQzyXK71pjSNfo1YobpFPGDt7BkGjsrkPXTfsopJYubAKMyRkyADsqzx58wn",
  "key5": "3N4QWyMmtpTYDhWGeew8YcfXAu8w4aV3xHTUr4QSXHRdJewtuBoALFZonAFEqXpsY8WxLKd2RwYwv1Xur41NFeBy",
  "key6": "63miXyRJ92vA46AoBVQC4Ryb3b4ghvEoaJQmCPu3mmKHXmbar3vS1G7VASPVELMc93jfFRocXh6KqNaGuKJ12es7",
  "key7": "3MUAcVbAL2upzFKzL6ka1Bf3dyjnvQt1ofQxFMS1B2NCixkotNMWicBSeH6M2xotQriVQKNd6BJuxneXCUndhnbw",
  "key8": "4r3qm8NgpKjCoZ3ddpQKGRyMT286h11cHV8UyARiop5hKFvP9tyaZ1JBjrzVmwr3e7CYANspKVyiXZopgv1Ejmdg",
  "key9": "3MxoSxStMLNvF5YwKQrVS8uJcWEjFTodCRg5pYN8hPgTbWSaEsc9VeyeZ6ut8BMMCeuuGPrQh4VZWkYUebEbvwX5",
  "key10": "3bZjWJZZmTwseEPcpxvEpnUzEUi6hu2T4mjHAJVbusJYVvhtPoHisfsnXKyabytS2q8oF6mmqnsbvNN3yvGg3MVV",
  "key11": "2kWhCcwc6s4518uDTpmxq5Dt38SFNTfhcVx4w3Y1apJweGvxyJFUHYn33GLN8SWqtrUW9UHzdfTD6hjGstpqSt2n",
  "key12": "37xd6zMRbXHfWXmepV65JtuX3fLPxKy3qmbBFQDRHy3vfvfyDsT16GDkKMfrBBE9y7epUbh5Mu3iA8MFXtMJV9gx",
  "key13": "3Ayb1nLkQRpcE4G5Jccns4SpziyZrMxKwy46L9WhbxDQrhg4mf1b55RLiZd84VsNqgsWkBjKLusWYBxhpqbDBv4v",
  "key14": "3uoUaFvz8JSHj2x7QARgKPZXhqPrUeZ63Z53uNEVYgD6m3BYsTKntQ9x76KWQoqE4uj1unwJ2MXoffRnyEd3txQm",
  "key15": "3mdV9rUW2iKcdbZo1EZSH7pgEt1SFVHx3HUXbX3Lx8aoKDg115HGBGyPyQFRKEbxe18vhXHxbP68UuBMaCTVU5G1",
  "key16": "2pefyyuV5teNRWUwsD2vS5mqNCqFWGZ2rsp1Pqmk1Xu9376TZgW84rsV2UoQBk1B63DbgDp6XF1TAy6pGpxFXTYV",
  "key17": "PwUcA9PLty6GjCa3hFYRZs3fjRkmRZxTPu3JnH15F4BgqJ2TAPR58gFhvMAnrYPz5xcqtv51DX2rzBPE3idfhJQ",
  "key18": "3BwYtQWgz98KW1jXGTP9C6bhKuNVEGVc3yXVAMQDbMwVxRMD2wgrre9EhAC2wQrCLqz6TAiDopLJxSLi1fjbxN36",
  "key19": "21w3Je2VR1uTCcG3KM29TsuyU9pjR7a4QzvNWG479XKAEHfKmK3eXjRdT1yKYHZPbXirXeg5CcSxs673LNhAz3VX",
  "key20": "2gfcysYWVe7iFHQFRzUyMorQxEKbMQos89VtawjWfasWqxA8TivMgWEh1qPjmm4UMBcYdYi1BDX8rjp4wdogHhjb",
  "key21": "5LjZxtmxp1wKCEtfv5PLYCZWT2P4qJaf2iBrVRzsssr9XmhxGxpcqw2NkuXSDLStqZQZjWk2kbJSDTRMm1RxuT3j",
  "key22": "2Y34fv1258BkmStBzz2jaesPZ8Wh1gN4Werc4F6k9aZsgxoAWQTFcjTKNQvfNM1z2553NAyWLRUySZYK2ai8zEt",
  "key23": "49NSmhHpoc8u64NDtfqkgxr89ME9mCZxKDgr58Jv8v2D2JXnKF9GwWoQjPBiscBsiGeEUFbouUiNar1SshksZr35",
  "key24": "65zf6Xr9SqhdLF9pYJpLS2FuePE5oHWqhVcjTWFjjLY5pf6u23EQdyV4PyVHB5AE2S86Z7VixgMZyhzfe2n78dL7",
  "key25": "PXrRvZJjHJpFgVWTEq5ft9VsqSKaPdgHzWMi4Jfnae41tLNeqE6uZS5qjh5yewEZE3VBs5csLidL8RE1dBLgSx8",
  "key26": "61DS7vjcJN8DYywcz4PBR4pyfLUTNtwysRDtdiuWRDn7r7ZTFvTAoCDWLZng9iG5euSZUSgKgfKa8AzikBPy7bbX",
  "key27": "2RKGgHNvb3T2gBv5vSyMjY3651JUtL7GP3mdfBKK4SriFvx8mxoCzE7EefhTRNi9AB4EhSdM567aBfLkeJKRgJ68",
  "key28": "3MdBNe5UX7iVHUQ7sn5aCWXzw1JeQ8C1gNWcV7Cy1913qMRSZPekucbN8dEQttLaAzb5xDmBGpSyND9U8jXhbh9i",
  "key29": "2QeUH8ZCXJTbbuXSppPJLPXohB1M9PCUJVifwDFJWNHa8pTsRwf6dVGgDD3j9TCVsURu14x5aGVLgqKxiTQ9ANcY",
  "key30": "doFFdD13MxZP1JGrZkv7z17FfiUVaG53X6WgzJuUuSMpc4QdVxV92jGX87wpb327MDorM5taMAxkEfJo26iEbKF",
  "key31": "5SnV84xfiFJ5PCAAZKD4pqe7jh4SaRuKf92XcvY7EZ8mAKXPSVPaSUZPyGr5Y7yvURzyciCPX7HcVJ9oxmp9hK2p",
  "key32": "2RTtULSPXKVvSccNbn9yQxGmY8hZ3gtiFkz1XWguevD8qeiGoGwySyE99ZwRv8BEEn19LAaTmFnKXzzQcPBc3k4x",
  "key33": "48SntDSKiLgq3uUJmd9ik61Mvav8t3SYHie8UUPdzbSa9TXzpSSmFnfzqkKLryw1Cynrz7MzQMhWWHKVBHGDzLRf"
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
