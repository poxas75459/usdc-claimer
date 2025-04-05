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
    "2QimLu2TDyNcTRKyirSA9z1Vjtbr3NQePMC8z1YiqFjKsPTchuE6Zze4W9qsJjywL8WywMk7Tc6LJFYkrGrj7xhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "526YdhuDV7YyQPxUmZRiRFVCAUjUpKY5mWVPsJguU5MMroZDtVU1VnqJKoXdctk9TsArPQVo3dZ6UupgYwHJEsts",
  "key1": "4hpVtw5H6Vjc2fe1wPKctDgiZqhwJkNdwDotczb2JVzpLjtQuUxA5Ys3CyfxNwxBUb42nCMAXmJ7WvApJRccyC2s",
  "key2": "4AzwpMvfvYoj6ySaZL3csMA8KBtSMnhDUHNgBcFBNteK3gCaviRVm5cC49TUXhYqP2RgY7jS7xxNpsKSYJ9H511M",
  "key3": "5SvjtmkCni362G4EG3DoFv4PhiTwcRrbXDDdvUyLK8a46MRwQDgvDAtRWe1mbcPZQMhNcGLNq5PxGtw58QPjNC2v",
  "key4": "L4a2RUYmgtga2D1VD1WZkVBFmbaGboF34vashRk39yC4MW5rECUJambaqsjP5KjcAhbQdtroE9MqtBeoBix7ecc",
  "key5": "2jUvetVSL5mrwf6sn7NvPqB1GSqrqPvXbRTaNt1VNxCbyMJ6yTzvJyT7NDKGuWqX2gymbrVSvyDJaNe515db1FzZ",
  "key6": "5kw7LfoL86jAKs2WuuvJUjaLvhW1HV8jYkC9wVrjT742JL1hzX5fHZ4mPhqn8JRUgxnebpntTCUKgG7nRcJJZBZT",
  "key7": "4DkZ4bRiBL42QAPyEghwbXxDvfATkQSiQh3FSj5UN2vehTK5hRZkVkmbgEGtJN9ga6SkorHkDss3mYuySx86JLVw",
  "key8": "Zi2HB3edxEjSbc5Wg6PgwkhBpZjZLJkagNmVujhZFrqFMmUQXhDuYqvSJpbBDeTGvCn6Uc3UjJnQQ4MCeNbLhdV",
  "key9": "2oetTyiMpezJHzLNt3PEjJARtaPVpZQY4MrfxQBE7VPSKtEZaxRHLZYM1gn4eXNjj14rZdjQiXuU5FEd9AkkXjB",
  "key10": "5WBsciLHTq3uo5mWSfHHPaKUdgqphJbhfFEkPbxQHQ2Ss9svgwo2bHZHqx9ryP5tfMLCyfuiP9MHfdKAc96FFaJJ",
  "key11": "4zZAugGQSZJQkxe22WgNDmn1kyXFHDPrcRB13KpKbk7k4ELoJhPNEhoqsPq9i6WjDQc3KeKvbD8i8gs9DhtwvBfV",
  "key12": "5xirtXjhgiVdSuEkyunCxpEhNQKsgvDWY4JPH9scXQMwAj7LMTM5jxow1oGMvW1Wy4PuBcXvimhabHS8XyX3HS8C",
  "key13": "2r3Wi4RVfUhLiwneUqjBSCGcj6VFdai3pSL2A5t435E3hdps9fo1TSi1rQU7h3BN7yTpc9VFnwAGaN4wzDMs9Umo",
  "key14": "aRwqLqDUNYreD9uSi6Su5FBHJaWMLNPgP2LzxAH8hTQLXaLr7NYbvFBUZYVY5mYujd6S3HLru7VHPuUxCsm5Ljj",
  "key15": "nWLhK1eYTMWzZddgPVyenrVTaorNWaQqb6LTSxpJgW8kd9tLxA745evQvQf5TCCJgwAuFyJEYo5hefqm6Y4KX98",
  "key16": "3uwiHKkZVwRu5WTvHBteGudWRGHA9hoDULVET8AHRyi7mYwnuQPpTTwhkHih1tPadJVmHDQjta9zFLK6YsTTdAhv",
  "key17": "SbjxwP3BCnghEYtiqezRWTCUG7Fuy1fM4CYVwRpFnxVsn37hXCyA99MNCv9m77yik4xxVCcbN1QT8q1XggD8kvV",
  "key18": "2tz6q7YrqjnrWcPSZxWgKDkL8WPyYeXr3ux9Z6ZNhMrt8D2oRYMrRRwJ6uEipvnW7Dn4NcjU15cTLTYz3VYR7WQb",
  "key19": "3agdNXmqY9XSkHS8VyNbanUTxgGyLdAnHXGmv78YuziYJi1ZE2CAiuWwXaZVB3JGVYumqSZt9E7ErZi7w3pbSuGJ",
  "key20": "3JeUcHWudvptCH24yrzNwriYeXSUZPK6NTqjcS9dfz9K8eY8FLTpLJDbqdFYE96RLA4rTCVCv43xFG3tNkmVBPKb",
  "key21": "3zCGsthvCiRz6Y5D2JS2FxkEqbHioKrZ3AjncCv4yfEQvTBG127193jMesCZSyC95tLogwJcAxuszBiV8FAu1USW",
  "key22": "5EEK9QQbRLgpMZLR412j1KxD713bozVDkn8NWXNhqPNaEe3mnQMGKrxmr2NCRqjBbTsEb6kQvYaNeWzJ3tgPjzcY",
  "key23": "4ybNQNFYFXjZi6Rjxa1byWwrajHGikJfqfNZfbvZPhopoNXrhQjxU57yadhWdgkMibheF8vfQoAaSKcztBxxbbXF",
  "key24": "CRyFwmQHncBBEcYGzcEonsViXfyMsEXs6SdUfT5Lo4DQM5BfkwqiwGWPHRZn6PtwfCqJHYaGZHLzcvFBdPXp38f",
  "key25": "5zUDXjQFZUGZ12Ur3br3ypqLm82MjKeuzGodh913PA8eRGQuu33Ct8BvzCW27gf5QANGGU7DgwoCnEdBuvaJ8JdY",
  "key26": "493pkFC9D2FMckpHS9P11XBoP832WYHQ4XJEuEfsHnNtqQrFJA6zbN3azDeDeWhGfTK2oWdjyvZEnhkebBinW7ag",
  "key27": "3MdQyFBJPVgfL3RFu7rU6FYgpKnVXgwJzy6FuqtxnyZb8jQbJygznT4wdXxrmDi7iUXGhC2qbY4NJ6adpyma7Yoy",
  "key28": "3jzHREDvoHX274EvvQHx592q8hFNEQpxPpmaDENDDFCd6uV9v9Wpq6wWAdH1ddVjEoPUMtiuwtQ7Yc7GyzjnQxWz",
  "key29": "5UcB6XGMMCC8XFjPEmSueSgtZWfZJbkqMVuB8PiXZaruG5M6AXjwgziAJnCBP52C6K44raAzNekMCdQQ4Wo4Nx58",
  "key30": "5GbTyQqyzxezmbdz4Vz6SyQyqGR7nB4iToCgUersFZS4utn6HbdahqmeTC7JBbdJvUHZYynY6Mi7hSFhamaX1mvF",
  "key31": "Ejku7K6TX2sPuFe1k2wBnHS97kVaHYiA17okVGRhdu8dgbxjyqbNxbbvnLtXCiB4RY2K6Sm1rXPwfPwgZQWqiBf",
  "key32": "4SjcEjYxtYqmuNQteggRt8AL1u3QDG7rWE4N2dhikAdYbQSYEdAdg9a8Y72wf5HgacwGTTKCyCWaaL8U5CL3hrCz",
  "key33": "51GkMAJGW3J5LVcj4MQkW1699fvmDdZPcf621F6Y4BzPphDjHP9SuDoHhC3dGdbzhpKQm7tzKoiQu8nzaVoTNFCb",
  "key34": "4Zi8bBnCyYAswJ4jiC3k5fjt2qwkkfbm7UU9mKVMannnxeqWwxYfmfvujYDXzwaq8jCtcgQF2ynk9ausnhwvgW7F",
  "key35": "3PYAckx27HteiZnwqpy3Vjnfd7pmgQ1xeRngA4Qvd4DGqEbJSVis7KMnmyZBgt8713t6Mfwx5Hb1pp46r7XQdNHu",
  "key36": "2s3W7kfeLGjgBJpw9hQYhMvm7gdF1kFQvXnwyjHt6SNmiQuFTkEasboB1vZNPzaCkaqZmuxe1V7fXsLJSumF9paY",
  "key37": "2UVXEVmngNm7K5eJVu2KFenzvaS2deoxcVw2kPFCU37JF5hvMXTTsUfnZncJH5PywQwUdTZGfzoMceyA8Df2zwp5",
  "key38": "YMiSMEYZwu8wwqjDtfSjKv3etB92NLezXZsqCXXrrugR3Ru7RbRgXv3AsXbszojEcLQoQBpMCsBZwTGfvgZhWXA",
  "key39": "4YZrE8tKpLNf7QD1C7nod5YYJD3GLYhE15C7L6e13h97WYftFjgnCKZUvbrtR8cy9UNSq59vYuQt18jMq3QpB24X",
  "key40": "ednPBEu5j4nLkNo8vjSxvy4s68xiMHzZo4RiM9v6FCyr4FNdNGyxZMBeC4fMaQftwE4zcy91X8JafFKv7vWDgF6",
  "key41": "5jcdz9uBrmj9LE6yG8hTVRU27UZDddQxNSqqdMW5BjFgnE2yK8WiLK4PftxwqyZdA67DRDHzoK6i5DMCtHfryySs",
  "key42": "3A1Cu5dC96Eq8tGdQ3g76hfR9WFzHZG8opJkdhrt5AxucTwVnQa9ufnPqHfhSTtDNCPoKpJUBCwdsnCjrDbeNdrn",
  "key43": "4p2GTaTiVUkM4po2hNB4T7vaAUMyJpdV1E2ijmpxdSXFqDWAVVDSWUbrHCwWb97s1L4e3CAEGP194BsPWdbgZxQr",
  "key44": "42Njxio7AEg6fJTWuoBCTX7L8AK22HzfZB4wLQKeZovschoECuBEUMUFCQGHXerkbJx38cVYdnMUT7akTMq59iXG",
  "key45": "5JAPeP62hPh1nMM2rz8Gn7dLk4frJqkAe6ZMYkv8VPeUAJaEVaxG7bhK8Ag4BSquHNPyNUKxHPmp2FLu3RweZRAy",
  "key46": "2Zd4RZrXiymJ2k93MFHb18ZvH7qBaH1UJHNDg9P9b2pK4oPDxufyryZPccLcjEzcirAWQiEQAsKc7LtxDxHvMrMA",
  "key47": "2AcsQ194mMkoebrvnCMLf4viFyZh9TBZW4Uk3R9tntfvHj2Rb59ScNjt6xDDwTrMzZ1HidMrQeRh29PLYdsiyVA5",
  "key48": "2FmeqB5AgnaNqC2eLMLU5LTTMPYdHCuoaBLVv1kA284L9sjpewA4upkoM5fa7d5aEpjCmWn8S7nxFQ346nF4hhVF"
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
