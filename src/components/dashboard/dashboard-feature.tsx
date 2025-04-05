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
    "svJZa9y1tKnMJDAqn3kyh75wZKPLLLsJUBKYBCryFLqcSvvWZLsVABtSY15g4ReeFLzPorKnHoLsEFAHNTmFtnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uGmfxBjAfeRgiAihoZX42MGcbiBjepqDCaNyowmw9rfmXVnbxnhJUeEGSe7dkuUmjvtqwMeupQZzmw5UUZU3oie",
  "key1": "3WmUsaC39nEZaLRHaTVcP8mrvoSBg6rySi8vW3BUFWgZndYdUcQTNXzQ55rwUNHGwqShiuNTRVGJGGT2452W85i9",
  "key2": "64bvDSSuRSUjjkK4cuiKCP1NdjEu4xNgPsLo5YpX1kEZsfYskihk3iMwZvrPmJkPdmJisukg2SFNTorxfyA7LQpB",
  "key3": "5PMkFa3qkQgMfuVHAfxV6mPLGgTksQwJFX4RHK4UXrbYsJqfLrnfSXUcXMoYP2uJzSkTQh7M4wLkP8d1HcjptTKm",
  "key4": "4bTRdp3SboPwH6tgGiR8iBNRc9rXwvZvPLhnXsxEaXpgZFR3NTiHr7Mn6pwHVz9pWxBajJaqkL1hmV5ijMB2CRcq",
  "key5": "5JaPdU3BF8Ups2R8Er4aTBGhxXFrbiJA1kFHxP5AUfy82iWtLRH3CFbnPKb8K3EV9EBzpnfauYpPididNhBHBhjJ",
  "key6": "2WphGn63hc5yM3tZFAuJF1T5WP5BdHtwQ78RsnAd7VxtmZnWYbckkRsg6M41YRcvDNAnjkzVh1H7JcmNUeLTh532",
  "key7": "3dvU5LUuu6Z9ye9RrFDwf4d5xjYck6Z5wnCWeoZZpZ3fgHwKRarcuAjUpT18bVkK1MJmKaTeFFdAjXfn4NGEY3na",
  "key8": "5aRPZ1JDjUZDZSN2e1vk1hejGqKqSYzQbhAdGogW5TzensR3vkA1AKzEgyWJ3RafypUj2XPVCRz98CAAEYf6NvQg",
  "key9": "jC6fvcdGKXhUutHMpfoCnh584JH5QnVtaMSmBPNF6WYPr75si7DNT9q6S6nj9gvMqUhVCDKaqwcXssW8REcP34W",
  "key10": "2812RGkj4j1kWz85Eq4nY4NeM9qXAcJRXriLUjnfVt43EU4sp2CJFSJ7wjQMNrN2AwToFU4qaP63KJSvTQ2w58xh",
  "key11": "hACC4K7xkCCsfMxtY9g1kCW9XFSRpo2TudN6wjuEiQSXinjYUdtZPKMoWFvPX4J17XcbLV79pAqR3z3rskntVXQ",
  "key12": "3xbja2QSoaTm6VebuQo62Vb6n2VyaEDGyFLwj5mbDZFgmPBp4djh3uir7uddQm6S7FPgJ71PPFSsooo222kfomTb",
  "key13": "NVosDSXe3UeFjo27D9997Gmip8DSDbeggd96CdKvYeEnB36VoUNMMtJ3HE14UCdKvZxkXa3sAjJySo1zbH8Fwhx",
  "key14": "4qsa8s1EW2ckxwhadnLtVKiyV4R1Q6XVAwgB3MEgDbLUbbRJVvEiaxkYaPxurBLEZtCwNLgFPRWe2szqQo9pj4h6",
  "key15": "29fpQwTtp4fjPatmbNWRFkhBpCxCVZda7hPeuP6jKxbq4aLuEDdyrpWsnMFtKyW5utLRQ1tK8dXKkWRx2DyJJtvn",
  "key16": "5D8Sp26Rh9axmjB7Nfh8dEswEwXzoBNrVGE3qBWujzf5YnizDu5ncfqpngYTyPeYYAPfihKfHMv4ViWMKG3Ean4e",
  "key17": "5UYepqmCXzS5bpcSC4wMEGEHZm47Qf35M2redPjUEsY92vvNEmnkYbGDL8azm5vuCABLZhmjWCMkBET1zsYS1TLp",
  "key18": "5SruAPMiyPFvdLJTJjpBGMZDUPbP8GwC94BtDAXDRFppNr2HGdxCe8ZyGeCT9NvKcoS7GbAf2c369vMrDrF2K55k",
  "key19": "27fLvduy1jyn62tqamyVAXBrTDzysQLd7iQ3aXvNd7DgoiubZrBM4EtSLHqu7wvs5f6QpscpsMdamFf6HFGNYbCe",
  "key20": "3RBGoRpAytcvWGvYmbMM5rB1MbMrCRqGEjvvdEUth7veMVq82FcYVuXqystX2MmJ2i18M1QrxuBm3PJQmbk6t8ky",
  "key21": "3XHokCiPn6fkekE9dfsHUPptKKdxBStRsw14U8K4RpS69eAoXkUYZbbw2bfafepf8niEzA8a3En1jHWwfdzfhyQs",
  "key22": "5FLzMxgjnY4tx1Fn1cp5nQDvYDUunW5Kj4wGujtvSDifQ98wwjRcQYSN8j1XAwoz9NVYYyTVU96M9Pvij4Lr6Uo4",
  "key23": "rm91tjtbMKvrDqH8E3WnwW5LxqRnLody47vaKzr4zsNVMtP5KpAb4swHnPzMYhfAtNLKj2PtFTz1Vb6eVRHGASa",
  "key24": "EjdBdbcYb8W86y2JLucm7wDcs7ZBoX92LEBRdrfXEG7kUZSjV2mVhoymESCgyzzCW4pNdGVkhntqwCgequXZoMR",
  "key25": "2Ujqz5vkSfoLpySsgv4HhpuTTsv5ZNpbVKrxr3qdKcoA6rSi5xqX6XfLTGjcu2obTLHmeqx6eACxcbxojfJMqAMz",
  "key26": "HXR1H6eGDvZCFjgwpEvJawMJQHFcH7rTEodGbZ297PYS7fcLDChvTYepEgoWDved3T33RAybiTuwzfcemHLzEhh",
  "key27": "3RGbzBeGMASHoCBFBZN5U3eiDmFXSrQV3cZcWAi5nDHdeZTGZBoUTU1KBSUERXxvLwsnbmCQT3oa2XeYJ48NDVtV",
  "key28": "3s89Hy3ujTfT2o5F8MoXBJoNp2BZBjtWrbzWZfN1KGhJZBeHAcgxNFijpFstz8WBPugrfJQm7sCuDd1svSbKziCE"
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
