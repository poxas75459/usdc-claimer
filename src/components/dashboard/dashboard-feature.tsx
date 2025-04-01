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
    "pswwq9TnXxW1qLpaHuY9mGEvnRMZR7P5tgugMcnpncka1E1iQ5yEbv54hDYGew3PZb6jDESdH96UrqSy2BR1wCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eyv55cnix2uEzGmFJvrR8CQBN8HETwKxe7J4NBMhRtk9KJibLkmHJ6qj3ezpxuUrznVdvZ9nCr3wNnEg9bWfNdk",
  "key1": "4GP6awqF5ywjwDEwQLrH2dMnPLFmKGPgaMcaeg6b8ijfENb4o5cHjeSWrgxF2KS5LAbX9T7sj7iWSnYYGcGpKaug",
  "key2": "vZ8VSxKHdoB3KhkZYAhWLNS9FeEfihzqjLTEwocJnfc6itGgKFEBbUF2g9i9y6LRLBkP5z1hqf7cnemW36kxPFc",
  "key3": "4GwPqwrrcQvWAHfndnK1WL8m83pZN6mtEjspAqhRsqWbLJ3e7q7HL6se1sPGexKxVKenBAdWrSHoTRhFnxCbN5Dn",
  "key4": "4gFA2X2s4H4q3xm3TyzupsCofmHdGhGaCHfSFazasFxSSJh7BHTVMqeTvdkYXsandzparhGy4i3vFTouoPau9hSa",
  "key5": "5UT4fTRSzKv81yuozKnSsVmgtbFpgk7Wu7reMU4JsaqjyCVhT5mYBcr9WmToSn1yDxmkyKShuBBRF1gFHgDdPDSK",
  "key6": "263bEubtedNhaH7gqKUgkSfvoUaRBzwQXu7DRrsiMRbuYtCoJMMcEReARZEzrrfm8TGu6gbfVVyN8dPyAqt1BDDY",
  "key7": "4tbS2oTok3Jshr3NqE35yb9rJg6iuSHK1sQePBaGQjRNhVeCv7dpvFsBSYTFpFK7ziX4gAomfvQhKdn49WcPmhCW",
  "key8": "ehKwT4N5Ewnexoq9dXAYYpJCG3w16BrkjmTE6UdKpGKqGvTqJcxYoH2euRtDcQ4jYKrUTztKvnJD8yZtoARRbUc",
  "key9": "2fuDMvkt5q44zkqvjESE8NrrWTB3sxR2k3bgvS1zET6xpNp9TbbjLcrUCkAkC7c6EkQ8rE7wxqWcwYUhTikgrhsM",
  "key10": "2HnWo5QSMqL1aXu1xBrWk6wZVUUwSyCeXxNxb8X6NhREu51yuF8s6HEEnTU715x56wnPyjDtxTob8KnYFp9NDJ5r",
  "key11": "pj2iap7qGHn9qbFsZP7kVbyNcse4fUjeZSa5NbJXLoELC1RbkN5TbD6fMs4DcETsgoUgwM7DVnXeKTQRqstXE5x",
  "key12": "2MhFbh2rfGNuJ6mkpEc16Mae1Y34rgkdGtC9fLxZisAS6SSJ9wwkhCagRRcrRRyb6pipeQsjhf7a8KgomrnaE9PG",
  "key13": "5WoDAsfB4ZrUk14gKC136VT47aVVuP1J9n4jCayTY2wB23F5ik8NKDnWmyviUX3u2JDe8BHAcvqNaNKYqYWFTS1s",
  "key14": "2YXRD9bzC31RQrVQRFy44kfE6y7nADdqHBwrfoD9T3ydbu8Z3mMVWsMUH1JFYusheUDLNWeDj1GywmitSWeBBdCi",
  "key15": "3AHSGQczQ5LZdGwahTvybAMgYkDDVTqj3128nzkBAUGPSK7U6eyXJEEsMYWyxQz9Zaca7JzWPB19f98UZ57G7pRQ",
  "key16": "5fyS8STF3VNPNct4V6mBrCb4R8C7JxzjozkAYVmurUzakQu2AcU7GCA1xxDnMFBbLAwKDPQC1fmPzYhnoQnQe6GU",
  "key17": "5VCEA3YnBedUhAcdo6GSyNr3BcwjZsfvzv6h23UczC3Vw4a1n1fJuKsy315CS9PkSSnXFW1o3cLVvNmVXB35CLrN",
  "key18": "4Nkb9SxizKaC178ypvB6CBhb8tnrtmyj2NyscPiEfbjMbSF25J1nHYVvWQfR4pRQbjnFiSaThD91ELjWKxAxQZ2k",
  "key19": "4Se7337aaBW8ww9BKt4Yoh12jKbHGAWZPEx5mJnR7bWCWwCW9RUNmxGSk5yq7qfuh2kK9xhVaJQDCp3Fv8fN3nv2",
  "key20": "1L9WUqBcanvmbxVnasjYBJjQYvhksGC5qactAULKkSVgMqRQ2Y4MTFN8PEsfSMDTMeFd3RG2ijEtEz1x3yNzLUo",
  "key21": "3tPd8HXVxfZn5WVqJoFkqMASiJfD96JA5DXEoPjPAvnDTGxUDvBGbgtkLZZGn2tDMDCX6o93aYPiuBxRRY1UtwZv",
  "key22": "4BvHbtSjkM96SnJnyau4qpVVZkssJ4f2DgixGYLJpSAuaj9j3DnkfnQUyFUHHMMXWFssEdYWiuxdr7aAGrBoBizx",
  "key23": "yCgoSS7KR9HFhwURevHRFsszwtBBreqeTCkxcdQNahjtvU8eEfu2omQFsNTidoZveqacLYinQM7KWPWn36A5kSA",
  "key24": "56N69DLWeVo2TkgCooGfyedb7iTuZnt7AqB4A6yweNkC7b5wSu1AVaxZfZiEUvuF17VmB487mo64WJbWvpubBcdP",
  "key25": "48LApgKfmndBUGidcfBZYQAYXMQiyXbm2YE5si7j3BJkYRrAeYYpSGZtxLM42AjWw1PBBjaxD8SMYNuCr3zvbrsT",
  "key26": "51gMU7TuLmMVWPN6ToaYbYvTp2JXBZjZyNyckq29Y8uR3gZyKZhoiZ6YsA5dgnjBVbWKHreQVRQLoq6JZxGFXiqk",
  "key27": "5eMJuc8jByaY7ZuGteqU6Ss43N6TVX1DUQJJxcgBWhbxQmhDK6Wss9qqdFrjY4nYW1yTX8TEEFpr45YG8ePB6y5A",
  "key28": "2hTGpnqroC13nHYnzuSN7irfLsXVoG8KeGFuAQzxVnTWAjHd4FjYBaukxedcQdjBpHidM9B29PwFaoKsBEbjp9j7",
  "key29": "5iHrpXzHeo8LKGV4GT1Aryqe51owfWNNaKprA7Ycu8LWboAq5QJgkzF63jHyBnGWxVCuiiitnQdCwzKcAxPG6sHX",
  "key30": "2nGsKKdNCSJaHjTnGEasXjtd2UweVMTcGWcGrQ32qQqMzzkruzFdLjv8P4uxG3FcPyPpyToS3Z5tC1fJ1Lc1HRTW",
  "key31": "56TWtGzEh4TTeQwxEH4QwZ2uyiC1VXtbbKuaF9wS9QwA3yNwm5vVBwSyie9oqCRPwDm1GTswM33dW16Buc2gsV61",
  "key32": "3JyPn6ieQm9fq396hne7kfPauSUJFeNeNktkKMKsQDxheepksgcLbgCXU7JavciawugrXsZMUfWaYpiuctNHn1Cx",
  "key33": "43WGeXMFVcUU7QBwdifCGnzfLeXipPzfvE1LZ6btBARzZNS1SJhqBQVgD7MKW3Sab9w52eXMDijYzXsMBSWUeqvm",
  "key34": "2g1UoH2BhbkYKTtdJ52qL7RRwAqBJE8YJUGWLV16gxEqzFfSrop5z1eBioLFQWDvP4h8WnvhKrs5MTr3Xznueo11",
  "key35": "5RdB8Nmn8nVjD1hSmTCses5H1YkXKWo5EDozTJ9CtWUC5tG4tSstTP4m9c1qGHVXKzCoX5xHTg9SzkLEEUfWNqnH",
  "key36": "2XQB4tMPh3etv4bFVdPTJwJXdsj4SbvUjNH9V9vHFmKjnqBqdZXyy8imVeVbbhSLma3YSdiHbXCqmajHqEyZgBtj",
  "key37": "kHNjmBP6kb81w6utGcCLg7snE6N8ZjTbH91HXGhwAqBB1chkyjBmtN4wm1pBZ3c2azJGrFZJXazAhi4mR5SvtUq",
  "key38": "UAPak7D9m6Amr6NSCkeofDRJZ3idbtcmtYVrYMRCjuWhH5MmGegvBU543VimtXrhmiTEpjanBwMsJ5QZZYqohEe",
  "key39": "3abLQ5Dp3eCawN2C7RcM1XzhNJg51vy63pXPCLrEwHNLs9mGtHAPZcNKDyjqGvX8SS9qY8dh37a6iHE3UTunace9",
  "key40": "2iYZ2AN67bb2sahJNye89uRvyd4sKwuxYd6E4jQRZhJ8vYCr41ffqJiyRnSnpD6kKH6s8UqrLMjzcPcKLL9niurF",
  "key41": "45EeztM2ms1rv3iB7qTEyb5sEtKFhb3NTXSyitswVUxhxfEc3Y8VX5sqSkFQkKHYLCzGQLMenu2nXuMPgbaDoHG1",
  "key42": "2nXT5rhCk5yDpUHhBGMJZT9WjpYdSjFerQ7GWMrjujscovWwcHoEgm2ca93jP8q57vLCMotBSbraQwHCQ72fn436",
  "key43": "zRfj2ABKC5sCMji4KEDwy6rCPNDDCcDrJxZX4m3awQ4N9TDW4nn3H9ffqMCzwG999NG1CCq1vkCjzmyANeN6ckG",
  "key44": "AoDi2PkYfVQocvw14cfH5psv96TMmBmEZSd9jpZW6BybGvpwmtH9wWQqZEu2nFQmU4yja97trxwsmAcW97HRctH",
  "key45": "2ADFRofFxDJwBDAxJHde5nmLGWcVoDsEgeBszdTFdEyZNk9buHhJM1CrgSksY5qMfGRQityKPMa4M8TfzWfmufYe",
  "key46": "5N6dCfSG3W5LTD2d33v8dtsaVT48QmXjPZDznGzNNqjfyFLTm8hKKXVJAnmp5Zb8F6GkCszseTYZDHnfWdAt691R",
  "key47": "4esZowst5XsYBv4RSiBBeGdtYeuTEmuXGvomvd9FmCw5dZFAje57qfA6C58ZrcRDjC457JX5KTddhsqEdXHCAqbm"
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
