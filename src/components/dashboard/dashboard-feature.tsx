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
    "4M1xo5cg6dcQ9zP5ftdErCSGyTFUWsaTAaG65B4gCpbbYAWF7ippY8tRhu8hWQNVqCrp4EoaK2HWDLpsrfbJesGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zam1JyjecU3wCh4p3qcjE1w7s5SKGTfdu3BrBhAv5ri5iArdg9Vq4ko8ABpYDPgvx5GfWQahA8pqviFvLhdt6Tp",
  "key1": "39NPnDzJpizmBfbLrj2rxdL6sZq8T31TjXrxSA4FGxkEKTRygqwQZwaHR3aSs9osNZVuNiraaQnqUJk2nH48jmsg",
  "key2": "4PdHZ48vwPp8kesvXnNoRtoyrC5unmatFtXCgMQ9BwxphEDdp2KmMcKpcApYo9GCLw88fUm1SZy458Fg8aGFX3Gi",
  "key3": "5xXnKb3UKEZGXbi6JZqQTmVY6R87C3C2BzBzPH8kGLLTwSY9KPHsLHPufYYMCm8s3z5ZLQFSrw2rtVpXv3PhH4YY",
  "key4": "4TubGxygVGc9vi8QDbWkWvtcnKs5qeHXDtEh92QUoCCfBF8mbFo2FV3481UiKcP6HCSW8nDRX7d97EsWaD89HSFM",
  "key5": "35NXhLNWcThXajgKfovKyWUiVdsU7dzPnFbT4HA9mb21tvXtxDn2naL8BxXeCSvANxTb96ukjrw8ojkgf36AACf1",
  "key6": "5KPPV25Q49u9XqySgTWCnUh2zohn65ze7rfawfpuTbJqSfzVTkgcPag2f3MtNoTMBZMt1CtKuZ2FvrgUBAX8DZqi",
  "key7": "TUf8hY5tELQWYiDqxUs4tgmfKa9eyqqVPnyTfpkXjSuV4xUR9LVzN8te618XeqnsK1WjWWnxVTB7aEuqU76ge8V",
  "key8": "v245Dz1sf3huxyzS8fCwgFshrngu7ipPFTZA8azsXMHpE11SWeB4VRXCYm3eQvRaqVebiqKKujXhgVP7CzBUqqB",
  "key9": "58ht3KRRSYVv9Ce1473BJ96f4jZkGBiTfnAptD9dp3Vyy8tHBixvQe22TsUQw2DotkFDFjg9AVs4hLetjzciN8Re",
  "key10": "5a5PeBbanxsr1BRr815bL8Z5ogqJVRiL4VQdGwr3R3tLwH8WXByH4Qf8ThYCsaNEXw4VGzeVtoAURHYNsr7LFee5",
  "key11": "3g25NXJwsSv7LphraxPPVmXKf1HDiiyUaNkAb545L9x4yQxffHU389HAXKPfwE9DZWZrerTw1smuBarZgTxoVzdw",
  "key12": "4fiikJNCpJb7D6diPwbXNuhfZBQzB8fcwjENHdf5xso1LeVzBSJPf1NbdK12P1habXXqCRGuUsp4h5ZeTwWFsYAf",
  "key13": "5fvaJWBZUg7cPwSJQyZqk6Fdxp9bYy9f15rgGTNnCZ48PMHo5U8swJvDn8j6Ma3jXGjtwh1FFh8wgb9c6mpk5uSx",
  "key14": "3SZYppU1AEY1SvqUzSK2Zp4QbWmR6ArSZauiXzMAteGX5AryQJibZM5ANYTFLd37sb3A7ejdA7qKcm6QSecDhV1i",
  "key15": "9r5d2KH1PSFcur5KDvDzZPcJsgCCZmPEwmWVtu9e66XGHeMJduQmUCgJwrJaVhYWH4AyABJaECevUYaqSr5RtvF",
  "key16": "4AMoDwaxPDMsLSCf3Fev2tr5UzHAaUYtrEdGJgaRViAPBgEDEawQrr48ZdKK5yz1jRgvfa9cVvofWnzREq9ZtrCi",
  "key17": "4c4gp5J4rFvceeyAfbNg9S4jCfbnnz7ik6AkVysjReELCB2Aq5s6sYZi55fZmrCCfzbRgVkAjsQQy9HKN2nypoWi",
  "key18": "5BUtyvdwGCqoLg6J2N9QNmv9zhp2QNeKmNsk2zeJidW3Un9Kcw2BZZpwVjiqFM6yuM1taexcZqc9ByVsVHVHdSwK",
  "key19": "2vBWxmWcNnf1Az48PC6qQjpNiGo2mgBwzNxLqPC8QbGg2eQ8VrZTyTChKZf9JZCBV7iahA7PXQ2dMa72feSvEF7C",
  "key20": "2vSSDF71xKQ3fGYpQTRGnz8Q3A8Bjy2XtGMJQKSeJ929AZ7NP1dyk6TsZSaNQFsQvZGYmvR5D6nMdVvJr1uEUMAW",
  "key21": "39sfn8QnyUmaBMb8CmzPSyQsWWrnt9nT9VbUNj88CECnNwZQVP1XD5rfHMQdqQDjKeQHY5VVLgAXi7kUuFUFnonE",
  "key22": "5VyY3fQkpkjUJMRLbBxpqDaAdxsA94vYrWrt69eenpxfWLwf5Qjicwht4EySq1GGMg3jJE5NyXEtPePueyGQLAcm",
  "key23": "513Ypq4jG7A2xGcFyXPf8JnEPd2EjQAHmsMSnKRDJXDo8peFACNxQG4TFkEGJYHb4vkECuMFwoG26e8JvvpscbYh",
  "key24": "5HkaAsLyfAzH9NYrPKuxXGdm9HM3Fzzgz5pUsv4s4eoAayMnT2XdveXgegiwzXNxGFTcbNyDTRQVHY382wbexaZy",
  "key25": "5PkoECXudGTS7eDHpUhY77VQ1V5Kjq7hR3oh4iDoSvAN7aia8LLWGje7PVdXMrMQV3W3f7L38k4YMS6sByaHoDGB",
  "key26": "4dDrxFmZi63iCmRmor2y3MyXrjTpFz3XEBQ5K87M7qNCN8cRkHdrCVwaYc8yPaLUhEovUm1uLFfXgUDaJSedzSTZ",
  "key27": "3cwpXDR4YnPVoF7WVxeQSmof2tvBYHMwKPcNYYP6HuG9p2nCmVnG5x8LsxkRrFZERZ1wU5ooF7WMZveuUFRrJWYu",
  "key28": "5B1jDRo9f8xjmfUWkBqHGrsueYUodG6z5yFjNRvNHpAKvJp7hyDmvsWKoVQdehxFwLThrgftaFX7WcLRgFSfnHKy",
  "key29": "51TEbyo8qYSPjmveSLqysz1ktUwrJMW8yk39JZqynKvWgwnsiHZLVHoh3w9amoQGkw579qZ5n26tsnsWCkEYYAHg",
  "key30": "2VuQET1Pu6bbuBqpcV5ivwQmkuJ4ProoH8nKpjCPzB1AfJ7SMeyQ3swG9KjcHrkndpn5eeocAH9DM1HfiMcxWgDd",
  "key31": "2pYTBBop88JpFUxXVmdgA3cez9HuKVoD2yZSXeQ7uV4Whf2yyahRv5YYx9pP6iDRMbjU3v1fGYc4RCbPwK6YvPN1",
  "key32": "4WhzT9rBNq8j5NypgcQtQQEK3wjiFTnwxJMYctYgX1pb9W1EFAMuCLSdNPLeYFMhzo6hY5E9RXQHxzkdgGx4Z6uf",
  "key33": "PfSqcnXHaidC5WTj6p9bJmJWZFf4A9gu3sEqphBrt4GPwQNdmQ24311FBcGUqMdyYw5owWntZnf1Spfi4rQGhF4",
  "key34": "52fByXyxBttPLgPFwFSDZZhYQw7zzGzqxh4wnwpNgzpgdAv1Dhyb1LzecgqaWRebzL4se43ocunJxnT9y1G4H6bX",
  "key35": "HnDipTT9m5mwDVitcPU2ywwe1mmCwgfoA5gi4E8DsPv1A4DwotCDFcju9uMYUzFpYm2b7Etk71anPnY3HLbBPzm",
  "key36": "5j2JpCfSJs4FgfQyS9bCcqEtYcX5Xgca7jgu6xjd7STuRNzL8L5949yrM9rKgMBsEf1db2YnaCnzJBKGdbmVs8pn",
  "key37": "4q6Fiyr1HY69uAakzoJs4PmZCKM4cjWtsbx6VcShEz4BvEHMJtGTQeazUK8NerUwnTuqW9YKivT22W2xAvE2wb1T",
  "key38": "4NzLafgFMm1Y4dAkpaUjWsJt9mEUdgETpSmHRTMVk8MxJcSfUkbuVNXAtc9qX6y6aoCkFq9oDhFd6pqnTm3SY9Ry",
  "key39": "PSENh7dBGJ3QR5prNg5zgBu3e1nQU9HnAXZtCs7aLMWbeKVGWgwCHWsCRFMhecsRcbVFDL8rpmAKcyaAM1qWS2r",
  "key40": "4A2LvBbJJxih5fkZNR3mpyFcMtrVJuiC59juot1mFqaeHyoGP3mVoXUJhBxWcVk4EQZkAJTa67qpfAAe5mms9SJw",
  "key41": "8SA24Xf5zyMPcbDXdiAYnmJ8UTqghRthtyBtXbk15J8WAJm8ToxhLJ55GwPgA16b9i4dA4Jf3BjeDt3HBHTEgEc",
  "key42": "5yC5Nn9C6oKT5qXAGvg3CKGP1vtnLMG6pm9jXV86CuY7aGkqc4QqQMTyQuxJ9UU2ihqKwiAwhtQzN8LvFyd4aY6L",
  "key43": "5vF13Q9ePDaovp2sL3gQ5PpdbeGHqxa9iiE63MYiuFqYvQex634K3PQKSj8gsK74xvS7BrmnDt6QD2gVTH92GoVL",
  "key44": "4t5p8XdyBkZRuo4JZ6UHcLBAKRoxis2vH7SNBDDseDnM5dP2pVCdKphAhoK2bMhaUF57CoYMmfb81f5BvcekRmeg",
  "key45": "LF6pbo3KciRGjgkAKQrKCCTwi3cFQ7BWu9TwRznfQnfnoZqzgAnxsrjjtVW9wzr7mCVgzZ1zcWh7MHP8yfGxCYS",
  "key46": "4BwngPgRiEZ1GWjDT79TMuXKo5Ton91vqgx71jUCoaqJwGb8vDWCpmtBG7G3Vdq4SH4sR6QnySq3qnnBzF4Bnouq"
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
