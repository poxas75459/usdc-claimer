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
    "67ZTfP3LjYm7GS4nr5JzuyBHPPtnY94Hr6Z93v1nbeFXS3K3yaTF6gmnQsHfarBePczebuAJHSZKqoR66Gqv7Srs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32n3LpHyDUCJUgM81p79vFCcSZfJZjwLn88gVYCd1Cnd5opVeSB3oXxDQFmcnd6L3vGdmDXXJUGYVQNEknuXQyhf",
  "key1": "2rFzBpKRrACjmfrogmjUEpNVBKSo7XyzxNj2doCEsmmVxRqPtX8fhNzw2ztKDocXyDzVWWs1x6w1ZWFFAscyZfPa",
  "key2": "DW375EG2sK13FjT4W8jjdi2H6xaG4jZxSyeU29BP2JhgW2BCzYqSYGicYjaz5sZ3bGraY55mFEFUweHeSoP8a5H",
  "key3": "4Jze7XfvVSQL8tHjGCCfp1LPQXe6hWNayDeameKDxrfFspzyxcnTHNPZUxrZMhuDMWpGmtcoPiPKBNWAqwXPTGgf",
  "key4": "GEd4ffp7kW4DtdH77sarrWVaGbL232BzD5CaexVQv76hanbF3iEv7G63daePfNkPd6JhweCBkMP5ftkRXoq7tNq",
  "key5": "3qDAoMgd5y72cqMYvpTnj4psxk1MV1Nh8y7HWf1hpBhQ8x24mSVyj13Q38Vm6WHRe3ztgrHkzXbcQLvRGufkhAA6",
  "key6": "Y6tpe7ueu2eK11WC8ZXSg5igZSRJVh9nkEGLYHWuP4tt2vvLUX96C2T25MRFf3qnG4rmuBNkTTAeDYGwPQBb667",
  "key7": "32R5LUL19JwZQZRcz818s6yRjzEVDdSp2THa8G2PrqfcP9uRCSJXtGzb5SmV823o9sXVZp1bf8Gw7gXkbB9wmb2p",
  "key8": "N3Syj7MAPmqVeTaCtPeBYXVKfZ2jEfnrwMdo4d4X6YEx5fqSZmw7ShbPoC7qGWx9W3mALDzMnfU4TeXFfRWwhq9",
  "key9": "29oGnU8BQniTLVqVxTb8iYSUXNpvDi3DDvrT1FsWKjUSkMi3v9vd3AHaBRffMTmVvktYhZuS34yMNvuPAr5a5RSP",
  "key10": "3iEYwqVN6pKDXynW5osFiznkLvuhqZ4UrXoRryhEB1X1W1Xyj66iNsPJur4Hmmgze187GnDwdm8r7n7BsecTC9L6",
  "key11": "2MZwq8EnLgGaLW7i87dq1FWBzQhksExdhqRMuxYswrvcxPJVhTm2w7UmWU4FxBoaNRswSfos9HjnQzCNNM7ePxHy",
  "key12": "2HLiknLeqUpXqYj2qvKFTCSwao9NpP56xwCz4bExxt38qmc7JpiCrKHLKx3A7x1BrsVxaQWw4CGKbrYfGTbbYPYR",
  "key13": "489P6VYXvNRZYLfc6zRW1a1TRAyemSrXbiB1aVRexfCd9cH21AxfcQeLAyoYfcjVyxNPx4Gp9PJzkTFyP2yPSrym",
  "key14": "4i4pfg1QZgKrTDtGKj96XeXRbZhyM21Kgcrs4KNpZcKx1H74MHH2RwDP58yyzpiqYD64ZE4RXSS4cvQFpYDnvczY",
  "key15": "7WTxpchrGaZs4pwxSZqyGRgfVx3m8PSM81Qd3gwkuLREKWZv8WPJLM8SkRhX85H6Nviwi3PNppPP9tY12KaYx42",
  "key16": "4KLbnBJQvLn937DUTFVL8xLTbFZPrGbMS8BXo7AEaRQhagAMNN4jveMT8hMhMLbQbi5SyrCC5QivKQjiJsT3ikg7",
  "key17": "2V5ijiZuUoSfXYruev2sA8Lu8H9kKromEb4nBwxKHTeLeRo9BtkqtHyQ1xcShxTxK9WZbXURacLuuU2GJGisjaDM",
  "key18": "4qMoVUdpZz2tcFj7NfrqKayRhKeEZcuLXbd9zfvwnjsBEpZA1Zv3NXPC76394wDrLwKwHqFLj4dUUact8W6Mo4iL",
  "key19": "2j7VqTtu7UZbc1uP5peDKmi5Xr2RJArhgjEnZZzFiuu2aWAc8seUB5PjYzoyZBmdzFAYqn3FTcMvMt9A89Qbh4pn",
  "key20": "659mLMtGVbVgSDoNVoZSFqGtZymvd1zcvKBz1UUGiAuZmN7wXrhTDD5ifUgks6SGJUnG7weoaohVMAEK46MrwM87",
  "key21": "2P34aBqRC7wJNG22odqR7WmxAGVaabLHMxZuDDvhA3DPRkq9WUkdo6CmkkfLojVS6UsQExctq1xkuKdZ9H3UiXXP",
  "key22": "4w2U4U3ZNt2wfEAC5Aw6CKjmygXjYyLKFz2Am4mHDqMzPi4aC778XHKLfAJL5NbUJHYrMmZkLvuKbcCMG6UYDX6P",
  "key23": "5oaV1cmbXpCC71943fsPpWzoHUm8jb4AGedkDbAUgZrKceyvdhF1cbqEc1Zc5fWz2DDMvv1ENzfKHL6yq2TJopD3",
  "key24": "4VGwAA5pWAobkDqL3bubWbYvcSuKPjSffUxmRszgDCb3ZaYZiBdmjUsBpQqWGghZzR8hsrrWAMFSQEiBMdiexx9c",
  "key25": "2sWBrbt45kn5NzD4yAYDwPo2yUFbKTbDzbGa6WJLuVxoTW9ArdquNNGwE99bLrXF8LkftgjTpc14Qgua7ijRTTau",
  "key26": "3ETKFLh9KpcjArit6BDVKEcwgvEMFzKLW9pm3rYHuU5Ht5oU5zc7VTgwPDafnapmh17pJ8FnF8z3TKptN9V64mMn",
  "key27": "4ZNvBPTs5sKDFKCaNesLZqycd2QRqGfgeyNpENFkuwEqbWiTspq9et3CNAFvUzu4DjYufWyS9hXbAB2zjvs2q7Q5",
  "key28": "3yyDHAq6Z2aNuM61ugqojjj3shUNgkCpPMqvPtN3gfiqsMgvpEUVgBA3B2v7gnmgvFvt8gn1SzthTUDr59Mxoo2C",
  "key29": "g7RHm7VcGQ7EinR2tcDT41Sb58CNrmR1FLeKPHKfYMcZv53DQikbeJFBpjPXzkgcrayS74YckFzoE3SgW9d8Wr7",
  "key30": "679vpo8Ki6gfYXBSEdrjueTVNS9hMr5Lt3PLhtMT4DzZq8p543xcx8FFoQKtYNnbXruMKX8Y9QpujqHctrPF4z1Y",
  "key31": "5ZcpQ6Cf5A37oAdv1CbJwZj2gb8v84RHwCF2TK3J6uEmZnGJTejyHvS4tjtwW6ZG4n7rnyfZtozpowHeZLDAMxDA",
  "key32": "X5bG3EBsycsrRJb2zPvrNFmTcDgsZKps6ippue11Rr4Ujb5gNTCSTY2ujdC4TZwQ4yUhEnX71seC615gNifbvh5",
  "key33": "43PSQgVm1XR9LGeXLp5Z1VRtfC1CZxx36H2WoFTny3oDbYx2orM2FVNAxGCXcJ24nBu3rJVGD7gWqHXqzRGxwAjK",
  "key34": "4WmSSQaaZkgHkyEezp7uD5nkUy1AbHw3TbfeG4tCzMbLg5KbWxKpscZXzDEgdKZu1m37VswTfmyf2ywTbANz3kwb",
  "key35": "5PAR6Usha9YB7K5k71dkRibDLoyJSLKH9FWmpToBMcWWxnLh9DXp6aqAvWqKy1UzxfTEJobLEwTRmBtV7VPcfRQr",
  "key36": "41DVYRVvbVAAqb3pdZuMnc9qwkKxtujzzzRW67pQS3V67WavBsWjCTdjDBiPBmuFGSb45Cuu6Cxbqy45JFj9HUAe",
  "key37": "449RdRiK8uiY2Y3nTTiTo1MfT9B4Qe9eRFNGB95FbjmzwKLj575MbaEj4jUGBJBRE6Fsh2PGb8TPxZGEWGxpysHs",
  "key38": "4ErByiY8nd81ny3fUqvEXuqYWk1wBvEN2hJ19jF9PRJhSYCERBdsJGzRBjN3wqpedUGPjEJBFW8zFUUmhBEfty8a"
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
