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
    "5r9UuKM5LDqXTeaGUmdwwyLPdupZUFhaNtNdZkT8fG7uEzu2Uvfhdqx7XaM54TJkp59jLdM5M5Y4oULsknsNHa7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47jZYTwa8FV4dRJZ6YaWWsF1CgYd7gC9LwWm8WRCUh7bTiwTi9TVEHeq9wGEW9xSAbbHhka9TuvRzR1VE32mRezu",
  "key1": "3LAw3EQ9DbfAybEfwevjEmToTuUiKoWAbGkv55hEP6rsQBNHiFNgWdZzGMqTZ4HVSySiPjfVMzUiSashDapFERjK",
  "key2": "32ybUySpUkzbJKAck5LZw8znXLQcFJMWvcX26XK5dPZ2WZyU9t4ZoFf9kTJowjPhU7jHrH7Z4YWzmex3v663S6SJ",
  "key3": "31hzKb7gG1KL6nrXKS98tRD1nCRR42eHptrij4vYnkM2svezvYQJZn5yRgf4KtdrEvtUqMdPPuiPFGR5iLc6ASXp",
  "key4": "CWstvDiVfXSVV7iDu2CEAWbKosUN1CZN1Usy4DsmzbxD2Nq3p4qV2Cjkc94UzjF7wem7B8rWPNpu8ZF2XUt788j",
  "key5": "3Wi7Eg8m8vzaocGx36APXo3qUcm8wEif6uy5sUT8PMkjBa8MU7uPVJcjRJdLE5ViibEUm2LpiapkeBhMeZVRRnCy",
  "key6": "2nn4RU4kiM7hMd2wKjouGuKbGRN66Wnu8ZznBCjh9KPBqWMHXgowSXEt7u6tC7wqg4gWbjUVU8aAjGpj8Zxibj6n",
  "key7": "3ceicVSUfhVXAH57GRM6HhQGAcUDGXKumzchhWpX6Z5kC72PjCPB3oQBRvHG5wrXUHwCengEr8xGeKGQVagN37QA",
  "key8": "2ndcCN4DhKKYErcCnaiVsQVYtCmu9DAKjpMeVuymnaSVKKiaiB4LGC1VmV4ySSe2mEPjbaNuSivzCmLwmjxLGvXF",
  "key9": "5WRPoSpWzoCvxN8w2auXGmmXDwf6vmBQUNmu7Exv6G7ifiY6hVV2BpzEWJMcT7EBcyvWgLUTzoXkitGrqzyckJ5B",
  "key10": "2CBHUZzzVjDC5CDN2ShUbnSvo1NantKKjjEg76naZ9t1ua2BtUMXhUdgZTSvsB3xfaPdc2a8EUyMVZZRWarHUAh4",
  "key11": "64QbRGweRV9yut2R1xtFFjtD9i7strB5ZtcrARWcF6q1jkupfovA9tNhXda65xvaom5aVVbDN6AtmmLrXLTeej7M",
  "key12": "4FG5WVRCQzWwGo3UsPy59ydUwngkrBZqT8Uz7AcG7BSHCkTjZw7Hto7Etgwt96iYiXnsCbTpCoVUf9ydccNZpaZw",
  "key13": "5vQqfH6YWeL5J4hSDuF9B3dR4jtX1WEJSzQpQ359qG1BxfwroDL29c819ZEJevP9poaZw4zQzCzqE2g56Z36U765",
  "key14": "3AvpU8Bxvxr1kcb5B8nDMDu6xrGhEKm3rbVTR5E9yX3tPgixqBHCwftbrFWP7BNfaicUwvFycSy5Q46qKwTeyUW5",
  "key15": "231o2z2tDmiPwujWc1NiRZKPj5Z1B7MKdvyvkWDbartB1QPJgy9qgK5Eq4dyS6XdXAdN4cJuyTusaMeepNFJX7Nd",
  "key16": "5yqwgZn9k3hFBa1bUTrQjdf9TEGXwqb5hKvFEv85rSuptHgYPBbmNER1SZTRGokrRjzRLWq7UQCkS4bCDvyTziY7",
  "key17": "26NVCfACH7jGY8M7yMQbA3dZ2W49FvNp9bkgK3yH1wmJEZQUzYCpenFnr5gRprYCp7p4YiPRUdPWcH9VdMMV8WBj",
  "key18": "362hWVxBLTeyULiFws3bFk5ETSQJUNtFCpUf52hyvXbNeAnu1Ym6db4aMmQAWxNEzpoctSUrvtH2niZcsbHdn8Zv",
  "key19": "2wfZYHB5hBd3ejcUfLA4qPKCHrV6LVtsPub4YfCkEyrVS3PmmSNMDs812tSiunP1YLNusE5cxcr45f5Tci5Bo43J",
  "key20": "4dRUbQtsJ2iDnexfF7WzBQRbwENy5dGL7FttKSMLNzrZSkTBZWcGjKcybNv8PvwYesYnrK2sFSmWX2KwBySGEKjJ",
  "key21": "3jHqoG6h8fLqJbQLK8fM2z7C1MekW3qGj68BRvJYrkvFfLL5gg1P1m6anWPMbcuQZAqaxweSRdKRG5ESM9Xhaun8",
  "key22": "5aS6RdgJ8qm4fQGUkydNbGVyyKSqYLAEbUsdoz3pgtJdGPEQnKtR3kaSTPDhMRx1kQcGF53hmnbc58ikqyNecCgz",
  "key23": "4kgFDoREoH2mvsSbxCmBrmBHw3H4iGd6DnE18bsAyNg4o6gT2mT4NTdDkV98Pwohj5h3YzHeRadRGCGgbUS6mAhG",
  "key24": "42LAxugoQ2GSUEw9kFqc77dmgUqc93RMLcxzN5Pa7r36vqo6aSq6e1aPCSYZZKF5Rkkckm9jbu44Vj8XYNzp8Pbi",
  "key25": "3JzKegp39xQuhCAb6GKugtHJeMoCvd8HBgThu5B2YkwuiR2ftXpTxDt5tpZyFokDPxgh1SnpMsw2PnbjQ9Qw3xLt",
  "key26": "v2xz8tFx15nL1BByrAvoLpw5UD958D2UT7aT9kk5ndzvumtUdmDtEbw27vf75aKPGpgW4ZGyUnmP8CLRzA2SyMh",
  "key27": "2NAS9rnQ8toECw84DSQGaqdcTYuBkUA6LNQsWJ8FPvV3Kbg1yLtqy5rvwUrHKn9PXbEwHx2cpTJqj1SHtmY56LXR",
  "key28": "3Qr9cTv9WxY5ZDFdrJ3mshvEwm2mcwtQeTTR8fi3iKbqMXepr6gE4sBdwkJp3e7n2DHcmk8CWSZtYUsG8E7cTwcB",
  "key29": "3RAvAMY48MzUQUtVPHo3rSJDFGZ2PE2h6jYKUU8C84yJgHCVAnHxX2gdpDVvBwf1SfR3f9DnCnQEs44ggopNuH7W",
  "key30": "3VyxLqBPaMazsPDyeSFx3jWmcax66T1em4t5W1DfhDtRGsVbJ4epVAnqRTTti3P2FyJ97zAjTd5niXrfdKPbBruP",
  "key31": "2reCevj66qYQtw6KVvuKXecr7irf1ooygmwoDtWGj95ocB7gsv3AwMbLXz6KGohk8S5L7n6Kiqzihm9dYpwr7Wpn",
  "key32": "3Ftx8VErdzUFJKJ7xiMUc9VRy5Z7ft5H14GDWTMJUaRrMgzTkjBDTwj8niay65YSEAtmJfWS72H6JdLjajGDCb6J"
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
