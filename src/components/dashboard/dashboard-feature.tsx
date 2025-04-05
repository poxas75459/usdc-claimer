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
    "5eJxbDfK4w1ysAoGQyDpAS2XR41dJb8WN2DPkUZkVGHdjuVyR8aqqqHDELKz9b5Giz74Qtp8pyUwAFFPeA22PUyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUCYNxTKkB4vWYX4JBpQsyxSs85kPBkFMUTr3DS3MZnMih3JaULvsgE89TfbcCeybeCqCJTfsPhxkNoVKCQgpXy",
  "key1": "5i6hqvADRqzU2JoHqfJMeQoiADWEnS2xgtcUnPZsSfUcoYWyHXBnFXPAx1DpS7P69Haq4GyKRU8rsKe57JfDNddt",
  "key2": "3md1QDQWtPRjNPviwT1APWYVdXUVbdMuXhkr9mq5q6XhoNUWWxU444kQKJaA6bjdUJQZ8NEpQ4o2TFvjzWxkU3yr",
  "key3": "Rs8UcDSGvXRzCAt1nMby7tKWYXUUygsHgqypGxUooFtUg7NV3j7LuGjfUzYH81qwmcmaB7MwiEEyAcVTRKKsY46",
  "key4": "4iUn9FtVhKBH4z2PuXbsEuwvUS1BPVryUXdA7uGWprzE6Qov3Y3owvCjyerjsUcSXsaSYNrgUjwHUCEqcxgiw4D5",
  "key5": "63Fvfm46TYozbpeMzyQutdakBRPEVFHbQ9iYPMQtpHYQDj3GAo9NdCLjjpHADy55vvLJUK82zex4EsHbV9VuUrc",
  "key6": "3oRC67orwxUDHGfwvcjMUbCpSzRuMs2557ueDQXBQF7kZNrj3oyHcZuydMy8coH9e8rRHaiGkmFznSNrZK7cDgSy",
  "key7": "HXzFKp4MmkhLA8TRbyKtnkX3DenFA7KqFrp7G2LB6wPupg1WhH5PggTYWie7r86LS5H3GF5RrWBmJZvCLb2tbym",
  "key8": "48rovRdGnAmssQxH2jb7cn3ji3n7P5AqYd8pc9APT6pTBCNgnAehpoHtNBW4oTEVS9pKwBe5p8Nf2iu8CcSSw8N1",
  "key9": "4fsk73GwoWwckPkUiLav8zonAmWDSBVSr8Ge169SpCZtqbvt8E6v8VjHWXzyJjBfZ3iyJZ5gQMqwUiQZcArmLFmp",
  "key10": "z9hdi6bFbcSUYtTZNdfj4CyJ9aBP27VZLB7Pvh2vTCrrvdCtYjj8fHW8c1i7AyD3kUgmkE9EXecMiDsPxVTyJmL",
  "key11": "47PTEvJzwrepbwcmRkWj5ifEHNdw1ee6X2hRUAUoVSdfzWLPaxpn3cHf21ag9hL2FezF6dXNHuVNBrFtt9S2w1Qw",
  "key12": "45mpoD1rzf4zKfwpSGA1ZvyrozVHonG251xicfpPh4jWjzwF1yes2XmaZJuCAyG7zvLm9hQx7fwKDcgf9NLBi7nP",
  "key13": "5CJKsbaASZx1QSuwrFEqReza8qKzbipcCQ7CkP7d4ZfZcAp5doCr94k42JHkcb2QCyKWZbbyitrfcrujVACeMbu9",
  "key14": "65HXUAp2RTgTrrWBUS77XDgirDuruHHC3yXnedeYUt1Vzai3zJLH8VQmEF2DVvGpNimRFe9sDtDB8Ad58LMGwavv",
  "key15": "5afCXgC3xSYTPmmjoZkxMPp5EJpGxBwJQudawhWg4yrgBXXNkiDDXAQBascuhY8Y9VZk1e5wsrXJxJFoeZBHx7Lg",
  "key16": "52FP3BfkvXt72BcYsxJd2egrpm4UvC3iYmCYZxxBNkhnt1nhpxJGRfVEjmSADqQqTFJ5XDCNW1bWqtbqarHueLJY",
  "key17": "5PZUEi2Ny4vwBbewoDaj42GxGkAGDrbKnDqck3dkvunHwYXuJUtBdtuLdawGTSs4tY5Z2Nxk73QmkCDNf9YG7xEV",
  "key18": "32YhQqgSkL6w6jqB6ogg22xHiL7tetPusG2yX9zRJda9xC5Gndy2CNMafLnfLwUFszD5xfqWmiB7pBoaF4HQUPUK",
  "key19": "5Zo2B5sN4efC7WBrxAEww1rN3VK4a49naN8rZdh4xAqmVQkEPkj1cUDQV5Zk3e1pZJd5JMiKmoyHWbjtNUkjRy3J",
  "key20": "HABWbpddXUecbA1SRcPNxwzLZPjGE5SMp6s29ZJST4xZzQsCx6red3ErAtP1oGsHhDcWK2mQvejgePwE2N6yiv5",
  "key21": "66Edq3AyVBnUT9uZ5MWkvaqZYZQnTyyTyisj8sQLRvcjGNAHQuNN7y8XDzXdVtYC9DkhwGVJNU8Kde5fHvxvECot",
  "key22": "2RLv8wvVEi2KHpz1dzS4sdPWM3HjycTfp7dmZLxoWk7vRpAYZ6bGFU4fwHAaDd2kstvaUtCr2HXkwYAuMqxwwzyY",
  "key23": "4pLHi4s9YwqUxtDAnFXAVG3MZiaLCG1GtugQeVQba6ukQNU73h5Emo4YXLYs2tZw4ZRWmU5JEaMXm6jaaAmsPsTT",
  "key24": "3hbxUTkv4474CLxqhAZW11DGQm6CiJ7wgmtrZyoGCQVJUFsQA1zi1wz4j8XECCNUPd868Db6AmR1iKVRxFuSJwij",
  "key25": "2R6bgZ2RajbnXyT7yjD3quHf5oXadv3sL71nAnZQgoiD4J7pyoVTGssK4QnS8v2LKdUrbLXEaS7P7iU1CVDqhaok",
  "key26": "66C42JWNE2vGZ2THNtKoML58CDkJqJDHSPGzCErx3e35V7P2mnpnZQ519AVz5nXcn45zEVh8vjZQrXFcQJymXHfr",
  "key27": "56WJgaHouLSs7CgVr8ichRn2LZdCA5VG7nhFWtLLvKprJdfQ2beuMnRKMEpgQpZNzz5S485Wfa48dffywyiihvx7",
  "key28": "TUCns5mFJm3QZiVmPbQNUWJfyPE9eLksLpmQT7Akmeq8WjgNvKHXhNZRW9X2KM3E83mKByCaZ3BqHxQbZdWksyK",
  "key29": "3GPXcahZXgW2TbnM6GYfqR5LRK9rqHgQtJWKkr4WdVheQ2ph7cqGg6aTuPBUqX92X8Atp8HNk9pPG31vb2WffVUU",
  "key30": "5dG4ga4Xc6Sg93V8viP68AHqwFuQbpYRHQu7LZKA6E3zgBZpZBAecjeRGd2D7fex8CE17XtwVWRsnGrhWFow3LzR",
  "key31": "NdiS6AGcUYad1pycYziTvBwpWHsPVWF5frmyUhihcaKtjGCHS39oLygBQeWWg5kX8YNdfcRgmsMZSVWzCeubukB",
  "key32": "3RmXu9qcrBadmgVKjHmfFid6o3bzFYjWXzDuGkiQAC4cX9JPdRwuuN6hQj71X6nR1sgHui163FYNWnwkZ2cPnCYP",
  "key33": "63eomyZoZ2cDPhxJSfiNBB9VeSH8fD7e9vUp7XQPhjEiGUZhwFFRbz6XUxUkprh93KQFABvgU76oqoC72G6zwZiA",
  "key34": "J8dSah4JokmazdNaukfpQPw5bXfs6hhPYGokGjeBsq71nGL6D4FpxCVw36MHby23ZaLBesaPJpXszkazhmUEoKs",
  "key35": "j82ag59C167i22WCzucpuubBd1WaqE2JxNWrsh7EHfFHXCYCmjVXvsxP2gYAUzKhAezdtwpp4LrypVYNDGNGXR1",
  "key36": "5PtVCy6EadkxRJiSFeTVUucKioi5Fa9SFKA5z5pi7xYTENJXQXX8MvwMbmRYG99AKbnbvHpwGahgvAtqFUReB11y",
  "key37": "3dtwMmLG8zUw1VEyXmSQmzhfDFjTzGwr6KZBG4XYAxQa8JSw2oWemphSmVAoy1YzL1QPArFNXgP5MJMw5N6wK3Dz",
  "key38": "4qzs1MuoEgAuUgoYAFbmko3uNeAqQcoj7uKTPPsiTgY3eRoTobGzHxWJ6Uq989boc45GKaRyteL6jYgVB1fZxhEp",
  "key39": "RMsWqM9fHaTX1kQw2MYpdsu7JAaoopxC487PNxBY3Ltr9NrKMfps2vCJGjaaSBSK7kckjxsdmDpEkKepVgjAMZQ",
  "key40": "33zuuH53KQg9fNWRfmhaY9ubP35wnAwLKb2r5CjbUa3VH1RUYoG1VeLt7UKKvWC1jpKmtJnn8iK6uXKgrkuyfdzJ",
  "key41": "4m2zS3kPQ3ycqTWMFtGifheeUFTQs2JAH4AZQsMTWwGT3a2gQuhStAoKRDmUJPnAfCPKqw9gFZQMNCwgWKVYVn6x",
  "key42": "5b3oXYLnv2DLHJ6kKsbbYv92UvU414cYtWKMsFqHnJRKAwtB6dtW6ADhVqCxDaRbTN39E924fMnCSpqywVe6ypEt",
  "key43": "76KcYDrC8RBnENPTdH3Ch7ziVMEZjX6vfq46pQgktQaGHJCtxaiRv7z2oR2hnMiYUeT2Pshw5Rxh84LF2StdShi",
  "key44": "5QmjLU4oLw9ZjNuK25TbZdrtUr9ZTTBa5kj5QyCkcsEKrmVWvP6XgYe3oBfjty7xTjRpXjhqT6vK3gXjkRGC52Ma",
  "key45": "CCgBDKF1TGGrn93m7xmcJjHzUyoNRP8omwoZaNwow3jJDnUBUPCVbje7D3hGhoHQB9kr9YziDvcEc71V2sJzzpn",
  "key46": "2cCvA1UkCq5WXP3bs6ukusVcqwmZXPGa3hbSxgaw8roJrHJ6tpwCeTsWF3jq6MMs27G9Y7hZsVSMhH2dBzoFmSsG",
  "key47": "4hwcacckGVLnbUTcsFJkzraSyfW1p4qSeVv7AVHxDDUSpS4YxGN2Vu9jwAGV4WkgMHjcUTfHuuCXHZgSFpssDj1Y"
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
