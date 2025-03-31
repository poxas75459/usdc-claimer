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
    "LuNrBpX1PUNvCnfkxwnJAYtX58hanDC4hCBBBWk5gsWFX5PtWyR9hedWEzQm6bq6KxJKkw7zSEL4kndR3gcbfTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LxLdvoBLGANBEsjbTFJH4ZUdajMBiZKXBnrb1Pt3Hkd9LHVjPi76oWW3iSzT6ocsPskCZiVFWcfsQYBRt24j3g7",
  "key1": "3QnCG4pcsm6HH3JgeKZKKGSeJnM9q263JG71caBz2QPrBS6mEQBaLBHuMCjz1a46Ge2VUX48nEdDT5iBPmHJCM4P",
  "key2": "5Xb6MLUNtyDba46Fi8Ycd4crioasp5gYPFBDEvBV3tQCKVpi4wRGvyxh9dx5as2bCq8u2kqsig2xAn1mWV9mATSd",
  "key3": "3pL8tCY9iZ1k6wuoFxPo12BW9jVNDvGooEsFBRbU1tnEgPyUkqaty8fL3JaKrD9S4ALzAXmdt2uPE12ExNSG8Z7P",
  "key4": "2fxfXicgrcawBtMKBHg22y8kKHSCUCf2xHNU6G45AQkxZi5ERj5DBUGfK1Q3M6SCJYVMp3xaVjhYKoZ8rKzNtN7G",
  "key5": "5EiKc2csAPuPbZS2WJgmbMTruW2GB47ah3aGCnLarAd1yzNvjEJXtMzrVRBWHuQaGXUP9LWeJFha6TWGHCR7Bdat",
  "key6": "3TZcX7Bgf2fky6ha18cVjUDwdDyaq2tHhiHC28tTfa71hZBWJDXpJwBn5ruEmgj7UDJyKdJZxL2GRTB2pAbuuKDX",
  "key7": "4UKeaLNKPvSWUiDeiCDjUPHN7uK4fWfktFr4TmoddvQrw99NmKfdQacq9NkJaCWmq4aXcSsFwSGxDT8aFU6zBbmF",
  "key8": "f7LjyWKLTNADtudCd2rZFDPYXAinZtgYnFbj1DadjV2thrquPUHBsWFAdd6gH6GCf4FCwKPXTqrTZC2bVapVcum",
  "key9": "sD1FAgjhpykS25njMLUCPbinUBkBcf3P9NV4mufdvtSFkzg4peJySQ9WwyPkiSTqnjjeEjJmaZDnHkLA3C3hxRL",
  "key10": "3vzwqcKxUs8M2bdB6WLmtUNJmivCuTQXy5xVDirdUCSYFyuow2N3vyTGSTUaQDJ648aRZCJdAkv3ffnNdoGVDKQ",
  "key11": "jj1JsdZKQHpbCbMbRFsVS3m6dWJDPTgL2VxguhgySXEyzxhnjoQ8AAFvx7dSARdiCjQnyvwrq8PxtyzBZ2ALhoo",
  "key12": "64EtuHgcyrn9AGbPyvYjF5XzrsaiLDcptvASSyKwK1XFifN4h8KRhJ36rH7vXAWiwpedx7KuGMWBxiVpdx8SfLhW",
  "key13": "C6HtjZZUiv7HLNWH6eqQwTNU2iXpiwCzZQDAMc2hoj1czLwqwCCAn168jfgVCyfNwrLU9RARk1g15THaegXkm5V",
  "key14": "41Vz5acAEF5ohxwhxag7iUTUb5Ud21AuKdq2uW4XkmAf5oExQ6Kb9iAsg528A24TuxZc2hpKVtws5F1mmvzXm6tH",
  "key15": "2XmHHBXKWC8ND7Lbb7rdsjCmQM4Ke6GpSPfNP2HUuVpYcdRYp8n2MqMn91GP3jjoouuQxQuvd5i1B5bmpC6PnnFW",
  "key16": "5TjVXBTd81oMQtHkvqus8eqoN2eLvxqwushdwW2HU9a2H9ho7Sfio1KPb9vZvtgWGcdDDB8Y528xoogFcwcpRm1G",
  "key17": "4NEwSABWDhprrGZD1fXVqWM9G6MqCkUidS2idRAfx4nLfEbykYarUhcWgoazs74wTevRsTt7HYwAxqwugVoMoXKy",
  "key18": "5ThguZ2RtjjoqZGbmY1QsjFTvsCJn4Wy5yQ4a7jiQ844MeaTSSgRWAFva7ZJ8hnt4rhqBUZeSYfytBPzTEXdsb8c",
  "key19": "29ZMJauMABmKjp27wuNaxERFKTqEFdvE2akYA7hogvm6wRosdDtgctbtucR8vFQ6DBtKz3yd2fGCYKxssFUbaxAY",
  "key20": "415nUPg5G3WyZrfQXLdQuGpKssgEpao5ccjy5qybWniakyvNSd2Dq5HSDS5kdQnnqkY44zN5KEw45UCmtDP3zxDD",
  "key21": "4CC8eVGdYALgJpd1XgLkSgxuXC7nUC1ap5PxoPiSLRdGUZNdV3nbCoF3xLg2mjo5o1Q53yyiCKvB8iXK4XKLZdGZ",
  "key22": "gqU3dWMHwiCpZdceHj2SUJxCCvaUNGVYFBaS1gcmUTaUFP6wWC6sRbdZFAhHSwWyuZE2nH6we4G4aXqdHJ5seG5",
  "key23": "36WDMY4GKDYVNWMZys3nprVP81ZBB7ChzgDwnZKaFD3yRHP7ibxDiBgyMUF5qGdAYnNupq8RVN9YknAg2DceBj9p",
  "key24": "3zqMRRypndBkiPQ4J4x7V3U6Hu8cWiQvBiyxvEGfHBJXRXP7sayRhNYbhcwGQ24DfibykaVyvJ9Zd5WDuNcjr2Ui",
  "key25": "2FHyTwiaf1Rxcc5DfoFDdCUxHZGkAfHTUC3Ci2TqSddzGbbKhgfEUuMbaVaAAvskWtbgkjZMk48Z6qMQyEHgCbqS",
  "key26": "BXvjNJdMccBrNY8UeXFZgemdW1PsZpxvQWQ7PB9Y7qEaUo6E86pkRvZeaAJx8t5rMvBwXH5Uwq3Eq6nodcLtKyo",
  "key27": "zka8pQtqAiNeW6Zj6sFezESkGkqK4LPvhSR3561rdzxL2iWG8HFS8TrgGz7Mc3NJgzS2B8skv1rrmprTwAg5rmV",
  "key28": "3ZC4Ntq3BKawpSYNGYQ2uqc9uZ3yGTZxzX82WsmdzHwFqae5FBRLLuPDyQZjQJCJqG8JxUVbm7Mwn5V7824Qeonz",
  "key29": "412tTsZcAD7ozhh732JeSboEc1JRAPS6Abb8wjbMkvfSEX4bQiWhkHaksjepEL4pBFZdXuMo7ue2jvToi1GzJxrw",
  "key30": "14Z5kVqeQKnJMtSQY5KksZcjjdEu3nqVDJgRMTK8LnSAiQJtzp141i4EsxvUiH5ygPYhyqsDmRaGm625wibku8Z",
  "key31": "5ZoGCeedkXASRhU3qmMvkvgrS33v7ZM6P5RqsEqQ2eyKPQHsZ7ALu2euqhYVLjzB3qAj2Qm4RWXR4P23Pz9AapMS",
  "key32": "4jT9M6gX2mHYc7aGjLNVtbERdZR7iZvbGHaQvci395PDPkEDxdem7E4SSoT8VmEZWHUJ7eLMsZ3U56AWqUF6nTS",
  "key33": "4myY5eDb898XpfTJZtRqVn9zAnPENn8eJdmmahXqueAp2bieCcchd1DJ8enupNynk9H9TCNQfssT2SaQive3xXm5",
  "key34": "3K6BoKFRdcHNmogsB1Hp7z6WBz6UAiGPE9hDU3eoQVPQJaVr74Da2RWRty3fqZz7TrsQV5NCf7dFVZppSgPdfsKZ",
  "key35": "XgA1kAGX3jSwhcQhx6rPbmnfehEf6c6nrpxK7V7XS4GnevNcABLeNBkw1CwzNMgEwYv6XeufqnTWr7zrxUe5DJm",
  "key36": "5NyWVnQyE7GSzEz2esqPfcpQb4X2FkKbT68QqWLt2remy26mqK1P4t372BgpbFY1Luvdz1aNJY7jqNscebaEuD7t",
  "key37": "4EAB89SsCdYSWoGi9BCAPXG6SFygXYA7zbtKVKQzbAVjPRYzoQTvFaeNBbVNEsShwJQFGmUEQiHgYME7AkHfhRBJ",
  "key38": "4ibzWwDxSyhm6pMtpaM2jUVTBV495Qy7fhTYFpQN88rWYouro6MWZSNqANtNtgSyEqkX3aBAYpYMSMdY5ieaDtZC",
  "key39": "2xGMZVPTA2u7g2Csbo77uZHQ7HriKBEXWNxkaVhE5BuCifZdMwhaNnAzK8sDy9Q1p77RgeP6ekSp9ackgdmjTat7",
  "key40": "WMK7ppodYFkJysT3je1kVxZiM82tnLZphx2e7tf9cEUeLEwWBFgCycS8mzp2V8eJdr9kEEiBCyNY47kZt3GYEdW",
  "key41": "4M77nmcABmuueDL1ZVT978Vvm83bt2htj5NXGXfR9D6nZXxEyJY6jBqDj1a1CWEYcjtCLRQTUmiqXmo41TPcvg77",
  "key42": "3vWsYms96psVEpyHswjKJqD9JXfNZBBeV8zfnERVWM5EaeLD2SSaYTivpqVuhQVgpxjFbUgDYTETeKb8vYgVidHR",
  "key43": "3MVkiFhsHup56yNur37Mc52TWNaZiY5dbym32Lcuq7mYmoKAxxd99dYXyJ2YfCavJkueHbVDs5JoLEUTCwgnV2Nr",
  "key44": "63gg74XHWLuuj8bfTkwFEremM12eEMXY5uVaMuhEk4HFGD6UhnukZ2MKFn5onnMNPZSANqYpn4APiS7pF7mZ18vG",
  "key45": "3SRo7YE8nwodB9ZGR2kNSrMNXysVC8Ky4gDCP37d6BTjpNDVwrrXPVS5wUdubG1Z36kLZ2CUKrToUg1CpGEZXLFy",
  "key46": "ujYwmSC4WNrD7nT9yzGfuXWvrTpRA1mKHNpfZnC4yoXP88eaVLby6DVyksQwzhWzVtnks4KxkojVneCGifCyr6Z",
  "key47": "57ts2gLjkZSWej3iJ368oK9uqHFCG24oWk8kF11E9BFiF26ZUP4vDnkQcP1LTytzjH23e9pL4MpHEGMq6novfgnE",
  "key48": "2Gxp4DT51R8cLEwhpnHZCmrkSSUu7dtWyMhw4gPnsM9vc7NQm9Hfvp8J2qPXsoYwJD3cXH9hSpajF2bs6zHam7xK",
  "key49": "26KhukJqVSSViXiiytvA1AMWsS43Jo4oPtgb2jKgwGqUPLt3kTJfEnGgq3hcgy8wpY21NXwP1RaPrn8gUZ3HwfKo"
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
