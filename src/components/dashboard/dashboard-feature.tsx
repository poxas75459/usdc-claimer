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
    "5HNyVf64bRutoYz7URYmo8yEV3BnfRnzKXQaw5bexZGtNMP1VfP5iCcRr3ixafkANc9TJwhr7jpgS6PcfkiQVkAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5gdB4oNWuuQEvuwKFrzTTqSTbkwVLNK3CgcTS73VBXbUcw76NGzJTTo6F6Ek3DCeTTSSfJRa9BdgELY5JHVkpo",
  "key1": "5VG35T1zKYVYJoHs6uYc858Gok3dozAVde9vzaYCEsMyEJYsPDc9i8fF4iyudNpZzoPqhsWQK4Sh2yE56UaXhopV",
  "key2": "5PZQ6kzgguLwaYpJB3G4eEZnLXRhRMiAxf4mPxEkcVVrKSnSj12gDDTfzfuLN65NPVntbAMtUtJSb1TJ66vduvCE",
  "key3": "3tQur7wdBPfiPXQUbV6Wn3rdhjyLKX3mG9aPb7srEeH3zPpeFBwAVis6k4gGFBtxCGKqZGqPrDhx46WwwN9KsNMY",
  "key4": "5wgZPSjF8ADhx1c21xLi77jMA23822YKEWTUn6TSGG7JTQCXncKbsSyRnZBJKWBrwDMGhxQaWMDBDctfEx9vjzPp",
  "key5": "MaDVMgTros6aaeThr1HVYti2SKG2LJ7XD3YiM7ig6zHUiuTT7MgpUBwB2mvTUeyRfHkG3ouYYvbsLFRjdHErRxk",
  "key6": "3y8hqNveGaccekxAAqFLiDckNaVLqRrvifAcXfbJp3f5R21upTGJh4ajGA6kQpua43gRfCr4f3fz86AupnPmPHKj",
  "key7": "2KBgzZwvcPrgkWAh94eARtTZp9hpECvbzKqUyPSfVrJGv9Gkbu2i33AjNKMQY4kVNeKeEbKptGn87X13SVzKGEr3",
  "key8": "3jMzzXRqwMCmVKL3riBCkobLzpVoujXS1eKaZo9CSKHdTocXjDPqAwMqB84pzBk3FnKkAq9eHYSyKJvLD9TbyAtF",
  "key9": "2Vb3eYAB3vpPGJmTvU5rh3FE1pqAJEDtdKWeK8JEc4XCTQnjjUgPEkuByse5s1DoYrvnnzcFVBrmynEh33UntFBw",
  "key10": "3iWR5UzswSyktba2HDFcnwhwvQbw8Ai5DPrrr92r4HwQvnuoV5CzuLjLWBUBpYF7fPA54VsKKajF1LDxfX5jD3Kt",
  "key11": "f1yhJeQsSW3vVybvZ3RH47tb1mf8Xnooi2qngJKcTSbBcWNAmKkEe6MkGYy2eqccYcwfix9YVJR4knrGhxp3dUP",
  "key12": "342L2ji23QtpqFtrAQv1S7PvpSH2JfsQvaZqXox2ErNDxGBB9ZvbLHJ9rw54DhSDjhhNnKGD8ME3WQW7udhboz9P",
  "key13": "XxnUNcubujRH9xXttg87g2bsHkqkBWfstV9cbNWsNNf9s4KhgBaJ6WtkPYcHEcwxCfFkZKbEWaZJnvLB2wtVv8S",
  "key14": "2EweuC9CVbXs25UwfauPLKVyFjCpptzb4iKxgJEk9kxr22xJzaAeBeQvvkmFFdnFpRGVEcsTuv8eYBkVa6hriSQJ",
  "key15": "3rw6WYZakpyKkSW4ozGuzf9x3K9duhTRdAAGaHzMx3qFzLLtDakeAR4RXQFfDFuBMyrMSgYuVnmkVZmu3qock3tF",
  "key16": "4kzSdXouqbbFBzBtdmzNeDVevqXwUyq53CR4tiKCmAxLLan3owyjBYf7S9ULjPASSs6CzmAWRwn6QrnTvFJb7gB",
  "key17": "2eDZXgDSTR6wzGrRxCT28PfSsbQxHD5hSG5sGiXFtVNFxs4VVDok2tCwGBEfRaxi1dir97AcrL9wmWH39LpE9RA6",
  "key18": "G97A3K2cLZppMjY6dofXTU7RHajMEbuSbomwLP2oLAdJ3LQJFjvrHW3EdqBZ7WYK6AeryRFBgAcHUjCPoRWrGwN",
  "key19": "1PUEYJYT8cx9ZUQ4KaAcegvrMHAGKgMf2kH3WE5irmpp3eQ8Gxrc4bPVg5rJ6i9UCbYz25wTJpUZ1abS77RV9nx",
  "key20": "5GRtVLc8Gyo1c97WiVbyVB514zzcpZ2xpnQuYtFz4by6y4nk3D6Uh92JZFuTD2Zo88aMURp1zTF2rGWV5AtZaohn",
  "key21": "3kgTajfkZxXT5ErPk7LAzfBjBJk7rfuSMWsNwMbVPjRvYc61g9y9JV4uLagwphuW7toGMTN5s6tZJerk48sXG7mn",
  "key22": "5jmEQTx94HT3Wu6GZBexHDZQmiYweMwAkD9bV8j7Q8FUXHrNWs5b6dfXuo4UDJf8QDD7A1njT6Eakid1VFfhBBVp",
  "key23": "5eyre4b1SioBw3YF5L4R8FYttwt786dG9PocGAcuAfRGtdkFV5DkrmgqYngfsbeso7eybBdG6uf3Zju34ioe7Qvp",
  "key24": "3gnEj4evySFZBVL8iWEuedJp8mtVSBBAqBgt1pA8zhJW8g8GunVdX98QK6R4ZZEhoKdypuDkjcLrKN2FtbHuDgeR",
  "key25": "4TY7VVWtQnyj3KnC87TwC3vB9hRkt9cRmxVwkVbkXE6ji3XtGQ8uWkCPUs5LyWx7aP3BsKU8rV6fyDYramWQptp4",
  "key26": "2GasEuz7DDa2vdBNmMCyK9RdQncBsCkJwHFzfGYv54h9YmypeD5msakZKWDT5D4ocnKWguxrGPU1r6rr3jLiXNS3",
  "key27": "2qBAd5vkhgsxaiDyk2DcHtd1WXCVPtrc4gCHnPBeoL65Rj3HpMwhRKUoLHUt747NV3q7WJcaK5z9PkDstGLstpFh",
  "key28": "3PUz8acRvkEpiqh2xiwaULkYDPZNw4DN236bTTbYeJy6WP2vjy1qZWqAwX1NQKCPqRu8cVF2FeSfmtavGMLJJ44r",
  "key29": "2jfdNJiH6D8w3eTDGGE7THir1c2AGN2pphsdGuqRws3dZB3hNrfUmaFCFHhn8urceS9QDR2xQb6UWJYZvztJAZ3w",
  "key30": "4qCn4P8ybmYePaXFShLutcT4MPj7iLvzkQzCHnq5yeMD4Zoe4TdjGLDXBm6FugJbCYcPBpfrN9iZ89R8uau1ud7D",
  "key31": "4XZKMMX1pJysAjuoU1qbHeFHdGZQCDAGQW21hADBncqUXgLowVYEbGKthqaokmBjk6HnC7vRp8fpSY4ufF6TxNju",
  "key32": "2zmkxG7UmfqzZDjkV4xhKXJuR3KvZpRfR6F6fMpzuwG2xJjyrMhjr5dDxLj9BvCGeR5bHKc1P6ZDQJ9gejC5gujt",
  "key33": "3g2WHdSv5Zr8pTFw1NmtMSgJeSCFoN6z24nMbYf7Md6uzRdyKS9sdwrAYSKj38ByyCwnCjvh11uJpHQuDgki3tyD",
  "key34": "5NMGX3GgD1a9MdSNBtfBT5urAJ9Jhnmzfvk51LRU5KACTdqcdjTzGaZChWHKe7WzyWjJaWyTbXg5BxkKNMTggQ9g",
  "key35": "4fDTkrnPVrfGJukYQ8QZzUowHCQxwEdUrt6HK2ycf7dKBipHaN5v2ceZU1MEPsizMUSVt63Xggpnf6g4tPD7DS54",
  "key36": "3HAhZucY5j2tVVnkV1RHKZ9MSrt5iG1d72jVe44Y4JqAh4Sx4vaSqQVtrKJdd8kw5QP34X4MpiCXzfk1W86ri9Gu",
  "key37": "62MKvbFRYQDfZR3359z4Am5sR1CUUJHPFcdbxuw4LBLDHji5pFjNkdjGo5wJpREABYrAt2k4VkbLcMAm73YWG6Q9",
  "key38": "UKP3PRjshj2FrpvkobfnZKkneUdpbNF2c6Nro14v5WxRTmvSFr6N9FJvrvsCYt1twwz5sjN4vSdDqwBCAUT7tyN",
  "key39": "C4TvpsVkNdyUDnXaeXnj8hJ9oi1DCEsY4RzmqQYHg59aZvL5ZsgzqWrGqBwMUkg1Bs5AAeY34U1V5P5vJrMRfaC",
  "key40": "5cGRPuu6kxrshvop9VgEvYUcaw4V6JYiaiQQPG8KEgDPS1b2uGjTqxVZawDnNuyPehCbhAuYbtorQ8U5kSkkAWiW",
  "key41": "TLB22rdQVG8HQJkhTFnrvAYR8fKkr3v5JnyhY1Dk171PQfTAnvUFg29iB7NpjLx5CQMriDazUw273MVYujZuPgt",
  "key42": "5o9KQYPTPW686tcax6fTZYBLofkwncCmEBqUbDYuRUPhmfkDK7LPgaxFKeYDdJLvXa9H3VRB3jsy3FouoB8XEmE4",
  "key43": "2DiECEpERerr4WmvwZvX9BCXRKQmnwg2ouYPKNy6EVrCrm4GZjWVmALXiKbg6NqxYVzSXUVqk66SZhPw75f3KeZH",
  "key44": "4eHTcFqCrq7hwZz6cAd46cXxmmx2mn81yg4QXRGEmm38EuCFkCsp31FAk4xTh8Ltbf17sTWAH7wZDCkysU8gF3Vr",
  "key45": "4WmGVaEtw4TcZd1AXmoKZGhmpCNAxV3mTAAWbUoGQ5tWhWZxNtKEahy5BbgHHeX5AvK6i4hUwBhSUdJpUyNrUp47",
  "key46": "4wEmtHK5omjYpq28XiCaucm4ncL8wSgHFbgWVTAL9WsJjyPcrXRVEjGLyXPy5PBzgpqRnACXUBHKSkgtPvWCP3WH",
  "key47": "1iPbYXCgxY56q95RcdVdCDuEDxmXMWn64C8u2P4kszZmfVYGe9bjmiwwsUMUJEtaJ6p4c3cwzUYcGv5V1bS4KaK"
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
