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
    "2JfxwnGFHNDywHojw1C9jwRWvpKiTGA28ukfPjtNy7XPFZntH3DrAwV1xd36jCAj5xayyoApaQiEkTvLzEEEaMEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BzuudUV4HZcbZEfJ3oxRNfJqJ596xHSvTma7DtnK5xU3xbByokNkVZb7DkJbr28WPWb6vn7PWN6BSFKSBY3wbSN",
  "key1": "5HE54BELoA4Gn5dc36utEhRS5uCqda4tZYAKBsXNboxF1jtGwNE5RUZgM4GfzcvdDVHyGkqCqa5BRLR7sc6UFdrE",
  "key2": "aSyedq7GYsdJ6qDTZt6zcrgQJWx3saTmn3tbE8qUzMoeJU6WiMVmLu7tWCdSoon4Gz3EfrVZSeSZsDBAWd9Mmzj",
  "key3": "64oiNuA25dx2uFZYVCF9SHCcaU9VfR3oDfBHsMfw2ZLGhwhyrqzpCRHP31mHpDakTbda5sDEHsfHGQoh75hgCV9V",
  "key4": "gDGeyHVMHmxgrSzt4jgNQic98bhD9EUQ7p7sQ3ScEvjoAh69PYKYZMe3KK1UjgFd2L71tco3TqSYECkjS2edY29",
  "key5": "4WDHhWy8XKRnzoHs4MasB7ZfELdmUZDafUx9597Lu9q3BDNst2CoGiAiH9VUX3KCBQeipiFTTkVqVKW9UxokkGJy",
  "key6": "57a5zWdXFicZkhj79DHR8X98h1enw7QfBCytqdDJAc2xfjuBpbRy3ubEcDxtkNsTUvRGfKaKRD743VkW9kkADdin",
  "key7": "iTdf2hbRVYExdksjekKJejd3gNLNMasXjBuSB1zhUb2oqKsSCet4ruKvDMLkvj59G7Fv67E7qtXMiSAwAUXHApo",
  "key8": "5pucbmwjPBqAwdZQ3tWDn7mKzmmLt8n6FNe72qeyjd1gGYJoDnveWsn2JiYgmy4i3Mec22S3XEbENKxybG5nk6nk",
  "key9": "y2TKPQvFxMtnDX4r8emZ9cpkzjBKAEcDJwLwJhSQYGi21N15RWnTGUgXHWfcAcP6n4sxcTY428r72pHo1GXS86w",
  "key10": "2H8hJRmPDuxVDySGW1GQJJVPw7or1nWuBzHYB1fR95bZGXyYNVkvLY65oVsRLwvtFiyzoBTpz4LyUWQTjzf8rUmF",
  "key11": "2bc5yuLWBshCyDtBqFAM4oXGuE7MT7RCvgJHasPKQ9jRQkWDTUSFdtFZgFD4qMiwh8uF4Jr9PKoqJKoXJ2zzmEYk",
  "key12": "32wMJsVeX1n4WruUCuEKvYbBTho7MHK2hWg2QTmg4nieLFjEnbwQnMPNBaPbGRCVFTfPeb8FbTYJJEXam8UR8FWj",
  "key13": "5kBAwNZmFWHJaVr3bPxSahcfLdMdbCa1QxoPoteFEzXHpg2rqFxdCyypUahHxaEZq6ranhhet3tDyvmhPpEQbfsJ",
  "key14": "oRaohKZZqAFvYHoeQNhTuvPR6VtPVBXvaJXUJ9MsahNkKpygTd29pyE11c8car6jXDtPPmX6zpUhSPZftBtyxov",
  "key15": "2r6x2uCHzTV7pm7zD9kQkgvPCdiJvhStiae5FPqWGSsBmZpcVBqi9ChsA1eiTGbEkGNRffM3TphrdpPtn15qooz6",
  "key16": "5cyw2UJMs9VEmS459dMJym9iDfdK95jrEBCNCRhoUpeptoCdJFzLB3NRerRs4NWq5QghJTgJAHBGE1DzsakXhk4v",
  "key17": "5DsfT2ftPKUybMUyiHhLFrEybNwSfcLetkH38f16mEj1LZj9SFLS3bqY7mQre5dMWmem3oD24bESMBhJYTyJq8NJ",
  "key18": "4GpbMBvXjPwgWnAcYJu4LDH6u9azswn581jfMnMoNoE3daZunafCJmJSEXQYxamTAXsxUp5uTf3eufpPhepNedRN",
  "key19": "4fpHFDTNtRfYHVFLZ2LPigDemQQUR2JvePYv8H3AQqz48hcveab1VHEp2deHswBSK1NDLDkne31KdHQ7YVWL4akp",
  "key20": "4sBjStC6MbS8htrQ1UGQc8uqEopeXhBZLiLTqPE3Gn5PKC2px28eVRLFSPzP49jJsrQ2EbsyJz8PJAx1jqT57McE",
  "key21": "5GKLfSrYnrgDj7KLMvFBdqQm6ZG1XUQhqt6FSG1t3mHJe1w8sontsG8a7FLuhrgHnxsAqFGLSE8Fkt54q7LgXVtG",
  "key22": "2Bw1A8LYgsBUpYZoD56WMDh8ZcZVFq6qTtWqzDaXzWNbjWttnrhKfxiw9KxbwMVyce3NJo3yzYVtXbVFxuXHo327",
  "key23": "4sn7ViEqtgLbHdxRoWzx3ST8Yo6TLZCY47ohXU3HpMznhAkRTBZiFJM99dXTY2PiLBbQpjwspdnA4oYtkoPpD2w",
  "key24": "4aGBMGwUgSCxQUbVz3hvUYg8aXN8hPkLX3opu8GdWj5NHoZEdGpYAGQUxxz2uJxmYfooE8qAZKt6igDjBQwd4V2v",
  "key25": "guKZGyBV4UZpmEGDQiHTCbsameHeb3xUWMD2CJsdHfJNwXxmdqiZh8v6EZMgi6zAtg3W1x58iW3gWtXXr1vcFDg",
  "key26": "5PBV4Rve3sWNqWhzW5bqLHYL2KVkDdpnnp7e57Hv3KmbkyUVyeH2NGh9a4YjnCxSLry1dgCwBdyLCB6wzTci77n3",
  "key27": "5btGjuhhSXjCucTKrM3BULgXJkayURtNS6vYSm3XVo2x44ZdYYBi7aJC7Q3qosoxYjXeMoZRjXeknxMZbET1EAhW",
  "key28": "4SRTcSbveynPC29skKzyJQtosatdqsygVsPiDaDghWRp2KPvYnqP4aQssimy6hR9oYrMm7eA3mDVPy2D1tM6wjB8",
  "key29": "5886KYkLSewfwSR7eufpMuUDiR6TMVYwS5xbgmyYtA7y1E72yQdP7UX8tXZcV2EqjeGDxHJnmfL3JY6bL4q14kJc",
  "key30": "4RzvJxipZGpyu3ogPWp1YttRazURtap6p2U9nLjjvKCnktyEmDqcgrF3wRzvP1TR7oPiS5j1kFTSd9Y7D7u837Pj",
  "key31": "5XjRndR9A8byGfJVmGvwLFY2JSfdoh34SoiqtsbJEKohyJG6AxUAZFwgciFvAEDp6XqsUCdvriAmgU8jfugtEPvj",
  "key32": "89qqgZQfyHzBQZJawp4zP5pwwudHLTvxsotJkZEh63Ws443QpZBs3y7azCfNaWnfgZYzTvYkGkaAdE6XzbSfW3L",
  "key33": "59naezjaZXwm6pXPPkbBhmiqAG287N3oydFqFMhCazqHk89WfArkRsgbW78w5qkkzzT54snvs4DVVGmHhPwGMsaw",
  "key34": "4VfhgoiJ8vK5odpc9od2a6hgNWxeH2AYpZsPvNRz8zdjVkWQKvKtEZr8cWoJVdBGSe28DkEFwWjscaNdA91PXYpg",
  "key35": "4m5evdH5XjqkTNrMQRgPiX2rcffkmmLkQAiaCVJNrXeTLRcUav4VbGGyRPAxLo1JzjmDy8Jc2Z6WvWkF4EuhDuA2",
  "key36": "5HHXcfvnEUuwSRUA6ATGUhhDanKTe853qqoBtw9Y1vGEyo1opPBVah3hVGJjg5AgrziawUw6tWRT3udQYRYdwQoB",
  "key37": "3c1QH8L4FcmhpP5Ez7xtzJrzmDRDGNqQvK8g38BebTfde33kPhtzKRYx7SWHGpweiPzn8eMuegdAvK81EBX75HYg",
  "key38": "5UsLSQEQMC6h2Wcxqo8jLzyMW4hcAqQatDaWT2pQSbDPmehUJB1vauRNXttmb3tqbQDdPoFnUzsuANyvojeoEUTd",
  "key39": "7qWFrvEXqHA9MfHgFb11NjxkSLasEeBQtT5tBZaw66MmjrLgWMCtgGbDPL1d7kqV79vZFaWhKh6EvDCZ7puF88L"
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
