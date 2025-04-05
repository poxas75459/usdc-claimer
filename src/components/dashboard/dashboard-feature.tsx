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
    "5mPcHiemzzhNCw1Bi9aw8GEBVfaFUFB2BU5yLzCYu1ppp8rMsYgCeiFTar5fjZacnDU37BAHg74Uo8VAyTpY44dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49NvgcGeyq6Xxn2keZb6PvocCGFaTmBS4KC6VvYZfdoGCEGDRTi9myFEC2Cf953HS2Yh7r9hFKrZZvVbgEXwRf3",
  "key1": "58CZgEqxTRuZY3o1rqNseFLWqQV47enXF5TM6nA8GUYUHpuFw31MVeZ4khNqkAh3LHo9zgtNhPzL1h78JMtz1zKn",
  "key2": "2SxK9kYUN6EkrEn59QSdTnc3KDHrWQBwxYNrWB2VL7zGVVz7szHNomcPfqGAfhGqSm2yp1nRpqx1tyCSRrjYTrpV",
  "key3": "3D3Hrxrq6e23qdjRNCMnCBSqtm75KB6sNoGn3Dfd9MuME5njMsw1Bh18m3D9ZeYFVVRDe7La3jtJWxa7vAfRs1yx",
  "key4": "5vdgCaNXJLnpfDPAmFy9MABKqr3E7bxPZ1G32u3rHw79SKKPNrXuvxYiZSw9weX6jrrqaYiaC9Mi59QXhsXdScfG",
  "key5": "AxadUKsqWCBZPxsK4QJnEvsEVTiwFeHVN1Gv2r9Kd7jGAa1SaAV9dtroHzHU6wD87Qjf9zTBfAXNsq3NjWmjZek",
  "key6": "2KML73aYZjaTDkjfPc6vGMbDi1mvPoYnfPnUXzhRErwsfoueWSnsUdJ6nLt7JsCg63MdryWU1YcX9QvtQf1AkyE6",
  "key7": "3CgaMhqgW6AZG7grrU2CMVtwwtZAcyhXe1z2u7GQJT6B4yMnx3CVugvRGGJgit96aEnMMtPaMU5nzUiJESmJyGFk",
  "key8": "3iTakAVmszRSpBtjB8zdUcRiMZK1xQRH4KLoayXLasearFwxoii6h3BzaQ1uVGqspcQRcVjCMTe3EMgSLbZRwWn",
  "key9": "4utSoqAqWBbMCWWpjawSajjVm41rVpcvbTQmcrYrApC39pVTdqf9k8bWvi7BzA2uiaHmB6k2E9vh5bWLYf3DXM7w",
  "key10": "5WLBK2MQfpnFNXzqggUSgweWw4s9Q5ShZDLdERgATGsoowveD72p3H7gkrjDz3ZpBPBsKTzt3qeDavmh7yp1Hez",
  "key11": "2nhEceyxJSSS9emQFaQvvf93ye9BKhVM3CMwmJZfn9K69uMeVwgzAtfqQckqXdnH3BeGHGGHzHh4PyJtyJZhZSdd",
  "key12": "3GCBB2eStwQwKbdTzKqZk7spveer4vgEGX4TYKd3Nwo8k22i3gco7NsCHSFca6KYTCGa8NToMeuM8PYpUS4wkDdY",
  "key13": "53RHdPpEG8rNoYWPEUQYYFKW56CqnEcawmS9he6TscyZSgjjR5SCeaMjyX27UADf4w4RCT54qLDkj8ZJ6oB5Js4E",
  "key14": "2TEWZ5wD6TuCyhqkF2jKW3RTwaUzZa5Qbh5VAvKNJ1Vfpzgodao99eeYh2PPXu1CrZAea6BAqYbWgSZAd8V3RSKy",
  "key15": "GXFzppEMm36PRevzu2syax7Xi4zTsijC6koyRizGBo3yvqymUtzwKZXdsBWuAWM2DqxpyAVoeS4UmVBsp8YrmMQ",
  "key16": "3PcU8NdmLfFzAfPjeeMCJHeLSYV5PUaYanSyafBV8VRDsA1p1LyVmoCkwwVqvZx55GnGEnLRZjW8jTVKgDsoA5Nt",
  "key17": "2kYW125saPuuBqGQ4p6vovJJTvdqP9rKE8r4JpMoeTPQRFjsPDJBD2skxpZcp6BvmZA2GYjS6ZHYATbtonMSj1cv",
  "key18": "saMcjUtrXGGo9byFspifMdLEW6tdj5BQCpB49gbVsqQ1HHkLRxM7T5EUntv8HTmZi2bk9KjuB58TyyS5j6cDA4T",
  "key19": "3czZGhze2jxwBZSYdFyqARLaeJe9jhzCvBTwAuRXgZoSvHuMahhLaQQNCBssnegjsrpzLpQBVy9AKuUytWNUFVsS",
  "key20": "4ZWidsCba7vUqG74ECw4wZN4rkwgRnCfnqS6k2xvczhZXnFwrCwHpZthUbc7Vi8Q3TKsbaRerTCnRXmnnVWYM4eM",
  "key21": "3fs4YwNFgPg3m3gwtF5ofZKcswyhfbmfMjeqUMT39KsV283YqbG8r9ya81qSkrq9PEPqcfEhoxJuWTtcnfb36qZo",
  "key22": "358CuUpPu25HY3NmrAM9taTLEyKZFMn7RCmvvXzZHUJKpmz91D83BRHe6kcSRrWGZfFwyLuzeJrPffzxy1aWa7sG",
  "key23": "3JjQf2PAfaW6LSYGWxi1QP1kqdcXzUrXxEArK2VhiHdodVYEkZCEpydMiVYPNY9xGqYALJ1EgRNn7ZK59dJV7Bag",
  "key24": "Htoog3tHC3qxJCSNgD3hkRMw5dUJFXMgWmh6BopNjmo9BfXpLT29SZ9FvVGrzRZc2w4jGPvRKk1bFjWEVg9fS2Z",
  "key25": "4cVnUHjzs3DutFSJwbpgqzNjAaBqQEEDGfvmrUE7MEyCXbtd5vXHjKQFvY2fzhc2dThY5Dco8xZjah5L48Wkyt9a",
  "key26": "426feyW5fkS4hGSAUPrkrrHVWrwpa7BrLHrt5wkJD932cwXAPtUnxZ4aouZbrC8iqFG4TVmEnRPLhrSWbvzwGRiX",
  "key27": "5nTwH7SdCgwzHeeTyYp89yPRnTGUmgZLqP9GnjyogdEmyp3co6vSe8Kbe3dcr97EtmNJWgiFwcSAWz14NASUR5qD",
  "key28": "24uUpUTURt8MbSKC34qJKYEfuZsfNgVZRVTDWjp6eMpLwmT7vM68Xne9DUWTiWJ9P5HxoLSprYNaoCRwF3xZC78H",
  "key29": "C8hdWZ9EZVoHEFm8G8ALdgamohBynkRcJ1rKKJ9ptLxtogrrLLeyvx2Re3JXz9SrAbnJefM92vWiYK1ou9TJwpG",
  "key30": "5dJt9eGH9Z4J53SERJPk9QPEqBH2BVnisyxs7ytjUnsxk7JRiZfhg4ztSj47wigffDK3EwA2naFdmrZUkSAjbUfK",
  "key31": "5QrDTiPzoaJB12WJVRE1NRRoxczsiFFgvdDu6V6mjwbqCqWBS59K9ULipsbSbfoV51jbD5wZ6rBiHoKuhAwmt8Ae",
  "key32": "PWALaprEELUpykQLR7HnYaYAKw8CGb6i2NhLd4tTEpVyxX9NLiaRXLKKt8SWL4SZvwCP72kLt3ezM9LF9DqhGRE",
  "key33": "2s3NDA7YSvGiXJeko1SjQX9eDdenG4zwhBQSsMWgNbYeutYVevpYR7bZckZ9ni7P1NcNJL5HQbu38QBc5WEjV9dd",
  "key34": "3i6cJYTy84njgYUY3eiLLrDMiWgwaWJUNEKhNSxfFYC6fTXfVzsbovb7U9jXqJNac1fiZPN6jVTovgoQEhDk95W5",
  "key35": "5jp4hXZSL4Rv7YwvyfGrJTLvNc2KwbgE3LoSjUt89V8gzFzbKN4HNSKCg7Szq6Ln7ZNouD24tzjQohXycKioDocU",
  "key36": "4K5G8BJ8WTpz1C4fxLCR4uHXtTYBPbjoNbfpB1hFcKTjFvPoRinBSHb56PR3QbZdEZYWRZcwLk7b78it6FH9w8rD",
  "key37": "45Bfg6XrHef3pZbUonYa2XS6ZhhqLRit45AjMFgxs2exyDkrb6pRXgh7W94WDq1UGQ7Aoh3oKbB9aEuDCyCo1tCC",
  "key38": "4EbbyWdeCVjSY4NH9hXZFq1h7p3Ukb88kpteF7eUvv6wBFpR7xeok2CGAd5SKz1uTJu3KhhRUzKGpN1ehBHcNZEr",
  "key39": "5BNQvJ9Q5NcUJKEQ4a34hJJpd2h9dGnjd6pTZ9QT4Kwv8ZdDYmCLAtVvCFqgK4ePkUDibD4f4q27VzWMwDSnHzN4",
  "key40": "3Lff4q74Z7QMbupkXFnv1Z1g6edHFRh6PG1wbztVdSU8f3sDAhm11GHVgZxBK3azkpEMwN3hvCDkQacvwSUc6aJH"
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
