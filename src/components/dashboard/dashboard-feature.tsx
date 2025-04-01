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
    "vno4hHKPH68kKru24UgA9UkM4ESNeAEsSHaHPdWzr5kwaeVV6jnfBm1H4z6CX7PFsEkDi9frombN6iGhN5PzMBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hzFo7Di5ed3jhytuYS12bKXJ1kSTYZmcZfz7zBSW7VbrHkorbPCynM649d6eExDhHbRQWFruiMwX2uZQfkHRNE",
  "key1": "2ydEQkhepFyQQndZU68eBmpBeKjtWLJg11SsE8ZYp5QKBrLHjZPebqMCkkpwBgumqiAneYKHuSGeT8m3Mr5Ei68H",
  "key2": "25BaYZn6vrtrch6f5JbHomcUFA1hx5M3fEQCTqLGLjwdhKYDd3EsZCR4PsEJWAP5gBoQpY6MyTkV3LbxuTALkbtB",
  "key3": "52cfV8wuMXz7ZG9Md7hng7UUpvu1LhfSP19EN4e9Y7dzovJmhUPPQ3d1xeFqYAmeJrQdpHAXvB6Tbat19eZ6iBaK",
  "key4": "1HVzmKGbFeRDfT8jgbZupeSs8HQt7HKha8rLePh8kFKNgyKSDmSdVytXVNoPLMbvU5DzFRxrNsqdwvGq5SKudnb",
  "key5": "2Ya42TbKLeTmQWBokoK5gfSo8pAsF9Nt9LyX6YhS18gTMr2FPZLouYM45Dn29KVN2zWtcojtaHWez3g2ykknQYrn",
  "key6": "2329UQ93rq4QwRdahQodm4reyWP3ncTRQmi2Dinj5Nv33PdQH9RbmvKydcNfSxqVYrX6yymryYCKgLHR3f49rhq2",
  "key7": "5mgBNhCAA11cquZhAHVgSbAf7UFfW6SG8ThX1RMqDcio4YAtpsmAiibNTHDd24pqW63A4iUKgpuPproFptqmFCKP",
  "key8": "3xn358gBcyUsh4ApMDFYc9SBJpBtNQbW1Xdvt1kzyw4DfTFdcYBpdL7gPkPk4b8WdYwxeeQuqJbBwuygaeHaC8yM",
  "key9": "3Q2esuHiQEbpnSye8paM3EmgfLvtNmrw6M1GdFKMZAhq24zrnVGf1Kj4XJT4QtnDD8W6xRjEbZYTsHGoAoGhFpQW",
  "key10": "5TnBB2yJ9BrAipfFihovK697xACchJfuUbpfUEVZYSYEarQgeWLL74YGJaNQQURk2h2z68ppmpcbYiH1XnaTWqwo",
  "key11": "4zSHu1LrxDK7wWH5QFHVhUkdYWhgmPMYZ595PoDd9S9oPyW6wNB2Kti6hWLRK6wryCRxTEXH5CoDr8USqcyK7hMj",
  "key12": "65jnAAeXiCFxraQusbKD7WqyWjadP5k6VBpPDuSgCaRzyxmZxEfee8rBBBzeCSySbn9zmggoRZQF3No5pHs3gWMo",
  "key13": "3zpgfV7mHz9MUZJNBzxQfZ1xozMyFGjRxHgVi4aFyk27o6evp64wjh9ZuaxYdQp8XmfN1gu6N4WZJPd1s83ARtjD",
  "key14": "4eUR53axjw72uBy7MamEnXnvfsA7hYjB1VPtsS5MJwT6TokMckgrRGPALXYSN5aY3vspPmTfskxgkFHQct8r4faj",
  "key15": "3W61g7zJLHw2BYeKSzaCK81HHBYKbX62VcxgokrAC2YnXuv5gNyTRctCnXdTru3Wko5rbrpH7zXcuRXVYFVrSCeK",
  "key16": "2397hso2LG8hGqVSxYyj9f5CZ1Udi9nDXTynKXUVGmnYi1N8GsPpP2ehNUegB6hYBHP9BWbzXV9U4MhUySgKzDE7",
  "key17": "hyc21LV8g1uw5VitJZn4p3ws2G763k75R2shGjdPvHWEisUGnk9gTfUv15x6Eq27ia19huUsAPuWVNHzbH5SMct",
  "key18": "kYkxXtb9Vawggfqh1ASedVtMLuoAk4y9Etc7ic8RwZHjFaYNYTBK1ZswhKq1kMATfBiBHB6SqiLb4znEA6ig2nx",
  "key19": "4Uq3X3SDWRDkrqjcsCWYSQNTz5V1cM7NZuVFBs7nAaVgbGQ4DgBct3sTRQMFvUtaVhPbjGBp4Nk4ACBtjtgVoh6N",
  "key20": "21QGcU6k9MRLc4tR7TthL1DxEdKh8zG6ek4bTzseirEZ4pHMzddc8yaC2dNgLbid9kLKKJjpMLD8f9AMwAftwAZJ",
  "key21": "3JNxJPmoMBSBf8cLxBijgH39zpzoTXsayi11BMSbNDrGbYWvaYyijqwduC9pN5PgCSH5kJSZ7vsa1hsjHcacBNP1",
  "key22": "2d9KqqDcXcj18d3jUm1jARWkVVdqCh2JQtWpLmj7SxexqiW1f7h4NUVb1dWjfpTXcrv2CswkHHnNfxwM5TfTbWkU",
  "key23": "4QGUs6f1qYWahGrSzwK9jLakGWgMfVwLzfDAEvxzJk7MfydTEWScdN6BVwQe7VGSbWVbZfYhSA8aUaGAMW3WR1wA",
  "key24": "4uqqzhZNK23Pba3uq18txto7U5G6g5zb85Nj4sYh9sMtGyryfwmt8EdCRnkZX78NGTjihigsLjoyYuC3wrPVJ7aH",
  "key25": "JWJ3KyYcqxvSh1Rt44mH7ffXoEeCSDDZT1PpAyPp9qGT1ATNez1YuznBbNMXwpkvpxVVW5d3DhzxKWJJRF5goii",
  "key26": "5UcDn4S7fKP2XNBdtmBnFwVvWUy8Yhc9CkHvsRunKKW8BT9XucXEyamFF6BkHZcQ4Fom5CiNSNqDxeYkWkKobZX",
  "key27": "45cAebJCTYj7WqHvBW4BDJWRtrAzE6WQkfcqMmk8SvUxd5y4j6F31BHyk2owawirXCNiicmWTVm4YqW6JrDcsrZi",
  "key28": "oLGguiTTh7KRNj3FBK1ocix5Y6n5BPQK6J4Du9DyyVov4PW6Wyuo69wPFYLxVfBfxevUW3AHcG1gthJeLH5ZqZJ",
  "key29": "wjPLvV8Gv1FoTYircjAC27EdHQ9XExEGnah1S6uU3iNvoyBmt1ca6EuAf5y4qHN1tc5epuFd3WotwmsN52obLHi",
  "key30": "5fiBWg2D9oU5ksuuj2rMP4XsZgVZtbjhoSfscPUd6rCENtQHJfti4ZbWyBtnGfq1J8qNuiKAb9FmGBc6r8WSE4pL",
  "key31": "5u2HJsAmxJA2efefzadGfj983ry9FnNMrS6inSo1zNWa4q6uUVYg87fF1haQ3YzDsRPdiVbwJj1aBm8JSLfrJrqW",
  "key32": "4tQm1U36wUqCoYEDA4WoyUHnAzL98UQBVmkQatSsthBTz12oNHMENFdw99Cd3fw4UDDfhCXA6wcvur1rbki3pQg",
  "key33": "34Zfgg9c71vSG3K43o6kkxbXNp73aYeuaMdCUX6RAwyuPzKWLmN3tcrJJgmSoVcHYHA52obTde51JUHqFDoACbk5"
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
