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
    "32yHjHe4eq654DvZZVGPyYdW8ULHUFum7c9Vnc3ayDNzYxLehcthvLpQjmUv2yBVYN9zGe7Ur1V92qGAgP2R6rwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GhGjYuMPJMAZEhjgk6caKPGLPACm9VBDWfGsBVnAHCPTCTJtrwUMS8q8JC4hcbVSscXUafpVepmNR3RhSay3hdr",
  "key1": "4U7iDu2TCnZ95vskzNwDSkyBfUzpyjcY7xYzMkPWd6tVrTmw47d2JviMhR2tsF3AbqsVAhduMZ9x3eTrvnuNJTpM",
  "key2": "2tjfpk8eZ6WCPGGZKue5YaZuvnEQsgzynhg7B72sq7rTsvEBguZUTUPh9VVYGM1VDdpjPC6vZ9QehQF8zquiuWK",
  "key3": "2fiiSLto172kysd163f7m2s2mFXMcu6z8geCvCneRQvtcJ9FniMShMa1xbTCJr3kqSPEEPfswWdjN6fN8xjS2qgs",
  "key4": "5dp9n2eH3e9DUoaT6W95QpGvum2JhSCjVA9vYyRimwByQQPqgp2hZrBup9j65k5cN6aXnSMXzea7HADp1mdiuWyL",
  "key5": "5fEAa1a1duLUcLieZotAq5fhEqAgpDpiA1g53ECFEEQi7gnnwLqR3uuXsfBMS2e4b5BkTh1G5PoV1NCd1dLGxRTG",
  "key6": "4Vw6MpQtM36qtmGzUy1NabjoWyienm6UB1LH1cWrWm9khVqxvX2ir6rLWSrSrf7PM1Pu5tXmLzLr2XcdBuRaY2sY",
  "key7": "3L4b8p57hKUNNGD78cjxzF8e5YfhTaL7BWdsCSAMjNfQar2Qj84S7kv3NZVT4rAWGrgPHDCd3mnFBifR4vTmDS9g",
  "key8": "62z2fpug3AxFcsU5ThLbRS8kg8CpWiUYTE83vFA6f3GSKK3QwZva3RN9uP54kyQVBnXz4WdVSpWZGRN3bcgQntr2",
  "key9": "2SzsxWbPyxntGeeKH3KmsoqQTt5XcqjFr2UDKXDN8stmrHR69JZij18n8ywD2UQ9rzHYAcx1jgKm83MNBdiGRWcK",
  "key10": "4GF1HWftKuHixwn7D5c2PEnSaXocfPYDePTEi1uQoaagXup8ZMcXM45Hm2rbykiQB7KPWTvVrWVFRWpPSxN1YpP9",
  "key11": "5gjKGpqCukgCA5hsJUwpAa6xKgGPnyrt2ev14qiYHe68ZzJqwb6dqQsYWoomScWv5rsLTaeGyvcjByJTAUTcRLp2",
  "key12": "3xLrveb6VwhmNMiWN74ndKpDdjJZwRsshYaCHAq8zNPwgpahbF844v5VDiZizxyKovue3oabLhMrBhEMTduK2gHc",
  "key13": "5aaLCaXX5DZJE143wJb1GdVvTUws4DSMCM9wogE1zkLfw9DdbJXYtr1tEBT4qdWcwyUCYppqfi5o6QVVU2tBB2UT",
  "key14": "ttEBhCGjpaZBLnQBS9xkUkpaNTAPZ7AmGW6taCSnrjA8ESQFPevkfWP8WPguKxdbq9DGAEJqAMo9tMjgbZxkXSC",
  "key15": "3UqeDZMJCpAVtrF33dkWMCX5itUJL1bZ4N7p4w2h9Fqyav2QNDNyT4gPnDpCTnes2HcXf7auABr8oWS1apKJYLBG",
  "key16": "eQYRuXkLrmaYQZFtLqePV1YQUzE7gZQbghaEDdLxztdtCLG2BTRHt7YbCZAhuj66gSwqJXt3GwMATeYbdrXsVG7",
  "key17": "4kepc4WMXhr5Awf7b66VCdqwUd8Yp5LgWpNC2vvwuYxDpUJshetnRNPhREWCrSoFyQnH4wzvKtzYsM1JM6Xd3Z4s",
  "key18": "uAhgqs1my7JLUs9fHuXq5votoxkoY7BKRN1ZgYP2spJ3sADFFuGqx8juMBuXUV4Q52E7gQhxk2zT8XQU8FCwskv",
  "key19": "64zmHXzvQoEZ2jwv3P52WYYyM3SZ5N2vFahrfMAUUrbyrUsyAmMjdAADV5X9ZERhpcyefhZaTtiye5ntS5kUkyAj",
  "key20": "i3Yibi4u3hiryN89hf9AL18sAGpkA4nNKeaEkd8szYn834AchJKy1NSHgsujJckzdj7fifgiAGQ6kMKz6MeduLA",
  "key21": "5HhWkCYHthuiLeWaxFTBd7kar2dxM5jzV6bZJzsDHRW4Se3oJ6N5eLm999W6d2U3T3iFjQEBNK3dz9nDQT6qpRrB",
  "key22": "2xbhWRsNEMLT4EJeoJAX7jyo1v7CjkWMJw7E2EyEV2fK4onz48CaHZYfZXWJcoSzcrAdbvswnACuBsS4dtYCYT2m",
  "key23": "4trc68CJADdi5PVJn7gTqL5pLdr8BMgmVfV67wmfdG5xYkAXaZcrtfTjzD3zc7aSzkwf2FoUokFPfahrWvAzAqv9",
  "key24": "4LLVkj1Jg7SEPWR5monGJfV5oNhGLjJcWYN9hVm2B7BTpfS61hwroNJ9NBj6kh32jEek6yTpLWFEGKxK1pggP8Gk",
  "key25": "4h9kDofgJVbXKoaCjT9TLn4dJG9kKu1SExdHHc1qpn7Ase7Dt6tagUP4oEERuDizeevjBF1WZdPgtkax7pFzZRiy",
  "key26": "2TzUy6VCs2Sgiu6GzARaLwEFEiUZCMs6VUtWZbhB3yQDzazDcm3yhXX4MbX3bNtfM5RhgjjVe3QMrrhKQDz5yfCM",
  "key27": "3nYj5893PDXFR1Rvr8KWeYNjRrVVkdz2g2DGmrJPb71i6jNzs7BfuYGGdgBnm9578mf8eNEe4bRALKdUrYGPXTRk",
  "key28": "2tsSv5fKDczdYwj2ngzYNzufjq9SMmgEXeqv2bchYV6fpgDRjji82S5W2TPrcmHYpqL2U6gg88wQBzT1X8azHgiC",
  "key29": "49krhfpnNxWxDsNw1rPFryaivB2Bwp2VHhQ5Kc8LuSP9rNG1cTtwYouNcugqtuR8LfnQBkcfatD1fbxFL1Qg75SA",
  "key30": "5qHZ6C6kxJvhza1hZtPHFNTnAkse9UwEtdgjk2d68WBq1Tu6KLBptXV7wqnMHehQdphdS9iLvRyQxSmBAmLqeMpg"
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
