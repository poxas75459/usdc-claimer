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
    "25hBDg3hPaptixnar933zM4RpnTsvUrVeuvogvh8XBjV9aRWfi8kyXPG8wbmNPeikfeFquiaUDU9ufm6Bqp7qaEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QB4XTBg5vcheaxJiJGGuT7kv2raeTG9YSM3dKfeuGnRmVo2UYfsMGoqGZs9vwTSyqVvXiUqMqwug2MQGz3uL6PS",
  "key1": "25mJ1PX6ZDxUgsLMJhGFZx7JEv8LhwhND42znntVBti93zw5XnsgWUMBgKxhVj6wNYZ7abDRqPUA3XAgpB4CEx1a",
  "key2": "4XTQQQqjBPK9untYXRbP3XdhEAfGtwoFa4yDh9dwz2XoLq3LBM6N6E13jcusnycXmzuyzQVwMg3pNcmEGiL2TvAs",
  "key3": "3Ja3CyftzQTZtEGAnywtZzQT3UhopX11T2pWiEZbMUHjAvHSbLJcEn1faebmFcRD4WRfuLhScCd44WvzwMRoUwcq",
  "key4": "4EHy4ZL54KduMtJwKR8cKDj3v1ex6LEnCV7Pn24rJvG446dj4Uaka5vL2r7cWTyz6Qef3Vc397nKneb7qemKaPWY",
  "key5": "5gjMVeGmaqHs2P5tq5NcxGCGKPw8eeEG6UcgnoUpBv5FuMrwiqRZm4SzCrP4sa8A59QmcZfsVmCaxiwHHHxC5Vec",
  "key6": "wt4GUFGnXkS8xvaadrFEpBk9u54aJF6NPPCBscCiAMbt5KsySZddMK418QeuwQe87qrcmnKe25MfyV1oPwceUip",
  "key7": "4AC1mUjH79AVjcqTprRGUKpE5MsRuPb3yhV37qHY3d1k6rRmYXKcNBauqDsiCSwdLAR14NsEQvbw3JNrw65WjaoY",
  "key8": "5UvcHXcFhmqBgxx7VVsLpEacgvNJ2AzMxSuLZXFpy2FB5ug9d3Qgbnqti4FLhdziq9fREed8SPo78vmQAfFjkiPM",
  "key9": "4d5WKUopesBU3Z62wfTwb8R98P8FuGDEgxYnrp1oHiAAB5EE9vyntqeyMLTmLhREYFfGLBfQqwzQjNjUg3hsN28R",
  "key10": "5ZUrkZ7jHGiDQ1hi7xeWLSARJtLusDjkiTYKUqYtiM3WRQrZp5BcRjur9pnrnzvbe9dTjqAm9FfNMHUhq5E5vyhK",
  "key11": "2D23hoePDcx6CvKu1pvWWiiNEnd6rJMykAdXhjkjSbcRa5GduwpH3rQf8GHwVGD2GBb8mKnE8WXPm3e5KcKYBU8f",
  "key12": "2LqXZgJkBHPw6EXMYMmvhPvN3e94XRy8DBruRX7J9tNzm3fR8w5TAsJvSRRSyzgqzpgPHaxMwtJftBM8fzqHgJC1",
  "key13": "kzjFCHjL4W7V8ikqd6CLMFYmTRkee9Mu8qmCKN2JnbpSGiR9y6Xbjriy6F6ipG6b4xg64qfuELHkeUshJ5Fj3Rh",
  "key14": "2WJ4bXNTVkNkeBqcff5AUS1FqMNzxuYoc6ELZYU9q5nCovgcHgTnsQ6GawBVJa9vM7C3PZxRE2qxW5bSsv4yD1ga",
  "key15": "5NWbXXv5fFmH8StWrURDQNTchFoGdg8PJMRKEuKdN7KDqMVxLv7SPan9bCJftTqEWpuAmFSKTXMQwHrCbnWuSf1Q",
  "key16": "4ZJtoAEX18SXRcEj7maqLccX75M1voZWZKsTfhtDtrXZ3SXQP5CPVy7t2muWK2rxRFZJbYmdwz4DD5Lta5QxwCDH",
  "key17": "5Ub4VPTaTzr3HqKinv1ttoco6DzJFs6qDJWrbDhCKBRHTfFnpeij37bHfavXfUqWhUKxBk24yzMQ2cn1JGarnsSt",
  "key18": "4xPWi2LABNjQ9VcFXAUuDzPhLpJvAvHTDKwpP9hfTmZNWaBE275HXx9igy22BZ7RGB8SQwrY2AHcAcPam3tLTvr9",
  "key19": "2ouN1AhD6u7t5yxAp2ZrS6yfmkksJJsBUVMKYTxkDuV7BPT1KksVbMnnYJ3SjDCeP5P4rQFuTRRTHmPRDXzfAh7w",
  "key20": "3ZWipqqW8TgFs8AtkyYqUxVnE3XnHqfzzrkDDno8QP71rAGxs5WRRtBPcxLLfENo6uEVqom6f2iozNE1vqTTCRJu",
  "key21": "43isLNmquWubDvu2orCE4e24jTjFUQdzmZhMs5zoTo7rJY4w3R7VpZZQijVN1vEKgnSmtb1FpeZqNhMA5hxqG5iG",
  "key22": "4X67y8HahSs1oUoLzZ6AfEVcWo5PNW6ERFvcQRJpfqy6BdUMjzh7ZXGWeGcKMMcfvNE72trzDu2yo86aW8u8vtXa",
  "key23": "mJaL5FPhGcvi7VK9PQKyGqXBe58f5RQorHazmPXBxPp8cYHTRh5N3yMYdCduTqbD35P62vKR9ADkGt6fipeyMfa",
  "key24": "5wsZDqJJrXK2Cj1W4c3ZLK8nMvZBSWMbc7FAHRc4WLim57TBNyyniC4dcu5epiyZ26ZAUsV3TDE5KDbXP7JKUgbe",
  "key25": "5QBuCUHHrBNEk6kvbKN1oUzXR33bjMmfADoLaaE7sKqjeYaEiHhjKeX8NJHxRcsffWmgw1onVVRrtHfPGeys4YDW",
  "key26": "2q2W7VFJx8o5wkxRN1yMFXiBpuYCTSgdtpYLP7d47VMpdsoPpPFKsEZbghDnRZYEnpmMQFCFd3Ty9WLDdRmSv53S",
  "key27": "43mDLPNQSX15FLrrLkMCDJZ51RVbEy8yoWeNqWjn3CyS2McrgnenX9Cy1fvW5oboBTindPKtHjBdrS2SJUWqzbSe",
  "key28": "3aCYzfPV3Rntj6HoCJyS4tyhiJ8bdi8xyh1MxofWhSB8NGzJguKmWM4CQVGi3DL3BEEnB7Ry3DBRdzgr35KkKhcX",
  "key29": "4Maed2ZbehKUiVwhjogxJedFWkYaVRmMsdYzpoi9i6aKMRwbLHoxQFFuuhT3E8NsU59C8ozMngw1guNe3uVZEt1y",
  "key30": "4MBQRfwtJrLAvoN8NV7cQXCS7bCP2Cpdv3R9UZurGoT9pzTE2UWMNYbsb64W4WxFq6e3DDTJN8jN8H7VPpFPfZX6",
  "key31": "49AjWfwuA2Vr8mMP5qXMXqQxSiFLQjLwcSrrEBhatTNJHPXme22kiGHLvLmQiTWfp6iWqkQJ9N47aKEsgEfgiLkp",
  "key32": "x1ATysdNGamRfavQFxaihW25wsyC2X1Fix1LmHCeqnPPXbpernExt1KvGGzptCAwb6nBz5TrHGt4jxfXvWwz66o",
  "key33": "9qfNkcpfGoaNRU1Sc6YHbcW4qvfD7y8upnx9jSUqQzFLtUzYbH9BwLsJPPExZsZPNmJKje3zdME1cxc749Aj6XE",
  "key34": "2SgSHox2871iJvbeyH5QmjNR9jbEttkHiUEWCbNHhwZ7nnjcP5eFs7HndMsvc7MuU9jV7jNfWf4z2YXtkS2vxZRB",
  "key35": "4ptoLAxSGftLBsTwK4qoRYE5WCHzkdRzPLr43h8aGqRWbZWcaYym4byCqEyfnWmGbrE9LJmVSzdwzKcXT72zyhAj",
  "key36": "TBk66cPGH7rPR6uXNSnCP9EGDPU2iRtgzV7De5FjkDgpK1RvwBTdTDk3WZQVcHLtxLfdFgCQrKx2vQVFRttAMaJ"
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
