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
    "4BrwwyRdbj8GLzqhtSxEMMMqQzq4wYRnfcpTRFCiSveutaVRMLsetHaaq4eEa7PZrfecizXV9iRgcMdoXP7etYvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GL4dxc8MLw5WT3ET8zK1UmEt5MUj69zeHuGsWxDkHBXNMqKVVEnaRqXkhr7YfcsMCxUH1kbQtXkgty4zr7nZpXG",
  "key1": "KEh9dJVByUY7K9JYsvm2smSDRFjcotvzGaDY7WWprFUrt2HMVVmCY5xnWxf1Jc4GtSVvWTcXqv9VTB2nzMpX9y3",
  "key2": "3jJ6YiRBfoCsfxXoL9yyaBxNoXxpyEzWfEqyKVywXgnQoZ3DwfCaRrbXBrTeQJ2MV4NZS167J6UoUVFXUk9giET3",
  "key3": "2K7Ct5xFhJenqPzS4qLJqnRqbXGr96YZD4zvD9rXho31mKY4MnqaPj6sJeAVTm7Kiku3U8GPtmxQRFCbPXtbGSGQ",
  "key4": "45B9PsYM4VbwAgzF1VsfKeufybqs8EaF2aKECqrV61xkTeHepMrDiXD35AMvNx4CdixPkCV7womceHJpMpdU2pv5",
  "key5": "hod94vTRGEMoo12wPdJDPkqcwZ8hAARyqDRF7QTPTnkrAimNwc9MB3dGDE1RfhZxpthuHa6fuJbEr1rvBV5VEvj",
  "key6": "EPRYe4FTSvPaAYWZGL2hiyZq3GD3BgjXtix7pdcR3pRAbH8SBKcPhTa2oWZCZX9dwpHksvpB1hTsU9SNq4TvZv2",
  "key7": "3x1ccy4EBs1gXvbcEGPnx2vZ2qws74XiHeu6SxQ66g1aU4ttzcqeEAPUPmFkGSLBvvfKz1VWpE6JWi5wE7YgR6Ua",
  "key8": "3U8hVVA5JGRRAo6MkPxZPGPqZ8AxcXbUxADhqtcLVZi7ucaw76DWVGmrU7yuPksYBxhcEhSBZfypgmkPGajs22Ca",
  "key9": "3UzPqahU1Z1qru7wY7XaFtsEXVwyX9bcKfPnRvJUpx8fsZL2zGnPezDMo3q6UfXKoCqZtQQxfky3zXSExanjiDpf",
  "key10": "5PD4nrPgNuiQAo54JingBgutED51URBULN53UkcURwqRC4am8SAYJbEj6zbWb85EQ4WkXDzk3R6miqJCzTmSJdqn",
  "key11": "5XuiohJGzixe2Nb39Jz2kkfoPf1KV1J7UWQQVNNmbrL3y6H9saY3xjgevKkjMKk6umuGs6VZiRd2TLRehQP6PzDo",
  "key12": "5gPvR29meTiJ2prXLzDSY2BWNaUKGUEDTkFWeiMZ373P1j33BRzrKSQWopzUCzxSfag4EkNmgjZ1vaWjekpZERXs",
  "key13": "4KD24BeiU8eWfQsVrGRTPjnBFUHG2wRNtFAyJw4RKEhcMzg2WCMySZheggxcDzUF77tXiqyzMLykciufTMZfrxto",
  "key14": "4UWwDg4auczYt8DpnUU1XXYJaaTWmy5hcY15JZMoakg9nza9cwjWGtRcpVKM7RjPAbkHSM1KFnCxkadDDcwqX89u",
  "key15": "3DwuNfjs7euXTZ8kgFk4Xp9BiveM6XDbcmXe1jm1GK4bfJ46v2xY7dehNGcQmRkxCpRcP5a7w6By1HciGcvzYHEx",
  "key16": "3GfkYiHDug6t2fH8P6KJQWQgU1tuWndbqBkhb4ReaiMBKasDqunn1FZF5wdYZjjc4qqu3EFKKjSWp289ZGtYsDUv",
  "key17": "3ubew5ZdVyrxpfAMEzkm9zGfs6B5wwBZVw8AACXSYeuyDoqbMBD3C2c2t72WR4Xhg8K7fp5mqUmYq9gTNhrVwPcR",
  "key18": "HEgt3J7TdPhD8AGfL1JHZoTwDh6bfUpx8atBki8Ge29CbXhToMwdwN2ECyYyC8PqgvAhAhnviFc2hxU21LMRRX3",
  "key19": "3fcR7EKvhW7gVkytjo4zA1WQ85tzZGi8PekLiXv2VmChSXnoGD99qtDfNCFUsgkJCBhwuxo5Ckfi5aihcPdjMoV9",
  "key20": "wSHBwyXWRHCfa1JWxzKLGXMmEvqPde61LNf3TNTTtK3VKJqYZdi6KfPDF6xeA5TrET3bSmS2R5GMc3bApnPDStv",
  "key21": "4kqVEkEPrzdVB2sWvxyW35nGdduqKTa2fbasFots9yQAuvMZhLomihYkmVh8rGmyfyZAooufJth2LPEUuZCb1KvK",
  "key22": "4Y1vETCrVBmPcuYT7LDuR9UuqKEsYdsNMtn8kcu2qDYbfnaUpK4aNBWWAc5MK4Xk72cUQJyzt8s2ghsWsygH9M1S",
  "key23": "3gJyxt4SAe6xpXujKyAmPx73XRp2Hwfpzqo6KsLEPq2hdhoaJ2LDK6nHuFGX3pFVDT4XAhE55VMqg29Zv7sUYJnV",
  "key24": "6pqnJ71v1p5NE6mhoPCRLnHH7Q7WwY6iEXkjRXi9qMYYKYgbxkiwT2v1dEWDoCEp2VYfXdR1srRPDnP8c6x6HpV",
  "key25": "JRFHULF2u66irviNbsSoEV7SfTYQu4PAFxHPFUvFrxtJzdTKAPE1KE2LP2ymZTQAW9dH6mvFz9UzoKU5AU6HXQF",
  "key26": "4u1bR41pDB5ZT6PvcPwjYu4iCZBiKvnuJdJo65nhD6LTi48wviBSEdsTKr8BtjD1ff7Eksm9ZjA4j7vmDRk19a5r",
  "key27": "2YvSdVMZqn5FSr7DBNoYmJTYSg2J1n41rqVUToJDTMdSjuajYYwq97stXU9WsBrfYPr4iKyEEJ7J42vpCRtDmiss",
  "key28": "4j7hPpxMQwwJHNm49WPWC71zNiS1xtXK5nPKZ7D69e3ebTH8Cp38RgpGXMNroHYUESQDuHyEPD4xaPhtjfbG2gxN",
  "key29": "i4FxmVdvWgnSTC2UgGFeHLTzSAjPkktVTHHMfMGbW1G7RnjCQHprXQNoHcb2CyFbLxP3ccsWMkiKy1n3P4khGpa",
  "key30": "4u2ADJGQeBumSu9gcDEuBYU9qfePGEHMsARPzKCMP1sQX1Shdpn7p9hgn24p6D5RUbv8L9kgUL9xHcnRMgYHqKaA",
  "key31": "3XoRV22CuUfgESPMQKN42QZsAtKrAQSikDBwmKgJJpfasj3mnsQSxx7jupSqzwAWdt9qj7ro449jqwvcucUzd5re",
  "key32": "56jQjMgTewZB1uyWk14jh4S3jfqk2nGWZucmMYuUU9g2z6HgV3cyockdrYZRVZY4A6JvsLsqXW4faNDQkkBjk7Hr",
  "key33": "2bk5YfqM2AUDeiBgJTC7iwkgTi4eNaER5reomoCw7A2Nzyvb3LziLem7qNxHmSmBmFPpU3RwHc3gWd2ZM5R5jwSP",
  "key34": "4r5oJeEooJJq5WccTeLMUPC5XmHV4xvy5aNXzEjyjZPE9KsuCfH6D1LGrY8pY8DrZ3cDbUse9VCZ7bcTtRGncCeH",
  "key35": "kwVwgi3HZLUH67SXdLufCXE2DZaxYndYsEZrUqWZxymmAJFsu9ATmDHt2YiJS3AMfRoPpjEtmvW2vd74yubeeaH",
  "key36": "3HefNQhXJDpqmmDnYULhxvNAkD7J2o4fK9sPEFTraRJ6xAZkEdmzUMd1xAz4vTa1gzoFMWJQCfyyyBgwU3Z76brR",
  "key37": "5SvGtzc8TsmfUED7RmpDz771BEpW7LDAstipw7jqAiZ2ah8atM6YLGBNRAsgS9qTTwXYqWqznEZqxCCtkXfHVuV2",
  "key38": "5zV4BGRhtUVc3Fpu2fsBXzq5rMPqagWq6ZF1hhzTnS9xbmQeJepaWHRUN4M2aPjPmM2pHNANEDw5aW5fACcmXyBM",
  "key39": "PRh5pv5K3vozsJisAUfvpdRz5F3zRac48LBgXPepYdRMwV67zJRMeXzK7wH8LuzXJK8beWNLz2mZKJtqH6SWkeC",
  "key40": "4vtmkxjBj4xuAgvs42W9FVwPDWUCVUNHAwkXpTNreLzyJSoAH2Xh7d9U4XiRavtBENy5KzztpMqjj9bMj7snATKX",
  "key41": "2YwpRv7YbcAeaVwVYYN79ZrgEpYw9x2oFwYYCFAeJdKsE7DPfxShsbULFoEXoBx323UXA54WrHHhFRDYPywibrzb",
  "key42": "5szYRUJgp3wDyVRPFvR83yWGuvmmNAjQocgZpQpwqQFjucBxfD7vBVkwk8QKCjs7uWpu7NQ7Y4KYuvSVytXXi7D9",
  "key43": "4et1mKWzkCpXiobT63B3SYF5i9p3ozD6KG75uVAGPYeJ8kHyu7GFJDF3inEVeMdyhuYGXXNfYLsCGumoJai6BYvL",
  "key44": "3jhEVqLpFy2LrCRM3X5U6JL1HQqbbwyKD7sMxeWdV8FrHinJENfrYi6egzWMsLg55gwmrtVpwdxovJr5FVQWnPCX",
  "key45": "5vDbbgS1U6ZrLcWNiRFCMKRVMBVTB1bka8j5efi1jC2Agz8b6T6GG1j4kPC6q12LtRgNCcugLysZRWGnTzX8NLHh",
  "key46": "5h8bS4ihdVoohTC953bH3dQfZc7dYHVbmx3tnq76oqBjmD3xG91pDbBCzGCyrZFf4njL9Kt54HWWB3sjQiLP2HuU"
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
