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
    "4SCVsyLBD7XCbwbq7X2JmJ1Kr2WRxD2STYAdJ8PwUcGPJHinxbo5VmVWw9mFChPzXuvJAweRtJSDD3krZfZPNqGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJzKKR3BEFmgTm4iPamRZcMpjosotmU31SiMccm94FLg9HkVSq9KTTfziecHuCQV1NGopEnS1Fu6y8fDM1dzhqC",
  "key1": "5BCKtYpCP3c8rE1s7Xbfnw4Fk7RuggTxoAoojCa6eBvvCDuvBAEerTE1sXoNNJSsAp1uDpBeWM7vZmyAS3YaGrzJ",
  "key2": "gYTza48THyrudyEuXmvsSKGpSdDB5oQdp42PS6hvvrp1EQDjHwBDA1xu4THq7yimbmJC19LTm67Fa5YLWdtoZK6",
  "key3": "54DS9kHtdQNnyMfwgHSNChDsSsHct2jJuZKdRC92snZVeXiaKFUPapmgXEEtjkoZ7fS8tbU7wvV7j7QKu8AUa2vD",
  "key4": "24et5QrMtKnU5B7dnyBH6NnrAvJrL9bjZD9pfeVY5cMbFzEVguFzuTQrFv5Q5iDTaeyRsm1yynfj2CUyQAcN9FEt",
  "key5": "wAkx19S5HSYPiGdvqru5wiXZ2ckPDnP8oJt86Z4kthJh81QbRuFrK1M4QGEn96JyLXyVZmAozNiYNLpuBqgbTfi",
  "key6": "2SHDdgFTWCXpPFHcW4SmcHrXnFdyWkBA3UNYVFL53x7CM12DW4WMcNCvvEeLT6gxMBaqWACVggxsLPyCBGUA1F9j",
  "key7": "3sRBiMg58uvtUQ6cBKBfXuYRGqkpC8gqZdh264ZVz8Vx36L6rjFvqhT8GUejPdJUefyHwZDTtrBzKtEwGrqAEzH",
  "key8": "2c6pV2ycRW2vZjiaL6pEdqi5bx5GUdSnGNuzxfWuCGAHNqEL7bQoypFYNveYpkfGdzyEVnk4CzvjXDdhy5PAKjjX",
  "key9": "5Ei48eDKtPwyBS3hoZWfPuXMLeSNvCpjTcNiTZgXrJJMkFvtqcqyPnm7ptZcswtfXyYurnmWbUiQwdZyk8y7uoMC",
  "key10": "4vZK56avGTL5wgdBND177MJeNfg8rNKc2DLJRDGXoGmihgzk8BF5qTQrEd18syVXW9LTXe6if3Cm8muaSXEMtnQH",
  "key11": "2ubnwcxMdWhnQtM5mzEP9dkkKiKdgGtkFvb3H8k1zxxEAZv4GJBBSsgopHe5nJyAqM15GK2MPBemBbVq7A793qoZ",
  "key12": "2ZquUvQtdumvjMdzM9cudcbeFGb8maADro9f5idJ3ZQYVbLbk3zigVyAYwcFjXmcfuniq4AeokRZ9eVLwYAtBGAT",
  "key13": "2pXSRDuAm53jp47ATXtcQp3b9qhCBbybbHPGSXHL64cL2b5Uxgod3Jo82z3ZWxYJRfXuSdGSQvEFXdmU9dLCxfiY",
  "key14": "myTqMCmsPbT72Nq5Mzo7TDzHrXAJWu9mSfX2Jn9pEW8YmeneS63w4bZMs7QihZregHcGVbVAc7EUV4nWGLbN291",
  "key15": "3Ch71K8nHiRLMsFJ6FSBqFh5KpdhAGdx9NBmgrYSckoew8wzmqfVgwgt8VGxD5iqqK7RojP76TBPdrqtB3y7ZT3W",
  "key16": "4GCyNiBX7j728JUJXSKyqq2QkThjQuKLBXN2UHE1eqzdz3RWpztyRnouJrf9LLmMNyDdugUh6foAasSncTEHi4HJ",
  "key17": "2zEbuKv8ZBP6aCqBBdZRG6G17XGGBfNt45ML6SpPgbYNPqTfUQCPMF8N5ggn7erAUiBppFJKSYK1JoZHr4JRJ7cH",
  "key18": "4wvFoS6zbFP1ZZH6WsYkdo33mSmWC1TWccsSYXNS2fwgPpLqkptQdk6Wv6ZA8roZnSjeygCiNsUuYSeA2a1b1yvx",
  "key19": "4W28Snxkby562A8jp6UkoHZQHNYvVSUCEJ6AubJn17uMy45ubLnP4fCs5K6FAfukeMXgXn6RmyTpKLEcANu1hR1y",
  "key20": "4eTuSxAvDUJ5cztjE6yr3Vm3GffrFL8rT8FxLJL8ivByVRCYiJCTrhWQeWLfoc39WyXtiQnjHfaz23ariHs1nFxC",
  "key21": "2E4vC7TcqopGTw1nCHoitXej7Aof5DDZgVSvKBsBqns7B1i6WTxZiFs1BRKkUZEKZDq2fKbosZuqfMvnnVWD9Nj1",
  "key22": "Fn4R941rqhbL9uboj1f7xxhdDnST7uaQ6BB3TfJaW3rzh77msE5yZzV1sQQU4C6yeYjLUAn2JumxHqmy4y69X8v",
  "key23": "xeyJf82k81oquGaWJZZxhPecaK8ZGuQEEi7Lfap8hZb5F3iptMzMh5aMK2p111XLLQ4QWd1MCkMiHH5ZuAQust4",
  "key24": "YJ6tcc3WjC71NrtXG9qSkv1VCxbqt67TfBUUbnkESqr5y8C85V2qSTHuZjSxuYUg6FkC3kgs5Gf4sJayhUTMMh6",
  "key25": "jtS5USdJdZjd7crR9iGMC24dB13RA57ASeesjCkGJnWyQaR1Hu8xmjjNgCCV5mkeCfbvwojhhYqYGA8S84BByuw",
  "key26": "624kBTjHJuDpGEevJH1H1C8Ym83ZCAR8jhQDPqa31WgCpEPDQZX6F3XnF7VeK9P48XWBWuDw9kiSMkzdVmpY3iJN",
  "key27": "3vu4YyUcMGo7ii1b5xJLFYGZyLa9AdrtAAC1mdh77pgLJiZftaEhic95D25bgfTKbzL9s3BuuerPJUX5hxpsNYc1",
  "key28": "4nYhQ9bc6QL3JpbxoYqonWNWZ8gxguQG6w8ZaNuPYUc6m1ySWe7pBpvWGXYij8a2pvuka225kKJzdfYsY9MmDBmh",
  "key29": "bxq1Qf3WQNYMe3nx1GKYAxGs6PHh54aYPb9GAXVZ8FPZuQ14626bkydA13dtPXtRwo4uSFD9b7GuQmBDrJFqsQK",
  "key30": "4YHV8ox4NmZNoGZHb5JPJo78xQcoaY3QynDUWx7hqx5Q36sf5DQqXHXAGvd6nCBMwTqKdUKNneJyfqwQHbCJhyeq",
  "key31": "2WM4BXM1xY61pQAFMbw96armh89yPdzuTcxrivcNMLHg5QgU7CbGgT3QWnZKjiJPL4gnx12wEpw72frkyUJZZvz9",
  "key32": "3fbQzzBbQyC6Mcs12azvUjSfFwnasFr1eSQvnJHBA5ntk6xReQGiP5WfPCSnm2iNUyHRQEdwoBqSZVvS5N9Rabw5"
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
