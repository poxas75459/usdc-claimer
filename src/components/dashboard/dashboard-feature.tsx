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
    "5AGKYZnY3iMcgv1C7mNr1uoQ7N44nH5gaRMc3dEMyvcXFfnjh5nmiEeCjnAZBBEL42R4Eni6gKeE7jmMCd1su4tK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aMx4PRp5dHg5MtcN3nt6E7U3PPavh8tZSH3cxAbCxUufvVwsb2HZtqJPNEeptKxRpgQwsUyL1EJGqRLphf2dZ5A",
  "key1": "4ZmvGt58eRqnmeZoLqjrEtSVC4J5pdv2MaECxFjTDYiN657x9hBKk7rKT4E3Umh6fpBqTQ8umqtCtoEN3Th3o3ZL",
  "key2": "qJGPmJXhPhCYH9TN1ywDyEgfnCL5oBjiZwPTsDJMB8hyXURBEiyzR2BJPaDXDkhevsoW5WBALzYcetdxooNkne6",
  "key3": "4FAiNCC1sEgN2pw6SQ8y1Y2UyTDpvdZGKceQnm6gjB9QTXmVDULxCBihZfRPfTS42Z2i3LqYs3WoAAK2e8DAvTzC",
  "key4": "4cRDi5oxJ5wb4jffh2boLk3nuKJ6djWrEJVHiMawXeGdUhK7usaLscNSY2tZ8quCCLGcjbYmRbdomTZvZR5Nvn1y",
  "key5": "3pdq4urAnBW2JRmW8dC5oDXZ7YBQ9kWNTv5uwb5MFnrPVSH7d2Ysq7j7WArNB1c5J7qjWpaHNT3Dg8sgxR8TX4Bs",
  "key6": "4hbMKLjxYtRqZzvK9oT67p3ewPf1TEtbwqu1qAP3eJBC56KSdSsdLM7Zybm5ZGE4gCtwRcRqv78hZfQCX7qSsg6N",
  "key7": "3x4Lvwzq2a424dHWkkXPvR6DEvBPKjvsaCBS5hGy1rWCKAjF7U7hFHpVhrDzShfZg5msXKnSA4GDisd7j7pkipUC",
  "key8": "5VVSgYkstPSTA1oYMYCcHcfE1QczPGTbYwxNPh1mCbv6dHLfxGNHdEEiHhnyTTGFTZtsZVyQvw2XWg7KEass5Jsh",
  "key9": "5g7ar9FkWqGn7ZmeFhThYHgao8UesYqC4Q78JxEswG7GT3FQEL1Gpbiix4A242NX6mAEKu8eb4VDRDgnBZoK7YR9",
  "key10": "2dxdC4KnNFzYfDkyY869bLisqV7hsBMsU1GcEjTf6RGRDiG3kcmDNaWTnEgFQkpsjBouRU52p8mNFsHXWQU9FXUP",
  "key11": "32LWVeXWFVZP6MKxMzbLnkGqFZXNYt36PZcCAABeHn2cBnW5dnJ4a4GAnYhFgaX241qaYe1i496GxzWQj53pRxv1",
  "key12": "A7XC9HG1mVxbMHVLFQ14z2aEyGpoGuADJ5R5ZDFiwL3Fmm99CQ9PAYGysN3y94WZ1ThtW6Sw9GawBt4Jc5mSveM",
  "key13": "4Ahc5ZZVZjydPRZajuCMKnSFFNzaF7zfKLsPh9ggjJdrdVmtGuhDnqkxcvLnauZKZ91Tp7SFMQcNcJVLG4WFMjQ3",
  "key14": "4Ws6Hv3yTw6tLoC3fDpUqjsEUG7Nx4fJ9bKgt1xuwL9XiQX9uH8DtRQRosHRbQscGSybzTmCTgTPSykf8gosfuBd",
  "key15": "46VyYRnsvvCzYjGL8MFRXo5eYnU9L8KZbVYkSJEXMmkUWiPVhJZ81Ats9MZyKeAEbnPm6h2rqRuB7mh4QgL5dgjm",
  "key16": "zG3fdEx2XmCtJa4MZdesdN5pjJruEp8ykLYdhRueQFENG8tVZFpx1oizfsrRadqh75XK3En5YxBisSncyHUtbr2",
  "key17": "46yMeivcaZevVrD639c2v3UxmRBm96iGMk1ged9Uxo1hp4e4w5LUox4YyrdjTJ7tSXhuDJzaxJiPYNHh3J1kbewx",
  "key18": "5sGXyZAjG7ZfEFjqAm74gizMCPwXd9ngj3BaJUMah3BacRP3aYLDGxxvizicaUcPkeH4LJwEXQXv8BTDZHZZobhr",
  "key19": "5bE82SNQ9WcR5LQyyRNB99tqQybi2BMXD92ZLQoF3xTZ7FSE1sw4ToH2L1QWUPsw8CpkS2Bq8825A61u3QQwASbH",
  "key20": "5YGetduAgdvxt8RatXbephRiSYbnYgLrn5gRdkc9oLtRNDkTD6C4QjcFWikB7f79ouDErcjHriLgKkUHYxD8uzxt",
  "key21": "5oJfu3QkeMin8TjUkwreJ9XpjHqbbo5R9Z6NrZSw2hhpvT7zzQwfVBrDftFuLPUArgTMTvWBQAZ6Xj91R6idPJhp",
  "key22": "2b9rCyFnsCz2kEFCWemspZP5r1dTGwLKMxXcCNvNG5d2BBLUYMdv1qu4HaGbTMECPXzxzwUeMkMP8RVkFNkx8SF6",
  "key23": "4McXr5nM1cxRYuk39kq3gnGmnD5s26wzAr6GaEvkjvUusrABahoCSCZVzTLzyMwkDrMojsXL1vXbSvX7Puk8sjR5",
  "key24": "2SQNJ4BVgFQbbQU5ntcYue2FYxqhdZ1exG5y2kzU4AcgxegwmVQHsQC9QQXwFi47dsfpYnM9ubKYaTyepLMXyUuT",
  "key25": "5vRi3ty1f6LBq2zw2YY9nENfwQCyQunE77WzHk4CqGyiLdJC6s287x6MQ88AEy4M2MSvj3ve8m2oNju3oBLA1EVC",
  "key26": "TupqjNUuz4vmHMCmfiiBhioy8qYnZvmR5RjMFbLHufT1Z5UfdVUN9D1UWdZZp9CjugsoMtwN1VEXPyXVpkCTWcT",
  "key27": "3Dj2uqf9Mtz7WotyxFi8uDTMgCh5BWWV2pfujgWVCfpw6nETMf49Qizb3zXrMK32k8KXuQvL8T32P4wcD3mCLHor",
  "key28": "oBQs2oao6RoUM7uzKo54abEVXHeydvHKDLMoLivGPB1DGpxCM51H3EZy87RyAGE7JBTdaLqzPykQ1GyTpnbYbnc",
  "key29": "3Z67FUQuo8Zz2bSTGLHhEgsmarM9DNXxBq4QhqbrDDZAz7SUujs8Nza4Y1CJ62r24QJvMQzJ3SSv6bPnZnSxxpga"
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
