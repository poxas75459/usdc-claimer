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
    "fDNhBvNqqWrNgii5kDxsiqCAf5dx4ycMcZA5QnbndiwqVmCUMDtP9qpyjwLhWQ4YxAtbQBVLRE1sgXrm2KaTLyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5oMCPEpKvsKcpa38ZXDW1ENfXH2ZsZAqE1CciTZ7Q2werbnFjpygacWbteLUQWRGwKRQr14oNHvWhDic14ZtDL",
  "key1": "i2k9u1eppFFCAaBfxcENVNSSmrgTnCfjeJWfDLDfzkmAtrpDNxpjBGVXJsqXH7kri6Bajpx2sx5buQ1wa2dPp3Q",
  "key2": "47MHXcH9yhZ2RJeJVoJNn7ztXzH3DVNQrMhJ1rbTn41TNQXV9QHfAZfz4cHDhuFUVawgAdwu3MmxZfqWQThLDm6Z",
  "key3": "2eKgQN4tsgMTdCX2wXppFx46fj1AWxA37MxWdxeiKwAAVq1WtuUSX9yiM6H5h2UeCy9W7g8E2x4JsHv4M4QURdPP",
  "key4": "3uCKv42pEqjMauRHv7D1MzK2qTmJBHfWfiVbjoifAmgE3oBMC2EkWMuTUVpdyo7WMGe3YUFvWJQg9NrBTnzvGtVA",
  "key5": "2AmCLTptrbMBcKEcZXhQE8JeVncgTSNzuUQ9da1ReoThMUttwVpuzKywLN2r4ozR7KWwT1aykarE3UYiHxr9Xe3c",
  "key6": "36CdSzrbgyRSAu9SZkSXKc63MjE4XS8pJ9Bu8Hr67hNqMZBnZfSNn623hjDb94RVDWbbDnWd2WAjR8BK5gj6JBnF",
  "key7": "28VEDrpFAVwiKbm6zP3Qp2wMoiyR9KBTDZo6XgDnEGmyu8nRgKRxXHqoSie1vvi87SWDUnL6PbW38s38JAMPuBJ8",
  "key8": "2sEw2E5LiffxrUGi3CxE2S4WiVJbdd7jARBeA3K3CXuxGSbuHrFzR1ynFExHzBUBrLAgVGUwRHvkcTKksjtfVP4n",
  "key9": "5f8yTHrw1i8h6ghaKm3YxXB6gv7HS6ciRANSAAe2wphZ3pCwfoA7Sh2gmWycHFM3yCKS88UYjnPqhHCTiiJpbtu2",
  "key10": "57yncVyJ7vtJiGnKGhw8pvFKeJPBTvYiM9UZLCgsWUBLvgdNxjgFrHHqTWuosRmDbMpuwey2u3fFnVVvw4zDLuD1",
  "key11": "3N8RGh6vymbBQPhjiKMkg3cJjhmQCSvtcDyqvSKvANaVxKJyG2R1ARY7595GPwRxoAG4KEVnVEMM7FcChRE4Rc2R",
  "key12": "2SJk1TzicXErZWSVfv8dn2oESQ2D1LMBerhF85WT65LKaqaqjwe6gNB6byoGZJ2JREDm33ALzgPvdXPaNP7E6c2Z",
  "key13": "22WVzwZ3v61kwqJpAd64dzvZGjwrkv1ek37S6Eps9u8rhuA1urmcat9hfFD9HNAjkLnQ4YNrkG1dZZg94ECHDNcw",
  "key14": "5a9De6oZYGU3uQmh9jPcEKmMrTbEP64nek4YKcPNi4gfB7oACypWM2yRopU2MNiY6BetHjjUhqZbgN7McxM4Cqpj",
  "key15": "uCswG3BYXZfbwQdusHQoFjWCgjnJekRK7dcMy2d7Ev5w6NhB5kbmUhK42xq4k3HK8aMvWiy9VmvPkkKJCkJ7di5",
  "key16": "5H3xja7Sx9f87mSbyNVHtVkTZdWTLvTMLfQmw8MWonEGhra3ziY3xgivttNBS6Ryi8spwX4UATRccPT1MTCsyT6s",
  "key17": "27BixcUNjvqjRgqms1tosmnWJGFRroBbV8WKEKtiN3Vv2ocnF2yjJJSQTPyt8DetjtbqUKfBZNR5sBtCrTpTQbmS",
  "key18": "5aadyZeDQwEUutbXsT1bxBoVsh7t6pzguEcyU2GBvyVCYawiDSugsTaFFX9EzyfasrgWkcFhCGy8dzJrjWH7P8qx",
  "key19": "8zbq72JyTvWdH4LXMwgXCThmSi9U9JEYtWmu7tbJnZXvXQJHNX4YroyAyvZ7cc7f3VQWHaQZHiLuxknQ1t7qSVa",
  "key20": "4uT7Pr4hqwnosQXeq8XiRyb6q7RyViUWjBdKfkwkiv8XBrmpYUeUNgC8JsrD2UyTNEL4EP7PSur5dymCLjMKwKyr",
  "key21": "2vmXoJGuzgKtxr9gMGAXYC4TXY1uwRuFFDSmKC8J7HpmPN1sBGC1wdAyyn2RcNchYWNxGk9Xi7hm9RWaeBmPKwCY",
  "key22": "4zxmwa2fK8gS2HugSmBzRT1Phx1edjfsbxHQwPngkqRMMGo5ebLWF3tYqdRfKESx8gXXjo7GoVhC7jy2kgQXMxDk",
  "key23": "3JmZx2GrZaVVBUFX12qNsFJH3mP77vXjycuMCQhM1wxHTPn1H7dQNiSNJ8QZjZvB3LQJHLPh3FDCpzPcZGaRGWrH",
  "key24": "5uXtry5WEm9fEMg2frNj2UGVfeao7GLeiJk4b8AXUM8J1ZtSxhe42C12r1Q72EMV5jteK1kxhSV8bQARugPgQpKE",
  "key25": "5pbzJhFwxWW8MHSigQqMgp6qqdiRyQyXSEkyqPHtVTvuHWZPuX8ycWiz4zmzmcJZwR6nwPziitkeDLhV2eP3GUbU",
  "key26": "3DbXaAAP9xJtyrFMgvfYe8vvRuT11cdkMhPn4NrW2QJfQyf6D3RjoSkpPGrRS9yLphCkUDb4SidHEJUZcKBkvVSP",
  "key27": "ZcEUEN3j1MaopGX7pucfDfWR6ejeuQ1CKGRaGJB7VsuRmaJomDvXXZeBtNy66JH1CRm5mE57trtbrWKsB7jELsr",
  "key28": "2jJBG8RYTAdfXA9rC99wyYTboKbBqP6etvbzHDKZ95aKdKtiwuMAnDZzdzEKEaArSnBNqEQyyZRy5JXBVLSscEYQ",
  "key29": "2fZ8oVBLG9LP6A7ik73krrgQAE7ckk1Yjtt5Hv5kaQ5Y7XLCUwWve5sa6uNRbsv2XK3gT7i637fBRvyP23G19Lbd",
  "key30": "5XLqVxACNDzycHZZ3jjgWpvh2f4bxyXRPAXrrQabDE7UexxPL8aT4MQMzrvAm63QnpzaSq64Gzo2WUgx1yDL7fBn",
  "key31": "4K4R7A5ThhFPHbbpjGaqQXLrvRxbyzj47g1iQz4L49UUWrt7Kg1GBA5o6jdcgr7Tqra4hEYpuSZJkKrTWgkJdF1U",
  "key32": "3NVqnFquA54wH7cyUonRCJd3ZaQKugky6SM8BQeJm4AjsRT2KmL76AVkaDUhVtr3A5ZW7fprymUGEyExBXbgpZ9G",
  "key33": "5r8cyiicQyjTvCeVfrbYk8QtHAbk3QZZN2TeS4qh5mqtb6ZG5CAAQ8Kpr1r5emCpkpzeLDTWX9CKRx9HxLPzLYG",
  "key34": "4oDg8gm6ZLsLRV8M4PXFxwJCc4EZvUKvcNwgQpxFPXjhkJ1tLCDuKFqbKmgPMzYTXfwjECLa3kHtkY1jqGpxEKaV",
  "key35": "PJmUgnSXsxnnccgx6MpMHTPRHuGeK8CFR9e6QG3K1ej6Cuu23Jvkrthazpmg1euj6tCa4sonhdKMyprDpoKWQ1C",
  "key36": "85YAjHTqDi47K9cd2b2XJdNHMU5XKYdKwoh2okxbmSa4V3C4REyUGnnY6hnh5TnjdUGXgzda9VpQK3wFxkgwoWY",
  "key37": "ReLrCBdbNQTx7GXtQTqYDb1nomAduboFxL5G1rUycRFWXysLtEung2B9tuLvmj57Ahjn9aDwcsY9KvdnggXQaog",
  "key38": "5ULNxUT2z6Sa9VuuR8qzwK8KZ3etC7b225TQUqr9cLq3XwYB3KbaXtnNd3UJ8r3arJdFFX1UZ7ScomDT8oKMi4QY",
  "key39": "441ac8VMhYaNKr5hXnZ25MHV2qk7kWg3iwPfQ33tNVDyo5ohxAyhi1xhJ3WzUboYe7PKgS55Go5GU7zfVYWHUq6e"
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
