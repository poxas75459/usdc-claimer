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
    "2uLmdbBBHSicgGa9vjuq8xgrGyLRaXrRJYBVsrs6qLc9Eemx6h8BJsGTNYNLKUzn9L1bEJf3s56pMuhQhaB3x5Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52oiD6cYj8Si1ESkNgAegVA4zTzA4HR9ht2JGDy1EZFWRqk6Lq5i7oWwx9Hvp2gjy5Q9YTW9RGgqqXdb6Dgoqh9v",
  "key1": "4U3PieXrkzpL9LmwGE3jqCT4NBPcJW2rSECbhwnaB4S65NToaCnYJrjeYftCUpwan4pryYLGMMekVUVRJYGr2TDA",
  "key2": "tND3FX896J1c7BmYxSrMMs1RJKyCWjy4PrMxwwvDcQQMgEoqFK7n1329MgsLkdrdK4aXW36WnAvHYfxiSCbUurr",
  "key3": "58TVn2kgR2Pt12ynKHpEZZRNy5YNmLqdD4po8ihsWzXpcZWfcKEW6M9grv4Jfwd1jBjNxSTS2bPkYTaVeAYimNVa",
  "key4": "5U8chwfU8bAA4S6rg5sM7PW9kWNNrniKp2eVm7uCjp2a9re7k8bMdMWW1BcnCUHAAhEvw8RMcQasrkRMLV5Mfkhi",
  "key5": "4SbpxyuSC4HriD1nFHjyA12pojgNLAvHgL7KQJuN4nak5N6mvvJyRbn7sD5iZwVY45xp6tHezoyChArijhYGKzA8",
  "key6": "2Gp3ULfc5cfAHrazr67vAViAXUduCitSn8Ck3ZAGmCRrKGWaAtw6YP3qEb3tPnJycKH9pL5BcjbzEnZeQomgezzZ",
  "key7": "5xJCJ7BAWGmAC3fhaDGSxh92aLrfW2QYk96KPuJ28M9KMtje9Q8Sc7LUMVaazP3oJh7ZQEDsVXMocWiewg48Qtq8",
  "key8": "5mkmA9cEUkhZWmchkr6RpUv9CiA4vJWBAyUSUBtiJgEVhCxTg8KNmz2isB1vUriLuMgkiG6qMZ6mJKvyW8WmJnzi",
  "key9": "3X8ingwNHNdDgDaJb52V2UwinCoErnMEJSJGCJonpGQuAEhK13dfuguMjdPTQ1sBxZAoNRokpDtyCY5sUdv8KHMj",
  "key10": "2vY43EUbDE1AkbfNWg36QepmnUZQctd5Andcy9XzYKzeAFNoxfPeRa8msu7XLJpZCZXTVbudLZTkw15gLDmUoP1B",
  "key11": "2y72qDthg3vt5Ttv2n8D5F6Vytw984kKy6uaGM4jPias1sdYXzP7a5WvYvDvfPfe6gS6XARSCd7bBEq1hZFfSoVq",
  "key12": "3nyeAA4d2sUTPvskSpApfLvc853amrTRs2gcfgEL89tCwc3kJeFA7uM65iPxKLHiPEQ8KmayEokyQ62VNcpYxCy3",
  "key13": "48xSieNrrdDiKF71uKZN548Q5ijjZ5r7N92MmwYQMMQskrLoKrAqBc3FvLVfuJQ8jw1Nux1t5tPy1vuuWXEK2d9Y",
  "key14": "27VW1ac2zW9QkcJMetnWFKhpmWzSwPWyPskFvfW8Dik3e8W6HWfRai5qFWSDhRew3Q5hYhyvkiSTQ1vsFuw7a8iN",
  "key15": "2KjQCVHxqV9T6mXh5ywa1FXkpaD23vnnaaDDi1HA19MAQDobCYyRYoVAkbBtLJg6eAdW6TtzyzhJ29MqaM5S2nW3",
  "key16": "4pRF7MyXXFQNakwtZLJzPP2kFHUXZwPUz1CWumeZgGEA2piXJDC7vQcbgi5gMbUVHeTDASVfJHjHGbSjvNvSdMjy",
  "key17": "3DowvDxxE6Zkgc9jL4qyRStZouwSHebgndPHycd3gAnWAzxFU4KpWgfpaJtkunHMmjQtziaokv837Gvu41jeVt17",
  "key18": "45f52Lfwx532hfYcVr1r64FSEee8xBiN63ams4qhGhwJe68wNWdwafEaExC6MNQHfBKSboJUt7nc5zSh6mDuV9vB",
  "key19": "5S3eu8bBXdLqBaAzU41eormHvDiWiRy2LSyL6p9FGkZ8fqeSAjStXfShLqkHefe1nR7kCV88D5hopNXuQ7YxrNDk",
  "key20": "X9KZYU9hCjKbmMsmJ3pPFYLeH7mbDKK6mchEvGMkedD9xVy9NocjFKDLFYZywiMbJ1ySTm61GDaSB9SqcVfzFnX",
  "key21": "LLka7mktSZMNdqAuczSzoaKVuedxpCZfDki2vGCdKaLvQvjw5GguoGU6aV61YLWtq9Jr1TZbuUNvaMou2RMTwAr",
  "key22": "GjypzeCmYwb7NvJA9AimXtPDb42dR7V41awVMT1ENxRzBnS4Z3WmTpD4RtUDaScJoC5TN4jErFKDD87f2mJDFf3",
  "key23": "Dt8U1emttHodQVMf4LYC5NP1MgmnpRr3p6oq7DmFDcMAfjn9yor1ND1x5ZhqwM7EunPB1sDshQogA2jYZfPftiN",
  "key24": "5tA8AfjToQF67nbiUmAM89vaEgLwS7aFG2CrXWn9qp1EY6hojswYa3xJ4SUufm26Yc2JioMq38JwQh4HCo5KA1Nd",
  "key25": "WK7Eo6WitmxKEKMDDEi6V35hfEdLqH8gTNHAmaXV44LGnBZWZRKhGM4bTAv11uNRcf5t8DApar1boE9nVo2aLbd",
  "key26": "nycn8CnUeReR3qjw2pdzjKea9qc3WSNhejTRoLudoVAPuPqmFuLp1AMdKbYZFwRdCpztyC1DMKFCmwAXGYBCXbP",
  "key27": "3wMFSo3xNyqoaeLsuG3W52hJHyHBE2PTJgU2TjsBNCpLNgmhbX3jdFmncPVWPcw2xs9NS71U84MMu1x4D4tEbxs5",
  "key28": "3r7ZvnwWXJ9AmZcosyc3EvPX7pReNUuaVNXZxv7rrW3ykaGKsQyBDg63C8NQ3PUwvZo8rbKPp486tXeLTe4zZ9eh",
  "key29": "fWLMEhPwjgtk13zMX1CCc9wAkRRSCseWJRSgZZKcAgiGDgSmiZVH2ufnNfZEb2x5T8S7DPmTSwLzFjMnbsQDm9K",
  "key30": "59Am12ZH6B7ehrgMNLHBjLnZtHnhmzPvBrkXPif1NYSqz8YMV4UXbrXGpJFdngn5EjaWd1Q9vZ684vTUreL44fSW",
  "key31": "gFeSzvhGPnbHxZtLgzPVtVjNXc8k8ocN5gR573iafVYtJ1RrTHge1chAdN51GR6GkkvNNJm3dAqaTinuSB2tWd7",
  "key32": "c2yA59q1pwFcHFPatWNs5HHQQpxFbidvCCGJkmMtER5WR6xKV5TQPCBwHxcouwL4czYwX2VDe7FAC8JahF6ah8V",
  "key33": "3WkSHCmp5UzSBgXPDENGfu1b5Ay6iyJTausSsn5A5KctYRrBjsH3pzeg29zdQig3yV4TBMKS9Mksvi3T5kmeEHmd",
  "key34": "47XqVZwWpopB5EnKULkEg7ovcDMBWbKjbbyNf6J3YYSDokYeXYvzA5X6pWt3bt29jrYrsz7XUC5d4Gbbwjbo7Ux7",
  "key35": "2Zbx3cjssJsbiZvwWUBnsTTETzAGp4BwF8Kpp3voafktT44oMSJU6yZofhLhS3mLKjxEiVu2TRSzXU2VBHM5kFeY",
  "key36": "3j7wEcNwPFwtwEQ6D1YPo8v1myaNSwmwBZ3t7xyWDptaTNm3tCoxJdapFMczBNbmuADksW8ySdaKHMDjrSzNFf5d",
  "key37": "48NGAVfz6pi7krN6hTVtEnbgMqC1JLQ8G8bQd6wJY4udh1hYMxFTG7sTpCbiHPoM8dMC4yUWSoHMmpwHJ54NfDwB"
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
