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
    "5PaxQLSMP9ujtnpbEKcQqr6o4WDXGA6UocjUwvn9XuLmCvRPhEsYxeXqZkDvAkYPQwyNQwceiY9wBwZFWrL5jAir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t3iaJPmdDDsCJvoMeXZdqhCEhGGd7GZ6oohMWdaz1DYLZksDoY9pCsnbCMty6Ee7Enpx6QbJGvY8c2SVtDbBDHu",
  "key1": "4rRgHLXXDUZsRu2vQaFWrE3MAtL232g1UkejYhqnp1n4Gddf4Zebs1F2WQgmc3bmf5hxLT8VxZD2pQMKp6wBnRTF",
  "key2": "YnHTUb888G1wsyta4h5GKn9jBJ5kW867ni5uH4QXzZdXj7DHUfbSx1aoChzkobo97CKTpTeQH5UAKXtoK8hvDGe",
  "key3": "4Ci3zQ6F8dQdyFwZvEW9hL16jhtMsB5CyEQ5oMY36GS6eCWrv2FWgjr3yDZizK9ZnvhZASrgfeqyKneysxk2Mvf7",
  "key4": "5sUUUpQLosyRPYvMWiuZPAG6mVjvLzYz26rsHHmCnPp7YZhS4CjAcyQKviDFfrT8t66o1AwpWA9FAQ7eTgtLxAsi",
  "key5": "m7R2jjyhLpb8bhwTrCzyZgD1a9rTgS7MdperNFiSuT1Zp9m6MxLGtL4zRxxPUCbvJxuLzD6ssJ6YQvTxhJnF7RB",
  "key6": "4so8UoBXbPefFbLXBwiPRKhtnM947NXaAAbo9t295uAprPLQtQPCCsUYxpB9ukJp3uNMh351qEeytQ3CSBLvVyT7",
  "key7": "2j8UCBQZC5Nf3UFiyweQXmH3TEWxf95A7qn5BUzqQJ8aBYph3EANx16ut7TnkV7BVyRAGHDDtB5BcLnVqbhrusQ",
  "key8": "Dj7YcBVonsKNyYusNGCuFk5tyyfnT8VQ6BYrvAkWKmahRV6XVcQo32XmzHWUT9JcbrXuLKzcXXF28dcw6s9hokW",
  "key9": "5hPwVkJkHYWCgLhhLukhQvLHarjbF1bKv7DrUUGQkStaug7AK27aEHPLxHdGSanxnuRHJACxV16cEgXNUxd4YVsK",
  "key10": "8WGqxmxcQUSQ4LiT2Kn9MFBhjdnWwjqwZY7o98nJ8grk3woFE6jX74AcSsZXg6XF8fTpcmtt1b5Yxc1YFVJxmRD",
  "key11": "4aTGZEKwrC9DgFVKDd4j2RvW8j5xphQkoaG47WEvYnzqVyHPLcf7bDTyeEdiUNqQqdzVchU3xRYfz5oWcTHPyqeD",
  "key12": "We3qtsqGsKhmBmLjkoHvXD328oJ7Tt7fyb7ovoF9e4TSihUKiygVtCcQdc5CgH2bao4CDebXP4T2QLmpT9hUu5U",
  "key13": "26dYEbJUiYScwp1sc7xrJVpnmc5uQ6E8aHGkx76TEVfUnhpVKuz6yBSJpKTJjdeLPLDkZW1JRk9Nk35inhftWXEy",
  "key14": "4Vo1S4LDHWE81tFrn9pwWBkWErTktzo2KRK5o43aNw452XguV4UWRPPrcYVnrEr4jNLDbHAXB8aQnPJ7V3wmUhPo",
  "key15": "5joXEQYGttHKejoifAR5b6xiRnUhAnwjV8i5ybAv1kMoYZGPeguBdAwXc4mrBkcMweafVm8HH7PnLCUbo31wN2gj",
  "key16": "rmcUem12cArJV3QPRYNfBhsbM4PZkwuheq2yDN8ZEtzk5uCSv95ZvVZb8WfNPSVVEGT612erktw9us4ueDVk5z9",
  "key17": "2ZtqeurMJQSa8vdxGxofEKPkr8LSbUrPcUEBJaHPyUmmyQpiAixY89Rf1JetuF2JdWZmE5XbUb8aRm7vgJQZGR9y",
  "key18": "z3Ef1b1agaf4i5ThVYpnck4NwsWdqunmYw5p7CCXMouhkx436Rzq4sJpT3KRq7CYtURaRV1Jr22c9hRTDGMjAQF",
  "key19": "Uk2xaPBPuSv8r1Wpgg41TfpZ2YP7ew59BTKy5Xe9EzTeZaJY2ZNy4Gnwj4vYRwXR7QGpjxSi5Druz3HzZhsCjiB",
  "key20": "2sjRepk1oXnDA25Be65sjZ4XTLyzBn9z7vRdn4GAtixJnYDbuHjFPmwd5PSAsQVBrG1jBUuW1wxSdyXGGbxAtzZg",
  "key21": "3uvzFoqXq6BPKFWaAGkxNy9CV2yQsNveLy2cPueHBffYdPp2NgFmEi9yXBzPgyDiNTz9FHwKJ166Q5SV3YDHv7k5",
  "key22": "5mKvt8WomP4FyDN5TSUu1VYdS1mMcpTf12PvWCu9nrKmre8UBbc3WrjSkUQEcG3ZexsXNyqf62MrZxJSA3mzcZPX",
  "key23": "2x6ELv6Uqz8Ac9KJnT9gkPp2vwW5HDgNY2WoesjvEE77Fj38PoTS5GshTxG1hVThPcEKCejkCeTNVWMTgd4WWzVN",
  "key24": "5rBioHakgWrojVVYFagpB3BySh2aXf4xbbC6P7AXQpdsTXhyHqwVL8kFEAbf7ndCLNcXiQiYmk1snvUNdQRsXDEo",
  "key25": "3BzP9fWyNWm2oTqthdrqPpsCnueiJdmAi3Kd2FMFJstpEwU6h5kBYDHYj8DHz2bdZmCiswmGWUEv15ANJPMhuULu",
  "key26": "3WiqcDm3zZLTJYtG3EE7ah1K47kXg2pxXKEDLGgdWPfyrPnKhLuc2g4efa3QU5k6yhwqdyR3AMZGucKasDE6oRai",
  "key27": "4opxS3PbLrdtPhk6HfmUDu7jRzGYpFrAV5S4J7wvEB3NiHK74YoayXQCkiaLnFRhF1GPodpRwz7QmcZ88gfoYZuW",
  "key28": "5ZCPDGyfaocVL7vnnGBvAf492iRZjNuFHvaVjtfKcujf4tAkWvBsTzu39kiR3oSmshZPbwuxiKFFVfzvU9ns2bc9",
  "key29": "2JmCrgj9ijFrXqRvjsqkXSmMgSTVhGe2qHKeM6NqTZhyoscpyo4CeUKPT4zgZkpcaFhZqRudVb4ywoVsYGhykiKg",
  "key30": "22T5n9Bf35cwtuLabBwSdkFfvNtmXDnrUTUhfYRrJkcujTMjwCod9HuCZGQd7w6jja3RLbcEyypL3CUbHrsoJBm3",
  "key31": "5dzoYkP8YVAasFs9S7bX9ZkPtQ6pwbjbuqr6WuZs3icfYB8EGsNrzwMnR7eH168fqR1QmVRs97D2ZWZNBVvvH744",
  "key32": "rWdWMZYNtz7XF6xECS2vVXE7yokoz7y85M9V6u739KvxPUgYxYAL4XvYQhT9wZF1oSu6cJiKQfyBUHbL5FNpwNX",
  "key33": "5dnWvM5peWerQ4JoTv4CjXU37hn1Un2p4gRwDKpiLnpM1MmiduBSFyc9WX778o7Q88yeWqPcm65wafm4gi5M2LUR",
  "key34": "4mceHdSytm88oVpTAkPfYKoWRB5QAd8UbbouWU7so1NxSmp2SFjrcYHWdhezputYge9RxkmzG2vWZheYVpkaQA1R",
  "key35": "5YnXBRirP1YNa6aJTthc7MNBJXth3ppfVzU72Dy2Q5EqHYyXJyjWjev6fZqvRG4ApieZwHUAuMdkBjtYH5jkZHoK",
  "key36": "58AEP116qnjuHiLVgFbDC9ZghK7dM7L7ihFJQkaoDr93oQgVfYBwzsnYN1aajHw6Wk8BRyw3vko6mP66u6EpG2Xv",
  "key37": "5qYGrn4JQH8ZP3j6Vjd7NodY7j6KMvzLTMuVM2F352tei2PAdPwT5TTKcCDooVFx6e5ABSqvV6SvLswRWc66SmRy",
  "key38": "3cAaKmsGw1QLDYifmpKUjFKzppWthE2kqB1fyTVTHUpXZXWQAuH5aMMzxPYPtv64HxrTdRDcC2bfhHZH6jRDhM4c",
  "key39": "4tRsV2oDKTw1K1TmpBpW4rRYQAUPNzrqXJGLRNE6jCLNfZUShMdvje7QexFzjcteoLwSCK5TRFkAED3HEBMLsiS7",
  "key40": "3fCuCHCLXikQFvJEFZdaedsZQWbJTfnVL5A4zE3R5EtifDHCymWGE89WRiuLc94Bz2CxSk7g8yczDXDkLWZ5B5C1",
  "key41": "cg7BNV4Hi16BJbFD4bCZoSjykjNs2mSTKCXNEp3Pab22ndLeuMorX92bF6AiYQjG96ihrHsZwFvDieFyrA3HpmZ",
  "key42": "2nvuRmjfRCzRz7EA8rTJ7ufxJKwj61AArJedkZSSLbveSAnnCr9usRoqZEfjPaHA9Twuq8CVstPZ2yvEgHtqtfSf",
  "key43": "4S4t8bQpWnQuxKUR4unDFuMMfkc8Ur4Mdo69XbCukmGhSVPxtNioGWCC3pXKCsK1ndJLrKBTMM2nUuLVeVdy6K8s",
  "key44": "vhGwEBHBwS9DM1J7E4zSFsB6b6S2WP9KLMJQqfNRJAqNQYSNikBUFDGEMhG5PupFW2DhSGLoABwU4iubhqf2SeT",
  "key45": "4u5xtXwAFqKnwYQwrfnkSyibGgAMt7YdeW6XLuwx2qGSeaxeb4xM5nG5ZM8KRHtvxWUAaygXQHd1dd9xoodpPPAw",
  "key46": "3Yv1VbvHs5SiLi3CCiR7aiYmMQUwK9FeDiyKkb6uzgSHXuhMi1dgj7efBxPQ3fHNkqo5HSWhwVfkjYM78suMncfk"
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
