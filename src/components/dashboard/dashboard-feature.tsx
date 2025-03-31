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
    "S6shaE8UaNsEXGMcSztXkLoaCvzgCBebVkNUCyckax7rA9V4opSswbdaXJGxMC7Ed2SHwsVZJja3n5J7x3d62xH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XrP7pjTeEPcpcx3s9V9k8g7meuvXkQRpQC2dn96SHUegqUWPCVjNhoPjWLgtkPUwAFPRrxkJEU38ax3GgQvWGeR",
  "key1": "3BxHf4d9fZkqfA9tKLqAoaQYGyAymzLocyYYC3eMSD9VtzDAnctgZaGzWJE8zArxgrjQzifkFFrhRsbFfThhgBX6",
  "key2": "2MQL1Wqg21fMTdmGUtotSV793iVBdFzZxuK1H93j35TnzjqrzAkgWwkipR3xwbAAMQLDso9smnYeyB9Z1znWdbW9",
  "key3": "5Jtt9KTFbpQQ83aJKMJk5JnQCYncnV22L91Hv3tjavZxJQz5vH43tvX1R33UxPGZxVDQdM8sYzwdCYydwMMqfEQv",
  "key4": "184jZR6SuEt4yjQEomKhejXYPdAvAJKAW7NRJQK1c38pHRXoCe2TnPk4YHwfrjv15bZX2znQbyGWMCLgJesKPLx",
  "key5": "4qgpmx3S7fg1kayiTLP2mvhj7hf5PEDy83hbaVJ5f6hpTcQGAYzw26kNbosf9MTwTffM2szMDf16pXvNzXsmpg6T",
  "key6": "54gJTngCe7Mg5XRJLhogQrraYkvMauMkiK3W7rwPFouxTVRDm19zdZ3ckzivTXgcKrZvAup693eWsMvoKLNMqRUq",
  "key7": "5u6MoEmJsApoc5KAji1Ttq7fD3twK7uuh7LNaTbXzYDhKUUFBZg29oMDQGbWsaKDqiVvHmskHti17E5FjRTHwDxQ",
  "key8": "4gmJftggD6xXrvDFNXsjxNN8WXJD4nwV2tAmyX8M4X7TUTGHmEJYHkXqE5YARZzRpTt9gHE8jSnGLZkdNDn57fnR",
  "key9": "3Dp4cbcQdy2TNjWC5E6sMzK5iVxmCJPXHhAHuKAT4wtmZyToozMwQjUFkBproahxLY2dwcGJGtw4NAxGFEAwDg6i",
  "key10": "48q2metCbpoZWhonJaDaVghBpBLwgtffQsjbWhAYaJNDFnPYnpvzsh6zooymAmswCrNCUtwUFWvrrtsXahFvwnDk",
  "key11": "5L91BdSaqaDWrTPu11QiH7P6bvZgR8QLVWQzaSxTYF4kbgQzHw3rLWjxddhxcBLg59jcbgiiD2d1YKzGnAGU1ERF",
  "key12": "3xVoLRwN4dN3vKRuLv8ZaerkeEu6onh1PVRGTWY1gGbscgJ2rVShaA2uzyRkNdnpfupWxphCQoNeV8Kr41cTdZ1",
  "key13": "3gXNxrYNy6hciopmkkMJxQAXpGTrdAmGfDH1NJPQpsNoYYsCYLndz2JujEfVnRQYG8ciJyaMCsASexWiXKrtmbo6",
  "key14": "yReYeLEdFkpD9KRU69WAuJ9SPWVzSc2j77qCsPyzp5gS8dFuayqPsWBa9u1SEprRMhjxHDKLuJGrA6dZBsauctL",
  "key15": "65kotxJDPFFf1bJ1ibPYwMRjcygZGZobxSpKJhiYxf9PkCfswE92rXzz52cXdHKiRT3ro6B6YjrhWyTKzzbg6ASg",
  "key16": "5DstqWWPVMXTEQ6H2bpBEeiWan65bNprQ6z7yZonBM5EnMdDqyGqHiprrTHjSZ55RerG2xYwifLrvBxfHb8urMku",
  "key17": "kXzaQrkQhmWVnuyC7aynV5beY2p1sSosiiB8TP1zkUdH91WAbQrYYWo6mNK1wSZD7UqWHtspH1ifcukgB4dpWL4",
  "key18": "2krDp9Un7RzimeUD9izXrRKeg5aWyq1SeBxn1Gy9ti2Ypp76gS4TpFbBzbViHFUygmPh4B2AY2qmX3SzedvgcRjQ",
  "key19": "5uipxz55CvoLsgNYwWXhBunCVZbf1DgXQQJekzVr7RJ5CC16RLXx1M5nFYyV1tUshCyxcfLvc23JzgT23f7osZeG",
  "key20": "5juMx2AgMYxpezvy6LxwG3CN3SSYnzPCzpyMmoYWL4iJctGARkvZZAbLuA6Y2qQSVu7x2XEZQauPf2BEWMtTqUVT",
  "key21": "5Rxjk1TKfVHdKj1n9YnqqEsGMBDU5PEwNGRda77UxXkuBidPR5wk7rgUDfgVgqmRqoz8Xxti9o9RSqDLUS3TWzjM",
  "key22": "5rLiG6T7GkJyzgxbSAuWury22KK2QdWyFYUC72LkyzTZCmmeNjHfSiV7RbgpQBgpVvhcKK3bUhcxStZrmAcrFTwi",
  "key23": "5VaqUhNEcrwUcheo8VNE79qcxgdruLYDxHxfg9sJqLDEATVeDFMoWscnFJFskUrZJgmsdTmoAArpcLkT7tbyhGkw",
  "key24": "5HxJhwLZFAmSuyZ5Nc5paECXFjDCG1J4SuvT9vdxWbJSrEtngwdyxoM1C2zQKtjeKUQKVt4E8yEHPzurVWxd5Y6g",
  "key25": "2fSoyxEbXiuRfFxJc9cReysiXS5tCpQr87qstRfygVdpzsF4Aw7yE8PukcCYjfSjYnbC9tLNLytsWHLUsA9Wn4JR",
  "key26": "3HrGhrDaqMUe1w53hb7NDRJGSF1YhHKRnRebeiPvE7nUjJ489BHPMP1MqpPb4sLniK25s4BWw3NmvEenqpHcQMTP",
  "key27": "4JX7Mw7GeAyPHSA2baPWbdqRzgRUhxALXUB16dsL7JzBSfg3AVUMsdZMB4KtYTWPLh8MsaD7UQxrd8ffxoSdQJeK",
  "key28": "4YmgbPWFPdadst1rxFRZhjJmACY1kn7X7FiseQ45sPdsSQUq1Sj46pRzsohzZfxxHziTVvoeHLo26aNhYc2ZsRxd",
  "key29": "LFwKyh9zZ1pJTeZCYCEd7bdn3wGVCsRfDN6VQuPt9NVQCnEJoCt91t4NWvjNnfwXdV7Czoumx1KBVBwk12BCV4z",
  "key30": "5otZapmucH4Mm9mAsL8xq9f2yLd55MC51GqNLmJpi4shRtGLNSCMD1H73CsUCWk4uK6dgKuDYuxCCTPgCFNcHrRv",
  "key31": "53fcPm33QcPvDTCaXJAGhFZBWgCamRXqP6ZKSfAsjdq8MNLm1t33aJC8NJ6doWJAv9QAZ4YN83qQ1mpv2Y2akZi8",
  "key32": "59SUco614HhijcDfmHRGKSMrMsugSbbWnBNHk2PpMBPhnkJo1BZ4AE2Yu1x4BaQirZETSoLbwbLXQTYF5DgfhMm2",
  "key33": "PoyLGDub6t1uyBUMuHnUaPiXFKnNU9DXPagjbWpVBD8SetTAir8fphxhvA5RmjJ2tiWaTLkWzX5S6ek8UWsFNMn",
  "key34": "4vbMy9McueXhjvSz5K24P5dV1pRendQFyfxHeyW7NXzS9TazUKWKg6Zx5LS2G8wPMBepSt17ffHJa4SYwdWTHsAq",
  "key35": "2tAoybG5ibSRHMXit4a9QuA7D57Ekkyz3BJLqXLsWbArbJsS8JbVsLTsHjaTAfM1B8RG8dqYQsx4UYKk7teSi2BF",
  "key36": "4jrdQYpPXoEF4xWrT2A7xeuxW9NE2NssU7kts1tinYysGh15iEuQ9kLYzLrrpPcjCiBAec6Ms1jpYkfjktQq2kaL",
  "key37": "2KRNXtLd9xko3pxnuRZ1mryoSM652ZBoEHvCkw39h7aYpZhLYKntGfPNNxNh5Jo9NAqR96QMpa53irhtVnhbnDdL",
  "key38": "EW1GP7qpWVK2bBuxrvdVAC1j9CGGpqX8HGdwigiHY2pLA6MdsWkNQ5RhYTK9aW2qqXkqvBxV9JQEWzFbc7G2LVk",
  "key39": "3pPXnf61tLZXRdsUk7CCcfg35GLYsjjQjh8KUzBWj1V3mUutzy6XcWczfYTbJToisNM9JaB8tSmJ4T7fkXSfPZqs",
  "key40": "4DzFw1rFukVBPcfFcekKA2N6FfM2nsNX5F5AjLjYfDiW4MsufsG53dMcsh4sbiw5eu2K5X288CDFGVWxxc1egYBu",
  "key41": "2guzGhy4C9hZt9aojd8inDJBgiYR6hN2bcf1zhhgyUEqfyKrkak4R98wyHVQpU3Wy2AzFh4EB5cU7NHJtutobYPV",
  "key42": "3CHJN7Es6NTFMwfjZnGX3YZpC3VUJs18YyVb7f1rFnaiF2RSFJcgREyxSDeWhVk9AYNgQE4wCBT7fU5URrpfQmNv",
  "key43": "5SghE4FeefxP88VR3scPXZQtBUwXXA4q9m6jZuurCBRj55h9afQ6FyWj3vfYbkQX1vhXYPFvkXafY55fRgJC7raY",
  "key44": "2Puj1ezMRFwTobjxu7K2kbgKNR2kvJ9o1SbLH9AZ6TFihUcRcR4kD2v85p7twKRd3yErdyaQRPta3V1Xq6obCNSu",
  "key45": "Sz4KHbCXjgoKwNpRfzPkqfdj39dWGybfVg1VR2xLW4YcCbL7q9MsivgdHa5GKgtMXXtJVJQMTJwHTEDan5tsohW",
  "key46": "4VErLxR2TbuTZBbtbMPfrNZ99pK88mtcoYx6ut5jX2YQhdZcHnB7Xfu5M1Zd7per6ABtjnqfPR43cNzNfj93Ps9u"
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
