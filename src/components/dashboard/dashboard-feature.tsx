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
    "2EzS9R3gYpYzvsjBq9wMXjtjxLnJfqY8fVEdmtv8mFYpWW4waDzDiXCAcn4caYMEXX57Aer7NDghUr1fMMaBWD9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GDgNoFaevvryxtdugxejghJQgRLc2NAHsU99syARTCjwc3omi5FXqvGfQhKnBn6kEAYyhpwDtg4bEv3zyht6gRp",
  "key1": "3JR3bKiJEH3DvQrEpfnfDFVi2QFGANVuLVKnFTFPctr6YFCfYTz3BBjF4Jkhrqd6Ui2e8r9tepUXKehth1aKLxYh",
  "key2": "cWb4m2vhvfP9bGSWx4Zzrd1xjqfLprbNkggpsVmXN7DGoh3DXEGxCxUE47sNbkmprGxsdhg16rgB8gWbMXwmfTB",
  "key3": "2Q4tZyEDYLE9SSyjTGqbnscp73q2BDaJ5KEjizm7iycotzY7758QRJFNVBDWtpHEZ8j8PvQRzjDAwmC6iQLwX7Y6",
  "key4": "4b6U8LvLjVSEinf818ZotgFFuZEvumrwJhppUNw9RDsXZYAiMchcM5VCgg7ydAEJgkeojV4zWfZRXgEb59N3PFSF",
  "key5": "3PLW6WjKGZVirfpTdHW9sEPbouu39ygDtGWpDQkmPRsubCiYGkpksNG2ZF2AjVCv2PLaEF5YLLtA7AsaGVnyWquM",
  "key6": "475fc2kNm947MsDnCNUy1zkJuxknccrhbRmqwMT8Zx5qJqFwcm9mNEppLCmmyBuXgaUnCSDyZ2pVxSHvZeBDzFzK",
  "key7": "35i1cqEdamYbgwLrmSc4z7Aow4U8SG71EPiW7bnkHzKyp8u8SSJgVRVf9gkvoTxnA4p1uVp4khoWeADaESjdRdZX",
  "key8": "62uu5ZjAYAyugYJtvSZZ3yGXaMeUFV7ugnaZ76WcEqE4FULJMyXwFSdrVQzioMgXaz1DYW6iEHCzTUUovcN9u6yK",
  "key9": "3R1nFyujdqYEz6EUao4pidWYJDj5sNahWHyDWBFYbq1vapKtuaYPzLqxsE77AiSa1vk1gRVMGVsWvFo3H33euxAh",
  "key10": "Kb78kRfBACup3dc1D5SMzL1XQndtshwTcAbwQ5KEvhuokbARqAiWaYsMHhy5ncELYXErhBrnN6XNh2i3rcctMdE",
  "key11": "yyNiwGcx2W3GLdnnmobGdXsEg9KWe8QLtwX5B4L7wbNKBG3t2HjsvAbZfoDEvP9HuZJiL72vvrMjsdnkmHUuHKH",
  "key12": "3qT3kNMR8jWmcZqBGxhiyfbp5GA8DH9yYStWJD5J6Pt8znvSdQ9PotjoJN2MHazHEPiWzK8QFzBnepWBbzfKce4S",
  "key13": "NrsCCKhciJEiPnrzPUevDvVjf3THLHVUVSBVdan6oH1uCw1zSJrzQYkXaACNkccdGtYViU7h8pP5WPfse7ZkL4w",
  "key14": "67ipapbDrjy1WHVNpps1WRWB5bjZrRSgXHB5MJcHj15o9TKvatWo49cLLNpTxAA4mc6zEktcbrDAu78U83vfFWxS",
  "key15": "5oSUVyWLpuSd8XucsPbn6jAwa7WPtoCxVGDQt8zuczzDZWUX9GYN3PM45oECtuc4GBU8nM2VkETv1uJ5d9fmSPsL",
  "key16": "3pq1SU78ruyDHHXFPvH33dCEpG3na443WjYXDxQn3GYYF6gsEQK3gXAt1VkEp8Girpxr1H8okXENSZhRTfgrqXCz",
  "key17": "4B3yWbW69Ymb1kaaNpsE8sCj98tnNGFxWzUhGxwHoR2nwm3Na2TU7QjTiXZxnw8CWeDk1eXGu5xGTeHpUv4GLQMQ",
  "key18": "t57uSE6Xj2GtrL3X6FV4JZ2E5TpJDHRSFK5vVJj8nXC1mXvMnsaSGozrMEnWBBArTkdFH9D7sa15MAWdqFgxXzz",
  "key19": "5NpKSh9ZmPAhBQSxtmt7pqG2kVua8vxyMP5QKVseFFiTt9u4oe4FBJHC2GqEPqLY5RL5iRkQHWUew2ijZv89MDmS",
  "key20": "5vNu3zHevaaciNKFqc87HxS4fFDM7JCwhUid6c2w97xnvsANGKrNtQLxHtZkS7fQJCWk8FTZRG6A7ifG8N4WAXCs",
  "key21": "gNrkteCBd2Wwg14YqsyDMUf1cdTmaDEUBCwxSb324JzntVu6bSNdnUVNG1rYFQTSipFXCr7fGiaQWJkHLehy4Hp",
  "key22": "d4Co42kx5Bv7b4Kp9ZCWTYzn5Zja5LWMeMze3UTJLnUaTBTEUic7hGVkFxugJrWCjhgQ5tx3jpqbkoQDi844TVv",
  "key23": "52bju5XJDrGmgucY3UpaPnjmkzgm8988KnY7i9ywZaycWCwjxTmg9F6dmBnuC4dUSJPmKrHK9gCwBW7jZ93M4bMb",
  "key24": "4wgdS1cmJ9YfgU6xuCeV7d97gDPDtRrDEorMEToEJLth5tWsx3ViGe1gjKGcUoTBG7D9HmYefda5hvaFzBVYMpoh",
  "key25": "4gnADWaXbn7nXijc7eHVcHcY8hjdqjAQbiDDEJy37BVP68DPqQ6bQysPJoa1HjMaCUPEPGaaG6sFf31EVsN8tWKq",
  "key26": "BHLsmvMLRy1YJZFHXWVat8MjaJeq98wNVtydAUjJb2p5uKdyqGU42rvgR4WkPaFcGe7fZ94REFGBpZAEPucs31F",
  "key27": "2N1Zqw7KZg8gFfYQ7sLi6v7vW7ovxDjS1qE9hooM8SYxGUEaiWosaszFwsicZehKbhrrFXYrcVTvs2nWMZ9bxAdJ",
  "key28": "rjvnMerqRu9AhV1HrwtiwAAxEjh1EDArBMgJEFGD9nZubXb4gY2uK5YxeajwUHqyGGies58HfKtmoNC8sxkbAL9",
  "key29": "2cpGSuFUFCsQV1bUEDzBkn7hzE2xU1crDJmyLwwTDdfVPUumrgmwNx7GQwAtaE7KgqzfQm6PMYzwTLkkQfTpnmLh",
  "key30": "5UPBJaDVor4TWtymVdRbSmV6ZB25RKbeyypWJnA4qJpqurW5xu6tKBiiJnknAb72ZdYZoCv2PcGf5GQqGsNCwVHm",
  "key31": "3Y6YDzjMvWK3ryuPr9ynzEjVb2hCRnvAKGqFkD27eqFzrxBZVWSyZgErbvphKXhnoh46kjifMmNo5QcMkkn6VLb3",
  "key32": "tki686eDyKCx1fgG5E9w6CNPyU8L9Baib8HMA5wZzHTD4E59BZxZUBhPV92zn841JEWCEaLq1pzNg7RABay3AxJ",
  "key33": "4At5m96KfPHrqahFBLWPgsNaZcEdADABGwfAY7bSNSGPXSdTjCREykxKY8cWFywVPG9Hv199PAAdmvJGxCsAJEuf",
  "key34": "2iFGAZfaHuyZ1aXAJBazHeT6xpB9So2fnxKT8pwDWPsrknyMoVwg8FXMZrucd3ddKDeyp5hy4RuAjEC6gM3c8eEd",
  "key35": "4i3brMwCjND26V1vj1CzwDBCi123HcFKLunbED22BRJ9Xkjy812s2GcBvBu182HkyVt5WHiw6MZUCfyDLCVuhvVL",
  "key36": "4wyTGJvT7hCMJFCxSQ8qDeJgxrYEksWNVKWAtbcTHzGz1Y8DmNbPUecqSn94UDmTb3AGGgy5EVbigMJbsjgw7jXd",
  "key37": "64AZ7MDzb8G6nffqcEQkMiNEwwrFPByjPiWKJgSvaytt9hoCHvcgES3JUu6ddnEmBKdF9ghudBq7ooYEjZWTb5u9",
  "key38": "263oM4o4VHziHoPorFMkakbsidWyB7fPPQR55deoj4DHWTjhGoSfqQMUe2t2KRcoqbzhNbyKzUDaiZcnUxfZ1KrX",
  "key39": "3vQLz3PetqG5rGiNe471TVHcZ7xMEevs516xMGZJhTHcUEiQEbXnbFgFsr9ZR1takTX6epm1H6Q2prPps47YDxNM",
  "key40": "2hkvz3y6978Ajb3VDC8UCz6BQ8vGtr61jPJXXcgfqvEjcf4mj3h9kqMDv6Pm6dRVuYEHa4orPWQjowKh2jejvfQw"
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
