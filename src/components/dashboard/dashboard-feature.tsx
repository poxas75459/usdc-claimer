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
    "ebbY69nnNbket7jNXsPPrLQQQsArvzbQue8xD4CXWdXo4dRYoYxYL5s4LfQhFKdDvDLYhH4TDutMBGRekzd2fmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lx3954VPeStggX2fAMyNt5Vt2S1rAGHFe8xgj499QyLi3U93D4qyy6gYVMf38ePuGY7mEJxXKLUtQ9mXiA6HdaH",
  "key1": "29eaKqYnvJVRMWWUVSPJP7iQdN36Z1u9xUKPKDrNNSBGJAn179NyVVvw1DTpLgv2w58opcUMRCFqq36U1p9afk16",
  "key2": "2YvRcw4cPsQBXwTn7RCoDjGwZ1o6s1wBk8ZQm33X4YqtrgEErLov82Mtz2GJ39FHjTeUtx1ZTMXXNc8UwmZvcb54",
  "key3": "48FqYVZJ6iABve7N5gMxX51moUCUyoUqdjJTVSdBMenvS34VLgweMg8BoBLVMBh4iXqUdkhtSxpPbvy945n5KqGs",
  "key4": "2QT1QwJ6AqfmYx7YQgHTNYPMxnm3ZPAdTen6wpJKfcBreudcwo3Ns75KiYtM8G3ipSePcbVstwAit8uvUsDxbLCn",
  "key5": "3aJrYjV894HY3P6nmCGjwyhpsrR98cWBnCqUutknK9F1uLeL4xsYNLhwAnGuGQUm9gFxKmW9HQaZBjpLt3exeE5Z",
  "key6": "rRtSUi6G8zndNs8MbpSRQRbDqrQHkLvbKcfAzbBuq1heuEjUJoLFTL4fNaCYfDzWkq1bfxGkmMfk4AGZ69vHF2P",
  "key7": "N7U7jZmvQJXmEoD94mVejDCj2Kt2DeViPiVKRDYvPoZRhtUaDTED8LtjcvYmVrnzv23j2qGzQNVQMvC3xUfw5sN",
  "key8": "2fkS9yzqGekTdKP4x74V2iToKx2nD7oFjSGYGumuuQx3rbi61TL2fu1mUGthZgqBMajdJbGQ7DKNEPTmNCh3TDwy",
  "key9": "PQzFj4ykHTcbbvTTWFa8RJ6oCDV56g541fAxLUQdgkWjP5rbrmcV5mQzgNH4onA9XbUfSV6EdH9nHa6iPncYaLp",
  "key10": "3zhiFt2axZ7KX2u94KUvnq1ikh1KiV3uQKpm22FAcbCYLBdiJ2dQHLfqH2QxzpBG4TU4uaoH5RzHGRzi9anseTG5",
  "key11": "5CdGQJWgrwDnYMPyQJhNYzHzXVpMfkzgf5L2jb54wtN11E4NvYdVXNFcfTgEwatuY2zWEay4mr6muocrbWzvj35o",
  "key12": "2Hfo8eBXGi2CtQRx4LYD4YwSbcSRgX28xrRzhDP1HPSLcU6MMzqfpBEh1EokGQX8xFb1hhRvvsAmJPw7Mx641HwQ",
  "key13": "5VWXzQFtSyWo1WmWQg7WriwugykrDpqwqFG99CkjTAFcasqf9tt1R4E2Vq3U1LLySEsF4Yyw669UH2ukai27WhMd",
  "key14": "5c6bDj7mo2uo8JXF4LiZ58ndhCGrktcEqs4SpjbWGQ2t2K3sTikTPApwpHwcFY1zKrh2ex7fBnsqrkggRnnRRYvh",
  "key15": "LqSdsvHg62Yerwv1iqHAS6EvRfyYz2a5dg6oAKmRE5wKN7aJpwi8w5g5a7MoHYYUXTeYNDAGL5QQwqUmj9z8Hq1",
  "key16": "z4DpLo4zeiJcFA5WpD8vxvXquC9vohtUhsSL6EeAcMPJGjn6bW5wDAVGUak26p6eTe2ZKuWmcKR8XDkQNjbrB2F",
  "key17": "31ocZyUhgfu3riEuGdoXPUE4UXBnUeM8ngVzGUVdtBkJxVEUDJxQotCR8o3AN9FJ7f2BKCJ1BjDK9YG2JWGbBUt8",
  "key18": "Uv3PVMhVaTHDgxPsDWP1iyq2dtRgMuJcnXgdPFizp7BgzHpVm962fAFYybtivp2xfARw44fGAk86EfJY8X9hTQP",
  "key19": "5dnQPE7PxRNHAbUHE5nG3Wycuk3yYTgyj1X8fge6GrByAQBFkVnW28eu5yg7ELe6v4o4i8mJ5QmtovxZwWwNFc7B",
  "key20": "43229XKFnQi1Hso9QNRGSSZyYKES7Zqfg9rGPR5ZZ15QuPWckRKmobHCwYnC6D4trZWToLSMuPLTbQcpSuATRAAj",
  "key21": "38WsvYkBa3vkzHiRGV7b4ondwSD4dYBMh8R4YpP91SG2t7eFEwPGRuN9RWmYAyHgbDMizQHRDawzH5gNHs23Rgxr",
  "key22": "3T8MiATRcMeRaysjNPrZ3SkAUkgtLypNMFd22c84ExxQCdR6VpjBJo6goPuge3TLzPhYDL3kGEtts7qiSiTLuURA",
  "key23": "GasQ1FFyDPsqWJCwzKKwrcdJMJfAjCZVa32v4vdexHYeUgKiNKyixTFHA5xDy5Jkf2A1VnYQFq38v6AGppFePWS",
  "key24": "4s2duJ3n2ZpTWRfHy6PSL1aoJyDn65SZsY9s7cHaNc6tePZvGspj4aFXw4msDqoAVjcfJgwLsnbbmom5BZJbxNzx",
  "key25": "4DAgWcPPU3MzN9J4BVP95M86mH8bMhR6jkVL55fbkSmC6FFtk77d346F83NYUvggsFuTKgySCKbdKcyRUga2eEra",
  "key26": "2uDrGm1Ftgc65SRNge5kbc7tfVUDwsZqMXzECaqi5vJVeGMkPD1ujWmPpjxnDEqJHJ6muawzPdYsdSmPtqtB2N2N",
  "key27": "4FFPrGqfJLBwQgsW4VjqkJ37F5pdkeukRYDJu146BmdiPoMiBNgnGMuoXmpk4iWX3rdebDVAgwzQJuyGmHKVYVMU"
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
