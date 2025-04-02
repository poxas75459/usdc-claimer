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
    "sv1Qr3cTUYKhxZrwMXh1mfHrckRgrhPzzE5fikMTGHDpf1chk9Ls9bzuQUDvq2wfX4FcRFbcMXSefgfVarzDsi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kYcecBJ2J6RZFBnDk38Sqn4P9sd2nCBrArcSzVwzFJpk6tHwMUcyAHVibvtQtrmE7yFtSThJf8M2sNfemK5W795",
  "key1": "3EZuTKyNjtMbiW5bSQacWnv8keymxu6vxDEhjqFpybVg9wfM4fDakuzmRPsL7uk6QuTRN1cd1ro6aTfovHTwQZwR",
  "key2": "57UwxLd9aABqWFPsV7rTR6UMgM3CumeY77ZU2CH8oUQSwA4mxkFrACE87ZVwfLbPaaBvmEoAqL4drMwSCd3TBCGr",
  "key3": "34ScAj19sQtoFVPt5fvF1bXk3G9zGJNL71Mpg5k8XqLJsTFwF6qNRxh2mxbvYtS7uSCDzBeRv48noooBJM6Y1BiA",
  "key4": "3zhz6PMPZ9ZJjgbQa6qJGZVHYk8nB6VgTpdPwfpUCC9Kg7KfJpSkugPQ6eT4oKdcvT5yHbCpPysmj1Hse7a2oC1C",
  "key5": "3QvvFAPGrGVsSu9Xb2TUBw89yHo2JnnYEnYRufoUPnmq7mTxQXVQPfXGFeYByPfur6841zi9EPMnTNBRbm3c5tsW",
  "key6": "5DQ4SAazJ2mUVrV7oNMHHcmbYszoggRp4X3bn64AZoyMVWYk3Lc2i9jk4ZywJr1tidD22WRtW3LExENZcsyquSby",
  "key7": "djwonxhRo1VedZZovcXH9p7QKxtxZKAfzfAGxTk7MPTUczWLoVgB6rvHtaDN8YBZdENFtJGUUzzosb8vzc5SRZH",
  "key8": "471EWPEtn4mwrjj8z1CijTCwJdjgtd6skEpU2ZqB2FaxnKjmnmEFH6vFRuLm6KzuG8Hn3Lo9D7at19WoX95jHTi4",
  "key9": "2YkToEqCEFaWWMEWTwWb1S9WoGNnS6sYeqGNWfWERUSUGHQEHL6TBSh1Azkey6CiydU2bx6Urr2gYrow4b1fWWXR",
  "key10": "36q6b8uVj1tUqFAm1UeXz5PPgQNW5vEPb2goG14DN5ktB5Qs1T7Rn1VbjDVv3wzaACu7CftgfWpUtMda1fmX1GCn",
  "key11": "VNG8Eg77JxiyzvLmt2RK6fAbzLHxtMT7eaN46ij1d6GMF9uoBRfAiCeetRNNZxnKs4dFT8wboqJzF7NDeYuXPVD",
  "key12": "2AfECptMvvtqMpdMqS4UhwMVic8WrcFxioUNgXcHnQCd5eQ192XNH6rj9a6qJwuSTyE6TGWNGbFsAEnVBWhAU1kt",
  "key13": "2UafyLbg6aTqoEMDAa8QjUWSxZQYEkCQbcUYGcoWaArLG8FhokKSsjXmvCfJTcb8sbgmLz9oa6nxpx2sLppfjUbs",
  "key14": "39Crpoi3sRDpbgfcVxV7pfNRyGUAd5KxhtTwoKYSDbGEjgJifrDSxfnN6PS5DnZPS5HobCW7i2FhowxETfR9Mr5B",
  "key15": "3AW3Q5oHjWE5586zz36hvRsw5noZqTnKY525QmKVGsfbxWoucct1obw2W9zsAW7yDb4uHPm7Hc9d6MfrfGiTnZHJ",
  "key16": "42upTnzuEdwFTyt3m4Zauxc2f6n9G2gRop1F1sXStDoe4MYHnAj7BM72a72fLt26xUqHL5jaLraDp7FNmLqh4iSX",
  "key17": "3Sbuuh4VeKDvUWfvChaoXvThWEuSnRoyBLoRneVVke8iyLyykbhT5M7i4zfeTZoXEwfV28WSb6QS7poYqDckEtgv",
  "key18": "4iwDZJQ4ucMn3Q8VFzzQvxMv539r9A6LbJtTnsPaWQknUjxcMnmWo4TsJEaQUBZs8VM454pFXqqw3AXTuByvrmK2",
  "key19": "2ySWqcUgdnhKWnE6nXFBqoHXf3Tz9SjFoWSEkAeRgphyNVHDzDCsxyWBVE7doYSgDLNqKVtNnBBkj5Lkb5k4LJhT",
  "key20": "5BPFmz1aQGregpVXUjFg7mAuJZfKN3dNcUVPtEWTNXutnetfXpRaSnVRrzSnfJjmmMCtNg4q72xeuKehdzjcyY4W",
  "key21": "3cv28myUu5D2RbJFSppijBwmpaJVZpv7asLRrbXsbGY1dBCTVjcnipz6TbfzkPMveDRZdMynXnkBR1jzuvRg55FR",
  "key22": "pthywcHgJTonPjyQV1823uVkg5FLabKJLBwbpZpdAz4uhZJwKPNz29ixsjaCurmmhVQ8yKZccVi4nbkU3SiUkAx",
  "key23": "2Axi7EVPhDVyUTrsX3cSr9YbZUsnP5n3A8deDzuon8V4XrLbW6ey1kVtexR9jR31FGdzRkxxhjTwTAt6DmNqvb85",
  "key24": "2EX2EwpZTBvQYFq5DnphAYvnKTBvgGFDXYaSFwpenQi17KQNezk93cBaoTLcUyJhpFo8Eavanw5Rud1DPEGvZtMm",
  "key25": "2GQ43J72e5MSSLLBU49BBRttt3eukyR2fjT1QogyqwGx6VqDepfbJ4XkwJkWyRT9MnR7HgyJgThoKBXTHm5a2oTD",
  "key26": "3goPN4qdTEQrZXZg5mxMnuVTMmpwoAuCMWMwLzg6pPkVGtRwakTZ9DLYkJ8R2WBdiWQrKTJ8JeTrpYtcDBnevBzW",
  "key27": "3SdEuay6NKiAE1YzmiJ6JjuiLDNo8QTpQVBSnvQuDZpDGi7ohND5L2tRXAqtkZDc3DDKWx3MhsYkgobSA2kraUYT",
  "key28": "3KmZPUoQ8sDuTR7XiNZLPJo3wuxx8mARa695aVqciwmnHXvLLEdGDqefC2k2Ppx8ERL2LpnWNZ3XBSfSAGYFGhcS",
  "key29": "4Ku86d7yMeo3fbaiyftn9P2sVf24s4YD8gL4ovCD7mkW73fifKU4U1D9vca6mXoMkhK7n9wF3N4mUbtS2BUA5HHZ",
  "key30": "2fonYD1zVAMpDvNE97Zaa8gqPP3wfyevreD2kebVRzggUCde64RgSv9BXXPBGrxPJ1ntNHUxdQBEei3GHbHW9Hod",
  "key31": "5rYXE9ZpbRf7cEjhv3mo91wifZFhq29YeZHCGeUWzH2hz66DNJPp2p8qHbYJHZKPecj75gNUXFKeyvAjv5AJdKg3",
  "key32": "5ozsZJZUJeXHMDgkxVGMYqNrmAupChxQ2wASxJaszuRr85kz2wEm9KEdH9rzyQtJZmoL2beVidq8o4L7Vf2vh3Wt",
  "key33": "3kzsPxPpVyjE15XDVoPVHta7dm5ugqADgjSWQVAaDG2mpcdsP7DLXQgXxvZjCDtVCLxMfnuEEXMFAoNEUxSu4xTu"
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
