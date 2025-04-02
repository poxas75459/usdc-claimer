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
    "28BVD7DxHzh2eTXaurC9TkcRHsSrj5XUHo96KrjY8Wx1JMMDmQVUvNVene8sSn4WBtim6aYGVbDfhteMNdppZxfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idjQthMAnY2FgjLbgcrxFRCzFQp5vVGmYWHBKoW1mxxCaUzffTdspLkkARUpeTHWd4Ee812RxvrSKGpRB3EyWeP",
  "key1": "4dGKiUU8dZ8PGv22dfaojVdtm8Vj21N1ZiFkX57YnTW4sgw66sGV4ebX6VXBWrVfSPGaG5PMCgawDAhTyWouyEUL",
  "key2": "2Yco6Q8hSDgh8A9PrD5AHXRqYjgRpouuvetteQ8uU1jmJer7fEYwmfQNYuT5KDHKEQevN6GE41t2v9XgRVKK3D2h",
  "key3": "GXpPPDger1u6H9c8erT225D2bkyNUy4YsF1MsTuMtMdrYCYznqdgA7catGwj8ZyhpVJgUNgkQguQhJ9EXARS1sg",
  "key4": "2WYT6qnqfpX9XQme2xNYFqyJgqdDLfzMZqwmZ92BT91VirddGLKhgDrkXBUK4qu4Tprwsjg49gLofB1vdXy5BMKA",
  "key5": "4NwS8rkv5fzUGqLFAWNf9GdqYPBuAUiW74fMPi8E3fsabbUjkNZ8FXKBrdTzJNj1ZQBf4NaTt8yJYGNhyfLykLr4",
  "key6": "5QKUkTgBHU1Z7dSgo1WPdcKSM9xwNybaMsedASr7keejubm8RryaVoGvBow2ZQqZUaUWMNgZUp6jQmg4GnnM6Fov",
  "key7": "2qJGRawyzbELPodLUTLUiXbwSMRPnhHJ6TCksPvSxXhwVnDUwHBoymcWe5G32gSCFcWaiwyaqDCPDcbFgps8o7ew",
  "key8": "HonJjVzG3jtBp7beDrih7e1X67pGKBKMCmqkDA571i4Wc8vZxhuy3BqcuK2hWGpKCZRW63SBuoaajDSyyMqjTcU",
  "key9": "4oTZCTknFaDCXzsun6cP47Y6pFw3DVqTLfnwSMAZXpmTc5cson3aCdPNbtMh85XFLMejX4jXb1VKhWfmnEf4Pe7e",
  "key10": "2eKmE7yqqrtDvi5YoNj8WZnfNxctkzAtoBtPdRo41CMawfN4XzVmevEojYBuiQSP2hsiEZ7UpxrqsDeedhbZQCxa",
  "key11": "5BR5Kpiv94renJp27tTT2pjEhxoBAF6kHgxoojFDo1ThD2Bssm3KyMc2u4s2JrmAVpb3vL1rtrQLhXqAdFej5moW",
  "key12": "2LCg2rdgqJpHxBaVm93BTXdcARMkrmcba8Veuaka4GQ5yrcVbg1G1qpY7J8WhXbrh9acxgnsGozafZXMWX7FJD7C",
  "key13": "24tzK7sB5nineJL1yT64xCx8RkUucgrxhAjvNHLMtEvez9LsapT1mDvvdusiJggu4eVXKXv18H15tdtiwUaEGAcT",
  "key14": "kDWxdfu256SzA9AvMtZjbCsBbEeT5G9WLrnb1L5bCPDMzFJ53MoEmsDR7FvZM3ruZPT7kJ84GzZxdFrkrnp2QSi",
  "key15": "5HmtRcAgRHqqjsZTzcMdE285mqfPUp5mBwiZFZv73srGVG1xVDhyKHHLDXXz6gc3Amob2VmzXoErC5KTgg4tWUta",
  "key16": "46gVbyyTto1QHEyNeax7voB6fCZGdRZAbrfbQ9ei1nQnaLqnzuHVEoFetJwUUjNat8Q4zc1m2zT15KDW8fX52yyC",
  "key17": "KRgiqoUfjQ823JzrPXaYwXYxq6sNXGwBJGuZeC71iXanWgAd4j5bkDPkBj7mW65wcm4joQowv6XLWPnyuGCRK1i",
  "key18": "2yRbBSWgbCSmfxpz36U6FZJLo68Z575gbgmtVQKCRaSHhAUCiipN4WotfgsdPWKvpmAAGtqBrD3mjhGKJCYPPv66",
  "key19": "3i79kFv5vAHLV3MLF6tQxzi3EoTP3nSVfWjVNh2CQA4b5Zk29ckYstn7824oqoE23nNEfyq4i46vjroo5GFyyPJs",
  "key20": "2heCEikqLsEiXR5vwURBYMRojtEfSKvFXTwYb3bh1g4ZLFXBn1GDv4B7d28qW9f9QCbuhNTnMeUyxAVdrCLxvfLp",
  "key21": "26ys5QCi2eAwHSqbvQ6CYVm86fF1wkwXXEhJHXCjPdi6XVwUBzgceaAF3eFgJsr7jESN6sRET2Bfqwf9v3EhGezL",
  "key22": "2dmrwaPieXSjX53Nj92RvaHLgvS4Xq8cqY3bJtXtH11QYDwhS9g133aNnXFg7wcxYTcyg2yiBwvEZwkLUYk3pqkz",
  "key23": "38JhMecHc9mcEVsXn7UDuhoo5x92rsLG4DZTBE9QPVhXZn5Je1FCdXGsVyfo3XE4vMdxVxbi6X24CSiJCmUfdpgR",
  "key24": "3vkCN9tsGtKivomaNJuce9czR38g5vJPEkNech6wSYmb4Rt8FRCdCe88UdgVsCdRThtSQCn2U9Th8sK3oiYVptfs",
  "key25": "2tPKZRawFd9GedcmEeFxQMYHz7CDvijbj3Ruqs15LKYv1UcqQiRH6YVJCxU1xz6TZcjVbU4dmzFtKecuaZ6HbnMP",
  "key26": "4iYR4nmU3PEXggs2z2dZsvEQp4n9ji9GQ4p4pcNWDCHnC6hAGmxBDiRfhUXoPnS8k8NoqLBWUtfWbRT9W4V1yB3H",
  "key27": "532JSTyRV1EfCcyVPdDnzRELqVppLLNTwW6Y6pxg1piV2MNbxBuo5bZG6tRacLZzBPTbuM84dkjDBGQhBd1Mg2dh",
  "key28": "2QsvwL27vvv4Nhmgeh6daEYrH6ahiXkCRTMLaKKpZDXM5JLXNdajijiwgxPmFVbaZUDRJ6jzhXtCkLGtPfmnm9ui",
  "key29": "3GYxmHiAbzPHdDis3VUZc3G12JehgNryNt4XgcDqapqaarKkgZNMMis3phWmZcQDa42ZjFYBbAK3gr1Peu2xTmcz",
  "key30": "GFXqhWzNhYGAAznPgnFeu69hfzLhvCtjsaRUoLcFa6jj1kruDefZcW4CGHioWzkYzb3kmKTafqyrzWvVrUQ9QAo"
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
