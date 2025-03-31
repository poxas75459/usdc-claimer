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
    "BsY3XQZfsFYtz9BC7AStH6nmn2Gbsneos6P3gPf555JmAGwobpof1uACvj961wz5sAxyWghoozUbkjQmv1pTaig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJCSVXfgsxattvDwVFwJfYsu5ide6nAZsL2sVofuNTDiHZMS3T3gBuD9vjsHtLE7TiFuxyjoqu7DDiNQReCqVqT",
  "key1": "5ckGLwbagBMb2VntCf9cfWY69mxAoqejH2ZLx6fyTNdjpFs9MikxScw9kKnWrW3QrufjAKo54avaR1U8BcrAmoAc",
  "key2": "4WRwkAA6zra5svUHGfxXNS2dpUavEr4QqWZpviDmJawpVVBLcx4vJc1smFiccwnsmvHFaoogFRouZEQbSewsEY3m",
  "key3": "5Ut89aks9QuZdkmyrnGu8qVR9cMeueaLhCB25tHvZVCGiQ17H3SG98ooJ4UCbWKLzsvQaZghfUzsAK4Ygq7Tmqkh",
  "key4": "2zt8vMTfu43U1ebUQCyTxrWgxPCPfeRZogGU87uZDD2JPg4nKg297N8rQwXfnwkPyh3VrdkDnsKUXLyQYtwnCfQt",
  "key5": "2W9m6aJUfuHYeNTBgumAnttbPDqCkun6eXsq1ZUywwW7HoQ1foiw3f3ovfEUC28N2z999LVW3gBEzsyZFjRw1NJD",
  "key6": "2CTbBFWFAip6iB4RRANMQrFAxu4tJ2kwrPhEXn2zFYzpbE84DtugkrjSZfmjUaL7XUzP2BUeA6C8Puv126TxQBxV",
  "key7": "giZBocbYdDb6Fx4YxFNKaJD985ZLykjc8E28EfcJ4KTVSStCeK7p5qGeCJ2H2thFSiwb4Yosorx1RspaMk7nN97",
  "key8": "5BkDtNtM6aF1UEdnavxcAmnby1S4eyhEaqFccTvcLg329TzyrS5z8UAxBFvxJq2JMUUdhk4a8vgKYQ6qEzM9Sdep",
  "key9": "5sq6HtHyRTgPhPExhw3ZD5GNC9KgSGdZDDoEcFMuL6vfX41yXGVhDfDek9ZFgyANtLCateKts9kb1EK3fUoWANzx",
  "key10": "66eukSWyhzSUZx7ivHq4Rt3nSt7kXa2XApU8oiRZY52uLk7iYfKrVuf8AcAYWvYN1vSjNv8bCrNaXMEMsMQ34okW",
  "key11": "24mcbtge65jQb5jvS7qxdq1WCQbDsvZKjsBVvt5LahYpCBqzYS3BSdKTDUNBCv6inUDMJaWZyk4YqBWbRiCLPBB1",
  "key12": "3gpL8WphZuWbc2q1hnRLhEvCC2F4iQmXne5k6C3yNohZJ5XKPNEmTTWP849TJJELqz1p92qSdG4whEiXq5dNQ6x3",
  "key13": "66H9ToNJSxeoA9X7anG9KvPmuNi92xHRAFaFRcMAcm7C6c11LPgEmDYrs68ovJhurJPLAShouotpHELzCJYp74gY",
  "key14": "5YE2tZgmANwoEEmu2MQvRd6rFshi1gvtR5FqH6rgwZsS39eKzFDVnAaqEoSoBY1fnG7451GbrnpPTntEyPDjSvA9",
  "key15": "gDFxb1awf86RQgSCCAJEa4V7sJU29Sqedw6bjr6B6pgVSvftn3yCpNRM57THzvnGHjMTrxUjh94tx637RWKSJCF",
  "key16": "YmpX2kz4Q9yD47BbkpG3YD3p1CgdRqdtnP8V2sq7NhSL4PGwWyCG9Q9biGkCL5SDU2WfMfegvbAN6jkvmYtergq",
  "key17": "GFbDSvkfCUapP979UaocjkGvCG4VStni7DeUuuGq2AMvzt2E8Xyz1XGPPVmdaJGGxe1BaBUDLq9ALqUBN4sw9gb",
  "key18": "rtxmEUayuqD4YwbBP2wzLAXxJRZVez2n5V7oywQoV3RcKRPZ1mSfme1H6DP4bvKCLpAtYXnDmrMesgkR6yARj7T",
  "key19": "MwiN1Csto2qxMn2tToWbeizAQaSsqccQYW4LZHsxkhRTvZAdToHLWbsPdYz8kSoEkoSxKbzEaeyP4un67Nuz1Zr",
  "key20": "3t3g5mTg7pMYf7dtXizL3Bs2yyNjLrd4pEMvbLQsbPwUHTa9RkysEzV1U1A1x83eTt7GBfyGk2bRVya1i3Z2MVJh",
  "key21": "4y7EJZBB2xa79nL57sz7C8NXSFaBbxVM9xzJpS5AdoQXRzsVT9qtjFBFpWufGWw26peiTsnXo2gRTgSKf8sEknU6",
  "key22": "58ceRAHmHToMp5GiS2oLAE8oXYkqPX9Ukc9LyxeCJnyYzNYTP3NFSW5h67jkKs4VHnbEnqzjJBqvE6SRNt3hHVBK",
  "key23": "3tYyjiBy4w9jRsMfuVEbe2cEbdvLkDVVzcYri7i8tMXJ1RYSZZ2sNwXUtHFMbhmNCCEG65KXqio9LomccYXeCqyY",
  "key24": "3pz9SpdMaV1SkdiXtSpZA5dmQ3topBkBTzbC2J3oWF5qngjhA8GFpvyFvgqJM3aajpTGDZkpktehWieqNYhz6dN4",
  "key25": "5shkjHDE4aSLfZmYfqJ1R7kaJE4i1M9q4qbWrBXxedE1suzKHDaKAGcs8Se6GSGM95jRPFV5Bed1QWNZg2j22ifk",
  "key26": "5kNUHX3iYwHQVfid9CJS4gxcZaTSiV9k49gVLNN39ZEnsxJQ38npFUkrWcHbkUDTbLdhVxj3tdsmY3jQT7XpVMtG",
  "key27": "GMortw78hySx3TnKuYjbDG8sqC1pNPmeqj2AihviPQyn94mTUTnSYmxBsz38RLMiM3qHhruFQ8GPTaUDt3GC96d",
  "key28": "2sLL2HCjLM7CxP5TLDoQcJKE41dN9ESdA23YsXk5qeK5RSowXSPgfVMiLPFX4t34whgmRzHxuonwCPbHyWZHrRBW",
  "key29": "32ipZxRKEqcUw8z9V1yYdEMSfk5YSme6p7fbxhbvbi3pLR9iFRxgNB4GnkLSBnSU13EhK4CkX6bD4A5NnHYMPyfG",
  "key30": "5PFKHqJ2Rka9apMyYUrtpEMPkwvTp4Bj7S6dLoic3rZCK1gEZCTnrTrrtPTcjhGki2iM8znm8pMq5bt6wfVdKnR",
  "key31": "37FpAE1qKCUQgWN9g7qgy4qJdiuvJq5qdUXqaNRjcLw8wr94QKSGYhZhmC15y7d1e2YPfmcnXajpkE2TGSbvJBia",
  "key32": "3P1fEBxB9Kn2G1jeJsRmWbb5Af78jiq6gtuf1tDhcaQ6iYkQsR5D8mNSRBVaeu1HaEq4BRqCs2dBAEUUbpPi3gtW",
  "key33": "5QQyg3EMUoxzpPpBmdhM4airYRoMXKxcnwcC7CsUtUWbq5x5Xvy67bSfuj5r7tuJtv8yohFP9HGmezFZLwUqeSqP",
  "key34": "JCvQgQfyxABu8EeyvrWsdQXEPYjrv3J3xVrYUP2UsJjvq77vkZCm8CGHwevMWLhCY9J1KmLQmTT56WsKvFvZJFj",
  "key35": "57JAXtC83e4dtTMjkByEDUcWjsYTrwsrAck3CWTDb9aVGrEkF5wsue4pyjuUo9YnAAgVLGpfoVpDkjy5jepdAPMc",
  "key36": "HoBYdF4EzBdxZwBt39C8DTrTNjq24EvxyLuLronMkNnEQ8XyhS1TKStNjcgrLfjpBte9v3kfjEoMvHLrW9DQPsW",
  "key37": "5mgDSxp5s1sDBbsZgYFkfTUxFazCjYWtvFyL2PrXfudF1ERSKTsX9GkCjsJGCq5tCejxiRXJ5r5GJM8uXBwYPmHf",
  "key38": "5HRKjHQojPs4demWeQVenRZoutVWGbqxKeYhGGPbwwPp1H222VrAqD4FrHi27fWXQnBuDC9VH6A7ModW4r7uXLyy",
  "key39": "5aPW3r5ggkfCgAzo9ZS6okwSSKHeHcFdLP6vJTpi5trQGPGopk3kwF3bZoB1B99nB4vvRHTyeyewirBFzUWR2ZpL",
  "key40": "2CVPG99LHR2eq3CQsMLm28dbkBKu8FPxcn3aXWAKJ9jKKj7c5RqHQTcxsw6CmEKXLYzLK6UKVLntYqyC3HqP62E1",
  "key41": "44rByFbnNqGiRX4BEFsJUwhqB9a1oFEwVGcWspGgarYAw8TJTzqpo1nBmJ8oAgtMhTwnkaLgswVYBHgWB1PYTrzm",
  "key42": "3G5V3bEAMYqxgxXFLqLEESx6AtDiXFYH8fy251ZTaFzDVV6Ey93YauVnsPLSBcxAXPxsAmWEc9BFj6rMDUGUmQHR",
  "key43": "2v4jzuvqqi9DWAPP5czaKef5g4855psH8jj85XihwE2qxPjm26VMSMTtyvAAvxtG9QVqy7bcj3Rv4VvtFKfwQwLU",
  "key44": "3R9M9juzrx41Asuk3CVaBAVQB35FR2SD39Ek9SNLmGuJPL6uWpj2tJFPiRJ1KVmQL98AUVxNMsMShXru7nX2eMnu",
  "key45": "4kFfscLXC77Zd78iKAfS377fAnFRAEVdxYCYsgUpzwVBtCXq8VFGKXJxAeBChK5VFRxkiz1tgaHcbMh8jSgzUExo",
  "key46": "3LVWuH89XZCuHzKJq82MmGPESf142sKACvJiyXdnYXDiiejKoumMo9YMpREDgnFzH1wYyseskGxBabNcqSxC2soh",
  "key47": "2qtEmPL2sqvLu4fThrRRbxjex4Lf4M2t2XqZSn2MN364rvGPFRtahJp1pvPTQ2Gca91HK8WKH1f7FVVtFAy9Vjyh"
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
