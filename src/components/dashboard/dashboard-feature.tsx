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
    "2tBbLGhumS72yzi8Ty6N6pG4mG8AD1XsV7DYx4AevnvsAyGMdsMKkA5RU8w77WngYuoqD33LQ49HoRyJbXa4XEE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyXpsMQUbh5ootF35oWMo6Do1bKM9RaxJ8gXX7tzmKbMntfXRyaUZn7ScSUZt2TARMwnzdsooZTVkZFto1jW6aj",
  "key1": "64KhgdzGRSj7eyVRs4hxbgPd76tUFW3SZAgJj1rCWNZ6eTGme9mzT2FM6ks32AZRw43ZfWzpuZosKZMf39aGcyvj",
  "key2": "4NEkJwxUm99M1eaDJVPW43d21r3isKdY8cXWAAkGkZJ4rxPdpgsCf3SAc4ZyexNvKJfWD7ZZDrGAcWFYo7ifDbng",
  "key3": "5mw9cDxgFpbiTELmbjAagXkAkf2rYGfMQsPm7VsbdzCoRftFXkRE4Ta7cv6YkAxp1aAwfeVfBgCaegmn9QAcPQP3",
  "key4": "5wpPftr74b6WpghR9PRZMoLrM9UwBJk4Q3GPiBVELk4bmeSjMkUWW9VBcJbMAo8YmMwxh3Fmym9rEszDP6gKEc4",
  "key5": "2FJe1qZvzBj5fiAhuut4aDgyCYjy6rhSVm3sCPraSxt58dhpUbcYStZyrX5j6vreFiRFYm9kaGEenx7PUpHHZxxX",
  "key6": "2sH8MXNvDRoFkEWaBJR7jkTceYmkw3HMz2F2Eika5ZDq3s1tKWKMagpCPz2T3RvXhE8Nzy6FVNe3a69EorcJQRZg",
  "key7": "2EgNV38KBcdj9nv396vnGtFRtGS6SbqxNxmFt6dGyMPqzFj3vfbqP1HU28PiEts9PpGkcXYsn8JQSqYsgvzeoEQL",
  "key8": "2YZSBJjVYZATboiNYcfSRpE41gcLsZWVCH94u4AxscvZtsk8mnejP6Fx1ExFgPat1YcnRvmcpGc6VNu6DfJDT9kq",
  "key9": "cBUocVSboEfxQjucmHq2B5WAA3az5auMUmvkcx38DFaTur17LSDzESyPMCPktSWane59woEBRPKCh6W1hhVL582",
  "key10": "2ZmNZz8JJ6kwJLkwRJbVfVTQa6cFDm6rNG42a4CC4GLemm4qrYgHLMx5X5SdmWzzNM4D4YDYA7ELtXYECaQhT2Sz",
  "key11": "3SjyKUaTCTsdidCL1EfAW28dXkN166vMZjSAnamdPTzkFAUaNZ4PaMawTV9jjfcSX1nVsjxCQL2XpUDDdiZBmgj8",
  "key12": "2qqgvNMZTmNwV3zyJZuXyGMdNkyqSWiKWh3AZFJsgfJGYsX4o7LeXKxhkBbfE65JYd4Tov6Qa7G4LLrNM2desZ8Y",
  "key13": "52LMtnoh2F3YUAHKE6tcGhkkYis6bQSQE3YeKtKEPEwNzysRnWCMWCmrAWgBvWqms4q9EafESEKmfFDLALiiL6yf",
  "key14": "52AU9QZ2dvXjTNWsY4PiBbR7tA9JQpyaVUCookk6m61CEsBE9qiZXcuJ43VyihG7n5AmUZLyQ324TBSnsqEXyFw",
  "key15": "493E1Bkg4TgsiqcdvP6PWX3L2jkhsQXH1k53Afaz8ykuJQSVpu5arz6sSPZhSndnWF3frnwmsU35H2aeGJE8SRKe",
  "key16": "3VcJ3vuv3BnLCji269Hgo7Lo3p4FEnoFedYPp3YkJA1thskos6N6247YGFSQ3eC3fgSimSeZncy77tDvbC1UpMxw",
  "key17": "aCGotrdU2XTnFTeRjU8SoDYQd1CJW8HH9gj6TfySzoLJAEN5Xv8UBZnDYx1KGUDHfNR4yUUuStKonD7ysJ3uoAT",
  "key18": "3JxNUq4Gkym2CijJbyr2FgfkyQLTdeyryWjgX1iSiqN2CSxcN46wQZKhyWHAE1mBmT4h3BsoYPXns3gr3uwrfBBo",
  "key19": "3ivWsQR3BcuaLAUjdVbnGMSPnegzFae2Xx7PgALb2hRDud7pJg94iWPrZhAdx44r3ncEKGKQL2sVAh53oXcNVpfX",
  "key20": "5pBRJSJqLrv6UjgzjXBdXER4VQsLe96qFpx7X1ZVkNHaVdkEHEvSUaxJ1oW5XVTZcsTedJWSL17f9rEvKrZaW4jH",
  "key21": "3xocjj1PVQyTK8uykDACErCqf675R7UuxcnmLKUuRrFep2TYHxyZuMZCNsA6tXv14vojvMRUS6ZJGZAetFgHkiC2",
  "key22": "33iMexFuRiodAL6Cj8SapZEzW5BWzpjCedhV6xbW3kyoVPaHCvLVJaz7wtFEVEWq4gmJAkJE3c2dpUZUJGrKmNUE",
  "key23": "65vtXEadPhHNn1GSGvVjo7gQGQfL4NVQBDFqRTBPDg5tTRjdGiECehW9Htx72R7WvF9UprsLAH5bjU4mwiMCmuJB",
  "key24": "Xhs17mvF2PBtk7awaZWFuVXcnp3J5EV8rb8XGDxZr8Ku5QBNmtdTxdPjpN8XH5PVoeS7SDyYjbwcvyf2KP49cLE",
  "key25": "5bn2XQqoFRrh3nWqZu7fZrjTriS83U33nFEEnapXXsrV1dhmphbgkLeGrDigWuR6DZEdNy3XKEhpFBCf9QyA1tPf",
  "key26": "2ao7wBQLtg4KS5tV4WM2PXyDzBsbVjoAgpfSYSazsD9PTxYGZ3qp3njXRGJnh9hSrdfvYb7uzeQbdqRfs6CncEvT",
  "key27": "47bmqi8o6G7hbfJWNFJpQMopVUyDabgQPhXnHoHY9ZijcQ6pFgo35VoZ4fHJhi3UdgoNJCymYdwukxsVN4dRgjnY",
  "key28": "53a4WaaJe3ju7SRxrfkbWw2G7P8kFWTFgcRg5w7Hm5sxpnWrpFaHu7Tc8C162A6FhhjxXgye3wisDNZXimDiRm9S",
  "key29": "4MrhHX6AZRExjGs6uEB21y3FgRLDLjsxfKRad3tgY8HgZGtWbzxthdLTMp7zzEyT6e3mtwS5rwDo7Ehbz6FyAMGG",
  "key30": "SvSrvjMscdR2vdca4Sxf4UsNgUbd3sFiwGz5SojsvVDBugNRs8heRZof4stxbKyawTzvwhEtcfAS28ckK9uKe5j",
  "key31": "4g7CKezDhzynEtcd92ALsgh9ao7bqyj9z54uFcCaavtYXeDxELqF8YRRo9fJWpeqHENuu4q9DLPGkjKS7M6DvQzp",
  "key32": "43hqY4o1gsXzoHjvXkyq8aBvVBU78oZRKR3nsmNpyShLVMoBuwdWpFNb24e9th6PjpPyC2WuB13FdeS6XBdo8d63",
  "key33": "5VMP4S5gVu3pNRMUbHK6Sb6dTfVxNajeTkXyPdcAhvckxg4jW8AeoYgoeGkQTGF89hhh4yGPqnoVaGzcVhtbszjs",
  "key34": "27nbTZXoA2LJSXhdYJ9JPqyrbSPLbHtrvYMUqeknmF2E2Rye75LGMcQ3xyZLeLLMF7g5ELo9kmHW5HPARq7Y3tp5",
  "key35": "2wf8gDVoWAZAXqDWsSQ2EFFGm8M92z89hJsh3627366tjFdG3HthshbRKaqKq5miSSsYFR6K848pPaFkAf4wb22",
  "key36": "6fmJGmdfUS2u4nxKuPdheSXCNSr8ZUpsJ699a3EPN8UR7y9tMMuLujdZNH8L4FnG7JTG8SV8objeV8LY9FrtMPz",
  "key37": "4Ungnnokqy36Vt9kyGcF9BNjga9VUsiNeBNYbs6FmTqe9k9P1VkwodiURjddCqoMPNnGJ271JN1emRiTvA2rA5TK",
  "key38": "62QfLG1a32q1yHm22N1DNye2ptA1yEqnNs7Vb7JCaMVM3X6T2xzeXSdjJEdVm1izdQpAiGBzPRoyPBUcibfdYgjK",
  "key39": "3xBLBwXAGPUNooBrdRnqkpv2V2GxtusfigrbWiSM6iGEQCDF1TThoKLQZn2s98TnySpBtFtyVq6WrHhAKMEDbwne"
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
